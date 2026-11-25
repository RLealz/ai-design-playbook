# DESIGN.md — Kinetic Neo-Brutalist Launch (`kinetic-neo-brutalist`)

> **Archetype**: Bold Display Typography, Crisp Ink Borders, Hard Offset Shadows & Launch Energy  
> **3-Axis DNA**: `color_mood: high-voltage-ink` · `density_rhythm: bold-poster-blocks` · `surface_treatment: hard-offset-ink`

## 1. Visual Philosophy
Built for viral product launch trailers (`Combo 5`), creator/social carousels & thumbnails (`Combo 12`), and high-energy consumer drops. Rejects timid gray SaaS minimalism in favor of unmistakable `2px` solid ink borders, crisp `4px 4px 0 #111` mechanical offset shadows that snap flat on press, and commanding `Syne` kinetic headlines.

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```
* **Display / Hook Typography**: `Syne` (`font-weight: 800`, `line-height: 0.94`, `letter-spacing: -0.03em`)
* **Body**: `Plus Jakarta Sans` (`font-weight: 500`, `16px`)
* **Badges / Stickers / CLI**: `Space Mono` (`font-weight: 700`, `tabular-nums`)

## 3. Semantic Color & Surface Hierarchy
* `--bg-canvas`: `#FFFDF7` — Crisp poster cream
* `--bg-surface-1`: `#FFFFFF`
* `--bg-surface-accent`: `#D9FF3F` (`oklch(0.93 0.21 118)`) — Acid Volt callout block
* `--border-ink`: `#111111` (`2px solid`)
* `--shadow-hard`: `4px 4px 0px #111111` (`0px 0px 0px` + `translate(4px, 4px)` on `:active`!)
* `--text-primary`: `#111111` · `--text-secondary`: `#383838`
* `--accent-primary`: `#FF4D1C` (`oklch(0.65 0.23 32)`) — Signal flare orange

## 4. Mechanical Motion Rules
* Interactive buttons physically depress into their shadow (`transform: translate(3px, 3px); box-shadow: 1px 1px 0 #111`) over `110ms`.
* Video/carousel hooks never exceed **6 words** on frame 1 and maintain `≥ 10:1` contrast.
