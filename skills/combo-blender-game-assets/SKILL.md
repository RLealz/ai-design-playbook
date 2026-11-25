---
name: combo-blender-game-assets
description: >
  Combo 11 Orchestrator: Blender 5.2 Studio, Living 3D Mascots, Isometric Sprites & Playable 3D Worlds (v2.0).
  Use when modeling/rendering studio 3D assets in Blender or Crucible, creating interactive ~25 KB 3D web mascots,
  generating 8-direction isometric sprite sheets & pixel VFX, or building playable Three.js WebGL worlds.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🎮 Combo 11: Blender 5.2 Studio, Living 3D Mascots & Playable Assets

Use this dedicated 3D & Game Asset pipeline when going beyond lightweight web hero sections (Combo 3) into **studio 3D modeling/rendering, living brand mascots, 2D/isometric character sprites, procedural pixel VFX, or playable Three.js experiences**.

* **Install Combo**: `.\install.ps1 -Combo blender-game-assets -Target antigravity`

---

## Single-Engine 3D & Asset Selection Matrix

| Asset / Experience Goal | Primary Engine | Deliverable |
| :--- | :--- | :--- |
| **Headless Blender 5.2 Modeling, PBR, Rigging & Render** | `blender-skills` (`blender-core` + 27 specialist skills) + `mcp-for-blender` | Clean `.blend` / Draco-compressed `.glb` / Cycles & EEVEE Next studio renders |
| **Iterative Critic-Driven 3D Visuals** | `dream-loop` **OR** `crucible` (`build-crucible-scene` + `render-crucible-media`) | Subagent visual-critic-verified 3D render (`dream-loop`) or Crucible HDRI/fog scene |
| **Living 3D Web Brand Mascot (~25 KB)** | `wobnimo-mascot` | Interactive React/Web 3D character with 10 behavioral states (`idle`, `thinking`, `speaking`, `celebrating`, etc.) |
| **8-Direction Isometric Character Sprite Sheets** | `spritecast` *(+ `pose-library-design` + `character-animation-qa`)* | Camera-locked 3D-guided walk/run/attack sprite sheets |
| **Procedural Pixel-Art VFX** | `pixelfx` | 244 pure JS/Canvas pixel-art spell, impact, fire, and UI effects |
| **Playable AAA Three.js Browser Experience** | `threejs-game-skills` (`9 skills`) + `3dviz-pro-max` + `Polyfork 3D` | Complete Three.js gameplay loop, spatial audio, game HUD, and 60fps profiler QA |

---

## 4-Phase Production Pipeline

### Phase 1: Scale, Coordinate & Topology Lock (`blender-scene-setup` / `threejs-game-director`)
* Lock metric scale (`1 unit = 1 meter`), forward axis (`-Z` Three.js / `-Y` Blender export convention), camera FOV/orthographic angle, and target polygon/texture budget (`1K/2K` KTX2/WebP textures, Draco `.glb` compression).

### Phase 2: Modeling, Materials & Lookdev (`blender-*` / `wobnimo-mascot` / `spritecast`)
* Build clean quad-dominant topology (`blender-hardsurface-modeling` / `blender-retopology-uv`), physically plausible PBR roughness variation (`blender-pbr-materials`—never `0.0` or `1.0` uniform roughness), and 3-point + HDRI studio lighting (`blender-lighting-lookdev`).
* For 2D sprites (`spritecast` / `pixelfx`), lock pixel grid density, consistent top-left light source, and silhouette readability at `1x` zoom.

### Phase 3: Iterative Render-Critic Loop (`dream-loop` / `blender-asset-qa` / `character-animation-qa`)
* Render multi-angle turnaround contact sheets (`front`, `3/4`, `side`, `top`) and frame strips; inspect visually for clipping, floating geometry, UV stretching, or foot-sliding before exporting.

### Phase 4: Web/Engine Export & Frame-Budget QA (`blender-export-pipelines` + `threejs-debug-profiler`)
* Export optimized `.glb` / sprite atlas JSON + PNG, verify draw calls (`< 100` web), texture VRAM (`< 128 MB`), and rock-solid `60fps`.
