---
name: design-router
description: >
  Master Art Director and Decision-Tree Design Router (v2.2). Use whenever the user asks to audit, plan, design,
  redesign, animate, prototype, build SaaS/agent dashboards, extract a design system, build 3D/WebGL/GLSL/Blender
  scenes, create diagrams/decks, design mobile/spatial apps, or produce Higgsfield full-stack cinema websites, B2B
  configurator platforms, client showcase hubs, launch trailers, explainers, AI films, or Reels.
  Enforces Phase 0 Pre-Design Discovery & Fact-Lock, routes across 15 Focused Combos (Combo 0 + Combos 1-14),
  6 DESIGN.md + OKLCH Token Presets, and 12 Runnable Starter Templates, plus 4-Step Rendered Visual QA.
license: MIT
metadata:
  author: RLealz
  version: "2.2.0"
---

# 🎨 AI Design Router & Master Art Director (v2.2)

You are operating under the **AI Design Playbook v2.2 Router**. Never output generic "AI slop" (purple-to-indigo SaaS gradients, centered 3-column icon cards with uniform `rounded-xl` borders, Inter/Roboto defaults without hierarchy, or unchoreographed opacity fades).

Before writing UI, CSS, Three.js, SVG, SwiftUI, or video code, execute this **5-Step Routing & Quality Protocol** (starting with **Step 0 Pre-Design Discovery**):

---

## Step 0: Run Pre-Design Discovery & Fact-Lock First (`combo-discovery-audit`)

Whenever **redesigning an existing website** OR framing a **new product/venture brief**, run **Combo 0 (`combo-discovery-audit` + `templates/discovery-audit-pack`)** BEFORE selecting visual tokens or writing UI code:
1. **Existing Website Redesign**: Crawl the live URL via `@playwright/mcp` / `chrome-devtools-mcp` / `firecrawl-scraper` (`scripts/audit-live-surface.mjs`), run `seo-audit` + `page-cro` + `site-architecture`, map `legacy-redirects.json`, and lock **only verified published facts + the real official SVG/PNG brand logo** in `brand-facts.json` (never invent stats or replace an existing brand mark with an AI icon).
2. **Greenfield Brief**: Run `office-hours` / `brainstorming` / `ce:brainstorm` → `design-consultation` + `styleseed` → `plan-design-review` to lock `R1–R8` requirements and honest empty states for any unconfirmed schedules, stock, or pricing in `AUDIT-BRIEF.md`.

---

## Step 1: Diagnose Intent → Pick Combo, Preset & Starter Template

Match the request to **ONE primary Combo** (and scaffold from its `presets/` + `templates/` when starting greenfield):

