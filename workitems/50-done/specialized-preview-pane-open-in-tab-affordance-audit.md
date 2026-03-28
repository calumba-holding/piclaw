---
id: specialized-preview-pane-open-in-tab-affordance-audit
title: Audit and normalize open-in-tab affordances across specialized preview panes
status: done
priority: medium
created: 2026-03-16
updated: 2026-03-17
completed: 2026-03-17
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - preview
  - viewer
  - editor
owner: pi
---

# Audit and normalize open-in-tab affordances across specialized preview panes

## Summary

Several specialized preview/viewer panes now expose their own explicit actions
for opening content in a fuller tab/viewer context.

This ticket is the sibling follow-up to the generic workspace preview button
work: instead of changing the main workspace preview surface, it focuses on
whether the specialized viewer panes present a consistent and intentional
"open in tab" / "open elsewhere" affordance model.

## Why

The generic workspace preview pane should stay narrowly focused on the simple
"promote this preview into an editor tab" affordance.

Separately, specialized panes such as draw.io, office, CSV, PDF, and image
viewers may already have related actions, but the UX contract may now be
fragmented across labels, placement, behavior, and target destination.

## Acceptance Criteria

- [x] Inventory the existing explicit open/promote actions across specialized preview/viewer panes.
- [x] Decide which panes should offer:
  - open in editor tab
  - open in viewer tab
  - open in new browser tab
  - or no additional action at all
- [x] Normalize labels/iconography/placement where appropriate.
- [x] Ensure the intended target behavior is consistent with existing tab/open routing.
- [x] Create narrower implementation follow-ups if the audit finds real UX mismatches.

## Relevant Areas

- `piclaw/piclaw/web/src/panes/drawio-pane.ts`
- `piclaw/piclaw/web/src/panes/office-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/csv-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/pdf-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/image-viewer-pane.ts`
- `piclaw/piclaw/web/src/panes/workspace-preview-pane.ts`
- `piclaw/piclaw/web/src/components/tab-strip.ts`

## Updates

### 2026-03-17 (implementation)
- Lane change: `00-inbox` → `50-done`.
- Audited current specialized preview panes and normalized the intended promotion model:
  - **draw.io** → `Edit in Tab`
  - **Office / CSV / PDF / Image** → `Open in Tab`
  - **generic workspace preview** → keep the explorer-header editor action rather than duplicating pane-body CTA chrome
- Found one real mismatch: `csv-viewer` did not expose the same explicit preview-card promotion affordance as the other specialized preview panes.
- Fixed that mismatch by adding a CSV/TSV preview card with an `Open in Tab` action and wiring its event through the existing app-level open-tab listener.
- Documented the normalized affordance contract in `docs/web-pane-extensions.md`.
- No narrower follow-up ticket was needed after the CSV mismatch was fixed.
- Validation:
  - `piclaw/web/src/panes/csv-viewer-pane.ts`
  - `piclaw/web/src/app.ts`
  - `piclaw/test/web/csv-viewer-pane.test.ts`
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

## Notes

- This is intentionally separate from the generic workspace preview button ticket.
- Prefer to reuse existing open/focus behavior rather than invent new routes.

## Links

- `workitems/00-inbox/workspace-preview-pop-into-editor-tab-button.md`
