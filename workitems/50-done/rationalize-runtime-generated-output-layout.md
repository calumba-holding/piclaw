---
id: rationalize-runtime-generated-output-layout
title: Rationalize generated and transient output layout under runtime
status: done
priority: medium
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - audit-followup
  - repo-layout
  - build
  - generated-files
owner: pi
blocked-by: []
---

# Rationalize generated and transient output layout under runtime

## Summary

Audit and tighten the placement rules for generated/transient directories under
`runtime/`, especially:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/reports/`
- `runtime/tmp/`
- `runtime/node_modules/`

The goal is to reduce noise around maintained implementation directories without
breaking build/test/runtime flows.

## Why

The filesystem audit found that generated output is interleaved with maintained
runtime subtrees, which makes `runtime/` harder to navigate and obscures the
boundary between human-maintained code and disposable output.

## Scope

- document the current generated/transient directories and their producers
- decide which ones should remain in place, move later, or simply be better documented
- identify low-risk containment or naming improvements
- avoid bundling this with unrelated source-tree refactors

## Non-goals

- no broad build-system rewrite
- no relocation of generated directories without validation and justification
- no mixing this ticket with source-module grouping work

## Acceptance Criteria

- [x] Current generated/transient runtime directories are inventoried with owners/producers
- [x] A containment/placement policy is documented
- [x] Low-risk cleanup opportunities are separated from expensive moves
- [x] Any move/rename work is split into explicit bounded follow-up tickets

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- This pass records review acceptance that the ticket is satisfied by the Stage 2 generated-output containment work already linked from the ticket.

### 2026-03-28
- Covered by the Stage 2 generated-output containment batch.
- Inventory and placement policy were captured in:
  - `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
  - `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- The landed containment work is tracked in:
  - `workitems/50-done/execute-stage2-runtime-generated-containment.md`

## Links

- `docs/filesystem-layout-audit-2026-03-28.md`
- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/reports/`
- `runtime/tmp/`
- `runtime/node_modules/`
