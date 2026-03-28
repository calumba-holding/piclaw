---
id: post-release-code-audit
title: Post-release code audit and refactoring pass
status: done
priority: medium
created: 2026-03-11
updated: 2026-03-15
completed: 2026-03-15
target_release: next-minor
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - tech-debt
  - quality
  - recurring
  - refactor
owner: pi
---

# Post-release code audit and refactoring pass

## Summary

After the v1.2.x feature sprint (extension system, editor, IPC media, provider usage), run a systematic audit and refactoring pass across the codebase. Focus on consolidating test patterns, removing dead code, tightening module boundaries, and reducing accumulated tech debt before the next feature cycle.

A recovered historical `plan.md` from git history shows that many of the large architecture/type-safety/JSDoc goals originally tracked for this wave are already complete. This ticket should therefore concentrate on the remaining actionable items rather than re-auditing finished work.

## Scope

### Carry-over from recovered plan: remaining actionable items

The recovered `plan.md` indicates these major areas were completed in the original refactor wave:
- broad web/runtime decomposition
- most `any`-removal and type-gate work
- exported JSDoc/module-header sweeps
- major security hardening tranches
- stale-dist enforcement and package hygiene guardrails

However, some of those areas should still be re-audited from a code-quality perspective rather than treated as permanently closed. This ticket should therefore distinguish between:

- **repeat audit required** — re-check earlier completed areas for drift, regressions, or newly introduced inconsistencies
- **implementation follow-through required** — residual work that still appears genuinely unfinished

So this is not a full restart of the old plan, but neither is it limited only to obviously unfinished items.

### Test consolidation
- [x] Audit all test files for consistent use of shared helpers (`setEnv`, `getTestWorkspace`, `createTempWorkspace`)
- [ ] Identify and merge overlapping test coverage where redundancy no longer carries clear regression value
- [ ] Standardise `beforeEach`/`afterEach` cleanup patterns (env restore, DB close, temp dir removal)
- [ ] Remove tests that only exercise trivial pass-through wiring when equivalent behavioural coverage already exists
- [x] Ensure every relevant test file imports `helpers.js` (or the current canonical equivalent) for global env setup

### Dead code and hygiene
- [x] Run unused-exports check (`check-unused-exports.ts`) and act on high-confidence results
- [x] Grep for `TODO`, `FIXME`, `HACK`, `XXX` — resolve, delete, or convert to tickets
- [x] Identify and remove dead code paths, stale feature toggles, or compatibility shims that no longer carry their weight
- [x] Identify and remove any feature-flagged code where the flag is always on/off
- [x] Remove leftover debug logging (`console.log`, `console.warn`) not behind a log-level guard
- [x] Review whether `src/channels/web/ui-context.ts` should remain as a compatibility/test adapter or can now be retired with justification documented either way
- [x] Clean up `/workspace/tmp` stale diffs/build artifacts/one-off scripts, or split that into a separate workspace-hygiene task if it proves too repo-external

### Repetition, code smells, and modular refactoring
- [x] Identify repetitive code blocks that can be collapsed behind small helpers without changing behaviour
- [x] Identify obvious code smells in high-churn files (oversized modules, repeated fallback wiring, repeated event-listener lifecycles, repeated fetch/guard patterns)
- [x] Extract at least one low-risk shared helper/module from a high-churn UI file as the first concrete tranche
- [x] Record deeper refactors that should become dedicated follow-up tickets instead of being bundled into this hygiene pass

### Module boundary tightening
- [x] Audit barrel exports (`src/db.js`, `src/extensions/index.ts`) for leaking internals
- [x] Check for circular imports across `src/` modules
- [x] Ensure `src/core/` modules have no upward dependencies into `src/channels/` or `src/extensions/`
- [x] Review `src/agent-pool/` for functions that should now be private to the module after earlier decomposition passes

### Documentation and audit follow-through
- [x] Update `docs/architecture.md` to reflect the current module layout after the completed refactor wave
- [x] Ensure `AGENTS.md` reflects current conventions
- [x] Verify the current coverage/quality bars are still documented accurately after recent work
- [x] Record any deferred deeper refactors as concrete follow-up tickets rather than leaving them implicit

### Repeat audits from the recovered plan
- [x] Re-audit architectural boundaries after the recent feature/release work to confirm earlier decomposition gains have not regressed.
- [x] Re-audit type quality in high-churn areas for newly introduced loose contracts, casts, or avoidable suppression.
- [x] Re-audit exported JSDoc/module-header consistency on newly touched seams rather than assuming the earlier sweep remains fully current.
- [x] Re-run quality-bar checks from the old plan (coverage, stale-dist, import boundaries, unused exports) and record any drift.

### Optional polish explicitly carried over from the recovered plan
- [ ] Continue opportunistic frontend decomposition of remaining large UI files (especially `workspace-explorer.ts` and other oversized view modules) only if it can be done without coupling to this hygiene pass
- [ ] Keep tranche-end validation anchored on `quality`, `make build-piclaw`, and coverage checks so the audit remains measurable

## Acceptance Criteria

- [ ] Audit scope is grouped into concrete execution chunks (tests, dead code/hygiene, repetition/smells/refactors, boundaries, docs, repeat audits, optional polish).
- [ ] The ticket explicitly distinguishes already-completed plan items, repeat-audit items, and true remaining implementation work.
- [ ] Quick wins vs deeper refactors are separated so the first pass stays tractable.
- [ ] At least one concrete low-risk refactor lands from this pass to prove the ticket is doing work, not only note-taking.
- [ ] Success is measurable via concrete checks (`quality`, unused exports, targeted cleanup, docs updates, coverage/validation checks).
- [ ] Follow-up tickets are created for any deeper refactors or regressions uncovered by the repeat audits.

