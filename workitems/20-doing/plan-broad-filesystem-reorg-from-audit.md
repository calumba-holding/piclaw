---
id: plan-broad-filesystem-reorg-from-audit
title: Plan and stage a broad filesystem reorg from the layout audit
status: doing
priority: high
created: 2026-03-28
updated: 2026-03-28
target_release: next
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - refactor
  - repo-layout
  - filesystem
  - restructuring
owner: pi
blocked-by:
  - audit-project-filesystem-layout
---

# Plan and stage a broad filesystem reorg from the layout audit

## Summary

Use the completed filesystem audit as the basis for a deliberate **broad repo
reorganization** rather than only a series of small local cleanups.

This ticket exists because the earlier audit intentionally leaned conservative,
but project direction has now changed: a wider reorg is desired, provided it is
planned, staged, and validated rather than executed as an ad-hoc move sweep.

## Objective

Produce and begin executing a broad reorganization plan that improves:

- repo-root vs `runtime/` ownership clarity
- placement of docs/scripts/artifacts
- containment of generated/transient output under `runtime/`
- board/work-item path clarity (`kanban/` vs possible `workitems/`)
- source/module discoverability where grouping is already justified

## Scope

Potentially in scope, pending plan decisions:

- root vs `runtime/` boundary clarification and accompanying moves
- `docs/` / `runtime/docs/` rationalization
- `scripts/` / `runtime/scripts/` rationalization
- `artifacts/` / `runtime/artifacts/` / `runtime/reports/` rationalization
- generated/transient runtime layout policy and moves where justified
- `kanban/` path rename follow-up if still desired after review
- downstream regrouping such as `runtime/src/channels/web/` flattening cleanup

## Non-goals

- Do **not** perform a blind all-at-once move sweep without a reviewed plan.
- Do **not** mix unrelated behavioral refactors into the layout work.
- Do **not** break packaging/runtime/tooling paths without explicit validation.

## Recommended approach

### Phase 1 — design the target shape
1. Turn the audit findings into a concrete target layout map.
2. Decide which moves are mandatory vs nice-to-have.
3. Identify compatibility shims/aliases/documentation needed during transition.
4. Split execution into reviewable batches if one-shot migration is too risky.

### Phase 2 — execute in staged slices
1. Land the highest-value structural moves first.
2. Re-run path-sensitive validation after each batch.
3. Update docs, helpers, and board/tooling references alongside the moves.

## Acceptance Criteria

- [x] A concrete target layout is documented from the audit findings.
- [x] The broad reorg is broken into explicit execution stages or committed as a justified one-shot migration plan.
- [x] Path-sensitive docs/helpers/tooling impacted by the reorg are identified up front.
- [x] Validation expectations are documented for each execution batch.
- [x] The plan clearly distinguishes must-move areas from acceptable current structure.

## Test / Validation Plan

- [ ] Search for stale path references after each staged move.
- [ ] Run affected lint/typecheck/tests depending on the directories touched.
- [ ] Re-check packaging/install/documentation paths when boundary directories move.
- [ ] Re-check board/skill/helper behavior if `kanban/` is renamed.

## Definition of Done

- [x] The broad reorg plan is approved and broken into executable stages.
- [x] At least the first execution stage is clearly defined or landed. *(Stage 1 and Stage 2 execution tickets both exist, and both batches have now been executed locally with validation green.)*
- [x] The board reflects the new reorg sequence clearly enough for follow-up work.

## Updates

### 2026-03-28
- Created immediately after reviewing `audit-project-filesystem-layout` in light of new project guidance.
- The audit findings still stand, but its earlier conservative recommendation against broad churn is now explicitly superseded.
- Starting point inputs for this planning/execution umbrella:
  - `docs/filesystem-layout-audit-2026-03-28.md`
  - `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
  - `workitems/40-review/rationalize-runtime-generated-output-layout.md`
  - `workitems/10-next/group-web-channel-flat-files.md`
  - `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- Immediate next step: turn the audit into a target-state reorg map and decide whether execution should happen in 2–4 staged batches or a more aggressive single migration.
- Completed planning artifacts:
  - `docs/broad-filesystem-reorg-map-2026-03-28.md`
  - `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
  - `workitems/40-review/execute-stage1-board-rename-and-boundary-framing.md`
- Additional reorg finding folded into the plan: internal extension and packaged skill paths also need clearer namespacing, tracked via:
  - `workitems/10-next/namespace-internal-extensions-and-skills-paths.md`
- Stage 1 was executed and landed on `main` via `75f7dedb` (`Rename kanban board paths to workitems`).
- Stage 2 was executed and landed on `main` via `d11c585b` (`Contain runtime generated output under runtime/generated`), with the implementation and validation captured in:
  - `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
  - `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
  - `workitems/40-review/execute-stage2-runtime-generated-containment.md`
- Stage 3 boundary clarification was then landed as a bounded policy/docs batch, with the implementation captured in:
  - `docs/repo-runtime-boundaries-2026-03-28.md`
  - `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
- Stage 4 is now explicit enough for implementation or autoresearch, with execution inputs captured in:
  - `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`
  - `workitems/20-doing/execute-stage4-extension-and-skill-namespacing.md`

## Links

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-autoresearch-prompt-2026-03-28.md`
- `docs/stage1-board-rename-reference-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- `workitems/40-review/execute-stage1-board-rename-and-boundary-framing.md`
- `workitems/40-review/execute-stage2-runtime-generated-containment.md`
- `workitems/40-review/audit-project-filesystem-layout.md`
- `docs/filesystem-layout-audit-2026-03-28.md`
- `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
- `workitems/40-review/rationalize-runtime-generated-output-layout.md`
- `workitems/10-next/namespace-internal-extensions-and-skills-paths.md`
- `workitems/20-doing/execute-stage4-extension-and-skill-namespacing.md`
- `workitems/10-next/group-web-channel-flat-files.md`
- `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
