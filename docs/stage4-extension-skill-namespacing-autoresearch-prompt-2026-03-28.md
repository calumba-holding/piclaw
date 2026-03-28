# Autoresearch prompt — Stage 4 extension and skill namespacing cleanup

Use this as the execution brief for an autoresearch run working Stage 4 of the
broad filesystem reorg.

## Prompt

Work the Stage 4 extension/skill namespacing batch from:

- `workitems/40-review/execute-stage4-extension-and-skill-namespacing.md`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`

Your objective is to land a reviewable Stage 4 cleanup that:

1. makes packaged filesystem-backed extension categories under `runtime/extensions/` explicit rather than flat
2. makes packaged filesystem-backed skill categories under `runtime/skills/` explicit rather than flat
3. preserves the conceptual distinction between `runtime/src/extensions/` built-in code factories and the filesystem-backed packaged extension tree
4. keeps `.pi/extensions`, `.pi/skills`, and `.pi/agent/extensions` stable unless loader/discovery evidence proves a rename is necessary
5. updates loader, packaging, and docs references consistently

## Scope guardrails

In scope:

- grouping packaged runtime extensions
- grouping packaged runtime skills
- path updates caused by those moves
- documentation clarifying how packaged runtime surfaces differ from `.pi/...` convention surfaces

Out of scope:

- board/workitems rename work
- `runtime/generated/` containment work
- `runtime/src/channels/web/` grouping cleanup
- unrelated behavior refactors inside extensions or skills
- casual renaming of public `.pi/...` convention paths

## Constraints

- use `/workspace/piclaw` as the canonical repo
- work from a clean branch based on `origin/main`
- keep `runtime/src/extensions/` conceptually separate from `runtime/extensions/`
- do not widen into feature work inside the moved extensions/skills
- prefer packaged-runtime path cleanup first; treat `.pi/...` paths as compatibility-sensitive

## Required validation order

1. search for stale packaged extension/skill path references
2. run directly affected extension/skill loading checks
3. run `bun run lint`
4. run `bun run typecheck`
5. run `bun run check:repo-install`
6. run any targeted runtime/install smoke checks affected by moved packaged paths

## Expected outputs

- packaged extension categories are explicit
- packaged skill categories are explicit
- loader/discovery/docs references are updated consistently
- `.pi/...` convention paths are either preserved or changed only with clear compatibility reasoning
- Stage 4 ticket records migration notes and validation evidence

## Stop conditions

Stop and report rather than widening scope if:

- the batch starts to require public `.pi/...` convention renames
- extension/skill implementation behavior refactors start creeping in
- `runtime/src/extensions/` and `runtime/extensions/` roles start getting conflated
- validation failures suggest Stage 4 should be split into smaller batches
