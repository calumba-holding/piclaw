import { mkdirSync } from "fs";
import { join } from "path";
import makeWASocket, { Browsers, DisconnectReason, makeCacheableSignalKeyStore, useMultiFileAuthState, } from "@whiskeysockets/baileys";
import qrcode from "qrcode-terminal";
import { ASSISTANT_NAME, STORE_DIR } from "../config.js";
// Minimal pino-compatible logger for baileys (it requires one)
const silentLogger = {
    level: "silent",
    child: () => silentLogger,
    trace: () => { },
    debug: () => { },
    info: () => { },
    warn: () => { },
    error: () => { },
    fatal: () => { },
};
export class WhatsAppChannel {
    sock;
    connected = false;
    outgoingQueue = [];
    flushing = false;
    opts;
    constructor(opts) {
        this.opts = opts;
    }
    async connect() {
        return new Promise((resolve, reject) => {
            this.connectInternal(resolve).catch(reject);
        });
    }
    async connectInternal(onFirstOpen) {
        const authDir = join(STORE_DIR, "auth");
        mkdirSync(authDir, { recursive: true });
        const { state, saveCreds } = await useMultiFileAuthState(authDir);
        this.sock = makeWASocket({
            auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, silentLogger) },
            logger: silentLogger,
            browser: Browsers.macOS("Chrome"),
        });
        this.sock.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect, qr } = update;
            if (qr) {
                qrcode.generate(qr, { small: true }, (code) => {
                    console.log("\n" + code);
                    console.log("[whatsapp] Scan the QR code above to authenticate\n");
                });
            }
            if (connection === "close") {
                this.connected = false;
                const reason = lastDisconnect?.error?.output?.statusCode;
                const shouldReconnect = reason !== DisconnectReason.loggedOut;
                if (shouldReconnect) {
                    console.log("[whatsapp] Disconnected, reconnecting...");
                    const pending = onFirstOpen;
                    onFirstOpen = undefined;
                    this.connectInternal(pending).catch((err) => {
                        console.error("[whatsapp] Reconnect failed, retrying in 5s:", err);
                        setTimeout(() => this.connectInternal(pending).catch(console.error), 5000);
                    });
                }
                else {
                    console.log("[whatsapp] Logged out. Re-authenticate to continue.");
                    process.exit(0);
                }
            }
            else if (connection === "open") {
                this.connected = true;
                console.log("[whatsapp] Connected");
                this.sock.sendPresenceUpdate("available").catch(() => { });
                this.flushOutgoingQueue().catch(console.error);
                if (onFirstOpen) {
                    onFirstOpen();
                    onFirstOpen = undefined;
                }
            }
        });
        this.sock.ev.on("creds.update", saveCreds);
        this.sock.ev.on("messages.upsert", async ({ messages }) => {
            for (const msg of messages) {
                if (!msg.message)
                    continue;
                const chatJid = msg.key.remoteJid;
                if (!chatJid || chatJid === "status@broadcast")
                    continue;
                const timestamp = new Date(Number(msg.messageTimestamp) * 1000).toISOString();
                const content = msg.message?.conversation || msg.message?.extendedTextMessage?.text || msg.message?.imageMessage?.caption || "";
                const sender = msg.key.participant || msg.key.remoteJid || "";
                const senderName = msg.pushName || sender.split("@")[0];
                const fromMe = msg.key.fromMe || false;
                const isBotMessage = content.startsWith(`${ASSISTANT_NAME}:`);
                const msgId = msg.key.id || `fallback-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
                this.opts.onChatMetadata(chatJid, timestamp);
                // Skip non-text messages (images without captions, stickers, audio, etc.)
                if (!content)
                    continue;
                // Store messages from monitored chats (or any from-me message for auto-registration)
                const jids = this.opts.chatJids();
                if (jids.has(chatJid) || fromMe) {
                    this.opts.onMessage(chatJid, {
                        id: msgId,
                        chat_jid: chatJid,
                        sender,
                        sender_name: senderName,
                        content,
                        timestamp,
                        is_from_me: fromMe,
                        is_bot_message: isBotMessage,
                    });
                }
            }
        });
    }
    async sendMessage(jid, text) {
        const prefixed = `${ASSISTANT_NAME}: ${text}`;
        if (!this.connected) {
            this.outgoingQueue.push({ jid, text: prefixed });
            return;
        }
        try {
            await this.sock.sendMessage(jid, { text: prefixed });
        }
        catch {
            this.outgoingQueue.push({ jid, text: prefixed });
        }
    }
    isConnected() { return this.connected; }
    async disconnect() {
        this.connected = false;
        this.sock?.end(undefined);
    }
    async setTyping(jid, isTyping) {
        try {
            await this.sock.sendPresenceUpdate(isTyping ? "composing" : "paused", jid);
        }
        catch { }
    }
    async flushOutgoingQueue() {
        if (this.flushing || this.outgoingQueue.length === 0)
            return;
        this.flushing = true;
        try {
            while (this.outgoingQueue.length > 0) {
                const item = this.outgoingQueue.shift();
                await this.sock.sendMessage(item.jid, { text: item.text });
            }
        }
        finally {
            this.flushing = false;
        }
    }
}
