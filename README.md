# 🎨 AI Design Playbook & Meta-Skill Ecosystem (v2.2)

**Stop shipping generic AI slop.**  
`ai-design-playbook` is a hybrid **Phase-0 Pre-Design Discovery & Decision-Tree Router, 15 Multi-Skill Workflow Combos (`Combo 0` + `Combos 1–14`), 6 `DESIGN.md` + OKLCH Token Presets, 12 Runnable Starter Templates, and a Security-Auditing Upstream Installer** for AI coding agents (**Claude Code**, **Antigravity / Gemini CLI**, **Cursor**, **Codex**, and **Windsurf**).

Inspired by [`elayadesign/ai-design-skills`](https://github.com/elayadesign/ai-design-skills), v2.2 turns curated design knowledge into a deterministic end-to-end production engine:
1. **16 Built-in MIT Meta-Skills (`skills/*/SKILL.md`)**: Ready to drop directly into your agent—including `design-router` v2.2 (Phase 0 Pre-Design Discovery + single-engine decision matrices + 6 anti-slop laws + 4-step visual QA), **`combo-discovery-audit` (`Combo 0` Pre-Design Website & Brief Analysis)**, and **14 execution Combo Orchestrators**.
2. **6 Aesthetic `DESIGN.md` + Tailwind v4 OKLCH Presets (`presets/*/`)**: Drop-in `DESIGN.md` contracts paired with production `tokens.css` variables (`obsidian-precision`, `swiss-editorial`, `tactile-daylight-bento`, `industrial-blueprint`, `atmospheric-cinema`, `kinetic-neo-brutalist`).
3. **12 Complete Runnable Starter Templates (`templates/*/`)**: Copy-ready scaffolds starting with **Pre-Design Live Website Surface Auditing & Brand Fact-Locking (`discovery-audit-pack`)**, plus **Higgsfield Full-Stack Cinema Websites (TanStack SSR + Cloudflare D1 + A4 ScrollScrub + X-Ray)**, **Next.js B2B Scope/Dossier Configurators**, **0%-Idle Resilient GLSL 3D Stages**, **Client Boardroom Multi-Direction Galleries + Playwright 6-Viewport QA Probes**, Asymmetric Landing Pages, 4-Act Spline Scrollytelling, AI Agent Cockpits, 60fps Remotion Trailers, 12-Col HTML/SVG Decks, 3D Cutaways, and a 4-Stack Mobile/Spatial Pack.
4. **95 Curated Upstream Skills (`registry.json`) — Zero Orphans**: Selective, on-demand installation of the best open-source UI, GSAP, Three.js, Blender 5.2, WebGL, Remotion, Storycraft Cinema, Mobile/Spatial, and Diagram skills directly from their upstream GitHub repositories—preserving upstream licenses (`MIT`, `Apache-2.0`, `AGPL-3.0`).
5. **Portable Quarantine Security Scanner (`install.ps1` / `install.sh`)**: Every upstream skill is cloned with Git hooks disabled into an isolated quarantine directory, scanned for **prompt injection overrides, hidden bidirectional Unicode characters, malicious `package.json` lifecycle hooks, and remote shell execution pipes**, and auto-flattened if it contains a multi-skill suite.

---

## ⚡ Quick Installation & Scaffolding

<details open>
<summary><strong>1. Install Built-in Meta-Router & All 15 Combo Orchestrators (Zero Dependencies)</strong></summary>

**PowerShell (Windows):**
```powershell
git clone https://github.com/RLealz/ai-design-playbook.git
cd ai-design-playbook

# Install to current project (.claude/skills)
.\install.ps1 -Router

# Install globally to Antigravity / Gemini CLI (~/.gemini/config/skills)
.\install.ps1 -Router -Target antigravity

# Or sync non-destructively across local Antigravity + Claude global skill folders
.\install.ps1 -SyncLocal
```

**Bash (macOS / Linux / WSL):**
```bash
git clone https://github.com/RLealz/ai-design-playbook.git
cd ai-design-playbook
chmod +x install.sh

./install.sh --router --target antigravity
./install.sh --sync-local
```

</details>

<details>
<summary><strong>2. Drop a DESIGN.md + Tailwind v4 OKLCH Token Preset or Runnable Starter Template</strong></summary>

```powershell
# Drop DESIGN.md + tokens.css into an existing app
.\install.ps1 -Preset obsidian-precision -OutDir .\my-app
.\install.ps1 -Preset swiss-editorial -OutDir .\my-landing

# Scaffold a complete runnable starter project (start redesigns with discovery-audit-pack!)
.\install.ps1 -Template discovery-audit-pack -OutDir .\discovery
.\install.ps1 -Template anti-slop-landing -OutDir .\landing
.\install.ps1 -Template scroll-3d-stage -OutDir .\scroll-world
.\install.ps1 -Template agent-saas-cockpit -OutDir .\cockpit
.\install.ps1 -Template remotion-launch-trailer -OutDir .\trailer
.\install.ps1 -Template editorial-deck-diagram -OutDir .\deck
.\install.ps1 -Template interactive-cutaway -OutDir .\cutaway
.\install.ps1 -Template mobile-spatial-ui -OutDir .\mobile-app
.\install.ps1 -Template higgsfield-cinema-fullstack -OutDir .\hf-cinema
.\install.ps1 -Template b2b-dossier-configurator -OutDir .\b2b-flagship
.\install.ps1 -Template glsl-resilient-3d-showcase -OutDir .\glsl-stage
.\install.ps1 -Template boardroom-gallery-and-qa -OutDir .\client-hub
```

```bash
# Bash equivalent
./install.sh --preset obsidian-precision --out ./my-app
./install.sh --template scroll-3d-stage --out ./scroll-world
```

</details>

<details>
<summary><strong>3. Install Any of the 15 Workflow Combos (Fetches & Security-Audits Upstream Skills)</strong></summary>

```powershell
# List all 16 Meta-Skills, 15 Combos, 6 Presets, 12 Templates, and 95 Upstream Skills
.\install.ps1 -List

.\install.ps1 -Combo discovery-audit -Target antigravity       # Combo 0: Pre-Design Website Audit & Fact-Lock
.\install.ps1 -Combo anti-slop-landing -Target antigravity     # Combo 1: Editorial & Tactile Landing Pages
.\install.ps1 -Combo scroll-3d-world -Target antigravity       # Combo 2: Narrative Scroll & 3D Spline Worlds
.\install.ps1 -Combo 3d-webgl-hero -Target antigravity         # Combo 3: Procedural Three.js, Cutaways & Shaders
.\install.ps1 -Combo vibe-prototyping -Target antigravity      # Combo 4: 3-Direction Rapid Aesthetic Prototyping
.\install.ps1 -Combo viral-launch-video -Target antigravity    # Combo 5: Product Launch Trailers & Sizzle Reels
.\install.ps1 -Combo steal-like-an-artist -Target antigravity  # Combo 6: Live URL, Animation & Video DNA Extraction
.\install.ps1 -Combo deck-diagram-factory -Target antigravity  # Combo 7: Executive Decks, Logos & Orthogonal Diagrams
.\install.ps1 -Combo storycraft-studio -Target antigravity     # Combo 8: Storycraft AI Cinema, Passports & Music Videos
.\install.ps1 -Combo explainer-film -Target antigravity        # Combo 9: Voiceover Documentaries, 3D Teardowns & Manim
.\install.ps1 -Combo product-agent-ui -Target antigravity      # Combo 10: SaaS Workspaces, Agent Cockpits & Data-Viz
.\install.ps1 -Combo blender-game-assets -Target antigravity   # Combo 11: Blender 5.2, 3D Mascots, Sprites & Playable 3D
.\install.ps1 -Combo brand-social-growth -Target antigravity   # Combo 12: Product Photoshoots, Thumbnails & Viral Reels
.\install.ps1 -Combo mobile-spatial-ui -Target antigravity     # Combo 13: SwiftUI, Liquid Glass, visionOS & Compose
.\install.ps1 -Combo higgsfield-websites -Target antigravity   # Combo 14: Higgsfield Full-Stack Cinema Websites, Apps & Games
```

</details>

<details>
<summary><strong>4. Install Individual Upstream Skills by ID or Manual Copy</strong></summary>

```powershell
.\install.ps1 -Skill impeccable -Target antigravity
.\install.ps1 -Skill video-shotcraft -Target global-claude
```

Manual target directories:
- **Claude Code (Project / Global)**: `.claude/skills/` or `~/.claude/skills/`
- **Antigravity / Gemini CLI**: `~/.gemini/config/skills/`
- **Cursor**: `.cursor/skills/`
- **Codex / OpenCode**: `.agents/skills/` or `~/.codex/skills/`

</details>

---

## 🧭 16 Built-in MIT Meta-Skills (`skills/`)

| Skill Directory | Role |
| :--- | :--- |
| [`skills/design-router/SKILL.md`](skills/design-router/SKILL.md) | **Master Router v2.2 & Visual QA Gate**: Enforces Step 0 Pre-Design Discovery and routes across all 15 Combos, 6 Presets, 12 Starter Templates, and 4-step rendered QA. |
| [`skills/combo-discovery-audit/SKILL.md`](skills/combo-discovery-audit/SKILL.md) | **Combo 0 (Pre-Phase)**: Live-website surface crawling, SEO/CRO/IA diagnostics, `brand-facts.json` logo/fact lock, legacy `301` redirect mapping, and `R1–R8` brief review before UI design. |
| [`skills/combo-anti-slop-landing/SKILL.md`](skills/combo-anti-slop-landing/SKILL.md) | **Combo 1**: High-converting editorial & tactile greenfield landing pages with zero AI layout clichés. |
| [`skills/combo-scroll-3d-world/SKILL.md`](skills/combo-scroll-3d-world/SKILL.md) | **Combo 2**: 4-Act scrollytelling, GSAP ScrollTrigger + Lenis ticker sync, and 3D spline camera travel. |
| [`skills/combo-3d-webgl-hero/SKILL.md`](skills/combo-3d-webgl-hero/SKILL.md) | **Combo 3**: Procedural `img2threejs` heroes, exploded hardware cutaways, isometric SVGs, and 60fps DPR budgets. |
| [`skills/combo-vibe-prototyping/SKILL.md`](skills/combo-vibe-prototyping/SKILL.md) | **Combo 4**: Parallel 3-direction orthogonal prototyping across curated component registries. |
| [`skills/combo-viral-launch-video/SKILL.md`](skills/combo-viral-launch-video/SKILL.md) | **Combo 5**: 45-second 5-act product launch trailers, `video-shotcraft`/`brag`/`hyperframes`, and `-14 LUFS` mastering. |
| [`skills/combo-steal-like-an-artist/SKILL.md`](skills/combo-steal-like-an-artist/SKILL.md) | **Combo 6**: Live URL, Playwright animation (`reanimate`), and shot-level video (`rea-video`) extraction into `DESIGN.md`. |
| [`skills/combo-deck-diagram-factory/SKILL.md`](skills/combo-deck-diagram-factory/SKILL.md) | **Combo 7**: Geometric SVG logos, orthogonal HTML/SVG architecture diagrams, codebase floorplans, and PPTX/PDF decks. |
| [`skills/combo-storycraft-studio/SKILL.md`](skills/combo-storycraft-studio/SKILL.md) | **Combo 8 (New)**: Storycraft narrative AI cinema, character Asset Passports, shot-card storyboards, and music videos. |
| [`skills/combo-explainer-film/SKILL.md`](skills/combo-explainer-film/SKILL.md) | **Combo 9 (New)**: Word-timestamped voiceover documentaries, Vox/3D teardowns, ManimGX math, and hand-drawn explainers. |
| [`skills/combo-product-agent-ui/SKILL.md`](skills/combo-product-agent-ui/SKILL.md) | **Combo 10 (New)**: Production SaaS apps, dense AMOLED AI agent cockpits, `Cmd+K` ergonomics, and KPI/D3 dashboards. |
| [`skills/combo-blender-game-assets/SKILL.md`](skills/combo-blender-game-assets/SKILL.md) | **Combo 11 (New)**: Headless Blender 5.2 studio pipelines, ~25 KB 3D mascots, 8-dir isometric sprites, and playable 3D. |
| [`skills/combo-brand-social-growth/SKILL.md`](skills/combo-brand-social-growth/SKILL.md) | **Combo 12 (New)**: Studio product photoshoots, marketplace cards, squint-tested thumbnails, and viral Reels/carousels. |
| [`skills/combo-mobile-spatial-ui/SKILL.md`](skills/combo-mobile-spatial-ui/SKILL.md) | **Combo 13**: Native iOS SwiftUI, Apple Liquid Glass, visionOS spatial computing, Jetpack Compose, and Flutter. |
| [`skills/combo-higgsfield-websites/SKILL.md`](skills/combo-higgsfield-websites/SKILL.md) | **Combo 14 (New)**: Higgsfield full-stack React 19 + TanStack SSR + Cloudflare D1 websites, ~18-credit A4 scroll-scrub kits, Quanta apps, and multiplayer games. |

---

## 🎨 6 `DESIGN.md` + Tailwind v4 OKLCH Token Presets (`presets/`) & 12 Starter Templates (`templates/`)

| Preset (`presets/<id>/`) | Archetype & Typography | Paired Starter Templates (`templates/<id>/`) |
| :--- | :--- | :--- |
| **`(Pre-Phase / Any Preset)`** | Live Surface Audit, `brand-facts.json` & `R1–R8` Contract | **`discovery-audit-pack`** *(Playwright `1440px/390px` Surface Crawler + Redirect Map + `AUDIT-BRIEF.md`)* |
| **`obsidian-precision`** | Linear/Raycast/Pacifio Obsidian Dark · `Geist`/`Inter` + `JetBrains Mono` | **`higgsfield-cinema-fullstack`** *(TanStack SSR + Cloudflare D1 + A4 ScrollScrub + X-Ray)* & **`agent-saas-cockpit`** *(React 19 3-Zone Cockpit & `⌘K`)* |
| **`swiss-editorial`** | Warm Archival Paper (`#FAF8F5`) & `1px` Hairlines · `Instrument Serif` + `Plus Jakarta Sans` | **`b2b-dossier-configurator`** *(Next.js 15 + `light-dark()` + Threshold Reveal + Scope Calculator)* & **`anti-slop-landing`** |
| **`atmospheric-cinema`** | Anamorphic Cinema & Tungsten Gold · `Cormorant Garamond` + `Inter` + `JetBrains Mono` | **`scroll-3d-stage`** *(Three.js Spline + GSAP + Lenis)* & **`glsl-resilient-3d-showcase`** *(0%-Idle GLSL Silk + Context Recovery)* |
| **`kinetic-neo-brutalist`** | Hard `2px` Ink Borders & Acid Volt Blocks · `Syne` + `Space Mono` | **`remotion-launch-trailer`** *(60fps `16:9` & `9:16` 45s Trailer + FFmpeg `-14 LUFS`)* |
| **`industrial-blueprint`** | Technical CAD Drafting & Semantic Lanes · `Space Grotesk` + `IBM Plex Mono` | **`editorial-deck-diagram`** *(12-Col Slide Deck + Orthogonal SVG)* & **`interactive-cutaway`** *(3D Exploded Sensor Stack)* |
| **`tactile-daylight-bento`** | Layered Daylight Shadows & Concentric Radii · `Outfit` + `Plus Jakarta Sans` | **`mobile-spatial-ui`** *(4-Stack Mobile/Spatial Pack)* & **`boardroom-gallery-and-qa`** *(Lazy-Iframe Client Hub + Playwright 6-VP Probe)* |

---

# 📖 The Design Master Playbook

This playbook serves as our central hub for all **Design, Motion, 3D, Video, and Aesthetics** capabilities. It combines core agent skills, starred skill repositories, UI/WebGL reference libraries, and MCP servers with recommended **Combos** for tackling complex UI/UX and creative coding challenges.

---

## 1. Core Agent Skills & Design Engines
These are our primary agent skills that enforce design logic, reject AI slop, extract design systems, and execute production frontend code.

* **`styleseed`** ([`bitjaru/styleseed`](https://github.com/bitjaru/styleseed)): Design-method engine that teaches AI fixed design judgment rather than fixed aesthetics. Employs 74 rules against "AI slop" and includes a scored quality gate to enforce design coherence.
* **`genjutsu`** ([`AThevon/genjutsu`](https://github.com/AThevon/genjutsu)): The ultimate anti-AI-slop creative coding suite across Web (GSAP, Motion, Three.js, CSS), Android (Compose), and Apple (SwiftUI).
  * `cast` pipeline: Enhances and animates existing UI (scroll animations, dropdowns) with GSAP, Framer Motion, Three.js.
  * `paint` pipeline: Builds full visual universes and persistent design systems (`MASTER.md`, `Theme.kt`, etc.) from scratch.
* **`hallmark`** ([`Nutlope/hallmark`](https://github.com/Nutlope/hallmark)): Enforces strict structural variety and tactile rebellion for greenfield pages, preventing AI-generated layout templates. Includes 20 themes and strict Slop Tests.
* **`impeccable`** ([`pbakaus/impeccable`](https://github.com/pbakaus/impeccable)): Production-grade frontend execution and iteration workflow. Handles routing between Brand and Product registers and imposes strict design laws.
  * **Action Verbs Suite (19 sub-skills)**: `adapt`, `animate`, `arrange`, `bolder`, `clarify`, `colorize`, `critique`, `delight`, `distill`, `extract`, `harden`, `normalize`, `onboard`, `optimize`, `overdrive`, `polish`, `quieter`, `shape`, `typeset`.
* **`ui-ux-pro-max`** ([`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)): Design system intelligence and style/typography search across 9 tech stacks.
* **`superdesign`** ([`superdesigndev/superdesign-skill`](https://github.com/superdesigndev/superdesign-skill)): Turns generic AI-slop UI into shippable, tasteful frontend interfaces.
* **`ui-skills`** ([`ibelick/ui-skills`](https://github.com/ibelick/ui-skills)): Opinionated, evolving constraints built specifically for Design Engineers.
* **`scrollcraft`** ([`nateherkai/scroll-craft`](https://github.com/nateherkai/scroll-craft)): Dedicated agent skill that builds premium, narrative-driven, scroll-heavy websites and holds them to strict typographic and spacing standards.
* **`design-dna`** ([`zanwei/design-dna`](https://github.com/zanwei/design-dna)): 3-phase workflow for extracting, structuring, and applying design identity across three dimensions: **Design System** (measurable tokens), **Design Style** (qualitative mood/composition), and **Visual Effects** (Canvas, WebGL, 3D, particles, shaders, scroll effects). Turns screenshots or reference URLs into reusable JSON DNA profiles.
* **`design-extract`** ([`Manavarya09/design-extract`](https://github.com/Manavarya09/design-extract)): Crawls any live website DOM with one command to reverse-engineer its complete design system (DTCG tokens, semantic/primitive scales, Tailwind v4, Figma variables, `shadcn/ui`, CSS health audit, WCAG remediation) via CLI, Claude plugin, and MCP.

### Supporting Skill Modules
* **Core Systems & Stitch**: `design-dna`, `design-md`, `stitch-ui-design`, `motion-design`, `teach-impeccable`, `radix-ui-design-system`, `tailwind-design-system`, `web-design-guidelines`
* **Agentic UI & Taste**: `agent-interface-design`, `claude-design` ([`jiji262/claude-design-skill`](https://github.com/jiji262/claude-design-skill)), `design-taste-frontend` ([`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill)), `gpt-taste`, `stitch-design-taste`
* **Design Styles**: `industrial-brutalist-ui`, `minimalist-ui`, `high-end-visual-design`, `huashu-design` ([`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design))
* **Prototyping, Canvas & Layout**: `brainstorm-prototypes`, `canvas-design`, `design-shotgun`, `every-style-editor`, `layout`, `redesign-existing-projects`, `scroll-experience`
* **Visual Editing & Validation**: `colorize`, `design-consultation`, `design-html`, `design-review`, `frontend-design`, `logo-design-skill`, `ui-visual-validator`
* **Graphic & Deck Asset Generation**: `blog-cover-generator`, `graphic-case-study`, `graphic-chart`, `graphic-ebook`, `graphic-gif`, `graphic-slide-deck`, `noise-to-linkedin-carousel`
* **Video & Motion Production**: `brag` ([`gtg922r/brag`](https://github.com/gtg922r/brag)), `motion-video-kit`, `remotion-best-practices`, `feature-video`, `vid-motion-graphics`, `vid-product-launch`, `vid-sizzle-reel`, `image-to-code`, `gemini-imagegen`
* **Hyperframes Suite ([`heygen-com/hyperframes`](https://github.com/heygen-com/hyperframes))**: `hyperframes`, `hyperframes-animation`, `hyperframes-audio`, `hyperframes-cli`, `hyperframes-core`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-product-launch-video`, `hyperframes-registry`

### Design Logic, Anti-Slop & Motion Grammar
* **`motion-design` (LottieFiles Motion Director — [`LottieFiles/motion-design-skill`](https://github.com/LottieFiles/motion-design-skill))**: Universal, implementation-agnostic motion design framework. Guides emotional intent, timing rules, easing curves, choreography (1/3 rule + stagger patterns), and Disney animation principles adapted for UI across CSS, Framer Motion, GSAP, Lottie, and Spring physics.
* **`design-motion-principles` ([`kylezantos/design-motion-principles`](https://github.com/kylezantos/design-motion-principles))**: Two-mode motion design skill (build interactive components with purposeful motion or audit existing animations), distilled from the published work of **Emil Kowalski, Jakub Krehel, and Jhey Tompkins**.
* **`make-interfaces-feel-better` ([`jakubkrehel/make-interfaces-feel-better`](https://github.com/jakubkrehel/make-interfaces-feel-better))**: Practical craft skill by Jakub Krehel covering 16 concrete techniques and implementation details for typography, surfaces, spring animations, and UI feel.
* **`refactoring-ui-skill` ([`s0xDk/refactoring-ui-skill`](https://github.com/s0xDk/refactoring-ui-skill))**: Applies the concrete design rules from Wathan & Schoger's *Refactoring UI*—constrained spacing/type/color/shadow scales, hierarchy through weight and color, and depth through emulated light.
* **`design-for-ai` ([`ryanthedev/design-for-ai`](https://github.com/ryanthedev/design-for-ai))**: Teaches visual design fundamentals—typography, color, composition, proportions, and visual hierarchy.
* **`kill-ai-slop` ([`yetone/kill-ai-slop`](https://github.com/yetone/kill-ai-slop))**, **`anti-slop` ([`dmmulroy/anti-slop`](https://github.com/dmmulroy/anti-slop))**, & **`desloppify` ([`peteromallet/desloppify`](https://github.com/peteromallet/desloppify))**: Field guides, linting rules, and agent harnesses that scan projects for visual, code, and copy tics of AI-generated products and strip them out.
* **`motion-video-kit` (The Gauntlet & Grammar — [`echris6/motion-video-kit`](https://github.com/echris6/motion-video-kit))**: Implements rigorous design logic for motion graphics. Includes the "Gauntlet loop" (an independent-critic quality gate), a codified motion grammar with 16 reusable mechanisms, and a strict quality bar for pacing, contrast, and audio targeting.
* **`logo-design-skill` (Identity Logic — [`kaankiziltug/logo-design-skill`](https://github.com/kaankiziltug/logo-design-skill))**: Disciplined identity design logic using a reference library of 1,400+ SVG logos to study construction and category conventions, applying rigorous testing (optical corrections, squint tests, shelf tests) before generating production-ready branding kits.

### Specialized Visual, Video & Document Skills
* **Document, Editorial Diagram & Deck Typesetting**:
  * **[`tw93/Kami`](https://github.com/tw93/Kami)**: Layout rules and templates that let AI agents export publication-grade PDF, PNG, and editable PowerPoint (`pptx`).
  * **[`hugohe3/ppt-master`](https://github.com/hugohe3/ppt-master)**: Turns documents or topics into native PowerPoint decks with native shapes, transitions, animations, data-backed charts, and speaker-note narration.
  * **[`cathrynlavery/diagram-design`](https://github.com/cathrynlavery/diagram-design)**: Editorial diagram-design skill by Cathryn Lavery that renders 39+ self-contained HTML + SVG diagram types matched to your brand style sheet (avoiding generic Mermaid slop).
  * **[`eyadsibai/archify`](https://github.com/eyadsibai/archify)**: Turns plain-English system descriptions into self-contained, theme-toggling (dark/light) HTML, PNG, and SVG architecture, sequence, and state diagrams.
  * **[`coleam00/excalidraw-diagram-skill`](https://github.com/coleam00/excalidraw-diagram-skill)**: Generates clean, hand-drawn-style Excalidraw architecture and system diagrams.
  * **[`oil-oil/beautify-github-readme`](https://github.com/oil-oil/beautify-github-readme)**: README visual design, typography, and SVG layout skill.
  * **[`enesozturk/dimensional-drawing`](https://github.com/enesozturk/dimensional-drawing)** (`dimensional-drawing` & `dimensional-drawing-motion`): Creates Apple-style dimensional technical drawings and animated motion blueprints of UI components with extension lines, dimension callouts, leader lines, and spec tables.
  * **[`caru-ini/stack-diagram`](https://github.com/caru-ini/stack-diagram)** (`stack-diagram`): Generates cloud-vendor-style architecture diagrams with real brand logos, orthogonal connectors, and HTML/PNG/TSX outputs.
  * **[`haydenschmitty/floorplan`](https://github.com/haydenschmitty/floorplan)** (`floorplan`): Maps any codebase or PRD into an interactive multi-zoom node-graph `floorplan/index.html`.
  * **[`plannotator/effective-html`](https://github.com/plannotator/effective-html)** (`design-artifact`, `html-diagram`, `html-prototype`, `big-pics-little-words`): Self-contained HTML diagrams, interactive prototypes, and high-signal visual artifacts.
* **Video, Film & Animation Production Studios**:
  * **[`NiazMorshed2007/reanimate`](https://github.com/NiazMorshed2007/reanimate)** (`reanimate`): Reverse-engineers any live web animation frame-by-frame via Playwright and proves the reconstructed animation moves identically.
  * **[`JuneYaooo/rea-video`](https://github.com/JuneYaooo/rea-video)** (`rea-video`): Reverse-engineers any video shot-by-shot (filmed, AI-generated, or coded) and outputs a complete reconstruction blueprint.
  * **[`edenfunf/reelmimic`](https://github.com/edenfunf/reelmimic)** (`reelmimic-*`): Multi-agent video crew that clones the visual, pacing, and motion style of any reference video.
  * **[`bangtutorial/bang-motion`](https://github.com/bangtutorial/bang-motion)** (`bang-motion`): Browser motion-graphics agent skill for openers, promos, kinetic typography, and 5 explainer styles in a single `index.html`.
  * **[`Vincentwei1021/video-talkcraft`](https://github.com/Vincentwei1021/video-talkcraft)** (`video-talkcraft`) & **[`Vincentwei1021/anything2explainer`](https://github.com/Vincentwei1021/anything2explainer)** (`anything2explainer`): Voiceover-driven motion-design studio (109 motion recipe cards, anti-slideshow camera) and black-canvas narrated explainer generator with Remotion.
  * **[`alchaincyf/huashu-motion`](https://github.com/alchaincyf/huashu-motion)** (`huashu-motion`) & **[`alchaincyf/huashu-art-motion`](https://github.com/alchaincyf/huashu-art-motion)** (`huashu-art-motion`): Commercial launch films with auto-composed music + frame-pointing edits, and 35 fine-art animation styles with 9 narration grammars.
  * **[`mromidev/claude-animated-shorts`](https://github.com/mromidev/claude-animated-shorts)** (`claude-animated-shorts`), **[`zhgarylu/claude-video`](https://github.com/zhgarylu/claude-video)** (`lemo-film`), **[`kaomei/stickman-video-director`](https://github.com/kaomei/stickman-video-director)**, & **[`Ootto-AI/claude-content-skills`](https://github.com/Ootto-AI/claude-content-skills)**: Viral 2D-in-3D animated shorts, 61 code-made film styles, automated stickman video director, and 55 Instagram Reel growth skills.
  * **[`EL4CTEO/blender-skills`](https://github.com/EL4CTEO/blender-skills)** (`28 blender-* skills`), **[`achimala/dream-loop`](https://github.com/achimala/dream-loop)** (`dream-loop`), **[`elvarofficial/teardown`](https://github.com/elvarofficial/teardown)** (`teardown`), & **[`patch-gg/pixelfx`](https://github.com/patch-gg/pixelfx)** (`pixelfx`): Professional Blender 5.2 agent workflows, Blender + critic loop, interactive 3D mechanical teardown simulators, and 244 procedural pixel-art VFX in code.
  * **[`andyhuo520/digital-human-koubo`](https://github.com/andyhuo520/digital-human-koubo)** (`digital-human-koubo` & `finance-explainer`): Generates AI digital-human talking-head videos from one photo with 5 editing styles, 48 creator packaging components, and Remotion financial explainer templates.
  * **[`elayadesign/ai-design-skills`](https://github.com/elayadesign/ai-design-skills)** (`landing-page-design` & `figma-designer`): High-converting landing page design skill and direct Figma canvas design generation workflow.
  * **[`manalkaff/opendesign`](https://github.com/manalkaff/opendesign)**: Local-first design workflow (10 sub-skills including `create-design-system`, `interactive-prototype`, `wireframe`, `make-a-deck`, `handoff-to-claude-code`) that turns coding agents into collaborative product designers using `SKILL.md` and `DESIGN.md`.
  * **[`lemomo-ai/lemo-opuscar`](https://github.com/lemomo-ai/lemo-opuscar)**: Claude Code skill and local mini-film studio that makes short films entirely in code across 59 visual styles (HTML5 Canvas/WebGL + Python audio + FFmpeg).
  * **[`tejashmakwana/motionmaxxing`](https://github.com/tejashmakwana/motionmaxxing)**: Agent skill that turns generic AI video into polished, professional motion graphics by programmatically analyzing frames and applying 53 measured motion rules.
  * **[`gtkottman/mortiflix-oss`](https://github.com/gtkottman/mortiflix-oss)**: Open-source local motion design studio where AI builds videos step-by-step with stage approvals and frame-pinned revision notes.
  * **[`faviovazquez/showtime`](https://github.com/faviovazquez/showtime)**: Local video studio for AI coding agents to write scripts, pick music, and render commercials locally with voiceovers and sound effects.
  * **[`cth9191/animate`](https://github.com/cth9191/animate)**: Code-drawn story animation tool inside Claude Code that matches reference screenshots/mood boards and syncs music to the beat.
  * **[`hypit-ai/hypit`](https://github.com/hypit-ai/hypit)**: Open-source tool that lets an AI agent deconstruct and clone viral video structure, captions, B-roll, and effects.
  * **[`diffusionstudio/lottie`](https://github.com/diffusionstudio/lottie)**: Generates production-ready Lottie JSON animations with Claude Code or Codex.
  * **[`kajisho5/ffmpeg-skill`](https://github.com/kajisho5/ffmpeg-skill)**: Local video editor for coding agents (42 FFmpeg tools + MCP server for cuts, captions, reframing, loudness, and platform exports).
  * **[`sarpstar/cinecode`](https://github.com/sarpstar/cinecode)** (`cinecode`): Code-made films, ads, and music videos in Quick single-HTML mode or 6-step Three.js Film mode with `-14 LUFS` MP4 mastering.
  * **[`Vincentwei1021/video-shotcraft`](https://github.com/Vincentwei1021/video-shotcraft)** (`video-shotcraft`): Remotion product promo studio featuring 124 shot recipe cards, Ink Press template, beat sync, sound design, and JianYing export.
  * **[`Nyxera0x/cutaway`](https://github.com/Nyxera0x/cutaway)** (`cutaway`): Turns one reference picture into a Three.js robotic exploded-view simulator and 60fps scored film.
  * **[`Pouryaak/wobnimo`](https://github.com/Pouryaak/wobnimo)** (`wobnimo-mascot`): Builds custom living 3D brand mascots with 10 behavioral states on the ~25 KB Wobnimo Web engine.
  * **[`vincentsch/explainroo`](https://github.com/vincentsch/explainroo)** (`explainroo`): Creates offline narrated MP4 explainer videos using local Kokoro TTS, Whisper word timing, and Canvas.
  * **[`klad-app/klad`](https://github.com/klad-app/klad)** (`klad`): Collaborative vector, paint, and pixel-art CLI/editor workflow in `.klad` bundles.
  * **[`Motionsites-AI/claude-skill`](https://github.com/Motionsites-AI/claude-skill)** (`motionsites-web-builder`): Cinematic landing page and hero builder using MotionSites visual recipes and screenshot-and-fix loops.
  * **[`OpenMontageInc/OpenMontage`](https://github.com/OpenMontageInc/OpenMontage)** (`openmontage` — `.agents/skills` suite): 12 agentic video production pipelines plus modular `video-toolkit`, `website-to-video`, `motion-graphics`, and `character-animation-qa` skills.
  * **[`zeative/motion-educator`](https://github.com/zeative/motion-educator)** (`motion-educator`): Code-driven 3D documentary teardown and motion-graphics film engine with pinned labels and narration.
  * **[`codepawl/crucible`](https://github.com/codepawl/crucible)** (`build-crucible-scene`, `render-crucible-media`): Agent-driven 3D scene composition, lighting, HDRI, fog, and render skill pack.
  * **[`qualixar/brief2mp4`](https://github.com/qualixar/brief2mp4)** (`brief2mp4`): Written brief-to-verified MP4 motion-graphics and 3D Blender pipeline.
  * **[`Sunghwan0112/spritecast`](https://github.com/Sunghwan0112/spritecast)** (`spritecast`): 3D-guided isometric sprite sheet and 8-direction character animation generator.
  * **[`avivgerz-hue/unslop`](https://github.com/avivgerz-hue/unslop)** (`unslop`): 72-rule UI craft linter, APCA contrast checker, and studio preset skill against generic AI slop.
  * **[`CK42BB/vox-explainer-skill`](https://github.com/CK42BB/vox-explainer-skill)** (`vox-explainer-skill`) & **[`hi-nikola/hand-drawn-explainer-video-nikola`](https://github.com/hi-nikola/hand-drawn-explainer-video-nikola)** (`hand-drawn-explainer`): Editorial Vox documentary explainers and stroke-by-stroke hand-drawn coded animations.
  * **[`lintsinghua/paint-mv-skills`](https://github.com/lintsinghua/paint-mv-skills)** (`paint-mv`, `paint-mv-storyboard`, `paint-mv-animate`, `paint-mv-render`): Watercolor music video production suite from audio + lyrics.
  * **[`openfilm/openfilm`](https://github.com/openfilm/openfilm)** (`openfilm`) & **[`academa-labs/manimgx`](https://github.com/academa-labs/manimgx)** (`manimgx`): Open-source browser-editable AI film skill and Rust/wgpu-accelerated Manim 3D math animation skill.
  * **[`higgsfield-ai/skills`](https://github.com/higgsfield-ai/skills)** (`@higgsfield/cli` + 9 companion skills: `higgsfield-generate` [Seedance 2.5 video, GPT Image 2.5, Nano Banana 2, Marketing Studio, Seed Audio 1.0, Virality Predictor], `higgsfield-soul-id`, `higgsfield-faceless-video`, `higgsfield-video-explainer`, `higgsfield-brandkit`, `higgsfield-product-photoshoot`, `higgsfield-marketplace-cards`, `higgsfield-youtube-thumbnail`, `higgsfield-websites`): Full Higgsfield AI terminal and agent skill suite.
  * **[`machina-exm/film-studio-skills`](https://github.com/machina-exm/film-studio-skills)**: 7 installable agent skills running an AI video production pipeline from script to locked, generation-ready shot prompts.
  * **[`jhartquist/claude-remotion-kickstart`](https://github.com/jhartquist/claude-remotion-kickstart)**: Programmatic video creation workflow with Claude Code and Remotion.
  * **[`pexoai/pexo-skills`](https://github.com/pexoai/pexo-skills)**, **[`cclank/lanshu-create-ai-presenter-video`](https://github.com/cclank/lanshu-create-ai-presenter-video)**, **[`gnipbao/story-to-handdrawn-video`](https://github.com/gnipbao/story-to-handdrawn-video)**, **[`letuandat131/whiteboard-animation-vi`](https://github.com/letuandat131/whiteboard-animation-vi)**, & **[`0xsline/StoryGen-Atelier`](https://github.com/0xsline/StoryGen-Atelier)**: Multimodal image/audio/video content creation, presenter video, hand-drawn comic animation, moving-hand whiteboard animation, and Gemini + Veo automated storyboarding.
  * **[`bergside/design-md-chrome`](https://github.com/bergside/design-md-chrome)** & **[`ConardLi/garden-skills`](https://github.com/ConardLi/garden-skills)**: Chrome style extractor for `DESIGN.md` skill generation and multi-skill web design collection.

---

## 2. Animation, 3D, WebGL & Shader Suites (GSAP & Three.js)
Granular engineering suites for high-performance web animations, custom GLSL shaders, isometric SVGs, and procedural 3D worlds:

* **The GSAP Suite ([`greensock/gsap-skills`](https://github.com/greensock/gsap-skills))**: `gsap-core`, `gsap-frameworks`, `gsap-performance`, `gsap-plugins`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-utils`
* **`threejs-skills` ([`CloudAI-X/threejs-skills`](https://github.com/CloudAI-X/threejs-skills)) & `3d-web-experience` & `shader-programming-glsl`**: Systematically builds interactive 3D scenes, custom vertex/fragment GLSL shaders, particle systems, lighting rigs, and WebGL experiences.
* **`img2threejs` ([`img2threejs/img2threejs`](https://github.com/img2threejs/img2threejs))**: Converts a single 2D reference image into a clean, code-only, procedural, animation-ready Three.js model (`THREE.Group` in TypeScript) using a deterministic 8-stage sculpting pipeline (`blockout` → `structural` → `form` → `material` → `surface` → `lighting` → `interaction` → `optimization`) with an AI vision-feedback loop.
* **`scroll-world` ([`oso95/scroll-world`](https://github.com/oso95/scroll-world))**: Agent skill that turns any brand into a scrollable 3D world landing page.
* **`anatomy` ([`wheresryan22/anatomy`](https://github.com/wheresryan22/anatomy))**: Agent skill for creating detailed, interactive isometric SVG illustrations of real-world machines and complex systems with optional WebGL shaders and 3D effects.
* **`3dviz-pro-max` ([`viettranx/3dviz-pro-max`](https://github.com/viettranx/3dviz-pro-max))**: Creative 3D visualization skill (Three.js/Blender scenes) featuring 223 recipes, 440 knowledge records, 22 proved kits, and 37 runnable studies.
* **`threejs-game-skills` ([`majidmanzarpour/threejs-game-skills`](https://github.com/majidmanzarpour/threejs-game-skills)) & [`awesome-gamedev-agent-skills`](https://github.com/gamedev-skills/awesome-gamedev-agent-skills)**: 74+ portable `SKILL.md` skills for building playable, AAA-style Three.js, PixiJS, Phaser, Godot, Unity, Unreal, and Bevy experiences.

---

## 3. UI Component Libraries, `DESIGN.md` Vaults, Prompt Hubs & Reference Engines
Curated component libraries, shader playgrounds, brand `DESIGN.md` vaults, and inspiration galleries for pulling high-end animated components and visual DNA directly into your work.

### `DESIGN.md` Brand Design System Vaults
* **[VoltAgent Awesome DESIGN.md](https://getdesign.md/)** ([`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) & [`skyeweis/awesome-design-md`](https://github.com/skyeweis/awesome-design-md)): Massive collection of `DESIGN.md` files analyzing popular brand design systems—drop one into a project so coding agents generate matching UI.
* **[Awesome Claude Design](https://github.com/rohitg00/awesome-claude-design)**: 68+ Claude Design `DESIGN.md` prompts organized by aesthetic family, remix recipes, skills, and teardowns.
* **[Awesome Design Tools](https://github.com/goabstract/Awesome-Design-Tools)**: Master directory of UI, animation, and design systems tools/plugins.

### Animated Component, Icon & Shader Libraries
* **[React Bits](https://reactbits.dev/)** ([GitHub](https://github.com/DavidHDev/react-bits)): Open-source React component library packed with animated, interactive, and customizable components, text animations, and backgrounds.
* **[Motion Primitives](https://github.com/ibelick/motion-primitives)**: Beautifully designed, easy-to-integrate motion components built with Framer Motion and Tailwind CSS.
* **[Animmaster Lib](https://animmasterlib.dev/)**: Frontend UI library offering hundreds of PRO-level animated components, scroll triggers, WebGL shaders, interactive hero sections, and advanced text/mouse effects.
* **[Nohira Motion](https://motion.nohira.net/#components)**: Collection of 300+ premium, Awwwards-inspired frontend components and templates focusing on heavy scroll animations, WebGL shaders, and 3D page transitions.
* **[Skiper UI](https://skiper-ui.com/)**: Component library built on Tailwind CSS, `shadcn/ui`, and Motion.dev providing uncommon, production-ready interactive components (dynamic islands, custom tooltips, image reveals, token swaps).
* **[Vengeance UI](https://www.vengenceui.com/)**: Modern, animated React & Next.js component library featuring copy-paste and CLI-installable components powered by Tailwind CSS and Framer Motion.
* **[Origin Kit](https://www.originkit.dev/)**: Free collection of animated website components, UI sections, and creative effects built for React, Next.js, Vite, and Framer.
* **[Uiverse](https://uiverse.io/)**: Massive open-source community library of thousands of copy-paste CSS and Tailwind UI elements (buttons, cards, loaders, inputs, toggles).
* **[21st.dev](https://21st.dev/)**: Open-source `shadcn`/React animated component and copy-paste prompt registry built for AI coding agents.
* **[Shadcn Space](https://shadcnspace.com/)**: Curated platform offering production-ready templates, blocks, and components built on Tailwind CSS and `shadcn/ui` for React and Next.js.
* **[Toools.design](https://www.toools.design/)**: Growing archive of 1,500+ curated UI/UX, icon, typography, mockup, and design resources.
* **[The Prompt Index — SKILL.md Library](https://www.thepromptindex.com/skill-database.php)**: Searchable directory of 2,639+ downloadable `SKILL.md` agent skills.
* **[Some Claude Skills](https://someclaudeskills.com/skills/)** ([`erichowens/some_claude_skills`](https://github.com/erichowens/some_claude_skills)): Curated portal of 190+ modular expert skills for Claude Code across Metal shaders, 3D Gaussian Splatting, ReactFlow DAG visualizations, Playwright visual testing, and architecture.
* **[Morphicons](https://www.morphicons.com)** ([`guillermolg00/morphicons`](https://github.com/guillermolg00/morphicons)): Universal stroke-based SVG icon morphing with spring physics (~7 KB gzip, zero dependencies).
* **[Pokemon Cards CSS](https://poke-holo.simey.me/)** ([`simeydotme/pokemon-cards-css`](https://github.com/simeydotme/pokemon-cards-css)): Advanced CSS holographic, blend-mode, gradient, and 3D tilt shaders/filters.
* **[Pacifio UI](https://ui.pacifio.dev/)** ([`pacifio/ui`](https://github.com/pacifio/ui)): "The shadcn for agent UI"—framework-agnostic design language for dense, AMOLED-black, multi-surface interfaces.
* **[mapcn](https://github.com/AnmolSaini16/mapcn)**: Zero-config, customizable `shadcn`-style map components for React.
* **[Airship](https://airship.design)** ([`0xnyn/airship`](https://github.com/0xnyn/airship)): Figma-like visual editor built specifically for Claude Code, Codex, and OpenCode.
* **[Ditto](https://www.ditto.site/)**: Clones any live website into clean, production-ready code with components, design tokens, interactions, hover effects, REST API, and MCP server.
* **[Refero Styles](https://styles.refero.design/)**: Curated Design Systems built specifically for AI coding agents.
* **[Oversight Supply](https://supply.madebyoversight.com/sections?price=free#library)**: Free, copy-ready website UI sections library.
* **[Kevin Adams (`ikevinadams.com`)](https://www.ikevinadams.com/)**: High-craft interactive portfolio target for animation reverse-engineering (`reanimate` / `rea-video`).
* **[God of Prompt](https://godofprompt.ai/prompt-library/generate-hyperrealistic-mugshot-portraits)**: Hyper-realistic portrait and visual prompt library.
* **[Polyfork 3D Catalog](https://polyfork.dev/)** ([`lucas-martinic/polyfork-catalog`](https://github.com/lucas-martinic/polyfork-catalog)): 3,251 free CC-BY-4.0 low-poly 3D GLB models and 32 themed Three.js kits.
* **[OpenDesign (`nexu-io/open-design`)](https://github.com/nexu-io/open-design)** & **[RAEA (`shinyobjectz/raea`)](https://github.com/shinyobjectz/raea)**: Local-first collaborative AI design workspace (★107k+) and Rust/Bevy GPU React video/3D rendering engine.
* **[OpenUI](https://openui.fly.dev)** ([`wandb/openui`](https://github.com/wandb/openui)) & **[CopilotKit](https://docs.copilotkit.ai)** ([`CopilotKit/CopilotKit`](https://github.com/CopilotKit/CopilotKit)): Live generative UI rendering and AG-UI frontend stacks.

### 3D, WebGL, Scroll & Video Ecosystems
* **[ThreeUI](https://github.com/MengTo/threeui)**: Premium 3D UI interfaces and WebGL design references (160+ 3D hero sections and shaders).
* **[HorizonX](https://horizonx.so/)**: Premium UI, design, and code library featuring Three.js experiments, WebGL shaders, textures, and Figma mockups.
* **[Scroll Craft](https://github.com/nateherkai/scroll-craft)** & **[Kubeez Scroll World Video](https://github.com/KubeezMedia/kubeez-scroll-world-video)**: Continuous-world filmic scroll sites and scroll-scrubbed "fly through the world" video demos.
* **[HTML-in-Canvas](https://github.com/fimbox/html-in-canvas)**: Experimental Chrome workflow placing interactive HTML DOM screens directly inside 3D WebGL space.
* **[ManimGX](https://manimgx.academa.ai)** ([`academa-labs/manimgx`](https://github.com/academa-labs/manimgx)): Blazing-fast math and 3D animation engine for agents (Manim Python API on a Rust GPU core).
* **[Video-Use](https://video-use.com)** ([`browser-use/video-use`](https://github.com/browser-use/video-use)), **[FireRed-OpenStoryline](https://github.com/FireRedTeam/FireRed-OpenStoryline)**, **[ViMax](https://github.com/HKUDS/ViMax)**, **[ArtCraft](https://getartcraft.com)** ([`storytold/artcraft`](https://github.com/storytold/artcraft)), & **[FilmCraft](https://github.com/storytold/filmcraft)**: Agentic video directing, storyboarding, and nonlinear editing engines.
* **[Anime.js v4 (`juliangarnier/anime`)](https://animejs.com)**: High-performance zero-dependency JavaScript engine for CSS, SVG, DOM, timelines, and scroll choreography.
* **[Sand3D (`Sandflow-ai/sand3d`)](https://sandflow.ai/sand3d/)**, **[Vork (`voyager-so/vork`)](https://voyager.so/vork)**, & **[Estella (`esengine/estella`)](https://estellaengine.com/)**: Python LLM-first 3D modeling library, headless Rust 3D/VFX rendering engine, and 2D/3D WASM game engine.
* **[Freefield (`neuregex/freefield`)](https://github.com/neuregex/freefield)**, **[Ink Studio (`siliconjungle/shapeshift-labs-ink-studio`)](https://github.com/siliconjungle/shapeshift-labs-ink-studio)**, **[NeonClipping](https://github.com/iamajmeena/neonclipping)**, & **[Rune (`anomalyco/rune`)](https://github.com/anomalyco/rune)**: Open-weight ComfyUI Higgsfield alternative, pixel-art Gaussian splat animation toolkit, self-hosted 9:16 video clipping, and Rust native UI framework.

### AI Motion Prompts, Image/Video Prompt Vaults & Inspiration Galleries
* **[Scrolltide](https://scrolltide.co/)**: Curated prompt and template library for building cinematic, scroll-driven websites—copy structured prompts directly into AI coding agents to spin up production-ready animated layouts.
* **[Prompt Motion](https://prompt-motion.com/)**: Gallery and resource hub showcasing motion design pieces, UI animations, and creative coding generation prompts.
* **[Awesome Claude 5.5 Videos](https://github.com/athemeroy/awesome-claude-5-5-videos)** ([`osp.fyi/awesome-opus5-5-videos`](https://osp.fyi/awesome-opus5-5-videos)): 475+ examples of motion graphics, 3D scenes, explainers, and interactive demos created with Claude, linked to the exact prompts and workflows behind them.
* **[Godly](https://godly.design/)**: Curated gallery of astronomically good web design, interactive motion, and creative developer portfolios (prime target for `design-dna` and `design-extract`).
* **Generative Image & Video Prompt Vaults**:
  * **[Nano Banana Pro Prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts)** (`YouMind-OpenLab`), **[Awesome Nano Banana Images](https://github.com/PicoTrex/Awesome-Nano-Banana-images)** (`PicoTrex`), & **[Awesome NanoBanana Pro](https://github.com/ZeroLu/awesome-nanobanana-pro)** (`ZeroLu`): 10,000+ curated Gemini image generation prompts and visual studies.
  * **[Awesome GPT Image 2 Prompts](https://github.com/YouMind-OpenLab/awesome-gpt-image-2)**: 2,000+ curated prompts for commercial-grade illustrations and typography rendering.
  * **[Awesome Seedance 2.0 Prompts](https://github.com/ZeroLu/awesome-seedance)** (`ZeroLu` & [`YouMind-OpenLab/awesome-seedance-2-prompts`](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts)): 2,000+ cinematic, UGC, ad, and motion video generation prompts.

---

## 4. Design, UI, 3D & Media MCP Servers

| MCP Server / Repo | Primary Domain | Capability |
| :--- | :--- | :--- |
| **[`davideast/stitch-mcp`](https://github.com/davideast/stitch-mcp)** | UI Design Systems | CLI & MCP for moving AI-generated UI designs from Google's **Stitch** platform directly into your local dev workflow. |
| **[`Manavarya09/design-extract`](https://github.com/Manavarya09/design-extract)** | Design System Extraction | Crawls any live URL over Playwright/MCP to extract DTCG design tokens, Tailwind v4 configs, `shadcn/ui` themes, and Figma variables. |
| **[`Ditto`](https://www.ditto.site/)** | Live Site-to-Code Cloning | Converts live websites into production-ready components, tokens, interactions, and micro-animations via REST API and MCP server. |
| **`Higgsfield MCP`** | Animated Hero & Media | Connects Claude Code directly to Higgsfield to generate keyframes, transitions, and animated hero sections from prompts. |
| **[`vibheksoni/stealth-browser-mcp`](https://github.com/vibheksoni/stealth-browser-mcp)** | UI Cloning & DOM | Stealth Chrome DevTools Protocol MCP with network hooks, DOM extraction, and **pixel-accurate UI cloning**. |
| **[`reallygood83/ui-expert-mcp`](https://github.com/reallygood83/ui-expert-mcp)** | UI/UX Review | Dedicated UI/UX design expert MCP server. |
| **[`ahujasid/mcp-for-blender`](https://github.com/ahujasid/mcp-for-blender)** | 3D Modeling & Render | Connects Claude/LLMs directly to **Blender 3D** to build, texture, light, and render 3D scenes via natural language. |
| **[`pascalorg/editor`](https://github.com/pascalorg/editor)** | 3D Architecture & CAD | Open-source 3D architectural & floorplan editor (React Three Fiber) with a local CLI and MCP tools. |
| **[`pireel/pireel`](https://github.com/pireel/pireel)** | Agentic Video Editing | Open-source CapCut/ChatCut alternative drivable by any AI agent over MCP. |
| **[`0xsline/OpenChatCut`](https://github.com/0xsline/OpenChatCut)** | Multi-Track Video + Remotion | Local-first conversational AI video editor with a multi-track timeline, Agent Skills, MCP server, and Remotion rendering. |
| **[`kajisho5/ffmpeg-skill`](https://github.com/kajisho5/ffmpeg-skill)** | Video/Audio Processing | Exposes 42 local FFmpeg video/audio editing tools via a machine-readable contract and MCP server. |
| **[`CopilotKit/generative-ui`](https://github.com/CopilotKit/generative-ui)** | Generative UI Protocols | Reference MCP Apps, AG-UI, and A2UI/Open-JSON-UI generative interface implementations. |
| **[`allvoicelab/AllVoiceLab-MCP`](https://github.com/allvoicelab/AllVoiceLab-MCP)** | Voice & Video Dubbing | Official MCP server for TTS voiceovers, voice cloning, and video translation. |

---

## 🔒 Security & License Architecture

1. **Built-in Meta-Skills (`skills/*/SKILL.md`)**: Original orchestrator and router skills written for this repository and licensed under **MIT**.
2. **Upstream Skills (`registry.json`)**: Fetched directly from their canonical upstream GitHub repositories at install time. Each upstream skill retains its original author's license (`MIT`, `Apache-2.0`, `AGPL-3.0`, etc.).
3. **Quarantine Static Audit**: Every upstream skill cloned via `install.ps1` or `install.sh` is inspected in an isolated temp folder before installation to guard against prompt injection, malicious `package.json` install hooks, hidden bidirectional Unicode characters, and shell pipe execution.
