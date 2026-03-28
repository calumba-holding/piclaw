---
id: execute-stage2-runtime-generated-containment
title: Execute Stage 2 broad reorg batch — runtime generated-output containment
status: review
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

- [x] `runtime/generated/` is introduced as a clear containment boundary
- [x] Clearly transient output directories are moved or aliased consistently
- [x] `runtime/reports/` and `runtime/artifacts/` are explicitly classified and either moved or intentionally deferred
- [x] Path-sensitive scripts/docs/tooling are updated consistently
- [x] Validation for the touched surfaces is green
- [x] Migration notes are recorded in this ticket

## Test / Validation Plan

- [x] Search for stale old output-path references after the move
- [x] Run directly affected build/report/helper commands
- [x] Run `bun run lint`
- [x] Run `bun run typecheck`
- [x] Run `bun run check:stale-dist`
- [x] Run packaging/install checks if moved paths affect them

## Updates

### 2026-03-28
- Created as the second execution batch under `plan-broad-filesystem-reorg-from-audit` after Stage 1 board/workitems renaming landed.
- Intended to keep the broad reorg moving while staying bounded to runtime generated/transient output containment.
- Detailed inventory + step order live in:
  - `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
  - `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
  - `docs/stage2-runtime-generated-autoresearch-prompt-2026-03-28.md`

### 2026-03-28 — execution notes
- Lane change: `20-doing` → `40-review` after the Stage 2 containment batch landed locally with validation green.
- Introduced `runtime/generated/` with an explicit README documenting what belongs there and what does not.
- Moved tracked TypeScript build output from `runtime/dist/` to `runtime/generated/dist/` and updated build + stale-dist tooling accordingly.
- Repointed Bun coverage output from `runtime/coverage/` to `runtime/generated/coverage/` in package scripts and the targeted coverage audit helper.
- Repointed runtime-local vendor caches from `runtime/.cache/` to `runtime/generated/cache/` while leaving the older `.cache/` ignore entry in place as a compatibility fallback.
- Classified VNC harness reports as durable repo evidence and moved the tracked report set from `runtime/reports/` to `artifacts/vnc-harness/`; updated the Playwright report helper to emit there.
- Classified `runtime/tmp/` as maintained operator scratch rather than generated output because the observed contents are authored helper scripts; intentionally deferred any forced move under `runtime/generated/`.
- Classified `runtime/artifacts/` as durable repo evidence and retired the runtime-local location in favor of repo-level `artifacts/`.
- Left `runtime/node_modules/` untouched as the explicit Stage 2 toolchain exception.
- Validation completed in the required order:
  - stale-path search over non-historical code/docs surfaced only intentional explanatory references
  - `bun run build`
  - `cd runtime && bun run scripts/vendor-firacode-nerd-font.ts`
  - `cd runtime && bun run scripts/vendor-drawio.ts`
  - `./scripts/audit-core-config-keychain-coverage.sh`
  - `bun run vnc:harness:report` (smoke; validation-only output removed afterward if new files were produced)
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
  - `bun run check:pack-hygiene`
  - `bun run check:repo-install`

## Links

- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- `docs/stage2-runtime-generated-autoresearch-prompt-2026-03-28.md`
- `workitems/40-review/rationalize-runtime-generated-output-layout.md`
