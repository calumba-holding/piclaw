# Stage 1 execution steplist — broad filesystem reorg

## Purpose

Provide an execution-ready steplist for **Stage 1** of the broad filesystem
reorg so an autoresearch run or manual implementation pass can work from a
clear, bounded plan.

## Stage 1 goal

Land the first broad-reorg batch that:

1. renames `kanban/` to `workitems/`
2. updates board/tooling/docs/skill references
3. documents and enforces repo-root vs `runtime/` ownership rules
4. avoids generated-output moves for now

## Out of scope for Stage 1

- `runtime/generated/` work
- moving `runtime/dist/`, `runtime/coverage/`, `runtime/reports/`, `runtime/tmp/`, `runtime/.cache/`
- `runtime/artifacts/` placement changes
- `runtime/src/channels/web/` grouping work
- unrelated behavior refactors

## Preconditions

Before changing anything:

- repo is on `main`
- working tree is clean
- `origin/main` is fetched and aligned
- the current source of truth docs exist:
  - `docs/filesystem-layout-audit-2026-03-28.md`
  - `docs/broad-filesystem-reorg-map-2026-03-28.md`
  - `kanban/20-doing/plan-broad-filesystem-reorg-from-audit.md`

## Primary deliverables

- `kanban/` renamed to `workitems/`
- board docs/links/helpers updated to the new path
- skill/helper naming decision applied or explicitly compatibility-shimmed
- README/docs updated with root-vs-runtime ownership rules
- a compact migration note recorded in the stage ticket

## Step-by-step execution plan

### Step 1 — inventory all path-sensitive references

Collect references before moving anything.

Search at minimum for:

- `kanban/`
- `piclaw/kanban`
- `kanban-management`
- `.kanban.md`
- board helper/render code
- docs/helpers/scripts that assume the board path is `kanban/`
- extension/skill loaders or docs that currently bake in board-path assumptions
- internal extension/skill path assumptions that may need later namespacing work

Search candidate locations:

- `README.md`
- `docs/`
- `runtime/`
- `scripts/`
- `skel/`
- `/workspace/.pi/skills/kanban-management/` references checked from repo docs/tickets if mirrored here

### Step 2 — decide compatibility policy before moving

Make these decisions explicit before code changes:

1. Will the skill keep the external name `kanban-management` temporarily?
2. Will helpers accept both `kanban/` and `workitems/` paths for one transition window?
3. Which references stay intentionally visual/editor-specific (`.kanban.md`, kanban UI/editor naming) vs which become `workitems`?

Preferred policy:

- rename the project board path to `workitems/`
- keep `kanban-management` as a temporary public skill name if needed
- keep `.kanban.md` visual/editor naming only where it truly describes the file format/editor
- add short-lived compatibility support only where it meaningfully reduces breakage

### Step 3 — perform the structural move

Use git moves, not copy/delete.

Primary move:

- `git mv kanban workitems`

Then update obvious top-level references immediately so the repo builds/tests/docs
against the new path, not the old one.

### Step 4 — update board/tooling/docs references

Update all project-local references from `kanban/` to `workitems/` except for
intentional visual/editor semantics.

Expected touch points include:

- repo docs
- work-item links inside tickets
- README references
- helper/render code
- path constants
- stage/review lane documentation
- scaffolding under `skel/kanban/` (decide whether this also becomes `skel/workitems/` in the same step)

### Step 5 — handle skill/helper naming carefully

For each helper/skill reference:

- if it refers to the project work-item store, prefer `workitems`
- if it refers to kanban visualization/editor behavior, `kanban` may remain

If renaming the skill itself is too risky for Stage 1:

- keep the current public skill name temporarily
- update its internal/project-path assumptions to support `workitems/`
- record the compatibility choice in the ticket
- explicitly note any follow-on namespacing work needed for built-in/internal extension or skill paths

### Step 6 — record extension/skill namespacing fallout for later stages

Stage 1 does not need to complete internal extension/skill namespacing, but it
should inventory what the board rename exposes.

Capture at minimum:

- built-in packaged runtime extension paths that should likely be namespaced later
- packaged skill paths that should likely be namespaced later
- scaffolded `skel/.pi/` paths that should stay clearly project-local
- any loader/discovery code that assumes current flat or weakly-distinguished names

This becomes direct input for a later extension/skill namespacing batch.

### Step 7 — add root-vs-runtime ownership rules to docs

Add a short durable rule set, likely in `README.md` and/or a repo-layout doc:

- `docs/` = repo/operator/architecture/install docs
- `runtime/docs/` = packaged/runtime-facing docs
- `scripts/` = repo/dev/operator scripts
- `runtime/scripts/` = packaged helper scripts
- `artifacts/` = durable repo-level evidence
- runtime-generated reports remain runtime-scoped until Stage 2 lands

This step should be documentation-heavy and move-light.

### Step 8 — validate path-sensitive behavior

Minimum validation ladder for Stage 1:

1. grep/search for stale `kanban/` references
2. run lint
3. run typecheck
4. run targeted tests covering board/tooling/web areas touched
5. run broader tests if the path changes reached shared tooling

At minimum, verify:

- board rendering / work-item links still resolve
- repo docs do not point at stale moved paths
- helper/skill code using board paths still works

### Step 9 — record migration notes in the ticket

The stage ticket should capture:

- what was moved
- what stayed intentionally named `kanban`
- what compatibility shims were added
- exact validation commands run
- what Stage 2 should assume afterward

## Suggested validation commands

Use these as a starting point and narrow/widen based on touched files:

- `rg -n "kanban/|piclaw/kanban|kanban-management" README.md docs runtime scripts skel`
- `bun run lint`
- `bun run typecheck`
- `bun run check:stale-dist` *(if any web/runtime static references are touched)*
- targeted `bun test ...` for board/path-sensitive helpers and any affected web pane code

## Autoresearch guardrails

An autoresearch run for Stage 1 should:

- stay strictly on the board rename + ownership-boundary framing scope
- avoid Stage 2 generated-output moves
- prefer `git mv`
- preserve compatibility where needed rather than forcing a one-shot naming purge
- treat README/docs/helper/path updates as first-class work, not afterthoughts
- stop if the change begins to sprawl into unrelated runtime behavior refactors

## Success criteria for Stage 1

Stage 1 is successful when:

- `workitems/` exists as the canonical project board path
- stale `kanban/` references are either removed or intentionally compatibility-shimmed
- ownership rules for root vs `runtime/` are documented
- validation is green
- the repo is ready for Stage 2 generated-output containment work

## Follow-on after Stage 1

Once Stage 1 lands, the next broad-reorg batch should be:

- Stage 2 — move transient runtime output toward `runtime/generated/`
