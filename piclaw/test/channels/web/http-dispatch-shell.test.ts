import { describe, expect, test } from "bun:test";
import { handleShellRoutes } from "../../../src/channels/web/http/dispatch-shell.js";
import type { RouteFlags } from "../../../src/channels/web/http/route-flags.js";

function baseFlags(): RouteFlags {
  return {
    isGetOrHead: false,
    isLoginPage: false,
    isAuthVerify: false,
    isWebauthnLoginStart: false,
    isWebauthnLoginFinish: false,
    isWebauthnRegisterStart: false,
    isWebauthnRegisterFinish: false,
    isWebauthnEnrollPage: false,
    isInternalPost: false,
    isInternalPatch: false,
    isIndex: false,
    isManifest: false,
    isFavicon: false,
    isAppleIcon: false,
    isStaticAsset: false,
    isPublicStatic: false,
    isDocsAsset: false,
    isAvatar: false,
    isMutating: false,
    isAuthEndpoint: false,
  };
}

describe("web http shell dispatch", () => {
  test("returns null when no shell route matches", async () => {
    const channel = {} as any;
    const req = new Request("https://example.com/unknown", { method: "GET" });
    const response = await handleShellRoutes(channel, req, "/unknown", baseFlags(), async () => new Response());
    expect(response).toBeNull();
  });

  test("dispatches index/manifest/static/docs/sse/agents", async () => {
    const channel = {
      serveStatic: (rel: string) => new Response(`static:${rel}`),
      handleManifest: () => new Response("manifest"),
      serveDocsStatic: (rel: string) => new Response(`docs:${rel}`),
      handleSse: () => new Response("sse"),
      handleAgents: async () => new Response("agents"),
      handleAvatar: async () => new Response("avatar", { status: 200 }),
    } as any;

    const indexFlags = { ...baseFlags(), isIndex: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/", { method: "GET" }), "/", indexFlags, async () => new Response()))?.text()).toBe("static:index.html");

    const manifestFlags = { ...baseFlags(), isManifest: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/manifest.json", { method: "GET" }), "/manifest.json", manifestFlags, async () => new Response()))?.text()).toBe("manifest");

    const staticFlags = { ...baseFlags(), isStaticAsset: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/static/x.js", { method: "GET" }), "/static/x.js", staticFlags, async () => new Response()))?.text()).toBe("static:x.js");

    const docsFlags = { ...baseFlags(), isDocsAsset: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/docs/a.md", { method: "GET" }), "/docs/a.md", docsFlags, async () => new Response()))?.text()).toBe("docs:a.md");

    expect(await (await handleShellRoutes(channel, new Request("https://e/sse/stream", { method: "GET" }), "/sse/stream", baseFlags(), async () => new Response()))?.text()).toBe("sse");
    expect(await (await handleShellRoutes(channel, new Request("https://e/agents", { method: "GET" }), "/agents", baseFlags(), async () => new Response()))?.text()).toBe("agents");
  });

  test("dispatches avatar routes and favicon/apple fallback", async () => {
    const fallback = async (_req: Request, relPath: string) => new Response(`fallback:${relPath}`);

    const channel = {
      handleAvatar: async (_kind: string) => new Response("not-found", { status: 404 }),
      serveStatic: (_rel: string) => new Response("unused"),
      handleManifest: () => new Response("unused"),
      serveDocsStatic: (_rel: string) => new Response("unused"),
      handleSse: () => new Response("unused"),
      handleAgents: async () => new Response("unused"),
    } as any;

    const faviconFlags = { ...baseFlags(), isFavicon: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/favicon.ico", { method: "GET" }), "/favicon.ico", faviconFlags, fallback))?.text()).toBe("fallback:favicon.ico");

    const appleFlags = { ...baseFlags(), isAppleIcon: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/apple-touch-icon.png", { method: "GET" }), "/apple-touch-icon.png", appleFlags, fallback))?.text()).toBe("fallback:apple-touch-icon.png");

    const avatarFlags = { ...baseFlags(), isAvatar: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/avatar/agent", { method: "GET" }), "/avatar/agent", avatarFlags, fallback))?.status).toBe(404);

    const userAvatarFlags = { ...baseFlags(), isGetOrHead: true };
    expect(await (await handleShellRoutes(channel, new Request("https://e/avatar/user", { method: "GET" }), "/avatar/user", userAvatarFlags, fallback))?.status).toBe(404);
  });
});
