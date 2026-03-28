---
id: workspace-preview-pop-into-editor-tab-button
title: Add an "Open in editor tab" button to the workspace preview pane
status: done
priority: medium
created: 2026-03-15
updated: 2026-03-18
completed: 2026-03-18
target_release: v1.5.5
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - workspace
  - preview
  - editor
owner: pi
---

# Add an "Open in editor tab" button to the workspace preview pane

## Summary

The workspace preview pane should expose an explicit button that "pops" the
currently previewed file into a normal editor tab.

This should make the transition from lightweight preview to full editing more
obvious and lower-friction, especially when the user is already reading a file
inside the workspace preview surface and decides they want proper editor tools
instead.

## Acceptance Criteria

- [ ] The workspace preview pane shows a dedicated button for opening the current preview target in an editor tab.
- [ ] The button is shown only when the current preview target can be opened by the editor flow.
- [ ] Clicking the button opens the file in the editor tab area using existing tab/open behavior.
- [ ] Reopening a file that is already open reuses/focuses the existing editor tab rather than duplicating it.
- [ ] Unsupported or non-editable preview targets fail safely without breaking the preview pane.
- [ ] The button fits the current workspace preview/editor UI styling and does not conflict with existing preview actions.

## Implementation Paths

### Path A — reuse existing editor-open path from the preview pane (recommended)
- Add a preview-pane-local action button near the existing preview controls.
- Route the click through the same shared file-open/editor resolution path already used by file pills and other editor-opening affordances.
- Gate visibility on whether the current preview target resolves to an editable/openable file.

Why this is preferred:
- keeps the behavior consistent with the existing editor tab system
- minimizes new state or bespoke routing logic
- reduces the chance of duplicate tab or visibility regressions

### Path B — preview pane emits a separate "promote to editor" event
- Add a new app-level callback/event specifically for preview-to-editor promotion.
- Let the app shell decide whether to open/focus the editor and target tab.

Why this may be useful later:
- could support richer preview/editor transitions in future
- keeps the preview pane thinner if more actions accumulate

Why it is not preferred for v1:
- introduces a new pathway where an existing one likely already fits
- increases surface area for a small UX affordance

## Test Plan

- [ ] Add focused web tests for preview targets that can and cannot be popped into an editor tab.
- [ ] Validate that repeated clicks reuse/focus the existing tab rather than creating duplicates.
- [ ] Validate the button is absent or disabled for unsupported preview targets.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Preview pane exposes the new button in the intended location.
- [ ] Existing editor-open path is reused or clearly documented if a new path is introduced.
- [ ] No duplicate-tab regression is introduced.
- [ ] Regression coverage exists for the button visibility and open behavior.
- [ ] UI styling matches the current workspace preview/editor affordances.
- [ ] Update history captures implementation and validation evidence.

## Updates

### 2026-03-18
- Lane change: `30-blocked` → `50-done` as a deliberate closure-by-supersession rather than by implementing a preview-pane-local CTA.
- The current workspace/editor UX already covers the underlying need through the explorer-header/menu `Open in editor` affordance and existing editor-tab reuse behaviour; the separate audit ticket for specialized preview panes explicitly chose to keep the generic workspace preview surface free of duplicate pane-body promotion chrome.
- In other words: the issue is closed, but the chosen resolution is **not** “add another button to the preview pane” — it is “keep one editor-opening path and avoid duplicating affordances in the generic preview body”.
- Evidence:
  - `piclaw/piclaw/web/src/components/workspace-explorer.ts`
  - `piclaw/piclaw/web/src/panes/workspace-preview-pane.ts`
  - `piclaw/piclaw/test/web/workspace-preview-pane.test.ts`
  - `workitems/50-done/specialized-preview-pane-open-in-tab-affordance-audit.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-17
- Lane change: `inbox` → `blocked` via triage submission (`action: triage_radio_apply`, `workspace_preview_pop_into_editor_tab_button_decision_2: defer`).
- Deferred to avoid expanding preview affordance work while core queue/reload recovery and attachment fixes are stabilized.
- Quality: ★★★☆☆ 5/10 (problem: 1, scope: 1, test: 1, deps: 0, risk: 2)

### 2026-03-16
- Refinement triage kept this ticket focused on the generic workspace preview surface itself.
- Split a sibling follow-up to cover consistency/audit work for specialized preview and viewer panes so this ticket can stay narrowly about the main workspace preview affordance.

### 2026-03-15
- Created from user request to add an explicit "pop into editor tab" button to the workspace preview pane.
- Kept in `00-inbox` pending refinement of exact button placement and whether preview-only targets should expose the action.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 0)

## Notes

- This should feel like a direct continuation of the existing workspace preview flow, not a separate mode switch.
- Likely related to the existing file-pill-to-editor-tab behavior, so shared open logic is preferable.
- Button naming could be one of:
  - `Open in editor`
  - `Edit in tab`
  - icon-only with tooltip, if the preview action strip already has enough context
- A future refinement question is whether clicking the preview body itself should ever promote to editor, but that is out of scope for this ticket.

## Links

- `piclaw/web/src/panes/workspace-preview-pane.ts`
- `piclaw/web/src/panes/editor-pane.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/ui/file-pill-open.ts`
- `piclaw/workitems/50-done/file-pill-editor-tab.md`
