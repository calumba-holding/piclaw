import {
  getGeneratedWidgetSessionKey,
  normalizeLiveGeneratedWidgetPayload,
} from './generated-widget.js';

export interface FloatingWidgetLike {
  source?: string | null;
  artifact?: Record<string, unknown> | null;
  originChatJid?: string | null;
  openedAt?: string | null;
  liveUpdatedAt?: string | null;
  [key: string]: unknown;
}

export interface ApplyLiveFloatingWidgetUpdateOptions {
  fallbackStatus?: string;
  currentChatJid: string;
  dismissedSessionKeys?: Set<string> | null;
  updatedAt: string;
}

export interface CloseFloatingWidgetStateResult {
  nextWidget: null;
  dismissedSessionKey: string | null;
}

export function openFloatingWidgetState<T extends Record<string, any>>(widget: T, openedAt: string): T & { openedAt: string } {
  return {
    ...widget,
    openedAt,
  };
}

export function closeFloatingWidgetState(current: FloatingWidgetLike | null | undefined): CloseFloatingWidgetStateResult {
  const sessionKey = getGeneratedWidgetSessionKey(current);
  return {
    nextWidget: null,
    dismissedSessionKey: current?.source === 'live' && sessionKey ? sessionKey : null,
  };
}

export function applyLiveFloatingWidgetUpdate(
  current: FloatingWidgetLike | null | undefined,
  data: Record<string, any> | null | undefined,
  options: ApplyLiveFloatingWidgetUpdateOptions,
): FloatingWidgetLike | null | undefined {
  const payload = normalizeLiveGeneratedWidgetPayload({
    ...data,
    ...((data && data.status) ? {} : { status: options.fallbackStatus || 'streaming' }),
  });
  if (!payload) return current;

  const sessionKey = getGeneratedWidgetSessionKey(payload);
  if (sessionKey && options.dismissedSessionKeys?.has(sessionKey)) {
    return current;
  }

  const currentKey = getGeneratedWidgetSessionKey(current);
  const sameSession = Boolean(sessionKey && currentKey && sessionKey === currentKey);
  const mergedArtifact = {
    ...((sameSession && current?.artifact) ? current.artifact : {}),
    ...(payload.artifact || {}),
  };

  return {
    ...(sameSession && current ? current : {}),
    ...payload,
    artifact: mergedArtifact,
    source: 'live',
    originChatJid: payload.originChatJid || options.currentChatJid,
    openedAt: sameSession && current?.openedAt ? current.openedAt : options.updatedAt,
    liveUpdatedAt: options.updatedAt,
  };
}

export function clearLiveFloatingWidgetState(
  current: FloatingWidgetLike | null | undefined,
  data: Record<string, any> | null | undefined,
): FloatingWidgetLike | null {
  if (!current || current?.source !== 'live') return current || null;
  const sessionKey = getGeneratedWidgetSessionKey(data);
  const currentKey = getGeneratedWidgetSessionKey(current);
  if (sessionKey && currentKey && sessionKey !== currentKey) return current;
  return null;
}
