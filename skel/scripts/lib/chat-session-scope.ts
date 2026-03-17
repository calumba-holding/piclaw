import type { Database } from "bun:sqlite";

export interface ScopedChat {
  chatJid: string;
  rootChatJid: string;
  branchId: string | null;
  parentBranchId: string | null;
  agentName: string | null;
  displayName: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  archivedAt: string | null;
  lastMessageTime: string | null;
}

export interface SessionScope {
  requestedChatJid: string;
  mode: "single-chat" | "all-web-session-trees";
  channelPrefix: string | null;
  chats: ScopedChat[];
  roots: string[];
}

interface ScopeRow {
  chat_jid: string;
  root_chat_jid: string;
  branch_id: string | null;
  parent_branch_id: string | null;
  agent_name: string | null;
  display_name: string | null;
  created_at: string | null;
  updated_at: string | null;
  archived_at: string | null;
  last_message_time: string | null;
}

function getChannelPrefix(chatJid: string): string | null {
  const idx = chatJid.indexOf(":");
  return idx === -1 ? null : chatJid.slice(0, idx + 1);
}

export function fallbackSessionScope(requestedChatJid: string): SessionScope {
  return {
    requestedChatJid,
    mode: "single-chat",
    channelPrefix: getChannelPrefix(requestedChatJid),
    chats: [{
      chatJid: requestedChatJid,
      rootChatJid: requestedChatJid,
      branchId: null,
      parentBranchId: null,
      agentName: null,
      displayName: null,
      createdAt: null,
      updatedAt: null,
      archivedAt: null,
      lastMessageTime: null,
    }],
    roots: [requestedChatJid],
  };
}

export function resolveSessionScope(db: Database, requestedChatJid: string): SessionScope {
  const prefix = getChannelPrefix(requestedChatJid);
  if (prefix !== "web:") return fallbackSessionScope(requestedChatJid);

  const rows = db.query<ScopeRow, [string]>(
    `SELECT c.jid AS chat_jid,
            COALESCE(cb.root_chat_jid, c.jid) AS root_chat_jid,
            cb.branch_id AS branch_id,
            cb.parent_branch_id AS parent_branch_id,
            cb.agent_name AS agent_name,
            cb.display_name AS display_name,
            cb.created_at AS created_at,
            cb.updated_at AS updated_at,
            cb.archived_at AS archived_at,
            c.last_message_time AS last_message_time
     FROM chats c
     LEFT JOIN chat_branches cb ON cb.chat_jid = c.jid
     WHERE c.jid LIKE ?
     ORDER BY root_chat_jid ASC,
              CASE WHEN c.jid = COALESCE(cb.root_chat_jid, c.jid) THEN 0 ELSE 1 END ASC,
              c.last_message_time DESC,
              c.jid ASC`
  ).all(`${prefix}%`);

  if (rows.length === 0) return fallbackSessionScope(requestedChatJid);

  const chats = rows.map((row): ScopedChat => ({
    chatJid: row.chat_jid,
    rootChatJid: row.root_chat_jid,
    branchId: row.branch_id,
    parentBranchId: row.parent_branch_id,
    agentName: row.agent_name,
    displayName: row.display_name,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    archivedAt: row.archived_at,
    lastMessageTime: row.last_message_time,
  }));
  const roots = [...new Set(chats.map(chat => chat.rootChatJid))];

  return {
    requestedChatJid,
    mode: "all-web-session-trees",
    channelPrefix: prefix,
    chats,
    roots,
  };
}

export function buildInClause(column: string, values: readonly string[]): { clause: string; params: string[] } {
  if (values.length === 0) return { clause: "1 = 0", params: [] };
  return {
    clause: `${column} IN (${values.map(() => "?").join(", ")})`,
    params: [...values],
  };
}

export function formatScopedChatLabel(chat: Pick<ScopedChat, "chatJid" | "rootChatJid" | "agentName" | "displayName">): string {
  if (chat.chatJid === chat.rootChatJid) return chat.rootChatJid;
  const branchName = chat.agentName || chat.displayName || chat.chatJid.split(":").pop() || chat.chatJid;
  return `${chat.rootChatJid} › ${branchName}`;
}

export function summariseSessionScope(scope: SessionScope): string {
  if (scope.mode === "all-web-session-trees") {
    return `${scope.roots.length} session trees / ${scope.chats.length} chats`;
  }
  return `1 chat (${scope.requestedChatJid})`;
}
