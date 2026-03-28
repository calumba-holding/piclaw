---
id: rationalize-runtime-generated-output-layout
title: Rationalize generated and transient output layout under runtime
status: next
priority: medium
created: 2026-03-28
updated: 2026-03-28
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

- [ ] Current generated/transient runtime directories are inventoried with owners/producers
- [ ] A containment/placement policy is documented
- [ ] Low-risk cleanup opportunities are separated from expensive moves
- [ ] Any move/rename work is split into explicit bounded follow-up tickets

## Links

- `docs/filesystem-layout-audit-2026-03-28.md`
- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/reports/`
- `runtime/tmp/`
- `runtime/node_modules/`
