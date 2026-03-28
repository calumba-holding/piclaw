# Broad filesystem reorg map — 2026-03-28

## Purpose

Turn the completed filesystem audit into a concrete, execution-ready reorg map.

This document assumes the project wants a **broad cleanup**, not just a few
small local adjustments. The goal is still to avoid a blind move sweep: we want
an opinionated target shape, staged execution, and explicit validation.

## Design goals

1. Make the repo root easy to understand for a new maintainer.
2. Make `runtime/` clearly represent the packaged implementation subtree.
3. Reduce paired root-vs-runtime ambiguity.
4. Separate maintained code from generated/transient output.
5. Rename board/work-item storage if that better reflects reality.
6. Only keep compatibility shims where they materially reduce migration risk.

## Current high-friction areas

From the audit, the broad reorg should specifically address:

- `docs/` vs `runtime/docs/`
- `scripts/` vs `runtime/scripts/`
- `artifacts/` vs `runtime/artifacts/` vs `runtime/reports/`
- noisy generated/transient directories mixed into `runtime/`
- `kanban/` underselling the fact that the directory is the canonical work-item store
- weak path namespacing for built-in vs project-local/internal extension and skill surfaces
- the still-flat `runtime/src/channels/web/` area

## Proposed target shape

### Repo root

```text
/
├── docs/                 # repo/operator/architecture docs
├── workitems/            # project planning board (renamed from kanban/)
├── runtime/              # packaged implementation subtree
├── scripts/              # repo-level/dev/operator entrypoints only
├── artifacts/            # durable repo-level audit outputs and generated evidence
├── skel/                 # project scaffolding/templates
├── supervisor/           # container/service orchestration assets
├── workspace/            # workspace placeholder/sample mountpoint
├── package.json
├── README.md
├── Dockerfile
├── docker-compose.yml
└── entrypoint.sh
```

### Runtime subtree

```text
runtime/
├── src/                  # server/runtime implementation
├── web/                  # web client source + static assets
├── test/                 # runtime/web tests
├── extensions/           # packaged extensions (prefer namespaced grouping)
├── skills/               # packaged skills (prefer namespaced grouping)
├── vendor/               # vendored runtime assets
├── vendor-manifests/     # vendoring metadata
├── docs/                 # packaged/user-facing runtime docs only
├── scripts/              # packaged helper scripts only
├── assemblyscript/       # runtime-specific wasm/AS sources
├── generated/            # generated/transient runtime output (new)
│   ├── dist/
│   ├── coverage/
│   ├── reports/
│   ├── tmp/
│   └── cache/
└── node_modules/         # keep in place unless toolchain constraints change
```

### Extension / skill namespacing direction

```text
runtime/
├── extensions/
│   ├── builtin/
│   ├── experimental/
│   └── web/
├── skills/
│   ├── builtin/
│   ├── operator/
│   └── integrations/
└── ...

skel/.pi/
├── extensions/           # project/user-local extensions
└── skills/               # project/user-local skills
```

The exact category names can change, but the important part is to stop treating
all internal/built-in extension and skill paths as one flat or weakly-distinguished
space. The broad reorg should create clearer path namespacing between:

- built-in packaged runtime assets
- experimental/internal runtime assets
- project-local scaffolded assets under `skel/.pi/`
- user/workspace-local assets under `.pi/`

### Web subtree direction

```text
runtime/src/channels/web/
├── auth/
├── cards/
├── http/
├── messaging/
├── sse/
├── theming/
├── workspace/
├── terminal/
├── vnc/
└── ...remaining focused services
```

This part should reuse the existing `group-web-channel-flat-files` work rather
than inventing a separate competing plan.

## Must-move vs may-stay decisions

### Must move / rename

1. **`kanban/` → `workitems/`**
   - Rationale: the directory is the canonical work-item store, not just a kanban visualization.

2. **`runtime/dist/`, `runtime/coverage/`, and `runtime/.cache/` under one generated-output boundary**
   - Preferred target: `runtime/generated/`
   - Rationale: maintained implementation should not be visually mixed with disposable output.

   `runtime/reports/` and `runtime/tmp/` need classification first:

   - `runtime/reports/` may be durable repo evidence rather than transient runtime output.
   - `runtime/tmp/` should only move under `runtime/generated/` if it contains emitted scratch output rather than operator-authored helper scripts.

3. **Clarify and enforce root vs `runtime/` domain ownership**
   - `docs/` = repo/operator/architecture/install docs
   - `runtime/docs/` = packaged/runtime-facing docs only
   - `scripts/` = repo/dev/operator scripts
   - `runtime/scripts/` = packaged helper scripts
   - `artifacts/` = durable repo-level audit/evidence outputs
   - `runtime/generated/reports/` (or equivalent) = runtime-generated reports

