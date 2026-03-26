#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUNTIME_DIR="$ROOT_DIR/runtime"
cd "$RUNTIME_DIR"

BROWSER_BIN="$(find "$HOME/.cache/ms-playwright" -path '*/chrome-headless-shell-linux64/chrome-headless-shell' -type f | head -1 || true)"

# Ensure the agent user's Playwright cache has the headless Chromium shell.
if [[ -z "$BROWSER_BIN" ]]; then
  bunx playwright install chromium --only-shell >/dev/null 2>&1
  BROWSER_BIN="$(find "$HOME/.cache/ms-playwright" -path '*/chrome-headless-shell-linux64/chrome-headless-shell' -type f | head -1 || true)"
fi

if [[ -z "$BROWSER_BIN" ]]; then
  echo "Failed to locate Playwright chrome-headless-shell binary under $HOME/.cache/ms-playwright" >&2
  exit 1
fi

if ldd "$BROWSER_BIN" 2>/dev/null | grep -q 'not found'; then
  echo "[browser-setup] Installing missing Playwright system dependencies..." >&2
  sudo bunx playwright install-deps chromium-headless-shell >/dev/null
fi

if ldd "$BROWSER_BIN" 2>/dev/null | grep -q 'not found'; then
  echo "Playwright browser still has unresolved shared library dependencies:" >&2
  ldd "$BROWSER_BIN" | grep 'not found' >&2 || true
  exit 1
fi
