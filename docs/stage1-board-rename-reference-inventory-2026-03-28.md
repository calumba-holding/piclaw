# Stage 1 board-rename reference inventory — 2026-03-28

## Purpose

Capture the baseline path-sensitive reference surface before executing Stage 1 of
the broad filesystem reorg.

This gives autoresearch or a manual implementation pass a concrete starting
inventory for the `kanban/` → `workitems/` rename.

## Baseline counts

Using repo searches on 2026-03-28:

- total `kanban/` / `piclaw/kanban` references across the repo: **419**
- references outside the board markdown/artifact-heavy areas scanned via
  `README.md docs runtime scripts skel package.json Makefile .github supervisor entrypoint.sh Dockerfile docker-compose.yml`: **53**
- `kanban-management` / `.kanban.md` / `kanban-*` editor references in that same
  narrowed surface: **34**

These numbers confirm that Stage 1 is broad enough to matter, but still bounded
if we focus on path-sensitive non-artifact surfaces first.

## Major hotspot categories

### 1) Board path references in scripts/docs/helpers

Representative examples:

- `scripts/audit-extract-typed-config-objects.sh`
- `scripts/audit-session-turn-management-regression.sh`
- docs and planning files created for the reorg itself
- repo docs that link directly to lane paths under `kanban/`

These are expected Stage 1 targets.

### 2) Skill naming / work-item-path references

Representative examples:

- `docs/tools-and-skills.md` references `kanban-management`
- planning docs now explicitly discuss whether `kanban-management` remains a temporary public name

These need a compatibility decision, not a blind rename.

### 3) Intentional visual/editor `kanban` semantics

Representative examples:

- `runtime/web/src/panes/kanban-pane.ts`
- `runtime/web/src/vendor/kanban-editor-source.ts`
- `runtime/web/src/ui/tab-source-editor.js`
- `runtime/test/web/tab-source-editor.test.ts`
- `.kanban.md` file extension handling
- `kanban-editor` pane identifiers

These should **not** be mechanically renamed just because the board path moves.
They are likely intentional visual/editor naming and must be separated from
board-path references.

### 4) Dist/bundle echoes of source naming

Examples include:

- `runtime/web/static/dist/app.bundle.js`
- `runtime/web/static/dist/app.bundle.js.map`
- `runtime/web/static/dist/editor.bundle.js`

These are derivative outputs; Stage 1 should treat them as generated results of
source changes rather than hand-edit targets.

## Stage 1 handling guidance

### Rename/update directly

- project board path references (`kanban/...` as the repo work-item store)
- docs/helper references that point at board lanes or board files
- scripts with hard-coded `kanban/` paths
- scaffolding path references if the scaffolded board path also moves

### Keep intentionally named `kanban` surfaces unless a policy decision says otherwise

- `.kanban.md`
- `kanban-pane`
- `kanban-editor`
- visual/editor vendor filenames
- public skill names that remain temporarily compatibility-shimmed

## Notes for autoresearch

A Stage 1 autoresearch run should use this inventory to avoid two common mistakes:

1. **over-renaming** visual/editor `kanban` semantics that are not actually board-path references
2. **under-renaming** hard-coded project board paths in docs/scripts/helpers

## Related files

- `docs/stage1-broad-filesystem-reorg-steplist-2026-03-28.md`
- `docs/stage1-broad-filesystem-reorg-autoresearch-prompt-2026-03-28.md`
- `kanban/20-doing/execute-stage1-board-rename-and-boundary-framing.md`
