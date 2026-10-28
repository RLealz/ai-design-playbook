---
name: combo-vibe-prototyping
description: "Orchestrates rapid multi-direction UI prototyping (Combo 4). Use when exploring 3 distinct aesthetic directions before committing, building interactive SaaS prototypes, or mixing high-craft component vaults."
---

# Combo 4: Rapid Multi-Direction "Vibe Prototyping"

Use this orchestrator skill when a project needs **visual exploration across multiple distinct directions** before locking a design system, or when rapidly prototyping high-craft interfaces using curated component registries.

---

## Required Upstream Skills (`--combo vibe-prototyping`)

Install the upstream skills for this workflow with:
```bash
# PowerShell
.\install.ps1 -Combo vibe-prototyping

# Bash / macOS / Linux
./install.sh --combo vibe-prototyping
```

| Phase | Upstream Skill | Role |
| :--- | :--- | :--- |
| **1. Parallel Directions** | `brainstorm-prototypes` (`skills/brainstorm-prototypes`) | Spins up 3 distinct aesthetic and layout variations side-by-side (`Editorial Swiss`, `Dark Industrial Precision`, `Warm Tactile Craft`) |
| **2. Guardrails** | `ui-skills` | Enforces baseline accessibility, keyboard navigation, focus states, and optical alignment |
| **3. Color & Polish** | `impeccable` | Applies `/impeccable:colorize`, `/impeccable:typeset`, and `/impeccable:polish` to the winning prototype |
| **4. Tactile Micro-Feel** | `make-interfaces-feel-better` | Adds spring physics, concentric border radii, tabular numbers, and hit-target expansion |

---

## Execution Pipeline

### Phase 1: Generate 3 Orthogonal Prototypes (`brainstorm-prototypes`)
Never present 3 minor variations of the same layout. Generate 3 genuinely distinct structural prototypes:

1. **Direction A — Swiss Editorial Grid**:
   - Exposed `1px` hairlines, high-contrast serif/sans pairing (`Instrument Serif` + `Plus Jakarta Sans`), asymmetric multi-column layout, light warm-paper surface (`#FAF8F5`).
2. **Direction B — Linear/Raycast Precision Dark**:
   - Obsidian surface (`#090A0F`), `1px` top-edge specular borders (`rgba(255,255,255,0.08)`), command-palette-first navigation, monospace telemetry (`JetBrains Mono` with `tabular-nums`).
3. **Direction C — Tactile Bento / Neo-Brutalist Craft**:
   - High-contrast physical cards, spring-loaded micro-interactions, bold display typography (`Syne` or `Cabinet Grotesk`), kinetic status pills.

### Phase 2: Inject Curated Component Primitives
Instead of writing generic Tailwind cards from scratch, pull primitives from the curated ecosystem:
- **21st.dev Magic MCP** / **Shadcn Space** for structural blocks and interactive forms.
- **React Bits** (`reactbits.dev`) / **Skiper UI** (`skiper-ui.com`) for text reveals, magnetic cursors, and marquee tickers.
- **Vengeance UI** (`vengenceui.com`) / **Pacifio UI** (`pacifio.ui`) for liquid glass, Aurora shaders, and specular dark-mode cards.
- **Motion Primitives** (`motion-primitives.com`) for spring accordions, morphing dialogs, and animated tabs.

### Phase 3: Enforce `ui-skills` & `make-interfaces-feel-better`
Once the user selects a direction (or hybridizes two):
- **Concentric Border Radius**: `outer_radius = inner_radius + padding` (e.g., `12px` inner button inside `8px` padded container = `20px` outer radius).
- **Tabular Numerals**: Apply `font-variant-numeric: tabular-nums` to all counters, prices, timestamps, and metrics.
- **Spring Physics**: Replace linear/ease-in-out transitions on interactive elements with spring physics (`stiffness: 300, damping: 24`).
- **Interactive States**: Every interactive element must define `default`, `hover`, `focus-visible`, `active` (`scale(0.98)`), `disabled`, and `loading` states.

### Phase 4: Final Polish (`/impeccable:polish`)
- Audit contrast ratios (4.5:1 body, 3:1 large text/UI).
- Verify `prefers-reduced-motion` fallbacks.
- Test responsive breakpoints at `375px`, `768px`, `1024px`, and `1440px`.
