# DESIGN.md — Tactile Daylight Bento (`tactile-daylight-bento`)

> **Archetype**: Physical Matte Daylight Surfaces, Concentric Bento Cards & Spring Micro-Feel  
> **3-Axis DNA**: `color_mood: high-craft-daylight` · `density_rhythm: modular-swiss-bento` · `surface_treatment: tactile-matte-elevation`

## 1. Visual Philosophy
Designed for modern consumer SaaS, mobile-first web products, and interactive component showcases. Cards feel like precision-milled matte hardware resting on a soft cool-stone desk (`#F5F6F8`), elevated via a crisp `1px` rim + dual-layer ambient/direct light shadows and strict concentric corner geometry.

## 2. Typography & Font Pairing
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
* **Display**: `Cabinet Grotesk` or `Outfit` (`font-weight: 600–700`, `letter-spacing: -0.025em`)
* **Body / Controls**: `Plus Jakarta Sans` (`15px–16px`, `line-height: 1.55`)
* **Metrics**: `JetBrains Mono` (`tabular-nums`)

## 3. Semantic Color & Surface Hierarchy
* `--bg-canvas`: `#F4F5F8` (`oklch(0.968 0.005 255)`) — Soft stone ground
* `--bg-surface-1`: `#FFFFFF` (`oklch(1 0 0)`) — Elevated bento card
* `--bg-surface-2`: `#ECEEF3` (`oklch(0.945 0.007 255)`) — Recessed track / input well
* `--shadow-tactile`: `0 0 0 1px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.04), 0 12px 24px -8px rgba(15, 23, 42, 0.07)`
* `--text-primary`: `#0F172A` · `--text-secondary`: `#475569` · `--text-muted`: `#64748B`
* `--accent-primary`: `#2563EB` (`oklch(0.55 0.21 260)`) — Precision cobalt

## 4. Concentric Bento & Spring Rules
* **Strict Concentricity**: `14px` inner widget inside `10px` padding = `24px` outer bento card radius.
* **Asymmetric Spans**: Mix `col-span-7` + `col-span-5` and `col-span-4` + `col-span-8`—never repeat uniform 3-card rows.
* **Tactile Press**: Buttons compress `scale(0.975)` on `:active` and spring back over `180ms`.
