var u6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var n2,G_,k3,M2,C3,V3,m6,i2={},y3=[],c6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Y2(_,$){for(var Z in $)_[Z]=$[Z];return _}function A3(_){var $=_.parentNode;$&&$.removeChild(_)}function M3(_,$,Z){var J,X,Y,K={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?n2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return c2(_,K,J,X,null)}function c2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++k3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function o2(_){return _.children}function h2(_,$){this.props=_,this.context=$}function L2(_,$){if($==null)return _.__?L2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?L2(_):null}function b3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return b3(_)}}function N3(_){(!_.__d&&(_.__d=!0)&&M2.push(_)&&!l2.__r++||V3!==G_.debounceRendering)&&((V3=G_.debounceRendering)||C3)(l2)}function l2(){for(var _;l2.__r=M2.length;)_=M2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),M2=[],_.some(function($){var Z,J,X,Y,K,G;$.__d&&(K=(Y=(Z=$).__v).__e,(G=Z.__P)&&(J=[],(X=Y2({},Y)).__v=Y.__v+1,D1(G,Y,X,Z.__n,G.ownerSVGElement!==void 0,Y.__h!=null?[K]:null,J,K==null?L2(Y):K,Y.__h),x3(J,Y),Y.__e!=K&&b3(Y)))})}function P3(_,$,Z,J,X,Y,K,G,V,O){var j,H,k,L,A,M,v,b=J&&J.__k||y3,U=b.length;for(Z.__k=[],j=0;j<$.length;j++)if((L=Z.__k[j]=(L=$[j])==null||typeof L=="boolean"?null:typeof L=="string"||typeof L=="number"||typeof L=="bigint"?c2(null,L,null,null,L):Array.isArray(L)?c2(o2,{children:L},null,null,null):L.__b>0?c2(L.type,L.props,L.key,null,L.__v):L)!=null){if(L.__=Z,L.__b=Z.__b+1,(k=b[j])===null||k&&L.key==k.key&&L.type===k.type)b[j]=void 0;else for(H=0;H<U;H++){if((k=b[H])&&L.key==k.key&&L.type===k.type){b[H]=void 0;break}k=null}D1(_,L,k=k||i2,X,Y,K,G,V,O),A=L.__e,(H=L.ref)&&k.ref!=H&&(v||(v=[]),k.ref&&v.push(k.ref,null,L),v.push(H,L.__c||A,L)),A!=null?(M==null&&(M=A),typeof L.type=="function"&&L.__k!=null&&L.__k===k.__k?L.__d=V=w3(L,V,_):V=S3(_,L,k,b,A,V),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=V):_.value=""):V&&k.__e==V&&V.parentNode!=_&&(V=L2(k))}for(Z.__e=M,j=U;j--;)b[j]!=null&&(typeof Z.type=="function"&&b[j].__e!=null&&b[j].__e==Z.__d&&(Z.__d=L2(J,j+1)),T3(b[j],b[j]));if(v)for(j=0;j<v.length;j++)I3(v[j],v[++j],v[++j])}function w3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?w3(X,$,Z):S3(Z,X,X,_.__k,X.__e,$));return $}function S3(_,$,Z,J,X,Y){var K,G,V;if($.__d!==void 0)K=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),K=null;else{for(G=Y,V=0;(G=G.nextSibling)&&V<J.length;V+=2)if(G==X)break _;_.insertBefore(X,Y),K=Y}return K!==void 0?K:X.nextSibling}function O3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||c6.test($)?Z:Z+"px"}function m2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||O3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||O3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?z3:q3,Y):_.removeEventListener($,Y?z3:q3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(K){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function q3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function z3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function D1(_,$,Z,J,X,Y,K,G,V){var O,j,H,k,L,A,M,v,b,U,P,C=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(V=Z.__h,G=$.__e=Z.__e,$.__h=null,Y=[G]),(O=G_.__b)&&O($);try{_:if(typeof C=="function"){if(v=$.props,b=(O=C.contextType)&&J[O.__c],U=O?b?b.props.value:O.__:J,Z.__c?M=(j=$.__c=Z.__c).__=j.__E:(("prototype"in C)&&C.prototype.render?$.__c=j=new C(v,U):($.__c=j=new h2(v,U),j.constructor=C,j.render=p6),b&&b.sub(j),j.props=v,j.state||(j.state={}),j.context=U,j.__n=J,H=j.__d=!0,j.__h=[]),j.__s==null&&(j.__s=j.state),C.getDerivedStateFromProps!=null&&(j.__s==j.state&&(j.__s=Y2({},j.__s)),Y2(j.__s,C.getDerivedStateFromProps(v,j.__s))),k=j.props,L=j.state,H)C.getDerivedStateFromProps==null&&j.componentWillMount!=null&&j.componentWillMount(),j.componentDidMount!=null&&j.__h.push(j.componentDidMount);else{if(C.getDerivedStateFromProps==null&&v!==k&&j.componentWillReceiveProps!=null&&j.componentWillReceiveProps(v,U),!j.__e&&j.shouldComponentUpdate!=null&&j.shouldComponentUpdate(v,j.__s,U)===!1||$.__v===Z.__v){j.props=v,j.state=j.__s,$.__v!==Z.__v&&(j.__d=!1),j.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(f){f&&(f.__=$)}),j.__h.length&&K.push(j);break _}j.componentWillUpdate!=null&&j.componentWillUpdate(v,j.__s,U),j.componentDidUpdate!=null&&j.__h.push(function(){j.componentDidUpdate(k,L,A)})}j.context=U,j.props=v,j.state=j.__s,(O=G_.__r)&&O($),j.__d=!1,j.__v=$,j.__P=_,O=j.render(j.props,j.state,j.context),j.state=j.__s,j.getChildContext!=null&&(J=Y2(Y2({},J),j.getChildContext())),H||j.getSnapshotBeforeUpdate==null||(A=j.getSnapshotBeforeUpdate(k,L)),P=O!=null&&O.type===o2&&O.key==null?O.props.children:O,P3(_,Array.isArray(P)?P:[P],$,Z,J,X,Y,K,G,V),j.base=$.__e,$.__h=null,j.__h.length&&K.push(j),M&&(j.__E=j.__=null),j.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=h6(Z.__e,$,Z,J,X,Y,K,V);(O=G_.diffed)&&O($)}catch(f){$.__v=null,(V||Y!=null)&&($.__e=G,$.__h=!!V,Y[Y.indexOf(G)]=null),G_.__e(f,$,Z)}}function x3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function h6(_,$,Z,J,X,Y,K,G){var V,O,j,H=Z.props,k=$.props,L=$.type,A=0;if(L==="svg"&&(X=!0),Y!=null){for(;A<Y.length;A++)if((V=Y[A])&&(V===_||(L?V.localName==L:V.nodeType==3))){_=V,Y[A]=null;break}}if(_==null){if(L===null)return document.createTextNode(k);_=X?document.createElementNS("http://www.w3.org/2000/svg",L):document.createElement(L,k.is&&k),Y=null,G=!1}if(L===null)H===k||G&&_.data===k||(_.data=k);else{if(Y=Y&&n2.call(_.childNodes),O=(H=Z.props||i2).dangerouslySetInnerHTML,j=k.dangerouslySetInnerHTML,!G){if(Y!=null)for(H={},A=0;A<_.attributes.length;A++)H[_.attributes[A].name]=_.attributes[A].value;(j||O)&&(j&&(O&&j.__html==O.__html||j.__html===_.innerHTML)||(_.innerHTML=j&&j.__html||""))}if(function(M,v,b,U,P){var C;for(C in b)C==="children"||C==="key"||C in v||m2(M,C,null,b[C],U);for(C in v)P&&typeof v[C]!="function"||C==="children"||C==="key"||C==="value"||C==="checked"||b[C]===v[C]||m2(M,C,v[C],b[C],U)}(_,k,H,X,G),j)$.__k=[];else if(A=$.props.children,P3(_,Array.isArray(A)?A:[A],$,Z,J,X&&L!=="foreignObject",Y,K,Y?Y[0]:Z.__k&&L2(Z,0),G),Y!=null)for(A=Y.length;A--;)Y[A]!=null&&A3(Y[A]);G||(("value"in k)&&(A=k.value)!==void 0&&(A!==_.value||L==="progress"&&!A)&&m2(_,"value",A,H.value,!1),("checked"in k)&&(A=k.checked)!==void 0&&A!==_.checked&&m2(_,"checked",A,H.checked,!1))}return _}function I3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function T3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||I3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&T3(J[X],$,typeof _.type!="function");Z||_.__e==null||A3(_.__e),_.__e=_.__d=void 0}function p6(_,$,Z){return this.constructor(_,Z)}function f3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],D1($,_=(!J&&Z||$).__k=M3(o2,null,[_]),X||i2,i2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?n2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),x3(Y,_)}n2=y3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},k3=0,h2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Y2({},this.state),typeof _=="function"&&(_=_(Y2({},Z),this.props)),_&&Y2(Z,_),_!=null&&this.__v&&($&&this.__h.push($),N3(this))},h2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),N3(this))},h2.prototype.render=o2,M2=[],C3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l2.__r=0,m6=0;var d2,b0,B3,b2=0,F1=[],Q3=G_.__b,U3=G_.__r,H3=G_.diffed,L3=G_.__c,F3=G_.unmount;function k1(_,$){G_.__h&&G_.__h(b0,_,b2||$),b2=0;var Z=b0.__H||(b0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function T(_){return b2=1,i6(R3,_)}function i6(_,$,Z){var J=k1(d2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):R3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=b0),J.__}function m(_,$){var Z=k1(d2++,3);!G_.__s&&v3(Z.__H,$)&&(Z.__=_,Z.__H=$,b0.__H.__h.push(Z))}function F(_){return b2=5,$0(function(){return{current:_}},[])}function $0(_,$){var Z=k1(d2++,7);return v3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function S(_,$){return b2=8,$0(function(){return _},$)}function l6(){F1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(p2),_.__H.__h.forEach(E1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),F1=[]}G_.__b=function(_){b0=null,Q3&&Q3(_)},G_.__r=function(_){U3&&U3(_),d2=0;var $=(b0=_.__c).__H;$&&($.__h.forEach(p2),$.__h.forEach(E1),$.__h=[])},G_.diffed=function(_){H3&&H3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(F1.push($)!==1&&B3===G_.requestAnimationFrame||((B3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),E3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);E3&&(J=requestAnimationFrame(X))})(l6)),b0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(p2),Z.__h=Z.__h.filter(function(J){return!J.__||E1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),L3&&L3(_,$)},G_.unmount=function(_){F3&&F3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(p2)}catch(Z){G_.__e(Z,$.__v)}};var E3=typeof requestAnimationFrame=="function";function p2(_){var $=b0;typeof _.__c=="function"&&_.__c(),b0=$}function E1(_){var $=b0;_.__c=_.__(),b0=$}function v3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function R3(_,$){return typeof $=="function"?$(_):$}var g3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],G=$[Y]?($[0]|=K?1:2,Z[$[Y++]]):$[++Y];K===3?J[0]=G:K===4?J[1]=Object.assign(J[1]||{},G):K===5?(J[1]=J[1]||{})[$[++Y]]=G:K===6?J[1][$[++Y]]+=G+"":K?(X=_.apply(G,g3(_,G,Z,["",null])),J.push(X),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(G)}return J},D3=new Map,z=function(_){var $=D3.get(this);return $||($=new Map,D3.set(this,$)),($=g3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,K="",G="",V=[0],O=function(k){Y===1&&(k||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,k,K):Y===3&&(k||K)?(V.push(3,k,K),Y=2):Y===2&&K==="..."&&k?V.push(4,k,0):Y===2&&K&&!k?V.push(5,0,!0,K):Y>=5&&((K||!k&&Y===5)&&(V.push(Y,0,K,X),Y=6),k&&(V.push(Y,k,0,X),Y=6)),K=""},j=0;j<Z.length;j++){j&&(Y===1&&O(),O(j));for(var H=0;H<Z[j].length;H++)J=Z[j][H],Y===1?J==="<"?(O(),V=[V],Y=3):K+=J:Y===4?K==="--"&&J===">"?(Y=1,K=""):K=J+K[0]:G?J===G?G="":K+=J:J==='"'||J==="'"?G=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=K,K=""):J==="/"&&(Y<5||Z[j][H+1]===">")?(O(),Y===3&&(V=V[0]),Y=V,(V=V[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):K+=J),Y===3&&K==="!--"&&(Y=4,V=V[0])}return O(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(M3);async function r_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function r2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return r_(Z)}async function u3(_,$=50,Z=0){return r_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function m3(_,$=50,Z=0){return r_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function c3(_){return r_(`/thread/${_}`)}async function h3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return r_(Z,{method:"DELETE"})}async function C1(_,$,Z=null,J=[],X=null){return r_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function p3(){return r_("/agents")}async function i3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/status${$}`)}async function y1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/context${$}`)}async function A1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/queue-state${$}`)}async function M1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function b1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function O2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/models${$}`)}async function l3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function P1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function n3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function o3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r_(Z)}async function d3(_,$,Z){return r_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function m0(_){return`/media/${_}`}function r3(_){return`/media/${_}/thumbnail`}async function P2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function s3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function a3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function s2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return r_(J)}async function t3(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r_($)}async function e3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return r_(X)}async function _4(_){return r_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function w1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:J});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),O=Error(V.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=V.code,O}return G.json()}async function $4(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function Z4(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function J4(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function Y4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r_($,{method:"DELETE"})}async function a2(_,$=!1){return r_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function S1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function X4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class x1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function c0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function R_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F2(_,$=!1){let Z=c0(_);if(Z===null)return $;return Z==="true"}function E2(_,$=null){let Z=c0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function s0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:K="file"}){let G=`${_}-file-pill`,V=`${_}-file-name`,O=`${_}-file-remove`,j=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${G} title=${Z||$} onClick=${X}>
      ${j}
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
  `}var o6=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function d6({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${K4(Z)} / ${K4(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,K=2*Math.PI*7,G=$/100*K,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
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
    `}function K4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function j4({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:O=[],onRemoveMessageRef:j,onClearMessageRefs:H,activeModel:k=null,modelUsage:L=null,thinkingLevel:A=null,supportsThinking:M=!1,contextUsage:v=null,currentBranch:b=null,currentBranchRepoPath:U=null,notificationsEnabled:P=!1,notificationPermission:C="default",onToggleNotifications:f,onModelChange:i,onModelStateChange:d,activeEditorPath:Z_=null,onAttachEditorFile:Q_,onOpenFilePill:__,followupQueueItems:V_=[],onInjectQueuedFollowup:E_,onRemoveQueuedFollowup:n,onMessageResponse:J_,isAgentActive:t=!1}){let[o,$_]=T(""),[j_,Y_]=T(""),[U_,B_]=T([]),[S_,s_]=T(!1),[b_,l_]=T([]),[P_,g_]=T(0),[X_,O_]=T(!1),[N_,k_]=T(!1),[q_,f_]=T(!1),[I_,A_]=T([]),[z_,w_]=T(!1),M_=F(null),c_=F(null),x_=F(null),Z0=F(null),F_=F(0),I0=200,D0=(Q)=>{let R=new Set,p=[];for(let W_ of Q||[]){if(typeof W_!=="string")continue;let C_=W_.trim();if(!C_||R.has(C_))continue;R.add(C_),p.push(C_)}return p},Q0=()=>{let Q=c0("piclaw_compose_history");if(!Q)return[];try{let R=JSON.parse(Q);if(!Array.isArray(R))return[];return D0(R)}catch{return[]}},_0=(Q)=>{R_("piclaw_compose_history",JSON.stringify(Q))},a_=F(Q0()),x=F(-1),e=F(""),v_=o.trim()||U_.length>0||K.length>0||O.length>0,X0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),U0=typeof window<"u"&&typeof Notification<"u",K0=typeof window<"u"?Boolean(window.isSecureContext):!1,a0=U0&&K0&&C!=="denied",j0=C==="granted"&&P,n_=j0?"Disable notifications":"Enable notifications",W0=k||"",h_=M&&A?` (${A})`:"",G0=h_.trim()?`${A}`:"",h0=typeof L?.hint_short==="string"?L.hint_short.trim():"",H0=typeof b==="string"?b.trim():"",j2=U&&U!=="."?`Git branch: ${H0} (${U})`:`Git branch: ${H0}`,k0=[G0||null,h0||null].filter(Boolean).join(" • "),T0=[W0?`Current model: ${W0}${h_}`:null,L?.plan?`Plan: ${L.plan}`:null,h0||null,L?.primary?.reset_description||null,L?.secondary?.reset_description||null].filter(Boolean),f0=N_?"Switching model…":T0.join(" • ")||`Current model: ${W0}${h_} (tap to open model picker)`,V0=(Q)=>{if(!Q||typeof Q!=="object")return;let R=Q.model??Q.current;if(typeof d==="function")d({model:R??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(R&&typeof i==="function")i(R)},p0=(Q)=>{let R=Q||M_.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},v2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){O_(!1),l_([]);return}let R=Q.toLowerCase().split(" ")[0];if(R.length<1){O_(!1),l_([]);return}let p=o6.filter((W_)=>W_.name.startsWith(R)||W_.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(p.length>0&&!(p.length===1&&p[0].name===R))l_(p),g_(0),O_(!0);else O_(!1),l_([])},W2=(Q)=>{let R=o,p=R.indexOf(" "),W_=p>=0?R.slice(p):"",C_=Q.name+W_;$_(C_),O_(!1),l_([]),requestAnimationFrame(()=>{let T_=M_.current;if(!T_)return;let D_=C_.length;T_.selectionStart=D_,T_.selectionEnd=D_,T_.focus()})},N0=(Q)=>{if(Z)Y_(Q);else $_(Q),v2(Q);requestAnimationFrame(()=>p0())},o_=(Q)=>{let R=Z?j_:o,p=R&&!R.endsWith(`
`)?`
`:"",W_=`${R}${p}${Q}`.trimStart();N0(W_)},w0=(Q)=>{let R=Q?.command?.model_label;if(R)return R;let p=Q?.command?.message;if(typeof p==="string"){let W_=p.match(/•\s+([^\n]+?)\s+\(current\)/);if(W_?.[1])return W_[1].trim()}return null},A0=async(Q)=>{if(Z||N_)return;k_(!0);try{let R=await C1("default",Q,null,[]),p=w0(R);V0({model:p??k??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let W_=await O2();if(W_)V0(W_)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{k_(!1)}},p_=async()=>{await A0("/cycle-model")},i_=async(Q)=>{if(!Q||N_)return;if(await A0(`/model ${Q}`))f_(!1)},L0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),f_((R)=>!R)},S0=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return t?"queue":null},C0=async(Q,R,p={})=>{let{includeMedia:W_=!0,includeFileRefs:C_=!0,includeMessageRefs:T_=!0,clearAfterSubmit:D_=!0,recordHistory:y0=!0}=p||{},d0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:o,q2=typeof d0==="string"?d0:"";if(!q2.trim()&&(W_?U_.length===0:!0)&&(C_?K.length===0:!0)&&(T_?O.length===0:!0))return;O_(!1),l_([]);let M0=W_?[...U_]:[],z2=C_?[...K]:[],B2=T_?[...O]:[],u_=q2.trim();if(y0&&u_){let m_=a_.current,q0=D0(m_.filter(($2)=>$2!==u_));if(q0.push(u_),q0.length>200)q0.splice(0,q0.length-200);a_.current=q0,_0(q0),x.current=-1,e.current=""}if(D_)$_(""),B_([]),V?.(),H?.();(async()=>{try{let m_=[];for(let E0 of M0){let R0=await l3(E0);m_.push(R0.id)}let q0=z2.length?`Files:
${z2.map((E0)=>`- ${E0}`).join(`
`)}`:"",$2=B2.length?`Referenced messages:
${B2.map((E0)=>`- message:${E0}`).join(`
`)}`:"",z0=m_.length?`Images:
${m_.map((E0,R0)=>{let Z2=M0[R0]?.name||`image-${R0+1}`;return`- attachment:${E0} (${Z2})`}).join(`
`)}`:"",F0=[u_,q0,$2,z0].filter(Boolean).join(`

`),v0=await C1("default",F0,null,m_,S0(R));if(J_?.(v0),v0?.command){V0({model:v0.command.model_label??k??null,thinking_level:v0.command.thinking_level,supports_thinking:v0.command.supports_thinking});try{let E0=await O2();if(E0)V0(E0)}catch{}}_?.()}catch(m_){console.error("Failed to post:",m_)}})()},t0=(Q)=>{E_?.(Q)},O0=(Q)=>{if(Q.isComposing)return;if(Z&&Q.key==="Escape"){Q.preventDefault(),Y_(""),Y?.();return}if(X_&&b_.length>0){let R=M_.current?.value??(Z?j_:o);if(!String(R||"").startsWith("/"))O_(!1),l_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),g_((p)=>(p+1)%b_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),g_((p)=>(p-1+b_.length)%b_.length);return}if(Q.key==="Tab"){Q.preventDefault(),W2(b_[P_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(M_.current?.value??(Z?j_:o)).includes(" ")){Q.preventDefault();let C_=b_[P_];O_(!1),l_([]),C0(C_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),O_(!1),l_([]);return}}}if(!Z&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let R=M_.current;if(!R)return;let p=R.value||"",W_=R.selectionStart===0&&R.selectionEnd===0,C_=R.selectionStart===p.length&&R.selectionEnd===p.length;if(Q.key==="ArrowUp"&&W_||Q.key==="ArrowDown"&&C_){let T_=a_.current;if(!T_.length)return;Q.preventDefault();let D_=x.current;if(Q.key==="ArrowUp"){if(D_===-1)e.current=p,D_=T_.length-1;else if(D_>0)D_-=1;x.current=D_,N0(T_[D_]||"")}else{if(D_===-1)return;if(D_<T_.length-1)D_+=1,x.current=D_,N0(T_[D_]||"");else x.current=-1,N0(e.current||""),e.current=""}requestAnimationFrame(()=>{let y0=M_.current;if(!y0)return;let d0=y0.value.length;y0.selectionStart=d0,y0.selectionEnd=d0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let R=M_.current?.value??(Z?j_:o);if(Z){if(R.trim())J?.(R.trim())}else C0(R,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let R=M_.current?.value??(Z?j_:o);if(Z){if(R.trim())J?.(R.trim())}else C0(R)}},d_=(Q)=>{let R=Array.from(Q||[]).filter((p)=>p&&p.type&&p.type.startsWith("image/"));if(!R.length)return;B_((p)=>[...p,...R])},i0=(Q)=>{d_(Q.target.files),Q.target.value=""},G2=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),F_.current+=1,s_(!0)},l0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),F_.current=Math.max(0,F_.current-1),F_.current===0)s_(!1)},n0=(Q)=>{if(Z)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";s_(!0)},e0=(Q)=>{if(Z)return;Q.preventDefault(),Q.stopPropagation(),F_.current=0,s_(!1),d_(Q.dataTransfer?.files||[])},J0=(Q)=>{if(Z)return;let R=Q.clipboardData?.items;if(!R||!R.length)return;let p=[];for(let W_ of R){if(W_.kind!=="file")continue;let C_=W_.getAsFile?.();if(C_)p.push(C_)}if(p.length>0)Q.preventDefault(),d_(p)},o0=(Q)=>{B_((R)=>R.filter((p,W_)=>W_!==Q))},x0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:R,longitude:p,accuracy:W_}=Q.coords,C_=`${R.toFixed(5)}, ${p.toFixed(5)}`,T_=Number.isFinite(W_)?` ±${Math.round(W_)}m`:"",D_=`https://maps.google.com/?q=${R},${p}`,y0=`Location: ${C_}${T_} ${D_}`;o_(y0)},(Q)=>{let R=Q?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!q_)return;w_(!0),O2().then((Q)=>{let R=Array.isArray(Q?.models)?Q.models.filter((p)=>typeof p==="string"&&p.trim().length>0):[];A_(R),V0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),A_([])}).finally(()=>{w_(!1)})},[q_,k]),m(()=>{if(Z)f_(!1)},[Z]),m(()=>{if(!q_)return;let Q=(R)=>{let p=x_.current,W_=Z0.current,C_=R.target;if(p&&p.contains(C_))return;if(W_&&W_.contains(C_))return;f_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[q_]);let _2=(Q)=>{let R=Q.target.value;p0(Q.target),N0(R)};return m(()=>{requestAnimationFrame(()=>p0())},[o,j_,Z]),z`
        <div class="compose-box">
            ${!Z&&V_.length>0&&z`
                <div class="compose-queue-stack">
                    ${V_.map((Q)=>{let R=typeof Q?.content==="string"?Q.content:"";if(!R.trim())return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${R}>
                                    ${R}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>t0(Q)}
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
                                    onClick=${()=>n?.(Q)}
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
                class=${`compose-input-wrapper${S_?" drag-active":""}`}
                onDragEnter=${G2}
                onDragOver=${n0}
                onDragLeave=${l0}
                onDrop=${e0}
            >
                <div class="compose-input-main">
                    ${(K.length>0||U_.length>0||O.length>0)&&z`
                        <div class="compose-file-refs">
                            ${O.map((Q)=>{return z`
                                    <${s0}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>j?.(Q)}
                                    />
                                `})}
                            ${K.map((Q)=>{let R=Q.split("/").pop()||Q;return z`
                                    <${s0}
                                        prefix="compose"
                                        label=${R}
                                        title=${Q}
                                        onClick=${()=>__?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(Q)}
                                    />
                                `})}
                            ${U_.map((Q,R)=>{let p=Q?.name||`image-${R+1}`;return z`
                                    <${s0}
                                        key=${p+R}
                                        prefix="compose"
                                        label=${p}
                                        title=${p}
                                        removeTitle="Remove image"
                                        onRemove=${()=>o0(R)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${M_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?j_:o}
                        onInput=${_2}
                        onKeyDown=${O0}
                        onPaste=${J0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${X_&&b_.length>0&&z`
                        <div class="slash-autocomplete" ref=${c_}>
                            ${b_.map((Q,R)=>z`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${R===P_?" active":""}`}
                                    onMouseDown=${(p)=>{p.preventDefault(),W2(Q)}}
                                    onMouseEnter=${()=>g_(R)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${q_&&!Z&&z`
                        <div class="compose-model-popup" ref=${x_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${z_&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!z_&&I_.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!z_&&I_.map((Q)=>z`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${k===Q?" active":""}`}
                                        onClick=${()=>{i_(Q)}}
                                        disabled=${N_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{p_()}}
                                    disabled=${N_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&k&&z`
                    <div class="compose-meta-row">
                        ${!Z&&k&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${Z0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${f0}
                                    aria-label="Open model picker"
                                    onClick=${L0}
                                    disabled=${N_}
                                >
                                    ${N_?"Switching…":W0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N_&&k0&&z`
                                        <span class="compose-model-usage-hint" title=${f0}>
                                            ${k0}
                                        </span>
                                    `}
                                    ${H0&&z`
                                        <span class="compose-branch-hint" title=${j2}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M6 3v12"/>
                                                <circle cx="18" cy="6" r="3"/>
                                                <circle cx="6" cy="18" r="3"/>
                                                <path d="M18 9a9 9 0 0 1-9 9"/>
                                            </svg>
                                            <span class="compose-branch-label">${H0}</span>
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&v&&v.percent!=null&&z`
                        <${d6} usage=${v} />
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
                    ${X0&&!Z&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${x0}
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
                    ${a0&&!Z&&z`
                        <button
                            class=${`icon-btn notification-btn${j0?" active":""}`}
                            onClick=${f}
                            title=${n_}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&z`
                        ${Z_&&Q_&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Q_}
                                title=${`Attach open file: ${Z_}`}
                                type="button"
                                disabled=${K.includes(Z_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${i0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{C0()}}
                            disabled=${!v_}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var G4="piclaw_theme",f1="piclaw_tint",_1={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r6={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W4={default:{label:"Default",mode:"auto",light:_1,dark:r6},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},s6=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],$1={theme:"default",tint:null},V4="light",I1=!1;function N4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function a6(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),K=parseInt(X[2],10),G=parseInt(X[3],10);if(![Y,K,G].every((O)=>Number.isFinite(O)))return null;let V=`#${[Y,K,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:G,hex:V}}function O4(_){return D2(_)||a6(_)}function w2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function T1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function q4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function v1(_){return W4[_]||W4.default}function t6(_){return _.mode==="auto"?q4():_.mode}function e6(_,$){let Z=v1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||_1}function _8(_,$,Z){let J=O4($);if(!J)return _;let X=D2(_.bgPrimary),Y=D2(_.bgSecondary),K=D2(_.bgHover),G=D2(_.borderColor);if(!X||!Y||!K||!G)return _;let O=D2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:w2(X,J,0.08),bgSecondary:w2(Y,J,0.12),bgHover:w2(K,J,0.16),borderColor:w2(G,J,0.08),accent:J.hex,accentHover:O?w2(J,O,0.18):J.hex}}function $8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=O4(J),Y=X?T1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=X?T1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?T1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":K,"--accent-soft-strong":G,"--danger-color":_.danger||_1.danger,"--success-color":_.success||_1.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([O,j])=>{if(j)Z.style.setProperty(O,j)})}function Z8(){if(typeof document>"u")return;let _=document.documentElement;s6.forEach(($)=>_.style.removeProperty($))}function t2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function J8(_,$){if(typeof document>"u")return;let Z=t2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=t2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=t2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=t2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function Y8(){if(typeof window>"u")return;let _={...$1,mode:V4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function R1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=N4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=v1(Z),Y=t6(X),K=e6(Z,Y);$1={theme:Z,tint:J},V4=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=Z,G.dataset.tint=J?String(J):"",G.style.colorScheme=Y;let V=K;if(Z==="default"&&J)V=_8(K,J,Y);if(Z==="default"&&!J)Z8();else $8(V,Y);if(J8(V.bgPrimary,Y),Y8(),$.persist!==!1)if(R_(G4,Z),J)R_(f1,J);else R_(f1,"")}function e2(){if(v1($1.theme).mode!=="auto")return;R1($1,{persist:!1})}function z4(){if(typeof window>"u")return()=>{};let _=N4(c0(G4)||"default"),$=c0(f1),Z=$?$.trim():null;if(R1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!I1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",e2);else if(J.addListener)J.addListener(e2);return I1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",e2);else if(J.removeListener)J.removeListener(e2);I1=!1}}return()=>{}}function B4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;R1({theme:Z||"default",tint:J},{persist:!0})}function Q4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return q4()}var Z1=/#(\w+)/g,X8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),K8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),j8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),W8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},G8=new Set(["http:","https:","mailto:",""]);function U4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function k2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!G8.has(J.protocol))return null;return J.href}catch{return null}}function H4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let K of J){let G=K.tagName.toLowerCase();if(!K8.has(G)){let O=K.parentNode;if(!O)continue;while(K.firstChild)O.insertBefore(K.firstChild,K);O.removeChild(K);continue}let V=W8[G]||new Set;for(let O of Array.from(K.attributes)){let j=O.name.toLowerCase(),H=O.value;if(j.startsWith("on")){K.removeAttribute(O.name);continue}if(j.startsWith("data-")||j.startsWith("aria-"))continue;if(V.has(j)||j8.has(j)){if(j==="href"){let k=k2(H);if(!k)K.removeAttribute(O.name);else if(K.setAttribute(O.name,k),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(j==="src"){let k=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(H):H,L=k2(k,{allowDataImage:G==="img"});if(!L)K.removeAttribute(O.name);else K.setAttribute(O.name,L)}continue}K.removeAttribute(O.name)}}return Z.body.innerHTML}function L4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function J1(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=L4(Z);if(X===Z)break;Z=X}return Z}function V8(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,K=[];for(let G of Z){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let V=J.length;J.push(K.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Y=!1,K=[];continue}if(Y)K.push(G);else X.push(G)}if(Y)X.push("```mermaid"),X.push(...K);return{text:X.join(`
`),blocks:J}}function N8(_){if(!_)return _;return J1(_,5)}function O8(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function q8(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function z8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",K=N8(Y);return`<div class="mermaid-container" data-mermaid="${O8(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function F4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function E4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,V=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!V||!X8.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function D4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function k4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function B8(_){if(!window.katex)return _;let $=(K)=>L4(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(K)=>{let G=[],V=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let j=G.length;return G.push(O),`@@CODE_BLOCK_${j}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let j=G.length;return G.push(O),`@@CODE_INLINE_${j}@@`}),{html:V,blocks:G}},J=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,O)=>{let j=Number(O);return G[j]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,V)=>{try{let O=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${U4(O.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,V)=>{if(/\s$/.test(V))return K;try{let O=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${U4(O.message)}">$${V}$</span>`}}),J(Y,X.blocks)}function Q8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let K=Y.nodeValue;if(!K)continue;if(Z1.lastIndex=0,!Z1.test(K))continue;Z1.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=K.split(Z1);if(V.length<=1)continue;let O=$.createDocumentFragment();V.forEach((j,H)=>{if(H%2===1){let k=$.createElement("a");k.setAttribute("href","#"),k.className="hashtag",k.setAttribute("data-hashtag",j),k.textContent=`#${j}`,O.appendChild(k)}else O.appendChild($.createTextNode(j))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function U8(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function X2(_,$,Z={}){if(!_)return"";let J=U8(_),{text:X,blocks:Y}=V8(J),K=J1(X,2),V=F4(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=E4(V),j=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return j=D4(j),j=k4(j),j=B8(j),j=Q8(j),j=z8(j,Y),j=H4(j,Z),j}function C4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=J1($,2),X=F4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=E4(X),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=D4(K),K=k4(K),K=H4(K),K}async function C2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=Q4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let G=K.dataset.mermaid,V=q8(G||""),O=J1(V,2),j=await $(O,{...X,transparent:!0});K.innerHTML=j,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(V),K.removeAttribute("data-mermaid")}}var y4="PiClaw";function g1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,K=X[Y],G=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",j=(V?V:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:J,color:K,image:j}}function A4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function M4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function b4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",V=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(V&&(G||K&&K!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function H8(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let Z=Date.parse($);return Number.isFinite(Z)?Z:null}function Y1(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function L8(_){let $=Math.max(0,Math.floor(_/1000)),Z=$%60,J=Math.floor($/60)%60,X=Math.floor($/3600);if(X>0)return`${X}:${String(J).padStart(2,"0")}:${String(Z).padStart(2,"0")}`;return`${J}:${String(Z).padStart(2,"0")}`}function P4(_,$=Date.now()){let Z=H8(_);if(Z===null)return null;return L8(Math.max(0,$-Z))}function w4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:K,steerQueued:G,onPanelToggle:V}){let H=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let q_=X_,f_=q_?q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:q_,totalLines:f_,fullText:q_}}let O_=X_.text||"",N_=X_.fullText||X_.full_text||O_,k_=Number.isFinite(X_.totalLines)?X_.totalLines:N_?N_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:k_,fullText:N_}},k=160,L=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},A=(X_,O_,N_)=>{let k_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!k_)return{text:"",omitted:0,totalLines:Number.isFinite(N_)?N_:0,visibleLines:0};let q_=k_.split(`
`),f_=q_.length>O_?q_.slice(0,O_).join(`
`):k_,I_=Number.isFinite(N_)?N_:q_.reduce((w_,M_)=>w_+L(M_),0),A_=f_?f_.split(`
`).reduce((w_,M_)=>w_+L(M_),0):0,z_=Math.max(I_-A_,0);return{text:f_,omitted:z_,totalLines:I_,visibleLines:A_}},M=H(Z),v=H(J),b=H($),U=Boolean(M.text)||M.totalLines>0,P=Boolean(v.text)||v.totalLines>0,C=Boolean(b.fullText?.trim()||b.text?.trim());if(!_&&!C&&!U&&!P&&!X&&!Y)return null;let[f,i]=T(new Set),[d,Z_]=T(()=>Date.now()),Q_=(X_)=>i((O_)=>{let N_=new Set(O_),k_=!N_.has(X_);if(k_)N_.add(X_);else N_.delete(X_);if(typeof V==="function")V(X_,k_);return N_});m(()=>{i(new Set)},[K]);let __=Y1(_);m(()=>{if(!__)return;Z_(Date.now());let X_=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(X_)},[__,_?.started_at,_?.startedAt]);let V_=_?.turn_id||K,E_=b4(V_),n=G?"turn-dot turn-dot-queued":"turn-dot",J_=(X_)=>X_,t=Boolean(_?.last_activity||_?.lastActivity),o=(X_)=>X_==="warning"?"#f59e0b":X_==="error"?"var(--danger-color)":X_==="success"?"var(--success-color)":E_,$_=Y?.kind||"info",j_=o($_),Y_=o(_?.kind||(__?"warning":"info")),U_="",B_=_?.title,S_=_?.status;if(_?.type==="plan")U_=B_?`Planning: ${B_}`:"Planning...";else if(_?.type==="tool_call")U_=B_?`Running: ${B_}`:"Running tool...";else if(_?.type==="tool_status")U_=B_?`${B_}: ${S_||"Working..."}`:S_||"Working...";else if(_?.type==="error")U_=B_||"Agent error";else U_=B_||S_||"Working...";if(t)U_="Last activity just now";let s_=({panelTitle:X_,text:O_,fullText:N_,totalLines:k_,maxLines:q_,titleClass:f_,panelKey:I_})=>{let A_=f.has(I_),z_=N_||O_||"",w_=typeof q_==="number",M_=A_&&w_,c_=w_?A(z_,q_,k_):{text:z_||"",omitted:0,totalLines:Number.isFinite(k_)?k_:0};if(!z_&&!(Number.isFinite(c_.totalLines)&&c_.totalLines>0))return null;let x_=`agent-thinking-body${w_?" agent-thinking-body-collapsible":""}`,Z0=w_?`--agent-thinking-collapsed-lines: ${q_};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${A_?"true":"false"}
                data-collapsible=${w_?"true":"false"}
                style=${E_?`--turn-color: ${E_};`:""}
            >
                <div class="agent-thinking-title ${f_||""}">
                    ${E_&&z`<span class=${n} aria-hidden="true"></span>`}
                    ${X_}
                    ${M_&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>Q_(I_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${x_}
                    style=${Z0}
                    dangerouslySetInnerHTML=${{__html:C4(z_)}}
                />
                ${!A_&&c_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>Q_(I_)}>
                        ▸ ${c_.omitted} more lines
                    </button>
                `}
                ${A_&&c_.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>Q_(I_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},b_=X?.tool_call?.title,l_=b_?`Awaiting approval: ${b_}`:"Awaiting approval",P_=__?P4(_,d):null,g_=(X_,O_,N_=null)=>z`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${O_?`--turn-color: ${O_};`:""}
            title=${X_?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${O_&&z`<span class=${n} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${X_.title}</span>
                ${N_&&z`<span class="agent-status-elapsed">${N_}</span>`}
            </div>
            ${X_.detail&&z`<div class="agent-thinking-body">${X_.detail}</div>`}
        </div>
    `;return z`
        <div class="agent-status-panel">
            ${Y&&g_(Y,j_)}
            ${_?.type==="intent"&&g_(_,Y_,P_)}
            ${X&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${E_?`--turn-color: ${E_};`:""}>
                    <span class=${n} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${l_}</span>
                </div>
            `}
            ${U&&s_({panelTitle:J_("Planning"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,panelKey:"plan"})}
            ${P&&s_({panelTitle:J_("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&s_({panelTitle:J_("Draft"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${E_?`--turn-color: ${E_};`:""}>
                    ${E_&&z`<span class=${n} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function S4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",K=J?.kind||"other",G=J?.rawInput||{},V=G.command||G.commands&&G.commands[0]||null,O=G.diff||null,j=G.fileName||G.path||null,H=J?.description||G.description||G.explanation||null,L=(Array.isArray(J?.locations)?J.locations:[]).map((U)=>U?.path).filter((U)=>Boolean(U)),A=Array.from(new Set([j,...L].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let M=async(U)=>{try{await P1(Z,U),$()}catch(P){console.error("Failed to respond to agent request:",P)}},v=async()=>{try{await n3(Y,`Auto-approved: ${Y}`),await P1(Z,"approved"),$()}catch(U){console.error("Failed to add to whitelist:",U)}},b=X&&X.length>0;return z`
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
                ${(H||V||O||A.length>0)&&z`
                    <div class="agent-request-body">
                        ${H&&z`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${A.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((U,P)=>z`<li key=${P}>${U}</li>`)}
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
                    ${b?X.map((U)=>z`
                            <button 
                                key=${U.optionId||U.id||String(U)}
                                class="agent-request-btn ${U.kind==="allow_once"||U.kind==="allow_always"?"primary":""}"
                                onClick=${()=>M(U.optionId||U.id||U)}
                            >
                                ${U.name||U.label||U.optionId||U.id||String(U)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>M("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>M("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${v}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function x4({status:_}){if(_==="connected")return null;return z`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function I4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let V=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${O}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function S2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function P0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function y2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var F8=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),E8=new Set(["text/markdown"]);function x2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(F8.has($)||$.startsWith("text/"))return"text";return"unsupported"}function T4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return E8.has($)}function f4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function D8(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?P0($):null},{label:"Added",value:_?.created_at?y2(_.created_at):null}].filter((J)=>J.value)}function v4({mediaId:_,info:$,onClose:Z}){let J=$?.filename||`attachment-${_}`,X=$0(()=>x2($?.content_type),[$?.content_type]),Y=f4(X),K=$0(()=>T4($?.content_type),[$?.content_type]),[G,V]=T(X==="text"||X==="pdf"),[O,j]=T(""),[H,k]=T(null),[L,A]=T(null),M=F(null),v=$0(()=>D8($),[$]),b=$0(()=>{if(!K||!O)return"";return X2(O)},[K,O]);return m(()=>{let U=(P)=>{if(P.key==="Escape")Z()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[Z]),m(()=>{if(!M.current||!b)return;C2(M.current);return},[b]),m(()=>{let U=!1,P=null;async function C(){if(X==="text"){V(!0),A(null);try{let f=await s3(_);if(!U)j(f)}catch{if(!U)A("Failed to load text preview.")}finally{if(!U)V(!1)}return}if(X==="pdf"){V(!0),A(null);try{let f=await a3(_);if(P=URL.createObjectURL(f),!U)k(P)}catch{if(!U)A("Failed to load PDF preview.")}finally{if(!U)V(!1)}return}V(!1)}return C(),()=>{if(U=!0,P)URL.revokeObjectURL(P)}},[_,X]),z`
        <div class="image-modal attachment-preview-modal" onClick=${Z}>
            <div class="attachment-preview-shell" onClick=${(U)=>{U.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${J}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${m0(_)}
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
                    ${G&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&L&&z`<div class="attachment-preview-state">${L}</div>`}
                    ${!G&&!L&&X==="image"&&z`
                        <img class="attachment-preview-image" src=${m0(_)} alt=${J} />
                    `}
                    ${!G&&!L&&X==="pdf"&&H&&z`
                        <iframe class="attachment-preview-frame" src=${H} title=${J}></iframe>
                    `}
                    ${!G&&!L&&X==="text"&&K&&z`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:b}}
                        />
                    `}
                    ${!G&&!L&&X==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!G&&!L&&X==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((U)=>z`
                        <div class="attachment-preview-meta-item" key=${U.label}>
                            <span class="attachment-preview-meta-label">${U.label}</span>
                            <span class="attachment-preview-meta-value">${U.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function R4({src:_,onClose:$}){return m(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function k8({mediaId:_,onPreview:$}){let[Z,J]=T(null);if(m(()=>{P2(_).then(J).catch(()=>{})},[_]),!Z)return null;let X=Z.filename||"file",Y=Z.metadata?.size,K=Y?P0(Y):"",V=x2(Z.content_type)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${m0(_)} download=${X} class="file-attachment-main">
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
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${Z.content_type&&z`<span class="file-size">${Z.content_type}</span>`}
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
                ${V}
            </button>
        </div>
    `}function C8({attachment:_,onPreview:$}){let Z=Number(_?.id),[J,X]=T(null);m(()=>{if(!Number.isFinite(Z))return;P2(Z).then(X).catch(()=>{});return},[Z]);let Y=J?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(Z)?m0(Z):null,V=x2(J?.content_type)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${s0}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${s0}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(Z)&&J&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:Z,info:J})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function X1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?y2(J):null;return z`
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
    `}function y8({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?P0(_.size):"",X=_.mime_type||"",Y=M8(X),K=k2(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
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
    `}function A8({block:_}){let[$,Z]=T(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&z`
                ${X&&z`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(H)=>H.charCodeAt(0))],{type:K||"application/octet-stream"}),O=URL.createObjectURL(V),j=document.createElement("a");j.href=O,j.download=J.split("/").pop()||"resource",j.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function M8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function b8({preview:_}){let $=k2(_.url),Z=k2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return z`
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
    `}function P8(_,$){return typeof _==="string"?_:""}var w8=1800,S8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,x8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,I8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function T8(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function f8(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,K)=>{let G=K||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=x8,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=I8,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=S8,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",X(G,"idle"),K.appendChild(G);let V=async(O)=>{O.preventDefault(),O.stopPropagation();let H=Y.querySelector("code")?.textContent||"",k=await T8(H);X(G,k?"success":"error");let L=Z.get(G);if(L)clearTimeout(L);let A=setTimeout(()=>{X(G,"idle"),Z.delete(G)},w8);Z.set(G,A)};G.addEventListener("click",V),J.push(()=>{G.removeEventListener("click",V);let O=Z.get(G);if(O)clearTimeout(O);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{J.forEach((Y)=>Y())}}function v8(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let K=Z.slice(0,J),G=Z.slice(Y),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function R8(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let H=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(H)X.push(H[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let K=Z.slice(0,J),G=Z.slice(Y),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function g8(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let j=O.replace(/^\s*-\s+/,"").trim(),H=j.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||j.match(/^attachment:([^\s]+)\s+(.+)$/i);if(H){let k=H[1],L=(H[2]||"").trim()||k;X.push({id:k,label:L,raw:j})}else X.push({id:null,label:j,raw:j})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let K=Z.slice(0,J),G=Z.slice(Y),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function u8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m8(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(u8).sort((j,H)=>H.length-j.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),V=[],O;while(O=G.nextNode())V.push(O);for(let j of V){let H=j.nodeValue;if(!H||!X.test(H)){X.lastIndex=0;continue}X.lastIndex=0;let k=j.parentElement;if(k&&k.closest("code, pre, script, style"))continue;let L=H.split(X).filter((M)=>M!=="");if(L.length===0)continue;let A=K.createDocumentFragment();for(let M of L)if(Y.test(M)){let v=K.createElement("mark");v.className="search-highlight-term",v.textContent=M,A.appendChild(v)}else A.appendChild(K.createTextNode(M));j.parentNode.replaceChild(A,j)}return K.body.innerHTML}function g4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:K,userName:G,userAvatarUrl:V,userAvatarBackground:O,onDelete:j,isThreadReply:H,isThreadPrev:k,isThreadNext:L,isRemoving:A,highlightQuery:M,onFileRef:v}){let[b,U]=T(null),P=F(null),C=_.data,f=C.type==="agent_response",i=G||"You",d=f?Y||y4:i,Z_=f?g1(Y,K):g1(i,V),Q_=typeof O==="string"?O.trim().toLowerCase():"",__=!f&&Z_.image&&(Q_==="clear"||Q_==="transparent"),V_=f&&Boolean(Z_.image),E_=`background-color: ${__||V_?"transparent":Z_.color}`,n=C.content_meta,J_=Boolean(n?.truncated),t=Boolean(n?.preview),o=J_&&!t,$_=J_?{originalLength:Number.isFinite(n?.original_length)?n.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,j_=P8(C.content,C.link_previews),{content:Y_,fileRefs:U_}=v8(j_),{content:B_,messageRefs:S_}=R8(Y_),{content:s_,attachments:b_}=g8(B_);j_=s_;let l_=Boolean(j_)&&!o,P_=typeof M==="string"?M.trim():"",g_=$0(()=>{if(!j_)return"";let x=X2(j_,Z);return P_?m8(x,P_):x},[j_,P_]),X_=(x,e)=>{x.stopPropagation(),U(m0(e))},[O_,N_]=T(null),k_=(x)=>{N_(x)},q_=(x)=>{x.stopPropagation(),j?.(_)},f_=(x,e)=>{let v_=new Set;if(!x||e.length===0)return{content:x,usedIds:v_};return{content:x.replace(/attachment:([^\s)"']+)/g,(U0,K0,t_,a0)=>{let j0=K0.replace(/^\/+/,""),W0=e.find((G0)=>G0.name&&G0.name.toLowerCase()===j0.toLowerCase()&&!v_.has(G0.id))||e.find((G0)=>!v_.has(G0.id));if(!W0)return U0;if(v_.add(W0.id),a0.slice(Math.max(0,t_-2),t_)==="](")return`/media/${W0.id}`;return W0.name||"attachment"}),usedIds:v_}},I_=[],A_=[],z_=[],w_=[],M_=[],c_=[],x_=C.content_blocks||[],Z0=C.media_ids||[],F_=0;if(x_.length>0)x_.forEach((x)=>{if(x?.type==="text"&&x.annotations)c_.push(x.annotations);if(x?.type==="resource_link")w_.push(x);else if(x?.type==="resource")M_.push(x);else if(x?.type==="file"){let e=Z0[F_++];if(e)A_.push(e),z_.push({id:e,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let e=Z0[F_++];if(e){let v_=typeof x?.mime_type==="string"?x.mime_type:void 0;I_.push({id:e,annotations:x?.annotations,mimeType:v_}),z_.push({id:e,name:x?.name||x?.filename||x?.title})}}});else if(Z0.length>0)Z0.forEach((x)=>{I_.push({id:x,annotations:null}),z_.push({id:x,name:null})});if(b_.length>0)b_.forEach((x)=>{if(!x?.id)return;let e=z_.find((v_)=>String(v_.id)===String(x.id));if(e&&!e.name)e.name=x.label});let{content:I0,usedIds:D0}=f_(j_,z_);j_=I0;let Q0=I_.filter(({id:x})=>!D0.has(x)),_0=A_.filter((x)=>!D0.has(x)),a_=b_.length>0?b_.map((x,e)=>({id:x.id||`attachment-${e+1}`,label:x.label||`attachment-${e+1}`})):z_.map((x,e)=>({id:x.id,label:x.name||`attachment-${e+1}`}));return m(()=>{if(!P.current)return;return C2(P.current),f8(P.current)},[g_]),z`
        <div id=${`post-${_.id}`} class="post ${f?"agent-post":""} ${H?"thread-reply":""} ${k?"thread-prev":""} ${L?"thread-next":""} ${A?"removing":""}" onClick=${$}>
            <div class="post-avatar ${f?"agent-avatar":""} ${Z_.image?"has-image":""}" style=${E_}>
                ${Z_.image?z`<img src=${Z_.image} alt=${d} />`:Z_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${q_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${d}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),J)J(_.id)}}>${I4(_.timestamp)}</a>
                </div>
                ${o&&$_&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${S2($_.originalLength)} chars
                            ${$_.maxLength?z` • Display limit: ${S2($_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&$_&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${S2($_.maxLength)} of ${S2($_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(U_.length>0||S_.length>0||a_.length>0)&&z`
                    <div class="post-file-refs">
                        ${S_.map((x)=>{let e=(v_)=>{if(v_.preventDefault(),v_.stopPropagation(),X)X(x);else{let X0=document.getElementById("post-"+x);if(X0)X0.scrollIntoView({behavior:"smooth",block:"center"}),X0.classList.add("post-highlight"),setTimeout(()=>X0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${e}>
                                    <${s0}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${U_.map((x)=>{let e=x.split("/").pop()||x;return z`
                                <${s0}
                                    prefix="post"
                                    label=${e}
                                    title=${x}
                                    onClick=${()=>v?.(x)}
                                />
                            `})}
                        ${a_.map((x)=>z`
                            <${C8}
                                key=${x.id}
                                attachment=${x}
                                onPreview=${k_}
                            />
                        `)}
                    </div>
                `}
                ${l_&&z`
                    <div 
                        ref=${P}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:g_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let e=x.target.dataset.hashtag;if(e)Z?.(e)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),U(x.target.src)}}
                    />
                `}
                ${c_.length>0&&z`
                    ${c_.map((x,e)=>z`
                        <${X1} key=${e} annotations=${x} />
                    `)}
                `}
                ${Q0.length>0&&z`
                    <div class="media-preview">
                        ${Q0.map(({id:x,mimeType:e})=>{let X0=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?m0(x):r3(x);return z`
                                <img 
                                    key=${x} 
                                    src=${X0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(U0)=>X_(U0,x)}
                                />
                            `})}
                    </div>
                `}
                ${Q0.length>0&&z`
                    ${Q0.map(({annotations:x},e)=>z`
                        ${x&&z`<${X1} key=${e} annotations=${x} />`}
                    `)}
                `}
                ${_0.length>0&&z`
                    <div class="file-attachments">
                        ${_0.map((x)=>z`
                            <${k8} key=${x} mediaId=${x} onPreview=${k_} />
                        `)}
                    </div>
                `}
                ${w_.length>0&&z`
                    <div class="resource-links">
                        ${w_.map((x,e)=>z`
                            <div key=${e}>
                                <${y8} block=${x} />
                                <${X1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M_.length>0&&z`
                    <div class="resource-embeds">
                        ${M_.map((x,e)=>z`
                            <div key=${e}>
                                <${A8} block=${x} />
                                <${X1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${C.link_previews.map((x,e)=>z`
                            <${b8} key=${e} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${b&&z`<${R4} src=${b} onClose=${()=>U(null)} />`}
        ${O_&&z`
            <${v4}
                mediaId=${O_.mediaId}
                info=${O_.info}
                onClose=${()=>N_(null)}
            />
        `}
    `}function u4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:K,onFileRef:G,emptyMessage:V,timelineRef:O,agents:j,user:H,onDeletePost:k,reverse:L=!0,removingPostIds:A,searchQuery:M}){let[v,b]=T(!1),U=F(null),P=typeof IntersectionObserver<"u",C=S(async()=>{if(!Z||!$||v)return;b(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{b(!1)}},[$,v,Z]),f=S((n)=>{let{scrollTop:J_,scrollHeight:t,clientHeight:o}=n.target,$_=L?t-o-J_:J_,j_=Math.max(300,o);if($_<j_)C()},[L,C]);m(()=>{if(!P)return;let n=U.current,J_=O?.current;if(!n||!J_)return;let t=300,o=new IntersectionObserver(($_)=>{for(let j_ of $_){if(!j_.isIntersecting)continue;C()}},{root:J_,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return o.observe(n),()=>o.disconnect()},[P,$,Z,O,C]);let i=F(C);if(i.current=C,m(()=>{if(P)return;if(!O?.current)return;let{scrollTop:n,scrollHeight:J_,clientHeight:t}=O.current,o=L?J_-t-n:n,$_=Math.max(300,t);if(o<$_)i.current?.()},[P,_,$,L,O]),m(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:n,scrollHeight:J_,clientHeight:t}=O.current,o=L?J_-t-n:n,$_=Math.max(300,t);if(J_<=t+1||o<$_)i.current?.()},[_,$,v,L,O]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${V||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let d=_.slice().sort((n,J_)=>n.id-J_.id),Z_=(n)=>{let J_=n?.data?.thread_id;if(J_===null||J_===void 0||J_==="")return null;let t=Number(J_);return Number.isFinite(t)?t:null},Q_=new Map;for(let n=0;n<d.length;n+=1){let J_=d[n],t=Number(J_?.id),o=Z_(J_);if(o!==null){let $_=Q_.get(o)||{anchorIndex:-1,replyIndexes:[]};$_.replyIndexes.push(n),Q_.set(o,$_)}else if(Number.isFinite(t)){let $_=Q_.get(t)||{anchorIndex:-1,replyIndexes:[]};$_.anchorIndex=n,Q_.set(t,$_)}}let __=new Map;for(let[n,J_]of Q_.entries()){let t=new Set;if(J_.anchorIndex>=0)t.add(J_.anchorIndex);for(let o of J_.replyIndexes)t.add(o);__.set(n,Array.from(t).sort((o,$_)=>o-$_))}let V_=d.map((n,J_)=>{let t=Z_(n);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let o=__.get(t);if(!o||o.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=o.indexOf(J_);if($_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:$_>0,hasThreadNext:$_<o.length-1}}),E_=z`<div class="timeline-sentinel" ref=${U}></div>`;return z`
        <div class="timeline ${L?"reverse":"normal"}" ref=${O} onScroll=${f}>
            <div class="timeline-content">
                ${L?E_:null}
                ${d.map((n,J_)=>{let t=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),o=A?.has?.(n.id),$_=V_[J_]||{};return z`
                    <${g4}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${t}
                        isThreadPrev=${$_.hasThreadPrev}
                        isThreadNext=${$_.hasThreadNext}
                        isRemoving=${o}
                        highlightQuery=${M}
                        agentName=${A4(n.data?.agent_id,j||{})}
                        agentAvatarUrl=${M4(n.data?.agent_id,j||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>J?.(n)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${k}
                    />
                `})}
                ${L?null:E_}
            </div>
        </div>
    `}class m4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new m4;var K1=null,u1=null;function c4(){if(u1)return Promise.resolve(u1);if(!K1)K1=import("/static/dist/editor.bundle.js").then((_)=>{return u1=_,_}).catch((_)=>{throw K1=null,_});return K1}class h4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await c4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var m1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new h4(_,$)}};function c1(){c4().catch(()=>{})}class p4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var h1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new p4(_,$)}};function K2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c8(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",K=J?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,j=[];for(let k of O.split("/")){if(!k||k===".")continue;if(k===".."){if(j.length>0)j.pop();continue}j.push(k)}let H=j.join("/");return`${S1(H)}${Y}${K}`}function I2(_){return _?.preview||null}function h8(_){let $=String(_||""),Z=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),J=Z>=0?$.slice(Z+1):$,X=J.lastIndexOf(".");if(X<=0||X===J.length-1)return"none";return J.slice(X+1)}function p8(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function i8(_,$){let Z=$?.path||_?.path||"",J=[];if($?.content_type)J.push(`<span><strong>type:</strong> ${K2($.content_type)}</span>`);if(typeof $?.size==="number")J.push(`<span><strong>size:</strong> ${K2(P0($.size))}</span>`);if($?.mtime)J.push(`<span><strong>modified:</strong> ${K2(y2($.mtime))}</span>`);if(J.push(`<span><strong>kind:</strong> ${K2(p8($))}</span>`),J.push(`<span><strong>extension:</strong> ${K2(h8(Z))}</span>`),Z)J.push(`<span><strong>path:</strong> ${K2(Z)}</span>`);if($?.truncated)J.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${J.join("")}</div>`}function l8(_){let $=I2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let Z=i8(_,$);if($.kind==="image"){let J=$.url||($.path?S1($.path):"");return`${Z}
            <div class="workspace-preview-image">
                <img src="${K2(J)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let J=X2($.text||"",null,{rewriteImageSrc:(X)=>c8(X,$.path||_?.path)});return`${Z}<div class="workspace-preview-text">${J}</div>`}return`${Z}<pre class="workspace-preview-text"><code>${K2($.text||"")}</code></pre>`}if($.kind==="binary")return`${Z}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${Z}<div class="workspace-preview-text">No preview available.</div>`}class p1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=l8(this.context)}getContent(){let _=I2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=I2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var i1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=I2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new p1(_,$)}},l1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return I2(_)||_?.path?1:!1},mount(_,$){return new p1(_,$)}};class i4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var y_=new i4;var j1="workspaceExplorerScale",n8=["compact","default","comfortable"],o8=new Set(n8),d8={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function l4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return o8.has(Z)?Z:$}function n1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function r8(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function s8(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function o1(_={}){let $=r8(_),Z=_.stored?l4(_.stored,$):$;return s8(Z,_)}function n4(_){return d8[l4(_)]}var a8=60000,s4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function a4(_,$,Z,J=0,X=[]){if(!Z&&s4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)a4(Y,$,Z,J+1,X);return X}function o4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&s4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)X(K)};return X(_),J.join("|")}function a1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((G)=>[G?.path,G])):new Map,Y=!Z||Z.length!==J.length,K=J.map((G)=>{let V=a1(X.get(G.path),G);if(V!==X.get(G.path))Y=!0;return V});return Y?{...$,children:K}:_}function r1(_,$,Z){if(!_)return _;if(_.path===$)return a1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let K=r1(Y,$,Z);if(K!==Y)J=!0;return K});return J?{..._,children:X}:_}var t4=4,d1=14,t8=8,e8=16;function e4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=e4(J);return _.__bytes=Z,Z}function _6(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=t4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let G of X){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:V});else Y.push({kind:"file",name:G.name,path:G.path,size:V})}Y.sort((G,V)=>V.size-G.size);let K=Y;if(Y.length>d1){let G=Y.slice(0,d1-1),V=Y.slice(d1-1),O=V.reduce((j,H)=>j+H.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${J.path}/[other]`,size:O}),K=G}return J.children=K.map((G)=>{if(G.kind==="dir")return _6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),J}function d4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function $6(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function W1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function t1(_,$,Z,J,X,Y){let K=Math.PI*2-0.0001,G=Y-X>K?X+K:Y,V=W1(_,$,J,X),O=W1(_,$,J,G),j=W1(_,$,Z,G),H=W1(_,$,Z,X),k=G-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${J} ${J} 0 ${k} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${j.x.toFixed(3)} ${j.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${k} 0 ${H.x.toFixed(3)} ${H.y.toFixed(3)}`,"Z"].join(" ")}var Z6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function J6(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),K=(G,V,O,j)=>{let H=Array.isArray(G?.children)?G.children:[];if(!H.length)return;let k=Math.max(0,Number(G.size)||0);if(k<=0)return;let L=O-V,A=V;H.forEach((M,v)=>{let b=Math.max(0,Number(M.size)||0);if(b<=0)return;let U=b/k,P=A,C=v===H.length-1?O:A+L*U;if(A=C,C-P<0.003)return;let f=Z6[j];if(f){let i=$6(P,j,Z);if(J.push({key:M.path,path:M.path,label:M.name,size:b,color:i,depth:j,startAngle:P,endAngle:C,innerRadius:f[0],outerRadius:f[1],d:t1(120,120,f[0],f[1],P,C)}),j===1)X.push({key:M.path,name:M.name,size:b,pct:Y>0?b/Y*100:0,color:i})}if(j<t4)K(M,P,C,j+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function s1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=s1(J,$);if(X)return X}return null}function Y6(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=Z6[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,G=$6(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:G,depth:1,startAngle:Y,endAngle:K,innerRadius:X[0],outerRadius:X[1],d:t1(120,120,X[0],X[1],Y,K)}],legend:[{key:O,name:_,size:Z,pct:100,color:G}]}}function r4(_,$=!1,Z=!1){if(!_)return null;let J=e4(_),X=_6(_,0),Y=X.size||J,{segments:K,legend:G}=J6(X,Y,Z);if(!K.length&&Y>0){let V=Y6("[files]",X.path,Y,Z);K=V.segments,G=V.legend}return{root:X,totalSize:Y,segments:K,legend:G,truncated:$,isDarkTheme:Z}}function _5({payload:_}){if(!_)return null;let[$,Z]=T(null),[J,X]=T(_?.root?.path||"."),[Y,K]=T(()=>[_?.root?.path||"."]),[G,V]=T(!1);m(()=>{let __=_?.root?.path||".";X(__),K([__]),Z(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!J)return;V(!0);let __=setTimeout(()=>V(!1),180);return()=>clearTimeout(__)},[J]);let O=$0(()=>{return s1(_.root,J)||_.root},[_?.root,J]),j=O?.size||_.totalSize||0,{segments:H,legend:k}=$0(()=>{let __=J6(O,j,_.isDarkTheme);if(__.segments.length>0)return __;if(j<=0)return __;let V_=O?.children?.length?"Total":"[files]";return Y6(V_,O?.path||_?.root?.path||".",j,_.isDarkTheme)},[O,j,_.isDarkTheme,_?.root?.path]),[L,A]=T(H),M=F(new Map),v=F(0);m(()=>{let __=M.current,V_=new Map(H.map((t)=>[t.key,t])),E_=performance.now(),n=220,J_=(t)=>{let o=Math.min(1,(t-E_)/220),$_=o*(2-o),j_=H.map((Y_)=>{let B_=__.get(Y_.key)||{startAngle:Y_.startAngle,endAngle:Y_.startAngle,innerRadius:Y_.innerRadius,outerRadius:Y_.innerRadius},S_=(g_,X_)=>g_+(X_-g_)*$_,s_=S_(B_.startAngle,Y_.startAngle),b_=S_(B_.endAngle,Y_.endAngle),l_=S_(B_.innerRadius,Y_.innerRadius),P_=S_(B_.outerRadius,Y_.outerRadius);return{...Y_,d:t1(120,120,l_,P_,s_,b_)}});if(A(j_),o<1)v.current=requestAnimationFrame(J_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(J_),M.current=V_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[H]);let b=L.length?L:H,U=j>0?P0(j):"0 B",P=O?.name||"",f=(P&&P!=="."?P:"Total")||"Total",i=U,d=Y.length>1,Z_=(__)=>{if(!__?.path)return;let V_=s1(_.root,__.path);if(!V_||!Array.isArray(V_.children)||V_.children.length===0)return;K((E_)=>[...E_,V_.path]),X(V_.path),Z(null)},Q_=()=>{if(!d)return;K((__)=>{let V_=__.slice(0,-1);return X(V_[V_.length-1]||_?.root?.path||"."),V_}),Z(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${b.length}
                data-base-size=${j}>
                ${b.map((__)=>z`
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
                        onClick=${()=>Z_(__)}
                    >
                        <title>${__.label} — ${P0(__.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${d?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${f}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${i}</text>
                </g>
            </svg>
            ${k.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${k.slice(0,8).map((__)=>z`
                        <div key=${__.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${__.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${__.name}>${__.name}</span>
                            <span class="workspace-folder-starburst-size">${P0(__.size)}</span>
                            <span class="workspace-folder-starburst-pct">${__.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function $5({mediaId:_}){let[$,Z]=T(null);if(m(()=>{if(!_)return;P2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?P0($.metadata.size):"";return z`
        <a href=${m0(_)} download=${J} class="file-attachment"
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
    `}function X6({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=T(null),[K,G]=T(new Set(["."])),[V,O]=T(null),[j,H]=T(null),[k,L]=T(""),[A,M]=T(null),[v,b]=T(null),[U,P]=T(!0),[C,f]=T(!1),[i,d]=T(null),[Z_,Q_]=T(()=>F2("workspaceShowHidden",!1)),[__,V_]=T(!1),[E_,n]=T(null),[J_,t]=T(null),[o,$_]=T(null),[j_,Y_]=T(!1),[U_,B_]=T(null),[S_,s_]=T(()=>d4()),[b_,l_]=T(()=>o1({stored:c0(j1),...n1()})),P_=F(K),g_=F(""),X_=F(null),O_=F(0),N_=F(new Set),k_=F(null),q_=F(new Map),f_=F(_),I_=F(J),A_=F(null),z_=F(null),w_=F(null),M_=F(null),c_=F(null),x_=F(null),Z0=F("."),F_=F(null),I0=F({path:null,dragging:!1,startX:0,startY:0}),D0=F({path:null,dragging:!1,startX:0,startY:0}),Q0=F({path:null,timer:0}),_0=F(!1),a_=F(0),x=F(new Map),e=F(null),v_=F(null),X0=F(null),U0=F(null),K0=F(Z_),t_=F($),a0=F(Z??$),j0=F(0),n_=F(o),W0=F(__),h_=F(E_),G0=F(null),h0=F({x:0,y:0}),H0=F(0),j2=F(null),k0=F(V),T0=F(j),f0=F(null),V0=F(null),p0=F(A);f_.current=_,I_.current=J,m(()=>{P_.current=K},[K]),m(()=>{K0.current=Z_},[Z_]),m(()=>{t_.current=$},[$]),m(()=>{a0.current=Z??$},[Z,$]),m(()=>{n_.current=o},[o]),m(()=>{if(typeof window>"u")return;let W=()=>{l_(o1({stored:c0(j1),...n1()}))};W();let B=()=>W(),E=()=>W(),D=(c)=>{if(!c||c.key===null||c.key===j1)W()};window.addEventListener("resize",B),window.addEventListener("focus",E),window.addEventListener("storage",D);let g=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),r=(c,K_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",K_);else if(c.addListener)c.addListener(K_)},s=(c,K_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",K_);else if(c.removeListener)c.removeListener(K_)};return r(g,B),r(l,B),()=>{window.removeEventListener("resize",B),window.removeEventListener("focus",E),window.removeEventListener("storage",D),s(g,B),s(l,B)}},[]),m(()=>{let W=(B)=>{let E=B?.detail?.path;if(!E)return;let D=E.split("/"),g=[];for(let l=1;l<D.length;l++)g.push(D.slice(0,l).join("/"));if(g.length)G((l)=>{let r=new Set(l);r.add(".");for(let s of g)r.add(s);return r});O(E),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",W),()=>window.removeEventListener("workspace-reveal-path",W)},[]),m(()=>{W0.current=__},[__]),m(()=>{h_.current=E_},[E_]),m(()=>{k0.current=V},[V]),m(()=>{T0.current=j},[j]),m(()=>{p0.current=A},[A]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let W=()=>s_(d4());W();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>W();if(B?.addEventListener)B.addEventListener("change",E);else if(B?.addListener)B.addListener(E);let D=typeof MutationObserver<"u"?new MutationObserver(()=>W()):null;if(D?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)D?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",E);else if(B?.removeListener)B.removeListener(E);D?.disconnect()}},[]),m(()=>{if(!j)return;let W=c_.current;if(!W)return;let B=requestAnimationFrame(()=>{try{W.focus(),W.select()}catch{}});return()=>cancelAnimationFrame(B)},[j]);let v2=async(W)=>{f(!0),M(null),b(null);try{let B=await e3(W,20000);M(B)}catch(B){M({error:B.message||"Failed to load preview"})}finally{f(!1)}};A_.current=v2;let W2=async()=>{if(!t_.current)return;try{let W=await s2("",1,K0.current),B=o4(W.root,P_.current,K0.current);if(B===g_.current){P(!1);return}if(g_.current=B,X_.current=W.root,!O_.current)O_.current=requestAnimationFrame(()=>{O_.current=0,Y((E)=>a1(E,X_.current)),P(!1)})}catch(W){d(W.message||"Failed to load workspace"),P(!1)}},N0=async(W)=>{if(!W)return;if(N_.current.has(W))return;N_.current.add(W);try{let B=await s2(W,1,K0.current);Y((E)=>r1(E,W,B.root))}catch(B){d(B.message||"Failed to load workspace")}finally{N_.current.delete(W)}};z_.current=N0;let o_=S(()=>{let W=V;if(!W)return".";let B=q_.current?.get(W);if(B&&B.type==="dir")return B.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[V]),w0=S((W)=>{let B=W?.closest?.(".workspace-row");if(!B)return null;let E=B.dataset.path,D=B.dataset.type;if(!E)return null;if(D==="dir")return E;if(E.includes("/")){let g=E.split("/");return g.pop(),g.join("/")||"."}return"."},[]),A0=S((W)=>{return w0(W?.target||null)},[w0]),p_=S((W)=>{n_.current=W,$_(W)},[]),i_=S(()=>{let W=Q0.current;if(W?.timer)clearTimeout(W.timer);Q0.current={path:null,timer:0}},[]),L0=S((W)=>{if(!W||W==="."){i_();return}let B=q_.current?.get(W);if(!B||B.type!=="dir"){i_();return}if(P_.current?.has(W)){i_();return}if(Q0.current?.path===W)return;i_();let E=setTimeout(()=>{Q0.current={path:null,timer:0},z_.current?.(W),G((D)=>{let g=new Set(D);return g.add(W),g})},600);Q0.current={path:W,timer:E}},[i_]),S0=S((W,B)=>{if(h0.current={x:W,y:B},H0.current)return;H0.current=requestAnimationFrame(()=>{H0.current=0;let E=G0.current;if(!E)return;let D=h0.current;E.style.transform=`translate(${D.x+12}px, ${D.y+12}px)`})},[]),C0=S((W)=>{if(!W)return;let E=(q_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E)return;t({path:W,label:E})},[]),t0=S(()=>{if(t(null),H0.current)cancelAnimationFrame(H0.current),H0.current=0;if(G0.current)G0.current.style.transform="translate(-9999px, -9999px)"},[]),O0=S((W)=>{if(!W)return".";let B=q_.current?.get(W);if(B&&B.type==="dir")return B.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[]),d_=S(()=>{H(null),L("")},[]),i0=S((W)=>{if(!W)return;let E=(q_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E||W===".")return;H(W),L(E)},[]),G2=S(async()=>{let W=T0.current;if(!W)return;let B=(k||"").trim();if(!B){d_();return}let E=q_.current?.get(W),D=(E?.name||W.split("/").pop()||W).trim();if(B===D){d_();return}try{let l=(await Z4(W,B))?.path||W,r=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(d_(),d(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:W,newPath:l,type:E?.type||"file"}})),E?.type==="dir")G((s)=>{let c=new Set;for(let K_ of s)if(K_===W)c.add(l);else if(K_.startsWith(`${W}/`))c.add(`${l}${K_.slice(W.length)}`);else c.add(K_);return c});if(O(l),E?.type==="dir")M(null),f(!1),b(null);else A_.current?.(l);z_.current?.(r)}catch(g){d(g?.message||"Failed to rename file")}},[d_,k]),l0=S(async(W)=>{let D=W||".";for(let g=0;g<50;g+=1){let r=`untitled${g===0?"":`-${g}`}.md`;try{let c=(await $4(D,r,""))?.path||(D==="."?r:`${D}/${r}`);if(D&&D!==".")G((K_)=>new Set([...K_,D]));O(c),d(null),z_.current?.(D),A_.current?.(c);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;d(s?.message||"Failed to create file");return}}d("Failed to create file (untitled name already in use).")},[]),n0=S((W)=>{if(W?.stopPropagation?.(),j_)return;let B=O0(k0.current);l0(B)},[j_,O0,l0]);m(()=>{if(typeof window>"u")return;let W=(B)=>{let E=B?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;Y((s)=>{let c=s;for(let K_ of E){if(!K_?.root)continue;if(!c||K_.path==="."||!K_.path)c=K_.root;else c=r1(c,K_.path,K_.root)}if(c)g_.current=o4(c,P_.current,K0.current);return P(!1),c});let D=k0.current;if(Boolean(D)&&E.some((s)=>{let c=s?.path||"";if(!c||c===".")return!0;return D===c||D.startsWith(`${c}/`)||c.startsWith(`${D}/`)}))x.current.clear();if(!D||!p0.current)return;let l=q_.current?.get(D);if(l&&l.type==="dir")return;if(E.some((s)=>{let c=s?.path||"";if(!c||c===".")return!0;return D===c||D.startsWith(`${c}/`)}))A_.current?.(D)};return window.addEventListener("workspace-update",W),()=>window.removeEventListener("workspace-update",W)},[]),k_.current=W2;let e0=F(()=>{if(typeof window>"u")return;let W=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=a0.current??t_.current,E=document.visibilityState!=="hidden"&&(B||W.matches&&t_.current);a2(E,K0.current).catch(()=>{})}).current,J0=F(0),o0=F(()=>{if(J0.current)clearTimeout(J0.current);J0.current=setTimeout(()=>{J0.current=0,e0()},250)}).current;m(()=>{if(t_.current)k_.current?.();o0()},[$,Z]),m(()=>{k_.current(),e0();let W=setInterval(()=>k_.current(),a8),B=E2("previewHeight",null),E=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(a_.current=E,w_.current)w_.current.style.setProperty("--preview-height",`${E}px`);let D=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>o0();if(D.addEventListener)D.addEventListener("change",g);else if(D.addListener)D.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(W),O_.current)cancelAnimationFrame(O_.current),O_.current=0;if(D.removeEventListener)D.removeEventListener("change",g);else if(D.removeListener)D.removeListener(g);if(document.removeEventListener("visibilitychange",g),J0.current)clearTimeout(J0.current),J0.current=0;if(F_.current)clearTimeout(F_.current),F_.current=null;a2(!1,K0.current).catch(()=>{})}},[]);let x0=$0(()=>a4(X,K,Z_),[X,K,Z_]),_2=$0(()=>new Map(x0.map((W)=>[W.node.path,W.node])),[x0]),Q=$0(()=>n4(b_),[b_]);q_.current=_2;let p=(V?q_.current.get(V):null)?.type==="dir";m(()=>{if(!V||!p){B_(null),e.current=null,v_.current=null;return}let W=V,B=`${Z_?"hidden":"visible"}:${V}`,E=x.current,D=E.get(B);if(D?.root){E.delete(B),E.set(B,D);let r=r4(D.root,Boolean(D.truncated),S_);if(r)e.current=r,v_.current=V,B_({loading:!1,error:null,payload:r});return}let g=e.current,l=v_.current;B_({loading:!0,error:null,payload:l===V?g:null}),s2(V,t8,Z_).then((r)=>{if(k0.current!==W)return;let s={root:r?.root,truncated:Boolean(r?.truncated)};E.delete(B),E.set(B,s);while(E.size>e8){let K_=E.keys().next().value;if(!K_)break;E.delete(K_)}let c=r4(s.root,s.truncated,S_);e.current=c,v_.current=V,B_({loading:!1,error:null,payload:c})}).catch((r)=>{if(k0.current!==W)return;B_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:l===V?g:null})})},[V,p,Z_,S_]);let W_=Boolean(A&&A.kind==="text"&&!p&&(!A.size||A.size<=262144)),C_=W_?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable";m(()=>{let W=X0.current;if(U0.current)U0.current.dispose(),U0.current=null;if(!W)return;if(W.innerHTML="",!V||p||!A||A.error)return;let B={path:V,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},E=e_.resolve(B)||e_.get("workspace-preview-default");if(!E)return;let D=E.mount(W,B);return U0.current=D,()=>{if(U0.current===D)D.dispose(),U0.current=null;W.innerHTML=""}},[V,p,A]);let T_=(W)=>{let B=W?.target;if(B instanceof Element)return B;return B?.parentElement||null},D_=(W)=>{return Boolean(W?.closest?.(".workspace-node-icon, .workspace-label-text"))},y0=F((W)=>{if(V0.current)clearTimeout(V0.current),V0.current=null;let E=T_(W)?.closest?.("[data-path]");if(!E)return;let D=E.dataset.path;if(E.dataset.type==="dir"||!D)return;if(T0.current===D)d_();I_.current?.(D)}).current,d0=F((W)=>{if(_0.current){_0.current=!1;return}let B=T_(W),E=B?.closest?.("[data-path]");if(M_.current?.focus?.(),!E)return;let D=E.dataset.path,g=E.dataset.type,l=Boolean(B?.closest?.(".workspace-caret")),r=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),s=k0.current===D,c=T0.current;if(c){if(c===D)return;d_()}let K_=g==="file"&&f0.current===D&&!l&&!r;if(s&&!l&&!r&&D!=="."&&!K_){if(V0.current)clearTimeout(V0.current);V0.current=setTimeout(()=>{V0.current=null,i0(D)},350);return}if(g==="dir"){if(f0.current=null,O(D),M(null),b(null),f(!1),!P_.current.has(D))z_.current?.(D);if(s&&!l)return;G((u0)=>{let H_=new Set(u0);if(H_.has(D))H_.delete(D);else H_.add(D);return H_})}else{f0.current=null,O(D);let B0=q_.current.get(D);if(B0)f_.current?.(B0.path,B0);A_.current?.(D)}}).current,q2=F(()=>{g_.current="",k_.current(),Array.from(P_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>z_.current?.(B))}).current,M0=F(()=>{f0.current=null,O(null),M(null),b(null),f(!1)}).current,z2=F(()=>{Q_((W)=>{let B=!W;if(typeof window<"u")R_("workspaceShowHidden",String(B));return K0.current=B,a2(!0,B).catch(()=>{}),g_.current="",k_.current?.(),Array.from(P_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>z_.current?.(D)),B})}).current,B2=F((W)=>{if(T_(W)?.closest?.("[data-path]"))return;M0()}).current,u_=S(async(W)=>{if(!W)return;let B=W.split("/").pop()||W;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await Y4(W);let D=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(k0.current===W)M0();z_.current?.(D),d(null)}catch(D){M((g)=>({...g||{},error:D.message||"Failed to delete file"}))}},[M0]),m_=S((W)=>{let B=M_.current;if(!B||!W||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(W)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),q0=S((W)=>{let B=x0;if(!B||B.length===0)return;let E=V?B.findIndex((D)=>D.node.path===V):-1;if(W.key==="ArrowDown"){W.preventDefault();let D=Math.min(E+1,B.length-1),g=B[D];if(!g)return;if(O(g.node.path),g.node.type!=="dir")f_.current?.(g.node.path,g.node),A_.current?.(g.node.path);else M(null),f(!1),b(null);m_(g.node.path);return}if(W.key==="ArrowUp"){W.preventDefault();let D=E<=0?0:E-1,g=B[D];if(!g)return;if(O(g.node.path),g.node.type!=="dir")f_.current?.(g.node.path,g.node),A_.current?.(g.node.path);else M(null),f(!1),b(null);m_(g.node.path);return}if(W.key==="ArrowRight"&&E>=0){let D=B[E];if(D?.node?.type==="dir"&&!K.has(D.node.path))W.preventDefault(),z_.current?.(D.node.path),G((g)=>new Set([...g,D.node.path]));return}if(W.key==="ArrowLeft"&&E>=0){let D=B[E];if(D?.node?.type==="dir"&&K.has(D.node.path))W.preventDefault(),G((g)=>{let l=new Set(g);return l.delete(D.node.path),l});return}if(W.key==="Enter"&&E>=0){W.preventDefault();let D=B[E];if(!D)return;let g=D.node.path;if(D.node.type==="dir"){if(!P_.current.has(g))z_.current?.(g);G((r)=>{let s=new Set(r);if(s.has(g))s.delete(g);else s.add(g);return s}),M(null),b(null),f(!1)}else f_.current?.(g,D.node),A_.current?.(g);return}if((W.key==="Delete"||W.key==="Backspace")&&E>=0){let D=B[E];if(!D||D.node.type==="dir")return;W.preventDefault(),u_(D.node.path);return}if(W.key==="Escape")W.preventDefault(),M0()},[M0,u_,K,x0,m_,V]),$2=S((W)=>{let B=T_(W),E=B?.closest?.(".workspace-row");if(!E)return;let D=E.dataset.type,g=E.dataset.path;if(!g||g===".")return;if(T0.current===g)return;let l=W?.touches?.[0];if(!l)return;if(I0.current={path:D_(B)?g:null,dragging:!1,startX:l.clientX,startY:l.clientY},D!=="file")return;if(F_.current)clearTimeout(F_.current);F_.current=setTimeout(()=>{if(F_.current=null,I0.current?.dragging)return;u_(g)},600)},[u_]),z0=S(()=>{if(F_.current)clearTimeout(F_.current),F_.current=null;let W=I0.current;if(W?.dragging&&W.path){let B=n_.current||o_(),E=j2.current;if(typeof E==="function")E(W.path,B)}I0.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,V_(!1),n(null),p_(null),i_(),t0()},[o_,t0,p_,i_]),F0=S((W)=>{let B=I0.current,E=W?.touches?.[0];if(!E||!B?.path){if(F_.current)clearTimeout(F_.current),F_.current=null;return}let D=Math.abs(E.clientX-B.startX),g=Math.abs(E.clientY-B.startY),l=D>8||g>8;if(l&&F_.current)clearTimeout(F_.current),F_.current=null;if(!B.dragging&&l)B.dragging=!0,V_(!0),n("move"),C0(B.path);if(B.dragging){W.preventDefault(),S0(E.clientX,E.clientY);let r=document.elementFromPoint(E.clientX,E.clientY),s=w0(r)||o_();if(n_.current!==s)p_(s);L0(s)}},[w0,o_,C0,S0,p_,L0]),v0=F((W)=>{W.preventDefault();let B=w_.current;if(!B)return;let E=W.clientY,D=a_.current||280,g=W.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=E,r=(c)=>{l=c.clientY;let K_=B.clientHeight-80,B0=Math.min(Math.max(D-(c.clientY-E),80),K_);B.style.setProperty("--preview-height",`${B0}px`),a_.current=B0},s=()=>{let c=B.clientHeight-80,K_=Math.min(Math.max(D-(l-E),80),c);a_.current=K_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("previewHeight",String(Math.round(K_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",s)}).current,E0=F((W)=>{W.preventDefault();let B=w_.current;if(!B)return;let E=W.touches[0];if(!E)return;let D=E.clientY,g=a_.current||280,l=W.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let r=(c)=>{let K_=c.touches[0];if(!K_)return;c.preventDefault();let B0=B.clientHeight-80,u0=Math.min(Math.max(g-(K_.clientY-D),80),B0);B.style.setProperty("--preview-height",`${u0}px`),a_.current=u0},s=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",R_("previewHeight",String(Math.round(a_.current||g))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,R0=async()=>{if(!V)return;try{let W=await _4(V);if(W.media_id)b(W.media_id)}catch(W){M((B)=>({...B||{},error:W.message||"Failed to attach"}))}},Q2=async()=>{if(!V||p)return;await u_(V)},Z2=(W)=>{return Array.from(W?.dataTransfer?.types||[]).includes("Files")},V2=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),j0.current+=1,!W0.current)V_(!0);n("upload");let B=A0(W)||o_();p_(B),L0(B)},[o_,A0,p_,L0]),G1=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),W.dataTransfer)W.dataTransfer.dropEffect="copy";if(!W0.current)V_(!0);if(h_.current!=="upload")n("upload");let B=A0(W)||o_();if(n_.current!==B)p_(B);L0(B)},[o_,A0,p_,L0]),V1=S((W)=>{if(!Z2(W))return;if(W.preventDefault(),j0.current=Math.max(0,j0.current-1),j0.current===0)V_(!1),n(null),p_(null),i_()},[p_,i_]),N2=S(async(W,B=".")=>{let E=Array.from(W||[]);if(E.length===0)return;let D=B&&B!==""?B:".",g=D!=="."?D:"workspace root";Y_(!0);try{let l=null;for(let r of E)try{l=await w1(r,D)}catch(s){let c=s?.status,K_=s?.code;if(c===409||K_==="file_exists"){let B0=r?.name||"file";if(!window.confirm(`"${B0}" already exists in ${g}. Overwrite?`))continue;l=await w1(r,D,{overwrite:!0})}else throw s}if(l?.path)f0.current=l.path,O(l.path),A_.current?.(l.path);z_.current?.(D)}catch(l){d(l.message||"Failed to upload file")}finally{Y_(!1)}},[]),R2=S(async(W,B)=>{if(!W)return;let E=q_.current?.get(W);if(!E)return;let D=B&&B!==""?B:".",g=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(D===g)return;try{let r=(await J4(W,D))?.path||W;if(E.type==="dir")G((s)=>{let c=new Set;for(let K_ of s)if(K_===W)c.add(r);else if(K_.startsWith(`${W}/`))c.add(`${r}${K_.slice(W.length)}`);else c.add(K_);return c});if(O(r),E.type==="dir")M(null),f(!1),b(null);else A_.current?.(r);z_.current?.(g),z_.current?.(D)}catch(l){d(l?.message||"Failed to move entry")}},[]);j2.current=R2;let Y0=S(async(W)=>{if(!Z2(W))return;W.preventDefault(),j0.current=0,V_(!1),n(null),$_(null),i_();let B=Array.from(W?.dataTransfer?.files||[]);if(B.length===0)return;let E=n_.current||A0(W)||o_();await N2(B,E)},[o_,A0,N2]),N1=S((W)=>{if(W?.stopPropagation?.(),j_)return;let B=W?.currentTarget?.dataset?.uploadTarget||".";Z0.current=B,x_.current?.click()},[j_]),O1=S(()=>{if(j_)return;let W=k0.current,B=W?q_.current?.get(W):null;Z0.current=B?.type==="dir"?B.path:".",x_.current?.click()},[j_]),g2=S((W)=>{if(!W||W.button!==0)return;let B=W.currentTarget;if(!B||!B.dataset)return;let E=B.dataset.path;if(!E||E===".")return;if(T0.current===E)return;let D=T_(W);if(D?.closest?.("button, a, input, .workspace-caret"))return;if(!D_(D))return;W.preventDefault(),D0.current={path:E,dragging:!1,startX:W.clientX,startY:W.clientY};let g=(r)=>{let s=D0.current;if(!s?.path)return;let c=Math.abs(r.clientX-s.startX),K_=Math.abs(r.clientY-s.startY),B0=c>4||K_>4;if(!s.dragging&&B0)s.dragging=!0,_0.current=!0,V_(!0),n("move"),C0(s.path),S0(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){r.preventDefault(),S0(r.clientX,r.clientY);let u0=document.elementFromPoint(r.clientX,r.clientY),H_=w0(u0)||o_();if(n_.current!==H_)p_(H_);L0(H_)}},l=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",l);let r=D0.current;if(r?.dragging&&r.path){let s=n_.current||o_(),c=j2.current;if(typeof c==="function")c(r.path,s)}D0.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,V_(!1),n(null),p_(null),i_(),t0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{_0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",l)},[w0,o_,C0,S0,t0,p_,L0,i_]),g0=S(async(W)=>{let B=Array.from(W?.target?.files||[]);if(B.length===0)return;let E=Z0.current||".";if(await N2(B,E),Z0.current=".",W?.target)W.target.value=""},[N2]);return z`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${b_}
            ref=${w_}
            onDragEnter=${V2}
            onDragOver=${G1}
            onDragLeave=${V1}
            onDrop=${Y0}
        >
            <input type="file" multiple style="display:none" ref=${x_} onChange=${g0} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${n0} title="New file" disabled=${j_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${q2} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Z_?" active":""}`}
                        onClick=${z2}
                        title=${Z_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Z_&&z`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${B2}>
                ${j_&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${U&&z`<div class="workspace-loading">Loading…</div>`}
                ${i&&z`<div class="workspace-error">${i}</div>`}
                ${X&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${M_}
                        tabIndex="0"
                        onClick=${d0}
                        onDblClick=${y0}
                        onKeyDown=${q0}
                        onTouchStart=${$2}
                        onTouchEnd=${z0}
                        onTouchMove=${F0}
                        onTouchCancel=${z0}
                    >
                        ${x0.map(({node:W,depth:B})=>{let E=W.type==="dir",D=W.path===V,g=W.path===j,l=E&&K.has(W.path),r=o&&W.path===o,s=Array.isArray(W.children)&&W.children.length>0?W.children.length:Number(W.child_count)||0;return z`
                                <div
                                    key=${W.path}
                                    class=${`workspace-row${D?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*Q.indentPx}px`}}
                                    data-path=${W.path}
                                    data-type=${W.type}
                                    onMouseDown=${g2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?l?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${c_}
                                                value=${k}
                                                onInput=${(c)=>L(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),G2();else if(c.key==="Escape")c.preventDefault(),d_()}}
                                                onBlur=${d_}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${W.name}</span></span>`}
                                    ${E&&!l&&s>0&&z`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${E&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${W.path}
                                            title="Upload files to this folder"
                                            onClick=${N1}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${v0} onTouchStart=${E0}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${n0} title="New file" disabled=${j_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!p&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>W_&&I_.current?.(V,A)}
                                    title=${C_}
                                    disabled=${!W_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${Q2}
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
                            ${p?z`
                                    <button class="workspace-download" onClick=${O1}
                                        title="Upload files to this folder" disabled=${j_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${X4(V,Z_)}
                                        title="Download folder as zip" onClick=${(W)=>W.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${R0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&z`<div class="workspace-error">${A.error}</div>`}
                    ${p&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${U_?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${U_?.error&&z`<div class="workspace-error">${U_.error}</div>`}
                        ${U_?.payload&&U_.payload.segments?.length>0&&z`
                            <${_5} payload=${U_.payload} />
                        `}
                        ${U_?.payload&&(!U_.payload.segments||U_.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!p&&z`
                        <div class="workspace-preview-body" ref=${X0}></div>
                    `}
                    ${v&&z`
                        <div class="workspace-download-card">
                            <${$5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${J_&&z`
                <div class="workspace-drag-ghost" ref=${G0}>${J_.label}</div>
            `}
        </aside>
    `}function K6({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:K,onTogglePreview:G,previewTabs:V,onToggleDock:O,dockVisible:j}){let[H,k]=T(null),L=F(null);m(()=>{if(!H)return;let U=(P)=>{if(P.type==="keydown"&&P.key!=="Escape")return;k(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[H]),m(()=>{let U=(P)=>{if(P.ctrlKey&&P.key==="Tab"){if(P.preventDefault(),!_.length)return;let C=_.findIndex((f)=>f.id===$);if(P.shiftKey){let f=_[(C-1+_.length)%_.length];Z?.(f.id)}else{let f=_[(C+1)%_.length];Z?.(f.id)}return}if((P.ctrlKey||P.metaKey)&&P.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(P.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,Z,J]);let A=S((U,P)=>{if(U.button===1){U.preventDefault(),J?.(P);return}if(U.button===0)Z?.(P)},[Z,J]),M=S((U,P)=>{U.preventDefault(),k({id:P,x:U.clientX,y:U.clientY})},[]),v=S((U)=>{U.preventDefault(),U.stopPropagation()},[]),b=S((U,P)=>{U.preventDefault(),U.stopPropagation(),J?.(P)},[J]);if(m(()=>{if(!$||!L.current)return;let U=L.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${L} role="tablist">
            ${_.map((U)=>z`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(P)=>A(P,U.id)}
                    onContextMenu=${(P)=>M(P,U.id)}
                >
                    ${U.pinned&&z`
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
                        onMouseDown=${v}
                        onClick=${(P)=>b(P,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${j?" active":""}`}
                    onClick=${O}
                    title=${`${j?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${j?"Hide":"Show"} terminal`}
                    aria-pressed=${j?"true":"false"}
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
                <button onClick=${()=>{J?.(H.id),k(null)}}>Close</button>
                <button onClick=${()=>{X?.(H.id),k(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),k(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(H.id),k(null)}}>
                    ${_.find((U)=>U.id===H.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(H.id)&&z`
                    <hr />
                    <button onClick=${()=>{G(H.id),k(null)}}>
                        ${V?.has(H.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var Z5=400,e1=60,j6=220,_3="mdPreviewHeight";function J5(){try{let _=localStorage.getItem(_3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=e1?$:j6}catch{return j6}}function W6({getContent:_,path:$,onClose:Z}){let[J,X]=T(""),[Y,K]=T(J5),G=F(null),V=F(null),O=F(""),j=F(_);return j.current=_,m(()=>{let L=()=>{let M=j.current?.()||"";if(M===O.current)return;O.current=M;try{let v=X2(M,null,{sanitize:!1});X(v)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let A=setInterval(L,Z5);return()=>clearInterval(A)},[]),m(()=>{if(G.current&&J)C2(G.current).catch(()=>{})},[J]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let A=L.clientY,M=V.current?.offsetHeight||Y,v=V.current?.parentElement,b=v?v.offsetHeight*0.7:500,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let P=(f)=>{let i=Math.min(Math.max(M-(f.clientY-A),e1),b);K(i)},C=()=>{U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(_3,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",C)}}
            onTouchStart=${(L)=>{L.preventDefault();let A=L.touches[0];if(!A)return;let M=A.clientY,v=V.current?.offsetHeight||Y,b=V.current?.parentElement,U=b?b.offsetHeight*0.7:500,P=L.currentTarget;P.classList.add("dragging"),document.body.style.userSelect="none";let C=(i)=>{let d=i.touches[0];if(!d)return;i.preventDefault();let Z_=Math.min(Math.max(v-(d.clientY-M),e1),U);K(Z_)},f=()=>{P.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(_3,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}}
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
    `}function G6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=F(_);J.current=_;let X=F($);X.current=$;let Y=F(Z);Y.current=Z,m(()=>{Y.current();let K=new x1((V,O)=>J.current(V,O),(V)=>X.current(V));K.connect();let G=()=>{K.reconnectIfNeeded()};return window.addEventListener("focus",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),document.removeEventListener("visibilitychange",G),K.disconnect()}},[])}function V6(){let[_,$]=T(!1),[Z,J]=T("default"),X=F(!1);m(()=>{let V=F2("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")J(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Y=S(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),K=S(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),R_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),R_("notificationsEnabled",String(V))},[Y]),G=S((V,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let j=new Notification(V,{body:O});return j.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:K,notify:G}}var T2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function N6({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=T(null),[X,Y]=T(!1),K=F(!1),G=F(null),V=F(!1),O=F(null),j=F(null);m(()=>{K.current=X},[X]),m(()=>{j.current=Z},[Z]);let H=S(async(A=null)=>{try{if(A){let M=await u3(A);J(M.posts),Y(!1)}else{let M=await r2(10);J(M.posts),Y(M.has_more)}}catch(M){console.error("Failed to load posts:",M)}},[]),k=S(async()=>{try{let A=await r2(10);J((M)=>{if(!M||M.length===0)return A.posts;return T2([...A.posts,...M])}),Y((M)=>M||A.has_more)}catch(A){console.error("Failed to refresh timeline:",A)}},[]),L=S(async(A={})=>{let M=j.current;if(!M||M.length===0)return;if(V.current)return;let{preserveScroll:v=!0,preserveMode:b="top",allowRepeat:U=!1}=A,P=(i)=>{if(!v){i();return}if(b==="top")$(i);else _(i)},f=M.slice().sort((i,d)=>i.id-d.id)[0]?.id;if(!Number.isFinite(f))return;if(!U&&O.current===f)return;V.current=!0,O.current=f;try{let i=await r2(10,f);if(i.posts.length>0)P(()=>{J((d)=>T2([...i.posts,...d||[]])),Y(i.has_more)});else Y(!1)}catch(i){console.error("Failed to load more posts:",i)}finally{V.current=!1}},[_,$]);return m(()=>{G.current=L},[L]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:K,loadPosts:H,refreshTimeline:k,loadMore:L,loadMoreRef:G,loadingMoreRef:V,lastBeforeIdRef:O}}function O6(){let[_,$]=T(null),[Z,J]=T({text:"",totalLines:0}),[X,Y]=T(""),[K,G]=T({text:"",totalLines:0}),[V,O]=T(null),[j,H]=T(null),[k,L]=T(null),A=F(null),M=F(0),v=F(!1),b=F(""),U=F(""),P=F(null),C=F(null),f=F(null),i=F(null),d=F(!1),Z_=F(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:K,setAgentThought:G,pendingRequest:V,setPendingRequest:O,currentTurnId:j,setCurrentTurnId:H,steerQueuedTurnId:k,setSteerQueuedTurnId:L,lastAgentEventRef:A,lastSilenceNoticeRef:M,isAgentRunningRef:v,draftBufferRef:b,thoughtBufferRef:U,pendingRequestRef:P,stalledPostIdRef:C,currentTurnIdRef:f,steerQueuedTurnIdRef:i,thoughtExpandedRef:d,draftExpandedRef:Z_}}function q6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.clientX,L=$.current||280,A=j.currentTarget;A.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=k,v=(U)=>{M=U.clientX;let P=Math.min(Math.max(L+(U.clientX-k),160),600);H.style.setProperty("--sidebar-width",`${P}px`),$.current=P},b=()=>{let U=Math.min(Math.max(L+(M-k),160),600);$.current=U,A.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",R_("sidebarWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",b)}).current,Y=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.touches[0];if(!k)return;let L=k.clientX,A=$.current||280,M=j.currentTarget;M.classList.add("dragging"),H.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A+(P.clientX-L),160),600);H.style.setProperty("--sidebar-width",`${C}px`),$.current=C},b=()=>{M.classList.remove("dragging"),H.classList.remove("sidebar-resizing"),document.body.style.userSelect="",R_("sidebarWidth",String(Math.round($.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}).current,K=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.clientX,L=Z.current||$.current||280,A=j.currentTarget;A.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=k,v=(U)=>{M=U.clientX;let P=Math.min(Math.max(L+(U.clientX-k),200),800);H.style.setProperty("--editor-width",`${P}px`),Z.current=P},b=()=>{let U=Math.min(Math.max(L+(M-k),200),800);Z.current=U,A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("editorWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",b)}).current,G=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.touches[0];if(!k)return;let L=k.clientX,A=Z.current||$.current||280,M=j.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A+(P.clientX-L),200),800);H.style.setProperty("--editor-width",`${C}px`),Z.current=C},b=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",R_("editorWidth",String(Math.round(Z.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}).current,V=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.clientY,L=J?.current||200,A=j.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=k,v=(U)=>{M=U.clientY;let P=Math.min(Math.max(L-(U.clientY-k),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${P}px`),J)J.current=P},b=()=>{let U=Math.min(Math.max(L-(M-k),100),window.innerHeight*0.5);if(J)J.current=U;A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("dockHeight",String(Math.round(U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",b)}).current,O=F((j)=>{j.preventDefault();let H=_.current;if(!H)return;let k=j.touches[0];if(!k)return;let L=k.clientY,A=J?.current||200,M=j.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let P=U.touches[0];if(!P)return;U.preventDefault();let C=Math.min(Math.max(A-(P.clientY-L),100),window.innerHeight*0.5);if(H.style.setProperty("--dock-height",`${C}px`),J)J.current=C},b=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",R_("dockHeight",String(Math.round(J?.current||A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:O}}function z6({onTabClosed:_}={}){let $=F(_);$.current=_;let[Z,J]=T(()=>y_.getTabs()),[X,Y]=T(()=>y_.getActiveId()),[K,G]=T(()=>y_.getTabs().length>0);m(()=>{return y_.onChange((C,f)=>{J(C),Y(f),G(C.length>0)})},[]);let[V,O]=T(()=>new Set),j=S((C)=>{O((f)=>{let i=new Set(f);if(i.has(C))i.delete(C);else i.add(C);return i})},[]),H=S((C)=>{O((f)=>{if(!f.has(C))return f;let i=new Set(f);return i.delete(C),i})},[]),k=S((C)=>{if(!C)return;let f={path:C,mode:"edit"};try{if(!e_.resolve(f)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(i){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,i)}y_.open(C)},[]),L=S(()=>{let C=y_.getActiveId();if(C){let f=y_.get(C);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}y_.close(C),H(C),$.current?.(C)}},[H]),A=S((C)=>{let f=y_.get(C);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}y_.close(C),H(C),$.current?.(C)},[H]),M=S((C)=>{y_.activate(C)},[]),v=S((C)=>{let f=y_.getTabs().filter((Z_)=>Z_.id!==C&&!Z_.pinned),i=f.filter((Z_)=>Z_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let d=f.map((Z_)=>Z_.id);y_.closeOthers(C),d.forEach((Z_)=>{H(Z_),$.current?.(Z_)})},[H]),b=S(()=>{let C=y_.getTabs().filter((d)=>!d.pinned),f=C.filter((d)=>d.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let i=C.map((d)=>d.id);y_.closeAll(),i.forEach((d)=>{H(d),$.current?.(d)})},[H]),U=S((C)=>{y_.togglePin(C)},[]),P=S(()=>{let C=y_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return m(()=>{let C=(f)=>{let{oldPath:i,newPath:d,type:Z_}=f.detail||{};if(!i||!d)return;if(Z_==="dir"){for(let Q_ of y_.getTabs())if(Q_.path===i||Q_.path.startsWith(`${i}/`)){let __=`${d}${Q_.path.slice(i.length)}`;y_.rename(Q_.id,__)}}else y_.rename(i,d)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),m(()=>{let C=(f)=>{if(y_.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:K,tabStripTabs:Z,tabStripActiveId:X,previewTabs:V,openEditor:k,closeEditor:L,handleTabClose:A,handleTabActivate:M,handleTabCloseOthers:v,handleTabCloseAll:b,handleTabTogglePin:U,handleTabTogglePreview:j,revealInExplorer:P}}function $3(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var Z3=$3("warning",30000),B6=$3("finalize",120000),J3=$3("refresh",30000),Q6=30000;function U6(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function H6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function L6(_=30000){let[,$]=T(0);m(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function Y3(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function F6(_,$){if(typeof _!=="string")return{kind:"ignore"};let Z=_.trim();if(!Z)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(Z))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:Z,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}return{kind:"open",path:Z}}function f2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var Y5=m3,E6=h3,X5=p3,D6=o3,k6=d3,C6=i3,X3=typeof y1==="function"?y1:f2("getAgentContext",null),K5=typeof O2==="function"?O2:f2("getAgentModels",{current:null,models:[]}),j5=typeof A1==="function"?A1:f2("getAgentQueueState",{count:0}),W5=typeof b1==="function"?b1:f2("steerAgentQueueItem",{removed:!1,queued:"steer"}),G5=typeof M1==="function"?M1:f2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(m1);e_.register(l1);e_.register(i1);c1();var V5=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(V5)e_.register(h1);function N5(){let[_,$]=T("disconnected"),[Z,J]=T(null),[X,Y]=T(null),[K,G]=T(!1),[V,O]=T([]),[j,H]=T([]),[k,L]=T(null),{agentStatus:A,setAgentStatus:M,agentDraft:v,setAgentDraft:b,agentPlan:U,setAgentPlan:P,agentThought:C,setAgentThought:f,pendingRequest:i,setPendingRequest:d,currentTurnId:Z_,setCurrentTurnId:Q_,steerQueuedTurnId:__,setSteerQueuedTurnId:V_,lastAgentEventRef:E_,lastSilenceNoticeRef:n,isAgentRunningRef:J_,draftBufferRef:t,thoughtBufferRef:o,pendingRequestRef:$_,stalledPostIdRef:j_,currentTurnIdRef:Y_,steerQueuedTurnIdRef:U_,thoughtExpandedRef:B_,draftExpandedRef:S_}=O6(),[s_,b_]=T({}),[l_,P_]=T(null),[g_,X_]=T(null),[O_,N_]=T(!1),[k_,q_]=T(null),[f_,I_]=T(null),[A_,z_]=T(null),[w_,M_]=T(null),[c_,x_]=T([]),[Z0,F_]=T(!1),I0=c_.length,D0=F(new Set),Q0=F([]),_0=F(new Set),a_=F({inFlight:!1,lastAttemptAt:0,turnId:null});D0.current=new Set(c_.map((N)=>N.row_id)),Q0.current=c_;let{notificationsEnabled:x,notificationPermission:e,toggleNotifications:v_,notify:X0}=V6(),[U0,K0]=T(()=>new Set),[t_,a0]=T(()=>F2("workspaceOpen",!0)),j0=F(null),{editorOpen:n_,tabStripTabs:W0,tabStripActiveId:h_,previewTabs:G0,openEditor:h0,closeEditor:H0,handleTabClose:j2,handleTabActivate:k0,handleTabCloseOthers:T0,handleTabCloseAll:f0,handleTabTogglePin:V0,handleTabTogglePreview:p0,revealInExplorer:v2}=z6({onTabClosed:(N)=>j0.current?.(N)}),W2=F(null),N0=F(null);m(()=>{let N=!1;async function q(){try{let y=await t3(h_||"");if(N)return;z_(y?.branch||null),M_(y?.repo_path||null)}catch{if(N)return;z_(null),M_(null)}}return q(),()=>{N=!0}},[h_]),m(()=>{let N=W2.current;if(!N)return;if(N0.current)N0.current.dispose(),N0.current=null;let q=h_;if(!q)return;let y={path:q,mode:"edit"},w=e_.resolve(y)||e_.get("editor");if(!w){N.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=w.mount(N,y);N0.current=u,u.onDirtyChange?.((h)=>{y_.setDirty(q,h)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{H0()});let I=y_.getViewState(q);if(I&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(I));if(typeof u.onViewStateChange==="function")u.onViewStateChange((h)=>{y_.saveViewState(q,h)});return requestAnimationFrame(()=>u.focus()),()=>{if(N0.current===u)u.dispose(),N0.current=null}},[h_,H0]);let[o_,w0]=T({name:"You",avatar_url:null,avatar_background:null}),A0=F(!1),p_=F(!1),i_=F(null),L0=F(0),S0=F(0),C0=F({}),t0=F({name:null,avatar_url:null}),O0=F({currentHashtag:null,searchQuery:null}),d_=F(null),i0=F(null),G2=F(0),l0=F(0),n0=F(0),e0=F(null),J0=F(null),o0=F(null),x0=F(0),_2=F({title:null,avatarBase:null}),Q=F(null),R=S(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;L(null)},[]);L6(30000),m(()=>{return z4()},[]),m(()=>{R_("workspaceOpen",String(t_))},[t_]),m(()=>{return()=>{R()}},[R]),m(()=>{C0.current=s_||{}},[s_]),m(()=>{t0.current=o_||{name:"You",avatar_url:null,avatar_background:null}},[o_]);let p=S((N,q,y=null)=>{if(typeof document>"u")return;let w=(N||"").trim()||"PiClaw";if(_2.current.title!==w){document.title=w;let L_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(L_&&L_.getAttribute("content")!==w)L_.setAttribute("content",w);_2.current.title=w}let u=document.getElementById("dynamic-favicon");if(!u)return;let I=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",h=q||I,a=q?`${h}|${y||""}`:h;if(_2.current.avatarBase!==a){let L_=q?`${h}${h.includes("?")?"&":"?"}v=${y||Date.now()}`:h;u.setAttribute("href",L_),_2.current.avatarBase=a}},[]),W_=S((N)=>{if(!N)return;O((q)=>q.includes(N)?q:[...q,N])},[]),C_=S((N)=>{O((q)=>q.filter((y)=>y!==N))},[]);j0.current=C_;let T_=S(()=>{O([])},[]),D_=S((N,q=null,y="info",w=3000)=>{R(),L({title:N,detail:q||null,kind:y||"info"}),Q.current=setTimeout(()=>{L((u)=>u?.title===N?null:u)},w)},[R]),y0=S((N)=>{let q=F6(N,{editorOpen:n_,resolvePane:(y)=>e_.resolve(y)});if(q.kind==="open"){h0(q.path);return}if(q.kind==="toast")D_(q.title,q.detail,q.level)},[n_,h0,D_]),d0=S(()=>{let N=h_;if(N)W_(N)},[h_,W_]),q2=S((N)=>{if(!N)return;H((q)=>q.includes(N)?q:[...q,N])},[]),M0=S(async(N)=>{let q=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+N);if(y){q(y);return}try{let u=(await c3(N))?.thread?.[0];if(!u)return;Y0((I)=>{if(!I)return[u];if(I.some((h)=>h.id===u.id))return I;return[...I,u]}),requestAnimationFrame(()=>{setTimeout(()=>{let I=document.getElementById("post-"+N);if(I)q(I)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",N,w)}},[]),z2=S((N)=>{H((q)=>q.filter((y)=>y!==N))},[]),B2=S(()=>{H([])},[]),u_=S((N={})=>{let q=Date.now();if(E_.current=q,N.running)J_.current=!0,F_((y)=>y?y:!0);if(N.clearSilence)n.current=0},[F_]),m_=S(()=>{if(o0.current)clearTimeout(o0.current),o0.current=null;x0.current=0},[]);m(()=>()=>{m_()},[m_]);let q0=S(()=>{m_(),M((N)=>{if(!N)return N;if(!(N.last_activity||N.lastActivity))return N;let{last_activity:q,lastActivity:y,...w}=N;return w})},[m_]),$2=S((N)=>{if(!N)return;m_();let q=Date.now();x0.current=q,M({type:N.type||"active",last_activity:!0}),o0.current=setTimeout(()=>{if(x0.current!==q)return;M((y)=>{if(!y||!(y.last_activity||y.lastActivity))return y;return null})},Q6)},[m_]),z0=S(()=>{J_.current=!1,F_(!1),E_.current=null,n.current=0,t.current="",o.current="",$_.current=null,J0.current=null,Y_.current=null,U_.current=null,i_.current=null,a_.current={inFlight:!1,lastAttemptAt:0,turnId:null},m_(),Q_(null),V_(null),B_.current=!1,S_.current=!1},[m_,Q_,V_,F_]),F0=S((N)=>{if(!N)return;if(Y_.current===N)return;Y_.current=N,a_.current={inFlight:!1,lastAttemptAt:0,turnId:N},Q_(N),U_.current=null,V_(null),t.current="",o.current="",b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),$_.current=null,J0.current=null,B_.current=!1,S_.current=!1},[Q_,V_]),v0=S((N)=>{if(typeof document<"u"){let L_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&L_)return}let q=J0.current;if(!q||!q.post)return;if(N&&q.turnId&&q.turnId!==N)return;let y=q.post;if(y.id&&e0.current===y.id)return;let w=String(y?.data?.content||"").trim();if(!w)return;e0.current=y.id||e0.current,J0.current=null;let u=w.replace(/\s+/g," ").slice(0,200),I=C0.current||{},a=(y?.data?.agent_id?I[y.data.agent_id]:null)?.name||"Pi";X0(a,u)},[X0]),E0=S(async(N,q)=>{if(N!=="thought"&&N!=="draft")return;let y=Y_.current;if(N==="thought"){if(B_.current=q,y)try{await k6(y,"thought",q)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!q)return;try{let w=y?await D6(y,"thought"):null;if(w?.text)o.current=w.text;f((u)=>({...u||{text:"",totalLines:0},fullText:o.current||u?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:u?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(S_.current=q,y)try{await k6(y,"draft",q)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!q)return;try{let w=y?await D6(y,"draft"):null;if(w?.text)t.current=w.text;b((u)=>({...u||{text:"",totalLines:0},fullText:t.current||u?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:u?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),R0=F(null),Q2=S(()=>{let N=d_.current;if(!N)return;if(!(Math.abs(N.scrollTop)>150))N.scrollTop=0},[]);R0.current=Q2;let Z2=S((N)=>{let q=d_.current;if(!q||typeof N!=="function"){N?.();return}let{currentHashtag:y,searchQuery:w}=O0.current||{},u=!(w&&!y),I=u?q.scrollHeight-q.scrollTop:q.scrollTop;N(),requestAnimationFrame(()=>{let h=d_.current;if(!h)return;if(u){let a=Math.max(h.scrollHeight-I,0);h.scrollTop=a}else{let a=Math.max(h.scrollHeight-h.clientHeight,0),L_=Math.min(I,a);h.scrollTop=L_}})},[]),V2=S((N)=>{let q=d_.current;if(!q||typeof N!=="function"){N?.();return}let y=q.scrollTop;N(),requestAnimationFrame(()=>{let w=d_.current;if(!w)return;let u=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(y,u)})},[]),G1="Queued as a follow-up (one-at-a-time).",V1="⁣",N2=S((N)=>{if(!N||!Array.isArray(N))return N;let q=D0.current,y=new Set(q),w=N.filter((u)=>{if(y.has(u?.id))return!1;if(u?.data?.is_bot_message){let I=u?.data?.content;if(I===G1||I===V1)return!1}return!0});return w.length===N.length?N:w},[]),{posts:R2,setPosts:Y0,hasMore:N1,setHasMore:O1,hasMoreRef:g2,loadPosts:g0,refreshTimeline:W,loadMore:B,loadMoreRef:E}=N6({preserveTimelineScroll:Z2,preserveTimelineScrollTop:V2}),D=$0(()=>N2(R2),[R2,c_,N2]),g=S(()=>{let N=j_.current;if(!N)return;Y0((q)=>q?q.filter((y)=>y.id!==N):q),j_.current=null},[Y0]),{handleSplitterMouseDown:l,handleSplitterTouchStart:r,handleEditorSplitterMouseDown:s,handleEditorSplitterTouchStart:c,handleDockSplitterMouseDown:K_,handleDockSplitterTouchStart:B0}=q6({appShellRef:i0,sidebarWidthRef:G2,editorWidthRef:l0,dockHeightRef:n0}),u0=S(()=>{if(!J_.current)return;J_.current=!1,n.current=0,E_.current=null,Y_.current=null,Q_(null),B_.current=!1,S_.current=!1;let N=(t.current||"").trim();if(t.current="",o.current="",b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),$_.current=null,J0.current=null,!N){M({type:"error",title:"Response stalled - No content received"});return}let y=`${N}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),u=new Date().toISOString(),I={id:w,timestamp:u,data:{type:"agent_response",content:y,agent_id:"default",is_local_stall:!0}};j_.current=w,Y0((h)=>h?T2([...h,I]):[I]),R0.current?.(),M(null)},[Q_]);m(()=>{O0.current={currentHashtag:Z,searchQuery:X}},[Z,X]);let H_=S(()=>{j5().then((N)=>{let q=_0.current,y=Array.isArray(N?.items)?N.items.map((w)=>({...w})).filter((w)=>!q.has(w.row_id)):[];if(y.length){x_((w)=>{if(w.length===y.length&&w.every((u,I)=>u.row_id===y[I].row_id))return w;return y});return}q.clear(),x_((w)=>w.length===0?w:[])}).catch(()=>{x_((N)=>N.length===0?N:[])})},[x_]),q1=S(async()=>{try{let N=await X3();if(N)I_(N)}catch(N){console.warn("Failed to fetch agent context:",N)}},[]),J2=S(async()=>{try{let N=await C6("web:default");if(!N||N.status!=="active"||!N.data){if(p_.current){let{currentHashtag:w,searchQuery:u}=O0.current||{};if(!w&&!u)W()}return p_.current=!1,z0(),i_.current=null,M(null),b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),$_.current=null,N??null}p_.current=!0;let q=N.data;i_.current=q;let y=q.turn_id||q.turnId;if(y)F0(y);if(u_({running:!0,clearSilence:!0}),q0(),M(q),N.thought&&N.thought.text)f((w)=>{if(w&&w.text&&w.text.length>=N.thought.text.length)return w;return o.current=N.thought.text,{text:N.thought.text,totalLines:N.thought.totalLines||0}});if(N.draft&&N.draft.text)b((w)=>{if(w&&w.text&&w.text.length>=N.draft.text.length)return w;return t.current=N.draft.text,{text:N.draft.text,totalLines:N.draft.totalLines||0}});return N}catch(N){return console.warn("Failed to fetch agent status:",N),null}},[z0,q0,u_,W,F0]),z1=S(async()=>{if(!J_.current)return null;if($_.current)return null;let N=Y_.current||null,q=a_.current,y=Date.now();if(q.inFlight)return null;if(q.turnId===N&&y-q.lastAttemptAt<J3)return null;q.inFlight=!0,q.lastAttemptAt=y,q.turnId=N;try{let{currentHashtag:w,searchQuery:u}=O0.current||{};if(!w&&!u)await W();return await H_(),await J2()}finally{q.inFlight=!1}},[J2,H_,W]);m(()=>{let N=Math.min(1000,Math.max(100,Math.floor(Z3/2))),q=setInterval(()=>{if(!J_.current)return;if($_.current)return;let y=E_.current;if(!y)return;let w=Date.now(),u=w-y,I=Y1(i_.current);if(u>=B6){if(!I)M({type:"waiting",title:"Re-syncing after a quiet period…"});z1();return}if(u>=Z3){if(w-n.current>=J3){if(!I){let h=Math.floor(u/1000);M({type:"waiting",title:`Waiting for model… No events for ${h}s`})}n.current=w,z1()}}},N);return()=>clearInterval(q)},[z1]);let y6=S((N)=>{if($(N),N!=="connected"){M(null),b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),$_.current=null,z0();return}if(!A0.current){A0.current=!0,J2();return}let{currentHashtag:q,searchQuery:y}=O0.current;if(!q&&!y)W();J2()},[z0,W,J2]),A6=S(async(N)=>{J(N),Y0(null),await g0(N)},[g0]),M6=S(async()=>{J(null),Y(null),Y0(null),await g0()},[g0]),b6=S(async(N)=>{if(!N||!N.trim())return;Y(N.trim()),J(null),Y0(null);try{let q=await Y5(N.trim());Y0(q.results),O1(!1)}catch(q){console.error("Failed to search:",q),Y0([])}},[]),P6=S(()=>{G(!0),Y(null),J(null),Y0([])},[]),w6=S(()=>{G(!1),Y(null),g0()},[g0]),O5=S(()=>{},[]),S6=S(async(N)=>{if(!N)return;let q=N.id,y=D?.filter((u)=>u?.data?.thread_id===q&&u?.id!==q).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let w=(u)=>{if(!u.length)return;K0((h)=>{let a=new Set(h);return u.forEach((L_)=>a.add(L_)),a}),setTimeout(()=>{if(V2(()=>{Y0((h)=>h?h.filter((a)=>!u.includes(a.id)):h)}),K0((h)=>{let a=new Set(h);return u.forEach((L_)=>a.delete(L_)),a}),g2.current)E.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await E6(q,y>0);if(u?.ids?.length)w(u.ids)}catch(u){let I=u?.message||"";if(y===0&&I.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let a=await E6(q,!0);if(a?.ids?.length)w(a.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${I}`)}},[D,V2]),K3=S(async()=>{try{let N=await X5();b_(U6(N));let q=N?.user||{};w0((w)=>{let u=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",I=typeof q.avatar_url==="string"?q.avatar_url.trim():null,h=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(w.name===u&&w.avatar_url===I&&w.avatar_background===h)return w;return{name:u,avatar_url:I,avatar_background:h}});let y=(N?.agents||[]).find((w)=>w.id==="default");if(y?.model)P_(y.model);p(y?.name,y?.avatar_url)}catch(N){console.warn("Failed to load agents:",N)}try{let N=await X3();if(N)I_(N)}catch{}},[p]);m(()=>{K3();let N=E2("sidebarWidth",null),q=Number.isFinite(N)?Math.min(Math.max(N,160),600):280;if(G2.current=q,i0.current)i0.current.style.setProperty("--sidebar-width",`${q}px`)},[K3]);let x6=Z0||A!==null,j3=S((N)=>{if(!N||typeof N!=="object")return;let q=N.agent_id;if(!q)return;let{agent_name:y,agent_avatar:w}=N;if(!y&&w===void 0)return;let u=C0.current?.[q]||{id:q},I=u.name||null,h=u.avatar_url??u.avatarUrl??u.avatar??null,a=!1,L_=!1;if(y&&y!==u.name)I=y,L_=!0;if(w!==void 0){let r0=typeof w==="string"?w.trim():null,G3=typeof h==="string"?h.trim():null,H2=r0||null;if(H2!==(G3||null))h=H2,a=!0}if(!L_&&!a)return;if(b_((r0)=>{let H2={...r0[q]||{id:q}};if(L_)H2.name=I;if(a)H2.avatar_url=h;return{...r0,[q]:H2}}),q==="default")p(I,h,a?Date.now():null)},[p]),W3=S((N)=>{if(!N||typeof N!=="object")return;let q=N.user_name??N.userName,y=N.user_avatar??N.userAvatar,w=N.user_avatar_background??N.userAvatarBackground;if(q===void 0&&y===void 0&&w===void 0)return;w0((u)=>{let I=typeof q==="string"&&q.trim()?q.trim():u.name||"You",h=y===void 0?u.avatar_url:typeof y==="string"&&y.trim()?y.trim():null,a=w===void 0?u.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(u.name===I&&u.avatar_url===h&&u.avatar_background===a)return u;return{name:I,avatar_url:h,avatar_background:a}})},[]),B1=S((N)=>{if(!N||typeof N!=="object")return;let q=N.model??N.current;if(q!==void 0)P_(q);if(N.thinking_level!==void 0)X_(N.thinking_level??null);if(N.supports_thinking!==void 0)N_(Boolean(N.supports_thinking));if(N.provider_usage!==void 0)q_(N.provider_usage??null)},[]),A2=S(()=>{K5().then((N)=>{if(N)B1(N)}).catch(()=>{})},[B1]),I6=S((N)=>{let q=N?.row_id;if(q==null)return;_0.current.add(q),x_((y)=>y.filter((w)=>w?.row_id!==q)),W5(q).then(()=>{H_()}).catch((y)=>{console.warn("[queue] Failed to steer queued item:",y),D_("Failed to steer message","The queued message could not be sent as steering.","warning"),_0.current.delete(q),H_()})},[H_,x_,D_]),T6=S((N)=>{let q=N?.row_id;if(q==null)return;_0.current.add(q),x_((y)=>y.filter((w)=>w?.row_id!==q)),G5(q).then(()=>{H_()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),D_("Failed to remove message","The queued message could not be removed.","warning"),_0.current.delete(q),H_()})},[H_,x_,D_]),f6=S((N)=>{if(!N||typeof N!=="object")return;if(N?.queued==="followup"||N?.queued==="steer"){H_();return}let q=N?.command;if(q&&typeof q==="object"&&(q?.queued_followup||q?.queued_steer))H_()},[H_]),Q1=S(()=>{A2(),H_()},[A2,H_]);m(()=>{Q1();let N=setInterval(()=>{A2(),H_()},60000);return()=>clearInterval(N)},[Q1,A2,H_]);let U1=S((N,q)=>{let y=q?.turn_id;if(j3(q),W3(q),N==="ui_theme"){B4(q);return}if(N?.startsWith("agent_")){if(!(N==="agent_draft_delta"||N==="agent_thought_delta"||N==="agent_draft"||N==="agent_thought"))q0()}if(N==="connected"){M(null),b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),$_.current=null,z0(),C6("web:default").then((a)=>{if(!a||a.status!=="active"||!a.data)return;let L_=a.data,r0=L_.turn_id||L_.turnId;if(r0)F0(r0);if(u_({clearSilence:!0}),$2(L_),a.thought&&a.thought.text)o.current=a.thought.text,f({text:a.thought.text,totalLines:a.thought.totalLines||0});if(a.draft&&a.draft.text)t.current=a.draft.text,b({text:a.draft.text,totalLines:a.draft.totalLines||0})}).catch((a)=>{console.warn("Failed to fetch agent status:",a)});let{currentHashtag:I,searchQuery:h}=O0.current||{};if(!I&&!h)W();Q1();return}if(N==="agent_status"){if(q.type==="done"||q.type==="error"){if(y&&Y_.current&&y!==Y_.current)return;if(q.type==="done"){v0(y||Y_.current);let{currentHashtag:I,searchQuery:h}=O0.current||{};if(!I&&!h)W();if(q.context_usage)I_(q.context_usage)}if(p_.current=!1,z0(),_0.current.clear(),H_(),b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null),q.type==="error")M({type:"error",title:q.title||"Agent error"}),setTimeout(()=>M(null),8000);else M(null)}else{if(y)F0(y);if(u_({running:!0,clearSilence:!0}),q.type==="thinking")t.current="",o.current="",b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0});i_.current=q,M((I)=>{if(I&&I.type===q.type&&I.title===q.title)return I;return q})}return}if(N==="agent_steer_queued"){if(y&&Y_.current&&y!==Y_.current)return;let I=y||Y_.current;if(!I)return;U_.current=I,V_(I);return}if(N==="agent_followup_queued"){let I=q?.row_id,h=q?.content;if(I!=null&&typeof h==="string"&&h.trim())x_((a)=>{if(a.some((L_)=>L_?.row_id===I))return a;return[...a,{row_id:I,content:h,timestamp:q?.timestamp||null,thread_id:q?.thread_id??null}]});H_();return}if(N==="agent_followup_consumed"){let I=q?.row_id;if(I!=null)x_((h)=>h.filter((a)=>a.row_id!==I));H_(),W();return}if(N==="agent_followup_removed"){let I=q?.row_id;if(I!=null)_0.current.add(I),x_((h)=>h.filter((a)=>a.row_id!==I));H_();return}if(N==="agent_draft_delta"){if(y&&Y_.current&&y!==Y_.current)return;if(y&&!Y_.current)F0(y);if(u_({running:!0,clearSilence:!0}),q?.reset)t.current="";if(q?.delta)t.current+=q.delta;let I=Date.now();if(!L0.current||I-L0.current>=100){L0.current=I;let h=t.current,a=Y3(h);if(S_.current)b((L_)=>({text:L_?.text||"",totalLines:a,fullText:h}));else b({text:h,totalLines:a})}return}if(N==="agent_draft"){if(y&&Y_.current&&y!==Y_.current)return;if(y&&!Y_.current)F0(y);u_({running:!0,clearSilence:!0});let I=q.text||"",h=q.mode||(q.kind==="plan"?"replace":"append"),a=Number.isFinite(q.total_lines)?q.total_lines:I?I.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(h==="replace")P(I);else P((L_)=>(L_||"")+I);else if(!S_.current)t.current=I,b({text:I,totalLines:a});return}if(N==="agent_thought_delta"){if(y&&Y_.current&&y!==Y_.current)return;if(y&&!Y_.current)F0(y);if(u_({running:!0,clearSilence:!0}),q?.reset)o.current="";if(typeof q?.delta==="string")o.current+=q.delta;let I=Date.now();if(B_.current&&(!S0.current||I-S0.current>=100)){S0.current=I;let h=o.current;f((a)=>({text:a?.text||"",totalLines:Y3(h),fullText:h}))}return}if(N==="agent_thought"){if(y&&Y_.current&&y!==Y_.current)return;if(y&&!Y_.current)F0(y);u_({running:!0,clearSilence:!0});let I=q.text||"",h=Number.isFinite(q.total_lines)?q.total_lines:I?I.replace(/\r\n/g,`
`).split(`
`).length:0;if(!B_.current)o.current=I,f({text:I,totalLines:h});return}if(N==="agent_request"){if(console.log("Agent request:",q),y&&Y_.current&&y!==Y_.current)return;if(y)F0(y);u_({running:!0,clearSilence:!0}),d(q),$_.current=q;return}if(N==="agent_request_timeout"){if(console.log("Agent request timeout:",q),y&&Y_.current&&y!==Y_.current)return;d(null),$_.current=null,z0(),M({type:"error",title:"Permission request timed out"});return}if(N==="model_changed"){if(q?.model!==void 0)P_(q.model);if(q?.thinking_level!==void 0)X_(q.thinking_level??null);if(q?.supports_thinking!==void 0)N_(Boolean(q.supports_thinking));X3().then((I)=>{if(I)I_(I)}).catch(()=>{});return}if(N==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:w,searchQuery:u}=O0.current;if(N==="agent_response")g(),J0.current={post:q,turnId:Y_.current};if(!w&&!u&&(N==="new_post"||N==="agent_response"))Y0((I)=>{if(!I)return[q];if(I.some((h)=>h.id===q.id))return I;return[...I,q]}),R0.current?.();if(N==="interaction_updated")Y0((I)=>{if(!I)return I;if(!I.some((h)=>h.id===q.id))return I;return I.map((h)=>h.id===q.id?q:h)});if(N==="interaction_deleted"){let I=q?.ids||[];if(I.length){V2(()=>{Y0((L_)=>L_?L_.filter((r0)=>!I.includes(r0.id)):L_)});let{currentHashtag:h,searchQuery:a}=O0.current;if(g2.current&&!h&&!a)E.current?.({preserveScroll:!0,preserveMode:"top"})}}},[z0,q0,E,u_,v0,V2,W,g,F0,$2,j3,W3,A2,H_,x_]);m(()=>{if(typeof window>"u")return;let N=window.__PICLAW_TEST_API||{};return N.emit=U1,N.reset=()=>{g(),z0(),M(null),b({text:"",totalLines:0}),P(""),f({text:"",totalLines:0}),d(null)},N.finalize=()=>u0(),window.__PICLAW_TEST_API=N,()=>{if(window.__PICLAW_TEST_API===N)window.__PICLAW_TEST_API=void 0}},[z0,u0,U1,g]),G6({handleSseEvent:U1,handleConnectionStatusChange:y6,loadPosts:g0}),m(()=>{if(!D||D.length===0)return;let N=location.hash;if(!N||!N.startsWith("#msg-"))return;let q=N.slice(5);M0(q),history.replaceState(null,"",location.pathname+location.search)},[D,M0]);let H1=A!==null;m(()=>{if(_!=="connected")return;let q=setInterval(()=>{let{currentHashtag:y,searchQuery:w}=O0.current||{},u=!y&&!w;if(H1){if(u)W();H_(),J2(),q1()}else{if(u)W();J2(),q1()}},H1?15000:60000);return()=>clearInterval(q)},[_,H1,J2,q1,H_,W]);let v6=S(()=>{a0((N)=>!N)},[]);m(()=>{if(!n_)return;if(typeof window>"u")return;let N=i0.current;if(!N)return;if(!l0.current){let q=E2("editorWidth",null),y=G2.current||280;l0.current=Number.isFinite(q)?q:y}if(N.style.setProperty("--editor-width",`${l0.current}px`),!n0.current){let q=E2("dockHeight",null);n0.current=Number.isFinite(q)?q:200}N.style.setProperty("--dock-height",`${n0.current}px`)},[n_]);let U2=e_.getDockPanes().length>0,[L1,R6]=T(!1),u2=S(()=>R6((N)=>!N),[]);m(()=>{if(!U2)return;let N=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),u2()};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[u2,U2]);let g6=Boolean(__&&__===(A?.turn_id||Z_));return z`
        <div class=${`app-shell${t_?"":" workspace-collapsed"}${n_?" editor-open":""}`} ref=${i0}>
            <${X6}
                onFileSelect=${W_}
                visible=${t_}
                active=${t_||n_}
                onOpenEditor=${h0}
            />
            <button
                class=${`workspace-toggle-tab${t_?" open":" closed"}`}
                onClick=${v6}
                title=${t_?"Hide workspace":"Show workspace"}
                aria-label=${t_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${l} onTouchStart=${r}></div>
            ${n_&&z`
                <div class="editor-pane-container">
                    <${K6}
                        tabs=${W0}
                        activeId=${h_}
                        onActivate=${k0}
                        onClose=${j2}
                        onCloseOthers=${T0}
                        onCloseAll=${f0}
                        onTogglePin=${V0}
                        onTogglePreview=${p0}
                        previewTabs=${G0}
                        onToggleDock=${U2?u2:void 0}
                        dockVisible=${U2&&L1}
                    />
                    <div class="editor-pane-host" ref=${W2}></div>
                    ${h_&&G0.has(h_)&&z`
                        <${W6}
                            getContent=${()=>N0.current?.getContent?.()}
                            path=${h_}
                            onClose=${()=>p0(h_)}
                        />
                    `}
                    ${U2&&L1&&z`<div class="dock-splitter" onMouseDown=${K_} onTouchStart=${B0}></div>`}
                    ${U2&&z`<div class=${`dock-panel${L1?"":" hidden"}`}>
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
                <div class="editor-splitter" onMouseDown=${s} onTouchStart=${c}></div>
            `}
            <div class="container">
                ${X&&H6()&&z`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${M6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${u4}
                    posts=${D}
                    hasMore=${N1}
                    onLoadMore=${B}
                    timelineRef=${d_}
                    onHashtagClick=${A6}
                    onMessageRef=${q2}
                    onScrollToMessage=${M0}
                    onFileRef=${y0}
                    onPostClick=${void 0}
                    onDeletePost=${S6}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${s_}
                    user=${o_}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${U0}
                    searchQuery=${X}
                />
                <${w4}
                    status=${A}
                    draft=${v}
                    plan=${U}
                    thought=${C}
                    pendingRequest=${i}
                    intent=${k}
                    turnId=${Z_}
                    steerQueued=${g6}
                    onPanelToggle=${E0}
                />
                <${j4}
                    onPost=${()=>{g0(),Q2()}}
                    onFocus=${Q2}
                    searchMode=${K}
                    onSearch=${b6}
                    onEnterSearch=${P6}
                    onExitSearch=${w6}
                    fileRefs=${V}
                    onRemoveFileRef=${C_}
                    onClearFileRefs=${T_}
                    messageRefs=${j}
                    onRemoveMessageRef=${z2}
                    onClearMessageRefs=${B2}
                    activeEditorPath=${h_}
                    onAttachEditorFile=${d0}
                    onOpenFilePill=${y0}
                    followupQueueCount=${I0}
                    followupQueueItems=${c_}
                    onInjectQueuedFollowup=${I6}
                    onRemoveQueuedFollowup=${T6}
                    onMessageResponse=${f6}
                    isAgentActive=${x6}
                    activeModel=${l_}
                    modelUsage=${k_}
                    thinkingLevel=${g_}
                    supportsThinking=${O_}
                    contextUsage=${f_}
                    currentBranch=${A_}
                    currentBranchRepoPath=${w_}
                    notificationsEnabled=${x}
                    notificationPermission=${e}
                    onToggleNotifications=${v_}
                    onModelChange=${P_}
                    onModelStateChange=${B1}
                />
                <${x4} status=${_} />
                <${S4}
                    request=${i}
                    onRespond=${()=>{d(null),$_.current=null}}
                />
            </div>
        </div>
    `}f3(z`<${N5} />`,document.getElementById("app"));

//# debugId=1FE546E27B12DFBD64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
