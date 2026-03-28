---
id: validate-queue-session-threading-invariants-and-db-replay
title: Validate queue/session/threading invariants and DB replay checks
status: done
priority: high
created: 2026-03-26
updated: 2026-03-26
completed: 2026-03-26
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - testing
  - invariants
  - queue
  - session
  - threading
owner: pi
---

# Validate queue/session/threading invariants and DB replay checks

## Summary

Run the logic-validation and replay-oriented part of the former XL test audit,
focused on queue/session/threading invariants, DB evidence, and branch/session
isolation.

This work should coordinate with the landed ticket:

- `workitems/50-done/audit-session-turn-management-regression-checklist.md`

so effort is complementary rather than duplicated.

## Acceptance Criteria

- [x] Queue/thread invariants are explicitly asserted under retries and queued follow-up flows.
- [x] Branch/session isolation is validated with targeted DB/API evidence.
- [x] Recovery and queued follow-up hydration are validated via test and/or replay checks.
- [x] Any duplicate overlap with the active regression-audit ticket is resolved into a single evidence path.
- [x] Any failures found are fixed or split into explicit bug tickets.

## Test Plan

- [x] Extend or run targeted tests:
  - `runtime/test/channels/web/http-dispatch-agent.test.ts`
  - `runtime/test/channels/web/agent-message-handler.test.ts`
  - `runtime/test/channels/web/message-write-flows.test.ts`
  - `runtime/test/channels/web/recovery.test.ts`
- [x] Capture one DB evidence slice for affected `chat_jid` / branch cases where useful.
- [x] Reuse the active session-turn-management audit script/checklist where possible.

## Definition of Done

- [x] Queue/session/threading invariant evidence is recorded.
- [x] Branch isolation/replay checks are recorded.
- [x] Any discovered regressions are fixed or split.
- [x] Overlap with the session-turn-management audit is resolved cleanly.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the logic-validation / DB replay part of the old Pass 4 and some of Pass 5.
- Pulled into `20-doing` for an autoresearch-assisted pass focused on invariant evidence and replay checks.
- Coordination note: the broader session-turn-management audit has already landed and closed, so this pass should reuse its evidence paths and targeted coverage where possible rather than duplicate them.
- Usual autoresearch guardrails apply: sandboxed run, iterative lint/typecheck/test repair passes before speculative changes, and explicit evidence artifacts/log paths for any invariant or DB replay findings.
- Added an additive audit entrypoint that reuses the broader regression harness via `PICLAW_AUDIT_ONLY` instead of forking its command list:
  - `bash scripts/audit-queue-session-threading-replay.sh`
  - `scripts/audit-queue-session-threading-replay.ts`
- Added retry/replay invariant coverage for the previously implicit deferred follow-up retry counter path:
  - `runtime/test/channels/web/web-channel.test.ts`
    - `deferred queued follow-up materialize retry count survives a new WebChannel instance`
    - `processChat drops a deferred queued follow-up after repeated materialize failures`
- Added branch-scoped replay isolation coverage:
  - `runtime/test/channels/web/recovery.test.ts`
    - `resumePendingChats isolates an explicit chat branch from sibling pending chats`
- Fixed the deferred queued follow-up persistence mapping so `materializeRetries` round-trips through `WebChannel` deferred follow-up hydration instead of resetting across restart/replay.
- Tightened the additive workload after the first green pass so the audit also has to prove branch queue-removal plus both idle and active queue-steer isolation under deferred `row_id` reuse across sibling chats.
- Extended that again so the DB/API artifact also proves placeholder-backed branch mutations when sibling chats share the same queued content, including the active/streaming steer path.
- The DB/API evidence now explicitly captures these branch-sensitive mutation paths:
  - `branch_queue_remove_rowid_collision_isolation`
  - `branch_queue_steer_rowid_collision_isolation`
  - `branch_queue_steer_streaming_collision_isolation`
  - `branch_placeholder_remove_content_collision_isolation`
  - `branch_placeholder_steer_content_collision_isolation`
  - `branch_placeholder_steer_streaming_content_collision_isolation`
- Green additive audit artifact example for the stricter workload:
  - artifact dir: `artifacts/queue-session-threading-replay/2026-03-26T18-18-40Z`
  - subset audit log: `artifacts/queue-session-threading-replay/2026-03-26T18-18-40Z/session-turn-subset.log`
  - DB/API evidence: `artifacts/queue-session-threading-replay/2026-03-26T18-18-40Z/db-api-evidence.json`
  - summary: `artifacts/queue-session-threading-replay/2026-03-26T18-18-40Z/summary.json`
- Validation used for this pass:
  - `./autoresearch.checks.sh`
  - `bash scripts/audit-queue-session-threading-replay.sh`
- Result: additive replay/DB evidence is green with no follow-up ticket required; overlap with the broader session-turn audit is now an explicit filtered reuse path instead of duplicated free-form notes.
- Closed on the board after confirming the recorded additive replay evidence remains the canonical proof path and no extra follow-up ticket was needed.

## Links

- `workitems/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `workitems/50-done/audit-session-turn-management-regression-checklist.md`
- `runtime/src/channels/web/threading.ts`
- `runtime/src/channels/web/chat-run-control.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/db/chat-cursors.ts`
- `runtime/src/db/chat-branches.ts`
- `runtime/test/channels/web/http-dispatch-agent.test.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- `runtime/test/channels/web/message-write-flows.test.ts`
- `runtime/test/channels/web/recovery.test.ts`
- `scripts/audit-queue-session-threading-replay.sh`
- `scripts/audit-queue-session-threading-replay.ts`
