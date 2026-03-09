import { describe, expect, test } from "bun:test";
import {
  handleContentPrimaryRoutes,
  handleContentSecondaryRoutes,
} from "../../../src/channels/web/http/dispatch-content.js";

describe("web http content dispatch", () => {
  test("primary returns null for non-content routes", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/agents", { method: "GET" });
    const response = await handleContentPrimaryRoutes(channel, req, "/agents", new URL(req.url));
    expect(response).toBeNull();
  });

  test("primary dispatches timeline/search/hashtag/thread", async () => {
    const channel = {
      clampInt: (_value: string | null, fallback: number) => fallback,
      parseOptionalInt: () => 7,
      handleTimeline: (limit: number, before?: number) => new Response(`timeline:${limit}:${String(before)}`),
      handleHashtag: (tag: string) => new Response(`hashtag:${tag}`),
      handleSearch: (query: string) => new Response(`search:${query}`),
      handleThread: (id: number | null) => new Response(`thread:${String(id)}`),
      handlePost: async (_req: Request, isReply: boolean) => new Response(isReply ? "reply" : "post"),
      handleUpdatePost: async (_req: Request, id: number | null) => new Response(`patch:${String(id)}`),
    } as any;

    const timelineReq = new Request("https://example.com/timeline", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, timelineReq, "/timeline", new URL(timelineReq.url)))?.text()).toBe("timeline:10:7");

    const hashtagReq = new Request("https://example.com/hashtag/demo", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, hashtagReq, "/hashtag/demo", new URL(hashtagReq.url)))?.text()).toBe("hashtag:demo");

    const searchReq = new Request("https://example.com/search?q=hello", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, searchReq, "/search", new URL(searchReq.url)))?.text()).toBe("search:hello");

    const postReq = new Request("https://example.com/post", { method: "POST" });
    expect(await (await handleContentPrimaryRoutes(channel, postReq, "/post", new URL(postReq.url)))?.text()).toBe("post");

    const replyReq = new Request("https://example.com/reply", { method: "POST" });
    expect(await (await handleContentPrimaryRoutes(channel, replyReq, "/reply", new URL(replyReq.url)))?.text()).toBe("reply");

    const patchReq = new Request("https://example.com/post/7", { method: "PATCH" });
    expect(await (await handleContentPrimaryRoutes(channel, patchReq, "/post/7", new URL(patchReq.url)))?.text()).toBe("patch:7");

    const threadReq = new Request("https://example.com/thread/7", { method: "GET" });
    expect(await (await handleContentPrimaryRoutes(channel, threadReq, "/thread/7", new URL(threadReq.url)))?.text()).toBe("thread:7");
  });

  test("secondary handles delete/internal routes", async () => {
    const channel = {
      parseOptionalInt: () => 42,
      handleDeletePost: (id: number | null, cascade: boolean) => new Response(`delete:${String(id)}:${cascade}`),
      handleInternalPost: async () => new Response("internal", { status: 201 }),
    } as any;

    const deleteReq = new Request("https://example.com/post/42?cascade=1", { method: "DELETE" });
    expect(await (await handleContentSecondaryRoutes(channel, deleteReq, "/post/42", new URL(deleteReq.url)))?.text()).toBe("delete:42:true");

    const internalReq = new Request("https://example.com/internal/post", { method: "POST" });
    expect((await handleContentSecondaryRoutes(channel, internalReq, "/internal/post", new URL(internalReq.url)))?.status).toBe(201);
  });
});
