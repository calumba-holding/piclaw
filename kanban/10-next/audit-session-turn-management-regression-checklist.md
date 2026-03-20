---
id: audit-session-turn-management-regression-checklist
title: Audit session/turn-management regressions across recent queue/session/branch tickets
status: next
priority: high
created: 2026-03-19
updated: 2026-03-19
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

Create a one-time but repeatable audit pass to detect regressions introduced after the following completed tickets:

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

Execute from the runtime subtree where the app sources and tests now live:

```bash
cd /workspace/piclaw/runtime
bun test test/channels/web/web-channel.test.ts
bun test test/channels/web/agent-message-handler.test.ts
bun test test/channels/web/http-dispatch-agent.test.ts
bun test test/channels/web/recovery.test.ts
bun test test/channels/web/message-write-flows.test.ts
bun test test/agent-control/parser.test.ts test/agent-control/agent-control-handlers.test.ts
bun test test/agent-pool/session-auto-rotation.test.ts
bun test test/agent-pool/agent-pool.test.ts
bun test test/web/queue-state.test.ts test/channels/web/agent-message-handler.test.ts
```

Optional full hardening baseline (after targeted passes):

```bash
cd /workspace/piclaw
bun run quality
```

## Repeatable QA script

Run the audit as a single command and capture all output in one timestamped log:

```bash
cd /workspace/piclaw
./scripts/audit-session-turn-management-regression.sh
```

The script writes logs to `/workspace/logs/audit-session-turn-management-regression-<timestamp>.log`.

Optional override:

```bash
PICLAW_AUDIT_LOG_DIR=/tmp/audit-logs ./scripts/audit-session-turn-management-regression.sh
```

## Targeted manual + DB audit checklist

### 1) Queue decisioning during active/inactive turns

- [ ] Open a long-running user turn (anything that keeps streaming for >1 response chunk).
- [ ] Submit a normal text line while turn active.
- [ ] Submit `/queue` and `/steer` while active.
- [ ] Verify one is queued/steered according to policy and mode, and **does not** advance cursor incorrectly.

**Acceptance checks**
- [ ] `/queue` during active flow does not create immediate timeline user message.
- [ ] `/steer` while active is routed as queued steer (or equivalent queued steer response shape).
- [ ] Non-active fallback behaves as expected and does not silently lose an explicit queue intent.

### 2) Turn/thread-parent correctness under `/queue` and retries

- [ ] In same chat, trigger two rapid user turns while a previous queued/active turn exists.
- [ ] Confirm assistant outputs for each turn remain attached to the correct `thread_id`.
- [ ] Validate stale explicit thread root never rewrites current turn’s parent context.

**SQL verification (quick sample):**

```sql
-- expected: interleaving should still keep each assistant run under its own message thread
SELECT rowid, chat_jid, role, thread_id, json_extract(data, '$.content') AS content
FROM messages
WHERE chat_jid = 'web:default'
ORDER BY rowid DESC
LIMIT 80;
```

### 3) Queue remove/steer path invariants

- [ ] Open queue stack with >1 queued follow-up.
- [ ] Remove one queued item (Cancel) and submit immediately again.
- [ ] Verify removed item is gone and latest queue state reflects new item, no stale overwrite.
- [ ] Use explicit steer path on a queued item and confirm steering message is removed from queue exactly once.

**Acceptance checks**
- [ ] Cancel does not execute as steering.
- [ ] Queue stack UI refreshes immediately and reflects current queue count/state.
- [ ] `agent_followup_removed`/`agent_steer_queued` event ordering remains coherent under fast interactions.

### 4) Recovery + queued follow-up hydration on reload

- [ ] Queue one or more follow-ups while active/inactive transitions occur.
- [ ] Force new `WebChannel` instance/reconnect path (or restart runtime and reopen the same chat).
- [ ] Verify deferred queued follow-ups rehydrate from storage and resume ordering remains FIFO.

**Acceptance checks**
- [ ] Queue items are not dropped during restart/recovery.
- [ ] New follow-up after reload is appended in backlog order, not ahead of older pending items.

### 5) Session rotation safety

- [ ] Exercise `/session-rotate` while:
  - no active state exists (should proceed)
  - during active/compacting/retrying/queued state (should block or defer according to policy)
- [ ] Inspect rotation artifacts:
  - new session file exists and is used
  - old file is archived (not overwritten/deleted)
  - queued follow-ups and placeholders remain attached to the same chat/jid

### 6) Multi-branch/session isolation

- [ ] Create/open a forked/chat branch and run a short interaction sequence.
- [ ] Submit queued follow-ups on parent + branch alternately.
- [ ] Verify queueing, timeline, and `thread_id` remain branch-local.

**Acceptance checks**
- [ ] Branch `chat_jid` has independent queue state.
- [ ] Steering/removal in one branch does not affect another branch.
- [ ] `/agent/branches` listing and restore/prune flows still return branch-correct metadata.

## Regression mapping by ticket area

| Ticket area | Key assertions to preserve | Primary checks |
|---|---|---|
| compose queue/steer defaults | `compose` submits queue/steer paths correctly under active and inactive states | `compose-input-queue-by-default-steering`, queue flow tests in `web-channel` |
| active/inactive streaming mismatch | Active state mismatch does not silently bypass queue intent | agent message handler + control handler tests |
| mid-queue cancellation side-effects | Cancel does not re-enter steering path | cancel/steer action coverage + queue state assertions |
| stale thread root / in-flight re-parenting | Response threading remains consistent across retries and rapid multi-message submission | thread_id assertions in `web-channel` + DB query |
| queue stack refresh/replay | Queue stack reflects latest queue state after mutations | queue stack events + `web/src/app.ts`/queue refresh coverage |
| session rotation | safe rotation under pending turn/queue state and archive semantics | rotation tests in `agent-pool/session-auto-rotation` + manual queue continuity |
| branch windows/session forks | per-branch runtime/logical queue isolation | branch API tests and manual cross-branch interactions |

## Evidence to collect during audit

- [ ] Test outputs for all commands above
- [ ] One small DB evidence slice (`messages` + `chat_cursors`) for affected `chat_jid`
- [ ] Manual reproduction log for any failure including exact commands/content and timestamps
- [ ] If any failure appears, include commit that introduced it and minimal repro transcript

## Definition of Done

- [ ] All checks above pass in a single clean pass.
- [ ] No open regressions in queue, threading, rotation, or branch isolation.
- [ ] Audit notes plus pass/fail evidence attached to ticket.
- [ ] `status` moved to `done` and `completed` set once this audit is finished.

## Links

- `scripts/audit-session-turn-management-regression.sh`
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
- `runtime/test/agent-pool/session-auto-rotation.test.ts`
- `runtime/web/src/app.ts`
- `runtime/web/src/components/compose-box.ts`
