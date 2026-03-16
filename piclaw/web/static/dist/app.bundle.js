var N9=Object.defineProperty;var K9=(_)=>_;function z9(_,$){this[_]=K9.bind(null,$)}var Y9=(_,$)=>{for(var j in $)N9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:z9.bind($,j)})};var G9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var A2,n_,t1,W9,E$,m1,e1,_3,$3,W4,K4,z4,V9,E2={},k2=[],X9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w2=Array.isArray;function H$(_,$){for(var j in $)_[j]=$[j];return _}function V4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function j3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?A2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return H2(_,z,Z,N,null)}function H2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++t1:N,__i:-1,__u:0};return N==null&&n_.vnode!=null&&n_.vnode(K),K}function M2(_){return _.children}function J2(_,$){this.props=_,this.context=$}function p$(_,$){if($==null)return _.__?p$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?p$(_):null}function q9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=H$({},$);K.__v=$.__v+1,n_.vnode&&n_.vnode(K),X4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?p$($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,z3(Z,K,N),$.__e=$.__=null,K.__e!=j&&Z3(K)}}function Z3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),Z3(_)}function g1(_){(!_.__d&&(_.__d=!0)&&E$.push(_)&&!y2.__r++||m1!=n_.debounceRendering)&&((m1=n_.debounceRendering)||e1)(y2)}function y2(){try{for(var _,$=1;E$.length;)E$.length>$&&E$.sort(_3),_=E$.shift(),$=E$.length,q9(_)}finally{E$.length=y2.__r=0}}function N3(_,$,j,Z,N,K,z,G,X,W,L){var q,H,y,x,R,u,I,F=Z&&Z.__k||k2,A=$.length;for(X=O9(j,$,F,X,A),q=0;q<A;q++)(y=j.__k[q])!=null&&(H=y.__i!=-1&&F[y.__i]||E2,y.__i=q,u=X4(_,y,H,N,K,z,G,X,W,L),x=y.__e,y.ref&&H.ref!=y.ref&&(H.ref&&q4(H.ref,null,y),L.push(y.ref,y.__c||x,y)),R==null&&x!=null&&(R=x),(I=!!(4&y.__u))||H.__k===y.__k?X=K3(y,X,_,I):typeof y.type=="function"&&u!==void 0?X=u:x&&(X=x.nextSibling),y.__u&=-7);return j.__e=R,X}function O9(_,$,j,Z,N){var K,z,G,X,W,L=j.length,q=L,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=H2(null,z,null,null,null):w2(z)?z=_.__k[K]=H2(M2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=H2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,X=K+H,z.__=_,z.__b=_.__b+1,G=null,(W=z.__i=L9(z,j,X,q))!=-1&&(q--,(G=j[W])&&(G.__u|=2)),G==null||G.__v==null?(W==-1&&(N>L?H--:N<L&&H++),typeof z.type!="function"&&(z.__u|=4)):W!=X&&(W==X-1?H--:W==X+1?H++:(W>X?H--:H++,z.__u|=4))):_.__k[K]=null;if(q)for(K=0;K<L;K++)(G=j[K])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=p$(G)),G3(G,G));return Z}function K3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=K3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=p$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function L9(_,$,j,Z){var N,K,z,G=_.key,X=_.type,W=$[j],L=W!=null&&(2&W.__u)==0;if(W===null&&G==null||L&&G==W.key&&X==W.type)return j;if(Z>(L?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((W=$[z=N>=0?N--:K++])!=null&&(2&W.__u)==0&&G==W.key&&X==W.type)return z}return-1}function p1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||X9.test($)?j:j+"px"}function F2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||p1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||p1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace($3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=W4,_.addEventListener($,K?z4:K4,K)):_.removeEventListener($,K?z4:K4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function c1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=W4++;else if($.t<j.u)return;return j(n_.event?n_.event($):$)}}}function X4(_,$,j,Z,N,K,z,G,X,W){var L,q,H,y,x,R,u,I,F,A,C,h,__,t,l,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),K=[G=$.__e=j.__e]),(L=n_.__b)&&L($);_:if(typeof K_=="function")try{if(I=$.props,F=K_.prototype&&K_.prototype.render,A=(L=K_.contextType)&&Z[L.__c],C=L?A?A.props.value:L.__:Z,j.__c?u=(q=$.__c=j.__c).__=q.__E:(F?$.__c=q=new K_(I,C):($.__c=q=new J2(I,C),q.constructor=K_,q.render=Q9),A&&A.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),F&&q.__s==null&&(q.__s=q.state),F&&K_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=H$({},q.__s)),H$(q.__s,K_.getDerivedStateFromProps(I,q.__s))),y=q.props,x=q.state,q.__v=$,H)F&&K_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),F&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(F&&K_.getDerivedStateFromProps==null&&I!==y&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(I,C),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(I,q.__s,C)===!1){$.__v!=j.__v&&(q.props=I,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),k2.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&z.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(I,q.__s,C),F&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(y,x,R)})}if(q.context=C,q.props=I,q.__P=_,q.__e=!1,h=n_.__r,__=0,F)q.state=q.__s,q.__d=!1,h&&h($),L=q.render(q.props,q.state,q.context),k2.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,h&&h($),L=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++__<25);q.state=q.__s,q.getChildContext!=null&&(Z=H$(H$({},Z),q.getChildContext())),F&&!H&&q.getSnapshotBeforeUpdate!=null&&(R=q.getSnapshotBeforeUpdate(y,x)),t=L!=null&&L.type===M2&&L.key==null?Y3(L.props.children):L,G=N3(_,w2(t)?t:[t],$,j,Z,N,K,z,G,X,W),q.base=$.__e,$.__u&=-161,q.__h.length&&z.push(q),u&&(q.__E=q.__=null)}catch(i){if($.__v=null,X||K!=null)if(i.then){for($.__u|=X?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;K[K.indexOf(G)]=null,$.__e=G}else{for(l=K.length;l--;)V4(K[l]);Y4($)}else $.__e=j.__e,$.__k=j.__k,i.then||Y4($);n_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=B9(j.__e,$,j,Z,N,K,z,X,W);return(L=n_.diffed)&&L($),128&$.__u?void 0:G}function Y4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(Y4))}function z3(_,$,j){for(var Z=0;Z<j.length;Z++)q4(j[Z],j[++Z],j[++Z]);n_.__c&&n_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){n_.__e(K,N.__v)}})}function Y3(_){return typeof _!="object"||_==null||_.__b>0?_:w2(_)?_.map(Y3):H$({},_)}function B9(_,$,j,Z,N,K,z,G,X){var W,L,q,H,y,x,R,u=j.props||E2,I=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(W=0;W<K.length;W++)if((y=K[W])&&"setAttribute"in y==!!F&&(F?y.localName==F:y.nodeType==3)){_=y,K[W]=null;break}}if(_==null){if(F==null)return document.createTextNode(I);_=document.createElementNS(N,F,I.is&&I),G&&(n_.__m&&n_.__m($,K),G=!1),K=null}if(F==null)u===I||G&&_.data==I||(_.data=I);else{if(K=K&&A2.call(_.childNodes),!G&&K!=null)for(u={},W=0;W<_.attributes.length;W++)u[(y=_.attributes[W]).name]=y.value;for(W in u)y=u[W],W=="dangerouslySetInnerHTML"?q=y:W=="children"||(W in I)||W=="value"&&("defaultValue"in I)||W=="checked"&&("defaultChecked"in I)||F2(_,W,null,y,N);for(W in I)y=I[W],W=="children"?H=y:W=="dangerouslySetInnerHTML"?L=y:W=="value"?x=y:W=="checked"?R=y:G&&typeof y!="function"||u[W]===y||F2(_,W,y,u[W],N);if(L)G||q&&(L.__html==q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(q&&(_.innerHTML=""),N3($.type=="template"?_.content:_,w2(H)?H:[H],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&p$(j,0),G,X),K!=null)for(W=K.length;W--;)V4(K[W]);G||(W="value",F=="progress"&&x==null?_.removeAttribute("value"):x!=null&&(x!==_[W]||F=="progress"&&!x||F=="option"&&x!=u[W])&&F2(_,W,x,u[W],N),W="checked",R!=null&&R!=_[W]&&F2(_,W,R,u[W],N))}return _}function q4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){n_.__e(N,j)}}function G3(_,$,j){var Z,N;if(n_.unmount&&n_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||q4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){n_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&G3(Z[N],$,j||typeof _.type!="function");j||V4(_.__e),_.__c=_.__=_.__e=void 0}function Q9(_,$,j){return this.constructor(_,j)}function W3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),n_.__&&n_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],X4($,_=(!Z&&j||$).__k=j3(M2,null,[_]),N||E2,E2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?A2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),z3(K,_,z)}A2=k2.slice,n_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(G){_=G}throw _}},t1=0,W9=function(_){return _!=null&&_.constructor===void 0},J2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=H$({},this.state),typeof _=="function"&&(_=_(H$({},j),this.props)),_&&H$(j,_),_!=null&&this.__v&&($&&this._sb.push($),g1(this))},J2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),g1(this))},J2.prototype.render=M2,E$=[],e1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_3=function(_,$){return _.__v.__b-$.__v.__b},y2.__r=0,$3=/(PointerCapture)$|Capture$/i,W4=0,K4=c1(!1),z4=c1(!0),V9=0;var $2,X0,N4,h1,j2=0,V3=[],V0=n_,i1=V0.__b,l1=V0.__r,n1=V0.diffed,d1=V0.__c,s1=V0.unmount,o1=V0.__;function O4(_,$){V0.__h&&V0.__h(X0,_,j2||$),j2=0;var j=X0.__H||(X0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return j2=1,U9(q3,_)}function U9(_,$,j){var Z=O4($2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):q3(void 0,$),function(G){var X=Z.__N?Z.__N[0]:Z.__[0],W=Z.t(X,G);X!==W&&(Z.__N=[W,Z.__[1]],Z.__c.setState({}))}],Z.__c=X0,!X0.__f)){var N=function(G,X,W){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!K||K.call(this,G,X,W);var q=Z.__c.props!==G;return L.some(function(H){if(H.__N){var y=H.__[0];H.__=H.__N,H.__N=void 0,y!==H.__[0]&&(q=!0)}}),K&&K.call(this,G,X,W)||q};X0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=X0;X0.componentWillUpdate=function(G,X,W){if(this.__e){var L=K;K=void 0,N(G,X,W),K=L}z&&z.call(this,G,X,W)},X0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=O4($2++,3);!V0.__s&&X3(j.__H,$)&&(j.__=_,j.u=$,X0.__H.__h.push(j))}function D(_){return j2=5,d_(function(){return{current:_}},[])}function d_(_,$){var j=O4($2++,7);return X3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return j2=8,d_(function(){return _},$)}function F9(){for(var _;_=V3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(D2),$.__h.some(G4),$.__h=[]}catch(j){$.__h=[],V0.__e(j,_.__v)}}}V0.__b=function(_){X0=null,i1&&i1(_)},V0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),o1&&o1(_,$)},V0.__r=function(_){l1&&l1(_),$2=0;var $=(X0=_.__c).__H;$&&(N4===X0?($.__h=[],X0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(D2),$.__h.some(G4),$.__h=[],$2=0)),N4=X0},V0.diffed=function(_){n1&&n1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(V3.push($)!==1&&h1===V0.requestAnimationFrame||((h1=V0.requestAnimationFrame)||H9)(F9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),N4=X0=null},V0.__c=function(_,$){$.some(function(j){try{j.__h.some(D2),j.__h=j.__h.filter(function(Z){return!Z.__||G4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],V0.__e(Z,j.__v)}}),d1&&d1(_,$)},V0.unmount=function(_){s1&&s1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{D2(Z)}catch(N){$=N}}),j.__H=void 0,$&&V0.__e($,j.__v))};var r1=typeof requestAnimationFrame=="function";function H9(_){var $,j=function(){clearTimeout(Z),r1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);r1&&($=requestAnimationFrame(j))}function D2(_){var $=X0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X0=$}function G4(_){var $=X0;_.__c=_.__(),X0=$}function X3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function q3(_,$){return typeof $=="function"?$(_):$}var O3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],G=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=G:z===4?Z[1]=Object.assign(Z[1]||{},G):z===5?(Z[1]=Z[1]||{})[$[++K]]=G:z===6?Z[1][$[++K]]+=G+"":z?(N=_.apply(G,O3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(G)}return Z},a1=new Map;function J9(_){var $=a1.get(this);return $||($=new Map,a1.set(this,$)),($=O3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",G="",X=[0],W=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,H,z):K===3&&(H||z)?(X.push(3,H,z),K=2):K===2&&z==="..."&&H?X.push(4,H,0):K===2&&z&&!H?X.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(X.push(K,0,z,N),K=6),H&&(X.push(K,H,0,N),K=6)),z=""},L=0;L<j.length;L++){L&&(K===1&&W(),W(L));for(var q=0;q<j[L].length;q++)Z=j[L][q],K===1?Z==="<"?(W(),X=[X],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:G?Z===G?G="":z+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(W(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[L][q+1]===">")?(W(),K===3&&(X=X[0]),K=X,(X=X[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(W(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,X=X[0])}return W(),X}(_)),$),arguments,[])).length>1?$:$[0]}var B=J9.bind(j3);var l0={};Y9(l0,{uploadWorkspaceFile:()=>b2,uploadMedia:()=>D4,updateWorkspaceFile:()=>T9,submitAdaptiveCardAction:()=>E4,streamSidePrompt:()=>I9,steerAgentQueueItem:()=>S9,setWorkspaceVisibility:()=>z2,setAgentThoughtVisibility:()=>A4,sendPeerAgentMessage:()=>M9,sendAgentMessage:()=>c$,searchPosts:()=>B4,respondToAgentRequest:()=>C2,renameWorkspaceFile:()=>I4,renameChatBranch:()=>A9,removeAgentQueueItem:()=>b9,pruneChatBranch:()=>w9,moveWorkspaceEntry:()=>x4,getWorkspaceTree:()=>K2,getWorkspaceRawUrl:()=>S2,getWorkspaceFile:()=>C4,getWorkspaceDownloadUrl:()=>f4,getWorkspaceBranch:()=>x9,getTimeline:()=>Z2,getThumbnailUrl:()=>w4,getThread:()=>Q4,getPostsByHashtag:()=>L4,getMediaUrl:()=>j$,getMediaText:()=>M4,getMediaInfo:()=>h$,getMediaBlob:()=>P4,getChatBranches:()=>y9,getAgents:()=>H4,getAgentThought:()=>y4,getAgentStatus:()=>J4,getAgentQueueState:()=>C9,getAgentModels:()=>N2,getAgentContext:()=>P9,getActiveChatAgents:()=>F4,forkChatBranch:()=>P2,deleteWorkspaceFile:()=>T4,deletePost:()=>U4,createWorkspaceFile:()=>S4,createReply:()=>k9,createPost:()=>E9,attachWorkspaceFile:()=>b4,addToWhitelist:()=>k4,SSEClient:()=>I2});async function v_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function L3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function D9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:G}=await j.read();if(G)break;N+=Z.decode(z,{stream:!0});let X=N.split(`

`);N=X.pop()||"";for(let W of X){let L=L3(W);if(L)$(L.event,L.data)}}N+=Z.decode();let K=L3(N);if(K)$(K.event,K.data)}async function Z2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return v_(Z)}async function L4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function B4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",X=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return v_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${G}${X}`)}async function Q4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return v_(`/thread/${_}${j}`)}async function E9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return v_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function k9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function U4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return v_(N,{method:"DELETE"})}async function c$(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return v_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function F4(){return v_("/agent/active-chats")}async function y9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/branches${$}`)}async function P2(_,$={}){return v_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function A9(_,$={}){return v_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function w9(_){return v_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function M9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return v_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function H4(){return v_("/agent/roster")}async function J4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/status${$}`)}async function P9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/context${$}`)}async function C9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/queue-state${$}`)}async function b9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function S9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/models${$}`)}async function D4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function C2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function E4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function I9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await D9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function k4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return v_(j)}async function A4(_,$,j){return v_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function j$(_){return`/media/${_}`}function w4(_){return`/media/${_}/thumbnail`}async function h$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function M4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function P4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function K2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return v_(Z)}async function x9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return v_($)}async function C4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return v_(N)}async function T9(_,$){return v_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function b4(_){return v_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function b2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:Z});if(!G.ok){let X=await G.json().catch(()=>({error:"Upload failed"})),W=Error(X.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=X.code,W}return G.json()}async function S4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function I4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function x4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function T4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return v_($,{method:"DELETE"})}async function z2(_,$=!1){return v_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function S2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function f4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function n0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function r_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function i$(_,$=!1){let j=n0(_);if(j===null)return $;return j==="true"}function l$(_,$=null){let j=n0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function x2(_){return String(_||"").trim().toLowerCase()}function R4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return x2($[1]||"")}function B3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=x2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function Q3(_,$,j={}){let Z=R4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return B3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return x2(K?.agent_name).startsWith(Z)})}function v4(_){let $=x2(_);return $?`@${$} `:""}function U3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return B3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function F3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function Z$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let G=`${_}-file-pill`,X=`${_}-file-name`,W=`${_}-file-remove`,L=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${L}
      <span class=${X}>${$}</span>
      ${Z&&B`
        <button
          class=${W}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var f9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function R9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${H3(j)} / ${H3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,G=$/100*z,X=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function H3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function J3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:G,fileRefs:X=[],onRemoveFileRef:W,onClearFileRefs:L,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:y,activeModel:x=null,modelUsage:R=null,thinkingLevel:u=null,supportsThinking:I=!1,contextUsage:F=null,notificationsEnabled:A=!1,notificationPermission:C="default",onToggleNotifications:h,onModelChange:__,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:K_,onOpenFilePill:i,followupQueueItems:B_=[],onInjectQueuedFollowup:T_,onRemoveQueuedFollowup:o,onSubmitIntercept:$_,onMessageResponse:z_,onPopOutChat:Z_,isAgentActive:V_=!1,activeChatAgents:O_=[],currentChatJid:k_="web:default"}){let[G_,w_]=f(""),[Q_,j0]=f(""),[y_,u_]=f([]),[I_,t_]=f(!1),[Y_,a]=f([]),[A_,X_]=f(0),[D_,U_]=f(!1),[c_,F_]=f([]),[M_,_0]=f(0),[e_,f_]=f(!1),[K0,z0]=f(!1),[b_,$0]=f(!1),[U0,E0]=f([]),[F0,q0]=f(!1),[k0,s_]=f(0),m_=D(null),C0=D(null),i_=D(null),o_=D(null),y0=D(null),E_=D(null),b=D(0),e=200,P_=(Q)=>{let S=new Set,T=[];for(let d of Q||[]){if(typeof d!=="string")continue;let W_=d.trim();if(!W_||S.has(W_))continue;S.add(W_),T.push(W_)}return T},h_=()=>{let Q=n0("piclaw_compose_history");if(!Q)return[];try{let S=JSON.parse(Q);if(!Array.isArray(S))return[];return P_(S)}catch{return[]}},A0=(Q)=>{r_("piclaw_compose_history",JSON.stringify(Q))},s0=D(h_()),Y0=D(-1),O0=D(""),H0=G_.trim()||y_.length>0||X.length>0||q.length>0,w0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b0=typeof window<"u"&&typeof Notification<"u",p0=typeof window<"u"?Boolean(window.isSecureContext):!1,T$=b0&&p0&&C!=="denied",f$=C==="granted"&&A,R$=f$?"Disable notifications":"Enable notifications",g_=U3(O_,{currentChatJid:k_,limit:4}),X$=g_.length>0,r0=!j&&F3({footerWidth:k0,visibleAgentCount:g_.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),x_=x||"",L0=I&&u?` (${u})`:"",Z0=L0.trim()?`${u}`:"",a0=typeof R?.hint_short==="string"?R.hint_short.trim():"",T0=[Z0||null,a0||null].filter(Boolean).join(" • "),q$=[x_?`Current model: ${x_}${L0}`:null,R?.plan?`Plan: ${R.plan}`:null,a0||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),y$=K0?"Switching model…":q$.join(" • ")||`Current model: ${x_}${L0} (tap to open model picker)`,J0=(Q)=>{if(!Q||typeof Q!=="object")return;let S=Q.model??Q.current;if(typeof t==="function")t({model:S??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(S&&typeof __==="function")__(S)},A$=(Q)=>{let S=Q||m_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},s$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let T=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let S_=0;S_<T.length;S_+=1)if(T[S_].trim()==="Files:"&&T[S_+1]&&/^\s*-\s+/.test(T[S_+1])){d=S_;break}if(d===-1)return{content:Q,fileRefs:[]};let W_=[],L_=d+1;for(;L_<T.length;L_+=1){let S_=T[L_];if(/^\s*-\s+/.test(S_))W_.push(S_.replace(/^\s*-\s+/,"").trim());else if(!S_.trim())break;else break}if(W_.length===0)return{content:Q,fileRefs:[]};let C_=T.slice(0,d),N0=T.slice(L_);return{content:[...C_,...N0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:W_}},v$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let T=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let S_=0;S_<T.length;S_+=1)if(T[S_].trim()==="Referenced messages:"&&T[S_+1]&&/^\s*-\s+/.test(T[S_+1])){d=S_;break}if(d===-1)return{content:Q,messageRefs:[]};let W_=[],L_=d+1;for(;L_<T.length;L_+=1){let S_=T[L_];if(/^\s*-\s+/.test(S_)){let u0=S_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(u0)W_.push(u0[1])}else if(!S_.trim())break;else break}if(W_.length===0)return{content:Q,messageRefs:[]};let C_=T.slice(0,d),N0=T.slice(L_);return{content:[...C_,...N0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:W_}},w$=(Q)=>{let S=s$(Q||""),T=v$(S.content||"");return{text:T.content||"",fileRefs:S.fileRefs,messageRefs:T.messageRefs}},o$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){U_(!1),a([]);return}let S=Q.toLowerCase().split(" ")[0];if(S.length<1){U_(!1),a([]);return}let T=f9.filter((d)=>d.name.startsWith(S)||d.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(T.length>0&&!(T.length===1&&T[0].name===S))f_(!1),F_([]),a(T),X_(0),U_(!0);else U_(!1),a([])},f0=(Q)=>{let S=G_,T=S.indexOf(" "),d=T>=0?S.slice(T):"",W_=Q.name+d;w_(W_),U_(!1),a([]),requestAnimationFrame(()=>{let L_=m_.current;if(!L_)return;let C_=W_.length;L_.selectionStart=C_,L_.selectionEnd=C_,L_.focus()})},R0=(Q)=>{if(R4(Q)==null){f_(!1),F_([]);return}let S=Q3(O_,Q,{currentChatJid:k_});if(S.length>0&&!(S.length===1&&v4(S[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))U_(!1),a([]),F_(S),_0(0),f_(!0);else f_(!1),F_([])},c0=(Q)=>{let S=v4(Q?.agent_name);if(!S)return;w_(S),f_(!1),F_([]),requestAnimationFrame(()=>{let T=m_.current;if(!T)return;let d=S.length;T.selectionStart=d,T.selectionEnd=d,T.focus()})},S0=(Q)=>{if(j)j0(Q);else w_(Q),o$(Q),R0(Q);requestAnimationFrame(()=>A$())},v0=(Q)=>{let S=j?Q_:G_,T=S&&!S.endsWith(`
`)?`
`:"",d=`${S}${T}${Q}`.trimStart();S0(d)},O$=(Q)=>{let S=Q?.command?.model_label;if(S)return S;let T=Q?.command?.message;if(typeof T==="string"){let d=T.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},M0=async(Q)=>{if(j||K0)return;z0(!0);try{let S=await c$("default",Q,null,[],null,k_),T=O$(S);J0({model:T??x??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let d=await N2(k_);if(d)J0(d)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{z0(!1)}},K$=async()=>{await M0("/cycle-model")},r$=async(Q)=>{if(!Q||K0)return;if(await M0(`/model ${Q}`))$0(!1)},t0=(Q)=>{Q.preventDefault(),Q.stopPropagation(),$0((S)=>!S)},M$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return V_?"queue":null},L$=async(Q,S,T={})=>{let{includeMedia:d=!0,includeFileRefs:W_=!0,includeMessageRefs:L_=!0,clearAfterSubmit:C_=!0,recordHistory:N0=!0}=T||{},I0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:G_,S_=typeof I0==="string"?I0:"";if(!S_.trim()&&(d?y_.length===0:!0)&&(W_?X.length===0:!0)&&(L_?q.length===0:!0))return;U_(!1),a([]),f_(!1),F_([]);let u0=d?[...y_]:[],G$=W_?[...X]:[],U$=L_?[...q]:[],W$=S_.trim();if(N0&&W$){let O=s0.current,U=P_(O.filter((E)=>E!==W$));if(U.push(W$),U.length>200)U.splice(0,U.length-200);s0.current=U,A0(U),Y0.current=-1,O0.current=""}if(C_)w_(""),u_([]),L?.(),y?.();(async()=>{try{if(await $_?.({content:W$,submitMode:S,fileRefs:G$,messageRefs:U$,mediaFiles:u0})){_?.();return}let U=[];for(let n of u0){let g=await D4(n);U.push(g.id)}let E=G$.length?`Files:
${G$.map((n)=>`- ${n}`).join(`
`)}`:"",k=U$.length?`Referenced messages:
${U$.map((n)=>`- message:${n}`).join(`
`)}`:"",m=U.length?`Images:
${U.map((n,g)=>{let W0=u0[g]?.name||`image-${g+1}`;return`- attachment:${n} (${W0})`}).join(`
`)}`:"",s=[W$,E,k,m].filter(Boolean).join(`

`),r=await c$("default",s,null,U,M$(S),k_);if(z_?.(r),r?.command){J0({model:r.command.model_label??x??null,thinking_level:r.command.thinking_level,supports_thinking:r.command.supports_thinking});try{let n=await N2(k_);if(n)J0(n)}catch{}}_?.()}catch(O){console.error("Failed to post:",O)}})()},z$=(Q)=>{T_?.(Q)},e0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),j0(""),G?.();return}if(e_&&c_.length>0){let S=m_.current?.value??(j?Q_:G_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))f_(!1),F_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),_0((T)=>(T+1)%c_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),_0((T)=>(T-1+c_.length)%c_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),c0(c_[M_]);return}if(Q.key==="Escape"){Q.preventDefault(),f_(!1),F_([]);return}}}if(D_&&Y_.length>0){let S=m_.current?.value??(j?Q_:G_);if(!String(S||"").startsWith("/"))U_(!1),a([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),X_((T)=>(T+1)%Y_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),X_((T)=>(T-1+Y_.length)%Y_.length);return}if(Q.key==="Tab"){Q.preventDefault(),f0(Y_[A_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(m_.current?.value??(j?Q_:G_)).includes(" ")){Q.preventDefault();let W_=Y_[A_];U_(!1),a([]),L$(W_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),U_(!1),a([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let S=m_.current;if(!S)return;let T=S.value||"",d=S.selectionStart===0&&S.selectionEnd===0,W_=S.selectionStart===T.length&&S.selectionEnd===T.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&W_){let L_=s0.current;if(!L_.length)return;Q.preventDefault();let C_=Y0.current;if(Q.key==="ArrowUp"){if(C_===-1)O0.current=T,C_=L_.length-1;else if(C_>0)C_-=1;Y0.current=C_,S0(L_[C_]||"")}else{if(C_===-1)return;if(C_<L_.length-1)C_+=1,Y0.current=C_,S0(L_[C_]||"");else Y0.current=-1,S0(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let N0=m_.current;if(!N0)return;let I0=N0.value.length;N0.selectionStart=I0,N0.selectionEnd=I0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let S=m_.current?.value??(j?Q_:G_);if(j){if(S.trim())N?.(S.trim(),Z)}else L$(S,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let S=m_.current?.value??(j?Q_:G_);if(j){if(S.trim())N?.(S.trim(),Z)}else L$(S)}},G0=(Q)=>{let S=Array.from(Q||[]).filter((T)=>T&&T.type&&T.type.startsWith("image/"));if(!S.length)return;u_((T)=>[...T,...S])},P$=(Q)=>{G0(Q.target.files),Q.target.value=""},C$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),b.current+=1,t_(!0)},_$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),b.current=Math.max(0,b.current-1),b.current===0)t_(!1)},B$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";t_(!0)},b$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),b.current=0,t_(!1),G0(Q.dataTransfer?.files||[])},a$=(Q)=>{if(j)return;let S=Q.clipboardData?.items;if(!S||!S.length)return;let T=[];for(let d of S){if(d.kind!=="file")continue;let W_=d.getAsFile?.();if(W_)T.push(W_)}if(T.length>0)Q.preventDefault(),G0(T)},D0=(Q)=>{u_((S)=>S.filter((T,d)=>d!==Q))},Y$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:S,longitude:T,accuracy:d}=Q.coords,W_=`${S.toFixed(5)}, ${T.toFixed(5)}`,L_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",C_=`https://maps.google.com/?q=${S},${T}`,N0=`Location: ${W_}${L_} ${C_}`;v0(N0)},(Q)=>{let S=Q?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!b_)return;q0(!0),N2(k_).then((Q)=>{let S=Array.isArray(Q?.models)?Q.models.filter((T)=>typeof T==="string"&&T.trim().length>0):[];S.sort((T,d)=>T.localeCompare(d,void 0,{sensitivity:"base"})),E0(S),J0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),E0([])}).finally(()=>{q0(!1)})},[b_,x]),v(()=>{if(j)$0(!1),U_(!1),a([]),f_(!1),F_([])},[j]),v(()=>{if(!b_)return;let Q=(S)=>{let T=o_.current,d=y0.current,W_=S.target;if(T&&T.contains(W_))return;if(d&&d.contains(W_))return;$0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[b_]),v(()=>{let Q=()=>{let L_=E_.current?.clientWidth||0;s_((C_)=>C_===L_?C_:L_)};Q();let S=E_.current,T=0,d=()=>{if(T)cancelAnimationFrame(T);T=requestAnimationFrame(()=>{T=0,Q()})},W_=null;if(S&&typeof ResizeObserver<"u")W_=new ResizeObserver(()=>d()),W_.observe(S);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(T)cancelAnimationFrame(T);if(W_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,x,g_.length,F?.percent]);let Q$=(Q)=>{let S=Q.target.value;A$(Q.target),S0(S)};return v(()=>{requestAnimationFrame(()=>A$())},[G_,Q_,j]),v(()=>{if(j)return;R0(G_)},[O_,k_,G_,j]),B`
        <div class="compose-box">
            ${!j&&B_.length>0&&B`
                <div class="compose-queue-stack">
                    ${B_.map((Q)=>{let S=typeof Q?.content==="string"?Q.content:"",T=w$(S);if(!T.text.trim()&&T.fileRefs.length===0&&T.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${S}>
                                    ${T.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${T.text}</div>
                                    `}
                                    ${(T.messageRefs.length>0||T.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${T.messageRefs.map((d)=>B`
                                                <${Z$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${T.fileRefs.map((d)=>{let W_=d.split("/").pop()||d;return B`
                                                    <${Z$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${W_}
                                                        title=${d}
                                                        onClick=${()=>i?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>z$(Q)}
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
                                    onClick=${()=>o?.(Q)}
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
                class=${`compose-input-wrapper${I_?" drag-active":""}`}
                onDragEnter=${C$}
                onDragOver=${B$}
                onDragLeave=${_$}
                onDrop=${b$}
            >
                <div class="compose-input-main">
                    ${(X.length>0||y_.length>0||q.length>0)&&B`
                        <div class="compose-file-refs">
                            ${q.map((Q)=>{return B`
                                    <${Z$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(Q)}
                                    />
                                `})}
                            ${X.map((Q)=>{let S=Q.split("/").pop()||Q;return B`
                                    <${Z$}
                                        prefix="compose"
                                        label=${S}
                                        title=${Q}
                                        onClick=${()=>i?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>W?.(Q)}
                                    />
                                `})}
                            ${y_.map((Q,S)=>{let T=Q?.name||`image-${S+1}`;return B`
                                    <${Z$}
                                        key=${T+S}
                                        prefix="compose"
                                        label=${T}
                                        title=${T}
                                        removeTitle="Remove image"
                                        onRemove=${()=>D0(S)}
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
                        ref=${m_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Q_:G_}
                        onInput=${Q$}
                        onKeyDown=${e0}
                        onPaste=${a$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${e_&&c_.length>0&&B`
                        <div class="slash-autocomplete" ref=${i_}>
                            ${c_.map((Q,S)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${S===M_?" active":""}`}
                                    onMouseDown=${(T)=>{T.preventDefault(),c0(Q)}}
                                    onMouseEnter=${()=>_0(S)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D_&&Y_.length>0&&B`
                        <div class="slash-autocomplete" ref=${C0}>
                            ${Y_.map((Q,S)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${S===A_?" active":""}`}
                                    onMouseDown=${(T)=>{T.preventDefault(),f0(Q)}}
                                    onMouseEnter=${()=>X_(S)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${b_&&!j&&B`
                        <div class="compose-model-popup" ref=${o_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&U0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&U0.map((Q)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${x===Q?" active":""}`}
                                        onClick=${()=>{r$(Q)}}
                                        disabled=${K0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{K$()}}
                                    disabled=${K0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${E_}>
                    ${!j&&x&&B`
                    <div class="compose-meta-row">
                        ${!j&&x&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${y0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y$}
                                    aria-label="Open model picker"
                                    onClick=${t0}
                                    disabled=${K0}
                                >
                                    ${K0?"Switching…":x_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!K0&&T0&&B`
                                        <span class="compose-model-usage-hint" title=${y$}>
                                            ${T0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${r0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${g_.map((Q)=>B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>c0(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&B`
                        <${R9} usage=${F} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>K?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:z}
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
                    ${w0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Y$}
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
                    ${T$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${f$?" active":""}`}
                            onClick=${h}
                            title=${R$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${l&&K_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${X.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${P$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{L$()}}
                            disabled=${!H0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var E3="piclaw_theme",g4="piclaw_tint",R2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},v9={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},D3={default:{label:"Default",mode:"auto",light:R2,dark:v9},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},u9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],v2={theme:"default",tint:null},k3="light",u4=!1;function y3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function n$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function m9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),G=parseInt(N[3],10);if(![K,z,G].every((W)=>Number.isFinite(W)))return null;let X=`#${[K,z,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:G,hex:X}}function A3(_){return n$(_)||m9(_)}function Y2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function m4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function g9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function p9(_){return g9(_)>0.4?"#000000":"#ffffff"}function w3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function p4(_){return D3[_]||D3.default}function c9(_){return _.mode==="auto"?w3():_.mode}function h9(_,$){let j=p4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||R2}function i9(_,$,j){let Z=A3($);if(!Z)return _;let N=n$(_.bgPrimary),K=n$(_.bgSecondary),z=n$(_.bgHover),G=n$(_.borderColor);if(!N||!K||!z||!G)return _;let W=n$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Y2(N,Z,0.08),bgSecondary:Y2(K,Z,0.12),bgHover:Y2(z,Z,0.16),borderColor:Y2(G,Z,0.08),accent:Z.hex,accentHover:W?Y2(Z,W,0.18):Z.hex}}function l9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=A3(Z),K=N?m4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?m4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?m4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X=N?p9(N):$==="dark"?"#000000":"#ffffff",W={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":G,"--accent-contrast-text":X,"--danger-color":_.danger||R2.danger,"--success-color":_.success||R2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(W).forEach(([L,q])=>{if(q)j.style.setProperty(L,q)})}function n9(){if(typeof document>"u")return;let _=document.documentElement;u9.forEach(($)=>_.style.removeProperty($))}function T2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function d9(_,$){if(typeof document>"u")return;let j=T2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=T2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=T2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=T2("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function s9(){if(typeof window>"u")return;let _={...v2,mode:k3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=y3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=p4(j),K=c9(N),z=h9(j,K);v2={theme:j,tint:Z},k3=K;let G=document.documentElement;G.dataset.theme=K,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=K;let X=z;if(j==="default"&&Z)X=i9(z,Z,K);if(j==="default"&&!Z)n9();else l9(X,K);if(d9(X.bgPrimary,K),s9(),$.persist!==!1)if(r_(E3,j),Z)r_(g4,Z);else r_(g4,"")}function f2(){if(p4(v2.theme).mode!=="auto")return;c4(v2,{persist:!1})}function M3(){if(typeof window>"u")return()=>{};let _=y3(n0(E3)||"default"),$=n0(g4),j=$?$.trim():null;if(c4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f2);else if(Z.addListener)Z.addListener(f2);return u4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f2);else if(Z.removeListener)Z.removeListener(f2);u4=!1}}return()=>{}}function P3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;c4({theme:j||"default",tint:Z},{persist:!0})}function C3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return w3()}var u2=/#(\w+)/g,o9=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),r9=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),a9=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),t9={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},e9=new Set(["http:","https:","mailto:",""]);function b3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function S$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!e9.has(Z.protocol))return null;return Z.href}catch{return null}}function S3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let G=z.tagName.toLowerCase();if(!r9.has(G)){let W=z.parentNode;if(!W)continue;while(z.firstChild)W.insertBefore(z.firstChild,z);W.removeChild(z);continue}let X=t9[G]||new Set;for(let W of Array.from(z.attributes)){let L=W.name.toLowerCase(),q=W.value;if(L.startsWith("on")){z.removeAttribute(W.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(X.has(L)||a9.has(L)){if(L==="href"){let H=S$(q);if(!H)z.removeAttribute(W.name);else if(z.setAttribute(W.name,H),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,y=S$(H,{allowDataImage:G==="img"});if(!y)z.removeAttribute(W.name);else z.setAttribute(W.name,y)}continue}z.removeAttribute(W.name)}}return j.body.innerHTML}function I3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=I3(j);if(N===j)break;j=N}return j}function _7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let G of j){if(!K&&G.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&G.trim().match(/^```\s*$/)){let X=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${X}@@`),K=!1,z=[];continue}if(K)z.push(G);else N.push(G)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function $7(_){if(!_)return _;return m2(_,5)}function j7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function Z7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function N7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=$7(K);return`<div class="mermaid-container" data-mermaid="${j7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function x3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function T3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!X||!o9.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;return`<${X}>`})}function f3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function R3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function K7(_){if(!window.katex)return _;let $=(z)=>I3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let G=[],X=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_BLOCK_${L}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let L=G.length;return G.push(W),`@@CODE_INLINE_${L}@@`}),{html:X,blocks:G}},Z=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,W)=>{let L=Number(W);return G[L]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,X)=>{try{let W=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${b3(W.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,X)=>{if(/\s$/.test(X))return z;try{let W=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${b3(W.message)}">$${X}$</span>`}}),Z(K,N.blocks)}function z7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(u2.lastIndex=0,!u2.test(z))continue;u2.lastIndex=0;let G=K.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let X=z.split(u2);if(X.length<=1)continue;let W=$.createDocumentFragment();X.forEach((L,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,W.appendChild(H)}else W.appendChild($.createTextNode(L))}),K.parentNode?.replaceChild(W,K)}return $.body.innerHTML}function Y7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function g0(_,$,j={}){if(!_)return"";let Z=Y7(_),{text:N,blocks:K}=_7(Z),z=m2(N,2),X=x3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=T3(X),L=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return L=f3(L),L=R3(L),L=K7(L),L=z7(L),L=N7(L,K),L=S3(L,j),L}function g2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=m2($,2),N=x3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=T3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=f3(z),z=R3(z),z=S3(z),z}async function J$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=C3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let G=z.dataset.mermaid,X=Z7(G||""),W=m2(X,2),L=await $(W,{...N,transparent:!0});z.innerHTML=L,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(X),z.removeAttribute("data-mermaid")}}function v3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function u3(_){return String(_||"").trim()||"web:default"}function m3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function g3(_){if(!_)return!1;return _.status!=="running"}function p3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function c3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?g2(_.thinking):"",G=_?.answer?g0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&z)J$(N.current).catch(()=>{})},[z]),v(()=>{if(K.current&&G)J$(K.current).catch(()=>{})},[G]),!_)return null;let X=_.status==="running",W=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),q=m3(_),H=g3(_),y=!X&&W,x=X?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${x}</span>
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
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${q&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!y}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var h3="PiClaw";function h4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,G=K[z],X=Z.trim().toLowerCase(),W=typeof $==="string"?$.trim():"",L=W?W:null,q=j||X==="PiClaw".toLowerCase()||X==="pi";return{letter:N,color:G,image:L||(q?"/static/icon-192.png":null)}}function i3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function l3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function n3(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",G=K?.dataset?.tint||"",X=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(X&&(G||z&&z!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function G7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function G2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function d3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return G2(_)?"Compacting context":"Working..."}function W7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function s3(_,$=Date.now()){let j=G7(_);if(j===null)return null;return W7(Math.max(0,$-j))}function o3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:G,onPanelToggle:X}){let q=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let U_=a,c_=U_?U_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:U_,totalLines:c_,fullText:U_}}let A_=a.text||"",X_=a.fullText||a.full_text||A_,D_=Number.isFinite(a.totalLines)?a.totalLines:X_?X_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:D_,fullText:X_}},H=160,y=(a)=>String(a||"").replace(/<\/?internal>/gi,""),x=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},R=(a,A_,X_)=>{let D_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(X_)?X_:0,visibleLines:0};let U_=D_.split(`
`),c_=U_.length>A_?U_.slice(0,A_).join(`
`):D_,F_=Number.isFinite(X_)?X_:U_.reduce((e_,f_)=>e_+x(f_),0),M_=c_?c_.split(`
`).reduce((e_,f_)=>e_+x(f_),0):0,_0=Math.max(F_-M_,0);return{text:c_,omitted:_0,totalLines:F_,visibleLines:M_}},u=q(j),I=q(Z),F=q($),A=Boolean(u.text)||u.totalLines>0,C=Boolean(I.text)||I.totalLines>0,h=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!h&&!A&&!C&&!N&&!K)return null;let[__,t]=f(new Set),[l,K_]=f(()=>Date.now()),i=(a)=>t((A_)=>{let X_=new Set(A_),D_=!X_.has(a);if(D_)X_.add(a);else X_.delete(a);if(typeof X==="function")X(a,D_);return X_});v(()=>{t(new Set)},[z]);let B_=G2(_);v(()=>{if(!B_)return;K_(Date.now());let a=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(a)},[B_,_?.started_at,_?.startedAt]);let T_=_?.turn_id||z,o=n3(T_),$_=G?"turn-dot turn-dot-queued":"turn-dot",z_=(a)=>a,Z_=Boolean(_?.last_activity||_?.lastActivity),V_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":o,O_=K?.kind||"info",k_=V_(O_),G_=V_(_?.kind||(B_?"warning":"info")),w_="",Q_=_?.title,j0=_?.status;if(_?.type==="plan")w_=Q_?`Planning: ${Q_}`:"Planning...";else if(_?.type==="tool_call")w_=Q_?`Running: ${Q_}`:"Running tool...";else if(_?.type==="tool_status")w_=Q_?`${Q_}: ${j0||"Working..."}`:j0||"Working...";else if(_?.type==="error")w_=Q_||"Agent error";else w_=Q_||j0||"Working...";if(Z_)w_="Last activity just now";let y_=({panelTitle:a,text:A_,fullText:X_,totalLines:D_,maxLines:U_,titleClass:c_,panelKey:F_})=>{let M_=__.has(F_),_0=X_||A_||"",e_=F_==="thought"||F_==="draft"?y(_0):_0,f_=typeof U_==="number",K0=M_&&f_,z0=f_?R(e_,U_,D_):{text:e_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!e_&&!(Number.isFinite(z0.totalLines)&&z0.totalLines>0))return null;let b_=`agent-thinking-body${f_?" agent-thinking-body-collapsible":""}`,$0=f_?`--agent-thinking-collapsed-lines: ${U_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${M_?"true":"false"}
                data-collapsible=${f_?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
            >
                <div class="agent-thinking-title ${c_||""}">
                    ${o&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${a}
                    ${K0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>i(F_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${b_}
                    style=${$0}
                    dangerouslySetInnerHTML=${{__html:g2(e_)}}
                />
                ${!M_&&z0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(F_)}>
                        ▸ ${z0.omitted} more lines
                    </button>
                `}
                ${M_&&z0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(F_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},u_=N?.tool_call?.title,I_=u_?`Awaiting approval: ${u_}`:"Awaiting approval",t_=B_?s3(_,l):null,Y_=(a,A_,X_=null)=>{let D_=d3(a);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${A_?`--turn-color: ${A_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${A_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${X_&&B`<span class="agent-status-elapsed">${X_}</span>`}
                </div>
                ${a.detail&&B`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${K&&Y_(K,k_)}
            ${_?.type==="intent"&&Y_(_,G_,t_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${I_}</span>
                </div>
            `}
            ${A&&y_({panelTitle:z_("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${C&&y_({panelTitle:z_("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${h&&y_({panelTitle:z_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    ${o&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${w_}</span>
                </div>
            `}
        </div>
    `}function r3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",G=Z?.kind||"other",X=Z?.rawInput||{},W=X.command||X.commands&&X.commands[0]||null,L=X.diff||null,q=X.fileName||X.path||null,H=Z?.description||X.description||X.explanation||null,x=(Array.isArray(Z?.locations)?Z.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),R=Array.from(new Set([q,...x].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let u=async(A)=>{try{await C2(j,A,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},I=async()=>{try{await k4(z,`Auto-approved: ${z}`),await C2(j,"approved",K||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},F=N&&N.length>0;return B`
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
                ${(H||W||L||R.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${R.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((A,C)=>B`<li key=${C}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${W&&B`
                            <pre class="agent-request-command">${W}</pre>
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
                    ${F?N.map((A)=>B`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>u(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>u("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>u("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${I}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function a3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function t3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let X=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${W}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function W2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function d0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function I$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var V7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),X7=new Set(["text/markdown"]);function V2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(V7.has($)||$.startsWith("text/"))return"text";return"unsupported"}function e3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return X7.has($)}function _6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function q7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function O7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function $6(_){return q7(_)||O7(_)}function p2(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function L7(_,$){let j=Math.max(p2(_),p2($)),Z=Math.min(p2(_),p2($));return(j+0.05)/(Z+0.05)}function B7(_,$,j="#ffffff"){let Z=$6(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let G=$6(z);if(!G)continue;let X=L7(Z,G);if(X>K)N=z,K=X}return N}function i4(){let _=getComputedStyle(document.documentElement),$=(x,R)=>{for(let u of x){let I=_.getPropertyValue(u).trim();if(I)return I}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),W=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),y=B7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:G,good:X,warning:W,attention:L,border:q,fontFamily:H,buttonTextColor:y}}function j6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:G,border:X,fontFamily:W}=i4();return{fontFamily:W,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Q7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),Z6=!1,c2=null,N6=!1;function l4(_){_.querySelector(".adaptive-card-notice")?.remove()}function U7(_,$,j="error"){l4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function F7(_,$=(j)=>g0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function H7(_=($)=>g0($,null)){return($,j)=>{try{let Z=F7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function J7(_){if(N6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=H7(),N6=!0}async function D7(){if(Z6)return;if(c2)return c2;return c2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{Z6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c2}function E7(){return globalThis.AdaptiveCards}function k7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function y7(_){return Q7.has(_)}function d4(_){if(!Array.isArray(_))return[];return _.filter(k7)}function A7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function n4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>n4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${n4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function w7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return n4($);return typeof $==="string"?$:String($)}function M7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=w7(z.type,j[z.id],z);for(let[G,X]of Object.entries(z))if(Array.isArray(X)||X&&typeof X==="object")z[G]=Z(X);return z};return Z(_)}function P7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function C7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function b7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=C7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function K6(_,$,j){if(!y7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await D7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=E7();J7(Z);let N=new Z.AdaptiveCard,K=i4();N.hostConfig=new Z.HostConfig(j6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:M7($.payload,z);N.parse(G),N.onExecuteAction=(L)=>{let q=A7(L);if(j?.onAction)l4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let y=H instanceof Error?H.message:String(H||"Action failed.");U7(_,y||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let X=N.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let W=b7($);if(W){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=W.label,L.appendChild(q),W.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=W.detail,L.appendChild(H)}_.appendChild(L)}if(l4(_),_.appendChild(X),W)P7(X);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function d$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${d$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function S7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function s4(_){if(!Array.isArray(_))return[];return _.filter(S7)}function z6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=d$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:d$(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function Y6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:d$(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):d$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function I7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?d0($):null},{label:"Added",value:_?.created_at?I$(_.created_at):null}].filter((Z)=>Z.value)}function G6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=d_(()=>V2($?.content_type),[$?.content_type]),K=_6(N),z=d_(()=>e3($?.content_type),[$?.content_type]),[G,X]=f(N==="text"||N==="pdf"),[W,L]=f(""),[q,H]=f(null),[y,x]=f(null),R=D(null),u=d_(()=>I7($),[$]),I=d_(()=>{if(!z||!W)return"";return g0(W)},[z,W]);return v(()=>{let F=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),v(()=>{if(!R.current||!I)return;J$(R.current);return},[I]),v(()=>{let F=!1,A=null;async function C(){if(N==="text"){X(!0),x(null);try{let h=await M4(_);if(!F)L(h)}catch{if(!F)x("Failed to load text preview.")}finally{if(!F)X(!1)}return}if(N==="pdf"){X(!0),x(null);try{let h=await P4(_);if(A=URL.createObjectURL(h),!F)H(A)}catch{if(!F)x("Failed to load PDF preview.")}finally{if(!F)X(!1)}return}X(!1)}return C(),()=>{if(F=!0,A)URL.revokeObjectURL(A)}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${j$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&y&&B`<div class="attachment-preview-state">${y}</div>`}
                    ${!G&&!y&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${j$(_)} alt=${Z} />
                    `}
                    ${!G&&!y&&N==="pdf"&&q&&B`
                        <iframe class="attachment-preview-frame" src=${q} title=${Z}></iframe>
                    `}
                    ${!G&&!y&&N==="text"&&z&&B`
                        <div
                            ref=${R}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:I}}
                        />
                    `}
                    ${!G&&!y&&N==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${W}</pre>
                    `}
                    ${!G&&!y&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${u.map((F)=>B`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function W6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function x7({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(v(()=>{h$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?d0(K):"",X=V2(j.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(W)=>W.stopPropagation()}>
            <a href=${j$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&B`<span class="file-size">${z}</span>`}
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
                onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function T7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);v(()=>{if(!Number.isFinite(j))return;h$(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?j$(j):null,X=V2(Z?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${K}>
            ${z?B`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(W)=>W.stopPropagation()}>
                        <${Z$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:B`
                    <${Z$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function h2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?I$(Z):null;return B`
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
    `}function f7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?d0(_.size):"",N=_.mime_type||"",K=v7(N),z=S$(_.uri);return B`
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
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function R7({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:z||"application/octet-stream"}),W=URL.createObjectURL(X),L=document.createElement("a");L.href=W,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function v7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function u7({preview:_}){let $=S$(_.url),j=S$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function m7(_,$){return typeof _==="string"?_:""}var g7=1800,p7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,c7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,h7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function i7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function l7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let G=z||"idle";if(K.dataset.copyState=G,G==="success")K.innerHTML=c7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(G==="error")K.innerHTML=h7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=p7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),z.appendChild(G);let X=async(W)=>{W.preventDefault(),W.stopPropagation();let q=K.querySelector("code")?.textContent||"",H=await i7(q);N(G,H?"success":"error");let y=j.get(G);if(y)clearTimeout(y);let x=setTimeout(()=>{N(G,"idle"),j.delete(G)},g7);j.set(G,x)};G.addEventListener("click",X),Z.push(()=>{G.removeEventListener("click",X);let W=j.get(G);if(W)clearTimeout(W);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function n7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Files:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W))N.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),G=j.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:N}}function d7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Referenced messages:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W)){let q=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!W.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),G=j.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:N}}function s7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<j.length;W+=1)if(j[W].trim()==="Images:"&&j[W+1]&&/^\s*-\s+/.test(j[W+1])){Z=W;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let W=j[K];if(/^\s*-\s+/.test(W)){let L=W.replace(/^\s*-\s+/,"").trim(),q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],y=(q[2]||"").trim()||H;N.push({id:H,label:y,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!W.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),G=j.slice(K),X=[...z,...G].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:N}}function o7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(o7).sort((L,q)=>q.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),X=[],W;while(W=G.nextNode())X.push(W);for(let L of X){let q=L.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let y=q.split(N).filter((R)=>R!=="");if(y.length===0)continue;let x=z.createDocumentFragment();for(let R of y)if(K.test(R)){let u=z.createElement("mark");u.className="search-highlight-term",u.textContent=R,x.appendChild(u)}else x.appendChild(z.createTextNode(R));L.parentNode.replaceChild(x,L)}return z.body.innerHTML}function V6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:G,userAvatarUrl:X,userAvatarBackground:W,onDelete:L,isThreadReply:q,isThreadPrev:H,isThreadNext:y,isRemoving:x,highlightQuery:R,onFileRef:u}){let[I,F]=f(null),A=D(null),C=_.data,h=C.type==="agent_response",__=G||"You",t=h?K||h3:__,l=h?h4(K,z,!0):h4(__,X),K_=typeof W==="string"?W.trim().toLowerCase():"",i=!h&&l.image&&(K_==="clear"||K_==="transparent"),B_=h&&Boolean(l.image),T_=`background-color: ${i||B_?"transparent":l.color}`,o=C.content_meta,$_=Boolean(o?.truncated),z_=Boolean(o?.preview),Z_=$_&&!z_,V_=$_?{originalLength:Number.isFinite(o?.original_length)?o.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,O_=C.content_blocks||[],k_=C.media_ids||[],G_=m7(C.content,C.link_previews),{content:w_,fileRefs:Q_}=n7(G_),{content:j0,messageRefs:y_}=d7(w_),{content:u_,attachments:I_}=s7(j0);G_=u_;let t_=d4(O_),Y_=s4(O_),a=t_.length===1&&typeof t_[0]?.fallback_text==="string"?t_[0].fallback_text.trim():"",A_=Y_.length===1?z6(Y_[0]).trim():"",X_=Boolean(a)&&G_?.trim()===a||Boolean(A_)&&G_?.trim()===A_,D_=Boolean(G_)&&!Z_&&!X_,U_=typeof R==="string"?R.trim():"",c_=d_(()=>{if(!G_||X_)return"";let b=g0(G_,j);return U_?r7(b,U_):b},[G_,X_,U_]),F_=(b,e)=>{b.stopPropagation(),F(j$(e))},[M_,_0]=f(null),e_=(b)=>{_0(b)},f_=(b)=>{b.stopPropagation(),L?.(_)},K0=(b,e)=>{let P_=new Set;if(!b||e.length===0)return{content:b,usedIds:P_};return{content:b.replace(/attachment:([^\s)"']+)/g,(A0,s0,Y0,O0)=>{let H0=s0.replace(/^\/+/,""),b0=e.find((o0)=>o0.name&&o0.name.toLowerCase()===H0.toLowerCase()&&!P_.has(o0.id))||e.find((o0)=>!P_.has(o0.id));if(!b0)return A0;if(P_.add(b0.id),O0.slice(Math.max(0,Y0-2),Y0)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:P_}},z0=[],b_=[],$0=[],U0=[],E0=[],F0=[],q0=0;if(O_.length>0)O_.forEach((b)=>{if(b?.type==="text"&&b.annotations)F0.push(b.annotations);if(b?.type==="resource_link")U0.push(b);else if(b?.type==="resource")E0.push(b);else if(b?.type==="file"){let e=k_[q0++];if(e)b_.push(e),$0.push({id:e,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let e=k_[q0++];if(e){let P_=typeof b?.mime_type==="string"?b.mime_type:void 0;z0.push({id:e,annotations:b?.annotations,mimeType:P_}),$0.push({id:e,name:b?.name||b?.filename||b?.title})}}});else if(k_.length>0)k_.forEach((b)=>{z0.push({id:b,annotations:null}),$0.push({id:b,name:null})});if(I_.length>0)I_.forEach((b)=>{if(!b?.id)return;let e=$0.find((P_)=>String(P_.id)===String(b.id));if(e&&!e.name)e.name=b.label});let{content:k0,usedIds:s_}=K0(G_,$0);G_=k0;let m_=z0.filter(({id:b})=>!s_.has(b)),C0=b_.filter((b)=>!s_.has(b)),i_=I_.length>0?I_.map((b,e)=>({id:b.id||`attachment-${e+1}`,label:b.label||`attachment-${e+1}`})):$0.map((b,e)=>({id:b.id,label:b.name||`attachment-${e+1}`})),o_=d_(()=>d4(O_),[O_]),y0=d_(()=>s4(O_),[O_]);v(()=>{if(!A.current)return;return J$(A.current),l7(A.current)},[c_]);let E_=D(null);return v(()=>{if(!E_.current||o_.length===0)return;let b=E_.current;b.innerHTML="";for(let e of o_){let P_=document.createElement("div");b.appendChild(P_),K6(P_,e,{onAction:async(h_)=>{if(h_.type==="Action.OpenUrl"){let A0=S$(h_.url||"");if(!A0)throw Error("Invalid URL");window.open(A0,"_blank","noopener,noreferrer");return}if(h_.type==="Action.Submit"){await E4({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:h_.type,title:h_.title||"",data:h_.data}});return}console.warn("[post] unsupported adaptive card action:",h_.type,h_)}}).catch((h_)=>{console.error("[post] adaptive card render error:",h_),P_.textContent=e.fallback_text||"Card failed to render."})}},[o_,C.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${h?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${y?"thread-next":""} ${x?"removing":""}" onClick=${$}>
            <div class="post-avatar ${h?"agent-avatar":""} ${l.image?"has-image":""}" style=${T_}>
                ${l.image?B`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${f_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Z)Z(_.id)}}>${t3(_.timestamp)}</a>
                </div>
                ${Z_&&V_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${W2(V_.originalLength)} chars
                            ${V_.maxLength?B` • Display limit: ${W2(V_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${z_&&V_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${W2(V_.maxLength)} of ${W2(V_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(Q_.length>0||y_.length>0||i_.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((b)=>{let e=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),N)N(b,_.chat_jid||null);else{let h_=document.getElementById("post-"+b);if(h_)h_.scrollIntoView({behavior:"smooth",block:"center"}),h_.classList.add("post-highlight"),setTimeout(()=>h_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Z$}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${Q_.map((b)=>{let e=b.split("/").pop()||b;return B`
                                <${Z$}
                                    prefix="post"
                                    label=${e}
                                    title=${b}
                                    onClick=${()=>u?.(b)}
                                />
                            `})}
                        ${i_.map((b)=>B`
                            <${T7}
                                key=${b.id}
                                attachment=${b}
                                onPreview=${e_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&B`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:c_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let e=b.target.dataset.hashtag;if(e)j?.(e)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),F(b.target.src)}}
                    />
                `}
                ${o_.length>0&&B`
                    <div ref=${E_} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((b,e)=>{let P_=Y6(b);return B`
                                <div key=${`${b.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${I$(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&B`
                    ${F0.map((b,e)=>B`
                        <${h2} key=${e} annotations=${b} />
                    `)}
                `}
                ${m_.length>0&&B`
                    <div class="media-preview">
                        ${m_.map(({id:b,mimeType:e})=>{let h_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?j$(b):w4(b);return B`
                                <img 
                                    key=${b} 
                                    src=${h_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(A0)=>F_(A0,b)}
                                />
                            `})}
                    </div>
                `}
                ${m_.length>0&&B`
                    ${m_.map(({annotations:b},e)=>B`
                        ${b&&B`<${h2} key=${e} annotations=${b} />`}
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="file-attachments">
                        ${C0.map((b)=>B`
                            <${x7} key=${b} mediaId=${b} onPreview=${e_} />
                        `)}
                    </div>
                `}
                ${U0.length>0&&B`
                    <div class="resource-links">
                        ${U0.map((b,e)=>B`
                            <div key=${e}>
                                <${f7} block=${b} />
                                <${h2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${E0.length>0&&B`
                    <div class="resource-embeds">
                        ${E0.map((b,e)=>B`
                            <div key=${e}>
                                <${R7} block=${b} />
                                <${h2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${C.link_previews.map((b,e)=>B`
                            <${u7} key=${e} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${I&&B`<${W6} src=${I} onClose=${()=>F(null)} />`}
        ${M_&&B`
            <${G6}
                mediaId=${M_.mediaId}
                info=${M_.info}
                onClose=${()=>_0(null)}
            />
        `}
    `}function X6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:G,emptyMessage:X,timelineRef:W,agents:L,user:q,onDeletePost:H,reverse:y=!0,removingPostIds:x,searchQuery:R}){let[u,I]=f(!1),F=D(null),A=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||u)return;I(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,u,j]),h=P((o)=>{let{scrollTop:$_,scrollHeight:z_,clientHeight:Z_}=o.target,V_=y?z_-Z_-$_:$_,O_=Math.max(300,Z_);if(V_<O_)C()},[y,C]);v(()=>{if(!A)return;let o=F.current,$_=W?.current;if(!o||!$_)return;let z_=300,Z_=new IntersectionObserver((V_)=>{for(let O_ of V_){if(!O_.isIntersecting)continue;C()}},{root:$_,rootMargin:`${z_}px 0px ${z_}px 0px`,threshold:0});return Z_.observe(o),()=>Z_.disconnect()},[A,$,j,W,C]);let __=D(C);if(__.current=C,v(()=>{if(A)return;if(!W?.current)return;let{scrollTop:o,scrollHeight:$_,clientHeight:z_}=W.current,Z_=y?$_-z_-o:o,V_=Math.max(300,z_);if(Z_<V_)__.current?.()},[A,_,$,y,W]),v(()=>{if(!W?.current)return;if(!$||u)return;let{scrollTop:o,scrollHeight:$_,clientHeight:z_}=W.current,Z_=y?$_-z_-o:o,V_=Math.max(300,z_);if($_<=z_+1||Z_<V_)__.current?.()},[_,$,u,y,W]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((o,$_)=>o.id-$_.id),l=(o)=>{let $_=o?.data?.thread_id;if($_===null||$_===void 0||$_==="")return null;let z_=Number($_);return Number.isFinite(z_)?z_:null},K_=new Map;for(let o=0;o<t.length;o+=1){let $_=t[o],z_=Number($_?.id),Z_=l($_);if(Z_!==null){let V_=K_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};V_.replyIndexes.push(o),K_.set(Z_,V_)}else if(Number.isFinite(z_)){let V_=K_.get(z_)||{anchorIndex:-1,replyIndexes:[]};V_.anchorIndex=o,K_.set(z_,V_)}}let i=new Map;for(let[o,$_]of K_.entries()){let z_=new Set;if($_.anchorIndex>=0)z_.add($_.anchorIndex);for(let Z_ of $_.replyIndexes)z_.add(Z_);i.set(o,Array.from(z_).sort((Z_,V_)=>Z_-V_))}let B_=t.map((o,$_)=>{let z_=l(o);if(z_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=i.get(z_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let V_=Z_.indexOf($_);if(V_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:V_>0,hasThreadNext:V_<Z_.length-1}}),T_=B`<div class="timeline-sentinel" ref=${F}></div>`;return B`
        <div class="timeline ${y?"reverse":"normal"}" ref=${W} onScroll=${h}>
            <div class="timeline-content">
                ${y?T_:null}
                ${t.map((o,$_)=>{let z_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),Z_=x?.has?.(o.id),V_=B_[$_]||{};return B`
                    <${V6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${z_}
                        isThreadPrev=${V_.hasThreadPrev}
                        isThreadNext=${V_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${R}
                        agentName=${i3(o.data?.agent_id,L||{})}
                        agentAvatarUrl=${l3(o.data?.agent_id,L||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(o)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${y?null:T_}
            </div>
        </div>
    `}class q6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var a_=new q6;var i2=null,o4=null;function O6(){if(o4)return Promise.resolve(o4);if(!i2)i2=import("/static/dist/editor.bundle.js").then((_)=>{return o4=_,_}).catch((_)=>{throw i2=null,_});return i2}class L6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await O6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new L6(_,$)}};function a4(){O6().catch(()=>{})}var a7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},t7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},l2=null,t4=null;function e7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function _5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!e7(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function $5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!l2)l2=_5(()=>Promise.resolve($.init?.())).catch((j)=>{throw l2=null,j});return await l2,$}async function j5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!t4)t4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await t4}async function Z5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function N5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function K5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function D$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function z5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function B6(){let _=K5(),$=_?t7:a7,j=D$("--bg-primary",_?"#000000":"#ffffff"),Z=D$("--text-primary",_?"#e7e9ea":"#0f1419"),N=D$("--text-secondary",_?"#71767b":"#536471"),K=D$("--accent-color","#1d9bf0"),z=D$("--danger-color",_?"#ff7b72":"#cf222e"),G=D$("--success-color",_?"#7ee787":"#1a7f37"),X=D$("--bg-hover",_?"#1d1f23":"#e8ebed"),W=D$("--border-color",_?"#2f3336":"#eff3f4"),L=D$("--accent-soft-strong",z5(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:X,red:z,green:G,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:W}}class Q6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await $5();if(await j5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:B6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=B6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Z5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(N5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var e4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new Q6(_,$)}};function k$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Y5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,L=[];for(let H of W.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let q=L.join("/");return`${S2(q)}${K}${z}`}function X2(_){return _?.preview||null}function G5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function W5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function V5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${k$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${k$(d0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${k$(I$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${k$(W5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${k$(G5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${k$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function X5(_){let $=X2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=V5(_,$);if($.kind==="image"){let Z=$.url||($.path?S2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${k$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=g0($.text||"",null,{rewriteImageSrc:(N)=>Y5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${k$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class _1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=X5(this.context)}getContent(){let _=X2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=X2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var $1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=X2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new _1(_,$)}},j1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return X2(_)||_?.path?1:!1},mount(_,$){return new _1(_,$)}};var q5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),O5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},L5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function F6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function U6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class H6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=F6(j),K=L5[N]||"\uD83D\uDCC4",z=O5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${U6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${U6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let X=G.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let W=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(W)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=F6(_?.path);if(!$||!q5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new H6(_,$);return new J6(_,$)}};var B5=/\.(csv|tsv)$/i;class D6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var N1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!B5.test($))return!1;return 55},mount(_,$){return new D6(_,$)}};var Q5=/\.pdf$/i;function U5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class E6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${U5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class k6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/workspace/raw?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var K1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Q5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new E6(_,$);return new k6(_,$)}};var F5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function z1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${z1(N)}" alt="${z1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${z1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Y1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!F5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new y6(_,$);return new A6(_,$)}};function H5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function J5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var G1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function w6(_){let $=String(_||"").trim();return $?$:G1}function D5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function E5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function k5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,G,X,W,L,q){try{if(z&&X!=null&&j({filename:z,format:G,data:X,mimeType:W,base64Encoded:Boolean(L),defaultMode:q}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,G,X,W,L,q){try{if(G&&j({filename:G,data:z,mimeType:X,base64Encoded:Boolean(W),mode:L,folderId:q}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function M6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${E5(j)}`}class P6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${J5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class C6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=D5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(k5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=G1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await M6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await M6(_,"image/png");else this.xmlData=w6(await _.text());else if(_.status===404)this.xmlData=G1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?w6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var W1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!H5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new P6(_,$);return new C6(_,$)}};class b6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var p_=new b6;var n2="workspaceExplorerScale",y5=["compact","default","comfortable"],A5=new Set(y5),w5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function S6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return A5.has(j)?j:$}function V1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function M5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function P5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function X1(_={}){let $=M5(_),j=_.stored?S6(_.stored,$):$;return P5(j,_)}function I6(_){return w5[S6(_)]}var C5=60000,R6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function v6(_,$,j,Z=0,N=[]){if(!j&&R6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)v6(K,$,j,Z+1,N);return N}function x6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&R6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function B1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,K=!j||j.length!==Z.length,z=Z.map((G)=>{let X=B1(N.get(G.path),G);if(X!==N.get(G.path))K=!0;return X});return K?{...$,children:z}:_}function O1(_,$,j){if(!_)return _;if(_.path===$)return B1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=O1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var u6=4,q1=14,b5=8,S5=16;function m6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=m6(Z);return _.__bytes=j,j}function g6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=u6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let G of N){let X=Math.max(0,Number(G?.__bytes??G?.size??0));if(X<=0)continue;if(G.type==="dir")K.push({kind:"dir",node:G,size:X});else K.push({kind:"file",name:G.name,path:G.path,size:X})}K.sort((G,X)=>X.size-G.size);let z=K;if(K.length>q1){let G=K.slice(0,q1-1),X=K.slice(q1-1),W=X.reduce((L,q)=>L+q.size,0);G.push({kind:"other",name:`+${X.length} more`,path:`${Z.path}/[other]`,size:W}),z=G}return Z.children=z.map((G)=>{if(G.kind==="dir")return g6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function T6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function d2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function Q1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,G=K-N>z?N+z:K,X=d2(_,$,Z,N),W=d2(_,$,Z,G),L=d2(_,$,j,G),q=d2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var c6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function h6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(G,X,W,L)=>{let q=Array.isArray(G?.children)?G.children:[];if(!q.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let y=W-X,x=X;q.forEach((R,u)=>{let I=Math.max(0,Number(R.size)||0);if(I<=0)return;let F=I/H,A=x,C=u===q.length-1?W:x+y*F;if(x=C,C-A<0.003)return;let h=c6[L];if(h){let __=p6(A,L,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:I,color:__,depth:L,startAngle:A,endAngle:C,innerRadius:h[0],outerRadius:h[1],d:Q1(120,120,h[0],h[1],A,C)}),L===1)N.push({key:R.path,name:R.name,size:I,pct:K>0?I/K*100:0,color:__})}if(L<u6)z(R,A,C,L+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function L1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=L1(Z,$);if(N)return N}return null}function i6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=c6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,G=p6(K,1,Z),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:j,color:G,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:Q1(120,120,N[0],N[1],K,z)}],legend:[{key:W,name:_,size:j,pct:100,color:G}]}}function f6(_,$=!1,j=!1){if(!_)return null;let Z=m6(_),N=g6(_,0),K=N.size||Z,{segments:z,legend:G}=h6(N,K,j);if(!z.length&&K>0){let X=i6("[files]",N.path,K,j);z=X.segments,G=X.legend}return{root:N,totalSize:K,segments:z,legend:G,truncated:$,isDarkTheme:j}}function I5({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[K,z]=f(()=>[_?.root?.path||"."]),[G,X]=f(!1);v(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;X(!0);let i=setTimeout(()=>X(!1),180);return()=>clearTimeout(i)},[Z]);let W=d_(()=>{return L1(_.root,Z)||_.root},[_?.root,Z]),L=W?.size||_.totalSize||0,{segments:q,legend:H}=d_(()=>{let i=h6(W,L,_.isDarkTheme);if(i.segments.length>0)return i;if(L<=0)return i;let B_=W?.children?.length?"Total":"[files]";return i6(B_,W?.path||_?.root?.path||".",L,_.isDarkTheme)},[W,L,_.isDarkTheme,_?.root?.path]),[y,x]=f(q),R=D(new Map),u=D(0);v(()=>{let i=R.current,B_=new Map(q.map((z_)=>[z_.key,z_])),T_=performance.now(),o=220,$_=(z_)=>{let Z_=Math.min(1,(z_-T_)/220),V_=Z_*(2-Z_),O_=q.map((k_)=>{let w_=i.get(k_.key)||{startAngle:k_.startAngle,endAngle:k_.startAngle,innerRadius:k_.innerRadius,outerRadius:k_.innerRadius},Q_=(t_,Y_)=>t_+(Y_-t_)*V_,j0=Q_(w_.startAngle,k_.startAngle),y_=Q_(w_.endAngle,k_.endAngle),u_=Q_(w_.innerRadius,k_.innerRadius),I_=Q_(w_.outerRadius,k_.outerRadius);return{...k_,d:Q1(120,120,u_,I_,j0,y_)}});if(x(O_),Z_<1)u.current=requestAnimationFrame($_)};if(u.current)cancelAnimationFrame(u.current);return u.current=requestAnimationFrame($_),R.current=B_,()=>{if(u.current)cancelAnimationFrame(u.current)}},[q]);let I=y.length?y:q,F=L>0?d0(L):"0 B",A=W?.name||"",h=(A&&A!=="."?A:"Total")||"Total",__=F,t=K.length>1,l=(i)=>{if(!i?.path)return;let B_=L1(_.root,i.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;z((T_)=>[...T_,B_.path]),N(B_.path),j(null)},K_=()=>{if(!t)return;z((i)=>{let B_=i.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${I.length}
                data-base-size=${L}>
                ${I.map((i)=>B`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(i)}
                    >
                        <title>${i.label} — ${d0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${h}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${d0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function x5({mediaId:_}){let[$,j]=f(null);if(v(()=>{if(!_)return;h$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?d0($.metadata.size):"";return B`
        <a href=${j$(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
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
    `}function l6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=f(null),[z,G]=f(new Set(["."])),[X,W]=f(null),[L,q]=f(null),[H,y]=f(""),[x,R]=f(null),[u,I]=f(null),[F,A]=f(!0),[C,h]=f(!1),[__,t]=f(null),[l,K_]=f(()=>i$("workspaceShowHidden",!1)),[i,B_]=f(!1),[T_,o]=f(null),[$_,z_]=f(null),[Z_,V_]=f(null),[O_,k_]=f(!1),[G_,w_]=f(null),[Q_,j0]=f(()=>T6()),[y_,u_]=f(()=>X1({stored:n0(n2),...V1()})),I_=D(z),t_=D(""),Y_=D(null),a=D(0),A_=D(new Set),X_=D(null),D_=D(new Map),U_=D(_),c_=D(Z),F_=D(null),M_=D(null),_0=D(null),e_=D(null),f_=D(null),K0=D(null),z0=D("."),b_=D(null),$0=D({path:null,dragging:!1,startX:0,startY:0}),U0=D({path:null,dragging:!1,startX:0,startY:0}),E0=D({path:null,timer:0}),F0=D(!1),q0=D(0),k0=D(new Map),s_=D(null),m_=D(null),C0=D(null),i_=D(null),o_=D(l),y0=D($),E_=D(j??$),b=D(0),e=D(Z_),P_=D(i),h_=D(T_),A0=D(null),s0=D({x:0,y:0}),Y0=D(0),O0=D(null),H0=D(X),w0=D(L),b0=D(null),p0=D(null),o0=D(x);U_.current=_,c_.current=Z,v(()=>{I_.current=z},[z]),v(()=>{o_.current=l},[l]),v(()=>{y0.current=$},[$]),v(()=>{E_.current=j??$},[j,$]),v(()=>{e.current=Z_},[Z_]),v(()=>{if(typeof window>"u")return;let O=()=>{u_(X1({stored:n0(n2),...V1()}))};O();let U=()=>O(),E=()=>O(),k=(g)=>{if(!g||g.key===null||g.key===n2)O()};window.addEventListener("resize",U),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(g,N_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",N_);else if(g.addListener)g.addListener(N_)},n=(g,N_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",N_);else if(g.removeListener)g.removeListener(N_)};return r(m,U),r(s,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",E),window.removeEventListener("storage",k),n(m,U),n(s,U)}},[]),v(()=>{let O=(U)=>{let E=U?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let s=1;s<k.length;s++)m.push(k.slice(0,s).join("/"));if(m.length)G((s)=>{let r=new Set(s);r.add(".");for(let n of m)r.add(n);return r});W(E),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),v(()=>{P_.current=i},[i]),v(()=>{h_.current=T_},[T_]),v(()=>{H0.current=X},[X]),v(()=>{w0.current=L},[L]),v(()=>{o0.current=x},[x]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>j0(T6());O();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>O();if(U?.addEventListener)U.addEventListener("change",E);else if(U?.addListener)U.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",E);else if(U?.removeListener)U.removeListener(E);k?.disconnect()}},[]),v(()=>{if(!L)return;let O=f_.current;if(!O)return;let U=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(U)},[L]);let T$=async(O)=>{h(!0),R(null),I(null);try{let U=await C4(O,20000);R(U)}catch(U){R({error:U.message||"Failed to load preview"})}finally{h(!1)}};F_.current=T$;let f$=async()=>{if(!y0.current)return;try{let O=await K2("",1,o_.current),U=x6(O.root,I_.current,o_.current);if(U===t_.current){A(!1);return}if(t_.current=U,Y_.current=O.root,!a.current)a.current=requestAnimationFrame(()=>{a.current=0,K((E)=>B1(E,Y_.current)),A(!1)})}catch(O){t(O.message||"Failed to load workspace"),A(!1)}},R$=async(O)=>{if(!O)return;if(A_.current.has(O))return;A_.current.add(O);try{let U=await K2(O,1,o_.current);K((E)=>O1(E,O,U.root))}catch(U){t(U.message||"Failed to load workspace")}finally{A_.current.delete(O)}};M_.current=R$;let g_=P(()=>{let O=X;if(!O)return".";let U=D_.current?.get(O);if(U&&U.type==="dir")return U.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[X]),X$=P((O)=>{let U=O?.closest?.(".workspace-row");if(!U)return null;let E=U.dataset.path,k=U.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),r0=P((O)=>{return X$(O?.target||null)},[X$]),x_=P((O)=>{e.current=O,V_(O)},[]),L0=P(()=>{let O=E0.current;if(O?.timer)clearTimeout(O.timer);E0.current={path:null,timer:0}},[]),Z0=P((O)=>{if(!O||O==="."){L0();return}let U=D_.current?.get(O);if(!U||U.type!=="dir"){L0();return}if(I_.current?.has(O)){L0();return}if(E0.current?.path===O)return;L0();let E=setTimeout(()=>{E0.current={path:null,timer:0},M_.current?.(O),G((k)=>{let m=new Set(k);return m.add(O),m})},600);E0.current={path:O,timer:E}},[L0]),a0=P((O,U)=>{if(s0.current={x:O,y:U},Y0.current)return;Y0.current=requestAnimationFrame(()=>{Y0.current=0;let E=A0.current;if(!E)return;let k=s0.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),T0=P((O)=>{if(!O)return;let E=(D_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E)return;z_({path:O,label:E})},[]),q$=P(()=>{if(z_(null),Y0.current)cancelAnimationFrame(Y0.current),Y0.current=0;if(A0.current)A0.current.style.transform="translate(-9999px, -9999px)"},[]),y$=P((O)=>{if(!O)return".";let U=D_.current?.get(O);if(U&&U.type==="dir")return U.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[]),J0=P(()=>{q(null),y("")},[]),A$=P((O)=>{if(!O)return;let E=(D_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E||O===".")return;q(O),y(E)},[]),s$=P(async()=>{let O=w0.current;if(!O)return;let U=(H||"").trim();if(!U){J0();return}let E=D_.current?.get(O),k=(E?.name||O.split("/").pop()||O).trim();if(U===k){J0();return}try{let s=(await I4(O,U))?.path||O,r=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(J0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:s,type:E?.type||"file"}})),E?.type==="dir")G((n)=>{let g=new Set;for(let N_ of n)if(N_===O)g.add(s);else if(N_.startsWith(`${O}/`))g.add(`${s}${N_.slice(O.length)}`);else g.add(N_);return g});if(W(s),E?.type==="dir")R(null),h(!1),I(null);else F_.current?.(s);M_.current?.(r)}catch(m){t(m?.message||"Failed to rename file")}},[J0,H]),v$=P(async(O)=>{let k=O||".";for(let m=0;m<50;m+=1){let r=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await S4(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")G((N_)=>new Set([...N_,k]));W(g),t(null),M_.current?.(k),F_.current?.(g);return}catch(n){if(n?.status===409||n?.code==="file_exists")continue;t(n?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),w$=P((O)=>{if(O?.stopPropagation?.(),O_)return;let U=y$(H0.current);v$(U)},[O_,y$,v$]);v(()=>{if(typeof window>"u")return;let O=(U)=>{let E=U?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;K((n)=>{let g=n;for(let N_ of E){if(!N_?.root)continue;if(!g||N_.path==="."||!N_.path)g=N_.root;else g=O1(g,N_.path,N_.root)}if(g)t_.current=x6(g,I_.current,o_.current);return A(!1),g});let k=H0.current;if(Boolean(k)&&E.some((n)=>{let g=n?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))k0.current.clear();if(!k||!o0.current)return;let s=D_.current?.get(k);if(s&&s.type==="dir")return;if(E.some((n)=>{let g=n?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))F_.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),X_.current=f$;let o$=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=E_.current??y0.current,E=document.visibilityState!=="hidden"&&(U||O.matches&&y0.current);z2(E,o_.current).catch(()=>{})}).current,f0=D(0),R0=D(()=>{if(f0.current)clearTimeout(f0.current);f0.current=setTimeout(()=>{f0.current=0,o$()},250)}).current;v(()=>{if(y0.current)X_.current?.();R0()},[$,j]),v(()=>{X_.current(),o$();let O=setInterval(()=>X_.current(),C5),U=l$("previewHeight",null),E=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(q0.current=E,_0.current)_0.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>R0();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(O),a.current)cancelAnimationFrame(a.current),a.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),f0.current)clearTimeout(f0.current),f0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;z2(!1,o_.current).catch(()=>{})}},[]);let c0=d_(()=>v6(N,z,l),[N,z,l]),S0=d_(()=>new Map(c0.map((O)=>[O.node.path,O.node])),[c0]),v0=d_(()=>I6(y_),[y_]);D_.current=S0;let M0=(X?D_.current.get(X):null)?.type==="dir";v(()=>{if(!X||!M0){w_(null),s_.current=null,m_.current=null;return}let O=X,U=`${l?"hidden":"visible"}:${X}`,E=k0.current,k=E.get(U);if(k?.root){E.delete(U),E.set(U,k);let r=f6(k.root,Boolean(k.truncated),Q_);if(r)s_.current=r,m_.current=X,w_({loading:!1,error:null,payload:r});return}let m=s_.current,s=m_.current;w_({loading:!0,error:null,payload:s===X?m:null}),K2(X,b5,l).then((r)=>{if(H0.current!==O)return;let n={root:r?.root,truncated:Boolean(r?.truncated)};E.delete(U),E.set(U,n);while(E.size>S5){let N_=E.keys().next().value;if(!N_)break;E.delete(N_)}let g=f6(n.root,n.truncated,Q_);s_.current=g,m_.current=X,w_({loading:!1,error:null,payload:g})}).catch((r)=>{if(H0.current!==O)return;w_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===X?m:null})})},[X,M0,l,Q_]);let K$=Boolean(x&&x.kind==="text"&&!M0&&(!x.size||x.size<=262144)),r$=K$?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable";v(()=>{let O=C0.current;if(i_.current)i_.current.dispose(),i_.current=null;if(!O)return;if(O.innerHTML="",!X||M0||!x||x.error)return;let U={path:X,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},E=a_.resolve(U)||a_.get("workspace-preview-default");if(!E)return;let k=E.mount(O,U);return i_.current=k,()=>{if(i_.current===k)k.dispose(),i_.current=null;O.innerHTML=""}},[X,M0,x]);let t0=(O)=>{let U=O?.target;if(U instanceof Element)return U;return U?.parentElement||null},M$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},L$=D((O)=>{if(p0.current)clearTimeout(p0.current),p0.current=null;let E=t0(O)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(w0.current===k)J0();c_.current?.(k)}).current,z$=D((O)=>{if(F0.current){F0.current=!1;return}let U=t0(O),E=U?.closest?.("[data-path]");if(e_.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,s=Boolean(U?.closest?.(".workspace-caret")),r=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),n=H0.current===k,g=w0.current;if(g){if(g===k)return;J0()}let N_=m==="file"&&b0.current===k&&!s&&!r;if(n&&!s&&!r&&k!=="."&&!N_){if(p0.current)clearTimeout(p0.current);p0.current=setTimeout(()=>{p0.current=null,A$(k)},350);return}if(m==="dir"){if(b0.current=null,W(k),R(null),I(null),h(!1),!I_.current.has(k))M_.current?.(k);if(n&&!s)return;G((V$)=>{let B0=new Set(V$);if(B0.has(k))B0.delete(k);else B0.add(k);return B0})}else{b0.current=null,W(k);let W0=D_.current.get(k);if(W0)U_.current?.(W0.path,W0);F_.current?.(k)}}).current,e0=D(()=>{t_.current="",X_.current(),Array.from(I_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>M_.current?.(U))}).current,G0=D(()=>{b0.current=null,W(null),R(null),I(null),h(!1)}).current,P$=D(()=>{K_((O)=>{let U=!O;if(typeof window<"u")r_("workspaceShowHidden",String(U));return o_.current=U,z2(!0,U).catch(()=>{}),t_.current="",X_.current?.(),Array.from(I_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>M_.current?.(k)),U})}).current,C$=D((O)=>{if(t0(O)?.closest?.("[data-path]"))return;G0()}).current,_$=P(async(O)=>{if(!O)return;let U=O.split("/").pop()||O;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await T4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(H0.current===O)G0();M_.current?.(k),t(null)}catch(k){R((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[G0]),B$=P((O)=>{let U=e_.current;if(!U||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b$=P((O)=>{let U=c0;if(!U||U.length===0)return;let E=X?U.findIndex((k)=>k.node.path===X):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(E+1,U.length-1),m=U[k];if(!m)return;if(W(m.node.path),m.node.type!=="dir")U_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else R(null),h(!1),I(null);B$(m.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=E<=0?0:E-1,m=U[k];if(!m)return;if(W(m.node.path),m.node.type!=="dir")U_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else R(null),h(!1),I(null);B$(m.node.path);return}if(O.key==="ArrowRight"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&!z.has(k.node.path))O.preventDefault(),M_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(O.key==="ArrowLeft"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&z.has(k.node.path))O.preventDefault(),G((m)=>{let s=new Set(m);return s.delete(k.node.path),s});return}if(O.key==="Enter"&&E>=0){O.preventDefault();let k=U[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!I_.current.has(m))M_.current?.(m);G((r)=>{let n=new Set(r);if(n.has(m))n.delete(m);else n.add(m);return n}),R(null),I(null),h(!1)}else U_.current?.(m,k.node),F_.current?.(m);return}if((O.key==="Delete"||O.key==="Backspace")&&E>=0){let k=U[E];if(!k||k.node.type==="dir")return;O.preventDefault(),_$(k.node.path);return}if(O.key==="Escape")O.preventDefault(),G0()},[G0,_$,z,c0,B$,X]),a$=P((O)=>{let U=t0(O),E=U?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(w0.current===m)return;let s=O?.touches?.[0];if(!s)return;if($0.current={path:M$(U)?m:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,$0.current?.dragging)return;_$(m)},600)},[_$]),D0=P(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let O=$0.current;if(O?.dragging&&O.path){let U=e.current||g_(),E=O0.current;if(typeof E==="function")E(O.path,U)}$0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,B_(!1),o(null),x_(null),L0(),q$()},[g_,q$,x_,L0]),Y$=P((O)=>{let U=$0.current,E=O?.touches?.[0];if(!E||!U?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let k=Math.abs(E.clientX-U.startX),m=Math.abs(E.clientY-U.startY),s=k>8||m>8;if(s&&b_.current)clearTimeout(b_.current),b_.current=null;if(!U.dragging&&s)U.dragging=!0,B_(!0),o("move"),T0(U.path);if(U.dragging){O.preventDefault(),a0(E.clientX,E.clientY);let r=document.elementFromPoint(E.clientX,E.clientY),n=X$(r)||g_();if(e.current!==n)x_(n);Z0(n)}},[X$,g_,T0,a0,x_,Z0]),Q$=D((O)=>{O.preventDefault();let U=_0.current;if(!U)return;let E=O.clientY,k=q0.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=E,r=(g)=>{s=g.clientY;let N_=U.clientHeight-80,W0=Math.min(Math.max(k-(g.clientY-E),80),N_);U.style.setProperty("--preview-height",`${W0}px`),q0.current=W0},n=()=>{let g=U.clientHeight-80,N_=Math.min(Math.max(k-(s-E),80),g);q0.current=N_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("previewHeight",String(Math.round(N_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",n)}).current,Q=D((O)=>{O.preventDefault();let U=_0.current;if(!U)return;let E=O.touches[0];if(!E)return;let k=E.clientY,m=q0.current||280,s=O.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(g)=>{let N_=g.touches[0];if(!N_)return;g.preventDefault();let W0=U.clientHeight-80,V$=Math.min(Math.max(m-(N_.clientY-k),80),W0);U.style.setProperty("--preview-height",`${V$}px`),q0.current=V$},n=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",r_("previewHeight",String(Math.round(q0.current||m))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",n),document.removeEventListener("touchcancel",n)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}).current,S=async()=>{if(!X)return;try{let O=await b4(X);if(O.media_id)I(O.media_id)}catch(O){R((U)=>({...U||{},error:O.message||"Failed to attach"}))}},T=async()=>{if(!X||M0)return;await _$(X)},d=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},W_=P((O)=>{if(!d(O))return;if(O.preventDefault(),b.current+=1,!P_.current)B_(!0);o("upload");let U=r0(O)||g_();x_(U),Z0(U)},[g_,r0,x_,Z0]),L_=P((O)=>{if(!d(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!P_.current)B_(!0);if(h_.current!=="upload")o("upload");let U=r0(O)||g_();if(e.current!==U)x_(U);Z0(U)},[g_,r0,x_,Z0]),C_=P((O)=>{if(!d(O))return;if(O.preventDefault(),b.current=Math.max(0,b.current-1),b.current===0)B_(!1),o(null),x_(null),L0()},[x_,L0]),N0=P(async(O,U=".")=>{let E=Array.from(O||[]);if(E.length===0)return;let k=U&&U!==""?U:".",m=k!=="."?k:"workspace root";k_(!0);try{let s=null;for(let r of E)try{s=await b2(r,k)}catch(n){let g=n?.status,N_=n?.code;if(g===409||N_==="file_exists"){let W0=r?.name||"file";if(!window.confirm(`"${W0}" already exists in ${m}. Overwrite?`))continue;s=await b2(r,k,{overwrite:!0})}else throw n}if(s?.path)b0.current=s.path,W(s.path),F_.current?.(s.path);M_.current?.(k)}catch(s){t(s.message||"Failed to upload file")}finally{k_(!1)}},[]),I0=P(async(O,U)=>{if(!O)return;let E=D_.current?.get(O);if(!E)return;let k=U&&U!==""?U:".",m=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let r=(await x4(O,k))?.path||O;if(E.type==="dir")G((n)=>{let g=new Set;for(let N_ of n)if(N_===O)g.add(r);else if(N_.startsWith(`${O}/`))g.add(`${r}${N_.slice(O.length)}`);else g.add(N_);return g});if(W(r),E.type==="dir")R(null),h(!1),I(null);else F_.current?.(r);M_.current?.(m),M_.current?.(k)}catch(s){t(s?.message||"Failed to move entry")}},[]);O0.current=I0;let S_=P(async(O)=>{if(!d(O))return;O.preventDefault(),b.current=0,B_(!1),o(null),V_(null),L0();let U=Array.from(O?.dataTransfer?.files||[]);if(U.length===0)return;let E=e.current||r0(O)||g_();await N0(U,E)},[g_,r0,N0]),u0=P((O)=>{if(O?.stopPropagation?.(),O_)return;let U=O?.currentTarget?.dataset?.uploadTarget||".";z0.current=U,K0.current?.click()},[O_]),G$=P(()=>{if(O_)return;let O=H0.current,U=O?D_.current?.get(O):null;z0.current=U?.type==="dir"?U.path:".",K0.current?.click()},[O_]),U$=P((O)=>{if(!O||O.button!==0)return;let U=O.currentTarget;if(!U||!U.dataset)return;let E=U.dataset.path;if(!E||E===".")return;if(w0.current===E)return;let k=t0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!M$(k))return;O.preventDefault(),U0.current={path:E,dragging:!1,startX:O.clientX,startY:O.clientY};let m=(r)=>{let n=U0.current;if(!n?.path)return;let g=Math.abs(r.clientX-n.startX),N_=Math.abs(r.clientY-n.startY),W0=g>4||N_>4;if(!n.dragging&&W0)n.dragging=!0,F0.current=!0,B_(!0),o("move"),T0(n.path),a0(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(n.dragging){r.preventDefault(),a0(r.clientX,r.clientY);let V$=document.elementFromPoint(r.clientX,r.clientY),B0=X$(V$)||g_();if(e.current!==B0)x_(B0);Z0(B0)}},s=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",s);let r=U0.current;if(r?.dragging&&r.path){let n=e.current||g_(),g=O0.current;if(typeof g==="function")g(r.path,n)}U0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,B_(!1),o(null),x_(null),L0(),q$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",s)},[X$,g_,T0,a0,q$,x_,Z0,L0]),W$=P(async(O)=>{let U=Array.from(O?.target?.files||[]);if(U.length===0)return;let E=z0.current||".";if(await N0(U,E),z0.current=".",O?.target)O.target.value=""},[N0]);return B`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${_0}
            onDragEnter=${W_}
            onDragOver=${L_}
            onDragLeave=${C_}
            onDrop=${S_}
        >
            <input type="file" multiple style="display:none" ref=${K0} onChange=${W$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${w$} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${e0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${P$}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${C$}>
                ${O_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${F&&B`<div class="workspace-loading">Loading…</div>`}
                ${__&&B`<div class="workspace-error">${__}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${e_}
                        tabIndex="0"
                        onClick=${z$}
                        onDblClick=${L$}
                        onKeyDown=${b$}
                        onTouchStart=${a$}
                        onTouchEnd=${D0}
                        onTouchMove=${Y$}
                        onTouchCancel=${D0}
                    >
                        ${c0.map(({node:O,depth:U})=>{let E=O.type==="dir",k=O.path===X,m=O.path===L,s=E&&z.has(O.path),r=Z_&&O.path===Z_,n=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*v0.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${U$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?s?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
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
                                                ref=${f_}
                                                value=${H}
                                                onInput=${(g)=>y(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),s$();else if(g.key==="Escape")g.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${E&&!s&&n>0&&B`
                                        <span class="workspace-count">${n}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${u0}
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
            ${X&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${Q$} onTouchStart=${Q}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${w$} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!M0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>K$&&c_.current?.(X,x)}
                                    title=${r$}
                                    disabled=${!K$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${T}
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
                            ${M0?B`
                                    <button class="workspace-download" onClick=${G$}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${f4(X,l)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${S} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${x?.error&&B`<div class="workspace-error">${x.error}</div>`}
                    ${M0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&B`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&B`
                            <${I5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!M0&&B`
                        <div class="workspace-preview-body" ref=${C0}></div>
                    `}
                    ${u&&B`
                        <div class="workspace-download-card">
                            <${x5} mediaId=${u} />
                        </div>
                    `}
                </div>
            `}
            ${$_&&B`
                <div class="workspace-drag-ghost" ref=${A0}>${$_.label}</div>
            `}
        </aside>
    `}var T5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,f5=/\.(csv|tsv)$/i,R5=/\.pdf$/i,v5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,n6=/\.drawio(\.xml|\.svg|\.png)?$/i;function d6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:G,previewTabs:X,onToggleDock:W,dockVisible:L}){let[q,H]=f(null),y=D(null);v(()=>{if(!q)return;let F=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[q]),v(()=>{let F=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let C=_.findIndex((h)=>h.id===$);if(A.shiftKey){let h=_[(C-1+_.length)%_.length];j?.(h.id)}else{let h=_[(C+1)%_.length];j?.(h.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(A.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let x=P((F,A)=>{if(F.button===1){F.preventDefault(),Z?.(A);return}if(F.button===0)j?.(A)},[j,Z]),R=P((F,A)=>{F.preventDefault(),H({id:A,x:F.clientX,y:F.clientY})},[]),u=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),I=P((F,A)=>{F.preventDefault(),F.stopPropagation(),Z?.(A)},[Z]);if(v(()=>{if(!$||!y.current)return;let F=y.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${y} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(A)=>x(A,F.id)}
                    onContextMenu=${(A)=>R(A,F.id)}
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
                        onMouseDown=${u}
                        onClick=${(A)=>I(A,F.id)}
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
            ${W&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${W}
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
                <button onClick=${()=>{K?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(q.id),H(null)}}>
                    ${_.find((F)=>F.id===q.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(q.id),H(null)}}>
                        ${X?.has(q.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${T5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(q.id),A=q.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(A);window.open(C,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${f5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${R5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${v5.test(q.id)&&!n6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${n6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var u5=400,U1=60,s6=220,F1="mdPreviewHeight";function m5(){try{let _=localStorage.getItem(F1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U1?$:s6}catch{return s6}}function o6({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[K,z]=f(m5),G=D(null),X=D(null),W=D(""),L=D(_);return L.current=_,v(()=>{let y=()=>{let R=L.current?.()||"";if(R===W.current)return;W.current=R;try{let u=g0(R,null,{sanitize:!1});N(u)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};y();let x=setInterval(y,u5);return()=>clearInterval(x)},[]),v(()=>{if(G.current&&Z)J$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(y)=>{y.preventDefault();let x=y.clientY,R=X.current?.offsetHeight||K,u=X.current?.parentElement,I=u?u.offsetHeight*0.7:500,F=y.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(h)=>{let __=Math.min(Math.max(R-(h.clientY-x),U1),I);z(__)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(F1,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",C)}}
            onTouchStart=${(y)=>{y.preventDefault();let x=y.touches[0];if(!x)return;let R=x.clientY,u=X.current?.offsetHeight||K,I=X.current?.parentElement,F=I?I.offsetHeight*0.7:500,A=y.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let C=(__)=>{let t=__.touches[0];if(!t)return;__.preventDefault();let l=Math.min(Math.max(u-(t.clientY-R),U1),F);z(l)},h=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(F1,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:K+"px"}}>
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
    `}function r6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let G=D(j);G.current=j;let X=D(Z);X.current=Z,v(()=>{G.current();let W=new I2((q,H)=>K.current(q,H),(q)=>z.current(q),{chatJid:N});W.connect();let L=()=>{W.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),W.disconnect()}},[N])}function a6(){let[_,$]=f(!1),[j,Z]=f("default"),N=D(!1);v(()=>{let X=i$("notificationsEnabled",!1);if(N.current=X,$(X),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await K();if(Z(W||"default"),W!=="granted"){N.current=!1,$(!1),r_("notificationsEnabled","false");return}}let X=!N.current;N.current=X,$(X),r_("notificationsEnabled",String(X))},[K]),G=P((X,W)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(X,{body:W});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:G}}var q2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function t6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[K,z]=f(!1),G=D(!1),X=D(null),W=D(!1),L=D(null),q=D(null),H=D(0);v(()=>{G.current=K},[K]),v(()=>{q.current=Z},[Z]),v(()=>{H.current+=1,q.current=null,L.current=null,W.current=!1,G.current=!1,N(null),z(!1)},[j]);let y=P(async(u=null)=>{let I=H.current;try{if(u){let F=await L4(u,50,0,j);if(I!==H.current)return;N(F.posts),z(!1)}else{let F=await Z2(10,null,j);if(I!==H.current)return;N(F.posts),z(F.has_more)}}catch(F){if(I!==H.current)return;console.error("Failed to load posts:",F)}},[j]),x=P(async()=>{let u=H.current;try{let I=await Z2(10,null,j);if(u!==H.current)return;N((F)=>{if(!F||F.length===0)return I.posts;return q2([...I.posts,...F])}),z((F)=>F||I.has_more)}catch(I){if(u!==H.current)return;console.error("Failed to refresh timeline:",I)}},[j]),R=P(async(u={})=>{let I=H.current,F=q.current;if(!F||F.length===0)return;if(W.current)return;let{preserveScroll:A=!0,preserveMode:C="top",allowRepeat:h=!1}=u,__=(K_)=>{if(!A){K_();return}if(C==="top")$(K_);else _(K_)},l=F.slice().sort((K_,i)=>K_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!h&&L.current===l)return;W.current=!0,L.current=l;try{let K_=await Z2(10,l,j);if(I!==H.current)return;if(K_.posts.length>0)__(()=>{N((i)=>q2([...K_.posts,...i||[]])),z(K_.has_more)});else z(!1)}catch(K_){if(I!==H.current)return;console.error("Failed to load more posts:",K_)}finally{if(I===H.current)W.current=!1}},[j,_,$]);return v(()=>{X.current=R},[R]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:G,loadPosts:y,refreshTimeline:x,loadMore:R,loadMoreRef:X,loadingMoreRef:W,lastBeforeIdRef:L}}function e6(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,K]=f(""),[z,G]=f({text:"",totalLines:0}),[X,W]=f(null),[L,q]=f(null),[H,y]=f(null),x=D(null),R=D(0),u=D(!1),I=D(""),F=D(""),A=D(null),C=D(null),h=D(null),__=D(null),t=D(!1),l=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:G,pendingRequest:X,setPendingRequest:W,currentTurnId:L,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:y,lastAgentEventRef:x,lastSilenceNoticeRef:R,isAgentRunningRef:u,draftBufferRef:I,thoughtBufferRef:F,pendingRequestRef:A,stalledPostIdRef:C,currentTurnIdRef:h,steerQueuedTurnIdRef:__,thoughtExpandedRef:t,draftExpandedRef:l}}function _8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,y=$.current||280,x=L.currentTarget;x.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,u=(F)=>{R=F.clientX;let A=Math.min(Math.max(y+(F.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${A}px`),$.current=A},I=()=>{let F=Math.min(Math.max(y+(R-H),160),600);$.current=F,x.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",r_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",I)}).current,K=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientX,x=$.current||280,R=L.currentTarget;R.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let u=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(x+(A.clientX-y),160),600);q.style.setProperty("--sidebar-width",`${C}px`),$.current=C},I=()=>{R.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",r_("sidebarWidth",String(Math.round($.current||x))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current,z=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,y=j.current||$.current||280,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,u=(F)=>{R=F.clientX;let A=Math.min(Math.max(y+(F.clientX-H),200),800);q.style.setProperty("--editor-width",`${A}px`),j.current=A},I=()=>{let F=Math.min(Math.max(y+(R-H),200),800);j.current=F,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",I)}).current,G=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientX,x=j.current||$.current||280,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let u=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(x+(A.clientX-y),200),800);q.style.setProperty("--editor-width",`${C}px`),j.current=C},I=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",r_("editorWidth",String(Math.round(j.current||x))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current,X=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientY,y=Z?.current||200,x=L.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=H,u=(F)=>{R=F.clientY;let A=Math.min(Math.max(y-(F.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},I=()=>{let F=Math.min(Math.max(y-(R-H),100),window.innerHeight*0.5);if(Z)Z.current=F;x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",I)}).current,W=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientY,x=Z?.current||200,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let u=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(x-(A.clientY-y),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},I=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",r_("dockHeight",String(Math.round(Z?.current||x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:W}}function $8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=f(()=>p_.getTabs()),[N,K]=f(()=>p_.getActiveId()),[z,G]=f(()=>p_.getTabs().length>0);v(()=>{return p_.onChange((C,h)=>{Z(C),K(h),G(C.length>0)})},[]);let[X,W]=f(()=>new Set),L=P((C)=>{W((h)=>{let __=new Set(h);if(__.has(C))__.delete(C);else __.add(C);return __})},[]),q=P((C)=>{W((h)=>{if(!h.has(C))return h;let __=new Set(h);return __.delete(C),__})},[]),H=P((C)=>{if(!C)return;let h={path:C,mode:"edit"};try{if(!a_.resolve(h)){if(!a_.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(__){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,__)}p_.open(C)},[]),y=P(()=>{let C=p_.getActiveId();if(C){let h=p_.get(C);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}p_.close(C),q(C),$.current?.(C)}},[q]),x=P((C)=>{let h=p_.get(C);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}p_.close(C),q(C),$.current?.(C)},[q]),R=P((C)=>{p_.activate(C)},[]),u=P((C)=>{let h=p_.getTabs().filter((l)=>l.id!==C&&!l.pinned),__=h.filter((l)=>l.dirty).length;if(__>0){if(!window.confirm(`${__} unsaved tab${__>1?"s":""} will be closed. Continue?`))return}let t=h.map((l)=>l.id);p_.closeOthers(C),t.forEach((l)=>{q(l),$.current?.(l)})},[q]),I=P(()=>{let C=p_.getTabs().filter((t)=>!t.pinned),h=C.filter((t)=>t.dirty).length;if(h>0){if(!window.confirm(`${h} unsaved tab${h>1?"s":""} will be closed. Continue?`))return}let __=C.map((t)=>t.id);p_.closeAll(),__.forEach((t)=>{q(t),$.current?.(t)})},[q]),F=P((C)=>{p_.togglePin(C)},[]),A=P(()=>{let C=p_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return v(()=>{let C=(h)=>{let{oldPath:__,newPath:t,type:l}=h.detail||{};if(!__||!t)return;if(l==="dir"){for(let K_ of p_.getTabs())if(K_.path===__||K_.path.startsWith(`${__}/`)){let i=`${t}${K_.path.slice(__.length)}`;p_.rename(K_.id,i)}}else p_.rename(__,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),v(()=>{let C=(h)=>{if(p_.hasUnsaved())h.preventDefault(),h.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:X,openEditor:H,closeEditor:y,handleTabClose:x,handleTabActivate:R,handleTabCloseOthers:u,handleTabCloseAll:I,handleTabTogglePin:F,handleTabTogglePreview:L,revealInExplorer:A}}function H1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var J1=H1("warning",30000),j8=H1("finalize",120000),D1=H1("refresh",30000),Z8=30000;function N8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function K8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function z8(_=30000){let[,$]=f(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function E1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function Y8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function x$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function k1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function G8(_,$={}){if(x$($))return null;if(k1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:g5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function W8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function V8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function X8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function q8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function O2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function O8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function g5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function y1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function A1(_){return String(_||"").trim()||"web:default"}function L8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function B8(_={}){return x$(_)&&k1(_)}function p5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function c5(_={},$={}){if(!B8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=p5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function Q8(_={}){if(!B8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},z=()=>{Z=0,c5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},X=()=>{G();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},q);if(H!=null)N.add(H)}},W=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;X()},L=$.visualViewport;return X(),$.addEventListener("focus",X),$.addEventListener("pageshow",X),$.addEventListener("resize",X),$.addEventListener("orientationchange",X),j.addEventListener("visibilitychange",W),j.addEventListener("focusin",X,!0),L?.addEventListener?.("resize",X),L?.addEventListener?.("scroll",X),()=>{K(),$.removeEventListener("focus",X),$.removeEventListener("pageshow",X),$.removeEventListener("resize",X),$.removeEventListener("orientationchange",X),j.removeEventListener("visibilitychange",W),j.removeEventListener("focusin",X,!0),L?.removeEventListener?.("resize",X),L?.removeEventListener?.("scroll",X)}}function h5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function N$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:h5($,j)}var i5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function U8(_){return i5.has(String(_||"").trim())}function l5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function F8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(l5(_),{detail:Z})),!0}var n5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function H8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(x$({window:j,navigator:Z}))};N();let z=n5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of z)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function J8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var M1="piclaw_btw_session";function d5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function s5(){let _=n0(M1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var D8=B4,E8=U4,o5=H4,k8=y4,y8=A4,A8=J4,w1=N$(l0,"getAgentContext",null),r5=N$(l0,"getAgentModels",{current:null,models:[]}),a5=N$(l0,"getActiveChatAgents",{chats:[]}),w8=N$(l0,"getChatBranches",{chats:[]}),t5=N$(l0,"renameChatBranch",null),e5=N$(l0,"pruneChatBranch",null),_j=N$(l0,"getAgentQueueState",{count:0}),$j=N$(l0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),jj=N$(l0,"removeAgentQueueItem",{removed:!1}),Zj=N$(l0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});a_.register(r4);a_.register(j1);a_.register($1);a_.register(Z1);a_.register(N1);a_.register(K1);a_.register(Y1);a_.register(W1);a4();a_.register(e4);function Nj({locationParams:_}){let $=d_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=d_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=d_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=d_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[K,z]=f("disconnected"),[G,X]=f(()=>x$()),[W,L]=f(null),[q,H]=f(null),[y,x]=f(!1),[R,u]=f("current"),[I,F]=f([]),[A,C]=f([]),[h,__]=f(null),{agentStatus:t,setAgentStatus:l,agentDraft:K_,setAgentDraft:i,agentPlan:B_,setAgentPlan:T_,agentThought:o,setAgentThought:$_,pendingRequest:z_,setPendingRequest:Z_,currentTurnId:V_,setCurrentTurnId:O_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:w_,lastSilenceNoticeRef:Q_,isAgentRunningRef:j0,draftBufferRef:y_,thoughtBufferRef:u_,pendingRequestRef:I_,stalledPostIdRef:t_,currentTurnIdRef:Y_,steerQueuedTurnIdRef:a,thoughtExpandedRef:A_,draftExpandedRef:X_}=e6(),[D_,U_]=f({}),[c_,F_]=f(null),[M_,_0]=f(null),[e_,f_]=f(!1),[K0,z0]=f(null),[b_,$0]=f([]),[U0,E0]=f([]),[F0,q0]=f(null),[k0,s_]=f([]),[m_,C0]=f(!1),[i_,o_]=f(()=>s5()),y0=d_(()=>b_.find((V)=>V?.chat_jid===$)||null,[b_,$]),E_=d_(()=>U0.find((V)=>V?.chat_jid===$)||y0||null,[y0,U0,$]),b=E_?.root_chat_jid||y0?.root_chat_jid||$,e=d5(R),[P_,h_]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),A0=k0.length,s0=D(new Set),Y0=D([]),O0=D(new Set),H0=D(0),w0=D({inFlight:!1,lastAttemptAt:0,turnId:null});s0.current=new Set(k0.map((V)=>V.row_id)),Y0.current=k0;let{notificationsEnabled:b0,notificationPermission:p0,toggleNotifications:o0,notify:T$}=a6(),[f$,R$]=f(()=>new Set),[g_,X$]=f(()=>i$("workspaceOpen",!0)),r0=D(null),{editorOpen:x_,tabStripTabs:L0,tabStripActiveId:Z0,previewTabs:a0,openEditor:T0,closeEditor:q$,handleTabClose:y$,handleTabActivate:J0,handleTabCloseOthers:A$,handleTabCloseAll:s$,handleTabTogglePin:v$,handleTabTogglePreview:w$,revealInExplorer:o$}=$8({onTabClosed:(V)=>r0.current?.(V)}),f0=D(null),R0=D(null),c0=D(null),S0=D(null),v0=a_.getDockPanes().length>0,[O$,M0]=f(!1),K$=P(()=>M0((V)=>!V),[]),r$=!j&&(x_||v0&&O$);v(()=>{let V=f0.current;if(!V)return;if(R0.current)R0.current.dispose(),R0.current=null;let Y=Z0;if(!Y)return;let J={path:Y,mode:"edit"},M=a_.resolve(J)||a_.get("editor");if(!M){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=M.mount(V,J);R0.current=w,w.onDirtyChange?.((j_)=>{p_.setDirty(Y,j_)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{q$()});let p=p_.getViewState(Y);if(p&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(p));if(typeof w.onViewStateChange==="function")w.onViewStateChange((j_)=>{p_.saveViewState(Y,j_)});return requestAnimationFrame(()=>w.focus()),()=>{if(R0.current===w)w.dispose(),R0.current=null}},[Z0,q$]),v(()=>{let V=(Y)=>{let J=Y.detail?.path;if(J)T0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V)}},[T0]),v(()=>{let V=c0.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!V||!v0||!O$)return;let Y=a_.getDockPanes()[0];if(!Y){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(V,{mode:"view"});return S0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(S0.current===J)J.dispose(),S0.current=null}},[v0,O$]);let[t0,M$]=f({name:"You",avatar_url:null,avatar_background:null}),L$=D(!1),z$=D(!1),e0=D(null),G0=D($),P$=D(new Map),C$=D($),_$=D(0),B$=D(0),b$=D({}),a$=D({name:null,avatar_url:null}),D0=D({currentHashtag:null,searchQuery:null}),Y$=D(null),Q$=D(null),Q=D(0),S=D(0),T=D(0),d=D(null),W_=D(null),L_=D(null),C_=D(null),N0=D(0),I0=D({title:null,avatarBase:null}),S_=D(null),u0=P(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;__(null)},[]);z8(30000),v(()=>{return M3()},[]),v(()=>{return H8(X)},[]),v(()=>{r_("workspaceOpen",String(g_))},[g_]),v(()=>{return Q8()},[]),v(()=>{return()=>{u0()}},[u0]),v(()=>{if(!i_){r_(M1,"");return}r_(M1,JSON.stringify({question:i_.question||"",answer:i_.answer||"",thinking:i_.thinking||"",error:i_.error||null,status:i_.status||"success"}))},[i_]),v(()=>{b$.current=D_||{}},[D_]),v(()=>{G0.current=$},[$]),v(()=>{a$.current=t0||{name:"You",avatar_url:null,avatar_background:null}},[t0]);let G$=P((V,Y,J=null)=>{if(typeof document>"u")return;let M=(V||"").trim()||"PiClaw";if(I0.current.title!==M){document.title=M;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==M)c.setAttribute("content",M);I0.current.title=M}let w=document.getElementById("dynamic-favicon");if(!w)return;let p=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",j_=Y||p,H_=Y?`${j_}|${J||""}`:j_;if(I0.current.avatarBase!==H_){let c=Y?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;w.setAttribute("href",c),I0.current.avatarBase=H_}},[]),U$=P((V)=>{if(!V)return;F((Y)=>Y.includes(V)?Y:[...Y,V])},[]),W$=P((V)=>{F((Y)=>Y.filter((J)=>J!==V))},[]);r0.current=W$;let O=P(()=>{F([])},[]),U=P((V,Y=null,J="info",M=3000)=>{u0(),__({title:V,detail:Y||null,kind:J||"info"}),S_.current=setTimeout(()=>{__((w)=>w?.title===V?null:w)},M)},[u0]),E=P((V)=>{let Y=Y8(V,{editorOpen:x_,resolvePane:(J)=>a_.resolve(J)});if(Y.kind==="open"){T0(Y.path);return}if(Y.kind==="toast")U(Y.title,Y.detail,Y.level)},[x_,T0,U]),k=P(()=>{let V=Z0;if(V)U$(V)},[Z0,U$]),m=P((V)=>{if(!V)return;C((Y)=>Y.includes(V)?Y:[...Y,V])},[]),s=P(async(V,Y=null)=>{let J=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+V);if(M){J(M);return}try{let w=typeof Y==="string"&&Y.trim()?Y.trim():$,j_=(await Q4(V,w))?.thread?.[0];if(!j_)return;Q0((H_)=>{if(!H_)return[j_];if(H_.some((c)=>c.id===j_.id))return H_;return[...H_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+V);if(H_)J(H_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",V,w)}},[$]),r=P((V)=>{C((Y)=>Y.filter((J)=>J!==V))},[]),n=P(()=>{C([])},[]),g=P((V={})=>{let Y=Date.now();if(w_.current=Y,V.running)j0.current=!0,C0((J)=>J?J:!0);if(V.clearSilence)Q_.current=0},[C0]),N_=P(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;N0.current=0},[]);v(()=>()=>{N_()},[N_]);let W0=P(()=>{N_(),l((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:Y,lastActivity:J,...M}=V;return M})},[N_]),V$=P((V)=>{if(!V)return;N_();let Y=Date.now();N0.current=Y,l({type:V.type||"active",last_activity:!0}),C_.current=setTimeout(()=>{if(N0.current!==Y)return;l((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},Z8)},[N_]),B0=P(()=>{j0.current=!1,C0(!1),w_.current=null,Q_.current=0,y_.current="",u_.current="",I_.current=null,W_.current=null,Y_.current=null,a.current=null,e0.current=null,w0.current={inFlight:!1,lastAttemptAt:0,turnId:null},N_(),O_(null),G_(null),A_.current=!1,X_.current=!1},[N_,O_,G_,C0]),u$=P((V)=>{if(!L8({remainingQueueCount:V,currentTurnId:Y_.current,isAgentTurnActive:m_}))return;a.current=null,G_(null)},[m_,G_]),P1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),L2=P(()=>({agentStatus:t,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:z_,currentTurnId:V_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(m_),followupQueueItems:Array.isArray(k0)?k0.map((V)=>({...V})):[],activeModel:c_,activeThinkingLevel:M_,supportsThinking:Boolean(e_),activeModelUsage:K0,contextUsage:F0,isAgentRunning:Boolean(j0.current),wasAgentActive:Boolean(z$.current),draftBuffer:y_.current||"",thoughtBuffer:u_.current||"",lastAgentEvent:w_.current||null,lastSilenceNotice:Q_.current||0,lastAgentResponse:W_.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(A_.current),draftExpanded:Boolean(X_.current),agentStatusRef:e0.current||null,silentRecovery:{...w0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[c_,K0,M_,K_,B_,t,o,F0,V_,k0,m_,z_,k_,e_]),C1=P((V)=>{let Y=V||P1();N_(),j0.current=Boolean(Y.isAgentRunning),z$.current=Boolean(Y.wasAgentActive),C0(Boolean(Y.isAgentTurnActive)),w_.current=Y.lastAgentEvent||null,Q_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",u_.current=Y.thoughtBuffer||"",I_.current=Y.pendingRequest||null,W_.current=Y.lastAgentResponse||null,Y_.current=Y.currentTurnIdRef||null,a.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,w0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},A_.current=Boolean(Y.thoughtExpanded),X_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),T_(Y.agentPlan||""),$_(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),O_(Y.currentTurnId||null),G_(Y.steerQueuedTurnId||null),s_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),F_(Y.activeModel||null),_0(Y.activeThinkingLevel||null),f_(Boolean(Y.supportsThinking)),z0(Y.activeModelUsage??null),q0(Y.contextUsage??null)},[N_,P1,O_,s_,C0,G_]),F$=P((V)=>{if(!V)return;if(Y_.current===V)return;Y_.current=V,w0.current={inFlight:!1,lastAttemptAt:0,turnId:V},O_(V),a.current=null,G_(null),y_.current="",u_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),I_.current=null,W_.current=null,A_.current=!1,X_.current=!1},[O_,G_]),b1=P((V)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let Y=W_.current;if(!Y||!Y.post)return;if(V&&Y.turnId&&Y.turnId!==V)return;let J=Y.post;if(J.id&&d.current===J.id)return;let M=String(J?.data?.content||"").trim();if(!M)return;d.current=J.id||d.current,W_.current=null;let w=M.replace(/\s+/g," ").slice(0,200),p=b$.current||{},H_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";T$(H_,w)},[T$]),M8=P(async(V,Y)=>{if(V!=="thought"&&V!=="draft")return;let J=Y_.current;if(V==="thought"){if(A_.current=Y,J)try{await y8(J,"thought",Y)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!Y)return;try{let M=J?await k8(J,"thought"):null;if(M?.text)u_.current=M.text;$_((w)=>({...w||{text:"",totalLines:0},fullText:u_.current||w?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:w?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(X_.current=Y,J)try{await y8(J,"draft",Y)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!Y)return;try{let M=J?await k8(J,"draft"):null;if(M?.text)y_.current=M.text;i((w)=>({...w||{text:"",totalLines:0},fullText:y_.current||w?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:w?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),s2=D(null),o2=P(()=>{let V=Y$.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);s2.current=o2;let P8=P((V)=>{let Y=Y$.current;if(!Y||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:M}=D0.current||{},w=!(M&&!J),p=w?Y.scrollHeight-Y.scrollTop:Y.scrollTop;V(),requestAnimationFrame(()=>{let j_=Y$.current;if(!j_)return;if(w){let H_=Math.max(j_.scrollHeight-p,0);j_.scrollTop=H_}else{let H_=Math.max(j_.scrollHeight-j_.clientHeight,0),c=Math.min(p,H_);j_.scrollTop=c}})},[]),t$=P((V)=>{let Y=Y$.current;if(!Y||typeof V!=="function"){V?.();return}let J=Y.scrollTop;V(),requestAnimationFrame(()=>{let M=Y$.current;if(!M)return;let w=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(J,w)})},[]),C8="Queued as a follow-up (one-at-a-time).",b8="⁣",S1=P((V)=>{if(!V||!Array.isArray(V))return V;let Y=s0.current,J=new Set(Y),M=V.filter((w)=>{if(J.has(w?.id))return!1;if(w?.data?.is_bot_message){let p=w?.data?.content;if(p===C8||p===b8)return!1}return!0});return M.length===V.length?V:M},[]),{posts:I1,setPosts:Q0,hasMore:S8,setHasMore:B2,hasMoreRef:x1,loadPosts:$$,refreshTimeline:P0,loadMore:I8,loadMoreRef:r2}=t6({preserveTimelineScroll:P8,preserveTimelineScrollTop:t$,chatJid:$}),m$=d_(()=>S1(I1),[I1,k0,S1]),Q2=P(()=>{let V=t_.current;if(!V)return;Q0((Y)=>Y?Y.filter((J)=>J.id!==V):Y),t_.current=null},[Q0]),{handleSplitterMouseDown:x8,handleSplitterTouchStart:T8,handleEditorSplitterMouseDown:f8,handleEditorSplitterTouchStart:R8,handleDockSplitterMouseDown:v8,handleDockSplitterTouchStart:u8}=_8({appShellRef:Q$,sidebarWidthRef:Q,editorWidthRef:S,dockHeightRef:T}),T1=P(()=>{if(!j0.current)return;j0.current=!1,Q_.current=0,w_.current=null,Y_.current=null,O_(null),A_.current=!1,X_.current=!1;let V=(y_.current||"").trim();if(y_.current="",u_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),I_.current=null,W_.current=null,!V){l({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),w=new Date().toISOString(),p={id:M,timestamp:w,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};t_.current=M,Q0((j_)=>j_?q2([...j_,p]):[p]),s2.current?.(),l(null)},[O_]);v(()=>{D0.current={currentHashtag:W,searchQuery:q}},[W,q]);let R_=P(()=>{let V=++H0.current,Y=$;_j(Y).then((J)=>{if(V!==H0.current)return;if(G0.current!==Y)return;let M=O0.current,w=Array.isArray(J?.items)?J.items.map((p)=>({...p})).filter((p)=>!M.has(p.row_id)):[];if(w.length){s_((p)=>{if(p.length===w.length&&p.every((j_,H_)=>j_.row_id===w[H_].row_id))return p;return w});return}M.clear(),u$(0),s_((p)=>p.length===0?p:[])}).catch(()=>{if(V!==H0.current)return;if(G0.current!==Y)return;s_((J)=>J.length===0?J:[])})},[u$,$,s_]),h0=P(async()=>{let V=$;try{let Y=await w1(V);if(G0.current!==V)return;if(Y)q0(Y)}catch(Y){if(G0.current!==V)return;console.warn("Failed to fetch agent context:",Y)}},[$]),i0=P(async()=>{let V=$;try{let Y=await A8(V);if(G0.current!==V)return null;if(!Y||Y.status!=="active"||!Y.data){if(z$.current){let{currentHashtag:w,searchQuery:p}=D0.current||{};if(!w&&!p)P0()}return z$.current=!1,B0(),e0.current=null,l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),I_.current=null,Y??null}z$.current=!0;let J=Y.data;e0.current=J;let M=J.turn_id||J.turnId;if(M)F$(M);if(g({running:!0,clearSilence:!0}),W0(),l(J),Y.thought&&Y.thought.text)$_((w)=>{if(w&&w.text&&w.text.length>=Y.thought.text.length)return w;return u_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((w)=>{if(w&&w.text&&w.text.length>=Y.draft.text.length)return w;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B0,W0,g,P0,F$]),a2=P(async()=>{if(!j0.current)return null;if(I_.current)return null;let V=Y_.current||null,Y=w0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===V&&J-Y.lastAttemptAt<D1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=V;try{let{currentHashtag:M,searchQuery:w}=D0.current||{};if(!M&&!w)await P0();return await R_(),await i0()}finally{Y.inFlight=!1}},[i0,R_,P0]);v(()=>{let V=Math.min(1000,Math.max(100,Math.floor(J1/2))),Y=setInterval(()=>{if(!j0.current)return;if(I_.current)return;let J=w_.current;if(!J)return;let M=Date.now(),w=M-J,p=G2(e0.current);if(w>=j8){if(!p)l({type:"waiting",title:"Re-syncing after a quiet period…"});a2();return}if(w>=J1){if(M-Q_.current>=D1){if(!p){let j_=Math.floor(w/1000);l({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}Q_.current=M,a2()}}},V);return()=>clearInterval(Y)},[a2]);let m8=P((V)=>{if(z(V),V!=="connected"){l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),I_.current=null,B0();return}if(!L$.current){L$.current=!0,i0(),h0();return}let{currentHashtag:Y,searchQuery:J}=D0.current;if(!Y&&!J)P0();i0(),R_(),h0()},[B0,P0,i0,R_,h0]),g8=P(async(V)=>{L(V),Q0(null),await $$(V)},[$$]),p8=P(async()=>{L(null),H(null),Q0(null),await $$()},[$$]),c8=P(async(V,Y=R)=>{if(!V||!V.trim())return;let J=Y==="root"||Y==="all"?Y:"current";u(J),H(V.trim()),L(null),Q0(null);try{let M=await D8(V.trim(),50,0,$,J,b);Q0(M.results),B2(!1)}catch(M){console.error("Failed to search:",M),Q0([])}},[$,b,R]),h8=P(()=>{x(!0),H(null),L(null),u("current"),Q0([])},[]),i8=P(()=>{x(!1),H(null),$$()},[$$]),zj=P(()=>{},[]),l8=P(async(V)=>{if(!V)return;let Y=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,M=m$?.filter((p)=>p?.data?.thread_id===Y&&p?.id!==Y).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let w=(p)=>{if(!p.length)return;R$((H_)=>{let c=new Set(H_);return p.forEach((q_)=>c.add(q_)),c}),setTimeout(()=>{if(t$(()=>{Q0((H_)=>H_?H_.filter((c)=>!p.includes(c.id)):H_)}),R$((H_)=>{let c=new Set(H_);return p.forEach((q_)=>c.delete(q_)),c}),x1.current)r2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await E8(Y,M>0,J);if(p?.ids?.length)w(p.ids)}catch(p){let j_=p?.message||"";if(M===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await E8(Y,!0,J);if(c?.ids?.length)w(c.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${j_}`)}},[$,m$,t$]),f1=P(async()=>{try{let V=await o5();U_(N8(V));let Y=V?.user||{};M$((M)=>{let w=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",p=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,j_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(M.name===w&&M.avatar_url===p&&M.avatar_background===j_)return M;return{name:w,avatar_url:p,avatar_background:j_}});let J=(V?.agents||[]).find((M)=>M.id==="default");G$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,Y=await w1(V);if(G0.current!==V)return;if(Y)q0(Y)}catch{}},[G$,$]);v(()=>{f1();let V=l$("sidebarWidth",null),Y=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(Q.current=Y,Q$.current)Q$.current.style.setProperty("--sidebar-width",`${Y}px`)},[f1]);let t2=m_||t!==null,R1=P((V)=>{if(!V||typeof V!=="object")return;let Y=V.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:M}=V;if(!J&&M===void 0)return;let w=b$.current?.[Y]||{id:Y},p=w.name||null,j_=w.avatar_url??w.avatarUrl??w.avatar??null,H_=!1,c=!1;if(J&&J!==w.name)p=J,c=!0;if(M!==void 0){let q_=typeof M==="string"?M.trim():null,l_=typeof j_==="string"?j_.trim():null,J_=q_||null;if(J_!==(l_||null))j_=J_,H_=!0}if(!c&&!H_)return;if(U_((q_)=>{let J_={...q_[Y]||{id:Y}};if(c)J_.name=p;if(H_)J_.avatar_url=j_;return{...q_,[Y]:J_}}),Y==="default")G$(p,j_,H_?Date.now():null)},[G$]),v1=P((V)=>{if(!V||typeof V!=="object")return;let Y=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,M=V.user_avatar_background??V.userAvatarBackground;if(Y===void 0&&J===void 0&&M===void 0)return;M$((w)=>{let p=typeof Y==="string"&&Y.trim()?Y.trim():w.name||"You",j_=J===void 0?w.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,H_=M===void 0?w.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(w.name===p&&w.avatar_url===j_&&w.avatar_background===H_)return w;return{name:p,avatar_url:j_,avatar_background:H_}})},[]),e2=P((V)=>{if(!V||typeof V!=="object")return;let Y=V.model??V.current;if(Y!==void 0)F_(Y);if(V.thinking_level!==void 0)_0(V.thinking_level??null);if(V.supports_thinking!==void 0)f_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)z0(V.provider_usage??null)},[]),e$=P(()=>{let V=$;r5(V).then((Y)=>{if(G0.current!==V)return;if(Y)e2(Y)}).catch(()=>{})},[e2,$]),m0=P(()=>{a5().then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];$0(Y)}).catch(()=>{})},[]),x0=P(()=>{w8(b).then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];E0(Y)}).catch(()=>{})},[b]),n8=P((V)=>{let Y=V?.row_id;if(Y==null)return;O0.current.add(Y),s_((J)=>J.filter((M)=>M?.row_id!==Y)),$j(Y,A1($)).then(()=>{R_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),U("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),R_()})},[$,R_,s_,U]),d8=P((V)=>{let Y=V?.row_id;if(Y==null)return;let J=Y0.current.filter((M)=>M?.row_id!==Y).length;O0.current.add(Y),u$(J),s_((M)=>M.filter((w)=>w?.row_id!==Y)),jj(Y,A1($)).then(()=>{R_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),U("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),R_()})},[u$,$,R_,s_,U]),_4=P((V)=>{if(!V||typeof V!=="object")return;if(m0(),x0(),V?.queued==="followup"||V?.queued==="steer"){R_();return}let Y=V?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))R_()},[m0,x0,R_]),$4=P(()=>{if(L_.current)L_.current.abort(),L_.current=null;o_(null)},[]),U2=P(async(V)=>{let Y=String(V||"").trim();if(!Y)return U("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let J=new AbortController;L_.current=J,o_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await Zj(Y,{signal:J.signal,chatJid:u3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,p)=>{if(w==="side_prompt_start")o_((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(w)=>{o_((p)=>p?{...p,thinking:`${p.thinking||""}${w||""}`}:p)},onTextDelta:(w)=>{o_((p)=>p?{...p,answer:`${p.answer||""}${w||""}`}:p)}});if(L_.current!==J)return!0;o_((w)=>w?{...w,answer:M?.result||w.answer||"",thinking:M?.thinking||w.thinking||"",model:M?.model||null,status:"success",error:null}:w)}catch(M){if(J.signal.aborted)return!0;o_((w)=>w?{...w,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:w)}finally{if(L_.current===J)L_.current=null}return!0},[$,U]),s8=P(async({content:V})=>{let Y=v3(V);if(!Y)return!1;if(Y.type==="help")return U("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return $4(),U("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U2(Y.question),!0;return!1},[$4,U2,U]),o8=P(()=>{if(i_?.question)U2(i_.question)},[i_,U2]),r8=P(async()=>{let V=p3(i_);if(!V)return;try{let Y=await c$("default",V,null,[],t2?"queue":null,$);_4(Y),U(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){U("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[i_,_4,t2,U]),_2=P(()=>{e$(),m0(),x0(),R_(),h0()},[e$,m0,x0,R_,h0]);v(()=>{_2();let V=setInterval(()=>{e$(),m0(),x0(),R_()},60000);return()=>clearInterval(V)},[_2,e$,m0,x0,R_]),v(()=>{x0()},[x0]),v(()=>{let V=!1;if(Q0(null),W)return $$(W),()=>{V=!0};if(q)return D8(q,50,0,$,R,b).then((Y)=>{if(V)return;Q0(Y.results),B2(!1)}).catch((Y)=>{if(V)return;console.error("Failed to search:",Y),Q0([]),B2(!1)}),()=>{V=!0};return $$(),()=>{V=!0}},[$,W,q,R,b,$$,B2,Q0]),v(()=>{let V=C$.current||$;P$.current.set(V,L2())},[$,L2]),v(()=>{let V=C$.current||$;if(V===$)return;P$.current.set(V,L2()),C$.current=$,O0.current.clear(),C1(P$.current.get($)||null),R_(),i0(),h0()},[$,i0,h0,R_,C1,L2]);let a8=P(()=>{let{currentHashtag:V,searchQuery:Y}=D0.current||{};if(!V&&!Y)P0();_2()},[_2,P0]),j4=P((V,Y)=>{let J=Y?.turn_id,M=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,p=M?M===$:V==="connected"||V==="workspace_update";if(p)R1(Y),v1(Y);if(V==="ui_theme"){P3(Y);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))W0()}if(V==="connected"){l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),I_.current=null,B0();let c=$;A8(c).then((J_)=>{if(G0.current!==c)return;if(!J_||J_.status!=="active"||!J_.data)return;let g$=J_.data,u1=g$.turn_id||g$.turnId;if(u1)F$(u1);if(g({clearSilence:!0}),V$(g$),J_.thought&&J_.thought.text)u_.current=J_.thought.text,$_({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)y_.current=J_.draft.text,i({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:q_,searchQuery:l_}=D0.current||{};if(!q_&&!l_)P0();_2();return}if(V==="agent_status"){if(!p){if(Y?.type==="done"||Y?.type==="error")m0(),x0();return}if(Y.type==="done"||Y.type==="error"){if(J&&Y_.current&&J!==Y_.current)return;if(Y.type==="done"){b1(J||Y_.current);let{currentHashtag:c,searchQuery:q_}=D0.current||{};if(!c&&!q_)P0();if(Y.context_usage)q0(Y.context_usage)}if(z$.current=!1,B0(),O0.current.clear(),m0(),R_(),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(J)F$(J);if(g({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",u_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0});e0.current=Y,l((c)=>{if(c&&c.type===Y.type&&c.title===Y.title)return c;return Y})}return}if(V==="agent_steer_queued"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;let c=J||Y_.current;if(!c)return;a.current=c,G_(c);return}if(V==="agent_followup_queued"){if(!p)return;let c=Y?.row_id,q_=Y?.content;if(c!=null&&typeof q_==="string"&&q_.trim())s_((l_)=>{if(l_.some((J_)=>J_?.row_id===c))return l_;return[...l_,{row_id:c,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});R_();return}if(V==="agent_followup_consumed"){if(!p)return;let c=Y?.row_id;if(c!=null){let q_=Y0.current.filter((l_)=>l_.row_id!==c).length;u$(q_),s_((l_)=>l_.filter((J_)=>J_.row_id!==c))}R_(),P0();return}if(V==="agent_followup_removed"){if(!p)return;let c=Y?.row_id;if(c!=null){let q_=Y0.current.filter((l_)=>l_.row_id!==c).length;O0.current.add(c),u$(q_),s_((l_)=>l_.filter((J_)=>J_.row_id!==c))}R_();return}if(V==="agent_draft_delta"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);if(g({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let c=Date.now();if(!_$.current||c-_$.current>=100){_$.current=c;let q_=y_.current,l_=E1(q_);if(X_.current)i((J_)=>({text:J_?.text||"",totalLines:l_,fullText:q_}));else i({text:q_,totalLines:l_})}return}if(V==="agent_draft"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);g({running:!0,clearSilence:!0});let c=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),l_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")T_(c);else T_((J_)=>(J_||"")+c);else if(!X_.current)y_.current=c,i({text:c,totalLines:l_});return}if(V==="agent_thought_delta"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);if(g({running:!0,clearSilence:!0}),Y?.reset)u_.current="";if(typeof Y?.delta==="string")u_.current+=Y.delta;let c=Date.now();if(A_.current&&(!B$.current||c-B$.current>=100)){B$.current=c;let q_=u_.current;$_((l_)=>({text:l_?.text||"",totalLines:E1(q_),fullText:q_}))}return}if(V==="agent_thought"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);g({running:!0,clearSilence:!0});let c=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!A_.current)u_.current=c,$_({text:c,totalLines:q_});return}if(V==="model_changed"){if(!p)return;if(Y?.model!==void 0)F_(Y.model);if(Y?.thinking_level!==void 0)_0(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)f_(Boolean(Y.supports_thinking));let c=$;w1(c).then((q_)=>{if(G0.current!==c)return;if(q_)q0(q_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(U8(V)){if(!p)return;if(F8(V,Y),V==="extension_ui_notify"&&typeof Y?.message==="string")U(Y.message,null,Y?.type||"info");if(V==="extension_ui_error"&&typeof Y?.error==="string")U("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:j_,searchQuery:H_}=D0.current;if(V==="agent_response"){if(!p)return;Q2(),W_.current={post:Y,turnId:Y_.current}}if(!j_&&!H_&&p&&(V==="new_post"||V==="new_reply"||V==="agent_response"))Q0((c)=>{if(!c)return[Y];if(c.some((q_)=>q_.id===Y.id))return c;return[...c,Y]}),s2.current?.();if(V==="interaction_updated"){if(!p)return;Q0((c)=>{if(!c)return c;if(!c.some((q_)=>q_.id===Y.id))return c;return c.map((q_)=>q_.id===Y.id?Y:q_)})}if(V==="interaction_deleted"){if(!p)return;let c=Y?.ids||[];if(c.length){t$(()=>{Q0((J_)=>J_?J_.filter((g$)=>!c.includes(g$.id)):J_)});let{currentHashtag:q_,searchQuery:l_}=D0.current;if(x1.current&&!q_&&!l_)r2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B0,W0,$,r2,g,b1,t$,m0,x0,P0,Q2,F$,V$,R1,v1,e$,R_,s_]);v(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=j4,V.reset=()=>{Q2(),B0(),l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null)},V.finalize=()=>T1(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[B0,T1,j4,Q2]),r6({handleSseEvent:j4,handleConnectionStatusChange:m8,loadPosts:$$,onWake:a8,chatJid:$}),v(()=>{if(!m$||m$.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let Y=V.slice(5);s(Y),history.replaceState(null,"",location.pathname+location.search)},[m$,s]);let Z4=t!==null;v(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:M}=D0.current||{},w=!J&&!M;if(Z4){if(w)P0();R_(),i0(),h0()}else{if(w)P0();i0(),h0()}},Z4?15000:60000);return()=>clearInterval(Y)},[K,Z4,i0,h0,R_,P0]),v(()=>{return J8(()=>{i0(),h0(),R_()})},[i0,h0,R_]);let t8=P(()=>{X$((V)=>!V)},[]),e8=P((V)=>{if(typeof window>"u")return;let Y=String(V||"").trim();if(!Y||Y===$)return;let J=O2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),_9=P(async()=>{if(typeof window>"u"||!E_?.chat_jid)return;let V=E_.agent_name||"",Y=E_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let M=window.prompt("Agent handle (without @)",V);if(M===null)return;try{let w=await t5(E_.chat_jid,{displayName:J,agentName:M});await Promise.allSettled([m0(),x0()]);let p=w?.branch?.agent_name||String(M||"").trim()||V;U("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(w){let p=w instanceof Error?w.message:String(w||"Could not rename branch.");U("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[E_,m0,x0,U]),$9=P(async()=>{if(typeof window>"u"||!E_?.chat_jid)return;if(E_.chat_jid===(E_.root_chat_jid||E_.chat_jid)){U("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=E_.display_name||`@${E_.agent_name||E_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await e5(E_.chat_jid),await Promise.allSettled([m0(),x0()]);let M=E_.root_chat_jid||"web:default";U("Branch pruned",`${Y} has been archived.`,"info",3000);let w=O2(window.location.href,M,{chatOnly:j});window.location.assign(w)}catch(M){let w=M instanceof Error?M.message:String(M||"Could not prune branch.");U("Could not prune branch",w||"Could not prune branch.","warning",5000)}},[j,E_,m0,x0,U]);v(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{h_({status:"running",message:"Preparing a new chat branch…"});let Y=await P2(N);if(V)return;let J=Y?.branch,M=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let w=O2(window.location.href,M,{chatOnly:!0});window.location.replace(w)}catch(Y){if(V)return;h_({status:"error",message:y1(Y)})}})(),()=>{V=!0}},[Z,N]);let j9=P(async()=>{if(typeof window>"u"||G)return;let V=G8($);if(!V){U("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=O8(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))U("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=W8(V);if(!Y){U("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}V8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await P2($))?.branch,w=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let j_=await F4();$0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await w8(b);E0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let p=O2(window.location.href,w,{chatOnly:!0});X8(Y,p)}catch(J){q8(Y),U("Could not open branch window",y1(J),"error",5000)}},[$,b,G,U]);v(()=>{if(!x_)return;if(typeof window>"u")return;let V=Q$.current;if(!V)return;if(!S.current){let Y=l$("editorWidth",null),J=Q.current||280;S.current=Number.isFinite(Y)?Y:J}if(V.style.setProperty("--editor-width",`${S.current}px`),!T.current){let Y=l$("dockHeight",null);T.current=Number.isFinite(Y)?Y:200}V.style.setProperty("--dock-height",`${T.current}px`)},[x_]),v(()=>{if(!v0||j)return;let V=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),K$()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[K$,v0,j]);let Z9=Boolean(k_&&k_===(t?.turn_id||V_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${P_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${P_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${g_?"":" workspace-collapsed"}${x_?" editor-open":""}${j?" chat-only":""}`} ref=${Q$}>
            ${!j&&B`
                <${l6}
                    onFileSelect=${U$}
                    visible=${g_}
                    active=${g_||x_}
                    onOpenEditor=${T0}
                />
                <button
                    class=${`workspace-toggle-tab${g_?" open":" closed"}`}
                    onClick=${t8}
                    title=${g_?"Hide workspace":"Show workspace"}
                    aria-label=${g_?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${x8} onTouchStart=${T8}></div>
            `}
            ${r$&&B`
                <div class="editor-pane-container">
                    ${x_&&B`
                        <${d6}
                            tabs=${L0}
                            activeId=${Z0}
                            onActivate=${J0}
                            onClose=${y$}
                            onCloseOthers=${A$}
                            onCloseAll=${s$}
                            onTogglePin=${v$}
                            onTogglePreview=${w$}
                            previewTabs=${a0}
                            onToggleDock=${v0?K$:void 0}
                            dockVisible=${v0&&O$}
                        />
                    `}
                    ${x_&&B`<div class="editor-pane-host" ref=${f0}></div>`}
                    ${x_&&Z0&&a0.has(Z0)&&B`
                        <${o6}
                            getContent=${()=>R0.current?.getContent?.()}
                            path=${Z0}
                            onClose=${()=>w$(Z0)}
                        />
                    `}
                    ${v0&&O$&&B`<div class="dock-splitter" onMouseDown=${v8} onTouchStart=${u8}></div>`}
                    ${v0&&B`<div class=${`dock-panel${O$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${K$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${c0}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${f8} onTouchStart=${R8}></div>
            `}
            <div class="container">
                ${q&&K8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${E_?.display_name||E_?.agent_name?`@${E_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${E_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${U0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>e8(V.currentTarget.value)}
                                    >
                                        ${U0.map((V)=>B`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name}${V.display_name?` — ${V.display_name}`:""}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${E_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${_9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${E_?.chat_jid&&E_.chat_jid!==(E_.root_chat_jid||E_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${$9}
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
                ${(W||q)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${p8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${W?`#${W}`:`Search: ${q} · ${e}`}</span>
                    </div>
                `}
                <${X6}
                    posts=${m$}
                    hasMore=${S8}
                    onLoadMore=${I8}
                    timelineRef=${Y$}
                    onHashtagClick=${g8}
                    onMessageRef=${m}
                    onScrollToMessage=${s}
                    onFileRef=${E}
                    onPostClick=${void 0}
                    onDeletePost=${l8}
                    emptyMessage=${W?`No posts with #${W}`:q?`No results for "${q}"`:void 0}
                    agents=${D_}
                    user=${t0}
                    reverse=${!(q&&!W)}
                    removingPostIds=${f$}
                    searchQuery=${q}
                />
                <${o3}
                    status=${t}
                    draft=${K_}
                    plan=${B_}
                    thought=${o}
                    pendingRequest=${z_}
                    intent=${h}
                    turnId=${V_}
                    steerQueued=${Z9}
                    onPanelToggle=${M8}
                />
                <${c3}
                    session=${i_}
                    onClose=${$4}
                    onRetry=${o8}
                    onInject=${r8}
                />
                <${J3}
                    onPost=${()=>{$$(),o2()}}
                    onFocus=${o2}
                    searchMode=${y}
                    searchScope=${R}
                    onSearch=${c8}
                    onSearchScopeChange=${u}
                    onEnterSearch=${h8}
                    onExitSearch=${i8}
                    fileRefs=${I}
                    onRemoveFileRef=${W$}
                    onClearFileRefs=${O}
                    messageRefs=${A}
                    onRemoveMessageRef=${r}
                    onClearMessageRefs=${n}
                    activeEditorPath=${j?null:Z0}
                    onAttachEditorFile=${j?void 0:k}
                    onOpenFilePill=${E}
                    followupQueueCount=${A0}
                    followupQueueItems=${k0}
                    onInjectQueuedFollowup=${n8}
                    onRemoveQueuedFollowup=${d8}
                    onSubmitIntercept=${s8}
                    onMessageResponse=${_4}
                    onPopOutChat=${G?void 0:j9}
                    isAgentActive=${t2}
                    activeChatAgents=${b_}
                    currentChatJid=${$}
                    activeModel=${c_}
                    modelUsage=${K0}
                    thinkingLevel=${M_}
                    supportsThinking=${e_}
                    contextUsage=${F0}
                    notificationsEnabled=${b0}
                    notificationPermission=${p0}
                    onToggleNotifications=${o0}
                    onModelChange=${F_}
                    onModelStateChange=${e2}
                />
                <${a3} status=${K} />
                <${r3}
                    request=${z_}
                    onRespond=${()=>{Z_(null),I_.current=null}}
                />
            </div>
        </div>
    `}function Kj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${Nj} locationParams=${_} />`}W3(B`<${Kj} />`,document.getElementById("app"));

//# debugId=BEBBF9ABC896683B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
