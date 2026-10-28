#!/usr/bin/env bash
# ==============================================================================
# AI Design Playbook — Security-Auditing Skill & Combo Installer (Bash)
# ==============================================================================
# Installs built-in MIT Meta-Skills (design-router + 7 Combos) and selectively
# fetches upstream design skills from GitHub using git sparse-checkout and a
# static quarantine security scanner.
#
# Usage:
#   ./install.sh --list
#   ./install.sh --router [--target claude|global-claude|cursor|antigravity|codex|/custom/path]
#   ./install.sh --combo anti-slop-landing [--target ...]
#   ./install.sh --skill impeccable [--target ...]
#   ./install.sh --all [--target ...]
# ==============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REGISTRY_PATH="$REPO_ROOT/registry.json"

ACTION=""
ARG_VAL=""
TARGET="claude"
SKIP_AUDIT=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --list|-l)
      ACTION="list"
      shift
      ;;
    --router|-r)
      ACTION="router"
      shift
      ;;
    --combo|-c)
      ACTION="combo"
      ARG_VAL="${2:-}"
      shift 2
      ;;
    --skill|-s)
      ACTION="skill"
      ARG_VAL="${2:-}"
      shift 2
      ;;
    --all|-a)
      ACTION="all"
      shift
      ;;
    --target|-t)
      TARGET="${2:-claude}"
      shift 2
      ;;
    --skip-audit)
      SKIP_AUDIT=1
      shift
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

resolve_target_dir() {
  case "$1" in
    claude)        echo "$(pwd)/.claude/skills" ;;
    global-claude) echo "$HOME/.claude/skills" ;;
    cursor)        echo "$(pwd)/.cursor/skills" ;;
    antigravity)   echo "$HOME/.gemini/config/skills" ;;
    codex)         echo "$(pwd)/.agents/skills" ;;
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

  echo "  [AUDIT] Scanning '$skill_id' for prompt injection, lifecycle hooks & shell pipes..."
  local failed=0

  # 1. Check package.json for preinstall/postinstall hooks
  if find "$scan_dir" -name "package.json" -exec grep -Eq '"(preinstall|postinstall|preuninstall)"[[:space:]]*:' {} + 2>/dev/null; then
    echo "  [BLOCKED] Suspicious package.json lifecycle hook detected in '$skill_id'"
    failed=1
  fi

  # 2. Check for prompt injection override phrases
  if grep -R -E -i "(ignore all previous instructions|ignore prior instructions|disregard system prompt|you are now in developer mode)" "$scan_dir" 2>/dev/null; then
    echo "  [BLOCKED] Prompt injection phrase detected in '$skill_id'"
    failed=1
  fi

  # 3. Check for remote shell execution pipes
  if grep -R -E -i "(curl[[:space:]]+[^|]+\|[[:space:]]*(ba)?sh|wget[[:space:]]+[^|]+\|[[:space:]]*(ba)?sh)" "$scan_dir" 2>/dev/null; then
    echo "  [BLOCKED] Suspicious curl/wget pipe to shell detected in '$skill_id'"
    failed=1
  fi

  if [[ "$failed" -ne 0 ]]; then
    return 1
  fi

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

  # Parse repo and subPath using python3, node, or jq
  local meta
  if command -v jq >/dev/null 2>&1; then
    meta=$(jq -r --arg id "$skill_id" '.upstreamSkills[] | select(.id == $id) | "\(.repo)|\(.subPath)|\(.license)"' "$REGISTRY_PATH")
  elif command -v node >/dev/null 2>&1; then
    meta=$(node -e "const r=require('$REGISTRY_PATH'); const s=r.upstreamSkills.find(x=>x.id==='$skill_id'); if(s) console.log(s.repo+'|'+(s.subPath||'')+'|'+s.license);")
  elif command -v python3 >/dev/null 2>&1; then
    meta=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH')); s=next((x for x in r['upstreamSkills'] if x['id']=='$skill_id'),None); print(f\"{s['repo']}|{s.get('subPath','')}|{s['license']}\" if s else '')")
  else
    echo "  [ERROR] jq, node, or python3 is required to parse registry.json"
    exit 1
  fi

  if [[ -z "$meta" ]]; then
    echo "  [WARN] Upstream skill '$skill_id' not found in registry.json"
    return 0
  fi

  IFS='|' read -r repo subpath license <<< "$meta"
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

  if [[ ! -d "$payload_dir" ]]; then
    payload_dir="$temp_dir"
  fi

  if audit_skill_dir "$payload_dir" "$skill_id"; then
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
      echo "=== Built-in MIT Meta-Skills ==="
      jq -r '.localSkills[] | "  - \(.id): \(.description)"' "$REGISTRY_PATH"
      echo ""
      echo "=== 7 Curated Combos (--combo <name>) ==="
      jq -r '.combos | to_entries[] | "  - \(.key): \(.value.name) [\(.value.upstreamSkills | join(", "))]"' "$REGISTRY_PATH"
      echo ""
      echo "=== 44 Upstream Skills (--skill <id>) ==="
      jq -r '.upstreamSkills[] | "  - \(.id) [\(.category)] (\(.license)) -> \(.repo)"' "$REGISTRY_PATH"
    else
      cat "$REGISTRY_PATH"
    fi
    ;;
  router)
    mkdir -p "$DEST_ROOT"
    for dir in "$REPO_ROOT"/skills/*/; do
      sid="$(basename "$dir")"
      install_local_skill "$sid" "$DEST_ROOT"
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
      ups=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH')); print('\n'.join(r['combos']['$ARG_VAL']['upstreamSkills']))")
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
      sid="$(basename "$dir")"
      install_local_skill "$sid" "$DEST_ROOT"
    done
    if command -v jq >/dev/null 2>&1; then
      all_ups=$(jq -r '.upstreamSkills[].id' "$REGISTRY_PATH")
    elif command -v node >/dev/null 2>&1; then
      all_ups=$(node -e "const r=require('$REGISTRY_PATH'); r.upstreamSkills.forEach(x=>console.log(x.id));")
    else
      all_ups=$(python3 -c "import json; r=json.load(open('$REGISTRY_PATH')); print('\n'.join(x['id'] for x in r['upstreamSkills']))")
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
    echo "  ./install.sh --skill <skill-id> [--target ...]"
    echo "  ./install.sh --all [--target ...]"
    ;;
esac
