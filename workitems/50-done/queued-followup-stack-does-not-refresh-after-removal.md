---
id: queued-followup-stack-does-not-refresh-after-removal
title: Queued follow-up stack does not refresh immediately after removal
status: done
created: 2026-03-15
updated: 2026-03-17
completed: 2026-03-17
tags:
  - work-item
  - kanban
  - web
  - queue
  - compose
  - followups
owner: pi
---

# Queued follow-up stack does not refresh immediately after removal

## Summary

After deleting a queued item from the follow-up stack above the compose box,
new submissions do not immediately appear in the stack. The stack only catches
up later / after further refresh or state changes.

## Updates

### 2026-03-17
- Lane change: `doing` → `done` via triage submission (`action: triage_radio_apply`, `queued_followup_stack_does_not_refresh_after_removal: done`).
- This is now considered closed from board perspective; runtime verification of queue reordering across reload/reconnect flows remains the last open behavior check for broader correctness.

### 2026-03-16
- Additional user-reported failure mode: after a reload, normal submitted messages can
  skip ahead of queued follow-ups instead of respecting the visible/backend queue order.
  This suggests the problem is broader than just stale stack refresh after removal and
  likely involves queue hydration / resume ordering during reconnect or reload.
- Root cause identified for one part of the bug: a race condition in
  `refreshQueueState()` in `web/src/app.ts`. When multiple `refreshQueueState` calls
  are in flight concurrently (common after a remove + subsequent submit), a stale
  response arriving late would overwrite optimistically-added items with empty/outdated
  data.
- Fix landed for that race: added a monotonically increasing generation counter
  (`queueRefreshGenRef`). Each `refreshQueueState` call captures the current generation
  at call time. When the response arrives, it checks whether a newer refresh has already
  been issued — if so, the stale response is discarded.
- Still open: verify queue ordering across remove → reload/reconnect → submit flows,
  especially when pending normal turns and queued follow-ups coexist.
- Verified: `bun run build:web` succeeds, `bun run quality` passes (1019 tests, 0 failures).
- Files changed: `web/src/app.ts` (two edits — ref declaration + generation guard in refreshQueueState).

### 2026-03-15
- User reported that after removing one queued stack item, newly submitted
  queued follow-ups no longer appear immediately in the stack.
- Requested handling: file now, investigate later.
- Likely area: queue-state refresh / optimistic removal / SSE reconciliation
  between `agent_followup_removed`, queue-state polling, and subsequent queued
  submissions.

## Notes

Expected behavior:
- removing one queued item should update the visible stack immediately
- the next queued submission should also appear in the stack immediately
- after reload/reconnect, queued follow-ups must retain priority/order relative to
  normal submitted messages
- normal turns must not skip ahead of queued follow-ups that were already pending
- queue stack must remain backend-authoritative and FIFO

Investigation areas:
- `web/src/components/compose-box.ts`
- queue-stack state in `web/src/app.ts`
- `/agent/queue-state` refresh cadence / invalidation
- SSE handling for `agent_followup_removed` and `agent_followup_queued`
- reload/reconnect hydration ordering between queued follow-ups and normal pending turns
- resume / recovery behavior after `make restart` or browser reconnect
- any stale memoization or reducer logic after a removal event

## Links

- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/app.ts`
- `piclaw/src/channels/web.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
