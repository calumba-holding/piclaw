---
id: queued-followup-stack-does-not-refresh-after-removal
title: Queued follow-up stack does not refresh immediately after removal
status: next
created: 2026-03-15
updated: 2026-03-15
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
- queue stack must remain backend-authoritative and FIFO

Investigation areas:
- `web/src/components/compose-box.ts`
- queue-stack state in `web/src/app.ts`
- `/agent/queue-state` refresh cadence / invalidation
- SSE handling for `agent_followup_removed` and `agent_followup_queued`
- any stale memoization or reducer logic after a removal event

## Links

- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/app.ts`
- `piclaw/src/channels/web.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
