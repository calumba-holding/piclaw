# runtime/generated

This subtree contains runtime build output and other disposable generated files.

## Intended contents

- `dist/` — TypeScript build output from `bun run build`
- `coverage/` — Bun coverage output from `bun run test:coverage` and related audits
- `cache/` — transient runtime/tool caches
- `tmp/` — disposable generated scratch output only

## Explicit Stage 2 classifications

- `runtime/node_modules/` stays in place as a toolchain-sensitive exception.
- VNC harness reports are durable repo evidence and now live under
  `artifacts/vnc-harness/` instead of `runtime/reports/`.
- `runtime/tmp/` is not treated as generated output yet because the current
  local contents are operator-authored scratch scripts rather than emitted
  artifacts.
- `runtime/artifacts/` is retired in favor of repo-level `artifacts/` for
  durable evidence.
