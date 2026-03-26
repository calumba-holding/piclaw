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

ticket_file=""
for candidate in \
  kanban/10-next/audit-silent-catch-blocks.md \
  kanban/40-review/audit-silent-catch-blocks.md \
  kanban/50-done/audit-silent-catch-blocks.md; do
  if [[ -f "$candidate" ]]; then
    ticket_file="$candidate"
    break
  fi
done

if [[ -z "$ticket_file" ]]; then
  echo "missing governing ticket file" >&2
  exit 1
fi

unchecked_count=$(grep -c '^- \[ \]' "$ticket_file" || true)
status_value=$(awk -F': ' '/^status:/{print $2; exit}' "$ticket_file")
path_gap=0
status_gap=0
evidence_gap=0

case "$ticket_file" in
  kanban/40-review/*|kanban/50-done/*) path_gap=0 ;;
  *) path_gap=1 ;;
esac

case "$status_value" in
  review|done) status_gap=0 ;;
  *) status_gap=1 ;;
esac

if grep -q 'check:silent-swallows\|silent-swallow-metrics\|CI' "$ticket_file"; then
  evidence_gap=0
else
  evidence_gap=1
fi

ticket_closure_gaps=$((unchecked_count + path_gap + status_gap + evidence_gap))

echo "METRIC ticket_closure_gaps=${ticket_closure_gaps}"
echo "METRIC repo_silent_catch_blocks=${repo_silent_catch_blocks:-0}"
echo "METRIC repo_silent_promise_catches=${repo_silent_promise_catches:-0}"
echo "METRIC guard_check_present=${guard_check_present}"
