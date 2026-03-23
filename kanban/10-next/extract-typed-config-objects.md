---
id: extract-typed-config-objects
title: "Extract core/config.ts 45 flat constants into typed config objects"
status: next
priority: medium
created: 2026-03-23
updated: 2026-03-23
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

- [ ] No more than 10 bare constant exports remain (truly global ones like `WORKSPACE_DIR`)
- [ ] Config objects are passed as parameters to services, not imported as globals
- [ ] Existing tests still pass
- [ ] Config module has ≥ 50% test coverage

## Notes

- This is a prerequisite for proper unit testing — currently, changing config in tests requires manipulating module-level state
- Can be done incrementally (one config group at a time)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
