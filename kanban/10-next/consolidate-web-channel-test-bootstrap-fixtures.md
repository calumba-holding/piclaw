---
id: consolidate-web-channel-test-bootstrap-fixtures
title: Consolidate duplicated WebChannel test bootstrap fixtures
status: next
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - tests
  - duplication
  - web
owner: pi
---

# Consolidate duplicated WebChannel test bootstrap fixtures

## Summary

Multiple WebChannel-focused suites repeat nearly identical setup glue for:
- temp workspace + env wiring,
- DB init/reset and default chat seeding,
- minimal `WebChannel` constructor fixture scaffolding.

This ticket tracks extracting shared test fixtures/helpers for those suites without changing runtime behavior.

## Why

The duplication is substantial and high-churn, but touching it in the small Path A cleanup would have widened blast radius too far for a low-risk pass.

## Scope

- Extract shared helper(s) for repeated WebChannel test setup only.
- Migrate a narrow, representative subset first.
- Keep test readability and failure diagnosability.

## Non-goals

- No production architecture rewrite.
- No behavior change to WebChannel request/response logic.
- No test deletion unless equivalent/stronger behavioral coverage remains.

## Acceptance Criteria

- [ ] Shared setup helper(s) replace duplicated setup blocks in at least 2 WebChannel test files.
- [ ] Affected tests remain green.
- [ ] Lint and typecheck remain green.
- [ ] Any pruned tests include explicit equivalent coverage notes.

## Updates

### 2026-03-27
- Split out from `reduce-code-duplication-and-prune-redundant-tests` Path A pass after identifying broader WebChannel test fixture duplication as a larger/riskier candidate.

## Links

- `kanban/50-done/reduce-code-duplication-and-prune-redundant-tests.md`
