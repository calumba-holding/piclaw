import { afterEach, describe, expect, test } from "bun:test";

import { createWebChannelTestFixture } from "./helpers/web-channel-fixture.ts";

let cleanup: (() => void) | null = null;

afterEach(() => {
  cleanup?.();
  cleanup = null;
});

type PeerMessageRelayServiceStub = {
  handleAgentPeerMessage(req: Request): Promise<Response>;
};

describe("WebChannel peer-message relay delegation", () => {
  test("delegates the public peer-message wrapper to the extracted relay service", async () => {
    const fixture = await createWebChannelTestFixture({ workspace: "temp" });
    cleanup = fixture.cleanup;

    const calls: string[] = [];
    const service: PeerMessageRelayServiceStub = {
      handleAgentPeerMessage: async (req) => {
        const url = new URL(req.url);
        calls.push(`peer-message:${req.method}:${url.pathname}`);
        return new Response("peer-message", { status: 209 });
      },
    };

    (fixture.channel as unknown as { peerMessageRelayService: PeerMessageRelayServiceStub }).peerMessageRelayService = service;

    const response = await fixture.channel.handleAgentPeerMessage(new Request("https://example.com/agent/peer-message", {
      method: "POST",
    }));

    expect(response.status).toBe(209);
    expect(await response.text()).toBe("peer-message");
    expect(calls).toEqual(["peer-message:POST:/agent/peer-message"]);
  });
});
