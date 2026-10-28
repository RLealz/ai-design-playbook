---
name: combo-3d-webgl-hero
description: >
  Combo 3 Orchestrator: The 3D, WebGL & Isometric Hero Section. Use when injecting interactive 3D models,
  procedural Three.js scenes, custom GLSL shaders, or isometric SVG+WebGL technical illustrations into a hero
  or feature showcase. Chains img2threejs, anatomy, threejs-skills, 3dviz-pro-max, and genjutsu:cast.
license: MIT
metadata:
  author: RLealz
  version: "1.0.0"
---

# 🧊 Combo 3: The 3D, WebGL & Isometric Hero Pipeline

Use this workflow when elevating a hero section or feature showcase with interactive 3D graphics, procedural geometry, or technical isometric illustrations.

---

## Phase 1: Select the 3D / Visual Modality

Pick the right engine for the subject matter:
1. **Procedural 3D Object from a Reference Image (`img2threejs`)**:
   * Best when you want a zero-asset-download, code-only TypeScript `THREE.Group` sculpted through 8 passes (`blockout` → `structural` → `form` → `material` → `surface` → `lighting` → `interaction` → `optimization`).
2. **Interactive Isometric System / Machine Illustration (`anatomy`)**:
   * Best for architecture, hardware, developer infrastructure, or mechanical explainers. Generates ultra-crisp isometric SVGs with interactive callouts, exploded views, and optional WebGL shader overlays.
3. **Full Three.js / Custom Shader Scene (`threejs-skills` + `3dviz-pro-max` + `ThreeUI` / `HorizonX`)**:
   * Best for particle fields, raymarched/GLSL backgrounds, interactive globes, or custom lighting studios.

## Phase 2: Lighting, Camera & Performance Discipline (`threejs-skills` + `3dviz-pro-max`)
1. **Three-Point Studio Lighting**:
   * Never rely on flat `AmbientLight` alone. Combine a warm or cool **Key Light** (`DirectionalLight` or `SpotLight` with soft shadows), a contrasting **Rim/Back Light** to separate the silhouette from the background, and a subtle **Fill/Hemisphere Light**.
2. **Responsive Framing & Device Pixel Ratio**:
   * Clamp renderer pixel ratio with `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to protect 4K/Retina frame rates.
   * Pause the `requestAnimationFrame` render loop via `IntersectionObserver` whenever the hero canvas scrolls out of view.
   * Dispose of geometries, materials, and textures on component unmount.

## Phase 3: Seamless DOM Integration (`/genjutsu:cast`)
* Never let the 3D canvas fight the typography for contrast.
* Use subtle radial masks, vignette shaders, or asymmetric camera framing (positioning the 3D focal point in the right 45% of the viewport while keeping the left 55% high-contrast for headline and CTA legibility).
* Add subtle pointer parallax (damped `lerp` on mouse move) so the scene feels alive before the user even clicks.
