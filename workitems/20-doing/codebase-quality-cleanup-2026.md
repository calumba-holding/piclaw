---
id: codebase-quality-cleanup-2026
title: "Master: codebase quality cleanup & refactoring (2026-Q1)"
status: doing
priority: critical
created: 2026-03-23
updated: 2026-03-29
tags:
  - master
  - refactor
  - quality
  - quality-assessment
owner: pi
blocked-by:
  - split-webchannel-god-class
  - split-agentpool-god-class
  - finish-config-injection-and-mutable-identity-cleanup
  - audit-exported-jsdoc-coverage-and-comment-quality
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

## Current blocking tickets

These are the open tickets that still block this umbrella from closing.

### P0 — Critical structural refactors

| Ticket | Status | Description |
|---|---|---|
| `split-webchannel-god-class` | next | Split 1,905-line WebChannel into composable services |
| `split-agentpool-god-class` | review | Split 1,632-line AgentPool into session/tools/turn modules |

### Active supporting quality work

| Ticket | Status | Description |
|---|---|---|
| `finish-config-injection-and-mutable-identity-cleanup` | doing | Finish the remaining config-consumer cleanup and mutable-identity seam work after typed config extraction landed |
| `audit-exported-jsdoc-coverage-and-comment-quality` | doing | Re-establish the exported JSDoc/comment-quality review gate on active seams |

### Former blockers now resolved

| Ticket | Current status | Outcome |
|---|---|---|
| `fix-failing-tests-stale-assertions` | done | Closed after verifying the stale failures no longer reproduced |
| `audit-silent-catch-blocks` | done | Completed and moved out of the blocker chain |
| `add-tests-core-config-and-keychain` | done | Coverage work landed and no longer blocks the umbrella |

## Follow-up work (P2/P3 — not blocking)

These are desirable but not required to close this ticket:

| Priority | Ticket | Item |
|---|---|---|
| P2 | `adopt-pino-structured-logging` | Adopt structured logging and explicit error-handling guards |
| P2 | `group-web-channel-flat-files` | Group 56 flat files into sub-directories |
| P2 | `extract-typed-config-objects` | Extract 45 constants into typed config objects *(done — follow-up now tracked by `finish-config-injection-and-mutable-identity-cleanup`)* |
| P3 | — | Split `web/src/app.ts` (3,571 lines) |
| P3 | — | Split `web/static/css/styles.css` (5,942 lines) |
| P3 | — | Fix `ipc.ts → MediaService` dependency direction violation |

## Completion criteria

- [ ] All current blocker tickets are in `50-done/`
- [ ] Full test suite passes (0 failures)
- [ ] No file in `src/` exceeds 800 lines
- [ ] No class exceeds 400 lines
- [ ] Silent catch ratio is below 1:1 (more named than silent)
- [ ] `core/` and `secure/` test coverage ≥ 50%
- [ ] Re-run quality assessment and confirm grade improvement

## Updates

### 2026-03-29
- Refreshed blocker status after the AgentPool refactor tranche moved `split-agentpool-god-class` from active implementation to `40-review`.
- The umbrella now treats the AgentPool god-class split as review-stage work instead of an untouched P0 blocker, while `split-webchannel-god-class` remains the other open structural blocker.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-28
- Lane change: `30-blocked` → `20-doing` via web blocked-card decision.
- Blocked-lane outcome recorded from the adaptive-card submission: **Move to Doing**.
- This decision reactivates the quality umbrella despite its open blocker chain; downstream blocker cleanup should now be tracked from active work instead of pure blocked status.

### 2026-03-27
- Refreshed the blocker chain after repo-status audit.
- Removed stale blockers that are already in `50-done/`: `fix-failing-tests-stale-assertions`, `audit-silent-catch-blocks`, and `add-tests-core-config-and-keychain`.
- Repointed the active config-quality dependency to `finish-config-injection-and-mutable-identity-cleanup` and the documentation-quality dependency to `audit-exported-jsdoc-coverage-and-comment-quality`.
- Updated the open refactor size callouts so the umbrella matches current repo reality (`WebChannel`: 1,905 lines; `AgentPool`: 1,632 lines).
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Links

- [Full quality assessment report](../docs/quality-assessment-2026-03-23.md)
