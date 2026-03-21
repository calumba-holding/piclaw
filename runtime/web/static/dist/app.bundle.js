var d9=Object.defineProperty;var s9=(_)=>_;function o9(_,$){this[_]=s9.bind(null,$)}var r9=(_,$)=>{for(var j in $)d9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:o9.bind($,j)})};var G1,_0,S3,a9,d$,y3,R3,v3,u3,n1,c1,h1,t9,K1={},Y1=[],e9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W1=Array.isArray;function I$(_,$){for(var j in $)_[j]=$[j];return _}function d1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function m3(_,$,j){var Z,N,K,Y={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:Y[K]=$[K];if(arguments.length>2&&(Y.children=arguments.length>3?G1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)Y[K]===void 0&&(Y[K]=_.defaultProps[K]);return j1(_,Y,Z,N,null)}function j1(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++S3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(K),K}function X1(_){return _.children}function Z1(_,$){this.props=_,this.context=$}function U2(_,$){if($==null)return _.__?U2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?U2(_):null}function _5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=I$({},$);K.__v=$.__v+1,_0.vnode&&_0.vnode(K),s1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?U2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,h3(Z,K,N),$.__e=$.__=null,K.__e!=j&&g3(K)}}function g3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),g3(_)}function k3(_){(!_.__d&&(_.__d=!0)&&d$.push(_)&&!z1.__r++||y3!=_0.debounceRendering)&&((y3=_0.debounceRendering)||R3)(z1)}function z1(){try{for(var _,$=1;d$.length;)d$.length>$&&d$.sort(v3),_=d$.shift(),$=d$.length,_5(_)}finally{d$.length=z1.__r=0}}function p3(_,$,j,Z,N,K,Y,X,L,q,Q){var V,H,w,T,m,g,A,I=Z&&Z.__k||Y1,c=$.length;for(L=$5(j,$,I,L,c),V=0;V<c;V++)(w=j.__k[V])!=null&&(H=w.__i!=-1&&I[w.__i]||K1,w.__i=V,g=s1(_,w,H,N,K,Y,X,L,q,Q),T=w.__e,w.ref&&H.ref!=w.ref&&(H.ref&&o1(H.ref,null,w),Q.push(w.ref,w.__c||T,w)),m==null&&T!=null&&(m=T),(A=!!(4&w.__u))||H.__k===w.__k?L=c3(w,L,_,A):typeof w.type=="function"&&g!==void 0?L=g:T&&(L=T.nextSibling),w.__u&=-7);return j.__e=m,L}function $5(_,$,j,Z,N){var K,Y,X,L,q,Q=j.length,V=Q,H=0;for(_.__k=Array(N),K=0;K<N;K++)(Y=$[K])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[K]=j1(null,Y,null,null,null):W1(Y)?Y=_.__k[K]=j1(X1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[K]=j1(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[K]=Y,L=K+H,Y.__=_,Y.__b=_.__b+1,X=null,(q=Y.__i=j5(Y,j,L,V))!=-1&&(V--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>Q?H--:N<Q&&H++),typeof Y.type!="function"&&(Y.__u|=4)):q!=L&&(q==L-1?H--:q==L+1?H++:(q>L?H--:H++,Y.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<Q;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=U2(X)),l3(X,X));return Z}function c3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=c3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=U2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function j5(_,$,j,Z){var N,K,Y,X=_.key,L=_.type,q=$[j],Q=q!=null&&(2&q.__u)==0;if(q===null&&X==null||Q&&X==q.key&&L==q.type)return j;if(Z>(Q?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((q=$[Y=N>=0?N--:K++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return Y}return-1}function E3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||e9.test($)?j:j+"px"}function $1(_,$,j,Z,N){var K,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||E3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||E3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(u3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=n1,_.addEventListener($,K?h1:c1,K)):_.removeEventListener($,K?h1:c1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function w3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=n1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function s1(_,$,j,Z,N,K,Y,X,L,q){var Q,V,H,w,T,m,g,A,I,c,y,S,s,a,d,$_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(Q=_0.__b)&&Q($);_:if(typeof $_=="function")try{if(A=$.props,I=$_.prototype&&$_.prototype.render,c=(Q=$_.contextType)&&Z[Q.__c],y=Q?c?c.props.value:Q.__:Z,j.__c?g=(V=$.__c=j.__c).__=V.__E:(I?$.__c=V=new $_(A,y):($.__c=V=new Z1(A,y),V.constructor=$_,V.render=N5),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),I&&V.__s==null&&(V.__s=V.state),I&&$_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=I$({},V.__s)),I$(V.__s,$_.getDerivedStateFromProps(A,V.__s))),w=V.props,T=V.state,V.__v=$,H)I&&$_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),I&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(I&&$_.getDerivedStateFromProps==null&&A!==w&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(A,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(A,V.__s,y)===!1){$.__v!=j.__v&&(V.props=A,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(h){h&&(h.__=$)}),Y1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(A,V.__s,y),I&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(w,T,m)})}if(V.context=y,V.props=A,V.__P=_,V.__e=!1,S=_0.__r,s=0,I)V.state=V.__s,V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),Y1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,S&&S($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++s<25);V.state=V.__s,V.getChildContext!=null&&(Z=I$(I$({},Z),V.getChildContext())),I&&!H&&V.getSnapshotBeforeUpdate!=null&&(m=V.getSnapshotBeforeUpdate(w,T)),a=Q!=null&&Q.type===X1&&Q.key==null?i3(Q.props.children):Q,X=p3(_,W1(a)?a:[a],$,j,Z,N,K,Y,X,L,q),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),g&&(V.__E=V.__=null)}catch(h){if($.__v=null,L||K!=null)if(h.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(d=K.length;d--;)d1(K[d]);i1($)}else $.__e=j.__e,$.__k=j.__k,h.then||i1($);_0.__e(h,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=Z5(j.__e,$,j,Z,N,K,Y,L,q);return(Q=_0.diffed)&&Q($),128&$.__u?void 0:X}function i1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(i1))}function h3(_,$,j){for(var Z=0;Z<j.length;Z++)o1(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){_0.__e(K,N.__v)}})}function i3(_){return typeof _!="object"||_==null||_.__b>0?_:W1(_)?_.map(i3):I$({},_)}function Z5(_,$,j,Z,N,K,Y,X,L){var q,Q,V,H,w,T,m,g=j.props||K1,A=$.props,I=$.type;if(I=="svg"?N="http://www.w3.org/2000/svg":I=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(q=0;q<K.length;q++)if((w=K[q])&&"setAttribute"in w==!!I&&(I?w.localName==I:w.nodeType==3)){_=w,K[q]=null;break}}if(_==null){if(I==null)return document.createTextNode(A);_=document.createElementNS(N,I,A.is&&A),X&&(_0.__m&&_0.__m($,K),X=!1),K=null}if(I==null)g===A||X&&_.data==A||(_.data=A);else{if(K=K&&G1.call(_.childNodes),!X&&K!=null)for(g={},q=0;q<_.attributes.length;q++)g[(w=_.attributes[q]).name]=w.value;for(q in g)w=g[q],q=="dangerouslySetInnerHTML"?V=w:q=="children"||(q in A)||q=="value"&&("defaultValue"in A)||q=="checked"&&("defaultChecked"in A)||$1(_,q,null,w,N);for(q in A)w=A[q],q=="children"?H=w:q=="dangerouslySetInnerHTML"?Q=w:q=="value"?T=w:q=="checked"?m=w:X&&typeof w!="function"||g[q]===w||$1(_,q,w,g[q],N);if(Q)X||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),p3($.type=="template"?_.content:_,W1(H)?H:[H],$,j,Z,I=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,Y,K?K[0]:j.__k&&U2(j,0),X,L),K!=null)for(q=K.length;q--;)d1(K[q]);X||(q="value",I=="progress"&&T==null?_.removeAttribute("value"):T!=null&&(T!==_[q]||I=="progress"&&!T||I=="option"&&T!=g[q])&&$1(_,q,T,g[q],N),q="checked",m!=null&&m!=_[q]&&$1(_,q,m,g[q],N))}return _}function o1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function l3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||o1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){_0.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&l3(Z[N],$,j||typeof _.type!="function");j||d1(_.__e),_.__c=_.__=_.__e=void 0}function N5(_,$,j){return this.constructor(_,j)}function n3(_,$,j){var Z,N,K,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],Y=[],s1($,_=(!Z&&j||$).__k=m3(X1,null,[_]),N||K1,K1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?G1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),h3(K,_,Y)}G1=Y1.slice,_0={__e:function(_,$,j,Z){for(var N,K,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(X){_=X}throw _}},S3=0,a9=function(_){return _!=null&&_.constructor===void 0},Z1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=I$({},this.state),typeof _=="function"&&(_=_(I$({},j),this.props)),_&&I$(j,_),_!=null&&this.__v&&($&&this._sb.push($),k3(this))},Z1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),k3(this))},Z1.prototype.render=X1,d$=[],R3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v3=function(_,$){return _.__v.__b-$.__v.__b},z1.__r=0,u3=/(PointerCapture)$|Capture$/i,n1=0,c1=w3(!1),h1=w3(!0),t9=0;var f2,O0,p1,A3,S2=0,d3=[],B0=_0,P3=B0.__b,b3=B0.__r,x3=B0.diffed,I3=B0.__c,M3=B0.unmount,C3=B0.__;function r1(_,$){B0.__h&&B0.__h(O0,_,S2||$),S2=0;var j=O0.__H||(O0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return S2=1,K5(o3,_)}function K5(_,$,j){var Z=r1(f2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):o3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=O0,!O0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var Q=Z.__c.__H.__.filter(function(H){return H.__c});if(Q.every(function(H){return!H.__N}))return!K||K.call(this,X,L,q);var V=Z.__c.props!==X;return Q.some(function(H){if(H.__N){var w=H.__[0];H.__=H.__N,H.__N=void 0,w!==H.__[0]&&(V=!0)}}),K&&K.call(this,X,L,q)||V};O0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:Y}=O0;O0.componentWillUpdate=function(X,L,q){if(this.__e){var Q=K;K=void 0,N(X,L,q),K=Q}Y&&Y.call(this,X,L,q)},O0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=r1(f2++,3);!B0.__s&&s3(j.__H,$)&&(j.__=_,j.u=$,O0.__H.__h.push(j))}function k(_){return S2=5,T_(function(){return{current:_}},[])}function T_(_,$){var j=r1(f2++,7);return s3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return S2=8,T_(function(){return _},$)}function Y5(){for(var _;_=d3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(N1),$.__h.some(l1),$.__h=[]}catch(j){$.__h=[],B0.__e(j,_.__v)}}}B0.__b=function(_){O0=null,P3&&P3(_)},B0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),C3&&C3(_,$)},B0.__r=function(_){b3&&b3(_),f2=0;var $=(O0=_.__c).__H;$&&(p1===O0?($.__h=[],O0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(N1),$.__h.some(l1),$.__h=[],f2=0)),p1=O0},B0.diffed=function(_){x3&&x3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(d3.push($)!==1&&A3===B0.requestAnimationFrame||((A3=B0.requestAnimationFrame)||z5)(Y5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),p1=O0=null},B0.__c=function(_,$){$.some(function(j){try{j.__h.some(N1),j.__h=j.__h.filter(function(Z){return!Z.__||l1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],B0.__e(Z,j.__v)}}),I3&&I3(_,$)},B0.unmount=function(_){M3&&M3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{N1(Z)}catch(N){$=N}}),j.__H=void 0,$&&B0.__e($,j.__v))};var T3=typeof requestAnimationFrame=="function";function z5(_){var $,j=function(){clearTimeout(Z),T3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);T3&&($=requestAnimationFrame(j))}function N1(_){var $=O0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),O0=$}function l1(_){var $=O0;_.__c=_.__(),O0=$}function s3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function o3(_,$){return typeof $=="function"?$(_):$}var r3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var Y=$[K++],X=$[K]?($[0]|=Y?1:2,j[$[K++]]):$[++K];Y===3?Z[0]=X:Y===4?Z[1]=Object.assign(Z[1]||{},X):Y===5?(Z[1]=Z[1]||{})[$[++K]]=X:Y===6?Z[1][$[++K]]+=X+"":Y?(N=_.apply(X,r3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},f3=new Map;function G5(_){var $=f3.get(this);return $||($=new Map,f3.set(this,$)),($=r3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,Y="",X="",L=[0],q=function(H){K===1&&(H||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,Y):K===3&&(H||Y)?(L.push(3,H,Y),K=2):K===2&&Y==="..."&&H?L.push(4,H,0):K===2&&Y&&!H?L.push(5,0,!0,Y):K>=5&&((Y||!H&&K===5)&&(L.push(K,0,Y,N),K=6),H&&(L.push(K,H,0,N),K=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(K===1&&q(),q(Q));for(var V=0;V<j[Q].length;V++)Z=j[Q][V],K===1?Z==="<"?(q(),L=[L],K=3):Y+=Z:K===4?Y==="--"&&Z===">"?(K=1,Y=""):Y=Z+Y[0]:X?Z===X?X="":Y+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),K=1):K&&(Z==="="?(K=5,N=Y,Y=""):Z==="/"&&(K<5||j[Q][V+1]===">")?(q(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),K=2):Y+=Z),K===3&&Y==="!--"&&(K=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var B=G5.bind(m3);var r0={};r9(r0,{uploadWorkspaceFile:()=>V1,uploadMedia:()=>N4,updateWorkspaceFile:()=>E5,submitAdaptiveCardAction:()=>K4,streamSidePrompt:()=>J5,steerAgentQueueItem:()=>D5,setWorkspaceVisibility:()=>g2,setAgentThoughtVisibility:()=>G4,sendPeerAgentMessage:()=>B5,sendAgentMessage:()=>B2,searchPosts:()=>t1,restoreChatBranch:()=>U5,respondToAgentRequest:()=>q1,renameWorkspaceFile:()=>Q4,renameChatBranch:()=>L5,removeAgentQueueItem:()=>H5,pruneChatBranch:()=>Q5,moveWorkspaceEntry:()=>U4,getWorkspaceTree:()=>m2,getWorkspaceRawUrl:()=>L1,getWorkspaceFile:()=>q4,getWorkspaceDownloadUrl:()=>Q1,getWorkspaceBranch:()=>k5,getTimeline:()=>R2,getThumbnailUrl:()=>W4,getThread:()=>e1,getPostsByHashtag:()=>a1,getMediaUrl:()=>W$,getMediaText:()=>X4,getMediaInfo:()=>O2,getMediaBlob:()=>y5,getChatBranches:()=>V5,getAgents:()=>j4,getAgentThought:()=>z4,getAgentStatus:()=>Z4,getAgentQueueState:()=>F5,getAgentModels:()=>u2,getAgentContext:()=>O5,getActiveChatAgents:()=>$4,forkChatBranch:()=>v2,deleteWorkspaceFile:()=>B4,deletePost:()=>_4,createWorkspaceFile:()=>L4,createReply:()=>q5,createPost:()=>X5,attachWorkspaceFile:()=>V4,addToWhitelist:()=>Y4,SSEClient:()=>U1});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function a3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function W5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:X}=await j.read();if(X)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let Q=a3(q);if(Q)$(Q.event,Q.data)}}N+=Z.decode();let K=a3(N);if(K)$(K.event,K.data)}async function R2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function a1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function t1(_,$=50,j=0,Z=null,N="current",K=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${X}${L}`)}async function e1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function X5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function q5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function _4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function B2(_,$,j=null,Z=[],N=null,K=null){let Y=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function $4(){return f_("/agent/active-chats")}async function V5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return f_(`/agent/branches${Z}`)}async function v2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function L5(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Q5(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function U5(_,$={}){return f_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function B5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function j4(){return f_("/agent/roster")}async function Z4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function O5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function F5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function H5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function u2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function N4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function q1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function K4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function J5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await W5(j,(K,Y)=>{if($.onEvent?.(K,Y),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(K==="side_prompt_done")Z=Y;else if(K==="side_prompt_error")N=Y}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function Y4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function z4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function G4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function W$(_){return`/media/${_}`}function W4(_){return`/media/${_}/thumbnail`}async function O2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function X4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function y5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function m2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function k5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function q4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function E5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function V4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function V1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),Y=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+Y,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function L4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function Q4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function U4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function B4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function g2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Q1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class U1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function a0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function i_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function F2(_,$=!1){let j=a0(_);if(j===null)return $;return j==="true"}function H2(_,$=null){let j=a0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function B1(_){return String(_||"").trim().toLowerCase()}function O4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return B1($[1]||"")}function t3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=B1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function e3(_,$,j={}){let Z=O4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return t3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return B1(K?.agent_name).startsWith(Z)})}function F4(_){let $=B1(_);return $?`@${$} `:""}function _8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return t3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function $8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:Y="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,Q=Y==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${X} title=${j||$} onClick=${N}>
      ${Q}
      <span class=${L}>${$}</span>
      ${Z&&B`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var w5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function A5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,K="Compact context",X=`${Z!=null?`Context: ${j8(Z)} / ${j8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,q=2*Math.PI*9,Q=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${X}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${Q} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function j8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Z8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:Y,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:w,activeModel:T=null,modelUsage:m=null,thinkingLevel:g=null,supportsThinking:A=!1,contextUsage:I=null,onContextCompact:c,notificationsEnabled:y=!1,notificationPermission:S="default",onToggleNotifications:s,onModelChange:a,onModelStateChange:d,activeEditorPath:$_=null,onAttachEditorFile:h,onOpenFilePill:z_,followupQueueItems:n_=[],onInjectQueuedFollowup:u_,onRemoveQueuedFollowup:n,onSubmitIntercept:Z_,onMessageResponse:t,onPopOutChat:G_,isAgentActive:Y_=!1,activeChatAgents:W_=[],currentChatJid:Q_="web:default",connectionStatus:N_="connected",onSetFileRefs:S_,onSetMessageRefs:w_,onSubmitError:D_,onSwitchChat:J_,onRenameSession:Y0,isRenameSessionInProgress:z0=!1,onCreateSession:X_,onDeleteSession:__,onRestoreSession:B_}){let[j_,O_]=f(""),[A_,o_]=f(""),[m_,d_]=f([]),[g_,p_]=f(!1),[E_,y_]=f([]),[R_,G0]=f(0),[b0,P_]=f(!1),[D0,Z0]=f([]),[b_,N0]=f(0),[r_,$0]=f(!1),[K0,x_]=f(!1),[F0,v0]=f(!1),[a_,j0]=f(!1),[H_,J0]=f([]),[C,o]=f(!1),[U_,I_]=f(0),[c_,X0]=f(null),F_=k(null),B$=k(null),c0=k(null),T$=k(null),T0=k(null),k$=k(null),L0=k(null),e0=k(null),h0=k(0),q0=k(!1),y2=200,o$=(z)=>{let O=new Set,D=[];for(let M of z||[]){if(typeof M!=="string")continue;let u=M.trim();if(!u||O.has(u))continue;O.add(u),D.push(u)}return D},y0=()=>{let z=a0("piclaw_compose_history");if(!z)return[];try{let O=JSON.parse(z);if(!Array.isArray(O))return[];return o$(O)}catch{return[]}},k2=(z)=>{i_("piclaw_compose_history",JSON.stringify(z))},v_=k(y0()),u0=k(-1),H0=k(""),k0=j_.trim()||m_.length>0||L.length>0||V.length>0,f0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),_$=typeof window<"u"&&typeof Notification<"u",E$=typeof window<"u"?Boolean(window.isSecureContext):!1,f$=_$&&E$&&S!=="denied",S$=S==="granted"&&y,V$=S$?"Disable notifications":"Enable notifications",w$=m_.length>0||L.length>0||V.length>0,$$=N_==="disconnected"?"Reconnecting":String(N_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),a$=N_==="disconnected"?"Reconnecting":`Connection: ${$$}`,m0=(Array.isArray(W_)?W_:[]).filter((z)=>!z?.archived_at),E0=_8(m0,{currentChatJid:Q_,limit:4}),Q0=!j&&$8({footerWidth:U_,visibleAgentCount:E0.length,hasContextIndicator:Boolean(I&&I.percent!=null)}),U0=(()=>{for(let z of Array.isArray(W_)?W_:[]){let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&O===Q_)return z}return null})(),l0=Boolean(U0&&U0.chat_jid===(U0.root_chat_jid||U0.chat_jid)),W2=(()=>{let z=new Set,O=[];for(let D of Array.isArray(W_)?W_:[]){let M=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!M||M===Q_||z.has(M))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;z.add(M),O.push(D)}return O})(),R$=W2.length>0,S0=R$&&typeof J_==="function",t_=R$&&typeof B_==="function",n0=Boolean(z0||q0.current),A$=!j&&typeof Y0==="function"&&!n0,d0=!j&&typeof X_==="function",O$=!j&&typeof __==="function"&&!l0,P$=!j&&(S0||t_||A$||d0||O$),j$=T||"",g0=A&&g?` (${g})`:"",e_=g0.trim()?`${g}`:"",R0=typeof m?.hint_short==="string"?m.hint_short.trim():"",w0=[e_||null,R0||null].filter(Boolean).join(" • "),t$=[j$?`Current model: ${j$}${g0}`:null,m?.plan?`Plan: ${m.plan}`:null,R0||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),v$=K0?"Switching model…":t$.join(" • ")||`Current model: ${j$}${g0} (tap to open model picker)`,s0=(z)=>{if(!z||typeof z!=="object")return;let O=z.model??z.current;if(typeof d==="function")d({model:O??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(O&&typeof a==="function")a(O)},i0=(z)=>{let O=z||F_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},u$=(z)=>{if(!z)return{content:z,fileRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),M=-1;for(let L_=0;L_<D.length;L_+=1)if(D[L_].trim()==="Files:"&&D[L_+1]&&/^\s*-\s+/.test(D[L_+1])){M=L_;break}if(M===-1)return{content:z,fileRefs:[]};let u=[],R=M+1;for(;R<D.length;R+=1){let L_=D[R];if(/^\s*-\s+/.test(L_))u.push(L_.replace(/^\s*-\s+/,"").trim());else if(!L_.trim())break;else break}if(u.length===0)return{content:z,fileRefs:[]};let l=D.slice(0,M),M_=D.slice(R);return{content:[...l,...M_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:u}},E2=(z)=>{if(!z)return{content:z,messageRefs:[]};let D=z.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),M=-1;for(let L_=0;L_<D.length;L_+=1)if(D[L_].trim()==="Referenced messages:"&&D[L_+1]&&/^\s*-\s+/.test(D[L_+1])){M=L_;break}if(M===-1)return{content:z,messageRefs:[]};let u=[],R=M+1;for(;R<D.length;R+=1){let L_=D[R];if(/^\s*-\s+/.test(L_)){let o0=L_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(o0)u.push(o0[1])}else if(!L_.trim())break;else break}if(u.length===0)return{content:z,messageRefs:[]};let l=D.slice(0,M),M_=D.slice(R);return{content:[...l,...M_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:u}},V0=(z)=>{let O=u$(z||""),D=E2(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},Z$=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){P_(!1),y_([]);return}let O=z.toLowerCase().split(" ")[0];if(O.length<1){P_(!1),y_([]);return}let D=w5.filter((M)=>M.name.startsWith(O)||M.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))$0(!1),Z0([]),y_(D),G0(0),P_(!0);else P_(!1),y_([])},F$=(z)=>{let O=j_,D=O.indexOf(" "),M=D>=0?O.slice(D):"",u=z.name+M;O_(u),P_(!1),y_([]),requestAnimationFrame(()=>{let R=F_.current;if(!R)return;let l=u.length;R.selectionStart=l,R.selectionEnd=l,R.focus()})},m$=(z)=>{if(O4(z)==null){$0(!1),Z0([]);return}let O=e3(m0,z,{currentChatJid:Q_});if(O.length>0&&!(O.length===1&&F4(O[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))P_(!1),y_([]),Z0(O),N0(0),$0(!0);else $0(!1),Z0([])},L$=(z)=>{let O=F4(z?.agent_name);if(!O)return;O_(O),$0(!1),Z0([]),requestAnimationFrame(()=>{let D=F_.current;if(!D)return;let M=O.length;D.selectionStart=M,D.selectionEnd=M,D.focus()})},b$=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!S0&&!t_&&!A$&&!d0&&!O$)return;v0(!1),P_(!1),y_([]),$0(!1),Z0([]),j0((O)=>!O)},e$=(z)=>{let O=typeof z==="string"?z.trim():"";if(j0(!1),!O||O===Q_){requestAnimationFrame(()=>F_.current?.focus());return}J_?.(O)},N$=async(z)=>{let O=typeof z==="string"?z.trim():"";if(j0(!1),!O||typeof B_!=="function"){requestAnimationFrame(()=>F_.current?.focus());return}try{await B_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>F_.current?.focus())}},p0=(z)=>{let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(O&&typeof J_==="function"){J_(O);return}L$(z)},H$=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof Y0!=="function"||z0||q0.current)return;q0.current=!0,j0(!1);try{await Y0()}catch(O){console.warn("Failed to rename session:",O)}finally{q0.current=!1}requestAnimationFrame(()=>F_.current?.focus())},D$=async()=>{if(typeof X_!=="function")return;j0(!1);try{await X_()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>F_.current?.focus())},g$=async()=>{if(typeof __!=="function")return;j0(!1);try{await __(Q_)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>F_.current?.focus())},K$=(z)=>{if(j)o_(z);else O_(z),Z$(z),m$(z);requestAnimationFrame(()=>i0())},_2=(z)=>{let O=j?A_:j_,D=O&&!O.endsWith(`
`)?`
`:"",M=`${O}${D}${z}`.trimStart();K$(M)},Q$=(z)=>{let O=z?.command?.model_label;if(O)return O;let D=z?.command?.message;if(typeof D==="string"){let M=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(M?.[1])return M[1].trim()}return null},p$=async(z)=>{if(j||K0)return;x_(!0);try{let O=await B2("default",z,null,[],null,Q_),D=Q$(O);s0({model:D??T??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let M=await u2(Q_);if(M)s0(M)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{x_(!1)}},X2=async()=>{await p$("/cycle-model")},c$=async(z)=>{if(!z||K0)return;if(await p$(`/model ${z}`))v0(!1)},J$=(z)=>{z.preventDefault(),z.stopPropagation(),j0(!1),v0((O)=>!O)},$2=async()=>{if(j)return;c?.(),await x$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},q2=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return Y_?"queue":null},x$=async(z,O,D={})=>{let{includeMedia:M=!0,includeFileRefs:u=!0,includeMessageRefs:R=!0,clearAfterSubmit:l=!0,recordHistory:M_=!0}=D||{},x0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:j_,L_=typeof x0==="string"?x0:"";if(!L_.trim()&&(M?m_.length===0:!0)&&(u?L.length===0:!0)&&(R?V.length===0:!0))return;P_(!1),y_([]),$0(!1),Z0([]),j0(!1),X0(null);let o0=M?[...m_]:[],V2=u?[...L]:[],y$=R?[...V]:[],i$=L_.trim();if(M_&&i$){let l$=v_.current,I0=o$(l$.filter((W0)=>W0!==i$));if(I0.push(i$),I0.length>200)I0.splice(0,I0.length-200);v_.current=I0,k2(I0),u0.current=-1,H0.current=""}let M1=()=>{if(M)d_([...o0]);if(u)S_?.(V2);if(R)w_?.(y$);O_(i$),requestAnimationFrame(()=>i0())};if(l)O_(""),d_([]),Q?.(),w?.();(async()=>{try{if(await Z_?.({content:i$,submitMode:O,fileRefs:V2,messageRefs:y$,mediaFiles:o0})){_?.();return}let I0=[];for(let h_ of o0){let Q2=await N4(h_);I0.push(Q2.id)}let W0=V2.length?`Files:
${V2.map((h_)=>`- ${h_}`).join(`
`)}`:"",C1=y$.length?`Referenced messages:
${y$.map((h_)=>`- message:${h_}`).join(`
`)}`:"",L2=I0.length?`Attachments:
${I0.map((h_,Q2)=>{let n$=o0[Q2]?.name||`attachment-${Q2+1}`;return`- attachment:${h_} (${n$})`}).join(`
`)}`:"",r2=[i$,W0,C1,L2].filter(Boolean).join(`

`),M0=await B2("default",r2,null,I0,q2(O),Q_);if(t?.(M0),M0?.command){s0({model:M0.command.model_label??T??null,thinking_level:M0.command.thinking_level,supports_thinking:M0.command.supports_thinking});try{let h_=await u2(Q_);if(h_)s0(h_)}catch{}}_?.()}catch(l$){if(l)M1();let I0=l$?.message||"Failed to send message.";X0(I0),D_?.(I0),console.error("Failed to post:",l$)}})()},w2=(z)=>{u_?.(z)},V_=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),o_(""),X?.();return}if(!j&&a_&&z.key==="Escape"){z.preventDefault(),j0(!1);return}if(r_&&D0.length>0){let O=F_.current?.value??(j?A_:j_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))$0(!1),Z0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),N0((D)=>(D+1)%D0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),N0((D)=>(D-1+D0.length)%D0.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),L$(D0[b_]);return}if(z.key==="Escape"){z.preventDefault(),$0(!1),Z0([]);return}}}if(b0&&E_.length>0){let O=F_.current?.value??(j?A_:j_);if(!String(O||"").startsWith("/"))P_(!1),y_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),G0((D)=>(D+1)%E_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),G0((D)=>(D-1+E_.length)%E_.length);return}if(z.key==="Tab"){z.preventDefault(),F$(E_[R_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(F_.current?.value??(j?A_:j_)).includes(" ")){z.preventDefault();let u=E_[R_];P_(!1),y_([]),x$(u.name);return}}if(z.key==="Escape"){z.preventDefault(),P_(!1),y_([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let O=F_.current;if(!O)return;let D=O.value||"",M=O.selectionStart===0&&O.selectionEnd===0,u=O.selectionStart===D.length&&O.selectionEnd===D.length;if(z.key==="ArrowUp"&&M||z.key==="ArrowDown"&&u){let R=v_.current;if(!R.length)return;z.preventDefault();let l=u0.current;if(z.key==="ArrowUp"){if(l===-1)H0.current=D,l=R.length-1;else if(l>0)l-=1;u0.current=l,K$(R[l]||"")}else{if(l===-1)return;if(l<R.length-1)l+=1,u0.current=l,K$(R[l]||"");else u0.current=-1,K$(H0.current||""),H0.current=""}requestAnimationFrame(()=>{let M_=F_.current;if(!M_)return;let x0=M_.value.length;M_.selectionStart=x0,M_.selectionEnd=x0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let O=F_.current?.value??(j?A_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else x$(O,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let O=F_.current?.value??(j?A_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else x$(O)}},h$=(z)=>{let O=Array.from(z||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;d_((D)=>[...D,...O]),X0(null)},A2=(z)=>{h$(z.target.files),z.target.value=""},P2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),h0.current+=1,p_(!0)},j2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),h0.current=Math.max(0,h0.current-1),h0.current===0)p_(!1)},b2=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";p_(!0)},x2=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),h0.current=0,p_(!1),h$(z.dataTransfer?.files||[])},I2=(z)=>{if(j)return;let O=z.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let M of O){if(M.kind!=="file")continue;let u=M.getAsFile?.();if(u)D.push(u)}if(D.length>0)z.preventDefault(),h$(D)},M2=(z)=>{d_((O)=>O.filter((D,M)=>M!==z))},U=()=>{X0(null),d_([]),Q?.(),w?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:O,longitude:D,accuracy:M}=z.coords,u=`${O.toFixed(5)}, ${D.toFixed(5)}`,R=Number.isFinite(M)?` ±${Math.round(M)}m`:"",l=`https://maps.google.com/?q=${O},${D}`,M_=`Location: ${u}${R} ${l}`;_2(M_)},(z)=>{let O=z?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!F0)return;o(!0),u2(Q_).then((z)=>{let O=Array.isArray(z?.models)?z.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,M)=>D.localeCompare(M,void 0,{sensitivity:"base"})),J0(O),s0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),J0([])}).finally(()=>{o(!1)})},[F0,T]),v(()=>{if(j)v0(!1),j0(!1),P_(!1),y_([]),$0(!1),Z0([])},[j]),v(()=>{if(a_&&!P$)j0(!1)},[a_,P$]),v(()=>{if(!F0)return;let z=(O)=>{let D=T$.current,M=T0.current,u=O.target;if(D&&D.contains(u))return;if(M&&M.contains(u))return;v0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[F0]),v(()=>{if(!a_)return;let z=(O)=>{let D=k$.current,M=L0.current,u=O.target;if(D&&D.contains(u))return;if(M&&M.contains(u))return;j0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[a_]),v(()=>{let z=()=>{let R=e0.current?.clientWidth||0;I_((l)=>l===R?l:R)};z();let O=e0.current,D=0,M=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,z()})},u=null;if(O&&typeof ResizeObserver<"u")u=new ResizeObserver(()=>M()),u.observe(O);if(typeof window<"u")window.addEventListener("resize",M);return()=>{if(D)cancelAnimationFrame(D);if(u?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",M)}},[j,T,E0.length,I?.percent]);let x=(z)=>{let O=z.target.value;if(X0(null),a_)j0(!1);i0(z.target),K$(O)};return v(()=>{requestAnimationFrame(()=>i0())},[j_,A_,j]),v(()=>{if(j)return;m$(j_)},[m0,Q_,j_,j]),B`
        <div class="compose-box">
            ${!j&&n_.length>0&&B`
                <div class="compose-queue-stack">
                    ${n_.map((z)=>{let O=typeof z?.content==="string"?z.content:"",D=V0(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((M)=>B`
                                                <${U$}
                                                    key=${"queue-msg-"+M}
                                                    prefix="compose"
                                                    label=${"msg:"+M}
                                                    title=${"Message reference: "+M}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((M)=>{let u=M.split("/").pop()||M;return B`
                                                    <${U$}
                                                        key=${"queue-file-"+M}
                                                        prefix="compose"
                                                        label=${u}
                                                        title=${M}
                                                        onClick=${()=>z_?.(M)}
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
                                        onClick=${()=>w2(z)}
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
                                        onClick=${()=>n?.(z)}
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
                class=${`compose-input-wrapper${g_?" drag-active":""}`}
                onDragEnter=${P2}
                onDragOver=${b2}
                onDragLeave=${j2}
                onDrop=${x2}
            >
                <div class="compose-input-main">
                    ${c_&&!w$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${c_}</div>
                    `}
                    ${w$&&B`
                        <div class="compose-file-refs">
                            ${c_&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${c_}</div>
                            `}
                            ${V.map((z)=>{return B`
                                    <${U$}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(z)}
                                    />
                                `})}
                            ${L.map((z)=>{let O=z.split("/").pop()||z;return B`
                                    <${U$}
                                        prefix="compose"
                                        label=${O}
                                        title=${z}
                                        onClick=${()=>z_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(z)}
                                    />
                                `})}
                            ${m_.map((z,O)=>{let D=z?.name||`attachment-${O+1}`;return B`
                                    <${U$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>M2(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${U}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof G_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>G_?.()}
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
                        ref=${F_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?A_:j_}
                        onInput=${x}
                        onKeyDown=${V_}
                        onPaste=${I2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${r_&&D0.length>0&&B`
                        <div class="slash-autocomplete" ref=${c0}>
                            ${D0.map((z,O)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${O===b_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),L$(z)}}
                                    onMouseEnter=${()=>N0(O)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${b0&&E_.length>0&&B`
                        <div class="slash-autocomplete" ref=${B$}>
                            ${E_.map((z,O)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${O===R_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),F$(z)}}
                                    onMouseEnter=${()=>G0(O)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${F0&&!j&&B`
                        <div class="compose-model-popup" ref=${T$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&H_.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&H_.map((z)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${T===z?" active":""}`}
                                        onClick=${()=>{c$(z)}}
                                        disabled=${K0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{X2()}}
                                    disabled=${K0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${a_&&!j&&B`
                        <div class="compose-model-popup" ref=${k$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let z=typeof U0?.agent_name==="string"&&U0.agent_name.trim()?`@${U0.agent_name.trim()}`:Q_,O=typeof U0?.chat_jid==="string"&&U0.chat_jid.trim()?U0.chat_jid.trim():Q_;return`${z} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!R$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${R$&&W2.map((z)=>{let O=Boolean(z.archived_at),M=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!O&&typeof __==="function",u=`@${z.agent_name} — ${z.chat_jid}${z.is_active?" • active":""}${O?" • archived":""}`;return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){N$(z.chat_jid);return}e$(z.chat_jid)}}
                                                disabled=${O?!t_:!S0}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${u}
                                            </button>
                                            ${M&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(R)=>{R.stopPropagation(),j0(!1),__(z.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(d0||A$||O$)&&B`
                                <div class="compose-model-popup-actions">
                                    ${d0&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{D$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${A$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(z)=>{H$(z)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${n0}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${O$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{g$()}}
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
                <div class="compose-footer" ref=${e0}>
                    ${!j&&T&&B`
                    <div class="compose-meta-row">
                        ${!j&&T&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${T0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${v$}
                                    aria-label="Open model picker"
                                    onClick=${J$}
                                    disabled=${K0}
                                >
                                    ${K0?"Switching…":j$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!K0&&w0&&B`
                                        <span class="compose-model-usage-hint" title=${v$}>
                                            ${w0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&B`
                            <${A5} usage=${I} onCompact=${$2} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${E0.map((z)=>B`
                                <button
                                    key=${z.chat_jid||z.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>p0(z)}
                                    title=${`${z.chat_jid||"Active agent"} — switch to @${z.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${z.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${P$&&B`
                        ${U0?.agent_name&&B`
                            <span
                                class="compose-current-agent-label"
                                title=${U0.chat_jid||Q_}
                                onClick=${b$}
                            >@${U0.agent_name}</span>
                        `}
                        <button
                            ref=${L0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${a_?" active":""}`}
                            onClick=${b$}
                            title=${a_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${a_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(z)=>K?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:Y}
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
                    ${f0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${J}
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
                    ${f$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${S$?" active":""}`}
                            onClick=${s}
                            title=${V$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${$_&&h&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${h}
                                title=${`Attach open file: ${$_}`}
                                type="button"
                                disabled=${L.includes($_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${A2} />
                        </label>
                    `}
                    ${(N_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${N_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${N_}" title=${a$}>
                                    ${$$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x$()}}
                                    disabled=${!k0}
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
    `}var J4="piclaw_theme",F1="piclaw_tint",Y8="piclaw_chat_themes",c2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},z8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},N8={default:{label:"Default",mode:"auto",light:c2,dark:z8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},P5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],N2={theme:"default",tint:null},G8="light",H4=!1;function H1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function J2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function b5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),Y=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,Y,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[K,Y,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:Y,b:X,hex:L}}function W8(_){return J2(_)||b5(_)}function p2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function D4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function x5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*Y}function I5(_){return x5(_)>0.4?"#000000":"#ffffff"}function X8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function y4(_){return N8[_]||N8.default}function M5(_){return _.mode==="auto"?X8():_.mode}function q8(_,$){let j=y4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||c2}function V8(_,$,j){let Z=W8($);if(!Z)return _;let N=J2(_.bgPrimary),K=J2(_.bgSecondary),Y=J2(_.bgHover),X=J2(_.borderColor);if(!N||!K||!Y||!X)return _;let q=J2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:p2(N,Z,0.08),bgSecondary:p2(K,Z,0.12),bgHover:p2(Y,Z,0.16),borderColor:p2(X,Z,0.08),accent:Z.hex,accentHover:q?p2(Z,q,0.18):Z.hex}}function C5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=W8(Z),K=N?D4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?D4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?D4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?I5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||c2.danger,"--success-color":_.success||c2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([Q,V])=>{if(V)j.style.setProperty(Q,V)})}function T5(){if(typeof document>"u")return;let _=document.documentElement;P5.forEach(($)=>_.style.removeProperty($))}function D2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function K8(_){let $=H1(N2?.theme||"default"),j=N2?.tint?String(N2.tint).trim():null,Z=q8($,_);if($==="default"&&j)Z=V8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?z8.bgPrimary:c2.bgPrimary}function f5(_,$){if(typeof document>"u")return;let j=D2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=D2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",K8("light"));let N=D2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",K8("dark"));let K=D2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let Y=D2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let X=D2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function S5(){if(typeof window>"u")return;let _={...N2,mode:G8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function L8(){try{let _=a0(Y8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function R5(_,$,j){let Z=L8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};i_(Y8,JSON.stringify(Z))}function v5(_){if(!_)return null;return L8()[_]||null}function Q8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function k4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=H1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=y4(j),K=M5(N),Y=q8(j,K);N2={theme:j,tint:Z},G8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=Y;if(j==="default"&&Z)L=V8(Y,Z,K);if(j==="default"&&!Z)T5();else C5(L,K);if(f5(L.bgPrimary,K),S5(),$.persist!==!1)if(i_(J4,j),Z)i_(F1,Z);else i_(F1,"")}function O1(){if(y4(N2.theme).mode!=="auto")return;k4(N2,{persist:!1})}function U8(){if(typeof window>"u")return()=>{};let _=Q8(),$=v5(_),j=$?H1($.theme||"default"):H1(a0(J4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=a0(F1);return N?N.trim():null})();if(k4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!H4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",O1);else if(N.addListener)N.addListener(O1);return H4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",O1);else if(N.removeListener)N.removeListener(O1);H4=!1}}return()=>{}}function B8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||Q8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(R5($,j||"default",Z),k4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")i_(J4,j||"default"),i_(F1,Z||"")}function O8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return X8()}var D1=/#(\w+)/g,u5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),m5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),g5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),p5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},c5=new Set(["http:","https:","mailto:",""]);function E4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function K2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!c5.has(Z.protocol))return null;return Z.href}catch{return null}}function F8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let Y of Z){let X=Y.tagName.toLowerCase();if(!m5.has(X)){let q=Y.parentNode;if(!q)continue;while(Y.firstChild)q.insertBefore(Y.firstChild,Y);q.removeChild(Y);continue}let L=p5[X]||new Set;for(let q of Array.from(Y.attributes)){let Q=q.name.toLowerCase(),V=q.value;if(Q.startsWith("on")){Y.removeAttribute(q.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(L.has(Q)||g5.has(Q)){if(Q==="href"){let H=K2(V);if(!H)Y.removeAttribute(q.name);else if(Y.setAttribute(q.name,H),X==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let H=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,w=K2(H,{allowDataImage:X==="img"});if(!w)Y.removeAttribute(q.name);else Y.setAttribute(q.name,w)}continue}Y.removeAttribute(q.name)}}return j.body.innerHTML}function H8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function J1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=H8(j);if(N===j)break;j=N}return j}function h5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,Y=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,Y=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,Y=[];continue}if(K)Y.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function i5(_){if(!_)return _;return J1(_,5)}function l5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function n5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function d5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",Y=i5(K);return`<div class="mermaid-container" data-mermaid="${l5(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function D8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var s5={span:new Set(["title","class","lang","dir"])};function o5(_,$){let j=s5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let Y=(K[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${Y}="${E4(X)}"`)}return Z.join("")}function J8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!u5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let Q=X.slice(L.length).trim(),V=o5(q,Q);return`<${q}${V}>`})}function y8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function k8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function r5(_){if(!window.katex)return _;let $=(Y)=>H8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let X=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let Q=X.length;return X.push(q),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let Q=X.length;return X.push(q),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:X}},Z=(Y,X)=>{if(!X.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let Q=Number(q);return X[Q]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${E4(q.message)}">${Y}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,X,L)=>{if(/\s$/.test(L))return Y;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${E4(q.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function a5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let Y=K.nodeValue;if(!Y)continue;if(D1.lastIndex=0,!D1.test(Y))continue;D1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=Y.split(D1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",Q),H.textContent=`#${Q}`,q.appendChild(H)}else q.appendChild($.createTextNode(Q))}),K.parentNode?.replaceChild(q,K)}return $.body.innerHTML}function t5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function t0(_,$,j={}){if(!_)return"";let Z=t5(_),{text:N,blocks:K}=h5(Z),Y=J1(N,2),L=D8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=J8(L),Q=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return Q=y8(Q),Q=k8(Q),Q=r5(Q),Q=a5(Q),Q=d5(Q,K),Q=F8(Q,j),Q}function y1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=J1($,2),N=D8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=J8(N),Y=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return Y=y8(Y),Y=k8(Y),Y=F8(Y),Y}function e5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[q,Q]=L.split(",").map(Number);return{x:q,y:Q}});if(Y.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let q=Y[L-1],Q=Y[L],V=Y[L+1],H=Q.x-q.x,w=Q.y-q.y,T=V.x-Q.x,m=V.y-Q.y,g=Math.sqrt(H*H+w*w),A=Math.sqrt(T*T+m*m),I=Math.min($,g/2,A/2);if(I<0.5){X.push(`L ${Q.x},${Q.y}`);continue}let c=Q.x-H/g*I,y=Q.y-w/g*I,S=Q.x+T/A*I,s=Q.y+m/A*I,d=H*m-w*T>0?1:0;X.push(`L ${c},${y}`),X.push(`A ${I},${I} 0 0 ${d} ${S},${s}`)}return X.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function M$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=O8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of K)try{let X=Y.dataset.mermaid,L=n5(X||""),q=J1(L,2),Q=await $(q,{...N,transparent:!0});Q=e5(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function E8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function w8(_){return String(_||"").trim()||"web:default"}function A8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function P8(_){if(!_)return!1;return _.status!=="running"}function b8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function x8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),K=k(null),Y=_?.thinking?y1(_.thinking):"",X=_?.answer?t0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&Y)M$(N.current).catch(()=>{})},[Y]),v(()=>{if(K.current&&X)M$(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=A8(_),H=P8(_),w=!L&&q,T=L?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${T}</span>
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
            ${Q&&B`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
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
    `}function _7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function w4(_,$){if(!_||_.type!=="generated_widget")return null;let j=_7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j}}function I8(_){return w4(_,null)!==null}function M8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?N:Z;if(!Y)return"";let X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'","script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),L=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y;return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${X}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${K.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>${L}</body>
</html>`}function C8({widget:_,onClose:$}){v(()=>{if(!_)return;let Q=(V)=>{if(V.key==="Escape")$?.()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[_,$]);let j=T_(()=>M8(_),[_]);if(!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",q=!j;return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(Q)=>Q.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${X} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(Y||L)&&B`
                            <div class="floating-widget-subtitle">${Y||L}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${q?B`<div class="floating-widget-empty">Widget artifact is missing or unsupported.</div>`:B`
                            <iframe
                                class="floating-widget-frame"
                                title=${K}
                                sandbox="allow-downloads"
                                referrerpolicy="no-referrer"
                                srcdoc=${j}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var T8="PiClaw";function A4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%K.length,X=K[Y],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",Q=q?q:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:Q||(V?"/static/icon-192.png":null)}}function f8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function S8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function R8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,Y=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function $7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function h2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function v8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return h2(_)?"Compacting context":"Working..."}function j7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function u8(_,$=Date.now()){let j=$7(_);if(j===null)return null;return j7(Math.max(0,$-j))}function m8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:Y,steerQueued:X,onPanelToggle:L}){let V=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let A_=__,o_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:o_,fullText:A_}}let B_=__.text||"",j_=__.fullText||__.full_text||B_,O_=Number.isFinite(__.totalLines)?__.totalLines:j_?j_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B_,totalLines:O_,fullText:j_}},H=160,w=(__)=>String(__||"").replace(/<\/?internal>/gi,""),T=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},m=(__,B_,j_)=>{let O_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!O_)return{text:"",omitted:0,totalLines:Number.isFinite(j_)?j_:0,visibleLines:0};let A_=O_.split(`
`),o_=A_.length>B_?A_.slice(0,B_).join(`
`):O_,m_=Number.isFinite(j_)?j_:A_.reduce((p_,E_)=>p_+T(E_),0),d_=o_?o_.split(`
`).reduce((p_,E_)=>p_+T(E_),0):0,g_=Math.max(m_-d_,0);return{text:o_,omitted:g_,totalLines:m_,visibleLines:d_}},g=V(j),A=V(Z),I=V($),c=Boolean(g.text)||g.totalLines>0,y=Boolean(A.text)||A.totalLines>0,S=Boolean(I.fullText?.trim()||I.text?.trim());if(!_&&!S&&!c&&!y&&!N&&!K)return null;let[s,a]=f(new Set),[d,$_]=f(()=>Date.now()),h=(__)=>a((B_)=>{let j_=new Set(B_),O_=!j_.has(__);if(O_)j_.add(__);else j_.delete(__);if(typeof L==="function")L(__,O_);return j_});v(()=>{a(new Set)},[Y]);let z_=h2(_);v(()=>{if(!z_)return;$_(Date.now());let __=setInterval(()=>$_(Date.now()),1000);return()=>clearInterval(__)},[z_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||Y,u_=R8(n_),n=X?"turn-dot turn-dot-queued":"turn-dot",Z_=(__)=>__,t=Boolean(_?.last_activity||_?.lastActivity),G_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":u_,Y_=K?.kind||"info",W_=G_(Y_),Q_=G_(_?.kind||(z_?"warning":"info")),N_="",S_=_?.title,w_=_?.status;if(_?.type==="plan")N_=S_?`Planning: ${S_}`:"Planning...";else if(_?.type==="tool_call")N_=S_?`Running: ${S_}`:"Running tool...";else if(_?.type==="tool_status")N_=S_?`${S_}: ${w_||"Working..."}`:w_||"Working...";else if(_?.type==="error")N_=S_||"Agent error";else N_=S_||w_||"Working...";if(t)N_="Last activity just now";let D_=({panelTitle:__,text:B_,fullText:j_,totalLines:O_,maxLines:A_,titleClass:o_,panelKey:m_})=>{let d_=s.has(m_),g_=j_||B_||"",p_=m_==="thought"||m_==="draft"?w(g_):g_,E_=typeof A_==="number",y_=d_&&E_,R_=E_?m(p_,A_,O_):{text:p_||"",omitted:0,totalLines:Number.isFinite(O_)?O_:0};if(!p_&&!(Number.isFinite(R_.totalLines)&&R_.totalLines>0))return null;let G0=`agent-thinking-body${E_?" agent-thinking-body-collapsible":""}`,b0=E_?`--agent-thinking-collapsed-lines: ${A_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${d_?"true":"false"}
                data-collapsible=${E_?"true":"false"}
                style=${u_?`--turn-color: ${u_};`:""}
            >
                <div class="agent-thinking-title ${o_||""}">
                    ${u_&&B`<span class=${n} aria-hidden="true"></span>`}
                    ${__}
                    ${y_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>h(m_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${G0}
                    style=${b0}
                    dangerouslySetInnerHTML=${{__html:y1(p_)}}
                />
                ${!d_&&R_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>h(m_)}>
                        ▸ ${R_.omitted} more lines
                    </button>
                `}
                ${d_&&R_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>h(m_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=N?.tool_call?.title,Y0=J_?`Awaiting approval: ${J_}`:"Awaiting approval",z0=z_?u8(_,d):null,X_=(__,B_,j_=null)=>{let O_=v8(__);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${B_?`--turn-color: ${B_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${B_&&B`<span class=${n} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${O_}</span>
                    ${j_&&B`<span class="agent-status-elapsed">${j_}</span>`}
                </div>
                ${__.detail&&B`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${K&&X_(K,W_)}
            ${_?.type==="intent"&&X_(_,Q_,z0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${u_?`--turn-color: ${u_};`:""}>
                    <span class=${n} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y0}</span>
                </div>
            `}
            ${c&&D_({panelTitle:Z_("Planning"),text:g.text,fullText:g.fullText,totalLines:g.totalLines,panelKey:"plan"})}
            ${y&&D_({panelTitle:Z_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&D_({panelTitle:Z_("Draft"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${u_?`--turn-color: ${u_};`:""}>
                    ${u_&&B`<span class=${n} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${N_}</span>
                </div>
            `}
        </div>
    `}function g8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,Y=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,T=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),m=Array.from(new Set([V,...T].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let g=async(c)=>{try{await q1(j,c,K||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},A=async()=>{try{await Y4(Y,`Auto-approved: ${Y}`),await q1(j,"approved",K||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},I=N&&N.length>0;return B`
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
                ${(H||q||Q||m.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${m.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${m.map((c,y)=>B`<li key=${y}>${c}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&B`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${Q&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${I?N.map((c)=>B`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>g(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>g("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>g("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${A}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function p8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${X}`}function i2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function X$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function Y2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Z7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),N7=new Set(["text/markdown"]),K7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Y7=new Set(["application/vnd.jgraph.mxfile"]);function l2(_){return typeof _==="string"?_.trim().toLowerCase():""}function z7(_){let $=l2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function G7(_){let $=l2(_);return!!$&&$.endsWith(".pdf")}function W7(_){let $=l2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function n2(_,$){let j=l2(_);if(z7($)||Y7.has(j))return"drawio";if(G7($)||j==="application/pdf")return"pdf";if(W7($)||K7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(Z7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function c8(_){let $=l2(_);return N7.has($)}function h8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function X7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function q7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:K}}function i8(_){return X7(_)||q7(_)}function k1(_){let $=(K)=>{let Y=K/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function V7(_,$){let j=Math.max(k1(_),k1($)),Z=Math.min(k1(_),k1($));return(j+0.05)/(Z+0.05)}function L7(_,$,j="#ffffff"){let Z=i8(_);if(!Z)return j;let N=j,K=-1;for(let Y of $){let X=i8(Y);if(!X)continue;let L=V7(Z,X);if(L>K)N=Y,K=L}return N}function P4(){let _=getComputedStyle(document.documentElement),$=(T,m)=>{for(let g of T){let A=_.getPropertyValue(g).trim();if(A)return A}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),w=L7(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:Y,accent:X,good:L,warning:q,attention:Q,border:V,fontFamily:H,buttonTextColor:w}}function l8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:Y,attention:X,border:L,fontFamily:q}=P4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Q7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),n8=!1,E1=null,d8=!1;function b4(_){_.querySelector(".adaptive-card-notice")?.remove()}function U7(_,$,j="error"){b4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function B7(_,$=(j)=>t0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function O7(_=($)=>t0($,null)){return($,j)=>{try{let Z=B7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function F7(_){if(d8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=O7(),d8=!0}async function H7(){if(n8)return;if(E1)return E1;return E1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{n8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),E1}function D7(){return globalThis.AdaptiveCards}function J7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function y7(_){return Q7.has(_)}function I4(_){if(!Array.isArray(_))return[];return _.filter(J7)}function k7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function x4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>x4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${x4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function E7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return x4($);return typeof $==="string"?$:String($)}function w7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=E7(Y.type,j[Y.id],Y);for(let[X,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[X]=Z(L);return Y};return Z(_)}function A7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function P7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function b7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=P7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function s8(_,$,j){if(!y7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await H7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=D7();F7(Z);let N=new Z.AdaptiveCard,K=P4();N.hostConfig=new Z.HostConfig(l8());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:w7($.payload,Y);N.parse(X),N.onExecuteAction=(Q)=>{let V=k7(Q);if(j?.onAction)b4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let w=H instanceof Error?H.message:String(H||"Action failed.");U7(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let q=b7($);if(q){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,Q.appendChild(V),q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=q.detail,Q.appendChild(H)}_.appendChild(Q)}if(b4(_),_.appendChild(L),q)A7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function d2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${d2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function o8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:d2(j)})).filter(($)=>$.value)}function x7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function M4(_){if(!Array.isArray(_))return[];return _.filter(x7)}function r8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=d2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=o8(j).map(({key:K,value:Y})=>`${K}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function a8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=o8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:Y})=>`${K}: ${Y}`).join(", "):d2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function I7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?X$($):null},{label:"Added",value:_?.created_at?Y2(_.created_at):null}].filter((Z)=>Z.value)}function M7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=W$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function t8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=T_(()=>n2($?.content_type,Z),[$?.content_type,Z]),K=h8(N),Y=T_(()=>c8($?.content_type),[$?.content_type]),[X,L]=f(N==="text"),[q,Q]=f(""),[V,H]=f(null),w=k(null),T=T_(()=>I7($),[$]),m=T_(()=>M7(_,Z,N),[_,Z,N]),g=T_(()=>{if(!Y||!q)return"";return t0(q)},[Y,q]);return v(()=>{let A=(I)=>{if(I.key==="Escape")j()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[j]),v(()=>{if(!w.current||!g)return;M$(w.current);return},[g]),v(()=>{let A=!1;async function I(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let c=await X4(_);if(!A)Q(c)}catch{if(!A)H("Failed to load text preview.")}finally{if(!A)L(!1)}}return I(),()=>{A=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(A)=>{A.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&B`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(A)=>A.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${W$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(A)=>A.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                    ${!X&&!V&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${W$(_)} alt=${Z} />
                    `}
                    ${!X&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&m&&B`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!X&&!V&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!V&&N==="text"&&Y&&B`
                        <div
                            ref=${w}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:g}}
                        />
                    `}
                    ${!X&&!V&&N==="text"&&!Y&&B`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!V&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${T.map((A)=>B`
                        <div class="attachment-preview-meta-item" key=${A.label}>
                            <span class="attachment-preview-meta-label">${A.label}</span>
                            <span class="attachment-preview-meta-value">${A.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function e8({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function C7({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(v(()=>{O2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,Y=K?X$(K):"",L=n2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${W$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&B`<span class="file-size">${Y}</span>`}
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function T7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);v(()=>{if(!Number.isFinite(j))return;O2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?W$(j):null,L=n2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${K}>
            ${Y?B`
                    <a href=${Y} download=${K} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${U$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:B`
                    <${U$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function w1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?Y2(Z):null;return B`
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
    `}function f7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?X$(_.size):"",N=_.mime_type||"",K=v7(N),Y=K2(_.uri);return B`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
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
    `}function S7({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),Y=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&B`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),q=URL.createObjectURL(L),Q=document.createElement("a");Q.href=q,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function R7({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=w4(_,$),N=I8(_),K=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=Z?.title||_.title||_.name||"Generated widget",X=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",q=(Q)=>{if(Q.preventDefault(),Q.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${K?` • ${String(K).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${X&&B`<div class="generated-widget-launch-description">${X}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!N}
                    onClick=${q}
                    title=${N?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function v7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function u7({preview:_}){let $=K2(_.url),j=K2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
    </svg>`;async function i7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function l7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,Y)=>{let X=Y||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=c7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=h7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=p7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let Y=document.createElement("div");Y.className="post-code-block",K.parentNode?.insertBefore(Y,K),Y.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),Y.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let V=K.querySelector("code")?.textContent||"",H=await i7(V);N(X,H?"success":"error");let w=j.get(X);if(w)clearTimeout(w);let T=setTimeout(()=>{N(X,"idle"),j.delete(X)},g7);j.set(X,T)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(Y.parentNode)Y.parentNode.insertBefore(K,Y),Y.remove()})}),()=>{Z.forEach((K)=>K())}}function n7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function d7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function s7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let Q=j[q].trim();if((Q==="Images:"||Q==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let Q=q.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],w=(V[2]||"").trim()||H;N.push({id:H,label:w,raw:Q})}else N.push({id:null,label:Q,raw:Q})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function o7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function r7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(o7).sort((Q,V)=>V.length-Q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),X=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let Q of L){let V=Q.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=Q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let w=V.split(N).filter((m)=>m!=="");if(w.length===0)continue;let T=Y.createDocumentFragment();for(let m of w)if(K.test(m)){let g=Y.createElement("mark");g.className="search-highlight-term",g.textContent=m,T.appendChild(g)}else T.appendChild(Y.createTextNode(m));Q.parentNode.replaceChild(T,Q)}return Y.body.innerHTML}function _6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:Y,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:Q,isThreadReply:V,isThreadPrev:H,isThreadNext:w,isRemoving:T,highlightQuery:m,onFileRef:g,onOpenWidget:A}){let[I,c]=f(null),y=k(null),S=_.data,s=S.type==="agent_response",a=X||"You",d=s?K||T8:a,$_=s?A4(K,Y,!0):A4(a,L),h=typeof q==="string"?q.trim().toLowerCase():"",z_=!s&&$_.image&&(h==="clear"||h==="transparent"),n_=s&&Boolean($_.image),u_=`background-color: ${z_||n_?"transparent":$_.color}`,n=S.content_meta,Z_=Boolean(n?.truncated),t=Boolean(n?.preview),G_=Z_&&!t,Y_=Z_?{originalLength:Number.isFinite(n?.original_length)?n.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,W_=S.content_blocks||[],Q_=S.media_ids||[],N_=m7(S.content,S.link_previews),{content:S_,fileRefs:w_}=n7(N_),{content:D_,messageRefs:J_}=d7(S_),{content:Y0,attachments:z0}=s7(D_);N_=Y0;let X_=I4(W_),__=M4(W_),B_=X_.length===1&&typeof X_[0]?.fallback_text==="string"?X_[0].fallback_text.trim():"",j_=__.length===1?r8(__[0]).trim():"",O_=Boolean(B_)&&N_?.trim()===B_||Boolean(j_)&&N_?.trim()===j_,A_=Boolean(N_)&&!G_&&!O_,o_=typeof m==="string"?m.trim():"",m_=T_(()=>{if(!N_||O_)return"";let C=t0(N_,j);return o_?r7(C,o_):C},[N_,O_,o_]),d_=(C,o)=>{C.stopPropagation(),c(W$(o))},[g_,p_]=f(null),E_=(C)=>{p_(C)},y_=(C)=>{C.stopPropagation(),Q?.(_)},R_=(C,o)=>{let U_=new Set;if(!C||o.length===0)return{content:C,usedIds:U_};return{content:C.replace(/attachment:([^\s)"']+)/g,(c_,X0,F_,B$)=>{let c0=X0.replace(/^\/+/,""),T0=o.find((L0)=>L0.name&&L0.name.toLowerCase()===c0.toLowerCase()&&!U_.has(L0.id))||o.find((L0)=>!U_.has(L0.id));if(!T0)return c_;if(U_.add(T0.id),B$.slice(Math.max(0,F_-2),F_)==="](")return`/media/${T0.id}`;return T0.name||"attachment"}),usedIds:U_}},G0=[],b0=[],P_=[],D0=[],Z0=[],b_=[],N0=[],r_=0;if(W_.length>0)W_.forEach((C)=>{if(C?.type==="text"&&C.annotations)N0.push(C.annotations);if(C?.type==="generated_widget")b_.push(C);else if(C?.type==="resource_link")D0.push(C);else if(C?.type==="resource")Z0.push(C);else if(C?.type==="file"){let o=Q_[r_++];if(o)b0.push(o),P_.push({id:o,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let o=Q_[r_++];if(o){let U_=typeof C?.mime_type==="string"?C.mime_type:void 0;G0.push({id:o,annotations:C?.annotations,mimeType:U_}),P_.push({id:o,name:C?.name||C?.filename||C?.title})}}});else if(Q_.length>0){let C=z0.length>0;Q_.forEach((o,U_)=>{let I_=z0[U_]||null;if(P_.push({id:o,name:I_?.label||null}),C)b0.push(o);else G0.push({id:o,annotations:null})})}if(z0.length>0)z0.forEach((C)=>{if(!C?.id)return;let o=P_.find((U_)=>String(U_.id)===String(C.id));if(o&&!o.name)o.name=C.label});let{content:$0,usedIds:K0}=R_(N_,P_);N_=$0;let x_=G0.filter(({id:C})=>!K0.has(C)),F0=b0.filter((C)=>!K0.has(C)),v0=z0.length>0?z0.map((C,o)=>({id:C.id||`attachment-${o+1}`,label:C.label||`attachment-${o+1}`})):P_.map((C,o)=>({id:C.id,label:C.name||`attachment-${o+1}`})),a_=T_(()=>I4(W_),[W_]),j0=T_(()=>M4(W_),[W_]),H_=T_(()=>{return a_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[a_]);v(()=>{if(!y.current)return;return M$(y.current),l7(y.current)},[m_]);let J0=k(null);return v(()=>{if(!J0.current||a_.length===0)return;let C=J0.current;C.innerHTML="";for(let o of a_){let U_=document.createElement("div");C.appendChild(U_),s8(U_,o,{onAction:async(I_)=>{if(I_.type==="Action.OpenUrl"){let c_=K2(I_.url||"");if(!c_)throw Error("Invalid URL");window.open(c_,"_blank","noopener,noreferrer");return}if(I_.type==="Action.Submit"){await K4({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:o.card_id,action:{type:I_.type,title:I_.title||"",data:I_.data}});return}console.warn("[post] unsupported adaptive card action:",I_.type,I_)}}).catch((I_)=>{console.error("[post] adaptive card render error:",I_),U_.textContent=o.fallback_text||"Card failed to render."})}},[H_,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${s?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${w?"thread-next":""} ${T?"removing":""}" onClick=${$}>
            <div class="post-avatar ${s?"agent-avatar":""} ${$_.image?"has-image":""}" style=${u_}>
                ${$_.image?B`<img src=${$_.image} alt=${d} />`:$_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${y_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${d}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${p8(_.timestamp)}</a>
                </div>
                ${G_&&Y_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${i2(Y_.originalLength)} chars
                            ${Y_.maxLength?B` • Display limit: ${i2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&Y_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${i2(Y_.maxLength)} of ${i2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||J_.length>0||v0.length>0)&&B`
                    <div class="post-file-refs">
                        ${J_.map((C)=>{let o=(U_)=>{if(U_.preventDefault(),U_.stopPropagation(),N)N(C,_.chat_jid||null);else{let I_=document.getElementById("post-"+C);if(I_)I_.scrollIntoView({behavior:"smooth",block:"center"}),I_.classList.add("post-highlight"),setTimeout(()=>I_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${o}>
                                    <${U$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${o}
                                    />
                                </a>
                            `})}
                        ${w_.map((C)=>{let o=C.split("/").pop()||C;return B`
                                <${U$}
                                    prefix="post"
                                    label=${o}
                                    title=${C}
                                    onClick=${()=>g?.(C)}
                                />
                            `})}
                        ${v0.map((C)=>B`
                            <${T7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${E_}
                            />
                        `)}
                    </div>
                `}
                ${A_&&B`
                    <div 
                        ref=${y}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let o=C.target.dataset.hashtag;if(o)j?.(o)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),c(C.target.src)}}
                    />
                `}
                ${a_.length>0&&B`
                    <div ref=${J0} class="post-adaptive-cards" />
                `}
                ${j0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${j0.map((C,o)=>{let U_=a8(C),I_=`${C.card_id}-${o}`;return B`
                                <div key=${I_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${U_.title}</span>
                                        </div>
                                    </div>
                                    ${U_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${U_.fields.map((c_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${c_.key}: ${c_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${c_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${c_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${Y2(U_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b_.length>0&&B`
                    <div class="generated-widget-launches">
                        ${b_.map((C,o)=>B`
                            <${R7}
                                key=${C.widget_id||C.id||`${_.id}-widget-${o}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${A}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&B`
                    ${N0.map((C,o)=>B`
                        <${w1} key=${o} annotations=${C} />
                    `)}
                `}
                ${x_.length>0&&B`
                    <div class="media-preview">
                        ${x_.map(({id:C,mimeType:o})=>{let I_=typeof o==="string"&&o.toLowerCase().startsWith("image/svg")?W$(C):W4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${I_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(c_)=>d_(c_,C)}
                                />
                            `})}
                    </div>
                `}
                ${x_.length>0&&B`
                    ${x_.map(({annotations:C},o)=>B`
                        ${C&&B`<${w1} key=${o} annotations=${C} />`}
                    `)}
                `}
                ${F0.length>0&&B`
                    <div class="file-attachments">
                        ${F0.map((C)=>B`
                            <${C7} key=${C} mediaId=${C} onPreview=${E_} />
                        `)}
                    </div>
                `}
                ${D0.length>0&&B`
                    <div class="resource-links">
                        ${D0.map((C,o)=>B`
                            <div key=${o}>
                                <${f7} block=${C} />
                                <${w1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Z0.length>0&&B`
                    <div class="resource-embeds">
                        ${Z0.map((C,o)=>B`
                            <div key=${o}>
                                <${S7} block=${C} />
                                <${w1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${S.link_previews.map((C,o)=>B`
                            <${u7} key=${o} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${I&&B`<${e8} src=${I} onClose=${()=>c(null)} />`}
        ${g_&&B`
            <${t8}
                mediaId=${g_.mediaId}
                info=${g_.info}
                onClose=${()=>p_(null)}
            />
        `}
    `}function $6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:Y,onFileRef:X,onOpenWidget:L,emptyMessage:q,timelineRef:Q,agents:V,user:H,onDeletePost:w,reverse:T=!0,removingPostIds:m,searchQuery:g}){let[A,I]=f(!1),c=k(null),y=typeof IntersectionObserver<"u",S=P(async()=>{if(!j||!$||A)return;I(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,A,j]),s=P((n)=>{let{scrollTop:Z_,scrollHeight:t,clientHeight:G_}=n.target,Y_=T?t-G_-Z_:Z_,W_=Math.max(300,G_);if(Y_<W_)S()},[T,S]);v(()=>{if(!y)return;let n=c.current,Z_=Q?.current;if(!n||!Z_)return;let t=300,G_=new IntersectionObserver((Y_)=>{for(let W_ of Y_){if(!W_.isIntersecting)continue;S()}},{root:Z_,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return G_.observe(n),()=>G_.disconnect()},[y,$,j,Q,S]);let a=k(S);if(a.current=S,v(()=>{if(y)return;if(!Q?.current)return;let{scrollTop:n,scrollHeight:Z_,clientHeight:t}=Q.current,G_=T?Z_-t-n:n,Y_=Math.max(300,t);if(G_<Y_)a.current?.()},[y,_,$,T,Q]),v(()=>{if(!Q?.current)return;if(!$||A)return;let{scrollTop:n,scrollHeight:Z_,clientHeight:t}=Q.current,G_=T?Z_-t-n:n,Y_=Math.max(300,t);if(Z_<=t+1||G_<Y_)a.current?.()},[_,$,A,T,Q]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let d=_.slice().sort((n,Z_)=>n.id-Z_.id),$_=(n)=>{let Z_=n?.data?.thread_id;if(Z_===null||Z_===void 0||Z_==="")return null;let t=Number(Z_);return Number.isFinite(t)?t:null},h=new Map;for(let n=0;n<d.length;n+=1){let Z_=d[n],t=Number(Z_?.id),G_=$_(Z_);if(G_!==null){let Y_=h.get(G_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(n),h.set(G_,Y_)}else if(Number.isFinite(t)){let Y_=h.get(t)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=n,h.set(t,Y_)}}let z_=new Map;for(let[n,Z_]of h.entries()){let t=new Set;if(Z_.anchorIndex>=0)t.add(Z_.anchorIndex);for(let G_ of Z_.replyIndexes)t.add(G_);z_.set(n,Array.from(t).sort((G_,Y_)=>G_-Y_))}let n_=d.map((n,Z_)=>{let t=$_(n);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=z_.get(t);if(!G_||G_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=G_.indexOf(Z_);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<G_.length-1}}),u_=B`<div class="timeline-sentinel" ref=${c}></div>`;return B`
        <div class="timeline ${T?"reverse":"normal"}" ref=${Q} onScroll=${s}>
            <div class="timeline-content">
                ${T?u_:null}
                ${d.map((n,Z_)=>{let t=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),G_=m?.has?.(n.id),Y_=n_[Z_]||{};return B`
                    <${_6}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${t}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${G_}
                        highlightQuery=${g}
                        agentName=${f8(n.data?.agent_id,V||{})}
                        agentAvatarUrl=${S8(n.data?.agent_id,V||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(n)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${Y}
                        onFileRef=${X}
                        onOpenWidget=${L}
                        onDelete=${w}
                    />
                `})}
                ${T?null:u_}
            </div>
        </div>
    `}class j6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var s_=new j6;var A1=null,C4=null;function a7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function Z6(){if(C4)return Promise.resolve(C4);if(!A1)A1=import(a7()).then((_)=>{return C4=_,_}).catch((_)=>{throw A1=null,_});return A1}class N6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Z6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var T4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new N6(_,$)}};function f4(){Z6().catch(()=>{})}var R4="piclaw://terminal";var t7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},e7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},P1=null,S4=null;function _j(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function $j(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!_j(Y))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function jj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!P1)P1=$j(()=>Promise.resolve($.init?.())).catch((j)=>{throw P1=null,j});return await P1,$}async function Zj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!S4)S4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await S4}async function Nj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Kj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Yj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function C$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function zj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function K6(){let _=Yj(),$=_?e7:t7,j=C$("--bg-primary",_?"#000000":"#ffffff"),Z=C$("--text-primary",_?"#e7e9ea":"#0f1419"),N=C$("--text-secondary",_?"#71767b":"#536471"),K=C$("--accent-color","#1d9bf0"),Y=C$("--danger-color",_?"#ff7b72":"#cf222e"),X=C$("--success-color",_?"#7ee787":"#1a7f37"),L=C$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=C$("--border-color",_?"#2f3336":"#eff3f4"),Q=C$("--accent-soft-strong",zj(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:Q,selectionForeground:Z,black:L,red:Y,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class v4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await jj();if(await Zj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:K6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=K6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Nj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Kj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var u4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new v4(_,$)}},m4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new v4(_,$)}};function s$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Gj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",Y=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,Q=[];for(let H of q.split("/")){if(!H||H===".")continue;if(H===".."){if(Q.length>0)Q.pop();continue}Q.push(H)}let V=Q.join("/");return`${L1(V)}${K}${Y}`}function s2(_){return _?.preview||null}function Wj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function Xj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function qj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${s$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${s$(X$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${s$(Y2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${s$(Xj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${s$(Wj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${s$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function Vj(_){let $=s2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=qj(_,$);if($.kind==="image"){let Z=$.url||($.path?L1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${s$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=t0($.text||"",null,{rewriteImageSrc:(N)=>Gj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${s$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class g4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=Vj(this.context)}getContent(){let _=s2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=s2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var p4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=s2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new g4(_,$)}},c4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return s2(_)||_?.path?1:!1},mount(_,$){return new g4(_,$)}};var Lj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Qj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},Uj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function z6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function Y6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class G6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=z6(j),K=Uj[N]||"\uD83D\uDCC4",Y=Qj[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Y6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${Y6(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class W6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=z6(_?.path);if(!$||!Lj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new G6(_,$);return new W6(_,$)}};var Bj=/\.(csv|tsv)$/i;function X6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class q6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${X6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${X6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let Y=K.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class V6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var i4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Bj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new q6(_,$);return new V6(_,$)}};var Oj=/\.pdf$/i;function Fj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Fj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Oj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new L6(_,$);return new Q6(_,$)}};var Hj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function n4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class U6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${n4(N)}" alt="${n4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${n4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let Y=K.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class B6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Hj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new U6(_,$);return new B6(_,$)}};var Dj=/\.(mp4|m4v|mov|webm|ogv)$/i;function Jj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Jj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class F6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Dj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new O6(_,$);return new F6(_,$)}};function yj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function kj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var o4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function H6(_){let $=String(_||"").trim();return $?$:o4}function Ej(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function wj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Aj(_,$="*"){try{let j=(K)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(Y,X,L,q,Q,V){try{if(Y&&L!=null&&j({filename:Y,format:X,data:L,mimeType:q,base64Encoded:Boolean(Q),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(Y,X,L,q,Q,V){try{if(X&&j({filename:X,data:Y,mimeType:L,base64Encoded:Boolean(q),mode:Q,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function D6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${wj(j)}`}class J6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${kj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Ej(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Aj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=o4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await D6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await D6(_,"image/png");else this.xmlData=H6(await _.text());else if(_.status===404)this.xmlData=o4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?H6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var r4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!yj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new J6(_,$);return new y6(_,$)}};class k6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new k6;var b1="workspaceExplorerScale",Pj=["compact","default","comfortable"],bj=new Set(Pj),xj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function E6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return bj.has(j)?j:$}function a4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Ij(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Mj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function t4(_={}){let $=Ij(_),j=_.stored?E6(_.stored,$):$;return Mj(j,_)}function w6(_){return xj[E6(_)]}var Cj=60000,x6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function I6(_,$,j,Z=0,N=[]){if(!j&&x6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)I6(K,$,j,Z+1,N);return N}function A6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&x6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let Y of K.children)N(Y)};return N(_),Z.join("|")}function j3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,Y=Z.map((X)=>{let L=j3(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:Y}:_}function _3(_,$,j){if(!_)return _;if(_.path===$)return j3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let Y=_3(K,$,j);if(Y!==K)Z=!0;return Y});return Z?{..._,children:N}:_}var M6=4,e4=14,Tj=8,fj=16;function C6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=C6(Z);return _.__bytes=j,j}function T6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=M6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let Y=K;if(K.length>e4){let X=K.slice(0,e4-1),L=K.slice(e4-1),q=L.reduce((Q,V)=>Q+V.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),Y=X}return Z.children=Y.map((X)=>{if(X.kind==="dir")return T6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function P6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function f6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function x1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function Z3(_,$,j,Z,N,K){let Y=Math.PI*2-0.0001,X=K-N>Y?N+Y:K,L=x1(_,$,Z,N),q=x1(_,$,Z,X),Q=x1(_,$,j,X),V=x1(_,$,j,N),H=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var S6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function R6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),Y=(X,L,q,Q)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let H=Math.max(0,Number(X.size)||0);if(H<=0)return;let w=q-L,T=L;V.forEach((m,g)=>{let A=Math.max(0,Number(m.size)||0);if(A<=0)return;let I=A/H,c=T,y=g===V.length-1?q:T+w*I;if(T=y,y-c<0.003)return;let S=S6[Q];if(S){let s=f6(c,Q,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:A,color:s,depth:Q,startAngle:c,endAngle:y,innerRadius:S[0],outerRadius:S[1],d:Z3(120,120,S[0],S[1],c,y)}),Q===1)N.push({key:m.path,name:m.name,size:A,pct:K>0?A/K*100:0,color:s})}if(Q<M6)Y(m,c,y,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function $3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=$3(Z,$);if(N)return N}return null}function v6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=S6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,Y=Math.PI*3/2,X=f6(K,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:Z3(120,120,N[0],N[1],K,Y)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function b6(_,$=!1,j=!1){if(!_)return null;let Z=C6(_),N=T6(_,0),K=N.size||Z,{segments:Y,legend:X}=R6(N,K,j);if(!Y.length&&K>0){let L=v6("[files]",N.path,K,j);Y=L.segments,X=L.legend}return{root:N,totalSize:K,segments:Y,legend:X,truncated:$,isDarkTheme:j}}function Sj({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[K,Y]=f(()=>[_?.root?.path||"."]),[X,L]=f(!1);v(()=>{let h=_?.root?.path||".";N(h),Y([h]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;L(!0);let h=setTimeout(()=>L(!1),180);return()=>clearTimeout(h)},[Z]);let q=T_(()=>{return $3(_.root,Z)||_.root},[_?.root,Z]),Q=q?.size||_.totalSize||0,{segments:V,legend:H}=T_(()=>{let h=R6(q,Q,_.isDarkTheme);if(h.segments.length>0)return h;if(Q<=0)return h;let z_=q?.children?.length?"Total":"[files]";return v6(z_,q?.path||_?.root?.path||".",Q,_.isDarkTheme)},[q,Q,_.isDarkTheme,_?.root?.path]),[w,T]=f(V),m=k(new Map),g=k(0);v(()=>{let h=m.current,z_=new Map(V.map((Z_)=>[Z_.key,Z_])),n_=performance.now(),u_=220,n=(Z_)=>{let t=Math.min(1,(Z_-n_)/220),G_=t*(2-t),Y_=V.map((W_)=>{let N_=h.get(W_.key)||{startAngle:W_.startAngle,endAngle:W_.startAngle,innerRadius:W_.innerRadius,outerRadius:W_.innerRadius},S_=(z0,X_)=>z0+(X_-z0)*G_,w_=S_(N_.startAngle,W_.startAngle),D_=S_(N_.endAngle,W_.endAngle),J_=S_(N_.innerRadius,W_.innerRadius),Y0=S_(N_.outerRadius,W_.outerRadius);return{...W_,d:Z3(120,120,J_,Y0,w_,D_)}});if(T(Y_),t<1)g.current=requestAnimationFrame(n)};if(g.current)cancelAnimationFrame(g.current);return g.current=requestAnimationFrame(n),m.current=z_,()=>{if(g.current)cancelAnimationFrame(g.current)}},[V]);let A=w.length?w:V,I=Q>0?X$(Q):"0 B",c=q?.name||"",S=(c&&c!=="."?c:"Total")||"Total",s=I,a=K.length>1,d=(h)=>{if(!h?.path)return;let z_=$3(_.root,h.path);if(!z_||!Array.isArray(z_.children)||z_.children.length===0)return;Y((n_)=>[...n_,z_.path]),N(z_.path),j(null)},$_=()=>{if(!a)return;Y((h)=>{let z_=h.slice(0,-1);return N(z_[z_.length-1]||_?.root?.path||"."),z_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${A.length}
                data-base-size=${Q}>
                ${A.map((h)=>B`
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
                        <title>${h.label} — ${X$(h.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${a?" is-drill":""}`}
                    onClick=${$_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${S}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((h)=>B`
                        <div key=${h.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${h.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${h.name}>${h.name}</span>
                            <span class="workspace-folder-starburst-size">${X$(h.size)}</span>
                            <span class="workspace-folder-starburst-pct">${h.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Rj({mediaId:_}){let[$,j]=f(null);if(v(()=>{if(!_)return;O2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?X$($.metadata.size):"";return B`
        <a href=${W$(_)} download=${Z} class="file-attachment"
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
    `}function u6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:Y=!1}){let[X,L]=f(null),[q,Q]=f(new Set(["."])),[V,H]=f(null),[w,T]=f(null),[m,g]=f(""),[A,I]=f(null),[c,y]=f(null),[S,s]=f(!0),[a,d]=f(!1),[$_,h]=f(null),[z_,n_]=f(()=>F2("workspaceShowHidden",!1)),[u_,n]=f(!1),[Z_,t]=f(null),[G_,Y_]=f(null),[W_,Q_]=f(null),[N_,S_]=f(!1),[w_,D_]=f(null),[J_,Y0]=f(()=>P6()),[z0,X_]=f(()=>t4({stored:a0(b1),...a4()})),[__,B_]=f(!1),j_=k(q),O_=k(""),A_=k(null),o_=k(0),m_=k(new Set),d_=k(null),g_=k(new Map),p_=k(_),E_=k(Z),y_=k(null),R_=k(null),G0=k(null),b0=k(null),P_=k(null),D0=k(null),Z0=k("."),b_=k(null),N0=k({path:null,dragging:!1,startX:0,startY:0}),r_=k({path:null,dragging:!1,startX:0,startY:0}),$0=k({path:null,timer:0}),K0=k(!1),x_=k(0),F0=k(new Map),v0=k(null),a_=k(null),j0=k(null),H_=k(null),J0=k(null),C=k(null),o=k(z_),U_=k($),I_=k(j??$),c_=k(0),X0=k(W_),F_=k(u_),B$=k(Z_),c0=k(null),T$=k({x:0,y:0}),T0=k(0),k$=k(null),L0=k(V),e0=k(w),h0=k(null),q0=k(null),y2=k(A);p_.current=_,E_.current=Z,v(()=>{j_.current=q},[q]),v(()=>{o.current=z_},[z_]),v(()=>{U_.current=$},[$]),v(()=>{I_.current=j??$},[j,$]),v(()=>{X0.current=W_},[W_]),v(()=>{if(typeof window>"u")return;let U=()=>{X_(t4({stored:a0(b1),...a4()}))};U();let J=()=>U(),x=()=>U(),z=(R)=>{if(!R||R.key===null||R.key===b1)U()};window.addEventListener("resize",J),window.addEventListener("focus",x),window.addEventListener("storage",z);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),M=(R,l)=>{if(!R)return;if(R.addEventListener)R.addEventListener("change",l);else if(R.addListener)R.addListener(l)},u=(R,l)=>{if(!R)return;if(R.removeEventListener)R.removeEventListener("change",l);else if(R.removeListener)R.removeListener(l)};return M(O,J),M(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",x),window.removeEventListener("storage",z),u(O,J),u(D,J)}},[]),v(()=>{let U=(J)=>{let x=J?.detail?.path;if(!x)return;let z=x.split("/"),O=[];for(let D=1;D<z.length;D++)O.push(z.slice(0,D).join("/"));if(O.length)Q((D)=>{let M=new Set(D);M.add(".");for(let u of O)M.add(u);return M});H(x),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(x)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),v(()=>{F_.current=u_},[u_]),v(()=>{B$.current=Z_},[Z_]),v(()=>{L0.current=V},[V]),v(()=>{e0.current=w},[w]),v(()=>{y2.current=A},[A]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>Y0(P6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),x=()=>U();if(J?.addEventListener)J.addEventListener("change",x);else if(J?.addListener)J.addListener(x);let z=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",x);else if(J?.removeListener)J.removeListener(x);z?.disconnect()}},[]),v(()=>{if(!w)return;let U=P_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[w]),v(()=>{if(!__)return;let U=(x)=>{let z=x?.target;if(!(z instanceof Element))return;if(J0.current?.contains(z))return;if(C.current?.contains(z))return;B_(!1)},J=(x)=>{if(x?.key==="Escape")B_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[__]);let o$=async(U)=>{d(!0),I(null),y(null);try{let J=await q4(U,20000);I(J)}catch(J){I({error:J.message||"Failed to load preview"})}finally{d(!1)}};y_.current=o$;let y0=async()=>{if(!U_.current)return;try{let U=await m2("",1,o.current),J=A6(U.root,j_.current,o.current);if(J===O_.current){s(!1);return}if(O_.current=J,A_.current=U.root,!o_.current)o_.current=requestAnimationFrame(()=>{o_.current=0,L((x)=>j3(x,A_.current)),s(!1)})}catch(U){h(U.message||"Failed to load workspace"),s(!1)}},k2=async(U)=>{if(!U)return;if(m_.current.has(U))return;m_.current.add(U);try{let J=await m2(U,1,o.current);L((x)=>_3(x,U,J.root))}catch(J){h(J.message||"Failed to load workspace")}finally{m_.current.delete(U)}};R_.current=k2;let v_=P(()=>{let U=V;if(!U)return".";let J=g_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[V]),u0=P((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let x=J.dataset.path,z=J.dataset.type;if(!x)return null;if(z==="dir")return x;if(x.includes("/")){let O=x.split("/");return O.pop(),O.join("/")||"."}return"."},[]),H0=P((U)=>{return u0(U?.target||null)},[u0]),k0=P((U)=>{X0.current=U,Q_(U)},[]),f0=P(()=>{let U=$0.current;if(U?.timer)clearTimeout(U.timer);$0.current={path:null,timer:0}},[]),_$=P((U)=>{if(!U||U==="."){f0();return}let J=g_.current?.get(U);if(!J||J.type!=="dir"){f0();return}if(j_.current?.has(U)){f0();return}if($0.current?.path===U)return;f0();let x=setTimeout(()=>{$0.current={path:null,timer:0},R_.current?.(U),Q((z)=>{let O=new Set(z);return O.add(U),O})},600);$0.current={path:U,timer:x}},[f0]),E$=P((U,J)=>{if(T$.current={x:U,y:J},T0.current)return;T0.current=requestAnimationFrame(()=>{T0.current=0;let x=c0.current;if(!x)return;let z=T$.current;x.style.transform=`translate(${z.x+12}px, ${z.y+12}px)`})},[]),r$=P((U)=>{if(!U)return;let x=(g_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x)return;Y_({path:U,label:x})},[]),f$=P(()=>{if(Y_(null),T0.current)cancelAnimationFrame(T0.current),T0.current=0;if(c0.current)c0.current.style.transform="translate(-9999px, -9999px)"},[]),S$=P((U)=>{if(!U)return".";let J=g_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let x=U.split("/");return x.pop(),x.join("/")||"."},[]),V$=P(()=>{T(null),g("")},[]),w$=P((U)=>{if(!U)return;let x=(g_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!x||U===".")return;T(U),g(x)},[]),$$=P(async()=>{let U=e0.current;if(!U)return;let J=(m||"").trim();if(!J){V$();return}let x=g_.current?.get(U),z=(x?.name||U.split("/").pop()||U).trim();if(J===z){V$();return}try{let D=(await Q4(U,J))?.path||U,M=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(V$(),h(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:x?.type||"file"}})),x?.type==="dir")Q((u)=>{let R=new Set;for(let l of u)if(l===U)R.add(D);else if(l.startsWith(`${U}/`))R.add(`${D}${l.slice(U.length)}`);else R.add(l);return R});if(H(D),x?.type==="dir")I(null),d(!1),y(null);else y_.current?.(D);R_.current?.(M)}catch(O){h(O?.message||"Failed to rename file")}},[V$,m]),a$=P(async(U)=>{let z=U||".";for(let O=0;O<50;O+=1){let M=`untitled${O===0?"":`-${O}`}.md`;try{let R=(await L4(z,M,""))?.path||(z==="."?M:`${z}/${M}`);if(z&&z!==".")Q((l)=>new Set([...l,z]));H(R),h(null),R_.current?.(z),y_.current?.(R);return}catch(u){if(u?.status===409||u?.code==="file_exists")continue;h(u?.message||"Failed to create file");return}}h("Failed to create file (untitled name already in use).")},[]),m0=P((U)=>{if(U?.stopPropagation?.(),N_)return;let J=S$(L0.current);a$(J)},[N_,S$,a$]);v(()=>{if(typeof window>"u")return;let U=(J)=>{let x=J?.detail?.updates||[];if(!Array.isArray(x)||x.length===0)return;L((u)=>{let R=u;for(let l of x){if(!l?.root)continue;if(!R||l.path==="."||!l.path)R=l.root;else R=_3(R,l.path,l.root)}if(R)O_.current=A6(R,j_.current,o.current);return s(!1),R});let z=L0.current;if(Boolean(z)&&x.some((u)=>{let R=u?.path||"";if(!R||R===".")return!0;return z===R||z.startsWith(`${R}/`)||R.startsWith(`${z}/`)}))F0.current.clear();if(!z||!y2.current)return;let D=g_.current?.get(z);if(D&&D.type==="dir")return;if(x.some((u)=>{let R=u?.path||"";if(!R||R===".")return!0;return z===R||z.startsWith(`${R}/`)}))y_.current?.(z)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),d_.current=y0;let E0=k(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=I_.current??U_.current,x=document.visibilityState!=="hidden"&&(J||U.matches&&U_.current);g2(x,o.current).catch(()=>{})}).current,Q0=k(0),U0=k(()=>{if(Q0.current)clearTimeout(Q0.current);Q0.current=setTimeout(()=>{Q0.current=0,E0()},250)}).current;v(()=>{if(U_.current)d_.current?.();U0()},[$,j]),v(()=>{d_.current(),E0();let U=setInterval(()=>d_.current(),Cj),J=H2("previewHeight",null),x=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(x_.current=x,G0.current)G0.current.style.setProperty("--preview-height",`${x}px`);let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>U0();if(z.addEventListener)z.addEventListener("change",O);else if(z.addListener)z.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),o_.current)cancelAnimationFrame(o_.current),o_.current=0;if(z.removeEventListener)z.removeEventListener("change",O);else if(z.removeListener)z.removeListener(O);if(document.removeEventListener("visibilitychange",O),Q0.current)clearTimeout(Q0.current),Q0.current=0;if(b_.current)clearTimeout(b_.current),b_.current=null;g2(!1,o.current).catch(()=>{})}},[]);let l0=T_(()=>I6(X,q,z_),[X,q,z_]),W2=T_(()=>new Map(l0.map((U)=>[U.node.path,U.node])),[l0]),R$=T_(()=>w6(z0),[z0]);g_.current=W2;let t_=(V?g_.current.get(V):null)?.type==="dir";v(()=>{if(!V||!t_){D_(null),v0.current=null,a_.current=null;return}let U=V,J=`${z_?"hidden":"visible"}:${V}`,x=F0.current,z=x.get(J);if(z?.root){x.delete(J),x.set(J,z);let M=b6(z.root,Boolean(z.truncated),J_);if(M)v0.current=M,a_.current=V,D_({loading:!1,error:null,payload:M});return}let O=v0.current,D=a_.current;D_({loading:!0,error:null,payload:D===V?O:null}),m2(V,Tj,z_).then((M)=>{if(L0.current!==U)return;let u={root:M?.root,truncated:Boolean(M?.truncated)};x.delete(J),x.set(J,u);while(x.size>fj){let l=x.keys().next().value;if(!l)break;x.delete(l)}let R=b6(u.root,u.truncated,J_);v0.current=R,a_.current=V,D_({loading:!1,error:null,payload:R})}).catch((M)=>{if(L0.current!==U)return;D_({loading:!1,error:M?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,t_,z_,J_]);let n0=Boolean(A&&A.kind==="text"&&!t_&&(!A.size||A.size<=262144)),A$=n0?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",d0=Boolean(V&&V!=="."),O$=Boolean(V&&!t_),P$=Boolean(V&&!t_),j$=V&&t_?Q1(V,z_):null,g0=P(()=>B_(!1),[]),e_=P(async(U)=>{g0();try{await U?.()}catch{}},[g0]);v(()=>{let U=j0.current;if(H_.current)H_.current.dispose(),H_.current=null;if(!U)return;if(U.innerHTML="",!V||t_||!A||A.error)return;let J={path:V,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},x=s_.resolve(J)||s_.get("workspace-preview-default");if(!x)return;let z=x.mount(U,J);return H_.current=z,()=>{if(H_.current===z)z.dispose(),H_.current=null;U.innerHTML=""}},[V,t_,A]);let R0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},w0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},t$=k((U)=>{if(q0.current)clearTimeout(q0.current),q0.current=null;let x=R0(U)?.closest?.("[data-path]");if(!x)return;let z=x.dataset.path;if(x.dataset.type==="dir"||!z)return;if(e0.current===z)V$();E_.current?.(z)}).current,v$=k((U)=>{if(K0.current){K0.current=!1;return}let J=R0(U),x=J?.closest?.("[data-path]");if(b0.current?.focus?.(),!x)return;let z=x.dataset.path,O=x.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),M=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),u=L0.current===z,R=e0.current;if(R){if(R===z)return;V$()}let l=O==="file"&&h0.current===z&&!D&&!M;if(u&&!D&&!M&&z!=="."&&!l){if(q0.current)clearTimeout(q0.current);q0.current=setTimeout(()=>{q0.current=null,w$(z)},350);return}if(O==="dir"){if(h0.current=null,H(z),I(null),y(null),d(!1),!j_.current.has(z))R_.current?.(z);if(u&&!D)return;Q((x0)=>{let L_=new Set(x0);if(L_.has(z))L_.delete(z);else L_.add(z);return L_})}else{h0.current=null,H(z);let M_=g_.current.get(z);if(M_)p_.current?.(M_.path,M_);y_.current?.(z)}}).current,s0=k(()=>{O_.current="",d_.current(),Array.from(j_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>R_.current?.(J))}).current,i0=k(()=>{h0.current=null,H(null),I(null),y(null),d(!1)}).current,u$=k(()=>{n_((U)=>{let J=!U;if(typeof window<"u")i_("workspaceShowHidden",String(J));return o.current=J,g2(!0,J).catch(()=>{}),O_.current="",d_.current?.(),Array.from(j_.current||[]).filter((z)=>z&&z!==".").forEach((z)=>R_.current?.(z)),J})}).current,E2=k((U)=>{if(R0(U)?.closest?.("[data-path]"))return;i0()}).current,V0=P(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await B4(U);let z=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(L0.current===U)i0();R_.current?.(z),h(null)}catch(z){I((O)=>({...O||{},error:z.message||"Failed to delete file"}))}},[i0]),Z$=P((U)=>{let J=b0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),F$=P((U)=>{let J=l0;if(!J||J.length===0)return;let x=V?J.findIndex((z)=>z.node.path===V):-1;if(U.key==="ArrowDown"){U.preventDefault();let z=Math.min(x+1,J.length-1),O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")p_.current?.(O.node.path,O.node),y_.current?.(O.node.path);else I(null),d(!1),y(null);Z$(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let z=x<=0?0:x-1,O=J[z];if(!O)return;if(H(O.node.path),O.node.type!=="dir")p_.current?.(O.node.path,O.node),y_.current?.(O.node.path);else I(null),d(!1),y(null);Z$(O.node.path);return}if(U.key==="ArrowRight"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&!q.has(z.node.path))U.preventDefault(),R_.current?.(z.node.path),Q((O)=>new Set([...O,z.node.path]));return}if(U.key==="ArrowLeft"&&x>=0){let z=J[x];if(z?.node?.type==="dir"&&q.has(z.node.path))U.preventDefault(),Q((O)=>{let D=new Set(O);return D.delete(z.node.path),D});return}if(U.key==="Enter"&&x>=0){U.preventDefault();let z=J[x];if(!z)return;let O=z.node.path;if(z.node.type==="dir"){if(!j_.current.has(O))R_.current?.(O);Q((M)=>{let u=new Set(M);if(u.has(O))u.delete(O);else u.add(O);return u}),I(null),y(null),d(!1)}else p_.current?.(O,z.node),y_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&x>=0){let z=J[x];if(!z||z.node.type==="dir")return;U.preventDefault(),V0(z.node.path);return}if(U.key==="Escape")U.preventDefault(),i0()},[i0,V0,q,l0,Z$,V]),m$=P((U)=>{let J=R0(U),x=J?.closest?.(".workspace-row");if(!x)return;let z=x.dataset.type,O=x.dataset.path;if(!O||O===".")return;if(e0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(N0.current={path:w0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},z!=="file")return;if(b_.current)clearTimeout(b_.current);b_.current=setTimeout(()=>{if(b_.current=null,N0.current?.dragging)return;V0(O)},600)},[V0]),L$=P(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;let U=N0.current;if(U?.dragging&&U.path){let J=X0.current||v_(),x=k$.current;if(typeof x==="function")x(U.path,J)}N0.current={path:null,dragging:!1,startX:0,startY:0},c_.current=0,n(!1),t(null),k0(null),f0(),f$()},[v_,f$,k0,f0]),b$=P((U)=>{let J=N0.current,x=U?.touches?.[0];if(!x||!J?.path){if(b_.current)clearTimeout(b_.current),b_.current=null;return}let z=Math.abs(x.clientX-J.startX),O=Math.abs(x.clientY-J.startY),D=z>8||O>8;if(D&&b_.current)clearTimeout(b_.current),b_.current=null;if(!J.dragging&&D)J.dragging=!0,n(!0),t("move"),r$(J.path);if(J.dragging){U.preventDefault(),E$(x.clientX,x.clientY);let M=document.elementFromPoint(x.clientX,x.clientY),u=u0(M)||v_();if(X0.current!==u)k0(u);_$(u)}},[u0,v_,r$,E$,k0,_$]),e$=k((U)=>{U.preventDefault();let J=G0.current;if(!J)return;let x=U.clientY,z=x_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=x,M=(R)=>{D=R.clientY;let l=J.clientHeight-80,M_=Math.min(Math.max(z-(R.clientY-x),80),l);J.style.setProperty("--preview-height",`${M_}px`),x_.current=M_},u=()=>{let R=J.clientHeight-80,l=Math.min(Math.max(z-(D-x),80),R);x_.current=l,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("previewHeight",String(Math.round(l))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",u)}).current,N$=k((U)=>{U.preventDefault();let J=G0.current;if(!J)return;let x=U.touches[0];if(!x)return;let z=x.clientY,O=x_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let M=(R)=>{let l=R.touches[0];if(!l)return;R.preventDefault();let M_=J.clientHeight-80,x0=Math.min(Math.max(O-(l.clientY-z),80),M_);J.style.setProperty("--preview-height",`${x0}px`),x_.current=x0},u=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",i_("previewHeight",String(Math.round(x_.current||O))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}).current,p0=async()=>{if(!V)return;try{let U=await V4(V);if(U.media_id)y(U.media_id)}catch(U){I((J)=>({...J||{},error:U.message||"Failed to attach"}))}},H$=async()=>{if(!V||t_)return;await V0(V)},D$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},g$=P((U)=>{if(!D$(U))return;if(U.preventDefault(),c_.current+=1,!F_.current)n(!0);t("upload");let J=H0(U)||v_();k0(J),_$(J)},[v_,H0,k0,_$]),K$=P((U)=>{if(!D$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!F_.current)n(!0);if(B$.current!=="upload")t("upload");let J=H0(U)||v_();if(X0.current!==J)k0(J);_$(J)},[v_,H0,k0,_$]),_2=P((U)=>{if(!D$(U))return;if(U.preventDefault(),c_.current=Math.max(0,c_.current-1),c_.current===0)n(!1),t(null),k0(null),f0()},[k0,f0]),Q$=P(async(U,J=".")=>{let x=Array.from(U||[]);if(x.length===0)return;let z=J&&J!==""?J:".",O=z!=="."?z:"workspace root";S_(!0);try{let D=null;for(let M of x)try{D=await V1(M,z)}catch(u){let R=u?.status,l=u?.code;if(R===409||l==="file_exists"){let M_=M?.name||"file";if(!window.confirm(`"${M_}" already exists in ${O}. Overwrite?`))continue;D=await V1(M,z,{overwrite:!0})}else throw u}if(D?.path)h0.current=D.path,H(D.path),y_.current?.(D.path);R_.current?.(z)}catch(D){h(D.message||"Failed to upload file")}finally{S_(!1)}},[]),p$=P(async(U,J)=>{if(!U)return;let x=g_.current?.get(U);if(!x)return;let z=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(z===O)return;try{let M=(await U4(U,z))?.path||U;if(x.type==="dir")Q((u)=>{let R=new Set;for(let l of u)if(l===U)R.add(M);else if(l.startsWith(`${U}/`))R.add(`${M}${l.slice(U.length)}`);else R.add(l);return R});if(H(M),x.type==="dir")I(null),d(!1),y(null);else y_.current?.(M);R_.current?.(O),R_.current?.(z)}catch(D){h(D?.message||"Failed to move entry")}},[]);k$.current=p$;let X2=P(async(U)=>{if(!D$(U))return;U.preventDefault(),c_.current=0,n(!1),t(null),Q_(null),f0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let x=X0.current||H0(U)||v_();await Q$(J,x)},[v_,H0,Q$]),c$=P((U)=>{if(U?.stopPropagation?.(),N_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";Z0.current=J,D0.current?.click()},[N_]),J$=P(()=>{if(N_)return;let U=L0.current,J=U?g_.current?.get(U):null;Z0.current=J?.type==="dir"?J.path:".",D0.current?.click()},[N_]),$2=P(()=>{e_(()=>m0(null))},[e_,m0]),q2=P(()=>{e_(()=>J$())},[e_,J$]),x$=P(()=>{e_(()=>s0())},[e_,s0]),w2=P(()=>{e_(()=>u$())},[e_,u$]),V_=P(()=>{if(!V||!n0)return;e_(()=>E_.current?.(V,A))},[e_,V,n0,A]),h$=P(()=>{if(!V||V===".")return;e_(()=>w$(V))},[e_,V,w$]),A2=P(()=>{if(!V||t_)return;e_(()=>H$())},[e_,V,t_,H$]),P2=P(()=>{if(!V||t_)return;e_(()=>p0())},[e_,V,t_,p0]),j2=P(()=>{if(!j$)return;if(g0(),typeof window<"u")window.open(j$,"_blank","noopener")},[g0,j$]),b2=P(()=>{g0(),N?.()},[g0,N]),x2=P(()=>{g0(),K?.()},[g0,K]),I2=P((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let x=J.dataset.path;if(!x||x===".")return;if(e0.current===x)return;let z=R0(U);if(z?.closest?.("button, a, input, .workspace-caret"))return;if(!w0(z))return;U.preventDefault(),r_.current={path:x,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(M)=>{let u=r_.current;if(!u?.path)return;let R=Math.abs(M.clientX-u.startX),l=Math.abs(M.clientY-u.startY),M_=R>4||l>4;if(!u.dragging&&M_)u.dragging=!0,K0.current=!0,n(!0),t("move"),r$(u.path),E$(M.clientX,M.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(u.dragging){M.preventDefault(),E$(M.clientX,M.clientY);let x0=document.elementFromPoint(M.clientX,M.clientY),L_=u0(x0)||v_();if(X0.current!==L_)k0(L_);_$(L_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let M=r_.current;if(M?.dragging&&M.path){let u=X0.current||v_(),R=k$.current;if(typeof R==="function")R(M.path,u)}r_.current={path:null,dragging:!1,startX:0,startY:0},c_.current=0,n(!1),t(null),k0(null),f0(),f$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{K0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[u0,v_,r$,E$,f$,k0,_$,f0]),M2=P(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let x=Z0.current||".";if(await Q$(J,x),Z0.current=".",U?.target)U.target.value=""},[Q$]);return B`
        <aside
            class=${`workspace-sidebar${u_?" workspace-drop-active":""}`}
            data-workspace-scale=${z0}
            ref=${G0}
            onDragEnter=${g$}
            onDragOver=${K$}
            onDragLeave=${_2}
            onDrop=${X2}
        >
            <input type="file" multiple style="display:none" ref=${D0} onChange=${M2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),B_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&B`
                            <div class="workspace-menu-dropdown" ref=${J0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${$2} disabled=${N_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${q2} disabled=${N_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${x$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${z_?" active":""}`} role="menuitem" onClick=${w2}>
                                    ${z_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&B`<div class="workspace-menu-separator"></div>`}
                                ${V&&!t_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_} disabled=${!n0}>Open in editor</button>
                                `}
                                ${d0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h$}>Rename selected</button>
                                `}
                                ${P$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P2}>Download selected file</button>
                                `}
                                ${j$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${j2}>Download selected folder (zip)</button>
                                `}
                                ${O$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${A2}>Delete selected file</button>
                                `}

                                ${(N||K)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x2}>
                                        ${Y?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${m0} title="New file" disabled=${N_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${E2}>
                ${N_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${S&&B`<div class="workspace-loading">Loading…</div>`}
                ${$_&&B`<div class="workspace-error">${$_}</div>`}
                ${X&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${b0}
                        tabIndex="0"
                        onClick=${v$}
                        onDblClick=${t$}
                        onKeyDown=${F$}
                        onTouchStart=${m$}
                        onTouchEnd=${L$}
                        onTouchMove=${b$}
                        onTouchCancel=${L$}
                    >
                        ${l0.map(({node:U,depth:J})=>{let x=U.type==="dir",z=U.path===V,O=U.path===w,D=x&&q.has(U.path),M=W_&&U.path===W_,u=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return B`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${z?" selected":""}${M?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*R$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${I2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${x?D?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${x?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${x?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${P_}
                                                value=${m}
                                                onInput=${(R)=>g(R?.target?.value||"")}
                                                onKeyDown=${(R)=>{if(R.key==="Enter")R.preventDefault(),$$();else if(R.key==="Escape")R.preventDefault(),V$()}}
                                                onBlur=${V$}
                                                onClick=${(R)=>R.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${x&&!D&&u>0&&B`
                                        <span class="workspace-count">${u}</span>
                                    `}
                                    ${x&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${c$}
                                            disabled=${N_}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${e$} onTouchStart=${N$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${m0} title="New file" disabled=${N_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!t_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>n0&&E_.current?.(V,A)}
                                    title=${A$}
                                    disabled=${!n0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${H$}
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
                            ${t_?B`
                                    <button class="workspace-download" onClick=${J$}
                                        title="Upload files to this folder" disabled=${N_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Q1(V,z_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${p0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${a&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&B`<div class="workspace-error">${A.error}</div>`}
                    ${t_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${w_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${w_?.error&&B`<div class="workspace-error">${w_.error}</div>`}
                        ${w_?.payload&&w_.payload.segments?.length>0&&B`
                            <${Sj} payload=${w_.payload} />
                        `}
                        ${w_?.payload&&(!w_.payload.segments||w_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!t_&&B`
                        <div class="workspace-preview-body" ref=${j0}></div>
                    `}
                    ${c&&B`
                        <div class="workspace-download-card">
                            <${Rj} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${G_&&B`
                <div class="workspace-drag-ghost" ref=${c0}>${G_.label}</div>
            `}
        </aside>
    `}var vj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,uj=/\.(csv|tsv)$/i,mj=/\.pdf$/i,gj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,m6=/\.drawio(\.xml|\.svg|\.png)?$/i;function g6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:Y,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:Q,onToggleZen:V,zenMode:H}){let[w,T]=f(null),m=k(null);v(()=>{if(!w)return;let y=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;T(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[w]),v(()=>{let y=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let s=_.findIndex((a)=>a.id===$);if(S.shiftKey){let a=_[(s-1+_.length)%_.length];j?.(a.id)}else{let a=_[(s+1)%_.length];j?.(a.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let g=P((y,S)=>{if(y.button===1){y.preventDefault(),Z?.(S);return}if(y.button===0)j?.(S)},[j,Z]),A=P((y,S)=>{y.preventDefault(),T({id:S,x:y.clientX,y:y.clientY})},[]),I=P((y)=>{y.preventDefault(),y.stopPropagation()},[]),c=P((y,S)=>{y.preventDefault(),y.stopPropagation(),Z?.(S)},[Z]);if(v(()=>{if(!$||!m.current)return;let y=m.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((y)=>B`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(S)=>g(S,y.id)}
                    onContextMenu=${(S)=>A(S,y.id)}
                >
                    ${y.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${y.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${I}
                        onClick=${(S)=>c(S,y.id)}
                        title=${y.dirty?"Unsaved changes":"Close"}
                        aria-label=${y.dirty?"Unsaved changes":`Close ${y.label}`}
                    >
                        ${y.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${q}
                    title=${`${Q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${Q?"Hide":"Show"} terminal`}
                    aria-pressed=${Q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${V}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${w&&B`
            <div class="tab-context-menu" style=${{left:w.x+"px",top:w.y+"px"}}>
                <button onClick=${()=>{Z?.(w.id),T(null)}}>Close</button>
                <button onClick=${()=>{N?.(w.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(w.id),T(null)}}>
                    ${_.find((y)=>y.id===w.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{X(w.id),T(null)}}>
                        ${L?.has(w.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${vj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(w.id),S=w.id.split("/").pop()||"document",s="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(S);window.open(s,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${uj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(w.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${mj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(w.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${gj.test(w.id)&&!m6.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(w.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${m6.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(w.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var pj=400,N3=60,p6=220,K3="mdPreviewHeight";function cj(){try{let _=localStorage.getItem(K3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=N3?$:p6}catch{return p6}}function c6({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[K,Y]=f(cj),X=k(null),L=k(null),q=k(""),Q=k(_);return Q.current=_,v(()=>{let w=()=>{let m=Q.current?.()||"";if(m===q.current)return;q.current=m;try{let g=t0(m,null,{sanitize:!1});N(g)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let T=setInterval(w,pj);return()=>clearInterval(T)},[]),v(()=>{if(X.current&&Z)M$(X.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let T=w.clientY,m=L.current?.offsetHeight||K,g=L.current?.parentElement,A=g?g.offsetHeight*0.7:500,I=w.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(S)=>{let s=Math.min(Math.max(m-(S.clientY-T),N3),A);Y(s)},y=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(K3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",y)}}
            onTouchStart=${(w)=>{w.preventDefault();let T=w.touches[0];if(!T)return;let m=T.clientY,g=L.current?.offsetHeight||K,A=L.current?.parentElement,I=A?A.offsetHeight*0.7:500,c=w.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let y=(s)=>{let a=s.touches[0];if(!a)return;s.preventDefault();let d=Math.min(Math.max(g-(a.clientY-m),N3),I);Y(d)},S=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(K3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:K+"px"}}>
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
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function h6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=k(_);K.current=_;let Y=k($);Y.current=$;let X=k(j);X.current=j;let L=k(Z);L.current=Z,v(()=>{X.current();let q=new U1((V,H)=>K.current(V,H),(V)=>Y.current(V),{chatJid:N});q.connect();let Q=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),q.disconnect()}},[N])}function i6(){let[_,$]=f(!1),[j,Z]=f("default"),N=k(!1);v(()=>{let L=F2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await K();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),i_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),i_("notificationsEnabled",String(L))},[K]),X=P((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(L,{body:q});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:X}}var o2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function l6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[K,Y]=f(!1),X=k(!1),L=k(null),q=k(!1),Q=k(null),V=k(null),H=k(0);v(()=>{X.current=K},[K]),v(()=>{V.current=Z},[Z]),v(()=>{H.current+=1,V.current=null,Q.current=null,q.current=!1,X.current=!1,N(null),Y(!1)},[j]);let w=P(async(g=null)=>{let A=H.current;try{if(g){let I=await a1(g,50,0,j);if(A!==H.current)return;N(I.posts),Y(!1)}else{let I=await R2(10,null,j);if(A!==H.current)return;N(I.posts),Y(I.has_more)}}catch(I){if(A!==H.current)return;console.error("Failed to load posts:",I)}},[j]),T=P(async()=>{let g=H.current;try{let A=await R2(10,null,j);if(g!==H.current)return;N((I)=>{if(!I||I.length===0)return A.posts;return o2([...A.posts,...I])}),Y((I)=>I||A.has_more)}catch(A){if(g!==H.current)return;console.error("Failed to refresh timeline:",A)}},[j]),m=P(async(g={})=>{let A=H.current,I=V.current;if(!I||I.length===0)return;if(q.current)return;let{preserveScroll:c=!0,preserveMode:y="top",allowRepeat:S=!1}=g,s=($_)=>{if(!c){$_();return}if(y==="top")$($_);else _($_)},d=I.slice().sort(($_,h)=>$_.id-h.id)[0]?.id;if(!Number.isFinite(d))return;if(!S&&Q.current===d)return;q.current=!0,Q.current=d;try{let $_=await R2(10,d,j);if(A!==H.current)return;if($_.posts.length>0)s(()=>{N((h)=>o2([...$_.posts,...h||[]])),Y($_.has_more)});else Y(!1)}catch($_){if(A!==H.current)return;console.error("Failed to load more posts:",$_)}finally{if(A===H.current)q.current=!1}},[j,_,$]);return v(()=>{L.current=m},[m]),{posts:Z,setPosts:N,hasMore:K,setHasMore:Y,hasMoreRef:X,loadPosts:w,refreshTimeline:T,loadMore:m,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:Q}}function n6(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,K]=f(""),[Y,X]=f({text:"",totalLines:0}),[L,q]=f(null),[Q,V]=f(null),[H,w]=f(null),T=k(null),m=k(0),g=k(!1),A=k(""),I=k(""),c=k(null),y=k(null),S=k(null),s=k(null),a=k(!1),d=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:Y,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:w,lastAgentEventRef:T,lastSilenceNoticeRef:m,isAgentRunningRef:g,draftBufferRef:A,thoughtBufferRef:I,pendingRequestRef:c,stalledPostIdRef:y,currentTurnIdRef:S,steerQueuedTurnIdRef:s,thoughtExpandedRef:a,draftExpandedRef:d}}function d6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,w=$.current||280,T=Q.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(I)=>{m=I.clientX;let c=Math.min(Math.max(w+(I.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},A=()=>{let I=Math.min(Math.max(w+(m-H),160),600);$.current=I,T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",i_("sidebarWidth",String(Math.round(I))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,K=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let w=H.clientX,T=$.current||280,m=Q.currentTarget;m.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let g=(I)=>{let c=I.touches[0];if(!c)return;I.preventDefault();let y=Math.min(Math.max(T+(c.clientX-w),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},A=()=>{m.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",i_("sidebarWidth",String(Math.round($.current||T))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,Y=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientX,w=j.current||$.current||280,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,g=(I)=>{m=I.clientX;let c=Math.min(Math.max(w+(I.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},A=()=>{let I=Math.min(Math.max(w+(m-H),200),800);j.current=I,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("editorWidth",String(Math.round(I))),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,X=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let w=H.clientX,T=j.current||$.current||280,m=Q.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(I)=>{let c=I.touches[0];if(!c)return;I.preventDefault();let y=Math.min(Math.max(T+(c.clientX-w),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},A=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("editorWidth",String(Math.round(j.current||T))),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current,L=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.clientY,w=Z?.current||200,T=Q.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,g=(I)=>{m=I.clientY;let c=Math.min(Math.max(w-(I.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{let I=Math.min(Math.max(w-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=I;T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("dockHeight",String(Math.round(I))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)}).current,q=k((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let H=Q.touches[0];if(!H)return;let w=H.clientY,T=Z?.current||200,m=Q.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let g=(I)=>{let c=I.touches[0];if(!c)return;I.preventDefault();let y=Math.min(Math.max(T-(c.clientY-w),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},A=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("dockHeight",String(Math.round(Z?.current||T))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",A),document.removeEventListener("touchcancel",A)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",A),document.addEventListener("touchcancel",A)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function s6({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=f(()=>l_.getTabs()),[N,K]=f(()=>l_.getActiveId()),[Y,X]=f(()=>l_.getTabs().length>0);v(()=>{return l_.onChange((y,S)=>{Z(y),K(S),X(y.length>0)})},[]);let[L,q]=f(()=>new Set),Q=P((y)=>{q((S)=>{let s=new Set(S);if(s.has(y))s.delete(y);else s.add(y);return s})},[]),V=P((y)=>{q((S)=>{if(!S.has(y))return S;let s=new Set(S);return s.delete(y),s})},[]),H=P((y,S={})=>{if(!y)return;let s={path:y,mode:"edit"};try{if(!s_.resolve(s)){if(!s_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(d){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,d)}let a=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;l_.open(y,a)},[]),w=P(()=>{let y=l_.getActiveId();if(y){let S=l_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}l_.close(y),V(y),$.current?.(y)}},[V]),T=P((y)=>{let S=l_.get(y);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}l_.close(y),V(y),$.current?.(y)},[V]),m=P((y)=>{l_.activate(y)},[]),g=P((y)=>{let S=l_.getTabs().filter((d)=>d.id!==y&&!d.pinned),s=S.filter((d)=>d.dirty).length;if(s>0){if(!window.confirm(`${s} unsaved tab${s>1?"s":""} will be closed. Continue?`))return}let a=S.map((d)=>d.id);l_.closeOthers(y),a.forEach((d)=>{V(d),$.current?.(d)})},[V]),A=P(()=>{let y=l_.getTabs().filter((a)=>!a.pinned),S=y.filter((a)=>a.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let s=y.map((a)=>a.id);l_.closeAll(),s.forEach((a)=>{V(a),$.current?.(a)})},[V]),I=P((y)=>{l_.togglePin(y)},[]),c=P(()=>{let y=l_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return v(()=>{let y=(S)=>{let{oldPath:s,newPath:a,type:d}=S.detail||{};if(!s||!a)return;if(d==="dir"){for(let $_ of l_.getTabs())if($_.path===s||$_.path.startsWith(`${s}/`)){let h=`${a}${$_.path.slice(s.length)}`;l_.rename($_.id,h)}}else l_.rename(s,a)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),v(()=>{let y=(S)=>{if(l_.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:w,handleTabClose:T,handleTabActivate:m,handleTabCloseOthers:g,handleTabCloseAll:A,handleTabTogglePin:I,handleTabTogglePreview:Q,revealInExplorer:c}}function Y3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var z3=Y3("warning",30000),o6=Y3("finalize",120000),G3=Y3("refresh",30000),r6=30000;function a6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function t6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function e6(_=30000){let[,$]=f(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function W3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function _9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function z2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function X3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||Y)}function $9(_,$={}){if(z2($))return null;if(X3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:hj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function j9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Z9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function N9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function K9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function G2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Y9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function hj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function I1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function q3(_){return String(_||"").trim()||"web:default"}function z9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function G9(_={}){return z2(_)&&X3(_)}function ij(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function lj(_={},$={}){if(!G9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=ij({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function W9(_={}){if(!G9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},Y=()=>{Z=0,lj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{X();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),X()},V);if(H!=null)N.add(H)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}function nj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:nj($,j)}var dj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function X9(_){return dj.has(String(_||"").trim())}function sj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function q9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(sj(_),{detail:Z})),!0}var oj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function V9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(z2({window:j,navigator:Z}))};N();let Y=oj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of Y)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function L9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var Q3="piclaw_btw_session",rj=900,aj="__piclawRenameBranchPromptLock__",Q9=()=>{if(typeof window>"u")return null;let _=window,$=aj,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function tj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function ej(){let _=a0(Q3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:Y}}catch{return null}}var U9=t1,B9=_4,_Z=j4,O9=z4,F9=G4,H9=Z4,V3=q$(r0,"getAgentContext",null),$Z=q$(r0,"getAgentModels",{current:null,models:[]}),jZ=q$(r0,"getActiveChatAgents",{chats:[]}),L3=q$(r0,"getChatBranches",{chats:[]}),ZZ=q$(r0,"renameChatBranch",null),NZ=q$(r0,"pruneChatBranch",null),D9=q$(r0,"restoreChatBranch",null),KZ=q$(r0,"getAgentQueueState",{count:0}),YZ=q$(r0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),zZ=q$(r0,"removeAgentQueueItem",{removed:!1}),GZ=q$(r0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});s_.register(T4);s_.register(c4);s_.register(p4);s_.register(h4);s_.register(i4);s_.register(l4);s_.register(d4);s_.register(s4);s_.register(r4);f4();s_.register(u4);s_.register(m4);function WZ({locationParams:_}){let $=T_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=T_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=T_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=T_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[K,Y]=f("disconnected"),[X,L]=f(()=>z2()),[q,Q]=f(null),[V,H]=f(null),[w,T]=f(!1),[m,g]=f("current"),[A,I]=f([]),[c,y]=f([]),[S,s]=f(null),{agentStatus:a,setAgentStatus:d,agentDraft:$_,setAgentDraft:h,agentPlan:z_,setAgentPlan:n_,agentThought:u_,setAgentThought:n,pendingRequest:Z_,setPendingRequest:t,currentTurnId:G_,setCurrentTurnId:Y_,steerQueuedTurnId:W_,setSteerQueuedTurnId:Q_,lastAgentEventRef:N_,lastSilenceNoticeRef:S_,isAgentRunningRef:w_,draftBufferRef:D_,thoughtBufferRef:J_,pendingRequestRef:Y0,stalledPostIdRef:z0,currentTurnIdRef:X_,steerQueuedTurnIdRef:__,thoughtExpandedRef:B_,draftExpandedRef:j_}=n6(),[O_,A_]=f({}),[o_,m_]=f(null),[d_,g_]=f(null),[p_,E_]=f(!1),[y_,R_]=f(null),[G0,b0]=f([]),[P_,D0]=f([]),[Z0,b_]=f(null),[N0,r_]=f([]),[$0,K0]=f(!1),[x_,F0]=f(()=>ej()),[v0,a_]=f(null),j0=T_(()=>G0.find((W)=>W?.chat_jid===$)||null,[G0,$]),H_=T_(()=>P_.find((W)=>W?.chat_jid===$)||j0||null,[j0,P_,$]),J0=H_?.root_chat_jid||j0?.root_chat_jid||$,C=tj(m),[o,U_]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),I_=N0.length,c_=k(new Set),X0=k([]),F_=k(new Set),B$=k(0),c0=k({inFlight:!1,lastAttemptAt:0,turnId:null});c_.current=new Set(N0.map((W)=>W.row_id)),X0.current=N0;let{notificationsEnabled:T$,notificationPermission:T0,toggleNotifications:k$,notify:L0}=i6(),[e0,h0]=f(()=>new Set),[q0,y2]=f(()=>F2("workspaceOpen",!0)),o$=k(null),{editorOpen:y0,tabStripTabs:k2,tabStripActiveId:v_,previewTabs:u0,openEditor:H0,closeEditor:k0,handleTabClose:f0,handleTabActivate:_$,handleTabCloseOthers:E$,handleTabCloseAll:r$,handleTabTogglePin:f$,handleTabTogglePreview:S$,revealInExplorer:V$}=s6({onTabClosed:(W)=>o$.current?.(W)}),w$=k(null),$$=k(null),a$=k(null),m0=k(null),E0=s_.getDockPanes().length>0,[Q0,U0]=f(!1),l0=P(()=>U0((W)=>!W),[]),W2=P(()=>{H0(R4,{label:"Terminal"})},[H0]),R$=!j&&(y0||E0&&Q0),[S0,t_]=f(!1),n0=k(!1),A$=P(()=>{if(!y0||j)return;if(n0.current=Q0,Q0)U0(!1);t_(!0)},[y0,j,Q0]),d0=P(()=>{if(!S0)return;if(t_(!1),n0.current)U0(!0),n0.current=!1},[S0]),O$=P(()=>{if(S0)d0();else A$()},[S0,A$,d0]);v(()=>{if(S0&&!y0)d0()},[S0,y0,d0]),v(()=>{let W=w$.current;if(!W)return;if($$.current)$$.current.dispose(),$$.current=null;let G=v_;if(!G)return;let F={path:G,mode:"edit"},E=s_.resolve(F)||s_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=E.mount(W,F);$$.current=b,b.onDirtyChange?.((r)=>{l_.setDirty(G,r)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{k0()});let p=l_.getViewState(G);if(p&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(p));if(typeof b.onViewStateChange==="function")b.onViewStateChange((r)=>{l_.saveViewState(G,r)});return requestAnimationFrame(()=>b.focus()),()=>{if($$.current===b)b.dispose(),$$.current=null}},[v_,k0]),v(()=>{let W=(G)=>{let F=G.detail?.path;if(F)H0(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[H0]),v(()=>{let W=a$.current;if(m0.current)m0.current.dispose(),m0.current=null;if(!W||!E0||!Q0)return;let G=s_.getDockPanes()[0];if(!G){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=G.mount(W,{mode:"view"});return m0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(m0.current===F)F.dispose(),m0.current=null}},[E0,Q0]);let[P$,j$]=f({name:"You",avatar_url:null,avatar_background:null}),g0=k(!1),e_=k(!1),R0=k(null),w0=k($),t$=k(new Map),v$=k($),s0=k(0),i0=k(0),u$=k({}),E2=k({name:null,avatar_url:null}),V0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),Z$=k(null),F$=k(null),m$=k(0),L$=k(0),b$=k(0),e$=k(null),N$=k(null),p0=k(null),H$=k(null),D$=k(0),g$=k({title:null,avatarBase:null}),K$=k(null),_2=k(!1),[Q$,p$]=f(!1),X2=k(0),c$=P(()=>{if(K$.current)clearTimeout(K$.current),K$.current=null;s(null)},[]);e6(30000),v(()=>{return U8()},[]),v(()=>{return V9(L)},[]),v(()=>{i_("workspaceOpen",String(q0))},[q0]),v(()=>{return W9()},[]),v(()=>{return()=>{c$()}},[c$]),v(()=>{if(!x_){i_(Q3,"");return}i_(Q3,JSON.stringify({question:x_.question||"",answer:x_.answer||"",thinking:x_.thinking||"",error:x_.error||null,status:x_.status||"success"}))},[x_]),v(()=>{u$.current=O_||{}},[O_]),v(()=>{w0.current=$},[$]),v(()=>{E2.current=P$||{name:"You",avatar_url:null,avatar_background:null}},[P$]);let J$=P((W,G,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(g$.current.title!==E){document.title=E;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==E)e.setAttribute("content",E);g$.current.title=E}let b=document.getElementById("dynamic-favicon");if(!b)return;let p=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",r=G||p,K_=G?`${r}|${F||""}`:r;if(g$.current.avatarBase!==K_){let e=G?`${r}${r.includes("?")?"&":"?"}v=${F||Date.now()}`:r;b.setAttribute("href",e),g$.current.avatarBase=K_}},[]),$2=P((W)=>{if(!W)return;I((G)=>G.includes(W)?G:[...G,W])},[]),q2=P((W)=>{I((G)=>G.filter((F)=>F!==W))},[]);o$.current=q2;let x$=P(()=>{I([])},[]),w2=P((W)=>{if(!Array.isArray(W)){I([]);return}let G=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let b=E.trim();if(F.has(b))continue;F.add(b),G.push(b)}I(G)},[]),V_=P((W,G=null,F="info",E=3000)=>{c$(),s({title:W,detail:G||null,kind:F||"info"}),K$.current=setTimeout(()=>{s((b)=>b?.title===W?null:b)},E)},[c$]),h$=P((W)=>{let G=_9(W,{editorOpen:y0,resolvePane:(F)=>s_.resolve(F)});if(G.kind==="open"){H0(G.path);return}if(G.kind==="toast")V_(G.title,G.detail,G.level)},[y0,H0,V_]),A2=P(()=>{let W=v_;if(W)$2(W)},[v_,$2]),P2=P((W)=>{if(!W)return;y((G)=>G.includes(W)?G:[...G,W])},[]),j2=P(async(W,G=null)=>{let F=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let b=typeof G==="string"&&G.trim()?G.trim():$,r=(await e1(W,b))?.thread?.[0];if(!r)return;W0((K_)=>{if(!K_)return[r];if(K_.some((e)=>e.id===r.id))return K_;return[...K_,r]}),requestAnimationFrame(()=>{setTimeout(()=>{let K_=document.getElementById("post-"+W);if(K_)F(K_)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",W,b)}},[$]),b2=P((W)=>{y((G)=>G.filter((F)=>F!==W))},[]),x2=P(()=>{y([])},[]),I2=P((W)=>{if(!Array.isArray(W)){y([]);return}let G=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let b=E.trim();if(F.has(b))continue;F.add(b),G.push(b)}y(G)},[]),M2=P((W)=>{let G=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";V_("Compose failed",G,"error",5000)},[V_]),U=P((W={})=>{let G=Date.now();if(N_.current=G,W.running)w_.current=!0,K0((F)=>F?F:!0);if(W.clearSilence)S_.current=0},[K0]),J=P(()=>{if(H$.current)clearTimeout(H$.current),H$.current=null;D$.current=0},[]);v(()=>()=>{J()},[J]);let x=P(()=>{J(),d((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:G,lastActivity:F,...E}=W;return E})},[J]),z=P((W)=>{if(!W)return;J();let G=Date.now();D$.current=G,d({type:W.type||"active",last_activity:!0}),H$.current=setTimeout(()=>{if(D$.current!==G)return;d((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},r6)},[J]),O=P(()=>{w_.current=!1,K0(!1),N_.current=null,S_.current=0,D_.current="",J_.current="",Y0.current=null,N$.current=null,X_.current=null,__.current=null,R0.current=null,c0.current={inFlight:!1,lastAttemptAt:0,turnId:null},J(),Y_(null),Q_(null),B_.current=!1,j_.current=!1},[J,Y_,Q_,K0]),D=P((W)=>{if(!z9({remainingQueueCount:W,currentTurnId:X_.current,isAgentTurnActive:$0}))return;__.current=null,Q_(null)},[$0,Q_]),M=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u=P(()=>({agentStatus:a,agentDraft:$_?{...$_}:{text:"",totalLines:0},agentPlan:z_||"",agentThought:u_?{...u_}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:G_,steerQueuedTurnId:W_,isAgentTurnActive:Boolean($0),followupQueueItems:Array.isArray(N0)?N0.map((W)=>({...W})):[],activeModel:o_,activeThinkingLevel:d_,supportsThinking:Boolean(p_),activeModelUsage:y_,contextUsage:Z0,isAgentRunning:Boolean(w_.current),wasAgentActive:Boolean(e_.current),draftBuffer:D_.current||"",thoughtBuffer:J_.current||"",lastAgentEvent:N_.current||null,lastSilenceNotice:S_.current||0,lastAgentResponse:N$.current||null,currentTurnIdRef:X_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(B_.current),draftExpanded:Boolean(j_.current),agentStatusRef:R0.current||null,silentRecovery:{...c0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[o_,y_,d_,$_,z_,a,u_,Z0,G_,N0,$0,Z_,W_,p_]),R=P((W)=>{let G=W||M();J(),w_.current=Boolean(G.isAgentRunning),e_.current=Boolean(G.wasAgentActive),K0(Boolean(G.isAgentTurnActive)),N_.current=G.lastAgentEvent||null,S_.current=Number(G.lastSilenceNotice||0),D_.current=G.draftBuffer||"",J_.current=G.thoughtBuffer||"",Y0.current=G.pendingRequest||null,N$.current=G.lastAgentResponse||null,X_.current=G.currentTurnIdRef||null,__.current=G.steerQueuedTurnIdRef||null,R0.current=G.agentStatusRef||null,c0.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},B_.current=Boolean(G.thoughtExpanded),j_.current=Boolean(G.draftExpanded),d(G.agentStatus||null),h(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),n_(G.agentPlan||""),n(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),t(G.pendingRequest||null),Y_(G.currentTurnId||null),Q_(G.steerQueuedTurnId||null),r_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((F)=>({...F})):[]),m_(G.activeModel||null),g_(G.activeThinkingLevel||null),E_(Boolean(G.supportsThinking)),R_(G.activeModelUsage??null),b_(G.contextUsage??null)},[J,M,Y_,r_,K0,Q_]),l=P((W)=>{if(!W)return;if(X_.current===W)return;X_.current=W,c0.current={inFlight:!1,lastAttemptAt:0,turnId:W},Y_(W),__.current=null,Q_(null),D_.current="",J_.current="",h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),Y0.current=null,N$.current=null,B_.current=!1,j_.current=!1},[Y_,Q_]),M_=P((W)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let G=N$.current;if(!G||!G.post)return;if(W&&G.turnId&&G.turnId!==W)return;let F=G.post;if(F.id&&e$.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;e$.current=F.id||e$.current,N$.current=null;let b=E.replace(/\s+/g," ").slice(0,200),p=u$.current||{},K_=(F?.data?.agent_id?p[F.data.agent_id]:null)?.name||"Pi";L0(K_,b)},[L0]),x0=P(async(W,G)=>{if(W!=="thought"&&W!=="draft")return;let F=X_.current;if(W==="thought"){if(B_.current=G,F)try{await F9(F,"thought",G)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!G)return;try{let E=F?await O9(F,"thought"):null;if(E?.text)J_.current=E.text;n((b)=>({...b||{text:"",totalLines:0},fullText:J_.current||b?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:b?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(j_.current=G,F)try{await F9(F,"draft",G)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!G)return;try{let E=F?await O9(F,"draft"):null;if(E?.text)D_.current=E.text;h((b)=>({...b||{text:"",totalLines:0},fullText:D_.current||b?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:b?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),L_=k(null),o0=P(()=>{let W=Z$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);L_.current=o0;let V2=P((W)=>{let G=Z$.current;if(!G||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:b}=V0.current||{},p=!((E||b)&&!F),r=p?G.scrollHeight-G.scrollTop:G.scrollTop;W(),requestAnimationFrame(()=>{let K_=Z$.current;if(!K_)return;if(p){let e=Math.max(K_.scrollHeight-r,0);K_.scrollTop=e}else{let e=Math.max(K_.scrollHeight-K_.clientHeight,0),i=Math.min(r,e);K_.scrollTop=i}})},[]),y$=P((W)=>{let G=Z$.current;if(!G||typeof W!=="function"){W?.();return}let F=G.scrollTop;W(),requestAnimationFrame(()=>{let E=Z$.current;if(!E)return;let b=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,b)})},[]),i$="Queued as a follow-up (one-at-a-time).",M1="⁣",l$=P((W)=>{if(!W||!Array.isArray(W))return W;let G=c_.current,F=new Set(G),E=W.filter((b)=>{if(F.has(b?.id))return!1;if(b?.data?.is_bot_message){let p=b?.data?.content;if(p===i$||p===M1)return!1}return!0});return E.length===W.length?W:E},[]),{posts:I0,setPosts:W0,hasMore:C1,setHasMore:L2,hasMoreRef:r2,loadPosts:M0,refreshTimeline:h_,loadMore:Q2,loadMoreRef:a2}=l6({preserveTimelineScroll:V2,preserveTimelineScrollTop:y$,chatJid:$}),n$=T_(()=>l$(I0),[I0,N0,l$]),t2=P(()=>{let W=z0.current;if(!W)return;W0((G)=>G?G.filter((F)=>F.id!==W):G),z0.current=null},[W0]),{handleSplitterMouseDown:J9,handleSplitterTouchStart:y9,handleEditorSplitterMouseDown:k9,handleEditorSplitterTouchStart:E9,handleDockSplitterMouseDown:w9,handleDockSplitterTouchStart:A9}=d6({appShellRef:F$,sidebarWidthRef:m$,editorWidthRef:L$,dockHeightRef:b$}),U3=P(()=>{if(!w_.current)return;w_.current=!1,S_.current=0,N_.current=null,X_.current=null,Y_(null),B_.current=!1,j_.current=!1;let W=(D_.current||"").trim();if(D_.current="",J_.current="",h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),Y0.current=null,N$.current=null,!W){d({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),b=new Date().toISOString(),p={id:E,timestamp:b,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};z0.current=E,W0((r)=>r?o2([...r,p]):[p]),L_.current?.(),d(null)},[Y_]);v(()=>{V0.current={currentHashtag:q,searchQuery:V,searchOpen:w}},[q,V,w]);let C_=P(()=>{let W=++B$.current,G=$;KZ(G).then((F)=>{if(W!==B$.current)return;if(w0.current!==G)return;let E=F_.current,b=Array.isArray(F?.items)?F.items.map((p)=>({...p})).filter((p)=>!E.has(p.row_id)):[];if(b.length){r_((p)=>{if(p.length===b.length&&p.every((r,K_)=>r.row_id===b[K_].row_id))return p;return b});return}E.clear(),D(0),r_((p)=>p.length===0?p:[])}).catch(()=>{if(W!==B$.current)return;if(w0.current!==G)return;r_((F)=>F.length===0?F:[])})},[D,$,r_]),Y$=P(async()=>{let W=$;try{let G=await V3(W);if(w0.current!==W)return;if(G)b_(G)}catch(G){if(w0.current!==W)return;console.warn("Failed to fetch agent context:",G)}},[$]),z$=P(async()=>{let W=$;try{let G=await H9(W);if(w0.current!==W)return null;if(!G||G.status!=="active"||!G.data){if(e_.current){let{currentHashtag:b,searchQuery:p,searchOpen:r}=V0.current||{};if(!b&&!p&&!r)h_()}return e_.current=!1,O(),R0.current=null,d(null),h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),Y0.current=null,G??null}e_.current=!0;let F=G.data;R0.current=F;let E=F.turn_id||F.turnId;if(E)l(E);if(U({running:!0,clearSilence:!0}),x(),d(F),G.thought&&G.thought.text)n((b)=>{if(b&&b.text&&b.text.length>=G.thought.text.length)return b;return J_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)h((b)=>{if(b&&b.text&&b.text.length>=G.draft.text.length)return b;return D_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[O,x,U,h_,l]),T1=P(async()=>{if(!w_.current)return null;if(Y0.current)return null;let W=X_.current||null,G=c0.current,F=Date.now();if(G.inFlight)return null;if(G.turnId===W&&F-G.lastAttemptAt<G3)return null;G.inFlight=!0,G.lastAttemptAt=F,G.turnId=W;try{let{currentHashtag:E,searchQuery:b,searchOpen:p}=V0.current||{};if(!E&&!b&&!p)await h_();return await C_(),await z$()}finally{G.inFlight=!1}},[z$,C_,h_]);v(()=>{let W=Math.min(1000,Math.max(100,Math.floor(z3/2))),G=setInterval(()=>{if(!w_.current)return;if(Y0.current)return;let F=N_.current;if(!F)return;let E=Date.now(),b=E-F,p=h2(R0.current);if(b>=o6){if(!p)d({type:"waiting",title:"Re-syncing after a quiet period…"});T1();return}if(b>=z3){if(E-S_.current>=G3){if(!p){let r=Math.floor(b/1000);d({type:"waiting",title:`Waiting for model… No events for ${r}s`})}S_.current=E,T1()}}},W);return()=>clearInterval(G)},[T1]);let P9=P((W)=>{if(Y(W),W!=="connected"){d(null),h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),Y0.current=null,O();return}if(!g0.current){g0.current=!0;let{currentHashtag:b,searchQuery:p,searchOpen:r}=V0.current||{};if(!b&&!p&&!r)h_();z$(),C_(),Y$();return}let{currentHashtag:G,searchQuery:F,searchOpen:E}=V0.current;if(!G&&!F&&!E)h_();z$(),C_(),Y$()},[O,h_,z$,C_,Y$]),b9=P(async(W)=>{Q(W),W0(null),await M0(W)},[M0]),x9=P(async()=>{Q(null),H(null),W0(null),await M0()},[M0]),I9=P(async(W,G=m)=>{if(!W||!W.trim())return;let F=G==="root"||G==="all"?G:"current";g(F),H(W.trim()),Q(null),W0(null);try{let E=await U9(W.trim(),50,0,$,F,J0);W0(E.results),L2(!1)}catch(E){console.error("Failed to search:",E),W0([])}},[$,J0,m]),M9=P(()=>{T(!0),H(null),Q(null),g("current"),W0([])},[]),C9=P(()=>{T(!1),H(null),M0()},[M0]),qZ=P(()=>{},[]),f1=!q&&!V&&!w,T9=P(async(W)=>{if(!W)return;let G=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=n$?.filter((p)=>p?.data?.thread_id===G&&p?.id!==G).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let b=(p)=>{if(!p.length)return;h0((K_)=>{let e=new Set(K_);return p.forEach((i)=>e.add(i)),e}),setTimeout(()=>{if(y$(()=>{W0((K_)=>K_?K_.filter((e)=>!p.includes(e.id)):K_)}),h0((K_)=>{let e=new Set(K_);return p.forEach((i)=>e.delete(i)),e}),r2.current)a2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await B9(G,E>0,F);if(p?.ids?.length)b(p.ids)}catch(p){let r=p?.message||"";if(E===0&&r.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await B9(G,!0,F);if(e?.ids?.length)b(e.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${r}`)}},[$,n$,y$]),B3=P(async()=>{try{let W=await _Z();A_(a6(W));let G=W?.user||{};j$((E)=>{let b=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",p=typeof G.avatar_url==="string"?G.avatar_url.trim():null,r=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(E.name===b&&E.avatar_url===p&&E.avatar_background===r)return E;return{name:b,avatar_url:p,avatar_background:r}});let F=(W?.agents||[]).find((E)=>E.id==="default");J$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,G=await V3(W);if(w0.current!==W)return;if(G)b_(G)}catch{}},[J$,$]);v(()=>{B3();let W=H2("sidebarWidth",null),G=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(m$.current=G,F$.current)F$.current.style.setProperty("--sidebar-width",`${G}px`)},[B3]);let S1=$0||a!==null,O3=P((W)=>{if(!W||typeof W!=="object")return;let G=W.agent_id;if(!G)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let b=u$.current?.[G]||{id:G},p=b.name||null,r=b.avatar_url??b.avatarUrl??b.avatar??null,K_=!1,e=!1;if(F&&F!==b.name)p=F,e=!0;if(E!==void 0){let i=typeof E==="string"?E.trim():null,q_=typeof r==="string"?r.trim():null,k_=i||null;if(k_!==(q_||null))r=k_,K_=!0}if(!e&&!K_)return;if(A_((i)=>{let k_={...i[G]||{id:G}};if(e)k_.name=p;if(K_)k_.avatar_url=r;return{...i,[G]:k_}}),G==="default")J$(p,r,K_?Date.now():null)},[J$]),F3=P((W)=>{if(!W||typeof W!=="object")return;let G=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(G===void 0&&F===void 0&&E===void 0)return;j$((b)=>{let p=typeof G==="string"&&G.trim()?G.trim():b.name||"You",r=F===void 0?b.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,K_=E===void 0?b.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(b.name===p&&b.avatar_url===r&&b.avatar_background===K_)return b;return{name:p,avatar_url:r,avatar_background:K_}})},[]),R1=P((W)=>{if(!W||typeof W!=="object")return;let G=W.model??W.current;if(G!==void 0)m_(G);if(W.thinking_level!==void 0)g_(W.thinking_level??null);if(W.supports_thinking!==void 0)E_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)R_(W.provider_usage??null)},[]),C2=P(()=>{let W=$;$Z(W).then((G)=>{if(w0.current!==W)return;if(G)R1(G)}).catch(()=>{})},[R1,$]),C0=P(()=>{let W=$,G=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([jZ().catch(()=>({chats:[]})),L3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(w0.current!==W)return;let b=G(F?.chats),p=G(E?.chats);if(p.length===0){b0(b);return}let r=new Map(b.map((e)=>[e.chat_jid,e])),K_=p.map((e)=>{let i=r.get(e.chat_jid);return i?{...e,...i,is_active:i.is_active??e.is_active}:e});K_.sort((e,i)=>{if(e.chat_jid===W&&i.chat_jid!==W)return-1;if(i.chat_jid===W&&e.chat_jid!==W)return 1;let q_=Boolean(e.archived_at),k_=Boolean(i.archived_at);if(q_!==k_)return q_?1:-1;if(Boolean(e.is_active)!==Boolean(i.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(i.chat_jid))}),b0(K_)}).catch(()=>{if(w0.current!==W)return;b0([])})},[$]),A0=P(()=>{L3(J0).then((W)=>{let G=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];D0(G)}).catch(()=>{})},[J0]),f9=P((W)=>{let G=W?.row_id;if(G==null)return;F_.current.add(G),r_((F)=>F.filter((E)=>E?.row_id!==G)),YZ(G,q3($)).then(()=>{C_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),V_("Failed to steer message","The queued message could not be sent as steering.","warning"),F_.current.delete(G),C_()})},[$,C_,r_,V_]),S9=P((W)=>{let G=W?.row_id;if(G==null)return;let F=X0.current.filter((E)=>E?.row_id!==G).length;F_.current.add(G),D(F),r_((E)=>E.filter((b)=>b?.row_id!==G)),zZ(G,q3($)).then(()=>{C_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),V_("Failed to remove message","The queued message could not be removed.","warning"),F_.current.delete(G),C_()})},[D,$,C_,r_,V_]),v1=P((W)=>{if(!W||typeof W!=="object")return;if(C0(),A0(),W?.queued==="followup"||W?.queued==="steer"){C_();return}let G=W?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))C_()},[C0,A0,C_]),u1=P(()=>{if(p0.current)p0.current.abort(),p0.current=null;F0(null)},[]),e2=P(async(W)=>{let G=String(W||"").trim();if(!G)return V_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(p0.current)p0.current.abort();let F=new AbortController;p0.current=F,F0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await GZ(G,{signal:F.signal,chatJid:w8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,p)=>{if(b==="side_prompt_start")F0((r)=>r?{...r,status:"running"}:r)},onThinkingDelta:(b)=>{F0((p)=>p?{...p,thinking:`${p.thinking||""}${b||""}`}:p)},onTextDelta:(b)=>{F0((p)=>p?{...p,answer:`${p.answer||""}${b||""}`}:p)}});if(p0.current!==F)return!0;F0((b)=>b?{...b,answer:E?.result||b.answer||"",thinking:E?.thinking||b.thinking||"",model:E?.model||null,status:"success",error:null}:b)}catch(E){if(F.signal.aborted)return!0;F0((b)=>b?{...b,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:b)}finally{if(p0.current===F)p0.current=null}return!0},[$,V_]),R9=P(async({content:W})=>{let G=E8(W);if(!G)return!1;if(G.type==="help")return V_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return u1(),V_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await e2(G.question),!0;return!1},[u1,e2,V_]),v9=P(()=>{if(x_?.question)e2(x_.question)},[x_,e2]),u9=P(async()=>{let W=b8(x_);if(!W)return;try{let G=await B2("default",W,null,[],S1?"queue":null,$);v1(G),V_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){V_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[x_,v1,S1,V_]),T2=P(()=>{C2(),C0(),A0(),C_(),Y$()},[C2,C0,A0,C_,Y$]);v(()=>{T2();let W=setInterval(()=>{C2(),C0(),A0(),C_()},60000);return()=>clearInterval(W)},[T2,C2,C0,A0,C_]),v(()=>{A0()},[A0]),v(()=>{let W=!1;W0(null);let G=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;o0()})};if(q)return M0(q),()=>{W=!0};if(V)return U9(V,50,0,$,m,J0).then((F)=>{if(W)return;W0(F.results),L2(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),W0([]),L2(!1)}),()=>{W=!0};return M0().then(()=>{G()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,q,V,m,J0,M0,o0,L2,W0]),v(()=>{let W=v$.current||$;t$.current.set(W,u())},[$,u]),v(()=>{let W=v$.current||$;if(W===$)return;t$.current.set(W,u()),v$.current=$,F_.current.clear(),R(t$.current.get($)||null),C_(),z$(),Y$()},[$,z$,Y$,C_,R,u]);let m9=P(()=>{let{currentHashtag:W,searchQuery:G,searchOpen:F}=V0.current||{};if(!W&&!G&&!F)h_();T2()},[T2,h_]),m1=P((W,G)=>{let F=G?.turn_id,E=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,p=E?E===$:W==="connected"||W==="workspace_update";if(p)O3(G),F3(G);if(W==="ui_theme"){B8(G);return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))x()}if(W==="connected"){d(null),h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),Y0.current=null,O();let i=$;H9(i).then((P0)=>{if(w0.current!==i)return;if(!P0||P0.status!=="active"||!P0.data)return;let Z2=P0.data,_1=Z2.turn_id||Z2.turnId;if(_1)l(_1);if(U({clearSilence:!0}),z(Z2),P0.thought&&P0.thought.text)J_.current=P0.thought.text,n({text:P0.thought.text,totalLines:P0.thought.totalLines||0});if(P0.draft&&P0.draft.text)D_.current=P0.draft.text,h({text:P0.draft.text,totalLines:P0.draft.totalLines||0})}).catch((P0)=>{console.warn("Failed to fetch agent status:",P0)});let{currentHashtag:q_,searchQuery:k_,searchOpen:G$}=V0.current||{};if(!q_&&!k_&&!G$)h_();T2();return}if(W==="agent_status"){if(!p){if(G?.type==="done"||G?.type==="error")C0(),A0();return}if(G.type==="done"||G.type==="error"){if(F&&X_.current&&F!==X_.current)return;if(G.type==="done"){M_(F||X_.current);let{currentHashtag:i,searchQuery:q_,searchOpen:k_}=V0.current||{};if(!i&&!q_&&!k_)h_();if(G.context_usage)b_(G.context_usage)}if(e_.current=!1,O(),F_.current.clear(),C0(),C_(),h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null),G.type==="error")d({type:"error",title:G.title||"Agent error"}),setTimeout(()=>d(null),8000);else d(null)}else{if(F)l(F);if(U({running:!0,clearSilence:!0}),G.type==="thinking")D_.current="",J_.current="",h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0});R0.current=G,d((i)=>{if(i&&i.type===G.type&&i.title===G.title)return i;return G})}return}if(W==="agent_steer_queued"){if(!p)return;if(F&&X_.current&&F!==X_.current)return;let i=F||X_.current;if(!i)return;__.current=i,Q_(i);return}if(W==="agent_followup_queued"){if(!p)return;let i=G?.row_id,q_=G?.content;if(i!=null&&typeof q_==="string"&&q_.trim())r_((k_)=>{if(k_.some((G$)=>G$?.row_id===i))return k_;return[...k_,{row_id:i,content:q_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});C_();return}if(W==="agent_followup_consumed"){if(!p)return;let i=G?.row_id;if(i!=null){let P0=X0.current.filter((Z2)=>Z2.row_id!==i).length;D(P0),r_((Z2)=>Z2.filter((_1)=>_1.row_id!==i))}C_();let{currentHashtag:q_,searchQuery:k_,searchOpen:G$}=V0.current||{};if(!q_&&!k_&&!G$)h_();return}if(W==="agent_followup_removed"){if(!p)return;let i=G?.row_id;if(i!=null){let q_=X0.current.filter((k_)=>k_.row_id!==i).length;F_.current.add(i),D(q_),r_((k_)=>k_.filter((G$)=>G$.row_id!==i))}C_();return}if(W==="agent_draft_delta"){if(!p)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)l(F);if(U({running:!0,clearSilence:!0}),G?.reset)D_.current="";if(G?.delta)D_.current+=G.delta;let i=Date.now();if(!s0.current||i-s0.current>=100){s0.current=i;let q_=D_.current,k_=W3(q_);if(j_.current)h((G$)=>({text:G$?.text||"",totalLines:k_,fullText:q_}));else h({text:q_,totalLines:k_})}return}if(W==="agent_draft"){if(!p)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)l(F);U({running:!0,clearSilence:!0});let i=G.text||"",q_=G.mode||(G.kind==="plan"?"replace":"append"),k_=Number.isFinite(G.total_lines)?G.total_lines:i?i.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(q_==="replace")n_(i);else n_((G$)=>(G$||"")+i);else if(!j_.current)D_.current=i,h({text:i,totalLines:k_});return}if(W==="agent_thought_delta"){if(!p)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)l(F);if(U({running:!0,clearSilence:!0}),G?.reset)J_.current="";if(typeof G?.delta==="string")J_.current+=G.delta;let i=Date.now();if(B_.current&&(!i0.current||i-i0.current>=100)){i0.current=i;let q_=J_.current;n((k_)=>({text:k_?.text||"",totalLines:W3(q_),fullText:q_}))}return}if(W==="agent_thought"){if(!p)return;if(F&&X_.current&&F!==X_.current)return;if(F&&!X_.current)l(F);U({running:!0,clearSilence:!0});let i=G.text||"",q_=Number.isFinite(G.total_lines)?G.total_lines:i?i.replace(/\r\n/g,`
`).split(`
`).length:0;if(!B_.current)J_.current=i,n({text:i,totalLines:q_});return}if(W==="model_changed"){if(!p)return;if(G?.model!==void 0)m_(G.model);if(G?.thinking_level!==void 0)g_(G.thinking_level??null);if(G?.supports_thinking!==void 0)E_(Boolean(G.supports_thinking));let i=$;V3(i).then((q_)=>{if(w0.current!==i)return;if(q_)b_(q_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(X9(W)){if(!p)return;if(q9(W,G),W==="extension_ui_notify"&&typeof G?.message==="string")V_(G.message,null,G?.type||"info");if(W==="extension_ui_error"&&typeof G?.error==="string")V_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:r,searchQuery:K_,searchOpen:e}=V0.current;if(W==="agent_response"){if(!p)return;t2(),N$.current={post:G,turnId:X_.current}}if(!r&&!K_&&!e&&p&&(W==="new_post"||W==="new_reply"||W==="agent_response"))W0((i)=>{if(!i)return[G];if(i.some((q_)=>q_.id===G.id))return i;return[...i,G]}),L_.current?.();if(W==="interaction_updated"){if(!p)return;if(r||K_||e)return;W0((i)=>{if(!i)return i;if(!i.some((q_)=>q_.id===G.id))return i;return i.map((q_)=>q_.id===G.id?G:q_)})}if(W==="interaction_deleted"){if(!p)return;if(r||K_||e)return;let i=G?.ids||[];if(i.length){if(y$(()=>{W0((q_)=>q_?q_.filter((k_)=>!i.includes(k_.id)):q_)}),r2.current)a2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[O,x,$,a2,U,M_,y$,C0,A0,h_,t2,l,z,O3,F3,C2,C_,r_]);v(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=m1,W.reset=()=>{t2(),O(),d(null),h({text:"",totalLines:0}),n_(""),n({text:"",totalLines:0}),t(null)},W.finalize=()=>U3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[O,U3,m1,t2]),h6({handleSseEvent:m1,handleConnectionStatusChange:P9,loadPosts:M0,onWake:m9,chatJid:$}),v(()=>{if(!n$||n$.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let G=W.slice(5);j2(G),history.replaceState(null,"",location.pathname+location.search)},[n$,j2]);let g1=a!==null;v(()=>{if(K!=="connected")return;let G=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:b}=V0.current||{},p=!F&&!E&&!b;if(g1){if(p)h_();C_(),z$(),Y$()}else{if(p)h_();z$(),Y$()}},g1?15000:60000);return()=>clearInterval(G)},[K,g1,z$,Y$,C_,h_]),v(()=>{return L9(()=>{z$(),Y$(),C_()})},[z$,Y$,C_]);let g9=P(()=>{y2((W)=>!W)},[]),H3=P((W)=>{if(typeof window>"u")return;let G=String(W||"").trim();if(!G||G===$)return;let F=G2(window.location.href,G,{chatOnly:j});window.location.assign(F)},[j,$]),D3=P(async()=>{if(typeof window>"u"||!H_?.chat_jid)return;let W=Date.now(),G=Q9();if(!G)return;if(_2.current||W<X2.current||G.inFlight||W<G.cooldownUntil)return;_2.current=!0,G.inFlight=!0,p$(!0);try{let F=H_.display_name||H_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let b=E.trim(),p=b.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||H_.agent_name||"",r=await ZZ(H_.chat_jid,{displayName:b,agentName:p});await Promise.allSettled([C0(),A0()]);let K_=r?.branch?.agent_name||p||H_.agent_name||"",e=r?.branch?.display_name||b||K_;V_("Branch renamed",`${e} (@${K_})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),b=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;V_("Could not rename branch",b||"Could not rename branch.","warning",5000)}finally{_2.current=!1,p$(!1);let F=Date.now()+rj;X2.current=F;let E=Q9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[H_,C0,A0,p$,V_]),J3=P(async(W=null)=>{if(typeof window>"u")return;let G=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=G||H_?.chat_jid||F;if(!E){V_("Could not prune branch","No active session is selected yet.","warning",4000);return}let b=(H_?.chat_jid===E?H_:null)||P_.find((e)=>e?.chat_jid===E)||G0.find((e)=>e?.chat_jid===E)||null;if(b?.chat_jid===(b?.root_chat_jid||b?.chat_jid)){V_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let r=`@${b?.agent_name||E}${b?.chat_jid?` — ${b.chat_jid}`:""}`;if(!window.confirm(`Prune ${r}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await NZ(E),await Promise.allSettled([C0(),A0()]);let e=b?.root_chat_jid||"web:default";V_("Branch pruned",`${r} has been archived.`,"info",3000);let i=G2(window.location.href,e,{chatOnly:j});window.location.assign(i)}catch(e){let i=e instanceof Error?e.message:String(e||"Could not prune branch.");V_("Could not prune branch",i||"Could not prune branch.","warning",5000)}},[G0,j,H_,P_,$,C0,A0,V_]),p9=P(async(W)=>{let G=typeof W==="string"?W.trim():"";if(!G||typeof D9!=="function")return;try{let F=await D9(G);await Promise.allSettled([C0(),A0()]);let E=F?.branch,b=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():G,p=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:b;V_("Branch restored",`Restored ${p}.`,"info",3200);let r=G2(window.location.href,b,{chatOnly:j});window.location.assign(r)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");V_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,C0,A0,V_]);v(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{U_({status:"running",message:"Preparing a new chat branch…"});let G=await v2(N);if(W)return;let F=G?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let b=G2(window.location.href,E,{chatOnly:!0});window.location.replace(b)}catch(G){if(W)return;U_({status:"error",message:I1(G)})}})(),()=>{W=!0}},[Z,N]);let c9=P((W)=>{if(!W||typeof W!=="object")return;a_({...W,openedAt:new Date().toISOString()})},[]),h9=P(()=>{a_(null)},[]);v(()=>{a_(null)},[$]);let i9=P(async()=>{if(typeof window>"u")return;try{let G=(await v2($))?.branch,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([C0(),A0()]);let E=G?.agent_name?`@${G.agent_name}`:F;V_("New branch created",`Switched to ${E}.`,"info",2500);let b=G2(window.location.href,F,{chatOnly:j});window.location.assign(b)}catch(W){V_("Could not create branch",I1(W),"warning",5000)}},[j,$,C0,A0,V_]),l9=P(async()=>{if(typeof window>"u"||X)return;let W=$9($);if(!W){V_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=Y9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=j9(W);if(!G){V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Z9(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await v2($))?.branch,b=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");try{let r=await $4();b0(Array.isArray(r?.chats)?r.chats:[])}catch{}try{let r=await L3(J0);D0(Array.isArray(r?.chats)?r.chats:[])}catch{}let p=G2(window.location.href,b,{chatOnly:!0});N9(G,p)}catch(F){K9(G),V_("Could not open branch window",I1(F),"error",5000)}},[$,J0,X,V_]);v(()=>{if(!y0)return;if(typeof window>"u")return;let W=F$.current;if(!W)return;if(!L$.current){let G=H2("editorWidth",null),F=m$.current||280;L$.current=Number.isFinite(G)?G:F}if(W.style.setProperty("--editor-width",`${L$.current}px`),!b$.current){let G=H2("dockHeight",null);b$.current=Number.isFinite(G)?G:200}W.style.setProperty("--dock-height",`${b$.current}px`)},[y0]),v(()=>{if(!E0||j)return;let W=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),l0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[l0,E0,j]),v(()=>{if(j)return;let W=(G)=>{if(G.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault(),O$();return}if(G.key==="Escape"&&S0)G.preventDefault(),d0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[O$,d0,S0,j]);let n9=Boolean(W_&&W_===(a?.turn_id||G_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${o.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${o.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${q0?"":" workspace-collapsed"}${y0?" editor-open":""}${j?" chat-only":""}${S0?" zen-mode":""}`} ref=${F$}>
            ${!j&&B`
                <${u6}
                    onFileSelect=${$2}
                    visible=${q0}
                    active=${q0||y0}
                    onOpenEditor=${H0}
                    onOpenTerminalTab=${W2}
                    onToggleTerminal=${E0?l0:void 0}
                    terminalVisible=${Boolean(E0&&Q0)}
                />
                <button
                    class=${`workspace-toggle-tab${q0?" open":" closed"}`}
                    onClick=${g9}
                    title=${q0?"Hide workspace":"Show workspace"}
                    aria-label=${q0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${J9} onTouchStart=${y9}></div>
            `}
            ${R$&&B`
                <div class="editor-pane-container">
                    ${S0&&B`<div class="zen-hover-zone"></div>`}
                    ${y0&&B`
                        <${g6}
                            tabs=${k2}
                            activeId=${v_}
                            onActivate=${_$}
                            onClose=${f0}
                            onCloseOthers=${E$}
                            onCloseAll=${r$}
                            onTogglePin=${f$}
                            onTogglePreview=${S$}
                            previewTabs=${u0}
                            onToggleDock=${E0?l0:void 0}
                            dockVisible=${E0&&Q0}
                            onToggleZen=${O$}
                            zenMode=${S0}
                        />
                    `}
                    ${y0&&B`<div class="editor-pane-host" ref=${w$}></div>`}
                    ${y0&&v_&&u0.has(v_)&&B`
                        <${c6}
                            getContent=${()=>$$.current?.getContent?.()}
                            path=${v_}
                            onClose=${()=>S$(v_)}
                        />
                    `}
                    ${E0&&Q0&&B`<div class="dock-splitter" onMouseDown=${w9} onTouchStart=${A9}></div>`}
                    ${E0&&B`<div class=${`dock-panel${Q0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${l0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${a$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${k9} onTouchStart=${E9}></div>
            `}
            <div class="container">
                ${V&&t6()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${H_?.agent_name?`@${H_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${H_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${P_.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>H3(W.currentTarget.value)}
                                    >
                                        ${P_.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${H_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${D3}
                                    title=${Q$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${Q$}
                                >
                                    ${Q$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${H_?.chat_jid&&H_.chat_jid!==(H_.root_chat_jid||H_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${J3}
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
                ${(q||V)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${x9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${V} · ${C}`}</span>
                    </div>
                `}
                <${$6}
                    posts=${n$}
                    hasMore=${f1?C1:!1}
                    onLoadMore=${f1?Q2:void 0}
                    timelineRef=${Z$}
                    onHashtagClick=${b9}
                    onMessageRef=${P2}
                    onScrollToMessage=${j2}
                    onFileRef=${h$}
                    onPostClick=${void 0}
                    onDeletePost=${T9}
                    onOpenWidget=${c9}
                    emptyMessage=${q?`No posts with #${q}`:V?`No results for "${V}"`:void 0}
                    agents=${O_}
                    user=${P$}
                    reverse=${f1}
                    removingPostIds=${e0}
                    searchQuery=${V}
                />
                <${m8}
                    status=${a}
                    draft=${$_}
                    plan=${z_}
                    thought=${u_}
                    pendingRequest=${Z_}
                    intent=${S}
                    turnId=${G_}
                    steerQueued=${n9}
                    onPanelToggle=${x0}
                />
                <${x8}
                    session=${x_}
                    onClose=${u1}
                    onRetry=${v9}
                    onInject=${u9}
                />
                <${C8}
                    widget=${v0}
                    onClose=${h9}
                />
                <${Z8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:G}=V0.current||{};if(!W&&!G)M0(),o0()}}
                    onFocus=${o0}
                    searchMode=${w}
                    searchScope=${m}
                    onSearch=${I9}
                    onSearchScopeChange=${g}
                    onEnterSearch=${M9}
                    onExitSearch=${C9}
                    fileRefs=${A}
                    onRemoveFileRef=${q2}
                    onClearFileRefs=${x$}
                    onSetFileRefs=${w2}
                    messageRefs=${c}
                    onRemoveMessageRef=${b2}
                    onClearMessageRefs=${x2}
                    onSetMessageRefs=${I2}
                    onSwitchChat=${H3}
                    onRenameSession=${D3}
                    isRenameSessionInProgress=${Q$}
                    onCreateSession=${i9}
                    onDeleteSession=${J3}
                    onRestoreSession=${p9}
                    activeEditorPath=${j?null:v_}
                    onAttachEditorFile=${j?void 0:A2}
                    onOpenFilePill=${h$}
                    followupQueueCount=${I_}
                    followupQueueItems=${N0}
                    onInjectQueuedFollowup=${f9}
                    onRemoveQueuedFollowup=${S9}
                    onSubmitIntercept=${R9}
                    onMessageResponse=${v1}
                    onSubmitError=${M2}
                    onPopOutChat=${X?void 0:l9}
                    isAgentActive=${S1}
                    activeChatAgents=${G0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${o_}
                    modelUsage=${y_}
                    thinkingLevel=${d_}
                    supportsThinking=${p_}
                    contextUsage=${Z0}
                    notificationsEnabled=${T$}
                    notificationPermission=${T0}
                    onToggleNotifications=${k$}
                    onModelChange=${m_}
                    onModelStateChange=${R1}
                />
                <${g8}
                    request=${Z_}
                    onRespond=${()=>{t(null),Y0.current=null}}
                />
            </div>
        </div>
    `}function XZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${WZ} locationParams=${_} />`}n3(B`<${XZ} />`,document.getElementById("app"));

//# debugId=DB176A69B69AE73B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
