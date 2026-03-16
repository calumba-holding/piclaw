/**
 * smart-compaction.ts – Selective-fragment compaction extension.
 *
 * Intercepts `session_before_compact` and builds a focused summary by
 * extracting key fragments from the conversation instead of sending the
 * full serialized history to the LLM.
 *
 * Benefits over built-in full-pass compaction:
 *   - Cheaper for long sessions (only selected fragments enter context)
 *   - Better "lost in the middle" resistance (head + tail + complaints + decisions)
 *   - Deterministic session-type detection and no-op filtering
 *   - No new dependencies (no `just-bash` / virtual FS)
 *
 * Session isolation:
 *   The `session_before_compact` event is fired per-AgentSession.  The event
 *   payload (`preparation.messagesToSummarize`, `branchEntries`) is already
 *   scoped to the compacting session's branch.  Each session gets its own
 *   extension instance (factory is called per resource-loader reload), and
 *   this extension captures no cross-session state, so parallel sessions
 *   compact independently.
 *
 * Falls through to built-in compaction when:
 *   - conversation is short (< SELECTIVE_THRESHOLD messages)
 *   - no API key available
 *   - LLM call fails or produces an inadequate summary
 */

import type { ExtensionAPI, ExtensionFactory, FileOperations } from "@mariozechner/pi-coding-agent";
import { convertToLlm } from "@mariozechner/pi-coding-agent";
import { completeSimple } from "@mariozechner/pi-ai";
import type { Message } from "@mariozechner/pi-ai";
import type { CompactionResult } from "@mariozechner/pi-coding-agent";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Minimum message count before selective extraction kicks in.
 *  Below this the built-in full-pass is fine. */
const SELECTIVE_THRESHOLD = 40;

/** Hard cap on chars fed to the LLM prompt. */
const MAX_PROMPT_CHARS = 60_000;

/** Per-tool-result truncation limit when serializing. */
const TOOL_RESULT_MAX_CHARS = 1_500;

/** How many recent messages to always include verbatim. */
const TAIL_MESSAGES = 20;

/** How many earliest user turns to include for goal context. */
const HEAD_USER_TURNS = 3;

/** Minimum acceptable summary length (chars). */
const MIN_SUMMARY_CHARS = 100;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Compute final read-only / modified file lists from FileOperations. */
function fileListsFromOps(fileOps: FileOperations): {
  readFiles: string[];
  modifiedFiles: string[];
} {
  const modified = new Set([...fileOps.written, ...fileOps.edited]);
  const readOnly = [...fileOps.read].filter((f) => !modified.has(f));
  return { readFiles: readOnly, modifiedFiles: [...modified] };
}

function extractText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return (content as any[])
    .filter((b) => b?.type === "text" && typeof b?.text === "string")
    .map((b) => b.text)
    .join("\n")
    .trim();
}

/** Serialize one LLM message to a compact readable line. */
function serializeMessage(msg: Message, idx: number): string {
  if (msg.role === "user") {
    const text = extractText(msg.content);
    return text ? `[${idx}|User]: ${text}` : "";
  }
  if (msg.role === "assistant") {
    const parts: string[] = [];
    for (const block of msg.content as any[]) {
      if (block.type === "text") parts.push(block.text);
      else if (block.type === "toolCall") {
        const args = block.arguments ?? {};
        const summary = args.path ?? args.command ?? JSON.stringify(args);
        const trunc =
          typeof summary === "string" && summary.length > 120
            ? summary.slice(0, 117) + "..."
            : summary;
        parts.push(`→ ${block.name}(${trunc})`);
      }
    }
    return parts.length ? `[${idx}|Assistant]: ${parts.join(" | ")}` : "";
  }
  if (msg.role === "toolResult") {
    const text = extractText(msg.content);
    if (!text) return "";
    const trunc =
      text.length > TOOL_RESULT_MAX_CHARS
        ? text.slice(0, TOOL_RESULT_MAX_CHARS) +
          `\n… (${text.length - TOOL_RESULT_MAX_CHARS} chars truncated)`
        : text;
    return `[${idx}|ToolResult:${(msg as any).toolName ?? "?"}]: ${trunc}`;
  }
  return "";
}

// ---------------------------------------------------------------------------
// Fragment selection
// ---------------------------------------------------------------------------

