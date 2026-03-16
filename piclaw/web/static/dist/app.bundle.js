var $9=Object.defineProperty;var j9=(_)=>_;function Z9(_,$){this[_]=j9.bind(null,$)}var N9=(_,$)=>{for(var j in $)$9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Z9.bind($,j)})};var z9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var y2,l_,r1,K9,D$,u1,a1,t1,e1,G4,N4,z4,Y9,D2={},E2=[],G9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w2=Array.isArray;function B$(_,$){for(var j in $)_[j]=$[j];return _}function V4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function _3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?y2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return F2(_,K,Z,N,null)}function F2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++r1:N,__i:-1,__u:0};return N==null&&l_.vnode!=null&&l_.vnode(z),z}function A2(_){return _.children}function H2(_,$){this.props=_,this.context=$}function m$(_,$){if($==null)return _.__?m$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?m$(_):null}function V9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=B$({},$);z.__v=$.__v+1,l_.vnode&&l_.vnode(z),W4(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?m$($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,N3(Z,z,N),$.__e=$.__=null,z.__e!=j&&$3(z)}}function $3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),$3(_)}function v1(_){(!_.__d&&(_.__d=!0)&&D$.push(_)&&!k2.__r++||u1!=l_.debounceRendering)&&((u1=l_.debounceRendering)||a1)(k2)}function k2(){try{for(var _,$=1;D$.length;)D$.length>$&&D$.sort(t1),_=D$.shift(),$=D$.length,V9(_)}finally{D$.length=k2.__r=0}}function j3(_,$,j,Z,N,z,K,G,W,V,L){var q,H,w,S,R,v,x,U=Z&&Z.__k||E2,A=$.length;for(W=W9(j,$,U,W,A),q=0;q<A;q++)(w=j.__k[q])!=null&&(H=w.__i!=-1&&U[w.__i]||D2,w.__i=q,v=W4(_,w,H,N,z,K,G,W,V,L),S=w.__e,w.ref&&H.ref!=w.ref&&(H.ref&&X4(H.ref,null,w),L.push(w.ref,w.__c||S,w)),R==null&&S!=null&&(R=S),(x=!!(4&w.__u))||H.__k===w.__k?W=Z3(w,W,_,x):typeof w.type=="function"&&v!==void 0?W=v:S&&(W=S.nextSibling),w.__u&=-7);return j.__e=R,W}function W9(_,$,j,Z,N){var z,K,G,W,V,L=j.length,q=L,H=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=F2(null,K,null,null,null):w2(K)?K=_.__k[z]=F2(A2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=F2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,W=z+H,K.__=_,K.__b=_.__b+1,G=null,(V=K.__i=X9(K,j,W,q))!=-1&&(q--,(G=j[V])&&(G.__u|=2)),G==null||G.__v==null?(V==-1&&(N>L?H--:N<L&&H++),typeof K.type!="function"&&(K.__u|=4)):V!=W&&(V==W-1?H--:V==W+1?H++:(V>W?H--:H++,K.__u|=4))):_.__k[z]=null;if(q)for(z=0;z<L;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=m$(G)),K3(G,G));return Z}function Z3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=Z3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=m$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function X9(_,$,j,Z){var N,z,K,G=_.key,W=_.type,V=$[j],L=V!=null&&(2&V.__u)==0;if(V===null&&G==null||L&&G==V.key&&W==V.type)return j;if(Z>(L?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((V=$[K=N>=0?N--:z++])!=null&&(2&V.__u)==0&&G==V.key&&W==V.type)return K}return-1}function m1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||G9.test($)?j:j+"px"}function U2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||m1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||m1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(e1,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=G4,_.addEventListener($,z?z4:N4,z)):_.removeEventListener($,z?z4:N4,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function g1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G4++;else if($.t<j.u)return;return j(l_.event?l_.event($):$)}}}function W4(_,$,j,Z,N,z,K,G,W,V){var L,q,H,w,S,R,v,x,U,A,b,p,__,t,n,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(W=!!(32&j.__u),z=[G=$.__e=j.__e]),(L=l_.__b)&&L($);_:if(typeof N_=="function")try{if(x=$.props,U=N_.prototype&&N_.prototype.render,A=(L=N_.contextType)&&Z[L.__c],b=L?A?A.props.value:L.__:Z,j.__c?v=(q=$.__c=j.__c).__=q.__E:(U?$.__c=q=new N_(x,b):($.__c=q=new H2(x,b),q.constructor=N_,q.render=O9),A&&A.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),U&&q.__s==null&&(q.__s=q.state),U&&N_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=B$({},q.__s)),B$(q.__s,N_.getDerivedStateFromProps(x,q.__s))),w=q.props,S=q.state,q.__v=$,H)U&&N_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),U&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(U&&N_.getDerivedStateFromProps==null&&x!==w&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(x,b),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(x,q.__s,b)===!1){$.__v!=j.__v&&(q.props=x,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(l){l&&(l.__=$)}),E2.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&K.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(x,q.__s,b),U&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(w,S,R)})}if(q.context=b,q.props=x,q.__P=_,q.__e=!1,p=l_.__r,__=0,U)q.state=q.__s,q.__d=!1,p&&p($),L=q.render(q.props,q.state,q.context),E2.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,p&&p($),L=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++__<25);q.state=q.__s,q.getChildContext!=null&&(Z=B$(B$({},Z),q.getChildContext())),U&&!H&&q.getSnapshotBeforeUpdate!=null&&(R=q.getSnapshotBeforeUpdate(w,S)),t=L!=null&&L.type===A2&&L.key==null?z3(L.props.children):L,G=j3(_,w2(t)?t:[t],$,j,Z,N,z,K,G,W,V),q.base=$.__e,$.__u&=-161,q.__h.length&&K.push(q),v&&(q.__E=q.__=null)}catch(l){if($.__v=null,W||z!=null)if(l.then){for($.__u|=W?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(n=z.length;n--;)V4(z[n]);K4($)}else $.__e=j.__e,$.__k=j.__k,l.then||K4($);l_.__e(l,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=q9(j.__e,$,j,Z,N,z,K,W,V);return(L=l_.diffed)&&L($),128&$.__u?void 0:G}function K4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(K4))}function N3(_,$,j){for(var Z=0;Z<j.length;Z++)X4(j[Z],j[++Z],j[++Z]);l_.__c&&l_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){l_.__e(z,N.__v)}})}function z3(_){return typeof _!="object"||_==null||_.__b>0?_:w2(_)?_.map(z3):B$({},_)}function q9(_,$,j,Z,N,z,K,G,W){var V,L,q,H,w,S,R,v=j.props||D2,x=$.props,U=$.type;if(U=="svg"?N="http://www.w3.org/2000/svg":U=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(V=0;V<z.length;V++)if((w=z[V])&&"setAttribute"in w==!!U&&(U?w.localName==U:w.nodeType==3)){_=w,z[V]=null;break}}if(_==null){if(U==null)return document.createTextNode(x);_=document.createElementNS(N,U,x.is&&x),G&&(l_.__m&&l_.__m($,z),G=!1),z=null}if(U==null)v===x||G&&_.data==x||(_.data=x);else{if(z=z&&y2.call(_.childNodes),!G&&z!=null)for(v={},V=0;V<_.attributes.length;V++)v[(w=_.attributes[V]).name]=w.value;for(V in v)w=v[V],V=="dangerouslySetInnerHTML"?q=w:V=="children"||(V in x)||V=="value"&&("defaultValue"in x)||V=="checked"&&("defaultChecked"in x)||U2(_,V,null,w,N);for(V in x)w=x[V],V=="children"?H=w:V=="dangerouslySetInnerHTML"?L=w:V=="value"?S=w:V=="checked"?R=w:G&&typeof w!="function"||v[V]===w||U2(_,V,w,v[V],N);if(L)G||q&&(L.__html==q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(q&&(_.innerHTML=""),j3($.type=="template"?_.content:_,w2(H)?H:[H],$,j,Z,U=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&m$(j,0),G,W),z!=null)for(V=z.length;V--;)V4(z[V]);G||(V="value",U=="progress"&&S==null?_.removeAttribute("value"):S!=null&&(S!==_[V]||U=="progress"&&!S||U=="option"&&S!=v[V])&&U2(_,V,S,v[V],N),V="checked",R!=null&&R!=_[V]&&U2(_,V,R,v[V],N))}return _}function X4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){l_.__e(N,j)}}function K3(_,$,j){var Z,N;if(l_.unmount&&l_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||X4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){l_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&K3(Z[N],$,j||typeof _.type!="function");j||V4(_.__e),_.__c=_.__=_.__e=void 0}function O9(_,$,j){return this.constructor(_,j)}function Y3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),l_.__&&l_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],W4($,_=(!Z&&j||$).__k=_3(A2,null,[_]),N||D2,D2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?y2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),N3(z,_,K)}y2=E2.slice,l_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},r1=0,K9=function(_){return _!=null&&_.constructor===void 0},H2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B$({},this.state),typeof _=="function"&&(_=_(B$({},j),this.props)),_&&B$(j,_),_!=null&&this.__v&&($&&this._sb.push($),v1(this))},H2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),v1(this))},H2.prototype.render=A2,D$=[],a1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t1=function(_,$){return _.__v.__b-$.__v.__b},k2.__r=0,e1=/(PointerCapture)$|Capture$/i,G4=0,N4=g1(!1),z4=g1(!0),Y9=0;var e$,V0,Z4,c1,_2=0,G3=[],G0=l_,p1=G0.__b,h1=G0.__r,i1=G0.diffed,l1=G0.__c,n1=G0.unmount,d1=G0.__;function q4(_,$){G0.__h&&G0.__h(V0,_,_2||$),_2=0;var j=V0.__H||(V0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return _2=1,L9(W3,_)}function L9(_,$,j){var Z=q4(e$++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):W3(void 0,$),function(G){var W=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(W,G);W!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=V0,!V0.__f)){var N=function(G,W,V){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!z||z.call(this,G,W,V);var q=Z.__c.props!==G;return L.some(function(H){if(H.__N){var w=H.__[0];H.__=H.__N,H.__N=void 0,w!==H.__[0]&&(q=!0)}}),z&&z.call(this,G,W,V)||q};V0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=V0;V0.componentWillUpdate=function(G,W,V){if(this.__e){var L=z;z=void 0,N(G,W,V),z=L}K&&K.call(this,G,W,V)},V0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=q4(e$++,3);!G0.__s&&V3(j.__H,$)&&(j.__=_,j.u=$,V0.__H.__h.push(j))}function D(_){return _2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=q4(e$++,7);return V3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return _2=8,n_(function(){return _},$)}function B9(){for(var _;_=G3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(J2),$.__h.some(Y4),$.__h=[]}catch(j){$.__h=[],G0.__e(j,_.__v)}}}G0.__b=function(_){V0=null,p1&&p1(_)},G0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),d1&&d1(_,$)},G0.__r=function(_){h1&&h1(_),e$=0;var $=(V0=_.__c).__H;$&&(Z4===V0?($.__h=[],V0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(J2),$.__h.some(Y4),$.__h=[],e$=0)),Z4=V0},G0.diffed=function(_){i1&&i1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(G3.push($)!==1&&c1===G0.requestAnimationFrame||((c1=G0.requestAnimationFrame)||Q9)(B9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z4=V0=null},G0.__c=function(_,$){$.some(function(j){try{j.__h.some(J2),j.__h=j.__h.filter(function(Z){return!Z.__||Y4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],G0.__e(Z,j.__v)}}),l1&&l1(_,$)},G0.unmount=function(_){n1&&n1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{J2(Z)}catch(N){$=N}}),j.__H=void 0,$&&G0.__e($,j.__v))};var s1=typeof requestAnimationFrame=="function";function Q9(_){var $,j=function(){clearTimeout(Z),s1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);s1&&($=requestAnimationFrame(j))}function J2(_){var $=V0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),V0=$}function Y4(_){var $=V0;_.__c=_.__(),V0=$}function V3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function W3(_,$){return typeof $=="function"?$(_):$}var X3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,X3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},o1=new Map;function U9(_){var $=o1.get(this);return $||($=new Map,o1.set(this,$)),($=X3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",W=[0],V=function(H){z===1&&(H||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?W.push(0,H,K):z===3&&(H||K)?(W.push(3,H,K),z=2):z===2&&K==="..."&&H?W.push(4,H,0):z===2&&K&&!H?W.push(5,0,!0,K):z>=5&&((K||!H&&z===5)&&(W.push(z,0,K,N),z=6),H&&(W.push(z,H,0,N),z=6)),K=""},L=0;L<j.length;L++){L&&(z===1&&V(),V(L));for(var q=0;q<j[L].length;q++)Z=j[L][q],z===1?Z==="<"?(V(),W=[W],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(V(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[L][q+1]===">")?(V(),z===3&&(W=W[0]),z=W,(W=W[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,W=W[0])}return V(),W}(_)),$),arguments,[])).length>1?$:$[0]}var B=U9.bind(_3);var s0={};N9(s0,{uploadWorkspaceFile:()=>b2,uploadMedia:()=>J4,updateWorkspaceFile:()=>I9,submitAdaptiveCardAction:()=>D4,streamSidePrompt:()=>b9,steerAgentQueueItem:()=>M9,setWorkspaceVisibility:()=>N2,setAgentThoughtVisibility:()=>y4,sendPeerAgentMessage:()=>y9,sendAgentMessage:()=>g$,searchPosts:()=>L4,respondToAgentRequest:()=>M2,renameWorkspaceFile:()=>I4,renameChatBranch:()=>E9,removeAgentQueueItem:()=>P9,pruneChatBranch:()=>k9,moveWorkspaceEntry:()=>x4,getWorkspaceTree:()=>Z2,getWorkspaceRawUrl:()=>C2,getWorkspaceFile:()=>M4,getWorkspaceDownloadUrl:()=>T4,getWorkspaceBranch:()=>C9,getTimeline:()=>$2,getThumbnailUrl:()=>w4,getThread:()=>B4,getPostsByHashtag:()=>O4,getMediaUrl:()=>Z$,getMediaText:()=>A4,getMediaInfo:()=>c$,getMediaBlob:()=>P4,getChatBranches:()=>D9,getAgents:()=>F4,getAgentThought:()=>k4,getAgentStatus:()=>H4,getAgentQueueState:()=>A9,getAgentModels:()=>j2,getAgentContext:()=>w9,getActiveChatAgents:()=>U4,forkChatBranch:()=>P2,deleteWorkspaceFile:()=>S4,deletePost:()=>Q4,createWorkspaceFile:()=>C4,createReply:()=>J9,createPost:()=>H9,attachWorkspaceFile:()=>b4,addToWhitelist:()=>E4,SSEClient:()=>I2});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function q3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function F9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let W=N.split(`

`);N=W.pop()||"";for(let V of W){let L=q3(V);if(L)$(L.event,L.data)}}N+=Z.decode();let z=q3(N);if(z)$(z.event,z.data)}async function $2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function O4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function L4(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",W=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${W}`)}async function B4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function H9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function J9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Q4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function g$(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return f_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function U4(){return f_("/agent/active-chats")}async function D9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function P2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function E9(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function k9(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function y9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function F4(){return f_("/agent/roster")}async function H4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function w9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function A9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function P9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function D4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function b9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await F9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function E4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function k4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function y4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z$(_){return`/media/${_}`}function w4(_){return`/media/${_}/thumbnail`}async function c$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function A4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function P4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Z2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function C9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function M4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function I9(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function b4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function b2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let W=await G.json().catch(()=>({error:"Upload failed"})),V=Error(W.error||`HTTP ${G.status}`);throw V.status=G.status,V.code=W.code,V}return G.json()}async function C4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function I4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function x4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function N2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function C2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function p$(_,$=!1){let j=o0(_);if(j===null)return $;return j==="true"}function h$(_,$=null){let j=o0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function x2(_){return String(_||"").trim().toLowerCase()}function f4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return x2($[1]||"")}function O3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=x2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function L3(_,$,j={}){let Z=f4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return O3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return x2(z?.agent_name).startsWith(Z)})}function R4(_){let $=x2(_);return $?`@${$} `:""}function B3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return O3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function Q3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function N$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,W=`${_}-file-name`,V=`${_}-file-remove`,L=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${L}
      <span class=${W}>${$}</span>
      ${Z&&B`
        <button
          class=${V}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var x9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function S9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${U3(j)} / ${U3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,W=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function U3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function F3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:W=[],onRemoveFileRef:V,onClearFileRefs:L,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:w,activeModel:S=null,modelUsage:R=null,thinkingLevel:v=null,supportsThinking:x=!1,contextUsage:U=null,notificationsEnabled:A=!1,notificationPermission:b="default",onToggleNotifications:p,onModelChange:__,onModelStateChange:t,activeEditorPath:n=null,onAttachEditorFile:N_,onOpenFilePill:l,followupQueueItems:L_=[],onInjectQueuedFollowup:S_,onRemoveQueuedFollowup:s,onSubmitIntercept:$_,onMessageResponse:z_,onPopOutChat:Z_,isAgentActive:W_=!1,activeChatAgents:O_=[],currentChatJid:k_="web:default"}){let[G_,A_]=T(""),[B_,j0]=T(""),[y_,R_]=T([]),[x_,a_]=T(!1),[K_,a]=T([]),[w_,X_]=T(0),[H_,Q_]=T(!1),[g_,U_]=T([]),[P_,e_]=T(0),[t_,T_]=T(!1),[Z0,N0]=T(!1),[b_,_0]=T(!1),[J0,y0]=T([]),[D0,W0]=T(!1),[w0,d_]=T(0),u_=D(null),I0=D(null),h_=D(null),s_=D(null),A0=D(null),J_=D(null),C=D(0),e=200,M_=(Q)=>{let I=new Set,f=[];for(let d of Q||[]){if(typeof d!=="string")continue;let Y_=d.trim();if(!Y_||I.has(Y_))continue;I.add(Y_),f.push(Y_)}return f},c_=()=>{let Q=o0("piclaw_compose_history");if(!Q)return[];try{let I=JSON.parse(Q);if(!Array.isArray(I))return[];return M_(I)}catch{return[]}},P0=(Q)=>{o_("piclaw_compose_history",JSON.stringify(Q))},a0=D(c_()),z0=D(-1),X0=D(""),O0=G_.trim()||y_.length>0||W.length>0||q.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),x0=typeof window<"u"&&typeof Notification<"u",h0=typeof window<"u"?Boolean(window.isSecureContext):!1,n$=x0&&h0&&b!=="denied",k$=b==="granted"&&A,l0=k$?"Disable notifications":"Enable notifications",K0=B3(O_,{currentChatJid:k_,limit:4}),K$=K0.length>0,q0=!j&&Q3({footerWidth:w0,visibleAgentCount:K0.length,hasContextIndicator:Boolean(U&&U.percent!=null)}),Y0=S||"",v_=x&&v?` (${v})`:"",u0=v_.trim()?`${v}`:"",S0=typeof R?.hint_short==="string"?R.hint_short.trim():"",Y$=[u0||null,S0||null].filter(Boolean).join(" • "),F$=[Y0?`Current model: ${Y0}${v_}`:null,R?.plan?`Plan: ${R.plan}`:null,S0||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),y$=Z0?"Switching model…":F$.join(" • ")||`Current model: ${Y0}${v_} (tap to open model picker)`,E0=(Q)=>{if(!Q||typeof Q!=="object")return;let I=Q.model??Q.current;if(typeof t==="function")t({model:I??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(I&&typeof __==="function")__(I)},w$=(Q)=>{let I=Q||u_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},d$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Files:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:Q,fileRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_))Y_.push(I_.replace(/^\s*-\s+/,"").trim());else if(!I_.trim())break;else break}if(Y_.length===0)return{content:Q,fileRefs:[]};let C_=f.slice(0,d),$0=f.slice(D_);return{content:[...C_,...$0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y_}},A$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Referenced messages:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:Q,messageRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_)){let g0=I_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(g0)Y_.push(g0[1])}else if(!I_.trim())break;else break}if(Y_.length===0)return{content:Q,messageRefs:[]};let C_=f.slice(0,d),$0=f.slice(D_);return{content:[...C_,...$0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y_}},s$=(Q)=>{let I=d$(Q||""),f=A$(I.content||"");return{text:f.content||"",fileRefs:I.fileRefs,messageRefs:f.messageRefs}},P$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){Q_(!1),a([]);return}let I=Q.toLowerCase().split(" ")[0];if(I.length<1){Q_(!1),a([]);return}let f=x9.filter((d)=>d.name.startsWith(I)||d.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(f.length>0&&!(f.length===1&&f[0].name===I))T_(!1),U_([]),a(f),X_(0),Q_(!0);else Q_(!1),a([])},L0=(Q)=>{let I=G_,f=I.indexOf(" "),d=f>=0?I.slice(f):"",Y_=Q.name+d;A_(Y_),Q_(!1),a([]),requestAnimationFrame(()=>{let D_=u_.current;if(!D_)return;let C_=Y_.length;D_.selectionStart=C_,D_.selectionEnd=C_,D_.focus()})},H$=(Q)=>{if(f4(Q)==null){T_(!1),U_([]);return}let I=L3(O_,Q,{currentChatJid:k_});if(I.length>0&&!(I.length===1&&R4(I[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))Q_(!1),a([]),U_(I),e_(0),T_(!0);else T_(!1),U_([])},k0=(Q)=>{let I=R4(Q?.agent_name);if(!I)return;A_(I),T_(!1),U_([]),requestAnimationFrame(()=>{let f=u_.current;if(!f)return;let d=I.length;f.selectionStart=d,f.selectionEnd=d,f.focus()})},F0=(Q)=>{if(j)j0(Q);else A_(Q),P$(Q),H$(Q);requestAnimationFrame(()=>w$())},G$=(Q)=>{let I=j?B_:G_,f=I&&!I.endsWith(`
`)?`
`:"",d=`${I}${f}${Q}`.trimStart();F0(d)},q2=(Q)=>{let I=Q?.command?.model_label;if(I)return I;let f=Q?.command?.message;if(typeof f==="string"){let d=f.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},B0=async(Q)=>{if(j||Z0)return;N0(!0);try{let I=await g$("default",Q,null,[],null,k_),f=q2(I);E0({model:f??S??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let d=await j2(k_);if(d)E0(d)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{N0(!1)}},M$=async()=>{await B0("/cycle-model")},b$=async(Q)=>{if(!Q||Z0)return;if(await B0(`/model ${Q}`))_0(!1)},V$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),_0((I)=>!I)},C$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return W_?"queue":null},v0=async(Q,I,f={})=>{let{includeMedia:d=!0,includeFileRefs:Y_=!0,includeMessageRefs:D_=!0,clearAfterSubmit:C_=!0,recordHistory:$0=!0}=f||{},f0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:G_,I_=typeof f0==="string"?f0:"";if(!I_.trim()&&(d?y_.length===0:!0)&&(Y_?W.length===0:!0)&&(D_?q.length===0:!0))return;Q_(!1),a([]),T_(!1),U_([]);let g0=d?[...y_]:[],q$=Y_?[...W]:[],J$=D_?[...q]:[],O$=I_.trim();if($0&&O$){let O=a0.current,F=M_(O.filter((E)=>E!==O$));if(F.push(O$),F.length>200)F.splice(0,F.length-200);a0.current=F,P0(F),z0.current=-1,X0.current=""}if(C_)A_(""),R_([]),L?.(),w?.();(async()=>{try{if(await $_?.({content:O$,submitMode:I,fileRefs:q$,messageRefs:J$,mediaFiles:g0})){_?.();return}let F=[];for(let i of g0){let g=await J4(i);F.push(g.id)}let E=q$.length?`Files:
${q$.map((i)=>`- ${i}`).join(`
`)}`:"",k=J$.length?`Referenced messages:
${J$.map((i)=>`- message:${i}`).join(`
`)}`:"",m=F.length?`Images:
${F.map((i,g)=>{let Q0=g0[g]?.name||`image-${g+1}`;return`- attachment:${i} (${Q0})`}).join(`
`)}`:"",r=[O$,E,k,m].filter(Boolean).join(`

`),o=await g$("default",r,null,F,C$(I),k_);if(z_?.(o),o?.command){E0({model:o.command.model_label??S??null,thinking_level:o.command.thinking_level,supports_thinking:o.command.supports_thinking});try{let i=await j2(k_);if(i)E0(i)}catch{}}_?.()}catch(O){console.error("Failed to post:",O)}})()},e0=(Q)=>{S_?.(Q)},T0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),j0(""),G?.();return}if(t_&&g_.length>0){let I=u_.current?.value??(j?B_:G_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))T_(!1),U_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),e_((f)=>(f+1)%g_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),e_((f)=>(f-1+g_.length)%g_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),k0(g_[P_]);return}if(Q.key==="Escape"){Q.preventDefault(),T_(!1),U_([]);return}}}if(H_&&K_.length>0){let I=u_.current?.value??(j?B_:G_);if(!String(I||"").startsWith("/"))Q_(!1),a([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),X_((f)=>(f+1)%K_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),X_((f)=>(f-1+K_.length)%K_.length);return}if(Q.key==="Tab"){Q.preventDefault(),L0(K_[w_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(u_.current?.value??(j?B_:G_)).includes(" ")){Q.preventDefault();let Y_=K_[w_];Q_(!1),a([]),v0(Y_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),Q_(!1),a([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let I=u_.current;if(!I)return;let f=I.value||"",d=I.selectionStart===0&&I.selectionEnd===0,Y_=I.selectionStart===f.length&&I.selectionEnd===f.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&Y_){let D_=a0.current;if(!D_.length)return;Q.preventDefault();let C_=z0.current;if(Q.key==="ArrowUp"){if(C_===-1)X0.current=f,C_=D_.length-1;else if(C_>0)C_-=1;z0.current=C_,F0(D_[C_]||"")}else{if(C_===-1)return;if(C_<D_.length-1)C_+=1,z0.current=C_,F0(D_[C_]||"");else z0.current=-1,F0(X0.current||""),X0.current=""}requestAnimationFrame(()=>{let $0=u_.current;if(!$0)return;let f0=$0.value.length;$0.selectionStart=f0,$0.selectionEnd=f0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let I=u_.current?.value??(j?B_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let I=u_.current?.value??(j?B_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I)}},m0=(Q)=>{let I=Array.from(Q||[]).filter((f)=>f&&f.type&&f.type.startsWith("image/"));if(!I.length)return;R_((f)=>[...f,...I])},I$=(Q)=>{m0(Q.target.files),Q.target.value=""},x$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),C.current+=1,a_(!0)},_$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),C.current=Math.max(0,C.current-1),C.current===0)a_(!1)},W$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";a_(!0)},o$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),C.current=0,a_(!1),m0(Q.dataTransfer?.files||[])},M0=(Q)=>{if(j)return;let I=Q.clipboardData?.items;if(!I||!I.length)return;let f=[];for(let d of I){if(d.kind!=="file")continue;let Y_=d.getAsFile?.();if(Y_)f.push(Y_)}if(f.length>0)Q.preventDefault(),m0(f)},$$=(Q)=>{R_((I)=>I.filter((f,d)=>d!==Q))},X$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:I,longitude:f,accuracy:d}=Q.coords,Y_=`${I.toFixed(5)}, ${f.toFixed(5)}`,D_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",C_=`https://maps.google.com/?q=${I},${f}`,$0=`Location: ${Y_}${D_} ${C_}`;G$($0)},(Q)=>{let I=Q?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!b_)return;W0(!0),j2(k_).then((Q)=>{let I=Array.isArray(Q?.models)?Q.models.filter((f)=>typeof f==="string"&&f.trim().length>0):[];y0(I),E0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),y0([])}).finally(()=>{W0(!1)})},[b_,S]),u(()=>{if(j)_0(!1),Q_(!1),a([]),T_(!1),U_([])},[j]),u(()=>{if(!b_)return;let Q=(I)=>{let f=s_.current,d=A0.current,Y_=I.target;if(f&&f.contains(Y_))return;if(d&&d.contains(Y_))return;_0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[b_]),u(()=>{let Q=()=>{let D_=J_.current?.clientWidth||0;d_((C_)=>C_===D_?C_:D_)};Q();let I=J_.current,f=0,d=()=>{if(f)cancelAnimationFrame(f);f=requestAnimationFrame(()=>{f=0,Q()})},Y_=null;if(I&&typeof ResizeObserver<"u")Y_=new ResizeObserver(()=>d()),Y_.observe(I);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(f)cancelAnimationFrame(f);if(Y_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,S,K0.length,U?.percent]);let S$=(Q)=>{let I=Q.target.value;w$(Q.target),F0(I)};return u(()=>{requestAnimationFrame(()=>w$())},[G_,B_,j]),u(()=>{if(j)return;H$(G_)},[O_,k_,G_,j]),B`
        <div class="compose-box">
            ${!j&&L_.length>0&&B`
                <div class="compose-queue-stack">
                    ${L_.map((Q)=>{let I=typeof Q?.content==="string"?Q.content:"",f=s$(I);if(!f.text.trim()&&f.fileRefs.length===0&&f.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${f.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${f.text}</div>
                                    `}
                                    ${(f.messageRefs.length>0||f.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${f.messageRefs.map((d)=>B`
                                                <${N$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${f.fileRefs.map((d)=>{let Y_=d.split("/").pop()||d;return B`
                                                    <${N$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${Y_}
                                                        title=${d}
                                                        onClick=${()=>l?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>e0(Q)}
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
                                    onClick=${()=>s?.(Q)}
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
                class=${`compose-input-wrapper${x_?" drag-active":""}`}
                onDragEnter=${x$}
                onDragOver=${W$}
                onDragLeave=${_$}
                onDrop=${o$}
            >
                <div class="compose-input-main">
                    ${(W.length>0||y_.length>0||q.length>0)&&B`
                        <div class="compose-file-refs">
                            ${q.map((Q)=>{return B`
                                    <${N$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(Q)}
                                    />
                                `})}
                            ${W.map((Q)=>{let I=Q.split("/").pop()||Q;return B`
                                    <${N$}
                                        prefix="compose"
                                        label=${I}
                                        title=${Q}
                                        onClick=${()=>l?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${y_.map((Q,I)=>{let f=Q?.name||`image-${I+1}`;return B`
                                    <${N$}
                                        key=${f+I}
                                        prefix="compose"
                                        label=${f}
                                        title=${f}
                                        removeTitle="Remove image"
                                        onRemove=${()=>$$(I)}
                                    />
                                `})}
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
                        ref=${u_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?B_:G_}
                        onInput=${S$}
                        onKeyDown=${T0}
                        onPaste=${M0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t_&&g_.length>0&&B`
                        <div class="slash-autocomplete" ref=${h_}>
                            ${g_.map((Q,I)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${I===P_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),k0(Q)}}
                                    onMouseEnter=${()=>e_(I)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${H_&&K_.length>0&&B`
                        <div class="slash-autocomplete" ref=${I0}>
                            ${K_.map((Q,I)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${I===w_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),L0(Q)}}
                                    onMouseEnter=${()=>X_(I)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${b_&&!j&&B`
                        <div class="compose-model-popup" ref=${s_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${D0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!D0&&J0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!D0&&J0.map((Q)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${S===Q?" active":""}`}
                                        onClick=${()=>{b$(Q)}}
                                        disabled=${Z0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{M$()}}
                                    disabled=${Z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${J_}>
                    ${!j&&S&&B`
                    <div class="compose-meta-row">
                        ${!j&&S&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${A0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y$}
                                    aria-label="Open model picker"
                                    onClick=${V$}
                                    disabled=${Z0}
                                >
                                    ${Z0?"Switching…":Y0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Z0&&Y$&&B`
                                        <span class="compose-model-usage-hint" title=${y$}>
                                            ${Y$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${K0.map((Q)=>B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>k0(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&U&&U.percent!=null&&B`
                        <${S9} usage=${U} />
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
                    ${t0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${X$}
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
                    ${n$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${k$?" active":""}`}
                            onClick=${p}
                            title=${l0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${n&&N_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${W.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${I$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{v0()}}
                            disabled=${!O0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var J3="piclaw_theme",m4="piclaw_tint",f2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},T9={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},H3={default:{label:"Default",mode:"auto",light:f2,dark:T9},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},f9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],R2={theme:"default",tint:null},D3="light",u4=!1;function E3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function i$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function R9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((V)=>Number.isFinite(V)))return null;let W=`#${[z,K,G].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:W}}function k3(_){return i$(_)||R9(_)}function z2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function v4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function u9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function v9(_){return u9(_)>0.4?"#000000":"#ffffff"}function y3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g4(_){return H3[_]||H3.default}function m9(_){return _.mode==="auto"?y3():_.mode}function g9(_,$){let j=g4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||f2}function c9(_,$,j){let Z=k3($);if(!Z)return _;let N=i$(_.bgPrimary),z=i$(_.bgSecondary),K=i$(_.bgHover),G=i$(_.borderColor);if(!N||!z||!K||!G)return _;let V=i$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:z2(N,Z,0.08),bgSecondary:z2(z,Z,0.12),bgHover:z2(K,Z,0.16),borderColor:z2(G,Z,0.08),accent:Z.hex,accentHover:V?z2(Z,V,0.18):Z.hex}}function p9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=k3(Z),z=N?v4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?v4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?v4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",W=N?v9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":W,"--danger-color":_.danger||f2.danger,"--success-color":_.success||f2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([L,q])=>{if(q)j.style.setProperty(L,q)})}function h9(){if(typeof document>"u")return;let _=document.documentElement;f9.forEach(($)=>_.style.removeProperty($))}function S2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function i9(_,$){if(typeof document>"u")return;let j=S2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=S2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=S2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let z=S2("apple-mobile-web-app-status-bar-style");if(z)z.setAttribute("content",$==="dark"?"black-translucent":"default")}function l9(){if(typeof window>"u")return;let _={...R2,mode:D3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=E3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=g4(j),z=m9(N),K=g9(j,z);R2={theme:j,tint:Z},D3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let W=K;if(j==="default"&&Z)W=c9(K,Z,z);if(j==="default"&&!Z)h9();else p9(W,z);if(i9(W.bgPrimary,z),l9(),$.persist!==!1)if(o_(J3,j),Z)o_(m4,Z);else o_(m4,"")}function T2(){if(g4(R2.theme).mode!=="auto")return;c4(R2,{persist:!1})}function w3(){if(typeof window>"u")return()=>{};let _=E3(o0(J3)||"default"),$=o0(m4),j=$?$.trim():null;if(c4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",T2);else if(Z.addListener)Z.addListener(T2);return u4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",T2);else if(Z.removeListener)Z.removeListener(T2);u4=!1}}return()=>{}}function A3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;c4({theme:j||"default",tint:Z},{persist:!0})}function P3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return y3()}var u2=/#(\w+)/g,n9=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),d9=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),s9=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),o9={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},r9=new Set(["http:","https:","mailto:",""]);function M3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!r9.has(Z.protocol))return null;return Z.href}catch{return null}}function b3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!d9.has(G)){let V=K.parentNode;if(!V)continue;while(K.firstChild)V.insertBefore(K.firstChild,K);V.removeChild(K);continue}let W=o9[G]||new Set;for(let V of Array.from(K.attributes)){let L=V.name.toLowerCase(),q=V.value;if(L.startsWith("on")){K.removeAttribute(V.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(W.has(L)||s9.has(L)){if(L==="href"){let H=T$(q);if(!H)K.removeAttribute(V.name);else if(K.setAttribute(V.name,H),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,w=T$(H,{allowDataImage:G==="img"});if(!w)K.removeAttribute(V.name);else K.setAttribute(V.name,w)}continue}K.removeAttribute(V.name)}}return j.body.innerHTML}function C3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function v2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=C3(j);if(N===j)break;j=N}return j}function a9(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let W=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${W}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function t9(_){if(!_)return _;return v2(_,5)}function e9(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function _7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function $7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=t9(z);return`<div class="mermaid-container" data-mermaid="${e9(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function I3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function x3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,W=(z.endsWith("/")?z.slice(0,-1).trim():z).split(/\s+/)[0]?.toLowerCase();if(!W||!n9.has(W))return $;if(W==="br")return N?"":"<br>";if(N)return`</${W}>`;return`<${W}>`})}function S3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function T3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function j7(_){if(!window.katex)return _;let $=(K)=>C3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],W=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let L=G.length;return G.push(V),`@@CODE_BLOCK_${L}@@`});return W=W.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let L=G.length;return G.push(V),`@@CODE_INLINE_${L}@@`}),{html:W,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(W,V)=>{let L=Number(V);return G[L]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,W)=>{try{let V=katex.renderToString($(W.trim()),{displayMode:!0,throwOnError:!1});return`${G}${V}`}catch(V){return`<span class="math-error" title="${M3(V.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,W)=>{if(/\s$/.test(W))return K;try{let V=katex.renderToString($(W),{displayMode:!1,throwOnError:!1});return`${G}${V}`}catch(V){return`${G}<span class="math-error" title="${M3(V.message)}">$${W}$</span>`}}),Z(z,N.blocks)}function Z7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(u2.lastIndex=0,!u2.test(K))continue;u2.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let W=K.split(u2);if(W.length<=1)continue;let V=$.createDocumentFragment();W.forEach((L,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,V.appendChild(H)}else V.appendChild($.createTextNode(L))}),z.parentNode?.replaceChild(V,z)}return $.body.innerHTML}function N7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function p0(_,$,j={}){if(!_)return"";let Z=N7(_),{text:N,blocks:z}=a9(Z),K=v2(N,2),W=I3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=x3(W),L=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return L=S3(L),L=T3(L),L=j7(L),L=Z7(L),L=$7(L,z),L=b3(L,j),L}function m2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=v2($,2),N=I3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=x3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=S3(K),K=T3(K),K=b3(K),K}async function Q$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=P3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,W=_7(G||""),V=v2(W,2),L=await $(V,{...N,transparent:!0});K.innerHTML=L,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let W=document.createElement("pre");W.className="mermaid-error",W.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(W),K.removeAttribute("data-mermaid")}}function f3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function R3(_){return String(_||"").trim()||"web:default"}function u3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function v3(_){if(!_)return!1;return _.status!=="running"}function m3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function g3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?m2(_.thinking):"",G=_?.answer?p0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&K)Q$(N.current).catch(()=>{})},[K]),u(()=>{if(z.current&&G)Q$(z.current).catch(()=>{})},[G]),!_)return null;let W=_.status==="running",V=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),q=u3(_),H=v3(_),w=!W&&V,S=W?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${S}</span>
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
            ${L&&B`
                <details class="btw-block btw-thinking" open=${W?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${q&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!w}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var c3="PiClaw";function p4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],W=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",L=V?V:null,q=j||W==="PiClaw".toLowerCase()||W==="pi";return{letter:N,color:G,image:L||(q?"/static/icon-192.png":null)}}function p3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function h3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function i3(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",W=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(W&&(G||K&&K!=="default"))return W}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function z7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function K2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function l3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return K2(_)?"Compacting context":"Working..."}function K7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function n3(_,$=Date.now()){let j=z7(_);if(j===null)return null;return K7(Math.max(0,$-j))}function d3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:W}){let q=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let Q_=a,g_=Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q_,totalLines:g_,fullText:Q_}}let w_=a.text||"",X_=a.fullText||a.full_text||w_,H_=Number.isFinite(a.totalLines)?a.totalLines:X_?X_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:w_,totalLines:H_,fullText:X_}},H=160,w=(a)=>String(a||"").replace(/<\/?internal>/gi,""),S=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},R=(a,w_,X_)=>{let H_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(X_)?X_:0,visibleLines:0};let Q_=H_.split(`
`),g_=Q_.length>w_?Q_.slice(0,w_).join(`
`):H_,U_=Number.isFinite(X_)?X_:Q_.reduce((t_,T_)=>t_+S(T_),0),P_=g_?g_.split(`
`).reduce((t_,T_)=>t_+S(T_),0):0,e_=Math.max(U_-P_,0);return{text:g_,omitted:e_,totalLines:U_,visibleLines:P_}},v=q(j),x=q(Z),U=q($),A=Boolean(v.text)||v.totalLines>0,b=Boolean(x.text)||x.totalLines>0,p=Boolean(U.fullText?.trim()||U.text?.trim());if(!_&&!p&&!A&&!b&&!N&&!z)return null;let[__,t]=T(new Set),[n,N_]=T(()=>Date.now()),l=(a)=>t((w_)=>{let X_=new Set(w_),H_=!X_.has(a);if(H_)X_.add(a);else X_.delete(a);if(typeof W==="function")W(a,H_);return X_});u(()=>{t(new Set)},[K]);let L_=K2(_);u(()=>{if(!L_)return;N_(Date.now());let a=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(a)},[L_,_?.started_at,_?.startedAt]);let S_=_?.turn_id||K,s=i3(S_),$_=G?"turn-dot turn-dot-queued":"turn-dot",z_=(a)=>a,Z_=Boolean(_?.last_activity||_?.lastActivity),W_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":s,O_=z?.kind||"info",k_=W_(O_),G_=W_(_?.kind||(L_?"warning":"info")),A_="",B_=_?.title,j0=_?.status;if(_?.type==="plan")A_=B_?`Planning: ${B_}`:"Planning...";else if(_?.type==="tool_call")A_=B_?`Running: ${B_}`:"Running tool...";else if(_?.type==="tool_status")A_=B_?`${B_}: ${j0||"Working..."}`:j0||"Working...";else if(_?.type==="error")A_=B_||"Agent error";else A_=B_||j0||"Working...";if(Z_)A_="Last activity just now";let y_=({panelTitle:a,text:w_,fullText:X_,totalLines:H_,maxLines:Q_,titleClass:g_,panelKey:U_})=>{let P_=__.has(U_),e_=X_||w_||"",t_=U_==="thought"||U_==="draft"?w(e_):e_,T_=typeof Q_==="number",Z0=P_&&T_,N0=T_?R(t_,Q_,H_):{text:t_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!t_&&!(Number.isFinite(N0.totalLines)&&N0.totalLines>0))return null;let b_=`agent-thinking-body${T_?" agent-thinking-body-collapsible":""}`,_0=T_?`--agent-thinking-collapsed-lines: ${Q_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${P_?"true":"false"}
                data-collapsible=${T_?"true":"false"}
                style=${s?`--turn-color: ${s};`:""}
            >
                <div class="agent-thinking-title ${g_||""}">
                    ${s&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${a}
                    ${Z0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>l(U_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${b_}
                    style=${_0}
                    dangerouslySetInnerHTML=${{__html:m2(t_)}}
                />
                ${!P_&&N0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▸ ${N0.omitted} more lines
                    </button>
                `}
                ${P_&&N0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},R_=N?.tool_call?.title,x_=R_?`Awaiting approval: ${R_}`:"Awaiting approval",a_=L_?n3(_,n):null,K_=(a,w_,X_=null)=>{let H_=l3(a);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${w_?`--turn-color: ${w_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${w_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${X_&&B`<span class="agent-status-elapsed">${X_}</span>`}
                </div>
                ${a.detail&&B`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&K_(z,k_)}
            ${_?.type==="intent"&&K_(_,G_,a_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${x_}</span>
                </div>
            `}
            ${A&&y_({panelTitle:z_("Planning"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,panelKey:"plan"})}
            ${b&&y_({panelTitle:z_("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${p&&y_({panelTitle:z_("Draft"),text:U.text,fullText:U.fullText,totalLines:U.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    ${s&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${A_}</span>
                </div>
            `}
        </div>
    `}function s3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",W=Z?.rawInput||{},V=W.command||W.commands&&W.commands[0]||null,L=W.diff||null,q=W.fileName||W.path||null,H=Z?.description||W.description||W.explanation||null,S=(Array.isArray(Z?.locations)?Z.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),R=Array.from(new Set([q,...S].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(A)=>{try{await M2(j,A,z||null),$()}catch(b){console.error("Failed to respond to agent request:",b)}},x=async()=>{try{await E4(K,`Auto-approved: ${K}`),await M2(j,"approved",z||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},U=N&&N.length>0;return B`
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
                ${(H||V||L||R.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${R.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((A,b)=>B`<li key=${b}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&B`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${L&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?N.map((A)=>B`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function o3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function r3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let W=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${W} ${V}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function Y2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function r0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function f$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),G7=new Set(["text/markdown"]);function G2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(Y7.has($)||$.startsWith("text/"))return"text";return"unsupported"}function a3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return G7.has($)}function t3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function V7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function W7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function e3(_){return V7(_)||W7(_)}function g2(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function X7(_,$){let j=Math.max(g2(_),g2($)),Z=Math.min(g2(_),g2($));return(j+0.05)/(Z+0.05)}function q7(_,$,j="#ffffff"){let Z=e3(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=e3(K);if(!G)continue;let W=X7(Z,G);if(W>z)N=K,z=W}return N}function h4(){let _=getComputedStyle(document.documentElement),$=(S,R)=>{for(let v of S){let x=_.getPropertyValue(v).trim();if(x)return x}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),W=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),w=q7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:W,warning:V,attention:L,border:q,fontFamily:H,buttonTextColor:w}}function _6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:W,fontFamily:V}=h4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:W},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var O7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),$6=!1,c2=null,j6=!1;function i4(_){_.querySelector(".adaptive-card-notice")?.remove()}function L7(_,$,j="error"){i4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function B7(_,$=(j)=>p0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Q7(_=($)=>p0($,null)){return($,j)=>{try{let Z=B7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function U7(_){if(j6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Q7(),j6=!0}async function F7(){if($6)return;if(c2)return c2;return c2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{$6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c2}function H7(){return globalThis.AdaptiveCards}function J7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function D7(_){return O7.has(_)}function n4(_){if(!Array.isArray(_))return[];return _.filter(J7)}function E7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function l4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${l4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function k7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l4($);return typeof $==="string"?$:String($)}function y7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=k7(K.type,j[K.id],K);for(let[G,W]of Object.entries(K))if(Array.isArray(W)||W&&typeof W==="object")K[G]=Z(W);return K};return Z(_)}function w7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function A7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function P7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=A7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function Z6(_,$,j){if(!D7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await F7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=H7();U7(Z);let N=new Z.AdaptiveCard,z=h4();N.hostConfig=new Z.HostConfig(_6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:y7($.payload,K);N.parse(G),N.onExecuteAction=(L)=>{let q=E7(L);if(j?.onAction)i4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let w=H instanceof Error?H.message:String(H||"Action failed.");L7(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let W=N.render();if(!W)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let V=P7($);if(V){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=V.label,L.appendChild(q),V.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=V.detail,L.appendChild(H)}_.appendChild(L)}if(i4(_),_.appendChild(W),V)w7(W);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function M7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function d4(_){if(!Array.isArray(_))return[];return _.filter(M7)}function N6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:l$(z)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:z})=>`${N}: ${z}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function z6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:l$(z)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:z})=>`${N}: ${z}`).join(", "):l$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function b7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?r0($):null},{label:"Added",value:_?.created_at?f$(_.created_at):null}].filter((Z)=>Z.value)}function K6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>G2($?.content_type),[$?.content_type]),z=t3(N),K=n_(()=>a3($?.content_type),[$?.content_type]),[G,W]=T(N==="text"||N==="pdf"),[V,L]=T(""),[q,H]=T(null),[w,S]=T(null),R=D(null),v=n_(()=>b7($),[$]),x=n_(()=>{if(!K||!V)return"";return p0(V)},[K,V]);return u(()=>{let U=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[j]),u(()=>{if(!R.current||!x)return;Q$(R.current);return},[x]),u(()=>{let U=!1,A=null;async function b(){if(N==="text"){W(!0),S(null);try{let p=await A4(_);if(!U)L(p)}catch{if(!U)S("Failed to load text preview.")}finally{if(!U)W(!1)}return}if(N==="pdf"){W(!0),S(null);try{let p=await P4(_);if(A=URL.createObjectURL(p),!U)H(A)}catch{if(!U)S("Failed to load PDF preview.")}finally{if(!U)W(!1)}return}W(!1)}return b(),()=>{if(U=!0,A)URL.revokeObjectURL(A)}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(U)=>{U.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${Z$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(U)=>U.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&w&&B`<div class="attachment-preview-state">${w}</div>`}
                    ${!G&&!w&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${Z$(_)} alt=${Z} />
                    `}
                    ${!G&&!w&&N==="pdf"&&q&&B`
                        <iframe class="attachment-preview-frame" src=${q} title=${Z}></iframe>
                    `}
                    ${!G&&!w&&N==="text"&&K&&B`
                        <div
                            ref=${R}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:x}}
                        />
                    `}
                    ${!G&&!w&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!G&&!w&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((U)=>B`
                        <div class="attachment-preview-meta-item" key=${U.label}>
                            <span class="attachment-preview-meta-label">${U.label}</span>
                            <span class="attachment-preview-meta-value">${U.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function Y6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function C7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(u(()=>{c$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?r0(z):"",W=G2(j.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${Z$(_)} download=${N} class="file-attachment-main">
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${W}
            </button>
        </div>
    `}function I7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);u(()=>{if(!Number.isFinite(j))return;c$(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?Z$(j):null,W=G2(Z?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${N$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${N$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${W}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function p2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?f$(Z):null;return B`
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
    `}function x7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?r0(_.size):"",N=_.mime_type||"",z=T7(N),K=T$(_.uri);return B`
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
    `}function S7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
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
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let W=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:K||"application/octet-stream"}),V=URL.createObjectURL(W),L=document.createElement("a");L.href=V,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function T7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function f7({preview:_}){let $=T$(_.url),j=T$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
    `}function R7(_,$){return typeof _==="string"?_:""}var u7=1800,v7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,m7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,g7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function c7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function p7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=m7,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=g7,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=v7,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let W=async(V)=>{V.preventDefault(),V.stopPropagation();let q=z.querySelector("code")?.textContent||"",H=await c7(q);N(G,H?"success":"error");let w=j.get(G);if(w)clearTimeout(w);let S=setTimeout(()=>{N(G,"idle"),j.delete(G)},u7);j.set(G,S)};G.addEventListener("click",W),Z.push(()=>{G.removeEventListener("click",W);let V=j.get(G);if(V)clearTimeout(V);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function h7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,fileRefs:N}}function i7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let q=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,messageRefs:N}}function l7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let L=V.replace(/^\s*-\s+/,"").trim(),q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],w=(q[2]||"").trim()||H;N.push({id:H,label:w,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,attachments:N}}function n7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(n7).sort((L,q)=>q.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),W=[],V;while(V=G.nextNode())W.push(V);for(let L of W){let q=L.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let w=q.split(N).filter((R)=>R!=="");if(w.length===0)continue;let S=K.createDocumentFragment();for(let R of w)if(z.test(R)){let v=K.createElement("mark");v.className="search-highlight-term",v.textContent=R,S.appendChild(v)}else S.appendChild(K.createTextNode(R));L.parentNode.replaceChild(S,L)}return K.body.innerHTML}function G6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:W,userAvatarBackground:V,onDelete:L,isThreadReply:q,isThreadPrev:H,isThreadNext:w,isRemoving:S,highlightQuery:R,onFileRef:v}){let[x,U]=T(null),A=D(null),b=_.data,p=b.type==="agent_response",__=G||"You",t=p?z||c3:__,n=p?p4(z,K,!0):p4(__,W),N_=typeof V==="string"?V.trim().toLowerCase():"",l=!p&&n.image&&(N_==="clear"||N_==="transparent"),L_=p&&Boolean(n.image),S_=`background-color: ${l||L_?"transparent":n.color}`,s=b.content_meta,$_=Boolean(s?.truncated),z_=Boolean(s?.preview),Z_=$_&&!z_,W_=$_?{originalLength:Number.isFinite(s?.original_length)?s.original_length:b.content?b.content.length:0,maxLength:Number.isFinite(s?.max_length)?s.max_length:0}:null,O_=b.content_blocks||[],k_=b.media_ids||[],G_=R7(b.content,b.link_previews),{content:A_,fileRefs:B_}=h7(G_),{content:j0,messageRefs:y_}=i7(A_),{content:R_,attachments:x_}=l7(j0);G_=R_;let a_=n4(O_),K_=d4(O_),a=a_.length===1&&typeof a_[0]?.fallback_text==="string"?a_[0].fallback_text.trim():"",w_=K_.length===1?N6(K_[0]).trim():"",X_=Boolean(a)&&G_?.trim()===a||Boolean(w_)&&G_?.trim()===w_,H_=Boolean(G_)&&!Z_&&!X_,Q_=typeof R==="string"?R.trim():"",g_=n_(()=>{if(!G_||X_)return"";let C=p0(G_,j);return Q_?d7(C,Q_):C},[G_,X_,Q_]),U_=(C,e)=>{C.stopPropagation(),U(Z$(e))},[P_,e_]=T(null),t_=(C)=>{e_(C)},T_=(C)=>{C.stopPropagation(),L?.(_)},Z0=(C,e)=>{let M_=new Set;if(!C||e.length===0)return{content:C,usedIds:M_};return{content:C.replace(/attachment:([^\s)"']+)/g,(P0,a0,z0,X0)=>{let O0=a0.replace(/^\/+/,""),x0=e.find((i0)=>i0.name&&i0.name.toLowerCase()===O0.toLowerCase()&&!M_.has(i0.id))||e.find((i0)=>!M_.has(i0.id));if(!x0)return P0;if(M_.add(x0.id),X0.slice(Math.max(0,z0-2),z0)==="](")return`/media/${x0.id}`;return x0.name||"attachment"}),usedIds:M_}},N0=[],b_=[],_0=[],J0=[],y0=[],D0=[],W0=0;if(O_.length>0)O_.forEach((C)=>{if(C?.type==="text"&&C.annotations)D0.push(C.annotations);if(C?.type==="resource_link")J0.push(C);else if(C?.type==="resource")y0.push(C);else if(C?.type==="file"){let e=k_[W0++];if(e)b_.push(e),_0.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=k_[W0++];if(e){let M_=typeof C?.mime_type==="string"?C.mime_type:void 0;N0.push({id:e,annotations:C?.annotations,mimeType:M_}),_0.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(k_.length>0)k_.forEach((C)=>{N0.push({id:C,annotations:null}),_0.push({id:C,name:null})});if(x_.length>0)x_.forEach((C)=>{if(!C?.id)return;let e=_0.find((M_)=>String(M_.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:w0,usedIds:d_}=Z0(G_,_0);G_=w0;let u_=N0.filter(({id:C})=>!d_.has(C)),I0=b_.filter((C)=>!d_.has(C)),h_=x_.length>0?x_.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):_0.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),s_=n_(()=>n4(O_),[O_]),A0=n_(()=>d4(O_),[O_]);u(()=>{if(!A.current)return;return Q$(A.current),p7(A.current)},[g_]);let J_=D(null);return u(()=>{if(!J_.current||s_.length===0)return;let C=J_.current;C.innerHTML="";for(let e of s_){let M_=document.createElement("div");C.appendChild(M_),Z6(M_,e,{onAction:async(c_)=>{if(c_.type==="Action.OpenUrl"){let P0=T$(c_.url||"");if(!P0)throw Error("Invalid URL");window.open(P0,"_blank","noopener,noreferrer");return}if(c_.type==="Action.Submit"){await D4({post_id:_.id,thread_id:b.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:c_.type,title:c_.title||"",data:c_.data}});return}console.warn("[post] unsupported adaptive card action:",c_.type,c_)}}).catch((c_)=>{console.error("[post] adaptive card render error:",c_),M_.textContent=e.fallback_text||"Card failed to render."})}},[s_,b.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${w?"thread-next":""} ${S?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${n.image?"has-image":""}" style=${S_}>
                ${n.image?B`<img src=${n.image} alt=${t} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${T_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${r3(_.timestamp)}</a>
                </div>
                ${Z_&&W_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Y2(W_.originalLength)} chars
                            ${W_.maxLength?B` • Display limit: ${Y2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&W_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Y2(W_.maxLength)} of ${Y2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(B_.length>0||y_.length>0||h_.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let e=(M_)=>{if(M_.preventDefault(),M_.stopPropagation(),N)N(C,_.chat_jid||null);else{let c_=document.getElementById("post-"+C);if(c_)c_.scrollIntoView({behavior:"smooth",block:"center"}),c_.classList.add("post-highlight"),setTimeout(()=>c_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${e}>
                                    <${N$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${B_.map((C)=>{let e=C.split("/").pop()||C;return B`
                                <${N$}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>v?.(C)}
                                />
                            `})}
                        ${h_.map((C)=>B`
                            <${I7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${t_}
                            />
                        `)}
                    </div>
                `}
                ${H_&&B`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:g_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),U(C.target.src)}}
                    />
                `}
                ${s_.length>0&&B`
                    <div ref=${J_} class="post-adaptive-cards" />
                `}
                ${A0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${A0.map((C,e)=>{let M_=z6(C);return B`
                                <div key=${`${C.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${M_.title}</span>
                                    </div>
                                    ${M_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${M_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${f$(M_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${D0.length>0&&B`
                    ${D0.map((C,e)=>B`
                        <${p2} key=${e} annotations=${C} />
                    `)}
                `}
                ${u_.length>0&&B`
                    <div class="media-preview">
                        ${u_.map(({id:C,mimeType:e})=>{let c_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Z$(C):w4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${c_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(P0)=>U_(P0,C)}
                                />
                            `})}
                    </div>
                `}
                ${u_.length>0&&B`
                    ${u_.map(({annotations:C},e)=>B`
                        ${C&&B`<${p2} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${I0.length>0&&B`
                    <div class="file-attachments">
                        ${I0.map((C)=>B`
                            <${C7} key=${C} mediaId=${C} onPreview=${t_} />
                        `)}
                    </div>
                `}
                ${J0.length>0&&B`
                    <div class="resource-links">
                        ${J0.map((C,e)=>B`
                            <div key=${e}>
                                <${x7} block=${C} />
                                <${p2} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y0.length>0&&B`
                    <div class="resource-embeds">
                        ${y0.map((C,e)=>B`
                            <div key=${e}>
                                <${S7} block=${C} />
                                <${p2} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${b.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${b.link_previews.map((C,e)=>B`
                            <${f7} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&B`<${Y6} src=${x} onClose=${()=>U(null)} />`}
        ${P_&&B`
            <${K6}
                mediaId=${P_.mediaId}
                info=${P_.info}
                onClose=${()=>e_(null)}
            />
        `}
    `}function V6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:W,timelineRef:V,agents:L,user:q,onDeletePost:H,reverse:w=!0,removingPostIds:S,searchQuery:R}){let[v,x]=T(!1),U=D(null),A=typeof IntersectionObserver<"u",b=M(async()=>{if(!j||!$||v)return;x(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,v,j]),p=M((s)=>{let{scrollTop:$_,scrollHeight:z_,clientHeight:Z_}=s.target,W_=w?z_-Z_-$_:$_,O_=Math.max(300,Z_);if(W_<O_)b()},[w,b]);u(()=>{if(!A)return;let s=U.current,$_=V?.current;if(!s||!$_)return;let z_=300,Z_=new IntersectionObserver((W_)=>{for(let O_ of W_){if(!O_.isIntersecting)continue;b()}},{root:$_,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return Z_.observe(s),()=>Z_.disconnect()},[A,$,j,V,b]);let __=D(b);if(__.current=b,u(()=>{if(A)return;if(!V?.current)return;let{scrollTop:s,scrollHeight:$_,clientHeight:z_}=V.current,Z_=w?$_-z_-s:s,W_=Math.max(300,z_);if(Z_<W_)__.current?.()},[A,_,$,w,V]),u(()=>{if(!V?.current)return;if(!$||v)return;let{scrollTop:s,scrollHeight:$_,clientHeight:z_}=V.current,Z_=w?$_-z_-s:s,W_=Math.max(300,z_);if($_<=z_+1||Z_<W_)__.current?.()},[_,$,v,w,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${W||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((s,$_)=>s.id-$_.id),n=(s)=>{let $_=s?.data?.thread_id;if($_===null||$_===void 0||$_==="")return null;let z_=Number($_);return Number.isFinite(z_)?z_:null},N_=new Map;for(let s=0;s<t.length;s+=1){let $_=t[s],z_=Number($_?.id),Z_=n($_);if(Z_!==null){let W_=N_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(s),N_.set(Z_,W_)}else if(Number.isFinite(z_)){let W_=N_.get(z_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=s,N_.set(z_,W_)}}let l=new Map;for(let[s,$_]of N_.entries()){let z_=new Set;if($_.anchorIndex>=0)z_.add($_.anchorIndex);for(let Z_ of $_.replyIndexes)z_.add(Z_);l.set(s,Array.from(z_).sort((Z_,W_)=>Z_-W_))}let L_=t.map((s,$_)=>{let z_=n(s);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=l.get(z_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=Z_.indexOf($_);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<Z_.length-1}}),S_=B`<div class="timeline-sentinel" ref=${U}></div>`;return B`
        <div class="timeline ${w?"reverse":"normal"}" ref=${V} onScroll=${p}>
            <div class="timeline-content">
                ${w?S_:null}
                ${t.map((s,$_)=>{let z_=Boolean(s.data?.thread_id&&s.data.thread_id!==s.id),Z_=S?.has?.(s.id),W_=L_[$_]||{};return B`
                    <${G6}
                        key=${s.id}
                        post=${s}
                        isThreadReply=${z_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${R}
                        agentName=${p3(s.data?.agent_id,L||{})}
                        agentAvatarUrl=${h3(s.data?.agent_id,L||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(s)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${w?null:S_}
            </div>
        </div>
    `}class W6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new W6;var h2=null,s4=null;function X6(){if(s4)return Promise.resolve(s4);if(!h2)h2=import("/static/dist/editor.bundle.js").then((_)=>{return s4=_,_}).catch((_)=>{throw h2=null,_});return h2}class q6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await X6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var o4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new q6(_,$)}};function r4(){X6().catch(()=>{})}var s7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},o7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i2=null,a4=null;function r7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function a7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!r7(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function t7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i2)i2=a7(()=>Promise.resolve($.init?.())).catch((j)=>{throw i2=null,j});return await i2,$}async function e7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a4)a4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a4}async function _5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function $5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function j5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Z5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function O6(){let _=j5(),$=_?o7:s7,j=U$("--bg-primary",_?"#000000":"#ffffff"),Z=U$("--text-primary",_?"#e7e9ea":"#0f1419"),N=U$("--text-secondary",_?"#71767b":"#536471"),z=U$("--accent-color","#1d9bf0"),K=U$("--danger-color",_?"#ff7b72":"#cf222e"),G=U$("--success-color",_?"#7ee787":"#1a7f37"),W=U$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=U$("--border-color",_?"#2f3336":"#eff3f4"),L=U$("--accent-soft-strong",Z5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:W,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class L6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await t7();if(await e7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:O6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=O6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await _5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket($5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new L6(_,$)}};function E$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function N5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,L=[];for(let H of V.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let q=L.join("/");return`${C2(q)}${z}${K}`}function V2(_){return _?.preview||null}function z5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function K5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Y5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${E$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${E$(r0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${E$(f$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${E$(K5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${E$(z5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${E$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function G5(_){let $=V2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Y5(_,$);if($.kind==="image"){let Z=$.url||($.path?C2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${E$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=p0($.text||"",null,{rewriteImageSrc:(N)=>N5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${E$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=G5(this.context)}getContent(){let _=V2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=V2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=V2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e4(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return V2(_)||_?.path?1:!1},mount(_,$){return new e4(_,$)}};var V5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),W5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},X5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function Q6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function B6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function U6(){return!!(self.crossOriginIsolated&&typeof SharedArrayBuffer<"u")}class F6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=Q6(j),z=X5[N]||"\uD83D\uDCC4",K=W5[N]||"Office Document",G=U6(),W=document.createElement("div");if(W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${B6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${B6(K)}</div>
                ${G?`
                    <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Open in Tab
                    </button>
                `:`
                    <div style="padding:10px 16px;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);
                        border-radius:6px;font-size:12px;color:#eab308;line-height:1.5;">
                        ⚠️ Requires HTTPS for SharedArrayBuffer.<br>
                        <span style="color:var(--text-secondary,#888);font-size:11px;">
                            Connect via HTTPS to use the Office viewer.
                        </span>
                    </div>
                `}
            </div>
        `,_.appendChild(W),G){let V=W.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document";if(!U6()){let G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e1e;",G.innerHTML=`
                <div style="text-align:center;max-width:420px;padding:32px;">
                    <div style="font-size:48px;margin-bottom:16px;">\uD83D\uDD12</div>
                    <div style="font-size:15px;font-weight:600;color:#e0e0e0;margin-bottom:8px;">
                        Secure Context Required
                    </div>
                    <div style="font-size:13px;color:#999;line-height:1.6;">
                        The Office viewer requires <code style="background:#333;padding:1px 5px;border-radius:3px;font-size:12px;">SharedArrayBuffer</code>
                        which is only available over HTTPS.<br><br>
                        Connect via <strong style="color:#4fc1ff;">https://</strong> to use this feature.
                    </div>
                </div>
            `,_.appendChild(G);return}let z=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(z)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=Q6(_?.path);if(!$||!V5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new F6(_,$);return new H6(_,$)}};var q5=/\.(csv|tsv)$/i;class J6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!q5.test($))return!1;return 55},mount(_,$){return new J6(_,$)}};var O5=/\.pdf$/i;class D6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var N1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!O5.test($))return!1;return 52},mount(_,$){return new D6(_,$)}};var L5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;class E6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!L5.test($))return!1;return 48},mount(_,$){return new E6(_,$)}};function B5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Q5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var K1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function k6(_){let $=String(_||"").trim();return $?$:K1}function U5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function F5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function H5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,W,V,L,q){try{if(K&&W!=null&&j({filename:K,format:G,data:W,mimeType:V,base64Encoded:Boolean(L),defaultMode:q}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,W,V,L,q){try{if(G&&j({filename:G,data:K,mimeType:W,base64Encoded:Boolean(V),mode:L,folderId:q}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function y6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${F5(j)}`}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Q5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=U5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(H5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=K1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await y6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await y6(_,"image/png");else this.xmlData=k6(await _.text());else if(_.status===404)this.xmlData=K1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?k6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Y1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!B5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new w6(_,$);return new A6(_,$)}};class P6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var m_=new P6;var l2="workspaceExplorerScale",J5=["compact","default","comfortable"],D5=new Set(J5),E5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function M6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return D5.has(j)?j:$}function G1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function k5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function y5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function V1(_={}){let $=k5(_),j=_.stored?M6(_.stored,$):$;return y5(j,_)}function b6(_){return E5[M6(_)]}var w5=60000,S6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function T6(_,$,j,Z=0,N=[]){if(!j&&S6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)T6(z,$,j,Z+1,N);return N}function C6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&S6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function O1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let W=O1(N.get(G.path),G);if(W!==N.get(G.path))z=!0;return W});return z?{...$,children:K}:_}function X1(_,$,j){if(!_)return _;if(_.path===$)return O1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=X1(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var f6=4,W1=14,A5=8,P5=16;function R6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=R6(Z);return _.__bytes=j,j}function u6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=f6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let W=Math.max(0,Number(G?.__bytes??G?.size??0));if(W<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:W});else z.push({kind:"file",name:G.name,path:G.path,size:W})}z.sort((G,W)=>W.size-G.size);let K=z;if(z.length>W1){let G=z.slice(0,W1-1),W=z.slice(W1-1),V=W.reduce((L,q)=>L+q.size,0);G.push({kind:"other",name:`+${W.length} more`,path:`${Z.path}/[other]`,size:V}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return u6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function I6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function v6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function n2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function L1(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,W=n2(_,$,Z,N),V=n2(_,$,Z,G),L=n2(_,$,j,G),q=n2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var m6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function g6(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,W,V,L)=>{let q=Array.isArray(G?.children)?G.children:[];if(!q.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let w=V-W,S=W;q.forEach((R,v)=>{let x=Math.max(0,Number(R.size)||0);if(x<=0)return;let U=x/H,A=S,b=v===q.length-1?V:S+w*U;if(S=b,b-A<0.003)return;let p=m6[L];if(p){let __=v6(A,L,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:x,color:__,depth:L,startAngle:A,endAngle:b,innerRadius:p[0],outerRadius:p[1],d:L1(120,120,p[0],p[1],A,b)}),L===1)N.push({key:R.path,name:R.name,size:x,pct:z>0?x/z*100:0,color:__})}if(L<f6)K(R,A,b,L+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function q1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=q1(Z,$);if(N)return N}return null}function c6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=m6[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=v6(z,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:L1(120,120,N[0],N[1],z,K)}],legend:[{key:V,name:_,size:j,pct:100,color:G}]}}function x6(_,$=!1,j=!1){if(!_)return null;let Z=R6(_),N=u6(_,0),z=N.size||Z,{segments:K,legend:G}=g6(N,z,j);if(!K.length&&z>0){let W=c6("[files]",N.path,z,j);K=W.segments,G=W.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function M5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[G,W]=T(!1);u(()=>{let l=_?.root?.path||".";N(l),K([l]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;W(!0);let l=setTimeout(()=>W(!1),180);return()=>clearTimeout(l)},[Z]);let V=n_(()=>{return q1(_.root,Z)||_.root},[_?.root,Z]),L=V?.size||_.totalSize||0,{segments:q,legend:H}=n_(()=>{let l=g6(V,L,_.isDarkTheme);if(l.segments.length>0)return l;if(L<=0)return l;let L_=V?.children?.length?"Total":"[files]";return c6(L_,V?.path||_?.root?.path||".",L,_.isDarkTheme)},[V,L,_.isDarkTheme,_?.root?.path]),[w,S]=T(q),R=D(new Map),v=D(0);u(()=>{let l=R.current,L_=new Map(q.map((z_)=>[z_.key,z_])),S_=performance.now(),s=220,$_=(z_)=>{let Z_=Math.min(1,(z_-S_)/220),W_=Z_*(2-Z_),O_=q.map((k_)=>{let A_=l.get(k_.key)||{startAngle:k_.startAngle,endAngle:k_.startAngle,innerRadius:k_.innerRadius,outerRadius:k_.innerRadius},B_=(a_,K_)=>a_+(K_-a_)*W_,j0=B_(A_.startAngle,k_.startAngle),y_=B_(A_.endAngle,k_.endAngle),R_=B_(A_.innerRadius,k_.innerRadius),x_=B_(A_.outerRadius,k_.outerRadius);return{...k_,d:L1(120,120,R_,x_,j0,y_)}});if(S(O_),Z_<1)v.current=requestAnimationFrame($_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame($_),R.current=L_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[q]);let x=w.length?w:q,U=L>0?r0(L):"0 B",A=V?.name||"",p=(A&&A!=="."?A:"Total")||"Total",__=U,t=z.length>1,n=(l)=>{if(!l?.path)return;let L_=q1(_.root,l.path);if(!L_||!Array.isArray(L_.children)||L_.children.length===0)return;K((S_)=>[...S_,L_.path]),N(L_.path),j(null)},N_=()=>{if(!t)return;K((l)=>{let L_=l.slice(0,-1);return N(L_[L_.length-1]||_?.root?.path||"."),L_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${L}>
                ${x.map((l)=>B`
                    <path
                        key=${l.key}
                        d=${l.d}
                        fill=${l.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===l.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(l)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(l)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(l)}
                    >
                        <title>${l.label} — ${r0(l.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${p}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((l)=>B`
                        <div key=${l.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${l.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${l.name}>${l.name}</span>
                            <span class="workspace-folder-starburst-size">${r0(l.size)}</span>
                            <span class="workspace-folder-starburst-pct">${l.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function b5({mediaId:_}){let[$,j]=T(null);if(u(()=>{if(!_)return;c$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?r0($.metadata.size):"";return B`
        <a href=${Z$(_)} download=${Z} class="file-attachment"
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
    `}function p6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,z]=T(null),[K,G]=T(new Set(["."])),[W,V]=T(null),[L,q]=T(null),[H,w]=T(""),[S,R]=T(null),[v,x]=T(null),[U,A]=T(!0),[b,p]=T(!1),[__,t]=T(null),[n,N_]=T(()=>p$("workspaceShowHidden",!1)),[l,L_]=T(!1),[S_,s]=T(null),[$_,z_]=T(null),[Z_,W_]=T(null),[O_,k_]=T(!1),[G_,A_]=T(null),[B_,j0]=T(()=>I6()),[y_,R_]=T(()=>V1({stored:o0(l2),...G1()})),x_=D(K),a_=D(""),K_=D(null),a=D(0),w_=D(new Set),X_=D(null),H_=D(new Map),Q_=D(_),g_=D(Z),U_=D(null),P_=D(null),e_=D(null),t_=D(null),T_=D(null),Z0=D(null),N0=D("."),b_=D(null),_0=D({path:null,dragging:!1,startX:0,startY:0}),J0=D({path:null,dragging:!1,startX:0,startY:0}),y0=D({path:null,timer:0}),D0=D(!1),W0=D(0),w0=D(new Map),d_=D(null),u_=D(null),I0=D(null),h_=D(null),s_=D(n),A0=D($),J_=D(j??$),C=D(0),e=D(Z_),M_=D(l),c_=D(S_),P0=D(null),a0=D({x:0,y:0}),z0=D(0),X0=D(null),O0=D(W),t0=D(L),x0=D(null),h0=D(null),i0=D(S);Q_.current=_,g_.current=Z,u(()=>{x_.current=K},[K]),u(()=>{s_.current=n},[n]),u(()=>{A0.current=$},[$]),u(()=>{J_.current=j??$},[j,$]),u(()=>{e.current=Z_},[Z_]),u(()=>{if(typeof window>"u")return;let O=()=>{R_(V1({stored:o0(l2),...G1()}))};O();let F=()=>O(),E=()=>O(),k=(g)=>{if(!g||g.key===null||g.key===l2)O()};window.addEventListener("resize",F),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),r=window.matchMedia?.("(hover: none)"),o=(g,V_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",V_);else if(g.addListener)g.addListener(V_)},i=(g,V_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",V_);else if(g.removeListener)g.removeListener(V_)};return o(m,F),o(r,F),()=>{window.removeEventListener("resize",F),window.removeEventListener("focus",E),window.removeEventListener("storage",k),i(m,F),i(r,F)}},[]),u(()=>{let O=(F)=>{let E=F?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let r=1;r<k.length;r++)m.push(k.slice(0,r).join("/"));if(m.length)G((r)=>{let o=new Set(r);o.add(".");for(let i of m)o.add(i);return o});V(E),requestAnimationFrame(()=>{let r=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(r)r.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),u(()=>{M_.current=l},[l]),u(()=>{c_.current=S_},[S_]),u(()=>{O0.current=W},[W]),u(()=>{t0.current=L},[L]),u(()=>{i0.current=S},[S]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>j0(I6());O();let F=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>O();if(F?.addEventListener)F.addEventListener("change",E);else if(F?.addListener)F.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(F?.removeEventListener)F.removeEventListener("change",E);else if(F?.removeListener)F.removeListener(E);k?.disconnect()}},[]),u(()=>{if(!L)return;let O=T_.current;if(!O)return;let F=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(F)},[L]);let n$=async(O)=>{p(!0),R(null),x(null);try{let F=await M4(O,20000);R(F)}catch(F){R({error:F.message||"Failed to load preview"})}finally{p(!1)}};U_.current=n$;let k$=async()=>{if(!A0.current)return;try{let O=await Z2("",1,s_.current),F=C6(O.root,x_.current,s_.current);if(F===a_.current){A(!1);return}if(a_.current=F,K_.current=O.root,!a.current)a.current=requestAnimationFrame(()=>{a.current=0,z((E)=>O1(E,K_.current)),A(!1)})}catch(O){t(O.message||"Failed to load workspace"),A(!1)}},l0=async(O)=>{if(!O)return;if(w_.current.has(O))return;w_.current.add(O);try{let F=await Z2(O,1,s_.current);z((E)=>X1(E,O,F.root))}catch(F){t(F.message||"Failed to load workspace")}finally{w_.current.delete(O)}};P_.current=l0;let K0=M(()=>{let O=W;if(!O)return".";let F=H_.current?.get(O);if(F&&F.type==="dir")return F.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[W]),K$=M((O)=>{let F=O?.closest?.(".workspace-row");if(!F)return null;let E=F.dataset.path,k=F.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),q0=M((O)=>{return K$(O?.target||null)},[K$]),Y0=M((O)=>{e.current=O,W_(O)},[]),v_=M(()=>{let O=y0.current;if(O?.timer)clearTimeout(O.timer);y0.current={path:null,timer:0}},[]),u0=M((O)=>{if(!O||O==="."){v_();return}let F=H_.current?.get(O);if(!F||F.type!=="dir"){v_();return}if(x_.current?.has(O)){v_();return}if(y0.current?.path===O)return;v_();let E=setTimeout(()=>{y0.current={path:null,timer:0},P_.current?.(O),G((k)=>{let m=new Set(k);return m.add(O),m})},600);y0.current={path:O,timer:E}},[v_]),S0=M((O,F)=>{if(a0.current={x:O,y:F},z0.current)return;z0.current=requestAnimationFrame(()=>{z0.current=0;let E=P0.current;if(!E)return;let k=a0.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),Y$=M((O)=>{if(!O)return;let E=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E)return;z_({path:O,label:E})},[]),F$=M(()=>{if(z_(null),z0.current)cancelAnimationFrame(z0.current),z0.current=0;if(P0.current)P0.current.style.transform="translate(-9999px, -9999px)"},[]),y$=M((O)=>{if(!O)return".";let F=H_.current?.get(O);if(F&&F.type==="dir")return F.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[]),E0=M(()=>{q(null),w("")},[]),w$=M((O)=>{if(!O)return;let E=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E||O===".")return;q(O),w(E)},[]),d$=M(async()=>{let O=t0.current;if(!O)return;let F=(H||"").trim();if(!F){E0();return}let E=H_.current?.get(O),k=(E?.name||O.split("/").pop()||O).trim();if(F===k){E0();return}try{let r=(await I4(O,F))?.path||O,o=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(E0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:r,type:E?.type||"file"}})),E?.type==="dir")G((i)=>{let g=new Set;for(let V_ of i)if(V_===O)g.add(r);else if(V_.startsWith(`${O}/`))g.add(`${r}${V_.slice(O.length)}`);else g.add(V_);return g});if(V(r),E?.type==="dir")R(null),p(!1),x(null);else U_.current?.(r);P_.current?.(o)}catch(m){t(m?.message||"Failed to rename file")}},[E0,H]),A$=M(async(O)=>{let k=O||".";for(let m=0;m<50;m+=1){let o=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await C4(k,o,""))?.path||(k==="."?o:`${k}/${o}`);if(k&&k!==".")G((V_)=>new Set([...V_,k]));V(g),t(null),P_.current?.(k),U_.current?.(g);return}catch(i){if(i?.status===409||i?.code==="file_exists")continue;t(i?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),s$=M((O)=>{if(O?.stopPropagation?.(),O_)return;let F=y$(O0.current);A$(F)},[O_,y$,A$]);u(()=>{if(typeof window>"u")return;let O=(F)=>{let E=F?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;z((i)=>{let g=i;for(let V_ of E){if(!V_?.root)continue;if(!g||V_.path==="."||!V_.path)g=V_.root;else g=X1(g,V_.path,V_.root)}if(g)a_.current=C6(g,x_.current,s_.current);return A(!1),g});let k=O0.current;if(Boolean(k)&&E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))w0.current.clear();if(!k||!i0.current)return;let r=H_.current?.get(k);if(r&&r.type==="dir")return;if(E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))U_.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),X_.current=k$;let P$=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),F=J_.current??A0.current,E=document.visibilityState!=="hidden"&&(F||O.matches&&A0.current);N2(E,s_.current).catch(()=>{})}).current,L0=D(0),H$=D(()=>{if(L0.current)clearTimeout(L0.current);L0.current=setTimeout(()=>{L0.current=0,P$()},250)}).current;u(()=>{if(A0.current)X_.current?.();H$()},[$,j]),u(()=>{X_.current(),P$();let O=setInterval(()=>X_.current(),w5),F=h$("previewHeight",null),E=Number.isFinite(F)?Math.min(Math.max(F,80),600):280;if(W0.current=E,e_.current)e_.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>H$();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(O),a.current)cancelAnimationFrame(a.current),a.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),L0.current)clearTimeout(L0.current),L0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;N2(!1,s_.current).catch(()=>{})}},[]);let k0=n_(()=>T6(N,K,n),[N,K,n]),F0=n_(()=>new Map(k0.map((O)=>[O.node.path,O.node])),[k0]),G$=n_(()=>b6(y_),[y_]);H_.current=F0;let B0=(W?H_.current.get(W):null)?.type==="dir";u(()=>{if(!W||!B0){A_(null),d_.current=null,u_.current=null;return}let O=W,F=`${n?"hidden":"visible"}:${W}`,E=w0.current,k=E.get(F);if(k?.root){E.delete(F),E.set(F,k);let o=x6(k.root,Boolean(k.truncated),B_);if(o)d_.current=o,u_.current=W,A_({loading:!1,error:null,payload:o});return}let m=d_.current,r=u_.current;A_({loading:!0,error:null,payload:r===W?m:null}),Z2(W,A5,n).then((o)=>{if(O0.current!==O)return;let i={root:o?.root,truncated:Boolean(o?.truncated)};E.delete(F),E.set(F,i);while(E.size>P5){let V_=E.keys().next().value;if(!V_)break;E.delete(V_)}let g=x6(i.root,i.truncated,B_);d_.current=g,u_.current=W,A_({loading:!1,error:null,payload:g})}).catch((o)=>{if(O0.current!==O)return;A_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:r===W?m:null})})},[W,B0,n,B_]);let M$=Boolean(S&&S.kind==="text"&&!B0&&(!S.size||S.size<=262144)),b$=M$?"Open in editor":S?.size>262144?"File too large to edit":"File is not editable";u(()=>{let O=I0.current;if(h_.current)h_.current.dispose(),h_.current=null;if(!O)return;if(O.innerHTML="",!W||B0||!S||S.error)return;let F={path:W,content:typeof S.text==="string"?S.text:void 0,mtime:S.mtime,size:S.size,preview:S,mode:"view"},E=r_.resolve(F)||r_.get("workspace-preview-default");if(!E)return;let k=E.mount(O,F);return h_.current=k,()=>{if(h_.current===k)k.dispose(),h_.current=null;O.innerHTML=""}},[W,B0,S]);let V$=(O)=>{let F=O?.target;if(F instanceof Element)return F;return F?.parentElement||null},C$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},v0=D((O)=>{if(h0.current)clearTimeout(h0.current),h0.current=null;let E=V$(O)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(t0.current===k)E0();g_.current?.(k)}).current,e0=D((O)=>{if(D0.current){D0.current=!1;return}let F=V$(O),E=F?.closest?.("[data-path]");if(t_.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,r=Boolean(F?.closest?.(".workspace-caret")),o=Boolean(F?.closest?.("button"))||Boolean(F?.closest?.("a"))||Boolean(F?.closest?.("input")),i=O0.current===k,g=t0.current;if(g){if(g===k)return;E0()}let V_=m==="file"&&x0.current===k&&!r&&!o;if(i&&!r&&!o&&k!=="."&&!V_){if(h0.current)clearTimeout(h0.current);h0.current=setTimeout(()=>{h0.current=null,w$(k)},350);return}if(m==="dir"){if(x0.current=null,V(k),R(null),x(null),p(!1),!x_.current.has(k))P_.current?.(k);if(i&&!r)return;G((H0)=>{let b0=new Set(H0);if(b0.has(k))b0.delete(k);else b0.add(k);return b0})}else{x0.current=null,V(k);let Q0=H_.current.get(k);if(Q0)Q_.current?.(Q0.path,Q0);U_.current?.(k)}}).current,T0=D(()=>{a_.current="",X_.current(),Array.from(x_.current||[]).filter((F)=>F&&F!==".").forEach((F)=>P_.current?.(F))}).current,m0=D(()=>{x0.current=null,V(null),R(null),x(null),p(!1)}).current,I$=D(()=>{N_((O)=>{let F=!O;if(typeof window<"u")o_("workspaceShowHidden",String(F));return s_.current=F,N2(!0,F).catch(()=>{}),a_.current="",X_.current?.(),Array.from(x_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>P_.current?.(k)),F})}).current,x$=D((O)=>{if(V$(O)?.closest?.("[data-path]"))return;m0()}).current,_$=M(async(O)=>{if(!O)return;let F=O.split("/").pop()||O;if(!window.confirm(`Delete "${F}"? This cannot be undone.`))return;try{await S4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(O0.current===O)m0();P_.current?.(k),t(null)}catch(k){R((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[m0]),W$=M((O)=>{let F=t_.current;if(!F||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;F.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=M((O)=>{let F=k0;if(!F||F.length===0)return;let E=W?F.findIndex((k)=>k.node.path===W):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(E+1,F.length-1),m=F[k];if(!m)return;if(V(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),U_.current?.(m.node.path);else R(null),p(!1),x(null);W$(m.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=E<=0?0:E-1,m=F[k];if(!m)return;if(V(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),U_.current?.(m.node.path);else R(null),p(!1),x(null);W$(m.node.path);return}if(O.key==="ArrowRight"&&E>=0){let k=F[E];if(k?.node?.type==="dir"&&!K.has(k.node.path))O.preventDefault(),P_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(O.key==="ArrowLeft"&&E>=0){let k=F[E];if(k?.node?.type==="dir"&&K.has(k.node.path))O.preventDefault(),G((m)=>{let r=new Set(m);return r.delete(k.node.path),r});return}if(O.key==="Enter"&&E>=0){O.preventDefault();let k=F[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!x_.current.has(m))P_.current?.(m);G((o)=>{let i=new Set(o);if(i.has(m))i.delete(m);else i.add(m);return i}),R(null),x(null),p(!1)}else Q_.current?.(m,k.node),U_.current?.(m);return}if((O.key==="Delete"||O.key==="Backspace")&&E>=0){let k=F[E];if(!k||k.node.type==="dir")return;O.preventDefault(),_$(k.node.path);return}if(O.key==="Escape")O.preventDefault(),m0()},[m0,_$,K,k0,W$,W]),M0=M((O)=>{let F=V$(O),E=F?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(t0.current===m)return;let r=O?.touches?.[0];if(!r)return;if(_0.current={path:C$(F)?m:null,dragging:!1,startX:r.clientX,startY:r.clientY},k!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,_0.current?.dragging)return;_$(m)},600)},[_$]),$$=M(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let O=_0.current;if(O?.dragging&&O.path){let F=e.current||K0(),E=X0.current;if(typeof E==="function")E(O.path,F)}_0.current={path:null,dragging:!1,startX:0,startY:0},C.current=0,L_(!1),s(null),Y0(null),v_(),F$()},[K0,F$,Y0,v_]),X$=M((O)=>{let F=_0.current,E=O?.touches?.[0];if(!E||!F?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let k=Math.abs(E.clientX-F.startX),m=Math.abs(E.clientY-F.startY),r=k>8||m>8;if(r&&b_.current)clearTimeout(b_.current),b_.current=null;if(!F.dragging&&r)F.dragging=!0,L_(!0),s("move"),Y$(F.path);if(F.dragging){O.preventDefault(),S0(E.clientX,E.clientY);let o=document.elementFromPoint(E.clientX,E.clientY),i=K$(o)||K0();if(e.current!==i)Y0(i);u0(i)}},[K$,K0,Y$,S0,Y0,u0]),S$=D((O)=>{O.preventDefault();let F=e_.current;if(!F)return;let E=O.clientY,k=W0.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let r=E,o=(g)=>{r=g.clientY;let V_=F.clientHeight-80,Q0=Math.min(Math.max(k-(g.clientY-E),80),V_);F.style.setProperty("--preview-height",`${Q0}px`),W0.current=Q0},i=()=>{let g=F.clientHeight-80,V_=Math.min(Math.max(k-(r-E),80),g);W0.current=V_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(V_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}).current,Q=D((O)=>{O.preventDefault();let F=e_.current;if(!F)return;let E=O.touches[0];if(!E)return;let k=E.clientY,m=W0.current||280,r=O.currentTarget;r.classList.add("dragging"),document.body.style.userSelect="none";let o=(g)=>{let V_=g.touches[0];if(!V_)return;g.preventDefault();let Q0=F.clientHeight-80,H0=Math.min(Math.max(m-(V_.clientY-k),80),Q0);F.style.setProperty("--preview-height",`${H0}px`),W0.current=H0},i=()=>{r.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(W0.current||m))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}).current,I=async()=>{if(!W)return;try{let O=await b4(W);if(O.media_id)x(O.media_id)}catch(O){R((F)=>({...F||{},error:O.message||"Failed to attach"}))}},f=async()=>{if(!W||B0)return;await _$(W)},d=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},Y_=M((O)=>{if(!d(O))return;if(O.preventDefault(),C.current+=1,!M_.current)L_(!0);s("upload");let F=q0(O)||K0();Y0(F),u0(F)},[K0,q0,Y0,u0]),D_=M((O)=>{if(!d(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!M_.current)L_(!0);if(c_.current!=="upload")s("upload");let F=q0(O)||K0();if(e.current!==F)Y0(F);u0(F)},[K0,q0,Y0,u0]),C_=M((O)=>{if(!d(O))return;if(O.preventDefault(),C.current=Math.max(0,C.current-1),C.current===0)L_(!1),s(null),Y0(null),v_()},[Y0,v_]),$0=M(async(O,F=".")=>{let E=Array.from(O||[]);if(E.length===0)return;let k=F&&F!==""?F:".",m=k!=="."?k:"workspace root";k_(!0);try{let r=null;for(let o of E)try{r=await b2(o,k)}catch(i){let g=i?.status,V_=i?.code;if(g===409||V_==="file_exists"){let Q0=o?.name||"file";if(!window.confirm(`"${Q0}" already exists in ${m}. Overwrite?`))continue;r=await b2(o,k,{overwrite:!0})}else throw i}if(r?.path)x0.current=r.path,V(r.path),U_.current?.(r.path);P_.current?.(k)}catch(r){t(r.message||"Failed to upload file")}finally{k_(!1)}},[]),f0=M(async(O,F)=>{if(!O)return;let E=H_.current?.get(O);if(!E)return;let k=F&&F!==""?F:".",m=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let o=(await x4(O,k))?.path||O;if(E.type==="dir")G((i)=>{let g=new Set;for(let V_ of i)if(V_===O)g.add(o);else if(V_.startsWith(`${O}/`))g.add(`${o}${V_.slice(O.length)}`);else g.add(V_);return g});if(V(o),E.type==="dir")R(null),p(!1),x(null);else U_.current?.(o);P_.current?.(m),P_.current?.(k)}catch(r){t(r?.message||"Failed to move entry")}},[]);X0.current=f0;let I_=M(async(O)=>{if(!d(O))return;O.preventDefault(),C.current=0,L_(!1),s(null),W_(null),v_();let F=Array.from(O?.dataTransfer?.files||[]);if(F.length===0)return;let E=e.current||q0(O)||K0();await $0(F,E)},[K0,q0,$0]),g0=M((O)=>{if(O?.stopPropagation?.(),O_)return;let F=O?.currentTarget?.dataset?.uploadTarget||".";N0.current=F,Z0.current?.click()},[O_]),q$=M(()=>{if(O_)return;let O=O0.current,F=O?H_.current?.get(O):null;N0.current=F?.type==="dir"?F.path:".",Z0.current?.click()},[O_]),J$=M((O)=>{if(!O||O.button!==0)return;let F=O.currentTarget;if(!F||!F.dataset)return;let E=F.dataset.path;if(!E||E===".")return;if(t0.current===E)return;let k=V$(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!C$(k))return;O.preventDefault(),J0.current={path:E,dragging:!1,startX:O.clientX,startY:O.clientY};let m=(o)=>{let i=J0.current;if(!i?.path)return;let g=Math.abs(o.clientX-i.startX),V_=Math.abs(o.clientY-i.startY),Q0=g>4||V_>4;if(!i.dragging&&Q0)i.dragging=!0,D0.current=!0,L_(!0),s("move"),Y$(i.path),S0(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(i.dragging){o.preventDefault(),S0(o.clientX,o.clientY);let H0=document.elementFromPoint(o.clientX,o.clientY),b0=K$(H0)||K0();if(e.current!==b0)Y0(b0);u0(b0)}},r=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",r);let o=J0.current;if(o?.dragging&&o.path){let i=e.current||K0(),g=X0.current;if(typeof g==="function")g(o.path,i)}J0.current={path:null,dragging:!1,startX:0,startY:0},C.current=0,L_(!1),s(null),Y0(null),v_(),F$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{D0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",r)},[K$,K0,Y$,S0,F$,Y0,u0,v_]),O$=M(async(O)=>{let F=Array.from(O?.target?.files||[]);if(F.length===0)return;let E=N0.current||".";if(await $0(F,E),N0.current=".",O?.target)O.target.value=""},[$0]);return B`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${e_}
            onDragEnter=${Y_}
            onDragOver=${D_}
            onDragLeave=${C_}
            onDrop=${I_}
        >
            <input type="file" multiple style="display:none" ref=${Z0} onChange=${O$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${s$} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${n?" active":""}`}
                        onClick=${I$}
                        title=${n?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!n&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${x$}>
                ${O_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${U&&B`<div class="workspace-loading">Loading…</div>`}
                ${__&&B`<div class="workspace-error">${__}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${t_}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${v0}
                        onKeyDown=${o$}
                        onTouchStart=${M0}
                        onTouchEnd=${$$}
                        onTouchMove=${X$}
                        onTouchCancel=${$$}
                    >
                        ${k0.map(({node:O,depth:F})=>{let E=O.type==="dir",k=O.path===W,m=O.path===L,r=E&&K.has(O.path),o=Z_&&O.path===Z_,i=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+F*G$.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${J$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?r?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${T_}
                                                value=${H}
                                                onInput=${(g)=>w(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),d$();else if(g.key==="Escape")g.preventDefault(),E0()}}
                                                onBlur=${E0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${E&&!r&&i>0&&B`
                                        <span class="workspace-count">${i}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${g0}
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
            ${W&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${S$} onTouchStart=${Q}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${s$} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!B0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M$&&g_.current?.(W,S)}
                                    title=${b$}
                                    disabled=${!M$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${f}
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
                            ${B0?B`
                                    <button class="workspace-download" onClick=${q$}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T4(W,n)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${I} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${b&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${S?.error&&B`<div class="workspace-error">${S.error}</div>`}
                    ${B0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&B`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&B`
                            <${M5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${S&&!S.error&&!B0&&B`
                        <div class="workspace-preview-body" ref=${I0}></div>
                    `}
                    ${v&&B`
                        <div class="workspace-download-card">
                            <${b5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${$_&&B`
                <div class="workspace-drag-ghost" ref=${P0}>${$_.label}</div>
            `}
        </aside>
    `}var C5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,I5=/\.(csv|tsv)$/i,x5=/\.pdf$/i,S5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,h6=/\.drawio(\.xml|\.svg|\.png)?$/i;function i6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:W,onToggleDock:V,dockVisible:L}){let[q,H]=T(null),w=D(null);u(()=>{if(!q)return;let U=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;H(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[q]),u(()=>{let U=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let b=_.findIndex((p)=>p.id===$);if(A.shiftKey){let p=_[(b-1+_.length)%_.length];j?.(p.id)}else{let p=_[(b+1)%_.length];j?.(p.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(A.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,j,Z]);let S=M((U,A)=>{if(U.button===1){U.preventDefault(),Z?.(A);return}if(U.button===0)j?.(A)},[j,Z]),R=M((U,A)=>{U.preventDefault(),H({id:A,x:U.clientX,y:U.clientY})},[]),v=M((U)=>{U.preventDefault(),U.stopPropagation()},[]),x=M((U,A)=>{U.preventDefault(),U.stopPropagation(),Z?.(A)},[Z]);if(u(()=>{if(!$||!w.current)return;let U=w.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((U)=>B`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(A)=>S(A,U.id)}
                    onContextMenu=${(A)=>R(A,U.id)}
                >
                    ${U.pinned&&B`
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
                        onClick=${(A)=>x(A,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${V}
                    title=${`${L?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${L?"Hide":"Show"} terminal`}
                    aria-pressed=${L?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${q&&B`
            <div class="tab-context-menu" style=${{left:q.x+"px",top:q.y+"px"}}>
                <button onClick=${()=>{Z?.(q.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(q.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(q.id),H(null)}}>
                    ${_.find((U)=>U.id===q.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(q.id),H(null)}}>
                        ${W?.has(q.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${C5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let U="/workspace/raw?path="+encodeURIComponent(q.id),A=q.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(U)+"&name="+encodeURIComponent(A);window.open(b,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${I5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let U="/csv-viewer/?path="+encodeURIComponent(q.id);window.open(U,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${x5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let U="/pdf-viewer/?path="+encodeURIComponent(q.id);window.open(U,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${S5.test(q.id)&&!h6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let U="/image-viewer/?path="+encodeURIComponent(q.id);window.open(U,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${h6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let U="/drawio/edit?path="+encodeURIComponent(q.id);window.open(U,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var T5=400,B1=60,l6=220,Q1="mdPreviewHeight";function f5(){try{let _=localStorage.getItem(Q1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=B1?$:l6}catch{return l6}}function n6({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T(f5),G=D(null),W=D(null),V=D(""),L=D(_);return L.current=_,u(()=>{let w=()=>{let R=L.current?.()||"";if(R===V.current)return;V.current=R;try{let v=p0(R,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let S=setInterval(w,T5);return()=>clearInterval(S)},[]),u(()=>{if(G.current&&Z)Q$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let S=w.clientY,R=W.current?.offsetHeight||z,v=W.current?.parentElement,x=v?v.offsetHeight*0.7:500,U=w.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(p)=>{let __=Math.min(Math.max(R-(p.clientY-S),B1),x);K(__)},b=()=>{U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Q1,String(Math.round(W.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",b)}}
            onTouchStart=${(w)=>{w.preventDefault();let S=w.touches[0];if(!S)return;let R=S.clientY,v=W.current?.offsetHeight||z,x=W.current?.parentElement,U=x?x.offsetHeight*0.7:500,A=w.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let b=(__)=>{let t=__.touches[0];if(!t)return;__.preventDefault();let n=Math.min(Math.max(v-(t.clientY-R),B1),U);K(n)},p=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Q1,String(Math.round(W.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",b),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
        ></div>
        <div class="md-preview-panel" ref=${W} style=${{height:z+"px"}}>
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
    `}function d6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let W=D(Z);W.current=Z,u(()=>{G.current();let V=new I2((q,H)=>z.current(q,H),(q)=>K.current(q),{chatJid:N});V.connect();let L=()=>{V.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")W.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),V.disconnect()}},[N])}function s6(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);u(()=>{let W=p$("notificationsEnabled",!1);if(N.current=W,$(W),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let z=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let W=Notification.requestPermission();if(W&&typeof W.then==="function")return W;return Promise.resolve(W)}catch{return Promise.resolve("default")}},[]),K=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await z();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let W=!N.current;N.current=W,$(W),o_("notificationsEnabled",String(W))},[z]),G=M((W,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(W,{body:V});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var W2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function o6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),G=D(!1),W=D(null),V=D(!1),L=D(null),q=D(null),H=D(0);u(()=>{G.current=z},[z]),u(()=>{q.current=Z},[Z]),u(()=>{H.current+=1,q.current=null,L.current=null,V.current=!1,G.current=!1,N(null),K(!1)},[j]);let w=M(async(v=null)=>{let x=H.current;try{if(v){let U=await O4(v,50,0,j);if(x!==H.current)return;N(U.posts),K(!1)}else{let U=await $2(10,null,j);if(x!==H.current)return;N(U.posts),K(U.has_more)}}catch(U){if(x!==H.current)return;console.error("Failed to load posts:",U)}},[j]),S=M(async()=>{let v=H.current;try{let x=await $2(10,null,j);if(v!==H.current)return;N((U)=>{if(!U||U.length===0)return x.posts;return W2([...x.posts,...U])}),K((U)=>U||x.has_more)}catch(x){if(v!==H.current)return;console.error("Failed to refresh timeline:",x)}},[j]),R=M(async(v={})=>{let x=H.current,U=q.current;if(!U||U.length===0)return;if(V.current)return;let{preserveScroll:A=!0,preserveMode:b="top",allowRepeat:p=!1}=v,__=(N_)=>{if(!A){N_();return}if(b==="top")$(N_);else _(N_)},n=U.slice().sort((N_,l)=>N_.id-l.id)[0]?.id;if(!Number.isFinite(n))return;if(!p&&L.current===n)return;V.current=!0,L.current=n;try{let N_=await $2(10,n,j);if(x!==H.current)return;if(N_.posts.length>0)__(()=>{N((l)=>W2([...N_.posts,...l||[]])),K(N_.has_more)});else K(!1)}catch(N_){if(x!==H.current)return;console.error("Failed to load more posts:",N_)}finally{if(x===H.current)V.current=!1}},[j,_,$]);return u(()=>{W.current=R},[R]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:w,refreshTimeline:S,loadMore:R,loadMoreRef:W,loadingMoreRef:V,lastBeforeIdRef:L}}function r6(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,G]=T({text:"",totalLines:0}),[W,V]=T(null),[L,q]=T(null),[H,w]=T(null),S=D(null),R=D(0),v=D(!1),x=D(""),U=D(""),A=D(null),b=D(null),p=D(null),__=D(null),t=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:W,setPendingRequest:V,currentTurnId:L,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:w,lastAgentEventRef:S,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:x,thoughtBufferRef:U,pendingRequestRef:A,stalledPostIdRef:b,currentTurnIdRef:p,steerQueuedTurnIdRef:__,thoughtExpandedRef:t,draftExpandedRef:n}}function a6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,w=$.current||280,S=L.currentTarget;S.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(U)=>{R=U.clientX;let A=Math.min(Math.max(w+(U.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${A}px`),$.current=A},x=()=>{let U=Math.min(Math.max(w+(R-H),160),600);$.current=U,S.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,z=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let w=H.clientX,S=$.current||280,R=L.currentTarget;R.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(U)=>{let A=U.touches[0];if(!A)return;U.preventDefault();let b=Math.min(Math.max(S+(A.clientX-w),160),600);q.style.setProperty("--sidebar-width",`${b}px`),$.current=b},x=()=>{R.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||S))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,K=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,w=j.current||$.current||280,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(U)=>{R=U.clientX;let A=Math.min(Math.max(w+(U.clientX-H),200),800);q.style.setProperty("--editor-width",`${A}px`),j.current=A},x=()=>{let U=Math.min(Math.max(w+(R-H),200),800);j.current=U,S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(U))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,G=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let w=H.clientX,S=j.current||$.current||280,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let A=U.touches[0];if(!A)return;U.preventDefault();let b=Math.min(Math.max(S+(A.clientX-w),200),800);q.style.setProperty("--editor-width",`${b}px`),j.current=b},x=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||S))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,W=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientY,w=Z?.current||200,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=H,v=(U)=>{R=U.clientY;let A=Math.min(Math.max(w-(U.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let U=Math.min(Math.max(w-(R-H),100),window.innerHeight*0.5);if(Z)Z.current=U;S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,V=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let w=H.clientY,S=Z?.current||200,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(U)=>{let A=U.touches[0];if(!A)return;U.preventDefault();let b=Math.min(Math.max(S-(A.clientY-w),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${b}px`),Z)Z.current=b;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||S))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:W,handleDockSplitterTouchStart:V}}function t6({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>m_.getTabs()),[N,z]=T(()=>m_.getActiveId()),[K,G]=T(()=>m_.getTabs().length>0);u(()=>{return m_.onChange((b,p)=>{Z(b),z(p),G(b.length>0)})},[]);let[W,V]=T(()=>new Set),L=M((b)=>{V((p)=>{let __=new Set(p);if(__.has(b))__.delete(b);else __.add(b);return __})},[]),q=M((b)=>{V((p)=>{if(!p.has(b))return p;let __=new Set(p);return __.delete(b),__})},[]),H=M((b)=>{if(!b)return;let p={path:b,mode:"edit"};try{if(!r_.resolve(p)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${b}`);return}}}catch(__){console.warn(`[openEditor] paneRegistry.resolve() error for "${b}":`,__)}m_.open(b)},[]),w=M(()=>{let b=m_.getActiveId();if(b){let p=m_.get(b);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}m_.close(b),q(b),$.current?.(b)}},[q]),S=M((b)=>{let p=m_.get(b);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}m_.close(b),q(b),$.current?.(b)},[q]),R=M((b)=>{m_.activate(b)},[]),v=M((b)=>{let p=m_.getTabs().filter((n)=>n.id!==b&&!n.pinned),__=p.filter((n)=>n.dirty).length;if(__>0){if(!window.confirm(`${__} unsaved tab${__>1?"s":""} will be closed. Continue?`))return}let t=p.map((n)=>n.id);m_.closeOthers(b),t.forEach((n)=>{q(n),$.current?.(n)})},[q]),x=M(()=>{let b=m_.getTabs().filter((t)=>!t.pinned),p=b.filter((t)=>t.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let __=b.map((t)=>t.id);m_.closeAll(),__.forEach((t)=>{q(t),$.current?.(t)})},[q]),U=M((b)=>{m_.togglePin(b)},[]),A=M(()=>{let b=m_.getActiveId();if(b)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:b}}))},[]);return u(()=>{let b=(p)=>{let{oldPath:__,newPath:t,type:n}=p.detail||{};if(!__||!t)return;if(n==="dir"){for(let N_ of m_.getTabs())if(N_.path===__||N_.path.startsWith(`${__}/`)){let l=`${t}${N_.path.slice(__.length)}`;m_.rename(N_.id,l)}}else m_.rename(__,t)};return window.addEventListener("workspace-file-renamed",b),()=>window.removeEventListener("workspace-file-renamed",b)},[]),u(()=>{let b=(p)=>{if(m_.hasUnsaved())p.preventDefault(),p.returnValue=""};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:W,openEditor:H,closeEditor:w,handleTabClose:S,handleTabActivate:R,handleTabCloseOthers:v,handleTabCloseAll:x,handleTabTogglePin:U,handleTabTogglePreview:L,revealInExplorer:A}}function U1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var F1=U1("warning",30000),e6=U1("finalize",120000),H1=U1("refresh",30000),_8=30000;function $8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function j8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Z8(_=30000){let[,$]=T(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function J1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function N8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function R$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function D1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function z8(_,$={}){if(R$($))return null;if(D1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:R5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function K8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Y8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function G8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function V8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function X2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function W8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function R5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function E1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function k1(_){return String(_||"").trim()||"web:default"}function X8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function q8(_={}){return R$(_)&&D1(_)}function u5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function v5(_={},$={}){if(!q8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=u5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function O8(_={}){if(!q8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},K=()=>{Z=0,v5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},W=()=>{G();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},q);if(H!=null)N.add(H)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;W()},L=$.visualViewport;return W(),$.addEventListener("focus",W),$.addEventListener("pageshow",W),$.addEventListener("resize",W),$.addEventListener("orientationchange",W),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",W,!0),L?.addEventListener?.("resize",W),L?.addEventListener?.("scroll",W),()=>{z(),$.removeEventListener("focus",W),$.removeEventListener("pageshow",W),$.removeEventListener("resize",W),$.removeEventListener("orientationchange",W),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",W,!0),L?.removeEventListener?.("resize",W),L?.removeEventListener?.("scroll",W)}}function m5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function z$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:m5($,j)}var g5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function L8(_){return g5.has(String(_||"").trim())}function c5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function B8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(c5(_),{detail:Z})),!0}var p5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Q8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(R$({window:j,navigator:Z}))};N();let K=p5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function U8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var w1="piclaw_btw_session";function h5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function i5(){let _=o0(w1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var F8=L4,H8=Q4,l5=F4,J8=k4,D8=y4,E8=H4,y1=z$(s0,"getAgentContext",null),n5=z$(s0,"getAgentModels",{current:null,models:[]}),d5=z$(s0,"getActiveChatAgents",{chats:[]}),k8=z$(s0,"getChatBranches",{chats:[]}),s5=z$(s0,"renameChatBranch",null),o5=z$(s0,"pruneChatBranch",null),r5=z$(s0,"getAgentQueueState",{count:0}),a5=z$(s0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),t5=z$(s0,"removeAgentQueueItem",{removed:!1}),e5=z$(s0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(o4);r_.register($1);r_.register(_1);r_.register(j1);r_.register(Z1);r_.register(N1);r_.register(z1);r_.register(Y1);r4();r_.register(t4);function _j({locationParams:_}){let $=n_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=n_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=n_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=n_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=T("disconnected"),[G,W]=T(()=>R$()),[V,L]=T(null),[q,H]=T(null),[w,S]=T(!1),[R,v]=T("current"),[x,U]=T([]),[A,b]=T([]),[p,__]=T(null),{agentStatus:t,setAgentStatus:n,agentDraft:N_,setAgentDraft:l,agentPlan:L_,setAgentPlan:S_,agentThought:s,setAgentThought:$_,pendingRequest:z_,setPendingRequest:Z_,currentTurnId:W_,setCurrentTurnId:O_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:A_,lastSilenceNoticeRef:B_,isAgentRunningRef:j0,draftBufferRef:y_,thoughtBufferRef:R_,pendingRequestRef:x_,stalledPostIdRef:a_,currentTurnIdRef:K_,steerQueuedTurnIdRef:a,thoughtExpandedRef:w_,draftExpandedRef:X_}=r6(),[H_,Q_]=T({}),[g_,U_]=T(null),[P_,e_]=T(null),[t_,T_]=T(!1),[Z0,N0]=T(null),[b_,_0]=T([]),[J0,y0]=T([]),[D0,W0]=T(null),[w0,d_]=T([]),[u_,I0]=T(!1),[h_,s_]=T(()=>i5()),A0=n_(()=>b_.find((X)=>X?.chat_jid===$)||null,[b_,$]),J_=n_(()=>J0.find((X)=>X?.chat_jid===$)||A0||null,[A0,J0,$]),C=J_?.root_chat_jid||A0?.root_chat_jid||$,e=h5(R),[M_,c_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),P0=w0.length,a0=D(new Set),z0=D([]),X0=D(new Set),O0=D({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(w0.map((X)=>X.row_id)),z0.current=w0;let{notificationsEnabled:t0,notificationPermission:x0,toggleNotifications:h0,notify:i0}=s6(),[n$,k$]=T(()=>new Set),[l0,K0]=T(()=>p$("workspaceOpen",!0)),K$=D(null),{editorOpen:q0,tabStripTabs:Y0,tabStripActiveId:v_,previewTabs:u0,openEditor:S0,closeEditor:Y$,handleTabClose:F$,handleTabActivate:y$,handleTabCloseOthers:E0,handleTabCloseAll:w$,handleTabTogglePin:d$,handleTabTogglePreview:A$,revealInExplorer:s$}=t6({onTabClosed:(X)=>K$.current?.(X)}),P$=D(null),L0=D(null),H$=D(null),k0=D(null),F0=r_.getDockPanes().length>0,[G$,q2]=T(!1),B0=M(()=>q2((X)=>!X),[]),M$=!j&&(q0||F0&&G$);u(()=>{let X=P$.current;if(!X)return;if(L0.current)L0.current.dispose(),L0.current=null;let Y=v_;if(!Y)return;let J={path:Y,mode:"edit"},P=r_.resolve(J)||r_.get("editor");if(!P){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=P.mount(X,J);L0.current=y,y.onDirtyChange?.((j_)=>{m_.setDirty(Y,j_)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{Y$()});let h=m_.getViewState(Y);if(h&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(h));if(typeof y.onViewStateChange==="function")y.onViewStateChange((j_)=>{m_.saveViewState(Y,j_)});return requestAnimationFrame(()=>y.focus()),()=>{if(L0.current===y)y.dispose(),L0.current=null}},[v_,Y$]),u(()=>{let X=(Y)=>{let J=Y.detail?.path;if(J)S0(J)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X)}},[S0]),u(()=>{let X=H$.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!X||!F0||!G$)return;let Y=r_.getDockPanes()[0];if(!Y){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(X,{mode:"view"});return k0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(k0.current===J)J.dispose(),k0.current=null}},[F0,G$]);let[b$,V$]=T({name:"You",avatar_url:null,avatar_background:null}),C$=D(!1),v0=D(!1),e0=D(null),T0=D($),m0=D(new Map),I$=D($),x$=D(0),_$=D(0),W$=D({}),o$=D({name:null,avatar_url:null}),M0=D({currentHashtag:null,searchQuery:null}),$$=D(null),X$=D(null),S$=D(0),Q=D(0),I=D(0),f=D(null),d=D(null),Y_=D(null),D_=D(null),C_=D(0),$0=D({title:null,avatarBase:null}),f0=D(null),I_=M(()=>{if(f0.current)clearTimeout(f0.current),f0.current=null;__(null)},[]);Z8(30000),u(()=>{return w3()},[]),u(()=>{return Q8(W)},[]),u(()=>{o_("workspaceOpen",String(l0))},[l0]),u(()=>{return O8()},[]),u(()=>{return()=>{I_()}},[I_]),u(()=>{if(!h_){o_(w1,"");return}o_(w1,JSON.stringify({question:h_.question||"",answer:h_.answer||"",thinking:h_.thinking||"",error:h_.error||null,status:h_.status||"success"}))},[h_]),u(()=>{W$.current=H_||{}},[H_]),u(()=>{T0.current=$},[$]),u(()=>{o$.current=b$||{name:"You",avatar_url:null,avatar_background:null}},[b$]);let g0=M((X,Y,J=null)=>{if(typeof document>"u")return;let P=(X||"").trim()||"PiClaw";if($0.current.title!==P){document.title=P;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==P)c.setAttribute("content",P);$0.current.title=P}let y=document.getElementById("dynamic-favicon");if(!y)return;let h=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",j_=Y||h,E_=Y?`${j_}|${J||""}`:j_;if($0.current.avatarBase!==E_){let c=Y?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;y.setAttribute("href",c),$0.current.avatarBase=E_}},[]),q$=M((X)=>{if(!X)return;U((Y)=>Y.includes(X)?Y:[...Y,X])},[]),J$=M((X)=>{U((Y)=>Y.filter((J)=>J!==X))},[]);K$.current=J$;let O$=M(()=>{U([])},[]),O=M((X,Y=null,J="info",P=3000)=>{I_(),__({title:X,detail:Y||null,kind:J||"info"}),f0.current=setTimeout(()=>{__((y)=>y?.title===X?null:y)},P)},[I_]),F=M((X)=>{let Y=N8(X,{editorOpen:q0,resolvePane:(J)=>r_.resolve(J)});if(Y.kind==="open"){S0(Y.path);return}if(Y.kind==="toast")O(Y.title,Y.detail,Y.level)},[q0,S0,O]),E=M(()=>{let X=v_;if(X)q$(X)},[v_,q$]),k=M((X)=>{if(!X)return;b((Y)=>Y.includes(X)?Y:[...Y,X])},[]),m=M(async(X,Y=null)=>{let J=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+X);if(P){J(P);return}try{let y=typeof Y==="string"&&Y.trim()?Y.trim():$,j_=(await B4(X,y))?.thread?.[0];if(!j_)return;U0((E_)=>{if(!E_)return[j_];if(E_.some((c)=>c.id===j_.id))return E_;return[...E_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let E_=document.getElementById("post-"+X);if(E_)J(E_)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",X,y)}},[$]),r=M((X)=>{b((Y)=>Y.filter((J)=>J!==X))},[]),o=M(()=>{b([])},[]),i=M((X={})=>{let Y=Date.now();if(A_.current=Y,X.running)j0.current=!0,I0((J)=>J?J:!0);if(X.clearSilence)B_.current=0},[I0]),g=M(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;C_.current=0},[]);u(()=>()=>{g()},[g]);let V_=M(()=>{g(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:Y,lastActivity:J,...P}=X;return P})},[g]),Q0=M((X)=>{if(!X)return;g();let Y=Date.now();C_.current=Y,n({type:X.type||"active",last_activity:!0}),D_.current=setTimeout(()=>{if(C_.current!==Y)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},_8)},[g]),H0=M(()=>{j0.current=!1,I0(!1),A_.current=null,B_.current=0,y_.current="",R_.current="",x_.current=null,d.current=null,K_.current=null,a.current=null,e0.current=null,O0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),O_(null),G_(null),w_.current=!1,X_.current=!1},[g,O_,G_,I0]),b0=M((X)=>{if(!X8({remainingQueueCount:X,currentTurnId:K_.current,isAgentTurnActive:u_}))return;a.current=null,G_(null)},[u_,G_]),A1=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),O2=M(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:L_||"",agentThought:s?{...s}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:W_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(u_),followupQueueItems:Array.isArray(w0)?w0.map((X)=>({...X})):[],activeModel:g_,activeThinkingLevel:P_,supportsThinking:Boolean(t_),activeModelUsage:Z0,contextUsage:D0,isAgentRunning:Boolean(j0.current),wasAgentActive:Boolean(v0.current),draftBuffer:y_.current||"",thoughtBuffer:R_.current||"",lastAgentEvent:A_.current||null,lastSilenceNotice:B_.current||0,lastAgentResponse:d.current||null,currentTurnIdRef:K_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(w_.current),draftExpanded:Boolean(X_.current),agentStatusRef:e0.current||null,silentRecovery:{...O0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[g_,Z0,P_,N_,L_,t,s,D0,W_,w0,u_,z_,k_,t_]),P1=M((X)=>{let Y=X||A1();g(),j0.current=Boolean(Y.isAgentRunning),v0.current=Boolean(Y.wasAgentActive),I0(Boolean(Y.isAgentTurnActive)),A_.current=Y.lastAgentEvent||null,B_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",R_.current=Y.thoughtBuffer||"",x_.current=Y.pendingRequest||null,d.current=Y.lastAgentResponse||null,K_.current=Y.currentTurnIdRef||null,a.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,O0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},w_.current=Boolean(Y.thoughtExpanded),X_.current=Boolean(Y.draftExpanded),n(Y.agentStatus||null),l(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),S_(Y.agentPlan||""),$_(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),O_(Y.currentTurnId||null),G_(Y.steerQueuedTurnId||null),d_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),U_(Y.activeModel||null),e_(Y.activeThinkingLevel||null),T_(Boolean(Y.supportsThinking)),N0(Y.activeModelUsage??null),W0(Y.contextUsage??null)},[g,A1,O_,d_,I0,G_]),L$=M((X)=>{if(!X)return;if(K_.current===X)return;K_.current=X,O0.current={inFlight:!1,lastAttemptAt:0,turnId:X},O_(X),a.current=null,G_(null),y_.current="",R_.current="",l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,d.current=null,w_.current=!1,X_.current=!1},[O_,G_]),M1=M((X)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let Y=d.current;if(!Y||!Y.post)return;if(X&&Y.turnId&&Y.turnId!==X)return;let J=Y.post;if(J.id&&f.current===J.id)return;let P=String(J?.data?.content||"").trim();if(!P)return;f.current=J.id||f.current,d.current=null;let y=P.replace(/\s+/g," ").slice(0,200),h=W$.current||{},E_=(J?.data?.agent_id?h[J.data.agent_id]:null)?.name||"Pi";i0(E_,y)},[i0]),y8=M(async(X,Y)=>{if(X!=="thought"&&X!=="draft")return;let J=K_.current;if(X==="thought"){if(w_.current=Y,J)try{await D8(J,"thought",Y)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!Y)return;try{let P=J?await J8(J,"thought"):null;if(P?.text)R_.current=P.text;$_((y)=>({...y||{text:"",totalLines:0},fullText:R_.current||y?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:y?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(X_.current=Y,J)try{await D8(J,"draft",Y)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!Y)return;try{let P=J?await J8(J,"draft"):null;if(P?.text)y_.current=P.text;l((y)=>({...y||{text:"",totalLines:0},fullText:y_.current||y?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:y?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),d2=D(null),s2=M(()=>{let X=$$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);d2.current=s2;let w8=M((X)=>{let Y=$$.current;if(!Y||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:P}=M0.current||{},y=!(P&&!J),h=y?Y.scrollHeight-Y.scrollTop:Y.scrollTop;X(),requestAnimationFrame(()=>{let j_=$$.current;if(!j_)return;if(y){let E_=Math.max(j_.scrollHeight-h,0);j_.scrollTop=E_}else{let E_=Math.max(j_.scrollHeight-j_.clientHeight,0),c=Math.min(h,E_);j_.scrollTop=c}})},[]),r$=M((X)=>{let Y=$$.current;if(!Y||typeof X!=="function"){X?.();return}let J=Y.scrollTop;X(),requestAnimationFrame(()=>{let P=$$.current;if(!P)return;let y=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(J,y)})},[]),A8="Queued as a follow-up (one-at-a-time).",P8="⁣",b1=M((X)=>{if(!X||!Array.isArray(X))return X;let Y=a0.current,J=new Set(Y),P=X.filter((y)=>{if(J.has(y?.id))return!1;if(y?.data?.is_bot_message){let h=y?.data?.content;if(h===A8||h===P8)return!1}return!0});return P.length===X.length?X:P},[]),{posts:C1,setPosts:U0,hasMore:M8,setHasMore:L2,hasMoreRef:I1,loadPosts:j$,refreshTimeline:C0,loadMore:b8,loadMoreRef:o2}=o6({preserveTimelineScroll:w8,preserveTimelineScrollTop:r$,chatJid:$}),u$=n_(()=>b1(C1),[C1,w0,b1]),B2=M(()=>{let X=a_.current;if(!X)return;U0((Y)=>Y?Y.filter((J)=>J.id!==X):Y),a_.current=null},[U0]),{handleSplitterMouseDown:C8,handleSplitterTouchStart:I8,handleEditorSplitterMouseDown:x8,handleEditorSplitterTouchStart:S8,handleDockSplitterMouseDown:T8,handleDockSplitterTouchStart:f8}=a6({appShellRef:X$,sidebarWidthRef:S$,editorWidthRef:Q,dockHeightRef:I}),x1=M(()=>{if(!j0.current)return;j0.current=!1,B_.current=0,A_.current=null,K_.current=null,O_(null),w_.current=!1,X_.current=!1;let X=(y_.current||"").trim();if(y_.current="",R_.current="",l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,d.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),y=new Date().toISOString(),h={id:P,timestamp:y,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};a_.current=P,U0((j_)=>j_?W2([...j_,h]):[h]),d2.current?.(),n(null)},[O_]);u(()=>{M0.current={currentHashtag:V,searchQuery:q}},[V,q]);let p_=M(()=>{let X=$;r5(X).then((Y)=>{if(T0.current!==X)return;let J=X0.current,P=Array.isArray(Y?.items)?Y.items.map((y)=>({...y})).filter((y)=>!J.has(y.row_id)):[];if(P.length){d_((y)=>{if(y.length===P.length&&y.every((h,j_)=>h.row_id===P[j_].row_id))return y;return P});return}J.clear(),b0(0),d_((y)=>y.length===0?y:[])}).catch(()=>{if(T0.current!==X)return;d_((Y)=>Y.length===0?Y:[])})},[b0,$,d_]),n0=M(async()=>{let X=$;try{let Y=await y1(X);if(T0.current!==X)return;if(Y)W0(Y)}catch(Y){if(T0.current!==X)return;console.warn("Failed to fetch agent context:",Y)}},[$]),d0=M(async()=>{let X=$;try{let Y=await E8(X);if(T0.current!==X)return null;if(!Y||Y.status!=="active"||!Y.data){if(v0.current){let{currentHashtag:y,searchQuery:h}=M0.current||{};if(!y&&!h)C0()}return v0.current=!1,H0(),e0.current=null,n(null),l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,Y??null}v0.current=!0;let J=Y.data;e0.current=J;let P=J.turn_id||J.turnId;if(P)L$(P);if(i({running:!0,clearSilence:!0}),V_(),n(J),Y.thought&&Y.thought.text)$_((y)=>{if(y&&y.text&&y.text.length>=Y.thought.text.length)return y;return R_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)l((y)=>{if(y&&y.text&&y.text.length>=Y.draft.text.length)return y;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[H0,V_,i,C0,L$]),r2=M(async()=>{if(!j0.current)return null;if(x_.current)return null;let X=K_.current||null,Y=O0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===X&&J-Y.lastAttemptAt<H1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=X;try{let{currentHashtag:P,searchQuery:y}=M0.current||{};if(!P&&!y)await C0();return await p_(),await d0()}finally{Y.inFlight=!1}},[d0,p_,C0]);u(()=>{let X=Math.min(1000,Math.max(100,Math.floor(F1/2))),Y=setInterval(()=>{if(!j0.current)return;if(x_.current)return;let J=A_.current;if(!J)return;let P=Date.now(),y=P-J,h=K2(e0.current);if(y>=e6){if(!h)n({type:"waiting",title:"Re-syncing after a quiet period…"});r2();return}if(y>=F1){if(P-B_.current>=H1){if(!h){let j_=Math.floor(y/1000);n({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}B_.current=P,r2()}}},X);return()=>clearInterval(Y)},[r2]);let R8=M((X)=>{if(K(X),X!=="connected"){n(null),l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,H0();return}if(!C$.current){C$.current=!0,d0(),n0();return}let{currentHashtag:Y,searchQuery:J}=M0.current;if(!Y&&!J)C0();d0(),n0()},[H0,C0,d0,n0]),u8=M(async(X)=>{L(X),U0(null),await j$(X)},[j$]),v8=M(async()=>{L(null),H(null),U0(null),await j$()},[j$]),m8=M(async(X,Y=R)=>{if(!X||!X.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(X.trim()),L(null),U0(null);try{let P=await F8(X.trim(),50,0,$,J,C);U0(P.results),L2(!1)}catch(P){console.error("Failed to search:",P),U0([])}},[$,C,R]),g8=M(()=>{S(!0),H(null),L(null),v("current"),U0([])},[]),c8=M(()=>{S(!1),H(null),j$()},[j$]),jj=M(()=>{},[]),p8=M(async(X)=>{if(!X)return;let Y=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,P=u$?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let y=(h)=>{if(!h.length)return;k$((E_)=>{let c=new Set(E_);return h.forEach((q_)=>c.add(q_)),c}),setTimeout(()=>{if(r$(()=>{U0((E_)=>E_?E_.filter((c)=>!h.includes(c.id)):E_)}),k$((E_)=>{let c=new Set(E_);return h.forEach((q_)=>c.delete(q_)),c}),I1.current)o2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await H8(Y,P>0,J);if(h?.ids?.length)y(h.ids)}catch(h){let j_=h?.message||"";if(P===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await H8(Y,!0,J);if(c?.ids?.length)y(c.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${j_}`)}},[$,u$,r$]),S1=M(async()=>{try{let X=await l5();Q_($8(X));let Y=X?.user||{};V$((P)=>{let y=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,j_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(P.name===y&&P.avatar_url===h&&P.avatar_background===j_)return P;return{name:y,avatar_url:h,avatar_background:j_}});let J=(X?.agents||[]).find((P)=>P.id==="default");g0(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,Y=await y1(X);if(T0.current!==X)return;if(Y)W0(Y)}catch{}},[g0,$]);u(()=>{S1();let X=h$("sidebarWidth",null),Y=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(S$.current=Y,X$.current)X$.current.style.setProperty("--sidebar-width",`${Y}px`)},[S1]);let a2=u_||t!==null,T1=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:P}=X;if(!J&&P===void 0)return;let y=W$.current?.[Y]||{id:Y},h=y.name||null,j_=y.avatar_url??y.avatarUrl??y.avatar??null,E_=!1,c=!1;if(J&&J!==y.name)h=J,c=!0;if(P!==void 0){let q_=typeof P==="string"?P.trim():null,i_=typeof j_==="string"?j_.trim():null,F_=q_||null;if(F_!==(i_||null))j_=F_,E_=!0}if(!c&&!E_)return;if(Q_((q_)=>{let F_={...q_[Y]||{id:Y}};if(c)F_.name=h;if(E_)F_.avatar_url=j_;return{...q_,[Y]:F_}}),Y==="default")g0(h,j_,E_?Date.now():null)},[g0]),f1=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,P=X.user_avatar_background??X.userAvatarBackground;if(Y===void 0&&J===void 0&&P===void 0)return;V$((y)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():y.name||"You",j_=J===void 0?y.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,E_=P===void 0?y.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(y.name===h&&y.avatar_url===j_&&y.avatar_background===E_)return y;return{name:h,avatar_url:j_,avatar_background:E_}})},[]),t2=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.model??X.current;if(Y!==void 0)U_(Y);if(X.thinking_level!==void 0)e_(X.thinking_level??null);if(X.supports_thinking!==void 0)T_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)N0(X.provider_usage??null)},[]),a$=M(()=>{let X=$;n5(X).then((Y)=>{if(T0.current!==X)return;if(Y)t2(Y)}).catch(()=>{})},[t2,$]),c0=M(()=>{d5().then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),R0=M(()=>{k8(C).then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];y0(Y)}).catch(()=>{})},[C]),h8=M((X)=>{let Y=X?.row_id;if(Y==null)return;X0.current.add(Y),d_((J)=>J.filter((P)=>P?.row_id!==Y)),a5(Y,k1($)).then(()=>{p_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),O("Failed to steer message","The queued message could not be sent as steering.","warning"),X0.current.delete(Y),p_()})},[$,p_,d_,O]),i8=M((X)=>{let Y=X?.row_id;if(Y==null)return;let J=z0.current.filter((P)=>P?.row_id!==Y).length;X0.current.add(Y),b0(J),d_((P)=>P.filter((y)=>y?.row_id!==Y)),t5(Y,k1($)).then(()=>{p_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),O("Failed to remove message","The queued message could not be removed.","warning"),X0.current.delete(Y),p_()})},[b0,$,p_,d_,O]),e2=M((X)=>{if(!X||typeof X!=="object")return;if(c0(),R0(),X?.queued==="followup"||X?.queued==="steer"){p_();return}let Y=X?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))p_()},[c0,R0,p_]),_4=M(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;s_(null)},[]),Q2=M(async(X)=>{let Y=String(X||"").trim();if(!Y)return O("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let J=new AbortController;Y_.current=J,s_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await e5(Y,{signal:J.signal,chatJid:R3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,h)=>{if(y==="side_prompt_start")s_((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(y)=>{s_((h)=>h?{...h,thinking:`${h.thinking||""}${y||""}`}:h)},onTextDelta:(y)=>{s_((h)=>h?{...h,answer:`${h.answer||""}${y||""}`}:h)}});if(Y_.current!==J)return!0;s_((y)=>y?{...y,answer:P?.result||y.answer||"",thinking:P?.thinking||y.thinking||"",model:P?.model||null,status:"success",error:null}:y)}catch(P){if(J.signal.aborted)return!0;s_((y)=>y?{...y,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:y)}finally{if(Y_.current===J)Y_.current=null}return!0},[$,O]),l8=M(async({content:X})=>{let Y=f3(X);if(!Y)return!1;if(Y.type==="help")return O("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _4(),O("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Q2(Y.question),!0;return!1},[_4,Q2,O]),n8=M(()=>{if(h_?.question)Q2(h_.question)},[h_,Q2]),d8=M(async()=>{let X=m3(h_);if(!X)return;try{let Y=await g$("default",X,null,[],a2?"queue":null,$);e2(Y),O(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){O("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[h_,e2,a2,O]),t$=M(()=>{a$(),c0(),R0(),p_(),n0()},[a$,c0,R0,p_,n0]);u(()=>{t$();let X=setInterval(()=>{a$(),c0(),R0(),p_()},60000);return()=>clearInterval(X)},[t$,a$,c0,R0,p_]),u(()=>{R0()},[R0]),u(()=>{let X=!1;if(U0(null),V)return j$(V),()=>{X=!0};if(q)return F8(q,50,0,$,R,C).then((Y)=>{if(X)return;U0(Y.results),L2(!1)}).catch((Y)=>{if(X)return;console.error("Failed to search:",Y),U0([]),L2(!1)}),()=>{X=!0};return j$(),()=>{X=!0}},[$,V,q,R,C,j$,L2,U0]),u(()=>{let X=I$.current||$;m0.current.set(X,O2())},[$,O2]),u(()=>{let X=I$.current||$;if(X===$)return;m0.current.set(X,O2()),I$.current=$,X0.current.clear(),P1(m0.current.get($)||null),p_(),d0(),n0()},[$,d0,n0,p_,P1,O2]);let s8=M(()=>{let{currentHashtag:X,searchQuery:Y}=M0.current||{};if(!X&&!Y)C0();t$()},[t$,C0]),$4=M((X,Y)=>{let J=Y?.turn_id,P=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=P?P===$:X==="connected"||X==="workspace_update";if(h)T1(Y),f1(Y);if(X==="ui_theme"){A3(Y);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))V_()}if(X==="connected"){n(null),l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,H0();let c=$;E8(c).then((F_)=>{if(T0.current!==c)return;if(!F_||F_.status!=="active"||!F_.data)return;let v$=F_.data,R1=v$.turn_id||v$.turnId;if(R1)L$(R1);if(i({clearSilence:!0}),Q0(v$),F_.thought&&F_.thought.text)R_.current=F_.thought.text,$_({text:F_.thought.text,totalLines:F_.thought.totalLines||0});if(F_.draft&&F_.draft.text)y_.current=F_.draft.text,l({text:F_.draft.text,totalLines:F_.draft.totalLines||0})}).catch((F_)=>{console.warn("Failed to fetch agent status:",F_)});let{currentHashtag:q_,searchQuery:i_}=M0.current||{};if(!q_&&!i_)C0();t$();return}if(X==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")c0(),R0();return}if(Y.type==="done"||Y.type==="error"){if(J&&K_.current&&J!==K_.current)return;if(Y.type==="done"){M1(J||K_.current);let{currentHashtag:c,searchQuery:q_}=M0.current||{};if(!c&&!q_)C0();if(Y.context_usage)W0(Y.context_usage)}if(v0.current=!1,H0(),X0.current.clear(),c0(),p_(),l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null),Y.type==="error")n({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)L$(J);if(i({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",R_.current="",l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0});e0.current=Y,n((c)=>{if(c&&c.type===Y.type&&c.title===Y.title)return c;return Y})}return}if(X==="agent_steer_queued"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;let c=J||K_.current;if(!c)return;a.current=c,G_(c);return}if(X==="agent_followup_queued"){if(!h)return;let c=Y?.row_id,q_=Y?.content;if(c!=null&&typeof q_==="string"&&q_.trim())d_((i_)=>{if(i_.some((F_)=>F_?.row_id===c))return i_;return[...i_,{row_id:c,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});p_();return}if(X==="agent_followup_consumed"){if(!h)return;let c=Y?.row_id;if(c!=null){let q_=z0.current.filter((i_)=>i_.row_id!==c).length;b0(q_),d_((i_)=>i_.filter((F_)=>F_.row_id!==c))}p_(),C0();return}if(X==="agent_followup_removed"){if(!h)return;let c=Y?.row_id;if(c!=null){let q_=z0.current.filter((i_)=>i_.row_id!==c).length;X0.current.add(c),b0(q_),d_((i_)=>i_.filter((F_)=>F_.row_id!==c))}p_();return}if(X==="agent_draft_delta"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let c=Date.now();if(!x$.current||c-x$.current>=100){x$.current=c;let q_=y_.current,i_=J1(q_);if(X_.current)l((F_)=>({text:F_?.text||"",totalLines:i_,fullText:q_}));else l({text:q_,totalLines:i_})}return}if(X==="agent_draft"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);i({running:!0,clearSilence:!0});let c=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),i_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")S_(c);else S_((F_)=>(F_||"")+c);else if(!X_.current)y_.current=c,l({text:c,totalLines:i_});return}if(X==="agent_thought_delta"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)R_.current="";if(typeof Y?.delta==="string")R_.current+=Y.delta;let c=Date.now();if(w_.current&&(!_$.current||c-_$.current>=100)){_$.current=c;let q_=R_.current;$_((i_)=>({text:i_?.text||"",totalLines:J1(q_),fullText:q_}))}return}if(X==="agent_thought"){if(!h)return;if(J&&K_.current&&J!==K_.current)return;if(J&&!K_.current)L$(J);i({running:!0,clearSilence:!0});let c=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!w_.current)R_.current=c,$_({text:c,totalLines:q_});return}if(X==="model_changed"){if(!h)return;if(Y?.model!==void 0)U_(Y.model);if(Y?.thinking_level!==void 0)e_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)T_(Boolean(Y.supports_thinking));let c=$;y1(c).then((q_)=>{if(T0.current!==c)return;if(q_)W0(q_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(L8(X)){if(!h)return;if(B8(X,Y),X==="extension_ui_notify"&&typeof Y?.message==="string")O(Y.message,null,Y?.type||"info");if(X==="extension_ui_error"&&typeof Y?.error==="string")O("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:j_,searchQuery:E_}=M0.current;if(X==="agent_response"){if(!h)return;B2(),d.current={post:Y,turnId:K_.current}}if(!j_&&!E_&&h&&(X==="new_post"||X==="new_reply"||X==="agent_response"))U0((c)=>{if(!c)return[Y];if(c.some((q_)=>q_.id===Y.id))return c;return[...c,Y]}),d2.current?.();if(X==="interaction_updated"){if(!h)return;U0((c)=>{if(!c)return c;if(!c.some((q_)=>q_.id===Y.id))return c;return c.map((q_)=>q_.id===Y.id?Y:q_)})}if(X==="interaction_deleted"){if(!h)return;let c=Y?.ids||[];if(c.length){r$(()=>{U0((F_)=>F_?F_.filter((v$)=>!c.includes(v$.id)):F_)});let{currentHashtag:q_,searchQuery:i_}=M0.current;if(I1.current&&!q_&&!i_)o2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[H0,V_,$,o2,i,M1,r$,c0,R0,C0,B2,L$,Q0,T1,f1,a$,p_,d_]);u(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=$4,X.reset=()=>{B2(),H0(),n(null),l({text:"",totalLines:0}),S_(""),$_({text:"",totalLines:0}),Z_(null)},X.finalize=()=>x1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[H0,x1,$4,B2]),d6({handleSseEvent:$4,handleConnectionStatusChange:R8,loadPosts:j$,onWake:s8,chatJid:$}),u(()=>{if(!u$||u$.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let Y=X.slice(5);m(Y),history.replaceState(null,"",location.pathname+location.search)},[u$,m]);let j4=t!==null;u(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:P}=M0.current||{},y=!J&&!P;if(j4){if(y)C0();p_(),d0(),n0()}else{if(y)C0();d0(),n0()}},j4?15000:60000);return()=>clearInterval(Y)},[z,j4,d0,n0,p_,C0]),u(()=>{return U8(()=>{d0(),n0(),p_()})},[d0,n0,p_]);let o8=M(()=>{K0((X)=>!X)},[]),r8=M((X)=>{if(typeof window>"u")return;let Y=String(X||"").trim();if(!Y||Y===$)return;let J=X2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),a8=M(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;let X=J_.agent_name||"",Y=J_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let P=window.prompt("Agent handle (without @)",X);if(P===null)return;try{let y=await s5(J_.chat_jid,{displayName:J,agentName:P});await Promise.allSettled([c0(),R0()]);let h=y?.branch?.agent_name||String(P||"").trim()||X;O("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(y){let h=y instanceof Error?y.message:String(y||"Could not rename branch.");O("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[J_,c0,R0,O]),t8=M(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;if(J_.chat_jid===(J_.root_chat_jid||J_.chat_jid)){O("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=J_.display_name||`@${J_.agent_name||J_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await o5(J_.chat_jid),await Promise.allSettled([c0(),R0()]);let P=J_.root_chat_jid||"web:default";O("Branch pruned",`${Y} has been archived.`,"info",3000);let y=X2(window.location.href,P,{chatOnly:j});window.location.assign(y)}catch(P){let y=P instanceof Error?P.message:String(P||"Could not prune branch.");O("Could not prune branch",y||"Could not prune branch.","warning",5000)}},[j,J_,c0,R0,O]);u(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{c_({status:"running",message:"Preparing a new chat branch…"});let Y=await P2(N);if(X)return;let J=Y?.branch,P=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let y=X2(window.location.href,P,{chatOnly:!0});window.location.replace(y)}catch(Y){if(X)return;c_({status:"error",message:E1(Y)})}})(),()=>{X=!0}},[Z,N]);let e8=M(async()=>{if(typeof window>"u"||G)return;let X=z8($);if(!X){O("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=W8(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))O("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=K8(X);if(!Y){O("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Y8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await P2($))?.branch,y=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let j_=await U4();_0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await k8(C);y0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let h=X2(window.location.href,y,{chatOnly:!0});G8(Y,h)}catch(J){V8(Y),O("Could not open branch window",E1(J),"error",5000)}},[$,C,G,O]);u(()=>{if(!q0)return;if(typeof window>"u")return;let X=X$.current;if(!X)return;if(!Q.current){let Y=h$("editorWidth",null),J=S$.current||280;Q.current=Number.isFinite(Y)?Y:J}if(X.style.setProperty("--editor-width",`${Q.current}px`),!I.current){let Y=h$("dockHeight",null);I.current=Number.isFinite(Y)?Y:200}X.style.setProperty("--dock-height",`${I.current}px`)},[q0]),u(()=>{if(!F0||j)return;let X=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),B0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[B0,F0,j]);let _9=Boolean(k_&&k_===(t?.turn_id||W_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${M_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${M_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${l0?"":" workspace-collapsed"}${q0?" editor-open":""}${j?" chat-only":""}`} ref=${X$}>
            ${!j&&B`
                <${p6}
                    onFileSelect=${q$}
                    visible=${l0}
                    active=${l0||q0}
                    onOpenEditor=${S0}
                />
                <button
                    class=${`workspace-toggle-tab${l0?" open":" closed"}`}
                    onClick=${o8}
                    title=${l0?"Hide workspace":"Show workspace"}
                    aria-label=${l0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${C8} onTouchStart=${I8}></div>
            `}
            ${M$&&B`
                <div class="editor-pane-container">
                    ${q0&&B`
                        <${i6}
                            tabs=${Y0}
                            activeId=${v_}
                            onActivate=${y$}
                            onClose=${F$}
                            onCloseOthers=${E0}
                            onCloseAll=${w$}
                            onTogglePin=${d$}
                            onTogglePreview=${A$}
                            previewTabs=${u0}
                            onToggleDock=${F0?B0:void 0}
                            dockVisible=${F0&&G$}
                        />
                    `}
                    ${q0&&B`<div class="editor-pane-host" ref=${P$}></div>`}
                    ${q0&&v_&&u0.has(v_)&&B`
                        <${n6}
                            getContent=${()=>L0.current?.getContent?.()}
                            path=${v_}
                            onClose=${()=>A$(v_)}
                        />
                    `}
                    ${F0&&G$&&B`<div class="dock-splitter" onMouseDown=${T8} onTouchStart=${f8}></div>`}
                    ${F0&&B`<div class=${`dock-panel${G$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${B0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${H$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${x8} onTouchStart=${S8}></div>
            `}
            <div class="container">
                ${q&&j8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${J_?.display_name||J_?.agent_name?`@${J_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${J_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${J0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>r8(X.currentTarget.value)}
                                    >
                                        ${J0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${J_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${a8}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${J_?.chat_jid&&J_.chat_jid!==(J_.root_chat_jid||J_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${t8}
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
                ${(V||q)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${v8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${q} · ${e}`}</span>
                    </div>
                `}
                <${V6}
                    posts=${u$}
                    hasMore=${M8}
                    onLoadMore=${b8}
                    timelineRef=${$$}
                    onHashtagClick=${u8}
                    onMessageRef=${k}
                    onScrollToMessage=${m}
                    onFileRef=${F}
                    onPostClick=${void 0}
                    onDeletePost=${p8}
                    emptyMessage=${V?`No posts with #${V}`:q?`No results for "${q}"`:void 0}
                    agents=${H_}
                    user=${b$}
                    reverse=${!(q&&!V)}
                    removingPostIds=${n$}
                    searchQuery=${q}
                />
                <${d3}
                    status=${t}
                    draft=${N_}
                    plan=${L_}
                    thought=${s}
                    pendingRequest=${z_}
                    intent=${p}
                    turnId=${W_}
                    steerQueued=${_9}
                    onPanelToggle=${y8}
                />
                <${g3}
                    session=${h_}
                    onClose=${_4}
                    onRetry=${n8}
                    onInject=${d8}
                />
                <${F3}
                    onPost=${()=>{j$(),s2()}}
                    onFocus=${s2}
                    searchMode=${w}
                    searchScope=${R}
                    onSearch=${m8}
                    onSearchScopeChange=${v}
                    onEnterSearch=${g8}
                    onExitSearch=${c8}
                    fileRefs=${x}
                    onRemoveFileRef=${J$}
                    onClearFileRefs=${O$}
                    messageRefs=${A}
                    onRemoveMessageRef=${r}
                    onClearMessageRefs=${o}
                    activeEditorPath=${j?null:v_}
                    onAttachEditorFile=${j?void 0:E}
                    onOpenFilePill=${F}
                    followupQueueCount=${P0}
                    followupQueueItems=${w0}
                    onInjectQueuedFollowup=${h8}
                    onRemoveQueuedFollowup=${i8}
                    onSubmitIntercept=${l8}
                    onMessageResponse=${e2}
                    onPopOutChat=${G?void 0:e8}
                    isAgentActive=${a2}
                    activeChatAgents=${b_}
                    currentChatJid=${$}
                    activeModel=${g_}
                    modelUsage=${Z0}
                    thinkingLevel=${P_}
                    supportsThinking=${t_}
                    contextUsage=${D0}
                    notificationsEnabled=${t0}
                    notificationPermission=${x0}
                    onToggleNotifications=${h0}
                    onModelChange=${U_}
                    onModelStateChange=${t2}
                />
                <${o3} status=${z} />
                <${s3}
                    request=${z_}
                    onRespond=${()=>{Z_(null),x_.current=null}}
                />
            </div>
        </div>
    `}function $j(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${_j} locationParams=${_} />`}Y3(B`<${$j} />`,document.getElementById("app"));

//# debugId=07BAE3E622BC885164756E2164756E21
//# sourceMappingURL=app.bundle.js.map
