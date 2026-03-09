/**
 * runtime.ts – Application lifecycle: startup, polling loop, and shutdown.
 *
 * This is the top-level orchestrator that wires together all subsystems:
 *   - Initialises the database (db/connection.ts).
 *   - Creates the AgentPool, AgentQueue, and RuntimeState.
 *   - Starts the WhatsApp channel (if configured), web channel, Pushover, IPC.
 *   - Runs the main message-polling loop and task scheduler.
 *   - Handles graceful shutdown (SIGINT/SIGTERM).
 *
 * Consumers:
 *   - index.ts calls startRuntime() as the entry point.
 */

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import {
  ASSISTANT_NAME,
  DATA_DIR,
  POLL_INTERVAL,
  PUSHOVER_APP_TOKEN,
  PUSHOVER_DEVICE,
  PUSHOVER_PRIORITY,
  PUSHOVER_SOUND,
  PUSHOVER_USER_KEY,
  STORE_DIR,
  TRIGGER_PATTERN,
  WORKSPACE_DIR,
  TOOL_OUTPUT_RETENTION_DAYS,
  TOOL_OUTPUT_CLEANUP_INTERVAL_MS,
  WHATSAPP_PHONE,
} from "./core/config.js";
import { initDatabase, storeMessage, storeChatMetadata } from "./db.js";
import { AgentPool } from "./agent-pool.js";
import { AgentQueue } from "./queue.js";
import { startIpcWatcher, stopIpcWatcher } from "./ipc.js";
import { startSchedulerLoop, stopSchedulerLoop } from "./task-scheduler.js";
import { WhatsAppChannel } from "./channels/whatsapp.js";
import { WebChannel } from "./channels/web.js";
import { PushoverChannel } from "./channels/pushover.js";
import { startToolOutputCleanup } from "./tool-output.js";
import { createUuid } from "./utils/ids.js";
import { processMessages, runMessageLoop } from "./runtime/message-loop.js";
import { registerOptionalProviders } from "./runtime/provider-bootstrap.js";
import { RuntimeState } from "./runtime/state.js";
import { createShutdownHandler } from "./runtime/shutdown.js";

const queue = new AgentQueue();
const agentPool = new AgentPool();
let whatsapp: WhatsAppChannel;
let web: WebChannel;
let pushover: PushoverChannel | null = null;

const state = new RuntimeState(DATA_DIR);


/** Boot all subsystems (DB, channels, agent pool, scheduler) and enter the main loop. */
export async function main(): Promise<void> {
  // Ensure directories
  mkdirSync(STORE_DIR, { recursive: true });
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(WORKSPACE_DIR, { recursive: true });

  initDatabase();
  startToolOutputCleanup(TOOL_OUTPUT_RETENTION_DAYS, TOOL_OUTPUT_CLEANUP_INTERVAL_MS);
  state.loadTimestamps();
  state.loadChats();

  registerOptionalProviders(agentPool);

  console.log("=== Piclaw - Pi Coding Agent Assistant ===");

  web = new WebChannel({ queue, agentPool });
  await web.start();
  // Recover any runs that were interrupted by a crash or kill signal.
  // Must run after start() (queue is ready) but before new messages arrive.
  web.recoverInflightRuns();
  // Resume any queued messages that arrived after the last stored cursor.
  // This ensures pending work is processed after a reload.
  web.resumePendingChats();

  if (PUSHOVER_APP_TOKEN && PUSHOVER_USER_KEY) {
    pushover = new PushoverChannel({
      appToken: PUSHOVER_APP_TOKEN,
      userKey: PUSHOVER_USER_KEY,
      device: PUSHOVER_DEVICE || undefined,
      priority: PUSHOVER_PRIORITY,
      sound: PUSHOVER_SOUND || undefined,
    });
    await pushover.start();
  }

  whatsapp = new WhatsAppChannel({
    chatJids: () => state.chatJids,
    phoneNumber: WHATSAPP_PHONE || undefined,
    onPairingCode: (code) => {
      try {
        const ipcDir = join(DATA_DIR, "ipc", "messages");
        mkdirSync(ipcDir, { recursive: true });
        const payload = {
          type: "message",
          chatJid: "web:default",
          text: code,
        };
        const filePath = join(ipcDir, `${createUuid("pairing")}.json`);
        writeFileSync(filePath, JSON.stringify(payload));
      } catch (err) {
        console.error("[whatsapp] Failed to write pairing code IPC message:", err);
      }
    },
    onMessage: (chatJid, msg) => {
      if (!state.chatJids.has(chatJid) && msg.is_from_me) {
        state.chatJids.add(chatJid);
        state.saveChats();
      }
      storeMessage(msg);
    },
    onChatMetadata: (chatJid, timestamp) => storeChatMetadata(chatJid, timestamp),
  });

  const shutdown = createShutdownHandler({
    queue,
    agentPool,
    whatsapp,
    web,
    pushover,
    stopIpcWatcher,
    stopSchedulerLoop,
  });
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  const sendMessage = async (
    jid: string,
    text: string,
    options?: { forceRoot?: boolean; threadId?: number | null; source?: string }
  ) => {
    if (jid.startsWith("web:")) {
      await web.sendMessage(jid, text, options);
      return;
    }
    await whatsapp.sendMessage(jid, text);
  };

  const sendNudge = pushover
    ? async (text: string) => {
        await pushover!.sendMessage("", text).catch((err) =>
          console.error("[pushover] Failed to send nudge:", err)
        );
      }
    : undefined;

  startIpcWatcher({
    sendMessage,
    sendNudge,
    resolveModel: (input) => agentPool.resolveModelInput(input),
    resumeChat: async (data) => {
      const chatJid = typeof data.chatJid === "string" && data.chatJid.trim()
        ? data.chatJid.trim()
        : "web:default";
      const threadRootId = typeof data.threadRootId === "number" ? data.threadRootId : null;
      web.resumeChat(chatJid, threadRootId);
    },
    resumePending: async (data) => {
      const chatJid = typeof data?.chatJid === "string" && data.chatJid.trim()
        ? data.chatJid.trim()
        : undefined;
      web.resumePendingChats(chatJid);
    },
  });

  startSchedulerLoop({
    queue,
    agentPool,
    sendMessage,
    sendNudge,
  });

  await whatsapp.connect();

  runMessageLoop({
    queue,
    state,
    assistantName: ASSISTANT_NAME,
    pollIntervalMs: POLL_INTERVAL,
    processMessages: (chatJid) =>
      processMessages(chatJid, {
        agentPool,
        whatsapp,
        state,
        assistantName: ASSISTANT_NAME,
        triggerPattern: TRIGGER_PATTERN,
      }),
  });
}
