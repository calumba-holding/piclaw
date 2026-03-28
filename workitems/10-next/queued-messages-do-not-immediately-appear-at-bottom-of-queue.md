---
id: queued-messages-do-not-immediately-appear-at-bottom-of-queue
title: Queued messages do not immediately appear at the bottom of the queue
status: next
priority: medium
created: 2026-03-17
updated: 2026-03-28
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - queue
  - compose
  - followups
owner: pi
---

# Queued messages do not immediately appear at the bottom of the queue

## Summary

There is still an intermittent queue-stack visibility bug in the web compose UI.

A newly queued follow-up sometimes does **not** immediately show up at the
bottom of the visible queue stack, even though the user expects it to appear
there right away. This may be a continuation of the earlier queue refresh /
reconciliation issues, or it may be a distinct append-order / optimistic-state
bug.

## Acceptance Criteria

- Newly queued follow-up messages appear at the bottom of the visible queue
  stack immediately after submit.
- Queue ordering remains FIFO and visually matches backend-authoritative order.
- The UI does not require an extra refresh, reconnect, or unrelated state change
  before showing the newly queued item.
- If the queue cannot be updated immediately, the failure mode is explicit and
  no queued item appears to be missing.
- A regression test exists for the observed append/visibility case.

## Updates

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- Still awaiting fresh implementation evidence or a narrowed repro before promotion back into active work.

### 2026-03-26
- Lane change: `40-review` → `10-next`.
- Board review outcome: this still reads as an unresolved bug ticket, not a completed fix awaiting final verification.
- Kept in `next` rather than `doing` because there is no current implementation evidence recorded on the ticket.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

### 2026-03-17
- Ticket created from a fresh user report: queued messages sometimes do not
  immediately appear at the bottom of the queue.
- Initial triage: likely related to earlier queue-stack refresh/reconciliation
  work, but should be treated as a fresh follow-up until proven identical.
- Related historical ticket already closed:
  `workitems/50-done/queued-followup-stack-does-not-refresh-after-removal.md`

## Notes

Questions to resolve:
- Does this only happen after queue item removal, reconnect, or reload?
- Is the item missing only in the UI, or missing from `/agent/queue-state` too?
- Is the item eventually shown in the correct position after polling/SSE?
- Is the bug specifically an append-to-bottom rendering problem, or a broader
  stale refresh generation / optimistic-state merge issue?

Likely investigation areas:
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
- queue-state refresh / reconciliation logic
- optimistic queue updates after submit
- SSE handling for `agent_followup_queued`
- ordering logic when queue state is re-fetched after submit

## Links

- `workitems/50-done/queued-followup-stack-does-not-refresh-after-removal.md`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
