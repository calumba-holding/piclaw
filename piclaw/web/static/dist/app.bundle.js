var M9=Object.defineProperty;var C9=(_)=>_;function T9(_,$){this[_]=C9.bind(null,$)}var S9=(_,$)=>{for(var j in $)M9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:T9.bind($,j)})};var N1,_0,P3,f9,r$,B3,b3,I3,x3,u1,S1,f1,R9,$1={},j1=[],v9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K1=Array.isArray;function C$(_,$){for(var j in $)_[j]=$[j];return _}function m1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function M3(_,$,j){var Z,N,K,Y={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:Y[K]=$[K];if(arguments.length>2&&(Y.children=arguments.length>3?N1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)Y[K]===void 0&&(Y[K]=_.defaultProps[K]);return t2(_,Y,Z,N,null)}function t2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++P3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(K),K}function Y1(_){return _.children}function e2(_,$){this.props=_,this.context=$}function O2(_,$){if($==null)return _.__?O2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?O2(_):null}function u9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=C$({},$);K.__v=$.__v+1,_0.vnode&&_0.vnode(K),g1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?O2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,f3(Z,K,N),$.__e=$.__=null,K.__e!=j&&C3(K)}}function C3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),C3(_)}function Q3(_){(!_.__d&&(_.__d=!0)&&r$.push(_)&&!Z1.__r++||B3!=_0.debounceRendering)&&((B3=_0.debounceRendering)||b3)(Z1)}function Z1(){try{for(var _,$=1;r$.length;)r$.length>$&&r$.sort(I3),_=r$.shift(),$=r$.length,u9(_)}finally{r$.length=Z1.__r=0}}function T3(_,$,j,Z,N,K,Y,X,L,V,Q){var q,J,y,S,v,R,P,x=Z&&Z.__k||j1,g=$.length;for(L=m9(j,$,x,L,g),q=0;q<g;q++)(y=j.__k[q])!=null&&(J=y.__i!=-1&&x[y.__i]||$1,y.__i=q,R=g1(_,y,J,N,K,Y,X,L,V,Q),S=y.__e,y.ref&&J.ref!=y.ref&&(J.ref&&p1(J.ref,null,y),Q.push(y.ref,y.__c||S,y)),v==null&&S!=null&&(v=S),(P=!!(4&y.__u))||J.__k===y.__k?L=S3(y,L,_,P):typeof y.type=="function"&&R!==void 0?L=R:S&&(L=S.nextSibling),y.__u&=-7);return j.__e=v,L}function m9(_,$,j,Z,N){var K,Y,X,L,V,Q=j.length,q=Q,J=0;for(_.__k=Array(N),K=0;K<N;K++)(Y=$[K])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[K]=t2(null,Y,null,null,null):K1(Y)?Y=_.__k[K]=t2(Y1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[K]=t2(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[K]=Y,L=K+J,Y.__=_,Y.__b=_.__b+1,X=null,(V=Y.__i=g9(Y,j,L,q))!=-1&&(q--,(X=j[V])&&(X.__u|=2)),X==null||X.__v==null?(V==-1&&(N>Q?J--:N<Q&&J++),typeof Y.type!="function"&&(Y.__u|=4)):V!=L&&(V==L-1?J--:V==L+1?J++:(V>L?J--:J++,Y.__u|=4))):_.__k[K]=null;if(q)for(K=0;K<Q;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=O2(X)),v3(X,X));return Z}function S3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=S3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=O2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function g9(_,$,j,Z){var N,K,Y,X=_.key,L=_.type,V=$[j],Q=V!=null&&(2&V.__u)==0;if(V===null&&X==null||Q&&X==V.key&&L==V.type)return j;if(Z>(Q?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[Y=N>=0?N--:K++])!=null&&(2&V.__u)==0&&X==V.key&&L==V.type)return Y}return-1}function O3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||v9.test($)?j:j+"px"}function a2(_,$,j,Z,N){var K,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||O3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||O3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(x3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=u1,_.addEventListener($,K?f1:S1,K)):_.removeEventListener($,K?f1:S1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function U3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=u1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function g1(_,$,j,Z,N,K,Y,X,L,V){var Q,q,J,y,S,v,R,P,x,g,D,m,o,__,n,Z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(Q=_0.__b)&&Q($);_:if(typeof Z_=="function")try{if(P=$.props,x=Z_.prototype&&Z_.prototype.render,g=(Q=Z_.contextType)&&Z[Q.__c],D=Q?g?g.props.value:Q.__:Z,j.__c?R=(q=$.__c=j.__c).__=q.__E:(x?$.__c=q=new Z_(P,D):($.__c=q=new e2(P,D),q.constructor=Z_,q.render=c9),g&&g.sub(q),q.state||(q.state={}),q.__n=Z,J=q.__d=!0,q.__h=[],q._sb=[]),x&&q.__s==null&&(q.__s=q.state),x&&Z_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=C$({},q.__s)),C$(q.__s,Z_.getDerivedStateFromProps(P,q.__s))),y=q.props,S=q.state,q.__v=$,J)x&&Z_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),x&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(x&&Z_.getDerivedStateFromProps==null&&P!==y&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(P,D),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(P,q.__s,D)===!1){$.__v!=j.__v&&(q.props=P,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),j1.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&Y.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(P,q.__s,D),x&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(y,S,v)})}if(q.context=D,q.props=P,q.__P=_,q.__e=!1,m=_0.__r,o=0,x)q.state=q.__s,q.__d=!1,m&&m($),Q=q.render(q.props,q.state,q.context),j1.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,m&&m($),Q=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++o<25);q.state=q.__s,q.getChildContext!=null&&(Z=C$(C$({},Z),q.getChildContext())),x&&!J&&q.getSnapshotBeforeUpdate!=null&&(v=q.getSnapshotBeforeUpdate(y,S)),__=Q!=null&&Q.type===Y1&&Q.key==null?R3(Q.props.children):Q,X=T3(_,K1(__)?__:[__],$,j,Z,N,K,Y,X,L,V),q.base=$.__e,$.__u&=-161,q.__h.length&&Y.push(q),R&&(q.__E=q.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(n=K.length;n--;)m1(K[n]);R1($)}else $.__e=j.__e,$.__k=j.__k,i.then||R1($);_0.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=p9(j.__e,$,j,Z,N,K,Y,L,V);return(Q=_0.diffed)&&Q($),128&$.__u?void 0:X}function R1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(R1))}function f3(_,$,j){for(var Z=0;Z<j.length;Z++)p1(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){_0.__e(K,N.__v)}})}function R3(_){return typeof _!="object"||_==null||_.__b>0?_:K1(_)?_.map(R3):C$({},_)}function p9(_,$,j,Z,N,K,Y,X,L){var V,Q,q,J,y,S,v,R=j.props||$1,P=$.props,x=$.type;if(x=="svg"?N="http://www.w3.org/2000/svg":x=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((y=K[V])&&"setAttribute"in y==!!x&&(x?y.localName==x:y.nodeType==3)){_=y,K[V]=null;break}}if(_==null){if(x==null)return document.createTextNode(P);_=document.createElementNS(N,x,P.is&&P),X&&(_0.__m&&_0.__m($,K),X=!1),K=null}if(x==null)R===P||X&&_.data==P||(_.data=P);else{if(K=K&&N1.call(_.childNodes),!X&&K!=null)for(R={},V=0;V<_.attributes.length;V++)R[(y=_.attributes[V]).name]=y.value;for(V in R)y=R[V],V=="dangerouslySetInnerHTML"?q=y:V=="children"||(V in P)||V=="value"&&("defaultValue"in P)||V=="checked"&&("defaultChecked"in P)||a2(_,V,null,y,N);for(V in P)y=P[V],V=="children"?J=y:V=="dangerouslySetInnerHTML"?Q=y:V=="value"?S=y:V=="checked"?v=y:X&&typeof y!="function"||R[V]===y||a2(_,V,y,R[V],N);if(Q)X||q&&(Q.__html==q.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(q&&(_.innerHTML=""),T3($.type=="template"?_.content:_,K1(J)?J:[J],$,j,Z,x=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,Y,K?K[0]:j.__k&&O2(j,0),X,L),K!=null)for(V=K.length;V--;)m1(K[V]);X||(V="value",x=="progress"&&S==null?_.removeAttribute("value"):S!=null&&(S!==_[V]||x=="progress"&&!S||x=="option"&&S!=R[V])&&a2(_,V,S,R[V],N),V="checked",v!=null&&v!=_[V]&&a2(_,V,v,R[V],N))}return _}function p1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function v3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||p1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){_0.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&v3(Z[N],$,j||typeof _.type!="function");j||m1(_.__e),_.__c=_.__=_.__e=void 0}function c9(_,$,j){return this.constructor(_,j)}function u3(_,$,j){var Z,N,K,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],Y=[],g1($,_=(!Z&&j||$).__k=M3(Y1,null,[_]),N||$1,$1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?N1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),f3(K,_,Y)}N1=j1.slice,_0={__e:function(_,$,j,Z){for(var N,K,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(X){_=X}throw _}},P3=0,f9=function(_){return _!=null&&_.constructor===void 0},e2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C$({},this.state),typeof _=="function"&&(_=_(C$({},j),this.props)),_&&C$(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q3(this))},e2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q3(this))},e2.prototype.render=Y1,r$=[],b3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,I3=function(_,$){return _.__v.__b-$.__v.__b},Z1.__r=0,x3=/(PointerCapture)$|Capture$/i,u1=0,S1=U3(!1),f1=U3(!0),R9=0;var C2,q0,T1,F3,T2=0,m3=[],V0=_0,H3=V0.__b,J3=V0.__r,D3=V0.diffed,E3=V0.__c,y3=V0.unmount,k3=V0.__;function c1(_,$){V0.__h&&V0.__h(q0,_,T2||$),T2=0;var j=q0.__H||(q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return T2=1,h9(p3,_)}function h9(_,$,j){var Z=c1(C2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):p3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(L,X);L!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=q0,!q0.__f)){var N=function(X,L,V){if(!Z.__c.__H)return!0;var Q=Z.__c.__H.__.filter(function(J){return J.__c});if(Q.every(function(J){return!J.__N}))return!K||K.call(this,X,L,V);var q=Z.__c.props!==X;return Q.some(function(J){if(J.__N){var y=J.__[0];J.__=J.__N,J.__N=void 0,y!==J.__[0]&&(q=!0)}}),K&&K.call(this,X,L,V)||q};q0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:Y}=q0;q0.componentWillUpdate=function(X,L,V){if(this.__e){var Q=K;K=void 0,N(X,L,V),K=Q}Y&&Y.call(this,X,L,V)},q0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=c1(C2++,3);!V0.__s&&g3(j.__H,$)&&(j.__=_,j.u=$,q0.__H.__h.push(j))}function k(_){return T2=5,l_(function(){return{current:_}},[])}function l_(_,$){var j=c1(C2++,7);return g3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return T2=8,l_(function(){return _},$)}function i9(){for(var _;_=m3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(_1),$.__h.some(v1),$.__h=[]}catch(j){$.__h=[],V0.__e(j,_.__v)}}}V0.__b=function(_){q0=null,H3&&H3(_)},V0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),k3&&k3(_,$)},V0.__r=function(_){J3&&J3(_),C2=0;var $=(q0=_.__c).__H;$&&(T1===q0?($.__h=[],q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(_1),$.__h.some(v1),$.__h=[],C2=0)),T1=q0},V0.diffed=function(_){D3&&D3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(m3.push($)!==1&&F3===V0.requestAnimationFrame||((F3=V0.requestAnimationFrame)||l9)(i9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),T1=q0=null},V0.__c=function(_,$){$.some(function(j){try{j.__h.some(_1),j.__h=j.__h.filter(function(Z){return!Z.__||v1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],V0.__e(Z,j.__v)}}),E3&&E3(_,$)},V0.unmount=function(_){y3&&y3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{_1(Z)}catch(N){$=N}}),j.__H=void 0,$&&V0.__e($,j.__v))};var w3=typeof requestAnimationFrame=="function";function l9(_){var $,j=function(){clearTimeout(Z),w3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);w3&&($=requestAnimationFrame(j))}function _1(_){var $=q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),q0=$}function v1(_){var $=q0;_.__c=_.__(),q0=$}function g3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function p3(_,$){return typeof $=="function"?$(_):$}var c3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var Y=$[K++],X=$[K]?($[0]|=Y?1:2,j[$[K++]]):$[++K];Y===3?Z[0]=X:Y===4?Z[1]=Object.assign(Z[1]||{},X):Y===5?(Z[1]=Z[1]||{})[$[++K]]=X:Y===6?Z[1][$[++K]]+=X+"":Y?(N=_.apply(X,c3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},A3=new Map;function n9(_){var $=A3.get(this);return $||($=new Map,A3.set(this,$)),($=c3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,Y="",X="",L=[0],V=function(J){K===1&&(J||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,J,Y):K===3&&(J||Y)?(L.push(3,J,Y),K=2):K===2&&Y==="..."&&J?L.push(4,J,0):K===2&&Y&&!J?L.push(5,0,!0,Y):K>=5&&((Y||!J&&K===5)&&(L.push(K,0,Y,N),K=6),J&&(L.push(K,J,0,N),K=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(K===1&&V(),V(Q));for(var q=0;q<j[Q].length;q++)Z=j[Q][q],K===1?Z==="<"?(V(),L=[L],K=3):Y+=Z:K===4?Y==="--"&&Z===">"?(K=1,Y=""):Y=Z+Y[0]:X?Z===X?X="":Y+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=Y,Y=""):Z==="/"&&(K<5||j[Q][q+1]===">")?(V(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):Y+=Z),K===3&&Y==="!--"&&(K=4,L=L[0])}return V(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=n9.bind(M3);var o0={};S9(o0,{uploadWorkspaceFile:()=>W1,uploadMedia:()=>r1,updateWorkspaceFile:()=>W5,submitAdaptiveCardAction:()=>a1,streamSidePrompt:()=>K5,steerAgentQueueItem:()=>N5,setWorkspaceVisibility:()=>u2,setAgentThoughtVisibility:()=>_4,sendPeerAgentMessage:()=>_5,sendAgentMessage:()=>U2,searchPosts:()=>i1,restoreChatBranch:()=>e9,respondToAgentRequest:()=>z1,renameWorkspaceFile:()=>Y4,renameChatBranch:()=>a9,removeAgentQueueItem:()=>Z5,pruneChatBranch:()=>t9,moveWorkspaceEntry:()=>z4,getWorkspaceTree:()=>v2,getWorkspaceRawUrl:()=>G1,getWorkspaceFile:()=>Z4,getWorkspaceDownloadUrl:()=>X1,getWorkspaceBranch:()=>z5,getTimeline:()=>S2,getThumbnailUrl:()=>$4,getThread:()=>l1,getPostsByHashtag:()=>h1,getMediaUrl:()=>N$,getMediaText:()=>j4,getMediaInfo:()=>F2,getMediaBlob:()=>Y5,getChatBranches:()=>r9,getAgents:()=>o1,getAgentThought:()=>e1,getAgentStatus:()=>s1,getAgentQueueState:()=>j5,getAgentModels:()=>R2,getAgentContext:()=>$5,getActiveChatAgents:()=>d1,forkChatBranch:()=>f2,deleteWorkspaceFile:()=>W4,deletePost:()=>n1,createWorkspaceFile:()=>K4,createReply:()=>s9,createPost:()=>o9,attachWorkspaceFile:()=>N4,addToWhitelist:()=>t1,SSEClient:()=>V1});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function h3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function d9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:X}=await j.read();if(X)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let V of L){let Q=h3(V);if(Q)$(Q.event,Q.data)}}N+=Z.decode();let K=h3(N);if(K)$(K.event,K.data)}async function S2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function h1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function i1(_,$=50,j=0,Z=null,N="current",K=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${X}${L}`)}async function l1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function o9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function s9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function n1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function U2(_,$,j=null,Z=[],N=null,K=null){let Y=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function d1(){return f_("/agent/active-chats")}async function r9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return f_(`/agent/branches${Z}`)}async function f2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function a9(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function t9(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function e9(_,$={}){return f_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function _5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function o1(){return f_("/agent/roster")}async function s1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function $5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function j5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function Z5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function r1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function z1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function a1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function K5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await d9(j,(K,Y)=>{if($.onEvent?.(K,Y),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(K==="side_prompt_done")Z=Y;else if(K==="side_prompt_error")N=Y}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function t1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function e1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function _4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function N$(_){return`/media/${_}`}function $4(_){return`/media/${_}/thumbnail`}async function F2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function j4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Y5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function z5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function Z4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function W5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function N4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function W1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),Y=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+Y,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),V=Error(L.error||`HTTP ${X.status}`);throw V.status=X.status,V.code=L.code,V}return X.json()}async function K4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function Y4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function z4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function W4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function u2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function G1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function X1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class V1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function K$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Z0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function H2(_,$=!1){let j=K$(_);if(j===null)return $;return j==="true"}function J2(_,$=null){let j=K$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function q1(_){return String(_||"").trim().toLowerCase()}function G4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return q1($[1]||"")}function i3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=q1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function l3(_,$,j={}){let Z=G4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return i3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return q1(K?.agent_name).startsWith(Z)})}function X4(_){let $=q1(_);return $?`@${$} `:""}function n3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return i3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function d3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function L$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:Y="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,V=`${_}-file-remove`,Q=Y==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${X} title=${j||$} onClick=${N}>
      ${Q}
      <span class=${L}>${$}</span>
      ${Z&&U`
        <button
          class=${V}
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
  `}var G5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function X5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${o3(j)} / ${o3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,Y=2*Math.PI*7,X=$/100*Y,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${Y}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function o3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function s3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:Y,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:V,onClearFileRefs:Q,messageRefs:q=[],onRemoveMessageRef:J,onClearMessageRefs:y,activeModel:S=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:P=!1,contextUsage:x=null,notificationsEnabled:g=!1,notificationPermission:D="default",onToggleNotifications:m,onModelChange:o,onModelStateChange:__,activeEditorPath:n=null,onAttachEditorFile:Z_,onOpenFilePill:i,followupQueueItems:X_=[],onInjectQueuedFollowup:d_,onRemoveQueuedFollowup:t,onSubmitIntercept:a,onMessageResponse:K_,onPopOutChat:$_,isAgentActive:W_=!1,activeChatAgents:U_=[],currentChatJid:G_="web:default",connectionStatus:D_="connected",onSetFileRefs:B_,onSetMessageRefs:x_,onSubmitError:R_,onSwitchChat:F_,onRenameSession:M_,onCreateSession:g_,onDeleteSession:W0,onRestoreSession:V_}){let[r,O_]=T(""),[Y_,C_]=T(""),[v_,p_]=T([]),[Y0,c_]=T(!1),[E_,H_]=T([]),[$0,N0]=T(0),[T_,b_]=T(!1),[a_,j0]=T([]),[p0,y0]=T(0),[u_,h_]=T(!1),[A_,L0]=T(!1),[G0,I_]=T(!1),[i_,t_]=T(!1),[m_,O0]=T([]),[C,e]=T(!1),[y_,J_]=T(0),[e_,S0]=T(null),Q_=k(null),I0=k(null),c0=k(null),f$=k(null),u0=k(null),R$=k(null),U0=k(null),J$=k(null),k0=k(0),x0=200,B$=(B)=>{let A=new Set,z=[];for(let O of B||[]){if(typeof O!=="string")continue;let F=O.trim();if(!F||A.has(F))continue;A.add(F),z.push(F)}return z},r0=()=>{let B=K$("piclaw_compose_history");if(!B)return[];try{let A=JSON.parse(B);if(!Array.isArray(A))return[];return B$(A)}catch{return[]}},B0=(B)=>{Z0("piclaw_compose_history",JSON.stringify(B))},t$=k(r0()),F0=k(-1),D$=k(""),K0=r.trim()||v_.length>0||L.length>0||q.length>0,W$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Q$=typeof window<"u"&&typeof Notification<"u",w0=typeof window<"u"?Boolean(window.isSecureContext):!1,a0=Q$&&w0&&D!=="denied",O$=D==="granted"&&g,E$=O$?"Disable notifications":"Enable notifications",v$=v_.length>0||L.length>0||q.length>0,u$=D_==="disconnected"?"Reconnecting":String(D_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(B)=>B.toUpperCase()),H0=D_==="disconnected"?"Reconnecting":`Connection: ${u$}`,U$=(Array.isArray(U_)?U_:[]).filter((B)=>!B?.archived_at),t0=n3(U$,{currentChatJid:G_,limit:4}),M0=!j&&d3({footerWidth:y_,visibleAgentCount:t0.length,hasContextIndicator:Boolean(x&&x.percent!=null)}),o_=(()=>{for(let B of Array.isArray(U_)?U_:[]){let A=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(A&&A===G_)return B}return null})(),m$=Boolean(o_&&o_.chat_jid===(o_.root_chat_jid||o_.chat_jid)),C0=(()=>{let B=new Set,A=[];for(let z of Array.isArray(U_)?U_:[]){let O=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(!O||O===G_||B.has(O))continue;if(!(typeof z?.agent_name==="string"?z.agent_name.trim():""))continue;B.add(O),A.push(z)}return A})(),y$=C0.length>0,G$=y$&&typeof F_==="function",A0=y$&&typeof V_==="function",k$=!j&&typeof M_==="function",w$=!j&&typeof g_==="function",s_=!j&&typeof W0==="function"&&!m$,P0=!j&&(G$||A0||k$||w$||s_),F$=S||"",A$=P&&R?` (${R})`:"",q2=A$.trim()?`${R}`:"",e$=typeof v?.hint_short==="string"?v.hint_short.trim():"",m0=[q2||null,e$||null].filter(Boolean).join(" • "),J0=[F$?`Current model: ${F$}${A$}`:null,v?.plan?`Plan: ${v.plan}`:null,e$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),w_=A_?"Switching model…":J0.join(" • ")||`Current model: ${F$}${A$} (tap to open model picker)`,R0=(B)=>{if(!B||typeof B!=="object")return;let A=B.model??B.current;if(typeof __==="function")__({model:A??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(A&&typeof o==="function")o(A)},X$=(B)=>{let A=B||Q_.current;if(!A)return;A.style.height="auto",A.style.height=`${A.scrollHeight}px`,A.style.overflowY="hidden"},_2=(B)=>{if(!B)return{content:B,fileRefs:[]};let z=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let p=0;p<z.length;p+=1)if(z[p].trim()==="Files:"&&z[p+1]&&/^\s*-\s+/.test(z[p+1])){O=p;break}if(O===-1)return{content:B,fileRefs:[]};let F=[],E=O+1;for(;E<z.length;E+=1){let p=z[E];if(/^\s*-\s+/.test(p))F.push(p.replace(/^\s*-\s+/,"").trim());else if(!p.trim())break;else break}if(F.length===0)return{content:B,fileRefs:[]};let M=z.slice(0,O),l=z.slice(E);return{content:[...M,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:F}},$2=(B)=>{if(!B)return{content:B,messageRefs:[]};let z=B.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),O=-1;for(let p=0;p<z.length;p+=1)if(z[p].trim()==="Referenced messages:"&&z[p+1]&&/^\s*-\s+/.test(z[p+1])){O=p;break}if(O===-1)return{content:B,messageRefs:[]};let F=[],E=O+1;for(;E<z.length;E+=1){let p=z[E];if(/^\s*-\s+/.test(p)){let c=p.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(c)F.push(c[1])}else if(!p.trim())break;else break}if(F.length===0)return{content:B,messageRefs:[]};let M=z.slice(0,O),l=z.slice(E);return{content:[...M,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:F}},P$=(B)=>{let A=_2(B||""),z=$2(A.content||"");return{text:z.content||"",fileRefs:A.fileRefs,messageRefs:z.messageRefs}},b$=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){b_(!1),H_([]);return}let A=B.toLowerCase().split(" ")[0];if(A.length<1){b_(!1),H_([]);return}let z=G5.filter((O)=>O.name.startsWith(A)||O.name.replace(/-/g,"").startsWith(A.replace(/-/g,"")));if(z.length>0&&!(z.length===1&&z[0].name===A))h_(!1),j0([]),H_(z),N0(0),b_(!0);else b_(!1),H_([])},Q0=(B)=>{let A=r,z=A.indexOf(" "),O=z>=0?A.slice(z):"",F=B.name+O;O_(F),b_(!1),H_([]),requestAnimationFrame(()=>{let E=Q_.current;if(!E)return;let M=F.length;E.selectionStart=M,E.selectionEnd=M,E.focus()})},V$=(B)=>{if(G4(B)==null){h_(!1),j0([]);return}let A=l3(U$,B,{currentChatJid:G_});if(A.length>0&&!(A.length===1&&X4(A[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))b_(!1),H_([]),j0(A),y0(0),h_(!0);else h_(!1),j0([])},v0=(B)=>{let A=X4(B?.agent_name);if(!A)return;O_(A),h_(!1),j0([]),requestAnimationFrame(()=>{let z=Q_.current;if(!z)return;let O=A.length;z.selectionStart=O,z.selectionEnd=O,z.focus()})},I$=(B)=>{if(B?.preventDefault?.(),B?.stopPropagation?.(),j||!G$&&!A0&&!k$&&!w$&&!s_)return;I_(!1),b_(!1),H_([]),h_(!1),j0([]),t_((A)=>!A)},g$=(B)=>{let A=typeof B==="string"?B.trim():"";if(t_(!1),!A||A===G_){requestAnimationFrame(()=>Q_.current?.focus());return}F_?.(A)},p$=async(B)=>{let A=typeof B==="string"?B.trim():"";if(t_(!1),!A||typeof V_!=="function"){requestAnimationFrame(()=>Q_.current?.focus());return}try{await V_(A)}catch(z){console.warn("Failed to restore session:",z),requestAnimationFrame(()=>Q_.current?.focus())}},c$=(B)=>{let A=typeof B?.chat_jid==="string"?B.chat_jid.trim():"";if(A&&typeof F_==="function"){F_(A);return}v0(B)},e0=async()=>{if(typeof M_!=="function")return;t_(!1);try{await M_()}catch(B){console.warn("Failed to rename session:",B)}requestAnimationFrame(()=>Q_.current?.focus())},h0=async()=>{if(typeof g_!=="function")return;t_(!1);try{await g_()}catch(B){console.warn("Failed to create session:",B)}requestAnimationFrame(()=>Q_.current?.focus())},h$=async()=>{if(typeof W0!=="function")return;t_(!1);try{await W0(G_)}catch(B){console.warn("Failed to delete session:",B)}requestAnimationFrame(()=>Q_.current?.focus())},i0=(B)=>{if(j)C_(B);else O_(B),b$(B),V$(B);requestAnimationFrame(()=>X$())},H$=(B)=>{let A=j?Y_:r,z=A&&!A.endsWith(`
`)?`
`:"",O=`${A}${z}${B}`.trimStart();i0(O)},q$=(B)=>{let A=B?.command?.model_label;if(A)return A;let z=B?.command?.message;if(typeof z==="string"){let O=z.match(/•\s+([^\n]+?)\s+\(current\)/);if(O?.[1])return O[1].trim()}return null},x$=async(B)=>{if(j||A_)return;L0(!0);try{let A=await U2("default",B,null,[],null,G_),z=q$(A);R0({model:z??S??null,thinking_level:A?.command?.thinking_level,supports_thinking:A?.command?.supports_thinking});try{let O=await R2(G_);if(O)R0(O)}catch{}return _?.(),!0}catch(A){return console.error("Failed to switch model:",A),alert("Failed to switch model: "+A.message),!1}finally{L0(!1)}},i$=async()=>{await x$("/cycle-model")},j2=async(B)=>{if(!B||A_)return;if(await x$(`/model ${B}`))I_(!1)},M$=(B)=>{B.preventDefault(),B.stopPropagation(),t_(!1),I_((A)=>!A)},y2=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return W_?"queue":null},l$=async(B,A,z={})=>{let{includeMedia:O=!0,includeFileRefs:F=!0,includeMessageRefs:E=!0,clearAfterSubmit:M=!0,recordHistory:l=!0}=z||{},d=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:r,p=typeof d==="string"?d:"";if(!p.trim()&&(O?v_.length===0:!0)&&(F?L.length===0:!0)&&(E?q.length===0:!0))return;b_(!1),H_([]),h_(!1),j0([]),t_(!1),S0(null);let c=O?[...v_]:[],N_=F?[...L]:[],X0=E?[...q]:[],T0=p.trim();if(l&&T0){let o$=t$.current,k_=B$(o$.filter((I2)=>I2!==T0));if(k_.push(T0),k_.length>200)k_.splice(0,k_.length-200);t$.current=k_,B0(k_),F0.current=-1,D$.current=""}let n0=()=>{if(O)p_([...c]);if(F)B_?.(N_);if(E)x_?.(X0);O_(T0),requestAnimationFrame(()=>X$())};if(M)O_(""),p_([]),Q?.(),y?.();(async()=>{try{if(await a?.({content:T0,submitMode:A,fileRefs:N_,messageRefs:X0,mediaFiles:c})){_?.();return}let k_=[];for(let _$ of c){let s$=await r1(_$);k_.push(s$.id)}let I2=N_.length?`Files:
${N_.map((_$)=>`- ${_$}`).join(`
`)}`:"",B2=X0.length?`Referenced messages:
${X0.map((_$)=>`- message:${_$}`).join(`
`)}`:"",o2=k_.length?`Attachments:
${k_.map((_$,s$)=>{let Q2=c[s$]?.name||`attachment-${s$+1}`;return`- attachment:${_$} (${Q2})`}).join(`
`)}`:"",d0=[T0,I2,B2,o2].filter(Boolean).join(`

`),z0=await U2("default",d0,null,k_,y2(A),G_);if(K_?.(z0),z0?.command){R0({model:z0.command.model_label??S??null,thinking_level:z0.command.thinking_level,supports_thinking:z0.command.supports_thinking});try{let _$=await R2(G_);if(_$)R0(_$)}catch{}}_?.()}catch(o$){if(M)n0();let k_=o$?.message||"Failed to send message.";S0(k_),R_?.(k_),console.error("Failed to post:",o$)}})()},L_=(B)=>{d_?.(B)},n$=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),C_(""),X?.();return}if(!j&&i_&&B.key==="Escape"){B.preventDefault(),t_(!1);return}if(u_&&a_.length>0){let A=Q_.current?.value??(j?Y_:r);if(!String(A||"").match(/^@([a-zA-Z0-9_-]*)$/))h_(!1),j0([]);else{if(B.key==="ArrowDown"){B.preventDefault(),y0((z)=>(z+1)%a_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),y0((z)=>(z-1+a_.length)%a_.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),v0(a_[p0]);return}if(B.key==="Escape"){B.preventDefault(),h_(!1),j0([]);return}}}if(T_&&E_.length>0){let A=Q_.current?.value??(j?Y_:r);if(!String(A||"").startsWith("/"))b_(!1),H_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),N0((z)=>(z+1)%E_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),N0((z)=>(z-1+E_.length)%E_.length);return}if(B.key==="Tab"){B.preventDefault(),Q0(E_[$0]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(Q_.current?.value??(j?Y_:r)).includes(" ")){B.preventDefault();let F=E_[$0];b_(!1),H_([]),l$(F.name);return}}if(B.key==="Escape"){B.preventDefault(),b_(!1),H_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let A=Q_.current;if(!A)return;let z=A.value||"",O=A.selectionStart===0&&A.selectionEnd===0,F=A.selectionStart===z.length&&A.selectionEnd===z.length;if(B.key==="ArrowUp"&&O||B.key==="ArrowDown"&&F){let E=t$.current;if(!E.length)return;B.preventDefault();let M=F0.current;if(B.key==="ArrowUp"){if(M===-1)D$.current=z,M=E.length-1;else if(M>0)M-=1;F0.current=M,i0(E[M]||"")}else{if(M===-1)return;if(M<E.length-1)M+=1,F0.current=M,i0(E[M]||"");else F0.current=-1,i0(D$.current||""),D$.current=""}requestAnimationFrame(()=>{let l=Q_.current;if(!l)return;let d=l.value.length;l.selectionStart=d,l.selectionEnd=d});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let A=Q_.current?.value??(j?Y_:r);if(j){if(A.trim())N?.(A.trim(),Z)}else l$(A,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let A=Q_.current?.value??(j?Y_:r);if(j){if(A.trim())N?.(A.trim(),Z)}else l$(A)}},Z2=(B)=>{let A=Array.from(B||[]).filter((z)=>z instanceof File&&!String(z.name||"").startsWith(".DS_Store"));if(!A.length)return;p_((z)=>[...z,...A]),S0(null)},k2=(B)=>{Z2(B.target.files),B.target.value=""},N2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),k0.current+=1,c_(!0)},w2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),k0.current=Math.max(0,k0.current-1),k0.current===0)c_(!1)},A2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";c_(!0)},P2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),k0.current=0,c_(!1),Z2(B.dataTransfer?.files||[])},b2=(B)=>{if(j)return;let A=B.clipboardData?.items;if(!A||!A.length)return;let z=[];for(let O of A){if(O.kind!=="file")continue;let F=O.getAsFile?.();if(F)z.push(F)}if(z.length>0)B.preventDefault(),Z2(z)},l0=(B)=>{p_((A)=>A.filter((z,O)=>O!==B))},g0=()=>{S0(null),p_([]),Q?.(),y?.()},d$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:A,longitude:z,accuracy:O}=B.coords,F=`${A.toFixed(5)}, ${z.toFixed(5)}`,E=Number.isFinite(O)?` ±${Math.round(O)}m`:"",M=`https://maps.google.com/?q=${A},${z}`,l=`Location: ${F}${E} ${M}`;H$(l)},(B)=>{let A=B?.message||"Unable to retrieve location.";alert(`Location error: ${A}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!G0)return;e(!0),R2(G_).then((B)=>{let A=Array.isArray(B?.models)?B.models.filter((z)=>typeof z==="string"&&z.trim().length>0):[];A.sort((z,O)=>z.localeCompare(O,void 0,{sensitivity:"base"})),O0(A),R0(B)}).catch((B)=>{console.warn("Failed to load model list:",B),O0([])}).finally(()=>{e(!1)})},[G0,S]),f(()=>{if(j)I_(!1),t_(!1),b_(!1),H_([]),h_(!1),j0([])},[j]),f(()=>{if(i_&&!P0)t_(!1)},[i_,P0]),f(()=>{if(!G0)return;let B=(A)=>{let z=f$.current,O=u0.current,F=A.target;if(z&&z.contains(F))return;if(O&&O.contains(F))return;I_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[G0]),f(()=>{if(!i_)return;let B=(A)=>{let z=R$.current,O=U0.current,F=A.target;if(z&&z.contains(F))return;if(O&&O.contains(F))return;t_(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[i_]),f(()=>{let B=()=>{let E=J$.current?.clientWidth||0;J_((M)=>M===E?M:E)};B();let A=J$.current,z=0,O=()=>{if(z)cancelAnimationFrame(z);z=requestAnimationFrame(()=>{z=0,B()})},F=null;if(A&&typeof ResizeObserver<"u")F=new ResizeObserver(()=>O()),F.observe(A);if(typeof window<"u")window.addEventListener("resize",O);return()=>{if(z)cancelAnimationFrame(z);if(F?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",O)}},[j,S,t0.length,x?.percent]);let L2=(B)=>{let A=B.target.value;if(S0(null),i_)t_(!1);X$(B.target),i0(A)};return f(()=>{requestAnimationFrame(()=>X$())},[r,Y_,j]),f(()=>{if(j)return;V$(r)},[U$,G_,r,j]),U`
        <div class="compose-box">
            ${!j&&X_.length>0&&U`
                <div class="compose-queue-stack">
                    ${X_.map((B)=>{let A=typeof B?.content==="string"?B.content:"",z=P$(A);if(!z.text.trim()&&z.fileRefs.length===0&&z.messageRefs.length===0)return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${A}>
                                    ${z.text.trim()&&U`
                                        <div class="compose-queue-stack-text">${z.text}</div>
                                    `}
                                    ${(z.messageRefs.length>0||z.fileRefs.length>0)&&U`
                                        <div class="compose-queue-stack-refs">
                                            ${z.messageRefs.map((O)=>U`
                                                <${L$}
                                                    key=${"queue-msg-"+O}
                                                    prefix="compose"
                                                    label=${"msg:"+O}
                                                    title=${"Message reference: "+O}
                                                    icon="message"
                                                />
                                            `)}
                                            ${z.fileRefs.map((O)=>{let F=O.split("/").pop()||O;return U`
                                                    <${L$}
                                                        key=${"queue-file-"+O}
                                                        prefix="compose"
                                                        label=${F}
                                                        title=${O}
                                                        onClick=${()=>i?.(O)}
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
                                        onClick=${()=>L_(B)}
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
                                        onClick=${()=>t?.(B)}
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
                class=${`compose-input-wrapper${Y0?" drag-active":""}`}
                onDragEnter=${N2}
                onDragOver=${A2}
                onDragLeave=${w2}
                onDrop=${P2}
            >
                <div class="compose-input-main">
                    ${e_&&!v$&&U`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${e_}</div>
                    `}
                    ${v$&&U`
                        <div class="compose-file-refs">
                            ${e_&&U`
                                <div class="compose-submit-error" role="status" aria-live="polite">${e_}</div>
                            `}
                            ${q.map((B)=>{return U`
                                    <${L$}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>J?.(B)}
                                    />
                                `})}
                            ${L.map((B)=>{let A=B.split("/").pop()||B;return U`
                                    <${L$}
                                        prefix="compose"
                                        label=${A}
                                        title=${B}
                                        onClick=${()=>i?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(B)}
                                    />
                                `})}
                            ${v_.map((B,A)=>{let z=B?.name||`attachment-${A+1}`;return U`
                                    <${L$}
                                        key=${z+A}
                                        prefix="compose"
                                        label=${z}
                                        title=${z}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>l0(A)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${g0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>$_?.()}
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
                        ref=${Q_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y_:r}
                        onInput=${L2}
                        onKeyDown=${n$}
                        onPaste=${b2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${u_&&a_.length>0&&U`
                        <div class="slash-autocomplete" ref=${c0}>
                            ${a_.map((B,A)=>U`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${A===p0?" active":""}`}
                                    onMouseDown=${(z)=>{z.preventDefault(),v0(B)}}
                                    onMouseEnter=${()=>y0(A)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${T_&&E_.length>0&&U`
                        <div class="slash-autocomplete" ref=${I0}>
                            ${E_.map((B,A)=>U`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${A===$0?" active":""}`}
                                    onMouseDown=${(z)=>{z.preventDefault(),Q0(B)}}
                                    onMouseEnter=${()=>N0(A)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${G0&&!j&&U`
                        <div class="compose-model-popup" ref=${f$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&m_.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&m_.map((B)=>U`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${S===B?" active":""}`}
                                        onClick=${()=>{j2(B)}}
                                        disabled=${A_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{i$()}}
                                    disabled=${A_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${i_&&!j&&U`
                        <div class="compose-model-popup" ref=${R$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let B=typeof o_?.agent_name==="string"&&o_.agent_name.trim()?`@${o_.agent_name.trim()}`:G_,A=typeof o_?.chat_jid==="string"&&o_.chat_jid.trim()?o_.chat_jid.trim():G_;return`${B} — ${A} • current`})()}
                                    </div>
                                `}
                                ${!y$&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${y$&&C0.map((B)=>{let A=Boolean(B.archived_at),z=`@${B.agent_name} — ${B.chat_jid}${B.is_active?" • active":""}${A?" • archived":""}`;return U`
                                        <button
                                            key=${B.chat_jid}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item${A?" archived":""}`}
                                            onClick=${()=>{if(A){p$(B.chat_jid);return}g$(B.chat_jid)}}
                                            disabled=${A?!A0:!G$}
                                            title=${A?"Restore this archived branch":"Switch to this session"}
                                        >
                                            ${z}
                                        </button>
                                    `})}
                            </div>
                            ${(w$||k$||s_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${w$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{h0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${k$&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{e0()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${s_&&U`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{h$()}}
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
                <div class="compose-footer" ref=${J$}>
                    ${!j&&S&&U`
                    <div class="compose-meta-row">
                        ${!j&&S&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${u0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${w_}
                                    aria-label="Open model picker"
                                    onClick=${M$}
                                    disabled=${A_}
                                >
                                    ${A_?"Switching…":F$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!A_&&m0&&U`
                                        <span class="compose-model-usage-hint" title=${w_}>
                                            ${m0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${M0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${t0.map((B)=>U`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>c$(B)}
                                    title=${`${B.chat_jid||"Active agent"} — switch to @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&x&&x.percent!=null&&U`
                        <${X5} usage=${x} />
                    `}
                    ${P0&&U`
                        <button
                            ref=${U0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${i_?" active":""}`}
                            onClick=${I$}
                            title=${i_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${i_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
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
                        onClick=${j?X:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
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
                    ${W$&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${d$}
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
                    ${a0&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${O$?" active":""}`}
                            onClick=${m}
                            title=${E$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${n&&Z_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Z_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${L.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${k2} />
                        </label>
                    `}
                    ${(D_!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${D_!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${D_}" title=${H0}>
                                    ${u$}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{l$()}}
                                    disabled=${!K0}
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
    `}var t3="piclaw_theme",L4="piclaw_tint",g2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},e3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r3={default:{label:"Default",mode:"auto",light:g2,dark:e3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},V5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],z2={theme:"default",tint:null},_8="light",V4=!1;function B4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function E2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function q5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),Y=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,Y,X].every((V)=>Number.isFinite(V)))return null;let L=`#${[K,Y,X].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:Y,b:X,hex:L}}function $8(_){return E2(_)||q5(_)}function m2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function q4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function L5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*Y}function B5(_){return L5(_)>0.4?"#000000":"#ffffff"}function j8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Q4(_){return r3[_]||r3.default}function Q5(_){return _.mode==="auto"?j8():_.mode}function Z8(_,$){let j=Q4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||g2}function N8(_,$,j){let Z=$8($);if(!Z)return _;let N=E2(_.bgPrimary),K=E2(_.bgSecondary),Y=E2(_.bgHover),X=E2(_.borderColor);if(!N||!K||!Y||!X)return _;let V=E2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:m2(N,Z,0.08),bgSecondary:m2(K,Z,0.12),bgHover:m2(Y,Z,0.16),borderColor:m2(X,Z,0.08),accent:Z.hex,accentHover:V?m2(Z,V,0.18):Z.hex}}function O5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=$8(Z),K=N?q4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?q4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?q4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?B5(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||g2.danger,"--success-color":_.success||g2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([Q,q])=>{if(q)j.style.setProperty(Q,q)})}function U5(){if(typeof document>"u")return;let _=document.documentElement;V5.forEach(($)=>_.style.removeProperty($))}function D2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function a3(_){let $=B4(z2?.theme||"default"),j=z2?.tint?String(z2.tint).trim():null,Z=Z8($,_);if($==="default"&&j)Z=N8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?e3.bgPrimary:g2.bgPrimary}function F5(_,$){if(typeof document>"u")return;let j=D2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=D2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",a3("light"));let N=D2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",a3("dark"));let K=D2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let Y=D2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let X=D2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function H5(){if(typeof window>"u")return;let _={...z2,mode:_8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function O4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=B4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Q4(j),K=Q5(N),Y=Z8(j,K);z2={theme:j,tint:Z},_8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=Y;if(j==="default"&&Z)L=N8(Y,Z,K);if(j==="default"&&!Z)U5();else O5(L,K);if(F5(L.bgPrimary,K),H5(),$.persist!==!1)if(Z0(t3,j),Z)Z0(L4,Z);else Z0(L4,"")}function L1(){if(Q4(z2.theme).mode!=="auto")return;O4(z2,{persist:!1})}function K8(){if(typeof window>"u")return()=>{};let _=B4(K$(t3)||"default"),$=K$(L4),j=$?$.trim():null;if(O4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!V4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",L1);else if(Z.addListener)Z.addListener(L1);return V4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",L1);else if(Z.removeListener)Z.removeListener(L1);V4=!1}}return()=>{}}function Y8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;O4({theme:j||"default",tint:Z},{persist:!0})}function z8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return j8()}var B1=/#(\w+)/g,J5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),D5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),E5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),y5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},k5=new Set(["http:","https:","mailto:",""]);function U4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!k5.has(Z.protocol))return null;return Z.href}catch{return null}}function W8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let Y of Z){let X=Y.tagName.toLowerCase();if(!D5.has(X)){let V=Y.parentNode;if(!V)continue;while(Y.firstChild)V.insertBefore(Y.firstChild,Y);V.removeChild(Y);continue}let L=y5[X]||new Set;for(let V of Array.from(Y.attributes)){let Q=V.name.toLowerCase(),q=V.value;if(Q.startsWith("on")){Y.removeAttribute(V.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(L.has(Q)||E5.has(Q)){if(Q==="href"){let J=W2(q);if(!J)Y.removeAttribute(V.name);else if(Y.setAttribute(V.name,J),X==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let J=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,y=W2(J,{allowDataImage:X==="img"});if(!y)Y.removeAttribute(V.name);else Y.setAttribute(V.name,y)}continue}Y.removeAttribute(V.name)}}return j.body.innerHTML}function G8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Q1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=G8(j);if(N===j)break;j=N}return j}function w5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,Y=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,Y=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,Y=[];continue}if(K)Y.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function A5(_){if(!_)return _;return Q1(_,5)}function P5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function b5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function I5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",Y=A5(K);return`<div class="mermaid-container" data-mermaid="${P5(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function X8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var x5={span:new Set(["title","class","lang","dir"])};function M5(_,$){let j=x5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let Y=(K[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${Y}="${U4(X)}"`)}return Z.join("")}function V8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[L=""]=X.split(/\s+/,1),V=L.toLowerCase();if(!V||!J5.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let Q=X.slice(L.length).trim(),q=M5(V,Q);return`<${V}${q}>`})}function q8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function L8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function C5(_){if(!window.katex)return _;let $=(Y)=>G8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let X=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let Q=X.length;return X.push(V),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let Q=X.length;return X.push(V),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:X}},Z=(Y,X)=>{if(!X.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,V)=>{let Q=Number(V);return X[Q]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,X,L)=>{try{let V=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${V}`}catch(V){return`<span class="math-error" title="${U4(V.message)}">${Y}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,X,L)=>{if(/\s$/.test(L))return Y;try{let V=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${V}`}catch(V){return`${X}<span class="math-error" title="${U4(V.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function T5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let Y=K.nodeValue;if(!Y)continue;if(B1.lastIndex=0,!B1.test(Y))continue;B1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=Y.split(B1);if(L.length<=1)continue;let V=$.createDocumentFragment();L.forEach((Q,q)=>{if(q%2===1){let J=$.createElement("a");J.setAttribute("href","#"),J.className="hashtag",J.setAttribute("data-hashtag",Q),J.textContent=`#${Q}`,V.appendChild(J)}else V.appendChild($.createTextNode(Q))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function S5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function s0(_,$,j={}){if(!_)return"";let Z=S5(_),{text:N,blocks:K}=w5(Z),Y=Q1(N,2),L=X8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=V8(L),Q=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return Q=q8(Q),Q=L8(Q),Q=C5(Q),Q=T5(Q),Q=I5(Q,K),Q=W8(Q,j),Q}function O1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Q1($,2),N=X8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=V8(N),Y=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return Y=q8(Y),Y=L8(Y),Y=W8(Y),Y}function f5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[V,Q]=L.split(",").map(Number);return{x:V,y:Q}});if(Y.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let V=Y[L-1],Q=Y[L],q=Y[L+1],J=Q.x-V.x,y=Q.y-V.y,S=q.x-Q.x,v=q.y-Q.y,R=Math.sqrt(J*J+y*y),P=Math.sqrt(S*S+v*v),x=Math.min($,R/2,P/2);if(x<0.5){X.push(`L ${Q.x},${Q.y}`);continue}let g=Q.x-J/R*x,D=Q.y-y/R*x,m=Q.x+S/P*x,o=Q.y+v/P*x,n=J*v-y*S>0?1:0;X.push(`L ${g},${D}`),X.push(`A ${x},${x} 0 0 ${n} ${m},${o}`)}return X.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function T$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=z8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of K)try{let X=Y.dataset.mermaid,L=b5(X||""),V=Q1(L,2),Q=await $(V,{...N,transparent:!0});Q=f5(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function B8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Q8(_){return String(_||"").trim()||"web:default"}function O8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function U8(_){if(!_)return!1;return _.status!=="running"}function F8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function H8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),K=k(null),Y=_?.thinking?O1(_.thinking):"",X=_?.answer?s0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&Y)T$(N.current).catch(()=>{})},[Y]),f(()=>{if(K.current&&X)T$(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",V=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),q=O8(_),J=U8(_),y=!L&&V,S=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
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

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&U`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${q&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${J&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
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
    `}var J8="PiClaw";function F4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%K.length,X=K[Y],L=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",Q=V?V:null,q=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:Q||(q?"/static/icon-192.png":null)}}function D8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function E8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function y8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,Y=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function R5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function p2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function k8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return p2(_)?"Compacting context":"Working..."}function v5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function w8(_,$=Date.now()){let j=R5(_);if(j===null)return null;return v5(Math.max(0,$-j))}function A8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:Y,steerQueued:X,onPanelToggle:L}){let q=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let v_=r,p_=v_?v_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:v_,totalLines:p_,fullText:v_}}let O_=r.text||"",Y_=r.fullText||r.full_text||O_,C_=Number.isFinite(r.totalLines)?r.totalLines:Y_?Y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:C_,fullText:Y_}},J=160,y=(r)=>String(r||"").replace(/<\/?internal>/gi,""),S=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},v=(r,O_,Y_)=>{let C_=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!C_)return{text:"",omitted:0,totalLines:Number.isFinite(Y_)?Y_:0,visibleLines:0};let v_=C_.split(`
`),p_=v_.length>O_?v_.slice(0,O_).join(`
`):C_,Y0=Number.isFinite(Y_)?Y_:v_.reduce((H_,$0)=>H_+S($0),0),c_=p_?p_.split(`
`).reduce((H_,$0)=>H_+S($0),0):0,E_=Math.max(Y0-c_,0);return{text:p_,omitted:E_,totalLines:Y0,visibleLines:c_}},R=q(j),P=q(Z),x=q($),g=Boolean(R.text)||R.totalLines>0,D=Boolean(P.text)||P.totalLines>0,m=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!m&&!g&&!D&&!N&&!K)return null;let[o,__]=T(new Set),[n,Z_]=T(()=>Date.now()),i=(r)=>__((O_)=>{let Y_=new Set(O_),C_=!Y_.has(r);if(C_)Y_.add(r);else Y_.delete(r);if(typeof L==="function")L(r,C_);return Y_});f(()=>{__(new Set)},[Y]);let X_=p2(_);f(()=>{if(!X_)return;Z_(Date.now());let r=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(r)},[X_,_?.started_at,_?.startedAt]);let d_=_?.turn_id||Y,t=y8(d_),a=X?"turn-dot turn-dot-queued":"turn-dot",K_=(r)=>r,$_=Boolean(_?.last_activity||_?.lastActivity),W_=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":t,U_=K?.kind||"info",G_=W_(U_),D_=W_(_?.kind||(X_?"warning":"info")),B_="",x_=_?.title,R_=_?.status;if(_?.type==="plan")B_=x_?`Planning: ${x_}`:"Planning...";else if(_?.type==="tool_call")B_=x_?`Running: ${x_}`:"Running tool...";else if(_?.type==="tool_status")B_=x_?`${x_}: ${R_||"Working..."}`:R_||"Working...";else if(_?.type==="error")B_=x_||"Agent error";else B_=x_||R_||"Working...";if($_)B_="Last activity just now";let F_=({panelTitle:r,text:O_,fullText:Y_,totalLines:C_,maxLines:v_,titleClass:p_,panelKey:Y0})=>{let c_=o.has(Y0),E_=Y_||O_||"",H_=Y0==="thought"||Y0==="draft"?y(E_):E_,$0=typeof v_==="number",N0=c_&&$0,T_=$0?v(H_,v_,C_):{text:H_||"",omitted:0,totalLines:Number.isFinite(C_)?C_:0};if(!H_&&!(Number.isFinite(T_.totalLines)&&T_.totalLines>0))return null;let b_=`agent-thinking-body${$0?" agent-thinking-body-collapsible":""}`,a_=$0?`--agent-thinking-collapsed-lines: ${v_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${c_?"true":"false"}
                data-collapsible=${$0?"true":"false"}
                style=${t?`--turn-color: ${t};`:""}
            >
                <div class="agent-thinking-title ${p_||""}">
                    ${t&&U`<span class=${a} aria-hidden="true"></span>`}
                    ${r}
                    ${N0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>i(Y0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${b_}
                    style=${a_}
                    dangerouslySetInnerHTML=${{__html:O1(H_)}}
                />
                ${!c_&&T_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(Y0)}>
                        ▸ ${T_.omitted} more lines
                    </button>
                `}
                ${c_&&T_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>i(Y0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},M_=N?.tool_call?.title,g_=M_?`Awaiting approval: ${M_}`:"Awaiting approval",W0=X_?w8(_,n):null,V_=(r,O_,Y_=null)=>{let C_=k8(r);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O_?`--turn-color: ${O_};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O_&&U`<span class=${a} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${C_}</span>
                    ${Y_&&U`<span class="agent-status-elapsed">${Y_}</span>`}
                </div>
                ${r.detail&&U`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${K&&V_(K,G_)}
            ${_?.type==="intent"&&V_(_,D_,W0)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${t?`--turn-color: ${t};`:""}>
                    <span class=${a} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${g_}</span>
                </div>
            `}
            ${g&&F_({panelTitle:K_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${D&&F_({panelTitle:K_("Thoughts"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${m&&F_({panelTitle:K_("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${t?`--turn-color: ${t};`:""}>
                    ${t&&U`<span class=${a} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${B_}</span>
                </div>
            `}
        </div>
    `}function P8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,Y=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},V=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,q=L.fileName||L.path||null,J=Z?.description||L.description||L.explanation||null,S=(Array.isArray(Z?.locations)?Z.locations:[]).map((g)=>g?.path).filter((g)=>Boolean(g)),v=Array.from(new Set([q,...S].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(g)=>{try{await z1(j,g,K||null),$()}catch(D){console.error("Failed to respond to agent request:",D)}},P=async()=>{try{await t1(Y,`Auto-approved: ${Y}`),await z1(j,"approved",K||null),$()}catch(g){console.error("Failed to add to whitelist:",g)}},x=N&&N.length>0;return U`
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
                ${(J||V||Q||v.length>0)&&U`
                    <div class="agent-request-body">
                        ${J&&U`
                            <div class="agent-request-description">${J}</div>
                        `}
                        ${v.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((g,D)=>U`<li key=${D}>${g}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&U`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${Q&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${x?N.map((g)=>U`
                            <button 
                                key=${g.optionId||g.id||String(g)}
                                class="agent-request-btn ${g.kind==="allow_once"||g.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(g.optionId||g.id||g)}
                            >
                                ${g.name||g.label||g.optionId||g.id||String(g)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${P}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function b8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${V}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${X}`}function c2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Y$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function G2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var u5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),m5=new Set(["text/markdown"]),g5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),p5=new Set(["application/vnd.jgraph.mxfile"]);function h2(_){return typeof _==="string"?_.trim().toLowerCase():""}function c5(_){let $=h2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function h5(_){let $=h2(_);return!!$&&$.endsWith(".pdf")}function i5(_){let $=h2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function i2(_,$){let j=h2(_);if(c5($)||p5.has(j))return"drawio";if(h5($)||j==="application/pdf")return"pdf";if(i5($)||g5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(u5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function I8(_){let $=h2(_);return m5.has($)}function x8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function l5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function n5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:K}}function M8(_){return l5(_)||n5(_)}function U1(_){let $=(K)=>{let Y=K/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function d5(_,$){let j=Math.max(U1(_),U1($)),Z=Math.min(U1(_),U1($));return(j+0.05)/(Z+0.05)}function o5(_,$,j="#ffffff"){let Z=M8(_);if(!Z)return j;let N=j,K=-1;for(let Y of $){let X=M8(Y);if(!X)continue;let L=d5(Z,X);if(L>K)N=Y,K=L}return N}function H4(){let _=getComputedStyle(document.documentElement),$=(S,v)=>{for(let R of S){let P=_.getPropertyValue(R).trim();if(P)return P}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),J=$(["--font-family"],"system-ui, sans-serif"),y=o5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:Y,accent:X,good:L,warning:V,attention:Q,border:q,fontFamily:J,buttonTextColor:y}}function C8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:Y,attention:X,border:L,fontFamily:V}=H4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var s5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),T8=!1,F1=null,S8=!1;function J4(_){_.querySelector(".adaptive-card-notice")?.remove()}function r5(_,$,j="error"){J4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function a5(_,$=(j)=>s0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function t5(_=($)=>s0($,null)){return($,j)=>{try{let Z=a5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function e5(_){if(S8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=t5(),S8=!0}async function _7(){if(T8)return;if(F1)return F1;return F1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{T8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),F1}function $7(){return globalThis.AdaptiveCards}function j7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Z7(_){return s5.has(_)}function E4(_){if(!Array.isArray(_))return[];return _.filter(j7)}function N7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function D4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>D4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${D4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function K7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return D4($);return typeof $==="string"?$:String($)}function Y7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=K7(Y.type,j[Y.id],Y);for(let[X,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[X]=Z(L);return Y};return Z(_)}function z7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function W7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function G7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=W7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function f8(_,$,j){if(!Z7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await _7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=$7();e5(Z);let N=new Z.AdaptiveCard,K=H4();N.hostConfig=new Z.HostConfig(C8());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:Y7($.payload,Y);N.parse(X),N.onExecuteAction=(Q)=>{let q=N7(Q);if(j?.onAction)J4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((J)=>{console.error("[adaptive-card] Action failed:",J);let y=J instanceof Error?J.message:String(J||"Action failed.");r5(_,y||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=G7($);if(V){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=V.label,Q.appendChild(q),V.detail){let J=document.createElement("span");J.className="adaptive-card-status-detail",J.textContent=V.detail,Q.appendChild(J)}_.appendChild(Q)}if(J4(_),_.appendChild(L),V)z7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function R8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l2(j)})).filter(($)=>$.value)}function X7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function y4(_){if(!Array.isArray(_))return[];return _.filter(X7)}function v8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=R8(j).map(({key:K,value:Y})=>`${K}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function u8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=R8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:Y})=>`${K}: ${Y}`).join(", "):l2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function V7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Y$($):null},{label:"Added",value:_?.created_at?G2(_.created_at):null}].filter((Z)=>Z.value)}function q7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=N$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function m8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=l_(()=>i2($?.content_type,Z),[$?.content_type,Z]),K=x8(N),Y=l_(()=>I8($?.content_type),[$?.content_type]),[X,L]=T(N==="text"),[V,Q]=T(""),[q,J]=T(null),y=k(null),S=l_(()=>V7($),[$]),v=l_(()=>q7(_,Z,N),[_,Z,N]),R=l_(()=>{if(!Y||!V)return"";return s0(V)},[Y,V]);return f(()=>{let P=(x)=>{if(x.key==="Escape")j()};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[j]),f(()=>{if(!y.current||!R)return;T$(y.current);return},[R]),f(()=>{let P=!1;async function x(){if(N!=="text"){L(!1),J(null);return}L(!0),J(null);try{let g=await j4(_);if(!P)Q(g)}catch{if(!P)J("Failed to load text preview.")}finally{if(!P)L(!1)}}return x(),()=>{P=!0}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(P)=>{P.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&U`
                            <a
                                href=${v}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(P)=>P.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${N$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(P)=>P.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&q&&U`<div class="attachment-preview-state">${q}</div>`}
                    ${!X&&!q&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${N$(_)} alt=${Z} />
                    `}
                    ${!X&&!q&&(N==="pdf"||N==="office"||N==="drawio")&&v&&U`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!X&&!q&&N==="drawio"&&U`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!q&&N==="text"&&Y&&U`
                        <div
                            ref=${y}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!X&&!q&&N==="text"&&!Y&&U`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!X&&!q&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${S.map((P)=>U`
                        <div class="attachment-preview-meta-item" key=${P.label}>
                            <span class="attachment-preview-meta-label">${P.label}</span>
                            <span class="attachment-preview-meta-value">${P.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function g8({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function L7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{F2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,Y=K?Y$(K):"",L=i2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${N$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&U`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
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
                ${L}
            </button>
        </div>
    `}function B7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;F2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?N$(j):null,L=i2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${K}>
            ${Y?U`
                    <a href=${Y} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${L$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:U`
                    <${L$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function H1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?G2(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&U`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function Q7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Y$(_.size):"",N=_.mime_type||"",K=U7(N),Y=W2(_.uri);return U`
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
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&U`<span>${N}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function O7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),Y=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&U`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:Y||"application/octet-stream"}),V=URL.createObjectURL(L),Q=document.createElement("a");Q.href=V,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function U7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function F7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
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
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function H7(_,$){return typeof _==="string"?_:""}var J7=1800,D7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,E7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,y7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function k7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function w7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,Y)=>{let X=Y||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=E7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=y7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=D7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let Y=document.createElement("div");Y.className="post-code-block",K.parentNode?.insertBefore(Y,K),Y.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),Y.appendChild(X);let L=async(V)=>{V.preventDefault(),V.stopPropagation();let q=K.querySelector("code")?.textContent||"",J=await k7(q);N(X,J?"success":"error");let y=j.get(X);if(y)clearTimeout(y);let S=setTimeout(()=>{N(X,"idle"),j.delete(X)},J7);j.set(X,S)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let V=j.get(X);if(V)clearTimeout(V);if(Y.parentNode)Y.parentNode.insertBefore(K,Y),Y.remove()})}),()=>{Z.forEach((K)=>K())}}function A7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function P7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let q=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function b7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1){let Q=j[V].trim();if((Q==="Images:"||Q==="Attachments:")&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let Q=V.replace(/^\s*-\s+/,"").trim(),q=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let J=q[1],y=(q[2]||"").trim()||J;N.push({id:J,label:y,raw:Q})}else N.push({id:null,label:Q,raw:Q})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function I7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function x7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(I7).sort((Q,q)=>q.length-Q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),X=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],V;while(V=X.nextNode())L.push(V);for(let Q of L){let q=Q.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let J=Q.parentElement;if(J&&J.closest("code, pre, script, style"))continue;let y=q.split(N).filter((v)=>v!=="");if(y.length===0)continue;let S=Y.createDocumentFragment();for(let v of y)if(K.test(v)){let R=Y.createElement("mark");R.className="search-highlight-term",R.textContent=v,S.appendChild(R)}else S.appendChild(Y.createTextNode(v));Q.parentNode.replaceChild(S,Q)}return Y.body.innerHTML}function p8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:Y,userName:X,userAvatarUrl:L,userAvatarBackground:V,onDelete:Q,isThreadReply:q,isThreadPrev:J,isThreadNext:y,isRemoving:S,highlightQuery:v,onFileRef:R}){let[P,x]=T(null),g=k(null),D=_.data,m=D.type==="agent_response",o=X||"You",__=m?K||J8:o,n=m?F4(K,Y,!0):F4(o,L),Z_=typeof V==="string"?V.trim().toLowerCase():"",i=!m&&n.image&&(Z_==="clear"||Z_==="transparent"),X_=m&&Boolean(n.image),d_=`background-color: ${i||X_?"transparent":n.color}`,t=D.content_meta,a=Boolean(t?.truncated),K_=Boolean(t?.preview),$_=a&&!K_,W_=a?{originalLength:Number.isFinite(t?.original_length)?t.original_length:D.content?D.content.length:0,maxLength:Number.isFinite(t?.max_length)?t.max_length:0}:null,U_=D.content_blocks||[],G_=D.media_ids||[],D_=H7(D.content,D.link_previews),{content:B_,fileRefs:x_}=A7(D_),{content:R_,messageRefs:F_}=P7(B_),{content:M_,attachments:g_}=b7(R_);D_=M_;let W0=E4(U_),V_=y4(U_),r=W0.length===1&&typeof W0[0]?.fallback_text==="string"?W0[0].fallback_text.trim():"",O_=V_.length===1?v8(V_[0]).trim():"",Y_=Boolean(r)&&D_?.trim()===r||Boolean(O_)&&D_?.trim()===O_,C_=Boolean(D_)&&!$_&&!Y_,v_=typeof v==="string"?v.trim():"",p_=l_(()=>{if(!D_||Y_)return"";let C=s0(D_,j);return v_?x7(C,v_):C},[D_,Y_,v_]),Y0=(C,e)=>{C.stopPropagation(),x(N$(e))},[c_,E_]=T(null),H_=(C)=>{E_(C)},$0=(C)=>{C.stopPropagation(),Q?.(_)},N0=(C,e)=>{let y_=new Set;if(!C||e.length===0)return{content:C,usedIds:y_};return{content:C.replace(/attachment:([^\s)"']+)/g,(e_,S0,Q_,I0)=>{let c0=S0.replace(/^\/+/,""),u0=e.find((U0)=>U0.name&&U0.name.toLowerCase()===c0.toLowerCase()&&!y_.has(U0.id))||e.find((U0)=>!y_.has(U0.id));if(!u0)return e_;if(y_.add(u0.id),I0.slice(Math.max(0,Q_-2),Q_)==="](")return`/media/${u0.id}`;return u0.name||"attachment"}),usedIds:y_}},T_=[],b_=[],a_=[],j0=[],p0=[],y0=[],u_=0;if(U_.length>0)U_.forEach((C)=>{if(C?.type==="text"&&C.annotations)y0.push(C.annotations);if(C?.type==="resource_link")j0.push(C);else if(C?.type==="resource")p0.push(C);else if(C?.type==="file"){let e=G_[u_++];if(e)b_.push(e),a_.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=G_[u_++];if(e){let y_=typeof C?.mime_type==="string"?C.mime_type:void 0;T_.push({id:e,annotations:C?.annotations,mimeType:y_}),a_.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(G_.length>0){let C=g_.length>0;G_.forEach((e,y_)=>{let J_=g_[y_]||null;if(a_.push({id:e,name:J_?.label||null}),C)b_.push(e);else T_.push({id:e,annotations:null})})}if(g_.length>0)g_.forEach((C)=>{if(!C?.id)return;let e=a_.find((y_)=>String(y_.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:h_,usedIds:A_}=N0(D_,a_);D_=h_;let L0=T_.filter(({id:C})=>!A_.has(C)),G0=b_.filter((C)=>!A_.has(C)),I_=g_.length>0?g_.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):a_.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),i_=l_(()=>E4(U_),[U_]),t_=l_(()=>y4(U_),[U_]),m_=l_(()=>{return i_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[i_]);f(()=>{if(!g.current)return;return T$(g.current),w7(g.current)},[p_]);let O0=k(null);return f(()=>{if(!O0.current||i_.length===0)return;let C=O0.current;C.innerHTML="";for(let e of i_){let y_=document.createElement("div");C.appendChild(y_),f8(y_,e,{onAction:async(J_)=>{if(J_.type==="Action.OpenUrl"){let e_=W2(J_.url||"");if(!e_)throw Error("Invalid URL");window.open(e_,"_blank","noopener,noreferrer");return}if(J_.type==="Action.Submit"){await a1({post_id:_.id,thread_id:D.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:J_.type,title:J_.title||"",data:J_.data}});return}console.warn("[post] unsupported adaptive card action:",J_.type,J_)}}).catch((J_)=>{console.error("[post] adaptive card render error:",J_),y_.textContent=e.fallback_text||"Card failed to render."})}},[m_,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${m?"agent-post":""} ${q?"thread-reply":""} ${J?"thread-prev":""} ${y?"thread-next":""} ${S?"removing":""}" onClick=${$}>
            <div class="post-avatar ${m?"agent-avatar":""} ${n.image?"has-image":""}" style=${d_}>
                ${n.image?U`<img src=${n.image} alt=${__} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${$0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${__}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${b8(_.timestamp)}</a>
                </div>
                ${$_&&W_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${c2(W_.originalLength)} chars
                            ${W_.maxLength?U` • Display limit: ${c2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&W_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${c2(W_.maxLength)} of ${c2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(x_.length>0||F_.length>0||I_.length>0)&&U`
                    <div class="post-file-refs">
                        ${F_.map((C)=>{let e=(y_)=>{if(y_.preventDefault(),y_.stopPropagation(),N)N(C,_.chat_jid||null);else{let J_=document.getElementById("post-"+C);if(J_)J_.scrollIntoView({behavior:"smooth",block:"center"}),J_.classList.add("post-highlight"),setTimeout(()=>J_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${e}>
                                    <${L$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${x_.map((C)=>{let e=C.split("/").pop()||C;return U`
                                <${L$}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>R?.(C)}
                                />
                            `})}
                        ${I_.map((C)=>U`
                            <${B7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${H_}
                            />
                        `)}
                    </div>
                `}
                ${C_&&U`
                    <div 
                        ref=${g}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),x(C.target.src)}}
                    />
                `}
                ${i_.length>0&&U`
                    <div ref=${O0} class="post-adaptive-cards" />
                `}
                ${t_.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${t_.map((C,e)=>{let y_=u8(C),J_=`${C.card_id}-${e}`;return U`
                                <div key=${J_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${y_.title}</span>
                                        </div>
                                    </div>
                                    ${y_.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${y_.fields.map((e_)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${e_.key}: ${e_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${e_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${e_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${G2(y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${y0.length>0&&U`
                    ${y0.map((C,e)=>U`
                        <${H1} key=${e} annotations=${C} />
                    `)}
                `}
                ${L0.length>0&&U`
                    <div class="media-preview">
                        ${L0.map(({id:C,mimeType:e})=>{let J_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?N$(C):$4(C);return U`
                                <img 
                                    key=${C} 
                                    src=${J_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(e_)=>Y0(e_,C)}
                                />
                            `})}
                    </div>
                `}
                ${L0.length>0&&U`
                    ${L0.map(({annotations:C},e)=>U`
                        ${C&&U`<${H1} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${G0.length>0&&U`
                    <div class="file-attachments">
                        ${G0.map((C)=>U`
                            <${L7} key=${C} mediaId=${C} onPreview=${H_} />
                        `)}
                    </div>
                `}
                ${j0.length>0&&U`
                    <div class="resource-links">
                        ${j0.map((C,e)=>U`
                            <div key=${e}>
                                <${Q7} block=${C} />
                                <${H1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p0.length>0&&U`
                    <div class="resource-embeds">
                        ${p0.map((C,e)=>U`
                            <div key=${e}>
                                <${O7} block=${C} />
                                <${H1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${D.link_previews.map((C,e)=>U`
                            <${F7} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${P&&U`<${g8} src=${P} onClose=${()=>x(null)} />`}
        ${c_&&U`
            <${m8}
                mediaId=${c_.mediaId}
                info=${c_.info}
                onClose=${()=>E_(null)}
            />
        `}
    `}function c8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:Y,onFileRef:X,emptyMessage:L,timelineRef:V,agents:Q,user:q,onDeletePost:J,reverse:y=!0,removingPostIds:S,searchQuery:v}){let[R,P]=T(!1),x=k(null),g=typeof IntersectionObserver<"u",D=I(async()=>{if(!j||!$||R)return;P(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{P(!1)}},[$,R,j]),m=I((t)=>{let{scrollTop:a,scrollHeight:K_,clientHeight:$_}=t.target,W_=y?K_-$_-a:a,U_=Math.max(300,$_);if(W_<U_)D()},[y,D]);f(()=>{if(!g)return;let t=x.current,a=V?.current;if(!t||!a)return;let K_=300,$_=new IntersectionObserver((W_)=>{for(let U_ of W_){if(!U_.isIntersecting)continue;D()}},{root:a,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return $_.observe(t),()=>$_.disconnect()},[g,$,j,V,D]);let o=k(D);if(o.current=D,f(()=>{if(g)return;if(!V?.current)return;let{scrollTop:t,scrollHeight:a,clientHeight:K_}=V.current,$_=y?a-K_-t:t,W_=Math.max(300,K_);if($_<W_)o.current?.()},[g,_,$,y,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:t,scrollHeight:a,clientHeight:K_}=V.current,$_=y?a-K_-t:t,W_=Math.max(300,K_);if(a<=K_+1||$_<W_)o.current?.()},[_,$,R,y,V]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let __=_.slice().sort((t,a)=>t.id-a.id),n=(t)=>{let a=t?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let K_=Number(a);return Number.isFinite(K_)?K_:null},Z_=new Map;for(let t=0;t<__.length;t+=1){let a=__[t],K_=Number(a?.id),$_=n(a);if($_!==null){let W_=Z_.get($_)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(t),Z_.set($_,W_)}else if(Number.isFinite(K_)){let W_=Z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=t,Z_.set(K_,W_)}}let i=new Map;for(let[t,a]of Z_.entries()){let K_=new Set;if(a.anchorIndex>=0)K_.add(a.anchorIndex);for(let $_ of a.replyIndexes)K_.add($_);i.set(t,Array.from(K_).sort(($_,W_)=>$_-W_))}let X_=__.map((t,a)=>{let K_=n(t);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.get(K_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=$_.indexOf(a);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<$_.length-1}}),d_=U`<div class="timeline-sentinel" ref=${x}></div>`;return U`
        <div class="timeline ${y?"reverse":"normal"}" ref=${V} onScroll=${m}>
            <div class="timeline-content">
                ${y?d_:null}
                ${__.map((t,a)=>{let K_=Boolean(t.data?.thread_id&&t.data.thread_id!==t.id),$_=S?.has?.(t.id),W_=X_[a]||{};return U`
                    <${p8}
                        key=${t.id}
                        post=${t}
                        isThreadReply=${K_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${D8(t.data?.agent_id,Q||{})}
                        agentAvatarUrl=${E8(t.data?.agent_id,Q||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(t)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${Y}
                        onFileRef=${X}
                        onDelete=${J}
                    />
                `})}
                ${y?null:d_}
            </div>
        </div>
    `}class h8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new h8;var J1=null,k4=null;function M7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function i8(){if(k4)return Promise.resolve(k4);if(!J1)J1=import(M7()).then((_)=>{return k4=_,_}).catch((_)=>{throw J1=null,_});return J1}class l8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await i8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var w4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new l8(_,$)}};function A4(){i8().catch(()=>{})}var b4="piclaw://terminal";var C7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},T7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},D1=null,P4=null;function S7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function f7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!S7(Y))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function R7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!D1)D1=f7(()=>Promise.resolve($.init?.())).catch((j)=>{throw D1=null,j});return await D1,$}async function v7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!P4)P4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await P4}async function u7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function m7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function g7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function S$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function p7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function n8(){let _=g7(),$=_?T7:C7,j=S$("--bg-primary",_?"#000000":"#ffffff"),Z=S$("--text-primary",_?"#e7e9ea":"#0f1419"),N=S$("--text-secondary",_?"#71767b":"#536471"),K=S$("--accent-color","#1d9bf0"),Y=S$("--danger-color",_?"#ff7b72":"#cf222e"),X=S$("--success-color",_?"#7ee787":"#1a7f37"),L=S$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=S$("--border-color",_?"#2f3336":"#eff3f4"),Q=S$("--accent-soft-strong",p7(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:Q,selectionForeground:Z,black:L,red:Y,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class I4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await R7();if(await v7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:n8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=n8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await u7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(m7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var x4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new I4(_,$)}},M4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new I4(_,$)}};function a$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",Y=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,Q=[];for(let J of V.split("/")){if(!J||J===".")continue;if(J===".."){if(Q.length>0)Q.pop();continue}Q.push(J)}let q=Q.join("/");return`${G1(q)}${K}${Y}`}function n2(_){return _?.preview||null}function h7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function i7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function l7(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${a$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${a$(Y$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${a$(G2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${a$(i7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${a$(h7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${a$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function n7(_){let $=n2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=l7(_,$);if($.kind==="image"){let Z=$.url||($.path?G1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${a$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=s0($.text||"",null,{rewriteImageSrc:(N)=>c7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${a$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class C4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=n7(this.context)}getContent(){let _=n2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=n2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var T4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=n2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new C4(_,$)}},S4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return n2(_)||_?.path?1:!1},mount(_,$){return new C4(_,$)}};var d7=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),o7={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},s7={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function o8(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function d8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class s8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=o8(j),K=s7[N]||"\uD83D\uDCC4",Y=o7[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${d8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${d8(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=o8(_?.path);if(!$||!d7.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new s8(_,$);return new r8(_,$)}};var r7=/\.(csv|tsv)$/i;function a8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${a8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${a8(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let Y=K.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!r7.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new t8(_,$);return new e8(_,$)}};var a7=/\.pdf$/i;function t7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class _6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${t7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class $6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!a7.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new _6(_,$);return new $6(_,$)}};var e7=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function u4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class j6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${u4(N)}" alt="${u4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${u4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let Y=K.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!e7.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new j6(_,$);return new Z6(_,$)}};var _j=/\.(mp4|m4v|mov|webm|ogv)$/i;function $j(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class N6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$j(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class K6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_j.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new N6(_,$);return new K6(_,$)}};function jj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Zj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var p4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function Y6(_){let $=String(_||"").trim();return $?$:p4}function Nj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Kj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Yj(_,$="*"){try{let j=(K)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(Y,X,L,V,Q,q){try{if(Y&&L!=null&&j({filename:Y,format:X,data:L,mimeType:V,base64Encoded:Boolean(Q),defaultMode:q}))return}catch(J){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",J)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(Y,X,L,V,Q,q){try{if(X&&j({filename:X,data:Y,mimeType:L,base64Encoded:Boolean(V),mode:Q,folderId:q}))return}catch(J){console.warn("[drawio-pane] export intercept failed, falling back to native export",J)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function z6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Kj(j)}`}class W6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Zj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class G6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Nj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Yj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=p4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await z6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await z6(_,"image/png");else this.xmlData=Y6(await _.text());else if(_.status===404)this.xmlData=p4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?Y6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var c4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!jj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new W6(_,$);return new G6(_,$)}};class X6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var n_=new X6;var E1="workspaceExplorerScale",zj=["compact","default","comfortable"],Wj=new Set(zj),Gj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function V6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return Wj.has(j)?j:$}function h4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Xj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Vj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function i4(_={}){let $=Xj(_),j=_.stored?V6(_.stored,$):$;return Vj(j,_)}function q6(_){return Gj[V6(_)]}var qj=60000,O6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U6(_,$,j,Z=0,N=[]){if(!j&&O6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)U6(K,$,j,Z+1,N);return N}function L6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&O6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let Y of K.children)N(Y)};return N(_),Z.join("|")}function o4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,Y=Z.map((X)=>{let L=o4(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:Y}:_}function n4(_,$,j){if(!_)return _;if(_.path===$)return o4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let Y=n4(K,$,j);if(Y!==K)Z=!0;return Y});return Z?{..._,children:N}:_}var F6=4,l4=14,Lj=8,Bj=16;function H6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=H6(Z);return _.__bytes=j,j}function J6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=F6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let Y=K;if(K.length>l4){let X=K.slice(0,l4-1),L=K.slice(l4-1),V=L.reduce((Q,q)=>Q+q.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:V}),Y=X}return Z.children=Y.map((X)=>{if(X.kind==="dir")return J6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function B6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function D6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function y1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function s4(_,$,j,Z,N,K){let Y=Math.PI*2-0.0001,X=K-N>Y?N+Y:K,L=y1(_,$,Z,N),V=y1(_,$,Z,X),Q=y1(_,$,j,X),q=y1(_,$,j,N),J=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${J} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${J} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var E6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function y6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),Y=(X,L,V,Q)=>{let q=Array.isArray(X?.children)?X.children:[];if(!q.length)return;let J=Math.max(0,Number(X.size)||0);if(J<=0)return;let y=V-L,S=L;q.forEach((v,R)=>{let P=Math.max(0,Number(v.size)||0);if(P<=0)return;let x=P/J,g=S,D=R===q.length-1?V:S+y*x;if(S=D,D-g<0.003)return;let m=E6[Q];if(m){let o=D6(g,Q,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:P,color:o,depth:Q,startAngle:g,endAngle:D,innerRadius:m[0],outerRadius:m[1],d:s4(120,120,m[0],m[1],g,D)}),Q===1)N.push({key:v.path,name:v.name,size:P,pct:K>0?P/K*100:0,color:o})}if(Q<F6)Y(v,g,D,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function d4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=d4(Z,$);if(N)return N}return null}function k6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=E6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,Y=Math.PI*3/2,X=D6(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:s4(120,120,N[0],N[1],K,Y)}],legend:[{key:V,name:_,size:j,pct:100,color:X}]}}function Q6(_,$=!1,j=!1){if(!_)return null;let Z=H6(_),N=J6(_,0),K=N.size||Z,{segments:Y,legend:X}=y6(N,K,j);if(!Y.length&&K>0){let L=k6("[files]",N.path,K,j);Y=L.segments,X=L.legend}return{root:N,totalSize:K,segments:Y,legend:X,truncated:$,isDarkTheme:j}}function Qj({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,Y]=T(()=>[_?.root?.path||"."]),[X,L]=T(!1);f(()=>{let i=_?.root?.path||".";N(i),Y([i]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let V=l_(()=>{return d4(_.root,Z)||_.root},[_?.root,Z]),Q=V?.size||_.totalSize||0,{segments:q,legend:J}=l_(()=>{let i=y6(V,Q,_.isDarkTheme);if(i.segments.length>0)return i;if(Q<=0)return i;let X_=V?.children?.length?"Total":"[files]";return k6(X_,V?.path||_?.root?.path||".",Q,_.isDarkTheme)},[V,Q,_.isDarkTheme,_?.root?.path]),[y,S]=T(q),v=k(new Map),R=k(0);f(()=>{let i=v.current,X_=new Map(q.map((K_)=>[K_.key,K_])),d_=performance.now(),t=220,a=(K_)=>{let $_=Math.min(1,(K_-d_)/220),W_=$_*(2-$_),U_=q.map((G_)=>{let B_=i.get(G_.key)||{startAngle:G_.startAngle,endAngle:G_.startAngle,innerRadius:G_.innerRadius,outerRadius:G_.innerRadius},x_=(W0,V_)=>W0+(V_-W0)*W_,R_=x_(B_.startAngle,G_.startAngle),F_=x_(B_.endAngle,G_.endAngle),M_=x_(B_.innerRadius,G_.innerRadius),g_=x_(B_.outerRadius,G_.outerRadius);return{...G_,d:s4(120,120,M_,g_,R_,F_)}});if(S(U_),$_<1)R.current=requestAnimationFrame(a)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(a),v.current=X_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[q]);let P=y.length?y:q,x=Q>0?Y$(Q):"0 B",g=V?.name||"",m=(g&&g!=="."?g:"Total")||"Total",o=x,__=K.length>1,n=(i)=>{if(!i?.path)return;let X_=d4(_.root,i.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;Y((d_)=>[...d_,X_.path]),N(X_.path),j(null)},Z_=()=>{if(!__)return;Y((i)=>{let X_=i.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${P.length}
                data-base-size=${Q}>
                ${P.map((i)=>U`
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
                        onClick=${()=>n(i)}
                    >
                        <title>${i.label} — ${Y$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${__?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${m}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${o}</text>
                </g>
            </svg>
            ${J.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${J.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${Y$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Oj({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;F2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Y$($.metadata.size):"";return U`
        <a href=${N$(_)} download=${Z} class="file-attachment"
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
                ${N&&U`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function w6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:Y=!1}){let[X,L]=T(null),[V,Q]=T(new Set(["."])),[q,J]=T(null),[y,S]=T(null),[v,R]=T(""),[P,x]=T(null),[g,D]=T(null),[m,o]=T(!0),[__,n]=T(!1),[Z_,i]=T(null),[X_,d_]=T(()=>H2("workspaceShowHidden",!1)),[t,a]=T(!1),[K_,$_]=T(null),[W_,U_]=T(null),[G_,D_]=T(null),[B_,x_]=T(!1),[R_,F_]=T(null),[M_,g_]=T(()=>B6()),[W0,V_]=T(()=>i4({stored:K$(E1),...h4()})),[r,O_]=T(!1),Y_=k(V),C_=k(""),v_=k(null),p_=k(0),Y0=k(new Set),c_=k(null),E_=k(new Map),H_=k(_),$0=k(Z),N0=k(null),T_=k(null),b_=k(null),a_=k(null),j0=k(null),p0=k(null),y0=k("."),u_=k(null),h_=k({path:null,dragging:!1,startX:0,startY:0}),A_=k({path:null,dragging:!1,startX:0,startY:0}),L0=k({path:null,timer:0}),G0=k(!1),I_=k(0),i_=k(new Map),t_=k(null),m_=k(null),O0=k(null),C=k(null),e=k(null),y_=k(null),J_=k(X_),e_=k($),S0=k(j??$),Q_=k(0),I0=k(G_),c0=k(t),f$=k(K_),u0=k(null),R$=k({x:0,y:0}),U0=k(0),J$=k(null),k0=k(q),x0=k(y),B$=k(null),r0=k(null),B0=k(P);H_.current=_,$0.current=Z,f(()=>{Y_.current=V},[V]),f(()=>{J_.current=X_},[X_]),f(()=>{e_.current=$},[$]),f(()=>{S0.current=j??$},[j,$]),f(()=>{I0.current=G_},[G_]),f(()=>{if(typeof window>"u")return;let z=()=>{V_(i4({stored:K$(E1),...h4()}))};z();let O=()=>z(),F=()=>z(),E=(c)=>{if(!c||c.key===null||c.key===E1)z()};window.addEventListener("resize",O),window.addEventListener("focus",F),window.addEventListener("storage",E);let M=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),d=(c,N_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",N_);else if(c.addListener)c.addListener(N_)},p=(c,N_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",N_);else if(c.removeListener)c.removeListener(N_)};return d(M,O),d(l,O),()=>{window.removeEventListener("resize",O),window.removeEventListener("focus",F),window.removeEventListener("storage",E),p(M,O),p(l,O)}},[]),f(()=>{let z=(O)=>{let F=O?.detail?.path;if(!F)return;let E=F.split("/"),M=[];for(let l=1;l<E.length;l++)M.push(E.slice(0,l).join("/"));if(M.length)Q((l)=>{let d=new Set(l);d.add(".");for(let p of M)d.add(p);return d});J(F),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(F)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),f(()=>{c0.current=t},[t]),f(()=>{f$.current=K_},[K_]),f(()=>{k0.current=q},[q]),f(()=>{x0.current=y},[y]),f(()=>{B0.current=P},[P]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>g_(B6());z();let O=window.matchMedia?.("(prefers-color-scheme: dark)"),F=()=>z();if(O?.addEventListener)O.addEventListener("change",F);else if(O?.addListener)O.addListener(F);let E=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(O?.removeEventListener)O.removeEventListener("change",F);else if(O?.removeListener)O.removeListener(F);E?.disconnect()}},[]),f(()=>{if(!y)return;let z=j0.current;if(!z)return;let O=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(O)},[y]),f(()=>{if(!r)return;let z=(F)=>{let E=F?.target;if(!(E instanceof Element))return;if(e.current?.contains(E))return;if(y_.current?.contains(E))return;O_(!1)},O=(F)=>{if(F?.key==="Escape")O_(!1),y_.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",O),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",O)}},[r]);let t$=async(z)=>{n(!0),x(null),D(null);try{let O=await Z4(z,20000);x(O)}catch(O){x({error:O.message||"Failed to load preview"})}finally{n(!1)}};N0.current=t$;let F0=async()=>{if(!e_.current)return;try{let z=await v2("",1,J_.current),O=L6(z.root,Y_.current,J_.current);if(O===C_.current){o(!1);return}if(C_.current=O,v_.current=z.root,!p_.current)p_.current=requestAnimationFrame(()=>{p_.current=0,L((F)=>o4(F,v_.current)),o(!1)})}catch(z){i(z.message||"Failed to load workspace"),o(!1)}},D$=async(z)=>{if(!z)return;if(Y0.current.has(z))return;Y0.current.add(z);try{let O=await v2(z,1,J_.current);L((F)=>n4(F,z,O.root))}catch(O){i(O.message||"Failed to load workspace")}finally{Y0.current.delete(z)}};T_.current=D$;let K0=I(()=>{let z=q;if(!z)return".";let O=E_.current?.get(z);if(O&&O.type==="dir")return O.path;if(z==="."||!z.includes("/"))return".";let F=z.split("/");return F.pop(),F.join("/")||"."},[q]),W$=I((z)=>{let O=z?.closest?.(".workspace-row");if(!O)return null;let F=O.dataset.path,E=O.dataset.type;if(!F)return null;if(E==="dir")return F;if(F.includes("/")){let M=F.split("/");return M.pop(),M.join("/")||"."}return"."},[]),Q$=I((z)=>{return W$(z?.target||null)},[W$]),w0=I((z)=>{I0.current=z,D_(z)},[]),f0=I(()=>{let z=L0.current;if(z?.timer)clearTimeout(z.timer);L0.current={path:null,timer:0}},[]),a0=I((z)=>{if(!z||z==="."){f0();return}let O=E_.current?.get(z);if(!O||O.type!=="dir"){f0();return}if(Y_.current?.has(z)){f0();return}if(L0.current?.path===z)return;f0();let F=setTimeout(()=>{L0.current={path:null,timer:0},T_.current?.(z),Q((E)=>{let M=new Set(E);return M.add(z),M})},600);L0.current={path:z,timer:F}},[f0]),O$=I((z,O)=>{if(R$.current={x:z,y:O},U0.current)return;U0.current=requestAnimationFrame(()=>{U0.current=0;let F=u0.current;if(!F)return;let E=R$.current;F.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),E$=I((z)=>{if(!z)return;let F=(E_.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!F)return;U_({path:z,label:F})},[]),v$=I(()=>{if(U_(null),U0.current)cancelAnimationFrame(U0.current),U0.current=0;if(u0.current)u0.current.style.transform="translate(-9999px, -9999px)"},[]),u$=I((z)=>{if(!z)return".";let O=E_.current?.get(z);if(O&&O.type==="dir")return O.path;if(z==="."||!z.includes("/"))return".";let F=z.split("/");return F.pop(),F.join("/")||"."},[]),H0=I(()=>{S(null),R("")},[]),U$=I((z)=>{if(!z)return;let F=(E_.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!F||z===".")return;S(z),R(F)},[]),t0=I(async()=>{let z=x0.current;if(!z)return;let O=(v||"").trim();if(!O){H0();return}let F=E_.current?.get(z),E=(F?.name||z.split("/").pop()||z).trim();if(O===E){H0();return}try{let l=(await Y4(z,O))?.path||z,d=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(H0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:l,type:F?.type||"file"}})),F?.type==="dir")Q((p)=>{let c=new Set;for(let N_ of p)if(N_===z)c.add(l);else if(N_.startsWith(`${z}/`))c.add(`${l}${N_.slice(z.length)}`);else c.add(N_);return c});if(J(l),F?.type==="dir")x(null),n(!1),D(null);else N0.current?.(l);T_.current?.(d)}catch(M){i(M?.message||"Failed to rename file")}},[H0,v]),M0=I(async(z)=>{let E=z||".";for(let M=0;M<50;M+=1){let d=`untitled${M===0?"":`-${M}`}.md`;try{let c=(await K4(E,d,""))?.path||(E==="."?d:`${E}/${d}`);if(E&&E!==".")Q((N_)=>new Set([...N_,E]));J(c),i(null),T_.current?.(E),N0.current?.(c);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),o_=I((z)=>{if(z?.stopPropagation?.(),B_)return;let O=u$(k0.current);M0(O)},[B_,u$,M0]);f(()=>{if(typeof window>"u")return;let z=(O)=>{let F=O?.detail?.updates||[];if(!Array.isArray(F)||F.length===0)return;L((p)=>{let c=p;for(let N_ of F){if(!N_?.root)continue;if(!c||N_.path==="."||!N_.path)c=N_.root;else c=n4(c,N_.path,N_.root)}if(c)C_.current=L6(c,Y_.current,J_.current);return o(!1),c});let E=k0.current;if(Boolean(E)&&F.some((p)=>{let c=p?.path||"";if(!c||c===".")return!0;return E===c||E.startsWith(`${c}/`)||c.startsWith(`${E}/`)}))i_.current.clear();if(!E||!B0.current)return;let l=E_.current?.get(E);if(l&&l.type==="dir")return;if(F.some((p)=>{let c=p?.path||"";if(!c||c===".")return!0;return E===c||E.startsWith(`${c}/`)}))N0.current?.(E)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),c_.current=F0;let m$=k(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=S0.current??e_.current,F=document.visibilityState!=="hidden"&&(O||z.matches&&e_.current);u2(F,J_.current).catch(()=>{})}).current,C0=k(0),y$=k(()=>{if(C0.current)clearTimeout(C0.current);C0.current=setTimeout(()=>{C0.current=0,m$()},250)}).current;f(()=>{if(e_.current)c_.current?.();y$()},[$,j]),f(()=>{c_.current(),m$();let z=setInterval(()=>c_.current(),qj),O=J2("previewHeight",null),F=Number.isFinite(O)?Math.min(Math.max(O,80),600):280;if(I_.current=F,b_.current)b_.current.style.setProperty("--preview-height",`${F}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=()=>y$();if(E.addEventListener)E.addEventListener("change",M);else if(E.addListener)E.addListener(M);return document.addEventListener("visibilitychange",M),()=>{if(clearInterval(z),p_.current)cancelAnimationFrame(p_.current),p_.current=0;if(E.removeEventListener)E.removeEventListener("change",M);else if(E.removeListener)E.removeListener(M);if(document.removeEventListener("visibilitychange",M),C0.current)clearTimeout(C0.current),C0.current=0;if(u_.current)clearTimeout(u_.current),u_.current=null;u2(!1,J_.current).catch(()=>{})}},[]);let G$=l_(()=>U6(X,V,X_),[X,V,X_]),A0=l_(()=>new Map(G$.map((z)=>[z.node.path,z.node])),[G$]),k$=l_(()=>q6(W0),[W0]);E_.current=A0;let s_=(q?E_.current.get(q):null)?.type==="dir";f(()=>{if(!q||!s_){F_(null),t_.current=null,m_.current=null;return}let z=q,O=`${X_?"hidden":"visible"}:${q}`,F=i_.current,E=F.get(O);if(E?.root){F.delete(O),F.set(O,E);let d=Q6(E.root,Boolean(E.truncated),M_);if(d)t_.current=d,m_.current=q,F_({loading:!1,error:null,payload:d});return}let M=t_.current,l=m_.current;F_({loading:!0,error:null,payload:l===q?M:null}),v2(q,Lj,X_).then((d)=>{if(k0.current!==z)return;let p={root:d?.root,truncated:Boolean(d?.truncated)};F.delete(O),F.set(O,p);while(F.size>Bj){let N_=F.keys().next().value;if(!N_)break;F.delete(N_)}let c=Q6(p.root,p.truncated,M_);t_.current=c,m_.current=q,F_({loading:!1,error:null,payload:c})}).catch((d)=>{if(k0.current!==z)return;F_({loading:!1,error:d?.message||"Failed to load folder size chart",payload:l===q?M:null})})},[q,s_,X_,M_]);let P0=Boolean(P&&P.kind==="text"&&!s_&&(!P.size||P.size<=262144)),F$=P0?"Open in editor":P?.size>262144?"File too large to edit":"File is not editable",A$=Boolean(q&&q!=="."),q2=Boolean(q&&!s_),e$=Boolean(q&&!s_),m0=q&&s_?X1(q,X_):null,J0=I(()=>O_(!1),[]),w_=I(async(z)=>{J0();try{await z?.()}catch{}},[J0]);f(()=>{let z=O0.current;if(C.current)C.current.dispose(),C.current=null;if(!z)return;if(z.innerHTML="",!q||s_||!P||P.error)return;let O={path:q,content:typeof P.text==="string"?P.text:void 0,mtime:P.mtime,size:P.size,preview:P,mode:"view"},F=r_.resolve(O)||r_.get("workspace-preview-default");if(!F)return;let E=F.mount(z,O);return C.current=E,()=>{if(C.current===E)E.dispose(),C.current=null;z.innerHTML=""}},[q,s_,P]);let R0=(z)=>{let O=z?.target;if(O instanceof Element)return O;return O?.parentElement||null},X$=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},_2=k((z)=>{if(r0.current)clearTimeout(r0.current),r0.current=null;let F=R0(z)?.closest?.("[data-path]");if(!F)return;let E=F.dataset.path;if(F.dataset.type==="dir"||!E)return;if(x0.current===E)H0();$0.current?.(E)}).current,$2=k((z)=>{if(G0.current){G0.current=!1;return}let O=R0(z),F=O?.closest?.("[data-path]");if(a_.current?.focus?.(),!F)return;let E=F.dataset.path,M=F.dataset.type,l=Boolean(O?.closest?.(".workspace-caret")),d=Boolean(O?.closest?.("button"))||Boolean(O?.closest?.("a"))||Boolean(O?.closest?.("input")),p=k0.current===E,c=x0.current;if(c){if(c===E)return;H0()}let N_=M==="file"&&B$.current===E&&!l&&!d;if(p&&!l&&!d&&E!=="."&&!N_){if(r0.current)clearTimeout(r0.current);r0.current=setTimeout(()=>{r0.current=null,U$(E)},350);return}if(M==="dir"){if(B$.current=null,J(E),x(null),D(null),n(!1),!Y_.current.has(E))T_.current?.(E);if(p&&!l)return;Q((T0)=>{let n0=new Set(T0);if(n0.has(E))n0.delete(E);else n0.add(E);return n0})}else{B$.current=null,J(E);let X0=E_.current.get(E);if(X0)H_.current?.(X0.path,X0);N0.current?.(E)}}).current,P$=k(()=>{C_.current="",c_.current(),Array.from(Y_.current||[]).filter((O)=>O&&O!==".").forEach((O)=>T_.current?.(O))}).current,b$=k(()=>{B$.current=null,J(null),x(null),D(null),n(!1)}).current,Q0=k(()=>{d_((z)=>{let O=!z;if(typeof window<"u")Z0("workspaceShowHidden",String(O));return J_.current=O,u2(!0,O).catch(()=>{}),C_.current="",c_.current?.(),Array.from(Y_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>T_.current?.(E)),O})}).current,V$=k((z)=>{if(R0(z)?.closest?.("[data-path]"))return;b$()}).current,v0=I(async(z)=>{if(!z)return;let O=z.split("/").pop()||z;if(!window.confirm(`Delete "${O}"? This cannot be undone.`))return;try{await W4(z);let E=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(k0.current===z)b$();T_.current?.(E),i(null)}catch(E){x((M)=>({...M||{},error:E.message||"Failed to delete file"}))}},[b$]),I$=I((z)=>{let O=a_.current;if(!O||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;O.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g$=I((z)=>{let O=G$;if(!O||O.length===0)return;let F=q?O.findIndex((E)=>E.node.path===q):-1;if(z.key==="ArrowDown"){z.preventDefault();let E=Math.min(F+1,O.length-1),M=O[E];if(!M)return;if(J(M.node.path),M.node.type!=="dir")H_.current?.(M.node.path,M.node),N0.current?.(M.node.path);else x(null),n(!1),D(null);I$(M.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let E=F<=0?0:F-1,M=O[E];if(!M)return;if(J(M.node.path),M.node.type!=="dir")H_.current?.(M.node.path,M.node),N0.current?.(M.node.path);else x(null),n(!1),D(null);I$(M.node.path);return}if(z.key==="ArrowRight"&&F>=0){let E=O[F];if(E?.node?.type==="dir"&&!V.has(E.node.path))z.preventDefault(),T_.current?.(E.node.path),Q((M)=>new Set([...M,E.node.path]));return}if(z.key==="ArrowLeft"&&F>=0){let E=O[F];if(E?.node?.type==="dir"&&V.has(E.node.path))z.preventDefault(),Q((M)=>{let l=new Set(M);return l.delete(E.node.path),l});return}if(z.key==="Enter"&&F>=0){z.preventDefault();let E=O[F];if(!E)return;let M=E.node.path;if(E.node.type==="dir"){if(!Y_.current.has(M))T_.current?.(M);Q((d)=>{let p=new Set(d);if(p.has(M))p.delete(M);else p.add(M);return p}),x(null),D(null),n(!1)}else H_.current?.(M,E.node),N0.current?.(M);return}if((z.key==="Delete"||z.key==="Backspace")&&F>=0){let E=O[F];if(!E||E.node.type==="dir")return;z.preventDefault(),v0(E.node.path);return}if(z.key==="Escape")z.preventDefault(),b$()},[b$,v0,V,G$,I$,q]),p$=I((z)=>{let O=R0(z),F=O?.closest?.(".workspace-row");if(!F)return;let E=F.dataset.type,M=F.dataset.path;if(!M||M===".")return;if(x0.current===M)return;let l=z?.touches?.[0];if(!l)return;if(h_.current={path:X$(O)?M:null,dragging:!1,startX:l.clientX,startY:l.clientY},E!=="file")return;if(u_.current)clearTimeout(u_.current);u_.current=setTimeout(()=>{if(u_.current=null,h_.current?.dragging)return;v0(M)},600)},[v0]),c$=I(()=>{if(u_.current)clearTimeout(u_.current),u_.current=null;let z=h_.current;if(z?.dragging&&z.path){let O=I0.current||K0(),F=J$.current;if(typeof F==="function")F(z.path,O)}h_.current={path:null,dragging:!1,startX:0,startY:0},Q_.current=0,a(!1),$_(null),w0(null),f0(),v$()},[K0,v$,w0,f0]),e0=I((z)=>{let O=h_.current,F=z?.touches?.[0];if(!F||!O?.path){if(u_.current)clearTimeout(u_.current),u_.current=null;return}let E=Math.abs(F.clientX-O.startX),M=Math.abs(F.clientY-O.startY),l=E>8||M>8;if(l&&u_.current)clearTimeout(u_.current),u_.current=null;if(!O.dragging&&l)O.dragging=!0,a(!0),$_("move"),E$(O.path);if(O.dragging){z.preventDefault(),O$(F.clientX,F.clientY);let d=document.elementFromPoint(F.clientX,F.clientY),p=W$(d)||K0();if(I0.current!==p)w0(p);a0(p)}},[W$,K0,E$,O$,w0,a0]),h0=k((z)=>{z.preventDefault();let O=b_.current;if(!O)return;let F=z.clientY,E=I_.current||280,M=z.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=F,d=(c)=>{l=c.clientY;let N_=O.clientHeight-80,X0=Math.min(Math.max(E-(c.clientY-F),80),N_);O.style.setProperty("--preview-height",`${X0}px`),I_.current=X0},p=()=>{let c=O.clientHeight-80,N_=Math.min(Math.max(E-(l-F),80),c);I_.current=N_,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z0("previewHeight",String(Math.round(N_))),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)}).current,h$=k((z)=>{z.preventDefault();let O=b_.current;if(!O)return;let F=z.touches[0];if(!F)return;let E=F.clientY,M=I_.current||280,l=z.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let d=(c)=>{let N_=c.touches[0];if(!N_)return;c.preventDefault();let X0=O.clientHeight-80,T0=Math.min(Math.max(M-(N_.clientY-E),80),X0);O.style.setProperty("--preview-height",`${T0}px`),I_.current=T0},p=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",Z0("previewHeight",String(Math.round(I_.current||M))),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,i0=async()=>{if(!q)return;try{let z=await N4(q);if(z.media_id)D(z.media_id)}catch(z){x((O)=>({...O||{},error:z.message||"Failed to attach"}))}},H$=async()=>{if(!q||s_)return;await v0(q)},q$=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},x$=I((z)=>{if(!q$(z))return;if(z.preventDefault(),Q_.current+=1,!c0.current)a(!0);$_("upload");let O=Q$(z)||K0();w0(O),a0(O)},[K0,Q$,w0,a0]),i$=I((z)=>{if(!q$(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!c0.current)a(!0);if(f$.current!=="upload")$_("upload");let O=Q$(z)||K0();if(I0.current!==O)w0(O);a0(O)},[K0,Q$,w0,a0]),j2=I((z)=>{if(!q$(z))return;if(z.preventDefault(),Q_.current=Math.max(0,Q_.current-1),Q_.current===0)a(!1),$_(null),w0(null),f0()},[w0,f0]),M$=I(async(z,O=".")=>{let F=Array.from(z||[]);if(F.length===0)return;let E=O&&O!==""?O:".",M=E!=="."?E:"workspace root";x_(!0);try{let l=null;for(let d of F)try{l=await W1(d,E)}catch(p){let c=p?.status,N_=p?.code;if(c===409||N_==="file_exists"){let X0=d?.name||"file";if(!window.confirm(`"${X0}" already exists in ${M}. Overwrite?`))continue;l=await W1(d,E,{overwrite:!0})}else throw p}if(l?.path)B$.current=l.path,J(l.path),N0.current?.(l.path);T_.current?.(E)}catch(l){i(l.message||"Failed to upload file")}finally{x_(!1)}},[]),y2=I(async(z,O)=>{if(!z)return;let F=E_.current?.get(z);if(!F)return;let E=O&&O!==""?O:".",M=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(E===M)return;try{let d=(await z4(z,E))?.path||z;if(F.type==="dir")Q((p)=>{let c=new Set;for(let N_ of p)if(N_===z)c.add(d);else if(N_.startsWith(`${z}/`))c.add(`${d}${N_.slice(z.length)}`);else c.add(N_);return c});if(J(d),F.type==="dir")x(null),n(!1),D(null);else N0.current?.(d);T_.current?.(M),T_.current?.(E)}catch(l){i(l?.message||"Failed to move entry")}},[]);J$.current=y2;let l$=I(async(z)=>{if(!q$(z))return;z.preventDefault(),Q_.current=0,a(!1),$_(null),D_(null),f0();let O=Array.from(z?.dataTransfer?.files||[]);if(O.length===0)return;let F=I0.current||Q$(z)||K0();await M$(O,F)},[K0,Q$,M$]),L_=I((z)=>{if(z?.stopPropagation?.(),B_)return;let O=z?.currentTarget?.dataset?.uploadTarget||".";y0.current=O,p0.current?.click()},[B_]),n$=I(()=>{if(B_)return;let z=k0.current,O=z?E_.current?.get(z):null;y0.current=O?.type==="dir"?O.path:".",p0.current?.click()},[B_]),Z2=I(()=>{w_(()=>o_(null))},[w_,o_]),k2=I(()=>{w_(()=>n$())},[w_,n$]),N2=I(()=>{w_(()=>P$())},[w_,P$]),w2=I(()=>{w_(()=>Q0())},[w_,Q0]),A2=I(()=>{if(!q||!P0)return;w_(()=>$0.current?.(q,P))},[w_,q,P0,P]),P2=I(()=>{if(!q||q===".")return;w_(()=>U$(q))},[w_,q,U$]),b2=I(()=>{if(!q||s_)return;w_(()=>H$())},[w_,q,s_,H$]),l0=I(()=>{if(!q||s_)return;w_(()=>i0())},[w_,q,s_,i0]),g0=I(()=>{if(!m0)return;if(J0(),typeof window<"u")window.open(m0,"_blank","noopener")},[J0,m0]),d$=I(()=>{J0(),N?.()},[J0,N]),L2=I(()=>{J0(),K?.()},[J0,K]),B=I((z)=>{if(!z||z.button!==0)return;let O=z.currentTarget;if(!O||!O.dataset)return;let F=O.dataset.path;if(!F||F===".")return;if(x0.current===F)return;let E=R0(z);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!X$(E))return;z.preventDefault(),A_.current={path:F,dragging:!1,startX:z.clientX,startY:z.clientY};let M=(d)=>{let p=A_.current;if(!p?.path)return;let c=Math.abs(d.clientX-p.startX),N_=Math.abs(d.clientY-p.startY),X0=c>4||N_>4;if(!p.dragging&&X0)p.dragging=!0,G0.current=!0,a(!0),$_("move"),E$(p.path),O$(d.clientX,d.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){d.preventDefault(),O$(d.clientX,d.clientY);let T0=document.elementFromPoint(d.clientX,d.clientY),n0=W$(T0)||K0();if(I0.current!==n0)w0(n0);a0(n0)}},l=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",l);let d=A_.current;if(d?.dragging&&d.path){let p=I0.current||K0(),c=J$.current;if(typeof c==="function")c(d.path,p)}A_.current={path:null,dragging:!1,startX:0,startY:0},Q_.current=0,a(!1),$_(null),w0(null),f0(),v$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{G0.current=!1},0)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",l)},[W$,K0,E$,O$,v$,w0,a0,f0]),A=I(async(z)=>{let O=Array.from(z?.target?.files||[]);if(O.length===0)return;let F=y0.current||".";if(await M$(O,F),y0.current=".",z?.target)z.target.value=""},[M$]);return U`
        <aside
            class=${`workspace-sidebar${t?" workspace-drop-active":""}`}
            data-workspace-scale=${W0}
            ref=${b_}
            onDragEnter=${x$}
            onDragOver=${i$}
            onDragLeave=${j2}
            onDrop=${l$}
        >
            <input type="file" multiple style="display:none" ref=${p0} onChange=${A} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${y_}
                            class=${`workspace-menu-button${r?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),O_((O)=>!O)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${r?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${r&&U`
                            <div class="workspace-menu-dropdown" ref=${e} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${B_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${k2} disabled=${B_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${N2}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${w2}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${q&&U`<div class="workspace-menu-separator"></div>`}
                                ${q&&!s_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A2} disabled=${!P0}>Open in editor</button>
                                `}
                                ${A$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P2}>Rename selected</button>
                                `}
                                ${e$&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l0}>Download selected file</button>
                                `}
                                ${m0&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g0}>Download selected folder (zip)</button>
                                `}
                                ${q2&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${b2}>Delete selected file</button>
                                `}

                                ${(N||K)&&U`<div class="workspace-menu-separator"></div>`}
                                ${N&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d$}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L2}>
                                        ${Y?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${o_} title="New file" disabled=${B_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${P$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${V$}>
                ${B_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${m&&U`<div class="workspace-loading">Loading…</div>`}
                ${Z_&&U`<div class="workspace-error">${Z_}</div>`}
                ${X&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${$2}
                        onDblClick=${_2}
                        onKeyDown=${g$}
                        onTouchStart=${p$}
                        onTouchEnd=${c$}
                        onTouchMove=${e0}
                        onTouchCancel=${c$}
                    >
                        ${G$.map(({node:z,depth:O})=>{let F=z.type==="dir",E=z.path===q,M=z.path===y,l=F&&V.has(z.path),d=G_&&z.path===G_,p=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return U`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${E?" selected":""}${d?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+O*k$.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${B}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${F?l?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${F?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${F?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${M?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${j0}
                                                value=${v}
                                                onInput=${(c)=>R(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),t0();else if(c.key==="Escape")c.preventDefault(),H0()}}
                                                onBlur=${H0}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${F&&!l&&p>0&&U`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${F&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${L_}
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
            ${q&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${h0} onTouchStart=${h$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${q}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${o_} title="New file" disabled=${B_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!s_&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P0&&$0.current?.(q,P)}
                                    title=${F$}
                                    disabled=${!P0}
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
                            ${s_?U`
                                    <button class="workspace-download" onClick=${n$}
                                        title="Upload files to this folder" disabled=${B_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${X1(q,X_)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${i0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${__&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${P?.error&&U`<div class="workspace-error">${P.error}</div>`}
                    ${s_&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&U`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&U`
                            <${Qj} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${P&&!P.error&&!s_&&U`
                        <div class="workspace-preview-body" ref=${O0}></div>
                    `}
                    ${g&&U`
                        <div class="workspace-download-card">
                            <${Oj} mediaId=${g} />
                        </div>
                    `}
                </div>
            `}
            ${W_&&U`
                <div class="workspace-drag-ghost" ref=${u0}>${W_.label}</div>
            `}
        </aside>
    `}var Uj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Fj=/\.(csv|tsv)$/i,Hj=/\.pdf$/i,Jj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,A6=/\.drawio(\.xml|\.svg|\.png)?$/i;function P6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:Y,onTogglePreview:X,previewTabs:L,onToggleDock:V,dockVisible:Q,onToggleZen:q,zenMode:J}){let[y,S]=T(null),v=k(null);f(()=>{if(!y)return;let D=(m)=>{if(m.type==="keydown"&&m.key!=="Escape")return;S(null)};return document.addEventListener("click",D),document.addEventListener("keydown",D),()=>{document.removeEventListener("click",D),document.removeEventListener("keydown",D)}},[y]),f(()=>{let D=(m)=>{if(m.ctrlKey&&m.key==="Tab"){if(m.preventDefault(),!_.length)return;let o=_.findIndex((__)=>__.id===$);if(m.shiftKey){let __=_[(o-1+_.length)%_.length];j?.(__.id)}else{let __=_[(o+1)%_.length];j?.(__.id)}return}if((m.ctrlKey||m.metaKey)&&m.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(m.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[_,$,j,Z]);let R=I((D,m)=>{if(D.button===1){D.preventDefault(),Z?.(m);return}if(D.button===0)j?.(m)},[j,Z]),P=I((D,m)=>{D.preventDefault(),S({id:m,x:D.clientX,y:D.clientY})},[]),x=I((D)=>{D.preventDefault(),D.stopPropagation()},[]),g=I((D,m)=>{D.preventDefault(),D.stopPropagation(),Z?.(m)},[Z]);if(f(()=>{if(!$||!v.current)return;let D=v.current.querySelector(".tab-item.active");if(D)D.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${v} role="tablist">
            ${_.map((D)=>U`
                <div
                    key=${D.id}
                    class=${`tab-item${D.id===$?" active":""}${D.dirty?" dirty":""}${D.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${D.id===$}
                    title=${D.path}
                    onMouseDown=${(m)=>R(m,D.id)}
                    onContextMenu=${(m)=>P(m,D.id)}
                >
                    ${D.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${D.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${x}
                        onClick=${(m)=>g(m,D.id)}
                        title=${D.dirty?"Unsaved changes":"Close"}
                        aria-label=${D.dirty?"Unsaved changes":`Close ${D.label}`}
                    >
                        ${D.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${V}
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
            ${q&&U`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${q}
                    title=${`${J?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${J?"Exit":"Enter"} zen mode`}
                    aria-pressed=${J?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${J?U`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:U`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${y&&U`
            <div class="tab-context-menu" style=${{left:y.x+"px",top:y.y+"px"}}>
                <button onClick=${()=>{Z?.(y.id),S(null)}}>Close</button>
                <button onClick=${()=>{N?.(y.id),S(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),S(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(y.id),S(null)}}>
                    ${_.find((D)=>D.id===y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{X(y.id),S(null)}}>
                        ${L?.has(y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Uj.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(y.id),m=y.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(D)+"&name="+encodeURIComponent(m);window.open(o,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${Fj.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{let D="/csv-viewer/?path="+encodeURIComponent(y.id);window.open(D,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${Hj.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{let D="/workspace/raw?path="+encodeURIComponent(y.id);window.open(D,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${Jj.test(y.id)&&!A6.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{let D="/image-viewer/?path="+encodeURIComponent(y.id);window.open(D,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${A6.test(y.id)&&U`
                    <hr />
                    <button onClick=${()=>{let D="/drawio/edit?path="+encodeURIComponent(y.id);window.open(D,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Dj=400,r4=60,b6=220,a4="mdPreviewHeight";function Ej(){try{let _=localStorage.getItem(a4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r4?$:b6}catch{return b6}}function I6({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,Y]=T(Ej),X=k(null),L=k(null),V=k(""),Q=k(_);return Q.current=_,f(()=>{let y=()=>{let v=Q.current?.()||"";if(v===V.current)return;V.current=v;try{let R=s0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};y();let S=setInterval(y,Dj);return()=>clearInterval(S)},[]),f(()=>{if(X.current&&Z)T$(X.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(y)=>{y.preventDefault();let S=y.clientY,v=L.current?.offsetHeight||K,R=L.current?.parentElement,P=R?R.offsetHeight*0.7:500,x=y.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=(m)=>{let o=Math.min(Math.max(v-(m.clientY-S),r4),P);Y(o)},D=()=>{x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(a4,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",D)}}
            onTouchStart=${(y)=>{y.preventDefault();let S=y.touches[0];if(!S)return;let v=S.clientY,R=L.current?.offsetHeight||K,P=L.current?.parentElement,x=P?P.offsetHeight*0.7:500,g=y.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let D=(o)=>{let __=o.touches[0];if(!__)return;o.preventDefault();let n=Math.min(Math.max(R-(__.clientY-v),r4),x);Y(n)},m=()=>{g.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(a4,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",D),document.removeEventListener("touchend",m),document.removeEventListener("touchcancel",m)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",m),document.addEventListener("touchcancel",m)}}
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
    `}function x6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=k(_);K.current=_;let Y=k($);Y.current=$;let X=k(j);X.current=j;let L=k(Z);L.current=Z,f(()=>{X.current();let V=new V1((q,J)=>K.current(q,J),(q)=>Y.current(q),{chatJid:N});V.connect();let Q=()=>{V.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",Q),document.addEventListener("visibilitychange",Q),()=>{window.removeEventListener("focus",Q),document.removeEventListener("visibilitychange",Q),V.disconnect()}},[N])}function M6(){let[_,$]=T(!1),[j,Z]=T("default"),N=k(!1);f(()=>{let L=H2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),Z0("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),Z0("notificationsEnabled",String(L))},[K]),X=I((L,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(L,{body:V});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:X}}var d2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function C6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,Y]=T(!1),X=k(!1),L=k(null),V=k(!1),Q=k(null),q=k(null),J=k(0);f(()=>{X.current=K},[K]),f(()=>{q.current=Z},[Z]),f(()=>{J.current+=1,q.current=null,Q.current=null,V.current=!1,X.current=!1,N(null),Y(!1)},[j]);let y=I(async(R=null)=>{let P=J.current;try{if(R){let x=await h1(R,50,0,j);if(P!==J.current)return;N(x.posts),Y(!1)}else{let x=await S2(10,null,j);if(P!==J.current)return;N(x.posts),Y(x.has_more)}}catch(x){if(P!==J.current)return;console.error("Failed to load posts:",x)}},[j]),S=I(async()=>{let R=J.current;try{let P=await S2(10,null,j);if(R!==J.current)return;N((x)=>{if(!x||x.length===0)return P.posts;return d2([...P.posts,...x])}),Y((x)=>x||P.has_more)}catch(P){if(R!==J.current)return;console.error("Failed to refresh timeline:",P)}},[j]),v=I(async(R={})=>{let P=J.current,x=q.current;if(!x||x.length===0)return;if(V.current)return;let{preserveScroll:g=!0,preserveMode:D="top",allowRepeat:m=!1}=R,o=(Z_)=>{if(!g){Z_();return}if(D==="top")$(Z_);else _(Z_)},n=x.slice().sort((Z_,i)=>Z_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!m&&Q.current===n)return;V.current=!0,Q.current=n;try{let Z_=await S2(10,n,j);if(P!==J.current)return;if(Z_.posts.length>0)o(()=>{N((i)=>d2([...Z_.posts,...i||[]])),Y(Z_.has_more)});else Y(!1)}catch(Z_){if(P!==J.current)return;console.error("Failed to load more posts:",Z_)}finally{if(P===J.current)V.current=!1}},[j,_,$]);return f(()=>{L.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:Y,hasMoreRef:X,loadPosts:y,refreshTimeline:S,loadMore:v,loadMoreRef:L,loadingMoreRef:V,lastBeforeIdRef:Q}}function T6(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[Y,X]=T({text:"",totalLines:0}),[L,V]=T(null),[Q,q]=T(null),[J,y]=T(null),S=k(null),v=k(0),R=k(!1),P=k(""),x=k(""),g=k(null),D=k(null),m=k(null),o=k(null),__=k(!1),n=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:Y,setAgentThought:X,pendingRequest:L,setPendingRequest:V,currentTurnId:Q,setCurrentTurnId:q,steerQueuedTurnId:J,setSteerQueuedTurnId:y,lastAgentEventRef:S,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:P,thoughtBufferRef:x,pendingRequestRef:g,stalledPostIdRef:D,currentTurnIdRef:m,steerQueuedTurnIdRef:o,thoughtExpandedRef:__,draftExpandedRef:n}}function S6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.clientX,y=$.current||280,S=Q.currentTarget;S.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=J,R=(x)=>{v=x.clientX;let g=Math.min(Math.max(y+(x.clientX-J),160),600);q.style.setProperty("--sidebar-width",`${g}px`),$.current=g},P=()=>{let x=Math.min(Math.max(y+(v-J),160),600);$.current=x,S.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Z0("sidebarWidth",String(Math.round(x))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,K=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.touches[0];if(!J)return;let y=J.clientX,S=$.current||280,v=Q.currentTarget;v.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(x)=>{let g=x.touches[0];if(!g)return;x.preventDefault();let D=Math.min(Math.max(S+(g.clientX-y),160),600);q.style.setProperty("--sidebar-width",`${D}px`),$.current=D},P=()=>{v.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Z0("sidebarWidth",String(Math.round($.current||S))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,Y=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.clientX,y=j.current||$.current||280,S=Q.currentTarget;S.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=J,R=(x)=>{v=x.clientX;let g=Math.min(Math.max(y+(x.clientX-J),200),800);q.style.setProperty("--editor-width",`${g}px`),j.current=g},P=()=>{let x=Math.min(Math.max(y+(v-J),200),800);j.current=x,S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z0("editorWidth",String(Math.round(x))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,X=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.touches[0];if(!J)return;let y=J.clientX,S=j.current||$.current||280,v=Q.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(x)=>{let g=x.touches[0];if(!g)return;x.preventDefault();let D=Math.min(Math.max(S+(g.clientX-y),200),800);q.style.setProperty("--editor-width",`${D}px`),j.current=D},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",Z0("editorWidth",String(Math.round(j.current||S))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,L=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.clientY,y=Z?.current||200,S=Q.currentTarget;S.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=J,R=(x)=>{v=x.clientY;let g=Math.min(Math.max(y-(x.clientY-J),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${g}px`),Z)Z.current=g;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{let x=Math.min(Math.max(y-(v-J),100),window.innerHeight*0.5);if(Z)Z.current=x;S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z0("dockHeight",String(Math.round(x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,V=k((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let J=Q.touches[0];if(!J)return;let y=J.clientY,S=Z?.current||200,v=Q.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(x)=>{let g=x.touches[0];if(!g)return;x.preventDefault();let D=Math.min(Math.max(S-(g.clientY-y),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${D}px`),Z)Z.current=D;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",Z0("dockHeight",String(Math.round(Z?.current||S))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:V}}function f6({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=T(()=>n_.getTabs()),[N,K]=T(()=>n_.getActiveId()),[Y,X]=T(()=>n_.getTabs().length>0);f(()=>{return n_.onChange((D,m)=>{Z(D),K(m),X(D.length>0)})},[]);let[L,V]=T(()=>new Set),Q=I((D)=>{V((m)=>{let o=new Set(m);if(o.has(D))o.delete(D);else o.add(D);return o})},[]),q=I((D)=>{V((m)=>{if(!m.has(D))return m;let o=new Set(m);return o.delete(D),o})},[]),J=I((D,m={})=>{if(!D)return;let o={path:D,mode:"edit"};try{if(!r_.resolve(o)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${D}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${D}":`,n)}let __=typeof m?.label==="string"&&m.label.trim()?m.label.trim():void 0;n_.open(D,__)},[]),y=I(()=>{let D=n_.getActiveId();if(D){let m=n_.get(D);if(m?.dirty){if(!window.confirm(`"${m.label}" has unsaved changes. Close anyway?`))return}n_.close(D),q(D),$.current?.(D)}},[q]),S=I((D)=>{let m=n_.get(D);if(m?.dirty){if(!window.confirm(`"${m.label}" has unsaved changes. Close anyway?`))return}n_.close(D),q(D),$.current?.(D)},[q]),v=I((D)=>{n_.activate(D)},[]),R=I((D)=>{let m=n_.getTabs().filter((n)=>n.id!==D&&!n.pinned),o=m.filter((n)=>n.dirty).length;if(o>0){if(!window.confirm(`${o} unsaved tab${o>1?"s":""} will be closed. Continue?`))return}let __=m.map((n)=>n.id);n_.closeOthers(D),__.forEach((n)=>{q(n),$.current?.(n)})},[q]),P=I(()=>{let D=n_.getTabs().filter((__)=>!__.pinned),m=D.filter((__)=>__.dirty).length;if(m>0){if(!window.confirm(`${m} unsaved tab${m>1?"s":""} will be closed. Continue?`))return}let o=D.map((__)=>__.id);n_.closeAll(),o.forEach((__)=>{q(__),$.current?.(__)})},[q]),x=I((D)=>{n_.togglePin(D)},[]),g=I(()=>{let D=n_.getActiveId();if(D)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:D}}))},[]);return f(()=>{let D=(m)=>{let{oldPath:o,newPath:__,type:n}=m.detail||{};if(!o||!__)return;if(n==="dir"){for(let Z_ of n_.getTabs())if(Z_.path===o||Z_.path.startsWith(`${o}/`)){let i=`${__}${Z_.path.slice(o.length)}`;n_.rename(Z_.id,i)}}else n_.rename(o,__)};return window.addEventListener("workspace-file-renamed",D),()=>window.removeEventListener("workspace-file-renamed",D)},[]),f(()=>{let D=(m)=>{if(n_.hasUnsaved())m.preventDefault(),m.returnValue=""};return window.addEventListener("beforeunload",D),()=>window.removeEventListener("beforeunload",D)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:J,closeEditor:y,handleTabClose:S,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:P,handleTabTogglePin:x,handleTabTogglePreview:Q,revealInExplorer:g}}function t4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var e4=t4("warning",30000),R6=t4("finalize",120000),_3=t4("refresh",30000),v6=30000;function u6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function m6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function g6(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function $3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function p6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function j3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||Y)}function c6(_,$={}){if(X2($))return null;if(j3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:yj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function h6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function i6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function l6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function n6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function d6(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function yj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function k1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Z3(_){return String(_||"").trim()||"web:default"}function o6({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function s6(_={}){return X2(_)&&j3(_)}function kj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function wj(_={},$={}){if(!s6(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=kj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function r6(_={}){if(!s6(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},Y=()=>{Z=0,wj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{X();for(let q of[80,220,420]){let J=$.setTimeout?.(()=>{N.delete(J),X()},q);if(J!=null)N.add(J)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}function Aj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function z$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Aj($,j)}var Pj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function a6(_){return Pj.has(String(_||"").trim())}function bj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function t6(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(bj(_),{detail:Z})),!0}var Ij=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function e6(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(X2({window:j,navigator:Z}))};N();let Y=Ij.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of Y)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function _9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var Y3="piclaw_btw_session";function xj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Mj(){let _=K$(Y3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:Y}}catch{return null}}var $9=i1,j9=n1,Cj=o1,Z9=e1,N9=_4,K9=s1,N3=z$(o0,"getAgentContext",null),Tj=z$(o0,"getAgentModels",{current:null,models:[]}),Sj=z$(o0,"getActiveChatAgents",{chats:[]}),K3=z$(o0,"getChatBranches",{chats:[]}),fj=z$(o0,"renameChatBranch",null),Rj=z$(o0,"pruneChatBranch",null),Y9=z$(o0,"restoreChatBranch",null),vj=z$(o0,"getAgentQueueState",{count:0}),uj=z$(o0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),mj=z$(o0,"removeAgentQueueItem",{removed:!1}),gj=z$(o0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(w4);r_.register(S4);r_.register(T4);r_.register(f4);r_.register(R4);r_.register(v4);r_.register(m4);r_.register(g4);r_.register(c4);A4();r_.register(x4);r_.register(M4);function pj({locationParams:_}){let $=l_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=l_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=l_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=l_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,Y]=T("disconnected"),[X,L]=T(()=>X2()),[V,Q]=T(null),[q,J]=T(null),[y,S]=T(!1),[v,R]=T("current"),[P,x]=T([]),[g,D]=T([]),[m,o]=T(null),{agentStatus:__,setAgentStatus:n,agentDraft:Z_,setAgentDraft:i,agentPlan:X_,setAgentPlan:d_,agentThought:t,setAgentThought:a,pendingRequest:K_,setPendingRequest:$_,currentTurnId:W_,setCurrentTurnId:U_,steerQueuedTurnId:G_,setSteerQueuedTurnId:D_,lastAgentEventRef:B_,lastSilenceNoticeRef:x_,isAgentRunningRef:R_,draftBufferRef:F_,thoughtBufferRef:M_,pendingRequestRef:g_,stalledPostIdRef:W0,currentTurnIdRef:V_,steerQueuedTurnIdRef:r,thoughtExpandedRef:O_,draftExpandedRef:Y_}=T6(),[C_,v_]=T({}),[p_,Y0]=T(null),[c_,E_]=T(null),[H_,$0]=T(!1),[N0,T_]=T(null),[b_,a_]=T([]),[j0,p0]=T([]),[y0,u_]=T(null),[h_,A_]=T([]),[L0,G0]=T(!1),[I_,i_]=T(()=>Mj()),t_=l_(()=>b_.find((G)=>G?.chat_jid===$)||null,[b_,$]),m_=l_(()=>j0.find((G)=>G?.chat_jid===$)||t_||null,[t_,j0,$]),O0=m_?.root_chat_jid||t_?.root_chat_jid||$,C=xj(v),[e,y_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),J_=h_.length,e_=k(new Set),S0=k([]),Q_=k(new Set),I0=k(0),c0=k({inFlight:!1,lastAttemptAt:0,turnId:null});e_.current=new Set(h_.map((G)=>G.row_id)),S0.current=h_;let{notificationsEnabled:f$,notificationPermission:u0,toggleNotifications:R$,notify:U0}=M6(),[J$,k0]=T(()=>new Set),[x0,B$]=T(()=>H2("workspaceOpen",!0)),r0=k(null),{editorOpen:B0,tabStripTabs:t$,tabStripActiveId:F0,previewTabs:D$,openEditor:K0,closeEditor:W$,handleTabClose:Q$,handleTabActivate:w0,handleTabCloseOthers:f0,handleTabCloseAll:a0,handleTabTogglePin:O$,handleTabTogglePreview:E$,revealInExplorer:v$}=f6({onTabClosed:(G)=>r0.current?.(G)}),u$=k(null),H0=k(null),U$=k(null),t0=k(null),M0=r_.getDockPanes().length>0,[o_,m$]=T(!1),C0=I(()=>m$((G)=>!G),[]),y$=I(()=>{K0(b4,{label:"Terminal"})},[K0]),G$=!j&&(B0||M0&&o_),[A0,k$]=T(!1),w$=k(!1),s_=I(()=>{if(!B0||j)return;if(w$.current=o_,o_)m$(!1);k$(!0)},[B0,j,o_]),P0=I(()=>{if(!A0)return;if(k$(!1),w$.current)m$(!0),w$.current=!1},[A0]),F$=I(()=>{if(A0)P0();else s_()},[A0,s_,P0]);f(()=>{if(A0&&!B0)P0()},[A0,B0,P0]),f(()=>{let G=u$.current;if(!G)return;if(H0.current)H0.current.dispose(),H0.current=null;let W=F0;if(!W)return;let H={path:W,mode:"edit"},w=r_.resolve(H)||r_.get("editor");if(!w){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=w.mount(G,H);H0.current=b,b.onDirtyChange?.((s)=>{n_.setDirty(W,s)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{W$()});let u=n_.getViewState(W);if(u&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(u));if(typeof b.onViewStateChange==="function")b.onViewStateChange((s)=>{n_.saveViewState(W,s)});return requestAnimationFrame(()=>b.focus()),()=>{if(H0.current===b)b.dispose(),H0.current=null}},[F0,W$]),f(()=>{let G=(W)=>{let H=W.detail?.path;if(H)K0(H)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G)}},[K0]),f(()=>{let G=U$.current;if(t0.current)t0.current.dispose(),t0.current=null;if(!G||!M0||!o_)return;let W=r_.getDockPanes()[0];if(!W){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=W.mount(G,{mode:"view"});return t0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(t0.current===H)H.dispose(),t0.current=null}},[M0,o_]);let[A$,q2]=T({name:"You",avatar_url:null,avatar_background:null}),e$=k(!1),m0=k(!1),J0=k(null),w_=k($),R0=k(new Map),X$=k($),_2=k(0),$2=k(0),P$=k({}),b$=k({name:null,avatar_url:null}),Q0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),V$=k(null),v0=k(null),I$=k(0),g$=k(0),p$=k(0),c$=k(null),e0=k(null),h0=k(null),h$=k(null),i0=k(0),H$=k({title:null,avatarBase:null}),q$=k(null),x$=I(()=>{if(q$.current)clearTimeout(q$.current),q$.current=null;o(null)},[]);g6(30000),f(()=>{return K8()},[]),f(()=>{return e6(L)},[]),f(()=>{Z0("workspaceOpen",String(x0))},[x0]),f(()=>{return r6()},[]),f(()=>{return()=>{x$()}},[x$]),f(()=>{if(!I_){Z0(Y3,"");return}Z0(Y3,JSON.stringify({question:I_.question||"",answer:I_.answer||"",thinking:I_.thinking||"",error:I_.error||null,status:I_.status||"success"}))},[I_]),f(()=>{P$.current=C_||{}},[C_]),f(()=>{w_.current=$},[$]),f(()=>{b$.current=A$||{name:"You",avatar_url:null,avatar_background:null}},[A$]);let i$=I((G,W,H=null)=>{if(typeof document>"u")return;let w=(G||"").trim()||"PiClaw";if(H$.current.title!==w){document.title=w;let j_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(j_&&j_.getAttribute("content")!==w)j_.setAttribute("content",w);H$.current.title=w}let b=document.getElementById("dynamic-favicon");if(!b)return;let u=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",s=W||u,z_=W?`${s}|${H||""}`:s;if(H$.current.avatarBase!==z_){let j_=W?`${s}${s.includes("?")?"&":"?"}v=${H||Date.now()}`:s;b.setAttribute("href",j_),H$.current.avatarBase=z_}},[]),j2=I((G)=>{if(!G)return;x((W)=>W.includes(G)?W:[...W,G])},[]),M$=I((G)=>{x((W)=>W.filter((H)=>H!==G))},[]);r0.current=M$;let y2=I(()=>{x([])},[]),l$=I((G)=>{if(!Array.isArray(G)){x([]);return}let W=[],H=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let b=w.trim();if(H.has(b))continue;H.add(b),W.push(b)}x(W)},[]),L_=I((G,W=null,H="info",w=3000)=>{x$(),o({title:G,detail:W||null,kind:H||"info"}),q$.current=setTimeout(()=>{o((b)=>b?.title===G?null:b)},w)},[x$]),n$=I((G)=>{let W=p6(G,{editorOpen:B0,resolvePane:(H)=>r_.resolve(H)});if(W.kind==="open"){K0(W.path);return}if(W.kind==="toast")L_(W.title,W.detail,W.level)},[B0,K0,L_]),Z2=I(()=>{let G=F0;if(G)j2(G)},[F0,j2]),k2=I((G)=>{if(!G)return;D((W)=>W.includes(G)?W:[...W,G])},[]),N2=I(async(G,W=null)=>{let H=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},w=document.getElementById("post-"+G);if(w){H(w);return}try{let b=typeof W==="string"&&W.trim()?W.trim():$,s=(await l1(G,b))?.thread?.[0];if(!s)return;k_((z_)=>{if(!z_)return[s];if(z_.some((j_)=>j_.id===s.id))return z_;return[...z_,s]}),requestAnimationFrame(()=>{setTimeout(()=>{let z_=document.getElementById("post-"+G);if(z_)H(z_)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",G,b)}},[$]),w2=I((G)=>{D((W)=>W.filter((H)=>H!==G))},[]),A2=I(()=>{D([])},[]),P2=I((G)=>{if(!Array.isArray(G)){D([]);return}let W=[],H=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let b=w.trim();if(H.has(b))continue;H.add(b),W.push(b)}D(W)},[]),b2=I((G)=>{let W=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";L_("Compose failed",W,"error",5000)},[L_]),l0=I((G={})=>{let W=Date.now();if(B_.current=W,G.running)R_.current=!0,G0((H)=>H?H:!0);if(G.clearSilence)x_.current=0},[G0]),g0=I(()=>{if(h$.current)clearTimeout(h$.current),h$.current=null;i0.current=0},[]);f(()=>()=>{g0()},[g0]);let d$=I(()=>{g0(),n((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:W,lastActivity:H,...w}=G;return w})},[g0]),L2=I((G)=>{if(!G)return;g0();let W=Date.now();i0.current=W,n({type:G.type||"active",last_activity:!0}),h$.current=setTimeout(()=>{if(i0.current!==W)return;n((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},v6)},[g0]),B=I(()=>{R_.current=!1,G0(!1),B_.current=null,x_.current=0,F_.current="",M_.current="",g_.current=null,e0.current=null,V_.current=null,r.current=null,J0.current=null,c0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g0(),U_(null),D_(null),O_.current=!1,Y_.current=!1},[g0,U_,D_,G0]),A=I((G)=>{if(!o6({remainingQueueCount:G,currentTurnId:V_.current,isAgentTurnActive:L0}))return;r.current=null,D_(null)},[L0,D_]),z=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),O=I(()=>({agentStatus:__,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:t?{...t}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:W_,steerQueuedTurnId:G_,isAgentTurnActive:Boolean(L0),followupQueueItems:Array.isArray(h_)?h_.map((G)=>({...G})):[],activeModel:p_,activeThinkingLevel:c_,supportsThinking:Boolean(H_),activeModelUsage:N0,contextUsage:y0,isAgentRunning:Boolean(R_.current),wasAgentActive:Boolean(m0.current),draftBuffer:F_.current||"",thoughtBuffer:M_.current||"",lastAgentEvent:B_.current||null,lastSilenceNotice:x_.current||0,lastAgentResponse:e0.current||null,currentTurnIdRef:V_.current||null,steerQueuedTurnIdRef:r.current||null,thoughtExpanded:Boolean(O_.current),draftExpanded:Boolean(Y_.current),agentStatusRef:J0.current||null,silentRecovery:{...c0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[p_,N0,c_,Z_,X_,__,t,y0,W_,h_,L0,K_,G_,H_]),F=I((G)=>{let W=G||z();g0(),R_.current=Boolean(W.isAgentRunning),m0.current=Boolean(W.wasAgentActive),G0(Boolean(W.isAgentTurnActive)),B_.current=W.lastAgentEvent||null,x_.current=Number(W.lastSilenceNotice||0),F_.current=W.draftBuffer||"",M_.current=W.thoughtBuffer||"",g_.current=W.pendingRequest||null,e0.current=W.lastAgentResponse||null,V_.current=W.currentTurnIdRef||null,r.current=W.steerQueuedTurnIdRef||null,J0.current=W.agentStatusRef||null,c0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},O_.current=Boolean(W.thoughtExpanded),Y_.current=Boolean(W.draftExpanded),n(W.agentStatus||null),i(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),d_(W.agentPlan||""),a(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),U_(W.currentTurnId||null),D_(W.steerQueuedTurnId||null),A_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((H)=>({...H})):[]),Y0(W.activeModel||null),E_(W.activeThinkingLevel||null),$0(Boolean(W.supportsThinking)),T_(W.activeModelUsage??null),u_(W.contextUsage??null)},[g0,z,U_,A_,G0,D_]),E=I((G)=>{if(!G)return;if(V_.current===G)return;V_.current=G,c0.current={inFlight:!1,lastAttemptAt:0,turnId:G},U_(G),r.current=null,D_(null),F_.current="",M_.current="",i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),g_.current=null,e0.current=null,O_.current=!1,Y_.current=!1},[U_,D_]),M=I((G)=>{if(typeof document<"u"){let j_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&j_)return}let W=e0.current;if(!W||!W.post)return;if(G&&W.turnId&&W.turnId!==G)return;let H=W.post;if(H.id&&c$.current===H.id)return;let w=String(H?.data?.content||"").trim();if(!w)return;c$.current=H.id||c$.current,e0.current=null;let b=w.replace(/\s+/g," ").slice(0,200),u=P$.current||{},z_=(H?.data?.agent_id?u[H.data.agent_id]:null)?.name||"Pi";U0(z_,b)},[U0]),l=I(async(G,W)=>{if(G!=="thought"&&G!=="draft")return;let H=V_.current;if(G==="thought"){if(O_.current=W,H)try{await N9(H,"thought",W)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!W)return;try{let w=H?await Z9(H,"thought"):null;if(w?.text)M_.current=w.text;a((b)=>({...b||{text:"",totalLines:0},fullText:M_.current||b?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:b?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(Y_.current=W,H)try{await N9(H,"draft",W)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!W)return;try{let w=H?await Z9(H,"draft"):null;if(w?.text)F_.current=w.text;i((b)=>({...b||{text:"",totalLines:0},fullText:F_.current||b?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:b?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),d=k(null),p=I(()=>{let G=V$.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);d.current=p;let c=I((G)=>{let W=V$.current;if(!W||typeof G!=="function"){G?.();return}let{currentHashtag:H,searchQuery:w,searchOpen:b}=Q0.current||{},u=!((w||b)&&!H),s=u?W.scrollHeight-W.scrollTop:W.scrollTop;G(),requestAnimationFrame(()=>{let z_=V$.current;if(!z_)return;if(u){let j_=Math.max(z_.scrollHeight-s,0);z_.scrollTop=j_}else{let j_=Math.max(z_.scrollHeight-z_.clientHeight,0),h=Math.min(s,j_);z_.scrollTop=h}})},[]),N_=I((G)=>{let W=V$.current;if(!W||typeof G!=="function"){G?.();return}let H=W.scrollTop;G(),requestAnimationFrame(()=>{let w=V$.current;if(!w)return;let b=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(H,b)})},[]),X0="Queued as a follow-up (one-at-a-time).",T0="⁣",n0=I((G)=>{if(!G||!Array.isArray(G))return G;let W=e_.current,H=new Set(W),w=G.filter((b)=>{if(H.has(b?.id))return!1;if(b?.data?.is_bot_message){let u=b?.data?.content;if(u===X0||u===T0)return!1}return!0});return w.length===G.length?G:w},[]),{posts:o$,setPosts:k_,hasMore:I2,setHasMore:B2,hasMoreRef:o2,loadPosts:d0,refreshTimeline:z0,loadMore:_$,loadMoreRef:s$}=C6({preserveTimelineScroll:c,preserveTimelineScrollTop:N_,chatJid:$}),K2=l_(()=>n0(o$),[o$,h_,n0]),Q2=I(()=>{let G=W0.current;if(!G)return;k_((W)=>W?W.filter((H)=>H.id!==G):W),W0.current=null},[k_]),{handleSplitterMouseDown:z9,handleSplitterTouchStart:W9,handleEditorSplitterMouseDown:G9,handleEditorSplitterTouchStart:X9,handleDockSplitterMouseDown:V9,handleDockSplitterTouchStart:q9}=S6({appShellRef:v0,sidebarWidthRef:I$,editorWidthRef:g$,dockHeightRef:p$}),z3=I(()=>{if(!R_.current)return;R_.current=!1,x_.current=0,B_.current=null,V_.current=null,U_(null),O_.current=!1,Y_.current=!1;let G=(F_.current||"").trim();if(F_.current="",M_.current="",i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),g_.current=null,e0.current=null,!G){n({type:"error",title:"Response stalled - No content received"});return}let H=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),b=new Date().toISOString(),u={id:w,timestamp:b,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};W0.current=w,k_((s)=>s?d2([...s,u]):[u]),d.current?.(),n(null)},[U_]);f(()=>{Q0.current={currentHashtag:V,searchQuery:q,searchOpen:y}},[V,q,y]);let S_=I(()=>{let G=++I0.current,W=$;vj(W).then((H)=>{if(G!==I0.current)return;if(w_.current!==W)return;let w=Q_.current,b=Array.isArray(H?.items)?H.items.map((u)=>({...u})).filter((u)=>!w.has(u.row_id)):[];if(b.length){A_((u)=>{if(u.length===b.length&&u.every((s,z_)=>s.row_id===b[z_].row_id))return u;return b});return}w.clear(),A(0),A_((u)=>u.length===0?u:[])}).catch(()=>{if(G!==I0.current)return;if(w_.current!==W)return;A_((H)=>H.length===0?H:[])})},[A,$,A_]),$$=I(async()=>{let G=$;try{let W=await N3(G);if(w_.current!==G)return;if(W)u_(W)}catch(W){if(w_.current!==G)return;console.warn("Failed to fetch agent context:",W)}},[$]),j$=I(async()=>{let G=$;try{let W=await K9(G);if(w_.current!==G)return null;if(!W||W.status!=="active"||!W.data){if(m0.current){let{currentHashtag:b,searchQuery:u,searchOpen:s}=Q0.current||{};if(!b&&!u&&!s)z0()}return m0.current=!1,B(),J0.current=null,n(null),i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),g_.current=null,W??null}m0.current=!0;let H=W.data;J0.current=H;let w=H.turn_id||H.turnId;if(w)E(w);if(l0({running:!0,clearSilence:!0}),d$(),n(H),W.thought&&W.thought.text)a((b)=>{if(b&&b.text&&b.text.length>=W.thought.text.length)return b;return M_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)i((b)=>{if(b&&b.text&&b.text.length>=W.draft.text.length)return b;return F_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[B,d$,l0,z0,E]),w1=I(async()=>{if(!R_.current)return null;if(g_.current)return null;let G=V_.current||null,W=c0.current,H=Date.now();if(W.inFlight)return null;if(W.turnId===G&&H-W.lastAttemptAt<_3)return null;W.inFlight=!0,W.lastAttemptAt=H,W.turnId=G;try{let{currentHashtag:w,searchQuery:b,searchOpen:u}=Q0.current||{};if(!w&&!b&&!u)await z0();return await S_(),await j$()}finally{W.inFlight=!1}},[j$,S_,z0]);f(()=>{let G=Math.min(1000,Math.max(100,Math.floor(e4/2))),W=setInterval(()=>{if(!R_.current)return;if(g_.current)return;let H=B_.current;if(!H)return;let w=Date.now(),b=w-H,u=p2(J0.current);if(b>=R6){if(!u)n({type:"waiting",title:"Re-syncing after a quiet period…"});w1();return}if(b>=e4){if(w-x_.current>=_3){if(!u){let s=Math.floor(b/1000);n({type:"waiting",title:`Waiting for model… No events for ${s}s`})}x_.current=w,w1()}}},G);return()=>clearInterval(W)},[w1]);let L9=I((G)=>{if(Y(G),G!=="connected"){n(null),i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),g_.current=null,B();return}if(!e$.current){e$.current=!0;let{currentHashtag:b,searchQuery:u,searchOpen:s}=Q0.current||{};if(!b&&!u&&!s)z0();j$(),S_(),$$();return}let{currentHashtag:W,searchQuery:H,searchOpen:w}=Q0.current;if(!W&&!H&&!w)z0();j$(),S_(),$$()},[B,z0,j$,S_,$$]),B9=I(async(G)=>{Q(G),k_(null),await d0(G)},[d0]),Q9=I(async()=>{Q(null),J(null),k_(null),await d0()},[d0]),O9=I(async(G,W=v)=>{if(!G||!G.trim())return;let H=W==="root"||W==="all"?W:"current";R(H),J(G.trim()),Q(null),k_(null);try{let w=await $9(G.trim(),50,0,$,H,O0);k_(w.results),B2(!1)}catch(w){console.error("Failed to search:",w),k_([])}},[$,O0,v]),U9=I(()=>{S(!0),J(null),Q(null),R("current"),k_([])},[]),F9=I(()=>{S(!1),J(null),d0()},[d0]),hj=I(()=>{},[]),A1=!V&&!q&&!y,H9=I(async(G)=>{if(!G)return;let W=G.id,H=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,w=K2?.filter((u)=>u?.data?.thread_id===W&&u?.id!==W).length||0;if(w>0){if(!window.confirm(`Delete this message and its ${w} replies?`))return}let b=(u)=>{if(!u.length)return;k0((z_)=>{let j_=new Set(z_);return u.forEach((h)=>j_.add(h)),j_}),setTimeout(()=>{if(N_(()=>{k_((z_)=>z_?z_.filter((j_)=>!u.includes(j_.id)):z_)}),k0((z_)=>{let j_=new Set(z_);return u.forEach((h)=>j_.delete(h)),j_}),o2.current)s$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await j9(W,w>0,H);if(u?.ids?.length)b(u.ids)}catch(u){let s=u?.message||"";if(w===0&&s.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let j_=await j9(W,!0,H);if(j_?.ids?.length)b(j_.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${s}`)}},[$,K2,N_]),W3=I(async()=>{try{let G=await Cj();v_(u6(G));let W=G?.user||{};q2((w)=>{let b=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",u=typeof W.avatar_url==="string"?W.avatar_url.trim():null,s=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(w.name===b&&w.avatar_url===u&&w.avatar_background===s)return w;return{name:b,avatar_url:u,avatar_background:s}});let H=(G?.agents||[]).find((w)=>w.id==="default");i$(H?.name,H?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,W=await N3(G);if(w_.current!==G)return;if(W)u_(W)}catch{}},[i$,$]);f(()=>{W3();let G=J2("sidebarWidth",null),W=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(I$.current=W,v0.current)v0.current.style.setProperty("--sidebar-width",`${W}px`)},[W3]);let P1=L0||__!==null,G3=I((G)=>{if(!G||typeof G!=="object")return;let W=G.agent_id;if(!W)return;let{agent_name:H,agent_avatar:w}=G;if(!H&&w===void 0)return;let b=P$.current?.[W]||{id:W},u=b.name||null,s=b.avatar_url??b.avatarUrl??b.avatar??null,z_=!1,j_=!1;if(H&&H!==b.name)u=H,j_=!0;if(w!==void 0){let h=typeof w==="string"?w.trim():null,q_=typeof s==="string"?s.trim():null,P_=h||null;if(P_!==(q_||null))s=P_,z_=!0}if(!j_&&!z_)return;if(v_((h)=>{let P_={...h[W]||{id:W}};if(j_)P_.name=u;if(z_)P_.avatar_url=s;return{...h,[W]:P_}}),W==="default")i$(u,s,z_?Date.now():null)},[i$]),X3=I((G)=>{if(!G||typeof G!=="object")return;let W=G.user_name??G.userName,H=G.user_avatar??G.userAvatar,w=G.user_avatar_background??G.userAvatarBackground;if(W===void 0&&H===void 0&&w===void 0)return;q2((b)=>{let u=typeof W==="string"&&W.trim()?W.trim():b.name||"You",s=H===void 0?b.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,z_=w===void 0?b.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(b.name===u&&b.avatar_url===s&&b.avatar_background===z_)return b;return{name:u,avatar_url:s,avatar_background:z_}})},[]),b1=I((G)=>{if(!G||typeof G!=="object")return;let W=G.model??G.current;if(W!==void 0)Y0(W);if(G.thinking_level!==void 0)E_(G.thinking_level??null);if(G.supports_thinking!==void 0)$0(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)T_(G.provider_usage??null)},[]),x2=I(()=>{let G=$;Tj(G).then((W)=>{if(w_.current!==G)return;if(W)b1(W)}).catch(()=>{})},[b1,$]),b0=I(()=>{let G=$,W=(H)=>Array.isArray(H)?H.filter((w)=>w&&typeof w.chat_jid==="string"&&typeof w.agent_name==="string"&&w.agent_name.trim()):[];Promise.all([Sj().catch(()=>({chats:[]})),K3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([H,w])=>{if(w_.current!==G)return;let b=W(H?.chats),u=W(w?.chats);if(u.length===0){a_(b);return}let s=new Map(b.map((j_)=>[j_.chat_jid,j_])),z_=u.map((j_)=>{let h=s.get(j_.chat_jid);return h?{...j_,...h,is_active:h.is_active??j_.is_active}:j_});z_.sort((j_,h)=>{if(j_.chat_jid===G&&h.chat_jid!==G)return-1;if(h.chat_jid===G&&j_.chat_jid!==G)return 1;let q_=Boolean(j_.archived_at),P_=Boolean(h.archived_at);if(q_!==P_)return q_?1:-1;if(Boolean(j_.is_active)!==Boolean(h.is_active))return j_.is_active?-1:1;return String(j_.chat_jid).localeCompare(String(h.chat_jid))}),a_(z_)}).catch(()=>{if(w_.current!==G)return;a_([])})},[$]),D0=I(()=>{K3(O0).then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];p0(W)}).catch(()=>{})},[O0]),J9=I((G)=>{let W=G?.row_id;if(W==null)return;Q_.current.add(W),A_((H)=>H.filter((w)=>w?.row_id!==W)),uj(W,Z3($)).then(()=>{S_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),L_("Failed to steer message","The queued message could not be sent as steering.","warning"),Q_.current.delete(W),S_()})},[$,S_,A_,L_]),D9=I((G)=>{let W=G?.row_id;if(W==null)return;let H=S0.current.filter((w)=>w?.row_id!==W).length;Q_.current.add(W),A(H),A_((w)=>w.filter((b)=>b?.row_id!==W)),mj(W,Z3($)).then(()=>{S_()}).catch((w)=>{console.warn("[queue] Failed to remove queued item:",w),L_("Failed to remove message","The queued message could not be removed.","warning"),Q_.current.delete(W),S_()})},[A,$,S_,A_,L_]),I1=I((G)=>{if(!G||typeof G!=="object")return;if(b0(),D0(),G?.queued==="followup"||G?.queued==="steer"){S_();return}let W=G?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))S_()},[b0,D0,S_]),x1=I(()=>{if(h0.current)h0.current.abort(),h0.current=null;i_(null)},[]),s2=I(async(G)=>{let W=String(G||"").trim();if(!W)return L_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(h0.current)h0.current.abort();let H=new AbortController;h0.current=H,i_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let w=await gj(W,{signal:H.signal,chatJid:Q8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,u)=>{if(b==="side_prompt_start")i_((s)=>s?{...s,status:"running"}:s)},onThinkingDelta:(b)=>{i_((u)=>u?{...u,thinking:`${u.thinking||""}${b||""}`}:u)},onTextDelta:(b)=>{i_((u)=>u?{...u,answer:`${u.answer||""}${b||""}`}:u)}});if(h0.current!==H)return!0;i_((b)=>b?{...b,answer:w?.result||b.answer||"",thinking:w?.thinking||b.thinking||"",model:w?.model||null,status:"success",error:null}:b)}catch(w){if(H.signal.aborted)return!0;i_((b)=>b?{...b,status:"error",error:w?.payload?.error||w?.message||"BTW request failed."}:b)}finally{if(h0.current===H)h0.current=null}return!0},[$,L_]),E9=I(async({content:G})=>{let W=B8(G);if(!W)return!1;if(W.type==="help")return L_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return x1(),L_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await s2(W.question),!0;return!1},[x1,s2,L_]),y9=I(()=>{if(I_?.question)s2(I_.question)},[I_,s2]),k9=I(async()=>{let G=F8(I_);if(!G)return;try{let W=await U2("default",G,null,[],P1?"queue":null,$);I1(W),L_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){L_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[I_,I1,P1,L_]),M2=I(()=>{x2(),b0(),D0(),S_(),$$()},[x2,b0,D0,S_,$$]);f(()=>{M2();let G=setInterval(()=>{x2(),b0(),D0(),S_()},60000);return()=>clearInterval(G)},[M2,x2,b0,D0,S_]),f(()=>{D0()},[D0]),f(()=>{let G=!1;if(k_(null),V)return d0(V),()=>{G=!0};if(q)return $9(q,50,0,$,v,O0).then((W)=>{if(G)return;k_(W.results),B2(!1)}).catch((W)=>{if(G)return;console.error("Failed to search:",W),k_([]),B2(!1)}),()=>{G=!0};return d0(),()=>{G=!0}},[$,V,q,v,O0,d0,B2,k_]),f(()=>{let G=X$.current||$;R0.current.set(G,O())},[$,O]),f(()=>{let G=X$.current||$;if(G===$)return;R0.current.set(G,O()),X$.current=$,Q_.current.clear(),F(R0.current.get($)||null),S_(),j$(),$$()},[$,j$,$$,S_,F,O]);let w9=I(()=>{let{currentHashtag:G,searchQuery:W,searchOpen:H}=Q0.current||{};if(!G&&!W&&!H)z0();M2()},[M2,z0]),M1=I((G,W)=>{let H=W?.turn_id,w=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,u=w?w===$:G==="connected"||G==="workspace_update";if(u)G3(W),X3(W);if(G==="ui_theme"){Y8(W);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))d$()}if(G==="connected"){n(null),i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),g_.current=null,B();let h=$;K9(h).then((E0)=>{if(w_.current!==h)return;if(!E0||E0.status!=="active"||!E0.data)return;let Y2=E0.data,r2=Y2.turn_id||Y2.turnId;if(r2)E(r2);if(l0({clearSilence:!0}),L2(Y2),E0.thought&&E0.thought.text)M_.current=E0.thought.text,a({text:E0.thought.text,totalLines:E0.thought.totalLines||0});if(E0.draft&&E0.draft.text)F_.current=E0.draft.text,i({text:E0.draft.text,totalLines:E0.draft.totalLines||0})}).catch((E0)=>{console.warn("Failed to fetch agent status:",E0)});let{currentHashtag:q_,searchQuery:P_,searchOpen:Z$}=Q0.current||{};if(!q_&&!P_&&!Z$)z0();M2();return}if(G==="agent_status"){if(!u){if(W?.type==="done"||W?.type==="error")b0(),D0();return}if(W.type==="done"||W.type==="error"){if(H&&V_.current&&H!==V_.current)return;if(W.type==="done"){M(H||V_.current);let{currentHashtag:h,searchQuery:q_,searchOpen:P_}=Q0.current||{};if(!h&&!q_&&!P_)z0();if(W.context_usage)u_(W.context_usage)}if(m0.current=!1,B(),Q_.current.clear(),b0(),S_(),i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null),W.type==="error")n({type:"error",title:W.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(H)E(H);if(l0({running:!0,clearSilence:!0}),W.type==="thinking")F_.current="",M_.current="",i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0});J0.current=W,n((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(G==="agent_steer_queued"){if(!u)return;if(H&&V_.current&&H!==V_.current)return;let h=H||V_.current;if(!h)return;r.current=h,D_(h);return}if(G==="agent_followup_queued"){if(!u)return;let h=W?.row_id,q_=W?.content;if(h!=null&&typeof q_==="string"&&q_.trim())A_((P_)=>{if(P_.some((Z$)=>Z$?.row_id===h))return P_;return[...P_,{row_id:h,content:q_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});S_();return}if(G==="agent_followup_consumed"){if(!u)return;let h=W?.row_id;if(h!=null){let E0=S0.current.filter((Y2)=>Y2.row_id!==h).length;A(E0),A_((Y2)=>Y2.filter((r2)=>r2.row_id!==h))}S_();let{currentHashtag:q_,searchQuery:P_,searchOpen:Z$}=Q0.current||{};if(!q_&&!P_&&!Z$)z0();return}if(G==="agent_followup_removed"){if(!u)return;let h=W?.row_id;if(h!=null){let q_=S0.current.filter((P_)=>P_.row_id!==h).length;Q_.current.add(h),A(q_),A_((P_)=>P_.filter((Z$)=>Z$.row_id!==h))}S_();return}if(G==="agent_draft_delta"){if(!u)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)E(H);if(l0({running:!0,clearSilence:!0}),W?.reset)F_.current="";if(W?.delta)F_.current+=W.delta;let h=Date.now();if(!_2.current||h-_2.current>=100){_2.current=h;let q_=F_.current,P_=$3(q_);if(Y_.current)i((Z$)=>({text:Z$?.text||"",totalLines:P_,fullText:q_}));else i({text:q_,totalLines:P_})}return}if(G==="agent_draft"){if(!u)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)E(H);l0({running:!0,clearSilence:!0});let h=W.text||"",q_=W.mode||(W.kind==="plan"?"replace":"append"),P_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(q_==="replace")d_(h);else d_((Z$)=>(Z$||"")+h);else if(!Y_.current)F_.current=h,i({text:h,totalLines:P_});return}if(G==="agent_thought_delta"){if(!u)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)E(H);if(l0({running:!0,clearSilence:!0}),W?.reset)M_.current="";if(typeof W?.delta==="string")M_.current+=W.delta;let h=Date.now();if(O_.current&&(!$2.current||h-$2.current>=100)){$2.current=h;let q_=M_.current;a((P_)=>({text:P_?.text||"",totalLines:$3(q_),fullText:q_}))}return}if(G==="agent_thought"){if(!u)return;if(H&&V_.current&&H!==V_.current)return;if(H&&!V_.current)E(H);l0({running:!0,clearSilence:!0});let h=W.text||"",q_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!O_.current)M_.current=h,a({text:h,totalLines:q_});return}if(G==="model_changed"){if(!u)return;if(W?.model!==void 0)Y0(W.model);if(W?.thinking_level!==void 0)E_(W.thinking_level??null);if(W?.supports_thinking!==void 0)$0(Boolean(W.supports_thinking));let h=$;N3(h).then((q_)=>{if(w_.current!==h)return;if(q_)u_(q_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(a6(G)){if(!u)return;if(t6(G,W),G==="extension_ui_notify"&&typeof W?.message==="string")L_(W.message,null,W?.type||"info");if(G==="extension_ui_error"&&typeof W?.error==="string")L_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:s,searchQuery:z_,searchOpen:j_}=Q0.current;if(G==="agent_response"){if(!u)return;Q2(),e0.current={post:W,turnId:V_.current}}if(!s&&!z_&&!j_&&u&&(G==="new_post"||G==="new_reply"||G==="agent_response"))k_((h)=>{if(!h)return[W];if(h.some((q_)=>q_.id===W.id))return h;return[...h,W]}),d.current?.();if(G==="interaction_updated"){if(!u)return;if(s||z_||j_)return;k_((h)=>{if(!h)return h;if(!h.some((q_)=>q_.id===W.id))return h;return h.map((q_)=>q_.id===W.id?W:q_)})}if(G==="interaction_deleted"){if(!u)return;if(s||z_||j_)return;let h=W?.ids||[];if(h.length){if(N_(()=>{k_((q_)=>q_?q_.filter((P_)=>!h.includes(P_.id)):q_)}),o2.current)s$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B,d$,$,s$,l0,M,N_,b0,D0,z0,Q2,E,L2,G3,X3,x2,S_,A_]);f(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=M1,G.reset=()=>{Q2(),B(),n(null),i({text:"",totalLines:0}),d_(""),a({text:"",totalLines:0}),$_(null)},G.finalize=()=>z3(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[B,z3,M1,Q2]),x6({handleSseEvent:M1,handleConnectionStatusChange:L9,loadPosts:d0,onWake:w9,chatJid:$}),f(()=>{if(!K2||K2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let W=G.slice(5);N2(W),history.replaceState(null,"",location.pathname+location.search)},[K2,N2]);let C1=__!==null;f(()=>{if(K!=="connected")return;let W=setInterval(()=>{let{currentHashtag:H,searchQuery:w,searchOpen:b}=Q0.current||{},u=!H&&!w&&!b;if(C1){if(u)z0();S_(),j$(),$$()}else{if(u)z0();j$(),$$()}},C1?15000:60000);return()=>clearInterval(W)},[K,C1,j$,$$,S_,z0]),f(()=>{return _9(()=>{j$(),$$(),S_()})},[j$,$$,S_]);let A9=I(()=>{B$((G)=>!G)},[]),V3=I((G)=>{if(typeof window>"u")return;let W=String(G||"").trim();if(!W||W===$)return;let H=V2(window.location.href,W,{chatOnly:j});window.location.assign(H)},[j,$]),q3=I(async()=>{if(typeof window>"u"||!m_?.chat_jid)return;let G=m_.agent_name||"",W=m_.display_name||"",H=window.prompt("Branch display name",W);if(H===null)return;let w=window.prompt("Agent handle (without @)",G);if(w===null)return;try{let b=await fj(m_.chat_jid,{displayName:H,agentName:w});await Promise.allSettled([b0(),D0()]);let u=b?.branch?.agent_name||String(w||"").trim()||G;L_("Branch renamed",`This chat is now @${u}.`,"info",3500)}catch(b){let u=b instanceof Error?b.message:String(b||"Could not rename branch."),s=/already in use/i.test(u||"")?`${u} Switch to or restore that existing session from the session manager.`:u;L_("Could not rename branch",s||"Could not rename branch.","warning",5000)}},[m_,b0,D0,L_]),L3=I(async(G=null)=>{if(typeof window>"u")return;let W=typeof G==="string"&&G.trim()?G.trim():"",H=typeof $==="string"&&$.trim()?$.trim():"",w=W||m_?.chat_jid||H;if(!w){L_("Could not prune branch","No active session is selected yet.","warning",4000);return}let b=(m_?.chat_jid===w?m_:null)||j0.find((j_)=>j_?.chat_jid===w)||b_.find((j_)=>j_?.chat_jid===w)||null;if(b?.chat_jid===(b?.root_chat_jid||b?.chat_jid)){L_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let s=`@${b?.agent_name||w}${b?.chat_jid?` — ${b.chat_jid}`:""}`;if(!window.confirm(`Prune ${s}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Rj(w),await Promise.allSettled([b0(),D0()]);let j_=b?.root_chat_jid||"web:default";L_("Branch pruned",`${s} has been archived.`,"info",3000);let h=V2(window.location.href,j_,{chatOnly:j});window.location.assign(h)}catch(j_){let h=j_ instanceof Error?j_.message:String(j_||"Could not prune branch.");L_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[b_,j,m_,j0,$,b0,D0,L_]),P9=I(async(G)=>{let W=typeof G==="string"?G.trim():"";if(!W||typeof Y9!=="function")return;try{let H=await Y9(W);await Promise.allSettled([b0(),D0()]);let w=H?.branch,b=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():W,u=typeof w?.agent_name==="string"&&w.agent_name.trim()?`@${w.agent_name.trim()}`:b;L_("Branch restored",`Restored ${u}.`,"info",3200);let s=V2(window.location.href,b,{chatOnly:j});window.location.assign(s)}catch(H){let w=H instanceof Error?H.message:String(H||"Could not restore branch.");L_("Could not restore branch",w||"Could not restore branch.","warning",5000)}},[j,b0,D0,L_]);f(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{y_({status:"running",message:"Preparing a new chat branch…"});let W=await f2(N);if(G)return;let H=W?.branch,w=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");let b=V2(window.location.href,w,{chatOnly:!0});window.location.replace(b)}catch(W){if(G)return;y_({status:"error",message:k1(W)})}})(),()=>{G=!0}},[Z,N]);let b9=I(async()=>{if(typeof window>"u")return;try{let W=(await f2($))?.branch,H=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([b0(),D0()]);let w=W?.agent_name?`@${W.agent_name}`:H;L_("New branch created",`Switched to ${w}.`,"info",2500);let b=V2(window.location.href,H,{chatOnly:j});window.location.assign(b)}catch(G){L_("Could not create branch",k1(G),"warning",5000)}},[j,$,b0,D0,L_]),I9=I(async()=>{if(typeof window>"u"||X)return;let G=c6($);if(!G){L_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let H=d6(window.location.href,$,{chatOnly:!0});if(!window.open(H,G.target))L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=h6(G);if(!W){L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}i6(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let w=(await f2($))?.branch,b=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");try{let s=await d1();a_(Array.isArray(s?.chats)?s.chats:[])}catch{}try{let s=await K3(O0);p0(Array.isArray(s?.chats)?s.chats:[])}catch{}let u=V2(window.location.href,b,{chatOnly:!0});l6(W,u)}catch(H){n6(W),L_("Could not open branch window",k1(H),"error",5000)}},[$,O0,X,L_]);f(()=>{if(!B0)return;if(typeof window>"u")return;let G=v0.current;if(!G)return;if(!g$.current){let W=J2("editorWidth",null),H=I$.current||280;g$.current=Number.isFinite(W)?W:H}if(G.style.setProperty("--editor-width",`${g$.current}px`),!p$.current){let W=J2("dockHeight",null);p$.current=Number.isFinite(W)?W:200}G.style.setProperty("--dock-height",`${p$.current}px`)},[B0]),f(()=>{if(!M0||j)return;let G=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),C0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[C0,M0,j]),f(()=>{if(j)return;let G=(W)=>{if(W.ctrlKey&&W.shiftKey&&(W.key==="Z"||W.key==="z")){W.preventDefault(),F$();return}if(W.key==="Escape"&&A0)W.preventDefault(),P0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[F$,P0,A0,j]);let x9=Boolean(G_&&G_===(__?.turn_id||W_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${e.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${e.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${x0?"":" workspace-collapsed"}${B0?" editor-open":""}${j?" chat-only":""}${A0?" zen-mode":""}`} ref=${v0}>
            ${!j&&U`
                <${w6}
                    onFileSelect=${j2}
                    visible=${x0}
                    active=${x0||B0}
                    onOpenEditor=${K0}
                    onOpenTerminalTab=${y$}
                    onToggleTerminal=${M0?C0:void 0}
                    terminalVisible=${Boolean(M0&&o_)}
                />
                <button
                    class=${`workspace-toggle-tab${x0?" open":" closed"}`}
                    onClick=${A9}
                    title=${x0?"Hide workspace":"Show workspace"}
                    aria-label=${x0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${z9} onTouchStart=${W9}></div>
            `}
            ${G$&&U`
                <div class="editor-pane-container">
                    ${A0&&U`<div class="zen-hover-zone"></div>`}
                    ${B0&&U`
                        <${P6}
                            tabs=${t$}
                            activeId=${F0}
                            onActivate=${w0}
                            onClose=${Q$}
                            onCloseOthers=${f0}
                            onCloseAll=${a0}
                            onTogglePin=${O$}
                            onTogglePreview=${E$}
                            previewTabs=${D$}
                            onToggleDock=${M0?C0:void 0}
                            dockVisible=${M0&&o_}
                            onToggleZen=${F$}
                            zenMode=${A0}
                        />
                    `}
                    ${B0&&U`<div class="editor-pane-host" ref=${u$}></div>`}
                    ${B0&&F0&&D$.has(F0)&&U`
                        <${I6}
                            getContent=${()=>H0.current?.getContent?.()}
                            path=${F0}
                            onClose=${()=>E$(F0)}
                        />
                    `}
                    ${M0&&o_&&U`<div class="dock-splitter" onMouseDown=${V9} onTouchStart=${q9}></div>`}
                    ${M0&&U`<div class=${`dock-panel${o_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${C0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${U$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${G9} onTouchStart=${X9}></div>
            `}
            <div class="container">
                ${q&&m6()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${m_?.agent_name?`@${m_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${m_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${j0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>V3(G.currentTarget.value)}
                                    >
                                        ${j0.map((G)=>U`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${m_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${q3}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${m_?.chat_jid&&m_.chat_jid!==(m_.root_chat_jid||m_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L3}
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
                ${(V||q)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Q9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${q} · ${C}`}</span>
                    </div>
                `}
                <${c8}
                    posts=${K2}
                    hasMore=${A1?I2:!1}
                    onLoadMore=${A1?_$:void 0}
                    timelineRef=${V$}
                    onHashtagClick=${B9}
                    onMessageRef=${k2}
                    onScrollToMessage=${N2}
                    onFileRef=${n$}
                    onPostClick=${void 0}
                    onDeletePost=${H9}
                    emptyMessage=${V?`No posts with #${V}`:q?`No results for "${q}"`:void 0}
                    agents=${C_}
                    user=${A$}
                    reverse=${A1}
                    removingPostIds=${J$}
                    searchQuery=${q}
                />
                <${A8}
                    status=${__}
                    draft=${Z_}
                    plan=${X_}
                    thought=${t}
                    pendingRequest=${K_}
                    intent=${m}
                    turnId=${W_}
                    steerQueued=${x9}
                    onPanelToggle=${l}
                />
                <${H8}
                    session=${I_}
                    onClose=${x1}
                    onRetry=${y9}
                    onInject=${k9}
                />
                <${s3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:W}=Q0.current||{};if(!G&&!W)d0(),p()}}
                    onFocus=${p}
                    searchMode=${y}
                    searchScope=${v}
                    onSearch=${O9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${U9}
                    onExitSearch=${F9}
                    fileRefs=${P}
                    onRemoveFileRef=${M$}
                    onClearFileRefs=${y2}
                    onSetFileRefs=${l$}
                    messageRefs=${g}
                    onRemoveMessageRef=${w2}
                    onClearMessageRefs=${A2}
                    onSetMessageRefs=${P2}
                    onSwitchChat=${V3}
                    onRenameSession=${q3}
                    onCreateSession=${b9}
                    onDeleteSession=${L3}
                    onRestoreSession=${P9}
                    activeEditorPath=${j?null:F0}
                    onAttachEditorFile=${j?void 0:Z2}
                    onOpenFilePill=${n$}
                    followupQueueCount=${J_}
                    followupQueueItems=${h_}
                    onInjectQueuedFollowup=${J9}
                    onRemoveQueuedFollowup=${D9}
                    onSubmitIntercept=${E9}
                    onMessageResponse=${I1}
                    onSubmitError=${b2}
                    onPopOutChat=${X?void 0:I9}
                    isAgentActive=${P1}
                    activeChatAgents=${b_}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${p_}
                    modelUsage=${N0}
                    thinkingLevel=${c_}
                    supportsThinking=${H_}
                    contextUsage=${y0}
                    notificationsEnabled=${f$}
                    notificationPermission=${u0}
                    onToggleNotifications=${R$}
                    onModelChange=${Y0}
                    onModelStateChange=${b1}
                />
                <${P8}
                    request=${K_}
                    onRespond=${()=>{$_(null),g_.current=null}}
                />
            </div>
        </div>
    `}function cj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${pj} locationParams=${_} />`}u3(U`<${cj} />`,document.getElementById("app"));

//# debugId=F6595CFDB7490A2264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
