---
id: fix-failing-tests-stale-assertions
title: "Fix 3 failing tests (stale extension count + terminal mocks)"
status: next
priority: high
created: 2026-03-23
updated: 2026-03-23
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

- [ ] All 1,123 tests pass
- [ ] No tests skipped that were previously passing

## Notes

- These are straightforward fixes — not architectural
- The extension count test is a snapshot-style assertion that breaks every time a new extension is added; consider making it dynamic

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
