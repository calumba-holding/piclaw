#!/usr/bin/env bun
import { mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { ASSISTANT_NAME, DATA_DIR, POLL_INTERVAL, STORE_DIR, TRIGGER_PATTERN, WORKSPACE_DIR } from "./config.js";
import { initDatabase, getMessagesSince, getNewMessages, getRouterState, setRouterState, storeMessage, storeChatMetadata } from "./db.js";
import { runAgent } from "./agent-runner.js";
import { AgentQueue } from "./queue.js";
import { startIpcWatcher } from "./ipc.js";
import { startSchedulerLoop } from "./task-scheduler.js";
import { WhatsAppChannel } from "./channels/whatsapp.js";
import { WebChannel } from "./channels/web.js";
import { formatMessages, formatOutbound } from "./router.js";
let lastTimestamp = "";
let lastAgentTimestamp = {};
const queue = new AgentQueue();
let whatsapp;
let web;
// Chat JIDs we listen on — loaded from data/chats.json
let chatJids = new Set();
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
    // Check trigger
    const hasTrigger = messages.some((m) => TRIGGER_PATTERN.test(m.content.trim()));
    if (!hasTrigger)
        return true;
    const prompt = formatMessages(messages);
    const prevCursor = lastAgentTimestamp[chatJid] || "";
    lastAgentTimestamp[chatJid] = messages[messages.length - 1].timestamp;
    saveState();
    console.log(`[piclaw] Processing ${messages.length} messages from ${chatJid}`);
    await whatsapp.setTyping(chatJid, true);
    const output = await runAgent(prompt, chatJid);
    await whatsapp.setTyping(chatJid, false);
    if (output.status === "error") {
        lastAgentTimestamp[chatJid] = prevCursor;
        saveState();
        console.error(`[piclaw] Agent error: ${output.error}`);
        return false;
    }
    if (output.result) {
        const text = formatOutbound(output.result);
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
    loadState();
    loadChats();
    console.log("=== Piclaw - Pi Coding Agent Assistant ===");
    // Graceful shutdown
    const shutdown = async (signal) => {
        console.log(`[piclaw] ${signal} received, shutting down...`);
        await queue.shutdown(5000);
        await whatsapp.disconnect();
        await web?.stop();
        process.exit(0);
    };
    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
    web = new WebChannel({ queue });
    await web.start();
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
    await whatsapp.connect();
    const sendMessage = async (jid, text) => {
        if (jid.startsWith("web:")) {
            await web.sendMessage(jid, text);
            return;
        }
        await whatsapp.sendMessage(jid, text);
    };
    startIpcWatcher({
        sendMessage,
    });
    startSchedulerLoop({
        queue,
        sendMessage,
    });
    messageLoop();
}
main().catch((err) => {
    console.error("[piclaw] Fatal:", err);
    process.exit(1);
});
