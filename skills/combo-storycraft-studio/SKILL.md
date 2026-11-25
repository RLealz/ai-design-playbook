---
name: combo-storycraft-studio
description: >
  Combo 8 Orchestrator: Storycraft AI Cinema, Storyboard & Music Video Studio (v2.0). Use when directing
  narrative multi-shot films, locking repeatable character/location Asset Passports, building shot-card
  storyboards, rendering code-drawn cinema, or producing watercolor/animated music videos. Pairs with
  preset `atmospheric-cinema`.
license: MIT
metadata:
  author: RLealz
  version: "2.0.0"
---

# 🎞️ Combo 8: Storycraft AI Cinema, Storyboard & Music Video Studio

Use this end-to-end **Storycraft pipeline** whenever a task requires **narrative storytelling, character/world visual continuity across shots, shot-card storyboarding, music-video choreography, or multi-scene short films** (whether AI-generated, Three.js/Canvas code-made, or hybrid).

* **Install Combo**: `.\install.ps1 -Combo storycraft-studio -Target antigravity`
* **Recommended Preset**: `.\install.ps1 -Preset atmospheric-cinema -OutDir .`

---

## Single-Engine Film Modality Decision Matrix

Choose **ONE** primary production engine after locking your story & shot cards:

| Film / Story Format | Primary Production Engine | Visual Signature |
| :--- | :--- | :--- |
| **Photoreal / Cinematic Multi-Shot AI Film** | `film-studio-skills` + `openfilm` + `higgsfield-generate` (`Seedance 2.5` + `higgsfield-soul-id`) | Character-locked Soul ID twins, 15-block shot prompts, browser timeline assembly |
| **Three.js / HTML5 Code-Made Short Film** | `cinecode` **OR** `lemo-opuscar` / `claude-video` (`lemo-film`) | 6-step Three.js cinema (`cinecode`) or 59–75 procedural Canvas/WebGL film styles |
| **Stage-Approved Motion Film with Frame Notes** | `mortiflix` **OR** `brief2mp4` | Step-by-step approval gates (`mortiflix`) or brief-to-Blender/MP4 (`brief2mp4`) |
| **Watercolor / Fine-Art / Beat-Synced Music Video** | `paint-mv-skills` (`paint-mv`) **OR** `huashu-art-motion` **OR** `animate-claude` | Lyrics-to-watercolor MV (`paint-mv`), 35 fine-art styles (`huashu-art-motion`), or moodboard beat sync (`animate-claude`) |
| **Viral 2D-Characters-in-3D-World Story Short** | `claude-animated-shorts` | Expressive 2D character rigs staged inside a 3D Three.js + Remotion camera world |

---

## 5-Phase Storycraft Production Pipeline

### Phase 1: Studio Init & Reference Board (`studio-init` + `reference-board`)
1. Define the **Logline, Emotional Arc (3 Acts), Aspect Ratio (`2.39:1` scope, `16:9`, or `9:16`), Color Script, and Sonic Tempo (BPM)**.
2. Lock a visual **Reference Board** (lighting ratios, lens focal lengths `24mm` vs `50mm` vs `85mm`, film stock / shader grain) before generating a single frame.

### Phase 2: Asset Passports & Identity Stress-Testing (`asset-passport` + `stress-test` + `higgsfield-soul-id`)
* Never generate multi-shot stories with drifting character faces or props!
* Create an **Asset Passport** for every recurring character, hero prop, and key location (silhouette, wardrobe palette, facial anchors, lighting behavior) and train/bind a `higgsfield-soul-id` or reusable SVG/3D rig.
* Run `stress-test` across extreme angles and lighting states before unlocking scene generation.

### Phase 3: Scene Breakdown & Shot Cards (`film-breakdown` + `shot-prompt` / `paint-mv-storyboard`)
* Decompose the script/lyrics into numbered **Shot Cards**:
  * `shot_id`, `duration_sec`, `shot_scale` (`ECU`, `MS`, `WS`), `camera_move` (`dolly-in`, `truck-left`, `static-locked`), `subject_action`, `lighting_key`, and `audio_cue`.
*Enforce the **180-degree spatial axis rule** and alternate shot scales on cuts so edits never jump-cut unintentionally.

### Phase 4: Shot Execution & Timeline Assembly (`openfilm` / `cinecode` / `paint-mv-animate`)
* Render each locked shot card via the chosen engine, matching beat markers to the frame (`frame = round((60 / bpm) * beat_index * fps)`).
* Assemble on a lossless timeline (`openfilm` or `paint-mv-render`) with motivated J-cuts / L-cuts (audio leads picture by `4–8 frames`).

### Phase 5: Color Continuity & `-14 LUFS` Master (`ffmpeg-skill`)
* Apply unified color LUT / grain pass, verify zero frozen tail frames, mix dialogue/VO (`-14 LUFS`) over ducked score (`-24 LUFS`), and master H.264/ProRes deliverables.
