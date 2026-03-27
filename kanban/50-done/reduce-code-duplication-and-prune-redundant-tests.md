---
id: reduce-code-duplication-and-prune-redundant-tests
title: Reduce code duplication and prune redundant test coverage
status: done
priority: medium
created: 2026-03-26
updated: 2026-03-27
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - quality
  - tests
  - duplication
owner: pi
---

# Reduce code duplication and prune redundant test coverage

## Summary

Run a focused cleanup pass to reduce low-risk code duplication and remove or
merge redundant test coverage where overlap no longer adds clear regression
value.

This is **not** a broad architecture rewrite ticket. It is a scoped cleanup
pass aimed at:

- repeated helper logic,
- duplicated fallback/guard patterns,
- duplicated small utility code,
- overlapping tests that exercise the same behavior through too many thin
  pass-through cases,
- and stale tests whose value is now lower than their maintenance cost.

## Why

This concern has appeared before in prior audit work, but there is currently no
open ticket that explicitly owns it.

The goal is to improve maintainability and signal-to-noise without weakening the
regression net.

## Scope

### Code duplication
Look for:
- repeated helper logic that can move behind a shared utility
- repeated fallback wiring / guard code
- repeated event-listener lifecycle patterns
- repeated fetch / error / response handling glue
- dead compatibility shims that duplicate newer paths

### Test duplication
Look for:
- overlapping tests that assert the same behavior from multiple very thin entry points
- trivial pass-through wiring tests that add little beyond stronger behavioral/integration tests
- stale tests coupled to outdated file/layout assumptions
- opportunities to consolidate shared fixtures/helpers

## Non-goals

- Do **not** remove valuable redundancy that protects against regressions in distinct surfaces.
- Do **not** use this ticket to perform major architectural decomposition (`split-webchannel-god-class`, `split-agentpool-god-class`).
- Do **not** collapse tests purely to reduce line count if it makes failures less diagnosable.

## Acceptance Criteria

- [x] At least one concrete low-risk code duplication seam is removed or consolidated.
- [x] At least one area of overlapping/redundant test coverage is merged, pruned, or rewritten more cleanly.
- [x] Any removed tests are justified by equivalent or stronger remaining coverage.
- [x] Shared helper/fixture cleanup is documented where applicable.
- [x] Larger or riskier duplication candidates are split into explicit follow-up tickets instead of being bundled into this pass.

## Implementation Paths

### Path A — small, high-confidence cleanup pass (recommended)
1. Identify 2–5 low-risk duplication targets.
2. Consolidate them with minimal behavior change.
3. Remove/merge redundant tests only where equivalent coverage clearly remains.
4. Record any bigger duplication candidates as follow-up tickets.

**Pros:**
- bounded and reviewable
- lower regression risk
- improves maintainability without turning into a rewrite

**Cons:**
- may leave deeper duplication untouched

### Path B — aggressive dedupe sweep
1. Tackle many duplicated seams in one pass.
2. Reduce test count more aggressively.

**Pros:**
- faster surface-level cleanup

**Cons:**
- higher regression risk
- harder review
- more likely to delete valuable test coverage accidentally

## Recommended Path

Path A — small, high-confidence cleanup pass with explicit evidence for any
test removals.

## Test Plan

- [x] Run the targeted affected test suites before and after changes.
- [x] Run `cd /workspace/piclaw && bun run test` if the change surface is broad enough. *(Not required for this narrow pass; targeted suites + lint + typecheck were sufficient.)*
- [x] Record what duplication was removed and what equivalent coverage remains.
- [x] If new/modified exported `.ts` symbols are introduced while extracting helpers:
  - [x] All exported symbols have JSDoc
  - [x] Interface/type properties documented *(N/A: no exported interface/type properties introduced in this pass.)*
  - [x] Public class methods documented *(N/A: no new public classes introduced in this pass.)*

## Definition of Done

- [x] Low-risk duplication reduced in at least one meaningful seam.
- [x] Redundant test coverage is pruned/merged with justification.
- [x] No meaningful regression coverage is lost.
- [x] Update history records before/after rationale and evidence.

## Updates

### 2026-03-27
- Completed a narrow Path A pass on `main` with a small, reviewable diff.
- Identified low-risk duplication targets:
  1. repeated `ExtensionAPI` test-double boilerplate across extension suites,
  2. thin registration-only tests overlapped by stronger behavior tests,
  3. repeated extension workspace/env + DB setup glue,
  4. repeated WebChannel bootstrap fixtures (larger candidate).
- Consolidated one concrete duplication seam by extracting `runtime/test/extensions/fake-extension-api.ts` and using it in:
  - `runtime/test/extensions/extensions-keychain-tools.test.ts`
  - `runtime/test/extensions/extensions-internal-tools.test.ts`
  - `runtime/test/extensions/extensions-workspace-search.test.ts`
- Pruned one redundant test area by removing `registers keychain tool` from `extensions-keychain-tools.test.ts`.
  - Equivalent/stronger remaining coverage: behavior tests for list/get/set/delete/validation all retrieve and execute the same registered tool, so registration failures still fail with higher-signal functional assertions.
- Split larger/riskier duplication follow-up: `kanban/10-next/consolidate-web-channel-test-bootstrap-fixtures.md`.
- Validation on `main`:
  - `cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/extensions/extensions-keychain-tools.test.ts test/extensions/extensions-internal-tools.test.ts test/extensions/extensions-workspace-search.test.ts` (15 pass / 0 fail)
  - `bun run lint` (pass)
  - `bun run typecheck` (pass)
- Evidence: `artifacts/reduce-code-duplication-and-prune-redundant-tests/2026-03-27T10-20-56Z/summary.md`

### 2026-03-26
- Created to explicitly track code/test duplication cleanup after noticing that earlier audit work covered this topic historically, but no current open ticket owned it directly.
- Intended to complement the existing quality/refactor tickets without duplicating the major architecture splits.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `kanban/50-done/post-release-code-audit.md`
- `kanban/30-blocked/codebase-quality-cleanup-2026.md`
- `kanban/10-next/split-webchannel-god-class.md`
- `kanban/10-next/split-agentpool-god-class.md`
- `kanban/10-next/consolidate-web-channel-test-bootstrap-fixtures.md`
- `artifacts/reduce-code-duplication-and-prune-redundant-tests/2026-03-27T10-20-56Z/summary.md`
