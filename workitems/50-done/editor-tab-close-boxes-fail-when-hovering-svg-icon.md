---
id: editor-tab-close-boxes-fail-when-hovering-svg-icon
title: Fix editor tab close boxes when hovering directly over the SVG icon
status: done
priority: high
created: 2026-03-15
updated: 2026-03-16
completed: 2026-03-15
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - editor
  - tabs
  - ux
  - pointer-events
owner: pi
---

# Fix editor tab close boxes when hovering directly over the SVG icon

## Summary

The editor tab close affordance still has a hit-target/hover bug: clicking or
hovering directly over the **SVG close icon** does not behave the same as
hovering over the surrounding close button box.

This should be fixed so the close affordance works consistently across the full
visible target, including the icon itself.

## Problem Statement

The current editor tab close control appears visually correct, but the effective
interactive hit area is still wrong when the pointer lands directly on the SVG
icon.

Observed symptom:

- the close box appears present
- but interaction becomes unreliable or fails when the mouse is directly over the SVG icon rather than the surrounding button area

Likely causes include:

- incorrect `pointer-events` on the SVG or its child paths
- hover/click styling tied to the wrong element
- event handling bound on the wrapper while the icon intercepts input
- mismatch between visible affordance and actual click target dimensions

## Acceptance Criteria

- [ ] Clicking the editor tab close affordance works reliably whether the pointer is over:
  - the surrounding close box
  - the SVG icon itself
  - the inner path/shape area of the icon
- [ ] Hover styling is consistent for the entire close control, not only the non-SVG area.
- [ ] The fix does not break normal tab selection or drag behavior.
- [ ] The close affordance remains keyboard-accessible if it already is or is intended to be.
- [ ] Regression coverage exists for the confirmed failure mode.

## Investigation Plan

- [ ] Inspect editor tab close markup and event binding.
- [ ] Check whether SVG or child nodes need `pointer-events: none` or equivalent event-routing cleanup.
- [ ] Verify whether the issue exists only in editor tabs or also in other close-icon affordances.
- [ ] Confirm whether shared tab-strip/close-button styling should be normalized across the app.

## Test Plan

- [ ] Add or extend web/UI tests around tab close interaction.
- [ ] Manually verify:
  1. hover over close button box
  2. hover directly over SVG icon
  3. click directly on icon
  4. click near icon edge
  5. close multiple tabs in sequence
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw`.

## Definition of Done

- [ ] Root cause identified
- [ ] Close affordance works across the full visible hit target
- [ ] Regression coverage added
- [ ] `bun run quality` passes

## Updates

### 2026-03-16
- Closed as shipped.
- The editor tab close SVG hitbox issue was fixed in commit `62f75fc` (`Fix editor tab close SVG hitbox`).
- Ticket was left in inbox after the code fix landed; this board-hygiene pass moves it to done.

### 2026-03-15
- Created from user report that editor close boxes still fail when the mouse hovers directly over the SVG close icon.

## Notes

- Prefer fixing the underlying event/hit-target model rather than only enlarging padding cosmetically.
- Keep the close affordance behavior aligned with the standardized tab/dock close controls already used elsewhere in the UI.

## Links

- `piclaw/web/src/components/tab-strip.ts`
- `piclaw/web/src/components/editor.ts`
- `piclaw/web/src/panes/tab-strip.ts`
- `piclaw/web/static/css/styles.css`
