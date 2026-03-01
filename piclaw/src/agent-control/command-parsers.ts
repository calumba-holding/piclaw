import type { AgentControlCommand } from "../agent-control-types.js";
import { parseQueueMode, parseToggle, parseTreeArgs, splitArgs } from "./parser-utils.js";

export type CommandParser = (args: string, raw: string) => AgentControlCommand;

const simple = (type: AgentControlCommand["type"]): CommandParser => {
  return (_args, raw) => ({ type, raw } as AgentControlCommand);
};

export function parseModel(args: string, raw: string): AgentControlCommand {
  const tokens = args.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) {
    return { type: "model", raw };
  }

  const [first, ...remaining] = tokens;
  if (first && first.includes("/")) {
    const [provider, ...modelParts] = first.split("/");
    const modelId = modelParts.join("/");
    return {
      type: "model",
      provider: provider || undefined,
      modelId: modelId || undefined,
      raw,
    };
  }

  if (remaining.length > 0) {
    return {
      type: "model",
      provider: first,
      modelId: remaining.join(" "),
      raw,
    };
  }

  return {
    type: "model",
    modelId: first,
    raw,
  };
}

export function parseThinking(args: string, raw: string): AgentControlCommand {
  const level = args.split(/\s+/).filter(Boolean)[0];
  return {
    type: "thinking",
    level: level || undefined,
    raw,
  };
}

export function parseShell(args: string, raw: string): AgentControlCommand {
  return {
    type: "shell",
    command: args || undefined,
    raw,
  };
}

export function parseQueue(args: string, raw: string): AgentControlCommand {
  return {
    type: "queue",
    message: args || undefined,
    raw,
  };
}

export function parseQueueAll(args: string, raw: string): AgentControlCommand {
  return {
    type: "queue_all",
    message: args || undefined,
    raw,
  };
}

export function parseCompact(args: string, raw: string): AgentControlCommand {
  return {
    type: "compact",
    instructions: args || undefined,
    raw,
  };
}

export function parseAutoCompact(args: string, raw: string): AgentControlCommand {
  return {
    type: "auto_compact",
    enabled: parseToggle(args),
    raw,
  };
}

export function parseAutoRetry(args: string, raw: string): AgentControlCommand {
  return {
    type: "auto_retry",
    enabled: parseToggle(args),
    raw,
  };
}

export function parseCycleModel(args: string, raw: string): AgentControlCommand {
  const dirRaw = args.toLowerCase();
  const direction = ["back", "backward", "prev", "previous"].includes(dirRaw)
    ? "backward"
    : "forward";
  return {
    type: "cycle_model",
    direction,
    raw,
  };
}

export function parseSteeringMode(args: string, raw: string): AgentControlCommand {
  return {
    type: "steering_mode",
    mode: parseQueueMode(args),
    raw,
  };
}

export function parseFollowupMode(args: string, raw: string): AgentControlCommand {
  return {
    type: "followup_mode",
    mode: parseQueueMode(args),
    raw,
  };
}

export function parseSessionName(args: string, raw: string): AgentControlCommand {
  return {
    type: "session_name",
    name: args || undefined,
    raw,
  };
}

export function parseNewSession(args: string, raw: string): AgentControlCommand {
  return {
    type: "new_session",
    parent: args || undefined,
    raw,
  };
}

export function parseSwitchSession(args: string, raw: string): AgentControlCommand {
  return {
    type: "switch_session",
    path: args || undefined,
    raw,
  };
}

export function parseFork(args: string, raw: string): AgentControlCommand {
  return {
    type: "fork",
    entryId: args || undefined,
    raw,
  };
}

export function parseExportHtml(args: string, raw: string): AgentControlCommand {
  return {
    type: "export_html",
    path: args || undefined,
    raw,
  };
}

export function parseBash(args: string, raw: string): AgentControlCommand {
  return {
    type: "bash",
    command: args || undefined,
    raw,
  };
}

export function parseTree(args: string, raw: string): AgentControlCommand {
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
    raw,
  };
}

export function parseLabel(args: string, raw: string): AgentControlCommand {
  const tokens = splitArgs(args);
  const targetId = tokens[0];
  const label = tokens.slice(1).join(" ").trim() || undefined;
  return {
    type: "label",
    targetId: targetId || undefined,
    label,
    raw,
  };
}

export function parseAgentName(args: string, raw: string): AgentControlCommand {
  return {
    type: "agent_name",
    name: args || undefined,
    raw,
  };
}

export function parseAgentAvatar(args: string, raw: string): AgentControlCommand {
  return {
    type: "agent_avatar",
    avatar: args || undefined,
    raw,
  };
}

export const COMMAND_PARSERS: Record<string, CommandParser> = {
  "/model": parseModel,
  "/thinking": parseThinking,
  "/commands": simple("commands"),
  "/restart": simple("restart"),
  "/shell": parseShell,
  "/queue": parseQueue,
  "/queue-all": parseQueueAll,
  "/state": simple("state"),
  "/stats": simple("stats"),
  "/context": simple("context"),
  "/last": simple("last"),
  "/compact": parseCompact,
  "/auto-compact": parseAutoCompact,
  "/auto-retry": parseAutoRetry,
  "/abort": simple("abort"),
  "/abort-retry": simple("abort_retry"),
  "/abort-bash": simple("abort_bash"),
  "/cycle-model": parseCycleModel,
  "/cycle-thinking": simple("cycle_thinking"),
  "/steering-mode": parseSteeringMode,
  "/followup-mode": parseFollowupMode,
  "/session-name": parseSessionName,
  "/new-session": parseNewSession,
  "/switch-session": parseSwitchSession,
  "/fork": parseFork,
  "/forks": simple("forks"),
  "/export-html": parseExportHtml,
  "/bash": parseBash,
  "/tree": parseTree,
  "/label": parseLabel,
  "/labels": simple("labels"),
  "/agent-name": parseAgentName,
  "/agent-avatar": parseAgentAvatar,
};
