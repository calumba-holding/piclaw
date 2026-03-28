# Filesystem layout audit — 2026-03-28

## Executive summary

Piclaw's repo layout is mostly understandable once you know the intended packaging boundary, but there are three recurring sources of friction:

1. **Duplicated ownership domains at repo root vs `runtime/`**
   - `docs/` and `runtime/docs/`
   - `scripts/` and `runtime/scripts/`
   - `artifacts/` and `runtime/artifacts/`
2. **Generated/transient runtime output sits next to hand-maintained runtime code**
   - `runtime/dist/`, `runtime/.cache/`, `runtime/coverage/`, `runtime/reports/`, `runtime/tmp/`, `runtime/node_modules/`
3. **Some project-management and module-grouping layout work is already clearly needed, but it should stay bounded**
   - `kanban/` naming is already tracked
   - `runtime/src/channels/web/` file grouping is already tracked

The main conclusion is:

- **Do not do a broad move/rename sweep now.**
- Keep the current top-level packaging model.
- Prefer a small number of follow-up cleanup slices that clarify ownership and isolate generated output.

## Evidence snapshot

### Top-level directories

Current filtered top-level directories:

- `artifacts/`
- `docs/`
- `.github/`
- `kanban/`
- `runtime/`
- `scripts/`
- `skel/`
- `supervisor/`
- `workspace/`

Current top-level files include:

- `package.json`
- `README.md`
- `Dockerfile`
- `docker-compose.yml`
- `entrypoint.sh`
- `Makefile`
- `autoresearch.sh`
- `autoresearch.checks.sh`
- `autoresearch.md`

### Runtime subtree

`runtime/` currently mixes source, packaging inputs, and generated output:

- source-ish / maintained:
  - `runtime/src/`
  - `runtime/web/`
  - `runtime/test/`
  - `runtime/extensions/`
  - `runtime/skills/`
  - `runtime/scripts/`
  - `runtime/vendor/`
  - `runtime/vendor-manifests/`
  - `runtime/docs/`
  - `runtime/assemblyscript/`
- generated / transient:
  - `runtime/dist/`
  - `runtime/.cache/`
  - `runtime/coverage/`
  - `runtime/reports/`
  - `runtime/tmp/`
  - `runtime/node_modules/`
- additional layout that can confuse ownership:
  - `runtime/artifacts/`

### Core source adjacency

The central implementation layout is actually good:

- `runtime/src/agent-control/`
- `runtime/src/agent-pool/`
- `runtime/src/channels/`
- `runtime/src/core/`
- `runtime/src/db/`
- `runtime/src/extensions/`
- `runtime/src/queue/`
- `runtime/src/remote/`
- `runtime/src/runtime/`
- `runtime/src/secure/`
- `runtime/src/tools/`
- `runtime/src/types/`
- `runtime/src/utils/`

And the UI/test adjacency is also good:

- `runtime/web/src/`
- `runtime/web/src/components/`
- `runtime/web/src/panes/`
- `runtime/web/src/styles/`
- `runtime/web/src/ui/`
- `runtime/web/src/utils/`
- `runtime/test/`

### Kanban / review lanes

Board lanes are explicit and conventional:

- `workitems/00-inbox/`
- `workitems/10-next/`
- `workitems/20-doing/`
- `workitems/30-blocked/`
- `workitems/40-review/`
- `workitems/50-done/`
- `workitems/_templates/`

That structure is clear, but the **name** `kanban/` now undersells the fact that this directory is the canonical project work-item store rather than just a board view.

## What is working well

### 1) `runtime/` as the implementation subtree is a valid boundary

The README already documents that:

> "The repository root is the install/package boundary. The nested `runtime/` directory is the implementation subtree used by the packaged CLI, web assets, extensions, and skills."

That is a coherent model. It means the repo root is allowed to contain:

- packaging and container files
- project-management docs
- install/build entrypoints
- repo-level docs

while `runtime/` contains the implementation payload.

### 2) `runtime/src/`, `runtime/web/`, and `runtime/test/` being adjacent is good

This is one of the strongest parts of the current tree. It keeps:

- server/runtime code
- web client code
- tests

visibly close together under the same implementation subtree.

### 3) `skel/` and `supervisor/` deserve to stay top-level

These are not random leftovers:

