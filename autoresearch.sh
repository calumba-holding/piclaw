#!/bin/bash
set -euo pipefail

cd /workspace/.piclaw/autoresearch-sessions/exp-mn9eejd7-hv8r/worktree

start_ms=$(date +%s%3N)

tests=(
  runtime/test/channels/web/message-write-flows.test.ts
  runtime/test/channels/web/followup-placeholders.test.ts
  runtime/test/channels/web/dashboard-widget.test.ts
  runtime/test/channels/web/agent-message-store.test.ts
  runtime/test/channels/web/queued-followup-lifecycle-service.test.ts
  runtime/test/channels/web/web-channel.test.ts
)

if [[ -f runtime/test/channels/web/message-write-service.test.ts ]]; then
  tests+=(runtime/test/channels/web/message-write-service.test.ts)
fi

if [[ -f runtime/test/channels/web/web-channel-message-write-delegation.test.ts ]]; then
  tests+=(runtime/test/channels/web/web-channel-message-write-delegation.test.ts)
fi

PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 "${tests[@]}"

end_ms=$(date +%s%3N)
targeted_test_ms=$((end_ms - start_ms))

seam_score=0
[[ -f runtime/src/channels/web/message-write-service.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/channels/web/message-write-service.test.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/channels/web/web-channel-message-write-delegation.test.ts ]] && seam_score=$((seam_score + 1))
! rg -q "private getMessageWriteContext" runtime/src/channels/web.ts && seam_score=$((seam_score + 1))
rg -q "messageWriteService\\.sendMessage" runtime/src/channels/web.ts && seam_score=$((seam_score + 1))
rg -q "messageWriteService\\.postDashboardWidget" runtime/src/channels/web.ts && seam_score=$((seam_score + 1))
rg -q "messageWriteService\\.queueFollowupPlaceholder" runtime/src/channels/web.ts && seam_score=$((seam_score + 1))
rg -q "messageWriteService\\.replaceQueuedFollowupPlaceholder" runtime/src/channels/web.ts && seam_score=$((seam_score + 1))

echo "METRIC seam_score=${seam_score}"
echo "METRIC targeted_test_ms=${targeted_test_ms}"
