var S9=Object.defineProperty;var f9=(_)=>_;function R9(_,$){this[_]=f9.bind(null,$)}var v9=(_,$)=>{for(var j in $)S9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:R9.bind($,j)})};var N1,_0,P3,u9,r$,Q3,b3,x3,I3,m1,f1,R1,m9,$1={},j1=[],g9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K1=Array.isArray;function C$(_,$){for(var j in $)_[j]=$[j];return _}function g1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function M3(_,$,j){var Z,N,K,Y={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:Y[K]=$[K];if(arguments.length>2&&(Y.children=arguments.length>3?N1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)Y[K]===void 0&&(Y[K]=_.defaultProps[K]);return t2(_,Y,Z,N,null)}function t2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++P3:N,__i:-1,__u:0};return N==null&&_0.vnode!=null&&_0.vnode(K),K}function Y1(_){return _.children}function e2(_,$){this.props=_,this.context=$}function U2(_,$){if($==null)return _.__?U2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?U2(_):null}function p9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=C$({},$);K.__v=$.__v+1,_0.vnode&&_0.vnode(K),p1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?U2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,f3(Z,K,N),$.__e=$.__=null,K.__e!=j&&C3(K)}}function C3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),C3(_)}function B3(_){(!_.__d&&(_.__d=!0)&&r$.push(_)&&!Z1.__r++||Q3!=_0.debounceRendering)&&((Q3=_0.debounceRendering)||b3)(Z1)}function Z1(){try{for(var _,$=1;r$.length;)r$.length>$&&r$.sort(x3),_=r$.shift(),$=r$.length,p9(_)}finally{r$.length=Z1.__r=0}}function T3(_,$,j,Z,N,K,Y,X,L,V,B){var q,D,E,S,v,R,P,I=Z&&Z.__k||j1,g=$.length;for(L=c9(j,$,I,L,g),q=0;q<g;q++)(E=j.__k[q])!=null&&(D=E.__i!=-1&&I[E.__i]||$1,E.__i=q,R=p1(_,E,D,N,K,Y,X,L,V,B),S=E.__e,E.ref&&D.ref!=E.ref&&(D.ref&&c1(D.ref,null,E),B.push(E.ref,E.__c||S,E)),v==null&&S!=null&&(v=S),(P=!!(4&E.__u))||D.__k===E.__k?L=S3(E,L,_,P):typeof E.type=="function"&&R!==void 0?L=R:S&&(L=S.nextSibling),E.__u&=-7);return j.__e=v,L}function c9(_,$,j,Z,N){var K,Y,X,L,V,B=j.length,q=B,D=0;for(_.__k=Array(N),K=0;K<N;K++)(Y=$[K])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[K]=t2(null,Y,null,null,null):K1(Y)?Y=_.__k[K]=t2(Y1,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[K]=t2(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[K]=Y,L=K+D,Y.__=_,Y.__b=_.__b+1,X=null,(V=Y.__i=h9(Y,j,L,q))!=-1&&(q--,(X=j[V])&&(X.__u|=2)),X==null||X.__v==null?(V==-1&&(N>B?D--:N<B&&D++),typeof Y.type!="function"&&(Y.__u|=4)):V!=L&&(V==L-1?D--:V==L+1?D++:(V>L?D--:D++,Y.__u|=4))):_.__k[K]=null;if(q)for(K=0;K<B;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=U2(X)),v3(X,X));return Z}function S3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=S3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=U2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function h9(_,$,j,Z){var N,K,Y,X=_.key,L=_.type,V=$[j],B=V!=null&&(2&V.__u)==0;if(V===null&&X==null||B&&X==V.key&&L==V.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((V=$[Y=N>=0?N--:K++])!=null&&(2&V.__u)==0&&X==V.key&&L==V.type)return Y}return-1}function U3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||g9.test($)?j:j+"px"}function a2(_,$,j,Z,N){var K,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||U3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||U3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(I3,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=m1,_.addEventListener($,K?R1:f1,K)):_.removeEventListener($,K?R1:f1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function O3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=m1++;else if($.t<j.u)return;return j(_0.event?_0.event($):$)}}}function p1(_,$,j,Z,N,K,Y,X,L,V){var B,q,D,E,S,v,R,P,I,g,J,m,o,__,n,Z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(B=_0.__b)&&B($);_:if(typeof Z_=="function")try{if(P=$.props,I=Z_.prototype&&Z_.prototype.render,g=(B=Z_.contextType)&&Z[B.__c],J=B?g?g.props.value:B.__:Z,j.__c?R=(q=$.__c=j.__c).__=q.__E:(I?$.__c=q=new Z_(P,J):($.__c=q=new e2(P,J),q.constructor=Z_,q.render=l9),g&&g.sub(q),q.state||(q.state={}),q.__n=Z,D=q.__d=!0,q.__h=[],q._sb=[]),I&&q.__s==null&&(q.__s=q.state),I&&Z_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=C$({},q.__s)),C$(q.__s,Z_.getDerivedStateFromProps(P,q.__s))),E=q.props,S=q.state,q.__v=$,D)I&&Z_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),I&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(I&&Z_.getDerivedStateFromProps==null&&P!==E&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(P,J),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(P,q.__s,J)===!1){$.__v!=j.__v&&(q.props=P,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),j1.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&Y.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(P,q.__s,J),I&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(E,S,v)})}if(q.context=J,q.props=P,q.__P=_,q.__e=!1,m=_0.__r,o=0,I)q.state=q.__s,q.__d=!1,m&&m($),B=q.render(q.props,q.state,q.context),j1.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,m&&m($),B=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++o<25);q.state=q.__s,q.getChildContext!=null&&(Z=C$(C$({},Z),q.getChildContext())),I&&!D&&q.getSnapshotBeforeUpdate!=null&&(v=q.getSnapshotBeforeUpdate(E,S)),__=B!=null&&B.type===Y1&&B.key==null?R3(B.props.children):B,X=T3(_,K1(__)?__:[__],$,j,Z,N,K,Y,X,L,V),q.base=$.__e,$.__u&=-161,q.__h.length&&Y.push(q),R&&(q.__E=q.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(n=K.length;n--;)g1(K[n]);v1($)}else $.__e=j.__e,$.__k=j.__k,i.then||v1($);_0.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=i9(j.__e,$,j,Z,N,K,Y,L,V);return(B=_0.diffed)&&B($),128&$.__u?void 0:X}function v1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(v1))}function f3(_,$,j){for(var Z=0;Z<j.length;Z++)c1(j[Z],j[++Z],j[++Z]);_0.__c&&_0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){_0.__e(K,N.__v)}})}function R3(_){return typeof _!="object"||_==null||_.__b>0?_:K1(_)?_.map(R3):C$({},_)}function i9(_,$,j,Z,N,K,Y,X,L){var V,B,q,D,E,S,v,R=j.props||$1,P=$.props,I=$.type;if(I=="svg"?N="http://www.w3.org/2000/svg":I=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(V=0;V<K.length;V++)if((E=K[V])&&"setAttribute"in E==!!I&&(I?E.localName==I:E.nodeType==3)){_=E,K[V]=null;break}}if(_==null){if(I==null)return document.createTextNode(P);_=document.createElementNS(N,I,P.is&&P),X&&(_0.__m&&_0.__m($,K),X=!1),K=null}if(I==null)R===P||X&&_.data==P||(_.data=P);else{if(K=K&&N1.call(_.childNodes),!X&&K!=null)for(R={},V=0;V<_.attributes.length;V++)R[(E=_.attributes[V]).name]=E.value;for(V in R)E=R[V],V=="dangerouslySetInnerHTML"?q=E:V=="children"||(V in P)||V=="value"&&("defaultValue"in P)||V=="checked"&&("defaultChecked"in P)||a2(_,V,null,E,N);for(V in P)E=P[V],V=="children"?D=E:V=="dangerouslySetInnerHTML"?B=E:V=="value"?S=E:V=="checked"?v=E:X&&typeof E!="function"||R[V]===E||a2(_,V,E,R[V],N);if(B)X||q&&(B.__html==q.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(q&&(_.innerHTML=""),T3($.type=="template"?_.content:_,K1(D)?D:[D],$,j,Z,I=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,Y,K?K[0]:j.__k&&U2(j,0),X,L),K!=null)for(V=K.length;V--;)g1(K[V]);X||(V="value",I=="progress"&&S==null?_.removeAttribute("value"):S!=null&&(S!==_[V]||I=="progress"&&!S||I=="option"&&S!=R[V])&&a2(_,V,S,R[V],N),V="checked",v!=null&&v!=_[V]&&a2(_,V,v,R[V],N))}return _}function c1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){_0.__e(N,j)}}function v3(_,$,j){var Z,N;if(_0.unmount&&_0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||c1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){_0.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&v3(Z[N],$,j||typeof _.type!="function");j||g1(_.__e),_.__c=_.__=_.__e=void 0}function l9(_,$,j){return this.constructor(_,j)}function u3(_,$,j){var Z,N,K,Y;$==document&&($=document.documentElement),_0.__&&_0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],Y=[],p1($,_=(!Z&&j||$).__k=M3(Y1,null,[_]),N||$1,$1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?N1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,Y),f3(K,_,Y)}N1=j1.slice,_0={__e:function(_,$,j,Z){for(var N,K,Y;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),Y=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),Y=N.__d),Y)return N.__E=N}catch(X){_=X}throw _}},P3=0,u9=function(_){return _!=null&&_.constructor===void 0},e2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C$({},this.state),typeof _=="function"&&(_=_(C$({},j),this.props)),_&&C$(j,_),_!=null&&this.__v&&($&&this._sb.push($),B3(this))},e2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),B3(this))},e2.prototype.render=Y1,r$=[],b3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,x3=function(_,$){return _.__v.__b-$.__v.__b},Z1.__r=0,I3=/(PointerCapture)$|Capture$/i,m1=0,f1=O3(!1),R1=O3(!0),m9=0;var C2,q0,S1,F3,T2=0,m3=[],V0=_0,H3=V0.__b,D3=V0.__r,J3=V0.diffed,y3=V0.__c,E3=V0.unmount,k3=V0.__;function h1(_,$){V0.__h&&V0.__h(q0,_,T2||$),T2=0;var j=q0.__H||(q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return T2=1,n9(p3,_)}function n9(_,$,j){var Z=h1(C2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):p3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(L,X);L!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=q0,!q0.__f)){var N=function(X,L,V){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(D){return D.__c});if(B.every(function(D){return!D.__N}))return!K||K.call(this,X,L,V);var q=Z.__c.props!==X;return B.some(function(D){if(D.__N){var E=D.__[0];D.__=D.__N,D.__N=void 0,E!==D.__[0]&&(q=!0)}}),K&&K.call(this,X,L,V)||q};q0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:Y}=q0;q0.componentWillUpdate=function(X,L,V){if(this.__e){var B=K;K=void 0,N(X,L,V),K=B}Y&&Y.call(this,X,L,V)},q0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=h1(C2++,3);!V0.__s&&g3(j.__H,$)&&(j.__=_,j.u=$,q0.__H.__h.push(j))}function k(_){return T2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=h1(C2++,7);return g3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return T2=8,n_(function(){return _},$)}function d9(){for(var _;_=m3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(_1),$.__h.some(u1),$.__h=[]}catch(j){$.__h=[],V0.__e(j,_.__v)}}}V0.__b=function(_){q0=null,H3&&H3(_)},V0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),k3&&k3(_,$)},V0.__r=function(_){D3&&D3(_),C2=0;var $=(q0=_.__c).__H;$&&(S1===q0?($.__h=[],q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(_1),$.__h.some(u1),$.__h=[],C2=0)),S1=q0},V0.diffed=function(_){J3&&J3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(m3.push($)!==1&&F3===V0.requestAnimationFrame||((F3=V0.requestAnimationFrame)||o9)(d9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),S1=q0=null},V0.__c=function(_,$){$.some(function(j){try{j.__h.some(_1),j.__h=j.__h.filter(function(Z){return!Z.__||u1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],V0.__e(Z,j.__v)}}),y3&&y3(_,$)},V0.unmount=function(_){E3&&E3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{_1(Z)}catch(N){$=N}}),j.__H=void 0,$&&V0.__e($,j.__v))};var w3=typeof requestAnimationFrame=="function";function o9(_){var $,j=function(){clearTimeout(Z),w3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);w3&&($=requestAnimationFrame(j))}function _1(_){var $=q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),q0=$}function u1(_){var $=q0;_.__c=_.__(),q0=$}function g3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function p3(_,$){return typeof $=="function"?$(_):$}var c3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var Y=$[K++],X=$[K]?($[0]|=Y?1:2,j[$[K++]]):$[++K];Y===3?Z[0]=X:Y===4?Z[1]=Object.assign(Z[1]||{},X):Y===5?(Z[1]=Z[1]||{})[$[++K]]=X:Y===6?Z[1][$[++K]]+=X+"":Y?(N=_.apply(X,c3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},A3=new Map;function s9(_){var $=A3.get(this);return $||($=new Map,A3.set(this,$)),($=c3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,Y="",X="",L=[0],V=function(D){K===1&&(D||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,D,Y):K===3&&(D||Y)?(L.push(3,D,Y),K=2):K===2&&Y==="..."&&D?L.push(4,D,0):K===2&&Y&&!D?L.push(5,0,!0,Y):K>=5&&((Y||!D&&K===5)&&(L.push(K,0,Y,N),K=6),D&&(L.push(K,D,0,N),K=6)),Y=""},B=0;B<j.length;B++){B&&(K===1&&V(),V(B));for(var q=0;q<j[B].length;q++)Z=j[B][q],K===1?Z==="<"?(V(),L=[L],K=3):Y+=Z:K===4?Y==="--"&&Z===">"?(K=1,Y=""):Y=Z+Y[0]:X?Z===X?X="":Y+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(V(),K=1):K&&(Z==="="?(K=5,N=Y,Y=""):Z==="/"&&(K<5||j[B][q+1]===">")?(V(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),K=2):Y+=Z),K===3&&Y==="!--"&&(K=4,L=L[0])}return V(),L}(_)),$),arguments,[])).length>1?$:$[0]}var O=s9.bind(M3);var o0={};v9(o0,{uploadWorkspaceFile:()=>W1,uploadMedia:()=>a1,updateWorkspaceFile:()=>V5,submitAdaptiveCardAction:()=>t1,streamSidePrompt:()=>W5,steerAgentQueueItem:()=>z5,setWorkspaceVisibility:()=>u2,setAgentThoughtVisibility:()=>$4,sendPeerAgentMessage:()=>Z5,sendAgentMessage:()=>O2,searchPosts:()=>l1,restoreChatBranch:()=>j5,respondToAgentRequest:()=>z1,renameWorkspaceFile:()=>z4,renameChatBranch:()=>_5,removeAgentQueueItem:()=>Y5,pruneChatBranch:()=>$5,moveWorkspaceEntry:()=>W4,getWorkspaceTree:()=>v2,getWorkspaceRawUrl:()=>G1,getWorkspaceFile:()=>N4,getWorkspaceDownloadUrl:()=>X1,getWorkspaceBranch:()=>X5,getTimeline:()=>S2,getThumbnailUrl:()=>j4,getThread:()=>n1,getPostsByHashtag:()=>i1,getMediaUrl:()=>K$,getMediaText:()=>Z4,getMediaInfo:()=>F2,getMediaBlob:()=>G5,getChatBranches:()=>e9,getAgents:()=>s1,getAgentThought:()=>_4,getAgentStatus:()=>r1,getAgentQueueState:()=>K5,getAgentModels:()=>R2,getAgentContext:()=>N5,getActiveChatAgents:()=>o1,forkChatBranch:()=>f2,deleteWorkspaceFile:()=>G4,deletePost:()=>d1,createWorkspaceFile:()=>Y4,createReply:()=>t9,createPost:()=>a9,attachWorkspaceFile:()=>K4,addToWhitelist:()=>e1,SSEClient:()=>V1});async function v_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function h3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function r9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:Y,done:X}=await j.read();if(X)break;N+=Z.decode(Y,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let V of L){let B=h3(V);if(B)$(B.event,B.data)}}N+=Z.decode();let K=h3(N);if(K)$(K.event,K.data)}async function S2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return v_(Z)}async function i1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function l1(_,$=50,j=0,Z=null,N="current",K=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return v_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Y}${X}${L}`)}async function n1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return v_(`/thread/${_}${j}`)}async function a9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return v_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function t9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return v_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function d1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return v_(N,{method:"DELETE"})}async function O2(_,$,j=null,Z=[],N=null,K=null){let Y=K?`?chat_jid=${encodeURIComponent(K)}`:"";return v_(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function o1(){return v_("/agent/active-chats")}async function e9(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return v_(`/agent/branches${Z}`)}async function f2(_,$={}){return v_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function _5(_,$={}){return v_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function $5(_){return v_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function j5(_,$={}){return v_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Z5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return v_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function s1(){return v_("/agent/roster")}async function r1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/status${$}`)}async function N5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/context${$}`)}async function K5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/queue-state${$}`)}async function Y5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function z5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return v_(`/agent/models${$}`)}async function a1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function z1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function t1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function W5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await r9(j,(K,Y)=>{if($.onEvent?.(K,Y),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(K==="side_prompt_done")Z=Y;else if(K==="side_prompt_error")N=Y}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function e1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function _4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return v_(j)}async function $4(_,$,j){return v_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function K$(_){return`/media/${_}`}function j4(_){return`/media/${_}/thumbnail`}async function F2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function Z4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function G5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return v_(Z)}async function X5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return v_($)}async function N4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return v_(N)}async function V5(_,$){return v_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function K4(_){return v_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function W1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),Y=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+Y,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),V=Error(L.error||`HTTP ${X.status}`);throw V.status=X.status,V.code=L.code,V}return X.json()}async function Y4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function z4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function W4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function G4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return v_($,{method:"DELETE"})}async function u2(_,$=!1){return v_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function G1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function X1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class V1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function s0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function $0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function H2(_,$=!1){let j=s0(_);if(j===null)return $;return j==="true"}function D2(_,$=null){let j=s0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function q1(_){return String(_||"").trim().toLowerCase()}function X4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return q1($[1]||"")}function i3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=q1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function l3(_,$,j={}){let Z=X4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return i3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return q1(K?.agent_name).startsWith(Z)})}function V4(_){let $=q1(_);return $?`@${$} `:""}function n3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return i3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function d3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function L$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:Y="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,V=`${_}-file-remove`,B=Y==="message"?O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:O`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return O`
    <span class=${X} title=${j||$} onClick=${N}>
      ${B}
      <span class=${L}>${$}</span>
      ${Z&&O`
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
  `}var q5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function L5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${o3(j)} / ${o3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=9,Y=2*Math.PI*9,X=$/100*Y,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return O`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="22" height="22" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${Y}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </span>
    `}function o3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function s3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:Y,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:V,onClearFileRefs:B,messageRefs:q=[],onRemoveMessageRef:D,onClearMessageRefs:E,activeModel:S=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:P=!1,contextUsage:I=null,notificationsEnabled:g=!1,notificationPermission:J="default",onToggleNotifications:m,onModelChange:o,onModelStateChange:__,activeEditorPath:n=null,onAttachEditorFile:Z_,onOpenFilePill:i,followupQueueItems:X_=[],onInjectQueuedFollowup:o_,onRemoveQueuedFollowup:t,onSubmitIntercept:a,onMessageResponse:K_,onPopOutChat:$_,isAgentActive:W_=!1,activeChatAgents:O_=[],currentChatJid:G_="web:default",connectionStatus:J_="connected",onSetFileRefs:Q_,onSetMessageRefs:M_,onSubmitError:u_,onSwitchChat:F_,onRenameSession:C_,onCreateSession:p_,onDeleteSession:W0,onRestoreSession:V_}){let[r,U_]=T(""),[Y_,T_]=T(""),[m_,c_]=T([]),[Y0,h_]=T(!1),[y_,H_]=T([]),[j0,N0]=T(0),[S_,b_]=T(!1),[a_,Z0]=T([]),[p0,E0]=T(0),[g_,i_]=T(!1),[A_,L0]=T(!1),[G0,x_]=T(!1),[l_,t_]=T(!1),[I_,U0]=T([]),[C,e]=T(!1),[E_,D_]=T(0),[e_,S0]=T(null),B_=k(null),x0=k(null),c0=k(null),f$=k(null),u0=k(null),R$=k(null),O0=k(null),J$=k(null),k0=k(0),I0=200,Q$=(Q)=>{let A=new Set,z=[];for(let U of Q||[]){if(typeof U!=="string")continue;let H=U.trim();if(!H||A.has(H))continue;A.add(H),z.push(H)}return z},a0=()=>{let Q=s0("piclaw_compose_history");if(!Q)return[];try{let A=JSON.parse(Q);if(!Array.isArray(A))return[];return Q$(A)}catch{return[]}},Q0=(Q)=>{$0("piclaw_compose_history",JSON.stringify(Q))},t$=k(a0()),F0=k(-1),y$=k(""),K0=r.trim()||m_.length>0||L.length>0||q.length>0,W$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),B$=typeof window<"u"&&typeof Notification<"u",w0=typeof window<"u"?Boolean(window.isSecureContext):!1,t0=B$&&w0&&J!=="denied",U$=J==="granted"&&g,E$=U$?"Disable notifications":"Enable notifications",v$=m_.length>0||L.length>0||q.length>0,u$=J_==="disconnected"?"Reconnecting":String(J_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),H0=J_==="disconnected"?"Reconnecting":`Connection: ${u$}`,O$=(Array.isArray(O_)?O_:[]).filter((Q)=>!Q?.archived_at),e0=n3(O$,{currentChatJid:G_,limit:4}),M0=!j&&d3({footerWidth:E_,visibleAgentCount:e0.length,hasContextIndicator:Boolean(I&&I.percent!=null)}),f_=(()=>{for(let Q of Array.isArray(O_)?O_:[]){let A=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(A&&A===G_)return Q}return null})(),m$=Boolean(f_&&f_.chat_jid===(f_.root_chat_jid||f_.chat_jid)),C0=(()=>{let Q=new Set,A=[];for(let z of Array.isArray(O_)?O_:[]){let U=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(!U||U===G_||Q.has(U))continue;if(!(typeof z?.agent_name==="string"?z.agent_name.trim():""))continue;Q.add(U),A.push(z)}return A})(),k$=C0.length>0,G$=k$&&typeof F_==="function",A0=k$&&typeof V_==="function",w$=!j&&typeof C_==="function",A$=!j&&typeof p_==="function",s_=!j&&typeof W0==="function"&&!m$,P0=!j&&(G$||A0||w$||A$||s_),F$=S||"",P$=P&&R?` (${R})`:"",q2=P$.trim()?`${R}`:"",e$=typeof v?.hint_short==="string"?v.hint_short.trim():"",m0=[q2||null,e$||null].filter(Boolean).join(" • "),D0=[F$?`Current model: ${F$}${P$}`:null,v?.plan?`Plan: ${v.plan}`:null,e$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),w_=A_?"Switching model…":D0.join(" • ")||`Current model: ${F$}${P$} (tap to open model picker)`,R0=(Q)=>{if(!Q||typeof Q!=="object")return;let A=Q.model??Q.current;if(typeof __==="function")__({model:A??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(A&&typeof o==="function")o(A)},X$=(Q)=>{let A=Q||B_.current;if(!A)return;A.style.height="auto",A.style.height=`${A.scrollHeight}px`,A.style.overflowY="hidden"},_2=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let z=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),U=-1;for(let p=0;p<z.length;p+=1)if(z[p].trim()==="Files:"&&z[p+1]&&/^\s*-\s+/.test(z[p+1])){U=p;break}if(U===-1)return{content:Q,fileRefs:[]};let H=[],y=U+1;for(;y<z.length;y+=1){let p=z[y];if(/^\s*-\s+/.test(p))H.push(p.replace(/^\s*-\s+/,"").trim());else if(!p.trim())break;else break}if(H.length===0)return{content:Q,fileRefs:[]};let M=z.slice(0,U),l=z.slice(y);return{content:[...M,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:H}},$2=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let z=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),U=-1;for(let p=0;p<z.length;p+=1)if(z[p].trim()==="Referenced messages:"&&z[p+1]&&/^\s*-\s+/.test(z[p+1])){U=p;break}if(U===-1)return{content:Q,messageRefs:[]};let H=[],y=U+1;for(;y<z.length;y+=1){let p=z[y];if(/^\s*-\s+/.test(p)){let c=p.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(c)H.push(c[1])}else if(!p.trim())break;else break}if(H.length===0)return{content:Q,messageRefs:[]};let M=z.slice(0,U),l=z.slice(y);return{content:[...M,...l].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:H}},b$=(Q)=>{let A=_2(Q||""),z=$2(A.content||"");return{text:z.content||"",fileRefs:A.fileRefs,messageRefs:z.messageRefs}},x$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){b_(!1),H_([]);return}let A=Q.toLowerCase().split(" ")[0];if(A.length<1){b_(!1),H_([]);return}let z=q5.filter((U)=>U.name.startsWith(A)||U.name.replace(/-/g,"").startsWith(A.replace(/-/g,"")));if(z.length>0&&!(z.length===1&&z[0].name===A))i_(!1),Z0([]),H_(z),N0(0),b_(!0);else b_(!1),H_([])},B0=(Q)=>{let A=r,z=A.indexOf(" "),U=z>=0?A.slice(z):"",H=Q.name+U;U_(H),b_(!1),H_([]),requestAnimationFrame(()=>{let y=B_.current;if(!y)return;let M=H.length;y.selectionStart=M,y.selectionEnd=M,y.focus()})},V$=(Q)=>{if(X4(Q)==null){i_(!1),Z0([]);return}let A=l3(O$,Q,{currentChatJid:G_});if(A.length>0&&!(A.length===1&&V4(A[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))b_(!1),H_([]),Z0(A),E0(0),i_(!0);else i_(!1),Z0([])},v0=(Q)=>{let A=V4(Q?.agent_name);if(!A)return;U_(A),i_(!1),Z0([]),requestAnimationFrame(()=>{let z=B_.current;if(!z)return;let U=A.length;z.selectionStart=U,z.selectionEnd=U,z.focus()})},H$=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!G$&&!A0&&!w$&&!A$&&!s_)return;x_(!1),b_(!1),H_([]),i_(!1),Z0([]),t_((A)=>!A)},g$=(Q)=>{let A=typeof Q==="string"?Q.trim():"";if(t_(!1),!A||A===G_){requestAnimationFrame(()=>B_.current?.focus());return}F_?.(A)},p$=async(Q)=>{let A=typeof Q==="string"?Q.trim():"";if(t_(!1),!A||typeof V_!=="function"){requestAnimationFrame(()=>B_.current?.focus());return}try{await V_(A)}catch(z){console.warn("Failed to restore session:",z),requestAnimationFrame(()=>B_.current?.focus())}},c$=(Q)=>{let A=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(A&&typeof F_==="function"){F_(A);return}v0(Q)},_$=async()=>{if(typeof C_!=="function")return;t_(!1);try{await C_()}catch(Q){console.warn("Failed to rename session:",Q)}requestAnimationFrame(()=>B_.current?.focus())},h0=async()=>{if(typeof p_!=="function")return;t_(!1);try{await p_()}catch(Q){console.warn("Failed to create session:",Q)}requestAnimationFrame(()=>B_.current?.focus())},h$=async()=>{if(typeof W0!=="function")return;t_(!1);try{await W0(G_)}catch(Q){console.warn("Failed to delete session:",Q)}requestAnimationFrame(()=>B_.current?.focus())},i0=(Q)=>{if(j)T_(Q);else U_(Q),x$(Q),V$(Q);requestAnimationFrame(()=>X$())},D$=(Q)=>{let A=j?Y_:r,z=A&&!A.endsWith(`
`)?`
`:"",U=`${A}${z}${Q}`.trimStart();i0(U)},q$=(Q)=>{let A=Q?.command?.model_label;if(A)return A;let z=Q?.command?.message;if(typeof z==="string"){let U=z.match(/•\s+([^\n]+?)\s+\(current\)/);if(U?.[1])return U[1].trim()}return null},I$=async(Q)=>{if(j||A_)return;L0(!0);try{let A=await O2("default",Q,null,[],null,G_),z=q$(A);R0({model:z??S??null,thinking_level:A?.command?.thinking_level,supports_thinking:A?.command?.supports_thinking});try{let U=await R2(G_);if(U)R0(U)}catch{}return _?.(),!0}catch(A){return console.error("Failed to switch model:",A),alert("Failed to switch model: "+A.message),!1}finally{L0(!1)}},i$=async()=>{await I$("/cycle-model")},j2=async(Q)=>{if(!Q||A_)return;if(await I$(`/model ${Q}`))x_(!1)},M$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),t_(!1),x_((A)=>!A)},E2=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return W_?"queue":null},l$=async(Q,A,z={})=>{let{includeMedia:U=!0,includeFileRefs:H=!0,includeMessageRefs:y=!0,clearAfterSubmit:M=!0,recordHistory:l=!0}=z||{},d=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:r,p=typeof d==="string"?d:"";if(!p.trim()&&(U?m_.length===0:!0)&&(H?L.length===0:!0)&&(y?q.length===0:!0))return;b_(!1),H_([]),i_(!1),Z0([]),t_(!1),S0(null);let c=U?[...m_]:[],N_=H?[...L]:[],X0=y?[...q]:[],T0=p.trim();if(l&&T0){let o$=t$.current,k_=Q$(o$.filter((x2)=>x2!==T0));if(k_.push(T0),k_.length>200)k_.splice(0,k_.length-200);t$.current=k_,Q0(k_),F0.current=-1,y$.current=""}let n0=()=>{if(U)c_([...c]);if(H)Q_?.(N_);if(y)M_?.(X0);U_(T0),requestAnimationFrame(()=>X$())};if(M)U_(""),c_([]),B?.(),E?.();(async()=>{try{if(await a?.({content:T0,submitMode:A,fileRefs:N_,messageRefs:X0,mediaFiles:c})){_?.();return}let k_=[];for(let $$ of c){let s$=await a1($$);k_.push(s$.id)}let x2=N_.length?`Files:
${N_.map(($$)=>`- ${$$}`).join(`
`)}`:"",Q2=X0.length?`Referenced messages:
${X0.map(($$)=>`- message:${$$}`).join(`
`)}`:"",o2=k_.length?`Attachments:
${k_.map(($$,s$)=>{let B2=c[s$]?.name||`attachment-${s$+1}`;return`- attachment:${$$} (${B2})`}).join(`
`)}`:"",d0=[T0,x2,Q2,o2].filter(Boolean).join(`

`),z0=await O2("default",d0,null,k_,E2(A),G_);if(K_?.(z0),z0?.command){R0({model:z0.command.model_label??S??null,thinking_level:z0.command.thinking_level,supports_thinking:z0.command.supports_thinking});try{let $$=await R2(G_);if($$)R0($$)}catch{}}_?.()}catch(o$){if(M)n0();let k_=o$?.message||"Failed to send message.";S0(k_),u_?.(k_),console.error("Failed to post:",o$)}})()},L_=(Q)=>{o_?.(Q)},n$=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),T_(""),X?.();return}if(!j&&l_&&Q.key==="Escape"){Q.preventDefault(),t_(!1);return}if(g_&&a_.length>0){let A=B_.current?.value??(j?Y_:r);if(!String(A||"").match(/^@([a-zA-Z0-9_-]*)$/))i_(!1),Z0([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),E0((z)=>(z+1)%a_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),E0((z)=>(z-1+a_.length)%a_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),v0(a_[p0]);return}if(Q.key==="Escape"){Q.preventDefault(),i_(!1),Z0([]);return}}}if(S_&&y_.length>0){let A=B_.current?.value??(j?Y_:r);if(!String(A||"").startsWith("/"))b_(!1),H_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),N0((z)=>(z+1)%y_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),N0((z)=>(z-1+y_.length)%y_.length);return}if(Q.key==="Tab"){Q.preventDefault(),B0(y_[j0]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(B_.current?.value??(j?Y_:r)).includes(" ")){Q.preventDefault();let H=y_[j0];b_(!1),H_([]),l$(H.name);return}}if(Q.key==="Escape"){Q.preventDefault(),b_(!1),H_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let A=B_.current;if(!A)return;let z=A.value||"",U=A.selectionStart===0&&A.selectionEnd===0,H=A.selectionStart===z.length&&A.selectionEnd===z.length;if(Q.key==="ArrowUp"&&U||Q.key==="ArrowDown"&&H){let y=t$.current;if(!y.length)return;Q.preventDefault();let M=F0.current;if(Q.key==="ArrowUp"){if(M===-1)y$.current=z,M=y.length-1;else if(M>0)M-=1;F0.current=M,i0(y[M]||"")}else{if(M===-1)return;if(M<y.length-1)M+=1,F0.current=M,i0(y[M]||"");else F0.current=-1,i0(y$.current||""),y$.current=""}requestAnimationFrame(()=>{let l=B_.current;if(!l)return;let d=l.value.length;l.selectionStart=d,l.selectionEnd=d});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let A=B_.current?.value??(j?Y_:r);if(j){if(A.trim())N?.(A.trim(),Z)}else l$(A,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let A=B_.current?.value??(j?Y_:r);if(j){if(A.trim())N?.(A.trim(),Z)}else l$(A)}},Z2=(Q)=>{let A=Array.from(Q||[]).filter((z)=>z instanceof File&&!String(z.name||"").startsWith(".DS_Store"));if(!A.length)return;c_((z)=>[...z,...A]),S0(null)},k2=(Q)=>{Z2(Q.target.files),Q.target.value=""},N2=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),k0.current+=1,h_(!0)},w2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),k0.current=Math.max(0,k0.current-1),k0.current===0)h_(!1)},A2=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";h_(!0)},P2=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),k0.current=0,h_(!1),Z2(Q.dataTransfer?.files||[])},b2=(Q)=>{if(j)return;let A=Q.clipboardData?.items;if(!A||!A.length)return;let z=[];for(let U of A){if(U.kind!=="file")continue;let H=U.getAsFile?.();if(H)z.push(H)}if(z.length>0)Q.preventDefault(),Z2(z)},l0=(Q)=>{c_((A)=>A.filter((z,U)=>U!==Q))},g0=()=>{S0(null),c_([]),B?.(),E?.()},d$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:A,longitude:z,accuracy:U}=Q.coords,H=`${A.toFixed(5)}, ${z.toFixed(5)}`,y=Number.isFinite(U)?` ±${Math.round(U)}m`:"",M=`https://maps.google.com/?q=${A},${z}`,l=`Location: ${H}${y} ${M}`;D$(l)},(Q)=>{let A=Q?.message||"Unable to retrieve location.";alert(`Location error: ${A}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!G0)return;e(!0),R2(G_).then((Q)=>{let A=Array.isArray(Q?.models)?Q.models.filter((z)=>typeof z==="string"&&z.trim().length>0):[];A.sort((z,U)=>z.localeCompare(U,void 0,{sensitivity:"base"})),U0(A),R0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),U0([])}).finally(()=>{e(!1)})},[G0,S]),f(()=>{if(j)x_(!1),t_(!1),b_(!1),H_([]),i_(!1),Z0([])},[j]),f(()=>{if(l_&&!P0)t_(!1)},[l_,P0]),f(()=>{if(!G0)return;let Q=(A)=>{let z=f$.current,U=u0.current,H=A.target;if(z&&z.contains(H))return;if(U&&U.contains(H))return;x_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[G0]),f(()=>{if(!l_)return;let Q=(A)=>{let z=R$.current,U=O0.current,H=A.target;if(z&&z.contains(H))return;if(U&&U.contains(H))return;t_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[l_]),f(()=>{let Q=()=>{let y=J$.current?.clientWidth||0;D_((M)=>M===y?M:y)};Q();let A=J$.current,z=0,U=()=>{if(z)cancelAnimationFrame(z);z=requestAnimationFrame(()=>{z=0,Q()})},H=null;if(A&&typeof ResizeObserver<"u")H=new ResizeObserver(()=>U()),H.observe(A);if(typeof window<"u")window.addEventListener("resize",U);return()=>{if(z)cancelAnimationFrame(z);if(H?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",U)}},[j,S,e0.length,I?.percent]);let L2=(Q)=>{let A=Q.target.value;if(S0(null),l_)t_(!1);X$(Q.target),i0(A)};return f(()=>{requestAnimationFrame(()=>X$())},[r,Y_,j]),f(()=>{if(j)return;V$(r)},[O$,G_,r,j]),O`
        <div class="compose-box">
            ${!j&&X_.length>0&&O`
                <div class="compose-queue-stack">
                    ${X_.map((Q)=>{let A=typeof Q?.content==="string"?Q.content:"",z=b$(A);if(!z.text.trim()&&z.fileRefs.length===0&&z.messageRefs.length===0)return null;return O`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${A}>
                                    ${z.text.trim()&&O`
                                        <div class="compose-queue-stack-text">${z.text}</div>
                                    `}
                                    ${(z.messageRefs.length>0||z.fileRefs.length>0)&&O`
                                        <div class="compose-queue-stack-refs">
                                            ${z.messageRefs.map((U)=>O`
                                                <${L$}
                                                    key=${"queue-msg-"+U}
                                                    prefix="compose"
                                                    label=${"msg:"+U}
                                                    title=${"Message reference: "+U}
                                                    icon="message"
                                                />
                                            `)}
                                            ${z.fileRefs.map((U)=>{let H=U.split("/").pop()||U;return O`
                                                    <${L$}
                                                        key=${"queue-file-"+U}
                                                        prefix="compose"
                                                        label=${H}
                                                        title=${U}
                                                        onClick=${()=>i?.(U)}
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
                                        onClick=${()=>L_(Q)}
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
                                        onClick=${()=>t?.(Q)}
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
                    ${e_&&!v$&&O`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${e_}</div>
                    `}
                    ${v$&&O`
                        <div class="compose-file-refs">
                            ${e_&&O`
                                <div class="compose-submit-error" role="status" aria-live="polite">${e_}</div>
                            `}
                            ${q.map((Q)=>{return O`
                                    <${L$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>D?.(Q)}
                                    />
                                `})}
                            ${L.map((Q)=>{let A=Q.split("/").pop()||Q;return O`
                                    <${L$}
                                        prefix="compose"
                                        label=${A}
                                        title=${Q}
                                        onClick=${()=>i?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${m_.map((Q,A)=>{let z=Q?.name||`attachment-${A+1}`;return O`
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
                    ${!j&&typeof $_==="function"&&O`
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
                        ref=${B_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y_:r}
                        onInput=${L2}
                        onKeyDown=${n$}
                        onPaste=${b2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g_&&a_.length>0&&O`
                        <div class="slash-autocomplete" ref=${c0}>
                            ${a_.map((Q,A)=>O`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${A===p0?" active":""}`}
                                    onMouseDown=${(z)=>{z.preventDefault(),v0(Q)}}
                                    onMouseEnter=${()=>E0(A)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${S_&&y_.length>0&&O`
                        <div class="slash-autocomplete" ref=${x0}>
                            ${y_.map((Q,A)=>O`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${A===j0?" active":""}`}
                                    onMouseDown=${(z)=>{z.preventDefault(),B0(Q)}}
                                    onMouseEnter=${()=>N0(A)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${G0&&!j&&O`
                        <div class="compose-model-popup" ref=${f$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&O`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&I_.length===0&&O`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&I_.map((Q)=>O`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${S===Q?" active":""}`}
                                        onClick=${()=>{j2(Q)}}
                                        disabled=${A_}
                                    >
                                        ${Q}
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
                    ${l_&&!j&&O`
                        <div class="compose-model-popup" ref=${R$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${O`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Q=typeof f_?.agent_name==="string"&&f_.agent_name.trim()?`@${f_.agent_name.trim()}`:G_,A=typeof f_?.chat_jid==="string"&&f_.chat_jid.trim()?f_.chat_jid.trim():G_;return`${Q} — ${A} • current`})()}
                                    </div>
                                `}
                                ${!k$&&O`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${k$&&C0.map((Q)=>{let A=Boolean(Q.archived_at),z=`@${Q.agent_name} — ${Q.chat_jid}${Q.is_active?" • active":""}${A?" • archived":""}`;return O`
                                        <button
                                            key=${Q.chat_jid}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item${A?" archived":""}`}
                                            onClick=${()=>{if(A){p$(Q.chat_jid);return}g$(Q.chat_jid)}}
                                            disabled=${A?!A0:!G$}
                                            title=${A?"Restore this archived branch":"Switch to this session"}
                                        >
                                            ${z}
                                        </button>
                                    `})}
                            </div>
                            ${(A$||w$||s_)&&O`
                                <div class="compose-model-popup-actions">
                                    ${A$&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{h0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${w$&&O`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${()=>{_$()}}
                                            title="Rename current branch name and agent handle"
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${s_&&O`
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
                    ${!j&&S&&O`
                    <div class="compose-meta-row">
                        ${!j&&S&&O`
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
                                    ${!A_&&m0&&O`
                                        <span class="compose-model-usage-hint" title=${w_}>
                                            ${m0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&O`
                            <${L5} usage=${I} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${M0&&O`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${e0.map((Q)=>O`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>c$(Q)}
                                    title=${`${Q.chat_jid||"Active agent"} — switch to @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${P0&&O`
                        ${f_?.agent_name&&O`
                            <span
                                class="compose-current-agent-label"
                                title=${f_.chat_jid||G_}
                                onClick=${H$}
                            >@${f_.agent_name}</span>
                        `}
                        <button
                            ref=${O0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${l_?" active":""}`}
                            onClick=${H$}
                            title=${l_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${l_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&O`
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
                        onClick=${j?X:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:O`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${W$&&!j&&O`
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
                    ${t0&&!j&&O`
                        <button
                            class=${`icon-btn notification-btn${U$?" active":""}`}
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
                    ${!j&&O`
                        ${n&&Z_&&O`
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
                    ${(J_!=="connected"||!j)&&O`
                        <div class="compose-send-stack">
                            ${J_!=="connected"&&O`
                                <span class="compose-connection-status connection-status ${J_}" title=${H0}>
                                    ${u$}
                                </span>
                            `}
                            ${!j&&O`
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
    `}var t3="piclaw_theme",Q4="piclaw_tint",e3="piclaw_chat_themes",g2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},_8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r3={default:{label:"Default",mode:"auto",light:g2,dark:_8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},Q5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],z2={theme:"default",tint:null},$8="light",q4=!1;function Q1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function y2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function B5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),Y=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,Y,X].every((V)=>Number.isFinite(V)))return null;let L=`#${[K,Y,X].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:Y,b:X,hex:L}}function j8(_){return y2(_)||B5(_)}function m2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function L4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function U5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*Y}function O5(_){return U5(_)>0.4?"#000000":"#ffffff"}function Z8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function B4(_){return r3[_]||r3.default}function F5(_){return _.mode==="auto"?Z8():_.mode}function N8(_,$){let j=B4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||g2}function K8(_,$,j){let Z=j8($);if(!Z)return _;let N=y2(_.bgPrimary),K=y2(_.bgSecondary),Y=y2(_.bgHover),X=y2(_.borderColor);if(!N||!K||!Y||!X)return _;let V=y2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:m2(N,Z,0.08),bgSecondary:m2(K,Z,0.12),bgHover:m2(Y,Z,0.16),borderColor:m2(X,Z,0.08),accent:Z.hex,accentHover:V?m2(Z,V,0.18):Z.hex}}function H5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=j8(Z),K=N?L4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=N?L4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?L4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?O5(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Y,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||g2.danger,"--success-color":_.success||g2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,q])=>{if(q)j.style.setProperty(B,q)})}function D5(){if(typeof document>"u")return;let _=document.documentElement;Q5.forEach(($)=>_.style.removeProperty($))}function J2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function a3(_){let $=Q1(z2?.theme||"default"),j=z2?.tint?String(z2.tint).trim():null,Z=N8($,_);if($==="default"&&j)Z=K8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?_8.bgPrimary:g2.bgPrimary}function J5(_,$){if(typeof document>"u")return;let j=J2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=J2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",a3("light"));let N=J2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",a3("dark"));let K=J2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let Y=J2("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let X=J2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function y5(){if(typeof window>"u")return;let _={...z2,mode:$8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function Y8(){try{let _=s0(e3);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function E5(_,$,j){let Z=Y8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};$0(e3,JSON.stringify(Z))}function k5(_){if(!_)return null;return Y8()[_]||null}function z8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function U4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=Q1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=B4(j),K=F5(N),Y=N8(j,K);z2={theme:j,tint:Z},$8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=Y;if(j==="default"&&Z)L=K8(Y,Z,K);if(j==="default"&&!Z)D5();else H5(L,K);if(J5(L.bgPrimary,K),y5(),$.persist!==!1)if($0(t3,j),Z)$0(Q4,Z);else $0(Q4,"")}function L1(){if(B4(z2.theme).mode!=="auto")return;U4(z2,{persist:!1})}function W8(){if(typeof window>"u")return()=>{};let _=z8(),$=k5(_),j=$?Q1($.theme||"default"):Q1(s0(t3)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=s0(Q4);return N?N.trim():null})();if(U4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!q4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",L1);else if(N.addListener)N.addListener(L1);return q4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",L1);else if(N.removeListener)N.removeListener(L1);q4=!1}}return()=>{}}function G8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||z8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;E5($,j||"default",Z),U4({theme:j||"default",tint:Z},{persist:!0})}function X8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return Z8()}var B1=/#(\w+)/g,w5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),A5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),P5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),b5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},x5=new Set(["http:","https:","mailto:",""]);function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!x5.has(Z.protocol))return null;return Z.href}catch{return null}}function V8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let Y of Z){let X=Y.tagName.toLowerCase();if(!A5.has(X)){let V=Y.parentNode;if(!V)continue;while(Y.firstChild)V.insertBefore(Y.firstChild,Y);V.removeChild(Y);continue}let L=b5[X]||new Set;for(let V of Array.from(Y.attributes)){let B=V.name.toLowerCase(),q=V.value;if(B.startsWith("on")){Y.removeAttribute(V.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(L.has(B)||P5.has(B)){if(B==="href"){let D=W2(q);if(!D)Y.removeAttribute(V.name);else if(Y.setAttribute(V.name,D),X==="a"&&!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let D=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,E=W2(D,{allowDataImage:X==="img"});if(!E)Y.removeAttribute(V.name);else Y.setAttribute(V.name,E)}continue}Y.removeAttribute(V.name)}}return j.body.innerHTML}function q8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function U1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=q8(j);if(N===j)break;j=N}return j}function I5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,Y=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,Y=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(Y.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,Y=[];continue}if(K)Y.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...Y);return{text:N.join(`
`),blocks:Z}}function M5(_){if(!_)return _;return U1(_,5)}function C5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function T5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function S5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",Y=M5(K);return`<div class="mermaid-container" data-mermaid="${C5(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function L8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var f5={span:new Set(["title","class","lang","dir"])};function R5(_,$){let j=f5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let Y=(K[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${Y}="${O4(X)}"`)}return Z.join("")}function Q8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[L=""]=X.split(/\s+/,1),V=L.toLowerCase();if(!V||!w5.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let B=X.slice(L.length).trim(),q=R5(V,B);return`<${V}${q}>`})}function B8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function U8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function v5(_){if(!window.katex)return _;let $=(Y)=>q8(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let X=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let B=X.length;return X.push(V),`@@CODE_BLOCK_${B}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let B=X.length;return X.push(V),`@@CODE_INLINE_${B}@@`}),{html:L,blocks:X}},Z=(Y,X)=>{if(!X.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,V)=>{let B=Number(V);return X[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,X,L)=>{try{let V=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${V}`}catch(V){return`<span class="math-error" title="${O4(V.message)}">${Y}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Y,X,L)=>{if(/\s$/.test(L))return Y;try{let V=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${V}`}catch(V){return`${X}<span class="math-error" title="${O4(V.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function u5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let Y=K.nodeValue;if(!Y)continue;if(B1.lastIndex=0,!B1.test(Y))continue;B1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=Y.split(B1);if(L.length<=1)continue;let V=$.createDocumentFragment();L.forEach((B,q)=>{if(q%2===1){let D=$.createElement("a");D.setAttribute("href","#"),D.className="hashtag",D.setAttribute("data-hashtag",B),D.textContent=`#${B}`,V.appendChild(D)}else V.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(V,K)}return $.body.innerHTML}function m5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function r0(_,$,j={}){if(!_)return"";let Z=m5(_),{text:N,blocks:K}=I5(Z),Y=U1(N,2),L=L8(Y).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=Q8(L),B=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return B=B8(B),B=U8(B),B=v5(B),B=u5(B),B=S5(B,K),B=V8(B,j),B}function O1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=U1($,2),N=L8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=Q8(N),Y=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return Y=B8(Y),Y=U8(Y),Y=V8(Y),Y}function g5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let Y=N.trim().split(/\s+/).map((L)=>{let[V,B]=L.split(",").map(Number);return{x:V,y:B}});if(Y.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let V=Y[L-1],B=Y[L],q=Y[L+1],D=B.x-V.x,E=B.y-V.y,S=q.x-B.x,v=q.y-B.y,R=Math.sqrt(D*D+E*E),P=Math.sqrt(S*S+v*v),I=Math.min($,R/2,P/2);if(I<0.5){X.push(`L ${B.x},${B.y}`);continue}let g=B.x-D/R*I,J=B.y-E/R*I,m=B.x+S/P*I,o=B.y+v/P*I,n=D*v-E*S>0?1:0;X.push(`L ${g},${J}`),X.push(`A ${I},${I} 0 0 ${n} ${m},${o}`)}return X.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function T$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=X8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of K)try{let X=Y.dataset.mermaid,L=T5(X||""),V=U1(L,2),B=await $(V,{...N,transparent:!0});B=g5(B),Y.innerHTML=B,Y.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}function O8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function F8(_){return String(_||"").trim()||"web:default"}function H8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function D8(_){if(!_)return!1;return _.status!=="running"}function J8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function y8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),K=k(null),Y=_?.thinking?O1(_.thinking):"",X=_?.answer?r0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&Y)T$(N.current).catch(()=>{})},[Y]),f(()=>{if(K.current&&X)T$(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",V=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),q=H8(_),D=D8(_),E=!L&&V,S=L?"Thinking…":_.status==="error"?"Error":"Done";return O`
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

            ${_.question&&O`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&O`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&O`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${q&&O`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${D&&O`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&O`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!E}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var E8="PiClaw";function F4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=N.charCodeAt(0)%K.length,X=K[Y],L=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",B=V?V:null,q=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:B||(q?"/static/icon-192.png":null)}}function k8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function w8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function A8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,Y=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function p5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function p2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function P8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return p2(_)?"Compacting context":"Working..."}function c5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function b8(_,$=Date.now()){let j=p5(_);if(j===null)return null;return c5(Math.max(0,$-j))}function x8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:Y,steerQueued:X,onPanelToggle:L}){let q=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let m_=r,c_=m_?m_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:m_,totalLines:c_,fullText:m_}}let U_=r.text||"",Y_=r.fullText||r.full_text||U_,T_=Number.isFinite(r.totalLines)?r.totalLines:Y_?Y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:U_,totalLines:T_,fullText:Y_}},D=160,E=(r)=>String(r||"").replace(/<\/?internal>/gi,""),S=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},v=(r,U_,Y_)=>{let T_=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!T_)return{text:"",omitted:0,totalLines:Number.isFinite(Y_)?Y_:0,visibleLines:0};let m_=T_.split(`
`),c_=m_.length>U_?m_.slice(0,U_).join(`
`):T_,Y0=Number.isFinite(Y_)?Y_:m_.reduce((H_,j0)=>H_+S(j0),0),h_=c_?c_.split(`
`).reduce((H_,j0)=>H_+S(j0),0):0,y_=Math.max(Y0-h_,0);return{text:c_,omitted:y_,totalLines:Y0,visibleLines:h_}},R=q(j),P=q(Z),I=q($),g=Boolean(R.text)||R.totalLines>0,J=Boolean(P.text)||P.totalLines>0,m=Boolean(I.fullText?.trim()||I.text?.trim());if(!_&&!m&&!g&&!J&&!N&&!K)return null;let[o,__]=T(new Set),[n,Z_]=T(()=>Date.now()),i=(r)=>__((U_)=>{let Y_=new Set(U_),T_=!Y_.has(r);if(T_)Y_.add(r);else Y_.delete(r);if(typeof L==="function")L(r,T_);return Y_});f(()=>{__(new Set)},[Y]);let X_=p2(_);f(()=>{if(!X_)return;Z_(Date.now());let r=setInterval(()=>Z_(Date.now()),1000);return()=>clearInterval(r)},[X_,_?.started_at,_?.startedAt]);let o_=_?.turn_id||Y,t=A8(o_),a=X?"turn-dot turn-dot-queued":"turn-dot",K_=(r)=>r,$_=Boolean(_?.last_activity||_?.lastActivity),W_=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":t,O_=K?.kind||"info",G_=W_(O_),J_=W_(_?.kind||(X_?"warning":"info")),Q_="",M_=_?.title,u_=_?.status;if(_?.type==="plan")Q_=M_?`Planning: ${M_}`:"Planning...";else if(_?.type==="tool_call")Q_=M_?`Running: ${M_}`:"Running tool...";else if(_?.type==="tool_status")Q_=M_?`${M_}: ${u_||"Working..."}`:u_||"Working...";else if(_?.type==="error")Q_=M_||"Agent error";else Q_=M_||u_||"Working...";if($_)Q_="Last activity just now";let F_=({panelTitle:r,text:U_,fullText:Y_,totalLines:T_,maxLines:m_,titleClass:c_,panelKey:Y0})=>{let h_=o.has(Y0),y_=Y_||U_||"",H_=Y0==="thought"||Y0==="draft"?E(y_):y_,j0=typeof m_==="number",N0=h_&&j0,S_=j0?v(H_,m_,T_):{text:H_||"",omitted:0,totalLines:Number.isFinite(T_)?T_:0};if(!H_&&!(Number.isFinite(S_.totalLines)&&S_.totalLines>0))return null;let b_=`agent-thinking-body${j0?" agent-thinking-body-collapsible":""}`,a_=j0?`--agent-thinking-collapsed-lines: ${m_};`:"";return O`
            <div
                class="agent-thinking"
                data-expanded=${h_?"true":"false"}
                data-collapsible=${j0?"true":"false"}
                style=${t?`--turn-color: ${t};`:""}
            >
                <div class="agent-thinking-title ${c_||""}">
                    ${t&&O`<span class=${a} aria-hidden="true"></span>`}
                    ${r}
                    ${N0&&O`
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
                ${!h_&&S_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>i(Y0)}>
                        ▸ ${S_.omitted} more lines
                    </button>
                `}
                ${h_&&S_.omitted>0&&O`
                    <button class="agent-thinking-truncation" onClick=${()=>i(Y0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},C_=N?.tool_call?.title,p_=C_?`Awaiting approval: ${C_}`:"Awaiting approval",W0=X_?b8(_,n):null,V_=(r,U_,Y_=null)=>{let T_=P8(r);return O`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${U_?`--turn-color: ${U_};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${U_&&O`<span class=${a} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${T_}</span>
                    ${Y_&&O`<span class="agent-status-elapsed">${Y_}</span>`}
                </div>
                ${r.detail&&O`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `};return O`
        <div class="agent-status-panel">
            ${K&&V_(K,G_)}
            ${_?.type==="intent"&&V_(_,J_,W0)}
            ${N&&O`
                <div class="agent-status agent-status-request" aria-live="polite" style=${t?`--turn-color: ${t};`:""}>
                    <span class=${a} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${p_}</span>
                </div>
            `}
            ${g&&F_({panelTitle:K_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${J&&F_({panelTitle:K_("Thoughts"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${m&&F_({panelTitle:K_("Draft"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&O`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${t?`--turn-color: ${t};`:""}>
                    ${t&&O`<span class=${a} aria-hidden="true"></span>`}
                    ${_?.type==="error"?O`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&O`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Q_}</span>
                </div>
            `}
        </div>
    `}function I8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,Y=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},V=L.command||L.commands&&L.commands[0]||null,B=L.diff||null,q=L.fileName||L.path||null,D=Z?.description||L.description||L.explanation||null,S=(Array.isArray(Z?.locations)?Z.locations:[]).map((g)=>g?.path).filter((g)=>Boolean(g)),v=Array.from(new Set([q,...S].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(g)=>{try{await z1(j,g,K||null),$()}catch(J){console.error("Failed to respond to agent request:",J)}},P=async()=>{try{await e1(Y,`Auto-approved: ${Y}`),await z1(j,"approved",K||null),$()}catch(g){console.error("Failed to add to whitelist:",g)}},I=N&&N.length>0;return O`
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
                ${(D||V||B||v.length>0)&&O`
                    <div class="agent-request-body">
                        ${D&&O`
                            <div class="agent-request-description">${D}</div>
                        `}
                        ${v.length>0&&O`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((g,J)=>O`<li key=${J}>${g}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&O`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${B&&O`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${I?N.map((g)=>O`
                            <button 
                                key=${g.optionId||g.id||String(g)}
                                class="agent-request-btn ${g.kind==="allow_once"||g.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(g.optionId||g.id||g)}
                            >
                                ${g.name||g.label||g.optionId||g.id||String(g)}
                            </button>
                        `):O`
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
    `}function M8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${V}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${X}`}function c2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function Y$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function G2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var h5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),i5=new Set(["text/markdown"]),l5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),n5=new Set(["application/vnd.jgraph.mxfile"]);function h2(_){return typeof _==="string"?_.trim().toLowerCase():""}function d5(_){let $=h2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function o5(_){let $=h2(_);return!!$&&$.endsWith(".pdf")}function s5(_){let $=h2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function i2(_,$){let j=h2(_);if(d5($)||n5.has(j))return"drawio";if(o5($)||j==="application/pdf")return"pdf";if(s5($)||l5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(h5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function C8(_){let $=h2(_);return i5.has($)}function T8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function r5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function a5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((Y)=>Number.isFinite(Y)))return null;return{r:Z,g:N,b:K}}function S8(_){return r5(_)||a5(_)}function F1(_){let $=(K)=>{let Y=K/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function t5(_,$){let j=Math.max(F1(_),F1($)),Z=Math.min(F1(_),F1($));return(j+0.05)/(Z+0.05)}function e5(_,$,j="#ffffff"){let Z=S8(_);if(!Z)return j;let N=j,K=-1;for(let Y of $){let X=S8(Y);if(!X)continue;let L=t5(Z,X);if(L>K)N=Y,K=L}return N}function H4(){let _=getComputedStyle(document.documentElement),$=(S,v)=>{for(let R of S){let P=_.getPropertyValue(R).trim();if(P)return P}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),D=$(["--font-family"],"system-ui, sans-serif"),E=e5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:Y,accent:X,good:L,warning:V,attention:B,border:q,fontFamily:D,buttonTextColor:E}}function f8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:Y,attention:X,border:L,fontFamily:V}=H4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:Y,subtle:Y},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var _7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),R8=!1,H1=null,v8=!1;function D4(_){_.querySelector(".adaptive-card-notice")?.remove()}function $7(_,$,j="error"){D4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function j7(_,$=(j)=>r0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Z7(_=($)=>r0($,null)){return($,j)=>{try{let Z=j7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function N7(_){if(v8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Z7(),v8=!0}async function K7(){if(R8)return;if(H1)return H1;return H1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{R8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),H1}function Y7(){return globalThis.AdaptiveCards}function z7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function W7(_){return _7.has(_)}function y4(_){if(!Array.isArray(_))return[];return _.filter(z7)}function G7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function J4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${J4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function X7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J4($);return typeof $==="string"?$:String($)}function V7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let Y={...N};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=X7(Y.type,j[Y.id],Y);for(let[X,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[X]=Z(L);return Y};return Z(_)}function q7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function L7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Q7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=L7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function u8(_,$,j){if(!W7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await K7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Y7();N7(Z);let N=new Z.AdaptiveCard,K=H4();N.hostConfig=new Z.HostConfig(f8());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:V7($.payload,Y);N.parse(X),N.onExecuteAction=(B)=>{let q=G7(B);if(j?.onAction)D4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((D)=>{console.error("[adaptive-card] Action failed:",D);let E=D instanceof Error?D.message:String(D||"Action failed.");$7(_,E||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let V=Q7($);if(V){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=V.label,B.appendChild(q),V.detail){let D=document.createElement("span");D.className="adaptive-card-status-detail",D.textContent=V.detail,B.appendChild(D)}_.appendChild(B)}if(D4(_),_.appendChild(L),V)q7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function m8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l2(j)})).filter(($)=>$.value)}function B7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function E4(_){if(!Array.isArray(_))return[];return _.filter(B7)}function g8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=m8(j).map(({key:K,value:Y})=>`${K}: ${Y}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function p8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=m8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:Y})=>`${K}: ${Y}`).join(", "):l2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function U7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?Y$($):null},{label:"Added",value:_?.created_at?G2(_.created_at):null}].filter((Z)=>Z.value)}function O7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=K$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function c8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>i2($?.content_type,Z),[$?.content_type,Z]),K=T8(N),Y=n_(()=>C8($?.content_type),[$?.content_type]),[X,L]=T(N==="text"),[V,B]=T(""),[q,D]=T(null),E=k(null),S=n_(()=>U7($),[$]),v=n_(()=>O7(_,Z,N),[_,Z,N]),R=n_(()=>{if(!Y||!V)return"";return r0(V)},[Y,V]);return f(()=>{let P=(I)=>{if(I.key==="Escape")j()};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[j]),f(()=>{if(!E.current||!R)return;T$(E.current);return},[R]),f(()=>{let P=!1;async function I(){if(N!=="text"){L(!1),D(null);return}L(!0),D(null);try{let g=await Z4(_);if(!P)B(g)}catch{if(!P)D("Failed to load text preview.")}finally{if(!P)L(!1)}}return I(),()=>{P=!0}},[_,N]),O`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(P)=>{P.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&O`
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
                            href=${K$(_)}
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
                    ${X&&O`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&q&&O`<div class="attachment-preview-state">${q}</div>`}
                    ${!X&&!q&&N==="image"&&O`
                        <img class="attachment-preview-image" src=${K$(_)} alt=${Z} />
                    `}
                    ${!X&&!q&&(N==="pdf"||N==="office"||N==="drawio")&&v&&O`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!X&&!q&&N==="drawio"&&O`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!q&&N==="text"&&Y&&O`
                        <div
                            ref=${E}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!X&&!q&&N==="text"&&!Y&&O`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!X&&!q&&N==="unsupported"&&O`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${S.map((P)=>O`
                        <div class="attachment-preview-meta-item" key=${P.label}>
                            <span class="attachment-preview-meta-label">${P.label}</span>
                            <span class="attachment-preview-meta-value">${P.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function h8({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),O`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function F7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{F2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,Y=K?Y$(K):"",L=i2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return O`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${K$(_)} download=${N} class="file-attachment-main">
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
                        ${Y&&O`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&O`<span class="file-size">${j.content_type}</span>`}
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
    `}function H7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;F2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?K$(j):null,L=i2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return O`
        <span class="attachment-pill" title=${K}>
            ${Y?O`
                    <a href=${Y} download=${K} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${L$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:O`
                    <${L$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&O`
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
    `}function D1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?G2(Z):null;return O`
        <div class="content-annotations">
            ${$&&$.length>0&&O`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&O`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&O`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function D7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?Y$(_.size):"",N=_.mime_type||"",K=y7(N),Y=W2(_.uri);return O`
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
                ${j&&O`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&O`<span>${N}</span>`}
                    ${Z&&O`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function J7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),Y=_.mime_type||"";return O`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&O`
                ${N&&O`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&O`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&O`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:Y||"application/octet-stream"}),V=URL.createObjectURL(L),B=document.createElement("a");B.href=V,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function y7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function E7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return O`
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
                ${_.description&&O`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function k7(_,$){return typeof _==="string"?_:""}var w7=1800,A7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,P7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,b7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function x7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function I7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,Y)=>{let X=Y||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=P7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=b7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=A7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let Y=document.createElement("div");Y.className="post-code-block",K.parentNode?.insertBefore(Y,K),Y.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),Y.appendChild(X);let L=async(V)=>{V.preventDefault(),V.stopPropagation();let q=K.querySelector("code")?.textContent||"",D=await x7(q);N(X,D?"success":"error");let E=j.get(X);if(E)clearTimeout(E);let S=setTimeout(()=>{N(X,"idle"),j.delete(X)},w7);j.set(X,S)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let V=j.get(X);if(V)clearTimeout(V);if(Y.parentNode)Y.parentNode.insertBefore(K,Y),Y.remove()})}),()=>{Z.forEach((K)=>K())}}function M7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function C7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let q=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function T7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1){let B=j[V].trim();if((B==="Images:"||B==="Attachments:")&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let V=j[K];if(/^\s*-\s+/.test(V)){let B=V.replace(/^\s*-\s+/,"").trim(),q=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let D=q[1],E=(q[2]||"").trim()||D;N.push({id:D,label:E,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let Y=j.slice(0,Z),X=j.slice(K),L=[...Y,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function S7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function f7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(S7).sort((B,q)=>q.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),X=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],V;while(V=X.nextNode())L.push(V);for(let B of L){let q=B.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let D=B.parentElement;if(D&&D.closest("code, pre, script, style"))continue;let E=q.split(N).filter((v)=>v!=="");if(E.length===0)continue;let S=Y.createDocumentFragment();for(let v of E)if(K.test(v)){let R=Y.createElement("mark");R.className="search-highlight-term",R.textContent=v,S.appendChild(R)}else S.appendChild(Y.createTextNode(v));B.parentNode.replaceChild(S,B)}return Y.body.innerHTML}function i8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:Y,userName:X,userAvatarUrl:L,userAvatarBackground:V,onDelete:B,isThreadReply:q,isThreadPrev:D,isThreadNext:E,isRemoving:S,highlightQuery:v,onFileRef:R}){let[P,I]=T(null),g=k(null),J=_.data,m=J.type==="agent_response",o=X||"You",__=m?K||E8:o,n=m?F4(K,Y,!0):F4(o,L),Z_=typeof V==="string"?V.trim().toLowerCase():"",i=!m&&n.image&&(Z_==="clear"||Z_==="transparent"),X_=m&&Boolean(n.image),o_=`background-color: ${i||X_?"transparent":n.color}`,t=J.content_meta,a=Boolean(t?.truncated),K_=Boolean(t?.preview),$_=a&&!K_,W_=a?{originalLength:Number.isFinite(t?.original_length)?t.original_length:J.content?J.content.length:0,maxLength:Number.isFinite(t?.max_length)?t.max_length:0}:null,O_=J.content_blocks||[],G_=J.media_ids||[],J_=k7(J.content,J.link_previews),{content:Q_,fileRefs:M_}=M7(J_),{content:u_,messageRefs:F_}=C7(Q_),{content:C_,attachments:p_}=T7(u_);J_=C_;let W0=y4(O_),V_=E4(O_),r=W0.length===1&&typeof W0[0]?.fallback_text==="string"?W0[0].fallback_text.trim():"",U_=V_.length===1?g8(V_[0]).trim():"",Y_=Boolean(r)&&J_?.trim()===r||Boolean(U_)&&J_?.trim()===U_,T_=Boolean(J_)&&!$_&&!Y_,m_=typeof v==="string"?v.trim():"",c_=n_(()=>{if(!J_||Y_)return"";let C=r0(J_,j);return m_?f7(C,m_):C},[J_,Y_,m_]),Y0=(C,e)=>{C.stopPropagation(),I(K$(e))},[h_,y_]=T(null),H_=(C)=>{y_(C)},j0=(C)=>{C.stopPropagation(),B?.(_)},N0=(C,e)=>{let E_=new Set;if(!C||e.length===0)return{content:C,usedIds:E_};return{content:C.replace(/attachment:([^\s)"']+)/g,(e_,S0,B_,x0)=>{let c0=S0.replace(/^\/+/,""),u0=e.find((O0)=>O0.name&&O0.name.toLowerCase()===c0.toLowerCase()&&!E_.has(O0.id))||e.find((O0)=>!E_.has(O0.id));if(!u0)return e_;if(E_.add(u0.id),x0.slice(Math.max(0,B_-2),B_)==="](")return`/media/${u0.id}`;return u0.name||"attachment"}),usedIds:E_}},S_=[],b_=[],a_=[],Z0=[],p0=[],E0=[],g_=0;if(O_.length>0)O_.forEach((C)=>{if(C?.type==="text"&&C.annotations)E0.push(C.annotations);if(C?.type==="resource_link")Z0.push(C);else if(C?.type==="resource")p0.push(C);else if(C?.type==="file"){let e=G_[g_++];if(e)b_.push(e),a_.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=G_[g_++];if(e){let E_=typeof C?.mime_type==="string"?C.mime_type:void 0;S_.push({id:e,annotations:C?.annotations,mimeType:E_}),a_.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(G_.length>0){let C=p_.length>0;G_.forEach((e,E_)=>{let D_=p_[E_]||null;if(a_.push({id:e,name:D_?.label||null}),C)b_.push(e);else S_.push({id:e,annotations:null})})}if(p_.length>0)p_.forEach((C)=>{if(!C?.id)return;let e=a_.find((E_)=>String(E_.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:i_,usedIds:A_}=N0(J_,a_);J_=i_;let L0=S_.filter(({id:C})=>!A_.has(C)),G0=b_.filter((C)=>!A_.has(C)),x_=p_.length>0?p_.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):a_.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),l_=n_(()=>y4(O_),[O_]),t_=n_(()=>E4(O_),[O_]),I_=n_(()=>{return l_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[l_]);f(()=>{if(!g.current)return;return T$(g.current),I7(g.current)},[c_]);let U0=k(null);return f(()=>{if(!U0.current||l_.length===0)return;let C=U0.current;C.innerHTML="";for(let e of l_){let E_=document.createElement("div");C.appendChild(E_),u8(E_,e,{onAction:async(D_)=>{if(D_.type==="Action.OpenUrl"){let e_=W2(D_.url||"");if(!e_)throw Error("Invalid URL");window.open(e_,"_blank","noopener,noreferrer");return}if(D_.type==="Action.Submit"){await t1({post_id:_.id,thread_id:J.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:D_.type,title:D_.title||"",data:D_.data}});return}console.warn("[post] unsupported adaptive card action:",D_.type,D_)}}).catch((D_)=>{console.error("[post] adaptive card render error:",D_),E_.textContent=e.fallback_text||"Card failed to render."})}},[I_,_.id]),O`
        <div id=${`post-${_.id}`} class="post ${m?"agent-post":""} ${q?"thread-reply":""} ${D?"thread-prev":""} ${E?"thread-next":""} ${S?"removing":""}" onClick=${$}>
            <div class="post-avatar ${m?"agent-avatar":""} ${n.image?"has-image":""}" style=${o_}>
                ${n.image?O`<img src=${n.image} alt=${__} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${j0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${__}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${M8(_.timestamp)}</a>
                </div>
                ${$_&&W_&&O`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${c2(W_.originalLength)} chars
                            ${W_.maxLength?O` • Display limit: ${c2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&W_&&O`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${c2(W_.maxLength)} of ${c2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(M_.length>0||F_.length>0||x_.length>0)&&O`
                    <div class="post-file-refs">
                        ${F_.map((C)=>{let e=(E_)=>{if(E_.preventDefault(),E_.stopPropagation(),N)N(C,_.chat_jid||null);else{let D_=document.getElementById("post-"+C);if(D_)D_.scrollIntoView({behavior:"smooth",block:"center"}),D_.classList.add("post-highlight"),setTimeout(()=>D_.classList.remove("post-highlight"),2000)}};return O`
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
                        ${M_.map((C)=>{let e=C.split("/").pop()||C;return O`
                                <${L$}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>R?.(C)}
                                />
                            `})}
                        ${x_.map((C)=>O`
                            <${H7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${H_}
                            />
                        `)}
                    </div>
                `}
                ${T_&&O`
                    <div 
                        ref=${g}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:c_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),I(C.target.src)}}
                    />
                `}
                ${l_.length>0&&O`
                    <div ref=${U0} class="post-adaptive-cards" />
                `}
                ${t_.length>0&&O`
                    <div class="post-adaptive-card-submissions">
                        ${t_.map((C,e)=>{let E_=p8(C),D_=`${C.card_id}-${e}`;return O`
                                <div key=${D_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${E_.title}</span>
                                        </div>
                                    </div>
                                    ${E_.fields.length>0&&O`
                                        <div class="adaptive-card-submission-fields">
                                            ${E_.fields.map((e_)=>O`
                                                <span class="adaptive-card-submission-field" title=${`${e_.key}: ${e_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${e_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${e_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${G2(E_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${E0.length>0&&O`
                    ${E0.map((C,e)=>O`
                        <${D1} key=${e} annotations=${C} />
                    `)}
                `}
                ${L0.length>0&&O`
                    <div class="media-preview">
                        ${L0.map(({id:C,mimeType:e})=>{let D_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?K$(C):j4(C);return O`
                                <img 
                                    key=${C} 
                                    src=${D_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(e_)=>Y0(e_,C)}
                                />
                            `})}
                    </div>
                `}
                ${L0.length>0&&O`
                    ${L0.map(({annotations:C},e)=>O`
                        ${C&&O`<${D1} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${G0.length>0&&O`
                    <div class="file-attachments">
                        ${G0.map((C)=>O`
                            <${F7} key=${C} mediaId=${C} onPreview=${H_} />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&O`
                    <div class="resource-links">
                        ${Z0.map((C,e)=>O`
                            <div key=${e}>
                                <${D7} block=${C} />
                                <${D1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${p0.length>0&&O`
                    <div class="resource-embeds">
                        ${p0.map((C,e)=>O`
                            <div key=${e}>
                                <${J7} block=${C} />
                                <${D1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J.link_previews?.length>0&&O`
                    <div class="link-previews">
                        ${J.link_previews.map((C,e)=>O`
                            <${E7} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${P&&O`<${h8} src=${P} onClose=${()=>I(null)} />`}
        ${h_&&O`
            <${c8}
                mediaId=${h_.mediaId}
                info=${h_.info}
                onClose=${()=>y_(null)}
            />
        `}
    `}function l8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:Y,onFileRef:X,emptyMessage:L,timelineRef:V,agents:B,user:q,onDeletePost:D,reverse:E=!0,removingPostIds:S,searchQuery:v}){let[R,P]=T(!1),I=k(null),g=typeof IntersectionObserver<"u",J=x(async()=>{if(!j||!$||R)return;P(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{P(!1)}},[$,R,j]),m=x((t)=>{let{scrollTop:a,scrollHeight:K_,clientHeight:$_}=t.target,W_=E?K_-$_-a:a,O_=Math.max(300,$_);if(W_<O_)J()},[E,J]);f(()=>{if(!g)return;let t=I.current,a=V?.current;if(!t||!a)return;let K_=300,$_=new IntersectionObserver((W_)=>{for(let O_ of W_){if(!O_.isIntersecting)continue;J()}},{root:a,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return $_.observe(t),()=>$_.disconnect()},[g,$,j,V,J]);let o=k(J);if(o.current=J,f(()=>{if(g)return;if(!V?.current)return;let{scrollTop:t,scrollHeight:a,clientHeight:K_}=V.current,$_=E?a-K_-t:t,W_=Math.max(300,K_);if($_<W_)o.current?.()},[g,_,$,E,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:t,scrollHeight:a,clientHeight:K_}=V.current,$_=E?a-K_-t:t,W_=Math.max(300,K_);if(a<=K_+1||$_<W_)o.current?.()},[_,$,R,E,V]),!_)return O`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return O`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let __=_.slice().sort((t,a)=>t.id-a.id),n=(t)=>{let a=t?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let K_=Number(a);return Number.isFinite(K_)?K_:null},Z_=new Map;for(let t=0;t<__.length;t+=1){let a=__[t],K_=Number(a?.id),$_=n(a);if($_!==null){let W_=Z_.get($_)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(t),Z_.set($_,W_)}else if(Number.isFinite(K_)){let W_=Z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=t,Z_.set(K_,W_)}}let i=new Map;for(let[t,a]of Z_.entries()){let K_=new Set;if(a.anchorIndex>=0)K_.add(a.anchorIndex);for(let $_ of a.replyIndexes)K_.add($_);i.set(t,Array.from(K_).sort(($_,W_)=>$_-W_))}let X_=__.map((t,a)=>{let K_=n(t);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.get(K_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=$_.indexOf(a);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<$_.length-1}}),o_=O`<div class="timeline-sentinel" ref=${I}></div>`;return O`
        <div class="timeline ${E?"reverse":"normal"}" ref=${V} onScroll=${m}>
            <div class="timeline-content">
                ${E?o_:null}
                ${__.map((t,a)=>{let K_=Boolean(t.data?.thread_id&&t.data.thread_id!==t.id),$_=S?.has?.(t.id),W_=X_[a]||{};return O`
                    <${i8}
                        key=${t.id}
                        post=${t}
                        isThreadReply=${K_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${k8(t.data?.agent_id,B||{})}
                        agentAvatarUrl=${w8(t.data?.agent_id,B||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(t)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${Y}
                        onFileRef=${X}
                        onDelete=${D}
                    />
                `})}
                ${E?null:o_}
            </div>
        </div>
    `}class n8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var r_=new n8;var J1=null,k4=null;function R7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function d8(){if(k4)return Promise.resolve(k4);if(!J1)J1=import(R7()).then((_)=>{return k4=_,_}).catch((_)=>{throw J1=null,_});return J1}class o8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await d8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var w4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new o8(_,$)}};function A4(){d8().catch(()=>{})}var b4="piclaw://terminal";var v7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},u7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},y1=null,P4=null;function m7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function g7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let Y=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!m7(Y))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function p7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!y1)y1=g7(()=>Promise.resolve($.init?.())).catch((j)=>{throw y1=null,j});return await y1,$}async function c7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!P4)P4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await P4}async function h7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function i7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function l7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function S$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function n7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function s8(){let _=l7(),$=_?u7:v7,j=S$("--bg-primary",_?"#000000":"#ffffff"),Z=S$("--text-primary",_?"#e7e9ea":"#0f1419"),N=S$("--text-secondary",_?"#71767b":"#536471"),K=S$("--accent-color","#1d9bf0"),Y=S$("--danger-color",_?"#ff7b72":"#cf222e"),X=S$("--success-color",_?"#7ee787":"#1a7f37"),L=S$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=S$("--border-color",_?"#2f3336":"#eff3f4"),B=S$("--accent-soft-strong",n7(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:L,red:Y,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class x4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await p7();if(await c7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:s8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=s8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await h7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(i7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var I4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new x4(_,$)}},M4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new x4(_,$)}};function a$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",Y=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,B=[];for(let D of V.split("/")){if(!D||D===".")continue;if(D===".."){if(B.length>0)B.pop();continue}B.push(D)}let q=B.join("/");return`${G1(q)}${K}${Y}`}function n2(_){return _?.preview||null}function o7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function s7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function r7(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${a$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${a$(Y$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${a$(G2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${a$(s7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${a$(o7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${a$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function a7(_){let $=n2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=r7(_,$);if($.kind==="image"){let Z=$.url||($.path?G1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${a$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=r0($.text||"",null,{rewriteImageSrc:(N)=>d7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${a$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class C4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=a7(this.context)}getContent(){let _=n2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=n2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var T4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=n2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new C4(_,$)}},S4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return n2(_)||_?.path?1:!1},mount(_,$){return new C4(_,$)}};var t7=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),e7={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},_j={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function a8(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function r8(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class t8{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=a8(j),K=_j[N]||"\uD83D\uDCC4",Y=e7[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${r8(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${r8(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class e8{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=a8(_?.path);if(!$||!t7.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new t8(_,$);return new e8(_,$)}};var $j=/\.(csv|tsv)$/i;function _6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class $6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${_6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${_6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let Y=K.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class j6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$j.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new $6(_,$);return new j6(_,$)}};var jj=/\.pdf$/i;function Zj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Z6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Zj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class N6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!jj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new Z6(_,$);return new N6(_,$)}};var Nj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function u4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class K6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
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
        `,_.appendChild(K);let Y=K.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Y6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Nj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new K6(_,$);return new Y6(_,$)}};var Kj=/\.(mp4|m4v|mov|webm|ogv)$/i;function Yj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class z6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Yj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class W6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Kj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new z6(_,$);return new W6(_,$)}};function zj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Wj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var p4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function G6(_){let $=String(_||"").trim();return $?$:p4}function Gj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Xj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Vj(_,$="*"){try{let j=(K)=>{let Y=_.parent||_.opener;if(!Y)return!1;return Y.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(Y,X,L,V,B,q){try{if(Y&&L!=null&&j({filename:Y,format:X,data:L,mimeType:V,base64Encoded:Boolean(B),defaultMode:q}))return}catch(D){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",D)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(Y,X,L,V,B,q){try{if(X&&j({filename:X,data:Y,mimeType:L,base64Encoded:Boolean(V),mode:B,folderId:q}))return}catch(D){console.warn("[drawio-pane] export intercept failed, falling back to native export",D)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function X6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Xj(j)}`}class V6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Wj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let Y=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class q6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Gj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Vj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=p4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await X6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await X6(_,"image/png");else this.xmlData=G6(await _.text());else if(_.status===404)this.xmlData=p4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?G6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var c4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!zj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new V6(_,$);return new q6(_,$)}};class L6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var d_=new L6;var E1="workspaceExplorerScale",qj=["compact","default","comfortable"],Lj=new Set(qj),Qj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Q6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return Lj.has(j)?j:$}function h4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Bj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Uj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function i4(_={}){let $=Bj(_),j=_.stored?Q6(_.stored,$):$;return Uj(j,_)}function B6(_){return Qj[Q6(_)]}var Oj=60000,H6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function D6(_,$,j,Z=0,N=[]){if(!j&&H6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)D6(K,$,j,Z+1,N);return N}function U6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&H6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let Y of K.children)N(Y)};return N(_),Z.join("|")}function o4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,Y=Z.map((X)=>{let L=o4(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:Y}:_}function n4(_,$,j){if(!_)return _;if(_.path===$)return o4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let Y=n4(K,$,j);if(Y!==K)Z=!0;return Y});return Z?{..._,children:N}:_}var J6=4,l4=14,Fj=8,Hj=16;function y6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=y6(Z);return _.__bytes=j,j}function E6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=J6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let Y=K;if(K.length>l4){let X=K.slice(0,l4-1),L=K.slice(l4-1),V=L.reduce((B,q)=>B+q.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:V}),Y=X}return Z.children=Y.map((X)=>{if(X.kind==="dir")return E6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function O6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function k6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function k1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function s4(_,$,j,Z,N,K){let Y=Math.PI*2-0.0001,X=K-N>Y?N+Y:K,L=k1(_,$,Z,N),V=k1(_,$,Z,X),B=k1(_,$,j,X),q=k1(_,$,j,N),D=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${D} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${D} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var w6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function A6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),Y=(X,L,V,B)=>{let q=Array.isArray(X?.children)?X.children:[];if(!q.length)return;let D=Math.max(0,Number(X.size)||0);if(D<=0)return;let E=V-L,S=L;q.forEach((v,R)=>{let P=Math.max(0,Number(v.size)||0);if(P<=0)return;let I=P/D,g=S,J=R===q.length-1?V:S+E*I;if(S=J,J-g<0.003)return;let m=w6[B];if(m){let o=k6(g,B,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:P,color:o,depth:B,startAngle:g,endAngle:J,innerRadius:m[0],outerRadius:m[1],d:s4(120,120,m[0],m[1],g,J)}),B===1)N.push({key:v.path,name:v.name,size:P,pct:K>0?P/K*100:0,color:o})}if(B<J6)Y(v,g,J,B+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function d4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=d4(Z,$);if(N)return N}return null}function P6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=w6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,Y=Math.PI*3/2,X=k6(K,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:Y,innerRadius:N[0],outerRadius:N[1],d:s4(120,120,N[0],N[1],K,Y)}],legend:[{key:V,name:_,size:j,pct:100,color:X}]}}function F6(_,$=!1,j=!1){if(!_)return null;let Z=y6(_),N=E6(_,0),K=N.size||Z,{segments:Y,legend:X}=A6(N,K,j);if(!Y.length&&K>0){let L=P6("[files]",N.path,K,j);Y=L.segments,X=L.legend}return{root:N,totalSize:K,segments:Y,legend:X,truncated:$,isDarkTheme:j}}function Dj({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,Y]=T(()=>[_?.root?.path||"."]),[X,L]=T(!1);f(()=>{let i=_?.root?.path||".";N(i),Y([i]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let V=n_(()=>{return d4(_.root,Z)||_.root},[_?.root,Z]),B=V?.size||_.totalSize||0,{segments:q,legend:D}=n_(()=>{let i=A6(V,B,_.isDarkTheme);if(i.segments.length>0)return i;if(B<=0)return i;let X_=V?.children?.length?"Total":"[files]";return P6(X_,V?.path||_?.root?.path||".",B,_.isDarkTheme)},[V,B,_.isDarkTheme,_?.root?.path]),[E,S]=T(q),v=k(new Map),R=k(0);f(()=>{let i=v.current,X_=new Map(q.map((K_)=>[K_.key,K_])),o_=performance.now(),t=220,a=(K_)=>{let $_=Math.min(1,(K_-o_)/220),W_=$_*(2-$_),O_=q.map((G_)=>{let Q_=i.get(G_.key)||{startAngle:G_.startAngle,endAngle:G_.startAngle,innerRadius:G_.innerRadius,outerRadius:G_.innerRadius},M_=(W0,V_)=>W0+(V_-W0)*W_,u_=M_(Q_.startAngle,G_.startAngle),F_=M_(Q_.endAngle,G_.endAngle),C_=M_(Q_.innerRadius,G_.innerRadius),p_=M_(Q_.outerRadius,G_.outerRadius);return{...G_,d:s4(120,120,C_,p_,u_,F_)}});if(S(O_),$_<1)R.current=requestAnimationFrame(a)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(a),v.current=X_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[q]);let P=E.length?E:q,I=B>0?Y$(B):"0 B",g=V?.name||"",m=(g&&g!=="."?g:"Total")||"Total",o=I,__=K.length>1,n=(i)=>{if(!i?.path)return;let X_=d4(_.root,i.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;Y((o_)=>[...o_,X_.path]),N(X_.path),j(null)},Z_=()=>{if(!__)return;Y((i)=>{let X_=i.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return O`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${P.length}
                data-base-size=${B}>
                ${P.map((i)=>O`
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
            ${D.length>0&&O`
                <div class="workspace-folder-starburst-legend">
                    ${D.slice(0,8).map((i)=>O`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${Y$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&O`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Jj({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;F2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?Y$($.metadata.size):"";return O`
        <a href=${K$(_)} download=${Z} class="file-attachment"
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
                ${N&&O`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function b6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:Y=!1}){let[X,L]=T(null),[V,B]=T(new Set(["."])),[q,D]=T(null),[E,S]=T(null),[v,R]=T(""),[P,I]=T(null),[g,J]=T(null),[m,o]=T(!0),[__,n]=T(!1),[Z_,i]=T(null),[X_,o_]=T(()=>H2("workspaceShowHidden",!1)),[t,a]=T(!1),[K_,$_]=T(null),[W_,O_]=T(null),[G_,J_]=T(null),[Q_,M_]=T(!1),[u_,F_]=T(null),[C_,p_]=T(()=>O6()),[W0,V_]=T(()=>i4({stored:s0(E1),...h4()})),[r,U_]=T(!1),Y_=k(V),T_=k(""),m_=k(null),c_=k(0),Y0=k(new Set),h_=k(null),y_=k(new Map),H_=k(_),j0=k(Z),N0=k(null),S_=k(null),b_=k(null),a_=k(null),Z0=k(null),p0=k(null),E0=k("."),g_=k(null),i_=k({path:null,dragging:!1,startX:0,startY:0}),A_=k({path:null,dragging:!1,startX:0,startY:0}),L0=k({path:null,timer:0}),G0=k(!1),x_=k(0),l_=k(new Map),t_=k(null),I_=k(null),U0=k(null),C=k(null),e=k(null),E_=k(null),D_=k(X_),e_=k($),S0=k(j??$),B_=k(0),x0=k(G_),c0=k(t),f$=k(K_),u0=k(null),R$=k({x:0,y:0}),O0=k(0),J$=k(null),k0=k(q),I0=k(E),Q$=k(null),a0=k(null),Q0=k(P);H_.current=_,j0.current=Z,f(()=>{Y_.current=V},[V]),f(()=>{D_.current=X_},[X_]),f(()=>{e_.current=$},[$]),f(()=>{S0.current=j??$},[j,$]),f(()=>{x0.current=G_},[G_]),f(()=>{if(typeof window>"u")return;let z=()=>{V_(i4({stored:s0(E1),...h4()}))};z();let U=()=>z(),H=()=>z(),y=(c)=>{if(!c||c.key===null||c.key===E1)z()};window.addEventListener("resize",U),window.addEventListener("focus",H),window.addEventListener("storage",y);let M=window.matchMedia?.("(pointer: coarse)"),l=window.matchMedia?.("(hover: none)"),d=(c,N_)=>{if(!c)return;if(c.addEventListener)c.addEventListener("change",N_);else if(c.addListener)c.addListener(N_)},p=(c,N_)=>{if(!c)return;if(c.removeEventListener)c.removeEventListener("change",N_);else if(c.removeListener)c.removeListener(N_)};return d(M,U),d(l,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",H),window.removeEventListener("storage",y),p(M,U),p(l,U)}},[]),f(()=>{let z=(U)=>{let H=U?.detail?.path;if(!H)return;let y=H.split("/"),M=[];for(let l=1;l<y.length;l++)M.push(y.slice(0,l).join("/"));if(M.length)B((l)=>{let d=new Set(l);d.add(".");for(let p of M)d.add(p);return d});D(H),requestAnimationFrame(()=>{let l=document.querySelector(`[data-path="${CSS.escape(H)}"]`);if(l)l.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),f(()=>{c0.current=t},[t]),f(()=>{f$.current=K_},[K_]),f(()=>{k0.current=q},[q]),f(()=>{I0.current=E},[E]),f(()=>{Q0.current=P},[P]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>p_(O6());z();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),H=()=>z();if(U?.addEventListener)U.addEventListener("change",H);else if(U?.addListener)U.addListener(H);let y=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",H);else if(U?.removeListener)U.removeListener(H);y?.disconnect()}},[]),f(()=>{if(!E)return;let z=Z0.current;if(!z)return;let U=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(U)},[E]),f(()=>{if(!r)return;let z=(H)=>{let y=H?.target;if(!(y instanceof Element))return;if(e.current?.contains(y))return;if(E_.current?.contains(y))return;U_(!1)},U=(H)=>{if(H?.key==="Escape")U_(!1),E_.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",U)}},[r]);let t$=async(z)=>{n(!0),I(null),J(null);try{let U=await N4(z,20000);I(U)}catch(U){I({error:U.message||"Failed to load preview"})}finally{n(!1)}};N0.current=t$;let F0=async()=>{if(!e_.current)return;try{let z=await v2("",1,D_.current),U=U6(z.root,Y_.current,D_.current);if(U===T_.current){o(!1);return}if(T_.current=U,m_.current=z.root,!c_.current)c_.current=requestAnimationFrame(()=>{c_.current=0,L((H)=>o4(H,m_.current)),o(!1)})}catch(z){i(z.message||"Failed to load workspace"),o(!1)}},y$=async(z)=>{if(!z)return;if(Y0.current.has(z))return;Y0.current.add(z);try{let U=await v2(z,1,D_.current);L((H)=>n4(H,z,U.root))}catch(U){i(U.message||"Failed to load workspace")}finally{Y0.current.delete(z)}};S_.current=y$;let K0=x(()=>{let z=q;if(!z)return".";let U=y_.current?.get(z);if(U&&U.type==="dir")return U.path;if(z==="."||!z.includes("/"))return".";let H=z.split("/");return H.pop(),H.join("/")||"."},[q]),W$=x((z)=>{let U=z?.closest?.(".workspace-row");if(!U)return null;let H=U.dataset.path,y=U.dataset.type;if(!H)return null;if(y==="dir")return H;if(H.includes("/")){let M=H.split("/");return M.pop(),M.join("/")||"."}return"."},[]),B$=x((z)=>{return W$(z?.target||null)},[W$]),w0=x((z)=>{x0.current=z,J_(z)},[]),f0=x(()=>{let z=L0.current;if(z?.timer)clearTimeout(z.timer);L0.current={path:null,timer:0}},[]),t0=x((z)=>{if(!z||z==="."){f0();return}let U=y_.current?.get(z);if(!U||U.type!=="dir"){f0();return}if(Y_.current?.has(z)){f0();return}if(L0.current?.path===z)return;f0();let H=setTimeout(()=>{L0.current={path:null,timer:0},S_.current?.(z),B((y)=>{let M=new Set(y);return M.add(z),M})},600);L0.current={path:z,timer:H}},[f0]),U$=x((z,U)=>{if(R$.current={x:z,y:U},O0.current)return;O0.current=requestAnimationFrame(()=>{O0.current=0;let H=u0.current;if(!H)return;let y=R$.current;H.style.transform=`translate(${y.x+12}px, ${y.y+12}px)`})},[]),E$=x((z)=>{if(!z)return;let H=(y_.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!H)return;O_({path:z,label:H})},[]),v$=x(()=>{if(O_(null),O0.current)cancelAnimationFrame(O0.current),O0.current=0;if(u0.current)u0.current.style.transform="translate(-9999px, -9999px)"},[]),u$=x((z)=>{if(!z)return".";let U=y_.current?.get(z);if(U&&U.type==="dir")return U.path;if(z==="."||!z.includes("/"))return".";let H=z.split("/");return H.pop(),H.join("/")||"."},[]),H0=x(()=>{S(null),R("")},[]),O$=x((z)=>{if(!z)return;let H=(y_.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!H||z===".")return;S(z),R(H)},[]),e0=x(async()=>{let z=I0.current;if(!z)return;let U=(v||"").trim();if(!U){H0();return}let H=y_.current?.get(z),y=(H?.name||z.split("/").pop()||z).trim();if(U===y){H0();return}try{let l=(await z4(z,U))?.path||z,d=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(H0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:l,type:H?.type||"file"}})),H?.type==="dir")B((p)=>{let c=new Set;for(let N_ of p)if(N_===z)c.add(l);else if(N_.startsWith(`${z}/`))c.add(`${l}${N_.slice(z.length)}`);else c.add(N_);return c});if(D(l),H?.type==="dir")I(null),n(!1),J(null);else N0.current?.(l);S_.current?.(d)}catch(M){i(M?.message||"Failed to rename file")}},[H0,v]),M0=x(async(z)=>{let y=z||".";for(let M=0;M<50;M+=1){let d=`untitled${M===0?"":`-${M}`}.md`;try{let c=(await Y4(y,d,""))?.path||(y==="."?d:`${y}/${d}`);if(y&&y!==".")B((N_)=>new Set([...N_,y]));D(c),i(null),S_.current?.(y),N0.current?.(c);return}catch(p){if(p?.status===409||p?.code==="file_exists")continue;i(p?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),f_=x((z)=>{if(z?.stopPropagation?.(),Q_)return;let U=u$(k0.current);M0(U)},[Q_,u$,M0]);f(()=>{if(typeof window>"u")return;let z=(U)=>{let H=U?.detail?.updates||[];if(!Array.isArray(H)||H.length===0)return;L((p)=>{let c=p;for(let N_ of H){if(!N_?.root)continue;if(!c||N_.path==="."||!N_.path)c=N_.root;else c=n4(c,N_.path,N_.root)}if(c)T_.current=U6(c,Y_.current,D_.current);return o(!1),c});let y=k0.current;if(Boolean(y)&&H.some((p)=>{let c=p?.path||"";if(!c||c===".")return!0;return y===c||y.startsWith(`${c}/`)||c.startsWith(`${y}/`)}))l_.current.clear();if(!y||!Q0.current)return;let l=y_.current?.get(y);if(l&&l.type==="dir")return;if(H.some((p)=>{let c=p?.path||"";if(!c||c===".")return!0;return y===c||y.startsWith(`${c}/`)}))N0.current?.(y)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),h_.current=F0;let m$=k(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=S0.current??e_.current,H=document.visibilityState!=="hidden"&&(U||z.matches&&e_.current);u2(H,D_.current).catch(()=>{})}).current,C0=k(0),k$=k(()=>{if(C0.current)clearTimeout(C0.current);C0.current=setTimeout(()=>{C0.current=0,m$()},250)}).current;f(()=>{if(e_.current)h_.current?.();k$()},[$,j]),f(()=>{h_.current(),m$();let z=setInterval(()=>h_.current(),Oj),U=D2("previewHeight",null),H=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(x_.current=H,b_.current)b_.current.style.setProperty("--preview-height",`${H}px`);let y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=()=>k$();if(y.addEventListener)y.addEventListener("change",M);else if(y.addListener)y.addListener(M);return document.addEventListener("visibilitychange",M),()=>{if(clearInterval(z),c_.current)cancelAnimationFrame(c_.current),c_.current=0;if(y.removeEventListener)y.removeEventListener("change",M);else if(y.removeListener)y.removeListener(M);if(document.removeEventListener("visibilitychange",M),C0.current)clearTimeout(C0.current),C0.current=0;if(g_.current)clearTimeout(g_.current),g_.current=null;u2(!1,D_.current).catch(()=>{})}},[]);let G$=n_(()=>D6(X,V,X_),[X,V,X_]),A0=n_(()=>new Map(G$.map((z)=>[z.node.path,z.node])),[G$]),w$=n_(()=>B6(W0),[W0]);y_.current=A0;let s_=(q?y_.current.get(q):null)?.type==="dir";f(()=>{if(!q||!s_){F_(null),t_.current=null,I_.current=null;return}let z=q,U=`${X_?"hidden":"visible"}:${q}`,H=l_.current,y=H.get(U);if(y?.root){H.delete(U),H.set(U,y);let d=F6(y.root,Boolean(y.truncated),C_);if(d)t_.current=d,I_.current=q,F_({loading:!1,error:null,payload:d});return}let M=t_.current,l=I_.current;F_({loading:!0,error:null,payload:l===q?M:null}),v2(q,Fj,X_).then((d)=>{if(k0.current!==z)return;let p={root:d?.root,truncated:Boolean(d?.truncated)};H.delete(U),H.set(U,p);while(H.size>Hj){let N_=H.keys().next().value;if(!N_)break;H.delete(N_)}let c=F6(p.root,p.truncated,C_);t_.current=c,I_.current=q,F_({loading:!1,error:null,payload:c})}).catch((d)=>{if(k0.current!==z)return;F_({loading:!1,error:d?.message||"Failed to load folder size chart",payload:l===q?M:null})})},[q,s_,X_,C_]);let P0=Boolean(P&&P.kind==="text"&&!s_&&(!P.size||P.size<=262144)),F$=P0?"Open in editor":P?.size>262144?"File too large to edit":"File is not editable",P$=Boolean(q&&q!=="."),q2=Boolean(q&&!s_),e$=Boolean(q&&!s_),m0=q&&s_?X1(q,X_):null,D0=x(()=>U_(!1),[]),w_=x(async(z)=>{D0();try{await z?.()}catch{}},[D0]);f(()=>{let z=U0.current;if(C.current)C.current.dispose(),C.current=null;if(!z)return;if(z.innerHTML="",!q||s_||!P||P.error)return;let U={path:q,content:typeof P.text==="string"?P.text:void 0,mtime:P.mtime,size:P.size,preview:P,mode:"view"},H=r_.resolve(U)||r_.get("workspace-preview-default");if(!H)return;let y=H.mount(z,U);return C.current=y,()=>{if(C.current===y)y.dispose(),C.current=null;z.innerHTML=""}},[q,s_,P]);let R0=(z)=>{let U=z?.target;if(U instanceof Element)return U;return U?.parentElement||null},X$=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},_2=k((z)=>{if(a0.current)clearTimeout(a0.current),a0.current=null;let H=R0(z)?.closest?.("[data-path]");if(!H)return;let y=H.dataset.path;if(H.dataset.type==="dir"||!y)return;if(I0.current===y)H0();j0.current?.(y)}).current,$2=k((z)=>{if(G0.current){G0.current=!1;return}let U=R0(z),H=U?.closest?.("[data-path]");if(a_.current?.focus?.(),!H)return;let y=H.dataset.path,M=H.dataset.type,l=Boolean(U?.closest?.(".workspace-caret")),d=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),p=k0.current===y,c=I0.current;if(c){if(c===y)return;H0()}let N_=M==="file"&&Q$.current===y&&!l&&!d;if(p&&!l&&!d&&y!=="."&&!N_){if(a0.current)clearTimeout(a0.current);a0.current=setTimeout(()=>{a0.current=null,O$(y)},350);return}if(M==="dir"){if(Q$.current=null,D(y),I(null),J(null),n(!1),!Y_.current.has(y))S_.current?.(y);if(p&&!l)return;B((T0)=>{let n0=new Set(T0);if(n0.has(y))n0.delete(y);else n0.add(y);return n0})}else{Q$.current=null,D(y);let X0=y_.current.get(y);if(X0)H_.current?.(X0.path,X0);N0.current?.(y)}}).current,b$=k(()=>{T_.current="",h_.current(),Array.from(Y_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>S_.current?.(U))}).current,x$=k(()=>{Q$.current=null,D(null),I(null),J(null),n(!1)}).current,B0=k(()=>{o_((z)=>{let U=!z;if(typeof window<"u")$0("workspaceShowHidden",String(U));return D_.current=U,u2(!0,U).catch(()=>{}),T_.current="",h_.current?.(),Array.from(Y_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>S_.current?.(y)),U})}).current,V$=k((z)=>{if(R0(z)?.closest?.("[data-path]"))return;x$()}).current,v0=x(async(z)=>{if(!z)return;let U=z.split("/").pop()||z;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await G4(z);let y=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(k0.current===z)x$();S_.current?.(y),i(null)}catch(y){I((M)=>({...M||{},error:y.message||"Failed to delete file"}))}},[x$]),H$=x((z)=>{let U=a_.current;if(!U||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g$=x((z)=>{let U=G$;if(!U||U.length===0)return;let H=q?U.findIndex((y)=>y.node.path===q):-1;if(z.key==="ArrowDown"){z.preventDefault();let y=Math.min(H+1,U.length-1),M=U[y];if(!M)return;if(D(M.node.path),M.node.type!=="dir")H_.current?.(M.node.path,M.node),N0.current?.(M.node.path);else I(null),n(!1),J(null);H$(M.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let y=H<=0?0:H-1,M=U[y];if(!M)return;if(D(M.node.path),M.node.type!=="dir")H_.current?.(M.node.path,M.node),N0.current?.(M.node.path);else I(null),n(!1),J(null);H$(M.node.path);return}if(z.key==="ArrowRight"&&H>=0){let y=U[H];if(y?.node?.type==="dir"&&!V.has(y.node.path))z.preventDefault(),S_.current?.(y.node.path),B((M)=>new Set([...M,y.node.path]));return}if(z.key==="ArrowLeft"&&H>=0){let y=U[H];if(y?.node?.type==="dir"&&V.has(y.node.path))z.preventDefault(),B((M)=>{let l=new Set(M);return l.delete(y.node.path),l});return}if(z.key==="Enter"&&H>=0){z.preventDefault();let y=U[H];if(!y)return;let M=y.node.path;if(y.node.type==="dir"){if(!Y_.current.has(M))S_.current?.(M);B((d)=>{let p=new Set(d);if(p.has(M))p.delete(M);else p.add(M);return p}),I(null),J(null),n(!1)}else H_.current?.(M,y.node),N0.current?.(M);return}if((z.key==="Delete"||z.key==="Backspace")&&H>=0){let y=U[H];if(!y||y.node.type==="dir")return;z.preventDefault(),v0(y.node.path);return}if(z.key==="Escape")z.preventDefault(),x$()},[x$,v0,V,G$,H$,q]),p$=x((z)=>{let U=R0(z),H=U?.closest?.(".workspace-row");if(!H)return;let y=H.dataset.type,M=H.dataset.path;if(!M||M===".")return;if(I0.current===M)return;let l=z?.touches?.[0];if(!l)return;if(i_.current={path:X$(U)?M:null,dragging:!1,startX:l.clientX,startY:l.clientY},y!=="file")return;if(g_.current)clearTimeout(g_.current);g_.current=setTimeout(()=>{if(g_.current=null,i_.current?.dragging)return;v0(M)},600)},[v0]),c$=x(()=>{if(g_.current)clearTimeout(g_.current),g_.current=null;let z=i_.current;if(z?.dragging&&z.path){let U=x0.current||K0(),H=J$.current;if(typeof H==="function")H(z.path,U)}i_.current={path:null,dragging:!1,startX:0,startY:0},B_.current=0,a(!1),$_(null),w0(null),f0(),v$()},[K0,v$,w0,f0]),_$=x((z)=>{let U=i_.current,H=z?.touches?.[0];if(!H||!U?.path){if(g_.current)clearTimeout(g_.current),g_.current=null;return}let y=Math.abs(H.clientX-U.startX),M=Math.abs(H.clientY-U.startY),l=y>8||M>8;if(l&&g_.current)clearTimeout(g_.current),g_.current=null;if(!U.dragging&&l)U.dragging=!0,a(!0),$_("move"),E$(U.path);if(U.dragging){z.preventDefault(),U$(H.clientX,H.clientY);let d=document.elementFromPoint(H.clientX,H.clientY),p=W$(d)||K0();if(x0.current!==p)w0(p);t0(p)}},[W$,K0,E$,U$,w0,t0]),h0=k((z)=>{z.preventDefault();let U=b_.current;if(!U)return;let H=z.clientY,y=x_.current||280,M=z.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let l=H,d=(c)=>{l=c.clientY;let N_=U.clientHeight-80,X0=Math.min(Math.max(y-(c.clientY-H),80),N_);U.style.setProperty("--preview-height",`${X0}px`),x_.current=X0},p=()=>{let c=U.clientHeight-80,N_=Math.min(Math.max(y-(l-H),80),c);x_.current=N_,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("previewHeight",String(Math.round(N_))),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",p)}).current,h$=k((z)=>{z.preventDefault();let U=b_.current;if(!U)return;let H=z.touches[0];if(!H)return;let y=H.clientY,M=x_.current||280,l=z.currentTarget;l.classList.add("dragging"),document.body.style.userSelect="none";let d=(c)=>{let N_=c.touches[0];if(!N_)return;c.preventDefault();let X0=U.clientHeight-80,T0=Math.min(Math.max(M-(N_.clientY-y),80),X0);U.style.setProperty("--preview-height",`${T0}px`),x_.current=T0},p=()=>{l.classList.remove("dragging"),document.body.style.userSelect="",$0("previewHeight",String(Math.round(x_.current||M))),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}).current,i0=async()=>{if(!q)return;try{let z=await K4(q);if(z.media_id)J(z.media_id)}catch(z){I((U)=>({...U||{},error:z.message||"Failed to attach"}))}},D$=async()=>{if(!q||s_)return;await v0(q)},q$=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},I$=x((z)=>{if(!q$(z))return;if(z.preventDefault(),B_.current+=1,!c0.current)a(!0);$_("upload");let U=B$(z)||K0();w0(U),t0(U)},[K0,B$,w0,t0]),i$=x((z)=>{if(!q$(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!c0.current)a(!0);if(f$.current!=="upload")$_("upload");let U=B$(z)||K0();if(x0.current!==U)w0(U);t0(U)},[K0,B$,w0,t0]),j2=x((z)=>{if(!q$(z))return;if(z.preventDefault(),B_.current=Math.max(0,B_.current-1),B_.current===0)a(!1),$_(null),w0(null),f0()},[w0,f0]),M$=x(async(z,U=".")=>{let H=Array.from(z||[]);if(H.length===0)return;let y=U&&U!==""?U:".",M=y!=="."?y:"workspace root";M_(!0);try{let l=null;for(let d of H)try{l=await W1(d,y)}catch(p){let c=p?.status,N_=p?.code;if(c===409||N_==="file_exists"){let X0=d?.name||"file";if(!window.confirm(`"${X0}" already exists in ${M}. Overwrite?`))continue;l=await W1(d,y,{overwrite:!0})}else throw p}if(l?.path)Q$.current=l.path,D(l.path),N0.current?.(l.path);S_.current?.(y)}catch(l){i(l.message||"Failed to upload file")}finally{M_(!1)}},[]),E2=x(async(z,U)=>{if(!z)return;let H=y_.current?.get(z);if(!H)return;let y=U&&U!==""?U:".",M=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(y===M)return;try{let d=(await W4(z,y))?.path||z;if(H.type==="dir")B((p)=>{let c=new Set;for(let N_ of p)if(N_===z)c.add(d);else if(N_.startsWith(`${z}/`))c.add(`${d}${N_.slice(z.length)}`);else c.add(N_);return c});if(D(d),H.type==="dir")I(null),n(!1),J(null);else N0.current?.(d);S_.current?.(M),S_.current?.(y)}catch(l){i(l?.message||"Failed to move entry")}},[]);J$.current=E2;let l$=x(async(z)=>{if(!q$(z))return;z.preventDefault(),B_.current=0,a(!1),$_(null),J_(null),f0();let U=Array.from(z?.dataTransfer?.files||[]);if(U.length===0)return;let H=x0.current||B$(z)||K0();await M$(U,H)},[K0,B$,M$]),L_=x((z)=>{if(z?.stopPropagation?.(),Q_)return;let U=z?.currentTarget?.dataset?.uploadTarget||".";E0.current=U,p0.current?.click()},[Q_]),n$=x(()=>{if(Q_)return;let z=k0.current,U=z?y_.current?.get(z):null;E0.current=U?.type==="dir"?U.path:".",p0.current?.click()},[Q_]),Z2=x(()=>{w_(()=>f_(null))},[w_,f_]),k2=x(()=>{w_(()=>n$())},[w_,n$]),N2=x(()=>{w_(()=>b$())},[w_,b$]),w2=x(()=>{w_(()=>B0())},[w_,B0]),A2=x(()=>{if(!q||!P0)return;w_(()=>j0.current?.(q,P))},[w_,q,P0,P]),P2=x(()=>{if(!q||q===".")return;w_(()=>O$(q))},[w_,q,O$]),b2=x(()=>{if(!q||s_)return;w_(()=>D$())},[w_,q,s_,D$]),l0=x(()=>{if(!q||s_)return;w_(()=>i0())},[w_,q,s_,i0]),g0=x(()=>{if(!m0)return;if(D0(),typeof window<"u")window.open(m0,"_blank","noopener")},[D0,m0]),d$=x(()=>{D0(),N?.()},[D0,N]),L2=x(()=>{D0(),K?.()},[D0,K]),Q=x((z)=>{if(!z||z.button!==0)return;let U=z.currentTarget;if(!U||!U.dataset)return;let H=U.dataset.path;if(!H||H===".")return;if(I0.current===H)return;let y=R0(z);if(y?.closest?.("button, a, input, .workspace-caret"))return;if(!X$(y))return;z.preventDefault(),A_.current={path:H,dragging:!1,startX:z.clientX,startY:z.clientY};let M=(d)=>{let p=A_.current;if(!p?.path)return;let c=Math.abs(d.clientX-p.startX),N_=Math.abs(d.clientY-p.startY),X0=c>4||N_>4;if(!p.dragging&&X0)p.dragging=!0,G0.current=!0,a(!0),$_("move"),E$(p.path),U$(d.clientX,d.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(p.dragging){d.preventDefault(),U$(d.clientX,d.clientY);let T0=document.elementFromPoint(d.clientX,d.clientY),n0=W$(T0)||K0();if(x0.current!==n0)w0(n0);t0(n0)}},l=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",l);let d=A_.current;if(d?.dragging&&d.path){let p=x0.current||K0(),c=J$.current;if(typeof c==="function")c(d.path,p)}A_.current={path:null,dragging:!1,startX:0,startY:0},B_.current=0,a(!1),$_(null),w0(null),f0(),v$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{G0.current=!1},0)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",l)},[W$,K0,E$,U$,v$,w0,t0,f0]),A=x(async(z)=>{let U=Array.from(z?.target?.files||[]);if(U.length===0)return;let H=E0.current||".";if(await M$(U,H),E0.current=".",z?.target)z.target.value=""},[M$]);return O`
        <aside
            class=${`workspace-sidebar${t?" workspace-drop-active":""}`}
            data-workspace-scale=${W0}
            ref=${b_}
            onDragEnter=${I$}
            onDragOver=${i$}
            onDragLeave=${j2}
            onDrop=${l$}
        >
            <input type="file" multiple style="display:none" ref=${p0} onChange=${A} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${E_}
                            class=${`workspace-menu-button${r?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),U_((U)=>!U)}}
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
                        ${r&&O`
                            <div class="workspace-menu-dropdown" ref=${e} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z2} disabled=${Q_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${k2} disabled=${Q_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${N2}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${w2}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${q&&O`<div class="workspace-menu-separator"></div>`}
                                ${q&&!s_&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A2} disabled=${!P0}>Open in editor</button>
                                `}
                                ${P$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P2}>Rename selected</button>
                                `}
                                ${e$&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l0}>Download selected file</button>
                                `}
                                ${m0&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${g0}>Download selected folder (zip)</button>
                                `}
                                ${q2&&O`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${b2}>Delete selected file</button>
                                `}

                                ${(N||K)&&O`<div class="workspace-menu-separator"></div>`}
                                ${N&&O`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d$}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&O`
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
                    <button class="workspace-create" onClick=${f_} title="New file" disabled=${Q_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${b$} title="Refresh">
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
                ${Q_&&O`<div class="workspace-drop-hint">Uploading…</div>`}
                ${m&&O`<div class="workspace-loading">Loading…</div>`}
                ${Z_&&O`<div class="workspace-error">${Z_}</div>`}
                ${X&&O`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${$2}
                        onDblClick=${_2}
                        onKeyDown=${g$}
                        onTouchStart=${p$}
                        onTouchEnd=${c$}
                        onTouchMove=${_$}
                        onTouchCancel=${c$}
                    >
                        ${G$.map(({node:z,depth:U})=>{let H=z.type==="dir",y=z.path===q,M=z.path===E,l=H&&V.has(z.path),d=G_&&z.path===G_,p=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return O`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${y?" selected":""}${d?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*w$.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${Q}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${H?l?O`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:O`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${H?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${H?O`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:O`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${M?O`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${Z0}
                                                value=${v}
                                                onInput=${(c)=>R(c?.target?.value||"")}
                                                onKeyDown=${(c)=>{if(c.key==="Enter")c.preventDefault(),e0();else if(c.key==="Escape")c.preventDefault(),H0()}}
                                                onBlur=${H0}
                                                onClick=${(c)=>c.stopPropagation()}
                                            />
                                        `:O`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${H&&!l&&p>0&&O`
                                        <span class="workspace-count">${p}</span>
                                    `}
                                    ${H&&O`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${L_}
                                            disabled=${Q_}
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
            ${q&&O`
                <div class="workspace-preview-splitter-h" onMouseDown=${h0} onTouchStart=${h$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${q}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${f_} title="New file" disabled=${Q_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!s_&&O`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P0&&j0.current?.(q,P)}
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
                                    onClick=${D$}
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
                            ${s_?O`
                                    <button class="workspace-download" onClick=${n$}
                                        title="Upload files to this folder" disabled=${Q_}>
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
                                    </a>`:O`<button class="workspace-download" onClick=${i0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${__&&O`<div class="workspace-loading">Loading preview…</div>`}
                    ${P?.error&&O`<div class="workspace-error">${P.error}</div>`}
                    ${s_&&O`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${u_?.loading&&O`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${u_?.error&&O`<div class="workspace-error">${u_.error}</div>`}
                        ${u_?.payload&&u_.payload.segments?.length>0&&O`
                            <${Dj} payload=${u_.payload} />
                        `}
                        ${u_?.payload&&(!u_.payload.segments||u_.payload.segments.length===0)&&O`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${P&&!P.error&&!s_&&O`
                        <div class="workspace-preview-body" ref=${U0}></div>
                    `}
                    ${g&&O`
                        <div class="workspace-download-card">
                            <${Jj} mediaId=${g} />
                        </div>
                    `}
                </div>
            `}
            ${W_&&O`
                <div class="workspace-drag-ghost" ref=${u0}>${W_.label}</div>
            `}
        </aside>
    `}var yj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,Ej=/\.(csv|tsv)$/i,kj=/\.pdf$/i,wj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,x6=/\.drawio(\.xml|\.svg|\.png)?$/i;function I6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:Y,onTogglePreview:X,previewTabs:L,onToggleDock:V,dockVisible:B,onToggleZen:q,zenMode:D}){let[E,S]=T(null),v=k(null);f(()=>{if(!E)return;let J=(m)=>{if(m.type==="keydown"&&m.key!=="Escape")return;S(null)};return document.addEventListener("click",J),document.addEventListener("keydown",J),()=>{document.removeEventListener("click",J),document.removeEventListener("keydown",J)}},[E]),f(()=>{let J=(m)=>{if(m.ctrlKey&&m.key==="Tab"){if(m.preventDefault(),!_.length)return;let o=_.findIndex((__)=>__.id===$);if(m.shiftKey){let __=_[(o-1+_.length)%_.length];j?.(__.id)}else{let __=_[(o+1)%_.length];j?.(__.id)}return}if((m.ctrlKey||m.metaKey)&&m.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(m.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$,j,Z]);let R=x((J,m)=>{if(J.button===1){J.preventDefault(),Z?.(m);return}if(J.button===0)j?.(m)},[j,Z]),P=x((J,m)=>{J.preventDefault(),S({id:m,x:J.clientX,y:J.clientY})},[]),I=x((J)=>{J.preventDefault(),J.stopPropagation()},[]),g=x((J,m)=>{J.preventDefault(),J.stopPropagation(),Z?.(m)},[Z]);if(f(()=>{if(!$||!v.current)return;let J=v.current.querySelector(".tab-item.active");if(J)J.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return O`
        <div class="tab-strip" ref=${v} role="tablist">
            ${_.map((J)=>O`
                <div
                    key=${J.id}
                    class=${`tab-item${J.id===$?" active":""}${J.dirty?" dirty":""}${J.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${J.id===$}
                    title=${J.path}
                    onMouseDown=${(m)=>R(m,J.id)}
                    onContextMenu=${(m)=>P(m,J.id)}
                >
                    ${J.pinned&&O`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${J.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${I}
                        onClick=${(m)=>g(m,J.id)}
                        title=${J.dirty?"Unsaved changes":"Close"}
                        aria-label=${J.dirty?"Unsaved changes":`Close ${J.label}`}
                    >
                        ${J.dirty?O`<span class="tab-dirty-dot" aria-hidden="true"></span>`:O`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&O`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${V}
                    title=${`${B?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${B?"Hide":"Show"} terminal`}
                    aria-pressed=${B?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${q&&O`
                <button
                    class=${`tab-strip-zen-toggle${D?" active":""}`}
                    onClick=${q}
                    title=${`${D?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${D?"Exit":"Enter"} zen mode`}
                    aria-pressed=${D?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${D?O`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:O`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${E&&O`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{Z?.(E.id),S(null)}}>Close</button>
                <button onClick=${()=>{N?.(E.id),S(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),S(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(E.id),S(null)}}>
                    ${_.find((J)=>J.id===E.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{X(E.id),S(null)}}>
                        ${L?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${yj.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(E.id),m=E.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(J)+"&name="+encodeURIComponent(m);window.open(o,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${Ej.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/csv-viewer/?path="+encodeURIComponent(E.id);window.open(J,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${kj.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(E.id);window.open(J,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${wj.test(E.id)&&!x6.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/image-viewer/?path="+encodeURIComponent(E.id);window.open(J,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
                ${x6.test(E.id)&&O`
                    <hr />
                    <button onClick=${()=>{let J="/drawio/edit?path="+encodeURIComponent(E.id);window.open(J,"_blank","noopener"),S(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Aj=400,r4=60,M6=220,a4="mdPreviewHeight";function Pj(){try{let _=localStorage.getItem(a4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r4?$:M6}catch{return M6}}function C6({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,Y]=T(Pj),X=k(null),L=k(null),V=k(""),B=k(_);return B.current=_,f(()=>{let E=()=>{let v=B.current?.()||"";if(v===V.current)return;V.current=v;try{let R=r0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};E();let S=setInterval(E,Aj);return()=>clearInterval(S)},[]),f(()=>{if(X.current&&Z)T$(X.current).catch(()=>{})},[Z]),O`
        <div
            class="md-preview-splitter"
            onMouseDown=${(E)=>{E.preventDefault();let S=E.clientY,v=L.current?.offsetHeight||K,R=L.current?.parentElement,P=R?R.offsetHeight*0.7:500,I=E.currentTarget;I.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=(m)=>{let o=Math.min(Math.max(v-(m.clientY-S),r4),P);Y(o)},J=()=>{I.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(a4,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",J)}}
            onTouchStart=${(E)=>{E.preventDefault();let S=E.touches[0];if(!S)return;let v=S.clientY,R=L.current?.offsetHeight||K,P=L.current?.parentElement,I=P?P.offsetHeight*0.7:500,g=E.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let J=(o)=>{let __=o.touches[0];if(!__)return;o.preventDefault();let n=Math.min(Math.max(R-(__.clientY-v),r4),I);Y(n)},m=()=>{g.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(a4,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",J),document.removeEventListener("touchend",m),document.removeEventListener("touchcancel",m)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",m),document.addEventListener("touchcancel",m)}}
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
    `}function T6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=k(_);K.current=_;let Y=k($);Y.current=$;let X=k(j);X.current=j;let L=k(Z);L.current=Z,f(()=>{X.current();let V=new V1((q,D)=>K.current(q,D),(q)=>Y.current(q),{chatJid:N});V.connect();let B=()=>{V.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),V.disconnect()}},[N])}function S6(){let[_,$]=T(!1),[j,Z]=T("default"),N=k(!1);f(()=>{let L=H2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let K=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),Y=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await K();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),$0("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),$0("notificationsEnabled",String(L))},[K]),X=x((L,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(L,{body:V});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Y,notify:X}}var d2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function f6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,Y]=T(!1),X=k(!1),L=k(null),V=k(!1),B=k(null),q=k(null),D=k(0);f(()=>{X.current=K},[K]),f(()=>{q.current=Z},[Z]),f(()=>{D.current+=1,q.current=null,B.current=null,V.current=!1,X.current=!1,N(null),Y(!1)},[j]);let E=x(async(R=null)=>{let P=D.current;try{if(R){let I=await i1(R,50,0,j);if(P!==D.current)return;N(I.posts),Y(!1)}else{let I=await S2(10,null,j);if(P!==D.current)return;N(I.posts),Y(I.has_more)}}catch(I){if(P!==D.current)return;console.error("Failed to load posts:",I)}},[j]),S=x(async()=>{let R=D.current;try{let P=await S2(10,null,j);if(R!==D.current)return;N((I)=>{if(!I||I.length===0)return P.posts;return d2([...P.posts,...I])}),Y((I)=>I||P.has_more)}catch(P){if(R!==D.current)return;console.error("Failed to refresh timeline:",P)}},[j]),v=x(async(R={})=>{let P=D.current,I=q.current;if(!I||I.length===0)return;if(V.current)return;let{preserveScroll:g=!0,preserveMode:J="top",allowRepeat:m=!1}=R,o=(Z_)=>{if(!g){Z_();return}if(J==="top")$(Z_);else _(Z_)},n=I.slice().sort((Z_,i)=>Z_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!m&&B.current===n)return;V.current=!0,B.current=n;try{let Z_=await S2(10,n,j);if(P!==D.current)return;if(Z_.posts.length>0)o(()=>{N((i)=>d2([...Z_.posts,...i||[]])),Y(Z_.has_more)});else Y(!1)}catch(Z_){if(P!==D.current)return;console.error("Failed to load more posts:",Z_)}finally{if(P===D.current)V.current=!1}},[j,_,$]);return f(()=>{L.current=v},[v]),{posts:Z,setPosts:N,hasMore:K,setHasMore:Y,hasMoreRef:X,loadPosts:E,refreshTimeline:S,loadMore:v,loadMoreRef:L,loadingMoreRef:V,lastBeforeIdRef:B}}function R6(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[Y,X]=T({text:"",totalLines:0}),[L,V]=T(null),[B,q]=T(null),[D,E]=T(null),S=k(null),v=k(0),R=k(!1),P=k(""),I=k(""),g=k(null),J=k(null),m=k(null),o=k(null),__=k(!1),n=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:Y,setAgentThought:X,pendingRequest:L,setPendingRequest:V,currentTurnId:B,setCurrentTurnId:q,steerQueuedTurnId:D,setSteerQueuedTurnId:E,lastAgentEventRef:S,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:P,thoughtBufferRef:I,pendingRequestRef:g,stalledPostIdRef:J,currentTurnIdRef:m,steerQueuedTurnIdRef:o,thoughtExpandedRef:__,draftExpandedRef:n}}function v6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.clientX,E=$.current||280,S=B.currentTarget;S.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=D,R=(I)=>{v=I.clientX;let g=Math.min(Math.max(E+(I.clientX-D),160),600);q.style.setProperty("--sidebar-width",`${g}px`),$.current=g},P=()=>{let I=Math.min(Math.max(E+(v-D),160),600);$.current=I,S.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",$0("sidebarWidth",String(Math.round(I))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,K=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.touches[0];if(!D)return;let E=D.clientX,S=$.current||280,v=B.currentTarget;v.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(I)=>{let g=I.touches[0];if(!g)return;I.preventDefault();let J=Math.min(Math.max(S+(g.clientX-E),160),600);q.style.setProperty("--sidebar-width",`${J}px`),$.current=J},P=()=>{v.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",$0("sidebarWidth",String(Math.round($.current||S))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,Y=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.clientX,E=j.current||$.current||280,S=B.currentTarget;S.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=D,R=(I)=>{v=I.clientX;let g=Math.min(Math.max(E+(I.clientX-D),200),800);q.style.setProperty("--editor-width",`${g}px`),j.current=g},P=()=>{let I=Math.min(Math.max(E+(v-D),200),800);j.current=I,S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("editorWidth",String(Math.round(I))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,X=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.touches[0];if(!D)return;let E=D.clientX,S=j.current||$.current||280,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(I)=>{let g=I.touches[0];if(!g)return;I.preventDefault();let J=Math.min(Math.max(S+(g.clientX-E),200),800);q.style.setProperty("--editor-width",`${J}px`),j.current=J},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",$0("editorWidth",String(Math.round(j.current||S))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,L=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.clientY,E=Z?.current||200,S=B.currentTarget;S.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=D,R=(I)=>{v=I.clientY;let g=Math.min(Math.max(E-(I.clientY-D),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${g}px`),Z)Z.current=g;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{let I=Math.min(Math.max(E-(v-D),100),window.innerHeight*0.5);if(Z)Z.current=I;S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",$0("dockHeight",String(Math.round(I))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",P)}).current,V=k((B)=>{B.preventDefault();let q=_.current;if(!q)return;let D=B.touches[0];if(!D)return;let E=D.clientY,S=Z?.current||200,v=B.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(I)=>{let g=I.touches[0];if(!g)return;I.preventDefault();let J=Math.min(Math.max(S-(g.clientY-E),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${J}px`),Z)Z.current=J;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",$0("dockHeight",String(Math.round(Z?.current||S))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:V}}function u6({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=T(()=>d_.getTabs()),[N,K]=T(()=>d_.getActiveId()),[Y,X]=T(()=>d_.getTabs().length>0);f(()=>{return d_.onChange((J,m)=>{Z(J),K(m),X(J.length>0)})},[]);let[L,V]=T(()=>new Set),B=x((J)=>{V((m)=>{let o=new Set(m);if(o.has(J))o.delete(J);else o.add(J);return o})},[]),q=x((J)=>{V((m)=>{if(!m.has(J))return m;let o=new Set(m);return o.delete(J),o})},[]),D=x((J,m={})=>{if(!J)return;let o={path:J,mode:"edit"};try{if(!r_.resolve(o)){if(!r_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,n)}let __=typeof m?.label==="string"&&m.label.trim()?m.label.trim():void 0;d_.open(J,__)},[]),E=x(()=>{let J=d_.getActiveId();if(J){let m=d_.get(J);if(m?.dirty){if(!window.confirm(`"${m.label}" has unsaved changes. Close anyway?`))return}d_.close(J),q(J),$.current?.(J)}},[q]),S=x((J)=>{let m=d_.get(J);if(m?.dirty){if(!window.confirm(`"${m.label}" has unsaved changes. Close anyway?`))return}d_.close(J),q(J),$.current?.(J)},[q]),v=x((J)=>{d_.activate(J)},[]),R=x((J)=>{let m=d_.getTabs().filter((n)=>n.id!==J&&!n.pinned),o=m.filter((n)=>n.dirty).length;if(o>0){if(!window.confirm(`${o} unsaved tab${o>1?"s":""} will be closed. Continue?`))return}let __=m.map((n)=>n.id);d_.closeOthers(J),__.forEach((n)=>{q(n),$.current?.(n)})},[q]),P=x(()=>{let J=d_.getTabs().filter((__)=>!__.pinned),m=J.filter((__)=>__.dirty).length;if(m>0){if(!window.confirm(`${m} unsaved tab${m>1?"s":""} will be closed. Continue?`))return}let o=J.map((__)=>__.id);d_.closeAll(),o.forEach((__)=>{q(__),$.current?.(__)})},[q]),I=x((J)=>{d_.togglePin(J)},[]),g=x(()=>{let J=d_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return f(()=>{let J=(m)=>{let{oldPath:o,newPath:__,type:n}=m.detail||{};if(!o||!__)return;if(n==="dir"){for(let Z_ of d_.getTabs())if(Z_.path===o||Z_.path.startsWith(`${o}/`)){let i=`${__}${Z_.path.slice(o.length)}`;d_.rename(Z_.id,i)}}else d_.rename(o,__)};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),f(()=>{let J=(m)=>{if(d_.hasUnsaved())m.preventDefault(),m.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:D,closeEditor:E,handleTabClose:S,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:P,handleTabTogglePin:I,handleTabTogglePreview:B,revealInExplorer:g}}function t4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var e4=t4("warning",30000),m6=t4("finalize",120000),_3=t4("refresh",30000),g6=30000;function p6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function c6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function h6(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function $3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function i6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function j3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||Y)}function l6(_,$={}){if(X2($))return null;if(j3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:bj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function n6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function d6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function o6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function s6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function r6(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function bj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function w1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Z3(_){return String(_||"").trim()||"web:default"}function a6({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function t6(_={}){return X2(_)&&j3(_)}function xj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Ij(_={},$={}){if(!t6(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=xj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function e6(_={}){if(!t6(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},Y=()=>{Z=0,Ij({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Y)??0},L=()=>{X();for(let q of[80,220,420]){let D=$.setTimeout?.(()=>{N.delete(D),X()},q);if(D!=null)N.add(D)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},B=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",L,!0),B?.addEventListener?.("resize",L),B?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",L,!0),B?.removeEventListener?.("resize",L),B?.removeEventListener?.("scroll",L)}}function Mj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function z$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Mj($,j)}var Cj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function _9(_){return Cj.has(String(_||"").trim())}function Tj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function $9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Tj(_),{detail:Z})),!0}var Sj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function j9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(X2({window:j,navigator:Z}))};N();let Y=Sj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of Y)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Z9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var Y3="piclaw_btw_session";function fj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Rj(){let _=s0(Y3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,Y=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:Y==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:Y}}catch{return null}}var N9=l1,K9=d1,vj=s1,Y9=_4,z9=$4,W9=r1,N3=z$(o0,"getAgentContext",null),uj=z$(o0,"getAgentModels",{current:null,models:[]}),mj=z$(o0,"getActiveChatAgents",{chats:[]}),K3=z$(o0,"getChatBranches",{chats:[]}),gj=z$(o0,"renameChatBranch",null),pj=z$(o0,"pruneChatBranch",null),G9=z$(o0,"restoreChatBranch",null),cj=z$(o0,"getAgentQueueState",{count:0}),hj=z$(o0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),ij=z$(o0,"removeAgentQueueItem",{removed:!1}),lj=z$(o0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});r_.register(w4);r_.register(S4);r_.register(T4);r_.register(f4);r_.register(R4);r_.register(v4);r_.register(m4);r_.register(g4);r_.register(c4);A4();r_.register(I4);r_.register(M4);function nj({locationParams:_}){let $=n_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=n_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=n_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=n_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,Y]=T("disconnected"),[X,L]=T(()=>X2()),[V,B]=T(null),[q,D]=T(null),[E,S]=T(!1),[v,R]=T("current"),[P,I]=T([]),[g,J]=T([]),[m,o]=T(null),{agentStatus:__,setAgentStatus:n,agentDraft:Z_,setAgentDraft:i,agentPlan:X_,setAgentPlan:o_,agentThought:t,setAgentThought:a,pendingRequest:K_,setPendingRequest:$_,currentTurnId:W_,setCurrentTurnId:O_,steerQueuedTurnId:G_,setSteerQueuedTurnId:J_,lastAgentEventRef:Q_,lastSilenceNoticeRef:M_,isAgentRunningRef:u_,draftBufferRef:F_,thoughtBufferRef:C_,pendingRequestRef:p_,stalledPostIdRef:W0,currentTurnIdRef:V_,steerQueuedTurnIdRef:r,thoughtExpandedRef:U_,draftExpandedRef:Y_}=R6(),[T_,m_]=T({}),[c_,Y0]=T(null),[h_,y_]=T(null),[H_,j0]=T(!1),[N0,S_]=T(null),[b_,a_]=T([]),[Z0,p0]=T([]),[E0,g_]=T(null),[i_,A_]=T([]),[L0,G0]=T(!1),[x_,l_]=T(()=>Rj()),t_=n_(()=>b_.find((G)=>G?.chat_jid===$)||null,[b_,$]),I_=n_(()=>Z0.find((G)=>G?.chat_jid===$)||t_||null,[t_,Z0,$]),U0=I_?.root_chat_jid||t_?.root_chat_jid||$,C=fj(v),[e,E_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),D_=i_.length,e_=k(new Set),S0=k([]),B_=k(new Set),x0=k(0),c0=k({inFlight:!1,lastAttemptAt:0,turnId:null});e_.current=new Set(i_.map((G)=>G.row_id)),S0.current=i_;let{notificationsEnabled:f$,notificationPermission:u0,toggleNotifications:R$,notify:O0}=S6(),[J$,k0]=T(()=>new Set),[I0,Q$]=T(()=>H2("workspaceOpen",!0)),a0=k(null),{editorOpen:Q0,tabStripTabs:t$,tabStripActiveId:F0,previewTabs:y$,openEditor:K0,closeEditor:W$,handleTabClose:B$,handleTabActivate:w0,handleTabCloseOthers:f0,handleTabCloseAll:t0,handleTabTogglePin:U$,handleTabTogglePreview:E$,revealInExplorer:v$}=u6({onTabClosed:(G)=>a0.current?.(G)}),u$=k(null),H0=k(null),O$=k(null),e0=k(null),M0=r_.getDockPanes().length>0,[f_,m$]=T(!1),C0=x(()=>m$((G)=>!G),[]),k$=x(()=>{K0(b4,{label:"Terminal"})},[K0]),G$=!j&&(Q0||M0&&f_),[A0,w$]=T(!1),A$=k(!1),s_=x(()=>{if(!Q0||j)return;if(A$.current=f_,f_)m$(!1);w$(!0)},[Q0,j,f_]),P0=x(()=>{if(!A0)return;if(w$(!1),A$.current)m$(!0),A$.current=!1},[A0]),F$=x(()=>{if(A0)P0();else s_()},[A0,s_,P0]);f(()=>{if(A0&&!Q0)P0()},[A0,Q0,P0]),f(()=>{let G=u$.current;if(!G)return;if(H0.current)H0.current.dispose(),H0.current=null;let W=F0;if(!W)return;let F={path:W,mode:"edit"},w=r_.resolve(F)||r_.get("editor");if(!w){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=w.mount(G,F);H0.current=b,b.onDirtyChange?.((s)=>{d_.setDirty(W,s)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{W$()});let u=d_.getViewState(W);if(u&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(u));if(typeof b.onViewStateChange==="function")b.onViewStateChange((s)=>{d_.saveViewState(W,s)});return requestAnimationFrame(()=>b.focus()),()=>{if(H0.current===b)b.dispose(),H0.current=null}},[F0,W$]),f(()=>{let G=(W)=>{let F=W.detail?.path;if(F)K0(F)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G)}},[K0]),f(()=>{let G=O$.current;if(e0.current)e0.current.dispose(),e0.current=null;if(!G||!M0||!f_)return;let W=r_.getDockPanes()[0];if(!W){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=W.mount(G,{mode:"view"});return e0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(e0.current===F)F.dispose(),e0.current=null}},[M0,f_]);let[P$,q2]=T({name:"You",avatar_url:null,avatar_background:null}),e$=k(!1),m0=k(!1),D0=k(null),w_=k($),R0=k(new Map),X$=k($),_2=k(0),$2=k(0),b$=k({}),x$=k({name:null,avatar_url:null}),B0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),V$=k(null),v0=k(null),H$=k(0),g$=k(0),p$=k(0),c$=k(null),_$=k(null),h0=k(null),h$=k(null),i0=k(0),D$=k({title:null,avatarBase:null}),q$=k(null),I$=x(()=>{if(q$.current)clearTimeout(q$.current),q$.current=null;o(null)},[]);h6(30000),f(()=>{return W8()},[]),f(()=>{return j9(L)},[]),f(()=>{$0("workspaceOpen",String(I0))},[I0]),f(()=>{return e6()},[]),f(()=>{return()=>{I$()}},[I$]),f(()=>{if(!x_){$0(Y3,"");return}$0(Y3,JSON.stringify({question:x_.question||"",answer:x_.answer||"",thinking:x_.thinking||"",error:x_.error||null,status:x_.status||"success"}))},[x_]),f(()=>{b$.current=T_||{}},[T_]),f(()=>{w_.current=$},[$]),f(()=>{x$.current=P$||{name:"You",avatar_url:null,avatar_background:null}},[P$]);let i$=x((G,W,F=null)=>{if(typeof document>"u")return;let w=(G||"").trim()||"PiClaw";if(D$.current.title!==w){document.title=w;let j_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(j_&&j_.getAttribute("content")!==w)j_.setAttribute("content",w);D$.current.title=w}let b=document.getElementById("dynamic-favicon");if(!b)return;let u=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",s=W||u,z_=W?`${s}|${F||""}`:s;if(D$.current.avatarBase!==z_){let j_=W?`${s}${s.includes("?")?"&":"?"}v=${F||Date.now()}`:s;b.setAttribute("href",j_),D$.current.avatarBase=z_}},[]),j2=x((G)=>{if(!G)return;I((W)=>W.includes(G)?W:[...W,G])},[]),M$=x((G)=>{I((W)=>W.filter((F)=>F!==G))},[]);a0.current=M$;let E2=x(()=>{I([])},[]),l$=x((G)=>{if(!Array.isArray(G)){I([]);return}let W=[],F=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let b=w.trim();if(F.has(b))continue;F.add(b),W.push(b)}I(W)},[]),L_=x((G,W=null,F="info",w=3000)=>{I$(),o({title:G,detail:W||null,kind:F||"info"}),q$.current=setTimeout(()=>{o((b)=>b?.title===G?null:b)},w)},[I$]),n$=x((G)=>{let W=i6(G,{editorOpen:Q0,resolvePane:(F)=>r_.resolve(F)});if(W.kind==="open"){K0(W.path);return}if(W.kind==="toast")L_(W.title,W.detail,W.level)},[Q0,K0,L_]),Z2=x(()=>{let G=F0;if(G)j2(G)},[F0,j2]),k2=x((G)=>{if(!G)return;J((W)=>W.includes(G)?W:[...W,G])},[]),N2=x(async(G,W=null)=>{let F=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},w=document.getElementById("post-"+G);if(w){F(w);return}try{let b=typeof W==="string"&&W.trim()?W.trim():$,s=(await n1(G,b))?.thread?.[0];if(!s)return;k_((z_)=>{if(!z_)return[s];if(z_.some((j_)=>j_.id===s.id))return z_;return[...z_,s]}),requestAnimationFrame(()=>{setTimeout(()=>{let z_=document.getElementById("post-"+G);if(z_)F(z_)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",G,b)}},[$]),w2=x((G)=>{J((W)=>W.filter((F)=>F!==G))},[]),A2=x(()=>{J([])},[]),P2=x((G)=>{if(!Array.isArray(G)){J([]);return}let W=[],F=new Set;for(let w of G){if(typeof w!=="string"||!w.trim())continue;let b=w.trim();if(F.has(b))continue;F.add(b),W.push(b)}J(W)},[]),b2=x((G)=>{let W=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";L_("Compose failed",W,"error",5000)},[L_]),l0=x((G={})=>{let W=Date.now();if(Q_.current=W,G.running)u_.current=!0,G0((F)=>F?F:!0);if(G.clearSilence)M_.current=0},[G0]),g0=x(()=>{if(h$.current)clearTimeout(h$.current),h$.current=null;i0.current=0},[]);f(()=>()=>{g0()},[g0]);let d$=x(()=>{g0(),n((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:W,lastActivity:F,...w}=G;return w})},[g0]),L2=x((G)=>{if(!G)return;g0();let W=Date.now();i0.current=W,n({type:G.type||"active",last_activity:!0}),h$.current=setTimeout(()=>{if(i0.current!==W)return;n((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},g6)},[g0]),Q=x(()=>{u_.current=!1,G0(!1),Q_.current=null,M_.current=0,F_.current="",C_.current="",p_.current=null,_$.current=null,V_.current=null,r.current=null,D0.current=null,c0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g0(),O_(null),J_(null),U_.current=!1,Y_.current=!1},[g0,O_,J_,G0]),A=x((G)=>{if(!a6({remainingQueueCount:G,currentTurnId:V_.current,isAgentTurnActive:L0}))return;r.current=null,J_(null)},[L0,J_]),z=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),U=x(()=>({agentStatus:__,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:t?{...t}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:W_,steerQueuedTurnId:G_,isAgentTurnActive:Boolean(L0),followupQueueItems:Array.isArray(i_)?i_.map((G)=>({...G})):[],activeModel:c_,activeThinkingLevel:h_,supportsThinking:Boolean(H_),activeModelUsage:N0,contextUsage:E0,isAgentRunning:Boolean(u_.current),wasAgentActive:Boolean(m0.current),draftBuffer:F_.current||"",thoughtBuffer:C_.current||"",lastAgentEvent:Q_.current||null,lastSilenceNotice:M_.current||0,lastAgentResponse:_$.current||null,currentTurnIdRef:V_.current||null,steerQueuedTurnIdRef:r.current||null,thoughtExpanded:Boolean(U_.current),draftExpanded:Boolean(Y_.current),agentStatusRef:D0.current||null,silentRecovery:{...c0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[c_,N0,h_,Z_,X_,__,t,E0,W_,i_,L0,K_,G_,H_]),H=x((G)=>{let W=G||z();g0(),u_.current=Boolean(W.isAgentRunning),m0.current=Boolean(W.wasAgentActive),G0(Boolean(W.isAgentTurnActive)),Q_.current=W.lastAgentEvent||null,M_.current=Number(W.lastSilenceNotice||0),F_.current=W.draftBuffer||"",C_.current=W.thoughtBuffer||"",p_.current=W.pendingRequest||null,_$.current=W.lastAgentResponse||null,V_.current=W.currentTurnIdRef||null,r.current=W.steerQueuedTurnIdRef||null,D0.current=W.agentStatusRef||null,c0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},U_.current=Boolean(W.thoughtExpanded),Y_.current=Boolean(W.draftExpanded),n(W.agentStatus||null),i(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),o_(W.agentPlan||""),a(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),O_(W.currentTurnId||null),J_(W.steerQueuedTurnId||null),A_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((F)=>({...F})):[]),Y0(W.activeModel||null),y_(W.activeThinkingLevel||null),j0(Boolean(W.supportsThinking)),S_(W.activeModelUsage??null),g_(W.contextUsage??null)},[g0,z,O_,A_,G0,J_]),y=x((G)=>{if(!G)return;if(V_.current===G)return;V_.current=G,c0.current={inFlight:!1,lastAttemptAt:0,turnId:G},O_(G),r.current=null,J_(null),F_.current="",C_.current="",i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),p_.current=null,_$.current=null,U_.current=!1,Y_.current=!1},[O_,J_]),M=x((G)=>{if(typeof document<"u"){let j_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&j_)return}let W=_$.current;if(!W||!W.post)return;if(G&&W.turnId&&W.turnId!==G)return;let F=W.post;if(F.id&&c$.current===F.id)return;let w=String(F?.data?.content||"").trim();if(!w)return;c$.current=F.id||c$.current,_$.current=null;let b=w.replace(/\s+/g," ").slice(0,200),u=b$.current||{},z_=(F?.data?.agent_id?u[F.data.agent_id]:null)?.name||"Pi";O0(z_,b)},[O0]),l=x(async(G,W)=>{if(G!=="thought"&&G!=="draft")return;let F=V_.current;if(G==="thought"){if(U_.current=W,F)try{await z9(F,"thought",W)}catch(w){console.warn("Failed to update thought visibility:",w)}if(!W)return;try{let w=F?await Y9(F,"thought"):null;if(w?.text)C_.current=w.text;a((b)=>({...b||{text:"",totalLines:0},fullText:C_.current||b?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:b?.totalLines||0}))}catch(w){console.warn("Failed to fetch full thought:",w)}return}if(Y_.current=W,F)try{await z9(F,"draft",W)}catch(w){console.warn("Failed to update draft visibility:",w)}if(!W)return;try{let w=F?await Y9(F,"draft"):null;if(w?.text)F_.current=w.text;i((b)=>({...b||{text:"",totalLines:0},fullText:F_.current||b?.fullText||"",totalLines:Number.isFinite(w?.total_lines)?w.total_lines:b?.totalLines||0}))}catch(w){console.warn("Failed to fetch full draft:",w)}},[]),d=k(null),p=x(()=>{let G=V$.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);d.current=p;let c=x((G)=>{let W=V$.current;if(!W||typeof G!=="function"){G?.();return}let{currentHashtag:F,searchQuery:w,searchOpen:b}=B0.current||{},u=!((w||b)&&!F),s=u?W.scrollHeight-W.scrollTop:W.scrollTop;G(),requestAnimationFrame(()=>{let z_=V$.current;if(!z_)return;if(u){let j_=Math.max(z_.scrollHeight-s,0);z_.scrollTop=j_}else{let j_=Math.max(z_.scrollHeight-z_.clientHeight,0),h=Math.min(s,j_);z_.scrollTop=h}})},[]),N_=x((G)=>{let W=V$.current;if(!W||typeof G!=="function"){G?.();return}let F=W.scrollTop;G(),requestAnimationFrame(()=>{let w=V$.current;if(!w)return;let b=Math.max(w.scrollHeight-w.clientHeight,0);w.scrollTop=Math.min(F,b)})},[]),X0="Queued as a follow-up (one-at-a-time).",T0="⁣",n0=x((G)=>{if(!G||!Array.isArray(G))return G;let W=e_.current,F=new Set(W),w=G.filter((b)=>{if(F.has(b?.id))return!1;if(b?.data?.is_bot_message){let u=b?.data?.content;if(u===X0||u===T0)return!1}return!0});return w.length===G.length?G:w},[]),{posts:o$,setPosts:k_,hasMore:x2,setHasMore:Q2,hasMoreRef:o2,loadPosts:d0,refreshTimeline:z0,loadMore:$$,loadMoreRef:s$}=f6({preserveTimelineScroll:c,preserveTimelineScrollTop:N_,chatJid:$}),K2=n_(()=>n0(o$),[o$,i_,n0]),B2=x(()=>{let G=W0.current;if(!G)return;k_((W)=>W?W.filter((F)=>F.id!==G):W),W0.current=null},[k_]),{handleSplitterMouseDown:X9,handleSplitterTouchStart:V9,handleEditorSplitterMouseDown:q9,handleEditorSplitterTouchStart:L9,handleDockSplitterMouseDown:Q9,handleDockSplitterTouchStart:B9}=v6({appShellRef:v0,sidebarWidthRef:H$,editorWidthRef:g$,dockHeightRef:p$}),z3=x(()=>{if(!u_.current)return;u_.current=!1,M_.current=0,Q_.current=null,V_.current=null,O_(null),U_.current=!1,Y_.current=!1;let G=(F_.current||"").trim();if(F_.current="",C_.current="",i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),p_.current=null,_$.current=null,!G){n({type:"error",title:"Response stalled - No content received"});return}let F=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,w=Date.now(),b=new Date().toISOString(),u={id:w,timestamp:b,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};W0.current=w,k_((s)=>s?d2([...s,u]):[u]),d.current?.(),n(null)},[O_]);f(()=>{B0.current={currentHashtag:V,searchQuery:q,searchOpen:E}},[V,q,E]);let R_=x(()=>{let G=++x0.current,W=$;cj(W).then((F)=>{if(G!==x0.current)return;if(w_.current!==W)return;let w=B_.current,b=Array.isArray(F?.items)?F.items.map((u)=>({...u})).filter((u)=>!w.has(u.row_id)):[];if(b.length){A_((u)=>{if(u.length===b.length&&u.every((s,z_)=>s.row_id===b[z_].row_id))return u;return b});return}w.clear(),A(0),A_((u)=>u.length===0?u:[])}).catch(()=>{if(G!==x0.current)return;if(w_.current!==W)return;A_((F)=>F.length===0?F:[])})},[A,$,A_]),j$=x(async()=>{let G=$;try{let W=await N3(G);if(w_.current!==G)return;if(W)g_(W)}catch(W){if(w_.current!==G)return;console.warn("Failed to fetch agent context:",W)}},[$]),Z$=x(async()=>{let G=$;try{let W=await W9(G);if(w_.current!==G)return null;if(!W||W.status!=="active"||!W.data){if(m0.current){let{currentHashtag:b,searchQuery:u,searchOpen:s}=B0.current||{};if(!b&&!u&&!s)z0()}return m0.current=!1,Q(),D0.current=null,n(null),i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),p_.current=null,W??null}m0.current=!0;let F=W.data;D0.current=F;let w=F.turn_id||F.turnId;if(w)y(w);if(l0({running:!0,clearSilence:!0}),d$(),n(F),W.thought&&W.thought.text)a((b)=>{if(b&&b.text&&b.text.length>=W.thought.text.length)return b;return C_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)i((b)=>{if(b&&b.text&&b.text.length>=W.draft.text.length)return b;return F_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[Q,d$,l0,z0,y]),A1=x(async()=>{if(!u_.current)return null;if(p_.current)return null;let G=V_.current||null,W=c0.current,F=Date.now();if(W.inFlight)return null;if(W.turnId===G&&F-W.lastAttemptAt<_3)return null;W.inFlight=!0,W.lastAttemptAt=F,W.turnId=G;try{let{currentHashtag:w,searchQuery:b,searchOpen:u}=B0.current||{};if(!w&&!b&&!u)await z0();return await R_(),await Z$()}finally{W.inFlight=!1}},[Z$,R_,z0]);f(()=>{let G=Math.min(1000,Math.max(100,Math.floor(e4/2))),W=setInterval(()=>{if(!u_.current)return;if(p_.current)return;let F=Q_.current;if(!F)return;let w=Date.now(),b=w-F,u=p2(D0.current);if(b>=m6){if(!u)n({type:"waiting",title:"Re-syncing after a quiet period…"});A1();return}if(b>=e4){if(w-M_.current>=_3){if(!u){let s=Math.floor(b/1000);n({type:"waiting",title:`Waiting for model… No events for ${s}s`})}M_.current=w,A1()}}},G);return()=>clearInterval(W)},[A1]);let U9=x((G)=>{if(Y(G),G!=="connected"){n(null),i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),p_.current=null,Q();return}if(!e$.current){e$.current=!0;let{currentHashtag:b,searchQuery:u,searchOpen:s}=B0.current||{};if(!b&&!u&&!s)z0();Z$(),R_(),j$();return}let{currentHashtag:W,searchQuery:F,searchOpen:w}=B0.current;if(!W&&!F&&!w)z0();Z$(),R_(),j$()},[Q,z0,Z$,R_,j$]),O9=x(async(G)=>{B(G),k_(null),await d0(G)},[d0]),F9=x(async()=>{B(null),D(null),k_(null),await d0()},[d0]),H9=x(async(G,W=v)=>{if(!G||!G.trim())return;let F=W==="root"||W==="all"?W:"current";R(F),D(G.trim()),B(null),k_(null);try{let w=await N9(G.trim(),50,0,$,F,U0);k_(w.results),Q2(!1)}catch(w){console.error("Failed to search:",w),k_([])}},[$,U0,v]),D9=x(()=>{S(!0),D(null),B(null),R("current"),k_([])},[]),J9=x(()=>{S(!1),D(null),d0()},[d0]),oj=x(()=>{},[]),P1=!V&&!q&&!E,y9=x(async(G)=>{if(!G)return;let W=G.id,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,w=K2?.filter((u)=>u?.data?.thread_id===W&&u?.id!==W).length||0;if(w>0){if(!window.confirm(`Delete this message and its ${w} replies?`))return}let b=(u)=>{if(!u.length)return;k0((z_)=>{let j_=new Set(z_);return u.forEach((h)=>j_.add(h)),j_}),setTimeout(()=>{if(N_(()=>{k_((z_)=>z_?z_.filter((j_)=>!u.includes(j_.id)):z_)}),k0((z_)=>{let j_=new Set(z_);return u.forEach((h)=>j_.delete(h)),j_}),o2.current)s$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await K9(W,w>0,F);if(u?.ids?.length)b(u.ids)}catch(u){let s=u?.message||"";if(w===0&&s.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let j_=await K9(W,!0,F);if(j_?.ids?.length)b(j_.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${s}`)}},[$,K2,N_]),W3=x(async()=>{try{let G=await vj();m_(p6(G));let W=G?.user||{};q2((w)=>{let b=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",u=typeof W.avatar_url==="string"?W.avatar_url.trim():null,s=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(w.name===b&&w.avatar_url===u&&w.avatar_background===s)return w;return{name:b,avatar_url:u,avatar_background:s}});let F=(G?.agents||[]).find((w)=>w.id==="default");i$(F?.name,F?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,W=await N3(G);if(w_.current!==G)return;if(W)g_(W)}catch{}},[i$,$]);f(()=>{W3();let G=D2("sidebarWidth",null),W=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(H$.current=W,v0.current)v0.current.style.setProperty("--sidebar-width",`${W}px`)},[W3]);let b1=L0||__!==null,G3=x((G)=>{if(!G||typeof G!=="object")return;let W=G.agent_id;if(!W)return;let{agent_name:F,agent_avatar:w}=G;if(!F&&w===void 0)return;let b=b$.current?.[W]||{id:W},u=b.name||null,s=b.avatar_url??b.avatarUrl??b.avatar??null,z_=!1,j_=!1;if(F&&F!==b.name)u=F,j_=!0;if(w!==void 0){let h=typeof w==="string"?w.trim():null,q_=typeof s==="string"?s.trim():null,P_=h||null;if(P_!==(q_||null))s=P_,z_=!0}if(!j_&&!z_)return;if(m_((h)=>{let P_={...h[W]||{id:W}};if(j_)P_.name=u;if(z_)P_.avatar_url=s;return{...h,[W]:P_}}),W==="default")i$(u,s,z_?Date.now():null)},[i$]),X3=x((G)=>{if(!G||typeof G!=="object")return;let W=G.user_name??G.userName,F=G.user_avatar??G.userAvatar,w=G.user_avatar_background??G.userAvatarBackground;if(W===void 0&&F===void 0&&w===void 0)return;q2((b)=>{let u=typeof W==="string"&&W.trim()?W.trim():b.name||"You",s=F===void 0?b.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,z_=w===void 0?b.avatar_background:typeof w==="string"&&w.trim()?w.trim():null;if(b.name===u&&b.avatar_url===s&&b.avatar_background===z_)return b;return{name:u,avatar_url:s,avatar_background:z_}})},[]),x1=x((G)=>{if(!G||typeof G!=="object")return;let W=G.model??G.current;if(W!==void 0)Y0(W);if(G.thinking_level!==void 0)y_(G.thinking_level??null);if(G.supports_thinking!==void 0)j0(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)S_(G.provider_usage??null)},[]),I2=x(()=>{let G=$;uj(G).then((W)=>{if(w_.current!==G)return;if(W)x1(W)}).catch(()=>{})},[x1,$]),b0=x(()=>{let G=$,W=(F)=>Array.isArray(F)?F.filter((w)=>w&&typeof w.chat_jid==="string"&&typeof w.agent_name==="string"&&w.agent_name.trim()):[];Promise.all([mj().catch(()=>({chats:[]})),K3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,w])=>{if(w_.current!==G)return;let b=W(F?.chats),u=W(w?.chats);if(u.length===0){a_(b);return}let s=new Map(b.map((j_)=>[j_.chat_jid,j_])),z_=u.map((j_)=>{let h=s.get(j_.chat_jid);return h?{...j_,...h,is_active:h.is_active??j_.is_active}:j_});z_.sort((j_,h)=>{if(j_.chat_jid===G&&h.chat_jid!==G)return-1;if(h.chat_jid===G&&j_.chat_jid!==G)return 1;let q_=Boolean(j_.archived_at),P_=Boolean(h.archived_at);if(q_!==P_)return q_?1:-1;if(Boolean(j_.is_active)!==Boolean(h.is_active))return j_.is_active?-1:1;return String(j_.chat_jid).localeCompare(String(h.chat_jid))}),a_(z_)}).catch(()=>{if(w_.current!==G)return;a_([])})},[$]),J0=x(()=>{K3(U0).then((G)=>{let W=Array.isArray(G?.chats)?G.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];p0(W)}).catch(()=>{})},[U0]),E9=x((G)=>{let W=G?.row_id;if(W==null)return;B_.current.add(W),A_((F)=>F.filter((w)=>w?.row_id!==W)),hj(W,Z3($)).then(()=>{R_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),L_("Failed to steer message","The queued message could not be sent as steering.","warning"),B_.current.delete(W),R_()})},[$,R_,A_,L_]),k9=x((G)=>{let W=G?.row_id;if(W==null)return;let F=S0.current.filter((w)=>w?.row_id!==W).length;B_.current.add(W),A(F),A_((w)=>w.filter((b)=>b?.row_id!==W)),ij(W,Z3($)).then(()=>{R_()}).catch((w)=>{console.warn("[queue] Failed to remove queued item:",w),L_("Failed to remove message","The queued message could not be removed.","warning"),B_.current.delete(W),R_()})},[A,$,R_,A_,L_]),I1=x((G)=>{if(!G||typeof G!=="object")return;if(b0(),J0(),G?.queued==="followup"||G?.queued==="steer"){R_();return}let W=G?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))R_()},[b0,J0,R_]),M1=x(()=>{if(h0.current)h0.current.abort(),h0.current=null;l_(null)},[]),s2=x(async(G)=>{let W=String(G||"").trim();if(!W)return L_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(h0.current)h0.current.abort();let F=new AbortController;h0.current=F,l_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let w=await lj(W,{signal:F.signal,chatJid:F8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,u)=>{if(b==="side_prompt_start")l_((s)=>s?{...s,status:"running"}:s)},onThinkingDelta:(b)=>{l_((u)=>u?{...u,thinking:`${u.thinking||""}${b||""}`}:u)},onTextDelta:(b)=>{l_((u)=>u?{...u,answer:`${u.answer||""}${b||""}`}:u)}});if(h0.current!==F)return!0;l_((b)=>b?{...b,answer:w?.result||b.answer||"",thinking:w?.thinking||b.thinking||"",model:w?.model||null,status:"success",error:null}:b)}catch(w){if(F.signal.aborted)return!0;l_((b)=>b?{...b,status:"error",error:w?.payload?.error||w?.message||"BTW request failed."}:b)}finally{if(h0.current===F)h0.current=null}return!0},[$,L_]),w9=x(async({content:G})=>{let W=O8(G);if(!W)return!1;if(W.type==="help")return L_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return M1(),L_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await s2(W.question),!0;return!1},[M1,s2,L_]),A9=x(()=>{if(x_?.question)s2(x_.question)},[x_,s2]),P9=x(async()=>{let G=J8(x_);if(!G)return;try{let W=await O2("default",G,null,[],b1?"queue":null,$);I1(W),L_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){L_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[x_,I1,b1,L_]),M2=x(()=>{I2(),b0(),J0(),R_(),j$()},[I2,b0,J0,R_,j$]);f(()=>{M2();let G=setInterval(()=>{I2(),b0(),J0(),R_()},60000);return()=>clearInterval(G)},[M2,I2,b0,J0,R_]),f(()=>{J0()},[J0]),f(()=>{let G=!1;if(k_(null),V)return d0(V),()=>{G=!0};if(q)return N9(q,50,0,$,v,U0).then((W)=>{if(G)return;k_(W.results),Q2(!1)}).catch((W)=>{if(G)return;console.error("Failed to search:",W),k_([]),Q2(!1)}),()=>{G=!0};return d0(),()=>{G=!0}},[$,V,q,v,U0,d0,Q2,k_]),f(()=>{let G=X$.current||$;R0.current.set(G,U())},[$,U]),f(()=>{let G=X$.current||$;if(G===$)return;R0.current.set(G,U()),X$.current=$,B_.current.clear(),H(R0.current.get($)||null),R_(),Z$(),j$()},[$,Z$,j$,R_,H,U]);let b9=x(()=>{let{currentHashtag:G,searchQuery:W,searchOpen:F}=B0.current||{};if(!G&&!W&&!F)z0();M2()},[M2,z0]),C1=x((G,W)=>{let F=W?.turn_id,w=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,u=w?w===$:G==="connected"||G==="workspace_update";if(u)G3(W),X3(W);if(G==="ui_theme"){G8(W);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))d$()}if(G==="connected"){n(null),i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),p_.current=null,Q();let h=$;W9(h).then((y0)=>{if(w_.current!==h)return;if(!y0||y0.status!=="active"||!y0.data)return;let Y2=y0.data,r2=Y2.turn_id||Y2.turnId;if(r2)y(r2);if(l0({clearSilence:!0}),L2(Y2),y0.thought&&y0.thought.text)C_.current=y0.thought.text,a({text:y0.thought.text,totalLines:y0.thought.totalLines||0});if(y0.draft&&y0.draft.text)F_.current=y0.draft.text,i({text:y0.draft.text,totalLines:y0.draft.totalLines||0})}).catch((y0)=>{console.warn("Failed to fetch agent status:",y0)});let{currentHashtag:q_,searchQuery:P_,searchOpen:N$}=B0.current||{};if(!q_&&!P_&&!N$)z0();M2();return}if(G==="agent_status"){if(!u){if(W?.type==="done"||W?.type==="error")b0(),J0();return}if(W.type==="done"||W.type==="error"){if(F&&V_.current&&F!==V_.current)return;if(W.type==="done"){M(F||V_.current);let{currentHashtag:h,searchQuery:q_,searchOpen:P_}=B0.current||{};if(!h&&!q_&&!P_)z0();if(W.context_usage)g_(W.context_usage)}if(m0.current=!1,Q(),B_.current.clear(),b0(),R_(),i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null),W.type==="error")n({type:"error",title:W.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(F)y(F);if(l0({running:!0,clearSilence:!0}),W.type==="thinking")F_.current="",C_.current="",i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0});D0.current=W,n((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(G==="agent_steer_queued"){if(!u)return;if(F&&V_.current&&F!==V_.current)return;let h=F||V_.current;if(!h)return;r.current=h,J_(h);return}if(G==="agent_followup_queued"){if(!u)return;let h=W?.row_id,q_=W?.content;if(h!=null&&typeof q_==="string"&&q_.trim())A_((P_)=>{if(P_.some((N$)=>N$?.row_id===h))return P_;return[...P_,{row_id:h,content:q_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});R_();return}if(G==="agent_followup_consumed"){if(!u)return;let h=W?.row_id;if(h!=null){let y0=S0.current.filter((Y2)=>Y2.row_id!==h).length;A(y0),A_((Y2)=>Y2.filter((r2)=>r2.row_id!==h))}R_();let{currentHashtag:q_,searchQuery:P_,searchOpen:N$}=B0.current||{};if(!q_&&!P_&&!N$)z0();return}if(G==="agent_followup_removed"){if(!u)return;let h=W?.row_id;if(h!=null){let q_=S0.current.filter((P_)=>P_.row_id!==h).length;B_.current.add(h),A(q_),A_((P_)=>P_.filter((N$)=>N$.row_id!==h))}R_();return}if(G==="agent_draft_delta"){if(!u)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)y(F);if(l0({running:!0,clearSilence:!0}),W?.reset)F_.current="";if(W?.delta)F_.current+=W.delta;let h=Date.now();if(!_2.current||h-_2.current>=100){_2.current=h;let q_=F_.current,P_=$3(q_);if(Y_.current)i((N$)=>({text:N$?.text||"",totalLines:P_,fullText:q_}));else i({text:q_,totalLines:P_})}return}if(G==="agent_draft"){if(!u)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)y(F);l0({running:!0,clearSilence:!0});let h=W.text||"",q_=W.mode||(W.kind==="plan"?"replace":"append"),P_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(q_==="replace")o_(h);else o_((N$)=>(N$||"")+h);else if(!Y_.current)F_.current=h,i({text:h,totalLines:P_});return}if(G==="agent_thought_delta"){if(!u)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)y(F);if(l0({running:!0,clearSilence:!0}),W?.reset)C_.current="";if(typeof W?.delta==="string")C_.current+=W.delta;let h=Date.now();if(U_.current&&(!$2.current||h-$2.current>=100)){$2.current=h;let q_=C_.current;a((P_)=>({text:P_?.text||"",totalLines:$3(q_),fullText:q_}))}return}if(G==="agent_thought"){if(!u)return;if(F&&V_.current&&F!==V_.current)return;if(F&&!V_.current)y(F);l0({running:!0,clearSilence:!0});let h=W.text||"",q_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!U_.current)C_.current=h,a({text:h,totalLines:q_});return}if(G==="model_changed"){if(!u)return;if(W?.model!==void 0)Y0(W.model);if(W?.thinking_level!==void 0)y_(W.thinking_level??null);if(W?.supports_thinking!==void 0)j0(Boolean(W.supports_thinking));let h=$;N3(h).then((q_)=>{if(w_.current!==h)return;if(q_)g_(q_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(_9(G)){if(!u)return;if($9(G,W),G==="extension_ui_notify"&&typeof W?.message==="string")L_(W.message,null,W?.type||"info");if(G==="extension_ui_error"&&typeof W?.error==="string")L_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:s,searchQuery:z_,searchOpen:j_}=B0.current;if(G==="agent_response"){if(!u)return;B2(),_$.current={post:W,turnId:V_.current}}if(!s&&!z_&&!j_&&u&&(G==="new_post"||G==="new_reply"||G==="agent_response"))k_((h)=>{if(!h)return[W];if(h.some((q_)=>q_.id===W.id))return h;return[...h,W]}),d.current?.();if(G==="interaction_updated"){if(!u)return;if(s||z_||j_)return;k_((h)=>{if(!h)return h;if(!h.some((q_)=>q_.id===W.id))return h;return h.map((q_)=>q_.id===W.id?W:q_)})}if(G==="interaction_deleted"){if(!u)return;if(s||z_||j_)return;let h=W?.ids||[];if(h.length){if(N_(()=>{k_((q_)=>q_?q_.filter((P_)=>!h.includes(P_.id)):q_)}),o2.current)s$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[Q,d$,$,s$,l0,M,N_,b0,J0,z0,B2,y,L2,G3,X3,I2,R_,A_]);f(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=C1,G.reset=()=>{B2(),Q(),n(null),i({text:"",totalLines:0}),o_(""),a({text:"",totalLines:0}),$_(null)},G.finalize=()=>z3(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[Q,z3,C1,B2]),T6({handleSseEvent:C1,handleConnectionStatusChange:U9,loadPosts:d0,onWake:b9,chatJid:$}),f(()=>{if(!K2||K2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let W=G.slice(5);N2(W),history.replaceState(null,"",location.pathname+location.search)},[K2,N2]);let T1=__!==null;f(()=>{if(K!=="connected")return;let W=setInterval(()=>{let{currentHashtag:F,searchQuery:w,searchOpen:b}=B0.current||{},u=!F&&!w&&!b;if(T1){if(u)z0();R_(),Z$(),j$()}else{if(u)z0();Z$(),j$()}},T1?15000:60000);return()=>clearInterval(W)},[K,T1,Z$,j$,R_,z0]),f(()=>{return Z9(()=>{Z$(),j$(),R_()})},[Z$,j$,R_]);let x9=x(()=>{Q$((G)=>!G)},[]),V3=x((G)=>{if(typeof window>"u")return;let W=String(G||"").trim();if(!W||W===$)return;let F=V2(window.location.href,W,{chatOnly:j});window.location.assign(F)},[j,$]),q3=x(async()=>{if(typeof window>"u"||!I_?.chat_jid)return;let G=I_.display_name||I_.agent_name||"",W=window.prompt("Agent name",G);if(W===null)return;let F=W.trim(),w=F.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||I_.agent_name||"";try{let b=await gj(I_.chat_jid,{displayName:F,agentName:w});await Promise.allSettled([b0(),J0()]);let u=b?.branch?.agent_name||w||I_.agent_name||"",s=b?.branch?.display_name||F||u;L_("Branch renamed",`${s} (@${u})`,"info",3500)}catch(b){let u=b instanceof Error?b.message:String(b||"Could not rename branch."),s=/already in use/i.test(u||"")?`${u} Switch to or restore that existing session from the session manager.`:u;L_("Could not rename branch",s||"Could not rename branch.","warning",5000)}},[I_,b0,J0,L_]),L3=x(async(G=null)=>{if(typeof window>"u")return;let W=typeof G==="string"&&G.trim()?G.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",w=W||I_?.chat_jid||F;if(!w){L_("Could not prune branch","No active session is selected yet.","warning",4000);return}let b=(I_?.chat_jid===w?I_:null)||Z0.find((j_)=>j_?.chat_jid===w)||b_.find((j_)=>j_?.chat_jid===w)||null;if(b?.chat_jid===(b?.root_chat_jid||b?.chat_jid)){L_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let s=`@${b?.agent_name||w}${b?.chat_jid?` — ${b.chat_jid}`:""}`;if(!window.confirm(`Prune ${s}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await pj(w),await Promise.allSettled([b0(),J0()]);let j_=b?.root_chat_jid||"web:default";L_("Branch pruned",`${s} has been archived.`,"info",3000);let h=V2(window.location.href,j_,{chatOnly:j});window.location.assign(h)}catch(j_){let h=j_ instanceof Error?j_.message:String(j_||"Could not prune branch.");L_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[b_,j,I_,Z0,$,b0,J0,L_]),I9=x(async(G)=>{let W=typeof G==="string"?G.trim():"";if(!W||typeof G9!=="function")return;try{let F=await G9(W);await Promise.allSettled([b0(),J0()]);let w=F?.branch,b=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():W,u=typeof w?.agent_name==="string"&&w.agent_name.trim()?`@${w.agent_name.trim()}`:b;L_("Branch restored",`Restored ${u}.`,"info",3200);let s=V2(window.location.href,b,{chatOnly:j});window.location.assign(s)}catch(F){let w=F instanceof Error?F.message:String(F||"Could not restore branch.");L_("Could not restore branch",w||"Could not restore branch.","warning",5000)}},[j,b0,J0,L_]);f(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{E_({status:"running",message:"Preparing a new chat branch…"});let W=await f2(N);if(G)return;let F=W?.branch,w=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");let b=V2(window.location.href,w,{chatOnly:!0});window.location.replace(b)}catch(W){if(G)return;E_({status:"error",message:w1(W)})}})(),()=>{G=!0}},[Z,N]);let M9=x(async()=>{if(typeof window>"u")return;try{let W=(await f2($))?.branch,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([b0(),J0()]);let w=W?.agent_name?`@${W.agent_name}`:F;L_("New branch created",`Switched to ${w}.`,"info",2500);let b=V2(window.location.href,F,{chatOnly:j});window.location.assign(b)}catch(G){L_("Could not create branch",w1(G),"warning",5000)}},[j,$,b0,J0,L_]),C9=x(async()=>{if(typeof window>"u"||X)return;let G=l6($);if(!G){L_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let F=r6(window.location.href,$,{chatOnly:!0});if(!window.open(F,G.target))L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=n6(G);if(!W){L_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}d6(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let w=(await f2($))?.branch,b=typeof w?.chat_jid==="string"&&w.chat_jid.trim()?w.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");try{let s=await o1();a_(Array.isArray(s?.chats)?s.chats:[])}catch{}try{let s=await K3(U0);p0(Array.isArray(s?.chats)?s.chats:[])}catch{}let u=V2(window.location.href,b,{chatOnly:!0});o6(W,u)}catch(F){s6(W),L_("Could not open branch window",w1(F),"error",5000)}},[$,U0,X,L_]);f(()=>{if(!Q0)return;if(typeof window>"u")return;let G=v0.current;if(!G)return;if(!g$.current){let W=D2("editorWidth",null),F=H$.current||280;g$.current=Number.isFinite(W)?W:F}if(G.style.setProperty("--editor-width",`${g$.current}px`),!p$.current){let W=D2("dockHeight",null);p$.current=Number.isFinite(W)?W:200}G.style.setProperty("--dock-height",`${p$.current}px`)},[Q0]),f(()=>{if(!M0||j)return;let G=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),C0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[C0,M0,j]),f(()=>{if(j)return;let G=(W)=>{if(W.ctrlKey&&W.shiftKey&&(W.key==="Z"||W.key==="z")){W.preventDefault(),F$();return}if(W.key==="Escape"&&A0)W.preventDefault(),P0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[F$,P0,A0,j]);let T9=Boolean(G_&&G_===(__?.turn_id||W_));if(Z)return O`
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
        `;return O`
        <div class=${`app-shell${I0?"":" workspace-collapsed"}${Q0?" editor-open":""}${j?" chat-only":""}${A0?" zen-mode":""}`} ref=${v0}>
            ${!j&&O`
                <${b6}
                    onFileSelect=${j2}
                    visible=${I0}
                    active=${I0||Q0}
                    onOpenEditor=${K0}
                    onOpenTerminalTab=${k$}
                    onToggleTerminal=${M0?C0:void 0}
                    terminalVisible=${Boolean(M0&&f_)}
                />
                <button
                    class=${`workspace-toggle-tab${I0?" open":" closed"}`}
                    onClick=${x9}
                    title=${I0?"Hide workspace":"Show workspace"}
                    aria-label=${I0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${X9} onTouchStart=${V9}></div>
            `}
            ${G$&&O`
                <div class="editor-pane-container">
                    ${A0&&O`<div class="zen-hover-zone"></div>`}
                    ${Q0&&O`
                        <${I6}
                            tabs=${t$}
                            activeId=${F0}
                            onActivate=${w0}
                            onClose=${B$}
                            onCloseOthers=${f0}
                            onCloseAll=${t0}
                            onTogglePin=${U$}
                            onTogglePreview=${E$}
                            previewTabs=${y$}
                            onToggleDock=${M0?C0:void 0}
                            dockVisible=${M0&&f_}
                            onToggleZen=${F$}
                            zenMode=${A0}
                        />
                    `}
                    ${Q0&&O`<div class="editor-pane-host" ref=${u$}></div>`}
                    ${Q0&&F0&&y$.has(F0)&&O`
                        <${C6}
                            getContent=${()=>H0.current?.getContent?.()}
                            path=${F0}
                            onClose=${()=>E$(F0)}
                        />
                    `}
                    ${M0&&f_&&O`<div class="dock-splitter" onMouseDown=${Q9} onTouchStart=${B9}></div>`}
                    ${M0&&O`<div class=${`dock-panel${f_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${C0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${O$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${q9} onTouchStart=${L9}></div>
            `}
            <div class="container">
                ${q&&c6()&&O`<div class="search-results-spacer"></div>`}
                ${j&&O`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${I_?.agent_name?`@${I_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${I_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Z0.length>1&&O`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>V3(G.currentTarget.value)}
                                    >
                                        ${Z0.map((G)=>O`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${I_?.chat_jid&&O`
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
                            ${I_?.chat_jid&&I_.chat_jid!==(I_.root_chat_jid||I_.chat_jid)&&O`
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
                ${(V||q)&&O`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${F9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${q} · ${C}`}</span>
                    </div>
                `}
                <${l8}
                    posts=${K2}
                    hasMore=${P1?x2:!1}
                    onLoadMore=${P1?$$:void 0}
                    timelineRef=${V$}
                    onHashtagClick=${O9}
                    onMessageRef=${k2}
                    onScrollToMessage=${N2}
                    onFileRef=${n$}
                    onPostClick=${void 0}
                    onDeletePost=${y9}
                    emptyMessage=${V?`No posts with #${V}`:q?`No results for "${q}"`:void 0}
                    agents=${T_}
                    user=${P$}
                    reverse=${P1}
                    removingPostIds=${J$}
                    searchQuery=${q}
                />
                <${x8}
                    status=${__}
                    draft=${Z_}
                    plan=${X_}
                    thought=${t}
                    pendingRequest=${K_}
                    intent=${m}
                    turnId=${W_}
                    steerQueued=${T9}
                    onPanelToggle=${l}
                />
                <${y8}
                    session=${x_}
                    onClose=${M1}
                    onRetry=${A9}
                    onInject=${P9}
                />
                <${s3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:W}=B0.current||{};if(!G&&!W)d0(),p()}}
                    onFocus=${p}
                    searchMode=${E}
                    searchScope=${v}
                    onSearch=${H9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${D9}
                    onExitSearch=${J9}
                    fileRefs=${P}
                    onRemoveFileRef=${M$}
                    onClearFileRefs=${E2}
                    onSetFileRefs=${l$}
                    messageRefs=${g}
                    onRemoveMessageRef=${w2}
                    onClearMessageRefs=${A2}
                    onSetMessageRefs=${P2}
                    onSwitchChat=${V3}
                    onRenameSession=${q3}
                    onCreateSession=${M9}
                    onDeleteSession=${L3}
                    onRestoreSession=${I9}
                    activeEditorPath=${j?null:F0}
                    onAttachEditorFile=${j?void 0:Z2}
                    onOpenFilePill=${n$}
                    followupQueueCount=${D_}
                    followupQueueItems=${i_}
                    onInjectQueuedFollowup=${E9}
                    onRemoveQueuedFollowup=${k9}
                    onSubmitIntercept=${w9}
                    onMessageResponse=${I1}
                    onSubmitError=${b2}
                    onPopOutChat=${X?void 0:C9}
                    isAgentActive=${b1}
                    activeChatAgents=${b_}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${c_}
                    modelUsage=${N0}
                    thinkingLevel=${h_}
                    supportsThinking=${H_}
                    contextUsage=${E0}
                    notificationsEnabled=${f$}
                    notificationPermission=${u0}
                    onToggleNotifications=${R$}
                    onModelChange=${Y0}
                    onModelStateChange=${x1}
                />
                <${I8}
                    request=${K_}
                    onRespond=${()=>{$_(null),p_.current=null}}
                />
            </div>
        </div>
    `}function dj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return O`<${nj} locationParams=${_} />`}u3(O`<${dj} />`,document.getElementById("app"));

//# debugId=C894F1C42D8E860364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
