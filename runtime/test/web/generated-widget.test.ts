import { describe, expect, test } from "bun:test";
import {
  buildGeneratedWidgetPayload,
  buildWidgetSrcDoc,
  canRenderGeneratedWidget,
  getGeneratedWidgetEmptyStateMessage,
  getGeneratedWidgetSessionKey,
  normalizeLiveGeneratedWidgetPayload,
} from "../../web/src/ui/generated-widget.js";

describe("generated widget helpers", () => {
  test("buildGeneratedWidgetPayload returns html payload for supported block", () => {
    const block = {
      type: "generated_widget",
      title: "Widget title",
      subtitle: "Widget subtitle",
      description: "Widget description",
      widget_id: "widget-1",
      artifact: {
        kind: "html",
        html: "<div>Hello widget</div>",
      },
    };
    const post = { id: 42, chat_jid: "web:default" };

    const payload = buildGeneratedWidgetPayload(block, post);
    expect(payload).not.toBeNull();
    expect(payload?.title).toBe("Widget title");
    expect(payload?.subtitle).toBe("Widget subtitle");
    expect(payload?.description).toBe("Widget description");
    expect(payload?.originPostId).toBe(42);
    expect(payload?.originChatJid).toBe("web:default");
    expect(payload?.widgetId).toBe("widget-1");
    expect(payload?.artifact).toEqual({ kind: "html", html: "<div>Hello widget</div>" });
    expect(payload?.source).toBe("timeline");
    expect(payload?.status).toBe("final");
  });

  test("buildGeneratedWidgetPayload supports legacy top-level svg content", () => {
    const block = {
      type: "generated_widget",
      name: "Legacy SVG widget",
      kind: "svg",
      svg: "<svg viewBox=\"0 0 10 10\"></svg>",
    };

    const payload = buildGeneratedWidgetPayload(block, { id: 7, chat_jid: "web:test" });
    expect(payload).not.toBeNull();
    expect(payload?.title).toBe("Legacy SVG widget");
    expect(payload?.artifact).toEqual({ kind: "svg", svg: "<svg viewBox=\"0 0 10 10\"></svg>" });
  });

  test("normalizeLiveGeneratedWidgetPayload accepts show_widget-style html payloads", () => {
    const payload = normalizeLiveGeneratedWidgetPayload({
      chat_jid: "web:default",
      turn_id: "turn-1",
      tool_call_id: "tool-1",
      title: "Live widget",
      width: 800,
      height: 600,
      status: "streaming",
      artifact: {
        kind: "html",
        html: "<div>streaming</div>",
      },
    });

    expect(payload).not.toBeNull();
    expect(payload?.source).toBe("live");
    expect(payload?.turnId).toBe("turn-1");
    expect(payload?.toolCallId).toBe("tool-1");
    expect(payload?.widgetId).toBe("tool-1");
    expect(payload?.width).toBe(800);
    expect(payload?.height).toBe(600);
    expect(payload?.artifact).toEqual({ kind: "html", html: "<div>streaming</div>" });
  });

  test("normalizeLiveGeneratedWidgetPayload accepts original show_widget field aliases", () => {
    const payload = normalizeLiveGeneratedWidgetPayload({
      chat_jid: "web:default",
      toolCallId: "tool-2",
      name: "Original style widget",
      w: "<main>hello</main>",
      width: 640,
      height: 480,
    });

    expect(payload).not.toBeNull();
    expect(payload?.title).toBe("Original style widget");
    expect(payload?.artifact).toEqual({ kind: "html", html: "<main>hello</main>" });
    expect(getGeneratedWidgetSessionKey(payload)).toBe("tool-2");
  });

  test("unsupported or incomplete widget blocks do not render in the timeline launch flow", () => {
    expect(canRenderGeneratedWidget({ type: "generated_widget", artifact: { kind: "html" } })).toBe(false);
    expect(canRenderGeneratedWidget({ type: "generated_widget", artifact: { kind: "pdf", html: "x" } })).toBe(false);
    expect(buildGeneratedWidgetPayload({ type: "text", text: "hello" }, { id: 1 })).toBeNull();
  });

  test("buildWidgetSrcDoc injects restrictive CSP and strips unsafe title characters", () => {
    const srcdoc = buildWidgetSrcDoc({
      title: "Widget <unsafe> & title",
      artifact: {
        kind: "html",
        html: "<div>hello</div>",
      },
    });

    expect(srcdoc).toContain("default-src 'none'");
    expect(srcdoc).toContain("script-src 'none'");
    expect(srcdoc).toContain("<body><div>hello</div></body>");
    expect(srcdoc).toContain("<title>Widget unsafe  title</title>");
  });

  test("buildWidgetSrcDoc wraps svg artifacts in the dedicated shell", () => {
    const srcdoc = buildWidgetSrcDoc({
      title: "SVG widget",
      artifact: {
        kind: "svg",
        svg: "<svg id=\"demo\"></svg>",
      },
    });

    expect(srcdoc).toContain('<div class="widget-svg-shell"><svg id="demo"></svg></div>');
    expect(srcdoc).toContain("widget-svg-shell svg");
  });

  test("live widget empty-state messaging reflects loading and error status", () => {
    expect(getGeneratedWidgetEmptyStateMessage({ status: "loading" })).toBe("Widget is loading…");
    expect(getGeneratedWidgetEmptyStateMessage({ status: "error", error: "Boom" })).toBe("Boom");
    expect(getGeneratedWidgetEmptyStateMessage({})).toBe("Widget artifact is missing or unsupported.");
  });

  test("buildWidgetSrcDoc returns empty string for missing artifact data", () => {
    expect(buildWidgetSrcDoc({ artifact: { kind: "html" } })).toBe("");
    expect(buildWidgetSrcDoc(null)).toBe("");
  });
});
