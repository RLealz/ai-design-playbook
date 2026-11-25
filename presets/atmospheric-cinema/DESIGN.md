# DESIGN.md — Atmospheric Cinema & Scrollytelling (`atmospheric-cinema`)

> **Archetype**: Filmic Scrollytelling, Storycraft AI Cinema & Luxury Product Worlds  
> **3-Axis DNA**: `color_mood: atmospheric-cinema` · `density_rhythm: spacious-scrollytelling` · `surface_treatment: vignette-grain-depth`

## 1. Visual Philosophy
Built for narrative scroll journeys (`Combo 2`) and Storycraft multi-shot films (`Combo 8`). Treats the viewport as an anamorphic cinema frame: deep warm-charcoal shadows (`#0A0908`), tungsten/amber key highlights (`#E5A93C`), subtle `3%` monochrome film grain, generous negative space (`clamp(6rem, 14vh, 11rem)`), and masked curtain typography.

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```
* **Display**: `Cormorant Garamond` or `Playfair Display` (`clamp(3rem, 6.5vw, 6rem)`, `line-height: 0.96`, `letter-spacing: -0.02em`)
* **Body**: `Satoshi` or `Inter` (`16px`, `line-height: 1.65`, `max-width: 56ch`)
* **Timecode / Chapter HUD**: `JetBrains Mono` (`11px`, `tabular-nums`, `00:01:14:08` style)

## 3. Semantic Color & Surface Hierarchy
* `--bg-canvas`: `#0A0908` (`oklch(0.14 0.008 65)`) — Warm anamorphic black
* `--bg-surface-1`: `#141210` (`oklch(0.185 0.010 65)`)
* `--bg-vignette`: `radial-gradient(circle at 50% 42%, transparent 35%, rgba(10, 9, 8, 0.82) 100%)`
* `--text-primary`: `#F5F1EA` — Warm silver-halide white
* `--text-secondary`: `#A8A095`
* `--accent-primary`: `#E2A336` (`oklch(0.76 0.15 78)`) — Warm tungsten gold

## 4. Pacing & Camera Laws
* Alternate pinned scrubbed visual acts (`180vh–260vh`) with calm unpinned reading beats (`100vh`).
* Foreground copy must always sit inside a contrast-guaranteed vignette zone (`≥ 7:1` over 3D/video).
