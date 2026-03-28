---
id: folder-drag-drop-confirmation
title: Folder drag and drop operations should require confirmation
status: inbox
priority: medium
created: 2026-03-19
updated: 2026-03-19
tags:
  - work-item
  - kanban
  - web
  - workspace
  - ux
owner: pi
---

# Folder drag and drop operations should require confirmation

## Summary

Dragging and dropping folders in the workspace explorer should prompt for confirmation before executing the move. Accidental folder drags can silently relocate entire directory trees, which is hard to notice and undo.

## Acceptance Criteria

- [ ] Folder drag-and-drop in the workspace explorer shows a confirmation dialog before moving.
- [ ] The confirmation shows source and destination paths clearly.
- [ ] File drag-and-drop behavior is unchanged (no confirmation needed for single files).
- [ ] Cancel aborts the move cleanly with no side effects.

## Updates

### 2026-03-19
- Created from user request.
