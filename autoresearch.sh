#!/bin/bash
set -euo pipefail

[ -d runtime/src ]
[ -d runtime/web/src ]

bun run runtime/scripts/silent-swallow-metrics.ts
