#!/usr/bin/env bash
# ==============================================================================
# AI Design Playbook v2.0 — Security-Auditing Skill, Combo, Preset & Template Installer
# ==============================================================================
# Usage:
#   ./install.sh --list
#   ./install.sh --router [--target claude|global-claude|cursor|antigravity|codex|/custom/path]
#   ./install.sh --combo storycraft-studio [--target ...]
#   ./install.sh --preset obsidian-precision [--out ./my-app]
#   ./install.sh --template scroll-3d-stage [--out ./my-scroll-site]
#   ./install.sh --skill impeccable [--target ...]
#   ./install.sh --sync-local
#   ./install.sh --all [--target ...]
# ==============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REGISTRY_PATH="$REPO_ROOT/registry.json"

ACTION=""
ARG_VAL=""
OUT_DIR=""
TARGET="claude"
SKIP_AUDIT=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --list|-l)       ACTION="list"; shift ;;
    --router|-r)     ACTION="router"; shift ;;
    --combo|-c)      ACTION="combo"; ARG_VAL="${2:-}"; shift 2 ;;
    --skill|-s)      ACTION="skill"; ARG_VAL="${2:-}"; shift 2 ;;
    --preset|-p)     ACTION="preset"; ARG_VAL="${2:-}"; shift 2 ;;
    --template|-m)   ACTION="template"; ARG_VAL="${2:-}"; shift 2 ;;
    --out|-o)        OUT_DIR="${2:-}"; shift 2 ;;
    --sync-local)    ACTION="sync-local"; shift ;;
    --all|-a)        ACTION="all"; shift ;;
    --target|-t)     TARGET="${2:-claude}"; shift 2 ;;
    --skip-audit)    SKIP_AUDIT=1; shift ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

resolve_target_dir() {
  case "$1" in
    claude)        echo "$(pwd)/.claude/skills" ;;
    global-claude) echo "$HOME/.claude/skills" ;;
    cursor)        echo "$(pwd)/.cursor/skills" ;;
    antigravity)   echo "$HOME/.gemini/config/skills" ;;
    codex)         echo "$(pwd)/.agents/skills" ;;
    global-codex)  echo "$HOME/.codex/skills" ;;
    *)             echo "$1" ;;
  esac
}

audit_skill_dir() {
  local scan_dir="$1"
  local skill_id="$2"

  if [[ "$SKIP_AUDIT" -eq 1 ]]; then
    echo "  [WARN] Skipping security audit for '$skill_id' (--skip-audit)."
    return 0
  fi

  echo "  [AUDIT] Scanning '$skill_id' for prompt injection, bidi Unicode, lifecycle hooks & shell pipes..."
  local failed=0

  if find "$scan_dir" -name "package.json" -exec grep -Eq '"(preinstall|postinstall|preuninstall)"[[:space:]]*:' {} + 2>/dev/null; then
    echo "  [BLOCKED] Suspicious package.json lifecycle hook detected in '$skill_id'"
    failed=1
  fi

  if grep -R -E -i "(ignore all previous instructions|ignore prior instructions|disregard system prompt|you are now in developer mode)" "$scan_dir" 2>/dev/null; then
    echo "  [BLOCKED] Prompt injection phrase detected in '$skill_id'"
    failed=1
  fi

  if grep -R -E -i "(curl[[:space:]]+[^|]+\|[[:space:]]*(ba)?sh|wget[[:space:]]+[^|]+\|[[:space:]]*(ba)?sh)" "$scan_dir" 2>/dev/null; then
    echo "  [BLOCKED] Suspicious curl/wget pipe to shell detected in '$skill_id'"
    failed=1
  fi

  if command -v python3 >/dev/null 2>&1; then
    if ! python3 -c "
import pathlib, re, sys
bidi = re.compile(r'[\u202a-\u202e\u2066-\u2069]')
for p in pathlib.Path(sys.argv[1]).rglob('*'):
    if p.is_file() and p.suffix.lower() in {'.md','.txt','.json','.yaml','.yml','.js','.ts','.tsx','.py','.sh'} and p.stat().st_size < 2097152:
        txt = p.read_text(encoding='utf-8', errors='ignore')
        if bidi.search(txt):
            print(f'  [BLOCKED] Hidden bidirectional Unicode detected in {p.name}')
            sys.exit(1)
" "$scan_dir"; then
      failed=1
    fi
  fi

  [[ "$failed" -ne 0 ]] && return 1
  echo "  [PASS] '$skill_id' passed static security audit."
  return 0
}

