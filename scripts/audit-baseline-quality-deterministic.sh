#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export TZ="${TZ:-UTC}"
export LANG="${LANG:-C.UTF-8}"
export LC_ALL="${LC_ALL:-C.UTF-8}"
export CI="${CI:-1}"
export FORCE_COLOR="${FORCE_COLOR:-0}"

cd "$ROOT_DIR"
exec bun run ./scripts/audit-baseline-quality-deterministic.ts "$@"
