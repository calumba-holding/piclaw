/**
 * test/extensions/optional-bundled-extensions.test.ts – Smoke tests for bundled optional extensions.
 */

import { describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

type FakeState = {
  tools: Map<string, any>;
  commands: Map<string, any>;
  routes: Array<{ prefix: string; extensionDir: string }>;
};

function createFakeApi(): { api: ExtensionAPI; state: FakeState } {
  const state: FakeState = {
    tools: new Map<string, any>(),
    commands: new Map<string, any>(),
    routes: [],
  };

  const api: ExtensionAPI = {
    on() {},
    registerTool(tool: any) {
      state.tools.set(tool.name, tool);
    },
    registerCommand(name: string, options: any) {
      state.commands.set(name, options);
    },
    registerShortcut() {},
    registerFlag() {},
    getFlag() { return undefined; },
    registerMessageRenderer() {},
    sendMessage() {},
    sendUserMessage() {},
    appendEntry() {},
    setSessionName() {},
    getSessionName() { return undefined; },
    setLabel() {},
    exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
    getActiveTools: () => [],
    getAllTools: () => [],
    setActiveTools() {},
    getCommands: () => [],
    setModel: async () => true,
    getThinkingLevel: () => "off" as any,
    setThinkingLevel() {},
    registerProvider() {},
    unregisterProvider() {},
  } as unknown as ExtensionAPI;

  return { api, state };
}

function withRouteCapture<T>(state: FakeState, fn: () => Promise<T>): Promise<T> {
  const previous = (globalThis as any).__piclaw_registerRoute;
  (globalThis as any).__piclaw_registerRoute = (prefix: string, _handler: unknown, extensionDir: string) => {
    state.routes.push({ prefix, extensionDir });
  };
  return fn().finally(() => {
    if (previous === undefined) delete (globalThis as any).__piclaw_registerRoute;
    else (globalThis as any).__piclaw_registerRoute = previous;
  });
}

describe("bundled optional extensions", () => {
  test("cdp-browser registers the cdp_browser tool and cdp-tabs command", async () => {
    const { default: registerCdpBrowser } = await import("../../extensions/browser/cdp-browser/index.ts");
    const fake = createFakeApi();

    registerCdpBrowser(fake.api);

    expect(fake.state.tools.has("cdp_browser")).toBe(true);
    expect(fake.state.commands.has("cdp-tabs")).toBe(true);
    expect(fake.state.tools.get("cdp_browser")?.description).toContain("Chrome DevTools Protocol");
  });

  test("win-ui stays a safe no-op off Windows", async () => {
    const { default: registerWinUi } = await import("../../extensions/platform/windows/win-ui/index.ts");
    const fake = createFakeApi();

    registerWinUi(fake.api);

    if (process.platform === "win32") {
      expect(fake.state.tools.has("win_list_windows")).toBe(true);
      expect(fake.state.tools.has("win_screenshot")).toBe(true);
      expect(fake.state.tools.has("win_kill")).toBe(true);
    } else {
      expect(fake.state.tools.size).toBe(0);
      expect(fake.state.commands.size).toBe(0);
    }
  });

  test("drawio-editor registers its tool and route", async () => {
    const { default: registerDrawioEditor } = await import("../../extensions/viewers/drawio-editor/index.ts");
    const fake = createFakeApi();

    await withRouteCapture(fake.state, async () => {
      registerDrawioEditor(fake.api);
    });

    expect(fake.state.tools.has("open_drawio_editor")).toBe(true);
    expect(fake.state.routes.some((route) => route.prefix === "/drawio")).toBe(true);
  });
});
