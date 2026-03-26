---
id: validate-queue-session-threading-invariants-and-db-replay
title: Validate queue/session/threading invariants and DB replay checks
status: doing
priority: high
created: 2026-03-26
updated: 2026-03-26
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

This work should coordinate with the active ticket:

- `kanban/20-doing/audit-session-turn-management-regression-checklist.md`

so effort is complementary rather than duplicated.

## Acceptance Criteria

- [ ] Queue/thread invariants are explicitly asserted under retries and queued follow-up flows.
- [ ] Branch/session isolation is validated with targeted DB/API evidence.
- [ ] Recovery and queued follow-up hydration are validated via test and/or replay checks.
- [ ] Any duplicate overlap with the active regression-audit ticket is resolved into a single evidence path.
- [ ] Any failures found are fixed or split into explicit bug tickets.

## Test Plan

- [ ] Extend or run targeted tests:
  - `runtime/test/channels/web/http-dispatch-agent.test.ts`
  - `runtime/test/channels/web/agent-message-handler.test.ts`
  - `runtime/test/channels/web/message-write-flows.test.ts`
  - `runtime/test/channels/web/recovery.test.ts`
- [ ] Capture one DB evidence slice for affected `chat_jid` / branch cases where useful.
- [ ] Reuse the active session-turn-management audit script/checklist where possible.

## Definition of Done

- [ ] Queue/session/threading invariant evidence is recorded.
- [ ] Branch isolation/replay checks are recorded.
- [ ] Any discovered regressions are fixed or split.
- [ ] Overlap with the session-turn-management audit is resolved cleanly.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the logic-validation / DB replay part of the old Pass 4 and some of Pass 5.
- Pulled into `20-doing` for an autoresearch-assisted pass focused on invariant evidence and replay checks.
- Coordination note: the broader session-turn-management audit has already landed and closed, so this pass should reuse its evidence paths and targeted coverage where possible rather than duplicate them.
- Usual autoresearch guardrails apply: sandboxed run, iterative lint/typecheck/test repair passes before speculative changes, and explicit evidence artifacts/log paths for any invariant or DB replay findings.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `kanban/20-doing/audit-session-turn-management-regression-checklist.md`
- `runtime/src/channels/web/threading.ts`
- `runtime/src/channels/web/chat-run-control.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/db/chat-cursors.ts`
- `runtime/src/db/chat-branches.ts`
- `runtime/test/channels/web/http-dispatch-agent.test.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- `runtime/test/channels/web/message-write-flows.test.ts`
- `runtime/test/channels/web/recovery.test.ts`
