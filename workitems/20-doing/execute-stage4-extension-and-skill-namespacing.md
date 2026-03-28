---
id: execute-stage4-extension-and-skill-namespacing
title: Execute Stage 4 broad reorg batch — extension and skill namespacing cleanup
status: doing
priority: high
created: 2026-03-28
updated: 2026-03-28
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

- [ ] Packaged extension categories under `runtime/extensions/` are explicit rather than flat
- [ ] Packaged skill categories under `runtime/skills/` are explicit rather than flat
- [ ] `runtime/src/extensions/` remains conceptually distinct from the packaged filesystem-backed extension tree
- [ ] `.pi/extensions`, `.pi/skills`, and `.pi/agent/extensions` are explicitly preserved or changed only with clear compatibility reasoning
- [ ] Loader/discovery/docs references are updated consistently
- [ ] Validation for the touched surfaces is green

## Test / Validation Plan

- [ ] Search for stale old packaged extension/skill path references after the move
- [ ] Run directly affected extension/skill loading checks
- [ ] Run `bun run lint`
- [ ] Run `bun run typecheck`
- [ ] Run `bun run check:repo-install`
- [ ] Run targeted runtime/install smoke checks if moved packaged paths affect them

## Updates

### 2026-03-28
- Created as the fourth execution batch under `plan-broad-filesystem-reorg-from-audit` after Stages 1–3 established the board rename, generated-output containment, and repo-vs-runtime boundary policy.
- Intended to keep the broad reorg moving while staying bounded to packaged extension/skill namespacing rather than user-facing `.pi` convention churn.
- Detailed inventory + step order live in:
  - `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`

## Links

- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/10-next/namespace-internal-extensions-and-skills-paths.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`
