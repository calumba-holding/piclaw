# Install PiClaw directly from the GitHub repository

> Experimental: this Bun repo-install path works, but it is not yet the main recommended production install route.

PiClaw can be installed directly from the repository with Bun:

```bash
bun add -g github:rcarmo/piclaw
```

This is the intended **Docker-free** install path for people who want the
packaged PiClaw CLI and web assets without building from source manually.

One reason this path exists is to support people who want to run PiClaw on
low-end ARM SBCs, lightweight VMs, or other sandboxed environments where
Docker is not the best fit or is not available. That said, this is still an
experimental path and not a generally supported deployment target.

The repository root is the package/install boundary for this flow. The nested
`runtime/` directory is an implementation detail that contains the runtime
sources, web app, extensions, vendored assets, and skills.

## What happens at install time

A `postinstall` script runs automatically after `bun add` to download the
draw.io viewer (~35 MB), which is too large to commit to git.

All other vendored assets — Mermaid, CodeMirror, KaTeX, Ghostty, fonts,
Office viewer, VNC decoder, web bundles, bundled browser automation
extensions, etc. — are committed to git and available immediately after
install. No devDependencies or build tools are required for a working runtime.

If `postinstall` was skipped (e.g. `--ignore-scripts`), run manually:

```bash
bun run build:vendor:drawio
```

### Full development rebuild

If you want to rebuild everything from source (requires devDependencies):

```bash
bun install               # includes devDependencies
bun run build:web         # rebuild vendor bundles + web app from source
bun run build             # recompile TypeScript via tsc (optional — Bun runs .ts directly)
```

## Current scope

This path is intended for:

- Bun users
- direct GitHub-repository installs
- Linux and macOS as the primary supported targets

Windows also works in practice, but remains a secondary / not-officially-supported target for now.

It is **not** the same as a development/source install flow.

## What you should get

After install, the goal is that:

- `piclaw` is available in PATH
- the CLI runs without a manual build
- bundled web assets are already present
- bundled extensions/viewers required by normal runtime behavior are included
- bundled automation extensions such as `cdp_browser` are available after install
- Windows-only `win_*` desktop automation extensions are included but remain inert on non-Windows hosts

## Notes

- This path is Bun-first. npm parity is not part of the initial scope.
- The published GHCR image remains the main documented production runtime.
- The Bun repo-install path now ships the bundled `cdp-browser` and `win-ui` extensions in the package tree alongside the existing optional extensions.
- Build, pack, and install commands should be run from the repo root; `runtime/` is not a separate package.
- If repo-install behavior differs slightly from the published package layout, those differences should stay small and documented.
