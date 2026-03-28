---
id: create-flint-instance-for-multi-instance-experiments
title: Create a Flint instance for multi-instance experiments
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: later
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - infra
  - multi-instance
  - experimentation
  - flint
owner: pi
---

# Create a Flint instance for multi-instance experiments

## Summary

Create a separate "Flint" instance to use as a clean second node for
multi-instance PiClaw experiments.

The goal is not merely to duplicate the current instance, but to have an
explicitly named secondary environment that can be used for:

- cross-instance IPC testing
- remote interop pairing flows
- multi-agent / multi-instance product experiments
- safe validation of instance-to-instance UX, naming, trust, and routing

## Why

Several recent and planned features become easier to validate with a real second
instance instead of a mocked peer:

- cross-instance IPC / remote interop
- explicit peer identity and trust establishment
- branch/chat ideas that may later grow into cross-instance collaboration
- mailbox-style asynchronous delivery between instances
- testing operator-facing setup and failure modes from both sides

A dedicated Flint instance would provide a stable peer for repeatable tests and
notes, rather than ad hoc one-off environments.

## Questions to answer

- Should Flint be another local/containerised PiClaw instance, or a small remote
  test deployment?
- Should it share any infrastructure with the current instance, or remain fully
  isolated?
- What is the minimum setup needed to exercise remote interop realistically?
- Should it have its own canonical identity, avatar, and instance notes?
- Should it be wired into a repeatable make/script/bootstrap path?

## Acceptance Criteria

- [ ] Decide the intended role of the Flint instance.
- [ ] Define the minimum reproducible setup path.
- [ ] Capture canonical naming/identity expectations for the instance.
- [ ] Identify the first concrete experiments it should support.
- [ ] Create a follow-up implementation/setup ticket if warranted.

## Notes

Likely first use cases:

- pairing and revocation checks for remote interop
- instance-to-instance message handoff experiments
- mailbox-based asynchronous IPC concepts
- trust/fingerprint/operator approval UX validation

## Updates

### 2026-03-16
- Ticket created from a new idea request during the API/SSE and inter-instance planning work.
- Framed as a lightweight infrastructure/product-experiment idea rather than an immediate build task.

## Links

- `piclaw/docs/cross-instance-ipc.md`