/** Detect session type from tool-call patterns and user messages. */
function detectSessionType(
  messages: Message[],
): "implementation" | "exploration" | "discussion" | "debugging" {
  let hasWrite = false;
  let hasEdit = false;
  let hasRead = false;
  let hasBash = false;
  let errorMentions = 0;

  for (const msg of messages) {
    if (msg.role === "assistant") {
      for (const block of msg.content as any[]) {
        if (block.type !== "toolCall") continue;
        const name: string = block.name;
        if (name === "write") hasWrite = true;
        else if (name === "edit") hasEdit = true;
        else if (name === "read") hasRead = true;
        else if (name === "bash" || name === "exec_batch") hasBash = true;
      }
    } else if (msg.role === "user") {
      const text = extractText(msg.content).toLowerCase();
      if (
        /\b(error|bug|broken|doesn't work|still wrong|fix|issue)\b/.test(
          text,
        )
      ) {
        errorMentions++;
      }
    }
  }

  if (errorMentions >= 2) return "debugging";
  if (hasWrite || hasEdit) return "implementation";
  if (hasRead || hasBash) return "exploration";
  return "discussion";
}

/** Indices of user messages that look like complaints. */
function findUserComplaints(messages: Message[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].role !== "user") continue;
    const text = extractText(messages[i].content).toLowerCase();
    if (
      /\b(doesn't work|still broken|still wrong|not working|bug|issue|error|failed|broken|fix)\b/.test(
        text,
      )
    ) {
      out.push(i);
    }
  }
  return out;
}

/** First non-slash-command user message. */
function findFirstUserRequest(
  messages: Message[],
): { index: number; text: string } | null {
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].role !== "user") continue;
    const text = extractText(messages[i].content).trim();
    if (!text || text.startsWith("/")) continue;
    return { index: i, text };
  }
  return null;
}

/** Indices of assistant messages with substantial explanatory text. */
function findKeyDecisionMessages(
  messages: Message[],
  exclude: Set<number>,
): number[] {
  const indices: number[] = [];
  for (let i = 0; i < messages.length; i++) {
    if (exclude.has(i)) continue;
    if (messages[i].role !== "assistant") continue;
    const textBlocks = (messages[i].content as any[]).filter(
      (b: any) => b.type === "text",
    );
    const totalText = textBlocks.map((b: any) => b.text as string).join("")
      .length;
    if (totalText > 300 && textBlocks.length > 0) {
      indices.push(i);
    }
  }
  // Sample at most 5, evenly distributed
  if (indices.length > 5) {
    const step = Math.floor(indices.length / 5);
    return indices.filter((_, i) => i % step === 0).slice(0, 5);
  }
  return indices;
}

// ---------------------------------------------------------------------------
// Prompt construction
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are a conversation summarizer creating a structured context checkpoint that another LLM will use to continue the work.

IMPORTANT RULES:
1. Session Type Detection: If you only see "read" tool calls → this is EXPLORATION, not implementation. Only claim files were modified if write/edit tool calls succeeded.
2. Done vs In-Progress: If user reported issues after a change ("doesn't work", "still broken"), mark it as In Progress, NOT Done.
3. Exact Names: Use EXACT variable/function/parameter names from the code.
4. File Lists: Only list files that were actually written/edited successfully. Don't list files that were only read.
5. No-op Filtering: Don't count "Applied: 0" or "No changes applied" as modifications.

Use this EXACT format:

## Goal
[What the user is trying to accomplish]

## Constraints & Preferences
- [Constraints/preferences mentioned by user, or "(none)"]

## Progress
### Done
- [x] [Completed tasks]

### In Progress
- [ ] [Current work]

### Blocked
- [Issues preventing progress, if any]

## Key Decisions
- **[Decision]**: [Brief rationale]

## Next Steps
1. [What remains]

## Critical Context
- [Important state/context needed to continue]

