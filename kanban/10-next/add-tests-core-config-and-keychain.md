---
id: add-tests-core-config-and-keychain
title: "Add tests for core/config and secure/keychain (0-3% coverage)"
status: next
priority: high
created: 2026-03-23
updated: 2026-03-23
tags:
  - tests
  - coverage
  - P1
  - quality-assessment
owner: pi
blocked-by: []
---

# Add tests for core/config and secure/keychain (0-3% coverage)

## Summary

Two critical modules have near-zero test coverage:

| Module | Src Lines | Test Lines | Coverage |
|---|---:|---:|---|
| `core/` (config.ts) | 768 | 25 | 3% |
| `secure/` (keychain.ts) | 304 | 0 | 0% |

`core/config.ts` exports 45 constants and is imported by 38 files — it's the most-depended-on module in the codebase. `secure/keychain.ts` handles encrypted secret storage.

## Scope

### core/config.ts
- Test env var parsing (port, timeout, boolean flags)
- Test fallback chains (CLI → env → config file → default)
- Test edge cases (missing env, invalid values, NaN ports)

### secure/keychain.ts
- Test CRUD operations (list, get, set, delete)
- Test encryption/decryption round-trip
- Test missing master key behavior
- Test entry type handling (token, password, basic, secret)

## Acceptance criteria

- [ ] `core/` test ratio ≥ 50%
- [ ] `secure/` test ratio ≥ 60%
- [ ] Tests use isolated temp databases, not the live store
- [ ] No mocking of `process.env` that leaks between tests

## Notes

- Config testing may require process-level isolation (env vars are global)
- Keychain tests should use an in-memory SQLite database
- Also consider adding tests for `utils/` (currently 20% — QR engine at 586 lines is untested)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
