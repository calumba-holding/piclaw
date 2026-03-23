# PiClaw Codebase — Modularity & Quality Report Card

**Date:** 2026-03-23  
**Scope:** `runtime/src/` (server), `runtime/web/src/` (client), `runtime/test/`, `runtime/skills/`

---

## Executive Summary

PiClaw is a **~85K-line TypeScript codebase** (35K server, 22K client, 26K test, 2K skills) with **211 source files**, **73 web files**, and **176 test files** across **1,123 tests**.

The architecture is broadly well-structured with clear module boundaries, excellent documentation coverage, and strong test ratios in most areas. However, there are **two dominant god-files**, a **leaky barrel pattern** in the DB layer, **inconsistent error handling**, and a **monolithic web channel class** that will resist future refactoring. The client side has similar concentration issues.

---

## Scorecard

| Category | Grade | Notes |
|---|:---:|---|
| **Module boundaries** | B | Good top-level separation; web channel internals are tangled |
| **File size discipline** | C | Two 1400+ line files; 54 files at `web/` root level |
| **God-class risk** | D | `WebChannel` (1595 lines) and `AgentPool` (1438 lines) do too much |
| **Dependency direction** | B+ | Clean layering mostly; one upward dep in `ipc.ts → web/media-service` |
| **Barrel / re-export hygiene** | B- | `db.ts` barrel exists but 6 modules bypass it directly |
| **Test coverage ratio** | B+ | 75% overall; `core/` at 3%, `secure/` at 0%, `utils/` at 20% |
| **Test suite health** | B | 1118/1123 pass; 3 failures (stale count assertion + terminal mock) |
| **Type safety** | A- | Only 91 `any` usages and 22 `as any` casts in 35K server lines |
| **Error handling** | C | 188 silent `catch {}` blocks vs 96 named `catch(e)` — 2:1 swallow ratio |
| **Documentation** | A | 97% of files have JSDoc headers; 1,294 doc blocks total |
| **Logging** | C- | 127 raw `console.*` calls, no structured logger; `pino` imported but unused |
| **Naming consistency** | B+ | kebab-case files, clear service suffixes, predictable patterns |
| **Circular dependencies** | A- | No cycles detected; `ipc.ts → MediaService` is the only odd cross-cut |
| **Skill & extension isolation** | A | Extensions are self-contained factories; skills are standalone scripts |
| **Client (web/) structure** | C+ | `app.ts` at 3,571 lines; `workspace-explorer.ts` at 2,345 lines |
| **CSS maintainability** | C | Single 5,942-line `styles.css` with no preprocessor or modules |

---

## Detailed Findings

### 1. God Files — The Top Priority

| File | Lines | Exports | Methods | Problem |
|---|---:|---:|---:|---|
| `src/channels/web.ts` | 1,595 | 2 | ~60 | HTTP server + auth + TLS + WS + SSE + routing + queued follow-ups — all in one class |
| `src/agent-pool.ts` | 1,438 | 8 | ~15 + 9 standalone | Session management, tool creation, turn tracking, branch registration, forking, prompt timeout — all in one class |
| `web/src/app.ts` | 3,571 | — | — | Client-side app entry is a megafile |
| `web/src/components/workspace-explorer.ts` | 2,345 | — | — | File browser component |

**Recommendation:** Extract `WebChannel` into a composition of services (it already delegates to many, but owns the wiring). Split `AgentPool` into session-lifecycle, tool-factory, and turn-coordinator modules.

### 2. Web Channel Internal Sprawl

`src/channels/web/` contains **91 files** totalling **12,378 lines** plus the parent `web.ts` at 1,595. There are 54 files at the immediate `web/` level with no sub-grouping:

```
src/channels/web/          54 files, 6,653 lines (flat)
src/channels/web/http/      7 files, 2,165 lines
src/channels/web/handlers/  5 files, 1,492 lines
src/channels/web/workspace/ 6 files, 1,297 lines
src/channels/web/terminal/  3 files,   367 lines
src/channels/web/vnc/       3 files,   292 lines
```

**Recommendation:** Group the 54 flat files into sub-directories: `auth/`, `sse/`, `messaging/`, `theming/`, `cards/`, `media/`.

### 3. Error Handling

| Pattern | Count | Concern |
|---|---:|---|
| `catch { }` (silent) | 188 | Errors swallowed with no logging |
| `catch (e) { ... }` (named) | 96 | Errors at least referenced |
| Ratio | 2:1 | Most errors are invisible |

Many silent catches are in file-stat, JSON-parse, or cleanup paths where swallowing is defensible, but the lack of any telemetry means failures are invisible.

