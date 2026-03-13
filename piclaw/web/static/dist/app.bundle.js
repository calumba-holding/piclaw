var X8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var I2,K_,W3,z2,K3,r1,W8,M2={},G3=[],K8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function o0(_,$){for(var Z in $)_[Z]=$[Z];return _}function Q3(_){var $=_.parentNode;$&&$.removeChild(_)}function N3(_,$,Z){var J,j,Y,W={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?j=$[Y]:W[Y]=$[Y];if(arguments.length>2&&(W.children=arguments.length>3?I2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)W[Y]===void 0&&(W[Y]=_.defaultProps[Y]);return w2(_,W,J,j,null)}function w2(_,$,Z,J,j){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:j==null?++W3:j};return K_.vnode!=null&&K_.vnode(Y),Y}function S2(_){return _.children}function A2(_,$){this.props=_,this.context=$}function Y2(_,$){if($==null)return _.__?Y2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?Y2(_):null}function V3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return V3(_)}}function d1(_){(!_.__d&&(_.__d=!0)&&z2.push(_)&&!b2.__r++||r1!==K_.debounceRendering)&&((r1=K_.debounceRendering)||K3)(b2)}function b2(){for(var _;b2.__r=z2.length;)_=z2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),z2=[],_.some(function($){var Z,J,j,Y,W,G;$.__d&&(W=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(j=o0({},Y)).__v=Y.__v+1,V1(G,Y,j,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[W]:null,J,W==null?Y2(Y):W,Y.__h),z3(J,Y),Y.__e!=W&&V3(Y)))})}function O3(_,$,Z,J,j,Y,W,G,Q,N){var X,L,E,F,D,M,S,H=J&&J.__k||G3,w=H.length;for(Z.__k=[],X=0;X<$.length;X++)if((F=Z.__k[X]=(F=$[X])==null||typeof F=="boolean"?null:typeof F=="string"||typeof F=="number"||typeof F=="bigint"?w2(null,F,null,null,F):Array.isArray(F)?w2(S2,{children:F},null,null,null):F.__b>0?w2(F.type,F.props,F.key,null,F.__v):F)!=null){if(F.__=Z,F.__b=Z.__b+1,(E=H[X])===null||E&&F.key==E.key&&F.type===E.type)H[X]=void 0;else for(L=0;L<w;L++){if((E=H[L])&&F.key==E.key&&F.type===E.type){H[L]=void 0;break}E=null}V1(_,F,E=E||M2,j,Y,W,G,Q,N),D=F.__e,(L=F.ref)&&E.ref!=L&&(S||(S=[]),E.ref&&S.push(E.ref,null,F),S.push(L,F.__c||D,F)),D!=null?(M==null&&(M=D),typeof F.type=="function"&&F.__k!=null&&F.__k===E.__k?F.__d=Q=q3(F,Q,_):Q=B3(_,F,E,H,D,Q),N||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=Q):_.value=""):Q&&E.__e==Q&&Q.parentNode!=_&&(Q=Y2(E))}for(Z.__e=M,X=w;X--;)H[X]!=null&&(typeof Z.type=="function"&&H[X].__e!=null&&H[X].__e==Z.__d&&(Z.__d=Y2(J,X+1)),U3(H[X],H[X]));if(S)for(X=0;X<S.length;X++)H3(S[X],S[++X],S[++X])}function q3(_,$,Z){var J,j;for(J=0;J<_.__k.length;J++)(j=_.__k[J])&&(j.__=_,$=typeof j.type=="function"?q3(j,$,Z):B3(Z,j,j,_.__k,j.__e,$));return $}function B3(_,$,Z,J,j,Y){var W,G,Q;if($.__d!==void 0)W=$.__d,$.__d=void 0;else if(Z==null||j!=Y||j.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(j),W=null;else{for(G=Y,Q=0;(G=G.nextSibling)&&Q<J.length;Q+=2)if(G==j)break _;_.insertBefore(j,Y),W=Y}return W!==void 0?W:j.nextSibling}function s1(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||K8.test($)?Z:Z+"px"}function y2(_,$,Z,J,j){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||s1(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||s1(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?t1:a1,Y):_.removeEventListener($,Y?t1:a1,Y);else if($!=="dangerouslySetInnerHTML"){if(j)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(W){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function a1(_){this.l[_.type+!1](K_.event?K_.event(_):_)}function t1(_){this.l[_.type+!0](K_.event?K_.event(_):_)}function V1(_,$,Z,J,j,Y,W,G,Q){var N,X,L,E,F,D,M,S,H,w,R,U=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(Q=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(N=K_.__b)&&N($);try{_:if(typeof U=="function"){if(S=$.props,H=(N=U.contextType)&&J[N.__c],w=N?H?H.props.value:N.__:J,Z.__c?M=(X=$.__c=Z.__c).__=X.__E:(("prototype"in U)&&U.prototype.render?$.__c=X=new U(S,w):($.__c=X=new A2(S,w),X.constructor=U,X.render=Q8),H&&H.sub(X),X.props=S,X.state||(X.state={}),X.context=w,X.__n=J,L=X.__d=!0,X.__h=[]),X.__s==null&&(X.__s=X.state),U.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=o0({},X.__s)),o0(X.__s,U.getDerivedStateFromProps(S,X.__s))),E=X.props,F=X.state,L)U.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(U.getDerivedStateFromProps==null&&S!==E&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(S,w),!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(S,X.__s,w)===!1||$.__v===Z.__v){X.props=S,X.state=X.__s,$.__v!==Z.__v&&(X.__d=!1),X.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(u){u&&(u.__=$)}),X.__h.length&&W.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(S,X.__s,w),X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(E,F,D)})}X.context=w,X.props=S,X.state=X.__s,(N=K_.__r)&&N($),X.__d=!1,X.__v=$,X.__P=_,N=X.render(X.props,X.state,X.context),X.state=X.__s,X.getChildContext!=null&&(J=o0(o0({},J),X.getChildContext())),L||X.getSnapshotBeforeUpdate==null||(D=X.getSnapshotBeforeUpdate(E,F)),R=N!=null&&N.type===S2&&N.key==null?N.props.children:N,O3(_,Array.isArray(R)?R:[R],$,Z,J,j,Y,W,G,Q),X.base=$.__e,$.__h=null,X.__h.length&&W.push(X),M&&(X.__E=X.__=null),X.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=G8(Z.__e,$,Z,J,j,Y,W,Q);(N=K_.diffed)&&N($)}catch(u){$.__v=null,(Q||Y!=null)&&($.__e=G,$.__h=!!Q,Y[Y.indexOf(G)]=null),K_.__e(u,$,Z)}}function z3(_,$){K_.__c&&K_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){K_.__e(J,Z.__v)}})}function G8(_,$,Z,J,j,Y,W,G){var Q,N,X,L=Z.props,E=$.props,F=$.type,D=0;if(F==="svg"&&(j=!0),Y!=null){for(;D<Y.length;D++)if((Q=Y[D])&&(Q===_||(F?Q.localName==F:Q.nodeType==3))){_=Q,Y[D]=null;break}}if(_==null){if(F===null)return document.createTextNode(E);_=j?document.createElementNS("http://www.w3.org/2000/svg",F):document.createElement(F,E.is&&E),Y=null,G=!1}if(F===null)L===E||G&&_.data===E||(_.data=E);else{if(Y=Y&&I2.call(_.childNodes),N=(L=Z.props||M2).dangerouslySetInnerHTML,X=E.dangerouslySetInnerHTML,!G){if(Y!=null)for(L={},D=0;D<_.attributes.length;D++)L[_.attributes[D].name]=_.attributes[D].value;(X||N)&&(X&&(N&&X.__html==N.__html||X.__html===_.innerHTML)||(_.innerHTML=X&&X.__html||""))}if(function(M,S,H,w,R){var U;for(U in H)U==="children"||U==="key"||U in S||y2(M,U,null,H[U],w);for(U in S)R&&typeof S[U]!="function"||U==="children"||U==="key"||U==="value"||U==="checked"||H[U]===S[U]||y2(M,U,S[U],H[U],w)}(_,E,L,j,G),X)$.__k=[];else if(D=$.props.children,O3(_,Array.isArray(D)?D:[D],$,Z,J,j&&F!=="foreignObject",Y,W,Y?Y[0]:Z.__k&&Y2(Z,0),G),Y!=null)for(D=Y.length;D--;)Y[D]!=null&&Q3(Y[D]);G||(("value"in E)&&(D=E.value)!==void 0&&(D!==_.value||F==="progress"&&!D)&&y2(_,"value",D,L.value,!1),("checked"in E)&&(D=E.checked)!==void 0&&D!==_.checked&&y2(_,"checked",D,L.checked,!1))}return _}function H3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){K_.__e(J,Z)}}function U3(_,$,Z){var J,j;if(K_.unmount&&K_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||H3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){K_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(j=0;j<J.length;j++)J[j]&&U3(J[j],$,typeof _.type!="function");Z||_.__e==null||Q3(_.__e),_.__e=_.__d=void 0}function Q8(_,$,Z){return this.constructor(_,Z)}function L3(_,$,Z){var J,j,Y;K_.__&&K_.__(_,$),j=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],V1($,_=(!J&&Z||$).__k=N3(S2,null,[_]),j||M2,M2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:j?null:$.firstChild?I2.call($.childNodes):null,Y,!J&&Z?Z:j?j.__e:$.firstChild,J),z3(Y,_)}I2=G3.slice,K_={__e:function(_,$){for(var Z,J,j;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),j=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),j=Z.__d),j)return Z.__E=Z}catch(Y){_=Y}throw _}},W3=0,A2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=o0({},this.state),typeof _=="function"&&(_=_(o0({},Z),this.props)),_&&o0(Z,_),_!=null&&this.__v&&($&&this.__h.push($),d1(this))},A2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),d1(this))},A2.prototype.render=S2,z2=[],K3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b2.__r=0,W8=0;var x2,E0,e1,H2=0,Q1=[],_3=K_.__b,$3=K_.__r,Z3=K_.diffed,J3=K_.__c,Y3=K_.unmount;function O1(_,$){K_.__h&&K_.__h(E0,_,H2||$),H2=0;var Z=E0.__H||(E0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function v(_){return H2=1,N8(E3,_)}function N8(_,$,Z){var J=O1(x2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):E3(void 0,$),function(j){var Y=J.t(J.__[0],j);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=E0),J.__}function g(_,$){var Z=O1(x2++,3);!K_.__s&&F3(Z.__H,$)&&(Z.__=_,Z.__H=$,E0.__H.__h.push(Z))}function y(_){return H2=5,x0(function(){return{current:_}},[])}function x0(_,$){var Z=O1(x2++,7);return F3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function b(_,$){return H2=8,x0(function(){return _},$)}function V8(){Q1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(P2),_.__H.__h.forEach(N1),_.__H.__h=[]}catch($){_.__H.__h=[],K_.__e($,_.__v)}}),Q1=[]}K_.__b=function(_){E0=null,_3&&_3(_)},K_.__r=function(_){$3&&$3(_),x2=0;var $=(E0=_.__c).__H;$&&($.__h.forEach(P2),$.__h.forEach(N1),$.__h=[])},K_.diffed=function(_){Z3&&Z3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(Q1.push($)!==1&&e1===K_.requestAnimationFrame||((e1=K_.requestAnimationFrame)||function(Z){var J,j=function(){clearTimeout(Y),j3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(j,100);j3&&(J=requestAnimationFrame(j))})(V8)),E0=void 0},K_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(P2),Z.__h=Z.__h.filter(function(J){return!J.__||N1(J)})}catch(J){$.some(function(j){j.__h&&(j.__h=[])}),$=[],K_.__e(J,Z.__v)}}),J3&&J3(_,$)},K_.unmount=function(_){Y3&&Y3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(P2)}catch(Z){K_.__e(Z,$.__v)}};var j3=typeof requestAnimationFrame=="function";function P2(_){var $=E0;typeof _.__c=="function"&&_.__c(),E0=$}function N1(_){var $=E0;_.__c=_.__(),E0=$}function F3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function E3(_,$){return typeof $=="function"?$(_):$}var D3=function(_,$,Z,J){var j;$[0]=0;for(var Y=1;Y<$.length;Y++){var W=$[Y++],G=$[Y]?($[0]|=W?1:2,Z[$[Y++]]):$[++Y];W===3?J[0]=G:W===4?J[1]=Object.assign(J[1]||{},G):W===5?(J[1]=J[1]||{})[$[++Y]]=G:W===6?J[1][$[++Y]]+=G+"":W?(j=_.apply(G,D3(_,G,Z,["",null])),J.push(j),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=j)):J.push(G)}return J},X3=new Map,B=function(_){var $=X3.get(this);return $||($=new Map,X3.set(this,$)),($=D3(this,$.get(_)||($.set(_,$=function(Z){for(var J,j,Y=1,W="",G="",Q=[0],N=function(E){Y===1&&(E||(W=W.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,E,W):Y===3&&(E||W)?(Q.push(3,E,W),Y=2):Y===2&&W==="..."&&E?Q.push(4,E,0):Y===2&&W&&!E?Q.push(5,0,!0,W):Y>=5&&((W||!E&&Y===5)&&(Q.push(Y,0,W,j),Y=6),E&&(Q.push(Y,E,0,j),Y=6)),W=""},X=0;X<Z.length;X++){X&&(Y===1&&N(),N(X));for(var L=0;L<Z[X].length;L++)J=Z[X][L],Y===1?J==="<"?(N(),Q=[Q],Y=3):W+=J:Y===4?W==="--"&&J===">"?(Y=1,W=""):W=J+W[0]:G?J===G?G="":W+=J:J==='"'||J==="'"?G=J:J===">"?(N(),Y=1):Y&&(J==="="?(Y=5,j=W,W=""):J==="/"&&(Y<5||Z[X][L+1]===">")?(N(),Y===3&&(Q=Q[0]),Y=Q,(Q=Q[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(N(),Y=2):W+=J),Y===3&&W==="!--"&&(Y=4,Q=Q[0])}return N(),Q}(_)),$),arguments,[])).length>1?$:$[0]}.bind(N3);async function r_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function T2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return r_(Z)}async function k3(_,$=50,Z=0){return r_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function C3(_,$=50,Z=0){return r_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function y3(_){return r_(`/thread/${_}`)}async function w3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return r_(Z,{method:"DELETE"})}async function q1(_,$,Z=null,J=[],j=null){return r_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:j})})}async function A3(){return r_("/agents")}async function P3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/status${$}`)}async function B1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/context${$}`)}async function z1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/queue-state${$}`)}async function a0(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/models${$}`)}async function M3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function H1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function b3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function I3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r_(Z)}async function S3(_,$,Z){return r_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function j2(_){return`/media/${_}`}function x3(_){return`/media/${_}/thumbnail`}async function f2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function v2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return r_(J)}async function T3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",j=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return r_(j)}async function f3(_){return r_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function U1(_,$="",Z={}){let J=new FormData;J.append("file",_);let j=new URLSearchParams;if($)j.set("path",$);if(Z.overwrite)j.set("overwrite","1");let Y=j.toString(),W=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+W,{method:"POST",body:J});if(!G.ok){let Q=await G.json().catch(()=>({error:"Upload failed"})),N=Error(Q.error||`HTTP ${G.status}`);throw N.status=G.status,N.code=Q.code,N}return G.json()}async function v3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let j=await J.json().catch(()=>({error:"Create failed"})),Y=Error(j.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=j.code,Y}return J.json()}async function u3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),j=Error(J.error||`HTTP ${Z.status}`);throw j.status=Z.status,j.code=J.code,j}return Z.json()}async function R3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),j=Error(J.error||`HTTP ${Z.status}`);throw j.status=Z.status,j.code=J.code,j}return Z.json()}async function c3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r_($,{method:"DELETE"})}async function u2(_,$=!1){return r_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function m3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class F1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),j=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},j),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function T0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function v_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function X2(_,$=!1){let Z=T0(_);if(Z===null)return $;return Z==="true"}function W2(_,$=null){let Z=T0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function n0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:j,removeTitle:Y="Remove",icon:W="file"}){let G=`${_}-file-pill`,Q=`${_}-file-name`,N=`${_}-file-remove`,X=W==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${Z||$} onClick=${j}>
      ${X}
      <span class=${Q}>${$}</span>
      ${J&&B`
        <button
          class=${N}
          onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var q8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function B8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,j=Z!=null?`Context: ${g3(Z)} / ${g3(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,W=2*Math.PI*7,G=$/100*W,Q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${j}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${Q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${W}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function g3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function p3({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:j,onExitSearch:Y,fileRefs:W=[],onRemoveFileRef:G,onClearFileRefs:Q,messageRefs:N=[],onRemoveMessageRef:X,onClearMessageRefs:L,activeModel:E=null,modelUsage:F=null,thinkingLevel:D=null,supportsThinking:M=!1,contextUsage:S=null,notificationsEnabled:H=!1,notificationPermission:w="default",onToggleNotifications:R,onModelChange:U,onModelStateChange:u,activeEditorPath:t=null,onAttachEditorFile:a,onOpenFilePill:$_,followupQueueCount:N_=0,onMessageResponse:__}){let[W_,e]=v(""),[o,Y_]=v(""),[i,d]=v(!1),[G_,O_]=v([]),[j_,w_]=v(!1),[Z_,Q_]=v([]),[U_,B_]=v(0),[M_,V_]=v(!1),[H_,R_]=v(!1),[b_,A_]=v(!1),[u_,D_]=v([]),[c_,d_]=v(!1),k_=y(null),I_=y(null),W0=y(null),K0=y(null),G0=y(0),f0=200,B0=(z)=>{let x=new Set,s=[];for(let X_ of z||[]){if(typeof X_!=="string")continue;let L_=X_.trim();if(!L_||x.has(L_))continue;x.add(L_),s.push(L_)}return s},C_=()=>{let z=T0("piclaw_compose_history");if(!z)return[];try{let x=JSON.parse(z);if(!Array.isArray(x))return[];return B0(x)}catch{return[]}},g_=(z)=>{v_("piclaw_compose_history",JSON.stringify(z))},Q0=y(C_()),A=y(-1),r=y(""),y_=!i&&(W_.trim()||G_.length>0||W.length>0||N.length>0),S_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),N0=typeof window<"u"&&typeof Notification<"u",z0=typeof window<"u"?Boolean(window.isSecureContext):!1,H0=N0&&z0&&w!=="denied",t_=w==="granted"&&H,P0=t_?"Disable notifications":"Enable notifications",Y0=E||"",j0=M&&D?` (${D})`:"",p_=j0.trim()?`${D}`:"",r0=typeof F?.hint_short==="string"?F.hint_short.trim():"",g0=[p_||null,r0||null].filter(Boolean).join(" • "),X0=[Y0?`Current model: ${Y0}${j0}`:null,F?.plan?`Plan: ${F.plan}`:null,r0||null,F?.primary?.reset_description||null,F?.secondary?.reset_description||null].filter(Boolean),u0=H_?"Switching model…":X0.join(" • ")||`Current model: ${Y0}${j0} (tap to open model picker)`,e_=(z)=>{if(!z||typeof z!=="object")return;let x=z.model??z.current;if(typeof u==="function")u({model:x??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(x&&typeof U==="function")U(x)},M0=(z)=>{let x=z||k_.current;if(!x)return;x.style.height="auto",x.style.height=`${x.scrollHeight}px`,x.style.overflowY="hidden"},_0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){V_(!1),Q_([]);return}let x=z.toLowerCase().split(" ")[0];if(x.length<1){V_(!1),Q_([]);return}let s=q8.filter((X_)=>X_.name.startsWith(x)||X_.name.replace(/-/g,"").startsWith(x.replace(/-/g,"")));if(s.length>0&&!(s.length===1&&s[0].name===x))Q_(s),B_(0),V_(!0);else V_(!1),Q_([])},V0=(z)=>{let x=W_,s=x.indexOf(" "),X_=s>=0?x.slice(s):"",L_=z.name+X_;e(L_),V_(!1),Q_([]),requestAnimationFrame(()=>{let f_=k_.current;if(!f_)return;let z_=L_.length;f_.selectionStart=z_,f_.selectionEnd=z_,f_.focus()})},O0=(z)=>{if(Z)Y_(z);else e(z),_0(z);requestAnimationFrame(()=>M0())},o_=(z)=>{let x=Z?o:W_,s=x&&!x.endsWith(`
`)?`
`:"",X_=`${x}${s}${z}`.trimStart();O0(X_)},U0=(z)=>{let x=z?.command?.model_label;if(x)return x;let s=z?.command?.message;if(typeof s==="string"){let X_=s.match(/•\s+([^\n]+?)\s+\(current\)/);if(X_?.[1])return X_[1].trim()}return null},b0=async(z)=>{if(Z||i||H_)return;R_(!0);try{let x=await q1("default",z,null,[]),s=U0(x);e_({model:s??E??null,thinking_level:x?.command?.thinking_level,supports_thinking:x?.command?.supports_thinking});try{let X_=await a0();if(X_)e_(X_)}catch{}return _?.(),!0}catch(x){return console.error("Failed to switch model:",x),alert("Failed to switch model: "+x.message),!1}finally{R_(!1)}},d0=async()=>{await b0("/cycle-model")},p0=async(z)=>{if(!z||H_)return;if(await b0(`/model ${z}`))A_(!1)},m_=(z)=>{z.preventDefault(),z.stopPropagation(),A_((x)=>!x)},s_=async(z)=>{let x=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:W_,s=typeof x==="string"?x:"";if(!s.trim()&&G_.length===0&&W.length===0&&N.length===0)return;d(!0);try{let X_=[];for(let F_ of G_){let P_=await M3(F_);X_.push(P_.id)}let L_=s.trim(),f_=W.length?`Files:
${W.map((F_)=>`- ${F_}`).join(`
`)}`:"",z_=N.length?`Referenced messages:
${N.map((F_)=>`- message:${F_}`).join(`
`)}`:"",h_=X_.length?`Images:
${X_.map((F_,P_)=>{let t0=G_[P_]?.name||`image-${P_+1}`;return`- attachment:${F_} (${t0})`}).join(`
`)}`:"",I0=[L_,f_,z_,h_].filter(Boolean).join(`

`),i_=await q1("default",I0,null,X_,submitMode);if(__?.(i_),i_?.command){e_({model:i_.command.model_label??E??null,thinking_level:i_.command.thinking_level,supports_thinking:i_.command.supports_thinking});try{let F_=await a0();if(F_)e_(F_)}catch{}}if(L_){let F_=Q0.current,P_=B0(F_.filter((C0)=>C0!==L_));if(P_.push(L_),P_.length>200)P_.splice(0,P_.length-200);Q0.current=P_,g_(P_),A.current=-1,r.current=""}e(""),O_([]),Q?.(),L?.(),_?.()}catch(X_){console.error("Failed to post:",X_),alert("Failed to post: "+X_.message)}finally{d(!1)}},$0=(z)=>{if(z.isComposing)return;if(Z&&z.key==="Escape"){z.preventDefault(),Y_(""),Y?.();return}if(M_&&Z_.length>0){let x=k_.current?.value??(Z?o:W_);if(!String(x||"").startsWith("/"))V_(!1),Q_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),B_((s)=>(s+1)%Z_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),B_((s)=>(s-1+Z_.length)%Z_.length);return}if(z.key==="Tab"){z.preventDefault(),V0(Z_[U_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(k_.current?.value??(Z?o:W_)).includes(" ")){z.preventDefault();let L_=Z_[U_];V_(!1),Q_([]),s_(L_.name);return}}if(z.key==="Escape"){z.preventDefault(),V_(!1),Q_([]);return}}}if(!Z&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let x=k_.current;if(!x)return;let s=x.value||"",X_=x.selectionStart===0&&x.selectionEnd===0,L_=x.selectionStart===s.length&&x.selectionEnd===s.length;if(z.key==="ArrowUp"&&X_||z.key==="ArrowDown"&&L_){let f_=Q0.current;if(!f_.length)return;z.preventDefault();let z_=A.current;if(z.key==="ArrowUp"){if(z_===-1)r.current=s,z_=f_.length-1;else if(z_>0)z_-=1;A.current=z_,O0(f_[z_]||"")}else{if(z_===-1)return;if(z_<f_.length-1)z_+=1,A.current=z_,O0(f_[z_]||"");else A.current=-1,O0(r.current||""),r.current=""}requestAnimationFrame(()=>{let h_=k_.current;if(!h_)return;let I0=h_.value.length;h_.selectionStart=I0,h_.selectionEnd=I0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let x=k_.current?.value??(Z?o:W_);if(Z){if(x.trim())J?.(x.trim())}else s_(x,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let x=k_.current?.value??(Z?o:W_);if(Z){if(x.trim())J?.(x.trim())}else s_(x)}},T_=(z)=>{let x=Array.from(z||[]).filter((s)=>s&&s.type&&s.type.startsWith("image/"));if(!x.length)return;O_((s)=>[...s,...x])},n_=(z)=>{T_(z.target.files),z.target.value=""},Z0=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),G0.current+=1,w_(!0)},L0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),G0.current=Math.max(0,G0.current-1),G0.current===0)w_(!1)},D0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";w_(!0)},k0=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),G0.current=0,w_(!1),T_(z.dataTransfer?.files||[])},h0=(z)=>{if(Z)return;let x=z.clipboardData?.items;if(!x||!x.length)return;let s=[];for(let X_ of x){if(X_.kind!=="file")continue;let L_=X_.getAsFile?.();if(L_)s.push(L_)}if(s.length>0)z.preventDefault(),T_(s)},q0=(z)=>{O_((x)=>x.filter((s,X_)=>X_!==z))},N2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:x,longitude:s,accuracy:X_}=z.coords,L_=`${x.toFixed(5)}, ${s.toFixed(5)}`,f_=Number.isFinite(X_)?` ±${Math.round(X_)}m`:"",z_=`https://maps.google.com/?q=${x},${s}`,h_=`Location: ${L_}${f_} ${z_}`;o_(h_)},(z)=>{let x=z?.message||"Unable to retrieve location.";alert(`Location error: ${x}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!b_)return;d_(!0),a0().then((z)=>{let x=Array.isArray(z?.models)?z.models.filter((s)=>typeof s==="string"&&s.trim().length>0):[];D_(x),e_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),D_([])}).finally(()=>{d_(!1)})},[b_,E]),g(()=>{if(Z)A_(!1)},[Z]),g(()=>{if(!b_)return;let z=(x)=>{let s=W0.current,X_=K0.current,L_=x.target;if(s&&s.contains(L_))return;if(X_&&X_.contains(L_))return;A_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[b_]);let R0=(z)=>{let x=z.target.value;M0(z.target),O0(x)};return g(()=>{requestAnimationFrame(()=>M0())},[W_,o,Z]),B`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${j_?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${D0}
                onDragLeave=${L0}
                onDrop=${k0}
            >
                <div class="compose-input-main">
                    ${(W.length>0||G_.length>0||N.length>0)&&B`
                        <div class="compose-file-refs">
                            ${N.map((z)=>{return B`
                                    <${n0}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>X?.(z)}
                                    />
                                `})}
                            ${W.map((z)=>{let x=z.split("/").pop()||z;return B`
                                    <${n0}
                                        prefix="compose"
                                        label=${x}
                                        title=${z}
                                        onClick=${()=>$_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${G_.map((z,x)=>{let s=z?.name||`image-${x+1}`;return B`
                                    <${n0}
                                        key=${s+x}
                                        prefix="compose"
                                        label=${s}
                                        title=${s}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q0(x)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${k_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?o:W_}
                        onInput=${R0}
                        onKeyDown=${$0}
                        onPaste=${h0}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${i}
                        rows="1"
                    />
                    ${M_&&Z_.length>0&&B`
                        <div class="slash-autocomplete" ref=${I_}>
                            ${Z_.map((z,x)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${x===U_?" active":""}`}
                                    onMouseDown=${(s)=>{s.preventDefault(),V0(z)}}
                                    onMouseEnter=${()=>B_(x)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${b_&&!Z&&B`
                        <div class="compose-model-popup" ref=${W0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${c_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!c_&&u_.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!c_&&u_.map((z)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${E===z?" active":""}`}
                                        onClick=${()=>{p0(z)}}
                                        disabled=${H_}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d0()}}
                                    disabled=${H_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&(E||N_>0)&&B`
                    <div class="compose-meta-row">
                        ${!Z&&E&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${K0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${u0}
                                    aria-label="Open model picker"
                                    onClick=${m_}
                                    disabled=${i||H_}
                                >
                                    ${H_?"Switching…":Y0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!H_&&g0&&B`
                                        <span class="compose-model-usage-hint" title=${u0}>
                                            ${g0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!Z&&N_>0&&B`
                            <div class="compose-queue-indicator" title="Queued follow-up messages waiting for an assistant turn">
                                <span class="compose-queue-dot" aria-hidden="true"></span>
                                <span>${N_} queued follow-up${N_>1?"s":""}</span>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&S&&S.percent!=null&&B`
                        <${B8} usage=${S} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:j}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${S_&&!Z&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${N2}
                            title="Share location"
                            type="button"
                            disabled=${i}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${H0&&!Z&&B`
                        <button
                            class=${`icon-btn notification-btn${t_?" active":""}`}
                            onClick=${R}
                            title=${P0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&B`
                        ${t&&a&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${a}
                                title=${`Attach open file: ${t}`}
                                type="button"
                                disabled=${i||W.includes(t)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${n_} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{s_()}}
                            disabled=${!y_}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                        <button 
                            class="icon-btn send-btn compose-steer-btn"
                            type="button"
                            onClick=${()=>{s_(null,"steer")}}
                            disabled=${!y_}
                            title="Steer current response now (Ctrl/Cmd+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L4 21l8-5 8 5L12 3Z" /></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var i3="piclaw_theme",k1="piclaw_tint",m2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},z8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},h3={default:{label:"Default",mode:"auto",light:m2,dark:z8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},H8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],g2={theme:"default",tint:null},l3="light",E1=!1;function o3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function K2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,j=parseInt(J,16);return{r:j>>16&255,g:j>>8&255,b:j&255,hex:`#${J.toLowerCase()}`}}function U8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let j=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!j)return null;let Y=parseInt(j[1],10),W=parseInt(j[2],10),G=parseInt(j[3],10);if(![Y,W,G].every((N)=>Number.isFinite(N)))return null;let Q=`#${[Y,W,G].map((N)=>N.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:W,b:G,hex:Q}}function n3(_){return K2(_)||U8(_)}function U2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),j=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${j} ${Y})`}function D1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function r3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function C1(_){return h3[_]||h3.default}function L8(_){return _.mode==="auto"?r3():_.mode}function F8(_,$){let Z=C1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||m2}function E8(_,$,Z){let J=n3($);if(!J)return _;let j=K2(_.bgPrimary),Y=K2(_.bgSecondary),W=K2(_.bgHover),G=K2(_.borderColor);if(!j||!Y||!W||!G)return _;let N=K2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U2(j,J,0.08),bgSecondary:U2(Y,J,0.12),bgHover:U2(W,J,0.16),borderColor:U2(G,J,0.08),accent:J.hex,accentHover:N?U2(J,N,0.18):J.hex}}function D8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,j=n3(J),Y=j?D1(j,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,W=j?D1(j,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=j?D1(j,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":W,"--accent-soft-strong":G,"--danger-color":_.danger||m2.danger,"--success-color":_.success||m2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(Q).forEach(([N,X])=>{if(X)Z.style.setProperty(N,X)})}function k8(){if(typeof document>"u")return;let _=document.documentElement;H8.forEach(($)=>_.style.removeProperty($))}function R2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function C8(_,$){if(typeof document>"u")return;let Z=R2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=R2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let j=R2("msapplication-navbutton-color");if(j&&_)j.setAttribute("content",_);let Y=R2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function y8(){if(typeof window>"u")return;let _={...g2,mode:l3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function y1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=o3(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,j=C1(Z),Y=L8(j),W=F8(Z,Y);g2={theme:Z,tint:J},l3=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let Q=W;if(Z==="default"&&J)Q=E8(W,J,Y);if(Z==="default"&&!J)k8();else D8(Q,Y);if(C8(Q.bgPrimary,Y),y8(),$.persist!==!1)if(v_(i3,Z),J)v_(k1,J);else v_(k1,"")}function c2(){if(C1(g2.theme).mode!=="auto")return;y1(g2,{persist:!1})}function d3(){if(typeof window>"u")return()=>{};let _=o3(T0(i3)||"default"),$=T0(k1),Z=$?$.trim():null;if(y1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!E1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",c2);else if(J.addListener)J.addListener(c2);return E1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",c2);else if(J.removeListener)J.removeListener(c2);E1=!1}}return()=>{}}function s3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;y1({theme:Z||"default",tint:J},{persist:!0})}function a3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return r3()}var p2=/#(\w+)/g,w8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),A8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),P8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),M8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},b8=new Set(["http:","https:","mailto:",""]);function t3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function G2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!b8.has(J.protocol))return null;return J.href}catch{return null}}function e3(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],j=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=j.nextNode())J.push(Y);for(let W of J){let G=W.tagName.toLowerCase();if(!A8.has(G)){let N=W.parentNode;if(!N)continue;while(W.firstChild)N.insertBefore(W.firstChild,W);N.removeChild(W);continue}let Q=M8[G]||new Set;for(let N of Array.from(W.attributes)){let X=N.name.toLowerCase(),L=N.value;if(X.startsWith("on")){W.removeAttribute(N.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(Q.has(X)||P8.has(X)){if(X==="href"){let E=G2(L);if(!E)W.removeAttribute(N.name);else if(W.setAttribute(N.name,E),G==="a"&&!W.getAttribute("rel"))W.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let E=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(L):L,F=G2(E,{allowDataImage:G==="img"});if(!F)W.removeAttribute(N.name);else W.setAttribute(N.name,F)}continue}W.removeAttribute(N.name)}}return Z.body.innerHTML}function _4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function h2(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let j=_4(Z);if(j===Z)break;Z=j}return Z}function I8(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],j=[],Y=!1,W=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,W=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let Q=J.length;J.push(W.join(`
`)),j.push(`@@MERMAID_BLOCK_${Q}@@`),Y=!1,W=[];continue}if(Y)W.push(G);else j.push(G)}if(Y)j.push("```mermaid"),j.push(...W);return{text:j.join(`
`),blocks:J}}function S8(_){if(!_)return _;return h2(_,5)}function x8(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function T8(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function f8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let j=Number(J),Y=$[j]??"",W=S8(Y);return`<div class="mermaid-container" data-mermaid="${x8(W)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function $4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function Z4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),j=J.startsWith("/"),Y=j?J.slice(1).trim():J,Q=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!Q||!w8.has(Q))return $;if(Q==="br")return j?"":"<br>";if(j)return`</${Q}>`;return`<${Q}>`})}function J4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function Y4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),j;while(j=Z.nextNode()){if(!j.nodeValue)continue;let Y=J(j.nodeValue);if(Y!==j.nodeValue)j.nodeValue=Y}return $.body.innerHTML}function v8(_){if(!window.katex)return _;let $=(W)=>_4(W).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(W)=>{let G=[],Q=W.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(N)=>{let X=G.length;return G.push(N),`@@CODE_BLOCK_${X}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(N)=>{let X=G.length;return G.push(N),`@@CODE_INLINE_${X}@@`}),{html:Q,blocks:G}},J=(W,G)=>{if(!G.length)return W;return W.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,N)=>{let X=Number(N);return G[X]??""})},j=Z(_),Y=j.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(W,G,Q)=>{try{let N=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${N}`}catch(N){return`<span class="math-error" title="${t3(N.message)}">${W}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(W,G,Q)=>{if(/\s$/.test(Q))return W;try{let N=katex.renderToString($(Q),{displayMode:!1,throwOnError:!1});return`${G}${N}`}catch(N){return`${G}<span class="math-error" title="${t3(N.message)}">$${Q}$</span>`}}),J(Y,j.blocks)}function u8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],j;while(j=Z.nextNode())J.push(j);for(let Y of J){let W=Y.nodeValue;if(!W)continue;if(p2.lastIndex=0,!p2.test(W))continue;p2.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let Q=W.split(p2);if(Q.length<=1)continue;let N=$.createDocumentFragment();Q.forEach((X,L)=>{if(L%2===1){let E=$.createElement("a");E.setAttribute("href","#"),E.className="hashtag",E.setAttribute("data-hashtag",X),E.textContent=`#${X}`,N.appendChild(E)}else N.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(N,Y)}return $.body.innerHTML}function R8(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],j=!1;for(let Y of Z){if(!j&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){j=!0,J.push("$$");continue}if(j&&Y.trim().match(/^```\s*$/)){j=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function Q2(_,$,Z={}){if(!_)return"";let J=R8(_),{text:j,blocks:Y}=I8(J),W=h2(j,2),Q=$4(W).replace(/</g,"&lt;").replace(/>/g,"&gt;"),N=Z4(Q),X=window.marked?marked.parse(N,{headerIds:!1,mangle:!1}):N.replace(/\n/g,"<br>");return X=J4(X),X=Y4(X),X=v8(X),X=u8(X),X=f8(X,Y),X=e3(X,Z),X}function j4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=h2($,2),j=$4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Z4(j),W=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return W=J4(W),W=Y4(W),W=e3(W),W}async function i2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,j=a3()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let W of Y)try{let G=W.dataset.mermaid,Q=T8(G||""),N=h2(Q,2),X=await $(N,{...j,transparent:!0});W.innerHTML=X,W.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${G.message}`,W.innerHTML="",W.appendChild(Q),W.removeAttribute("data-mermaid")}}var X4="PiClaw";function w1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),j=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%j.length,W=j[Y],G=Z.trim().toLowerCase(),Q=typeof $==="string"?$.trim():"",X=(Q?Q:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:W,image:X}}function W4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function K4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function G4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,W=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",Q=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(Q&&(G||W&&W!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let j=Math.abs(J)%$.length;return $[j]}function Q4({status:_,draft:$,plan:Z,thought:J,pendingRequest:j,intent:Y,turnId:W,steerQueued:G,onPanelToggle:Q}){let L=(Z_)=>{if(!Z_)return{text:"",totalLines:0,fullText:""};if(typeof Z_==="string"){let M_=Z_,V_=M_?M_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:M_,totalLines:V_,fullText:M_}}let Q_=Z_.text||"",U_=Z_.fullText||Z_.full_text||Q_,B_=Number.isFinite(Z_.totalLines)?Z_.totalLines:U_?U_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q_,totalLines:B_,fullText:U_}},E=160,F=(Z_)=>{if(!Z_)return 1;return Math.max(1,Math.ceil(Z_.length/160))},D=(Z_,Q_,U_)=>{let B_=(Z_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!B_)return{text:"",omitted:0,totalLines:Number.isFinite(U_)?U_:0,visibleLines:0};let M_=B_.split(`
`),V_=M_.length>Q_?M_.slice(0,Q_).join(`
`):B_,H_=Number.isFinite(U_)?U_:M_.reduce((A_,u_)=>A_+F(u_),0),R_=V_?V_.split(`
`).reduce((A_,u_)=>A_+F(u_),0):0,b_=Math.max(H_-R_,0);return{text:V_,omitted:b_,totalLines:H_,visibleLines:R_}},M=L(Z),S=L(J),H=L($),w=Boolean(M.text)||M.totalLines>0,R=Boolean(S.text)||S.totalLines>0,U=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!U&&!w&&!R&&!j&&!Y)return null;let[u,t]=v(new Set),a=(Z_)=>t((Q_)=>{let U_=new Set(Q_),B_=!U_.has(Z_);if(B_)U_.add(Z_);else U_.delete(Z_);if(typeof Q==="function")Q(Z_,B_);return U_});g(()=>{t(new Set)},[W]);let $_=_?.turn_id||W,N_=G4($_),__=G?"turn-dot turn-dot-queued":"turn-dot",W_=(Z_)=>Z_,e=Boolean(_?.last_activity||_?.lastActivity),o=Y?.kind||"info",Y_=o==="warning"?"#f59e0b":o==="error"?"var(--danger-color)":o==="success"?"var(--success-color)":N_,i="",d=_?.title,G_=_?.status;if(_?.type==="plan")i=d?`Planning: ${d}`:"Planning...";else if(_?.type==="tool_call")i=d?`Running: ${d}`:"Running tool...";else if(_?.type==="tool_status")i=d?`${d}: ${G_||"Working..."}`:G_||"Working...";else if(_?.type==="error")i=d||"Agent error";else i=d||G_||"Working...";if(e)i="Last activity just now";let O_=({panelTitle:Z_,text:Q_,fullText:U_,totalLines:B_,maxLines:M_,titleClass:V_,panelKey:H_})=>{let R_=u.has(H_),b_=U_||Q_||"",A_=typeof M_==="number",u_=R_&&A_,D_=A_?D(b_,M_,B_):{text:b_||"",omitted:0,totalLines:Number.isFinite(B_)?B_:0};if(!b_&&!(Number.isFinite(D_.totalLines)&&D_.totalLines>0))return null;let c_=`agent-thinking-body${A_?" agent-thinking-body-collapsible":""}`,d_=A_?`--agent-thinking-collapsed-lines: ${M_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${R_?"true":"false"}
                data-collapsible=${A_?"true":"false"}
                style=${N_?`--turn-color: ${N_};`:""}
            >
                <div class="agent-thinking-title ${V_||""}">
                    ${N_&&B`<span class=${__} aria-hidden="true"></span>`}
                    ${Z_}
                    ${u_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${Z_} panel`}
                            onClick=${()=>a(H_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${c_}
                    style=${d_}
                    dangerouslySetInnerHTML=${{__html:j4(b_)}}
                />
                ${!R_&&D_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>a(H_)}>
                        ▸ ${D_.omitted} more lines
                    </button>
                `}
                ${R_&&D_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>a(H_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},j_=j?.tool_call?.title,w_=j_?`Awaiting approval: ${j_}`:"Awaiting approval";return B`
        <div class="agent-status-panel">
            ${Y&&B`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${Y_?`--turn-color: ${Y_};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${Y_&&B`<span class=${__} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&B`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${j&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${N_?`--turn-color: ${N_};`:""}>
                    <span class=${__} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${w_}</span>
                </div>
            `}
            ${w&&O_({panelTitle:W_("Planning"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,panelKey:"plan"})}
            ${R&&O_({panelTitle:W_("Thoughts"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&O_({panelTitle:W_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&B`
                <div class=${`agent-status${e?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${N_?`--turn-color: ${N_};`:""}>
                    ${N_&&B`<span class=${__} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!e&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${i}</span>
                </div>
            `}
        </div>
    `}function N4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:j}=_,Y=J?.title||"Agent Request",W=J?.kind||"other",G=J?.rawInput||{},Q=G.command||G.commands&&G.commands[0]||null,N=G.diff||null,X=G.fileName||G.path||null,L=J?.description||G.description||G.explanation||null,F=(Array.isArray(J?.locations)?J.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),D=Array.from(new Set([X,...F].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:j});let M=async(w)=>{try{await H1(Z,w),$()}catch(R){console.error("Failed to respond to agent request:",R)}},S=async()=>{try{await b3(Y,`Auto-approved: ${Y}`),await H1(Z,"approved"),$()}catch(w){console.error("Failed to add to whitelist:",w)}},H=j&&j.length>0;return B`
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
                ${(L||Q||N||D.length>0)&&B`
                    <div class="agent-request-body">
                        ${L&&B`
                            <div class="agent-request-description">${L}</div>
                        `}
                        ${D.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((w,R)=>B`<li key=${R}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Q&&B`
                            <pre class="agent-request-command">${Q}</pre>
                        `}
                        ${N&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${N}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?j.map((w)=>B`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>M(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>M("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>M("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${S}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function V4({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function O4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,j=J/1000,Y=86400000;if(J<Y){if(j<60)return"just now";if(j<3600)return`${Math.floor(j/60)}m`;return`${Math.floor(j/3600)}h`}if(J<5*Y){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${N}`}let W=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${W} ${G}`}function L2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function m0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function l2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function q4({src:_,onClose:$}){return g(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function c8({mediaId:_}){let[$,Z]=v(null);if(g(()=>{f2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",j=$.metadata?.size,Y=j?m0(j):"";return B`
        <a href=${j2(_)} download=${J} class="file-attachment" onClick=${(W)=>W.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${Y&&B`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function o2({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,j=J?l2(J):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&B`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${j&&B`
                <span class="content-annotation">Updated: ${j}</span>
            `}
        </div>
    `}function m8({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?m0(_.size):"",j=_.mime_type||"",Y=p8(j),W=G2(_.uri);return B`
        <a
            href=${W||"#"}
            class="resource-link"
            target=${W?"_blank":void 0}
            rel=${W?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&B`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${j&&B`<span>${j}</span>`}
                    ${J&&B`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function g8({block:_}){let[$,Z]=v(!1),J=_.uri||"Embedded resource",j=_.text||"",Y=Boolean(_.data),W=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&B`
                ${j&&B`<pre class="resource-embed-content">${j}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${W&&B`<span class="resource-embed-blob-meta">${W}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(L)=>L.charCodeAt(0))],{type:W||"application/octet-stream"}),N=URL.createObjectURL(Q),X=document.createElement("a");X.href=N,X.download=J.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(N)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function p8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function h8({preview:_}){let $=G2(_.url),Z=G2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",j=_.site_name;if(!j&&$)try{j=new URL($).hostname}catch{j=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${Z?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${J}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${j||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function i8(_,$){return typeof _==="string"?_:""}var l8=1800,o8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,n8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,r8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function d8(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function s8(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],j=(Y,W)=>{let G=W||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=n8,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=r8,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=o8,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let W=document.createElement("div");W.className="post-code-block",Y.parentNode?.insertBefore(W,Y),W.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",j(G,"idle"),W.appendChild(G);let Q=async(N)=>{N.preventDefault(),N.stopPropagation();let L=Y.querySelector("code")?.textContent||"",E=await d8(L);j(G,E?"success":"error");let F=Z.get(G);if(F)clearTimeout(F);let D=setTimeout(()=>{j(G,"idle"),Z.delete(G)},l8);Z.set(G,D)};G.addEventListener("click",Q),J.push(()=>{G.removeEventListener("click",Q);let N=Z.get(G);if(N)clearTimeout(N);if(W.parentNode)W.parentNode.insertBefore(Y,W),W.remove()})}),()=>{J.forEach((Y)=>Y())}}function a8(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let N=0;N<Z.length;N+=1)if(Z[N].trim()==="Files:"&&Z[N+1]&&/^\s*-\s+/.test(Z[N+1])){J=N;break}if(J===-1)return{content:_,fileRefs:[]};let j=[],Y=J+1;for(;Y<Z.length;Y+=1){let N=Z[Y];if(/^\s*-\s+/.test(N))j.push(N.replace(/^\s*-\s+/,"").trim());else if(!N.trim())break;else break}if(j.length===0)return{content:_,fileRefs:[]};let W=Z.slice(0,J),G=Z.slice(Y),Q=[...W,...G].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:j}}function t8(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let N=0;N<Z.length;N+=1)if(Z[N].trim()==="Referenced messages:"&&Z[N+1]&&/^\s*-\s+/.test(Z[N+1])){J=N;break}if(J===-1)return{content:_,messageRefs:[]};let j=[],Y=J+1;for(;Y<Z.length;Y+=1){let N=Z[Y];if(/^\s*-\s+/.test(N)){let L=N.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(L)j.push(L[1])}else if(!N.trim())break;else break}if(j.length===0)return{content:_,messageRefs:[]};let W=Z.slice(0,J),G=Z.slice(Y),Q=[...W,...G].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:j}}function e8(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let N=0;N<Z.length;N+=1)if(Z[N].trim()==="Images:"&&Z[N+1]&&/^\s*-\s+/.test(Z[N+1])){J=N;break}if(J===-1)return{content:_,attachments:[]};let j=[],Y=J+1;for(;Y<Z.length;Y+=1){let N=Z[Y];if(/^\s*-\s+/.test(N)){let X=N.replace(/^\s*-\s+/,"").trim(),L=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(L){let E=L[1],F=(L[2]||"").trim()||E;j.push({id:E,label:F,raw:X})}else j.push({id:null,label:X,raw:X})}else if(!N.trim())break;else break}if(j.length===0)return{content:_,attachments:[]};let W=Z.slice(0,J),G=Z.slice(Y),Q=[...W,...G].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:j}}function _6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(_6).sort((X,L)=>L.length-X.length),j=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),W=new DOMParser().parseFromString(_,"text/html"),G=W.createTreeWalker(W.body,NodeFilter.SHOW_TEXT),Q=[],N;while(N=G.nextNode())Q.push(N);for(let X of Q){let L=X.nodeValue;if(!L||!j.test(L)){j.lastIndex=0;continue}j.lastIndex=0;let E=X.parentElement;if(E&&E.closest("code, pre, script, style"))continue;let F=L.split(j).filter((M)=>M!=="");if(F.length===0)continue;let D=W.createDocumentFragment();for(let M of F)if(Y.test(M)){let S=W.createElement("mark");S.className="search-highlight-term",S.textContent=M,D.appendChild(S)}else D.appendChild(W.createTextNode(M));X.parentNode.replaceChild(D,X)}return W.body.innerHTML}function B4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:j,agentName:Y,agentAvatarUrl:W,userName:G,userAvatarUrl:Q,userAvatarBackground:N,onDelete:X,isThreadReply:L,isThreadPrev:E,isThreadNext:F,isRemoving:D,highlightQuery:M,onFileRef:S}){let[H,w]=v(null),R=y(null),U=_.data,u=U.type==="agent_response",t=G||"You",a=u?Y||X4:t,$_=u?w1(Y,W):w1(t,Q),N_=typeof N==="string"?N.trim().toLowerCase():"",__=!u&&$_.image&&(N_==="clear"||N_==="transparent"),W_=u&&Boolean($_.image),e=`background-color: ${__||W_?"transparent":$_.color}`,o=U.content_meta,Y_=Boolean(o?.truncated),i=Boolean(o?.preview),d=Y_&&!i,G_=Y_?{originalLength:Number.isFinite(o?.original_length)?o.original_length:U.content?U.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,O_=i8(U.content,U.link_previews),{content:j_,fileRefs:w_}=a8(O_),{content:Z_,messageRefs:Q_}=t8(j_),{content:U_,attachments:B_}=e8(Z_);O_=U_;let M_=Boolean(O_)&&!d,V_=typeof M==="string"?M.trim():"",H_=x0(()=>{if(!O_)return"";let A=Q2(O_,Z);return V_?$6(A,V_):A},[O_,V_]),R_=(A,r)=>{A.stopPropagation(),w(j2(r))},b_=(A)=>{A.stopPropagation(),X?.(_)},A_=(A,r)=>{let y_=new Set;if(!A||r.length===0)return{content:A,usedIds:y_};return{content:A.replace(/attachment:([^\s)"']+)/g,(N0,z0,v0,H0)=>{let t_=z0.replace(/^\/+/,""),Y0=r.find((p_)=>p_.name&&p_.name.toLowerCase()===t_.toLowerCase()&&!y_.has(p_.id))||r.find((p_)=>!y_.has(p_.id));if(!Y0)return N0;if(y_.add(Y0.id),H0.slice(Math.max(0,v0-2),v0)==="](")return`/media/${Y0.id}`;return Y0.name||"attachment"}),usedIds:y_}},u_=[],D_=[],c_=[],d_=[],k_=[],I_=[],W0=U.content_blocks||[],K0=U.media_ids||[],G0=0;if(W0.length>0)W0.forEach((A)=>{if(A?.type==="text"&&A.annotations)I_.push(A.annotations);if(A?.type==="resource_link")d_.push(A);else if(A?.type==="resource")k_.push(A);else if(A?.type==="file"){let r=K0[G0++];if(r)D_.push(r),c_.push({id:r,name:A?.name||A?.filename||A?.title})}else if(A?.type==="image"||!A?.type){let r=K0[G0++];if(r){let y_=typeof A?.mime_type==="string"?A.mime_type:void 0;u_.push({id:r,annotations:A?.annotations,mimeType:y_}),c_.push({id:r,name:A?.name||A?.filename||A?.title})}}});else if(K0.length>0)K0.forEach((A)=>{u_.push({id:A,annotations:null}),c_.push({id:A,name:null})});if(B_.length>0)B_.forEach((A)=>{if(!A?.id)return;let r=c_.find((y_)=>String(y_.id)===String(A.id));if(r&&!r.name)r.name=A.label});let{content:f0,usedIds:B0}=A_(O_,c_);O_=f0;let C_=u_.filter(({id:A})=>!B0.has(A)),g_=D_.filter((A)=>!B0.has(A)),Q0=B_.length>0?B_.map((A,r)=>({id:A.id||`attachment-${r+1}`,label:A.label||`attachment-${r+1}`})):c_.map((A,r)=>({id:A.id,label:A.name||`attachment-${r+1}`}));return g(()=>{if(!R.current)return;return i2(R.current),s8(R.current)},[H_]),B`
        <div id=${`post-${_.id}`} class="post ${u?"agent-post":""} ${L?"thread-reply":""} ${E?"thread-prev":""} ${F?"thread-next":""} ${D?"removing":""}" onClick=${$}>
            <div class="post-avatar ${u?"agent-avatar":""} ${$_.image?"has-image":""}" style=${e}>
                ${$_.image?B`<img src=${$_.image} alt=${a} />`:$_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${b_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${a}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(A)=>{if(A.preventDefault(),A.stopPropagation(),J)J(_.id)}}>${O4(_.timestamp)}</a>
                </div>
                ${d&&G_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${L2(G_.originalLength)} chars
                            ${G_.maxLength?B` • Display limit: ${L2(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${i&&G_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${L2(G_.maxLength)} of ${L2(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||Q_.length>0||Q0.length>0)&&B`
                    <div class="post-file-refs">
                        ${Q_.map((A)=>{let r=(y_)=>{if(y_.preventDefault(),y_.stopPropagation(),j)j(A);else{let S_=document.getElementById("post-"+A);if(S_)S_.scrollIntoView({behavior:"smooth",block:"center"}),S_.classList.add("post-highlight"),setTimeout(()=>S_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${A}`} class="post-msg-pill-link" onClick=${r}>
                                    <${n0}
                                        prefix="post"
                                        label=${"msg:"+A}
                                        title=${"Message "+A}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${w_.map((A)=>{let r=A.split("/").pop()||A;return B`
                                <${n0}
                                    prefix="post"
                                    label=${r}
                                    title=${A}
                                    onClick=${()=>S?.(A)}
                                />
                            `})}
                        ${Q0.map((A)=>B`
                            <${n0}
                                prefix="post"
                                label=${A.label}
                                title=${A.label}
                            />
                        `)}
                    </div>
                `}
                ${M_&&B`
                    <div 
                        ref=${R}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:H_}}
                        onClick=${(A)=>{if(A.target.classList.contains("hashtag")){A.preventDefault(),A.stopPropagation();let r=A.target.dataset.hashtag;if(r)Z?.(r)}else if(A.target.tagName==="IMG")A.preventDefault(),A.stopPropagation(),w(A.target.src)}}
                    />
                `}
                ${I_.length>0&&B`
                    ${I_.map((A,r)=>B`
                        <${o2} key=${r} annotations=${A} />
                    `)}
                `}
                ${C_.length>0&&B`
                    <div class="media-preview">
                        ${C_.map(({id:A,mimeType:r})=>{let S_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?j2(A):x3(A);return B`
                                <img 
                                    key=${A} 
                                    src=${S_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(N0)=>R_(N0,A)}
                                />
                            `})}
                    </div>
                `}
                ${C_.length>0&&B`
                    ${C_.map(({annotations:A},r)=>B`
                        ${A&&B`<${o2} key=${r} annotations=${A} />`}
                    `)}
                `}
                ${g_.length>0&&B`
                    <div class="file-attachments">
                        ${g_.map((A)=>B`
                            <${c8} key=${A} mediaId=${A} />
                        `)}
                    </div>
                `}
                ${d_.length>0&&B`
                    <div class="resource-links">
                        ${d_.map((A,r)=>B`
                            <div key=${r}>
                                <${m8} block=${A} />
                                <${o2} annotations=${A.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${k_.length>0&&B`
                    <div class="resource-embeds">
                        ${k_.map((A,r)=>B`
                            <div key=${r}>
                                <${g8} block=${A} />
                                <${o2} annotations=${A.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${U.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${U.link_previews.map((A,r)=>B`
                            <${h8} key=${r} preview=${A} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${H&&B`<${q4} src=${H} onClose=${()=>w(null)} />`}
    `}function z4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:j,onMessageRef:Y,onScrollToMessage:W,onFileRef:G,emptyMessage:Q,timelineRef:N,agents:X,user:L,onDeletePost:E,reverse:F=!0,removingPostIds:D,searchQuery:M}){let[S,H]=v(!1),w=y(null),R=typeof IntersectionObserver<"u",U=b(async()=>{if(!Z||!$||S)return;H(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{H(!1)}},[$,S,Z]),u=b((e)=>{let{scrollTop:o,scrollHeight:Y_,clientHeight:i}=e.target,d=F?Y_-i-o:o,G_=Math.max(300,i);if(d<G_)U()},[F,U]);if(g(()=>{if(!R)return;let e=w.current,o=N?.current;if(!e||!o)return;let Y_=300,i=new IntersectionObserver((d)=>{for(let G_ of d){if(!G_.isIntersecting)continue;U()}},{root:o,rootMargin:`${Y_}px 0px ${Y_}px 0px`,threshold:0});return i.observe(e),()=>i.disconnect()},[R,$,Z,N,U]),g(()=>{if(R)return;if(!N?.current)return;let{scrollTop:e,scrollHeight:o,clientHeight:Y_}=N.current,i=F?o-Y_-e:e,d=Math.max(300,Y_);if(i<d)U()},[R,_,$,F,N,U]),g(()=>{if(!N?.current)return;if(!$||S)return;let{scrollTop:e,scrollHeight:o,clientHeight:Y_}=N.current,i=F?o-Y_-e:e,d=Math.max(300,Y_);if(o<=Y_+1||i<d)U()},[_,$,S,F,N,U]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((e,o)=>e.id-o.id),a=(e)=>{let o=e?.data?.thread_id;if(o===null||o===void 0||o==="")return null;let Y_=Number(o);return Number.isFinite(Y_)?Y_:null},$_=new Map;for(let e=0;e<t.length;e+=1){let o=t[e],Y_=Number(o?.id),i=a(o);if(i!==null){let d=$_.get(i)||{anchorIndex:-1,replyIndexes:[]};d.replyIndexes.push(e),$_.set(i,d)}else if(Number.isFinite(Y_)){let d=$_.get(Y_)||{anchorIndex:-1,replyIndexes:[]};d.anchorIndex=e,$_.set(Y_,d)}}let N_=new Map;for(let[e,o]of $_.entries()){let Y_=new Set;if(o.anchorIndex>=0)Y_.add(o.anchorIndex);for(let i of o.replyIndexes)Y_.add(i);N_.set(e,Array.from(Y_).sort((i,d)=>i-d))}let __=t.map((e,o)=>{let Y_=a(e);if(Y_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=N_.get(Y_);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let d=i.indexOf(o);if(d<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:d>0,hasThreadNext:d<i.length-1}}),W_=B`<div class="timeline-sentinel" ref=${w}></div>`;return B`
        <div class="timeline ${F?"reverse":"normal"}" ref=${N} onScroll=${u}>
            <div class="timeline-content">
                ${F?W_:null}
                ${t.map((e,o)=>{let Y_=Boolean(e.data?.thread_id&&e.data.thread_id!==e.id),i=D?.has?.(e.id),d=__[o]||{};return B`
                    <${B4}
                        key=${e.id}
                        post=${e}
                        isThreadReply=${Y_}
                        isThreadPrev=${d.hasThreadPrev}
                        isThreadNext=${d.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${M}
                        agentName=${W4(e.data?.agent_id,X||{})}
                        agentAvatarUrl=${K4(e.data?.agent_id,X||{})}
                        userName=${L?.name||L?.user_name}
                        userAvatarUrl=${L?.avatar_url||L?.avatarUrl||L?.avatar}
                        userAvatarBackground=${L?.avatar_background||L?.avatarBackground}
                        onClick=${()=>J?.(e)}
                        onHashtagClick=${j}
                        onMessageRef=${Y}
                        onScrollToMessage=${W}
                        onFileRef=${G}
                        onDelete=${E}
                    />
                `})}
                ${F?null:W_}
            </div>
        </div>
    `}class H4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let j=J.canHandle(_);if(j===!1||j===0)continue;let Y=j===!0?0:typeof j==="number"?j:0;if(Y>Z)Z=Y,$=J}catch(j){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,j)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l_=new H4;var n2=null,A1=null;function U4(){if(A1)return Promise.resolve(A1);if(!n2)n2=import("/static/dist/editor.bundle.js").then((_)=>{return A1=_,_}).catch((_)=>{throw n2=null,_});return n2}class L4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await U4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var P1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new L4(_,$)}};function M1(){U4().catch(()=>{})}class F4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let j=document.createElement("span");j.className="terminal-pane-status",j.textContent="Not connected",Z.append(J,j);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var b1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new F4(_,$)}};function E4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Z6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),j=J?.[1]||Z,Y=J?.[2]||"",W=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),N=j.startsWith("/")?j:`${G?`${G}/`:""}${j}`,X=[];for(let E of N.split("/")){if(!E||E===".")continue;if(E===".."){if(X.length>0)X.pop();continue}X.push(E)}let L=X.join("/");return`${L1(L)}${Y}${W}`}function F2(_){return _?.preview||null}function J6(_){let $=F2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';if($.kind==="image"){let Z=$.url||($.path?L1($.path):"");return`
            <div class="workspace-preview-image">
                <img src="${E4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown")return`<div class="workspace-preview-text">${Q2($.text||"",null,{rewriteImageSrc:(J)=>Z6(J,$.path||_?.path)})}</div>`;return`<pre class="workspace-preview-text"><code>${E4($.text||"")}</code></pre>`}if($.kind==="binary")return'<div class="workspace-preview-text">Binary file — download to view.</div>';return'<div class="workspace-preview-text">No preview available.</div>'}class I1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=J6(this.context)}getContent(){let _=F2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=F2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var S1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=F2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new I1(_,$)}},x1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return F2(_)||_?.path?1:!1},mount(_,$){return new I1(_,$)}};class D4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((j)=>j===_?$:j),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var E_=new D4;var r2="workspaceExplorerScale",Y6=["compact","default","comfortable"],j6=new Set(Y6),X6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function k4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return j6.has(Z)?Z:$}function T1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function W6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function K6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function f1(_={}){let $=W6(_),Z=_.stored?k4(_.stored,$):$;return K6(Z,_)}function C4(_){return X6[k4(_)]}var G6=60000,P4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function M4(_,$,Z,J=0,j=[]){if(!Z&&P4(_))return j;if(!_)return j;if(j.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)M4(Y,$,Z,J+1,j);return j}function y4(_,$,Z){if(!_)return"";let J=[],j=(Y)=>{if(!Z&&P4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let W of Y.children)j(W)};return j(_),J.join("|")}function c1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let j=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,W=J.map((G)=>{let Q=c1(j.get(G.path),G);if(Q!==j.get(G.path))Y=!0;return Q});return Y?{...$,children:W}:_}function u1(_,$,Z){if(!_)return _;if(_.path===$)return c1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,j=_.children.map((Y)=>{let W=u1(Y,$,Z);if(W!==Y)J=!0;return W});return J?{..._,children:j}:_}var b4=4,v1=14,Q6=8,N6=16;function I4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=I4(J);return _.__bytes=Z,Z}function S4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=b4)return J;let j=Array.isArray(_.children)?_.children:[],Y=[];for(let G of j){let Q=Math.max(0,Number(G?.__bytes??G?.size??0));if(Q<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:Q});else Y.push({kind:"file",name:G.name,path:G.path,size:Q})}Y.sort((G,Q)=>Q.size-G.size);let W=Y;if(Y.length>v1){let G=Y.slice(0,v1-1),Q=Y.slice(v1-1),N=Q.reduce((X,L)=>X+L.size,0);G.push({kind:"other",name:`+${Q.length} more`,path:`${J.path}/[other]`,size:N}),W=G}return J.children=W.map((G)=>{if(G.kind==="dir")return S4(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function w4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function x4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,j=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${j}% ${Y}%)`}function d2(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function m1(_,$,Z,J,j,Y){let W=Math.PI*2-0.0001,G=Y-j>W?j+W:Y,Q=d2(_,$,J,j),N=d2(_,$,J,G),X=d2(_,$,Z,G),L=d2(_,$,Z,j),E=G-j>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${E} 1 ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${E} 0 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,"Z"].join(" ")}var T4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function f4(_,$,Z){let J=[],j=[],Y=Math.max(0,Number($)||0),W=(G,Q,N,X)=>{let L=Array.isArray(G?.children)?G.children:[];if(!L.length)return;let E=Math.max(0,Number(G.size)||0);if(E<=0)return;let F=N-Q,D=Q;L.forEach((M,S)=>{let H=Math.max(0,Number(M.size)||0);if(H<=0)return;let w=H/E,R=D,U=S===L.length-1?N:D+F*w;if(D=U,U-R<0.003)return;let u=T4[X];if(u){let t=x4(R,X,Z);if(J.push({key:M.path,path:M.path,label:M.name,size:H,color:t,depth:X,startAngle:R,endAngle:U,innerRadius:u[0],outerRadius:u[1],d:m1(120,120,u[0],u[1],R,U)}),X===1)j.push({key:M.path,name:M.name,size:H,pct:Y>0?H/Y*100:0,color:t})}if(X<b4)W(M,R,U,X+1)})};return W(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:j}}function R1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let j=R1(J,$);if(j)return j}return null}function v4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let j=T4[1];if(!j)return{segments:[],legend:[]};let Y=-Math.PI/2,W=Math.PI*3/2,G=x4(Y,1,J),N=`${$||"."}/[files]`;return{segments:[{key:N,path:N,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:W,innerRadius:j[0],outerRadius:j[1],d:m1(120,120,j[0],j[1],Y,W)}],legend:[{key:N,name:_,size:Z,pct:100,color:G}]}}function A4(_,$=!1,Z=!1){if(!_)return null;let J=I4(_),j=S4(_,0),Y=j.size||J,{segments:W,legend:G}=f4(j,Y,Z);if(!W.length&&Y>0){let Q=v4("[files]",j.path,Y,Z);W=Q.segments,G=Q.legend}return{root:j,totalSize:Y,segments:W,legend:G,truncated:$,isDarkTheme:Z}}function V6({payload:_}){if(!_)return null;let[$,Z]=v(null),[J,j]=v(_?.root?.path||"."),[Y,W]=v(()=>[_?.root?.path||"."]),[G,Q]=v(!1);g(()=>{let __=_?.root?.path||".";j(__),W([__]),Z(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!J)return;Q(!0);let __=setTimeout(()=>Q(!1),180);return()=>clearTimeout(__)},[J]);let N=x0(()=>{return R1(_.root,J)||_.root},[_?.root,J]),X=N?.size||_.totalSize||0,{segments:L,legend:E}=x0(()=>{let __=f4(N,X,_.isDarkTheme);if(__.segments.length>0)return __;if(X<=0)return __;let W_=N?.children?.length?"Total":"[files]";return v4(W_,N?.path||_?.root?.path||".",X,_.isDarkTheme)},[N,X,_.isDarkTheme,_?.root?.path]),[F,D]=v(L),M=y(new Map),S=y(0);g(()=>{let __=M.current,W_=new Map(L.map((i)=>[i.key,i])),e=performance.now(),o=220,Y_=(i)=>{let d=Math.min(1,(i-e)/220),G_=d*(2-d),O_=L.map((j_)=>{let Z_=__.get(j_.key)||{startAngle:j_.startAngle,endAngle:j_.startAngle,innerRadius:j_.innerRadius,outerRadius:j_.innerRadius},Q_=(H_,R_)=>H_+(R_-H_)*G_,U_=Q_(Z_.startAngle,j_.startAngle),B_=Q_(Z_.endAngle,j_.endAngle),M_=Q_(Z_.innerRadius,j_.innerRadius),V_=Q_(Z_.outerRadius,j_.outerRadius);return{...j_,d:m1(120,120,M_,V_,U_,B_)}});if(D(O_),d<1)S.current=requestAnimationFrame(Y_)};if(S.current)cancelAnimationFrame(S.current);return S.current=requestAnimationFrame(Y_),M.current=W_,()=>{if(S.current)cancelAnimationFrame(S.current)}},[L]);let H=F.length?F:L,w=X>0?m0(X):"0 B",R=N?.name||"",u=(R&&R!=="."?R:"Total")||"Total",t=w,a=Y.length>1,$_=(__)=>{if(!__?.path)return;let W_=R1(_.root,__.path);if(!W_||!Array.isArray(W_.children)||W_.children.length===0)return;W((e)=>[...e,W_.path]),j(W_.path),Z(null)},N_=()=>{if(!a)return;W((__)=>{let W_=__.slice(0,-1);return j(W_[W_.length-1]||_?.root?.path||"."),W_}),Z(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${N?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${X}>
                ${H.map((__)=>B`
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
                        onClick=${()=>$_(__)}
                    >
                        <title>${__.label} — ${m0(__.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${N_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${t}</text>
                </g>
            </svg>
            ${E.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${E.slice(0,8).map((__)=>B`
                        <div key=${__.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${__.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${__.name}>${__.name}</span>
                            <span class="workspace-folder-starburst-size">${m0(__.size)}</span>
                            <span class="workspace-folder-starburst-pct">${__.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function O6({mediaId:_}){let[$,Z]=v(null);if(g(()=>{if(!_)return;f2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",j=$.metadata?.size?m0($.metadata.size):"";return B`
        <a href=${j2(_)} download=${J} class="file-attachment"
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
                ${j&&B`<span class="file-size">${j}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function u4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[j,Y]=v(null),[W,G]=v(new Set(["."])),[Q,N]=v(null),[X,L]=v(null),[E,F]=v(""),[D,M]=v(null),[S,H]=v(null),[w,R]=v(!0),[U,u]=v(!1),[t,a]=v(null),[$_,N_]=v(()=>X2("workspaceShowHidden",!1)),[__,W_]=v(!1),[e,o]=v(null),[Y_,i]=v(null),[d,G_]=v(null),[O_,j_]=v(!1),[w_,Z_]=v(null),[Q_,U_]=v(()=>w4()),[B_,M_]=v(()=>f1({stored:T0(r2),...T1()})),V_=y(W),H_=y(""),R_=y(null),b_=y(0),A_=y(new Set),u_=y(null),D_=y(new Map),c_=y(_),d_=y(J),k_=y(null),I_=y(null),W0=y(null),K0=y(null),G0=y(null),f0=y(null),B0=y("."),C_=y(null),g_=y({path:null,dragging:!1,startX:0,startY:0}),Q0=y({path:null,dragging:!1,startX:0,startY:0}),A=y({path:null,timer:0}),r=y(!1),y_=y(0),S_=y(new Map),N0=y(null),z0=y(null),v0=y(null),H0=y(null),t_=y($_),P0=y($),Y0=y(Z??$),j0=y(0),p_=y(d),r0=y(__),g0=y(e),X0=y(null),u0=y({x:0,y:0}),e_=y(0),M0=y(null),_0=y(Q),V0=y(X),O0=y(null),o_=y(null),U0=y(D);c_.current=_,d_.current=J,g(()=>{V_.current=W},[W]),g(()=>{t_.current=$_},[$_]),g(()=>{P0.current=$},[$]),g(()=>{Y0.current=Z??$},[Z,$]),g(()=>{p_.current=d},[d]),g(()=>{if(typeof window>"u")return;let K=()=>{M_(f1({stored:T0(r2),...T1()}))};K();let q=()=>K(),k=()=>K(),C=(c)=>{if(!c||c.key===null||c.key===r2)K()};window.addEventListener("resize",q),window.addEventListener("focus",k),window.addEventListener("storage",C);let f=window.matchMedia?.("(pointer: coarse)"),p=window.matchMedia?.("(hover: none)"),n=(c,J_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",J_);else if(c.addListener)c.addListener(J_)},l=(c,J_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",J_);else if(c.removeListener)c.removeListener(J_)};return n(f,q),n(p,q),()=>{window.removeEventListener("resize",q),window.removeEventListener("focus",k),window.removeEventListener("storage",C),l(f,q),l(p,q)}},[]),g(()=>{let K=(q)=>{let k=q?.detail?.path;if(!k)return;let C=k.split("/"),f=[];for(let p=1;p<C.length;p++)f.push(C.slice(0,p).join("/"));if(f.length)G((p)=>{let n=new Set(p);n.add(".");for(let l of f)n.add(l);return n});N(k),requestAnimationFrame(()=>{let p=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(p)p.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",K),()=>window.removeEventListener("workspace-reveal-path",K)},[]),g(()=>{r0.current=__},[__]),g(()=>{g0.current=e},[e]),g(()=>{_0.current=Q},[Q]),g(()=>{V0.current=X},[X]),g(()=>{U0.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let K=()=>U_(w4());K();let q=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>K();if(q?.addEventListener)q.addEventListener("change",k);else if(q?.addListener)q.addListener(k);let C=typeof MutationObserver<"u"?new MutationObserver(()=>K()):null;if(C?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)C?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(q?.removeEventListener)q.removeEventListener("change",k);else if(q?.removeListener)q.removeListener(k);C?.disconnect()}},[]),g(()=>{if(!X)return;let K=G0.current;if(!K)return;let q=requestAnimationFrame(()=>{try{K.focus(),K.select()}catch{}});return()=>cancelAnimationFrame(q)},[X]);let b0=async(K)=>{u(!0),M(null),H(null);try{let q=await T3(K,20000);M(q)}catch(q){M({error:q.message||"Failed to load preview"})}finally{u(!1)}};k_.current=b0;let d0=async()=>{if(!P0.current)return;try{let K=await v2("",1,t_.current),q=y4(K.root,V_.current,t_.current);if(q===H_.current){R(!1);return}if(H_.current=q,R_.current=K.root,!b_.current)b_.current=requestAnimationFrame(()=>{b_.current=0,Y((k)=>c1(k,R_.current)),R(!1)})}catch(K){a(K.message||"Failed to load workspace"),R(!1)}},p0=async(K)=>{if(!K)return;if(A_.current.has(K))return;A_.current.add(K);try{let q=await v2(K,1,t_.current);Y((k)=>u1(k,K,q.root))}catch(q){a(q.message||"Failed to load workspace")}finally{A_.current.delete(K)}};I_.current=p0;let m_=b(()=>{let K=Q;if(!K)return".";let q=D_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let k=K.split("/");return k.pop(),k.join("/")||"."},[Q]),s_=b((K)=>{let q=K?.closest?.(".workspace-row");if(!q)return null;let k=q.dataset.path,C=q.dataset.type;if(!k)return null;if(C==="dir")return k;if(k.includes("/")){let f=k.split("/");return f.pop(),f.join("/")||"."}return"."},[]),$0=b((K)=>{return s_(K?.target||null)},[s_]),T_=b((K)=>{p_.current=K,G_(K)},[]),n_=b(()=>{let K=A.current;if(K?.timer)clearTimeout(K.timer);A.current={path:null,timer:0}},[]),Z0=b((K)=>{if(!K||K==="."){n_();return}let q=D_.current?.get(K);if(!q||q.type!=="dir"){n_();return}if(V_.current?.has(K)){n_();return}if(A.current?.path===K)return;n_();let k=setTimeout(()=>{A.current={path:null,timer:0},I_.current?.(K),G((C)=>{let f=new Set(C);return f.add(K),f})},600);A.current={path:K,timer:k}},[n_]),L0=b((K,q)=>{if(u0.current={x:K,y:q},e_.current)return;e_.current=requestAnimationFrame(()=>{e_.current=0;let k=X0.current;if(!k)return;let C=u0.current;k.style.transform=`translate(${C.x+12}px, ${C.y+12}px)`})},[]),D0=b((K)=>{if(!K)return;let k=(D_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!k)return;i({path:K,label:k})},[]),k0=b(()=>{if(i(null),e_.current)cancelAnimationFrame(e_.current),e_.current=0;if(X0.current)X0.current.style.transform="translate(-9999px, -9999px)"},[]),h0=b((K)=>{if(!K)return".";let q=D_.current?.get(K);if(q&&q.type==="dir")return q.path;if(K==="."||!K.includes("/"))return".";let k=K.split("/");return k.pop(),k.join("/")||"."},[]),q0=b(()=>{L(null),F("")},[]),N2=b((K)=>{if(!K)return;let k=(D_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!k||K===".")return;L(K),F(k)},[]),R0=b(async()=>{let K=V0.current;if(!K)return;let q=(E||"").trim();if(!q){q0();return}let k=D_.current?.get(K),C=(k?.name||K.split("/").pop()||K).trim();if(q===C){q0();return}try{let p=(await u3(K,q))?.path||K,n=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(q0(),a(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:K,newPath:p,type:k?.type||"file"}})),k?.type==="dir")G((l)=>{let c=new Set;for(let J_ of l)if(J_===K)c.add(p);else if(J_.startsWith(`${K}/`))c.add(`${p}${J_.slice(K.length)}`);else c.add(J_);return c});if(N(p),k?.type==="dir")M(null),u(!1),H(null);else k_.current?.(p);I_.current?.(n)}catch(f){a(f?.message||"Failed to rename file")}},[q0,E]),z=b(async(K)=>{let C=K||".";for(let f=0;f<50;f+=1){let n=`untitled${f===0?"":`-${f}`}.md`;try{let c=(await v3(C,n,""))?.path||(C==="."?n:`${C}/${n}`);if(C&&C!==".")G((J_)=>new Set([...J_,C]));N(c),a(null),I_.current?.(C),k_.current?.(c);return}catch(l){if(l?.status===409||l?.code==="file_exists")continue;a(l?.message||"Failed to create file");return}}a("Failed to create file (untitled name already in use).")},[]),x=b((K)=>{if(K?.stopPropagation?.(),O_)return;let q=h0(_0.current);z(q)},[O_,h0,z]);g(()=>{if(typeof window>"u")return;let K=(q)=>{let k=q?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;Y((l)=>{let c=l;for(let J_ of k){if(!J_?.root)continue;if(!c||J_.path==="."||!J_.path)c=J_.root;else c=u1(c,J_.path,J_.root)}if(c)H_.current=y4(c,V_.current,t_.current);return R(!1),c});let C=_0.current;if(Boolean(C)&&k.some((l)=>{let c=l?.path||"";if(!c||c===".")return!0;return C===c||C.startsWith(`${c}/`)||c.startsWith(`${C}/`)}))S_.current.clear();if(!C||!U0.current)return;let p=D_.current?.get(C);if(p&&p.type==="dir")return;if(k.some((l)=>{let c=l?.path||"";if(!c||c===".")return!0;return C===c||C.startsWith(`${c}/`)}))k_.current?.(C)};return window.addEventListener("workspace-update",K),()=>window.removeEventListener("workspace-update",K)},[]),u_.current=d0;let s=y(()=>{if(typeof window>"u")return;let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),q=Y0.current??P0.current,k=document.visibilityState!=="hidden"&&(q||K.matches&&P0.current);u2(k,t_.current).catch(()=>{})}).current,X_=y(0),L_=y(()=>{if(X_.current)clearTimeout(X_.current);X_.current=setTimeout(()=>{X_.current=0,s()},250)}).current;g(()=>{if(P0.current)u_.current?.();L_()},[$,Z]),g(()=>{u_.current(),s();let K=setInterval(()=>u_.current(),G6),q=W2("previewHeight",null),k=Number.isFinite(q)?Math.min(Math.max(q,80),600):280;if(y_.current=k,W0.current)W0.current.style.setProperty("--preview-height",`${k}px`);let C=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),f=()=>L_();if(C.addEventListener)C.addEventListener("change",f);else if(C.addListener)C.addListener(f);return document.addEventListener("visibilitychange",f),()=>{if(clearInterval(K),b_.current)cancelAnimationFrame(b_.current),b_.current=0;if(C.removeEventListener)C.removeEventListener("change",f);else if(C.removeListener)C.removeListener(f);if(document.removeEventListener("visibilitychange",f),X_.current)clearTimeout(X_.current),X_.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;u2(!1,t_.current).catch(()=>{})}},[]);let f_=x0(()=>M4(j,W,$_),[j,W,$_]),z_=x0(()=>new Map(f_.map((K)=>[K.node.path,K.node])),[f_]),h_=x0(()=>C4(B_),[B_]);D_.current=z_;let i_=(Q?D_.current.get(Q):null)?.type==="dir";g(()=>{if(!Q||!i_){Z_(null),N0.current=null,z0.current=null;return}let K=Q,q=`${$_?"hidden":"visible"}:${Q}`,k=S_.current,C=k.get(q);if(C?.root){k.delete(q),k.set(q,C);let n=A4(C.root,Boolean(C.truncated),Q_);if(n)N0.current=n,z0.current=Q,Z_({loading:!1,error:null,payload:n});return}let f=N0.current,p=z0.current;Z_({loading:!0,error:null,payload:p===Q?f:null}),v2(Q,Q6,$_).then((n)=>{if(_0.current!==K)return;let l={root:n?.root,truncated:Boolean(n?.truncated)};k.delete(q),k.set(q,l);while(k.size>N6){let J_=k.keys().next().value;if(!J_)break;k.delete(J_)}let c=A4(l.root,l.truncated,Q_);N0.current=c,z0.current=Q,Z_({loading:!1,error:null,payload:c})}).catch((n)=>{if(_0.current!==K)return;Z_({loading:!1,error:n?.message||"Failed to load folder size chart",payload:p===Q?f:null})})},[Q,i_,$_,Q_]);let F_=Boolean(D&&D.kind==="text"&&!i_&&(!D.size||D.size<=262144)),P_=F_?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable";g(()=>{let K=v0.current;if(H0.current)H0.current.dispose(),H0.current=null;if(!K)return;if(K.innerHTML="",!Q||i_||!D||D.error)return;let q={path:Q,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},k=l_.resolve(q)||l_.get("workspace-preview-default");if(!k)return;let C=k.mount(K,q);return H0.current=C,()=>{if(H0.current===C)C.dispose(),H0.current=null;K.innerHTML=""}},[Q,i_,D]);let C0=(K)=>{let q=K?.target;if(q instanceof Element)return q;return q?.parentElement||null},t0=(K)=>{return Boolean(K?.closest?.(".workspace-node-icon, .workspace-label-text"))},V2=y((K)=>{if(o_.current)clearTimeout(o_.current),o_.current=null;let k=C0(K)?.closest?.("[data-path]");if(!k)return;let C=k.dataset.path;if(k.dataset.type==="dir"||!C)return;if(V0.current===C)q0();d_.current?.(C)}).current,O2=y((K)=>{if(r.current){r.current=!1;return}let q=C0(K),k=q?.closest?.("[data-path]");if(K0.current?.focus?.(),!k)return;let C=k.dataset.path,f=k.dataset.type,p=Boolean(q?.closest?.(".workspace-caret")),n=Boolean(q?.closest?.("button"))||Boolean(q?.closest?.("a"))||Boolean(q?.closest?.("input")),l=_0.current===C,c=V0.current;if(c){if(c===C)return;q0()}let J_=f==="file"&&O0.current===C&&!p&&!n;if(l&&!p&&!n&&C!=="."&&!J_){if(o_.current)clearTimeout(o_.current);o_.current=setTimeout(()=>{o_.current=null,N2(C)},350);return}if(f==="dir"){if(O0.current=null,N(C),M(null),H(null),u(!1),!V_.current.has(C))I_.current?.(C);if(l&&!p)return;G((A0)=>{let F0=new Set(A0);if(F0.has(C))F0.delete(C);else F0.add(C);return F0})}else{O0.current=null,N(C);let J0=D_.current.get(C);if(J0)c_.current?.(J0.path,J0);k_.current?.(C)}}).current,a2=y(()=>{H_.current="",u_.current(),Array.from(V_.current||[]).filter((q)=>q&&q!==".").forEach((q)=>I_.current?.(q))}).current,y0=y(()=>{O0.current=null,N(null),M(null),H(null),u(!1)}).current,i0=y(()=>{N_((K)=>{let q=!K;if(typeof window<"u")v_("workspaceShowHidden",String(q));return t_.current=q,u2(!0,q).catch(()=>{}),H_.current="",u_.current?.(),Array.from(V_.current||[]).filter((C)=>C&&C!==".").forEach((C)=>I_.current?.(C)),q})}).current,a_=y((K)=>{if(C0(K)?.closest?.("[data-path]"))return;y0()}).current,s0=b(async(K)=>{if(!K)return;let q=K.split("/").pop()||K;if(!window.confirm(`Delete "${q}"? This cannot be undone.`))return;try{await c3(K);let C=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(_0.current===K)y0();I_.current?.(C),a(null)}catch(C){M((f)=>({...f||{},error:C.message||"Failed to delete file"}))}},[y0]),q2=b((K)=>{let q=K0.current;if(!q||!K||typeof CSS>"u"||typeof CSS.escape!=="function")return;q.querySelector(`[data-path="${CSS.escape(K)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),D2=b((K)=>{let q=f_;if(!q||q.length===0)return;let k=Q?q.findIndex((C)=>C.node.path===Q):-1;if(K.key==="ArrowDown"){K.preventDefault();let C=Math.min(k+1,q.length-1),f=q[C];if(!f)return;if(N(f.node.path),f.node.type!=="dir")c_.current?.(f.node.path,f.node),k_.current?.(f.node.path);else M(null),u(!1),H(null);q2(f.node.path);return}if(K.key==="ArrowUp"){K.preventDefault();let C=k<=0?0:k-1,f=q[C];if(!f)return;if(N(f.node.path),f.node.type!=="dir")c_.current?.(f.node.path,f.node),k_.current?.(f.node.path);else M(null),u(!1),H(null);q2(f.node.path);return}if(K.key==="ArrowRight"&&k>=0){let C=q[k];if(C?.node?.type==="dir"&&!W.has(C.node.path))K.preventDefault(),I_.current?.(C.node.path),G((f)=>new Set([...f,C.node.path]));return}if(K.key==="ArrowLeft"&&k>=0){let C=q[k];if(C?.node?.type==="dir"&&W.has(C.node.path))K.preventDefault(),G((f)=>{let p=new Set(f);return p.delete(C.node.path),p});return}if(K.key==="Enter"&&k>=0){K.preventDefault();let C=q[k];if(!C)return;let f=C.node.path;if(C.node.type==="dir"){if(!V_.current.has(f))I_.current?.(f);G((n)=>{let l=new Set(n);if(l.has(f))l.delete(f);else l.add(f);return l}),M(null),H(null),u(!1)}else c_.current?.(f,C.node),k_.current?.(f);return}if((K.key==="Delete"||K.key==="Backspace")&&k>=0){let C=q[k];if(!C||C.node.type==="dir")return;K.preventDefault(),s0(C.node.path);return}if(K.key==="Escape")K.preventDefault(),y0()},[y0,s0,W,f_,q2,Q]),S0=b((K)=>{let q=C0(K),k=q?.closest?.(".workspace-row");if(!k)return;let C=k.dataset.type,f=k.dataset.path;if(!f||f===".")return;if(V0.current===f)return;let p=K?.touches?.[0];if(!p)return;if(g_.current={path:t0(q)?f:null,dragging:!1,startX:p.clientX,startY:p.clientY},C!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,g_.current?.dragging)return;s0(f)},600)},[s0]),w0=b(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let K=g_.current;if(K?.dragging&&K.path){let q=p_.current||m_(),k=M0.current;if(typeof k==="function")k(K.path,q)}g_.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,W_(!1),o(null),T_(null),n_(),k0()},[m_,k0,T_,n_]),t2=b((K)=>{let q=g_.current,k=K?.touches?.[0];if(!k||!q?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let C=Math.abs(k.clientX-q.startX),f=Math.abs(k.clientY-q.startY),p=C>8||f>8;if(p&&C_.current)clearTimeout(C_.current),C_.current=null;if(!q.dragging&&p)q.dragging=!0,W_(!0),o("move"),D0(q.path);if(q.dragging){K.preventDefault(),L0(k.clientX,k.clientY);let n=document.elementFromPoint(k.clientX,k.clientY),l=s_(n)||m_();if(p_.current!==l)T_(l);Z0(l)}},[s_,m_,D0,L0,T_,Z0]),k2=y((K)=>{K.preventDefault();let q=W0.current;if(!q)return;let k=K.clientY,C=y_.current||280,f=K.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let p=k,n=(c)=>{p=c.clientY;let J_=q.clientHeight-80,J0=Math.min(Math.max(C-(c.clientY-k),80),J_);q.style.setProperty("--preview-height",`${J0}px`),y_.current=J0},l=()=>{let c=q.clientHeight-80,J_=Math.min(Math.max(C-(p-k),80),c);y_.current=J_,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",v_("previewHeight",String(Math.round(J_))),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",l)}).current,e0=y((K)=>{K.preventDefault();let q=W0.current;if(!q)return;let k=K.touches[0];if(!k)return;let C=k.clientY,f=y_.current||280,p=K.currentTarget;p.classList.add("dragging"),document.body.style.userSelect="none";let n=(c)=>{let J_=c.touches[0];if(!J_)return;c.preventDefault();let J0=q.clientHeight-80,A0=Math.min(Math.max(f-(J_.clientY-C),80),J0);q.style.setProperty("--preview-height",`${A0}px`),y_.current=A0},l=()=>{p.classList.remove("dragging"),document.body.style.userSelect="",v_("previewHeight",String(Math.round(y_.current||f))),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}).current,e2=async()=>{if(!Q)return;try{let K=await f3(Q);if(K.media_id)H(K.media_id)}catch(K){M((q)=>({...q||{},error:K.message||"Failed to attach"}))}},_1=async()=>{if(!Q||i_)return;await s0(Q)},_2=(K)=>{return Array.from(K?.dataTransfer?.types||[]).includes("Files")},$1=b((K)=>{if(!_2(K))return;if(K.preventDefault(),j0.current+=1,!r0.current)W_(!0);o("upload");let q=$0(K)||m_();T_(q),Z0(q)},[m_,$0,T_,Z0]),Z1=b((K)=>{if(!_2(K))return;if(K.preventDefault(),K.dataTransfer)K.dataTransfer.dropEffect="copy";if(!r0.current)W_(!0);if(g0.current!=="upload")o("upload");let q=$0(K)||m_();if(p_.current!==q)T_(q);Z0(q)},[m_,$0,T_,Z0]),J1=b((K)=>{if(!_2(K))return;if(K.preventDefault(),j0.current=Math.max(0,j0.current-1),j0.current===0)W_(!1),o(null),T_(null),n_()},[T_,n_]),c0=b(async(K,q=".")=>{let k=Array.from(K||[]);if(k.length===0)return;let C=q&&q!==""?q:".",f=C!=="."?C:"workspace root";j_(!0);try{let p=null;for(let n of k)try{p=await U1(n,C)}catch(l){let c=l?.status,J_=l?.code;if(c===409||J_==="file_exists"){let J0=n?.name||"file";if(!window.confirm(`"${J0}" already exists in ${f}. Overwrite?`))continue;p=await U1(n,C,{overwrite:!0})}else throw l}if(p?.path)O0.current=p.path,N(p.path),k_.current?.(p.path);I_.current?.(C)}catch(p){a(p.message||"Failed to upload file")}finally{j_(!1)}},[]),B2=b(async(K,q)=>{if(!K)return;let k=D_.current?.get(K);if(!k)return;let C=q&&q!==""?q:".",f=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(C===f)return;try{let n=(await R3(K,C))?.path||K;if(k.type==="dir")G((l)=>{let c=new Set;for(let J_ of l)if(J_===K)c.add(n);else if(J_.startsWith(`${K}/`))c.add(`${n}${J_.slice(K.length)}`);else c.add(J_);return c});if(N(n),k.type==="dir")M(null),u(!1),H(null);else k_.current?.(n);I_.current?.(f),I_.current?.(C)}catch(p){a(p?.message||"Failed to move entry")}},[]);M0.current=B2;let l0=b(async(K)=>{if(!_2(K))return;K.preventDefault(),j0.current=0,W_(!1),o(null),G_(null),n_();let q=Array.from(K?.dataTransfer?.files||[]);if(q.length===0)return;let k=p_.current||$0(K)||m_();await c0(q,k)},[m_,$0,c0]),Y1=b((K)=>{if(K?.stopPropagation?.(),O_)return;let q=K?.currentTarget?.dataset?.uploadTarget||".";B0.current=q,f0.current?.click()},[O_]),j1=b(()=>{if(O_)return;let K=_0.current,q=K?D_.current?.get(K):null;B0.current=q?.type==="dir"?q.path:".",f0.current?.click()},[O_]),X1=b((K)=>{if(!K||K.button!==0)return;let q=K.currentTarget;if(!q||!q.dataset)return;let k=q.dataset.path;if(!k||k===".")return;if(V0.current===k)return;let C=C0(K);if(C?.closest?.("button, a, input, .workspace-caret"))return;if(!t0(C))return;K.preventDefault(),Q0.current={path:k,dragging:!1,startX:K.clientX,startY:K.clientY};let f=(n)=>{let l=Q0.current;if(!l?.path)return;let c=Math.abs(n.clientX-l.startX),J_=Math.abs(n.clientY-l.startY),J0=c>4||J_>4;if(!l.dragging&&J0)l.dragging=!0,r.current=!0,W_(!0),o("move"),D0(l.path),L0(n.clientX,n.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(l.dragging){n.preventDefault(),L0(n.clientX,n.clientY);let A0=document.elementFromPoint(n.clientX,n.clientY),F0=s_(A0)||m_();if(p_.current!==F0)T_(F0);Z0(F0)}},p=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",p);let n=Q0.current;if(n?.dragging&&n.path){let l=p_.current||m_(),c=M0.current;if(typeof c==="function")c(n.path,l)}Q0.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,W_(!1),o(null),T_(null),n_(),k0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{r.current=!1},0)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",p)},[s_,m_,D0,L0,k0,T_,Z0,n_]),W1=b(async(K)=>{let q=Array.from(K?.target?.files||[]);if(q.length===0)return;let k=B0.current||".";if(await c0(q,k),B0.current=".",K?.target)K.target.value=""},[c0]);return B`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${B_}
            ref=${W0}
            onDragEnter=${$1}
            onDragOver=${Z1}
            onDragLeave=${J1}
            onDrop=${l0}
        >
            <input type="file" multiple style="display:none" ref=${f0} onChange=${W1} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${x} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${a2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${$_?" active":""}`}
                        onClick=${i0}
                        title=${$_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!$_&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${a_}>
                ${O_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${w&&B`<div class="workspace-loading">Loading…</div>`}
                ${t&&B`<div class="workspace-error">${t}</div>`}
                ${j&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${K0}
                        tabIndex="0"
                        onClick=${O2}
                        onDblClick=${V2}
                        onKeyDown=${D2}
                        onTouchStart=${S0}
                        onTouchEnd=${w0}
                        onTouchMove=${t2}
                        onTouchCancel=${w0}
                    >
                        ${f_.map(({node:K,depth:q})=>{let k=K.type==="dir",C=K.path===Q,f=K.path===X,p=k&&W.has(K.path),n=d&&K.path===d,l=Array.isArray(K.children)&&K.children.length>0?K.children.length:Number(K.child_count)||0;return B`
                                <div
                                    key=${K.path}
                                    class=${`workspace-row${C?" selected":""}${n?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+q*h_.indentPx}px`}}
                                    data-path=${K.path}
                                    data-type=${K.type}
                                    onMouseDown=${X1}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?p?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${f?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${G0}
                                                value=${E}
                                                onInput=${(c)=>F(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),R0();else if(c.key==="Escape")c.preventDefault(),q0()}}
                                                onBlur=${q0}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${K.name}</span></span>`}
                                    ${k&&!p&&l>0&&B`
                                        <span class="workspace-count">${l}</span>
                                    `}
                                    ${k&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${K.path}
                                            title="Upload files to this folder"
                                            onClick=${Y1}
                                            disabled=${O_}
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
            ${Q&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${k2} onTouchStart=${e0}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Q}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${x} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!i_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>F_&&d_.current?.(Q,D)}
                                    title=${P_}
                                    disabled=${!F_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${_1}
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
                            ${i_?B`
                                    <button class="workspace-download" onClick=${j1}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${m3(Q,$_)}
                                        title="Download folder as zip" onClick=${(K)=>K.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${e2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${U&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&B`<div class="workspace-error">${D.error}</div>`}
                    ${i_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${w_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${w_?.error&&B`<div class="workspace-error">${w_.error}</div>`}
                        ${w_?.payload&&w_.payload.segments?.length>0&&B`
                            <${V6} payload=${w_.payload} />
                        `}
                        ${w_?.payload&&(!w_.payload.segments||w_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!i_&&B`
                        <div class="workspace-preview-meta">
                            ${D.size?B`<span>${m0(D.size)}</span>`:""}
                            ${D.mtime?B`<span>${l2(D.mtime)}</span>`:""}
                            ${D.truncated?B`<span>truncated</span>`:""}
                        </div>
                        <div class="workspace-preview-body" ref=${v0}></div>
                    `}
                    ${S&&B`
                        <div class="workspace-download-card">
                            <${O6} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${Y_&&B`
                <div class="workspace-drag-ghost" ref=${X0}>${Y_.label}</div>
            `}
        </aside>
    `}function R4({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:j,onCloseAll:Y,onTogglePin:W,onTogglePreview:G,previewTabs:Q,onToggleDock:N,dockVisible:X}){let[L,E]=v(null),F=y(null);g(()=>{if(!L)return;let H=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;E(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[L]),g(()=>{let H=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let R=_.findIndex((U)=>U.id===$);if(w.shiftKey){let U=_[(R-1+_.length)%_.length];Z?.(U.id)}else{let U=_[(R+1)%_.length];Z?.(U.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let R=document.querySelector(".editor-pane");if(R&&R.contains(document.activeElement)){if(w.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,Z,J]);let D=b((H,w)=>{if(H.button===1){H.preventDefault(),J?.(w);return}if(H.button===0)Z?.(w)},[Z,J]),M=b((H,w)=>{H.preventDefault(),E({id:w,x:H.clientX,y:H.clientY})},[]),S=b((H,w)=>{H.stopPropagation(),J?.(w)},[J]);if(g(()=>{if(!$||!F.current)return;let H=F.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${F} role="tablist">
            ${_.map((H)=>B`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(w)=>D(w,H.id)}
                    onContextMenu=${(w)=>M(w,H.id)}
                >
                    ${H.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(w)=>S(w,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${N&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${X?" active":""}`}
                    onClick=${N}
                    title=${`${X?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${X?"Hide":"Show"} terminal`}
                    aria-pressed=${X?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${L&&B`
            <div class="tab-context-menu" style=${{left:L.x+"px",top:L.y+"px"}}>
                <button onClick=${()=>{J?.(L.id),E(null)}}>Close</button>
                <button onClick=${()=>{j?.(L.id),E(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),E(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{W?.(L.id),E(null)}}>
                    ${_.find((H)=>H.id===L.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(L.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(L.id),E(null)}}>
                        ${Q?.has(L.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var q6=400,g1=60,c4=220,p1="mdPreviewHeight";function B6(){try{let _=localStorage.getItem(p1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=g1?$:c4}catch{return c4}}function m4({getContent:_,path:$,onClose:Z}){let[J,j]=v(""),[Y,W]=v(B6),G=y(null),Q=y(null),N=y(""),X=y(_);return X.current=_,g(()=>{let F=()=>{let M=X.current?.()||"";if(M===N.current)return;N.current=M;try{let S=Q2(M,null,{sanitize:!1});j(S)}catch{j('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};F();let D=setInterval(F,q6);return()=>clearInterval(D)},[]),g(()=>{if(G.current&&J)i2(G.current).catch(()=>{})},[J]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(F)=>{F.preventDefault();let D=F.clientY,M=Q.current?.offsetHeight||Y,S=Q.current?.parentElement,H=S?S.offsetHeight*0.7:500,w=F.currentTarget;w.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=(u)=>{let t=Math.min(Math.max(M-(u.clientY-D),g1),H);W(t)},U=()=>{w.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(p1,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",U)}}
            onTouchStart=${(F)=>{F.preventDefault();let D=F.touches[0];if(!D)return;let M=D.clientY,S=Q.current?.offsetHeight||Y,H=Q.current?.parentElement,w=H?H.offsetHeight*0.7:500,R=F.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let U=(t)=>{let a=t.touches[0];if(!a)return;t.preventDefault();let $_=Math.min(Math.max(S-(a.clientY-M),g1),w);W($_)},u=()=>{R.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(p1,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",U),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",U,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
        ></div>
        <div class="md-preview-panel" ref=${Q} style=${{height:Y+"px"}}>
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
    `}function g4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){g(()=>{Z();let J=new F1(_,$);J.connect();let j=()=>{J.reconnectIfNeeded()};return window.addEventListener("focus",j),document.addEventListener("visibilitychange",j),()=>{window.removeEventListener("focus",j),document.removeEventListener("visibilitychange",j),J.disconnect()}},[$,_,Z])}function p4(){let[_,$]=v(!1),[Z,J]=v("default"),j=y(!1);g(()=>{let Q=X2("notificationsEnabled",!1);if(j.current=Q,$(Q),typeof Notification<"u")J(Notification.permission)},[]),g(()=>{j.current=_},[_]);let Y=b(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Q=Notification.requestPermission();if(Q&&typeof Q.then==="function")return Q;return Promise.resolve(Q)}catch{return Promise.resolve("default")}},[]),W=b(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let N=await Y();if(J(N||"default"),N!=="granted"){j.current=!1,$(!1),v_("notificationsEnabled","false");return}}let Q=!j.current;j.current=Q,$(Q),v_("notificationsEnabled",String(Q))},[Y]),G=b((Q,N)=>{if(!j.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(Q,{body:N});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:W,notify:G}}var E2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function h4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=v(null),[j,Y]=v(!1),W=y(!1),G=y(null),Q=y(!1),N=y(null);g(()=>{W.current=j},[j]);let X=b(async(F=null)=>{try{if(F){let D=await k3(F);J(D.posts),Y(!1)}else{let D=await T2(10);J(D.posts),Y(D.has_more)}}catch(D){console.error("Failed to load posts:",D)}},[]),L=b(async()=>{try{let F=await T2(10);J((D)=>{if(!D||D.length===0)return F.posts;return E2([...F.posts,...D])}),Y((D)=>D||F.has_more)}catch(F){console.error("Failed to refresh timeline:",F)}},[]),E=b(async(F={})=>{if(!Z||Z.length===0)return;if(Q.current)return;let{preserveScroll:D=!0,preserveMode:M="top",allowRepeat:S=!1}=F,H=(U)=>{if(!D){U();return}if(M==="top")$(U);else _(U)},R=Z.slice().sort((U,u)=>U.id-u.id)[0]?.id;if(!Number.isFinite(R))return;if(!S&&N.current===R)return;Q.current=!0,N.current=R;try{let U=await T2(10,R);if(U.posts.length>0)H(()=>{J((u)=>E2([...U.posts,...u||[]])),Y(U.has_more)});else Y(!1)}catch(U){console.error("Failed to load more posts:",U)}finally{Q.current=!1}},[Z,_,$]);return g(()=>{G.current=E},[E]),{posts:Z,setPosts:J,hasMore:j,setHasMore:Y,hasMoreRef:W,loadPosts:X,refreshTimeline:L,loadMore:E,loadMoreRef:G,loadingMoreRef:Q,lastBeforeIdRef:N}}function i4(){let[_,$]=v(null),[Z,J]=v({text:"",totalLines:0}),[j,Y]=v(""),[W,G]=v({text:"",totalLines:0}),[Q,N]=v(null),[X,L]=v(null),[E,F]=v(null),D=y(null),M=y(0),S=y(!1),H=y(""),w=y(""),R=y(null),U=y(null),u=y(null),t=y(null),a=y(!1),$_=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:j,setAgentPlan:Y,agentThought:W,setAgentThought:G,pendingRequest:Q,setPendingRequest:N,currentTurnId:X,setCurrentTurnId:L,steerQueuedTurnId:E,setSteerQueuedTurnId:F,lastAgentEventRef:D,lastSilenceNoticeRef:M,isAgentRunningRef:S,draftBufferRef:H,thoughtBufferRef:w,pendingRequestRef:R,stalledPostIdRef:U,currentTurnIdRef:u,steerQueuedTurnIdRef:t,thoughtExpandedRef:a,draftExpandedRef:$_}}function l4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let j=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.clientX,F=$.current||280,D=X.currentTarget;D.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=E,S=(w)=>{M=w.clientX;let R=Math.min(Math.max(F+(w.clientX-E),160),600);L.style.setProperty("--sidebar-width",`${R}px`),$.current=R},H=()=>{let w=Math.min(Math.max(F+(M-E),160),600);$.current=w,D.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",v_("sidebarWidth",String(Math.round(w))),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",H)}).current,Y=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.touches[0];if(!E)return;let F=E.clientX,D=$.current||280,M=X.currentTarget;M.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let S=(w)=>{let R=w.touches[0];if(!R)return;w.preventDefault();let U=Math.min(Math.max(D+(R.clientX-F),160),600);L.style.setProperty("--sidebar-width",`${U}px`),$.current=U},H=()=>{M.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.userSelect="",v_("sidebarWidth",String(Math.round($.current||D))),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,W=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.clientX,F=Z.current||$.current||280,D=X.currentTarget;D.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=E,S=(w)=>{M=w.clientX;let R=Math.min(Math.max(F+(w.clientX-E),200),800);L.style.setProperty("--editor-width",`${R}px`),Z.current=R},H=()=>{let w=Math.min(Math.max(F+(M-E),200),800);Z.current=w,D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",v_("editorWidth",String(Math.round(w))),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",H)}).current,G=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.touches[0];if(!E)return;let F=E.clientX,D=Z.current||$.current||280,M=X.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let S=(w)=>{let R=w.touches[0];if(!R)return;w.preventDefault();let U=Math.min(Math.max(D+(R.clientX-F),200),800);L.style.setProperty("--editor-width",`${U}px`),Z.current=U},H=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",v_("editorWidth",String(Math.round(Z.current||D))),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Q=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.clientY,F=J?.current||200,D=X.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=E,S=(w)=>{M=w.clientY;let R=Math.min(Math.max(F-(w.clientY-E),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${R}px`),J)J.current=R},H=()=>{let w=Math.min(Math.max(F-(M-E),100),window.innerHeight*0.5);if(J)J.current=w;D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",v_("dockHeight",String(Math.round(w))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",H)}).current,N=y((X)=>{X.preventDefault();let L=_.current;if(!L)return;let E=X.touches[0];if(!E)return;let F=E.clientY,D=J?.current||200,M=X.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let S=(w)=>{let R=w.touches[0];if(!R)return;w.preventDefault();let U=Math.min(Math.max(D-(R.clientY-F),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${U}px`),J)J.current=U},H=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",v_("dockHeight",String(Math.round(J?.current||D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:j,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:W,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:N}}function o4({onTabClosed:_}={}){let $=y(_);$.current=_;let[Z,J]=v(()=>E_.getTabs()),[j,Y]=v(()=>E_.getActiveId()),[W,G]=v(()=>E_.getTabs().length>0);g(()=>{return E_.onChange((U,u)=>{J(U),Y(u),G(U.length>0)})},[]);let[Q,N]=v(()=>new Set),X=b((U)=>{N((u)=>{let t=new Set(u);if(t.has(U))t.delete(U);else t.add(U);return t})},[]),L=b((U)=>{N((u)=>{if(!u.has(U))return u;let t=new Set(u);return t.delete(U),t})},[]),E=b((U)=>{if(!U)return;let u={path:U,mode:"edit"};try{if(!l_.resolve(u)){if(!l_.get("editor")){console.warn(`[openEditor] No pane handler for: ${U}`);return}}}catch(t){console.warn(`[openEditor] paneRegistry.resolve() error for "${U}":`,t)}E_.open(U)},[]),F=b(()=>{let U=E_.getActiveId();if(U){let u=E_.get(U);if(u?.dirty){if(!window.confirm(`"${u.label}" has unsaved changes. Close anyway?`))return}E_.close(U),L(U),$.current?.(U)}},[L]),D=b((U)=>{let u=E_.get(U);if(u?.dirty){if(!window.confirm(`"${u.label}" has unsaved changes. Close anyway?`))return}E_.close(U),L(U),$.current?.(U)},[L]),M=b((U)=>{E_.activate(U)},[]),S=b((U)=>{let u=E_.getTabs().filter(($_)=>$_.id!==U&&!$_.pinned),t=u.filter(($_)=>$_.dirty).length;if(t>0){if(!window.confirm(`${t} unsaved tab${t>1?"s":""} will be closed. Continue?`))return}let a=u.map(($_)=>$_.id);E_.closeOthers(U),a.forEach(($_)=>{L($_),$.current?.($_)})},[L]),H=b(()=>{let U=E_.getTabs().filter((a)=>!a.pinned),u=U.filter((a)=>a.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let t=U.map((a)=>a.id);E_.closeAll(),t.forEach((a)=>{L(a),$.current?.(a)})},[L]),w=b((U)=>{E_.togglePin(U)},[]),R=b(()=>{let U=E_.getActiveId();if(U)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:U}}))},[]);return g(()=>{let U=(u)=>{let{oldPath:t,newPath:a,type:$_}=u.detail||{};if(!t||!a)return;if($_==="dir"){for(let N_ of E_.getTabs())if(N_.path===t||N_.path.startsWith(`${t}/`)){let __=`${a}${N_.path.slice(t.length)}`;E_.rename(N_.id,__)}}else E_.rename(t,a)};return window.addEventListener("workspace-file-renamed",U),()=>window.removeEventListener("workspace-file-renamed",U)},[]),g(()=>{let U=(u)=>{if(E_.hasUnsaved())u.preventDefault(),u.returnValue=""};return window.addEventListener("beforeunload",U),()=>window.removeEventListener("beforeunload",U)},[]),{editorOpen:W,tabStripTabs:Z,tabStripActiveId:j,previewTabs:Q,openEditor:E,closeEditor:F,handleTabClose:D,handleTabActivate:M,handleTabCloseOthers:S,handleTabCloseAll:H,handleTabTogglePin:w,handleTabTogglePreview:X,revealInExplorer:R}}function h1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,j=Z[_]??window[J],Y=Number(j);return Number.isFinite(Y)?Y:$}catch{return $}}var i1=h1("warning",30000),n4=h1("finalize",120000),r4=h1("refresh",30000),d4=30000;function s4(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function a4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function t4(_=30000){let[,$]=v(0);g(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function s2(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,j)=>J+Math.max(1,Math.ceil(j.length/$)),0)}function o1(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var z6=C3,e4=w3,H6=A3,_8=I3,$8=S3,Z8=P3,l1=typeof B1==="function"?B1:o1("getAgentContext",null),U6=typeof a0==="function"?a0:o1("getAgentModels",{current:null,models:[]}),L6=typeof z1==="function"?z1:o1("getAgentQueueState",{count:0});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l_.register(P1);l_.register(x1);l_.register(S1);M1();var F6=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(F6)l_.register(b1);function E6(){let[_,$]=v("disconnected"),[Z,J]=v(null),[j,Y]=v(null),[W,G]=v(!1),[Q,N]=v([]),[X,L]=v([]),[E,F]=v(null),{agentStatus:D,setAgentStatus:M,agentDraft:S,setAgentDraft:H,agentPlan:w,setAgentPlan:R,agentThought:U,setAgentThought:u,pendingRequest:t,setPendingRequest:a,currentTurnId:$_,setCurrentTurnId:N_,steerQueuedTurnId:__,setSteerQueuedTurnId:W_,lastAgentEventRef:e,lastSilenceNoticeRef:o,isAgentRunningRef:Y_,draftBufferRef:i,thoughtBufferRef:d,pendingRequestRef:G_,stalledPostIdRef:O_,currentTurnIdRef:j_,steerQueuedTurnIdRef:w_,thoughtExpandedRef:Z_,draftExpandedRef:Q_}=i4(),[U_,B_]=v({}),[M_,V_]=v(null),[H_,R_]=v(null),[b_,A_]=v(!1),[u_,D_]=v(null),[c_,d_]=v(null),[k_,I_]=v(0),{notificationsEnabled:W0,notificationPermission:K0,toggleNotifications:G0,notify:f0}=p4(),[B0,C_]=v(()=>new Set),[g_,Q0]=v(()=>X2("workspaceOpen",!0)),A=y(null),{editorOpen:r,tabStripTabs:y_,tabStripActiveId:S_,previewTabs:N0,openEditor:z0,closeEditor:v0,handleTabClose:H0,handleTabActivate:t_,handleTabCloseOthers:P0,handleTabCloseAll:Y0,handleTabTogglePin:j0,handleTabTogglePreview:p_,revealInExplorer:r0}=o4({onTabClosed:(V)=>A.current?.(V)}),g0=y(null),X0=y(null);g(()=>{let V=g0.current;if(!V)return;if(X0.current)X0.current.dispose(),X0.current=null;let O=S_;if(!O)return;let P={path:O,mode:"edit"},T=l_.resolve(P)||l_.get("editor");if(!T){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let m=T.mount(V,P);X0.current=m,m.onDirtyChange?.((h)=>{E_.setDirty(O,h)}),m.onSaveRequest?.(()=>{}),m.onClose?.(()=>{v0()});let I=E_.getViewState(O);if(I&&typeof m.restoreViewState==="function")requestAnimationFrame(()=>m.restoreViewState(I));if(typeof m.onViewStateChange==="function")m.onViewStateChange((h)=>{E_.saveViewState(O,h)});return requestAnimationFrame(()=>m.focus()),()=>{if(X0.current===m)m.dispose(),X0.current=null}},[S_,v0]);let[u0,e_]=v({name:"You",avatar_url:null,avatar_background:null}),M0=y(!1),_0=y(!1),V0=y({}),O0=y({name:null,avatar_url:null}),o_=y({currentHashtag:null,searchQuery:null}),U0=y(null),b0=y(null),d0=y(0),p0=y(0),m_=y(0),s_=y(null),$0=y(null),T_=y(null),n_=y(0),Z0=y({title:null,avatarBase:null}),L0=y(null),D0=b(()=>{if(L0.current)clearTimeout(L0.current),L0.current=null;F(null)},[]);t4(30000),g(()=>{return d3()},[]),g(()=>{v_("workspaceOpen",String(g_))},[g_]),g(()=>{return()=>{D0()}},[D0]),g(()=>{V0.current=U_||{}},[U_]),g(()=>{O0.current=u0||{name:"You",avatar_url:null,avatar_background:null}},[u0]);let k0=b((V,O,P=null)=>{if(typeof document>"u")return;let T=(V||"").trim()||"PiClaw";if(Z0.current.title!==T){document.title=T;let x_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(x_&&x_.getAttribute("content")!==T)x_.setAttribute("content",T);Z0.current.title=T}let m=document.getElementById("dynamic-favicon");if(!m)return;let I=m.getAttribute("data-default")||m.getAttribute("href")||"/favicon.ico",h=O||I,q_=O?`${h}|${P||""}`:h;if(Z0.current.avatarBase!==q_){let x_=O?`${h}${h.includes("?")?"&":"?"}v=${P||Date.now()}`:h;m.setAttribute("href",x_),Z0.current.avatarBase=q_}},[]),h0=b((V)=>{if(!V)return;N((O)=>O.includes(V)?O:[...O,V])},[]),q0=b((V)=>{N((O)=>O.filter((P)=>P!==V))},[]);A.current=q0;let N2=b(()=>{N([])},[]),R0=b((V,O=null,P="info",T=3000)=>{D0(),F({title:V,detail:O||null,kind:P||"info"}),L0.current=setTimeout(()=>{F((m)=>m?.title===V?null:m)},T)},[D0]),z=b((V)=>{if(typeof V!=="string")return;let O=V.trim();if(!O){R0("No file selected","Use a valid file path from a file pill.","warning");return}if(!r){R0("Editor pane is not open","Open the editor pane to open files from pills.","warning");return}if(/^[a-z][a-z0-9+.-]*:/i.test(O)){R0("Cannot open external path from file pill","Use an in-workspace file path.","warning");return}let T={path:O,mode:"edit"};if(!l_.resolve(T)){R0("No editor available",`No editor can open: ${O}`,"warning");return}z0(O)},[r,z0,R0]),x=b(()=>{let V=S_;if(V)h0(V)},[S_,h0]),s=b((V)=>{if(!V)return;L((O)=>O.includes(V)?O:[...O,V])},[]),X_=b(async(V)=>{let O=(T)=>{T.scrollIntoView({behavior:"smooth",block:"center"}),T.classList.add("post-highlight"),setTimeout(()=>T.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+V);if(P){O(P);return}try{let m=(await y3(V))?.thread?.[0];if(!m)return;a_((I)=>{if(!I)return[m];if(I.some((h)=>h.id===m.id))return I;return[...I,m]}),requestAnimationFrame(()=>{setTimeout(()=>{let I=document.getElementById("post-"+V);if(I)O(I)},50)})}catch(T){console.error("[scrollToMessage] Failed to fetch message",V,T)}},[]),L_=b((V)=>{L((O)=>O.filter((P)=>P!==V))},[]),f_=b(()=>{L([])},[]),z_=b((V={})=>{let O=Date.now();if(e.current=O,V.running)Y_.current=!0;if(V.clearSilence)o.current=0},[]),h_=b(()=>{if(T_.current)clearTimeout(T_.current),T_.current=null;n_.current=0},[]);g(()=>()=>{h_()},[h_]);let I0=b(()=>{h_(),M((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:O,lastActivity:P,...T}=V;return T})},[h_]),i_=b((V)=>{if(!V)return;h_();let O=Date.now();n_.current=O,M({type:V.type||"active",last_activity:!0}),T_.current=setTimeout(()=>{if(n_.current!==O)return;M((P)=>{if(!P||!(P.last_activity||P.lastActivity))return P;return null})},d4)},[h_]),F_=b(()=>{Y_.current=!1,e.current=null,o.current=0,i.current="",d.current="",G_.current=null,$0.current=null,j_.current=null,w_.current=null,h_(),N_(null),W_(null),Z_.current=!1,Q_.current=!1},[h_,N_,W_]),P_=b((V)=>{if(!V)return;if(j_.current===V)return;j_.current=V,N_(V),w_.current=null,W_(null),i.current="",d.current="",H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),G_.current=null,$0.current=null,Z_.current=!1,Q_.current=!1},[N_,W_]),C0=b((V)=>{if(typeof document<"u"){let x_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&x_)return}let O=$0.current;if(!O||!O.post)return;if(V&&O.turnId&&O.turnId!==V)return;let P=O.post;if(P.id&&s_.current===P.id)return;let T=String(P?.data?.content||"").trim();if(!T)return;s_.current=P.id||s_.current,$0.current=null;let m=T.replace(/\s+/g," ").slice(0,200),I=V0.current||{},q_=(P?.data?.agent_id?I[P.data.agent_id]:null)?.name||"Pi";f0(q_,m)},[f0]),t0=b(async(V,O)=>{if(V!=="thought"&&V!=="draft")return;let P=j_.current;if(V==="thought"){if(Z_.current=O,P)try{await $8(P,"thought",O)}catch(T){console.warn("Failed to update thought visibility:",T)}if(!O)return;try{let T=P?await _8(P,"thought"):null;if(T?.text)d.current=T.text;u((m)=>({...m||{text:"",totalLines:0},fullText:d.current||m?.fullText||"",totalLines:Number.isFinite(T?.total_lines)?T.total_lines:m?.totalLines||0}))}catch(T){console.warn("Failed to fetch full thought:",T)}return}if(Q_.current=O,P)try{await $8(P,"draft",O)}catch(T){console.warn("Failed to update draft visibility:",T)}if(!O)return;try{let T=P?await _8(P,"draft"):null;if(T?.text)i.current=T.text;H((m)=>({...m||{text:"",totalLines:0},fullText:i.current||m?.fullText||"",totalLines:Number.isFinite(T?.total_lines)?T.total_lines:m?.totalLines||0}))}catch(T){console.warn("Failed to fetch full draft:",T)}},[]),V2=y(null),O2=b(()=>{if(U0.current)U0.current.scrollTop=0},[]);V2.current=O2;let a2=b((V)=>{let O=U0.current;if(!O||typeof V!=="function"){V?.();return}let{currentHashtag:P,searchQuery:T}=o_.current||{},m=!(T&&!P),I=m?O.scrollHeight-O.scrollTop:O.scrollTop;V(),requestAnimationFrame(()=>{let h=U0.current;if(!h)return;if(m){let q_=Math.max(h.scrollHeight-I,0);h.scrollTop=q_}else{let q_=Math.max(h.scrollHeight-h.clientHeight,0),x_=Math.min(I,q_);h.scrollTop=x_}})},[]),y0=b((V)=>{let O=U0.current;if(!O||typeof V!=="function"){V?.();return}let P=O.scrollTop;V(),requestAnimationFrame(()=>{let T=U0.current;if(!T)return;let m=Math.max(T.scrollHeight-T.clientHeight,0);T.scrollTop=Math.min(P,m)})},[]),{posts:i0,setPosts:a_,hasMore:s0,setHasMore:q2,hasMoreRef:D2,loadPosts:S0,refreshTimeline:w0,loadMore:t2,loadMoreRef:k2}=h4({preserveTimelineScroll:a2,preserveTimelineScrollTop:y0}),e0=b(()=>{let V=O_.current;if(!V)return;a_((O)=>O?O.filter((P)=>P.id!==V):O),O_.current=null},[a_]),{handleSplitterMouseDown:e2,handleSplitterTouchStart:_1,handleEditorSplitterMouseDown:_2,handleEditorSplitterTouchStart:$1,handleDockSplitterMouseDown:Z1,handleDockSplitterTouchStart:J1}=l4({appShellRef:b0,sidebarWidthRef:d0,editorWidthRef:p0,dockHeightRef:m_}),c0=b(()=>{if(!Y_.current)return;Y_.current=!1,o.current=0,e.current=null,j_.current=null,N_(null),Z_.current=!1,Q_.current=!1;let V=(i.current||"").trim();if(i.current="",d.current="",H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),G_.current=null,$0.current=null,!V){M({type:"error",title:"Response stalled — No content received"});return}let P=`${V}${`

⚠️ Response may be incomplete — the model stopped responding`}`,T=Date.now(),m=new Date().toISOString(),I={id:T,timestamp:m,data:{type:"agent_response",content:P,agent_id:"default",is_local_stall:!0}};O_.current=T,a_((h)=>h?E2([...h,I]):[I]),V2.current?.(),M(null)},[N_]);g(()=>{o_.current={currentHashtag:Z,searchQuery:j}},[Z,j]),g(()=>{let V=Math.min(1000,Math.max(100,Math.floor(i1/2))),O=setInterval(()=>{if(!Y_.current)return;if(G_.current)return;let P=e.current;if(!P)return;let T=Date.now(),m=T-P;if(m>=n4){c0();return}if(m>=i1){if(T-o.current>=r4){let I=Math.floor(m/1000);M({type:"waiting",title:`Waiting for model… No events for ${I}s`}),o.current=T}}},V);return()=>clearInterval(O)},[c0]);let B2=b(async()=>{try{let V=await l1();if(V)d_(V)}catch(V){console.warn("Failed to fetch agent context:",V)}},[]),l0=b(async()=>{try{let V=await Z8("web:default");if(!V||V.status!=="active"||!V.data){if(_0.current){let{currentHashtag:T,searchQuery:m}=o_.current||{};if(!T&&!m)w0()}_0.current=!1,F_(),M(null),H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),G_.current=null;return}_0.current=!0;let O=V.data,P=O.turn_id||O.turnId;if(P)P_(P);if(z_({running:!0,clearSilence:!0}),I0(),M(O),V.thought&&V.thought.text)u((T)=>{if(T&&T.text&&T.text.length>=V.thought.text.length)return T;return d.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)H((T)=>{if(T&&T.text&&T.text.length>=V.draft.text.length)return T;return i.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}})}catch(V){console.warn("Failed to fetch agent status:",V)}},[F_,I0,z_,w0,P_]),Y1=b((V)=>{if($(V),V!=="connected"){M(null),H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),G_.current=null,F_();return}if(!M0.current){M0.current=!0,l0();return}let{currentHashtag:O,searchQuery:P}=o_.current;if(!O&&!P)w0();l0()},[F_,w0,l0]),j1=b(async(V)=>{J(V),a_(null),await S0(V)},[S0]),X1=b(async()=>{J(null),Y(null),a_(null),await S0()},[S0]),W1=b(async(V)=>{if(!V||!V.trim())return;Y(V.trim()),J(null),a_(null);try{let O=await z6(V.trim());a_(O.results),q2(!1)}catch(O){console.error("Failed to search:",O),a_([])}},[]),K=b(()=>{G(!0),Y(null),J(null),a_([])},[]),q=b(()=>{G(!1),Y(null),S0()},[S0]),k=b(()=>{},[]),C=b(async(V)=>{if(!V)return;let O=V.id,P=i0?.filter((m)=>m?.data?.thread_id===O&&m?.id!==O).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let T=(m)=>{if(!m.length)return;C_((h)=>{let q_=new Set(h);return m.forEach((x_)=>q_.add(x_)),q_}),setTimeout(()=>{if(y0(()=>{a_((h)=>h?h.filter((q_)=>!m.includes(q_.id)):h)}),C_((h)=>{let q_=new Set(h);return m.forEach((x_)=>q_.delete(x_)),q_}),D2.current)k2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await e4(O,P>0);if(m?.ids?.length)T(m.ids)}catch(m){let I=m?.message||"";if(P===0&&I.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let q_=await e4(O,!0);if(q_?.ids?.length)T(q_.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${I}`)}},[i0,y0]),f=b(async()=>{try{let V=await H6();B_(s4(V));let O=V?.user||{};e_((T)=>{let m=typeof O.name==="string"&&O.name.trim()?O.name.trim():"You",I=typeof O.avatar_url==="string"?O.avatar_url.trim():null,h=typeof O.avatar_background==="string"&&O.avatar_background.trim()?O.avatar_background.trim():null;if(T.name===m&&T.avatar_url===I&&T.avatar_background===h)return T;return{name:m,avatar_url:I,avatar_background:h}});let P=(V?.agents||[]).find((T)=>T.id==="default");if(P?.model)V_(P.model);k0(P?.name,P?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=await l1();if(V)d_(V)}catch{}},[k0]);g(()=>{f();let V=W2("sidebarWidth",null),O=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(d0.current=O,b0.current)b0.current.style.setProperty("--sidebar-width",`${O}px`)},[f]);let p=b((V)=>{if(!V||typeof V!=="object")return;let O=V.agent_id;if(!O)return;let{agent_name:P,agent_avatar:T}=V;if(!P&&T===void 0)return;let m=V0.current?.[O]||{id:O},I=m.name||null,h=m.avatar_url??m.avatarUrl??m.avatar??null,q_=!1,x_=!1;if(P&&P!==m.name)I=P,x_=!0;if(T!==void 0){let Z2=typeof T==="string"?T.trim():null,n1=typeof h==="string"?h.trim():null,J2=Z2||null;if(J2!==(n1||null))h=J2,q_=!0}if(!x_&&!q_)return;if(B_((Z2)=>{let J2={...Z2[O]||{id:O}};if(x_)J2.name=I;if(q_)J2.avatar_url=h;return{...Z2,[O]:J2}}),O==="default")k0(I,h,q_?Date.now():null)},[k0]),n=b((V)=>{if(!V||typeof V!=="object")return;let O=V.user_name??V.userName,P=V.user_avatar??V.userAvatar,T=V.user_avatar_background??V.userAvatarBackground;if(O===void 0&&P===void 0&&T===void 0)return;e_((m)=>{let I=typeof O==="string"&&O.trim()?O.trim():m.name||"You",h=P===void 0?m.avatar_url:typeof P==="string"&&P.trim()?P.trim():null,q_=T===void 0?m.avatar_background:typeof T==="string"&&T.trim()?T.trim():null;if(m.name===I&&m.avatar_url===h&&m.avatar_background===q_)return m;return{name:I,avatar_url:h,avatar_background:q_}})},[]),l=b((V)=>{if(!V||typeof V!=="object")return;let O=V.model??V.current;if(O!==void 0)V_(O);if(V.thinking_level!==void 0)R_(V.thinking_level??null);if(V.supports_thinking!==void 0)A_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)D_(V.provider_usage??null)},[]),c=b(()=>{U6().then((V)=>{if(V)l(V)}).catch(()=>{})},[l]),J_=b(()=>{L6().then((V)=>{let O=Number(V?.count);if(Number.isFinite(O))I_(O)}).catch(()=>{})},[]),J0=b((V)=>{if(!V||typeof V!=="object")return;if(V?.queued==="followup"||V?.queued==="steer")J_()},[J_]),A0=b(()=>{c(),J_()},[c,J_]);g(()=>{A0();let V=setInterval(()=>{c(),J_()},60000);return()=>clearInterval(V)},[A0,c,J_]);let F0=b((V,O)=>{let P=O?.turn_id;if(p(O),n(O),V==="ui_theme"){s3(O);return}if(V?.startsWith("agent_"))I0();if(V==="connected"){M(null),H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),G_.current=null,F_(),Z8("web:default").then((I)=>{if(!I||I.status!=="active"||!I.data)return;let h=I.data,q_=h.turn_id||h.turnId;if(q_)P_(q_);if(z_({clearSilence:!0}),i_(h),I.thought&&I.thought.text)d.current=I.thought.text,u({text:I.thought.text,totalLines:I.thought.totalLines||0});if(I.draft&&I.draft.text)i.current=I.draft.text,H({text:I.draft.text,totalLines:I.draft.totalLines||0})}).catch((I)=>{console.warn("Failed to fetch agent status:",I)}),A0();return}if(V==="agent_status"){if(O.type==="done"||O.type==="error"){if(P&&j_.current&&P!==j_.current)return;if(O.type==="done"){C0(P||j_.current);let{currentHashtag:I,searchQuery:h}=o_.current||{};if(!I&&!h)w0();if(O.context_usage)d_(O.context_usage)}if(_0.current=!1,F_(),H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null),O.type==="error")M({type:"error",title:O.title||"Agent error"}),setTimeout(()=>M(null),8000);else M(null)}else{if(P)P_(P);if(z_({running:!0,clearSilence:!0}),O.type==="thinking")i.current="",d.current="",H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0});M(O)}return}if(V==="agent_steer_queued"){if(P&&j_.current&&P!==j_.current)return;let I=P||j_.current;if(!I)return;w_.current=I,W_(I);return}if(V==="agent_followup_queued"){I_((I)=>I+1),J_();return}if(V==="agent_followup_consumed"){I_((I)=>Math.max(0,I-1)),J_();return}if(V==="agent_draft_delta"){if(P&&j_.current&&P!==j_.current)return;if(P&&!j_.current)P_(P);if(z_({running:!0,clearSilence:!0}),O?.reset)i.current="";if(O?.delta)i.current+=O.delta;if(Q_.current){let I=i.current;H((h)=>({text:h?.text||"",totalLines:s2(I),fullText:I}))}else{let I=i.current,h=s2(I);H({text:I,totalLines:h})}return}if(V==="agent_draft"){if(P&&j_.current&&P!==j_.current)return;if(P&&!j_.current)P_(P);z_({running:!0,clearSilence:!0});let I=O.text||"",h=O.mode||(O.kind==="plan"?"replace":"append"),q_=Number.isFinite(O.total_lines)?O.total_lines:I?I.replace(/\r\n/g,`
`).split(`
`).length:0;if(O.kind==="plan")if(h==="replace")R(I);else R((x_)=>(x_||"")+I);else if(!Q_.current)i.current=I,H({text:I,totalLines:q_});return}if(V==="agent_thought_delta"){if(P&&j_.current&&P!==j_.current)return;if(P&&!j_.current)P_(P);if(z_({running:!0,clearSilence:!0}),O?.reset)d.current="";if(typeof O?.delta==="string")d.current+=O.delta;if(Z_.current){let I=d.current;u((h)=>({text:h?.text||"",totalLines:s2(I),fullText:I}))}return}if(V==="agent_thought"){if(P&&j_.current&&P!==j_.current)return;if(P&&!j_.current)P_(P);z_({running:!0,clearSilence:!0});let I=O.text||"",h=Number.isFinite(O.total_lines)?O.total_lines:I?I.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Z_.current)d.current=I,u({text:I,totalLines:h});return}if(V==="agent_request"){if(console.log("Agent request:",O),P&&j_.current&&P!==j_.current)return;if(P)P_(P);z_({running:!0,clearSilence:!0}),a(O),G_.current=O;return}if(V==="agent_request_timeout"){if(console.log("Agent request timeout:",O),P&&j_.current&&P!==j_.current)return;a(null),G_.current=null,F_(),M({type:"error",title:"Permission request timed out"});return}if(V==="model_changed"){if(O?.model!==void 0)V_(O.model);if(O?.thinking_level!==void 0)R_(O.thinking_level??null);if(O?.supports_thinking!==void 0)A_(Boolean(O.supports_thinking));l1().then((I)=>{if(I)d_(I)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:O}));return}let{currentHashtag:T,searchQuery:m}=o_.current;if(V==="agent_response")e0(),$0.current={post:O,turnId:j_.current};if(!T&&!m&&(V==="new_post"||V==="agent_response"))a_((I)=>{if(!I)return[O];if(I.some((h)=>h.id===O.id))return I;return[...I,O]}),V2.current?.();if(V==="interaction_updated")a_((I)=>I?I.map((h)=>h.id===O.id?O:h):I);if(V==="interaction_deleted"){let I=O?.ids||[];if(I.length){y0(()=>{a_((x_)=>x_?x_.filter((Z2)=>!I.includes(Z2.id)):x_)});let{currentHashtag:h,searchQuery:q_}=o_.current;if(D2.current&&!h&&!q_)k2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[F_,I0,z_,C0,y0,w0,e0,P_,i_,p,n,c]);g(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=F0,V.reset=()=>{e0(),F_(),M(null),H({text:"",totalLines:0}),R(""),u({text:"",totalLines:0}),a(null)},V.finalize=()=>c0(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[F_,c0,F0,e0]),g4({handleSseEvent:F0,handleConnectionStatusChange:Y1,loadPosts:S0}),g(()=>{if(!i0||i0.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let O=V.slice(5);X_(O),history.replaceState(null,"",location.pathname+location.search)},[i0,X_]);let K1=D!==null;g(()=>{if(_!=="connected")return;let O=setInterval(()=>{if(K1)l0(),B2();else{let{currentHashtag:P,searchQuery:T}=o_.current||{};if(!P&&!T)w0();l0(),B2()}},K1?15000:60000);return()=>clearInterval(O)},[_,K1,l0,B2,w0]);let J8=b(()=>{Q0((V)=>!V)},[]);g(()=>{if(!r)return;if(typeof window>"u")return;let V=b0.current;if(!V)return;if(!p0.current){let O=W2("editorWidth",null),P=d0.current||280;p0.current=Number.isFinite(O)?O:P}if(V.style.setProperty("--editor-width",`${p0.current}px`),!m_.current){let O=W2("dockHeight",null);m_.current=Number.isFinite(O)?O:200}V.style.setProperty("--dock-height",`${m_.current}px`)},[r]);let $2=l_.getDockPanes().length>0,[G1,Y8]=v(!1),C2=b(()=>Y8((V)=>!V),[]);g(()=>{if(!$2)return;let V=(O)=>{if(O.ctrlKey&&O.key==="`")O.preventDefault(),C2()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[C2,$2]);let j8=Boolean(__&&__===(D?.turn_id||$_));return B`
        <div class=${`app-shell${g_?"":" workspace-collapsed"}${r?" editor-open":""}`} ref=${b0}>
            <${u4}
                onFileSelect=${h0}
                visible=${g_}
                active=${g_||r}
                onOpenEditor=${z0}
            />
            <button
                class=${`workspace-toggle-tab${g_?" open":" closed"}`}
                onClick=${J8}
                title=${g_?"Hide workspace":"Show workspace"}
                aria-label=${g_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${e2} onTouchStart=${_1}></div>
            ${r&&B`
                <div class="editor-pane-container">
                    <${R4}
                        tabs=${y_}
                        activeId=${S_}
                        onActivate=${t_}
                        onClose=${H0}
                        onCloseOthers=${P0}
                        onCloseAll=${Y0}
                        onTogglePin=${j0}
                        onTogglePreview=${p_}
                        previewTabs=${N0}
                        onToggleDock=${$2?C2:void 0}
                        dockVisible=${$2&&G1}
                    />
                    <div class="editor-pane-host" ref=${g0}></div>
                    ${S_&&N0.has(S_)&&B`
                        <${m4}
                            getContent=${()=>X0.current?.getContent?.()}
                            path=${S_}
                            onClose=${()=>p_(S_)}
                        />
                    `}
                    ${$2&&G1&&B`<div class="dock-splitter" onMouseDown=${Z1} onTouchStart=${J1}></div>`}
                    ${$2&&B`<div class=${`dock-panel${G1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${C2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${_2} onTouchStart=${$1}></div>
            `}
            <div class="container">
                ${j&&a4()&&B`<div class="search-results-spacer"></div>`}
                ${(Z||j)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${X1}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${j}`}</span>
                    </div>
                `}
                <${z4}
                    posts=${i0}
                    hasMore=${s0}
                    onLoadMore=${t2}
                    timelineRef=${U0}
                    onHashtagClick=${j1}
                    onMessageRef=${s}
                    onScrollToMessage=${X_}
                    onFileRef=${z}
                    onPostClick=${void 0}
                    onDeletePost=${C}
                    emptyMessage=${Z?`No posts with #${Z}`:j?`No results for "${j}"`:void 0}
                    agents=${U_}
                    user=${u0}
                    reverse=${!(j&&!Z)}
                    removingPostIds=${B0}
                    searchQuery=${j}
                />
                <${Q4}
                    status=${D}
                    draft=${S}
                    plan=${w}
                    thought=${U}
                    pendingRequest=${t}
                    intent=${E}
                    turnId=${$_}
                    steerQueued=${j8}
                    onPanelToggle=${t0}
                />
                <${p3}
                    onPost=${()=>{S0(),O2()}}
                    onFocus=${O2}
                    searchMode=${W}
                    onSearch=${W1}
                    onEnterSearch=${K}
                    onExitSearch=${q}
                    fileRefs=${Q}
                    onRemoveFileRef=${q0}
                    onClearFileRefs=${N2}
                    messageRefs=${X}
                    onRemoveMessageRef=${L_}
                    onClearMessageRefs=${f_}
                    activeEditorPath=${S_}
                    onAttachEditorFile=${x}
                    onOpenFilePill=${z}
                    followupQueueCount=${k_}
                    onMessageResponse=${J0}
                    activeModel=${M_}
                    modelUsage=${u_}
                    thinkingLevel=${H_}
                    supportsThinking=${b_}
                    contextUsage=${c_}
                    notificationsEnabled=${W0}
                    notificationPermission=${K0}
                    onToggleNotifications=${G0}
                    onModelChange=${V_}
                    onModelStateChange=${l}
                />
                <${V4} status=${_} />
                <${N4}
                    request=${t}
                    onRespond=${()=>{a(null),G_.current=null}}
                />
            </div>
        </div>
    `}L3(B`<${E6} />`,document.getElementById("app"));

//# debugId=03A4E7EFF906461364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
