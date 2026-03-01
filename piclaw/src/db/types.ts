export interface ChatInfo {
  jid: string;
  name: string;
  last_message_time: string;
}

export interface InteractionContentMeta {
  truncated: boolean;
  preview?: boolean;
  original_length: number;
  max_length: number;
}

export interface InteractionData {
  type: "user_message" | "agent_response" | "agent_request" | "agent_draft" | string;
  content: string;
  content_meta?: InteractionContentMeta;
  agent_id?: string;
  thread_id?: number | null;
  media_ids?: number[];
  content_blocks?: unknown[];
  link_previews?: unknown[];
}

export interface InteractionRow {
  id: number;
  timestamp: string;
  data: InteractionData;
}

export interface MediaRecord {
  id: number;
  filename: string;
  content_type: string;
  data: Uint8Array;
  thumbnail: Uint8Array | null;
  metadata: Record<string, any> | null;
  created_at: string;
}

export interface ToolOutputRecord {
  id: string;
  created_at: string;
  source?: string | null;
  size_bytes?: number | null;
  line_count?: number | null;
  summary?: string | null;
  path?: string | null;
  content?: string | null;
}
