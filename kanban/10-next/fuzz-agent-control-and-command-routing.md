---
id: fuzz-agent-control-and-command-routing
title: Fuzz agent-control parsing and command-routing invariants
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

- `runtime/src/agent-control/parser.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`

## Acceptance Criteria

- [ ] Fuzz/property-style tests exist for parser normalization and malformed command strings.
- [ ] Unknown commands and malformed commands return stable, typed failures.
- [ ] Repeated/idempotent command paths are explicitly validated where applicable.
- [ ] Seed-replay or equivalent reproducibility is documented for any failing fuzz case.
- [ ] No unhandled exceptions remain under the chosen fuzz corpus/seed range.

## Test Plan

- [ ] Extend `runtime/test/agent-control/parser.test.ts`
- [ ] Extend `runtime/test/agent-control/agent-control-handlers.test.ts`
- [ ] Add any dedicated fuzz harness/test files needed under `runtime/test/agent-control/`
- [ ] Run with explicit seed/iteration controls and record them in `## Updates`

## Definition of Done

- [ ] Parser/control fuzz coverage exists and runs repeatably.
- [ ] Reproducibility path for failures is documented.
- [ ] Any discovered issues are fixed or split into follow-up tickets.
- [ ] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the command/control fuzzing portion of the original Pass 3.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/src/agent-control/parser.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`
- `runtime/test/agent-control/parser.test.ts`
- `runtime/test/agent-control/agent-control-handlers.test.ts`
