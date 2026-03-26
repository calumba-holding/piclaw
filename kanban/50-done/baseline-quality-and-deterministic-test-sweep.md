---
id: baseline-quality-and-deterministic-test-sweep
title: Baseline quality and deterministic test sweep
status: done
priority: high
created: 2026-03-26
updated: 2026-03-26
completed: 2026-03-26
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

- [x] Repo-root quality gates run cleanly:
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:pack-hygiene`
  - `bun run check:stale-dist`
  - `bun run check:import-boundaries`
  - `bun run check:unused-exports`
  - `bun run check:hook-tdz`
- [x] Deterministic grouped tests run cleanly.
- [x] Any flaky deterministic failures are either fixed or split into explicit follow-up tickets.
- [x] A timestamped log/artifact path is recorded in the ticket update.

## Test Plan

- [x] `cd /workspace/piclaw && bun run quality`
- [x] `cd /workspace/piclaw && bun run audit:baseline-quality-deterministic`
- [x] Run focused deterministic suites from `runtime/test/` as needed to isolate failures.
- [x] Re-run any flaky group at least 3 times before calling it stable.

## Definition of Done

- [x] Baseline quality gates are green.
- [x] Deterministic suites targeted by this pass are green.
- [x] Any remaining failures are narrowed into explicit follow-up tickets.
- [x] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns **Pass 1** and the deterministic parts of **Pass 2**.
- Moved from `10-next` to `20-doing` to run an autoresearch-assisted hardening pass.
- Current framing for the experiment: the baseline quality command is green, so the goal is to turn this into a repeatable one-command deterministic sweep with timestamped evidence, explicit grouped suites, flake classification/retry behavior, and clear follow-up generation for anything still unstable.
- Usual guardrails apply: iterative lint/typecheck/test fix passes are required, checks failures should trigger repair iterations before new speculative changes, and optional/browser/fuzz work should stay out of the default deterministic sweep unless explicitly carved out.
- Added canonical repo entrypoint: `bun run audit:baseline-quality-deterministic` via `scripts/audit-baseline-quality-deterministic.sh` + `scripts/audit-baseline-quality-deterministic.ts`.
- Added deterministic audit self-tests in `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts` so group exposure and follow-up ticket markdown stay import-safe and regression-tested.
- The default sweep now discovers deterministic tests automatically, assigns them into 13 explicit groups, excludes optional/manual/fuzz suites by explicit policy, reruns failing groups up to 3 total attempts, and classifies them as `pass`, `consistent_fail`, `flake`, or `infra_fail`.
- Timestamped baseline evidence recorded on `main` at:
  - artifact dir: `/workspace/piclaw/artifacts/baseline-quality-deterministic/2026-03-26T17-28-25Z`
  - summary: `/workspace/piclaw/artifacts/baseline-quality-deterministic/2026-03-26T17-28-25Z/summary.md`
  - machine-readable summary: `/workspace/piclaw/artifacts/baseline-quality-deterministic/2026-03-26T17-28-25Z/summary.json`
  - run log: `/workspace/piclaw/artifacts/baseline-quality-deterministic/2026-03-26T17-28-25Z/run.log`
- Validated results from the merged hardened sweep on `main`:
  - `stability_gap_count=0`
  - `deterministic_sweep_runtime_sec=36.172`
  - 181 deterministic test files covered across 13 groups
  - 1 explicit exclusion: `runtime/test/channels/web/browser-chat-isolation.optional.test.ts`
  - no flaky groups after the default retry policy
  - no follow-up tickets needed from the baseline run
- Broad validation stayed green on `main` via `bun run quality`, and the autoresearch sandbox also held the stronger soak workloads clean through repeat counts 2, 3, 5, 10, and 20 without surfacing hidden instability.
- Closed on the board after the deterministic sweep stayed green on `main` and no follow-up tickets were generated from the canonical baseline evidence path.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/test/`
- `package.json`
