import { useEffect } from '../vendor/preact-htm.js';
import { SSEClient } from '../api.js';

export function useSseConnection({ handleSseEvent, handleConnectionStatusChange, loadPosts }) {
  useEffect(() => {
    loadPosts();

    const sse = new SSEClient(handleSseEvent, handleConnectionStatusChange);
    sse.connect();

    const handleWindowFocus = () => {
      sse.reconnectIfNeeded();
    };
    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleWindowFocus);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleWindowFocus);
      sse.disconnect();
    };
  }, [handleConnectionStatusChange, handleSseEvent, loadPosts]);
}
