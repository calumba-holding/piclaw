# artifacts

This directory holds durable repo-level evidence and retained generated output.

Use `artifacts/` for files that are worth keeping as review/audit evidence, for
example:

- audit outputs
- retained validation reports
- reviewed coverage summaries
- durable screenshots/JSON/markdown evidence such as VNC harness reports

Do **not** put disposable build, coverage, or cache output here.

Those belong under `runtime/generated/` instead.

Related:
- `docs/repo-runtime-boundaries-2026-03-28.md`
- `runtime/generated/README.md`