**Recommendation:** Audit all `catch {}` blocks. Replace with `catch { /* expected: <reason> */ }` for intentional swallows, or add logging for unexpected paths.

### 4. Test Coverage Gaps

| Module | Src Lines | Test Lines | Ratio | Status |
|---|---:|---:|---:|---|
| `core/` | 768 | 25 | 3% | ⚠️ Config module barely tested |
| `secure/` | 304 | 0 | 0% | ⚠️ Keychain has zero tests |
| `utils/` | 1,685 | 351 | 20% | ⚠️ QR engine (586 lines) untested |
| `db/` | 3,393 | 1,393 | 41% | Moderate |
| `agent-control/` | 3,920 | 1,967 | 50% | Adequate |
| `channels/` | 14,342 | 9,998 | 69% | Good |
| `extensions/` | 3,248 | 3,393 | 104% | ✅ Excellent |
| `agent-pool/` | 848 | 1,123 | 132% | ✅ Excellent |

**3 test failures** exist in the current suite:
- `factories array has expected length` — stale count after `send_dashboard_widget` was added
- 2 terminal session tests — mock/stub issue

### 5. Configuration Module (core/config.ts)

610 lines exporting **45 constants** computed from env vars, CLI flags, and a JSON config file. Every module that needs a config value imports directly from `config.ts`. This creates a wide, flat coupling surface.

**Recommendation:** Group related constants into typed config objects (`WebConfig`, `AgentConfig`, `RemoteConfig`, `AuthConfig`) and pass them as constructor/function parameters rather than module-level imports.

### 6. Dependency Direction

The layering is clean for the most part:

```
core/config ← db/ ← agent-pool ← channels/ ← runtime/
                  ← extensions
                  ← remote/
```

**One violation:** `src/ipc.ts` imports `MediaService` from `channels/web/`, creating an upward dependency from infrastructure to channel layer.

**Recommendation:** Extract the media-write concern into `db/` or a shared service layer.

### 7. Barrel Consistency

- `src/db.ts` barrel exists and re-exports all DB modules ✅
- `src/agent-control/index.ts` barrel exists ✅
- `src/extensions/index.ts` barrel exists ✅
- **No barrel** for `agent-pool/`, `channels/`, `utils/`, `remote/`, `runtime/`, `core/` — consumers import sub-paths directly
- 6 modules bypass the `db.ts` barrel (remote/, secure/, channels/web/) — minor but inconsistent

### 8. Logging

No structured logging framework is in use. 127 raw `console.*` calls scattered across 31 files. `pino` is in `package.json` but only imported in 2 files (auth-gateway, whatsapp) and not consistently used.

**Recommendation:** Adopt pino consistently; create a per-module logger factory.

### 9. Client-Side Concerns

| File | Lines | Concern |
|---|---:|---|
| `web/src/app.ts` | 3,571 | Monolithic app entry |
| `web/src/components/workspace-explorer.ts` | 2,345 | File browser |
| `web/src/components/compose-box.ts` | 1,899 | Input component |
| `web/src/components/post.ts` | 1,085 | Message rendering |
| `web/static/css/styles.css` | 5,942 | Single CSS file |

**Recommendation:** Break `app.ts` into lifecycle, routing, and state modules. Split `styles.css` into component-scoped files or adopt CSS modules.

---

## Refactoring Priority Matrix

| Priority | Item | Effort | Impact |
|:---:|---|:---:|:---:|
| **P0** | Split `WebChannel` class | High | High — unblocks all web work |
| **P0** | Split `AgentPool` class | Medium | High — session + turn + tools |
| **P1** | Fix 3 test failures | Low | Medium — CI health |
| **P1** | Audit 188 silent catch blocks | Medium | Medium — debuggability |
| **P1** | Add tests for `secure/keychain` and `core/config` | Low | Medium — safety net |
| **P2** | Adopt pino structured logging | Medium | Medium — observability |
| **P2** | Group `channels/web/` flat files into sub-dirs | Low | Medium — navigability |
| **P2** | Extract config into typed objects | Medium | Medium — testability |
| **P3** | Split `web/src/app.ts` | High | Medium — client maintainability |
| **P3** | Split `styles.css` | Medium | Low — cosmetic |
| **P3** | Fix `ipc.ts → MediaService` dependency violation | Low | Low — hygiene |

---

## Overall Grade: **B**

The codebase is well-documented, reasonably well-tested (75% test ratio), type-safe (< 0.3% `any` rate), and has clean dependency layering. The main risk is **concentration** — two god-classes own too much responsibility, and the web channel's flat file layout makes it hard to reason about boundaries. Fixing the top two P0 items would move this to a solid **B+/A-**.
