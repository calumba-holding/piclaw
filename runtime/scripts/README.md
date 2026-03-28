# runtime/scripts

This directory contains packaged helper scripts that ship with piclaw.

Use it for scripts that are intentionally part of the packaged runtime surface,
including scripts invoked by documented `bun run ...` commands from the repo or
published package.

Examples include:

- packaged vendor/download helpers
- packaged validation helpers tied to runtime behavior
- packaged operator-style helper entrypoints such as `proxmox`

Do **not** use this directory for repo-only audits, migrations, or maintainer
one-offs. Those belong under the repo-root `scripts/` directory.

Related:
- `docs/repo-runtime-boundaries-2026-03-28.md`
- `README.md`
