# Autoresearch: audit silent catch blocks

## Objective
Lock in the silent-swallow audit with regression guards so future changes cannot reintroduce empty `catch {}` or empty `.catch(() => {})` patterns unnoticed. The governing ticket is `kanban/10-next/audit-silent-catch-blocks.md`.

The repo-wide cleanup is complete. The resumed loop is now focused on code-quality assurance: wiring the new scanner into project checks so silent swallows fail fast in normal development and autoresearch backpressure checks.

Success means the repo has:
- a reusable scanner/check command for silent swallows,
- a package script entry for it,
- inclusion in the main `quality` command, and
- inclusion in autoresearch backpressure checks.

We are optimizing for durable audit coverage while keeping builds/tests passing.

## Metrics
- **Primary**: `silent_swallow_guard_gaps` (count, lower is better) — missing regression-guard integrations for the silent-swallow scanner
- **Secondary**:
  - `repo_silent_catch_blocks` — repo-wide empty `catch {}` count (should stay 0)
  - `repo_silent_promise_catches` — repo-wide empty `.catch(() => {})` count (should stay 0)
  - `quality_hook_present` — 1 when `package.json` wires the guard into `quality`, else 0

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `runtime/scripts/silent-swallow-metrics.ts` — reusable scanner/metrics script for empty swallow detection
- `package.json` — project script wiring and `quality` integration
- `autoresearch.checks.sh` — backpressure correctness hook for this autoresearch loop
- `runtime/src/**`, `runtime/web/src/**`, `runtime/scripts/**`, `runtime/extensions/**`, `runtime/test/**`, `skel/scripts/**` — monitored repo code that must remain at zero silent swallows

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
- Benchmark instrumentation was tightened to ignore comment-only false positives while still counting real empty catch blocks in code.
- Repo-wide code is now at zero silent catches and zero silent promise swallows.
- New target: convert the scanner into a durable regression guard by wiring it into package scripts, `quality`, and autoresearch checks.
- Added `runtime/scripts/silent-swallow-metrics.ts --check`, a `check:silent-swallows` package script, `quality` integration, and an autoresearch backpressure check so regressions now fail fast.
