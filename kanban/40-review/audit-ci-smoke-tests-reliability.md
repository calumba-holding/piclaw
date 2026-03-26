---
id: audit-ci-smoke-tests-reliability
title: Audit CI smoke tests for reliability and usefulness
status: review
priority: high
created: 2026-03-25
updated: 2026-03-26
target_release: next
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - ci
  - docker
  - testing
owner: pi
---

# Audit CI smoke tests for reliability and usefulness

## Summary

The Docker publish workflow smoke tests are taking 90+ minutes and may be
hanging. Audit them for reliability, usefulness, and timeout safety.

## Problem

The current smoke test step runs 6 separate `docker run` commands per
architecture (AMD64 and ARM64) after each image build:

1. `bun --version` — verify pinned Bun version
2. `restic version` — verify pinned restic version
3. `strings $(command -v restic) | grep azure.Config` — verify restic has Azure support compiled in
4. `pi --version` — verify pi CLI is installed and runnable
5. `piclaw --help` — verify piclaw CLI is installed and produces help output
6. Version/content assertions on each output

### Observed issues

- The v1.6.5 publish run has been stuck on "Smoke test" for 90+ minutes
  despite both images building and pushing successfully.
- Likely culprit: `pi --version` or `piclaw --help` may block waiting for
  TTY/stdin, or trigger slow initialization (model registry, extension
  loading, etc.) that doesn't terminate cleanly in a headless `docker run`.
- Each `docker run --rm` is a cold start — pulls layers, starts container,
  runs command, tears down. Six of these sequentially is slow even when
  nothing hangs.
- No `timeout` on any of the `docker run` commands — a hang blocks the
  entire pipeline indefinitely (until GitHub's 6-hour job limit).

### Concerns about usefulness

- `bun --version` and `restic version` are quick and useful.
- `strings | grep azure.Config` is clever but fragile — depends on binary
  layout and could false-negative on stripped/UPX builds.
- `pi --version` may trigger extension/model discovery that takes
  unpredictable time or hangs without a config directory.
- `piclaw --help` may attempt to start the server or load resources.
- None of the tests verify the image actually *serves HTTP* — which is
  the only thing that matters for a deployment image.

## Proposed improvements

### 1. Add timeouts to every `docker run`

```yaml
docker run --rm --platform linux/amd64 --timeout 60 "$IMAGE_REF" bun --version
```

Or wrap with shell `timeout`:

```bash
timeout 60 docker run --rm ...
```

### 2. Replace `pi --version` and `piclaw --help` with existence checks

```bash
docker run --rm "$IMAGE_REF" sh -c 'test -x "$(command -v pi)" && test -x "$(command -v piclaw)"'
```

Fast, deterministic, no risk of blocking.

### 3. Consider a single container run instead of six

```bash
docker run --rm "$IMAGE_REF" sh -c '
  bun --version &&
  restic version &&
  test -x "$(command -v pi)" &&
  test -x "$(command -v piclaw)"
'
```

One cold start instead of six.

### 4. Add an actual HTTP health check (optional)

```bash
docker run -d --name smoke -p 18080:8080 "$IMAGE_REF"
timeout 30 sh -c 'until curl -sf http://localhost:18080/health; do sleep 2; done'
docker rm -f smoke
```

This is the only test that proves the image actually works.

### 5. Consider making smoke tests non-blocking

If the images are already pushed, a smoke test failure shouldn't prevent
the multi-arch manifest from being created. Make smoke tests `continue-on-error: true`
and report results without blocking the publish pipeline.

## Acceptance Criteria

- [x] No smoke test can hang the pipeline indefinitely (timeouts on all commands).
- [x] `pi --version` and `piclaw --help` either have safe alternatives or
      verified non-blocking behavior.
- [x] Cold-start overhead minimised (single container or parallel runs).
- [x] Smoke test step completes in < 5 minutes per architecture.
- [x] Decision documented on whether smoke tests should block the manifest step.

## Test Plan

- [ ] Trigger a test publish and verify smoke tests complete within timeout.
- [ ] Verify version assertions still catch real mismatches.
- [ ] Verify a bad image (e.g., missing bun) fails the smoke test correctly.

## Updates

### 2026-03-26
- Board review selection: this is the **next best audit to pull** once current active WIP has room.
- Chosen over the larger audit tickets because it is:
  - small (`S`),
  - high-priority,
  - likely to produce immediate delivery/build reliability gains,
  - and bounded enough to complete without opening a broader architecture/testing campaign.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-26 — implemented
- Added `scripts/docker/publish-smoke-test.sh` so publish smoke tests run through one bounded, reusable path instead of large inline YAML blocks.
- Kept the fast one-shot binary assertions (`bun`, `restic`, Azure support, `pi`, `piclaw`) but avoided invoking potentially interactive `pi --version` / `piclaw --help`.
- Added an actual runtime smoke check: start the image detached, publish an ephemeral localhost port, and poll `GET /login` until the web UI responds or the bounded startup timeout expires.
- Added explicit per-step `timeout-minutes: 5` in `.github/workflows/publish.yml`, plus script-level static and HTTP timeout controls.
- Added failure diagnostics: if the boot smoke fails, the workflow now emits container logs before exiting.
- Decision: smoke tests remain **blocking** for the manifest merge step because they are now time-bounded and validate the deployment-critical HTTP startup path rather than only binary presence.
- Remaining follow-up for final closure: observe at least one green publish run on GitHub Actions and confirm wall-clock timings on both architectures.

## Links

- `.github/workflows/publish.yml`
- CI run that hung: `23539285250`
