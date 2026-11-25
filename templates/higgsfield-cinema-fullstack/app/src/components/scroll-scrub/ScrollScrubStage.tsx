import React, { useEffect, useRef, useState } from "react";

export interface ScrubChapter {
  id: string;
  indexLabel: string;
  title: string;
  body: string;
  specTag?: string;
}

export interface ScrollScrubStageProps {
  desktopClip: string;
  mobileClip: string;
  desktopPoster: string;
  mobilePoster: string;
  durationSec?: number;
  chapters: ScrubChapter[];
}

/**
 * SSR-Safe, Data-Saver & Reduced-Motion Aware A4 Scroll-Scrub Stage.
 * Scrubs a GOP-4 encoded MP4 smoothly across semantic HTML chapters.
 */
export const ScrollScrubStage: React.FC<ScrollScrubStageProps> = ({
  desktopClip,
  mobileClip,
  desktopPoster,
  mobilePoster,
  durationSec = 10,
  chapters,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

    const syncFlags = () => {
      setIsMobile(mqMobile.matches);
      setStaticMode(mqReduced.matches || saveData);
    };
    syncFlags();
    mqMobile.addEventListener("change", syncFlags);
    mqReduced.addEventListener("change", syncFlags);
    return () => {
      mqMobile.removeEventListener("change", syncFlags);
      mqReduced.removeEventListener("change", syncFlags);
    };
  }, []);

  useEffect(() => {
    if (staticMode || typeof window === "undefined") return;
    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;

    const updateFromScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
      targetProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const idx = Math.min(chapters.length - 1, Math.floor(targetProgress * chapters.length));
      setActiveIdx(idx);
    };

    const tick = () => {
      currentProgress += (targetProgress - currentProgress) * 0.14;
      const vid = videoRef.current;
      if (vid && vid.readyState >= 2 && Math.abs(targetProgress - currentProgress) > 0.0005) {
        const dur = Number.isFinite(vid.duration) && vid.duration > 0 ? vid.duration : durationSec;
        vid.currentTime = currentProgress * dur;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [chapters.length, durationSec, staticMode]);

  const activePoster = isMobile ? mobilePoster : desktopPoster;
  const activeClip = isMobile ? mobileClip : desktopClip;

  return (
    <section ref={containerRef} style={{ position: "relative", background: "#0E1115", color: "#F2F0EC" }}>
      {/* Sticky Full-Viewport Media Layer (No GSAP pin-spacer blank band!) */}
      <div
        style={{
          position: staticMode ? "relative" : "sticky",
          top: 0,
          height: staticMode ? "72vh" : "100svh",
          overflow: "hidden",
        }}
      >
        {staticMode ? (
          <img
            src={activePoster}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <video
            ref={videoRef}
            src={activeClip}
            poster={activePoster}
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(14,17,21,0.86) 0%, rgba(14,17,21,0.35) 55%, rgba(14,17,21,0.72) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(14,17,21,0.75)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#9AA3AE",
          }}
        >
          AI Conceptual Render
        </span>
      </div>

      {/* Semantic Chapters in Normal Document Flow (100% Screenshot & SEO Safe!) */}
      <div style={{ position: "relative", marginTop: staticMode ? 0 : "-80svh", zIndex: 2 }}>
        {chapters.map((ch, idx) => (
          <article
            key={ch.id}
            id={ch.id}
            style={{
              minHeight: staticMode ? "auto" : "95svh",
              display: "flex",
              alignItems: "center",
              padding: "48px max(20px, 6vw)",
            }}
          >
            <div
              style={{
                maxWidth: 480,
                padding: 28,
                borderRadius: 12,
                background: "rgba(22, 27, 34, 0.82)",
                backdropFilter: "blur(12px)",
                border: idx === activeIdx ? "1px solid #64B6A7" : "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "#64B6A7", fontVariantNumeric: "tabular-nums" }}>
                {ch.indexLabel} {ch.specTag ? `· ${ch.specTag}` : ""}
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", lineHeight: 1.05, marginTop: 10 }}>
                {ch.title}
              </h2>
              <p style={{ color: "#9AA3AE", lineHeight: 1.6, marginTop: 12 }}>{ch.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
