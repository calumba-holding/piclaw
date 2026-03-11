var A4=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,J)=>(typeof require<"u"?require:$)[J]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var q2,X_,f1,e0,v1,D1,M4,O2={},R1=[],b4=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function R0(_,$){for(var J in $)_[J]=$[J];return _}function u1(_){var $=_.parentNode;$&&$.removeChild(_)}function m1(_,$,J){var Y,X,Z,K={};for(Z in $)Z=="key"?Y=$[Z]:Z=="ref"?X=$[Z]:K[Z]=$[Z];if(arguments.length>2&&(K.children=arguments.length>3?q2.call(arguments,2):J),typeof _=="function"&&_.defaultProps!=null)for(Z in _.defaultProps)K[Z]===void 0&&(K[Z]=_.defaultProps[Z]);return G2(_,K,Y,X,null)}function G2(_,$,J,Y,X){var Z={type:_,props:$,key:J,ref:Y,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++f1:X};return X_.vnode!=null&&X_.vnode(Z),Z}function B2(_){return _.children}function V2(_,$){this.props=_,this.context=$}function d0(_,$){if($==null)return _.__?d0(_.__,_.__.__k.indexOf(_)+1):null;for(var J;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null)return J.__e;return typeof _.type=="function"?d0(_):null}function g1(_){var $,J;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null){_.__e=_.__c.base=J.__e;break}return g1(_)}}function C1(_){(!_.__d&&(_.__d=!0)&&e0.push(_)&&!N2.__r++||D1!==X_.debounceRendering)&&((D1=X_.debounceRendering)||v1)(N2)}function N2(){for(var _;N2.__r=e0.length;)_=e0.sort(function($,J){return $.__v.__b-J.__v.__b}),e0=[],_.some(function($){var J,Y,X,Z,K,G;$.__d&&(K=(Z=(J=$).__v).__e,(G=J.__P)&&(Y=[],(X=R0({},Z)).__v=Z.__v+1,d2(G,Z,X,J.__n,G.ownerSVGElement!==void 0,Z.__h!=null?[K]:null,Y,K==null?d0(Z):K,Z.__h),i1(Y,Z),Z.__e!=K&&g1(Z)))})}function c1(_,$,J,Y,X,Z,K,G,V,W){var Q,y,F,C,N,z,L,w=Y&&Y.__k||R1,b=w.length;for(J.__k=[],Q=0;Q<$.length;Q++)if((C=J.__k[Q]=(C=$[Q])==null||typeof C=="boolean"?null:typeof C=="string"||typeof C=="number"||typeof C=="bigint"?G2(null,C,null,null,C):Array.isArray(C)?G2(B2,{children:C},null,null,null):C.__b>0?G2(C.type,C.props,C.key,null,C.__v):C)!=null){if(C.__=J,C.__b=J.__b+1,(F=w[Q])===null||F&&C.key==F.key&&C.type===F.type)w[Q]=void 0;else for(y=0;y<b;y++){if((F=w[y])&&C.key==F.key&&C.type===F.type){w[y]=void 0;break}F=null}d2(_,C,F=F||O2,X,Z,K,G,V,W),N=C.__e,(y=C.ref)&&F.ref!=y&&(L||(L=[]),F.ref&&L.push(F.ref,null,C),L.push(y,C.__c||N,C)),N!=null?(z==null&&(z=N),typeof C.type=="function"&&C.__k!=null&&C.__k===F.__k?C.__d=V=p1(C,V,_):V=h1(_,C,F,w,N,V),W||J.type!=="option"?typeof J.type=="function"&&(J.__d=V):_.value=""):V&&F.__e==V&&V.parentNode!=_&&(V=d0(F))}for(J.__e=z,Q=b;Q--;)w[Q]!=null&&(typeof J.type=="function"&&w[Q].__e!=null&&w[Q].__e==J.__d&&(J.__d=d0(Y,Q+1)),o1(w[Q],w[Q]));if(L)for(Q=0;Q<L.length;Q++)l1(L[Q],L[++Q],L[++Q])}function p1(_,$,J){var Y,X;for(Y=0;Y<_.__k.length;Y++)(X=_.__k[Y])&&(X.__=_,$=typeof X.type=="function"?p1(X,$,J):h1(J,X,X,_.__k,X.__e,$));return $}function h1(_,$,J,Y,X,Z){var K,G,V;if($.__d!==void 0)K=$.__d,$.__d=void 0;else if(J==null||X!=Z||X.parentNode==null)_:if(Z==null||Z.parentNode!==_)_.appendChild(X),K=null;else{for(G=Z,V=0;(G=G.nextSibling)&&V<Y.length;V+=2)if(G==X)break _;_.insertBefore(X,Z),K=Z}return K!==void 0?K:X.nextSibling}function y1(_,$,J){$[0]==="-"?_.setProperty($,J):_[$]=J==null?"":typeof J!="number"||b4.test($)?J:J+"px"}function j2(_,$,J,Y,X){var Z;_:if($==="style")if(typeof J=="string")_.style.cssText=J;else{if(typeof Y=="string"&&(_.style.cssText=Y=""),Y)for($ in Y)J&&$ in J||y1(_.style,$,"");if(J)for($ in J)Y&&J[$]===Y[$]||y1(_.style,$,J[$])}else if($[0]==="o"&&$[1]==="n")Z=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Z]=J,J?Y||_.addEventListener($,Z?w1:k1,Z):_.removeEventListener($,Z?w1:k1,Z);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=J==null?"":J;break _}catch(K){}typeof J=="function"||(J!=null&&(J!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,J):_.removeAttribute($))}}function k1(_){this.l[_.type+!1](X_.event?X_.event(_):_)}function w1(_){this.l[_.type+!0](X_.event?X_.event(_):_)}function d2(_,$,J,Y,X,Z,K,G,V){var W,Q,y,F,C,N,z,L,w,b,v,R=$.type;if($.constructor!==void 0)return null;J.__h!=null&&(V=J.__h,G=$.__e=J.__e,$.__h=null,Z=[G]),(W=X_.__b)&&W($);try{_:if(typeof R=="function"){if(L=$.props,w=(W=R.contextType)&&Y[W.__c],b=W?w?w.props.value:W.__:Y,J.__c?z=(Q=$.__c=J.__c).__=Q.__E:(("prototype"in R)&&R.prototype.render?$.__c=Q=new R(L,b):($.__c=Q=new V2(L,b),Q.constructor=R,Q.render=I4),w&&w.sub(Q),Q.props=L,Q.state||(Q.state={}),Q.context=b,Q.__n=Y,y=Q.__d=!0,Q.__h=[]),Q.__s==null&&(Q.__s=Q.state),R.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=R0({},Q.__s)),R0(Q.__s,R.getDerivedStateFromProps(L,Q.__s))),F=Q.props,C=Q.state,y)R.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(R.getDerivedStateFromProps==null&&L!==F&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(L,b),!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(L,Q.__s,b)===!1||$.__v===J.__v){Q.props=L,Q.state=Q.__s,$.__v!==J.__v&&(Q.__d=!1),Q.__v=$,$.__e=J.__e,$.__k=J.__k,$.__k.forEach(function(r){r&&(r.__=$)}),Q.__h.length&&K.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(L,Q.__s,b),Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(F,C,N)})}Q.context=b,Q.props=L,Q.state=Q.__s,(W=X_.__r)&&W($),Q.__d=!1,Q.__v=$,Q.__P=_,W=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s,Q.getChildContext!=null&&(Y=R0(R0({},Y),Q.getChildContext())),y||Q.getSnapshotBeforeUpdate==null||(N=Q.getSnapshotBeforeUpdate(F,C)),v=W!=null&&W.type===B2&&W.key==null?W.props.children:W,c1(_,Array.isArray(v)?v:[v],$,J,Y,X,Z,K,G,V),Q.base=$.__e,$.__h=null,Q.__h.length&&K.push(Q),z&&(Q.__E=Q.__=null),Q.__e=!1}else Z==null&&$.__v===J.__v?($.__k=J.__k,$.__e=J.__e):$.__e=P4(J.__e,$,J,Y,X,Z,K,V);(W=X_.diffed)&&W($)}catch(r){$.__v=null,(V||Z!=null)&&($.__e=G,$.__h=!!V,Z[Z.indexOf(G)]=null),X_.__e(r,$,J)}}function i1(_,$){X_.__c&&X_.__c($,_),_.some(function(J){try{_=J.__h,J.__h=[],_.some(function(Y){Y.call(J)})}catch(Y){X_.__e(Y,J.__v)}})}function P4(_,$,J,Y,X,Z,K,G){var V,W,Q,y=J.props,F=$.props,C=$.type,N=0;if(C==="svg"&&(X=!0),Z!=null){for(;N<Z.length;N++)if((V=Z[N])&&(V===_||(C?V.localName==C:V.nodeType==3))){_=V,Z[N]=null;break}}if(_==null){if(C===null)return document.createTextNode(F);_=X?document.createElementNS("http://www.w3.org/2000/svg",C):document.createElement(C,F.is&&F),Z=null,G=!1}if(C===null)y===F||G&&_.data===F||(_.data=F);else{if(Z=Z&&q2.call(_.childNodes),W=(y=J.props||O2).dangerouslySetInnerHTML,Q=F.dangerouslySetInnerHTML,!G){if(Z!=null)for(y={},N=0;N<_.attributes.length;N++)y[_.attributes[N].name]=_.attributes[N].value;(Q||W)&&(Q&&(W&&Q.__html==W.__html||Q.__html===_.innerHTML)||(_.innerHTML=Q&&Q.__html||""))}if(function(z,L,w,b,v){var R;for(R in w)R==="children"||R==="key"||R in L||j2(z,R,null,w[R],b);for(R in L)v&&typeof L[R]!="function"||R==="children"||R==="key"||R==="value"||R==="checked"||w[R]===L[R]||j2(z,R,L[R],w[R],b)}(_,F,y,X,G),Q)$.__k=[];else if(N=$.props.children,c1(_,Array.isArray(N)?N:[N],$,J,Y,X&&C!=="foreignObject",Z,K,Z?Z[0]:J.__k&&d0(J,0),G),Z!=null)for(N=Z.length;N--;)Z[N]!=null&&u1(Z[N]);G||(("value"in F)&&(N=F.value)!==void 0&&(N!==_.value||C==="progress"&&!N)&&j2(_,"value",N,y.value,!1),("checked"in F)&&(N=F.checked)!==void 0&&N!==_.checked&&j2(_,"checked",N,y.checked,!1))}return _}function l1(_,$,J){try{typeof _=="function"?_($):_.current=$}catch(Y){X_.__e(Y,J)}}function o1(_,$,J){var Y,X;if(X_.unmount&&X_.unmount(_),(Y=_.ref)&&(Y.current&&Y.current!==_.__e||l1(Y,null,$)),(Y=_.__c)!=null){if(Y.componentWillUnmount)try{Y.componentWillUnmount()}catch(Z){X_.__e(Z,$)}Y.base=Y.__P=null}if(Y=_.__k)for(X=0;X<Y.length;X++)Y[X]&&o1(Y[X],$,typeof _.type!="function");J||_.__e==null||u1(_.__e),_.__e=_.__d=void 0}function I4(_,$,J){return this.constructor(_,J)}function n1(_,$,J){var Y,X,Z;X_.__&&X_.__(_,$),X=(Y=typeof J=="function")?null:J&&J.__k||$.__k,Z=[],d2($,_=(!Y&&J||$).__k=m1(B2,null,[_]),X||O2,O2,$.ownerSVGElement!==void 0,!Y&&J?[J]:X?null:$.firstChild?q2.call($.childNodes):null,Z,!Y&&J?J:X?X.__e:$.firstChild,Y),i1(Z,_)}q2=R1.slice,X_={__e:function(_,$){for(var J,Y,X;$=$.__;)if((J=$.__c)&&!J.__)try{if((Y=J.constructor)&&Y.getDerivedStateFromError!=null&&(J.setState(Y.getDerivedStateFromError(_)),X=J.__d),J.componentDidCatch!=null&&(J.componentDidCatch(_),X=J.__d),X)return J.__E=J}catch(Z){_=Z}throw _}},f1=0,V2.prototype.setState=function(_,$){var J;J=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R0({},this.state),typeof _=="function"&&(_=_(R0({},J),this.props)),_&&R0(J,_),_!=null&&this.__v&&($&&this.__h.push($),C1(this))},V2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),C1(this))},V2.prototype.render=B2,e0=[],v1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N2.__r=0,M4=0;var U2,K0,A1,_2=0,o2=[],M1=X_.__b,b1=X_.__r,P1=X_.diffed,I1=X_.__c,S1=X_.unmount;function r2(_,$){X_.__h&&X_.__h(K0,_,_2||$),_2=0;var J=K0.__H||(K0.__H={__:[],__h:[]});return _>=J.__.length&&J.__.push({}),J.__[_]}function x(_){return _2=1,S4(r1,_)}function S4(_,$,J){var Y=r2(U2++,2);return Y.t=_,Y.__c||(Y.__=[J?J($):r1(void 0,$),function(X){var Z=Y.t(Y.__[0],X);Y.__[0]!==Z&&(Y.__=[Z,Y.__[1]],Y.__c.setState({}))}],Y.__c=K0),Y.__}function m(_,$){var J=r2(U2++,3);!X_.__s&&d1(J.__H,$)&&(J.__=_,J.__H=$,K0.__H.__h.push(J))}function k(_){return _2=5,M0(function(){return{current:_}},[])}function M0(_,$){var J=r2(U2++,7);return d1(J.__H,$)&&(J.__=_(),J.__H=$,J.__h=_),J.__}function I(_,$){return _2=8,M0(function(){return _},$)}function T4(){o2.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(W2),_.__H.__h.forEach(n2),_.__H.__h=[]}catch($){_.__H.__h=[],X_.__e($,_.__v)}}),o2=[]}X_.__b=function(_){K0=null,M1&&M1(_)},X_.__r=function(_){b1&&b1(_),U2=0;var $=(K0=_.__c).__H;$&&($.__h.forEach(W2),$.__h.forEach(n2),$.__h=[])},X_.diffed=function(_){P1&&P1(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(o2.push($)!==1&&A1===X_.requestAnimationFrame||((A1=X_.requestAnimationFrame)||function(J){var Y,X=function(){clearTimeout(Z),T1&&cancelAnimationFrame(Y),setTimeout(J)},Z=setTimeout(X,100);T1&&(Y=requestAnimationFrame(X))})(T4)),K0=void 0},X_.__c=function(_,$){$.some(function(J){try{J.__h.forEach(W2),J.__h=J.__h.filter(function(Y){return!Y.__||n2(Y)})}catch(Y){$.some(function(X){X.__h&&(X.__h=[])}),$=[],X_.__e(Y,J.__v)}}),I1&&I1(_,$)},X_.unmount=function(_){S1&&S1(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(W2)}catch(J){X_.__e(J,$.__v)}};var T1=typeof requestAnimationFrame=="function";function W2(_){var $=K0;typeof _.__c=="function"&&_.__c(),K0=$}function n2(_){var $=K0;_.__c=_.__(),K0=$}function d1(_,$){return!_||_.length!==$.length||$.some(function(J,Y){return J!==_[Y]})}function r1(_,$){return typeof $=="function"?$(_):$}var s1=function(_,$,J,Y){var X;$[0]=0;for(var Z=1;Z<$.length;Z++){var K=$[Z++],G=$[Z]?($[0]|=K?1:2,J[$[Z++]]):$[++Z];K===3?Y[0]=G:K===4?Y[1]=Object.assign(Y[1]||{},G):K===5?(Y[1]=Y[1]||{})[$[++Z]]=G:K===6?Y[1][$[++Z]]+=G+"":K?(X=_.apply(G,s1(_,G,J,["",null])),Y.push(X),G[0]?$[0]|=2:($[Z-2]=0,$[Z]=X)):Y.push(G)}return Y},x1=new Map,B=function(_){var $=x1.get(this);return $||($=new Map,x1.set(this,$)),($=s1(this,$.get(_)||($.set(_,$=function(J){for(var Y,X,Z=1,K="",G="",V=[0],W=function(F){Z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,F,K):Z===3&&(F||K)?(V.push(3,F,K),Z=2):Z===2&&K==="..."&&F?V.push(4,F,0):Z===2&&K&&!F?V.push(5,0,!0,K):Z>=5&&((K||!F&&Z===5)&&(V.push(Z,0,K,X),Z=6),F&&(V.push(Z,F,0,X),Z=6)),K=""},Q=0;Q<J.length;Q++){Q&&(Z===1&&W(),W(Q));for(var y=0;y<J[Q].length;y++)Y=J[Q][y],Z===1?Y==="<"?(W(),V=[V],Z=3):K+=Y:Z===4?K==="--"&&Y===">"?(Z=1,K=""):K=Y+K[0]:G?Y===G?G="":K+=Y:Y==='"'||Y==="'"?G=Y:Y===">"?(W(),Z=1):Z&&(Y==="="?(Z=5,X=K,K=""):Y==="/"&&(Z<5||J[Q][y+1]===">")?(W(),Z===3&&(V=V[0]),Z=V,(V=V[0]).push(2,0,Z),Z=0):Y===" "||Y==="\t"||Y===`
`||Y==="\r"?(W(),Z=2):K+=Y),Z===3&&K==="!--"&&(Z=4,V=V[0])}return W(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(m1);async function l_(_,$={}){let J=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!J.ok){let Y=await J.json().catch(()=>({error:"Unknown error"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function z2(_=10,$=null){let J=`/timeline?limit=${_}`;if($)J+=`&before=${$}`;return l_(J)}async function a1(_,$=50,J=0){return l_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${J}`)}async function t1(_,$=50,J=0){return l_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${J}`)}async function e1(_,$=!1){let J=`/post/${_}?cascade=${$?"true":"false"}`;return l_(J,{method:"DELETE"})}async function s2(_,$,J=null,Y=[]){return l_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:J,media_ids:Y})})}async function _3(){return l_("/agents")}async function $3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/status${$}`)}async function a2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/context${$}`)}async function $2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/models${$}`)}async function J3(_){let $=new FormData;$.append("file",_);let J=await fetch("/media/upload",{method:"POST",body:$});if(!J.ok){let Y=await J.json().catch(()=>({error:"Upload failed"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function t2(_,$){let J=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function Y3(_,$){let J=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function Z3(_,$="thought"){let J=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return l_(J)}async function X3(_,$,J){return l_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(J)})})}function J2(_){return`/media/${_}`}function Q3(_){return`/media/${_}/thumbnail`}async function H2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function F2(_="",$=2,J=!1){let Y=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${J?"1":"0"}`;return l_(Y)}async function K3(_,$=20000,J=null){let Y=J?`&mode=${encodeURIComponent(J)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Y}`;return l_(X)}async function j3(_){return l_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function e2(_,$="",J={}){let Y=new FormData;Y.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(J.overwrite)X.set("overwrite","1");let Z=X.toString(),K=Z?`/workspace/upload?${Z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Y});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),W=Error(V.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=V.code,W}return G.json()}async function G3(_,$,J=""){let Y=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:J})});if(!Y.ok){let X=await Y.json().catch(()=>({error:"Create failed"})),Z=Error(X.error||`HTTP ${Y.status}`);throw Z.status=Y.status,Z.code=X.code,Z}return Y.json()}async function V3(_,$){let J=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Rename failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function W3(_,$){let J=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Move failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function O3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return l_($,{method:"DELETE"})}async function L2(_,$=!1){return l_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function _1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function N3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class $1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,J=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,J+$),this.reconnectAttempts=0;let Y=Math.max(this.cooldownUntil-J,0),X=Math.max(this.reconnectDelay,Y);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function g0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function I_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function r0(_,$=!1){let J=g0(_);if(J===null)return $;return J==="true"}function s0(_,$=null){let J=g0(_);if(J===null)return $;let Y=parseInt(J,10);return Number.isFinite(Y)?Y:$}function u0({prefix:_="file",label:$,title:J,onRemove:Y,removeTitle:X="Remove",icon:Z="file"}){let K=`${_}-file-pill`,G=`${_}-file-name`,V=`${_}-file-remove`,W=Z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${J||$}>
      ${W}
      <span class=${G}>${$}</span>
      ${Y&&B`
        <button
          class=${V}
          onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),Y()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var f4=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function v4({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),J=_.tokens,Y=_.contextWindow,X=J!=null?`Context: ${q3(J)} / ${q3(Y)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Z=7,K=2*Math.PI*7,G=$/100*K,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
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
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function q3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function B3({onPost:_,onFocus:$,searchMode:J,onSearch:Y,onEnterSearch:X,onExitSearch:Z,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:W=[],onRemoveMessageRef:Q,onClearMessageRefs:y,activeModel:F=null,thinkingLevel:C=null,supportsThinking:N=!1,contextUsage:z=null,notificationsEnabled:L=!1,notificationPermission:w="default",onToggleNotifications:b,onModelChange:v,onModelStateChange:R,activeEditorPath:r=null,onAttachEditorFile:$_}){let[s,a]=x(""),[Q_,i]=x(""),[e,z_]=x(!1),[t,G_]=x([]),[H_,y_]=x(!1),[__,n]=x([]),[V_,J_]=x(0),[O_,K_]=x(!1),[w_,B_]=x(!1),[L_,S_]=x(!1),[q_,x_]=x([]),[E_,F_]=x(!1),M_=k(null),O0=k(null),v_=k(null),k_=k(null),p_=k(0),D0=200,m_=(H)=>{let P=new Set,c=[];for(let Y_ of H||[]){if(typeof Y_!=="string")continue;let N_=Y_.trim();if(!N_||P.has(N_))continue;P.add(N_),c.push(N_)}return c},J0=()=>{let H=g0("piclaw_compose_history");if(!H)return[];try{let P=JSON.parse(H);if(!Array.isArray(P))return[];return m_(P)}catch{return[]}},o_=(H)=>{I_("piclaw_compose_history",JSON.stringify(H))},D_=k(J0()),A=k(-1),d=k(""),R_=!e&&(s.trim()||t.length>0||K.length>0||W.length>0),C0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),e_=typeof window<"u"&&typeof Notification<"u",P0=typeof window<"u"?Boolean(window.isSecureContext):!1,q0=e_&&P0&&w!=="denied",r_=w==="granted"&&L,G0=r_?"Disable notifications":"Enable notifications",h_=N&&C?` (${C})`:"",n_=F?`${F}${h_}`:"",T_=(H)=>{if(!H||typeof H!=="object")return;let P=H.model??H.current;if(typeof R==="function")R({model:P??null,thinking_level:H.thinking_level??null,supports_thinking:H.supports_thinking});if(P&&typeof v==="function")v(P)},B0=(H)=>{let P=H||M_.current;if(!P)return;P.style.height="auto",P.style.height=`${P.scrollHeight}px`,P.style.overflowY="hidden"},y0=(H)=>{if(!H.startsWith("/")||H.includes(`
`)){K_(!1),n([]);return}let P=H.toLowerCase().split(" ")[0];if(P.length<1){K_(!1),n([]);return}let c=f4.filter((Y_)=>Y_.name.startsWith(P)||Y_.name.replace(/-/g,"").startsWith(P.replace(/-/g,"")));if(c.length>0&&!(c.length===1&&c[0].name===P))n(c),J_(0),K_(!0);else K_(!1),n([])},V0=(H)=>{let P=s,c=P.indexOf(" "),Y_=c>=0?P.slice(c):"",N_=H.name+Y_;a(N_),K_(!1),n([]),requestAnimationFrame(()=>{let U_=M_.current;if(!U_)return;let j_=N_.length;U_.selectionStart=j_,U_.selectionEnd=j_,U_.focus()})},U0=(H)=>{if(J)i(H);else a(H),y0(H);requestAnimationFrame(()=>B0())},g_=(H)=>{let P=J?Q_:s,c=P&&!P.endsWith(`
`)?`
`:"",Y_=`${P}${c}${H}`.trimStart();U0(Y_)},_0=(H)=>{let P=H?.command?.model_label;if(P)return P;let c=H?.command?.message;if(typeof c==="string"){let Y_=c.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},c_=async(H)=>{if(J||e||w_)return;B_(!0);try{let P=await s2("default",H,null,[]),c=_0(P);return T_({model:c??F??null,thinking_level:P?.command?.thinking_level,supports_thinking:P?.command?.supports_thinking}),_?.(),!0}catch(P){return console.error("Failed to switch model:",P),alert("Failed to switch model: "+P.message),!1}finally{B_(!1)}},W0=async()=>{await c_("/cycle-model")},k0=async(H)=>{if(!H||w_)return;if(await c_(`/model ${H}`))S_(!1)},I0=(H)=>{H.preventDefault(),H.stopPropagation(),S_((P)=>!P)},w0=async(H)=>{let P=typeof H==="string"?H:H&&typeof H?.target?.value==="string"?H.target.value:s,c=typeof P==="string"?P:"";if(!c.trim()&&t.length===0&&K.length===0&&W.length===0)return;z_(!0);try{let Y_=[];for(let a_ of t){let P_=await J3(a_);Y_.push(P_.id)}let N_=c.trim(),U_=K.length?`Files:
${K.map((a_)=>`- ${a_}`).join(`
`)}`:"",j_=W.length?`Referenced messages:
${W.map((a_)=>`- message:${a_}`).join(`
`)}`:"",s_=Y_.length?`Images:
${Y_.map((a_,P_)=>{let F0=t[P_]?.name||`image-${P_+1}`;return`- attachment:${a_} (${F0})`}).join(`
`)}`:"",X0=[N_,U_,j_,s_].filter(Boolean).join(`

`),H0=await s2("default",X0,null,Y_);if(H0?.command)T_({model:H0.command.model_label??F??null,thinking_level:H0.command.thinking_level,supports_thinking:H0.command.supports_thinking});if(N_){let a_=D_.current,P_=m_(a_.filter((Q0)=>Q0!==N_));if(P_.push(N_),P_.length>200)P_.splice(0,P_.length-200);D_.current=P_,o_(P_),A.current=-1,d.current=""}a(""),G_([]),V?.(),y?.(),_?.()}catch(Y_){console.error("Failed to post:",Y_),alert("Failed to post: "+Y_.message)}finally{z_(!1)}},z0=(H)=>{if(H.isComposing)return;if(J&&H.key==="Escape"){H.preventDefault(),i(""),Z?.();return}if(O_&&__.length>0){let P=M_.current?.value??(J?Q_:s);if(!String(P||"").startsWith("/"))K_(!1),n([]);else{if(H.key==="ArrowDown"){H.preventDefault(),J_((c)=>(c+1)%__.length);return}if(H.key==="ArrowUp"){H.preventDefault(),J_((c)=>(c-1+__.length)%__.length);return}if(H.key==="Tab"){H.preventDefault(),V0(__[V_]);return}if(H.key==="Enter"&&!H.shiftKey){if(!(M_.current?.value??(J?Q_:s)).includes(" ")){H.preventDefault();let N_=__[V_];K_(!1),n([]),w0(N_.name);return}}if(H.key==="Escape"){H.preventDefault(),K_(!1),n([]);return}}}if(!J&&(H.key==="ArrowUp"||H.key==="ArrowDown")&&!H.metaKey&&!H.ctrlKey&&!H.altKey&&!H.shiftKey){let P=M_.current;if(!P)return;let c=P.value||"",Y_=P.selectionStart===0&&P.selectionEnd===0,N_=P.selectionStart===c.length&&P.selectionEnd===c.length;if(H.key==="ArrowUp"&&Y_||H.key==="ArrowDown"&&N_){let U_=D_.current;if(!U_.length)return;H.preventDefault();let j_=A.current;if(H.key==="ArrowUp"){if(j_===-1)d.current=c,j_=U_.length-1;else if(j_>0)j_-=1;A.current=j_,U0(U_[j_]||"")}else{if(j_===-1)return;if(j_<U_.length-1)j_+=1,A.current=j_,U0(U_[j_]||"");else A.current=-1,U0(d.current||""),d.current=""}requestAnimationFrame(()=>{let s_=M_.current;if(!s_)return;let X0=s_.value.length;s_.selectionStart=X0,s_.selectionEnd=X0});return}}if(H.key==="Enter"&&!H.shiftKey){H.preventDefault();let P=M_.current?.value??(J?Q_:s);if(J){if(P.trim())Y?.(P.trim())}else w0(P)}},b_=(H)=>{let P=Array.from(H||[]).filter((c)=>c&&c.type&&c.type.startsWith("image/"));if(!P.length)return;G_((c)=>[...c,...P])},Y0=(H)=>{b_(H.target.files),H.target.value=""},$0=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),p_.current+=1,y_(!0)},f_=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),p_.current=Math.max(0,p_.current-1),p_.current===0)y_(!1)},u_=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),H.dataTransfer)H.dataTransfer.dropEffect="copy";y_(!0)},Z0=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),p_.current=0,y_(!1),b_(H.dataTransfer?.files||[])},A0=(H)=>{if(J)return;let P=H.clipboardData?.items;if(!P||!P.length)return;let c=[];for(let Y_ of P){if(Y_.kind!=="file")continue;let N_=Y_.getAsFile?.();if(N_)c.push(N_)}if(c.length>0)H.preventDefault(),b_(c)},S0=(H)=>{G_((P)=>P.filter((c,Y_)=>Y_!==H))},T0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((H)=>{let{latitude:P,longitude:c,accuracy:Y_}=H.coords,N_=`${P.toFixed(5)}, ${c.toFixed(5)}`,U_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",j_=`https://maps.google.com/?q=${P},${c}`,s_=`Location: ${N_}${U_} ${j_}`;g_(s_)},(H)=>{let P=H?.message||"Unable to retrieve location.";alert(`Location error: ${P}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!L_)return;F_(!0),$2().then((H)=>{let P=Array.isArray(H?.models)?H.models.filter((c)=>typeof c==="string"&&c.trim().length>0):[];x_(P),T_(H)}).catch((H)=>{console.warn("Failed to load model list:",H),x_([])}).finally(()=>{F_(!1)})},[L_,F]),m(()=>{if(J)S_(!1)},[J]),m(()=>{if(!L_)return;let H=(P)=>{let c=v_.current,Y_=k_.current,N_=P.target;if(c&&c.contains(N_))return;if(Y_&&Y_.contains(N_))return;S_(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[L_]);let c0=(H)=>{let P=H.target.value;B0(H.target),U0(P)};return m(()=>{requestAnimationFrame(()=>B0())},[s,Q_,J]),B`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${H_?" drag-active":""}`}
                onDragEnter=${$0}
                onDragOver=${u_}
                onDragLeave=${f_}
                onDrop=${Z0}
            >
                <div class="compose-input-main">
                    ${!J&&(K.length>0||t.length>0||W.length>0)&&B`
                        <div class="compose-file-refs">
                            ${W.map((H)=>{return B`
                                    <${u0}
                                        key=${"msg-"+H}
                                        prefix="compose"
                                        label=${"msg:"+H}
                                        title=${"Message reference: "+H}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>Q?.(H)}
                                    />
                                `})}
                            ${K.map((H)=>{let P=H.split("/").pop()||H;return B`
                                    <${u0}
                                        prefix="compose"
                                        label=${P}
                                        title=${H}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(H)}
                                    />
                                `})}
                            ${t.map((H,P)=>{let c=H?.name||`image-${P+1}`;return B`
                                    <${u0}
                                        key=${c+P}
                                        prefix="compose"
                                        label=${c}
                                        title=${c}
                                        removeTitle="Remove image"
                                        onRemove=${()=>S0(P)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${M_}
                        placeholder=${J?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${J?Q_:s}
                        onInput=${c0}
                        onKeyDown=${z0}
                        onPaste=${A0}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${e}
                        rows="1"
                    />
                    ${O_&&__.length>0&&B`
                        <div class="slash-autocomplete" ref=${O0}>
                            ${__.map((H,P)=>B`
                                <div
                                    key=${H.name}
                                    class=${`slash-item${P===V_?" active":""}`}
                                    onMouseDown=${(c)=>{c.preventDefault(),V0(H)}}
                                    onMouseEnter=${()=>J_(P)}
                                >
                                    <span class="slash-name">${H.name}</span>
                                    <span class="slash-desc">${H.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${L_&&!J&&B`
                        <div class="compose-model-popup" ref=${v_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${E_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!E_&&q_.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!E_&&q_.map((H)=>B`
                                    <button
                                        key=${H}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F===H?" active":""}`}
                                        onClick=${()=>{k0(H)}}
                                        disabled=${w_}
                                    >
                                        ${H}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{W0()}}
                                    disabled=${w_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!J&&F&&B`
                        <div class="compose-meta-row">
                            <button
                                ref=${k_}
                                type="button"
                                class="compose-model-hint compose-model-hint-btn"
                                title=${w_?"Switching model…":`Current model: ${n_} (tap to open model picker)`}
                                aria-label="Open model picker"
                                onClick=${I0}
                                disabled=${e||w_}
                            >
                                ${w_?"Switching…":n_}
                            </button>
                        </div>
                    `}
                    <div class="compose-actions ${J?"search-mode":""}">
                    ${!J&&z&&z.percent!=null&&B`
                        <${v4} usage=${z} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${J?Z:X}
                        title=${J?"Close search":"Search"}
                    >
                        ${J?B`
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
                    ${C0&&!J&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${T0}
                            title="Share location"
                            type="button"
                            disabled=${e}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${q0&&!J&&B`
                        <button
                            class=${`icon-btn notification-btn${r_?" active":""}`}
                            onClick=${b}
                            title=${G0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!J&&B`
                        ${r&&$_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${$_}
                                title=${`Attach open file: ${r}`}
                                type="button"
                                disabled=${e||K.includes(r)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${Y0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{w0()}}
                            disabled=${!R_}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var z3="piclaw_theme",Z1="piclaw_tint",C2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},R4={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},U3={default:{label:"Default",mode:"auto",light:C2,dark:R4},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},u4=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],y2={theme:"default",tint:null},H3="light",J1=!1;function F3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function a0(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let J=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(J)&&!/^[0-9a-fA-F]{6}$/.test(J))return null;let Y=J.length===3?J.split("").map((Z)=>Z+Z).join(""):J,X=parseInt(Y,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Y.toLowerCase()}`}}function m4(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let J=document.createElement("div");if(J.style.color="",J.style.color=$,!J.style.color)return null;let Y=J.style.color;try{if(document.body)J.style.display="none",document.body.appendChild(J),Y=getComputedStyle(J).color||J.style.color,document.body.removeChild(J)}catch{}let X=Y.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Z=parseInt(X[1],10),K=parseInt(X[2],10),G=parseInt(X[3],10);if(![Z,K,G].every((W)=>Number.isFinite(W)))return null;let V=`#${[Z,K,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:Z,g:K,b:G,hex:V}}function L3(_){return a0(_)||m4(_)}function Y2(_,$,J){let Y=Math.round(_.r+($.r-_.r)*J),X=Math.round(_.g+($.g-_.g)*J),Z=Math.round(_.b+($.b-_.b)*J);return`rgb(${Y} ${X} ${Z})`}function Y1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function E3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function X1(_){return U3[_]||U3.default}function g4(_){return _.mode==="auto"?E3():_.mode}function c4(_,$){let J=X1(_);if($==="dark"&&J.dark)return J.dark;if($==="light"&&J.light)return J.light;return J.dark||J.light||C2}function p4(_,$,J){let Y=L3($);if(!Y)return _;let X=a0(_.bgPrimary),Z=a0(_.bgSecondary),K=a0(_.bgHover),G=a0(_.borderColor);if(!X||!Z||!K||!G)return _;let W=a0(J==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Y2(X,Y,0.08),bgSecondary:Y2(Z,Y,0.12),bgHover:Y2(K,Y,0.16),borderColor:Y2(G,Y,0.08),accent:Y.hex,accentHover:W?Y2(Y,W,0.18):Y.hex}}function h4(_,$){if(typeof document>"u")return;let J=document.documentElement,Y=_.accent,X=L3(Y),Z=X?Y1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=X?Y1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?Y1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Y,"--accent-hover":_.accentHover||Y,"--accent-soft":K,"--accent-soft-strong":G,"--danger-color":_.danger||C2.danger,"--success-color":_.success||C2.success,"--search-highlight-color":Z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([W,Q])=>{if(Q)J.style.setProperty(W,Q)})}function i4(){if(typeof document>"u")return;let _=document.documentElement;u4.forEach(($)=>_.style.removeProperty($))}function E2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function l4(_,$){if(typeof document>"u")return;let J=E2("theme-color");if(J&&_)J.setAttribute("content",_);let Y=E2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let X=E2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Z=E2("apple-mobile-web-app-status-bar-style");if(Z)Z.setAttribute("content",$==="dark"?"black-translucent":"default")}function o4(){if(typeof window>"u")return;let _={...y2,mode:H3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Q1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let J=F3(_?.theme||"default"),Y=_?.tint?String(_.tint).trim():null,X=X1(J),Z=g4(X),K=c4(J,Z);y2={theme:J,tint:Y},H3=Z;let G=document.documentElement;G.dataset.theme=Z,G.dataset.colorTheme=J,G.dataset.tint=Y?String(Y):"",G.style.colorScheme=Z;let V=K;if(J==="default"&&Y)V=p4(K,Y,Z);if(J==="default"&&!Y)i4();else h4(V,Z);if(l4(V.bgPrimary,Z),o4(),$.persist!==!1)if(I_(z3,J),Y)I_(Z1,Y);else I_(Z1,"")}function D2(){if(X1(y2.theme).mode!=="auto")return;Q1(y2,{persist:!1})}function D3(){if(typeof window>"u")return()=>{};let _=F3(g0(z3)||"default"),$=g0(Z1),J=$?$.trim():null;if(Q1({theme:_,tint:J},{persist:!1}),window.matchMedia&&!J1){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",D2);else if(Y.addListener)Y.addListener(D2);return J1=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",D2);else if(Y.removeListener)Y.removeListener(D2);J1=!1}}return()=>{}}function C3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let J=_.theme??_.name??_.colorTheme,Y=_.tint??null;Q1({theme:J||"default",tint:Y},{persist:!0})}function y3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return E3()}var k2=/#(\w+)/g,n4=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),d4=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),r4=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),s4={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},a4=new Set(["http:","https:","mailto:",""]);function k3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function t0(_,$={}){if(!_)return null;let J=String(_).trim();if(!J)return null;if(J.startsWith("#")||J.startsWith("/"))return J;if(J.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(J))return J;return null}if(J.startsWith("blob:"))return J;try{let Y=new URL(J,typeof window<"u"?window.location.origin:"http://localhost");if(!a4.has(Y.protocol))return null;return Y.href}catch{return null}}function w3(_,$={}){if(!_)return"";let J=new DOMParser().parseFromString(_,"text/html"),Y=[],X=J.createTreeWalker(J.body,NodeFilter.SHOW_ELEMENT),Z;while(Z=X.nextNode())Y.push(Z);for(let K of Y){let G=K.tagName.toLowerCase();if(!d4.has(G)){let W=K.parentNode;if(!W)continue;while(K.firstChild)W.insertBefore(K.firstChild,K);W.removeChild(K);continue}let V=s4[G]||new Set;for(let W of Array.from(K.attributes)){let Q=W.name.toLowerCase(),y=W.value;if(Q.startsWith("on")){K.removeAttribute(W.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(V.has(Q)||r4.has(Q)){if(Q==="href"){let F=t0(y);if(!F)K.removeAttribute(W.name);else if(K.setAttribute(W.name,F),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(y):y,C=t0(F,{allowDataImage:G==="img"});if(!C)K.removeAttribute(W.name);else K.setAttribute(W.name,C)}continue}K.removeAttribute(W.name)}}return J.body.innerHTML}function A3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function w2(_,$=2){if(!_)return _;let J=_;for(let Y=0;Y<$;Y+=1){let X=A3(J);if(X===J)break;J=X}return J}function t4(_){if(!_)return{text:"",blocks:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=[],Z=!1,K=[];for(let G of J){if(!Z&&G.trim().match(/^```mermaid\s*$/i)){Z=!0,K=[];continue}if(Z&&G.trim().match(/^```\s*$/)){let V=Y.length;Y.push(K.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Z=!1,K=[];continue}if(Z)K.push(G);else X.push(G)}if(Z)X.push("```mermaid"),X.push(...K);return{text:X.join(`
`),blocks:Y}}function e4(_){if(!_)return _;return w2(_,5)}function _8(_){let $=new TextEncoder().encode(String(_||"")),J="";for(let Y of $)J+=String.fromCharCode(Y);return btoa(J)}function $8(_){let $=atob(String(_||"")),J=new Uint8Array($.length);for(let Y=0;Y<$.length;Y+=1)J[Y]=$.charCodeAt(Y);return new TextDecoder().decode(J)}function J8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(J,Y)=>{let X=Number(Y),Z=$[X]??"",K=e4(Z);return`<div class="mermaid-container" data-mermaid="${_8(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function M3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,J)=>{if(J.includes(`
`))return`
\`\`\`
${J}
\`\`\`
`;return`\`${J}\``})}function b3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,J)=>{let Y=J.trim(),X=Y.startsWith("/"),Z=X?Y.slice(1).trim():Y,V=(Z.endsWith("/")?Z.slice(0,-1).trim():Z).split(/\s+/)[0]?.toLowerCase();if(!V||!n4.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function P3(_){if(!_)return _;let $=(J)=>J.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(J,Y)=>`<pre><code>${$(Y)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(J,Y)=>`<code>${$(Y)}</code>`)}function I3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=(Z)=>Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=J.nextNode()){if(!X.nodeValue)continue;let Z=Y(X.nodeValue);if(Z!==X.nodeValue)X.nodeValue=Z}return $.body.innerHTML}function Y8(_){if(!window.katex)return _;let $=(K)=>A3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),J=(K)=>{let G=[],V=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_BLOCK_${Q}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_INLINE_${Q}@@`}),{html:V,blocks:G}},Y=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,W)=>{let Q=Number(W);return G[Q]??""})},X=J(_),Z=X.html;return Z=Z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,V)=>{try{let W=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${k3(W.message)}">${K}</span>`}}),Z=Z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,V)=>{if(/\s$/.test(V))return K;try{let W=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${k3(W.message)}">$${V}$</span>`}}),Y(Z,X.blocks)}function Z8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=[],X;while(X=J.nextNode())Y.push(X);for(let Z of Y){let K=Z.nodeValue;if(!K)continue;if(k2.lastIndex=0,!k2.test(K))continue;k2.lastIndex=0;let G=Z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=K.split(k2);if(V.length<=1)continue;let W=$.createDocumentFragment();V.forEach((Q,y)=>{if(y%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,W.appendChild(F)}else W.appendChild($.createTextNode(Q))}),Z.parentNode?.replaceChild(W,Z)}return $.body.innerHTML}function X8(_){if(!_)return _;let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=!1;for(let Z of J){if(!X&&Z.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Y.push("$$");continue}if(X&&Z.trim().match(/^```\s*$/)){X=!1,Y.push("$$");continue}Y.push(Z)}return Y.join(`
`)}function A2(_,$,J={}){if(!_)return"";let Y=X8(_),{text:X,blocks:Z}=t4(Y),K=w2(X,2),V=M3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=b3(V),Q=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return Q=P3(Q),Q=I3(Q),Q=Y8(Q),Q=Z8(Q),Q=J8(Q,Z),Q=w3(Q,J),Q}function S3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),J=w2($,2),X=M3(J).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Z=b3(X),K=window.marked?marked.parse(Z):Z.replace(/\n/g,"<br>");return K=P3(K),K=I3(K),K=w3(K),K}async function T3(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:J}=window.beautifulMermaid,X=y3()==="dark"?J["tokyo-night"]:J["github-light"],Z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Z)try{let G=K.dataset.mermaid,V=$8(G||""),W=w2(V,2),Q=await $(W,{...X,transparent:!0});K.innerHTML=Q,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(V),K.removeAttribute("data-mermaid")}}var x3="PiClaw";function K1(_,$){let J=_||"PiClaw",Y=J.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%X.length,K=X[Z],G=J.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",Q=(V?V:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:Y,color:K,image:Q}}function f3(_,$){if(!_)return"PiClaw";let J=$[_]?.name||_;return J?J.charAt(0).toUpperCase()+J.slice(1):"PiClaw"}function v3(_,$){if(!_)return null;let J=$[_]||{};return J.avatar_url||J.avatarUrl||J.avatar||null}function R3(_){if(!_)return null;if(typeof document<"u"){let Z=document.documentElement,K=Z?.dataset?.colorTheme||"",G=Z?.dataset?.tint||"",V=getComputedStyle(Z).getPropertyValue("--accent-color")?.trim();if(V&&(G||K&&K!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],J=String(_),Y=0;for(let Z=0;Z<J.length;Z+=1)Y=(Y*31+J.charCodeAt(Z))%2147483647;let X=Math.abs(Y)%$.length;return $[X]}function u3({status:_,draft:$,plan:J,thought:Y,pendingRequest:X,turnId:Z,steerQueued:K,onPanelToggle:G}){let Q=(n)=>{if(!n)return{text:"",totalLines:0,fullText:""};if(typeof n==="string"){let K_=n,w_=K_?K_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:K_,totalLines:w_,fullText:K_}}let V_=n.text||"",J_=n.fullText||n.full_text||V_,O_=Number.isFinite(n.totalLines)?n.totalLines:J_?J_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V_,totalLines:O_,fullText:J_}},y=160,F=(n)=>{if(!n)return 1;return Math.max(1,Math.ceil(n.length/160))},C=(n,V_,J_)=>{let O_=(n||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!O_)return{text:"",omitted:0,totalLines:Number.isFinite(J_)?J_:0,visibleLines:0};let K_=O_.split(`
`),w_=K_.length>V_?K_.slice(0,V_).join(`
`):O_,B_=Number.isFinite(J_)?J_:K_.reduce((q_,x_)=>q_+F(x_),0),L_=w_?w_.split(`
`).reduce((q_,x_)=>q_+F(x_),0):0,S_=Math.max(B_-L_,0);return{text:w_,omitted:S_,totalLines:B_,visibleLines:L_}},N=Q(J),z=Q(Y),L=Q($),w=Boolean(N.text)||N.totalLines>0,b=Boolean(z.text)||z.totalLines>0,v=Boolean(L.fullText?.trim()||L.text?.trim());if(!_&&!v&&!w&&!b&&!X)return null;let[R,r]=x(new Set),$_=(n)=>r((V_)=>{let J_=new Set(V_),O_=!J_.has(n);if(O_)J_.add(n);else J_.delete(n);if(typeof G==="function")G(n,O_);return J_});m(()=>{r(new Set)},[Z]);let s=_?.turn_id||Z,a=R3(s),Q_=K?"turn-dot turn-dot-queued":"turn-dot",i=(n)=>n,e=Boolean(_?.last_activity||_?.lastActivity),z_="",t=_?.title,G_=_?.status;if(_?.type==="plan")z_=t?`Planning: ${t}`:"Planning...";else if(_?.type==="tool_call")z_=t?`Running: ${t}`:"Running tool...";else if(_?.type==="tool_status")z_=t?`${t}: ${G_||"Working..."}`:G_||"Working...";else if(_?.type==="error")z_=t||"Agent error";else z_=t||G_||"Working...";if(e)z_="Last activity just now";let H_=({panelTitle:n,text:V_,fullText:J_,totalLines:O_,maxLines:K_,titleClass:w_,panelKey:B_})=>{let L_=R.has(B_),S_=J_||V_||"",q_=typeof K_==="number",x_=L_&&q_,E_=q_?C(S_,K_,O_):{text:S_||"",omitted:0,totalLines:Number.isFinite(O_)?O_:0};if(!S_&&!(Number.isFinite(E_.totalLines)&&E_.totalLines>0))return null;let F_=`agent-thinking-body${q_?" agent-thinking-body-collapsible":""}`,M_=q_?`--agent-thinking-collapsed-lines: ${K_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${L_?"true":"false"}
                data-collapsible=${q_?"true":"false"}
                style=${a?`--turn-color: ${a};`:""}
            >
                <div class="agent-thinking-title ${w_||""}">
                    ${a&&B`<span class=${Q_} aria-hidden="true"></span>`}
                    ${n}
                    ${x_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${n} panel`}
                            onClick=${()=>$_(B_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${F_}
                    style=${M_}
                    dangerouslySetInnerHTML=${{__html:S3(S_)}}
                />
                ${!L_&&E_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$_(B_)}>
                        ▸ ${E_.omitted} more lines
                    </button>
                `}
                ${L_&&E_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>$_(B_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=X?.tool_call?.title,__=y_?`Awaiting approval: ${y_}`:"Awaiting approval";return B`
        <div class="agent-status-panel">
            ${X&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    <span class=${Q_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${__}</span>
                </div>
            `}
            ${w&&H_({panelTitle:i("Planning"),text:N.text,fullText:N.fullText,totalLines:N.totalLines,panelKey:"plan"})}
            ${b&&H_({panelTitle:i("Thoughts"),text:z.text,fullText:z.fullText,totalLines:z.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${v&&H_({panelTitle:i("Draft"),text:L.text,fullText:L.fullText,totalLines:L.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&B`
                <div class=${`agent-status${e?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    ${a&&B`<span class=${Q_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!e&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z_}</span>
                </div>
            `}
        </div>
    `}function m3({request:_,onRespond:$}){if(!_)return null;let{request_id:J,tool_call:Y,options:X}=_,Z=Y?.title||"Agent Request",K=Y?.kind||"other",G=Y?.rawInput||{},V=G.command||G.commands&&G.commands[0]||null,W=G.diff||null,Q=G.fileName||G.path||null,y=Y?.description||G.description||G.explanation||null,C=(Array.isArray(Y?.locations)?Y.locations:[]).map((b)=>b?.path).filter((b)=>Boolean(b)),N=Array.from(new Set([Q,...C].filter(Boolean)));console.log("AgentRequestModal:",{request_id:J,tool_call:Y,options:X});let z=async(b)=>{try{await t2(J,b),$()}catch(v){console.error("Failed to respond to agent request:",v)}},L=async()=>{try{await Y3(Z,`Auto-approved: ${Z}`),await t2(J,"approved"),$()}catch(b){console.error("Failed to add to whitelist:",b)}},w=X&&X.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Z}</div>
                </div>
                ${(y||V||W||N.length>0)&&B`
                    <div class="agent-request-body">
                        ${y&&B`
                            <div class="agent-request-description">${y}</div>
                        `}
                        ${N.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${N.map((b,v)=>B`<li key=${v}>${b}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&B`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${W&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${w?X.map((b)=>B`
                            <button 
                                key=${b.optionId||b.id||String(b)}
                                class="agent-request-btn ${b.kind==="allow_once"||b.kind==="allow_always"?"primary":""}"
                                onClick=${()=>z(b.optionId||b.id||b)}
                            >
                                ${b.name||b.label||b.optionId||b.id||String(b)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>z("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>z("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${L}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function g3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function c3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Y=new Date-$,X=Y/1000,Z=86400000;if(Y<Z){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Y<5*Z){let V=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${W}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function Z2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function b0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function M2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function p3({src:_,onClose:$}){return m(()=>{let J=(Y)=>{if(Y.key==="Escape")$()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Q8({mediaId:_}){let[$,J]=x(null);if(m(()=>{H2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size,Z=X?b0(X):"";return B`
        <a href=${J2(_)} download=${Y} class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${Z&&B`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function b2({annotations:_}){if(!_)return null;let{audience:$,priority:J,lastModified:Y}=_,X=Y?M2(Y):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof J==="number"&&B`
                <span class="content-annotation">Priority: ${J}</span>
            `}
            ${X&&B`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function K8({block:_}){let $=_.title||_.name||_.uri,J=_.description,Y=_.size?b0(_.size):"",X=_.mime_type||"",Z=G8(X),K=t0(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${J&&B`<div class="resource-link-description">${J}</div>`}
                <div class="resource-link-meta">
                    ${X&&B`<span>${X}</span>`}
                    ${Y&&B`<span>${Y}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function j8({block:_}){let[$,J]=x(!1),Y=_.uri||"Embedded resource",X=_.text||"",Z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),J(!$)}}>
                ${$?"▼":"▶"} ${Y}
            </button>
            ${$&&B`
                ${X&&B`<pre class="resource-embed-content">${X}</pre>`}
                ${Z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(y)=>y.charCodeAt(0))],{type:K||"application/octet-stream"}),W=URL.createObjectURL(V),Q=document.createElement("a");Q.href=W,Q.download=Y.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function G8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function V8({preview:_}){let $=t0(_.url),J=t0(_.image,{allowDataImage:!0}),Y=J?`background-image: url('${J}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${J?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${Y}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function W8(_,$){return typeof _==="string"?_:""}function O8(_){if(!_)return{content:_,fileRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Files:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,fileRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W))X.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function N8(_){if(!_)return{content:_,messageRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Referenced messages:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,messageRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let y=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(y)X.push(y[1])}else if(!W.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function q8(_){if(!_)return{content:_,attachments:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Images:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,attachments:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let Q=W.replace(/^\s*-\s+/,"").trim(),y=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(y){let F=y[1],C=(y[2]||"").trim()||F;X.push({id:F,label:C,raw:Q})}else X.push({id:null,label:Q,raw:Q})}else if(!W.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function B8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function U8(_,$){if(!_||!$)return _;let J=String($).trim().split(/\s+/).filter(Boolean);if(J.length===0)return _;let Y=J.map(B8).sort((Q,y)=>y.length-Q.length),X=new RegExp(`(${Y.join("|")})`,"gi"),Z=new RegExp(`^(${Y.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),V=[],W;while(W=G.nextNode())V.push(W);for(let Q of V){let y=Q.nodeValue;if(!y||!X.test(y)){X.lastIndex=0;continue}X.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let C=y.split(X).filter((z)=>z!=="");if(C.length===0)continue;let N=K.createDocumentFragment();for(let z of C)if(Z.test(z)){let L=K.createElement("mark");L.className="search-highlight-term",L.textContent=z,N.appendChild(L)}else N.appendChild(K.createTextNode(z));Q.parentNode.replaceChild(N,Q)}return K.body.innerHTML}function h3({post:_,onClick:$,onHashtagClick:J,onMessageRef:Y,agentName:X,agentAvatarUrl:Z,userName:K,userAvatarUrl:G,userAvatarBackground:V,onDelete:W,isThreadReply:Q,isRemoving:y,highlightQuery:F}){let[C,N]=x(null),z=k(null),L=_.data,w=L.type==="agent_response",b=K||"You",v=w?X||x3:b,R=w?K1(X,Z):K1(b,G),r=typeof V==="string"?V.trim().toLowerCase():"",$_=!w&&R.image&&(r==="clear"||r==="transparent"),s=w&&Boolean(R.image),a=`background-color: ${$_||s?"transparent":R.color}`,Q_=L.content_meta,i=Boolean(Q_?.truncated),e=Boolean(Q_?.preview),z_=i&&!e,t=i?{originalLength:Number.isFinite(Q_?.original_length)?Q_.original_length:L.content?L.content.length:0,maxLength:Number.isFinite(Q_?.max_length)?Q_.max_length:0}:null,G_=W8(L.content,L.link_previews),{content:H_,fileRefs:y_}=O8(G_),{content:__,messageRefs:n}=N8(H_),{content:V_,attachments:J_}=q8(__);G_=V_;let O_=Boolean(G_)&&!z_,K_=typeof F==="string"?F.trim():"",w_=M0(()=>{if(!G_)return"";let A=A2(G_,J);return K_?U8(A,K_):A},[G_,K_]),B_=(A,d)=>{A.stopPropagation(),N(J2(d))},L_=(A)=>{A.stopPropagation(),W?.(_)},S_=(A,d)=>{let R_=new Set;if(!A||d.length===0)return{content:A,usedIds:R_};return{content:A.replace(/attachment:([^\s)"']+)/g,(e_,P0,N0,q0)=>{let r_=P0.replace(/^\/+/,""),h_=d.find((T_)=>T_.name&&T_.name.toLowerCase()===r_.toLowerCase()&&!R_.has(T_.id))||d.find((T_)=>!R_.has(T_.id));if(!h_)return e_;if(R_.add(h_.id),q0.slice(Math.max(0,N0-2),N0)==="](")return`/media/${h_.id}`;return h_.name||"attachment"}),usedIds:R_}},q_=[],x_=[],E_=[],F_=[],M_=[],O0=[],v_=L.content_blocks||[],k_=L.media_ids||[],p_=0;if(v_.length>0)v_.forEach((A)=>{if(A?.type==="text"&&A.annotations)O0.push(A.annotations);if(A?.type==="resource_link")F_.push(A);else if(A?.type==="resource")M_.push(A);else if(A?.type==="file"){let d=k_[p_++];if(d)x_.push(d),E_.push({id:d,name:A?.name||A?.filename||A?.title})}else if(A?.type==="image"||!A?.type){let d=k_[p_++];if(d)q_.push({id:d,annotations:A?.annotations}),E_.push({id:d,name:A?.name||A?.filename||A?.title})}});else if(k_.length>0)k_.forEach((A)=>{q_.push({id:A,annotations:null}),E_.push({id:A,name:null})});if(J_.length>0)J_.forEach((A)=>{if(!A?.id)return;let d=E_.find((R_)=>String(R_.id)===String(A.id));if(d&&!d.name)d.name=A.label});let{content:D0,usedIds:m_}=S_(G_,E_);G_=D0;let J0=q_.filter(({id:A})=>!m_.has(A)),o_=x_.filter((A)=>!m_.has(A)),D_=J_.length>0?J_.map((A,d)=>({id:A.id||`attachment-${d+1}`,label:A.label||`attachment-${d+1}`})):E_.map((A,d)=>({id:A.id,label:A.name||`attachment-${d+1}`}));return m(()=>{if(z.current)T3(z.current)},[G_]),B`
        <div id=${`post-${_.id}`} class="post ${w?"agent-post":""} ${Q?"thread-reply":""} ${y?"removing":""}" onClick=${$}>
            <div class="post-avatar ${w?"agent-avatar":""} ${R.image?"has-image":""}" style=${a}>
                ${R.image?B`<img src=${R.image} alt=${v} />`:R.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${L_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${v}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(A)=>{if(A.preventDefault(),A.stopPropagation(),Y)Y(_.id)}}>${c3(_.timestamp)}</a>
                </div>
                ${z_&&t&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Z2(t.originalLength)} chars
                            ${t.maxLength?B` • Display limit: ${Z2(t.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&t&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Z2(t.maxLength)} of ${Z2(t.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(y_.length>0||n.length>0||D_.length>0)&&B`
                    <div class="post-file-refs">
                        ${n.map((A)=>{return B`
                                <a href=${`#msg-${A}`} class="post-msg-pill-link" onClick=${(d)=>{d.stopPropagation()}}>
                                    <${u0}
                                        prefix="post"
                                        label=${"msg:"+A}
                                        title=${"Message "+A}
                                        icon="message"
                                    />
                                </a>
                            `})}
                        ${y_.map((A)=>{let d=A.split("/").pop()||A;return B`
                                <${u0}
                                    prefix="post"
                                    label=${d}
                                    title=${A}
                                />
                            `})}
                        ${D_.map((A)=>B`
                            <${u0}
                                prefix="post"
                                label=${A.label}
                                title=${A.label}
                            />
                        `)}
                    </div>
                `}
                ${O_&&B`
                    <div 
                        ref=${z}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:w_}}
                        onClick=${(A)=>{if(A.target.classList.contains("hashtag")){A.preventDefault(),A.stopPropagation();let d=A.target.dataset.hashtag;if(d)J?.(d)}else if(A.target.tagName==="IMG")A.preventDefault(),A.stopPropagation(),N(A.target.src)}}
                    />
                `}
                ${O0.length>0&&B`
                    ${O0.map((A,d)=>B`
                        <${b2} key=${d} annotations=${A} />
                    `)}
                `}
                ${J0.length>0&&B`
                    <div class="media-preview">
                        ${J0.map(({id:A})=>B`
                            <img 
                                key=${A} 
                                src=${Q3(A)} 
                                alt="Media" 
                                loading="lazy"
                                onClick=${(d)=>B_(d,A)}
                            />
                        `)}
                    </div>
                `}
                ${J0.length>0&&B`
                    ${J0.map(({annotations:A},d)=>B`
                        ${A&&B`<${b2} key=${d} annotations=${A} />`}
                    `)}
                `}
                ${o_.length>0&&B`
                    <div class="file-attachments">
                        ${o_.map((A)=>B`
                            <${Q8} key=${A} mediaId=${A} />
                        `)}
                    </div>
                `}
                ${F_.length>0&&B`
                    <div class="resource-links">
                        ${F_.map((A,d)=>B`
                            <div key=${d}>
                                <${K8} block=${A} />
                                <${b2} annotations=${A.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M_.length>0&&B`
                    <div class="resource-embeds">
                        ${M_.map((A,d)=>B`
                            <div key=${d}>
                                <${j8} block=${A} />
                                <${b2} annotations=${A.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${L.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${L.link_previews.map((A,d)=>B`
                            <${V8} key=${d} preview=${A} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${C&&B`<${p3} src=${C} onClose=${()=>N(null)} />`}
    `}function i3({posts:_,hasMore:$,onLoadMore:J,onPostClick:Y,onHashtagClick:X,onMessageRef:Z,emptyMessage:K,timelineRef:G,agents:V,user:W,onDeletePost:Q,reverse:y=!0,removingPostIds:F,searchQuery:C}){let[N,z]=x(!1),L=k(null),w=typeof IntersectionObserver<"u",b=I(async()=>{if(!J||!$||N)return;z(!0);try{await J({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,N,J]),v=I(($_)=>{let{scrollTop:s,scrollHeight:a,clientHeight:Q_}=$_.target,i=y?a-Q_-s:s,e=Math.max(300,Q_);if(i<e)b()},[y,b]);if(m(()=>{if(!w)return;let $_=L.current,s=G?.current;if(!$_||!s)return;let a=300,Q_=new IntersectionObserver((i)=>{for(let e of i){if(!e.isIntersecting)continue;b()}},{root:s,rootMargin:`${a}px 0px ${a}px 0px`,threshold:0});return Q_.observe($_),()=>Q_.disconnect()},[w,$,J,G,b]),m(()=>{if(w)return;if(!G?.current)return;let{scrollTop:$_,scrollHeight:s,clientHeight:a}=G.current,Q_=y?s-a-$_:$_,i=Math.max(300,a);if(Q_<i)b()},[w,_,$,y,G,b]),m(()=>{if(!G?.current)return;if(!$||N)return;let{scrollTop:$_,scrollHeight:s,clientHeight:a}=G.current,Q_=y?s-a-$_:$_,i=Math.max(300,a);if(s<=a+1||Q_<i)b()},[_,$,N,y,G,b]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${G}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort(($_,s)=>$_.id-s.id),r=B`<div class="timeline-sentinel" ref=${L}></div>`;return B`
        <div class="timeline ${y?"reverse":"normal"}" ref=${G} onScroll=${v}>
            <div class="timeline-content">
                ${y?r:null}
                ${R.map(($_)=>{let s=Boolean($_.data?.thread_id&&$_.data.thread_id!==$_.id),a=F?.has?.($_.id);return B`
                    <${h3}
                        key=${$_.id}
                        post=${$_}
                        isThreadReply=${s}
                        isRemoving=${a}
                        highlightQuery=${C}
                        agentName=${f3($_.data?.agent_id,V||{})}
                        agentAvatarUrl=${v3($_.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Y?.($_)}
                        onHashtagClick=${X}
                        onMessageRef=${Z}
                        onDelete=${Q}
                    />
                `})}
                ${y?null:r}
            </div>
        </div>
    `}var z8=16,H8=60000,d3=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function F8(_,$){let J=String(_||"").trim();if(!J)return J;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(J)||J.startsWith("#")||J.startsWith("data:")||J.startsWith("blob:"))return J;let Y=J.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Y?.[1]||J,Z=Y?.[2]||"",K=Y?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,Q=[];for(let F of W.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let y=Q.join("/");return`${_1(y)}${Z}${K}`}function r3(_,$,J,Y=0,X=[]){if(!J&&d3(_))return X;if(!_)return X;if(X.push({node:_,depth:Y}),_.type==="dir"&&_.children&&$.has(_.path))for(let Z of _.children)r3(Z,$,J,Y+1,X);return X}function l3(_,$,J){if(!_)return"";let Y=[],X=(Z)=>{if(!J&&d3(Z))return;if(Y.push(Z.type==="dir"?`d:${Z.path}`:`f:${Z.path}`),Z.children&&$?.has(Z.path))for(let K of Z.children)X(K)};return X(_),Y.join("|")}function W1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let J=Array.isArray(_.children)?_.children:null,Y=Array.isArray($.children)?$.children:null;if(!Y)return _;let X=J?new Map(J.map((G)=>[G?.path,G])):new Map,Z=!J||J.length!==Y.length,K=Y.map((G)=>{let V=W1(X.get(G.path),G);if(V!==X.get(G.path))Z=!0;return V});return Z?{...$,children:K}:_}function G1(_,$,J){if(!_)return _;if(_.path===$)return W1(_,J);if(!Array.isArray(_.children))return _;let Y=!1,X=_.children.map((Z)=>{let K=G1(Z,$,J);if(K!==Z)Y=!0;return K});return Y?{..._,children:X}:_}var s3=4,j1=14,L8=8,E8=16;function a3(_){if(!_)return 0;if(_.type==="file"){let Y=Math.max(0,Number(_.size)||0);return _.__bytes=Y,Y}let $=Array.isArray(_.children)?_.children:[],J=0;for(let Y of $)J+=a3(Y);return _.__bytes=J,J}function t3(_,$=0){let J=Math.max(0,Number(_?.__bytes??_?.size??0)),Y={name:_?.name||_?.path||".",path:_?.path||".",size:J,children:[]};if(!_||_.type!=="dir"||$>=s3)return Y;let X=Array.isArray(_.children)?_.children:[],Z=[];for(let G of X){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Z.push({kind:"dir",node:G,size:V});else Z.push({kind:"file",name:G.name,path:G.path,size:V})}Z.sort((G,V)=>V.size-G.size);let K=Z;if(Z.length>j1){let G=Z.slice(0,j1-1),V=Z.slice(j1-1),W=V.reduce((Q,y)=>Q+y.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${Y.path}/[other]`,size:W}),K=G}return Y.children=K.map((G)=>{if(G.kind==="dir")return t3(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Y}function o3(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,J=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(J==="dark")return!0;if(J==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function e3(_,$,J){let Y=((_+Math.PI/2)*180/Math.PI+360)%360,X=J?Math.max(30,70-$*10):Math.max(34,66-$*8),Z=J?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Y.toFixed(1)} ${X}% ${Z}%)`}function P2(_,$,J,Y){return{x:_+J*Math.cos(Y),y:$+J*Math.sin(Y)}}function O1(_,$,J,Y,X,Z){let K=Math.PI*2-0.0001,G=Z-X>K?X+K:Z,V=P2(_,$,Y,X),W=P2(_,$,Y,G),Q=P2(_,$,J,G),y=P2(_,$,J,X),F=G-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${Y} ${Y} 0 ${F} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${F} 0 ${y.x.toFixed(3)} ${y.y.toFixed(3)}`,"Z"].join(" ")}var _4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function $4(_,$,J){let Y=[],X=[],Z=Math.max(0,Number($)||0),K=(G,V,W,Q)=>{let y=Array.isArray(G?.children)?G.children:[];if(!y.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let C=W-V,N=V;y.forEach((z,L)=>{let w=Math.max(0,Number(z.size)||0);if(w<=0)return;let b=w/F,v=N,R=L===y.length-1?W:N+C*b;if(N=R,R-v<0.003)return;let r=_4[Q];if(r){let $_=e3(v,Q,J);if(Y.push({key:z.path,path:z.path,label:z.name,size:w,color:$_,depth:Q,startAngle:v,endAngle:R,innerRadius:r[0],outerRadius:r[1],d:O1(120,120,r[0],r[1],v,R)}),Q===1)X.push({key:z.path,name:z.name,size:w,pct:Z>0?w/Z*100:0,color:$_})}if(Q<s3)K(z,v,R,Q+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Y,legend:X}}function V1(_,$){if(!_||!$)return null;if(_.path===$)return _;let J=Array.isArray(_.children)?_.children:[];for(let Y of J){let X=V1(Y,$);if(X)return X}return null}function J4(_,$,J,Y){if(!J||J<=0)return{segments:[],legend:[]};let X=_4[1];if(!X)return{segments:[],legend:[]};let Z=-Math.PI/2,K=Math.PI*3/2,G=e3(Z,1,Y),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:J,color:G,depth:1,startAngle:Z,endAngle:K,innerRadius:X[0],outerRadius:X[1],d:O1(120,120,X[0],X[1],Z,K)}],legend:[{key:W,name:_,size:J,pct:100,color:G}]}}function n3(_,$=!1,J=!1){if(!_)return null;let Y=a3(_),X=t3(_,0),Z=X.size||Y,{segments:K,legend:G}=$4(X,Z,J);if(!K.length&&Z>0){let V=J4("[files]",X.path,Z,J);K=V.segments,G=V.legend}return{root:X,totalSize:Z,segments:K,legend:G,truncated:$,isDarkTheme:J}}function D8({payload:_}){if(!_)return null;let[$,J]=x(null),[Y,X]=x(_?.root?.path||"."),[Z,K]=x(()=>[_?.root?.path||"."]),[G,V]=x(!1);m(()=>{let i=_?.root?.path||".";X(i),K([i]),J(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Y)return;V(!0);let i=setTimeout(()=>V(!1),180);return()=>clearTimeout(i)},[Y]);let W=M0(()=>{return V1(_.root,Y)||_.root},[_?.root,Y]),Q=W?.size||_.totalSize||0,{segments:y,legend:F}=M0(()=>{let i=$4(W,Q,_.isDarkTheme);if(i.segments.length>0)return i;if(Q<=0)return i;let e=W?.children?.length?"Total":"[files]";return J4(e,W?.path||_?.root?.path||".",Q,_.isDarkTheme)},[W,Q,_.isDarkTheme,_?.root?.path]),[C,N]=x(y),z=k(new Map),L=k(0);m(()=>{let i=z.current,e=new Map(y.map((H_)=>[H_.key,H_])),z_=performance.now(),t=220,G_=(H_)=>{let y_=Math.min(1,(H_-z_)/220),__=y_*(2-y_),n=y.map((V_)=>{let O_=i.get(V_.key)||{startAngle:V_.startAngle,endAngle:V_.startAngle,innerRadius:V_.innerRadius,outerRadius:V_.innerRadius},K_=(q_,x_)=>q_+(x_-q_)*__,w_=K_(O_.startAngle,V_.startAngle),B_=K_(O_.endAngle,V_.endAngle),L_=K_(O_.innerRadius,V_.innerRadius),S_=K_(O_.outerRadius,V_.outerRadius);return{...V_,d:O1(120,120,L_,S_,w_,B_)}});if(N(n),y_<1)L.current=requestAnimationFrame(G_)};if(L.current)cancelAnimationFrame(L.current);return L.current=requestAnimationFrame(G_),z.current=e,()=>{if(L.current)cancelAnimationFrame(L.current)}},[y]);let w=C.length?C:y,b=Q>0?b0(Q):"0 B",v=W?.name||"",r=(v&&v!=="."?v:"Total")||"Total",$_=b,s=Z.length>1,a=(i)=>{if(!i?.path)return;let e=V1(_.root,i.path);if(!e||!Array.isArray(e.children)||e.children.length===0)return;K((z_)=>[...z_,e.path]),X(e.path),J(null)},Q_=()=>{if(!s)return;K((i)=>{let e=i.slice(0,-1);return X(e[e.length-1]||_?.root?.path||"."),e}),J(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${w.length}
                data-base-size=${Q}>
                ${w.map((i)=>B`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>J(i)}
                        onMouseLeave=${()=>J(null)}
                        onTouchStart=${()=>J(i)}
                        onTouchEnd=${()=>J(null)}
                        onClick=${()=>a(i)}
                    >
                        <title>${i.label} — ${b0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${s?" is-drill":""}`}
                    onClick=${Q_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${r}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${$_}</text>
                </g>
            </svg>
            ${F.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${b0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function C8({mediaId:_}){let[$,J]=x(null);if(m(()=>{if(!_)return;H2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size?b0($.metadata.size):"";return B`
        <a href=${J2(_)} download=${Y} class="file-attachment"
            onClick=${(Z)=>Z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${X&&B`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function Y4({onFileSelect:_,visible:$=!0,active:J=void 0,onOpenEditor:Y}){let[X,Z]=x(null),[K,G]=x(new Set(["."])),[V,W]=x(null),[Q,y]=x(null),[F,C]=x(""),[N,z]=x(null),[L,w]=x(null),[b,v]=x(!0),[R,r]=x(!1),[$_,s]=x(null),[a,Q_]=x(()=>r0("workspaceShowHidden",!1)),[i,e]=x(!1),[z_,t]=x(null),[G_,H_]=x(null),[y_,__]=x(null),[n,V_]=x(!1),[J_,O_]=x(null),[K_,w_]=x(()=>o3()),B_=k(K),L_=k(""),S_=k(null),q_=k(0),x_=k(new Set),E_=k(null),F_=k(new Map),M_=k(_),O0=k(Y),v_=k(null),k_=k(null),p_=k(null),D0=k(null),m_=k(null),J0=k(null),o_=k("."),D_=k(null),A=k({path:null,dragging:!1,startX:0,startY:0}),d=k({path:null,dragging:!1,startX:0,startY:0}),R_=k({path:null,timer:0}),C0=k(!1),e_=k(0),P0=k(new Map),N0=k(null),q0=k(null),r_=k(a),G0=k($),h_=k(J??$),n_=k(0),T_=k(y_),B0=k(i),y0=k(z_),V0=k(null),U0=k({x:0,y:0}),g_=k(0),_0=k(null),c_=k(V),W0=k(Q),k0=k(N);M_.current=_,O0.current=Y,m(()=>{B_.current=K},[K]),m(()=>{r_.current=a},[a]),m(()=>{G0.current=$},[$]),m(()=>{h_.current=J??$},[J,$]),m(()=>{T_.current=y_},[y_]),m(()=>{let j=(U)=>{let E=U?.detail?.path;if(!E)return;let D=E.split("/"),T=[];for(let g=1;g<D.length;g++)T.push(D.slice(0,g).join("/"));if(T.length)G((g)=>{let o=new Set(g);o.add(".");for(let l of T)o.add(l);return o});W(E),requestAnimationFrame(()=>{let g=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(g)g.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",j),()=>window.removeEventListener("workspace-reveal-path",j)},[]),m(()=>{B0.current=i},[i]),m(()=>{y0.current=z_},[z_]),m(()=>{c_.current=V},[V]),m(()=>{W0.current=Q},[Q]),m(()=>{k0.current=N},[N]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let j=()=>w_(o3());j();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>j();if(U?.addEventListener)U.addEventListener("change",E);else if(U?.addListener)U.addListener(E);let D=typeof MutationObserver<"u"?new MutationObserver(()=>j()):null;if(D?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)D?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",E);else if(U?.removeListener)U.removeListener(E);D?.disconnect()}},[]),m(()=>{if(!Q)return;let j=m_.current;if(!j)return;let U=requestAnimationFrame(()=>{try{j.focus(),j.select()}catch{}});return()=>cancelAnimationFrame(U)},[Q]);let I0=async(j)=>{r(!0),z(null),w(null);try{let U=await K3(j,20000);z(U)}catch(U){z({error:U.message||"Failed to load preview"})}finally{r(!1)}};v_.current=I0;let w0=async()=>{if(!G0.current)return;try{let j=await F2("",1,r_.current),U=l3(j.root,B_.current,r_.current);if(U===L_.current){v(!1);return}if(L_.current=U,S_.current=j.root,!q_.current)q_.current=requestAnimationFrame(()=>{q_.current=0,Z((E)=>W1(E,S_.current)),v(!1)})}catch(j){s(j.message||"Failed to load workspace"),v(!1)}},z0=async(j)=>{if(!j)return;if(x_.current.has(j))return;x_.current.add(j);try{let U=await F2(j,1,r_.current);Z((E)=>G1(E,j,U.root))}catch(U){s(U.message||"Failed to load workspace")}finally{x_.current.delete(j)}};k_.current=z0;let b_=I(()=>{let j=V;if(!j)return".";let U=F_.current?.get(j);if(U&&U.type==="dir")return U.path;if(j==="."||!j.includes("/"))return".";let E=j.split("/");return E.pop(),E.join("/")||"."},[V]),Y0=I((j)=>{let U=j?.closest?.(".workspace-row");if(!U)return null;let E=U.dataset.path,D=U.dataset.type;if(!E)return null;if(D==="dir")return E;if(E.includes("/")){let T=E.split("/");return T.pop(),T.join("/")||"."}return"."},[]),$0=I((j)=>{return Y0(j?.target||null)},[Y0]),f_=I((j)=>{T_.current=j,__(j)},[]),u_=I(()=>{let j=R_.current;if(j?.timer)clearTimeout(j.timer);R_.current={path:null,timer:0}},[]),Z0=I((j)=>{if(!j||j==="."){u_();return}let U=F_.current?.get(j);if(!U||U.type!=="dir"){u_();return}if(B_.current?.has(j)){u_();return}if(R_.current?.path===j)return;u_();let E=setTimeout(()=>{R_.current={path:null,timer:0},k_.current?.(j),G((D)=>{let T=new Set(D);return T.add(j),T})},600);R_.current={path:j,timer:E}},[u_]),A0=I((j,U)=>{if(U0.current={x:j,y:U},g_.current)return;g_.current=requestAnimationFrame(()=>{g_.current=0;let E=V0.current;if(!E)return;let D=U0.current;E.style.transform=`translate(${D.x+12}px, ${D.y+12}px)`})},[]),S0=I((j)=>{if(!j)return;let E=(F_.current?.get(j)?.name||j.split("/").pop()||j).trim();if(!E)return;H_({path:j,label:E})},[]),T0=I(()=>{if(H_(null),g_.current)cancelAnimationFrame(g_.current),g_.current=0;if(V0.current)V0.current.style.transform="translate(-9999px, -9999px)"},[]),c0=I((j)=>{if(!j)return".";let U=F_.current?.get(j);if(U&&U.type==="dir")return U.path;if(j==="."||!j.includes("/"))return".";let E=j.split("/");return E.pop(),E.join("/")||"."},[]),H=I(()=>{y(null),C("")},[]),P=I((j)=>{if(!j)return;let E=(F_.current?.get(j)?.name||j.split("/").pop()||j).trim();if(!E||j===".")return;y(j),C(E)},[]),c=I(async()=>{let j=W0.current;if(!j)return;let U=(F||"").trim();if(!U){H();return}let E=F_.current?.get(j),D=(E?.name||j.split("/").pop()||j).trim();if(U===D){H();return}try{let g=(await V3(j,U))?.path||j,o=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(H(),s(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:j,newPath:g,type:E?.type||"file"}})),E?.type==="dir")G((l)=>{let h=new Set;for(let Z_ of l)if(Z_===j)h.add(g);else if(Z_.startsWith(`${j}/`))h.add(`${g}${Z_.slice(j.length)}`);else h.add(Z_);return h});if(W(g),E?.type==="dir")z(null),r(!1),w(null);else v_.current?.(g);k_.current?.(o)}catch(T){s(T?.message||"Failed to rename file")}},[H,F]),Y_=I(async(j)=>{let D=j||".";for(let T=0;T<50;T+=1){let o=`untitled${T===0?"":`-${T}`}.md`;try{let h=(await G3(D,o,""))?.path||(D==="."?o:`${D}/${o}`);if(D&&D!==".")G((Z_)=>new Set([...Z_,D]));W(h),s(null),k_.current?.(D),v_.current?.(h);return}catch(l){if(l?.status===409||l?.code==="file_exists")continue;s(l?.message||"Failed to create file");return}}s("Failed to create file (untitled name already in use).")},[]),N_=I((j)=>{if(j?.stopPropagation?.(),n)return;let U=c0(c_.current);Y_(U)},[n,c0,Y_]);m(()=>{if(typeof window>"u")return;let j=(U)=>{let E=U?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;Z((l)=>{let h=l;for(let Z_ of E){if(!Z_?.root)continue;if(!h||Z_.path==="."||!Z_.path)h=Z_.root;else h=G1(h,Z_.path,Z_.root)}if(h)L_.current=l3(h,B_.current,r_.current);return v(!1),h});let D=c_.current;if(Boolean(D)&&E.some((l)=>{let h=l?.path||"";if(!h||h===".")return!0;return D===h||D.startsWith(`${h}/`)||h.startsWith(`${D}/`)}))P0.current.clear();if(!D||!k0.current)return;let g=F_.current?.get(D);if(g&&g.type==="dir")return;if(E.some((l)=>{let h=l?.path||"";if(!h||h===".")return!0;return D===h||D.startsWith(`${h}/`)}))v_.current?.(D)};return window.addEventListener("workspace-update",j),()=>window.removeEventListener("workspace-update",j)},[]),E_.current=w0;let U_=k(()=>{if(typeof window>"u")return;let j=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=h_.current??G0.current,E=document.visibilityState!=="hidden"&&(U||j.matches&&G0.current);L2(E,r_.current).catch(()=>{})}).current,j_=k(0),s_=k(()=>{if(j_.current)clearTimeout(j_.current);j_.current=setTimeout(()=>{j_.current=0,U_()},250)}).current;m(()=>{if(G0.current)E_.current?.();s_()},[$,J]),m(()=>{E_.current(),U_();let j=setInterval(()=>E_.current(),H8),U=s0("previewHeight",null),E=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(e_.current=E,p_.current)p_.current.style.setProperty("--preview-height",`${E}px`);let D=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=()=>s_();if(D.addEventListener)D.addEventListener("change",T);else if(D.addListener)D.addListener(T);return document.addEventListener("visibilitychange",T),()=>{if(clearInterval(j),q_.current)cancelAnimationFrame(q_.current),q_.current=0;if(D.removeEventListener)D.removeEventListener("change",T);else if(D.removeListener)D.removeListener(T);if(document.removeEventListener("visibilitychange",T),j_.current)clearTimeout(j_.current),j_.current=0;if(D_.current)clearTimeout(D_.current),D_.current=null;L2(!1,r_.current).catch(()=>{})}},[]);let X0=M0(()=>r3(X,K,a),[X,K,a]),H0=M0(()=>new Map(X0.map((j)=>[j.node.path,j.node])),[X0]);F_.current=H0;let P_=(V?F_.current.get(V):null)?.type==="dir";m(()=>{if(!V||!P_){O_(null),N0.current=null,q0.current=null;return}let j=V,U=`${a?"hidden":"visible"}:${V}`,E=P0.current,D=E.get(U);if(D?.root){E.delete(U),E.set(U,D);let o=n3(D.root,Boolean(D.truncated),K_);if(o)N0.current=o,q0.current=V,O_({loading:!1,error:null,payload:o});return}let T=N0.current,g=q0.current;O_({loading:!0,error:null,payload:g===V?T:null}),F2(V,L8,a).then((o)=>{if(c_.current!==j)return;let l={root:o?.root,truncated:Boolean(o?.truncated)};E.delete(U),E.set(U,l);while(E.size>E8){let Z_=E.keys().next().value;if(!Z_)break;E.delete(Z_)}let h=n3(l.root,l.truncated,K_);N0.current=h,q0.current=V,O_({loading:!1,error:null,payload:h})}).catch((o)=>{if(c_.current!==j)return;O_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:g===V?T:null})})},[V,P_,a,K_]);let Q0=Boolean(N&&N.kind==="text"&&!P_&&(!N.size||N.size<=262144)),F0=Q0?"Open in editor":N?.size>262144?"File too large to edit":"File is not editable",i_=(j)=>{let U=j?.target;if(U instanceof Element)return U;return U?.parentElement||null},T2=k((j)=>{if(C0.current){C0.current=!1;return}let U=i_(j),E=U?.closest?.("[data-path]");if(D0.current?.focus?.(),!E)return;let D=E.dataset.path,T=E.dataset.type,g=Boolean(U?.closest?.(".workspace-caret")),o=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),l=c_.current===D,h=W0.current;if(h){if(h===D)return;H()}if(l&&!g&&!o&&D!=="."){P(D);return}if(T==="dir"){if(W(D),z(null),w(null),r(!1),!B_.current.has(D))k_.current?.(D);if(l&&!g)return;G((d_)=>{let t_=new Set(d_);if(t_.has(D))t_.delete(D);else t_.add(D);return t_})}else{W(D);let Z_=F_.current.get(D);if(Z_)M_.current?.(Z_.path,Z_);v_.current?.(D)}}).current,x2=k(()=>{L_.current="",E_.current(),Array.from(B_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>k_.current?.(U))}).current,x0=k(()=>{W(null),z(null),w(null),r(!1)}).current,L0=k(()=>{Q_((j)=>{let U=!j;if(typeof window<"u")I_("workspaceShowHidden",String(U));return r_.current=U,L2(!0,U).catch(()=>{}),L_.current="",E_.current?.(),Array.from(B_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>k_.current?.(D)),U})}).current,E0=k((j)=>{if(i_(j)?.closest?.("[data-path]"))return;x0()}).current,m0=I(async(j)=>{if(!j)return;let U=j.split("/").pop()||j;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await O3(j);let D=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(c_.current===j)x0();k_.current?.(D),s(null)}catch(D){z((T)=>({...T||{},error:D.message||"Failed to delete file"}))}},[x0]),p0=I((j)=>{let U=D0.current;if(!U||!j||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(j)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),h0=I((j)=>{let U=X0;if(!U||U.length===0)return;let E=V?U.findIndex((D)=>D.node.path===V):-1;if(j.key==="ArrowDown"){j.preventDefault();let D=Math.min(E+1,U.length-1),T=U[D];if(!T)return;if(W(T.node.path),T.node.type!=="dir")M_.current?.(T.node.path,T.node),v_.current?.(T.node.path);else z(null),r(!1),w(null);p0(T.node.path);return}if(j.key==="ArrowUp"){j.preventDefault();let D=E<=0?0:E-1,T=U[D];if(!T)return;if(W(T.node.path),T.node.type!=="dir")M_.current?.(T.node.path,T.node),v_.current?.(T.node.path);else z(null),r(!1),w(null);p0(T.node.path);return}if(j.key==="ArrowRight"&&E>=0){let D=U[E];if(D?.node?.type==="dir"&&!K.has(D.node.path))j.preventDefault(),k_.current?.(D.node.path),G((T)=>new Set([...T,D.node.path]));return}if(j.key==="ArrowLeft"&&E>=0){let D=U[E];if(D?.node?.type==="dir"&&K.has(D.node.path))j.preventDefault(),G((T)=>{let g=new Set(T);return g.delete(D.node.path),g});return}if(j.key==="Enter"&&E>=0){j.preventDefault();let D=U[E];if(!D)return;let T=D.node.path;if(D.node.type==="dir"){if(!B_.current.has(T))k_.current?.(T);G((o)=>{let l=new Set(o);if(l.has(T))l.delete(T);else l.add(T);return l}),z(null),w(null),r(!1)}else M_.current?.(T,D.node),v_.current?.(T);return}if((j.key==="Delete"||j.key==="Backspace")&&E>=0){let D=U[E];if(!D||D.node.type==="dir")return;j.preventDefault(),m0(D.node.path);return}if(j.key==="Escape")j.preventDefault(),x0()},[x0,m0,K,X0,p0,V]),f2=I((j)=>{let U=j?.target?.closest?.(".workspace-row");if(!U)return;let E=U.dataset.type,D=U.dataset.path;if(!D||D===".")return;if(W0.current===D)return;let T=j?.touches?.[0];if(!T)return;if(A.current={path:D,dragging:!1,startX:T.clientX,startY:T.clientY},E!=="file")return;if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{if(D_.current=null,A.current?.dragging)return;m0(D)},600)},[m0]),Q2=I(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;let j=A.current;if(j?.dragging&&j.path){let U=T_.current||b_(),E=_0.current;if(typeof E==="function")E(j.path,U)}A.current={path:null,dragging:!1,startX:0,startY:0},n_.current=0,e(!1),t(null),f_(null),u_(),T0()},[b_,T0,f_,u_]),v2=I((j)=>{let U=A.current,E=j?.touches?.[0];if(!E||!U?.path){if(D_.current)clearTimeout(D_.current),D_.current=null;return}let D=Math.abs(E.clientX-U.startX),T=Math.abs(E.clientY-U.startY),g=D>8||T>8;if(g&&D_.current)clearTimeout(D_.current),D_.current=null;if(!U.dragging&&g)U.dragging=!0,e(!0),t("move"),S0(U.path);if(U.dragging){j.preventDefault(),A0(E.clientX,E.clientY);let o=document.elementFromPoint(E.clientX,E.clientY),l=Y0(o)||b_();if(T_.current!==l)f_(l);Z0(l)}},[Y0,b_,S0,A0,f_,Z0]),R2=k((j)=>{j.preventDefault();let U=p_.current;if(!U)return;let E=j.clientY,D=e_.current||280,T=j.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=E,o=(h)=>{g=h.clientY;let Z_=U.clientHeight-80,d_=Math.min(Math.max(D-(h.clientY-E),80),Z_);U.style.setProperty("--preview-height",`${d_}px`),e_.current=d_},l=()=>{let h=U.clientHeight-80,Z_=Math.min(Math.max(D-(g-E),80),h);e_.current=Z_,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("previewHeight",String(Math.round(Z_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}).current,u2=k((j)=>{j.preventDefault();let U=p_.current;if(!U)return;let E=j.touches[0];if(!E)return;let D=E.clientY,T=e_.current||280,g=j.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let o=(h)=>{let Z_=h.touches[0];if(!Z_)return;h.preventDefault();let d_=U.clientHeight-80,t_=Math.min(Math.max(T-(Z_.clientY-D),80),d_);U.style.setProperty("--preview-height",`${t_}px`),e_.current=t_},l=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",I_("previewHeight",String(Math.round(e_.current||T))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}).current,m2=async()=>{if(!V)return;try{let j=await j3(V);if(j.media_id)w(j.media_id)}catch(j){z((U)=>({...U||{},error:j.message||"Failed to attach"}))}},i0=async()=>{if(!V||P_)return;await m0(V)},f0=(j)=>{return Array.from(j?.dataTransfer?.types||[]).includes("Files")},v0=I((j)=>{if(!f0(j))return;if(j.preventDefault(),n_.current+=1,!B0.current)e(!0);t("upload");let U=$0(j)||b_();f_(U),Z0(U)},[b_,$0,f_,Z0]),g2=I((j)=>{if(!f0(j))return;if(j.preventDefault(),j.dataTransfer)j.dataTransfer.dropEffect="copy";if(!B0.current)e(!0);if(y0.current!=="upload")t("upload");let U=$0(j)||b_();if(T_.current!==U)f_(U);Z0(U)},[b_,$0,f_,Z0]),c2=I((j)=>{if(!f0(j))return;if(j.preventDefault(),n_.current=Math.max(0,n_.current-1),n_.current===0)e(!1),t(null),f_(null),u_()},[f_,u_]),l0=I(async(j,U=".")=>{let E=Array.from(j||[]);if(E.length===0)return;let D=U&&U!==""?U:".",T=D!=="."?D:"workspace root";V_(!0);try{let g=null;for(let o of E)try{g=await e2(o,D)}catch(l){let h=l?.status,Z_=l?.code;if(h===409||Z_==="file_exists"){let d_=o?.name||"file";if(!window.confirm(`"${d_}" already exists in ${T}. Overwrite?`))continue;g=await e2(o,D,{overwrite:!0})}else throw l}if(g?.path)W(g.path),v_.current?.(g.path);k_.current?.(D)}catch(g){s(g.message||"Failed to upload file")}finally{V_(!1)}},[]),p2=I(async(j,U)=>{if(!j)return;let E=F_.current?.get(j);if(!E)return;let D=U&&U!==""?U:".",T=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(D===T)return;try{let o=(await W3(j,D))?.path||j;if(E.type==="dir")G((l)=>{let h=new Set;for(let Z_ of l)if(Z_===j)h.add(o);else if(Z_.startsWith(`${j}/`))h.add(`${o}${Z_.slice(j.length)}`);else h.add(Z_);return h});if(W(o),E.type==="dir")z(null),r(!1),w(null);else v_.current?.(o);k_.current?.(T),k_.current?.(D)}catch(g){s(g?.message||"Failed to move entry")}},[]);_0.current=p2;let h2=I(async(j)=>{if(!f0(j))return;j.preventDefault(),n_.current=0,e(!1),t(null),__(null),u_();let U=Array.from(j?.dataTransfer?.files||[]);if(U.length===0)return;let E=T_.current||$0(j)||b_();await l0(U,E)},[b_,$0,l0]),i2=I((j)=>{if(j?.stopPropagation?.(),n)return;let U=j?.currentTarget?.dataset?.uploadTarget||".";o_.current=U,J0.current?.click()},[n]),L1=I(()=>{if(n)return;let j=c_.current,U=j?F_.current?.get(j):null;o_.current=U?.type==="dir"?U.path:".",J0.current?.click()},[n]),l2=I((j)=>{if(!j||j.button!==0)return;let U=j.currentTarget;if(!U||!U.dataset)return;let E=U.dataset.path;if(!E||E===".")return;if(W0.current===E)return;if(j.target?.closest?.("button, a, input, .workspace-caret"))return;j.preventDefault(),d.current={path:E,dragging:!1,startX:j.clientX,startY:j.clientY};let D=(g)=>{let o=d.current;if(!o?.path)return;let l=Math.abs(g.clientX-o.startX),h=Math.abs(g.clientY-o.startY),Z_=l>4||h>4;if(!o.dragging&&Z_)o.dragging=!0,C0.current=!0,e(!0),t("move"),S0(o.path),A0(g.clientX,g.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){g.preventDefault(),A0(g.clientX,g.clientY);let d_=document.elementFromPoint(g.clientX,g.clientY),t_=Y0(d_)||b_();if(T_.current!==t_)f_(t_);Z0(t_)}},T=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",T);let g=d.current;if(g?.dragging&&g.path){let o=T_.current||b_(),l=_0.current;if(typeof l==="function")l(g.path,o)}d.current={path:null,dragging:!1,startX:0,startY:0},n_.current=0,e(!1),t(null),f_(null),u_(),T0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{C0.current=!1},0)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",T)},[Y0,b_,S0,A0,T0,f_,Z0,u_]),K2=I(async(j)=>{let U=Array.from(j?.target?.files||[]);if(U.length===0)return;let E=o_.current||".";if(await l0(U,E),o_.current=".",j?.target)j.target.value=""},[l0]);return B`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            ref=${p_}
            onDragEnter=${v0}
            onDragOver=${g2}
            onDragLeave=${c2}
            onDrop=${h2}
        >
            <input type="file" multiple style="display:none" ref=${J0} onChange=${K2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${N_} title="New file" disabled=${n}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${x2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${a?" active":""}`}
                        onClick=${L0}
                        title=${a?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!a&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${E0}>
                ${n&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${b&&B`<div class="workspace-loading">Loading…</div>`}
                ${$_&&B`<div class="workspace-error">${$_}</div>`}
                ${X&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${D0}
                        tabIndex="0"
                        onClick=${T2}
                        onKeyDown=${h0}
                        onTouchStart=${f2}
                        onTouchEnd=${Q2}
                        onTouchMove=${v2}
                        onTouchCancel=${Q2}
                    >
                        ${X0.map(({node:j,depth:U})=>{let E=j.type==="dir",D=j.path===V,T=j.path===Q,g=E&&K.has(j.path),o=y_&&j.path===y_,l=Array.isArray(j.children)&&j.children.length>0?j.children.length:Number(j.child_count)||0;return B`
                                <div
                                    key=${j.path}
                                    class=${`workspace-row${D?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*z8}px`}}
                                    data-path=${j.path}
                                    data-type=${j.type}
                                    onMouseDown=${l2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?g?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${T?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${m_}
                                                value=${F}
                                                onInput=${(h)=>C(h?.target?.value||"")}
                                                onKeyDown=${(h)=>{if(h.key==="Enter")h.preventDefault(),c();else if(h.key==="Escape")h.preventDefault(),H()}}
                                                onBlur=${H}
                                                onClick=${(h)=>h.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label">${j.name}</span>`}
                                    ${E&&!g&&l>0&&B`
                                        <span class="workspace-count">${l}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${j.path}
                                            title="Upload files to this folder"
                                            onClick=${i2}
                                            disabled=${n}
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
            ${V&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${R2} onTouchStart=${u2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${N_} title="New file" disabled=${n}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!P_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Q0&&O0.current?.(V,N)}
                                    title=${F0}
                                    disabled=${!Q0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${i0}
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
                            ${P_?B`
                                    <button class="workspace-download" onClick=${L1}
                                        title="Upload files to this folder" disabled=${n}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${N3(V,a)}
                                        title="Download folder as zip" onClick=${(j)=>j.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${m2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${R&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${N?.error&&B`<div class="workspace-error">${N.error}</div>`}
                    ${P_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${J_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${J_?.error&&B`<div class="workspace-error">${J_.error}</div>`}
                        ${J_?.payload&&J_.payload.segments?.length>0&&B`
                            <${D8} payload=${J_.payload} />
                        `}
                        ${J_?.payload&&(!J_.payload.segments||J_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${N&&!N.error&&!P_&&B`
                        <div class="workspace-preview-meta">
                            ${N.size?B`<span>${b0(N.size)}</span>`:""}
                            ${N.mtime?B`<span>${M2(N.mtime)}</span>`:""}
                            ${N.truncated?B`<span>truncated</span>`:""}
                        </div>
                        ${N.kind==="image"&&B`
                            <div class="workspace-preview-image">
                                <img src=${N.url||_1(N.path)} alt="preview" />
                            </div>
                        `}
                        ${N.kind==="text"&&B`
                            ${N.content_type==="text/markdown"?B`<div class="workspace-preview-text"
                                    dangerouslySetInnerHTML=${{__html:A2(N.text||"",null,{rewriteImageSrc:(j)=>F8(j,N.path||V)})}} />`:B`<pre class="workspace-preview-text"><code>${N.text||""}</code></pre>`}
                        `}
                        ${N.kind==="binary"&&B`
                            <div class="workspace-preview-text">Binary file — download to view.</div>
                        `}
                    `}
                    ${L&&B`
                        <div class="workspace-download-card">
                            <${C8} mediaId=${L} />
                        </div>
                    `}
                </div>
            `}
            ${G_&&B`
                <div class="workspace-drag-ghost" ref=${V0}>${G_.label}</div>
            `}
        </aside>
    `}function Z4({tabs:_,activeId:$,onActivate:J,onClose:Y,onCloseOthers:X,onCloseAll:Z,onTogglePin:K,onToggleDock:G,dockVisible:V}){let[W,Q]=x(null),y=k(null);m(()=>{if(!W)return;let z=(L)=>{if(L.type==="keydown"&&L.key!=="Escape")return;Q(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[W]),m(()=>{let z=(L)=>{if(L.ctrlKey&&L.key==="Tab"){if(L.preventDefault(),!_.length)return;let w=_.findIndex((b)=>b.id===$);if(L.shiftKey){let b=_[(w-1+_.length)%_.length];J?.(b.id)}else{let b=_[(w+1)%_.length];J?.(b.id)}return}if((L.ctrlKey||L.metaKey)&&L.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(L.preventDefault(),$)Y?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,J,Y]);let F=I((z,L)=>{if(z.button===1){z.preventDefault(),Y?.(L);return}if(z.button===0)J?.(L)},[J,Y]),C=I((z,L)=>{z.preventDefault(),Q({id:L,x:z.clientX,y:z.clientY})},[]),N=I((z,L)=>{z.stopPropagation(),Y?.(L)},[Y]);if(m(()=>{if(!$||!y.current)return;let z=y.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${y} role="tablist">
            ${_.map((z)=>B`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(L)=>F(L,z.id)}
                    onContextMenu=${(L)=>C(L,z.id)}
                >
                    ${z.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(L)=>N(L,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${G&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${V?" active":""}`}
                    onClick=${G}
                    title=${`${V?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${V?"Hide":"Show"} terminal`}
                    aria-pressed=${V?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&B`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Y?.(W.id),Q(null)}}>Close</button>
                <button onClick=${()=>{X?.(W.id),Q(null)}}>Close Others</button>
                <button onClick=${()=>{Z?.(),Q(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(W.id),Q(null)}}>
                    ${_.find((z)=>z.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
            </div>
        `}
    `}class X4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,J=-1/0;for(let Y of this.extensions.values()){if(Y.placement!=="tabs")continue;if(!Y.canHandle)continue;try{let X=Y.canHandle(_);if(X===!1||X===0)continue;let Z=X===!0?0:typeof X==="number"?X:0;if(Z>J)J=Z,$=Y}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Y.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j0=new X4;var I2=null,N1=null;function Q4(){if(N1)return Promise.resolve(N1);if(!I2)I2=import("/static/dist/editor.bundle.js").then((_)=>{return N1=_,_}).catch((_)=>{throw I2=null,_});return I2}class K4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-header">
                <div class="editor-title">${this.escapeHtml($.path||"Untitled")}</div>
            </div>
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Q4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var q1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;return 1},mount(_,$){return new K4(_,$)}};function B1(){Q4().catch(()=>{})}class j4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let J=document.createElement("div");J.className="terminal-pane-header";let Y=document.createElement("span");Y.className="terminal-pane-title",Y.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",J.append(Y,X);let Z=document.createElement("div");Z.className="terminal-pane-body",Z.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(J,Z),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var U1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new j4(_,$)}};class G4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let J of this.listeners)try{J(_,$)}catch{}}open(_,$){let J=this.tabs.get(_);if(!J)J={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,J);return this.activate(_),J}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,J]of this.tabs)if($!==_&&!J.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Y)=>Y!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let J=this.tabs.get(_);if(!J||J.dirty===$)return;J.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let J=this.tabs.get(_);if(J)J.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,J){let Y=this.tabs.get(_);if(!Y)return;if(this.tabs.delete(_),Y.id=$,Y.path=$,Y.label=J||$.split("/").pop()||$,this.tabs.set($,Y),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($+1)%_.length];this.activate(J.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($-1+_.length)%_.length];this.activate(J.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var C_=new G4;function V4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:J}){m(()=>{J();let Y=new $1(_,$);Y.connect();let X=()=>{Y.reconnectIfNeeded()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),Y.disconnect()}},[$,_,J])}function W4(){let[_,$]=x(!1),[J,Y]=x("default"),X=k(!1);m(()=>{let V=r0("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")Y(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Z=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),K=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Y("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await Z();if(Y(W||"default"),W!=="granted"){X.current=!1,$(!1),I_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),I_("notificationsEnabled",String(V))},[Z]),G=I((V,W)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(V,{body:W});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:J,toggleNotifications:K,notify:G}}var X2=(_)=>{let $=new Set;return(_||[]).filter((J)=>{if(!J||$.has(J.id))return!1;return $.add(J.id),!0})};function O4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[J,Y]=x(null),[X,Z]=x(!1),K=k(!1),G=k(null),V=k(!1),W=k(null);m(()=>{K.current=X},[X]);let Q=I(async(C=null)=>{try{if(C){let N=await a1(C);Y(N.posts),Z(!1)}else{let N=await z2(10);Y(N.posts),Z(N.has_more)}}catch(N){console.error("Failed to load posts:",N)}},[]),y=I(async()=>{try{let C=await z2(10);Y((N)=>{if(!N||N.length===0)return C.posts;return X2([...C.posts,...N])}),Z((N)=>N||C.has_more)}catch(C){console.error("Failed to refresh timeline:",C)}},[]),F=I(async(C={})=>{if(!J||J.length===0)return;if(V.current)return;let{preserveScroll:N=!0,preserveMode:z="top",allowRepeat:L=!1}=C,w=(R)=>{if(!N){R();return}if(z==="top")$(R);else _(R)},v=J.slice().sort((R,r)=>R.id-r.id)[0]?.id;if(!Number.isFinite(v))return;if(!L&&W.current===v)return;V.current=!0,W.current=v;try{let R=await z2(10,v);if(R.posts.length>0)w(()=>{Y((r)=>X2([...R.posts,...r||[]])),Z(R.has_more)});else Z(!1)}catch(R){console.error("Failed to load more posts:",R)}finally{V.current=!1}},[J,_,$]);return m(()=>{G.current=F},[F]),{posts:J,setPosts:Y,hasMore:X,setHasMore:Z,hasMoreRef:K,loadPosts:Q,refreshTimeline:y,loadMore:F,loadMoreRef:G,loadingMoreRef:V,lastBeforeIdRef:W}}function N4(){let[_,$]=x(null),[J,Y]=x({text:"",totalLines:0}),[X,Z]=x(""),[K,G]=x({text:"",totalLines:0}),[V,W]=x(null),[Q,y]=x(null),[F,C]=x(null),N=k(null),z=k(0),L=k(!1),w=k(""),b=k(""),v=k(null),R=k(null),r=k(null),$_=k(null),s=k(!1),a=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:J,setAgentDraft:Y,agentPlan:X,setAgentPlan:Z,agentThought:K,setAgentThought:G,pendingRequest:V,setPendingRequest:W,currentTurnId:Q,setCurrentTurnId:y,steerQueuedTurnId:F,setSteerQueuedTurnId:C,lastAgentEventRef:N,lastSilenceNoticeRef:z,isAgentRunningRef:L,draftBufferRef:w,thoughtBufferRef:b,pendingRequestRef:v,stalledPostIdRef:R,currentTurnIdRef:r,steerQueuedTurnIdRef:$_,thoughtExpandedRef:s,draftExpandedRef:a}}function q4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:J,dockHeightRef:Y}){let X=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientX,C=$.current||280,N=Q.currentTarget;N.classList.add("dragging"),y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,L=(b)=>{z=b.clientX;let v=Math.min(Math.max(C+(b.clientX-F),160),600);y.style.setProperty("--sidebar-width",`${v}px`),$.current=v},w=()=>{let b=Math.min(Math.max(C+(z-F),160),600);$.current=b,N.classList.remove("dragging"),y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",I_("sidebarWidth",String(Math.round(b))),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",w)}).current,Z=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let C=F.clientX,N=$.current||280,z=Q.currentTarget;z.classList.add("dragging"),y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let L=(b)=>{let v=b.touches[0];if(!v)return;b.preventDefault();let R=Math.min(Math.max(N+(v.clientX-C),160),600);y.style.setProperty("--sidebar-width",`${R}px`),$.current=R},w=()=>{z.classList.remove("dragging"),y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",I_("sidebarWidth",String(Math.round($.current||N))),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",L,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,K=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientX,C=J.current||$.current||280,N=Q.currentTarget;N.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,L=(b)=>{z=b.clientX;let v=Math.min(Math.max(C+(b.clientX-F),200),800);y.style.setProperty("--editor-width",`${v}px`),J.current=v},w=()=>{let b=Math.min(Math.max(C+(z-F),200),800);J.current=b,N.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("editorWidth",String(Math.round(b))),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",w)}).current,G=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let C=F.clientX,N=J.current||$.current||280,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let L=(b)=>{let v=b.touches[0];if(!v)return;b.preventDefault();let R=Math.min(Math.max(N+(v.clientX-C),200),800);y.style.setProperty("--editor-width",`${R}px`),J.current=R},w=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",I_("editorWidth",String(Math.round(J.current||N))),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",L,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current,V=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.clientY,C=Y?.current||200,N=Q.currentTarget;N.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=F,L=(b)=>{z=b.clientY;let v=Math.min(Math.max(C-(b.clientY-F),100),window.innerHeight*0.5);if(y.style.setProperty("--dock-height",`${v}px`),Y)Y.current=v},w=()=>{let b=Math.min(Math.max(C-(z-F),100),window.innerHeight*0.5);if(Y)Y.current=b;N.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",I_("dockHeight",String(Math.round(b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",w)}).current,W=k((Q)=>{Q.preventDefault();let y=_.current;if(!y)return;let F=Q.touches[0];if(!F)return;let C=F.clientY,N=Y?.current||200,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let L=(b)=>{let v=b.touches[0];if(!v)return;b.preventDefault();let R=Math.min(Math.max(N-(v.clientY-C),100),window.innerHeight*0.5);if(y.style.setProperty("--dock-height",`${R}px`),Y)Y.current=R},w=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",I_("dockHeight",String(Math.round(Y?.current||N))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",L,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:W}}function B4(){let[_,$]=x(()=>C_.getTabs()),[J,Y]=x(()=>C_.getActiveId()),[X,Z]=x(()=>C_.getTabs().length>0);m(()=>{return C_.onChange((N,z)=>{$(N),Y(z),Z(N.length>0)})},[]);let K=I((N)=>{if(!N)return;let z={path:N,mode:"edit"};try{if(!j0.resolve(z)){if(!j0.get("editor")){console.warn(`[openEditor] No pane handler for: ${N}`);return}}}catch(L){console.warn(`[openEditor] paneRegistry.resolve() error for "${N}":`,L)}C_.open(N)},[]),G=I(()=>{let N=C_.getActiveId();if(N){let z=C_.get(N);if(z?.dirty){if(!window.confirm(`"${z.label}" has unsaved changes. Close anyway?`))return}C_.close(N)}},[]),V=I((N)=>{let z=C_.get(N);if(z?.dirty){if(!window.confirm(`"${z.label}" has unsaved changes. Close anyway?`))return}C_.close(N)},[]),W=I((N)=>{C_.activate(N)},[]),Q=I((N)=>{C_.closeOthers(N)},[]),y=I(()=>{C_.closeAll()},[]),F=I((N)=>{C_.togglePin(N)},[]),C=I(()=>{let N=C_.getActiveId();if(N)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:N}}))},[]);return m(()=>{let N=(z)=>{let{oldPath:L,newPath:w,type:b}=z.detail||{};if(!L||!w)return;if(b==="dir"){for(let v of C_.getTabs())if(v.path===L||v.path.startsWith(`${L}/`)){let R=`${w}${v.path.slice(L.length)}`;C_.rename(v.id,R)}}else C_.rename(L,w)};return window.addEventListener("workspace-file-renamed",N),()=>window.removeEventListener("workspace-file-renamed",N)},[]),m(()=>{let N=(z)=>{if(C_.hasUnsaved())z.preventDefault(),z.returnValue=""};return window.addEventListener("beforeunload",N),()=>window.removeEventListener("beforeunload",N)},[]),{editorOpen:X,tabStripTabs:_,tabStripActiveId:J,openEditor:K,closeEditor:G,handleTabClose:V,handleTabActivate:W,handleTabCloseOthers:Q,handleTabCloseAll:y,handleTabTogglePin:F,revealInExplorer:C}}function z1(_,$){try{if(typeof window>"u")return $;let J=window.__PICLAW_SILENCE||{},Y=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=J[_]??window[Y],Z=Number(X);return Number.isFinite(Z)?Z:$}catch{return $}}var H1=z1("warning",30000),U4=z1("finalize",120000),z4=z1("refresh",30000),H4=30000;function F4(_){let $={};return(_?.agents||[]).forEach((J)=>{$[J.id]=J}),$}function L4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function E4(_=30000){let[,$]=x(0);m(()=>{let J=setInterval(()=>$((Y)=>Y+1),_);return()=>clearInterval(J)},[_])}function S2(_,$=160){let J=String(_||"").replace(/\r\n/g,`
`);if(!J)return 0;return J.split(`
`).reduce((Y,X)=>Y+Math.max(1,Math.ceil(X.length/$)),0)}function w4(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var y8=t1,D4=e1,k8=_3,C4=Z3,y4=X3,k4=$3,F1=typeof a2==="function"?a2:w4("getAgentContext",null),w8=typeof $2==="function"?$2:w4("getAgentModels",{current:null,models:[]});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j0.register(q1);B1();var A8=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(A8)j0.register(U1);function M8(){let[_,$]=x("disconnected"),[J,Y]=x(null),[X,Z]=x(null),[K,G]=x(!1),[V,W]=x([]),[Q,y]=x([]),{agentStatus:F,setAgentStatus:C,agentDraft:N,setAgentDraft:z,agentPlan:L,setAgentPlan:w,agentThought:b,setAgentThought:v,pendingRequest:R,setPendingRequest:r,currentTurnId:$_,setCurrentTurnId:s,steerQueuedTurnId:a,setSteerQueuedTurnId:Q_,lastAgentEventRef:i,lastSilenceNoticeRef:e,isAgentRunningRef:z_,draftBufferRef:t,thoughtBufferRef:G_,pendingRequestRef:H_,stalledPostIdRef:y_,currentTurnIdRef:__,steerQueuedTurnIdRef:n,thoughtExpandedRef:V_,draftExpandedRef:J_}=N4(),[O_,K_]=x({}),[w_,B_]=x(null),[L_,S_]=x(null),[q_,x_]=x(!1),[E_,F_]=x(null),{notificationsEnabled:M_,notificationPermission:O0,toggleNotifications:v_,notify:k_}=W4(),[p_,D0]=x(()=>new Set),[m_,J0]=x(()=>r0("workspaceOpen",!0)),{editorOpen:o_,tabStripTabs:D_,tabStripActiveId:A,openEditor:d,closeEditor:R_,handleTabClose:C0,handleTabActivate:e_,handleTabCloseOthers:P0,handleTabCloseAll:N0,handleTabTogglePin:q0,revealInExplorer:r_}=B4(),G0=k(null),h_=k(null);m(()=>{let O=G0.current;if(!O)return;if(h_.current)h_.current.dispose(),h_.current=null;let q=A;if(!q)return;let M={path:q,mode:"edit"},f=j0.resolve(M)||j0.get("editor");if(!f){O.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=f.mount(O,M);h_.current=u,u.onDirtyChange?.((p)=>{C_.setDirty(q,p)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{R_()});let S=C_.getViewState(q);if(S&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(S));if(typeof u.onViewStateChange==="function")u.onViewStateChange((p)=>{C_.saveViewState(q,p)});return requestAnimationFrame(()=>u.focus()),()=>{if(h_.current===u)u.dispose(),h_.current=null}},[A,R_]);let[n_,T_]=x({name:"You",avatar_url:null,avatar_background:null}),B0=k(!1),y0=k(!1),V0=k({}),U0=k({name:null,avatar_url:null}),g_=k({currentHashtag:null,searchQuery:null}),_0=k(null),c_=k(null),W0=k(0),k0=k(0),I0=k(0),w0=k(null),z0=k(null),b_=k(null),Y0=k(0),$0=k({title:null,avatarBase:null});E4(30000),m(()=>{return D3()},[]),m(()=>{I_("workspaceOpen",String(m_))},[m_]),m(()=>{V0.current=O_||{}},[O_]),m(()=>{U0.current=n_||{name:"You",avatar_url:null,avatar_background:null}},[n_]);let f_=I((O,q,M=null)=>{if(typeof document>"u")return;let f=(O||"").trim()||"PiClaw";if($0.current.title!==f){document.title=f;let A_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A_&&A_.getAttribute("content")!==f)A_.setAttribute("content",f);$0.current.title=f}let u=document.getElementById("dynamic-favicon");if(!u)return;let S=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",p=q||S,W_=q?`${p}|${M||""}`:p;if($0.current.avatarBase!==W_){let A_=q?`${p}${p.includes("?")?"&":"?"}v=${M||Date.now()}`:p;u.setAttribute("href",A_),$0.current.avatarBase=W_}},[]),u_=I((O)=>{if(!O)return;W((q)=>q.includes(O)?q:[...q,O])},[]),Z0=I((O)=>{W((q)=>q.filter((M)=>M!==O))},[]),A0=I(()=>{W([])},[]),S0=I(()=>{let O=A;if(O)u_(O)},[A,u_]),T0=I((O)=>{if(!O)return;y((q)=>q.includes(O)?q:[...q,O])},[]),c0=I((O)=>{y((q)=>q.filter((M)=>M!==O))},[]),H=I(()=>{y([])},[]),P=I((O={})=>{let q=Date.now();if(i.current=q,O.running)z_.current=!0;if(O.clearSilence)e.current=0},[]),c=I(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;Y0.current=0},[]);m(()=>()=>{c()},[c]);let Y_=I(()=>{c(),C((O)=>{if(!O)return O;if(!(O.last_activity||O.lastActivity))return O;let{last_activity:q,lastActivity:M,...f}=O;return f})},[c]),N_=I((O)=>{if(!O)return;c();let q=Date.now();Y0.current=q,C({type:O.type||"active",last_activity:!0}),b_.current=setTimeout(()=>{if(Y0.current!==q)return;C((M)=>{if(!M||!(M.last_activity||M.lastActivity))return M;return null})},H4)},[c]),U_=I(()=>{z_.current=!1,i.current=null,e.current=0,t.current="",G_.current="",H_.current=null,z0.current=null,__.current=null,n.current=null,c(),s(null),Q_(null),V_.current=!1,J_.current=!1},[c,s,Q_]),j_=I((O)=>{if(!O)return;if(__.current===O)return;__.current=O,s(O),n.current=null,Q_(null),t.current="",G_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),H_.current=null,z0.current=null,V_.current=!1,J_.current=!1},[s,Q_]),s_=I((O)=>{if(typeof document<"u"){let A_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&A_)return}let q=z0.current;if(!q||!q.post)return;if(O&&q.turnId&&q.turnId!==O)return;let M=q.post;if(M.id&&w0.current===M.id)return;let f=String(M?.data?.content||"").trim();if(!f)return;w0.current=M.id||w0.current,z0.current=null;let u=f.replace(/\s+/g," ").slice(0,200),S=V0.current||{},W_=(M?.data?.agent_id?S[M.data.agent_id]:null)?.name||"Pi";k_(W_,u)},[k_]),X0=I(async(O,q)=>{if(O!=="thought"&&O!=="draft")return;let M=__.current;if(O==="thought"){if(V_.current=q,M)try{await y4(M,"thought",q)}catch(f){console.warn("Failed to update thought visibility:",f)}if(!q)return;try{let f=M?await C4(M,"thought"):null;if(f?.text)G_.current=f.text;v((u)=>({...u||{text:"",totalLines:0},fullText:G_.current||u?.fullText||"",totalLines:Number.isFinite(f?.total_lines)?f.total_lines:u?.totalLines||0}))}catch(f){console.warn("Failed to fetch full thought:",f)}return}if(J_.current=q,M)try{await y4(M,"draft",q)}catch(f){console.warn("Failed to update draft visibility:",f)}if(!q)return;try{let f=M?await C4(M,"draft"):null;if(f?.text)t.current=f.text;z((u)=>({...u||{text:"",totalLines:0},fullText:t.current||u?.fullText||"",totalLines:Number.isFinite(f?.total_lines)?f.total_lines:u?.totalLines||0}))}catch(f){console.warn("Failed to fetch full draft:",f)}},[]),H0=k(null),a_=I(()=>{if(_0.current)_0.current.scrollTop=0},[]);H0.current=a_;let P_=I((O)=>{let q=_0.current;if(!q||typeof O!=="function"){O?.();return}let{currentHashtag:M,searchQuery:f}=g_.current||{},u=!(f&&!M),S=u?q.scrollHeight-q.scrollTop:q.scrollTop;O(),requestAnimationFrame(()=>{let p=_0.current;if(!p)return;if(u){let W_=Math.max(p.scrollHeight-S,0);p.scrollTop=W_}else{let W_=Math.max(p.scrollHeight-p.clientHeight,0),A_=Math.min(S,W_);p.scrollTop=A_}})},[]),Q0=I((O)=>{let q=_0.current;if(!q||typeof O!=="function"){O?.();return}let M=q.scrollTop;O(),requestAnimationFrame(()=>{let f=_0.current;if(!f)return;let u=Math.max(f.scrollHeight-f.clientHeight,0);f.scrollTop=Math.min(M,u)})},[]),{posts:F0,setPosts:i_,hasMore:T2,setHasMore:x2,hasMoreRef:x0,loadPosts:L0,refreshTimeline:E0,loadMore:m0,loadMoreRef:p0}=O4({preserveTimelineScroll:P_,preserveTimelineScrollTop:Q0}),h0=I(()=>{let O=y_.current;if(!O)return;i_((q)=>q?q.filter((M)=>M.id!==O):q),y_.current=null},[i_]),{handleSplitterMouseDown:f2,handleSplitterTouchStart:Q2,handleEditorSplitterMouseDown:v2,handleEditorSplitterTouchStart:R2,handleDockSplitterMouseDown:u2,handleDockSplitterTouchStart:m2}=q4({appShellRef:c_,sidebarWidthRef:W0,editorWidthRef:k0,dockHeightRef:I0}),i0=I(()=>{if(!z_.current)return;z_.current=!1,e.current=0,i.current=null,__.current=null,s(null),V_.current=!1,J_.current=!1;let O=(t.current||"").trim();if(t.current="",G_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),H_.current=null,z0.current=null,!O){C({type:"error",title:"Response stalled — No content received"});return}let M=`${O}${`

⚠️ Response may be incomplete — the model stopped responding`}`,f=Date.now(),u=new Date().toISOString(),S={id:f,timestamp:u,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};y_.current=f,i_((p)=>p?X2([...p,S]):[S]),H0.current?.(),C(null)},[s]);m(()=>{g_.current={currentHashtag:J,searchQuery:X}},[J,X]),m(()=>{let O=Math.min(1000,Math.max(100,Math.floor(H1/2))),q=setInterval(()=>{if(!z_.current)return;if(H_.current)return;let M=i.current;if(!M)return;let f=Date.now(),u=f-M;if(u>=U4){i0();return}if(u>=H1){if(f-e.current>=z4){let S=Math.floor(u/1000);C({type:"waiting",title:`Waiting for model… No events for ${S}s`}),e.current=f}}},O);return()=>clearInterval(q)},[i0]);let f0=I(async()=>{try{let O=await F1();if(O)F_(O)}catch(O){console.warn("Failed to fetch agent context:",O)}},[]),v0=I(async()=>{try{let O=await k4("web:default");if(!O||O.status!=="active"||!O.data){if(y0.current){let{currentHashtag:f,searchQuery:u}=g_.current||{};if(!f&&!u)E0()}y0.current=!1,U_(),C(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),H_.current=null;return}y0.current=!0;let q=O.data,M=q.turn_id||q.turnId;if(M)j_(M);if(P({running:!0,clearSilence:!0}),Y_(),C(q),O.thought&&O.thought.text)v((f)=>{if(f&&f.text&&f.text.length>=O.thought.text.length)return f;return G_.current=O.thought.text,{text:O.thought.text,totalLines:O.thought.totalLines||0}});if(O.draft&&O.draft.text)z((f)=>{if(f&&f.text&&f.text.length>=O.draft.text.length)return f;return t.current=O.draft.text,{text:O.draft.text,totalLines:O.draft.totalLines||0}})}catch(O){console.warn("Failed to fetch agent status:",O)}},[U_,Y_,P,E0,j_]),g2=I((O)=>{if($(O),O!=="connected"){C(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),H_.current=null,U_();return}if(!B0.current){B0.current=!0,v0();return}let{currentHashtag:q,searchQuery:M}=g_.current;if(!q&&!M)E0();v0()},[U_,E0,v0]),c2=I(async(O)=>{Y(O),i_(null),await L0(O)},[L0]),l0=I(async()=>{Y(null),Z(null),i_(null),await L0()},[L0]),p2=I(async(O)=>{if(!O||!O.trim())return;Z(O.trim()),Y(null),i_(null);try{let q=await y8(O.trim());i_(q.results),x2(!1)}catch(q){console.error("Failed to search:",q),i_([])}},[]),h2=I(()=>{G(!0),Z(null),Y(null),i_([])},[]),i2=I(()=>{G(!1),Z(null),L0()},[L0]),L1=I(()=>{},[]),l2=I(async(O)=>{if(!O)return;let q=O.id,M=F0?.filter((u)=>u?.data?.thread_id===q&&u?.id!==q).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let f=(u)=>{if(!u.length)return;D0((p)=>{let W_=new Set(p);return u.forEach((A_)=>W_.add(A_)),W_}),setTimeout(()=>{if(Q0(()=>{i_((p)=>p?p.filter((W_)=>!u.includes(W_.id)):p)}),D0((p)=>{let W_=new Set(p);return u.forEach((A_)=>W_.delete(A_)),W_}),x0.current)p0.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await D4(q,M>0);if(u?.ids?.length)f(u.ids)}catch(u){let S=u?.message||"";if(M===0&&S.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let W_=await D4(q,!0);if(W_?.ids?.length)f(W_.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${S}`)}},[F0,Q0]),K2=I(async()=>{try{let O=await k8();K_(F4(O));let q=O?.user||{};T_((f)=>{let u=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",S=typeof q.avatar_url==="string"?q.avatar_url.trim():null,p=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(f.name===u&&f.avatar_url===S&&f.avatar_background===p)return f;return{name:u,avatar_url:S,avatar_background:p}});let M=(O?.agents||[]).find((f)=>f.id==="default");if(M?.model)B_(M.model);f_(M?.name,M?.avatar_url)}catch(O){console.warn("Failed to load agents:",O)}try{let O=await F1();if(O)F_(O)}catch{}},[f_]);m(()=>{K2();let O=s0("sidebarWidth",null),q=Number.isFinite(O)?Math.min(Math.max(O,160),600):280;if(W0.current=q,c_.current)c_.current.style.setProperty("--sidebar-width",`${q}px`)},[K2]);let j=I((O)=>{if(!O||typeof O!=="object")return;let q=O.agent_id;if(!q)return;let{agent_name:M,agent_avatar:f}=O;if(!M&&f===void 0)return;let u=V0.current?.[q]||{id:q},S=u.name||null,p=u.avatar_url??u.avatarUrl??u.avatar??null,W_=!1,A_=!1;if(M&&M!==u.name)S=M,A_=!0;if(f!==void 0){let o0=typeof f==="string"?f.trim():null,E1=typeof p==="string"?p.trim():null,n0=o0||null;if(n0!==(E1||null))p=n0,W_=!0}if(!A_&&!W_)return;if(K_((o0)=>{let n0={...o0[q]||{id:q}};if(A_)n0.name=S;if(W_)n0.avatar_url=p;return{...o0,[q]:n0}}),q==="default")f_(S,p,W_?Date.now():null)},[f_]),U=I((O)=>{if(!O||typeof O!=="object")return;let q=O.user_name??O.userName,M=O.user_avatar??O.userAvatar,f=O.user_avatar_background??O.userAvatarBackground;if(q===void 0&&M===void 0&&f===void 0)return;T_((u)=>{let S=typeof q==="string"&&q.trim()?q.trim():u.name||"You",p=M===void 0?u.avatar_url:typeof M==="string"&&M.trim()?M.trim():null,W_=f===void 0?u.avatar_background:typeof f==="string"&&f.trim()?f.trim():null;if(u.name===S&&u.avatar_url===p&&u.avatar_background===W_)return u;return{name:S,avatar_url:p,avatar_background:W_}})},[]),E=I((O)=>{if(!O||typeof O!=="object")return;let q=O.model??O.current;if(q!==void 0)B_(q);if(O.thinking_level!==void 0)S_(O.thinking_level??null);if(O.supports_thinking!==void 0)x_(Boolean(O.supports_thinking))},[]),D=I(()=>{w8().then((O)=>{if(O)E(O)}).catch(()=>{})},[E]),T=I((O,q)=>{let M=q?.turn_id;if(j(q),U(q),O==="ui_theme"){C3(q);return}if(O?.startsWith("agent_"))Y_();if(O==="connected"){C(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),H_.current=null,U_(),k4("web:default").then((S)=>{if(!S||S.status!=="active"||!S.data)return;let p=S.data,W_=p.turn_id||p.turnId;if(W_)j_(W_);if(P({clearSilence:!0}),N_(p),S.thought&&S.thought.text)G_.current=S.thought.text,v({text:S.thought.text,totalLines:S.thought.totalLines||0});if(S.draft&&S.draft.text)t.current=S.draft.text,z({text:S.draft.text,totalLines:S.draft.totalLines||0})}).catch((S)=>{console.warn("Failed to fetch agent status:",S)}),D();return}if(O==="agent_status"){if(q.type==="done"||q.type==="error"){if(M&&__.current&&M!==__.current)return;if(q.type==="done"){s_(M||__.current);let{currentHashtag:S,searchQuery:p}=g_.current||{};if(!S&&!p)E0();if(q.context_usage)F_(q.context_usage)}if(y0.current=!1,U_(),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null),q.type==="error")C({type:"error",title:q.title||"Agent error"}),setTimeout(()=>C(null),8000);else C(null)}else{if(M)j_(M);if(P({running:!0,clearSilence:!0}),q.type==="thinking")t.current="",G_.current="",z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0});C(q)}return}if(O==="agent_steer_queued"){if(M&&__.current&&M!==__.current)return;let S=M||__.current;if(!S)return;n.current=S,Q_(S);return}if(O==="agent_draft_delta"){if(M&&__.current&&M!==__.current)return;if(M&&!__.current)j_(M);if(P({running:!0,clearSilence:!0}),q?.reset)t.current="";if(q?.delta)t.current+=q.delta;if(J_.current){let S=t.current;z((p)=>({text:p?.text||"",totalLines:S2(S),fullText:S}))}else{let S=t.current,p=S2(S);z({text:S,totalLines:p})}return}if(O==="agent_draft"){if(M&&__.current&&M!==__.current)return;if(M&&!__.current)j_(M);P({running:!0,clearSilence:!0});let S=q.text||"",p=q.mode||(q.kind==="plan"?"replace":"append"),W_=Number.isFinite(q.total_lines)?q.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(p==="replace")w(S);else w((A_)=>(A_||"")+S);else if(!J_.current)t.current=S,z({text:S,totalLines:W_});return}if(O==="agent_thought_delta"){if(M&&__.current&&M!==__.current)return;if(M&&!__.current)j_(M);if(P({running:!0,clearSilence:!0}),q?.reset)G_.current="";if(typeof q?.delta==="string")G_.current+=q.delta;if(V_.current){let S=G_.current;v((p)=>({text:p?.text||"",totalLines:S2(S),fullText:S}))}return}if(O==="agent_thought"){if(M&&__.current&&M!==__.current)return;if(M&&!__.current)j_(M);P({running:!0,clearSilence:!0});let S=q.text||"",p=Number.isFinite(q.total_lines)?q.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)G_.current=S,v({text:S,totalLines:p});return}if(O==="agent_request"){if(console.log("Agent request:",q),M&&__.current&&M!==__.current)return;if(M)j_(M);P({running:!0,clearSilence:!0}),r(q),H_.current=q;return}if(O==="agent_request_timeout"){if(console.log("Agent request timeout:",q),M&&__.current&&M!==__.current)return;r(null),H_.current=null,U_(),C({type:"error",title:"Permission request timed out"});return}if(O==="model_changed"){if(q?.model!==void 0)B_(q.model);if(q?.thinking_level!==void 0)S_(q.thinking_level??null);if(q?.supports_thinking!==void 0)x_(Boolean(q.supports_thinking));F1().then((S)=>{if(S)F_(S)}).catch(()=>{});return}if(O==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:f,searchQuery:u}=g_.current;if(O==="agent_response")h0(),z0.current={post:q,turnId:__.current};if(!f&&!u&&(O==="new_post"||O==="agent_response"))i_((S)=>{if(!S)return[q];if(S.some((p)=>p.id===q.id))return S;return[...S,q]}),H0.current?.();if(O==="interaction_updated")i_((S)=>S?S.map((p)=>p.id===q.id?q:p):S);if(O==="interaction_deleted"){let S=q?.ids||[];if(S.length){Q0(()=>{i_((A_)=>A_?A_.filter((o0)=>!S.includes(o0.id)):A_)});let{currentHashtag:p,searchQuery:W_}=g_.current;if(x0.current&&!p&&!W_)p0.current?.({preserveScroll:!0,preserveMode:"top"})}}},[U_,Y_,P,s_,Q0,E0,h0,j_,N_,j,U,D]);m(()=>{if(typeof window>"u")return;let O=window.__PICLAW_TEST_API||{};return O.emit=T,O.reset=()=>{h0(),U_(),C(null),z({text:"",totalLines:0}),w(""),v({text:"",totalLines:0}),r(null)},O.finalize=()=>i0(),window.__PICLAW_TEST_API=O,()=>{if(window.__PICLAW_TEST_API===O)window.__PICLAW_TEST_API=void 0}},[U_,i0,T,h0]),V4({handleSseEvent:T,handleConnectionStatusChange:g2,loadPosts:L0}),m(()=>{if(!F0||F0.length===0)return;let O=location.hash;if(!O||!O.startsWith("#msg-"))return;let q=document.getElementById(O.slice(1).replace("msg-","post-"));if(q)q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),setTimeout(()=>q.classList.remove("post-highlight"),2000),history.replaceState(null,"",location.pathname+location.search)},[F0]);let g=F!==null;m(()=>{if(_!=="connected")return;let q=setInterval(()=>{if(g)v0(),f0();else{let{currentHashtag:M,searchQuery:f}=g_.current||{};if(!M&&!f)E0();v0(),f0()}},g?15000:60000);return()=>clearInterval(q)},[_,g,v0,f0,E0]);let o=I(()=>{J0((O)=>!O)},[]);m(()=>{if(!o_)return;if(typeof window>"u")return;let O=c_.current;if(!O)return;if(!k0.current){let q=s0("editorWidth",null),M=W0.current||280;k0.current=Number.isFinite(q)?q:M}if(O.style.setProperty("--editor-width",`${k0.current}px`),!I0.current){let q=s0("dockHeight",null);I0.current=Number.isFinite(q)?q:200}O.style.setProperty("--dock-height",`${I0.current}px`)},[o_]);let l=j0.getDockPanes().length>0,[h,Z_]=x(!1),d_=I(()=>Z_((O)=>!O),[]);m(()=>{if(!l)return;let O=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),d_()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[d_,l]);let t_=Boolean(a&&a===(F?.turn_id||$_));return B`
        <div class=${`app-shell${m_?"":" workspace-collapsed"}${o_?" editor-open":""}`} ref=${c_}>
            <${Y4}
                onFileSelect=${u_}
                visible=${m_}
                active=${m_||o_}
                onOpenEditor=${d}
            />
            <button
                class=${`workspace-toggle-tab${m_?" open":" closed"}`}
                onClick=${o}
                title=${m_?"Hide workspace":"Show workspace"}
                aria-label=${m_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${f2} onTouchStart=${Q2}></div>
            ${o_&&B`
                <div class="editor-pane-container">
                    <${Z4}
                        tabs=${D_}
                        activeId=${A}
                        onActivate=${e_}
                        onClose=${C0}
                        onCloseOthers=${P0}
                        onCloseAll=${N0}
                        onTogglePin=${q0}
                        onToggleDock=${l?d_:void 0}
                        dockVisible=${l&&h}
                    />
                    <div class="editor-pane-host" ref=${G0}></div>
                    ${l&&h&&B`<div class="dock-splitter" onMouseDown=${u2} onTouchStart=${m2}></div>`}
                    ${l&&B`<div class=${`dock-panel${h?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${d_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${v2} onTouchStart=${R2}></div>
            `}
            <div class="container">
                ${X&&L4()&&B`<div class="search-results-spacer"></div>`}
                ${(J||X)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${l0}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${i3} 
                    posts=${F0}
                    hasMore=${T2}
                    onLoadMore=${m0}
                    timelineRef=${_0}
                    onHashtagClick=${c2}
                    onMessageRef=${T0}
                    onPostClick=${void 0}
                    onDeletePost=${l2}
                    emptyMessage=${J?`No posts with #${J}`:X?`No results for "${X}"`:void 0}
                    agents=${O_}
                    user=${n_}
                    reverse=${!(X&&!J)}
                    removingPostIds=${p_}
                    searchQuery=${X}
                />
                <${u3}
                    status=${F}
                    draft=${N}
                    plan=${L}
                    thought=${b}
                    pendingRequest=${R}
                    turnId=${$_}
                    steerQueued=${t_}
                    onPanelToggle=${X0}
                />
                <${B3} 
                    onPost=${()=>{L0(),a_()}}
                    onFocus=${a_}
                    searchMode=${K}
                    onSearch=${p2}
                    onEnterSearch=${h2}
                    onExitSearch=${i2}
                    fileRefs=${V}
                    onRemoveFileRef=${Z0}
                    onClearFileRefs=${A0}
                    messageRefs=${Q}
                    onRemoveMessageRef=${c0}
                    onClearMessageRefs=${H}
                    activeEditorPath=${A}
                    onAttachEditorFile=${S0}
                    activeModel=${w_}
                    thinkingLevel=${L_}
                    supportsThinking=${q_}
                    contextUsage=${E_}
                    notificationsEnabled=${M_}
                    notificationPermission=${O0}
                    onToggleNotifications=${v_}
                    onModelChange=${B_}
                    onModelStateChange=${E}
                />
                <${g3} status=${_} />
                <${m3}
                    request=${R}
                    onRespond=${()=>{r(null),H_.current=null}}
                />
            </div>
        </div>
    `}n1(B`<${M8} />`,document.getElementById("app"));

//# debugId=6BE63340E226628764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
