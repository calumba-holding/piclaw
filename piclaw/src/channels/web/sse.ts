
const encoder = new TextEncoder();

export interface PendingClient {
  controller: ReadableStreamDefaultController<Uint8Array>;
  heartbeat: Timer;
}

export interface SseClientContainer {
  clients: Set<PendingClient>;
}

export function handleSse(channel: SseClientContainer): Response {
  let clientRef: PendingClient | null = null;

  const stream = new ReadableStream<Uint8Array>({
    start: (controller) => {
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": heartbeat\n\n"));
        } catch {
          clearInterval(heartbeat);
          if (clientRef) channel.clients.delete(clientRef);
        }
      }, 30000);
      clientRef = { controller, heartbeat };
      channel.clients.add(clientRef);
      controller.enqueue(encoder.encode("event: connected\ndata: {}\n\n"));
    },
    cancel: () => {
      if (clientRef) {
        clearInterval(clientRef.heartbeat);
        channel.clients.delete(clientRef);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

export function broadcastEvent(channel: SseClientContainer, eventType: string, data: unknown): void {
  const payload = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
  const bytes = encoder.encode(payload);
  for (const client of channel.clients) {
    try {
      client.controller.enqueue(bytes);
    } catch {
      clearInterval(client.heartbeat);
      channel.clients.delete(client);
    }
  }
}
