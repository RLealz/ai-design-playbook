---
name: combo-anti-slop-landing
description: >
  Combo 1 Orchestrator: The "Anti-Slop" Landing Page pipeline (v2.0). Use when building a greenfield landing page
  or marketing site that must look hand-crafted by a senior design engineer rather than an AI template.
  Pairs with preset `swiss-editorial` and starter `anti-slop-landing`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🔥 Combo 1: The "Anti-Slop" Landing Page Pipeline (v2.0)

* **Recommended Preset**: `.\install.ps1 -Preset swiss-editorial -OutDir .` (or `tactile-daylight-bento` / `obsidian-precision`)
* **Runnable Starter Scaffold**: `.\install.ps1 -Template anti-slop-landing -OutDir .\landing`

---

## Single-Engine Layout Decision Matrix

Pick **ONE** primary hero & page architecture before writing markup:

| Brand / Product Type | Primary Layout Skill | Hero Modality |
| :--- | :--- | :--- |
| **Developer Tool / SaaS / Infrastructure** | `hallmark` + `landing-page-design` | Asymmetric split hero (55% typographic thesis + 45% live interactive product sandbox / CLI widget) |
| **Cinematic Consumer / Creative Brand** | `motionsites-web-builder` | Full-bleed choreographed MotionSites hero with real video/image media + screenshot-and-fix loop |
| **Editorial / Research / Agency** | `claude-design-skill` + `design-artifact` | Exposed `1px` Swiss hairline grid (`swiss-editorial` preset), serif display thesis, interactive SVG proof artifact |

---

## 5-Phase Execution Sequence

### Phase 1: Design Judgment & Scale Lock (`styleseed` + `refactoring-ui-skill` + `design-for-ai`)
1. **Choose the Register**: Lock **Brand Register** (editorial, atmospheric, asymmetric pacing) or **Product Register** (dense functional clarity, live interactive UI preview).
2. **Drop or Define Tokens (`DESIGN.md` + `tokens.css`)**:
   * **Typography**: 1 expressive display face + 1 geometric/grotesque body face + 1 monospace face (`font-variant-numeric: tabular-nums` on all metrics/pricing).
   * **Elevation**: 3 semantic surfaces (`--bg-canvas`, `--bg-surface-1`, `--bg-surface-2`), 3 text contrast tiers, 1 primary accent.
   * **Concentric Radii**: `outer_radius = inner_radius + padding`.

### Phase 2: Structural Variety (`hallmark` + `landing-page-design`)
Ban the "centered H1 + 2 pill buttons + 3 equal icon cards" cliché. Every consecutive section MUST switch layout mechanics:
1. **Hero**: Asymmetric split or live interactive utility canvas.
2. **Mechanism Proof (`design-artifact`)**: Interactive HTML/SVG diagram or variable-span bento grid (`col-span-7` + `col-span-5`).
3. **Narrative Deep-Dive**: Sticky scroll-linked comparison or before/after interactive toggle.
4. **Social Proof / Telemetry**: Quantified domain metrics (`tabular-nums`) and authentic technical artifacts—never fake `"Acme Corp"` quotes.
5. **Conversion Anchor**: High-contrast typographic lockup with friction-free CTA.

### Phase 3: Tactile Surface Craft (`impeccable` + `make-interfaces-feel-better`)
* Top-edge specular highlights (`inset 0 1px 0 rgba(255,255,255,0.08)` on dark; crisp `1px` border + layered low-opacity shadows on light).
* `text-wrap: balance` on headings, `text-wrap: pretty` (`60ch–68ch` max) on body copy.
* Smooth `:hover`, `:focus-visible`, and `:active` (`scale(0.98)`) states on every control.

### Phase 4: Purposeful Micro-Motion (`motion-design`)
* Entrance reveals `250ms–420ms` with `cubic-bezier(0.22, 1, 0.36, 1)`; sibling stagger ≤ `50ms`.
* Prioritize interactive state transitions (morphing icons from `Morphicons`, tabs, live sliders) over idle loops.

### Phase 5: Final Slop & Contrast Gate (`unslop` + `kill-ai-slop` + `critique`)
- [ ] Passes 72-rule `unslop` craft & APCA contrast check at `1440px` and `390px`.
- [ ] Zero AI copy clichés (*"Revolutionize"*, *"Supercharge"*, *"Seamless"*, *"Unleash"*).
- [ ] `prefers-reduced-motion: reduce` disables transforms cleanly.