Keep each section concise. Preserve exact file paths, function names, and error messages.`;

interface SelectivePromptInput {
  tokensBefore: number;
  previousSummary?: string;
  fileOps: FileOperations;
}

function buildSelectivePrompt(
  allMessages: Message[],
  input: SelectivePromptInput,
  customInstructions?: string,
): string {
  const total = allMessages.length;
  const sessionType = detectSessionType(allMessages);
  const firstRequest = findFirstUserRequest(allMessages);
  const complaints = findUserComplaints(allMessages);
  const { readFiles, modifiedFiles } = fileListsFromOps(input.fileOps);

  // Collect indices to include verbatim
  const included = new Set<number>();

  // 1. Head — first few user turns for goal context
  const headEnd = Math.min(HEAD_USER_TURNS * 3, total);
  for (let i = 0; i < headEnd; i++) included.add(i);

  // 2. Tail — most recent messages for current state
  const tailStart = Math.max(0, total - TAIL_MESSAGES);
  for (let i = tailStart; i < total; i++) included.add(i);

  // 3. User complaints + surrounding context
  for (const idx of complaints) {
    for (
      let j = Math.max(0, idx - 1);
      j <= Math.min(total - 1, idx + 3);
      j++
    ) {
      included.add(j);
    }
  }

  // 4. Key decision messages from the middle
  const decisions = findKeyDecisionMessages(allMessages, included);
  for (const idx of decisions) {
    included.add(idx);
    for (let j = idx - 1; j >= Math.max(0, idx - 2); j--) {
      included.add(j);
      if (allMessages[j].role === "user") break;
    }
  }

  // ── Build sections ────────────────────────────────────────────────────

  const sec: string[] = [];

  sec.push(`## Session Metadata`);
  sec.push(`- Total messages: ${total}`);
  sec.push(`- Session type: ${sessionType}`);
  sec.push(`- Tokens before compaction: ${input.tokensBefore}`);
  if (firstRequest) {
    const preview =
      firstRequest.text.length > 300
        ? firstRequest.text.slice(0, 300) + "..."
        : firstRequest.text;
    sec.push(`- First user request: "${preview}"`);
  }
  if (complaints.length > 0) {
    sec.push(
      `- User complaints at message indices: ${complaints.join(", ")}`,
    );
  }

  sec.push(`\n## Files Modified (verified from tool results)`);
  if (modifiedFiles.length > 0) {
    for (const f of modifiedFiles) sec.push(`- ${f}`);
  } else {
    sec.push(`- (none)`);
  }

  sec.push(`\n## Files Read (not modified)`);
  if (readFiles.length > 0) {
    const shown = readFiles.slice(0, 20);
    for (const f of shown) sec.push(`- ${f}`);
    if (readFiles.length > 20)
      sec.push(`- … and ${readFiles.length - 20} more`);
  } else {
    sec.push(`- (none)`);
  }

  if (input.previousSummary) {
    sec.push(`\n## Previous Summary (merge new information into this)`);
    sec.push(input.previousSummary);
  }

  if (customInstructions?.trim()) {
    sec.push(`\n## User Compaction Note`);
    sec.push(
      `The user passed this instruction to /compact. Use it to guide focus, but don't treat it as the session's main goal.`,
    );
    sec.push(`"${customInstructions.trim()}"`);
  }

  // Conversation excerpts with gap markers
  sec.push(`\n## Conversation Excerpts`);
  sec.push(
    `(Selected fragments from ${total} messages — head, tail, complaints, and key decisions)\n`,
  );

  const sorted = [...included].sort((a, b) => a - b);
  let lastIdx = -1;
  let chars = 0;

  for (const idx of sorted) {
    if (chars > MAX_PROMPT_CHARS) {
      sec.push(
        `\n… (prompt limit reached, ${sorted.length - sorted.indexOf(idx)} more selected messages omitted)`,
      );
      break;
    }
    if (lastIdx >= 0 && idx > lastIdx + 1) {
      sec.push(`\n--- [${idx - lastIdx - 1} messages omitted] ---\n`);
    }
    const line = serializeMessage(allMessages[idx], idx);
    if (line) {
      sec.push(line);
      chars += line.length;
    }
    lastIdx = idx;
  }

  const instruction = input.previousSummary
    ? `Update the previous summary with the new information from these conversation excerpts. Preserve existing information and add new progress, decisions, and context.`
    : `Summarize these conversation excerpts into a structured context checkpoint. Focus on what matters for continuing the work.`;

  return sec.join("\n") + `\n\n---\n\n${instruction}`;
}

// ---------------------------------------------------------------------------
// No-op detection
// ---------------------------------------------------------------------------

/**
 * Detect compaction windows where an LLM call is unnecessary.
 *
 * Two patterns are detected:
 *
 * 1. **Split-turn continuation** — The compaction window contains zero user
 *    messages (the agent was executing a long tool-call sequence that hit the
 *    token limit mid-turn). The previous summary already describes the goal
 *    and progress; we just append a mechanical file-ops delta.
 *
 * 2. **Minimal content** — Very little user input (<100 chars) and no file
 *    modifications. The previous summary is still valid.
 *
 * Returns a `{ compaction }` result to short-circuit the LLM path, or
 * `null` to fall through to selective/built-in compaction.
 */
