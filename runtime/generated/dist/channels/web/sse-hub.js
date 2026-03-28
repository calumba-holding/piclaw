/**
 * web/sse-hub.ts – SSE client connection manager.
 *
 * Manages the set of connected SSE clients and provides broadcast()
 * to push events to all of them simultaneously.
 *
 * Consumers: channels/web.ts creates a single SseHub and uses it
 *            throughout the web channel for real-time event delivery.
 */
import { broadcastEvent, handleSse } from "./sse.js";
/** Manages SSE client connections and provides broadcast(). */
export class SseHub {
    clients = new Set();
    handleRequest(req) {
        return handleSse(this, req);
    }
    broadcast(eventType, data) {
        broadcastEvent(this, eventType, data);
    }
    closeAll() {
        for (const client of this.clients) {
            clearInterval(client.heartbeat);
            try {
                client.controller.close();
            }
            catch {
                // ignore
            }
        }
        this.clients.clear();
    }
}
