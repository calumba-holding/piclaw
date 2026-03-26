---
id: fix-failing-tests-stale-assertions
title: "Fix 3 failing tests (stale extension count + terminal mocks)"
status: done
priority: high
created: 2026-03-23
updated: 2026-03-26
completed: 2026-03-26
tags:
  - tests
  - P1
  - quality-assessment
owner: pi
blocked-by: []
---

# Fix 3 failing tests (stale extension count + terminal mocks)

## Summary

3 tests are currently failing in the suite:

1. **`builtin extension factories > factories array has expected length`** — stale count assertion after `send_dashboard_widget` was added as an extension
2. **`terminal session service resolves owner from web session cookie`** — mock/stub issue
3. **`terminal session service falls back to the local default owner when allowed`** — related mock/stub issue

## Scope

- Update the expected extension count in `test/agent-pool/agent-pool-tools.test.ts`
- Fix the terminal session service test stubs in `test/channels/web/terminal-session-service.test.ts`

## Acceptance criteria

- [x] The specifically named stale/failing tests are no longer failing.
- [x] Ticket rationale is confirmed stale or already resolved by subsequent changes.

## Notes

- These were straightforward fixes rather than architectural changes.
- The extension count test is a snapshot-style assertion that breaks every time a new extension is added; consider making it dynamic.
- The ticket became stale because the referenced failures were already resolved in the current runtime test suite.

## Updates

### 2026-03-26
- Closed as stale/resolved by subsequent changes.
- Lane change: `10-next` → `50-done`.
- Verified current test locations under `runtime/test/`:
  - `runtime/test/agent-pool/agent-pool-tools.test.ts`
  - `runtime/test/channels/web/terminal-session-service.test.ts`
- Ran the targeted tests and confirmed the three cited failures are no longer failing:
  - `bun test runtime/test/agent-pool/agent-pool-tools.test.ts` ✅
  - `bun test runtime/test/channels/web/terminal-session-service.test.ts` ✅
- The ticket's file references and failure description are therefore stale, and the remaining broad "all tests pass" claim is better handled by the larger audit/hardening tickets already on the board.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 2, deps: 0, risk: 1)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
