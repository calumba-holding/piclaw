---
id: migrate-vnc-decoding-to-full-wasm-pipeline
title: Migrate VNC decoding pipeline to a fuller WASM backend
status: done
priority: high
created: 2026-03-22
updated: 2026-03-23
target_release: next
estimate: XL
risk: high
tags:
  - work-item
  - kanban
  - web
  - vnc
  - wasm
  - performance
  - assemblyscript
owner: pi
---

# Migrate VNC decoding pipeline to a fuller WASM backend

## Summary

Move the heavy client-side VNC decode work from JavaScript into AssemblyScript/WebAssembly while keeping protocol/session/transport control in JavaScript.

Current state:
- `runtime/assemblyscript/remote-display-decoder.ts` only implements raw pixel decode
  (`decodeRawRectToRgba`).
- `runtime/web/src/panes/remote-display-vnc.ts` contains the full rectangle parsing for
  Raw/ZRLE/RRE/HexTile and all RGBA rasterization.
- `runtime/web/src/panes/remote-display-decoder.ts` already has a loader with JS fallback.

Goal:
- Keep `VNC` protocol negotiation in JS.
- Move decode-heavy rectangle decoding from JS into WASM, including RRE, Hextile, and ZRLE raster expansion.
- Preserve existing behavior, fallback paths, and tests.

## Scope of conversion

### In JS today (to remain mostly unchanged)
- RFB handshake/state machine
- Message framing, security selection, compression calls in outer transport path
- Rectangle header decoding (x/y/w/h/encoding), dispatch selection by encoding
- WebSocket bridge + UI lifecycle in `vnc-pane.ts`
- Error/retry/fallback orchestration

### In WASM (target)
- Rectangle rasterization kernels for supported encodings:
  - Raw (existing `decodeRawRectToRgba`)
  - RRE
  - Hextile
  - ZRLE (post-inflation)
- Shared pixel helpers:
  - endian-safe extraction
  - true-color expansion and channel scaling
  - fill/blit/palette/rle loops currently JS-heavy

## Acceptance Criteria

- [ ] WASM exports include raw + non-raw decoders for all currently supported
  framebuffer encodings in `runtime/web/src/panes/remote-display-vnc.ts`:
  - `Raw`
  - `RRE`
  - `Hextile`
  - `ZRLE`
- [ ] JS fallback path remains functional and testable if WASM is unavailable.
- [ ] Rectangle decoding behavior remains byte-for-byte equivalent for pixel output and `framebuffer-update` event shapes.
- [ ] Existing `/vnc/session` and `/vnc/ws` flows are unchanged.
- [ ] VNC harness still validates:
  - Raw decode
  - RRE decode
  - Hextile decode
  - ZRLE decode
- [ ] Harness/report metadata captures whether decoding used WASM vs JS per run.
- [ ] No regression in fallback behavior when malformed buffers or unsupported payloads arrive.

## Implementation Plan (full conversion)

### Phase 0 — Baseline parity + metrics (prep)

1. Add decode-path counters in `vnc-harness.ts` / report:
   - `decodeBackend: 'wasm' | 'js-fallback'`
   - `rectsAttempted`, `rectsDecoded`, `decodeErrorsByEncoding`
2. Add a single source of truth for supported pixel-format decode contract in
   `remote-display-protocol.ts` types (no behavior change yet).
3. Confirm baseline pass of:
   - `runtime/test/web/remote-display-vnc.test.ts`
   - `runtime/scripts/vnc-harness-report.ts` suite run.

### Phase 1 — AS API + build pipeline

1. Extend `runtime/assemblyscript/remote-display-decoder.ts` to expose a unified decode API:
   - keep existing raw decoder.
   - add exports for:
     - `decodeRreRectToRgba`
     - `decodeHextileRectToRgba`
     - `decodeZrleRectToRgba`
2. Normalize function signatures so JS can call all decoders consistently.
   Suggested interface pattern:
   - args include source pointer/length, width/height, encoding-specific params,
     pixel format fields.
   - return an exported result containing:
     - consumed byte count
     - status code (`0` success, negative for malformed/incomplete)
     - output pointer or 0 for non-decoded/unsupported outcomes.
3. Update `runtime/scripts/build-remote-display-decoder-wasm.ts` if needed to preserve metadata and build artifacts.
4. Update `.meta.json` regeneration flow and confirm resulting binary size stays reasonable.

### Phase 2 — JS loader contract

