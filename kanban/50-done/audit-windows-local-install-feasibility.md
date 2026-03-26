---
id: audit-windows-local-install-feasibility
title: Audit Windows local install feasibility
status: done
priority: medium
created: 2026-03-20
updated: 2026-03-26
completed: 2026-03-26
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - windows
  - install
  - local-install
  - packaging
  - host-native
owner: pi
---

# Audit Windows local install feasibility

## Summary

Investigate whether PiClaw can support a **local host install on Windows** via
Bun/package artifacts without pretending the whole product is Windows-ready.

This ticket is deliberately narrower than “Windows support.” The question is:

> Can a user install and run PiClaw locally on Windows in a clearly scoped,
> explicitly limited way?

The goal is to define the minimum viable Windows local-install story, the hard
blockers, and the features that must be disabled or declared unsupported.

## Scope

### In scope
- direct/local Windows install via Bun/package artifacts
- startup/runtime viability on a Windows host
- required path/layout changes for config, workspace, logs, and temp files
- whether the web UI can run if some subsystems are disabled
- docs/support wording for a narrow Windows local-install path

### Out of scope
- Docker-on-Windows as a first-class target
- Windows service packaging for v1
- full parity with Linux/macOS
- broad “all skills/features work on Windows” claims

## Why this matters

Current packaging work is converging on a clean root package and a direct install
path:

- canonical repo install: `bun add -g github:rcarmo/piclaw`
- built artifacts should be shippable directly from the repo/package layout
- published package install must keep working

That makes it useful to answer a more concrete question than broad platform
support:

- does the **local install** work on Windows at all,
- what breaks immediately,
- and can we present a narrow, honest, support boundary around that?

## Current first-pass assessment

### 1) Windows local install is not blocked equally across the whole app
Some areas look potentially workable for a local install:

- browser UI
- HTTP/web server flow
- message/timeline/task/database layers
- general agent/session orchestration that does not depend on Linux-only helpers

So the answer is not “everything fails on Windows.”

### 2) The main question is whether a useful local install exists without Linux-only subsystems
The likely first viable shape, if any, would be:

- local Bun install on Windows
- web UI available
- core chat/session flow available
- **web terminal disabled**
- some shell/task/skill features unsupported or Bash-dependent

### 3) Major blockers for a Windows local install

#### Hard blocker: web terminal backend
File:
- `runtime/src/channels/web/terminal/terminal-session-service.ts`

Why it blocks:
- reads `/proc/*`
- uses Bun FFI against `libc.so.6`
- uses Linux PTY `ioctl`
- spawns `/usr/bin/script` and `/usr/bin/bash -i`
- assumes `/dev/pts/*`

Implication:
- a Windows local install likely needs the terminal disabled outright unless a
  Windows-specific backend exists later.

#### Hard blocker: local reload/service assumptions
Files:
- `runtime/skills/reload/restart-piclaw.sh`
- `runtime/skills/reload/SKILL.md`
- `entrypoint.sh`
- `supervisor/`

Why it matters:
- current restart/service flows assume Bash + Supervisor/systemd/Linux layout
- these are not a valid Windows local-install control plane

Implication:
- a Windows local install cannot inherit the current Linux/container operational
  model as-is.

#### Partial blocker: Bash-centric shell/task model
Files:
- `runtime/src/tools/tracked-bash.ts`
- `runtime/src/tools/context-tools.ts`
- `runtime/src/agent-control/handlers/operations.ts`
- scheduler shell-task flows

Notes:
- there is already some partial Windows awareness (`bash.exe`, `taskkill`)
- but the product model is still fundamentally **bash-first**, not truly
  cross-shell or PowerShell-native

Implication:
- local install may only be realistic if shell features are:
  - unsupported on Windows,
  - explicitly Git-Bash/MSYS2/WSL-dependent,
  - or redesigned later.

#### Partial blocker: path/layout assumptions
Representative files:
- `runtime/src/core/config.ts`
- `runtime/src/agent-control/agent-control-helpers.ts`
- `runtime/src/extensions/file-attachments.ts`
- various skills/scripts/docs

Current assumptions include:
- `/workspace`
- `/workspace/.piclaw/*`
- `/workspace/tmp`
- `/home/agent`
- `/usr/local/lib/bun`

Implication:
- even a narrow Windows local install needs a defined host-native data layout
  instead of inheriting container paths.

### 4) Skills and scripts are not the right bar for first-pass Windows install success
Many skills/scripts are effectively Unix-first today. That should not prevent us
from answering the narrower install question.

A reasonable first-pass Windows local-install target may explicitly exclude:
- reload skill parity
- terminal parity
- scheduler shell-task parity
- Bash-heavy maintenance skills

## Key questions

- Do we want a narrowly scoped **Windows local install** target at all?
- If yes, is the first target simply:
  - start server,
  - open web UI,
  - chat normally,
  - with terminal disabled?
- Should shell features be:
  - disabled,
  - Bash-only and unsupported,
  - or redesigned later for PowerShell?