function tryNoOpCompaction(
  llmMessages: Message[],
  preparation: {
    previousSummary?: string;
    fileOps: FileOperations;
  },
  firstKeptEntryId: string,
  tokensBefore: number,
  ctx: { ui: { notify: (msg: string, level?: "info" | "warning" | "error") => void } },
): { compaction: CompactionResult } | null {
  const { previousSummary, fileOps } = preparation;

  // We can only do no-op if there IS a previous summary to reuse
  if (!previousSummary || previousSummary.length < MIN_SUMMARY_CHARS) {
    return null;
  }

  // Count user messages (non-slash-command)
  let userMessageCount = 0;
  let userTotalChars = 0;
  for (const msg of llmMessages) {
    if (msg.role === "user") {
      const text = extractText(msg.content);
      if (text && !text.trim().startsWith("/")) {
        userMessageCount++;
        userTotalChars += text.length;
      }
    }
  }

  const { readFiles, modifiedFiles } = fileListsFromOps(fileOps);
  const hasModifications = modifiedFiles.length > 0;

  // ── Pattern 1: Split-turn continuation ────────────────────────────
  // Zero user messages → the goal/context hasn't changed, just more tool work.
  if (userMessageCount === 0) {
    const delta = buildMechanicalDelta(llmMessages, modifiedFiles, readFiles);
    const summary = appendDeltaToSummary(previousSummary, delta, fileOps);

    ctx.ui.notify(
      `No-op compaction: split-turn continuation (0 user msgs, ${llmMessages.length} tool msgs) → reused summary + delta`,
      "info",
    );

    return {
      compaction: { summary, firstKeptEntryId, tokensBefore },
    };
  }

  // ── Pattern 2: Minimal content ────────────────────────────────────
  // Tiny user input, no modifications → nothing new to capture.
  if (userTotalChars < 100 && !hasModifications) {
    const summary = updateFileLists(previousSummary, fileOps);

    ctx.ui.notify(
      `No-op compaction: minimal content (${userTotalChars} user chars, 0 modifications) → reused summary`,
      "info",
    );

    return {
      compaction: { summary, firstKeptEntryId, tokensBefore },
    };
  }

  return null;
}

/**
 * Build a compact mechanical description of what happened in a split-turn
 * window (tool calls only, no user messages).
 */
function buildMechanicalDelta(
  messages: Message[],
  modifiedFiles: string[],
  readFiles: string[],
): string {
  // Count tool calls by type
  const toolCounts: Record<string, number> = {};
  for (const msg of messages) {
    if (msg.role === "assistant" && Array.isArray(msg.content)) {
      for (const block of msg.content as any[]) {
        if (block.type === "toolCall") {
          const name = block.name as string;
          toolCounts[name] = (toolCounts[name] || 0) + 1;
        }
      }
    }
  }

  const parts: string[] = [];
  parts.push(
    `Continued execution: ${messages.length} messages (split-turn, no new user input)`,
  );

  const toolSummary = Object.entries(toolCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([name, count]) => `${name}×${count}`)
    .join(", ");
  if (toolSummary) parts.push(`Tool calls: ${toolSummary}`);

  if (modifiedFiles.length > 0) {
    const shown = modifiedFiles.slice(0, 10);
    parts.push(`Files modified: ${shown.join(", ")}${modifiedFiles.length > 10 ? ` (+${modifiedFiles.length - 10} more)` : ""}`);
  }

  if (readFiles.length > 0) {
    parts.push(`Files read: ${readFiles.length} files`);
  }

  return parts.join("\n");
}

/**
 * Append a mechanical delta to the previous summary, preserving structure.
 * Also updates the file lists at the end.
 */
function appendDeltaToSummary(
  previousSummary: string,
  delta: string,
  fileOps: FileOperations,
): string {
  // Strip old file-list tags from previous summary — we'll re-append fresh ones
  let base = previousSummary
    .replace(/<read-files>[\s\S]*?<\/read-files>/g, "")
    .replace(/<modified-files>[\s\S]*?<\/modified-files>/g, "")
    .trimEnd();

  // Insert delta before Critical Context or at the end
  const criticalIdx = base.lastIndexOf("## Critical Context");
  if (criticalIdx > 0) {
    base =
      base.slice(0, criticalIdx) +
      `\n### Split-Turn Continuation\n${delta}\n\n` +
      base.slice(criticalIdx);
  } else {
    base += `\n\n### Split-Turn Continuation\n${delta}`;
  }

  return appendFileLists(base, fileOps);
}

/**
 * Update file lists in a summary without changing anything else.
 */
function updateFileLists(summary: string, fileOps: FileOperations): string {
  const base = summary
    .replace(/<read-files>[\s\S]*?<\/read-files>/g, "")
    .replace(/<modified-files>[\s\S]*?<\/modified-files>/g, "")
    .trimEnd();

  return appendFileLists(base, fileOps);
}

