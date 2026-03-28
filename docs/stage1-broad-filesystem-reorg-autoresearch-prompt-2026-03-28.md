# Autoresearch prompt — Stage 1 broad filesystem reorg

Use this as the execution brief for an autoresearch run working Stage 1 of the
broad filesystem reorg.

## Prompt

Work the Stage 1 broad filesystem reorg batch from:

- `workitems/50-done/execute-stage1-board-rename-and-boundary-framing.md`
- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`

Your objective is to land a broad but still reviewable Stage 1 filesystem
cleanup that:

1. renames `kanban/` to `workitems/` using `git mv`
2. updates project-local board/tooling/docs/helper references to the new path
3. documents and enforces repo-root vs `runtime/` ownership rules for
   `docs/`, `runtime/docs/`, `scripts/`, `runtime/scripts/`, `artifacts/`, and
   runtime-generated reports
4. preserves compatibility where needed for transitional surfaces such as
   `kanban-management` or other user-facing names, instead of forcing a blind
   one-shot naming purge
5. records any internal extension / packaged skill namespacing fallout exposed
   by the rename for later follow-up work

## Scope guardrails

In scope:

- board path rename: `kanban/` → `workitems/`
- path/reference updates in docs, tickets, helpers, scaffolded files, and code
- compatibility choices around `kanban-management` and `.kanban.md`
- root-vs-runtime ownership documentation updates
- recording extension/skill namespacing fallout

Out of scope:

- `runtime/generated/` work
- moving `runtime/dist/`, `runtime/coverage/`, `runtime/reports/`,
  `runtime/tmp/`, `runtime/.cache/`
- `runtime/artifacts/` relocation
- `runtime/src/channels/web/` grouping cleanup
- unrelated runtime behavior refactors

## Constraints

- use `/workspace/piclaw` as the canonical repo
- work from a clean branch based on `origin/main`
- preserve behavior and avoid unrelated changes
- prefer `git mv` for directory renames
- keep intentional visual/editor-specific `kanban` naming only where it truly
  refers to the kanban editor/file format rather than the project board path
- avoid indefinite dual-path support; add compatibility only where it reduces
  migration risk materially

## Required validation order

1. search for stale `kanban/` / `piclaw/kanban` / `kanban-management` path references
2. run targeted tests for touched board/tooling/web/helper surfaces
3. run `bun run lint`
4. run `bun run typecheck`
5. run `bun run check:stale-dist` if touched surfaces make it relevant

## Expected outputs

- moved `workitems/` tree
- updated docs/helpers/tooling references
- documented ownership rule for root vs `runtime/`
- updated Stage 1 ticket with migration notes and validation evidence
- if successful, a mergeable commit that stays within Stage 1 scope

## Stop conditions

Stop and report rather than widening scope if:

- the change starts to require Stage 2 generated-output moves
- extension/skill namespacing becomes a large tree move of its own
- broad behavior changes appear outside board/path/documentation surfaces
- validation failures indicate the batch should be split further before landing
