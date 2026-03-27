---
id: reduce-code-duplication-and-prune-redundant-tests
title: Reduce code duplication and prune redundant test coverage
status: next
priority: medium
created: 2026-03-26
updated: 2026-03-26
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

- [ ] At least one concrete low-risk code duplication seam is removed or consolidated.
- [ ] At least one area of overlapping/redundant test coverage is merged, pruned, or rewritten more cleanly.
- [ ] Any removed tests are justified by equivalent or stronger remaining coverage.
- [ ] Shared helper/fixture cleanup is documented where applicable.
- [ ] Larger or riskier duplication candidates are split into explicit follow-up tickets instead of being bundled into this pass.

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

- [ ] Run the targeted affected test suites before and after changes.
- [ ] Run `cd /workspace/piclaw && bun run test` if the change surface is broad enough.
- [ ] Record what duplication was removed and what equivalent coverage remains.
- [ ] If new/modified exported `.ts` symbols are introduced while extracting helpers:
  - [ ] All exported symbols have JSDoc
  - [ ] Interface/type properties documented
  - [ ] Public class methods documented

## Definition of Done

- [ ] Low-risk duplication reduced in at least one meaningful seam.
- [ ] Redundant test coverage is pruned/merged with justification.
- [ ] No meaningful regression coverage is lost.
- [ ] Update history records before/after rationale and evidence.

## Updates

### 2026-03-26
- Created to explicitly track code/test duplication cleanup after noticing that earlier audit work covered this topic historically, but no current open ticket owned it directly.
- Intended to complement the existing quality/refactor tickets without duplicating the major architecture splits.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `kanban/50-done/post-release-code-audit.md`
- `kanban/30-blocked/codebase-quality-cleanup-2026.md`
- `kanban/10-next/split-webchannel-god-class.md`
- `kanban/10-next/split-agentpool-god-class.md`