1. Update `runtime/web/src/panes/remote-display-decoder.ts`:
   - Add typed wrapper for decoder methods.
   - Normalize failures to `null` and maintain warning/logging path.
   - Return `decodeRect({ encoding, bytes, width, height, pixelFormat })` style call.
2. Ensure loader returns explicit availability flags:
   - `hasRaw`, `hasRre`, `hasHextile`, `hasZrle`.
3. Keep current behavior where loader failures only log and continue with JS decode.

### Phase 3 — Move decode logic out of `remote-display-vnc.ts`

1. In `runtime/web/src/panes/remote-display-vnc.ts`:
   - Remove/replace JS internals for:
     - `parseRreRect`
     - `parseHextileRect`
     - `parseZrleRect`
     - inner `decodeRawRectToRgba` usage path
     - heavy per-pixel loops in copy helpers (where appropriate)
2. Keep outer parsing for rectangle headers in JS:
   - type + length validation + dispatch by encoding.
3. For each supported non-raw encoding, pass payload slices to WASM decoder functions with the same pixelFormat context.
4. Preserve and route `copy` rects (`encoding = 1`) in JS as-is (it is mostly structural, not a decode-heavy raster path).
5. If WASM returns error/incomplete for any rect, fallback that rect to existing JS decoder path and continue.
6. Record per-encoding fallback metrics for observability.

### Phase 4 — Behavior parity + fallback hardening

1. Define strict behavior contract:
   - malformed/incomplete payload -> throw or skip consistently as before
   - unsupported palette/encoding path -> behave as existing error behavior
2. Add/adjust tests:
   - `remote-display-vnc.test.ts` unchanged semantics assertions but with both decode backends exercised.
   - add explicit fallback test (e.g., inject decoder failure -> JS path still paints expected output).
3. Ensure `vnc-pane.ts` fallback timer and connect-with-`0` path remain unchanged.

### Phase 5 — End-to-end harness/perf verification

1. Extend harness to collect whether each live probe used WASM decode.
2. Add report section for:
   - `encoding` → `backend` used
   - decode fallback count
   - decode duration per encoding (if available)
3. Run harness report for at least one raw + non-raw sequence and archive artifacts.

## Concrete Task Breakdown

- [ ] Add AssemblyScript decode signatures for RRE / Hextile / ZRLE (core file)
- [ ] Add integration wrapper to WebAssembly loader
- [ ] Update `VncRemoteDisplayProtocol` decode dispatch to call WASM-first
- [ ] Preserve JS fallback implementations as safety net
- [ ] Add decode-backend telemetry in harness and/or UI status
- [ ] Add/adjust tests and run
- [ ] Update docs (`docs/web-pane-extensions.md`, optional implementation note)

## Test Plan

- [ ] `bun run test test/web/remote-display-vnc.test.ts`
- [ ] `bun run test test/web/**/*.test.ts` (affected web tests)
- [ ] `bun run runtime/scripts/vnc-harness-report.ts` (smoke)
- [ ] Browser smoke for mixed encoding sequences (`16,5,2,1,0,-223`) from harness suite
- [ ] Failure injection:
  - malformed ZRLE payload
  - incomplete rect payload
  - wasm load disabled (forces JS fallback)

## Definition of Done

- [ ] Full decode path for non-copy encodings executes in WASM when available.
- [ ] Existing behaviors (including fallback triggers) remain unchanged.
- [ ] Tests + harness coverage explicitly demonstrate parity across Raw, RRE, Hextile, and ZRLE.
- [ ] Ticketed changes are split so one PR can land at a time and reviewed.
- [ ] Performance regression guard is in place (no catastrophic slowdown or repeated fallback loops).

## Notes

- Start by moving one encoding at a time (RRE/Hextile/ZRLE) to reduce risk.
- Keep `copyRect` handling in JS for now; it is mostly a structural operation and not the current bottleneck.
- If ZRLE proves too costly to fully port in one pass, keep JS fallback as the canonical correctness path and continue partial migration with strict logging and telemetry.

## Links

- `runtime/assemblyscript/remote-display-decoder.ts`
- `runtime/web/src/panes/remote-display-decoder.ts`
- `runtime/web/src/panes/remote-display-vnc.ts`
- `runtime/web/src/panes/vnc-pane.ts`
- `runtime/scripts/vnc-harness-standalone.ts`
- `runtime/scripts/playwright/vnc-harness-report.ts`
- `runtime/test/web/remote-display-vnc.test.ts`
- `runtime/scripts/build-remote-display-decoder-wasm.ts`
