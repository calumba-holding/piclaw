---
id: host-native-linux-sandboxed-install-mode
title: Design a host-native Linux sandboxed install mode
status: inbox
priority: medium
created: 2026-03-19
updated: 2026-03-19
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - packaging
  - linux
  - sandbox
  - bwrap
  - systemd
  - host-native
owner: pi
---

# Design a host-native Linux sandboxed install mode

## Summary

Investigate and design a **host-native Linux install mode** for PiClaw that does
not require Docker, but still runs inside a meaningful sandbox.

The likely baseline is:

- a dedicated Unix user,
- a hardened `systemd` unit,
- optional `bwrap`/Bubblewrap isolation for filesystem and process boundaries,
- and host firewall policy for network control.

This should complement the experimental Bun repo-install path rather than
replace the container-first production story immediately.

## Goal

Define a safe and practical way to run PiClaw directly on a vanilla Linux host
while limiting:

- writable filesystem scope,
- host process visibility,
- ambient privileges,
- and accidental host damage from tools/subprocesses.

## Questions to answer

- Is `bwrap` the right default sandbox primitive, or should hardened `systemd`
  alone be the first pass?
- Which paths need to stay writable for PiClaw to function normally?
- Which built-in tools/viewers/extensions break under a tighter host sandbox?
- How much outbound network access does a practical host-native install need?
- What should the supported host layout be for config, workspace, logs, and
  secrets?
- Should the host-native path be framed as experimental even after the Bun repo
  install path lands?

## Desired Behavior

A user should be able to install PiClaw on a supported Linux host and run it as
an isolated service without needing Docker, while keeping the operational model
clear and supportable.

The first version does **not** need to solve every hardening problem. It should
pick a sensible default isolation model and document what is and is not
contained.

## Candidate implementation shape

### Path A — systemd-hardened service first
- dedicated `piclaw` user
- hardened `systemd` unit (`NoNewPrivileges`, `ProtectSystem`,
  `ReadWritePaths`, etc.)
- documented config/workspace layout
- optional reverse proxy guidance

### Path B — systemd + `bwrap` wrapper (recommended investigation target)
- everything in Path A
- plus a `bwrap` launcher to restrict filesystem/process scope further
- writable binds only for config/workspace/state
- read-only runtime/binary/library binds

### Path C — fully offline/local-only sandbox profile
- stronger network isolation (`--unshare-net` or equivalent)
- only for local/offline/self-hosted-tool scenarios
- likely a follow-up, not the default

## Acceptance Criteria

- [ ] Document a recommended host-native Linux sandbox model.
- [ ] Define required writable paths and runtime environment variables.
- [ ] Define whether `bwrap` is required, optional, or deferred.
- [ ] Identify which built-in PiClaw features are expected to work in the sandbox.
- [ ] Identify known breakage/limitations under tighter sandboxing.
- [ ] Provide a draft launcher/service example (`systemd`, optionally `bwrap`).
- [ ] Clarify network expectations and whether firewall guidance is part of v1.
- [ ] Link the outcome back to the Bun repo-install work.

## Test Plan

- [ ] Validate on at least one vanilla Linux host or VM.
- [ ] Validate a dedicated-user install with isolated config/workspace paths.
- [ ] Validate startup, web UI access, and at least one model/provider path.
- [ ] Validate failure modes when sandbox rules are too strict.
- [ ] Validate that data persists only in the intended writable paths.

## Definition of Done

- [ ] A concrete supported design exists for host-native Linux sandboxing.
- [ ] Example service/launcher configuration exists.
- [ ] Limitations are explicit.
- [ ] Follow-up tickets are split for any deferred hardening or feature gaps.

## Links

- `workitems/10-next/support-direct-bun-install-from-github-repo.md`
- `README.md`
- `docs/install-from-repo.md`
- `Dockerfile`
- `entrypoint.sh`

## Notes

- `bwrap` is attractive for filesystem/process isolation, but it is not the
  whole solution for network policy.
- For host-native installs, `systemd` may be the more supportable primary
  control plane even if `bwrap` is used underneath.
- This should stay aligned with the current container/runtime path assumptions
  rather than inventing a totally separate product model.
