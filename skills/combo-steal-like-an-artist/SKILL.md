---
name: combo-steal-like-an-artist
description: >
  Combo 6 Orchestrator: "Steal Like an Artist" Reference-to-System Pipeline (v2.0). Use when extracting DTCG
  design tokens, OKLCH palettes, typography, motion choreography, or shot blueprints from any live website,
  screenshot, web animation, or reference video into a reusable `DESIGN.md`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🧬 Combo 6: "Steal Like an Artist" Reference-to-System Pipeline (v2.0)

Use this workflow when a user provides a **reference URL, screenshot, interactive web animation, or motion video** and wants to extract its structural DNA, token system, and choreography grammar—building an **100% original product** with that exact tier of craft.

---

## Single-Engine Extraction Decision Matrix

| Reference Input | Primary Extraction Engine | Output Contract |
| :--- | :--- | :--- |
| **Live Website URL (DOM + CSS)** | `design-extract` (CLI/MCP) **OR** `design-md-chrome` | DTCG tokens, Tailwind v4 `@theme`, semantic OKLCH variables, `DESIGN.md` |
| **Screenshots / Moodboard Images** | `design-dna` + `/genjutsu:paint` | 3-axis DNA JSON (`Design System`, `Design Style`, `Visual Effects`) + `DESIGN.md` |
| **Live Web Micro-Interaction / Scroll** | `reanimate` + `design-motion-principles` | Frame-verified Playwright animation reconstruction + spring/easing spec |
| **Reference Video / Commercial / Reel** | `rea-video` **OR** `reelmimic` (`6 sub-skills`) | Shot-by-shot camera/edit blueprint (`rea-video`) or style-cloned Remotion/Blender pipeline (`reelmimic-*`) |

---

## 4-Phase Execution Pipeline

### Phase 1: Structural Token Extraction (Zero Brand/Copy Plagiarism)
1. **Semantic Surfaces (`OKLCH`)**: Extract `--bg-canvas`, `--bg-surface-1`, `--bg-surface-2`, `--border-hairline`, `--text-primary`, `--text-secondary`, `--text-muted`, and `--accent-primary`.
2. **Typographic Ratio**: Capture Display, Body, and Mono font categories, `line-height` (`1.02–1.08` display vs `1.55` body), and `letter-spacing` (`-0.03em` display vs `+0.08em` uppercase micro-labels).
3. **Spatial Density**: Measure container max-width, column count, gap mechanics (`1px` exposed hairlines vs `24px` bento gutters), and section cadence.

### Phase 2: 3-Axis `design-dna` Classification
Document in `DESIGN.md`:
* `color_mood` (`obsidian-precision`, `swiss-editorial`, `tactile-daylight`, `atmospheric-cinema`)
* `density_rhythm` (`spacious-scrollytelling`, `dense-pro-cockpit`, `asymmetric-bento`)
* `surface_treatment` (`hairline-wireframe`, `top-specular-dark`, `matte-layered-shadow`)

### Phase 3: Motion & Vector Reconstruction (`reanimate` / `motion-design-skill` / `text-to-lottie`)
* Measure duration, stagger interval, and easing curves across Emil Kowalski (interruptible `150–220ms` springs), Jakub Krehel (specular surfaces), and Gil Huybrecht (masked baseline text reveals).
* Generate matching SVG/Lottie state machines via `text-to-lottie` where custom vector motion is required.

### Phase 4: Synthesize `DESIGN.md` + `tokens.css` & Build Original Domain UI
* Save `DESIGN.md` + `tokens.css` in the project root, then implement the user's original copy, data, and components strictly against those tokens.
