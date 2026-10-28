---
name: combo-deck-diagram-factory
description: "Orchestrates executive presentations, brand marks, and publication-grade architecture diagrams (Combo 7). Use when building pitch decks, technical architecture diagrams, Excalidraw canvases, or SVG logos."
---

# Combo 7: Executive Deck, Brand Identity & Diagram Factory

Use this orchestrator skill when creating **boardroom-ready pitch decks, publication-grade system architecture diagrams, interactive HTML/SVG technical explainers, or bespoke SVG brand marks**.

---

## Required Upstream Skills (`--combo deck-diagram-factory`)

Install the upstream skills for this workflow with:
```bash
# PowerShell
.\install.ps1 -Combo deck-diagram-factory

# Bash / macOS / Linux
./install.sh --combo deck-diagram-factory
```

| Phase | Upstream Skill | Role |
| :--- | :--- | :--- |
| **1. Brand Mark & Logo** | `logo-design-skill` | Crafts geometric SVG brand marks, wordmarks, and monochrome/inverted variants |
| **2. Editorial HTML/SVG Diagrams** | `diagram-design` | Generates self-contained dark/light HTML/SVG architecture, sequence, and C4 diagrams |
| **3. System Visuals** | `archify` | Converts codebase structure into interactive system architecture visualizations |
| **4. Hand-Drawn Whiteboards** | `excalidraw-diagram-skill` | Produces structured `.excalidraw` JSON files that make a clear visual argument |
| **5. Slide Narrative** | `kami` | Structures persuasive slide narratives, typography hierarchy, and HTML/PDF slide layouts |
| **6. Native PPTX / SVG Slides** | `ppt-master` | Generates editable `.pptx` and high-resolution SVG slide decks |

---

## Execution Pipeline

### Phase 1: Brand Identity Lock (`logo-design-skill`)
If the project lacks a visual mark:
- Design a pure geometric SVG symbol on a `24x24` or `64x64` grid using mathematical ratios.
- Provide 3 lockups: **Icon Only**, **Horizontal Wordmark**, and **Monochrome Stencil** (works at `16x16` favicon scale and on both light and dark backgrounds).

### Phase 2: Visual Argument & Diagram Architecture (`diagram-design` / `archify` / `excalidraw-diagram-skill`)
Never dump raw, unstyled Mermaid boxes with default colors. Choose the right diagram medium:

1. **Publication-Grade HTML/SVG (`diagram-design`)**:
   - Best for READMEs, architecture docs, and executive slides.
   - Uses semantic color coding (e.g., Ingress/Edge in Cyan, Core Compute in Indigo, Persistence in Emerald, External APIs in Amber).
   - Includes orthogonal routing lines with `8px` rounded corners, subtle animated pulse dots along active data paths, and monospace protocol labels (`gRPC`, `WebSocket`, `PostgreSQL`).
2. **Conceptual Whiteboard (`excalidraw-diagram-skill`)**:
   - Best for brainstorming, RFCs, and system trade-off walkthroughs.
   - Groups related nodes into visually distinct containers, uses size and stroke weight to establish hierarchy, and annotates bottlenecks directly on arrows.

### Phase 3: Executive Slide Choreography (`kami` + `ppt-master`)
Follow strict editorial presentation rules:
- **One Idea Per Slide**: Never crowd more than 1 primary takeaway and 3 supporting data points onto a single 16:9 canvas.
- **Headline = The Conclusion**: Slide titles must state the conclusion (*"Edge Caching Cut P99 Latency by 74%"*), never a generic topic label (*"Performance Metrics"*).
- **Typographic Contrast**: Pair a commanding `56px–72px` headline with `20px–24px` body copy and oversized `80px+` tabular metric callouts.
- **Grid Alignment**: Lock every chart, diagram, and callout card to a strict 12-column slide grid with `64px` outer margins.
