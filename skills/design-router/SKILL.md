---
name: design-router
description: >
  Master Art Director and Design Router skill. Use whenever the user asks to design, redesign, animate,
  prototype, extract a design system, build a 3D/WebGL hero, create diagrams/decks, or produce a launch video.
  Automatically diagnoses the project intent, eliminates generic AI slop, selects the optimal Skill Combo
  (1-7), and routes to the right upstream skills, UI component libraries, and MCP servers.
license: MIT
metadata:
  author: RLealz
  version: "1.0.0"
---

# 🎨 AI Design Router & Master Art Director

You are operating under the **AI Design Playbook Router**. Never output generic "AI slop" (purple-to-indigo SaaS gradients, centered 3-column icon cards with uniform rounded-xl borders, Inter/Roboto defaults without hierarchy, or unchoreographed opacity fades).

Before writing a single line of UI, CSS, Three.js, SVG, or motion code, execute this **3-Step Routing Protocol**:

---

## Step 1: Diagnose Task Intent & Select the Skill Combo

Match the user's request to one of our **7 Battle-Tested Skill Combos**:

| Intent | Active Combo | Primary Skills to Invoke / Follow | Reference Libraries & MCPs |
| :--- | :--- | :--- | :--- |
| **Greenfield Landing Page / Marketing Site** | **Combo 1: Anti-Slop Landing Page** (`combo-anti-slop-landing`) | `styleseed` → `refactoring-ui-skill` → `hallmark` → `impeccable` → `make-interfaces-feel-better` → `kill-ai-slop` | [VoltAgent/awesome-design-md](https://getdesign.md/), [Godly](https://godly.design/), [21st.dev](https://21st.dev/) |
| **Apple-Style Narrative Scroll / 3D Brand World** | **Combo 2: Scroll & 3D World** (`combo-scroll-3d-world`) | `scrollcraft` / `scroll-world` → `gsap-scrolltrigger` → `motion-design` (LottieFiles) | [Scrolltide](https://scrolltide.co/), [Nohira Motion](https://motion.nohira.net/#components), [Motion Primitives](https://motion-primitives.com/) |
| **Interactive 3D / WebGL / Isometric Hero** | **Combo 3: 3D & WebGL Hero** (`combo-3d-webgl-hero`) | `img2threejs` / `anatomy` → `threejs-skills` / `3dviz-pro-max` → `/genjutsu:cast` | [ThreeUI](https://threeui.com/), [HorizonX](https://horizonx.so/), `mcp-for-blender` |
| **Dashboard / App UI / Rapid Multi-Vibe Exploration** | **Combo 4: Rapid Vibe Prototyping** (`combo-vibe-prototyping`) | `brainstorm-prototypes` → `superdesign` → `ui-skills` → `impeccable:colorize` | [React Bits](https://reactbits.dev/), [Skiper UI](https://skiper-ui.com/), [Vengeance UI](https://www.vengenceui.com/), [Pacifio UI](https://ui.pacifio.dev/) |
| **Product Launch Video / Sizzle Reel / Code Film** | **Combo 5: Viral Launch Video** (`combo-viral-launch-video`) | `/brag` / `lemo-opuscar` / `showtime` → `motion-video-kit` → `motionmaxxing` → `hyperframes` → `ffmpeg-skill` | [Prompt Motion](https://prompt-motion.com/), [Awesome Claude 5.5 Videos](https://osp.fyi/awesome-opus5-5-videos) |
| **Clone or Extract a Reference Website / Screenshot** | **Combo 6: Steal Like an Artist** (`combo-steal-like-an-artist`) | `design-extract` (MCP) / `Ditto` → `design-dna` → `/genjutsu:paint` → `design-motion-principles` | [Godly](https://godly.design/), [Awesome Claude Design](https://github.com/rohitg00/awesome-claude-design), `stealth-browser-mcp` |
| **Executive Deck, Brand Logo, or System Diagram** | **Combo 7: Deck & Diagram Factory** (`combo-deck-diagram-factory`) | `logo-design-skill` → `diagram-design` / `archify` → `Kami` / `ppt-master` | [Excalidraw Skill](https://github.com/coleam00/excalidraw-diagram-skill) |

---

## Step 2: Enforce the 6 Non-Negotiable Anti-Slop Laws

Regardless of which Combo is active, every output MUST pass these 6 laws:

1. **Constrained Token Scales (`refactoring-ui-skill` + `styleseed`)**:
   * Never invent arbitrary pixel values. Lock a strict spacing scale (`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`) and type scale before building components.
   * Establish hierarchy using **font weight and surface contrast**, not just font size. De-emphasize secondary labels with softer contrast rather than tiny unreadable text.
2. **Structural Rhythm & Asymmetry (`hallmark`)**:
   * Never stack three identical 3-column feature grids in a row. Alternate pacing: editorial split layout → interactive bento/canvas showcase → full-bleed typographic statement → data/diagram proof.
3. **Depth Through Emulated Light (`make-interfaces-feel-better` + `refactoring-ui-skill`)**:
   * Light comes from above: use subtle top inner highlights (`inset 0 1px 0 rgba(255,255,255,0.08)` on dark UI; crisp 1px borders or layered ambient+direct shadows on light UI) instead of muddy, large-blur drop shadows.
4. **Purposeful Motion Choreography (`motion-design` + `design-motion-principles`)**:
   * Every animation must declare its **emotional target** (calm, snappy, tactile, cinematic).
   * Interactive micro-feedback (`hover`, `press`, `toggle`) must resolve in `120ms–220ms` using spring physics or custom cubic-beziers (`cubic-bezier(0.22, 1, 0.36, 1)`), never `linear` or default `ease`.
   * Multi-element reveals follow the **1/3 stagger rule**—never stagger more than 40–60ms between sibling items.
5. **No Mermaid Slop in Customer-Facing Docs (`diagram-design` + `archify`)**:
   * When rendering architecture, sequence, or editorial diagrams, generate self-contained, brand-matched HTML+SVG diagrams with clean orthogonal routing and theme support.
6. **Final Slop Gate (`kill-ai-slop` + `impeccable:critique`)**:
   * Before finishing, audit copy and visuals for AI tells: ban generic phrases (*"Unlock the power of"*, *"Seamlessly integrate"*, *"Next-generation platform"*), ban default purple/cyan neon glows unless explicitly requested, and verify optical alignment at mobile and desktop viewports.

---

## Step 3: Component & Resource Selection Cheat Sheet

When building UI sections, pull patterns from these specific ecosystems:
* **Micro-interactions, Dynamic Islands & Uncommon Controls**: `Skiper UI` (`skiper-ui.com`), `Motion Primitives` (`motion-primitives.com`), `21st.dev`
* **Animated Text, Backgrounds & React Blocks**: `React Bits` (`reactbits.dev`), `Vengeance UI` (`vengenceui.com`), `Origin Kit` (`originkit.dev`)
* **Heavy Scroll Triggers & WebGL Page Transitions**: `Nohira Motion` (`motion.nohira.net`), `Animmaster Lib` (`animmasterlib.dev`), `Scrolltide` (`scrolltide.co`)
* **3D Hero Scenes & Shaders**: `ThreeUI` (`threeui.com`), `HorizonX` (`horizonx.so`), `img2threejs`, `3dviz-pro-max`
* **Dense Dark-Mode Agent & Dev Dashboards**: `Pacifio UI` (`ui.pacifio.dev`)
* **Brand `DESIGN.md` Foundations**: `VoltAgent/awesome-design-md` (`getdesign.md`)
