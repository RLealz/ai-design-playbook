# Pre-Design Discovery & Surface Audit Brief (`Combo 0`)

**Target Domain / Project:** `<https://example.com or Greenfield Project Name>`  
**Audit Date:** `<YYYY-MM-DD>`  
**Downstream Execution Combo Selected:** `<Combo 1..14>`

---

## 1. Existing Surface Diagnostic Matrix *(Redesigns Only)*

| Severity | Observed Surface Issue | Conversion / Trust Impact | Planned Redesign Resolution |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | `<e.g., Unedited CMS placeholder copy or broken 404 route>` | Destroys technical credibility on first visit | Replace with verified service specifications from `brand-facts.json` |
| **HIGH** | `<e.g., Missing H1 / OpenGraph metadata / 390px overflow>` | Poor organic discovery and broken mobile fold | Enforce semantic `<h1>`, OG card kit, and `320px–1920px` probe |
| **MEDIUM** | `<e.g., Inactive contact or social triggers>` | Drops high-intent mobile leads | Wire validated server persistence + direct phone/message action |

---

## 2. Requirements & Honest-Scope Contract (`R1–R8`)

| ID | Requirement | Acceptance Verification |
| :--- | :--- | :--- |
| **R1 — Identity** | First screen communicates official brand name, core proposition, location/market, and preserved logo. | Visual check at `390×844` and `1440×900`. |
| **R2 — Confirmed Scope** | Only verified services/products/events from `brand-facts.json` appear as active offers. | Cross-check DOM copy against `brand-facts.json`. |
| **R3 — Honest Empty States** | Unconfirmed schedules, stock, or pricing render explicit announcement states—never fake demo items. | Zero `"Lorem ipsum"`, `"John Doe"`, or invented stats. |
| **R4 — Media Provenance** | Authentic photography is separated from AI conceptual illustrations via explicit badges. | Provenance pill check on all generated visuals. |
| **R5 — Primary Conversion** | Every form/CTA connects to a real durable backend/D1/API or verified direct channel. | End-to-end submission test (no mock `alert()`). |
| **R6 — Copy & Locale** | Consistent target locale grammar and domain-accurate terminology. | Automated copy & anti-slop lint (`unslop` / `kill-ai-slop`). |
| **R7 — Ergonomics & A11y** | `0px` horizontal overflow (`320–1920px`), `≥ 44px` tap targets, keyboard focus, `prefers-reduced-motion`. | `probe-site.mjs` exit code `0`. |
| **R8 — SEO & Redirects** | Single `<h1>`, accurate canonical/OG tags, JSON-LD schema, and `legacy-redirects.json` mapped. | Head metadata + redirect map verification. |
