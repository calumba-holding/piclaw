import { afterEach, describe, expect, test } from "bun:test";
import { createWebChannelTestFixture } from "./helpers/web-channel-fixture.ts";

let cleanup: (() => void) | null = null;

afterEach(() => {
  cleanup?.();
  cleanup = null;
});

describe("WebChannel message-write delegation", () => {
  test("delegates write-path and follow-up placeholder methods to the extracted service", async () => {
    const fixture = await createWebChannelTestFixture({ workspace: "temp" });
    cleanup = fixture.cleanup;

    const calls: string[] = [];
    const placeholder = { id: 11, timestamp: "t", data: { type: "agent_response" } };
    const updated = { id: 12, timestamp: "t", data: { type: "agent_response" } };

    (fixture.channel as any).messageWriteService = {
      sendMessage: async (chatJid: string, text: string, options?: { threadId?: number | null }) => {
        calls.push(`send:${chatJid}:${text}:${options?.threadId ?? "null"}`);
      },
      postDashboardWidget: async (chatJid: string, options?: { threadId?: number | null; text?: string; widgetId?: string }) => {
        calls.push(`widget:${chatJid}:${options?.threadId ?? "null"}:${options?.widgetId ?? ""}`);
      },
      queueFollowupPlaceholder: (chatJid: string, text: string, threadId?: number, queuedContent?: string) => {
        calls.push(`queue:${chatJid}:${text}:${threadId ?? "null"}:${queuedContent ?? ""}`);
        return placeholder;
      },
      replaceQueuedFollowupPlaceholder: (
        chatJid: string,
        rowId: number,
        text: string,
        mediaIds: number[],
        _contentBlocks: Array<Record<string, unknown>> | undefined,
        threadId?: number,
        isTerminalAgentReply?: boolean,
      ) => {
        calls.push(
          `replace:${chatJid}:${rowId}:${text}:${mediaIds.join(",")}:${threadId ?? "null"}:${isTerminalAgentReply ? 1 : 0}`
        );
        return updated;
      },
    };

    await fixture.channel.sendMessage("web:test", "hello", { threadId: 9 });
    await fixture.channel.postDashboardWidget("web:test", { threadId: 8, widgetId: "widget-delegate" });
    expect(fixture.channel.queueFollowupPlaceholder("web:test", "queued", 7, "later")).toBe(placeholder);
    expect(
      fixture.channel.replaceQueuedFollowupPlaceholder(
        "web:test",
        12,
        "updated",
        [1, 2],
        [{ type: "text" }],
        6,
        true,
      )
    ).toBe(updated);

    expect(calls).toEqual([
      "send:web:test:hello:9",
      "widget:web:test:8:widget-delegate",
      "queue:web:test:queued:7:later",
      "replace:web:test:12:updated:1,2:6:1",
    ]);
  });
});