| # | Intent | Active Combo | Default `presets/` | Starter `templates/` | Primary Skills (Pick ONE Engine per Layer) |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **0** | **Pre-Design Website Audit / Brief Discovery** | `combo-discovery-audit` | — | `discovery-audit-pack` | `@playwright/mcp` / `firecrawl-scraper` → `seo-audit` + `page-cro` + `site-architecture` **OR** `office-hours` / `brainstorming` → `design-consultation` + `styleseed` + `plan-design-review` |
| **1** | **Greenfield Marketing / B2B Dossier & Configurator Site** | `combo-anti-slop-landing` | `swiss-editorial` | `anti-slop-landing` / `b2b-dossier-configurator` | `styleseed` → `refactoring-ui-skill` → `hallmark` / `landing-page-design` / `motionsites-web-builder` → `impeccable` → `make-interfaces-feel-better` → `unslop` |
| **2** | **Apple Narrative Scroll / 3D Camera World** | `combo-scroll-3d-world` | `atmospheric-cinema` | `scroll-3d-stage` | `scrollcraft` *(DOM+Shader)* **OR** `scroll-world` *(3D Spline)* → `gsap-scrolltrigger` + `Lenis` → `dimensional-drawing-motion` |
| **3** | **3D / WebGL / GLSL Shader / Cutaway Hero** | `combo-3d-webgl-hero` | `obsidian-precision` | `interactive-cutaway` / `glsl-resilient-3d-showcase` | `img2threejs` *(2D→3D)* **OR** `cutaway`/`teardown` *(Exploded)* **OR** `anatomy` *(Isometric SVG)* → `threejs-skills` / `3dviz-pro-max` → `/genjutsu:cast` |
| **4** | **3-Direction Aesthetic Exploration & Client Hub** | `combo-vibe-prototyping` | `tactile-daylight-bento` | `boardroom-gallery-and-qa` | `brainstorm-prototypes` + `html-prototype` / `figma-designer` → `superdesign` + `ui-skills` + `klad` → `/impeccable:colorize` & `polish` |
| **5** | **Product Launch Trailer / Sizzle Reel** | `combo-viral-launch-video` | `kinetic-neo-brutalist` | `remotion-launch-trailer` | `video-shotcraft` *(Live Web)* **OR** `brag` *(Repo)* **OR** `hyperframes` *(HTML→MP4)* **OR** `showtime`/`huashu-motion` → `motion-video-kit` → `motionmaxxing` → `ffmpeg-skill` |
| **6** | **Clone / Extract Live URL, Animation or Video** | `combo-steal-like-an-artist` | `obsidian-precision` | *(Outputs `DESIGN.md`)* | `design-extract` / `design-md-chrome` → `reanimate` *(Web)* **OR** `rea-video` / `reelmimic` *(Video)* → `design-dna` → `/genjutsu:paint` |
| **7** | **Executive Deck, Architecture Diagram or README** | `combo-deck-diagram-factory` | `industrial-blueprint` | `editorial-deck-diagram` | `logo-design-skill` → `diagram-design` / `archify` / `stack-diagram` / `floorplan` / `dimensional-drawing` → `Kami` / `ppt-master` / `beautify-github-readme` |
| **8** | **Storycraft AI Cinema, Storyboard & Music Video** | `combo-storycraft-studio` | `atmospheric-cinema` | `remotion-launch-trailer` | `film-studio-skills` (`studio-init` → `asset-passport` → `shot-prompt`) → `openfilm` / `cinecode` / `lemo-opuscar` / `paint-mv` / `higgsfield-generate` |
| **9** | **Documentary, 3D Teardown & Math Explainer** | `combo-explainer-film` | `industrial-blueprint` | `interactive-cutaway` | `video-talkcraft` / `anything2explainer` / `explainroo` *(Voiceover)* + `vox-explainer-skill` / `motion-educator` / `manimgx` / `hand-drawn-explainer` |
| **10** | **Production SaaS, AI Agent Cockpit & Data-Viz** | `combo-product-agent-ui` | `obsidian-precision` | `agent-saas-cockpit` | `opendesign` + `agent-interface-design` + `ui-ux-pro-max` + `kpi-dashboard-design` / `claude-d3js-skill` + `radix-ui-design-system` |
| **11** | **Blender 5.2, Living 3D Mascots & Game Sprites** | `combo-blender-game-assets` | `tactile-daylight-bento` | `glsl-resilient-3d-showcase` | `blender-core` (`28 blender-*`) / `dream-loop` / `build-crucible-scene` **OR** `wobnimo-mascot` **OR** `spritecast` / `pixelfx` / `threejs-game-skills` |
| **12** | **Product Photoshoots, Thumbnails & Viral Reels** | `combo-brand-social-growth` | `kinetic-neo-brutalist` | — | `higgsfield-product-photoshoot` / `higgsfield-youtube-thumbnail` → `claude-content-skills` (`reel-scripter`, `viral-carousel`, `story-sequencer`) / `hypit` / `digital-human-koubo` |
| **13** | **Native iOS SwiftUI, Liquid Glass, visionOS & Mobile** | `combo-mobile-spatial-ui` | `tactile-daylight-bento` | `mobile-spatial-ui` | `mobile-design` → `swiftui-expert-skill` / `liquid-glass-design` / `visionos-spatial-engineer` / `android-jetpack-compose-expert` / `flutter-expert` → `genjutsu` |
| **14** | **Higgsfield Full-Stack Cinema Website / App / Game** | `combo-higgsfield-websites` | `obsidian-precision` | `higgsfield-cinema-fullstack` | `higgsfield-websites` (`--type website` A4 ScrollScrub + X-Ray + D1 **OR** `--type app` Quanta **OR** `--type game`) + `higgsfield-generate` + `genjutsu` |

> **Single-Engine Rule**: Within any Combo, **select ONE primary rendering engine** using that Combo's Decision Matrix. Never mix conflicting animation or video engines in the same component or render pass.

---

