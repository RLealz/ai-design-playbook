---
name: combo-discovery-audit
description: >
  Combo 0 Orchestrator: Pre-Design Discovery, Existing-Website Audit & Brand Fact-Lock (v2.2).
  ALWAYS run this pre-phase BEFORE moving to visual design when redesigning an existing website,
  migrating off a legacy CMS, or framing an ambiguous greenfield product. Orchestrates Playwright/DevTools
  MCP surface crawling, seo-audit, page-cro, site-architecture, brainstorming/office-hours, design-consultation,
  styleseed, and plan-design-review to lock `brand-facts.json`, `legacy-redirects.json`, and `AUDIT-BRIEF.md`.
license: MIT
metadata:
  author: RLealz
  version: "2.2.0"
---

# 🔍 Combo 0: Pre-Design Discovery, Website Audit & Fact-Lock

Never jump straight into layout, shaders, or CSS tokens on an unexamined brief or live website. Execute this **Pre-Design Analysis Phase** first so every downstream Combo (`1–14`) builds on verified facts, preserved brand equity, clean URL architecture, and scored design plans.

* **Scaffold Discovery Pack**: `.\install.ps1 -Template discovery-audit-pack -OutDir .\discovery`

---

## Choose Your Pre-Design Track

| Project Context | Active Track | Skills, Plugins & MCPs Orchestrated | Output Artifacts |
| :--- | :--- | :--- | :--- |
| **Redesigning an Existing Website / Legacy CMS** | **Track A: Live Surface & Conversion Audit** | `@playwright/mcp` / `chrome-devtools-mcp` / `stealth-browser-mcp` / `firecrawl-scraper` → `seo-audit` + `page-cro` + `site-architecture` + `positioning-audit` + `design-extract` | `surface-inventory.json`, `brand-facts.json`, `legacy-redirects.json`, `AUDIT-BRIEF.md` |
| **Greenfield Product / New Venture Brief** | **Track B: Product Wedge & Design System Framing** | `office-hours` (`gstack`) / `brainstorming` (`superpowers`) / `ce:brainstorm` → `competitor-teardown` → `design-consultation` (`gstack`) + `styleseed` → `plan-design-review` (`gstack`) | `brand-facts.json`, `AUDIT-BRIEF.md` (`R1–R8`), `DESIGN.md` + `STYLESEED.md` |

---

## Track A: Existing Website Redesign Audit (4 Gates Before UI)

### 1. Live Surface Crawl & Evidence Capture (`scripts/audit-live-surface.mjs` / `@playwright/mcp`)
* Capture baseline screenshots at **`320px`, `390px`, `768px`, and `1440px`** before writing any new code.
* Inspect public routes, `sitemap.xml`, CMS/REST endpoints, and DOM metadata to flag:
  * **Critical Credibility Debt**: Unedited CMS placeholder text, `"John Doe"` demo testimonials, leaked template brand strings, broken `404` portfolio/service links, or dead social/CTA buttons.
  * **Mobile & A11y Failures**: Above-the-fold logo bloat, horizontal scrollbar overflow at `320px/390px`, missing `<h1>`, or missing OpenGraph tags.

### 2. Verified Fact & Official Brand Mark Lock (`brand-facts.json`)
* Extract and lock **only verified published facts** (legal entity name, verified services, physical address, active phone/email, authentic photography).
* **Official Logo Preservation Rule**: Download and lock the organization's real SVG/PNG emblem. Downstream builders are strictly forbidden from replacing a real brand mark with an AI-generated icon unless explicitly requested.
* Separate **Confirmed Offers** from **Unconfirmed / Pending Items**—any unconfirmed event schedule, pricing tier, or stock list MUST use an explicit, honest empty state rather than fabricated placeholder numbers.

### 3. SEO, CRO & Information Architecture Plan (`seo-audit` + `page-cro` + `site-architecture`)
* Inventory every indexed legacy URL in `legacy-redirects.json` and assign an explicit disposition (`301 redirect` to new route vs `410/retire` for obsolete cart/demo pages).
* Diagnose why the current page leaks conversions (`page-cro`) and map the new section/page hierarchy (`site-architecture`).

---

## Track B: Greenfield Framing & Pre-Code Plan Review

1. **Challenge the Brief (`office-hours` / `brainstorming` / `ce:brainstorm`)**:
   * Settle who the first-screen visitor is, the single primary conversion action, what proof exists today vs. what needs honest announcement framing, and write testable `R1–R8` acceptance criteria in `AUDIT-BRIEF.md`.
2. **Synthesize Design System & Critique the Plan (`design-consultation` + `styleseed` + `plan-design-review`)**:
   * Benchmark 2–3 category references (for structural lessons, never copy plagiarism), lock `DESIGN.md` + `STYLESEED.md`, and score the plan `0–10` across hierarchy, typography, mobile ergonomics, and state completeness **before** handing off to **Combos 1–14**.
