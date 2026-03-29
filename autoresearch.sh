#!/bin/bash
set -euo pipefail

cd /workspace/.piclaw/autoresearch-sessions/exp-mnbnq50s-6e3m/worktree

start_ms=$(date +%s%3N)

tests=(
  runtime/test/web/app-shell-state.test.ts
  runtime/test/web/app-branch-actions.test.ts
  runtime/test/web/app-browser-events.test.ts
  runtime/test/web/app-window-actions.test.ts
  runtime/test/web/app-chat-pane-state.test.ts
  runtime/test/web/app-extension-status.test.ts
  runtime/test/web/queue-state.test.ts
  runtime/test/web/app-followup-queue.test.ts
  runtime/test/web/generated-widget.test.ts
)

if [[ -f runtime/test/web/app-floating-widget.test.ts ]]; then
  tests+=(runtime/test/web/app-floating-widget.test.ts)
fi

PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 "${tests[@]}"

end_ms=$(date +%s%3N)
targeted_test_ms=$((end_ms - start_ms))

seam_score=0
[[ -f runtime/web/src/ui/app-floating-widget.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-floating-widget.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "./ui/app-floating-widget.js" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "applyLiveFloatingWidgetUpdate" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "openFloatingWidgetState" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "closeFloatingWidgetState" runtime/web/src/app.ts && seam_score=$((seam_score + 1))

echo "METRIC seam_score=${seam_score}"
echo "METRIC targeted_test_ms=${targeted_test_ms}"
