var T6=Object.defineProperty;var u6=(_)=>_;function m6(_,$){this[_]=u6.bind(null,$)}var R6=(_,$)=>{for(var N in $)T6(_,N,{get:$[N],enumerable:!0,configurable:!0,set:m6.bind($,N)})};var v6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,N)=>(typeof require<"u"?require:$)[N]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var E$,h_,i1,g6,E2,x1,l1,n1,o1,G3,Z3,K3,c6,J$={},y$=[],p6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,k$=Array.isArray;function B2(_,$){for(var N in $)_[N]=$[N];return _}function O3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function d1(_,$,N){var j,Z,K,z={};for(K in $)K=="key"?j=$[K]:K=="ref"?Z=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?E$.call(arguments,2):N),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return Q$(_,z,j,Z,null)}function Q$(_,$,N,j,Z){var K={type:_,props:$,key:N,ref:j,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++i1:Z,__i:-1,__u:0};return Z==null&&h_.vnode!=null&&h_.vnode(K),K}function w$(_){return _.children}function F$(_,$){this.props=_,this.context=$}function v2(_,$){if($==null)return _.__?v2(_.__,_.__i+1):null;for(var N;$<_.__k.length;$++)if((N=_.__k[$])!=null&&N.__e!=null)return N.__e;return typeof _.type=="function"?v2(_):null}function h6(_){if(_.__P&&_.__d){var $=_.__v,N=$.__e,j=[],Z=[],K=B2({},$);K.__v=$.__v+1,h_.vnode&&h_.vnode(K),X3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[N]:null,j,N==null?v2($):N,!!(32&$.__u),Z),K.__v=$.__v,K.__.__k[K.__i]=K,t1(j,K,Z),$.__e=$.__=null,K.__e!=N&&r1(K)}}function r1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),r1(_)}function S1(_){(!_.__d&&(_.__d=!0)&&E2.push(_)&&!D$.__r++||x1!=h_.debounceRendering)&&((x1=h_.debounceRendering)||l1)(D$)}function D$(){try{for(var _,$=1;E2.length;)E2.length>$&&E2.sort(n1),_=E2.shift(),$=E2.length,h6(_)}finally{E2.length=D$.__r=0}}function s1(_,$,N,j,Z,K,z,G,L,O,q){var V,H,w,f,I,R,x,F=j&&j.__k||y$,A=$.length;for(L=i6(N,$,F,L,A),V=0;V<A;V++)(w=N.__k[V])!=null&&(H=w.__i!=-1&&F[w.__i]||J$,w.__i=V,R=X3(_,w,H,Z,K,z,G,L,O,q),f=w.__e,w.ref&&H.ref!=w.ref&&(H.ref&&L3(H.ref,null,w),q.push(w.ref,w.__c||f,w)),I==null&&f!=null&&(I=f),(x=!!(4&w.__u))||H.__k===w.__k?L=a1(w,L,_,x):typeof w.type=="function"&&R!==void 0?L=R:f&&(L=f.nextSibling),w.__u&=-7);return N.__e=I,L}function i6(_,$,N,j,Z){var K,z,G,L,O,q=N.length,V=q,H=0;for(_.__k=Array(Z),K=0;K<Z;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=Q$(null,z,null,null,null):k$(z)?z=_.__k[K]=Q$(w$,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=Q$(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,L=K+H,z.__=_,z.__b=_.__b+1,G=null,(O=z.__i=l6(z,N,L,V))!=-1&&(V--,(G=N[O])&&(G.__u|=2)),G==null||G.__v==null?(O==-1&&(Z>q?H--:Z<q&&H++),typeof z.type!="function"&&(z.__u|=4)):O!=L&&(O==L-1?H--:O==L+1?H++:(O>L?H--:H++,z.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<q;K++)(G=N[K])!=null&&(2&G.__u)==0&&(G.__e==j&&(j=v2(G)),_4(G,G));return j}function a1(_,$,N,j){var Z,K;if(typeof _.type=="function"){for(Z=_.__k,K=0;Z&&K<Z.length;K++)Z[K]&&(Z[K].__=_,$=a1(Z[K],$,N,j));return $}_.__e!=$&&(j&&($&&_.type&&!$.parentNode&&($=v2(_)),N.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function l6(_,$,N,j){var Z,K,z,G=_.key,L=_.type,O=$[N],q=O!=null&&(2&O.__u)==0;if(O===null&&G==null||q&&G==O.key&&L==O.type)return N;if(j>(q?1:0)){for(Z=N-1,K=N+1;Z>=0||K<$.length;)if((O=$[z=Z>=0?Z--:K++])!=null&&(2&O.__u)==0&&G==O.key&&L==O.type)return z}return-1}function f1(_,$,N){$[0]=="-"?_.setProperty($,N==null?"":N):_[$]=N==null?"":typeof N!="number"||p6.test($)?N:N+"px"}function B$(_,$,N,j,Z){var K,z;_:if($=="style")if(typeof N=="string")_.style.cssText=N;else{if(typeof j=="string"&&(_.style.cssText=j=""),j)for($ in j)N&&$ in N||f1(_.style,$,"");if(N)for($ in N)j&&N[$]==j[$]||f1(_.style,$,N[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(o1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=N,N?j?N.u=j.u:(N.u=G3,_.addEventListener($,K?K3:Z3,K)):_.removeEventListener($,K?K3:Z3,K);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=N==null?"":N;break _}catch(G){}typeof N=="function"||(N==null||N===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&N==1?"":N))}}function I1(_){return function($){if(this.l){var N=this.l[$.type+_];if($.t==null)$.t=G3++;else if($.t<N.u)return;return N(h_.event?h_.event($):$)}}}function X3(_,$,N,j,Z,K,z,G,L,O){var q,V,H,w,f,I,R,x,F,A,C,c,a,t,l,Z_=$.type;if($.constructor!==void 0)return null;128&N.__u&&(L=!!(32&N.__u),K=[G=$.__e=N.__e]),(q=h_.__b)&&q($);_:if(typeof Z_=="function")try{if(x=$.props,F=Z_.prototype&&Z_.prototype.render,A=(q=Z_.contextType)&&j[q.__c],C=q?A?A.props.value:q.__:j,N.__c?R=(V=$.__c=N.__c).__=V.__E:(F?$.__c=V=new Z_(x,C):($.__c=V=new F$(x,C),V.constructor=Z_,V.render=o6),A&&A.sub(V),V.state||(V.state={}),V.__n=j,H=V.__d=!0,V.__h=[],V._sb=[]),F&&V.__s==null&&(V.__s=V.state),F&&Z_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=B2({},V.__s)),B2(V.__s,Z_.getDerivedStateFromProps(x,V.__s))),w=V.props,f=V.state,V.__v=$,H)F&&Z_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),F&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(F&&Z_.getDerivedStateFromProps==null&&x!==w&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(x,C),$.__v==N.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(x,V.__s,C)===!1){$.__v!=N.__v&&(V.props=x,V.state=V.__s,V.__d=!1),$.__e=N.__e,$.__k=N.__k,$.__k.some(function(i){i&&(i.__=$)}),y$.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(x,V.__s,C),F&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(w,f,I)})}if(V.context=C,V.props=x,V.__P=_,V.__e=!1,c=h_.__r,a=0,F)V.state=V.__s,V.__d=!1,c&&c($),q=V.render(V.props,V.state,V.context),y$.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,c&&c($),q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++a<25);V.state=V.__s,V.getChildContext!=null&&(j=B2(B2({},j),V.getChildContext())),F&&!H&&V.getSnapshotBeforeUpdate!=null&&(I=V.getSnapshotBeforeUpdate(w,f)),t=q!=null&&q.type===w$&&q.key==null?e1(q.props.children):q,G=s1(_,k$(t)?t:[t],$,N,j,Z,K,z,G,L,O),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),R&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;K[K.indexOf(G)]=null,$.__e=G}else{for(l=K.length;l--;)O3(K[l]);z3($)}else $.__e=N.__e,$.__k=N.__k,i.then||z3($);h_.__e(i,$,N)}else K==null&&$.__v==N.__v?($.__k=N.__k,$.__e=N.__e):G=$.__e=n6(N.__e,$,N,j,Z,K,z,L,O);return(q=h_.diffed)&&q($),128&$.__u?void 0:G}function z3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(z3))}function t1(_,$,N){for(var j=0;j<N.length;j++)L3(N[j],N[++j],N[++j]);h_.__c&&h_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(K){K.call(Z)})}catch(K){h_.__e(K,Z.__v)}})}function e1(_){return typeof _!="object"||_==null||_.__b>0?_:k$(_)?_.map(e1):B2({},_)}function n6(_,$,N,j,Z,K,z,G,L){var O,q,V,H,w,f,I,R=N.props||J$,x=$.props,F=$.type;if(F=="svg"?Z="http://www.w3.org/2000/svg":F=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),K!=null){for(O=0;O<K.length;O++)if((w=K[O])&&"setAttribute"in w==!!F&&(F?w.localName==F:w.nodeType==3)){_=w,K[O]=null;break}}if(_==null){if(F==null)return document.createTextNode(x);_=document.createElementNS(Z,F,x.is&&x),G&&(h_.__m&&h_.__m($,K),G=!1),K=null}if(F==null)R===x||G&&_.data==x||(_.data=x);else{if(K=K&&E$.call(_.childNodes),!G&&K!=null)for(R={},O=0;O<_.attributes.length;O++)R[(w=_.attributes[O]).name]=w.value;for(O in R)w=R[O],O=="dangerouslySetInnerHTML"?V=w:O=="children"||(O in x)||O=="value"&&("defaultValue"in x)||O=="checked"&&("defaultChecked"in x)||B$(_,O,null,w,Z);for(O in x)w=x[O],O=="children"?H=w:O=="dangerouslySetInnerHTML"?q=w:O=="value"?f=w:O=="checked"?I=w:G&&typeof w!="function"||R[O]===w||B$(_,O,w,R[O],Z);if(q)G||V&&(q.__html==V.__html||q.__html==_.innerHTML)||(_.innerHTML=q.__html),$.__k=[];else if(V&&(_.innerHTML=""),s1($.type=="template"?_.content:_,k$(H)?H:[H],$,N,j,F=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,K,z,K?K[0]:N.__k&&v2(N,0),G,L),K!=null)for(O=K.length;O--;)O3(K[O]);G||(O="value",F=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[O]||F=="progress"&&!f||F=="option"&&f!=R[O])&&B$(_,O,f,R[O],Z),O="checked",I!=null&&I!=_[O]&&B$(_,O,I,R[O],Z))}return _}function L3(_,$,N){try{if(typeof _=="function"){var j=typeof _.__u=="function";j&&_.__u(),j&&$==null||(_.__u=_($))}else _.current=$}catch(Z){h_.__e(Z,N)}}function _4(_,$,N){var j,Z;if(h_.unmount&&h_.unmount(_),(j=_.ref)&&(j.current&&j.current!=_.__e||L3(j,null,$)),(j=_.__c)!=null){if(j.componentWillUnmount)try{j.componentWillUnmount()}catch(K){h_.__e(K,$)}j.base=j.__P=null}if(j=_.__k)for(Z=0;Z<j.length;Z++)j[Z]&&_4(j[Z],$,N||typeof _.type!="function");N||O3(_.__e),_.__c=_.__=_.__e=void 0}function o6(_,$,N){return this.constructor(_,N)}function $4(_,$,N){var j,Z,K,z;$==document&&($=document.documentElement),h_.__&&h_.__(_,$),Z=(j=typeof N=="function")?null:N&&N.__k||$.__k,K=[],z=[],X3($,_=(!j&&N||$).__k=d1(w$,null,[_]),Z||J$,J$,$.namespaceURI,!j&&N?[N]:Z?null:$.firstChild?E$.call($.childNodes):null,K,!j&&N?N:Z?Z.__e:$.firstChild,j,z),t1(K,_,z)}E$=y$.slice,h_={__e:function(_,$,N,j){for(var Z,K,z;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((K=Z.constructor)&&K.getDerivedStateFromError!=null&&(Z.setState(K.getDerivedStateFromError(_)),z=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,j||{}),z=Z.__d),z)return Z.__E=Z}catch(G){_=G}throw _}},i1=0,g6=function(_){return _!=null&&_.constructor===void 0},F$.prototype.setState=function(_,$){var N;N=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B2({},this.state),typeof _=="function"&&(_=_(B2({},N),this.props)),_&&B2(N,_),_!=null&&this.__v&&($&&this._sb.push($),S1(this))},F$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),S1(this))},F$.prototype.render=w$,E2=[],l1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n1=function(_,$){return _.__v.__b-$.__v.__b},D$.__r=0,o1=/(PointerCapture)$|Capture$/i,G3=0,Z3=I1(!1),K3=I1(!0),c6=0;var t2,z0,j3,T1,e2=0,N4=[],K0=h_,u1=K0.__b,m1=K0.__r,R1=K0.diffed,v1=K0.__c,g1=K0.unmount,c1=K0.__;function W3(_,$){K0.__h&&K0.__h(z0,_,e2||$),e2=0;var N=z0.__H||(z0.__H={__:[],__h:[]});return _>=N.__.length&&N.__.push({}),N.__[_]}function T(_){return e2=1,d6(Z4,_)}function d6(_,$,N){var j=W3(t2++,2);if(j.t=_,!j.__c&&(j.__=[N?N($):Z4(void 0,$),function(G){var L=j.__N?j.__N[0]:j.__[0],O=j.t(L,G);L!==O&&(j.__N=[O,j.__[1]],j.__c.setState({}))}],j.__c=z0,!z0.__f)){var Z=function(G,L,O){if(!j.__c.__H)return!0;var q=j.__c.__H.__.filter(function(H){return H.__c});if(q.every(function(H){return!H.__N}))return!K||K.call(this,G,L,O);var V=j.__c.props!==G;return q.some(function(H){if(H.__N){var w=H.__[0];H.__=H.__N,H.__N=void 0,w!==H.__[0]&&(V=!0)}}),K&&K.call(this,G,L,O)||V};z0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=z0;z0.componentWillUpdate=function(G,L,O){if(this.__e){var q=K;K=void 0,Z(G,L,O),K=q}z&&z.call(this,G,L,O)},z0.shouldComponentUpdate=Z}return j.__N||j.__}function m(_,$){var N=W3(t2++,3);!K0.__s&&j4(N.__H,$)&&(N.__=_,N.u=$,z0.__H.__h.push(N))}function y(_){return e2=5,i_(function(){return{current:_}},[])}function i_(_,$){var N=W3(t2++,7);return j4(N.__H,$)&&(N.__=_(),N.__H=$,N.__h=_),N.__}function P(_,$){return e2=8,i_(function(){return _},$)}function r6(){for(var _;_=N4.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(H$),$.__h.some(Y3),$.__h=[]}catch(N){$.__h=[],K0.__e(N,_.__v)}}}K0.__b=function(_){z0=null,u1&&u1(_)},K0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),c1&&c1(_,$)},K0.__r=function(_){m1&&m1(_),t2=0;var $=(z0=_.__c).__H;$&&(j3===z0?($.__h=[],z0.__h=[],$.__.some(function(N){N.__N&&(N.__=N.__N),N.u=N.__N=void 0})):($.__h.some(H$),$.__h.some(Y3),$.__h=[],t2=0)),j3=z0},K0.diffed=function(_){R1&&R1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(N4.push($)!==1&&T1===K0.requestAnimationFrame||((T1=K0.requestAnimationFrame)||s6)(r6)),$.__H.__.some(function(N){N.u&&(N.__H=N.u),N.u=void 0})),j3=z0=null},K0.__c=function(_,$){$.some(function(N){try{N.__h.some(H$),N.__h=N.__h.filter(function(j){return!j.__||Y3(j)})}catch(j){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],K0.__e(j,N.__v)}}),v1&&v1(_,$)},K0.unmount=function(_){g1&&g1(_);var $,N=_.__c;N&&N.__H&&(N.__H.__.some(function(j){try{H$(j)}catch(Z){$=Z}}),N.__H=void 0,$&&K0.__e($,N.__v))};var p1=typeof requestAnimationFrame=="function";function s6(_){var $,N=function(){clearTimeout(j),p1&&cancelAnimationFrame($),setTimeout(_)},j=setTimeout(N,35);p1&&($=requestAnimationFrame(N))}function H$(_){var $=z0,N=_.__c;typeof N=="function"&&(_.__c=void 0,N()),z0=$}function Y3(_){var $=z0;_.__c=_.__(),z0=$}function j4(_,$){return!_||_.length!==$.length||$.some(function(N,j){return N!==_[j]})}function Z4(_,$){return typeof $=="function"?$(_):$}var K4=function(_,$,N,j){var Z;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],G=$[K]?($[0]|=z?1:2,N[$[K++]]):$[++K];z===3?j[0]=G:z===4?j[1]=Object.assign(j[1]||{},G):z===5?(j[1]=j[1]||{})[$[++K]]=G:z===6?j[1][$[++K]]+=G+"":z?(Z=_.apply(G,K4(_,G,N,["",null])),j.push(Z),G[0]?$[0]|=2:($[K-2]=0,$[K]=Z)):j.push(G)}return j},h1=new Map;function a6(_){var $=h1.get(this);return $||($=new Map,h1.set(this,$)),($=K4(this,$.get(_)||($.set(_,$=function(N){for(var j,Z,K=1,z="",G="",L=[0],O=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,z):K===3&&(H||z)?(L.push(3,H,z),K=2):K===2&&z==="..."&&H?L.push(4,H,0):K===2&&z&&!H?L.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(L.push(K,0,z,Z),K=6),H&&(L.push(K,H,0,Z),K=6)),z=""},q=0;q<N.length;q++){q&&(K===1&&O(),O(q));for(var V=0;V<N[q].length;V++)j=N[q][V],K===1?j==="<"?(O(),L=[L],K=3):z+=j:K===4?z==="--"&&j===">"?(K=1,z=""):z=j+z[0]:G?j===G?G="":z+=j:j==='"'||j==="'"?G=j:j===">"?(O(),K=1):K&&(j==="="?(K=5,Z=z,z=""):j==="/"&&(K<5||N[q][V+1]===">")?(O(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):j===" "||j==="\t"||j===`
`||j==="\r"?(O(),K=2):z+=j),K===3&&z==="!--"&&(K=4,L=L[0])}return O(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=a6.bind(d1);var d0={};R6(d0,{uploadWorkspaceFile:()=>P$,uploadMedia:()=>J3,updateWorkspaceFile:()=>L5,submitAdaptiveCardAction:()=>y3,streamSidePrompt:()=>O5,steerAgentQueueItem:()=>G5,setWorkspaceVisibility:()=>j$,setAgentThoughtVisibility:()=>k3,sendPeerAgentMessage:()=>Z5,sendAgentMessage:()=>g2,searchPosts:()=>q3,respondToAgentRequest:()=>A$,renameWorkspaceFile:()=>x3,renameChatBranch:()=>N5,removeAgentQueueItem:()=>Y5,pruneChatBranch:()=>j5,moveWorkspaceEntry:()=>S3,getWorkspaceTree:()=>N$,getWorkspaceRawUrl:()=>M$,getWorkspaceFile:()=>P3,getWorkspaceDownloadUrl:()=>I3,getWorkspaceBranch:()=>X5,getTimeline:()=>_$,getThumbnailUrl:()=>w3,getThread:()=>U3,getPostsByHashtag:()=>V3,getMediaUrl:()=>j2,getMediaText:()=>b3,getMediaInfo:()=>c2,getMediaBlob:()=>A3,getChatBranches:()=>$5,getAgents:()=>F3,getAgentThought:()=>E3,getAgentStatus:()=>H3,getAgentQueueState:()=>z5,getAgentModels:()=>$$,getAgentContext:()=>K5,getActiveChatAgents:()=>Q3,forkChatBranch:()=>b$,deleteWorkspaceFile:()=>f3,deletePost:()=>B3,createWorkspaceFile:()=>C3,createReply:()=>_5,createPost:()=>e6,attachWorkspaceFile:()=>M3,addToWhitelist:()=>D3,SSEClient:()=>C$});async function f_(_,$={}){let N=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!N.ok){let j=await N.json().catch(()=>({error:"Unknown error"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}function z4(_){let $=String(_||"").split(`
`),N="message",j=[];for(let K of $)if(K.startsWith("event:"))N=K.slice(6).trim()||"message";else if(K.startsWith("data:"))j.push(K.slice(5).trim());let Z=j.join(`
`);if(!Z)return null;try{return{event:N,data:JSON.parse(Z)}}catch{return{event:N,data:Z}}}async function t6(_,$){if(!_.body)throw Error("Missing event stream body");let N=_.body.getReader(),j=new TextDecoder,Z="";while(!0){let{value:z,done:G}=await N.read();if(G)break;Z+=j.decode(z,{stream:!0});let L=Z.split(`

`);Z=L.pop()||"";for(let O of L){let q=z4(O);if(q)$(q.event,q.data)}}Z+=j.decode();let K=z4(Z);if(K)$(K.event,K.data)}async function _$(_=10,$=null,N=null){let j=`/timeline?limit=${_}`;if($)j+=`&before=${$}`;if(N)j+=`&chat_jid=${encodeURIComponent(N)}`;return f_(j)}async function V3(_,$=50,N=0,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${N}${Z}`)}async function q3(_,$=50,N=0,j=null,Z="current",K=null){let z=j?`&chat_jid=${encodeURIComponent(j)}`:"",G=Z?`&scope=${encodeURIComponent(Z)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${N}${z}${G}${L}`)}async function U3(_,$=null){let N=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${N}`)}async function e6(_,$=[],N=null){let j=N?`?chat_jid=${encodeURIComponent(N)}`:"";return f_(`/post${j}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function _5(_,$,N=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:N})})}async function B3(_,$=!1,N=null){let j=N?`&chat_jid=${encodeURIComponent(N)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${j}`;return f_(Z,{method:"DELETE"})}async function g2(_,$,N=null,j=[],Z=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:N,media_ids:j,mode:Z})})}async function Q3(){return f_("/agent/active-chats")}async function $5(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function b$(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function N5(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function j5(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Z5(_,$,N,j="auto",Z={}){let K={source_chat_jid:_,content:N,mode:j,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function F3(){return f_("/agent/roster")}async function H3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function K5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function z5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function Y5(_,$=null){let N=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function G5(_,$=null){let N=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function $$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J3(_){let $=new FormData;$.append("file",_);let N=await fetch("/media/upload",{method:"POST",body:$});if(!N.ok){let j=await N.json().catch(()=>({error:"Upload failed"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function A$(_,$,N=null){let j=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:N||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y3(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let N=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(N.error||`HTTP ${$.status}`)}return $.json()}async function O5(_,$={}){let N=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!N.ok){let K=await N.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${N.status}`)}let j=null,Z=null;if(await t6(N,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")j=z;else if(K==="side_prompt_error")Z=z}),Z){let K=Error(Z?.error||"Side prompt failed");throw K.payload=Z,K}return j}async function D3(_,$){let N=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(j.error||`HTTP ${N.status}`)}return N.json()}async function E3(_,$="thought"){let N=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(N)}async function k3(_,$,N){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(N)})})}function j2(_){return`/media/${_}`}function w3(_){return`/media/${_}/thumbnail`}async function c2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function b3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function A3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function N$(_="",$=2,N=!1){let j=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${N?"1":"0"}`;return f_(j)}async function X5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function P3(_,$=20000,N=null){let j=N?`&mode=${encodeURIComponent(N)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${j}`;return f_(Z)}async function L5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function M3(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function P$(_,$="",N={}){let j=new FormData;j.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(N.overwrite)Z.set("overwrite","1");let K=Z.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:j});if(!G.ok){let L=await G.json().catch(()=>({error:"Upload failed"})),O=Error(L.error||`HTTP ${G.status}`);throw O.status=G.status,O.code=L.code,O}return G.json()}async function C3(_,$,N=""){let j=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:N})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Create failed"})),K=Error(Z.error||`HTTP ${j.status}`);throw K.status=j.status,K.code=Z.code,K}return j.json()}async function x3(_,$){let N=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Rename failed"})),Z=Error(j.error||`HTTP ${N.status}`);throw Z.status=N.status,Z.code=j.code,Z}return N.json()}async function S3(_,$){let N=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!N.ok){let j=await N.json().catch(()=>({error:"Move failed"})),Z=Error(j.error||`HTTP ${N.status}`);throw Z.status=N.status,Z.code=j.code,Z}return N.json()}async function f3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function j$(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function M$(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function I3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class C${constructor(_,$,N={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof N?.chatJid==="string"&&N.chatJid.trim()?N.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(N)=>{this.onEvent($,JSON.parse(N.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,N=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,N+$),this.reconnectAttempts=0;let j=Math.max(this.cooldownUntil-N,0),Z=Math.max(this.reconnectDelay,j);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function r0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function r_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function p2(_,$=!1){let N=r0(_);if(N===null)return $;return N==="true"}function h2(_,$=null){let N=r0(_);if(N===null)return $;let j=parseInt(N,10);return Number.isFinite(j)?j:$}function x$(_){return String(_||"").trim().toLowerCase()}function T3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return x$($[1]||"")}function Y4(_){let $=new Set,N=[];for(let j of Array.isArray(_)?_:[]){let Z=x$(j?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),N.push(j)}return N}function G4(_,$,N={}){let j=T3($);if(j==null)return[];let Z=typeof N?.currentChatJid==="string"?N.currentChatJid:null;return Y4(_).filter((K)=>{if(Z&&K?.chat_jid===Z)return!1;return x$(K?.agent_name).startsWith(j)})}function u3(_){let $=x$(_);return $?`@${$} `:""}function O4(_,$={}){let N=typeof $?.currentChatJid==="string"?$.currentChatJid:null,j=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Y4(_).filter((Z)=>!(N&&Z?.chat_jid===N)).slice(0,j)}function X4({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:N=!1}={}){let j=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(j)||j<=0)return!1;if(Z<=0)return!1;let K=460+Z*68+(N?40:0);return j>=K}function Q2({prefix:_="file",label:$,title:N,onRemove:j,onClick:Z,removeTitle:K="Remove",icon:z="file"}){let G=`${_}-file-pill`,L=`${_}-file-name`,O=`${_}-file-remove`,q=z==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${G} title=${N||$} onClick=${Z}>
      ${q}
      <span class=${L}>${$}</span>
      ${j&&U`
        <button
          class=${O}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),j()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var W5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function V5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,j=_.contextWindow,Z=N!=null?`Context: ${L4(N)} / ${L4(j)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,G=$/100*z,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${Z}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function L4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function W4({onPost:_,onFocus:$,searchMode:N,searchScope:j="current",onSearch:Z,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:G,fileRefs:L=[],onRemoveFileRef:O,onClearFileRefs:q,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:w,activeModel:f=null,modelUsage:I=null,thinkingLevel:R=null,supportsThinking:x=!1,contextUsage:F=null,notificationsEnabled:A=!1,notificationPermission:C="default",onToggleNotifications:c,onModelChange:a,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:Z_,onOpenFilePill:i,followupQueueItems:Q_=[],onInjectQueuedFollowup:U_,onRemoveQueuedFollowup:r,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:N_,isAgentActive:G_=!1,activeChatAgents:L_=[],currentChatJid:J_="web:default"}){let[j_,D_]=T(""),[k_,s_]=T(""),[E_,m_]=T([]),[C_,l_]=T(!1),[h,X_]=T([]),[W_,V_]=T(0),[y_,w_]=T(!1),[R_,F_]=T([]),[M_,S_]=T(0),[Y0,n_]=T(!1),[e_,B0]=T(!1),[x_,_0]=T(!1),[Q0,D0]=T([]),[F0,G0]=T(!1),[E0,o_]=T(0),I_=y(null),M0=y(null),c_=y(null),d_=y(null),k0=y(null),B_=y(null),M=y(0),e=200,b_=(B)=>{let S=new Set,n=[];for(let Y_ of B||[]){if(typeof Y_!=="string")continue;let A_=Y_.trim();if(!A_||S.has(A_))continue;S.add(A_),n.push(A_)}return n},v_=()=>{let B=r0("piclaw_compose_history");if(!B)return[];try{let S=JSON.parse(B);if(!Array.isArray(S))return[];return b_(S)}catch{return[]}},w0=(B)=>{r_("piclaw_compose_history",JSON.stringify(B))},a0=y(v_()),$0=y(-1),O0=y(""),W0=j_.trim()||E_.length>0||L.length>0||V.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),C0=typeof window<"u"&&typeof Notification<"u",v0=typeof window<"u"?Boolean(window.isSecureContext):!1,n2=C0&&v0&&C!=="denied",w2=C==="granted"&&A,c0=w2?"Disable notifications":"Enable notifications",N0=O4(L_,{currentChatJid:J_,limit:4}),K2=N0.length>0,X0=!N&&X4({footerWidth:E0,visibleAgentCount:N0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),j0=f||"",T_=x&&R?` (${R})`:"",T0=T_.trim()?`${R}`:"",p0=typeof I?.hint_short==="string"?I.hint_short.trim():"",z2=[T0||null,p0||null].filter(Boolean).join(" • "),J2=[j0?`Current model: ${j0}${T_}`:null,I?.plan?`Plan: ${I.plan}`:null,p0||null,I?.primary?.reset_description||null,I?.secondary?.reset_description||null].filter(Boolean),b2=e_?"Switching model…":J2.join(" • ")||`Current model: ${j0}${T_} (tap to open model picker)`,H0=(B)=>{if(!B||typeof B!=="object")return;let S=B.model??B.current;if(typeof t==="function")t({model:S??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(S&&typeof a==="function")a(S)},A2=(B)=>{let S=B||I_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},o2=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){w_(!1),X_([]);return}let S=B.toLowerCase().split(" ")[0];if(S.length<1){w_(!1),X_([]);return}let n=W5.filter((Y_)=>Y_.name.startsWith(S)||Y_.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===S))n_(!1),F_([]),X_(n),V_(0),w_(!0);else w_(!1),X_([])},y2=(B)=>{let S=j_,n=S.indexOf(" "),Y_=n>=0?S.slice(n):"",A_=B.name+Y_;D_(A_),w_(!1),X_([]),requestAnimationFrame(()=>{let t_=I_.current;if(!t_)return;let P_=A_.length;t_.selectionStart=P_,t_.selectionEnd=P_,t_.focus()})},u2=(B)=>{if(T3(B)==null){n_(!1),F_([]);return}let S=G4(L_,B,{currentChatJid:J_});if(S.length>0&&!(S.length===1&&u3(S[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))w_(!1),X_([]),F_(S),S_(0),n_(!0);else n_(!1),F_([])},V2=(B)=>{let S=u3(B?.agent_name);if(!S)return;D_(S),n_(!1),F_([]),requestAnimationFrame(()=>{let n=I_.current;if(!n)return;let Y_=S.length;n.selectionStart=Y_,n.selectionEnd=Y_,n.focus()})},a_=(B)=>{if(N)s_(B);else D_(B),o2(B),u2(B);requestAnimationFrame(()=>A2())},P2=(B)=>{let S=N?k_:j_,n=S&&!S.endsWith(`
`)?`
`:"",Y_=`${S}${n}${B}`.trimStart();a_(Y_)},x0=(B)=>{let S=B?.command?.model_label;if(S)return S;let n=B?.command?.message;if(typeof n==="string"){let Y_=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},S0=async(B)=>{if(N||e_)return;B0(!0);try{let S=await g2("default",B,null,[],null,J_),n=x0(S);H0({model:n??f??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let Y_=await $$(J_);if(Y_)H0(Y_)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{B0(!1)}},Y2=async()=>{await S0("/cycle-model")},L$=async(B)=>{if(!B||e_)return;if(await S0(`/model ${B}`))_0(!1)},q0=(B)=>{B.preventDefault(),B.stopPropagation(),_0((S)=>!S)},M2=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return G_?"queue":null},G2=async(B,S,n={})=>{let{includeMedia:Y_=!0,includeFileRefs:A_=!0,includeMessageRefs:t_=!0,clearAfterSubmit:P_=!0,recordHistory:Z0=!0}=n||{},i0=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:j_,D2=typeof i0==="string"?i0:"";if(!D2.trim()&&(Y_?E_.length===0:!0)&&(A_?L.length===0:!0)&&(t_?V.length===0:!0))return;w_(!1),X_([]),n_(!1),F_([]);let u0=Y_?[...E_]:[],X2=A_?[...L]:[],L2=t_?[...V]:[],l0=D2.trim();if(Z0&&l0){let W2=a0.current,J0=b_(W2.filter((f2)=>f2!==l0));if(J0.push(l0),J0.length>200)J0.splice(0,J0.length-200);a0.current=J0,w0(J0),$0.current=-1,O0.current=""}if(P_)D_(""),m_([]),q?.(),w?.();(async()=>{try{if(await __?.({content:l0,submitMode:S,fileRefs:X2,messageRefs:L2,mediaFiles:u0})){_?.();return}let J0=[];for(let u of u0){let d=await J3(u);J0.push(d.id)}let f2=X2.length?`Files:
${X2.map((u)=>`- ${u}`).join(`
`)}`:"",W=L2.length?`Referenced messages:
${L2.map((u)=>`- message:${u}`).join(`
`)}`:"",Q=J0.length?`Images:
${J0.map((u,d)=>{let o=u0[d]?.name||`image-${d+1}`;return`- attachment:${u} (${o})`}).join(`
`)}`:"",E=[l0,f2,W,Q].filter(Boolean).join(`

`),D=await g2("default",E,null,J0,M2(S),J_);if(K_?.(D),D?.command){H0({model:D.command.model_label??f??null,thinking_level:D.command.thinking_level,supports_thinking:D.command.supports_thinking});try{let u=await $$(J_);if(u)H0(u)}catch{}}_?.()}catch(W2){console.error("Failed to post:",W2)}})()},O2=(B)=>{U_?.(B)},C2=(B)=>{if(B.isComposing)return;if(N&&B.key==="Escape"){B.preventDefault(),s_(""),G?.();return}if(Y0&&R_.length>0){let S=I_.current?.value??(N?k_:j_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))n_(!1),F_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),S_((n)=>(n+1)%R_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),S_((n)=>(n-1+R_.length)%R_.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),V2(R_[M_]);return}if(B.key==="Escape"){B.preventDefault(),n_(!1),F_([]);return}}}if(y_&&h.length>0){let S=I_.current?.value??(N?k_:j_);if(!String(S||"").startsWith("/"))w_(!1),X_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),V_((n)=>(n+1)%h.length);return}if(B.key==="ArrowUp"){B.preventDefault(),V_((n)=>(n-1+h.length)%h.length);return}if(B.key==="Tab"){B.preventDefault(),y2(h[W_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(I_.current?.value??(N?k_:j_)).includes(" ")){B.preventDefault();let A_=h[W_];w_(!1),X_([]),G2(A_.name);return}}if(B.key==="Escape"){B.preventDefault(),w_(!1),X_([]);return}}}if(!N&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let S=I_.current;if(!S)return;let n=S.value||"",Y_=S.selectionStart===0&&S.selectionEnd===0,A_=S.selectionStart===n.length&&S.selectionEnd===n.length;if(B.key==="ArrowUp"&&Y_||B.key==="ArrowDown"&&A_){let t_=a0.current;if(!t_.length)return;B.preventDefault();let P_=$0.current;if(B.key==="ArrowUp"){if(P_===-1)O0.current=n,P_=t_.length-1;else if(P_>0)P_-=1;$0.current=P_,a_(t_[P_]||"")}else{if(P_===-1)return;if(P_<t_.length-1)P_+=1,$0.current=P_,a_(t_[P_]||"");else $0.current=-1,a_(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let Z0=I_.current;if(!Z0)return;let i0=Z0.value.length;Z0.selectionStart=i0,Z0.selectionEnd=i0});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let S=I_.current?.value??(N?k_:j_);if(N){if(S.trim())Z?.(S.trim(),j)}else G2(S,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let S=I_.current?.value??(N?k_:j_);if(N){if(S.trim())Z?.(S.trim(),j)}else G2(S)}},h0=(B)=>{let S=Array.from(B||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!S.length)return;m_((n)=>[...n,...S])},e0=(B)=>{h0(B.target.files),B.target.value=""},f0=(B)=>{if(N)return;B.preventDefault(),B.stopPropagation(),M.current+=1,l_(!0)},_2=(B)=>{if(N)return;if(B.preventDefault(),B.stopPropagation(),M.current=Math.max(0,M.current-1),M.current===0)l_(!1)},x2=(B)=>{if(N)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";l_(!0)},S2=(B)=>{if(N)return;B.preventDefault(),B.stopPropagation(),M.current=0,l_(!1),h0(B.dataTransfer?.files||[])},$2=(B)=>{if(N)return;let S=B.clipboardData?.items;if(!S||!S.length)return;let n=[];for(let Y_ of S){if(Y_.kind!=="file")continue;let A_=Y_.getAsFile?.();if(A_)n.push(A_)}if(n.length>0)B.preventDefault(),h0(n)},q2=(B)=>{m_((S)=>S.filter((n,Y_)=>Y_!==B))},d2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:S,longitude:n,accuracy:Y_}=B.coords,A_=`${S.toFixed(5)}, ${n.toFixed(5)}`,t_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",P_=`https://maps.google.com/?q=${S},${n}`,Z0=`Location: ${A_}${t_} ${P_}`;P2(Z0)},(B)=>{let S=B?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!x_)return;G0(!0),$$(J_).then((B)=>{let S=Array.isArray(B?.models)?B.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];D0(S),H0(B)}).catch((B)=>{console.warn("Failed to load model list:",B),D0([])}).finally(()=>{G0(!1)})},[x_,f]),m(()=>{if(N)_0(!1),w_(!1),X_([]),n_(!1),F_([])},[N]),m(()=>{if(!x_)return;let B=(S)=>{let n=d_.current,Y_=k0.current,A_=S.target;if(n&&n.contains(A_))return;if(Y_&&Y_.contains(A_))return;_0(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[x_]),m(()=>{let B=()=>{let Y_=B_.current?.clientWidth||0;o_((A_)=>A_===Y_?A_:Y_)};B();let S=B_.current,n=null;if(S&&typeof ResizeObserver<"u")n=new ResizeObserver(()=>B()),n.observe(S);if(typeof window<"u")window.addEventListener("resize",B);return()=>{if(n?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B)}},[N,f,N0.length,F?.percent]);let b0=(B)=>{let S=B.target.value;A2(B.target),a_(S)};return m(()=>{requestAnimationFrame(()=>A2())},[j_,k_,N]),m(()=>{if(N)return;u2(j_)},[L_,J_,j_,N]),U`
        <div class="compose-box">
            ${!N&&Q_.length>0&&U`
                <div class="compose-queue-stack">
                    ${Q_.map((B)=>{let S=typeof B?.content==="string"?B.content:"";if(!S.trim())return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${S}>
                                    ${S}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>O2(B)}
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
                                    onClick=${()=>r?.(B)}
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
                class=${`compose-input-wrapper${C_?" drag-active":""}`}
                onDragEnter=${f0}
                onDragOver=${x2}
                onDragLeave=${_2}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${(L.length>0||E_.length>0||V.length>0)&&U`
                        <div class="compose-file-refs">
                            ${V.map((B)=>{return U`
                                    <${Q2}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(B)}
                                    />
                                `})}
                            ${L.map((B)=>{let S=B.split("/").pop()||B;return U`
                                    <${Q2}
                                        prefix="compose"
                                        label=${S}
                                        title=${B}
                                        onClick=${()=>i?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(B)}
                                    />
                                `})}
                            ${E_.map((B,S)=>{let n=B?.name||`image-${S+1}`;return U`
                                    <${Q2}
                                        key=${n+S}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q2(S)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!N&&typeof N_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>N_?.()}
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
                        ref=${I_}
                        placeholder=${N?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${N?k_:j_}
                        onInput=${b0}
                        onKeyDown=${C2}
                        onPaste=${$2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&R_.length>0&&U`
                        <div class="slash-autocomplete" ref=${c_}>
                            ${R_.map((B,S)=>U`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${S===M_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),V2(B)}}
                                    onMouseEnter=${()=>S_(S)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.display_name||B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y_&&h.length>0&&U`
                        <div class="slash-autocomplete" ref=${M0}>
                            ${h.map((B,S)=>U`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${S===W_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),y2(B)}}
                                    onMouseEnter=${()=>V_(S)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x_&&!N&&U`
                        <div class="compose-model-popup" ref=${d_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Q0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Q0.map((B)=>U`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===B?" active":""}`}
                                        onClick=${()=>{L$(B)}}
                                        disabled=${e_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{Y2()}}
                                    disabled=${e_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${B_}>
                    ${!N&&f&&U`
                    <div class="compose-meta-row">
                        ${!N&&f&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b2}
                                    aria-label="Open model picker"
                                    onClick=${q0}
                                    disabled=${e_}
                                >
                                    ${e_?"Switching…":j0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e_&&z2&&U`
                                        <span class="compose-model-usage-hint" title=${b2}>
                                            ${z2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${N?"search-mode":""}">
                    ${X0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${N0.map((B)=>U`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>V2(B)}
                                    title=${`${B.display_name||B.chat_jid||"Active agent"} — insert @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!N&&F&&F.percent!=null&&U`
                        <${V5} usage=${F} />
                    `}
                    ${N&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${j}
                                onChange=${(B)=>K?.(B.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${N?G:z}
                        title=${N?"Close search":"Search"}
                    >
                        ${N?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${t0&&!N&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${d2}
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
                    ${n2&&!N&&U`
                        <button
                            class=${`icon-btn notification-btn${w2?" active":""}`}
                            onClick=${c}
                            title=${c0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!N&&U`
                        ${l&&Z_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Z_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${L.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${e0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{G2()}}
                            disabled=${!W0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var q4="piclaw_theme",v3="piclaw_tint",I$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},q5={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V4={default:{label:"Default",mode:"auto",light:I$,dark:q5},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},U5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],T$={theme:"default",tint:null},U4="light",m3=!1;function B4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function i2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let N=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(N)&&!/^[0-9a-fA-F]{6}$/.test(N))return null;let j=N.length===3?N.split("").map((K)=>K+K).join(""):N,Z=parseInt(j,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${j.toLowerCase()}`}}function B5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let N=document.createElement("div");if(N.style.color="",N.style.color=$,!N.style.color)return null;let j=N.style.color;try{if(document.body)N.style.display="none",document.body.appendChild(N),j=getComputedStyle(N).color||N.style.color,document.body.removeChild(N)}catch{}let Z=j.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let K=parseInt(Z[1],10),z=parseInt(Z[2],10),G=parseInt(Z[3],10);if(![K,z,G].every((O)=>Number.isFinite(O)))return null;let L=`#${[K,z,G].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:G,hex:L}}function Q4(_){return i2(_)||B5(_)}function Z$(_,$,N){let j=Math.round(_.r+($.r-_.r)*N),Z=Math.round(_.g+($.g-_.g)*N),K=Math.round(_.b+($.b-_.b)*N);return`rgb(${j} ${Z} ${K})`}function R3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function F4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g3(_){return V4[_]||V4.default}function Q5(_){return _.mode==="auto"?F4():_.mode}function F5(_,$){let N=g3(_);if($==="dark"&&N.dark)return N.dark;if($==="light"&&N.light)return N.light;return N.dark||N.light||I$}function H5(_,$,N){let j=Q4($);if(!j)return _;let Z=i2(_.bgPrimary),K=i2(_.bgSecondary),z=i2(_.bgHover),G=i2(_.borderColor);if(!Z||!K||!z||!G)return _;let O=i2(N==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Z$(Z,j,0.08),bgSecondary:Z$(K,j,0.12),bgHover:Z$(z,j,0.16),borderColor:Z$(G,j,0.08),accent:j.hex,accentHover:O?Z$(j,O,0.18):j.hex}}function J5(_,$){if(typeof document>"u")return;let N=document.documentElement,j=_.accent,Z=Q4(j),K=Z?R3(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=Z?R3(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Z?R3(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":j,"--accent-hover":_.accentHover||j,"--accent-soft":z,"--accent-soft-strong":G,"--danger-color":_.danger||I$.danger,"--success-color":_.success||I$.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(L).forEach(([O,q])=>{if(q)N.style.setProperty(O,q)})}function y5(){if(typeof document>"u")return;let _=document.documentElement;U5.forEach(($)=>_.style.removeProperty($))}function S$(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function D5(_,$){if(typeof document>"u")return;let N=S$("theme-color");if(N&&_)N.setAttribute("content",_);let j=S$("msapplication-TileColor");if(j&&_)j.setAttribute("content",_);let Z=S$("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let K=S$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function E5(){if(typeof window>"u")return;let _={...T$,mode:U4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let N=B4(_?.theme||"default"),j=_?.tint?String(_.tint).trim():null,Z=g3(N),K=Q5(Z),z=F5(N,K);T$={theme:N,tint:j},U4=K;let G=document.documentElement;G.dataset.theme=K,G.dataset.colorTheme=N,G.dataset.tint=j?String(j):"",G.style.colorScheme=K;let L=z;if(N==="default"&&j)L=H5(z,j,K);if(N==="default"&&!j)y5();else J5(L,K);if(D5(L.bgPrimary,K),E5(),$.persist!==!1)if(r_(q4,N),j)r_(v3,j);else r_(v3,"")}function f$(){if(g3(T$.theme).mode!=="auto")return;c3(T$,{persist:!1})}function H4(){if(typeof window>"u")return()=>{};let _=B4(r0(q4)||"default"),$=r0(v3),N=$?$.trim():null;if(c3({theme:_,tint:N},{persist:!1}),window.matchMedia&&!m3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",f$);else if(j.addListener)j.addListener(f$);return m3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",f$);else if(j.removeListener)j.removeListener(f$);m3=!1}}return()=>{}}function J4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let N=_.theme??_.name??_.colorTheme,j=_.tint??null;c3({theme:N||"default",tint:j},{persist:!0})}function y4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return F4()}var u$=/#(\w+)/g,k5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),w5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),b5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),A5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},P5=new Set(["http:","https:","mailto:",""]);function D4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function I2(_,$={}){if(!_)return null;let N=String(_).trim();if(!N)return null;if(N.startsWith("#")||N.startsWith("/"))return N;if(N.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(N))return N;return null}if(N.startsWith("blob:"))return N;try{let j=new URL(N,typeof window<"u"?window.location.origin:"http://localhost");if(!P5.has(j.protocol))return null;return j.href}catch{return null}}function E4(_,$={}){if(!_)return"";let N=new DOMParser().parseFromString(_,"text/html"),j=[],Z=N.createTreeWalker(N.body,NodeFilter.SHOW_ELEMENT),K;while(K=Z.nextNode())j.push(K);for(let z of j){let G=z.tagName.toLowerCase();if(!w5.has(G)){let O=z.parentNode;if(!O)continue;while(z.firstChild)O.insertBefore(z.firstChild,z);O.removeChild(z);continue}let L=A5[G]||new Set;for(let O of Array.from(z.attributes)){let q=O.name.toLowerCase(),V=O.value;if(q.startsWith("on")){z.removeAttribute(O.name);continue}if(q.startsWith("data-")||q.startsWith("aria-"))continue;if(L.has(q)||b5.has(q)){if(q==="href"){let H=I2(V);if(!H)z.removeAttribute(O.name);else if(z.setAttribute(O.name,H),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(q==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,w=I2(H,{allowDataImage:G==="img"});if(!w)z.removeAttribute(O.name);else z.setAttribute(O.name,w)}continue}z.removeAttribute(O.name)}}return N.body.innerHTML}function k4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m$(_,$=2){if(!_)return _;let N=_;for(let j=0;j<$;j+=1){let Z=k4(N);if(Z===N)break;N=Z}return N}function M5(_){if(!_)return{text:"",blocks:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Z=[],K=!1,z=[];for(let G of N){if(!K&&G.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&G.trim().match(/^```\s*$/)){let L=j.length;j.push(z.join(`
`)),Z.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,z=[];continue}if(K)z.push(G);else Z.push(G)}if(K)Z.push("```mermaid"),Z.push(...z);return{text:Z.join(`
`),blocks:j}}function C5(_){if(!_)return _;return m$(_,5)}function x5(_){let $=new TextEncoder().encode(String(_||"")),N="";for(let j of $)N+=String.fromCharCode(j);return btoa(N)}function S5(_){let $=atob(String(_||"")),N=new Uint8Array($.length);for(let j=0;j<$.length;j+=1)N[j]=$.charCodeAt(j);return new TextDecoder().decode(N)}function f5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(N,j)=>{let Z=Number(j),K=$[Z]??"",z=C5(K);return`<div class="mermaid-container" data-mermaid="${x5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function w4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,N)=>{if(N.includes(`
`))return`
\`\`\`
${N}
\`\`\`
`;return`\`${N}\``})}function b4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,N)=>{let j=N.trim(),Z=j.startsWith("/"),K=Z?j.slice(1).trim():j,L=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!L||!k5.has(L))return $;if(L==="br")return Z?"":"<br>";if(Z)return`</${L}>`;return`<${L}>`})}function A4(_){if(!_)return _;let $=(N)=>N.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(N,j)=>`<pre><code>${$(j)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(N,j)=>`<code>${$(j)}</code>`)}function P4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=N.nextNode()){if(!Z.nodeValue)continue;let K=j(Z.nodeValue);if(K!==Z.nodeValue)Z.nodeValue=K}return $.body.innerHTML}function I5(_){if(!window.katex)return _;let $=(z)=>k4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),N=(z)=>{let G=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let q=G.length;return G.push(O),`@@CODE_BLOCK_${q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let q=G.length;return G.push(O),`@@CODE_INLINE_${q}@@`}),{html:L,blocks:G}},j=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,O)=>{let q=Number(O);return G[q]??""})},Z=N(_),K=Z.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,L)=>{try{let O=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${G}${O}`}catch(O){return`<span class="math-error" title="${D4(O.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,L)=>{if(/\s$/.test(L))return z;try{let O=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${G}${O}`}catch(O){return`${G}<span class="math-error" title="${D4(O.message)}">$${L}$</span>`}}),j(K,Z.blocks)}function T5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),N=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),j=[],Z;while(Z=N.nextNode())j.push(Z);for(let K of j){let z=K.nodeValue;if(!z)continue;if(u$.lastIndex=0,!u$.test(z))continue;u$.lastIndex=0;let G=K.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let L=z.split(u$);if(L.length<=1)continue;let O=$.createDocumentFragment();L.forEach((q,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",q),H.textContent=`#${q}`,O.appendChild(H)}else O.appendChild($.createTextNode(q))}),K.parentNode?.replaceChild(O,K)}return $.body.innerHTML}function u5(_){if(!_)return _;let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=[],Z=!1;for(let K of N){if(!Z&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,j.push("$$");continue}if(Z&&K.trim().match(/^```\s*$/)){Z=!1,j.push("$$");continue}j.push(K)}return j.join(`
`)}function R0(_,$,N={}){if(!_)return"";let j=u5(_),{text:Z,blocks:K}=M5(j),z=m$(Z,2),L=w4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=b4(L),q=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return q=A4(q),q=P4(q),q=I5(q),q=T5(q),q=f5(q,K),q=E4(q,N),q}function R$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),N=m$($,2),Z=w4(N).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=b4(Z),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=A4(z),z=P4(z),z=E4(z),z}async function F2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:N}=window.beautifulMermaid,Z=y4()==="dark"?N["tokyo-night"]:N["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let G=z.dataset.mermaid,L=S5(G||""),O=m$(L,2),q=await $(O,{...Z,transparent:!0});z.innerHTML=q,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function M4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let N=$.slice(4).trim();if(!N)return{type:"help"};if(N==="clear"||N==="close")return{type:"clear"};return{type:"ask",question:N}}function C4(_){return String(_||"").trim()||"web:default"}function x4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function S4(_){if(!_)return!1;return _.status!=="running"}function f4(_){let $=String(_?.question||"").trim(),N=String(_?.answer||"").trim();if(!$&&!N)return"";return["BTW side conversation",$?`Question: ${$}`:null,N?`Answer:
${N}`:null].filter(Boolean).join(`

`)}function I4({session:_,onClose:$,onInject:N,onRetry:j}){let Z=y(null),K=y(null),z=_?.thinking?R$(_.thinking):"",G=_?.answer?R0(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(Z.current&&z)F2(Z.current).catch(()=>{})},[z]),m(()=>{if(K.current&&G)F2(K.current).catch(()=>{})},[G]),!_)return null;let L=_.status==="running",O=Boolean(String(_.answer||"").trim()),q=Boolean(String(_.thinking||"").trim()),V=x4(_),H=S4(_),w=!L&&O,f=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${f}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${q&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>j?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>N?.()} disabled=${!w}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var T4="PiClaw";function p3(_,$){let N=_||"PiClaw",j=N.charAt(0).toUpperCase(),Z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=j.charCodeAt(0)%Z.length,z=Z[K],G=N.trim().toLowerCase(),L=typeof $==="string"?$.trim():"",q=(L?L:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:j,color:z,image:q}}function u4(_,$){if(!_)return"PiClaw";let N=$[_]?.name||_;return N?N.charAt(0).toUpperCase()+N.slice(1):"PiClaw"}function m4(_,$){if(!_)return null;let N=$[_]||{};return N.avatar_url||N.avatarUrl||N.avatar||null}function R4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",G=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(G||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],N=String(_),j=0;for(let K=0;K<N.length;K+=1)j=(j*31+N.charCodeAt(K))%2147483647;let Z=Math.abs(j)%$.length;return $[Z]}function m5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let N=Date.parse($);return Number.isFinite(N)?N:null}function v$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function R5(_){let $=Math.max(0,Math.floor(_/1000)),N=$%60,j=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(j).padStart(2,"0")}:${String(N).padStart(2,"0")}`;return`${j}:${String(N).padStart(2,"0")}`}function v4(_,$=Date.now()){let N=m5(_);if(N===null)return null;return R5(Math.max(0,$-N))}function g4({status:_,draft:$,plan:N,thought:j,pendingRequest:Z,intent:K,turnId:z,steerQueued:G,onPanelToggle:L}){let V=(h)=>{if(!h)return{text:"",totalLines:0,fullText:""};if(typeof h==="string"){let y_=h,w_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:w_,fullText:y_}}let X_=h.text||"",W_=h.fullText||h.full_text||X_,V_=Number.isFinite(h.totalLines)?h.totalLines:W_?W_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:X_,totalLines:V_,fullText:W_}},H=160,w=(h)=>{if(!h)return 1;return Math.max(1,Math.ceil(h.length/160))},f=(h,X_,W_)=>{let V_=(h||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!V_)return{text:"",omitted:0,totalLines:Number.isFinite(W_)?W_:0,visibleLines:0};let y_=V_.split(`
`),w_=y_.length>X_?y_.slice(0,X_).join(`
`):V_,R_=Number.isFinite(W_)?W_:y_.reduce((S_,Y0)=>S_+w(Y0),0),F_=w_?w_.split(`
`).reduce((S_,Y0)=>S_+w(Y0),0):0,M_=Math.max(R_-F_,0);return{text:w_,omitted:M_,totalLines:R_,visibleLines:F_}},I=V(N),R=V(j),x=V($),F=Boolean(I.text)||I.totalLines>0,A=Boolean(R.text)||R.totalLines>0,C=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!C&&!F&&!A&&!Z&&!K)return null;let[c,a]=T(new Set),[t,l]=T(()=>Date.now()),Z_=(h)=>a((X_)=>{let W_=new Set(X_),V_=!W_.has(h);if(V_)W_.add(h);else W_.delete(h);if(typeof L==="function")L(h,V_);return W_});m(()=>{a(new Set)},[z]);let i=v$(_);m(()=>{if(!i)return;l(Date.now());let h=setInterval(()=>l(Date.now()),1000);return()=>clearInterval(h)},[i,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,U_=R4(Q_),r=G?"turn-dot turn-dot-queued":"turn-dot",__=(h)=>h,K_=Boolean(_?.last_activity||_?.lastActivity),N_=(h)=>h==="warning"?"#f59e0b":h==="error"?"var(--danger-color)":h==="success"?"var(--success-color)":U_,G_=K?.kind||"info",L_=N_(G_),J_=N_(_?.kind||(i?"warning":"info")),j_="",D_=_?.title,k_=_?.status;if(_?.type==="plan")j_=D_?`Planning: ${D_}`:"Planning...";else if(_?.type==="tool_call")j_=D_?`Running: ${D_}`:"Running tool...";else if(_?.type==="tool_status")j_=D_?`${D_}: ${k_||"Working..."}`:k_||"Working...";else if(_?.type==="error")j_=D_||"Agent error";else j_=D_||k_||"Working...";if(K_)j_="Last activity just now";let s_=({panelTitle:h,text:X_,fullText:W_,totalLines:V_,maxLines:y_,titleClass:w_,panelKey:R_})=>{let F_=c.has(R_),M_=W_||X_||"",S_=typeof y_==="number",Y0=F_&&S_,n_=S_?f(M_,y_,V_):{text:M_||"",omitted:0,totalLines:Number.isFinite(V_)?V_:0};if(!M_&&!(Number.isFinite(n_.totalLines)&&n_.totalLines>0))return null;let e_=`agent-thinking-body${S_?" agent-thinking-body-collapsible":""}`,B0=S_?`--agent-thinking-collapsed-lines: ${y_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${F_?"true":"false"}
                data-collapsible=${S_?"true":"false"}
                style=${U_?`--turn-color: ${U_};`:""}
            >
                <div class="agent-thinking-title ${w_||""}">
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${h}
                    ${Y0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${h} panel`}
                            onClick=${()=>Z_(R_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${e_}
                    style=${B0}
                    dangerouslySetInnerHTML=${{__html:R$(M_)}}
                />
                ${!F_&&n_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(R_)}>
                        ▸ ${n_.omitted} more lines
                    </button>
                `}
                ${F_&&n_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(R_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},E_=Z?.tool_call?.title,m_=E_?`Awaiting approval: ${E_}`:"Awaiting approval",C_=i?v4(_,t):null,l_=(h,X_,W_=null)=>U`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${X_?`--turn-color: ${X_};`:""}
            title=${h?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${X_&&U`<span class=${r} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${h.title}</span>
                ${W_&&U`<span class="agent-status-elapsed">${W_}</span>`}
            </div>
            ${h.detail&&U`<div class="agent-thinking-body">${h.detail}</div>`}
        </div>
    `;return U`
        <div class="agent-status-panel">
            ${K&&l_(K,L_)}
            ${_?.type==="intent"&&l_(_,J_,C_)}
            ${Z&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${m_}</span>
                </div>
            `}
            ${F&&s_({panelTitle:__("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${A&&s_({panelTitle:__("Thoughts"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&s_({panelTitle:__("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${j_}</span>
                </div>
            `}
        </div>
    `}function c4({request:_,onRespond:$}){if(!_)return null;let{request_id:N,tool_call:j,options:Z,chat_jid:K}=_,z=j?.title||"Agent Request",G=j?.kind||"other",L=j?.rawInput||{},O=L.command||L.commands&&L.commands[0]||null,q=L.diff||null,V=L.fileName||L.path||null,H=j?.description||L.description||L.explanation||null,f=(Array.isArray(j?.locations)?j.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),I=Array.from(new Set([V,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:N,tool_call:j,options:Z});let R=async(A)=>{try{await A$(N,A,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},x=async()=>{try{await D3(z,`Auto-approved: ${z}`),await A$(N,"approved",K||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},F=Z&&Z.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(H||O||q||I.length>0)&&U`
                    <div class="agent-request-body">
                        ${H&&U`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${I.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${I.map((A,C)=>U`<li key=${C}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${O&&U`
                            <pre class="agent-request-command">${O}</pre>
                        `}
                        ${q&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?Z.map((A)=>U`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function p4({status:_}){if(_==="connected")return null;return U`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function h4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let j=new Date-$,Z=j/1000,K=86400000;if(j<K){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(j<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${O}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function K$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function s0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var v5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),g5=new Set(["text/markdown"]);function z$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(v5.has($)||$.startsWith("text/"))return"text";return"unsupported"}function i4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return g5.has($)}function l4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function c5(_){let N=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!N)return null;let j=N[1].length===3?N[1].split("").map((Z)=>`${Z}${Z}`).join(""):N[1];return{r:parseInt(j.slice(0,2),16),g:parseInt(j.slice(2,4),16),b:parseInt(j.slice(4,6),16)}}function p5(_){let N=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!N)return null;let j=Number(N[1]),Z=Number(N[2]),K=Number(N[3]);if(![j,Z,K].every((z)=>Number.isFinite(z)))return null;return{r:j,g:Z,b:K}}function n4(_){return c5(_)||p5(_)}function g$(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},N=$(_.r),j=$(_.g),Z=$(_.b);return 0.2126*N+0.7152*j+0.0722*Z}function h5(_,$){let N=Math.max(g$(_),g$($)),j=Math.min(g$(_),g$($));return(N+0.05)/(j+0.05)}function i5(_,$,N="#ffffff"){let j=n4(_);if(!j)return N;let Z=N,K=-1;for(let z of $){let G=n4(z);if(!G)continue;let L=h5(j,G);if(L>K)Z=z,K=L}return Z}function h3(){let _=getComputedStyle(document.documentElement),$=(f,I)=>{for(let R of f){let x=_.getPropertyValue(R).trim();if(x)return x}return I},N=$(["--text-primary","--color-text"],"#0f1419"),j=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),O=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),w=i5(G,[N,Z],N);return{fg:N,fgMuted:j,bgPrimary:Z,bg:K,bgEmphasis:z,accent:G,good:L,warning:O,attention:q,border:V,fontFamily:H,buttonTextColor:w}}function o4(){let{fg:_,fgMuted:$,bg:N,bgEmphasis:j,accent:Z,good:K,warning:z,attention:G,border:L,fontFamily:O}=h3();return{fontFamily:O,containerStyles:{default:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var l5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),d4=!1,c$=null,r4=!1;function i3(_){_.querySelector(".adaptive-card-notice")?.remove()}function n5(_,$,N="error"){i3(_);let j=document.createElement("div");j.className=`adaptive-card-notice adaptive-card-notice-${N}`,j.textContent=$,_.appendChild(j)}function o5(_,$=(N)=>R0(N,null)){let N=typeof _==="string"?_:String(_??"");if(!N.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(N),didProcess:!0}}function d5(_=($)=>R0($,null)){return($,N)=>{try{let j=o5($,_);N.outputHtml=j.outputHtml,N.didProcess=j.didProcess}catch(j){console.error("[adaptive-card] Failed to process markdown:",j),N.outputHtml=String($??""),N.didProcess=!1}}}function r5(_){if(r4||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=d5(),r4=!0}async function s5(){if(d4)return;if(c$)return c$;return c$=new Promise((_,$)=>{let N=document.createElement("script");N.src="/static/js/vendor/adaptivecards.min.js",N.onload=()=>{d4=!0,_()},N.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(N)}),c$}function a5(){return globalThis.AdaptiveCards}function t5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function e5(_){return l5.has(_)}function n3(_){if(!Array.isArray(_))return[];return _.filter(t5)}function _9(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,N=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",j=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:N,title:j,data:K,url:Z,raw:_}}function l3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([N,j])=>`${N}: ${l3(j)}`).filter((N)=>!N.endsWith(": ")).join(", ");return String(_).trim()}function $9(_,$,N){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return N?.valueOn??"true";return N?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l3($);return typeof $==="string"?$:String($)}function N9(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let N=$,j=(Z)=>{if(Array.isArray(Z))return Z.map((G)=>j(G));if(!Z||typeof Z!=="object")return Z;let z={...Z};if(typeof z.id==="string"&&z.id in N&&String(z.type||"").startsWith("Input."))z.value=$9(z.type,N[z.id],z);for(let[G,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[G]=j(L);return z};return j(_)}function j9(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let N=$;try{N.setAttribute("aria-disabled","true")}catch{}try{N.setAttribute("tabindex","-1")}catch{}if("disabled"in N)try{N.disabled=!0}catch{}if("readOnly"in N)try{N.readOnly=!0}catch{}}}function Z9(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function K9(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",N=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,j=N&&typeof N.title==="string"?N.title.trim():"",Z=Z9(_.completed_at||N?.submitted_at),K=[j||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function s4(_,$,N){if(!e5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await s5()}catch(j){return console.error("[adaptive-card] Failed to load SDK:",j),!1}try{let j=a5();r5(j);let Z=new j.AdaptiveCard,K=h3();Z.hostConfig=new j.HostConfig(o4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:N9($.payload,z);Z.parse(G),Z.onExecuteAction=(q)=>{let V=_9(q);if(N?.onAction)i3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(N.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let w=H instanceof Error?H.message:String(H||"Action failed.");n5(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=Z.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let O=K9($);if(O){_.classList.add("adaptive-card-finished");let q=document.createElement("div");q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=O.label,q.appendChild(V),O.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=O.detail,q.appendChild(H)}_.appendChild(q)}if(i3(_),_.appendChild(L),O)j9(L);return!0}catch(j){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,j),!1}}function l2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,N])=>`${$}: ${l2(N)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function z9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function o3(_){if(!Array.isArray(_))return[];return _.filter(z9)}function a4(_){let $=String(_.title||_.card_id||"card").trim()||"card",N=_.data;if(N==null)return`Card submission: ${$}`;if(typeof N==="string"||typeof N==="number"||typeof N==="boolean"){let j=l2(N);return j?`Card submission: ${$} — ${j}`:`Card submission: ${$}`}if(typeof N==="object"){let j=Object.entries(N).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:l2(K)})).filter((Z)=>Z.value).slice(0,4).map(({key:Z,value:K})=>`${Z}: ${K}`);return j.length>0?`Card submission: ${$} — ${j.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function t4(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",N=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:l2(K)})).filter((Z)=>Z.value).slice(0,4):[],j=N.length>0?N.map(({key:Z,value:K})=>`${Z}: ${K}`).join(", "):l2(_.data)||null;return{title:$,summary:j,fields:N,submittedAt:_.submitted_at}}function Y9(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?s0($):null},{label:"Added",value:_?.created_at?T2(_.created_at):null}].filter((j)=>j.value)}function e4({mediaId:_,info:$,onClose:N}){let j=$?.filename||`attachment-${_}`,Z=i_(()=>z$($?.content_type),[$?.content_type]),K=l4(Z),z=i_(()=>i4($?.content_type),[$?.content_type]),[G,L]=T(Z==="text"||Z==="pdf"),[O,q]=T(""),[V,H]=T(null),[w,f]=T(null),I=y(null),R=i_(()=>Y9($),[$]),x=i_(()=>{if(!z||!O)return"";return R0(O)},[z,O]);return m(()=>{let F=(A)=>{if(A.key==="Escape")N()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[N]),m(()=>{if(!I.current||!x)return;F2(I.current);return},[x]),m(()=>{let F=!1,A=null;async function C(){if(Z==="text"){L(!0),f(null);try{let c=await b3(_);if(!F)q(c)}catch{if(!F)f("Failed to load text preview.")}finally{if(!F)L(!1)}return}if(Z==="pdf"){L(!0),f(null);try{let c=await A3(_);if(A=URL.createObjectURL(c),!F)H(A)}catch{if(!F)f("Failed to load PDF preview.")}finally{if(!F)L(!1)}return}L(!1)}return C(),()=>{if(F=!0,A)URL.revokeObjectURL(A)}},[_,Z]),U`
        <div class="image-modal attachment-preview-modal" onClick=${N}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${j}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${j2(_)}
                            download=${j}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${N}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&w&&U`<div class="attachment-preview-state">${w}</div>`}
                    ${!G&&!w&&Z==="image"&&U`
                        <img class="attachment-preview-image" src=${j2(_)} alt=${j} />
                    `}
                    ${!G&&!w&&Z==="pdf"&&V&&U`
                        <iframe class="attachment-preview-frame" src=${V} title=${j}></iframe>
                    `}
                    ${!G&&!w&&Z==="text"&&z&&U`
                        <div
                            ref=${I}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:x}}
                        />
                    `}
                    ${!G&&!w&&Z==="text"&&!z&&U`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!G&&!w&&Z==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((F)=>U`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function _8({src:_,onClose:$}){return m(()=>{let N=(j)=>{if(j.key==="Escape")$()};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function G9({mediaId:_,onPreview:$}){let[N,j]=T(null);if(m(()=>{c2(_).then(j).catch(()=>{})},[_]),!N)return null;let Z=N.filename||"file",K=N.metadata?.size,z=K?s0(K):"",L=z$(N.content_type)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${j2(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${z&&U`<span class="file-size">${z}</span>`}
                        ${N.content_type&&U`<span class="file-size">${N.content_type}</span>`}
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
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:N})}}
            >
                ${L}
            </button>
        </div>
    `}function O9({attachment:_,onPreview:$}){let N=Number(_?.id),[j,Z]=T(null);m(()=>{if(!Number.isFinite(N))return;c2(N).then(Z).catch(()=>{});return},[N]);let K=j?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(N)?j2(N):null,L=z$(j?.content_type)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${K}>
            ${z?U`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${Q2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:U`
                    <${Q2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(N)&&j&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:N,info:j})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function p$({annotations:_}){if(!_)return null;let{audience:$,priority:N,lastModified:j}=_,Z=j?T2(j):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof N==="number"&&U`
                <span class="content-annotation">Priority: ${N}</span>
            `}
            ${Z&&U`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function X9({block:_}){let $=_.title||_.name||_.uri,N=_.description,j=_.size?s0(_.size):"",Z=_.mime_type||"",K=W9(Z),z=I2(_.uri);return U`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${N&&U`<div class="resource-link-description">${N}</div>`}
                <div class="resource-link-meta">
                    ${Z&&U`<span>${Z}</span>`}
                    ${j&&U`<span>${j}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function L9({block:_}){let[$,N]=T(!1),j=_.uri||"Embedded resource",Z=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),N(!$)}}>
                ${$?"▼":"▶"} ${j}
            </button>
            ${$&&U`
                ${Z&&U`<pre class="resource-embed-content">${Z}</pre>`}
                ${K&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&U`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),O=URL.createObjectURL(L),q=document.createElement("a");q.href=O,q.download=j.split("/").pop()||"resource",q.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function W9(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function V9({preview:_}){let $=I2(_.url),N=I2(_.image,{allowDataImage:!0}),j=N?`background-image: url('${N}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${N?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function q9(_,$){return typeof _==="string"?_:""}var U9=1800,B9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Q9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,F9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function H9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let N=document.createElement("textarea");N.value=$,N.setAttribute("readonly",""),N.style.position="fixed",N.style.opacity="0",N.style.pointerEvents="none",document.body.appendChild(N),N.select(),N.setSelectionRange(0,N.value.length);let j=document.execCommand("copy");return document.body.removeChild(N),j}catch{return!1}}function J9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let N=new Map,j=[],Z=(K,z)=>{let G=z||"idle";if(K.dataset.copyState=G,G==="success")K.innerHTML=Q9,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(G==="error")K.innerHTML=F9,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=B9,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Z(G,"idle"),z.appendChild(G);let L=async(O)=>{O.preventDefault(),O.stopPropagation();let V=K.querySelector("code")?.textContent||"",H=await H9(V);Z(G,H?"success":"error");let w=N.get(G);if(w)clearTimeout(w);let f=setTimeout(()=>{Z(G,"idle"),N.delete(G)},U9);N.set(G,f)};G.addEventListener("click",L),j.push(()=>{G.removeEventListener("click",L);let O=N.get(G);if(O)clearTimeout(O);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{j.forEach((K)=>K())}}function y9(_){if(!_)return{content:_,fileRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Files:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,fileRefs:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O))Z.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let z=N.slice(0,j),G=N.slice(K),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:Z}}function D9(_){if(!_)return{content:_,messageRefs:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Referenced messages:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,messageRefs:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O)){let V=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!O.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let z=N.slice(0,j),G=N.slice(K),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:Z}}function E9(_){if(!_)return{content:_,attachments:[]};let N=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),j=-1;for(let O=0;O<N.length;O+=1)if(N[O].trim()==="Images:"&&N[O+1]&&/^\s*-\s+/.test(N[O+1])){j=O;break}if(j===-1)return{content:_,attachments:[]};let Z=[],K=j+1;for(;K<N.length;K+=1){let O=N[K];if(/^\s*-\s+/.test(O)){let q=O.replace(/^\s*-\s+/,"").trim(),V=q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],w=(V[2]||"").trim()||H;Z.push({id:H,label:w,raw:q})}else Z.push({id:null,label:q,raw:q})}else if(!O.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let z=N.slice(0,j),G=N.slice(K),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:Z}}function k9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w9(_,$){if(!_||!$)return _;let N=String($).trim().split(/\s+/).filter(Boolean);if(N.length===0)return _;let j=N.map(k9).sort((q,V)=>V.length-q.length),Z=new RegExp(`(${j.join("|")})`,"gi"),K=new RegExp(`^(${j.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],O;while(O=G.nextNode())L.push(O);for(let q of L){let V=q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let H=q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let w=V.split(Z).filter((I)=>I!=="");if(w.length===0)continue;let f=z.createDocumentFragment();for(let I of w)if(K.test(I)){let R=z.createElement("mark");R.className="search-highlight-term",R.textContent=I,f.appendChild(R)}else f.appendChild(z.createTextNode(I));q.parentNode.replaceChild(f,q)}return z.body.innerHTML}function $8({post:_,onClick:$,onHashtagClick:N,onMessageRef:j,onScrollToMessage:Z,agentName:K,agentAvatarUrl:z,userName:G,userAvatarUrl:L,userAvatarBackground:O,onDelete:q,isThreadReply:V,isThreadPrev:H,isThreadNext:w,isRemoving:f,highlightQuery:I,onFileRef:R}){let[x,F]=T(null),A=y(null),C=_.data,c=C.type==="agent_response",a=G||"You",t=c?K||T4:a,l=c?p3(K,z):p3(a,L),Z_=typeof O==="string"?O.trim().toLowerCase():"",i=!c&&l.image&&(Z_==="clear"||Z_==="transparent"),Q_=c&&Boolean(l.image),U_=`background-color: ${i||Q_?"transparent":l.color}`,r=C.content_meta,__=Boolean(r?.truncated),K_=Boolean(r?.preview),N_=__&&!K_,G_=__?{originalLength:Number.isFinite(r?.original_length)?r.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,L_=C.content_blocks||[],J_=C.media_ids||[],j_=q9(C.content,C.link_previews),{content:D_,fileRefs:k_}=y9(j_),{content:s_,messageRefs:E_}=D9(D_),{content:m_,attachments:C_}=E9(s_);j_=m_;let l_=n3(L_),h=o3(L_),X_=l_.length===1&&typeof l_[0]?.fallback_text==="string"?l_[0].fallback_text.trim():"",W_=h.length===1?a4(h[0]).trim():"",V_=Boolean(X_)&&j_?.trim()===X_||Boolean(W_)&&j_?.trim()===W_,y_=Boolean(j_)&&!N_&&!V_,w_=typeof I==="string"?I.trim():"",R_=i_(()=>{if(!j_||V_)return"";let M=R0(j_,N);return w_?w9(M,w_):M},[j_,V_,w_]),F_=(M,e)=>{M.stopPropagation(),F(j2(e))},[M_,S_]=T(null),Y0=(M)=>{S_(M)},n_=(M)=>{M.stopPropagation(),q?.(_)},e_=(M,e)=>{let b_=new Set;if(!M||e.length===0)return{content:M,usedIds:b_};return{content:M.replace(/attachment:([^\s)"']+)/g,(w0,a0,$0,O0)=>{let W0=a0.replace(/^\/+/,""),C0=e.find((g0)=>g0.name&&g0.name.toLowerCase()===W0.toLowerCase()&&!b_.has(g0.id))||e.find((g0)=>!b_.has(g0.id));if(!C0)return w0;if(b_.add(C0.id),O0.slice(Math.max(0,$0-2),$0)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:b_}},B0=[],x_=[],_0=[],Q0=[],D0=[],F0=[],G0=0;if(L_.length>0)L_.forEach((M)=>{if(M?.type==="text"&&M.annotations)F0.push(M.annotations);if(M?.type==="resource_link")Q0.push(M);else if(M?.type==="resource")D0.push(M);else if(M?.type==="file"){let e=J_[G0++];if(e)x_.push(e),_0.push({id:e,name:M?.name||M?.filename||M?.title})}else if(M?.type==="image"||!M?.type){let e=J_[G0++];if(e){let b_=typeof M?.mime_type==="string"?M.mime_type:void 0;B0.push({id:e,annotations:M?.annotations,mimeType:b_}),_0.push({id:e,name:M?.name||M?.filename||M?.title})}}});else if(J_.length>0)J_.forEach((M)=>{B0.push({id:M,annotations:null}),_0.push({id:M,name:null})});if(C_.length>0)C_.forEach((M)=>{if(!M?.id)return;let e=_0.find((b_)=>String(b_.id)===String(M.id));if(e&&!e.name)e.name=M.label});let{content:E0,usedIds:o_}=e_(j_,_0);j_=E0;let I_=B0.filter(({id:M})=>!o_.has(M)),M0=x_.filter((M)=>!o_.has(M)),c_=C_.length>0?C_.map((M,e)=>({id:M.id||`attachment-${e+1}`,label:M.label||`attachment-${e+1}`})):_0.map((M,e)=>({id:M.id,label:M.name||`attachment-${e+1}`})),d_=i_(()=>n3(L_),[L_]),k0=i_(()=>o3(L_),[L_]);m(()=>{if(!A.current)return;return F2(A.current),J9(A.current)},[R_]);let B_=y(null);return m(()=>{if(!B_.current||d_.length===0)return;let M=B_.current;M.innerHTML="";for(let e of d_){let b_=document.createElement("div");M.appendChild(b_),s4(b_,e,{onAction:async(v_)=>{if(v_.type==="Action.OpenUrl"){let w0=I2(v_.url||"");if(!w0)throw Error("Invalid URL");window.open(w0,"_blank","noopener,noreferrer");return}if(v_.type==="Action.Submit"){await y3({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:v_.type,title:v_.title||"",data:v_.data}});return}console.warn("[post] unsupported adaptive card action:",v_.type,v_)}}).catch((v_)=>{console.error("[post] adaptive card render error:",v_),b_.textContent=e.fallback_text||"Card failed to render."})}},[d_,C.thread_id,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${w?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${l.image?"has-image":""}" style=${U_}>
                ${l.image?U`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${n_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(M)=>{if(M.preventDefault(),M.stopPropagation(),j)j(_.id)}}>${h4(_.timestamp)}</a>
                </div>
                ${N_&&G_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${K$(G_.originalLength)} chars
                            ${G_.maxLength?U` • Display limit: ${K$(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${K$(G_.maxLength)} of ${K$(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(k_.length>0||E_.length>0||c_.length>0)&&U`
                    <div class="post-file-refs">
                        ${E_.map((M)=>{let e=(b_)=>{if(b_.preventDefault(),b_.stopPropagation(),Z)Z(M,_.chat_jid||null);else{let v_=document.getElementById("post-"+M);if(v_)v_.scrollIntoView({behavior:"smooth",block:"center"}),v_.classList.add("post-highlight"),setTimeout(()=>v_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${M}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Q2}
                                        prefix="post"
                                        label=${"msg:"+M}
                                        title=${"Message "+M}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${k_.map((M)=>{let e=M.split("/").pop()||M;return U`
                                <${Q2}
                                    prefix="post"
                                    label=${e}
                                    title=${M}
                                    onClick=${()=>R?.(M)}
                                />
                            `})}
                        ${c_.map((M)=>U`
                            <${O9}
                                key=${M.id}
                                attachment=${M}
                                onPreview=${Y0}
                            />
                        `)}
                    </div>
                `}
                ${y_&&U`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:R_}}
                        onClick=${(M)=>{if(M.target.classList.contains("hashtag")){M.preventDefault(),M.stopPropagation();let e=M.target.dataset.hashtag;if(e)N?.(e)}else if(M.target.tagName==="IMG")M.preventDefault(),M.stopPropagation(),F(M.target.src)}}
                    />
                `}
                ${d_.length>0&&U`
                    <div ref=${B_} class="post-adaptive-cards" />
                `}
                ${k0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${k0.map((M,e)=>{let b_=t4(M);return U`
                                <div key=${`${M.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${b_.title}</span>
                                    </div>
                                    ${b_.summary&&U`
                                        <div class="adaptive-card-submission-summary">${b_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T2(b_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&U`
                    ${F0.map((M,e)=>U`
                        <${p$} key=${e} annotations=${M} />
                    `)}
                `}
                ${I_.length>0&&U`
                    <div class="media-preview">
                        ${I_.map(({id:M,mimeType:e})=>{let v_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?j2(M):w3(M);return U`
                                <img 
                                    key=${M} 
                                    src=${v_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(w0)=>F_(w0,M)}
                                />
                            `})}
                    </div>
                `}
                ${I_.length>0&&U`
                    ${I_.map(({annotations:M},e)=>U`
                        ${M&&U`<${p$} key=${e} annotations=${M} />`}
                    `)}
                `}
                ${M0.length>0&&U`
                    <div class="file-attachments">
                        ${M0.map((M)=>U`
                            <${G9} key=${M} mediaId=${M} onPreview=${Y0} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&U`
                    <div class="resource-links">
                        ${Q0.map((M,e)=>U`
                            <div key=${e}>
                                <${X9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D0.length>0&&U`
                    <div class="resource-embeds">
                        ${D0.map((M,e)=>U`
                            <div key=${e}>
                                <${L9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${C.link_previews.map((M,e)=>U`
                            <${V9} key=${e} preview=${M} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&U`<${_8} src=${x} onClose=${()=>F(null)} />`}
        ${M_&&U`
            <${e4}
                mediaId=${M_.mediaId}
                info=${M_.info}
                onClose=${()=>S_(null)}
            />
        `}
    `}function N8({posts:_,hasMore:$,onLoadMore:N,onPostClick:j,onHashtagClick:Z,onMessageRef:K,onScrollToMessage:z,onFileRef:G,emptyMessage:L,timelineRef:O,agents:q,user:V,onDeletePost:H,reverse:w=!0,removingPostIds:f,searchQuery:I}){let[R,x]=T(!1),F=y(null),A=typeof IntersectionObserver<"u",C=P(async()=>{if(!N||!$||R)return;x(!0);try{await N({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,R,N]),c=P((r)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:N_}=r.target,G_=w?K_-N_-__:__,L_=Math.max(300,N_);if(G_<L_)C()},[w,C]);m(()=>{if(!A)return;let r=F.current,__=O?.current;if(!r||!__)return;let K_=300,N_=new IntersectionObserver((G_)=>{for(let L_ of G_){if(!L_.isIntersecting)continue;C()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return N_.observe(r),()=>N_.disconnect()},[A,$,N,O,C]);let a=y(C);if(a.current=C,m(()=>{if(A)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,N_=w?__-K_-r:r,G_=Math.max(300,K_);if(N_<G_)a.current?.()},[A,_,$,w,O]),m(()=>{if(!O?.current)return;if(!$||R)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,N_=w?__-K_-r:r,G_=Math.max(300,K_);if(__<=K_+1||N_<G_)a.current?.()},[_,$,R,w,O]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,__)=>r.id-__.id),l=(r)=>{let __=r?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},Z_=new Map;for(let r=0;r<t.length;r+=1){let __=t[r],K_=Number(__?.id),N_=l(__);if(N_!==null){let G_=Z_.get(N_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),Z_.set(N_,G_)}else if(Number.isFinite(K_)){let G_=Z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,Z_.set(K_,G_)}}let i=new Map;for(let[r,__]of Z_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let N_ of __.replyIndexes)K_.add(N_);i.set(r,Array.from(K_).sort((N_,G_)=>N_-G_))}let Q_=t.map((r,__)=>{let K_=l(r);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let N_=i.get(K_);if(!N_||N_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=N_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<N_.length-1}}),U_=U`<div class="timeline-sentinel" ref=${F}></div>`;return U`
        <div class="timeline ${w?"reverse":"normal"}" ref=${O} onScroll=${c}>
            <div class="timeline-content">
                ${w?U_:null}
                ${t.map((r,__)=>{let K_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),N_=f?.has?.(r.id),G_=Q_[__]||{};return U`
                    <${$8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${N_}
                        highlightQuery=${I}
                        agentName=${u4(r.data?.agent_id,q||{})}
                        agentAvatarUrl=${m4(r.data?.agent_id,q||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>j?.(r)}
                        onHashtagClick=${Z}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${w?null:U_}
            </div>
        </div>
    `}class j8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,N=-1/0;for(let j of this.extensions.values()){if(j.placement!=="tabs")continue;if(!j.canHandle)continue;try{let Z=j.canHandle(_);if(Z===!1||Z===0)continue;let K=Z===!0?0:typeof Z==="number"?Z:0;if(K>N)N=K,$=j}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${j.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var L0=new j8;var h$=null,d3=null;function Z8(){if(d3)return Promise.resolve(d3);if(!h$)h$=import("/static/dist/editor.bundle.js").then((_)=>{return d3=_,_}).catch((_)=>{throw h$=null,_});return h$}class K8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Z8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new K8(_,$)}};function s3(){Z8().catch(()=>{})}var b9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},A9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i$=null,a3=null;function P9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function M9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let N=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,j=(Z,K)=>{let z=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!P9(z))return $(Z,K);if(Z instanceof Request)return $(new Request(N,Z));return $(N,K)};globalThis.fetch=j;try{return await _()}finally{globalThis.fetch=$}}async function C9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i$)i$=M9(()=>Promise.resolve($.init?.())).catch((N)=>{throw i$=null,N});return await i$,$}async function x9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a3)a3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a3}async function S9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function f9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function I9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function T9(_,$){if(!_||!_.startsWith("#"))return _;let N=_.slice(1);if(N.length===3)return`#${N[0]}${N[0]}${N[1]}${N[1]}${N[2]}${N[2]}${$}`;if(N.length===6)return`#${N}${$}`;return _}function z8(){let _=I9(),$=_?A9:b9,N=H2("--bg-primary",_?"#000000":"#ffffff"),j=H2("--text-primary",_?"#e7e9ea":"#0f1419"),Z=H2("--text-secondary",_?"#71767b":"#536471"),K=H2("--accent-color","#1d9bf0"),z=H2("--danger-color",_?"#ff7b72":"#cf222e"),G=H2("--success-color",_?"#7ee787":"#1a7f37"),L=H2("--bg-hover",_?"#1d1f23":"#e8ebed"),O=H2("--border-color",_?"#2f3336":"#eff3f4"),q=H2("--accent-soft-strong",T9(K,_?"47":"33"));return{background:N,foreground:j,cursor:K,cursorAccent:N,selectionBackground:q,selectionForeground:j,black:L,red:z,green:G,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:j,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:O}}class Y8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let N=_.querySelector("canvas");if(N instanceof HTMLElement)N.style.display="block",N.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await C9();if(await x9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let N=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:z8()}),j=null;if(typeof _.FitAddon==="function")j=new _.FitAddon,N.loadAddon?.(j);await N.open($),this.syncHostLayout(),N.loadFonts?.(),j?.observeResize?.(),this.terminal=N,this.fitAddon=j,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=z8(),$=JSON.stringify(_),N=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let j=this.bodyEl.querySelector(".terminal-live-host");if(j instanceof HTMLElement)j.style.backgroundColor=_.background,j.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(N&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(N&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let N=window.matchMedia?.("(prefers-color-scheme: dark)"),j=()=>_();if(N?.addEventListener)N.addEventListener("change",j);else if(N?.addListener)N.addListener(j);this.mediaQuery=N,this.mediaQueryListener=j;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let N=new ResizeObserver(()=>this.scheduleResize());N.observe(this.container),N.observe(this.bodyEl),this.resizeObserver=N}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await S9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let N=new WebSocket(f9($.ws_path||"/terminal/ws"));this.socket=N,this.setStatus("Connecting…"),_.onData?.((j)=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"input",data:j}))}),_.onResize?.(({cols:j,rows:Z})=>{if(N.readyState===WebSocket.OPEN)N.send(JSON.stringify({type:"resize",cols:j,rows:Z}))}),N.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),N.addEventListener("message",(j)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(j.data))}catch{Z={type:"output",data:String(j.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),N.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),N.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new Y8(_,$)}};function k2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u9(_,$){let N=String(_||"").trim();if(!N)return N;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(N)||N.startsWith("#")||N.startsWith("data:")||N.startsWith("blob:"))return N;let j=N.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=j?.[1]||N,K=j?.[2]||"",z=j?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),O=Z.startsWith("/")?Z:`${G?`${G}/`:""}${Z}`,q=[];for(let H of O.split("/")){if(!H||H===".")continue;if(H===".."){if(q.length>0)q.pop();continue}q.push(H)}let V=q.join("/");return`${M$(V)}${K}${z}`}function Y$(_){return _?.preview||null}function m9(_){let $=String(_||""),N=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),j=N>=0?$.slice(N+1):$,Z=j.lastIndexOf(".");if(Z<=0||Z===j.length-1)return"none";return j.slice(Z+1)}function R9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function v9(_,$){let N=$?.path||_?.path||"",j=[];if($?.content_type)j.push(`<span><strong>type:</strong> ${k2($.content_type)}</span>`);if(typeof $?.size==="number")j.push(`<span><strong>size:</strong> ${k2(s0($.size))}</span>`);if($?.mtime)j.push(`<span><strong>modified:</strong> ${k2(T2($.mtime))}</span>`);if(j.push(`<span><strong>kind:</strong> ${k2(R9($))}</span>`),j.push(`<span><strong>extension:</strong> ${k2(m9(N))}</span>`),N)j.push(`<span><strong>path:</strong> ${k2(N)}</span>`);if($?.truncated)j.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${j.join("")}</div>`}function g9(_){let $=Y$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let N=v9(_,$);if($.kind==="image"){let j=$.url||($.path?M$($.path):"");return`${N}
            <div class="workspace-preview-image">
                <img src="${k2(j)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let j=R0($.text||"",null,{rewriteImageSrc:(Z)=>u9(Z,$.path||_?.path)});return`${N}<div class="workspace-preview-text">${j}</div>`}return`${N}<pre class="workspace-preview-text"><code>${k2($.text||"")}</code></pre>`}if($.kind==="binary")return`${N}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${N}<div class="workspace-preview-text">No preview available.</div>`}class e3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=g9(this.context)}getContent(){let _=Y$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let N=Y$(this.context);if(N&&N.kind==="text"){if(N.text=_,$!==void 0)N.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Y$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e3(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Y$(_)||_?.path?1:!1},mount(_,$){return new e3(_,$)}};class G8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let N of this.listeners)try{N(_,$)}catch{}}open(_,$){let N=this.tabs.get(_);if(!N)N={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,N);return this.activate(_),N}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,N]of this.tabs)if($!==_&&!N.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((j)=>j!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((N)=>N!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let N=this.tabs.get(_);if(!N||N.dirty===$)return;N.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let N=this.tabs.get(_);if(N)N.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,N){let j=this.tabs.get(_);if(!j)return;if(this.tabs.delete(_),j.id=$,j.path=$,j.label=N||$.split("/").pop()||$,this.tabs.set($,j),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($+1)%_.length];this.activate(N.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((j)=>j.id===this.activeId),N=_[($-1+_.length)%_.length];this.activate(N.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var u_=new G8;var l$="workspaceExplorerScale",c9=["compact","default","comfortable"],p9=new Set(c9),h9={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function O8(_,$="default"){if(typeof _!=="string")return $;let N=_.trim().toLowerCase();return p9.has(N)?N:$}function N1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),N=Boolean(window.matchMedia?.("(hover: none)")?.matches),j=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||j&&N}}function i9(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function l9(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function j1(_={}){let $=i9(_),N=_.stored?O8(_.stored,$):$;return l9(N,_)}function X8(_){return h9[O8(_)]}var n9=60000,q8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U8(_,$,N,j=0,Z=[]){if(!N&&q8(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:j}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)U8(K,$,N,j+1,Z);return Z}function L8(_,$,N){if(!_)return"";let j=[],Z=(K)=>{if(!N&&q8(K))return;if(j.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)Z(z)};return Z(_),j.join("|")}function Y1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let N=Array.isArray(_.children)?_.children:null,j=Array.isArray($.children)?$.children:null;if(!j)return _;let Z=N?new Map(N.map((G)=>[G?.path,G])):new Map,K=!N||N.length!==j.length,z=j.map((G)=>{let L=Y1(Z.get(G.path),G);if(L!==Z.get(G.path))K=!0;return L});return K?{...$,children:z}:_}function K1(_,$,N){if(!_)return _;if(_.path===$)return Y1(_,N);if(!Array.isArray(_.children))return _;let j=!1,Z=_.children.map((K)=>{let z=K1(K,$,N);if(z!==K)j=!0;return z});return j?{..._,children:Z}:_}var B8=4,Z1=14,o9=8,d9=16;function Q8(_){if(!_)return 0;if(_.type==="file"){let j=Math.max(0,Number(_.size)||0);return _.__bytes=j,j}let $=Array.isArray(_.children)?_.children:[],N=0;for(let j of $)N+=Q8(j);return _.__bytes=N,N}function F8(_,$=0){let N=Math.max(0,Number(_?.__bytes??_?.size??0)),j={name:_?.name||_?.path||".",path:_?.path||".",size:N,children:[]};if(!_||_.type!=="dir"||$>=B8)return j;let Z=Array.isArray(_.children)?_.children:[],K=[];for(let G of Z){let L=Math.max(0,Number(G?.__bytes??G?.size??0));if(L<=0)continue;if(G.type==="dir")K.push({kind:"dir",node:G,size:L});else K.push({kind:"file",name:G.name,path:G.path,size:L})}K.sort((G,L)=>L.size-G.size);let z=K;if(K.length>Z1){let G=K.slice(0,Z1-1),L=K.slice(Z1-1),O=L.reduce((q,V)=>q+V.size,0);G.push({kind:"other",name:`+${L.length} more`,path:`${j.path}/[other]`,size:O}),z=G}return j.children=z.map((G)=>{if(G.kind==="dir")return F8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),j}function W8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,N=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(N==="dark")return!0;if(N==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H8(_,$,N){let j=((_+Math.PI/2)*180/Math.PI+360)%360,Z=N?Math.max(30,70-$*10):Math.max(34,66-$*8),K=N?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${j.toFixed(1)} ${Z}% ${K}%)`}function n$(_,$,N,j){return{x:_+N*Math.cos(j),y:$+N*Math.sin(j)}}function G1(_,$,N,j,Z,K){let z=Math.PI*2-0.0001,G=K-Z>z?Z+z:K,L=n$(_,$,j,Z),O=n$(_,$,j,G),q=n$(_,$,N,G),V=n$(_,$,N,Z),H=G-Z>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${N} ${N} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var J8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function y8(_,$,N){let j=[],Z=[],K=Math.max(0,Number($)||0),z=(G,L,O,q)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let w=O-L,f=L;V.forEach((I,R)=>{let x=Math.max(0,Number(I.size)||0);if(x<=0)return;let F=x/H,A=f,C=R===V.length-1?O:f+w*F;if(f=C,C-A<0.003)return;let c=J8[q];if(c){let a=H8(A,q,N);if(j.push({key:I.path,path:I.path,label:I.name,size:x,color:a,depth:q,startAngle:A,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:G1(120,120,c[0],c[1],A,C)}),q===1)Z.push({key:I.path,name:I.name,size:x,pct:K>0?x/K*100:0,color:a})}if(q<B8)z(I,A,C,q+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:j,legend:Z}}function z1(_,$){if(!_||!$)return null;if(_.path===$)return _;let N=Array.isArray(_.children)?_.children:[];for(let j of N){let Z=z1(j,$);if(Z)return Z}return null}function D8(_,$,N,j){if(!N||N<=0)return{segments:[],legend:[]};let Z=J8[1];if(!Z)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,G=H8(K,1,j),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:N,color:G,depth:1,startAngle:K,endAngle:z,innerRadius:Z[0],outerRadius:Z[1],d:G1(120,120,Z[0],Z[1],K,z)}],legend:[{key:O,name:_,size:N,pct:100,color:G}]}}function V8(_,$=!1,N=!1){if(!_)return null;let j=Q8(_),Z=F8(_,0),K=Z.size||j,{segments:z,legend:G}=y8(Z,K,N);if(!z.length&&K>0){let L=D8("[files]",Z.path,K,N);z=L.segments,G=L.legend}return{root:Z,totalSize:K,segments:z,legend:G,truncated:$,isDarkTheme:N}}function r9({payload:_}){if(!_)return null;let[$,N]=T(null),[j,Z]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[G,L]=T(!1);m(()=>{let i=_?.root?.path||".";Z(i),z([i]),N(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!j)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[j]);let O=i_(()=>{return z1(_.root,j)||_.root},[_?.root,j]),q=O?.size||_.totalSize||0,{segments:V,legend:H}=i_(()=>{let i=y8(O,q,_.isDarkTheme);if(i.segments.length>0)return i;if(q<=0)return i;let Q_=O?.children?.length?"Total":"[files]";return D8(Q_,O?.path||_?.root?.path||".",q,_.isDarkTheme)},[O,q,_.isDarkTheme,_?.root?.path]),[w,f]=T(V),I=y(new Map),R=y(0);m(()=>{let i=I.current,Q_=new Map(V.map((K_)=>[K_.key,K_])),U_=performance.now(),r=220,__=(K_)=>{let N_=Math.min(1,(K_-U_)/220),G_=N_*(2-N_),L_=V.map((J_)=>{let D_=i.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},k_=(l_,h)=>l_+(h-l_)*G_,s_=k_(D_.startAngle,J_.startAngle),E_=k_(D_.endAngle,J_.endAngle),m_=k_(D_.innerRadius,J_.innerRadius),C_=k_(D_.outerRadius,J_.outerRadius);return{...J_,d:G1(120,120,m_,C_,s_,E_)}});if(f(L_),N_<1)R.current=requestAnimationFrame(__)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(__),I.current=Q_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[V]);let x=w.length?w:V,F=q>0?s0(q):"0 B",A=O?.name||"",c=(A&&A!=="."?A:"Total")||"Total",a=F,t=K.length>1,l=(i)=>{if(!i?.path)return;let Q_=z1(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((U_)=>[...U_,Q_.path]),Z(Q_.path),N(null)},Z_=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return Z(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),N(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${q}>
                ${x.map((i)=>U`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>N(i)}
                        onMouseLeave=${()=>N(null)}
                        onTouchStart=${()=>N(i)}
                        onTouchEnd=${()=>N(null)}
                        onClick=${()=>l(i)}
                    >
                        <title>${i.label} — ${s0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${Z_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${H.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${s0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function s9({mediaId:_}){let[$,N]=T(null);if(m(()=>{if(!_)return;c2(_).then(N).catch(()=>{})},[_]),!$)return null;let j=$.filename||"file",Z=$.metadata?.size?s0($.metadata.size):"";return U`
        <a href=${j2(_)} download=${j} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${j}</span>
                ${Z&&U`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function E8({onFileSelect:_,visible:$=!0,active:N=void 0,onOpenEditor:j}){let[Z,K]=T(null),[z,G]=T(new Set(["."])),[L,O]=T(null),[q,V]=T(null),[H,w]=T(""),[f,I]=T(null),[R,x]=T(null),[F,A]=T(!0),[C,c]=T(!1),[a,t]=T(null),[l,Z_]=T(()=>p2("workspaceShowHidden",!1)),[i,Q_]=T(!1),[U_,r]=T(null),[__,K_]=T(null),[N_,G_]=T(null),[L_,J_]=T(!1),[j_,D_]=T(null),[k_,s_]=T(()=>W8()),[E_,m_]=T(()=>j1({stored:r0(l$),...N1()})),C_=y(z),l_=y(""),h=y(null),X_=y(0),W_=y(new Set),V_=y(null),y_=y(new Map),w_=y(_),R_=y(j),F_=y(null),M_=y(null),S_=y(null),Y0=y(null),n_=y(null),e_=y(null),B0=y("."),x_=y(null),_0=y({path:null,dragging:!1,startX:0,startY:0}),Q0=y({path:null,dragging:!1,startX:0,startY:0}),D0=y({path:null,timer:0}),F0=y(!1),G0=y(0),E0=y(new Map),o_=y(null),I_=y(null),M0=y(null),c_=y(null),d_=y(l),k0=y($),B_=y(N??$),M=y(0),e=y(N_),b_=y(i),v_=y(U_),w0=y(null),a0=y({x:0,y:0}),$0=y(0),O0=y(null),W0=y(L),t0=y(q),C0=y(null),v0=y(null),g0=y(f);w_.current=_,R_.current=j,m(()=>{C_.current=z},[z]),m(()=>{d_.current=l},[l]),m(()=>{k0.current=$},[$]),m(()=>{B_.current=N??$},[N,$]),m(()=>{e.current=N_},[N_]),m(()=>{if(typeof window>"u")return;let W=()=>{m_(j1({stored:r0(l$),...N1()}))};W();let Q=()=>W(),E=()=>W(),D=(g)=>{if(!g||g.key===null||g.key===l$)W()};window.addEventListener("resize",Q),window.addEventListener("focus",E),window.addEventListener("storage",D);let u=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),s=(g,z_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",z_);else if(g.addListener)g.addListener(z_)},o=(g,z_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",z_);else if(g.removeListener)g.removeListener(z_)};return s(u,Q),s(d,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",E),window.removeEventListener("storage",D),o(u,Q),o(d,Q)}},[]),m(()=>{let W=(Q)=>{let E=Q?.detail?.path;if(!E)return;let D=E.split("/"),u=[];for(let d=1;d<D.length;d++)u.push(D.slice(0,d).join("/"));if(u.length)G((d)=>{let s=new Set(d);s.add(".");for(let o of u)s.add(o);return s});O(E),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",W),()=>window.removeEventListener("workspace-reveal-path",W)},[]),m(()=>{b_.current=i},[i]),m(()=>{v_.current=U_},[U_]),m(()=>{W0.current=L},[L]),m(()=>{t0.current=q},[q]),m(()=>{g0.current=f},[f]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let W=()=>s_(W8());W();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>W();if(Q?.addEventListener)Q.addEventListener("change",E);else if(Q?.addListener)Q.addListener(E);let D=typeof MutationObserver<"u"?new MutationObserver(()=>W()):null;if(D?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)D?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",E);else if(Q?.removeListener)Q.removeListener(E);D?.disconnect()}},[]),m(()=>{if(!q)return;let W=n_.current;if(!W)return;let Q=requestAnimationFrame(()=>{try{W.focus(),W.select()}catch{}});return()=>cancelAnimationFrame(Q)},[q]);let n2=async(W)=>{c(!0),I(null),x(null);try{let Q=await P3(W,20000);I(Q)}catch(Q){I({error:Q.message||"Failed to load preview"})}finally{c(!1)}};F_.current=n2;let w2=async()=>{if(!k0.current)return;try{let W=await N$("",1,d_.current),Q=L8(W.root,C_.current,d_.current);if(Q===l_.current){A(!1);return}if(l_.current=Q,h.current=W.root,!X_.current)X_.current=requestAnimationFrame(()=>{X_.current=0,K((E)=>Y1(E,h.current)),A(!1)})}catch(W){t(W.message||"Failed to load workspace"),A(!1)}},c0=async(W)=>{if(!W)return;if(W_.current.has(W))return;W_.current.add(W);try{let Q=await N$(W,1,d_.current);K((E)=>K1(E,W,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{W_.current.delete(W)}};M_.current=c0;let N0=P(()=>{let W=L;if(!W)return".";let Q=y_.current?.get(W);if(Q&&Q.type==="dir")return Q.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[L]),K2=P((W)=>{let Q=W?.closest?.(".workspace-row");if(!Q)return null;let E=Q.dataset.path,D=Q.dataset.type;if(!E)return null;if(D==="dir")return E;if(E.includes("/")){let u=E.split("/");return u.pop(),u.join("/")||"."}return"."},[]),X0=P((W)=>{return K2(W?.target||null)},[K2]),j0=P((W)=>{e.current=W,G_(W)},[]),T_=P(()=>{let W=D0.current;if(W?.timer)clearTimeout(W.timer);D0.current={path:null,timer:0}},[]),T0=P((W)=>{if(!W||W==="."){T_();return}let Q=y_.current?.get(W);if(!Q||Q.type!=="dir"){T_();return}if(C_.current?.has(W)){T_();return}if(D0.current?.path===W)return;T_();let E=setTimeout(()=>{D0.current={path:null,timer:0},M_.current?.(W),G((D)=>{let u=new Set(D);return u.add(W),u})},600);D0.current={path:W,timer:E}},[T_]),p0=P((W,Q)=>{if(a0.current={x:W,y:Q},$0.current)return;$0.current=requestAnimationFrame(()=>{$0.current=0;let E=w0.current;if(!E)return;let D=a0.current;E.style.transform=`translate(${D.x+12}px, ${D.y+12}px)`})},[]),z2=P((W)=>{if(!W)return;let E=(y_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E)return;K_({path:W,label:E})},[]),J2=P(()=>{if(K_(null),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),b2=P((W)=>{if(!W)return".";let Q=y_.current?.get(W);if(Q&&Q.type==="dir")return Q.path;if(W==="."||!W.includes("/"))return".";let E=W.split("/");return E.pop(),E.join("/")||"."},[]),H0=P(()=>{V(null),w("")},[]),A2=P((W)=>{if(!W)return;let E=(y_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!E||W===".")return;V(W),w(E)},[]),o2=P(async()=>{let W=t0.current;if(!W)return;let Q=(H||"").trim();if(!Q){H0();return}let E=y_.current?.get(W),D=(E?.name||W.split("/").pop()||W).trim();if(Q===D){H0();return}try{let d=(await x3(W,Q))?.path||W,s=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(H0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:W,newPath:d,type:E?.type||"file"}})),E?.type==="dir")G((o)=>{let g=new Set;for(let z_ of o)if(z_===W)g.add(d);else if(z_.startsWith(`${W}/`))g.add(`${d}${z_.slice(W.length)}`);else g.add(z_);return g});if(O(d),E?.type==="dir")I(null),c(!1),x(null);else F_.current?.(d);M_.current?.(s)}catch(u){t(u?.message||"Failed to rename file")}},[H0,H]),y2=P(async(W)=>{let D=W||".";for(let u=0;u<50;u+=1){let s=`untitled${u===0?"":`-${u}`}.md`;try{let g=(await C3(D,s,""))?.path||(D==="."?s:`${D}/${s}`);if(D&&D!==".")G((z_)=>new Set([...z_,D]));O(g),t(null),M_.current?.(D),F_.current?.(g);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;t(o?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),u2=P((W)=>{if(W?.stopPropagation?.(),L_)return;let Q=b2(W0.current);y2(Q)},[L_,b2,y2]);m(()=>{if(typeof window>"u")return;let W=(Q)=>{let E=Q?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;K((o)=>{let g=o;for(let z_ of E){if(!z_?.root)continue;if(!g||z_.path==="."||!z_.path)g=z_.root;else g=K1(g,z_.path,z_.root)}if(g)l_.current=L8(g,C_.current,d_.current);return A(!1),g});let D=W0.current;if(Boolean(D)&&E.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return D===g||D.startsWith(`${g}/`)||g.startsWith(`${D}/`)}))E0.current.clear();if(!D||!g0.current)return;let d=y_.current?.get(D);if(d&&d.type==="dir")return;if(E.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return D===g||D.startsWith(`${g}/`)}))F_.current?.(D)};return window.addEventListener("workspace-update",W),()=>window.removeEventListener("workspace-update",W)},[]),V_.current=w2;let V2=y(()=>{if(typeof window>"u")return;let W=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=B_.current??k0.current,E=document.visibilityState!=="hidden"&&(Q||W.matches&&k0.current);j$(E,d_.current).catch(()=>{})}).current,a_=y(0),P2=y(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,V2()},250)}).current;m(()=>{if(k0.current)V_.current?.();P2()},[$,N]),m(()=>{V_.current(),V2();let W=setInterval(()=>V_.current(),n9),Q=h2("previewHeight",null),E=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(G0.current=E,S_.current)S_.current.style.setProperty("--preview-height",`${E}px`);let D=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>P2();if(D.addEventListener)D.addEventListener("change",u);else if(D.addListener)D.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(W),X_.current)cancelAnimationFrame(X_.current),X_.current=0;if(D.removeEventListener)D.removeEventListener("change",u);else if(D.removeListener)D.removeListener(u);if(document.removeEventListener("visibilitychange",u),a_.current)clearTimeout(a_.current),a_.current=0;if(x_.current)clearTimeout(x_.current),x_.current=null;j$(!1,d_.current).catch(()=>{})}},[]);let x0=i_(()=>U8(Z,z,l),[Z,z,l]),S0=i_(()=>new Map(x0.map((W)=>[W.node.path,W.node])),[x0]),Y2=i_(()=>X8(E_),[E_]);y_.current=S0;let q0=(L?y_.current.get(L):null)?.type==="dir";m(()=>{if(!L||!q0){D_(null),o_.current=null,I_.current=null;return}let W=L,Q=`${l?"hidden":"visible"}:${L}`,E=E0.current,D=E.get(Q);if(D?.root){E.delete(Q),E.set(Q,D);let s=V8(D.root,Boolean(D.truncated),k_);if(s)o_.current=s,I_.current=L,D_({loading:!1,error:null,payload:s});return}let u=o_.current,d=I_.current;D_({loading:!0,error:null,payload:d===L?u:null}),N$(L,o9,l).then((s)=>{if(W0.current!==W)return;let o={root:s?.root,truncated:Boolean(s?.truncated)};E.delete(Q),E.set(Q,o);while(E.size>d9){let z_=E.keys().next().value;if(!z_)break;E.delete(z_)}let g=V8(o.root,o.truncated,k_);o_.current=g,I_.current=L,D_({loading:!1,error:null,payload:g})}).catch((s)=>{if(W0.current!==W)return;D_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:d===L?u:null})})},[L,q0,l,k_]);let M2=Boolean(f&&f.kind==="text"&&!q0&&(!f.size||f.size<=262144)),G2=M2?"Open in editor":f?.size>262144?"File too large to edit":"File is not editable";m(()=>{let W=M0.current;if(c_.current)c_.current.dispose(),c_.current=null;if(!W)return;if(W.innerHTML="",!L||q0||!f||f.error)return;let Q={path:L,content:typeof f.text==="string"?f.text:void 0,mtime:f.mtime,size:f.size,preview:f,mode:"view"},E=L0.resolve(Q)||L0.get("workspace-preview-default");if(!E)return;let D=E.mount(W,Q);return c_.current=D,()=>{if(c_.current===D)D.dispose(),c_.current=null;W.innerHTML=""}},[L,q0,f]);let O2=(W)=>{let Q=W?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},C2=(W)=>{return Boolean(W?.closest?.(".workspace-node-icon, .workspace-label-text"))},h0=y((W)=>{if(v0.current)clearTimeout(v0.current),v0.current=null;let E=O2(W)?.closest?.("[data-path]");if(!E)return;let D=E.dataset.path;if(E.dataset.type==="dir"||!D)return;if(t0.current===D)H0();R_.current?.(D)}).current,e0=y((W)=>{if(F0.current){F0.current=!1;return}let Q=O2(W),E=Q?.closest?.("[data-path]");if(Y0.current?.focus?.(),!E)return;let D=E.dataset.path,u=E.dataset.type,d=Boolean(Q?.closest?.(".workspace-caret")),s=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),o=W0.current===D,g=t0.current;if(g){if(g===D)return;H0()}let z_=u==="file"&&C0.current===D&&!d&&!s;if(o&&!d&&!s&&D!=="."&&!z_){if(v0.current)clearTimeout(v0.current);v0.current=setTimeout(()=>{v0.current=null,A2(D)},350);return}if(u==="dir"){if(C0.current=null,O(D),I(null),x(null),c(!1),!C_.current.has(D))M_.current?.(D);if(o&&!d)return;G((U0)=>{let A0=new Set(U0);if(A0.has(D))A0.delete(D);else A0.add(D);return A0})}else{C0.current=null,O(D);let y0=y_.current.get(D);if(y0)w_.current?.(y0.path,y0);F_.current?.(D)}}).current,f0=y(()=>{l_.current="",V_.current(),Array.from(C_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>M_.current?.(Q))}).current,_2=y(()=>{C0.current=null,O(null),I(null),x(null),c(!1)}).current,x2=y(()=>{Z_((W)=>{let Q=!W;if(typeof window<"u")r_("workspaceShowHidden",String(Q));return d_.current=Q,j$(!0,Q).catch(()=>{}),l_.current="",V_.current?.(),Array.from(C_.current||[]).filter((D)=>D&&D!==".").forEach((D)=>M_.current?.(D)),Q})}).current,S2=y((W)=>{if(O2(W)?.closest?.("[data-path]"))return;_2()}).current,$2=P(async(W)=>{if(!W)return;let Q=W.split("/").pop()||W;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await f3(W);let D=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(W0.current===W)_2();M_.current?.(D),t(null)}catch(D){I((u)=>({...u||{},error:D.message||"Failed to delete file"}))}},[_2]),q2=P((W)=>{let Q=Y0.current;if(!Q||!W||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(W)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),d2=P((W)=>{let Q=x0;if(!Q||Q.length===0)return;let E=L?Q.findIndex((D)=>D.node.path===L):-1;if(W.key==="ArrowDown"){W.preventDefault();let D=Math.min(E+1,Q.length-1),u=Q[D];if(!u)return;if(O(u.node.path),u.node.type!=="dir")w_.current?.(u.node.path,u.node),F_.current?.(u.node.path);else I(null),c(!1),x(null);q2(u.node.path);return}if(W.key==="ArrowUp"){W.preventDefault();let D=E<=0?0:E-1,u=Q[D];if(!u)return;if(O(u.node.path),u.node.type!=="dir")w_.current?.(u.node.path,u.node),F_.current?.(u.node.path);else I(null),c(!1),x(null);q2(u.node.path);return}if(W.key==="ArrowRight"&&E>=0){let D=Q[E];if(D?.node?.type==="dir"&&!z.has(D.node.path))W.preventDefault(),M_.current?.(D.node.path),G((u)=>new Set([...u,D.node.path]));return}if(W.key==="ArrowLeft"&&E>=0){let D=Q[E];if(D?.node?.type==="dir"&&z.has(D.node.path))W.preventDefault(),G((u)=>{let d=new Set(u);return d.delete(D.node.path),d});return}if(W.key==="Enter"&&E>=0){W.preventDefault();let D=Q[E];if(!D)return;let u=D.node.path;if(D.node.type==="dir"){if(!C_.current.has(u))M_.current?.(u);G((s)=>{let o=new Set(s);if(o.has(u))o.delete(u);else o.add(u);return o}),I(null),x(null),c(!1)}else w_.current?.(u,D.node),F_.current?.(u);return}if((W.key==="Delete"||W.key==="Backspace")&&E>=0){let D=Q[E];if(!D||D.node.type==="dir")return;W.preventDefault(),$2(D.node.path);return}if(W.key==="Escape")W.preventDefault(),_2()},[_2,$2,z,x0,q2,L]),b0=P((W)=>{let Q=O2(W),E=Q?.closest?.(".workspace-row");if(!E)return;let D=E.dataset.type,u=E.dataset.path;if(!u||u===".")return;if(t0.current===u)return;let d=W?.touches?.[0];if(!d)return;if(_0.current={path:C2(Q)?u:null,dragging:!1,startX:d.clientX,startY:d.clientY},D!=="file")return;if(x_.current)clearTimeout(x_.current);x_.current=setTimeout(()=>{if(x_.current=null,_0.current?.dragging)return;$2(u)},600)},[$2]),B=P(()=>{if(x_.current)clearTimeout(x_.current),x_.current=null;let W=_0.current;if(W?.dragging&&W.path){let Q=e.current||N0(),E=O0.current;if(typeof E==="function")E(W.path,Q)}_0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),j0(null),T_(),J2()},[N0,J2,j0,T_]),S=P((W)=>{let Q=_0.current,E=W?.touches?.[0];if(!E||!Q?.path){if(x_.current)clearTimeout(x_.current),x_.current=null;return}let D=Math.abs(E.clientX-Q.startX),u=Math.abs(E.clientY-Q.startY),d=D>8||u>8;if(d&&x_.current)clearTimeout(x_.current),x_.current=null;if(!Q.dragging&&d)Q.dragging=!0,Q_(!0),r("move"),z2(Q.path);if(Q.dragging){W.preventDefault(),p0(E.clientX,E.clientY);let s=document.elementFromPoint(E.clientX,E.clientY),o=K2(s)||N0();if(e.current!==o)j0(o);T0(o)}},[K2,N0,z2,p0,j0,T0]),n=y((W)=>{W.preventDefault();let Q=S_.current;if(!Q)return;let E=W.clientY,D=G0.current||280,u=W.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=E,s=(g)=>{d=g.clientY;let z_=Q.clientHeight-80,y0=Math.min(Math.max(D-(g.clientY-E),80),z_);Q.style.setProperty("--preview-height",`${y0}px`),G0.current=y0},o=()=>{let g=Q.clientHeight-80,z_=Math.min(Math.max(D-(d-E),80),g);G0.current=z_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("previewHeight",String(Math.round(z_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}).current,Y_=y((W)=>{W.preventDefault();let Q=S_.current;if(!Q)return;let E=W.touches[0];if(!E)return;let D=E.clientY,u=G0.current||280,d=W.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let s=(g)=>{let z_=g.touches[0];if(!z_)return;g.preventDefault();let y0=Q.clientHeight-80,U0=Math.min(Math.max(u-(z_.clientY-D),80),y0);Q.style.setProperty("--preview-height",`${U0}px`),G0.current=U0},o=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",r_("previewHeight",String(Math.round(G0.current||u))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,A_=async()=>{if(!L)return;try{let W=await M3(L);if(W.media_id)x(W.media_id)}catch(W){I((Q)=>({...Q||{},error:W.message||"Failed to attach"}))}},t_=async()=>{if(!L||q0)return;await $2(L)},P_=(W)=>{return Array.from(W?.dataTransfer?.types||[]).includes("Files")},Z0=P((W)=>{if(!P_(W))return;if(W.preventDefault(),M.current+=1,!b_.current)Q_(!0);r("upload");let Q=X0(W)||N0();j0(Q),T0(Q)},[N0,X0,j0,T0]),i0=P((W)=>{if(!P_(W))return;if(W.preventDefault(),W.dataTransfer)W.dataTransfer.dropEffect="copy";if(!b_.current)Q_(!0);if(v_.current!=="upload")r("upload");let Q=X0(W)||N0();if(e.current!==Q)j0(Q);T0(Q)},[N0,X0,j0,T0]),D2=P((W)=>{if(!P_(W))return;if(W.preventDefault(),M.current=Math.max(0,M.current-1),M.current===0)Q_(!1),r(null),j0(null),T_()},[j0,T_]),u0=P(async(W,Q=".")=>{let E=Array.from(W||[]);if(E.length===0)return;let D=Q&&Q!==""?Q:".",u=D!=="."?D:"workspace root";J_(!0);try{let d=null;for(let s of E)try{d=await P$(s,D)}catch(o){let g=o?.status,z_=o?.code;if(g===409||z_==="file_exists"){let y0=s?.name||"file";if(!window.confirm(`"${y0}" already exists in ${u}. Overwrite?`))continue;d=await P$(s,D,{overwrite:!0})}else throw o}if(d?.path)C0.current=d.path,O(d.path),F_.current?.(d.path);M_.current?.(D)}catch(d){t(d.message||"Failed to upload file")}finally{J_(!1)}},[]),X2=P(async(W,Q)=>{if(!W)return;let E=y_.current?.get(W);if(!E)return;let D=Q&&Q!==""?Q:".",u=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(D===u)return;try{let s=(await S3(W,D))?.path||W;if(E.type==="dir")G((o)=>{let g=new Set;for(let z_ of o)if(z_===W)g.add(s);else if(z_.startsWith(`${W}/`))g.add(`${s}${z_.slice(W.length)}`);else g.add(z_);return g});if(O(s),E.type==="dir")I(null),c(!1),x(null);else F_.current?.(s);M_.current?.(u),M_.current?.(D)}catch(d){t(d?.message||"Failed to move entry")}},[]);O0.current=X2;let L2=P(async(W)=>{if(!P_(W))return;W.preventDefault(),M.current=0,Q_(!1),r(null),G_(null),T_();let Q=Array.from(W?.dataTransfer?.files||[]);if(Q.length===0)return;let E=e.current||X0(W)||N0();await u0(Q,E)},[N0,X0,u0]),l0=P((W)=>{if(W?.stopPropagation?.(),L_)return;let Q=W?.currentTarget?.dataset?.uploadTarget||".";B0.current=Q,e_.current?.click()},[L_]),W2=P(()=>{if(L_)return;let W=W0.current,Q=W?y_.current?.get(W):null;B0.current=Q?.type==="dir"?Q.path:".",e_.current?.click()},[L_]),J0=P((W)=>{if(!W||W.button!==0)return;let Q=W.currentTarget;if(!Q||!Q.dataset)return;let E=Q.dataset.path;if(!E||E===".")return;if(t0.current===E)return;let D=O2(W);if(D?.closest?.("button, a, input, .workspace-caret"))return;if(!C2(D))return;W.preventDefault(),Q0.current={path:E,dragging:!1,startX:W.clientX,startY:W.clientY};let u=(s)=>{let o=Q0.current;if(!o?.path)return;let g=Math.abs(s.clientX-o.startX),z_=Math.abs(s.clientY-o.startY),y0=g>4||z_>4;if(!o.dragging&&y0)o.dragging=!0,F0.current=!0,Q_(!0),r("move"),z2(o.path),p0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){s.preventDefault(),p0(s.clientX,s.clientY);let U0=document.elementFromPoint(s.clientX,s.clientY),A0=K2(U0)||N0();if(e.current!==A0)j0(A0);T0(A0)}},d=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d);let s=Q0.current;if(s?.dragging&&s.path){let o=e.current||N0(),g=O0.current;if(typeof g==="function")g(s.path,o)}Q0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),j0(null),T_(),J2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},[K2,N0,z2,p0,J2,j0,T0,T_]),f2=P(async(W)=>{let Q=Array.from(W?.target?.files||[]);if(Q.length===0)return;let E=B0.current||".";if(await u0(Q,E),B0.current=".",W?.target)W.target.value=""},[u0]);return U`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${E_}
            ref=${S_}
            onDragEnter=${Z0}
            onDragOver=${i0}
            onDragLeave=${D2}
            onDrop=${L2}
        >
            <input type="file" multiple style="display:none" ref=${e_} onChange=${f2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u2} title="New file" disabled=${L_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${f0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${x2}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&U`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S2}>
                ${L_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${F&&U`<div class="workspace-loading">Loading…</div>`}
                ${a&&U`<div class="workspace-error">${a}</div>`}
                ${Z&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${Y0}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${h0}
                        onKeyDown=${d2}
                        onTouchStart=${b0}
                        onTouchEnd=${B}
                        onTouchMove=${S}
                        onTouchCancel=${B}
                    >
                        ${x0.map(({node:W,depth:Q})=>{let E=W.type==="dir",D=W.path===L,u=W.path===q,d=E&&z.has(W.path),s=N_&&W.path===N_,o=Array.isArray(W.children)&&W.children.length>0?W.children.length:Number(W.child_count)||0;return U`
                                <div
                                    key=${W.path}
                                    class=${`workspace-row${D?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*Y2.indentPx}px`}}
                                    data-path=${W.path}
                                    data-type=${W.type}
                                    onMouseDown=${J0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?d?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${u?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${n_}
                                                value=${H}
                                                onInput=${(g)=>w(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),o2();else if(g.key==="Escape")g.preventDefault(),H0()}}
                                                onBlur=${H0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${W.name}</span></span>`}
                                    ${E&&!d&&o>0&&U`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${E&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${W.path}
                                            title="Upload files to this folder"
                                            onClick=${l0}
                                            disabled=${L_}
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
            ${L&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${n} onTouchStart=${Y_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${L}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u2} title="New file" disabled=${L_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q0&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M2&&R_.current?.(L,f)}
                                    title=${G2}
                                    disabled=${!M2}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t_}
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
                            ${q0?U`
                                    <button class="workspace-download" onClick=${W2}
                                        title="Upload files to this folder" disabled=${L_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${I3(L,l)}
                                        title="Download folder as zip" onClick=${(W)=>W.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${A_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${f?.error&&U`<div class="workspace-error">${f.error}</div>`}
                    ${q0&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${j_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${j_?.error&&U`<div class="workspace-error">${j_.error}</div>`}
                        ${j_?.payload&&j_.payload.segments?.length>0&&U`
                            <${r9} payload=${j_.payload} />
                        `}
                        ${j_?.payload&&(!j_.payload.segments||j_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${f&&!f.error&&!q0&&U`
                        <div class="workspace-preview-body" ref=${M0}></div>
                    `}
                    ${R&&U`
                        <div class="workspace-download-card">
                            <${s9} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${__&&U`
                <div class="workspace-drag-ghost" ref=${w0}>${__.label}</div>
            `}
        </aside>
    `}function k8({tabs:_,activeId:$,onActivate:N,onClose:j,onCloseOthers:Z,onCloseAll:K,onTogglePin:z,onTogglePreview:G,previewTabs:L,onToggleDock:O,dockVisible:q}){let[V,H]=T(null),w=y(null);m(()=>{if(!V)return;let F=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[V]),m(()=>{let F=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(A.shiftKey){let c=_[(C-1+_.length)%_.length];N?.(c.id)}else{let c=_[(C+1)%_.length];N?.(c.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(A.preventDefault(),$)j?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,N,j]);let f=P((F,A)=>{if(F.button===1){F.preventDefault(),j?.(A);return}if(F.button===0)N?.(A)},[N,j]),I=P((F,A)=>{F.preventDefault(),H({id:A,x:F.clientX,y:F.clientY})},[]),R=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),x=P((F,A)=>{F.preventDefault(),F.stopPropagation(),j?.(A)},[j]);if(m(()=>{if(!$||!w.current)return;let F=w.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((F)=>U`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(A)=>f(A,F.id)}
                    onContextMenu=${(A)=>I(A,F.id)}
                >
                    ${F.pinned&&U`
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
                        onMouseDown=${R}
                        onClick=${(A)=>x(A,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${q?" active":""}`}
                    onClick=${O}
                    title=${`${q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${q?"Hide":"Show"} terminal`}
                    aria-pressed=${q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${V&&U`
            <div class="tab-context-menu" style=${{left:V.x+"px",top:V.y+"px"}}>
                <button onClick=${()=>{j?.(V.id),H(null)}}>Close</button>
                <button onClick=${()=>{Z?.(V.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(V.id),H(null)}}>
                    ${_.find((F)=>F.id===V.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(V.id)&&U`
                    <hr />
                    <button onClick=${()=>{G(V.id),H(null)}}>
                        ${L?.has(V.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var a9=400,O1=60,w8=220,X1="mdPreviewHeight";function t9(){try{let _=localStorage.getItem(X1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=O1?$:w8}catch{return w8}}function b8({getContent:_,path:$,onClose:N}){let[j,Z]=T(""),[K,z]=T(t9),G=y(null),L=y(null),O=y(""),q=y(_);return q.current=_,m(()=>{let w=()=>{let I=q.current?.()||"";if(I===O.current)return;O.current=I;try{let R=R0(I,null,{sanitize:!1});Z(R)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let f=setInterval(w,a9);return()=>clearInterval(f)},[]),m(()=>{if(G.current&&j)F2(G.current).catch(()=>{})},[j]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let f=w.clientY,I=L.current?.offsetHeight||K,R=L.current?.parentElement,x=R?R.offsetHeight*0.7:500,F=w.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(c)=>{let a=Math.min(Math.max(I-(c.clientY-f),O1),x);z(a)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(X1,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",C)}}
            onTouchStart=${(w)=>{w.preventDefault();let f=w.touches[0];if(!f)return;let I=f.clientY,R=L.current?.offsetHeight||K,x=L.current?.parentElement,F=x?x.offsetHeight*0.7:500,A=w.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let C=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let l=Math.min(Math.max(R-(t.clientY-I),O1),F);z(l)},c=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(X1,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:K+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${N} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${G}
                dangerouslySetInnerHTML=${{__html:j}}
            />
        </div>
    `}function A8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:N,onWake:j,chatJid:Z}){let K=y(_);K.current=_;let z=y($);z.current=$;let G=y(N);G.current=N;let L=y(j);L.current=j,m(()=>{G.current();let O=new C$((V,H)=>K.current(V,H),(V)=>z.current(V),{chatJid:Z});O.connect();let q=()=>{O.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",q),document.addEventListener("visibilitychange",q),()=>{window.removeEventListener("focus",q),document.removeEventListener("visibilitychange",q),O.disconnect()}},[Z])}function P8(){let[_,$]=T(!1),[N,j]=T("default"),Z=y(!1);m(()=>{let L=p2("notificationsEnabled",!1);if(Z.current=L,$(L),typeof Notification<"u")j(Notification.permission)},[]),m(()=>{Z.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){j("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await K();if(j(O||"default"),O!=="granted"){Z.current=!1,$(!1),r_("notificationsEnabled","false");return}}let L=!Z.current;Z.current=L,$(L),r_("notificationsEnabled",String(L))},[K]),G=P((L,O)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let q=new Notification(L,{body:O});return q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:N,toggleNotifications:z,notify:G}}var G$=(_)=>{let $=new Set;return(_||[]).filter((N)=>{if(!N||$.has(N.id))return!1;return $.add(N.id),!0})};function M8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:N=null}){let[j,Z]=T(null),[K,z]=T(!1),G=y(!1),L=y(null),O=y(!1),q=y(null),V=y(null),H=y(0);m(()=>{G.current=K},[K]),m(()=>{V.current=j},[j]),m(()=>{H.current+=1,V.current=null,q.current=null,O.current=!1,G.current=!1,Z(null),z(!1)},[N]);let w=P(async(R=null)=>{let x=H.current;try{if(R){let F=await V3(R,50,0,N);if(x!==H.current)return;Z(F.posts),z(!1)}else{let F=await _$(10,null,N);if(x!==H.current)return;Z(F.posts),z(F.has_more)}}catch(F){if(x!==H.current)return;console.error("Failed to load posts:",F)}},[N]),f=P(async()=>{let R=H.current;try{let x=await _$(10,null,N);if(R!==H.current)return;Z((F)=>{if(!F||F.length===0)return x.posts;return G$([...x.posts,...F])}),z((F)=>F||x.has_more)}catch(x){if(R!==H.current)return;console.error("Failed to refresh timeline:",x)}},[N]),I=P(async(R={})=>{let x=H.current,F=V.current;if(!F||F.length===0)return;if(O.current)return;let{preserveScroll:A=!0,preserveMode:C="top",allowRepeat:c=!1}=R,a=(Z_)=>{if(!A){Z_();return}if(C==="top")$(Z_);else _(Z_)},l=F.slice().sort((Z_,i)=>Z_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!c&&q.current===l)return;O.current=!0,q.current=l;try{let Z_=await _$(10,l,N);if(x!==H.current)return;if(Z_.posts.length>0)a(()=>{Z((i)=>G$([...Z_.posts,...i||[]])),z(Z_.has_more)});else z(!1)}catch(Z_){if(x!==H.current)return;console.error("Failed to load more posts:",Z_)}finally{if(x===H.current)O.current=!1}},[N,_,$]);return m(()=>{L.current=I},[I]),{posts:j,setPosts:Z,hasMore:K,setHasMore:z,hasMoreRef:G,loadPosts:w,refreshTimeline:f,loadMore:I,loadMoreRef:L,loadingMoreRef:O,lastBeforeIdRef:q}}function C8(){let[_,$]=T(null),[N,j]=T({text:"",totalLines:0}),[Z,K]=T(""),[z,G]=T({text:"",totalLines:0}),[L,O]=T(null),[q,V]=T(null),[H,w]=T(null),f=y(null),I=y(0),R=y(!1),x=y(""),F=y(""),A=y(null),C=y(null),c=y(null),a=y(null),t=y(!1),l=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:N,setAgentDraft:j,agentPlan:Z,setAgentPlan:K,agentThought:z,setAgentThought:G,pendingRequest:L,setPendingRequest:O,currentTurnId:q,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:w,lastAgentEventRef:f,lastSilenceNoticeRef:I,isAgentRunningRef:R,draftBufferRef:x,thoughtBufferRef:F,pendingRequestRef:A,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:l}}function x8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:N,dockHeightRef:j}){let Z=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.clientX,w=$.current||280,f=q.currentTarget;f.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=H,R=(F)=>{I=F.clientX;let A=Math.min(Math.max(w+(F.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${A}px`),$.current=A},x=()=>{let F=Math.min(Math.max(w+(I-H),160),600);$.current=F,f.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",r_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,K=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.touches[0];if(!H)return;let w=H.clientX,f=$.current||280,I=q.currentTarget;I.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},x=()=>{I.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",r_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,z=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.clientX,w=N.current||$.current||280,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=H,R=(F)=>{I=F.clientX;let A=Math.min(Math.max(w+(F.clientX-H),200),800);V.style.setProperty("--editor-width",`${A}px`),N.current=A},x=()=>{let F=Math.min(Math.max(w+(I-H),200),800);N.current=F,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,G=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.touches[0];if(!H)return;let w=H.clientX,f=N.current||$.current||280,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),200),800);V.style.setProperty("--editor-width",`${C}px`),N.current=C},x=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",r_("editorWidth",String(Math.round(N.current||f))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,L=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.clientY,w=j?.current||200,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=H,R=(F)=>{I=F.clientY;let A=Math.min(Math.max(w-(F.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${A}px`),j)j.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let F=Math.min(Math.max(w-(I-H),100),window.innerHeight*0.5);if(j)j.current=F;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",x)}).current,O=y((q)=>{q.preventDefault();let V=_.current;if(!V)return;let H=q.touches[0];if(!H)return;let w=H.clientY,f=j?.current||200,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f-(A.clientY-w),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),j)j.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",r_("dockHeight",String(Math.round(j?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:O}}function S8({onTabClosed:_}={}){let $=y(_);$.current=_;let[N,j]=T(()=>u_.getTabs()),[Z,K]=T(()=>u_.getActiveId()),[z,G]=T(()=>u_.getTabs().length>0);m(()=>{return u_.onChange((C,c)=>{j(C),K(c),G(C.length>0)})},[]);let[L,O]=T(()=>new Set),q=P((C)=>{O((c)=>{let a=new Set(c);if(a.has(C))a.delete(C);else a.add(C);return a})},[]),V=P((C)=>{O((c)=>{if(!c.has(C))return c;let a=new Set(c);return a.delete(C),a})},[]),H=P((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!L0.resolve(c)){if(!L0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,a)}u_.open(C)},[]),w=P(()=>{let C=u_.getActiveId();if(C){let c=u_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}u_.close(C),V(C),$.current?.(C)}},[V]),f=P((C)=>{let c=u_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}u_.close(C),V(C),$.current?.(C)},[V]),I=P((C)=>{u_.activate(C)},[]),R=P((C)=>{let c=u_.getTabs().filter((l)=>l.id!==C&&!l.pinned),a=c.filter((l)=>l.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=c.map((l)=>l.id);u_.closeOthers(C),t.forEach((l)=>{V(l),$.current?.(l)})},[V]),x=P(()=>{let C=u_.getTabs().filter((t)=>!t.pinned),c=C.filter((t)=>t.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let a=C.map((t)=>t.id);u_.closeAll(),a.forEach((t)=>{V(t),$.current?.(t)})},[V]),F=P((C)=>{u_.togglePin(C)},[]),A=P(()=>{let C=u_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return m(()=>{let C=(c)=>{let{oldPath:a,newPath:t,type:l}=c.detail||{};if(!a||!t)return;if(l==="dir"){for(let Z_ of u_.getTabs())if(Z_.path===a||Z_.path.startsWith(`${a}/`)){let i=`${t}${Z_.path.slice(a.length)}`;u_.rename(Z_.id,i)}}else u_.rename(a,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),m(()=>{let C=(c)=>{if(u_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:N,tabStripActiveId:Z,previewTabs:L,openEditor:H,closeEditor:w,handleTabClose:f,handleTabActivate:I,handleTabCloseOthers:R,handleTabCloseAll:x,handleTabTogglePin:F,handleTabTogglePreview:q,revealInExplorer:A}}function L1(_,$){try{if(typeof window>"u")return $;let N=window.__PICLAW_SILENCE||{},j=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=N[_]??window[j],K=Number(Z);return Number.isFinite(K)?K:$}catch{return $}}var W1=L1("warning",30000),f8=L1("finalize",120000),V1=L1("refresh",30000),I8=30000;function T8(_){let $={};return(_?.agents||[]).forEach((N)=>{$[N.id]=N}),$}function u8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function m8(_=30000){let[,$]=T(0);m(()=>{let N=setInterval(()=>$((j)=>j+1),_);return()=>clearInterval(N)},[_])}function q1(_,$=160){let N=String(_||"").replace(/\r\n/g,`
`);if(!N)return 0;return N.split(`
`).reduce((j,Z)=>j+Math.max(1,Math.ceil(Z.length/$)),0)}function R8(_,$){if(typeof _!=="string")return{kind:"ignore"};let N=_.trim();if(!N)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(N))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:N,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${N}`,level:"warning"}}return{kind:"open",path:N}}function O$(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(N&&N.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function U1(_={}){let $=_.window??(typeof window<"u"?window:null),N=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!N)return!1;let j=String(N?.userAgent||""),Z=Number(N?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(j),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||Z>1||z)}function v8(_,$={}){if(O$($))return null;if(U1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:e9(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function g8(_,$={}){let N=$.window??(typeof window<"u"?window:null);if(!N||!_)return null;try{return _.features?N.open("about:blank",_.target,_.features):N.open("about:blank",_.target)}catch{return null}}function c8(_,$={}){if(!_||!_.document)return;try{let N=String($.title||"Opening branch…"),j=String($.message||"Preparing a new branch window…");_.document.title=N,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${N}</h1>
                <p style="margin: 0; line-height: 1.5;">${j}</p>
            </div>
        `}catch{}}function p8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function h8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X$(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(j.searchParams.set("chat_jid",Z),j.searchParams.delete("branch_loader"),j.searchParams.delete("branch_source_chat_jid"),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function i8(_,$,N={}){let j=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(j.searchParams.set("branch_loader","1"),j.searchParams.set("branch_source_chat_jid",Z),N.chatOnly!==!1)j.searchParams.set("chat_only","1");return j.toString()}function e9(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function B1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),N=String($||"").trim();if(!N)return"PiClaw could not open a new branch window.";let j=N.toLowerCase();if(j.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(j.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(j.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(j.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(j.includes("failed to fork branch")||j.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return N}function Q1(_){return String(_||"").trim()||"web:default"}function l8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:N=!1}={}){return Number(_||0)<=0&&!$&&!N}function n8(_={}){return O$(_)&&U1(_)}function _7(_={}){let $=_.window??(typeof window<"u"?window:null),N=Number($?.visualViewport?.height||0);if(Number.isFinite(N)&&N>0)return Math.round(N);let j=Number($?.innerHeight||0);if(Number.isFinite(j)&&j>0)return Math.round(j);return null}function $7(_={}){if(!n8(_))return null;let $=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!$||!N?.documentElement)return null;let j=_7({window:$});if(j&&j>0)N.documentElement.style.setProperty("--app-height",`${j}px`);try{if(typeof $.scrollTo==="function")$.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}return j}function o8(_={}){if(!n8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!$||!N)return()=>{};let j=0,Z=new Set,K=()=>{if(j)$.cancelAnimationFrame?.(j),j=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},z=()=>{j=0,$7({window:$,document:N})},G=()=>{if(j)$.cancelAnimationFrame?.(j);j=$.requestAnimationFrame?.(z)??0},L=()=>{G();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{Z.delete(H),G()},V);if(H!=null)Z.add(H)}},O=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;L()},q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),N.addEventListener("visibilitychange",O),N.addEventListener("focusin",L,!0),q?.addEventListener?.("resize",L),q?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),N.removeEventListener("visibilitychange",O),N.removeEventListener("focusin",L,!0),q?.removeEventListener?.("resize",L),q?.removeEventListener?.("scroll",L)}}function N7(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Z2(_,$,N){let j=_?.[$];return typeof j==="function"?j:N7($,N)}var j7=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function d8(_){return j7.has(String(_||"").trim())}function Z7(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function r8(_,$,N=globalThis.window){if(!N||typeof N.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let j={type:_,payload:$};return N.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:j})),N.dispatchEvent(new CustomEvent(Z7(_),{detail:j})),!0}var K7=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function s8(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.navigator??(typeof navigator<"u"?navigator:null);if(!N||typeof _!=="function")return()=>{};let Z=()=>{_(O$({window:N,navigator:j}))};Z();let z=K7.map((G)=>{try{return N.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Z),()=>G.removeEventListener("change",Z);if(typeof G.addListener==="function")return G.addListener(Z),()=>G.removeListener(Z);return()=>{}});return N.addEventListener?.("focus",Z),N.addEventListener?.("pageshow",Z),()=>{for(let G of z)G();N.removeEventListener?.("focus",Z),N.removeEventListener?.("pageshow",Z)}}function a8(_,$={}){let N=$.window??(typeof window<"u"?window:null),j=$.document??(typeof document<"u"?document:null);if(!N||!j||typeof _!=="function")return()=>{};let Z=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;_()};return N.addEventListener?.("focus",Z),N.addEventListener?.("pageshow",Z),j.addEventListener?.("visibilitychange",Z),()=>{N.removeEventListener?.("focus",Z),N.removeEventListener?.("pageshow",Z),j.removeEventListener?.("visibilitychange",Z)}}var H1="piclaw_btw_session";function z7(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Y7(){let _=r0(H1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let N=typeof $.question==="string"?$.question:"",j=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:N,answer:j,thinking:Z,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var t8=q3,e8=B3,G7=F3,_6=E3,$6=k3,N6=H3,F1=Z2(d0,"getAgentContext",null),O7=Z2(d0,"getAgentModels",{current:null,models:[]}),X7=Z2(d0,"getActiveChatAgents",{chats:[]}),j6=Z2(d0,"getChatBranches",{chats:[]}),L7=Z2(d0,"renameChatBranch",null),W7=Z2(d0,"pruneChatBranch",null),V7=Z2(d0,"getAgentQueueState",{count:0}),q7=Z2(d0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),U7=Z2(d0,"removeAgentQueueItem",{removed:!1}),B7=Z2(d0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});L0.register(r3);L0.register($1);L0.register(_1);s3();L0.register(t3);function Q7({locationParams:_}){let $=i_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),N=i_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),j=i_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=i_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[K,z]=T("disconnected"),[G,L]=T(()=>isStandaloneWebAppMode()),[O,q]=T(null),[V,H]=T(null),[w,f]=T(!1),[I,R]=T("current"),[x,F]=T([]),[A,C]=T([]),[c,a]=T(null),{agentStatus:t,setAgentStatus:l,agentDraft:Z_,setAgentDraft:i,agentPlan:Q_,setAgentPlan:U_,agentThought:r,setAgentThought:__,pendingRequest:K_,setPendingRequest:N_,currentTurnId:G_,setCurrentTurnId:L_,steerQueuedTurnId:J_,setSteerQueuedTurnId:j_,lastAgentEventRef:D_,lastSilenceNoticeRef:k_,isAgentRunningRef:s_,draftBufferRef:E_,thoughtBufferRef:m_,pendingRequestRef:C_,stalledPostIdRef:l_,currentTurnIdRef:h,steerQueuedTurnIdRef:X_,thoughtExpandedRef:W_,draftExpandedRef:V_}=C8(),[y_,w_]=T({}),[R_,F_]=T(null),[M_,S_]=T(null),[Y0,n_]=T(!1),[e_,B0]=T(null),[x_,_0]=T([]),[Q0,D0]=T([]),[F0,G0]=T(null),[E0,o_]=T([]),[I_,M0]=T(!1),[c_,d_]=T(()=>Y7()),k0=i_(()=>x_.find((X)=>X?.chat_jid===$)||null,[x_,$]),B_=i_(()=>Q0.find((X)=>X?.chat_jid===$)||k0||null,[k0,Q0,$]),M=B_?.root_chat_jid||k0?.root_chat_jid||$,e=z7(I),[b_,v_]=T(()=>({status:j?"running":"idle",message:j?"Preparing a new chat branch…":""})),w0=E0.length,a0=y(new Set),$0=y([]),O0=y(new Set),W0=y({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(E0.map((X)=>X.row_id)),$0.current=E0;let{notificationsEnabled:t0,notificationPermission:C0,toggleNotifications:v0,notify:g0}=P8(),[n2,w2]=T(()=>new Set),[c0,N0]=T(()=>p2("workspaceOpen",!0)),K2=y(null),{editorOpen:X0,tabStripTabs:j0,tabStripActiveId:T_,previewTabs:T0,openEditor:p0,closeEditor:z2,handleTabClose:J2,handleTabActivate:b2,handleTabCloseOthers:H0,handleTabCloseAll:A2,handleTabTogglePin:o2,handleTabTogglePreview:y2,revealInExplorer:u2}=S8({onTabClosed:(X)=>K2.current?.(X)}),V2=y(null),a_=y(null),P2=y(null),x0=y(null),S0=L0.getDockPanes().length>0,[Y2,L$]=T(!1),q0=P(()=>L$((X)=>!X),[]),M2=!N&&(X0||S0&&Y2);m(()=>{let X=V2.current;if(!X)return;if(a_.current)a_.current.dispose(),a_.current=null;let Y=T_;if(!Y)return;let J={path:Y,mode:"edit"},b=L0.resolve(J)||L0.get("editor");if(!b){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let k=b.mount(X,J);a_.current=k,k.onDirtyChange?.(($_)=>{u_.setDirty(Y,$_)}),k.onSaveRequest?.(()=>{}),k.onClose?.(()=>{z2()});let p=u_.getViewState(Y);if(p&&typeof k.restoreViewState==="function")requestAnimationFrame(()=>k.restoreViewState(p));if(typeof k.onViewStateChange==="function")k.onViewStateChange(($_)=>{u_.saveViewState(Y,$_)});return requestAnimationFrame(()=>k.focus()),()=>{if(a_.current===k)k.dispose(),a_.current=null}},[T_,z2]),m(()=>{let X=P2.current;if(x0.current)x0.current.dispose(),x0.current=null;if(!X||!S0||!Y2)return;let Y=L0.getDockPanes()[0];if(!Y){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(X,{mode:"view"});return x0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(x0.current===J)J.dispose(),x0.current=null}},[S0,Y2]);let[G2,O2]=T({name:"You",avatar_url:null,avatar_background:null}),C2=y(!1),h0=y(!1),e0=y(null),f0=y($),_2=y(new Map),x2=y($),S2=y(0),$2=y(0),q2=y({}),d2=y({name:null,avatar_url:null}),b0=y({currentHashtag:null,searchQuery:null}),B=y(null),S=y(null),n=y(0),Y_=y(0),A_=y(0),t_=y(null),P_=y(null),Z0=y(null),i0=y(null),D2=y(0),u0=y({title:null,avatarBase:null}),X2=y(null),L2=P(()=>{if(X2.current)clearTimeout(X2.current),X2.current=null;a(null)},[]);m8(30000),m(()=>{return H4()},[]),m(()=>{return s8(L)},[]),m(()=>{r_("workspaceOpen",String(c0))},[c0]),m(()=>{return o8()},[]),m(()=>{return()=>{L2()}},[L2]),m(()=>{if(!c_){r_(H1,"");return}r_(H1,JSON.stringify({question:c_.question||"",answer:c_.answer||"",thinking:c_.thinking||"",error:c_.error||null,status:c_.status||"success"}))},[c_]),m(()=>{q2.current=y_||{}},[y_]),m(()=>{f0.current=$},[$]),m(()=>{d2.current=G2||{name:"You",avatar_url:null,avatar_background:null}},[G2]);let l0=P((X,Y,J=null)=>{if(typeof document>"u")return;let b=(X||"").trim()||"PiClaw";if(u0.current.title!==b){document.title=b;let v=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(v&&v.getAttribute("content")!==b)v.setAttribute("content",b);u0.current.title=b}let k=document.getElementById("dynamic-favicon");if(!k)return;let p=k.getAttribute("data-default")||k.getAttribute("href")||"/favicon.ico",$_=Y||p,H_=Y?`${$_}|${J||""}`:$_;if(u0.current.avatarBase!==H_){let v=Y?`${$_}${$_.includes("?")?"&":"?"}v=${J||Date.now()}`:$_;k.setAttribute("href",v),u0.current.avatarBase=H_}},[]),W2=P((X)=>{if(!X)return;F((Y)=>Y.includes(X)?Y:[...Y,X])},[]),J0=P((X)=>{F((Y)=>Y.filter((J)=>J!==X))},[]);K2.current=J0;let f2=P(()=>{F([])},[]),W=P((X,Y=null,J="info",b=3000)=>{L2(),a({title:X,detail:Y||null,kind:J||"info"}),X2.current=setTimeout(()=>{a((k)=>k?.title===X?null:k)},b)},[L2]),Q=P((X)=>{let Y=R8(X,{editorOpen:X0,resolvePane:(J)=>L0.resolve(J)});if(Y.kind==="open"){p0(Y.path);return}if(Y.kind==="toast")W(Y.title,Y.detail,Y.level)},[X0,p0,W]),E=P(()=>{let X=T_;if(X)W2(X)},[T_,W2]),D=P((X)=>{if(!X)return;C((Y)=>Y.includes(X)?Y:[...Y,X])},[]),u=P(async(X,Y=null)=>{let J=(k)=>{k.scrollIntoView({behavior:"smooth",block:"center"}),k.classList.add("post-highlight"),setTimeout(()=>k.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+X);if(b){J(b);return}try{let k=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await U3(X,k))?.thread?.[0];if(!$_)return;V0((H_)=>{if(!H_)return[$_];if(H_.some((v)=>v.id===$_.id))return H_;return[...H_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+X);if(H_)J(H_)},50)})}catch(k){console.error("[scrollToMessage] Failed to fetch message",X,k)}},[$]),d=P((X)=>{C((Y)=>Y.filter((J)=>J!==X))},[]),s=P(()=>{C([])},[]),o=P((X={})=>{let Y=Date.now();if(D_.current=Y,X.running)s_.current=!0,M0((J)=>J?J:!0);if(X.clearSilence)k_.current=0},[M0]),g=P(()=>{if(i0.current)clearTimeout(i0.current),i0.current=null;D2.current=0},[]);m(()=>()=>{g()},[g]);let z_=P(()=>{g(),l((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:Y,lastActivity:J,...b}=X;return b})},[g]),y0=P((X)=>{if(!X)return;g();let Y=Date.now();D2.current=Y,l({type:X.type||"active",last_activity:!0}),i0.current=setTimeout(()=>{if(D2.current!==Y)return;l((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},I8)},[g]),U0=P(()=>{s_.current=!1,M0(!1),D_.current=null,k_.current=0,E_.current="",m_.current="",C_.current=null,P_.current=null,h.current=null,X_.current=null,e0.current=null,W0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),L_(null),j_(null),W_.current=!1,V_.current=!1},[g,L_,j_,M0]),A0=P((X)=>{if(!l8({remainingQueueCount:X,currentTurnId:h.current,isAgentTurnActive:I_}))return;X_.current=null,j_(null)},[I_,j_]),J1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),W$=P(()=>({agentStatus:t,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:J_,isAgentTurnActive:Boolean(I_),followupQueueItems:Array.isArray(E0)?E0.map((X)=>({...X})):[],activeModel:R_,activeThinkingLevel:M_,supportsThinking:Boolean(Y0),activeModelUsage:e_,contextUsage:F0,isAgentRunning:Boolean(s_.current),wasAgentActive:Boolean(h0.current),draftBuffer:E_.current||"",thoughtBuffer:m_.current||"",lastAgentEvent:D_.current||null,lastSilenceNotice:k_.current||0,lastAgentResponse:P_.current||null,currentTurnIdRef:h.current||null,steerQueuedTurnIdRef:X_.current||null,thoughtExpanded:Boolean(W_.current),draftExpanded:Boolean(V_.current),agentStatusRef:e0.current||null,silentRecovery:{...W0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[R_,e_,M_,Z_,Q_,t,r,F0,G_,E0,I_,K_,J_,Y0]),y1=P((X)=>{let Y=X||J1();g(),s_.current=Boolean(Y.isAgentRunning),h0.current=Boolean(Y.wasAgentActive),M0(Boolean(Y.isAgentTurnActive)),D_.current=Y.lastAgentEvent||null,k_.current=Number(Y.lastSilenceNotice||0),E_.current=Y.draftBuffer||"",m_.current=Y.thoughtBuffer||"",C_.current=Y.pendingRequest||null,P_.current=Y.lastAgentResponse||null,h.current=Y.currentTurnIdRef||null,X_.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,W0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},W_.current=Boolean(Y.thoughtExpanded),V_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),U_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),N_(Y.pendingRequest||null),L_(Y.currentTurnId||null),j_(Y.steerQueuedTurnId||null),o_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),F_(Y.activeModel||null),S_(Y.activeThinkingLevel||null),n_(Boolean(Y.supportsThinking)),B0(Y.activeModelUsage??null),G0(Y.contextUsage??null)},[g,J1,L_,o_,M0,j_]),U2=P((X)=>{if(!X)return;if(h.current===X)return;h.current=X,W0.current={inFlight:!1,lastAttemptAt:0,turnId:X},L_(X),X_.current=null,j_(null),E_.current="",m_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,P_.current=null,W_.current=!1,V_.current=!1},[L_,j_]),D1=P((X)=>{if(typeof document<"u"){let v=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&v)return}let Y=P_.current;if(!Y||!Y.post)return;if(X&&Y.turnId&&Y.turnId!==X)return;let J=Y.post;if(J.id&&t_.current===J.id)return;let b=String(J?.data?.content||"").trim();if(!b)return;t_.current=J.id||t_.current,P_.current=null;let k=b.replace(/\s+/g," ").slice(0,200),p=q2.current||{},H_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";g0(H_,k)},[g0]),Z6=P(async(X,Y)=>{if(X!=="thought"&&X!=="draft")return;let J=h.current;if(X==="thought"){if(W_.current=Y,J)try{await $6(J,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=J?await _6(J,"thought"):null;if(b?.text)m_.current=b.text;__((k)=>({...k||{text:"",totalLines:0},fullText:m_.current||k?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:k?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(V_.current=Y,J)try{await $6(J,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=J?await _6(J,"draft"):null;if(b?.text)E_.current=b.text;i((k)=>({...k||{text:"",totalLines:0},fullText:E_.current||k?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:k?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),o$=y(null),d$=P(()=>{let X=B.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);o$.current=d$;let K6=P((X)=>{let Y=B.current;if(!Y||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:b}=b0.current||{},k=!(b&&!J),p=k?Y.scrollHeight-Y.scrollTop:Y.scrollTop;X(),requestAnimationFrame(()=>{let $_=B.current;if(!$_)return;if(k){let H_=Math.max($_.scrollHeight-p,0);$_.scrollTop=H_}else{let H_=Math.max($_.scrollHeight-$_.clientHeight,0),v=Math.min(p,H_);$_.scrollTop=v}})},[]),r2=P((X)=>{let Y=B.current;if(!Y||typeof X!=="function"){X?.();return}let J=Y.scrollTop;X(),requestAnimationFrame(()=>{let b=B.current;if(!b)return;let k=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(J,k)})},[]),z6="Queued as a follow-up (one-at-a-time).",Y6="⁣",E1=P((X)=>{if(!X||!Array.isArray(X))return X;let Y=a0.current,J=new Set(Y),b=X.filter((k)=>{if(J.has(k?.id))return!1;if(k?.data?.is_bot_message){let p=k?.data?.content;if(p===z6||p===Y6)return!1}return!0});return b.length===X.length?X:b},[]),{posts:k1,setPosts:V0,hasMore:G6,setHasMore:V$,hasMoreRef:w1,loadPosts:N2,refreshTimeline:P0,loadMore:O6,loadMoreRef:r$}=M8({preserveTimelineScroll:K6,preserveTimelineScrollTop:r2,chatJid:$}),m2=i_(()=>E1(k1),[k1,E0,E1]),q$=P(()=>{let X=l_.current;if(!X)return;V0((Y)=>Y?Y.filter((J)=>J.id!==X):Y),l_.current=null},[V0]),{handleSplitterMouseDown:X6,handleSplitterTouchStart:L6,handleEditorSplitterMouseDown:W6,handleEditorSplitterTouchStart:V6,handleDockSplitterMouseDown:q6,handleDockSplitterTouchStart:U6}=x8({appShellRef:S,sidebarWidthRef:n,editorWidthRef:Y_,dockHeightRef:A_}),b1=P(()=>{if(!s_.current)return;s_.current=!1,k_.current=0,D_.current=null,h.current=null,L_(null),W_.current=!1,V_.current=!1;let X=(E_.current||"").trim();if(E_.current="",m_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,P_.current=null,!X){l({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),k=new Date().toISOString(),p={id:b,timestamp:k,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};l_.current=b,V0(($_)=>$_?G$([...$_,p]):[p]),o$.current?.(),l(null)},[L_]);m(()=>{b0.current={currentHashtag:O,searchQuery:V}},[O,V]);let g_=P(()=>{let X=$;V7(X).then((Y)=>{if(f0.current!==X)return;let J=O0.current,b=Array.isArray(Y?.items)?Y.items.map((k)=>({...k})).filter((k)=>!J.has(k.row_id)):[];if(b.length){o_((k)=>{if(k.length===b.length&&k.every((p,$_)=>p.row_id===b[$_].row_id))return k;return b});return}J.clear(),A0(0),o_((k)=>k.length===0?k:[])}).catch(()=>{if(f0.current!==X)return;o_((Y)=>Y.length===0?Y:[])})},[A0,$,o_]),n0=P(async()=>{let X=$;try{let Y=await F1(X);if(f0.current!==X)return;if(Y)G0(Y)}catch(Y){if(f0.current!==X)return;console.warn("Failed to fetch agent context:",Y)}},[$]),o0=P(async()=>{let X=$;try{let Y=await N6(X);if(f0.current!==X)return null;if(!Y||Y.status!=="active"||!Y.data){if(h0.current){let{currentHashtag:k,searchQuery:p}=b0.current||{};if(!k&&!p)P0()}return h0.current=!1,U0(),e0.current=null,l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,Y??null}h0.current=!0;let J=Y.data;e0.current=J;let b=J.turn_id||J.turnId;if(b)U2(b);if(o({running:!0,clearSilence:!0}),z_(),l(J),Y.thought&&Y.thought.text)__((k)=>{if(k&&k.text&&k.text.length>=Y.thought.text.length)return k;return m_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((k)=>{if(k&&k.text&&k.text.length>=Y.draft.text.length)return k;return E_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[U0,z_,o,P0,U2]),s$=P(async()=>{if(!s_.current)return null;if(C_.current)return null;let X=h.current||null,Y=W0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===X&&J-Y.lastAttemptAt<V1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=X;try{let{currentHashtag:b,searchQuery:k}=b0.current||{};if(!b&&!k)await P0();return await g_(),await o0()}finally{Y.inFlight=!1}},[o0,g_,P0]);m(()=>{let X=Math.min(1000,Math.max(100,Math.floor(W1/2))),Y=setInterval(()=>{if(!s_.current)return;if(C_.current)return;let J=D_.current;if(!J)return;let b=Date.now(),k=b-J,p=v$(e0.current);if(k>=f8){if(!p)l({type:"waiting",title:"Re-syncing after a quiet period…"});s$();return}if(k>=W1){if(b-k_.current>=V1){if(!p){let $_=Math.floor(k/1000);l({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}k_.current=b,s$()}}},X);return()=>clearInterval(Y)},[s$]);let B6=P((X)=>{if(z(X),X!=="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,U0();return}if(!C2.current){C2.current=!0,o0(),n0();return}let{currentHashtag:Y,searchQuery:J}=b0.current;if(!Y&&!J)P0();o0(),n0()},[U0,P0,o0,n0]),Q6=P(async(X)=>{q(X),V0(null),await N2(X)},[N2]),F6=P(async()=>{q(null),H(null),V0(null),await N2()},[N2]),H6=P(async(X,Y=I)=>{if(!X||!X.trim())return;let J=Y==="root"||Y==="all"?Y:"current";R(J),H(X.trim()),q(null),V0(null);try{let b=await t8(X.trim(),50,0,$,J,M);V0(b.results),V$(!1)}catch(b){console.error("Failed to search:",b),V0([])}},[$,M,I]),J6=P(()=>{f(!0),H(null),q(null),R("current"),V0([])},[]),y6=P(()=>{f(!1),H(null),N2()},[N2]),H7=P(()=>{},[]),D6=P(async(X)=>{if(!X)return;let Y=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,b=m2?.filter((p)=>p?.data?.thread_id===Y&&p?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let k=(p)=>{if(!p.length)return;w2((H_)=>{let v=new Set(H_);return p.forEach((O_)=>v.add(O_)),v}),setTimeout(()=>{if(r2(()=>{V0((H_)=>H_?H_.filter((v)=>!p.includes(v.id)):H_)}),w2((H_)=>{let v=new Set(H_);return p.forEach((O_)=>v.delete(O_)),v}),w1.current)r$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await e8(Y,b>0,J);if(p?.ids?.length)k(p.ids)}catch(p){let $_=p?.message||"";if(b===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let v=await e8(Y,!0,J);if(v?.ids?.length)k(v.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${$_}`)}},[$,m2,r2]),A1=P(async()=>{try{let X=await G7();w_(T8(X));let Y=X?.user||{};O2((b)=>{let k=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",p=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===k&&b.avatar_url===p&&b.avatar_background===$_)return b;return{name:k,avatar_url:p,avatar_background:$_}});let J=(X?.agents||[]).find((b)=>b.id==="default");l0(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,Y=await F1(X);if(f0.current!==X)return;if(Y)G0(Y)}catch{}},[l0,$]);m(()=>{A1();let X=h2("sidebarWidth",null),Y=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(n.current=Y,S.current)S.current.style.setProperty("--sidebar-width",`${Y}px`)},[A1]);let a$=I_||t!==null,P1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:b}=X;if(!J&&b===void 0)return;let k=q2.current?.[Y]||{id:Y},p=k.name||null,$_=k.avatar_url??k.avatarUrl??k.avatar??null,H_=!1,v=!1;if(J&&J!==k.name)p=J,v=!0;if(b!==void 0){let O_=typeof b==="string"?b.trim():null,p_=typeof $_==="string"?$_.trim():null,q_=O_||null;if(q_!==(p_||null))$_=q_,H_=!0}if(!v&&!H_)return;if(w_((O_)=>{let q_={...O_[Y]||{id:Y}};if(v)q_.name=p;if(H_)q_.avatar_url=$_;return{...O_,[Y]:q_}}),Y==="default")l0(p,$_,H_?Date.now():null)},[l0]),M1=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,b=X.user_avatar_background??X.userAvatarBackground;if(Y===void 0&&J===void 0&&b===void 0)return;O2((k)=>{let p=typeof Y==="string"&&Y.trim()?Y.trim():k.name||"You",$_=J===void 0?k.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,H_=b===void 0?k.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(k.name===p&&k.avatar_url===$_&&k.avatar_background===H_)return k;return{name:p,avatar_url:$_,avatar_background:H_}})},[]),t$=P((X)=>{if(!X||typeof X!=="object")return;let Y=X.model??X.current;if(Y!==void 0)F_(Y);if(X.thinking_level!==void 0)S_(X.thinking_level??null);if(X.supports_thinking!==void 0)n_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)B0(X.provider_usage??null)},[]),s2=P(()=>{let X=$;O7(X).then((Y)=>{if(f0.current!==X)return;if(Y)t$(Y)}).catch(()=>{})},[t$,$]),m0=P(()=>{X7().then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),I0=P(()=>{j6(M).then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];D0(Y)}).catch(()=>{})},[M]),E6=P((X)=>{let Y=X?.row_id;if(Y==null)return;O0.current.add(Y),o_((J)=>J.filter((b)=>b?.row_id!==Y)),q7(Y,Q1($)).then(()=>{g_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),W("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),g_()})},[$,g_,o_,W]),k6=P((X)=>{let Y=X?.row_id;if(Y==null)return;let J=$0.current.filter((b)=>b?.row_id!==Y).length;O0.current.add(Y),A0(J),o_((b)=>b.filter((k)=>k?.row_id!==Y)),U7(Y,Q1($)).then(()=>{g_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),W("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),g_()})},[A0,$,g_,o_,W]),e$=P((X)=>{if(!X||typeof X!=="object")return;if(m0(),I0(),X?.queued==="followup"||X?.queued==="steer"){g_();return}let Y=X?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))g_()},[m0,I0,g_]),_3=P(()=>{if(Z0.current)Z0.current.abort(),Z0.current=null;d_(null)},[]),U$=P(async(X)=>{let Y=String(X||"").trim();if(!Y)return W("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Z0.current)Z0.current.abort();let J=new AbortController;Z0.current=J,d_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await B7(Y,{signal:J.signal,chatJid:C4($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(k,p)=>{if(k==="side_prompt_start")d_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(k)=>{d_((p)=>p?{...p,thinking:`${p.thinking||""}${k||""}`}:p)},onTextDelta:(k)=>{d_((p)=>p?{...p,answer:`${p.answer||""}${k||""}`}:p)}});if(Z0.current!==J)return!0;d_((k)=>k?{...k,answer:b?.result||k.answer||"",thinking:b?.thinking||k.thinking||"",model:b?.model||null,status:"success",error:null}:k)}catch(b){if(J.signal.aborted)return!0;d_((k)=>k?{...k,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:k)}finally{if(Z0.current===J)Z0.current=null}return!0},[$,W]),w6=P(async({content:X})=>{let Y=M4(X);if(!Y)return!1;if(Y.type==="help")return W("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _3(),W("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U$(Y.question),!0;return!1},[_3,U$,W]),b6=P(()=>{if(c_?.question)U$(c_.question)},[c_,U$]),A6=P(async()=>{let X=f4(c_);if(!X)return;try{let Y=await g2("default",X,null,[],a$?"queue":null,$);e$(Y),W(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){W("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[c_,e$,a$,W]),a2=P(()=>{s2(),m0(),I0(),g_(),n0()},[s2,m0,I0,g_,n0]);m(()=>{a2();let X=setInterval(()=>{s2(),m0(),I0(),g_()},60000);return()=>clearInterval(X)},[a2,s2,m0,I0,g_]),m(()=>{I0()},[I0]),m(()=>{let X=!1;if(V0(null),O)return N2(O),()=>{X=!0};if(V)return t8(V,50,0,$,I,M).then((Y)=>{if(X)return;V0(Y.results),V$(!1)}).catch((Y)=>{if(X)return;console.error("Failed to search:",Y),V0([]),V$(!1)}),()=>{X=!0};return N2(),()=>{X=!0}},[$,O,V,I,M,N2,V$,V0]),m(()=>{let X=x2.current||$;_2.current.set(X,W$())},[$,W$]),m(()=>{let X=x2.current||$;if(X===$)return;_2.current.set(X,W$()),x2.current=$,O0.current.clear(),y1(_2.current.get($)||null),g_(),o0(),n0()},[$,o0,n0,g_,y1,W$]);let P6=P(()=>{let{currentHashtag:X,searchQuery:Y}=b0.current||{};if(!X&&!Y)P0();a2()},[a2,P0]),$3=P((X,Y)=>{let J=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,p=b?b===$:X==="connected"||X==="workspace_update";if(p)P1(Y),M1(Y);if(X==="ui_theme"){J4(Y);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))z_()}if(X==="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),C_.current=null,U0();let v=$;N6(v).then((q_)=>{if(f0.current!==v)return;if(!q_||q_.status!=="active"||!q_.data)return;let R2=q_.data,C1=R2.turn_id||R2.turnId;if(C1)U2(C1);if(o({clearSilence:!0}),y0(R2),q_.thought&&q_.thought.text)m_.current=q_.thought.text,__({text:q_.thought.text,totalLines:q_.thought.totalLines||0});if(q_.draft&&q_.draft.text)E_.current=q_.draft.text,i({text:q_.draft.text,totalLines:q_.draft.totalLines||0})}).catch((q_)=>{console.warn("Failed to fetch agent status:",q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current||{};if(!O_&&!p_)P0();a2();return}if(X==="agent_status"){if(!p){if(Y?.type==="done"||Y?.type==="error")m0(),I0();return}if(Y.type==="done"||Y.type==="error"){if(J&&h.current&&J!==h.current)return;if(Y.type==="done"){D1(J||h.current);let{currentHashtag:v,searchQuery:O_}=b0.current||{};if(!v&&!O_)P0();if(Y.context_usage)G0(Y.context_usage)}if(h0.current=!1,U0(),O0.current.clear(),m0(),g_(),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(J)U2(J);if(o({running:!0,clearSilence:!0}),Y.type==="thinking")E_.current="",m_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0});e0.current=Y,l((v)=>{if(v&&v.type===Y.type&&v.title===Y.title)return v;return Y})}return}if(X==="agent_steer_queued"){if(!p)return;if(J&&h.current&&J!==h.current)return;let v=J||h.current;if(!v)return;X_.current=v,j_(v);return}if(X==="agent_followup_queued"){if(!p)return;let v=Y?.row_id,O_=Y?.content;if(v!=null&&typeof O_==="string"&&O_.trim())o_((p_)=>{if(p_.some((q_)=>q_?.row_id===v))return p_;return[...p_,{row_id:v,content:O_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});g_();return}if(X==="agent_followup_consumed"){if(!p)return;let v=Y?.row_id;if(v!=null){let O_=$0.current.filter((p_)=>p_.row_id!==v).length;A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==v))}g_(),P0();return}if(X==="agent_followup_removed"){if(!p)return;let v=Y?.row_id;if(v!=null){let O_=$0.current.filter((p_)=>p_.row_id!==v).length;O0.current.add(v),A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==v))}g_();return}if(X==="agent_draft_delta"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)U2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)E_.current="";if(Y?.delta)E_.current+=Y.delta;let v=Date.now();if(!S2.current||v-S2.current>=100){S2.current=v;let O_=E_.current,p_=q1(O_);if(V_.current)i((q_)=>({text:q_?.text||"",totalLines:p_,fullText:O_}));else i({text:O_,totalLines:p_})}return}if(X==="agent_draft"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)U2(J);o({running:!0,clearSilence:!0});let v=Y.text||"",O_=Y.mode||(Y.kind==="plan"?"replace":"append"),p_=Number.isFinite(Y.total_lines)?Y.total_lines:v?v.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(O_==="replace")U_(v);else U_((q_)=>(q_||"")+v);else if(!V_.current)E_.current=v,i({text:v,totalLines:p_});return}if(X==="agent_thought_delta"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)U2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)m_.current="";if(typeof Y?.delta==="string")m_.current+=Y.delta;let v=Date.now();if(W_.current&&(!$2.current||v-$2.current>=100)){$2.current=v;let O_=m_.current;__((p_)=>({text:p_?.text||"",totalLines:q1(O_),fullText:O_}))}return}if(X==="agent_thought"){if(!p)return;if(J&&h.current&&J!==h.current)return;if(J&&!h.current)U2(J);o({running:!0,clearSilence:!0});let v=Y.text||"",O_=Number.isFinite(Y.total_lines)?Y.total_lines:v?v.replace(/\r\n/g,`
`).split(`
`).length:0;if(!W_.current)m_.current=v,__({text:v,totalLines:O_});return}if(X==="model_changed"){if(!p)return;if(Y?.model!==void 0)F_(Y.model);if(Y?.thinking_level!==void 0)S_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)n_(Boolean(Y.supports_thinking));let v=$;F1(v).then((O_)=>{if(f0.current!==v)return;if(O_)G0(O_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(d8(X)){if(!p)return;if(r8(X,Y),X==="extension_ui_notify"&&typeof Y?.message==="string")W(Y.message,null,Y?.type||"info");if(X==="extension_ui_error"&&typeof Y?.error==="string")W("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:$_,searchQuery:H_}=b0.current;if(X==="agent_response"){if(!p)return;q$(),P_.current={post:Y,turnId:h.current}}if(!$_&&!H_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))V0((v)=>{if(!v)return[Y];if(v.some((O_)=>O_.id===Y.id))return v;return[...v,Y]}),o$.current?.();if(X==="interaction_updated"){if(!p)return;V0((v)=>{if(!v)return v;if(!v.some((O_)=>O_.id===Y.id))return v;return v.map((O_)=>O_.id===Y.id?Y:O_)})}if(X==="interaction_deleted"){if(!p)return;let v=Y?.ids||[];if(v.length){r2(()=>{V0((q_)=>q_?q_.filter((R2)=>!v.includes(R2.id)):q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current;if(w1.current&&!O_&&!p_)r$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[U0,z_,$,r$,o,D1,r2,m0,I0,P0,q$,U2,y0,P1,M1,s2,g_,o_]);m(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=$3,X.reset=()=>{q$(),U0(),l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),N_(null)},X.finalize=()=>b1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[U0,b1,$3,q$]),A8({handleSseEvent:$3,handleConnectionStatusChange:B6,loadPosts:N2,onWake:P6,chatJid:$}),m(()=>{if(!m2||m2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let Y=X.slice(5);u(Y),history.replaceState(null,"",location.pathname+location.search)},[m2,u]);let N3=t!==null;m(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:b}=b0.current||{},k=!J&&!b;if(N3){if(k)P0();g_(),o0(),n0()}else{if(k)P0();o0(),n0()}},N3?15000:60000);return()=>clearInterval(Y)},[K,N3,o0,n0,g_,P0]),m(()=>{return a8(()=>{o0(),n0(),g_()})},[o0,n0,g_]);let M6=P(()=>{N0((X)=>!X)},[]),C6=P((X)=>{if(typeof window>"u")return;let Y=String(X||"").trim();if(!Y||Y===$)return;let J=X$(window.location.href,Y,{chatOnly:N});window.location.assign(J)},[N,$]),x6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;let X=B_.agent_name||"",Y=B_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let b=window.prompt("Agent handle (without @)",X);if(b===null)return;try{let k=await L7(B_.chat_jid,{displayName:J,agentName:b});await Promise.allSettled([m0(),I0()]);let p=k?.branch?.agent_name||String(b||"").trim()||X;W("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(k){let p=k instanceof Error?k.message:String(k||"Could not rename branch.");W("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[B_,m0,I0,W]),S6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;if(B_.chat_jid===(B_.root_chat_jid||B_.chat_jid)){W("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=B_.display_name||`@${B_.agent_name||B_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await W7(B_.chat_jid),await Promise.allSettled([m0(),I0()]);let b=B_.root_chat_jid||"web:default";W("Branch pruned",`${Y} has been archived.`,"info",3000);let k=X$(window.location.href,b,{chatOnly:N});window.location.assign(k)}catch(b){let k=b instanceof Error?b.message:String(b||"Could not prune branch.");W("Could not prune branch",k||"Could not prune branch.","warning",5000)}},[N,B_,m0,I0,W]);m(()=>{if(!j||typeof window>"u")return;let X=!1;return(async()=>{try{v_({status:"running",message:"Preparing a new chat branch…"});let Y=await b$(Z);if(X)return;let J=Y?.branch,b=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let k=X$(window.location.href,b,{chatOnly:!0});window.location.replace(k)}catch(Y){if(X)return;v_({status:"error",message:B1(Y)})}})(),()=>{X=!0}},[j,Z]);let f6=P(async()=>{if(typeof window>"u"||G)return;let X=v8($);if(!X){W("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=i8(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))W("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=g8(X);if(!Y){W("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}c8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await b$($))?.branch,k=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!k)throw Error("Branch fork did not return a chat id.");try{let $_=await Q3();_0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await j6(M);D0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let p=X$(window.location.href,k,{chatOnly:!0});p8(Y,p)}catch(J){h8(Y),W("Could not open branch window",B1(J),"error",5000)}},[$,M,G,W]);m(()=>{if(!X0)return;if(typeof window>"u")return;let X=S.current;if(!X)return;if(!Y_.current){let Y=h2("editorWidth",null),J=n.current||280;Y_.current=Number.isFinite(Y)?Y:J}if(X.style.setProperty("--editor-width",`${Y_.current}px`),!A_.current){let Y=h2("dockHeight",null);A_.current=Number.isFinite(Y)?Y:200}X.style.setProperty("--dock-height",`${A_.current}px`)},[X0]),m(()=>{if(!S0||N)return;let X=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),q0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[q0,S0,N]);let I6=Boolean(J_&&J_===(t?.turn_id||G_));if(j)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${b_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${b_.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${c0?"":" workspace-collapsed"}${X0?" editor-open":""}${N?" chat-only":""}`} ref=${S}>
            ${!N&&U`
                <${E8}
                    onFileSelect=${W2}
                    visible=${c0}
                    active=${c0||X0}
                    onOpenEditor=${p0}
                />
                <button
                    class=${`workspace-toggle-tab${c0?" open":" closed"}`}
                    onClick=${M6}
                    title=${c0?"Hide workspace":"Show workspace"}
                    aria-label=${c0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${X6} onTouchStart=${L6}></div>
            `}
            ${M2&&U`
                <div class="editor-pane-container">
                    ${X0&&U`
                        <${k8}
                            tabs=${j0}
                            activeId=${T_}
                            onActivate=${b2}
                            onClose=${J2}
                            onCloseOthers=${H0}
                            onCloseAll=${A2}
                            onTogglePin=${o2}
                            onTogglePreview=${y2}
                            previewTabs=${T0}
                            onToggleDock=${S0?q0:void 0}
                            dockVisible=${S0&&Y2}
                        />
                    `}
                    ${X0&&U`<div class="editor-pane-host" ref=${V2}></div>`}
                    ${X0&&T_&&T0.has(T_)&&U`
                        <${b8}
                            getContent=${()=>a_.current?.getContent?.()}
                            path=${T_}
                            onClose=${()=>y2(T_)}
                        />
                    `}
                    ${S0&&Y2&&U`<div class="dock-splitter" onMouseDown=${q6} onTouchStart=${U6}></div>`}
                    ${S0&&U`<div class=${`dock-panel${Y2?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${q0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${W6} onTouchStart=${V6}></div>
            `}
            <div class="container">
                ${V&&u8()&&U`<div class="search-results-spacer"></div>`}
                ${N&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${B_?.display_name||B_?.agent_name?`@${B_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${B_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Q0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>C6(X.currentTarget.value)}
                                    >
                                        ${Q0.map((X)=>U`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${B_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${x6}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${B_?.chat_jid&&B_.chat_jid!==(B_.root_chat_jid||B_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${S6}
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
                ${(O||V)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${F6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${V} · ${e}`}</span>
                    </div>
                `}
                <${N8}
                    posts=${m2}
                    hasMore=${G6}
                    onLoadMore=${O6}
                    timelineRef=${B}
                    onHashtagClick=${Q6}
                    onMessageRef=${D}
                    onScrollToMessage=${u}
                    onFileRef=${Q}
                    onPostClick=${void 0}
                    onDeletePost=${D6}
                    emptyMessage=${O?`No posts with #${O}`:V?`No results for "${V}"`:void 0}
                    agents=${y_}
                    user=${G2}
                    reverse=${!(V&&!O)}
                    removingPostIds=${n2}
                    searchQuery=${V}
                />
                <${g4}
                    status=${t}
                    draft=${Z_}
                    plan=${Q_}
                    thought=${r}
                    pendingRequest=${K_}
                    intent=${c}
                    turnId=${G_}
                    steerQueued=${I6}
                    onPanelToggle=${Z6}
                />
                <${I4}
                    session=${c_}
                    onClose=${_3}
                    onRetry=${b6}
                    onInject=${A6}
                />
                <${W4}
                    onPost=${()=>{N2(),d$()}}
                    onFocus=${d$}
                    searchMode=${w}
                    searchScope=${I}
                    onSearch=${H6}
                    onSearchScopeChange=${R}
                    onEnterSearch=${J6}
                    onExitSearch=${y6}
                    fileRefs=${x}
                    onRemoveFileRef=${J0}
                    onClearFileRefs=${f2}
                    messageRefs=${A}
                    onRemoveMessageRef=${d}
                    onClearMessageRefs=${s}
                    activeEditorPath=${N?null:T_}
                    onAttachEditorFile=${N?void 0:E}
                    onOpenFilePill=${Q}
                    followupQueueCount=${w0}
                    followupQueueItems=${E0}
                    onInjectQueuedFollowup=${E6}
                    onRemoveQueuedFollowup=${k6}
                    onSubmitIntercept=${w6}
                    onMessageResponse=${e$}
                    onPopOutChat=${G?void 0:f6}
                    isAgentActive=${a$}
                    activeChatAgents=${x_}
                    currentChatJid=${$}
                    activeModel=${R_}
                    modelUsage=${e_}
                    thinkingLevel=${M_}
                    supportsThinking=${Y0}
                    contextUsage=${F0}
                    notificationsEnabled=${t0}
                    notificationPermission=${C0}
                    onToggleNotifications=${v0}
                    onModelChange=${F_}
                    onModelStateChange=${t$}
                />
                <${p4} status=${K} />
                <${c4}
                    request=${K_}
                    onRespond=${()=>{N_(null),C_.current=null}}
                />
            </div>
        </div>
    `}function F7(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${Q7} locationParams=${_} />`}$4(U`<${F7} />`,document.getElementById("app"));

//# debugId=CBEBAF5048BB4C9A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
