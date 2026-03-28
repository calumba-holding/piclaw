---
id: table-drive-web-agent-route-dispatch
title: Table-drive web agent route dispatch to reduce repeated branch glue
status: done
priority: medium
created: 2026-03-27
updated: 2026-03-27
completed: 2026-03-27
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - quality
  - duplication
owner: pi
---

# Table-drive web agent route dispatch to reduce repeated branch glue

## Summary

`runtime/src/channels/web/http/dispatch-agent.ts` still uses a long ordered `if` chain with repeated
`req.method/pathname` matching and thin pass-through handler calls.

A table-driven route map could reduce duplication and make future route additions less error-prone,
but this is riskier than the smaller fixture cleanups because route-order semantics and dynamic path matching
must remain exact.

## Scope

- Keep behavior identical; no endpoint additions/removals.
- Preserve route precedence and dynamic matcher behavior.
- Extract repeated method/path matching and invocation glue into a small route table helper.
- Add/adjust focused tests in `runtime/test/channels/web/http-dispatch-agent.test.ts` to lock order-sensitive behavior.

## Non-goals

- Do not merge with broader `split-webchannel-god-class` work.
- Do not change auth, rate-limit, or endpoint contracts.

## Acceptance Criteria

- [x] At least one repeated method/path matcher pattern in `dispatch-agent.ts` is consolidated via a route table helper.
- [x] Existing dispatch behavior remains identical for all tested routes.
- [x] Focused `http-dispatch-agent` tests pass after the refactor.

## Updates

### 2026-03-27
- Replaced the long exact-match `if` chain in `runtime/src/channels/web/http/dispatch-agent.ts` with a small `EXACT_AGENT_ROUTES` table while preserving the dynamic `/agent/:id/message` route as an explicit pre-table branch.
- Added a focused regression test to lock the precedence of dynamic `POST /agent/*/message` dispatch over exact-path routing.
- Validation:
  - `bun test --max-concurrency=1 runtime/test/channels/web/http-dispatch-agent.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Kept scope narrow: no auth, rate-limit, or endpoint contract changes.

## Links

- `workitems/50-done/reduce-code-duplication-and-prune-redundant-tests.md`
