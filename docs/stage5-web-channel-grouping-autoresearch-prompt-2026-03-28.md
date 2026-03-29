# Autoresearch prompt — Stage 5 web-channel source-tree grouping cleanup

Use this as the execution brief for an autoresearch run working Stage 5 of the
broad filesystem reorg.

## Prompt

Work the Stage 5 web-channel grouping batch from:

- `workitems/50-done/execute-stage5-web-channel-grouping.md`
- `workitems/40-review/group-web-channel-flat-files.md`
- `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
- `docs/stage5-web-channel-grouping-steplist-2026-03-28.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`

Your objective is to land a reviewable Stage 5 cleanup that:

1. materially reduces the flat root under `runtime/src/channels/web/`
2. moves the clearest semantic clusters first (`auth`, `sse`, `cards`, `media`, `theming`, `messaging`)
3. keeps already-grouped subtrees (`http`, `handlers`, `workspace`, `terminal`, `vnc`, `remote-display`) structurally intact unless a specific move is necessary
4. updates imports, tests, and docs consistently
5. avoids behavior refactors beyond what path rewrites strictly require

## Scope guardrails

In scope:

- file moves under `runtime/src/channels/web/`
- import rewrites caused by those moves
- matching test-path updates
- docs/workitem path updates where needed

Out of scope:

- broad WebChannel behavior refactors
- `runtime/generated/` work
- extension/skill namespacing work
- board/workitems path work
- opportunistic logic rewrites inside moved services

## Constraints

- use `/workspace/piclaw` as the canonical repo
- work from a clean branch based on `origin/main`
- prefer the obvious grouping tranche first
- stop and report if the remaining flat files require a second batch rather than forcing the whole root into one pass

## Required validation order

1. search for stale old web-channel paths/imports
2. run directly affected focused tests
3. run `bun run lint`
4. run `bun run typecheck`
5. run any import-boundary checks affected by the move

## Expected outputs

- obvious `web/` capability slices get dedicated subdirectories
- imports/tests/docs are updated consistently
- the flat root is materially smaller
- Stage 5 ticket records what moved and what intentionally remained

## Stop conditions

Stop and report rather than widening scope if:

- grouping starts to require behavior refactors rather than path rewrites
- the remaining root files are too ambiguous for the same batch
- validation failures indicate the work should be split into smaller child tranches
