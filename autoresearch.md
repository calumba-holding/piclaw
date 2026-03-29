# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into bounded behavior seams while preserving UX semantics and payload shapes. Current tranches target (1) active-branch roster shaping (normalization, merge precedence, stable sorting), (2) queued follow-up SSE row normalization/append behavior, (3) generated-widget SSE event routing/fallback mapping, (4) turn-scoped SSE gating/adoption semantics, (5) real-time timeline mutation gating/operations, and (6) extension-UI SSE chat/toast mapping.

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
