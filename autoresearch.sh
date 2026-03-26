#!/bin/bash
set -euo pipefail

metrics_output=$(bun run runtime/scripts/silent-swallow-metrics.ts)
repo_silent_catch_blocks=$(printf '%s
' "$metrics_output" | awk -F= '/repo_silent_catch_blocks=/{print $2}')
repo_silent_promise_catches=$(printf '%s
' "$metrics_output" | awk -F= '/repo_silent_promise_catches=/{print $2}')

check_script=$(jq -r '.scripts["check:silent-swallows"] // ""' package.json)
quality_script=$(jq -r '.scripts.quality // ""' package.json)
guard_check_present=0
if [[ "$check_script" == *"silent-swallow-metrics.ts --check"* && "$quality_script" == *"check:silent-swallows"* ]]; then
  guard_check_present=1
fi

master_ticket_sync_gaps=0
if ! grep -q '| `audit-silent-catch-blocks` | review |' kanban/30-blocked/codebase-quality-cleanup-2026.md && \
   ! grep -q '| `audit-silent-catch-blocks` | done |' kanban/30-blocked/codebase-quality-cleanup-2026.md; then
  master_ticket_sync_gaps=$((master_ticket_sync_gaps + 1))
fi

echo "METRIC master_ticket_sync_gaps=${master_ticket_sync_gaps}"
echo "METRIC repo_silent_catch_blocks=${repo_silent_catch_blocks:-0}"
echo "METRIC repo_silent_promise_catches=${repo_silent_promise_catches:-0}"
echo "METRIC guard_check_present=${guard_check_present}"
