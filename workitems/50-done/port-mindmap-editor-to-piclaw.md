---
id: port-mindmap-editor-to-piclaw
title: Port mindmap editor from VS Code extension to piclaw web pane
status: done
priority: medium
created: 2026-03-24
updated: 2026-03-26
completed: 2026-03-26
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - editor
  - pane-extension
owner: pi
---

# Port mindmap editor to piclaw web pane

## Summary

Port the mindmap editor VS Code extension (`/workspace/projects/mindmap-editor-vscode/`)
to a piclaw web pane extension. The editor renders `.mindmap.yaml` files using D3/SVG
with keyboard-driven navigation, drag-and-drop, cross-reference links, multiple layouts,
and markdown-rich node content.

## Source analysis

| File | Lines | Purpose |
|------|------:|---------|
| `src/webview/mindmap.ts` | 1,957 | D3/SVG renderer, keyboard handling, drag-and-drop |
| `src/mindmapEditorProvider.ts` | 267 | VS Code custom editor provider (read/write YAML) |
| `src/extension.ts` | 38 | VS Code extension entry point |
| `src/types.ts` | 48 | TypeScript interfaces |
| `media/mindmap.css` | 356 | Editor styles |
| `vendor/d3.min.js` | — | D3 library |
| `vendor/js-yaml.min.js` | — | YAML parser |
| `vendor/marked.min.js` | — | Markdown renderer |

The core rendering (~2k lines) is pure browser JS with D3 — no VS Code API dependencies.
The VS Code layer is thin (267 lines of editor provider + 38 lines of activation).

## Porting approach

1. **Webview → pane extension**: register a pane extension that handles `*.mindmap.yaml` files
2. **Editor provider → workspace file API**: replace VS Code's `getFileData`/`writeFileData` with piclaw's workspace file read/write endpoints
3. **D3/SVG renderer**: reuse as-is — it's already browser-native
4. **Vendor deps**: vendor D3, js-yaml, marked via the existing vendor pipeline (`runtime/vendor-manifests/` + `build:vendor` scripts), not ad-hoc copies
5. **Theme integration**: map piclaw CSS variables to the mindmap theme system

## Vendor dependencies

The following must be vendored through the standard piclaw vendor pipeline:

| Dependency | Source | Used for |
|-----------|--------|----------|
| `d3` | npm `d3` (or `d3-selection` + `d3-zoom` + `d3-drag` + `d3-force` + `d3-hierarchy`) | SVG rendering, layouts, zoom, drag |
| `js-yaml` | npm `js-yaml` | YAML parse/stringify for `.mindmap.yaml` files |
| `marked` | already vendored (`runtime/web/static/js/vendor/`) | Markdown rendering in node text |

Steps:
- [ ] Create `runtime/vendor-manifests/d3-mindmap.json` (or reuse d3 if already vendored)
- [ ] Create `runtime/vendor-manifests/js-yaml.json`
- [ ] Add `build:vendor:d3-mindmap` and `build:vendor:js-yaml` scripts to `package.json`
- [ ] Wire into the `build:vendor` aggregate target
- [ ] Verify `marked` is already available or add to the vendor chain

## Acceptance Criteria

- [ ] `.mindmap.yaml` files open in a dedicated pane
- [ ] All keyboard shortcuts work (Tab, Enter, arrows, Delete, F2, typing)
- [ ] Drag-and-drop for repositioning and re-parenting
- [ ] Cross-reference links via Ctrl+drag
- [ ] Layout switching (horizontal, vertical, radial, force-directed)
- [ ] Theme-aware (adapts to piclaw light/dark)
- [ ] Changes auto-save back to the workspace file
- [ ] Zoom controls (fit, zoom in/out)

## Test Plan

- [ ] Open/render existing mindmap files
- [ ] Create and edit nodes via keyboard
- [ ] Verify save/reload round-trip
- [ ] Test all four layouts
- [ ] Test drag-and-drop re-parenting

## Definition of Done

- [ ] Pane extension registered and working
- [ ] All core features ported
- [ ] Styles adapted for piclaw theme
- [ ] Manual test passes

## Updates

### 2026-03-26
- Corrected status after confirming the implementation already exists in the runtime web app.
- Lane change: `20-doing` → `50-done`.
- Evidence found in Piclaw runtime:
  - `runtime/web/src/panes/mindmap-pane.ts`
  - `runtime/web/src/vendor/mindmap-editor-source.ts`
  - `runtime/web/src/vendor/d3-mindmap-entry.ts`
  - `runtime/web/static/css/mindmap.css`
  - `runtime/web/static/js/vendor/mindmap-editor.js`
  - registration in `runtime/web/src/app.ts`
- Outcome: the mindmap editor port is treated as shipped/landed rather than deferred.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-24
- Created from analysis of `/workspace/projects/mindmap-editor-vscode/`.
- Moved directly to doing.

## Links

- `/workspace/projects/mindmap-editor-vscode/`
- `docs/web-pane-extensions.md`
- `runtime/web/src/panes/mindmap-pane.ts`
- `runtime/web/src/vendor/mindmap-editor-source.ts`
- `runtime/web/src/vendor/d3-mindmap-entry.ts`
- `runtime/web/static/css/mindmap.css`
- `runtime/web/static/js/vendor/mindmap-editor.js`
- `runtime/web/src/app.ts`
- `workitems/50-done/port-kanban-board-editor-to-piclaw.md`
