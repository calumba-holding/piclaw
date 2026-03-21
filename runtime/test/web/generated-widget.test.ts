import { describe, expect, test } from "bun:test";
import { buildGeneratedWidgetPayload, buildWidgetSrcDoc, canRenderGeneratedWidget } from "../../web/src/ui/generated-widget.js";

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

  test("unsupported or incomplete widget blocks do not render", () => {
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

  test("buildWidgetSrcDoc returns empty string for missing artifact data", () => {
    expect(buildWidgetSrcDoc({ artifact: { kind: "html" } })).toBe("");
    expect(buildWidgetSrcDoc(null)).toBe("");
  });
});
