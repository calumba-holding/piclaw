# runtime/extensions

This directory contains filesystem-backed packaged runtime extensions.

It is intentionally separate from `runtime/src/extensions/`, which contains
code-registered built-in extension factories wired directly into the runtime.

## Current grouping

- `browser/` — packaged browser automation extensions
- `platform/windows/` — packaged Windows-specific platform extensions
- `viewers/` — packaged viewer/editor web-surface extensions
- `integrations/` — packaged runtime integration/helper extensions
- `experimental/` — packaged experimental or harness-only extension entries

## Guardrail

Do not confuse this tree with workspace/project-local `.pi/extensions/` or
agent-local `.pi/agent/extensions/` convention paths. Those are compatibility-
sensitive user-facing surfaces and are not the same as packaged runtime
extension layout.

Related:
- `runtime/src/extensions/`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/repo-runtime-boundaries-2026-03-28.md`
