---
id: baseline-quality-and-deterministic-test-sweep
title: Baseline quality and deterministic test sweep
status: next
priority: high
created: 2026-03-26
updated: 2026-03-26
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - testing
  - quality
  - deterministic
owner: pi
---

# Baseline quality and deterministic test sweep

## Summary

Run and stabilize the baseline quality gates and deterministic test groups that
should pass before any deeper fuzzing or invariant work.

This is the first split follow-up from the older XL umbrella ticket
`test-suite-audit-with-fuzzing-logic-validation.md`.

## Acceptance Criteria

- [ ] Repo-root quality gates run cleanly:
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:pack-hygiene`
  - `bun run check:stale-dist`
  - `bun run check:import-boundaries`
  - `bun run check:unused-exports`
  - `bun run check:hook-tdz`
- [ ] Deterministic grouped tests run cleanly.
- [ ] Any flaky deterministic failures are either fixed or split into explicit follow-up tickets.
- [ ] A timestamped log/artifact path is recorded in the ticket update.

## Test Plan

- [ ] `cd /workspace/piclaw && bun run quality`
- [ ] Run focused deterministic suites from `runtime/test/` as needed to isolate failures.
- [ ] Re-run any flaky group at least 3 times before calling it stable.

## Definition of Done

- [ ] Baseline quality gates are green.
- [ ] Deterministic suites targeted by this pass are green.
- [ ] Any remaining failures are narrowed into explicit follow-up tickets.
- [ ] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns **Pass 1** and the deterministic parts of **Pass 2**.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/test/`
- `package.json`
