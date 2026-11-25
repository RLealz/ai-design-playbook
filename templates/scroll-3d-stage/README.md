# Starter Template: `scroll-3d-stage` (Combo 2)

4-Act spline-camera 3D scrollytelling stage built on the **`atmospheric-cinema`** preset.

## Built-In Engineering Guardrails
- **Dual Run Mode**: Runs immediately in any static server via ES `<script type="importmap">` **or** with `npm install && npm run dev` (Vite).
- **Lenis + GSAP Ticker Sync**: Zero jitter between smooth scrolling and `ScrollTrigger` (`scrub: 0.7`).
- **3-Point Studio Lighting & DPR Budget**: `Math.min(window.devicePixelRatio, 2)` + `IntersectionObserver` loop sleep.
- **Reduced Motion**: `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` cleanly disables scroll-scrubbing when requested.
