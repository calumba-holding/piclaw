---
id: execute-stage1-board-rename-and-boundary-framing
title: Execute Stage 1 broad reorg batch — board rename and boundary framing
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

- [ ] `kanban/` is renamed to `workitems/`
- [ ] Path-sensitive board/tooling/docs references are updated or intentionally compatibility-shimmed
- [ ] The `kanban` vs `workitems` naming policy is documented for skills/helpers/editor semantics
- [ ] Root-vs-runtime ownership rules are documented clearly
- [ ] Internal extension/skill namespacing fallout is recorded for later batches
- [ ] Validation for the touched surfaces is green
- [ ] Migration notes are recorded in this ticket

## Test / Validation Plan

- [ ] Search for stale `kanban/` references after the move
- [ ] Run `bun run lint`
- [ ] Run `bun run typecheck`
- [ ] Run `bun run check:stale-dist` if relevant
- [ ] Run targeted tests for board/tooling/web areas affected by the path changes

## Updates

### 2026-03-28
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

- `kanban/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
- `kanban/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- `kanban/10-next/clarify-root-vs-runtime-ownership-boundaries.md`
