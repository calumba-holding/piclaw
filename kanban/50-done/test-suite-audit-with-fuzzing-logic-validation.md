---
id: test-suite-audit-with-fuzzing-logic-validation
title: Test suite audit: pass-based fuzzing + logic validation
status: done
priority: high
created: 2026-03-19
updated: 2026-03-26
completed: 2026-03-26
target_release: next
estimate: XL
risk: medium
tags:
  - work-item
  - kanban
  - testing
  - fuzzing
  - quality
  - logic-validation
owner: pi
---

# Test suite audit: pass-based fuzzing and logic validation

## Summary

This original XL umbrella ticket has been **retired in favor of smaller follow-up tickets**.

It previously proposed a structured, repeatable multi-pass audit of the Piclaw test suite covering deterministic correctness, fuzzing, and invariant validation. That scope was too large to function well as a single `Next` ticket.

The work is now split into:

- `kanban/10-next/baseline-quality-and-deterministic-test-sweep.md`
- `kanban/10-next/fuzz-agent-control-and-command-routing.md`
- `kanban/10-next/fuzz-web-control-plane-and-extension-hooks.md`
- `kanban/10-next/validate-queue-session-threading-invariants-and-db-replay.md`

The original content is retained below as historical context for how the split was derived.

Create a structured, repeatable **multi-pass audit** of the Piclaw test suite that validates both:

1. deterministic correctness (expected behavior),
2. adversarial robustness (fuzzing), and
3. architectural logic invariants (cross-module consistency).

The audit should be executed **in passes** and include a built-in checklist for each major code section.

## Goals

- Detect gaps in existing coverage, especially around queue/session/threading and branch/session lifecycle behavior.
- Add/execute fuzz-oriented tests for parsing, command routing, and state transitions.
- Validate logic invariants that may not be strongly represented in classic example-based tests.
- Produce a one-pass execution log + section-level completion evidence.
- Keep the same canonical DB-backed behavior (`PICLAW_DB_IN_MEMORY=1` for test runs unless explicitly doing manual DB replay checks).
- Use repo-root commands for packaged build/quality flows, and `runtime/` only when running subtree-local Bun tests directly.

## Passes

