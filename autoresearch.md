# Autoresearch: audit silent catch blocks

## Objective
Adopt the silent-swallow guard in CI so regressions are blocked even outside local/autoresearch quality runs. The governing ticket is `kanban/10-next/audit-silent-catch-blocks.md`.

The repo-wide cleanup, quality-hook wiring, and focused scanner tests are complete. The resumed loop is now focused on CI assurance.

Success means GitHub CI explicitly runs `bun run check:silent-swallows` (or an equivalent flow that guarantees the same guard) in the normal validation path.

We are optimizing for durable audit coverage while keeping builds/tests passing.

## Metrics
- **Primary**: `silent_swallow_ci_gaps` (count, lower is better) — missing CI integration for the silent-swallow guard
- **Secondary**:
  - `repo_silent_catch_blocks` — repo-wide empty `catch {}` count (should stay 0)
  - `repo_silent_promise_catches` — repo-wide empty `.catch(() => {})` count (should stay 0)
  - `guard_check_present` — 1 when the scanner still has its package/quality guard wiring, else 0

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `.github/workflows/ci.yml` — CI adoption point for the silent-swallow guard
- `runtime/scripts/silent-swallow-metrics.ts` — reusable scanner/metrics script for empty swallow detection
- `runtime/test/scripts/silent-swallow-metrics.test.ts` — focused regression coverage for the scanner
- `autoresearch.checks.sh` and `package.json` — existing local/backpressure guard wiring must stay intact
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
- New target: add focused tests for the scanner itself so comment handling and `--check` semantics stay reliable.
- Focused tests exposed and then fixed an underlying bug in the scanner: it originally ignored comments but still counted `catch {}` patterns inside strings/template text. The scanner now masks all non-code spans and the dedicated script test covers comment-only false positives, real detections, and `--check` failure behavior.
- New target: wire `check:silent-swallows` into CI so the audit guard is enforced outside local/autoresearch workflows too.
- `.github/workflows/ci.yml` now runs `bun run check:silent-swallows` before the web build, closing the last obvious enforcement gap.
