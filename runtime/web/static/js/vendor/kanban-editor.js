(()=>{var{h:jj,render:d}=preact,{useState:V,useEffect:x,useCallback:o,useRef:u}=preactHooks,y=htm.bind(jj),v=null,C=null,L=null,h=0,T=null,S=null,t=new Map;function b(G){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${G}-${crypto.randomUUID()}`;return`${G}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var A={grip:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:y`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:y`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function Gj(G){if(!G.startsWith(`---
`))return G;let j=G.indexOf(`
---
`,4);return j===-1?G:G.slice(j+5)}function Jj(G){let j=G.indexOf("%% kanban:settings");if(j===-1)return{settings:{},content:G};let J=G.indexOf("```",j);if(J===-1)return{settings:{},content:G};let P=G.indexOf("```",J+3);if(P===-1)return{settings:{},content:G};let Q=G.slice(J+3,P).trim(),$={};try{$=JSON.parse(Q)}catch{}let Z=G.indexOf("%%",P+3),W=Z===-1?P+3:Z+2,O=`${G.slice(0,j).trimEnd()}
${G.slice(W).trimStart()}`.trim();return{settings:$,content:O}}function p(G){if(G.startsWith("\\#")||G.startsWith("\\---"))return G;if(G.startsWith("#")||G.startsWith("---"))return`\\${G}`;return G}function i(G){if(G.startsWith("\\#")||G.startsWith("\\---"))return G.slice(1);return G}function Nj(G){let j=String(G||"").trim();if(!j)return"#";if(j.startsWith("#")||j.startsWith("/"))return j;try{let J=new URL(j,window.location.origin);if(["http:","https:","mailto:","tel:"].includes(J.protocol))return J.toString()}catch{}return"#"}function n(G){return G.replace(/\n/g,"<br>")}function Pj(G){let j=String(G||""),J=t.get(j);if(J)return J;let P=escapeHtml(j),Q=n(P),$=globalThis?.marked;try{if($?.parse)Q=String($.parse(P,{gfm:!0,breaks:!0,headerIds:!1,mangle:!1})||"")}catch{Q=n(P)}return Q=Q.replace(/<a\s+([^>]*?)href=(['"])(.*?)\2([^>]*)>/gi,(Z,W,O,U,z)=>{let q=Nj(U);return`<a ${W}href=${O}${q}${O}${z} target="_blank" rel="noopener noreferrer">`}),t.set(j,Q),Q}function a(G){let j={lanes:[],archive:[],settings:{}},J=Gj(G),P=Jj(J);j.settings=P.settings,J=P.content;let Q=J.split(/\n---\n/);if(j.lanes=e(Q[0]),Q.length>1){let $=Q.slice(1).join(`
---
`),W=e($).find((O)=>O.title.toLowerCase()==="archive");if(W)j.archive=W.cards}return j}function e(G){let j=[],J=G.split(/(?=^## )/gm).filter((P)=>P.trim());for(let P of J){let Q=P.split(`
`),$=Q[0].match(/^## (.+)$/);if(!$)continue;let Z={id:b("lane"),title:$[1].trim(),cards:[]},W=null,O="";for(let U=1;U<Q.length;U++){let z=Q[U],q=z.match(/^- \[(.)\] (.*)$/);if(q){if(W)W.title=O.trim(),Z.cards.push(W);W={id:b("card"),title:i(q[2]),checkChar:q[1],checked:q[1]!==" "},O=i(q[2])}else if(W&&z.match(/^\s+\S/))O+=`
`+i(z.replace(/^\s+/,""))}if(W)W.title=O.trim(),Z.cards.push(W);j.push(Z)}return j}function r(G){let j=["---","","kanban-plugin: board","","---",""];for(let J of G.lanes){j.push(`## ${J.title}`,"");for(let P of J.cards){let Q=`[${P.checked?P.checkChar!==" "?P.checkChar:"x":" "}]`,$=P.title.split(`
`);j.push(`- ${Q} ${p($[0])}`);for(let Z=1;Z<$.length;Z++)j.push(`  ${p($[Z])}`)}j.push("")}if(G.archive.length>0){j.push("---","","## Archive","");for(let J of G.archive){let P=J.title.split(`
`);j.push(`- [${J.checked?"x":" "}] ${p(P[0])}`);for(let Q=1;Q<P.length;Q++)j.push(`  ${p(P[Q])}`)}j.push("")}if(Object.keys(G.settings).length>0)j.push("%% kanban:settings","```",JSON.stringify(G.settings),"```","%%");return j.join(`
`)}function Qj({checked:G,onChange:j}){return y`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button class="kanban-plugin__item-checkbox ${G?"is-checked":""}"
        onClick=${(J)=>{J.stopPropagation(),j()}}>
        ${G?A.check:""}
      </button>
    </div>`}function Wj({onArchive:G,isEditing:j,onCancelEdit:J}){return y`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${j?y`
        <button class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(P)=>{P.stopPropagation(),J()}} title="Cancel">${A.x}</button>
      `:y`
        <button class="kanban-plugin__item-postfix-button"
          onClick=${(P)=>{P.stopPropagation(),G()}} title="Archive">${A.archive}</button>
      `}
    </div>`}function Xj({card:G,laneId:j,cardIndex:J,onUpdate:P,onDelete:Q,onArchive:$}){let[Z,W]=V(!1),[O,U]=V(G.title),z=u(null);x(()=>{if(Z&&z.current)z.current.focus(),z.current.setSelectionRange(z.current.value.length,z.current.value.length),z.current.style.height="auto",z.current.style.height=z.current.scrollHeight+"px"},[Z]);let q=(H)=>{T={card:G,fromLaneId:j,fromIndex:J},H.dataTransfer.effectAllowed="move",H.dataTransfer.setData("text/plain",G.id),setTimeout(()=>{H.target.classList.add("is-dragging")},0)},_=(H)=>{T=null,H.target.classList.remove("is-dragging")},B=()=>{P({...G,checked:!G.checked,checkChar:G.checked?" ":"x"})},D=()=>{if(O.trim())P({...G,title:O.trim()});W(!1)},R=(H)=>{if(H.key==="Enter"&&!H.shiftKey)H.preventDefault(),D();else if(H.key==="Escape")U(G.title),W(!1)},I=(H)=>{U(H.target.value),H.target.style.height="auto",H.target.style.height=H.target.scrollHeight+"px"},M=()=>{U(G.title),W(!1)};return y`
    <div class="kanban-plugin__item-wrapper">
      <div class="kanban-plugin__item ${G.checked?"is-complete":""} ${Z?"is-editing":""}"
        draggable=${!Z}
        onKeyDown=${(H)=>{if((H.ctrlKey||H.metaKey)&&H.key.toLowerCase()==="e")H.preventDefault(),W(!0);if((H.ctrlKey||H.metaKey)&&H.key.toLowerCase()==="d")H.preventDefault(),Q(G);if((H.ctrlKey||H.metaKey)&&H.key.toLowerCase()==="a")H.preventDefault(),$(G)}}
        onDragStart=${q} onDragEnd=${_}
        onDblClick=${()=>!Z&&W(!0)} tabindex="0">
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${Qj} checked=${G.checked} onChange=${B} />
            ${Z?y`
              <textarea ref=${z} class="kanban-plugin__item-edit-textarea"
                value=${O} onInput=${I}
                onBlur=${()=>{if(Z)D()}}
                onKeyDown=${R} />
            `:y`<div class="kanban-plugin__item-title kanban-plugin__item-markdown" dangerouslySetInnerHTML=${{__html:Pj(G.title)}}></div>`}
            <${Wj} isEditing=${Z}
              onArchive=${()=>$(G)} onCancelEdit=${M} />
          </div>
        </div>
      </div>
    </div>`}function Yj({onAdd:G,onCancel:j}){let[J,P]=V(""),Q=u(null);x(()=>{Q.current?.focus()},[]);let $=()=>{if(J.trim())G(J.trim()),P("")};return y`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea ref=${Q} placeholder="Card title..." value=${J}
          onInput=${(W)=>P(W.target.value)} onKeyDown=${(W)=>{if(W.key==="Enter"&&!W.shiftKey)W.preventDefault(),$();else if(W.key==="Escape")j()}} rows="2" />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${$}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${j}>Cancel</button>
      </div>
    </div>`}function Zj({lane:G,laneIndex:j,onUpdate:J,onDelete:P,onAddCard:Q,onUpdateCard:$,onDeleteCard:Z,onArchiveCard:W,onMoveCard:O,onMoveLane:U}){let[z,q]=V(!1),[_,B]=V(G.title),[D,R]=V(!1),[I,M]=V(!1),[H,k]=V(!1),[g,m]=V(!1),f=u(null);x(()=>{if(z&&f.current)f.current.focus(),f.current.select()},[z]);let s=(K)=>{if(K.preventDefault(),T)K.dataTransfer.dropEffect="move",M(!0);if(S)K.dataTransfer.dropEffect="move",k(!0)},N=(K)=>{let E=K.currentTarget.getBoundingClientRect();if(K.clientX<E.left||K.clientX>E.right||K.clientY<E.top||K.clientY>E.bottom)M(!1),k(!1)},Y=(K)=>{if(K.preventDefault(),M(!1),k(!1),T)O(T.card,T.fromLaneId,G.id);if(S&&S.laneId!==G.id)U(S.laneId,G.id);T=null,S=null},X=(K)=>{S={laneId:G.id,fromIndex:j},K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/plain",G.id),m(!0)},F=()=>{S=null,k(!1),m(!1)},w=()=>{if(_.trim())J({...G,title:_.trim()});q(!1)},c=(K)=>{Q(G.id,K),R(!1)};return y`
    <div class="kanban-plugin__lane-wrapper ${H?"is-lane-drop-target":""} ${g?"is-lane-dragging":""}"
      onDragOver=${s}
      onDragLeave=${N}
      onDrop=${Y}>
      <div class="kanban-plugin__lane ${I?"is-dropping":""}">
        <div class="kanban-plugin__lane-header-wrapper">
          <div
            class="kanban-plugin__lane-grip"
            draggable=${!z&&!D}
            onDragStart=${X}
            onDragEnd=${F}
            title="Drag lane"
          >${A.grip}</div>
          <div class="kanban-plugin__lane-title">
            ${z?y`
              <input ref=${f} class="kanban-plugin__lane-title-input" value=${_}
                onInput=${(K)=>B(K.target.value)}
                onBlur=${()=>{if(z)w()}}
                onKeyDown=${(K)=>{if(K.key==="Enter")w();if(K.key==="Escape")B(G.title),q(!1)}} />
            `:y`
              <div class="kanban-plugin__lane-title-text" onDblClick=${()=>q(!0)} title=${G.title}>${G.title}</div>
            `}
          </div>
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>R(!0)} title="Add card">${A.plusCircle}</button>
          </div>
        </div>
        <div class="kanban-plugin__lane-items">
          ${G.cards.map((K,E)=>y`
            <${Xj} key=${K.id} card=${K} laneId=${G.id} cardIndex=${E}
              onUpdate=${(l)=>$(G.id,l)}
              onDelete=${(l)=>Z(G.id,l)}
              onArchive=${W} />`)}
        </div>
        ${D?y`<${Yj} onAdd=${c} onCancel=${()=>R(!1)} />`:null}
      </div>
    </div>`}function $j({onAdd:G,onCancel:j}){let[J,P]=V(""),Q=u(null);x(()=>{Q.current?.focus()},[]);let $=()=>{if(J.trim())G(J.trim())};return y`
    <div class="kanban-plugin__lane-form-wrapper">
      <input ref=${Q} class="kanban-plugin__lane-input" placeholder="Enter lane title..." value=${J}
        onInput=${(Z)=>P(Z.target.value)}
        onKeyDown=${(Z)=>{if(Z.key==="Enter")Z.preventDefault(),$();else if(Z.key==="Escape")j()}} />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${$}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${j}>Cancel</button>
      </div>
    </div>`}function Hj({cards:G,onRestore:j}){let[J,P]=V(!0);if(G.length===0)return null;return y`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${A.archive} Archive (${G.length})</h3>
        <button class="kanban-plugin__archive-toggle" onClick=${()=>P(!J)}>${J?"Hide":"Show"}</button>
      </div>
      ${J&&y`
        <div class="kanban-plugin__archive-cards">
          ${G.map((Q)=>y`
            <div class="kanban-plugin__archive-card" key=${Q.id}>
              <span class="kanban-plugin__archive-card-title">${Q.title.split(`
`)[0]}</span>
              <button onClick=${()=>j(Q)} title="Restore">${A.restore}</button>
            </div>`)}
        </div>`}
    </div>`}function yj({initialContent:G}){let[j,J]=V(()=>a(G??"")),[P,Q]=V(!1),[$,Z]=V([]),[W,O]=V([]),[U,z]=V(h);x(()=>{let N=setInterval(()=>{if(h!==U){if(z(h),L!==null)J(a(L)),L=null}},100);return()=>clearInterval(N)},[U]);let q=o((N)=>{J(N),Z((Y)=>j?[...Y,j]:Y),O([]),C?.(r(N))},[j]),_=o(()=>{if(!j||$.length===0)return;let N=$[$.length-1];Z($.slice(0,-1)),O((Y)=>[...Y,j]),J(N),C?.(r(N))},[j,$]),B=o(()=>{if(!j||W.length===0)return;let N=W[W.length-1];O(W.slice(0,-1)),Z((Y)=>[...Y,j]),J(N),C?.(r(N))},[j,W]);x(()=>{let N=v;if(!N)return;let Y=(X)=>{if(!(X.ctrlKey||X.metaKey))return;if(X.key.toLowerCase()==="z")X.preventDefault(),X.shiftKey?B():_();else if(X.key.toLowerCase()==="y")X.preventDefault(),B()};return N.addEventListener("keydown",Y),()=>N.removeEventListener("keydown",Y)},[_,B]);let D=(N)=>{if(!j)return;q({...j,lanes:[...j.lanes,{id:b("lane"),title:N,cards:[]}]}),Q(!1)},R=(N)=>{if(!j)return;q({...j,lanes:j.lanes.map((Y)=>Y.id===N.id?N:Y)})},I=(N)=>{if(!j)return;q({...j,lanes:j.lanes.filter((Y)=>Y.id!==N.id)})},M=(N,Y)=>{if(!j||N===Y)return;let X=j.lanes.findIndex((K)=>K.id===N),F=j.lanes.findIndex((K)=>K.id===Y);if(X===-1||F===-1)return;let w=[...j.lanes],[c]=w.splice(X,1);w.splice(F,0,c),q({...j,lanes:w})},H=(N,Y)=>{if(!j)return;let X={id:b("card"),title:Y,checked:!1,checkChar:" "};q({...j,lanes:j.lanes.map((F)=>F.id===N?{...F,cards:[...F.cards,X]}:F)})},k=(N,Y)=>{if(!j)return;q({...j,lanes:j.lanes.map((X)=>X.id===N?{...X,cards:X.cards.map((F)=>F.id===Y.id?Y:F)}:X)})},g=(N,Y)=>{if(!j)return;q({...j,lanes:j.lanes.map((X)=>X.id===N?{...X,cards:X.cards.filter((F)=>F.id!==Y.id)}:X)})},m=(N)=>{if(!j)return;q({...j,lanes:j.lanes.map((Y)=>({...Y,cards:Y.cards.filter((X)=>X.id!==N.id)})),archive:[...j.archive,{...N,checked:!0}]})},f=(N,Y,X)=>{if(!j)return;q({...j,lanes:j.lanes.map((F)=>{if(F.id===Y)return{...F,cards:F.cards.filter((w)=>w.id!==N.id)};if(F.id===X)return{...F,cards:[...F.cards,N]};return F})})},s=(N)=>{if(!j)return;if(j.lanes.length===0){q({...j,lanes:[{id:b("lane"),title:"Restored",cards:[{...N,checked:!1}]}],archive:j.archive.filter((X)=>X.id!==N.id)});return}let Y=j.lanes[0];q({...j,lanes:j.lanes.map((X)=>X.id===Y.id?{...X,cards:[...X.cards,{...N,checked:!1}]}:X),archive:j.archive.filter((X)=>X.id!==N.id)})};if(!j)return y`<div class="loading">Loading...</div>`;return y`
    <div class="kanban-plugin" tabindex="-1">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>Q(!0)}>${A.plus} Add lane</button>
        <button class="secondary" onClick=${_} disabled=${$.length===0} title="Undo (Ctrl+Z)">Undo</button>
        <button class="secondary" onClick=${B} disabled=${W.length===0} title="Redo (Ctrl+Y)">Redo</button>
      </div>
      <div class="kanban-plugin__board"><div>
        ${j.lanes.map((N,Y)=>y`
          <${Zj} key=${N.id} lane=${N} laneIndex=${Y} onUpdate=${R} onDelete=${I}
            onAddCard=${H} onUpdateCard=${k} onDeleteCard=${g}
            onArchiveCard=${m} onMoveCard=${f} onMoveLane=${M} />`)}
        ${P&&y`<${$j} onAdd=${D} onCancel=${()=>Q(!1)} />`}
      </div></div>
      <${Hj} cards=${j.archive} onRestore=${s} />
    </div>`}window.__kanbanEditor={mount(G,j){if(v=G,C=j.onEdit,T=null,L=null,!j.isDark)G.classList.add("light");d(y`<${yj} initialContent=${j.content} />`,G)},update(G){L=G,h++},setTheme(G){v?.classList.toggle("light",!G)},destroy(){if(v)d(null,v);v=null,C=null,L=null,T=null}};})();
