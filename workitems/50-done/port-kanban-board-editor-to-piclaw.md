---
id: port-kanban-board-editor-to-piclaw
title: Port kanban board editor from VS Code extension to piclaw web pane
status: done
priority: medium
created: 2026-03-24
updated: 2026-03-26
completed: 2026-03-26
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web
  - editor
  - pane-extension
owner: pi
---

# Port kanban board editor to piclaw web pane

## Summary

Port the kanban board VS Code extension (`/workspace/projects/kanban-vscode/`)
to a piclaw web pane extension. The editor renders `.kanban.md` markdown-backed
kanban boards with drag-and-drop card movement between lanes.

## Source analysis

| File | Lines | Purpose |
|------|------:|---------|
| `src/webview/kanban.ts` | 939 | Board renderer, drag-and-drop, card editing |
| `src/kanbanEditorProvider.ts` | 159 | VS Code custom editor provider |
| `src/parser.ts` | 256 | Markdown ↔ kanban board parser |
| `src/extension.ts` | 56 | VS Code extension entry point |
| `src/types.ts` | 61 | TypeScript interfaces |

The core renderer and markdown parser are pure browser/node JS — no VS Code
API dependencies in the rendering path.

## Vendor dependencies

The kanban board uses minimal external deps — primarily the markdown parser is
built-in. However, any shared vendor assets must go through the standard pipeline:

| Dependency | Source | Used for |
|-----------|--------|----------|
| `marked` | already vendored (`runtime/web/static/js/vendor/`) | Markdown rendering for card content |

Steps:
- [ ] Verify `marked` is already available from the existing vendor chain
- [ ] If any new deps are added during porting, create vendor manifests and wire into `build:vendor`
- [ ] No ad-hoc copies into `web/static/` — use `runtime/vendor-manifests/` pipeline

## Acceptance Criteria

- [ ] `.kanban.md` files open in a dedicated pane
- [ ] Lanes and cards render from markdown structure
- [ ] Drag-and-drop cards between lanes
- [ ] Edit card text inline
- [ ] Changes save back to markdown format
- [ ] Theme-aware

## Test Plan

- [ ] Open/render existing kanban markdown files
- [ ] Drag cards between lanes, verify markdown update
- [ ] Create/edit/delete cards

## Definition of Done

- [ ] Pane extension registered and working
- [ ] Core features ported
- [ ] Manual test passes

## Updates

### 2026-03-26
- Corrected status after confirming the implementation already exists in the runtime web app.
- Lane change: `20-doing` → `50-done`.
- Evidence found in Piclaw runtime:
  - `runtime/web/src/panes/kanban-pane.ts`
  - `runtime/web/src/vendor/kanban-editor-source.ts`
  - `runtime/web/src/vendor/kanban-parser.ts`
  - `runtime/web/static/css/kanban.css`
  - `runtime/web/static/js/vendor/kanban-editor.js`
  - registration in `runtime/web/src/app.ts`
- Outcome: the kanban editor port is treated as shipped/landed rather than deferred.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-24
- Created from analysis of `/workspace/projects/kanban-vscode/`.
- Placed in next — mindmap editor has priority.

## Links

- `/workspace/projects/kanban-vscode/`
- `docs/web-pane-extensions.md`
- `runtime/web/src/panes/kanban-pane.ts`
- `runtime/web/src/vendor/kanban-editor-source.ts`
- `runtime/web/src/vendor/kanban-parser.ts`
- `runtime/web/static/css/kanban.css`
- `runtime/web/static/js/vendor/kanban-editor.js`
- `runtime/web/src/app.ts`
- `workitems/50-done/port-mindmap-editor-to-piclaw.md`