## Implementation Paths

### Path A — Single pass (recommended for now)
One focused session: run the checklist top-to-bottom, commit in logical chunks.

Pros: Fast, keeps momentum.
Cons: May miss deeper structural issues.

### Path B — Module-by-module audit
Tackle one module per session (`db/`, `channels/web/`, `agent-pool/`, `extensions/`, `ipc`).

Pros: Thorough, easier to review.
Cons: Slower, risk of stalling mid-way.

## Recommended Path

Start with **Path A** for the quick wins that remain genuinely open after the recovered-plan review (test consolidation, dead code/hygiene, targeted boundary audits, docs refresh), then revisit deeper refactoring per **Path B** only where fresh evidence shows unfinished work.

## Test Plan

- [x] Focused web tests for the extracted optional API helper and mobile viewport helper
- [x] `bun run build:web`
- [x] `bun run quality`
- [x] Targeted audit commands recorded in `## Updates`

## Definition of Done

- [x] Audit findings are recorded with concrete evidence
- [x] At least one low-risk refactor landed during the pass
- [x] Deeper refactors were split into explicit follow-up tickets instead of being implied
- [x] Documentation drift found during the audit was corrected
- [x] Validation passed without reloading the running instance

## Updates

### 2026-03-15
- Lane change: `20-doing` → `50-done` after completing the audit tranche with recorded evidence, a concrete low-risk refactor, docs follow-through, and a clean validation pass without reloading.
- Final validation: `bun run quality` passed cleanly after the refactor/doc updates; focused web tests and `bun run build:web` remained green.
- Follow-up depth was split out intentionally instead of left implicit: `workitems/00-inbox/decompose-web-app-shell-and-resume-lifecycle.md`.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-15
- Lane change: `30-blocked` → `20-doing` to start the overdue refactoring pass now rather than leaving it parked behind an abstract next-minor window.
- Scope expanded to explicitly cover identifying dead code, repetitive code, code smells, and low-risk modular refactoring tranches.
- Initial audit tranche started in `/workspace/piclaw/piclaw`:
  - `bun run check:unused-exports` passed cleanly (`ok`, 48 allowlisted entries)
  - source-only `TODO` / `FIXME` / `HACK` / `XXX` scan found no live in-repo hits outside vendored/generated assets
  - debug logging inventory showed repeated warning/fallback patterns in `web/src/app.ts`
- Chosen first concrete refactor tranche: collapse repetitive optional-API fallback wiring in `web/src/app.ts` into a small shared helper module rather than leaving it inline.
- Started implementation:
  - new helper module: `piclaw/web/src/ui/optional-api.ts`
  - app wiring reduced in: `piclaw/web/src/app.ts`
  - focused regression coverage added in: `piclaw/test/web/optional-api.test.ts`
- Additional audit results:
  - circular dependency audit: `bunx madge --circular src/index.ts` → no circular imports found
  - upward-dependency audit: no `src/core/` / `src/runtime/` imports reaching up into `src/channels/` or `src/extensions/`
  - barrel audit: `src/db.ts` and `src/extensions/index.ts` remain explicit, non-star exports; no immediate leak regression found
  - `src/channels/web/ui-context.ts` reviewed and kept intentionally as a thin compatibility/test adapter over `UiBridge`
  - architecture docs refreshed to cover current built-in extension set and the newer web UI helper responsibilities
  - deeper refactor split out into follow-up ticket: `workitems/00-inbox/decompose-web-app-shell-and-resume-lifecycle.md`
- Test-helper spot audit:
  - helper import scan found broad existing use of `test/helpers.js` patterns across the suite (`37` matching helper imports)
  - no evidence of a fresh helper-fragmentation regression, so deeper test consolidation stays deferred rather than forced into this pass
- Validation evidence:
  - `bun test --max-concurrency=1 test/web/optional-api.test.ts test/web/queue-state.test.ts test/web/mobile-viewport.test.ts` → `8 pass, 0 fail`
  - `bun run build:web` → passed
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-12
- Board quality review: added rough acceptance criteria and clarified that the first pass should separate quick wins from deeper structural refactors.
- Recovered the deleted historical `plan.md` from git history and reviewed it.
- Folded the remaining actionable items from that plan into this ticket.
- Explicitly noted that many original plan goals are already complete, but some of those tranches should still be repeated as quality audits to check for drift/regressions after subsequent feature work.
- Moved to blocked for the next minor-release window.
- Marked as a recurring ticket to revisit for every minor release.

### 2026-03-11
- Created ticket after v1.2.2 release.

## Notes

- This is a hygiene pass, not a feature. No user-facing changes expected.
- Treat this as a recurring audit ticket that should be reopened/refreshed for every minor release.
- Consider running coverage report before and after to measure impact.
- First concrete target selected on 2026-03-15: repetitive optional-API fallback wiring in `web/src/app.ts`.
- Several checklist items in this pass were resolved as "audited, no action required" rather than by deleting code blindly; the point is to leave the tree cleaner and better justified, not merely smaller.

## Links

- `workitems/50-done/ipc-inline-media.md`
- `workitems/50-done/extension-system-refactor-for-editor-and-terminal.md`
- `workitems/00-inbox/decompose-web-app-shell-and-resume-lifecycle.md`
- `piclaw/scripts/check-unused-exports.ts`