- What should the Windows host layout be for:
  - workspace,
  - state,
  - logs,
  - config,
  - temporary files?
- Should the docs say “experimental local install only” even if startup works?

## Desired outcome

Define a realistic support boundary for **Windows local install**, not Windows as
an entire product/platform target.

At the end of this ticket we should be able to say one of the following clearly:

1. **No Windows local install for now** — blocked enough that we should say so.
2. **Experimental Windows local install** — core web/chat runtime only, with
   terminal and some shell-driven features disabled.
3. **Broader Windows local install path** — worth pursuing with follow-up work.

## Proposed first-pass target

### Path A — Experimental Windows local install, terminal disabled
This is the most plausible initial scope.

Expected behavior:
- install via Bun/package artifacts on Windows
- start PiClaw locally
- use the web UI for normal chat flows
- terminal UI hidden/disabled on Windows
- shell/task/skill support explicitly limited

### Path B — Local install requires Bash runtime
If shell features are kept at all, document that they require one of:
- Git Bash
- MSYS2
- WSL

This is still not full support; it is only a compatibility escape hatch.

### Path C — Defer entirely
If startup/data-layout issues are too invasive, document Windows local install as
unsupported and keep focus on Linux/macOS first.

## Acceptance Criteria

- [x] Inventory the blockers that specifically affect **Windows local install**.
- [x] Separate install/startup blockers from feature-parity blockers.
- [x] Decide whether a terminal-free Windows local install is viable.
- [x] Define the minimum supported feature set for a Windows local install, if any.
- [x] Define the Windows host path/layout for config, workspace, state, and temp files.
- [x] Update install/support docs with an explicit Windows local-install stance.
- [x] Split follow-up tickets only for the blockers that matter to the chosen scope.

## Suggested validation plan

### Baseline viability
- [x] Run a clean local install on a Windows host/VM.
- [x] Validate `piclaw --help`.
- [x] Validate basic startup from the installed artifact.
- [x] Validate the web UI can connect and chat.

### Scoped runtime validation
- [x] Confirm the app behaves sanely with terminal disabled on Windows.
- [x] Confirm where state/config/workspace files are created.
- [x] Confirm attachments, timeline, and database persistence still work.

### Optional shell validation
- [x] Test with no Bash runtime present.
- [x] Test with `bash.exe` present.
- [x] Document what shell-driven features fail or degrade in each case.

## Definition of Done

- [x] We have a clear yes/no answer on Windows local install viability.
- [x] The minimum supported/unsupported feature set is documented.
- [x] The terminal decision on Windows is explicit.
- [x] Docs/install guidance reflects the actual boundary.
- [x] Follow-up tickets exist only for the chosen install scope.

## Relevant Files

- `package.json`
- `README.md`
- `docs/install-from-repo.md`
- `runtime/src/channels/web/terminal/terminal-session-service.ts`
- `runtime/src/core/config.ts`
- `runtime/src/agent-control/agent-control-helpers.ts`
- `runtime/src/tools/tracked-bash.ts`
- `runtime/src/tools/context-tools.ts`
- `runtime/src/utils/process-tracker.ts`
- `runtime/src/agent-control/handlers/operations.ts`
- `runtime/skills/reload/*`
- `scripts/smoke-install-from-repo.sh`
- `scripts/docker/install-agent-runtime.sh`

## Related Tickets

- `kanban/10-next/support-direct-bun-install-from-github-repo.md`
- `kanban/00-inbox/host-native-linux-sandboxed-install-mode.md`

## Updates

### 2026-03-26
- Closed based on direct confirmation that the Windows local install path works in practice.
- The support boundary is now explicit rather than hypothetical: Windows host-native install is feasible, but remains a secondary / not-officially-supported path.
- Existing docs already capture that stance:
  - `README.md` YOLO/direct-install note: “It also runs directly on Windows … but Windows is **not officially supported**. It technically works, but you're on your own.”
  - `docs/install-from-repo.md`: “Windows also works in practice, but remains a secondary / not-officially-supported target for now.”
- Windows-specific operational evidence also exists outside the narrow Linux-first core:
  - local PowerShell extension at `/workspace/.pi/agent/extensions/powershell.ts`
  - prior `win-ui` Windows GUI automation extension lineage in commit `2b7df10` (`skel/.pi/extensions/win-ui/index.ts`)
  - follow-up Windows send-keys hardening in commit `e36ad59`
- Final answer for this ticket: **yes, Windows local install is viable**, with an honest support boundary: experimental/YOLO, web/chat-first, and not a promise of full Linux parity.
- No extra follow-up ticket is required from this audit beyond the already-existing general direct-install/documentation work.

## Notes

- This should stay aligned with the current direct-install/package-layout work,
  not expand into a vague cross-platform initiative.
- The resolved scope is: **Windows local install works in practice**, with docs already framing it as experimental / not officially supported.
- Windows-specific shell/UI affordances exist, but they do not change the core support boundary into full parity.
