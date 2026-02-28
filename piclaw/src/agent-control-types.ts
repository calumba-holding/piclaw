export type AgentControlCommand =
  | {
      type: "model";
      provider?: string;
      modelId?: string;
      raw: string;
    }
  | {
      type: "thinking";
      level?: string;
      raw: string;
    }
  | {
      type: "commands";
      raw: string;
    }
  | {
      type: "restart";
      raw: string;
    }
  | {
      type: "shell";
      command?: string;
      raw: string;
    }
  | {
      type: "bash";
      command?: string;
      raw: string;
    }
  | {
      type: "queue";
      message?: string;
      raw: string;
    }
  | {
      type: "queue_all";
      message?: string;
      raw: string;
    }
  | {
      type: "state";
      raw: string;
    }
  | {
      type: "stats";
      raw: string;
    }
  | {
      type: "context";
      raw: string;
    }
  | {
      type: "last";
      raw: string;
    }
  | {
      type: "compact";
      instructions?: string;
      raw: string;
    }
  | {
      type: "auto_compact";
      enabled?: boolean;
      raw: string;
    }
  | {
      type: "auto_retry";
      enabled?: boolean;
      raw: string;
    }
  | {
      type: "abort";
      raw: string;
    }
  | {
      type: "abort_retry";
      raw: string;
    }
  | {
      type: "abort_bash";
      raw: string;
    }
  | {
      type: "cycle_model";
      direction?: "forward" | "backward";
      raw: string;
    }
  | {
      type: "cycle_thinking";
      raw: string;
    }
  | {
      type: "steering_mode";
      mode?: "all" | "one-at-a-time";
      raw: string;
    }
  | {
      type: "followup_mode";
      mode?: "all" | "one-at-a-time";
      raw: string;
    }
  | {
      type: "session_name";
      name?: string;
      raw: string;
    }
  | {
      type: "new_session";
      parent?: string;
      raw: string;
    }
  | {
      type: "switch_session";
      path?: string;
      raw: string;
    }
  | {
      type: "fork";
      entryId?: string;
      raw: string;
    }
  | {
      type: "forks";
      raw: string;
    }
  | {
      type: "export_html";
      path?: string;
      raw: string;
    }
  | {
      type: "tree";
      targetId?: string;
      summarize?: boolean;
      customInstructions?: string;
      replaceInstructions?: boolean;
      label?: string;
      limit?: number;
      offset?: number;
      mode?: "head" | "tail";
      raw: string;
    }
  | {
      type: "label";
      targetId?: string;
      label?: string;
      raw: string;
    }
  | {
      type: "labels";
      raw: string;
    }
  | {
      type: "agent_name";
      name?: string;
      raw: string;
    }
  | {
      type: "agent_avatar";
      avatar?: string;
      raw: string;
    };

export interface AgentControlResult {
  status: "success" | "error";
  message: string;
  messages?: Array<{ role: string; text: string; customType?: string }>;
}
