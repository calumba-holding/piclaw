# Repo vs runtime ownership boundaries — 2026-03-28

## Purpose

Make the boundary between the repo root and `runtime/` explicit for maintainers.

PiClaw uses a nested `runtime/` subtree, but `runtime/` is **not** a second
package or a generic dumping ground. The repo root is the maintainer/operator
boundary; `runtime/` is the packaged implementation boundary.

## Core rule

When deciding where a file belongs, ask:

1. Is this primarily for maintainers/operators working on the repository?
2. Or is it part of the packaged/runtime implementation that ships with piclaw?

If the answer is maintainer/operator-facing, prefer the repo root.
If the answer is packaged/runtime-facing, prefer `runtime/`.

## Ownership table

| Area | Purpose | What belongs here | What does **not** belong here |
| --- | --- | --- | --- |
| `docs/` | Repo/operator/architecture/install docs | architecture notes, audits, release/install docs, reorg plans | packaged runtime-only docs |
| `runtime/docs/` | Packaged/runtime-facing docs | docs that ship with piclaw and describe packaged runtime behavior/surfaces | repo-only audits, planning notes, reorg docs |
| `scripts/` | Repo-level dev/operator entrypoints | audits, migration helpers, CI/dev scripts, repo maintenance helpers | packaged runtime helper scripts |
| `runtime/scripts/` | Packaged helper scripts | helper scripts invoked via packaged `bun run …` commands or shipped with piclaw | repo-only audit helpers and maintainer-only one-offs |
| `artifacts/` | Durable repo-level evidence | audit outputs, retained reports, review evidence, generated files worth keeping | transient build/test/cache output |
| `runtime/generated/` | Transient runtime-generated output | build output, coverage output, transient caches, disposable generated scratch | durable review evidence, repo planning docs |

## Paired-domain rules

### `docs/` vs `runtime/docs/`

Use `docs/` when the primary audience is someone maintaining the repository.

Examples:
- architecture notes
- filesystem reorg plans
- install guidance for the repo itself
- audits and inventories

Use `runtime/docs/` when the document describes a packaged runtime surface and
should ship with the published artifact.

Examples:
- packaged extension-route behavior
- packaged web API/SSE inventories used by the runtime
- runtime-facing optimization or behavior notes that should ship with the code

### `scripts/` vs `runtime/scripts/`

Use `scripts/` for repo maintenance, audits, migrations, smoke checks, and
operator/developer workflows that exist because this is a source repository.

Examples:
- audit scripts
- replay/migration helpers
- repo install smoke checks
- release/repo packaging helpers

Use `runtime/scripts/` for helper scripts that are part of the packaged runtime
surface or are intentionally invokable from published `bun run` commands.

Examples:
- packaged vendor helpers
- packaged maintenance helpers used by documented runtime commands
- runtime-side diagnostics that are intended to ship with piclaw

### `artifacts/` vs `runtime/generated/`

Use `artifacts/` for durable evidence worth keeping in the repository tree.

Examples:
- audit outputs
- retained VNC harness reports
- reviewed coverage summaries
- durable validation evidence attached to work items

Use `runtime/generated/` for disposable or reproducible output emitted by
runtime-oriented tooling.

Examples:
- `runtime/generated/dist/`
- `runtime/generated/coverage/`
- `runtime/generated/cache/`

`runtime/tmp/` remains an explicit exception for now because its current
contents are operator-authored helper scratch rather than emitted generated
output.

## Quick placement checklist

Before adding a new file:

- If it must ship with piclaw, prefer `runtime/...`.
- If it exists to maintain or validate the repository, prefer the repo root.
- If it is durable evidence, prefer `artifacts/`.
- If it is transient generated output, prefer `runtime/generated/`.
- If the location is still ambiguous, document the rule before adding more files.

## Current explicit exceptions

- `runtime/node_modules/` remains in place as a toolchain-sensitive exception.
- `runtime/tmp/` remains outside `runtime/generated/` until its contents stop
  being operator-authored helper scratch.
- Visual/editor surfaces may still intentionally use `kanban` in feature names
  even though the repo work-item store is `workitems/`.

## Related files

- `README.md`
- `docs/install-from-repo.md`
- `runtime/generated/README.md`
- `workitems/40-review/clarify-root-vs-runtime-ownership-boundaries.md`
- `docs/broad-filesystem-reorg-map-2026-03-28.md`
