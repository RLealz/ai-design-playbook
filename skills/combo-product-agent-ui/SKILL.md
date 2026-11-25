---
name: combo-product-agent-ui
description: >
  Combo 10 Orchestrator: Production SaaS, AI Agent Cockpit & Data-Viz UI Pipeline (v2.0). Use when designing
  and building complex web applications, multi-pane AI agent workspaces, generative UI streams, design systems,
  or high-density KPI/D3 analytics dashboards. Pairs with preset `obsidian-precision` and starter `agent-saas-cockpit`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🖥️ Combo 10: Production SaaS, AI Agent Cockpit & Data-Viz UI

Use this orchestrator for **complex application interfaces** (as opposed to Combo 1 marketing landing pages): AI coding/research cockpits, B2B SaaS workspaces, streaming Generative UI (`AG-UI`), and dense analytical dashboards.

* **Install Combo**: `.\install.ps1 -Combo product-agent-ui -Target antigravity`
* **Recommended Preset**: `.\install.ps1 -Preset obsidian-precision -OutDir .` (or `tactile-daylight-bento`)
* **Runnable Starter Scaffold**: `.\install.ps1 -Template agent-saas-cockpit -OutDir .\cockpit`

---

## Single-Engine Product Layer Matrix

| Product Layer | Primary Skill / Reference | Responsibility |
| :--- | :--- | :--- |
| **Product Flows & Design System** | `opendesign` + `ui-ux-pro-max` + `styleseed` | User flows, `DESIGN.md` contract, accessible Radix/Tailwind v4 primitives |
| **AI Agent & Generative UI UX** | `agent-interface-design` + `Pacifio UI` + `CopilotKit` / `OpenUI` | Streaming tool-call cards, human-in-the-loop approval gates, resizable artifact sidecars, confidence/status pills |
| **KPI & Custom Data Visualization** | `kpi-dashboard-design` + `claude-d3js-skill` + `design-for-ai` | High-signal-to-ink charts, sparklines, cohort heatmaps, `mapcn` maps, zero pie-chart clutter |
| **Surface Polish & State Completeness** | `ui-skills` + `impeccable` (`harden`, `clarify`, `normalize`) + `make-interfaces-feel-better` + `unslop` | Keyboard-first (`Cmd+K`), empty/loading/error/offline states, APCA contrast |

---

## 4-Phase Execution Pipeline

### Phase 1: Information Architecture & Pane Ergonomics (`opendesign` + `agent-interface-design`)
* Organize dense workspaces into **3 Clear Spatial Zones**:
  1. **Collapsible Navigation Rail (`56px` collapsed / `240px` expanded)** with keyboard shortcuts (`[`, `Cmd+B`).
  2. **Primary Work / Stream Canvas** with clear scroll containment (`overflow-y: auto`) and sticky context header.
  3. **Contextual Inspector / Sidecar Drawer** (`360px–480px`) that opens on selection or artifact emission without shifting page layout.
* Include a universal **`Cmd+K` / `Ctrl+K` Command Palette** for instant keyboard action routing.

### Phase 2: Agentic & Data-Viz Craft (`Pacifio UI` + `kpi-dashboard-design`)
* **Streaming AI States**: Never block the screen with a generic spinner. Render collapsible tool-call accordions (`running` pulse → `done` duration in `ms`), skeleton shimmer placeholders matching exact final geometry, and inline diff/approval actions.
* **Data-to-Ink Discipline**: Apply `font-variant-numeric: tabular-nums` to every table column, KPI delta, timestamp, and chart axis. Pair headline numbers with inline trend sparklines and muted baseline comparisons—ban 3D charts, dual-axis confusion, and decorative gridlines (`rgba(255,255,255,0.05)` max).

### Phase 3: Edge-Case Hardening (`impeccable:harden` + `ui-skills`)
Every view MUST explicitly implement all **6 UI States**:
1. `Initial / Empty` (actionable starter prompt or sample import—never a blank box)
2. `Loading / Streaming` (geometry-matched skeleton or token stream)
3. `Populated (Typical)`
4. `Stress / Overflow` (long filenames truncated with `truncate` + tooltip, `1,000+` rows virtualized)
5. `Error / Degraded` (specific recovery CTA + retry)
6. `Permission / Read-Only`

### Phase 4: Accessibility & `unslop` Gate
* Full `Tab` / `Arrow` focus rings (`focus-visible:ring-2`), ARIA roles on dialogs/tabs/menus (`radix-ui-design-system`), and APCA contrast pass via `unslop`.
