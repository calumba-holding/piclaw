import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { formatCompactNumber, formatCurrency } from "../agent-control-helpers.js";
import { CONTROL_COMMAND_DEFINITIONS } from "../command-registry.js";
import { searchWorkspace } from "../../workspace-search.js";

type StateCommand = Extract<AgentControlCommand, { type: "state" }>;
type StatsCommand = Extract<AgentControlCommand, { type: "stats" }>;
type ContextCommand = Extract<AgentControlCommand, { type: "context" }>;
type LastCommand = Extract<AgentControlCommand, { type: "last" }>;
type CommandsCommand = Extract<AgentControlCommand, { type: "commands" }>;
type SearchCommand = Extract<AgentControlCommand, { type: "search_workspace" }>;

export async function handleState(session: AgentSession, _command: StateCommand): Promise<AgentControlResult> {
  const modelLabel = session.model ? `${session.model.provider}/${session.model.id}` : "none";
  const steeringCount = session.getSteeringMessages().length;
  const followUpCount = session.getFollowUpMessages().length;
  const lines = [
    `Model: ${modelLabel}`,
    `Thinking level: ${session.thinkingLevel}${session.supportsThinking() ? "" : " (thinking off)"}`,
    `Streaming: ${session.isStreaming ? "yes" : "no"}`,
    `Compacting: ${session.isCompacting ? "yes" : "no"}`,
    `Retrying: ${session.isRetrying ? "yes" : "no"}`,
    `Auto-compaction: ${session.autoCompactionEnabled ? "on" : "off"}`,
    `Auto-retry: ${session.autoRetryEnabled ? "on" : "off"}`,
    `Steering mode: ${session.steeringMode}`,
    `Follow-up mode: ${session.followUpMode}`,
    `Pending messages: ${session.pendingMessageCount} (steer ${steeringCount}, follow-up ${followUpCount})`,
    `Session id: ${session.sessionId}`,
    `Session name: ${session.sessionName || "none"}`,
    `Session file: ${session.sessionFile || "none"}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleStats(session: AgentSession, _command: StatsCommand): Promise<AgentControlResult> {
  const stats = session.getSessionStats();
  const tokens = stats.tokens;
  const lines = [
    "Session stats:",
    `• Messages: ${stats.userMessages} user, ${stats.assistantMessages} assistant, ${stats.toolResults} tool results (${stats.totalMessages} total)`,
    `• Tool calls: ${stats.toolCalls}`,
    `• Tokens: input ${formatCompactNumber(tokens.input)}, output ${formatCompactNumber(tokens.output)}, cache read ${formatCompactNumber(tokens.cacheRead)}, cache write ${formatCompactNumber(tokens.cacheWrite)}, total ${formatCompactNumber(tokens.total)}`,
    `• Cost: ${formatCurrency(stats.cost)}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleContext(session: AgentSession, _command: ContextCommand): Promise<AgentControlResult> {
  const usage = session.getContextUsage();
  if (!usage) {
    return { status: "error", message: "Context usage unavailable (no model configured)." };
  }
  if (usage.tokens === null) {
    return {
      status: "success",
      message: `Context usage: unknown. Context window: ${formatCompactNumber(usage.contextWindow)}.`,
    };
  }
  const percent = usage.percent ?? (usage.tokens / usage.contextWindow) * 100;
  return {
    status: "success",
    message: `Context usage: ${formatCompactNumber(usage.tokens)} / ${formatCompactNumber(usage.contextWindow)} (${percent.toFixed(1)}%).`,
  };
}

export async function handleLast(session: AgentSession, _command: LastCommand): Promise<AgentControlResult> {
  const last = session.getLastAssistantText();
  if (!last) {
    return { status: "error", message: "No assistant messages yet." };
  }
  return { status: "success", message: `Last assistant response:\n\n${last}` };
}

export async function handleSearchWorkspace(_session: AgentSession, command: SearchCommand): Promise<AgentControlResult> {
  const query = command.query?.trim();
  if (!query) {
    return {
      status: "error",
      message: "Usage: /search <query> [--scope notes|skills|all] [--limit N] [--offset N] [--no-refresh] [--max-kb N]",
    };
  }

  const { rows, limit, offset, error } = await searchWorkspace({
    query,
    scope: command.scope,
    limit: command.limit,
    offset: command.offset,
    refresh: command.refresh,
    max_kb: command.max_kb,
  });

  if (error) {
    return { status: "error", message: error };
  }

  if (!rows.length) {
    return { status: "success", message: "No matching workspace files found." };
  }

  const header = `Workspace matches (${rows.length} result${rows.length === 1 ? "" : "s"}; limit ${limit}, offset ${offset}):`;
  const lines = rows.map((row) => `• ${row.path} — ${row.snippet}`);
  return { status: "success", message: `${header}\n${lines.join("\n")}` };
}

export async function handleCommands(session: AgentSession, _command: CommandsCommand): Promise<AgentControlResult> {
  type CommandSource = "core" | "extension" | "pi-extension" | "template" | "skill";
  type ExtensionMeta = { source: CommandSource; detail?: string };
  interface CommandEntry {
    name: string;
    description?: string;
    source: CommandSource;
    detail?: string;
    extensions: ExtensionMeta[];
  }

  const describeSource = (source: CommandSource, detail?: string): string => {
    const base =
      source === "core" ? "core"
        : source === "extension" ? "workspace extension"
          : source === "pi-extension" ? "pi extension"
            : source === "template" ? "prompt template"
              : "skill";
    return detail ? `${base} (${detail})` : base;
  };

  const entries = new Map<string, CommandEntry>();
  const addEntry = (name: string, description: string | undefined, source: CommandSource, detail?: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    const existing = entries.get(key);
    if (!existing) {
      entries.set(key, { name: trimmed, description, source, detail, extensions: [] });
      return;
    }

    if (!existing.description && description) {
      existing.description = description;
    }

    if (existing.source === "core") {
      existing.extensions.push({ source, detail });
      return;
    }

    if (source === "core") {
      const previous: ExtensionMeta = { source: existing.source, detail: existing.detail };
      entries.set(key, {
        name: trimmed,
        description: description ?? existing.description,
        source: "core",
        detail: undefined,
        extensions: [...existing.extensions, previous],
      });
      return;
    }

    existing.extensions.push({ source, detail });
  };

  for (const command of CONTROL_COMMAND_DEFINITIONS) {
    addEntry(command.name, command.description, "core");
  }

  const extensionRunner = session.extensionRunner;
  if (extensionRunner) {
    const extCommands = extensionRunner.getRegisteredCommandsWithPaths();
    const isPiBuiltin = (extensionPath: string | undefined) => {
      if (!extensionPath) return false;
      return extensionPath.includes("node_modules/@mariozechner/pi-");
    };
    for (const entry of extCommands) {
      const name = entry.command?.name;
      if (!name) continue;
      const description = entry.command.description || `extension (${entry.extensionPath})`;
      const source: CommandSource = isPiBuiltin(entry.extensionPath) ? "pi-extension" : "extension";
      addEntry(`/${name}`, description, source, entry.extensionPath || undefined);
    }
  }

  for (const template of session.promptTemplates) {
    const description = template.description || "prompt template";
    addEntry(`/${template.name}`, description, "template", template.name);
  }

  const skills = session.resourceLoader.getSkills().skills;
  for (const skill of skills) {
    const description = skill.description || "skill";
    addEntry(`/skill:${skill.name}`, description, "skill", skill.name);
  }

  const sorted = Array.from(entries.values()).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  const lines: string[] = ["Available commands:"];
  for (const entry of sorted) {
    const suffix = entry.description ? ` - ${entry.description}` : "";
    const notes: string[] = [];
    if (entry.source !== "core") {
      notes.push(describeSource(entry.source, entry.detail));
    }
    if (entry.extensions.length) {
      const extNotes = entry.extensions.map((ext) => describeSource(ext.source, ext.detail));
      notes.push(`extended by ${extNotes.join(", ")}`);
    }
    const noteText = notes.length ? ` [${notes.join("; ")}]` : "";
    lines.push(`• ${entry.name}${suffix}${noteText}`);
  }

  return {
    status: "success",
    message: lines.join("\n"),
  };
}
