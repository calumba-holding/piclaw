var U9=Object.defineProperty;var F9=(_)=>_;function H9(_,$){this[_]=F9.bind(null,$)}var J9=(_,$)=>{for(var j in $)U9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:H9.bind($,j)})};var D9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var r2,t_,U3,E9,s$,N3,F3,H3,J3,b1,A1,w1,k9,d2={},s2=[],y9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,a2=Array.isArray;function T$(_,$){for(var j in $)_[j]=$[j];return _}function I1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function D3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?r2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return i2(_,K,Z,N,null)}function i2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++U3:N,__i:-1,__u:0};return N==null&&t_.vnode!=null&&t_.vnode(z),z}function t2(_){return _.children}function l2(_,$){this.props=_,this.context=$}function q2(_,$){if($==null)return _.__?q2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?q2(_):null}function A9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=T$({},$);z.__v=$.__v+1,t_.vnode&&t_.vnode(z),x1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?q2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,A3(Z,z,N),$.__e=$.__=null,z.__e!=j&&E3(z)}}function E3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),E3(_)}function z3(_){(!_.__d&&(_.__d=!0)&&s$.push(_)&&!o2.__r++||N3!=t_.debounceRendering)&&((N3=t_.debounceRendering)||F3)(o2)}function o2(){try{for(var _,$=1;s$.length;)s$.length>$&&s$.sort(H3),_=s$.shift(),$=s$.length,A9(_)}finally{s$.length=o2.__r=0}}function k3(_,$,j,Z,N,z,K,G,q,X,O){var W,F,b,m,u,R,E,H=Z&&Z.__k||s2,x=$.length;for(q=w9(j,$,H,q,x),W=0;W<x;W++)(b=j.__k[W])!=null&&(F=b.__i!=-1&&H[b.__i]||d2,b.__i=W,R=x1(_,b,F,N,z,K,G,q,X,O),m=b.__e,b.ref&&F.ref!=b.ref&&(F.ref&&C1(F.ref,null,b),O.push(b.ref,b.__c||m,b)),u==null&&m!=null&&(u=m),(E=!!(4&b.__u))||F.__k===b.__k?q=y3(b,q,_,E):typeof b.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),b.__u&=-7);return j.__e=u,q}function w9(_,$,j,Z,N){var z,K,G,q,X,O=j.length,W=O,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=i2(null,K,null,null,null):a2(K)?K=_.__k[z]=i2(t2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=i2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+F,K.__=_,K.__b=_.__b+1,G=null,(X=K.__i=P9(K,j,q,W))!=-1&&(W--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(N>O?F--:N<O&&F++),typeof K.type!="function"&&(K.__u|=4)):X!=q&&(X==q-1?F--:X==q+1?F++:(X>q?F--:F++,K.__u|=4))):_.__k[z]=null;if(W)for(z=0;z<O;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=q2(G)),P3(G,G));return Z}function y3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=y3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=q2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function P9(_,$,j,Z){var N,z,K,G=_.key,q=_.type,X=$[j],O=X!=null&&(2&X.__u)==0;if(X===null&&G==null||O&&G==X.key&&q==X.type)return j;if(Z>(O?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((X=$[K=N>=0?N--:z++])!=null&&(2&X.__u)==0&&G==X.key&&q==X.type)return K}return-1}function K3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||y9.test($)?j:j+"px"}function h2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||K3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||K3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(J3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=b1,_.addEventListener($,z?w1:A1,z)):_.removeEventListener($,z?w1:A1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Y3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=b1++;else if($.t<j.u)return;return j(t_.event?t_.event($):$)}}}function x1(_,$,j,Z,N,z,K,G,q,X){var O,W,F,b,m,u,R,E,H,x,I,i,n,__,d,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[G=$.__e=j.__e]),(O=t_.__b)&&O($);_:if(typeof K_=="function")try{if(E=$.props,H=K_.prototype&&K_.prototype.render,x=(O=K_.contextType)&&Z[O.__c],I=O?x?x.props.value:O.__:Z,j.__c?R=(W=$.__c=j.__c).__=W.__E:(H?$.__c=W=new K_(E,I):($.__c=W=new l2(E,I),W.constructor=K_,W.render=b9),x&&x.sub(W),W.state||(W.state={}),W.__n=Z,F=W.__d=!0,W.__h=[],W._sb=[]),H&&W.__s==null&&(W.__s=W.state),H&&K_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=T$({},W.__s)),T$(W.__s,K_.getDerivedStateFromProps(E,W.__s))),b=W.props,m=W.state,W.__v=$,F)H&&K_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),H&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(H&&K_.getDerivedStateFromProps==null&&E!==b&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(E,I),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(E,W.__s,I)===!1){$.__v!=j.__v&&(W.props=E,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),s2.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&K.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(E,W.__s,I),H&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(b,m,u)})}if(W.context=I,W.props=E,W.__P=_,W.__e=!1,i=t_.__r,n=0,H)W.state=W.__s,W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),s2.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,i&&i($),O=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++n<25);W.state=W.__s,W.getChildContext!=null&&(Z=T$(T$({},Z),W.getChildContext())),H&&!F&&W.getSnapshotBeforeUpdate!=null&&(u=W.getSnapshotBeforeUpdate(b,m)),__=O!=null&&O.type===t2&&O.key==null?w3(O.props.children):O,G=k3(_,a2(__)?__:[__],$,j,Z,N,z,K,G,q,X),W.base=$.__e,$.__u&=-161,W.__h.length&&K.push(W),R&&(W.__E=W.__=null)}catch(h){if($.__v=null,q||z!=null)if(h.then){for($.__u|=q?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(d=z.length;d--;)I1(z[d]);P1($)}else $.__e=j.__e,$.__k=j.__k,h.then||P1($);t_.__e(h,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=M9(j.__e,$,j,Z,N,z,K,q,X);return(O=t_.diffed)&&O($),128&$.__u?void 0:G}function P1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(P1))}function A3(_,$,j){for(var Z=0;Z<j.length;Z++)C1(j[Z],j[++Z],j[++Z]);t_.__c&&t_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){t_.__e(z,N.__v)}})}function w3(_){return typeof _!="object"||_==null||_.__b>0?_:a2(_)?_.map(w3):T$({},_)}function M9(_,$,j,Z,N,z,K,G,q){var X,O,W,F,b,m,u,R=j.props||d2,E=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(X=0;X<z.length;X++)if((b=z[X])&&"setAttribute"in b==!!H&&(H?b.localName==H:b.nodeType==3)){_=b,z[X]=null;break}}if(_==null){if(H==null)return document.createTextNode(E);_=document.createElementNS(N,H,E.is&&E),G&&(t_.__m&&t_.__m($,z),G=!1),z=null}if(H==null)R===E||G&&_.data==E||(_.data=E);else{if(z=z&&r2.call(_.childNodes),!G&&z!=null)for(R={},X=0;X<_.attributes.length;X++)R[(b=_.attributes[X]).name]=b.value;for(X in R)b=R[X],X=="dangerouslySetInnerHTML"?W=b:X=="children"||(X in E)||X=="value"&&("defaultValue"in E)||X=="checked"&&("defaultChecked"in E)||h2(_,X,null,b,N);for(X in E)b=E[X],X=="children"?F=b:X=="dangerouslySetInnerHTML"?O=b:X=="value"?m=b:X=="checked"?u=b:G&&typeof b!="function"||R[X]===b||h2(_,X,b,R[X],N);if(O)G||W&&(O.__html==W.__html||O.__html==_.innerHTML)||(_.innerHTML=O.__html),$.__k=[];else if(W&&(_.innerHTML=""),k3($.type=="template"?_.content:_,a2(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&q2(j,0),G,q),z!=null)for(X=z.length;X--;)I1(z[X]);G||(X="value",H=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[X]||H=="progress"&&!m||H=="option"&&m!=R[X])&&h2(_,X,m,R[X],N),X="checked",u!=null&&u!=_[X]&&h2(_,X,u,R[X],N))}return _}function C1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){t_.__e(N,j)}}function P3(_,$,j){var Z,N;if(t_.unmount&&t_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){t_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&P3(Z[N],$,j||typeof _.type!="function");j||I1(_.__e),_.__c=_.__=_.__e=void 0}function b9(_,$,j){return this.constructor(_,j)}function M3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),t_.__&&t_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],x1($,_=(!Z&&j||$).__k=D3(t2,null,[_]),N||d2,d2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?r2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),A3(z,_,K)}r2=s2.slice,t_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},U3=0,E9=function(_){return _!=null&&_.constructor===void 0},l2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T$({},this.state),typeof _=="function"&&(_=_(T$({},j),this.props)),_&&T$(j,_),_!=null&&this.__v&&($&&this._sb.push($),z3(this))},l2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z3(this))},l2.prototype.render=t2,s$=[],F3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H3=function(_,$){return _.__v.__b-$.__v.__b},o2.__r=0,J3=/(PointerCapture)$|Capture$/i,b1=0,A1=Y3(!1),w1=Y3(!0),k9=0;var w2,Q0,y1,W3,P2=0,b3=[],B0=t_,G3=B0.__b,V3=B0.__r,X3=B0.diffed,q3=B0.__c,L3=B0.unmount,O3=B0.__;function T1(_,$){B0.__h&&B0.__h(Q0,_,P2||$),P2=0;var j=Q0.__H||(Q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function S(_){return P2=1,I9(x3,_)}function I9(_,$,j){var Z=T1(w2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):x3(void 0,$),function(G){var q=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(q,G);q!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=Q0,!Q0.__f)){var N=function(G,q,X){if(!Z.__c.__H)return!0;var O=Z.__c.__H.__.filter(function(F){return F.__c});if(O.every(function(F){return!F.__N}))return!z||z.call(this,G,q,X);var W=Z.__c.props!==G;return O.some(function(F){if(F.__N){var b=F.__[0];F.__=F.__N,F.__N=void 0,b!==F.__[0]&&(W=!0)}}),z&&z.call(this,G,q,X)||W};Q0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=Q0;Q0.componentWillUpdate=function(G,q,X){if(this.__e){var O=z;z=void 0,N(G,q,X),z=O}K&&K.call(this,G,q,X)},Q0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=T1(w2++,3);!B0.__s&&I3(j.__H,$)&&(j.__=_,j.u=$,Q0.__H.__h.push(j))}function D(_){return P2=5,a_(function(){return{current:_}},[])}function a_(_,$){var j=T1(w2++,7);return I3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function A(_,$){return P2=8,a_(function(){return _},$)}function x9(){for(var _;_=b3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(n2),$.__h.some(M1),$.__h=[]}catch(j){$.__h=[],B0.__e(j,_.__v)}}}B0.__b=function(_){Q0=null,G3&&G3(_)},B0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),O3&&O3(_,$)},B0.__r=function(_){V3&&V3(_),w2=0;var $=(Q0=_.__c).__H;$&&(y1===Q0?($.__h=[],Q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(n2),$.__h.some(M1),$.__h=[],w2=0)),y1=Q0},B0.diffed=function(_){X3&&X3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(b3.push($)!==1&&W3===B0.requestAnimationFrame||((W3=B0.requestAnimationFrame)||C9)(x9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),y1=Q0=null},B0.__c=function(_,$){$.some(function(j){try{j.__h.some(n2),j.__h=j.__h.filter(function(Z){return!Z.__||M1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],B0.__e(Z,j.__v)}}),q3&&q3(_,$)},B0.unmount=function(_){L3&&L3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{n2(Z)}catch(N){$=N}}),j.__H=void 0,$&&B0.__e($,j.__v))};var B3=typeof requestAnimationFrame=="function";function C9(_){var $,j=function(){clearTimeout(Z),B3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);B3&&($=requestAnimationFrame(j))}function n2(_){var $=Q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),Q0=$}function M1(_){var $=Q0;_.__c=_.__(),Q0=$}function I3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function x3(_,$){return typeof $=="function"?$(_):$}var C3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,C3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},Q3=new Map;function T9(_){var $=Q3.get(this);return $||($=new Map,Q3.set(this,$)),($=C3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",q=[0],X=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,F,K):z===3&&(F||K)?(q.push(3,F,K),z=2):z===2&&K==="..."&&F?q.push(4,F,0):z===2&&K&&!F?q.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(q.push(z,0,K,N),z=6),F&&(q.push(z,F,0,N),z=6)),K=""},O=0;O<j.length;O++){O&&(z===1&&X(),X(O));for(var W=0;W<j[O].length;W++)Z=j[O][W],z===1?Z==="<"?(X(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[O][W+1]===">")?(X(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return X(),q}(_)),$),arguments,[])).length>1?$:$[0]}var Q=T9.bind(D3);var Z$={};J9(Z$,{uploadWorkspaceFile:()=>_1,uploadMedia:()=>p1,updateWorkspaceFile:()=>s9,submitAdaptiveCardAction:()=>c1,streamSidePrompt:()=>l9,steerAgentQueueItem:()=>i9,setWorkspaceVisibility:()=>C2,setAgentThoughtVisibility:()=>l1,sendPeerAgentMessage:()=>g9,sendAgentMessage:()=>L2,searchPosts:()=>f1,respondToAgentRequest:()=>e2,renameWorkspaceFile:()=>a1,renameChatBranch:()=>u9,removeAgentQueueItem:()=>h9,pruneChatBranch:()=>m9,moveWorkspaceEntry:()=>t1,getWorkspaceTree:()=>x2,getWorkspaceRawUrl:()=>$1,getWorkspaceFile:()=>s1,getWorkspaceDownloadUrl:()=>j1,getWorkspaceBranch:()=>d9,getTimeline:()=>M2,getThumbnailUrl:()=>n1,getThread:()=>R1,getPostsByHashtag:()=>S1,getMediaUrl:()=>j$,getMediaText:()=>d1,getMediaInfo:()=>O2,getMediaBlob:()=>n9,getChatBranches:()=>v9,getAgents:()=>m1,getAgentThought:()=>i1,getAgentStatus:()=>g1,getAgentQueueState:()=>c9,getAgentModels:()=>I2,getAgentContext:()=>p9,getActiveChatAgents:()=>u1,forkChatBranch:()=>b2,deleteWorkspaceFile:()=>e1,deletePost:()=>v1,createWorkspaceFile:()=>r1,createReply:()=>R9,createPost:()=>f9,attachWorkspaceFile:()=>o1,addToWhitelist:()=>h1,SSEClient:()=>Z1});async function c_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function T3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function S9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let X of q){let O=T3(X);if(O)$(O.event,O.data)}}N+=Z.decode();let z=T3(N);if(z)$(z.event,z.data)}async function M2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return c_(Z)}async function S1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function f1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return c_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${q}`)}async function R1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return c_(`/thread/${_}${j}`)}async function f9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return c_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function R9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function v1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return c_(N,{method:"DELETE"})}async function L2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return c_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function u1(){return c_("/agent/active-chats")}async function v9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/branches${$}`)}async function b2(_,$={}){return c_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function u9(_,$={}){return c_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function m9(_){return c_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function g9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return c_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function m1(){return c_("/agent/roster")}async function g1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/status${$}`)}async function p9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/context${$}`)}async function c9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/queue-state${$}`)}async function h9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function I2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/models${$}`)}async function p1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function e2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function c1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function l9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await S9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function h1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return c_(j)}async function l1(_,$,j){return c_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function j$(_){return`/media/${_}`}function n1(_){return`/media/${_}/thumbnail`}async function O2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function d1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function n9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function x2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return c_(Z)}async function d9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return c_($)}async function s1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return c_(N)}async function s9(_,$){return c_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function o1(_){return c_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function _1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let q=await G.json().catch(()=>({error:"Upload failed"})),X=Error(q.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=q.code,X}return G.json()}async function r1(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function a1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function t1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function e1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return c_($,{method:"DELETE"})}async function C2(_,$=!1){return c_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function $1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function j1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class Z1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function N$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function _0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function B2(_,$=!1){let j=N$(_);if(j===null)return $;return j==="true"}function Q2(_,$=null){let j=N$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function N1(_){return String(_||"").trim().toLowerCase()}function _4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return N1($[1]||"")}function S3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=N1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function f3(_,$,j={}){let Z=_4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return S3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return N1(z?.agent_name).startsWith(Z)})}function $4(_){let $=N1(_);return $?`@${$} `:""}function R3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return S3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function v3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function O$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,q=`${_}-file-name`,X=`${_}-file-remove`,O=K==="message"?Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return Q`
    <span class=${G} title=${j||$} onClick=${N}>
      ${O}
      <span class=${q}>${$}</span>
      ${Z&&Q`
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
  `}var o9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function r9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${u3(j)} / ${u3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return Q`
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
    `}function u3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function m3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:q=[],onRemoveFileRef:X,onClearFileRefs:O,messageRefs:W=[],onRemoveMessageRef:F,onClearMessageRefs:b,activeModel:m=null,modelUsage:u=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:H=null,notificationsEnabled:x=!1,notificationPermission:I="default",onToggleNotifications:i,onModelChange:n,onModelStateChange:__,activeEditorPath:d=null,onAttachEditorFile:K_,onOpenFilePill:h,followupQueueItems:q_=[],onInjectQueuedFollowup:d_,onRemoveQueuedFollowup:$_,onSubmitIntercept:t,onMessageResponse:N_,onPopOutChat:Z_,isAgentActive:Q_=!1,activeChatAgents:R_=[],currentChatJid:L_="web:default",connectionStatus:I_="connected",onSetFileRefs:U_,onSetMessageRefs:D_,onSubmitError:v_,onSwitchChat:P_,onRenameSession:T_,onCreateSession:$0,onDeleteSession:H0}){let[z_,j_]=S(""),[H_,O_]=S(""),[b_,u_]=S([]),[N0,h_]=S(!1),[C_,A_]=S([]),[i_,s_]=S(0),[z0,E_]=S(!1),[Y0,j0]=S([]),[u0,m0]=S(0),[J0,k_]=S(!1),[l_,o_]=S(!1),[V0,U0]=S(!1),[M_,m_]=S(!1),[g0,w_]=S([]),[X0,p0]=S(!1),[K$,T]=S(0),[r,Y_]=S(null),G_=D(null),S_=D(null),f_=D(null),f0=D(null),y$=D(null),Y$=D(null),R$=D(null),D0=D(null),d0=D(0),E0=200,k0=(B)=>{let M=new Set,C=[];for(let l of B||[]){if(typeof l!=="string")continue;let V_=l.trim();if(!V_||M.has(V_))continue;M.add(V_),C.push(V_)}return C},A$=()=>{let B=N$("piclaw_compose_history");if(!B)return[];try{let M=JSON.parse(B);if(!Array.isArray(M))return[];return k0(M)}catch{return[]}},s0=(B)=>{_0("piclaw_compose_history",JSON.stringify(B))},A0=D(A$()),w$=D(-1),w0=D(""),Y2=z_.trim()||b_.length>0||q.length>0||W.length>0,Z0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),W$=typeof window<"u"&&typeof Notification<"u",Q$=typeof window<"u"?Boolean(window.isSecureContext):!1,x0=W$&&Q$&&I!=="denied",i0=I==="granted"&&x,P$=i0?"Disable notifications":"Enable notifications",U$=b_.length>0||q.length>0||W.length>0,v$=I_==="disconnected"?"Reconnecting":String(I_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(B)=>B.toUpperCase()),r$=I_==="disconnected"?"Reconnecting":`Connection: ${v$}`,q0=R3(R_,{currentChatJid:L_,limit:4}),u$=!j&&v3({footerWidth:K$,visibleAgentCount:q0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),G$=(()=>{let B=new Set,M=[];for(let C of Array.isArray(R_)?R_:[]){let l=typeof C?.chat_jid==="string"?C.chat_jid.trim():"";if(!l||l===L_||B.has(l))continue;if(!(typeof C?.agent_name==="string"?C.agent_name.trim():""))continue;B.add(l),M.push(C)}return M})(),P0=G$.length>0&&typeof P_==="function",M$=!j&&typeof T_==="function",y0=!j&&typeof $0==="function",b$=!j&&typeof H0==="function",V$=!j&&(P0||M$||y0||b$),F$=m||"",m$=E&&R?` (${R})`:"",J2=m$.trim()?`${R}`:"",g_=typeof u?.hint_short==="string"?u.hint_short.trim():"",M0=[J2||null,g_||null].filter(Boolean).join(" • "),C0=[F$?`Current model: ${F$}${m$}`:null,u?.plan?`Plan: ${u.plan}`:null,g_||null,u?.primary?.reset_description||null,u?.secondary?.reset_description||null].filter(Boolean),g$=l_?"Switching model…":C0.join(" • ")||`Current model: ${F$}${m$} (tap to open model picker)`,X$=(B)=>{if(!B||typeof B!=="object")return;let M=B.model??B.current;if(typeof __==="function")__({model:M??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(M&&typeof n==="function")n(M)},H$=(B)=>{let M=B||G_.current;if(!M)return;M.style.height="auto",M.style.height=`${M.scrollHeight}px`,M.style.overflowY="hidden"},J$=(B)=>{if(!B)return{content:B,fileRefs:[]};let C=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let U=0;U<C.length;U+=1)if(C[U].trim()==="Files:"&&C[U+1]&&/^\s*-\s+/.test(C[U+1])){l=U;break}if(l===-1)return{content:B,fileRefs:[]};let V_=[],B_=l+1;for(;B_<C.length;B_+=1){let U=C[B_];if(/^\s*-\s+/.test(U))V_.push(U.replace(/^\s*-\s+/,"").trim());else if(!U.trim())break;else break}if(V_.length===0)return{content:B,fileRefs:[]};let x_=C.slice(0,l),T0=C.slice(B_);return{content:[...x_,...T0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},c0=(B)=>{if(!B)return{content:B,messageRefs:[]};let C=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),l=-1;for(let U=0;U<C.length;U+=1)if(C[U].trim()==="Referenced messages:"&&C[U+1]&&/^\s*-\s+/.test(C[U+1])){l=U;break}if(l===-1)return{content:B,messageRefs:[]};let V_=[],B_=l+1;for(;B_<C.length;B_+=1){let U=C[B_];if(/^\s*-\s+/.test(U)){let k=U.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(k)V_.push(k[1])}else if(!U.trim())break;else break}if(V_.length===0)return{content:B,messageRefs:[]};let x_=C.slice(0,l),T0=C.slice(B_);return{content:[...x_,...T0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},L0=(B)=>{let M=J$(B||""),C=c0(M.content||"");return{text:C.content||"",fileRefs:M.fileRefs,messageRefs:C.messageRefs}},F0=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){E_(!1),A_([]);return}let M=B.toLowerCase().split(" ")[0];if(M.length<1){E_(!1),A_([]);return}let C=o9.filter((l)=>l.name.startsWith(M)||l.name.replace(/-/g,"").startsWith(M.replace(/-/g,"")));if(C.length>0&&!(C.length===1&&C[0].name===M))k_(!1),j0([]),A_(C),s_(0),E_(!0);else E_(!1),A_([])},o0=(B)=>{let M=z_,C=M.indexOf(" "),l=C>=0?M.slice(C):"",V_=B.name+l;j_(V_),E_(!1),A_([]),requestAnimationFrame(()=>{let B_=G_.current;if(!B_)return;let x_=V_.length;B_.selectionStart=x_,B_.selectionEnd=x_,B_.focus()})},D$=(B)=>{if(_4(B)==null){k_(!1),j0([]);return}let M=f3(R_,B,{currentChatJid:L_});if(M.length>0&&!(M.length===1&&$4(M[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))E_(!1),A_([]),j0(M),m0(0),k_(!0);else k_(!1),j0([])},I$=(B)=>{let M=$4(B?.agent_name);if(!M)return;j_(M),k_(!1),j0([]),requestAnimationFrame(()=>{let C=G_.current;if(!C)return;let l=M.length;C.selectionStart=l,C.selectionEnd=l,C.focus()})},E$=(B)=>{if(B?.preventDefault?.(),B?.stopPropagation?.(),j||!P0&&!M$&&!y0&&!b$)return;U0(!1),E_(!1),A_([]),k_(!1),j0([]),m_((M)=>!M)},r0=(B)=>{let M=typeof B==="string"?B.trim():"";if(m_(!1),!M||M===L_){requestAnimationFrame(()=>G_.current?.focus());return}P_?.(M)},p$=(B)=>{let M=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(M&&typeof P_==="function"){P_(M);return}I$(B)},a0=async()=>{if(typeof T_!=="function")return;m_(!1);try{await T_()}catch(B){console.warn("Failed to rename session:",B)}requestAnimationFrame(()=>G_.current?.focus())},b0=async()=>{if(typeof $0!=="function")return;m_(!1);try{await $0()}catch(B){console.warn("Failed to create session:",B)}requestAnimationFrame(()=>G_.current?.focus())},k$=async()=>{if(typeof H0!=="function")return;m_(!1);try{await H0()}catch(B){console.warn("Failed to delete session:",B)}requestAnimationFrame(()=>G_.current?.focus())},q$=(B)=>{if(j)O_(B);else j_(B),F0(B),D$(B);requestAnimationFrame(()=>H$())},c$=(B)=>{let M=j?H_:z_,C=M&&!M.endsWith(`
`)?`
`:"",l=`${M}${C}${B}`.trimStart();q$(l)},x$=(B)=>{let M=B?.command?.model_label;if(M)return M;let C=B?.command?.message;if(typeof C==="string"){let l=C.match(/•\s+([^\n]+?)\s+\(current\)/);if(l?.[1])return l[1].trim()}return null},C$=async(B)=>{if(j||l_)return;o_(!0);try{let M=await L2("default",B,null,[],null,L_),C=x$(M);X$({model:C??m??null,thinking_level:M?.command?.thinking_level,supports_thinking:M?.command?.supports_thinking});try{let l=await I2(L_);if(l)X$(l)}catch{}return _?.(),!0}catch(M){return console.error("Failed to switch model:",M),alert("Failed to switch model: "+M.message),!1}finally{o_(!1)}},h$=async()=>{await C$("/cycle-model")},a$=async(B)=>{if(!B||l_)return;if(await C$(`/model ${B}`))U0(!1)},i$=(B)=>{B.preventDefault(),B.stopPropagation(),m_(!1),U0((M)=>!M)},t$=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return Q_?"queue":null},L$=async(B,M,C={})=>{let{includeMedia:l=!0,includeFileRefs:V_=!0,includeMessageRefs:B_=!0,clearAfterSubmit:x_=!0,recordHistory:T0=!0}=C||{},L=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:z_,U=typeof L==="string"?L:"";if(!U.trim()&&(l?b_.length===0:!0)&&(V_?q.length===0:!0)&&(B_?W.length===0:!0))return;E_(!1),A_([]),k_(!1),j0([]),m_(!1),Y_(null);let k=l?[...b_]:[],y=V_?[...q]:[],p=B_?[...W]:[],s=U.trim();if(T0&&s){let o=A0.current,f=k0(o.filter((W_)=>W_!==s));if(f.push(s),f.length>200)f.splice(0,f.length-200);A0.current=f,s0(f),w$.current=-1,w0.current=""}let a=()=>{if(l)u_([...k]);if(V_)U_?.(y);if(B_)D_?.(p);j_(s),requestAnimationFrame(()=>H$())};if(x_)j_(""),u_([]),O?.(),b?.();(async()=>{try{if(await t?.({content:s,submitMode:M,fileRefs:y,messageRefs:p,mediaFiles:k})){_?.();return}let f=[];for(let e0 of k){let d$=await p1(e0);f.push(d$.id)}let W_=y.length?`Files:
${y.map((e0)=>`- ${e0}`).join(`
`)}`:"",O0=p.length?`Referenced messages:
${p.map((e0)=>`- message:${e0}`).join(`
`)}`:"",t0=f.length?`Images:
${f.map((e0,d$)=>{let V2=k[d$]?.name||`attachment-${d$+1}`;return`- attachment:${e0} (${V2})`}).join(`
`)}`:"",K0=[s,W_,O0,t0].filter(Boolean).join(`

`),W0=await L2("default",K0,null,f,t$(M),L_);if(N_?.(W0),W0?.command){X$({model:W0.command.model_label??m??null,thinking_level:W0.command.thinking_level,supports_thinking:W0.command.supports_thinking});try{let e0=await I2(L_);if(e0)X$(e0)}catch{}}_?.()}catch(o){if(x_)a();let f=o?.message||"Failed to send message.";Y_(f),v_?.(f),console.error("Failed to post:",o)}})()},y_=(B)=>{d_?.(B)},W2=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),O_(""),G?.();return}if(!j&&M_&&B.key==="Escape"){B.preventDefault(),m_(!1);return}if(J0&&Y0.length>0){let M=G_.current?.value??(j?H_:z_);if(!String(M||"").match(/^@([a-zA-Z0-9_-]*)$/))k_(!1),j0([]);else{if(B.key==="ArrowDown"){B.preventDefault(),m0((C)=>(C+1)%Y0.length);return}if(B.key==="ArrowUp"){B.preventDefault(),m0((C)=>(C-1+Y0.length)%Y0.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),I$(Y0[u0]);return}if(B.key==="Escape"){B.preventDefault(),k_(!1),j0([]);return}}}if(z0&&C_.length>0){let M=G_.current?.value??(j?H_:z_);if(!String(M||"").startsWith("/"))E_(!1),A_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),s_((C)=>(C+1)%C_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),s_((C)=>(C-1+C_.length)%C_.length);return}if(B.key==="Tab"){B.preventDefault(),o0(C_[i_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(G_.current?.value??(j?H_:z_)).includes(" ")){B.preventDefault();let V_=C_[i_];E_(!1),A_([]),L$(V_.name);return}}if(B.key==="Escape"){B.preventDefault(),E_(!1),A_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let M=G_.current;if(!M)return;let C=M.value||"",l=M.selectionStart===0&&M.selectionEnd===0,V_=M.selectionStart===C.length&&M.selectionEnd===C.length;if(B.key==="ArrowUp"&&l||B.key==="ArrowDown"&&V_){let B_=A0.current;if(!B_.length)return;B.preventDefault();let x_=w$.current;if(B.key==="ArrowUp"){if(x_===-1)w0.current=C,x_=B_.length-1;else if(x_>0)x_-=1;w$.current=x_,q$(B_[x_]||"")}else{if(x_===-1)return;if(x_<B_.length-1)x_+=1,w$.current=x_,q$(B_[x_]||"");else w$.current=-1,q$(w0.current||""),w0.current=""}requestAnimationFrame(()=>{let T0=G_.current;if(!T0)return;let L=T0.value.length;T0.selectionStart=L,T0.selectionEnd=L});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let M=G_.current?.value??(j?H_:z_);if(j){if(M.trim())N?.(M.trim(),Z)}else L$(M,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let M=G_.current?.value??(j?H_:z_);if(j){if(M.trim())N?.(M.trim(),Z)}else L$(M)}},e$=(B)=>{let M=Array.from(B||[]).filter((C)=>C&&C.type&&C.type.startsWith("image/"));if(!M.length)return;u_((C)=>[...C,...M]),Y_(null)},l$=(B)=>{e$(B.target.files),B.target.value=""},_2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),d0.current+=1,h_(!0)},D2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),d0.current=Math.max(0,d0.current-1),d0.current===0)h_(!1)},E2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";h_(!0)},$2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),d0.current=0,h_(!1),e$(B.dataTransfer?.files||[])},k2=(B)=>{if(j)return;let M=B.clipboardData?.items;if(!M||!M.length)return;let C=[];for(let l of M){if(l.kind!=="file")continue;let V_=l.getAsFile?.();if(V_)C.push(V_)}if(C.length>0)B.preventDefault(),e$(C)},l0=(B)=>{u_((M)=>M.filter((C,l)=>l!==B))},h0=()=>{Y_(null),u_([]),O?.(),b?.()},n$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:M,longitude:C,accuracy:l}=B.coords,V_=`${M.toFixed(5)}, ${C.toFixed(5)}`,B_=Number.isFinite(l)?` ±${Math.round(l)}m`:"",x_=`https://maps.google.com/?q=${M},${C}`,T0=`Location: ${V_}${B_} ${x_}`;c$(T0)},(B)=>{let M=B?.message||"Unable to retrieve location.";alert(`Location error: ${M}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!V0)return;p0(!0),I2(L_).then((B)=>{let M=Array.isArray(B?.models)?B.models.filter((C)=>typeof C==="string"&&C.trim().length>0):[];M.sort((C,l)=>C.localeCompare(l,void 0,{sensitivity:"base"})),w_(M),X$(B)}).catch((B)=>{console.warn("Failed to load model list:",B),w_([])}).finally(()=>{p0(!1)})},[V0,m]),v(()=>{if(j)U0(!1),m_(!1),E_(!1),A_([]),k_(!1),j0([])},[j]),v(()=>{if(M_&&!V$)m_(!1)},[M_,V$]),v(()=>{if(!V0)return;let B=(M)=>{let C=f0.current,l=y$.current,V_=M.target;if(C&&C.contains(V_))return;if(l&&l.contains(V_))return;U0(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[V0]),v(()=>{if(!M_)return;let B=(M)=>{let C=Y$.current,l=R$.current,V_=M.target;if(C&&C.contains(V_))return;if(l&&l.contains(V_))return;m_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[M_]),v(()=>{let B=()=>{let B_=D0.current?.clientWidth||0;T((x_)=>x_===B_?x_:B_)};B();let M=D0.current,C=0,l=()=>{if(C)cancelAnimationFrame(C);C=requestAnimationFrame(()=>{C=0,B()})},V_=null;if(M&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>l()),V_.observe(M);if(typeof window<"u")window.addEventListener("resize",l);return()=>{if(C)cancelAnimationFrame(C);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",l)}},[j,m,q0.length,H?.percent]);let G2=(B)=>{let M=B.target.value;if(Y_(null),M_)m_(!1);H$(B.target),q$(M)};return v(()=>{requestAnimationFrame(()=>H$())},[z_,H_,j]),v(()=>{if(j)return;D$(z_)},[R_,L_,z_,j]),Q`
        <div class="compose-box">
            ${!j&&q_.length>0&&Q`
                <div class="compose-queue-stack">
                    ${q_.map((B)=>{let M=typeof B?.content==="string"?B.content:"",C=L0(M);if(!C.text.trim()&&C.fileRefs.length===0&&C.messageRefs.length===0)return null;return Q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${M}>
                                    ${C.text.trim()&&Q`
                                        <div class="compose-queue-stack-text">${C.text}</div>
                                    `}
                                    ${(C.messageRefs.length>0||C.fileRefs.length>0)&&Q`
                                        <div class="compose-queue-stack-refs">
                                            ${C.messageRefs.map((l)=>Q`
                                                <${O$}
                                                    key=${"queue-msg-"+l}
                                                    prefix="compose"
                                                    label=${"msg:"+l}
                                                    title=${"Message reference: "+l}
                                                    icon="message"
                                                />
                                            `)}
                                            ${C.fileRefs.map((l)=>{let V_=l.split("/").pop()||l;return Q`
                                                    <${O$}
                                                        key=${"queue-file-"+l}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${l}
                                                        onClick=${()=>h?.(l)}
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
                                        onClick=${()=>y_(B)}
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
                                        onClick=${()=>$_?.(B)}
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
                class=${`compose-input-wrapper${N0?" drag-active":""}`}
                onDragEnter=${_2}
                onDragOver=${E2}
                onDragLeave=${D2}
                onDrop=${$2}
            >
                <div class="compose-input-main">
                    ${r&&!U$&&Q`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${r}</div>
                    `}
                    ${U$&&Q`
                        <div class="compose-file-refs">
                            ${r&&Q`
                                <div class="compose-submit-error" role="status" aria-live="polite">${r}</div>
                            `}
                            ${W.map((B)=>{return Q`
                                    <${O$}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(B)}
                                    />
                                `})}
                            ${q.map((B)=>{let M=B.split("/").pop()||B;return Q`
                                    <${O$}
                                        prefix="compose"
                                        label=${M}
                                        title=${B}
                                        onClick=${()=>h?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(B)}
                                    />
                                `})}
                            ${b_.map((B,M)=>{let C=B?.name||`attachment-${M+1}`;return Q`
                                    <${O$}
                                        key=${C+M}
                                        prefix="compose"
                                        label=${C}
                                        title=${C}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>l0(M)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${h0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Z_==="function"&&Q`
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
                        ref=${G_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?H_:z_}
                        onInput=${G2}
                        onKeyDown=${W2}
                        onPaste=${k2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${J0&&Y0.length>0&&Q`
                        <div class="slash-autocomplete" ref=${f_}>
                            ${Y0.map((B,M)=>Q`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${M===u0?" active":""}`}
                                    onMouseDown=${(C)=>{C.preventDefault(),I$(B)}}
                                    onMouseEnter=${()=>m0(M)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.display_name||B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${z0&&C_.length>0&&Q`
                        <div class="slash-autocomplete" ref=${S_}>
                            ${C_.map((B,M)=>Q`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${M===i_?" active":""}`}
                                    onMouseDown=${(C)=>{C.preventDefault(),o0(B)}}
                                    onMouseEnter=${()=>s_(M)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${V0&&!j&&Q`
                        <div class="compose-model-popup" ref=${f0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${X0&&Q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!X0&&g0.length===0&&Q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!X0&&g0.map((B)=>Q`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===B?" active":""}`}
                                        onClick=${()=>{a$(B)}}
                                        disabled=${l_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{h$()}}
                                    disabled=${l_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${M_&&!j&&Q`
                        <div class="compose-model-popup" ref=${Y$}>
                            <div class="compose-model-popup-title">Switch active session</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Active sessions">
                                ${!P0&&Q`
                                    <div class="compose-model-popup-empty">No other active sessions.</div>
                                `}
                                ${P0&&G$.map((B)=>Q`
                                    <button
                                        key=${B.chat_jid}
                                        type="button"
                                        role="menuitem"
                                        class="compose-model-popup-item"
                                        onClick=${()=>r0(B.chat_jid)}
                                    >
                                        ${`@${B.agent_name}${B.display_name?` — ${B.display_name}`:""}${B.is_active?" • active":""}`}
                                    </button>
                                `)}
                            </div>
                            ${(y0||M$||b$)&&Q`
                                <div class="compose-model-popup-actions">
                                    ${y0&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{b0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${M$&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{a0()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${b$&&Q`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{k$()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${D0}>
                    ${!j&&m&&Q`
                    <div class="compose-meta-row">
                        ${!j&&m&&Q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${y$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g$}
                                    aria-label="Open model picker"
                                    onClick=${i$}
                                    disabled=${l_}
                                >
                                    ${l_?"Switching…":F$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!l_&&M0&&Q`
                                        <span class="compose-model-usage-hint" title=${g$}>
                                            ${M0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${u$&&Q`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${q0.map((B)=>Q`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>p$(B)}
                                    title=${`${B.display_name||B.chat_jid||"Active agent"} — switch to @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&Q`
                        <${r9} usage=${H} />
                    `}
                    ${V$&&Q`
                        <button
                            ref=${R$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${M_?" active":""}`}
                            onClick=${E$}
                            title=${M_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${M_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&Q`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(B)=>z?.(B.currentTarget.value)}
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
                        ${j?Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${Z0&&!j&&Q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${n$}
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
                    ${x0&&!j&&Q`
                        <button
                            class=${`icon-btn notification-btn${i0?" active":""}`}
                            onClick=${i}
                            title=${P$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&Q`
                        ${d&&K_&&Q`
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
                            <input type="file" accept="image/*" multiple hidden onChange=${l$} />
                        </label>
                    `}
                    ${(I_!=="connected"||!j)&&Q`
                        <div class="compose-send-stack">
                            ${I_!=="connected"&&Q`
                                <span class="compose-connection-status connection-status ${I_}" title=${r$}>
                                    ${v$}
                                </span>
                            `}
                            ${!j&&Q`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{L$()}}
                                    disabled=${!Y2}
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
    `}var c3="piclaw_theme",N4="piclaw_tint",S2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},h3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},g3={default:{label:"Default",mode:"auto",light:S2,dark:h3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},a9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],Z2={theme:"default",tint:null},i3="light",j4=!1;function z4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function F2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function t9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((X)=>Number.isFinite(X)))return null;let q=`#${[z,K,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:q}}function l3(_){return F2(_)||t9(_)}function T2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function Z4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function e9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function _7(_){return e9(_)>0.4?"#000000":"#ffffff"}function n3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function K4(_){return g3[_]||g3.default}function $7(_){return _.mode==="auto"?n3():_.mode}function d3(_,$){let j=K4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||S2}function s3(_,$,j){let Z=l3($);if(!Z)return _;let N=F2(_.bgPrimary),z=F2(_.bgSecondary),K=F2(_.bgHover),G=F2(_.borderColor);if(!N||!z||!K||!G)return _;let X=F2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:T2(N,Z,0.08),bgSecondary:T2(z,Z,0.12),bgHover:T2(K,Z,0.16),borderColor:T2(G,Z,0.08),accent:Z.hex,accentHover:X?T2(Z,X,0.18):Z.hex}}function j7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=l3(Z),z=N?Z4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?Z4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?Z4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?_7(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":q,"--danger-color":_.danger||S2.danger,"--success-color":_.success||S2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,W])=>{if(W)j.style.setProperty(O,W)})}function Z7(){if(typeof document>"u")return;let _=document.documentElement;a9.forEach(($)=>_.style.removeProperty($))}function U2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function p3(_){let $=z4(Z2?.theme||"default"),j=Z2?.tint?String(Z2.tint).trim():null,Z=d3($,_);if($==="default"&&j)Z=s3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?h3.bgPrimary:S2.bgPrimary}function N7(_,$){if(typeof document>"u")return;let j=U2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=U2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",p3("light"));let N=U2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",p3("dark"));let z=U2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=U2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let G=U2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function z7(){if(typeof window>"u")return;let _={...Z2,mode:i3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Y4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=z4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=K4(j),z=$7(N),K=d3(j,z);Z2={theme:j,tint:Z},i3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=s3(K,Z,z);if(j==="default"&&!Z)Z7();else j7(q,z);if(N7(q.bgPrimary,z),z7(),$.persist!==!1)if(_0(c3,j),Z)_0(N4,Z);else _0(N4,"")}function z1(){if(K4(Z2.theme).mode!=="auto")return;Y4(Z2,{persist:!1})}function o3(){if(typeof window>"u")return()=>{};let _=z4(N$(c3)||"default"),$=N$(N4),j=$?$.trim():null;if(Y4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!j4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",z1);else if(Z.addListener)Z.addListener(z1);return j4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",z1);else if(Z.removeListener)Z.removeListener(z1);j4=!1}}return()=>{}}function r3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;Y4({theme:j||"default",tint:Z},{persist:!0})}function a3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return n3()}var K1=/#(\w+)/g,K7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Y7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),W7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),G7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},V7=new Set(["http:","https:","mailto:",""]);function W4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function N2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!V7.has(Z.protocol))return null;return Z.href}catch{return null}}function t3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!Y7.has(G)){let X=K.parentNode;if(!X)continue;while(K.firstChild)X.insertBefore(K.firstChild,K);X.removeChild(K);continue}let q=G7[G]||new Set;for(let X of Array.from(K.attributes)){let O=X.name.toLowerCase(),W=X.value;if(O.startsWith("on")){K.removeAttribute(X.name);continue}if(O.startsWith("data-")||O.startsWith("aria-"))continue;if(q.has(O)||W7.has(O)){if(O==="href"){let F=N2(W);if(!F)K.removeAttribute(X.name);else if(K.setAttribute(X.name,F),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(O==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,b=N2(F,{allowDataImage:G==="img"});if(!b)K.removeAttribute(X.name);else K.setAttribute(X.name,b)}continue}K.removeAttribute(X.name)}}return j.body.innerHTML}function e3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Y1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=e3(j);if(N===j)break;j=N}return j}function X7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function q7(_){if(!_)return _;return Y1(_,5)}function L7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function O7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function B7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=q7(z);return`<div class="mermaid-container" data-mermaid="${L7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function _6(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var Q7={span:new Set(["title","class","lang","dir"])};function U7(_,$){let j=Q7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let G=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${W4(G)}"`)}return Z.join("")}function $6(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,G=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=G.split(/\s+/,1),X=q.toLowerCase();if(!X||!K7.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;let O=G.slice(q.length).trim(),W=U7(X,O);return`<${X}${W}>`})}function j6(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function Z6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function F7(_){if(!window.katex)return _;let $=(K)=>e3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_BLOCK_${O}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let O=G.length;return G.push(X),`@@CODE_INLINE_${O}@@`}),{html:q,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,X)=>{let O=Number(X);return G[O]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,q)=>{try{let X=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${W4(X.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,q)=>{if(/\s$/.test(q))return K;try{let X=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${W4(X.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function H7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(K1.lastIndex=0,!K1.test(K))continue;K1.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let q=K.split(K1);if(q.length<=1)continue;let X=$.createDocumentFragment();q.forEach((O,W)=>{if(W%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",O),F.textContent=`#${O}`,X.appendChild(F)}else X.appendChild($.createTextNode(O))}),z.parentNode?.replaceChild(X,z)}return $.body.innerHTML}function J7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function n0(_,$,j={}){if(!_)return"";let Z=J7(_),{text:N,blocks:z}=X7(Z),K=Y1(N,2),q=_6(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=$6(q),O=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return O=j6(O),O=Z6(O),O=F7(O),O=H7(O),O=B7(O,z),O=t3(O,j),O}function W1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Y1($,2),N=_6(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=$6(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=j6(K),K=Z6(K),K=t3(K),K}function D7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((q)=>{let[X,O]=q.split(",").map(Number);return{x:X,y:O}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let G=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let X=K[q-1],O=K[q],W=K[q+1],F=O.x-X.x,b=O.y-X.y,m=W.x-O.x,u=W.y-O.y,R=Math.sqrt(F*F+b*b),E=Math.sqrt(m*m+u*u),H=Math.min($,R/2,E/2);if(H<0.5){G.push(`L ${O.x},${O.y}`);continue}let x=O.x-F/R*H,I=O.y-b/R*H,i=O.x+m/E*H,n=O.y+u/E*H,d=F*u-b*m>0?1:0;G.push(`L ${x},${I}`),G.push(`A ${H},${H} 0 0 ${d} ${i},${n}`)}return G.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${G.join(" ")}"${z}/>`})}async function S$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=a3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,q=O7(G||""),X=Y1(q,2),O=await $(X,{...N,transparent:!0});O=D7(O),K.innerHTML=O,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function N6(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function z6(_){return String(_||"").trim()||"web:default"}function K6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Y6(_){if(!_)return!1;return _.status!=="running"}function W6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function G6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?W1(_.thinking):"",G=_?.answer?n0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&K)S$(N.current).catch(()=>{})},[K]),v(()=>{if(z.current&&G)S$(z.current).catch(()=>{})},[G]),!_)return null;let q=_.status==="running",X=Boolean(String(_.answer||"").trim()),O=Boolean(String(_.thinking||"").trim()),W=K6(_),F=Y6(_),b=!q&&X,m=q?"Thinking…":_.status==="error"?"Error":"Done";return Q`
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

            ${_.question&&Q`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&Q`<div class="btw-block btw-error">${_.error}</div>`}
            ${O&&Q`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${W&&Q`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${F&&Q`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&Q`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!b}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var V6="PiClaw";function G4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],q=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",O=X?X:null,W=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:G,image:O||(W?"/static/icon-192.png":null)}}function X6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function q6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function L6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(G||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function E7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function f2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function O6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return f2(_)?"Compacting context":"Working..."}function k7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function B6(_,$=Date.now()){let j=E7(_);if(j===null)return null;return k7(Math.max(0,$-j))}function Q6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:q}){let W=(j_)=>{if(!j_)return{text:"",totalLines:0,fullText:""};if(typeof j_==="string"){let u_=j_,N0=u_?u_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:u_,totalLines:N0,fullText:u_}}let H_=j_.text||"",O_=j_.fullText||j_.full_text||H_,b_=Number.isFinite(j_.totalLines)?j_.totalLines:O_?O_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:b_,fullText:O_}},F=160,b=(j_)=>String(j_||"").replace(/<\/?internal>/gi,""),m=(j_)=>{if(!j_)return 1;return Math.max(1,Math.ceil(j_.length/160))},u=(j_,H_,O_)=>{let b_=(j_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!b_)return{text:"",omitted:0,totalLines:Number.isFinite(O_)?O_:0,visibleLines:0};let u_=b_.split(`
`),N0=u_.length>H_?u_.slice(0,H_).join(`
`):b_,h_=Number.isFinite(O_)?O_:u_.reduce((i_,s_)=>i_+m(s_),0),C_=N0?N0.split(`
`).reduce((i_,s_)=>i_+m(s_),0):0,A_=Math.max(h_-C_,0);return{text:N0,omitted:A_,totalLines:h_,visibleLines:C_}},R=W(j),E=W(Z),H=W($),x=Boolean(R.text)||R.totalLines>0,I=Boolean(E.text)||E.totalLines>0,i=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!i&&!x&&!I&&!N&&!z)return null;let[n,__]=S(new Set),[d,K_]=S(()=>Date.now()),h=(j_)=>__((H_)=>{let O_=new Set(H_),b_=!O_.has(j_);if(b_)O_.add(j_);else O_.delete(j_);if(typeof q==="function")q(j_,b_);return O_});v(()=>{__(new Set)},[K]);let q_=f2(_);v(()=>{if(!q_)return;K_(Date.now());let j_=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(j_)},[q_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||K,$_=L6(d_),t=G?"turn-dot turn-dot-queued":"turn-dot",N_=(j_)=>j_,Z_=Boolean(_?.last_activity||_?.lastActivity),Q_=(j_)=>j_==="warning"?"#f59e0b":j_==="error"?"var(--danger-color)":j_==="success"?"var(--success-color)":$_,R_=z?.kind||"info",L_=Q_(R_),I_=Q_(_?.kind||(q_?"warning":"info")),U_="",D_=_?.title,v_=_?.status;if(_?.type==="plan")U_=D_?`Planning: ${D_}`:"Planning...";else if(_?.type==="tool_call")U_=D_?`Running: ${D_}`:"Running tool...";else if(_?.type==="tool_status")U_=D_?`${D_}: ${v_||"Working..."}`:v_||"Working...";else if(_?.type==="error")U_=D_||"Agent error";else U_=D_||v_||"Working...";if(Z_)U_="Last activity just now";let P_=({panelTitle:j_,text:H_,fullText:O_,totalLines:b_,maxLines:u_,titleClass:N0,panelKey:h_})=>{let C_=n.has(h_),A_=O_||H_||"",i_=h_==="thought"||h_==="draft"?b(A_):A_,s_=typeof u_==="number",z0=C_&&s_,E_=s_?u(i_,u_,b_):{text:i_||"",omitted:0,totalLines:Number.isFinite(b_)?b_:0};if(!i_&&!(Number.isFinite(E_.totalLines)&&E_.totalLines>0))return null;let Y0=`agent-thinking-body${s_?" agent-thinking-body-collapsible":""}`,j0=s_?`--agent-thinking-collapsed-lines: ${u_};`:"";return Q`
            <div
                class="agent-thinking"
                data-expanded=${C_?"true":"false"}
                data-collapsible=${s_?"true":"false"}
                style=${$_?`--turn-color: ${$_};`:""}
            >
                <div class="agent-thinking-title ${N0||""}">
                    ${$_&&Q`<span class=${t} aria-hidden="true"></span>`}
                    ${j_}
                    ${z0&&Q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${j_} panel`}
                            onClick=${()=>h(h_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Y0}
                    style=${j0}
                    dangerouslySetInnerHTML=${{__html:W1(i_)}}
                />
                ${!C_&&E_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>h(h_)}>
                        ▸ ${E_.omitted} more lines
                    </button>
                `}
                ${C_&&E_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>h(h_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},T_=N?.tool_call?.title,$0=T_?`Awaiting approval: ${T_}`:"Awaiting approval",H0=q_?B6(_,d):null,z_=(j_,H_,O_=null)=>{let b_=O6(j_);return Q`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${H_?`--turn-color: ${H_};`:""}
                title=${j_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${H_&&Q`<span class=${t} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${b_}</span>
                    ${O_&&Q`<span class="agent-status-elapsed">${O_}</span>`}
                </div>
                ${j_.detail&&Q`<div class="agent-thinking-body">${j_.detail}</div>`}
            </div>
        `};return Q`
        <div class="agent-status-panel">
            ${z&&z_(z,L_)}
            ${_?.type==="intent"&&z_(_,I_,H0)}
            ${N&&Q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${$_?`--turn-color: ${$_};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${$0}</span>
                </div>
            `}
            ${x&&P_({panelTitle:N_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${I&&P_({panelTitle:N_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&P_({panelTitle:N_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&Q`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${$_?`--turn-color: ${$_};`:""}>
                    ${$_&&Q`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?Q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&Q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function U6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",q=Z?.rawInput||{},X=q.command||q.commands&&q.commands[0]||null,O=q.diff||null,W=q.fileName||q.path||null,F=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((x)=>x?.path).filter((x)=>Boolean(x)),u=Array.from(new Set([W,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(x)=>{try{await e2(j,x,z||null),$()}catch(I){console.error("Failed to respond to agent request:",I)}},E=async()=>{try{await h1(K,`Auto-approved: ${K}`),await e2(j,"approved",z||null),$()}catch(x){console.error("Failed to add to whitelist:",x)}},H=N&&N.length>0;return Q`
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
                ${(F||X||O||u.length>0)&&Q`
                    <div class="agent-request-body">
                        ${F&&Q`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${u.length>0&&Q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${u.map((x,I)=>Q`<li key=${I}>${x}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&Q`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${O&&Q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((x)=>Q`
                            <button 
                                key=${x.optionId||x.id||String(x)}
                                class="agent-request-btn ${x.kind==="allow_once"||x.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(x.optionId||x.id||x)}
                            >
                                ${x.name||x.label||x.optionId||x.id||String(x)}
                            </button>
                        `):Q`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function F6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function R2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function z$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function z2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),A7=new Set(["text/markdown"]),w7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),P7=new Set(["application/vnd.jgraph.mxfile"]);function v2(_){return typeof _==="string"?_.trim().toLowerCase():""}function M7(_){let $=v2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function b7(_){let $=v2(_);return!!$&&$.endsWith(".pdf")}function I7(_){let $=v2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function u2(_,$){let j=v2(_);if(M7($)||P7.has(j))return"drawio";if(b7($)||j==="application/pdf")return"pdf";if(I7($)||w7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(y7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function H6(_){let $=v2(_);return A7.has($)}function J6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function x7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function C7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function D6(_){return x7(_)||C7(_)}function G1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function T7(_,$){let j=Math.max(G1(_),G1($)),Z=Math.min(G1(_),G1($));return(j+0.05)/(Z+0.05)}function S7(_,$,j="#ffffff"){let Z=D6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=D6(K);if(!G)continue;let q=T7(Z,G);if(q>z)N=K,z=q}return N}function V4(){let _=getComputedStyle(document.documentElement),$=(m,u)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return u},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),O=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),b=S7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:q,warning:X,attention:O,border:W,fontFamily:F,buttonTextColor:b}}function E6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:q,fontFamily:X}=V4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var f7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),k6=!1,V1=null,y6=!1;function X4(_){_.querySelector(".adaptive-card-notice")?.remove()}function R7(_,$,j="error"){X4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function v7(_,$=(j)=>n0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function u7(_=($)=>n0($,null)){return($,j)=>{try{let Z=v7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function m7(_){if(y6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=u7(),y6=!0}async function g7(){if(k6)return;if(V1)return V1;return V1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{k6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),V1}function p7(){return globalThis.AdaptiveCards}function c7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function h7(_){return f7.has(_)}function L4(_){if(!Array.isArray(_))return[];return _.filter(c7)}function i7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function q4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>q4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${q4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function l7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return q4($);return typeof $==="string"?$:String($)}function n7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=l7(K.type,j[K.id],K);for(let[G,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[G]=Z(q);return K};return Z(_)}function d7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function s7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function o7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=s7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function A6(_,$,j){if(!h7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await g7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=p7();m7(Z);let N=new Z.AdaptiveCard,z=V4();N.hostConfig=new Z.HostConfig(E6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:n7($.payload,K);N.parse(G),N.onExecuteAction=(O)=>{let W=i7(O);if(j?.onAction)X4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let b=F instanceof Error?F.message:String(F||"Action failed.");R7(_,b||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let X=o7($);if(X){_.classList.add("adaptive-card-finished");let O=document.createElement("div");O.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=X.label,O.appendChild(W),X.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=X.detail,O.appendChild(F)}_.appendChild(O)}if(X4(_),_.appendChild(q),X)d7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function m2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>m2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${m2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function w6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:m2(j)})).filter(($)=>$.value)}function r7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function O4(_){if(!Array.isArray(_))return[];return _.filter(r7)}function P6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=m2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=w6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function M6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=w6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:X})=>`${q}: ${X}`).join(", "):m2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),G=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:G,submittedAt:_.submitted_at}}function a7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?z$($):null},{label:"Added",value:_?.created_at?z2(_.created_at):null}].filter((Z)=>Z.value)}function t7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=j$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function b6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=a_(()=>u2($?.content_type,Z),[$?.content_type,Z]),z=J6(N),K=a_(()=>H6($?.content_type),[$?.content_type]),[G,q]=S(N==="text"),[X,O]=S(""),[W,F]=S(null),b=D(null),m=a_(()=>a7($),[$]),u=a_(()=>t7(_,Z,N),[_,Z,N]),R=a_(()=>{if(!K||!X)return"";return n0(X)},[K,X]);return v(()=>{let E=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),v(()=>{if(!b.current||!R)return;S$(b.current);return},[R]),v(()=>{let E=!1;async function H(){if(N!=="text"){q(!1),F(null);return}q(!0),F(null);try{let x=await d1(_);if(!E)O(x)}catch{if(!E)F("Failed to load text preview.")}finally{if(!E)q(!1)}}return H(),()=>{E=!0}},[_,N]),Q`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${u&&Q`
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
                            href=${j$(_)}
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
                    ${G&&Q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&W&&Q`<div class="attachment-preview-state">${W}</div>`}
                    ${!G&&!W&&N==="image"&&Q`
                        <img class="attachment-preview-image" src=${j$(_)} alt=${Z} />
                    `}
                    ${!G&&!W&&(N==="pdf"||N==="office"||N==="drawio")&&u&&Q`
                        <iframe class="attachment-preview-frame" src=${u} title=${Z}></iframe>
                    `}
                    ${!G&&!W&&N==="drawio"&&Q`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!W&&N==="text"&&K&&Q`
                        <div
                            ref=${b}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!G&&!W&&N==="text"&&!K&&Q`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!G&&!W&&N==="unsupported"&&Q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>Q`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function I6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),Q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function e7({mediaId:_,onPreview:$}){let[j,Z]=S(null);if(v(()=>{O2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?z$(z):"",q=u2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return Q`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
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
                        ${K&&Q`<span class="file-size">${K}</span>`}
                        ${j.content_type&&Q`<span class="file-size">${j.content_type}</span>`}
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
    `}function _5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=S(null);v(()=>{if(!Number.isFinite(j))return;O2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?j$(j):null,q=u2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return Q`
        <span class="attachment-pill" title=${z}>
            ${K?Q`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${O$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:Q`
                    <${O$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&Q`
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
    `}function X1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?z2(Z):null;return Q`
        <div class="content-annotations">
            ${$&&$.length>0&&Q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&Q`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&Q`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function $5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?z$(_.size):"",N=_.mime_type||"",z=Z5(N),K=N2(_.uri);return Q`
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
                ${j&&Q`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&Q`<span>${N}</span>`}
                    ${Z&&Q`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function j5({block:_}){let[$,j]=S(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return Q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&Q`
                ${N&&Q`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&Q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&Q`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:K||"application/octet-stream"}),X=URL.createObjectURL(q),O=document.createElement("a");O.href=X,O.download=Z.split("/").pop()||"resource",O.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Z5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function N5({preview:_}){let $=N2(_.url),j=N2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return Q`
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
                ${_.description&&Q`
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
    </svg>`;async function V5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function X5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=W5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=G5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Y5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let q=async(X)=>{X.preventDefault(),X.stopPropagation();let W=z.querySelector("code")?.textContent||"",F=await V5(W);N(G,F?"success":"error");let b=j.get(G);if(b)clearTimeout(b);let m=setTimeout(()=>{N(G,"idle"),j.delete(G)},K5);j.set(G,m)};G.addEventListener("click",q),Z.push(()=>{G.removeEventListener("click",q);let X=j.get(G);if(X)clearTimeout(X);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function q5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
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
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Images:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let X=j[z];if(/^\s*-\s+/.test(X)){let O=X.replace(/^\s*-\s+/,"").trim(),W=O.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||O.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let F=W[1],b=(W[2]||"").trim()||F;N.push({id:F,label:b,raw:O})}else N.push({id:null,label:O,raw:O})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function B5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(B5).sort((O,W)=>W.length-O.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],X;while(X=G.nextNode())q.push(X);for(let O of q){let W=O.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let F=O.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let b=W.split(N).filter((u)=>u!=="");if(b.length===0)continue;let m=K.createDocumentFragment();for(let u of b)if(z.test(u)){let R=K.createElement("mark");R.className="search-highlight-term",R.textContent=u,m.appendChild(R)}else m.appendChild(K.createTextNode(u));O.parentNode.replaceChild(m,O)}return K.body.innerHTML}function x6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:q,userAvatarBackground:X,onDelete:O,isThreadReply:W,isThreadPrev:F,isThreadNext:b,isRemoving:m,highlightQuery:u,onFileRef:R}){let[E,H]=S(null),[x,I]=S(()=>new Set),i=D(null),n=_.data,__=n.type==="agent_response",d=G||"You",K_=__?z||V6:d,h=__?G4(z,K,!0):G4(d,q),q_=typeof X==="string"?X.trim().toLowerCase():"",d_=!__&&h.image&&(q_==="clear"||q_==="transparent"),$_=__&&Boolean(h.image),t=`background-color: ${d_||$_?"transparent":h.color}`,N_=n.content_meta,Z_=Boolean(N_?.truncated),Q_=Boolean(N_?.preview),R_=Z_&&!Q_,L_=Z_?{originalLength:Number.isFinite(N_?.original_length)?N_.original_length:n.content?n.content.length:0,maxLength:Number.isFinite(N_?.max_length)?N_.max_length:0}:null,I_=n.content_blocks||[],U_=n.media_ids||[],D_=z5(n.content,n.link_previews),{content:v_,fileRefs:P_}=q5(D_),{content:T_,messageRefs:$0}=L5(v_),{content:H0,attachments:z_}=O5(T_);D_=H0;let j_=L4(I_),H_=O4(I_),O_=j_.length===1&&typeof j_[0]?.fallback_text==="string"?j_[0].fallback_text.trim():"",b_=H_.length===1?P6(H_[0]).trim():"",u_=Boolean(O_)&&D_?.trim()===O_||Boolean(b_)&&D_?.trim()===b_,N0=Boolean(D_)&&!R_&&!u_,h_=typeof u==="string"?u.trim():"",C_=a_(()=>{if(!D_||u_)return"";let T=n0(D_,j);return h_?Q5(T,h_):T},[D_,u_,h_]),A_=(T,r)=>{T.stopPropagation(),H(j$(r))},[i_,s_]=S(null),z0=(T)=>{s_(T)},E_=(T)=>{T.stopPropagation(),O?.(_)},Y0=(T)=>{I((r)=>{let Y_=new Set(r);if(Y_.has(T))Y_.delete(T);else Y_.add(T);return Y_})},j0=(T,r)=>{let Y_=new Set;if(!T||r.length===0)return{content:T,usedIds:Y_};return{content:T.replace(/attachment:([^\s)"']+)/g,(S_,f_,f0,y$)=>{let Y$=f_.replace(/^\/+/,""),D0=r.find((E0)=>E0.name&&E0.name.toLowerCase()===Y$.toLowerCase()&&!Y_.has(E0.id))||r.find((E0)=>!Y_.has(E0.id));if(!D0)return S_;if(Y_.add(D0.id),y$.slice(Math.max(0,f0-2),f0)==="](")return`/media/${D0.id}`;return D0.name||"attachment"}),usedIds:Y_}},u0=[],m0=[],J0=[],k_=[],l_=[],o_=[],V0=0;if(I_.length>0)I_.forEach((T)=>{if(T?.type==="text"&&T.annotations)o_.push(T.annotations);if(T?.type==="resource_link")k_.push(T);else if(T?.type==="resource")l_.push(T);else if(T?.type==="file"){let r=U_[V0++];if(r)m0.push(r),J0.push({id:r,name:T?.name||T?.filename||T?.title})}else if(T?.type==="image"||!T?.type){let r=U_[V0++];if(r){let Y_=typeof T?.mime_type==="string"?T.mime_type:void 0;u0.push({id:r,annotations:T?.annotations,mimeType:Y_}),J0.push({id:r,name:T?.name||T?.filename||T?.title})}}});else if(U_.length>0)U_.forEach((T)=>{u0.push({id:T,annotations:null}),J0.push({id:T,name:null})});if(z_.length>0)z_.forEach((T)=>{if(!T?.id)return;let r=J0.find((Y_)=>String(Y_.id)===String(T.id));if(r&&!r.name)r.name=T.label});let{content:U0,usedIds:M_}=j0(D_,J0);D_=U0;let m_=u0.filter(({id:T})=>!M_.has(T)),g0=m0.filter((T)=>!M_.has(T)),w_=z_.length>0?z_.map((T,r)=>({id:T.id||`attachment-${r+1}`,label:T.label||`attachment-${r+1}`})):J0.map((T,r)=>({id:T.id,label:T.name||`attachment-${r+1}`})),X0=a_(()=>L4(I_),[I_]),p0=a_(()=>O4(I_),[I_]);v(()=>{if(!i.current)return;return S$(i.current),X5(i.current)},[C_]);let K$=D(null);return v(()=>{if(!K$.current||X0.length===0)return;let T=K$.current;T.innerHTML="";for(let r of X0){let Y_=document.createElement("div");T.appendChild(Y_),A6(Y_,r,{onAction:async(G_)=>{if(G_.type==="Action.OpenUrl"){let S_=N2(G_.url||"");if(!S_)throw Error("Invalid URL");window.open(S_,"_blank","noopener,noreferrer");return}if(G_.type==="Action.Submit"){await c1({post_id:_.id,thread_id:n.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:r.card_id,action:{type:G_.type,title:G_.title||"",data:G_.data}});return}console.warn("[post] unsupported adaptive card action:",G_.type,G_)}}).catch((G_)=>{console.error("[post] adaptive card render error:",G_),Y_.textContent=r.fallback_text||"Card failed to render."})}},[X0,n.thread_id,_.id]),Q`
        <div id=${`post-${_.id}`} class="post ${__?"agent-post":""} ${W?"thread-reply":""} ${F?"thread-prev":""} ${b?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${__?"agent-avatar":""} ${h.image?"has-image":""}" style=${t}>
                ${h.image?Q`<img src=${h.image} alt=${K_} />`:h.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${E_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${K_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(T)=>{if(T.preventDefault(),T.stopPropagation(),Z)Z(_.id)}}>${F6(_.timestamp)}</a>
                </div>
                ${R_&&L_&&Q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${R2(L_.originalLength)} chars
                            ${L_.maxLength?Q` • Display limit: ${R2(L_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Q_&&L_&&Q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${R2(L_.maxLength)} of ${R2(L_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P_.length>0||$0.length>0||w_.length>0)&&Q`
                    <div class="post-file-refs">
                        ${$0.map((T)=>{let r=(Y_)=>{if(Y_.preventDefault(),Y_.stopPropagation(),N)N(T,_.chat_jid||null);else{let G_=document.getElementById("post-"+T);if(G_)G_.scrollIntoView({behavior:"smooth",block:"center"}),G_.classList.add("post-highlight"),setTimeout(()=>G_.classList.remove("post-highlight"),2000)}};return Q`
                                <a href=${`#msg-${T}`} class="post-msg-pill-link" onClick=${r}>
                                    <${O$}
                                        prefix="post"
                                        label=${"msg:"+T}
                                        title=${"Message "+T}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${P_.map((T)=>{let r=T.split("/").pop()||T;return Q`
                                <${O$}
                                    prefix="post"
                                    label=${r}
                                    title=${T}
                                    onClick=${()=>R?.(T)}
                                />
                            `})}
                        ${w_.map((T)=>Q`
                            <${_5}
                                key=${T.id}
                                attachment=${T}
                                onPreview=${z0}
                            />
                        `)}
                    </div>
                `}
                ${N0&&Q`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:C_}}
                        onClick=${(T)=>{if(T.target.classList.contains("hashtag")){T.preventDefault(),T.stopPropagation();let r=T.target.dataset.hashtag;if(r)j?.(r)}else if(T.target.tagName==="IMG")T.preventDefault(),T.stopPropagation(),H(T.target.src)}}
                    />
                `}
                ${X0.length>0&&Q`
                    <div ref=${K$} class="post-adaptive-cards" />
                `}
                ${p0.length>0&&Q`
                    <div class="post-adaptive-card-submissions">
                        ${p0.map((T,r)=>{let Y_=M6(T),G_=`${T.card_id}-${r}`,S_=x.has(G_);return Q`
                                <div key=${G_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Y_.title}</span>
                                        </div>
                                    </div>
                                    ${Y_.summary&&Q`
                                        <div class="adaptive-card-submission-summary">${Y_.summary}</div>
                                    `}
                                    ${Y_.fields.length>0&&Q`
                                        <div class="adaptive-card-submission-fields">
                                            ${Y_.fields.map((f_)=>Q`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${Y_.hiddenFieldCount>0&&Q`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${S_?"true":"false"}
                                            onClick=${(f_)=>{f_.preventDefault(),f_.stopPropagation(),Y0(G_)}}
                                        >
                                            ${S_?`Hide ${Y_.hiddenFieldCount} more`:`Show ${Y_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${S_&&Y_.hiddenFields.length>0&&Q`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${Y_.hiddenFields.map((f_)=>Q`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${z2(Y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${o_.length>0&&Q`
                    ${o_.map((T,r)=>Q`
                        <${X1} key=${r} annotations=${T} />
                    `)}
                `}
                ${m_.length>0&&Q`
                    <div class="media-preview">
                        ${m_.map(({id:T,mimeType:r})=>{let G_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?j$(T):n1(T);return Q`
                                <img 
                                    key=${T} 
                                    src=${G_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(S_)=>A_(S_,T)}
                                />
                            `})}
                    </div>
                `}
                ${m_.length>0&&Q`
                    ${m_.map(({annotations:T},r)=>Q`
                        ${T&&Q`<${X1} key=${r} annotations=${T} />`}
                    `)}
                `}
                ${g0.length>0&&Q`
                    <div class="file-attachments">
                        ${g0.map((T)=>Q`
                            <${e7} key=${T} mediaId=${T} onPreview=${z0} />
                        `)}
                    </div>
                `}
                ${k_.length>0&&Q`
                    <div class="resource-links">
                        ${k_.map((T,r)=>Q`
                            <div key=${r}>
                                <${$5} block=${T} />
                                <${X1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l_.length>0&&Q`
                    <div class="resource-embeds">
                        ${l_.map((T,r)=>Q`
                            <div key=${r}>
                                <${j5} block=${T} />
                                <${X1} annotations=${T.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${n.link_previews?.length>0&&Q`
                    <div class="link-previews">
                        ${n.link_previews.map((T,r)=>Q`
                            <${N5} key=${r} preview=${T} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&Q`<${I6} src=${E} onClose=${()=>H(null)} />`}
        ${i_&&Q`
            <${b6}
                mediaId=${i_.mediaId}
                info=${i_.info}
                onClose=${()=>s_(null)}
            />
        `}
    `}function C6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:q,timelineRef:X,agents:O,user:W,onDeletePost:F,reverse:b=!0,removingPostIds:m,searchQuery:u}){let[R,E]=S(!1),H=D(null),x=typeof IntersectionObserver<"u",I=A(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=A(($_)=>{let{scrollTop:t,scrollHeight:N_,clientHeight:Z_}=$_.target,Q_=b?N_-Z_-t:t,R_=Math.max(300,Z_);if(Q_<R_)I()},[b,I]);v(()=>{if(!x)return;let $_=H.current,t=X?.current;if(!$_||!t)return;let N_=300,Z_=new IntersectionObserver((Q_)=>{for(let R_ of Q_){if(!R_.isIntersecting)continue;I()}},{root:t,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return Z_.observe($_),()=>Z_.disconnect()},[x,$,j,X,I]);let n=D(I);if(n.current=I,v(()=>{if(x)return;if(!X?.current)return;let{scrollTop:$_,scrollHeight:t,clientHeight:N_}=X.current,Z_=b?t-N_-$_:$_,Q_=Math.max(300,N_);if(Z_<Q_)n.current?.()},[x,_,$,b,X]),v(()=>{if(!X?.current)return;if(!$||R)return;let{scrollTop:$_,scrollHeight:t,clientHeight:N_}=X.current,Z_=b?t-N_-$_:$_,Q_=Math.max(300,N_);if(t<=N_+1||Z_<Q_)n.current?.()},[_,$,R,b,X]),!_)return Q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return Q`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let __=_.slice().sort(($_,t)=>$_.id-t.id),d=($_)=>{let t=$_?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let N_=Number(t);return Number.isFinite(N_)?N_:null},K_=new Map;for(let $_=0;$_<__.length;$_+=1){let t=__[$_],N_=Number(t?.id),Z_=d(t);if(Z_!==null){let Q_=K_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};Q_.replyIndexes.push($_),K_.set(Z_,Q_)}else if(Number.isFinite(N_)){let Q_=K_.get(N_)||{anchorIndex:-1,replyIndexes:[]};Q_.anchorIndex=$_,K_.set(N_,Q_)}}let h=new Map;for(let[$_,t]of K_.entries()){let N_=new Set;if(t.anchorIndex>=0)N_.add(t.anchorIndex);for(let Z_ of t.replyIndexes)N_.add(Z_);h.set($_,Array.from(N_).sort((Z_,Q_)=>Z_-Q_))}let q_=__.map(($_,t)=>{let N_=d($_);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=h.get(N_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Q_=Z_.indexOf(t);if(Q_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Q_>0,hasThreadNext:Q_<Z_.length-1}}),d_=Q`<div class="timeline-sentinel" ref=${H}></div>`;return Q`
        <div class="timeline ${b?"reverse":"normal"}" ref=${X} onScroll=${i}>
            <div class="timeline-content">
                ${b?d_:null}
                ${__.map(($_,t)=>{let N_=Boolean($_.data?.thread_id&&$_.data.thread_id!==$_.id),Z_=m?.has?.($_.id),Q_=q_[t]||{};return Q`
                    <${x6}
                        key=${$_.id}
                        post=${$_}
                        isThreadReply=${N_}
                        isThreadPrev=${Q_.hasThreadPrev}
                        isThreadNext=${Q_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${u}
                        agentName=${X6($_.data?.agent_id,O||{})}
                        agentAvatarUrl=${q6($_.data?.agent_id,O||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.($_)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${F}
                    />
                `})}
                ${b?null:d_}
            </div>
        </div>
    `}class T6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var e_=new T6;var q1=null,B4=null;function S6(){if(B4)return Promise.resolve(B4);if(!q1)q1=import("/static/dist/editor.bundle.js").then((_)=>{return B4=_,_}).catch((_)=>{throw q1=null,_});return q1}class f6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await S6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var Q4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new f6(_,$)}};function U4(){S6().catch(()=>{})}var H4="piclaw://terminal";var U5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},F5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},L1=null,F4=null;function H5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function J5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!H5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function D5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!L1)L1=J5(()=>Promise.resolve($.init?.())).catch((j)=>{throw L1=null,j});return await L1,$}async function E5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!F4)F4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await F4}async function k5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function y5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function A5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function f$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function w5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function R6(){let _=A5(),$=_?F5:U5,j=f$("--bg-primary",_?"#000000":"#ffffff"),Z=f$("--text-primary",_?"#e7e9ea":"#0f1419"),N=f$("--text-secondary",_?"#71767b":"#536471"),z=f$("--accent-color","#1d9bf0"),K=f$("--danger-color",_?"#ff7b72":"#cf222e"),G=f$("--success-color",_?"#7ee787":"#1a7f37"),q=f$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=f$("--border-color",_?"#2f3336":"#eff3f4"),O=f$("--accent-soft-strong",w5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:O,selectionForeground:Z,black:q,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class J4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await D5();if(await E5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:R6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=R6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await k5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(y5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var D4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new J4(_,$)}},E4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new J4(_,$)}};function o$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function P5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,O=[];for(let F of X.split("/")){if(!F||F===".")continue;if(F===".."){if(O.length>0)O.pop();continue}O.push(F)}let W=O.join("/");return`${$1(W)}${z}${K}`}function g2(_){return _?.preview||null}function M5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function b5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function I5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${o$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${o$(z$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${o$(z2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${o$(b5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${o$(M5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${o$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function x5(_){let $=g2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=I5(_,$);if($.kind==="image"){let Z=$.url||($.path?$1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${o$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=n0($.text||"",null,{rewriteImageSrc:(N)=>P5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${o$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class k4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=x5(this.context)}getContent(){let _=g2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=g2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var y4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=g2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new k4(_,$)}},A4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return g2(_)||_?.path?1:!1},mount(_,$){return new k4(_,$)}};var C5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),T5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},S5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function u6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function v6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=u6(j),z=S5[N]||"\uD83D\uDCC4",K=T5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${v6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${v6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=u6(_?.path);if(!$||!C5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};var f5=/\.(csv|tsv)$/i;function p6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${p6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${p6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!f5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new c6(_,$);return new h6(_,$)}};var R5=/\.pdf$/i;function v5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class i6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
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
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!R5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new i6(_,$);return new l6(_,$)}};var u5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function b4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class n6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${b4(N)}" alt="${b4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${b4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var I4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!u5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new n6(_,$);return new d6(_,$)}};function m5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function g5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var x4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function s6(_){let $=String(_||"").trim();return $?$:x4}function p5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function c5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function h5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,q,X,O,W){try{if(K&&q!=null&&j({filename:K,format:G,data:q,mimeType:X,base64Encoded:Boolean(O),defaultMode:W}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,q,X,O,W){try{if(G&&j({filename:G,data:K,mimeType:q,base64Encoded:Boolean(X),mode:O,folderId:W}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function o6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${c5(j)}`}class r6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
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
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class a6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=p5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(h5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=x4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await o6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await o6(_,"image/png");else this.xmlData=s6(await _.text());else if(_.status===404)this.xmlData=x4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?s6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!m5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r6(_,$);return new a6(_,$)}};class t6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new t6;var O1="workspaceExplorerScale",i5=["compact","default","comfortable"],l5=new Set(i5),n5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function e6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return l5.has(j)?j:$}function T4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function d5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function s5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function S4(_={}){let $=d5(_),j=_.stored?e6(_.stored,$):$;return s5(j,_)}function _8(_){return n5[e6(_)]}var o5=60000,N8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function z8(_,$,j,Z=0,N=[]){if(!j&&N8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)z8(z,$,j,Z+1,N);return N}function $8(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&N8(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function u4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let q=u4(N.get(G.path),G);if(q!==N.get(G.path))z=!0;return q});return z?{...$,children:K}:_}function R4(_,$,j){if(!_)return _;if(_.path===$)return u4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=R4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var K8=4,f4=14,r5=8,a5=16;function Y8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=Y8(Z);return _.__bytes=j,j}function W8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=K8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let q=Math.max(0,Number(G?.__bytes??G?.size??0));if(q<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:q});else z.push({kind:"file",name:G.name,path:G.path,size:q})}z.sort((G,q)=>q.size-G.size);let K=z;if(z.length>f4){let G=z.slice(0,f4-1),q=z.slice(f4-1),X=q.reduce((O,W)=>O+W.size,0);G.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:X}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return W8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function j8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function B1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function m4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,q=B1(_,$,Z,N),X=B1(_,$,Z,G),O=B1(_,$,j,G),W=B1(_,$,j,N),F=G-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var V8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function X8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,q,X,O)=>{let W=Array.isArray(G?.children)?G.children:[];if(!W.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let b=X-q,m=q;W.forEach((u,R)=>{let E=Math.max(0,Number(u.size)||0);if(E<=0)return;let H=E/F,x=m,I=R===W.length-1?X:m+b*H;if(m=I,I-x<0.003)return;let i=V8[O];if(i){let n=G8(x,O,j);if(Z.push({key:u.path,path:u.path,label:u.name,size:E,color:n,depth:O,startAngle:x,endAngle:I,innerRadius:i[0],outerRadius:i[1],d:m4(120,120,i[0],i[1],x,I)}),O===1)N.push({key:u.path,name:u.name,size:E,pct:z>0?E/z*100:0,color:n})}if(O<K8)K(u,x,I,O+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function v4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=v4(Z,$);if(N)return N}return null}function q8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=V8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=G8(z,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:m4(120,120,N[0],N[1],z,K)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function Z8(_,$=!1,j=!1){if(!_)return null;let Z=Y8(_),N=W8(_,0),z=N.size||Z,{segments:K,legend:G}=X8(N,z,j);if(!K.length&&z>0){let q=q8("[files]",N.path,z,j);K=q.segments,G=q.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function t5({payload:_}){if(!_)return null;let[$,j]=S(null),[Z,N]=S(_?.root?.path||"."),[z,K]=S(()=>[_?.root?.path||"."]),[G,q]=S(!1);v(()=>{let h=_?.root?.path||".";N(h),K([h]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;q(!0);let h=setTimeout(()=>q(!1),180);return()=>clearTimeout(h)},[Z]);let X=a_(()=>{return v4(_.root,Z)||_.root},[_?.root,Z]),O=X?.size||_.totalSize||0,{segments:W,legend:F}=a_(()=>{let h=X8(X,O,_.isDarkTheme);if(h.segments.length>0)return h;if(O<=0)return h;let q_=X?.children?.length?"Total":"[files]";return q8(q_,X?.path||_?.root?.path||".",O,_.isDarkTheme)},[X,O,_.isDarkTheme,_?.root?.path]),[b,m]=S(W),u=D(new Map),R=D(0);v(()=>{let h=u.current,q_=new Map(W.map((N_)=>[N_.key,N_])),d_=performance.now(),$_=220,t=(N_)=>{let Z_=Math.min(1,(N_-d_)/220),Q_=Z_*(2-Z_),R_=W.map((L_)=>{let U_=h.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},D_=(H0,z_)=>H0+(z_-H0)*Q_,v_=D_(U_.startAngle,L_.startAngle),P_=D_(U_.endAngle,L_.endAngle),T_=D_(U_.innerRadius,L_.innerRadius),$0=D_(U_.outerRadius,L_.outerRadius);return{...L_,d:m4(120,120,T_,$0,v_,P_)}});if(m(R_),Z_<1)R.current=requestAnimationFrame(t)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(t),u.current=q_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[W]);let E=b.length?b:W,H=O>0?z$(O):"0 B",x=X?.name||"",i=(x&&x!=="."?x:"Total")||"Total",n=H,__=z.length>1,d=(h)=>{if(!h?.path)return;let q_=v4(_.root,h.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;K((d_)=>[...d_,q_.path]),N(q_.path),j(null)},K_=()=>{if(!__)return;K((h)=>{let q_=h.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return Q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${O}>
                ${E.map((h)=>Q`
                    <path
                        key=${h.key}
                        d=${h.d}
                        fill=${h.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===h.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(h)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(h)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>d(h)}
                    >
                        <title>${h.label} — ${z$(h.size)}</title>
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
            ${F.length>0&&Q`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((h)=>Q`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${z$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&Q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function e5({mediaId:_}){let[$,j]=S(null);if(v(()=>{if(!_)return;O2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?z$($.metadata.size):"";return Q`
        <a href=${j$(_)} download=${Z} class="file-attachment"
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
                ${N&&Q`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function L8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[G,q]=S(null),[X,O]=S(new Set(["."])),[W,F]=S(null),[b,m]=S(null),[u,R]=S(""),[E,H]=S(null),[x,I]=S(null),[i,n]=S(!0),[__,d]=S(!1),[K_,h]=S(null),[q_,d_]=S(()=>B2("workspaceShowHidden",!1)),[$_,t]=S(!1),[N_,Z_]=S(null),[Q_,R_]=S(null),[L_,I_]=S(null),[U_,D_]=S(!1),[v_,P_]=S(null),[T_,$0]=S(()=>j8()),[H0,z_]=S(()=>S4({stored:N$(O1),...T4()})),[j_,H_]=S(!1),O_=D(X),b_=D(""),u_=D(null),N0=D(0),h_=D(new Set),C_=D(null),A_=D(new Map),i_=D(_),s_=D(Z),z0=D(null),E_=D(null),Y0=D(null),j0=D(null),u0=D(null),m0=D(null),J0=D("."),k_=D(null),l_=D({path:null,dragging:!1,startX:0,startY:0}),o_=D({path:null,dragging:!1,startX:0,startY:0}),V0=D({path:null,timer:0}),U0=D(!1),M_=D(0),m_=D(new Map),g0=D(null),w_=D(null),X0=D(null),p0=D(null),K$=D(null),T=D(null),r=D(q_),Y_=D($),G_=D(j??$),S_=D(0),f_=D(L_),f0=D($_),y$=D(N_),Y$=D(null),R$=D({x:0,y:0}),D0=D(0),d0=D(null),E0=D(W),k0=D(b),A$=D(null),s0=D(null),A0=D(E);i_.current=_,s_.current=Z,v(()=>{O_.current=X},[X]),v(()=>{r.current=q_},[q_]),v(()=>{Y_.current=$},[$]),v(()=>{G_.current=j??$},[j,$]),v(()=>{f_.current=L_},[L_]),v(()=>{if(typeof window>"u")return;let L=()=>{z_(S4({stored:N$(O1),...T4()}))};L();let U=()=>L(),k=()=>L(),y=(f)=>{if(!f||f.key===null||f.key===O1)L()};window.addEventListener("resize",U),window.addEventListener("focus",k),window.addEventListener("storage",y);let p=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),a=(f,W_)=>{if(!f)return;if(f.addEventListener)f.addEventListener("change",W_);else if(f.addListener)f.addListener(W_)},o=(f,W_)=>{if(!f)return;if(f.removeEventListener)f.removeEventListener("change",W_);else if(f.removeListener)f.removeListener(W_)};return a(p,U),a(s,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",k),window.removeEventListener("storage",y),o(p,U),o(s,U)}},[]),v(()=>{let L=(U)=>{let k=U?.detail?.path;if(!k)return;let y=k.split("/"),p=[];for(let s=1;s<y.length;s++)p.push(y.slice(0,s).join("/"));if(p.length)O((s)=>{let a=new Set(s);a.add(".");for(let o of p)a.add(o);return a});F(k),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),v(()=>{f0.current=$_},[$_]),v(()=>{y$.current=N_},[N_]),v(()=>{E0.current=W},[W]),v(()=>{k0.current=b},[b]),v(()=>{A0.current=E},[E]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>$0(j8());L();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>L();if(U?.addEventListener)U.addEventListener("change",k);else if(U?.addListener)U.addListener(k);let y=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",k);else if(U?.removeListener)U.removeListener(k);y?.disconnect()}},[]),v(()=>{if(!b)return;let L=u0.current;if(!L)return;let U=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(U)},[b]),v(()=>{if(!j_)return;let L=(k)=>{let y=k?.target;if(!(y instanceof Element))return;if(K$.current?.contains(y))return;if(T.current?.contains(y))return;H_(!1)},U=(k)=>{if(k?.key==="Escape")H_(!1),T.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",U)}},[j_]);let w$=async(L)=>{d(!0),H(null),I(null);try{let U=await s1(L,20000);H(U)}catch(U){H({error:U.message||"Failed to load preview"})}finally{d(!1)}};z0.current=w$;let w0=async()=>{if(!Y_.current)return;try{let L=await x2("",1,r.current),U=$8(L.root,O_.current,r.current);if(U===b_.current){n(!1);return}if(b_.current=U,u_.current=L.root,!N0.current)N0.current=requestAnimationFrame(()=>{N0.current=0,q((k)=>u4(k,u_.current)),n(!1)})}catch(L){h(L.message||"Failed to load workspace"),n(!1)}},Y2=async(L)=>{if(!L)return;if(h_.current.has(L))return;h_.current.add(L);try{let U=await x2(L,1,r.current);q((k)=>R4(k,L,U.root))}catch(U){h(U.message||"Failed to load workspace")}finally{h_.current.delete(L)}};E_.current=Y2;let Z0=A(()=>{let L=W;if(!L)return".";let U=A_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[W]),W$=A((L)=>{let U=L?.closest?.(".workspace-row");if(!U)return null;let k=U.dataset.path,y=U.dataset.type;if(!k)return null;if(y==="dir")return k;if(k.includes("/")){let p=k.split("/");return p.pop(),p.join("/")||"."}return"."},[]),Q$=A((L)=>{return W$(L?.target||null)},[W$]),I0=A((L)=>{f_.current=L,I_(L)},[]),x0=A(()=>{let L=V0.current;if(L?.timer)clearTimeout(L.timer);V0.current={path:null,timer:0}},[]),i0=A((L)=>{if(!L||L==="."){x0();return}let U=A_.current?.get(L);if(!U||U.type!=="dir"){x0();return}if(O_.current?.has(L)){x0();return}if(V0.current?.path===L)return;x0();let k=setTimeout(()=>{V0.current={path:null,timer:0},E_.current?.(L),O((y)=>{let p=new Set(y);return p.add(L),p})},600);V0.current={path:L,timer:k}},[x0]),P$=A((L,U)=>{if(R$.current={x:L,y:U},D0.current)return;D0.current=requestAnimationFrame(()=>{D0.current=0;let k=Y$.current;if(!k)return;let y=R$.current;k.style.transform=`translate(${y.x+12}px, ${y.y+12}px)`})},[]),U$=A((L)=>{if(!L)return;let k=(A_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k)return;R_({path:L,label:k})},[]),v$=A(()=>{if(R_(null),D0.current)cancelAnimationFrame(D0.current),D0.current=0;if(Y$.current)Y$.current.style.transform="translate(-9999px, -9999px)"},[]),r$=A((L)=>{if(!L)return".";let U=A_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[]),q0=A(()=>{m(null),R("")},[]),u$=A((L)=>{if(!L)return;let k=(A_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k||L===".")return;m(L),R(k)},[]),G$=A(async()=>{let L=k0.current;if(!L)return;let U=(u||"").trim();if(!U){q0();return}let k=A_.current?.get(L),y=(k?.name||L.split("/").pop()||L).trim();if(U===y){q0();return}try{let s=(await a1(L,U))?.path||L,a=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(q0(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:s,type:k?.type||"file"}})),k?.type==="dir")O((o)=>{let f=new Set;for(let W_ of o)if(W_===L)f.add(s);else if(W_.startsWith(`${L}/`))f.add(`${s}${W_.slice(L.length)}`);else f.add(W_);return f});if(F(s),k?.type==="dir")H(null),d(!1),I(null);else z0.current?.(s);E_.current?.(a)}catch(p){h(p?.message||"Failed to rename file")}},[q0,u]),R0=A(async(L)=>{let y=L||".";for(let p=0;p<50;p+=1){let a=`untitled${p===0?"":`-${p}`}.md`;try{let f=(await r1(y,a,""))?.path||(y==="."?a:`${y}/${a}`);if(y&&y!==".")O((W_)=>new Set([...W_,y]));F(f),h(null),E_.current?.(y),z0.current?.(f);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;h(o?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),P0=A((L)=>{if(L?.stopPropagation?.(),U_)return;let U=r$(E0.current);R0(U)},[U_,r$,R0]);v(()=>{if(typeof window>"u")return;let L=(U)=>{let k=U?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;q((o)=>{let f=o;for(let W_ of k){if(!W_?.root)continue;if(!f||W_.path==="."||!W_.path)f=W_.root;else f=R4(f,W_.path,W_.root)}if(f)b_.current=$8(f,O_.current,r.current);return n(!1),f});let y=E0.current;if(Boolean(y)&&k.some((o)=>{let f=o?.path||"";if(!f||f===".")return!0;return y===f||y.startsWith(`${f}/`)||f.startsWith(`${y}/`)}))m_.current.clear();if(!y||!A0.current)return;let s=A_.current?.get(y);if(s&&s.type==="dir")return;if(k.some((o)=>{let f=o?.path||"";if(!f||f===".")return!0;return y===f||y.startsWith(`${f}/`)}))z0.current?.(y)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),C_.current=w0;let M$=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=G_.current??Y_.current,k=document.visibilityState!=="hidden"&&(U||L.matches&&Y_.current);C2(k,r.current).catch(()=>{})}).current,y0=D(0),b$=D(()=>{if(y0.current)clearTimeout(y0.current);y0.current=setTimeout(()=>{y0.current=0,M$()},250)}).current;v(()=>{if(Y_.current)C_.current?.();b$()},[$,j]),v(()=>{C_.current(),M$();let L=setInterval(()=>C_.current(),o5),U=Q2("previewHeight",null),k=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(M_.current=k,Y0.current)Y0.current.style.setProperty("--preview-height",`${k}px`);let y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),p=()=>b$();if(y.addEventListener)y.addEventListener("change",p);else if(y.addListener)y.addListener(p);return document.addEventListener("visibilitychange",p),()=>{if(clearInterval(L),N0.current)cancelAnimationFrame(N0.current),N0.current=0;if(y.removeEventListener)y.removeEventListener("change",p);else if(y.removeListener)y.removeListener(p);if(document.removeEventListener("visibilitychange",p),y0.current)clearTimeout(y0.current),y0.current=0;if(k_.current)clearTimeout(k_.current),k_.current=null;C2(!1,r.current).catch(()=>{})}},[]);let V$=a_(()=>z8(G,X,q_),[G,X,q_]),F$=a_(()=>new Map(V$.map((L)=>[L.node.path,L.node])),[V$]),m$=a_(()=>_8(H0),[H0]);A_.current=F$;let g_=(W?A_.current.get(W):null)?.type==="dir";v(()=>{if(!W||!g_){P_(null),g0.current=null,w_.current=null;return}let L=W,U=`${q_?"hidden":"visible"}:${W}`,k=m_.current,y=k.get(U);if(y?.root){k.delete(U),k.set(U,y);let a=Z8(y.root,Boolean(y.truncated),T_);if(a)g0.current=a,w_.current=W,P_({loading:!1,error:null,payload:a});return}let p=g0.current,s=w_.current;P_({loading:!0,error:null,payload:s===W?p:null}),x2(W,r5,q_).then((a)=>{if(E0.current!==L)return;let o={root:a?.root,truncated:Boolean(a?.truncated)};k.delete(U),k.set(U,o);while(k.size>a5){let W_=k.keys().next().value;if(!W_)break;k.delete(W_)}let f=Z8(o.root,o.truncated,T_);g0.current=f,w_.current=W,P_({loading:!1,error:null,payload:f})}).catch((a)=>{if(E0.current!==L)return;P_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:s===W?p:null})})},[W,g_,q_,T_]);let M0=Boolean(E&&E.kind==="text"&&!g_&&(!E.size||E.size<=262144)),C0=M0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",g$=Boolean(W&&W!=="."),X$=Boolean(W&&!g_),H$=Boolean(W&&!g_),J$=W&&g_?j1(W,q_):null,c0=A(()=>H_(!1),[]),L0=A(async(L)=>{c0();try{await L?.()}catch{}},[c0]);v(()=>{let L=X0.current;if(p0.current)p0.current.dispose(),p0.current=null;if(!L)return;if(L.innerHTML="",!W||g_||!E||E.error)return;let U={path:W,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},k=e_.resolve(U)||e_.get("workspace-preview-default");if(!k)return;let y=k.mount(L,U);return p0.current=y,()=>{if(p0.current===y)y.dispose(),p0.current=null;L.innerHTML=""}},[W,g_,E]);let F0=(L)=>{let U=L?.target;if(U instanceof Element)return U;return U?.parentElement||null},o0=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},D$=D((L)=>{if(s0.current)clearTimeout(s0.current),s0.current=null;let k=F0(L)?.closest?.("[data-path]");if(!k)return;let y=k.dataset.path;if(k.dataset.type==="dir"||!y)return;if(k0.current===y)q0();s_.current?.(y)}).current,I$=D((L)=>{if(U0.current){U0.current=!1;return}let U=F0(L),k=U?.closest?.("[data-path]");if(j0.current?.focus?.(),!k)return;let y=k.dataset.path,p=k.dataset.type,s=Boolean(U?.closest?.(".workspace-caret")),a=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),o=E0.current===y,f=k0.current;if(f){if(f===y)return;q0()}let W_=p==="file"&&A$.current===y&&!s&&!a;if(o&&!s&&!a&&y!=="."&&!W_){if(s0.current)clearTimeout(s0.current);s0.current=setTimeout(()=>{s0.current=null,u$(y)},350);return}if(p==="dir"){if(A$.current=null,F(y),H(null),I(null),d(!1),!O_.current.has(y))E_.current?.(y);if(o&&!s)return;O((t0)=>{let K0=new Set(t0);if(K0.has(y))K0.delete(y);else K0.add(y);return K0})}else{A$.current=null,F(y);let O0=A_.current.get(y);if(O0)i_.current?.(O0.path,O0);z0.current?.(y)}}).current,E$=D(()=>{b_.current="",C_.current(),Array.from(O_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>E_.current?.(U))}).current,r0=D(()=>{A$.current=null,F(null),H(null),I(null),d(!1)}).current,p$=D(()=>{d_((L)=>{let U=!L;if(typeof window<"u")_0("workspaceShowHidden",String(U));return r.current=U,C2(!0,U).catch(()=>{}),b_.current="",C_.current?.(),Array.from(O_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>E_.current?.(y)),U})}).current,a0=D((L)=>{if(F0(L)?.closest?.("[data-path]"))return;r0()}).current,b0=A(async(L)=>{if(!L)return;let U=L.split("/").pop()||L;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await e1(L);let y=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(E0.current===L)r0();E_.current?.(y),h(null)}catch(y){H((p)=>({...p||{},error:y.message||"Failed to delete file"}))}},[r0]),k$=A((L)=>{let U=j0.current;if(!U||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),q$=A((L)=>{let U=V$;if(!U||U.length===0)return;let k=W?U.findIndex((y)=>y.node.path===W):-1;if(L.key==="ArrowDown"){L.preventDefault();let y=Math.min(k+1,U.length-1),p=U[y];if(!p)return;if(F(p.node.path),p.node.type!=="dir")i_.current?.(p.node.path,p.node),z0.current?.(p.node.path);else H(null),d(!1),I(null);k$(p.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let y=k<=0?0:k-1,p=U[y];if(!p)return;if(F(p.node.path),p.node.type!=="dir")i_.current?.(p.node.path,p.node),z0.current?.(p.node.path);else H(null),d(!1),I(null);k$(p.node.path);return}if(L.key==="ArrowRight"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&!X.has(y.node.path))L.preventDefault(),E_.current?.(y.node.path),O((p)=>new Set([...p,y.node.path]));return}if(L.key==="ArrowLeft"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&X.has(y.node.path))L.preventDefault(),O((p)=>{let s=new Set(p);return s.delete(y.node.path),s});return}if(L.key==="Enter"&&k>=0){L.preventDefault();let y=U[k];if(!y)return;let p=y.node.path;if(y.node.type==="dir"){if(!O_.current.has(p))E_.current?.(p);O((a)=>{let o=new Set(a);if(o.has(p))o.delete(p);else o.add(p);return o}),H(null),I(null),d(!1)}else i_.current?.(p,y.node),z0.current?.(p);return}if((L.key==="Delete"||L.key==="Backspace")&&k>=0){let y=U[k];if(!y||y.node.type==="dir")return;L.preventDefault(),b0(y.node.path);return}if(L.key==="Escape")L.preventDefault(),r0()},[r0,b0,X,V$,k$,W]),c$=A((L)=>{let U=F0(L),k=U?.closest?.(".workspace-row");if(!k)return;let y=k.dataset.type,p=k.dataset.path;if(!p||p===".")return;if(k0.current===p)return;let s=L?.touches?.[0];if(!s)return;if(l_.current={path:o0(U)?p:null,dragging:!1,startX:s.clientX,startY:s.clientY},y!=="file")return;if(k_.current)clearTimeout(k_.current);k_.current=setTimeout(()=>{if(k_.current=null,l_.current?.dragging)return;b0(p)},600)},[b0]),x$=A(()=>{if(k_.current)clearTimeout(k_.current),k_.current=null;let L=l_.current;if(L?.dragging&&L.path){let U=f_.current||Z0(),k=d0.current;if(typeof k==="function")k(L.path,U)}l_.current={path:null,dragging:!1,startX:0,startY:0},S_.current=0,t(!1),Z_(null),I0(null),x0(),v$()},[Z0,v$,I0,x0]),C$=A((L)=>{let U=l_.current,k=L?.touches?.[0];if(!k||!U?.path){if(k_.current)clearTimeout(k_.current),k_.current=null;return}let y=Math.abs(k.clientX-U.startX),p=Math.abs(k.clientY-U.startY),s=y>8||p>8;if(s&&k_.current)clearTimeout(k_.current),k_.current=null;if(!U.dragging&&s)U.dragging=!0,t(!0),Z_("move"),U$(U.path);if(U.dragging){L.preventDefault(),P$(k.clientX,k.clientY);let a=document.elementFromPoint(k.clientX,k.clientY),o=W$(a)||Z0();if(f_.current!==o)I0(o);i0(o)}},[W$,Z0,U$,P$,I0,i0]),h$=D((L)=>{L.preventDefault();let U=Y0.current;if(!U)return;let k=L.clientY,y=M_.current||280,p=L.currentTarget;p.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=k,a=(f)=>{s=f.clientY;let W_=U.clientHeight-80,O0=Math.min(Math.max(y-(f.clientY-k),80),W_);U.style.setProperty("--preview-height",`${O0}px`),M_.current=O0},o=()=>{let f=U.clientHeight-80,W_=Math.min(Math.max(y-(s-k),80),f);M_.current=W_,p.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("previewHeight",String(Math.round(W_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}).current,a$=D((L)=>{L.preventDefault();let U=Y0.current;if(!U)return;let k=L.touches[0];if(!k)return;let y=k.clientY,p=M_.current||280,s=L.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let a=(f)=>{let W_=f.touches[0];if(!W_)return;f.preventDefault();let O0=U.clientHeight-80,t0=Math.min(Math.max(p-(W_.clientY-y),80),O0);U.style.setProperty("--preview-height",`${t0}px`),M_.current=t0},o=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",_0("previewHeight",String(Math.round(M_.current||p))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,i$=async()=>{if(!W)return;try{let L=await o1(W);if(L.media_id)I(L.media_id)}catch(L){H((U)=>({...U||{},error:L.message||"Failed to attach"}))}},t$=async()=>{if(!W||g_)return;await b0(W)},L$=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},y_=A((L)=>{if(!L$(L))return;if(L.preventDefault(),S_.current+=1,!f0.current)t(!0);Z_("upload");let U=Q$(L)||Z0();I0(U),i0(U)},[Z0,Q$,I0,i0]),W2=A((L)=>{if(!L$(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!f0.current)t(!0);if(y$.current!=="upload")Z_("upload");let U=Q$(L)||Z0();if(f_.current!==U)I0(U);i0(U)},[Z0,Q$,I0,i0]),e$=A((L)=>{if(!L$(L))return;if(L.preventDefault(),S_.current=Math.max(0,S_.current-1),S_.current===0)t(!1),Z_(null),I0(null),x0()},[I0,x0]),l$=A(async(L,U=".")=>{let k=Array.from(L||[]);if(k.length===0)return;let y=U&&U!==""?U:".",p=y!=="."?y:"workspace root";D_(!0);try{let s=null;for(let a of k)try{s=await _1(a,y)}catch(o){let f=o?.status,W_=o?.code;if(f===409||W_==="file_exists"){let O0=a?.name||"file";if(!window.confirm(`"${O0}" already exists in ${p}. Overwrite?`))continue;s=await _1(a,y,{overwrite:!0})}else throw o}if(s?.path)A$.current=s.path,F(s.path),z0.current?.(s.path);E_.current?.(y)}catch(s){h(s.message||"Failed to upload file")}finally{D_(!1)}},[]),_2=A(async(L,U)=>{if(!L)return;let k=A_.current?.get(L);if(!k)return;let y=U&&U!==""?U:".",p=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(y===p)return;try{let a=(await t1(L,y))?.path||L;if(k.type==="dir")O((o)=>{let f=new Set;for(let W_ of o)if(W_===L)f.add(a);else if(W_.startsWith(`${L}/`))f.add(`${a}${W_.slice(L.length)}`);else f.add(W_);return f});if(F(a),k.type==="dir")H(null),d(!1),I(null);else z0.current?.(a);E_.current?.(p),E_.current?.(y)}catch(s){h(s?.message||"Failed to move entry")}},[]);d0.current=_2;let D2=A(async(L)=>{if(!L$(L))return;L.preventDefault(),S_.current=0,t(!1),Z_(null),I_(null),x0();let U=Array.from(L?.dataTransfer?.files||[]);if(U.length===0)return;let k=f_.current||Q$(L)||Z0();await l$(U,k)},[Z0,Q$,l$]),E2=A((L)=>{if(L?.stopPropagation?.(),U_)return;let U=L?.currentTarget?.dataset?.uploadTarget||".";J0.current=U,m0.current?.click()},[U_]),$2=A(()=>{if(U_)return;let L=E0.current,U=L?A_.current?.get(L):null;J0.current=U?.type==="dir"?U.path:".",m0.current?.click()},[U_]),k2=A(()=>{L0(()=>P0(null))},[L0,P0]),l0=A(()=>{L0(()=>$2())},[L0,$2]),h0=A(()=>{L0(()=>E$())},[L0,E$]),n$=A(()=>{L0(()=>p$())},[L0,p$]),G2=A(()=>{if(!W||!M0)return;L0(()=>s_.current?.(W,E))},[L0,W,M0,E]),B=A(()=>{if(!W||W===".")return;L0(()=>u$(W))},[L0,W,u$]),M=A(()=>{if(!W||g_)return;L0(()=>t$())},[L0,W,g_,t$]),C=A(()=>{if(!W||g_)return;L0(()=>i$())},[L0,W,g_,i$]),l=A(()=>{if(!J$)return;if(c0(),typeof window<"u")window.open(J$,"_blank","noopener")},[c0,J$]),V_=A(()=>{c0(),N?.()},[c0,N]),B_=A(()=>{c0(),z?.()},[c0,z]),x_=A((L)=>{if(!L||L.button!==0)return;let U=L.currentTarget;if(!U||!U.dataset)return;let k=U.dataset.path;if(!k||k===".")return;if(k0.current===k)return;let y=F0(L);if(y?.closest?.("button, a, input, .workspace-caret"))return;if(!o0(y))return;L.preventDefault(),o_.current={path:k,dragging:!1,startX:L.clientX,startY:L.clientY};let p=(a)=>{let o=o_.current;if(!o?.path)return;let f=Math.abs(a.clientX-o.startX),W_=Math.abs(a.clientY-o.startY),O0=f>4||W_>4;if(!o.dragging&&O0)o.dragging=!0,U0.current=!0,t(!0),Z_("move"),U$(o.path),P$(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){a.preventDefault(),P$(a.clientX,a.clientY);let t0=document.elementFromPoint(a.clientX,a.clientY),K0=W$(t0)||Z0();if(f_.current!==K0)I0(K0);i0(K0)}},s=()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",s);let a=o_.current;if(a?.dragging&&a.path){let o=f_.current||Z0(),f=d0.current;if(typeof f==="function")f(a.path,o)}o_.current={path:null,dragging:!1,startX:0,startY:0},S_.current=0,t(!1),Z_(null),I0(null),x0(),v$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{U0.current=!1},0)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",s)},[W$,Z0,U$,P$,v$,I0,i0,x0]),T0=A(async(L)=>{let U=Array.from(L?.target?.files||[]);if(U.length===0)return;let k=J0.current||".";if(await l$(U,k),J0.current=".",L?.target)L.target.value=""},[l$]);return Q`
        <aside
            class=${`workspace-sidebar${$_?" workspace-drop-active":""}`}
            data-workspace-scale=${H0}
            ref=${Y0}
            onDragEnter=${y_}
            onDragOver=${W2}
            onDragLeave=${e$}
            onDrop=${D2}
        >
            <input type="file" multiple style="display:none" ref=${m0} onChange=${T0} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${T}
                            class=${`workspace-menu-button${j_?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),H_((U)=>!U)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${j_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${j_&&Q`
                            <div class="workspace-menu-dropdown" ref=${K$} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${k2} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${l0} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${h0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${n$}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${W&&Q`<div class="workspace-menu-separator"></div>`}
                                ${W&&!g_&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${G2} disabled=${!M0}>Open in editor</button>
                                `}
                                ${g$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B}>Rename selected</button>
                                `}
                                ${H$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C}>Download selected file</button>
                                `}
                                ${J$&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l}>Download selected folder (zip)</button>
                                `}
                                ${X$&&Q`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${M}>Delete selected file</button>
                                `}

                                ${(N||z)&&Q`<div class="workspace-menu-separator"></div>`}
                                ${N&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&Q`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B_}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${P0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${E$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${a0}>
                ${U_&&Q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&Q`<div class="workspace-loading">Loading…</div>`}
                ${K_&&Q`<div class="workspace-error">${K_}</div>`}
                ${G&&Q`
                    <div
                        class="workspace-tree-list"
                        ref=${j0}
                        tabIndex="0"
                        onClick=${I$}
                        onDblClick=${D$}
                        onKeyDown=${q$}
                        onTouchStart=${c$}
                        onTouchEnd=${x$}
                        onTouchMove=${C$}
                        onTouchCancel=${x$}
                    >
                        ${V$.map(({node:L,depth:U})=>{let k=L.type==="dir",y=L.path===W,p=L.path===b,s=k&&X.has(L.path),a=L_&&L.path===L_,o=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return Q`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${y?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*m$.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${x_}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?s?Q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:Q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?Q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:Q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${p?Q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${u0}
                                                value=${u}
                                                onInput=${(f)=>R(f?.target?.value||"")}
                                                onKeyDown=${(f)=>{if(f.key==="Enter")f.preventDefault(),G$();else if(f.key==="Escape")f.preventDefault(),q0()}}
                                                onBlur=${q0}
                                                onClick=${(f)=>f.stopPropagation()}
                                            />
                                        `:Q`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${k&&!s&&o>0&&Q`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${k&&Q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${E2}
                                            disabled=${U_}
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
            ${W&&Q`
                <div class="workspace-preview-splitter-h" onMouseDown=${h$} onTouchStart=${a$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${P0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!g_&&Q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M0&&s_.current?.(W,E)}
                                    title=${C0}
                                    disabled=${!M0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t$}
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
                            ${g_?Q`
                                    <button class="workspace-download" onClick=${$2}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${j1(W,q_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:Q`<button class="workspace-download" onClick=${i$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${__&&Q`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&Q`<div class="workspace-error">${E.error}</div>`}
                    ${g_&&Q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${v_?.loading&&Q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${v_?.error&&Q`<div class="workspace-error">${v_.error}</div>`}
                        ${v_?.payload&&v_.payload.segments?.length>0&&Q`
                            <${t5} payload=${v_.payload} />
                        `}
                        ${v_?.payload&&(!v_.payload.segments||v_.payload.segments.length===0)&&Q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!g_&&Q`
                        <div class="workspace-preview-body" ref=${X0}></div>
                    `}
                    ${x&&Q`
                        <div class="workspace-download-card">
                            <${e5} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${Q_&&Q`
                <div class="workspace-drag-ghost" ref=${Y$}>${Q_.label}</div>
            `}
        </aside>
    `}var _j=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,$j=/\.(csv|tsv)$/i,jj=/\.pdf$/i,Zj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,O8=/\.drawio(\.xml|\.svg|\.png)?$/i;function B8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:q,onToggleDock:X,dockVisible:O}){let[W,F]=S(null),b=D(null);v(()=>{if(!W)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[W]),v(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let I=_.findIndex((i)=>i.id===$);if(x.shiftKey){let i=_[(I-1+_.length)%_.length];j?.(i.id)}else{let i=_[(I+1)%_.length];j?.(i.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let I=document.querySelector(".editor-pane");if(I&&I.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let m=A((H,x)=>{if(H.button===1){H.preventDefault(),Z?.(x);return}if(H.button===0)j?.(x)},[j,Z]),u=A((H,x)=>{H.preventDefault(),F({id:x,x:H.clientX,y:H.clientY})},[]),R=A((H)=>{H.preventDefault(),H.stopPropagation()},[]),E=A((H,x)=>{H.preventDefault(),H.stopPropagation(),Z?.(x)},[Z]);if(v(()=>{if(!$||!b.current)return;let H=b.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return Q`
        <div class="tab-strip" ref=${b} role="tablist">
            ${_.map((H)=>Q`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(x)=>m(x,H.id)}
                    onContextMenu=${(x)=>u(x,H.id)}
                >
                    ${H.pinned&&Q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${R}
                        onClick=${(x)=>E(x,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?Q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:Q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&Q`
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
        ${W&&Q`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Z?.(W.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(W.id),F(null)}}>
                    ${_.find((H)=>H.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{G(W.id),F(null)}}>
                        ${q?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${_j.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(W.id),x=W.id.split("/").pop()||"document",I="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(I,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${$j.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${jj.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${Zj.test(W.id)&&!O8.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${O8.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(W.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Nj=400,g4=60,Q8=220,p4="mdPreviewHeight";function zj(){try{let _=localStorage.getItem(p4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=g4?$:Q8}catch{return Q8}}function U8({getContent:_,path:$,onClose:j}){let[Z,N]=S(""),[z,K]=S(zj),G=D(null),q=D(null),X=D(""),O=D(_);return O.current=_,v(()=>{let b=()=>{let u=O.current?.()||"";if(u===X.current)return;X.current=u;try{let R=n0(u,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};b();let m=setInterval(b,Nj);return()=>clearInterval(m)},[]),v(()=>{if(G.current&&Z)S$(G.current).catch(()=>{})},[Z]),Q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(b)=>{b.preventDefault();let m=b.clientY,u=q.current?.offsetHeight||z,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,H=b.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=(i)=>{let n=Math.min(Math.max(u-(i.clientY-m),g4),E);K(n)},I=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(p4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",I)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",I)}}
            onTouchStart=${(b)=>{b.preventDefault();let m=b.touches[0];if(!m)return;let u=m.clientY,R=q.current?.offsetHeight||z,E=q.current?.parentElement,H=E?E.offsetHeight*0.7:500,x=b.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let I=(n)=>{let __=n.touches[0];if(!__)return;n.preventDefault();let d=Math.min(Math.max(R-(__.clientY-u),g4),H);K(d)},i=()=>{x.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(p4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",I),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
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
    `}function F8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let q=D(Z);q.current=Z,v(()=>{G.current();let X=new Z1((W,F)=>z.current(W,F),(W)=>K.current(W),{chatJid:N});X.connect();let O=()=>{X.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),X.disconnect()}},[N])}function H8(){let[_,$]=S(!1),[j,Z]=S("default"),N=D(!1);v(()=>{let q=B2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let z=A(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=A(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await z();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),_0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),_0("notificationsEnabled",String(q))},[z]),G=A((q,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let O=new Notification(q,{body:X});return O.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var p2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function J8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=S(null),[z,K]=S(!1),G=D(!1),q=D(null),X=D(!1),O=D(null),W=D(null),F=D(0);v(()=>{G.current=z},[z]),v(()=>{W.current=Z},[Z]),v(()=>{F.current+=1,W.current=null,O.current=null,X.current=!1,G.current=!1,N(null),K(!1)},[j]);let b=A(async(R=null)=>{let E=F.current;try{if(R){let H=await S1(R,50,0,j);if(E!==F.current)return;N(H.posts),K(!1)}else{let H=await M2(10,null,j);if(E!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(E!==F.current)return;console.error("Failed to load posts:",H)}},[j]),m=A(async()=>{let R=F.current;try{let E=await M2(10,null,j);if(R!==F.current)return;N((H)=>{if(!H||H.length===0)return E.posts;return p2([...E.posts,...H])}),K((H)=>H||E.has_more)}catch(E){if(R!==F.current)return;console.error("Failed to refresh timeline:",E)}},[j]),u=A(async(R={})=>{let E=F.current,H=W.current;if(!H||H.length===0)return;if(X.current)return;let{preserveScroll:x=!0,preserveMode:I="top",allowRepeat:i=!1}=R,n=(K_)=>{if(!x){K_();return}if(I==="top")$(K_);else _(K_)},d=H.slice().sort((K_,h)=>K_.id-h.id)[0]?.id;if(!Number.isFinite(d))return;if(!i&&O.current===d)return;X.current=!0,O.current=d;try{let K_=await M2(10,d,j);if(E!==F.current)return;if(K_.posts.length>0)n(()=>{N((h)=>p2([...K_.posts,...h||[]])),K(K_.has_more)});else K(!1)}catch(K_){if(E!==F.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===F.current)X.current=!1}},[j,_,$]);return v(()=>{q.current=u},[u]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:b,refreshTimeline:m,loadMore:u,loadMoreRef:q,loadingMoreRef:X,lastBeforeIdRef:O}}function D8(){let[_,$]=S(null),[j,Z]=S({text:"",totalLines:0}),[N,z]=S(""),[K,G]=S({text:"",totalLines:0}),[q,X]=S(null),[O,W]=S(null),[F,b]=S(null),m=D(null),u=D(0),R=D(!1),E=D(""),H=D(""),x=D(null),I=D(null),i=D(null),n=D(null),__=D(!1),d=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:q,setPendingRequest:X,currentTurnId:O,setCurrentTurnId:W,steerQueuedTurnId:F,setSteerQueuedTurnId:b,lastAgentEventRef:m,lastSilenceNoticeRef:u,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:H,pendingRequestRef:x,stalledPostIdRef:I,currentTurnIdRef:i,steerQueuedTurnIdRef:n,thoughtExpandedRef:__,draftExpandedRef:d}}function E8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientX,b=$.current||280,m=O.currentTarget;m.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let x=Math.min(Math.max(b+(H.clientX-F),160),600);W.style.setProperty("--sidebar-width",`${x}px`),$.current=x},E=()=>{let H=Math.min(Math.max(b+(u-F),160),600);$.current=H,m.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",_0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,z=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let b=F.clientX,m=$.current||280,u=O.currentTarget;u.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(m+(x.clientX-b),160),600);W.style.setProperty("--sidebar-width",`${I}px`),$.current=I},E=()=>{u.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",_0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientX,b=j.current||$.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientX;let x=Math.min(Math.max(b+(H.clientX-F),200),800);W.style.setProperty("--editor-width",`${x}px`),j.current=x},E=()=>{let H=Math.min(Math.max(b+(u-F),200),800);j.current=H,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,G=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let b=F.clientX,m=j.current||$.current||280,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(m+(x.clientX-b),200),800);W.style.setProperty("--editor-width",`${I}px`),j.current=I},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.clientY,b=Z?.current||200,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let u=F,R=(H)=>{u=H.clientY;let x=Math.min(Math.max(b-(H.clientY-F),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${x}px`),Z)Z.current=x;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let H=Math.min(Math.max(b-(u-F),100),window.innerHeight*0.5);if(Z)Z.current=H;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",_0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,X=D((O)=>{O.preventDefault();let W=_.current;if(!W)return;let F=O.touches[0];if(!F)return;let b=F.clientY,m=Z?.current||200,u=O.currentTarget;u.classList.add("dragging"),document.body.style.userSelect="none";let R=(H)=>{let x=H.touches[0];if(!x)return;H.preventDefault();let I=Math.min(Math.max(m-(x.clientY-b),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{u.classList.remove("dragging"),document.body.style.userSelect="",_0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:X}}function k8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=S(()=>n_.getTabs()),[N,z]=S(()=>n_.getActiveId()),[K,G]=S(()=>n_.getTabs().length>0);v(()=>{return n_.onChange((I,i)=>{Z(I),z(i),G(I.length>0)})},[]);let[q,X]=S(()=>new Set),O=A((I)=>{X((i)=>{let n=new Set(i);if(n.has(I))n.delete(I);else n.add(I);return n})},[]),W=A((I)=>{X((i)=>{if(!i.has(I))return i;let n=new Set(i);return n.delete(I),n})},[]),F=A((I,i={})=>{if(!I)return;let n={path:I,mode:"edit"};try{if(!e_.resolve(n)){if(!e_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,d)}let __=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;n_.open(I,__)},[]),b=A(()=>{let I=n_.getActiveId();if(I){let i=n_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}n_.close(I),W(I),$.current?.(I)}},[W]),m=A((I)=>{let i=n_.get(I);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}n_.close(I),W(I),$.current?.(I)},[W]),u=A((I)=>{n_.activate(I)},[]),R=A((I)=>{let i=n_.getTabs().filter((d)=>d.id!==I&&!d.pinned),n=i.filter((d)=>d.dirty).length;if(n>0){if(!window.confirm(`${n} unsaved tab${n>1?"s":""} will be closed. Continue?`))return}let __=i.map((d)=>d.id);n_.closeOthers(I),__.forEach((d)=>{W(d),$.current?.(d)})},[W]),E=A(()=>{let I=n_.getTabs().filter((__)=>!__.pinned),i=I.filter((__)=>__.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let n=I.map((__)=>__.id);n_.closeAll(),n.forEach((__)=>{W(__),$.current?.(__)})},[W]),H=A((I)=>{n_.togglePin(I)},[]),x=A(()=>{let I=n_.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return v(()=>{let I=(i)=>{let{oldPath:n,newPath:__,type:d}=i.detail||{};if(!n||!__)return;if(d==="dir"){for(let K_ of n_.getTabs())if(K_.path===n||K_.path.startsWith(`${n}/`)){let h=`${__}${K_.path.slice(n.length)}`;n_.rename(K_.id,h)}}else n_.rename(n,__)};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),v(()=>{let I=(i)=>{if(n_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:F,closeEditor:b,handleTabClose:m,handleTabActivate:u,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:H,handleTabTogglePreview:O,revealInExplorer:x}}function c4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var h4=c4("warning",30000),y8=c4("finalize",120000),i4=c4("refresh",30000),A8=30000;function w8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function P8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function M8(_=30000){let[,$]=S(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function l4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function b8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function K2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function n4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function I8(_,$={}){if(K2($))return null;if(n4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Kj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function x8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function C8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function T8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function S8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function H2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function f8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Kj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Q1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function d4(_){return String(_||"").trim()||"web:default"}function R8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function v8(_={}){return K2(_)&&n4(_)}function Yj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Wj(_={},$={}){if(!v8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Yj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function u8(_={}){if(!v8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},K=()=>{Z=0,Wj({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{G();for(let W of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),G()},W);if(F!=null)N.add(F)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},O=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",q,!0),O?.addEventListener?.("resize",q),O?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",q,!0),O?.removeEventListener?.("resize",q),O?.removeEventListener?.("scroll",q)}}function Gj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function B$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Gj($,j)}var Vj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function m8(_){return Vj.has(String(_||"").trim())}function Xj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function g8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Xj(_),{detail:Z})),!0}var qj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function p8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(K2({window:j,navigator:Z}))};N();let K=qj.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function c8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var r4="piclaw_btw_session";function Lj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Oj(){let _=N$(r4);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var h8=f1,i8=v1,Bj=m1,l8=i1,n8=l1,d8=g1,s4=B$(Z$,"getAgentContext",null),Qj=B$(Z$,"getAgentModels",{current:null,models:[]}),Uj=B$(Z$,"getActiveChatAgents",{chats:[]}),o4=B$(Z$,"getChatBranches",{chats:[]}),Fj=B$(Z$,"renameChatBranch",null),Hj=B$(Z$,"pruneChatBranch",null),Jj=B$(Z$,"getAgentQueueState",{count:0}),Dj=B$(Z$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Ej=B$(Z$,"removeAgentQueueItem",{removed:!1}),kj=B$(Z$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});e_.register(Q4);e_.register(A4);e_.register(y4);e_.register(w4);e_.register(P4);e_.register(M4);e_.register(I4);e_.register(C4);U4();e_.register(D4);e_.register(E4);function yj({locationParams:_}){let $=a_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),j=a_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Z=a_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=a_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():$},[$,_]),[z,K]=S("disconnected"),[G,q]=S(()=>K2()),[X,O]=S(null),[W,F]=S(null),[b,m]=S(!1),[u,R]=S("current"),[E,H]=S([]),[x,I]=S([]),[i,n]=S(null),{agentStatus:__,setAgentStatus:d,agentDraft:K_,setAgentDraft:h,agentPlan:q_,setAgentPlan:d_,agentThought:$_,setAgentThought:t,pendingRequest:N_,setPendingRequest:Z_,currentTurnId:Q_,setCurrentTurnId:R_,steerQueuedTurnId:L_,setSteerQueuedTurnId:I_,lastAgentEventRef:U_,lastSilenceNoticeRef:D_,isAgentRunningRef:v_,draftBufferRef:P_,thoughtBufferRef:T_,pendingRequestRef:$0,stalledPostIdRef:H0,currentTurnIdRef:z_,steerQueuedTurnIdRef:j_,thoughtExpandedRef:H_,draftExpandedRef:O_}=D8(),[b_,u_]=S({}),[N0,h_]=S(null),[C_,A_]=S(null),[i_,s_]=S(!1),[z0,E_]=S(null),[Y0,j0]=S([]),[u0,m0]=S([]),[J0,k_]=S(null),[l_,o_]=S([]),[V0,U0]=S(!1),[M_,m_]=S(()=>Oj()),g0=a_(()=>Y0.find((V)=>V?.chat_jid===$)||null,[Y0,$]),w_=a_(()=>u0.find((V)=>V?.chat_jid===$)||g0||null,[g0,u0,$]),X0=w_?.root_chat_jid||g0?.root_chat_jid||$,p0=Lj(u),[K$,T]=S(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),r=l_.length,Y_=D(new Set),G_=D([]),S_=D(new Set),f_=D(0),f0=D({inFlight:!1,lastAttemptAt:0,turnId:null});Y_.current=new Set(l_.map((V)=>V.row_id)),G_.current=l_;let{notificationsEnabled:y$,notificationPermission:Y$,toggleNotifications:R$,notify:D0}=H8(),[d0,E0]=S(()=>new Set),[k0,A$]=S(()=>B2("workspaceOpen",!0)),s0=D(null),{editorOpen:A0,tabStripTabs:w$,tabStripActiveId:w0,previewTabs:Y2,openEditor:Z0,closeEditor:W$,handleTabClose:Q$,handleTabActivate:I0,handleTabCloseOthers:x0,handleTabCloseAll:i0,handleTabTogglePin:P$,handleTabTogglePreview:U$,revealInExplorer:v$}=k8({onTabClosed:(V)=>s0.current?.(V)}),r$=D(null),q0=D(null),u$=D(null),G$=D(null),R0=e_.getDockPanes().length>0,[P0,M$]=S(!1),y0=A(()=>M$((V)=>!V),[]),b$=A(()=>{Z0(H4,{label:"Terminal"})},[Z0]),V$=!j&&(A0||R0&&P0);v(()=>{let V=r$.current;if(!V)return;if(q0.current)q0.current.dispose(),q0.current=null;let Y=w0;if(!Y)return;let J={path:Y,mode:"edit"},w=e_.resolve(J)||e_.get("editor");if(!w){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=w.mount(V,J);q0.current=P,P.onDirtyChange?.((e)=>{n_.setDirty(Y,e)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{W$()});let g=n_.getViewState(Y);if(g&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(g));if(typeof P.onViewStateChange==="function")P.onViewStateChange((e)=>{n_.saveViewState(Y,e)});return requestAnimationFrame(()=>P.focus()),()=>{if(q0.current===P)P.dispose(),q0.current=null}},[w0,W$]),v(()=>{let V=(Y)=>{let J=Y.detail?.path;if(J)Z0(J)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V)}},[Z0]),v(()=>{let V=u$.current;if(G$.current)G$.current.dispose(),G$.current=null;if(!V||!R0||!P0)return;let Y=e_.getDockPanes()[0];if(!Y){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(V,{mode:"view"});return G$.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(G$.current===J)J.dispose(),G$.current=null}},[R0,P0]);let[F$,m$]=S({name:"You",avatar_url:null,avatar_background:null}),J2=D(!1),g_=D(!1),M0=D(null),C0=D($),g$=D(new Map),X$=D($),H$=D(0),J$=D(0),c0=D({}),L0=D({name:null,avatar_url:null}),F0=D({currentHashtag:null,searchQuery:null}),o0=D(null),D$=D(null),I$=D(0),E$=D(0),r0=D(0),p$=D(null),a0=D(null),b0=D(null),k$=D(null),q$=D(0),c$=D({title:null,avatarBase:null}),x$=D(null),C$=A(()=>{if(x$.current)clearTimeout(x$.current),x$.current=null;n(null)},[]);M8(30000),v(()=>{return o3()},[]),v(()=>{return p8(q)},[]),v(()=>{_0("workspaceOpen",String(k0))},[k0]),v(()=>{return u8()},[]),v(()=>{return()=>{C$()}},[C$]),v(()=>{if(!M_){_0(r4,"");return}_0(r4,JSON.stringify({question:M_.question||"",answer:M_.answer||"",thinking:M_.thinking||"",error:M_.error||null,status:M_.status||"success"}))},[M_]),v(()=>{c0.current=b_||{}},[b_]),v(()=>{C0.current=$},[$]),v(()=>{L0.current=F$||{name:"You",avatar_url:null,avatar_background:null}},[F$]);let h$=A((V,Y,J=null)=>{if(typeof document>"u")return;let w=(V||"").trim()||"PiClaw";if(c$.current.title!==w){document.title=w;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==w)c.setAttribute("content",w);c$.current.title=w}let P=document.getElementById("dynamic-favicon");if(!P)return;let g=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",e=Y||g,F_=Y?`${e}|${J||""}`:e;if(c$.current.avatarBase!==F_){let c=Y?`${e}${e.includes("?")?"&":"?"}v=${J||Date.now()}`:e;P.setAttribute("href",c),c$.current.avatarBase=F_}},[]),a$=A((V)=>{if(!V)return;H((Y)=>Y.includes(V)?Y:[...Y,V])},[]),i$=A((V)=>{H((Y)=>Y.filter((J)=>J!==V))},[]);s0.current=i$;let t$=A(()=>{H([])},[]),L$=A((V)=>{if(!Array.isArray(V)){H([]);return}let Y=[],J=new Set;for(let w of V){if(typeof w!=="string"||!w.trim())continue;let P=w.trim();if(J.has(P))continue;J.add(P),Y.push(P)}H(Y)},[]),y_=A((V,Y=null,J="info",w=3000)=>{C$(),n({title:V,detail:Y||null,kind:J||"info"}),x$.current=setTimeout(()=>{n((P)=>P?.title===V?null:P)},w)},[C$]),W2=A((V)=>{let Y=b8(V,{editorOpen:A0,resolvePane:(J)=>e_.resolve(J)});if(Y.kind==="open"){Z0(Y.path);return}if(Y.kind==="toast")y_(Y.title,Y.detail,Y.level)},[A0,Z0,y_]),e$=A(()=>{let V=w0;if(V)a$(V)},[w0,a$]),l$=A((V)=>{if(!V)return;I((Y)=>Y.includes(V)?Y:[...Y,V])},[]),_2=A(async(V,Y=null)=>{let J=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},w=document.getElementById("post-"+V);if(w){J(w);return}try{let P=typeof Y==="string"&&Y.trim()?Y.trim():$,e=(await R1(V,P))?.thread?.[0];if(!e)return;f((F_)=>{if(!F_)return[e];if(F_.some((c)=>c.id===e.id))return F_;return[...F_,e]}),requestAnimationFrame(()=>{setTimeout(()=>{let F_=document.getElementById("post-"+V);if(F_)J(F_)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",V,P)}},[$]),D2=A((V)=>{I((Y)=>Y.filter((J)=>J!==V))},[]),E2=A(()=>{I([])},[]),$2=A((V)=>{if(!Array.isArray(V)){I([]);return}let Y=[],J=new Set;for(let w of V){if(typeof w!=="string"||!w.trim())continue;let P=w.trim();if(J.has(P))continue;J.add(P),Y.push(P)}I(Y)},[]),k2=A((V)=>{let Y=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";y_("Compose failed",Y,"error",5000)},[y_]),l0=A((V={})=>{let Y=Date.now();if(U_.current=Y,V.running)v_.current=!0,U0((J)=>J?J:!0);if(V.clearSilence)D_.current=0},[U0]),h0=A(()=>{if(k$.current)clearTimeout(k$.current),k$.current=null;q$.current=0},[]);v(()=>()=>{h0()},[h0]);let n$=A(()=>{h0(),d((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:Y,lastActivity:J,...w}=V;return w})},[h0]),G2=A((V)=>{if(!V)return;h0();let Y=Date.now();q$.current=Y,d({type:V.type||"active",last_activity:!0}),k$.current=setTimeout(()=>{if(q$.current!==Y)return;d((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},A8)},[h0]),B=A(()=>{v_.current=!1,U0(!1),U_.current=null,D_.current=0,P_.current="",T_.current="",$0.current=null,a0.current=null,z_.current=null,j_.current=null,M0.current=null,f0.current={inFlight:!1,lastAttemptAt:0,turnId:null},h0(),R_(null),I_(null),H_.current=!1,O_.current=!1},[h0,R_,I_,U0]),M=A((V)=>{if(!R8({remainingQueueCount:V,currentTurnId:z_.current,isAgentTurnActive:V0}))return;j_.current=null,I_(null)},[V0,I_]),C=A(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),l=A(()=>({agentStatus:__,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:$_?{...$_}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:Q_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(V0),followupQueueItems:Array.isArray(l_)?l_.map((V)=>({...V})):[],activeModel:N0,activeThinkingLevel:C_,supportsThinking:Boolean(i_),activeModelUsage:z0,contextUsage:J0,isAgentRunning:Boolean(v_.current),wasAgentActive:Boolean(g_.current),draftBuffer:P_.current||"",thoughtBuffer:T_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:D_.current||0,lastAgentResponse:a0.current||null,currentTurnIdRef:z_.current||null,steerQueuedTurnIdRef:j_.current||null,thoughtExpanded:Boolean(H_.current),draftExpanded:Boolean(O_.current),agentStatusRef:M0.current||null,silentRecovery:{...f0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[N0,z0,C_,K_,q_,__,$_,J0,Q_,l_,V0,N_,L_,i_]),V_=A((V)=>{let Y=V||C();h0(),v_.current=Boolean(Y.isAgentRunning),g_.current=Boolean(Y.wasAgentActive),U0(Boolean(Y.isAgentTurnActive)),U_.current=Y.lastAgentEvent||null,D_.current=Number(Y.lastSilenceNotice||0),P_.current=Y.draftBuffer||"",T_.current=Y.thoughtBuffer||"",$0.current=Y.pendingRequest||null,a0.current=Y.lastAgentResponse||null,z_.current=Y.currentTurnIdRef||null,j_.current=Y.steerQueuedTurnIdRef||null,M0.current=Y.agentStatusRef||null,f0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H_.current=Boolean(Y.thoughtExpanded),O_.current=Boolean(Y.draftExpanded),d(Y.agentStatus||null),h(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),d_(Y.agentPlan||""),t(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),R_(Y.currentTurnId||null),I_(Y.steerQueuedTurnId||null),o_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),h_(Y.activeModel||null),A_(Y.activeThinkingLevel||null),s_(Boolean(Y.supportsThinking)),E_(Y.activeModelUsage??null),k_(Y.contextUsage??null)},[h0,C,R_,o_,U0,I_]),B_=A((V)=>{if(!V)return;if(z_.current===V)return;z_.current=V,f0.current={inFlight:!1,lastAttemptAt:0,turnId:V},R_(V),j_.current=null,I_(null),P_.current="",T_.current="",h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),$0.current=null,a0.current=null,H_.current=!1,O_.current=!1},[R_,I_]),x_=A((V)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let Y=a0.current;if(!Y||!Y.post)return;if(V&&Y.turnId&&Y.turnId!==V)return;let J=Y.post;if(J.id&&p$.current===J.id)return;let w=String(J?.data?.content||"").trim();if(!w)return;p$.current=J.id||p$.current,a0.current=null;let P=w.replace(/\s+/g," ").slice(0,200),g=c0.current||{},F_=(J?.data?.agent_id?g[J.data.agent_id]:null)?.name||"Pi";D0(F_,P)},[D0]),T0=A(async(V,Y)=>{if(V!=="thought"&&V!=="draft")return;let J=z_.current;if(V==="thought"){if(H_.current=Y,J)try{await n8(J,"thought",Y)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!Y)return;try{let w=J?await l8(J,"thought"):null;if(w?.text)T_.current=w.text;t((P)=>({...P||{text:"",totalLines:0},fullText:T_.current||P?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:P?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(O_.current=Y,J)try{await n8(J,"draft",Y)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!Y)return;try{let w=J?await l8(J,"draft"):null;if(w?.text)P_.current=w.text;h((P)=>({...P||{text:"",totalLines:0},fullText:P_.current||P?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:P?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),L=D(null),U=A(()=>{let V=o0.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);L.current=U;let k=A((V)=>{let Y=o0.current;if(!Y||typeof V!=="function"){V?.();return}let{currentHashtag:J,searchQuery:w}=F0.current||{},P=!(w&&!J),g=P?Y.scrollHeight-Y.scrollTop:Y.scrollTop;V(),requestAnimationFrame(()=>{let e=o0.current;if(!e)return;if(P){let F_=Math.max(e.scrollHeight-g,0);e.scrollTop=F_}else{let F_=Math.max(e.scrollHeight-e.clientHeight,0),c=Math.min(g,F_);e.scrollTop=c}})},[]),y=A((V)=>{let Y=o0.current;if(!Y||typeof V!=="function"){V?.();return}let J=Y.scrollTop;V(),requestAnimationFrame(()=>{let w=o0.current;if(!w)return;let P=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(J,P)})},[]),p="Queued as a follow-up (one-at-a-time).",s="⁣",a=A((V)=>{if(!V||!Array.isArray(V))return V;let Y=Y_.current,J=new Set(Y),w=V.filter((P)=>{if(J.has(P?.id))return!1;if(P?.data?.is_bot_message){let g=P?.data?.content;if(g===p||g===s)return!1}return!0});return w.length===V.length?V:w},[]),{posts:o,setPosts:f,hasMore:W_,setHasMore:O0,hasMoreRef:t0,loadPosts:K0,refreshTimeline:W0,loadMore:e0,loadMoreRef:d$}=J8({preserveTimelineScroll:k,preserveTimelineScrollTop:y,chatJid:$}),j2=a_(()=>a(o),[o,l_,a]),V2=A(()=>{let V=H0.current;if(!V)return;f((Y)=>Y?Y.filter((J)=>J.id!==V):Y),H0.current=null},[f]),{handleSplitterMouseDown:s8,handleSplitterTouchStart:o8,handleEditorSplitterMouseDown:r8,handleEditorSplitterTouchStart:a8,handleDockSplitterMouseDown:t8,handleDockSplitterTouchStart:e8}=E8({appShellRef:D$,sidebarWidthRef:I$,editorWidthRef:E$,dockHeightRef:r0}),a4=A(()=>{if(!v_.current)return;v_.current=!1,D_.current=0,U_.current=null,z_.current=null,R_(null),H_.current=!1,O_.current=!1;let V=(P_.current||"").trim();if(P_.current="",T_.current="",h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),$0.current=null,a0.current=null,!V){d({type:"error",title:"Response stalled - No content received"});return}let J=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),P=new Date().toISOString(),g={id:w,timestamp:P,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};H0.current=w,f((e)=>e?p2([...e,g]):[g]),L.current?.(),d(null)},[R_]);v(()=>{F0.current={currentHashtag:X,searchQuery:W}},[X,W]);let p_=A(()=>{let V=++f_.current,Y=$;Jj(Y).then((J)=>{if(V!==f_.current)return;if(C0.current!==Y)return;let w=S_.current,P=Array.isArray(J?.items)?J.items.map((g)=>({...g})).filter((g)=>!w.has(g.row_id)):[];if(P.length){o_((g)=>{if(g.length===P.length&&g.every((e,F_)=>e.row_id===P[F_].row_id))return g;return P});return}w.clear(),M(0),o_((g)=>g.length===0?g:[])}).catch(()=>{if(V!==f_.current)return;if(C0.current!==Y)return;o_((J)=>J.length===0?J:[])})},[M,$,o_]),_$=A(async()=>{let V=$;try{let Y=await s4(V);if(C0.current!==V)return;if(Y)k_(Y)}catch(Y){if(C0.current!==V)return;console.warn("Failed to fetch agent context:",Y)}},[$]),$$=A(async()=>{let V=$;try{let Y=await d8(V);if(C0.current!==V)return null;if(!Y||Y.status!=="active"||!Y.data){if(g_.current){let{currentHashtag:P,searchQuery:g}=F0.current||{};if(!P&&!g)W0()}return g_.current=!1,B(),M0.current=null,d(null),h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),$0.current=null,Y??null}g_.current=!0;let J=Y.data;M0.current=J;let w=J.turn_id||J.turnId;if(w)B_(w);if(l0({running:!0,clearSilence:!0}),n$(),d(J),Y.thought&&Y.thought.text)t((P)=>{if(P&&P.text&&P.text.length>=Y.thought.text.length)return P;return T_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)h((P)=>{if(P&&P.text&&P.text.length>=Y.draft.text.length)return P;return P_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B,n$,l0,W0,B_]),U1=A(async()=>{if(!v_.current)return null;if($0.current)return null;let V=z_.current||null,Y=f0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===V&&J-Y.lastAttemptAt<i4)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=V;try{let{currentHashtag:w,searchQuery:P}=F0.current||{};if(!w&&!P)await W0();return await p_(),await $$()}finally{Y.inFlight=!1}},[$$,p_,W0]);v(()=>{let V=Math.min(1000,Math.max(100,Math.floor(h4/2))),Y=setInterval(()=>{if(!v_.current)return;if($0.current)return;let J=U_.current;if(!J)return;let w=Date.now(),P=w-J,g=f2(M0.current);if(P>=y8){if(!g)d({type:"waiting",title:"Re-syncing after a quiet period…"});U1();return}if(P>=h4){if(w-D_.current>=i4){if(!g){let e=Math.floor(P/1000);d({type:"waiting",title:`Waiting for model… No events for ${e}s`})}D_.current=w,U1()}}},V);return()=>clearInterval(Y)},[U1]);let _9=A((V)=>{if(K(V),V!=="connected"){d(null),h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),$0.current=null,B();return}if(!J2.current){J2.current=!0,$$(),_$();return}let{currentHashtag:Y,searchQuery:J}=F0.current;if(!Y&&!J)W0();$$(),p_(),_$()},[B,W0,$$,p_,_$]),$9=A(async(V)=>{O(V),f(null),await K0(V)},[K0]),j9=A(async()=>{O(null),F(null),f(null),await K0()},[K0]),Z9=A(async(V,Y=u)=>{if(!V||!V.trim())return;let J=Y==="root"||Y==="all"?Y:"current";R(J),F(V.trim()),O(null),f(null);try{let w=await h8(V.trim(),50,0,$,J,X0);f(w.results),O0(!1)}catch(w){console.error("Failed to search:",w),f([])}},[$,X0,u]),N9=A(()=>{m(!0),F(null),O(null),R("current"),f([])},[]),z9=A(()=>{m(!1),F(null),K0()},[K0]),wj=A(()=>{},[]),K9=A(async(V)=>{if(!V)return;let Y=V.id,J=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():$,w=j2?.filter((g)=>g?.data?.thread_id===Y&&g?.id!==Y).length||0;if(w>0){if(!window.confirm(`Delete this message and its ${w} replies?`))return}let P=(g)=>{if(!g.length)return;E0((F_)=>{let c=new Set(F_);return g.forEach((X_)=>c.add(X_)),c}),setTimeout(()=>{if(y(()=>{f((F_)=>F_?F_.filter((c)=>!g.includes(c.id)):F_)}),E0((F_)=>{let c=new Set(F_);return g.forEach((X_)=>c.delete(X_)),c}),t0.current)d$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await i8(Y,w>0,J);if(g?.ids?.length)P(g.ids)}catch(g){let e=g?.message||"";if(w===0&&e.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await i8(Y,!0,J);if(c?.ids?.length)P(c.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${e}`)}},[$,j2,y]),t4=A(async()=>{try{let V=await Bj();u_(w8(V));let Y=V?.user||{};m$((w)=>{let P=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",g=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,e=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(w.name===P&&w.avatar_url===g&&w.avatar_background===e)return w;return{name:P,avatar_url:g,avatar_background:e}});let J=(V?.agents||[]).find((w)=>w.id==="default");h$(J?.name,J?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=$,Y=await s4(V);if(C0.current!==V)return;if(Y)k_(Y)}catch{}},[h$,$]);v(()=>{t4();let V=Q2("sidebarWidth",null),Y=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(I$.current=Y,D$.current)D$.current.style.setProperty("--sidebar-width",`${Y}px`)},[t4]);let F1=V0||__!==null,e4=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:w}=V;if(!J&&w===void 0)return;let P=c0.current?.[Y]||{id:Y},g=P.name||null,e=P.avatar_url??P.avatarUrl??P.avatar??null,F_=!1,c=!1;if(J&&J!==P.name)g=J,c=!0;if(w!==void 0){let X_=typeof w==="string"?w.trim():null,r_=typeof e==="string"?e.trim():null,J_=X_||null;if(J_!==(r_||null))e=J_,F_=!0}if(!c&&!F_)return;if(u_((X_)=>{let J_={...X_[Y]||{id:Y}};if(c)J_.name=g;if(F_)J_.avatar_url=e;return{...X_,[Y]:J_}}),Y==="default")h$(g,e,F_?Date.now():null)},[h$]),_3=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.user_name??V.userName,J=V.user_avatar??V.userAvatar,w=V.user_avatar_background??V.userAvatarBackground;if(Y===void 0&&J===void 0&&w===void 0)return;m$((P)=>{let g=typeof Y==="string"&&Y.trim()?Y.trim():P.name||"You",e=J===void 0?P.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,F_=w===void 0?P.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(P.name===g&&P.avatar_url===e&&P.avatar_background===F_)return P;return{name:g,avatar_url:e,avatar_background:F_}})},[]),H1=A((V)=>{if(!V||typeof V!=="object")return;let Y=V.model??V.current;if(Y!==void 0)h_(Y);if(V.thinking_level!==void 0)A_(V.thinking_level??null);if(V.supports_thinking!==void 0)s_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)E_(V.provider_usage??null)},[]),y2=A(()=>{let V=$;Qj(V).then((Y)=>{if(C0.current!==V)return;if(Y)H1(Y)}).catch(()=>{})},[H1,$]),v0=A(()=>{let V=$,Y=(J)=>Array.isArray(J)?J.filter((w)=>w&&typeof w.chat_jid==="string"&&typeof w.agent_name==="string"&&w.agent_name.trim()):[];Promise.all([Uj().catch(()=>({chats:[]})),o4().catch(()=>({chats:[]}))]).then(([J,w])=>{if(C0.current!==V)return;let P=Y(J?.chats),g=Y(w?.chats);if(g.length===0){j0(P);return}let e=g.find((G0)=>G0.chat_jid===V)||P.find((G0)=>G0.chat_jid===V)||null,F_=String(e?.root_chat_jid||e?.chat_jid||V||"").trim(),c=F_?g.filter((G0)=>String(G0.root_chat_jid||G0.chat_jid||"").trim()===F_):g,X_=new Map(P.map((G0)=>[G0.chat_jid,G0])),J_=(c.length>0?c:g).map((G0)=>{let X2=X_.get(G0.chat_jid);return X2?{...G0,...X2,is_active:X2.is_active??G0.is_active}:G0});j0(J_)}).catch(()=>{if(C0.current!==V)return;j0([])})},[$]),S0=A(()=>{o4(X0).then((V)=>{let Y=Array.isArray(V?.chats)?V.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];m0(Y)}).catch(()=>{})},[X0]),Y9=A((V)=>{let Y=V?.row_id;if(Y==null)return;S_.current.add(Y),o_((J)=>J.filter((w)=>w?.row_id!==Y)),Dj(Y,d4($)).then(()=>{p_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),y_("Failed to steer message","The queued message could not be sent as steering.","warning"),S_.current.delete(Y),p_()})},[$,p_,o_,y_]),W9=A((V)=>{let Y=V?.row_id;if(Y==null)return;let J=G_.current.filter((w)=>w?.row_id!==Y).length;S_.current.add(Y),M(J),o_((w)=>w.filter((P)=>P?.row_id!==Y)),Ej(Y,d4($)).then(()=>{p_()}).catch((w)=>{console.warn("[queue] Failed to remove queued item:",w),y_("Failed to remove message","The queued message could not be removed.","warning"),S_.current.delete(Y),p_()})},[M,$,p_,o_,y_]),J1=A((V)=>{if(!V||typeof V!=="object")return;if(v0(),S0(),V?.queued==="followup"||V?.queued==="steer"){p_();return}let Y=V?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))p_()},[v0,S0,p_]),D1=A(()=>{if(b0.current)b0.current.abort(),b0.current=null;m_(null)},[]),c2=A(async(V)=>{let Y=String(V||"").trim();if(!Y)return y_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(b0.current)b0.current.abort();let J=new AbortController;b0.current=J,m_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let w=await kj(Y,{signal:J.signal,chatJid:z6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,g)=>{if(P==="side_prompt_start")m_((e)=>e?{...e,status:"running"}:e)},onThinkingDelta:(P)=>{m_((g)=>g?{...g,thinking:`${g.thinking||""}${P||""}`}:g)},onTextDelta:(P)=>{m_((g)=>g?{...g,answer:`${g.answer||""}${P||""}`}:g)}});if(b0.current!==J)return!0;m_((P)=>P?{...P,answer:w?.result||P.answer||"",thinking:w?.thinking||P.thinking||"",model:w?.model||null,status:"success",error:null}:P)}catch(w){if(J.signal.aborted)return!0;m_((P)=>P?{...P,status:"error",error:w?.payload?.error||w?.message||"BTW request failed."}:P)}finally{if(b0.current===J)b0.current=null}return!0},[$,y_]),G9=A(async({content:V})=>{let Y=N6(V);if(!Y)return!1;if(Y.type==="help")return y_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return D1(),y_("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await c2(Y.question),!0;return!1},[D1,c2,y_]),V9=A(()=>{if(M_?.question)c2(M_.question)},[M_,c2]),X9=A(async()=>{let V=W6(M_);if(!V)return;try{let Y=await L2("default",V,null,[],F1?"queue":null,$);J1(Y),y_(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){y_("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[M_,J1,F1,y_]),A2=A(()=>{y2(),v0(),S0(),p_(),_$()},[y2,v0,S0,p_,_$]);v(()=>{A2();let V=setInterval(()=>{y2(),v0(),S0(),p_()},60000);return()=>clearInterval(V)},[A2,y2,v0,S0,p_]),v(()=>{S0()},[S0]),v(()=>{let V=!1;if(f(null),X)return K0(X),()=>{V=!0};if(W)return h8(W,50,0,$,u,X0).then((Y)=>{if(V)return;f(Y.results),O0(!1)}).catch((Y)=>{if(V)return;console.error("Failed to search:",Y),f([]),O0(!1)}),()=>{V=!0};return K0(),()=>{V=!0}},[$,X,W,u,X0,K0,O0,f]),v(()=>{let V=X$.current||$;g$.current.set(V,l())},[$,l]),v(()=>{let V=X$.current||$;if(V===$)return;g$.current.set(V,l()),X$.current=$,S_.current.clear(),V_(g$.current.get($)||null),p_(),$$(),_$()},[$,$$,_$,p_,V_,l]);let q9=A(()=>{let{currentHashtag:V,searchQuery:Y}=F0.current||{};if(!V&&!Y)W0();A2()},[A2,W0]),E1=A((V,Y)=>{let J=Y?.turn_id,w=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,g=w?w===$:V==="connected"||V==="workspace_update";if(g)e4(Y),_3(Y);if(V==="ui_theme"){r3(Y);return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))n$()}if(V==="connected"){d(null),h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),$0.current=null,B();let c=$;d8(c).then((J_)=>{if(C0.current!==c)return;if(!J_||J_.status!=="active"||!J_.data)return;let G0=J_.data,X2=G0.turn_id||G0.turnId;if(X2)B_(X2);if(l0({clearSilence:!0}),G2(G0),J_.thought&&J_.thought.text)T_.current=J_.thought.text,t({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)P_.current=J_.draft.text,h({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:X_,searchQuery:r_}=F0.current||{};if(!X_&&!r_)W0();A2();return}if(V==="agent_status"){if(!g){if(Y?.type==="done"||Y?.type==="error")v0(),S0();return}if(Y.type==="done"||Y.type==="error"){if(J&&z_.current&&J!==z_.current)return;if(Y.type==="done"){x_(J||z_.current);let{currentHashtag:c,searchQuery:X_}=F0.current||{};if(!c&&!X_)W0();if(Y.context_usage)k_(Y.context_usage)}if(g_.current=!1,B(),S_.current.clear(),v0(),p_(),h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null),Y.type==="error")d({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(J)B_(J);if(l0({running:!0,clearSilence:!0}),Y.type==="thinking")P_.current="",T_.current="",h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0});M0.current=Y,d((c)=>{if(c&&c.type===Y.type&&c.title===Y.title)return c;return Y})}return}if(V==="agent_steer_queued"){if(!g)return;if(J&&z_.current&&J!==z_.current)return;let c=J||z_.current;if(!c)return;j_.current=c,I_(c);return}if(V==="agent_followup_queued"){if(!g)return;let c=Y?.row_id,X_=Y?.content;if(c!=null&&typeof X_==="string"&&X_.trim())o_((r_)=>{if(r_.some((J_)=>J_?.row_id===c))return r_;return[...r_,{row_id:c,content:X_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});p_();return}if(V==="agent_followup_consumed"){if(!g)return;let c=Y?.row_id;if(c!=null){let X_=G_.current.filter((r_)=>r_.row_id!==c).length;M(X_),o_((r_)=>r_.filter((J_)=>J_.row_id!==c))}p_(),W0();return}if(V==="agent_followup_removed"){if(!g)return;let c=Y?.row_id;if(c!=null){let X_=G_.current.filter((r_)=>r_.row_id!==c).length;S_.current.add(c),M(X_),o_((r_)=>r_.filter((J_)=>J_.row_id!==c))}p_();return}if(V==="agent_draft_delta"){if(!g)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);if(l0({running:!0,clearSilence:!0}),Y?.reset)P_.current="";if(Y?.delta)P_.current+=Y.delta;let c=Date.now();if(!H$.current||c-H$.current>=100){H$.current=c;let X_=P_.current,r_=l4(X_);if(O_.current)h((J_)=>({text:J_?.text||"",totalLines:r_,fullText:X_}));else h({text:X_,totalLines:r_})}return}if(V==="agent_draft"){if(!g)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);l0({running:!0,clearSilence:!0});let c=Y.text||"",X_=Y.mode||(Y.kind==="plan"?"replace":"append"),r_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(X_==="replace")d_(c);else d_((J_)=>(J_||"")+c);else if(!O_.current)P_.current=c,h({text:c,totalLines:r_});return}if(V==="agent_thought_delta"){if(!g)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);if(l0({running:!0,clearSilence:!0}),Y?.reset)T_.current="";if(typeof Y?.delta==="string")T_.current+=Y.delta;let c=Date.now();if(H_.current&&(!J$.current||c-J$.current>=100)){J$.current=c;let X_=T_.current;t((r_)=>({text:r_?.text||"",totalLines:l4(X_),fullText:X_}))}return}if(V==="agent_thought"){if(!g)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B_(J);l0({running:!0,clearSilence:!0});let c=Y.text||"",X_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)T_.current=c,t({text:c,totalLines:X_});return}if(V==="model_changed"){if(!g)return;if(Y?.model!==void 0)h_(Y.model);if(Y?.thinking_level!==void 0)A_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)s_(Boolean(Y.supports_thinking));let c=$;s4(c).then((X_)=>{if(C0.current!==c)return;if(X_)k_(X_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(m8(V)){if(!g)return;if(g8(V,Y),V==="extension_ui_notify"&&typeof Y?.message==="string")y_(Y.message,null,Y?.type||"info");if(V==="extension_ui_error"&&typeof Y?.error==="string")y_("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:e,searchQuery:F_}=F0.current;if(V==="agent_response"){if(!g)return;V2(),a0.current={post:Y,turnId:z_.current}}if(!e&&!F_&&g&&(V==="new_post"||V==="new_reply"||V==="agent_response"))f((c)=>{if(!c)return[Y];if(c.some((X_)=>X_.id===Y.id))return c;return[...c,Y]}),L.current?.();if(V==="interaction_updated"){if(!g)return;f((c)=>{if(!c)return c;if(!c.some((X_)=>X_.id===Y.id))return c;return c.map((X_)=>X_.id===Y.id?Y:X_)})}if(V==="interaction_deleted"){if(!g)return;let c=Y?.ids||[];if(c.length){y(()=>{f((J_)=>J_?J_.filter((G0)=>!c.includes(G0.id)):J_)});let{currentHashtag:X_,searchQuery:r_}=F0.current;if(t0.current&&!X_&&!r_)d$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B,n$,$,d$,l0,x_,y,v0,S0,W0,V2,B_,G2,e4,_3,y2,p_,o_]);v(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=E1,V.reset=()=>{V2(),B(),d(null),h({text:"",totalLines:0}),d_(""),t({text:"",totalLines:0}),Z_(null)},V.finalize=()=>a4(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[B,a4,E1,V2]),F8({handleSseEvent:E1,handleConnectionStatusChange:_9,loadPosts:K0,onWake:q9,chatJid:$}),v(()=>{if(!j2||j2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let Y=V.slice(5);_2(Y),history.replaceState(null,"",location.pathname+location.search)},[j2,_2]);let k1=__!==null;v(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:w}=F0.current||{},P=!J&&!w;if(k1){if(P)W0();p_(),$$(),_$()}else{if(P)W0();$$(),_$()}},k1?15000:60000);return()=>clearInterval(Y)},[z,k1,$$,_$,p_,W0]),v(()=>{return c8(()=>{$$(),_$(),p_()})},[$$,_$,p_]);let L9=A(()=>{A$((V)=>!V)},[]),$3=A((V)=>{if(typeof window>"u")return;let Y=String(V||"").trim();if(!Y||Y===$)return;let J=H2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),j3=A(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;let V=w_.agent_name||"",Y=w_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let w=window.prompt("Agent handle (without @)",V);if(w===null)return;try{let P=await Fj(w_.chat_jid,{displayName:J,agentName:w});await Promise.allSettled([v0(),S0()]);let g=P?.branch?.agent_name||String(w||"").trim()||V;y_("Branch renamed",`This chat is now @${g}.`,"info",3500)}catch(P){let g=P instanceof Error?P.message:String(P||"Could not rename branch.");y_("Could not rename branch",g||"Could not rename branch.","warning",5000)}},[w_,v0,S0,y_]),Z3=A(async()=>{if(typeof window>"u"||!w_?.chat_jid)return;if(w_.chat_jid===(w_.root_chat_jid||w_.chat_jid)){y_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=w_.display_name||`@${w_.agent_name||w_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Hj(w_.chat_jid),await Promise.allSettled([v0(),S0()]);let w=w_.root_chat_jid||"web:default";y_("Branch pruned",`${Y} has been archived.`,"info",3000);let P=H2(window.location.href,w,{chatOnly:j});window.location.assign(P)}catch(w){let P=w instanceof Error?w.message:String(w||"Could not prune branch.");y_("Could not prune branch",P||"Could not prune branch.","warning",5000)}},[j,w_,v0,S0,y_]);v(()=>{if(!Z||typeof window>"u")return;let V=!1;return(async()=>{try{T({status:"running",message:"Preparing a new chat branch…"});let Y=await b2(N);if(V)return;let J=Y?.branch,w=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");let P=H2(window.location.href,w,{chatOnly:!0});window.location.replace(P)}catch(Y){if(V)return;T({status:"error",message:Q1(Y)})}})(),()=>{V=!0}},[Z,N]);let O9=A(async()=>{if(typeof window>"u")return;try{let Y=(await b2($))?.branch,J=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([v0(),S0()]);let w=Y?.agent_name?`@${Y.agent_name}`:J;y_("New branch created",`Switched to ${w}.`,"info",2500);let P=H2(window.location.href,J,{chatOnly:j});window.location.assign(P)}catch(V){y_("Could not create branch",Q1(V),"warning",5000)}},[j,$,v0,S0,y_]),B9=A(async()=>{if(typeof window>"u"||G)return;let V=I8($);if(!V){y_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let J=f8(window.location.href,$,{chatOnly:!0});if(!window.open(J,V.target))y_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=x8(V);if(!Y){y_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}C8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let w=(await b2($))?.branch,P=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let e=await u1();j0(Array.isArray(e?.chats)?e.chats:[])}catch{}try{let e=await o4(X0);m0(Array.isArray(e?.chats)?e.chats:[])}catch{}let g=H2(window.location.href,P,{chatOnly:!0});T8(Y,g)}catch(J){S8(Y),y_("Could not open branch window",Q1(J),"error",5000)}},[$,X0,G,y_]);v(()=>{if(!A0)return;if(typeof window>"u")return;let V=D$.current;if(!V)return;if(!E$.current){let Y=Q2("editorWidth",null),J=I$.current||280;E$.current=Number.isFinite(Y)?Y:J}if(V.style.setProperty("--editor-width",`${E$.current}px`),!r0.current){let Y=Q2("dockHeight",null);r0.current=Number.isFinite(Y)?Y:200}V.style.setProperty("--dock-height",`${r0.current}px`)},[A0]),v(()=>{if(!R0||j)return;let V=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),y0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[y0,R0,j]);let Q9=Boolean(L_&&L_===(__?.turn_id||Q_));if(Z)return Q`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${K$.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${K$.message}</p>
                    </div>
                </div>
            </div>
        `;return Q`
        <div class=${`app-shell${k0?"":" workspace-collapsed"}${A0?" editor-open":""}${j?" chat-only":""}`} ref=${D$}>
            ${!j&&Q`
                <${L8}
                    onFileSelect=${a$}
                    visible=${k0}
                    active=${k0||A0}
                    onOpenEditor=${Z0}
                    onOpenTerminalTab=${b$}
                    onToggleTerminal=${R0?y0:void 0}
                    terminalVisible=${Boolean(R0&&P0)}
                />
                <button
                    class=${`workspace-toggle-tab${k0?" open":" closed"}`}
                    onClick=${L9}
                    title=${k0?"Hide workspace":"Show workspace"}
                    aria-label=${k0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${s8} onTouchStart=${o8}></div>
            `}
            ${V$&&Q`
                <div class="editor-pane-container">
                    ${A0&&Q`
                        <${B8}
                            tabs=${w$}
                            activeId=${w0}
                            onActivate=${I0}
                            onClose=${Q$}
                            onCloseOthers=${x0}
                            onCloseAll=${i0}
                            onTogglePin=${P$}
                            onTogglePreview=${U$}
                            previewTabs=${Y2}
                            onToggleDock=${R0?y0:void 0}
                            dockVisible=${R0&&P0}
                        />
                    `}
                    ${A0&&Q`<div class="editor-pane-host" ref=${r$}></div>`}
                    ${A0&&w0&&Y2.has(w0)&&Q`
                        <${U8}
                            getContent=${()=>q0.current?.getContent?.()}
                            path=${w0}
                            onClose=${()=>U$(w0)}
                        />
                    `}
                    ${R0&&P0&&Q`<div class="dock-splitter" onMouseDown=${t8} onTouchStart=${e8}></div>`}
                    ${R0&&Q`<div class=${`dock-panel${P0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${y0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${u$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${r8} onTouchStart=${a8}></div>
            `}
            <div class="container">
                ${W&&P8()&&Q`<div class="search-results-spacer"></div>`}
                ${j&&Q`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${w_?.display_name||w_?.agent_name?`@${w_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${w_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${u0.length>1&&Q`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(V)=>$3(V.currentTarget.value)}
                                    >
                                        ${u0.map((V)=>Q`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name}${V.display_name?` — ${V.display_name}`:""}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${w_?.chat_jid&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${j3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${w_?.chat_jid&&w_.chat_jid!==(w_.root_chat_jid||w_.chat_jid)&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${Z3}
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
                ${(X||W)&&Q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${j9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${W} · ${p0}`}</span>
                    </div>
                `}
                <${C6}
                    posts=${j2}
                    hasMore=${W_}
                    onLoadMore=${e0}
                    timelineRef=${o0}
                    onHashtagClick=${$9}
                    onMessageRef=${l$}
                    onScrollToMessage=${_2}
                    onFileRef=${W2}
                    onPostClick=${void 0}
                    onDeletePost=${K9}
                    emptyMessage=${X?`No posts with #${X}`:W?`No results for "${W}"`:void 0}
                    agents=${b_}
                    user=${F$}
                    reverse=${!(W&&!X)}
                    removingPostIds=${d0}
                    searchQuery=${W}
                />
                <${Q6}
                    status=${__}
                    draft=${K_}
                    plan=${q_}
                    thought=${$_}
                    pendingRequest=${N_}
                    intent=${i}
                    turnId=${Q_}
                    steerQueued=${Q9}
                    onPanelToggle=${T0}
                />
                <${G6}
                    session=${M_}
                    onClose=${D1}
                    onRetry=${V9}
                    onInject=${X9}
                />
                <${m3}
                    onPost=${()=>{K0(),U()}}
                    onFocus=${U}
                    searchMode=${b}
                    searchScope=${u}
                    onSearch=${Z9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${N9}
                    onExitSearch=${z9}
                    fileRefs=${E}
                    onRemoveFileRef=${i$}
                    onClearFileRefs=${t$}
                    onSetFileRefs=${L$}
                    messageRefs=${x}
                    onRemoveMessageRef=${D2}
                    onClearMessageRefs=${E2}
                    onSetMessageRefs=${$2}
                    onSwitchChat=${$3}
                    onRenameSession=${j3}
                    onCreateSession=${O9}
                    onDeleteSession=${Z3}
                    activeEditorPath=${j?null:w0}
                    onAttachEditorFile=${j?void 0:e$}
                    onOpenFilePill=${W2}
                    followupQueueCount=${r}
                    followupQueueItems=${l_}
                    onInjectQueuedFollowup=${Y9}
                    onRemoveQueuedFollowup=${W9}
                    onSubmitIntercept=${G9}
                    onMessageResponse=${J1}
                    onSubmitError=${k2}
                    onPopOutChat=${G?void 0:B9}
                    isAgentActive=${F1}
                    activeChatAgents=${Y0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${N0}
                    modelUsage=${z0}
                    thinkingLevel=${C_}
                    supportsThinking=${i_}
                    contextUsage=${J0}
                    notificationsEnabled=${y$}
                    notificationPermission=${Y$}
                    onToggleNotifications=${R$}
                    onModelChange=${h_}
                    onModelStateChange=${H1}
                />
                <${U6}
                    request=${N_}
                    onRespond=${()=>{Z_(null),$0.current=null}}
                />
            </div>
        </div>
    `}function Aj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return Q`<${yj} locationParams=${_} />`}M3(Q`<${Aj} />`,document.getElementById("app"));

//# debugId=C37827B3CFC0BA2E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
