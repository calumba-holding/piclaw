---
id: audit-exported-jsdoc-coverage-and-comment-quality
title: Audit exported JSDoc coverage and comment quality on active seams
status: doing
priority: medium
created: 2026-03-26
updated: 2026-03-26
target_release: next
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - docs
  - jsdoc
  - quality
  - review-gate
owner: pi
blocked-by: []
---

# Audit exported JSDoc coverage and comment quality on active seams

## Summary

Run a focused documentation-quality pass on newly touched and high-churn TypeScript seams so exported API surface meets the project’s actual review bar for JSDoc coverage and comment quality.

This is **not** a generic “write more comments” ticket. It is specifically about:

- exported TypeScript API surface,
- documentation consistency on public contracts,
- and enforcing the existing review gate that implementation tickets should satisfy before moving from `doing` to `review`.

## Why

Our working quality bar has been:

- every **exported** symbol in new or modified `.ts` files must have JSDoc,
- exported interfaces/types need docs on the type **and each property**,
- exported classes need docs on the class **and each public method**,
- exported functions need purpose + `@param` / `@returns`,
- re-exports/barrel files do not require JSDoc,
- internal/private helpers are encouraged but not gated.

We also expect comment quality, not just comment presence:

- explain **what** a symbol does, not line-by-line implementation
- document important side effects where relevant
- keep comment wording short, specific, and stable under refactor

That bar is described in:

- `/workspace/.pi/skills/kanban-management/SKILL.md`

and reinforced by prior Piclaw audit/history tickets.

## Objective

Confirm that active/high-churn exported TypeScript seams either already meet the JSDoc gate or are brought up to that standard, with explicit evidence recorded.

## Quality Bar (explicit)

### Exported symbols that must be documented

- exported functions
- exported classes
- exported interfaces
- exported types
- exported constants/singletons/config objects

### Required level by symbol type

| Symbol type | Minimum bar |
|---|---|
| Exported interface / type | `/** One-line purpose. */` on the type **plus every property documented** |
| Exported class | `/** One-line purpose. */` on the class **plus every public method documented** |
| Exported function | `/** Purpose. @param / @returns descriptions. */` |
| Exported constant | `/** One-line purpose. */` |
| Internal/private helpers | Encouraged, not gated |
| Re-exports / barrel `index.ts` | Not required |

### What comment quality means

Document:

- **purpose** — what it does, not how it is implemented internally
- **parameters** — `@param` for each non-trivial parameter
- **return value** — `@returns` when non-obvious
- **side effects** — event dispatch, DOM mutation, state changes, persistence, network, etc.
- **examples** — optional, only when useful

Avoid:

- trivial restatements of the symbol name
- line-by-line implementation narration
- stale implementation details that will drift during refactors

## Scope

Prioritize active/high-churn or public-contract-heavy seams first.

Suggested starting set:

- `runtime/src/channels/web.ts`
- `runtime/src/agent-pool.ts` and `runtime/src/agent-pool/`
- `runtime/src/extensions/`
- `runtime/src/channels/web/handlers/`
- `runtime/web/src/panes/`
- `runtime/web/src/ui/` for exported helpers/contracts

This ticket may create smaller follow-up tickets if a single subsystem has a large documentation gap.

## Acceptance Criteria

- [ ] All newly touched exported TS symbols in scope have JSDoc meeting the bar above.
- [ ] Exported interfaces/types have property docs where required.
- [ ] Exported classes have docs on public methods where required.
- [ ] Re-export barrels are not needlessly cluttered with fake documentation.
- [ ] At least one concrete audit command/evidence path is recorded.
- [ ] Any major remaining gaps are split into explicit follow-up tickets instead of left implicit.

## Audit / Test Plan

- [ ] Audit exported symbols in the chosen scope with a grep/script-assisted pass.
- [ ] Record before/after findings in `## Updates`.
- [ ] Run the normal validation relevant to touched files (at minimum typecheck / targeted tests where needed).
- [ ] Use the checklist below during the pass:
  - [ ] All exported symbols have JSDoc
  - [ ] Interface/type properties documented
  - [ ] Public class methods documented

### Suggested audit commands

```bash
cd /workspace/piclaw
rg -n "^export " runtime/src runtime/web/src -g '*.ts'
rg -n "/\*\*" runtime/src runtime/web/src -g '*.ts'
```

Use more targeted checks per directory as needed.

## Definition of Done

- [ ] The audited scope satisfies the JSDoc/comment-quality bar.
- [ ] Evidence is recorded in `## Updates`.
- [ ] Any large remaining gaps are split into follow-up tickets.
- [ ] Ticket can honestly say the documented review gate is enforceable on the audited seams.

## Updates

### 2026-03-26
- Created after clarifying that the intended next quality ticket was a **JSDoc/comment-quality audit**, not additional config/keychain test work.
- Explicitly codifies the quality bar we had been applying informally/internally via the kanban-management skill and prior review gating.
- Moved directly to `20-doing` as the next documentation-quality audit pass.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Links

- `/workspace/.pi/skills/kanban-management/SKILL.md`
- `kanban/50-done/post-release-code-audit.md`
- `kanban/30-blocked/codebase-quality-cleanup-2026.md`
- `docs/quality-assessment-2026-03-23.md`
