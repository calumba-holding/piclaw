import type { AgentControlCommand } from "./agent-control-types.js";

function parseToggle(value?: string): boolean | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (["on", "true", "yes", "1", "enable", "enabled"].includes(normalized)) return true;
  if (["off", "false", "no", "0", "disable", "disabled"].includes(normalized)) return false;
  return undefined;
}

function parseQueueMode(value?: string): "all" | "one-at-a-time" | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (normalized === "all") return "all";
  if (["one", "one-at-a-time", "one_at_a_time", "single"].includes(normalized)) return "one-at-a-time";
  return undefined;
}

function splitArgs(input: string): string[] {
  const result: string[] = [];
  let current = "";
  let quote: "" | "'" | '"' = "";

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (quote) {
      if (char === quote) {
        quote = "";
      } else {
        current += char;
      }
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === " " || char === "\t" || char === "\n") {
      if (current) {
        result.push(current);
        current = "";
      }
      continue;
    }
    current += char;
  }
  if (current) result.push(current);
  return result;
}

function parseTreeArgs(args: string): {
  targetId?: string;
  summarize?: boolean;
  customInstructions?: string;
  replaceInstructions?: boolean;
  label?: string;
  limit?: number;
  offset?: number;
  mode?: "head" | "tail";
} {
  const tokens = splitArgs(args);
  let targetId: string | undefined;
  let summarize = false;
  let customInstructions: string | undefined;
  let replaceInstructions = false;
  let label: string | undefined;
  let limit: number | undefined;
  let offset: number | undefined;
  let mode: "head" | "tail" = "tail";
  let modeExplicit = false;

  const readLimit = (value?: string) => {
    if (!value) return undefined;
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed) && parsed > 0) {
      return parsed;
    }
    return undefined;
  };

  const readOffset = (value?: string) => {
    if (!value) return undefined;
    const parsed = parseInt(value, 10);
    if (!Number.isNaN(parsed) && parsed >= 0) {
      return parsed;
    }
    return undefined;
  };

  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (!token.startsWith("--") && !targetId) {
      targetId = token;
      i += 1;
      continue;
    }
    if (token === "--summarize") {
      summarize = true;
      i += 1;
      continue;
    }
    if (token === "--summary") {
      summarize = true;
      const next = tokens[i + 1];
      if (next && !next.startsWith("--")) {
        customInstructions = next;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token === "--replace") {
      replaceInstructions = true;
      i += 1;
      continue;
    }
    if (token === "--label") {
      const next = tokens[i + 1];
      if (next && !next.startsWith("--")) {
        label = next;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token.startsWith("--label=")) {
      label = token.slice("--label=".length);
      i += 1;
      continue;
    }
    if (token === "--head" || token === "--first") {
      mode = "head";
      modeExplicit = true;
      const next = tokens[i + 1];
      const parsed = readLimit(next && !next.startsWith("--") ? next : undefined);
      if (parsed !== undefined) {
        limit = parsed;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token.startsWith("--head=")) {
      mode = "head";
      modeExplicit = true;
      const parsed = readLimit(token.slice("--head=".length));
      if (parsed !== undefined) limit = parsed;
      i += 1;
      continue;
    }
    if (token.startsWith("--first=")) {
      mode = "head";
      modeExplicit = true;
      const parsed = readLimit(token.slice("--first=".length));
      if (parsed !== undefined) limit = parsed;
      i += 1;
      continue;
    }
    if (token === "--tail" || token === "--last") {
      mode = "tail";
      modeExplicit = true;
      const next = tokens[i + 1];
      const parsed = readLimit(next && !next.startsWith("--") ? next : undefined);
      if (parsed !== undefined) {
        limit = parsed;
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token.startsWith("--tail=")) {
      mode = "tail";
      modeExplicit = true;
      const parsed = readLimit(token.slice("--tail=".length));
      if (parsed !== undefined) limit = parsed;
      i += 1;
      continue;
    }
    if (token.startsWith("--last=")) {
      mode = "tail";
      modeExplicit = true;
      const parsed = readLimit(token.slice("--last=".length));
      if (parsed !== undefined) limit = parsed;
      i += 1;
      continue;
    }
    if (token === "--limit") {
      const next = tokens[i + 1];
      if (next && !next.startsWith("--")) {
        const parsed = readLimit(next);
        if (parsed !== undefined) {
          limit = parsed;
          if (!modeExplicit) mode = "head";
        }
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token.startsWith("--limit=")) {
      const parsed = readLimit(token.slice("--limit=".length));
      if (parsed !== undefined) {
        limit = parsed;
        if (!modeExplicit) mode = "head";
      }
      i += 1;
      continue;
    }
    if (token === "--offset") {
      const next = tokens[i + 1];
      if (next && !next.startsWith("--")) {
        const parsed = readOffset(next);
        if (parsed !== undefined) {
          offset = parsed;
          if (!modeExplicit) mode = "head";
        }
        i += 2;
      } else {
        i += 1;
      }
      continue;
    }
    if (token.startsWith("--offset=")) {
      const parsed = readOffset(token.slice("--offset=".length));
      if (parsed !== undefined) {
        offset = parsed;
        if (!modeExplicit) mode = "head";
      }
      i += 1;
      continue;
    }
    i += 1;
  }

  if (customInstructions) summarize = true;

  return { targetId, summarize, customInstructions, replaceInstructions, label, limit, offset, mode };
}

function stripTrigger(text: string, triggerPattern?: RegExp): string {
  if (!triggerPattern) return text.trim();
  const flags = triggerPattern.flags.includes("g") ? triggerPattern.flags : `${triggerPattern.flags}g`;
  const pattern = new RegExp(triggerPattern.source, flags);
  return text.replace(pattern, " ").trim();
}

export function parseControlCommand(text: string, triggerPattern?: RegExp): AgentControlCommand | null {
  if (!text) return null;
  const cleaned = stripTrigger(text, triggerPattern);
  if (!cleaned.startsWith("/")) return null;

  const [command, ...rest] = cleaned.split(/\s+/);
  const args = rest.join(" ").trim();
  const commandLower = command.toLowerCase();

  if (commandLower === "/model") {
    const tokens = args.split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
      return { type: "model", raw: cleaned };
    }

    const [first, ...remaining] = tokens;
    if (first && first.includes("/")) {
      const [provider, ...modelParts] = first.split("/");
      const modelId = modelParts.join("/");
      return {
        type: "model",
        provider: provider || undefined,
        modelId: modelId || undefined,
        raw: cleaned,
      };
    }

    if (remaining.length > 0) {
      return {
        type: "model",
        provider: first,
        modelId: remaining.join(" "),
        raw: cleaned,
      };
    }

    return {
      type: "model",
      modelId: first,
      raw: cleaned,
    };
  }

  if (commandLower === "/thinking") {
    const level = args.split(/\s+/).filter(Boolean)[0];
    return {
      type: "thinking",
      level: level || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/commands") {
    return {
      type: "commands",
      raw: cleaned,
    };
  }

  if (commandLower === "/restart") {
    return {
      type: "restart",
      raw: cleaned,
    };
  }

  if (commandLower === "/shell") {
    return {
      type: "shell",
      command: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/queue") {
    return {
      type: "queue",
      message: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/queue-all") {
    return {
      type: "queue_all",
      message: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/state") {
    return { type: "state", raw: cleaned };
  }

  if (commandLower === "/stats") {
    return { type: "stats", raw: cleaned };
  }

  if (commandLower === "/context") {
    return { type: "context", raw: cleaned };
  }

  if (commandLower === "/last") {
    return { type: "last", raw: cleaned };
  }

  if (commandLower === "/compact") {
    return {
      type: "compact",
      instructions: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/auto-compact") {
    return {
      type: "auto_compact",
      enabled: parseToggle(args),
      raw: cleaned,
    };
  }

  if (commandLower === "/auto-retry") {
    return {
      type: "auto_retry",
      enabled: parseToggle(args),
      raw: cleaned,
    };
  }

  if (commandLower === "/abort") {
    return { type: "abort", raw: cleaned };
  }

  if (commandLower === "/abort-retry") {
    return { type: "abort_retry", raw: cleaned };
  }

  if (commandLower === "/abort-bash") {
    return { type: "abort_bash", raw: cleaned };
  }

  if (commandLower === "/cycle-model") {
    const dirRaw = args.toLowerCase();
    const direction = ["back", "backward", "prev", "previous"].includes(dirRaw)
      ? "backward"
      : "forward";
    return {
      type: "cycle_model",
      direction,
      raw: cleaned,
    };
  }

  if (commandLower === "/cycle-thinking") {
    return { type: "cycle_thinking", raw: cleaned };
  }

  if (commandLower === "/steering-mode") {
    return {
      type: "steering_mode",
      mode: parseQueueMode(args),
      raw: cleaned,
    };
  }

  if (commandLower === "/followup-mode") {
    return {
      type: "followup_mode",
      mode: parseQueueMode(args),
      raw: cleaned,
    };
  }

  if (commandLower === "/session-name") {
    return {
      type: "session_name",
      name: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/new-session") {
    return {
      type: "new_session",
      parent: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/switch-session") {
    return {
      type: "switch_session",
      path: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/fork") {
    return {
      type: "fork",
      entryId: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/forks") {
    return { type: "forks", raw: cleaned };
  }

  if (commandLower === "/export-html") {
    return {
      type: "export_html",
      path: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/bash") {
    return {
      type: "bash",
      command: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/tree") {
    const parsed = parseTreeArgs(args);
    return {
      type: "tree",
      targetId: parsed.targetId,
      summarize: parsed.summarize,
      customInstructions: parsed.customInstructions,
      replaceInstructions: parsed.replaceInstructions,
      label: parsed.label,
      limit: parsed.limit,
      offset: parsed.offset,
      mode: parsed.mode,
      raw: cleaned,
    };
  }

  if (commandLower === "/label") {
    const tokens = splitArgs(args);
    const targetId = tokens[0];
    const label = tokens.slice(1).join(" ").trim() || undefined;
    return {
      type: "label",
      targetId: targetId || undefined,
      label,
      raw: cleaned,
    };
  }

  if (commandLower === "/labels") {
    return { type: "labels", raw: cleaned };
  }

  if (commandLower === "/agent-name") {
    return {
      type: "agent_name",
      name: args || undefined,
      raw: cleaned,
    };
  }

  if (commandLower === "/agent-avatar") {
    return {
      type: "agent_avatar",
      avatar: args || undefined,
      raw: cleaned,
    };
  }

  return null;
}
