---
name: combo-anti-slop-landing
description: >
  Combo 1 Orchestrator: The "Anti-Slop" Landing Page pipeline. Use when building a greenfield landing page
  or marketing site that must look hand-crafted by a senior design engineer rather than an AI template.
  Sequentially orchestrates styleseed, refactoring-ui-skill, hallmark, impeccable, make-interfaces-feel-better,
  and kill-ai-slop without rule collisions.
license: MIT
metadata:
  author: RLealz
  version: "1.0.0"
---

# 🔥 Combo 1: The "Anti-Slop" Landing Page Pipeline

When building a brand-new landing page from scratch, run this **5-Phase Execution Sequence** so that each specialized skill handles its exact layer of responsibility without conflicting:

---

## Phase 1: Design Judgment & Scale Lock (`styleseed` + `refactoring-ui-skill`)
1. **Choose the Register**: Decide upfront whether this page is in the **Brand Register** (editorial, atmospheric, expressive typography, asymmetric pacing) or **Product Register** (dense, functional clarity, live interactive UI preview).
2. **Lock the Tokens**:
   * **Typography**: Pair one expressive display/editorial typeface (for headlines/metrics) with one high-legibility geometric/grotesque sans-serif (for body/UI) and one monospace face (for technical badges, numbers, and timestamps). Use `font-variant-numeric: tabular-nums` on all metrics.
   * **Color & Surface Scale**: Define 3 surface elevations (`bg-canvas`, `bg-surface-1`, `bg-surface-2`), 3 text hierarchy levels (`text-primary`, `text-secondary`, `text-muted`), and 1 primary accent with optical hover/active states.
   * **Spacing & Radius**: Enforce a strict spatial grid. Concentric border radii must follow `outer_radius = inner_radius + padding`.

## Phase 2: Structural Variety & Layout Architecture (`hallmark`)
1. **Ban the Template Trap**: Never use a centered headline + 2 pill buttons + 3 equal cards below.
2. **Enforce Section Contrast**: Every consecutive section must change layout mechanics:
   * *Hero*: Interactive artifact, asymmetric split, or live product canvas with immediate tactile utility.
   * *Proof / Mechanism*: Interactive diagram (`diagram-design` / `anatomy` style) or choreographed bento with varying aspect ratios.
   * *Narrative Deep-Dive*: Sticky scroll-linked comparison or editorial two-column breakdown.
   * *Conversion / CTA*: High-contrast typographic anchor with zero visual clutter.

## Phase 3: Production Execution & Surface Craft (`impeccable` + `make-interfaces-feel-better`)
1. **Tactile Surfaces**: Apply subtle top-edge specular borders (`1px solid rgba(255,255,255,0.08)` on dark themes or crisp hairline borders on light themes) and multi-layered shadows with low opacity.
2. **Optical Corrections**:
   * Optical-center play icons and arrows (shift 1–2px toward the visual weight).
   * Balance headline line-wrapping with `text-wrap: balance` and body copy with `text-wrap: pretty` (`max-width: 60ch–68ch`).
   * Ensure all interactive targets have smooth `:hover`, `:focus-visible`, and `:active` (`scale(0.98)`) states.

## Phase 4: Purposeful Micro-Motion (`motion-design`)
* Keep entrance animations crisp (`250ms–450ms`, `cubic-bezier(0.22, 1, 0.36, 1)`).
* Prefer interactive state transitions (tabs, sliders, morphing icons from `Morphicons`, or live component previews from `Skiper UI` / `React Bits`) over passive decorative loops.

## Phase 5: The Final Anti-Slop Audit (`kill-ai-slop`)
Before presenting the result to the user, verify:
- [ ] Zero generic AI buzzwords (*"Revolutionize"*, *"Supercharge"*, *"Seamless"*, *"Unleash"*).
- [ ] Zero fake placeholder names (*"Jane Doe"*, *"Acme Corp"*, *"Lorem ipsum"*)—use domain-authentic data and realistic UI states.
- [ ] Zero stock gradient blobs or unaligned card grids.
