---
id: split-web-styles-monolith
title: Split the web styles monolith into layered stylesheets
status: doing
priority: low
created: 2026-03-29
updated: 2026-03-29
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - css
  - quality
owner: pi
blocked-by: []
---

# Split the web styles monolith into layered stylesheets

## Summary

`runtime/web/static/css/styles.css` is now one of the largest remaining source files in the repo and materially exceeds the umbrella quality target.

The file currently mixes base layout, chat timeline styling, panes, editor surfaces, mobile rules, VNC/terminal affordances, and feature-specific overrides in one stylesheet.

## Acceptance Criteria

- [ ] `runtime/web/static/css/styles.css` is split into a small set of purpose-based stylesheets or imports.
- [ ] No visual regressions are introduced in the main chat UI and major panes.
- [ ] Build/static serving behavior stays unchanged.
- [ ] Manual verification notes are recorded for the touched UI surfaces.

## Implementation Paths

### Path A — Layered stylesheet split (recommended)
Carve `styles.css` into base/layout, timeline, pane/editor, and responsive/mobile layers while keeping the entrypoint and static serving contract unchanged.

### Path B — Component-adjacent extraction
Move rules toward feature/component-specific partials near the consuming UI surface first, then add a shared base layer later.

## Test Plan

- [ ] Run `bun run build:web`
- [ ] Smoke-check the main chat UI, workspace/editor panes, and mobile layout manually
- [ ] Record visual verification notes in `## Updates`

## Definition of Done

- [ ] The stylesheet monolith is split into named layers or imports
- [ ] The main web UI still renders correctly after the split
- [ ] Manual verification evidence is recorded in `## Updates`

## Notes

Likely split axes:
- base/layout
- timeline/posts
- panes/editor/workspace
- responsive/mobile
- feature-specific overrides

## Updates

### 2026-03-29
- Lane change: `10-next` → `20-doing` by user request so the CSS split can be staged in parallel with the app-shell decomposition follow-up.
- Chosen implementation path: **Path A — Layered stylesheet split**.
- No code changes started yet in this tranche; the active implementation focus is currently on `continue-decompose-web-app-shell` first.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

### 2026-03-29
- Created from the umbrella follow-up list so the oversized CSS monolith is tracked as a real ticket instead of a placeholder note.
- This is a P3 quality item, not a prerequisite for the already-closed structural runtime refactors.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `runtime/web/static/css/styles.css`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
