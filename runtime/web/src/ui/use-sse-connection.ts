// @ts-nocheck
import { useEffect, useRef } from '../vendor/preact-htm.js';
import { SSEClient } from '../api.js';

/**
 * Manages the SSE connection lifecycle.
 *
 * All callbacks are accessed via refs so the EventSource is created exactly
 * once and never torn down due to callback identity changes in the parent
 * component.  This breaks the re-render cascade that previously caused an
 * infinite SSE reconnect loop when queue/filter state changed.
 */
export function useSseConnection({ handleSseEvent, handleConnectionStatusChange, loadPosts, onWake, chatJid }) {
  const sseEventRef = useRef(handleSseEvent);
  sseEventRef.current = handleSseEvent;

  const statusChangeRef = useRef(handleConnectionStatusChange);
  statusChangeRef.current = handleConnectionStatusChange;

  const loadPostsRef = useRef(loadPosts);
  loadPostsRef.current = loadPosts;

  const onWakeRef = useRef(onWake);
  onWakeRef.current = onWake;

  useEffect(() => {
    const sse = new SSEClient(
      (type, data) => sseEventRef.current(type, data),
      (status) => statusChangeRef.current(status),
      { chatJid },
    );
    sse.connect();

    const handleWindowFocus = () => {
      sse.reconnectIfNeeded();
      const doc = typeof document !== 'undefined' ? document : null;
      if (!doc || doc.visibilityState === 'visible') {
        onWakeRef.current?.();
      }
    };
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleWindowFocus);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleWindowFocus);
      sse.disconnect();
    };
  }, [chatJid]);
}
