#!/usr/bin/env bun
import { mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { ASSISTANT_NAME, DATA_DIR, POLL_INTERVAL, PUSHOVER_APP_TOKEN, PUSHOVER_DEVICE, PUSHOVER_PRIORITY, PUSHOVER_SOUND, PUSHOVER_USER_KEY, STORE_DIR, TRIGGER_PATTERN, WORKSPACE_DIR, TOOL_OUTPUT_RETENTION_DAYS, TOOL_OUTPUT_CLEANUP_INTERVAL_MS } from "./config.js";
import { initDatabase, getMessagesSince, getNewMessages, getRouterState, setRouterState, storeMessage, storeChatMetadata } from "./db.js";
import { AgentPool } from "./agent-pool.js";
import { AgentQueue } from "./queue.js";
import { startIpcWatcher } from "./ipc.js";
import { startSchedulerLoop } from "./task-scheduler.js";
import { WhatsAppChannel } from "./channels/whatsapp.js";
import { WebChannel } from "./channels/web.js";
import { PushoverChannel } from "./channels/pushover.js";
import { detectChannel, formatMessages, formatOutbound } from "./router.js";
import { startToolOutputCleanup } from "./tool-output.js";
import { parseControlCommand } from "./agent-control.js";
const HELP_TEXT = `piclaw - Pi Coding Agent Assistant

Usage:
  piclaw [options]

Options:
  -h, --help                 Show this help
  -v, --version              Show version
  -p, --port <number>        Web UI port (default: 8080)
      --host <addr>          Web UI host (default: 0.0.0.0)
      --idle-timeout <secs>  Web idle timeout in seconds (default: 0 = disabled)
`;
function getVersion() {
    try {
        const packagePath = join(import.meta.dir, "..", "package.json");
        const data = JSON.parse(readFileSync(packagePath, "utf-8"));
        return data.version || "unknown";
    }
    catch {
        return "unknown";
    }
}
function handleCliOptions() {
    const args = process.argv.slice(2);
    if (args.includes("-h") || args.includes("--help")) {
        console.log(HELP_TEXT.trim());
        process.exit(0);
    }
    if (args.includes("-v") || args.includes("--version")) {
        console.log(getVersion());
        process.exit(0);
    }
}
handleCliOptions();
let lastTimestamp = "";
let lastAgentTimestamp = {};
const queue = new AgentQueue();
const agentPool = new AgentPool();
let whatsapp;
let web;
let pushover = null;
// Chat JIDs we listen on — loaded from data/chats.json
let chatJids = new Set();
const processedCommandIds = new Map();
function getProcessedCommandSet(chatJid) {
    const existing = processedCommandIds.get(chatJid);
    if (existing)
        return existing;
    const set = new Set();
    processedCommandIds.set(chatJid, set);
    return set;
}
function markCommandProcessed(chatJid, messageId) {
    getProcessedCommandSet(chatJid).add(messageId);
}
function wasCommandProcessed(chatJid, messageId) {
    return getProcessedCommandSet(chatJid).has(messageId);
}
function loadChats() {
    const chatsFile = join(DATA_DIR, "chats.json");
    if (existsSync(chatsFile)) {
        const data = JSON.parse(readFileSync(chatsFile, "utf-8"));
        chatJids = new Set(data.jids || []);
    }
    // Self-chat is always included (determined after WhatsApp connects)
}
function saveChats() {
    const chatsFile = join(DATA_DIR, "chats.json");
    writeFileSync(chatsFile, JSON.stringify({ jids: [...chatJids] }, null, 2));
}
function loadState() {
    lastTimestamp = getRouterState("last_timestamp") || "";
    const agentTs = getRouterState("last_agent_timestamp");
    try {
        lastAgentTimestamp = agentTs ? JSON.parse(agentTs) : {};
    }
    catch {
        lastAgentTimestamp = {};
    }
}
function saveState() {
    setRouterState("last_timestamp", lastTimestamp);
    setRouterState("last_agent_timestamp", JSON.stringify(lastAgentTimestamp));
}
async function processMessages(chatJid) {
    const since = lastAgentTimestamp[chatJid] || "";
    const messages = getMessagesSince(chatJid, since, ASSISTANT_NAME);
    if (messages.length === 0)
        return true;
    const commandQueue = [];
    const promptMessages = [];
    for (const message of messages) {
        const command = !message.is_bot_message
            ? parseControlCommand(message.content, TRIGGER_PATTERN)
            : null;
        if (command) {
            if (!wasCommandProcessed(chatJid, message.id)) {
                commandQueue.push({ message, command });
            }
            continue;
        }
        promptMessages.push(message);
    }
    for (const { message, command } of commandQueue) {
        const result = await agentPool.applyControlCommand(chatJid, command);
        await whatsapp.sendMessage(chatJid, result.message);
        markCommandProcessed(chatJid, message.id);
    }
    // Check trigger on non-command messages only
    const hasTrigger = promptMessages.some((m) => TRIGGER_PATTERN.test(m.content.trim()));
    if (!hasTrigger)
        return true;
    const channel = detectChannel(chatJid);
    const prompt = formatMessages(promptMessages, channel);
    const prevCursor = lastAgentTimestamp[chatJid] || "";
    lastAgentTimestamp[chatJid] = messages[messages.length - 1].timestamp;
    saveState();
    console.log(`[piclaw] Processing ${promptMessages.length} messages from ${chatJid}`);
    await whatsapp.setTyping(chatJid, true);
    const output = await agentPool.runAgent(prompt, chatJid);
    await whatsapp.setTyping(chatJid, false);
    if (output.status === "error") {
        lastAgentTimestamp[chatJid] = prevCursor;
        saveState();
        console.error(`[piclaw] Agent error: ${output.error}`);
        return false;
    }
    if (output.result) {
        const text = formatOutbound(output.result, channel);
        if (text)
            await whatsapp.sendMessage(chatJid, text);
    }
    return true;
}
async function messageLoop() {
    console.log(`[piclaw] Running (trigger: @${ASSISTANT_NAME})`);
    while (true) {
        try {
            const jids = [...chatJids];
            const { messages, newTimestamp } = getNewMessages(jids, lastTimestamp, ASSISTANT_NAME);
            if (messages.length > 0) {
                lastTimestamp = newTimestamp;
                saveState();
                // Deduplicate by chat
                const byChat = new Map();
                for (const msg of messages)
                    byChat.set(msg.chat_jid, true);
                for (const chatJid of byChat.keys()) {
                    queue.enqueue(async () => {
                        const ok = await processMessages(chatJid);
                        if (!ok)
                            throw new Error(`Agent processing failed for ${chatJid}`);
                    }, `chat:${chatJid}`);
                }
            }
        }
        catch (err) {
            console.error("[piclaw] Message loop error:", err);
        }
        await Bun.sleep(POLL_INTERVAL);
    }
}
async function main() {
    // Ensure directories
    mkdirSync(STORE_DIR, { recursive: true });
    mkdirSync(DATA_DIR, { recursive: true });
    mkdirSync(WORKSPACE_DIR, { recursive: true });
    initDatabase();
    startToolOutputCleanup(TOOL_OUTPUT_RETENTION_DAYS, TOOL_OUTPUT_CLEANUP_INTERVAL_MS);
    loadState();
    loadChats();
    console.log("=== Piclaw - Pi Coding Agent Assistant ===");
    // Graceful shutdown
    const shutdown = async (signal) => {
        console.log(`[piclaw] ${signal} received, shutting down...`);
        await queue.shutdown(5000);
        await agentPool.shutdown();
        await whatsapp.disconnect();
        await web?.stop();
        await pushover?.stop();
        process.exit(0);
    };
    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
    web = new WebChannel({ queue, agentPool });
    await web.start();
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
        chatJids: () => chatJids,
        onMessage: (chatJid, msg) => {
            // Auto-register self-chat
            if (!chatJids.has(chatJid) && msg.is_from_me) {
                chatJids.add(chatJid);
                saveChats();
            }
            storeMessage(msg);
        },
        onChatMetadata: (chatJid, timestamp) => storeChatMetadata(chatJid, timestamp),
    });
    const sendMessage = async (jid, text) => {
        if (jid.startsWith("web:")) {
            await web.sendMessage(jid, text);
            return;
        }
        await whatsapp.sendMessage(jid, text);
    };
    const sendNudge = pushover
        ? async (text) => {
            await pushover.sendMessage("", text).catch((err) => console.error("[pushover] Failed to send nudge:", err));
        }
        : undefined;
    startIpcWatcher({
        sendMessage,
        sendNudge,
    });
    startSchedulerLoop({
        queue,
        agentPool,
        sendMessage,
        sendNudge,
    });
    await whatsapp.connect();
    messageLoop();
}
main().catch((err) => {
    console.error("[piclaw] Fatal:", err);
    process.exit(1);
});