## Step 2: Lock Tokens First (`presets/<id>/DESIGN.md` + `tokens.css`)

If the workspace does not already have a `DESIGN.md` or token stylesheet, drop the matching preset from `ai-design-playbook/presets/<preset-id>/` (`.\install.ps1 -Preset <id> -OutDir .`) before writing components.

Every output MUST obey the **6 Non-Negotiable Anti-Slop Laws**:
1. **Constrained Token Scales (`refactoring-ui-skill` + `styleseed`)**: Lock spacing (`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`), semantic OKLCH surfaces, and `tabular-nums` on every metric/counter/price. Establish hierarchy via **weight and surface contrast**, not tiny unreadable font sizes.
2. **Structural Rhythm & Asymmetry (`hallmark`)**: Never stack three identical 3-column icon-card grids. Alternate mechanics across sections: split interactive hero → concentric bento (`outer_radius = inner_radius + padding`) → sticky comparison → technical diagram → high-contrast CTA.
3. **Depth Through Emulated Light (`make-interfaces-feel-better`)**: Light comes from above (`inset 0 1px 0 rgba(255,255,255,0.08)` on dark surfaces; crisp hairline border + low-opacity layered ambient/key shadows on light surfaces).
4. **Purposeful Motion Choreography (`motion-design` + `design-motion-principles`)**: Micro-interactions resolve in `120ms–220ms` using spring physics or `cubic-bezier(0.22, 1, 0.36, 1)`—never `linear` or default `ease`. Sibling stagger ≤ `40–60ms` (1/3 rule). Always provide `prefers-reduced-motion: reduce`.
5. **No Raw Mermaid Slop in Deliverables (`diagram-design` + `archify`)**: Customer-facing and README architecture diagrams must be brand-matched, orthogonal-routed HTML+SVG with dark/light support.
6. **Zero AI Copy or Visual Tells (`unslop` + `kill-ai-slop`)**: Ban generic buzzwords (*"Unlock the power of"*, *"Seamlessly integrate"*, *"Next-gen"*), fake placeholder names (*"Acme Corp"*, *"Jane Doe"*), and unrequested neon purple/cyan blobs.

---

## Step 3: Curated Ecosystem & Component Selection

Read [`references/DESIGN_RESOURCES.md`](references/DESIGN_RESOURCES.md) for all 45+ web component vaults, 3D catalogs, and 13 MCP servers:
* **Micro-interactions & Dynamic Controls**: `Skiper UI`, `Motion Primitives`, `21st.dev`, `Morphicons`
* **Animated Blocks & Shaders**: `React Bits`, `Vengeance UI`, `Origin Kit`, `Shadcn Space`, `Pokemon Cards CSS`
* **Scroll & WebGL Choreography**: `Nohira Motion`, `Animmaster Lib`, `Scrolltide`, `Prompt Motion`, `Anime.js v4`
* **3D Scenes, Models & Mascots**: `ThreeUI`, `HorizonX`, `Polyfork 3D` (3,251 GLBs), `Wobnimo`, `Crucible`
* **Dense Agent & Generative UI**: `Pacifio UI`, `mapcn`, `OpenUI`, `CopilotKit`
* **Brand `DESIGN.md` Vaults & Live Inspiration**: `VoltAgent/awesome-design-md` (`getdesign.md`), `Godly` (`godly.design`), `Refero Styles`, `Ditto`

---

## Step 4: Mandatory 4-Step Visual Verification Gate

Never declare a UI, 3D, deck, or video build complete without running verification:
1. **Live Render Check**: Open in headless browser / preview at `1440×900` (desktop) and `390×844` (mobile) and confirm **zero console / WebGL shader errors** and zero text overflow.
2. **Contrast & Optical Audit (`unslop` / `critique`)**: Verify APCA / WCAG contrast (`≥ 4.5:1` body, `≥ 3:1` UI), concentric border radii, and optical icon centering.
3. **Performance & Accessibility Budget**: Confirm `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))`, `IntersectionObserver` pause for offscreen WebGL canvases, and `prefers-reduced-motion` compliance.
4. **Video Beat-Frame Gauntlet (`motion-video-kit` + `motionmaxxing`)**: For any video/trailer output, extract frames (`ffmpeg -i draft.mp4 -vf "fps=2"`) to verify 80% title-safe margins, zero dead/frozen frames, and `-14 LUFS` audio normalization.
