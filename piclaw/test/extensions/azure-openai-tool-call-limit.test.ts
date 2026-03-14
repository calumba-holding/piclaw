import { expect, test } from "bun:test";
import "../helpers.js";

const { applyToolCallLimit } = await import("../../src/utils/azure-tool-call-limit");

const config = {
  limit: 1,
  summaryMax: 2,
  outputChars: 40,
  dedupeToolOutputSearch: true,
};

const makeCall = (callId: string, itemId: string, name: string, args: Record<string, unknown>) => ({
  type: "function_call",
  id: itemId,
  call_id: callId,
  name,
  arguments: JSON.stringify(args),
});

const makeOutput = (callId: string, output: string) => ({
  type: "function_call_output",
  call_id: callId,
  output,
});

const makeReasoning = (id: string) => ({
  type: "reasoning",
  id,
  summary: [{ type: "summary_text", text: "summary" }],
});

test("applyToolCallLimit trims oldest tool calls and inserts summary", () => {
  const messages = [
    makeReasoning("rs_old"),
    makeCall("call1", "fc_old", "bash", { command: "ls" }),
    makeOutput("call1", "first output"),
    makeReasoning("rs_keep"),
    makeCall("call2", "fc_keep", "search_tool_output", { handle: "out_1", query: "foo" }),
    makeOutput("call2", "second output"),
  ];

  const result = applyToolCallLimit(messages, config);

  expect(result.toolCallTotal).toBe(2);
  expect(result.toolCallRemoved).toBe(1);
  expect(result.toolCallKept).toBe(1);

  const callIds = result.messages
    .filter((item) => item?.type === "function_call")
    .map((item) => item.call_id);
  expect(callIds).toEqual(["call2"]);

  const reasoningIds = result.messages
    .filter((item) => item?.type === "reasoning")
    .map((item) => item.id);
  expect(reasoningIds).toContain("rs_keep");
  expect(reasoningIds).not.toContain("rs_old");

  const summary = result.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  expect(summary).toBeTruthy();
  expect(summary?.content?.[0]?.text || "").toContain("Earlier tool calls (1)");
  expect(summary?.id || "").toMatch(/^msg_/);
});

test("applyToolCallLimit dedupes search_tool_output calls", () => {
  const messages = [
    makeReasoning("rs_a"),
    makeCall("call1", "fc_a", "search_tool_output", { handle: "out_2", query: "alpha" }),
    makeOutput("call1", "first result"),
    makeReasoning("rs_b"),
    makeCall("call2", "fc_b", "search_tool_output", { handle: "out_2", query: "alpha" }),
    makeOutput("call2", "second result"),
  ];

  const result = applyToolCallLimit(messages, config);

  expect(result.toolCallTotal).toBe(2);
  expect(result.toolCallDeduped).toBe(1);
  expect(result.toolCallRemoved).toBe(1);

  const callIds = result.messages
    .filter((item) => item?.type === "function_call")
    .map((item) => item.call_id);
  expect(callIds).toEqual(["call1"]);

  const reasoningIds = result.messages
    .filter((item) => item?.type === "reasoning")
    .map((item) => item.id);
  expect(reasoningIds).toContain("rs_a");
  expect(reasoningIds).not.toContain("rs_b");

  const summary = result.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  expect(summary).toBeTruthy();
  expect(summary?.content?.[0]?.text || "").toContain("Earlier tool calls (1)");
  expect(summary?.id || "").toMatch(/^msg_/);
});

test("applyToolCallLimit honors summaryMax boundaries", () => {
  const messages = [
    makeReasoning("rs_old"),
    makeCall("call1", "fc_old", "bash", { command: "ls" }),
    makeOutput("call1", "output one"),
    makeReasoning("rs_mid"),
    makeCall("call2", "fc_mid", "bash", { command: "pwd" }),
    makeOutput("call2", "output two"),
    makeReasoning("rs_keep"),
    makeCall("call3", "fc_keep", "bash", { command: "whoami" }),
    makeOutput("call3", "output three"),
  ];

  const limited = applyToolCallLimit(messages, { ...config, limit: 1, summaryMax: 1 });
  const summary = limited.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  const summaryText = summary?.content?.[0]?.text || "";
  expect(summaryText).toContain("Earlier tool calls (2)");
  expect(summaryText).toContain("(1 more tool call(s) omitted.)");

  const noSummaryLines = applyToolCallLimit(messages, { ...config, limit: 1, summaryMax: 0 });
  const summaryNoLines = noSummaryLines.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  const summaryNoLinesText = summaryNoLines?.content?.[0]?.text || "";
  expect(summaryNoLinesText).toContain("Earlier tool calls (2)");
  expect(summaryNoLinesText).not.toContain("•");
});

test("applyToolCallLimit truncates summary output", () => {
  const messages = [
    makeReasoning("rs_old"),
    makeCall("call1", "fc_old", "bash", { command: "echo" }),
    makeOutput("call1", "very long output that should be truncated"),
    makeReasoning("rs_keep"),
    makeCall("call2", "fc_keep", "bash", { command: "ls" }),
    makeOutput("call2", "short"),
  ];

  const result = applyToolCallLimit(messages, { ...config, limit: 1, summaryMax: 1, outputChars: 10 });
  const summary = result.messages.find((item) => item?.type === "message" && item?.role === "assistant");
  const summaryText = summary?.content?.[0]?.text || "";
  expect(summaryText).toContain("…");
});
