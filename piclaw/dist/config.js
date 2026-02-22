import { resolve } from "path";
import { readEnvFile } from "./env.js";
const envConfig = readEnvFile(["ASSISTANT_NAME"]);
export const ASSISTANT_NAME = process.env.ASSISTANT_NAME || envConfig.ASSISTANT_NAME || "pi";
export const POLL_INTERVAL = 2000;
export const SCHEDULER_POLL_INTERVAL = 60000;
// All paths are env-configurable so they work with any volume layout.
// Defaults assume /workspace is the persistent external volume.
export const WORKSPACE_DIR = resolve(process.env.PICLAW_WORKSPACE || "/workspace");
export const STORE_DIR = resolve(process.env.PICLAW_STORE || `${WORKSPACE_DIR}/.piclaw/store`);
export const DATA_DIR = resolve(process.env.PICLAW_DATA || `${WORKSPACE_DIR}/.piclaw/data`);
export const AGENT_TIMEOUT = parseInt(process.env.AGENT_TIMEOUT || "600000", 10); // 10min default
export const IPC_POLL_INTERVAL = 1000;
export const WEB_PORT = parseInt(process.env.PICLAW_WEB_PORT || "8080", 10);
export const WEB_HOST = process.env.PICLAW_WEB_HOST || "0.0.0.0";
export const SESSIONS_DIR = resolve(DATA_DIR, "sessions");
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export const TRIGGER_PATTERN = new RegExp(`(?:^|\\s)@${escapeRegex(ASSISTANT_NAME)}\\b`, "i");
export const TIMEZONE = process.env.TZ || Intl.DateTimeFormat().resolvedOptions().timeZone;
