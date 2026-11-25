# DESIGN.md — Industrial Technical Blueprint (`industrial-blueprint`)

> **Archetype**: Apple Dimensional Hardware Sheet, Architecture Diagrams & CAD Precision  
> **3-Axis DNA**: `color_mood: technical-drafting` · `density_rhythm: precision-schematic` · `surface_treatment: blueprint-callout-grid`

## 1. Visual Philosophy
Built for hardware cutaways, cloud/system architecture diagrams (`Combo 7`), technical explainers (`Combo 9`), and engineering-first launches. Combines drafting-grid coordinates (`A1–F8`), `1px` extension & leader lines, `tabular-nums` tolerance callouts (`±0.02mm` / `P99 4.2ms`), and clean dark/light schematic toggling.

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```
* **Headings**: `Space Grotesk` (`font-weight: 600`, `letter-spacing: -0.025em`)
* **Callouts, Specs & Axes**: `IBM Plex Mono` (`12px`, `font-variant-numeric: tabular-nums`)

## 3. Semantic Color & Surface Hierarchy (Dark Schematic Default + Light Sheet Mode)
* `--bg-canvas`: `#0B0F17` (`oklch(0.16 0.018 255)`)
* `--bg-surface-1`: `#111826` (`oklch(0.20 0.022 255)`)
* `--grid-minor`: `rgba(148, 163, 184, 0.06)` (`24px` pitch)
* `--line-callout`: `#38BDF8` (`oklch(0.75 0.14 230)`) — Precision drafting cyan
* `--accent-warn`: `#F59E0B` — Engineering highlight / active signal pulse
* `--text-primary`: `#F1F5F9` · `--text-secondary`: `#94A3B8` · `--text-muted`: `#64748B`

## 4. Schematic & Diagram Rules
* All diagram connectors route orthogonally (`90°` turns with `6px–8px` rounded elbows—never messy diagonal cobwebs).
* Leader lines terminate with a `3px` solid anchor dot on the target part and a horizontal shelf under the monospace label.
