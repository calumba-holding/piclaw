---
id: mailbox-system-for-inter-instance-ipc
title: Add a mailbox system for inter-instance IPC
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-28
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - ipc
  - remote-interop
  - multi-instance
  - mailbox
owner: pi
---

# Add a mailbox system for inter-instance IPC

## Summary

Design a mailbox-style asynchronous delivery layer for inter-instance IPC.

Instead of assuming every cross-instance action must be a synchronous request /
response exchange, introduce a model where one PiClaw instance can leave work,
messages, proposals, or queued payloads for another instance to pick up,
inspect, accept, reject, or process later.

## Why

A mailbox model could make inter-instance IPC more resilient and product-shaped
than pure RPC-style interaction.

Potential benefits:

- tolerate peers being offline or temporarily unreachable
- separate delivery from execution/approval
- make consent/review flows more natural
- give operators an inspectable queue of inbound/outbound requests
- support deferred multi-instance collaboration rather than only immediate
  request/response calls

This aligns well with the existing PiClaw direction of explicit queueing,
recovery, append-only state, and operator-visible workflow.

## Questions to answer

- Should mailboxes be local-only persisted queues, peer-addressed network
  queues, or both?
- Should mailbox entries be cryptographically signed like the current remote
  interop requests?
- Is a mailbox entry closer to a message, a proposal, a task, or a generic
  envelope?
- How should expiry, retry, revocation, and acknowledgement work?
- What should be visible in the UI versus stored only at the protocol layer?
- Should mailbox entries integrate with current remote interop pairing and
  trust policy, or remain a distinct higher-level feature?

## Candidate v1 shape

A useful first cut might be:

- signed envelope
- sender instance ID
- recipient instance ID
- type (`message`, `proposal`, `task`, `handoff`)
- created/expiry timestamps
- optional thread/conversation correlation IDs
- delivery status (`queued`, `delivered`, `seen`, `accepted`, `rejected`,
  `expired`)
- append-only audit trail

## Acceptance Criteria

- [ ] Document the intended mailbox model and scope.
- [ ] Decide whether it extends remote interop or sits above it.
- [ ] Define a minimal message/envelope schema.
- [ ] Identify persistence and retry semantics.
- [ ] Create a follow-up implementation ticket if the design looks worthwhile.

## Notes

This should be evaluated against existing work in:

- `piclaw/docs/cross-instance-ipc.md`
- queue semantics in the web chat/runtime
- append-only or auditable persisted state patterns already used elsewhere

A mailbox model may turn out to be the right abstraction for later multi-agent /
multi-instance collaboration rather than trying to force everything through live
interactive calls.

## Updates

### 2026-03-28
- Lane change: `30-blocked` → `00-inbox` via web blocked-card decision.
- Blocked-lane outcome recorded from the adaptive-card submission: **Move to Inbox**.
- The ticket reads as a research/design idea with open framing questions rather than a currently blocked implementation task.

### 2026-03-28
- Card submission accepted with decision `inbox`.
- Lane change: `30-blocked` → `00-inbox` because this is better treated as a deferred design idea than as an actively blocked implementation.
- The idea remains intentionally uncommitted pending broader inter-instance IPC prioritization.

### 2026-03-16
- Ticket created from a new idea request during broader inter-instance planning.
- Positioned as a design/research item first, not yet an implementation commitment.

## Links

- `piclaw/docs/cross-instance-ipc.md`
- `piclaw/workitems/00-inbox/create-flint-instance-for-multi-instance-experiments.md`
