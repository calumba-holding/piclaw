/**
 * extension-routes.ts — Registry for extension-registered HTTP routes.
 *
 * Allows piclaw extensions (both built-in and workspace) to serve custom
 * HTTP endpoints from within the same process. Routes are keyed by path
 * prefix and dispatched before the 404 fallback in the request router.
 *
 * Use cases:
 *   - Serve WASM builds with COOP/COEP headers
 *   - Custom webhooks / API endpoints
 *   - Static asset serving with custom caching / headers
 *
 * Security: Routes are served *after* authentication checks, so only
 * authenticated users can access them. Extensions must sanitise paths
 * against traversal attacks themselves.
 */

export type ExtensionRouteHandler = (req: Request, pathname: string) => Response | Promise<Response> | null;

interface RegisteredRoute {
  prefix: string;
  handler: ExtensionRouteHandler;
  extensionPath: string;
}

const routes: RegisteredRoute[] = [];

/**
 * Register an HTTP route handler for a path prefix.
 * The handler is called for any request whose pathname starts with `prefix`.
 * If the handler returns null, the request falls through to the next handler.
 */
export function registerExtensionRoute(
  prefix: string,
  handler: ExtensionRouteHandler,
  extensionPath: string
): void {
  // Normalise: ensure prefix starts with /
  const normalised = prefix.startsWith("/") ? prefix : `/${prefix}`;
  routes.push({ prefix: normalised, handler, extensionPath });
}

/**
 * Try to handle a request with registered extension routes.
 * Returns a Response if matched, null otherwise.
 */
export async function handleExtensionRoutes(
  req: Request,
  pathname: string
): Promise<Response | null> {
  // Route introspection endpoint
  if (req.method === "GET" && pathname === "/api/extension-routes") {
    return new Response(JSON.stringify(getRegisteredRoutes()), {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  for (const route of routes) {
    if (pathname === route.prefix || pathname.startsWith(route.prefix + "/") || pathname.startsWith(route.prefix + "?")) {
      try {
        const result = route.handler(req, pathname);
        const response = result instanceof Promise ? await result : result;
        if (response) return response;
      } catch (err) {
        console.error(`[extension-routes] Error in route handler for ${route.prefix}:`, err);
        return new Response("Internal Server Error", { status: 500 });
      }
    }
  }
  return null;
}

/** Clear all registered routes (used on extension reload). */
export function clearExtensionRoutes(): void {
  routes.length = 0;
}

/** Get info about registered routes for debugging. */
export function getRegisteredRoutes(): Array<{ prefix: string; extensionPath: string }> {
  return routes.map(r => ({ prefix: r.prefix, extensionPath: r.extensionPath }));
}

/**
 * Expose registerExtensionRoute on globalThis so workspace extensions
 * (loaded via jiti) can call it without direct imports.
 *
 * This runs as a module side-effect when request-router-service.ts
 * imports this module — i.e., at web server startup, BEFORE any
 * session/extension creation.
 */
(globalThis as any).__piclaw_registerRoute = (
  prefix: string,
  handler: ExtensionRouteHandler,
  extensionPath?: string
) => {
  registerExtensionRoute(prefix, handler, extensionPath || "unknown");
};
