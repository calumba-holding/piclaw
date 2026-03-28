---
id: queued-followups-sometimes-start-new-turn-from-older-context
title: Queued follow-ups sometimes start a new turn from older context instead of the latest queued one
status: done
created: 2026-03-15
updated: 2026-03-15
completed: 2026-03-15
tags:
  - work-item
  - kanban
  - web
  - queue
  - turns
  - regression
owner: pi
---

# Queued follow-ups sometimes start a new turn from older context instead of the latest queued one

## Summary

There is an intermittent regression where queued/sent follow-up messages are not
acknowledged as the latest pending turn and the agent instead appears to read
from an older turn/context. In practice, a new agent turn starts from stale
conversation state rather than from the last message the user just sent or
queued.

## Updates

### 2026-03-15 (closure)
- Root cause confirmed: the web handler deferred normal follow-ups only when
  `agentPool.isStreaming(chatJid)` was true, but a turn can still be active
  during compaction/retry/bash phases after streaming has already settled.
- That gap allowed a newly submitted user turn to be persisted immediately as a
  visible fresh turn while the previous turn was still active, which made the
  next assistant response appear "off by one" or stale.
- Fixed by adding a broader in-memory `agentPool.isActive(chatJid)` predicate
  covering `isStreaming || isCompacting || isRetrying || isBashRunning` and
  using it for the web follow-up deferral decision.
- Added regression coverage in:
  - `piclaw/piclaw/test/channels/web/agent-message-handler.test.ts`
- Validation passed:
  - `cd /workspace/piclaw/piclaw && bun test test/channels/web/agent-message-handler.test.ts test/web/btw.test.ts`
  - `cd /workspace/piclaw/piclaw && bun run quality`
- Shipped in commit:
  - `afcc3bf` — `Fix web turn defer state and polish BTW panel`

### 2026-03-15
- User clarified the important symptom is not just that queued messages are
  mishandled, but that the agent is reading older turns instead of the most
  recently sent/queued one.
- This should be treated as a queue/turn-selection regression, not merely a UI
  acknowledgement issue.

## Notes

Observed/expected framing:
- Expected:
  - the latest user follow-up (whether immediate or queued) becomes the next
    effective turn input in FIFO order
  - when that turn starts, the agent should read the newest intended turn state
- Observed:
  - queued follow-up may not be visibly acknowledged as the next turn
  - when processing resumes, the agent appears to read older context/turns
    instead of the last sent/queued message

Likely investigation areas:
- deferred queued follow-up consumption order
- thread root / turn root selection at drain time
- interaction between queue removal / queue state refresh and subsequent submits
- stale cursor / pending-turn selection after a queued-item transition
- any place where the next turn is resolved from old DB/session state rather
  than the newest queued follow-up entry

## Links

Related prior work:
- `workitems/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`
- `workitems/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `workitems/50-done/compose-input-queue-by-default-steering.md`
- `workitems/50-done/queue-inflight-turn-parenting-regression.md`
- `workitems/00-inbox/pending-user-turns-after-reload-not-fully-handled.md`
