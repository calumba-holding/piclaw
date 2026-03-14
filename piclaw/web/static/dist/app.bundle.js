var x8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,G_,L3,b2,F3,j3,I8,p2={},E3=[],T8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $2(_,$){for(var Z in $)_[Z]=$[Z];return _}function D3(_){var $=_.parentNode;$&&$.removeChild(_)}function C3(_,$,Z){var J,X,Y,j={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:j[Y]=$[Y];if(arguments.length>2&&(j.children=arguments.length>3?l2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)j[Y]===void 0&&(j[Y]=_.defaultProps[Y]);return m2(_,j,J,X,null)}function m2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++L3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function n2(_){return _.children}function c2(_,$){this.props=_,this.context=$}function U2(_,$){if($==null)return _.__?U2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?U2(_):null}function k3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return k3(_)}}function K3(_){(!_.__d&&(_.__d=!0)&&b2.push(_)&&!i2.__r++||j3!==G_.debounceRendering)&&((j3=G_.debounceRendering)||F3)(i2)}function i2(){for(var _;i2.__r=b2.length;)_=b2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),b2=[],_.some(function($){var Z,J,X,Y,j,W;$.__d&&(j=(Y=(Z=$).__v).__e,(W=Z.__P)&&(J=[],(X=$2({},Y)).__v=Y.__v+1,H1(W,Y,X,Z.__n,W.ownerSVGElement!==void 0,Y.__h!=null?[j]:null,J,j==null?U2(Y):j,Y.__h),M3(J,Y),Y.__e!=j&&k3(Y)))})}function y3(_,$,Z,J,X,Y,j,W,N,O){var K,H,E,L,y,b,R,M=J&&J.__k||E3,U=M.length;for(Z.__k=[],K=0;K<$.length;K++)if((L=Z.__k[K]=(L=$[K])==null||typeof L=="boolean"?null:typeof L=="string"||typeof L=="number"||typeof L=="bigint"?m2(null,L,null,null,L):Array.isArray(L)?m2(n2,{children:L},null,null,null):L.__b>0?m2(L.type,L.props,L.key,null,L.__v):L)!=null){if(L.__=Z,L.__b=Z.__b+1,(E=M[K])===null||E&&L.key==E.key&&L.type===E.type)M[K]=void 0;else for(H=0;H<U;H++){if((E=M[H])&&L.key==E.key&&L.type===E.type){M[H]=void 0;break}E=null}H1(_,L,E=E||p2,X,Y,j,W,N,O),y=L.__e,(H=L.ref)&&E.ref!=H&&(R||(R=[]),E.ref&&R.push(E.ref,null,L),R.push(H,L.__c||y,L)),y!=null?(b==null&&(b=y),typeof L.type=="function"&&L.__k!=null&&L.__k===E.__k?L.__d=N=A3(L,N,_):N=b3(_,L,E,M,y,N),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=N):_.value=""):N&&E.__e==N&&N.parentNode!=_&&(N=U2(E))}for(Z.__e=b,K=U;K--;)M[K]!=null&&(typeof Z.type=="function"&&M[K].__e!=null&&M[K].__e==Z.__d&&(Z.__d=U2(J,K+1)),w3(M[K],M[K]));if(R)for(K=0;K<R.length;K++)P3(R[K],R[++K],R[++K])}function A3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?A3(X,$,Z):b3(Z,X,X,_.__k,X.__e,$));return $}function b3(_,$,Z,J,X,Y){var j,W,N;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),j=null;else{for(W=Y,N=0;(W=W.nextSibling)&&N<J.length;N+=2)if(W==X)break _;_.insertBefore(X,Y),j=Y}return j!==void 0?j:X.nextSibling}function W3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||T8.test($)?Z:Z+"px"}function g2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||W3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||W3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?N3:G3,Y):_.removeEventListener($,Y?N3:G3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(j){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function G3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function N3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function H1(_,$,Z,J,X,Y,j,W,N){var O,K,H,E,L,y,b,R,M,U,P,C=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(N=Z.__h,W=$.__e=Z.__e,$.__h=null,Y=[W]),(O=G_.__b)&&O($);try{_:if(typeof C=="function"){if(R=$.props,M=(O=C.contextType)&&J[O.__c],U=O?M?M.props.value:O.__:J,Z.__c?b=(K=$.__c=Z.__c).__=K.__E:(("prototype"in C)&&C.prototype.render?$.__c=K=new C(R,U):($.__c=K=new c2(R,U),K.constructor=C,K.render=v8),M&&M.sub(K),K.props=R,K.state||(K.state={}),K.context=U,K.__n=J,H=K.__d=!0,K.__h=[]),K.__s==null&&(K.__s=K.state),C.getDerivedStateFromProps!=null&&(K.__s==K.state&&(K.__s=$2({},K.__s)),$2(K.__s,C.getDerivedStateFromProps(R,K.__s))),E=K.props,L=K.state,H)C.getDerivedStateFromProps==null&&K.componentWillMount!=null&&K.componentWillMount(),K.componentDidMount!=null&&K.__h.push(K.componentDidMount);else{if(C.getDerivedStateFromProps==null&&R!==E&&K.componentWillReceiveProps!=null&&K.componentWillReceiveProps(R,U),!K.__e&&K.shouldComponentUpdate!=null&&K.shouldComponentUpdate(R,K.__s,U)===!1||$.__v===Z.__v){K.props=R,K.state=K.__s,$.__v!==Z.__v&&(K.__d=!1),K.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(I){I&&(I.__=$)}),K.__h.length&&j.push(K);break _}K.componentWillUpdate!=null&&K.componentWillUpdate(R,K.__s,U),K.componentDidUpdate!=null&&K.__h.push(function(){K.componentDidUpdate(E,L,y)})}K.context=U,K.props=R,K.state=K.__s,(O=G_.__r)&&O($),K.__d=!1,K.__v=$,K.__P=_,O=K.render(K.props,K.state,K.context),K.state=K.__s,K.getChildContext!=null&&(J=$2($2({},J),K.getChildContext())),H||K.getSnapshotBeforeUpdate==null||(y=K.getSnapshotBeforeUpdate(E,L)),P=O!=null&&O.type===n2&&O.key==null?O.props.children:O,y3(_,Array.isArray(P)?P:[P],$,Z,J,X,Y,j,W,N),K.base=$.__e,$.__h=null,K.__h.length&&j.push(K),b&&(K.__E=K.__=null),K.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=f8(Z.__e,$,Z,J,X,Y,j,N);(O=G_.diffed)&&O($)}catch(I){$.__v=null,(N||Y!=null)&&($.__e=W,$.__h=!!N,Y[Y.indexOf(W)]=null),G_.__e(I,$,Z)}}function M3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function f8(_,$,Z,J,X,Y,j,W){var N,O,K,H=Z.props,E=$.props,L=$.type,y=0;if(L==="svg"&&(X=!0),Y!=null){for(;y<Y.length;y++)if((N=Y[y])&&(N===_||(L?N.localName==L:N.nodeType==3))){_=N,Y[y]=null;break}}if(_==null){if(L===null)return document.createTextNode(E);_=X?document.createElementNS("http://www.w3.org/2000/svg",L):document.createElement(L,E.is&&E),Y=null,W=!1}if(L===null)H===E||W&&_.data===E||(_.data=E);else{if(Y=Y&&l2.call(_.childNodes),O=(H=Z.props||p2).dangerouslySetInnerHTML,K=E.dangerouslySetInnerHTML,!W){if(Y!=null)for(H={},y=0;y<_.attributes.length;y++)H[_.attributes[y].name]=_.attributes[y].value;(K||O)&&(K&&(O&&K.__html==O.__html||K.__html===_.innerHTML)||(_.innerHTML=K&&K.__html||""))}if(function(b,R,M,U,P){var C;for(C in M)C==="children"||C==="key"||C in R||g2(b,C,null,M[C],U);for(C in R)P&&typeof R[C]!="function"||C==="children"||C==="key"||C==="value"||C==="checked"||M[C]===R[C]||g2(b,C,R[C],M[C],U)}(_,E,H,X,W),K)$.__k=[];else if(y=$.props.children,y3(_,Array.isArray(y)?y:[y],$,Z,J,X&&L!=="foreignObject",Y,j,Y?Y[0]:Z.__k&&U2(Z,0),W),Y!=null)for(y=Y.length;y--;)Y[y]!=null&&D3(Y[y]);W||(("value"in E)&&(y=E.value)!==void 0&&(y!==_.value||L==="progress"&&!y)&&g2(_,"value",y,H.value,!1),("checked"in E)&&(y=E.checked)!==void 0&&y!==_.checked&&g2(_,"checked",y,H.checked,!1))}return _}function P3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function w3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||P3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&w3(J[X],$,typeof _.type!="function");Z||_.__e==null||D3(_.__e),_.__e=_.__d=void 0}function v8(_,$,Z){return this.constructor(_,Z)}function S3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],H1($,_=(!J&&Z||$).__k=C3(n2,null,[_]),X||p2,p2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?l2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),M3(Y,_)}l2=E3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},L3=0,c2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$2({},this.state),typeof _=="function"&&(_=_($2({},Z),this.props)),_&&$2(Z,_),_!=null&&this.__v&&($&&this.__h.push($),K3(this))},c2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),K3(this))},c2.prototype.render=n2,b2=[],F3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i2.__r=0,I8=0;var o2,k0,V3,M2=0,Q1=[],O3=G_.__b,B3=G_.__r,q3=G_.diffed,z3=G_.__c,Q3=G_.unmount;function L1(_,$){G_.__h&&G_.__h(k0,_,M2||$),M2=0;var Z=k0.__H||(k0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function u(_){return M2=1,R8(I3,_)}function R8(_,$,Z){var J=L1(o2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):I3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=k0),J.__}function c(_,$){var Z=L1(o2++,3);!G_.__s&&x3(Z.__H,$)&&(Z.__=_,Z.__H=$,k0.__H.__h.push(Z))}function F(_){return M2=5,a_(function(){return{current:_}},[])}function a_(_,$){var Z=L1(o2++,7);return x3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function S(_,$){return M2=8,a_(function(){return _},$)}function u8(){Q1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(h2),_.__H.__h.forEach(U1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),Q1=[]}G_.__b=function(_){k0=null,O3&&O3(_)},G_.__r=function(_){B3&&B3(_),o2=0;var $=(k0=_.__c).__H;$&&($.__h.forEach(h2),$.__h.forEach(U1),$.__h=[])},G_.diffed=function(_){q3&&q3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(Q1.push($)!==1&&V3===G_.requestAnimationFrame||((V3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),U3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);U3&&(J=requestAnimationFrame(X))})(u8)),k0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(h2),Z.__h=Z.__h.filter(function(J){return!J.__||U1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),z3&&z3(_,$)},G_.unmount=function(_){Q3&&Q3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(h2)}catch(Z){G_.__e(Z,$.__v)}};var U3=typeof requestAnimationFrame=="function";function h2(_){var $=k0;typeof _.__c=="function"&&_.__c(),k0=$}function U1(_){var $=k0;_.__c=_.__(),k0=$}function x3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function I3(_,$){return typeof $=="function"?$(_):$}var T3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var j=$[Y++],W=$[Y]?($[0]|=j?1:2,Z[$[Y++]]):$[++Y];j===3?J[0]=W:j===4?J[1]=Object.assign(J[1]||{},W):j===5?(J[1]=J[1]||{})[$[++Y]]=W:j===6?J[1][$[++Y]]+=W+"":j?(X=_.apply(W,T3(_,W,Z,["",null])),J.push(X),W[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(W)}return J},H3=new Map,q=function(_){var $=H3.get(this);return $||($=new Map,H3.set(this,$)),($=T3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,j="",W="",N=[0],O=function(E){Y===1&&(E||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,E,j):Y===3&&(E||j)?(N.push(3,E,j),Y=2):Y===2&&j==="..."&&E?N.push(4,E,0):Y===2&&j&&!E?N.push(5,0,!0,j):Y>=5&&((j||!E&&Y===5)&&(N.push(Y,0,j,X),Y=6),E&&(N.push(Y,E,0,X),Y=6)),j=""},K=0;K<Z.length;K++){K&&(Y===1&&O(),O(K));for(var H=0;H<Z[K].length;H++)J=Z[K][H],Y===1?J==="<"?(O(),N=[N],Y=3):j+=J:Y===4?j==="--"&&J===">"?(Y=1,j=""):j=J+j[0]:W?J===W?W="":j+=J:J==='"'||J==="'"?W=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=j,j=""):J==="/"&&(Y<5||Z[K][H+1]===">")?(O(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):j+=J),Y===3&&j==="!--"&&(Y=4,N=N[0])}return O(),N}(_)),$),arguments,[])).length>1?$:$[0]}.bind(C3);async function i_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function d2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return i_(Z)}async function f3(_,$=50,Z=0){return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function v3(_,$=50,Z=0){return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function R3(_){return i_(`/thread/${_}`)}async function u3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return i_(Z,{method:"DELETE"})}async function F1(_,$,Z=null,J=[],X=null){return i_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function g3(){return i_("/agents")}async function m3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function E1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function D1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/queue-state${$}`)}async function C1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function k1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function W2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function c3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function y1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function h3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function p3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(Z)}async function i3(_,$,Z){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function g0(_){return`/media/${_}`}function l3(_){return`/media/${_}/thumbnail`}async function P2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function n3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function o3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function r2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return i_(J)}async function d3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return i_(X)}async function r3(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function A1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),j=Y?`/workspace/upload?${Y}`:"/workspace/upload",W=await fetch(""+j,{method:"POST",body:J});if(!W.ok){let N=await W.json().catch(()=>({error:"Upload failed"})),O=Error(N.error||`HTTP ${W.status}`);throw O.status=W.status,O.code=N.code,O}return W.json()}async function s3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function a3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function t3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function e3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function s2(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function b1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function _4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function m0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function f_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function H2(_,$=!1){let Z=m0(_);if(Z===null)return $;return Z==="true"}function L2(_,$=null){let Z=m0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function d0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:j="file"}){let W=`${_}-file-pill`,N=`${_}-file-name`,O=`${_}-file-remove`,K=j==="message"?q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return q`
    <span class=${W} title=${Z||$} onClick=${X}>
      ${K}
      <span class=${N}>${$}</span>
      ${J&&q`
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
  `}var m8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function c8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${$4(Z)} / ${$4(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,j=2*Math.PI*7,W=$/100*j,N=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return q`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${N}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function $4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Z4({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:j=[],onRemoveFileRef:W,onClearFileRefs:N,messageRefs:O=[],onRemoveMessageRef:K,onClearMessageRefs:H,activeModel:E=null,modelUsage:L=null,thinkingLevel:y=null,supportsThinking:b=!1,contextUsage:R=null,notificationsEnabled:M=!1,notificationPermission:U="default",onToggleNotifications:P,onModelChange:C,onModelStateChange:I,activeEditorPath:p=null,onAttachEditorFile:l,onOpenFilePill:Y_,followupQueueItems:O_=[],onInjectQueuedFollowup:__,onRemoveQueuedFollowup:N_,onMessageResponse:M_,isAgentActive:r=!1}){let[e,d]=u(""),[i,$_]=u(""),[W_,J_]=u([]),[v_,X_]=u(!1),[B_,z_]=u([]),[H_,A_]=u(0),[L_,Q_]=u(!1),[k_,w_]=u(!1),[y_,S_]=u(!1),[b_,O0]=u([]),[m_,x_]=u(!1),K_=F(null),Q0=F(null),J0=F(null),A0=F(null),Y0=F(0),F0=200,F_=(Q)=>{let f=new Set,n=[];for(let V_ of Q||[]){if(typeof V_!=="string")continue;let D_=V_.trim();if(!D_||f.has(D_))continue;f.add(D_),n.push(D_)}return n},U0=()=>{let Q=m0("piclaw_compose_history");if(!Q)return[];try{let f=JSON.parse(Q);if(!Array.isArray(f))return[];return F_(f)}catch{return[]}},b0=(Q)=>{f_("piclaw_compose_history",JSON.stringify(Q))},t_=F(U0()),X0=F(-1),c_=F(""),x=e.trim()||W_.length>0||j.length>0||O.length>0,Z_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),E_=typeof window<"u"&&typeof Notification<"u",B0=typeof window<"u"?Boolean(window.isSecureContext):!1,g_=E_&&B0&&U!=="denied",H0=U==="granted"&&M,n_=H0?"Disable notifications":"Enable notifications",o_=E||"",d_=b&&y?` (${y})`:"",L0=d_.trim()?`${y}`:"",r0=typeof L?.hint_short==="string"?L.hint_short.trim():"",j0=[L0||null,r0||null].filter(Boolean).join(" • "),G2=[o_?`Current model: ${o_}${d_}`:null,L?.plan?`Plan: ${L.plan}`:null,r0||null,L?.primary?.reset_description||null,L?.secondary?.reset_description||null].filter(Boolean),M0=k_?"Switching model…":G2.join(" • ")||`Current model: ${o_}${d_} (tap to open model picker)`,P0=(Q)=>{if(!Q||typeof Q!=="object")return;let f=Q.model??Q.current;if(typeof I==="function")I({model:f??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(f&&typeof C==="function")C(f)},K0=(Q)=>{let f=Q||K_.current;if(!f)return;f.style.height="auto",f.style.height=`${f.scrollHeight}px`,f.style.overflowY="hidden"},c0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){Q_(!1),z_([]);return}let f=Q.toLowerCase().split(" ")[0];if(f.length<1){Q_(!1),z_([]);return}let n=m8.filter((V_)=>V_.name.startsWith(f)||V_.name.replace(/-/g,"").startsWith(f.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===f))z_(n),A_(0),Q_(!0);else Q_(!1),z_([])},w0=(Q)=>{let f=e,n=f.indexOf(" "),V_=n>=0?f.slice(n):"",D_=Q.name+V_;d(D_),Q_(!1),z_([]),requestAnimationFrame(()=>{let h_=K_.current;if(!h_)return;let q_=D_.length;h_.selectionStart=q_,h_.selectionEnd=q_,h_.focus()})},R_=(Q)=>{if(Z)$_(Q);else d(Q),c0(Q);requestAnimationFrame(()=>K0())},s0=(Q)=>{let f=Z?i:e,n=f&&!f.endsWith(`
`)?`
`:"",V_=`${f}${n}${Q}`.trimStart();R_(V_)},N2=(Q)=>{let f=Q?.command?.model_label;if(f)return f;let n=Q?.command?.message;if(typeof n==="string"){let V_=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(V_?.[1])return V_[1].trim()}return null},Y2=async(Q)=>{if(Z||k_)return;w_(!0);try{let f=await F1("default",Q,null,[]),n=N2(f);P0({model:n??E??null,thinking_level:f?.command?.thinking_level,supports_thinking:f?.command?.supports_thinking});try{let V_=await W2();if(V_)P0(V_)}catch{}return _?.(),!0}catch(f){return console.error("Failed to switch model:",f),alert("Failed to switch model: "+f.message),!1}finally{w_(!1)}},a0=async()=>{await Y2("/cycle-model")},r_=async(Q)=>{if(!Q||k_)return;if(await Y2(`/model ${Q}`))S_(!1)},E0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),S_((f)=>!f)},D0=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return r?"queue":null},I_=async(Q,f,n={})=>{let{includeMedia:V_=!0,includeFileRefs:D_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:q_=!0,recordHistory:G0=!0}=n||{},l0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:e,f0=typeof l0==="string"?l0:"";if(!f0.trim()&&(V_?W_.length===0:!0)&&(D_?j.length===0:!0)&&(h_?O.length===0:!0))return;Q_(!1),z_([]);let n0=V_?[...W_]:[],V2=D_?[...j]:[],O2=h_?[...O]:[],s_=f0.trim();if(G0&&s_){let P_=t_.current,N0=F_(P_.filter((e0)=>e0!==s_));if(N0.push(s_),N0.length>200)N0.splice(0,N0.length-200);t_.current=N0,b0(N0),X0.current=-1,c_.current=""}if(q_)d(""),J_([]),N?.(),H?.();(async()=>{try{let P_=[];for(let z0 of n0){let S0=await c3(z0);P_.push(S0.id)}let N0=V2.length?`Files:
${V2.map((z0)=>`- ${z0}`).join(`
`)}`:"",e0=O2.length?`Referenced messages:
${O2.map((z0)=>`- message:${z0}`).join(`
`)}`:"",p_=P_.length?`Images:
${P_.map((z0,S0)=>{let k2=n0[S0]?.name||`image-${S0+1}`;return`- attachment:${z0} (${k2})`}).join(`
`)}`:"",$0=[s_,N0,e0,p_].filter(Boolean).join(`

`),v0=await F1("default",$0,null,P_,D0(f));if(M_?.(v0),v0?.command){P0({model:v0.command.model_label??E??null,thinking_level:v0.command.thinking_level,supports_thinking:v0.command.supports_thinking});try{let z0=await W2();if(z0)P0(z0)}catch{}}_?.()}catch(P_){console.error("Failed to post:",P_)}})()},e_=(Q)=>{__?.(Q)},u_=(Q)=>{if(Q.isComposing)return;if(Z&&Q.key==="Escape"){Q.preventDefault(),$_(""),Y?.();return}if(L_&&B_.length>0){let f=K_.current?.value??(Z?i:e);if(!String(f||"").startsWith("/"))Q_(!1),z_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),A_((n)=>(n+1)%B_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),A_((n)=>(n-1+B_.length)%B_.length);return}if(Q.key==="Tab"){Q.preventDefault(),w0(B_[H_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(K_.current?.value??(Z?i:e)).includes(" ")){Q.preventDefault();let D_=B_[H_];Q_(!1),z_([]),I_(D_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),Q_(!1),z_([]);return}}}if(!Z&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let f=K_.current;if(!f)return;let n=f.value||"",V_=f.selectionStart===0&&f.selectionEnd===0,D_=f.selectionStart===n.length&&f.selectionEnd===n.length;if(Q.key==="ArrowUp"&&V_||Q.key==="ArrowDown"&&D_){let h_=t_.current;if(!h_.length)return;Q.preventDefault();let q_=X0.current;if(Q.key==="ArrowUp"){if(q_===-1)c_.current=n,q_=h_.length-1;else if(q_>0)q_-=1;X0.current=q_,R_(h_[q_]||"")}else{if(q_===-1)return;if(q_<h_.length-1)q_+=1,X0.current=q_,R_(h_[q_]||"");else X0.current=-1,R_(c_.current||""),c_.current=""}requestAnimationFrame(()=>{let G0=K_.current;if(!G0)return;let l0=G0.value.length;G0.selectionStart=l0,G0.selectionEnd=l0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let f=K_.current?.value??(Z?i:e);if(Z){if(f.trim())J?.(f.trim())}else I_(f,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let f=K_.current?.value??(Z?i:e);if(Z){if(f.trim())J?.(f.trim())}else I_(f)}},_0=(Q)=>{let f=Array.from(Q||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!f.length)return;J_((n)=>[...n,...f])},C0=(Q)=>{_0(Q.target.files),Q.target.value=""},I0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),Y0.current+=1,X_(!0)},h0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Y0.current=Math.max(0,Y0.current-1),Y0.current===0)X_(!1)},W0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";X_(!0)},X2=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),Y0.current=0,X_(!1),_0(Q.dataTransfer?.files||[])},T0=(Q)=>{if(Z)return;let f=Q.clipboardData?.items;if(!f||!f.length)return;let n=[];for(let V_ of f){if(V_.kind!=="file")continue;let D_=V_.getAsFile?.();if(D_)n.push(D_)}if(n.length>0)Q.preventDefault(),_0(n)},p0=(Q)=>{J_((f)=>f.filter((n,V_)=>V_!==Q))},t0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:f,longitude:n,accuracy:V_}=Q.coords,D_=`${f.toFixed(5)}, ${n.toFixed(5)}`,h_=Number.isFinite(V_)?` ±${Math.round(V_)}m`:"",q_=`https://maps.google.com/?q=${f},${n}`,G0=`Location: ${D_}${h_} ${q_}`;s0(G0)},(Q)=>{let f=Q?.message||"Unable to retrieve location.";alert(`Location error: ${f}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!y_)return;x_(!0),W2().then((Q)=>{let f=Array.isArray(Q?.models)?Q.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];O0(f),P0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),O0([])}).finally(()=>{x_(!1)})},[y_,E]),c(()=>{if(Z)S_(!1)},[Z]),c(()=>{if(!y_)return;let Q=(f)=>{let n=J0.current,V_=A0.current,D_=f.target;if(n&&n.contains(D_))return;if(V_&&V_.contains(D_))return;S_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[y_]);let i0=(Q)=>{let f=Q.target.value;K0(Q.target),R_(f)};return c(()=>{requestAnimationFrame(()=>K0())},[e,i,Z]),q`
        <div class="compose-box">
            ${!Z&&O_.length>0&&q`
                <div class="compose-queue-stack">
                    ${O_.map((Q)=>{let f=typeof Q?.content==="string"?Q.content:"";if(!f.trim())return null;return q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${f}>
                                    ${f}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>e_(Q)}
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
                                    onClick=${()=>N_?.(Q)}
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
                class=${`compose-input-wrapper${v_?" drag-active":""}`}
                onDragEnter=${I0}
                onDragOver=${W0}
                onDragLeave=${h0}
                onDrop=${X2}
            >
                <div class="compose-input-main">
                    ${(j.length>0||W_.length>0||O.length>0)&&q`
                        <div class="compose-file-refs">
                            ${O.map((Q)=>{return q`
                                    <${d0}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>K?.(Q)}
                                    />
                                `})}
                            ${j.map((Q)=>{let f=Q.split("/").pop()||Q;return q`
                                    <${d0}
                                        prefix="compose"
                                        label=${f}
                                        title=${Q}
                                        onClick=${()=>Y_?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>W?.(Q)}
                                    />
                                `})}
                            ${W_.map((Q,f)=>{let n=Q?.name||`image-${f+1}`;return q`
                                    <${d0}
                                        key=${n+f}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>p0(f)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${K_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?i:e}
                        onInput=${i0}
                        onKeyDown=${u_}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${L_&&B_.length>0&&q`
                        <div class="slash-autocomplete" ref=${Q0}>
                            ${B_.map((Q,f)=>q`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${f===H_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),w0(Q)}}
                                    onMouseEnter=${()=>A_(f)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y_&&!Z&&q`
                        <div class="compose-model-popup" ref=${J0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${m_&&q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!m_&&b_.length===0&&q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!m_&&b_.map((Q)=>q`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${E===Q?" active":""}`}
                                        onClick=${()=>{r_(Q)}}
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
                                    onClick=${()=>{a0()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&E&&q`
                    <div class="compose-meta-row">
                        ${!Z&&E&&q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${A0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${M0}
                                    aria-label="Open model picker"
                                    onClick=${E0}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":o_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&j0&&q`
                                        <span class="compose-model-usage-hint" title=${M0}>
                                            ${j0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&R&&R.percent!=null&&q`
                        <${c8} usage=${R} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${Z_&&!Z&&q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${t0}
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
                    ${g_&&!Z&&q`
                        <button
                            class=${`icon-btn notification-btn${H0?" active":""}`}
                            onClick=${P}
                            title=${n_}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&q`
                        ${p&&l&&q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${l}
                                title=${`Attach open file: ${p}`}
                                type="button"
                                disabled=${j.includes(p)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${C0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{I_()}}
                            disabled=${!x}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var Y4="piclaw_theme",S1="piclaw_tint",e2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},h8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},J4={default:{label:"Default",mode:"auto",light:e2,dark:h8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},p8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],_1={theme:"default",tint:null},X4="light",P1=!1;function j4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function F2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function i8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),j=parseInt(X[2],10),W=parseInt(X[3],10);if(![Y,j,W].every((O)=>Number.isFinite(O)))return null;let N=`#${[Y,j,W].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:j,b:W,hex:N}}function K4(_){return F2(_)||i8(_)}function w2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function w1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function W4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function x1(_){return J4[_]||J4.default}function l8(_){return _.mode==="auto"?W4():_.mode}function n8(_,$){let Z=x1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||e2}function o8(_,$,Z){let J=K4($);if(!J)return _;let X=F2(_.bgPrimary),Y=F2(_.bgSecondary),j=F2(_.bgHover),W=F2(_.borderColor);if(!X||!Y||!j||!W)return _;let O=F2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w2(X,J,0.08),bgSecondary:w2(Y,J,0.12),bgHover:w2(j,J,0.16),borderColor:w2(W,J,0.08),accent:J.hex,accentHover:O?w2(J,O,0.18):J.hex}}function d8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=K4(J),Y=X?w1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?w1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",W=X?w1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":j,"--accent-soft-strong":W,"--danger-color":_.danger||e2.danger,"--success-color":_.success||e2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([O,K])=>{if(K)Z.style.setProperty(O,K)})}function r8(){if(typeof document>"u")return;let _=document.documentElement;p8.forEach(($)=>_.style.removeProperty($))}function a2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function s8(_,$){if(typeof document>"u")return;let Z=a2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=a2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=a2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=a2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function a8(){if(typeof window>"u")return;let _={..._1,mode:X4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function I1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=j4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=x1(Z),Y=l8(X),j=n8(Z,Y);_1={theme:Z,tint:J},X4=Y;let W=document.documentElement;W.dataset.theme=Y,W.dataset.colorTheme=Z,W.dataset.tint=J?String(J):"",W.style.colorScheme=Y;let N=j;if(Z==="default"&&J)N=o8(j,J,Y);if(Z==="default"&&!J)r8();else d8(N,Y);if(s8(N.bgPrimary,Y),a8(),$.persist!==!1)if(f_(Y4,Z),J)f_(S1,J);else f_(S1,"")}function t2(){if(x1(_1.theme).mode!=="auto")return;I1(_1,{persist:!1})}function G4(){if(typeof window>"u")return()=>{};let _=j4(m0(Y4)||"default"),$=m0(S1),Z=$?$.trim():null;if(I1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!P1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",t2);else if(J.addListener)J.addListener(t2);return P1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",t2);else if(J.removeListener)J.removeListener(t2);P1=!1}}return()=>{}}function N4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;I1({theme:Z||"default",tint:J},{persist:!0})}function V4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return W4()}var $1=/#(\w+)/g,t8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),e8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),_6=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),$6={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Z6=new Set(["http:","https:","mailto:",""]);function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function E2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!Z6.has(J.protocol))return null;return J.href}catch{return null}}function B4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let j of J){let W=j.tagName.toLowerCase();if(!e8.has(W)){let O=j.parentNode;if(!O)continue;while(j.firstChild)O.insertBefore(j.firstChild,j);O.removeChild(j);continue}let N=$6[W]||new Set;for(let O of Array.from(j.attributes)){let K=O.name.toLowerCase(),H=O.value;if(K.startsWith("on")){j.removeAttribute(O.name);continue}if(K.startsWith("data-")||K.startsWith("aria-"))continue;if(N.has(K)||_6.has(K)){if(K==="href"){let E=E2(H);if(!E)j.removeAttribute(O.name);else if(j.setAttribute(O.name,E),W==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(K==="src"){let E=W==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(H):H,L=E2(E,{allowDataImage:W==="img"});if(!L)j.removeAttribute(O.name);else j.setAttribute(O.name,L)}continue}j.removeAttribute(O.name)}}return Z.body.innerHTML}function q4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z1(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=q4(Z);if(X===Z)break;Z=X}return Z}function J6(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,j=[];for(let W of Z){if(!Y&&W.trim().match(/^```mermaid\s*$/i)){Y=!0,j=[];continue}if(Y&&W.trim().match(/^```\s*$/)){let N=J.length;J.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,j=[];continue}if(Y)j.push(W);else X.push(W)}if(Y)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:J}}function Y6(_){if(!_)return _;return Z1(_,5)}function X6(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function j6(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function K6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",j=Y6(Y);return`<div class="mermaid-container" data-mermaid="${X6(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function z4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function Q4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,N=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!N||!t8.has(N))return $;if(N==="br")return X?"":"<br>";if(X)return`</${N}>`;return`<${N}>`})}function U4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function H4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function W6(_){if(!window.katex)return _;let $=(j)=>q4(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(j)=>{let W=[],N=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let K=W.length;return W.push(O),`@@CODE_BLOCK_${K}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let K=W.length;return W.push(O),`@@CODE_INLINE_${K}@@`}),{html:N,blocks:W}},J=(j,W)=>{if(!W.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,O)=>{let K=Number(O);return W[K]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,W,N)=>{try{let O=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${W}${O}`}catch(O){return`<span class="math-error" title="${O4(O.message)}">${j}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,W,N)=>{if(/\s$/.test(N))return j;try{let O=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${W}${O}`}catch(O){return`${W}<span class="math-error" title="${O4(O.message)}">$${N}$</span>`}}),J(Y,X.blocks)}function G6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let j=Y.nodeValue;if(!j)continue;if($1.lastIndex=0,!$1.test(j))continue;$1.lastIndex=0;let W=Y.parentElement;if(W&&(W.closest("a")||W.closest("code")||W.closest("pre")))continue;let N=j.split($1);if(N.length<=1)continue;let O=$.createDocumentFragment();N.forEach((K,H)=>{if(H%2===1){let E=$.createElement("a");E.setAttribute("href","#"),E.className="hashtag",E.setAttribute("data-hashtag",K),E.textContent=`#${K}`,O.appendChild(E)}else O.appendChild($.createTextNode(K))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function N6(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function Z2(_,$,Z={}){if(!_)return"";let J=N6(_),{text:X,blocks:Y}=J6(J),j=Z1(X,2),N=z4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=Q4(N),K=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return K=U4(K),K=H4(K),K=W6(K),K=G6(K),K=K6(K,Y),K=B4(K,Z),K}function L4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=Z1($,2),X=z4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Q4(X),j=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return j=U4(j),j=H4(j),j=B4(j),j}async function D2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=V4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Y)try{let W=j.dataset.mermaid,N=j6(W||""),O=Z1(N,2),K=await $(O,{...X,transparent:!0});j.innerHTML=K,j.removeAttribute("data-mermaid")}catch(W){console.error("Mermaid render error:",W);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${W.message}`,j.innerHTML="",j.appendChild(N),j.removeAttribute("data-mermaid")}}var F4="PiClaw";function T1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,j=X[Y],W=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",K=(N?N:null)||(W==="PiClaw".toLowerCase()||W==="pi"?"/static/icon-192.png":null);return{letter:J,color:j,image:K}}function E4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function D4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function C4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,j=Y?.dataset?.colorTheme||"",W=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(W||j&&j!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function k4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:j,steerQueued:W,onPanelToggle:N}){let H=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let A_=X_,L_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:L_,fullText:A_}}let B_=X_.text||"",z_=X_.fullText||X_.full_text||B_,H_=Number.isFinite(X_.totalLines)?X_.totalLines:z_?z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B_,totalLines:H_,fullText:z_}},E=160,L=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},y=(X_,B_,z_)=>{let H_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(z_)?z_:0,visibleLines:0};let A_=H_.split(`
`),L_=A_.length>B_?A_.slice(0,B_).join(`
`):H_,Q_=Number.isFinite(z_)?z_:A_.reduce((y_,S_)=>y_+L(S_),0),k_=L_?L_.split(`
`).reduce((y_,S_)=>y_+L(S_),0):0,w_=Math.max(Q_-k_,0);return{text:L_,omitted:w_,totalLines:Q_,visibleLines:k_}},b=H(Z),R=H(J),M=H($),U=Boolean(b.text)||b.totalLines>0,P=Boolean(R.text)||R.totalLines>0,C=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!C&&!U&&!P&&!X&&!Y)return null;let[I,p]=u(new Set),l=(X_)=>p((B_)=>{let z_=new Set(B_),H_=!z_.has(X_);if(H_)z_.add(X_);else z_.delete(X_);if(typeof N==="function")N(X_,H_);return z_});c(()=>{p(new Set)},[j]);let Y_=_?.turn_id||j,O_=C4(Y_),__=W?"turn-dot turn-dot-queued":"turn-dot",N_=(X_)=>X_,M_=Boolean(_?.last_activity||_?.lastActivity),r=Y?.kind||"info",e=r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":O_,d="",i=_?.title,$_=_?.status;if(_?.type==="plan")d=i?`Planning: ${i}`:"Planning...";else if(_?.type==="tool_call")d=i?`Running: ${i}`:"Running tool...";else if(_?.type==="tool_status")d=i?`${i}: ${$_||"Working..."}`:$_||"Working...";else if(_?.type==="error")d=i||"Agent error";else d=i||$_||"Working...";if(M_)d="Last activity just now";let W_=({panelTitle:X_,text:B_,fullText:z_,totalLines:H_,maxLines:A_,titleClass:L_,panelKey:Q_})=>{let k_=I.has(Q_),w_=z_||B_||"",y_=typeof A_==="number",S_=k_&&y_,b_=y_?y(w_,A_,H_):{text:w_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!w_&&!(Number.isFinite(b_.totalLines)&&b_.totalLines>0))return null;let O0=`agent-thinking-body${y_?" agent-thinking-body-collapsible":""}`,m_=y_?`--agent-thinking-collapsed-lines: ${A_};`:"";return q`
            <div
                class="agent-thinking"
                data-expanded=${k_?"true":"false"}
                data-collapsible=${y_?"true":"false"}
                style=${O_?`--turn-color: ${O_};`:""}
            >
                <div class="agent-thinking-title ${L_||""}">
                    ${O_&&q`<span class=${__} aria-hidden="true"></span>`}
                    ${X_}
                    ${S_&&q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>l(Q_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${O0}
                    style=${m_}
                    dangerouslySetInnerHTML=${{__html:L4(w_)}}
                />
                ${!k_&&b_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▸ ${b_.omitted} more lines
                    </button>
                `}
                ${k_&&b_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(Q_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=X?.tool_call?.title,v_=J_?`Awaiting approval: ${J_}`:"Awaiting approval";return q`
        <div class="agent-status-panel">
            ${Y&&q`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${e?`--turn-color: ${e};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${e&&q`<span class=${__} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&q`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    <span class=${__} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${v_}</span>
                </div>
            `}
            ${U&&W_({panelTitle:N_("Planning"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,panelKey:"plan"})}
            ${P&&W_({panelTitle:N_("Thoughts"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&W_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&q`
                <div class=${`agent-status${M_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    ${O_&&q`<span class=${__} aria-hidden="true"></span>`}
                    ${_?.type==="error"?q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!M_&&q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d}</span>
                </div>
            `}
        </div>
    `}function y4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",j=J?.kind||"other",W=J?.rawInput||{},N=W.command||W.commands&&W.commands[0]||null,O=W.diff||null,K=W.fileName||W.path||null,H=J?.description||W.description||W.explanation||null,L=(Array.isArray(J?.locations)?J.locations:[]).map((U)=>U?.path).filter((U)=>Boolean(U)),y=Array.from(new Set([K,...L].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let b=async(U)=>{try{await y1(Z,U),$()}catch(P){console.error("Failed to respond to agent request:",P)}},R=async()=>{try{await h3(Y,`Auto-approved: ${Y}`),await y1(Z,"approved"),$()}catch(U){console.error("Failed to add to whitelist:",U)}},M=X&&X.length>0;return q`
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
                ${(H||N||O||y.length>0)&&q`
                    <div class="agent-request-body">
                        ${H&&q`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${y.length>0&&q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${y.map((U,P)=>q`<li key=${P}>${U}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&q`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${O&&q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?X.map((U)=>q`
                            <button 
                                key=${U.optionId||U.id||String(U)}
                                class="agent-request-btn ${U.kind==="allow_once"||U.kind==="allow_always"?"primary":""}"
                                onClick=${()=>b(U.optionId||U.id||U)}
                            >
                                ${U.name||U.label||U.optionId||U.id||String(U)}
                            </button>
                        `):q`
                        <button class="agent-request-btn primary" onClick=${()=>b("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>b("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${R}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function A4({status:_}){if(_==="connected")return null;return q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function b4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${O}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${W}`}function S2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function C2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var V6=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),O6=new Set(["text/markdown"]);function x2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(V6.has($)||$.startsWith("text/"))return"text";return"unsupported"}function M4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return O6.has($)}function P4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function B6(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y0($):null},{label:"Added",value:_?.created_at?C2(_.created_at):null}].filter((J)=>J.value)}function w4({mediaId:_,info:$,onClose:Z}){let J=$?.filename||`attachment-${_}`,X=a_(()=>x2($?.content_type),[$?.content_type]),Y=P4(X),j=a_(()=>M4($?.content_type),[$?.content_type]),[W,N]=u(X==="text"||X==="pdf"),[O,K]=u(""),[H,E]=u(null),[L,y]=u(null),b=F(null),R=a_(()=>B6($),[$]),M=a_(()=>{if(!j||!O)return"";return Z2(O)},[j,O]);return c(()=>{let U=(P)=>{if(P.key==="Escape")Z()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[Z]),c(()=>{if(!b.current||!M)return;D2(b.current);return},[M]),c(()=>{let U=!1,P=null;async function C(){if(X==="text"){N(!0),y(null);try{let I=await n3(_);if(!U)K(I)}catch{if(!U)y("Failed to load text preview.")}finally{if(!U)N(!1)}return}if(X==="pdf"){N(!0),y(null);try{let I=await o3(_);if(P=URL.createObjectURL(I),!U)E(P)}catch{if(!U)y("Failed to load PDF preview.")}finally{if(!U)N(!1)}return}N(!1)}return C(),()=>{if(U=!0,P)URL.revokeObjectURL(P)}},[_,X]),q`
        <div class="image-modal attachment-preview-modal" onClick=${Z}>
            <div class="attachment-preview-shell" onClick=${(U)=>{U.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${J}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${g0(_)}
                            download=${J}
                            class="attachment-preview-download"
                            onClick=${(U)=>U.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${Z}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${W&&q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!W&&L&&q`<div class="attachment-preview-state">${L}</div>`}
                    ${!W&&!L&&X==="image"&&q`
                        <img class="attachment-preview-image" src=${g0(_)} alt=${J} />
                    `}
                    ${!W&&!L&&X==="pdf"&&H&&q`
                        <iframe class="attachment-preview-frame" src=${H} title=${J}></iframe>
                    `}
                    ${!W&&!L&&X==="text"&&j&&q`
                        <div
                            ref=${b}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:M}}
                        />
                    `}
                    ${!W&&!L&&X==="text"&&!j&&q`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!W&&!L&&X==="unsupported"&&q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((U)=>q`
                        <div class="attachment-preview-meta-item" key=${U.label}>
                            <span class="attachment-preview-meta-label">${U.label}</span>
                            <span class="attachment-preview-meta-value">${U.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function S4({src:_,onClose:$}){return c(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function q6({mediaId:_,onPreview:$}){let[Z,J]=u(null);if(c(()=>{P2(_).then(J).catch(()=>{})},[_]),!Z)return null;let X=Z.filename||"file",Y=Z.metadata?.size,j=Y?y0(Y):"",N=x2(Z.content_type)==="unsupported"?"Details":"Preview";return q`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${g0(_)} download=${X} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${X}</span>
                    <span class="file-meta-row">
                        ${j&&q`<span class="file-size">${j}</span>`}
                        ${Z.content_type&&q`<span class="file-size">${Z.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:Z})}}
            >
                ${N}
            </button>
        </div>
    `}function z6({attachment:_,onPreview:$}){let Z=Number(_?.id),[J,X]=u(null);c(()=>{if(!Number.isFinite(Z))return;P2(Z).then(X).catch(()=>{});return},[Z]);let Y=J?.filename||_.label||`attachment-${_.id}`,j=Number.isFinite(Z)?g0(Z):null,N=x2(J?.content_type)==="unsupported"?"Details":"Preview";return q`
        <span class="attachment-pill" title=${Y}>
            ${j?q`
                    <a href=${j} download=${Y} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${d0}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:q`
                    <${d0}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(Z)&&J&&q`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:Z,info:J})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function J1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?C2(J):null;return q`
        <div class="content-annotations">
            ${$&&$.length>0&&q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&q`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&q`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function Q6({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?y0(_.size):"",X=_.mime_type||"",Y=H6(X),j=E2(_.uri);return q`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(W)=>W.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&q`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&q`<span>${X}</span>`}
                    ${J&&q`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function U6({block:_}){let[$,Z]=u(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),j=_.mime_type||"";return q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&q`
                ${X&&q`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&q`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(W)=>{W.preventDefault(),W.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(H)=>H.charCodeAt(0))],{type:j||"application/octet-stream"}),O=URL.createObjectURL(N),K=document.createElement("a");K.href=O,K.download=J.split("/").pop()||"resource",K.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function H6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function L6({preview:_}){let $=E2(_.url),Z=E2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return q`
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
                ${_.description&&q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function F6(_,$){return typeof _==="string"?_:""}var E6=1800,D6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,C6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,k6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function y6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function A6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,j)=>{let W=j||"idle";if(Y.dataset.copyState=W,W==="success")Y.innerHTML=C6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(W==="error")Y.innerHTML=k6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=D6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let j=document.createElement("div");j.className="post-code-block",Y.parentNode?.insertBefore(j,Y),j.appendChild(Y);let W=document.createElement("button");W.type="button",W.className="post-code-copy-btn",X(W,"idle"),j.appendChild(W);let N=async(O)=>{O.preventDefault(),O.stopPropagation();let H=Y.querySelector("code")?.textContent||"",E=await y6(H);X(W,E?"success":"error");let L=Z.get(W);if(L)clearTimeout(L);let y=setTimeout(()=>{X(W,"idle"),Z.delete(W)},E6);Z.set(W,y)};W.addEventListener("click",N),J.push(()=>{W.removeEventListener("click",N);let O=Z.get(W);if(O)clearTimeout(O);if(j.parentNode)j.parentNode.insertBefore(Y,j),j.remove()})}),()=>{J.forEach((Y)=>Y())}}function b6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=Z.slice(0,J),W=Z.slice(Y),N=[...j,...W].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:X}}function M6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let H=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H)X.push(H[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=Z.slice(0,J),W=Z.slice(Y),N=[...j,...W].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:X}}function P6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let K=O.replace(/^\s*-\s+/,"").trim(),H=K.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||K.match(/^attachment:([^\s]+)\s+(.+)$/i);if(H){let E=H[1],L=(H[2]||"").trim()||E;X.push({id:E,label:L,raw:K})}else X.push({id:null,label:K,raw:K})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=Z.slice(0,J),W=Z.slice(Y),N=[...j,...W].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:X}}function w6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(w6).sort((K,H)=>H.length-K.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),W=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),N=[],O;while(O=W.nextNode())N.push(O);for(let K of N){let H=K.nodeValue;if(!H||!X.test(H)){X.lastIndex=0;continue}X.lastIndex=0;let E=K.parentElement;if(E&&E.closest("code, pre, script, style"))continue;let L=H.split(X).filter((b)=>b!=="");if(L.length===0)continue;let y=j.createDocumentFragment();for(let b of L)if(Y.test(b)){let R=j.createElement("mark");R.className="search-highlight-term",R.textContent=b,y.appendChild(R)}else y.appendChild(j.createTextNode(b));K.parentNode.replaceChild(y,K)}return j.body.innerHTML}function x4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:j,userName:W,userAvatarUrl:N,userAvatarBackground:O,onDelete:K,isThreadReply:H,isThreadPrev:E,isThreadNext:L,isRemoving:y,highlightQuery:b,onFileRef:R}){let[M,U]=u(null),P=F(null),C=_.data,I=C.type==="agent_response",p=W||"You",l=I?Y||F4:p,Y_=I?T1(Y,j):T1(p,N),O_=typeof O==="string"?O.trim().toLowerCase():"",__=!I&&Y_.image&&(O_==="clear"||O_==="transparent"),N_=I&&Boolean(Y_.image),M_=`background-color: ${__||N_?"transparent":Y_.color}`,r=C.content_meta,e=Boolean(r?.truncated),d=Boolean(r?.preview),i=e&&!d,$_=e?{originalLength:Number.isFinite(r?.original_length)?r.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,W_=F6(C.content,C.link_previews),{content:J_,fileRefs:v_}=b6(W_),{content:X_,messageRefs:B_}=M6(J_),{content:z_,attachments:H_}=P6(X_);W_=z_;let A_=Boolean(W_)&&!i,L_=typeof b==="string"?b.trim():"",Q_=a_(()=>{if(!W_)return"";let x=Z2(W_,Z);return L_?S6(x,L_):x},[W_,L_]),k_=(x,Z_)=>{x.stopPropagation(),U(g0(Z_))},[w_,y_]=u(null),S_=(x)=>{y_(x)},b_=(x)=>{x.stopPropagation(),K?.(_)},O0=(x,Z_)=>{let E_=new Set;if(!x||Z_.length===0)return{content:x,usedIds:E_};return{content:x.replace(/attachment:([^\s)"']+)/g,(q0,g_,H0,n_)=>{let o_=g_.replace(/^\/+/,""),L0=Z_.find((j0)=>j0.name&&j0.name.toLowerCase()===o_.toLowerCase()&&!E_.has(j0.id))||Z_.find((j0)=>!E_.has(j0.id));if(!L0)return q0;if(E_.add(L0.id),n_.slice(Math.max(0,H0-2),H0)==="](")return`/media/${L0.id}`;return L0.name||"attachment"}),usedIds:E_}},m_=[],x_=[],K_=[],Q0=[],J0=[],A0=[],Y0=C.content_blocks||[],F0=C.media_ids||[],F_=0;if(Y0.length>0)Y0.forEach((x)=>{if(x?.type==="text"&&x.annotations)A0.push(x.annotations);if(x?.type==="resource_link")Q0.push(x);else if(x?.type==="resource")J0.push(x);else if(x?.type==="file"){let Z_=F0[F_++];if(Z_)x_.push(Z_),K_.push({id:Z_,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let Z_=F0[F_++];if(Z_){let E_=typeof x?.mime_type==="string"?x.mime_type:void 0;m_.push({id:Z_,annotations:x?.annotations,mimeType:E_}),K_.push({id:Z_,name:x?.name||x?.filename||x?.title})}}});else if(F0.length>0)F0.forEach((x)=>{m_.push({id:x,annotations:null}),K_.push({id:x,name:null})});if(H_.length>0)H_.forEach((x)=>{if(!x?.id)return;let Z_=K_.find((E_)=>String(E_.id)===String(x.id));if(Z_&&!Z_.name)Z_.name=x.label});let{content:U0,usedIds:b0}=O0(W_,K_);W_=U0;let t_=m_.filter(({id:x})=>!b0.has(x)),X0=x_.filter((x)=>!b0.has(x)),c_=H_.length>0?H_.map((x,Z_)=>({id:x.id||`attachment-${Z_+1}`,label:x.label||`attachment-${Z_+1}`})):K_.map((x,Z_)=>({id:x.id,label:x.name||`attachment-${Z_+1}`}));return c(()=>{if(!P.current)return;return D2(P.current),A6(P.current)},[Q_]),q`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${H?"thread-reply":""} ${E?"thread-prev":""} ${L?"thread-next":""} ${y?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${Y_.image?"has-image":""}" style=${M_}>
                ${Y_.image?q`<img src=${Y_.image} alt=${l} />`:Y_.letter}
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
                    <span class="post-author">${l}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),J)J(_.id)}}>${b4(_.timestamp)}</a>
                </div>
                ${i&&$_&&q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${S2($_.originalLength)} chars
                            ${$_.maxLength?q` • Display limit: ${S2($_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&$_&&q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${S2($_.maxLength)} of ${S2($_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(v_.length>0||B_.length>0||c_.length>0)&&q`
                    <div class="post-file-refs">
                        ${B_.map((x)=>{let Z_=(E_)=>{if(E_.preventDefault(),E_.stopPropagation(),X)X(x);else{let B0=document.getElementById("post-"+x);if(B0)B0.scrollIntoView({behavior:"smooth",block:"center"}),B0.classList.add("post-highlight"),setTimeout(()=>B0.classList.remove("post-highlight"),2000)}};return q`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${Z_}>
                                    <${d0}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${Z_}
                                    />
                                </a>
                            `})}
                        ${v_.map((x)=>{let Z_=x.split("/").pop()||x;return q`
                                <${d0}
                                    prefix="post"
                                    label=${Z_}
                                    title=${x}
                                    onClick=${()=>R?.(x)}
                                />
                            `})}
                        ${c_.map((x)=>q`
                            <${z6}
                                key=${x.id}
                                attachment=${x}
                                onPreview=${S_}
                            />
                        `)}
                    </div>
                `}
                ${A_&&q`
                    <div 
                        ref=${P}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Q_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let Z_=x.target.dataset.hashtag;if(Z_)Z?.(Z_)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),U(x.target.src)}}
                    />
                `}
                ${A0.length>0&&q`
                    ${A0.map((x,Z_)=>q`
                        <${J1} key=${Z_} annotations=${x} />
                    `)}
                `}
                ${t_.length>0&&q`
                    <div class="media-preview">
                        ${t_.map(({id:x,mimeType:Z_})=>{let B0=typeof Z_==="string"&&Z_.toLowerCase().startsWith("image/svg")?g0(x):l3(x);return q`
                                <img 
                                    key=${x} 
                                    src=${B0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(q0)=>k_(q0,x)}
                                />
                            `})}
                    </div>
                `}
                ${t_.length>0&&q`
                    ${t_.map(({annotations:x},Z_)=>q`
                        ${x&&q`<${J1} key=${Z_} annotations=${x} />`}
                    `)}
                `}
                ${X0.length>0&&q`
                    <div class="file-attachments">
                        ${X0.map((x)=>q`
                            <${q6} key=${x} mediaId=${x} onPreview=${S_} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&q`
                    <div class="resource-links">
                        ${Q0.map((x,Z_)=>q`
                            <div key=${Z_}>
                                <${Q6} block=${x} />
                                <${J1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J0.length>0&&q`
                    <div class="resource-embeds">
                        ${J0.map((x,Z_)=>q`
                            <div key=${Z_}>
                                <${U6} block=${x} />
                                <${J1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&q`
                    <div class="link-previews">
                        ${C.link_previews.map((x,Z_)=>q`
                            <${L6} key=${Z_} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${M&&q`<${S4} src=${M} onClose=${()=>U(null)} />`}
        ${w_&&q`
            <${w4}
                mediaId=${w_.mediaId}
                info=${w_.info}
                onClose=${()=>y_(null)}
            />
        `}
    `}function I4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:j,onFileRef:W,emptyMessage:N,timelineRef:O,agents:K,user:H,onDeletePost:E,reverse:L=!0,removingPostIds:y,searchQuery:b}){let[R,M]=u(!1),U=F(null),P=typeof IntersectionObserver<"u",C=S(async()=>{if(!Z||!$||R)return;M(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{M(!1)}},[$,R,Z]),I=S((r)=>{let{scrollTop:e,scrollHeight:d,clientHeight:i}=r.target,$_=L?d-i-e:e,W_=Math.max(300,i);if($_<W_)C()},[L,C]);c(()=>{if(!P)return;let r=U.current,e=O?.current;if(!r||!e)return;let d=300,i=new IntersectionObserver(($_)=>{for(let W_ of $_){if(!W_.isIntersecting)continue;C()}},{root:e,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return i.observe(r),()=>i.disconnect()},[P,$,Z,O,C]);let p=F(C);if(p.current=C,c(()=>{if(P)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=L?e-d-r:r,$_=Math.max(300,d);if(i<$_)p.current?.()},[P,_,$,L,O]),c(()=>{if(!O?.current)return;if(!$||R)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=L?e-d-r:r,$_=Math.max(300,d);if(e<=d+1||i<$_)p.current?.()},[_,$,R,L,O]),!_)return q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return q`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let l=_.slice().sort((r,e)=>r.id-e.id),Y_=(r)=>{let e=r?.data?.thread_id;if(e===null||e===void 0||e==="")return null;let d=Number(e);return Number.isFinite(d)?d:null},O_=new Map;for(let r=0;r<l.length;r+=1){let e=l[r],d=Number(e?.id),i=Y_(e);if(i!==null){let $_=O_.get(i)||{anchorIndex:-1,replyIndexes:[]};$_.replyIndexes.push(r),O_.set(i,$_)}else if(Number.isFinite(d)){let $_=O_.get(d)||{anchorIndex:-1,replyIndexes:[]};$_.anchorIndex=r,O_.set(d,$_)}}let __=new Map;for(let[r,e]of O_.entries()){let d=new Set;if(e.anchorIndex>=0)d.add(e.anchorIndex);for(let i of e.replyIndexes)d.add(i);__.set(r,Array.from(d).sort((i,$_)=>i-$_))}let N_=l.map((r,e)=>{let d=Y_(r);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=__.get(d);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.indexOf(e);if($_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:$_>0,hasThreadNext:$_<i.length-1}}),M_=q`<div class="timeline-sentinel" ref=${U}></div>`;return q`
        <div class="timeline ${L?"reverse":"normal"}" ref=${O} onScroll=${I}>
            <div class="timeline-content">
                ${L?M_:null}
                ${l.map((r,e)=>{let d=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),i=y?.has?.(r.id),$_=N_[e]||{};return q`
                    <${x4}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${d}
                        isThreadPrev=${$_.hasThreadPrev}
                        isThreadNext=${$_.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${b}
                        agentName=${E4(r.data?.agent_id,K||{})}
                        agentAvatarUrl=${D4(r.data?.agent_id,K||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>J?.(r)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${j}
                        onFileRef=${W}
                        onDelete=${E}
                    />
                `})}
                ${L?null:M_}
            </div>
        </div>
    `}class T4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l_=new T4;var Y1=null,f1=null;function f4(){if(f1)return Promise.resolve(f1);if(!Y1)Y1=import("/static/dist/editor.bundle.js").then((_)=>{return f1=_,_}).catch((_)=>{throw Y1=null,_});return Y1}class v4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await f4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var v1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new v4(_,$)}};function R1(){f4().catch(()=>{})}class R4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var u1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new R4(_,$)}};function J2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function x6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",j=J?.[3]||"",W=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${W?`${W}/`:""}${X}`,K=[];for(let E of O.split("/")){if(!E||E===".")continue;if(E===".."){if(K.length>0)K.pop();continue}K.push(E)}let H=K.join("/");return`${b1(H)}${Y}${j}`}function I2(_){return _?.preview||null}function I6(_){let $=String(_||""),Z=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),J=Z>=0?$.slice(Z+1):$,X=J.lastIndexOf(".");if(X<=0||X===J.length-1)return"none";return J.slice(X+1)}function T6(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function f6(_,$){let Z=$?.path||_?.path||"",J=[];if($?.content_type)J.push(`<span><strong>type:</strong> ${J2($.content_type)}</span>`);if(typeof $?.size==="number")J.push(`<span><strong>size:</strong> ${J2(y0($.size))}</span>`);if($?.mtime)J.push(`<span><strong>modified:</strong> ${J2(C2($.mtime))}</span>`);if(J.push(`<span><strong>kind:</strong> ${J2(T6($))}</span>`),J.push(`<span><strong>extension:</strong> ${J2(I6(Z))}</span>`),Z)J.push(`<span><strong>path:</strong> ${J2(Z)}</span>`);if($?.truncated)J.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${J.join("")}</div>`}function v6(_){let $=I2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let Z=f6(_,$);if($.kind==="image"){let J=$.url||($.path?b1($.path):"");return`${Z}
            <div class="workspace-preview-image">
                <img src="${J2(J)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let J=Z2($.text||"",null,{rewriteImageSrc:(X)=>x6(X,$.path||_?.path)});return`${Z}<div class="workspace-preview-text">${J}</div>`}return`${Z}<pre class="workspace-preview-text"><code>${J2($.text||"")}</code></pre>`}if($.kind==="binary")return`${Z}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${Z}<div class="workspace-preview-text">No preview available.</div>`}class g1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=v6(this.context)}getContent(){let _=I2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=I2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var m1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=I2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new g1(_,$)}},c1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return I2(_)||_?.path?1:!1},mount(_,$){return new g1(_,$)}};class u4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var C_=new u4;var X1="workspaceExplorerScale",R6=["compact","default","comfortable"],u6=new Set(R6),g6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function g4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return u6.has(Z)?Z:$}function h1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function m6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function c6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function p1(_={}){let $=m6(_),Z=_.stored?g4(_.stored,$):$;return c6(Z,_)}function m4(_){return g6[g4(_)]}var h6=60000,i4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function l4(_,$,Z,J=0,X=[]){if(!Z&&i4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)l4(Y,$,Z,J+1,X);return X}function c4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&i4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let j of Y.children)X(j)};return X(_),J.join("|")}function o1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((W)=>[W?.path,W])):new Map,Y=!Z||Z.length!==J.length,j=J.map((W)=>{let N=o1(X.get(W.path),W);if(N!==X.get(W.path))Y=!0;return N});return Y?{...$,children:j}:_}function l1(_,$,Z){if(!_)return _;if(_.path===$)return o1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let j=l1(Y,$,Z);if(j!==Y)J=!0;return j});return J?{..._,children:X}:_}var n4=4,i1=14,p6=8,i6=16;function o4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=o4(J);return _.__bytes=Z,Z}function d4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=n4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let W of X){let N=Math.max(0,Number(W?.__bytes??W?.size??0));if(N<=0)continue;if(W.type==="dir")Y.push({kind:"dir",node:W,size:N});else Y.push({kind:"file",name:W.name,path:W.path,size:N})}Y.sort((W,N)=>N.size-W.size);let j=Y;if(Y.length>i1){let W=Y.slice(0,i1-1),N=Y.slice(i1-1),O=N.reduce((K,H)=>K+H.size,0);W.push({kind:"other",name:`+${N.length} more`,path:`${J.path}/[other]`,size:O}),j=W}return J.children=j.map((W)=>{if(W.kind==="dir")return d4(W.node,$+1);return{name:W.name,path:W.path,size:W.size,children:[]}}),J}function h4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function r4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function j1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function d1(_,$,Z,J,X,Y){let j=Math.PI*2-0.0001,W=Y-X>j?X+j:Y,N=j1(_,$,J,X),O=j1(_,$,J,W),K=j1(_,$,Z,W),H=j1(_,$,Z,X),E=W-X>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${J} ${J} 0 ${E} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${E} 0 ${H.x.toFixed(3)} ${H.y.toFixed(3)}`,"Z"].join(" ")}var s4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function a4(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),j=(W,N,O,K)=>{let H=Array.isArray(W?.children)?W.children:[];if(!H.length)return;let E=Math.max(0,Number(W.size)||0);if(E<=0)return;let L=O-N,y=N;H.forEach((b,R)=>{let M=Math.max(0,Number(b.size)||0);if(M<=0)return;let U=M/E,P=y,C=R===H.length-1?O:y+L*U;if(y=C,C-P<0.003)return;let I=s4[K];if(I){let p=r4(P,K,Z);if(J.push({key:b.path,path:b.path,label:b.name,size:M,color:p,depth:K,startAngle:P,endAngle:C,innerRadius:I[0],outerRadius:I[1],d:d1(120,120,I[0],I[1],P,C)}),K===1)X.push({key:b.path,name:b.name,size:M,pct:Y>0?M/Y*100:0,color:p})}if(K<n4)j(b,P,C,K+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function n1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=n1(J,$);if(X)return X}return null}function t4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=s4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,j=Math.PI*3/2,W=r4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:W,depth:1,startAngle:Y,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:d1(120,120,X[0],X[1],Y,j)}],legend:[{key:O,name:_,size:Z,pct:100,color:W}]}}function p4(_,$=!1,Z=!1){if(!_)return null;let J=o4(_),X=d4(_,0),Y=X.size||J,{segments:j,legend:W}=a4(X,Y,Z);if(!j.length&&Y>0){let N=t4("[files]",X.path,Y,Z);j=N.segments,W=N.legend}return{root:X,totalSize:Y,segments:j,legend:W,truncated:$,isDarkTheme:Z}}function l6({payload:_}){if(!_)return null;let[$,Z]=u(null),[J,X]=u(_?.root?.path||"."),[Y,j]=u(()=>[_?.root?.path||"."]),[W,N]=u(!1);c(()=>{let __=_?.root?.path||".";X(__),j([__]),Z(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!J)return;N(!0);let __=setTimeout(()=>N(!1),180);return()=>clearTimeout(__)},[J]);let O=a_(()=>{return n1(_.root,J)||_.root},[_?.root,J]),K=O?.size||_.totalSize||0,{segments:H,legend:E}=a_(()=>{let __=a4(O,K,_.isDarkTheme);if(__.segments.length>0)return __;if(K<=0)return __;let N_=O?.children?.length?"Total":"[files]";return t4(N_,O?.path||_?.root?.path||".",K,_.isDarkTheme)},[O,K,_.isDarkTheme,_?.root?.path]),[L,y]=u(H),b=F(new Map),R=F(0);c(()=>{let __=b.current,N_=new Map(H.map((d)=>[d.key,d])),M_=performance.now(),r=220,e=(d)=>{let i=Math.min(1,(d-M_)/220),$_=i*(2-i),W_=H.map((J_)=>{let X_=__.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},B_=(Q_,k_)=>Q_+(k_-Q_)*$_,z_=B_(X_.startAngle,J_.startAngle),H_=B_(X_.endAngle,J_.endAngle),A_=B_(X_.innerRadius,J_.innerRadius),L_=B_(X_.outerRadius,J_.outerRadius);return{...J_,d:d1(120,120,A_,L_,z_,H_)}});if(y(W_),i<1)R.current=requestAnimationFrame(e)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(e),b.current=N_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[H]);let M=L.length?L:H,U=K>0?y0(K):"0 B",P=O?.name||"",I=(P&&P!=="."?P:"Total")||"Total",p=U,l=Y.length>1,Y_=(__)=>{if(!__?.path)return;let N_=n1(_.root,__.path);if(!N_||!Array.isArray(N_.children)||N_.children.length===0)return;j((M_)=>[...M_,N_.path]),X(N_.path),Z(null)},O_=()=>{if(!l)return;j((__)=>{let N_=__.slice(0,-1);return X(N_[N_.length-1]||_?.root?.path||"."),N_}),Z(null)};return q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${W?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${M.length}
                data-base-size=${K}>
                ${M.map((__)=>q`
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
                        onClick=${()=>Y_(__)}
                    >
                        <title>${__.label} — ${y0(__.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${O_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${I}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${E.length>0&&q`
                <div class="workspace-folder-starburst-legend">
                    ${E.slice(0,8).map((__)=>q`
                        <div key=${__.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${__.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${__.name}>${__.name}</span>
                            <span class="workspace-folder-starburst-size">${y0(__.size)}</span>
                            <span class="workspace-folder-starburst-pct">${__.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function n6({mediaId:_}){let[$,Z]=u(null);if(c(()=>{if(!_)return;P2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?y0($.metadata.size):"";return q`
        <a href=${g0(_)} download=${J} class="file-attachment"
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
                ${X&&q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function e4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=u(null),[j,W]=u(new Set(["."])),[N,O]=u(null),[K,H]=u(null),[E,L]=u(""),[y,b]=u(null),[R,M]=u(null),[U,P]=u(!0),[C,I]=u(!1),[p,l]=u(null),[Y_,O_]=u(()=>H2("workspaceShowHidden",!1)),[__,N_]=u(!1),[M_,r]=u(null),[e,d]=u(null),[i,$_]=u(null),[W_,J_]=u(!1),[v_,X_]=u(null),[B_,z_]=u(()=>h4()),[H_,A_]=u(()=>p1({stored:m0(X1),...h1()})),L_=F(j),Q_=F(""),k_=F(null),w_=F(0),y_=F(new Set),S_=F(null),b_=F(new Map),O0=F(_),m_=F(J),x_=F(null),K_=F(null),Q0=F(null),J0=F(null),A0=F(null),Y0=F(null),F0=F("."),F_=F(null),U0=F({path:null,dragging:!1,startX:0,startY:0}),b0=F({path:null,dragging:!1,startX:0,startY:0}),t_=F({path:null,timer:0}),X0=F(!1),c_=F(0),x=F(new Map),Z_=F(null),E_=F(null),B0=F(null),q0=F(null),g_=F(Y_),H0=F($),n_=F(Z??$),o_=F(0),d_=F(i),L0=F(__),r0=F(M_),j0=F(null),G2=F({x:0,y:0}),M0=F(0),P0=F(null),K0=F(N),c0=F(K),w0=F(null),R_=F(null),s0=F(y);O0.current=_,m_.current=J,c(()=>{L_.current=j},[j]),c(()=>{g_.current=Y_},[Y_]),c(()=>{H0.current=$},[$]),c(()=>{n_.current=Z??$},[Z,$]),c(()=>{d_.current=i},[i]),c(()=>{if(typeof window>"u")return;let G=()=>{A_(p1({stored:m0(X1),...h1()}))};G();let z=()=>G(),D=()=>G(),k=(v)=>{if(!v||v.key===null||v.key===X1)G()};window.addEventListener("resize",z),window.addEventListener("focus",D),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),o=window.matchMedia?.("(hover: none)"),a=(v,j_)=>{if(!v)return;if(v.addEventListener)v.addEventListener("change",j_);else if(v.addListener)v.addListener(j_)},s=(v,j_)=>{if(!v)return;if(v.removeEventListener)v.removeEventListener("change",j_);else if(v.removeListener)v.removeListener(j_)};return a(m,z),a(o,z),()=>{window.removeEventListener("resize",z),window.removeEventListener("focus",D),window.removeEventListener("storage",k),s(m,z),s(o,z)}},[]),c(()=>{let G=(z)=>{let D=z?.detail?.path;if(!D)return;let k=D.split("/"),m=[];for(let o=1;o<k.length;o++)m.push(k.slice(0,o).join("/"));if(m.length)W((o)=>{let a=new Set(o);a.add(".");for(let s of m)a.add(s);return a});O(D),requestAnimationFrame(()=>{let o=document.querySelector(`[data-path="${CSS.escape(D)}"]`);if(o)o.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",G),()=>window.removeEventListener("workspace-reveal-path",G)},[]),c(()=>{L0.current=__},[__]),c(()=>{r0.current=M_},[M_]),c(()=>{K0.current=N},[N]),c(()=>{c0.current=K},[K]),c(()=>{s0.current=y},[y]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let G=()=>z_(h4());G();let z=window.matchMedia?.("(prefers-color-scheme: dark)"),D=()=>G();if(z?.addEventListener)z.addEventListener("change",D);else if(z?.addListener)z.addListener(D);let k=typeof MutationObserver<"u"?new MutationObserver(()=>G()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(z?.removeEventListener)z.removeEventListener("change",D);else if(z?.removeListener)z.removeListener(D);k?.disconnect()}},[]),c(()=>{if(!K)return;let G=A0.current;if(!G)return;let z=requestAnimationFrame(()=>{try{G.focus(),G.select()}catch{}});return()=>cancelAnimationFrame(z)},[K]);let N2=async(G)=>{I(!0),b(null),M(null);try{let z=await d3(G,20000);b(z)}catch(z){b({error:z.message||"Failed to load preview"})}finally{I(!1)}};x_.current=N2;let Y2=async()=>{if(!H0.current)return;try{let G=await r2("",1,g_.current),z=c4(G.root,L_.current,g_.current);if(z===Q_.current){P(!1);return}if(Q_.current=z,k_.current=G.root,!w_.current)w_.current=requestAnimationFrame(()=>{w_.current=0,Y((D)=>o1(D,k_.current)),P(!1)})}catch(G){l(G.message||"Failed to load workspace"),P(!1)}},a0=async(G)=>{if(!G)return;if(y_.current.has(G))return;y_.current.add(G);try{let z=await r2(G,1,g_.current);Y((D)=>l1(D,G,z.root))}catch(z){l(z.message||"Failed to load workspace")}finally{y_.current.delete(G)}};K_.current=a0;let r_=S(()=>{let G=N;if(!G)return".";let z=b_.current?.get(G);if(z&&z.type==="dir")return z.path;if(G==="."||!G.includes("/"))return".";let D=G.split("/");return D.pop(),D.join("/")||"."},[N]),E0=S((G)=>{let z=G?.closest?.(".workspace-row");if(!z)return null;let D=z.dataset.path,k=z.dataset.type;if(!D)return null;if(k==="dir")return D;if(D.includes("/")){let m=D.split("/");return m.pop(),m.join("/")||"."}return"."},[]),D0=S((G)=>{return E0(G?.target||null)},[E0]),I_=S((G)=>{d_.current=G,$_(G)},[]),e_=S(()=>{let G=t_.current;if(G?.timer)clearTimeout(G.timer);t_.current={path:null,timer:0}},[]),u_=S((G)=>{if(!G||G==="."){e_();return}let z=b_.current?.get(G);if(!z||z.type!=="dir"){e_();return}if(L_.current?.has(G)){e_();return}if(t_.current?.path===G)return;e_();let D=setTimeout(()=>{t_.current={path:null,timer:0},K_.current?.(G),W((k)=>{let m=new Set(k);return m.add(G),m})},600);t_.current={path:G,timer:D}},[e_]),_0=S((G,z)=>{if(G2.current={x:G,y:z},M0.current)return;M0.current=requestAnimationFrame(()=>{M0.current=0;let D=j0.current;if(!D)return;let k=G2.current;D.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),C0=S((G)=>{if(!G)return;let D=(b_.current?.get(G)?.name||G.split("/").pop()||G).trim();if(!D)return;d({path:G,label:D})},[]),I0=S(()=>{if(d(null),M0.current)cancelAnimationFrame(M0.current),M0.current=0;if(j0.current)j0.current.style.transform="translate(-9999px, -9999px)"},[]),h0=S((G)=>{if(!G)return".";let z=b_.current?.get(G);if(z&&z.type==="dir")return z.path;if(G==="."||!G.includes("/"))return".";let D=G.split("/");return D.pop(),D.join("/")||"."},[]),W0=S(()=>{H(null),L("")},[]),X2=S((G)=>{if(!G)return;let D=(b_.current?.get(G)?.name||G.split("/").pop()||G).trim();if(!D||G===".")return;H(G),L(D)},[]),T0=S(async()=>{let G=c0.current;if(!G)return;let z=(E||"").trim();if(!z){W0();return}let D=b_.current?.get(G),k=(D?.name||G.split("/").pop()||G).trim();if(z===k){W0();return}try{let o=(await a3(G,z))?.path||G,a=G.includes("/")?G.split("/").slice(0,-1).join("/")||".":".";if(W0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:G,newPath:o,type:D?.type||"file"}})),D?.type==="dir")W((s)=>{let v=new Set;for(let j_ of s)if(j_===G)v.add(o);else if(j_.startsWith(`${G}/`))v.add(`${o}${j_.slice(G.length)}`);else v.add(j_);return v});if(O(o),D?.type==="dir")b(null),I(!1),M(null);else x_.current?.(o);K_.current?.(a)}catch(m){l(m?.message||"Failed to rename file")}},[W0,E]),p0=S(async(G)=>{let k=G||".";for(let m=0;m<50;m+=1){let a=`untitled${m===0?"":`-${m}`}.md`;try{let v=(await s3(k,a,""))?.path||(k==="."?a:`${k}/${a}`);if(k&&k!==".")W((j_)=>new Set([...j_,k]));O(v),l(null),K_.current?.(k),x_.current?.(v);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;l(s?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),t0=S((G)=>{if(G?.stopPropagation?.(),W_)return;let z=h0(K0.current);p0(z)},[W_,h0,p0]);c(()=>{if(typeof window>"u")return;let G=(z)=>{let D=z?.detail?.updates||[];if(!Array.isArray(D)||D.length===0)return;Y((s)=>{let v=s;for(let j_ of D){if(!j_?.root)continue;if(!v||j_.path==="."||!j_.path)v=j_.root;else v=l1(v,j_.path,j_.root)}if(v)Q_.current=c4(v,L_.current,g_.current);return P(!1),v});let k=K0.current;if(Boolean(k)&&D.some((s)=>{let v=s?.path||"";if(!v||v===".")return!0;return k===v||k.startsWith(`${v}/`)||v.startsWith(`${k}/`)}))x.current.clear();if(!k||!s0.current)return;let o=b_.current?.get(k);if(o&&o.type==="dir")return;if(D.some((s)=>{let v=s?.path||"";if(!v||v===".")return!0;return k===v||k.startsWith(`${v}/`)}))x_.current?.(k)};return window.addEventListener("workspace-update",G),()=>window.removeEventListener("workspace-update",G)},[]),S_.current=Y2;let i0=F(()=>{if(typeof window>"u")return;let G=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),z=n_.current??H0.current,D=document.visibilityState!=="hidden"&&(z||G.matches&&H0.current);s2(D,g_.current).catch(()=>{})}).current,Q=F(0),f=F(()=>{if(Q.current)clearTimeout(Q.current);Q.current=setTimeout(()=>{Q.current=0,i0()},250)}).current;c(()=>{if(H0.current)S_.current?.();f()},[$,Z]),c(()=>{S_.current(),i0();let G=setInterval(()=>S_.current(),h6),z=L2("previewHeight",null),D=Number.isFinite(z)?Math.min(Math.max(z,80),600):280;if(c_.current=D,Q0.current)Q0.current.style.setProperty("--preview-height",`${D}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>f();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(G),w_.current)cancelAnimationFrame(w_.current),w_.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),Q.current)clearTimeout(Q.current),Q.current=0;if(F_.current)clearTimeout(F_.current),F_.current=null;s2(!1,g_.current).catch(()=>{})}},[]);let n=a_(()=>l4(X,j,Y_),[X,j,Y_]),V_=a_(()=>new Map(n.map((G)=>[G.node.path,G.node])),[n]),D_=a_(()=>m4(H_),[H_]);b_.current=V_;let q_=(N?b_.current.get(N):null)?.type==="dir";c(()=>{if(!N||!q_){X_(null),Z_.current=null,E_.current=null;return}let G=N,z=`${Y_?"hidden":"visible"}:${N}`,D=x.current,k=D.get(z);if(k?.root){D.delete(z),D.set(z,k);let a=p4(k.root,Boolean(k.truncated),B_);if(a)Z_.current=a,E_.current=N,X_({loading:!1,error:null,payload:a});return}let m=Z_.current,o=E_.current;X_({loading:!0,error:null,payload:o===N?m:null}),r2(N,p6,Y_).then((a)=>{if(K0.current!==G)return;let s={root:a?.root,truncated:Boolean(a?.truncated)};D.delete(z),D.set(z,s);while(D.size>i6){let j_=D.keys().next().value;if(!j_)break;D.delete(j_)}let v=p4(s.root,s.truncated,B_);Z_.current=v,E_.current=N,X_({loading:!1,error:null,payload:v})}).catch((a)=>{if(K0.current!==G)return;X_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:o===N?m:null})})},[N,q_,Y_,B_]);let G0=Boolean(y&&y.kind==="text"&&!q_&&(!y.size||y.size<=262144)),l0=G0?"Open in editor":y?.size>262144?"File too large to edit":"File is not editable";c(()=>{let G=B0.current;if(q0.current)q0.current.dispose(),q0.current=null;if(!G)return;if(G.innerHTML="",!N||q_||!y||y.error)return;let z={path:N,content:typeof y.text==="string"?y.text:void 0,mtime:y.mtime,size:y.size,preview:y,mode:"view"},D=l_.resolve(z)||l_.get("workspace-preview-default");if(!D)return;let k=D.mount(G,z);return q0.current=k,()=>{if(q0.current===k)k.dispose(),q0.current=null;G.innerHTML=""}},[N,q_,y]);let f0=(G)=>{let z=G?.target;if(z instanceof Element)return z;return z?.parentElement||null},n0=(G)=>{return Boolean(G?.closest?.(".workspace-node-icon, .workspace-label-text"))},V2=F((G)=>{if(R_.current)clearTimeout(R_.current),R_.current=null;let D=f0(G)?.closest?.("[data-path]");if(!D)return;let k=D.dataset.path;if(D.dataset.type==="dir"||!k)return;if(c0.current===k)W0();m_.current?.(k)}).current,O2=F((G)=>{if(X0.current){X0.current=!1;return}let z=f0(G),D=z?.closest?.("[data-path]");if(J0.current?.focus?.(),!D)return;let k=D.dataset.path,m=D.dataset.type,o=Boolean(z?.closest?.(".workspace-caret")),a=Boolean(z?.closest?.("button"))||Boolean(z?.closest?.("a"))||Boolean(z?.closest?.("input")),s=K0.current===k,v=c0.current;if(v){if(v===k)return;W0()}let j_=m==="file"&&w0.current===k&&!o&&!a;if(s&&!o&&!a&&k!=="."&&!j_){if(R_.current)clearTimeout(R_.current);R_.current=setTimeout(()=>{R_.current=null,X2(k)},350);return}if(m==="dir"){if(w0.current=null,O(k),b(null),M(null),I(!1),!L_.current.has(k))K_.current?.(k);if(s&&!o)return;W((x0)=>{let u0=new Set(x0);if(u0.has(k))u0.delete(k);else u0.add(k);return u0})}else{w0.current=null,O(k);let T_=b_.current.get(k);if(T_)O0.current?.(T_.path,T_);x_.current?.(k)}}).current,s_=F(()=>{Q_.current="",S_.current(),Array.from(L_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>K_.current?.(z))}).current,P_=F(()=>{w0.current=null,O(null),b(null),M(null),I(!1)}).current,N0=F(()=>{O_((G)=>{let z=!G;if(typeof window<"u")f_("workspaceShowHidden",String(z));return g_.current=z,s2(!0,z).catch(()=>{}),Q_.current="",S_.current?.(),Array.from(L_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>K_.current?.(k)),z})}).current,e0=F((G)=>{if(f0(G)?.closest?.("[data-path]"))return;P_()}).current,p_=S(async(G)=>{if(!G)return;let z=G.split("/").pop()||G;if(!window.confirm(`Delete "${z}"? This cannot be undone.`))return;try{await e3(G);let k=G.includes("/")?G.split("/").slice(0,-1).join("/")||".":".";if(K0.current===G)P_();K_.current?.(k),l(null)}catch(k){b((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[P_]),$0=S((G)=>{let z=J0.current;if(!z||!G||typeof CSS>"u"||typeof CSS.escape!=="function")return;z.querySelector(`[data-path="${CSS.escape(G)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),v0=S((G)=>{let z=n;if(!z||z.length===0)return;let D=N?z.findIndex((k)=>k.node.path===N):-1;if(G.key==="ArrowDown"){G.preventDefault();let k=Math.min(D+1,z.length-1),m=z[k];if(!m)return;if(O(m.node.path),m.node.type!=="dir")O0.current?.(m.node.path,m.node),x_.current?.(m.node.path);else b(null),I(!1),M(null);$0(m.node.path);return}if(G.key==="ArrowUp"){G.preventDefault();let k=D<=0?0:D-1,m=z[k];if(!m)return;if(O(m.node.path),m.node.type!=="dir")O0.current?.(m.node.path,m.node),x_.current?.(m.node.path);else b(null),I(!1),M(null);$0(m.node.path);return}if(G.key==="ArrowRight"&&D>=0){let k=z[D];if(k?.node?.type==="dir"&&!j.has(k.node.path))G.preventDefault(),K_.current?.(k.node.path),W((m)=>new Set([...m,k.node.path]));return}if(G.key==="ArrowLeft"&&D>=0){let k=z[D];if(k?.node?.type==="dir"&&j.has(k.node.path))G.preventDefault(),W((m)=>{let o=new Set(m);return o.delete(k.node.path),o});return}if(G.key==="Enter"&&D>=0){G.preventDefault();let k=z[D];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!L_.current.has(m))K_.current?.(m);W((a)=>{let s=new Set(a);if(s.has(m))s.delete(m);else s.add(m);return s}),b(null),M(null),I(!1)}else O0.current?.(m,k.node),x_.current?.(m);return}if((G.key==="Delete"||G.key==="Backspace")&&D>=0){let k=z[D];if(!k||k.node.type==="dir")return;G.preventDefault(),p_(k.node.path);return}if(G.key==="Escape")G.preventDefault(),P_()},[P_,p_,j,n,$0,N]),z0=S((G)=>{let z=f0(G),D=z?.closest?.(".workspace-row");if(!D)return;let k=D.dataset.type,m=D.dataset.path;if(!m||m===".")return;if(c0.current===m)return;let o=G?.touches?.[0];if(!o)return;if(U0.current={path:n0(z)?m:null,dragging:!1,startX:o.clientX,startY:o.clientY},k!=="file")return;if(F_.current)clearTimeout(F_.current);F_.current=setTimeout(()=>{if(F_.current=null,U0.current?.dragging)return;p_(m)},600)},[p_]),S0=S(()=>{if(F_.current)clearTimeout(F_.current),F_.current=null;let G=U0.current;if(G?.dragging&&G.path){let z=d_.current||r_(),D=P0.current;if(typeof D==="function")D(G.path,z)}U0.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,N_(!1),r(null),I_(null),e_(),I0()},[r_,I0,I_,e_]),B2=S((G)=>{let z=U0.current,D=G?.touches?.[0];if(!D||!z?.path){if(F_.current)clearTimeout(F_.current),F_.current=null;return}let k=Math.abs(D.clientX-z.startX),m=Math.abs(D.clientY-z.startY),o=k>8||m>8;if(o&&F_.current)clearTimeout(F_.current),F_.current=null;if(!z.dragging&&o)z.dragging=!0,N_(!0),r("move"),C0(z.path);if(z.dragging){G.preventDefault(),_0(D.clientX,D.clientY);let a=document.elementFromPoint(D.clientX,D.clientY),s=E0(a)||r_();if(d_.current!==s)I_(s);u_(s)}},[E0,r_,C0,_0,I_,u_]),k2=F((G)=>{G.preventDefault();let z=Q0.current;if(!z)return;let D=G.clientY,k=c_.current||280,m=G.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let o=D,a=(v)=>{o=v.clientY;let j_=z.clientHeight-80,T_=Math.min(Math.max(k-(v.clientY-D),80),j_);z.style.setProperty("--preview-height",`${T_}px`),c_.current=T_},s=()=>{let v=z.clientHeight-80,j_=Math.min(Math.max(k-(o-D),80),v);c_.current=j_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("previewHeight",String(Math.round(j_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)}).current,j2=F((G)=>{G.preventDefault();let z=Q0.current;if(!z)return;let D=G.touches[0];if(!D)return;let k=D.clientY,m=c_.current||280,o=G.currentTarget;o.classList.add("dragging"),document.body.style.userSelect="none";let a=(v)=>{let j_=v.touches[0];if(!j_)return;v.preventDefault();let T_=z.clientHeight-80,x0=Math.min(Math.max(m-(j_.clientY-k),80),T_);z.style.setProperty("--preview-height",`${x0}px`),c_.current=x0},s=()=>{o.classList.remove("dragging"),document.body.style.userSelect="",f_("previewHeight",String(Math.round(c_.current||m))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,K1=async()=>{if(!N)return;try{let G=await r3(N);if(G.media_id)M(G.media_id)}catch(G){b((z)=>({...z||{},error:G.message||"Failed to attach"}))}},W1=async()=>{if(!N||q_)return;await p_(N)},K2=(G)=>{return Array.from(G?.dataTransfer?.types||[]).includes("Files")},v2=S((G)=>{if(!K2(G))return;if(G.preventDefault(),o_.current+=1,!L0.current)N_(!0);r("upload");let z=D0(G)||r_();I_(z),u_(z)},[r_,D0,I_,u_]),Z0=S((G)=>{if(!K2(G))return;if(G.preventDefault(),G.dataTransfer)G.dataTransfer.dropEffect="copy";if(!L0.current)N_(!0);if(r0.current!=="upload")r("upload");let z=D0(G)||r_();if(d_.current!==z)I_(z);u_(z)},[r_,D0,I_,u_]),G1=S((G)=>{if(!K2(G))return;if(G.preventDefault(),o_.current=Math.max(0,o_.current-1),o_.current===0)N_(!1),r(null),I_(null),e_()},[I_,e_]),q2=S(async(G,z=".")=>{let D=Array.from(G||[]);if(D.length===0)return;let k=z&&z!==""?z:".",m=k!=="."?k:"workspace root";J_(!0);try{let o=null;for(let a of D)try{o=await A1(a,k)}catch(s){let v=s?.status,j_=s?.code;if(v===409||j_==="file_exists"){let T_=a?.name||"file";if(!window.confirm(`"${T_}" already exists in ${m}. Overwrite?`))continue;o=await A1(a,k,{overwrite:!0})}else throw s}if(o?.path)w0.current=o.path,O(o.path),x_.current?.(o.path);K_.current?.(k)}catch(o){l(o.message||"Failed to upload file")}finally{J_(!1)}},[]),R2=S(async(G,z)=>{if(!G)return;let D=b_.current?.get(G);if(!D)return;let k=z&&z!==""?z:".",m=G.includes("/")?G.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let a=(await t3(G,k))?.path||G;if(D.type==="dir")W((s)=>{let v=new Set;for(let j_ of s)if(j_===G)v.add(a);else if(j_.startsWith(`${G}/`))v.add(`${a}${j_.slice(G.length)}`);else v.add(j_);return v});if(O(a),D.type==="dir")b(null),I(!1),M(null);else x_.current?.(a);K_.current?.(m),K_.current?.(k)}catch(o){l(o?.message||"Failed to move entry")}},[]);P0.current=R2;let R0=S(async(G)=>{if(!K2(G))return;G.preventDefault(),o_.current=0,N_(!1),r(null),$_(null),e_();let z=Array.from(G?.dataTransfer?.files||[]);if(z.length===0)return;let D=d_.current||D0(G)||r_();await q2(z,D)},[r_,D0,q2]),V0=S((G)=>{if(G?.stopPropagation?.(),W_)return;let z=G?.currentTarget?.dataset?.uploadTarget||".";F0.current=z,Y0.current?.click()},[W_]),N1=S(()=>{if(W_)return;let G=K0.current,z=G?b_.current?.get(G):null;F0.current=z?.type==="dir"?z.path:".",Y0.current?.click()},[W_]),y2=S((G)=>{if(!G||G.button!==0)return;let z=G.currentTarget;if(!z||!z.dataset)return;let D=z.dataset.path;if(!D||D===".")return;if(c0.current===D)return;let k=f0(G);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!n0(k))return;G.preventDefault(),b0.current={path:D,dragging:!1,startX:G.clientX,startY:G.clientY};let m=(a)=>{let s=b0.current;if(!s?.path)return;let v=Math.abs(a.clientX-s.startX),j_=Math.abs(a.clientY-s.startY),T_=v>4||j_>4;if(!s.dragging&&T_)s.dragging=!0,X0.current=!0,N_(!0),r("move"),C0(s.path),_0(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){a.preventDefault(),_0(a.clientX,a.clientY);let x0=document.elementFromPoint(a.clientX,a.clientY),u0=E0(x0)||r_();if(d_.current!==u0)I_(u0);u_(u0)}},o=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",o);let a=b0.current;if(a?.dragging&&a.path){let s=d_.current||r_(),v=P0.current;if(typeof v==="function")v(a.path,s)}b0.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,N_(!1),r(null),I_(null),e_(),I0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{X0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",o)},[E0,r_,C0,_0,I0,I_,u_,e_]),_2=S(async(G)=>{let z=Array.from(G?.target?.files||[]);if(z.length===0)return;let D=F0.current||".";if(await q2(z,D),F0.current=".",G?.target)G.target.value=""},[q2]);return q`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${H_}
            ref=${Q0}
            onDragEnter=${v2}
            onDragOver=${Z0}
            onDragLeave=${G1}
            onDrop=${R0}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${_2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t0} title="New file" disabled=${W_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Y_?" active":""}`}
                        onClick=${N0}
                        title=${Y_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Y_&&q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e0}>
                ${W_&&q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${U&&q`<div class="workspace-loading">Loading…</div>`}
                ${p&&q`<div class="workspace-error">${p}</div>`}
                ${X&&q`
                    <div
                        class="workspace-tree-list"
                        ref=${J0}
                        tabIndex="0"
                        onClick=${O2}
                        onDblClick=${V2}
                        onKeyDown=${v0}
                        onTouchStart=${z0}
                        onTouchEnd=${S0}
                        onTouchMove=${B2}
                        onTouchCancel=${S0}
                    >
                        ${n.map(({node:G,depth:z})=>{let D=G.type==="dir",k=G.path===N,m=G.path===K,o=D&&j.has(G.path),a=i&&G.path===i,s=Array.isArray(G.children)&&G.children.length>0?G.children.length:Number(G.child_count)||0;return q`
                                <div
                                    key=${G.path}
                                    class=${`workspace-row${k?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+z*D_.indentPx}px`}}
                                    data-path=${G.path}
                                    data-type=${G.type}
                                    onMouseDown=${y2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${D?o?q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${D?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${D?q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A0}
                                                value=${E}
                                                onInput=${(v)=>L(v?.target?.value||"")}
                                                onKeyDown=${(v)=>{if(v.key==="Enter")v.preventDefault(),T0();else if(v.key==="Escape")v.preventDefault(),W0()}}
                                                onBlur=${W0}
                                                onClick=${(v)=>v.stopPropagation()}
                                            />
                                        `:q`<span class="workspace-label"><span class="workspace-label-text">${G.name}</span></span>`}
                                    ${D&&!o&&s>0&&q`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${D&&q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${G.path}
                                            title="Upload files to this folder"
                                            onClick=${V0}
                                            disabled=${W_}
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
            ${N&&q`
                <div class="workspace-preview-splitter-h" onMouseDown=${k2} onTouchStart=${j2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t0} title="New file" disabled=${W_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q_&&q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>G0&&m_.current?.(N,y)}
                                    title=${l0}
                                    disabled=${!G0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${W1}
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
                            ${q_?q`
                                    <button class="workspace-download" onClick=${N1}
                                        title="Upload files to this folder" disabled=${W_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${_4(N,Y_)}
                                        title="Download folder as zip" onClick=${(G)=>G.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:q`<button class="workspace-download" onClick=${K1} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&q`<div class="workspace-loading">Loading preview…</div>`}
                    ${y?.error&&q`<div class="workspace-error">${y.error}</div>`}
                    ${q_&&q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&q`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&q`
                            <${l6} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${y&&!y.error&&!q_&&q`
                        <div class="workspace-preview-body" ref=${B0}></div>
                    `}
                    ${R&&q`
                        <div class="workspace-download-card">
                            <${n6} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${e&&q`
                <div class="workspace-drag-ghost" ref=${j0}>${e.label}</div>
            `}
        </aside>
    `}function _8({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:j,onTogglePreview:W,previewTabs:N,onToggleDock:O,dockVisible:K}){let[H,E]=u(null),L=F(null);c(()=>{if(!H)return;let U=(P)=>{if(P.type==="keydown"&&P.key!=="Escape")return;E(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[H]),c(()=>{let U=(P)=>{if(P.ctrlKey&&P.key==="Tab"){if(P.preventDefault(),!_.length)return;let C=_.findIndex((I)=>I.id===$);if(P.shiftKey){let I=_[(C-1+_.length)%_.length];Z?.(I.id)}else{let I=_[(C+1)%_.length];Z?.(I.id)}return}if((P.ctrlKey||P.metaKey)&&P.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(P.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,Z,J]);let y=S((U,P)=>{if(U.button===1){U.preventDefault(),J?.(P);return}if(U.button===0)Z?.(P)},[Z,J]),b=S((U,P)=>{U.preventDefault(),E({id:P,x:U.clientX,y:U.clientY})},[]),R=S((U)=>{U.preventDefault(),U.stopPropagation()},[]),M=S((U,P)=>{U.preventDefault(),U.stopPropagation(),J?.(P)},[J]);if(c(()=>{if(!$||!L.current)return;let U=L.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return q`
        <div class="tab-strip" ref=${L} role="tablist">
            ${_.map((U)=>q`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(P)=>y(P,U.id)}
                    onContextMenu=${(P)=>b(P,U.id)}
                >
                    ${U.pinned&&q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(P)=>M(P,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${K?" active":""}`}
                    onClick=${O}
                    title=${`${K?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${K?"Hide":"Show"} terminal`}
                    aria-pressed=${K?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${H&&q`
            <div class="tab-context-menu" style=${{left:H.x+"px",top:H.y+"px"}}>
                <button onClick=${()=>{J?.(H.id),E(null)}}>Close</button>
                <button onClick=${()=>{X?.(H.id),E(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),E(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(H.id),E(null)}}>
                    ${_.find((U)=>U.id===H.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${W&&/\.(md|mdx|markdown)$/i.test(H.id)&&q`
                    <hr />
                    <button onClick=${()=>{W(H.id),E(null)}}>
                        ${N?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var o6=400,r1=60,$8=220,s1="mdPreviewHeight";function d6(){try{let _=localStorage.getItem(s1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r1?$:$8}catch{return $8}}function Z8({getContent:_,path:$,onClose:Z}){let[J,X]=u(""),[Y,j]=u(d6),W=F(null),N=F(null),O=F(""),K=F(_);return K.current=_,c(()=>{let L=()=>{let b=K.current?.()||"";if(b===O.current)return;O.current=b;try{let R=Z2(b,null,{sanitize:!1});X(R)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let y=setInterval(L,o6);return()=>clearInterval(y)},[]),c(()=>{if(W.current&&J)D2(W.current).catch(()=>{})},[J]),q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let y=L.clientY,b=N.current?.offsetHeight||Y,R=N.current?.parentElement,M=R?R.offsetHeight*0.7:500,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(I)=>{let p=Math.min(Math.max(b-(I.clientY-y),r1),M);j(p)},C=()=>{U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(s1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",C)}}
            onTouchStart=${(L)=>{L.preventDefault();let y=L.touches[0];if(!y)return;let b=y.clientY,R=N.current?.offsetHeight||Y,M=N.current?.parentElement,U=M?M.offsetHeight*0.7:500,P=L.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let C=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let Y_=Math.min(Math.max(R-(l.clientY-b),r1),U);j(Y_)},I=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(s1,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
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
                ref=${W}
                dangerouslySetInnerHTML=${{__html:J}}
            />
        </div>
    `}function J8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=F(_);J.current=_;let X=F($);X.current=$;let Y=F(Z);Y.current=Z,c(()=>{Y.current();let j=new M1((N,O)=>J.current(N,O),(N)=>X.current(N));j.connect();let W=()=>{j.reconnectIfNeeded()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),j.disconnect()}},[])}function Y8(){let[_,$]=u(!1),[Z,J]=u("default"),X=F(!1);c(()=>{let N=H2("notificationsEnabled",!1);if(X.current=N,$(N),typeof Notification<"u")J(Notification.permission)},[]),c(()=>{X.current=_},[_]);let Y=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),j=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),f_("notificationsEnabled","false");return}}let N=!X.current;X.current=N,$(N),f_("notificationsEnabled",String(N))},[Y]),W=S((N,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let K=new Notification(N,{body:O});return K.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:j,notify:W}}var T2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function X8({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=u(null),[X,Y]=u(!1),j=F(!1),W=F(null),N=F(!1),O=F(null),K=F(null);c(()=>{j.current=X},[X]),c(()=>{K.current=Z},[Z]);let H=S(async(y=null)=>{try{if(y){let b=await f3(y);J(b.posts),Y(!1)}else{let b=await d2(10);J(b.posts),Y(b.has_more)}}catch(b){console.error("Failed to load posts:",b)}},[]),E=S(async()=>{try{let y=await d2(10);J((b)=>{if(!b||b.length===0)return y.posts;return T2([...y.posts,...b])}),Y((b)=>b||y.has_more)}catch(y){console.error("Failed to refresh timeline:",y)}},[]),L=S(async(y={})=>{let b=K.current;if(!b||b.length===0)return;if(N.current)return;let{preserveScroll:R=!0,preserveMode:M="top",allowRepeat:U=!1}=y,P=(p)=>{if(!R){p();return}if(M==="top")$(p);else _(p)},I=b.slice().sort((p,l)=>p.id-l.id)[0]?.id;if(!Number.isFinite(I))return;if(!U&&O.current===I)return;N.current=!0,O.current=I;try{let p=await d2(10,I);if(p.posts.length>0)P(()=>{J((l)=>T2([...p.posts,...l||[]])),Y(p.has_more)});else Y(!1)}catch(p){console.error("Failed to load more posts:",p)}finally{N.current=!1}},[_,$]);return c(()=>{W.current=L},[L]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:j,loadPosts:H,refreshTimeline:E,loadMore:L,loadMoreRef:W,loadingMoreRef:N,lastBeforeIdRef:O}}function j8(){let[_,$]=u(null),[Z,J]=u({text:"",totalLines:0}),[X,Y]=u(""),[j,W]=u({text:"",totalLines:0}),[N,O]=u(null),[K,H]=u(null),[E,L]=u(null),y=F(null),b=F(0),R=F(!1),M=F(""),U=F(""),P=F(null),C=F(null),I=F(null),p=F(null),l=F(!1),Y_=F(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:j,setAgentThought:W,pendingRequest:N,setPendingRequest:O,currentTurnId:K,setCurrentTurnId:H,steerQueuedTurnId:E,setSteerQueuedTurnId:L,lastAgentEventRef:y,lastSilenceNoticeRef:b,isAgentRunningRef:R,draftBufferRef:M,thoughtBufferRef:U,pendingRequestRef:P,stalledPostIdRef:C,currentTurnIdRef:I,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:Y_}}function K8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.clientX,L=$.current||280,y=K.currentTarget;y.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let b=E,R=(U)=>{b=U.clientX;let P=Math.min(Math.max(L+(U.clientX-E),160),600);H.style.setProperty("--sidebar-width",`${P}px`),$.current=P},M=()=>{let U=Math.min(Math.max(L+(b-E),160),600);$.current=U,y.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",f_("sidebarWidth",String(Math.round(U))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",M)}).current,Y=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.touches[0];if(!E)return;let L=E.clientX,y=$.current||280,b=K.currentTarget;b.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(y+(P.clientX-L),160),600);H.style.setProperty("--sidebar-width",`${C}px`),$.current=C},M=()=>{b.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.userSelect="",f_("sidebarWidth",String(Math.round($.current||y))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,j=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.clientX,L=Z.current||$.current||280,y=K.currentTarget;y.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let b=E,R=(U)=>{b=U.clientX;let P=Math.min(Math.max(L+(U.clientX-E),200),800);H.style.setProperty("--editor-width",`${P}px`),Z.current=P},M=()=>{let U=Math.min(Math.max(L+(b-E),200),800);Z.current=U,y.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("editorWidth",String(Math.round(U))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",M)}).current,W=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.touches[0];if(!E)return;let L=E.clientX,y=Z.current||$.current||280,b=K.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let R=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(y+(P.clientX-L),200),800);H.style.setProperty("--editor-width",`${C}px`),Z.current=C},M=()=>{b.classList.remove("dragging"),document.body.style.userSelect="",f_("editorWidth",String(Math.round(Z.current||y))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current,N=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.clientY,L=J?.current||200,y=K.currentTarget;y.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let b=E,R=(U)=>{b=U.clientY;let P=Math.min(Math.max(L-(U.clientY-E),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${P}px`),J)J.current=P},M=()=>{let U=Math.min(Math.max(L-(b-E),100),window.innerHeight*0.5);if(J)J.current=U;y.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("dockHeight",String(Math.round(U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",M)}).current,O=F((K)=>{K.preventDefault();let H=_.current;if(!H)return;let E=K.touches[0];if(!E)return;let L=E.clientY,y=J?.current||200,b=K.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let R=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(y-(P.clientY-L),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${C}px`),J)J.current=C},M=()=>{b.classList.remove("dragging"),document.body.style.userSelect="",f_("dockHeight",String(Math.round(J?.current||y))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",M),document.removeEventListener("touchcancel",M)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",M),document.addEventListener("touchcancel",M)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:W,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:O}}function W8({onTabClosed:_}={}){let $=F(_);$.current=_;let[Z,J]=u(()=>C_.getTabs()),[X,Y]=u(()=>C_.getActiveId()),[j,W]=u(()=>C_.getTabs().length>0);c(()=>{return C_.onChange((C,I)=>{J(C),Y(I),W(C.length>0)})},[]);let[N,O]=u(()=>new Set),K=S((C)=>{O((I)=>{let p=new Set(I);if(p.has(C))p.delete(C);else p.add(C);return p})},[]),H=S((C)=>{O((I)=>{if(!I.has(C))return I;let p=new Set(I);return p.delete(C),p})},[]),E=S((C)=>{if(!C)return;let I={path:C,mode:"edit"};try{if(!l_.resolve(I)){if(!l_.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,p)}C_.open(C)},[]),L=S(()=>{let C=C_.getActiveId();if(C){let I=C_.get(C);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}C_.close(C),H(C),$.current?.(C)}},[H]),y=S((C)=>{let I=C_.get(C);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}C_.close(C),H(C),$.current?.(C)},[H]),b=S((C)=>{C_.activate(C)},[]),R=S((C)=>{let I=C_.getTabs().filter((Y_)=>Y_.id!==C&&!Y_.pinned),p=I.filter((Y_)=>Y_.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let l=I.map((Y_)=>Y_.id);C_.closeOthers(C),l.forEach((Y_)=>{H(Y_),$.current?.(Y_)})},[H]),M=S(()=>{let C=C_.getTabs().filter((l)=>!l.pinned),I=C.filter((l)=>l.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let p=C.map((l)=>l.id);C_.closeAll(),p.forEach((l)=>{H(l),$.current?.(l)})},[H]),U=S((C)=>{C_.togglePin(C)},[]),P=S(()=>{let C=C_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return c(()=>{let C=(I)=>{let{oldPath:p,newPath:l,type:Y_}=I.detail||{};if(!p||!l)return;if(Y_==="dir"){for(let O_ of C_.getTabs())if(O_.path===p||O_.path.startsWith(`${p}/`)){let __=`${l}${O_.path.slice(p.length)}`;C_.rename(O_.id,__)}}else C_.rename(p,l)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),c(()=>{let C=(I)=>{if(C_.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:j,tabStripTabs:Z,tabStripActiveId:X,previewTabs:N,openEditor:E,closeEditor:L,handleTabClose:y,handleTabActivate:b,handleTabCloseOthers:R,handleTabCloseAll:M,handleTabTogglePin:U,handleTabTogglePreview:K,revealInExplorer:P}}function a1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var t1=a1("warning",30000),G8=a1("finalize",120000),e1=a1("refresh",30000),N8=30000;function V8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function O8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function B8(_=30000){let[,$]=u(0);c(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function _3(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function q8(_,$){if(typeof _!=="string")return{kind:"ignore"};let Z=_.trim();if(!Z)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(Z))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:Z,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}return{kind:"open",path:Z}}function f2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var r6=v3,z8=u3,s6=g3,Q8=p3,U8=i3,H8=m3,$3=typeof E1==="function"?E1:f2("getAgentContext",null),a6=typeof W2==="function"?W2:f2("getAgentModels",{current:null,models:[]}),t6=typeof D1==="function"?D1:f2("getAgentQueueState",{count:0}),e6=typeof k1==="function"?k1:f2("steerAgentQueueItem",{removed:!1,queued:"steer"}),_5=typeof C1==="function"?C1:f2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l_.register(v1);l_.register(c1);l_.register(m1);R1();var $5=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if($5)l_.register(u1);function Z5(){let[_,$]=u("disconnected"),[Z,J]=u(null),[X,Y]=u(null),[j,W]=u(!1),[N,O]=u([]),[K,H]=u([]),[E,L]=u(null),{agentStatus:y,setAgentStatus:b,agentDraft:R,setAgentDraft:M,agentPlan:U,setAgentPlan:P,agentThought:C,setAgentThought:I,pendingRequest:p,setPendingRequest:l,currentTurnId:Y_,setCurrentTurnId:O_,steerQueuedTurnId:__,setSteerQueuedTurnId:N_,lastAgentEventRef:M_,lastSilenceNoticeRef:r,isAgentRunningRef:e,draftBufferRef:d,thoughtBufferRef:i,pendingRequestRef:$_,stalledPostIdRef:W_,currentTurnIdRef:J_,steerQueuedTurnIdRef:v_,thoughtExpandedRef:X_,draftExpandedRef:B_}=j8(),[z_,H_]=u({}),[A_,L_]=u(null),[Q_,k_]=u(null),[w_,y_]=u(!1),[S_,b_]=u(null),[O0,m_]=u(null),[x_,K_]=u([]),[Q0,J0]=u(!1),A0=x_.length,Y0=F(new Set),F0=F([]),F_=F(new Set),U0=F({inFlight:!1,lastAttemptAt:0,turnId:null});Y0.current=new Set(x_.map((V)=>V.row_id)),F0.current=x_;let{notificationsEnabled:b0,notificationPermission:t_,toggleNotifications:X0,notify:c_}=Y8(),[x,Z_]=u(()=>new Set),[E_,B0]=u(()=>H2("workspaceOpen",!0)),q0=F(null),{editorOpen:g_,tabStripTabs:H0,tabStripActiveId:n_,previewTabs:o_,openEditor:d_,closeEditor:L0,handleTabClose:r0,handleTabActivate:j0,handleTabCloseOthers:G2,handleTabCloseAll:M0,handleTabTogglePin:P0,handleTabTogglePreview:K0,revealInExplorer:c0}=W8({onTabClosed:(V)=>q0.current?.(V)}),w0=F(null),R_=F(null);c(()=>{let V=w0.current;if(!V)return;if(R_.current)R_.current.dispose(),R_.current=null;let B=n_;if(!B)return;let A={path:B,mode:"edit"},w=l_.resolve(A)||l_.get("editor");if(!w){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g=w.mount(V,A);R_.current=g,g.onDirtyChange?.((h)=>{C_.setDirty(B,h)}),g.onSaveRequest?.(()=>{}),g.onClose?.(()=>{L0()});let T=C_.getViewState(B);if(T&&typeof g.restoreViewState==="function")requestAnimationFrame(()=>g.restoreViewState(T));if(typeof g.onViewStateChange==="function")g.onViewStateChange((h)=>{C_.saveViewState(B,h)});return requestAnimationFrame(()=>g.focus()),()=>{if(R_.current===g)g.dispose(),R_.current=null}},[n_,L0]);let[s0,N2]=u({name:"You",avatar_url:null,avatar_background:null}),Y2=F(!1),a0=F(!1),r_=F(null),E0=F(0),D0=F(0),I_=F({}),e_=F({name:null,avatar_url:null}),u_=F({currentHashtag:null,searchQuery:null}),_0=F(null),C0=F(null),I0=F(0),h0=F(0),W0=F(0),X2=F(null),T0=F(null),p0=F(null),t0=F(0),i0=F({title:null,avatarBase:null}),Q=F(null),f=S(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;L(null)},[]);B8(30000),c(()=>{return G4()},[]),c(()=>{f_("workspaceOpen",String(E_))},[E_]),c(()=>{return()=>{f()}},[f]),c(()=>{I_.current=z_||{}},[z_]),c(()=>{e_.current=s0||{name:"You",avatar_url:null,avatar_background:null}},[s0]);let n=S((V,B,A=null)=>{if(typeof document>"u")return;let w=(V||"").trim()||"PiClaw";if(i0.current.title!==w){document.title=w;let U_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(U_&&U_.getAttribute("content")!==w)U_.setAttribute("content",w);i0.current.title=w}let g=document.getElementById("dynamic-favicon");if(!g)return;let T=g.getAttribute("data-default")||g.getAttribute("href")||"/favicon.ico",h=B||T,t=B?`${h}|${A||""}`:h;if(i0.current.avatarBase!==t){let U_=B?`${h}${h.includes("?")?"&":"?"}v=${A||Date.now()}`:h;g.setAttribute("href",U_),i0.current.avatarBase=t}},[]),V_=S((V)=>{if(!V)return;O((B)=>B.includes(V)?B:[...B,V])},[]),D_=S((V)=>{O((B)=>B.filter((A)=>A!==V))},[]);q0.current=D_;let h_=S(()=>{O([])},[]),q_=S((V,B=null,A="info",w=3000)=>{f(),L({title:V,detail:B||null,kind:A||"info"}),Q.current=setTimeout(()=>{L((g)=>g?.title===V?null:g)},w)},[f]),G0=S((V)=>{let B=q8(V,{editorOpen:g_,resolvePane:(A)=>l_.resolve(A)});if(B.kind==="open"){d_(B.path);return}if(B.kind==="toast")q_(B.title,B.detail,B.level)},[g_,d_,q_]),l0=S(()=>{let V=n_;if(V)V_(V)},[n_,V_]),f0=S((V)=>{if(!V)return;H((B)=>B.includes(V)?B:[...B,V])},[]),n0=S(async(V)=>{let B=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+V);if(A){B(A);return}try{let g=(await R3(V))?.thread?.[0];if(!g)return;Z0((T)=>{if(!T)return[g];if(T.some((h)=>h.id===g.id))return T;return[...T,g]}),requestAnimationFrame(()=>{setTimeout(()=>{let T=document.getElementById("post-"+V);if(T)B(T)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",V,w)}},[]),V2=S((V)=>{H((B)=>B.filter((A)=>A!==V))},[]),O2=S(()=>{H([])},[]),s_=S((V={})=>{let B=Date.now();if(M_.current=B,V.running)e.current=!0,J0((A)=>A?A:!0);if(V.clearSilence)r.current=0},[J0]),P_=S(()=>{if(p0.current)clearTimeout(p0.current),p0.current=null;t0.current=0},[]);c(()=>()=>{P_()},[P_]);let N0=S(()=>{P_(),b((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:B,lastActivity:A,...w}=V;return w})},[P_]),e0=S((V)=>{if(!V)return;P_();let B=Date.now();t0.current=B,b({type:V.type||"active",last_activity:!0}),p0.current=setTimeout(()=>{if(t0.current!==B)return;b((A)=>{if(!A||!(A.last_activity||A.lastActivity))return A;return null})},N8)},[P_]),p_=S(()=>{e.current=!1,J0(!1),M_.current=null,r.current=0,d.current="",i.current="",$_.current=null,T0.current=null,J_.current=null,v_.current=null,U0.current={inFlight:!1,lastAttemptAt:0,turnId:null},P_(),O_(null),N_(null),X_.current=!1,B_.current=!1},[P_,O_,N_,J0]),$0=S((V)=>{if(!V)return;if(J_.current===V)return;J_.current=V,U0.current={inFlight:!1,lastAttemptAt:0,turnId:V},O_(V),v_.current=null,N_(null),d.current="",i.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),$_.current=null,T0.current=null,X_.current=!1,B_.current=!1},[O_,N_]),v0=S((V)=>{if(typeof document<"u"){let U_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&U_)return}let B=T0.current;if(!B||!B.post)return;if(V&&B.turnId&&B.turnId!==V)return;let A=B.post;if(A.id&&X2.current===A.id)return;let w=String(A?.data?.content||"").trim();if(!w)return;X2.current=A.id||X2.current,T0.current=null;let g=w.replace(/\s+/g," ").slice(0,200),T=I_.current||{},t=(A?.data?.agent_id?T[A.data.agent_id]:null)?.name||"Pi";c_(t,g)},[c_]),z0=S(async(V,B)=>{if(V!=="thought"&&V!=="draft")return;let A=J_.current;if(V==="thought"){if(X_.current=B,A)try{await U8(A,"thought",B)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!B)return;try{let w=A?await Q8(A,"thought"):null;if(w?.text)i.current=w.text;I((g)=>({...g||{text:"",totalLines:0},fullText:i.current||g?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:g?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(B_.current=B,A)try{await U8(A,"draft",B)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!B)return;try{let w=A?await Q8(A,"draft"):null;if(w?.text)d.current=w.text;M((g)=>({...g||{text:"",totalLines:0},fullText:d.current||g?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:g?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),S0=F(null),B2=S(()=>{let V=_0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);S0.current=B2;let k2=S((V)=>{let B=_0.current;if(!B||typeof V!=="function"){V?.();return}let{currentHashtag:A,searchQuery:w}=u_.current||{},g=!(w&&!A),T=g?B.scrollHeight-B.scrollTop:B.scrollTop;V(),requestAnimationFrame(()=>{let h=_0.current;if(!h)return;if(g){let t=Math.max(h.scrollHeight-T,0);h.scrollTop=t}else{let t=Math.max(h.scrollHeight-h.clientHeight,0),U_=Math.min(T,t);h.scrollTop=U_}})},[]),j2=S((V)=>{let B=_0.current;if(!B||typeof V!=="function"){V?.();return}let A=B.scrollTop;V(),requestAnimationFrame(()=>{let w=_0.current;if(!w)return;let g=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(A,g)})},[]),K1="Queued as a follow-up (one-at-a-time).",W1="⁣",K2=S((V)=>{if(!V||!Array.isArray(V))return V;let B=Y0.current,A=new Set(B),w=V.filter((g)=>{if(A.has(g?.id))return!1;if(g?.data?.is_bot_message){let T=g?.data?.content;if(T===K1||T===W1)return!1}return!0});return w.length===V.length?V:w},[]),{posts:v2,setPosts:Z0,hasMore:G1,setHasMore:q2,hasMoreRef:R2,loadPosts:R0,refreshTimeline:V0,loadMore:N1,loadMoreRef:y2}=X8({preserveTimelineScroll:k2,preserveTimelineScrollTop:j2}),_2=a_(()=>K2(v2),[v2,x_,K2]),G=S(()=>{let V=W_.current;if(!V)return;Z0((B)=>B?B.filter((A)=>A.id!==V):B),W_.current=null},[Z0]),{handleSplitterMouseDown:z,handleSplitterTouchStart:D,handleEditorSplitterMouseDown:k,handleEditorSplitterTouchStart:m,handleDockSplitterMouseDown:o,handleDockSplitterTouchStart:a}=K8({appShellRef:C0,sidebarWidthRef:I0,editorWidthRef:h0,dockHeightRef:W0}),s=S(()=>{if(!e.current)return;e.current=!1,r.current=0,M_.current=null,J_.current=null,O_(null),X_.current=!1,B_.current=!1;let V=(d.current||"").trim();if(d.current="",i.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),$_.current=null,T0.current=null,!V){b({type:"error",title:"Response stalled - No content received"});return}let A=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),g=new Date().toISOString(),T={id:w,timestamp:g,data:{type:"agent_response",content:A,agent_id:"default",is_local_stall:!0}};W_.current=w,Z0((h)=>h?T2([...h,T]):[T]),S0.current?.(),b(null)},[O_]);c(()=>{u_.current={currentHashtag:Z,searchQuery:X}},[Z,X]);let v=S(()=>{t6().then((V)=>{let B=F_.current,A=Array.isArray(V?.items)?V.items.map((w)=>({...w})).filter((w)=>!B.has(w.row_id)):[];if(A.length){K_((w)=>{if(w.length===A.length&&w.every((g,T)=>g.row_id===A[T].row_id))return w;return A});return}B.clear(),K_((w)=>w.length===0?w:[])}).catch(()=>{K_((V)=>V.length===0?V:[])})},[K_]),j_=S(async()=>{try{let V=await $3();if(V)m_(V)}catch(V){console.warn("Failed to fetch agent context:",V)}},[]),T_=S(async()=>{try{let V=await H8("web:default");if(!V||V.status!=="active"||!V.data){if(a0.current){let{currentHashtag:w,searchQuery:g}=u_.current||{};if(!w&&!g)V0()}return a0.current=!1,p_(),b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),$_.current=null,V??null}a0.current=!0;let B=V.data,A=B.turn_id||B.turnId;if(A)$0(A);if(s_({running:!0,clearSilence:!0}),N0(),b(B),V.thought&&V.thought.text)I((w)=>{if(w&&w.text&&w.text.length>=V.thought.text.length)return w;return i.current=V.thought.text,{text:V.thought.text,totalLines:V.thought.totalLines||0}});if(V.draft&&V.draft.text)M((w)=>{if(w&&w.text&&w.text.length>=V.draft.text.length)return w;return d.current=V.draft.text,{text:V.draft.text,totalLines:V.draft.totalLines||0}});return V}catch(V){return console.warn("Failed to fetch agent status:",V),null}},[p_,N0,s_,V0,$0]),x0=S(async()=>{if(!e.current)return null;if($_.current)return null;let V=J_.current||null,B=U0.current,A=Date.now();if(B.inFlight)return null;if(B.turnId===V&&A-B.lastAttemptAt<e1)return null;B.inFlight=!0,B.lastAttemptAt=A,B.turnId=V;try{let{currentHashtag:w,searchQuery:g}=u_.current||{};if(!w&&!g)await V0();return await v(),await T_()}finally{B.inFlight=!1}},[T_,v,V0]);c(()=>{let V=Math.min(1000,Math.max(100,Math.floor(t1/2))),B=setInterval(()=>{if(!e.current)return;if($_.current)return;let A=M_.current;if(!A)return;let w=Date.now(),g=w-A;if(g>=G8){b({type:"waiting",title:"Re-syncing after a quiet period…"}),x0();return}if(g>=t1){if(w-r.current>=e1){let T=Math.floor(g/1000);b({type:"waiting",title:`Waiting for model… No events for ${T}s`}),r.current=w,x0()}}},V);return()=>clearInterval(B)},[x0]);let u0=S((V)=>{if($(V),V!=="connected"){b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),$_.current=null,p_();return}if(!Y2.current){Y2.current=!0,T_();return}let{currentHashtag:B,searchQuery:A}=u_.current;if(!B&&!A)V0();T_()},[p_,V0,T_]),L8=S(async(V)=>{J(V),Z0(null),await R0(V)},[R0]),F8=S(async()=>{J(null),Y(null),Z0(null),await R0()},[R0]),E8=S(async(V)=>{if(!V||!V.trim())return;Y(V.trim()),J(null),Z0(null);try{let B=await r6(V.trim());Z0(B.results),q2(!1)}catch(B){console.error("Failed to search:",B),Z0([])}},[]),D8=S(()=>{W(!0),Y(null),J(null),Z0([])},[]),C8=S(()=>{W(!1),Y(null),R0()},[R0]),J5=S(()=>{},[]),k8=S(async(V)=>{if(!V)return;let B=V.id,A=_2?.filter((g)=>g?.data?.thread_id===B&&g?.id!==B).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let w=(g)=>{if(!g.length)return;Z_((h)=>{let t=new Set(h);return g.forEach((U_)=>t.add(U_)),t}),setTimeout(()=>{if(j2(()=>{Z0((h)=>h?h.filter((t)=>!g.includes(t.id)):h)}),Z_((h)=>{let t=new Set(h);return g.forEach((U_)=>t.delete(U_)),t}),R2.current)y2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await z8(B,A>0);if(g?.ids?.length)w(g.ids)}catch(g){let T=g?.message||"";if(A===0&&T.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await z8(B,!0);if(t?.ids?.length)w(t.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${T}`)}},[_2,j2]),Z3=S(async()=>{try{let V=await s6();H_(V8(V));let B=V?.user||{};N2((w)=>{let g=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",T=typeof B.avatar_url==="string"?B.avatar_url.trim():null,h=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(w.name===g&&w.avatar_url===T&&w.avatar_background===h)return w;return{name:g,avatar_url:T,avatar_background:h}});let A=(V?.agents||[]).find((w)=>w.id==="default");if(A?.model)L_(A.model);n(A?.name,A?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=await $3();if(V)m_(V)}catch{}},[n]);c(()=>{Z3();let V=L2("sidebarWidth",null),B=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(I0.current=B,C0.current)C0.current.style.setProperty("--sidebar-width",`${B}px`)},[Z3]);let y8=Q0||y!==null,J3=S((V)=>{if(!V||typeof V!=="object")return;let B=V.agent_id;if(!B)return;let{agent_name:A,agent_avatar:w}=V;if(!A&&w===void 0)return;let g=I_.current?.[B]||{id:B},T=g.name||null,h=g.avatar_url??g.avatarUrl??g.avatar??null,t=!1,U_=!1;if(A&&A!==g.name)T=A,U_=!0;if(w!==void 0){let o0=typeof w==="string"?w.trim():null,X3=typeof h==="string"?h.trim():null,Q2=o0||null;if(Q2!==(X3||null))h=Q2,t=!0}if(!U_&&!t)return;if(H_((o0)=>{let Q2={...o0[B]||{id:B}};if(U_)Q2.name=T;if(t)Q2.avatar_url=h;return{...o0,[B]:Q2}}),B==="default")n(T,h,t?Date.now():null)},[n]),Y3=S((V)=>{if(!V||typeof V!=="object")return;let B=V.user_name??V.userName,A=V.user_avatar??V.userAvatar,w=V.user_avatar_background??V.userAvatarBackground;if(B===void 0&&A===void 0&&w===void 0)return;N2((g)=>{let T=typeof B==="string"&&B.trim()?B.trim():g.name||"You",h=A===void 0?g.avatar_url:typeof A==="string"&&A.trim()?A.trim():null,t=w===void 0?g.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(g.name===T&&g.avatar_url===h&&g.avatar_background===t)return g;return{name:T,avatar_url:h,avatar_background:t}})},[]),V1=S((V)=>{if(!V||typeof V!=="object")return;let B=V.model??V.current;if(B!==void 0)L_(B);if(V.thinking_level!==void 0)k_(V.thinking_level??null);if(V.supports_thinking!==void 0)y_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)b_(V.provider_usage??null)},[]),A2=S(()=>{a6().then((V)=>{if(V)V1(V)}).catch(()=>{})},[V1]),A8=S((V)=>{let B=V?.row_id;if(B==null)return;F_.current.add(B),K_((A)=>A.filter((w)=>w?.row_id!==B)),e6(B).then(()=>{v()}).catch((A)=>{console.warn("[queue] Failed to steer queued item:",A),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),F_.current.delete(B),v()})},[v,K_,q_]),b8=S((V)=>{let B=V?.row_id;if(B==null)return;F_.current.add(B),K_((A)=>A.filter((w)=>w?.row_id!==B)),_5(B).then(()=>{v()}).catch((A)=>{console.warn("[queue] Failed to remove queued item:",A),q_("Failed to remove message","The queued message could not be removed.","warning"),F_.current.delete(B),v()})},[v,K_,q_]),M8=S((V)=>{if(!V||typeof V!=="object")return;if(V?.queued==="followup"||V?.queued==="steer"){v();return}let B=V?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))v()},[v]),O1=S(()=>{A2(),v()},[A2,v]);c(()=>{O1();let V=setInterval(()=>{A2(),v()},60000);return()=>clearInterval(V)},[O1,A2,v]);let B1=S((V,B)=>{let A=B?.turn_id;if(J3(B),Y3(B),V==="ui_theme"){N4(B);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))N0()}if(V==="connected"){b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),$_.current=null,p_(),H8("web:default").then((t)=>{if(!t||t.status!=="active"||!t.data)return;let U_=t.data,o0=U_.turn_id||U_.turnId;if(o0)$0(o0);if(s_({clearSilence:!0}),e0(U_),t.thought&&t.thought.text)i.current=t.thought.text,I({text:t.thought.text,totalLines:t.thought.totalLines||0});if(t.draft&&t.draft.text)d.current=t.draft.text,M({text:t.draft.text,totalLines:t.draft.totalLines||0})}).catch((t)=>{console.warn("Failed to fetch agent status:",t)});let{currentHashtag:T,searchQuery:h}=u_.current||{};if(!T&&!h)V0();O1();return}if(V==="agent_status"){if(B.type==="done"||B.type==="error"){if(A&&J_.current&&A!==J_.current)return;if(B.type==="done"){v0(A||J_.current);let{currentHashtag:T,searchQuery:h}=u_.current||{};if(!T&&!h)V0();if(B.context_usage)m_(B.context_usage)}if(a0.current=!1,p_(),F_.current.clear(),v(),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null),B.type==="error")b({type:"error",title:B.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(A)$0(A);if(s_({running:!0,clearSilence:!0}),B.type==="thinking")d.current="",i.current="",M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0});r_.current=B,b((T)=>{if(T&&T.type===B.type&&T.title===B.title)return T;return B})}return}if(V==="agent_steer_queued"){if(A&&J_.current&&A!==J_.current)return;let T=A||J_.current;if(!T)return;v_.current=T,N_(T);return}if(V==="agent_followup_queued"){let T=B?.row_id,h=B?.content;if(T!=null&&typeof h==="string"&&h.trim())K_((t)=>{if(t.some((U_)=>U_?.row_id===T))return t;return[...t,{row_id:T,content:h,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});v();return}if(V==="agent_followup_consumed"){let T=B?.row_id;if(T!=null)K_((h)=>h.filter((t)=>t.row_id!==T));v(),V0();return}if(V==="agent_followup_removed"){let T=B?.row_id;if(T!=null)F_.current.add(T),K_((h)=>h.filter((t)=>t.row_id!==T));v();return}if(V==="agent_draft_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)$0(A);if(s_({running:!0,clearSilence:!0}),B?.reset)d.current="";if(B?.delta)d.current+=B.delta;let T=Date.now();if(!E0.current||T-E0.current>=100){E0.current=T;let h=d.current,t=_3(h);if(B_.current)M((U_)=>({text:U_?.text||"",totalLines:t,fullText:h}));else M({text:h,totalLines:t})}return}if(V==="agent_draft"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)$0(A);s_({running:!0,clearSilence:!0});let T=B.text||"",h=B.mode||(B.kind==="plan"?"replace":"append"),t=Number.isFinite(B.total_lines)?B.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(h==="replace")P(T);else P((U_)=>(U_||"")+T);else if(!B_.current)d.current=T,M({text:T,totalLines:t});return}if(V==="agent_thought_delta"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)$0(A);if(s_({running:!0,clearSilence:!0}),B?.reset)i.current="";if(typeof B?.delta==="string")i.current+=B.delta;let T=Date.now();if(X_.current&&(!D0.current||T-D0.current>=100)){D0.current=T;let h=i.current;I((t)=>({text:t?.text||"",totalLines:_3(h),fullText:h}))}return}if(V==="agent_thought"){if(A&&J_.current&&A!==J_.current)return;if(A&&!J_.current)$0(A);s_({running:!0,clearSilence:!0});let T=B.text||"",h=Number.isFinite(B.total_lines)?B.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(!X_.current)i.current=T,I({text:T,totalLines:h});return}if(V==="agent_request"){if(console.log("Agent request:",B),A&&J_.current&&A!==J_.current)return;if(A)$0(A);s_({running:!0,clearSilence:!0}),l(B),$_.current=B;return}if(V==="agent_request_timeout"){if(console.log("Agent request timeout:",B),A&&J_.current&&A!==J_.current)return;l(null),$_.current=null,p_(),b({type:"error",title:"Permission request timed out"});return}if(V==="model_changed"){if(B?.model!==void 0)L_(B.model);if(B?.thinking_level!==void 0)k_(B.thinking_level??null);if(B?.supports_thinking!==void 0)y_(Boolean(B.supports_thinking));$3().then((T)=>{if(T)m_(T)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}let{currentHashtag:w,searchQuery:g}=u_.current;if(V==="agent_response")G(),T0.current={post:B,turnId:J_.current};if(!w&&!g&&(V==="new_post"||V==="agent_response"))Z0((T)=>{if(!T)return[B];if(T.some((h)=>h.id===B.id))return T;return[...T,B]}),S0.current?.();if(V==="interaction_updated")Z0((T)=>{if(!T)return T;if(!T.some((h)=>h.id===B.id))return T;return T.map((h)=>h.id===B.id?B:h)});if(V==="interaction_deleted"){let T=B?.ids||[];if(T.length){j2(()=>{Z0((U_)=>U_?U_.filter((o0)=>!T.includes(o0.id)):U_)});let{currentHashtag:h,searchQuery:t}=u_.current;if(R2.current&&!h&&!t)y2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p_,N0,y2,s_,v0,j2,V0,G,$0,e0,J3,Y3,A2,v,K_]);c(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=B1,V.reset=()=>{G(),p_(),b(null),M({text:"",totalLines:0}),P(""),I({text:"",totalLines:0}),l(null)},V.finalize=()=>s(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[p_,s,B1,G]),J8({handleSseEvent:B1,handleConnectionStatusChange:u0,loadPosts:R0}),c(()=>{if(!_2||_2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let B=V.slice(5);n0(B),history.replaceState(null,"",location.pathname+location.search)},[_2,n0]);let q1=y!==null;c(()=>{if(_!=="connected")return;let B=setInterval(()=>{let{currentHashtag:A,searchQuery:w}=u_.current||{},g=!A&&!w;if(q1){if(g)V0();v(),T_(),j_()}else{if(g)V0();T_(),j_()}},q1?15000:60000);return()=>clearInterval(B)},[_,q1,T_,j_,v,V0]);let P8=S(()=>{B0((V)=>!V)},[]);c(()=>{if(!g_)return;if(typeof window>"u")return;let V=C0.current;if(!V)return;if(!h0.current){let B=L2("editorWidth",null),A=I0.current||280;h0.current=Number.isFinite(B)?B:A}if(V.style.setProperty("--editor-width",`${h0.current}px`),!W0.current){let B=L2("dockHeight",null);W0.current=Number.isFinite(B)?B:200}V.style.setProperty("--dock-height",`${W0.current}px`)},[g_]);let z2=l_.getDockPanes().length>0,[z1,w8]=u(!1),u2=S(()=>w8((V)=>!V),[]);c(()=>{if(!z2)return;let V=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),u2()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[u2,z2]);let S8=Boolean(__&&__===(y?.turn_id||Y_));return q`
        <div class=${`app-shell${E_?"":" workspace-collapsed"}${g_?" editor-open":""}`} ref=${C0}>
            <${e4}
                onFileSelect=${V_}
                visible=${E_}
                active=${E_||g_}
                onOpenEditor=${d_}
            />
            <button
                class=${`workspace-toggle-tab${E_?" open":" closed"}`}
                onClick=${P8}
                title=${E_?"Hide workspace":"Show workspace"}
                aria-label=${E_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${z} onTouchStart=${D}></div>
            ${g_&&q`
                <div class="editor-pane-container">
                    <${_8}
                        tabs=${H0}
                        activeId=${n_}
                        onActivate=${j0}
                        onClose=${r0}
                        onCloseOthers=${G2}
                        onCloseAll=${M0}
                        onTogglePin=${P0}
                        onTogglePreview=${K0}
                        previewTabs=${o_}
                        onToggleDock=${z2?u2:void 0}
                        dockVisible=${z2&&z1}
                    />
                    <div class="editor-pane-host" ref=${w0}></div>
                    ${n_&&o_.has(n_)&&q`
                        <${Z8}
                            getContent=${()=>R_.current?.getContent?.()}
                            path=${n_}
                            onClose=${()=>K0(n_)}
                        />
                    `}
                    ${z2&&z1&&q`<div class="dock-splitter" onMouseDown=${o} onTouchStart=${a}></div>`}
                    ${z2&&q`<div class=${`dock-panel${z1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${u2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${k} onTouchStart=${m}></div>
            `}
            <div class="container">
                ${X&&O8()&&q`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${F8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${I4}
                    posts=${_2}
                    hasMore=${G1}
                    onLoadMore=${N1}
                    timelineRef=${_0}
                    onHashtagClick=${L8}
                    onMessageRef=${f0}
                    onScrollToMessage=${n0}
                    onFileRef=${G0}
                    onPostClick=${void 0}
                    onDeletePost=${k8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${z_}
                    user=${s0}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${x}
                    searchQuery=${X}
                />
                <${k4}
                    status=${y}
                    draft=${R}
                    plan=${U}
                    thought=${C}
                    pendingRequest=${p}
                    intent=${E}
                    turnId=${Y_}
                    steerQueued=${S8}
                    onPanelToggle=${z0}
                />
                <${Z4}
                    onPost=${()=>{R0(),B2()}}
                    onFocus=${B2}
                    searchMode=${j}
                    onSearch=${E8}
                    onEnterSearch=${D8}
                    onExitSearch=${C8}
                    fileRefs=${N}
                    onRemoveFileRef=${D_}
                    onClearFileRefs=${h_}
                    messageRefs=${K}
                    onRemoveMessageRef=${V2}
                    onClearMessageRefs=${O2}
                    activeEditorPath=${n_}
                    onAttachEditorFile=${l0}
                    onOpenFilePill=${G0}
                    followupQueueCount=${A0}
                    followupQueueItems=${x_}
                    onInjectQueuedFollowup=${A8}
                    onRemoveQueuedFollowup=${b8}
                    onMessageResponse=${M8}
                    isAgentActive=${y8}
                    activeModel=${A_}
                    modelUsage=${S_}
                    thinkingLevel=${Q_}
                    supportsThinking=${w_}
                    contextUsage=${O0}
                    notificationsEnabled=${b0}
                    notificationPermission=${t_}
                    onToggleNotifications=${X0}
                    onModelChange=${L_}
                    onModelStateChange=${V1}
                />
                <${A4} status=${_} />
                <${y4}
                    request=${p}
                    onRespond=${()=>{l(null),$_.current=null}}
                />
            </div>
        </div>
    `}S3(q`<${Z5} />`,document.getElementById("app"));

//# debugId=08D129AA1FC22EAF64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
