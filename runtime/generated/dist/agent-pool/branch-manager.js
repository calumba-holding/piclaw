/**
 * agent-pool/branch-manager.ts – Branch identity, listing, and fork lifecycle helpers.
 *
 * Keeps chat-branch registration and branch/session coordination out of the
 * top-level AgentPool coordinator while preserving the existing branch semantics.
 */
import { getIdentityConfig } from "../core/config.js";
import { archiveChatBranch, ensureChatBranch, getChatBranchByAgentName, getChatBranchByChatJid, listChatBranches, renameChatBranchIdentity, restoreChatBranchIdentity, storeChatMetadata, } from "../db.js";
import { createUuid } from "../utils/ids.js";
import { forcePersistSessionFile, seedRotatedSession } from "../session-rotation.js";
function normalizeAgentHandlePart(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-{2,}/g, "-");
}
function deriveAgentHandle(chatJid, sessionName) {
    const sessionHandle = sessionName ? normalizeAgentHandlePart(sessionName) : "";
    if (sessionHandle)
        return sessionHandle;
    const jidTail = chatJid.split(/[:/]/).filter(Boolean).pop() || chatJid;
    if (jidTail === "default") {
        const configHandle = normalizeAgentHandlePart(getIdentityConfig().assistantName || "");
        if (configHandle)
            return configHandle;
    }
    const jidHandle = normalizeAgentHandlePart(jidTail);
    if (jidHandle)
        return jidHandle;
    return "agent";
}
function buildForkedChatJid(sourceChatJid) {
    const root = sourceChatJid.startsWith("web:") ? sourceChatJid : `web:${sourceChatJid}`;
    return `${root}:branch:${createUuid("chat").split("-").pop()}`;
}
function createVolatileBranchRecord(chatJid, session) {
    return {
        branch_id: `volatile:${chatJid}`,
        chat_jid: chatJid,
        root_chat_jid: chatJid,
        parent_branch_id: null,
        agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
        display_name: null,
        created_at: new Date(0).toISOString(),
        updated_at: new Date(0).toISOString(),
        archived_at: null,
    };
}
function normalizeThinkingLevel(value) {
    return value === "off" || value === "minimal" || value === "low" || value === "medium" || value === "high" || value === "xhigh"
        ? value
        : null;
}
function isAppendableAgentMessage(message) {
    if (!message || typeof message !== "object")
        return false;
    const role = message.role;
    return role === "user"
        || role === "assistant"
        || role === "system"
        || role === "tool"
        || role === "bashExecution"
        || role === "custom";
}
function getStableForkSeed(sourceSession, stableLeafId) {
    const branchEntries = stableLeafId === null
        ? []
        : (typeof sourceSession.sessionManager?.getBranch === "function"
            ? sourceSession.sessionManager.getBranch(stableLeafId)
            : []);
    let model = null;
    let thinkingLevel = null;
    for (const entry of branchEntries) {
        if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            model = { provider: entry.provider, modelId: entry.modelId };
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            thinkingLevel = normalizeThinkingLevel(entry.thinkingLevel);
        }
        else if (entry?.type === "message" && entry.message?.role === "assistant" && typeof entry.message?.provider === "string" && typeof entry.message?.model === "string") {
            model = { provider: entry.message.provider, modelId: entry.message.model };
        }
    }
    return { branchEntries, model, thinkingLevel };
}
function seedSessionManagerFromBranchEntries(sessionManager, branchEntries, fallback) {
    if (!Array.isArray(branchEntries) || branchEntries.length === 0) {
        if (fallback.sessionName?.trim()) {
            sessionManager.appendSessionInfo(fallback.sessionName.trim());
        }
        if (fallback.model) {
            sessionManager.appendModelChange(fallback.model.provider, fallback.model.modelId);
        }
        return;
    }
    const sourceToNewId = new Map();
    for (const entry of branchEntries) {
        let newId = null;
        if (entry?.type === "message" && isAppendableAgentMessage(entry.message)) {
            newId = sessionManager.appendMessage(entry.message);
        }
        else if (entry?.type === "thinking_level_change" && typeof entry.thinkingLevel === "string") {
            newId = sessionManager.appendThinkingLevelChange(entry.thinkingLevel);
        }
        else if (entry?.type === "model_change" && typeof entry.provider === "string" && typeof entry.modelId === "string") {
            newId = sessionManager.appendModelChange(entry.provider, entry.modelId);
        }
        else if (entry?.type === "compaction" && typeof entry.summary === "string") {
            const firstKeptEntryId = sourceToNewId.get(entry.firstKeptEntryId)
                ?? sourceToNewId.get(branchEntries[0]?.id ?? "")
                ?? "rotated-context";
            newId = sessionManager.appendCompaction(entry.summary, firstKeptEntryId, entry.tokensBefore ?? 0, entry.details, entry.fromHook);
        }
        else if (entry?.type === "session_info" && typeof entry.name === "string" && entry.name.trim()) {
            newId = sessionManager.appendSessionInfo(entry.name.trim());
        }
        else if (entry?.type === "custom_message" && typeof entry.customType === "string") {
            newId = sessionManager.appendCustomMessageEntry(entry.customType, entry.content, entry.display, entry.details);
        }
        else if (entry?.type === "custom_entry" && typeof entry.customType === "string") {
            newId = sessionManager.appendCustomEntry(entry.customType, entry.data);
        }
        if (entry?.id && newId) {
            sourceToNewId.set(entry.id, newId);
        }
    }
}
function isSessionActive(session) {
    return Boolean(session.isStreaming || session.isCompacting || session.isRetrying || session.isBashRunning);
}
/**
 * Coordinates chat-branch registration, branch lookup, and fork/prune behavior.
 */
