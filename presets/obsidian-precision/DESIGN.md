# DESIGN.md — Obsidian Precision (`obsidian-precision`)

> **Archetype**: Linear / Raycast / Pacifio AMOLED & Obsidian Dark Precision  
> **3-Axis DNA**: `color_mood: obsidian-precision` · `density_rhythm: high-density-pro-tool` · `surface_treatment: top-specular-dark`

## 1. Visual Philosophy
Built for developer platforms, AI agent cockpits, 3D WebGL showcases, and real-time telemetry interfaces. Depth is never created with muddy black drop-shadows—surfaces step upward in subtle lightness increments (`L: 0.13 → 0.17 → 0.21` in OKLCH) and catch overhead light via a `1px` top inner specular highlight.

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```
* **Display / Headings**: `Geist` or `Inter` (`font-weight: 600`, `letter-spacing: -0.03em`, `line-height: 1.08`, `text-wrap: balance`)
* **Body / Controls**: `Inter` (`14px–15px`, `line-height: 1.55`, `text-wrap: pretty`)
* **Telemetry / Code / Badges**: `JetBrains Mono` (`12px–13px`, `font-variant-numeric: tabular-nums`)

## 3. Semantic Color & Surface Hierarchy
* `--bg-canvas`: `#090A0F` (`oklch(0.14 0.012 265)`) — Deep obsidian viewport ground
* `--bg-surface-1`: `#11131C` (`oklch(0.18 0.014 265)`) — Primary cards, sidebars, panels
* `--bg-surface-2`: `#181B28` (`oklch(0.22 0.016 265)`) — Hover states, active pills, floating modals
* `--border-hairline`: `rgba(255, 255, 255, 0.08)` — Structural borders
* `--specular-top`: `inset 0 1px 0 0 rgba(255, 255, 255, 0.09)` — Top-edge light catch
* `--text-primary`: `#F3F4F8` (`APCA Lc > 92`)
* `--text-secondary`: `#9BA1B4` (`APCA Lc > 60`)
* `--text-muted`: `#63697E` — Metadata & keyboard hints only
* `--accent-primary`: `#5E6AD2` / `#6E7BF2` (`oklch(0.62 0.17 272)`) — Crisp indigo-violet command accent
* `--status-ok`: `#34D399` · `--status-warn`: `#FBBF24` · `--status-err`: `#F87171`

## 4. Spatial & Concentric Rules
* **Spacing Scale**: `4, 8, 12, 16, 24, 32, 48, 64, 96px`
* **Concentric Radii**: `outer_radius = inner_radius + padding` (`--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 16px`).
* **Interactive Feedback**: `150ms cubic-bezier(0.22, 1, 0.36, 1)`; `:active` applies `transform: scale(0.985)`.

## 5. Strictly Forbidden (Anti-Slop)
* No neon purple/cyan background radial blobs exceeding `0.08` opacity.
* No `18px+` bloated marketing body text inside pro dashboards.
* Never omit keyboard shortcut hints (`⌘K`, `Esc`) on command surfaces.
