# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into bounded behavior seams while preserving UX semantics and payload shapes. Current tranches target (1) active-branch roster shaping (normalization, merge precedence, stable sorting), (2) queued follow-up SSE row normalization/append behavior, (3) generated-widget SSE event routing/fallback mapping, (4) turn-scoped SSE gating/adoption semantics, (5) real-time timeline mutation gating/operations, (6) extension-UI SSE chat/toast mapping, (7) agent-status preview/turn restore shaping, (8) SSE chat-scope/noisy-event routing context, (9) model-state payload normalization, and (10) agent/user profile event normalization.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted active-branch roster seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web tests and emits `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist`.

## Files in Scope
- `runtime/web/src/app.ts` — authenticated web shell orchestration, currently owns roster merge/sort logic
- `runtime/web/src/ui/app-chat-agents.ts` — typed helper seam for active/branch roster normalization + merge ordering
- `runtime/test/web/app-chat-agents.test.ts` — focused seam tests
- Existing focused web seam tests under `runtime/test/web/`
- `runtime/web/src/ui/app-sse-event-routing.ts` — typed SSE chat-scope/noisy-event routing helper seam
- `runtime/test/web/app-sse-event-routing.test.ts` — focused routing seam tests
- `runtime/web/src/ui/app-model-state.ts` — typed model payload normalization helper seam
- `runtime/test/web/app-model-state.test.ts` — focused model-state normalization tests
- `runtime/web/src/ui/app-profile-events.ts` — typed agent/user profile event normalization helper seam
- `runtime/test/web/app-profile-events.test.ts` — focused profile event seam tests

## Off Limits
- Runtime/backend services and protocol contracts
- Auth/login flows
- Payload shape rewrites for queue/pane/extension surfaces
- Broad UI architecture changes

## Constraints
- Keep slices small and mergeable
- Preserve roster behavior and branch/session UX ordering semantics
- Keep newly extracted helpers in TypeScript (`.ts`)
- No new dependencies
- Keep focused web tests green and pass `build:web`, `lint`, `typecheck`, `check:stale-dist`

