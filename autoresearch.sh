#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

start_ms=$(date +%s%3N)

tests=(
  runtime/test/web/app-shell-state.test.ts
  runtime/test/web/app-branch-actions.test.ts
  runtime/test/web/app-browser-events.test.ts
  runtime/test/web/app-window-actions.test.ts
  runtime/test/web/app-pane-state.test.ts
  runtime/test/web/app-chat-pane-state.test.ts
  runtime/test/web/app-extension-status.test.ts
  runtime/test/web/queue-state.test.ts
  runtime/test/web/app-followup-queue.test.ts
  runtime/test/web/generated-widget.test.ts
  runtime/test/web/app-floating-widget.test.ts
  runtime/test/web/app-agent-previews.test.ts
)

if [[ -f runtime/test/web/app-chat-agents.test.ts ]]; then
  tests+=(runtime/test/web/app-chat-agents.test.ts)
fi
if [[ -f runtime/test/web/app-generated-widget-events.test.ts ]]; then
  tests+=(runtime/test/web/app-generated-widget-events.test.ts)
fi
if [[ -f runtime/test/web/app-agent-turn-events.test.ts ]]; then
  tests+=(runtime/test/web/app-agent-turn-events.test.ts)
fi
if [[ -f runtime/test/web/app-realtime-timeline.test.ts ]]; then
  tests+=(runtime/test/web/app-realtime-timeline.test.ts)
fi
if [[ -f runtime/test/web/app-extension-ui-sse.test.ts ]]; then
  tests+=(runtime/test/web/app-extension-ui-sse.test.ts)
fi
if [[ -f runtime/test/web/app-agent-status-refresh.test.ts ]]; then
  tests+=(runtime/test/web/app-agent-status-refresh.test.ts)
fi
if [[ -f runtime/test/web/app-sse-event-routing.test.ts ]]; then
  tests+=(runtime/test/web/app-sse-event-routing.test.ts)
fi
if [[ -f runtime/test/web/app-model-state.test.ts ]]; then
  tests+=(runtime/test/web/app-model-state.test.ts)
fi
if [[ -f runtime/test/web/app-profile-events.test.ts ]]; then
  tests+=(runtime/test/web/app-profile-events.test.ts)
fi
if [[ -f runtime/test/web/app-floating-widget-dashboard.test.ts ]]; then
  tests+=(runtime/test/web/app-floating-widget-dashboard.test.ts)
fi

PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 "${tests[@]}"

end_ms=$(date +%s%3N)
targeted_test_ms=$((end_ms - start_ms))

seam_score=0
[[ -f runtime/web/src/ui/app-chat-agents.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-chat-agents.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "./ui/app-chat-agents.js" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "mergeActiveAndBranchChats" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "normalizeCurrentRootBranchRows" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "appendFollowupQueueItem" runtime/web/src/ui/app-followup-queue.ts && seam_score=$((seam_score + 1))
rg -q "appendFollowupQueueItem" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "appendFollowupQueueItem" runtime/test/web/app-followup-queue.test.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-generated-widget-events.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-generated-widget-events.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveLiveGeneratedWidgetEvent" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-agent-turn-events.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-agent-turn-events.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "shouldIgnoreMismatchedTurn" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "shouldAdoptIncomingTurn" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "resolveSteerQueuedTurnId" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-realtime-timeline.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-realtime-timeline.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "shouldAppendRealtimeTimelinePost" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "replaceTimelinePostById" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-extension-ui-sse.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-extension-ui-sse.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveStatusPanelWidgetEventContext" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "resolveExtensionUiToast" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "resolveStatusPanelWidgetEventContext" runtime/web/src/ui/app-extension-ui-sse.ts && seam_score=$((seam_score + 1))
rg -q "resolveStatusPanelWidgetEventContext" runtime/test/web/app-extension-ui-sse.test.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-agent-status-refresh.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-agent-status-refresh.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveAgentPreviewRestoreState" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "readAgentTurnId" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-sse-event-routing.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-sse-event-routing.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveSseEventRoutingContext" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "isNoisyAgentSseEvent" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-model-state.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-model-state.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveModelStateUpdate" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-profile-events.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-profile-events.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "resolveAgentProfilePatch" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "resolveUserProfileUpdate" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
[[ -f runtime/web/src/ui/app-floating-widget-dashboard.ts ]] && seam_score=$((seam_score + 1))
[[ -f runtime/test/web/app-floating-widget-dashboard.test.ts ]] && seam_score=$((seam_score + 1))
rg -q "buildFloatingWidgetDashboardData" runtime/web/src/app.ts && seam_score=$((seam_score + 1))
rg -q "readFulfilledResult" runtime/web/src/app.ts && seam_score=$((seam_score + 1))

echo "METRIC seam_score=${seam_score}"
echo "METRIC targeted_test_ms=${targeted_test_ms}"
