import { describe, expect, test } from "bun:test";
import "../helpers.ts";
import { setMessagesPostFn } from "../../src/extensions/messages-crud.js";
import { sendDashboardWidget } from "../../src/extensions/send-dashboard-widget.js";
import { withChatContext } from "../../src/core/chat-context.js";

describe("send_dashboard_widget tool", () => {
  test("posts the staged dashboard widget to the active web chat", async () => {
    const tools = new Map<string, any>();
    const beforeAgentStartHandlers: Array<(event: any) => Promise<any>> = [];
    const calls: Array<{ chatJid: string; content: string; isBot: boolean; mediaIds: number[]; contentBlocks?: unknown[] }> = [];

    setMessagesPostFn((chatJid, content, isBot, mediaIds, contentBlocks) => {
      calls.push({ chatJid, content, isBot, mediaIds, contentBlocks });
      return 321;
    });

    try {
      sendDashboardWidget({
        on(event: string, handler: (event: any) => Promise<any>) {
          if (event === "before_agent_start") beforeAgentStartHandlers.push(handler);
        },
        registerTool(def: any) {
          tools.set(def.name, def);
        },
      } as any);

      expect(beforeAgentStartHandlers).toHaveLength(1);
      const tool = tools.get("send_dashboard_widget");
      expect(tool).toBeTruthy();

      const result = await withChatContext("web:test", "web", () =>
        tool.execute("tool-1", {}),
      );

      expect(calls).toHaveLength(1);
      expect(calls[0].chatJid).toBe("web:test");
      expect(calls[0].content).toContain("Live dashboard ready");
      expect(calls[0].isBot).toBe(true);
      expect(Array.isArray(calls[0].contentBlocks)).toBe(true);
      expect((calls[0].contentBlocks as any[])[0].type).toBe("generated_widget");
      expect((calls[0].contentBlocks as any[])[0].capabilities).toEqual(["interactive"]);
      expect((result.details as Record<string, unknown>).tool).toBe("send_dashboard_widget");
    } finally {
      setMessagesPostFn(undefined);
    }
  });

  test("returns a clear error outside the web channel", async () => {
    const tools = new Map<string, any>();
    sendDashboardWidget({
      on() {},
      registerTool(def: any) {
        tools.set(def.name, def);
      },
    } as any);

    const tool = tools.get("send_dashboard_widget");
    const result = await withChatContext("whatsapp:test", "whatsapp", () =>
      tool.execute("tool-2", {}),
    );

    expect((result.details as Record<string, unknown>).error).toContain("only available in the web UI");
  });
});
