---
id: audit-session-turn-management-regression-checklist
title: Audit session/turn-management regressions across recent queue/session/branch tickets
status: doing
priority: high
created: 2026-03-19
updated: 2026-03-26
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - audit
  - session
  - queue
  - turns
  - branching
owner: pi
---

# Audit session/turn-management regressions across recent queue/session/branch work

## Summary

Harden this audit into a repeatable, one-command regression pass that produces stronger automated evidence for queue decisioning, threading/reparenting, queue lifecycle, recovery, session rotation, and branch isolation.

Recent tickets in scope:

- [compose-input-queue-by-default-steering](../50-done/compose-input-queue-by-default-steering.md)
- [fix-active-inactive-streaming-state-mismatch-for-queue-submit](../50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md)
- [fix-queued-message-loss-after-mid-queue-removal](../50-done/fix-queued-message-loss-after-mid-queue-removal.md)
- [fix-stale-thread-root-on-queued-web-chat-retry](../50-done/fix-stale-thread-root-on-queued-web-chat-retry.md)
- [queue-inflight-turn-parenting-regression](../50-done/queue-inflight-turn-parenting-regression.md)
- [queue-reparents-inflight-turns](../50-done/queue-reparents-inflight-turns.md)
- [queued-followups-sometimes-start-new-turn-from-older-context](../50-done/queued-followups-sometimes-start-new-turn-from-older-context.md)
- [queued-followup-stack-does-not-refresh-after-removal](../50-done/queued-followup-stack-does-not-refresh-after-removal.md)
- [session-file-rotation](../50-done/session-file-rotation.md)
- [parallel-web-chat-windows-with-session-forks](../50-done/parallel-web-chat-windows-with-session-forks.md)

## Scope

Audit across these user-visible behavior classes:

1. **Queue decisioning** (queue vs immediate turn)
2. **Threading/thread parent correctness** during queued/streaming/retry
3. **Queue lifecycle correctness** (add/remove/steer/flush/ordering)
4. **Queue UI consistency** and reconciliation
5. **Session lifecycle safety** around rotation and branch/reload states
6. **Branch/session isolation** with multiple windows and per-branch runtime state

## Quick automated checks (run first)

Preferred one-command audit:

```bash
cd /workspace/piclaw
./scripts/audit-session-turn-management-regression.sh
```

The script now covers 10 targeted command groups and writes a timestamped log to:

```bash
/workspace/logs/audit-session-turn-management-regression-<timestamp>.log
```

Optional override:

```bash
PICLAW_AUDIT_LOG_DIR=/tmp/audit-logs ./scripts/audit-session-turn-management-regression.sh
```

If you need to run the commands individually from the runtime subtree:

```bash
cd /workspace/piclaw/runtime
bun test test/channels/web/web-channel.test.ts
bun test test/channels/web/agent-message-handler.test.ts
bun test test/channels/web/http-dispatch-agent.test.ts
bun test test/channels/web/recovery.test.ts
bun test test/channels/web/message-write-flows.test.ts
bun test test/agent-control/parser.test.ts test/agent-control/agent-control-handlers.test.ts
bun test test/agent-control/session-rotate-integration.test.ts
bun test test/agent-pool/session-auto-rotation.test.ts
bun test test/agent-pool/branch-lifecycle-audit.test.ts
bun test test/web/branch-lifecycle.test.ts test/web/chat-window.test.ts
bash scripts/ensure-playwright-browser-isolation.sh && bun run test:optional:browser-isolation
bun test test/web/queue-state.test.ts test/channels/web/agent-message-handler.test.ts
```

Optional broader hardening pass before landing larger wins:

```bash
cd /workspace/piclaw
bun run quality
```

## Automated evidence captured by the one-command audit

### 1) Queue decisioning during active/inactive turns

- [x] Normal text submitted while a turn is active is deferred as a queued follow-up instead of creating an immediate extra turn.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `queues normal message as follow-up when no mode is provided`, `defers new auto submissions behind deferred backlog`, `processes messages normally when a turn is inflight but not actively streaming`
- [x] `/queue` during an active stream is deferred without creating an immediate timeline user message.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `defers active /queue without creating a timeline message`
- [x] `/steer` and compose `mode: steer` during an active stream are treated as queued steering instead of immediate timeline messages.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `defers active /steer command without creating a timeline message`, `defers active compose steer without creating a timeline message`
- [x] Active-but-not-streaming phases still defer normal text turns correctly.
  - Evidence: `runtime/test/channels/web/agent-message-handler.test.ts`
  - Case: `defers a normal user turn while the chat is still active even if streaming already settled`

### 2) Turn/thread-parent correctness under `/queue`, retries, and reparenting

