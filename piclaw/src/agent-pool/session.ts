import { mkdirSync, existsSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import {
  type AgentSession,
  createAgentSession,
  DefaultResourceLoader,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
  type ToolDefinition,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../config.js";

export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

function resolveBuiltInExtensions(): string[] {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const rootDir = resolve(currentDir, "..", "..");
  const extensionPath = join(rootDir, "extensions", "model-control.ts");
  return existsSync(extensionPath) ? [extensionPath] : [];
}

export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: unknown[];
    customTools?: ToolDefinition[];
  }
): Promise<AgentSession> {
  const chatSessionDir = ensureSessionDir(chatJid);
  const resourceLoader = new DefaultResourceLoader({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    settingsManager: options.settingsManager,
    additionalExtensionPaths: resolveBuiltInExtensions(),
  });
  await resourceLoader.reload();

  const { session } = await createAgentSession({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    authStorage: options.authStorage,
    modelRegistry: options.modelRegistry,
    settingsManager: options.settingsManager,
    resourceLoader,
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
    tools: options.tools as any,
    customTools: options.customTools,
  });

  return session;
}

export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
