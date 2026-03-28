import { afterEach, describe, expect, test } from "bun:test";

import { createWebChannelTestFixture } from "./helpers/web-channel-fixture.ts";

let cleanup: (() => void) | null = null;

afterEach(() => {
  cleanup?.();
  cleanup = null;
});

type AdaptiveCardSidePromptServiceStub = {
  handleAdaptiveCardAction(req: Request): Promise<Response>;
  handleAgentSidePrompt(req: Request): Promise<Response>;
  handleAgentSidePromptStream(req: Request): Promise<Response>;
};

describe("WebChannel adaptive-card/side-prompt delegation", () => {
  test("delegates adaptive-card and side-prompt wrappers to the extracted service", async () => {
    const fixture = await createWebChannelTestFixture({ workspace: "temp" });
    cleanup = fixture.cleanup;

    const calls: string[] = [];
    const response = (label: string, status = 200) => new Response(label, { status });
    const service: AdaptiveCardSidePromptServiceStub = {
      handleAdaptiveCardAction: async (req) => {
        const url = new URL(req.url);
        calls.push(`card:${req.method}:${url.pathname}`);
        return response("card-action", 205);
      },
      handleAgentSidePrompt: async (req) => {
        const url = new URL(req.url);
        calls.push(`side-prompt:${req.method}:${url.pathname}`);
        return response("side-prompt", 206);
      },
      handleAgentSidePromptStream: async (req) => {
        const url = new URL(req.url);
        calls.push(`side-prompt-stream:${req.method}:${url.pathname}`);
        return response("side-prompt-stream", 207);
      },
    };

    (fixture.channel as unknown as { adaptiveCardSidePromptService: AdaptiveCardSidePromptServiceStub }).adaptiveCardSidePromptService = service;

    expect((await fixture.channel.handleAdaptiveCardAction(new Request("https://example.com/agent/card-action", { method: "POST" }))).status)
      .toBe(205);
    expect((await fixture.channel.handleAgentSidePrompt(new Request("https://example.com/agent/side-prompt", { method: "POST" }))).status)
      .toBe(206);
    expect((await fixture.channel.handleAgentSidePromptStream(new Request("https://example.com/agent/side-prompt/stream", { method: "POST" }))).status)
      .toBe(207);

    expect(calls).toEqual([
      "card:POST:/agent/card-action",
      "side-prompt:POST:/agent/side-prompt",
      "side-prompt-stream:POST:/agent/side-prompt/stream",
    ]);
  });
});
