(()=>{var{h:t,render:i}=preact,{useState:V,useEffect:f,useCallback:c,useRef:m}=preactHooks,$=htm.bind(t),E=null,C=null,v=null,p=0,A=null,S=null;function b(j){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${j}-${crypto.randomUUID()}`;return`${j}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var w={grip:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:$`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:$`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function a(j){if(!j.startsWith(`---
`))return j;let q=j.indexOf(`
---
`,4);return q===-1?j:j.slice(q+5)}function n(j){let q=j.indexOf("%% kanban:settings");if(q===-1)return{settings:{},content:j};let H=j.indexOf("```",q);if(H===-1)return{settings:{},content:j};let J=j.indexOf("```",H+3);if(J===-1)return{settings:{},content:j};let N=j.slice(H+3,J).trim(),P={};try{P=JSON.parse(N)}catch{}let W=j.indexOf("%%",J+3),X=W===-1?J+3:W+2,U=`${j.slice(0,q).trimEnd()}
${j.slice(X).trimStart()}`.trim();return{settings:P,content:U}}function h(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j;if(j.startsWith("#")||j.startsWith("---"))return`\\${j}`;return j}function l(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j.slice(1);return j}function r(j){let q={lanes:[],archive:[],settings:{}},H=a(j),J=n(H);q.settings=J.settings,H=J.content;let N=H.split(/\n---\n/);if(q.lanes=d(N[0]),N.length>1){let P=N.slice(1).join(`
---
`),X=d(P).find((U)=>U.title.toLowerCase()==="archive");if(X)q.archive=X.cards}return q}function d(j){let q=[],H=j.split(/(?=^## )/gm).filter((J)=>J.trim());for(let J of H){let N=J.split(`
`),P=N[0].match(/^## (.+)$/);if(!P)continue;let W={id:b("lane"),title:P[1].trim(),cards:[]},X=null,U="";for(let O=1;O<N.length;O++){let F=N[O],z=F.match(/^- \[(.)\] (.*)$/);if(z){if(X)X.title=U.trim(),W.cards.push(X);X={id:b("card"),title:l(z[2]),checkChar:z[1],checked:z[1]!==" "},U=l(z[2])}else if(X&&F.match(/^\s+\S/))U+=`
`+l(F.replace(/^\s+/,""))}if(X)X.title=U.trim(),W.cards.push(X);q.push(W)}return q}function o(j){let q=["---","","kanban-plugin: board","","---",""];for(let H of j.lanes){q.push(`## ${H.title}`,"");for(let J of H.cards){let N=`[${J.checked?J.checkChar!==" "?J.checkChar:"x":" "}]`,P=J.title.split(`
`);q.push(`- ${N} ${h(P[0])}`);for(let W=1;W<P.length;W++)q.push(`  ${h(P[W])}`)}q.push("")}if(j.archive.length>0){q.push("---","","## Archive","");for(let H of j.archive){let J=H.title.split(`
`);q.push(`- [${H.checked?"x":" "}] ${h(J[0])}`);for(let N=1;N<J.length;N++)q.push(`  ${h(J[N])}`)}q.push("")}if(Object.keys(j.settings).length>0)q.push("%% kanban:settings","```",JSON.stringify(j.settings),"```","%%");return q.join(`
`)}function e({checked:j,onChange:q}){return $`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button class="kanban-plugin__item-checkbox ${j?"is-checked":""}"
        onClick=${(H)=>{H.stopPropagation(),q()}}>
        ${j?w.check:""}
      </button>
    </div>`}function jj({onArchive:j,isEditing:q,onCancelEdit:H}){return $`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${q?$`
        <button class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(J)=>{J.stopPropagation(),H()}} title="Cancel">${w.x}</button>
      `:$`
        <button class="kanban-plugin__item-postfix-button"
          onClick=${(J)=>{J.stopPropagation(),j()}} title="Archive">${w.archive}</button>
      `}
    </div>`}function qj({onDelete:j}){let[q,H]=V(!1),J=m(null);return f(()=>{if(!q)return;let N=(P)=>{let W=P.target;if(J.current&&W&&!J.current.contains(W))H(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[q]),$`
    <div class="kanban-plugin__lane-menu" ref=${J}>
      <button
        class="kanban-plugin__lane-settings-button"
        onClick=${(N)=>{N.stopPropagation(),H((P)=>!P)}}
        title="More options"
      >${w.moreVertical}</button>
      ${q&&$`
        <div class="kanban-plugin__lane-menu-popover">
          <button
            class="kanban-plugin__lane-menu-item danger"
            onClick=${(N)=>{N.stopPropagation(),H(!1),j()}}
          >
            ${w.trash}
            <span>Delete lane</span>
          </button>
        </div>
      `}
    </div>`}function Gj({card:j,laneId:q,cardIndex:H,onUpdate:J,onDelete:N,onArchive:P}){let[W,X]=V(!1),[U,O]=V(j.title),F=m(null);f(()=>{if(W&&F.current)F.current.focus(),F.current.setSelectionRange(F.current.value.length,F.current.value.length),F.current.style.height="auto",F.current.style.height=F.current.scrollHeight+"px"},[W]);let z=(y)=>{A={card:j,fromLaneId:q,fromIndex:H},y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",j.id),setTimeout(()=>{y.target.classList.add("is-dragging")},0)},_=(y)=>{A=null,y.target.classList.remove("is-dragging")},B=()=>{J({...j,checked:!j.checked,checkChar:j.checked?" ":"x"})},D=()=>{if(U.trim())J({...j,title:U.trim()});X(!1)},M=(y)=>{if(y.key==="Enter"&&!y.shiftKey)y.preventDefault(),D();else if(y.key==="Escape")O(j.title),X(!1)},I=(y)=>{O(y.target.value),y.target.style.height="auto",y.target.style.height=y.target.scrollHeight+"px"},R=()=>{O(j.title),X(!1)};return $`
    <div class="kanban-plugin__item-wrapper">
      <div class="kanban-plugin__item ${j.checked?"is-complete":""} ${W?"is-editing":""}"
        draggable=${!W}
        onKeyDown=${(y)=>{if((y.ctrlKey||y.metaKey)&&y.key.toLowerCase()==="e")y.preventDefault(),X(!0);if((y.ctrlKey||y.metaKey)&&y.key.toLowerCase()==="d")y.preventDefault(),N(j);if((y.ctrlKey||y.metaKey)&&y.key.toLowerCase()==="a")y.preventDefault(),P(j)}}
        onDragStart=${z} onDragEnd=${_}
        onDblClick=${()=>!W&&X(!0)} tabindex="0">
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${e} checked=${j.checked} onChange=${B} />
            ${W?$`
              <textarea ref=${F} class="kanban-plugin__item-edit-textarea"
                value=${U} onInput=${I}
                onBlur=${()=>{if(W)D()}}
                onKeyDown=${M} />
            `:$`<div class="kanban-plugin__item-title">${j.title}</div>`}
            <${jj} isEditing=${W}
              onArchive=${()=>P(j)} onCancelEdit=${R} />
          </div>
        </div>
      </div>
    </div>`}function Hj({onAdd:j,onCancel:q}){let[H,J]=V(""),N=m(null);f(()=>{N.current?.focus()},[]);let P=()=>{if(H.trim())j(H.trim()),J("")};return $`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea ref=${N} placeholder="Card title..." value=${H}
          onInput=${(X)=>J(X.target.value)} onKeyDown=${(X)=>{if(X.key==="Enter"&&!X.shiftKey)X.preventDefault(),P();else if(X.key==="Escape")q()}} rows="2" />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${P}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function Jj({lane:j,laneIndex:q,onUpdate:H,onDelete:J,onAddCard:N,onUpdateCard:P,onDeleteCard:W,onArchiveCard:X,onMoveCard:U,onMoveLane:O}){let[F,z]=V(!1),[_,B]=V(j.title),[D,M]=V(!1),[I,R]=V(!1),[y,x]=V(!1),L=m(null);f(()=>{if(F&&L.current)L.current.focus(),L.current.select()},[F]);let u=(Z)=>{if(Z.preventDefault(),A)Z.dataTransfer.dropEffect="move",R(!0);if(S)Z.dataTransfer.dropEffect="move",x(!0)},g=(Z)=>{let T=Z.currentTarget.getBoundingClientRect();if(Z.clientX<T.left||Z.clientX>T.right||Z.clientY<T.top||Z.clientY>T.bottom)R(!1),x(!1)},s=(Z)=>{if(Z.preventDefault(),R(!1),x(!1),A)U(A.card,A.fromLaneId,j.id);if(S&&S.laneId!==j.id)O(S.laneId,j.id);A=null,S=null},G=(Z)=>{if(!Z.target?.closest(".kanban-plugin__lane-grip")){Z.preventDefault();return}S={laneId:j.id,fromIndex:q},Z.dataTransfer.effectAllowed="move",Z.dataTransfer.setData("text/plain",j.id),setTimeout(()=>{Z.currentTarget.classList.add("is-lane-dragging")},0)},Y=(Z)=>{S=null,x(!1),Z.currentTarget.classList.remove("is-lane-dragging")},Q=()=>{if(_.trim())H({...j,title:_.trim()});z(!1)},K=(Z)=>{N(j.id,Z),M(!1)};return $`
    <div class="kanban-plugin__lane-wrapper ${y?"is-lane-drop-target":""}"
      draggable=${!F&&!D}
      onDragStart=${G}
      onDragEnd=${Y}
      onDragOver=${u}
      onDragLeave=${g}
      onDrop=${s}>
      <div class="kanban-plugin__lane ${I?"is-dropping":""}">
        <div class="kanban-plugin__lane-header-wrapper">
          <div class="kanban-plugin__lane-grip">${w.grip}</div>
          <div class="kanban-plugin__lane-title">
            ${F?$`
              <input ref=${L} class="kanban-plugin__lane-title-input" value=${_}
                onInput=${(Z)=>B(Z.target.value)}
                onBlur=${()=>{if(F)Q()}}
                onKeyDown=${(Z)=>{if(Z.key==="Enter")Q();if(Z.key==="Escape")B(j.title),z(!1)}} />
            `:$`
              <div class="kanban-plugin__lane-title-text" onDblClick=${()=>z(!0)} title=${j.title}>${j.title}</div>
            `}
          </div>
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>M(!0)} title="Add card">${w.plusCircle}</button>
            <${qj} onDelete=${()=>J(j)} />
          </div>
        </div>
        <div class="kanban-plugin__lane-items">
          ${j.cards.map((Z,T)=>$`
            <${Gj} key=${Z.id} card=${Z} laneId=${j.id} cardIndex=${T}
              onUpdate=${(k)=>P(j.id,k)}
              onDelete=${(k)=>W(j.id,k)}
              onArchive=${X} />`)}
        </div>
        ${D?$`<${Hj} onAdd=${K} onCancel=${()=>M(!1)} />`:$`<div class="kanban-plugin__item-button-wrapper">
              <button class="kanban-plugin__new-item-button" onClick=${()=>M(!0)}>${w.plus} Add a card</button>
            </div>`}
      </div>
    </div>`}function Nj({onAdd:j,onCancel:q}){let[H,J]=V(""),N=m(null);f(()=>{N.current?.focus()},[]);let P=()=>{if(H.trim())j(H.trim())};return $`
    <div class="kanban-plugin__lane-form-wrapper">
      <input ref=${N} class="kanban-plugin__lane-input" placeholder="Enter lane title..." value=${H}
        onInput=${(W)=>J(W.target.value)}
        onKeyDown=${(W)=>{if(W.key==="Enter")W.preventDefault(),P();else if(W.key==="Escape")q()}} />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${P}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function Qj({cards:j,onRestore:q}){let[H,J]=V(!0);if(j.length===0)return null;return $`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${w.archive} Archive (${j.length})</h3>
        <button class="kanban-plugin__archive-toggle" onClick=${()=>J(!H)}>${H?"Hide":"Show"}</button>
      </div>
      ${H&&$`
        <div class="kanban-plugin__archive-cards">
          ${j.map((N)=>$`
            <div class="kanban-plugin__archive-card" key=${N.id}>
              <span class="kanban-plugin__archive-card-title">${N.title.split(`
`)[0]}</span>
              <button onClick=${()=>q(N)} title="Restore">${w.restore}</button>
            </div>`)}
        </div>`}
    </div>`}function Wj({initialContent:j}){let[q,H]=V(()=>r(j??"")),[J,N]=V(!1),[P,W]=V([]),[X,U]=V([]),[O,F]=V(p);f(()=>{let G=setInterval(()=>{if(p!==O){if(F(p),v!==null)H(r(v)),v=null}},100);return()=>clearInterval(G)},[O]);let z=c((G)=>{H(G),W((Y)=>q?[...Y,q]:Y),U([]),C?.(o(G))},[q]),_=c(()=>{if(!q||P.length===0)return;let G=P[P.length-1];W(P.slice(0,-1)),U((Y)=>[...Y,q]),H(G),C?.(o(G))},[q,P]),B=c(()=>{if(!q||X.length===0)return;let G=X[X.length-1];U(X.slice(0,-1)),W((Y)=>[...Y,q]),H(G),C?.(o(G))},[q,X]);f(()=>{let G=E;if(!G)return;let Y=(Q)=>{if(!(Q.ctrlKey||Q.metaKey))return;if(Q.key.toLowerCase()==="z")Q.preventDefault(),Q.shiftKey?B():_();else if(Q.key.toLowerCase()==="y")Q.preventDefault(),B()};return G.addEventListener("keydown",Y),()=>G.removeEventListener("keydown",Y)},[_,B]);let D=(G)=>{if(!q)return;z({...q,lanes:[...q.lanes,{id:b("lane"),title:G,cards:[]}]}),N(!1)},M=(G)=>{if(!q)return;z({...q,lanes:q.lanes.map((Y)=>Y.id===G.id?G:Y)})},I=(G)=>{if(!q)return;z({...q,lanes:q.lanes.filter((Y)=>Y.id!==G.id)})},R=(G,Y)=>{if(!q||G===Y)return;let Q=q.lanes.findIndex((k)=>k.id===G),K=q.lanes.findIndex((k)=>k.id===Y);if(Q===-1||K===-1)return;let Z=[...q.lanes],[T]=Z.splice(Q,1);Z.splice(K,0,T),z({...q,lanes:Z})},y=(G,Y)=>{if(!q)return;let Q={id:b("card"),title:Y,checked:!1,checkChar:" "};z({...q,lanes:q.lanes.map((K)=>K.id===G?{...K,cards:[...K.cards,Q]}:K)})},x=(G,Y)=>{if(!q)return;z({...q,lanes:q.lanes.map((Q)=>Q.id===G?{...Q,cards:Q.cards.map((K)=>K.id===Y.id?Y:K)}:Q)})},L=(G,Y)=>{if(!q)return;z({...q,lanes:q.lanes.map((Q)=>Q.id===G?{...Q,cards:Q.cards.filter((K)=>K.id!==Y.id)}:Q)})},u=(G)=>{if(!q)return;z({...q,lanes:q.lanes.map((Y)=>({...Y,cards:Y.cards.filter((Q)=>Q.id!==G.id)})),archive:[...q.archive,{...G,checked:!0}]})},g=(G,Y,Q)=>{if(!q)return;z({...q,lanes:q.lanes.map((K)=>{if(K.id===Y)return{...K,cards:K.cards.filter((Z)=>Z.id!==G.id)};if(K.id===Q)return{...K,cards:[...K.cards,G]};return K})})},s=(G)=>{if(!q)return;if(q.lanes.length===0){z({...q,lanes:[{id:b("lane"),title:"Restored",cards:[{...G,checked:!1}]}],archive:q.archive.filter((Q)=>Q.id!==G.id)});return}let Y=q.lanes[0];z({...q,lanes:q.lanes.map((Q)=>Q.id===Y.id?{...Q,cards:[...Q.cards,{...G,checked:!1}]}:Q),archive:q.archive.filter((Q)=>Q.id!==G.id)})};if(!q)return $`<div class="loading">Loading...</div>`;return $`
    <div class="kanban-plugin" tabindex="-1">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>N(!0)}>${w.plus} Add lane</button>
        <button class="secondary" onClick=${_} disabled=${P.length===0} title="Undo (Ctrl+Z)">Undo</button>
        <button class="secondary" onClick=${B} disabled=${X.length===0} title="Redo (Ctrl+Y)">Redo</button>
      </div>
      <div class="kanban-plugin__board"><div>
        ${q.lanes.map((G,Y)=>$`
          <${Jj} key=${G.id} lane=${G} laneIndex=${Y} onUpdate=${M} onDelete=${I}
            onAddCard=${y} onUpdateCard=${x} onDeleteCard=${L}
            onArchiveCard=${u} onMoveCard=${g} onMoveLane=${R} />`)}
        ${J&&$`<${Nj} onAdd=${D} onCancel=${()=>N(!1)} />`}
      </div></div>
      <${Qj} cards=${q.archive} onRestore=${s} />
    </div>`}window.__kanbanEditor={mount(j,q){if(E=j,C=q.onEdit,A=null,v=null,!q.isDark)j.classList.add("light");i($`<${Wj} initialContent=${q.content} />`,j)},update(j){v=j,p++},setTheme(j){E?.classList.toggle("light",!j)},destroy(){if(E)i(null,E);E=null,C=null,v=null,A=null}};})();
