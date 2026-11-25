---
name: combo-explainer-film
description: >
  Combo 9 Orchestrator: Narrated Documentary, 3D Teardown, Math & Hand-Drawn Explainer Studio (v2.0).
  Use when turning technical topics, research papers, math/physics, financial analysis, or stories into
  voiceover-synced explainer videos. Pairs with preset `industrial-blueprint` and starter `interactive-cutaway`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🧠 Combo 9: Narrated Documentary, 3D Teardown & Math Explainer Studio

Use this orchestrator when building **educational documentaries, narrated technical explainers, 3D mechanical teardowns, GPU math/science visualizations, or stroke-by-stroke hand-drawn story animations**.

* **Install Combo**: `.\install.ps1 -Combo explainer-film -Target antigravity`
* **Recommended Preset**: `.\install.ps1 -Preset industrial-blueprint -OutDir .`

---

## Single-Engine Explainer Selection Matrix (Pick ONE Visual Engine!)

| Explainer Style | Primary Engine | Audio / Sync Mechanism |
| :--- | :--- | :--- |
| **Apple-Style Voiceover Motion Essay** | `video-talkcraft` | CPU word-level timestamps + 109 motion cards + 7-layer anti-PPT camera |
| **Black-Canvas Narrated Tech Explainer** | `anything2explainer` **OR** `explainroo` | Remotion word-synced scenes (`anything2explainer`) or offline Kokoro TTS + Whisper (`explainroo`) |
| **Vox Editorial Documentary** | `vox-explainer-skill` | Archival paper textures, highlighter callouts, kinetic charts & FFmpeg assembly |
| **3D Mechanical / Science Documentary** | `motion-educator` | Code-driven 3D teardown scenes with pinned 3D leader labels & synced narration |
| **3D Math, Physics & Algorithm Proof** | `manimgx` | Blazing-fast Rust/wgpu-accelerated Manim Python scenes |
| **Stroke-by-Stroke Hand-Drawn / Comic** | `hand-drawn-explainer` **OR** `story-to-handdrawn-video` **OR** `stickman-video-director` | Procedural SVG pen strokes, diary-comic panels, or animated stickman storytelling |
| **Financial / Market Breakdown** | `finance-explainer` | Remotion data-driven charts, ticker callouts, and metric animations |

---

## 4-Phase Explainer Execution Pipeline

### Phase 1: Semantic Beat Scripting (Ban "One Bullet Per Slide"!)
1. Structure the script around **Curiosity Gap (`0–8s`) → Mental Model Setup → Progressive Mechanism Unfolding → Concrete Counter-Example / Edge Case → Synthesis**.
2. Slice into **Semantic Beats** (`6–14 seconds` each), never mechanical one-sentence-one-new-box slides.

### Phase 2: Audio-First Word-Timestamp Anchor
* Always generate or ingest the **voiceover audio + word-level timestamps FIRST** (`Whisper` / `Kokoro` / `Fish Audio`).
* Lock every visual reveal, arrow draw, and camera pan to exact spoken word timestamps (`± 60ms` precision).

### Phase 3: Anti-Slideshow Spatial Choreography
* **One Focal Hero Per Beat**: When a new concept enters, the previous diagram dims (`opacity: 0.28`), shrinks, or pans aside to yield visual hierarchy (`video-talkcraft` Yield Law).
* Maintain continuous subtle camera motion or progressive SVG path drawing (`stroke-dashoffset`) so comprehension flows spatially rather than via abrupt page flips.

### Phase 4: Visual QA & Loudness Mastering (`ffmpeg-skill`)
* Sample 1 frame every 2 seconds to verify zero overlapping labels, readable math/chart axes (`≥ 32px` at 1080p), crisp subtitles, and `-14 LUFS` voice clarity.
