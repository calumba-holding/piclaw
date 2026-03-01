import type { AgentControlCommand } from "./agent-control-types.js";
import { normalizeControlCommandName } from "./agent-control/command-registry.js";
import { stripTrigger } from "./agent-control/parser-utils.js";
import { COMMAND_PARSERS } from "./agent-control/command-parsers.js";

export function parseControlCommand(text: string, triggerPattern?: RegExp): AgentControlCommand | null {
  if (!text) return null;
  const cleaned = stripTrigger(text, triggerPattern);
  if (!cleaned.startsWith("/")) return null;

  const [command, ...rest] = cleaned.split(/\s+/);
  const args = rest.join(" ").trim();
  const commandLower = normalizeControlCommandName(command.toLowerCase());

  const parser = COMMAND_PARSERS[commandLower];
  if (!parser) return null;
  return parser(args, cleaned);
}
