---
id: split-web-styles-monolith
title: Split the web styles monolith into layered stylesheets
status: next
priority: low
created: 2026-03-29
updated: 2026-03-29
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

## Notes

Likely split axes:
- base/layout
- timeline/posts
- panes/editor/workspace
- responsive/mobile
- feature-specific overrides

## Updates

### 2026-03-29
- Created from the umbrella follow-up list so the oversized CSS monolith is tracked as a real ticket instead of a placeholder note.
- This is a P3 quality item, not a prerequisite for the already-closed structural runtime refactors.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `runtime/web/static/css/styles.css`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
