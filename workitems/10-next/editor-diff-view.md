---
id: editor-diff-view
title: Add a diff view in the editor
status: next
created: 2026-03-13
updated: 2026-03-28
tags:
  - work-item
  - kanban
  - web-ui
  - editor
  - diff
owner: pi
---

# Add a diff view in the editor

## Summary

Add a diff view in the web editor so users can compare two text states inside the
existing editor surface instead of switching to an external tool.

## Acceptance Criteria

- [ ] Support opening a diff view for text files in the web editor.
- [ ] Define the initial comparison sources for v1 (for example: current buffer vs saved file, two workspace files, or file vs git state).
- [ ] Keep the implementation aligned with the pane/extension model used by the editor.
- [ ] Preserve normal editor behavior for non-diff tabs.
- [ ] Define a minimal test plan for loading, rendering, and closing diff views.

## Notes

- Likely relates to the editor pane/extension architecture rather than the workspace preview path.
- Scope should stay narrow for v1; comparison source and UI affordances still need refinement.
- Could eventually support inline and/or side-by-side diff modes, but that should be decided explicitly.

## Updates

### 2026-03-28
- Lane retained: `10-next` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Keep in Next**.
- The ticket remains under-refined for `doing`: the v1 comparison model, UI affordance, and minimal validation path still need to be narrowed before implementation should resume.
- Recommended refinement target for the next pickup: lock v1 to a single comparison source (preferably current buffer vs saved file) and define the minimal open/render/close behavior and test plan.

### 2026-03-22
- Lane change: `10-next` → `20-doing` by user direction.
- Promoted for active implementation/refinement.
- Immediate next step is to narrow the v1 comparison model (for example current buffer vs saved file first) before broadening to git/file-vs-file comparisons.

### 2026-03-13
- Added from request to track an editor diff view.

## Links

- `piclaw/piclaw/web/src/panes/editor-loader.ts`
- `piclaw/piclaw/web/src/panes/editor-pane.ts`
- `piclaw/piclaw/web/src/components/tab-strip.ts`
