import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

interface ListedTool {
  name: string;
  description?: string;
  parameters?: unknown;
}

interface CreateFakeExtensionApiOptions {
  allTools?: ListedTool[];
}

/**
 * Build a minimal ExtensionAPI test double and capture registered tools.
 */
export function createFakeExtensionApi(options: CreateFakeExtensionApiOptions = {}) {
  const tools = new Map<string, any>();
  let allTools = [...(options.allTools ?? [])];

  const api = {
    on() {},
    registerTool(tool: any) { tools.set(tool.name, tool); },
    registerCommand() {},
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
    getAllTools: () => allTools,
    setActiveTools() {},
    getCommands: () => [],
    setModel: async () => true,
    getThinkingLevel: () => "off" as any,
    setThinkingLevel() {},
    registerProvider() {},
    unregisterProvider() {},
  } as unknown as ExtensionAPI;

  return {
    api,
    tools,
    setAllTools(next: ListedTool[]) {
      allTools = [...next];
    },
  };
}
