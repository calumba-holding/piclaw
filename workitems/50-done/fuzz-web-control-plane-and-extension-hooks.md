---
id: fuzz-web-control-plane-and-extension-hooks
title: Fuzz web control-plane payloads and extension hook behavior
status: done
priority: medium
created: 2026-03-26
updated: 2026-03-26
completed: 2026-03-26
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - testing
  - fuzzing
  - web
  - extensions
owner: pi
---

# Fuzz web control-plane payloads and extension hook behavior

## Summary

Add focused fuzz/robustness coverage around malformed web control-plane payloads
and extension hook integration so regressions surface before they reach the web
runtime.

This is a split follow-up from the older XL umbrella ticket
`test-suite-audit-with-fuzzing-logic-validation.md`.

## Scope

Primary targets:

- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/src/channels/web/http-dispatch-agent.ts`
- extension registration / hook ordering paths

## Acceptance Criteria

- [x] Malformed `/agent/*` payloads are covered by focused tests.
- [x] Extension hook order and side effects remain deterministic under test.
- [x] Fuzzed/invalid control-plane inputs do not produce unhandled exceptions.
- [x] Any newly discovered integration failures are fixed or split into follow-ups.

## Test Plan

- [x] Extend `runtime/test/channels/web/http-dispatch-agent.test.ts`
- [x] Extend `runtime/test/channels/web/agent-message-handler.test.ts`
- [x] Add or extend targeted extension integration tests under `runtime/test/extensions/` or equivalent
- [x] Record the payload classes/seed strategy used during the pass

## Definition of Done

- [x] Web control-plane robustness coverage exists for malformed payloads.
- [x] Extension hook determinism is validated in tests.
- [x] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the web control-plane / extension-hook fuzzing slice.
- Pulled into `20-doing` for an autoresearch-assisted pass focused on deterministic, seed-replayable malformed-payload coverage for `/agent/*` web control-plane routes and extension hook ordering/integration behavior.
- Experiment framing: build a canonical fuzz/robustness harness and replay artifact path first, then widen payload classes and hook-order assertions while keeping the touched web/extension tests green.
- Same loop lint/test/fix criteria apply: sandboxed run, iterative repair on lint/typecheck/test failures before speculative widening, explicit seed/iteration controls, and replayable artifacts for any failing payload class.
- Added canonical harness entrypoint `bun run audit:web-control-plane-fuzz` / `runtime/scripts/web-control-plane-fuzz-audit.ts` with env controls `PICLAW_FUZZ_SEED`, `PICLAW_FUZZ_ITERATIONS`, `PICLAW_FUZZ_REPLAY_CASE`, and `PICLAW_FUZZ_ARTIFACT_DIR`.
- Current artifact path: `artifacts/web-control-plane-fuzz/` (`latest.json`, per-run summary JSON, and per-failure replay artifacts when gaps are found).
- Current seed strategy: deterministic corpus uses `PICLAW_FUZZ_SEED + caseId`; route families cycle by `caseId % 15` and each family chooses malformed payload classes from a seeded PRNG so failures are replayable by case id.
- Hardened shared malformed-JSON handling for web control-plane object bodies and added targeted tests for `/agent/default/message`, `/agent/thought/visibility`, `/agent/respond`, queue remove/steer, branch fork/rename/prune/restore, peer-message, adaptive-card action, side-prompt, side-prompt stream, autoresearch stop/dismiss, and built-in extension `before_agent_start` ordering determinism.
- Tightened the audit CLI lifecycle so the canonical fuzz entrypoint exits cleanly after writing metrics/artifacts; this removed the earlier autoresearch benchmark timeout without changing the fuzz corpus semantics.
- Added direct helper-level malformed-body coverage for `handleThoughtVisibilityRequest()` and `handleAgentRespondRequest()` so `null`/non-object payloads now fail with typed 400s instead of risking handler exceptions.
- Added a corpus-manifest coverage invariant in the audit path so replay metadata and route-family coverage cannot silently drift apart from the expected concrete `/agent/*` POST control-plane surface.
- Expanded extension determinism coverage to `context` hook side effects and fixed a real nested-sanitization bug in `file-attachments`: invalid image blocks inside later-message `tool_result` content are now sanitized deterministically instead of being skipped once an earlier message had already toggled the shared modified flag.
- Added an audit invariant that checks the normal seeded multi-case run actually samples the full expected `/agent/*` route family set, preventing silent drift between the scheduler modulo logic and the intended control-plane coverage surface.
- Expanded adaptive-card malformed payload coverage to include invalid `post_id` shapes and unsupported `action.type` values, so malformed JSON-adjacent action structures now produce explicit stable typed failures instead of relying only on missing-field checks.
- Closed on `main` after merging the canonical harness/tests in commit `7afd5d8` (`Add web control-plane fuzz audit`) and validating the recorded canonical artifact at `artifacts/web-control-plane-fuzz/summary-seed-424242-iter-96.json` with `web_fuzz_gap_count=0`, `payload_classes_run=96`, `replayable_failures=0`, `extension_hook_order_failures=0`, `unhandled_exceptions=0`, and `typed_failure_gaps=0`.

## Links

- `workitems/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/src/channels/web/http-dispatch-agent.ts`
- `runtime/test/channels/web/http-dispatch-agent.test.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
