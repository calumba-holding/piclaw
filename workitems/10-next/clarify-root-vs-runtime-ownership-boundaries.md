---
id: clarify-root-vs-runtime-ownership-boundaries
title: Clarify repo-root vs runtime ownership boundaries for docs, scripts, and artifacts
status: next
priority: medium
created: 2026-03-28
updated: 2026-03-28
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - audit-followup
  - repo-layout
  - docs
  - scripts
  - artifacts
owner: pi
blocked-by: []
---

# Clarify repo-root vs runtime ownership boundaries for docs, scripts, and artifacts

## Summary

Document and tighten the ownership boundary between repo-root and `runtime/`
for the three most confusing paired domains:

- `docs/` vs `runtime/docs/`
- `scripts/` vs `runtime/scripts/`
- `artifacts/` vs `runtime/artifacts/`

This is a clarification/policy slice first, not a broad relocation sweep.

## Why

The filesystem audit found that contributors cannot quickly tell which of the
paired root/runtime locations should receive new content. That ambiguity invites
layout drift and inconsistent packaging semantics.

## Scope

- define the intended ownership rule for each paired domain
- update the most relevant docs/README references to state that rule clearly
- identify any tiny follow-up moves that are obvious and safe
- do **not** do a broad tree move in this ticket

## Non-goals

- no mass file relocation
- no packaging behavior changes unless trivial and explicitly justified
- no rename of `kanban/`

## Acceptance Criteria

- [ ] A short, durable ownership policy exists for root vs `runtime/`
- [ ] `docs/`, `scripts/`, and `artifacts/` each have a clear placement rule
- [ ] The README or other maintainer-facing docs point to the rule
- [ ] Any recommended future moves are split into separate bounded tickets

## Links

- `docs/filesystem-layout-audit-2026-03-28.md`
- `README.md`
- `docs/`
- `runtime/docs/`
- `scripts/`
- `runtime/scripts/`
- `artifacts/`
- `runtime/artifacts/`
