---
id: add-attachments-clear-all-in-compose
title: Add one-click "clear all" for compose attachments
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
owner: pi
---

# Add one-click "clear all" for compose attachments

## Summary

Compose currently requires repeatedly dismissing each pill to clear `messageRefs`, `fileRefs`, and attachment thumbnails.

Add a single **Clear all** affordance in the attachment row so users can quickly reset all pending attachables before send.

## Acceptance Criteria

- [x] A compact action appears whenever one or more attachment pills are present.
- [x] Clicking **Clear all** clears:
  - message references
  - workspace file refs
  - upload media refs
- [x] Keyboard users can activate the control with Enter/Space.
- [x] Control is visually compact and consistent with compose row style.
- [x] No functional regressions to existing pill remove behavior.

## Links

- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/components/compose-box.ts` (attachment row rendering)
- `piclaw/web/src/static/css/styles.css`
