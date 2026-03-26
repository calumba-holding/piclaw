# Autoresearch: structured logging and explicit error-handling guards

## Objective
Reduce unstructured `console.*` usage in the critical-path runtime/server files from kanban ticket `kanban/20-doing/adopt-pino-structured-logging.md`, replace it with a shared structured logger, and make teardown/race/degraded/error paths explicit enough that resumed agents can tell whether a site should guard quietly, warn with context, or fail loudly.

This session is an audit + migration loop, not a runtime speed optimization. The workload is a repo-quality benchmark that measures remaining raw console usage in scope while full correctness checks gate kept runs.

## Metrics
- **Primary**: `scope_raw_console_calls` (unitless, lower is better) — count of non-allowlisted raw `console.log/warn/error/info/debug` references in the ticket scope.
- **Secondary**:
  - `scope_files_with_raw_console`
  - `scope_allowlisted_console_calls`
  - `scope_files_using_structured_logger`
  - `scope_expected_guard_markers`
  - `repo_silent_catch_blocks`
  - `repo_files_with_silent_catches`
  - `repo_silent_promise_catches`
  - `runtime_core_silent_catches`

## How to Run
- `./autoresearch.sh` — emits structured `METRIC ...` lines for scope logging quality and silent-swallow guards.
- `./autoresearch.checks.sh` — full keep gate.

## Files in Scope
- `runtime/src/agent-pool.ts` — session lifecycle, side sessions, rotation, persistence fallbacks.
- `runtime/src/channels/web.ts` — request lifecycle, server boot, autoresearch endpoints, resume/recovery visibility.
- `runtime/src/channels/whatsapp.ts` — connection lifecycle, reconnects, outbound queue delivery.
- `runtime/src/channels/web/workspace/file-service.ts` — upload/delete cleanup and user-visible workspace failure handling.
- `runtime/src/db/connection.ts` — DB init/persistence/recovery error visibility.
- `runtime/src/runtime/*` — startup, shutdown, message loop, worker wiring, bootstrap orchestration.
- `runtime/src/utils/logger.ts` — shared structured logger path created for this ticket.
- `runtime/scripts/structured-logging-scope-metrics.ts` — scope metric and future regression guard basis.
- `autoresearch.sh`, `autoresearch.checks.sh`, `autoresearch.md` — session control files.

## Off Limits
- `/workspace/.piclaw/**` persisted state, especially `/workspace/.piclaw/store/messages.db`.
- Unrelated web/editor product changes outside what is needed for validation.
- Dependency churn unless strictly necessary for the ticket.

## Constraints
- Keep runs must pass `./autoresearch.checks.sh`.
- Full `bun test` is mandatory for kept runs.
- Lint/type failures must be fixed, not deferred.
- If touched files affect web/editor bundle inputs, run the full vendor/web build path during checks.
- No new raw `console.*` in scope; justified exceptions require an explicit allowlist entry and explanation.
- Critical-path files should converge toward structured logging only.
- Teardown/race guards are case-by-case: expected guards may return quietly only when documented (`expected:` comment or equivalent reasoning); degraded recoverable paths should warn with context; invariant/critical-path failures should error clearly.
- Simpler changes win when the metric is equal.

## Guard Policy
- **Quiet guard**: use only for expected teardown/race/transient states that would create noisy logs without helping recovery. Document why it is safe.
- **Warn**: degraded-but-recoverable behaviour (retry, fallback, requeue, cleanup failure).
- **Error**: failed startup, failed critical operation, exhausted retries, or unexpected invariant break.
- **Allowlist**: raw console use is only acceptable in deliberately low-level plumbing that cannot sensibly route through the structured logger (currently expected to be tiny and explicit).

## What's Been Tried
- Baseline not yet recorded in this session.
- Initial hypothesis: a small repo-local structured logger plus a scope metric/check script will let us migrate the runtime modules incrementally without waiting for a repo-wide logging rewrite.
