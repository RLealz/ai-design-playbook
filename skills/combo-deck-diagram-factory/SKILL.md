---
name: combo-deck-diagram-factory
description: >
  Combo 7 Orchestrator: Executive Deck, Brand Identity, Diagram & README Factory (v2.0). Use when building
  boardroom PPTX/PDF pitch decks, zero-Mermaid-slop HTML/SVG architecture diagrams, codebase floorplans,
  bespoke SVG brand marks, or publication-grade GitHub READMEs. Pairs with preset `industrial-blueprint`
  and starter `editorial-deck-diagram`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 📐 Combo 7: Executive Deck, Brand Identity & Diagram Factory (v2.0)

* **Recommended Preset**: `.\install.ps1 -Preset industrial-blueprint -OutDir .` (or `swiss-editorial`)
* **Runnable Starter Scaffold**: `.\install.ps1 -Template editorial-deck-diagram -OutDir .\deck-and-diagrams`

---

## Single-Engine Deliverable Selection Matrix

| Deliverable Type | Primary Engine | Output Format |
| :--- | :--- | :--- |
| **Editorial System / Sequence / Data Diagram** | `diagram-design` **OR** `archify` **OR** `html-diagram` | Self-contained dark/light HTML + orthogonal SVG (zero Mermaid slop) |
| **Cloud / Tech Stack Diagram with Brand Logos** | `stack-diagram` | Engineering-grade HTML / PNG / TSX stack blueprint with real vendor marks |
| **Interactive Codebase / PRD Map** | `floorplan` | Multi-zoom interactive node-graph (`floorplan/index.html`) |
| **Apple Hardware / UI Spec Sheet** | `dimensional-drawing` | Monochrome technical drawing with extension lines, leader callouts & spec table |
| **Hand-Drawn RFC / Architecture Whiteboard** | `excalidraw-diagram-skill` | Structured visual-argument `.excalidraw` JSON |
| **Native Editable PowerPoint / PDF Deck** | `ppt-master` **OR** `Kami` | Native `.pptx` shapes/charts (`ppt-master`) or publication PDF/PNG/HTML slides (`Kami`) |
| **Geometric Brand Logo & Brandbook** | `logo-design-skill` + `higgsfield-brandkit` | Optically corrected `24×24`/`64×64` SVG lockups + multi-page brand system |
| **Open-Source Repository Showcase** | `beautify-github-readme` | Custom SVG hero banner, badges, architecture SVG, and scannable README typography |

---

## 3-Phase Execution Pipeline

### Phase 1: Brand Mark & Visual Token Lock (`logo-design-skill`)
* If no logo exists, craft a geometric SVG mark tested at `16×16` (squint test) across **Icon Only**, **Horizontal Lockup**, and **Monochrome Stencil**.

### Phase 2: Orthogonal Diagram Engineering (Ban Default Mermaid!)
* Use semantic lane colors (Ingress = Cyan, Compute = Indigo, Data = Emerald, External = Amber), orthogonal `8px`-radius connectors, monospace protocol pills (`gRPC`, `PostgreSQL`), and subtle SVG `<circle>` data-flow pulses.

### Phase 3: 12-Column Executive Slide Choreography (`Kami` + `ppt-master`)
* **One Takeaway Per Slide**: Max 1 thesis + 3 supporting proof points on a `16:9` (`1920×1080`) canvas with `64px` outer margins.
* **Conclusion Headlines**: Titles state the outcome (*"Edge Caching Cut P99 Latency by 74%"*), never a passive label (*"Latency Overview"*).
* **Oversized Tabular Callouts**: Pair `56px–68px` headlines with `80px+` `tabular-nums` KPI callouts and `20px–24px` body copy.