- [x] Deferred queued follow-ups do not inherit the active turn's thread root and start cleanly when materialized.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `queues normal message as follow-up when no mode is provided`, `publishes queued follow-up only after current turn completes`
- [x] Persisted user messages are processed one at a time so replies stay attached to the correct thread.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `processChat handles persisted user messages one at a time`
- [x] Deferred queue draining does not stall when multiple items share the same thread root.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `processChat does not stall queued draining when multiple deferred items share the same thread root`
- [x] Interrupted no-output runs are replayed, while partial/terminal output is preserved without destructive reparenting.
  - Evidence: `runtime/test/channels/web/recovery.test.ts`, `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `recoverInflightRuns preserves terminal/partial output and replays interrupted no-output runs`, `recoverInflightRuns preserves persisted non-terminal assistant output without replay`

### 3) Queue remove/steer path invariants

- [x] Queue removal respects explicit branch `chat_jid` and cannot remove items from the wrong branch.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `queue removal respects explicit branch chat_jid`
- [x] Steering a queued item is atomic for both active and inactive cases.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `atomically converts a queued item into steering when active`, `atomically converts a queued item into an immediate send when inactive`
- [x] Queue steering respects explicit branch `chat_jid`.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `queue steering respects explicit branch chat_jid`
- [x] Queue-action event ordering remains coherent when a queued item is converted into steering.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Case: `emits queue removal before steer enqueue when converting a queued item while active`
- [x] Queue UI state helpers clear stale queued-steer state only when the chat is truly idle and empty.
  - Evidence: `runtime/test/web/queue-state.test.ts`

### 4) Recovery + queued follow-up hydration on reload

- [x] Deferred queued follow-ups survive a new `WebChannel` instance and can be materialized later.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `deferred queued follow-ups survive a new WebChannel instance`, `processChat can materialize a deferred queued follow-up when resumed idle`
- [x] `resumePendingChats` enqueues deferred-only backlog and chats with missing cursor rows.
  - Evidence: `runtime/test/channels/web/recovery.test.ts`
  - Cases: `resumePendingChats scans known chats even when a cursor row is missing`, `resumePendingChats enqueues deferred-only queued followups`
- [x] Inflight recovery and resume-pending collapse to a single replay per chat.
  - Evidence: `runtime/test/channels/web/recovery.test.ts`
  - Case: `inflight recovery and resume_pending collapse to one queued replay per chat`

### 5) Session rotation safety

- [x] `/session-rotate` returns an immediate error instead of being deferred when a response is still active.
  - Evidence: `runtime/test/channels/web/agent-message-handler.test.ts`
  - Case: `does not defer /session-rotate while streaming and returns the command error immediately`
- [x] Idle `/session-rotate` success is surfaced back to the web client immediately instead of being queued or hidden.
  - Evidence: `runtime/test/channels/web/agent-message-handler.test.ts`
  - Case: `surfaces a successful /session-rotate result immediately when the chat is idle`
- [x] Manual session rotation archives the old file, creates a successor session, and resumes from the rotated file after restart.
  - Evidence: `runtime/test/agent-control/session-rotate-integration.test.ts`
  - Case: `session rotation archives the old file and continueRecent resumes the rotated successor`
- [x] Manual session rotation is blocked while queued steering/follow-up messages are pending.
  - Evidence: `runtime/test/agent-control/session-rotate-integration.test.ts`
  - Case: `session rotation rejects queued follow-ups and leaves the active file untouched`
- [x] Automatic session rotation still archives oversized sessions before prompting.
  - Evidence: `runtime/test/agent-pool/session-auto-rotation.test.ts`

### 6) Multi-branch/session isolation

- [x] Branch listing, archived-branch inclusion, rename, prune, and restore flows remain branch-correct.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `lists known chat branches for a root chat`, `includes archived branches when requested`, `renames a registry-backed chat branch`, `prunes a registry-backed chat branch`, `restores a previously pruned branch`
- [x] Peer relay and leading `@agent` mention routing preserve source/target branch identity.
  - Evidence: `runtime/test/channels/web/web-channel.test.ts`
  - Cases: `resolves peer relay by target agent name`, `routes leading @agent mentions into the target chat`
- [x] Active forks use the previous stable turn boundary instead of in-flight state.
  - Evidence: `runtime/test/agent-pool/branch-lifecycle-audit.test.ts`
  - Case: `forks active chats from the previous stable turn boundary`
- [x] Active branch pruning is rejected before the branch can be archived/disposed.
  - Evidence: `runtime/test/agent-pool/branch-lifecycle-audit.test.ts`
  - Case: `refuses to prune an active branch session`
- [x] Branch restore/open-window UI helpers preserve current-branch labels, archived badges, collision messaging, and branch-loader navigation params.
  - Evidence: `runtime/test/web/branch-lifecycle.test.ts`, `runtime/test/web/chat-window.test.ts`
- [x] Real multi-window branch isolation is exercised automatically via Playwright instead of remaining a manual browser-only check.
  - Evidence: `runtime/test/channels/web/browser-chat-isolation.optional.test.ts`, `scripts/ensure-playwright-browser-isolation.sh`

## Remaining manual-only audit items

The targeted audit now includes a Playwright-backed multi-window branch isolation pass. Any remaining manual work is failure-triage only.

### Failure-triage notes (only when something looks wrong)

- Visually verify queue-stack refresh behavior under very fast remove/steer/cancel interactions only if a browser-rendering/timing issue is suspected despite the green event-order and queue-state tests.
- Capture a focused SQLite evidence slice (`messages`, `chat_cursors`) when investigating a suspected regression or mismatch between UI and persisted state.
- If a failure is found, record the minimal human repro transcript (inputs, timestamps, branch ids/window routing) alongside the automated log.

## Regression mapping by ticket area

| Ticket area | Key assertions to preserve | Primary automated evidence |
|---|---|---|
| compose queue/steer defaults | Compose submits queue/steer paths correctly under active and inactive states | `web-channel.test.ts`, `agent-message-handler.test.ts`, `queue-state.test.ts` |
| active/inactive streaming mismatch | Active-state mismatch does not silently bypass queue intent | `agent-message-handler.test.ts`, `web-channel.test.ts` |
| mid-queue cancellation side-effects | Cancel does not re-enter steering path; queue refresh stays coherent | `web-channel.test.ts` queue remove/steer cases + event-order case |
| stale thread root / in-flight re-parenting | Response threading remains consistent across retries and rapid multi-message submission | `web-channel.test.ts`, `recovery.test.ts` |
| queue stack refresh/replay | Queue stack reflects latest queue state after mutations and reloads | `web-channel.test.ts`, `queue-state.test.ts`, `app.ts` runtime behavior backed by queue-state/event tests |
| session rotation | Safe rotation under pending-turn/queue state and archive semantics | `agent-message-handler.test.ts`, `session-rotate-integration.test.ts`, `session-auto-rotation.test.ts` |
| branch windows/session forks | Per-branch runtime/logical queue isolation | `web-channel.test.ts`, `agent-pool.test.ts` |

## Evidence to collect during an audit run

- Targeted audit log from `scripts/audit-session-turn-management-regression.sh`
- Optional `bun run quality` output before landing larger hardening changes
- SQLite evidence slice only when triaging a suspected persistence mismatch
- Minimal repro transcript only for failures the automated audit cannot explain by itself

## Definition of Done

This ticket can move to `done` when:

- the one-command audit remains green,
- the remaining manual-only section is either completed or explicitly judged acceptable for this scope,
- and the attached evidence clearly covers queue decisioning, threading, recovery, rotation, and branch isolation.

## Updates

### 2026-03-26
- Moved from `10-next` to `20-doing` to run a focused autoresearch-assisted hardening pass.
- Baseline automated audit was green on `main`:
  - `bash scripts/audit-session-turn-management-regression.sh`
  - result: **9 passed / 0 failed**
  - log: `/workspace/logs/audit-session-turn-management-regression-2026-03-26T14-36-47Z.log`
- Because the baseline was already green, the hardening pass focused on reducing blind spots rather than chasing a single red test.
- Added stronger automated evidence for session rotation + active-branch lifecycle, and rewrote the checklist so only genuinely manual remainder items stay unchecked.
- Expanded the repeatable audit from 9 to 10 targeted command groups by including `test/agent-control/session-rotate-integration.test.ts`.
- Expanded it further to cover branch UI helpers and Playwright-backed multi-window branch isolation, with `scripts/ensure-playwright-browser-isolation.sh` provisioning browser dependencies on demand.
- The script now prints category summaries and a manual-remainder count so the log itself shows what is covered automatically versus what still requires hands-on verification.

## Links

- `scripts/audit-session-turn-management-regression.sh`
- `scripts/ensure-playwright-browser-isolation.sh`
- `runtime/src/agent-control/agent-control-handlers.ts`
- `runtime/src/agent-control/agent-control-types.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-pool.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/src/channels/web/chat-run-control.ts`
- `runtime/src/channels/web/threading.ts`
- `runtime/src/db/chat-cursors.ts`
- `runtime/src/db/chat-branches.ts`
- `runtime/src/session-rotation.ts`
- `runtime/src/channels/web.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- `runtime/test/channels/web/web-channel.test.ts`
- `runtime/test/agent-control/session-rotate-integration.test.ts`
- `runtime/test/agent-pool/session-auto-rotation.test.ts`
- `runtime/test/agent-pool/agent-pool.test.ts`
- `runtime/web/src/app.ts`
- `runtime/web/src/components/compose-box.ts`
