# Autoresearch: audit silent catch blocks

## Objective
Audit and eliminate silent swallow patterns across the remaining repo code after the core `runtime/src` + `runtime/web/src` sweep. The governing ticket is `kanban/10-next/audit-silent-catch-blocks.md`.

Core runtime/web coverage is already complete. The resumed loop is now finishing repo-wide cleanup in adjacent first-party code (`runtime/scripts`, `runtime/extensions`, `runtime/test` helpers, `skel/scripts`) without changing behavior.

Success means every in-scope empty `catch {}` or empty `.catch(() => {})` in these code paths is either:
- replaced with explicit logging/structured handling when silence is unsafe, or
- annotated with an explicit `/* expected: ... */` justification when the swallow is intentional and safe.

We are optimizing for full audited coverage while keeping builds/tests passing.

## Metrics
- **Primary**: `repo_silent_catch_blocks` (count, lower is better) — unresolved empty `catch {}` blocks remaining across first-party repo code (`runtime/**`, `skel/scripts/**`, excluding vendored/static/minified assets)
- **Secondary**:
  - `repo_silent_promise_catches` — unresolved empty `.catch(() => {})` promise swallows across the same code scope
  - `repo_files_with_silent_catches` — spread of remaining repo-wide audit work
  - `runtime_core_silent_catches` — regression guard for the already-clean `runtime/src` + `runtime/web/src` scope

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `runtime/src/**` and `runtime/web/src/**` — already-clean core runtime/web scope; keep at zero regressions
- `runtime/scripts/**` — standalone harness/reporting scripts that still contain empty cleanup catches
- `runtime/extensions/**` — browser/editor extension code with localStorage/view-state cleanup swallows
- `runtime/test/**` — test helpers and fixtures that still hide cleanup failures without justification
- `skel/scripts/**` — bundled template scripts with best-effort shell/reporting catches needing explicit rationale

## Off Limits
- `runtime/web/static/**`
- vendored/minified files
- generated artifacts unless required by the normal build
- unrelated refactors outside silent-catch auditing

## Constraints
- Keep behavior stable
- No new dependencies
- TypeScript must typecheck
- Relevant tests must pass after kept changes
- Prefer comments for expected/racy cleanup paths; prefer warnings for unexpected failures in backend/critical paths

## What's Been Tried
- Baseline established at `silent_catch_blocks=97`, `critical_silent_catches=33`, `silent_promise_catches=17`.
- Audited all empty `catch {}` blocks in `runtime/src` + `runtime/web/src` and removed the bare-empty form entirely.
- Backend/critical-path changes now log when hidden failures would matter: agent-pool branch/session sync, web theme init fallback, oversized upload cleanup, workspace menu actions, tab listener failures, and WhatsApp availability publishing.
- Intentional/racy cleanup paths now carry explicit `/* expected: ... */` justification comments instead of silent empties: PTY/procfs scans, websocket teardown, iframe/widget messaging, localStorage writes, pointer capture, resize observers, Ghostty/terminal teardown, and browser popup/mobile viewport quirks.
- Follow-up sweep also removed promise-style silent swallows such as `.catch(() => {})`, again preferring explicit justification comments for expected best-effort UI/background work.
- Core runtime/web scope is now at zero silent catches and zero silent promise swallows.
- Resume target: remaining repo-wide code outside the core runtime/web path still has a small tail of empty cleanup catches in scripts/extensions/tests/skel; finish that tail without regressing the cleaned core scope.
