---
id: workspace-header-hamburger-menu-for-actions
title: Add a global hamburger menu beside the workspace header for workspace actions
status: done
created: 2026-03-15
updated: 2026-03-17
completed: 2026-03-17
target_release: next
estimate: S
risk: low
priority: medium
tags:
  - work-item
  - kanban
  - web-ui
  - workspace
  - menu
  - terminal
owner: pi
---

# Add a global hamburger menu beside the workspace header for workspace actions

## Summary

The workspace explorer now exposes a hamburger menu as a global workspace action surface
positioned beside the `Workspace` header label.

This menu collects workspace-level actions (tree operations, file actions, hidden-file
visibility, and terminal controls) in one place and keeps the header UI consistent
while avoiding scattered action buttons.

## Problem Statement

Workspace actions were scattered or implied through per-row operations. A dedicated,
global workspace action surface was needed so users can discover high-level controls,
including terminal access, without hunting through context-specific affordances.

## Goals

- Add a consistent workspace-level action menu in the header.
- Make terminal controls reachable from this menu.
- Keep keyboard/pointer interactions clean and unobtrusive.
- Preserve existing file-level action flows and behaviors.

## Acceptance Criteria

- [x] A hamburger/menu button appears beside the Workspace header label.
- [x] Clicking it opens a workspace-actions menu aligned with the workspace header.
- [x] Menu contains workspace-level actions, including terminal access (`Open terminal in tab` / `Show/Hide terminal`).
- [x] Menu does not interfere with existing workspace header controls or upload/status UI.
- [x] Menu supports keyboard and pointer interaction (open/close, escape, outside click).
- [x] Menu remains usable on compact and regular layouts.

## Test Plan

- [x] Visual/manual validation in workspace sidebar header.
- [x] Validate menu open/close interactions and outside click dismissal.
- [x] Validate terminal-related actions still call existing handlers.

## Notes

The underlying behavior was already largely present in the header menu implementation;
this pass explicitly aligns the placement with the `Workspace` label and confirms
terminal wiring as a first-class workspace action.

## Links

- `piclaw/web/src/components/workspace-explorer.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/panes/terminal-pane.ts`
- `piclaw/kanban/00-inbox/workspace-explorer-scale-ui-control.md`
- `piclaw/kanban/00-inbox/workspace-upload-progress-ui.md`
- `piclaw/kanban/00-inbox/workspace-fts-indexing-status-feedback.md`
