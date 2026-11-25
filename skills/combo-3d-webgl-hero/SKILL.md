---
name: combo-3d-webgl-hero
description: >
  Combo 3 Orchestrator: The 3D, WebGL & Isometric Hero Section (v2.0). Use when building interactive procedural
  Three.js heroes, custom GLSL shaders, exploded hardware cutaways, or isometric SVG+WebGL technical illustrations.
  Pairs with preset `obsidian-precision` and starter `interactive-cutaway`. (For Blender 5.2 studio assets, mascots,
  or game sprites, route to Combo 11 `combo-blender-game-assets`.)
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🧊 Combo 3: The 3D, WebGL & Isometric Hero Pipeline (v2.0)

* **Recommended Preset**: `.\install.ps1 -Preset obsidian-precision -OutDir .` (or `industrial-blueprint`)
* **Runnable Starter Scaffold**: `.\install.ps1 -Template interactive-cutaway -OutDir .\hero-3d`

---

## Single-Engine 3D Hero Decision Matrix

Select **ONE** primary visual modality based on input assets and domain:

| Subject Matter | Primary Skill | Output Artifact |
| :--- | :--- | :--- |
| **2D Product/Object Photo → Procedural 3D** | `img2threejs` | Zero-GLB-download TypeScript `THREE.Group` sculpted across 8 passes (`blockout` → `optimization`) |
| **Exploded Hardware / Mechanical Simulator** | `cutaway` **OR** `teardown` | Interactive Three.js exploded-view assembly with per-part isolation buttons & callouts |
| **Architecture / Cloud / Machine Isometric** | `anatomy` **OR** `dimensional-drawing` | Ultra-crisp isometric SVG + optional WebGL shader glow (`anatomy`) or Apple CAD spec sheet (`dimensional-drawing`) |
| **Abstract Shader / Particle / Studio Hero** | `threejs-skills` + `3dviz-pro-max` | Custom vertex/fragment GLSL shader, raymarched glass, or recipe-backed R3F/Three.js hero |

*(Need headless Blender `.glb` modeling, ~25 KB `wobnimo-mascot`, or `spritecast`/`pixelfx`? Use **Combo 11: `combo-blender-game-assets`**.)*

---

## 3-Phase Execution Pipeline

### Phase 1: Geometry & Material Construction
* Prefer procedural PBR materials (`MeshPhysicalMaterial` with controlled `roughness`, `metalness`, `clearcoat`) or crisp custom GLSL uniforms over unlit flat meshes.
* Keep hero triangle budget `< 80k` tris on desktop and `< 25k` on mobile.

### Phase 2: Studio Lighting & GPU Budget (`threejs-skills` + `3dviz-pro-max`)
1. **3-Point Studio Rig**: Key `DirectionalLight`/`SpotLight` + contrasting Rim/Back light for silhouette separation + soft `HemisphereLight` fill. Never use `AmbientLight` alone.
2. **DPR & Lifecycle Discipline**:
   * Clamp pixel ratio: `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`.
   * Pause `requestAnimationFrame` via `IntersectionObserver` whenever the hero leaves the viewport.
   * Dispose geometries, materials, and render targets on unmount.

### Phase 3: Contrast-Safe DOM Integration (`/genjutsu:cast`)
* Frame the 3D focal object in the right `45%–50%` of the viewport (or behind a radial vignette mask) so headline typography and primary CTAs maintain `≥ 7:1` contrast.
* Add damped pointer parallax (`lerp(current, target, 0.06)`) with automatic idle breathing when untouched.
