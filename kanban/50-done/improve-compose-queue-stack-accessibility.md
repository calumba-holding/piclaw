---
id: improve-compose-queue-stack-accessibility
title: Improve queued follow-up stack button accessibility
status: done
priority: low
created: 2026-03-17
updated: 2026-03-17
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - compose
  - accessibility
owner: pi
---

# Improve queued follow-up stack button accessibility

## Summary

Queued follow-up controls (Steer / Cancel) are not always obvious in keyboard mode because buttons can be hard to detect visually.

Improve the row with clear accessible labels and stronger focus-visible/focus-within behavior without changing the queue semantics.

## Acceptance Criteria

- [x] `Steer` and `Cancel` buttons expose explicit, screen-reader-friendly labels.
- [x] Controls keep visible/high-contrast focus styles for keyboard navigation.
- [x] Close/cancel affordance is discoverable when row has focus (not only pointer hover).
- [x] No layout regressions in compact viewports.

## Links

- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/static/css/styles.css`
