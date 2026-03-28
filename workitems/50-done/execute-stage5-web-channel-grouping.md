---
id: execute-stage5-web-channel-grouping
title: Execute Stage 5 broad reorg batch — web-channel source-tree grouping cleanup
status: done
priority: high
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
target_release: next
estimate: L
risk: high
tags:
  - work-item
  - kanban
  - refactor
  - repo-layout
  - channels
  - web
  - stage-5
owner: pi
blocked-by:
  - plan-broad-filesystem-reorg-from-audit
---

# Execute Stage 5 broad reorg batch — web-channel source-tree grouping cleanup

## Summary

Execute Stage 5 of the broad filesystem reorg:

1. reduce the flat-root sprawl under `runtime/src/channels/web/`
2. move the clearest semantic clusters first
3. update imports/tests/docs consistently
4. avoid logic churn while regrouping files

## Scope

In scope:

- grouping flat files under `runtime/src/channels/web/`
- import rewrites caused by those moves
- test/doc updates caused by those moves

Out of scope:

- broad WebChannel behavior refactors
- `runtime/generated/` containment work
- extension/skill namespacing work
- board/workitems path work
- opportunistic logic rewrites inside moved services

## Execution source of truth

Use:

- `workitems/10-next/group-web-channel-flat-files.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
- `docs/stage5-web-channel-grouping-steplist-2026-03-28.md`
- `docs/stage5-web-channel-grouping-autoresearch-prompt-2026-03-28.md`

as the implementation map/steplist for this batch.

## Acceptance Criteria

- [x] The flat root under `runtime/src/channels/web/` is materially smaller
- [x] The clearest capability slices have dedicated directories
- [x] Imports/tests/docs are updated consistently
- [x] Validation for the touched surfaces is green
- [x] Remaining root files are a deliberate remainder rather than accidental sprawl

## Test / Validation Plan

- [x] Search for stale old web-channel paths/imports after the move
- [x] Run directly affected focused tests
- [x] Run `bun run lint`
- [x] Run `bun run typecheck`
- [x] Run affected import-boundary checks if needed

## Updates

### 2026-03-28
- Lane change: `20-doing` → `50-done` via web doing-card decision.
- Doing-lane outcome recorded from the adaptive-card submission: **Close to Done**.
- The ticket body already stated Stage 5 satisfied its original target and was review-ready; this decision closes it out.

### 2026-03-28
- Created as the fifth execution batch under `plan-broad-filesystem-reorg-from-audit` after Stages 1–4 established top-level naming, generated-output containment, repo-vs-runtime boundaries, and packaged extension/skill namespacing.
- Intended to keep the broad reorg moving while staying bounded to source-tree grouping inside `runtime/src/channels/web/`.
- Detailed inventory + step order live in:
  - `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
  - `docs/stage5-web-channel-grouping-steplist-2026-03-28.md`
  - `docs/stage5-web-channel-grouping-autoresearch-prompt-2026-03-28.md`
- First manual tranche landed the clearest capability directories:
  - `runtime/src/channels/web/auth/`
  - `runtime/src/channels/web/sse/`
  - `runtime/src/channels/web/cards/`
  - `runtime/src/channels/web/media/`
  - `runtime/src/channels/web/theming/`
  - `runtime/src/channels/web/messaging/`
- The flat root under `runtime/src/channels/web/` dropped from 73 files to 47 files.
- Matching direct module tests were regrouped under `runtime/test/channels/web/` where straightforward.
- Validation run for the tranche:
  - focused web/IPC tests
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:import-boundaries`
- Stage 5 is meaningfully advanced, and a second tranche remained available for the more obvious leftover auth/agent/theming support files.

### 2026-03-28 — second manual tranche
- Landed a follow-on grouping pass for additional clear support files:
  - expanded `runtime/src/channels/web/auth/` with session/auth helper files
  - added `runtime/src/channels/web/agent/` for agent status/control-plane/binder helpers
  - moved fallback `theme.ts` under `runtime/src/channels/web/theming/`
- Regrouped the matching direct module tests under `runtime/test/channels/web/auth/` and `runtime/test/channels/web/agent/` where straightforward.
- The flat root under `runtime/src/channels/web/` dropped again, from 47 files to 32 files.
- Validation run for the tranche:
  - focused auth/agent/web tests plus `test/agent-control/passkey-totp-handler.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:import-boundaries`
- Stage 5 remained in progress because the original ticket target (15 or fewer files at the web root) still needed one more tranche.

### 2026-03-28 — third manual tranche
- Landed a final broad cleanup pass for the next coherent seams:
  - grouped endpoint/context helpers under `runtime/src/channels/web/endpoints/`
  - grouped runtime/follow-up/state helpers under `runtime/src/channels/web/runtime/`
  - grouped WebChannel constructor/contracts/surface services under `runtime/src/channels/web/core/`
- Regrouped the matching direct module tests under:
  - `runtime/test/channels/web/endpoints/`
  - `runtime/test/channels/web/runtime/`
  - `runtime/test/channels/web/core/`
- The flat root under `runtime/src/channels/web/` dropped again, from 32 files to 12 files.
- Validation run for the tranche:
  - focused endpoint/runtime/core/web tests
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:import-boundaries`
- Stage 5 now satisfies the original flat-root acceptance target and is ready for review.
- Card submission accepted with decision `done` even though the recommendation remained `review`.
- Lane change: `40-review`/review-ready state → `50-done` by explicit board decision.

## Links

- `workitems/50-done/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/10-next/group-web-channel-flat-files.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
- `docs/stage5-web-channel-grouping-steplist-2026-03-28.md`
- `docs/stage5-web-channel-grouping-autoresearch-prompt-2026-03-28.md`
