# Autoresearch: Extract WebChannel message-write and follow-up coordination seam

## Objective
Refactor the WebChannel write path by moving message-write context construction, sendMessage()/postDashboardWidget() delegation, follow-up placeholder create/replace helpers, and the adjacent queued follow-up coordination glue out of `runtime/src/channels/web.ts` into a focused module/service. Preserve message payload shapes, thread assignment behavior, interaction-broadcast side effects, queued follow-up semantics, dashboard widget posting behavior, and the public `WebChannel` API used by existing handlers/services.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural extraction progress for this bounded seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — targeted message-write/follow-up validation runtime

## How to Run
`./autoresearch.sh` — runs targeted web-channel message-write/follow-up tests and emits `METRIC` lines.

`./autoresearch.checks.sh` — runs `bun run lint` then `bun run typecheck` for correctness backpressure.

## Files in Scope
- `runtime/src/channels/web.ts` — current WebChannel coordinator that still owns the write-path/follow-up seam
- `runtime/src/channels/web/message-write-flows.ts` — lower-level write helpers already used by WebChannel
- `runtime/src/channels/web/dashboard-widget.ts` — dashboard widget post helper that currently routes through `sendMessage`
- `runtime/src/channels/web/followup-placeholders.ts` — queued follow-up placeholder queue state
- `runtime/src/channels/web/queued-followup-lifecycle-service.ts` — queued follow-up lifecycle state and placeholder/deferred queue coordination
- `runtime/src/channels/web/agent-message-store.ts` — follow-up placeholder replacement consumer used during agent turn persistence
- `runtime/src/channels/web/web-channel-contracts.ts` — structural contracts that must remain API-compatible
- `runtime/test/channels/web/message-write-flows.test.ts` — focused write-flow tests
- `runtime/test/channels/web/followup-placeholders.test.ts` — placeholder store tests
- `runtime/test/channels/web/dashboard-widget.test.ts` — dashboard widget posting tests
- `runtime/test/channels/web/agent-message-store.test.ts` — placeholder replacement behavior tests
- `runtime/test/channels/web/queued-followup-lifecycle-service.test.ts` — queued follow-up lifecycle behavior tests
- `runtime/test/channels/web/web-channel.test.ts` — integration coverage for WebChannel behavior
- new focused seam files/tests under `runtime/src/channels/web/` and `runtime/test/channels/web/` as needed for this extraction

## Off Limits
- auth flows and auth gateway behavior
- SSE/session broadcast extraction work unrelated to this write seam
- server lifecycle/websocket gateway work
- recovery/runtime-state rewrites beyond small glue needed for this seam
- VNC, terminal, UI/frontend, generated assets, and unrelated web-channel decomposition
- payload shape changes, thread behavior changes, or public WebChannel API changes

## Constraints
- Preserve current message payload shapes and thread assignment behavior
- Preserve interaction broadcaster side effects and dashboard widget posting semantics
- Preserve queued follow-up placeholder/deferred queue semantics
- Keep changes mergeable to `main`
- No new dependencies
- Validate in repair-first order: targeted message-write/follow-up and web-channel tests first, then `bun run lint`, then `bun run typecheck`

## What's Been Tried
- Inspected `runtime/src/channels/web.ts` current write-path ownership: `getMessageWriteContext()`, `sendMessage()`, `postDashboardWidget()`, `queueFollowupPlaceholder()`, and `replaceQueuedFollowupPlaceholder()` still live on `WebChannel` and wire directly to `message-write-flows.ts`, `dashboard-widget.ts`, DB replacement, broadcaster callbacks, and `QueuedFollowupLifecycleService`.
- Inspected focused tests around the current seam: `message-write-flows.test.ts`, `followup-placeholders.test.ts`, `dashboard-widget.test.ts`, `queued-followup-lifecycle-service.test.ts`, `agent-message-store.test.ts`, and nearby `web-channel.test.ts` coverage for queued follow-up behavior.
- Fresh isolated autoresearch worktree already exists on branch `autoresearch/exp-mn9eejd7-hv8r`; no stale `autoresearch.jsonl`/`autoresearch.md` state was present before setup.
- Next bounded move: add focused seam tests for service/context wiring and WebChannel delegation, then extract the message-write/follow-up coordinator into a dedicated module while keeping method signatures stable.
