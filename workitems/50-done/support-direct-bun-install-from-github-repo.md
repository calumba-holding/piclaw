---
id: support-direct-bun-install-from-github-repo
title: Support direct Bun installation from the GitHub repository
status: done
priority: medium
created: 2026-03-19
updated: 2026-03-27
completed: 2026-03-27
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - packaging
  - install
  - bun
  - distribution
owner: pi
---

# Support direct Bun installation from the GitHub repository

## Summary

Make PiClaw installable as a first-class **Docker-free** path directly from the
GitHub repository via:

```bash
bun add -g github:rcarmo/piclaw
```

For v1, this is a **Bun-only** install path for supported environments
(Linux/macOS), and it should behave as closely as practical to the published
package:

- the `piclaw` CLI should run immediately,
- required web assets should already be present,
- bundled extensions/viewers should work,
- and the install must not require a manual build step.

The implementation should preserve the existing published-package flow and avoid
install-time network fetches, heavy postinstall work, or special privilege
requirements.

## Desired Behavior

After running:

```bash
bun add -g github:rcarmo/piclaw
```

in a fresh supported environment, the user should get:

- a working `piclaw` command in PATH,
- usable web assets already shipped with the installed package,
- working bundled extensions/viewers,
- clear failure if the environment is unsupported or packaging is incomplete,
- and no manual `bun run build`, repo patching, or extra install steps.

Minor layout differences from the published package are acceptable **only if**
they are documented and do not change the basic runtime contract.

## Acceptance Criteria

- [ ] `bun add -g github:rcarmo/piclaw` succeeds on supported Bun/Linux and Bun/macOS environments.
- [ ] `piclaw --help` works immediately after install with no manual build step.
- [ ] Required web assets are present and usable in the installed package.
- [ ] Bundled extensions/viewers required for normal runtime behavior work from the repo-installed package.
- [ ] The install path does not rely on install-time network fetches.
- [ ] The install path does not rely on heavy postinstall compilation/orchestration.
- [ ] Install failures are fast and explicit, with a clear error rather than a half-working install.
- [ ] The published package / current release install path continues to work unchanged.
- [ ] README install docs are updated for the repo-based Bun install path.
- [ ] A dedicated packaging/install note exists if needed to document repo-install caveats.
- [ ] Release notes mention the new repo-based Bun install path when it lands.
- [ ] Validation is performed in multiple clean instances/sandboxes, not just the dev workspace.

## Implementation Paths

### Path A — package metadata + committed distributable assets + smoke test (recommended)
1. Adjust `package.json` metadata (`bin`, `files`, entrypoints, and any pack hygiene needed) so repo installs contain the correct runnable payload.
2. Commit the required built/dist artifacts needed for the repo-installed package to work without a local build.
3. Make runtime path resolution tolerant of the repo-install layout where it differs from the published package.
4. Add install smoke tests in a clean container/runner.
5. Update README/install docs and any packaging note.

**Pros:**
- matches the chosen refinement direction exactly
- keeps the install path simple and predictable
- avoids install-time network/build surprises
- easy to validate with clean-runner smoke tests

**Cons:**
- increases repo size
- requires discipline around committed generated assets
- may need stronger stale-artifact checks in CI/quality flows

### Path B — repo-local install bundle layout with selective committed artifacts
1. Introduce a narrower install bundle inside the repo tree.
2. Point Bun repo installs at that curated payload rather than the current broad source tree.
3. Keep runtime path compatibility and smoke tests in step.

**Pros:**
- can bound repo churn more tightly
- may keep source/build separation cleaner

**Cons:**
- adds packaging indirection
- more moving pieces than the first slice needs
- diverges further from the current published-package layout

## Recommended Path

Path A — **fix package files and smoke test first**, shipping the required
committed distributable assets.

That is the lowest-risk route consistent with the refinement answers:

- no manual build step,
- no install-time network fetch,
- no heavy postinstall,
- and close alignment with the published package.

## Refinement Notes

