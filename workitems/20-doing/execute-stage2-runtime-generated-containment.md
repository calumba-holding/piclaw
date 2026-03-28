---
id: execute-stage2-runtime-generated-containment
title: Execute Stage 2 broad reorg batch — runtime generated-output containment
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
  - stage-2
owner: pi
blocked-by:
  - plan-broad-filesystem-reorg-from-audit
---

# Execute Stage 2 broad reorg batch — runtime generated-output containment

## Summary

Execute Stage 2 of the broad filesystem reorg:

1. create a clearer `runtime/generated/` boundary
2. move clearly transient runtime output under it
3. classify ambiguous runtime output areas explicitly
4. update path-sensitive tooling/docs accordingly

## Scope

In scope:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/tmp/`
- classification of `runtime/reports/` and `runtime/artifacts/`
- path updates in scripts/docs/tooling caused by those moves

Out of scope:

- `workitems/` / board rename work
- extension/skill namespacing cleanup
- `runtime/src/channels/web/` grouping work
- broad build-system rewrites
- `runtime/node_modules/` relocation unless strongly justified by validation

## Execution source of truth

Use:

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- `docs/stage2-runtime-generated-autoresearch-prompt-2026-03-28.md`

as the implementation map/steplist for this batch.

## Acceptance Criteria

- [ ] `runtime/generated/` is introduced as a clear containment boundary
- [ ] Clearly transient output directories are moved or aliased consistently
- [ ] `runtime/reports/` and `runtime/artifacts/` are explicitly classified and either moved or intentionally deferred
- [ ] Path-sensitive scripts/docs/tooling are updated consistently
- [ ] Validation for the touched surfaces is green
- [ ] Migration notes are recorded in this ticket

## Test / Validation Plan

- [ ] Search for stale old output-path references after the move
- [ ] Run directly affected build/report/helper commands
- [ ] Run `bun run lint`
- [ ] Run `bun run typecheck`
- [ ] Run `bun run check:stale-dist`
- [ ] Run packaging/install checks if moved paths affect them

## Updates

### 2026-03-28
- Created as the second execution batch under `plan-broad-filesystem-reorg-from-audit` after Stage 1 board/workitems renaming landed.
- Intended to keep the broad reorg moving while staying bounded to runtime generated/transient output containment.
- Detailed inventory + step order live in:
  - `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
  - `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
  - `docs/stage2-runtime-generated-autoresearch-prompt-2026-03-28.md`

## Links

- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- `docs/stage2-runtime-generated-autoresearch-prompt-2026-03-28.md`
- `workitems/10-next/rationalize-runtime-generated-output-layout.md`
