---
id: audit-project-filesystem-layout
title: Audit project filesystem layout and propose cleanup slices
status: review
priority: medium
created: 2026-03-28
updated: 2026-03-28
target_release: next
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - audit
  - repo-layout
  - filesystem
  - quality
owner: pi
blocked-by: []
---

# Audit project filesystem layout and propose cleanup slices

## Summary

Audit the Piclaw project filesystem/repository layout and identify where the
current directory structure helps or hurts maintainability, discoverability,
packaging, runtime clarity, and contributor workflow.

This is an **audit and restructuring-plan** ticket first, not an open-ended
rename/move-everything refactor. The expected output is a concrete map of
layout problems, decisions about what should stay as-is, and a small set of
follow-up cleanup tickets or slices where change is actually justified.

## Why

Piclaw has accumulated multiple top-level and cross-cutting concerns, including:

- runtime/server code
- web client code
- kanban/work item tracking
- docs and audit artifacts
- scripts and packaging checks
- skills/skel/vendor/runtime-adjacent assets
- temporary or transitional seams left behind by refactors

As the codebase grows, repository layout becomes part of product quality:

- contributors need to know where code belongs,
- runtime-vs-build-vs-doc boundaries need to stay legible,
- packaging/install paths need to remain understandable,
- and large refactors should not quietly leave the tree harder to reason about.

## Objective

Produce an evidence-backed filesystem-layout audit that:

1. explains the current shape,
2. identifies the highest-friction layout problems,
3. distinguishes "actually bad layout" from "unfamiliar but acceptable",
4. and proposes a bounded sequence of follow-up cleanup tickets where useful.

## Scope

Review at minimum:

- top-level repo directories
- `runtime/src/`, `runtime/web/`, `runtime/test/`, and related adjacency
- `docs/`, `scripts/`, `artifacts/`, and audit-output placement
- `kanban/` / future `workitems/` implications where relevant
- vendored/runtime-adjacent directories and whether their placement is still sensible
- any directory pairings that repeatedly confuse ownership or dependency direction

## Non-goals

- Do **not** perform a broad filesystem move/rename sweep in this ticket.
- Do **not** rewrite imports or regroup large areas as part of the audit itself unless an extremely small corrective fix is required.
- Do **not** reopen already-settled structure decisions unless there is clear repo evidence they are still hurting the project.

## Acceptance Criteria

- [x] Current repo/file-system layout is summarized in a way that a maintainer can follow quickly.
- [x] High-friction layout problems are listed with concrete examples.
- [x] Acceptable/currently-okay layout decisions are explicitly called out to avoid churn.
- [x] Recommended follow-up actions are grouped into small, reviewable slices.
- [x] Any large/expensive relocation ideas are separated from low-risk cleanup opportunities.
- [x] Results are recorded in a durable artifact (ticket update, note, or doc) with file-path evidence.

## Implementation Paths

### Path A — audit first, split follow-up tickets second (recommended)
1. Inventory the current tree and major ownership boundaries.
2. Identify the biggest layout pain points and recurring confusion zones.
3. Decide which ones are worth fixing versus documenting.
4. Create focused follow-up tickets for justified cleanup slices.

**Pros:**
- low-risk
- avoids churn-for-churn's-sake
- produces a usable restructuring roadmap

**Cons:**
- does not improve the tree immediately unless follow-ups are executed

### Path B — audit plus opportunistic cleanup in one pass
1. Audit the layout.
2. Apply some small moves/renames immediately.
3. Document the rest as follow-ups.

**Pros:**
- faster visible movement

**Cons:**
- higher chance of mixing diagnosis with unreviewed repo churn
- easier to over-bundle structural changes

## Recommended Path

Path A — complete the audit first, then split only the justified cleanup work
into bounded follow-up tickets.

## Test / Validation Plan

- [x] Capture a tree/inventory snapshot of the current repo layout.
- [x] Cross-check major layout claims against actual paths in the repo.
- [x] Record before/after notes or a dedicated audit artifact with path examples.
- [x] If any tiny corrective change is made during the audit, run the minimum affected validation and record it. *(No code/runtime changes were made in this audit slice beyond docs/ticket artifacts.)*

## Definition of Done

- [x] Audit findings are recorded with concrete filesystem/path evidence.
- [x] Recommended follow-up layout work is broken into explicit tickets where needed.
- [x] The ticket clearly distinguishes immediate issues from acceptable current structure.
- [x] The board has a clearer path for future repo-layout cleanup without bundling it into unrelated refactors.

## Updates

### 2026-03-28
- Created from request to audit the project filesystem layout and started directly in `20-doing`.
- Intentionally framed as an audit/planning ticket first so repo-structure cleanup can be driven by evidence rather than by generic “reorganize files” churn.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)
- Lane change: `20-doing` → `40-review` after completing the audit artifact and follow-up split.
- Recorded the audit findings in `docs/filesystem-layout-audit-2026-03-28.md`, including:
  - a top-level inventory snapshot
  - runtime subtree boundary notes
  - high-friction layout problems with path examples
  - acceptable current decisions to keep
  - low-risk vs high-cost follow-up actions
- Main findings:
  - the repo-root vs `runtime/` ownership boundary is valid but under-documented
  - paired domains like `docs/` vs `runtime/docs/`, `scripts/` vs `runtime/scripts/`, and `artifacts/` vs `runtime/artifacts/` are the highest-friction confusion point
  - generated/transient runtime output (`runtime/dist/`, `runtime/.cache/`, `runtime/coverage/`, `runtime/reports/`, `runtime/tmp/`, `runtime/node_modules/`) is interleaved with maintained implementation directories and should get a clearer containment policy
  - existing tickets already cover two known structural follow-ons and should be reused rather than duplicated:
    - `kanban/10-next/group-web-channel-flat-files.md`
    - `kanban/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- Split two new bounded follow-up tickets from the audit:
  - `kanban/10-next/clarify-root-vs-runtime-ownership-boundaries.md`
  - `kanban/10-next/rationalize-runtime-generated-output-layout.md`
- Validation/evidence capture for the audit used repo tree/path inspection only; no runtime code changes were made in this slice.
- Final outcome of this audit slice:
  - audit completed and recorded in `docs/filesystem-layout-audit-2026-03-28.md`
  - two existing downstream structure tickets explicitly reused:
    - `kanban/10-next/group-web-channel-flat-files.md`
    - `kanban/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
  - two new bounded follow-up tickets created:
    - `kanban/10-next/clarify-root-vs-runtime-ownership-boundaries.md`
    - `kanban/10-next/rationalize-runtime-generated-output-layout.md`
  - broad move/rename churn was initially deferred in the audit write-up, but that recommendation is now superseded by direct project guidance to pursue a broader reorg rather than only bounded cleanup slices

## Links

- `kanban/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `docs/filesystem-layout-audit-2026-03-28.md`
- `kanban/10-next/clarify-root-vs-runtime-ownership-boundaries.md`
- `kanban/10-next/rationalize-runtime-generated-output-layout.md`
- `kanban/10-next/group-web-channel-flat-files.md`
- `kanban/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- `README.md`
- `docs/quality-assessment-2026-03-23.md`
- `runtime/src/`
- `runtime/web/`
- `runtime/test/`
- `scripts/`
- `docs/`
- `artifacts/`
- `kanban/`
