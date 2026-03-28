import { createUuid } from "../../utils/ids.js";
const DEFAULT_DASHBOARD_MESSAGE = "Live dashboard ready. Open the widget to inspect current internal state.";
function buildDashboardWidgetHtml() {
    return `<div class="shell">
  <style>
    :root{color-scheme:dark;--bg:#07111f;--panel:rgba(15,23,42,.82);--panel2:rgba(30,41,59,.62);--border:rgba(148,163,184,.18);--text:#e5eefb;--muted:#93a6c6;--accent:linear-gradient(135deg,#38bdf8,#6366f1 55%,#a855f7)}
    *{box-sizing:border-box} html,body{margin:0;min-height:100%;background:radial-gradient(circle at top,#10203b,var(--bg) 58%);color:var(--text);font-family:Inter,system-ui,sans-serif}
    .shell{min-height:100vh;padding:24px}.wrap{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1.2fr .8fr;gap:18px;align-items:start}.panel{background:var(--panel);border:1px solid var(--border);border-radius:24px;padding:20px;box-shadow:0 18px 65px rgba(0,0,0,.32);backdrop-filter:blur(12px)}
    .eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:8px} h1{margin:0 0 10px;font-size:32px;line-height:1.08} p{margin:0;color:var(--muted);line-height:1.6}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
    button{appearance:none;border:0;cursor:pointer;font:inherit;border-radius:999px;padding:12px 16px;color:white}.primary{background:var(--accent);box-shadow:0 10px 25px rgba(99,102,241,.32);animation:pulse 2s infinite}.secondary{background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.2)}.ghost{background:transparent;border:1px solid rgba(148,163,184,.2);color:var(--text)}
    .stage{margin-top:18px;min-height:460px;border-radius:22px;border:1px solid var(--border);background:linear-gradient(180deg,rgba(15,23,42,.78),rgba(2,6,23,.82));padding:18px;position:relative;overflow:hidden;contain:layout paint}.empty{height:100%;min-height:420px;display:grid;place-items:center;text-align:center;padding:26px;background:radial-gradient(circle at top,rgba(56,189,248,.16),transparent 42%)}.empty-card{max-width:460px;animation:fadeIn .35s ease both}.empty-orb{width:92px;height:92px;margin:0 auto 16px;border-radius:50%;background:radial-gradient(circle at 32% 30%,#7dd3fc,#4f46e5 55%,#0f172a 100%);box-shadow:0 0 0 10px rgba(99,102,241,.08),0 0 60px rgba(56,189,248,.22);animation:orbit 3s ease-in-out infinite}.status{margin-top:16px;padding:12px 14px;border-radius:14px;background:rgba(148,163,184,.08);color:#dbeafe;font-size:13px}
    .dashboard{opacity:1}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.metric,.bar-row,.summary,.badge{opacity:1;transform:none}.stage-enter .metric,.stage-enter .bar-row,.stage-enter .summary,.stage-enter .badge{opacity:0;transform:translateY(8px)}.stage-enter.is-live .metric,.stage-enter.is-live .bar-row,.stage-enter.is-live .summary,.stage-enter.is-live .badge{animation:fadeInUp .42s ease forwards}.metric{padding:16px;border-radius:18px;background:var(--panel2);border:1px solid rgba(148,163,184,.14)}.label{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.08em}.value{margin-top:8px;font-size:26px;font-weight:700}.sub{margin-top:6px;color:#cbd5e1;font-size:13px}
    .bars{margin-top:16px;display:grid;gap:12px}.bar-row{padding:14px 16px;border-radius:18px;background:rgba(15,23,42,.52);border:1px solid rgba(148,163,184,.14)}.bar-head{display:flex;justify-content:space-between;gap:12px;margin-bottom:10px;font-size:14px}.bar-track{position:relative;height:14px;border-radius:999px;overflow:hidden;background:rgba(148,163,184,.12)}.bar-fill{position:absolute;inset:0 auto 0 0;width:0%;border-radius:inherit;background:var(--accent);box-shadow:0 0 24px rgba(56,189,248,.28);transition:width .6s cubic-bezier(.2,.8,.2,1)}
    .summary{margin-top:16px;border-radius:18px;padding:16px;background:rgba(2,6,23,.45);border:1px solid rgba(148,163,184,.14);color:#dbeafe;line-height:1.65;white-space:pre-wrap}.side{display:grid;gap:18px;align-content:start}.log,.json{height:220px;overflow:auto;white-space:pre-wrap;word-break:break-word;padding:14px 16px;border-radius:16px;background:rgba(2,6,23,.45);color:#dbeafe;font:12px/1.58 ui-monospace,SFMono-Regular,Menlo,monospace}.badge{display:inline-flex;align-items:center;gap:8px;padding:7px 10px;margin-top:12px;border-radius:999px;background:rgba(52,211,153,.1);color:#bbf7d0;border:1px solid rgba(52,211,153,.18)}
    .metric[data-i="0"]{animation-delay:.04s}.metric[data-i="1"]{animation-delay:.10s}.metric[data-i="2"]{animation-delay:.16s}.metric[data-i="3"]{animation-delay:.22s}.bar-row[data-i="0"]{animation-delay:.30s}.bar-row[data-i="1"]{animation-delay:.36s}.bar-row[data-i="2"]{animation-delay:.42s}.bar-row[data-i="3"]{animation-delay:.48s}.summary{animation-delay:.56s}.badge{animation-delay:.64s}
    @keyframes pulse{0%,100%{transform:translateY(0);box-shadow:0 10px 25px rgba(99,102,241,.32)}50%{transform:translateY(-1px);box-shadow:0 14px 34px rgba(56,189,248,.38)}} @keyframes orbit{0%,100%{transform:scale(1) translateY(0)}50%{transform:scale(1.06) translateY(-6px)}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} @media (max-width:920px){.wrap{grid-template-columns:1fr}.log,.json{height:180px}}
  </style>
  <div class="wrap">
    <section class="panel">
      <div class="eyebrow">Staged stable live widget runtime</div>
      <h1>Build a dashboard on demand</h1>
      <p>This version keeps the dashboard root mounted, pins stage height, and fades items in only when they are first created.</p>
      <div class="actions">
        <button id="buildBtn" class="primary">Build dashboard live</button>
        <button id="summaryBtn" class="secondary">Submit summary</button>
        <button id="closeBtn" class="ghost">Close</button>
      </div>
      <div class="stage" id="stage"></div>
    </section>
    <aside class="side">
      <section class="panel"><div class="eyebrow">Host status</div><div id="hostLog" class="log">Waiting for host state…</div></section>
      <section class="panel"><div class="eyebrow">Latest dashboard payload</div><div id="payloadLog" class="json">No dashboard built yet.</div></section>
    </aside>
  </div>
  <script>
  (function(){
    const stage=document.getElementById('stage');
    const hostLog=document.getElementById('hostLog');
    const payloadLog=document.getElementById('payloadLog');
    const buildBtn=document.getElementById('buildBtn');
    const summaryBtn=document.getElementById('summaryBtn');
    const closeBtn=document.getElementById('closeBtn');
    let latestDashboard=null,lastDashboardSignature='',currentStatus='No dashboard built yet.',rafHandle=0,pendingHostState=null,pinnedHeight=0,lastHostText='',lastPayloadText='',hasAnimatedShell=false;
    const fmt=n=>new Intl.NumberFormat('en-US').format(Number(n||0));
    const esc=v=>String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#39;');
    function pinStageHeight(){ const next=Math.max(pinnedHeight||0, stage.offsetHeight||0, 460); pinnedHeight=next; stage.style.minHeight=next+'px'; }
    function buildSummary(d){ if(!d) return 'No dashboard has been built yet.'; return ['# Live internal dashboard summary','','- Chat: '+d.chat.currentChatJid,'- Root chat: '+d.chat.rootChatJid,'- Active chats: '+fmt(d.chat.activeChats),'- Branches: '+fmt(d.chat.branches),'- Agent status: '+(d.agent.status||'unknown'),'- Agent phase: '+(d.agent.phase||'n/a'),'- Model: '+(d.model.current||'unknown'),'- Thinking level: '+(d.model.thinkingLevel||'default'),'- Queue count: '+fmt(d.queue.count),'- Context usage: '+fmt(d.context.tokens)+' / '+fmt(d.context.contextWindow)+' ('+Math.round(d.context.percent||0)+'%)','- Loaded posts: '+fmt(d.timeline.loadedPosts),'- Bot posts: '+fmt(d.timeline.botPosts),'- User posts: '+fmt(d.timeline.userPosts),'','Built live from the host after clicking the widget button.'].join('\n'); }
    function setBoxText(el, value, key){ if(key==='host'&&value===lastHostText) return; if(key==='payload'&&value===lastPayloadText) return; el.textContent=value; if(key==='host') lastHostText=value; if(key==='payload') lastPayloadText=value; }
    function renderEmpty(message){ if(stage.dataset.mode==='empty' && currentStatus===message) return; currentStatus=message; stage.dataset.mode='empty'; hasAnimatedShell=false; stage.innerHTML='<div class="empty"><div class="empty-card"><div class="empty-orb"></div><h2 style="margin:0 0 10px;font-size:28px;">Ready to build</h2><p style="font-size:15px;">Click <strong>Build dashboard live</strong> to fetch fresh PiClaw host state and animate it into a dashboard.</p><div class="status">'+esc(message||'No request sent yet.')+'</div></div></div>'; pinStageHeight(); }
    function ensureDashboardShell(bars){ if(stage.dataset.mode==='dashboard') return; stage.dataset.mode='dashboard'; stage.classList.add('stage-enter'); stage.innerHTML='<div class="dashboard ready"><div class="grid"><div class="metric" data-i="0"><div class="label">Active chats</div><div class="value" data-k="activeChats"></div><div class="sub" data-k="rootChat"></div></div><div class="metric" data-i="1"><div class="label">Queue</div><div class="value" data-k="queueCount"></div><div class="sub" data-k="agentStatus"></div></div><div class="metric" data-i="2"><div class="label">Context</div><div class="value" data-k="contextPercent"></div><div class="sub" data-k="contextTokens"></div></div><div class="metric" data-i="3"><div class="label">Timeline</div><div class="value" data-k="loadedPosts"></div><div class="sub" data-k="postMix"></div></div></div><div class="bars">'+bars.map((bar,index)=>'<div class="bar-row" data-i="'+index+'"><div class="bar-head"><span data-bar-label="'+index+'"></span><strong data-bar-v="'+index+'"></strong></div><div class="bar-track"><div class="bar-fill" data-bar="'+index+'"></div></div></div>').join('')+'</div><div class="summary">'+''+'</div><div class="badge"></div></div>'; pinStageHeight(); requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ if(stage.dataset.mode==='dashboard' && !hasAnimatedShell){ hasAnimatedShell=true; stage.classList.add('is-live'); }}); }); }
    function patchDashboard(d, signature){ latestDashboard=d; lastDashboardSignature=signature; currentStatus=''; const bars=Array.isArray(d.bars)?d.bars:[]; ensureDashboardShell(bars); stage.querySelector('[data-k="activeChats"]').textContent=fmt(d.chat.activeChats); stage.querySelector('[data-k="rootChat"]').textContent='Root: '+(d.chat.rootChatJid||'—'); stage.querySelector('[data-k="queueCount"]').textContent=fmt(d.queue.count); stage.querySelector('[data-k="agentStatus"]').textContent='Agent: '+(d.agent.status||'unknown'); stage.querySelector('[data-k="contextPercent"]').textContent=Math.round(d.context.percent||0)+'%'; stage.querySelector('[data-k="contextTokens"]').textContent=fmt(d.context.tokens)+' / '+fmt(d.context.contextWindow)+' tokens'; stage.querySelector('[data-k="loadedPosts"]').textContent=fmt(d.timeline.loadedPosts); stage.querySelector('[data-k="postMix"]').textContent='Bots '+fmt(d.timeline.botPosts)+' · Users '+fmt(d.timeline.userPosts); stage.querySelector('.summary').textContent=buildSummary(d); stage.querySelector('.badge').textContent='● Built at '+(d.generatedAt||new Date().toISOString()); bars.forEach((bar,index)=>{ const label=stage.querySelector('[data-bar-label="'+index+'"]'); const value=stage.querySelector('[data-bar-v="'+index+'"]'); const fill=stage.querySelector('[data-bar="'+index+'"]'); if(label) label.textContent=bar.label||('Bar '+index); if(value) value.textContent=fmt(bar.value)+'%'; if(fill){ const next=Math.max(0,Math.min(100,Number(bar.value||0)))+'%'; if(fill.style.width!==next){ requestAnimationFrame(()=>{ fill.style.width=next; }); } } }); requestAnimationFrame(pinStageHeight); }
    function flushHostState(){ rafHandle=0; const hostState=pendingHostState; pendingHostState=null; const runtimeState=hostState&&hostState.runtimeState?hostState.runtimeState:{}; const dashboard=runtimeState.dashboard||null; const update=runtimeState.lastHostUpdate||null; setBoxText(hostLog, JSON.stringify(update||hostState||null,null,2), 'host'); if(dashboard){ const signature=JSON.stringify(dashboard); setBoxText(payloadLog, JSON.stringify(dashboard,null,2), 'payload'); if(signature!==lastDashboardSignature || stage.dataset.mode!=='dashboard') patchDashboard(dashboard, signature); return; } renderEmpty(update&&update.type==='refresh_building' ? 'Host is building the dashboard snapshot…' : currentStatus); }
    function scheduleHostState(hostState){ pendingHostState=hostState; if(rafHandle) return; rafHandle=requestAnimationFrame(flushHostState); }
    buildBtn.addEventListener('click',function(){ currentStatus='Request sent. Waiting for host snapshot…'; renderEmpty(currentStatus); if(window.piclawWidget){ window.piclawWidget.requestRefresh({ buildDashboard:true, dashboardKind:'internal-state', source:'staged-stable-dashboard-action' }); }});
    summaryBtn.addEventListener('click',function(){ if(window.piclawWidget){ window.piclawWidget.submit({ text: buildSummary(latestDashboard) }); }});
    closeBtn.addEventListener('click',function(){ if(window.piclawWidget) window.piclawWidget.close({ reason:'user-close' }); });
    window.addEventListener('piclaw:widget-message',function(event){ const detail=event&&event.detail; scheduleHostState(detail&&detail.payload?detail.payload:null); });
    scheduleHostState(window.piclawWidget&&window.piclawWidget.hostState?window.piclawWidget.hostState:null);
    if(window.piclawWidget){ window.piclawWidget.ready({ widget:'staged-stable-dashboard-action' }); }
  })();
  </script>
</div>`;
}
export function createDashboardWidgetBlock(widgetId = createUuid("widget")) {
    return {
        type: "generated_widget",
        widget_id: widgetId,
        title: "Staged stable dashboard",
        subtitle: "Agent-posted host-backed dashboard",
        description: "Builds on click via the repaired host path, keeps layout pinned, and fades items in as they are first created.",
        open_label: "Open staged dashboard",
        capabilities: ["interactive"],
        artifact: {
            kind: "html",
            html: buildDashboardWidgetHtml(),
        },
    };
}
export async function postDashboardWidget(sender, options = {}) {
    const chatJid = options.chatJid || "web:default";
    const block = createDashboardWidgetBlock(options.widgetId);
    await sender.sendMessage(chatJid, options.text || DEFAULT_DASHBOARD_MESSAGE, {
        ...(options.threadId !== undefined ? { threadId: options.threadId } : {}),
        contentBlocks: [block],
    });
}