### Probably move

4. **Internal extension/skill path namespacing**
   - Strong candidate to introduce clearer built-in vs project-local/internal namespaces across `runtime/extensions/`, `runtime/skills/`, and scaffolded `.pi/` paths.
   - Decision should favor long-term discoverability over preserving today's flat-ish placement.

5. **`runtime/artifacts/`**
   - Strong candidate to merge into either:
     - root `artifacts/runtime/`, or
     - `runtime/generated/artifacts/`
   - Decision should follow the durable-vs-transient rule.

6. **Flat `runtime/src/channels/web/` files**
   - Strong candidate for grouped subdirectories after the major top-level boundary moves settle.

### Should stay unless compelling evidence changes

- `runtime/` as the implementation subtree
- `runtime/src/`, `runtime/web/`, and `runtime/test/` adjacency
- `skel/` at repo root
- `supervisor/` at repo root
- repo-level Docker/install files at repo root
- `workspace/` as a top-level workspace placeholder
- `runtime/node_modules/` if package manager/tooling assumptions make relocation impractical

## Proposed execution stages

## Stage 1 — rename and boundary framing

### Scope

- `kanban/` → `workitems/`
- update board/tooling/skill/docs references
- add explicit root-vs-runtime ownership rules to docs
- no generated-output directory moves yet

### Why first

This gives the repo a clearer mental model before touching build/test output
paths.

### Expected touched surfaces

- repo docs
- skill/docs references
- board helpers/renderers
- any code with hard-coded `kanban/` paths

### Validation

- search for stale `kanban/` references
- verify board/skill/helper behavior
- run affected tests for board/web/skill path references

## Stage 2 — generated/transient containment under `runtime/`

### Scope

- create `runtime/generated/`
- move or alias the clearly transient areas:
  - `runtime/dist/`
  - `runtime/coverage/`
  - `runtime/.cache/`
- classify before moving:
  - `runtime/reports/`
  - `runtime/tmp/`
- decide final placement for `runtime/artifacts/`

### Why second

This is high-value cleanup, but more toolchain-sensitive than renaming the
project board.

### Validation

- build/lint/typecheck/test flows
- stale-dist checks
- packaging/install checks
- any scripts expecting old output paths

## Stage 3 — paired-domain rationalization

### Scope

- make `docs/` vs `runtime/docs/` explicit in both placement and docs
- make `scripts/` vs `runtime/scripts/` explicit
- merge/relocate any obviously misplaced artifact/report trees

### Why third

After Stages 1–2, the big boundaries are established and the remaining moves are
less likely to need rework.

### Validation

- grep for stale paths
- docs link validation
- packaging/file-list sanity checks
- targeted script smoke tests

## Stage 4 — extension/skill namespacing cleanup

### Scope

- introduce clearer namespacing/grouping for built-in/internal extension paths
- introduce clearer namespacing/grouping for packaged skill paths
- align scaffolded `skel/.pi/` structure with the intended runtime/project-local distinction
- update docs and loaders/path assumptions as needed

### Why fourth

This is structurally important, but it should follow the repo-root boundary work
so naming decisions are made inside a cleaner top-level layout.

### Validation

- extension loading and registration tests
- skill discovery / docs references
- grep for stale extension/skill paths
- package/file-list sanity checks where relevant

## Stage 5 — source-tree grouping cleanup

### Scope

- execute `group-web-channel-flat-files`
- consider other source-tree grouping only where ownership is already clear

### Why fourth

This is important, but it is more maintainable once the repo-level boundary
reorg is settled.

### Validation

- lint/typecheck/tests
- import-boundary checks if relevant
- grep for stale imports

## One-shot migration vs staged migration

### Recommendation: staged migration

This reorg is broad enough that a one-shot move risks:

- path breakage hidden inside scripts/docs/tooling
- hard-to-review diffs
- conflating naming changes with build/test/output changes

A staged migration still counts as a broad cleanup, but keeps the risk legible.

## Compatibility policy

Use compatibility shims only where they reduce migration risk materially.

Examples:

- temporary path fallbacks for board/workitem lookup
- transitional doc references or aliases
- helper code accepting both old and new paths for one release window

Avoid indefinite dual-path support.

## Decision log

### Decided now

- broad reorg is desired
- staged execution is preferred over a blind one-shot sweep
- `workitems/` is the preferred target name for the project board
- `runtime/generated/` is the preferred containment area for transient runtime output
- `runtime/` remains the packaged implementation subtree

