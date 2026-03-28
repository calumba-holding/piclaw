# Autoresearch prompt — Stage 2 runtime generated-output containment

Use this as the execution brief for an autoresearch run working Stage 2 of the
broad filesystem reorg.

## Prompt

Work the Stage 2 runtime generated-output containment batch from:

- `workitems/20-doing/execute-stage2-runtime-generated-containment.md`
- `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
- `docs/stage2-runtime-generated-containment-steplist-2026-03-28.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`

Your objective is to land a broad but still reviewable Stage 2 cleanup that:

1. introduces a clear `runtime/generated/` containment boundary
2. moves clearly transient runtime output under it (`runtime/dist/`, `runtime/.cache/`, `runtime/coverage/`, `runtime/tmp/`) where safe
3. explicitly classifies `runtime/reports/` and `runtime/artifacts/` as either durable repo evidence or transient runtime-generated output before moving them
4. updates path-sensitive docs, scripts, packaging references, and validation helpers accordingly
5. leaves `runtime/node_modules/` alone unless strong evidence and validation prove that changing it is safe

## Scope guardrails

In scope:

- creation of `runtime/generated/`
- transient runtime output containment
- path updates caused by those moves
- explicit classification of `runtime/reports/` and `runtime/artifacts/`

Out of scope:

- workitems/board rename work
- extension/skill namespacing cleanup
- `runtime/src/channels/web/` grouping cleanup
- broad build-system rewrites
- relocating `runtime/node_modules/` without compelling validated justification

## Constraints

- use `/workspace/piclaw` as the canonical repo
- work from a clean branch based on `origin/main`
- preserve behavior and avoid unrelated changes
- prefer a staged, reviewable move set over a one-shot sweep
- do not move ambiguous directories until their durable-vs-transient role is explicit

## Required validation order

1. search for stale old output-path references
2. run directly affected build/report/helper commands
3. run `bun run lint`
4. run `bun run typecheck`
5. run `bun run check:stale-dist`
6. run packaging/install checks if touched paths affect them

## Expected outputs

- `runtime/generated/` exists
- clearly transient runtime output is moved or aliased consistently
- docs/scripts/tooling references are updated
- ambiguous directories are explicitly classified and either moved or intentionally deferred
- Stage 2 ticket records migration notes and validation evidence

## Stop conditions

Stop and report rather than widening scope if:

- the batch starts to require board/workitems rename follow-up work
- extension/skill namespacing starts creeping into the change
- `runtime/node_modules/` relocation becomes necessary for success
- validation failures indicate Stage 2 should be split into smaller batches before landing
