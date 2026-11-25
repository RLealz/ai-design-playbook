# DESIGN.md — Swiss Editorial Paper (`swiss-editorial`)

> **Archetype**: Archival Warm Paper, Exposed `1px` Structural Hairlines & High-Contrast Editorial Serif  
> **3-Axis DNA**: `color_mood: warm-editorial-paper` · `density_rhythm: asymmetric-editorial-grid` · `surface_treatment: hairline-wireframe`

## 1. Visual Philosophy
Inspired by Swiss International Typographic Style, Stripe Press, and modern research labs. Instead of floating rounded cards in empty space, sections are bound by crisp `1px` exposed architectural hairlines on warm paper (`#FAF8F5`), pairing dramatic editorial serif headlines with razor-sharp sans body copy and monospace index numbers (`01`, `02`, `03`).

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
* **Display Headlines**: `Instrument Serif` (`clamp(2.75rem, 5.5vw, 5rem)`, `line-height: 0.98`, `letter-spacing: -0.02em`)
* **Body & UI**: `Plus Jakarta Sans` (`16px–17px`, `line-height: 1.62`, `max-width: 64ch`)
* **Index Labels & Telemetry**: `IBM Plex Mono` (`11px–12px`, uppercase, `letter-spacing: 0.08em`, `tabular-nums`)

## 3. Semantic Color & Surface Hierarchy
* `--bg-canvas`: `#FAF8F5` (`oklch(0.978 0.006 80)`) — Warm archival paper
* `--bg-surface-1`: `#F3EFE9` (`oklch(0.952 0.009 78)`) — Tinted editorial cells
* `--bg-surface-2`: `#FFFFFF` (`oklch(1 0 0)`) — Elevated interactive artifacts
* `--border-hairline`: `#DED8CE` (`oklch(0.88 0.012 78)`) — Exposed `1px` grid rules
* `--text-primary`: `#141413` (`oklch(0.19 0.006 75)`) — Rich letterpress ink
* `--text-secondary`: `#4E4C47` (`oklch(0.42 0.01 75)`)
* `--text-muted`: `#7C7870`
* `--accent-primary`: `#C84B31` (`oklch(0.58 0.17 34)`) — Editorial vermilion ink accent

## 4. Layout & Motion Rules
* Expose a continuous `12-column` or `4-column` outer frame (`max-width: 1280px`) with `1px solid var(--border-hairline)` cell dividers.
* Keep border radii tight (`0px–6px` for grid cells, `999px` only for micro status tags).
* Masked baseline headline reveals (`translateY(102%) → 0` over `420ms cubic-bezier(0.22, 1, 0.36, 1)`).

## 5. Strictly Forbidden (Anti-Slop)
* Zero soft purple/blue gradients or glowing drop-shadows.
* Never center every section; anchor headlines left against vertical grid rules.