- `skel/` is clearly project scaffolding/template material
- `supervisor/` is deployment/runtime orchestration material

They are easier to understand at repo root than if they were hidden deep under `runtime/`.

### 4) `workspace/` as a top-level placeholder is acceptable

It is minimal (`workspace/.gitkeep`) and supports the container/workspace mental model without creating ambiguity in the implementation tree.

## High-friction layout problems

### A) Root-level vs `runtime/` ownership is not obvious enough

The repo currently has paired domains that look similar but serve different audiences:

- `docs/` vs `runtime/docs/`
- `scripts/` vs `runtime/scripts/`
- `artifacts/` vs `runtime/artifacts/`

This is the single biggest layout confusion point because a contributor cannot easily tell:

- which location is repo/operator-facing,
- which location is packaged/runtime-facing,
- and which one should receive new material.

#### Why this matters

Without a clear policy, future work tends to drift into whichever directory is nearest, producing:

- duplicated docs,
- duplicated scripts,
- mixed packaging semantics,
- and harder release hygiene.

### B) Generated output lives beside maintained runtime subtrees

Under `runtime/`, generated/transient directories are interleaved with maintained ones:

- `runtime/dist/`
- `runtime/.cache/`
- `runtime/coverage/`
- `runtime/reports/`
- `runtime/tmp/`
- `runtime/node_modules/`

This hurts discoverability because the implementation subtree no longer cleanly answers:

> "What do humans maintain here?"

It also makes broad navigation noisier for both people and tools.

### C) Artifact placement is split across root and runtime

The repo has both:

- root `artifacts/`
- `runtime/artifacts/`
- plus `runtime/reports/`

Even if each individual directory makes sense locally, the combined effect is muddy:

- historical audit outputs,
- runtime-produced outputs,
- and reports

are not governed by one obvious placement rule.

### D) Some layout pain is already known and should not be rediscovered

Two layout concerns are already captured and should be treated as existing roadmap items rather than re-audited indefinitely:

- `workitems/10-next/group-web-channel-flat-files.md`
- `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`

That is good news: not every audit finding requires a new ticket.

## Acceptable current decisions that should stay as-is for now

To avoid churn, these should be treated as acceptable unless fresh evidence says otherwise:

- keeping `runtime/` as the implementation subtree
- keeping `runtime/src/`, `runtime/web/`, `runtime/test/` adjacent
- keeping `skel/` top-level
- keeping `supervisor/` top-level
- keeping repo-level Docker/install files at root
- keeping `workspace/` as a top-level container/workspace placeholder

## Recommended follow-up actions

### Low-risk / reviewable slices

1. **Clarify root-vs-runtime ownership for docs/scripts/artifacts**
   - Add a concise policy and align obvious references/documentation.
   - Goal: contributors can decide where new docs/scripts/artifacts belong without guessing.

2. **Define a generated-output containment policy for `runtime/`**
   - Decide whether generated/transient directories should be grouped more clearly or at minimum documented/standardized.
   - Goal: separate maintained code from cache/build/report output conceptually, even if moves are staged later.

3. **Keep using the existing downstream tickets for known layout issues**
   - `group-web-channel-flat-files`
   - `rename-project-kanban-to-workitems-and-update-skilling`

### Larger / more expensive ideas to defer

- physically relocating major doc/script/artifact trees in one pass
- renaming `kanban/` immediately as part of this audit
- regrouping all runtime generated output in the same change as policy/documentation work

## Proposed sequencing

1. Land this audit and ticket updates.
2. Work the ownership-boundary clarification slice.
3. Work the generated-output containment/policy slice.
4. Revisit larger moves only after those lower-risk clarifications are in place.

## Recommended follow-up tickets

### Already existing

- `workitems/10-next/group-web-channel-flat-files.md`
- `workitems/10-next/rename-project-kanban-to-workitems-and-update-skilling.md`

### New from this audit

- `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
- `workitems/40-review/rationalize-runtime-generated-output-layout.md`

## Bottom line

The repo does **not** need a grand reorganization.

It does need:

- clearer boundary documentation for root vs `runtime/`
- a less noisy story for generated runtime output
- continued bounded cleanup through existing and newly-split tickets

That gives Piclaw a cleaner path forward without turning a layout audit into a churn-heavy move/rename project.