install_local_skill() {
  local skill_id="$1"
  local dest_root="$2"
  local src_dir="$REPO_ROOT/skills/$skill_id"

  if [[ ! -d "$src_dir" ]]; then
    echo "  [ERROR] Local skill '$skill_id' not found at $src_dir"
    return 1
  fi

  mkdir -p "$dest_root/$skill_id"
  cp -R "$src_dir/"* "$dest_root/$skill_id/"
  echo "  [INSTALLED] Local meta-skill '$skill_id' -> $dest_root/$skill_id"
}

install_upstream_skill() {
  local skill_id="$1"
  local dest_root="$2"
  local meta=""

  if command -v jq >/dev/null 2>&1; then
    meta=$(jq -r --arg id "$skill_id" '.upstreamSkills[] | select(.id == $id) | "\(.repo)|\(.subPath)|\(.license)|\(.flattenSubskills // false)"' "$REGISTRY_PATH")
  elif command -v node >/dev/null 2>&1; then
    meta=$(node -e "const r=require('$REGISTRY_PATH'); const s=r.upstreamSkills.find(x=>x.id==='$skill_id'); if(s) console.log(s.repo+'|'+(s.subPath||'')+'|'+s.license+'|'+Boolean(s.flattenSubskills));")
  elif command -v python3 >/dev/null 2>&1; then
    meta=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH',encoding='utf-8')); s=next((x for x in r['upstreamSkills'] if x['id']=='$skill_id'),None); print(f\"{s['repo']}|{s.get('subPath','')}|{s['license']}|{str(bool(s.get('flattenSubskills'))).lower()}\" if s else '')")
  else
    echo "  [ERROR] jq, node, or python3 is required to parse registry.json"
    exit 1
  fi

  if [[ -z "$meta" ]]; then
    echo "  [WARN] Upstream skill '$skill_id' not found in registry.json"
    return 0
  fi

  IFS='|' read -r repo subpath license flatten <<< "$meta"
  local temp_dir
  temp_dir="$(mktemp -d 2>/dev/null || mktemp -d -t 'aidesign')"

  echo ""
  echo "[FETCH] Cloning '$skill_id' from https://github.com/$repo (License: $license)..."

  if [[ -n "$subpath" ]]; then
    git clone --depth 1 --filter=blob:none --sparse -c core.hooksPath=/dev/null "https://github.com/$repo.git" "$temp_dir" >/dev/null 2>&1
    (cd "$temp_dir" && git sparse-checkout set "$subpath" >/dev/null 2>&1)
    local payload_dir="$temp_dir/$subpath"
  else
    git clone --depth 1 --filter=blob:none -c core.hooksPath=/dev/null "https://github.com/$repo.git" "$temp_dir" >/dev/null 2>&1
    local payload_dir="$temp_dir"
  fi

  rm -rf "$temp_dir/.git"
  [[ ! -d "$payload_dir" ]] && payload_dir="$temp_dir"

  if audit_skill_dir "$payload_dir" "$skill_id"; then
    if [[ "$flatten" == "true" || ! -f "$payload_dir/SKILL.md" ]]; then
      local found_sub=0
      for sroot in "$payload_dir" "$payload_dir/skills" "$payload_dir/.claude/skills" "$payload_dir/.agents/skills"; do
        if [[ -d "$sroot" ]]; then
          for child in "$sroot"/*/; do
            if [[ -f "${child}SKILL.md" ]]; then
              local cname
              cname="$(basename "$child")"
              mkdir -p "$dest_root/$cname"
              cp -R "$child"* "$dest_root/$cname/"
              echo "  [INSTALLED] Sub-skill '$cname' (from $skill_id) -> $dest_root/$cname"
              found_sub=1
            fi
          done
        fi
      done
      if [[ "$found_sub" -eq 1 && ! -f "$payload_dir/SKILL.md" ]]; then
        rm -rf "$temp_dir"
        return 0
      fi
    fi

    mkdir -p "$dest_root/$skill_id"
    cp -R "$payload_dir/"* "$dest_root/$skill_id/"
    echo "  [INSTALLED] Upstream skill '$skill_id' -> $dest_root/$skill_id"
  else
    echo "  [ABORTED] Skipping '$skill_id' due to security audit failure."
  fi

  rm -rf "$temp_dir"
}

DEST_ROOT="$(resolve_target_dir "$TARGET")"

case "$ACTION" in
  list)
    if command -v jq >/dev/null 2>&1; then
      echo "=== $(jq '.localSkills | length' "$REGISTRY_PATH") Built-in MIT Meta-Skills (--router) ==="
      jq -r '.localSkills[] | "  - \(.id): \(.description)"' "$REGISTRY_PATH"
      echo ""
      echo "=== $(jq '.combos | length' "$REGISTRY_PATH") Curated Combos (--combo <name>) ==="
      jq -r '.combos | to_entries[] | "  - \(.key): \(.value.name) [\(.value.upstreamSkills | join(", "))]"' "$REGISTRY_PATH"
      echo ""
      echo "=== $(jq '.presets | length' "$REGISTRY_PATH") DESIGN.md + Token Presets (--preset <id> [--out <dir>]) ==="
      jq -r '.presets[] | "  - \(.id): \(.name) (\(.fonts))"' "$REGISTRY_PATH"
      echo ""
      echo "=== $(jq '.templates | length' "$REGISTRY_PATH") Runnable Starter Templates (--template <id> [--out <dir>]) ==="
      jq -r '.templates[] | "  - \(.id): [\(.stack)] \(.description)"' "$REGISTRY_PATH"
      echo ""
      echo "=== $(jq '.upstreamSkills | length' "$REGISTRY_PATH") Upstream Skills (--skill <id>) ==="
      jq -r '.upstreamSkills[] | "  - \(.id) [\(.category)] (\(.license)) -> \(.repo)"' "$REGISTRY_PATH"
    elif command -v python3 >/dev/null 2>&1; then
      python3 -c "
import json
r = json.load(open('$REGISTRY_PATH', encoding='utf-8'))
print(f'=== {len(r[\"localSkills\"])} Built-in MIT Meta-Skills ===')
for s in r['localSkills']: print(f'  - {s[\"id\"]}: {s[\"description\"]}')
print(f'\n=== {len(r[\"combos\"])} Curated Combos ===')
for k, v in r['combos'].items(): print(f'  - {k}: {v[\"name\"]}')
print(f'\n=== {len(r.get(\"presets\", []))} DESIGN.md Presets ===')
for p in r.get('presets', []): print(f'  - {p[\"id\"]}: {p[\"name\"]}')
print(f'\n=== {len(r.get(\"templates\", []))} Starter Templates ===')
for t in r.get('templates', []): print(f'  - {t[\"id\"]}: [{t[\"stack\"]}] {t[\"description\"]}')
print(f'\n=== {len(r[\"upstreamSkills\"])} Upstream Skills ===')
for u in r['upstreamSkills']: print(f'  - {u[\"id\"]} [{u[\"category\"]}] ({u[\"license\"]}) -> {u[\"repo\"]}')
"
    else
      cat "$REGISTRY_PATH"
    fi
    ;;
  preset)
    src_dir="$REPO_ROOT/presets/$ARG_VAL"
    [[ ! -d "$src_dir" ]] && { echo "Unknown preset '$ARG_VAL'"; exit 1; }
    out="${OUT_DIR:-$(pwd)}"
    mkdir -p "$out"
    cp -R "$src_dir/"* "$out/"
    echo "[PRESET] Installed '$ARG_VAL' (DESIGN.md + tokens.css) -> $out"
    ;;
  template)
    src_dir="$REPO_ROOT/templates/$ARG_VAL"
    [[ ! -d "$src_dir" ]] && { echo "Unknown template '$ARG_VAL'"; exit 1; }
    out="${OUT_DIR:-$(pwd)/$ARG_VAL}"
    mkdir -p "$out"
    cp -R "$src_dir/"* "$out/"
    echo "[TEMPLATE] Scaffolded starter template '$ARG_VAL' -> $out"
    ;;
  sync-local)
    for tgt in "$HOME/.gemini/config/skills" "$HOME/.claude/skills"; do
      mkdir -p "$tgt"
      for dir in "$REPO_ROOT"/skills/*/; do
        install_local_skill "$(basename "$dir")" "$tgt"
      done
    done
    ;;
  router)
    mkdir -p "$DEST_ROOT"
    for dir in "$REPO_ROOT"/skills/*/; do
      install_local_skill "$(basename "$dir")" "$DEST_ROOT"
    done
    ;;
  combo)
    mkdir -p "$DEST_ROOT"
    install_local_skill "design-router" "$DEST_ROOT"
    install_local_skill "combo-$ARG_VAL" "$DEST_ROOT"
    if command -v jq >/dev/null 2>&1; then
      ups=$(jq -r --arg c "$ARG_VAL" '.combos[$c].upstreamSkills[]' "$REGISTRY_PATH")
    elif command -v node >/dev/null 2>&1; then
      ups=$(node -e "const r=require('$REGISTRY_PATH'); (r.combos['$ARG_VAL']?.upstreamSkills||[]).forEach(x=>console.log(x));")
    else
      ups=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH',encoding='utf-8')); print('\n'.join(r['combos']['$ARG_VAL']['upstreamSkills']))")
    fi
    for u in $ups; do
      install_upstream_skill "$u" "$DEST_ROOT"
    done
    ;;
  skill)
    mkdir -p "$DEST_ROOT"
    if [[ -d "$REPO_ROOT/skills/$ARG_VAL" ]]; then
      install_local_skill "$ARG_VAL" "$DEST_ROOT"
    else
      install_upstream_skill "$ARG_VAL" "$DEST_ROOT"
    fi
    ;;
  all)
    mkdir -p "$DEST_ROOT"
    for dir in "$REPO_ROOT"/skills/*/; do
      install_local_skill "$(basename "$dir")" "$DEST_ROOT"
    done
    if command -v jq >/dev/null 2>&1; then
      all_ups=$(jq -r '.upstreamSkills[].id' "$REGISTRY_PATH")
    elif command -v node >/dev/null 2>&1; then
      all_ups=$(node -e "const r=require('$REGISTRY_PATH'); r.upstreamSkills.forEach(x=>console.log(x.id));")
    else
      all_ups=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH',encoding='utf-8')); print('\n'.join(x['id'] for x in r['upstreamSkills']))")
    fi
    for u in $all_ups; do
      install_upstream_skill "$u" "$DEST_ROOT"
    done
    ;;
  *)
    echo "Usage:"
    echo "  ./install.sh --list"
    echo "  ./install.sh --router [--target claude|global-claude|cursor|antigravity|codex|/custom/path]"
    echo "  ./install.sh --combo <combo-name> [--target ...]"
    echo "  ./install.sh --preset <preset-id> [--out <dir>]"
    echo "  ./install.sh --template <template-id> [--out <dir>]"
    echo "  ./install.sh --skill <skill-id> [--target ...]"
    echo "  ./install.sh --sync-local"
    echo "  ./install.sh --all [--target ...]"
    ;;
esac
