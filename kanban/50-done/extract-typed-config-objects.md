---
id: extract-typed-config-objects
title: "Extract core/config.ts 45 flat constants into typed config objects"
status: done
priority: medium
created: 2026-03-23
updated: 2026-03-27
completed: 2026-03-27
tags:
  - refactor
  - quality
  - P2
  - quality-assessment
owner: pi
blocked-by: []
---

# Extract core/config.ts 45 flat constants into typed config objects

## Summary

`src/core/config.ts` exports 45 flat constants computed from env vars, CLI flags, and a JSON config file. It is imported by 38 files — the widest coupling surface in the codebase. Constants are accessed as bare module-level imports, making testing and runtime reconfiguration difficult.

## Scope

Group related constants into typed config objects:

```typescript
interface WebConfig {
  port: number;
  host: string;
  idleTimeout: number;
  tlsCert: string | null;
  tlsKey: string | null;
  totpSecret: string | null;
  totpWindow: number;
  sessionTtl: number;
  internalSecret: string | null;
  passkeyMode: "totp-fallback" | "passkey-only" | "totp-only";
  terminalEnabled: boolean;
  trustProxy: boolean;
}

interface AgentConfig { ... }
interface RemoteConfig { ... }
interface StorageConfig { ... }
```

Expose a `getConfig()` function or inject config objects as constructor parameters.

## Acceptance criteria

- [x] No more than 10 bare constant exports remain (truly global ones like `WORKSPACE_DIR`)
- [x] Remaining service-parameter injection / global-import cleanup is split into a focused follow-up ticket
- [x] Existing tests still pass
- [x] Config module has ≥ 50% test coverage

## Notes

- This is a prerequisite for proper unit testing — currently, changing config in tests requires manipulating module-level state
- Can be done incrementally (one config group at a time)

## Updates

- 2026-03-26: Landed a narrow remote-interop slice without widening scope. `runtime/src/core/config.ts` now exposes a frozen `REMOTE_INTEROP_CONFIG` object plus `getRemoteInteropConfig()`, and the low-risk remote consumers (`remote/service.ts`, `remote/service-operations.ts`, `remote/identity.ts`, `remote/ssrf.ts`) were rewired to use the typed object/getter while preserving the existing env/config precedence and current runtime payload shapes.
- Evidence: `artifacts/extract-typed-config-objects/summary.md`
- Validation path: `./scripts/audit-extract-typed-config-objects.sh`, then `bun run lint`, then `bun run typecheck`
- Existing config coverage evidence still holds after this slice: `./scripts/audit-core-config-keychain-coverage.sh` reported `config_pct=100` and `uncovered_lines=0` for `runtime/src/core/config.ts`.
- 2026-03-26 follow-up: extracted tool-output retention settings into `TOOL_OUTPUT_CONFIG` plus `getToolOutputConfig()` and rewired `runtime/startup.ts` to consume the typed object.
- 2026-03-26 follow-up: extracted `PUSHOVER_CONFIG`/`getPushoverConfig()` and `WHATSAPP_CONFIG`/`getWhatsAppConfig()`, rewired `runtime/startup.ts` and `channels/whatsapp.ts`, and extended config tests so grouped getters stay covered under both subprocess and plain-import paths.
- Existing config coverage evidence was refreshed after the grouped channel-config slice; `./scripts/audit-core-config-keychain-coverage.sh` is back to `config_pct=100` and `uncovered_lines=0`.
- 2026-03-26 follow-up: extracted `SESSION_STORAGE_CONFIG`/`getSessionStorageConfig()`, rewired the session-size warning path and auto-rotate path to use the grouped config, and kept the existing runtime env override behavior for auto-rotate thresholds in `agent-pool.ts`.
- 2026-03-26 follow-up: extracted `AGENT_RUNTIME_CONFIG`/`getAgentRuntimeConfig()`, rewired the low-risk timeout consumers (`agent-pool.ts`, `agent-pool/slash-command.ts`, `channels/web/handlers/agent.ts`), and updated the canonical audit so the plain-import config coverage test runs in a separate Bun process from the consumer regression tests.
- 2026-03-26 follow-up: extracted `RUNTIME_TIMING_CONFIG`/`getRuntimeTimingConfig()`, rewired the low-risk timing consumers (`runtime/bootstrap.ts`, `ipc.ts`, `task-scheduler.ts`, `task-scheduler-utils.ts`), and extended the canonical audit with existing runtime bootstrap/scheduler/IPC tests in a third Bun process.
- 2026-03-26 follow-up: extracted `WEB_SERVER_CONFIG`/`getWebServerConfig()`, rewired `runtime/src/channels/web.ts` to consume the grouped host/port/idle-timeout/TLS settings, and updated the config tests so CLI/env/TLS precedence is asserted through the grouped object.
- 2026-03-26 follow-up: extracted `WEB_RUNTIME_CONFIG`, `LOGGING_CONFIG`, and `ROUTING_CONFIG`; rewired the remaining low-risk web/auth/request-client consumers plus the trigger-pattern consumers; and extended the canonical audit with the existing passkey/TOTP/proxy/request-client tests.
- Existing config coverage evidence was refreshed again after the web-runtime/logging/routing slice; `./scripts/audit-core-config-keychain-coverage.sh` still reports `config_pct=100` and `uncovered_lines=0`.
- Bare constant exports in `runtime/src/core/config.ts` are now down to 10, meeting the first acceptance criterion while leaving only the path/session globals plus mutable identity scalars as flat exports.
- Remaining scope after the extraction/object-grouping pass was split into the focused follow-up ticket `kanban/20-doing/finish-config-injection-and-mutable-identity-cleanup.md`, so this ticket can close honestly on the extraction milestone.
- Closed on 2026-03-27 after merging the extracted config-slice work back to `main` in `bc3fbbc` (`Extract typed config object slices`) and validating the recorded audit artifact at `artifacts/extract-typed-config-objects/summary.md`.

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
