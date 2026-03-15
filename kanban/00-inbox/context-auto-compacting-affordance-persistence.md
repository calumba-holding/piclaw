---
id: context-auto-compacting-affordance-persistence
title: Persist the context auto-compacting affordance state
status: inbox
priority: medium
created: 2026-03-15
updated: 2026-03-15
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - ux
  - compaction
  - persistence
  - session
owner: pi
---

# Persist the context auto-compacting affordance state

## Summary

The UI affordance around **context auto-compacting** should preserve its state
across reloads/reconnects so it does not feel transient, misleading, or easy to
lose during normal web use.

This ticket tracks defining what exactly should persist, where that state should
live, and how it should be restored so the compaction affordance remains
trustworthy and comprehensible after refresh, restart, reconnect, or resumed
sessions.

## Problem Statement

A compaction-related affordance that appears only ephemerally can create user
confusion:

- the user may see that compaction is available or imminent, then lose the hint after reload
- a dismissed or acknowledged affordance may reappear unexpectedly
- a pending compaction-related state may not survive reconnect even when the underlying session context still warrants it
- the UI can appear out of sync with the real session/context state

Because context growth and compaction are long-lived session concerns, the
associated affordance should behave more like persisted session UI state than a
purely transient toast.

## Scope

### In scope
- Define the **affordance state model**, including which of these must persist:
  - visibility
  - dismissed/acknowledged state
  - warning/escalation level
  - timestamp or last-seen metadata
  - session/chat association
- Implement the chosen persistence layer and reset semantics.
- Restore the affordance consistently after:
  - hard reload
  - SSE reconnect
  - Supervisor/service restart
  - resumed session rotation / compaction-related transitions
- Ensure the affordance reflects the **current effective context/session state**, not stale cached assumptions.

### Out of scope
- Reworking the underlying compaction engine itself
- Full redesign of all status/toast surfaces
- New session-rotation policies unrelated to the affordance behavior

## Refined direction

### Chosen model

Use a **hybrid persistence model**:

- **backend truth** decides whether the compaction affordance is currently warranted
- **browser-local state** stores local UI memory such as dismissal / seen state

### Chosen reset rule

A dismissed affordance becomes eligible to show again on the **next threshold crossing**.

This means:
- dismissing the current warning should suppress repeat noise for the same condition
- a fresh threshold transition should re-open eligibility to show the affordance again
- the UI should not stay permanently suppressed across future meaningful context growth

### Why this is the recommended shape

#### Why not browser-local only
- it can lie after reload/reconnect
- it can drift from the real session/context state
- it behaves poorly across multiple clients or browser profiles

#### Why not backend-only
- it over-centralizes lightweight UI memory
- it makes simple per-browser dismissal state heavier than necessary
- it removes useful local polish behavior that does not need to be shared globally

### Practical implementation shape

#### Backend-owned truth
The backend should expose enough state for the web UI to determine:
- whether the auto-compacting affordance is currently warranted
- which chat/session it applies to
- the current threshold/warning level or equivalent trigger generation

#### Browser-local memory
The frontend should store only lightweight UI memory such as:
- whether the user dismissed the current affordance instance
- which chat/session the dismissal applied to
- the last seen trigger generation / threshold-crossing marker

### Preferred first slice

1. Surface a backend truth signal for whether the affordance is currently warranted.
2. Add browser-local dismissal memory keyed by chat/session plus trigger generation.
3. Restore the affordance on reload only when:
   - backend truth still says it is warranted, and
   - the current trigger generation is not dismissed locally.
4. Clear local dismissal automatically on the next threshold crossing.

## Acceptance Criteria

- [ ] The auto-compacting affordance uses the chosen **hybrid** model:
  - backend truth for whether it is currently warranted
  - browser-local state for dismissal / seen memory
- [ ] Its behavior after reload/reconnect is deterministic and documented.
- [ ] A dismissed affordance does not reappear spuriously for the same trigger generation.
- [ ] A new threshold crossing makes the affordance eligible to show again.
- [ ] If the underlying session/context state still warrants the affordance after reload, it restores correctly unless locally dismissed for the current trigger generation.
- [ ] The affordance remains scoped to the correct chat/session context.
- [ ] Persistence does not make the UI lie after a compaction, rotation, or context reset.
- [ ] Regression coverage exists for the chosen persistence behavior.

## Remaining design questions

- What is the smallest reliable backend signal for “affordance warranted now”:
  - existing `/state`-derived data,
  - status payload enrichment,
  - or a dedicated compactness/threshold field?
- Should local dismissal be keyed by:
  - chat only,
  - chat + session file,
  - or chat + backend trigger generation?
- Does session rotation preserve the same affordance trigger generation, or should a new session boundary implicitly reset it?
- Is one warning level enough for v1, or do we need multiple escalation levels immediately?

## Test Plan

- [ ] Add web/UI tests covering hybrid restoration behavior.
- [ ] Add backend/state tests for the “affordance warranted now” truth signal.
- [ ] Validate transitions for:
  1. threshold reached / affordance shown
  2. user dismisses the affordance locally
  3. page reloads while backend truth still says it is warranted
  4. SSE reconnects while the same trigger generation is still active
  5. next threshold crossing occurs
  6. affordance becomes eligible to show again
  7. compaction happens and the affordance clears or downgrades correctly
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw`.

## Definition of Done

- [ ] Hybrid persistence model implemented
- [ ] Threshold-crossing reset rule implemented
- [ ] Backend truth signal and browser-local dismissal memory are both documented
- [ ] Reload/reconnect behavior validated
- [ ] Regression coverage added
- [ ] `bun run quality` passes

## Updates

### 2026-03-15 (refinement)
- Refined live with the user using Adaptive Card decision points in the web UI.
- Chosen persistence direction: **hybrid**.
  - backend truth for whether the affordance is warranted now
  - browser-local dismissal / seen-state memory for UI polish
- Chosen default reset rule: **next threshold crossing**.
- Ticket now reflects a concrete first implementation slice rather than a purely open-ended design prompt.

### 2026-03-15
- Created from user request to explicitly track persistence for the context auto-compacting affordance.
- Initial framing assumes this is primarily a UX/state-coherence issue tied to longer-lived session/context state.

## Notes

- Prefer truth derived from real session/context state over purely cosmetic frontend memory where possible.
- Keep the affordance aligned with existing session rotation and compaction semantics.
- Avoid reintroducing noisy or sticky warnings that outlive the condition they represent.

## Links

- `piclaw/src/agent-control/handlers/info.ts`
- `piclaw/src/session-rotation.ts`
- `piclaw/src/agent-pool.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/status.ts`
- `piclaw/web/src/ui/status-duration.ts`
