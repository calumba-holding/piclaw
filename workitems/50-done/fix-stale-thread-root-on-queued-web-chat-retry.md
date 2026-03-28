---
id: fix-stale-thread-root-on-queued-web-chat-retry
title: Fix stale thread root on queued web chat retry
status: done
priority: high
created: 2026-03-13
updated: 2026-03-14
completed: 2026-03-14
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - threading
  - queue
  - recovery
owner: pi
---

# Fix stale thread root on queued web chat retry

## Summary

There is still a reply reparenting bug in the web chat loop.

Observed live evidence from `web:default`:

- `7664` — user: `and show me a diagram of the kanban board`
- `7665` — user: `tell me what other work took place`
- `7666`..`7669` — assistant messages that belong to the first turn
- `7670`..`7672` — assistant messages for the second turn

The bug: the first turn's assistant output (`7666`..`7669`) was stored with
`thread_id = 7665` instead of `thread_id = 7664`.

That means a later user turn became the thread root for an earlier assistant
reply sequence.

## Acceptance Criteria

- [x] If multiple persisted user messages are pending, an assistant turn is always parented to the user message actually being processed, not the message that happened to enqueue the current queue task.
- [x] A stale explicit `threadRootId` cannot reparent an earlier pending message under a later user turn.
- [x] Retries after `already processing` or similar requeue paths preserve correct thread parenting.
- [x] Fixture coverage reproduces the `7664/7665/7666` shape and proves the fix.
- [x] Existing follow-up queue and steering threading tests remain green.

## Implementation Paths

### Path A — Ignore stale explicit thread roots when they do not match the message being processed

When `processChat()` pulls `currentMessage = messages[0]`, compare the explicit
`threadRootId` argument to the actual persisted row id for `currentMessage.id`.
If they differ, treat the explicit root as stale and resolve the thread root
from the current message instead.

Pros:
- small, targeted fix
- directly addresses retry / ordering drift
- low schema/protocol impact

Cons:
- relies on careful reasoning about what `threadRootId` is allowed to mean

### Path B — Remove explicit thread root from normal persisted-message queue tasks

Only pass an explicit thread root for server-materialized deferred items that
need it; for normal persisted user messages, let `processChat()` derive the
thread root solely from `currentMessage.id`.

Pros:
- simpler semantics
- less chance of stale queue metadata influencing parenting

Cons:
- requires auditing all current callers of `resumeChat()` / `processChat()`
- more behavioral surface area to re-test

## Test Plan

- [ ] Add/extend `piclaw/test/channels/web/web-channel.test.ts`
  - persisted message A enqueued
  - persisted message B enqueued before A runs cleanly
  - first queued task retries / later queued task runs
  - verify first assistant reply stays under A, second under B
- [ ] Add a focused regression around stale explicit `threadRootId` handling in `piclaw/test/channels/web/chat-run-control.test.ts` or a new web handler test.
- [ ] Run `bun run quality`.
- [ ] Perform a runtime spot-check against the DB/thread metadata without injecting extra probe messages.

## Definition of Done

- [x] Root cause confirmed in code, not just inferred from DB rows
- [x] Regression test added for stale explicit thread-root mismatch
- [x] Assistant replies parent correctly under both normal and retried queue execution
- [x] `bun run quality` passes
- [x] Ticket moved to `50-done/` only after DB evidence confirms correct thread ids in a real run

## Updates

### 2026-03-14
- **Fixed** via Path A: `processChat` now reads `thread_id` from the actual
  `currentMessage` (via updated `getMessagesSince` SQL) and derives
  `effectiveThreadRootId = messageThreadId ?? threadRootId`. The explicit
  `threadRootId` parameter is only a fallback.
- Root cause confirmed: message #7809 submitted 93ms after terminal reply #7808.
  `handleAgentMessage` for #7810 enqueued `processChat(threadRootId=7810)`,
  but cursor-ordered selection picked #7809 first. Without the fix, the response
  to #7809 was cross-parented under #7810's thread.
- `getMessagesSince` now includes `thread_id` in its SELECT clause.
- All 792 tests pass.
- Same root cause as the original 7664/7665/7666 incident described below.

### 2026-03-13
- Lane: `next` (new follow-up bug discovered after steering/recovery merge).
- Live DB evidence:
  - `7664` user message self-threaded (`thread_id = 7664`)
  - `7665` later user message self-threaded (`thread_id = 7665`)
  - `7666` first assistant reply incorrectly stored under `thread_id = 7665`
  - `7670` second assistant reply also stored under `thread_id = 7665`
- Initial hypothesis: a queued/retried `processChat(..., threadRootId)` task can process an earlier pending user message while still honoring a later task's explicit `threadRootId`, causing stale reparenting.
- Evidence: DB rows `7664`, `7665`, `7666`, `7670`; code paths in `piclaw/src/channels/web/handlers/agent.ts`, `piclaw/src/channels/web/chat-run-control.ts`, and `piclaw/src/channels/web/threading.ts`.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- This appears distinct from the previously-fixed placeholder-stealing bug.
- The likely failure mode is retry/order drift rather than placeholder consumption.
- Because the bug was discovered after merge-to-main, it should be treated as a new follow-up fix rather than reopening the already-merged steering/recovery ticket.

## Links

- `workitems/50-done/compose-input-queue-by-default-steering.md`
- `workitems/50-done/restart-recovery-and-terminal-publication-hardening.md`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/channels/web/chat-run-control.ts`
- `piclaw/src/channels/web/threading.ts`