export class AgentBranchManager {
    options;
    constructor(options) {
        this.options = options;
    }
    ensureBranchRegistration(chatJid, session) {
        try {
            const existing = getChatBranchByChatJid(chatJid);
            if (existing)
                return existing;
            const created = ensureChatBranch({
                chat_jid: chatJid,
                agent_name: deriveAgentHandle(chatJid, session?.sessionName?.trim() || null),
            });
            storeChatMetadata(chatJid, new Date().toISOString(), created.agent_name || chatJid);
            return created;
        }
        catch (err) {
            this.options.onWarn?.("Falling back to volatile branch record", {
                operation: "ensure_branch_registration",
                chatJid,
                err,
            });
            return createVolatileBranchRecord(chatJid, session);
        }
    }
    async renameChatBranch(chatJid, options = {}) {
        const session = this.options.pool.get(chatJid)?.session ?? null;
        this.ensureBranchRegistration(chatJid, session);
        const nextAgentName = options.agentName !== undefined ? options.agentName : undefined;
        const renamed = renameChatBranchIdentity({
            chat_jid: chatJid,
            agent_name: nextAgentName,
        });
        if (session) {
            try {
                session.setSessionName(renamed.agent_name);
            }
            catch (err) {
                this.options.onWarn?.("Failed to sync renamed branch session name", {
                    operation: "rename_chat_branch.sync_session_name",
                    chatJid,
                    err,
                });
            }
        }
        return renamed;
    }
    async pruneChatBranch(chatJid) {
        const session = this.options.pool.get(chatJid)?.session ?? null;
        const existing = this.ensureBranchRegistration(chatJid, session);
        if (existing.chat_jid === existing.root_chat_jid) {
            throw new Error("Cannot prune the root chat branch.");
        }
        if (this.options.isActive(chatJid)) {
            throw new Error("Cannot prune a branch while it is active.");
        }
        const archived = archiveChatBranch(chatJid);
        const mainEntry = this.options.pool.get(chatJid);
        if (mainEntry) {
            try {
                mainEntry.session.dispose();
            }
            catch (err) {
                this.options.onWarn?.("Failed to dispose pruned session", {
                    operation: "prune_chat_branch.dispose_main",
                    chatJid,
                    err,
                });
            }
            this.options.pool.delete(chatJid);
        }
        const sideEntry = this.options.sidePool.get(chatJid);
        if (sideEntry) {
            try {
                sideEntry.session.dispose();
            }
            catch (err) {
                this.options.onWarn?.("Failed to dispose pruned side session", {
                    operation: "prune_chat_branch.dispose_side",
                    chatJid,
                    err,
                });
            }
            this.options.sidePool.delete(chatJid);
        }
        this.options.activeForkBaseLeafByChat.delete(chatJid);
        return archived;
    }
    async restoreChatBranch(chatJid, options = {}) {
        const restored = restoreChatBranchIdentity({
            chat_jid: chatJid,
            ...(options.agentName !== undefined ? { agent_name: options.agentName } : {}),
        });
        try {
            await this.options.getOrCreate(chatJid);
        }
        catch (err) {
            this.options.onWarn?.("Restored branch but failed to warm its session", {
                operation: "restore_chat_branch.warm_session",
                chatJid,
                err,
            });
        }
        return restored;
    }
    async createForkedChatBranch(sourceChatJid, options = {}) {
        const sourceSession = await this.options.getOrCreate(sourceChatJid);
        const sourceIsActive = isSessionActive(sourceSession);
        const stableForkLeafId = this.options.activeForkBaseLeafByChat.has(sourceChatJid)
            ? this.options.activeForkBaseLeafByChat.get(sourceChatJid) ?? null
            : null;
        if (sourceIsActive && !this.options.activeForkBaseLeafByChat.has(sourceChatJid)) {
            throw new Error("Cannot fork this branch yet because no stable turn boundary is available.");
        }
        const sourceBranch = this.ensureBranchRegistration(sourceChatJid, sourceSession);
        const nextChatJid = buildForkedChatJid(sourceChatJid);
        const requestedAgentName = typeof options.agentName === "string" && options.agentName.trim()
            ? options.agentName.trim()
            : sourceBranch.agent_name;
        storeChatMetadata(nextChatJid, new Date().toISOString(), requestedAgentName || nextChatJid);
        const nextBranch = ensureChatBranch({
            chat_jid: nextChatJid,
            root_chat_jid: sourceBranch.root_chat_jid || sourceBranch.chat_jid,
            parent_branch_id: sourceBranch.branch_id,
            agent_name: requestedAgentName,
        });
        const targetSession = await this.options.getOrCreate(nextChatJid);
        const stableSeed = sourceIsActive
            ? getStableForkSeed(sourceSession, stableForkLeafId)
            : null;
        const sourceContext = sourceSession.sessionManager.buildSessionContext();
        const parentSession = sourceSession.sessionFile?.trim() || undefined;
        const setupName = nextBranch.agent_name;
        const sourceModel = stableSeed?.model || sourceContext.model || (sourceSession.model
            ? { provider: sourceSession.model.provider, modelId: sourceSession.model.id }
            : null);
        const ok = await targetSession.newSession({
            ...(parentSession ? { parentSession } : {}),
            setup: async (sessionManager) => {
                if (stableSeed) {
                    seedSessionManagerFromBranchEntries(sessionManager, stableSeed.branchEntries, {
                        sessionName: setupName,
                        model: sourceModel,
                    });
                    return;
                }
                seedRotatedSession(sessionManager, sourceContext, {
                    sessionName: setupName,
                    model: sourceModel,
                });
            },
        });
        if (!ok) {
            throw new Error("Branch fork was cancelled.");
        }
        if (sourceSession.model) {
            try {
                await targetSession.setModel(sourceSession.model);
            }
            catch (err) {
                this.options.onWarn?.("Failed to copy model to forked branch", {
                    operation: "create_forked_chat_branch.copy_model",
                    chatJid: nextChatJid,
                    err,
                });
            }
        }
        try {
            const nextThinkingLevel = normalizeThinkingLevel(stableSeed?.thinkingLevel || sourceContext.thinkingLevel || sourceSession.thinkingLevel);
            if (nextThinkingLevel) {
                targetSession.setThinkingLevel(nextThinkingLevel);
            }
        }
        catch (err) {
            this.options.onWarn?.("Failed to copy thinking level to forked branch", {
                operation: "create_forked_chat_branch.copy_thinking_level",
                chatJid: nextChatJid,
                err,
            });
        }
        try {
            targetSession.setSessionName(setupName);
        }
        catch (err) {
            this.options.onWarn?.("Failed to copy session name to forked branch", {
                operation: "create_forked_chat_branch.copy_session_name",
                chatJid: nextChatJid,
                err,
            });
        }
        forcePersistSessionFile(targetSession);
        return ensureChatBranch({
            chat_jid: nextChatJid,
            root_chat_jid: nextBranch.root_chat_jid,
            parent_branch_id: nextBranch.parent_branch_id,
            agent_name: nextBranch.agent_name,
        });
    }
    listActiveChats() {
        const chats = [...this.options.pool.entries()]
            .flatMap(([chatJid, entry]) => {
            const branch = this.ensureBranchRegistration(chatJid, entry.session);
            if (branch.archived_at)
                return [];
            return [{
                    branch_id: branch.branch_id,
                    chat_jid: chatJid,
                    root_chat_jid: branch.root_chat_jid,
                    parent_branch_id: branch.parent_branch_id,
                    agent_name: branch.agent_name,
                    archived_at: branch.archived_at ?? null,
                    session_id: entry.session.sessionId,
                    session_name: entry.session.sessionName?.trim() || null,
                    model: entry.session.model ? `${entry.session.model.provider}/${entry.session.model.id}` : null,
                    is_active: isSessionActive(entry.session),
                    has_side_session: this.options.sidePool.has(chatJid),
                }];
        })
            .sort((a, b) => {
            if (a.is_active !== b.is_active)
                return a.is_active ? -1 : 1;
            return a.chat_jid.localeCompare(b.chat_jid);
        });
        return chats;
    }
    listKnownChats(rootChatJid, options) {
        const activeChats = this.listActiveChats();
        const activeByChat = new Map(activeChats.map((chat) => [chat.chat_jid, chat]));
        try {
            return listChatBranches(rootChatJid || null, { includeArchived: Boolean(options?.includeArchived) })
                .map((branch) => {
                const active = activeByChat.get(branch.chat_jid);
                return {
                    branch_id: branch.branch_id,
                    chat_jid: branch.chat_jid,
                    root_chat_jid: branch.root_chat_jid,
                    parent_branch_id: branch.parent_branch_id,
                    agent_name: branch.agent_name,
                    archived_at: branch.archived_at ?? null,
                    session_id: active?.session_id ?? null,
                    session_name: active?.session_name ?? null,
                    model: active?.model ?? null,
                    is_active: active?.is_active ?? false,
                    has_side_session: active?.has_side_session ?? false,
                };
            })
                .sort((a, b) => {
                if (a.chat_jid === rootChatJid && b.chat_jid !== rootChatJid)
                    return -1;
                if (b.chat_jid === rootChatJid && a.chat_jid !== rootChatJid)
                    return 1;
                if (Boolean(a.archived_at) !== Boolean(b.archived_at))
                    return a.archived_at ? 1 : -1;
                if (a.is_active !== b.is_active)
                    return a.is_active ? -1 : 1;
                return a.chat_jid.localeCompare(b.chat_jid);
            });
        }
        catch (err) {
            this.options.onWarn?.("Failed to list known chats; falling back to active sessions only", {
                operation: "list_known_chats",
                rootChatJid: rootChatJid || null,
                err,
            });
            return activeChats;
        }
    }
    findActiveChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        return this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
    }
    findChatByAgentName(agentName) {
        const normalized = normalizeAgentHandlePart(agentName);
        if (!normalized)
            return null;
        try {
            const branch = getChatBranchByAgentName(normalized);
            if (branch)
                return { chat_jid: branch.chat_jid, agent_name: branch.agent_name };
        }
        catch (err) {
            this.options.onWarn?.("Failed to look up agent handle; falling back to active sessions", {
                operation: "find_chat_by_agent_name",
                agentHandle: normalized,
                err,
            });
        }
        const active = this.listActiveChats().find((chat) => chat.agent_name === normalized) ?? null;
        return active ? { chat_jid: active.chat_jid, agent_name: active.agent_name } : null;
    }
    getAgentHandleForChat(chatJid) {
        try {
            return getChatBranchByChatJid(chatJid)?.agent_name ?? deriveAgentHandle(chatJid);
        }
        catch (err) {
            this.options.onWarn?.("Failed to read stored handle; deriving one from chat id instead", {
                operation: "get_agent_handle_for_chat",
                chatJid,
                err,
            });
            return deriveAgentHandle(chatJid);
        }
    }
}
