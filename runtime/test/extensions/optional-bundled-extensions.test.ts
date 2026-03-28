/**
 * test/extensions/optional-bundled-extensions.test.ts – Smoke tests for bundled optional extensions.
 */

import { describe, expect, test } from "bun:test";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

type FakeState = {
  tools: Map<string, any>;
  commands: Map<string, any>;
};

function createFakeApi(): { api: ExtensionAPI; state: FakeState } {
  const state: FakeState = {
    tools: new Map<string, any>(),
    commands: new Map<string, any>(),
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
});
