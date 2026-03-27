import { describe, expect, test } from "bun:test";

import { handleShellRoutes } from "../../../src/channels/web/http/dispatch-shell.js";
import { buildRouteFlags } from "./helpers/route-flags.js";

describe("web session broadcast routing", () => {
  test("/sse/stream continues to delegate through the channel SSE surface", async () => {
    const calls: Request[] = [];
    const response = new Response("sse");
    const channel = {
      handleSse: (req: Request) => {
        calls.push(req);
        return response;
      },
    } as any;
    const req = new Request("https://example.test/sse/stream?chat_jid=web:branch-a", { method: "GET" });

    const routed = await handleShellRoutes(channel, req, "/sse/stream", buildRouteFlags(), async () => new Response("fallback"));

    expect(routed).toBe(response);
    expect(calls).toEqual([req]);
  });
});