/**
 * Append deterministic file-list tags to a summary string.
 */
function appendFileLists(base: string, fileOps: FileOperations): string {
  const { readFiles, modifiedFiles } = fileListsFromOps(fileOps);
  const parts: string[] = [base];

  if (readFiles.length > 0) {
    parts.push(`\n<read-files>\n${readFiles.join("\n")}\n</read-files>`);
  }
  if (modifiedFiles.length > 0) {
    parts.push(
      `\n<modified-files>\n${modifiedFiles.join("\n")}\n</modified-files>`,
    );
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// Extension factory
// ---------------------------------------------------------------------------

export const smartCompaction: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("session_before_compact", async (event, ctx) => {
    const { preparation, signal, customInstructions } = event;
    const {
      messagesToSummarize,
      tokensBefore,
      firstKeptEntryId,
      previousSummary,
      settings,
    } = preparation;

    if (messagesToSummarize.length === 0) return;

    // ── No-op detection ──────────────────────────────────────────────
    // Skip the LLM call entirely when we can produce a good summary
    // mechanically. This saves ~60-110s and 100-270k input tokens.

    const llmMessages = convertToLlm(messagesToSummarize);
    const noOpResult = tryNoOpCompaction(
      llmMessages,
      preparation,
      firstKeptEntryId,
      tokensBefore,
      ctx,
    );
    if (noOpResult) return noOpResult;

    // Short conversations → built-in full-pass is fine
    if (messagesToSummarize.length < SELECTIVE_THRESHOLD) return;

    ctx.ui.notify(
      `Smart compaction: ${messagesToSummarize.length} msgs → selective extraction`,
      "info",
    );

    const promptText = buildSelectivePrompt(
      llmMessages,
      { tokensBefore, previousSummary, fileOps: preparation.fileOps },
      customInstructions,
    );

    ctx.ui.notify(
      `Prompt: ${Math.round(promptText.length / 1000)}k chars (vs ~${Math.round(tokensBefore / 1000)}k tokens full)`,
      "info",
    );

    // Model — use the session's own model (already session-scoped)
    const model = ctx.model;
    if (!model) {
      ctx.ui.notify("No model available for smart compaction", "warning");
      return;
    }
    const apiKey = await ctx.modelRegistry.getApiKey(model);
    if (!apiKey) {
      ctx.ui.notify("No API key for compaction model", "warning");
      return;
    }

    const messages: Message[] = [
      {
        role: "user",
        content: [{ type: "text", text: promptText }],
        timestamp: Date.now(),
      },
    ];

    const maxTokens = Math.floor(0.8 * settings.reserveTokens);
    const completionOptions = (model as any).reasoning
      ? { maxTokens, signal, apiKey, reasoning: "high" as const }
      : { maxTokens, signal, apiKey };

    try {
      const response = await completeSimple(
        model,
        { systemPrompt: SYSTEM_PROMPT, messages },
        completionOptions,
      );

      if (response.stopReason === "error") {
        ctx.ui.notify(
          `Smart compaction LLM error: ${(response as any).errorMessage || "unknown"}`,
          "warning",
        );
        return; // fall through to built-in
      }

      const summary = response.content
        .filter((c: any) => c.type === "text")
        .map((c: any) => c.text)
        .join("\n")
        .trim();

      if (summary.length < MIN_SUMMARY_CHARS) {
        ctx.ui.notify(
          "Smart compaction summary too short, falling back to built-in",
          "warning",
        );
        return;
      }

      if (signal.aborted) return;

      // Append deterministic file sections (same format as built-in)
      const { readFiles, modifiedFiles } = fileListsFromOps(
        preparation.fileOps,
      );
      let fullSummary = summary;
      if (
        !summary.includes("<read-files>") &&
        !summary.includes("<modified-files>")
      ) {
        const parts: string[] = [];
        if (readFiles.length > 0) {
          parts.push(`\n<read-files>\n${readFiles.join("\n")}\n</read-files>`);
        }
        if (modifiedFiles.length > 0) {
          parts.push(
            `\n<modified-files>\n${modifiedFiles.join("\n")}\n</modified-files>`,
          );
        }
        if (parts.length) fullSummary += "\n" + parts.join("\n");
      }

      ctx.ui.notify("Smart compaction complete ✓", "info");

      return {
        compaction: {
          summary: fullSummary,
          firstKeptEntryId,
          tokensBefore,
        } satisfies CompactionResult,
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!signal.aborted) {
        ctx.ui.notify(`Smart compaction error: ${msg}`, "warning");
      }
      return; // fall through to built-in
    }
  });
};
