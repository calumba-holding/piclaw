---
name: adaptive-cards-authoring
description: Author Adaptive Cards for the current PiClaw web environment. Use when you need a prompt pattern, supported payload shape, or reusable card templates for structured web interactions.
distribution: public
---

# Adaptive Cards Authoring

Use this skill when you want to:

- decide whether Adaptive Cards are appropriate for a PiClaw web interaction
- prompt the agent to emit a card intentionally instead of plain markdown
- reuse a small library of card templates that match the **currently shipped** PiClaw card runtime
- stay within the card/action/state features that PiClaw supports today

## Current PiClaw environment assumptions

This skill is written for the current PiClaw web runtime in this workspace.

### Supported today
- Adaptive Cards render in the **web timeline** via `content_blocks`
- Supported card actions:
  - `Action.Submit`
  - `Action.OpenUrl`
- Supported lifecycle states:
  - `active`
  - `completed`
  - `cancelled`
  - `failed`
- Card submissions are persisted as structured submission blocks
- Failed actions can show inline errors in-card
- `/test-card` exists for built-in validation variants

### Not a good fit today
Do **not** rely on these as first-class flows unless you are explicitly extending core support:

- `Action.ShowCard`
- `Action.ToggleVisibility`
- complex card refresh/auth flows
- multi-channel card delivery outside the web UI
- assuming the agent will autonomously choose cards without being instructed

## When to use a card

Use an Adaptive Card **only** when it is materially better than markdown.

Good fits:
- approval / reject / revise
- choosing one of a few next actions
- short structured data collection
- persistent status / completion receipt UI
- link collections where explicit buttons are better than inline links

Avoid cards when:
- plain markdown is clearer
- the interaction is long-form, narrative, or exploratory
- the user needs tool-capable side-agent behavior rather than a simple form/action surface
- the action semantics are not yet supported in PiClaw

## Required PiClaw payload shape

Emit cards as a normal message with a matching `content` fallback plus a `content_blocks` entry like:

```json
{
  "type": "adaptive_card",
  "card_id": "approval-123",
  "schema_version": "1.5",
  "state": "active",
  "fallback_text": "Approval requested.",
  "payload": {
    "type": "AdaptiveCard",
    "version": "1.5",
    "body": [
      { "type": "TextBlock", "text": "Approval requested", "weight": "Bolder", "size": "Medium" }
    ],
    "actions": [
      { "type": "Action.Submit", "title": "Approve", "data": { "decision": "approve" } }
    ]
  }
}
```

## Authoring rules for this environment

1. Keep `schema_version` at `1.5` unless you have a specific reason otherwise.
2. Keep `content` and `fallback_text` concise and human-readable.
3. Prefer simple `TextBlock`, `FactSet`, `Input.*`, `ChoiceSet`, and `Toggle` primitives.
4. Keep button labels short and explicit.
5. Use `Action.Submit` for structured decisions; use `Action.OpenUrl` for external links.
6. Assume cards are **web-only** unless explicitly wrapped in a graceful fallback strategy.
7. Keep submission payloads small, flat, and readable.
8. Prefer one clear card over a dense, form-heavy wall of controls.

## Prompt pattern for using Adaptive Cards now

When you want the agent to emit a card intentionally, use a prompt like this:

```text
Use an Adaptive Card for this response because the interaction is structured and web-only.

Constraints:
- Target the current PiClaw web runtime
- Emit a concise human-readable fallback message plus one adaptive_card content block
- Use schema_version 1.5
- Only use supported actions: Action.Submit and/or Action.OpenUrl
- Keep the card visually simple and compact
- Keep submission payloads small and explicit
- Do not use Action.ShowCard or unsupported card refresh/auth features
- If a card would be worse than markdown, say so and return markdown instead

Task:
<describe the approval / choice / form interaction>
```

## Stronger generation pattern

If you need more determinism, ask for both the prose fallback and the exact block:

```text
Generate:
1. a concise fallback message string
2. exactly one PiClaw adaptive_card content block JSON object

Requirements:
- card_id should be stable and descriptive
- fallback_text should match the fallback message closely
- state should start as active
- payload.version should be 1.5
- only supported actions
- keep the body compact and readable in a narrow web pane
```

## Template library

Read and reuse the examples in:
- `templates.md`

These templates are tailored to the current PiClaw runtime rather than generic Adaptive Cards marketing examples.

## Practical runtime guidance

### For implementation work
If you are writing code that emits a card in PiClaw itself:
- web-local testing: `/test-card list`
- backend/core posting path: message `content_blocks`
- persistent broadcast path: `messages` tool with `action: "post"` if appropriate

### For agent-facing prompting
Prefer asking for one of these card classes explicitly:
- `approval-card`
- `choice-card`
- `link-card`
- `status-card`
- `keep-active-form-card`

## Safety / product guidance

- Cards should improve clarity, not hide information.
- Never make the card the only place where critical meaning exists; keep a useful fallback.
- If the user is not in the web UI, prefer markdown unless you know the client can render cards.
- Avoid making the user do complex multi-step workflows inside one card.

## Deliverables this skill can help produce

- a prompt that reliably asks the agent to emit a supported card
- a concrete `adaptive_card` content block for PiClaw
- a small set of reusable card templates for current supported interactions
- a recommendation to use markdown instead when cards would be overkill
