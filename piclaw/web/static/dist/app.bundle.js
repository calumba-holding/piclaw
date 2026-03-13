var H8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var c2,K_,q3,k2,z3,Z3,L8,g2={},U3=[],F8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function t0(_,$){for(var Z in $)_[Z]=$[Z];return _}function H3(_){var $=_.parentNode;$&&$.removeChild(_)}function L3(_,$,Z){var J,X,Y,j={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:j[Y]=$[Y];if(arguments.length>2&&(j.children=arguments.length>3?c2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)j[Y]===void 0&&(j[Y]=_.defaultProps[Y]);return f2(_,j,J,X,null)}function f2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++q3:X};return K_.vnode!=null&&K_.vnode(Y),Y}function m2(_){return _.children}function v2(_,$){this.props=_,this.context=$}function B2(_,$){if($==null)return _.__?B2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?B2(_):null}function F3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return F3(_)}}function J3(_){(!_.__d&&(_.__d=!0)&&k2.push(_)&&!u2.__r++||Z3!==K_.debounceRendering)&&((Z3=K_.debounceRendering)||z3)(u2)}function u2(){for(var _;u2.__r=k2.length;)_=k2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),k2=[],_.some(function($){var Z,J,X,Y,j,G;$.__d&&(j=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(X=t0({},Y)).__v=Y.__v+1,z1(G,Y,X,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[j]:null,J,j==null?B2(Y):j,Y.__h),C3(J,Y),Y.__e!=j&&F3(Y)))})}function E3(_,$,Z,J,X,Y,j,G,V,O){var W,H,E,D,C,A,T,U=J&&J.__k||U3,w=U.length;for(Z.__k=[],W=0;W<$.length;W++)if((D=Z.__k[W]=(D=$[W])==null||typeof D=="boolean"?null:typeof D=="string"||typeof D=="number"||typeof D=="bigint"?f2(null,D,null,null,D):Array.isArray(D)?f2(m2,{children:D},null,null,null):D.__b>0?f2(D.type,D.props,D.key,null,D.__v):D)!=null){if(D.__=Z,D.__b=Z.__b+1,(E=U[W])===null||E&&D.key==E.key&&D.type===E.type)U[W]=void 0;else for(H=0;H<w;H++){if((E=U[H])&&D.key==E.key&&D.type===E.type){U[H]=void 0;break}E=null}z1(_,D,E=E||g2,X,Y,j,G,V,O),C=D.__e,(H=D.ref)&&E.ref!=H&&(T||(T=[]),E.ref&&T.push(E.ref,null,D),T.push(H,D.__c||C,D)),C!=null?(A==null&&(A=C),typeof D.type=="function"&&D.__k!=null&&D.__k===E.__k?D.__d=V=D3(D,V,_):V=k3(_,D,E,U,C,V),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=V):_.value=""):V&&E.__e==V&&V.parentNode!=_&&(V=B2(E))}for(Z.__e=A,W=w;W--;)U[W]!=null&&(typeof Z.type=="function"&&U[W].__e!=null&&U[W].__e==Z.__d&&(Z.__d=B2(J,W+1)),A3(U[W],U[W]));if(T)for(W=0;W<T.length;W++)y3(T[W],T[++W],T[++W])}function D3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?D3(X,$,Z):k3(Z,X,X,_.__k,X.__e,$));return $}function k3(_,$,Z,J,X,Y){var j,G,V;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),j=null;else{for(G=Y,V=0;(G=G.nextSibling)&&V<J.length;V+=2)if(G==X)break _;_.insertBefore(X,Y),j=Y}return j!==void 0?j:X.nextSibling}function Y3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||F8.test($)?Z:Z+"px"}function T2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||Y3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||Y3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?W3:X3,Y):_.removeEventListener($,Y?W3:X3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(j){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function X3(_){this.l[_.type+!1](K_.event?K_.event(_):_)}function W3(_){this.l[_.type+!0](K_.event?K_.event(_):_)}function z1(_,$,Z,J,X,Y,j,G,V){var O,W,H,E,D,C,A,T,U,w,g,y=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(V=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(O=K_.__b)&&O($);try{_:if(typeof y=="function"){if(T=$.props,U=(O=y.contextType)&&J[O.__c],w=O?U?U.props.value:O.__:J,Z.__c?A=(W=$.__c=Z.__c).__=W.__E:(("prototype"in y)&&y.prototype.render?$.__c=W=new y(T,w):($.__c=W=new v2(T,w),W.constructor=y,W.render=D8),U&&U.sub(W),W.props=T,W.state||(W.state={}),W.context=w,W.__n=J,H=W.__d=!0,W.__h=[]),W.__s==null&&(W.__s=W.state),y.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=t0({},W.__s)),t0(W.__s,y.getDerivedStateFromProps(T,W.__s))),E=W.props,D=W.state,H)y.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(y.getDerivedStateFromProps==null&&T!==E&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(T,w),!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(T,W.__s,w)===!1||$.__v===Z.__v){W.props=T,W.state=W.__s,$.__v!==Z.__v&&(W.__d=!1),W.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(v){v&&(v.__=$)}),W.__h.length&&j.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(T,W.__s,w),W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(E,D,C)})}W.context=w,W.props=T,W.state=W.__s,(O=K_.__r)&&O($),W.__d=!1,W.__v=$,W.__P=_,O=W.render(W.props,W.state,W.context),W.state=W.__s,W.getChildContext!=null&&(J=t0(t0({},J),W.getChildContext())),H||W.getSnapshotBeforeUpdate==null||(C=W.getSnapshotBeforeUpdate(E,D)),g=O!=null&&O.type===m2&&O.key==null?O.props.children:O,E3(_,Array.isArray(g)?g:[g],$,Z,J,X,Y,j,G,V),W.base=$.__e,$.__h=null,W.__h.length&&j.push(W),A&&(W.__E=W.__=null),W.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=E8(Z.__e,$,Z,J,X,Y,j,V);(O=K_.diffed)&&O($)}catch(v){$.__v=null,(V||Y!=null)&&($.__e=G,$.__h=!!V,Y[Y.indexOf(G)]=null),K_.__e(v,$,Z)}}function C3(_,$){K_.__c&&K_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){K_.__e(J,Z.__v)}})}function E8(_,$,Z,J,X,Y,j,G){var V,O,W,H=Z.props,E=$.props,D=$.type,C=0;if(D==="svg"&&(X=!0),Y!=null){for(;C<Y.length;C++)if((V=Y[C])&&(V===_||(D?V.localName==D:V.nodeType==3))){_=V,Y[C]=null;break}}if(_==null){if(D===null)return document.createTextNode(E);_=X?document.createElementNS("http://www.w3.org/2000/svg",D):document.createElement(D,E.is&&E),Y=null,G=!1}if(D===null)H===E||G&&_.data===E||(_.data=E);else{if(Y=Y&&c2.call(_.childNodes),O=(H=Z.props||g2).dangerouslySetInnerHTML,W=E.dangerouslySetInnerHTML,!G){if(Y!=null)for(H={},C=0;C<_.attributes.length;C++)H[_.attributes[C].name]=_.attributes[C].value;(W||O)&&(W&&(O&&W.__html==O.__html||W.__html===_.innerHTML)||(_.innerHTML=W&&W.__html||""))}if(function(A,T,U,w,g){var y;for(y in U)y==="children"||y==="key"||y in T||T2(A,y,null,U[y],w);for(y in T)g&&typeof T[y]!="function"||y==="children"||y==="key"||y==="value"||y==="checked"||U[y]===T[y]||T2(A,y,T[y],U[y],w)}(_,E,H,X,G),W)$.__k=[];else if(C=$.props.children,E3(_,Array.isArray(C)?C:[C],$,Z,J,X&&D!=="foreignObject",Y,j,Y?Y[0]:Z.__k&&B2(Z,0),G),Y!=null)for(C=Y.length;C--;)Y[C]!=null&&H3(Y[C]);G||(("value"in E)&&(C=E.value)!==void 0&&(C!==_.value||D==="progress"&&!C)&&T2(_,"value",C,H.value,!1),("checked"in E)&&(C=E.checked)!==void 0&&C!==_.checked&&T2(_,"checked",C,H.checked,!1))}return _}function y3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){K_.__e(J,Z)}}function A3(_,$,Z){var J,X;if(K_.unmount&&K_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||y3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){K_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&A3(J[X],$,typeof _.type!="function");Z||_.__e==null||H3(_.__e),_.__e=_.__d=void 0}function D8(_,$,Z){return this.constructor(_,Z)}function w3(_,$,Z){var J,X,Y;K_.__&&K_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],z1($,_=(!J&&Z||$).__k=L3(m2,null,[_]),X||g2,g2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?c2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),C3(Y,_)}c2=U3.slice,K_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},q3=0,v2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=t0({},this.state),typeof _=="function"&&(_=_(t0({},Z),this.props)),_&&t0(Z,_),_!=null&&this.__v&&($&&this.__h.push($),J3(this))},v2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J3(this))},v2.prototype.render=m2,k2=[],z3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u2.__r=0,L8=0;var h2,E0,j3,C2=0,Q1=[],K3=K_.__b,G3=K_.__r,V3=K_.diffed,N3=K_.__c,O3=K_.unmount;function U1(_,$){K_.__h&&K_.__h(E0,_,C2||$),C2=0;var Z=E0.__H||(E0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function R(_){return C2=1,k8(b3,_)}function k8(_,$,Z){var J=U1(h2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):b3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=E0),J.__}function m(_,$){var Z=U1(h2++,3);!K_.__s&&P3(Z.__H,$)&&(Z.__=_,Z.__H=$,E0.__H.__h.push(Z))}function L(_){return C2=5,D0(function(){return{current:_}},[])}function D0(_,$){var Z=U1(h2++,7);return P3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function S(_,$){return C2=8,D0(function(){return _},$)}function C8(){Q1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(R2),_.__H.__h.forEach(q1),_.__H.__h=[]}catch($){_.__H.__h=[],K_.__e($,_.__v)}}),Q1=[]}K_.__b=function(_){E0=null,K3&&K3(_)},K_.__r=function(_){G3&&G3(_),h2=0;var $=(E0=_.__c).__H;$&&($.__h.forEach(R2),$.__h.forEach(q1),$.__h=[])},K_.diffed=function(_){V3&&V3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(Q1.push($)!==1&&j3===K_.requestAnimationFrame||((j3=K_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),B3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);B3&&(J=requestAnimationFrame(X))})(C8)),E0=void 0},K_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(R2),Z.__h=Z.__h.filter(function(J){return!J.__||q1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],K_.__e(J,Z.__v)}}),N3&&N3(_,$)},K_.unmount=function(_){O3&&O3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(R2)}catch(Z){K_.__e(Z,$.__v)}};var B3=typeof requestAnimationFrame=="function";function R2(_){var $=E0;typeof _.__c=="function"&&_.__c(),E0=$}function q1(_){var $=E0;_.__c=_.__(),E0=$}function P3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function b3(_,$){return typeof $=="function"?$(_):$}var M3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var j=$[Y++],G=$[Y]?($[0]|=j?1:2,Z[$[Y++]]):$[++Y];j===3?J[0]=G:j===4?J[1]=Object.assign(J[1]||{},G):j===5?(J[1]=J[1]||{})[$[++Y]]=G:j===6?J[1][$[++Y]]+=G+"":j?(X=_.apply(G,M3(_,G,Z,["",null])),J.push(X),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(G)}return J},Q3=new Map,z=function(_){var $=Q3.get(this);return $||($=new Map,Q3.set(this,$)),($=M3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,j="",G="",V=[0],O=function(E){Y===1&&(E||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,E,j):Y===3&&(E||j)?(V.push(3,E,j),Y=2):Y===2&&j==="..."&&E?V.push(4,E,0):Y===2&&j&&!E?V.push(5,0,!0,j):Y>=5&&((j||!E&&Y===5)&&(V.push(Y,0,j,X),Y=6),E&&(V.push(Y,E,0,X),Y=6)),j=""},W=0;W<Z.length;W++){W&&(Y===1&&O(),O(W));for(var H=0;H<Z[W].length;H++)J=Z[W][H],Y===1?J==="<"?(O(),V=[V],Y=3):j+=J:Y===4?j==="--"&&J===">"?(Y=1,j=""):j=J+j[0]:G?J===G?G="":j+=J:J==='"'||J==="'"?G=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=j,j=""):J==="/"&&(Y<5||Z[W][H+1]===">")?(O(),Y===3&&(V=V[0]),Y=V,(V=V[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):j+=J),Y===3&&j==="!--"&&(Y=4,V=V[0])}return O(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(L3);async function n_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function p2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return n_(Z)}async function S3(_,$=50,Z=0){return n_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function x3(_,$=50,Z=0){return n_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function I3(_){return n_(`/thread/${_}`)}async function T3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return n_(Z,{method:"DELETE"})}async function H1(_,$,Z=null,J=[],X=null){return n_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function f3(){return n_("/agents")}async function v3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n_(`/agent/status${$}`)}async function L1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n_(`/agent/context${$}`)}async function F1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n_(`/agent/queue-state${$}`)}async function Y2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return n_(`/agent/models${$}`)}async function R3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function E1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function g3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function u3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return n_(Z)}async function c3(_,$,Z){return n_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function Q2(_){return`/media/${_}`}function m3(_){return`/media/${_}/thumbnail`}async function i2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function l2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return n_(J)}async function h3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return n_(X)}async function p3(_){return n_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function D1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),j=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+j,{method:"POST",body:J});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),O=Error(V.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=V.code,O}return G.json()}async function i3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function l3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function n3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function o3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return n_($,{method:"DELETE"})}async function n2(_,$=!1){return n_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function k1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function d3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class C1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function R0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function I_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function q2(_,$=!1){let Z=R0(_);if(Z===null)return $;return Z==="true"}function z2(_,$=null){let Z=R0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function e0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:j="file"}){let G=`${_}-file-pill`,V=`${_}-file-name`,O=`${_}-file-remove`,W=j==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${G} title=${Z||$} onClick=${X}>
      ${W}
      <span class=${V}>${$}</span>
      ${J&&z`
        <button
          class=${O}
          onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var A8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function w8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${r3(Z)} / ${r3(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,j=2*Math.PI*7,G=$/100*j,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function r3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function s3({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:j=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:O=[],onRemoveMessageRef:W,onClearMessageRefs:H,activeModel:E=null,modelUsage:D=null,thinkingLevel:C=null,supportsThinking:A=!1,contextUsage:T=null,notificationsEnabled:U=!1,notificationPermission:w="default",onToggleNotifications:g,onModelChange:y,onModelStateChange:v,activeEditorPath:p=null,onAttachEditorFile:o,onOpenFilePill:J_,followupQueueCount:G_=0,followupQueueItems:__=[],onInjectQueuedFollowup:V_,onMessageResponse:P_,isAgentActive:s=!1}){let[t,d]=R(""),[i,$_]=R(""),[j_,Z_]=R([]),[T_,Y_]=R(!1),[O_,Q_]=R([]),[U_,A_]=R(0),[H_,z_]=R(!1),[k_,R_]=R(!1),[w_,b_]=R(!1),[C_,u_]=R([]),[i_,M_]=R(!1),N_=L(null),Q0=L(null),a_=L(null),b0=L(null),j0=L(0),k0=200,L_=(Q)=>{let I=new Set,r=[];for(let B_ of Q||[]){if(typeof B_!=="string")continue;let y_=B_.trim();if(!y_||I.has(y_))continue;I.add(y_),r.push(y_)}return r},q0=()=>{let Q=R0("piclaw_compose_history");if(!Q)return[];try{let I=JSON.parse(Q);if(!Array.isArray(I))return[];return L_(I)}catch{return[]}},C0=(Q)=>{I_("piclaw_compose_history",JSON.stringify(Q))},x=L(q0()),e=L(-1),F_=L(""),Z0=t.trim()||j_.length>0||j.length>0||O.length>0,c_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),M0=typeof window<"u"&&typeof Notification<"u",S0=typeof window<"u"?Boolean(window.isSecureContext):!1,K0=M0&&S0&&w!=="denied",g_=w==="granted"&&U,z0=g_?"Disable notifications":"Enable notifications",d_=E||"",f_=A&&C?` (${C})`:"",_2=f_.trim()?`${C}`:"",$2=typeof D?.hint_short==="string"?D.hint_short.trim():"",g0=[_2||null,$2||null].filter(Boolean).join(" • "),X2=[d_?`Current model: ${d_}${f_}`:null,D?.plan?`Plan: ${D.plan}`:null,$2||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),y0=k_?"Switching model…":X2.join(" • ")||`Current model: ${d_}${f_} (tap to open model picker)`,U0=(Q)=>{if(!Q||typeof Q!=="object")return;let I=Q.model??Q.current;if(typeof v==="function")v({model:I??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(I&&typeof y==="function")y(I)},O0=(Q)=>{let I=Q||N_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},A0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){z_(!1),Q_([]);return}let I=Q.toLowerCase().split(" ")[0];if(I.length<1){z_(!1),Q_([]);return}let r=A8.filter((B_)=>B_.name.startsWith(I)||B_.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(r.length>0&&!(r.length===1&&r[0].name===I))Q_(r),A_(0),z_(!0);else z_(!1),Q_([])},t_=(Q)=>{let I=t,r=I.indexOf(" "),B_=r>=0?I.slice(r):"",y_=Q.name+B_;d(y_),z_(!1),Q_([]),requestAnimationFrame(()=>{let x_=N_.current;if(!x_)return;let q_=y_.length;x_.selectionStart=q_,x_.selectionEnd=q_,x_.focus()})},r_=(Q)=>{if(Z)$_(Q);else d(Q),A0(Q);requestAnimationFrame(()=>O0())},Z2=(Q)=>{let I=Z?i:t,r=I&&!I.endsWith(`
`)?`
`:"",B_=`${I}${r}${Q}`.trimStart();r_(B_)},W2=(Q)=>{let I=Q?.command?.model_label;if(I)return I;let r=Q?.command?.message;if(typeof r==="string"){let B_=r.match(/•\s+([^\n]+?)\s+\(current\)/);if(B_?.[1])return B_[1].trim()}return null},u0=async(Q)=>{if(Z||k_)return;R_(!0);try{let I=await H1("default",Q,null,[]),r=W2(I);U0({model:r??E??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let B_=await Y2();if(B_)U0(B_)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{R_(!1)}},F2=async()=>{await u0("/cycle-model")},m_=async(Q)=>{if(!Q||k_)return;if(await u0(`/model ${Q}`))b_(!1)},H0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),b_((I)=>!I)},L0=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return s?"queue":null},v_=async(Q,I,r={})=>{let{includeMedia:B_=!0,includeFileRefs:y_=!0,includeMessageRefs:x_=!0,clearAfterSubmit:q_=!0,recordHistory:V0=!0}=r||{},p0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:t,F0=typeof p0==="string"?p0:"";if(!F0.trim()&&(B_?j_.length===0:!0)&&(y_?j.length===0:!0)&&(x_?O.length===0:!0))return;z_(!1),Q_([]);let J2=B_?[...j_]:[],j2=y_?[...j]:[],Y0=x_?[...O]:[],X0=F0.trim();if(V0&&X0){let h_=x.current,B0=L_(h_.filter((e_)=>e_!==X0));if(B0.push(X0),B0.length>200)B0.splice(0,B0.length-200);x.current=B0,C0(B0),e.current=-1,F_.current=""}if(q_)d(""),Z_([]),V?.(),H?.();(async()=>{try{let h_=[];for(let _0 of J2){let P0=await R3(_0);h_.push(P0.id)}let B0=j2.length?`Files:
${j2.map((_0)=>`- ${_0}`).join(`
`)}`:"",e_=Y0.length?`Referenced messages:
${Y0.map((_0)=>`- message:${_0}`).join(`
`)}`:"",l_=h_.length?`Images:
${h_.map((_0,P0)=>{let l0=J2[P0]?.name||`image-${P0+1}`;return`- attachment:${_0} (${l0})`}).join(`
`)}`:"",s0=[X0,B0,e_,l_].filter(Boolean).join(`

`),i0=await H1("default",s0,null,h_,L0(I));if(P_?.(i0),i0?.command){U0({model:i0.command.model_label??E??null,thinking_level:i0.command.thinking_level,supports_thinking:i0.command.supports_thinking});try{let _0=await Y2();if(_0)U0(_0)}catch{}}_?.()}catch(h_){console.error("Failed to post:",h_)}})()},S_=(Q)=>{V_?.(Q);let I=typeof Q?.content==="string"?Q.content.trim():"";if(!I)return;v_(I,"steer",{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},s_=(Q)=>{if(Q.isComposing)return;if(Z&&Q.key==="Escape"){Q.preventDefault(),$_(""),Y?.();return}if(H_&&O_.length>0){let I=N_.current?.value??(Z?i:t);if(!String(I||"").startsWith("/"))z_(!1),Q_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),A_((r)=>(r+1)%O_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),A_((r)=>(r-1+O_.length)%O_.length);return}if(Q.key==="Tab"){Q.preventDefault(),t_(O_[U_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(N_.current?.value??(Z?i:t)).includes(" ")){Q.preventDefault();let y_=O_[U_];z_(!1),Q_([]),v_(y_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),z_(!1),Q_([]);return}}}if(!Z&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let I=N_.current;if(!I)return;let r=I.value||"",B_=I.selectionStart===0&&I.selectionEnd===0,y_=I.selectionStart===r.length&&I.selectionEnd===r.length;if(Q.key==="ArrowUp"&&B_||Q.key==="ArrowDown"&&y_){let x_=x.current;if(!x_.length)return;Q.preventDefault();let q_=e.current;if(Q.key==="ArrowUp"){if(q_===-1)F_.current=r,q_=x_.length-1;else if(q_>0)q_-=1;e.current=q_,r_(x_[q_]||"")}else{if(q_===-1)return;if(q_<x_.length-1)q_+=1,e.current=q_,r_(x_[q_]||"");else e.current=-1,r_(F_.current||""),F_.current=""}requestAnimationFrame(()=>{let V0=N_.current;if(!V0)return;let p0=V0.value.length;V0.selectionStart=p0,V0.selectionEnd=p0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let I=N_.current?.value??(Z?i:t);if(Z){if(I.trim())J?.(I.trim())}else v_(I,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let I=N_.current?.value??(Z?i:t);if(Z){if(I.trim())J?.(I.trim())}else v_(I)}},J0=(Q)=>{let I=Array.from(Q||[]).filter((r)=>r&&r.type&&r.type.startsWith("image/"));if(!I.length)return;Z_((r)=>[...r,...I])},x0=(Q)=>{J0(Q.target.files),Q.target.value=""},w0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),j0.current+=1,Y_(!0)},c0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),j0.current=Math.max(0,j0.current-1),j0.current===0)Y_(!1)},G0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";Y_(!0)},I0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),j0.current=0,Y_(!1),J0(Q.dataTransfer?.files||[])},d0=(Q)=>{if(Z)return;let I=Q.clipboardData?.items;if(!I||!I.length)return;let r=[];for(let B_ of I){if(B_.kind!=="file")continue;let y_=B_.getAsFile?.();if(y_)r.push(y_)}if(r.length>0)Q.preventDefault(),J0(r)},r0=(Q)=>{Z_((I)=>I.filter((r,B_)=>B_!==Q))},m0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:I,longitude:r,accuracy:B_}=Q.coords,y_=`${I.toFixed(5)}, ${r.toFixed(5)}`,x_=Number.isFinite(B_)?` ±${Math.round(B_)}m`:"",q_=`https://maps.google.com/?q=${I},${r}`,V0=`Location: ${y_}${x_} ${q_}`;Z2(V0)},(Q)=>{let I=Q?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!w_)return;M_(!0),Y2().then((Q)=>{let I=Array.isArray(Q?.models)?Q.models.filter((r)=>typeof r==="string"&&r.trim().length>0):[];u_(I),U0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),u_([])}).finally(()=>{M_(!1)})},[w_,E]),m(()=>{if(Z)b_(!1)},[Z]),m(()=>{if(!w_)return;let Q=(I)=>{let r=a_.current,B_=b0.current,y_=I.target;if(r&&r.contains(y_))return;if(B_&&B_.contains(y_))return;b_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[w_]);let h0=(Q)=>{let I=Q.target.value;O0(Q.target),r_(I)};return m(()=>{requestAnimationFrame(()=>O0())},[t,i,Z]),z`
        <div class="compose-box">
            ${!Z&&__.length>0&&z`
                <div class="compose-queue-stack">
                    ${__.map((Q)=>{let I=typeof Q?.content==="string"?Q.content:"";if(!I.trim())return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${I}>
                                    ${I}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>S_(Q)}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                        <polyline points="14 12 18 8 22 12" />
                                    </svg>
                                    <span>Steer</span>
                                </button>
                                <button
                                    class="compose-queue-stack-close-btn"
                                    type="button"
                                    title="Cancel queued message"
                                    onClick=${()=>V_?.(Q)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${T_?" drag-active":""}`}
                onDragEnter=${w0}
                onDragOver=${G0}
                onDragLeave=${c0}
                onDrop=${I0}
            >
                <div class="compose-input-main">
                    ${(j.length>0||j_.length>0||O.length>0)&&z`
                        <div class="compose-file-refs">
                            ${O.map((Q)=>{return z`
                                    <${e0}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>W?.(Q)}
                                    />
                                `})}
                            ${j.map((Q)=>{let I=Q.split("/").pop()||Q;return z`
                                    <${e0}
                                        prefix="compose"
                                        label=${I}
                                        title=${Q}
                                        onClick=${()=>J_?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(Q)}
                                    />
                                `})}
                            ${j_.map((Q,I)=>{let r=Q?.name||`image-${I+1}`;return z`
                                    <${e0}
                                        key=${r+I}
                                        prefix="compose"
                                        label=${r}
                                        title=${r}
                                        removeTitle="Remove image"
                                        onRemove=${()=>r0(I)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${N_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?i:t}
                        onInput=${h0}
                        onKeyDown=${s_}
                        onPaste=${d0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${H_&&O_.length>0&&z`
                        <div class="slash-autocomplete" ref=${Q0}>
                            ${O_.map((Q,I)=>z`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${I===U_?" active":""}`}
                                    onMouseDown=${(r)=>{r.preventDefault(),t_(Q)}}
                                    onMouseEnter=${()=>A_(I)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${w_&&!Z&&z`
                        <div class="compose-model-popup" ref=${a_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${i_&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!i_&&C_.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!i_&&C_.map((Q)=>z`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${E===Q?" active":""}`}
                                        onClick=${()=>{m_(Q)}}
                                        disabled=${k_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{F2()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&(E||G_>0)&&z`
                    <div class="compose-meta-row">
                        ${!Z&&E&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y0}
                                    aria-label="Open model picker"
                                    onClick=${H0}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":d_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&g0&&z`
                                        <span class="compose-model-usage-hint" title=${y0}>
                                            ${g0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!Z&&G_>0&&z`
                            <div class="compose-queue-indicator" title="Queued follow-up messages waiting for an assistant turn">
                                <span class="compose-queue-dot" aria-hidden="true"></span>
                                <span>${G_} queued follow-up${G_>1?"s":""}</span>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&T&&T.percent!=null&&z`
                        <${w8} usage=${T} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${c_&&!Z&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${m0}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${K0&&!Z&&z`
                        <button
                            class=${`icon-btn notification-btn${g_?" active":""}`}
                            onClick=${g}
                            title=${z0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&z`
                        ${p&&o&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${o}
                                title=${`Attach open file: ${p}`}
                                type="button"
                                disabled=${j.includes(p)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${x0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{v_()}}
                            disabled=${!Z0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var t3="piclaw_theme",w1="piclaw_tint",r2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},P8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},a3={default:{label:"Default",mode:"auto",light:r2,dark:P8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},b8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s2={theme:"default",tint:null},e3="light",y1=!1;function _4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function U2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function M8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),j=parseInt(X[2],10),G=parseInt(X[3],10);if(![Y,j,G].every((O)=>Number.isFinite(O)))return null;let V=`#${[Y,j,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:j,b:G,hex:V}}function $4(_){return U2(_)||M8(_)}function y2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function A1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function Z4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function P1(_){return a3[_]||a3.default}function S8(_){return _.mode==="auto"?Z4():_.mode}function x8(_,$){let Z=P1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||r2}function I8(_,$,Z){let J=$4($);if(!J)return _;let X=U2(_.bgPrimary),Y=U2(_.bgSecondary),j=U2(_.bgHover),G=U2(_.borderColor);if(!X||!Y||!j||!G)return _;let O=U2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:y2(X,J,0.08),bgSecondary:y2(Y,J,0.12),bgHover:y2(j,J,0.16),borderColor:y2(G,J,0.08),accent:J.hex,accentHover:O?y2(J,O,0.18):J.hex}}function T8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=$4(J),Y=X?A1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?A1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?A1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":j,"--accent-soft-strong":G,"--danger-color":_.danger||r2.danger,"--success-color":_.success||r2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([O,W])=>{if(W)Z.style.setProperty(O,W)})}function f8(){if(typeof document>"u")return;let _=document.documentElement;b8.forEach(($)=>_.style.removeProperty($))}function o2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function v8(_,$){if(typeof document>"u")return;let Z=o2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=o2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=o2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=o2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function R8(){if(typeof window>"u")return;let _={...s2,mode:e3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function b1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=_4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=P1(Z),Y=S8(X),j=x8(Z,Y);s2={theme:Z,tint:J},e3=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let V=j;if(Z==="default"&&J)V=I8(j,J,Y);if(Z==="default"&&!J)f8();else T8(V,Y);if(v8(V.bgPrimary,Y),R8(),$.persist!==!1)if(I_(t3,Z),J)I_(w1,J);else I_(w1,"")}function d2(){if(P1(s2.theme).mode!=="auto")return;b1(s2,{persist:!1})}function J4(){if(typeof window>"u")return()=>{};let _=_4(R0(t3)||"default"),$=R0(w1),Z=$?$.trim():null;if(b1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!y1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",d2);else if(J.addListener)J.addListener(d2);return y1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",d2);else if(J.removeListener)J.removeListener(d2);y1=!1}}return()=>{}}function Y4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;b1({theme:Z||"default",tint:J},{persist:!0})}function X4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return Z4()}var a2=/#(\w+)/g,g8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),u8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),c8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),m8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},h8=new Set(["http:","https:","mailto:",""]);function W4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function H2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!h8.has(J.protocol))return null;return J.href}catch{return null}}function j4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let j of J){let G=j.tagName.toLowerCase();if(!u8.has(G)){let O=j.parentNode;if(!O)continue;while(j.firstChild)O.insertBefore(j.firstChild,j);O.removeChild(j);continue}let V=m8[G]||new Set;for(let O of Array.from(j.attributes)){let W=O.name.toLowerCase(),H=O.value;if(W.startsWith("on")){j.removeAttribute(O.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(V.has(W)||c8.has(W)){if(W==="href"){let E=H2(H);if(!E)j.removeAttribute(O.name);else if(j.setAttribute(O.name,E),G==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let E=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(H):H,D=H2(E,{allowDataImage:G==="img"});if(!D)j.removeAttribute(O.name);else j.setAttribute(O.name,D)}continue}j.removeAttribute(O.name)}}return Z.body.innerHTML}function K4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function t2(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=K4(Z);if(X===Z)break;Z=X}return Z}function p8(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,j=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,j=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let V=J.length;J.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Y=!1,j=[];continue}if(Y)j.push(G);else X.push(G)}if(Y)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:J}}function i8(_){if(!_)return _;return t2(_,5)}function l8(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function n8(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function o8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",j=i8(Y);return`<div class="mermaid-container" data-mermaid="${l8(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function G4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function V4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,V=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!V||!g8.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function N4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function O4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function d8(_){if(!window.katex)return _;let $=(j)=>K4(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(j)=>{let G=[],V=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let W=G.length;return G.push(O),`@@CODE_BLOCK_${W}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let W=G.length;return G.push(O),`@@CODE_INLINE_${W}@@`}),{html:V,blocks:G}},J=(j,G)=>{if(!G.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,O)=>{let W=Number(O);return G[W]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,G,V)=>{try{let O=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${W4(O.message)}">${j}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,G,V)=>{if(/\s$/.test(V))return j;try{let O=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${W4(O.message)}">$${V}$</span>`}}),J(Y,X.blocks)}function r8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let j=Y.nodeValue;if(!j)continue;if(a2.lastIndex=0,!a2.test(j))continue;a2.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=j.split(a2);if(V.length<=1)continue;let O=$.createDocumentFragment();V.forEach((W,H)=>{if(H%2===1){let E=$.createElement("a");E.setAttribute("href","#"),E.className="hashtag",E.setAttribute("data-hashtag",W),E.textContent=`#${W}`,O.appendChild(E)}else O.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function s8(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function L2(_,$,Z={}){if(!_)return"";let J=s8(_),{text:X,blocks:Y}=p8(J),j=t2(X,2),V=G4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=V4(V),W=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return W=N4(W),W=O4(W),W=d8(W),W=r8(W),W=o8(W,Y),W=j4(W,Z),W}function B4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=t2($,2),X=G4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=V4(X),j=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return j=N4(j),j=O4(j),j=j4(j),j}async function e2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=X4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Y)try{let G=j.dataset.mermaid,V=n8(G||""),O=t2(V,2),W=await $(O,{...X,transparent:!0});j.innerHTML=W,j.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,j.innerHTML="",j.appendChild(V),j.removeAttribute("data-mermaid")}}var Q4="PiClaw";function M1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,j=X[Y],G=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",W=(V?V:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:j,image:W}}function q4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function z4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function U4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,j=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",V=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(V&&(G||j&&j!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function H4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:j,steerQueued:G,onPanelToggle:V}){let H=(Y_)=>{if(!Y_)return{text:"",totalLines:0,fullText:""};if(typeof Y_==="string"){let A_=Y_,H_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:H_,fullText:A_}}let O_=Y_.text||"",Q_=Y_.fullText||Y_.full_text||O_,U_=Number.isFinite(Y_.totalLines)?Y_.totalLines:Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:U_,fullText:Q_}},E=160,D=(Y_)=>{if(!Y_)return 1;return Math.max(1,Math.ceil(Y_.length/160))},C=(Y_,O_,Q_)=>{let U_=(Y_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!U_)return{text:"",omitted:0,totalLines:Number.isFinite(Q_)?Q_:0,visibleLines:0};let A_=U_.split(`
`),H_=A_.length>O_?A_.slice(0,O_).join(`
`):U_,z_=Number.isFinite(Q_)?Q_:A_.reduce((w_,b_)=>w_+D(b_),0),k_=H_?H_.split(`
`).reduce((w_,b_)=>w_+D(b_),0):0,R_=Math.max(z_-k_,0);return{text:H_,omitted:R_,totalLines:z_,visibleLines:k_}},A=H(Z),T=H(J),U=H($),w=Boolean(A.text)||A.totalLines>0,g=Boolean(T.text)||T.totalLines>0,y=Boolean(U.fullText?.trim()||U.text?.trim());if(!_&&!y&&!w&&!g&&!X&&!Y)return null;let[v,p]=R(new Set),o=(Y_)=>p((O_)=>{let Q_=new Set(O_),U_=!Q_.has(Y_);if(U_)Q_.add(Y_);else Q_.delete(Y_);if(typeof V==="function")V(Y_,U_);return Q_});m(()=>{p(new Set)},[j]);let J_=_?.turn_id||j,G_=U4(J_),__=G?"turn-dot turn-dot-queued":"turn-dot",V_=(Y_)=>Y_,P_=Boolean(_?.last_activity||_?.lastActivity),s=Y?.kind||"info",t=s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":G_,d="",i=_?.title,$_=_?.status;if(_?.type==="plan")d=i?`Planning: ${i}`:"Planning...";else if(_?.type==="tool_call")d=i?`Running: ${i}`:"Running tool...";else if(_?.type==="tool_status")d=i?`${i}: ${$_||"Working..."}`:$_||"Working...";else if(_?.type==="error")d=i||"Agent error";else d=i||$_||"Working...";if(P_)d="Last activity just now";let j_=({panelTitle:Y_,text:O_,fullText:Q_,totalLines:U_,maxLines:A_,titleClass:H_,panelKey:z_})=>{let k_=v.has(z_),R_=Q_||O_||"",w_=typeof A_==="number",b_=k_&&w_,C_=w_?C(R_,A_,U_):{text:R_||"",omitted:0,totalLines:Number.isFinite(U_)?U_:0};if(!R_&&!(Number.isFinite(C_.totalLines)&&C_.totalLines>0))return null;let u_=`agent-thinking-body${w_?" agent-thinking-body-collapsible":""}`,i_=w_?`--agent-thinking-collapsed-lines: ${A_};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${k_?"true":"false"}
                data-collapsible=${w_?"true":"false"}
                style=${G_?`--turn-color: ${G_};`:""}
            >
                <div class="agent-thinking-title ${H_||""}">
                    ${G_&&z`<span class=${__} aria-hidden="true"></span>`}
                    ${Y_}
                    ${b_&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${Y_} panel`}
                            onClick=${()=>o(z_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${u_}
                    style=${i_}
                    dangerouslySetInnerHTML=${{__html:B4(R_)}}
                />
                ${!k_&&C_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>o(z_)}>
                        ▸ ${C_.omitted} more lines
                    </button>
                `}
                ${k_&&C_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>o(z_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},Z_=X?.tool_call?.title,T_=Z_?`Awaiting approval: ${Z_}`:"Awaiting approval";return z`
        <div class="agent-status-panel">
            ${Y&&z`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${t?`--turn-color: ${t};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${t&&z`<span class=${__} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&z`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${G_?`--turn-color: ${G_};`:""}>
                    <span class=${__} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${T_}</span>
                </div>
            `}
            ${w&&j_({panelTitle:V_("Planning"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,panelKey:"plan"})}
            ${g&&j_({panelTitle:V_("Thoughts"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${y&&j_({panelTitle:V_("Draft"),text:U.text,fullText:U.fullText,totalLines:U.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&z`
                <div class=${`agent-status${P_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${G_?`--turn-color: ${G_};`:""}>
                    ${G_&&z`<span class=${__} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!P_&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d}</span>
                </div>
            `}
        </div>
    `}function L4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",j=J?.kind||"other",G=J?.rawInput||{},V=G.command||G.commands&&G.commands[0]||null,O=G.diff||null,W=G.fileName||G.path||null,H=J?.description||G.description||G.explanation||null,D=(Array.isArray(J?.locations)?J.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),C=Array.from(new Set([W,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let A=async(w)=>{try{await E1(Z,w),$()}catch(g){console.error("Failed to respond to agent request:",g)}},T=async()=>{try{await g3(Y,`Auto-approved: ${Y}`),await E1(Z,"approved"),$()}catch(w){console.error("Failed to add to whitelist:",w)}},U=X&&X.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(H||V||O||C.length>0)&&z`
                    <div class="agent-request-body">
                        ${H&&z`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${C.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${C.map((w,g)=>z`<li key=${g}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&z`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${O&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?X.map((w)=>z`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>A(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>A("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>A("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${T}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function F4({status:_}){if(_==="connected")return null;return z`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function E4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let V=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${O}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${G}`}function A2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function o0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function _1(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function D4({src:_,onClose:$}){return m(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function a8({mediaId:_}){let[$,Z]=R(null);if(m(()=>{i2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size,Y=X?o0(X):"";return z`
        <a href=${Q2(_)} download=${J} class="file-attachment" onClick=${(j)=>j.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${Y&&z`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function $1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?_1(J):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&z`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&z`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function t8({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?o0(_.size):"",X=_.mime_type||"",Y=_6(X),j=H2(_.uri);return z`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&z`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&z`<span>${X}</span>`}
                    ${J&&z`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function e8({block:_}){let[$,Z]=R(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),j=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&z`
                ${X&&z`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&z`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(H)=>H.charCodeAt(0))],{type:j||"application/octet-stream"}),O=URL.createObjectURL(V),W=document.createElement("a");W.href=O,W.download=J.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function _6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function $6({preview:_}){let $=H2(_.url),Z=H2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${Z?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${J}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function Z6(_,$){return typeof _==="string"?_:""}var J6=1800,Y6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,X6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,W6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function j6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function K6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,j)=>{let G=j||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=X6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=W6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Y6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let j=document.createElement("div");j.className="post-code-block",Y.parentNode?.insertBefore(j,Y),j.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",X(G,"idle"),j.appendChild(G);let V=async(O)=>{O.preventDefault(),O.stopPropagation();let H=Y.querySelector("code")?.textContent||"",E=await j6(H);X(G,E?"success":"error");let D=Z.get(G);if(D)clearTimeout(D);let C=setTimeout(()=>{X(G,"idle"),Z.delete(G)},J6);Z.set(G,C)};G.addEventListener("click",V),J.push(()=>{G.removeEventListener("click",V);let O=Z.get(G);if(O)clearTimeout(O);if(j.parentNode)j.parentNode.insertBefore(Y,j),j.remove()})}),()=>{J.forEach((Y)=>Y())}}function G6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function V6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let H=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H)X.push(H[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=Z.slice(0,J),G=Z.slice(Y),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function N6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let W=O.replace(/^\s*-\s+/,"").trim(),H=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(H){let E=H[1],D=(H[2]||"").trim()||E;X.push({id:E,label:D,raw:W})}else X.push({id:null,label:W,raw:W})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=Z.slice(0,J),G=Z.slice(Y),V=[...j,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function O6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function B6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(O6).sort((W,H)=>H.length-W.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),G=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),V=[],O;while(O=G.nextNode())V.push(O);for(let W of V){let H=W.nodeValue;if(!H||!X.test(H)){X.lastIndex=0;continue}X.lastIndex=0;let E=W.parentElement;if(E&&E.closest("code, pre, script, style"))continue;let D=H.split(X).filter((A)=>A!=="");if(D.length===0)continue;let C=j.createDocumentFragment();for(let A of D)if(Y.test(A)){let T=j.createElement("mark");T.className="search-highlight-term",T.textContent=A,C.appendChild(T)}else C.appendChild(j.createTextNode(A));W.parentNode.replaceChild(C,W)}return j.body.innerHTML}function k4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:j,userName:G,userAvatarUrl:V,userAvatarBackground:O,onDelete:W,isThreadReply:H,isThreadPrev:E,isThreadNext:D,isRemoving:C,highlightQuery:A,onFileRef:T}){let[U,w]=R(null),g=L(null),y=_.data,v=y.type==="agent_response",p=G||"You",o=v?Y||Q4:p,J_=v?M1(Y,j):M1(p,V),G_=typeof O==="string"?O.trim().toLowerCase():"",__=!v&&J_.image&&(G_==="clear"||G_==="transparent"),V_=v&&Boolean(J_.image),P_=`background-color: ${__||V_?"transparent":J_.color}`,s=y.content_meta,t=Boolean(s?.truncated),d=Boolean(s?.preview),i=t&&!d,$_=t?{originalLength:Number.isFinite(s?.original_length)?s.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(s?.max_length)?s.max_length:0}:null,j_=Z6(y.content,y.link_previews),{content:Z_,fileRefs:T_}=G6(j_),{content:Y_,messageRefs:O_}=V6(Z_),{content:Q_,attachments:U_}=N6(Y_);j_=Q_;let A_=Boolean(j_)&&!i,H_=typeof A==="string"?A.trim():"",z_=D0(()=>{if(!j_)return"";let x=L2(j_,Z);return H_?B6(x,H_):x},[j_,H_]),k_=(x,e)=>{x.stopPropagation(),w(Q2(e))},R_=(x)=>{x.stopPropagation(),W?.(_)},w_=(x,e)=>{let F_=new Set;if(!x||e.length===0)return{content:x,usedIds:F_};return{content:x.replace(/attachment:([^\s)"']+)/g,(c_,M0,S0,o_)=>{let K0=M0.replace(/^\/+/,""),z0=e.find((f_)=>f_.name&&f_.name.toLowerCase()===K0.toLowerCase()&&!F_.has(f_.id))||e.find((f_)=>!F_.has(f_.id));if(!z0)return c_;if(F_.add(z0.id),o_.slice(Math.max(0,S0-2),S0)==="](")return`/media/${z0.id}`;return z0.name||"attachment"}),usedIds:F_}},b_=[],C_=[],u_=[],i_=[],M_=[],N_=[],Q0=y.content_blocks||[],a_=y.media_ids||[],b0=0;if(Q0.length>0)Q0.forEach((x)=>{if(x?.type==="text"&&x.annotations)N_.push(x.annotations);if(x?.type==="resource_link")i_.push(x);else if(x?.type==="resource")M_.push(x);else if(x?.type==="file"){let e=a_[b0++];if(e)C_.push(e),u_.push({id:e,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let e=a_[b0++];if(e){let F_=typeof x?.mime_type==="string"?x.mime_type:void 0;b_.push({id:e,annotations:x?.annotations,mimeType:F_}),u_.push({id:e,name:x?.name||x?.filename||x?.title})}}});else if(a_.length>0)a_.forEach((x)=>{b_.push({id:x,annotations:null}),u_.push({id:x,name:null})});if(U_.length>0)U_.forEach((x)=>{if(!x?.id)return;let e=u_.find((F_)=>String(F_.id)===String(x.id));if(e&&!e.name)e.name=x.label});let{content:j0,usedIds:k0}=w_(j_,u_);j_=j0;let L_=b_.filter(({id:x})=>!k0.has(x)),q0=C_.filter((x)=>!k0.has(x)),C0=U_.length>0?U_.map((x,e)=>({id:x.id||`attachment-${e+1}`,label:x.label||`attachment-${e+1}`})):u_.map((x,e)=>({id:x.id,label:x.name||`attachment-${e+1}`}));return m(()=>{if(!g.current)return;return e2(g.current),K6(g.current)},[z_]),z`
        <div id=${`post-${_.id}`} class="post ${v?"agent-post":""} ${H?"thread-reply":""} ${E?"thread-prev":""} ${D?"thread-next":""} ${C?"removing":""}" onClick=${$}>
            <div class="post-avatar ${v?"agent-avatar":""} ${J_.image?"has-image":""}" style=${P_}>
                ${J_.image?z`<img src=${J_.image} alt=${o} />`:J_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${R_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${o}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),J)J(_.id)}}>${E4(_.timestamp)}</a>
                </div>
                ${i&&$_&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${A2($_.originalLength)} chars
                            ${$_.maxLength?z` • Display limit: ${A2($_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&$_&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${A2($_.maxLength)} of ${A2($_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(T_.length>0||O_.length>0||C0.length>0)&&z`
                    <div class="post-file-refs">
                        ${O_.map((x)=>{let e=(F_)=>{if(F_.preventDefault(),F_.stopPropagation(),X)X(x);else{let Z0=document.getElementById("post-"+x);if(Z0)Z0.scrollIntoView({behavior:"smooth",block:"center"}),Z0.classList.add("post-highlight"),setTimeout(()=>Z0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${e}>
                                    <${e0}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${T_.map((x)=>{let e=x.split("/").pop()||x;return z`
                                <${e0}
                                    prefix="post"
                                    label=${e}
                                    title=${x}
                                    onClick=${()=>T?.(x)}
                                />
                            `})}
                        ${C0.map((x)=>z`
                            <${e0}
                                prefix="post"
                                label=${x.label}
                                title=${x.label}
                            />
                        `)}
                    </div>
                `}
                ${A_&&z`
                    <div 
                        ref=${g}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:z_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let e=x.target.dataset.hashtag;if(e)Z?.(e)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),w(x.target.src)}}
                    />
                `}
                ${N_.length>0&&z`
                    ${N_.map((x,e)=>z`
                        <${$1} key=${e} annotations=${x} />
                    `)}
                `}
                ${L_.length>0&&z`
                    <div class="media-preview">
                        ${L_.map(({id:x,mimeType:e})=>{let Z0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Q2(x):m3(x);return z`
                                <img 
                                    key=${x} 
                                    src=${Z0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(c_)=>k_(c_,x)}
                                />
                            `})}
                    </div>
                `}
                ${L_.length>0&&z`
                    ${L_.map(({annotations:x},e)=>z`
                        ${x&&z`<${$1} key=${e} annotations=${x} />`}
                    `)}
                `}
                ${q0.length>0&&z`
                    <div class="file-attachments">
                        ${q0.map((x)=>z`
                            <${a8} key=${x} mediaId=${x} />
                        `)}
                    </div>
                `}
                ${i_.length>0&&z`
                    <div class="resource-links">
                        ${i_.map((x,e)=>z`
                            <div key=${e}>
                                <${t8} block=${x} />
                                <${$1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M_.length>0&&z`
                    <div class="resource-embeds">
                        ${M_.map((x,e)=>z`
                            <div key=${e}>
                                <${e8} block=${x} />
                                <${$1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${y.link_previews.map((x,e)=>z`
                            <${$6} key=${e} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${U&&z`<${D4} src=${U} onClose=${()=>w(null)} />`}
    `}function C4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:j,onFileRef:G,emptyMessage:V,timelineRef:O,agents:W,user:H,onDeletePost:E,reverse:D=!0,removingPostIds:C,searchQuery:A}){let[T,U]=R(!1),w=L(null),g=typeof IntersectionObserver<"u",y=S(async()=>{if(!Z||!$||T)return;U(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{U(!1)}},[$,T,Z]),v=S((s)=>{let{scrollTop:t,scrollHeight:d,clientHeight:i}=s.target,$_=D?d-i-t:t,j_=Math.max(300,i);if($_<j_)y()},[D,y]);m(()=>{if(!g)return;let s=w.current,t=O?.current;if(!s||!t)return;let d=300,i=new IntersectionObserver(($_)=>{for(let j_ of $_){if(!j_.isIntersecting)continue;y()}},{root:t,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return i.observe(s),()=>i.disconnect()},[g,$,Z,O,y]);let p=L(y);if(p.current=y,m(()=>{if(g)return;if(!O?.current)return;let{scrollTop:s,scrollHeight:t,clientHeight:d}=O.current,i=D?t-d-s:s,$_=Math.max(300,d);if(i<$_)p.current?.()},[g,_,$,D,O]),m(()=>{if(!O?.current)return;if(!$||T)return;let{scrollTop:s,scrollHeight:t,clientHeight:d}=O.current,i=D?t-d-s:s,$_=Math.max(300,d);if(t<=d+1||i<$_)p.current?.()},[_,$,T,D,O]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${V||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let o=_.slice().sort((s,t)=>s.id-t.id),J_=(s)=>{let t=s?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let d=Number(t);return Number.isFinite(d)?d:null},G_=new Map;for(let s=0;s<o.length;s+=1){let t=o[s],d=Number(t?.id),i=J_(t);if(i!==null){let $_=G_.get(i)||{anchorIndex:-1,replyIndexes:[]};$_.replyIndexes.push(s),G_.set(i,$_)}else if(Number.isFinite(d)){let $_=G_.get(d)||{anchorIndex:-1,replyIndexes:[]};$_.anchorIndex=s,G_.set(d,$_)}}let __=new Map;for(let[s,t]of G_.entries()){let d=new Set;if(t.anchorIndex>=0)d.add(t.anchorIndex);for(let i of t.replyIndexes)d.add(i);__.set(s,Array.from(d).sort((i,$_)=>i-$_))}let V_=o.map((s,t)=>{let d=J_(s);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=__.get(d);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.indexOf(t);if($_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:$_>0,hasThreadNext:$_<i.length-1}}),P_=z`<div class="timeline-sentinel" ref=${w}></div>`;return z`
        <div class="timeline ${D?"reverse":"normal"}" ref=${O} onScroll=${v}>
            <div class="timeline-content">
                ${D?P_:null}
                ${o.map((s,t)=>{let d=Boolean(s.data?.thread_id&&s.data.thread_id!==s.id),i=C?.has?.(s.id),$_=V_[t]||{};return z`
                    <${k4}
                        key=${s.id}
                        post=${s}
                        isThreadReply=${d}
                        isThreadPrev=${$_.hasThreadPrev}
                        isThreadNext=${$_.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${A}
                        agentName=${q4(s.data?.agent_id,W||{})}
                        agentAvatarUrl=${z4(s.data?.agent_id,W||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>J?.(s)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${j}
                        onFileRef=${G}
                        onDelete=${E}
                    />
                `})}
                ${D?null:P_}
            </div>
        </div>
    `}class y4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var p_=new y4;var Z1=null,S1=null;function A4(){if(S1)return Promise.resolve(S1);if(!Z1)Z1=import("/static/dist/editor.bundle.js").then((_)=>{return S1=_,_}).catch((_)=>{throw Z1=null,_});return Z1}class w4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await A4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var x1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new w4(_,$)}};function I1(){A4().catch(()=>{})}class P4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var T1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new P4(_,$)}};function b4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Q6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",j=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,W=[];for(let E of O.split("/")){if(!E||E===".")continue;if(E===".."){if(W.length>0)W.pop();continue}W.push(E)}let H=W.join("/");return`${k1(H)}${Y}${j}`}function w2(_){return _?.preview||null}function q6(_){let $=w2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';if($.kind==="image"){let Z=$.url||($.path?k1($.path):"");return`
            <div class="workspace-preview-image">
                <img src="${b4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown")return`<div class="workspace-preview-text">${L2($.text||"",null,{rewriteImageSrc:(J)=>Q6(J,$.path||_?.path)})}</div>`;return`<pre class="workspace-preview-text"><code>${b4($.text||"")}</code></pre>`}if($.kind==="binary")return'<div class="workspace-preview-text">Binary file — download to view.</div>';return'<div class="workspace-preview-text">No preview available.</div>'}class f1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=q6(this.context)}getContent(){let _=w2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=w2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var v1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=w2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new f1(_,$)}},R1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return w2(_)||_?.path?1:!1},mount(_,$){return new f1(_,$)}};class M4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var D_=new M4;var J1="workspaceExplorerScale",z6=["compact","default","comfortable"],U6=new Set(z6),H6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function S4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return U6.has(Z)?Z:$}function g1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function L6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function F6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function u1(_={}){let $=L6(_),Z=_.stored?S4(_.stored,$):$;return F6(Z,_)}function x4(_){return H6[S4(_)]}var E6=60000,v4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function R4(_,$,Z,J=0,X=[]){if(!Z&&v4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)R4(Y,$,Z,J+1,X);return X}function I4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&v4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let j of Y.children)X(j)};return X(_),J.join("|")}function p1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,j=J.map((G)=>{let V=p1(X.get(G.path),G);if(V!==X.get(G.path))Y=!0;return V});return Y?{...$,children:j}:_}function m1(_,$,Z){if(!_)return _;if(_.path===$)return p1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let j=m1(Y,$,Z);if(j!==Y)J=!0;return j});return J?{..._,children:X}:_}var g4=4,c1=14,D6=8,k6=16;function u4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=u4(J);return _.__bytes=Z,Z}function c4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=g4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let G of X){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:V});else Y.push({kind:"file",name:G.name,path:G.path,size:V})}Y.sort((G,V)=>V.size-G.size);let j=Y;if(Y.length>c1){let G=Y.slice(0,c1-1),V=Y.slice(c1-1),O=V.reduce((W,H)=>W+H.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${J.path}/[other]`,size:O}),j=G}return J.children=j.map((G)=>{if(G.kind==="dir")return c4(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function T4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function m4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function Y1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function i1(_,$,Z,J,X,Y){let j=Math.PI*2-0.0001,G=Y-X>j?X+j:Y,V=Y1(_,$,J,X),O=Y1(_,$,J,G),W=Y1(_,$,Z,G),H=Y1(_,$,Z,X),E=G-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${J} ${J} 0 ${E} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${E} 0 ${H.x.toFixed(3)} ${H.y.toFixed(3)}`,"Z"].join(" ")}var h4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function p4(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),j=(G,V,O,W)=>{let H=Array.isArray(G?.children)?G.children:[];if(!H.length)return;let E=Math.max(0,Number(G.size)||0);if(E<=0)return;let D=O-V,C=V;H.forEach((A,T)=>{let U=Math.max(0,Number(A.size)||0);if(U<=0)return;let w=U/E,g=C,y=T===H.length-1?O:C+D*w;if(C=y,y-g<0.003)return;let v=h4[W];if(v){let p=m4(g,W,Z);if(J.push({key:A.path,path:A.path,label:A.name,size:U,color:p,depth:W,startAngle:g,endAngle:y,innerRadius:v[0],outerRadius:v[1],d:i1(120,120,v[0],v[1],g,y)}),W===1)X.push({key:A.path,name:A.name,size:U,pct:Y>0?U/Y*100:0,color:p})}if(W<g4)j(A,g,y,W+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function h1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=h1(J,$);if(X)return X}return null}function i4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=h4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,j=Math.PI*3/2,G=m4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:i1(120,120,X[0],X[1],Y,j)}],legend:[{key:O,name:_,size:Z,pct:100,color:G}]}}function f4(_,$=!1,Z=!1){if(!_)return null;let J=u4(_),X=c4(_,0),Y=X.size||J,{segments:j,legend:G}=p4(X,Y,Z);if(!j.length&&Y>0){let V=i4("[files]",X.path,Y,Z);j=V.segments,G=V.legend}return{root:X,totalSize:Y,segments:j,legend:G,truncated:$,isDarkTheme:Z}}function C6({payload:_}){if(!_)return null;let[$,Z]=R(null),[J,X]=R(_?.root?.path||"."),[Y,j]=R(()=>[_?.root?.path||"."]),[G,V]=R(!1);m(()=>{let __=_?.root?.path||".";X(__),j([__]),Z(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!J)return;V(!0);let __=setTimeout(()=>V(!1),180);return()=>clearTimeout(__)},[J]);let O=D0(()=>{return h1(_.root,J)||_.root},[_?.root,J]),W=O?.size||_.totalSize||0,{segments:H,legend:E}=D0(()=>{let __=p4(O,W,_.isDarkTheme);if(__.segments.length>0)return __;if(W<=0)return __;let V_=O?.children?.length?"Total":"[files]";return i4(V_,O?.path||_?.root?.path||".",W,_.isDarkTheme)},[O,W,_.isDarkTheme,_?.root?.path]),[D,C]=R(H),A=L(new Map),T=L(0);m(()=>{let __=A.current,V_=new Map(H.map((d)=>[d.key,d])),P_=performance.now(),s=220,t=(d)=>{let i=Math.min(1,(d-P_)/220),$_=i*(2-i),j_=H.map((Z_)=>{let Y_=__.get(Z_.key)||{startAngle:Z_.startAngle,endAngle:Z_.startAngle,innerRadius:Z_.innerRadius,outerRadius:Z_.innerRadius},O_=(z_,k_)=>z_+(k_-z_)*$_,Q_=O_(Y_.startAngle,Z_.startAngle),U_=O_(Y_.endAngle,Z_.endAngle),A_=O_(Y_.innerRadius,Z_.innerRadius),H_=O_(Y_.outerRadius,Z_.outerRadius);return{...Z_,d:i1(120,120,A_,H_,Q_,U_)}});if(C(j_),i<1)T.current=requestAnimationFrame(t)};if(T.current)cancelAnimationFrame(T.current);return T.current=requestAnimationFrame(t),A.current=V_,()=>{if(T.current)cancelAnimationFrame(T.current)}},[H]);let U=D.length?D:H,w=W>0?o0(W):"0 B",g=O?.name||"",v=(g&&g!=="."?g:"Total")||"Total",p=w,o=Y.length>1,J_=(__)=>{if(!__?.path)return;let V_=h1(_.root,__.path);if(!V_||!Array.isArray(V_.children)||V_.children.length===0)return;j((P_)=>[...P_,V_.path]),X(V_.path),Z(null)},G_=()=>{if(!o)return;j((__)=>{let V_=__.slice(0,-1);return X(V_[V_.length-1]||_?.root?.path||"."),V_}),Z(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${W}>
                ${U.map((__)=>z`
                    <path
                        key=${__.key}
                        d=${__.d}
                        fill=${__.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===__.key?" is-hovered":""}`}
                        onMouseEnter=${()=>Z(__)}
                        onMouseLeave=${()=>Z(null)}
                        onTouchStart=${()=>Z(__)}
                        onTouchEnd=${()=>Z(null)}
                        onClick=${()=>J_(__)}
                    >
                        <title>${__.label} — ${o0(__.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${G_}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${v}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${E.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${E.slice(0,8).map((__)=>z`
                        <div key=${__.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${__.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${__.name}>${__.name}</span>
                            <span class="workspace-folder-starburst-size">${o0(__.size)}</span>
                            <span class="workspace-folder-starburst-pct">${__.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function y6({mediaId:_}){let[$,Z]=R(null);if(m(()=>{if(!_)return;i2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?o0($.metadata.size):"";return z`
        <a href=${Q2(_)} download=${J} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${X&&z`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function l4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=R(null),[j,G]=R(new Set(["."])),[V,O]=R(null),[W,H]=R(null),[E,D]=R(""),[C,A]=R(null),[T,U]=R(null),[w,g]=R(!0),[y,v]=R(!1),[p,o]=R(null),[J_,G_]=R(()=>q2("workspaceShowHidden",!1)),[__,V_]=R(!1),[P_,s]=R(null),[t,d]=R(null),[i,$_]=R(null),[j_,Z_]=R(!1),[T_,Y_]=R(null),[O_,Q_]=R(()=>T4()),[U_,A_]=R(()=>u1({stored:R0(J1),...g1()})),H_=L(j),z_=L(""),k_=L(null),R_=L(0),w_=L(new Set),b_=L(null),C_=L(new Map),u_=L(_),i_=L(J),M_=L(null),N_=L(null),Q0=L(null),a_=L(null),b0=L(null),j0=L(null),k0=L("."),L_=L(null),q0=L({path:null,dragging:!1,startX:0,startY:0}),C0=L({path:null,dragging:!1,startX:0,startY:0}),x=L({path:null,timer:0}),e=L(!1),F_=L(0),Z0=L(new Map),c_=L(null),M0=L(null),S0=L(null),o_=L(null),K0=L(J_),g_=L($),z0=L(Z??$),d_=L(0),f_=L(i),_2=L(__),$2=L(P_),g0=L(null),X2=L({x:0,y:0}),y0=L(0),U0=L(null),O0=L(V),A0=L(W),t_=L(null),r_=L(null),Z2=L(C);u_.current=_,i_.current=J,m(()=>{H_.current=j},[j]),m(()=>{K0.current=J_},[J_]),m(()=>{g_.current=$},[$]),m(()=>{z0.current=Z??$},[Z,$]),m(()=>{f_.current=i},[i]),m(()=>{if(typeof window>"u")return;let K=()=>{A_(u1({stored:R0(J1),...g1()}))};K();let q=()=>K(),F=()=>K(),k=(c)=>{if(!c||c.key===null||c.key===J1)K()};window.addEventListener("resize",q),window.addEventListener("focus",F),window.addEventListener("storage",k);let f=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),n=(c,W_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",W_);else if(c.addListener)c.addListener(W_)},a=(c,W_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",W_);else if(c.removeListener)c.removeListener(W_)};return n(f,q),n(l,q),()=>{window.removeEventListener("resize",q),window.removeEventListener("focus",F),window.removeEventListener("storage",k),a(f,q),a(l,q)}},[]),m(()=>{let K=(q)=>{let F=q?.detail?.path;if(!F)return;let k=F.split("/"),f=[];for(let l=1;l<k.length;l++)f.push(k.slice(0,l).join("/"));if(f.length)G((l)=>{let n=new Set(l);n.add(".");for(let a of f)n.add(a);return n});O(F),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(F)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",K),()=>window.removeEventListener("workspace-reveal-path",K)},[]),m(()=>{_2.current=__},[__]),m(()=>{$2.current=P_},[P_]),m(()=>{O0.current=V},[V]),m(()=>{A0.current=W},[W]),m(()=>{Z2.current=C},[C]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let K=()=>Q_(T4());K();let q=window.matchMedia?.("(prefers-color-scheme: dark)"),F=()=>K();if(q?.addEventListener)q.addEventListener("change",F);else if(q?.addListener)q.addListener(F);let k=typeof MutationObserver<"u"?new MutationObserver(()=>K()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(q?.removeEventListener)q.removeEventListener("change",F);else if(q?.removeListener)q.removeListener(F);k?.disconnect()}},[]),m(()=>{if(!W)return;let K=b0.current;if(!K)return;let q=requestAnimationFrame(()=>{try{K.focus(),K.select()}catch{}});return()=>cancelAnimationFrame(q)},[W]);let W2=async(K)=>{v(!0),A(null),U(null);try{let q=await h3(K,20000);A(q)}catch(q){A({error:q.message||"Failed to load preview"})}finally{v(!1)}};M_.current=W2;let u0=async()=>{if(!g_.current)return;try{let K=await l2("",1,K0.current),q=I4(K.root,H_.current,K0.current);if(q===z_.current){g(!1);return}if(z_.current=q,k_.current=K.root,!R_.current)R_.current=requestAnimationFrame(()=>{R_.current=0,Y((F)=>p1(F,k_.current)),g(!1)})}catch(K){o(K.message||"Failed to load workspace"),g(!1)}},F2=async(K)=>{if(!K)return;if(w_.current.has(K))return;w_.current.add(K);try{let q=await l2(K,1,K0.current);Y((F)=>m1(F,K,q.root))}catch(q){o(q.message||"Failed to load workspace")}finally{w_.current.delete(K)}};N_.current=F2;let m_=S(()=>{let K=V;if(!K)return".";let q=C_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let F=K.split("/");return F.pop(),F.join("/")||"."},[V]),H0=S((K)=>{let q=K?.closest?.(".workspace-row");if(!q)return null;let F=q.dataset.path,k=q.dataset.type;if(!F)return null;if(k==="dir")return F;if(F.includes("/")){let f=F.split("/");return f.pop(),f.join("/")||"."}return"."},[]),L0=S((K)=>{return H0(K?.target||null)},[H0]),v_=S((K)=>{f_.current=K,$_(K)},[]),S_=S(()=>{let K=x.current;if(K?.timer)clearTimeout(K.timer);x.current={path:null,timer:0}},[]),s_=S((K)=>{if(!K||K==="."){S_();return}let q=C_.current?.get(K);if(!q||q.type!=="dir"){S_();return}if(H_.current?.has(K)){S_();return}if(x.current?.path===K)return;S_();let F=setTimeout(()=>{x.current={path:null,timer:0},N_.current?.(K),G((k)=>{let f=new Set(k);return f.add(K),f})},600);x.current={path:K,timer:F}},[S_]),J0=S((K,q)=>{if(X2.current={x:K,y:q},y0.current)return;y0.current=requestAnimationFrame(()=>{y0.current=0;let F=g0.current;if(!F)return;let k=X2.current;F.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),x0=S((K)=>{if(!K)return;let F=(C_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!F)return;d({path:K,label:F})},[]),w0=S(()=>{if(d(null),y0.current)cancelAnimationFrame(y0.current),y0.current=0;if(g0.current)g0.current.style.transform="translate(-9999px, -9999px)"},[]),c0=S((K)=>{if(!K)return".";let q=C_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let F=K.split("/");return F.pop(),F.join("/")||"."},[]),G0=S(()=>{H(null),D("")},[]),I0=S((K)=>{if(!K)return;let F=(C_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!F||K===".")return;H(K),D(F)},[]),d0=S(async()=>{let K=A0.current;if(!K)return;let q=(E||"").trim();if(!q){G0();return}let F=C_.current?.get(K),k=(F?.name||K.split("/").pop()||K).trim();if(q===k){G0();return}try{let l=(await l3(K,q))?.path||K,n=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(G0(),o(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:K,newPath:l,type:F?.type||"file"}})),F?.type==="dir")G((a)=>{let c=new Set;for(let W_ of a)if(W_===K)c.add(l);else if(W_.startsWith(`${K}/`))c.add(`${l}${W_.slice(K.length)}`);else c.add(W_);return c});if(O(l),F?.type==="dir")A(null),v(!1),U(null);else M_.current?.(l);N_.current?.(n)}catch(f){o(f?.message||"Failed to rename file")}},[G0,E]),r0=S(async(K)=>{let k=K||".";for(let f=0;f<50;f+=1){let n=`untitled${f===0?"":`-${f}`}.md`;try{let c=(await i3(k,n,""))?.path||(k==="."?n:`${k}/${n}`);if(k&&k!==".")G((W_)=>new Set([...W_,k]));O(c),o(null),N_.current?.(k),M_.current?.(c);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;o(a?.message||"Failed to create file");return}}o("Failed to create file (untitled name already in use).")},[]),m0=S((K)=>{if(K?.stopPropagation?.(),j_)return;let q=c0(O0.current);r0(q)},[j_,c0,r0]);m(()=>{if(typeof window>"u")return;let K=(q)=>{let F=q?.detail?.updates||[];if(!Array.isArray(F)||F.length===0)return;Y((a)=>{let c=a;for(let W_ of F){if(!W_?.root)continue;if(!c||W_.path==="."||!W_.path)c=W_.root;else c=m1(c,W_.path,W_.root)}if(c)z_.current=I4(c,H_.current,K0.current);return g(!1),c});let k=O0.current;if(Boolean(k)&&F.some((a)=>{let c=a?.path||"";if(!c||c===".")return!0;return k===c||k.startsWith(`${c}/`)||c.startsWith(`${k}/`)}))Z0.current.clear();if(!k||!Z2.current)return;let l=C_.current?.get(k);if(l&&l.type==="dir")return;if(F.some((a)=>{let c=a?.path||"";if(!c||c===".")return!0;return k===c||k.startsWith(`${c}/`)}))M_.current?.(k)};return window.addEventListener("workspace-update",K),()=>window.removeEventListener("workspace-update",K)},[]),b_.current=u0;let h0=L(()=>{if(typeof window>"u")return;let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),q=z0.current??g_.current,F=document.visibilityState!=="hidden"&&(q||K.matches&&g_.current);n2(F,K0.current).catch(()=>{})}).current,Q=L(0),I=L(()=>{if(Q.current)clearTimeout(Q.current);Q.current=setTimeout(()=>{Q.current=0,h0()},250)}).current;m(()=>{if(g_.current)b_.current?.();I()},[$,Z]),m(()=>{b_.current(),h0();let K=setInterval(()=>b_.current(),E6),q=z2("previewHeight",null),F=Number.isFinite(q)?Math.min(Math.max(q,80),600):280;if(F_.current=F,Q0.current)Q0.current.style.setProperty("--preview-height",`${F}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),f=()=>I();if(k.addEventListener)k.addEventListener("change",f);else if(k.addListener)k.addListener(f);return document.addEventListener("visibilitychange",f),()=>{if(clearInterval(K),R_.current)cancelAnimationFrame(R_.current),R_.current=0;if(k.removeEventListener)k.removeEventListener("change",f);else if(k.removeListener)k.removeListener(f);if(document.removeEventListener("visibilitychange",f),Q.current)clearTimeout(Q.current),Q.current=0;if(L_.current)clearTimeout(L_.current),L_.current=null;n2(!1,K0.current).catch(()=>{})}},[]);let r=D0(()=>R4(X,j,J_),[X,j,J_]),B_=D0(()=>new Map(r.map((K)=>[K.node.path,K.node])),[r]),y_=D0(()=>x4(U_),[U_]);C_.current=B_;let q_=(V?C_.current.get(V):null)?.type==="dir";m(()=>{if(!V||!q_){Y_(null),c_.current=null,M0.current=null;return}let K=V,q=`${J_?"hidden":"visible"}:${V}`,F=Z0.current,k=F.get(q);if(k?.root){F.delete(q),F.set(q,k);let n=f4(k.root,Boolean(k.truncated),O_);if(n)c_.current=n,M0.current=V,Y_({loading:!1,error:null,payload:n});return}let f=c_.current,l=M0.current;Y_({loading:!0,error:null,payload:l===V?f:null}),l2(V,D6,J_).then((n)=>{if(O0.current!==K)return;let a={root:n?.root,truncated:Boolean(n?.truncated)};F.delete(q),F.set(q,a);while(F.size>k6){let W_=F.keys().next().value;if(!W_)break;F.delete(W_)}let c=f4(a.root,a.truncated,O_);c_.current=c,M0.current=V,Y_({loading:!1,error:null,payload:c})}).catch((n)=>{if(O0.current!==K)return;Y_({loading:!1,error:n?.message||"Failed to load folder size chart",payload:l===V?f:null})})},[V,q_,J_,O_]);let V0=Boolean(C&&C.kind==="text"&&!q_&&(!C.size||C.size<=262144)),p0=V0?"Open in editor":C?.size>262144?"File too large to edit":"File is not editable";m(()=>{let K=S0.current;if(o_.current)o_.current.dispose(),o_.current=null;if(!K)return;if(K.innerHTML="",!V||q_||!C||C.error)return;let q={path:V,content:typeof C.text==="string"?C.text:void 0,mtime:C.mtime,size:C.size,preview:C,mode:"view"},F=p_.resolve(q)||p_.get("workspace-preview-default");if(!F)return;let k=F.mount(K,q);return o_.current=k,()=>{if(o_.current===k)k.dispose(),o_.current=null;K.innerHTML=""}},[V,q_,C]);let F0=(K)=>{let q=K?.target;if(q instanceof Element)return q;return q?.parentElement||null},J2=(K)=>{return Boolean(K?.closest?.(".workspace-node-icon, .workspace-label-text"))},j2=L((K)=>{if(r_.current)clearTimeout(r_.current),r_.current=null;let F=F0(K)?.closest?.("[data-path]");if(!F)return;let k=F.dataset.path;if(F.dataset.type==="dir"||!k)return;if(A0.current===k)G0();i_.current?.(k)}).current,Y0=L((K)=>{if(e.current){e.current=!1;return}let q=F0(K),F=q?.closest?.("[data-path]");if(a_.current?.focus?.(),!F)return;let k=F.dataset.path,f=F.dataset.type,l=Boolean(q?.closest?.(".workspace-caret")),n=Boolean(q?.closest?.("button"))||Boolean(q?.closest?.("a"))||Boolean(q?.closest?.("input")),a=O0.current===k,c=A0.current;if(c){if(c===k)return;G0()}let W_=f==="file"&&t_.current===k&&!l&&!n;if(a&&!l&&!n&&k!=="."&&!W_){if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=null,I0(k)},350);return}if(f==="dir"){if(t_.current=null,O(k),A(null),U(null),v(!1),!H_.current.has(k))N_.current?.(k);if(a&&!l)return;G((n0)=>{let f0=new Set(n0);if(f0.has(k))f0.delete(k);else f0.add(k);return f0})}else{t_.current=null,O(k);let W0=C_.current.get(k);if(W0)u_.current?.(W0.path,W0);M_.current?.(k)}}).current,X0=L(()=>{z_.current="",b_.current(),Array.from(H_.current||[]).filter((q)=>q&&q!==".").forEach((q)=>N_.current?.(q))}).current,h_=L(()=>{t_.current=null,O(null),A(null),U(null),v(!1)}).current,B0=L(()=>{G_((K)=>{let q=!K;if(typeof window<"u")I_("workspaceShowHidden",String(q));return K0.current=q,n2(!0,q).catch(()=>{}),z_.current="",b_.current?.(),Array.from(H_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>N_.current?.(k)),q})}).current,e_=L((K)=>{if(F0(K)?.closest?.("[data-path]"))return;h_()}).current,l_=S(async(K)=>{if(!K)return;let q=K.split("/").pop()||K;if(!window.confirm(`Delete "${q}"? This cannot be undone.`))return;try{await o3(K);let k=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(O0.current===K)h_();N_.current?.(k),o(null)}catch(k){A((f)=>({...f||{},error:k.message||"Failed to delete file"}))}},[h_]),s0=S((K)=>{let q=a_.current;if(!q||!K||typeof CSS>"u"||typeof CSS.escape!=="function")return;q.querySelector(`[data-path="${CSS.escape(K)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),i0=S((K)=>{let q=r;if(!q||q.length===0)return;let F=V?q.findIndex((k)=>k.node.path===V):-1;if(K.key==="ArrowDown"){K.preventDefault();let k=Math.min(F+1,q.length-1),f=q[k];if(!f)return;if(O(f.node.path),f.node.type!=="dir")u_.current?.(f.node.path,f.node),M_.current?.(f.node.path);else A(null),v(!1),U(null);s0(f.node.path);return}if(K.key==="ArrowUp"){K.preventDefault();let k=F<=0?0:F-1,f=q[k];if(!f)return;if(O(f.node.path),f.node.type!=="dir")u_.current?.(f.node.path,f.node),M_.current?.(f.node.path);else A(null),v(!1),U(null);s0(f.node.path);return}if(K.key==="ArrowRight"&&F>=0){let k=q[F];if(k?.node?.type==="dir"&&!j.has(k.node.path))K.preventDefault(),N_.current?.(k.node.path),G((f)=>new Set([...f,k.node.path]));return}if(K.key==="ArrowLeft"&&F>=0){let k=q[F];if(k?.node?.type==="dir"&&j.has(k.node.path))K.preventDefault(),G((f)=>{let l=new Set(f);return l.delete(k.node.path),l});return}if(K.key==="Enter"&&F>=0){K.preventDefault();let k=q[F];if(!k)return;let f=k.node.path;if(k.node.type==="dir"){if(!H_.current.has(f))N_.current?.(f);G((n)=>{let a=new Set(n);if(a.has(f))a.delete(f);else a.add(f);return a}),A(null),U(null),v(!1)}else u_.current?.(f,k.node),M_.current?.(f);return}if((K.key==="Delete"||K.key==="Backspace")&&F>=0){let k=q[F];if(!k||k.node.type==="dir")return;K.preventDefault(),l_(k.node.path);return}if(K.key==="Escape")K.preventDefault(),h_()},[h_,l_,j,r,s0,V]),_0=S((K)=>{let q=F0(K),F=q?.closest?.(".workspace-row");if(!F)return;let k=F.dataset.type,f=F.dataset.path;if(!f||f===".")return;if(A0.current===f)return;let l=K?.touches?.[0];if(!l)return;if(q0.current={path:J2(q)?f:null,dragging:!1,startX:l.clientX,startY:l.clientY},k!=="file")return;if(L_.current)clearTimeout(L_.current);L_.current=setTimeout(()=>{if(L_.current=null,q0.current?.dragging)return;l_(f)},600)},[l_]),P0=S(()=>{if(L_.current)clearTimeout(L_.current),L_.current=null;let K=q0.current;if(K?.dragging&&K.path){let q=f_.current||m_(),F=U0.current;if(typeof F==="function")F(K.path,q)}q0.current={path:null,dragging:!1,startX:0,startY:0},d_.current=0,V_(!1),s(null),v_(null),S_(),w0()},[m_,w0,v_,S_]),b2=S((K)=>{let q=q0.current,F=K?.touches?.[0];if(!F||!q?.path){if(L_.current)clearTimeout(L_.current),L_.current=null;return}let k=Math.abs(F.clientX-q.startX),f=Math.abs(F.clientY-q.startY),l=k>8||f>8;if(l&&L_.current)clearTimeout(L_.current),L_.current=null;if(!q.dragging&&l)q.dragging=!0,V_(!0),s("move"),x0(q.path);if(q.dragging){K.preventDefault(),J0(F.clientX,F.clientY);let n=document.elementFromPoint(F.clientX,F.clientY),a=H0(n)||m_();if(f_.current!==a)v_(a);s_(a)}},[H0,m_,x0,J0,v_,s_]),l0=L((K)=>{K.preventDefault();let q=Q0.current;if(!q)return;let F=K.clientY,k=F_.current||280,f=K.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=F,n=(c)=>{l=c.clientY;let W_=q.clientHeight-80,W0=Math.min(Math.max(k-(c.clientY-F),80),W_);q.style.setProperty("--preview-height",`${W0}px`),F_.current=W0},a=()=>{let c=q.clientHeight-80,W_=Math.min(Math.max(k-(l-F),80),c);F_.current=W_,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)}).current,M2=L((K)=>{K.preventDefault();let q=Q0.current;if(!q)return;let F=K.touches[0];if(!F)return;let k=F.clientY,f=F_.current||280,l=K.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let n=(c)=>{let W_=c.touches[0];if(!W_)return;c.preventDefault();let W0=q.clientHeight-80,n0=Math.min(Math.max(f-(W_.clientY-k),80),W0);q.style.setProperty("--preview-height",`${n0}px`),F_.current=n0},a=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",I_("previewHeight",String(Math.round(F_.current||f))),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,S2=async()=>{if(!V)return;try{let K=await p3(V);if(K.media_id)U(K.media_id)}catch(K){A((q)=>({...q||{},error:K.message||"Failed to attach"}))}},$0=async()=>{if(!V||q_)return;await l_(V)},K2=(K)=>{return Array.from(K?.dataTransfer?.types||[]).includes("Files")},X1=S((K)=>{if(!K2(K))return;if(K.preventDefault(),d_.current+=1,!_2.current)V_(!0);s("upload");let q=L0(K)||m_();v_(q),s_(q)},[m_,L0,v_,s_]),x2=S((K)=>{if(!K2(K))return;if(K.preventDefault(),K.dataTransfer)K.dataTransfer.dropEffect="copy";if(!_2.current)V_(!0);if($2.current!=="upload")s("upload");let q=L0(K)||m_();if(f_.current!==q)v_(q);s_(q)},[m_,L0,v_,s_]),T0=S((K)=>{if(!K2(K))return;if(K.preventDefault(),d_.current=Math.max(0,d_.current-1),d_.current===0)V_(!1),s(null),v_(null),S_()},[v_,S_]),N0=S(async(K,q=".")=>{let F=Array.from(K||[]);if(F.length===0)return;let k=q&&q!==""?q:".",f=k!=="."?k:"workspace root";Z_(!0);try{let l=null;for(let n of F)try{l=await D1(n,k)}catch(a){let c=a?.status,W_=a?.code;if(c===409||W_==="file_exists"){let W0=n?.name||"file";if(!window.confirm(`"${W0}" already exists in ${f}. Overwrite?`))continue;l=await D1(n,k,{overwrite:!0})}else throw a}if(l?.path)t_.current=l.path,O(l.path),M_.current?.(l.path);N_.current?.(k)}catch(l){o(l.message||"Failed to upload file")}finally{Z_(!1)}},[]),W1=S(async(K,q)=>{if(!K)return;let F=C_.current?.get(K);if(!F)return;let k=q&&q!==""?q:".",f=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(k===f)return;try{let n=(await n3(K,k))?.path||K;if(F.type==="dir")G((a)=>{let c=new Set;for(let W_ of a)if(W_===K)c.add(n);else if(W_.startsWith(`${K}/`))c.add(`${n}${W_.slice(K.length)}`);else c.add(W_);return c});if(O(n),F.type==="dir")A(null),v(!1),U(null);else M_.current?.(n);N_.current?.(f),N_.current?.(k)}catch(l){o(l?.message||"Failed to move entry")}},[]);U0.current=W1;let E2=S(async(K)=>{if(!K2(K))return;K.preventDefault(),d_.current=0,V_(!1),s(null),$_(null),S_();let q=Array.from(K?.dataTransfer?.files||[]);if(q.length===0)return;let F=f_.current||L0(K)||m_();await N0(q,F)},[m_,L0,N0]),a0=S((K)=>{if(K?.stopPropagation?.(),j_)return;let q=K?.currentTarget?.dataset?.uploadTarget||".";k0.current=q,j0.current?.click()},[j_]),G2=S(()=>{if(j_)return;let K=O0.current,q=K?C_.current?.get(K):null;k0.current=q?.type==="dir"?q.path:".",j0.current?.click()},[j_]),j1=S((K)=>{if(!K||K.button!==0)return;let q=K.currentTarget;if(!q||!q.dataset)return;let F=q.dataset.path;if(!F||F===".")return;if(A0.current===F)return;let k=F0(K);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!J2(k))return;K.preventDefault(),C0.current={path:F,dragging:!1,startX:K.clientX,startY:K.clientY};let f=(n)=>{let a=C0.current;if(!a?.path)return;let c=Math.abs(n.clientX-a.startX),W_=Math.abs(n.clientY-a.startY),W0=c>4||W_>4;if(!a.dragging&&W0)a.dragging=!0,e.current=!0,V_(!0),s("move"),x0(a.path),J0(n.clientX,n.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){n.preventDefault(),J0(n.clientX,n.clientY);let n0=document.elementFromPoint(n.clientX,n.clientY),f0=H0(n0)||m_();if(f_.current!==f0)v_(f0);s_(f0)}},l=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",l);let n=C0.current;if(n?.dragging&&n.path){let a=f_.current||m_(),c=U0.current;if(typeof c==="function")c(n.path,a)}C0.current={path:null,dragging:!1,startX:0,startY:0},d_.current=0,V_(!1),s(null),v_(null),S_(),w0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{e.current=!1},0)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",l)},[H0,m_,x0,J0,w0,v_,s_,S_]),K1=S(async(K)=>{let q=Array.from(K?.target?.files||[]);if(q.length===0)return;let F=k0.current||".";if(await N0(q,F),k0.current=".",K?.target)K.target.value=""},[N0]);return z`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${U_}
            ref=${Q0}
            onDragEnter=${X1}
            onDragOver=${x2}
            onDragLeave=${T0}
            onDrop=${E2}
        >
            <input type="file" multiple style="display:none" ref=${j0} onChange=${K1} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${m0} title="New file" disabled=${j_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${X0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${J_?" active":""}`}
                        onClick=${B0}
                        title=${J_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!J_&&z`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e_}>
                ${j_&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${w&&z`<div class="workspace-loading">Loading…</div>`}
                ${p&&z`<div class="workspace-error">${p}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${Y0}
                        onDblClick=${j2}
                        onKeyDown=${i0}
                        onTouchStart=${_0}
                        onTouchEnd=${P0}
                        onTouchMove=${b2}
                        onTouchCancel=${P0}
                    >
                        ${r.map(({node:K,depth:q})=>{let F=K.type==="dir",k=K.path===V,f=K.path===W,l=F&&j.has(K.path),n=i&&K.path===i,a=Array.isArray(K.children)&&K.children.length>0?K.children.length:Number(K.child_count)||0;return z`
                                <div
                                    key=${K.path}
                                    class=${`workspace-row${k?" selected":""}${n?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+q*y_.indentPx}px`}}
                                    data-path=${K.path}
                                    data-type=${K.type}
                                    onMouseDown=${j1}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${F?l?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${F?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${F?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${f?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${b0}
                                                value=${E}
                                                onInput=${(c)=>D(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),d0();else if(c.key==="Escape")c.preventDefault(),G0()}}
                                                onBlur=${G0}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${K.name}</span></span>`}
                                    ${F&&!l&&a>0&&z`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${F&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${K.path}
                                            title="Upload files to this folder"
                                            onClick=${a0}
                                            disabled=${j_}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${V&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${l0} onTouchStart=${M2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${m0} title="New file" disabled=${j_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q_&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>V0&&i_.current?.(V,C)}
                                    title=${p0}
                                    disabled=${!V0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${$0}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${q_?z`
                                    <button class="workspace-download" onClick=${G2}
                                        title="Upload files to this folder" disabled=${j_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${d3(V,J_)}
                                        title="Download folder as zip" onClick=${(K)=>K.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${S2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${y&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${C?.error&&z`<div class="workspace-error">${C.error}</div>`}
                    ${q_&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${T_?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${T_?.error&&z`<div class="workspace-error">${T_.error}</div>`}
                        ${T_?.payload&&T_.payload.segments?.length>0&&z`
                            <${C6} payload=${T_.payload} />
                        `}
                        ${T_?.payload&&(!T_.payload.segments||T_.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${C&&!C.error&&!q_&&z`
                        <div class="workspace-preview-meta">
                            ${C.size?z`<span>${o0(C.size)}</span>`:""}
                            ${C.mtime?z`<span>${_1(C.mtime)}</span>`:""}
                            ${C.truncated?z`<span>truncated</span>`:""}
                        </div>
                        <div class="workspace-preview-body" ref=${S0}></div>
                    `}
                    ${T&&z`
                        <div class="workspace-download-card">
                            <${y6} mediaId=${T} />
                        </div>
                    `}
                </div>
            `}
            ${t&&z`
                <div class="workspace-drag-ghost" ref=${g0}>${t.label}</div>
            `}
        </aside>
    `}function n4({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:j,onTogglePreview:G,previewTabs:V,onToggleDock:O,dockVisible:W}){let[H,E]=R(null),D=L(null);m(()=>{if(!H)return;let U=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;E(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[H]),m(()=>{let U=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let g=_.findIndex((y)=>y.id===$);if(w.shiftKey){let y=_[(g-1+_.length)%_.length];Z?.(y.id)}else{let y=_[(g+1)%_.length];Z?.(y.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let g=document.querySelector(".editor-pane");if(g&&g.contains(document.activeElement)){if(w.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,Z,J]);let C=S((U,w)=>{if(U.button===1){U.preventDefault(),J?.(w);return}if(U.button===0)Z?.(w)},[Z,J]),A=S((U,w)=>{U.preventDefault(),E({id:w,x:U.clientX,y:U.clientY})},[]),T=S((U,w)=>{U.stopPropagation(),J?.(w)},[J]);if(m(()=>{if(!$||!D.current)return;let U=D.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((U)=>z`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(w)=>C(w,U.id)}
                    onContextMenu=${(w)=>A(w,U.id)}
                >
                    ${U.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(w)=>T(w,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${O&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${O}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${H&&z`
            <div class="tab-context-menu" style=${{left:H.x+"px",top:H.y+"px"}}>
                <button onClick=${()=>{J?.(H.id),E(null)}}>Close</button>
                <button onClick=${()=>{X?.(H.id),E(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),E(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(H.id),E(null)}}>
                    ${_.find((U)=>U.id===H.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{G(H.id),E(null)}}>
                        ${V?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var A6=400,l1=60,o4=220,n1="mdPreviewHeight";function w6(){try{let _=localStorage.getItem(n1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=l1?$:o4}catch{return o4}}function d4({getContent:_,path:$,onClose:Z}){let[J,X]=R(""),[Y,j]=R(w6),G=L(null),V=L(null),O=L(""),W=L(_);return W.current=_,m(()=>{let D=()=>{let A=W.current?.()||"";if(A===O.current)return;O.current=A;try{let T=L2(A,null,{sanitize:!1});X(T)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let C=setInterval(D,A6);return()=>clearInterval(C)},[]),m(()=>{if(G.current&&J)e2(G.current).catch(()=>{})},[J]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let C=D.clientY,A=V.current?.offsetHeight||Y,T=V.current?.parentElement,U=T?T.offsetHeight*0.7:500,w=D.currentTarget;w.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=(v)=>{let p=Math.min(Math.max(A-(v.clientY-C),l1),U);j(p)},y=()=>{w.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(n1,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",y)}}
            onTouchStart=${(D)=>{D.preventDefault();let C=D.touches[0];if(!C)return;let A=C.clientY,T=V.current?.offsetHeight||Y,U=V.current?.parentElement,w=U?U.offsetHeight*0.7:500,g=D.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let y=(p)=>{let o=p.touches[0];if(!o)return;p.preventDefault();let J_=Math.min(Math.max(T-(o.clientY-A),l1),w);j(J_)},v=()=>{g.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(n1,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",v)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",v),document.addEventListener("touchcancel",v)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${Z} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:J}}
            />
        </div>
    `}function r4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=L(_);J.current=_;let X=L($);X.current=$;let Y=L(Z);Y.current=Z,m(()=>{Y.current();let j=new C1((V,O)=>J.current(V,O),(V)=>X.current(V));j.connect();let G=()=>{j.reconnectIfNeeded()};return window.addEventListener("focus",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),document.removeEventListener("visibilitychange",G),j.disconnect()}},[])}function s4(){let[_,$]=R(!1),[Z,J]=R("default"),X=L(!1);m(()=>{let V=q2("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")J(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Y=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),j=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),I_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),I_("notificationsEnabled",String(V))},[Y]),G=S((V,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(V,{body:O});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:j,notify:G}}var P2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function a4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=R(null),[X,Y]=R(!1),j=L(!1),G=L(null),V=L(!1),O=L(null),W=L(null);m(()=>{j.current=X},[X]),m(()=>{W.current=Z},[Z]);let H=S(async(C=null)=>{try{if(C){let A=await S3(C);J(A.posts),Y(!1)}else{let A=await p2(10);J(A.posts),Y(A.has_more)}}catch(A){console.error("Failed to load posts:",A)}},[]),E=S(async()=>{try{let C=await p2(10);J((A)=>{if(!A||A.length===0)return C.posts;return P2([...C.posts,...A])}),Y((A)=>A||C.has_more)}catch(C){console.error("Failed to refresh timeline:",C)}},[]),D=S(async(C={})=>{let A=W.current;if(!A||A.length===0)return;if(V.current)return;let{preserveScroll:T=!0,preserveMode:U="top",allowRepeat:w=!1}=C,g=(p)=>{if(!T){p();return}if(U==="top")$(p);else _(p)},v=A.slice().sort((p,o)=>p.id-o.id)[0]?.id;if(!Number.isFinite(v))return;if(!w&&O.current===v)return;V.current=!0,O.current=v;try{let p=await p2(10,v);if(p.posts.length>0)g(()=>{J((o)=>P2([...p.posts,...o||[]])),Y(p.has_more)});else Y(!1)}catch(p){console.error("Failed to load more posts:",p)}finally{V.current=!1}},[_,$]);return m(()=>{G.current=D},[D]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:j,loadPosts:H,refreshTimeline:E,loadMore:D,loadMoreRef:G,loadingMoreRef:V,lastBeforeIdRef:O}}function t4(){let[_,$]=R(null),[Z,J]=R({text:"",totalLines:0}),[X,Y]=R(""),[j,G]=R({text:"",totalLines:0}),[V,O]=R(null),[W,H]=R(null),[E,D]=R(null),C=L(null),A=L(0),T=L(!1),U=L(""),w=L(""),g=L(null),y=L(null),v=L(null),p=L(null),o=L(!1),J_=L(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:j,setAgentThought:G,pendingRequest:V,setPendingRequest:O,currentTurnId:W,setCurrentTurnId:H,steerQueuedTurnId:E,setSteerQueuedTurnId:D,lastAgentEventRef:C,lastSilenceNoticeRef:A,isAgentRunningRef:T,draftBufferRef:U,thoughtBufferRef:w,pendingRequestRef:g,stalledPostIdRef:y,currentTurnIdRef:v,steerQueuedTurnIdRef:p,thoughtExpandedRef:o,draftExpandedRef:J_}}function e4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientX,D=$.current||280,C=W.currentTarget;C.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=E,T=(w)=>{A=w.clientX;let g=Math.min(Math.max(D+(w.clientX-E),160),600);H.style.setProperty("--sidebar-width",`${g}px`),$.current=g},U=()=>{let w=Math.min(Math.max(D+(A-E),160),600);$.current=w,C.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",I_("sidebarWidth",String(Math.round(w))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,Y=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientX,C=$.current||280,A=W.currentTarget;A.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let T=(w)=>{let g=w.touches[0];if(!g)return;w.preventDefault();let y=Math.min(Math.max(C+(g.clientX-D),160),600);H.style.setProperty("--sidebar-width",`${y}px`),$.current=y},U=()=>{A.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.userSelect="",I_("sidebarWidth",String(Math.round($.current||C))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,j=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientX,D=Z.current||$.current||280,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=E,T=(w)=>{A=w.clientX;let g=Math.min(Math.max(D+(w.clientX-E),200),800);H.style.setProperty("--editor-width",`${g}px`),Z.current=g},U=()=>{let w=Math.min(Math.max(D+(A-E),200),800);Z.current=w,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("editorWidth",String(Math.round(w))),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,G=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientX,C=Z.current||$.current||280,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(w)=>{let g=w.touches[0];if(!g)return;w.preventDefault();let y=Math.min(Math.max(C+(g.clientX-D),200),800);H.style.setProperty("--editor-width",`${y}px`),Z.current=y},U=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",I_("editorWidth",String(Math.round(Z.current||C))),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,V=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.clientY,D=J?.current||200,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=E,T=(w)=>{A=w.clientY;let g=Math.min(Math.max(D-(w.clientY-E),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${g}px`),J)J.current=g},U=()=>{let w=Math.min(Math.max(D-(A-E),100),window.innerHeight*0.5);if(J)J.current=w;C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("dockHeight",String(Math.round(w))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",U)}).current,O=L((W)=>{W.preventDefault();let H=_.current;if(!H)return;let E=W.touches[0];if(!E)return;let D=E.clientY,C=J?.current||200,A=W.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let T=(w)=>{let g=w.touches[0];if(!g)return;w.preventDefault();let y=Math.min(Math.max(C-(g.clientY-D),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${y}px`),J)J.current=y},U=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",I_("dockHeight",String(Math.round(J?.current||C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:O}}function _8({onTabClosed:_}={}){let $=L(_);$.current=_;let[Z,J]=R(()=>D_.getTabs()),[X,Y]=R(()=>D_.getActiveId()),[j,G]=R(()=>D_.getTabs().length>0);m(()=>{return D_.onChange((y,v)=>{J(y),Y(v),G(y.length>0)})},[]);let[V,O]=R(()=>new Set),W=S((y)=>{O((v)=>{let p=new Set(v);if(p.has(y))p.delete(y);else p.add(y);return p})},[]),H=S((y)=>{O((v)=>{if(!v.has(y))return v;let p=new Set(v);return p.delete(y),p})},[]),E=S((y)=>{if(!y)return;let v={path:y,mode:"edit"};try{if(!p_.resolve(v)){if(!p_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,p)}D_.open(y)},[]),D=S(()=>{let y=D_.getActiveId();if(y){let v=D_.get(y);if(v?.dirty){if(!window.confirm(`"${v.label}" has unsaved changes. Close anyway?`))return}D_.close(y),H(y),$.current?.(y)}},[H]),C=S((y)=>{let v=D_.get(y);if(v?.dirty){if(!window.confirm(`"${v.label}" has unsaved changes. Close anyway?`))return}D_.close(y),H(y),$.current?.(y)},[H]),A=S((y)=>{D_.activate(y)},[]),T=S((y)=>{let v=D_.getTabs().filter((J_)=>J_.id!==y&&!J_.pinned),p=v.filter((J_)=>J_.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let o=v.map((J_)=>J_.id);D_.closeOthers(y),o.forEach((J_)=>{H(J_),$.current?.(J_)})},[H]),U=S(()=>{let y=D_.getTabs().filter((o)=>!o.pinned),v=y.filter((o)=>o.dirty).length;if(v>0){if(!window.confirm(`${v} unsaved tab${v>1?"s":""} will be closed. Continue?`))return}let p=y.map((o)=>o.id);D_.closeAll(),p.forEach((o)=>{H(o),$.current?.(o)})},[H]),w=S((y)=>{D_.togglePin(y)},[]),g=S(()=>{let y=D_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return m(()=>{let y=(v)=>{let{oldPath:p,newPath:o,type:J_}=v.detail||{};if(!p||!o)return;if(J_==="dir"){for(let G_ of D_.getTabs())if(G_.path===p||G_.path.startsWith(`${p}/`)){let __=`${o}${G_.path.slice(p.length)}`;D_.rename(G_.id,__)}}else D_.rename(p,o)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),m(()=>{let y=(v)=>{if(D_.hasUnsaved())v.preventDefault(),v.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:j,tabStripTabs:Z,tabStripActiveId:X,previewTabs:V,openEditor:E,closeEditor:D,handleTabClose:C,handleTabActivate:A,handleTabCloseOthers:T,handleTabCloseAll:U,handleTabTogglePin:w,handleTabTogglePreview:W,revealInExplorer:g}}function o1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var d1=o1("warning",30000),$8=o1("finalize",120000),Z8=o1("refresh",30000),J8=30000;function Y8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function X8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function W8(_=30000){let[,$]=R(0);m(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function r1(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function a1(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var P6=x3,j8=T3,b6=f3,K8=u3,G8=c3,V8=v3,s1=typeof L1==="function"?L1:a1("getAgentContext",null),M6=typeof Y2==="function"?Y2:a1("getAgentModels",{current:null,models:[]}),S6=typeof F1==="function"?F1:a1("getAgentQueueState",{count:0});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});p_.register(x1);p_.register(R1);p_.register(v1);I1();var x6=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(x6)p_.register(T1);function I6(){let[_,$]=R("disconnected"),[Z,J]=R(null),[X,Y]=R(null),[j,G]=R(!1),[V,O]=R([]),[W,H]=R([]),[E,D]=R(null),{agentStatus:C,setAgentStatus:A,agentDraft:T,setAgentDraft:U,agentPlan:w,setAgentPlan:g,agentThought:y,setAgentThought:v,pendingRequest:p,setPendingRequest:o,currentTurnId:J_,setCurrentTurnId:G_,steerQueuedTurnId:__,setSteerQueuedTurnId:V_,lastAgentEventRef:P_,lastSilenceNoticeRef:s,isAgentRunningRef:t,draftBufferRef:d,thoughtBufferRef:i,pendingRequestRef:$_,stalledPostIdRef:j_,currentTurnIdRef:Z_,steerQueuedTurnIdRef:T_,thoughtExpandedRef:Y_,draftExpandedRef:O_}=t4(),[Q_,U_]=R({}),[A_,H_]=R(null),[z_,k_]=R(null),[R_,w_]=R(!1),[b_,C_]=R(null),[u_,i_]=R(null),[M_,N_]=R([]),[Q0,a_]=R(!1),b0=M_.length,j0=L(new Set),k0=L([]),L_=L(new Set);j0.current=new Set(M_.map((N)=>N.row_id)),k0.current=M_;let{notificationsEnabled:q0,notificationPermission:C0,toggleNotifications:x,notify:e}=s4(),[F_,Z0]=R(()=>new Set),[c_,M0]=R(()=>q2("workspaceOpen",!0)),S0=L(null),{editorOpen:o_,tabStripTabs:K0,tabStripActiveId:g_,previewTabs:z0,openEditor:d_,closeEditor:f_,handleTabClose:_2,handleTabActivate:$2,handleTabCloseOthers:g0,handleTabCloseAll:X2,handleTabTogglePin:y0,handleTabTogglePreview:U0,revealInExplorer:O0}=_8({onTabClosed:(N)=>S0.current?.(N)}),A0=L(null),t_=L(null);m(()=>{let N=A0.current;if(!N)return;if(t_.current)t_.current.dispose(),t_.current=null;let B=g_;if(!B)return;let P={path:B,mode:"edit"},M=p_.resolve(P)||p_.get("editor");if(!M){N.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=M.mount(N,P);t_.current=u,u.onDirtyChange?.((h)=>{D_.setDirty(B,h)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{f_()});let b=D_.getViewState(B);if(b&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(b));if(typeof u.onViewStateChange==="function")u.onViewStateChange((h)=>{D_.saveViewState(B,h)});return requestAnimationFrame(()=>u.focus()),()=>{if(t_.current===u)u.dispose(),t_.current=null}},[g_,f_]);let[r_,Z2]=R({name:"You",avatar_url:null,avatar_background:null}),W2=L(!1),u0=L(!1),F2=L(null),m_=L(0),H0=L(0),L0=L({}),v_=L({name:null,avatar_url:null}),S_=L({currentHashtag:null,searchQuery:null}),s_=L(null),J0=L(null),x0=L(0),w0=L(0),c0=L(0),G0=L(null),I0=L(null),d0=L(null),r0=L(0),m0=L({title:null,avatarBase:null}),h0=L(null),Q=S(()=>{if(h0.current)clearTimeout(h0.current),h0.current=null;D(null)},[]);W8(30000),m(()=>{return J4()},[]),m(()=>{I_("workspaceOpen",String(c_))},[c_]),m(()=>{return()=>{Q()}},[Q]),m(()=>{L0.current=Q_||{}},[Q_]),m(()=>{v_.current=r_||{name:"You",avatar_url:null,avatar_background:null}},[r_]);let I=S((N,B,P=null)=>{if(typeof document>"u")return;let M=(N||"").trim()||"PiClaw";if(m0.current.title!==M){document.title=M;let E_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(E_&&E_.getAttribute("content")!==M)E_.setAttribute("content",M);m0.current.title=M}let u=document.getElementById("dynamic-favicon");if(!u)return;let b=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",h=B||b,X_=B?`${h}|${P||""}`:h;if(m0.current.avatarBase!==X_){let E_=B?`${h}${h.includes("?")?"&":"?"}v=${P||Date.now()}`:h;u.setAttribute("href",E_),m0.current.avatarBase=X_}},[]),r=S((N)=>{if(!N)return;O((B)=>B.includes(N)?B:[...B,N])},[]),B_=S((N)=>{O((B)=>B.filter((P)=>P!==N))},[]);S0.current=B_;let y_=S(()=>{O([])},[]),x_=S((N,B=null,P="info",M=3000)=>{Q(),D({title:N,detail:B||null,kind:P||"info"}),h0.current=setTimeout(()=>{D((u)=>u?.title===N?null:u)},M)},[Q]),q_=S((N)=>{if(typeof N!=="string")return;let B=N.trim();if(!B){x_("No file selected","Use a valid file path from a file pill.","warning");return}if(!o_){x_("Editor pane is not open","Open the editor pane to open files from pills.","warning");return}if(/^[a-z][a-z0-9+.-]*:/i.test(B)){x_("Cannot open external path from file pill","Use an in-workspace file path.","warning");return}let M={path:B,mode:"edit"};if(!p_.resolve(M)){x_("No editor available",`No editor can open: ${B}`,"warning");return}d_(B)},[o_,d_,x_]),V0=S(()=>{let N=g_;if(N)r(N)},[g_,r]),p0=S((N)=>{if(!N)return;H((B)=>B.includes(N)?B:[...B,N])},[]),F0=S(async(N)=>{let B=(M)=>{M.scrollIntoView({behavior:"smooth",block:"center"}),M.classList.add("post-highlight"),setTimeout(()=>M.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+N);if(P){B(P);return}try{let u=(await I3(N))?.thread?.[0];if(!u)return;$0((b)=>{if(!b)return[u];if(b.some((h)=>h.id===u.id))return b;return[...b,u]}),requestAnimationFrame(()=>{setTimeout(()=>{let b=document.getElementById("post-"+N);if(b)B(b)},50)})}catch(M){console.error("[scrollToMessage] Failed to fetch message",N,M)}},[]),J2=S((N)=>{H((B)=>B.filter((P)=>P!==N))},[]),j2=S(()=>{H([])},[]),Y0=S((N={})=>{let B=Date.now();if(P_.current=B,N.running)t.current=!0,a_((P)=>P?P:!0);if(N.clearSilence)s.current=0},[a_]),X0=S(()=>{if(d0.current)clearTimeout(d0.current),d0.current=null;r0.current=0},[]);m(()=>()=>{X0()},[X0]);let h_=S(()=>{X0(),A((N)=>{if(!N)return N;if(!(N.last_activity||N.lastActivity))return N;let{last_activity:B,lastActivity:P,...M}=N;return M})},[X0]),B0=S((N)=>{if(!N)return;X0();let B=Date.now();r0.current=B,A({type:N.type||"active",last_activity:!0}),d0.current=setTimeout(()=>{if(r0.current!==B)return;A((P)=>{if(!P||!(P.last_activity||P.lastActivity))return P;return null})},J8)},[X0]),e_=S(()=>{t.current=!1,a_(!1),P_.current=null,s.current=0,d.current="",i.current="",$_.current=null,I0.current=null,Z_.current=null,T_.current=null,X0(),G_(null),V_(null),Y_.current=!1,O_.current=!1},[X0,G_,V_,a_]),l_=S((N)=>{if(!N)return;if(Z_.current===N)return;Z_.current=N,G_(N),T_.current=null,V_(null),d.current="",i.current="",U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),$_.current=null,I0.current=null,Y_.current=!1,O_.current=!1},[G_,V_]),s0=S((N)=>{if(typeof document<"u"){let E_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&E_)return}let B=I0.current;if(!B||!B.post)return;if(N&&B.turnId&&B.turnId!==N)return;let P=B.post;if(P.id&&G0.current===P.id)return;let M=String(P?.data?.content||"").trim();if(!M)return;G0.current=P.id||G0.current,I0.current=null;let u=M.replace(/\s+/g," ").slice(0,200),b=L0.current||{},X_=(P?.data?.agent_id?b[P.data.agent_id]:null)?.name||"Pi";e(X_,u)},[e]),i0=S(async(N,B)=>{if(N!=="thought"&&N!=="draft")return;let P=Z_.current;if(N==="thought"){if(Y_.current=B,P)try{await G8(P,"thought",B)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!B)return;try{let M=P?await K8(P,"thought"):null;if(M?.text)i.current=M.text;v((u)=>({...u||{text:"",totalLines:0},fullText:i.current||u?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:u?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(O_.current=B,P)try{await G8(P,"draft",B)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!B)return;try{let M=P?await K8(P,"draft"):null;if(M?.text)d.current=M.text;U((u)=>({...u||{text:"",totalLines:0},fullText:d.current||u?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:u?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),_0=L(null),P0=S(()=>{let N=s_.current;if(!N)return;if(!(Math.abs(N.scrollTop)>150))N.scrollTop=0},[]);_0.current=P0;let b2=S((N)=>{let B=s_.current;if(!B||typeof N!=="function"){N?.();return}let{currentHashtag:P,searchQuery:M}=S_.current||{},u=!(M&&!P),b=u?B.scrollHeight-B.scrollTop:B.scrollTop;N(),requestAnimationFrame(()=>{let h=s_.current;if(!h)return;if(u){let X_=Math.max(h.scrollHeight-b,0);h.scrollTop=X_}else{let X_=Math.max(h.scrollHeight-h.clientHeight,0),E_=Math.min(b,X_);h.scrollTop=E_}})},[]),l0=S((N)=>{let B=s_.current;if(!B||typeof N!=="function"){N?.();return}let P=B.scrollTop;N(),requestAnimationFrame(()=>{let M=s_.current;if(!M)return;let u=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(P,u)})},[]),M2=S((N)=>{if(!N||!Array.isArray(N))return N;let B=j0.current;if(B.size===0)return N;let P=new Set(B),M=k0.current;for(let b of M)if(b?.thread_id!=null)P.add(b.thread_id);let u=N.filter((b)=>!P.has(b?.id));return u.length===N.length?N:u},[]),{posts:S2,setPosts:$0,hasMore:K2,setHasMore:X1,hasMoreRef:x2,loadPosts:T0,refreshTimeline:N0,loadMore:W1,loadMoreRef:E2}=a4({preserveTimelineScroll:b2,preserveTimelineScrollTop:l0}),a0=D0(()=>M2(S2),[S2,M_,M2]),G2=S(()=>{let N=j_.current;if(!N)return;$0((B)=>B?B.filter((P)=>P.id!==N):B),j_.current=null},[$0]),{handleSplitterMouseDown:j1,handleSplitterTouchStart:K1,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:F,handleDockSplitterTouchStart:k}=e4({appShellRef:J0,sidebarWidthRef:x0,editorWidthRef:w0,dockHeightRef:c0}),f=S(()=>{if(!t.current)return;t.current=!1,s.current=0,P_.current=null,Z_.current=null,G_(null),Y_.current=!1,O_.current=!1;let N=(d.current||"").trim();if(d.current="",i.current="",U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),$_.current=null,I0.current=null,!N){A({type:"error",title:"Response stalled - No content received"});return}let P=`${N}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),u=new Date().toISOString(),b={id:M,timestamp:u,data:{type:"agent_response",content:P,agent_id:"default",is_local_stall:!0}};j_.current=M,$0((h)=>h?P2([...h,b]):[b]),_0.current?.(),A(null)},[G_]);m(()=>{S_.current={currentHashtag:Z,searchQuery:X}},[Z,X]),m(()=>{let N=Math.min(1000,Math.max(100,Math.floor(d1/2))),B=setInterval(()=>{if(!t.current)return;if($_.current)return;let P=P_.current;if(!P)return;let M=Date.now(),u=M-P;if(u>=$8){f();return}if(u>=d1){if(M-s.current>=Z8){let b=Math.floor(u/1000);A({type:"waiting",title:`Waiting for model… No events for ${b}s`}),s.current=M}}},N);return()=>clearInterval(B)},[f]);let l=S(async()=>{try{let N=await s1();if(N)i_(N)}catch(N){console.warn("Failed to fetch agent context:",N)}},[]),n=S(async()=>{try{let N=await V8("web:default");if(!N||N.status!=="active"||!N.data){if(u0.current){let{currentHashtag:M,searchQuery:u}=S_.current||{};if(!M&&!u)N0()}u0.current=!1,e_(),A(null),U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),$_.current=null;return}u0.current=!0;let B=N.data,P=B.turn_id||B.turnId;if(P)l_(P);if(Y0({running:!0,clearSilence:!0}),h_(),A(B),N.thought&&N.thought.text)v((M)=>{if(M&&M.text&&M.text.length>=N.thought.text.length)return M;return i.current=N.thought.text,{text:N.thought.text,totalLines:N.thought.totalLines||0}});if(N.draft&&N.draft.text)U((M)=>{if(M&&M.text&&M.text.length>=N.draft.text.length)return M;return d.current=N.draft.text,{text:N.draft.text,totalLines:N.draft.totalLines||0}})}catch(N){console.warn("Failed to fetch agent status:",N)}},[e_,h_,Y0,N0,l_]),a=S((N)=>{if($(N),N!=="connected"){A(null),U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),$_.current=null,e_();return}if(!W2.current){W2.current=!0,n();return}let{currentHashtag:B,searchQuery:P}=S_.current;if(!B&&!P)N0();n()},[e_,N0,n]),c=S(async(N)=>{J(N),$0(null),await T0(N)},[T0]),W_=S(async()=>{J(null),Y(null),$0(null),await T0()},[T0]),W0=S(async(N)=>{if(!N||!N.trim())return;Y(N.trim()),J(null),$0(null);try{let B=await P6(N.trim());$0(B.results),X1(!1)}catch(B){console.error("Failed to search:",B),$0([])}},[]),n0=S(()=>{G(!0),Y(null),J(null),$0([])},[]),f0=S(()=>{G(!1),Y(null),T0()},[T0]),T6=S(()=>{},[]),N8=S(async(N)=>{if(!N)return;let B=N.id,P=a0?.filter((u)=>u?.data?.thread_id===B&&u?.id!==B).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let M=(u)=>{if(!u.length)return;Z0((h)=>{let X_=new Set(h);return u.forEach((E_)=>X_.add(E_)),X_}),setTimeout(()=>{if(l0(()=>{$0((h)=>h?h.filter((X_)=>!u.includes(X_.id)):h)}),Z0((h)=>{let X_=new Set(h);return u.forEach((E_)=>X_.delete(E_)),X_}),x2.current)E2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await j8(B,P>0);if(u?.ids?.length)M(u.ids)}catch(u){let b=u?.message||"";if(P===0&&b.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let X_=await j8(B,!0);if(X_?.ids?.length)M(X_.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${b}`)}},[a0,l0]),t1=S(async()=>{try{let N=await b6();U_(Y8(N));let B=N?.user||{};Z2((M)=>{let u=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",b=typeof B.avatar_url==="string"?B.avatar_url.trim():null,h=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(M.name===u&&M.avatar_url===b&&M.avatar_background===h)return M;return{name:u,avatar_url:b,avatar_background:h}});let P=(N?.agents||[]).find((M)=>M.id==="default");if(P?.model)H_(P.model);I(P?.name,P?.avatar_url)}catch(N){console.warn("Failed to load agents:",N)}try{let N=await s1();if(N)i_(N)}catch{}},[I]);m(()=>{t1();let N=z2("sidebarWidth",null),B=Number.isFinite(N)?Math.min(Math.max(N,160),600):280;if(x0.current=B,J0.current)J0.current.style.setProperty("--sidebar-width",`${B}px`)},[t1]);let O8=Q0||C!==null,e1=S((N)=>{if(!N||typeof N!=="object")return;let B=N.agent_id;if(!B)return;let{agent_name:P,agent_avatar:M}=N;if(!P&&M===void 0)return;let u=L0.current?.[B]||{id:B},b=u.name||null,h=u.avatar_url??u.avatarUrl??u.avatar??null,X_=!1,E_=!1;if(P&&P!==u.name)b=P,E_=!0;if(M!==void 0){let N2=typeof M==="string"?M.trim():null,$3=typeof h==="string"?h.trim():null,O2=N2||null;if(O2!==($3||null))h=O2,X_=!0}if(!E_&&!X_)return;if(U_((N2)=>{let O2={...N2[B]||{id:B}};if(E_)O2.name=b;if(X_)O2.avatar_url=h;return{...N2,[B]:O2}}),B==="default")I(b,h,X_?Date.now():null)},[I]),_3=S((N)=>{if(!N||typeof N!=="object")return;let B=N.user_name??N.userName,P=N.user_avatar??N.userAvatar,M=N.user_avatar_background??N.userAvatarBackground;if(B===void 0&&P===void 0&&M===void 0)return;Z2((u)=>{let b=typeof B==="string"&&B.trim()?B.trim():u.name||"You",h=P===void 0?u.avatar_url:typeof P==="string"&&P.trim()?P.trim():null,X_=M===void 0?u.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(u.name===b&&u.avatar_url===h&&u.avatar_background===X_)return u;return{name:b,avatar_url:h,avatar_background:X_}})},[]),G1=S((N)=>{if(!N||typeof N!=="object")return;let B=N.model??N.current;if(B!==void 0)H_(B);if(N.thinking_level!==void 0)k_(N.thinking_level??null);if(N.supports_thinking!==void 0)w_(Boolean(N.supports_thinking));if(N.provider_usage!==void 0)C_(N.provider_usage??null)},[]),D2=S(()=>{M6().then((N)=>{if(N)G1(N)}).catch(()=>{})},[G1]),v0=S(()=>{S6().then((N)=>{let B=L_.current,P=Array.isArray(N?.items)?N.items.map((M)=>({...M})).filter((M)=>!B.has(M.row_id)):[];if(P.length){N_((M)=>{if(M.length===P.length&&M.every((u,b)=>u.row_id===P[b].row_id))return M;return P});return}B.clear(),N_((M)=>M.length===0?M:[])}).catch(()=>{N_((N)=>N.length===0?N:[])})},[N_]),B8=S((N)=>{let B=N?.row_id;if(B==null)return;L_.current.add(B),N_((P)=>P.filter((M)=>M?.row_id!==B))},[N_]),Q8=S((N)=>{if(!N||typeof N!=="object")return;if(N?.queued==="followup"||N?.queued==="steer"){v0();return}let B=N?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))v0()},[v0]),V1=S(()=>{D2(),v0()},[D2,v0]);m(()=>{V1();let N=setInterval(()=>{D2(),v0()},60000);return()=>clearInterval(N)},[V1,D2,v0]);let N1=S((N,B)=>{let P=B?.turn_id;if(e1(B),_3(B),N==="ui_theme"){Y4(B);return}if(N?.startsWith("agent_"))h_();if(N==="connected"){A(null),U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),$_.current=null,e_(),V8("web:default").then((b)=>{if(!b||b.status!=="active"||!b.data)return;let h=b.data,X_=h.turn_id||h.turnId;if(X_)l_(X_);if(Y0({clearSilence:!0}),B0(h),b.thought&&b.thought.text)i.current=b.thought.text,v({text:b.thought.text,totalLines:b.thought.totalLines||0});if(b.draft&&b.draft.text)d.current=b.draft.text,U({text:b.draft.text,totalLines:b.draft.totalLines||0})}).catch((b)=>{console.warn("Failed to fetch agent status:",b)}),V1();return}if(N==="agent_status"){if(B.type==="done"||B.type==="error"){if(P&&Z_.current&&P!==Z_.current)return;if(B.type==="done"){s0(P||Z_.current);let{currentHashtag:b,searchQuery:h}=S_.current||{};if(!b&&!h)N0();if(B.context_usage)i_(B.context_usage)}if(u0.current=!1,e_(),N_([]),L_.current.clear(),U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null),B.type==="error")A({type:"error",title:B.title||"Agent error"}),setTimeout(()=>A(null),8000);else A(null)}else{if(P)l_(P);if(Y0({running:!0,clearSilence:!0}),B.type==="thinking")d.current="",i.current="",U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0});F2.current=B,A((b)=>{if(b&&b.type===B.type&&b.title===B.title)return b;return B})}return}if(N==="agent_steer_queued"){if(P&&Z_.current&&P!==Z_.current)return;let b=P||Z_.current;if(!b)return;T_.current=b,V_(b);return}if(N==="agent_followup_queued"){let b=B?.row_id,h=B?.content;if(b!=null&&typeof h==="string"&&h.trim())N_((X_)=>{if(X_.some((E_)=>E_?.row_id===b))return X_;return[...X_,{row_id:b,content:h,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});v0();return}if(N==="agent_followup_consumed"){let b=B?.row_id;if(b!=null)N_((h)=>h.filter((X_)=>X_.row_id!==b));v0(),N0();return}if(N==="agent_draft_delta"){if(P&&Z_.current&&P!==Z_.current)return;if(P&&!Z_.current)l_(P);if(Y0({running:!0,clearSilence:!0}),B?.reset)d.current="";if(B?.delta)d.current+=B.delta;let b=Date.now();if(!m_.current||b-m_.current>=100){m_.current=b;let h=d.current,X_=r1(h);if(O_.current)U((E_)=>({text:E_?.text||"",totalLines:X_,fullText:h}));else U({text:h,totalLines:X_})}return}if(N==="agent_draft"){if(P&&Z_.current&&P!==Z_.current)return;if(P&&!Z_.current)l_(P);Y0({running:!0,clearSilence:!0});let b=B.text||"",h=B.mode||(B.kind==="plan"?"replace":"append"),X_=Number.isFinite(B.total_lines)?B.total_lines:b?b.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(h==="replace")g(b);else g((E_)=>(E_||"")+b);else if(!O_.current)d.current=b,U({text:b,totalLines:X_});return}if(N==="agent_thought_delta"){if(P&&Z_.current&&P!==Z_.current)return;if(P&&!Z_.current)l_(P);if(Y0({running:!0,clearSilence:!0}),B?.reset)i.current="";if(typeof B?.delta==="string")i.current+=B.delta;let b=Date.now();if(Y_.current&&(!H0.current||b-H0.current>=100)){H0.current=b;let h=i.current;v((X_)=>({text:X_?.text||"",totalLines:r1(h),fullText:h}))}return}if(N==="agent_thought"){if(P&&Z_.current&&P!==Z_.current)return;if(P&&!Z_.current)l_(P);Y0({running:!0,clearSilence:!0});let b=B.text||"",h=Number.isFinite(B.total_lines)?B.total_lines:b?b.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Y_.current)i.current=b,v({text:b,totalLines:h});return}if(N==="agent_request"){if(console.log("Agent request:",B),P&&Z_.current&&P!==Z_.current)return;if(P)l_(P);Y0({running:!0,clearSilence:!0}),o(B),$_.current=B;return}if(N==="agent_request_timeout"){if(console.log("Agent request timeout:",B),P&&Z_.current&&P!==Z_.current)return;o(null),$_.current=null,e_(),A({type:"error",title:"Permission request timed out"});return}if(N==="model_changed"){if(B?.model!==void 0)H_(B.model);if(B?.thinking_level!==void 0)k_(B.thinking_level??null);if(B?.supports_thinking!==void 0)w_(Boolean(B.supports_thinking));s1().then((b)=>{if(b)i_(b)}).catch(()=>{});return}if(N==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}let{currentHashtag:M,searchQuery:u}=S_.current;if(N==="agent_response")G2(),I0.current={post:B,turnId:Z_.current};if(!M&&!u&&(N==="new_post"||N==="agent_response"))$0((b)=>{if(!b)return[B];if(b.some((h)=>h.id===B.id))return b;return[...b,B]}),_0.current?.();if(N==="interaction_updated")$0((b)=>{if(!b)return b;if(!b.some((h)=>h.id===B.id))return b;return b.map((h)=>h.id===B.id?B:h)});if(N==="interaction_deleted"){let b=B?.ids||[];if(b.length){l0(()=>{$0((E_)=>E_?E_.filter((N2)=>!b.includes(N2.id)):E_)});let{currentHashtag:h,searchQuery:X_}=S_.current;if(x2.current&&!h&&!X_)E2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[e_,h_,E2,Y0,s0,l0,N0,G2,l_,B0,e1,_3,D2,v0,N_]);m(()=>{if(typeof window>"u")return;let N=window.__PICLAW_TEST_API||{};return N.emit=N1,N.reset=()=>{G2(),e_(),A(null),U({text:"",totalLines:0}),g(""),v({text:"",totalLines:0}),o(null)},N.finalize=()=>f(),window.__PICLAW_TEST_API=N,()=>{if(window.__PICLAW_TEST_API===N)window.__PICLAW_TEST_API=void 0}},[e_,f,N1,G2]),r4({handleSseEvent:N1,handleConnectionStatusChange:a,loadPosts:T0}),m(()=>{if(!a0||a0.length===0)return;let N=location.hash;if(!N||!N.startsWith("#msg-"))return;let B=N.slice(5);F0(B),history.replaceState(null,"",location.pathname+location.search)},[a0,F0]);let O1=C!==null;m(()=>{if(_!=="connected")return;let B=setInterval(()=>{if(O1)n(),l();else{let{currentHashtag:P,searchQuery:M}=S_.current||{};if(!P&&!M)N0();n(),l()}},O1?15000:60000);return()=>clearInterval(B)},[_,O1,n,l,N0]);let q8=S(()=>{M0((N)=>!N)},[]);m(()=>{if(!o_)return;if(typeof window>"u")return;let N=J0.current;if(!N)return;if(!w0.current){let B=z2("editorWidth",null),P=x0.current||280;w0.current=Number.isFinite(B)?B:P}if(N.style.setProperty("--editor-width",`${w0.current}px`),!c0.current){let B=z2("dockHeight",null);c0.current=Number.isFinite(B)?B:200}N.style.setProperty("--dock-height",`${c0.current}px`)},[o_]);let V2=p_.getDockPanes().length>0,[B1,z8]=R(!1),I2=S(()=>z8((N)=>!N),[]);m(()=>{if(!V2)return;let N=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),I2()};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[I2,V2]);let U8=Boolean(__&&__===(C?.turn_id||J_));return z`
        <div class=${`app-shell${c_?"":" workspace-collapsed"}${o_?" editor-open":""}`} ref=${J0}>
            <${l4}
                onFileSelect=${r}
                visible=${c_}
                active=${c_||o_}
                onOpenEditor=${d_}
            />
            <button
                class=${`workspace-toggle-tab${c_?" open":" closed"}`}
                onClick=${q8}
                title=${c_?"Hide workspace":"Show workspace"}
                aria-label=${c_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${j1} onTouchStart=${K1}></div>
            ${o_&&z`
                <div class="editor-pane-container">
                    <${n4}
                        tabs=${K0}
                        activeId=${g_}
                        onActivate=${$2}
                        onClose=${_2}
                        onCloseOthers=${g0}
                        onCloseAll=${X2}
                        onTogglePin=${y0}
                        onTogglePreview=${U0}
                        previewTabs=${z0}
                        onToggleDock=${V2?I2:void 0}
                        dockVisible=${V2&&B1}
                    />
                    <div class="editor-pane-host" ref=${A0}></div>
                    ${g_&&z0.has(g_)&&z`
                        <${d4}
                            getContent=${()=>t_.current?.getContent?.()}
                            path=${g_}
                            onClose=${()=>U0(g_)}
                        />
                    `}
                    ${V2&&B1&&z`<div class="dock-splitter" onMouseDown=${F} onTouchStart=${k}></div>`}
                    ${V2&&z`<div class=${`dock-panel${B1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${I2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending - xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${K} onTouchStart=${q}></div>
            `}
            <div class="container">
                ${X&&X8()&&z`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${W_}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${C4}
                    posts=${a0}
                    hasMore=${K2}
                    onLoadMore=${W1}
                    timelineRef=${s_}
                    onHashtagClick=${c}
                    onMessageRef=${p0}
                    onScrollToMessage=${F0}
                    onFileRef=${q_}
                    onPostClick=${void 0}
                    onDeletePost=${N8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${Q_}
                    user=${r_}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${F_}
                    searchQuery=${X}
                />
                <${H4}
                    status=${C}
                    draft=${T}
                    plan=${w}
                    thought=${y}
                    pendingRequest=${p}
                    intent=${E}
                    turnId=${J_}
                    steerQueued=${U8}
                    onPanelToggle=${i0}
                />
                <${s3}
                    onPost=${()=>{T0(),P0()}}
                    onFocus=${P0}
                    searchMode=${j}
                    onSearch=${W0}
                    onEnterSearch=${n0}
                    onExitSearch=${f0}
                    fileRefs=${V}
                    onRemoveFileRef=${B_}
                    onClearFileRefs=${y_}
                    messageRefs=${W}
                    onRemoveMessageRef=${J2}
                    onClearMessageRefs=${j2}
                    activeEditorPath=${g_}
                    onAttachEditorFile=${V0}
                    onOpenFilePill=${q_}
                    followupQueueCount=${b0}
                    followupQueueItems=${M_}
                    onInjectQueuedFollowup=${B8}
                    onMessageResponse=${Q8}
                    isAgentActive=${O8}
                    activeModel=${A_}
                    modelUsage=${b_}
                    thinkingLevel=${z_}
                    supportsThinking=${R_}
                    contextUsage=${u_}
                    notificationsEnabled=${q0}
                    notificationPermission=${C0}
                    onToggleNotifications=${x}
                    onModelChange=${H_}
                    onModelStateChange=${G1}
                />
                <${F4} status=${_} />
                <${L4}
                    request=${p}
                    onRespond=${()=>{o(null),$_.current=null}}
                />
            </div>
        </div>
    `}w3(z`<${I6} />`,document.getElementById("app"));

//# debugId=21E2E0BC0B9D43D764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
