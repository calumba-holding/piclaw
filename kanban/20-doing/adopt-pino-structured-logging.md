---
id: adopt-pino-structured-logging
title: "Adopt structured logging and explicit error-handling guards"
status: doing
priority: high
created: 2026-03-23
updated: 2026-03-26
tags:
  - quality
  - observability
  - P2
  - quality-assessment
owner: pi
blocked-by: []
---

# Adopt structured logging and explicit error-handling guards

## Summary

The silent-catch audit removed empty `catch {}` and empty `.catch(() => {})` patterns, but it did not fully solve the broader error-handling problem. The repo still has a large tail of raw `console.*` calls, inconsistent warning/error payloads, and no shared rule for when code should:

1. **guard and return quietly** (`/* expected: ... */`),
2. **warn with context** (recoverable degradation), or
3. **error/fail fast** (critical path or invariant violation).

`pino` is already present in `package.json`, but it is not yet the standard logging path. Reuse this ticket as the next phase after the silent-catch audit: move from "no invisible swallows" to a consistent, explicit error-handling policy with structured logs and guardrails.

## Scope

1. Create a shared logger factory (for example `src/utils/logger.ts`) wrapping `pino`
2. Define explicit rules for:
   - expected teardown / race guards
   - degraded-but-recoverable warnings
   - critical-path errors that must surface clearly
3. Replace high-value `console.*` usage in critical paths first (`agent-pool`, `channels/web`, `channels/whatsapp`, DB/auth/runtime bootstrap)
4. Standardise warning/error payloads so logs include module + operation context
5. Add a lightweight guard against new raw `console.*` usage in server/runtime code, or explicitly allowlist the cases that remain justified
6. Align the post-audit catch-block logging sites with the new logger so they do not stall at ad-hoc `console.warn(...)`

### Immediate follow-up targets

| File | Why it matters |
|---|---|
| `runtime/src/agent-pool.ts` | session lifecycle, branch sync, side-prompt persistence, model/tool propagation |
| `runtime/src/channels/web.ts` | request lifecycle, SSE, side-prompt streaming, autoresearch/web control endpoints |
| `runtime/src/channels/whatsapp.ts` | connectivity, reconnect behaviour, outbound queue handling |
| `runtime/src/channels/web/workspace/file-service.ts` | upload/delete cleanup, user-visible workspace operations |
| `runtime/src/db/connection.ts` | DB init and persistence failure visibility |
| `runtime/src/runtime/*` | shutdown/restart/bootstrap behaviour |

## Acceptance criteria

- [ ] A shared structured logger path exists and is used by critical runtime/server modules
- [ ] Critical-path warning/error sites include module/operation context, not bare strings
- [ ] Expected race/teardown guards are documented consistently (`/* expected: ... */` or equivalent helper)
- [ ] New ad-hoc raw `console.log/warn/error` usage is prevented or explicitly allowlisted
- [ ] Error-handling guidance is written down clearly enough that future audits can distinguish guard/warn/error cases quickly
- [ ] The silent-catch follow-up sites migrated in this ticket no longer rely on inconsistent one-off logging patterns

## Notes

- This is the natural follow-on to `audit-silent-catch-blocks`: that audit improved visibility, but many changes still use ad-hoc `console.warn(...)` and comment-only justification.
- Spot review after the audit suggests the strongest improvements were in `agent-pool.ts`, `channels/web.ts`, `channels/web/workspace/file-service.ts`, and `channels/whatsapp.ts`; teardown-heavy terminal/VNC paths were mostly clarity improvements rather than behavioural changes.
- `pino` is already a dependency; no new logging package should be needed.

## Updates

### 2026-03-26
- Expanded the old pino-only ticket into a broader error-handling follow-up covering explicit guard/warn/error policy, structured logging, and migration of the post-audit warning sites.
- Promoted from `10-next` to `20-doing` after reviewing the silent-catch cleanup results and identifying the remaining inconsistency around ad-hoc `console.*` logging.
- Immediate focus is the critical-path set: `runtime/src/agent-pool.ts`, `runtime/src/channels/web.ts`, `runtime/src/channels/whatsapp.ts`, `runtime/src/channels/web/workspace/file-service.ts`, `runtime/src/db/connection.ts`, and `runtime/src/runtime/*`.

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Related: `audit-silent-catch-blocks`
- Blocks: `codebase-quality-cleanup-2026` (master ticket, P2 follow-up)
