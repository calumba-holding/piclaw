---
id: execute-stage1-board-rename-and-boundary-framing
title: Execute Stage 1 broad reorg batch — board rename and boundary framing
status: done
priority: high
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
target_release: next
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - refactor
  - repo-layout
  - filesystem
  - stage-1
owner: pi
blocked-by:
  - plan-broad-filesystem-reorg-from-audit
---

# Execute Stage 1 broad reorg batch — board rename and boundary framing

## Summary

Execute Stage 1 of the broad filesystem reorg:

1. rename `kanban/` to `workitems/`
2. update board/tooling/docs/skill references
3. document and enforce repo-root vs `runtime/` ownership rules

This is the first concrete execution batch after the reorg-map planning step.

## Scope

In scope:

- `kanban/` → `workitems/`
- path/reference updates for board tooling/docs/helpers
- naming/compatibility decisions around `kanban-management`
- root-vs-runtime ownership documentation for docs/scripts/artifacts
- inventory/recording of internal extension and packaged skill namespacing fallout exposed by the rename

Out of scope:

- `runtime/generated/` work
- generated-output moves
- `runtime/artifacts/` relocation
- flat `runtime/src/channels/web/` grouping cleanup
- unrelated runtime behavior changes

## Execution source of truth

Use:

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`

as the implementation map/steplist for this batch.

## Acceptance Criteria

- [x] `kanban/` is renamed to `workitems/`
- [x] Path-sensitive board/tooling/docs references are updated or intentionally compatibility-shimmed
- [x] The `kanban` vs `workitems` naming policy is documented for skills/helpers/editor semantics
- [x] Root-vs-runtime ownership rules are documented clearly
- [x] Internal extension/skill namespacing fallout is recorded for later batches
- [x] Validation for the touched surfaces is green
- [x] Migration notes are recorded in this ticket

## Test / Validation Plan

- [x] Search for stale `kanban/` references after the move
- [x] Run targeted tests for board/tooling/web areas affected by the path changes
- [x] Run `bun run lint`
- [x] Run `bun run typecheck`
- [x] Evaluate `bun run check:stale-dist` relevance (not run; no runtime/web source or dist-managed inputs changed in this batch)

## Migration Notes

- Renamed the canonical repo board from `kanban/` to `workitems/` with `git mv`, and mirrored the scaffold move from `skel/kanban/` to `skel/workitems/`.
- Updated project-local board links across repo docs, runtime docs, helper scripts, and the moved workitems tree so path-sensitive references follow the new location.
- Kept the public skill name `kanban-management` for compatibility, but updated its docs/helper script so the canonical board path is `workitems/` while the helper still accepts legacy `--kanban` / `KANBAN_DIR` inputs.
- Intentionally preserved visual/editor-specific `kanban` semantics such as `*.kanban.md`, `kanban-pane`, `kanban-editor`, and the bundled vendor/editor filenames.
- Recorded later namespacing fallout rather than widening scope: packaged runtime `extensions/` and `skills/` still need clearer built-in/internal/project-local grouping, and scaffolded `skel/.pi/skills/` keeps temporary mixed naming until the follow-on namespacing batch.

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Executed the Stage 1 board rename on branch `autoresearch/stage1-workitems-rename-2026-03-28` from `origin/main`.
- Renamed `kanban/` → `workitems/` and `skel/kanban/` → `skel/workitems/` using `git mv`.
- Added repo-root vs `runtime/` ownership rules to `README.md` and documented the transitional naming policy in `docs/tools-and-skills.md` plus `skel/.pi/skills/kanban-management/SKILL.md`.
- Updated `skel/.pi/skills/kanban-management/kanban-board-svg.ts` to prefer `/workspace/workitems`, fall back to `/workspace/kanban`, and accept both `--workitems` and legacy `--kanban` inputs.
- Validation:
  - stale-ref search: `rg -n "kanban/|piclaw/kanban|skel/kanban|/workspace/kanban" README.md docs runtime scripts skel workitems`
  - targeted surfaces: `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 runtime/test/web/tab-source-editor.test.ts runtime/test/web/editor-extension.test.ts runtime/test/web/markdown-live-preview-gating.test.ts runtime/test/web/pane-registry.test.ts`
  - helper smoke: `bun run skel/.pi/skills/kanban-management/kanban-board-svg.ts --workitems /workspace/piclaw/workitems --out /tmp/piclaw-workitems-board.svg`
  - repo lint: `bun run lint`
  - repo typecheck: `bun run typecheck`
  - `bun run check:stale-dist` intentionally skipped because this batch did not touch runtime/web source inputs or committed dist artifacts.
- Remaining `kanban/` hits are intentional references in historical audit/planning docs and rename-tracking tickets, not stale live board paths.

### 2026-03-28
- Lane change: `20-doing` → `40-review` after the Stage 1 rename landed on `main`.
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the Stage 1 rename/boundary-framing batch is complete.
- Created as the first execution batch under `plan-broad-filesystem-reorg-from-audit`.
- Intended to be suitable for either manual execution or an autoresearch run.
- The detailed step order and guardrails live in:
  - `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
  - `docs/stage1-broad-filesystem-reorg-autoresearch-prompt-2026-03-28.md`
  - `docs/stage1-board-rename-reference-inventory-2026-03-28.md`
- Baseline inventory captured for Stage 1 planning:
  - total `kanban/` / `piclaw/kanban` refs across the repo: 419
  - narrowed non-board/artifact path-sensitive refs scanned via `README.md docs runtime scripts skel package.json Makefile .github supervisor entrypoint.sh Dockerfile docker-compose.yml`: 53
  - narrowed `kanban-management` / `.kanban.md` / editor-semantic refs in that same surface: 34
- Immediate goal: keep the batch broad enough to reshape the repo honestly, but still bounded enough to validate and review.

## Links

- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
- `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- `workitems/50-done/clarify-root-vs-runtime-ownership-boundaries.md`
