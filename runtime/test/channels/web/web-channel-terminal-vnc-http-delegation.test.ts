import { afterEach, describe, expect, test } from "bun:test";

import { createWebChannelTestFixture } from "./helpers/web-channel-fixture.ts";

let cleanup: (() => void) | null = null;

afterEach(() => {
  cleanup?.();
  cleanup = null;
});

describe("WebChannel terminal/VNC HTTP delegation", () => {
  test("delegates terminal and VNC HTTP wrapper methods to the extracted service", async () => {
    const fixture = await createWebChannelTestFixture({ workspace: "temp" });
    cleanup = fixture.cleanup;

    const calls: string[] = [];
    (fixture.channel as any).terminalVncHttpService = {
      handleTerminalSession: (req: Request) => {
        calls.push(`terminal:${req.method}:${new URL(req.url).pathname}`);
        return new Response("terminal-session", { status: 201 });
      },
      handleVncSession: (req: Request) => {
        calls.push(`vnc-session:${req.method}:${new URL(req.url).searchParams.get("target") ?? ""}`);
        return new Response("vnc-session", { status: 202 });
      },
      handleVncHandoff: async (req: Request) => {
        calls.push(`vnc-handoff:${req.method}:${new URL(req.url).searchParams.get("target") ?? ""}`);
        return new Response("vnc-handoff", { status: 203 });
      },
    };

    const terminalResponse = fixture.channel.handleTerminalSession(new Request("https://example.com/terminal/session"));
    expect(terminalResponse.status).toBe(201);
    expect(await terminalResponse.text()).toBe("terminal-session");

    const vncSessionResponse = fixture.channel.handleVncSession(new Request("https://example.com/vnc/session?target=desk"));
    expect(vncSessionResponse.status).toBe(202);
    expect(await vncSessionResponse.text()).toBe("vnc-session");

    const vncHandoffResponse = await fixture.channel.handleVncHandoff(new Request("https://example.com/vnc/handoff?target=desk", { method: "POST" }));
    expect(vncHandoffResponse.status).toBe(203);
    expect(await vncHandoffResponse.text()).toBe("vnc-handoff");

    expect(calls).toEqual([
      "terminal:GET:/terminal/session",
      "vnc-session:GET:desk",
      "vnc-handoff:POST:desk",
    ]);
  });
});
