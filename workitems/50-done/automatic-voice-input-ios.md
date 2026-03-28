---
id: automatic-voice-input-ios
title: Voice mode — speech input + terse speech output
status: done
priority: medium
created: 2026-03-12
updated: 2026-03-22
completed: 2026-03-22
estimate: S
risk: high
target_release: next
tags:
  - work-item
  - kanban
  - web
  - accessibility
  - ios
  - voice
  - usability
owner: pi
---

# Investigate automatic voice input on iOS

## Summary

Investigate and prototype automatic/inline voice input in the web compose flow for iOS Safari (and nearby WebKit variants), then decide on an implementation strategy.

The goal is to make dictation a first-class option for message entry, preferably with a discoverable button and reliable behavior on iPhone/iPad.

## Why

Typing long prompts on mobile is slower than speech for many workflows. iOS has built-in dictation, but there are UX and permission constraints. This ticket explores whether true automatic voice input can be made reliable in our web app.

## Acceptance Criteria

- [ ] Document whether automatic voice input is feasible on iOS in modern Safari/WebKit.
- [ ] Evaluate `SpeechRecognition` / `webkitSpeechRecognition` support and required permissions.
- [ ] Determine whether compose textarea auto-focus + voice start flow can work without manual keyboard toggling.
- [ ] Identify fallback behavior for unsupported iOS versions.
- [ ] Provide a recommendation: ship now, ship partial fallback, or defer.
- [ ] Add implementation ticket if/when a reliable path is confirmed.

## In scope
- Investigate front-end options for composing messages by voice.
- Define minimal UX contract for Compose button/shortcut and stop conditions.
- Ensure no regressions in compose history and slash autocomplete while dictating.

## Out of scope
- Backend speech-to-text service.
- Long-running continuous transcription across multiple turns.
- Native app integration.

## Research questions

1. Which APIs are available on target iOS versions?
2. Does `webkitSpeechRecognition` behave under secure context and user gesture constraints?
3. Can recognition run with app in standalone/PWA mode?
4. Does audio permission UX conflict with existing camera/microphone permissions (if any)?
5. Can we reliably map start/stop to existing `send`/`trim` UX?
6. Should we include fallback to iOS keyboard dictation instructions instead of JS recognition API?

## Implementation paths

### Path A — Web Speech API integration (in-app)
- Add a `voice` control in compose box.
- Gate by feature detection (`webkitSpeechRecognition` / `SpeechRecognition`).
- Stream partial transcripts to compose buffer, then insert finalized text.

Pros: integrated inline UX and no external services.
Cons: limited and inconsistent iOS support.

### Path B — iOS-assisted fallback only
- Detect unsupported API on iOS.
- Offer guidance/UX to use native keyboard dictation (mic icon) with auto-focus + keyboard hints.
- Track this as a supported fallback rather than in-app recording.

Pros: deterministic and lower risk.
Cons: weaker one-button experience.

### Path C — external service (optional future)
- Evaluate streaming to backend STT service and return transcript.
- Introduce upload/permission/security implications.

Pros: richer control/accuracy potential.
Cons: infra and privacy surface, latency, credentials.

## Recommended near-term path

Start with **Path B** (fallback + explicit iOS guidance) and a feature-flagged **Path A prototype**. Keep data collection read-only until compatibility is verified.

## Relevant files to inspect

- `piclaw/piclaw/web/src/components/compose-box.ts` (compose input + send behavior)
- `piclaw/piclaw/web/src/app.ts` (any global compose integrations)
- `piclaw/piclaw/web/src/styles/app.css` (button/indicator styles)
- `piclaw/docs/whatsapp.md` (if cross-channel parity concerns exist)

## Test Plan

### Manual (required)
- iPhone Safari (latest): run compose voice scenarios:
  - focus compose
  - start voice input
  - insert text with final and partial results
  - stop/cancel recognition
  - send
- iPad Safari
- Non-iOS Safari/Chrome as control.

### Automated
- Add a unit test boundary for capability detection helpers (if extracted).
- Add a lightweight integration smoke test if we introduce UI states for unsupported/ready/listening.

## Definition of Done

- [ ] Investigation results posted in ticket Updates with tested iOS versions
- [ ] Known platform limitations documented
- [ ] Decision recorded with follow-up implementation ticket if viable
- [ ] No changes to production behavior beyond non-intrusive detection/telemetry hooks
- [ ] Ticket moved to `50-done/` once recommendation is finalized

## Implementation Paths Considered (historical)

- This ticket was closed as discarded rather than implemented.
- Browser-native automatic voice input on iOS/WebKit was not accepted as a reliable product path, especially for standalone/PWA mode.
- The preferred long-term direction is to handle speech as a PiClaw extension/runtime feature rather than continue investing in a browser-only automatic iOS voice flow.

## Updates

### 2026-03-22
- Lane change: `10-next` → `50-done` by user direction.
- Closed as **discarded / not-done**.
- Rationale:
  - `webkitSpeechRecognition` on iOS is not reliable enough to serve as a first-class automatic voice-input path, especially in home-screen/PWA mode.
  - The browser cannot programmatically trigger Apple keyboard dictation, so the best fallback is user guidance rather than a real automatic-input implementation.
  - The broader speech direction was explicitly re-scoped toward a PiClaw extension/runtime path instead of more browser-only hacks.
- This ticket should be treated as a completed investigation/decision record, not an implementation-ready item.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-19 — Refinement complete (10 questions)

**Scope expanded** from iOS-only investigation to a full voice mode feature covering both speech input and terse speech output.

**Input design:**
- Mic button inside compose box, left of send button
- Live interim text appears in compose during recording, finalized on stop
- Uses Web Speech API (`SpeechRecognition`) where available
- iOS: try SpeechRecognition first, fall back to keyboard dictation hint on failure
- Single toggle enables both input + output

**Output design:**
- Auto-summary spoken: first sentence + bullet points, strip code/paths/markdown
- Auto-speaks reply when input was voice; manual speaker icon on all agent messages
- Speaker icon always visible on agent messages (small, non-intrusive)
- Speaks paragraph chunks as they complete during streaming (not wait-for-full)
- Interruption: click message, click speaker icon, or start new voice input — all stop current speech

**Toggle:**
- Single toggle for voice mode (input + output together)
- Persisted in localStorage
- No backend service required — all client-side Web Speech API

**Browser support:**
- Chrome desktop/Android: full SpeechRecognition + SpeechSynthesis
- Safari desktop: SpeechRecognition since 14.1 + SpeechSynthesis
- iOS Safari: SpeechRecognition unreliable (14.5+, buggy on 17+), SpeechSynthesis solid
- iOS Chrome/Firefox: no SpeechRecognition (WebKit limitation)

Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Ready for implementation.

### 2026-03-12
- Added at user request to begin investigation phase for iOS voice input feasibility.
- Initial assumption: iOS Safari behavior is inconsistent for in-page speech recognition, so we should capture compatibility before implementation.
- Quality target: ★★★☆☆ 6/10 (problem: 1, scope: 2, test: 1, deps: 1, risk: 2)
