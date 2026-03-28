---
id: decompose-web-app-shell-and-resume-lifecycle
title: Decompose web app shell and return-to-app lifecycle handling
status: done
priority: medium
created: 2026-03-15
updated: 2026-03-15
completed: 2026-03-15
target_release: next-minor
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
owner: pi
---

# Decompose web app shell and return-to-app lifecycle handling

## Summary

`piclaw/web/src/app.ts` has grown to roughly 2.7k lines and now mixes chat orchestration, branch/window management, SSE handling, return-to-app refresh logic, queue reconciliation, viewport/PWA recovery, and general UI shell state. The recent audit/refactoring pass extracted one low-risk helper (`ui/optional-api.ts`) but confirmed that further cleanup should happen as a dedicated follow-up rather than being buried inside a hygiene ticket.

## Acceptance Criteria

- [x] Extract at least one focused submodule/hook from `web/src/app.ts` without behavioural change.
- [x] Return-to-app / wake / resume lifecycle logic is grouped coherently instead of being scattered across the shell.
- [x] Queue reconciliation helpers stay isolated from unrelated viewport/windowing logic.
- [x] Tests cover any extracted helpers or hooks.
- [x] `bun run build:web` and relevant focused tests pass.

## Implementation Paths

### Path A — Lifecycle-first decomposition (recommended)
Extract the wake/resume/focus/pageshow/visibility handling into a dedicated UI helper/hook, then peel off another cluster if warranted.

### Path B — State-domain decomposition
Split `app.ts` by domain (branch/windowing, queue state, BTW/adaptive cards, shell lifecycle).

## Test Plan

- [x] Focused web tests for the extracted lifecycle helper
- [x] `bun run build:web`
- [x] Relevant queue/window/mobile viewport tests
- [x] `bun run quality`

## Definition of Done

- [x] One or more coherent helpers/hooks extracted
- [x] No behaviour regressions introduced
- [x] Audit ticket links back here as the intentional deeper follow-up

## Updates

### 2026-03-15
- Lane change: `20-doing` → `50-done` after completing the first lifecycle extraction tranche with focused tests, `bun run build:web`, and a full `bun run quality` pass.
- Extracted lifecycle helper module: `piclaw/web/src/ui/app-resume.ts`.
- `piclaw/web/src/app.ts` now delegates:
  - standalone webapp mode listener wiring to `watchStandaloneWebAppMode(...)`
  - return-to-app / visible-again refresh wiring to `watchReturnToApp(...)`
- Added focused regression coverage in `piclaw/test/web/app-resume.test.ts`.
- Validation evidence:
  - `bun test --max-concurrency=1 test/web/app-resume.test.ts test/web/mobile-viewport.test.ts test/web/chat-window.test.ts` → `22 pass, 0 fail`
  - `bun run build:web` → passed
  - `bun run quality` → passed
- Result: `web/src/app.ts` reduced from ~2691 lines to ~2638 lines; more importantly, the wake/resume listener cluster is now isolated instead of embedded in the shell body.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-15
- Lane change: `00-inbox` → `20-doing` to start the first concrete extraction immediately after the audit tranche was committed.
- Chosen first slice: extract webapp-mode and return-to-app listener wiring from `web/src/app.ts` into a dedicated lifecycle helper instead of leaving event wiring embedded in the shell.
- Goal for this tranche: one coherent helper module, focused tests, `bun run build:web`, then decide whether the ticket can close without forcing a larger shell rewrite.

### 2026-03-15
- Created during the post-release code audit after confirming `web/src/app.ts` had reached ~2691 lines and now mixes several distinct concerns.
- Explicitly spun out so the hygiene/audit pass can close with concrete low-risk wins instead of absorbing a broader shell rewrite.

## Notes

- This is intentionally a follow-up refactor ticket, not part of the same tranche as the current audit cleanup.

## Links

- `workitems/50-done/post-release-code-audit.md`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/ui/app-resume.ts`
- `piclaw/test/web/app-resume.test.ts`
