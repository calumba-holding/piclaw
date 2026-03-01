import { broadcastEvent, handleSse, type PendingClient, type SseClientContainer } from "./sse.js";

export class SseHub implements SseClientContainer {
  clients = new Set<PendingClient>();

  handleRequest(): Response {
    return handleSse(this);
  }

  broadcast(eventType: string, data: unknown): void {
    broadcastEvent(this, eventType, data);
  }

  closeAll(): void {
    for (const client of this.clients) {
      clearInterval(client.heartbeat);
      try {
        client.controller.close();
      } catch {
        // ignore
      }
    }
    this.clients.clear();
  }
}
