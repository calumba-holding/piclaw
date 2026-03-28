---
id: clarify-root-vs-runtime-ownership-boundaries
title: Clarify repo-root vs runtime ownership boundaries for docs, scripts, and artifacts
status: done
priority: medium
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
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

- [x] A short, durable ownership policy exists for root vs `runtime/`
- [x] `docs/`, `scripts/`, and `artifacts/` each have a clear placement rule
- [x] The README or other maintainer-facing docs point to the rule
- [x] Any recommended future moves are split into separate bounded tickets

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Added `docs/repo-runtime-boundaries-2026-03-28.md` as the durable maintainer-facing boundary policy.
- Updated `README.md` and `docs/install-from-repo.md` to point at the policy and reflect the post-Stage-2 `runtime/generated/` boundary.
- Added directory-local guidance files for the paired domains:
  - `scripts/README.md`
  - `runtime/docs/README.md`
  - `runtime/scripts/README.md`
  - `artifacts/README.md`
- Kept this batch bounded to policy/documentation clarification rather than another relocation sweep.
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the boundary policy and maintainer-facing guidance updates are complete.

## Links

- `docs/filesystem-layout-audit-2026-03-28.md`
- `README.md`
- `docs/`
- `runtime/docs/`
- `scripts/`
- `runtime/scripts/`
- `artifacts/`
- `runtime/artifacts/`
