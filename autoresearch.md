# Autoresearch: structured logging and explicit error-handling guards

## Objective
Reduce unstructured `console.*` usage in the critical-path runtime/server files from kanban ticket `kanban/20-doing/adopt-pino-structured-logging.md`, replace it with a shared structured logger, and make teardown/race/degraded/error paths explicit enough that resumed agents can tell whether a site should guard quietly, warn with context, or fail loudly.

This session is an audit + migration loop, not a runtime speed optimization. Phase 1 eliminated non-allowlisted raw console usage in the ticket-critical scope; Phase 2 increased structured-logger coverage across the remaining critical-path files; Phase 3 tightened explicit error-handling by shrinking undocumented quiet catches to zero; Phase 4 expands to adjacent runtime modules that sit directly on the same operational path (IPC, queueing, scheduler, slash-command handling, and web recovery/agent handlers).

## Metrics
- **Primary**: `adjacent_runtime_raw_console_calls` (unitless, lower is better) — count of raw `console.*` references in adjacent runtime modules immediately surrounding the ticket-critical path.
- **Secondary**:
  - `adjacent_runtime_files_with_raw_console`
  - `adjacent_runtime_files_using_structured_logger`
  - `scope_undocumented_quiet_catches`
  - `scope_files_using_structured_logger`
  - `scope_raw_console_calls`
  - `scope_files_with_raw_console`
  - `scope_allowlisted_console_calls`
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
- `runtime/src/ipc.ts` — IPC watcher and resume/message task processing.
- `runtime/src/task-scheduler.ts` — scheduled task restore/execution lifecycle.
- `runtime/src/queue.ts` — serialized queue execution and error reporting.
- `runtime/src/agent-pool/slash-command.ts` — slash-command execution path adjacent to main agent runs.
- `runtime/src/channels/web/recovery.ts` — interrupted-run recovery and resume queuing.
- `runtime/src/channels/web/handlers/agent.ts` — web agent message/control processing path.
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
- Phase 1 baseline: `scope_raw_console_calls=77` with full guards passing.
- Added `runtime/src/utils/logger.ts` and `runtime/scripts/structured-logging-scope-metrics.ts` so the loop can measure ticket-scope raw console usage directly and later enforce it with `--check`.
- Migrated `runtime/src/runtime/*`, `runtime/src/channels/whatsapp.ts`, `runtime/src/channels/web.ts`, and `runtime/src/channels/web/workspace/file-service.ts` onto the structured logger path while preserving explicit quiet guards for expected teardown/transient cases.
- Converted `runtime/src/agent-pool.ts`, flipped the scope guard from metric-only to enforced, and drove `scope_raw_console_calls` to `0` while keeping full validation green.
- Phase 2 optimized `scope_files_using_structured_logger` from `10` to `15`; only the intentional low-level allowlist file `runtime/src/runtime/console-timestamps.ts` now remains outside the logger-import set.
- Phase 3 drove `scope_undocumented_quiet_catches` from `7` to `0` by either documenting expected fallbacks or surfacing them with warnings.
- Phase 4 now targets `adjacent_runtime_raw_console_calls` in the next ring of runtime/server modules around the original ticket scope.
- Initial hypothesis confirmed: a small repo-local structured logger plus a scope metric/check script lets us migrate critical runtime modules incrementally without waiting for a repo-wide logging rewrite.
