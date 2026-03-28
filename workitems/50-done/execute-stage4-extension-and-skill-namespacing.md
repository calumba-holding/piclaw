---
id: execute-stage4-extension-and-skill-namespacing
title: Execute Stage 4 broad reorg batch — extension and skill namespacing cleanup
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
  - extensions
  - skills
  - stage-4
owner: pi
blocked-by:
  - plan-broad-filesystem-reorg-from-audit
---

# Execute Stage 4 broad reorg batch — extension and skill namespacing cleanup

## Summary

Execute Stage 4 of the broad filesystem reorg:

1. make packaged extension categories more explicit
2. make packaged skill categories more explicit
3. keep packaged runtime surfaces distinct from workspace `.pi/...` convention surfaces
4. update loader/discovery/docs references accordingly

## Scope

In scope:

- grouping under `runtime/extensions/`
- grouping under `runtime/skills/`
- path updates in loader/docs/tooling caused by those moves
- explicit classification of `.pi/extensions`, `.pi/skills`, and `.pi/agent/extensions` as compatibility-sensitive convention paths

Out of scope:

- board/workitems path work
- `runtime/generated/` containment work
- `runtime/src/channels/web/` grouping work
- unrelated behavior refactors inside extension/skill implementations
- public `.pi/...` convention renames unless strongly justified by loader/discovery needs

## Execution source of truth

Use:

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`

as the implementation map/steplist for this batch.

## Acceptance Criteria

- [x] Packaged extension categories under `runtime/extensions/` are explicit rather than flat
- [x] Packaged skill categories under `runtime/skills/` are explicit rather than flat
- [x] `runtime/src/extensions/` remains conceptually distinct from the packaged filesystem-backed extension tree
- [x] `.pi/extensions`, `.pi/skills`, and `.pi/agent/extensions` are explicitly preserved or changed only with clear compatibility reasoning
- [x] Loader/discovery/docs references are updated consistently
- [x] Validation for the touched surfaces is green

## Test / Validation Plan

- [x] Search for stale old packaged extension/skill path references after the move
- [x] Run directly affected extension/skill loading checks
- [x] Run `bun run lint`
- [x] Run `bun run typecheck`
- [x] Run `bun run check:repo-install`
- [x] Run targeted runtime/install smoke checks if moved packaged paths affect them

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Created as the fourth execution batch under `plan-broad-filesystem-reorg-from-audit` after Stages 1–3 established the board rename, generated-output containment, and repo-vs-runtime boundary policy.
- Intended to keep the broad reorg moving while staying bounded to packaged extension/skill namespacing rather than user-facing `.pi` convention churn.
- Detailed inventory + step order live in:
  - `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`

### 2026-03-28 — execution notes
- Lane change: `20-doing` → `40-review` after the Stage 4 packaged-runtime namespacing batch landed with validation green.
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the Stage 4 extension/skill namespacing batch is complete.
- Grouped packaged runtime extensions under:
  - `runtime/extensions/browser/`
  - `runtime/extensions/platform/windows/`
  - `runtime/extensions/viewers/`
  - `runtime/extensions/integrations/`
  - `runtime/extensions/experimental/`
- Grouped packaged runtime skills under:
  - `runtime/skills/builtin/`
  - `runtime/skills/operator/`
  - `runtime/skills/integrations/`
- Updated `runtime/src/agent-pool/session.ts` so bundled extension loading follows the grouped packaged-runtime layout.
- Updated build/vendor/test/docs references for moved packaged runtime extension and skill paths.
- Added `runtime/extensions/README.md` and `runtime/skills/README.md` to document the grouped packaged-runtime surfaces and keep them conceptually separate from `runtime/src/extensions/` and public `.pi/...` convention paths.
- Intentionally kept `.pi/extensions/`, `.pi/skills/`, and `.pi/agent/extensions/` stable as compatibility-sensitive convention paths.
- Validation completed in the required order:
  - stale-path search for old packaged extension/skill paths returned no matches
  - focused extension/skill loading tests:
    - `runtime/test/extensions/optional-bundled-extensions.test.ts`
    - `runtime/test/scripts/token-chart.test.ts`
    - `runtime/test/scripts/token-chart-provider-model.test.ts`
    - `runtime/test/scripts/token-chart-ipc.test.ts`
    - `runtime/test/scripts/codemirror-vendor.test.ts`
  - `cd runtime && bun run scripts/vendor-office-viewer.ts`
  - `cd runtime && bun run scripts/vendor-drawio.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:import-boundaries`
  - `bun run check:pack-hygiene`
  - `bun run check:repo-install`

## Links

- `workitems/50-done/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/50-done/namespace-internal-extensions-and-skills-paths.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`
