---
name: combo-steal-like-an-artist
description: "Orchestrates reference-to-system design extraction (Combo 6). Use when extracting design tokens, typography, spacing, and motion grammar from an inspiring live website, screenshot, or video reference."
---

# Combo 6: "Steal Like an Artist" Reference-to-System Pipeline

Use this orchestrator skill when a user shares a **reference URL, screenshot, or motion clip** (from Godly.design, HorizonX, Mobbin, or a live site) and wants to extract its **structural DNA, token system, and motion grammar** to build an original product with that same level of craft.

---

## Required Upstream Skills (`--combo steal-like-an-artist`)

Install the upstream skills for this workflow with:
```bash
# PowerShell
.\install.ps1 -Combo steal-like-an-artist

# Bash / macOS / Linux
./install.sh --combo steal-like-an-artist
```

| Phase | Upstream Skill | Role |
| :--- | :--- | :--- |
| **1. 3-Axis DNA Profile** | `design-dna` | Maps the reference onto 3 orthogonal axes (`color_mood`, `density_rythm`, `surface_treatment`) |
| **2. Screenshot-to-Tokens** | `genjutsu` (`/genjutsu:paint`) | Extracts hex palettes, font pairings, border treatments, and shadow geometry into a self-contained spec |
| **3. Semantic System** | `design-md` | Synthesizes extracted tokens into a rigorous `DESIGN.md` semantic contract |
| **4. Motion Grammar** | `design-motion-principles` | Audits and replicates the choreography grammar (Gil Huybrecht, Jonas Reymondin, Emil Kowalski, Jakub Krehel) |
| **5. Vector / Lottie Polish** | `motion-design` | Generates interactive SVG/Lottie state machines and micro-animations matching the extracted style |

---

## Execution Pipeline

### Phase 1: Extract Structural Tokens (Never Clone Copy or Brand Assets)
When given a reference URL or screenshot:
1. **Surface & Color Hierarchy**:
   - Extract Primary Canvas, Elevated Surface 1, Elevated Surface 2, Glass/Overlay Surface, Hairline Border, Primary Text, Secondary Text, Muted Text, and 1–2 Accent tokens.
   - Convert all raw colors into semantic `OKLCH` or CSS custom properties (`--bg-canvas`, `--bg-surface-1`, `--border-subtle`, `--text-primary`, etc.).
2. **Typographic Scale & Rhythm**:
   - Identify the Display font category (e.g., high-contrast editorial serif vs geometric grotesk), Body font, and Monospace font.
   - Extract line-height ratios (`1.02–1.08` for hero display, `1.5–1.65` for body) and letter-spacing (`-0.03em` display, `+0.08em` uppercase micro-labels).
3. **Spatial Grid & Density**:
   - Measure container max-width (`1200px`, `1440px`, or full-bleed fluid), column count, gap rhythm (`1px` exposed hairlines vs `24px` bento cards), and section vertical padding (`clamp(5rem, 10vw, 9rem)`).

### Phase 2: Map the 3-Dimension `design-dna` Profile
Classify the reference across three dimensions in `DESIGN.md`:
- **`color_mood`**: e.g., `obsidian-precision`, `warm-editorial-paper`, `high-craft-daylight`, `atmospheric-cinema`.
- **`density_rhythm`**: e.g., `spacious-scrollytelling`, `high-density-pro-tool`, `modular-swiss-bento`.
- **`surface_treatment`**: e.g., `hairline-wireframe`, `specular-layered-dark`, `tactile-matte-elevation`.

### Phase 3: Extract the Motion Grammar (`design-motion-principles`)
Analyze how the reference moves across four lenses:
1. **Emil Kowalski (Micro-Craft)**: Fast, interruptible spring transitions (`150–250ms`), subtle scale transforms (`0.97 -> 1.0`), zero layout shift.
2. **Jakub Krehel (Tactile Polish)**: Specular border reveals, blurred backdrop layers, smooth height morphing.
3. **Gil Huybrecht (Editorial Grid Choreography)**: Masked baseline text reveals (`translateY(105%) -> 0%`), staggered curtain wipes, image parallax inside fixed overflow frames.
4. **Jonas Reymondin (Spatial Depth)**: Scroll-linked Z-axis camera travel, pinned canvas transitions.

### Phase 4: Synthesize `DESIGN.md` & Build Original Components
- Write a complete `DESIGN.md` file documenting the extracted tokens, typography, layout rules, and motion curves.
- Implement the user's actual domain and content using those tokens—achieving 100% of the reference's craft with 0% plagiarism of its copy or proprietary brand marks.
