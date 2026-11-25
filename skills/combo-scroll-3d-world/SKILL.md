---
name: combo-scroll-3d-world
description: >
  Combo 2 Orchestrator: The Premium Scroll & 3D World Experience (v2.0). Use when building Apple-style product
  pages, scrollytelling narratives, or scrollable 3D spline-camera worlds. Pairs with preset `atmospheric-cinema`
  and starter `scroll-3d-stage`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🌊 Combo 2: The Premium Scroll & 3D World Experience (v2.0)

* **Recommended Preset**: `.\install.ps1 -Preset atmospheric-cinema -OutDir .`
* **Runnable Starter Scaffold**: `.\install.ps1 -Template scroll-3d-stage -OutDir .\scroll-site`

---

## Single-Engine Scroll Modality Matrix

Pick **ONE** primary scroll architecture (do not combine two competing smooth-scroll or pinning engines):

| Narrative Goal | Primary Engine | Mechanics |
| :--- | :--- | :--- |
| **Editorial Filmic Scrollytelling** | `scrollcraft` (`scroll-craft`) | Pinned HTML/CSS chapters, frame-scrubbed video/canvas, color-shifting ground, typographic assembly |
| **Continuous 3D Brand World** | `scroll-world` + `gsap-scrolltrigger` | Unified Three.js scene where scroll progress `[0..1]` interpolates a `CatmullRomCurve3` camera spline + lighting moods |
| **Apple Hardware Blueprint Reveal** | `dimensional-drawing-motion` + `gsap-scrolltrigger` | Self-drawing SVG extension lines, dimension callouts, and exploded spec sheets synced to scroll |

---

## 3-Phase Execution Pipeline

### Phase 1: Act Choreography & Scroll Budget (`scrollcraft` / `scroll-world`)
* Structure into **4 Acts**: Act I (Establish World) → Act II (Deconstruct Mechanism) → Act III (Proof in Motion) → Act IV (Resolution & CTA).
* Alternate **Pinned Scrubbed Stages** (`150vh–280vh` max per pin) with **Natural `100vh` Reading Beats** so the user never experiences scroll fatigue.

### Phase 2: Timeline & GPU Engineering (`gsap-skills` + `Lenis`)
* Register plugins explicitly (`gsap.registerPlugin(ScrollTrigger)`) and scope inside `useGSAP()` or `gsap.context()`.
* Sync `Lenis` to GSAP's ticker (`lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);`).
* Animate **compositor-only** properties (`x`, `y`, `xPercent`, `yPercent`, `scale`, `rotation`, `autoAlpha`) or WebGL uniforms—never `top`, `left`, `width`, `height`, or dynamic CSS `blur()` during scrub.
* Use `scrub: 0.7` for physical inertia.

### Phase 3: Tactile HUD & Reduced-Motion Fallback (`motion-design-skill`)
* Add a minimal scroll-progress rail / chapter indicator (`tabular-nums`) and magnetic foreground CTAs (`Motion Primitives` / `Nohira Motion` / `Scrolltide`).
* **Mandatory**: Wrap all `ScrollTrigger` pins inside `gsap.matchMedia()` so `(prefers-reduced-motion: reduce)` collapses pinned stages into clean static editorial sections.
