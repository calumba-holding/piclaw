---
id: fuzz-agent-control-and-command-routing
title: Fuzz agent-control parsing and command-routing invariants
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
  - fuzzing
  - agent-control
  - commands
owner: pi
---

# Fuzz agent-control parsing and command-routing invariants

## Summary

Add and run targeted fuzz/property-style coverage for the command/control layer,
with emphasis on malformed input, unicode-heavy input, overlong input, and
routing invariants.

This is a split follow-up from the older XL umbrella ticket
`test-suite-audit-with-fuzzing-logic-validation.md`.

## Scope

Primary targets:

- `runtime/src/agent-control/agent-control-parser.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`

## Acceptance Criteria

- [x] Fuzz/property-style tests exist for parser normalization and malformed command strings.
- [x] Unknown commands and malformed commands return stable, typed failures.
- [x] Repeated/idempotent command paths are explicitly validated where applicable.
- [x] Seed-replay or equivalent reproducibility is documented for any failing fuzz case.
- [x] No unhandled exceptions remain under the chosen fuzz corpus/seed range.

## Test Plan

- [x] Extend `runtime/test/agent-control/parser.test.ts`
- [x] Extend `runtime/test/agent-control/agent-control-handlers.test.ts`
- [x] Add any dedicated fuzz harness/test files needed under `runtime/test/agent-control/`
- [x] Run with explicit seed/iteration controls and record them in `## Updates`

## Definition of Done

- [x] Parser/control fuzz coverage exists and runs repeatably.
- [x] Reproducibility path for failures is documented.
- [x] Any discovered issues are fixed or split into follow-up tickets.
- [x] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the command/control fuzzing portion of the original Pass 3.
- Pulled into `20-doing` for an autoresearch-assisted pass focused on deterministic, seed-replayable fuzz/property coverage for parser normalization and command-routing invariants.
- Experiment framing: build a canonical fuzz harness plus artifact/replay path first, then widen corpus/seed coverage while keeping malformed-command handling typed and repeatable.
- Usual guardrails apply: sandboxed run, iterative lint/typecheck/test repair passes before speculative work, explicit seed/iteration controls, and replayable artifacts for any failing corpus.
- Canonical harness entrypoint established: `bun run runtime/scripts/agent-control-fuzz-audit.ts` (also exposed as `bun run audit:agent-control-fuzz`).
- Seed controls: `PICLAW_FUZZ_SEED`, `PICLAW_FUZZ_ITERATIONS`, and `PICLAW_FUZZ_REPLAY_CASE` for single-case replay; strict CI/check mode uses `PICLAW_FUZZ_STRICT=1`.
- Artifact path established: `artifacts/agent-control-fuzz/` with `latest.json`, per-run summaries, and per-failure replay metadata files.
- Current canonical replay example: `PICLAW_DB_IN_MEMORY=1 PICLAW_FUZZ_SEED=424242 PICLAW_FUZZ_ITERATIONS=64 bun run runtime/scripts/agent-control-fuzz-audit.ts`.
- Evidence: canonical benchmark and checks now hold at `fuzz_gap_count=0` for the default seed, and wider stress runs (`PICLAW_FUZZ_SEED=424243`, `PICLAW_FUZZ_ITERATIONS=256`; `PICLAW_FUZZ_SEED=424300`, `PICLAW_FUZZ_ITERATIONS=1024`; `PICLAW_FUZZ_SEED=425000`, `PICLAW_FUZZ_ITERATIONS=2048`) also stayed at zero gaps with passing lint/typecheck/targeted tests.
- Shared test scaffolding was extracted to `runtime/test/agent-control/session-fixture.ts` to keep the deterministic handler tests and the fuzz harness aligned.
- Closed on the board after confirming the recorded canonical artifact `artifacts/agent-control-fuzz/summary-seed-424242-iter-128.json` remains green with `fuzz_gap_count=0`, `replayable_failures=0`, `typed_failure_mismatches=0`, `routing_invariant_failures=0`, and `unhandled_exceptions=0`.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/src/agent-control/agent-control-parser.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`
- `runtime/test/agent-control/parser.test.ts`
- `runtime/test/agent-control/agent-control-handlers.test.ts`