### Still to confirm during execution

- whether any runtime docs should move out of `runtime/docs/` or simply be re-scoped/documented
- whether some repo-level scripts should become packaged runtime scripts or vice versa

### Stage 2 execution update — 2026-03-28

- `runtime/dist/` moved to `runtime/generated/dist/`
- `runtime/coverage/` now writes to `runtime/generated/coverage/`
- `runtime/.cache/` now has a `runtime/generated/cache/` containment target; runtime-local `.cache/` remains tolerated as a compatibility leftover for local tool defaults
- `runtime/reports/` was durable evidence, not transient runtime output; it moved to `artifacts/vnc-harness/`
- `runtime/artifacts/` is also treated as durable repo evidence, and the runtime-local location is being retired
- `runtime/tmp/` is not automatically generated output and should stay out of `runtime/generated/` unless its contents change class
- `runtime/node_modules/` remains untouched as the Stage 2 toolchain exception

### Stage 3 execution update — 2026-03-28

- added a durable maintainer-facing boundary policy in `docs/repo-runtime-boundaries-2026-03-28.md`
- updated `README.md` and `docs/install-from-repo.md` so the root-vs-runtime placement rule is visible in the main maintainer/install paths
- added directory-local guidance files to reinforce the paired-domain rules:
  - `scripts/README.md`
  - `runtime/docs/README.md`
  - `runtime/scripts/README.md`
  - `artifacts/README.md`
- kept Stage 3 intentionally bounded to policy clarification and local directory guidance rather than another relocation sweep

### Stage 4 execution update — 2026-03-28

- grouped packaged runtime extensions under:
  - `runtime/extensions/browser/`
  - `runtime/extensions/platform/windows/`
  - `runtime/extensions/viewers/`
  - `runtime/extensions/integrations/`
  - `runtime/extensions/experimental/`
- grouped packaged runtime skills under:
  - `runtime/skills/builtin/`
  - `runtime/skills/operator/`
  - `runtime/skills/integrations/`
- kept `runtime/src/extensions/` unchanged in role as the built-in code-factory surface
- kept `.pi/extensions/`, `.pi/skills/`, and `.pi/agent/extensions/` stable as compatibility-sensitive convention paths
- updated loader, build, vendor, docs, and test references to the grouped packaged-runtime layout

### Stage 5 preparation update — 2026-03-28

- refreshed the current `runtime/src/channels/web/` flat-root count to 73 files, so the older 56-file snapshot is no longer the planning baseline
- captured the current grouping inventory in `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
- prepared the execution order in `docs/stage5-web-channel-grouping-steplist-2026-03-28.md`
- prepared an execution brief in `docs/stage5-web-channel-grouping-autoresearch-prompt-2026-03-28.md`
- opened `workitems/20-doing/execute-stage5-web-channel-grouping.md` as the active next batch
- current recommendation is to group the clearest semantic clusters first (`auth`, `sse`, `cards`, `media`, `theming`, `messaging`) rather than forcing the entire flat root into one move sweep

### Stage 5 execution update — 2026-03-28

- manually landed the first clear semantic tranche under:
  - `runtime/src/channels/web/auth/`
  - `runtime/src/channels/web/sse/`
  - `runtime/src/channels/web/cards/`
  - `runtime/src/channels/web/media/`
  - `runtime/src/channels/web/theming/`
  - `runtime/src/channels/web/messaging/`
- updated direct module tests to mirror the new grouped layout where straightforward under `runtime/test/channels/web/`
- rewrote affected imports across runtime source and tests
- reduced the flat root under `runtime/src/channels/web/` from 73 files to 47 files
- validated the tranche with focused tests, `bun run lint`, `bun run typecheck`, and `bun run check:import-boundaries`
- left a deliberate second-tranche remainder rather than forcing ambiguous orchestration/control files into the same move batch

## First-batch recommendation

If we start executing immediately, the best first batch is:

1. `kanban/` → `workitems/`
2. update board/tooling/docs/skill references
3. document root-vs-runtime ownership rules in README/docs

This gives the tree a more truthful top-level shape before touching build/test
output paths.

## Related tickets

- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/40-review/audit-project-filesystem-layout.md`
- `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`
- `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
- `workitems/40-review/rationalize-runtime-generated-output-layout.md`
- `workitems/40-review/namespace-internal-extensions-and-skills-paths.md`
- `workitems/40-review/execute-stage4-extension-and-skill-namespacing.md`
- `workitems/10-next/group-web-channel-flat-files.md`
