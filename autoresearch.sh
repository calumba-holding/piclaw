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
  runtime/test/web/app-floating-widget.test.ts
)

PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 "${tests[@]}"

end_ms=$(date +%s%3N)
targeted_test_ms=$((end_ms - start_ms))

seam_score=0
rg -q "applyFloatingWidgetSubmitPending" runtime/web/src/ui/app-floating-widget.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetSubmitResult" runtime/web/src/ui/app-floating-widget.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetHostEvent" runtime/web/src/ui/app-floating-widget.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetDashboardResult" runtime/web/src/ui/app-floating-widget.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetDashboardFailure" runtime/web/src/ui/app-floating-widget.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetSubmitPending" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "applyFloatingWidgetHostEvent" runtime/web/src/app.ts && seam_score=$((seam_score + 1))

echo "METRIC seam_score=${seam_score}"
echo "METRIC targeted_test_ms=${targeted_test_ms}"
