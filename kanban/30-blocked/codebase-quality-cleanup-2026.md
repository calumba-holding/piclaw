---
id: codebase-quality-cleanup-2026
title: "Master: codebase quality cleanup & refactoring (2026-Q1)"
status: blocked
priority: critical
created: 2026-03-23
updated: 2026-03-23
tags:
  - master
  - refactor
  - quality
  - quality-assessment
owner: pi
blocked-by:
  - split-webchannel-god-class
  - split-agentpool-god-class
  - fix-failing-tests-stale-assertions
  - audit-silent-catch-blocks
  - add-tests-core-config-and-keychain
---

# Master: codebase quality cleanup & refactoring (2026-Q1)

## Summary

Tracking ticket for the major piclaw codebase cleanup and refactoring effort, based on the [quality assessment of 2026-03-23](../docs/quality-assessment-2026-03-23.md).

**Current grade: B** — target: **B+/A-** after P0+P1 completion.

## Assessment highlights

| Metric | Current |
|---|---|
| Server source | 211 files, 34,988 lines |
| Client source | 73 files, 21,881 lines |
| Tests | 1,118/1,123 passing (99.6%) |
| Type safety | 91 `any` (0.26%) — excellent |
| Documentation | 97% JSDoc coverage — excellent |
| Silent catch ratio | 188:96 (2:1) — needs work |
| God-class risk | 2 files > 1,400 lines — critical |

## Blocking tickets (P0 + P1)

All must be completed before this ticket can close.

### P0 — Critical

| Ticket | Status | Description |
|---|---|---|
| `split-webchannel-god-class` | next | Split 1,595-line WebChannel into composable services |
| `split-agentpool-god-class` | next | Split 1,438-line AgentPool into session/tools/turn modules |

### P1 — High

| Ticket | Status | Description |
|---|---|---|
| `fix-failing-tests-stale-assertions` | next | Fix 3 failing tests (extension count + terminal mocks) |
| `audit-silent-catch-blocks` | review | Audit 188 silent catch {} blocks |
| `add-tests-core-config-and-keychain` | next | Add tests for 0-3% coverage modules |

## Follow-up work (P2/P3 — not blocking)

These are desirable but not required to close this ticket:

| Priority | Ticket | Item |
|---|---|---|
| P2 | `adopt-pino-structured-logging` | Adopt structured logging and explicit error-handling guards |
| P2 | `group-web-channel-flat-files` | Group 54 flat files into sub-directories |
| P2 | `extract-typed-config-objects` | Extract 45 constants into typed config objects |
| P3 | — | Split `web/src/app.ts` (3,571 lines) |
| P3 | — | Split `web/static/css/styles.css` (5,942 lines) |
| P3 | — | Fix `ipc.ts → MediaService` dependency direction violation |

## Completion criteria

- [ ] All 5 blocking tickets are in `50-done/`
- [ ] Full test suite passes (0 failures)
- [ ] No file in `src/` exceeds 800 lines
- [ ] No class exceeds 400 lines
- [ ] Silent catch ratio is below 1:1 (more named than silent)
- [ ] `core/` and `secure/` test coverage ≥ 50%
- [ ] Re-run quality assessment and confirm grade improvement

## Links

- [Full quality assessment report](../docs/quality-assessment-2026-03-23.md)
