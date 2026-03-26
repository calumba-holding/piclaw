---
id: evaluate-go-rdp-frontend-for-piclaw-remote-display
title: Evaluate incorporating go-rdp's front-end into piclaw remote display
status: inbox
priority: medium
created: 2026-03-26
updated: 2026-03-26
target_release: later
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - web
  - remote-display
  - rdp
  - vnc
  - frontend
owner: pi
---

# Evaluate incorporating go-rdp's front-end into piclaw remote display

## Summary

Evaluate whether Piclaw should incorporate or adapt the front-end from
[`rcarmo/go-rdp`](https://github.com/rcarmo/go-rdp) for its remote-display/web
experience.

This should begin as an evaluation ticket, not an adoption commitment.

The goal is to understand:

- what the `go-rdp` front-end provides
- how it compares to Piclaw's current remote-display / VNC browser code
- whether it is useful as:
  - direct incorporation,
  - selective code/pattern borrowing,
  - a parallel RDP-specific surface,
  - or simply reference material

## Why

Piclaw already has browser-side remote-display infrastructure and a VNC pane:

- `runtime/web/src/panes/remote-display-protocol.ts`
- `runtime/web/src/panes/remote-display-decoder.ts`
- `runtime/web/src/panes/remote-display-socket.ts`
- `runtime/web/src/panes/remote-display-vnc.ts`
- `runtime/web/src/panes/vnc-pane.ts`

If `go-rdp` has a mature or better-structured front-end for remote desktop
rendering/input, it may be a useful source of ideas or reusable components.

## Acceptance Criteria

- [ ] Review `go-rdp`'s front-end architecture and browser/runtime assumptions.
- [ ] Identify what UI/runtime pieces it provides (canvas, input capture, protocol handling, auth/session assumptions, etc.).
- [ ] Compare it against Piclaw's current remote-display / VNC front-end architecture.
- [ ] Decide whether the best outcome is:
  - direct incorporation,
  - selective pattern/code adoption,
  - a dedicated RDP path,
  - or no action.
- [ ] If promising, outline the smallest viable follow-up ticket with explicit scope and risks.
- [ ] If not promising, document why.

## Test / Research Plan

- Review the upstream repo and identify the front-end/browser entry points.
- Compare protocol/render/input responsibilities with Piclaw's existing VNC path.
- Capture any concrete advantages:
  - better renderer architecture
  - better input model
  - better session/auth handling
  - easier protocol abstraction
- Note any blockers:
  - licensing
  - browser/runtime mismatch
  - backend coupling
  - overlapping/redundant abstractions

## Updates

### 2026-03-26
- Created from request to consider using `go-rdp`'s front-end in Piclaw.
- Initial framing is intentionally evaluation-first so Piclaw can compare it against the current remote-display/VNC stack before committing to adoption.

## Notes

- Prefer evaluating it against Piclaw's existing remote-display abstractions rather than as a completely standalone greenfield integration.
- If the front-end is promising, prefer a narrow follow-up ticket (for example: protocol abstraction reuse, input handling reuse, or a specific RDP pane spike) instead of a broad rewrite.
- This should explicitly account for whether Piclaw wants a generic remote-display substrate or a separate RDP-specific surface.

## Links

- `https://github.com/rcarmo/go-rdp`
- `runtime/web/src/panes/remote-display-protocol.ts`
- `runtime/web/src/panes/remote-display-decoder.ts`
- `runtime/web/src/panes/remote-display-socket.ts`
- `runtime/web/src/panes/remote-display-vnc.ts`
- `runtime/web/src/panes/vnc-pane.ts`
