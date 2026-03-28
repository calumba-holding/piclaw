# Stage 2 runtime generated-output inventory — 2026-03-28

## Purpose

Capture the current generated/transient directory surface under `runtime/` so
Stage 2 of the broad filesystem reorg can work from a concrete inventory rather
than a vague cleanliness goal.

## Current top-level generated/transient candidates under `runtime/`

Measured on 2026-03-28:

- `runtime/dist/` — **1.7M**
- `runtime/.cache/` — **76M**
- `runtime/coverage/` — **8.0K**
- `runtime/reports/` — **4.4M**
- `runtime/tmp/` — **20K**
- `runtime/artifacts/` — **8.0K**
- `runtime/node_modules/` — **463M**

## Ownership / producer notes

### `runtime/dist/`

Producer indicators:

- root `package.json`:
  - Stage 2 target: `cd runtime && rm -rf generated/dist && tsc -p tsconfig.json`
- `Makefile` notes still mention `dist/` history and eventual removal from
  packaging concerns

Interpretation:

- TypeScript build output
- generated, not hand-maintained source
- good candidate for containment under `runtime/generated/` if toolchain paths
  can be updated safely

### `runtime/.cache/`

Observed as a large generated cache area (**76M**).

Interpretation:

- clearly transient/generated
- strong candidate for relocation under `runtime/generated/cache/`
- likely low value to keep visually adjacent to maintained runtime code

### `runtime/coverage/`

Producer indicators:

- root `package.json` test coverage script writes coverage output under runtime

Interpretation:

- transient test output
- strong candidate for `runtime/generated/coverage/`

### `runtime/reports/`

Observed contents include VNC harness outputs:

- `*.png`
- `*.json`
- `*.md`

Interpretation:

- generated report output, but more durable/human-consumable than cache files
- candidate options:
  - `runtime/generated/reports/`
  - or repo-level `artifacts/runtime/` if the reports are considered durable evidence
- needs a policy decision, not just a move

### `runtime/tmp/`

Observed contents include inspection/debug helper files such as:

- `inspect-compose-box.ts`
- `inspect-compose-internals.ts`
- `inspect-adaptive-card-dom.ts`

Interpretation:

- temporary/operator scratch area
- generated or disposable by intent
- strong candidate for `runtime/generated/tmp/` unless some files should instead
  become maintained scripts

### `runtime/artifacts/`

Observed contents are small and artifact-like:

- `runtime/artifacts/agent-control-fuzz/`

Interpretation:

- ambiguous between durable evidence and runtime-generated output
- should not stay ambiguous after Stage 2
- needs explicit classification:
  - repo-level durable artifact
  - or generated runtime artifact

### `runtime/node_modules/`

Interpretation:

- not source
- but toolchain/package-manager-sensitive
- likely **not** a Stage 2 move target unless proven safe
- should be treated as an exception to generated-output containment for now

## Proposed Stage 2 policy

### Move/contain in Stage 2

Preferred containment target: `runtime/generated/`

- `runtime/dist/` → `runtime/generated/dist/`
- `runtime/.cache/` → `runtime/generated/cache/`
- `runtime/coverage/` → `runtime/generated/coverage/`
- `runtime/tmp/` → `runtime/generated/tmp/` only if it truly contains emitted scratch output rather than maintained helper sources

### Decide explicitly in Stage 2

- `runtime/reports/`
- `runtime/artifacts/`

These need a durable-vs-transient policy decision before moving.

### Keep in place for now

- `runtime/node_modules/`

This should be documented as an intentional exception unless later toolchain
work makes relocation safe.

## Stage 2 execution result

- `runtime/dist/` → `runtime/generated/dist/` — moved as generated build output
- `runtime/.cache/` → `runtime/generated/cache/` — containment target established; older `.cache/` is still ignored as a compatibility leftover for local tool defaults
- `runtime/coverage/` → `runtime/generated/coverage/` — coverage writers updated to emit here
- `runtime/reports/` → `artifacts/vnc-harness/` — classified as durable repo evidence, not transient runtime output
- `runtime/tmp/` — classified as maintained operator scratch for now; intentionally *not* forced under `runtime/generated/` because the observed contents are authored helper scripts rather than emitted artifacts
- `runtime/artifacts/` — classified as durable repo evidence; the runtime-local location is retired in favor of repo-level `artifacts/`, with any ignored local leftovers to be migrated manually if needed
- `runtime/node_modules/` — intentionally left in place as the Stage 2 toolchain-sensitive exception

## Validation-sensitive surfaces

Stage 2 must assume path sensitivity in at least:

- root `package.json` scripts (`build`, `typecheck`, `lint`, `build:web`, etc.)
- runtime scripts that emit reports or temporary files
- any docs referencing report locations
- stale-dist and packaging/install flows
- tests or helper scripts that expect current output paths

## Stage 2 recommendation

Do **not** attempt to solve `runtime/node_modules/` in the same batch.

Treat Stage 2 as:

1. create `runtime/generated/`
2. move clearly transient output first
3. classify `runtime/reports/` and `runtime/artifacts/`
4. update scripts/docs/tooling references
5. validate aggressively

## Related files

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/40-review/rationalize-runtime-generated-output-layout.md`
