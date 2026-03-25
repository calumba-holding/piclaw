(()=>{var{h:n,render:d}=preact,{useState:U,useEffect:L,useCallback:o,useRef:u}=preactHooks,Z=htm.bind(n),E=null,m=null,v=null,p=0,B=null,k=null;function C(j){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${j}-${crypto.randomUUID()}`;return`${j}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var M={grip:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:Z`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function e(j){if(!j.startsWith(`---
`))return j;let q=j.indexOf(`
---
`,4);return q===-1?j:j.slice(q+5)}function jj(j){let q=j.indexOf("%% kanban:settings");if(q===-1)return{settings:{},content:j};let H=j.indexOf("```",q);if(H===-1)return{settings:{},content:j};let J=j.indexOf("```",H+3);if(J===-1)return{settings:{},content:j};let W=j.slice(H+3,J).trim(),$={};try{$=JSON.parse(W)}catch{}let X=j.indexOf("%%",J+3),P=X===-1?J+3:X+2,O=`${j.slice(0,q).trimEnd()}
${j.slice(P).trimStart()}`.trim();return{settings:$,content:O}}function h(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j;if(j.startsWith("#")||j.startsWith("---"))return`\\${j}`;return j}function i(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j.slice(1);return j}function t(j){let q={lanes:[],archive:[],settings:{}},H=e(j),J=jj(H);q.settings=J.settings,H=J.content;let W=H.split(/\n---\n/);if(q.lanes=a(W[0]),W.length>1){let $=W.slice(1).join(`
---
`),P=a($).find((O)=>O.title.toLowerCase()==="archive");if(P)q.archive=P.cards}return q}function a(j){let q=[],H=j.split(/(?=^## )/gm).filter((J)=>J.trim());for(let J of H){let W=J.split(`
`),$=W[0].match(/^## (.+)$/);if(!$)continue;let X={id:C("lane"),title:$[1].trim(),cards:[]},P=null,O="";for(let V=1;V<W.length;V++){let F=W[V],z=F.match(/^- \[(.)\] (.*)$/);if(z){if(P)P.title=O.trim(),X.cards.push(P);P={id:C("card"),title:i(z[2]),checkChar:z[1],checked:z[1]!==" "},O=i(z[2])}else if(P&&F.match(/^\s+\S/))O+=`
`+i(F.replace(/^\s+/,""))}if(P)P.title=O.trim(),X.cards.push(P);q.push(X)}return q}function r(j){let q=["---","","kanban-plugin: board","","---",""];for(let H of j.lanes){q.push(`## ${H.title}`,"");for(let J of H.cards){let W=`[${J.checked?J.checkChar!==" "?J.checkChar:"x":" "}]`,$=J.title.split(`
`);q.push(`- ${W} ${h($[0])}`);for(let X=1;X<$.length;X++)q.push(`  ${h($[X])}`)}q.push("")}if(j.archive.length>0){q.push("---","","## Archive","");for(let H of j.archive){let J=H.title.split(`
`);q.push(`- [${H.checked?"x":" "}] ${h(J[0])}`);for(let W=1;W<J.length;W++)q.push(`  ${h(J[W])}`)}q.push("")}if(Object.keys(j.settings).length>0)q.push("%% kanban:settings","```",JSON.stringify(j.settings),"```","%%");return q.join(`
`)}function qj({checked:j,onChange:q}){return Z`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button class="kanban-plugin__item-checkbox ${j?"is-checked":""}"
        onClick=${(H)=>{H.stopPropagation(),q()}}>
        ${j?M.check:""}
      </button>
    </div>`}function Gj({onArchive:j,isEditing:q,onCancelEdit:H}){return Z`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${q?Z`
        <button class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(J)=>{J.stopPropagation(),H()}} title="Cancel">${M.x}</button>
      `:Z`
        <button class="kanban-plugin__item-postfix-button"
          onClick=${(J)=>{J.stopPropagation(),j()}} title="Archive">${M.archive}</button>
      `}
    </div>`}function Hj({card:j,laneId:q,cardIndex:H,onUpdate:J,onDelete:W,onArchive:$}){let[X,P]=U(!1),[O,V]=U(j.title),F=u(null);L(()=>{if(X&&F.current)F.current.focus(),F.current.setSelectionRange(F.current.value.length,F.current.value.length),F.current.style.height="auto",F.current.style.height=F.current.scrollHeight+"px"},[X]);let z=(Y)=>{B={card:j,fromLaneId:q,fromIndex:H},Y.dataTransfer.effectAllowed="move",Y.dataTransfer.setData("text/plain",j.id),setTimeout(()=>{Y.target.classList.add("is-dragging")},0)},w=(Y)=>{B=null,Y.target.classList.remove("is-dragging")},_=()=>{J({...j,checked:!j.checked,checkChar:j.checked?" ":"x"})},T=()=>{if(O.trim())J({...j,title:O.trim()});P(!1)},D=(Y)=>{if(Y.key==="Enter"&&!Y.shiftKey)Y.preventDefault(),T();else if(Y.key==="Escape")V(j.title),P(!1)},I=(Y)=>{V(Y.target.value),Y.target.style.height="auto",Y.target.style.height=Y.target.scrollHeight+"px"},R=()=>{V(j.title),P(!1)};return Z`
    <div class="kanban-plugin__item-wrapper">
      <div class="kanban-plugin__item ${j.checked?"is-complete":""} ${X?"is-editing":""}"
        draggable=${!X}
        onKeyDown=${(Y)=>{if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="e")Y.preventDefault(),P(!0);if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="d")Y.preventDefault(),W(j);if((Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="a")Y.preventDefault(),$(j)}}
        onDragStart=${z} onDragEnd=${w}
        onDblClick=${()=>!X&&P(!0)} tabindex="0">
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${qj} checked=${j.checked} onChange=${_} />
            ${X?Z`
              <textarea ref=${F} class="kanban-plugin__item-edit-textarea"
                value=${O} onInput=${I}
                onBlur=${()=>{if(X)T()}}
                onKeyDown=${D} />
            `:Z`<div class="kanban-plugin__item-title">${j.title}</div>`}
            <${Gj} isEditing=${X}
              onArchive=${()=>$(j)} onCancelEdit=${R} />
          </div>
        </div>
      </div>
    </div>`}function Jj({onAdd:j,onCancel:q}){let[H,J]=U(""),W=u(null);L(()=>{W.current?.focus()},[]);let $=()=>{if(H.trim())j(H.trim()),J("")};return Z`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea ref=${W} placeholder="Card title..." value=${H}
          onInput=${(P)=>J(P.target.value)} onKeyDown=${(P)=>{if(P.key==="Enter"&&!P.shiftKey)P.preventDefault(),$();else if(P.key==="Escape")q()}} rows="2" />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${$}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function Nj({lane:j,laneIndex:q,onUpdate:H,onDelete:J,onAddCard:W,onUpdateCard:$,onDeleteCard:X,onArchiveCard:P,onMoveCard:O,onMoveLane:V}){let[F,z]=U(!1),[w,_]=U(j.title),[T,D]=U(!1),[I,R]=U(!1),[Y,f]=U(!1),[g,b]=U(!1),S=u(null);L(()=>{if(F&&S.current)S.current.focus(),S.current.select()},[F]);let s=(y)=>{if(y.preventDefault(),B)y.dataTransfer.dropEffect="move",R(!0);if(k)y.dataTransfer.dropEffect="move",f(!0)},G=(y)=>{let x=y.currentTarget.getBoundingClientRect();if(y.clientX<x.left||y.clientX>x.right||y.clientY<x.top||y.clientY>x.bottom)R(!1),f(!1)},Q=(y)=>{if(y.preventDefault(),R(!1),f(!1),B)O(B.card,B.fromLaneId,j.id);if(k&&k.laneId!==j.id)V(k.laneId,j.id);B=null,k=null},N=(y)=>{k={laneId:j.id,fromIndex:q},y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",j.id),b(!0)},K=()=>{k=null,f(!1),b(!1)},A=()=>{if(w.trim())H({...j,title:w.trim()});z(!1)},c=(y)=>{W(j.id,y),D(!1)};return Z`
    <div class="kanban-plugin__lane-wrapper ${Y?"is-lane-drop-target":""} ${g?"is-lane-dragging":""}"
      onDragOver=${s}
      onDragLeave=${G}
      onDrop=${Q}>
      <div class="kanban-plugin__lane ${I?"is-dropping":""}">
        <div class="kanban-plugin__lane-header-wrapper">
          <div
            class="kanban-plugin__lane-grip"
            draggable=${!F&&!T}
            onDragStart=${N}
            onDragEnd=${K}
            title="Drag lane"
          >${M.grip}</div>
          <div class="kanban-plugin__lane-title">
            ${F?Z`
              <input ref=${S} class="kanban-plugin__lane-title-input" value=${w}
                onInput=${(y)=>_(y.target.value)}
                onBlur=${()=>{if(F)A()}}
                onKeyDown=${(y)=>{if(y.key==="Enter")A();if(y.key==="Escape")_(j.title),z(!1)}} />
            `:Z`
              <div class="kanban-plugin__lane-title-text" onDblClick=${()=>z(!0)} title=${j.title}>${j.title}</div>
            `}
          </div>
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>D(!0)} title="Add card">${M.plusCircle}</button>
          </div>
        </div>
        <div class="kanban-plugin__lane-items">
          ${j.cards.map((y,x)=>Z`
            <${Hj} key=${y.id} card=${y} laneId=${j.id} cardIndex=${x}
              onUpdate=${(l)=>$(j.id,l)}
              onDelete=${(l)=>X(j.id,l)}
              onArchive=${P} />`)}
        </div>
        ${T?Z`<${Jj} onAdd=${c} onCancel=${()=>D(!1)} />`:null}
      </div>
    </div>`}function Pj({onAdd:j,onCancel:q}){let[H,J]=U(""),W=u(null);L(()=>{W.current?.focus()},[]);let $=()=>{if(H.trim())j(H.trim())};return Z`
    <div class="kanban-plugin__lane-form-wrapper">
      <input ref=${W} class="kanban-plugin__lane-input" placeholder="Enter lane title..." value=${H}
        onInput=${(X)=>J(X.target.value)}
        onKeyDown=${(X)=>{if(X.key==="Enter")X.preventDefault(),$();else if(X.key==="Escape")q()}} />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${$}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function Qj({cards:j,onRestore:q}){let[H,J]=U(!0);if(j.length===0)return null;return Z`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${M.archive} Archive (${j.length})</h3>
        <button class="kanban-plugin__archive-toggle" onClick=${()=>J(!H)}>${H?"Hide":"Show"}</button>
      </div>
      ${H&&Z`
        <div class="kanban-plugin__archive-cards">
          ${j.map((W)=>Z`
            <div class="kanban-plugin__archive-card" key=${W.id}>
              <span class="kanban-plugin__archive-card-title">${W.title.split(`
`)[0]}</span>
              <button onClick=${()=>q(W)} title="Restore">${M.restore}</button>
            </div>`)}
        </div>`}
    </div>`}function Wj({initialContent:j}){let[q,H]=U(()=>t(j??"")),[J,W]=U(!1),[$,X]=U([]),[P,O]=U([]),[V,F]=U(p);L(()=>{let G=setInterval(()=>{if(p!==V){if(F(p),v!==null)H(t(v)),v=null}},100);return()=>clearInterval(G)},[V]);let z=o((G)=>{H(G),X((Q)=>q?[...Q,q]:Q),O([]),m?.(r(G))},[q]),w=o(()=>{if(!q||$.length===0)return;let G=$[$.length-1];X($.slice(0,-1)),O((Q)=>[...Q,q]),H(G),m?.(r(G))},[q,$]),_=o(()=>{if(!q||P.length===0)return;let G=P[P.length-1];O(P.slice(0,-1)),X((Q)=>[...Q,q]),H(G),m?.(r(G))},[q,P]);L(()=>{let G=E;if(!G)return;let Q=(N)=>{if(!(N.ctrlKey||N.metaKey))return;if(N.key.toLowerCase()==="z")N.preventDefault(),N.shiftKey?_():w();else if(N.key.toLowerCase()==="y")N.preventDefault(),_()};return G.addEventListener("keydown",Q),()=>G.removeEventListener("keydown",Q)},[w,_]);let T=(G)=>{if(!q)return;z({...q,lanes:[...q.lanes,{id:C("lane"),title:G,cards:[]}]}),W(!1)},D=(G)=>{if(!q)return;z({...q,lanes:q.lanes.map((Q)=>Q.id===G.id?G:Q)})},I=(G)=>{if(!q)return;z({...q,lanes:q.lanes.filter((Q)=>Q.id!==G.id)})},R=(G,Q)=>{if(!q||G===Q)return;let N=q.lanes.findIndex((y)=>y.id===G),K=q.lanes.findIndex((y)=>y.id===Q);if(N===-1||K===-1)return;let A=[...q.lanes],[c]=A.splice(N,1);A.splice(K,0,c),z({...q,lanes:A})},Y=(G,Q)=>{if(!q)return;let N={id:C("card"),title:Q,checked:!1,checkChar:" "};z({...q,lanes:q.lanes.map((K)=>K.id===G?{...K,cards:[...K.cards,N]}:K)})},f=(G,Q)=>{if(!q)return;z({...q,lanes:q.lanes.map((N)=>N.id===G?{...N,cards:N.cards.map((K)=>K.id===Q.id?Q:K)}:N)})},g=(G,Q)=>{if(!q)return;z({...q,lanes:q.lanes.map((N)=>N.id===G?{...N,cards:N.cards.filter((K)=>K.id!==Q.id)}:N)})},b=(G)=>{if(!q)return;z({...q,lanes:q.lanes.map((Q)=>({...Q,cards:Q.cards.filter((N)=>N.id!==G.id)})),archive:[...q.archive,{...G,checked:!0}]})},S=(G,Q,N)=>{if(!q)return;z({...q,lanes:q.lanes.map((K)=>{if(K.id===Q)return{...K,cards:K.cards.filter((A)=>A.id!==G.id)};if(K.id===N)return{...K,cards:[...K.cards,G]};return K})})},s=(G)=>{if(!q)return;if(q.lanes.length===0){z({...q,lanes:[{id:C("lane"),title:"Restored",cards:[{...G,checked:!1}]}],archive:q.archive.filter((N)=>N.id!==G.id)});return}let Q=q.lanes[0];z({...q,lanes:q.lanes.map((N)=>N.id===Q.id?{...N,cards:[...N.cards,{...G,checked:!1}]}:N),archive:q.archive.filter((N)=>N.id!==G.id)})};if(!q)return Z`<div class="loading">Loading...</div>`;return Z`
    <div class="kanban-plugin" tabindex="-1">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>W(!0)}>${M.plus} Add lane</button>
        <button class="secondary" onClick=${w} disabled=${$.length===0} title="Undo (Ctrl+Z)">Undo</button>
        <button class="secondary" onClick=${_} disabled=${P.length===0} title="Redo (Ctrl+Y)">Redo</button>
      </div>
      <div class="kanban-plugin__board"><div>
        ${q.lanes.map((G,Q)=>Z`
          <${Nj} key=${G.id} lane=${G} laneIndex=${Q} onUpdate=${D} onDelete=${I}
            onAddCard=${Y} onUpdateCard=${f} onDeleteCard=${g}
            onArchiveCard=${b} onMoveCard=${S} onMoveLane=${R} />`)}
        ${J&&Z`<${Pj} onAdd=${T} onCancel=${()=>W(!1)} />`}
      </div></div>
      <${Qj} cards=${q.archive} onRestore=${s} />
    </div>`}window.__kanbanEditor={mount(j,q){if(E=j,m=q.onEdit,B=null,v=null,!q.isDark)j.classList.add("light");d(Z`<${Wj} initialContent=${q.content} />`,j)},update(j){v=j,p++},setTheme(j){E?.classList.toggle("light",!j)},destroy(){if(E)d(null,E);E=null,m=null,v=null,B=null}};})();