| # | Answer |
|---|---|
| 1 | Problem now: provide a Docker-free alternative. |
| 2 | Primary users: both self-hosters and Bun CLI users. |
| 3 | Immediate success means: CLI runs, web assets present, bundled extensions work, no manual build. |
| 4 | MVP behavior: ship built artifacts. |
| 5 | Out of scope for v1: npm parity, Windows polish/support, developer source-install ergonomics, install-time build orchestration. *(inferred, then confirmed)* |
| 6 | In scope: `package.json`, build pipeline, release/package artifact layout, install docs, runtime paths, tests. |
| 7 | Constraints: Bun-only, Linux/macOS, no install-time network fetches, GitHub branch installs must work. |
| 8 | Failure behavior: fail fast with a clear error. |
| 9 | Storage/layout: minor differences from the published package are acceptable if documented. |
| 10 | Align with the published `piclaw` package as closely as possible. |
| 11 | Lowest-risk first slice: package files + smoke test. |
| 12 | Avoid in v1: npm parity, Windows polish, developer source-install ergonomics. |
| 13 | Artifact handling: commit required dist assets. |
| 14 | Input/output: input is `bun add -g github:rcarmo/piclaw` in a fresh supported environment; output is a working `piclaw` CLI with usable web assets and bundled extensions. *(inferred, then confirmed)* |
| 15 | Existing published-package behavior must keep working unchanged. |
| 16 | Performance constraints: reasonably fast install, no heavy postinstall, bounded repo growth is acceptable. |
| 17 | Security constraints: no install-time network fetches, no extra permissions/escalation, use trusted committed artifacts only. |
| 18 | Docs outputs: README install docs, release notes, and a dedicated packaging/install note if needed. |
| 19 | Test plan direction: install and validate in a test container/runner. |
| 20 | Done means it installs successfully on multiple instances/sandboxes. |

## Test Plan

- [ ] Add a clean-environment smoke test for:
  ```bash
  bun add -g github:rcarmo/piclaw
  piclaw --help
  ```
- [ ] Validate the repo install in at least one Linux container and one additional clean sandbox/instance.
- [ ] Validate that required web assets exist in the installed payload and the web UI starts without a manual build.
- [ ] Validate bundled extensions/viewers that depend on shipped assets still resolve correctly.
- [ ] Validate that the install path performs no install-time network fetches beyond the package fetch itself.
- [ ] Validate failure behavior in an unsupported/incomplete environment to ensure the error is clear.
- [ ] Run existing pack-hygiene / stale-dist checks and extend them if committed artifacts are added.

## Definition of Done

- [ ] Repo-based Bun install works via `bun add -g github:rcarmo/piclaw` on supported clean environments.
- [ ] `piclaw` runs immediately after install with no manual build.
- [ ] Required web assets and bundled extensions/viewers work from the repo-installed package.
- [ ] The published package path remains intact.
- [ ] Documentation for the repo-based Bun install path is published.
- [ ] Validation has been done on multiple instances/sandboxes.
- [ ] Any deferred scope (npm parity, Windows support, developer-oriented source install ergonomics) is split into follow-up tickets if still desired.

## Relevant Files

- `piclaw/package.json`
- `README.md`
- `piclaw/scripts/pack-hygiene.ts`
- `piclaw/scripts/check-stale-dist.ts`
- `piclaw/web/static/`
- `piclaw/dist/`
- `piclaw/src/index.ts`

## Updates

### 2026-03-27
- Metadata correction during board hygiene pass: this file is the canonical `50-done/` copy after stale-duplicate cleanup, so the front matter now matches the lane.
- No scope/implementation details changed in this pass; this was a board-consistency fix.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-19
- Created from a full refinement pass using Adaptive Cards.
- User direction locked: support a **Bun-first repo install**, not npm parity.
- User goal locked: provide a **Docker-free alternative**.
- Chosen first slice: package files + smoke test.
- Chosen artifact policy for v1: commit the required dist assets.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

- Current README strongly positions GHCR as the supported runtime path; landing this ticket will require updating that guidance without confusing the container-first story.
- Current `piclaw/package.json` points `bin.piclaw` at `src/index.ts`; the repo-install path may need metadata and/or packaged artifact changes to make the installed command behave like the published package.
- If committed generated artifacts become part of the solution, quality checks should guard against stale or incomplete repo-install payloads.
