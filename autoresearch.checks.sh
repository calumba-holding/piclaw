#!/bin/bash
set -euo pipefail

cd /workspace/.piclaw/autoresearch-sessions/exp-mn9eejd7-hv8r/worktree

lint_log=$(mktemp)
typecheck_log=$(mktemp)
cleanup() {
  rm -f "$lint_log" "$typecheck_log"
}
trap cleanup EXIT

bun run lint >"$lint_log" 2>&1 || {
  tail -80 "$lint_log"
  exit 1
}

bun run typecheck >"$typecheck_log" 2>&1 || {
  tail -80 "$typecheck_log"
  exit 1
}
