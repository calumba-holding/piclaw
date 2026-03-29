#!/bin/bash
set -euo pipefail

cd /workspace/.piclaw/autoresearch-sessions/exp-mnbnq50s-6e3m/worktree

build_log=$(mktemp)
lint_log=$(mktemp)
typecheck_log=$(mktemp)
stale_log=$(mktemp)
cleanup() {
  rm -f "$build_log" "$lint_log" "$typecheck_log" "$stale_log"
}
trap cleanup EXIT

bun run build:web >"$build_log" 2>&1 || {
  tail -80 "$build_log"
  exit 1
}

bun run lint >"$lint_log" 2>&1 || {
  tail -80 "$lint_log"
  exit 1
}

bun run typecheck >"$typecheck_log" 2>&1 || {
  tail -80 "$typecheck_log"
  exit 1
}

bun run check:stale-dist >"$stale_log" 2>&1 || {
  tail -80 "$stale_log"
  exit 1
}
