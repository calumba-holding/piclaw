# Install PiClaw directly from the GitHub repository

> Experimental: this Bun repo-install path works, but it is not yet the main recommended production install route.

PiClaw can be installed directly from the repository with Bun:

```bash
bun add -g github:rcarmo/piclaw
```

This is the intended **Docker-free** install path for people who want the
packaged PiClaw CLI and web assets without building from source manually.

The repository root is the package/install boundary for this flow. The nested
`runtime/` directory is an implementation detail that contains the runtime
sources, web app, extensions, vendored assets, and skills.

## Current scope

This path is intended for:

- Bun users
- Linux and macOS
- direct GitHub-repository installs

It is **not** the same as a development/source install flow.

## What you should get

After install, the goal is that:

- `piclaw` is available in PATH
- the CLI runs without a manual build
- bundled web assets are already present
- bundled extensions/viewers required by normal runtime behavior are included

## Notes

- This path is Bun-first. npm parity is not part of the initial scope.
- The published GHCR image remains the main documented production runtime.
- Build, pack, and install commands should be run from the repo root; `runtime/` is not a separate package.
- If repo-install behavior differs slightly from the published package layout, those differences should stay small and documented.