## What's Been Tried
- Prior tranches extracted typed seams for shell state, branch actions, window actions, browser events, pane state, chat-pane state, extension status, follow-up queue, floating widget, and agent previews.
- Baseline in this worktree initially failed `build:web` checks due a missing `beautiful-mermaid` package in `node_modules`; installing it locally (`npm install --no-save beautiful-mermaid@1.1.3`) restored full checks.
- Extracted active/branch roster normalization + merge/sort behavior from `app.ts` into typed `runtime/web/src/ui/app-chat-agents.ts`.
- `refreshActiveChatAgents` now delegates filtering + merge precedence + ordering to helpers (`normalizeActiveChatRows`, `mergeActiveAndBranchChats`), and `refreshCurrentChatBranches` delegates row filtering to `normalizeCurrentRootBranchRows`.
- Added focused seam coverage in `runtime/test/web/app-chat-agents.test.ts` for filtering rules, empty-branch fallback behavior, merge precedence, `is_active` nullish fallback semantics, and current/archived/activity sorting order.
- Extracted `agent_followup_queued` row-append shaping from `app.ts` into `appendFollowupQueueItem` in `runtime/web/src/ui/app-followup-queue.ts`, keeping dedupe + payload defaults identical.
- Expanded `runtime/test/web/app-followup-queue.test.ts` with focused checks for valid append behavior plus identity-preserving no-op paths (duplicates/invalid payloads).
- Extracted generated-widget SSE event-type routing from `app.ts` into typed `runtime/web/src/ui/app-generated-widget-events.ts` via `resolveLiveGeneratedWidgetEvent` (update/close mapping, fallback status, turn-adoption eligibility).
- Added focused tests in `runtime/test/web/app-generated-widget-events.test.ts` to lock update-status mapping and close/unknown behavior.
- Extracted repeated turn-scoped SSE guard/adoption rules from `app.ts` into typed `runtime/web/src/ui/app-agent-turn-events.ts` (`shouldIgnoreMismatchedTurn`, `shouldAdoptIncomingTurn`, `resolveSteerQueuedTurnId`).
- Updated generated-widget turn adoption and agent draft/thought/steer/status turn guards to delegate to the new helper while preserving existing truthy/fallback semantics.
- Added focused tests in `runtime/test/web/app-agent-turn-events.test.ts` for mismatch-ignore, turn-adopt, and steer turn-id fallback behavior.
- Extracted timeline mutation gating and immutable append/replace/remove operations from `app.ts` into typed `runtime/web/src/ui/app-realtime-timeline.ts`.
- `handleSseEvent` now delegates main-timeline gating (`isMainTimelineView`), append-event eligibility (`shouldAppendRealtimeTimelinePost`), interaction mutation gating (`shouldMutateInteractionTimeline`), and list updates (`appendUniqueTimelinePost`, `replaceTimelinePostById`, `removeTimelinePostsByIds`).
- Added focused tests in `runtime/test/web/app-realtime-timeline.test.ts` for view gating, event gating, unique append behavior, and no-op identity preservation for replace/remove operations.
- Extracted extension-UI SSE chat-id fallback and toast mapping from `app.ts` into typed `runtime/web/src/ui/app-extension-ui-sse.ts` (`resolveStatusPanelEventChatJid`, `resolveExtensionUiToast`).
- `handleSseEvent` status-panel and generic extension-ui branches now delegate to those helpers while preserving browser-event dispatch + payload semantics.
- Added focused tests in `runtime/test/web/app-extension-ui-sse.test.ts` for notify/error toast mapping and status-panel chat fallback.
- Further extracted status-panel event classification into `resolveStatusPanelWidgetEventContext` so `app.ts` no longer hand-parses event type/surface/chat-id/panel-key fields inline.
- Added focused coverage in `runtime/test/web/app-extension-ui-sse.test.ts` for status-panel widget context shaping.
- Extracted agent-status restoration shaping into typed `runtime/web/src/ui/app-agent-status-refresh.ts` (`readAgentTurnId`, `resolveAgentPreviewRestoreState`, `shouldKeepExistingPreview`).
- `refreshAgentStatus` and SSE `connected` recovery now delegate turn-id and draft/thought restore shaping to those helpers while preserving buffer updates and existing-length guard semantics.
- Added focused tests in `runtime/test/web/app-agent-status-refresh.test.ts` for turn-id precedence, preview payload normalization, and existing-preview retention behavior.
- Extracted SSE chat-scope routing/noisy-agent-event classification from `app.ts` into typed `runtime/web/src/ui/app-sse-event-routing.ts` (`resolveSseEventRoutingContext`, `isNoisyAgentSseEvent`) so `handleSseEvent` delegates chat targeting and activity-flag suppression decisions.
- Added focused tests in `runtime/test/web/app-sse-event-routing.test.ts` for chat-jid trimming/global-event fallback behavior and noisy-agent event classification.
- Extracted model-state payload normalization from `app.ts` into typed `runtime/web/src/ui/app-model-state.ts` (`resolveModelStateUpdate`) so both API refresh and `model_changed` SSE handling share the same nullish/boolean coercion semantics.
- Added focused tests in `runtime/test/web/app-model-state.test.ts` to lock model/current fallback behavior plus `thinking_level`, `supports_thinking`, and `provider_usage` normalization.
- Extracted agent/user profile SSE payload normalization from `app.ts` into typed `runtime/web/src/ui/app-profile-events.ts` (`resolveAgentProfilePatch`, `resolveUserProfileUpdate`) so profile trimming/coercion and no-op identity checks are shared helpers.
- Added focused tests in `runtime/test/web/app-profile-events.test.ts` for unchanged-profile no-op behavior, avatar normalization, numeric agent-id compatibility, and user profile fallback semantics.