### Pass 1 — Baseline gates
- Run:
  - `cd /workspace/piclaw`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:pack-hygiene`
  - `bun run check:stale-dist`
  - `bun run check:import-boundaries`
  - `bun run check:unused-exports`
  - `bun run check:hook-tdz`

**Pass 1 success criteria**
- [ ] No lint/type/import/dependency hygiene regressions.
- [ ] No stale dist artifacts.

### Pass 2 — Deterministic behavior sweep
- Run full deterministic tests, grouped by code section:
  - `bun run test`
  - `bun test test/channels/web/web-channel.test.ts`
  - `bun test test/agent-control/parser.test.ts test/agent-control/agent-control-handlers.test.ts`
  - `bun test test/agent-pool/session-auto-rotation.test.ts test/agent-pool/agent-pool.test.ts`
  - `bun test test/web/queue-state.test.ts`
  - `bun test test/channels/web/recovery.test.ts`
  - `bun test test/channels/web/message-write-flows.test.ts`

**Pass 2 success criteria**
- [ ] Existing test expectations hold.
- [ ] No pass flakiness >5 retries.

### Pass 3 — Fuzzing pass
- Add/execute targeted fuzz tests for high-risk state/parse boundaries.

Suggested fuzz targets:
- Command parsing and canonicalization
  - `src/agent-control/`
  - `src/agent-control/command-parsers.ts`
  - `src/agent-control/command-registry.ts`
- Thread/state transitions
  - `src/channels/web/threading.ts`
  - `src/channels/web/chat-run-control.ts`
  - `src/agent-pool/session.ts`
- Message path and queue transitions
  - `src/channels/web/handlers/agent.ts`
  - `src/agent-control/agent-control-handlers.ts`

Execution commands (to be implemented/ran as part of this pass):
- `bun test test/agent-control/parser.test.ts`
- `bun test test/channels/web/chat-run-control.test.ts`
- `bun test test/agent-control/agent-control-handlers.test.ts`
- If a property/fuzz harness is added, run it with explicit seed and iteration caps.

**Pass 3 success criteria**
- [ ] Fuzz inputs produce no unhandled exceptions.
- [ ] No invariant violations for parse/state reducers.
- [ ] Seed-replay path can reproduce any failure.

### Pass 4 — Logic validation pass (invariant matrix)
- Run focused assertions across modules where control flow can silently drift.
- Validate invariants with SQL + API-level checks where applicable.

Execution commands:
- `bun test test/channels/web/http-dispatch-agent.test.ts`
- `bun test test/channels/web/agent-message-handler.test.ts`
- `bun test test/channels/web/message-write-flows.test.ts`
- Optional: targeted DB replay checks for `web:default` and at least one branch chat.

**Pass 4 success criteria**
- [ ] Queue/thread invariants remain coherent under retries.
- [ ] Branch state is isolated per `chat_jid`.
- [ ] Recovery and queued follow-up hydration remains stable.

### Pass 5 — Integration + regression packaging
- Run end-to-end pass for user-facing regressions and document outcomes.
- Capture reproducible evidence snapshots in logs and screenshots (where UI path is involved).

Execution commands:
- `bun test test/channels/web/browser-chat-isolation.optional.test.ts` (if browser optional suite enabled)
- `bun test test/channels/web/http-dispatch-agent.test.ts`
- Manual smoke: open session branch, queue, steer, cancel, rotate, reload, re-open.

**Pass 5 success criteria**
- [ ] No open queue/session/thread regressions.
- [ ] Behavior aligns with current spec after branch and reload.

## Built-in checklist per code section

### A) Core command/control layer (`src/agent-control`, `src/agent-control-handlers`, `src/agent-pool`)
- [ ] Parse/normalize edge-cases for `/theme`, `/tint`, `/queue`, `/steer`, `/session-rotate`.
- [ ] Fuzz malformed/overlong/Unicode-heavy command strings.
- [ ] Ensure unknown commands return stable typed errors across all paths.
- [ ] Validate idempotence for repeated command invocations.

### B) Channels/web runtime (`src/channels/web/*`, `src/web.ts`, `src/channels/web/handlers/*`)
- [ ] Verify deterministic event ordering for active/inactive stream transitions.
- [ ] Fuzz state transitions for queued/active/streaming/retry modes.
- [ ] Confirm `/agent/*` control plane remains invariant under malformed payloads.
- [ ] Validate queue-stack and cursor updates under concurrent follow-up operations.

### C) Session + persistence layer (`src/agent-pool/session.ts`, `src/db/*`, `src/extensions/session-rotation.ts`, `src/channels/web/threading.ts`)
- [ ] Fuzz session ID / branch ID combinations and cross-chat `chat_jid` boundaries.
- [ ] Assert message threading invariants in both success and failure paths.
- [ ] Validate branch isolation and stale-thread root handling.
- [ ] Run SQL checks for `messages`, `chat_cursors`, `chat_branches` after targeted flows.

### D) Extensions + skills (`src/extensions/*`, `/workspace/.pi/skills/*`, `src/extensions/index.ts`)
- [ ] Execute extension integration smoke for message hooks and control hooks.
- [ ] Fuzz extension option payloads for malformed command metadata.
- [ ] Verify hook order/side effects remain deterministic.
- [ ] Confirm no silent regression in extension registration after refactor.

### E) Web UI (`web/src/*` and `web/static/*`)
- [ ] Fuzz autocomplete and command rendering for edge-case input values.
- [ ] Validate compose queue behavior against rapid and bursty input.
- [ ] Verify queue-state UI updates do not lag after cancel/steer/remove.
- [ ] Confirm theme/tint command rendering and feedback behavior remains deterministic.

### F) Cross-cutting tooling/scripts (`scripts/*`, `test/*`)
- [ ] Ensure test helper utilities cover both happy-path and error-path fixtures.
- [ ] Fuzz fixture generators do not leak resources (DB/FS/socket).
- [ ] Validate teardown/cleanup hooks for every test run class.
- [ ] Ensure new fuzz/test artifacts are removed or versioned consistently.

## Deliverables

- [ ] New or updated fuzz test files for each section above.
- [ ] Consolidated pass report (timestamped log + pass pass/fail table).
- [ ] Evidence package:
  - test output snippets,
  - failures + reproduction seeds,
  - DB query outputs for any logic anomalies.
- [ ] A final status note in ticket comments:
  - PASS/FAIL per pass,
  - open risk items,
  - owner follow-up tasks.

## Definition of Done

- [x] Original XL umbrella scope reviewed.
- [x] Scope split into smaller executable follow-up tickets.
- [x] Original ticket retired so active work can proceed through the smaller children.

## Updates

### 2026-03-26
- Closed as an umbrella/splitting ticket rather than as a single executable work item.
- Lane change: `10-next` → `50-done`.
- Split into the following smaller tickets:
  - `kanban/10-next/baseline-quality-and-deterministic-test-sweep.md`
  - `kanban/10-next/fuzz-agent-control-and-command-routing.md`
  - `kanban/10-next/fuzz-web-control-plane-and-extension-hooks.md`
  - `kanban/10-next/validate-queue-session-threading-invariants-and-db-replay.md`
- Rationale: the original ticket mixed baseline gates, deterministic suites, fuzzing, invariant validation, DB replay checks, and integration evidence into one XL item, which made prioritization and execution too coarse.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Links

- `scripts/audit-session-turn-management-regression.sh`
- `runtime/src/agent-control/parser.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/agent-control/agent-control-handlers.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/src/channels/web/threading.ts`
- `runtime/src/channels/web/chat-run-control.ts`
- `runtime/src/db/messages.ts`
- `runtime/src/db/chat-cursors.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/web/src/components/compose-box.ts`
- `runtime/web/src/app.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- `runtime/test/channels/web/http-dispatch-agent.test.ts`
- `runtime/test/agent-control/parser.test.ts`
- `runtime/test/agent-control/agent-control-handlers.test.ts`
- `runtime/test/web/queue-state.test.ts`
