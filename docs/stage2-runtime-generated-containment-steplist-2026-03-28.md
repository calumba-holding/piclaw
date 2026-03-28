# Stage 2 execution steplist — runtime generated-output containment

## Purpose

Provide an execution-ready steplist for Stage 2 of the broad filesystem reorg.

## Stage 2 goal

Contain generated/transient runtime output more clearly under a dedicated
boundary, without mixing in unrelated refactors.

## Stage 2 target

Primary target:

- introduce `runtime/generated/`

Likely move targets in this batch:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/tmp/`

Decision-required targets:

- `runtime/reports/`
- `runtime/artifacts/`

Out-of-scope target for this batch unless proven safe:

- `runtime/node_modules/`

## Preconditions

- repo is on `main`
- working tree is clean
- `origin/main` is aligned
- Stage 1 board rename is already landed
- source-of-truth docs exist:
  - `docs/broad-filesystem-reorg-map-2026-03-28.md`
  - `docs/stage2-runtime-generated-layout-inventory-2026-03-28.md`
  - `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`

## Step-by-step execution plan

### Step 1 — classify each current directory before moving

For each of:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/reports/`
- `runtime/tmp/`
- `runtime/artifacts/`
- `runtime/node_modules/`

record whether it is:

- transient/generated
- durable generated evidence
- maintained operator scratch
- toolchain exception

Do not move ambiguous directories before classifying them.

### Step 2 — define the concrete containment rule

Adopt a clear rule set such as:

- `runtime/generated/dist/` — build output
- `runtime/generated/cache/` — cache output
- `runtime/generated/coverage/` — test coverage output
- `runtime/generated/tmp/` — disposable temp/debug output
- `runtime/generated/reports/` — runtime-generated reports (if classified transient)

If `runtime/reports/` or `runtime/artifacts/` are deemed durable repo evidence,
move them elsewhere deliberately rather than forcing them under
`runtime/generated/`.

### Step 3 — perform only the clearly justified moves first

Preferred initial move set:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/tmp/`

Only move `runtime/reports/` / `runtime/artifacts/` in the same batch if the
policy decision is clear and path updates are manageable.

### Step 4 — update path-sensitive tooling and docs

Audit and update at least:

- root `package.json` scripts
- `Makefile`
- runtime helper scripts
- report-producing scripts
- docs that name old runtime output paths
- any test or validation helper assuming current output locations

### Step 5 — leave `runtime/node_modules/` alone unless the batch proves otherwise

Treat `runtime/node_modules/` as a deliberate exception unless there is strong,
validated evidence that changing it is safe.

### Step 6 — validate aggressively

Minimum validation ladder:

1. grep for stale old output paths
2. run the most directly affected scripts/builds
3. run `bun run lint`
4. run `bun run typecheck`
5. run `bun run check:stale-dist`
6. run any packaging/install checks affected by moved output paths

### Step 7 — record decisions and leftovers

Capture in the ticket:

- what moved
- what was intentionally left in place
- whether `runtime/reports/` and `runtime/artifacts/` were classified as durable or transient
- what Stage 3 should assume afterward

## Guardrails

- do not mix this with `workitems/` renames
- do not mix this with extension/skill namespacing
- do not mix this with `runtime/src/channels/web/` grouping work
- do not widen into a build-system rewrite unless the batch clearly cannot land otherwise

## Success criteria

Stage 2 is successful when:

- `runtime/generated/` exists as a clear containment boundary
- clearly transient runtime output is moved there
- path-sensitive tooling/docs are updated
- validation is green
- remaining exceptions are documented rather than accidental
