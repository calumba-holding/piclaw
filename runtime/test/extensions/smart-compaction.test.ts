/**
 * smart-compaction.test.ts – unit tests for selective-fragment compaction.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

// We test the module by importing its factory and invoking it with a
// mock ExtensionAPI, then firing the session_before_compact handler.
//
// Since the extension is a factory function that registers an event handler,
// we need to capture that handler and call it with test data.

// ---------------------------------------------------------------------------
// Helpers to build test messages
// ---------------------------------------------------------------------------

function userMsg(text: string, ts = Date.now()) {
  return {
    role: "user" as const,
    content: [{ type: "text" as const, text }],
    timestamp: ts,
  };
}

function _assistantTextMsg(text: string, ts = Date.now()) {
  return {
    role: "assistant" as const,
    content: [{ type: "text" as const, text }],
    timestamp: ts,
  };
}

function assistantToolCallMsg(
  toolCalls: { id: string; name: string; args: Record<string, unknown> }[],
  ts = Date.now(),
) {
  return {
    role: "assistant" as const,
    content: toolCalls.map((tc) => ({
      type: "toolCall" as const,
      id: tc.id,
      name: tc.name,
      arguments: tc.args,
    })),
    timestamp: ts,
  };
}

function toolResultMsg(
  toolCallId: string,
  toolName: string,
  text: string,
  ts = Date.now(),
) {
  return {
    role: "toolResult" as const,
    toolCallId,
    toolName,
    content: [{ type: "text" as const, text }],
    isError: false,
    timestamp: ts,
  };
}

// ---------------------------------------------------------------------------
// Build a large conversation (>40 messages) for selective threshold
// ---------------------------------------------------------------------------

function buildLargeConversation(messageCount: number) {
  const msgs: any[] = [];
  for (let i = 0; i < messageCount; i++) {
    const phase = i % 3;
    if (phase === 0) {
      msgs.push(userMsg(`User message ${i}: please do task ${i}`));
    } else if (phase === 1) {
      msgs.push(
        assistantToolCallMsg([
          {
            id: `tc-${i}`,
            name: i % 6 === 1 ? "read" : "edit",
            args: { path: `/workspace/file-${i}.ts` },
          },
        ]),
      );
    } else {
      msgs.push(
        toolResultMsg(`tc-${i - 1}`, i % 6 === 2 ? "read" : "edit", `Result for task ${i}`),
      );
    }
  }
  return msgs;
}

// ---------------------------------------------------------------------------
// Mock setup
// ---------------------------------------------------------------------------

// Mock completeSimple before importing the module under test
vi.mock("@mariozechner/pi-ai", () => ({
  completeSimple: vi.fn(),
}));

// Mock convertToLlm to pass through (our test messages are already in LLM format)
vi.mock("@mariozechner/pi-coding-agent", () => ({
  convertToLlm: (msgs: any[]) => msgs,
}));

import { completeSimple } from "@mariozechner/pi-ai";
import { smartCompaction } from "../../src/extensions/smart-compaction.js";

describe("smart-compaction", () => {
  let handler: ((event: any, ctx: any) => Promise<any>) | null = null;

  beforeEach(() => {
    handler = null;
    // Capture the registered handler
    const mockPi = {
      on: (eventName: string, fn: any) => {
        if (eventName === "session_before_compact") handler = fn;
      },
    };
    smartCompaction(mockPi as any);
    vi.clearAllMocks();
  });

  function makeCtx(overrides: Partial<any> = {}) {
    return {
      ui: { notify: vi.fn() },
      model: { provider: "test", id: "test-model", reasoning: false },
      modelRegistry: {
        getApiKeyAndHeaders: vi.fn().mockResolvedValue({ ok: true, apiKey: "test-key", headers: { "X-Test": "1" } }),
        getAll: vi.fn().mockReturnValue([]),
      },
      sessionManager: { getSessionId: () => "test-session-1" },
      ...overrides,
    };
  }

  function makePreparation(messageCount: number, overrides: Partial<any> = {}) {
    return {
      messagesToSummarize: buildLargeConversation(messageCount),
      tokensBefore: messageCount * 100,
      firstKeptEntryId: "kept-entry-1",
      previousSummary: undefined,
      settings: { enabled: true, reserveTokens: 16384, keepRecentTokens: 20000 },
      fileOps: {
        read: new Set(["/workspace/file-2.ts", "/workspace/file-8.ts"]),
        written: new Set<string>(),
        edited: new Set(["/workspace/file-4.ts"]),
      },
      isSplitTurn: false,
      turnPrefixMessages: [],
      ...overrides,
    };
  }

  it("registers the session_before_compact handler", () => {
    expect(handler).toBeTypeOf("function");
  });

  it("falls through for short conversations (< threshold)", async () => {
    const prep = makePreparation(10);
    const ctx = makeCtx();
    const result = await handler!(
      {
        preparation: prep,
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );
    expect(result).toBeUndefined();
    expect(completeSimple).not.toHaveBeenCalled();
  });

  it("invokes LLM with selective prompt for large conversations", async () => {
    const summaryText = "## Goal\nTest goal\n\n## Constraints & Preferences\n- none\n\n## Progress\n### Done\n- [x] Something\n\n### In Progress\n\n### Blocked\n\n## Key Decisions\n\n## Next Steps\n\n## Critical Context\n- context";

    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: summaryText }],
      stopReason: "end",
    });

    const prep = makePreparation(60);
    const ctx = makeCtx();
    const result = await handler!(
      {
        preparation: prep,
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(completeSimple).toHaveBeenCalledTimes(1);
    expect(result).toBeDefined();
    expect(result.compaction).toBeDefined();
    expect(result.compaction.summary).toContain("Test goal");
    expect(result.compaction.firstKeptEntryId).toBe("kept-entry-1");
    expect(result.compaction.tokensBefore).toBe(6000);

    // Should notify progress
    expect(ctx.ui.notify).toHaveBeenCalledWith(
      expect.stringContaining("Smart compaction:"),
      "info",
    );
    expect(ctx.ui.notify).toHaveBeenCalledWith(
      "Smart compaction complete ✓",
      "info",
    );
  });

  it("forwards header-based auth to completeSimple", async () => {
    const summaryText = "## Goal\nHeader auth\n\n## Constraints & Preferences\n- none\n\n## Progress\n### Done\n- [x] auth\n\n### In Progress\n\n### Blocked\n\n## Key Decisions\n\n## Next Steps\n\n## Critical Context\n- context";

    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: summaryText }],
      stopReason: "end",
    });

    const ctx = makeCtx({
      modelRegistry: {
        getApiKeyAndHeaders: vi.fn().mockResolvedValue({
          ok: true,
          headers: { Authorization: "Bearer compact-token", "X-Test": "1" },
        }),
        getAll: vi.fn().mockReturnValue([]),
      },
    });

    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(result).toBeDefined();
    expect(completeSimple).toHaveBeenCalledWith(
      expect.anything(),
      expect.anything(),
      expect.objectContaining({
        apiKey: undefined,
        headers: { Authorization: "Bearer compact-token", "X-Test": "1" },
      }),
    );
  });

  it("appends deterministic file lists to summary", async () => {
    const summaryText = "## Goal\nAppend files test\n\n## Constraints\n- x\n\n## Progress\n### Done\n- [x] test\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context";

    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: summaryText }],
      stopReason: "end",
    });

    const prep = makePreparation(60, {
      fileOps: {
        read: new Set(["/a.ts", "/b.ts"]),
        written: new Set(["/c.ts"]),
        edited: new Set(["/d.ts"]),
      },
    });
    const result = await handler!(
      {
        preparation: prep,
        branchEntries: [],
        signal: new AbortController().signal,
      },
      makeCtx(),
    );

    expect(result.compaction.summary).toContain("<read-files>");
    expect(result.compaction.summary).toContain("/a.ts");
    expect(result.compaction.summary).toContain("/b.ts");
    expect(result.compaction.summary).toContain("<modified-files>");
    expect(result.compaction.summary).toContain("/c.ts");
    expect(result.compaction.summary).toContain("/d.ts");
    // read-only files should NOT include modified ones
    expect(
      result.compaction.summary.split("<read-files>")[1].split("</read-files>")[0],
    ).not.toContain("/c.ts");
  });

  it("falls through on LLM error", async () => {
    (completeSimple as any).mockResolvedValueOnce({
      content: [],
      stopReason: "error",
      errorMessage: "Rate limited",
    });

    const ctx = makeCtx();
    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(result).toBeUndefined();
    expect(ctx.ui.notify).toHaveBeenCalledWith(
      expect.stringContaining("Smart compaction LLM error"),
      "warning",
    );
  });

  it("falls through on too-short summary", async () => {
    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: "Short." }],
      stopReason: "end",
    });

    const ctx = makeCtx();
    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(result).toBeUndefined();
    expect(ctx.ui.notify).toHaveBeenCalledWith(
      expect.stringContaining("too short"),
      "warning",
    );
  });

  it("falls through when no auth is available", async () => {
    const ctx = makeCtx();
    ctx.modelRegistry.getApiKeyAndHeaders.mockResolvedValueOnce({ ok: false, error: "missing auth" });

    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(result).toBeUndefined();
    expect(completeSimple).not.toHaveBeenCalled();
  });

  it("falls through on exception", async () => {
    (completeSimple as any).mockRejectedValueOnce(new Error("Network error"));

    const ctx = makeCtx();
    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      ctx,
    );

    expect(result).toBeUndefined();
    expect(ctx.ui.notify).toHaveBeenCalledWith(
      expect.stringContaining("Network error"),
      "warning",
    );
  });

  it("respects abort signal", async () => {
    const ac = new AbortController();
    ac.abort();

    // completeSimple should still be called (abort is checked after)
    (completeSimple as any).mockRejectedValueOnce(new Error("aborted"));

    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: ac.signal,
      },
      makeCtx(),
    );

    // Should not return a compaction result when aborted
    expect(result).toBeUndefined();
  });

  it("does not skip file sections if summary already has them", async () => {
    const summaryWithFiles =
      "## Goal\nTest\n<read-files>\n/already.ts\n</read-files>\n<modified-files>\n/already-mod.ts\n</modified-files>\n\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context";

    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: summaryWithFiles }],
      stopReason: "end",
    });

    const result = await handler!(
      {
        preparation: makePreparation(60),
        branchEntries: [],
        signal: new AbortController().signal,
      },
      makeCtx(),
    );

    // Should NOT double-append file sections
    const readCount = (
      result.compaction.summary.match(/<read-files>/g) || []
    ).length;
    expect(readCount).toBe(1);
  });

  it("sends previous summary to LLM for iterative update", async () => {
    const prevSummary = "## Goal\nPrevious goal\n## Progress\n### Done\n- [x] old task";
    const summaryText = "## Goal\nUpdated goal\n\n## Constraints\n- x\n## Progress\n### Done\n- [x] old task\n- [x] new task\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context";

    (completeSimple as any).mockResolvedValueOnce({
      content: [{ type: "text", text: summaryText }],
      stopReason: "end",
    });

    const prep = makePreparation(60, { previousSummary: prevSummary });

    await handler!(
      {
        preparation: prep,
        branchEntries: [],
        signal: new AbortController().signal,
      },
      makeCtx(),
    );

    // Check the prompt sent to completeSimple includes previous summary
    const call = (completeSimple as any).mock.calls[0];
    const promptContent = call[1].messages[0].content[0].text;
    expect(promptContent).toContain("Previous Summary");
    expect(promptContent).toContain("Previous goal");
  });

  describe("session isolation", () => {
    it("each factory invocation gets independent handler state", () => {
      // Call the factory twice, simulating two parallel sessions
      let handler1: any = null;
      let handler2: any = null;

      const mockPi1 = {
        on: (_: string, fn: any) => {
          handler1 = fn;
        },
      };
      const mockPi2 = {
        on: (_: string, fn: any) => {
          handler2 = fn;
        },
      };

      smartCompaction(mockPi1 as any);
      smartCompaction(mockPi2 as any);

      // Both handlers exist and are independent function references
      expect(handler1).toBeTypeOf("function");
      expect(handler2).toBeTypeOf("function");
      expect(handler1).not.toBe(handler2);
    });

    it("handler only processes preparation data from its own event", async () => {
      const summaryA = "## Goal\nSession A goal\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context\n- session A";
      const summaryB = "## Goal\nSession B goal\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context\n- session B";

      // First call returns session A summary
      (completeSimple as any).mockResolvedValueOnce({
        content: [{ type: "text", text: summaryA }],
        stopReason: "end",
      });
      // Second call returns session B summary
      (completeSimple as any).mockResolvedValueOnce({
        content: [{ type: "text", text: summaryB }],
        stopReason: "end",
      });

      const prepA = makePreparation(60, { firstKeptEntryId: "session-A-entry" });
      const prepB = makePreparation(50, { firstKeptEntryId: "session-B-entry" });

      const [resultA, resultB] = await Promise.all([
        handler!(
          {
            preparation: prepA,
            branchEntries: [],
            signal: new AbortController().signal,
          },
          makeCtx(),
        ),
        handler!(
          {
            preparation: prepB,
            branchEntries: [],
            signal: new AbortController().signal,
          },
          makeCtx(),
        ),
      ]);

      // Each result uses its own preparation data
      expect(resultA.compaction.firstKeptEntryId).toBe("session-A-entry");
      expect(resultA.compaction.summary).toContain("Session A");
      expect(resultB.compaction.firstKeptEntryId).toBe("session-B-entry");
      expect(resultB.compaction.summary).toContain("Session B");
    });
  });

  describe("no-op detection", () => {
    it("skips LLM for split-turn continuation (0 user messages)", async () => {
      // Build a window with only assistant tool calls and tool results — no user messages
      const splitTurnMsgs: any[] = [];
      for (let i = 0; i < 60; i++) {
        if (i % 2 === 0) {
          splitTurnMsgs.push(
            assistantToolCallMsg([
              { id: `tc-${i}`, name: "edit", args: { path: `/workspace/file-${i}.ts` } },
            ]),
          );
        } else {
          splitTurnMsgs.push(
            toolResultMsg(`tc-${i - 1}`, "edit", `Edited file-${i}.ts successfully`),
          );
        }
      }

      const prep = makePreparation(60, {
        messagesToSummarize: splitTurnMsgs,
        previousSummary:
          "## Goal\nImplement feature X\n\n## Constraints\n- none\n\n## Progress\n### Done\n- [x] Started\n### In Progress\n- [ ] Working\n### Blocked\n\n## Key Decisions\n\n## Next Steps\n1. Continue\n\n## Critical Context\n- Important stuff",
        fileOps: {
          read: new Set(["/a.ts"]),
          written: new Set<string>(),
          edited: new Set(["/b.ts", "/c.ts"]),
        },
      });

      const ctx = makeCtx();
      const result = await handler!(
        {
          preparation: prep,
          branchEntries: [],
          signal: new AbortController().signal,
        },
        ctx,
      );

      // Should NOT call the LLM
      expect(completeSimple).not.toHaveBeenCalled();

      // Should return a compaction result
      expect(result).toBeDefined();
      expect(result.compaction).toBeDefined();
      expect(result.compaction.summary).toContain("Implement feature X"); // preserved from previous
      expect(result.compaction.summary).toContain("Split-Turn Continuation"); // delta appended
      expect(result.compaction.summary).toContain("split-turn"); // mechanical delta
      expect(result.compaction.summary).toContain("<modified-files>"); // file lists updated

      // Should notify
      expect(ctx.ui.notify).toHaveBeenCalledWith(
        expect.stringContaining("split-turn continuation"),
        "info",
      );
    });

    it("skips LLM for minimal content (tiny user input, no modifications)", async () => {
      // User sent < 100 chars, no writes/edits
      const minimalMsgs: any[] = [
        userMsg("ok"), // 2 chars
        assistantToolCallMsg([{ id: "tc-1", name: "read", args: { path: "/a.ts" } }]),
        toolResultMsg("tc-1", "read", "file contents..."),
      ];
      // Pad to 60 messages with reads
      for (let i = 3; i < 60; i++) {
        if (i % 2 === 1) {
          minimalMsgs.push(
            assistantToolCallMsg([
              { id: `tc-${i}`, name: "read", args: { path: `/file-${i}.ts` } },
            ]),
          );
        } else {
          minimalMsgs.push(toolResultMsg(`tc-${i - 1}`, "read", `contents of file-${i}`));
        }
      }

      const prep = makePreparation(60, {
        messagesToSummarize: minimalMsgs,
        previousSummary:
          "## Goal\nExplore codebase\n\n## Constraints\n\n## Progress\n### Done\n- [x] Read files\n### In Progress\n### Blocked\n\n## Key Decisions\n\n## Next Steps\n\n## Critical Context\n- Reading files",
        fileOps: {
          read: new Set(["/a.ts", "/b.ts"]),
          written: new Set<string>(),
          edited: new Set<string>(),
        },
      });

      const ctx = makeCtx();
      const result = await handler!(
        {
          preparation: prep,
          branchEntries: [],
          signal: new AbortController().signal,
        },
        ctx,
      );

      expect(completeSimple).not.toHaveBeenCalled();
      expect(result).toBeDefined();
      expect(result.compaction.summary).toContain("Explore codebase");

      expect(ctx.ui.notify).toHaveBeenCalledWith(
        expect.stringContaining("minimal content"),
        "info",
      );
    });

    it("does NOT no-op when user has substantial input", async () => {
      const substantiveMsgs: any[] = [
        userMsg("Please refactor the authentication module to use JWT tokens instead of session cookies. This is critical for our API."),
      ];
      // Pad with reads
      for (let i = 1; i < 60; i++) {
        if (i % 2 === 1) {
          substantiveMsgs.push(
            assistantToolCallMsg([
              { id: `tc-${i}`, name: "read", args: { path: `/file-${i}.ts` } },
            ]),
          );
        } else {
          substantiveMsgs.push(toolResultMsg(`tc-${i - 1}`, "read", `contents`));
        }
      }

      const summaryText =
        "## Goal\nUpdated\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context";

      (completeSimple as any).mockResolvedValueOnce({
        content: [{ type: "text", text: summaryText }],
        stopReason: "end",
      });

      const prep = makePreparation(60, {
        messagesToSummarize: substantiveMsgs,
        previousSummary:
          "## Goal\nOld goal\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context",
        fileOps: {
          read: new Set(["/a.ts"]),
          written: new Set<string>(),
          edited: new Set<string>(),
        },
      });

      const result = await handler!(
        {
          preparation: prep,
          branchEntries: [],
          signal: new AbortController().signal,
        },
        makeCtx(),
      );

      // Should call LLM since user had real input (>100 chars)
      expect(completeSimple).toHaveBeenCalledTimes(1);
      expect(result).toBeDefined();
    });

    it("does NOT no-op without a previous summary", async () => {
      const splitTurnMsgs: any[] = [];
      for (let i = 0; i < 60; i++) {
        splitTurnMsgs.push(
          i % 2 === 0
            ? assistantToolCallMsg([{ id: `tc-${i}`, name: "edit", args: { path: `/f${i}.ts` } }])
            : toolResultMsg(`tc-${i - 1}`, "edit", `ok`),
        );
      }

      const summaryText =
        "## Goal\nFirst compaction\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context";

      (completeSimple as any).mockResolvedValueOnce({
        content: [{ type: "text", text: summaryText }],
        stopReason: "end",
      });

      const prep = makePreparation(60, {
        messagesToSummarize: splitTurnMsgs,
        previousSummary: undefined, // No previous summary
        fileOps: {
          read: new Set<string>(),
          written: new Set<string>(),
          edited: new Set(["/f0.ts"]),
        },
      });

      await handler!(
        {
          preparation: prep,
          branchEntries: [],
          signal: new AbortController().signal,
        },
        makeCtx(),
      );

      // Without previous summary, can't do no-op → falls through to LLM
      expect(completeSimple).toHaveBeenCalledTimes(1);
    });

    it("preserves Critical Context section in split-turn delta", async () => {
      const splitTurnMsgs = [
        assistantToolCallMsg([{ id: "tc-1", name: "write", args: { path: "/new.ts" } }]),
        toolResultMsg("tc-1", "write", "Created /new.ts"),
      ];
      // Pad to reach threshold
      for (let i = 2; i < 50; i++) {
        splitTurnMsgs.push(
          i % 2 === 0
            ? assistantToolCallMsg([{ id: `tc-${i}`, name: "read", args: { path: `/r${i}.ts` } }])
            : toolResultMsg(`tc-${i - 1}`, "read", "ok"),
        );
      }

      const prep = makePreparation(50, {
        messagesToSummarize: splitTurnMsgs,
        previousSummary:
          "## Goal\nBuild widget\n\n## Progress\n### Done\n- [x] init\n### In Progress\n### Blocked\n\n## Critical Context\n- Widget state lives in /widget.ts\n- Uses React hooks pattern",
        fileOps: {
          read: new Set(["/r2.ts"]),
          written: new Set(["/new.ts"]),
          edited: new Set<string>(),
        },
      });

      const result = await handler!(
        {
          preparation: prep,
          branchEntries: [],
          signal: new AbortController().signal,
        },
        makeCtx(),
      );

      expect(completeSimple).not.toHaveBeenCalled();
      const summary = result.compaction.summary;

      // Critical Context should still be there
      expect(summary).toContain("Widget state lives in /widget.ts");
      expect(summary).toContain("Uses React hooks pattern");

      // Delta should be BEFORE Critical Context
      const deltaIdx = summary.indexOf("Split-Turn Continuation");
      const criticalIdx = summary.indexOf("## Critical Context");
      expect(deltaIdx).toBeGreaterThan(-1);
      expect(criticalIdx).toBeGreaterThan(-1);
      expect(deltaIdx).toBeLessThan(criticalIdx);
    });
  });

  describe("prompt construction", () => {
    it("includes head, tail, and gap markers for large conversations", async () => {
      let capturedPrompt = "";
      (completeSimple as any).mockImplementationOnce(
        (_model: any, opts: any) => {
          capturedPrompt = opts.messages[0].content[0].text;
          return Promise.resolve({
            content: [
              {
                type: "text",
                text: "## Goal\nTest\n## Constraints\n## Progress\n### Done\n### In Progress\n### Blocked\n## Key Decisions\n## Next Steps\n## Critical Context",
              },
            ],
            stopReason: "end",
          });
        },
      );

      await handler!(
        {
          preparation: makePreparation(120),
          branchEntries: [],
          signal: new AbortController().signal,
        },
        makeCtx(),
      );

      // Should have session metadata
      expect(capturedPrompt).toContain("Total messages: 120");
      expect(capturedPrompt).toContain("Session type: implementation");

      // Should have gap markers (not all 120 messages included)
      expect(capturedPrompt).toContain("messages omitted");

      // Should have file tracking
      expect(capturedPrompt).toContain("Files Modified");
    });
  });
});
