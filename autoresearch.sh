#!/bin/bash
set -euo pipefail

bun run runtime/scripts/structured-logging-scope-metrics.ts
bun run runtime/scripts/silent-swallow-metrics.ts
