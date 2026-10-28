---
name: combo-scroll-3d-world
description: >
  Combo 2 Orchestrator: The Premium Scroll & 3D World Experience. Use when building Apple-style product pages,
  scrollytelling narratives, or scrollable 3D brand worlds. Chains scrollcraft, scroll-world, GSAP ScrollTrigger,
  motion-primitives, and Scrolltide/Nohira Motion patterns.
license: MIT
metadata:
  author: RLealz
  version: "1.0.0"
---

# 🌊 Combo 2: The Premium Scroll & 3D World Experience

Use this orchestration workflow when building a narrative-driven, scroll-choreographed website or a continuous 3D camera-path landing page.

---

## Phase 1: Narrative Pacing & Scroll Grammar (`scrollcraft` / `scroll-world`)
1. **Map the Camera & Scroll Budget**:
   * Divide the page into **Acts** (Act I: Hook & Establish World → Act II: Deconstruct / Explode Mechanism → Act III: Proof in Motion → Act IV: Resolution & Action).
   * Alternate between **Pinned Scrubbed Stages** (`150vh–300vh` scroll distance where scroll progress drives a timeline or 3D camera/object state) and **Natural Reading Beats** (`100vh` unpinned editorial sections so the user never feels trapped in scroll-jacking).
2. **Choose the Rendering Medium**:
   * **DOM + Shader Hybrid (`scrollcraft`)**: Crisp typography, pinned SVG/canvas layers, and hardware-accelerated transforms.
   * **Continuous 3D World (`scroll-world`)**: A unified Three.js / WebGL scene where scroll progress interpolates camera splines (`CatmullRomCurve3`), lighting moods, and HTML overlay waypoints.

## Phase 2: Timeline Engineering (`gsap-scrolltrigger` + `gsap-performance`)
1. **GSAP Best Practices**:
   * Always register plugins explicitly (`gsap.registerPlugin(ScrollTrigger)`).
   * In React/Next.js, wrap all animations inside `useGSAP()` (from `@gsap/react`) or `gsap.context()` for automatic cleanup on unmount.
   * Animate only compositor-friendly properties (`x`, `y`, `xPercent`, `yPercent`, `scale`, `rotation`, `autoAlpha`)—never animate `top`, `left`, `width`, `height`, or heavy CSS `filter: blur()` on large DOM nodes during scroll.
2. **Smooth Scrubbing**:
   * Use `scrub: 0.6` to `1.2` for weighty, physical momentum on pinned timelines.
   * Pair with `Lenis` smooth scrolling synchronized via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker`.

## Phase 3: Micro-Details & Reference Injection (`motion-primitives` + `Scrolltide` / `Nohira Motion`)
* Layer tactile foreground UI details—such as progressive blur headers, magnetic cursor triggers, or scroll-progress HUD indicators—using `motion-primitives`, `Scrolltide`, or `Nohira Motion` patterns.
* Always include a `prefers-reduced-motion: reduce` fallback that collapses scrubbed pinning into clean, static editorial sections.
