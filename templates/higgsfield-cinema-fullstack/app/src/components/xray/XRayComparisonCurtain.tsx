import React, { useState } from "react";

export interface XRayComparisonProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  beforeProvenance: "Verified Photograph" | "AI Conceptual Render";
  afterProvenance: "Verified Photograph" | "AI Conceptual Render";
}

/**
 * Pointer, Touch & Keyboard Accessible X-Ray Comparison Curtain
 * with mandatory provenance badges so AI renders are never misrepresented as client photos.
 */
export const XRayComparisonCurtain: React.FC<XRayComparisonProps> = ({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  beforeProvenance,
  afterProvenance,
}) => {
  const [split, setSplit] = useState(52);

  return (
    <section style={{ padding: "72px max(20px, 6vw)", background: "#0E1115", color: "#F2F0EC" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16, marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {[15, 50, 85].map((preset, i) => (
            <button
              key={preset}
              type="button"
              onClick={() => setSplit(preset)}
              style={{
                minHeight: 44,
                padding: "0 14px",
                borderRadius: 6,
                border: "1px solid #28303B",
                background: Math.abs(split - preset) < 10 ? "#64B6A7" : "#161B22",
                color: Math.abs(split - preset) < 10 ? "#0A1110" : "#F2F0EC",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {i === 0 ? afterLabel : i === 1 ? "50 / 50 X-Ray" : beforeLabel}
            </button>
          ))}
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "IBM Plex Mono, monospace", fontSize: 12 }}>
          <span>Split</span>
          <input
            type="range"
            min={0}
            max={100}
            value={split}
            onChange={(e) => setSplit(Number(e.target.value))}
            aria-label="Compare before and after"
            style={{ accentColor: "#64B6A7", minHeight: 44 }}
          />
          <span style={{ fontVariantNumeric: "tabular-nums", width: "4ch" }}>{split}%</span>
        </label>
      </div>

      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 10",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #28303B",
          userSelect: "none",
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1 && e.pointerType === "mouse") return;
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
          setSplit(Math.min(100, Math.max(0, pct)));
        }}
      >
        <img src={afterSrc} alt={afterLabel} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 ${100 - split}% 0 0)`,
          }}
        >
          <img src={beforeSrc} alt={beforeLabel} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${split}%`,
            width: 2,
            background: "#64B6A7",
          }}
        />

        <span style={badgeStyle("left")}>{beforeLabel} · {beforeProvenance}</span>
        <span style={badgeStyle("right")}>{afterLabel} · {afterProvenance}</span>
      </div>
    </section>
  );
};

function badgeStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    bottom: 14,
    [side]: 14,
    padding: "6px 10px",
    borderRadius: 6,
    background: "rgba(14, 17, 21, 0.82)",
    border: "1px solid rgba(255,255,255,0.14)",
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: 11,
  };
}
