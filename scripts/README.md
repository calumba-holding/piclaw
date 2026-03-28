# scripts

This directory contains repo-level maintenance, audit, migration, and operator
entrypoints for working on the source repository itself.

Use `scripts/` for things like:

- audit helpers
- migration/replay tools
- repo-install smoke checks
- release/build helpers tied to repository maintenance

Do **not** use this directory for packaged runtime helper scripts that are meant
to ship with piclaw. Those belong under `runtime/scripts/`.

Related:
- `docs/repo-runtime-boundaries-2026-03-28.md`
- `runtime/scripts/README.md`
