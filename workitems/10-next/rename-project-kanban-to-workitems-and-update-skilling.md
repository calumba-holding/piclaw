---
id: rename-project-kanban-to-workitems-and-update-skilling
title: Rename project kanban to workitems and update the skill/helpers accordingly
status: next
priority: medium
created: 2026-03-26
updated: 2026-03-26
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - docs
  - skills
  - tooling
owner: pi
---

# Rename project kanban to workitems and update the skill/helpers accordingly

## Summary

Rename the piclaw project-local board from:

- `piclaw/kanban/`

to:

- `piclaw/workitems/`

using `git mv`, and update the surrounding skill/docs/helper surface so the new
name is consistent everywhere it matters.

This should include the project-local board docs, any board-render helpers,
relevant references in Piclaw docs, and the Pi skill/helper naming that still
assumes `kanban` as the canonical term for the work-item system.

## Why

The current project board is structurally more than just a visual kanban board —
it is the canonical store for implementation tickets, reviews, audits, and
project work planning. Renaming it to `workitems/` would better match how it is
actually used.

If we do this rename, it should be done coherently instead of leaving a mix of:

- `kanban/` paths
- `kanban-management` skill naming
- helper/script paths that still imply the old board model

## Scope

### Required rename
- [ ] `git mv piclaw/kanban piclaw/workitems`

### Required follow-up surface audit
- [ ] Update project-local docs that point at `piclaw/kanban/`
- [ ] Update any helper scripts or renderers that assume the project board path is `kanban/`
- [ ] Update skill/helper naming where the project-specific work-item flow should no longer be called `kanban`
- [ ] Decide which `kanban` references remain intentionally visual/editor-specific (for example the `.kanban.md` editor) versus which should become `workitems`

## Key questions to resolve

1. Should the Pi skill be fully renamed from `kanban-management` to something like `workitems-management`, or should the skill keep the old public name but gain project-local path flexibility?
2. Should the board renderer/helper keep `kanban` in the filename/API for backwards compatibility, or should it also be renamed?
3. Which references are truly about the **workflow system** versus the **kanban visual metaphor**?
4. Do we want to rename only the Piclaw project-local board, or also change the global `/workspace/workitems` convention?

## Acceptance Criteria

- [ ] `piclaw/kanban/` is moved with `git mv` to `piclaw/workitems/`
- [ ] Project-local references are updated so there are no stale `piclaw/kanban/` links left in active docs/tickets/helpers unless intentionally kept
- [ ] A clear decision is documented for the Pi skill/helper naming (`kanban-management` vs renamed workitems skill)
- [ ] Helper/render scripts still work against the new path layout
- [ ] Any intentional backward-compatibility aliases or redirect logic are documented
- [ ] The distinction between visual-kanban features and generic work-item management is made explicit

## Implementation Paths

### Path A — rename board path first, keep compatibility shims briefly (recommended)
1. `git mv piclaw/kanban piclaw/workitems`
2. Update project-local references
3. Keep a compatibility layer where necessary for helpers/skills during transition
4. Rename public skill/helper surfaces only where the new name is clearly better and low-risk

**Pros:**
- preserves git history cleanly
- reduces immediate breakage risk
- lets the project path rename land before broader skill/API churn

**Cons:**
- may leave temporary mixed naming for a while

### Path B — full rename sweep in one pass
1. Move board path
2. Rename skill, helpers, scripts, docs, and references together
3. Remove old naming in one shot

**Pros:**
- cleaner final state immediately

**Cons:**
- higher coordination and breakage risk
- harder to review safely

## Recommended Path

Path A — rename the project-local board path first, then do a deliberate review
of the skill/helper naming so visual-kanban semantics are separated from generic
work-item management.

## Test Plan

- [ ] Search for remaining `piclaw/kanban/` references after the move
- [ ] Verify the board renderer/helper still works against the renamed project path
- [ ] Verify any project-local docs/README links resolve cleanly
- [ ] If the skill/helper is renamed, verify the new path and invocation contract is documented and works

## Definition of Done

- [ ] Board path moved to `piclaw/workitems/`
- [ ] Relevant docs/helpers updated
- [ ] Skill/helper naming decision documented and applied where appropriate
- [ ] No accidental breakage of project-local board tooling
- [ ] Update history records the migration and any compatibility choices

## Updates

### 2026-03-26
- Created from request to rename the Piclaw project-local `kanban/` board to `workitems/` and update the related skill/helper surface accordingly.
- Initial scope intentionally includes both the path move and the naming audit so the result does not leave half-renamed board/tooling concepts behind.

## Links

- `workitems/README.md`
- `README.md`
- `/workspace/.pi/skills/kanban-management/SKILL.md`
- `/workspace/.pi/skills/kanban-management/kanban-board-svg.ts`
- `runtime/web/src/panes/kanban-pane.ts`
- `runtime/web/src/vendor/kanban-editor-source.ts`
