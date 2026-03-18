var U9=Object.defineProperty;var F9=(_)=>_;function H9(_,$){this[_]=F9.bind(null,$)}var J9=(_,$)=>{for(var j in $)U9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:H9.bind($,j)})};var D9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var d2,_0,O3,E9,g$,$3,B3,Q3,U3,P1,k1,y1,k9,i2={},l2=[],y9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,s2=Array.isArray;function I$(_,$){for(var j in $)_[j]=$[j];return _}function M1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function F3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?d2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return p2(_,K,Z,N,null)}function p2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++O3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(z),z}function o2(_){return _.children}function c2(_,$){this.props=_,this.context=$}function W2(_,$){if($==null)return _.__?W2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W2(_):null}function A9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=I$({},$);z.__v=$.__v+1,_0.vnode&&_0.vnode(z),b1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?W2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,E3(Z,z,N),$.__e=$.__=null,z.__e!=j&&H3(z)}}function H3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),H3(_)}function j3(_){(!_.__d&&(_.__d=!0)&&g$.push(_)&&!n2.__r++||$3!=_0.debounceRendering)&&(($3=_0.debounceRendering)||B3)(n2)}function n2(){try{for(var _,$=1;g$.length;)g$.length>$&&g$.sort(Q3),_=g$.shift(),$=g$.length,A9(_)}finally{g$.length=n2.__r=0}}function J3(_,$,j,Z,N,z,K,G,q,X,O){var W,U,M,m,u,f,E,F=Z&&Z.__k||l2,x=$.length;for(q=w9(j,$,F,q,x),W=0;W<x;W++)(M=j.__k[W])!=null&&(U=M.__i!=-1&&F[M.__i]||i2,M.__i=W,f=b1(_,M,U,N,z,K,G,q,X,O),m=M.__e,M.ref&&U.ref!=M.ref&&(U.ref&&I1(U.ref,null,M),O.push(M.ref,M.__c||m,M)),u==null&&m!=null&&(u=m),(E=!!(4&M.__u))||U.__k===M.__k?q=D3(M,q,_,E):typeof M.type=="function"&&f!==void 0?q=f:m&&(q=m.nextSibling),M.__u&=-7);return j.__e=u,q}function w9(_,$,j,Z,N){var z,K,G,q,X,O=j.length,W=O,U=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=p2(null,K,null,null,null):s2(K)?K=_.__k[z]=p2(o2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=p2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+U,K.__=_,K.__b=_.__b+1,G=null,(X=K.__i=P9(K,j,q,W))!=-1&&(W--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(N>O?U--:N<O&&U++),typeof K.type!="function"&&(K.__u|=4)):X!=q&&(X==q-1?U--:X==q+1?U++:(X>q?U--:U++,K.__u|=4))):_.__k[z]=null;if(W)for(z=0;z<O;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=W2(G)),y3(G,G));return Z}function D3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=D3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=W2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function P9(_,$,j,Z){var N,z,K,G=_.key,q=_.type,X=$[j],O=X!=null&&(2&X.__u)==0;if(X===null&&G==null||O&&G==X.key&&q==X.type)return j;if(Z>(O?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((X=$[K=N>=0?N--:z++])!=null&&(2&X.__u)==0&&G==X.key&&q==X.type)return K}return-1}function Z3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||y9.test($)?j:j+"px"}function g2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||Z3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||Z3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(U3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=P1,_.addEventListener($,z?y1:k1,z)):_.removeEventListener($,z?y1:k1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function N3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=P1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function b1(_,$,j,Z,N,z,K,G,q,X){var O,W,U,M,m,u,f,E,F,x,I,i,n,__,d,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[G=$.__e=j.__e]),(O=_0.__b)&&O($);_:if(typeof K_=="function")try{if(E=$.props,F=K_.prototype&&K_.prototype.render,x=(O=K_.contextType)&&Z[O.__c],I=O?x?x.props.value:O.__:Z,j.__c?f=(W=$.__c=j.__c).__=W.__E:(F?$.__c=W=new K_(E,I):($.__c=W=new c2(E,I),W.constructor=K_,W.render=b9),x&&x.sub(W),W.state||(W.state={}),W.__n=Z,U=W.__d=!0,W.__h=[],W._sb=[]),F&&W.__s==null&&(W.__s=W.state),F&&K_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=I$({},W.__s)),I$(W.__s,K_.getDerivedStateFromProps(E,W.__s))),M=W.props,m=W.state,W.__v=$,U)F&&K_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),F&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(F&&K_.getDerivedStateFromProps==null&&E!==M&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(E,I),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(E,W.__s,I)===!1){$.__v!=j.__v&&(W.props=E,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),l2.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&K.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(E,W.__s,I),F&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(M,m,u)})}if(W.context=I,W.props=E,W.__P=_,W.__e=!1,i=_0.__r,n=0,F)W.state=W.__s,W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),l2.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++n<25);W.state=W.__s,W.getChildContext!=null&&(Z=I$(I$({},Z),W.getChildContext())),F&&!U&&W.getSnapshotBeforeUpdate!=null&&(u=W.getSnapshotBeforeUpdate(M,m)),__=O!=null&&O.type===o2&&O.key==null?k3(O.props.children):O,G=J3(_,s2(__)?__:[__],$,j,Z,N,z,K,G,q,X),W.base=$.__e,$.__u&=-161,W.__h.length&&K.push(W),f&&(W.__E=W.__=null)}catch(c){if($.__v=null,q||z!=null)if(c.then){for($.__u|=q?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(d=z.length;d--;)M1(z[d]);A1($)}else $.__e=j.__e,$.__k=j.__k,c.then||A1($);_0.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=M9(j.__e,$,j,Z,N,z,K,q,X);return(O=_0.diffed)&&O($),128&$.__u?void 0:G}function A1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(A1))}function E3(_,$,j){for(var Z=0;Z<j.length;Z++)I1(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){_0.__e(z,N.__v)}})}function k3(_){return typeof _!="object"||_==null||_.__b>0?_:s2(_)?_.map(k3):I$({},_)}function M9(_,$,j,Z,N,z,K,G,q){var X,O,W,U,M,m,u,f=j.props||i2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(X=0;X<z.length;X++)if((M=z[X])&&"setAttribute"in M==!!F&&(F?M.localName==F:M.nodeType==3)){_=M,z[X]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),G&&(_0.__m&&_0.__m($,z),G=!1),z=null}if(F==null)f===E||G&&_.data==E||(_.data=E);else{if(z=z&&d2.call(_.childNodes),!G&&z!=null)for(f={},X=0;X<_.attributes.length;X++)f[(M=_.attributes[X]).name]=M.value;for(X in f)M=f[X],X=="dangerouslySetInnerHTML"?W=M:X=="children"||(X in E)||X=="value"&&("defaultValue"in E)||X=="checked"&&("defaultChecked"in E)||g2(_,X,null,M,N);for(X in E)M=E[X],X=="children"?U=M:X=="dangerouslySetInnerHTML"?O=M:X=="value"?m=M:X=="checked"?u=M:G&&typeof M!="function"||f[X]===M||g2(_,X,M,f[X],N);if(O)G||W&&(O.__html==W.__html||O.__html==_.innerHTML)||(_.innerHTML=O.__html),$.__k=[];else if(W&&(_.innerHTML=""),J3($.type=="template"?_.content:_,s2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&W2(j,0),G,q),z!=null)for(X=z.length;X--;)M1(z[X]);G||(X="value",F=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[X]||F=="progress"&&!m||F=="option"&&m!=f[X])&&g2(_,X,m,f[X],N),X="checked",u!=null&&u!=_[X]&&g2(_,X,u,f[X],N))}return _}function I1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function y3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||I1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){_0.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&y3(Z[N],$,j||typeof _.type!="function");j||M1(_.__e),_.__c=_.__=_.__e=void 0}function b9(_,$,j){return this.constructor(_,j)}function A3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],b1($,_=(!Z&&j||$).__k=F3(o2,null,[_]),N||i2,i2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?d2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),E3(z,_,K)}d2=l2.slice,_0={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},O3=0,E9=function(_){return _!=null&&_.constructor===void 0},c2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I$({},this.state),typeof _=="function"&&(_=_(I$({},j),this.props)),_&&I$(j,_),_!=null&&this.__v&&($&&this._sb.push($),j3(this))},c2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j3(this))},c2.prototype.render=o2,g$=[],B3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q3=function(_,$){return _.__v.__b-$.__v.__b},n2.__r=0,U3=/(PointerCapture)$|Capture$/i,P1=0,k1=N3(!1),y1=N3(!0),k9=0;var E2,U0,E1,z3,k2=0,w3=[],Q0=_0,K3=Q0.__b,Y3=Q0.__r,W3=Q0.diffed,G3=Q0.__c,V3=Q0.unmount,X3=Q0.__;function C1(_,$){Q0.__h&&Q0.__h(U0,_,k2||$),k2=0;var j=U0.__H||(U0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return k2=1,I9(M3,_)}function I9(_,$,j){var Z=C1(E2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):M3(void 0,$),function(G){var q=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(q,G);q!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=U0,!U0.__f)){var N=function(G,q,X){if(!Z.__c.__H)return!0;var O=Z.__c.__H.__.filter(function(U){return U.__c});if(O.every(function(U){return!U.__N}))return!z||z.call(this,G,q,X);var W=Z.__c.props!==G;return O.some(function(U){if(U.__N){var M=U.__[0];U.__=U.__N,U.__N=void 0,M!==U.__[0]&&(W=!0)}}),z&&z.call(this,G,q,X)||W};U0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=U0;U0.componentWillUpdate=function(G,q,X){if(this.__e){var O=z;z=void 0,N(G,q,X),z=O}K&&K.call(this,G,q,X)},U0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=C1(E2++,3);!Q0.__s&&P3(j.__H,$)&&(j.__=_,j.u=$,U0.__H.__h.push(j))}function D(_){return k2=5,a_(function(){return{current:_}},[])}function a_(_,$){var j=C1(E2++,7);return P3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return k2=8,a_(function(){return _},$)}function C9(){for(var _;_=w3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(h2),$.__h.some(w1),$.__h=[]}catch(j){$.__h=[],Q0.__e(j,_.__v)}}}Q0.__b=function(_){U0=null,K3&&K3(_)},Q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),X3&&X3(_,$)},Q0.__r=function(_){Y3&&Y3(_),E2=0;var $=(U0=_.__c).__H;$&&(E1===U0?($.__h=[],U0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(h2),$.__h.some(w1),$.__h=[],E2=0)),E1=U0},Q0.diffed=function(_){W3&&W3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(w3.push($)!==1&&z3===Q0.requestAnimationFrame||((z3=Q0.requestAnimationFrame)||x9)(C9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),E1=U0=null},Q0.__c=function(_,$){$.some(function(j){try{j.__h.some(h2),j.__h=j.__h.filter(function(Z){return!Z.__||w1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],Q0.__e(Z,j.__v)}}),G3&&G3(_,$)},Q0.unmount=function(_){V3&&V3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{h2(Z)}catch(N){$=N}}),j.__H=void 0,$&&Q0.__e($,j.__v))};var q3=typeof requestAnimationFrame=="function";function x9(_){var $,j=function(){clearTimeout(Z),q3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);q3&&($=requestAnimationFrame(j))}function h2(_){var $=U0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U0=$}function w1(_){var $=U0;_.__c=_.__(),U0=$}function P3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function M3(_,$){return typeof $=="function"?$(_):$}var b3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,b3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},L3=new Map;function S9(_){var $=L3.get(this);return $||($=new Map,L3.set(this,$)),($=b3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",q=[0],X=function(U){z===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,K):z===3&&(U||K)?(q.push(3,U,K),z=2):z===2&&K==="..."&&U?q.push(4,U,0):z===2&&K&&!U?q.push(5,0,!0,K):z>=5&&((K||!U&&z===5)&&(q.push(z,0,K,N),z=6),U&&(q.push(z,U,0,N),z=6)),K=""},O=0;O<j.length;O++){O&&(z===1&&X(),X(O));for(var W=0;W<j[O].length;W++)Z=j[O][W],z===1?Z==="<"?(X(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[O][W+1]===">")?(X(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return X(),q}(_)),$),arguments,[])).length>1?$:$[0]}var B=S9.bind(F3);var j$={};J9(j$,{uploadWorkspaceFile:()=>a2,uploadMedia:()=>m1,updateWorkspaceFile:()=>s9,submitAdaptiveCardAction:()=>g1,streamSidePrompt:()=>l9,steerAgentQueueItem:()=>i9,setWorkspaceVisibility:()=>M2,setAgentThoughtVisibility:()=>h1,sendPeerAgentMessage:()=>g9,sendAgentMessage:()=>G2,searchPosts:()=>S1,respondToAgentRequest:()=>r2,renameWorkspaceFile:()=>o1,renameChatBranch:()=>u9,removeAgentQueueItem:()=>h9,pruneChatBranch:()=>m9,moveWorkspaceEntry:()=>r1,getWorkspaceTree:()=>P2,getWorkspaceRawUrl:()=>t2,getWorkspaceFile:()=>n1,getWorkspaceDownloadUrl:()=>e2,getWorkspaceBranch:()=>d9,getTimeline:()=>y2,getThumbnailUrl:()=>i1,getThread:()=>T1,getPostsByHashtag:()=>x1,getMediaUrl:()=>$$,getMediaText:()=>l1,getMediaInfo:()=>V2,getMediaBlob:()=>n9,getChatBranches:()=>v9,getAgents:()=>v1,getAgentThought:()=>c1,getAgentStatus:()=>u1,getAgentQueueState:()=>c9,getAgentModels:()=>w2,getAgentContext:()=>p9,getActiveChatAgents:()=>R1,forkChatBranch:()=>A2,deleteWorkspaceFile:()=>a1,deletePost:()=>f1,createWorkspaceFile:()=>s1,createReply:()=>R9,createPost:()=>f9,attachWorkspaceFile:()=>d1,addToWhitelist:()=>p1,SSEClient:()=>_1});async function l_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function I3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function T9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let X of q){let O=I3(X);if(O)$(O.event,O.data)}}N+=Z.decode();let z=I3(N);if(z)$(z.event,z.data)}async function y2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return l_(Z)}async function x1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return l_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return l_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${q}`)}async function T1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return l_(`/thread/${_}${j}`)}async function f9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return l_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function R9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return l_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function f1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return l_(N,{method:"DELETE"})}async function G2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return l_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function R1(){return l_("/agent/active-chats")}async function v9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/branches${$}`)}async function A2(_,$={}){return l_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function u9(_,$={}){return l_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function m9(_){return l_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function g9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return l_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function v1(){return l_("/agent/roster")}async function u1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/status${$}`)}async function p9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/context${$}`)}async function c9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/queue-state${$}`)}async function h9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function w2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/models${$}`)}async function m1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function r2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function g1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function l9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await T9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function p1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function c1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return l_(j)}async function h1(_,$,j){return l_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function $$(_){return`/media/${_}`}function i1(_){return`/media/${_}/thumbnail`}async function V2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function l1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function n9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function P2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return l_(Z)}async function d9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return l_($)}async function n1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return l_(N)}async function s9(_,$){return l_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function d1(_){return l_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function a2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let q=await G.json().catch(()=>({error:"Upload failed"})),X=Error(q.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=q.code,X}return G.json()}async function s1(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function o1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function a1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return l_($,{method:"DELETE"})}async function M2(_,$=!1){return l_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function t2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function e2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class _1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function Z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function X2(_,$=!1){let j=Z$(_);if(j===null)return $;return j==="true"}function q2(_,$=null){let j=Z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function $1(_){return String(_||"").trim().toLowerCase()}function t1(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return $1($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=$1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function x3(_,$,j={}){let Z=t1($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return $1(z?.agent_name).startsWith(Z)})}function e1(_){let $=$1(_);return $?`@${$} `:""}function S3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function T3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function X$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,q=`${_}-file-name`,X=`${_}-file-remove`,O=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${O}
      <span class=${q}>${$}</span>
      ${Z&&B`
        <button
          class=${X}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var o9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function r9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${f3(j)} / ${f3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function f3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function R3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:q=[],onRemoveFileRef:X,onClearFileRefs:O,messageRefs:W=[],onRemoveMessageRef:U,onClearMessageRefs:M,activeModel:m=null,modelUsage:u=null,thinkingLevel:f=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:x=!1,notificationPermission:I="default",onToggleNotifications:i,onModelChange:n,onModelStateChange:__,activeEditorPath:d=null,onAttachEditorFile:K_,onOpenFilePill:c,followupQueueItems:X_=[],onInjectQueuedFollowup:o_,onRemoveQueuedFollowup:$_,onSubmitIntercept:t,onMessageResponse:z_,onPopOutChat:Z_,isAgentActive:O_=!1,activeChatAgents:g_=[],currentChatJid:L_="web:default",connectionStatus:x_="connected",onSetFileRefs:B_,onSetMessageRefs:U_,onSubmitError:p_,onSwitchChat:w_,onRenameSession:R_,onCreateSession:Y0}){let[c_,G_]=T(""),[e,P_]=T(""),[V_,M_]=T([]),[j0,t_]=T(!1),[S_,A_]=T([]),[n_,h_]=T(0),[Z0,b_]=T(!1),[I_,N0]=T([]),[c0,S0]=T(0),[n0,r_]=T(!1),[y_,G0]=T(!1),[v_,q0]=T(!1),[z0,E_]=T(!1),[E0,u0]=T([]),[F_,F0]=T(!1),[h0,z$]=T(0),[S,o]=T(null),j_=D(null),C_=D(null),u_=D(null),f_=D(null),f0=D(null),F$=D(null),K$=D(null),H$=D(null),L0=D(0),c$=200,O0=(Q)=>{let w=new Set,C=[];for(let l of Q||[]){if(typeof l!=="string")continue;let Y_=l.trim();if(!Y_||w.has(Y_))continue;w.add(Y_),C.push(Y_)}return C},A0=()=>{let Q=Z$("piclaw_compose_history");if(!Q)return[];try{let w=JSON.parse(Q);if(!Array.isArray(w))return[];return O0(w)}catch{return[]}},J$=(Q)=>{K0("piclaw_compose_history",JSON.stringify(Q))},m0=D(A0()),H0=D(-1),S$=D(""),g0=c_.trim()||V_.length>0||q.length>0||W.length>0,Z2=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),W0=typeof window<"u"&&typeof Notification<"u",Y$=typeof window<"u"?Boolean(window.isSecureContext):!1,w0=W0&&Y$&&I!=="denied",P0=I==="granted"&&x,d0=P0?"Disable notifications":"Enable notifications",L$=V_.length>0||q.length>0||W.length>0,O$=x_==="disconnected"?"Reconnecting":String(x_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),h$=x_==="disconnected"?"Reconnecting":`Connection: ${O$}`,E$=S3(g_,{currentChatJid:L_,limit:4}),k0=!j&&T3({footerWidth:h0,visibleAgentCount:E$.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),k$=(()=>{let Q=new Set,w=[];for(let C of Array.isArray(g_)?g_:[]){let l=typeof C?.chat_jid==="string"?C.chat_jid.trim():"";if(!l||l===L_||Q.has(l))continue;if(!(typeof C?.agent_name==="string"?C.agent_name.trim():""))continue;Q.add(l),w.push(C)}return w})(),J0=k$.length>0&&typeof w_==="function",M0=!j&&typeof R_==="function",A$=!j&&typeof Y0==="function",b0=!j&&(J0||M0||A$),w$=m||"",W$=E&&f?` (${f})`:"",i$=W$.trim()?`${f}`:"",l$=typeof u?.hint_short==="string"?u.hint_short.trim():"",N2=[i$||null,l$||null].filter(Boolean).join(" • "),d_=[w$?`Current model: ${w$}${W$}`:null,u?.plan?`Plan: ${u.plan}`:null,l$||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),I0=y_?"Switching model…":d_.join(" • ")||`Current model: ${w$}${W$} (tap to open model picker)`,y0=(Q)=>{if(!Q||typeof Q!=="object")return;let w=Q.model??Q.current;if(typeof __==="function")__({model:w??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(w&&typeof n==="function")n(w)},B$=(Q)=>{let w=Q||j_.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},n$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let C=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let k_=0;k_<C.length;k_+=1)if(C[k_].trim()==="Files:"&&C[k_+1]&&/^\s*-\s+/.test(C[k_+1])){l=k_;break}if(l===-1)return{content:Q,fileRefs:[]};let Y_=[],Q_=l+1;for(;Q_<C.length;Q_+=1){let k_=C[Q_];if(/^\s*-\s+/.test(k_))Y_.push(k_.replace(/^\s*-\s+/,"").trim());else if(!k_.trim())break;else break}if(Y_.length===0)return{content:Q,fileRefs:[]};let T_=C.slice(0,l),D0=C.slice(Q_);return{content:[...T_,...D0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y_}},d$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let C=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let k_=0;k_<C.length;k_+=1)if(C[k_].trim()==="Referenced messages:"&&C[k_+1]&&/^\s*-\s+/.test(C[k_+1])){l=k_;break}if(l===-1)return{content:Q,messageRefs:[]};let Y_=[],Q_=l+1;for(;Q_<C.length;Q_+=1){let k_=C[Q_];if(/^\s*-\s+/.test(k_)){let t0=k_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(t0)Y_.push(t0[1])}else if(!k_.trim())break;else break}if(Y_.length===0)return{content:Q,messageRefs:[]};let T_=C.slice(0,l),D0=C.slice(Q_);return{content:[...T_,...D0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y_}},Q$=(Q)=>{let w=n$(Q||""),C=d$(w.content||"");return{text:C.content||"",fileRefs:w.fileRefs,messageRefs:C.messageRefs}},p0=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){b_(!1),A_([]);return}let w=Q.toLowerCase().split(" ")[0];if(w.length<1){b_(!1),A_([]);return}let C=o9.filter((l)=>l.name.startsWith(w)||l.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(C.length>0&&!(C.length===1&&C[0].name===w))r_(!1),N0([]),A_(C),h_(0),b_(!0);else b_(!1),A_([])},V0=(Q)=>{let w=c_,C=w.indexOf(" "),l=C>=0?w.slice(C):"",Y_=Q.name+l;G_(Y_),b_(!1),A_([]),requestAnimationFrame(()=>{let Q_=j_.current;if(!Q_)return;let T_=Y_.length;Q_.selectionStart=T_,Q_.selectionEnd=T_,Q_.focus()})},B0=(Q)=>{if(t1(Q)==null){r_(!1),N0([]);return}let w=x3(g_,Q,{currentChatJid:L_});if(w.length>0&&!(w.length===1&&e1(w[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))b_(!1),A_([]),N0(w),S0(0),r_(!0);else r_(!1),N0([])},i0=(Q)=>{let w=e1(Q?.agent_name);if(!w)return;G_(w),r_(!1),N0([]),requestAnimationFrame(()=>{let C=j_.current;if(!C)return;let l=w.length;C.selectionStart=l,C.selectionEnd=l,C.focus()})},P$=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!J0&&!M0&&!A$)return;q0(!1),b_(!1),A_([]),r_(!1),N0([]),E_((w)=>!w)},s$=(Q)=>{let w=typeof Q==="string"?Q.trim():"";if(E_(!1),!w||w===L_){requestAnimationFrame(()=>j_.current?.focus());return}w_?.(w)},U$=async()=>{if(typeof R_!=="function")return;E_(!1);try{await R_()}catch(Q){console.warn("Failed to rename session:",Q)}requestAnimationFrame(()=>j_.current?.focus())},s0=async()=>{if(typeof Y0!=="function")return;E_(!1);try{await Y0()}catch(Q){console.warn("Failed to create session:",Q)}requestAnimationFrame(()=>j_.current?.focus())},o0=(Q)=>{if(j)P_(Q);else G_(Q),p0(Q),B0(Q);requestAnimationFrame(()=>B$())},r0=(Q)=>{let w=j?e:c_,C=w&&!w.endsWith(`
`)?`
`:"",l=`${w}${C}${Q}`.trimStart();o0(l)},C0=(Q)=>{let w=Q?.command?.model_label;if(w)return w;let C=Q?.command?.message;if(typeof C==="string"){let l=C.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},G$=async(Q)=>{if(j||y_)return;G0(!0);try{let w=await G2("default",Q,null,[],null,L_),C=C0(w);y0({model:C??m??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let l=await w2(L_);if(l)y0(l)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{G0(!1)}},o$=async()=>{await G$("/cycle-model")},T$=async(Q)=>{if(!Q||y_)return;if(await G$(`/model ${Q}`))q0(!1)},M$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),E_(!1),q0((w)=>!w)},f$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return O_?"queue":null},V$=async(Q,w,C={})=>{let{includeMedia:l=!0,includeFileRefs:Y_=!0,includeMessageRefs:Q_=!0,clearAfterSubmit:T_=!0,recordHistory:D0=!0}=C||{},a0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:c_,k_=typeof a0==="string"?a0:"";if(!k_.trim()&&(l?V_.length===0:!0)&&(Y_?q.length===0:!0)&&(Q_?W.length===0:!0))return;b_(!1),A_([]),r_(!1),N0([]),E_(!1),o(null);let t0=l?[...V_]:[],m$=Y_?[...q]:[],L=Q_?[...W]:[],H=k_.trim();if(D0&&H){let k=m0.current,v=O0(k.filter((s)=>s!==H));if(v.push(H),v.length>200)v.splice(0,v.length-200);m0.current=v,J$(v),H0.current=-1,S$.current=""}let A=()=>{if(l)M_([...t0]);if(Y_)B_?.(m$);if(Q_)U_?.(L);G_(H),requestAnimationFrame(()=>B$())};if(T_)G_(""),M_([]),O?.(),M?.();(async()=>{try{if(await t?.({content:H,submitMode:w,fileRefs:m$,messageRefs:L,mediaFiles:t0})){_?.();return}let v=[];for(let m_ of t0){let R0=await m1(m_);v.push(R0.id)}let s=m$.length?`Files:
${m$.map((m_)=>`- ${m_}`).join(`
`)}`:"",r=L.length?`Referenced messages:
${L.map((m_)=>`- message:${m_}`).join(`
`)}`:"",a=v.length?`Images:
${v.map((m_,R0)=>{let x0=t0[R0]?.name||`attachment-${R0+1}`;return`- attachment:${m_} (${x0})`}).join(`
`)}`:"",g=[H,s,r,a].filter(Boolean).join(`

`),W_=await G2("default",g,null,v,f$(w),L_);if(z_?.(W_),W_?.command){y0({model:W_.command.model_label??m??null,thinking_level:W_.command.thinking_level,supports_thinking:W_.command.supports_thinking});try{let m_=await w2(L_);if(m_)y0(m_)}catch{}}_?.()}catch(k){if(T_)A();let v=k?.message||"Failed to send message.";o(v),p_?.(v),console.error("Failed to post:",k)}})()},r$=(Q)=>{o_?.(Q)},R$=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),P_(""),G?.();return}if(!j&&z0&&Q.key==="Escape"){Q.preventDefault(),E_(!1);return}if(n0&&I_.length>0){let w=j_.current?.value??(j?e:c_);if(!String(w||"").match(/^@([a-zA-Z0-9_-]*)$/))r_(!1),N0([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),S0((C)=>(C+1)%I_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),S0((C)=>(C-1+I_.length)%I_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),i0(I_[c0]);return}if(Q.key==="Escape"){Q.preventDefault(),r_(!1),N0([]);return}}}if(Z0&&S_.length>0){let w=j_.current?.value??(j?e:c_);if(!String(w||"").startsWith("/"))b_(!1),A_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),h_((C)=>(C+1)%S_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),h_((C)=>(C-1+S_.length)%S_.length);return}if(Q.key==="Tab"){Q.preventDefault(),V0(S_[n_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(j_.current?.value??(j?e:c_)).includes(" ")){Q.preventDefault();let Y_=S_[n_];b_(!1),A_([]),V$(Y_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),b_(!1),A_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let w=j_.current;if(!w)return;let C=w.value||"",l=w.selectionStart===0&&w.selectionEnd===0,Y_=w.selectionStart===C.length&&w.selectionEnd===C.length;if(Q.key==="ArrowUp"&&l||Q.key==="ArrowDown"&&Y_){let Q_=m0.current;if(!Q_.length)return;Q.preventDefault();let T_=H0.current;if(Q.key==="ArrowUp"){if(T_===-1)S$.current=C,T_=Q_.length-1;else if(T_>0)T_-=1;H0.current=T_,o0(Q_[T_]||"")}else{if(T_===-1)return;if(T_<Q_.length-1)T_+=1,H0.current=T_,o0(Q_[T_]||"");else H0.current=-1,o0(S$.current||""),S$.current=""}requestAnimationFrame(()=>{let D0=j_.current;if(!D0)return;let a0=D0.value.length;D0.selectionStart=a0,D0.selectionEnd=a0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let w=j_.current?.value??(j?e:c_);if(j){if(w.trim())N?.(w.trim(),Z)}else V$(w,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let w=j_.current?.value??(j?e:c_);if(j){if(w.trim())N?.(w.trim(),Z)}else V$(w)}},b$=(Q)=>{let w=Array.from(Q||[]).filter((C)=>C&&C.type&&C.type.startsWith("image/"));if(!w.length)return;M_((C)=>[...C,...w]),o(null)},v$=(Q)=>{b$(Q.target.files),Q.target.value=""},H_=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),L0.current+=1,t_(!0)},z2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),L0.current=Math.max(0,L0.current-1),L0.current===0)t_(!1)},Q2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";t_(!0)},u$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),L0.current=0,t_(!1),b$(Q.dataTransfer?.files||[])},a$=(Q)=>{if(j)return;let w=Q.clipboardData?.items;if(!w||!w.length)return;let C=[];for(let l of w){if(l.kind!=="file")continue;let Y_=l.getAsFile?.();if(Y_)C.push(Y_)}if(C.length>0)Q.preventDefault(),b$(C)},U2=(Q)=>{M_((w)=>w.filter((C,l)=>l!==Q))},F2=()=>{o(null),M_([]),O?.(),M?.()},t$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:w,longitude:C,accuracy:l}=Q.coords,Y_=`${w.toFixed(5)}, ${C.toFixed(5)}`,Q_=Number.isFinite(l)?` ±${Math.round(l)}m`:"",T_=`https://maps.google.com/?q=${w},${C}`,D0=`Location: ${Y_}${Q_} ${T_}`;r0(D0)},(Q)=>{let w=Q?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!v_)return;F0(!0),w2(L_).then((Q)=>{let w=Array.isArray(Q?.models)?Q.models.filter((C)=>typeof C==="string"&&C.trim().length>0):[];w.sort((C,l)=>C.localeCompare(l,void 0,{sensitivity:"base"})),u0(w),y0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),u0([])}).finally(()=>{F0(!1)})},[v_,m]),R(()=>{if(j)q0(!1),E_(!1),b_(!1),A_([]),r_(!1),N0([])},[j]),R(()=>{if(z0&&!b0)E_(!1)},[z0,b0]),R(()=>{if(!v_)return;let Q=(w)=>{let C=f_.current,l=f0.current,Y_=w.target;if(C&&C.contains(Y_))return;if(l&&l.contains(Y_))return;q0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[v_]),R(()=>{if(!z0)return;let Q=(w)=>{let C=F$.current,l=K$.current,Y_=w.target;if(C&&C.contains(Y_))return;if(l&&l.contains(Y_))return;E_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[z0]),R(()=>{let Q=()=>{let Q_=H$.current?.clientWidth||0;z$((T_)=>T_===Q_?T_:Q_)};Q();let w=H$.current,C=0,l=()=>{if(C)cancelAnimationFrame(C);C=requestAnimationFrame(()=>{C=0,Q()})},Y_=null;if(w&&typeof ResizeObserver<"u")Y_=new ResizeObserver(()=>l()),Y_.observe(w);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(C)cancelAnimationFrame(C);if(Y_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,m,E$.length,F?.percent]);let H2=(Q)=>{let w=Q.target.value;if(o(null),z0)E_(!1);B$(Q.target),o0(w)};return R(()=>{requestAnimationFrame(()=>B$())},[c_,e,j]),R(()=>{if(j)return;B0(c_)},[g_,L_,c_,j]),B`
        <div class="compose-box">
            ${!j&&X_.length>0&&B`
                <div class="compose-queue-stack">
                    ${X_.map((Q)=>{let w=typeof Q?.content==="string"?Q.content:"",C=Q$(w);if(!C.text.trim()&&C.fileRefs.length===0&&C.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${w}>
                                    ${C.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${C.text}</div>
                                    `}
                                    ${(C.messageRefs.length>0||C.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${C.messageRefs.map((l)=>B`
                                                <${X$}
                                                    key=${"queue-msg-"+l}
                                                    prefix="compose"
                                                    label=${"msg:"+l}
                                                    title=${"Message reference: "+l}
                                                    icon="message"
                                                />
                                            `)}
                                            ${C.fileRefs.map((l)=>{let Y_=l.split("/").pop()||l;return B`
                                                    <${X$}
                                                        key=${"queue-file-"+l}
                                                        prefix="compose"
                                                        label=${Y_}
                                                        title=${l}
                                                        onClick=${()=>c?.(l)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>r$(Q)}
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
                                        aria-label="Cancel queued message"
                                        onClick=${()=>$_?.(Q)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${j0?" drag-active":""}`}
                onDragEnter=${H_}
                onDragOver=${Q2}
                onDragLeave=${z2}
                onDrop=${u$}
            >
                <div class="compose-input-main">
                    ${S&&!L$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${S}</div>
                    `}
                    ${L$&&B`
                        <div class="compose-file-refs">
                            ${S&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${S}</div>
                            `}
                            ${W.map((Q)=>{return B`
                                    <${X$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let w=Q.split("/").pop()||Q;return B`
                                    <${X$}
                                        prefix="compose"
                                        label=${w}
                                        title=${Q}
                                        onClick=${()=>c?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(Q)}
                                    />
                                `})}
                            ${V_.map((Q,w)=>{let C=Q?.name||`attachment-${w+1}`;return B`
                                    <${X$}
                                        key=${C+w}
                                        prefix="compose"
                                        label=${C}
                                        title=${C}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>U2(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${F2}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Z_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Z_?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${j_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?e:c_}
                        onInput=${H2}
                        onKeyDown=${R$}
                        onPaste=${a$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${n0&&I_.length>0&&B`
                        <div class="slash-autocomplete" ref=${u_}>
                            ${I_.map((Q,w)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${w===c0?" active":""}`}
                                    onMouseDown=${(C)=>{C.preventDefault(),i0(Q)}}
                                    onMouseEnter=${()=>S0(w)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${Z0&&S_.length>0&&B`
                        <div class="slash-autocomplete" ref=${C_}>
                            ${S_.map((Q,w)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${w===n_?" active":""}`}
                                    onMouseDown=${(C)=>{C.preventDefault(),V0(Q)}}
                                    onMouseEnter=${()=>h_(w)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${v_&&!j&&B`
                        <div class="compose-model-popup" ref=${f_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F_&&E0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F_&&E0.map((Q)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{T$(Q)}}
                                        disabled=${y_}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{o$()}}
                                    disabled=${y_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${z0&&!j&&B`
                        <div class="compose-model-popup" ref=${F$}>
                            <div class="compose-model-popup-title">Switch active session</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Active sessions">
                                ${!J0&&B`
                                    <div class="compose-model-popup-empty">No other active sessions.</div>
                                `}
                                ${J0&&k$.map((Q)=>B`
                                    <button
                                        key=${Q.chat_jid}
                                        type="button"
                                        role="menuitem"
                                        class="compose-model-popup-item"
                                        onClick=${()=>s$(Q.chat_jid)}
                                    >
                                        ${`@${Q.agent_name}${Q.display_name?` — ${Q.display_name}`:""}${Q.is_active?" • active":""}`}
                                    </button>
                                `)}
                            </div>
                            ${(A$||M0)&&B`
                                <div class="compose-model-popup-actions">
                                    ${A$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{s0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${M0&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{U$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${H$}>
                    ${!j&&m&&B`
                    <div class="compose-meta-row">
                        ${!j&&m&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${f0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${I0}
                                    aria-label="Open model picker"
                                    onClick=${M$}
                                    disabled=${y_}
                                >
                                    ${y_?"Switching…":w$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y_&&N2&&B`
                                        <span class="compose-model-usage-hint" title=${I0}>
                                            ${N2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${k0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${E$.map((Q)=>B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>i0(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&B`
                        <${r9} usage=${F} />
                    `}
                    ${b0&&B`
                        <button
                            ref=${K$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${z0?" active":""}`}
                            onClick=${P$}
                            title=${z0?"Hide active sessions":"Switch active session/agent"}
                            aria-label="Switch active session/agent"
                            aria-expanded=${z0?"true":"false"}
                        >
                            <span>@</span>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
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
                    ${Z2&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${t$}
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
                    ${w0&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${P0?" active":""}`}
                            onClick=${i}
                            title=${d0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${d&&K_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${d}`}
                                type="button"
                                disabled=${q.includes(d)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${v$} />
                        </label>
                    `}
                    ${(x_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${x_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${x_}" title=${h$}>
                                    ${O$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{V$()}}
                                    disabled=${!g0}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var m3="piclaw_theme",j4="piclaw_tint",I2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},g3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},v3={default:{label:"Default",mode:"auto",light:I2,dark:g3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},a9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],e$={theme:"default",tint:null},p3="light",_4=!1;function Z4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function t9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((X)=>Number.isFinite(X)))return null;let q=`#${[z,K,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:q}}function c3(_){return O2(_)||t9(_)}function b2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function $4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function e9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function _7(_){return e9(_)>0.4?"#000000":"#ffffff"}function h3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function N4(_){return v3[_]||v3.default}function $7(_){return _.mode==="auto"?h3():_.mode}function i3(_,$){let j=N4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||I2}function l3(_,$,j){let Z=c3($);if(!Z)return _;let N=O2(_.bgPrimary),z=O2(_.bgSecondary),K=O2(_.bgHover),G=O2(_.borderColor);if(!N||!z||!K||!G)return _;let X=O2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:b2(N,Z,0.08),bgSecondary:b2(z,Z,0.12),bgHover:b2(K,Z,0.16),borderColor:b2(G,Z,0.08),accent:Z.hex,accentHover:X?b2(Z,X,0.18):Z.hex}}function j7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=c3(Z),z=N?$4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?$4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?$4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?_7(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":q,"--danger-color":_.danger||I2.danger,"--success-color":_.success||I2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,W])=>{if(W)j.style.setProperty(O,W)})}function Z7(){if(typeof document>"u")return;let _=document.documentElement;a9.forEach(($)=>_.style.removeProperty($))}function L2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function u3(_){let $=Z4(e$?.theme||"default"),j=e$?.tint?String(e$.tint).trim():null,Z=i3($,_);if($==="default"&&j)Z=l3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?g3.bgPrimary:I2.bgPrimary}function N7(_,$){if(typeof document>"u")return;let j=L2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=L2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",u3("light"));let N=L2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",u3("dark"));let z=L2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=L2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let G=L2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function z7(){if(typeof window>"u")return;let _={...e$,mode:p3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function z4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=Z4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=N4(j),z=$7(N),K=i3(j,z);e$={theme:j,tint:Z},p3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=l3(K,Z,z);if(j==="default"&&!Z)Z7();else j7(q,z);if(N7(q.bgPrimary,z),z7(),$.persist!==!1)if(K0(m3,j),Z)K0(j4,Z);else K0(j4,"")}function j1(){if(N4(e$.theme).mode!=="auto")return;z4(e$,{persist:!1})}function n3(){if(typeof window>"u")return()=>{};let _=Z4(Z$(m3)||"default"),$=Z$(j4),j=$?$.trim():null;if(z4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!_4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",j1);else if(Z.addListener)Z.addListener(j1);return _4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",j1);else if(Z.removeListener)Z.removeListener(j1);_4=!1}}return()=>{}}function d3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;z4({theme:j||"default",tint:Z},{persist:!0})}function s3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return h3()}var Z1=/#(\w+)/g,K7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Y7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),W7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),G7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},V7=new Set(["http:","https:","mailto:",""]);function K4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function _2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!V7.has(Z.protocol))return null;return Z.href}catch{return null}}function o3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!Y7.has(G)){let X=K.parentNode;if(!X)continue;while(K.firstChild)X.insertBefore(K.firstChild,K);X.removeChild(K);continue}let q=G7[G]||new Set;for(let X of Array.from(K.attributes)){let O=X.name.toLowerCase(),W=X.value;if(O.startsWith("on")){K.removeAttribute(X.name);continue}if(O.startsWith("data-")||O.startsWith("aria-"))continue;if(q.has(O)||W7.has(O)){if(O==="href"){let U=_2(W);if(!U)K.removeAttribute(X.name);else if(K.setAttribute(X.name,U),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(O==="src"){let U=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,M=_2(U,{allowDataImage:G==="img"});if(!M)K.removeAttribute(X.name);else K.setAttribute(X.name,M)}continue}K.removeAttribute(X.name)}}return j.body.innerHTML}function r3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function N1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=r3(j);if(N===j)break;j=N}return j}function X7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function q7(_){if(!_)return _;return N1(_,5)}function L7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function O7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function B7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=q7(z);return`<div class="mermaid-container" data-mermaid="${L7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function a3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var Q7={span:new Set(["title","class","lang","dir"])};function U7(_,$){let j=Q7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let G=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${K4(G)}"`)}return Z.join("")}function t3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,G=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=G.split(/\s+/,1),X=q.toLowerCase();if(!X||!K7.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let O=G.slice(q.length).trim(),W=U7(X,O);return`<${X}${W}>`})}function e3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function _6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function F7(_){if(!window.katex)return _;let $=(K)=>r3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_BLOCK_${O}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_INLINE_${O}@@`}),{html:q,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,X)=>{let O=Number(X);return G[O]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,q)=>{try{let X=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${K4(X.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,q)=>{if(/\s$/.test(q))return K;try{let X=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${K4(X.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function H7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(Z1.lastIndex=0,!Z1.test(K))continue;Z1.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let q=K.split(Z1);if(q.length<=1)continue;let X=$.createDocumentFragment();q.forEach((O,W)=>{if(W%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",O),U.textContent=`#${O}`,X.appendChild(U)}else X.appendChild($.createTextNode(O))}),z.parentNode?.replaceChild(X,z)}return $.body.innerHTML}function J7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function l0(_,$,j={}){if(!_)return"";let Z=J7(_),{text:N,blocks:z}=X7(Z),K=N1(N,2),q=a3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=t3(q),O=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return O=e3(O),O=_6(O),O=F7(O),O=H7(O),O=B7(O,z),O=o3(O,j),O}function z1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=N1($,2),N=a3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=t3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=e3(K),K=_6(K),K=o3(K),K}function D7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((q)=>{let[X,O]=q.split(",").map(Number);return{x:X,y:O}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let G=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let X=K[q-1],O=K[q],W=K[q+1],U=O.x-X.x,M=O.y-X.y,m=W.x-O.x,u=W.y-O.y,f=Math.sqrt(U*U+M*M),E=Math.sqrt(m*m+u*u),F=Math.min($,f/2,E/2);if(F<0.5){G.push(`L ${O.x},${O.y}`);continue}let x=O.x-U/f*F,I=O.y-M/f*F,i=O.x+m/E*F,n=O.y+u/E*F,d=U*u-M*m>0?1:0;G.push(`L ${x},${I}`),G.push(`A ${F},${F} 0 0 ${d} ${i},${n}`)}return G.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${G.join(" ")}"${z}/>`})}async function C$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=s3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,q=O7(G||""),X=N1(q,2),O=await $(X,{...N,transparent:!0});O=D7(O),K.innerHTML=O,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function $6(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function j6(_){return String(_||"").trim()||"web:default"}function Z6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function N6(_){if(!_)return!1;return _.status!=="running"}function z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function K6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?z1(_.thinking):"",G=_?.answer?l0(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&K)C$(N.current).catch(()=>{})},[K]),R(()=>{if(z.current&&G)C$(z.current).catch(()=>{})},[G]),!_)return null;let q=_.status==="running",X=Boolean(String(_.answer||"").trim()),O=Boolean(String(_.thinking||"").trim()),W=Z6(_),U=N6(_),M=!q&&X,m=q?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${O&&B`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${W&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!M}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var Y6="PiClaw";function Y4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],q=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",O=X?X:null,W=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:G,image:O||(W?"/static/icon-192.png":null)}}function W6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function G6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function V6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(G||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function E7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function C2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function X6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return C2(_)?"Compacting context":"Working..."}function k7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function q6(_,$=Date.now()){let j=E7(_);if(j===null)return null;return k7(Math.max(0,$-j))}function L6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:q}){let W=(e)=>{if(!e)return{text:"",totalLines:0,fullText:""};if(typeof e==="string"){let j0=e,t_=j0?j0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:j0,totalLines:t_,fullText:j0}}let P_=e.text||"",V_=e.fullText||e.full_text||P_,M_=Number.isFinite(e.totalLines)?e.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P_,totalLines:M_,fullText:V_}},U=160,M=(e)=>String(e||"").replace(/<\/?internal>/gi,""),m=(e)=>{if(!e)return 1;return Math.max(1,Math.ceil(e.length/160))},u=(e,P_,V_)=>{let M_=(e||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!M_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let j0=M_.split(`
`),t_=j0.length>P_?j0.slice(0,P_).join(`
`):M_,S_=Number.isFinite(V_)?V_:j0.reduce((h_,Z0)=>h_+m(Z0),0),A_=t_?t_.split(`
`).reduce((h_,Z0)=>h_+m(Z0),0):0,n_=Math.max(S_-A_,0);return{text:t_,omitted:n_,totalLines:S_,visibleLines:A_}},f=W(j),E=W(Z),F=W($),x=Boolean(f.text)||f.totalLines>0,I=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!x&&!I&&!N&&!z)return null;let[n,__]=T(new Set),[d,K_]=T(()=>Date.now()),c=(e)=>__((P_)=>{let V_=new Set(P_),M_=!V_.has(e);if(M_)V_.add(e);else V_.delete(e);if(typeof q==="function")q(e,M_);return V_});R(()=>{__(new Set)},[K]);let X_=C2(_);R(()=>{if(!X_)return;K_(Date.now());let e=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(e)},[X_,_?.started_at,_?.startedAt]);let o_=_?.turn_id||K,$_=V6(o_),t=G?"turn-dot turn-dot-queued":"turn-dot",z_=(e)=>e,Z_=Boolean(_?.last_activity||_?.lastActivity),O_=(e)=>e==="warning"?"#f59e0b":e==="error"?"var(--danger-color)":e==="success"?"var(--success-color)":$_,g_=z?.kind||"info",L_=O_(g_),x_=O_(_?.kind||(X_?"warning":"info")),B_="",U_=_?.title,p_=_?.status;if(_?.type==="plan")B_=U_?`Planning: ${U_}`:"Planning...";else if(_?.type==="tool_call")B_=U_?`Running: ${U_}`:"Running tool...";else if(_?.type==="tool_status")B_=U_?`${U_}: ${p_||"Working..."}`:p_||"Working...";else if(_?.type==="error")B_=U_||"Agent error";else B_=U_||p_||"Working...";if(Z_)B_="Last activity just now";let w_=({panelTitle:e,text:P_,fullText:V_,totalLines:M_,maxLines:j0,titleClass:t_,panelKey:S_})=>{let A_=n.has(S_),n_=V_||P_||"",h_=S_==="thought"||S_==="draft"?M(n_):n_,Z0=typeof j0==="number",b_=A_&&Z0,I_=Z0?u(h_,j0,M_):{text:h_||"",omitted:0,totalLines:Number.isFinite(M_)?M_:0};if(!h_&&!(Number.isFinite(I_.totalLines)&&I_.totalLines>0))return null;let N0=`agent-thinking-body${Z0?" agent-thinking-body-collapsible":""}`,c0=Z0?`--agent-thinking-collapsed-lines: ${j0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${A_?"true":"false"}
                data-collapsible=${Z0?"true":"false"}
                style=${$_?`--turn-color: ${$_};`:""}
            >
                <div class="agent-thinking-title ${t_||""}">
                    ${$_&&B`<span class=${t} aria-hidden="true"></span>`}
                    ${e}
                    ${b_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${e} panel`}
                            onClick=${()=>c(S_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${N0}
                    style=${c0}
                    dangerouslySetInnerHTML=${{__html:z1(h_)}}
                />
                ${!A_&&I_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(S_)}>
                        ▸ ${I_.omitted} more lines
                    </button>
                `}
                ${A_&&I_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(S_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},R_=N?.tool_call?.title,Y0=R_?`Awaiting approval: ${R_}`:"Awaiting approval",c_=X_?q6(_,d):null,G_=(e,P_,V_=null)=>{let M_=X6(e);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P_?`--turn-color: ${P_};`:""}
                title=${e?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P_&&B`<span class=${t} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${M_}</span>
                    ${V_&&B`<span class="agent-status-elapsed">${V_}</span>`}
                </div>
                ${e.detail&&B`<div class="agent-thinking-body">${e.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&G_(z,L_)}
            ${_?.type==="intent"&&G_(_,x_,c_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${$_?`--turn-color: ${$_};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y0}</span>
                </div>
            `}
            ${x&&w_({panelTitle:z_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${I&&w_({panelTitle:z_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&w_({panelTitle:z_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${$_?`--turn-color: ${$_};`:""}>
                    ${$_&&B`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${B_}</span>
                </div>
            `}
        </div>
    `}function O6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",q=Z?.rawInput||{},X=q.command||q.commands&&q.commands[0]||null,O=q.diff||null,W=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((x)=>x?.path).filter((x)=>Boolean(x)),u=Array.from(new Set([W,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(x)=>{try{await r2(j,x,z||null),$()}catch(I){console.error("Failed to respond to agent request:",I)}},E=async()=>{try{await p1(K,`Auto-approved: ${K}`),await r2(j,"approved",z||null),$()}catch(x){console.error("Failed to add to whitelist:",x)}},F=N&&N.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(U||X||O||u.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${u.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((x,I)=>B`<li key=${I}>${x}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&B`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${O&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?N.map((x)=>B`
                            <button 
                                key=${x.optionId||x.id||String(x)}
                                class="agent-request-btn ${x.kind==="allow_once"||x.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(x.optionId||x.id||x)}
                            >
                                ${x.name||x.label||x.optionId||x.id||String(x)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function B6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function x2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function N$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function $2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),A7=new Set(["text/markdown"]),w7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),P7=new Set(["application/vnd.jgraph.mxfile"]);function S2(_){return typeof _==="string"?_.trim().toLowerCase():""}function M7(_){let $=S2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function b7(_){let $=S2(_);return!!$&&$.endsWith(".pdf")}function I7(_){let $=S2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function T2(_,$){let j=S2(_);if(M7($)||P7.has(j))return"drawio";if(b7($)||j==="application/pdf")return"pdf";if(I7($)||w7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(y7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function Q6(_){let $=S2(_);return A7.has($)}function U6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function C7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function x7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function F6(_){return C7(_)||x7(_)}function K1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function S7(_,$){let j=Math.max(K1(_),K1($)),Z=Math.min(K1(_),K1($));return(j+0.05)/(Z+0.05)}function T7(_,$,j="#ffffff"){let Z=F6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=F6(K);if(!G)continue;let q=S7(Z,G);if(q>z)N=K,z=q}return N}function W4(){let _=getComputedStyle(document.documentElement),$=(m,u)=>{for(let f of m){let E=_.getPropertyValue(f).trim();if(E)return E}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),O=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),M=T7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:q,warning:X,attention:O,border:W,fontFamily:U,buttonTextColor:M}}function H6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:q,fontFamily:X}=W4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var f7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),J6=!1,Y1=null,D6=!1;function G4(_){_.querySelector(".adaptive-card-notice")?.remove()}function R7(_,$,j="error"){G4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function v7(_,$=(j)=>l0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function u7(_=($)=>l0($,null)){return($,j)=>{try{let Z=v7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function m7(_){if(D6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=u7(),D6=!0}async function g7(){if(J6)return;if(Y1)return Y1;return Y1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{J6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Y1}function p7(){return globalThis.AdaptiveCards}function c7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function h7(_){return f7.has(_)}function X4(_){if(!Array.isArray(_))return[];return _.filter(c7)}function i7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function V4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>V4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${V4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function l7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return V4($);return typeof $==="string"?$:String($)}function n7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=l7(K.type,j[K.id],K);for(let[G,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[G]=Z(q);return K};return Z(_)}function d7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function s7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function o7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=s7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function E6(_,$,j){if(!h7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await g7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=p7();m7(Z);let N=new Z.AdaptiveCard,z=W4();N.hostConfig=new Z.HostConfig(H6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:n7($.payload,K);N.parse(G),N.onExecuteAction=(O)=>{let W=i7(O);if(j?.onAction)G4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let M=U instanceof Error?U.message:String(U||"Action failed.");R7(_,M||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let X=o7($);if(X){_.classList.add("adaptive-card-finished");let O=document.createElement("div");O.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=X.label,O.appendChild(W),X.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=X.detail,O.appendChild(U)}_.appendChild(O)}if(G4(_),_.appendChild(q),X)d7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function f2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>f2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${f2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function k6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:f2(j)})).filter(($)=>$.value)}function r7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function q4(_){if(!Array.isArray(_))return[];return _.filter(r7)}function y6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=f2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=k6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function A6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=k6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:X})=>`${q}: ${X}`).join(", "):f2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),G=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:G,submittedAt:_.submitted_at}}function a7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?N$($):null},{label:"Added",value:_?.created_at?$2(_.created_at):null}].filter((Z)=>Z.value)}function t7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=$$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function w6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=a_(()=>T2($?.content_type,Z),[$?.content_type,Z]),z=U6(N),K=a_(()=>Q6($?.content_type),[$?.content_type]),[G,q]=T(N==="text"),[X,O]=T(""),[W,U]=T(null),M=D(null),m=a_(()=>a7($),[$]),u=a_(()=>t7(_,Z,N),[_,Z,N]),f=a_(()=>{if(!K||!X)return"";return l0(X)},[K,X]);return R(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),R(()=>{if(!M.current||!f)return;C$(M.current);return},[f]),R(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let x=await l1(_);if(!E)O(x)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&B`
                            <a
                                href=${u}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${$$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&W&&B`<div class="attachment-preview-state">${W}</div>`}
                    ${!G&&!W&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${$$(_)} alt=${Z} />
                    `}
                    ${!G&&!W&&(N==="pdf"||N==="office"||N==="drawio")&&u&&B`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!G&&!W&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!W&&N==="text"&&K&&B`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!G&&!W&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!G&&!W&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>B`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function P6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function e7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(R(()=>{V2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?N$(z):"",q=T2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${$$(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${K&&B`<span class="file-size">${K}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function _5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);R(()=>{if(!Number.isFinite(j))return;V2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?$$(j):null,q=T2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${X$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${X$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function W1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?$2(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function $5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?N$(_.size):"",N=_.mime_type||"",z=Z5(N),K=_2(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function j5({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:K||"application/octet-stream"}),X=URL.createObjectURL(q),O=document.createElement("a");O.href=X,O.download=Z.split("/").pop()||"resource",O.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Z5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function N5({preview:_}){let $=_2(_.url),j=_2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function z5(_,$){return typeof _==="string"?_:""}var K5=1800,Y5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,W5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,G5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function V5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function X5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=W5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=G5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Y5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let q=async(X)=>{X.preventDefault(),X.stopPropagation();let W=z.querySelector("code")?.textContent||"",U=await V5(W);N(G,U?"success":"error");let M=j.get(G);if(M)clearTimeout(M);let m=setTimeout(()=>{N(G,"idle"),j.delete(G)},K5);j.set(G,m)};G.addEventListener("click",q),Z.push(()=>{G.removeEventListener("click",q);let X=j.get(G);if(X)clearTimeout(X);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function q5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function L5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X)){let W=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function O5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Images:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X)){let O=X.replace(/^\s*-\s+/,"").trim(),W=O.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||O.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let U=W[1],M=(W[2]||"").trim()||U;N.push({id:U,label:M,raw:O})}else N.push({id:null,label:O,raw:O})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function B5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(B5).sort((O,W)=>W.length-O.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],X;while(X=G.nextNode())q.push(X);for(let O of q){let W=O.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let U=O.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let M=W.split(N).filter((u)=>u!=="");if(M.length===0)continue;let m=K.createDocumentFragment();for(let u of M)if(z.test(u)){let f=K.createElement("mark");f.className="search-highlight-term",f.textContent=u,m.appendChild(f)}else m.appendChild(K.createTextNode(u));O.parentNode.replaceChild(m,O)}return K.body.innerHTML}function M6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:q,userAvatarBackground:X,onDelete:O,isThreadReply:W,isThreadPrev:U,isThreadNext:M,isRemoving:m,highlightQuery:u,onFileRef:f}){let[E,F]=T(null),[x,I]=T(()=>new Set),i=D(null),n=_.data,__=n.type==="agent_response",d=G||"You",K_=__?z||Y6:d,c=__?Y4(z,K,!0):Y4(d,q),X_=typeof X==="string"?X.trim().toLowerCase():"",o_=!__&&c.image&&(X_==="clear"||X_==="transparent"),$_=__&&Boolean(c.image),t=`background-color: ${o_||$_?"transparent":c.color}`,z_=n.content_meta,Z_=Boolean(z_?.truncated),O_=Boolean(z_?.preview),g_=Z_&&!O_,L_=Z_?{originalLength:Number.isFinite(z_?.original_length)?z_.original_length:n.content?n.content.length:0,maxLength:Number.isFinite(z_?.max_length)?z_.max_length:0}:null,x_=n.content_blocks||[],B_=n.media_ids||[],U_=z5(n.content,n.link_previews),{content:p_,fileRefs:w_}=q5(U_),{content:R_,messageRefs:Y0}=L5(p_),{content:c_,attachments:G_}=O5(R_);U_=c_;let e=X4(x_),P_=q4(x_),V_=e.length===1&&typeof e[0]?.fallback_text==="string"?e[0].fallback_text.trim():"",M_=P_.length===1?y6(P_[0]).trim():"",j0=Boolean(V_)&&U_?.trim()===V_||Boolean(M_)&&U_?.trim()===M_,t_=Boolean(U_)&&!g_&&!j0,S_=typeof u==="string"?u.trim():"",A_=a_(()=>{if(!U_||j0)return"";let S=l0(U_,j);return S_?Q5(S,S_):S},[U_,j0,S_]),n_=(S,o)=>{S.stopPropagation(),F($$(o))},[h_,Z0]=T(null),b_=(S)=>{Z0(S)},I_=(S)=>{S.stopPropagation(),O?.(_)},N0=(S)=>{I((o)=>{let j_=new Set(o);if(j_.has(S))j_.delete(S);else j_.add(S);return j_})},c0=(S,o)=>{let j_=new Set;if(!S||o.length===0)return{content:S,usedIds:j_};return{content:S.replace(/attachment:([^\s)"']+)/g,(u_,f_,f0,F$)=>{let K$=f_.replace(/^\/+/,""),L0=o.find((O0)=>O0.name&&O0.name.toLowerCase()===K$.toLowerCase()&&!j_.has(O0.id))||o.find((O0)=>!j_.has(O0.id));if(!L0)return u_;if(j_.add(L0.id),F$.slice(Math.max(0,f0-2),f0)==="](")return`/media/${L0.id}`;return L0.name||"attachment"}),usedIds:j_}},S0=[],n0=[],r_=[],y_=[],G0=[],v_=[],q0=0;if(x_.length>0)x_.forEach((S)=>{if(S?.type==="text"&&S.annotations)v_.push(S.annotations);if(S?.type==="resource_link")y_.push(S);else if(S?.type==="resource")G0.push(S);else if(S?.type==="file"){let o=B_[q0++];if(o)n0.push(o),r_.push({id:o,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let o=B_[q0++];if(o){let j_=typeof S?.mime_type==="string"?S.mime_type:void 0;S0.push({id:o,annotations:S?.annotations,mimeType:j_}),r_.push({id:o,name:S?.name||S?.filename||S?.title})}}});else if(B_.length>0)B_.forEach((S)=>{S0.push({id:S,annotations:null}),r_.push({id:S,name:null})});if(G_.length>0)G_.forEach((S)=>{if(!S?.id)return;let o=r_.find((j_)=>String(j_.id)===String(S.id));if(o&&!o.name)o.name=S.label});let{content:z0,usedIds:E_}=c0(U_,r_);U_=z0;let E0=S0.filter(({id:S})=>!E_.has(S)),u0=n0.filter((S)=>!E_.has(S)),F_=G_.length>0?G_.map((S,o)=>({id:S.id||`attachment-${o+1}`,label:S.label||`attachment-${o+1}`})):r_.map((S,o)=>({id:S.id,label:S.name||`attachment-${o+1}`})),F0=a_(()=>X4(x_),[x_]),h0=a_(()=>q4(x_),[x_]);R(()=>{if(!i.current)return;return C$(i.current),X5(i.current)},[A_]);let z$=D(null);return R(()=>{if(!z$.current||F0.length===0)return;let S=z$.current;S.innerHTML="";for(let o of F0){let j_=document.createElement("div");S.appendChild(j_),E6(j_,o,{onAction:async(C_)=>{if(C_.type==="Action.OpenUrl"){let u_=_2(C_.url||"");if(!u_)throw Error("Invalid URL");window.open(u_,"_blank","noopener,noreferrer");return}if(C_.type==="Action.Submit"){await g1({post_id:_.id,thread_id:n.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:o.card_id,action:{type:C_.type,title:C_.title||"",data:C_.data}});return}console.warn("[post] unsupported adaptive card action:",C_.type,C_)}}).catch((C_)=>{console.error("[post] adaptive card render error:",C_),j_.textContent=o.fallback_text||"Card failed to render."})}},[F0,n.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${__?"agent-post":""} ${W?"thread-reply":""} ${U?"thread-prev":""} ${M?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${__?"agent-avatar":""} ${c.image?"has-image":""}" style=${t}>
                ${c.image?B`<img src=${c.image} alt=${K_} />`:c.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${I_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${K_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),Z)Z(_.id)}}>${B6(_.timestamp)}</a>
                </div>
                ${g_&&L_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${x2(L_.originalLength)} chars
                            ${L_.maxLength?B` • Display limit: ${x2(L_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${O_&&L_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${x2(L_.maxLength)} of ${x2(L_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||Y0.length>0||F_.length>0)&&B`
                    <div class="post-file-refs">
                        ${Y0.map((S)=>{let o=(j_)=>{if(j_.preventDefault(),j_.stopPropagation(),N)N(S,_.chat_jid||null);else{let C_=document.getElementById("post-"+S);if(C_)C_.scrollIntoView({behavior:"smooth",block:"center"}),C_.classList.add("post-highlight"),setTimeout(()=>C_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${o}>
                                    <${X$}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${o}
                                    />
                                </a>
                            `})}
                        ${w_.map((S)=>{let o=S.split("/").pop()||S;return B`
                                <${X$}
                                    prefix="post"
                                    label=${o}
                                    title=${S}
                                    onClick=${()=>f?.(S)}
                                />
                            `})}
                        ${F_.map((S)=>B`
                            <${_5}
                                key=${S.id}
                                attachment=${S}
                                onPreview=${b_}
                            />
                        `)}
                    </div>
                `}
                ${t_&&B`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let o=S.target.dataset.hashtag;if(o)j?.(o)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),F(S.target.src)}}
                    />
                `}
                ${F0.length>0&&B`
                    <div ref=${z$} class="post-adaptive-cards" />
                `}
                ${h0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${h0.map((S,o)=>{let j_=A6(S),C_=`${S.card_id}-${o}`,u_=x.has(C_);return B`
                                <div key=${C_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${j_.title}</span>
                                        </div>
                                    </div>
                                    ${j_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${j_.summary}</div>
                                    `}
                                    ${j_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${j_.fields.map((f_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${j_.hiddenFieldCount>0&&B`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${u_?"true":"false"}
                                            onClick=${(f_)=>{f_.preventDefault(),f_.stopPropagation(),N0(C_)}}
                                        >
                                            ${u_?`Hide ${j_.hiddenFieldCount} more`:`Show ${j_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${u_&&j_.hiddenFields.length>0&&B`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${j_.hiddenFields.map((f_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${$2(j_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${v_.length>0&&B`
                    ${v_.map((S,o)=>B`
                        <${W1} key=${o} annotations=${S} />
                    `)}
                `}
                ${E0.length>0&&B`
                    <div class="media-preview">
                        ${E0.map(({id:S,mimeType:o})=>{let C_=typeof o==="string"&&o.toLowerCase().startsWith("image/svg")?$$(S):i1(S);return B`
                                <img 
                                    key=${S} 
                                    src=${C_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u_)=>n_(u_,S)}
                                />
                            `})}
                    </div>
                `}
                ${E0.length>0&&B`
                    ${E0.map(({annotations:S},o)=>B`
                        ${S&&B`<${W1} key=${o} annotations=${S} />`}
                    `)}
                `}
                ${u0.length>0&&B`
                    <div class="file-attachments">
                        ${u0.map((S)=>B`
                            <${e7} key=${S} mediaId=${S} onPreview=${b_} />
                        `)}
                    </div>
                `}
                ${y_.length>0&&B`
                    <div class="resource-links">
                        ${y_.map((S,o)=>B`
                            <div key=${o}>
                                <${$5} block=${S} />
                                <${W1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${G0.length>0&&B`
                    <div class="resource-embeds">
                        ${G0.map((S,o)=>B`
                            <div key=${o}>
                                <${j5} block=${S} />
                                <${W1} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${n.link_previews.map((S,o)=>B`
                            <${N5} key=${o} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&B`<${P6} src=${E} onClose=${()=>F(null)} />`}
        ${h_&&B`
            <${w6}
                mediaId=${h_.mediaId}
                info=${h_.info}
                onClose=${()=>Z0(null)}
            />
        `}
    `}function b6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:q,timelineRef:X,agents:O,user:W,onDeletePost:U,reverse:M=!0,removingPostIds:m,searchQuery:u}){let[f,E]=T(!1),F=D(null),x=typeof IntersectionObserver<"u",I=y(async()=>{if(!j||!$||f)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,f,j]),i=y(($_)=>{let{scrollTop:t,scrollHeight:z_,clientHeight:Z_}=$_.target,O_=M?z_-Z_-t:t,g_=Math.max(300,Z_);if(O_<g_)I()},[M,I]);R(()=>{if(!x)return;let $_=F.current,t=X?.current;if(!$_||!t)return;let z_=300,Z_=new IntersectionObserver((O_)=>{for(let g_ of O_){if(!g_.isIntersecting)continue;I()}},{root:t,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return Z_.observe($_),()=>Z_.disconnect()},[x,$,j,X,I]);let n=D(I);if(n.current=I,R(()=>{if(x)return;if(!X?.current)return;let{scrollTop:$_,scrollHeight:t,clientHeight:z_}=X.current,Z_=M?t-z_-$_:$_,O_=Math.max(300,z_);if(Z_<O_)n.current?.()},[x,_,$,M,X]),R(()=>{if(!X?.current)return;if(!$||f)return;let{scrollTop:$_,scrollHeight:t,clientHeight:z_}=X.current,Z_=M?t-z_-$_:$_,O_=Math.max(300,z_);if(t<=z_+1||Z_<O_)n.current?.()},[_,$,f,M,X]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let __=_.slice().sort(($_,t)=>$_.id-t.id),d=($_)=>{let t=$_?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let z_=Number(t);return Number.isFinite(z_)?z_:null},K_=new Map;for(let $_=0;$_<__.length;$_+=1){let t=__[$_],z_=Number(t?.id),Z_=d(t);if(Z_!==null){let O_=K_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};O_.replyIndexes.push($_),K_.set(Z_,O_)}else if(Number.isFinite(z_)){let O_=K_.get(z_)||{anchorIndex:-1,replyIndexes:[]};O_.anchorIndex=$_,K_.set(z_,O_)}}let c=new Map;for(let[$_,t]of K_.entries()){let z_=new Set;if(t.anchorIndex>=0)z_.add(t.anchorIndex);for(let Z_ of t.replyIndexes)z_.add(Z_);c.set($_,Array.from(z_).sort((Z_,O_)=>Z_-O_))}let X_=__.map(($_,t)=>{let z_=d($_);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=c.get(z_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let O_=Z_.indexOf(t);if(O_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:O_>0,hasThreadNext:O_<Z_.length-1}}),o_=B`<div class="timeline-sentinel" ref=${F}></div>`;return B`
        <div class="timeline ${M?"reverse":"normal"}" ref=${X} onScroll=${i}>
            <div class="timeline-content">
                ${M?o_:null}
                ${__.map(($_,t)=>{let z_=Boolean($_.data?.thread_id&&$_.data.thread_id!==$_.id),Z_=m?.has?.($_.id),O_=X_[t]||{};return B`
                    <${M6}
                        key=${$_.id}
                        post=${$_}
                        isThreadReply=${z_}
                        isThreadPrev=${O_.hasThreadPrev}
                        isThreadNext=${O_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${u}
                        agentName=${W6($_.data?.agent_id,O||{})}
                        agentAvatarUrl=${G6($_.data?.agent_id,O||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.($_)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${U}
                    />
                `})}
                ${M?null:o_}
            </div>
        </div>
    `}class I6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var $0=new I6;var G1=null,L4=null;function C6(){if(L4)return Promise.resolve(L4);if(!G1)G1=import("/static/dist/editor.bundle.js").then((_)=>{return L4=_,_}).catch((_)=>{throw G1=null,_});return G1}class x6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x6(_,$)}};function B4(){C6().catch(()=>{})}var U4="piclaw://terminal";var U5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},F5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},V1=null,Q4=null;function H5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function J5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!H5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function D5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!V1)V1=J5(()=>Promise.resolve($.init?.())).catch((j)=>{throw V1=null,j});return await V1,$}async function E5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Q4)Q4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Q4}async function k5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function y5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function A5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function x$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function w5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function S6(){let _=A5(),$=_?F5:U5,j=x$("--bg-primary",_?"#000000":"#ffffff"),Z=x$("--text-primary",_?"#e7e9ea":"#0f1419"),N=x$("--text-secondary",_?"#71767b":"#536471"),z=x$("--accent-color","#1d9bf0"),K=x$("--danger-color",_?"#ff7b72":"#cf222e"),G=x$("--success-color",_?"#7ee787":"#1a7f37"),q=x$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=x$("--border-color",_?"#2f3336":"#eff3f4"),O=x$("--accent-soft-strong",w5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:O,selectionForeground:Z,black:q,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class F4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await D5();if(await E5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:S6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=S6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await k5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(y5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var H4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new F4(_,$)}},J4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new F4(_,$)}};function p$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function P5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,O=[];for(let U of X.split("/")){if(!U||U===".")continue;if(U===".."){if(O.length>0)O.pop();continue}O.push(U)}let W=O.join("/");return`${t2(W)}${z}${K}`}function R2(_){return _?.preview||null}function M5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function b5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function I5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${p$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${p$(N$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${p$($2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${p$(b5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${p$(M5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${p$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function C5(_){let $=R2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=I5(_,$);if($.kind==="image"){let Z=$.url||($.path?t2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${p$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=l0($.text||"",null,{rewriteImageSrc:(N)=>P5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${p$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class D4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=C5(this.context)}getContent(){let _=R2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=R2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var E4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=R2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new D4(_,$)}},k4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return R2(_)||_?.path?1:!1},mount(_,$){return new D4(_,$)}};var x5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),S5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},T5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=f6(j),z=T5[N]||"\uD83D\uDCC4",K=S5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${T6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${T6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f6(_?.path);if(!$||!x5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R6(_,$);return new v6(_,$)}};var f5=/\.(csv|tsv)$/i;function u6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${u6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${u6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!f5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};var R5=/\.pdf$/i;function v5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${v5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!R5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new p6(_,$);return new c6(_,$)}};var u5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function P4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${P4(N)}" alt="${P4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${P4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!u5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};function m5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function g5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var b4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function l6(_){let $=String(_||"").trim();return $?$:b4}function p5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function c5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function h5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,q,X,O,W){try{if(K&&q!=null&&j({filename:K,format:G,data:q,mimeType:X,base64Encoded:Boolean(O),defaultMode:W}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,q,X,O,W){try{if(G&&j({filename:G,data:K,mimeType:q,base64Encoded:Boolean(X),mode:O,folderId:W}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function n6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${c5(j)}`}class d6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${g5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=p5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(h5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=b4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await n6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await n6(_,"image/png");else this.xmlData=l6(await _.text());else if(_.status===404)this.xmlData=b4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?l6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var I4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!m5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new d6(_,$);return new s6(_,$)}};class o6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s_=new o6;var X1="workspaceExplorerScale",i5=["compact","default","comfortable"],l5=new Set(i5),n5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function r6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return l5.has(j)?j:$}function C4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function d5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function s5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function x4(_={}){let $=d5(_),j=_.stored?r6(_.stored,$):$;return s5(j,_)}function a6(_){return n5[r6(_)]}var o5=60000,$8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function j8(_,$,j,Z=0,N=[]){if(!j&&$8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)j8(z,$,j,Z+1,N);return N}function t6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&$8(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function R4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let q=R4(N.get(G.path),G);if(q!==N.get(G.path))z=!0;return q});return z?{...$,children:K}:_}function T4(_,$,j){if(!_)return _;if(_.path===$)return R4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=T4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var Z8=4,S4=14,r5=8,a5=16;function N8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=N8(Z);return _.__bytes=j,j}function z8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Z8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let q=Math.max(0,Number(G?.__bytes??G?.size??0));if(q<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:q});else z.push({kind:"file",name:G.name,path:G.path,size:q})}z.sort((G,q)=>q.size-G.size);let K=z;if(z.length>S4){let G=z.slice(0,S4-1),q=z.slice(S4-1),X=q.reduce((O,W)=>O+W.size,0);G.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:X}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return z8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function e6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function K8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function q1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function v4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,q=q1(_,$,Z,N),X=q1(_,$,Z,G),O=q1(_,$,j,G),W=q1(_,$,j,N),U=G-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var Y8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function W8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,q,X,O)=>{let W=Array.isArray(G?.children)?G.children:[];if(!W.length)return;let U=Math.max(0,Number(G.size)||0);if(U<=0)return;let M=X-q,m=q;W.forEach((u,f)=>{let E=Math.max(0,Number(u.size)||0);if(E<=0)return;let F=E/U,x=m,I=f===W.length-1?X:m+M*F;if(m=I,I-x<0.003)return;let i=Y8[O];if(i){let n=K8(x,O,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:E,color:n,depth:O,startAngle:x,endAngle:I,innerRadius:i[0],outerRadius:i[1],d:v4(120,120,i[0],i[1],x,I)}),O===1)N.push({key:u.path,name:u.name,size:E,pct:z>0?E/z*100:0,color:n})}if(O<Z8)K(u,x,I,O+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function f4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=f4(Z,$);if(N)return N}return null}function G8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Y8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=K8(z,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:v4(120,120,N[0],N[1],z,K)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function _8(_,$=!1,j=!1){if(!_)return null;let Z=N8(_),N=z8(_,0),z=N.size||Z,{segments:K,legend:G}=W8(N,z,j);if(!K.length&&z>0){let q=G8("[files]",N.path,z,j);K=q.segments,G=q.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function t5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[G,q]=T(!1);R(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let X=a_(()=>{return f4(_.root,Z)||_.root},[_?.root,Z]),O=X?.size||_.totalSize||0,{segments:W,legend:U}=a_(()=>{let c=W8(X,O,_.isDarkTheme);if(c.segments.length>0)return c;if(O<=0)return c;let X_=X?.children?.length?"Total":"[files]";return G8(X_,X?.path||_?.root?.path||".",O,_.isDarkTheme)},[X,O,_.isDarkTheme,_?.root?.path]),[M,m]=T(W),u=D(new Map),f=D(0);R(()=>{let c=u.current,X_=new Map(W.map((z_)=>[z_.key,z_])),o_=performance.now(),$_=220,t=(z_)=>{let Z_=Math.min(1,(z_-o_)/220),O_=Z_*(2-Z_),g_=W.map((L_)=>{let B_=c.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},U_=(c_,G_)=>c_+(G_-c_)*O_,p_=U_(B_.startAngle,L_.startAngle),w_=U_(B_.endAngle,L_.endAngle),R_=U_(B_.innerRadius,L_.innerRadius),Y0=U_(B_.outerRadius,L_.outerRadius);return{...L_,d:v4(120,120,R_,Y0,p_,w_)}});if(m(g_),Z_<1)f.current=requestAnimationFrame(t)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(t),u.current=X_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[W]);let E=M.length?M:W,F=O>0?N$(O):"0 B",x=X?.name||"",i=(x&&x!=="."?x:"Total")||"Total",n=F,__=z.length>1,d=(c)=>{if(!c?.path)return;let X_=f4(_.root,c.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;K((o_)=>[...o_,X_.path]),N(X_.path),j(null)},K_=()=>{if(!__)return;K((c)=>{let X_=c.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${O}>
                ${E.map((c)=>B`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>d(c)}
                    >
                        <title>${c.label} — ${N$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${__?" is-drill":""}`}
                    onClick=${K_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((c)=>B`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${N$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function e5({mediaId:_}){let[$,j]=T(null);if(R(()=>{if(!_)return;V2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?N$($.metadata.size):"";return B`
        <a href=${$$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function V8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[G,q]=T(null),[X,O]=T(new Set(["."])),[W,U]=T(null),[M,m]=T(null),[u,f]=T(""),[E,F]=T(null),[x,I]=T(null),[i,n]=T(!0),[__,d]=T(!1),[K_,c]=T(null),[X_,o_]=T(()=>X2("workspaceShowHidden",!1)),[$_,t]=T(!1),[z_,Z_]=T(null),[O_,g_]=T(null),[L_,x_]=T(null),[B_,U_]=T(!1),[p_,w_]=T(null),[R_,Y0]=T(()=>e6()),[c_,G_]=T(()=>x4({stored:Z$(X1),...C4()})),[e,P_]=T(!1),V_=D(X),M_=D(""),j0=D(null),t_=D(0),S_=D(new Set),A_=D(null),n_=D(new Map),h_=D(_),Z0=D(Z),b_=D(null),I_=D(null),N0=D(null),c0=D(null),S0=D(null),n0=D(null),r_=D("."),y_=D(null),G0=D({path:null,dragging:!1,startX:0,startY:0}),v_=D({path:null,dragging:!1,startX:0,startY:0}),q0=D({path:null,timer:0}),z0=D(!1),E_=D(0),E0=D(new Map),u0=D(null),F_=D(null),F0=D(null),h0=D(null),z$=D(null),S=D(null),o=D(X_),j_=D($),C_=D(j??$),u_=D(0),f_=D(L_),f0=D($_),F$=D(z_),K$=D(null),H$=D({x:0,y:0}),L0=D(0),c$=D(null),O0=D(W),A0=D(M),J$=D(null),m0=D(null),H0=D(E);h_.current=_,Z0.current=Z,R(()=>{V_.current=X},[X]),R(()=>{o.current=X_},[X_]),R(()=>{j_.current=$},[$]),R(()=>{C_.current=j??$},[j,$]),R(()=>{f_.current=L_},[L_]),R(()=>{if(typeof window>"u")return;let L=()=>{G_(x4({stored:Z$(X1),...C4()}))};L();let H=()=>L(),A=()=>L(),k=(g)=>{if(!g||g.key===null||g.key===X1)L()};window.addEventListener("resize",H),window.addEventListener("focus",A),window.addEventListener("storage",k);let v=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(g,W_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",W_);else if(g.addListener)g.addListener(W_)},a=(g,W_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",W_);else if(g.removeListener)g.removeListener(W_)};return r(v,H),r(s,H),()=>{window.removeEventListener("resize",H),window.removeEventListener("focus",A),window.removeEventListener("storage",k),a(v,H),a(s,H)}},[]),R(()=>{let L=(H)=>{let A=H?.detail?.path;if(!A)return;let k=A.split("/"),v=[];for(let s=1;s<k.length;s++)v.push(k.slice(0,s).join("/"));if(v.length)O((s)=>{let r=new Set(s);r.add(".");for(let a of v)r.add(a);return r});U(A),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(A)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),R(()=>{f0.current=$_},[$_]),R(()=>{F$.current=z_},[z_]),R(()=>{O0.current=W},[W]),R(()=>{A0.current=M},[M]),R(()=>{H0.current=E},[E]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>Y0(e6());L();let H=window.matchMedia?.("(prefers-color-scheme: dark)"),A=()=>L();if(H?.addEventListener)H.addEventListener("change",A);else if(H?.addListener)H.addListener(A);let k=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(H?.removeEventListener)H.removeEventListener("change",A);else if(H?.removeListener)H.removeListener(A);k?.disconnect()}},[]),R(()=>{if(!M)return;let L=S0.current;if(!L)return;let H=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(H)},[M]),R(()=>{if(!e)return;let L=(A)=>{let k=A?.target;if(!(k instanceof Element))return;if(z$.current?.contains(k))return;if(S.current?.contains(k))return;P_(!1)},H=(A)=>{if(A?.key==="Escape")P_(!1),S.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",H)}},[e]);let S$=async(L)=>{d(!0),F(null),I(null);try{let H=await n1(L,20000);F(H)}catch(H){F({error:H.message||"Failed to load preview"})}finally{d(!1)}};b_.current=S$;let g0=async()=>{if(!j_.current)return;try{let L=await P2("",1,o.current),H=t6(L.root,V_.current,o.current);if(H===M_.current){n(!1);return}if(M_.current=H,j0.current=L.root,!t_.current)t_.current=requestAnimationFrame(()=>{t_.current=0,q((A)=>R4(A,j0.current)),n(!1)})}catch(L){c(L.message||"Failed to load workspace"),n(!1)}},Z2=async(L)=>{if(!L)return;if(S_.current.has(L))return;S_.current.add(L);try{let H=await P2(L,1,o.current);q((A)=>T4(A,L,H.root))}catch(H){c(H.message||"Failed to load workspace")}finally{S_.current.delete(L)}};I_.current=Z2;let W0=y(()=>{let L=W;if(!L)return".";let H=n_.current?.get(L);if(H&&H.type==="dir")return H.path;if(L==="."||!L.includes("/"))return".";let A=L.split("/");return A.pop(),A.join("/")||"."},[W]),Y$=y((L)=>{let H=L?.closest?.(".workspace-row");if(!H)return null;let A=H.dataset.path,k=H.dataset.type;if(!A)return null;if(k==="dir")return A;if(A.includes("/")){let v=A.split("/");return v.pop(),v.join("/")||"."}return"."},[]),D$=y((L)=>{return Y$(L?.target||null)},[Y$]),w0=y((L)=>{f_.current=L,x_(L)},[]),P0=y(()=>{let L=q0.current;if(L?.timer)clearTimeout(L.timer);q0.current={path:null,timer:0}},[]),d0=y((L)=>{if(!L||L==="."){P0();return}let H=n_.current?.get(L);if(!H||H.type!=="dir"){P0();return}if(V_.current?.has(L)){P0();return}if(q0.current?.path===L)return;P0();let A=setTimeout(()=>{q0.current={path:null,timer:0},I_.current?.(L),O((k)=>{let v=new Set(k);return v.add(L),v})},600);q0.current={path:L,timer:A}},[P0]),L$=y((L,H)=>{if(H$.current={x:L,y:H},L0.current)return;L0.current=requestAnimationFrame(()=>{L0.current=0;let A=K$.current;if(!A)return;let k=H$.current;A.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),O$=y((L)=>{if(!L)return;let A=(n_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!A)return;g_({path:L,label:A})},[]),h$=y(()=>{if(g_(null),L0.current)cancelAnimationFrame(L0.current),L0.current=0;if(K$.current)K$.current.style.transform="translate(-9999px, -9999px)"},[]),E$=y((L)=>{if(!L)return".";let H=n_.current?.get(L);if(H&&H.type==="dir")return H.path;if(L==="."||!L.includes("/"))return".";let A=L.split("/");return A.pop(),A.join("/")||"."},[]),k0=y(()=>{m(null),f("")},[]),k$=y((L)=>{if(!L)return;let A=(n_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!A||L===".")return;m(L),f(A)},[]),y$=y(async()=>{let L=A0.current;if(!L)return;let H=(u||"").trim();if(!H){k0();return}let A=n_.current?.get(L),k=(A?.name||L.split("/").pop()||L).trim();if(H===k){k0();return}try{let s=(await o1(L,H))?.path||L,r=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(k0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:s,type:A?.type||"file"}})),A?.type==="dir")O((a)=>{let g=new Set;for(let W_ of a)if(W_===L)g.add(s);else if(W_.startsWith(`${L}/`))g.add(`${s}${W_.slice(L.length)}`);else g.add(W_);return g});if(U(s),A?.type==="dir")F(null),d(!1),I(null);else b_.current?.(s);I_.current?.(r)}catch(v){c(v?.message||"Failed to rename file")}},[k0,u]),J0=y(async(L)=>{let k=L||".";for(let v=0;v<50;v+=1){let r=`untitled${v===0?"":`-${v}`}.md`;try{let g=(await s1(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")O((W_)=>new Set([...W_,k]));U(g),c(null),I_.current?.(k),b_.current?.(g);return}catch(a){if(a?.status===409||a?.code==="file_exists")continue;c(a?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),M0=y((L)=>{if(L?.stopPropagation?.(),B_)return;let H=E$(O0.current);J0(H)},[B_,E$,J0]);R(()=>{if(typeof window>"u")return;let L=(H)=>{let A=H?.detail?.updates||[];if(!Array.isArray(A)||A.length===0)return;q((a)=>{let g=a;for(let W_ of A){if(!W_?.root)continue;if(!g||W_.path==="."||!W_.path)g=W_.root;else g=T4(g,W_.path,W_.root)}if(g)M_.current=t6(g,V_.current,o.current);return n(!1),g});let k=O0.current;if(Boolean(k)&&A.some((a)=>{let g=a?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))E0.current.clear();if(!k||!H0.current)return;let s=n_.current?.get(k);if(s&&s.type==="dir")return;if(A.some((a)=>{let g=a?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))b_.current?.(k)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),A_.current=g0;let A$=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),H=C_.current??j_.current,A=document.visibilityState!=="hidden"&&(H||L.matches&&j_.current);M2(A,o.current).catch(()=>{})}).current,b0=D(0),w$=D(()=>{if(b0.current)clearTimeout(b0.current);b0.current=setTimeout(()=>{b0.current=0,A$()},250)}).current;R(()=>{if(j_.current)A_.current?.();w$()},[$,j]),R(()=>{A_.current(),A$();let L=setInterval(()=>A_.current(),o5),H=q2("previewHeight",null),A=Number.isFinite(H)?Math.min(Math.max(H,80),600):280;if(E_.current=A,N0.current)N0.current.style.setProperty("--preview-height",`${A}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),v=()=>w$();if(k.addEventListener)k.addEventListener("change",v);else if(k.addListener)k.addListener(v);return document.addEventListener("visibilitychange",v),()=>{if(clearInterval(L),t_.current)cancelAnimationFrame(t_.current),t_.current=0;if(k.removeEventListener)k.removeEventListener("change",v);else if(k.removeListener)k.removeListener(v);if(document.removeEventListener("visibilitychange",v),b0.current)clearTimeout(b0.current),b0.current=0;if(y_.current)clearTimeout(y_.current),y_.current=null;M2(!1,o.current).catch(()=>{})}},[]);let W$=a_(()=>j8(G,X,X_),[G,X,X_]),i$=a_(()=>new Map(W$.map((L)=>[L.node.path,L.node])),[W$]),l$=a_(()=>a6(c_),[c_]);n_.current=i$;let d_=(W?n_.current.get(W):null)?.type==="dir";R(()=>{if(!W||!d_){w_(null),u0.current=null,F_.current=null;return}let L=W,H=`${X_?"hidden":"visible"}:${W}`,A=E0.current,k=A.get(H);if(k?.root){A.delete(H),A.set(H,k);let r=_8(k.root,Boolean(k.truncated),R_);if(r)u0.current=r,F_.current=W,w_({loading:!1,error:null,payload:r});return}let v=u0.current,s=F_.current;w_({loading:!0,error:null,payload:s===W?v:null}),P2(W,r5,X_).then((r)=>{if(O0.current!==L)return;let a={root:r?.root,truncated:Boolean(r?.truncated)};A.delete(H),A.set(H,a);while(A.size>a5){let W_=A.keys().next().value;if(!W_)break;A.delete(W_)}let g=_8(a.root,a.truncated,R_);u0.current=g,F_.current=W,w_({loading:!1,error:null,payload:g})}).catch((r)=>{if(O0.current!==L)return;w_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===W?v:null})})},[W,d_,X_,R_]);let I0=Boolean(E&&E.kind==="text"&&!d_&&(!E.size||E.size<=262144)),y0=I0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",B$=Boolean(W&&W!=="."),n$=Boolean(W&&!d_),d$=Boolean(W&&!d_),Q$=W&&d_?e2(W,X_):null,p0=y(()=>P_(!1),[]),V0=y(async(L)=>{p0();try{await L?.()}catch{}},[p0]);R(()=>{let L=F0.current;if(h0.current)h0.current.dispose(),h0.current=null;if(!L)return;if(L.innerHTML="",!W||d_||!E||E.error)return;let H={path:W,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},A=$0.resolve(H)||$0.get("workspace-preview-default");if(!A)return;let k=A.mount(L,H);return h0.current=k,()=>{if(h0.current===k)k.dispose(),h0.current=null;L.innerHTML=""}},[W,d_,E]);let B0=(L)=>{let H=L?.target;if(H instanceof Element)return H;return H?.parentElement||null},i0=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},P$=D((L)=>{if(m0.current)clearTimeout(m0.current),m0.current=null;let A=B0(L)?.closest?.("[data-path]");if(!A)return;let k=A.dataset.path;if(A.dataset.type==="dir"||!k)return;if(A0.current===k)k0();Z0.current?.(k)}).current,s$=D((L)=>{if(z0.current){z0.current=!1;return}let H=B0(L),A=H?.closest?.("[data-path]");if(c0.current?.focus?.(),!A)return;let k=A.dataset.path,v=A.dataset.type,s=Boolean(H?.closest?.(".workspace-caret")),r=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),a=O0.current===k,g=A0.current;if(g){if(g===k)return;k0()}let W_=v==="file"&&J$.current===k&&!s&&!r;if(a&&!s&&!r&&k!=="."&&!W_){if(m0.current)clearTimeout(m0.current);m0.current=setTimeout(()=>{m0.current=null,k$(k)},350);return}if(v==="dir"){if(J$.current=null,U(k),F(null),I(null),d(!1),!V_.current.has(k))I_.current?.(k);if(a&&!s)return;O((R0)=>{let X0=new Set(R0);if(X0.has(k))X0.delete(k);else X0.add(k);return X0})}else{J$.current=null,U(k);let m_=n_.current.get(k);if(m_)h_.current?.(m_.path,m_);b_.current?.(k)}}).current,U$=D(()=>{M_.current="",A_.current(),Array.from(V_.current||[]).filter((H)=>H&&H!==".").forEach((H)=>I_.current?.(H))}).current,s0=D(()=>{J$.current=null,U(null),F(null),I(null),d(!1)}).current,o0=D(()=>{o_((L)=>{let H=!L;if(typeof window<"u")K0("workspaceShowHidden",String(H));return o.current=H,M2(!0,H).catch(()=>{}),M_.current="",A_.current?.(),Array.from(V_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>I_.current?.(k)),H})}).current,r0=D((L)=>{if(B0(L)?.closest?.("[data-path]"))return;s0()}).current,C0=y(async(L)=>{if(!L)return;let H=L.split("/").pop()||L;if(!window.confirm(`Delete "${H}"? This cannot be undone.`))return;try{await a1(L);let k=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(O0.current===L)s0();I_.current?.(k),c(null)}catch(k){F((v)=>({...v||{},error:k.message||"Failed to delete file"}))}},[s0]),G$=y((L)=>{let H=c0.current;if(!H||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;H.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=y((L)=>{let H=W$;if(!H||H.length===0)return;let A=W?H.findIndex((k)=>k.node.path===W):-1;if(L.key==="ArrowDown"){L.preventDefault();let k=Math.min(A+1,H.length-1),v=H[k];if(!v)return;if(U(v.node.path),v.node.type!=="dir")h_.current?.(v.node.path,v.node),b_.current?.(v.node.path);else F(null),d(!1),I(null);G$(v.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let k=A<=0?0:A-1,v=H[k];if(!v)return;if(U(v.node.path),v.node.type!=="dir")h_.current?.(v.node.path,v.node),b_.current?.(v.node.path);else F(null),d(!1),I(null);G$(v.node.path);return}if(L.key==="ArrowRight"&&A>=0){let k=H[A];if(k?.node?.type==="dir"&&!X.has(k.node.path))L.preventDefault(),I_.current?.(k.node.path),O((v)=>new Set([...v,k.node.path]));return}if(L.key==="ArrowLeft"&&A>=0){let k=H[A];if(k?.node?.type==="dir"&&X.has(k.node.path))L.preventDefault(),O((v)=>{let s=new Set(v);return s.delete(k.node.path),s});return}if(L.key==="Enter"&&A>=0){L.preventDefault();let k=H[A];if(!k)return;let v=k.node.path;if(k.node.type==="dir"){if(!V_.current.has(v))I_.current?.(v);O((r)=>{let a=new Set(r);if(a.has(v))a.delete(v);else a.add(v);return a}),F(null),I(null),d(!1)}else h_.current?.(v,k.node),b_.current?.(v);return}if((L.key==="Delete"||L.key==="Backspace")&&A>=0){let k=H[A];if(!k||k.node.type==="dir")return;L.preventDefault(),C0(k.node.path);return}if(L.key==="Escape")L.preventDefault(),s0()},[s0,C0,X,W$,G$,W]),T$=y((L)=>{let H=B0(L),A=H?.closest?.(".workspace-row");if(!A)return;let k=A.dataset.type,v=A.dataset.path;if(!v||v===".")return;if(A0.current===v)return;let s=L?.touches?.[0];if(!s)return;if(G0.current={path:i0(H)?v:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(y_.current)clearTimeout(y_.current);y_.current=setTimeout(()=>{if(y_.current=null,G0.current?.dragging)return;C0(v)},600)},[C0]),M$=y(()=>{if(y_.current)clearTimeout(y_.current),y_.current=null;let L=G0.current;if(L?.dragging&&L.path){let H=f_.current||W0(),A=c$.current;if(typeof A==="function")A(L.path,H)}G0.current={path:null,dragging:!1,startX:0,startY:0},u_.current=0,t(!1),Z_(null),w0(null),P0(),h$()},[W0,h$,w0,P0]),f$=y((L)=>{let H=G0.current,A=L?.touches?.[0];if(!A||!H?.path){if(y_.current)clearTimeout(y_.current),y_.current=null;return}let k=Math.abs(A.clientX-H.startX),v=Math.abs(A.clientY-H.startY),s=k>8||v>8;if(s&&y_.current)clearTimeout(y_.current),y_.current=null;if(!H.dragging&&s)H.dragging=!0,t(!0),Z_("move"),O$(H.path);if(H.dragging){L.preventDefault(),L$(A.clientX,A.clientY);let r=document.elementFromPoint(A.clientX,A.clientY),a=Y$(r)||W0();if(f_.current!==a)w0(a);d0(a)}},[Y$,W0,O$,L$,w0,d0]),V$=D((L)=>{L.preventDefault();let H=N0.current;if(!H)return;let A=L.clientY,k=E_.current||280,v=L.currentTarget;v.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=A,r=(g)=>{s=g.clientY;let W_=H.clientHeight-80,m_=Math.min(Math.max(k-(g.clientY-A),80),W_);H.style.setProperty("--preview-height",`${m_}px`),E_.current=m_},a=()=>{let g=H.clientHeight-80,W_=Math.min(Math.max(k-(s-A),80),g);E_.current=W_,v.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K0("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}).current,r$=D((L)=>{L.preventDefault();let H=N0.current;if(!H)return;let A=L.touches[0];if(!A)return;let k=A.clientY,v=E_.current||280,s=L.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(g)=>{let W_=g.touches[0];if(!W_)return;g.preventDefault();let m_=H.clientHeight-80,R0=Math.min(Math.max(v-(W_.clientY-k),80),m_);H.style.setProperty("--preview-height",`${R0}px`),E_.current=R0},a=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",K0("previewHeight",String(Math.round(E_.current||v))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a),document.removeEventListener("touchcancel",a)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a),document.addEventListener("touchcancel",a)}).current,R$=async()=>{if(!W)return;try{let L=await d1(W);if(L.media_id)I(L.media_id)}catch(L){F((H)=>({...H||{},error:L.message||"Failed to attach"}))}},b$=async()=>{if(!W||d_)return;await C0(W)},v$=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},H_=y((L)=>{if(!v$(L))return;if(L.preventDefault(),u_.current+=1,!f0.current)t(!0);Z_("upload");let H=D$(L)||W0();w0(H),d0(H)},[W0,D$,w0,d0]),z2=y((L)=>{if(!v$(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!f0.current)t(!0);if(F$.current!=="upload")Z_("upload");let H=D$(L)||W0();if(f_.current!==H)w0(H);d0(H)},[W0,D$,w0,d0]),Q2=y((L)=>{if(!v$(L))return;if(L.preventDefault(),u_.current=Math.max(0,u_.current-1),u_.current===0)t(!1),Z_(null),w0(null),P0()},[w0,P0]),u$=y(async(L,H=".")=>{let A=Array.from(L||[]);if(A.length===0)return;let k=H&&H!==""?H:".",v=k!=="."?k:"workspace root";U_(!0);try{let s=null;for(let r of A)try{s=await a2(r,k)}catch(a){let g=a?.status,W_=a?.code;if(g===409||W_==="file_exists"){let m_=r?.name||"file";if(!window.confirm(`"${m_}" already exists in ${v}. Overwrite?`))continue;s=await a2(r,k,{overwrite:!0})}else throw a}if(s?.path)J$.current=s.path,U(s.path),b_.current?.(s.path);I_.current?.(k)}catch(s){c(s.message||"Failed to upload file")}finally{U_(!1)}},[]),a$=y(async(L,H)=>{if(!L)return;let A=n_.current?.get(L);if(!A)return;let k=H&&H!==""?H:".",v=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(k===v)return;try{let r=(await r1(L,k))?.path||L;if(A.type==="dir")O((a)=>{let g=new Set;for(let W_ of a)if(W_===L)g.add(r);else if(W_.startsWith(`${L}/`))g.add(`${r}${W_.slice(L.length)}`);else g.add(W_);return g});if(U(r),A.type==="dir")F(null),d(!1),I(null);else b_.current?.(r);I_.current?.(v),I_.current?.(k)}catch(s){c(s?.message||"Failed to move entry")}},[]);c$.current=a$;let U2=y(async(L)=>{if(!v$(L))return;L.preventDefault(),u_.current=0,t(!1),Z_(null),x_(null),P0();let H=Array.from(L?.dataTransfer?.files||[]);if(H.length===0)return;let A=f_.current||D$(L)||W0();await u$(H,A)},[W0,D$,u$]),F2=y((L)=>{if(L?.stopPropagation?.(),B_)return;let H=L?.currentTarget?.dataset?.uploadTarget||".";r_.current=H,n0.current?.click()},[B_]),t$=y(()=>{if(B_)return;let L=O0.current,H=L?n_.current?.get(L):null;r_.current=H?.type==="dir"?H.path:".",n0.current?.click()},[B_]),H2=y(()=>{V0(()=>M0(null))},[V0,M0]),Q=y(()=>{V0(()=>t$())},[V0,t$]),w=y(()=>{V0(()=>U$())},[V0,U$]),C=y(()=>{V0(()=>o0())},[V0,o0]),l=y(()=>{if(!W||!I0)return;V0(()=>Z0.current?.(W,E))},[V0,W,I0,E]),Y_=y(()=>{if(!W||W===".")return;V0(()=>k$(W))},[V0,W,k$]),Q_=y(()=>{if(!W||d_)return;V0(()=>b$())},[V0,W,d_,b$]),T_=y(()=>{if(!W||d_)return;V0(()=>R$())},[V0,W,d_,R$]),D0=y(()=>{if(!Q$)return;if(p0(),typeof window<"u")window.open(Q$,"_blank","noopener")},[p0,Q$]),a0=y(()=>{p0(),N?.()},[p0,N]),k_=y(()=>{p0(),z?.()},[p0,z]),t0=y((L)=>{if(!L||L.button!==0)return;let H=L.currentTarget;if(!H||!H.dataset)return;let A=H.dataset.path;if(!A||A===".")return;if(A0.current===A)return;let k=B0(L);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!i0(k))return;L.preventDefault(),v_.current={path:A,dragging:!1,startX:L.clientX,startY:L.clientY};let v=(r)=>{let a=v_.current;if(!a?.path)return;let g=Math.abs(r.clientX-a.startX),W_=Math.abs(r.clientY-a.startY),m_=g>4||W_>4;if(!a.dragging&&m_)a.dragging=!0,z0.current=!0,t(!0),Z_("move"),O$(a.path),L$(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(a.dragging){r.preventDefault(),L$(r.clientX,r.clientY);let R0=document.elementFromPoint(r.clientX,r.clientY),X0=Y$(R0)||W0();if(f_.current!==X0)w0(X0);d0(X0)}},s=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",s);let r=v_.current;if(r?.dragging&&r.path){let a=f_.current||W0(),g=c$.current;if(typeof g==="function")g(r.path,a)}v_.current={path:null,dragging:!1,startX:0,startY:0},u_.current=0,t(!1),Z_(null),w0(null),P0(),h$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{z0.current=!1},0)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",s)},[Y$,W0,O$,L$,h$,w0,d0,P0]),m$=y(async(L)=>{let H=Array.from(L?.target?.files||[]);if(H.length===0)return;let A=r_.current||".";if(await u$(H,A),r_.current=".",L?.target)L.target.value=""},[u$]);return B`
        <aside
            class=${`workspace-sidebar${$_?" workspace-drop-active":""}`}
            data-workspace-scale=${c_}
            ref=${N0}
            onDragEnter=${H_}
            onDragOver=${z2}
            onDragLeave=${Q2}
            onDrop=${U2}
        >
            <input type="file" multiple style="display:none" ref=${n0} onChange=${m$} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${S}
                            class=${`workspace-menu-button${e?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),P_((H)=>!H)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${e?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${e&&B`
                            <div class="workspace-menu-dropdown" ref=${z$} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${H2} disabled=${B_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Q} disabled=${B_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${w}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${C}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&B`<div class="workspace-menu-separator"></div>`}
                                ${W&&!d_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l} disabled=${!I0}>Open in editor</button>
                                `}
                                ${B$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y_}>Rename selected</button>
                                `}
                                ${d$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T_}>Download selected file</button>
                                `}
                                ${Q$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D0}>Download selected folder (zip)</button>
                                `}
                                ${n$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Q_}>Delete selected file</button>
                                `}

                                ${(N||z)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${a0}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k_}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${M0} title="New file" disabled=${B_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${U$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${r0}>
                ${B_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&B`<div class="workspace-loading">Loading…</div>`}
                ${K_&&B`<div class="workspace-error">${K_}</div>`}
                ${G&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${c0}
                        tabIndex="0"
                        onClick=${s$}
                        onDblClick=${P$}
                        onKeyDown=${o$}
                        onTouchStart=${T$}
                        onTouchEnd=${M$}
                        onTouchMove=${f$}
                        onTouchCancel=${M$}
                    >
                        ${W$.map(({node:L,depth:H})=>{let A=L.type==="dir",k=L.path===W,v=L.path===M,s=A&&X.has(L.path),r=L_&&L.path===L_,a=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return B`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+H*l$.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${t0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${A?s?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${A?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${A?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${v?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${S0}
                                                value=${u}
                                                onInput=${(g)=>f(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),y$();else if(g.key==="Escape")g.preventDefault(),k0()}}
                                                onBlur=${k0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${A&&!s&&a>0&&B`
                                        <span class="workspace-count">${a}</span>
                                    `}
                                    ${A&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${F2}
                                            disabled=${B_}
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
            ${W&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${V$} onTouchStart=${r$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${M0} title="New file" disabled=${B_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!d_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>I0&&Z0.current?.(W,E)}
                                    title=${y0}
                                    disabled=${!I0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${b$}
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
                            ${d_?B`
                                    <button class="workspace-download" onClick=${t$}
                                        title="Upload files to this folder" disabled=${B_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${e2(W,X_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${R$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${__&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&B`<div class="workspace-error">${E.error}</div>`}
                    ${d_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${p_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${p_?.error&&B`<div class="workspace-error">${p_.error}</div>`}
                        ${p_?.payload&&p_.payload.segments?.length>0&&B`
                            <${t5} payload=${p_.payload} />
                        `}
                        ${p_?.payload&&(!p_.payload.segments||p_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!d_&&B`
                        <div class="workspace-preview-body" ref=${F0}></div>
                    `}
                    ${x&&B`
                        <div class="workspace-download-card">
                            <${e5} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${O_&&B`
                <div class="workspace-drag-ghost" ref=${K$}>${O_.label}</div>
            `}
        </aside>
    `}var _j=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,$j=/\.(csv|tsv)$/i,jj=/\.pdf$/i,Zj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,X8=/\.drawio(\.xml|\.svg|\.png)?$/i;function q8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:q,onToggleDock:X,dockVisible:O}){let[W,U]=T(null),M=D(null);R(()=>{if(!W)return;let F=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[W]),R(()=>{let F=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let I=_.findIndex((i)=>i.id===$);if(x.shiftKey){let i=_[(I-1+_.length)%_.length];j?.(i.id)}else{let i=_[(I+1)%_.length];j?.(i.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let I=document.querySelector(".editor-pane");if(I&&I.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let m=y((F,x)=>{if(F.button===1){F.preventDefault(),Z?.(x);return}if(F.button===0)j?.(x)},[j,Z]),u=y((F,x)=>{F.preventDefault(),U({id:x,x:F.clientX,y:F.clientY})},[]),f=y((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=y((F,x)=>{F.preventDefault(),F.stopPropagation(),Z?.(x)},[Z]);if(R(()=>{if(!$||!M.current)return;let F=M.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${M} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(x)=>m(x,F.id)}
                    onContextMenu=${(x)=>u(x,F.id)}
                >
                    ${F.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${f}
                        onClick=${(x)=>E(x,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${O?" active":""}`}
                    onClick=${X}
                    title=${`${O?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${O?"Hide":"Show"} terminal`}
                    aria-pressed=${O?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&B`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Z?.(W.id),U(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(W.id),U(null)}}>
                    ${_.find((F)=>F.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(W.id),U(null)}}>
                        ${q?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${_j.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(W.id),x=W.id.split("/").pop()||"document",I="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(x);window.open(I,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${$j.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(W.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${jj.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(W.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${Zj.test(W.id)&&!X8.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(W.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${X8.test(W.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(W.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Nj=400,u4=60,L8=220,m4="mdPreviewHeight";function zj(){try{let _=localStorage.getItem(m4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=u4?$:L8}catch{return L8}}function O8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T(zj),G=D(null),q=D(null),X=D(""),O=D(_);return O.current=_,R(()=>{let M=()=>{let u=O.current?.()||"";if(u===X.current)return;X.current=u;try{let f=l0(u,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};M();let m=setInterval(M,Nj);return()=>clearInterval(m)},[]),R(()=>{if(G.current&&Z)C$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(M)=>{M.preventDefault();let m=M.clientY,u=q.current?.offsetHeight||z,f=q.current?.parentElement,E=f?f.offsetHeight*0.7:500,F=M.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=(i)=>{let n=Math.min(Math.max(u-(i.clientY-m),u4),E);K(n)},I=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(m4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",I)}}
            onTouchStart=${(M)=>{M.preventDefault();let m=M.touches[0];if(!m)return;let u=m.clientY,f=q.current?.offsetHeight||z,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,x=M.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let I=(n)=>{let __=n.touches[0];if(!__)return;n.preventDefault();let d=Math.min(Math.max(f-(__.clientY-u),u4),F);K(d)},i=()=>{x.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(m4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",I),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:z+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function B8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let q=D(Z);q.current=Z,R(()=>{G.current();let X=new _1((W,U)=>z.current(W,U),(W)=>K.current(W),{chatJid:N});X.connect();let O=()=>{X.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),X.disconnect()}},[N])}function Q8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);R(()=>{let q=X2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let z=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await z();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),K0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),K0("notificationsEnabled",String(q))},[z]),G=y((q,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let O=new Notification(q,{body:X});return O.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var v2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function U8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),G=D(!1),q=D(null),X=D(!1),O=D(null),W=D(null),U=D(0);R(()=>{G.current=z},[z]),R(()=>{W.current=Z},[Z]),R(()=>{U.current+=1,W.current=null,O.current=null,X.current=!1,G.current=!1,N(null),K(!1)},[j]);let M=y(async(f=null)=>{let E=U.current;try{if(f){let F=await x1(f,50,0,j);if(E!==U.current)return;N(F.posts),K(!1)}else{let F=await y2(10,null,j);if(E!==U.current)return;N(F.posts),K(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),m=y(async()=>{let f=U.current;try{let E=await y2(10,null,j);if(f!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return v2([...E.posts,...F])}),K((F)=>F||E.has_more)}catch(E){if(f!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),u=y(async(f={})=>{let E=U.current,F=W.current;if(!F||F.length===0)return;if(X.current)return;let{preserveScroll:x=!0,preserveMode:I="top",allowRepeat:i=!1}=f,n=(K_)=>{if(!x){K_();return}if(I==="top")$(K_);else _(K_)},d=F.slice().sort((K_,c)=>K_.id-c.id)[0]?.id;if(!Number.isFinite(d))return;if(!i&&O.current===d)return;X.current=!0,O.current=d;try{let K_=await y2(10,d,j);if(E!==U.current)return;if(K_.posts.length>0)n(()=>{N((c)=>v2([...K_.posts,...c||[]])),K(K_.has_more)});else K(!1)}catch(K_){if(E!==U.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===U.current)X.current=!1}},[j,_,$]);return R(()=>{q.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:M,refreshTimeline:m,loadMore:u,loadMoreRef:q,loadingMoreRef:X,lastBeforeIdRef:O}}function F8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,G]=T({text:"",totalLines:0}),[q,X]=T(null),[O,W]=T(null),[U,M]=T(null),m=D(null),u=D(0),f=D(!1),E=D(""),F=D(""),x=D(null),I=D(null),i=D(null),n=D(null),__=D(!1),d=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:q,setPendingRequest:X,currentTurnId:O,setCurrentTurnId:W,steerQueuedTurnId:U,setSteerQueuedTurnId:M,lastAgentEventRef:m,lastSilenceNoticeRef:u,isAgentRunningRef:f,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:i,steerQueuedTurnIdRef:n,thoughtExpandedRef:__,draftExpandedRef:d}}function H8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.clientX,M=$.current||280,m=O.currentTarget;m.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=U,f=(F)=>{u=F.clientX;let x=Math.min(Math.max(M+(F.clientX-U),160),600);W.style.setProperty("--sidebar-width",`${x}px`),$.current=x},E=()=>{let F=Math.min(Math.max(M+(u-U),160),600);$.current=F,m.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,z=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.touches[0];if(!U)return;let M=U.clientX,m=$.current||280,u=O.currentTarget;u.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let I=Math.min(Math.max(m+(x.clientX-M),160),600);W.style.setProperty("--sidebar-width",`${I}px`),$.current=I},E=()=>{u.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.clientX,M=j.current||$.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=U,f=(F)=>{u=F.clientX;let x=Math.min(Math.max(M+(F.clientX-U),200),800);W.style.setProperty("--editor-width",`${x}px`),j.current=x},E=()=>{let F=Math.min(Math.max(M+(u-U),200),800);j.current=F,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,G=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.touches[0];if(!U)return;let M=U.clientX,m=j.current||$.current||280,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let I=Math.min(Math.max(m+(x.clientX-M),200),800);W.style.setProperty("--editor-width",`${I}px`),j.current=I},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",K0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.clientY,M=Z?.current||200,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=U,f=(F)=>{u=F.clientY;let x=Math.min(Math.max(M-(F.clientY-U),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(M-(u-U),100),window.innerHeight*0.5);if(Z)Z.current=F;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,X=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let U=O.touches[0];if(!U)return;let M=U.clientY,m=Z?.current||200,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let f=(F)=>{let x=F.touches[0];if(!x)return;F.preventDefault();let I=Math.min(Math.max(m-(x.clientY-M),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",K0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:X}}function J8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>s_.getTabs()),[N,z]=T(()=>s_.getActiveId()),[K,G]=T(()=>s_.getTabs().length>0);R(()=>{return s_.onChange((I,i)=>{Z(I),z(i),G(I.length>0)})},[]);let[q,X]=T(()=>new Set),O=y((I)=>{X((i)=>{let n=new Set(i);if(n.has(I))n.delete(I);else n.add(I);return n})},[]),W=y((I)=>{X((i)=>{if(!i.has(I))return i;let n=new Set(i);return n.delete(I),n})},[]),U=y((I,i={})=>{if(!I)return;let n={path:I,mode:"edit"};try{if(!$0.resolve(n)){if(!$0.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,d)}let __=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;s_.open(I,__)},[]),M=y(()=>{let I=s_.getActiveId();if(I){let i=s_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}s_.close(I),W(I),$.current?.(I)}},[W]),m=y((I)=>{let i=s_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}s_.close(I),W(I),$.current?.(I)},[W]),u=y((I)=>{s_.activate(I)},[]),f=y((I)=>{let i=s_.getTabs().filter((d)=>d.id!==I&&!d.pinned),n=i.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let __=i.map((d)=>d.id);s_.closeOthers(I),__.forEach((d)=>{W(d),$.current?.(d)})},[W]),E=y(()=>{let I=s_.getTabs().filter((__)=>!__.pinned),i=I.filter((__)=>__.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let n=I.map((__)=>__.id);s_.closeAll(),n.forEach((__)=>{W(__),$.current?.(__)})},[W]),F=y((I)=>{s_.togglePin(I)},[]),x=y(()=>{let I=s_.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return R(()=>{let I=(i)=>{let{oldPath:n,newPath:__,type:d}=i.detail||{};if(!n||!__)return;if(d==="dir"){for(let K_ of s_.getTabs())if(K_.path===n||K_.path.startsWith(`${n}/`)){let c=`${__}${K_.path.slice(n.length)}`;s_.rename(K_.id,c)}}else s_.rename(n,__)};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),R(()=>{let I=(i)=>{if(s_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:M,handleTabClose:m,handleTabActivate:u,handleTabCloseOthers:f,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:O,revealInExplorer:x}}function g4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var p4=g4("warning",30000),D8=g4("finalize",120000),c4=g4("refresh",30000),E8=30000;function k8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function y8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function A8(_=30000){let[,$]=T(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function h4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function w8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function j2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function i4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function P8(_,$={}){if(j2($))return null;if(i4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Kj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function b8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function I8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function C8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function B2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function x8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Kj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function L1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l4(_){return String(_||"").trim()||"web:default"}function S8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function T8(_={}){return j2(_)&&i4(_)}function Yj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Wj(_={},$={}){if(!T8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Yj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function f8(_={}){if(!T8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},K=()=>{Z=0,Wj({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{G();for(let W of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),G()},W);if(U!=null)N.add(U)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},O=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",q,!0),O?.addEventListener?.("resize",q),O?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",q,!0),O?.removeEventListener?.("resize",q),O?.removeEventListener?.("scroll",q)}}function Gj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Gj($,j)}var Vj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function R8(_){return Vj.has(String(_||"").trim())}function Xj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function v8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Xj(_),{detail:Z})),!0}var qj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function u8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(j2({window:j,navigator:Z}))};N();let K=qj.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function m8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d4="piclaw_btw_session";function Lj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Oj(){let _=Z$(d4);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var g8=S1,p8=f1,Bj=v1,c8=c1,h8=h1,i8=u1,n4=q$(j$,"getAgentContext",null),Qj=q$(j$,"getAgentModels",{current:null,models:[]}),Uj=q$(j$,"getActiveChatAgents",{chats:[]}),l8=q$(j$,"getChatBranches",{chats:[]}),Fj=q$(j$,"renameChatBranch",null),Hj=q$(j$,"pruneChatBranch",null),Jj=q$(j$,"getAgentQueueState",{count:0}),Dj=q$(j$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Ej=q$(j$,"removeAgentQueueItem",{removed:!1}),kj=q$(j$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});$0.register(O4);$0.register(k4);$0.register(E4);$0.register(y4);$0.register(A4);$0.register(w4);$0.register(M4);$0.register(I4);B4();$0.register(H4);$0.register(J4);function yj({locationParams:_}){let $=a_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=a_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=a_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=a_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=T("disconnected"),[G,q]=T(()=>j2()),[X,O]=T(null),[W,U]=T(null),[M,m]=T(!1),[u,f]=T("current"),[E,F]=T([]),[x,I]=T([]),[i,n]=T(null),{agentStatus:__,setAgentStatus:d,agentDraft:K_,setAgentDraft:c,agentPlan:X_,setAgentPlan:o_,agentThought:$_,setAgentThought:t,pendingRequest:z_,setPendingRequest:Z_,currentTurnId:O_,setCurrentTurnId:g_,steerQueuedTurnId:L_,setSteerQueuedTurnId:x_,lastAgentEventRef:B_,lastSilenceNoticeRef:U_,isAgentRunningRef:p_,draftBufferRef:w_,thoughtBufferRef:R_,pendingRequestRef:Y0,stalledPostIdRef:c_,currentTurnIdRef:G_,steerQueuedTurnIdRef:e,thoughtExpandedRef:P_,draftExpandedRef:V_}=F8(),[M_,j0]=T({}),[t_,S_]=T(null),[A_,n_]=T(null),[h_,Z0]=T(!1),[b_,I_]=T(null),[N0,c0]=T([]),[S0,n0]=T([]),[r_,y_]=T(null),[G0,v_]=T([]),[q0,z0]=T(!1),[E_,E0]=T(()=>Oj()),u0=a_(()=>N0.find((V)=>V?.chat_jid===$)||null,[N0,$]),F_=a_(()=>S0.find((V)=>V?.chat_jid===$)||u0||null,[u0,S0,$]),F0=F_?.root_chat_jid||u0?.root_chat_jid||$,h0=Lj(u),[z$,S]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),o=G0.length,j_=D(new Set),C_=D([]),u_=D(new Set),f_=D(0),f0=D({inFlight:!1,lastAttemptAt:0,turnId:null});j_.current=new Set(G0.map((V)=>V.row_id)),C_.current=G0;let{notificationsEnabled:F$,notificationPermission:K$,toggleNotifications:H$,notify:L0}=Q8(),[c$,O0]=T(()=>new Set),[A0,J$]=T(()=>X2("workspaceOpen",!0)),m0=D(null),{editorOpen:H0,tabStripTabs:S$,tabStripActiveId:g0,previewTabs:Z2,openEditor:W0,closeEditor:Y$,handleTabClose:D$,handleTabActivate:w0,handleTabCloseOthers:P0,handleTabCloseAll:d0,handleTabTogglePin:L$,handleTabTogglePreview:O$,revealInExplorer:h$}=J8({onTabClosed:(V)=>m0.current?.(V)}),E$=D(null),k0=D(null),k$=D(null),y$=D(null),J0=$0.getDockPanes().length>0,[M0,A$]=T(!1),b0=y(()=>A$((V)=>!V),[]),w$=y(()=>{W0(U4,{label:"Terminal"})},[W0]),W$=!j&&(H0||J0&&M0);R(()=>{let V=E$.current;if(!V)return;if(k0.current)k0.current.dispose(),k0.current=null;let Y=g0;if(!Y)return;let J={path:Y,mode:"edit"},b=$0.resolve(J)||$0.get("editor");if(!b){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=b.mount(V,J);k0.current=P,P.onDirtyChange?.((N_)=>{s_.setDirty(Y,N_)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{Y$()});let p=s_.getViewState(Y);if(p&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(p));if(typeof P.onViewStateChange==="function")P.onViewStateChange((N_)=>{s_.saveViewState(Y,N_)});return requestAnimationFrame(()=>P.focus()),()=>{if(k0.current===P)P.dispose(),k0.current=null}},[g0,Y$]),R(()=>{let V=(Y)=>{let J=Y.detail?.path;if(J)W0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V)}},[W0]),R(()=>{let V=k$.current;if(y$.current)y$.current.dispose(),y$.current=null;if(!V||!J0||!M0)return;let Y=$0.getDockPanes()[0];if(!Y){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(V,{mode:"view"});return y$.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(y$.current===J)J.dispose(),y$.current=null}},[J0,M0]);let[i$,l$]=T({name:"You",avatar_url:null,avatar_background:null}),N2=D(!1),d_=D(!1),I0=D(null),y0=D($),B$=D(new Map),n$=D($),d$=D(0),Q$=D(0),p0=D({}),V0=D({name:null,avatar_url:null}),B0=D({currentHashtag:null,searchQuery:null}),i0=D(null),P$=D(null),s$=D(0),U$=D(0),s0=D(0),o0=D(null),r0=D(null),C0=D(null),G$=D(null),o$=D(0),T$=D({title:null,avatarBase:null}),M$=D(null),f$=y(()=>{if(M$.current)clearTimeout(M$.current),M$.current=null;n(null)},[]);A8(30000),R(()=>{return n3()},[]),R(()=>{return u8(q)},[]),R(()=>{K0("workspaceOpen",String(A0))},[A0]),R(()=>{return f8()},[]),R(()=>{return()=>{f$()}},[f$]),R(()=>{if(!E_){K0(d4,"");return}K0(d4,JSON.stringify({question:E_.question||"",answer:E_.answer||"",thinking:E_.thinking||"",error:E_.error||null,status:E_.status||"success"}))},[E_]),R(()=>{p0.current=M_||{}},[M_]),R(()=>{y0.current=$},[$]),R(()=>{V0.current=i$||{name:"You",avatar_url:null,avatar_background:null}},[i$]);let V$=y((V,Y,J=null)=>{if(typeof document>"u")return;let b=(V||"").trim()||"PiClaw";if(T$.current.title!==b){document.title=b;let h=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(h&&h.getAttribute("content")!==b)h.setAttribute("content",b);T$.current.title=b}let P=document.getElementById("dynamic-favicon");if(!P)return;let p=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",N_=Y||p,J_=Y?`${N_}|${J||""}`:N_;if(T$.current.avatarBase!==J_){let h=Y?`${N_}${N_.includes("?")?"&":"?"}v=${J||Date.now()}`:N_;P.setAttribute("href",h),T$.current.avatarBase=J_}},[]),r$=y((V)=>{if(!V)return;F((Y)=>Y.includes(V)?Y:[...Y,V])},[]),R$=y((V)=>{F((Y)=>Y.filter((J)=>J!==V))},[]);m0.current=R$;let b$=y(()=>{F([])},[]),v$=y((V)=>{if(!Array.isArray(V)){F([]);return}let Y=[],J=new Set;for(let b of V){if(typeof b!=="string"||!b.trim())continue;let P=b.trim();if(J.has(P))continue;J.add(P),Y.push(P)}F(Y)},[]),H_=y((V,Y=null,J="info",b=3000)=>{f$(),n({title:V,detail:Y||null,kind:J||"info"}),M$.current=setTimeout(()=>{n((P)=>P?.title===V?null:P)},b)},[f$]),z2=y((V)=>{let Y=w8(V,{editorOpen:H0,resolvePane:(J)=>$0.resolve(J)});if(Y.kind==="open"){W0(Y.path);return}if(Y.kind==="toast")H_(Y.title,Y.detail,Y.level)},[H0,W0,H_]),Q2=y(()=>{let V=g0;if(V)r$(V)},[g0,r$]),u$=y((V)=>{if(!V)return;I((Y)=>Y.includes(V)?Y:[...Y,V])},[]),a$=y(async(V,Y=null)=>{let J=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+V);if(b){J(b);return}try{let P=typeof Y==="string"&&Y.trim()?Y.trim():$,N_=(await T1(V,P))?.thread?.[0];if(!N_)return;g((J_)=>{if(!J_)return[N_];if(J_.some((h)=>h.id===N_.id))return J_;return[...J_,N_]}),requestAnimationFrame(()=>{setTimeout(()=>{let J_=document.getElementById("post-"+V);if(J_)J(J_)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",V,P)}},[$]),U2=y((V)=>{I((Y)=>Y.filter((J)=>J!==V))},[]),F2=y(()=>{I([])},[]),t$=y((V)=>{if(!Array.isArray(V)){I([]);return}let Y=[],J=new Set;for(let b of V){if(typeof b!=="string"||!b.trim())continue;let P=b.trim();if(J.has(P))continue;J.add(P),Y.push(P)}I(Y)},[]),H2=y((V)=>{let Y=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";H_("Compose failed",Y,"error",5000)},[H_]),Q=y((V={})=>{let Y=Date.now();if(B_.current=Y,V.running)p_.current=!0,z0((J)=>J?J:!0);if(V.clearSilence)U_.current=0},[z0]),w=y(()=>{if(G$.current)clearTimeout(G$.current),G$.current=null;o$.current=0},[]);R(()=>()=>{w()},[w]);let C=y(()=>{w(),d((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:Y,lastActivity:J,...b}=V;return b})},[w]),l=y((V)=>{if(!V)return;w();let Y=Date.now();o$.current=Y,d({type:V.type||"active",last_activity:!0}),G$.current=setTimeout(()=>{if(o$.current!==Y)return;d((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},E8)},[w]),Y_=y(()=>{p_.current=!1,z0(!1),B_.current=null,U_.current=0,w_.current="",R_.current="",Y0.current=null,r0.current=null,G_.current=null,e.current=null,I0.current=null,f0.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),g_(null),x_(null),P_.current=!1,V_.current=!1},[w,g_,x_,z0]),Q_=y((V)=>{if(!S8({remainingQueueCount:V,currentTurnId:G_.current,isAgentTurnActive:q0}))return;e.current=null,x_(null)},[q0,x_]),T_=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),D0=y(()=>({agentStatus:__,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:$_?{...$_}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:O_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(q0),followupQueueItems:Array.isArray(G0)?G0.map((V)=>({...V})):[],activeModel:t_,activeThinkingLevel:A_,supportsThinking:Boolean(h_),activeModelUsage:b_,contextUsage:r_,isAgentRunning:Boolean(p_.current),wasAgentActive:Boolean(d_.current),draftBuffer:w_.current||"",thoughtBuffer:R_.current||"",lastAgentEvent:B_.current||null,lastSilenceNotice:U_.current||0,lastAgentResponse:r0.current||null,currentTurnIdRef:G_.current||null,steerQueuedTurnIdRef:e.current||null,thoughtExpanded:Boolean(P_.current),draftExpanded:Boolean(V_.current),agentStatusRef:I0.current||null,silentRecovery:{...f0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[t_,b_,A_,K_,X_,__,$_,r_,O_,G0,q0,z_,L_,h_]),a0=y((V)=>{let Y=V||T_();w(),p_.current=Boolean(Y.isAgentRunning),d_.current=Boolean(Y.wasAgentActive),z0(Boolean(Y.isAgentTurnActive)),B_.current=Y.lastAgentEvent||null,U_.current=Number(Y.lastSilenceNotice||0),w_.current=Y.draftBuffer||"",R_.current=Y.thoughtBuffer||"",Y0.current=Y.pendingRequest||null,r0.current=Y.lastAgentResponse||null,G_.current=Y.currentTurnIdRef||null,e.current=Y.steerQueuedTurnIdRef||null,I0.current=Y.agentStatusRef||null,f0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},P_.current=Boolean(Y.thoughtExpanded),V_.current=Boolean(Y.draftExpanded),d(Y.agentStatus||null),c(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),o_(Y.agentPlan||""),t(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),g_(Y.currentTurnId||null),x_(Y.steerQueuedTurnId||null),v_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),S_(Y.activeModel||null),n_(Y.activeThinkingLevel||null),Z0(Boolean(Y.supportsThinking)),I_(Y.activeModelUsage??null),y_(Y.contextUsage??null)},[w,T_,g_,v_,z0,x_]),k_=y((V)=>{if(!V)return;if(G_.current===V)return;G_.current=V,f0.current={inFlight:!1,lastAttemptAt:0,turnId:V},g_(V),e.current=null,x_(null),w_.current="",R_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y0.current=null,r0.current=null,P_.current=!1,V_.current=!1},[g_,x_]),t0=y((V)=>{if(typeof document<"u"){let h=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&h)return}let Y=r0.current;if(!Y||!Y.post)return;if(V&&Y.turnId&&Y.turnId!==V)return;let J=Y.post;if(J.id&&o0.current===J.id)return;let b=String(J?.data?.content||"").trim();if(!b)return;o0.current=J.id||o0.current,r0.current=null;let P=b.replace(/\s+/g," ").slice(0,200),p=p0.current||{},J_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";L0(J_,P)},[L0]),m$=y(async(V,Y)=>{if(V!=="thought"&&V!=="draft")return;let J=G_.current;if(V==="thought"){if(P_.current=Y,J)try{await h8(J,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=J?await c8(J,"thought"):null;if(b?.text)R_.current=b.text;t((P)=>({...P||{text:"",totalLines:0},fullText:R_.current||P?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:P?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(V_.current=Y,J)try{await h8(J,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=J?await c8(J,"draft"):null;if(b?.text)w_.current=b.text;c((P)=>({...P||{text:"",totalLines:0},fullText:w_.current||P?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:P?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),L=D(null),H=y(()=>{let V=i0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);L.current=H;let A=y((V)=>{let Y=i0.current;if(!Y||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:b}=B0.current||{},P=!(b&&!J),p=P?Y.scrollHeight-Y.scrollTop:Y.scrollTop;V(),requestAnimationFrame(()=>{let N_=i0.current;if(!N_)return;if(P){let J_=Math.max(N_.scrollHeight-p,0);N_.scrollTop=J_}else{let J_=Math.max(N_.scrollHeight-N_.clientHeight,0),h=Math.min(p,J_);N_.scrollTop=h}})},[]),k=y((V)=>{let Y=i0.current;if(!Y||typeof V!=="function"){V?.();return}let J=Y.scrollTop;V(),requestAnimationFrame(()=>{let b=i0.current;if(!b)return;let P=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(J,P)})},[]),v="Queued as a follow-up (one-at-a-time).",s="⁣",r=y((V)=>{if(!V||!Array.isArray(V))return V;let Y=j_.current,J=new Set(Y),b=V.filter((P)=>{if(J.has(P?.id))return!1;if(P?.data?.is_bot_message){let p=P?.data?.content;if(p===v||p===s)return!1}return!0});return b.length===V.length?V:b},[]),{posts:a,setPosts:g,hasMore:W_,setHasMore:m_,hasMoreRef:R0,loadPosts:X0,refreshTimeline:x0,loadMore:n8,loadMoreRef:O1}=U8({preserveTimelineScroll:A,preserveTimelineScrollTop:k,chatJid:$}),K2=a_(()=>r(a),[a,G0,r]),u2=y(()=>{let V=c_.current;if(!V)return;g((Y)=>Y?Y.filter((J)=>J.id!==V):Y),c_.current=null},[g]),{handleSplitterMouseDown:d8,handleSplitterTouchStart:s8,handleEditorSplitterMouseDown:o8,handleEditorSplitterTouchStart:r8,handleDockSplitterMouseDown:a8,handleDockSplitterTouchStart:t8}=H8({appShellRef:P$,sidebarWidthRef:s$,editorWidthRef:U$,dockHeightRef:s0}),s4=y(()=>{if(!p_.current)return;p_.current=!1,U_.current=0,B_.current=null,G_.current=null,g_(null),P_.current=!1,V_.current=!1;let V=(w_.current||"").trim();if(w_.current="",R_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y0.current=null,r0.current=null,!V){d({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),P=new Date().toISOString(),p={id:b,timestamp:P,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};c_.current=b,g((N_)=>N_?v2([...N_,p]):[p]),L.current?.(),d(null)},[g_]);R(()=>{B0.current={currentHashtag:X,searchQuery:W}},[X,W]);let i_=y(()=>{let V=++f_.current,Y=$;Jj(Y).then((J)=>{if(V!==f_.current)return;if(y0.current!==Y)return;let b=u_.current,P=Array.isArray(J?.items)?J.items.map((p)=>({...p})).filter((p)=>!b.has(p.row_id)):[];if(P.length){v_((p)=>{if(p.length===P.length&&p.every((N_,J_)=>N_.row_id===P[J_].row_id))return p;return P});return}b.clear(),Q_(0),v_((p)=>p.length===0?p:[])}).catch(()=>{if(V!==f_.current)return;if(y0.current!==Y)return;v_((J)=>J.length===0?J:[])})},[Q_,$,v_]),e0=y(async()=>{let V=$;try{let Y=await n4(V);if(y0.current!==V)return;if(Y)y_(Y)}catch(Y){if(y0.current!==V)return;console.warn("Failed to fetch agent context:",Y)}},[$]),_$=y(async()=>{let V=$;try{let Y=await i8(V);if(y0.current!==V)return null;if(!Y||Y.status!=="active"||!Y.data){if(d_.current){let{currentHashtag:P,searchQuery:p}=B0.current||{};if(!P&&!p)x0()}return d_.current=!1,Y_(),I0.current=null,d(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y0.current=null,Y??null}d_.current=!0;let J=Y.data;I0.current=J;let b=J.turn_id||J.turnId;if(b)k_(b);if(Q({running:!0,clearSilence:!0}),C(),d(J),Y.thought&&Y.thought.text)t((P)=>{if(P&&P.text&&P.text.length>=Y.thought.text.length)return P;return R_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)c((P)=>{if(P&&P.text&&P.text.length>=Y.draft.text.length)return P;return w_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[Y_,C,Q,x0,k_]),B1=y(async()=>{if(!p_.current)return null;if(Y0.current)return null;let V=G_.current||null,Y=f0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===V&&J-Y.lastAttemptAt<c4)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=V;try{let{currentHashtag:b,searchQuery:P}=B0.current||{};if(!b&&!P)await x0();return await i_(),await _$()}finally{Y.inFlight=!1}},[_$,i_,x0]);R(()=>{let V=Math.min(1000,Math.max(100,Math.floor(p4/2))),Y=setInterval(()=>{if(!p_.current)return;if(Y0.current)return;let J=B_.current;if(!J)return;let b=Date.now(),P=b-J,p=C2(I0.current);if(P>=D8){if(!p)d({type:"waiting",title:"Re-syncing after a quiet period…"});B1();return}if(P>=p4){if(b-U_.current>=c4){if(!p){let N_=Math.floor(P/1000);d({type:"waiting",title:`Waiting for model… No events for ${N_}s`})}U_.current=b,B1()}}},V);return()=>clearInterval(Y)},[B1]);let e8=y((V)=>{if(K(V),V!=="connected"){d(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y0.current=null,Y_();return}if(!N2.current){N2.current=!0,_$(),e0();return}let{currentHashtag:Y,searchQuery:J}=B0.current;if(!Y&&!J)x0();_$(),i_(),e0()},[Y_,x0,_$,i_,e0]),_9=y(async(V)=>{O(V),g(null),await X0(V)},[X0]),$9=y(async()=>{O(null),U(null),g(null),await X0()},[X0]),j9=y(async(V,Y=u)=>{if(!V||!V.trim())return;let J=Y==="root"||Y==="all"?Y:"current";f(J),U(V.trim()),O(null),g(null);try{let b=await g8(V.trim(),50,0,$,J,F0);g(b.results),m_(!1)}catch(b){console.error("Failed to search:",b),g([])}},[$,F0,u]),Z9=y(()=>{m(!0),U(null),O(null),f("current"),g([])},[]),N9=y(()=>{m(!1),U(null),X0()},[X0]),wj=y(()=>{},[]),z9=y(async(V)=>{if(!V)return;let Y=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,b=K2?.filter((p)=>p?.data?.thread_id===Y&&p?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let P=(p)=>{if(!p.length)return;O0((J_)=>{let h=new Set(J_);return p.forEach((q_)=>h.add(q_)),h}),setTimeout(()=>{if(k(()=>{g((J_)=>J_?J_.filter((h)=>!p.includes(h.id)):J_)}),O0((J_)=>{let h=new Set(J_);return p.forEach((q_)=>h.delete(q_)),h}),R0.current)O1.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await p8(Y,b>0,J);if(p?.ids?.length)P(p.ids)}catch(p){let N_=p?.message||"";if(b===0&&N_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let h=await p8(Y,!0,J);if(h?.ids?.length)P(h.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${N_}`)}},[$,K2,k]),o4=y(async()=>{try{let V=await Bj();j0(k8(V));let Y=V?.user||{};l$((b)=>{let P=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",p=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,N_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===P&&b.avatar_url===p&&b.avatar_background===N_)return b;return{name:P,avatar_url:p,avatar_background:N_}});let J=(V?.agents||[]).find((b)=>b.id==="default");V$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,Y=await n4(V);if(y0.current!==V)return;if(Y)y_(Y)}catch{}},[V$,$]);R(()=>{o4();let V=q2("sidebarWidth",null),Y=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(s$.current=Y,P$.current)P$.current.style.setProperty("--sidebar-width",`${Y}px`)},[o4]);let Q1=q0||__!==null,r4=y((V)=>{if(!V||typeof V!=="object")return;let Y=V.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:b}=V;if(!J&&b===void 0)return;let P=p0.current?.[Y]||{id:Y},p=P.name||null,N_=P.avatar_url??P.avatarUrl??P.avatar??null,J_=!1,h=!1;if(J&&J!==P.name)p=J,h=!0;if(b!==void 0){let q_=typeof b==="string"?b.trim():null,e_=typeof N_==="string"?N_.trim():null,D_=q_||null;if(D_!==(e_||null))N_=D_,J_=!0}if(!h&&!J_)return;if(j0((q_)=>{let D_={...q_[Y]||{id:Y}};if(h)D_.name=p;if(J_)D_.avatar_url=N_;return{...q_,[Y]:D_}}),Y==="default")V$(p,N_,J_?Date.now():null)},[V$]),a4=y((V)=>{if(!V||typeof V!=="object")return;let Y=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,b=V.user_avatar_background??V.userAvatarBackground;if(Y===void 0&&J===void 0&&b===void 0)return;l$((P)=>{let p=typeof Y==="string"&&Y.trim()?Y.trim():P.name||"You",N_=J===void 0?P.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,J_=b===void 0?P.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(P.name===p&&P.avatar_url===N_&&P.avatar_background===J_)return P;return{name:p,avatar_url:N_,avatar_background:J_}})},[]),U1=y((V)=>{if(!V||typeof V!=="object")return;let Y=V.model??V.current;if(Y!==void 0)S_(Y);if(V.thinking_level!==void 0)n_(V.thinking_level??null);if(V.supports_thinking!==void 0)Z0(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)I_(V.provider_usage??null)},[]),J2=y(()=>{let V=$;Qj(V).then((Y)=>{if(y0.current!==V)return;if(Y)U1(Y)}).catch(()=>{})},[U1,$]),v0=y(()=>{Uj().then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];c0(Y)}).catch(()=>{})},[]),T0=y(()=>{l8(F0).then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];n0(Y)}).catch(()=>{})},[F0]),K9=y((V)=>{let Y=V?.row_id;if(Y==null)return;u_.current.add(Y),v_((J)=>J.filter((b)=>b?.row_id!==Y)),Dj(Y,l4($)).then(()=>{i_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),H_("Failed to steer message","The queued message could not be sent as steering.","warning"),u_.current.delete(Y),i_()})},[$,i_,v_,H_]),Y9=y((V)=>{let Y=V?.row_id;if(Y==null)return;let J=C_.current.filter((b)=>b?.row_id!==Y).length;u_.current.add(Y),Q_(J),v_((b)=>b.filter((P)=>P?.row_id!==Y)),Ej(Y,l4($)).then(()=>{i_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),H_("Failed to remove message","The queued message could not be removed.","warning"),u_.current.delete(Y),i_()})},[Q_,$,i_,v_,H_]),F1=y((V)=>{if(!V||typeof V!=="object")return;if(v0(),T0(),V?.queued==="followup"||V?.queued==="steer"){i_();return}let Y=V?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))i_()},[v0,T0,i_]),H1=y(()=>{if(C0.current)C0.current.abort(),C0.current=null;E0(null)},[]),m2=y(async(V)=>{let Y=String(V||"").trim();if(!Y)return H_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(C0.current)C0.current.abort();let J=new AbortController;C0.current=J,E0({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await kj(Y,{signal:J.signal,chatJid:j6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,p)=>{if(P==="side_prompt_start")E0((N_)=>N_?{...N_,status:"running"}:N_)},onThinkingDelta:(P)=>{E0((p)=>p?{...p,thinking:`${p.thinking||""}${P||""}`}:p)},onTextDelta:(P)=>{E0((p)=>p?{...p,answer:`${p.answer||""}${P||""}`}:p)}});if(C0.current!==J)return!0;E0((P)=>P?{...P,answer:b?.result||P.answer||"",thinking:b?.thinking||P.thinking||"",model:b?.model||null,status:"success",error:null}:P)}catch(b){if(J.signal.aborted)return!0;E0((P)=>P?{...P,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:P)}finally{if(C0.current===J)C0.current=null}return!0},[$,H_]),W9=y(async({content:V})=>{let Y=$6(V);if(!Y)return!1;if(Y.type==="help")return H_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return H1(),H_("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await m2(Y.question),!0;return!1},[H1,m2,H_]),G9=y(()=>{if(E_?.question)m2(E_.question)},[E_,m2]),V9=y(async()=>{let V=z6(E_);if(!V)return;try{let Y=await G2("default",V,null,[],Q1?"queue":null,$);F1(Y),H_(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){H_("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[E_,F1,Q1,H_]),D2=y(()=>{J2(),v0(),T0(),i_(),e0()},[J2,v0,T0,i_,e0]);R(()=>{D2();let V=setInterval(()=>{J2(),v0(),T0(),i_()},60000);return()=>clearInterval(V)},[D2,J2,v0,T0,i_]),R(()=>{T0()},[T0]),R(()=>{let V=!1;if(g(null),X)return X0(X),()=>{V=!0};if(W)return g8(W,50,0,$,u,F0).then((Y)=>{if(V)return;g(Y.results),m_(!1)}).catch((Y)=>{if(V)return;console.error("Failed to search:",Y),g([]),m_(!1)}),()=>{V=!0};return X0(),()=>{V=!0}},[$,X,W,u,F0,X0,m_,g]),R(()=>{let V=n$.current||$;B$.current.set(V,D0())},[$,D0]),R(()=>{let V=n$.current||$;if(V===$)return;B$.current.set(V,D0()),n$.current=$,u_.current.clear(),a0(B$.current.get($)||null),i_(),_$(),e0()},[$,_$,e0,i_,a0,D0]);let X9=y(()=>{let{currentHashtag:V,searchQuery:Y}=B0.current||{};if(!V&&!Y)x0();D2()},[D2,x0]),J1=y((V,Y)=>{let J=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,p=b?b===$:V==="connected"||V==="workspace_update";if(p)r4(Y),a4(Y);if(V==="ui_theme"){d3(Y);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))C()}if(V==="connected"){d(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y0.current=null,Y_();let h=$;i8(h).then((D_)=>{if(y0.current!==h)return;if(!D_||D_.status!=="active"||!D_.data)return;let Y2=D_.data,_3=Y2.turn_id||Y2.turnId;if(_3)k_(_3);if(Q({clearSilence:!0}),l(Y2),D_.thought&&D_.thought.text)R_.current=D_.thought.text,t({text:D_.thought.text,totalLines:D_.thought.totalLines||0});if(D_.draft&&D_.draft.text)w_.current=D_.draft.text,c({text:D_.draft.text,totalLines:D_.draft.totalLines||0})}).catch((D_)=>{console.warn("Failed to fetch agent status:",D_)});let{currentHashtag:q_,searchQuery:e_}=B0.current||{};if(!q_&&!e_)x0();D2();return}if(V==="agent_status"){if(!p){if(Y?.type==="done"||Y?.type==="error")v0(),T0();return}if(Y.type==="done"||Y.type==="error"){if(J&&G_.current&&J!==G_.current)return;if(Y.type==="done"){t0(J||G_.current);let{currentHashtag:h,searchQuery:q_}=B0.current||{};if(!h&&!q_)x0();if(Y.context_usage)y_(Y.context_usage)}if(d_.current=!1,Y_(),u_.current.clear(),v0(),i_(),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null),Y.type==="error")d({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(J)k_(J);if(Q({running:!0,clearSilence:!0}),Y.type==="thinking")w_.current="",R_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0});I0.current=Y,d((h)=>{if(h&&h.type===Y.type&&h.title===Y.title)return h;return Y})}return}if(V==="agent_steer_queued"){if(!p)return;if(J&&G_.current&&J!==G_.current)return;let h=J||G_.current;if(!h)return;e.current=h,x_(h);return}if(V==="agent_followup_queued"){if(!p)return;let h=Y?.row_id,q_=Y?.content;if(h!=null&&typeof q_==="string"&&q_.trim())v_((e_)=>{if(e_.some((D_)=>D_?.row_id===h))return e_;return[...e_,{row_id:h,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});i_();return}if(V==="agent_followup_consumed"){if(!p)return;let h=Y?.row_id;if(h!=null){let q_=C_.current.filter((e_)=>e_.row_id!==h).length;Q_(q_),v_((e_)=>e_.filter((D_)=>D_.row_id!==h))}i_(),x0();return}if(V==="agent_followup_removed"){if(!p)return;let h=Y?.row_id;if(h!=null){let q_=C_.current.filter((e_)=>e_.row_id!==h).length;u_.current.add(h),Q_(q_),v_((e_)=>e_.filter((D_)=>D_.row_id!==h))}i_();return}if(V==="agent_draft_delta"){if(!p)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)k_(J);if(Q({running:!0,clearSilence:!0}),Y?.reset)w_.current="";if(Y?.delta)w_.current+=Y.delta;let h=Date.now();if(!d$.current||h-d$.current>=100){d$.current=h;let q_=w_.current,e_=h4(q_);if(V_.current)c((D_)=>({text:D_?.text||"",totalLines:e_,fullText:q_}));else c({text:q_,totalLines:e_})}return}if(V==="agent_draft"){if(!p)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)k_(J);Q({running:!0,clearSilence:!0});let h=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),e_=Number.isFinite(Y.total_lines)?Y.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")o_(h);else o_((D_)=>(D_||"")+h);else if(!V_.current)w_.current=h,c({text:h,totalLines:e_});return}if(V==="agent_thought_delta"){if(!p)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)k_(J);if(Q({running:!0,clearSilence:!0}),Y?.reset)R_.current="";if(typeof Y?.delta==="string")R_.current+=Y.delta;let h=Date.now();if(P_.current&&(!Q$.current||h-Q$.current>=100)){Q$.current=h;let q_=R_.current;t((e_)=>({text:e_?.text||"",totalLines:h4(q_),fullText:q_}))}return}if(V==="agent_thought"){if(!p)return;if(J&&G_.current&&J!==G_.current)return;if(J&&!G_.current)k_(J);Q({running:!0,clearSilence:!0});let h=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!P_.current)R_.current=h,t({text:h,totalLines:q_});return}if(V==="model_changed"){if(!p)return;if(Y?.model!==void 0)S_(Y.model);if(Y?.thinking_level!==void 0)n_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)Z0(Boolean(Y.supports_thinking));let h=$;n4(h).then((q_)=>{if(y0.current!==h)return;if(q_)y_(q_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(R8(V)){if(!p)return;if(v8(V,Y),V==="extension_ui_notify"&&typeof Y?.message==="string")H_(Y.message,null,Y?.type||"info");if(V==="extension_ui_error"&&typeof Y?.error==="string")H_("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:N_,searchQuery:J_}=B0.current;if(V==="agent_response"){if(!p)return;u2(),r0.current={post:Y,turnId:G_.current}}if(!N_&&!J_&&p&&(V==="new_post"||V==="new_reply"||V==="agent_response"))g((h)=>{if(!h)return[Y];if(h.some((q_)=>q_.id===Y.id))return h;return[...h,Y]}),L.current?.();if(V==="interaction_updated"){if(!p)return;g((h)=>{if(!h)return h;if(!h.some((q_)=>q_.id===Y.id))return h;return h.map((q_)=>q_.id===Y.id?Y:q_)})}if(V==="interaction_deleted"){if(!p)return;let h=Y?.ids||[];if(h.length){k(()=>{g((D_)=>D_?D_.filter((Y2)=>!h.includes(Y2.id)):D_)});let{currentHashtag:q_,searchQuery:e_}=B0.current;if(R0.current&&!q_&&!e_)O1.current?.({preserveScroll:!0,preserveMode:"top"})}}},[Y_,C,$,O1,Q,t0,k,v0,T0,x0,u2,k_,l,r4,a4,J2,i_,v_]);R(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=J1,V.reset=()=>{u2(),Y_(),d(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),Z_(null)},V.finalize=()=>s4(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[Y_,s4,J1,u2]),B8({handleSseEvent:J1,handleConnectionStatusChange:e8,loadPosts:X0,onWake:X9,chatJid:$}),R(()=>{if(!K2||K2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let Y=V.slice(5);a$(Y),history.replaceState(null,"",location.pathname+location.search)},[K2,a$]);let D1=__!==null;R(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:b}=B0.current||{},P=!J&&!b;if(D1){if(P)x0();i_(),_$(),e0()}else{if(P)x0();_$(),e0()}},D1?15000:60000);return()=>clearInterval(Y)},[z,D1,_$,e0,i_,x0]),R(()=>{return m8(()=>{_$(),e0(),i_()})},[_$,e0,i_]);let q9=y(()=>{J$((V)=>!V)},[]),t4=y((V)=>{if(typeof window>"u")return;let Y=String(V||"").trim();if(!Y||Y===$)return;let J=B2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),e4=y(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;let V=F_.agent_name||"",Y=F_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let b=window.prompt("Agent handle (without @)",V);if(b===null)return;try{let P=await Fj(F_.chat_jid,{displayName:J,agentName:b});await Promise.allSettled([v0(),T0()]);let p=P?.branch?.agent_name||String(b||"").trim()||V;H_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(P){let p=P instanceof Error?P.message:String(P||"Could not rename branch.");H_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[F_,v0,T0,H_]),L9=y(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;if(F_.chat_jid===(F_.root_chat_jid||F_.chat_jid)){H_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=F_.display_name||`@${F_.agent_name||F_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Hj(F_.chat_jid),await Promise.allSettled([v0(),T0()]);let b=F_.root_chat_jid||"web:default";H_("Branch pruned",`${Y} has been archived.`,"info",3000);let P=B2(window.location.href,b,{chatOnly:j});window.location.assign(P)}catch(b){let P=b instanceof Error?b.message:String(b||"Could not prune branch.");H_("Could not prune branch",P||"Could not prune branch.","warning",5000)}},[j,F_,v0,T0,H_]);R(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{S({status:"running",message:"Preparing a new chat branch…"});let Y=await A2(N);if(V)return;let J=Y?.branch,b=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let P=B2(window.location.href,b,{chatOnly:!0});window.location.replace(P)}catch(Y){if(V)return;S({status:"error",message:L1(Y)})}})(),()=>{V=!0}},[Z,N]);let O9=y(async()=>{if(typeof window>"u")return;try{let Y=(await A2($))?.branch,J=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([v0(),T0()]);let b=Y?.agent_name?`@${Y.agent_name}`:J;H_("New branch created",`Switched to ${b}.`,"info",2500);let P=B2(window.location.href,J,{chatOnly:j});window.location.assign(P)}catch(V){H_("Could not create branch",L1(V),"warning",5000)}},[j,$,v0,T0,H_]),B9=y(async()=>{if(typeof window>"u"||G)return;let V=P8($);if(!V){H_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=x8(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))H_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=M8(V);if(!Y){H_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}b8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await A2($))?.branch,P=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let N_=await R1();c0(Array.isArray(N_?.chats)?N_.chats:[])}catch{}try{let N_=await l8(F0);n0(Array.isArray(N_?.chats)?N_.chats:[])}catch{}let p=B2(window.location.href,P,{chatOnly:!0});I8(Y,p)}catch(J){C8(Y),H_("Could not open branch window",L1(J),"error",5000)}},[$,F0,G,H_]);R(()=>{if(!H0)return;if(typeof window>"u")return;let V=P$.current;if(!V)return;if(!U$.current){let Y=q2("editorWidth",null),J=s$.current||280;U$.current=Number.isFinite(Y)?Y:J}if(V.style.setProperty("--editor-width",`${U$.current}px`),!s0.current){let Y=q2("dockHeight",null);s0.current=Number.isFinite(Y)?Y:200}V.style.setProperty("--dock-height",`${s0.current}px`)},[H0]),R(()=>{if(!J0||j)return;let V=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),b0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[b0,J0,j]);let Q9=Boolean(L_&&L_===(__?.turn_id||O_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${z$.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${z$.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${A0?"":" workspace-collapsed"}${H0?" editor-open":""}${j?" chat-only":""}`} ref=${P$}>
            ${!j&&B`
                <${V8}
                    onFileSelect=${r$}
                    visible=${A0}
                    active=${A0||H0}
                    onOpenEditor=${W0}
                    onOpenTerminalTab=${w$}
                    onToggleTerminal=${J0?b0:void 0}
                    terminalVisible=${Boolean(J0&&M0)}
                />
                <button
                    class=${`workspace-toggle-tab${A0?" open":" closed"}`}
                    onClick=${q9}
                    title=${A0?"Hide workspace":"Show workspace"}
                    aria-label=${A0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>
            `}
            ${W$&&B`
                <div class="editor-pane-container">
                    ${H0&&B`
                        <${q8}
                            tabs=${S$}
                            activeId=${g0}
                            onActivate=${w0}
                            onClose=${D$}
                            onCloseOthers=${P0}
                            onCloseAll=${d0}
                            onTogglePin=${L$}
                            onTogglePreview=${O$}
                            previewTabs=${Z2}
                            onToggleDock=${J0?b0:void 0}
                            dockVisible=${J0&&M0}
                        />
                    `}
                    ${H0&&B`<div class="editor-pane-host" ref=${E$}></div>`}
                    ${H0&&g0&&Z2.has(g0)&&B`
                        <${O8}
                            getContent=${()=>k0.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>O$(g0)}
                        />
                    `}
                    ${J0&&M0&&B`<div class="dock-splitter" onMouseDown=${a8} onTouchStart=${t8}></div>`}
                    ${J0&&B`<div class=${`dock-panel${M0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${b0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${k$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${o8} onTouchStart=${r8}></div>
            `}
            <div class="container">
                ${W&&y8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F_?.display_name||F_?.agent_name?`@${F_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${F_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${S0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>t4(V.currentTarget.value)}
                                    >
                                        ${S0.map((V)=>B`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name}${V.display_name?` — ${V.display_name}`:""}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${e4}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${F_?.chat_jid&&F_.chat_jid!==(F_.root_chat_jid||F_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L9}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(X||W)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${$9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${W} · ${h0}`}</span>
                    </div>
                `}
                <${b6}
                    posts=${K2}
                    hasMore=${W_}
                    onLoadMore=${n8}
                    timelineRef=${i0}
                    onHashtagClick=${_9}
                    onMessageRef=${u$}
                    onScrollToMessage=${a$}
                    onFileRef=${z2}
                    onPostClick=${void 0}
                    onDeletePost=${z9}
                    emptyMessage=${X?`No posts with #${X}`:W?`No results for "${W}"`:void 0}
                    agents=${M_}
                    user=${i$}
                    reverse=${!(W&&!X)}
                    removingPostIds=${c$}
                    searchQuery=${W}
                />
                <${L6}
                    status=${__}
                    draft=${K_}
                    plan=${X_}
                    thought=${$_}
                    pendingRequest=${z_}
                    intent=${i}
                    turnId=${O_}
                    steerQueued=${Q9}
                    onPanelToggle=${m$}
                />
                <${K6}
                    session=${E_}
                    onClose=${H1}
                    onRetry=${G9}
                    onInject=${V9}
                />
                <${R3}
                    onPost=${()=>{X0(),H()}}
                    onFocus=${H}
                    searchMode=${M}
                    searchScope=${u}
                    onSearch=${j9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${Z9}
                    onExitSearch=${N9}
                    fileRefs=${E}
                    onRemoveFileRef=${R$}
                    onClearFileRefs=${b$}
                    onSetFileRefs=${v$}
                    messageRefs=${x}
                    onRemoveMessageRef=${U2}
                    onClearMessageRefs=${F2}
                    onSetMessageRefs=${t$}
                    onSwitchChat=${t4}
                    onRenameSession=${e4}
                    onCreateSession=${O9}
                    activeEditorPath=${j?null:g0}
                    onAttachEditorFile=${j?void 0:Q2}
                    onOpenFilePill=${z2}
                    followupQueueCount=${o}
                    followupQueueItems=${G0}
                    onInjectQueuedFollowup=${K9}
                    onRemoveQueuedFollowup=${Y9}
                    onSubmitIntercept=${W9}
                    onMessageResponse=${F1}
                    onSubmitError=${H2}
                    onPopOutChat=${G?void 0:B9}
                    isAgentActive=${Q1}
                    activeChatAgents=${N0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${t_}
                    modelUsage=${b_}
                    thinkingLevel=${A_}
                    supportsThinking=${h_}
                    contextUsage=${r_}
                    notificationsEnabled=${F$}
                    notificationPermission=${K$}
                    onToggleNotifications=${H$}
                    onModelChange=${S_}
                    onModelStateChange=${U1}
                />
                <${O6}
                    request=${z_}
                    onRespond=${()=>{Z_(null),Y0.current=null}}
                />
            </div>
        </div>
    `}function Aj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${yj} locationParams=${_} />`}A3(B`<${Aj} />`,document.getElementById("app"));

//# debugId=4ADA7533E10F5BB464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
