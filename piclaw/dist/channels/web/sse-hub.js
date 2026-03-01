import { broadcastEvent, handleSse } from "./sse.js";
export class SseHub {
    clients = new Set();
    handleRequest() {
        return handleSse(this);
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
