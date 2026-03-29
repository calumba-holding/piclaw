export interface ExtensionUiToastLike {
  title: string;
  detail: string | null;
  kind: string;
  durationMs?: number;
}

export function resolveStatusPanelEventChatJid(
  payload: Record<string, unknown> | null | undefined,
  currentChatJid: string,
): string {
  return typeof payload?.chat_jid === 'string' && payload.chat_jid.trim()
    ? payload.chat_jid.trim()
    : currentChatJid;
}

export function resolveExtensionUiToast(
  eventType: string | null | undefined,
  payload: Record<string, unknown> | null | undefined,
): ExtensionUiToastLike | null {
  if (eventType === 'extension_ui_notify' && typeof payload?.message === 'string') {
    return {
      title: payload.message,
      detail: null,
      kind: typeof payload?.type === 'string' && payload.type.trim() ? payload.type : 'info',
    };
  }

  if (eventType === 'extension_ui_error' && typeof payload?.error === 'string') {
    return {
      title: 'Extension UI error',
      detail: payload.error,
      kind: 'error',
      durationMs: 5000,
    };
  }

  return null;
}
