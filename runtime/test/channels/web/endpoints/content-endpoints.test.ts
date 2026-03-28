import { describe, expect, test } from "bun:test";
import "../../../helpers.js";
import {
  handleHashtagRequest,
  handleSearchRequest,
  handleThoughtRequest,
  handleThreadRequest,
  handleTimelineRequest,
  type ContentEndpointsContext,
} from "../../../../src/channels/web/endpoints/content-endpoints.js";
import { initDatabase } from "../../../../src/db.js";
import { createJsonResponder } from "../helpers/http.js";

function createContext(overrides: Partial<ContentEndpointsContext> = {}): ContentEndpointsContext {
  return {
    defaultChatJid: "web:default",
    json: createJsonResponder(),
    getBuffer: () => undefined,
    ...overrides,
  };
}

describe("web content endpoint helpers", () => {
  test("timeline/hashtag/search/thread helpers return service responses", async () => {
    initDatabase();
    const ctx = createContext();

    const timeline = handleTimelineRequest(20, undefined, undefined, ctx);
    expect(timeline.status).toBe(200);

    const hashtag = handleHashtagRequest("dev", 20, 0, undefined, ctx);
    expect(hashtag.status).toBe(200);

    const searchBad = handleSearchRequest("", 20, 0, undefined, undefined, undefined, ctx);
    expect(searchBad.status).toBe(400);

    const threadMissing = handleThreadRequest(null, undefined, ctx);
    expect(threadMissing.status).toBe(404);
  });

  test("thought helper validates turn id and returns known buffer", async () => {
    const ctx = createContext({
      getBuffer: (turnId, panel) =>
        turnId === "t1" && panel === "draft"
          ? { text: "draft body", totalLines: 3, updatedAt: 1 }
          : undefined,
    });

    const missing = handleThoughtRequest("draft", null, ctx);
    expect(missing.status).toBe(400);

    const notFound = handleThoughtRequest("thought", "missing", ctx);
    expect(notFound.status).toBe(404);

    const ok = handleThoughtRequest("draft", "t1", ctx);
    expect(ok.status).toBe(200);
    expect(await ok.json()).toEqual({ text: "draft body", total_lines: 3 });
  });
});
