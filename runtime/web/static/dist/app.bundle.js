var Pj=Object.defineProperty;var Ij=(_)=>_;function Cj(_,$){this[_]=Ij.bind(null,$)}var yj=(_,$)=>{for(var j in $)Pj(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Cj.bind($,j)})};var _5,W1,V3,Tj,C4,e6,W3,L3,U3,s5,n5,d5,Sj,a$={},t$=[],xj=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$5=Array.isArray;function q4(_,$){for(var j in $)_[j]=$[j];return _}function a5(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function z3(_,$,j){var N,Z,Y,K={};for(Y in $)Y=="key"?N=$[Y]:Y=="ref"?Z=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?_5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return r$(_,K,N,Z,null)}function r$(_,$,j,N,Z){var Y={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++V3:Z,__i:-1,__u:0};return Z==null&&W1.vnode!=null&&W1.vnode(Y),Y}function j5(_){return _.children}function o$(_,$){this.props=_,this.context=$}function _$(_,$){if($==null)return _.__?_$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_$(_):null}function wj(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],Y=q4({},$);Y.__v=$.__v+1,W1.vnode&&W1.vnode(Y),t5(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?_$($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,J3(N,Y,Z),$.__e=$.__=null,Y.__e!=j&&F3(Y)}}function F3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),F3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!e$.__r++||e6!=W1.debounceRendering)&&((e6=W1.debounceRendering)||W3)(e$)}function e$(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(L3),_=C4.shift(),$=C4.length,wj(_)}finally{C4.length=e$.__r=0}}function O3(_,$,j,N,Z,Y,K,Q,q,B,W){var V,U,A,D,M,y,J,k=N&&N.__k||t$,I=$.length;for(q=Rj(j,$,k,q,I),V=0;V<I;V++)(A=j.__k[V])!=null&&(U=A.__i!=-1&&k[A.__i]||a$,A.__i=V,y=t5(_,A,U,Z,Y,K,Q,q,B,W),D=A.__e,A.ref&&U.ref!=A.ref&&(U.ref&&e5(U.ref,null,A),W.push(A.ref,A.__c||D,A)),M==null&&D!=null&&(M=D),(J=!!(4&A.__u))||U.__k===A.__k?q=H3(A,q,_,J):typeof A.type=="function"&&y!==void 0?q=y:D&&(q=D.nextSibling),A.__u&=-7);return j.__e=M,q}function Rj(_,$,j,N,Z){var Y,K,Q,q,B,W=j.length,V=W,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(K=$[Y])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[Y]=r$(null,K,null,null,null):$5(K)?K=_.__k[Y]=r$(j5,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[Y]=r$(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[Y]=K,q=Y+U,K.__=_,K.__b=_.__b+1,Q=null,(B=K.__i=vj(K,j,q,V))!=-1&&(V--,(Q=j[B])&&(Q.__u|=2)),Q==null||Q.__v==null?(B==-1&&(Z>W?U--:Z<W&&U++),typeof K.type!="function"&&(K.__u|=4)):B!=q&&(B==q-1?U--:B==q+1?U++:(B>q?U--:U++,K.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<W;Y++)(Q=j[Y])!=null&&(2&Q.__u)==0&&(Q.__e==N&&(N=_$(Q)),E3(Q,Q));return N}function H3(_,$,j,N){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=H3(Z[Y],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=_$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function vj(_,$,j,N){var Z,Y,K,Q=_.key,q=_.type,B=$[j],W=B!=null&&(2&B.__u)==0;if(B===null&&Q==null||W&&Q==B.key&&q==B.type)return j;if(N>(W?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((B=$[K=Z>=0?Z--:Y++])!=null&&(2&B.__u)==0&&Q==B.key&&q==B.type)return K}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||xj.test($)?j:j+"px"}function d$(_,$,j,N,Z){var Y,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(U3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?N?j.u=N.u:(j.u=s5,_.addEventListener($,Y?d5:n5,Y)):_.removeEventListener($,Y?d5:n5,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=s5++;else if($.t<j.u)return;return j(W1.event?W1.event($):$)}}}function t5(_,$,j,N,Z,Y,K,Q,q,B){var W,V,U,A,D,M,y,J,k,I,R,E,u,s,i,g=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),Y=[Q=$.__e=j.__e]),(W=W1.__b)&&W($);_:if(typeof g=="function")try{if(J=$.props,k=g.prototype&&g.prototype.render,I=(W=g.contextType)&&N[W.__c],R=W?I?I.props.value:W.__:N,j.__c?y=(V=$.__c=j.__c).__=V.__E:(k?$.__c=V=new g(J,R):($.__c=V=new o$(J,R),V.constructor=g,V.render=bj),I&&I.sub(V),V.state||(V.state={}),V.__n=N,U=V.__d=!0,V.__h=[],V._sb=[]),k&&V.__s==null&&(V.__s=V.state),k&&g.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=q4({},V.__s)),q4(V.__s,g.getDerivedStateFromProps(J,V.__s))),A=V.props,D=V.state,V.__v=$,U)k&&g.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),k&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(k&&g.getDerivedStateFromProps==null&&J!==A&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,R),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,R)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(w){w&&(w.__=$)}),t$.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&K.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,R),k&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(A,D,M)})}if(V.context=R,V.props=J,V.__P=_,V.__e=!1,E=W1.__r,u=0,k)V.state=V.__s,V.__d=!1,E&&E($),W=V.render(V.props,V.state,V.context),t$.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,E&&E($),W=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++u<25);V.state=V.__s,V.getChildContext!=null&&(N=q4(q4({},N),V.getChildContext())),k&&!U&&V.getSnapshotBeforeUpdate!=null&&(M=V.getSnapshotBeforeUpdate(A,D)),s=W!=null&&W.type===j5&&W.key==null?D3(W.props.children):W,Q=O3(_,$5(s)?s:[s],$,j,N,Z,Y,K,Q,q,B),V.base=$.__e,$.__u&=-161,V.__h.length&&K.push(V),y&&(V.__E=V.__=null)}catch(w){if($.__v=null,q||Y!=null)if(w.then){for($.__u|=q?160:128;Q&&Q.nodeType==8&&Q.nextSibling;)Q=Q.nextSibling;Y[Y.indexOf(Q)]=null,$.__e=Q}else{for(i=Y.length;i--;)a5(Y[i]);r5($)}else $.__e=j.__e,$.__k=j.__k,w.then||r5($);W1.__e(w,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Q=$.__e=fj(j.__e,$,j,N,Z,Y,K,q,B);return(W=W1.diffed)&&W($),128&$.__u?void 0:Q}function r5(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(r5))}function J3(_,$,j){for(var N=0;N<j.length;N++)e5(j[N],j[++N],j[++N]);W1.__c&&W1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){W1.__e(Y,Z.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:$5(_)?_.map(D3):q4({},_)}function fj(_,$,j,N,Z,Y,K,Q,q){var B,W,V,U,A,D,M,y=j.props||a$,J=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(B=0;B<Y.length;B++)if((A=Y[B])&&"setAttribute"in A==!!k&&(k?A.localName==k:A.nodeType==3)){_=A,Y[B]=null;break}}if(_==null){if(k==null)return document.createTextNode(J);_=document.createElementNS(Z,k,J.is&&J),Q&&(W1.__m&&W1.__m($,Y),Q=!1),Y=null}if(k==null)y===J||Q&&_.data==J||(_.data=J);else{if(Y=Y&&_5.call(_.childNodes),!Q&&Y!=null)for(y={},B=0;B<_.attributes.length;B++)y[(A=_.attributes[B]).name]=A.value;for(B in y)A=y[B],B=="dangerouslySetInnerHTML"?V=A:B=="children"||(B in J)||B=="value"&&("defaultValue"in J)||B=="checked"&&("defaultChecked"in J)||d$(_,B,null,A,Z);for(B in J)A=J[B],B=="children"?U=A:B=="dangerouslySetInnerHTML"?W=A:B=="value"?D=A:B=="checked"?M=A:Q&&typeof A!="function"||y[B]===A||d$(_,B,A,y[B],Z);if(W)Q||V&&(W.__html==V.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(V&&(_.innerHTML=""),O3($.type=="template"?_.content:_,$5(U)?U:[U],$,j,N,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,K,Y?Y[0]:j.__k&&_$(j,0),Q,q),Y!=null)for(B=Y.length;B--;)a5(Y[B]);Q||(B="value",k=="progress"&&D==null?_.removeAttribute("value"):D!=null&&(D!==_[B]||k=="progress"&&!D||k=="option"&&D!=y[B])&&d$(_,B,D,y[B],Z),B="checked",M!=null&&M!=_[B]&&d$(_,B,M,y[B],Z))}return _}function e5(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){W1.__e(Z,j)}}function E3(_,$,j){var N,Z;if(W1.unmount&&W1.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||e5(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(Y){W1.__e(Y,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&E3(N[Z],$,j||typeof _.type!="function");j||a5(_.__e),_.__c=_.__=_.__e=void 0}function bj(_,$,j){return this.constructor(_,j)}function A3(_,$,j){var N,Z,Y,K;$==document&&($=document.documentElement),W1.__&&W1.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],K=[],t5($,_=(!N&&j||$).__k=z3(j5,null,[_]),Z||a$,a$,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?_5.call($.childNodes):null,Y,!N&&j?j:Z?Z.__e:$.firstChild,N,K),J3(Y,_,K)}_5=t$.slice,W1={__e:function(_,$,j,N){for(var Z,Y,K;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),K=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),K=Z.__d),K)return Z.__E=Z}catch(Q){_=Q}throw _}},V3=0,Tj=function(_){return _!=null&&_.constructor===void 0},o$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q4({},this.state),typeof _=="function"&&(_=_(q4({},j),this.props)),_&&q4(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},o$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},o$.prototype.render=j5,C4=[],W3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L3=function(_,$){return _.__v.__b-$.__v.__b},e$.__r=0,U3=/(PointerCapture)$|Capture$/i,s5=0,n5=j3(!1),d5=j3(!0),Sj=0;var J$,C1,i5,N3,D$=0,M3=[],I1=W1,Z3=I1.__b,Y3=I1.__r,K3=I1.diffed,Q3=I1.__c,B3=I1.unmount,q3=I1.__;function _8(_,$){I1.__h&&I1.__h(C1,_,D$||$),D$=0;var j=C1.__H||(C1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function c(_){return D$=1,uj(P3,_)}function uj(_,$,j){var N=_8(J$++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):P3(void 0,$),function(Q){var q=N.__N?N.__N[0]:N.__[0],B=N.t(q,Q);q!==B&&(N.__N=[B,N.__[1]],N.__c.setState({}))}],N.__c=C1,!C1.__f)){var Z=function(Q,q,B){if(!N.__c.__H)return!0;var W=N.__c.__H.__.filter(function(U){return U.__c});if(W.every(function(U){return!U.__N}))return!Y||Y.call(this,Q,q,B);var V=N.__c.props!==Q;return W.some(function(U){if(U.__N){var A=U.__[0];U.__=U.__N,U.__N=void 0,A!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,Q,q,B)||V};C1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:K}=C1;C1.componentWillUpdate=function(Q,q,B){if(this.__e){var W=Y;Y=void 0,Z(Q,q,B),Y=W}K&&K.call(this,Q,q,B)},C1.shouldComponentUpdate=Z}return N.__N||N.__}function p(_,$){var j=_8(J$++,3);!I1.__s&&k3(j.__H,$)&&(j.__=_,j.u=$,C1.__H.__h.push(j))}function T(_){return D$=5,y0(function(){return{current:_}},[])}function y0(_,$){var j=_8(J$++,7);return k3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return D$=8,y0(function(){return _},$)}function mj(){for(var _;_=M3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(s$),$.__h.some(o5),$.__h=[]}catch(j){$.__h=[],I1.__e(j,_.__v)}}}I1.__b=function(_){C1=null,Z3&&Z3(_)},I1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),q3&&q3(_,$)},I1.__r=function(_){Y3&&Y3(_),J$=0;var $=(C1=_.__c).__H;$&&(i5===C1?($.__h=[],C1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(s$),$.__h.some(o5),$.__h=[],J$=0)),i5=C1},I1.diffed=function(_){K3&&K3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(M3.push($)!==1&&N3===I1.requestAnimationFrame||((N3=I1.requestAnimationFrame)||gj)(mj)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),i5=C1=null},I1.__c=function(_,$){$.some(function(j){try{j.__h.some(s$),j.__h=j.__h.filter(function(N){return!N.__||o5(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],I1.__e(N,j.__v)}}),Q3&&Q3(_,$)},I1.unmount=function(_){B3&&B3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{s$(N)}catch(Z){$=Z}}),j.__H=void 0,$&&I1.__e($,j.__v))};var G3=typeof requestAnimationFrame=="function";function gj(_){var $,j=function(){clearTimeout(N),G3&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);G3&&($=requestAnimationFrame(j))}function s$(_){var $=C1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),C1=$}function o5(_){var $=C1;_.__c=_.__(),C1=$}function k3(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function P3(_,$){return typeof $=="function"?$(_):$}var I3=function(_,$,j,N){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],Q=$[Y]?($[0]|=K?1:2,j[$[Y++]]):$[++Y];K===3?N[0]=Q:K===4?N[1]=Object.assign(N[1]||{},Q):K===5?(N[1]=N[1]||{})[$[++Y]]=Q:K===6?N[1][$[++Y]]+=Q+"":K?(Z=_.apply(Q,I3(_,Q,j,["",null])),N.push(Z),Q[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):N.push(Q)}return N},X3=new Map;function hj(_){var $=X3.get(this);return $||($=new Map,X3.set(this,$)),($=I3(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,Y=1,K="",Q="",q=[0],B=function(U){Y===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,K):Y===3&&(U||K)?(q.push(3,U,K),Y=2):Y===2&&K==="..."&&U?q.push(4,U,0):Y===2&&K&&!U?q.push(5,0,!0,K):Y>=5&&((K||!U&&Y===5)&&(q.push(Y,0,K,Z),Y=6),U&&(q.push(Y,U,0,Z),Y=6)),K=""},W=0;W<j.length;W++){W&&(Y===1&&B(),B(W));for(var V=0;V<j[W].length;V++)N=j[W][V],Y===1?N==="<"?(B(),q=[q],Y=3):K+=N:Y===4?K==="--"&&N===">"?(Y=1,K=""):K=N+K[0]:Q?N===Q?Q="":K+=N:N==='"'||N==="'"?Q=N:N===">"?(B(),Y=1):Y&&(N==="="?(Y=5,Z=K,K=""):N==="/"&&(Y<5||j[W][V+1]===">")?(B(),Y===3&&(q=q[0]),Y=q,(q=q[0]).push(2,0,Y),Y=0):N===" "||N==="\t"||N===`
`||N==="\r"?(B(),Y=2):K+=N),Y===3&&K==="!--"&&(Y=4,q=q[0])}return B(),q}(_)),$),arguments,[])).length>1?$:$[0]}var z=hj.bind(z3);var G_={};yj(G_,{uploadWorkspaceFile:()=>Z5,uploadMedia:()=>B8,updateWorkspaceFile:()=>NN,submitAdaptiveCardAction:()=>q8,streamSidePrompt:()=>_N,steerAgentQueueItem:()=>ej,setWorkspaceVisibility:()=>k$,setAgentThoughtVisibility:()=>V8,sendPeerAgentMessage:()=>oj,sendAgentMessage:()=>p4,searchPosts:()=>j8,restoreChatBranch:()=>rj,respondToAgentRequest:()=>N5,renameWorkspaceFile:()=>O8,renameChatBranch:()=>nj,removeAgentQueueItem:()=>tj,pruneChatBranch:()=>dj,moveWorkspaceEntry:()=>H8,getWorkspaceTree:()=>M$,getWorkspaceRawUrl:()=>Y5,getWorkspaceFile:()=>U8,getWorkspaceDownloadUrl:()=>K5,getWorkspaceBranch:()=>jN,getTimeline:()=>h4,getThumbnailUrl:()=>W8,getThread:()=>N8,getPostsByHashtag:()=>$8,getMediaUrl:()=>P_,getMediaText:()=>L8,getMediaInfo:()=>$$,getMediaBlob:()=>$N,getChatBranches:()=>ij,getAgents:()=>K8,getAgentThought:()=>X8,getAgentStatus:()=>Q8,getAgentQueueState:()=>aj,getAgentModels:()=>A$,getAgentContext:()=>sj,getActiveChatAgents:()=>Y8,forkChatBranch:()=>E$,deleteWorkspaceFile:()=>J8,deletePost:()=>Z8,createWorkspaceFile:()=>F8,createReply:()=>lj,createPost:()=>cj,attachWorkspaceFile:()=>z8,addToWhitelist:()=>G8,SSEClient:()=>Q5});async function $1(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function C3(_){let $=String(_||"").split(`
`),j="message",N=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))N.push(Y.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function pj(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:K,done:Q}=await j.read();if(Q)break;Z+=N.decode(K,{stream:!0});let q=Z.split(`

`);Z=q.pop()||"";for(let B of q){let W=C3(B);if(W)$(W.event,W.data)}}Z+=N.decode();let Y=C3(Z);if(Y)$(Y.event,Y.data)}async function h4(_=10,$=null,j=null){let N=`/timeline?limit=${_}`;if($)N+=`&before=${$}`;if(j)N+=`&chat_jid=${encodeURIComponent(j)}`;return $1(N)}async function $8(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return $1(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function j8(_,$=50,j=0,N=null,Z="current",Y=null){let K=N?`&chat_jid=${encodeURIComponent(N)}`:"",Q=Z?`&scope=${encodeURIComponent(Z)}`:"",q=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return $1(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${Q}${q}`)}async function N8(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return $1(`/thread/${_}${j}`)}async function cj(_,$=[],j=null){let N=j?`?chat_jid=${encodeURIComponent(j)}`:"";return $1(`/post${N}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function lj(_,$,j=[],N=null){let Z=N?`?chat_jid=${encodeURIComponent(N)}`:"";return $1(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Z8(_,$=!1,j=null){let N=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${N}`;return $1(Z,{method:"DELETE"})}async function p4(_,$,j=null,N=[],Z=null,Y=null){let K=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return $1(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function Y8(){return $1("/agent/active-chats")}async function ij(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let N=j.toString()?`?${j.toString()}`:"";return $1(`/agent/branches${N}`)}async function E$(_,$={}){return $1("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function nj(_,$={}){return $1("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function dj(_){return $1("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function rj(_,$={}){return $1("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function oj(_,$,j,N="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:N,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return $1("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function K8(){return $1("/agent/roster")}async function Q8(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/status${$}`)}async function sj(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/context${$}`)}async function aj(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/queue-state${$}`)}async function tj(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function ej(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function A$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return $1(`/agent/models${$}`)}async function B8(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function N5(_,$,j=null){let N=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${N.status}`)}return N.json()}async function q8(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function _N(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await pj(j,(Y,K)=>{if($.onEvent?.(Y,K),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(Y==="side_prompt_done")N=K;else if(Y==="side_prompt_error")Z=K}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return N}async function G8(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function X8(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return $1(j)}async function V8(_,$,j){return $1("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P_(_){return`/media/${_}`}function W8(_){return`/media/${_}/thumbnail`}async function $$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function L8(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function $N(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function M$(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return $1(N)}async function jN(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return $1($)}async function U8(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return $1(Z)}async function NN(_,$){return $1("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function z8(_){return $1("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function Z5(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",Q=await fetch(""+K,{method:"POST",body:N});if(!Q.ok){let q=await Q.json().catch(()=>({error:"Upload failed"})),B=Error(q.error||`HTTP ${Q.status}`);throw B.status=Q.status,B.code=q.code,B}return Q.json()}async function F8(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${N.status}`);throw Y.status=N.status,Y.code=Z.code,Y}return N.json()}async function O8(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function H8(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function J8(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return $1($,{method:"DELETE"})}async function k$(_,$=!1){return $1("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Y5(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function K5(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class Q5{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(N)=>{this.markActivity(),this.onEvent(j,JSON.parse(N.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function B5(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function ZN(_,$){let j=B5(_),N=B5($);if(!N)return!1;return j.startsWith(N)||j.includes(N)}function D8(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function E8(_,$,j=Date.now(),N=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>N?Y:`${Z.value}${Y}`,updatedAt:j}}function YN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let K=0;K<j;K+=1)Y.push((Z+K)%j);return Y}function KN(_,$,j=0,N=(Z)=>Z){let Z=B5($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],K=YN(Y.length,j),Q=Y.map((q)=>B5(N(q)));for(let q of K)if(Q[q].startsWith(Z))return q;for(let q of K)if(Q[q].includes(Z))return q;return-1}function A8(_,$,j=-1,N=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=N(Z[j]);if(ZN(Y,$))return j}return KN(Z,$,0,N)}function X_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function j$(_,$=!1){let j=X_(_);if(j===null)return $;return j==="true"}function N$(_,$=null){let j=X_(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function q5(_){return String(_||"").trim().toLowerCase()}function M8(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return q5($[1]||"")}function y3(_){let $=new Set,j=[];for(let N of Array.isArray(_)?_:[]){let Z=q5(N?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(N)}return j}function T3(_,$,j={}){let N=M8($);if(N==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return y3(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return q5(Y?.agent_name).startsWith(N)})}function k8(_){let $=q5(_);return $?`@${$} `:""}function S3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,N=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return y3(_).filter((Z)=>!(j&&Z?.chat_jid===j)).slice(0,N)}function x3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let N=Number(_||0),Z=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(N)||N<=0)return!1;if(Z<=0)return!1;let Y=460+Z*68+(j?40:0);return N>=Y}function w3(_,$,j={}){if(!_||_.isComposing)return!1;if(j?.searchMode)return!1;if(!j?.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function g_({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:Y="Remove",icon:K="file"}){let Q=`${_}-file-pill`,q=`${_}-file-name`,B=`${_}-file-remove`,W=K==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${Q} title=${j||$} onClick=${Z}>
      ${W}
      <span class=${q}>${$}</span>
      ${N&&z`
        <button
          class=${B}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),N()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var QN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function BN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),N=_.tokens,Z=_.contextWindow,Y="Compact context",Q=`${N!=null?`Context: ${R3(N)} / ${R3(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,q=9,B=2*Math.PI*9,W=j/100*B,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${Q}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
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
                    stroke-dasharray=${`${W} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function R3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function v3({onPost:_,onFocus:$,searchMode:j,searchScope:N="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:K,onExitSearch:Q,fileRefs:q=[],onRemoveFileRef:B,onClearFileRefs:W,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:A,activeModel:D=null,modelUsage:M=null,thinkingLevel:y=null,supportsThinking:J=!1,contextUsage:k=null,onContextCompact:I,notificationsEnabled:R=!1,notificationPermission:E="default",onToggleNotifications:u,onModelChange:s,onModelStateChange:i,activeEditorPath:g=null,onAttachEditorFile:w,onOpenFilePill:l,followupQueueItems:a=[],onInjectQueuedFollowup:X0,onRemoveQueuedFollowup:n,onSubmitIntercept:$0,onMessageResponse:j0,onPopOutChat:Z0,isAgentActive:K0=!1,activeChatAgents:q0=[],currentChatJid:L0="web:default",connectionStatus:U0="connected",onSetFileRefs:O0,onSetMessageRefs:p0,onSubmitError:k0,onSwitchChat:J0,onRenameSession:c0,isRenameSessionInProgress:l0=!1,onCreateSession:T0,onDeleteSession:G0,onRestoreSession:P0}){let[D0,Q0]=c(""),[I0,d0]=c(""),[m0,L1]=c([]),[P1,v0]=c(!1),[i0,N1]=c([]),[Q1,r0]=c(0),[x1,Z1]=c(!1),[u1,B1]=c([]),[l1,g0]=c(0),[t1,G1]=c(!1),[U1,H1]=c(!1),[C0,J1]=c(!1),[S0,w0]=c(!1),[a0,n1]=c([]),[m,B0]=c(0),[E0,F0]=c(0),[o0,e1]=c(!1),[i1,c_]=c(0),[y_,__]=c(null),t0=T(null),w1=T(null),d1=T(null),R1=T(null),T_=T(null),S_=T(null),U4=T(null),z4=T(null),$_=T({value:"",updatedAt:0}),l_=T(0),Y1=T(!1),_4=200,L_=(L)=>{let S=new Set,b=[];for(let d of L||[]){if(typeof d!=="string")continue;let z0=d.trim();if(!z0||S.has(z0))continue;S.add(z0),b.push(z0)}return b},h0=()=>{let L=X_("piclaw_compose_history");if(!L)return[];try{let S=JSON.parse(L);if(!Array.isArray(S))return[];return L_(S)}catch{return[]}},z1=(L)=>{K1("piclaw_compose_history",JSON.stringify(L))},f0=T(h0()),v1=T(-1),D1=T(""),$4=D0.trim()||m0.length>0||q.length>0||V.length>0,F4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),U_=typeof window<"u"&&typeof Notification<"u",w4=typeof window<"u"?Boolean(window.isSecureContext):!1,r4=U_&&w4&&E!=="denied",z_=E==="granted"&&R,V$=z_?"Disable notifications":"Enable notifications",j_=m0.length>0||q.length>0||V.length>0,N_=U0==="disconnected"?"Reconnecting":String(U0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),i_=U0==="disconnected"?"Reconnecting":`Connection: ${N_}`,F_=(Array.isArray(q0)?q0:[]).filter((L)=>!L?.archived_at),m1=S3(F_,{currentChatJid:L0,limit:4}),Q_=!j&&x3({footerWidth:i1,visibleAgentCount:m1.length,hasContextIndicator:Boolean(k&&k.percent!=null)}),b0=(()=>{for(let L of Array.isArray(q0)?q0:[]){let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&S===L0)return L}return null})(),Z_=Boolean(b0&&b0.chat_jid===(b0.root_chat_jid||b0.chat_jid)),O4=y0(()=>{let L=new Set,S=[];for(let b of Array.isArray(q0)?q0:[]){let d=typeof b?.chat_jid==="string"?b.chat_jid.trim():"";if(!d||d===L0||L.has(d))continue;if(!(typeof b?.agent_name==="string"?b.agent_name.trim():""))continue;L.add(d),S.push(b)}return S},[q0,L0]),H4=O4.length>0,x_=H4&&typeof J0==="function",O_=H4&&typeof P0==="function",B_=Boolean(l0||Y1.current),E1=!j&&typeof c0==="function"&&!B_,q1=!j&&typeof T0==="function",r1=!j&&typeof G0==="function"&&!Z_,y1=!j&&(x_||O_||E1||q1||r1),j4=D||"",N4=J&&y?` (${y})`:"",J4=N4.trim()?`${y}`:"",o1=typeof M?.hint_short==="string"?M.hint_short.trim():"",Z4=[J4||null,o1||null].filter(Boolean).join(" • "),R4=[j4?`Current model: ${j4}${N4}`:null,M?.plan?`Plan: ${M.plan}`:null,o1||null,M?.primary?.reset_description||null,M?.secondary?.reset_description||null].filter(Boolean),w_=U1?"Switching model…":R4.join(" • ")||`Current model: ${j4}${N4} (tap to open model picker)`,H_=(L)=>{if(!L||typeof L!=="object")return;let S=L.model??L.current;if(typeof i==="function")i({model:S??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(S&&typeof s==="function")s(S)},q_=(L)=>{let S=L||t0.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},R_=(L)=>{if(!L)return{content:L,fileRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let e0=0;e0<b.length;e0+=1)if(b[e0].trim()==="Files:"&&b[e0+1]&&/^\s*-\s+/.test(b[e0+1])){d=e0;break}if(d===-1)return{content:L,fileRefs:[]};let z0=[],u0=d+1;for(;u0<b.length;u0+=1){let e0=b[u0];if(/^\s*-\s+/.test(e0))z0.push(e0.replace(/^\s*-\s+/,"").trim());else if(!e0.trim())break;else break}if(z0.length===0)return{content:L,fileRefs:[]};let V1=b.slice(0,d),n0=b.slice(u0);return{content:[...V1,...n0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:z0}},g1=(L)=>{if(!L)return{content:L,messageRefs:[]};let b=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let e0=0;e0<b.length;e0+=1)if(b[e0].trim()==="Referenced messages:"&&b[e0+1]&&/^\s*-\s+/.test(b[e0+1])){d=e0;break}if(d===-1)return{content:L,messageRefs:[]};let z0=[],u0=d+1;for(;u0<b.length;u0+=1){let e0=b[u0];if(/^\s*-\s+/.test(e0)){let m_=e0.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(m_)z0.push(m_[1])}else if(!e0.trim())break;else break}if(z0.length===0)return{content:L,messageRefs:[]};let V1=b.slice(0,d),n0=b.slice(u0);return{content:[...V1,...n0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:z0}},v4=(L)=>{let S=R_(L||""),b=g1(S.content||"");return{text:b.content||"",fileRefs:S.fileRefs,messageRefs:b.messageRefs}},f4=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){Z1(!1),N1([]);return}let S=L.toLowerCase().split(" ")[0];if(S.length<1){Z1(!1),N1([]);return}let b=QN.filter((d)=>d.name.startsWith(S)||d.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(b.length>0&&!(b.length===1&&b[0].name===S))G1(!1),B1([]),N1(b),r0(0),Z1(!0);else Z1(!1),N1([])},D4=(L)=>{let S=D0,b=S.indexOf(" "),d=b>=0?S.slice(b):"",z0=L.name+d;Q0(z0),Z1(!1),N1([]),requestAnimationFrame(()=>{let u0=t0.current;if(!u0)return;let V1=z0.length;u0.selectionStart=V1,u0.selectionEnd=V1,u0.focus()})},n_=(L)=>{if(M8(L)==null){G1(!1),B1([]);return}let S=T3(F_,L,{currentChatJid:L0});if(S.length>0&&!(S.length===1&&k8(S[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))Z1(!1),N1([]),B1(S),g0(0),G1(!0);else G1(!1),B1([])},v_=(L)=>{let S=k8(L?.agent_name);if(!S)return;Q0(S),G1(!1),B1([]),requestAnimationFrame(()=>{let b=t0.current;if(!b)return;let d=S.length;b.selectionStart=d,b.selectionEnd=d,b.focus()})},Y4=()=>{if(j||!x_&&!O_&&!E1&&!q1&&!r1)return!1;return $_.current={value:"",updatedAt:0},J1(!1),Z1(!1),N1([]),G1(!1),B1([]),w0(!0),!0},f1=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!x_&&!O_&&!E1&&!q1&&!r1)return;if(S0){$_.current={value:"",updatedAt:0},w0(!1);return}Y4()},f_=(L)=>{let S=typeof L==="string"?L.trim():"";if(w0(!1),!S||S===L0){requestAnimationFrame(()=>t0.current?.focus());return}J0?.(S)},b_=async(L)=>{let S=typeof L==="string"?L.trim():"";if(w0(!1),!S||typeof P0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await P0(S)}catch(b){console.warn("Failed to restore session:",b),requestAnimationFrame(()=>t0.current?.focus())}},d_=(L)=>{let S=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(S&&typeof J0==="function"){J0(S);return}v_(L)},E4=(L)=>{let b=(Array.isArray(L)?L:[]).findIndex((d)=>!d?.disabled);return b>=0?b:0},F1=y0(()=>{let L=[];for(let S of O4){let b=Boolean(S?.archived_at),d=typeof S?.agent_name==="string"?S.agent_name.trim():"",z0=typeof S?.chat_jid==="string"?S.chat_jid.trim():"";if(!d||!z0)continue;L.push({type:"session",key:`session:${z0}`,label:`@${d} — ${z0}${S?.is_active?" active":""}${b?" archived":""}`,chat:S,disabled:b?!O_:!x_})}if(q1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(E1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:B_});if(r1)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[O4,O_,x_,q1,E1,r1,B_]),A4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof c0!=="function"||l0||Y1.current)return;Y1.current=!0,w0(!1);try{await c0()}catch(S){console.warn("Failed to rename session:",S)}finally{Y1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},s1=async()=>{if(typeof T0!=="function")return;w0(!1);try{await T0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>t0.current?.focus())},Y_=async()=>{if(typeof G0!=="function")return;w0(!1);try{await G0(L0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>t0.current?.focus())},J_=(L)=>{if(j)d0(L);else Q0(L),f4(L),n_(L);requestAnimationFrame(()=>q_())},b4=(L)=>{let S=j?I0:D0,b=S&&!S.endsWith(`
`)?`
`:"",d=`${S}${b}${L}`.trimStart();J_(d)},M4=(L)=>{let S=L?.command?.model_label;if(S)return S;let b=L?.command?.message;if(typeof b==="string"){let d=b.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},K4=async(L)=>{if(j||U1)return;H1(!0);try{let S=await p4("default",L,null,[],null,L0),b=M4(S);H_({model:b??D??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let d=await A$(L0);if(d)H_(d)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{H1(!1)}},u4=async()=>{await K4("/cycle-model")},r_=async(L)=>{if(!L||U1)return;if(await K4(`/model ${L}`))J1(!1)},m4=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let S=L.chat;if(S?.archived_at)b_(S.chat_jid);else f_(S.chat_jid);return}if(L.type==="action"){if(L.action==="new"){s1();return}if(L.action==="rename"){A4();return}if(L.action==="delete")Y_()}},o4=(L)=>{L.preventDefault(),L.stopPropagation(),$_.current={value:"",updatedAt:0},w0(!1),J1((S)=>!S)},k4=async()=>{if(j)return;I?.(),await u_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},P4=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return K0?"queue":null},u_=async(L,S,b={})=>{let{includeMedia:d=!0,includeFileRefs:z0=!0,includeMessageRefs:u0=!0,clearAfterSubmit:V1=!0,recordHistory:n0=!0}=b||{},D_=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:D0,e0=typeof D_==="string"?D_:"";if(!e0.trim()&&(d?m0.length===0:!0)&&(z0?q.length===0:!0)&&(u0?V.length===0:!0))return;Z1(!1),N1([]),G1(!1),B1([]),w0(!1),__(null);let m_=d?[...m0]:[],o_=z0?[...q]:[],a4=u0?[...V]:[],E_=e0.trim();if(n0&&E_){let g4=f0.current,h1=L_(g4.filter((B4)=>B4!==E_));if(h1.push(E_),h1.length>200)h1.splice(0,h1.length-200);f0.current=h1,z1(h1),v1.current=-1,D1.current=""}let f5=()=>{if(d)L1([...m_]);if(z0)O0?.(o_);if(u0)p0?.(a4);Q0(E_),requestAnimationFrame(()=>q_())};if(V1)Q0(""),L1([]),W?.(),A?.();(async()=>{try{if(await $0?.({content:E_,submitMode:S,fileRefs:o_,messageRefs:a4,mediaFiles:m_})){_?.();return}let h1=[];for(let O1 of m_){let M1=await B8(O1);h1.push(M1.id)}let B4=o_.length?`Files:
${o_.map((O1)=>`- ${O1}`).join(`
`)}`:"",T1=a4.length?`Referenced messages:
${a4.map((O1)=>`- message:${O1}`).join(`
`)}`:"",b5=h1.length?`Attachments:
${h1.map((O1,M1)=>{let W$=m_[M1]?.name||`attachment-${M1+1}`;return`- attachment:${O1} (${W$})`}).join(`
`)}`:"",t4=[E_,B4,T1,b5].filter(Boolean).join(`

`),I4=await p4("default",t4,null,h1,P4(S),L0);if(j0?.(I4),I4?.command){H_({model:I4.command.model_label??D??null,thinking_level:I4.command.thinking_level,supports_thinking:I4.command.supports_thinking});try{let O1=await A$(L0);if(O1)H_(O1)}catch{}}_?.()}catch(g4){if(V1)f5();let h1=g4?.message||"Failed to send message.";__(h1),k0?.(h1),console.error("Failed to post:",g4)}})()},s4=(L)=>{X0?.(L)},Q4=x((L)=>{if(j||!C0&&!S0||L?.isComposing)return!1;let S=()=>{L.preventDefault?.(),L.stopPropagation?.()},b=()=>{$_.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(S(),b(),C0)J1(!1);if(S0)w0(!1);return!0}if(C0){if(L.key==="ArrowDown"){if(S(),b(),a0.length>0)B0((d)=>(d+1)%a0.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),a0.length>0)B0((d)=>(d-1+a0.length)%a0.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&a0.length>0)return S(),b(),r_(a0[Math.max(0,Math.min(m,a0.length-1))]),!0;if(D8(L)&&a0.length>0){S();let d=E8($_.current,L.key);$_.current=d;let z0=A8(a0,d.value,m,(u0)=>u0);if(z0>=0)B0(z0);return!0}}if(S0){if(L.key==="ArrowDown"){if(S(),b(),F1.length>0)F0((d)=>(d+1)%F1.length);return!0}if(L.key==="ArrowUp"){if(S(),b(),F1.length>0)F0((d)=>(d-1+F1.length)%F1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&F1.length>0)return S(),b(),m4(F1[Math.max(0,Math.min(E0,F1.length-1))]),!0;if(D8(L)&&F1.length>0){S();let d=E8($_.current,L.key);$_.current=d;let z0=A8(F1,d.value,E0,(u0)=>u0.label);if(z0>=0)F0(z0);return!0}}return!1},[j,C0,S0,a0,m,F1,E0,r_]),F=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),d0(""),Q?.();return}if(Q4(L))return;let S=t0.current?.value??(j?I0:D0);if(w3(L,S,{searchMode:j,showSessionSwitcherButton:y1})){L.preventDefault(),Y4();return}if(t1&&u1.length>0){let b=t0.current?.value??(j?I0:D0);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))G1(!1),B1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),g0((d)=>(d+1)%u1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),g0((d)=>(d-1+u1.length)%u1.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),v_(u1[l1]);return}if(L.key==="Escape"){L.preventDefault(),G1(!1),B1([]);return}}}if(x1&&i0.length>0){let b=t0.current?.value??(j?I0:D0);if(!String(b||"").startsWith("/"))Z1(!1),N1([]);else{if(L.key==="ArrowDown"){L.preventDefault(),r0((d)=>(d+1)%i0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),r0((d)=>(d-1+i0.length)%i0.length);return}if(L.key==="Tab"){L.preventDefault(),D4(i0[Q1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!S.includes(" ")){L.preventDefault();let z0=i0[Q1];Z1(!1),N1([]),u_(z0.name);return}}if(L.key==="Escape"){L.preventDefault(),Z1(!1),N1([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let b=t0.current;if(!b)return;let d=b.value||"",z0=b.selectionStart===0&&b.selectionEnd===0,u0=b.selectionStart===d.length&&b.selectionEnd===d.length;if(L.key==="ArrowUp"&&z0||L.key==="ArrowDown"&&u0){let V1=f0.current;if(!V1.length)return;L.preventDefault();let n0=v1.current;if(L.key==="ArrowUp"){if(n0===-1)D1.current=d,n0=V1.length-1;else if(n0>0)n0-=1;v1.current=n0,J_(V1[n0]||"")}else{if(n0===-1)return;if(n0<V1.length-1)n0+=1,v1.current=n0,J_(V1[n0]||"");else v1.current=-1,J_(D1.current||""),D1.current=""}requestAnimationFrame(()=>{let D_=t0.current;if(!D_)return;let e0=D_.value.length;D_.selectionStart=e0,D_.selectionEnd=e0});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else u_(S,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(S.trim())Z?.(S.trim(),N)}else u_(S)},H=(L)=>{let S=Array.from(L||[]).filter((b)=>b instanceof File&&!String(b.name||"").startsWith(".DS_Store"));if(!S.length)return;L1((b)=>[...b,...S]),__(null)},f=(L)=>{H(L.target.files),L.target.value=""},v=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),l_.current+=1,v0(!0)},r=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),l_.current=Math.max(0,l_.current-1),l_.current===0)v0(!1)},Y0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";v0(!0)},V0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),l_.current=0,v0(!1),H(L.dataTransfer?.files||[])},W0=(L)=>{if(j)return;let S=L.clipboardData?.items;if(!S||!S.length)return;let b=[];for(let d of S){if(d.kind!=="file")continue;let z0=d.getAsFile?.();if(z0)b.push(z0)}if(b.length>0)L.preventDefault(),H(b)},N0=(L)=>{L1((S)=>S.filter((b,d)=>d!==L))},A0=()=>{__(null),L1([]),W?.(),A?.()},X1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:S,longitude:b,accuracy:d}=L.coords,z0=`${S.toFixed(5)}, ${b.toFixed(5)}`,u0=Number.isFinite(d)?` ±${Math.round(d)}m`:"",V1=`https://maps.google.com/?q=${S},${b}`,n0=`Location: ${z0}${u0} ${V1}`;b4(n0)},(L)=>{let S=L?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};p(()=>{if(!C0)return;$_.current={value:"",updatedAt:0},e1(!0),A$(L0).then((L)=>{let S=Array.isArray(L?.models)?L.models.filter((b)=>typeof b==="string"&&b.trim().length>0):[];S.sort((b,d)=>b.localeCompare(d,void 0,{sensitivity:"base"})),n1(S),H_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),n1([])}).finally(()=>{e1(!1)})},[C0,D]),p(()=>{if(j)J1(!1),w0(!1),Z1(!1),N1([]),G1(!1),B1([])},[j]),p(()=>{if(S0&&!y1)w0(!1)},[S0,y1]),p(()=>{if(!C0)return;let L=a0.findIndex((S)=>S===D);B0(L>=0?L:0)},[C0,a0,D]),p(()=>{if(!S0)return;F0(E4(F1)),$_.current={value:"",updatedAt:0}},[S0,L0]),p(()=>{if(!C0)return;let L=(S)=>{let b=R1.current,d=T_.current,z0=S.target;if(b&&b.contains(z0))return;if(d&&d.contains(z0))return;J1(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[C0]),p(()=>{if(!S0)return;let L=(S)=>{let b=S_.current,d=U4.current,z0=S.target;if(b&&b.contains(z0))return;if(d&&d.contains(z0))return;w0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[S0]),p(()=>{if(j||!C0&&!S0)return;let L=(S)=>{Q4(S)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,C0,S0,Q4]),p(()=>{if(!C0)return;let L=R1.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[C0,m,a0]),p(()=>{if(!S0)return;let L=S_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[S0,E0,F1.length]),p(()=>{let L=()=>{let u0=z4.current?.clientWidth||0;c_((V1)=>V1===u0?V1:u0)};L();let S=z4.current,b=0,d=()=>{if(b)cancelAnimationFrame(b);b=requestAnimationFrame(()=>{b=0,L()})},z0=null;if(S&&typeof ResizeObserver<"u")z0=new ResizeObserver(()=>d()),z0.observe(S);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(b)cancelAnimationFrame(b);if(z0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,D,m1.length,k?.percent]);let A1=(L)=>{let S=L.target.value;if(__(null),S0)w0(!1);q_(L.target),J_(S)};return p(()=>{requestAnimationFrame(()=>q_())},[D0,I0,j]),p(()=>{if(j)return;n_(D0)},[F_,L0,D0,j]),z`
        <div class="compose-box">
            ${!j&&a.length>0&&z`
                <div class="compose-queue-stack">
                    ${a.map((L)=>{let S=typeof L?.content==="string"?L.content:"",b=v4(S);if(!b.text.trim()&&b.fileRefs.length===0&&b.messageRefs.length===0)return null;return z`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${S}>
                                    ${b.text.trim()&&z`
                                        <div class="compose-queue-stack-text">${b.text}</div>
                                    `}
                                    ${(b.messageRefs.length>0||b.fileRefs.length>0)&&z`
                                        <div class="compose-queue-stack-refs">
                                            ${b.messageRefs.map((d)=>z`
                                                <${g_}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${b.fileRefs.map((d)=>{let z0=d.split("/").pop()||d;return z`
                                                    <${g_}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${z0}
                                                        title=${d}
                                                        onClick=${()=>l?.(d)}
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
                                        onClick=${()=>s4(L)}
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
                                        onClick=${()=>n?.(L)}
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
                class=${`compose-input-wrapper${P1?" drag-active":""}`}
                onDragEnter=${v}
                onDragOver=${Y0}
                onDragLeave=${r}
                onDrop=${V0}
            >
                <div class="compose-input-main">
                    ${y_&&!j_&&z`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${y_}</div>
                    `}
                    ${j_&&z`
                        <div class="compose-file-refs">
                            ${y_&&z`
                                <div class="compose-submit-error" role="status" aria-live="polite">${y_}</div>
                            `}
                            ${V.map((L)=>{return z`
                                    <${g_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(L)}
                                    />
                                `})}
                            ${q.map((L)=>{let S=L.split("/").pop()||L;return z`
                                    <${g_}
                                        prefix="compose"
                                        label=${S}
                                        title=${L}
                                        onClick=${()=>l?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>B?.(L)}
                                    />
                                `})}
                            ${m0.map((L,S)=>{let b=L?.name||`attachment-${S+1}`;return z`
                                    <${g_}
                                        key=${b+S}
                                        prefix="compose"
                                        label=${b}
                                        title=${b}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>N0(S)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${A0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Z0==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Z0?.()}
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
                        ref=${t0}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?I0:D0}
                        onInput=${A1}
                        onKeyDown=${F}
                        onPaste=${W0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${t1&&u1.length>0&&z`
                        <div class="slash-autocomplete" ref=${d1}>
                            ${u1.map((L,S)=>z`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${S===l1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),v_(L)}}
                                    onMouseEnter=${()=>g0(S)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x1&&i0.length>0&&z`
                        <div class="slash-autocomplete" ref=${w1}>
                            ${i0.map((L,S)=>z`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${S===Q1?" active":""}`}
                                    onMouseDown=${(b)=>{b.preventDefault(),D4(L)}}
                                    onMouseEnter=${()=>r0(S)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C0&&!j&&z`
                        <div class="compose-model-popup" ref=${R1} tabIndex="-1" onKeyDown=${Q4}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${o0&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!o0&&a0.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!o0&&a0.map((L,S)=>z`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===S?" active":""}${D===L?" current-model":""}`}
                                        onClick=${()=>{r_(L)}}
                                        disabled=${U1}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{u4()}}
                                    disabled=${U1}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${S0&&!j&&z`
                        <div class="compose-model-popup" ref=${S_} tabIndex="-1" onKeyDown=${Q4}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let L=typeof b0?.agent_name==="string"&&b0.agent_name.trim()?`@${b0.agent_name.trim()}`:L0,S=typeof b0?.chat_jid==="string"&&b0.chat_jid.trim()?b0.chat_jid.trim():L0;return`${L} — ${S} • current`})()}
                                    </div>
                                `}
                                ${!H4&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${H4&&O4.map((L,S)=>{let b=Boolean(L.archived_at),z0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!b&&typeof G0==="function",u0=`@${L.agent_name} — ${L.chat_jid}${L.is_active?" • active":""}${b?" • archived":""}`;return z`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${b?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${b?" archived":""}${E0===S?" active":""}`}
                                                onClick=${()=>{if(b){b_(L.chat_jid);return}f_(L.chat_jid)}}
                                                disabled=${b?!O_:!x_}
                                                title=${b?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${u0}
                                            </button>
                                            ${z0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(V1)=>{V1.stopPropagation(),w0(!1),G0(L.chat_jid)}}
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
                            ${(q1||E1||r1)&&z`
                                <div class="compose-model-popup-actions">
                                    ${q1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${F1.findIndex((L)=>L.key==="action:new")===E0?" active":""}`}
                                            onClick=${()=>{s1()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${E1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${F1.findIndex((L)=>L.key==="action:rename")===E0?" active":""}`}
                                            onClick=${(L)=>{A4(L)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${B_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${r1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${F1.findIndex((L)=>L.key==="action:delete")===E0?" active":""}`}
                                            onClick=${()=>{Y_()}}
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
                <div class="compose-footer" ref=${z4}>
                    ${!j&&D&&z`
                    <div class="compose-meta-row">
                        ${!j&&D&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${T_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${w_}
                                    aria-label="Open model picker"
                                    onClick=${o4}
                                    disabled=${U1}
                                >
                                    ${U1?"Switching…":j4}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!U1&&Z4&&z`
                                        <span class="compose-model-usage-hint" title=${w_}>
                                            ${Z4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&k&&k.percent!=null&&z`
                            <${BN} usage=${k} onCompact=${k4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Q_&&z`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${m1.map((L)=>{let S=Boolean(L?.chat_jid&&L.chat_jid===L0);return z`
                                <button
                                    key=${L.chat_jid||L.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${S?" active":""}`}
                                    onClick=${()=>d_(L)}
                                    title=${`${L.chat_jid||"Active agent"} — switch to @${L.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${L.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${y1&&z`
                        ${b0?.agent_name&&z`
                            <span
                                class="compose-current-agent-label active"
                                title=${b0.chat_jid||L0}
                                onClick=${f1}
                            >@${b0.agent_name}</span>
                        `}
                        <button
                            ref=${U4}
                            type="button"
                            class=${`icon-btn compose-mention-btn${S0?" active":""}`}
                            onClick=${f1}
                            title=${S0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${S0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${N}
                                onChange=${(L)=>Y?.(L.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?Q:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
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
                    ${F4&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${X1}
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
                    ${r4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${z_?" active":""}`}
                            onClick=${u}
                            title=${V$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${g&&w&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${w}
                                title=${`Attach open file: ${g}`}
                                type="button"
                                disabled=${q.includes(g)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${f} />
                        </label>
                    `}
                    ${(U0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${U0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${U0}" title=${i_}>
                                    ${N_}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{u_()}}
                                    disabled=${!$4}
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
    `}var C8="piclaw_theme",X5="piclaw_tint",u3="piclaw_chat_themes",I$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},m3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:I$,dark:m3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},qN=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],c4={theme:"default",tint:null},g3="light",P8=!1;function V5(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function Y$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function GN(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),K=parseInt(Z[2],10),Q=parseInt(Z[3],10);if(![Y,K,Q].every((B)=>Number.isFinite(B)))return null;let q=`#${[Y,K,Q].map((B)=>B.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:Q,hex:q}}function h3(_){return Y$(_)||GN(_)}function P$(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${Y})`}function I8(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function XN(_){let $=_.r/255,j=_.g/255,N=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=N<=0.03928?N/12.92:Math.pow((N+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*K}function VN(_){return XN(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function y8(_){return f3[_]||f3.default}function WN(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=y8(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||I$}function l3(_,$,j){let N=h3($);if(!N)return _;let Z=Y$(_.bgPrimary),Y=Y$(_.bgSecondary),K=Y$(_.bgHover),Q=Y$(_.borderColor);if(!Z||!Y||!K||!Q)return _;let B=Y$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:P$(Z,N,0.08),bgSecondary:P$(Y,N,0.12),bgHover:P$(K,N,0.16),borderColor:P$(Q,N,0.08),accent:N.hex,accentHover:B?P$(N,B,0.18):N.hex}}function LN(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=h3(N),Y=Z?I8(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=Z?I8(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Q=Z?I8(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=Z?VN(Z):$==="dark"?"#000000":"#ffffff",B={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":K,"--accent-soft-strong":Q,"--accent-contrast-text":q,"--danger-color":_.danger||I$.danger,"--success-color":_.success||I$.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(B).forEach(([W,V])=>{if(V)j.style.setProperty(W,V)})}function UN(){if(typeof document>"u")return;let _=document.documentElement;qN.forEach(($)=>_.style.removeProperty($))}function Z$(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,N=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!N)N=document.createElement("meta"),document.head.appendChild(N);if(N.setAttribute("name",_),j)N.setAttribute("id",j);return N}function b3(_){let $=V5(c4?.theme||"default"),j=c4?.tint?String(c4.tint).trim():null,N=c3($,_);if($==="default"&&j)N=l3(N,j,_);if(N?.bgPrimary)return N.bgPrimary;return _==="dark"?m3.bgPrimary:I$.bgPrimary}function zN(_,$){if(typeof document>"u")return;let j=Z$("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let N=Z$("theme-color",{id:"theme-color-light"});if(N)N.setAttribute("media","(prefers-color-scheme: light)"),N.setAttribute("content",b3("light"));let Z=Z$("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",b3("dark"));let Y=Z$("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let K=Z$("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let Q=Z$("apple-mobile-web-app-status-bar-style");if(Q)Q.setAttribute("content",$==="dark"?"black-translucent":"default")}function FN(){if(typeof window>"u")return;let _={...c4,mode:g3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function i3(){try{let _=X_(u3);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function ON(_,$,j){let N=i3();if(!$&&!j)delete N[_];else N[_]={theme:$||"default",tint:j||null};K1(u3,JSON.stringify(N))}function HN(_){if(!_)return null;return i3()[_]||null}function n3(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function T8(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=V5(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=y8(j),Y=WN(Z),K=c3(j,Y);c4={theme:j,tint:N},g3=Y;let Q=document.documentElement;Q.dataset.theme=Y,Q.dataset.colorTheme=j,Q.dataset.tint=N?String(N):"",Q.style.colorScheme=Y;let q=K;if(j==="default"&&N)q=l3(K,N,Y);if(j==="default"&&!N)UN();else LN(q,Y);if(zN(q.bgPrimary,Y),FN(),$.persist!==!1)if(K1(C8,j),N)K1(X5,N);else K1(X5,"")}function G5(){if(y8(c4.theme).mode!=="auto")return;T8(c4,{persist:!1})}function d3(){if(typeof window>"u")return()=>{};let _=n3(),$=HN(_),j=$?V5($.theme||"default"):V5(X_(C8)||"default"),N=$?$.tint?String($.tint).trim():null:(()=>{let Z=X_(X5);return Z?Z.trim():null})();if(T8({theme:j,tint:N},{persist:!1}),window.matchMedia&&!P8){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",G5);else if(Z.addListener)Z.addListener(G5);return P8=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",G5);else if(Z.removeListener)Z.removeListener(G5);P8=!1}}return()=>{}}function r3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||n3(),j=_.theme??_.name??_.colorTheme,N=_.tint??null;if(ON($,j||"default",N),T8({theme:j||"default",tint:N},{persist:!1}),!$||$==="web:default")K1(C8,j||"default"),K1(X5,N||"")}function o3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var W5=/#(\w+)/g,JN=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),DN=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),EN=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),AN={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},MN=new Set(["http:","https:","mailto:",""]);function S8(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function l4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!MN.has(N.protocol))return null;return N.href}catch{return null}}function s3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())N.push(Y);for(let K of N){let Q=K.tagName.toLowerCase();if(!DN.has(Q)){let B=K.parentNode;if(!B)continue;while(K.firstChild)B.insertBefore(K.firstChild,K);B.removeChild(K);continue}let q=AN[Q]||new Set;for(let B of Array.from(K.attributes)){let W=B.name.toLowerCase(),V=B.value;if(W.startsWith("on")){K.removeAttribute(B.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(q.has(W)||EN.has(W)){if(W==="href"){let U=l4(V);if(!U)K.removeAttribute(B.name);else if(K.setAttribute(B.name,U),Q==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let U=Q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,A=l4(U,{allowDataImage:Q==="img"});if(!A)K.removeAttribute(B.name);else K.setAttribute(B.name,A)}continue}K.removeAttribute(B.name)}}return j.body.innerHTML}function a3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function L5(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=a3(j);if(Z===j)break;j=Z}return j}function kN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],Y=!1,K=[];for(let Q of j){if(!Y&&Q.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&Q.trim().match(/^```\s*$/)){let q=N.length;N.push(K.join(`
`)),Z.push(`@@MERMAID_BLOCK_${q}@@`),Y=!1,K=[];continue}if(Y)K.push(Q);else Z.push(Q)}if(Y)Z.push("```mermaid"),Z.push(...K);return{text:Z.join(`
`),blocks:N}}function PN(_){if(!_)return _;return L5(_,5)}function IN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function CN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function yN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),Y=$[Z]??"",K=PN(Y);return`<div class="mermaid-container" data-mermaid="${IN(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function t3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var TN={span:new Set(["title","class","lang","dir"])};function SN(_,$){let j=TN[_];if(!j||!$)return"";let N=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let K=(Y[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let Q=Y[2]??Y[3]??Y[4]??"";N.push(` ${K}="${S8(Q)}"`)}return N.join("")}function e3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),Y=Z?N.slice(1).trim():N,Q=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[q=""]=Q.split(/\s+/,1),B=q.toLowerCase();if(!B||!JN.has(B))return $;if(B==="br")return Z?"":"<br>";if(Z)return`</${B}>`;let W=Q.slice(q.length).trim(),V=SN(B,W);return`<${B}${V}>`})}function _2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function $2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=N(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function xN(_){if(!window.katex)return _;let $=(K)=>a3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let Q=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(B)=>{let W=Q.length;return Q.push(B),`@@CODE_BLOCK_${W}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(B)=>{let W=Q.length;return Q.push(B),`@@CODE_INLINE_${W}@@`}),{html:q,blocks:Q}},N=(K,Q)=>{if(!Q.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,B)=>{let W=Number(B);return Q[W]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,Q,q)=>{try{let B=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${Q}${B}`}catch(B){return`<span class="math-error" title="${S8(B.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,Q,q)=>{if(/\s$/.test(q))return K;try{let B=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${Q}${B}`}catch(B){return`${Q}<span class="math-error" title="${S8(B.message)}">$${q}$</span>`}}),N(Y,Z.blocks)}function wN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let Y of N){let K=Y.nodeValue;if(!K)continue;if(W5.lastIndex=0,!W5.test(K))continue;W5.lastIndex=0;let Q=Y.parentElement;if(Q&&(Q.closest("a")||Q.closest("code")||Q.closest("pre")))continue;let q=K.split(W5);if(q.length<=1)continue;let B=$.createDocumentFragment();q.forEach((W,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",W),U.textContent=`#${W}`,B.appendChild(U)}else B.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(B,Y)}return $.body.innerHTML}function RN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(Y)}return N.join(`
`)}function vN(_){let $=RN(_||""),{text:j,blocks:N}=kN($),Z=L5(j,2),K=t3(Z).replace(/</g,"&lt;");return{safeHtml:e3(K),mermaidBlocks:N}}function V_(_,$,j={}){if(!_)return"";let{safeHtml:N,mermaidBlocks:Z}=vN(_),Y=window.marked?marked.parse(N,{headerIds:!1,mangle:!1}):N.replace(/\n/g,"<br>");return Y=_2(Y),Y=$2(Y),Y=xN(Y),Y=wN(Y),Y=yN(Y,Z),Y=s3(Y,j),Y}function U5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=L5($,2),Z=t3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=e3(Z),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=_2(K),K=$2(K),K=s3(K),K}function fN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,N,Z,Y)=>{let K=Z.trim().split(/\s+/).map((q)=>{let[B,W]=q.split(",").map(Number);return{x:B,y:W}});if(K.length<3)return`<polyline${N}points="${Z}"${Y}/>`;let Q=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let B=K[q-1],W=K[q],V=K[q+1],U=W.x-B.x,A=W.y-B.y,D=V.x-W.x,M=V.y-W.y,y=Math.sqrt(U*U+A*A),J=Math.sqrt(D*D+M*M),k=Math.min($,y/2,J/2);if(k<0.5){Q.push(`L ${W.x},${W.y}`);continue}let I=W.x-U/y*k,R=W.y-A/y*k,E=W.x+D/J*k,u=W.y+M/J*k,i=U*M-A*D>0?1:0;Q.push(`L ${I},${R}`),Q.push(`A ${k},${k} 0 0 ${i} ${E},${u}`)}return Q.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${N}d="${Q.join(" ")}"${Y}/>`})}async function G4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=o3()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let Q=K.dataset.mermaid,q=CN(Q||""),B=L5(q,2),W=await $(B,{...Z,transparent:!0});W=fN(W),K.innerHTML=W,K.removeAttribute("data-mermaid")}catch(Q){console.error("Mermaid render error:",Q);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${Q.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function j2(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function N2(_){return String(_||"").trim()||"web:default"}function Z2(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Y2(_){if(!_)return!1;return _.status!=="running"}function K2(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Q2({session:_,onClose:$,onInject:j,onRetry:N}){let Z=T(null),Y=T(null),K=_?.thinking?U5(_.thinking):"",Q=_?.answer?V_(_.answer,null,{sanitize:!1}):"";if(p(()=>{if(Z.current&&K)G4(Z.current).catch(()=>{})},[K]),p(()=>{if(Y.current&&Q)G4(Y.current).catch(()=>{})},[Q]),!_)return null;let q=_.status==="running",B=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),V=Z2(_),U=Y2(_),A=!q&&B,D=q?"Thinking…":_.status==="error"?"Error":"Done";return z`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${D}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${W&&z`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!A}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function bN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return N?{kind:j,svg:N}:null}function uN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return N?{kind:Y,html:N}:{kind:Y}}function y4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function M0(_){return typeof _==="string"&&_.trim()?_.trim():null}function q2(_,$=!1){let N=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(N))}var G2="__PICLAW_WIDGET_HOST__:";function B2(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function x8(_,$){if(!_||_.type!=="generated_widget")return null;let j=bN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:q2(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function X2(_){if(!_||typeof _!=="object")return null;let $=uN(_),j=M0(_?.widget_id)||M0(_?.widgetId)||M0(_?.tool_call_id)||M0(_?.toolCallId),N=M0(_?.tool_call_id)||M0(_?.toolCallId),Z=M0(_?.turn_id)||M0(_?.turnId),Y=M0(_?.title)||M0(_?.name)||"Generated widget",K=M0(_?.subtitle)||"",Q=M0(_?.description)||K,q=M0(_?.status),B=q==="loading"||q==="streaming"||q==="final"||q==="error"?q:"streaming";return{title:Y,subtitle:K,description:Q,originPostId:y4(_?.origin_post_id)??y4(_?.originPostId),originChatJid:M0(_?.origin_chat_jid)||M0(_?.originChatJid)||M0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:q2(_?.capabilities,!0),source:"live",status:B,turnId:Z,toolCallId:N,width:y4(_?.width),height:y4(_?.height),error:M0(_?.error)}}function V2(_){return x8(_,null)!==null}function c1(_){let $=M0(_?.toolCallId)||M0(_?.tool_call_id);if($)return $;let j=M0(_?.widgetId)||M0(_?.widget_id);if(j)return j;let N=y4(_?.originPostId)??y4(_?.origin_post_id);if(N!==null)return`post:${N}`;return null}function W2(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function L2(_){return W2(_)?"allow-downloads allow-scripts":"allow-downloads"}function z5(_){return{title:M0(_?.title)||"Generated widget",widgetId:M0(_?.widgetId)||M0(_?.widget_id),toolCallId:M0(_?.toolCallId)||M0(_?.tool_call_id),turnId:M0(_?.turnId)||M0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:M0(_?.status)||"final"}}function F5(_){return{...z5(_),subtitle:M0(_?.subtitle)||"",description:M0(_?.description)||"",error:M0(_?.error)||null,width:y4(_?.width),height:y4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function O5(_){return`${G2}${JSON.stringify(F5(_))}`}function U2(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=M0(_.text)||M0(_.content)||M0(_.message)||M0(_.prompt)||M0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let N=M0(j.text)||M0(j.content)||M0(j.message)||M0(j.prompt)||M0(j.value);if(N)return N}return null}function z2(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function F2(_){let $=M0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return M0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function mN(_){let $=z5(_);return`<script>
(function () {
  const meta = ${B2($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {}
  }

  const windowNamePrefix = ${B2(G2)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {}
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function O2(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=j==="svg"?Z:N;if(!K)return"";let Q=W2(_),q=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",Q?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),B=j==="svg"?`<div class="widget-svg-shell">${K}</div>`:K,W=Q?mN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${q}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
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
${W}
</head>
<body>${B}</body>
</html>`}function H2({widget:_,onClose:$,onWidgetEvent:j}){let N=T(null),Z=T(!1),Y=y0(()=>O2(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(p(()=>{if(!_)return;let J=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),p(()=>{Z.current=!1},[Y]),p(()=>{if(!_)return;let J=N.current;if(!J)return;let k=(s)=>{let i=O5(_),g=s==="widget.init"?z5(_):F5(_);try{J.name=i}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:s,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:g},"*")}catch{}},I=()=>{k("widget.init"),k("widget.update")},R=()=>{Z.current=!0,I()};J.addEventListener("load",R);let u=[0,40,120,300,800].map((s)=>setTimeout(I,s));return()=>{J.removeEventListener("load",R),u.forEach((s)=>clearTimeout(s))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),p(()=>{if(!_)return;let J=N.current;if(!J?.contentWindow)return;let k=O5(_),I=F5(_);try{J.name=k}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),p(()=>{if(!_)return;let J=(k)=>{let I=k?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let R=N.current,E=c1(_),u=c1({widgetId:I.widgetId,toolCallId:I.toolCallId});if(u&&E&&u!==E)return;if(!u&&R?.contentWindow&&k.source!==R.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let Q=(_?.artifact||{}).kind||_?.kind||"html",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",B=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=W==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",A=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",D=!Y,M=F2(_),y=L2(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${q}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${Q.toUpperCase()}</div>
                        <div class="floating-widget-title">${q}</div>
                        ${(B||A)&&z`
                            <div class="floating-widget-subtitle">${B||A}</div>
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
                    ${D?z`<div class="floating-widget-empty">${M}</div>`:z`
                            <iframe
                                ref=${N}
                                class="floating-widget-frame"
                                title=${q}
                                name=${O5(_)}
                                sandbox=${y}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var J2="PiClaw";function w8(_,$,j=!1){let N=_||"PiClaw",Z=N.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%Y.length,Q=Y[K],q=N.trim().toLowerCase(),B=typeof $==="string"?$.trim():"",W=B?B:null,V=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:Z,color:Q,image:W||(V?"/static/icon-192.png":null)}}function D2(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function E2(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function A2(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",Q=Y?.dataset?.tint||"",q=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(q&&(Q||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let Y=0;Y<j.length;Y+=1)N=(N*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function gN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function C$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function M2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return C$(_)?"Compacting context":"Working..."}function hN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function k2(_,$=Date.now()){let j=gN(_);if(j===null)return null;return hN(Math.max(0,$-j))}function P2({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:Y,turnId:K,steerQueued:Q,onPanelToggle:q}){let V=(G0)=>{if(!G0)return{text:"",totalLines:0,fullText:""};if(typeof G0==="string"){let I0=G0,d0=I0?I0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:I0,totalLines:d0,fullText:I0}}let P0=G0.text||"",D0=G0.fullText||G0.full_text||P0,Q0=Number.isFinite(G0.totalLines)?G0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:P0,totalLines:Q0,fullText:D0}},U=160,A=(G0)=>String(G0||"").replace(/<\/?internal>/gi,""),D=(G0)=>{if(!G0)return 1;return Math.max(1,Math.ceil(G0.length/160))},M=(G0,P0,D0)=>{let Q0=(G0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!Q0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let I0=Q0.split(`
`),d0=I0.length>P0?I0.slice(0,P0).join(`
`):Q0,m0=Number.isFinite(D0)?D0:I0.reduce((v0,i0)=>v0+D(i0),0),L1=d0?d0.split(`
`).reduce((v0,i0)=>v0+D(i0),0):0,P1=Math.max(m0-L1,0);return{text:d0,omitted:P1,totalLines:m0,visibleLines:L1}},y=V(j),J=V(N),k=V($),I=Boolean(y.text)||y.totalLines>0,R=Boolean(J.text)||J.totalLines>0,E=Boolean(k.fullText?.trim()||k.text?.trim());if(!_&&!E&&!I&&!R&&!Z&&!Y)return null;let[u,s]=c(new Set),[i,g]=c(()=>Date.now()),w=(G0)=>s((P0)=>{let D0=new Set(P0),Q0=!D0.has(G0);if(Q0)D0.add(G0);else D0.delete(G0);if(typeof q==="function")q(G0,Q0);return D0});p(()=>{s(new Set)},[K]);let l=C$(_);p(()=>{if(!l)return;g(Date.now());let G0=setInterval(()=>g(Date.now()),1000);return()=>clearInterval(G0)},[l,_?.started_at,_?.startedAt]);let a=_?.turn_id||K,X0=A2(a),n=Q?"turn-dot turn-dot-queued":"turn-dot",$0=(G0)=>G0,j0=Boolean(_?.last_activity||_?.lastActivity),Z0=(G0)=>G0==="warning"?"#f59e0b":G0==="error"?"var(--danger-color)":G0==="success"?"var(--success-color)":X0,K0=Y?.kind||"info",q0=Z0(K0),L0=Z0(_?.kind||(l?"warning":"info")),U0="",O0=_?.title,p0=_?.status;if(_?.type==="plan")U0=O0?`Planning: ${O0}`:"Planning...";else if(_?.type==="tool_call")U0=O0?`Running: ${O0}`:"Running tool...";else if(_?.type==="tool_status")U0=O0?`${O0}: ${p0||"Working..."}`:p0||"Working...";else if(_?.type==="error")U0=O0||"Agent error";else U0=O0||p0||"Working...";if(j0)U0="Last activity just now";let k0=({panelTitle:G0,text:P0,fullText:D0,totalLines:Q0,maxLines:I0,titleClass:d0,panelKey:m0})=>{let L1=u.has(m0),P1=D0||P0||"",v0=m0==="thought"||m0==="draft"?A(P1):P1,i0=typeof I0==="number",N1=L1&&i0,Q1=i0?M(v0,I0,Q0):{text:v0||"",omitted:0,totalLines:Number.isFinite(Q0)?Q0:0};if(!v0&&!(Number.isFinite(Q1.totalLines)&&Q1.totalLines>0))return null;let r0=`agent-thinking-body${i0?" agent-thinking-body-collapsible":""}`,x1=i0?`--agent-thinking-collapsed-lines: ${I0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${L1?"true":"false"}
                data-collapsible=${i0?"true":"false"}
                style=${X0?`--turn-color: ${X0};`:""}
            >
                <div class="agent-thinking-title ${d0||""}">
                    ${X0&&z`<span class=${n} aria-hidden="true"></span>`}
                    ${G0}
                    ${N1&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${G0} panel`}
                            onClick=${()=>w(m0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${r0}
                    style=${x1}
                    dangerouslySetInnerHTML=${{__html:U5(v0)}}
                />
                ${!L1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▸ ${Q1.omitted} more lines
                    </button>
                `}
                ${L1&&Q1.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>w(m0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J0=Z?.tool_call?.title,c0=J0?`Awaiting approval: ${J0}`:"Awaiting approval",l0=l?k2(_,i):null,T0=(G0,P0,D0=null)=>{let Q0=M2(G0);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${P0?`--turn-color: ${P0};`:""}
                title=${G0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${P0&&z`<span class=${n} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${Q0}</span>
                    ${D0&&z`<span class="agent-status-elapsed">${D0}</span>`}
                </div>
                ${G0.detail&&z`<div class="agent-thinking-body">${G0.detail}</div>`}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${Y&&T0(Y,q0)}
            ${_?.type==="intent"&&T0(_,L0,l0)}
            ${Z&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${X0?`--turn-color: ${X0};`:""}>
                    <span class=${n} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${c0}</span>
                </div>
            `}
            ${I&&k0({panelTitle:$0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${R&&k0({panelTitle:$0("Thoughts"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${E&&k0({panelTitle:$0("Draft"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${j0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${X0?`--turn-color: ${X0};`:""}>
                    ${X0&&z`<span class=${n} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!j0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U0}</span>
                </div>
            `}
        </div>
    `}function I2({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z,chat_jid:Y}=_,K=N?.title||"Agent Request",Q=N?.kind||"other",q=N?.rawInput||{},B=q.command||q.commands&&q.commands[0]||null,W=q.diff||null,V=q.fileName||q.path||null,U=N?.description||q.description||q.explanation||null,D=(Array.isArray(N?.locations)?N.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),M=Array.from(new Set([V,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let y=async(I)=>{try{await N5(j,I,Y||null),$()}catch(R){console.error("Failed to respond to agent request:",R)}},J=async()=>{try{await G8(K,`Auto-approved: ${K}`),await N5(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},k=Z&&Z.length>0;return z`
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
                ${(U||B||W||M.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${M.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${M.map((I,R)=>z`<li key=${R}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${B&&z`
                            <pre class="agent-request-command">${B}</pre>
                        `}
                        ${W&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((I)=>z`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>y(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>y("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>y("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function C2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,Y=86400000;if(N<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*Y){let q=$.toLocaleDateString(void 0,{weekday:"short"}),B=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${B}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${Q}`}function y$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function I_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function i4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var pN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),cN=new Set(["text/markdown"]),lN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),iN=new Set(["application/vnd.jgraph.mxfile"]);function T$(_){return typeof _==="string"?_.trim().toLowerCase():""}function nN(_){let $=T$(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function dN(_){let $=T$(_);return!!$&&$.endsWith(".pdf")}function rN(_){let $=T$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function S$(_,$){let j=T$(_);if(nN($)||iN.has(j))return"drawio";if(dN($)||j==="application/pdf")return"pdf";if(rN($)||lN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(pN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function y2(_){let $=T$(_);return cN.has($)}function T2(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function oN(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let N=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(N.slice(0,2),16),g:parseInt(N.slice(2,4),16),b:parseInt(N.slice(4,6),16)}}function sN(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let N=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![N,Z,Y].every((K)=>Number.isFinite(K)))return null;return{r:N,g:Z,b:Y}}function S2(_){return oN(_)||sN(_)}function H5(_){let $=(Y)=>{let K=Y/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),N=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*N+0.0722*Z}function aN(_,$){let j=Math.max(H5(_),H5($)),N=Math.min(H5(_),H5($));return(j+0.05)/(N+0.05)}function tN(_,$,j="#ffffff"){let N=S2(_);if(!N)return j;let Z=j,Y=-1;for(let K of $){let Q=S2(K);if(!Q)continue;let q=aN(N,Q);if(q>Y)Z=K,Y=q}return Z}function R8(){let _=getComputedStyle(document.documentElement),$=(D,M)=>{for(let y of D){let J=_.getPropertyValue(y).trim();if(J)return J}return M},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Q=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),B=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),A=tN(Q,[j,Z],j);return{fg:j,fgMuted:N,bgPrimary:Z,bg:Y,bgEmphasis:K,accent:Q,good:q,warning:B,attention:W,border:V,fontFamily:U,buttonTextColor:A}}function x2(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:N,accent:Z,good:Y,warning:K,attention:Q,border:q,fontFamily:B}=R8();return{fontFamily:B,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}},emphasis:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:K,subtle:K},attention:{default:Q,subtle:Q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var eN=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),w2=!1,J5=null,R2=!1;function v8(_){_.querySelector(".adaptive-card-notice")?.remove()}function _Z(_,$,j="error"){v8(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}function $Z(_,$=(j)=>V_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function jZ(_=($)=>V_($,null)){return($,j)=>{try{let N=$Z($,_);j.outputHtml=N.outputHtml,j.didProcess=N.didProcess}catch(N){console.error("[adaptive-card] Failed to process markdown:",N),j.outputHtml=String($??""),j.didProcess=!1}}}function NZ(_){if(R2||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=jZ(),R2=!0}async function ZZ(){if(w2)return;if(J5)return J5;return J5=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{w2=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),J5}function YZ(){return globalThis.AdaptiveCards}function KZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function QZ(_){return eN.has(_)}function b8(_){if(!Array.isArray(_))return[];return _.filter(KZ)}function BZ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:N,raw:_}}function f8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>f8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${f8(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function qZ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return f8($);return typeof $==="string"?$:String($)}function GZ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((Q)=>N(Q));if(!Z||typeof Z!=="object")return Z;let K={...Z};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=qZ(K.type,j[K.id],K);for(let[Q,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[Q]=N(q);return K};return N(_)}function XZ(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function VZ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function WZ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=VZ(_.completed_at||j?.submitted_at),Y=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function v2(_,$,j){if(!QZ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await ZZ()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=YZ();NZ(N);let Z=new N.AdaptiveCard,Y=R8();Z.hostConfig=new N.HostConfig(x2());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Q=$.state==="active"?$.payload:GZ($.payload,K);Z.parse(Q),Z.onExecuteAction=(W)=>{let V=BZ(W);if(j?.onAction)v8(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let A=U instanceof Error?U.message:String(U||"Action failed.");_Z(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let q=Z.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let B=WZ($);if(B){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=B.label,W.appendChild(V),B.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=B.detail,W.appendChild(U)}_.appendChild(W)}if(v8(_),_.appendChild(q),B)XZ(q);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function x$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>x$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${x$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function f2(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:x$(j)})).filter(($)=>$.value)}function LZ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function u8(_){if(!Array.isArray(_))return[];return _.filter(LZ)}function b2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=x$(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=f2(j).map(({key:Y,value:K})=>`${Y}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function u2(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=f2(_.data),N=j.length>0?j.slice(0,2).map(({key:Y,value:K})=>`${Y}: ${K}`).join(", "):x$(_.data)||null,Z=j.length;return{title:$,summary:N,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function UZ(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?I_($):null},{label:"Added",value:_?.created_at?i4(_.created_at):null}].filter((N)=>N.value)}function zZ(_,$,j){let N=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${N}#media=${Z}&name=${N}`;if(j==="office"){let Y=P_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${N}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${N}&readonly=1#media=${Z}&name=${N}&readonly=1`;return null}function m2({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=y0(()=>S$($?.content_type,N),[$?.content_type,N]),Y=T2(Z),K=y0(()=>y2($?.content_type),[$?.content_type]),[Q,q]=c(Z==="text"),[B,W]=c(""),[V,U]=c(null),A=T(null),D=y0(()=>UZ($),[$]),M=y0(()=>zZ(_,N,Z),[_,N,Z]),y=y0(()=>{if(!K||!B)return"";return V_(B)},[K,B]);return p(()=>{let J=(k)=>{if(k.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),p(()=>{if(!A.current||!y)return;G4(A.current);return},[y]),p(()=>{let J=!1;async function k(){if(Z!=="text"){q(!1),U(null);return}q(!0),U(null);try{let I=await L8(_);if(!J)W(I)}catch{if(!J)U("Failed to load text preview.")}finally{if(!J)q(!1)}}return k(),()=>{J=!0}},[_,Z]),z`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${M&&z`
                            <a
                                href=${M}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${P_(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(J)=>J.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Q&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Q&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                    ${!Q&&!V&&Z==="image"&&z`
                        <img class="attachment-preview-image" src=${P_(_)} alt=${N} />
                    `}
                    ${!Q&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&M&&z`
                        <iframe class="attachment-preview-frame" src=${M} title=${N}></iframe>
                    `}
                    ${!Q&&!V&&Z==="drawio"&&z`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!Q&&!V&&Z==="text"&&K&&z`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:y}}
                        />
                    `}
                    ${!Q&&!V&&Z==="text"&&!K&&z`
                        <pre class="attachment-preview-text">${B}</pre>
                    `}
                    ${!Q&&!V&&Z==="unsupported"&&z`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${D.map((J)=>z`
                        <div class="attachment-preview-meta-item" key=${J.label}>
                            <span class="attachment-preview-meta-label">${J.label}</span>
                            <span class="attachment-preview-meta-value">${J.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function g2({src:_,onClose:$}){return p(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function FZ({mediaId:_,onPreview:$}){let[j,N]=c(null);if(p(()=>{$$(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,K=Y?I_(Y):"",q=S$(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(B)=>B.stopPropagation()}>
            <a href=${P_(_)} download=${Z} class="file-attachment-main">
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
                        ${K&&z`<span class="file-size">${K}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function OZ({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=c(null);p(()=>{if(!Number.isFinite(j))return;$$(j).then(Z).catch(()=>{});return},[j]);let Y=N?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?P_(j):null,q=S$(N?.content_type,N?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${Y}>
            ${K?z`
                    <a href=${K} download=${Y} class="attachment-pill-main" onClick=${(B)=>B.stopPropagation()}>
                        <${g_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:z`
                    <${g_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&N&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function D5({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?i4(N):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&z`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function HZ({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?I_(_.size):"",Z=_.mime_type||"",Y=EZ(Z),K=l4(_.uri);return z`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(Q)=>Q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&z`<span>${Z}</span>`}
                    ${N&&z`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function JZ({block:_}){let[$,j]=c(!1),N=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&z`
                ${Z&&z`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&z`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:K||"application/octet-stream"}),B=URL.createObjectURL(q),W=document.createElement("a");W.href=B,W.download=N.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(B)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function DZ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let N=x8(_,$),Z=V2(_),Y=N?.artifact?.kind||_?.artifact?.kind||_?.kind||null,K=N?.title||_.title||_.name||"Generated widget",Q=N?.description||_.description||_.subtitle||"",q=_.open_label||"Open widget",B=(W)=>{if(W.preventDefault(),W.stopPropagation(),!N)return;j?.(N)};return z`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${K}</div>
            </div>
            ${Q&&z`<div class="generated-widget-launch-description">${Q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${B}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${q}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function EZ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function AZ({preview:_}){let $=l4(_.url),j=l4(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function MZ(_,$){return typeof _==="string"?_:""}var kZ=1800,PZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,IZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,CZ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function yZ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function TZ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(Y,K)=>{let Q=K||"idle";if(Y.dataset.copyState=Q,Q==="success")Y.innerHTML=IZ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(Q==="error")Y.innerHTML=CZ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=PZ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",Z(Q,"idle"),K.appendChild(Q);let q=async(B)=>{B.preventDefault(),B.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await yZ(V);Z(Q,U?"success":"error");let A=j.get(Q);if(A)clearTimeout(A);let D=setTimeout(()=>{Z(Q,"idle"),j.delete(Q)},kZ);j.set(Q,D)};Q.addEventListener("click",q),N.push(()=>{Q.removeEventListener("click",q);let B=j.get(Q);if(B)clearTimeout(B);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{N.forEach((Y)=>Y())}}function SZ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let B=0;B<j.length;B+=1)if(j[B].trim()==="Files:"&&j[B+1]&&/^\s*-\s+/.test(j[B+1])){N=B;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let B=j[Y];if(/^\s*-\s+/.test(B))Z.push(B.replace(/^\s*-\s+/,"").trim());else if(!B.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),q=[...K,...Q].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:Z}}function xZ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let B=0;B<j.length;B+=1)if(j[B].trim()==="Referenced messages:"&&j[B+1]&&/^\s*-\s+/.test(j[B+1])){N=B;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let B=j[Y];if(/^\s*-\s+/.test(B)){let V=B.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!B.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,N),Q=j.slice(Y),q=[...K,...Q].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:Z}}function wZ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let B=0;B<j.length;B+=1){let W=j[B].trim();if((W==="Images:"||W==="Attachments:")&&j[B+1]&&/^\s*-\s+/.test(j[B+1])){N=B;break}}if(N===-1)return{content:_,attachments:[]};let Z=[],Y=N+1;for(;Y<j.length;Y+=1){let B=j[Y];if(/^\s*-\s+/.test(B)){let W=B.replace(/^\s*-\s+/,"").trim(),V=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],A=(V[2]||"").trim()||U;Z.push({id:U,label:A,raw:W})}else Z.push({id:null,label:W,raw:W})}else if(!B.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let K=j.slice(0,N),Q=j.slice(Y),q=[...K,...Q].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:Z}}function RZ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function vZ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(RZ).sort((W,V)=>V.length-W.length),Z=new RegExp(`(${N.join("|")})`,"gi"),Y=new RegExp(`^(${N.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),Q=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],B;while(B=Q.nextNode())q.push(B);for(let W of q){let V=W.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=W.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let A=V.split(Z).filter((M)=>M!=="");if(A.length===0)continue;let D=K.createDocumentFragment();for(let M of A)if(Y.test(M)){let y=K.createElement("mark");y.className="search-highlight-term",y.textContent=M,D.appendChild(y)}else D.appendChild(K.createTextNode(M));W.parentNode.replaceChild(D,W)}return K.body.innerHTML}function h2({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:K,userName:Q,userAvatarUrl:q,userAvatarBackground:B,onDelete:W,isThreadReply:V,isThreadPrev:U,isThreadNext:A,isRemoving:D,highlightQuery:M,onFileRef:y,onOpenWidget:J}){let[k,I]=c(null),R=T(null),E=_.data,u=E.type==="agent_response",s=Q||"You",i=u?Y||J2:s,g=u?w8(Y,K,!0):w8(s,q),w=typeof B==="string"?B.trim().toLowerCase():"",l=!u&&g.image&&(w==="clear"||w==="transparent"),a=u&&Boolean(g.image),X0=`background-color: ${l||a?"transparent":g.color}`,n=E.content_meta,$0=Boolean(n?.truncated),j0=Boolean(n?.preview),Z0=$0&&!j0,K0=$0?{originalLength:Number.isFinite(n?.original_length)?n.original_length:E.content?E.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,q0=E.content_blocks||[],L0=E.media_ids||[],U0=MZ(E.content,E.link_previews),{content:O0,fileRefs:p0}=SZ(U0),{content:k0,messageRefs:J0}=xZ(O0),{content:c0,attachments:l0}=wZ(k0);U0=c0;let T0=b8(q0),G0=u8(q0),P0=T0.length===1&&typeof T0[0]?.fallback_text==="string"?T0[0].fallback_text.trim():"",D0=G0.length===1?b2(G0[0]).trim():"",Q0=Boolean(P0)&&U0?.trim()===P0||Boolean(D0)&&U0?.trim()===D0,I0=Boolean(U0)&&!Z0&&!Q0,d0=typeof M==="string"?M.trim():"",m0=y0(()=>{if(!U0||Q0)return"";let m=V_(U0,j);return d0?vZ(m,d0):m},[U0,Q0,d0]),L1=(m,B0)=>{m.stopPropagation(),I(P_(B0))},[P1,v0]=c(null),i0=(m)=>{v0(m)},N1=(m)=>{m.stopPropagation(),W?.(_)},Q1=(m,B0)=>{let E0=new Set;if(!m||B0.length===0)return{content:m,usedIds:E0};return{content:m.replace(/attachment:([^\s)"']+)/g,(o0,e1,i1,c_)=>{let y_=e1.replace(/^\/+/,""),t0=B0.find((d1)=>d1.name&&d1.name.toLowerCase()===y_.toLowerCase()&&!E0.has(d1.id))||B0.find((d1)=>!E0.has(d1.id));if(!t0)return o0;if(E0.add(t0.id),c_.slice(Math.max(0,i1-2),i1)==="](")return`/media/${t0.id}`;return t0.name||"attachment"}),usedIds:E0}},r0=[],x1=[],Z1=[],u1=[],B1=[],l1=[],g0=[],t1=0;if(q0.length>0)q0.forEach((m)=>{if(m?.type==="text"&&m.annotations)g0.push(m.annotations);if(m?.type==="generated_widget")l1.push(m);else if(m?.type==="resource_link")u1.push(m);else if(m?.type==="resource")B1.push(m);else if(m?.type==="file"){let B0=L0[t1++];if(B0)x1.push(B0),Z1.push({id:B0,name:m?.name||m?.filename||m?.title})}else if(m?.type==="image"||!m?.type){let B0=L0[t1++];if(B0){let E0=typeof m?.mime_type==="string"?m.mime_type:void 0;r0.push({id:B0,annotations:m?.annotations,mimeType:E0}),Z1.push({id:B0,name:m?.name||m?.filename||m?.title})}}});else if(L0.length>0){let m=l0.length>0;L0.forEach((B0,E0)=>{let F0=l0[E0]||null;if(Z1.push({id:B0,name:F0?.label||null}),m)x1.push(B0);else r0.push({id:B0,annotations:null})})}if(l0.length>0)l0.forEach((m)=>{if(!m?.id)return;let B0=Z1.find((E0)=>String(E0.id)===String(m.id));if(B0&&!B0.name)B0.name=m.label});let{content:G1,usedIds:U1}=Q1(U0,Z1);U0=G1;let H1=r0.filter(({id:m})=>!U1.has(m)),C0=x1.filter((m)=>!U1.has(m)),J1=l0.length>0?l0.map((m,B0)=>({id:m.id||`attachment-${B0+1}`,label:m.label||`attachment-${B0+1}`})):Z1.map((m,B0)=>({id:m.id,label:m.name||`attachment-${B0+1}`})),S0=y0(()=>b8(q0),[q0]),w0=y0(()=>u8(q0),[q0]),a0=y0(()=>{return S0.map((m)=>`${m.card_id}:${m.state}`).join("|")},[S0]);p(()=>{if(!R.current)return;return G4(R.current),TZ(R.current)},[m0]);let n1=T(null);return p(()=>{if(!n1.current||S0.length===0)return;let m=n1.current;m.innerHTML="";for(let B0 of S0){let E0=document.createElement("div");m.appendChild(E0),v2(E0,B0,{onAction:async(F0)=>{if(F0.type==="Action.OpenUrl"){let o0=l4(F0.url||"");if(!o0)throw Error("Invalid URL");window.open(o0,"_blank","noopener,noreferrer");return}if(F0.type==="Action.Submit"){await q8({post_id:_.id,thread_id:E.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:B0.card_id,action:{type:F0.type,title:F0.title||"",data:F0.data}});return}console.warn("[post] unsupported adaptive card action:",F0.type,F0)}}).catch((F0)=>{console.error("[post] adaptive card render error:",F0),E0.textContent=B0.fallback_text||"Card failed to render."})}},[a0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${u?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${A?"thread-next":""} ${D?"removing":""}" onClick=${$}>
            <div class="post-avatar ${u?"agent-avatar":""} ${g.image?"has-image":""}" style=${X0}>
                ${g.image?z`<img src=${g.image} alt=${i} />`:g.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${N1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${i}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(m)=>{if(m.preventDefault(),m.stopPropagation(),N)N(_.id)}}>${C2(_.timestamp)}</a>
                </div>
                ${Z0&&K0&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${y$(K0.originalLength)} chars
                            ${K0.maxLength?z` • Display limit: ${y$(K0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${j0&&K0&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${y$(K0.maxLength)} of ${y$(K0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(p0.length>0||J0.length>0||J1.length>0)&&z`
                    <div class="post-file-refs">
                        ${J0.map((m)=>{let B0=(E0)=>{if(E0.preventDefault(),E0.stopPropagation(),Z)Z(m,_.chat_jid||null);else{let F0=document.getElementById("post-"+m);if(F0)F0.scrollIntoView({behavior:"smooth",block:"center"}),F0.classList.add("post-highlight"),setTimeout(()=>F0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${m}`} class="post-msg-pill-link" onClick=${B0}>
                                    <${g_}
                                        prefix="post"
                                        label=${"msg:"+m}
                                        title=${"Message "+m}
                                        icon="message"
                                        onClick=${B0}
                                    />
                                </a>
                            `})}
                        ${p0.map((m)=>{let B0=m.split("/").pop()||m;return z`
                                <${g_}
                                    prefix="post"
                                    label=${B0}
                                    title=${m}
                                    onClick=${()=>y?.(m)}
                                />
                            `})}
                        ${J1.map((m)=>z`
                            <${OZ}
                                key=${m.id}
                                attachment=${m}
                                onPreview=${i0}
                            />
                        `)}
                    </div>
                `}
                ${I0&&z`
                    <div 
                        ref=${R}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m0}}
                        onClick=${(m)=>{if(m.target.classList.contains("hashtag")){m.preventDefault(),m.stopPropagation();let B0=m.target.dataset.hashtag;if(B0)j?.(B0)}else if(m.target.tagName==="IMG")m.preventDefault(),m.stopPropagation(),I(m.target.src)}}
                    />
                `}
                ${S0.length>0&&z`
                    <div ref=${n1} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((m,B0)=>{let E0=u2(m),F0=`${m.card_id}-${B0}`;return z`
                                <div key=${F0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${E0.title}</span>
                                        </div>
                                    </div>
                                    ${E0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${E0.fields.map((o0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${o0.key}: ${o0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${o0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${o0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${i4(E0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${l1.length>0&&z`
                    <div class="generated-widget-launches">
                        ${l1.map((m,B0)=>z`
                            <${DZ}
                                key=${m.widget_id||m.id||`${_.id}-widget-${B0}`}
                                block=${m}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${g0.length>0&&z`
                    ${g0.map((m,B0)=>z`
                        <${D5} key=${B0} annotations=${m} />
                    `)}
                `}
                ${H1.length>0&&z`
                    <div class="media-preview">
                        ${H1.map(({id:m,mimeType:B0})=>{let F0=typeof B0==="string"&&B0.toLowerCase().startsWith("image/svg")?P_(m):W8(m);return z`
                                <img 
                                    key=${m} 
                                    src=${F0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(o0)=>L1(o0,m)}
                                />
                            `})}
                    </div>
                `}
                ${H1.length>0&&z`
                    ${H1.map(({annotations:m},B0)=>z`
                        ${m&&z`<${D5} key=${B0} annotations=${m} />`}
                    `)}
                `}
                ${C0.length>0&&z`
                    <div class="file-attachments">
                        ${C0.map((m)=>z`
                            <${FZ} key=${m} mediaId=${m} onPreview=${i0} />
                        `)}
                    </div>
                `}
                ${u1.length>0&&z`
                    <div class="resource-links">
                        ${u1.map((m,B0)=>z`
                            <div key=${B0}>
                                <${HZ} block=${m} />
                                <${D5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${B1.length>0&&z`
                    <div class="resource-embeds">
                        ${B1.map((m,B0)=>z`
                            <div key=${B0}>
                                <${JZ} block=${m} />
                                <${D5} annotations=${m.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${E.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${E.link_previews.map((m,B0)=>z`
                            <${AZ} key=${B0} preview=${m} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${k&&z`<${g2} src=${k} onClose=${()=>I(null)} />`}
        ${P1&&z`
            <${m2}
                mediaId=${P1.mediaId}
                info=${P1.info}
                onClose=${()=>v0(null)}
            />
        `}
    `}function p2({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:K,onFileRef:Q,onOpenWidget:q,emptyMessage:B,timelineRef:W,agents:V,user:U,onDeletePost:A,reverse:D=!0,removingPostIds:M,searchQuery:y}){let[J,k]=c(!1),I=T(null),R=typeof IntersectionObserver<"u",E=x(async()=>{if(!j||!$||J)return;k(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{k(!1)}},[$,J,j]),u=x((n)=>{let{scrollTop:$0,scrollHeight:j0,clientHeight:Z0}=n.target,K0=D?j0-Z0-$0:$0,q0=Math.max(300,Z0);if(K0<q0)E()},[D,E]);p(()=>{if(!R)return;let n=I.current,$0=W?.current;if(!n||!$0)return;let j0=300,Z0=new IntersectionObserver((K0)=>{for(let q0 of K0){if(!q0.isIntersecting)continue;E()}},{root:$0,rootMargin:`${j0}px 0px ${j0}px 0px`,threshold:0});return Z0.observe(n),()=>Z0.disconnect()},[R,$,j,W,E]);let s=T(E);if(s.current=E,p(()=>{if(R)return;if(!W?.current)return;let{scrollTop:n,scrollHeight:$0,clientHeight:j0}=W.current,Z0=D?$0-j0-n:n,K0=Math.max(300,j0);if(Z0<K0)s.current?.()},[R,_,$,D,W]),p(()=>{if(!W?.current)return;if(!$||J)return;let{scrollTop:n,scrollHeight:$0,clientHeight:j0}=W.current,Z0=D?$0-j0-n:n,K0=Math.max(300,j0);if($0<=j0+1||Z0<K0)s.current?.()},[_,$,J,D,W]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${B||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let i=_.slice().sort((n,$0)=>n.id-$0.id),g=(n)=>{let $0=n?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let j0=Number($0);return Number.isFinite(j0)?j0:null},w=new Map;for(let n=0;n<i.length;n+=1){let $0=i[n],j0=Number($0?.id),Z0=g($0);if(Z0!==null){let K0=w.get(Z0)||{anchorIndex:-1,replyIndexes:[]};K0.replyIndexes.push(n),w.set(Z0,K0)}else if(Number.isFinite(j0)){let K0=w.get(j0)||{anchorIndex:-1,replyIndexes:[]};K0.anchorIndex=n,w.set(j0,K0)}}let l=new Map;for(let[n,$0]of w.entries()){let j0=new Set;if($0.anchorIndex>=0)j0.add($0.anchorIndex);for(let Z0 of $0.replyIndexes)j0.add(Z0);l.set(n,Array.from(j0).sort((Z0,K0)=>Z0-K0))}let a=i.map((n,$0)=>{let j0=g(n);if(j0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z0=l.get(j0);if(!Z0||Z0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=Z0.indexOf($0);if(K0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:K0>0,hasThreadNext:K0<Z0.length-1}}),X0=z`<div class="timeline-sentinel" ref=${I}></div>`;return z`
        <div class="timeline ${D?"reverse":"normal"}" ref=${W} onScroll=${u}>
            <div class="timeline-content">
                ${D?X0:null}
                ${i.map((n,$0)=>{let j0=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),Z0=M?.has?.(n.id),K0=a[$0]||{};return z`
                    <${h2}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${j0}
                        isThreadPrev=${K0.hasThreadPrev}
                        isThreadNext=${K0.hasThreadNext}
                        isRemoving=${Z0}
                        highlightQuery=${y}
                        agentName=${D2(n.data?.agent_id,V||{})}
                        agentAvatarUrl=${E2(n.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>N?.(n)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${Q}
                        onOpenWidget=${q}
                        onDelete=${A}
                    />
                `})}
                ${D?null:X0}
            </div>
        </div>
    `}class c2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j1=new c2;var E5=null,m8=null;function fZ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function l2(){if(m8)return Promise.resolve(m8);if(!E5)E5=import(fZ()).then((_)=>{return m8=_,_}).catch((_)=>{throw E5=null,_});return E5}class i2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await l2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var g8={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new i2(_,$)}};function h8(){l2().catch(()=>{})}var w$="piclaw://terminal";var bZ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},uZ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},A5=null,p8=null;function mZ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function gZ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,Y)=>{let K=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!mZ(K))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function hZ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!A5)A5=gZ(()=>Promise.resolve($.init?.())).catch((j)=>{throw A5=null,j});return await A5,$}async function pZ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!p8)p8=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await p8}async function cZ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function lZ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function iZ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function nZ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function n2(){let _=iZ(),$=_?uZ:bZ,j=X4("--bg-primary",_?"#000000":"#ffffff"),N=X4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=X4("--text-secondary",_?"#71767b":"#536471"),Y=X4("--accent-color","#1d9bf0"),K=X4("--danger-color",_?"#ff7b72":"#cf222e"),Q=X4("--success-color",_?"#7ee787":"#1a7f37"),q=X4("--bg-hover",_?"#1d1f23":"#e8ebed"),B=X4("--border-color",_?"#2f3336":"#eff3f4"),W=X4("--accent-soft-strong",nZ(Y,_?"47":"33"));return{background:j,foreground:N,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:N,black:q,red:K,green:Q,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:B}}class c8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,N=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(N)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await hZ();if(await pZ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:n2()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=n2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await cZ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(lZ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var l8={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new c8(_,$)}},i8={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new c8(_,$)}};function V4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function M5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let N=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(N),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||K)}function d2(_,$={}){if(V4($))return null;if(M5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:dZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function n8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function d8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),N=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${N}</p>
            </div>
        `}catch{}}function r8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function r2(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function n4(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("chat_jid",Z),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function o2(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("branch_loader","1"),N.searchParams.set("branch_source_chat_jid",Z),N.searchParams.delete("chat_jid"),N.searchParams.delete("pane_popout"),N.searchParams.delete("pane_path"),N.searchParams.delete("pane_label"),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function s2(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return N.toString();if(N.searchParams.set("pane_popout","1"),N.searchParams.set("pane_path",Z),j?.label)N.searchParams.set("pane_label",String(j.label));else N.searchParams.delete("pane_label");if(j?.chatJid)N.searchParams.set("chat_jid",String(j.chatJid));return N.searchParams.delete("chat_only"),N.searchParams.delete("branch_loader"),N.searchParams.delete("branch_source_chat_jid"),N.toString()}function dZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function rZ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function a2(_,$={}){if(V4($))return null;if(M5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:rZ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let N=j.toLowerCase();if(N.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(N.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(N.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(N.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(N.includes("failed to fork branch")||N.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function oZ(_){try{return JSON.parse(_)}catch{return null}}function sZ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function aZ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class o8{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=aZ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let N=this.options.parseControlMessage||oZ;this.options.onMessage?.({kind:"control",raw:$.data,payload:N($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=sZ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var R$=()=>{throw Error("Operation requires compiling with --exportRuntime")},tZ=typeof BigUint64Array<"u",v$=Symbol();var eZ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function t2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,N=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...N);try{return eZ.decode(N)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...N.subarray(Y,Y+=1024));return Z+String.fromCharCode(...N.subarray(Y))}}function e2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return t2(Z.buffer,Y)}let N=_.env=_.env||{};return N.abort=N.abort||function(Y,K,Q,q){let B=$.memory||N.memory;throw Error(`abort: ${j(B,Y)} at ${j(B,K)}:${Q}:${q}`)},N.trace=N.trace||function(Y,K,...Q){let q=$.memory||N.memory;console.log(`trace: ${j(q,Y)}${K?" ":""}${Q.slice(0,K).join(", ")}`)},N.seed=N.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function _7(_,$){let j=$.exports,N=j.memory,Z=j.table,Y=j.__new||R$,K=j.__pin||R$,Q=j.__unpin||R$,q=j.__collect||R$,B=j.__rtti_base,W=B?(w)=>w[B>>>2]:R$;_.__new=Y,_.__pin=K,_.__unpin=Q,_.__collect=q;function V(w){let l=new Uint32Array(N.buffer);if((w>>>=0)>=W(l))throw Error(`invalid id: ${w}`);return l[(B+4>>>2)+w]}function U(w){let l=V(w);if(!(l&7))throw Error(`not an array: ${w}, flags=${l}`);return l}function A(w){return 31-Math.clz32(w>>>6&31)}function D(w){if(w==null)return 0;let l=w.length,a=Y(l<<1,2),X0=new Uint16Array(N.buffer);for(let n=0,$0=a>>>1;n<l;++n)X0[$0+n]=w.charCodeAt(n);return a}_.__newString=D;function M(w){if(w==null)return 0;let l=new Uint8Array(w),a=Y(l.length,1);return new Uint8Array(N.buffer).set(l,a),a}_.__newArrayBuffer=M;function y(w){if(!w)return null;let l=N.buffer;if(new Uint32Array(l)[w+-8>>>2]!==2)throw Error(`not a string: ${w}`);return t2(l,w)}_.__getString=y;function J(w,l,a){let X0=N.buffer;if(a)switch(w){case 2:return new Float32Array(X0);case 3:return new Float64Array(X0)}else switch(w){case 0:return new(l?Int8Array:Uint8Array)(X0);case 1:return new(l?Int16Array:Uint16Array)(X0);case 2:return new(l?Int32Array:Uint32Array)(X0);case 3:return new(l?BigInt64Array:BigUint64Array)(X0)}throw Error(`unsupported align: ${w}`)}function k(w,l=0){let a=l,X0=U(w),n=A(X0),$0=typeof a!=="number",j0=$0?a.length:a,Z0=Y(j0<<n,X0&4?w:1),K0;if(X0&4)K0=Z0;else{K(Z0);let q0=Y(X0&2?16:12,w);Q(Z0);let L0=new Uint32Array(N.buffer);if(L0[q0+0>>>2]=Z0,L0[q0+4>>>2]=Z0,L0[q0+8>>>2]=j0<<n,X0&2)L0[q0+12>>>2]=j0;K0=q0}if($0){let q0=J(n,X0&2048,X0&4096),L0=Z0>>>n;if(X0&16384)for(let U0=0;U0<j0;++U0)q0[L0+U0]=a[U0];else q0.set(a,L0)}return K0}_.__newArray=k;function I(w){let l=new Uint32Array(N.buffer),a=l[w+-8>>>2],X0=U(a),n=A(X0),$0=X0&4?w:l[w+4>>>2],j0=X0&2?l[w+12>>>2]:l[$0+-4>>>2]>>>n;return J(n,X0&2048,X0&4096).subarray($0>>>=n,$0+j0)}_.__getArrayView=I;function R(w){let l=I(w),a=l.length,X0=Array(a);for(let n=0;n<a;n++)X0[n]=l[n];return X0}_.__getArray=R;function E(w){let l=N.buffer,a=new Uint32Array(l)[w+-4>>>2];return l.slice(w,w+a)}_.__getArrayBuffer=E;function u(w){if(!Z)throw Error("Operation requires compiling with --exportTable");let l=new Uint32Array(N.buffer)[w>>>2];return Z.get(l)}_.__getFunction=u;function s(w,l,a){return new w(i(w,l,a))}function i(w,l,a){let X0=N.buffer,n=new Uint32Array(X0);return new w(X0,n[a+4>>>2],n[a+8>>>2]>>>l)}function g(w,l,a){_[`__get${l}`]=s.bind(null,w,a),_[`__get${l}View`]=i.bind(null,w,a)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((w)=>{g(w,w.name,31-Math.clz32(w.BYTES_PER_ELEMENT))}),tZ)[BigUint64Array,BigInt64Array].forEach((w)=>{g(w,w.name.slice(3),3)});return _.memory=_.memory||N,_.table=_.table||Z,$Y(j,_)}function $7(_){return typeof Response<"u"&&_ instanceof Response}function _Y(_){return _ instanceof WebAssembly.Module}async function s8(_,$={}){if($7(_=await _))return P5(_,$);let j=_Y(_)?_:await WebAssembly.compile(_),N=e2($),Z=await WebAssembly.instantiate(j,$),Y=_7(N,Z);return{module:j,instance:Z,exports:Y}}async function P5(_,$={}){if(!WebAssembly.instantiateStreaming)return s8($7(_=await _)?_.arrayBuffer():_,$);let j=e2($),N=await WebAssembly.instantiateStreaming(_,$),Z=_7(j,N.instance);return{...N,exports:Z}}function $Y(_,$={}){let j=_.__argumentsLength?(N)=>{_.__argumentsLength.value=N}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let N of Object.keys(_)){let Z=_[N],Y=N.split("."),K=$;while(Y.length>1){let B=Y.shift();if(!Object.hasOwn(K,B))K[B]={};K=K[B]}let Q=Y[0],q=Q.indexOf("#");if(q>=0){let B=Q.substring(0,q),W=K[B];if(typeof W>"u"||!W.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[v$]}},V.wrap=function(U){return Object.create(V.prototype,{[v$]:{value:U,writable:!1}})},W)Object.getOwnPropertyNames(W).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(W,U)));K[B]=V}if(Q=Q.substring(q+1),K=K[B].prototype,/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4))){let V=_[N.replace("set:","get:")],U=_[N.replace("get:","set:")];Object.defineProperty(K,Q,{get(){return V(this[v$])},set(A){U(this[v$],A)},enumerable:!0})}}else if(Q==="constructor")(K[Q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(K[Q]=function(...V){return j(V.length),Z(this[v$],...V)}).original=Z}else if(/^(get|set):/.test(Q)){if(!Object.hasOwn(K,Q=Q.substring(4)))Object.defineProperty(K,Q,{get:_[N.replace("set:","get:")],set:_[N.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(K[Q]=(...B)=>{return j(B.length),Z(...B)}).original=Z;else K[Q]=Z}return $}var NY="/static/js/vendor/remote-display-decoder.wasm",I5=null;function j7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function N7(){if(I5)return I5;return I5=(async()=>{try{let N=function(Z,Y,K,Q,q,B,W){let V=j7(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,K,Q,q,B,W.bitsPerPixel,W.bigEndian?1:0,W.trueColor?1:0,W.redMax,W.greenMax,W.blueMax,W.redShift,W.greenShift,W.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(NY,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof P5==="function"?await P5(_,{}):await s8(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,K,Q,q,B){return N("processRawRect",Z,Y,K,Q,q,B)},processCopyRect(Z,Y,K,Q,q,B){return j.processCopyRect(Z,Y,K,Q,q,B)},processRreRect(Z,Y,K,Q,q,B){return N("processRreRect",Z,Y,K,Q,q,B)},processHextileRect(Z,Y,K,Q,q,B){return N("processHextileRect",Z,Y,K,Q,q,B)},processZrleTileData(Z,Y,K,Q,q,B){return N("processZrleTileData",Z,Y,K,Q,q,B)},decodeRawRectToRgba(Z,Y,K,Q){let q=j7(Z),B=j.__pin(j.__newArrayBuffer(q));try{let W=j.__pin(j.decodeRawRectToRgba(B,Y,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(W))}finally{j.__unpin(W)}}finally{j.__unpin(B);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),I5}function K$(_,$,j){return Math.max($,Math.min(j,_))}function C5(_,$,j){let N=new Uint8Array(6),Z=K$(Math.floor(Number($||0)),0,65535),Y=K$(Math.floor(Number(j||0)),0,65535);return N[0]=5,N[1]=K$(Math.floor(Number(_||0)),0,255),N[2]=Z>>8&255,N[3]=Z&255,N[4]=Y>>8&255,N[5]=Y&255,N}function t8(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function Z7(_,$,j,N,Z){let Y=Math.max(1,Math.floor(Number(N||0))),K=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Number(j?.width||0)),q=Math.max(1,Number(j?.height||0)),B=(Number(_||0)-Number(j?.left||0))/Q,W=(Number($||0)-Number(j?.top||0))/q;return{x:K$(Math.floor(B*Y),0,Math.max(0,Y-1)),y:K$(Math.floor(W*K),0,Math.max(0,K-1))}}function Y7(_,$,j,N=0){let Z=Number(_)<0?8:16,Y=K$(Number(N||0)|Z,0,255);return[C5(Y,$,j),C5(Number(N||0),$,j)]}function K7(_,$){let j=new Uint8Array(8),N=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=N>>>24&255,j[5]=N>>>16&255,j[6]=N>>>8&255,j[7]=N&255,j}function f$(_){if(typeof _!=="string")return null;return _.length>0?_:null}function Q7(_,$,j,N){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),K=Math.max(1,Math.floor(Number(j||0))),Q=Math.max(1,Math.floor(Number(N||0))),q=Math.min(Z/K,Y/Q);if(!Number.isFinite(q)||q<=0)return 1;return Math.max(0.01,q)}var a8={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)a8[`F${_}`]=65470+(_-1);function e8(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(a8,Y))return a8[Y];let j=String(_?.key||""),N=j?j.codePointAt(0):null,Z=N==null?0:N>65535?2:1;if(N!=null&&j.length===Z){if(N<=255)return N;return(16777216|N)>>>0}return null}var S1=Uint8Array,W_=Uint16Array,B6=Int32Array,y5=new S1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),T5=new S1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Z6=new S1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),X7=function(_,$){var j=new W_(31);for(var N=0;N<31;++N)j[N]=$+=1<<_[N-1];var Z=new B6(j[30]);for(var N=1;N<30;++N)for(var Y=j[N];Y<j[N+1];++Y)Z[Y]=Y-j[N]<<5|N;return{b:j,r:Z}},V7=X7(y5,2),W7=V7.b,Y6=V7.r;W7[28]=258,Y6[258]=28;var L7=X7(T5,0),ZY=L7.b,B7=L7.r,K6=new W_(32768);for(R0=0;R0<32768;++R0)a_=(R0&43690)>>1|(R0&21845)<<1,a_=(a_&52428)>>2|(a_&13107)<<2,a_=(a_&61680)>>4|(a_&3855)<<4,K6[R0]=((a_&65280)>>8|(a_&255)<<8)>>1;var a_,R0,t_=function(_,$,j){var N=_.length,Z=0,Y=new W_($);for(;Z<N;++Z)if(_[Z])++Y[_[Z]-1];var K=new W_($);for(Z=1;Z<$;++Z)K[Z]=K[Z-1]+Y[Z-1]<<1;var Q;if(j){Q=new W_(1<<$);var q=15-$;for(Z=0;Z<N;++Z)if(_[Z]){var B=Z<<4|_[Z],W=$-_[Z],V=K[_[Z]-1]++<<W;for(var U=V|(1<<W)-1;V<=U;++V)Q[K6[V]>>q]=B}}else{Q=new W_(N);for(Z=0;Z<N;++Z)if(_[Z])Q[Z]=K6[K[_[Z]-1]++]>>15-_[Z]}return Q},T4=new S1(288);for(R0=0;R0<144;++R0)T4[R0]=8;var R0;for(R0=144;R0<256;++R0)T4[R0]=9;var R0;for(R0=256;R0<280;++R0)T4[R0]=7;var R0;for(R0=280;R0<288;++R0)T4[R0]=8;var R0,g$=new S1(32);for(R0=0;R0<32;++R0)g$[R0]=5;var R0,YY=t_(T4,9,0),KY=t_(T4,9,1),QY=t_(g$,5,0),BY=t_(g$,5,1),_6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},h_=function(_,$,j){var N=$/8|0;return(_[N]|_[N+1]<<8)>>($&7)&j},$6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},q6=function(_){return(_+7)/8|0},m$=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new S1(_.subarray($,j))};var qY=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],K_=function(_,$,j){var N=Error($||qY[_]);if(N.code=_,Error.captureStackTrace)Error.captureStackTrace(N,K_);if(!j)throw N;return N},GY=function(_,$,j,N){var Z=_.length,Y=N?N.length:0;if(!Z||$.f&&!$.l)return j||new S1(0);var K=!j,Q=K||$.i!=2,q=$.i;if(K)j=new S1(Z*3);var B=function(D0){var Q0=j.length;if(D0>Q0){var I0=new S1(Math.max(Q0*2,D0));I0.set(j),j=I0}},W=$.f||0,V=$.p||0,U=$.b||0,A=$.l,D=$.d,M=$.m,y=$.n,J=Z*8;do{if(!A){W=h_(_,V,1);var k=h_(_,V+1,3);if(V+=3,!k){var I=q6(V)+4,R=_[I-4]|_[I-3]<<8,E=I+R;if(E>Z){if(q)K_(0);break}if(Q)B(U+R);j.set(_.subarray(I,E),U),$.b=U+=R,$.p=V=E*8,$.f=W;continue}else if(k==1)A=KY,D=BY,M=9,y=5;else if(k==2){var u=h_(_,V,31)+257,s=h_(_,V+10,15)+4,i=u+h_(_,V+5,31)+1;V+=14;var g=new S1(i),w=new S1(19);for(var l=0;l<s;++l)w[Z6[l]]=h_(_,V+l*3,7);V+=s*3;var a=_6(w),X0=(1<<a)-1,n=t_(w,a,1);for(var l=0;l<i;){var $0=n[h_(_,V,X0)];V+=$0&15;var I=$0>>4;if(I<16)g[l++]=I;else{var j0=0,Z0=0;if(I==16)Z0=3+h_(_,V,3),V+=2,j0=g[l-1];else if(I==17)Z0=3+h_(_,V,7),V+=3;else if(I==18)Z0=11+h_(_,V,127),V+=7;while(Z0--)g[l++]=j0}}var K0=g.subarray(0,u),q0=g.subarray(u);M=_6(K0),y=_6(q0),A=t_(K0,M,1),D=t_(q0,y,1)}else K_(1);if(V>J){if(q)K_(0);break}}if(Q)B(U+131072);var L0=(1<<M)-1,U0=(1<<y)-1,O0=V;for(;;O0=V){var j0=A[$6(_,V)&L0],p0=j0>>4;if(V+=j0&15,V>J){if(q)K_(0);break}if(!j0)K_(2);if(p0<256)j[U++]=p0;else if(p0==256){O0=V,A=null;break}else{var k0=p0-254;if(p0>264){var l=p0-257,J0=y5[l];k0=h_(_,V,(1<<J0)-1)+W7[l],V+=J0}var c0=D[$6(_,V)&U0],l0=c0>>4;if(!c0)K_(3);V+=c0&15;var q0=ZY[l0];if(l0>3){var J0=T5[l0];q0+=$6(_,V)&(1<<J0)-1,V+=J0}if(V>J){if(q)K_(0);break}if(Q)B(U+131072);var T0=U+k0;if(U<q0){var G0=Y-q0,P0=Math.min(q0,T0);if(G0+U<0)K_(3);for(;U<P0;++U)j[U]=N[G0+U]}for(;U<T0;++U)j[U]=j[U-q0]}}if($.l=A,$.p=O0,$.b=U,$.f=W,A)W=1,$.m=M,$.d=D,$.n=y}while(!W);return U!=j.length&&K?m$(j,0,U):j.subarray(0,U)},W4=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8},b$=function(_,$,j){j<<=$&7;var N=$/8|0;_[N]|=j,_[N+1]|=j>>8,_[N+2]|=j>>16},j6=function(_,$){var j=[];for(var N=0;N<_.length;++N)if(_[N])j.push({s:N,f:_[N]});var Z=j.length,Y=j.slice();if(!Z)return{t:z7,l:0};if(Z==1){var K=new S1(j[0].s+1);return K[j[0].s]=1,{t:K,l:1}}j.sort(function(E,u){return E.f-u.f}),j.push({s:-1,f:25001});var Q=j[0],q=j[1],B=0,W=1,V=2;j[0]={s:-1,f:Q.f+q.f,l:Q,r:q};while(W!=Z-1)Q=j[j[B].f<j[V].f?B++:V++],q=j[B!=W&&j[B].f<j[V].f?B++:V++],j[W++]={s:-1,f:Q.f+q.f,l:Q,r:q};var U=Y[0].s;for(var N=1;N<Z;++N)if(Y[N].s>U)U=Y[N].s;var A=new W_(U+1),D=Q6(j[W-1],A,0);if(D>$){var N=0,M=0,y=D-$,J=1<<y;Y.sort(function(u,s){return A[s.s]-A[u.s]||u.f-s.f});for(;N<Z;++N){var k=Y[N].s;if(A[k]>$)M+=J-(1<<D-A[k]),A[k]=$;else break}M>>=y;while(M>0){var I=Y[N].s;if(A[I]<$)M-=1<<$-A[I]++-1;else++N}for(;N>=0&&M;--N){var R=Y[N].s;if(A[R]==$)--A[R],++M}D=$}return{t:new S1(A),l:D}},Q6=function(_,$,j){return _.s==-1?Math.max(Q6(_.l,$,j+1),Q6(_.r,$,j+1)):$[_.s]=j},q7=function(_){var $=_.length;while($&&!_[--$]);var j=new W_(++$),N=0,Z=_[0],Y=1,K=function(q){j[N++]=q};for(var Q=1;Q<=$;++Q)if(_[Q]==Z&&Q!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)K(32754);if(Y>2)K(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){K(Z),--Y;for(;Y>6;Y-=6)K(8304);if(Y>2)K(Y-3<<5|8208),Y=0}while(Y--)K(Z);Y=1,Z=_[Q]}return{c:j.subarray(0,N),n:$}},u$=function(_,$){var j=0;for(var N=0;N<$.length;++N)j+=_[N]*$[N];return j},U7=function(_,$,j){var N=j.length,Z=q6($+2);_[Z]=N&255,_[Z+1]=N>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<N;++Y)_[Z+Y+4]=j[Y];return(Z+4+N)*8},G7=function(_,$,j,N,Z,Y,K,Q,q,B,W){W4($,W++,j),++Z[256];var V=j6(Z,15),U=V.t,A=V.l,D=j6(Y,15),M=D.t,y=D.l,J=q7(U),k=J.c,I=J.n,R=q7(M),E=R.c,u=R.n,s=new W_(19);for(var i=0;i<k.length;++i)++s[k[i]&31];for(var i=0;i<E.length;++i)++s[E[i]&31];var g=j6(s,7),w=g.t,l=g.l,a=19;for(;a>4&&!w[Z6[a-1]];--a);var X0=B+5<<3,n=u$(Z,T4)+u$(Y,g$)+K,$0=u$(Z,U)+u$(Y,M)+K+14+3*a+u$(s,w)+2*s[16]+3*s[17]+7*s[18];if(q>=0&&X0<=n&&X0<=$0)return U7($,W,_.subarray(q,q+B));var j0,Z0,K0,q0;if(W4($,W,1+($0<n)),W+=2,$0<n){j0=t_(U,A,0),Z0=U,K0=t_(M,y,0),q0=M;var L0=t_(w,l,0);W4($,W,I-257),W4($,W+5,u-1),W4($,W+10,a-4),W+=14;for(var i=0;i<a;++i)W4($,W+3*i,w[Z6[i]]);W+=3*a;var U0=[k,E];for(var O0=0;O0<2;++O0){var p0=U0[O0];for(var i=0;i<p0.length;++i){var k0=p0[i]&31;if(W4($,W,L0[k0]),W+=w[k0],k0>15)W4($,W,p0[i]>>5&127),W+=p0[i]>>12}}}else j0=YY,Z0=T4,K0=QY,q0=g$;for(var i=0;i<Q;++i){var J0=N[i];if(J0>255){var k0=J0>>18&31;if(b$($,W,j0[k0+257]),W+=Z0[k0+257],k0>7)W4($,W,J0>>23&31),W+=y5[k0];var c0=J0&31;if(b$($,W,K0[c0]),W+=q0[c0],c0>3)b$($,W,J0>>5&8191),W+=T5[c0]}else b$($,W,j0[J0]),W+=Z0[J0]}return b$($,W,j0[256]),W+Z0[256]},XY=new B6([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),z7=new S1(0),VY=function(_,$,j,N,Z,Y){var K=Y.z||_.length,Q=new S1(N+K+5*(1+Math.ceil(K/7000))+Z),q=Q.subarray(N,Q.length-Z),B=Y.l,W=(Y.r||0)&7;if($){if(W)q[0]=Y.r>>3;var V=XY[$-1],U=V>>13,A=V&8191,D=(1<<j)-1,M=Y.p||new W_(32768),y=Y.h||new W_(D+1),J=Math.ceil(j/3),k=2*J,I=function(d0){return(_[d0]^_[d0+1]<<J^_[d0+2]<<k)&D},R=new B6(25000),E=new W_(288),u=new W_(32),s=0,i=0,g=Y.i||0,w=0,l=Y.w||0,a=0;for(;g+2<K;++g){var X0=I(g),n=g&32767,$0=y[X0];if(M[n]=$0,y[X0]=n,l<=g){var j0=K-g;if((s>7000||w>24576)&&(j0>423||!B)){W=G7(_,q,0,R,E,u,i,w,a,g-a,W),w=s=i=0,a=g;for(var Z0=0;Z0<286;++Z0)E[Z0]=0;for(var Z0=0;Z0<30;++Z0)u[Z0]=0}var K0=2,q0=0,L0=A,U0=n-$0&32767;if(j0>2&&X0==I(g-U0)){var O0=Math.min(U,j0)-1,p0=Math.min(32767,g),k0=Math.min(258,j0);while(U0<=p0&&--L0&&n!=$0){if(_[g+K0]==_[g+K0-U0]){var J0=0;for(;J0<k0&&_[g+J0]==_[g+J0-U0];++J0);if(J0>K0){if(K0=J0,q0=U0,J0>O0)break;var c0=Math.min(U0,J0-2),l0=0;for(var Z0=0;Z0<c0;++Z0){var T0=g-U0+Z0&32767,G0=M[T0],P0=T0-G0&32767;if(P0>l0)l0=P0,$0=T0}}}n=$0,$0=M[n],U0+=n-$0&32767}}if(q0){R[w++]=268435456|Y6[K0]<<18|B7[q0];var D0=Y6[K0]&31,Q0=B7[q0]&31;i+=y5[D0]+T5[Q0],++E[257+D0],++u[Q0],l=g+K0,++s}else R[w++]=_[g],++E[_[g]]}}for(g=Math.max(g,l);g<K;++g)R[w++]=_[g],++E[_[g]];if(W=G7(_,q,B,R,E,u,i,w,a,g-a,W),!B)Y.r=W&7|q[W/8|0]<<3,W-=7,Y.h=y,Y.p=M,Y.i=g,Y.w=l}else{for(var g=Y.w||0;g<K+B;g+=65535){var I0=g+65535;if(I0>=K)q[W/8|0]=B,I0=K;W=U7(q,W+1,_.subarray(g,I0))}Y.i=K}return m$(Q,0,N+q6(W)+Z)};var F7=function(){var _=1,$=0;return{p:function(j){var N=_,Z=$,Y=j.length|0;for(var K=0;K!=Y;){var Q=Math.min(K+2655,Y);for(;K<Q;++K)Z+=N+=j[K];N=(N&65535)+15*(N>>16),Z=(Z&65535)+15*(Z>>16)}_=N,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},WY=function(_,$,j,N,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),K=new S1(Y.length+_.length);K.set(Y),K.set(_,Y.length),_=K,Z.w=Y.length}}return VY(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,N,Z)};var O7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var LY=function(_,$){var j=$.level,N=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=N<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=F7();Z.p($.dictionary),O7(_,2,Z.d())}},UY=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)K_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)K_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var N6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var N=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:N?N.length:0},this.o=new S1(32768),this.p=new S1(0),N)this.o.set(N)}return _.prototype.e=function($){if(!this.ondata)K_(5);if(this.d)K_(4);if(!this.p.length)this.p=$;else if($.length){var j=new S1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,N=GY(this.p,this.s,this.o);this.ondata(m$(N,j,this.s.b),this.d),this.o=m$(N,this.s.b-32768),this.s.b=this.o.length,this.p=m$(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function H7(_,$){if(!$)$={};var j=F7();j.p(_);var N=WY(_,$,$.dictionary?6:2,4);return LY(N,$),O7(N,N.length-4,j.d()),N}var J7=function(){function _($,j){N6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(N6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(UY(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)K_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}N6.prototype.c.call(this,j)},_}();var zY=typeof TextDecoder<"u"&&new TextDecoder,FY=0;try{zY.decode(z7,{stream:!0}),FY=1}catch(_){}var OY=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],HY=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],JY=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],DY=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],EY=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],AY=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],MY=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],kY=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],A7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;A7[_]=$}function M7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function k7(_){let $=0n,j=M7(_);for(let N of j)$=$<<8n|BigInt(N);return $}function PY(_,$){let j=new Uint8Array($),N=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(N&0xffn),N>>=8n;return j}function Q$(_,$,j){let N=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;N=N<<1n|Y}return N}function D7(_,$){let j=28n,N=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&N}function IY(_){let $=Q$(k7(_),EY,64),j=$>>28n&0x0fffffffn,N=$&0x0fffffffn,Z=[];for(let Y of MY){j=D7(j,Y),N=D7(N,Y);let K=j<<28n|N;Z.push(Q$(K,AY,56))}return Z}function CY(_){let $=0n;for(let j=0;j<8;j+=1){let N=BigInt((7-j)*6),Z=Number(_>>N&0x3fn),Y=(Z&32)>>4|Z&1,K=Z>>1&15;$=$<<4n|BigInt(kY[j][Y][K])}return $}function yY(_,$){let j=Q$(_,JY,32)^BigInt($),N=CY(j);return Q$(N,DY,32)}function E7(_,$){let j=IY($),N=Q$(k7(_),OY,64),Z=N>>32n&0xffffffffn,Y=N&0xffffffffn;for(let Q of j){let q=Y,B=(Z^yY(Y,Q))&0xffffffffn;Z=q,Y=B}let K=Y<<32n|Z;return PY(Q$(K,HY,64),8)}function TY(_){let $=String(_??""),j=new Uint8Array(8);for(let N=0;N<8;N+=1){let Z=N<$.length?$.charCodeAt(N)&255:0;j[N]=A7[Z]}return j}function P7(_,$){let j=M7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let N=TY(_),Z=new Uint8Array(16);return Z.set(E7(j.slice(0,8),N),0),Z.set(E7(j.slice(8,16),N),8),Z}var p_="vnc";function SY(_){return Number(_)}function xY(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],N=new Set;for(let Z of $){let Y=SY(Z);if(!Number.isFinite(Y))continue;let K=Number(Y);if(!N.has(K))j.push(K),N.add(K)}if(j.length>0)return j;return[5,2,1,0,-223]}function G$(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function wY(_,$){let j=G$(_),N=G$($);if(!j.byteLength)return new Uint8Array(N);if(!N.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+N.byteLength);return Z.set(j,0),Z.set(N,j.byteLength),Z}function RY(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),N=0;for(let Z of _||[]){let Y=G$(Z);j.set(Y,N),N+=Y.byteLength}return j}function vY(){return(_)=>{let $=G$(_);try{let j=[],N=new J7((Z)=>{j.push(new Uint8Array(Z))});if(N.push($,!0),N.err)throw Error(N.msg||"zlib decompression error");return RY(j)}catch(j){try{let N=H7($);return N instanceof Uint8Array?N:new Uint8Array(N)}catch(N){let Z=N instanceof Error?N.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function fY(_){return new TextEncoder().encode(String(_||""))}function B$(_){return new TextDecoder().decode(G$(_))}function bY(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function uY(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function I7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function mY(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function gY(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),N=new DataView(j);N.setUint8(0,2),N.setUint8(1,0),N.setUint16(2,$.length,!1);let Z=4;for(let Y of $)N.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function C7(_,$,j,N=0,Z=0){let Y=new ArrayBuffer(10),K=new DataView(Y);return K.setUint8(0,3),K.setUint8(1,_?1:0),K.setUint16(2,N,!1),K.setUint16(4,Z,!1),K.setUint16(6,Math.max(0,$||0),!1),K.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function q$(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function T7(_,$,j,N){if(j===1)return _[$];if(j===2)return N?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return N?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return N?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function hY(_,$,j,N){let Z=N||X$,Y=G$(_),K=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),Q=Math.max(0,$||0)*Math.max(0,j||0)*K;if(Y.byteLength<Q)throw Error(`Incomplete raw rectangle payload: expected ${Q} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let q=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),B=0,W=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=T7(Y,B,K,Z.bigEndian),A=q$(U>>>Z.redShift&Z.redMax,Z.redMax),D=q$(U>>>Z.greenShift&Z.greenMax,Z.greenMax),M=q$(U>>>Z.blueShift&Z.blueMax,Z.blueMax);q[W]=A,q[W+1]=D,q[W+2]=M,q[W+3]=255,B+=K,W+=4}return q}function L4(_,$,j){let N=j||X$,Z=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=T7(_,$,Z,N.bigEndian);return{rgba:[q$(Y>>>N.redShift&N.redMax,N.redMax),q$(Y>>>N.greenShift&N.greenMax,N.greenMax),q$(Y>>>N.blueShift&N.blueMax,N.blueMax),255],bytesPerPixel:Z}}function S4(_,$,j,N,Z,Y,K){if(!K)return;for(let Q=0;Q<Y;Q+=1)for(let q=0;q<Z;q+=1){let B=((N+Q)*$+(j+q))*4;_[B]=K[0],_[B+1]=K[1],_[B+2]=K[2],_[B+3]=K[3]}}function S7(_,$,j,N,Z,Y,K){for(let Q=0;Q<Y;Q+=1){let q=Q*Z*4,B=((N+Q)*$+j)*4;_.set(K.subarray(q,q+Z*4),B)}}function y7(_,$){let j=$,N=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(N+=Z,Z!==255)break}return{consumed:j-$,runLength:N}}function pY(_,$,j,N,Z,Y,K){let Q=Z||X$,q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let B=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+B)return null;let W=_.slice($+4,$+4+B),V;try{V=K(W)}catch{return{consumed:4+B,skipped:!0}}let U=0,A=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);for(let D=0;D<N;D+=64){let M=Math.min(64,N-D);for(let y=0;y<j;y+=64){let J=Math.min(64,j-y);if(V.byteLength<U+1)return null;let k=V[U++],I=k&127,R=(k&128)!==0;if(!R&&I===0){let E=J*M*q;if(V.byteLength<U+E)return null;let u=Y(V.slice(U,U+E),J,M,Q);U+=E,S7(A,j,y,D,J,M,u);continue}if(!R&&I===1){let E=L4(V,U,Q);if(!E)return null;U+=E.bytesPerPixel,S4(A,j,y,D,J,M,E.rgba);continue}if(!R&&I>1&&I<=16){let E=[];for(let g=0;g<I;g+=1){let w=L4(V,U,Q);if(!w)return null;U+=w.bytesPerPixel,E.push(w.rgba)}let u=I<=2?1:I<=4?2:4,s=Math.ceil(J*u/8),i=s*M;if(V.byteLength<U+i)return null;for(let g=0;g<M;g+=1){let w=U+g*s;for(let l=0;l<J;l+=1){let a=l*u,X0=w+(a>>3),n=8-u-(a&7),$0=V[X0]>>n&(1<<u)-1;S4(A,j,y+l,D+g,1,1,E[$0])}}U+=i;continue}if(R&&I===0){let E=0,u=0;while(u<M){let s=L4(V,U,Q);if(!s)return null;U+=s.bytesPerPixel;let i=y7(V,U);if(!i)return null;U+=i.consumed;for(let g=0;g<i.runLength;g+=1)if(S4(A,j,y+E,D+u,1,1,s.rgba),E+=1,E>=J){if(E=0,u+=1,u>=M)break}}continue}if(R&&I>0){let E=[];for(let i=0;i<I;i+=1){let g=L4(V,U,Q);if(!g)return null;U+=g.bytesPerPixel,E.push(g.rgba)}let u=0,s=0;while(s<M){if(V.byteLength<U+1)return null;let i=V[U++],g=i,w=1;if(i&128){g=i&127;let a=y7(V,U);if(!a)return null;U+=a.consumed,w=a.runLength}let l=E[g];if(!l)return null;for(let a=0;a<w;a+=1)if(S4(A,j,y+u,D+s,1,1,l),u+=1,u>=J){if(u=0,s+=1,s>=M)break}}continue}return{consumed:4+B,skipped:!0}}}return{consumed:4+B,rgba:A,decompressed:V}}function cY(_,$,j,N,Z){let Y=Z||X$,K=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+K)return null;let q=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),B=4+K+q*(K+8);if(_.byteLength<$+B)return null;let W=$+4,V=L4(_,W,Y);if(!V)return null;W+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4);S4(U,j,0,0,j,N,V.rgba);for(let A=0;A<q;A+=1){let D=L4(_,W,Y);if(!D)return null;if(W+=D.bytesPerPixel,_.byteLength<W+8)return null;let M=new DataView(_.buffer,_.byteOffset+W,8),y=M.getUint16(0,!1),J=M.getUint16(2,!1),k=M.getUint16(4,!1),I=M.getUint16(6,!1);W+=8,S4(U,j,y,J,k,I,D.rgba)}return{consumed:W-$,rgba:U}}function lY(_,$,j,N,Z,Y){let K=Z||X$,Q=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8)),q=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,N||0)*4),B=$,W=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<N;U+=16){let A=Math.min(16,N-U);for(let D=0;D<j;D+=16){let M=Math.min(16,j-D);if(_.byteLength<B+1)return null;let y=_[B++];if(y&1){let J=M*A*Q;if(_.byteLength<B+J)return null;let k=Y(_.slice(B,B+J),M,A,K);B+=J,S7(q,j,D,U,M,A,k);continue}if(y&2){let J=L4(_,B,K);if(!J)return null;W=J.rgba,B+=J.bytesPerPixel}if(S4(q,j,D,U,M,A,W),y&4){let J=L4(_,B,K);if(!J)return null;V=J.rgba,B+=J.bytesPerPixel}if(y&8){if(_.byteLength<B+1)return null;let J=_[B++];for(let k=0;k<J;k+=1){let I=V;if(y&16){let w=L4(_,B,K);if(!w)return null;I=w.rgba,B+=w.bytesPerPixel}if(_.byteLength<B+2)return null;let R=_[B++],E=_[B++],u=R>>4,s=R&15,i=(E>>4)+1,g=(E&15)+1;S4(q,j,D+u,U+s,i,g,I)}}}}return{consumed:B-$,rgba:q}}var X$={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class S5{protocol=p_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:hY,this.pipeline=_.pipeline||null,this.encodings=xY(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...X$},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:vY()}receive(_){if(_)this.buffer=wY(this.buffer,_);let $=[],j=[],N=!0;while(N){if(N=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=B$(Z),K=bY(Y);if(!K)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=K,this.clientVersionText=uY(K),j.push(fY(this.clientVersionText)),$.push({type:"protocol-version",protocol:p_,server:K.text.trim(),client:this.clientVersionText.trim()}),this.state=K.minor>=7?"security-types":"security-type-33",N=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+q)break;this.consume(1);let B=B$(this.consume(4+q).slice(4));throw Error(B||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:p_,types:Y});let K=null;if(Y.includes(2)&&this.password!==null)K=2;else if(Y.includes(1))K=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(K)),$.push({type:"security-selected",protocol:p_,securityType:K,label:K===2?"VNC Authentication":"None"}),this.state=K===2?"security-challenge":"security-result",N=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+Q)break;let q=B$(this.consume(4+Q).slice(4));throw Error(q||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:p_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",N=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:p_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(P7(this.password,Z)),this.state="security-result",N=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+K){let Q=B$(this.consume(4+K).slice(4));throw Error(Q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:p_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",N=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),K=Z.getUint16(2,!1),Q=I7(Z,4),q=Z.getUint32(20,!1);if(this.buffer.byteLength<24+q)break;let B=this.consume(24),W=new DataView(B.buffer,B.byteOffset,B.byteLength);if(this.framebufferWidth=W.getUint16(0,!1),this.framebufferHeight=W.getUint16(2,!1),this.serverPixelFormat=I7(W,4),this.serverName=B$(this.consume(q)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(mY(this.clientPixelFormat)),j.push(gY(this.encodings)),j.push(C7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:p_,width:Y,height:K,name:this.serverName,pixelFormat:Q}),N=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),Q=4,q=[],B=!1,W=!!this.pipeline;for(let U=0;U<K;U+=1){if(this.buffer.byteLength<Q+12){B=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,12),D=A.getUint16(0,!1),M=A.getUint16(2,!1),y=A.getUint16(4,!1),J=A.getUint16(6,!1),k=A.getInt32(8,!1);if(Q+=12,k===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),R=y*J*I;if(this.buffer.byteLength<Q+R){B=!0;break}let E=this.buffer.slice(Q,Q+R);if(Q+=R,W)this.pipeline.processRawRect(E,D,M,y,J,this.clientPixelFormat),q.push({kind:"pipeline",x:D,y:M,width:y,height:J});else q.push({kind:"rgba",x:D,y:M,width:y,height:J,rgba:this.decodeRawRect(E,y,J,this.clientPixelFormat)});continue}if(k===2){let I=cY(this.buffer,Q,y,J,this.clientPixelFormat);if(!I){B=!0;break}if(W){let R=this.buffer.slice(Q,Q+I.consumed);this.pipeline.processRreRect(R,D,M,y,J,this.clientPixelFormat),q.push({kind:"pipeline",x:D,y:M,width:y,height:J})}else q.push({kind:"rgba",x:D,y:M,width:y,height:J,rgba:I.rgba});Q+=I.consumed;continue}if(k===1){if(this.buffer.byteLength<Q+4){B=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+Q,4),R=I.getUint16(0,!1),E=I.getUint16(2,!1);if(Q+=4,W)this.pipeline.processCopyRect(D,M,y,J,R,E),q.push({kind:"pipeline",x:D,y:M,width:y,height:J});else q.push({kind:"copy",x:D,y:M,width:y,height:J,srcX:R,srcY:E});continue}if(k===16){let I=pY(this.buffer,Q,y,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){B=!0;break}if(Q+=I.consumed,I.skipped)continue;if(W&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,D,M,y,J,this.clientPixelFormat),q.push({kind:"pipeline",x:D,y:M,width:y,height:J});else q.push({kind:"rgba",x:D,y:M,width:y,height:J,rgba:I.rgba});continue}if(k===5){let I=lY(this.buffer,Q,y,J,this.clientPixelFormat,this.decodeRawRect);if(!I){B=!0;break}if(W){let R=this.buffer.slice(Q,Q+I.consumed);this.pipeline.processHextileRect(R,D,M,y,J,this.clientPixelFormat),q.push({kind:"pipeline",x:D,y:M,width:y,height:J})}else q.push({kind:"rgba",x:D,y:M,width:y,height:J,rgba:I.rgba});Q+=I.consumed;continue}if(k===-223){if(this.framebufferWidth=y,this.framebufferHeight=J,W)this.pipeline.initFramebuffer(y,J);q.push({kind:"resize",x:D,y:M,width:y,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(B)break;this.consume(Q);let V={type:"framebuffer-update",protocol:p_,width:this.framebufferWidth,height:this.framebufferHeight,rects:q};if(W)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(C7(!0,this.framebufferWidth,this.framebufferHeight)),N=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:p_}),N=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+K)break;this.consume(8);let Q=B$(this.consume(K));$.push({type:"clipboard",protocol:p_,text:Q}),N=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var e_="piclaw://vnc";function iY(_){let $=String(_||"");if($===e_)return null;if(!$.startsWith(`${e_}/`))return null;let j=$.slice(`${e_}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function nY(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),N=await j.json().catch(()=>({}));if(!j.ok)throw Error(N?.error||`HTTP ${j.status}`);return N}function dY(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/vnc/ws?target=${encodeURIComponent(_)}`}function rY(_,$){let j=String(_||"").trim(),N=Math.floor(Number($||0));if(!j||!Number.isFinite(N)||N<=0||N>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${N}`}class x7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;rawFallbackAttempted=!1;protocolRecovering=!1;constructor(_,$){this.container=_,this.targetId=iY($?.path),this.targetLabel=this.targetId||null,this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_?"block":"none"}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d4(Z.id)}" data-target-label="${d4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let N=()=>{let Z=rY(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=f$(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),N()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>N());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),K=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,K)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:pixelated;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!1;if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=f$(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=f$(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",N=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${N}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let N=j?.reveal===!0;if(this.canvas.style.display=N||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=N||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let N=Q7($,j,this.canvas.width,this.canvas.height);this.displayScale=N,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*N))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*N))}px`,this.updateDisplayMeta()}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Z7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(C5(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=t8(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~t8(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of Y7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(K7(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=e8(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??e8(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((N)=>N.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let N=this.canvas?.getContext("2d",{alpha:!1});if(N){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);N.putImageData(Z,0,0),$=!0}}else for(let N of _.rects||[]){if(N.kind==="resize"){this.ensureCanvasSize(N.width,N.height);continue}if(N.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(N),$=!0;continue}if(N.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(N),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let N=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${N}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${N}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new S5);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,N=$.receive(j);for(let Z of N.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of N.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let N=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${N}`),this.updateDisplayInfo(`Display protocol error: ${N}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(N))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=_==null?null:String(_).trim(),j=await N7(),N={};if(j)N.pipeline=j,N.decodeRawRect=(Y,K,Q,q)=>j.decodeRawRectToRgba(Y,K,Q,q);let Z=f$(this.authPassword);if(Z!==null)N.password=Z;if($)N.encodings=$;this.protocol=new S5(N),this.hasRenderedFrame=!1,this.frameTimeoutId=null,this.socketBoundary=new o8({url:dY(this.targetId),binaryType:"arraybuffer",onOpen:()=>{this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(Y)=>{this.applyMetrics(Y)},onMessage:(Y)=>{this.handleSocketMessage(Y)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{this.setSessionChromeVisible(!0),this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await nY(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var G6={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===e_||$.startsWith(`${e_}/`)?9000:!1},mount(_,$){return new x7(_,$)}};function x4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function oY(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,Y=N?.[2]||"",K=N?.[3]||"",Q=String($||"").split("/").slice(0,-1).join("/"),B=Z.startsWith("/")?Z:`${Q?`${Q}/`:""}${Z}`,W=[];for(let U of B.split("/")){if(!U||U===".")continue;if(U===".."){if(W.length>0)W.pop();continue}W.push(U)}let V=W.join("/");return`${Y5(V)}${Y}${K}`}function h$(_){return _?.preview||null}function sY(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function aY(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function tY(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${x4($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${x4(I_($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${x4(i4($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${x4(aY($))}</span>`),N.push(`<span><strong>extension:</strong> ${x4(sY(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${x4(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function eY(_){let $=h$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=tY(_,$);if($.kind==="image"){let N=$.url||($.path?Y5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${x4(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=V_($.text||"",null,{rewriteImageSrc:(Z)=>oY(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${x4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class X6{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=eY(this.context)}getContent(){let _=h$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=h$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var V6={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=h$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new X6(_,$)}},W6={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return h$(_)||_?.path?1:!1},mount(_,$){return new X6(_,$)}};var _K=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),$K={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},jK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function R7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function w7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=R7(j),Y=jK[Z]||"\uD83D\uDCC4",K=$K[Z]||"Office Document",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${w7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${w7(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let q=Q.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let B=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(B)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(N)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var L6={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=R7(_?.path);if(!$||!_K.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v7(_,$);return new f7(_,$)}};var NK=/\.(csv|tsv)$/i;function b7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b7(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class m7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var U6={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new u7(_,$);return new m7(_,$)}};var ZK=/\.pdf$/i;function YK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${YK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z6={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new g7(_,$);return new h7(_,$)}};var KK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function F6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${F6(Z)}" alt="${F6(N)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${F6(N)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let K=Y.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let Q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O6={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!KK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var QK=/\.(mp4|m4v|mov|webm|ogv)$/i;function BK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H6={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new l7(_,$);return new i7(_,$)}};function qK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function GK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var J6='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function n7(_){let $=String(_||"").trim();return $?$:J6}function XK(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function VK(_){let $="",j=32768;for(let N=0;N<_.length;N+=j)$+=String.fromCharCode(..._.subarray(N,N+j));return btoa($)}function WK(_,$="*"){try{let j=(Y)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},N=_.EditorUi;if(N?.prototype&&!N.prototype.__piclawWorkspaceSavePatched){let Y=N.prototype.saveData;N.prototype.saveData=function(K,Q,q,B,W,V){try{if(K&&q!=null&&j({filename:K,format:Q,data:q,mimeType:B,base64Encoded:Boolean(W),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},N.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(K,Q,q,B,W,V){try{if(Q&&j({filename:Q,data:K,mimeType:q,base64Encoded:Boolean(B),mode:W,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(N?.prototype&&N.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function d7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${VK(j)}`}class r7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",N=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${GK(N)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class o7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=XK(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(WK(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=J6,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await d7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await d7(_,"image/png");else this.xmlData=n7(await _.text());else if(_.status===404)this.xmlData=J6;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?n7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var D6={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!qK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r7(_,$);return new o7(_,$)}};class s7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new s7;var x5="workspaceExplorerScale",LK=["compact","default","comfortable"],UK=new Set(LK),zK={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function a7(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return UK.has(j)?j:$}function E6(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function FK(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function OK(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function A6(_={}){let $=FK(_),j=_.stored?a7(_.stored,$):$;return OK(j,_)}function t7(_){return zK[a7(_)]}function HK(_){if(!_||_.kind!=="text")return!1;let $=Number(_?.size);return!Number.isFinite($)||$<=262144}function M6(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let N=$({path:j,mode:"edit"});if(!N||typeof N!=="object")return!1;return N.id!=="editor"}function e7(_,$,j={}){let N=j?.resolvePane;if(M6(_,N))return!0;return HK($)}var JK=60000,N9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function DK(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return M6($,(j)=>j1.resolve(j))}function Z9(_,$,j,N=0,Z=[]){if(!j&&N9(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Z9(Y,$,j,N+1,Z);return Z}function _9(_,$,j){if(!_)return"";let N=[],Z=(Y)=>{if(!j&&N9(Y))return;if(N.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)Z(K)};return Z(_),N.join("|")}function C6(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((Q)=>[Q?.path,Q])):new Map,Y=!j||j.length!==N.length,K=N.map((Q)=>{let q=C6(Z.get(Q.path),Q);if(q!==Z.get(Q.path))Y=!0;return q});return Y?{...$,children:K}:_}function P6(_,$,j){if(!_)return _;if(_.path===$)return C6(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((Y)=>{let K=P6(Y,$,j);if(K!==Y)N=!0;return K});return N?{..._,children:Z}:_}var Y9=4,k6=14,EK=8,AK=16;function K9(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=K9(N);return _.__bytes=j,j}function Q9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Y9)return N;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let Q of Z){let q=Math.max(0,Number(Q?.__bytes??Q?.size??0));if(q<=0)continue;if(Q.type==="dir")Y.push({kind:"dir",node:Q,size:q});else Y.push({kind:"file",name:Q.name,path:Q.path,size:q})}Y.sort((Q,q)=>q.size-Q.size);let K=Y;if(Y.length>k6){let Q=Y.slice(0,k6-1),q=Y.slice(k6-1),B=q.reduce((W,V)=>W+V.size,0);Q.push({kind:"other",name:`+${q.length} more`,path:`${N.path}/[other]`,size:B}),K=Q}return N.children=K.map((Q)=>{if(Q.kind==="dir")return Q9(Q.node,$+1);return{name:Q.name,path:Q.path,size:Q.size,children:[]}}),N}function $9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function B9(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${Y}%)`}function w5(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function y6(_,$,j,N,Z,Y){let K=Math.PI*2-0.0001,Q=Y-Z>K?Z+K:Y,q=w5(_,$,N,Z),B=w5(_,$,N,Q),W=w5(_,$,j,Q),V=w5(_,$,j,Z),U=Q-Z>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${N} ${N} 0 ${U} 1 ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var q9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function G9(_,$,j){let N=[],Z=[],Y=Math.max(0,Number($)||0),K=(Q,q,B,W)=>{let V=Array.isArray(Q?.children)?Q.children:[];if(!V.length)return;let U=Math.max(0,Number(Q.size)||0);if(U<=0)return;let A=B-q,D=q;V.forEach((M,y)=>{let J=Math.max(0,Number(M.size)||0);if(J<=0)return;let k=J/U,I=D,R=y===V.length-1?B:D+A*k;if(D=R,R-I<0.003)return;let E=q9[W];if(E){let u=B9(I,W,j);if(N.push({key:M.path,path:M.path,label:M.name,size:J,color:u,depth:W,startAngle:I,endAngle:R,innerRadius:E[0],outerRadius:E[1],d:y6(120,120,E[0],E[1],I,R)}),W===1)Z.push({key:M.path,name:M.name,size:J,pct:Y>0?J/Y*100:0,color:u})}if(W<Y9)K(M,I,R,W+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function I6(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=I6(N,$);if(Z)return Z}return null}function X9(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=q9[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,Q=B9(Y,1,N),B=`${$||"."}/[files]`;return{segments:[{key:B,path:B,label:_,size:j,color:Q,depth:1,startAngle:Y,endAngle:K,innerRadius:Z[0],outerRadius:Z[1],d:y6(120,120,Z[0],Z[1],Y,K)}],legend:[{key:B,name:_,size:j,pct:100,color:Q}]}}function j9(_,$=!1,j=!1){if(!_)return null;let N=K9(_),Z=Q9(_,0),Y=Z.size||N,{segments:K,legend:Q}=G9(Z,Y,j);if(!K.length&&Y>0){let q=X9("[files]",Z.path,Y,j);K=q.segments,Q=q.legend}return{root:Z,totalSize:Y,segments:K,legend:Q,truncated:$,isDarkTheme:j}}function MK({payload:_}){if(!_)return null;let[$,j]=c(null),[N,Z]=c(_?.root?.path||"."),[Y,K]=c(()=>[_?.root?.path||"."]),[Q,q]=c(!1);p(()=>{let w=_?.root?.path||".";Z(w),K([w]),j(null)},[_?.root?.path,_?.totalSize]),p(()=>{if(!N)return;q(!0);let w=setTimeout(()=>q(!1),180);return()=>clearTimeout(w)},[N]);let B=y0(()=>{return I6(_.root,N)||_.root},[_?.root,N]),W=B?.size||_.totalSize||0,{segments:V,legend:U}=y0(()=>{let w=G9(B,W,_.isDarkTheme);if(w.segments.length>0)return w;if(W<=0)return w;let l=B?.children?.length?"Total":"[files]";return X9(l,B?.path||_?.root?.path||".",W,_.isDarkTheme)},[B,W,_.isDarkTheme,_?.root?.path]),[A,D]=c(V),M=T(new Map),y=T(0);p(()=>{let w=M.current,l=new Map(V.map(($0)=>[$0.key,$0])),a=performance.now(),X0=220,n=($0)=>{let j0=Math.min(1,($0-a)/220),Z0=j0*(2-j0),K0=V.map((q0)=>{let U0=w.get(q0.key)||{startAngle:q0.startAngle,endAngle:q0.startAngle,innerRadius:q0.innerRadius,outerRadius:q0.innerRadius},O0=(l0,T0)=>l0+(T0-l0)*Z0,p0=O0(U0.startAngle,q0.startAngle),k0=O0(U0.endAngle,q0.endAngle),J0=O0(U0.innerRadius,q0.innerRadius),c0=O0(U0.outerRadius,q0.outerRadius);return{...q0,d:y6(120,120,J0,c0,p0,k0)}});if(D(K0),j0<1)y.current=requestAnimationFrame(n)};if(y.current)cancelAnimationFrame(y.current);return y.current=requestAnimationFrame(n),M.current=l,()=>{if(y.current)cancelAnimationFrame(y.current)}},[V]);let J=A.length?A:V,k=W>0?I_(W):"0 B",I=B?.name||"",E=(I&&I!=="."?I:"Total")||"Total",u=k,s=Y.length>1,i=(w)=>{if(!w?.path)return;let l=I6(_.root,w.path);if(!l||!Array.isArray(l.children)||l.children.length===0)return;K((a)=>[...a,l.path]),Z(l.path),j(null)},g=()=>{if(!s)return;K((w)=>{let l=w.slice(0,-1);return Z(l[l.length-1]||_?.root?.path||"."),l}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${B?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${W}>
                ${J.map((w)=>z`
                    <path
                        key=${w.key}
                        d=${w.d}
                        fill=${w.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===w.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(w)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(w)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>i(w)}
                    >
                        <title>${w.label} — ${I_(w.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${s?" is-drill":""}`}
                    onClick=${g}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${E}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${u}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((w)=>z`
                        <div key=${w.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${w.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${w.name}>${w.name}</span>
                            <span class="workspace-folder-starburst-size">${I_(w.size)}</span>
                            <span class="workspace-folder-starburst-pct">${w.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function kK({mediaId:_}){let[$,j]=c(null);if(p(()=>{if(!_)return;$$(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?I_($.metadata.size):"";return z`
        <a href=${P_(_)} download=${N} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&z`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function V9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:K,terminalVisible:Q=!1}){let[q,B]=c(null),[W,V]=c(new Set(["."])),[U,A]=c(null),[D,M]=c(null),[y,J]=c(""),[k,I]=c(null),[R,E]=c(null),[u,s]=c(!0),[i,g]=c(!1),[w,l]=c(null),[a,X0]=c(()=>j$("workspaceShowHidden",!1)),[n,$0]=c(!1),[j0,Z0]=c(null),[K0,q0]=c(null),[L0,U0]=c(null),[O0,p0]=c(!1),[k0,J0]=c(null),[c0,l0]=c(()=>$9()),[T0,G0]=c(()=>A6({stored:X_(x5),...E6()})),[P0,D0]=c(!1),Q0=T(W),I0=T(""),d0=T(null),m0=T(0),L1=T(new Set),P1=T(null),v0=T(new Map),i0=T(_),N1=T(N),Q1=T(null),r0=T(null),x1=T(null),Z1=T(null),u1=T(null),B1=T(null),l1=T("."),g0=T(null),t1=T({path:null,dragging:!1,startX:0,startY:0}),G1=T({path:null,dragging:!1,startX:0,startY:0}),U1=T({path:null,timer:0}),H1=T(!1),C0=T(0),J1=T(new Map),S0=T(null),w0=T(null),a0=T(null),n1=T(null),m=T(null),B0=T(null),E0=T(a),F0=T($),o0=T(j??$),e1=T(0),i1=T(L0),c_=T(n),y_=T(j0),__=T(null),t0=T({x:0,y:0}),w1=T(0),d1=T(null),R1=T(U),T_=T(D),S_=T(null),U4=T(k);i0.current=_,N1.current=N,p(()=>{Q0.current=W},[W]),p(()=>{E0.current=a},[a]),p(()=>{F0.current=$},[$]),p(()=>{o0.current=j??$},[j,$]),p(()=>{i1.current=L0},[L0]),p(()=>{if(typeof window>"u")return;let F=()=>{G0(A6({stored:X_(x5),...E6()}))};F();let H=()=>F(),f=()=>F(),v=(N0)=>{if(!N0||N0.key===null||N0.key===x5)F()};window.addEventListener("resize",H),window.addEventListener("focus",f),window.addEventListener("storage",v);let r=window.matchMedia?.("(pointer: coarse)"),Y0=window.matchMedia?.("(hover: none)"),V0=(N0,A0)=>{if(!N0)return;if(N0.addEventListener)N0.addEventListener("change",A0);else if(N0.addListener)N0.addListener(A0)},W0=(N0,A0)=>{if(!N0)return;if(N0.removeEventListener)N0.removeEventListener("change",A0);else if(N0.removeListener)N0.removeListener(A0)};return V0(r,H),V0(Y0,H),()=>{window.removeEventListener("resize",H),window.removeEventListener("focus",f),window.removeEventListener("storage",v),W0(r,H),W0(Y0,H)}},[]),p(()=>{let F=(H)=>{let f=H?.detail?.path;if(!f)return;let v=f.split("/"),r=[];for(let Y0=1;Y0<v.length;Y0++)r.push(v.slice(0,Y0).join("/"));if(r.length)V((Y0)=>{let V0=new Set(Y0);V0.add(".");for(let W0 of r)V0.add(W0);return V0});A(f),requestAnimationFrame(()=>{let Y0=document.querySelector(`[data-path="${CSS.escape(f)}"]`);if(Y0)Y0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",F),()=>window.removeEventListener("workspace-reveal-path",F)},[]),p(()=>{c_.current=n},[n]),p(()=>{y_.current=j0},[j0]),p(()=>{R1.current=U},[U]),p(()=>{T_.current=D},[D]),p(()=>{U4.current=k},[k]),p(()=>{if(typeof window>"u"||typeof document>"u")return;let F=()=>l0($9());F();let H=window.matchMedia?.("(prefers-color-scheme: dark)"),f=()=>F();if(H?.addEventListener)H.addEventListener("change",f);else if(H?.addListener)H.addListener(f);let v=typeof MutationObserver<"u"?new MutationObserver(()=>F()):null;if(v?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)v?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(H?.removeEventListener)H.removeEventListener("change",f);else if(H?.removeListener)H.removeListener(f);v?.disconnect()}},[]),p(()=>{if(!D)return;let F=u1.current;if(!F)return;let H=requestAnimationFrame(()=>{try{F.focus(),F.select()}catch{}});return()=>cancelAnimationFrame(H)},[D]),p(()=>{if(!P0)return;let F=(f)=>{let v=f?.target;if(!(v instanceof Element))return;if(m.current?.contains(v))return;if(B0.current?.contains(v))return;D0(!1)},H=(f)=>{if(f?.key==="Escape")D0(!1),B0.current?.focus?.()};return document.addEventListener("mousedown",F),document.addEventListener("touchstart",F,{passive:!0}),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("touchstart",F),document.removeEventListener("keydown",H)}},[P0]);let z4=async(F,H={})=>{let f=Boolean(H?.autoOpen),v=String(F||"").trim();g(!0),I(null),E(null);try{let r=await U8(v,20000);if(f&&v&&e7(v,r,{resolvePane:(Y0)=>j1.resolve(Y0)}))return N1.current?.(v,r),r;return I(r),r}catch(r){let Y0={error:r.message||"Failed to load preview"};return I(Y0),Y0}finally{g(!1)}};Q1.current=z4;let $_=async()=>{if(!F0.current)return;try{let F=await M$("",1,E0.current),H=_9(F.root,Q0.current,E0.current);if(H===I0.current){s(!1);return}if(I0.current=H,d0.current=F.root,!m0.current)m0.current=requestAnimationFrame(()=>{m0.current=0,B((f)=>C6(f,d0.current)),s(!1)})}catch(F){l(F.message||"Failed to load workspace"),s(!1)}},l_=async(F)=>{if(!F)return;if(L1.current.has(F))return;L1.current.add(F);try{let H=await M$(F,1,E0.current);B((f)=>P6(f,F,H.root))}catch(H){l(H.message||"Failed to load workspace")}finally{L1.current.delete(F)}};r0.current=l_;let Y1=x(()=>{let F=U;if(!F)return".";let H=v0.current?.get(F);if(H&&H.type==="dir")return H.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[U]),_4=x((F)=>{let H=F?.closest?.(".workspace-row");if(!H)return null;let f=H.dataset.path,v=H.dataset.type;if(!f)return null;if(v==="dir")return f;if(f.includes("/")){let r=f.split("/");return r.pop(),r.join("/")||"."}return"."},[]),L_=x((F)=>{return _4(F?.target||null)},[_4]),h0=x((F)=>{i1.current=F,U0(F)},[]),z1=x(()=>{let F=U1.current;if(F?.timer)clearTimeout(F.timer);U1.current={path:null,timer:0}},[]),f0=x((F)=>{if(!F||F==="."){z1();return}let H=v0.current?.get(F);if(!H||H.type!=="dir"){z1();return}if(Q0.current?.has(F)){z1();return}if(U1.current?.path===F)return;z1();let f=setTimeout(()=>{U1.current={path:null,timer:0},r0.current?.(F),V((v)=>{let r=new Set(v);return r.add(F),r})},600);U1.current={path:F,timer:f}},[z1]),v1=x((F,H)=>{if(t0.current={x:F,y:H},w1.current)return;w1.current=requestAnimationFrame(()=>{w1.current=0;let f=__.current;if(!f)return;let v=t0.current;f.style.transform=`translate(${v.x+12}px, ${v.y+12}px)`})},[]),D1=x((F)=>{if(!F)return;let f=(v0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f)return;q0({path:F,label:f})},[]),$4=x(()=>{if(q0(null),w1.current)cancelAnimationFrame(w1.current),w1.current=0;if(__.current)__.current.style.transform="translate(-9999px, -9999px)"},[]),F4=x((F)=>{if(!F)return".";let H=v0.current?.get(F);if(H&&H.type==="dir")return H.path;if(F==="."||!F.includes("/"))return".";let f=F.split("/");return f.pop(),f.join("/")||"."},[]),U_=x(()=>{M(null),J("")},[]),w4=x((F)=>{if(!F)return;let f=(v0.current?.get(F)?.name||F.split("/").pop()||F).trim();if(!f||F===".")return;M(F),J(f)},[]),c$=x(async()=>{let F=T_.current;if(!F)return;let H=(y||"").trim();if(!H){U_();return}let f=v0.current?.get(F),v=(f?.name||F.split("/").pop()||F).trim();if(H===v){U_();return}try{let Y0=(await O8(F,H))?.path||F,V0=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(U_(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:F,newPath:Y0,type:f?.type||"file"}})),f?.type==="dir")V((W0)=>{let N0=new Set;for(let A0 of W0)if(A0===F)N0.add(Y0);else if(A0.startsWith(`${F}/`))N0.add(`${Y0}${A0.slice(F.length)}`);else N0.add(A0);return N0});if(A(Y0),f?.type==="dir")I(null),g(!1),E(null);else Q1.current?.(Y0);r0.current?.(V0)}catch(r){l(r?.message||"Failed to rename file")}},[U_,y]),r4=x(async(F)=>{let v=F||".";for(let r=0;r<50;r+=1){let V0=`untitled${r===0?"":`-${r}`}.md`;try{let N0=(await F8(v,V0,""))?.path||(v==="."?V0:`${v}/${V0}`);if(v&&v!==".")V((A0)=>new Set([...A0,v]));A(N0),l(null),r0.current?.(v),Q1.current?.(N0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;l(W0?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),z_=x((F)=>{if(F?.stopPropagation?.(),O0)return;let H=F4(R1.current);r4(H)},[O0,F4,r4]);p(()=>{if(typeof window>"u")return;let F=(H)=>{let f=H?.detail?.updates||[];if(!Array.isArray(f)||f.length===0)return;B((W0)=>{let N0=W0;for(let A0 of f){if(!A0?.root)continue;if(!N0||A0.path==="."||!A0.path)N0=A0.root;else N0=P6(N0,A0.path,A0.root)}if(N0)I0.current=_9(N0,Q0.current,E0.current);return s(!1),N0});let v=R1.current;if(Boolean(v)&&f.some((W0)=>{let N0=W0?.path||"";if(!N0||N0===".")return!0;return v===N0||v.startsWith(`${N0}/`)||N0.startsWith(`${v}/`)}))J1.current.clear();if(!v||!U4.current)return;let Y0=v0.current?.get(v);if(Y0&&Y0.type==="dir")return;if(f.some((W0)=>{let N0=W0?.path||"";if(!N0||N0===".")return!0;return v===N0||v.startsWith(`${N0}/`)}))Q1.current?.(v)};return window.addEventListener("workspace-update",F),()=>window.removeEventListener("workspace-update",F)},[]),P1.current=$_;let V$=T(()=>{if(typeof window>"u")return;let F=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),H=o0.current??F0.current,f=document.visibilityState!=="hidden"&&(H||F.matches&&F0.current);k$(f,E0.current).catch(()=>{})}).current,j_=T(0),N_=T(()=>{if(j_.current)clearTimeout(j_.current);j_.current=setTimeout(()=>{j_.current=0,V$()},250)}).current;p(()=>{if(F0.current)P1.current?.();N_()},[$,j]),p(()=>{P1.current(),V$();let F=setInterval(()=>P1.current(),JK),H=N$("previewHeight",null),f=Number.isFinite(H)?Math.min(Math.max(H,80),600):280;if(C0.current=f,x1.current)x1.current.style.setProperty("--preview-height",`${f}px`);let v=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>N_();if(v.addEventListener)v.addEventListener("change",r);else if(v.addListener)v.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(F),m0.current)cancelAnimationFrame(m0.current),m0.current=0;if(v.removeEventListener)v.removeEventListener("change",r);else if(v.removeListener)v.removeListener(r);if(document.removeEventListener("visibilitychange",r),j_.current)clearTimeout(j_.current),j_.current=0;if(g0.current)clearTimeout(g0.current),g0.current=null;k$(!1,E0.current).catch(()=>{})}},[]);let i_=y0(()=>Z9(q,W,a),[q,W,a]),F_=y0(()=>new Map(i_.map((F)=>[F.node.path,F.node])),[i_]),m1=y0(()=>t7(T0),[T0]);v0.current=F_;let b0=(U?v0.current.get(U):null)?.type==="dir";p(()=>{if(!U||!b0){J0(null),S0.current=null,w0.current=null;return}let F=U,H=`${a?"hidden":"visible"}:${U}`,f=J1.current,v=f.get(H);if(v?.root){f.delete(H),f.set(H,v);let V0=j9(v.root,Boolean(v.truncated),c0);if(V0)S0.current=V0,w0.current=U,J0({loading:!1,error:null,payload:V0});return}let r=S0.current,Y0=w0.current;J0({loading:!0,error:null,payload:Y0===U?r:null}),M$(U,EK,a).then((V0)=>{if(R1.current!==F)return;let W0={root:V0?.root,truncated:Boolean(V0?.truncated)};f.delete(H),f.set(H,W0);while(f.size>AK){let A0=f.keys().next().value;if(!A0)break;f.delete(A0)}let N0=j9(W0.root,W0.truncated,c0);S0.current=N0,w0.current=U,J0({loading:!1,error:null,payload:N0})}).catch((V0)=>{if(R1.current!==F)return;J0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:Y0===U?r:null})})},[U,b0,a,c0]);let Z_=Boolean(k&&k.kind==="text"&&!b0&&(!k.size||k.size<=262144)),O4=Z_?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",H4=Boolean(U&&U!=="."),x_=Boolean(U&&!b0),O_=Boolean(U&&!b0),B_=U&&b0?K5(U,a):null,E1=x(()=>D0(!1),[]),q1=x(async(F)=>{E1();try{await F?.()}catch{}},[E1]);p(()=>{let F=a0.current;if(n1.current)n1.current.dispose(),n1.current=null;if(!F)return;if(F.innerHTML="",!U||b0||!k||k.error)return;let H={path:U,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},f=j1.resolve(H)||j1.get("workspace-preview-default");if(!f)return;let v=f.mount(F,H);return n1.current=v,()=>{if(n1.current===v)v.dispose(),n1.current=null;F.innerHTML=""}},[U,b0,k]);let r1=(F)=>{let H=F?.target;if(H instanceof Element)return H;return H?.parentElement||null},y1=(F)=>{return Boolean(F?.closest?.(".workspace-node-icon, .workspace-label-text"))},j4=T((F)=>{let H=r1(F),f=H?.closest?.("[data-path]");if(!f)return;let v=f.dataset.path;if(!v||v===".")return;let r=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),Y0=Boolean(H?.closest?.(".workspace-caret"));if(r||Y0)return;if(T_.current===v)return;w4(v)}).current,N4=T((F)=>{if(H1.current){H1.current=!1;return}let H=r1(F),f=H?.closest?.("[data-path]");if(Z1.current?.focus?.(),!f)return;let v=f.dataset.path,r=f.dataset.type,Y0=Boolean(H?.closest?.(".workspace-caret")),V0=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),W0=R1.current===v,N0=T_.current;if(N0){if(N0===v)return;U_()}let A0=r==="file"&&S_.current===v&&!Y0&&!V0;if(r==="dir"){if(S_.current=null,A(v),I(null),E(null),g(!1),!Q0.current.has(v))r0.current?.(v);if(W0&&!Y0)return;V((A1)=>{let L=new Set(A1);if(L.has(v))L.delete(v);else L.add(v);return L})}else{S_.current=null,A(v);let X1=v0.current.get(v);if(X1)i0.current?.(X1.path,X1);if(!V0&&!Y0&&DK(v))N1.current?.(v,U4.current);else{let L=!V0&&!Y0;Q1.current?.(v,{autoOpen:L})}}}).current,J4=T(()=>{I0.current="",P1.current(),Array.from(Q0.current||[]).filter((H)=>H&&H!==".").forEach((H)=>r0.current?.(H))}).current,o1=T(()=>{S_.current=null,A(null),I(null),E(null),g(!1)}).current,Z4=T(()=>{X0((F)=>{let H=!F;if(typeof window<"u")K1("workspaceShowHidden",String(H));return E0.current=H,k$(!0,H).catch(()=>{}),I0.current="",P1.current?.(),Array.from(Q0.current||[]).filter((v)=>v&&v!==".").forEach((v)=>r0.current?.(v)),H})}).current,R4=T((F)=>{if(r1(F)?.closest?.("[data-path]"))return;o1()}).current,w_=x(async(F)=>{if(!F)return;let H=F.split("/").pop()||F;if(!window.confirm(`Delete "${H}"? This cannot be undone.`))return;try{await J8(F);let v=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(R1.current===F)o1();r0.current?.(v),l(null)}catch(v){I((r)=>({...r||{},error:v.message||"Failed to delete file"}))}},[o1]),H_=x((F)=>{let H=Z1.current;if(!H||!F||typeof CSS>"u"||typeof CSS.escape!=="function")return;H.querySelector(`[data-path="${CSS.escape(F)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),q_=x((F)=>{let H=i_;if(!H||H.length===0)return;let f=U?H.findIndex((v)=>v.node.path===U):-1;if(F.key==="ArrowDown"){F.preventDefault();let v=Math.min(f+1,H.length-1),r=H[v];if(!r)return;if(A(r.node.path),r.node.type!=="dir")i0.current?.(r.node.path,r.node),Q1.current?.(r.node.path);else I(null),g(!1),E(null);H_(r.node.path);return}if(F.key==="ArrowUp"){F.preventDefault();let v=f<=0?0:f-1,r=H[v];if(!r)return;if(A(r.node.path),r.node.type!=="dir")i0.current?.(r.node.path,r.node),Q1.current?.(r.node.path);else I(null),g(!1),E(null);H_(r.node.path);return}if(F.key==="ArrowRight"&&f>=0){let v=H[f];if(v?.node?.type==="dir"&&!W.has(v.node.path))F.preventDefault(),r0.current?.(v.node.path),V((r)=>new Set([...r,v.node.path]));return}if(F.key==="ArrowLeft"&&f>=0){let v=H[f];if(v?.node?.type==="dir"&&W.has(v.node.path))F.preventDefault(),V((r)=>{let Y0=new Set(r);return Y0.delete(v.node.path),Y0});return}if(F.key==="Enter"&&f>=0){F.preventDefault();let v=H[f];if(!v)return;let r=v.node.path;if(v.node.type==="dir"){if(!Q0.current.has(r))r0.current?.(r);V((V0)=>{let W0=new Set(V0);if(W0.has(r))W0.delete(r);else W0.add(r);return W0}),I(null),E(null),g(!1)}else i0.current?.(r,v.node),Q1.current?.(r);return}if((F.key==="Delete"||F.key==="Backspace")&&f>=0){let v=H[f];if(!v||v.node.type==="dir")return;F.preventDefault(),w_(v.node.path);return}if(F.key==="Escape")F.preventDefault(),o1()},[o1,w_,W,i_,H_,U]),R_=x((F)=>{let H=r1(F),f=H?.closest?.(".workspace-row");if(!f)return;let v=f.dataset.type,r=f.dataset.path;if(!r||r===".")return;if(T_.current===r)return;let Y0=F?.touches?.[0];if(!Y0)return;if(t1.current={path:y1(H)?r:null,dragging:!1,startX:Y0.clientX,startY:Y0.clientY},v!=="file")return;if(g0.current)clearTimeout(g0.current);g0.current=setTimeout(()=>{if(g0.current=null,t1.current?.dragging)return;w_(r)},600)},[w_]),g1=x(()=>{if(g0.current)clearTimeout(g0.current),g0.current=null;let F=t1.current;if(F?.dragging&&F.path){let H=i1.current||Y1(),f=d1.current;if(typeof f==="function")f(F.path,H)}t1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,$0(!1),Z0(null),h0(null),z1(),$4()},[Y1,$4,h0,z1]),v4=x((F)=>{let H=t1.current,f=F?.touches?.[0];if(!f||!H?.path){if(g0.current)clearTimeout(g0.current),g0.current=null;return}let v=Math.abs(f.clientX-H.startX),r=Math.abs(f.clientY-H.startY),Y0=v>8||r>8;if(Y0&&g0.current)clearTimeout(g0.current),g0.current=null;if(!H.dragging&&Y0)H.dragging=!0,$0(!0),Z0("move"),D1(H.path);if(H.dragging){F.preventDefault(),v1(f.clientX,f.clientY);let V0=document.elementFromPoint(f.clientX,f.clientY),W0=_4(V0)||Y1();if(i1.current!==W0)h0(W0);f0(W0)}},[_4,Y1,D1,v1,h0,f0]),f4=T((F)=>{F.preventDefault();let H=x1.current;if(!H)return;let f=F.clientY,v=C0.current||280,r=F.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Y0=f,V0=(N0)=>{Y0=N0.clientY;let A0=H.clientHeight-80,X1=Math.min(Math.max(v-(N0.clientY-f),80),A0);H.style.setProperty("--preview-height",`${X1}px`),C0.current=X1},W0=()=>{let N0=H.clientHeight-80,A0=Math.min(Math.max(v-(Y0-f),80),N0);C0.current=A0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("previewHeight",String(Math.round(A0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",W0)}).current,D4=T((F)=>{F.preventDefault();let H=x1.current;if(!H)return;let f=F.touches[0];if(!f)return;let v=f.clientY,r=C0.current||280,Y0=F.currentTarget;Y0.classList.add("dragging"),document.body.style.userSelect="none";let V0=(N0)=>{let A0=N0.touches[0];if(!A0)return;N0.preventDefault();let X1=H.clientHeight-80,A1=Math.min(Math.max(r-(A0.clientY-v),80),X1);H.style.setProperty("--preview-height",`${A1}px`),C0.current=A1},W0=()=>{Y0.classList.remove("dragging"),document.body.style.userSelect="",K1("previewHeight",String(Math.round(C0.current||r))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,n_=async()=>{if(!U)return;try{let F=await z8(U);if(F.media_id)E(F.media_id)}catch(F){I((H)=>({...H||{},error:F.message||"Failed to attach"}))}},v_=async()=>{if(!U||b0)return;await w_(U)},Y4=(F)=>{return Array.from(F?.dataTransfer?.types||[]).includes("Files")},f1=x((F)=>{if(!Y4(F))return;if(F.preventDefault(),e1.current+=1,!c_.current)$0(!0);Z0("upload");let H=L_(F)||Y1();h0(H),f0(H)},[Y1,L_,h0,f0]),f_=x((F)=>{if(!Y4(F))return;if(F.preventDefault(),F.dataTransfer)F.dataTransfer.dropEffect="copy";if(!c_.current)$0(!0);if(y_.current!=="upload")Z0("upload");let H=L_(F)||Y1();if(i1.current!==H)h0(H);f0(H)},[Y1,L_,h0,f0]),b_=x((F)=>{if(!Y4(F))return;if(F.preventDefault(),e1.current=Math.max(0,e1.current-1),e1.current===0)$0(!1),Z0(null),h0(null),z1()},[h0,z1]),d_=x(async(F,H=".")=>{let f=Array.from(F||[]);if(f.length===0)return;let v=H&&H!==""?H:".",r=v!=="."?v:"workspace root";p0(!0);try{let Y0=null;for(let V0 of f)try{Y0=await Z5(V0,v)}catch(W0){let N0=W0?.status,A0=W0?.code;if(N0===409||A0==="file_exists"){let X1=V0?.name||"file";if(!window.confirm(`"${X1}" already exists in ${r}. Overwrite?`))continue;Y0=await Z5(V0,v,{overwrite:!0})}else throw W0}if(Y0?.path)S_.current=Y0.path,A(Y0.path),Q1.current?.(Y0.path);r0.current?.(v)}catch(Y0){l(Y0.message||"Failed to upload file")}finally{p0(!1)}},[]),E4=x(async(F,H)=>{if(!F)return;let f=v0.current?.get(F);if(!f)return;let v=H&&H!==""?H:".",r=F.includes("/")?F.split("/").slice(0,-1).join("/")||".":".";if(v===r)return;try{let V0=(await H8(F,v))?.path||F;if(f.type==="dir")V((W0)=>{let N0=new Set;for(let A0 of W0)if(A0===F)N0.add(V0);else if(A0.startsWith(`${F}/`))N0.add(`${V0}${A0.slice(F.length)}`);else N0.add(A0);return N0});if(A(V0),f.type==="dir")I(null),g(!1),E(null);else Q1.current?.(V0);r0.current?.(r),r0.current?.(v)}catch(Y0){l(Y0?.message||"Failed to move entry")}},[]);d1.current=E4;let F1=x(async(F)=>{if(!Y4(F))return;F.preventDefault(),e1.current=0,$0(!1),Z0(null),U0(null),z1();let H=Array.from(F?.dataTransfer?.files||[]);if(H.length===0)return;let f=i1.current||L_(F)||Y1();await d_(H,f)},[Y1,L_,d_]),A4=x((F)=>{if(F?.stopPropagation?.(),O0)return;let H=F?.currentTarget?.dataset?.uploadTarget||".";l1.current=H,B1.current?.click()},[O0]),s1=x(()=>{if(O0)return;let F=R1.current,H=F?v0.current?.get(F):null;l1.current=H?.type==="dir"?H.path:".",B1.current?.click()},[O0]),Y_=x(()=>{q1(()=>z_(null))},[q1,z_]),J_=x(()=>{q1(()=>s1())},[q1,s1]),b4=x(()=>{q1(()=>J4())},[q1,J4]),M4=x(()=>{q1(()=>Z4())},[q1,Z4]),K4=x(()=>{if(!U||!Z_)return;q1(()=>N1.current?.(U,k))},[q1,U,Z_,k]),u4=x(()=>{if(!U||U===".")return;q1(()=>w4(U))},[q1,U,w4]),r_=x(()=>{if(!U||b0)return;q1(()=>v_())},[q1,U,b0,v_]),m4=x(()=>{if(!U||b0)return;q1(()=>n_())},[q1,U,b0,n_]),o4=x(()=>{if(!B_)return;if(E1(),typeof window<"u")window.open(B_,"_blank","noopener")},[E1,B_]),k4=x(()=>{E1(),Z?.()},[E1,Z]),P4=x(()=>{E1(),Y?.()},[E1,Y]),u_=x(()=>{E1(),K?.()},[E1,K]),s4=x((F)=>{if(!F||F.button!==0)return;let H=F.currentTarget;if(!H||!H.dataset)return;let f=H.dataset.path;if(!f||f===".")return;if(T_.current===f)return;let v=r1(F);if(v?.closest?.("button, a, input, .workspace-caret"))return;if(!y1(v))return;F.preventDefault(),G1.current={path:f,dragging:!1,startX:F.clientX,startY:F.clientY};let r=(V0)=>{let W0=G1.current;if(!W0?.path)return;let N0=Math.abs(V0.clientX-W0.startX),A0=Math.abs(V0.clientY-W0.startY),X1=N0>4||A0>4;if(!W0.dragging&&X1)W0.dragging=!0,H1.current=!0,$0(!0),Z0("move"),D1(W0.path),v1(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){V0.preventDefault(),v1(V0.clientX,V0.clientY);let A1=document.elementFromPoint(V0.clientX,V0.clientY),L=_4(A1)||Y1();if(i1.current!==L)h0(L);f0(L)}},Y0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Y0);let V0=G1.current;if(V0?.dragging&&V0.path){let W0=i1.current||Y1(),N0=d1.current;if(typeof N0==="function")N0(V0.path,W0)}G1.current={path:null,dragging:!1,startX:0,startY:0},e1.current=0,$0(!1),Z0(null),h0(null),z1(),$4(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H1.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Y0)},[_4,Y1,D1,v1,$4,h0,f0,z1]),Q4=x(async(F)=>{let H=Array.from(F?.target?.files||[]);if(H.length===0)return;let f=l1.current||".";if(await d_(H,f),l1.current=".",F?.target)F.target.value=""},[d_]);return z`
        <aside
            class=${`workspace-sidebar${n?" workspace-drop-active":""}`}
            data-workspace-scale=${T0}
            ref=${x1}
            onDragEnter=${f1}
            onDragOver=${f_}
            onDragLeave=${b_}
            onDrop=${F1}
        >
            <input type="file" multiple style="display:none" ref=${B1} onChange=${Q4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${B0}
                            class=${`workspace-menu-button${P0?" active":""}`}
                            onClick=${(F)=>{F.stopPropagation(),D0((H)=>!H)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${P0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${P0&&z`
                            <div class="workspace-menu-dropdown" ref=${m} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y_} disabled=${O0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${J_} disabled=${O0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${b4}>Refresh tree</button>
                                <button class=${`workspace-menu-item${a?" active":""}`} role="menuitem" onClick=${M4}>
                                    ${a?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!b0&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K4} disabled=${!Z_}>Open in editor</button>
                                `}
                                ${H4&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u4}>Rename selected</button>
                                `}
                                ${O_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Download selected file</button>
                                `}
                                ${B_&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o4}>Download selected folder (zip)</button>
                                `}
                                ${x_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${r_}>Delete selected file</button>
                                `}

                                ${(Z||Y||K)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Z&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k4}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P4}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${K&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u_}>
                                        ${Q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${z_} title="New file" disabled=${O0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${J4} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${R4}>
                ${O0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${u&&z`<div class="workspace-loading">Loading…</div>`}
                ${w&&z`<div class="workspace-error">${w}</div>`}
                ${q&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${Z1}
                        tabIndex="0"
                        onClick=${N4}
                        onDblClick=${j4}
                        onKeyDown=${q_}
                        onTouchStart=${R_}
                        onTouchEnd=${g1}
                        onTouchMove=${v4}
                        onTouchCancel=${g1}
                    >
                        ${i_.map(({node:F,depth:H})=>{let f=F.type==="dir",v=F.path===U,r=F.path===D,Y0=f&&W.has(F.path),V0=L0&&F.path===L0,W0=Array.isArray(F.children)&&F.children.length>0?F.children.length:Number(F.child_count)||0;return z`
                                <div
                                    key=${F.path}
                                    class=${`workspace-row${v?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+H*m1.indentPx}px`}}
                                    data-path=${F.path}
                                    data-type=${F.type}
                                    onMouseDown=${s4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${f?Y0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${f?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${f?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${u1}
                                                value=${y}
                                                onInput=${(N0)=>J(N0?.target?.value||"")}
                                                onKeyDown=${(N0)=>{if(N0.key==="Enter")N0.preventDefault(),c$();else if(N0.key==="Escape")N0.preventDefault(),U_()}}
                                                onBlur=${U_}
                                                onClick=${(N0)=>N0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${F.name}</span></span>`}
                                    ${f&&!Y0&&W0>0&&z`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${f&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${F.path}
                                            title="Upload files to this folder"
                                            onClick=${A4}
                                            disabled=${O0}
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
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${f4} onTouchStart=${D4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${z_} title="New file" disabled=${O0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!b0&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Z_&&N1.current?.(U,k)}
                                    title=${O4}
                                    disabled=${!Z_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${v_}
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
                            ${b0?z`
                                    <button class="workspace-download" onClick=${s1}
                                        title="Upload files to this folder" disabled=${O0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${K5(U,a)}
                                        title="Download folder as zip" onClick=${(F)=>F.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${n_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${i&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&z`<div class="workspace-error">${k.error}</div>`}
                    ${b0&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${k0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${k0?.error&&z`<div class="workspace-error">${k0.error}</div>`}
                        ${k0?.payload&&k0.payload.segments?.length>0&&z`
                            <${MK} payload=${k0.payload} />
                        `}
                        ${k0?.payload&&(!k0.payload.segments||k0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!b0&&z`
                        <div class="workspace-preview-body" ref=${a0}></div>
                    `}
                    ${R&&z`
                        <div class="workspace-download-card">
                            <${kK} mediaId=${R} />
                        </div>
                    `}
                </div>
            `}
            ${K0&&z`
                <div class="workspace-drag-ghost" ref=${__}>${K0.label}</div>
            `}
        </aside>
    `}var PK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,IK=/\.(csv|tsv)$/i,CK=/\.pdf$/i,yK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,W9=/\.drawio(\.xml|\.svg|\.png)?$/i;function L9({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:Y,onTogglePin:K,onTogglePreview:Q,previewTabs:q,onToggleDock:B,dockVisible:W,onToggleZen:V,zenMode:U,onPopOutTab:A}){let[D,M]=c(null),y=T(null);p(()=>{if(!D)return;let E=(u)=>{if(u.type==="keydown"&&u.key!=="Escape")return;M(null)};return document.addEventListener("click",E),document.addEventListener("keydown",E),()=>{document.removeEventListener("click",E),document.removeEventListener("keydown",E)}},[D]),p(()=>{let E=(u)=>{if(u.ctrlKey&&u.key==="Tab"){if(u.preventDefault(),!_.length)return;let s=_.findIndex((i)=>i.id===$);if(u.shiftKey){let i=_[(s-1+_.length)%_.length];j?.(i.id)}else{let i=_[(s+1)%_.length];j?.(i.id)}return}if((u.ctrlKey||u.metaKey)&&u.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(u.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[_,$,j,N]);let J=x((E,u)=>{if(E.button===1){E.preventDefault(),N?.(u);return}if(E.button===0)j?.(u)},[j,N]),k=x((E,u)=>{E.preventDefault(),M({id:u,x:E.clientX,y:E.clientY})},[]),I=x((E)=>{E.preventDefault(),E.stopPropagation()},[]),R=x((E,u)=>{E.preventDefault(),E.stopPropagation(),N?.(u)},[N]);if(p(()=>{if(!$||!y.current)return;let E=y.current.querySelector(".tab-item.active");if(E)E.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return z`
        <div class="tab-strip" ref=${y} role="tablist">
            ${_.map((E)=>z`
                <div
                    key=${E.id}
                    class=${`tab-item${E.id===$?" active":""}${E.dirty?" dirty":""}${E.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${E.id===$}
                    title=${E.path}
                    onMouseDown=${(u)=>J(u,E.id)}
                    onContextMenu=${(u)=>k(u,E.id)}
                >
                    ${E.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${E.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${I}
                        onClick=${(u)=>R(u,E.id)}
                        title=${E.dirty?"Unsaved changes":"Close"}
                        aria-label=${E.dirty?"Unsaved changes":`Close ${E.label}`}
                    >
                        ${E.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${B&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${B}
                    title=${`${W?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${W?"Hide":"Show"} terminal`}
                    aria-pressed=${W?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&z`
                <button
                    class=${`tab-strip-zen-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${U?"Exit":"Enter"} zen mode`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${U?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${D&&z`
            <div class="tab-context-menu" style=${{left:D.x+"px",top:D.y+"px"}}>
                <button onClick=${()=>{N?.(D.id),M(null)}}>Close</button>
                <button onClick=${()=>{Z?.(D.id),M(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),M(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(D.id),M(null)}}>
                    ${_.find((E)=>E.id===D.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${A&&z`
                    <button onClick=${()=>{let E=_.find((u)=>u.id===D.id);A(D.id,E?.label),M(null)}}>Open in Window</button>
                `}
                ${Q&&/\.(md|mdx|markdown)$/i.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{Q(D.id),M(null)}}>
                        ${q?.has(D.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${PK.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(D.id),u=D.id.split("/").pop()||"document",s="/office-viewer/?url="+encodeURIComponent(E)+"&name="+encodeURIComponent(u);window.open(s,"_blank","noopener"),M(null)}}>Open in New Tab</button>
                `}
                ${IK.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{let E="/csv-viewer/?path="+encodeURIComponent(D.id);window.open(E,"_blank","noopener"),M(null)}}>Open in New Tab</button>
                `}
                ${CK.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{let E="/workspace/raw?path="+encodeURIComponent(D.id);window.open(E,"_blank","noopener"),M(null)}}>Open in New Tab</button>
                `}
                ${yK.test(D.id)&&!W9.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{let E="/image-viewer/?path="+encodeURIComponent(D.id);window.open(E,"_blank","noopener"),M(null)}}>Open in New Tab</button>
                `}
                ${W9.test(D.id)&&z`
                    <hr />
                    <button onClick=${()=>{let E="/drawio/edit?path="+encodeURIComponent(D.id);window.open(E,"_blank","noopener"),M(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var TK=400,T6=60,U9=220,S6="mdPreviewHeight";function SK(){try{let _=localStorage.getItem(S6),$=_?Number(_):NaN;return Number.isFinite($)&&$>=T6?$:U9}catch{return U9}}function x6({getContent:_,path:$,onClose:j}){let[N,Z]=c(""),[Y,K]=c(SK),Q=T(null),q=T(null),B=T(""),W=T(_);return W.current=_,p(()=>{let A=()=>{let M=W.current?.()||"";if(M===B.current)return;B.current=M;try{let y=V_(M,null,{sanitize:!1});Z(y)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let D=setInterval(A,TK);return()=>clearInterval(D)},[]),p(()=>{if(Q.current&&N)G4(Q.current).catch(()=>{})},[N]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let D=A.clientY,M=q.current?.offsetHeight||Y,y=q.current?.parentElement,J=y?y.offsetHeight*0.7:500,k=A.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(E)=>{let u=Math.min(Math.max(M-(E.clientY-D),T6),J);K(u)},R=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(S6,String(Math.round(q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",R)}}
            onTouchStart=${(A)=>{A.preventDefault();let D=A.touches[0];if(!D)return;let M=D.clientY,y=q.current?.offsetHeight||Y,J=q.current?.parentElement,k=J?J.offsetHeight*0.7:500,I=A.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let R=(u)=>{let s=u.touches[0];if(!s)return;u.preventDefault();let i=Math.min(Math.max(y-(s.clientY-M),T6),k);K(i)},E=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(S6,String(Math.round(q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:Y+"px"}}>
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
                ref=${Q}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function z9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:N,chatJid:Z}){let Y=T(_);Y.current=_;let K=T($);K.current=$;let Q=T(j);Q.current=j;let q=T(N);q.current=N,p(()=>{Q.current();let B=new Q5((V,U)=>Y.current(V,U),(V)=>K.current(V),{chatJid:Z});B.connect();let W=()=>{B.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),B.disconnect()}},[Z])}function F9(){let[_,$]=c(!1),[j,N]=c("default"),Z=T(!1);p(()=>{let q=j$("notificationsEnabled",!1);if(Z.current=q,$(q),typeof Notification<"u")N(Notification.permission)},[]),p(()=>{Z.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let B=await Y();if(N(B||"default"),B!=="granted"){Z.current=!1,$(!1),K1("notificationsEnabled","false");return}}let q=!Z.current;Z.current=q,$(q),K1("notificationsEnabled",String(q))},[Y]),Q=x((q,B)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(q,{body:B});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:Q}}var p$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[N,Z]=c(null),[Y,K]=c(!1),Q=T(!1),q=T(null),B=T(!1),W=T(null),V=T(null),U=T(0);p(()=>{Q.current=Y},[Y]),p(()=>{V.current=N},[N]),p(()=>{U.current+=1,W.current=null,B.current=!1,Q.current=!1,K(!1)},[j]);let A=x(async(y=null)=>{let J=U.current;try{if(y){let k=await $8(y,50,0,j);if(J!==U.current)return;Z(k.posts),K(!1)}else{let k=await h4(10,null,j);if(J!==U.current)return;Z(k.posts),K(k.has_more)}}catch(k){if(J!==U.current)return;console.error("Failed to load posts:",k)}},[j]),D=x(async()=>{let y=U.current;try{let J=await h4(10,null,j);if(y!==U.current)return;Z((k)=>{if(!k||k.length===0)return J.posts;return p$([...J.posts,...k])}),K((k)=>k||J.has_more)}catch(J){if(y!==U.current)return;console.error("Failed to refresh timeline:",J)}},[j]),M=x(async(y={})=>{let J=U.current,k=V.current;if(!k||k.length===0)return;if(B.current)return;let{preserveScroll:I=!0,preserveMode:R="top",allowRepeat:E=!1}=y,u=(g)=>{if(!I){g();return}if(R==="top")$(g);else _(g)},i=k.slice().sort((g,w)=>g.id-w.id)[0]?.id;if(!Number.isFinite(i))return;if(!E&&W.current===i)return;B.current=!0,W.current=i;try{let g=await h4(10,i,j);if(J!==U.current)return;if(g.posts.length>0)u(()=>{Z((w)=>p$([...g.posts,...w||[]])),K(g.has_more)});else K(!1)}catch(g){if(J!==U.current)return;console.error("Failed to load more posts:",g)}finally{if(J===U.current)B.current=!1}},[j,_,$]);return p(()=>{q.current=M},[M]),{posts:N,setPosts:Z,hasMore:Y,setHasMore:K,hasMoreRef:Q,loadPosts:A,refreshTimeline:D,loadMore:M,loadMoreRef:q,loadingMoreRef:B,lastBeforeIdRef:W}}function H9(){let[_,$]=c(null),[j,N]=c({text:"",totalLines:0}),[Z,Y]=c(""),[K,Q]=c({text:"",totalLines:0}),[q,B]=c(null),[W,V]=c(null),[U,A]=c(null),D=T(null),M=T(0),y=T(!1),J=T(""),k=T(""),I=T(null),R=T(null),E=T(null),u=T(null),s=T(!1),i=T(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:Y,agentThought:K,setAgentThought:Q,pendingRequest:q,setPendingRequest:B,currentTurnId:W,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:A,lastAgentEventRef:D,lastSilenceNoticeRef:M,isAgentRunningRef:y,draftBufferRef:J,thoughtBufferRef:k,pendingRequestRef:I,stalledPostIdRef:R,currentTurnIdRef:E,steerQueuedTurnIdRef:u,thoughtExpandedRef:s,draftExpandedRef:i}}function J9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,A=$.current||280,D=W.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=U,y=(k)=>{M=k.clientX;let I=Math.min(Math.max(A+(k.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let k=Math.min(Math.max(A+(M-U),160),600);$.current=k,D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K1("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",J)}).current,Y=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let A=U.clientX,D=$.current||280,M=W.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let y=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let R=Math.min(Math.max(D+(I.clientX-A),160),600);V.style.setProperty("--sidebar-width",`${R}px`),$.current=R},J=()=>{M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K1("sidebarWidth",String(Math.round($.current||D))),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientX,A=j.current||$.current||280,D=W.currentTarget;D.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=U,y=(k)=>{M=k.clientX;let I=Math.min(Math.max(A+(k.clientX-U),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let k=Math.min(Math.max(A+(M-U),200),800);j.current=k,D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",J)}).current,Q=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let A=U.clientX,D=j.current||$.current||280,M=W.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let y=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let R=Math.min(Math.max(D+(I.clientX-A),200),800);V.style.setProperty("--editor-width",`${R}px`),j.current=R},J=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",K1("editorWidth",String(Math.round(j.current||D))),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.clientY,A=N?.current||200,D=W.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=U,y=(k)=>{M=k.clientY;let I=Math.min(Math.max(A-(k.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),N)N.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let k=Math.min(Math.max(A-(M-U),100),window.innerHeight*0.5);if(N)N.current=k;D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K1("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",J)}).current,B=T((W)=>{W.preventDefault();let V=_.current;if(!V)return;let U=W.touches[0];if(!U)return;let A=U.clientY,D=N?.current||200,M=W.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let y=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let R=Math.min(Math.max(D-(I.clientY-A),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${R}px`),N)N.current=R;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",K1("dockHeight",String(Math.round(N?.current||D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:Q,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:B}}function D9({onTabClosed:_}={}){let $=T(_);$.current=_;let[j,N]=c(()=>s0.getTabs()),[Z,Y]=c(()=>s0.getActiveId()),[K,Q]=c(()=>s0.getTabs().length>0);p(()=>{return s0.onChange((R,E)=>{N(R),Y(E),Q(R.length>0)})},[]);let[q,B]=c(()=>new Set),W=x((R)=>{B((E)=>{let u=new Set(E);if(u.has(R))u.delete(R);else u.add(R);return u})},[]),V=x((R)=>{B((E)=>{if(!E.has(R))return E;let u=new Set(E);return u.delete(R),u})},[]),U=x((R,E={})=>{if(!R)return;let u={path:R,mode:"edit"};try{if(!j1.resolve(u)){if(!j1.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(i){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,i)}let s=typeof E?.label==="string"&&E.label.trim()?E.label.trim():void 0;s0.open(R,s)},[]),A=x(()=>{let R=s0.getActiveId();if(R){let E=s0.get(R);if(E?.dirty){if(!window.confirm(`"${E.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)}},[V]),D=x((R)=>{let E=s0.get(R);if(E?.dirty){if(!window.confirm(`"${E.label}" has unsaved changes. Close anyway?`))return}s0.close(R),V(R),$.current?.(R)},[V]),M=x((R)=>{s0.activate(R)},[]),y=x((R)=>{let E=s0.getTabs().filter((i)=>i.id!==R&&!i.pinned),u=E.filter((i)=>i.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let s=E.map((i)=>i.id);s0.closeOthers(R),s.forEach((i)=>{V(i),$.current?.(i)})},[V]),J=x(()=>{let R=s0.getTabs().filter((s)=>!s.pinned),E=R.filter((s)=>s.dirty).length;if(E>0){if(!window.confirm(`${E} unsaved tab${E>1?"s":""} will be closed. Continue?`))return}let u=R.map((s)=>s.id);s0.closeAll(),u.forEach((s)=>{V(s),$.current?.(s)})},[V]),k=x((R)=>{s0.togglePin(R)},[]),I=x(()=>{let R=s0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return p(()=>{let R=(E)=>{let{oldPath:u,newPath:s,type:i}=E.detail||{};if(!u||!s)return;if(i==="dir"){for(let g of s0.getTabs())if(g.path===u||g.path.startsWith(`${u}/`)){let w=`${s}${g.path.slice(u.length)}`;s0.rename(g.id,w)}}else s0.rename(u,s)};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),p(()=>{let R=(E)=>{if(s0.hasUnsaved())E.preventDefault(),E.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:Z,previewTabs:q,openEditor:U,closeEditor:A,handleTabClose:D,handleTabActivate:M,handleTabCloseOthers:y,handleTabCloseAll:J,handleTabTogglePin:k,handleTabTogglePreview:W,revealInExplorer:I}}function w6(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var R6=w6("warning",30000),E9=w6("finalize",120000),v6=w6("refresh",30000),A9=30000;function M9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function k9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function P9(_=30000){let[,$]=c(0);p(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function f6(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function I9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function b6(_){return String(_||"").trim()||"web:default"}function C9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function y9(_={}){return V4(_)&&M5(_)}function xK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let N=Number($?.innerHeight||0);if(Number.isFinite(N)&&N>0)return Math.round(N);return null}function wK(_={},$={}){if(!y9(_))return null;let j=_.window??(typeof window<"u"?window:null),N=_.document??(typeof document<"u"?document:null);if(!j||!N?.documentElement)return null;let Z=xK({window:j});if(Z&&Z>0)N.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(N.scrollingElement)N.scrollingElement.scrollTop=0,N.scrollingElement.scrollLeft=0;if(N.documentElement)N.documentElement.scrollTop=0,N.documentElement.scrollLeft=0;if(N.body)N.body.scrollTop=0,N.body.scrollLeft=0}catch{}}return Z}function T9(_={}){if(!y9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let N=0,Z=new Set,Y=()=>{if(N)$.cancelAnimationFrame?.(N),N=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},K=()=>{N=0,wK({window:$,document:j})},Q=()=>{if(N)$.cancelAnimationFrame?.(N);N=$.requestAnimationFrame?.(K)??0},q=()=>{Q();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),Q()},V);if(U!=null)Z.add(U)}},B=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},W=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",B),j.addEventListener("focusin",q,!0),W?.addEventListener?.("resize",q),W?.addEventListener?.("scroll",q),()=>{Y(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",B),j.removeEventListener("focusin",q,!0),W?.removeEventListener?.("resize",q),W?.removeEventListener?.("scroll",q)}}function RK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function C_(_,$,j){let N=_?.[$];return typeof N==="function"?N:RK($,j)}var vK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function S9(_){return vK.has(String(_||"").trim())}function fK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let N={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:N})),j.dispatchEvent(new CustomEvent(fK(_),{detail:N})),!0}var bK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function w9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(V4({window:j,navigator:N}))};Z();let K=bK.map((Q)=>{try{return j.matchMedia?.(Q)??null}catch{return null}}).filter(Boolean).map((Q)=>{if(typeof Q.addEventListener==="function")return Q.addEventListener("change",Z),()=>Q.removeEventListener("change",Z);if(typeof Q.addListener==="function")return Q.addListener(Z),()=>Q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let Q of K)Q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function R9(_,$={}){let j=$.window??(typeof window<"u"?window:null),N=$.document??(typeof document<"u"?document:null);if(!j||!N||typeof _!=="function")return()=>{};let Z=()=>{if(N.visibilityState&&N.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),N.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),N.removeEventListener?.("visibilitychange",Z)}}var m6="piclaw_btw_session",uK=900,mK="__piclawRenameBranchPromptLock__",v9=()=>{if(typeof window>"u")return null;let _=window,$=mK,j=_[$];if(j&&typeof j==="object")return j;let N={inFlight:!1,cooldownUntil:0};return _[$]=N,N};function gK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function hK(){let _=X_(m6);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:K==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:K}}catch{return null}}var f9=j8,b9=Z8,pK=K8,u9=X8,m9=V8,u6=Q8,R5=C_(G_,"getAgentContext",null),g9=C_(G_,"getAgentModels",{current:null,models:[]}),h9=C_(G_,"getActiveChatAgents",{chats:[]}),v5=C_(G_,"getChatBranches",{chats:[]}),cK=C_(G_,"renameChatBranch",null),lK=C_(G_,"pruneChatBranch",null),p9=C_(G_,"restoreChatBranch",null),c9=C_(G_,"getAgentQueueState",{count:0}),iK=C_(G_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),nK=C_(G_,"removeAgentQueueItem",{removed:!1}),dK=C_(G_,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j1.register(g8);j1.register(W6);j1.register(V6);j1.register(L6);j1.register(U6);j1.register(z6);j1.register(O6);j1.register(H6);j1.register(D6);j1.register(G6);h8();j1.register(l8);j1.register(i8);function rK({locationParams:_,navigate:$}){let j=y0(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),N=y0(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=y0(()=>{let G=(_.get("pane_popout")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Y=y0(()=>{let G=_.get("pane_path");return G&&G.trim()?G.trim():""},[_]),K=y0(()=>{let G=_.get("pane_label");return G&&G.trim()?G.trim():""},[_]),Q=y0(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),q=y0(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():j},[j,_]),[B,W]=c("disconnected"),[V,U]=c(()=>V4()),[A,D]=c(null),[M,y]=c(null),[J,k]=c(!1),[I,R]=c("current"),[E,u]=c([]),[s,i]=c([]),[g,w]=c(null),{agentStatus:l,setAgentStatus:a,agentDraft:X0,setAgentDraft:n,agentPlan:$0,setAgentPlan:j0,agentThought:Z0,setAgentThought:K0,pendingRequest:q0,setPendingRequest:L0,currentTurnId:U0,setCurrentTurnId:O0,steerQueuedTurnId:p0,setSteerQueuedTurnId:k0,lastAgentEventRef:J0,lastSilenceNoticeRef:c0,isAgentRunningRef:l0,draftBufferRef:T0,thoughtBufferRef:G0,pendingRequestRef:P0,stalledPostIdRef:D0,currentTurnIdRef:Q0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:m0}=H9(),[L1,P1]=c({}),[v0,i0]=c(null),[N1,Q1]=c(null),[r0,x1]=c(!1),[Z1,u1]=c(null),[B1,l1]=c([]),[g0,t1]=c([]),[G1,U1]=c(null),[H1,C0]=c([]),[J1,S0]=c(!1),[w0,a0]=c(()=>hK()),[n1,m]=c(null),B0=T(new Set),E0=y0(()=>B1.find((G)=>G?.chat_jid===j)||null,[B1,j]),F0=y0(()=>g0.find((G)=>G?.chat_jid===j)||E0||null,[E0,g0,j]),o0=F0?.root_chat_jid||E0?.root_chat_jid||j,e1=gK(I),[i1,c_]=c(()=>({status:Q?"running":"idle",message:Q?"Preparing a new chat branch…":""})),y_=H1.length,__=T(new Set),t0=T([]),w1=T(new Set),d1=T(0),R1=T({inFlight:!1,lastAttemptAt:0,turnId:null});__.current=new Set(H1.map((G)=>G.row_id)),t0.current=H1;let{notificationsEnabled:T_,notificationPermission:S_,toggleNotifications:U4,notify:z4}=F9(),[$_,l_]=c(()=>new Set),[Y1,_4]=c(()=>j$("workspaceOpen",!0)),L_=T(null),{editorOpen:h0,tabStripTabs:z1,tabStripActiveId:f0,previewTabs:v1,openEditor:D1,closeEditor:$4,handleTabClose:F4,handleTabActivate:U_,handleTabCloseOthers:w4,handleTabCloseAll:c$,handleTabTogglePin:r4,handleTabTogglePreview:z_,revealInExplorer:V$}=D9({onTabClosed:(G)=>L_.current?.(G)}),j_=T(null),N_=T(null),i_=T(null),F_=T(null),m1=j1.getDockPanes().length>0,[Q_,b0]=c(!1),Z_=x(()=>b0((G)=>!G),[]),O4=x(()=>{D1(w$,{label:"Terminal"})},[D1]),H4=x(()=>{D1(e_,{label:"VNC"})},[D1]),x_=y0(()=>z1.find((G)=>G.id===f0)||z1[0]||null,[f0,z1]),O_=y0(()=>K||x_?.label||Y||"Pane",[x_?.label,K,Y]),B_=y0(()=>z1.length>1||Boolean(f0&&v1.has(f0)),[v1,f0,z1.length]),E1=y0(()=>Y===e_||Y.startsWith(`${e_}/`),[Y]),q1=y0(()=>Y===w$&&!B_||E1,[E1,B_,Y]),r1=Z||!N&&(h0||m1&&Q_),[y1,j4]=c(!1),N4=T(!1),J4=x(()=>{if(!h0||N)return;if(N4.current=Q_,Q_)b0(!1);j4(!0)},[h0,N,Q_]),o1=x(()=>{if(!y1)return;if(j4(!1),N4.current)b0(!0),N4.current=!1},[y1]),Z4=x(()=>{if(y1)o1();else J4()},[y1,J4,o1]);p(()=>{if(y1&&!h0)o1()},[y1,h0,o1]),p(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;D1(Y,K?{label:K}:void 0)},[D1,K,Z,Y]),p(()=>{let G=j_.current;if(!G)return;if(N_.current)N_.current.dispose(),N_.current=null;let X=f0;if(!X)return;let O={path:X,mode:"edit"},P=j1.resolve(O)||j1.get("editor");if(!P){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let C=P.mount(G,O);N_.current=C,C.onDirtyChange?.((t)=>{s0.setDirty(X,t)}),C.onSaveRequest?.(()=>{}),C.onClose?.(()=>{$4()});let h=s0.getViewState(X);if(h&&typeof C.restoreViewState==="function")requestAnimationFrame(()=>C.restoreViewState(h));if(typeof C.onViewStateChange==="function")C.onViewStateChange((t)=>{s0.saveViewState(X,t)});return requestAnimationFrame(()=>C.focus()),()=>{if(N_.current===C)C.dispose(),N_.current=null}},[f0,$4]),p(()=>{let G=i_.current;if(F_.current)F_.current.dispose(),F_.current=null;if(!G||!m1||!Q_)return;let X=j1.getDockPanes()[0];if(!X){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=X.mount(G,{mode:"view"});return F_.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(F_.current===O)O.dispose(),F_.current=null}},[m1,Q_]);let[R4,w_]=c({name:"You",avatar_url:null,avatar_background:null}),H_=T(!1),q_=T(!1),R_=T(null),g1=T(j),v4=T(new Map),f4=T(j),D4=T(0),n_=T(0),v_=T({}),Y4=T({name:null,avatar_url:null}),f1=T({currentHashtag:null,searchQuery:null,searchOpen:!1}),f_=T(null),b_=T(null),d_=T(0),E4=T(0),F1=T(0),A4=T(null),s1=T(null),Y_=T(null),J_=T(null),b4=T(0),M4=T({title:null,avatarBase:null}),K4=T(null),u4=T(!1),[r_,m4]=c(!1),o4=T(0),k4=x(()=>{if(K4.current)clearTimeout(K4.current),K4.current=null;w(null)},[]);P9(30000),p(()=>{return d3()},[]),p(()=>{return w9(U)},[]),p(()=>{K1("workspaceOpen",String(Y1))},[Y1]),p(()=>{return T9()},[]),p(()=>{return()=>{k4()}},[k4]),p(()=>{if(!w0){K1(m6,"");return}K1(m6,JSON.stringify({question:w0.question||"",answer:w0.answer||"",thinking:w0.thinking||"",error:w0.error||null,status:w0.status||"success"}))},[w0]),p(()=>{v_.current=L1||{}},[L1]),p(()=>{g1.current=j},[j]),p(()=>{Y4.current=R4||{name:"You",avatar_url:null,avatar_background:null}},[R4]);let P4=x((G,X,O=null)=>{if(typeof document>"u")return;let P=(G||"").trim()||"PiClaw";if(M4.current.title!==P){document.title=P;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==P)e.setAttribute("content",P);M4.current.title=P}let C=document.getElementById("dynamic-favicon");if(!C)return;let h=C.getAttribute("data-default")||C.getAttribute("href")||"/favicon.ico",t=X||h,_0=X?`${t}|${O||""}`:t;if(M4.current.avatarBase!==_0){let e=X?`${t}${t.includes("?")?"&":"?"}v=${O||Date.now()}`:t;C.setAttribute("href",e),M4.current.avatarBase=_0}},[]),u_=x((G)=>{if(!G)return;u((X)=>X.includes(G)?X:[...X,G])},[]),s4=x((G)=>{u((X)=>X.filter((O)=>O!==G))},[]);L_.current=s4;let Q4=x(()=>{u([])},[]),F=x((G)=>{if(!Array.isArray(G)){u([]);return}let X=[],O=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let C=P.trim();if(O.has(C))continue;O.add(C),X.push(C)}u(X)},[]),H=x((G,X=null,O="info",P=3000)=>{k4(),w({title:G,detail:X||null,kind:O||"info"}),K4.current=setTimeout(()=>{w((C)=>C?.title===G?null:C)},P)},[k4]),f=x((G)=>{let X=I9(G,{editorOpen:h0,resolvePane:(O)=>j1.resolve(O)});if(X.kind==="open"){D1(X.path);return}if(X.kind==="toast")H(X.title,X.detail,X.level)},[h0,D1,H]),v=x(()=>{let G=f0;if(G)u_(G)},[f0,u_]),r=x((G)=>{if(!G)return;i((X)=>X.includes(G)?X:[...X,G])},[]),Y0=x(async(G,X=null)=>{let O=(C)=>{C.scrollIntoView({behavior:"smooth",block:"center"}),C.classList.add("post-highlight"),setTimeout(()=>C.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+G);if(P){O(P);return}try{let C=typeof X==="string"&&X.trim()?X.trim():j,t=(await N8(G,C))?.thread?.[0];if(!t)return;T1((_0)=>{if(!_0)return[t];if(_0.some((e)=>e.id===t.id))return _0;return[..._0,t]}),requestAnimationFrame(()=>{setTimeout(()=>{let _0=document.getElementById("post-"+G);if(_0)O(_0)},50)})}catch(C){console.error("[scrollToMessage] Failed to fetch message",G,C)}},[j]),V0=x((G)=>{i((X)=>X.filter((O)=>O!==G))},[]),W0=x(()=>{i([])},[]),N0=x((G)=>{if(!Array.isArray(G)){i([]);return}let X=[],O=new Set;for(let P of G){if(typeof P!=="string"||!P.trim())continue;let C=P.trim();if(O.has(C))continue;O.add(C),X.push(C)}i(X)},[]),A0=x((G)=>{let X=typeof G==="string"&&G.trim()?G.trim():"Could not send your message.";H("Compose failed",X,"error",5000)},[H]),X1=x((G={})=>{let X=Date.now();if(J0.current=X,G.running)l0.current=!0,S0((O)=>O?O:!0);if(G.clearSilence)c0.current=0},[S0]),A1=x(()=>{if(J_.current)clearTimeout(J_.current),J_.current=null;b4.current=0},[]);p(()=>()=>{A1()},[A1]);let L=x(()=>{A1(),a((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:X,lastActivity:O,...P}=G;return P})},[A1]),S=x((G)=>{if(!G)return;A1();let X=Date.now();b4.current=X,a({type:G.type||"active",last_activity:!0}),J_.current=setTimeout(()=>{if(b4.current!==X)return;a((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},A9)},[A1]),b=x(()=>{l0.current=!1,S0(!1),J0.current=null,c0.current=0,T0.current="",G0.current="",P0.current=null,s1.current=null,Q0.current=null,I0.current=null,R_.current=null,R1.current={inFlight:!1,lastAttemptAt:0,turnId:null},A1(),O0(null),k0(null),d0.current=!1,m0.current=!1},[A1,O0,k0,S0]),d=x((G)=>{if(!C9({remainingQueueCount:G,currentTurnId:Q0.current,isAgentTurnActive:J1}))return;I0.current=null,k0(null)},[J1,k0]),z0=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),u0=x(()=>({agentStatus:l,agentDraft:X0?{...X0}:{text:"",totalLines:0},agentPlan:$0||"",agentThought:Z0?{...Z0}:{text:"",totalLines:0},pendingRequest:q0,currentTurnId:U0,steerQueuedTurnId:p0,isAgentTurnActive:Boolean(J1),followupQueueItems:Array.isArray(H1)?H1.map((G)=>({...G})):[],activeModel:v0,activeThinkingLevel:N1,supportsThinking:Boolean(r0),activeModelUsage:Z1,contextUsage:G1,isAgentRunning:Boolean(l0.current),wasAgentActive:Boolean(q_.current),draftBuffer:T0.current||"",thoughtBuffer:G0.current||"",lastAgentEvent:J0.current||null,lastSilenceNotice:c0.current||0,lastAgentResponse:s1.current||null,currentTurnIdRef:Q0.current||null,steerQueuedTurnIdRef:I0.current||null,thoughtExpanded:Boolean(d0.current),draftExpanded:Boolean(m0.current),agentStatusRef:R_.current||null,silentRecovery:{...R1.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[v0,Z1,N1,X0,$0,l,Z0,G1,U0,H1,J1,q0,p0,r0]),V1=x((G)=>{let X=G||z0();A1(),l0.current=Boolean(X.isAgentRunning),q_.current=Boolean(X.wasAgentActive),S0(Boolean(X.isAgentTurnActive)),J0.current=X.lastAgentEvent||null,c0.current=Number(X.lastSilenceNotice||0),T0.current=X.draftBuffer||"",G0.current=X.thoughtBuffer||"",P0.current=X.pendingRequest||null,s1.current=X.lastAgentResponse||null,Q0.current=X.currentTurnIdRef||null,I0.current=X.steerQueuedTurnIdRef||null,R_.current=X.agentStatusRef||null,R1.current=X.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},d0.current=Boolean(X.thoughtExpanded),m0.current=Boolean(X.draftExpanded),a(X.agentStatus||null),n(X.agentDraft?{...X.agentDraft}:{text:"",totalLines:0}),j0(X.agentPlan||""),K0(X.agentThought?{...X.agentThought}:{text:"",totalLines:0}),L0(X.pendingRequest||null),O0(X.currentTurnId||null),k0(X.steerQueuedTurnId||null),C0(Array.isArray(X.followupQueueItems)?X.followupQueueItems.map((O)=>({...O})):[]),i0(X.activeModel||null),Q1(X.activeThinkingLevel||null),x1(Boolean(X.supportsThinking)),u1(X.activeModelUsage??null),U1(X.contextUsage??null)},[A1,z0,O0,C0,S0,k0]),n0=x((G)=>{if(!G)return;if(Q0.current===G)return;Q0.current=G,R1.current={inFlight:!1,lastAttemptAt:0,turnId:G},O0(G),I0.current=null,k0(null),T0.current="",G0.current="",n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),P0.current=null,s1.current=null,d0.current=!1,m0.current=!1},[O0,k0]),D_=x((G)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let X=s1.current;if(!X||!X.post)return;if(G&&X.turnId&&X.turnId!==G)return;let O=X.post;if(O.id&&A4.current===O.id)return;let P=String(O?.data?.content||"").trim();if(!P)return;A4.current=O.id||A4.current,s1.current=null;let C=P.replace(/\s+/g," ").slice(0,200),h=v_.current||{},_0=(O?.data?.agent_id?h[O.data.agent_id]:null)?.name||"Pi";z4(_0,C)},[z4]),e0=x(async(G,X)=>{if(G!=="thought"&&G!=="draft")return;let O=Q0.current;if(G==="thought"){if(d0.current=X,O)try{await m9(O,"thought",X)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!X)return;try{let P=O?await u9(O,"thought"):null;if(P?.text)G0.current=P.text;K0((C)=>({...C||{text:"",totalLines:0},fullText:G0.current||C?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:C?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(m0.current=X,O)try{await m9(O,"draft",X)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!X)return;try{let P=O?await u9(O,"draft"):null;if(P?.text)T0.current=P.text;n((C)=>({...C||{text:"",totalLines:0},fullText:T0.current||C?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:C?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),m_=T(null),o_=x(()=>{let G=f_.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);m_.current=o_;let a4=x((G)=>{let X=f_.current;if(!X||typeof G!=="function"){G?.();return}let{currentHashtag:O,searchQuery:P,searchOpen:C}=f1.current||{},h=!((P||C)&&!O),t=h?X.scrollHeight-X.scrollTop:X.scrollTop;G(),requestAnimationFrame(()=>{let _0=f_.current;if(!_0)return;if(h){let e=Math.max(_0.scrollHeight-t,0);_0.scrollTop=e}else{let e=Math.max(_0.scrollHeight-_0.clientHeight,0),o=Math.min(t,e);_0.scrollTop=o}})},[]),E_=x((G)=>{let X=f_.current;if(!X||typeof G!=="function"){G?.();return}let O=X.scrollTop;G(),requestAnimationFrame(()=>{let P=f_.current;if(!P)return;let C=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(O,C)})},[]),f5="Queued as a follow-up (one-at-a-time).",g4="⁣",h1=x((G)=>{if(!G||!Array.isArray(G))return G;let X=__.current,O=new Set(X),P=G.filter((C)=>{if(O.has(C?.id))return!1;if(C?.data?.is_bot_message){let h=C?.data?.content;if(h===f5||h===g4)return!1}return!0});return P.length===G.length?G:P},[]),{posts:B4,setPosts:T1,hasMore:b5,setHasMore:t4,hasMoreRef:I4,loadPosts:O1,refreshTimeline:M1,loadMore:g6,loadMoreRef:W$}=O9({preserveTimelineScroll:a4,preserveTimelineScrollTop:E_,chatJid:j}),e4=y0(()=>h1(B4),[B4,H1,h1]),l$=x(()=>{let G=D0.current;if(!G)return;T1((X)=>X?X.filter((O)=>O.id!==G):X),D0.current=null},[T1]),{handleSplitterMouseDown:l9,handleSplitterTouchStart:i9,handleEditorSplitterMouseDown:n9,handleEditorSplitterTouchStart:d9,handleDockSplitterMouseDown:r9,handleDockSplitterTouchStart:o9}=J9({appShellRef:b_,sidebarWidthRef:d_,editorWidthRef:E4,dockHeightRef:F1}),h6=x(()=>{if(!l0.current)return;l0.current=!1,c0.current=0,J0.current=null,Q0.current=null,O0(null),d0.current=!1,m0.current=!1;let G=(T0.current||"").trim();if(T0.current="",G0.current="",n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),P0.current=null,s1.current=null,!G){a({type:"error",title:"Response stalled - No content received"});return}let O=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),C=new Date().toISOString(),h={id:P,timestamp:C,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};D0.current=P,T1((t)=>t?p$([...t,h]):[h]),m_.current?.(),a(null)},[O0]);p(()=>{f1.current={currentHashtag:A,searchQuery:M,searchOpen:J}},[A,M,J]);let _1=x(()=>{let G=++d1.current,X=j;c9(X).then((O)=>{if(G!==d1.current)return;if(g1.current!==X)return;let P=w1.current,C=Array.isArray(O?.items)?O.items.map((h)=>({...h})).filter((h)=>!P.has(h.row_id)):[];if(C.length){C0((h)=>{if(h.length===C.length&&h.every((t,_0)=>t.row_id===C[_0].row_id))return h;return C});return}P.clear(),d(0),C0((h)=>h.length===0?h:[])}).catch(()=>{if(G!==d1.current)return;if(g1.current!==X)return;C0((O)=>O.length===0?O:[])})},[d,j,C0]),A_=x(async()=>{let G=j;try{let X=await R5(G);if(g1.current!==G)return;if(X)U1(X)}catch(X){if(g1.current!==G)return;console.warn("Failed to fetch agent context:",X)}},[j]),M_=x(async()=>{let G=j;try{let X=await u6(G);if(g1.current!==G)return null;if(!X||X.status!=="active"||!X.data){if(q_.current){let{currentHashtag:C,searchQuery:h,searchOpen:t}=f1.current||{};if(!C&&!h&&!t)M1()}return q_.current=!1,b(),R_.current=null,a(null),n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),P0.current=null,X??null}q_.current=!0;let O=X.data;R_.current=O;let P=O.turn_id||O.turnId;if(P)n0(P);if(X1({running:!0,clearSilence:!0}),L(),a(O),X.thought&&X.thought.text)K0((C)=>{if(C&&C.text&&C.text.length>=X.thought.text.length)return C;return G0.current=X.thought.text,{text:X.thought.text,totalLines:X.thought.totalLines||0}});if(X.draft&&X.draft.text)n((C)=>{if(C&&C.text&&C.text.length>=X.draft.text.length)return C;return T0.current=X.draft.text,{text:X.draft.text,totalLines:X.draft.totalLines||0}});return X}catch(X){return console.warn("Failed to fetch agent status:",X),null}},[b,L,X1,M1,n0]),u5=x(async()=>{if(!l0.current)return null;if(P0.current)return null;let G=Q0.current||null,X=R1.current,O=Date.now();if(X.inFlight)return null;if(X.turnId===G&&O-X.lastAttemptAt<v6)return null;X.inFlight=!0,X.lastAttemptAt=O,X.turnId=G;try{let{currentHashtag:P,searchQuery:C,searchOpen:h}=f1.current||{};if(!P&&!C&&!h)await M1();return await _1(),await M_()}finally{X.inFlight=!1}},[M_,_1,M1]);p(()=>{let G=Math.min(1000,Math.max(100,Math.floor(R6/2))),X=setInterval(()=>{if(!l0.current)return;if(P0.current)return;let O=J0.current;if(!O)return;let P=Date.now(),C=P-O,h=C$(R_.current);if(C>=E9){if(!h)a({type:"waiting",title:"Re-syncing after a quiet period…"});u5();return}if(C>=R6){if(P-c0.current>=v6){if(!h){let t=Math.floor(C/1000);a({type:"waiting",title:`Waiting for model… No events for ${t}s`})}c0.current=P,u5()}}},G);return()=>clearInterval(X)},[u5]);let s9=x((G)=>{if(W(G),G!=="connected"){a(null),n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),P0.current=null,b();return}if(!H_.current){H_.current=!0;let{currentHashtag:C,searchQuery:h,searchOpen:t}=f1.current||{};if(!C&&!h&&!t)M1();M_(),_1(),A_();return}let{currentHashtag:X,searchQuery:O,searchOpen:P}=f1.current;if(!X&&!O&&!P)M1();M_(),_1(),A_()},[b,M1,M_,_1,A_]),a9=x(async(G)=>{D(G),T1(null),await O1(G)},[O1]),t9=x(async()=>{D(null),y(null),T1(null),await O1()},[O1]),e9=x(async(G,X=I)=>{if(!G||!G.trim())return;let O=X==="root"||X==="all"?X:"current";R(O),y(G.trim()),D(null),T1(null);try{let P=await f9(G.trim(),50,0,j,O,o0);T1(P.results),t4(!1)}catch(P){console.error("Failed to search:",P),T1([])}},[j,o0,I]),_j=x(()=>{k(!0),y(null),D(null),R("current"),T1([])},[]),$j=x(()=>{k(!1),y(null),O1()},[O1]),sK=x(()=>{},[]),m5=!A&&!M&&!J,jj=x(async(G)=>{if(!G)return;let X=G.id,O=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():j,P=e4?.filter((h)=>h?.data?.thread_id===X&&h?.id!==X).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let C=(h)=>{if(!h.length)return;l_((_0)=>{let e=new Set(_0);return h.forEach((o)=>e.add(o)),e}),setTimeout(()=>{if(E_(()=>{T1((_0)=>_0?_0.filter((e)=>!h.includes(e.id)):_0)}),l_((_0)=>{let e=new Set(_0);return h.forEach((o)=>e.delete(o)),e}),I4.current)W$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await b9(X,P>0,O);if(h?.ids?.length)C(h.ids)}catch(h){let t=h?.message||"";if(P===0&&t.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await b9(X,!0,O);if(e?.ids?.length)C(e.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${t}`)}},[j,e4,E_]),p6=x(async()=>{try{let G=await pK();P1(M9(G));let X=G?.user||{};w_((P)=>{let C=typeof X.name==="string"&&X.name.trim()?X.name.trim():"You",h=typeof X.avatar_url==="string"?X.avatar_url.trim():null,t=typeof X.avatar_background==="string"&&X.avatar_background.trim()?X.avatar_background.trim():null;if(P.name===C&&P.avatar_url===h&&P.avatar_background===t)return P;return{name:C,avatar_url:h,avatar_background:t}});let O=(G?.agents||[]).find((P)=>P.id==="default");P4(O?.name,O?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=j,X=await R5(G);if(g1.current!==G)return;if(X)U1(X)}catch{}},[P4,j]);p(()=>{p6();let G=N$("sidebarWidth",null),X=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(d_.current=X,b_.current)b_.current.style.setProperty("--sidebar-width",`${X}px`)},[p6]);let L$=J1||l!==null,c6=x((G)=>{if(!G||typeof G!=="object")return;let X=G.agent_id;if(!X)return;let{agent_name:O,agent_avatar:P}=G;if(!O&&P===void 0)return;let C=v_.current?.[X]||{id:X},h=C.name||null,t=C.avatar_url??C.avatarUrl??C.avatar??null,_0=!1,e=!1;if(O&&O!==C.name)h=O,e=!0;if(P!==void 0){let o=typeof P==="string"?P.trim():null,H0=typeof t==="string"?t.trim():null,x0=o||null;if(x0!==(H0||null))t=x0,_0=!0}if(!e&&!_0)return;if(P1((o)=>{let x0={...o[X]||{id:X}};if(e)x0.name=h;if(_0)x0.avatar_url=t;return{...o,[X]:x0}}),X==="default")P4(h,t,_0?Date.now():null)},[P4]),l6=x((G)=>{if(!G||typeof G!=="object")return;let X=G.user_name??G.userName,O=G.user_avatar??G.userAvatar,P=G.user_avatar_background??G.userAvatarBackground;if(X===void 0&&O===void 0&&P===void 0)return;w_((C)=>{let h=typeof X==="string"&&X.trim()?X.trim():C.name||"You",t=O===void 0?C.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,_0=P===void 0?C.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(C.name===h&&C.avatar_url===t&&C.avatar_background===_0)return C;return{name:h,avatar_url:t,avatar_background:_0}})},[]),g5=x((G)=>{if(!G||typeof G!=="object")return;let X=G.model??G.current;if(X!==void 0)i0(X);if(G.thinking_level!==void 0)Q1(G.thinking_level??null);if(G.supports_thinking!==void 0)x1(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)u1(G.provider_usage??null)},[]),U$=x(()=>{let G=j;g9(G).then((X)=>{if(g1.current!==G)return;if(X)g5(X)}).catch(()=>{})},[g5,j]),p1=x(()=>{let G=j,X=(O)=>Array.isArray(O)?O.filter((P)=>P&&typeof P.chat_jid==="string"&&typeof P.agent_name==="string"&&P.agent_name.trim()):[];Promise.all([h9().catch(()=>({chats:[]})),v5(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,P])=>{if(g1.current!==G)return;let C=X(O?.chats),h=X(P?.chats);if(h.length===0){l1(C);return}let t=new Map(C.map((e)=>[e.chat_jid,e])),_0=h.map((e)=>{let o=t.get(e.chat_jid);return o?{...e,...o,is_active:o.is_active??e.is_active}:e});_0.sort((e,o)=>{if(e.chat_jid===G&&o.chat_jid!==G)return-1;if(o.chat_jid===G&&e.chat_jid!==G)return 1;let H0=Boolean(e.archived_at),x0=Boolean(o.archived_at);if(H0!==x0)return H0?1:-1;if(Boolean(e.is_active)!==Boolean(o.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(o.chat_jid))}),l1(_0)}).catch(()=>{if(g1.current!==G)return;l1([])})},[j]),b1=x(()=>{v5(o0).then((G)=>{let X=Array.isArray(G?.chats)?G.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];t1(X)}).catch(()=>{})},[o0]),Nj=x((G)=>{let X=G?.row_id;if(X==null)return;w1.current.add(X),C0((O)=>O.filter((P)=>P?.row_id!==X)),iK(X,b6(j)).then(()=>{_1()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),H("Failed to steer message","The queued message could not be sent as steering.","warning"),w1.current.delete(X),_1()})},[j,_1,C0,H]),Zj=x((G)=>{let X=G?.row_id;if(X==null)return;let O=t0.current.filter((P)=>P?.row_id!==X).length;w1.current.add(X),d(O),C0((P)=>P.filter((C)=>C?.row_id!==X)),nK(X,b6(j)).then(()=>{_1()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),H("Failed to remove message","The queued message could not be removed.","warning"),w1.current.delete(X),_1()})},[d,j,_1,C0,H]),z$=x((G)=>{if(!G||typeof G!=="object")return;if(p1(),b1(),G?.queued==="followup"||G?.queued==="steer"){_1();return}let X=G?.command;if(X&&typeof X==="object"&&(X?.queued_followup||X?.queued_steer))_1()},[p1,b1,_1]),h5=x(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;a0(null)},[]),i$=x(async(G)=>{let X=String(G||"").trim();if(!X)return H("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let O=new AbortController;Y_.current=O,a0({question:X,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await dK(X,{signal:O.signal,chatJid:N2(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(C,h)=>{if(C==="side_prompt_start")a0((t)=>t?{...t,status:"running"}:t)},onThinkingDelta:(C)=>{a0((h)=>h?{...h,thinking:`${h.thinking||""}${C||""}`}:h)},onTextDelta:(C)=>{a0((h)=>h?{...h,answer:`${h.answer||""}${C||""}`}:h)}});if(Y_.current!==O)return!0;a0((C)=>C?{...C,answer:P?.result||C.answer||"",thinking:P?.thinking||C.thinking||"",model:P?.model||null,status:"success",error:null}:C)}catch(P){if(O.signal.aborted)return!0;a0((C)=>C?{...C,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:C)}finally{if(Y_.current===O)Y_.current=null}return!0},[j,H]),Yj=x(async({content:G})=>{let X=j2(G);if(!X)return!1;if(X.type==="help")return H("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(X.type==="clear")return h5(),H("BTW cleared","Closed the side conversation panel.","info"),!0;if(X.type==="ask")return await i$(X.question),!0;return!1},[h5,i$,H]),Kj=x(()=>{if(w0?.question)i$(w0.question)},[w0,i$]),Qj=x(async()=>{let G=K2(w0);if(!G)return;try{let X=await p4("default",G,null,[],L$?"queue":null,j);z$(X),H(X?.queued==="followup"?"BTW queued":"BTW injected",X?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(X){H("BTW inject failed",X?.message||"Could not inject BTW answer into chat.","warning")}},[w0,z$,L$,H]),i6=x(async(G=null)=>{let[X,O,P,C,h,t,_0]=await Promise.allSettled([u6(j),R5(j),c9(j),g9(j),h9(),v5(o0),h4(20,null,j)]),e=X.status==="fulfilled"?X.value:null,o=O.status==="fulfilled"?O.value:null,H0=P.status==="fulfilled"?P.value:null,x0=C.status==="fulfilled"?C.value:null,a1=h.status==="fulfilled"?h.value:null,k1=t.status==="fulfilled"?t.value:null,s_=_0.status==="fulfilled"?_0.value:null,k_=Array.isArray(s_?.posts)?s_.posts:Array.isArray(B4)?B4:[],o6=k_.length?k_[k_.length-1]:null,zj=k_.filter((l5)=>l5?.data?.is_bot_message).length,Fj=k_.filter((l5)=>!l5?.data?.is_bot_message).length,s6=Number(H0?.count??t0.current.length??0)||0,a6=Array.isArray(a1?.chats)?a1.chats.length:B1.length,Oj=Array.isArray(k1?.chats)?k1.chats.length:g0.length,t6=Number(o?.percent??G1?.percent??0)||0,Hj=Number(o?.tokens??G1?.tokens??0)||0,Jj=Number(o?.contextWindow??G1?.contextWindow??0)||0,Dj=x0?.current??v0??null,Ej=x0?.thinking_level??N1??null,Aj=x0?.supports_thinking??r0,Mj=e?.status||(J1?"active":"idle"),kj=e?.data?.type||e?.type||null;return{generatedAt:new Date().toISOString(),request:G,chat:{currentChatJid:j,rootChatJid:o0,activeChats:a6,branches:Oj},agent:{status:Mj,phase:kj,running:Boolean(J1)},model:{current:Dj,thinkingLevel:Ej,supportsThinking:Boolean(Aj)},context:{tokens:Hj,contextWindow:Jj,percent:t6},queue:{count:s6},timeline:{loadedPosts:k_.length,botPosts:zj,userPosts:Fj,latestPostId:o6?.id??null,latestTimestamp:o6?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(t6)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,s6*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,a6*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,k_.length*5))}]}},[B1,v0,N1,G1,g0,j,o0,J1,B4,r0]),F$=x(()=>{U$(),p1(),b1(),_1(),A_()},[U$,p1,b1,_1,A_]);p(()=>{F$();let G=setInterval(()=>{U$(),p1(),b1(),_1()},60000);return()=>clearInterval(G)},[F$,U$,p1,b1,_1]),p(()=>{b1()},[b1]),p(()=>{let G=!1,X=()=>{if(G)return;requestAnimationFrame(()=>{if(G)return;o_()})};if(A)return O1(A),()=>{G=!0};if(M)return f9(M,50,0,j,I,o0).then((O)=>{if(G)return;T1(O.results),t4(!1)}).catch((O)=>{if(G)return;console.error("Failed to search:",O),T1([]),t4(!1)}),()=>{G=!0};return O1().then(()=>{X()}).catch((O)=>{if(G)return;console.error("Failed to load timeline:",O)}),()=>{G=!0}},[j,A,M,I,o0,O1,o_,t4,T1]),p(()=>{let G=f4.current||j;v4.current.set(G,u0())},[j,u0]),p(()=>{let G=f4.current||j;if(G===j)return;v4.current.set(G,u0()),f4.current=j,w1.current.clear(),V1(v4.current.get(j)||null),_1(),M_(),A_()},[j,M_,A_,_1,V1,u0]);let Bj=x(()=>{let{currentHashtag:G,searchQuery:X,searchOpen:O}=f1.current||{};if(!G&&!X&&!O)M1();F$()},[F$,M1]),O$=x((G,X="streaming")=>{let O=X2({...G,...G&&G.status?{}:{status:X}});if(!O)return;let P=c1(O);if(P&&B0.current.has(P))return;m((C)=>{let h=c1(C),t=Boolean(P&&h&&P===h),_0={...t&&C?.artifact?C.artifact:{},...O.artifact||{}};return{...t&&C?C:{},...O,artifact:_0,source:"live",originChatJid:O.originChatJid||j,openedAt:t&&C?.openedAt?C.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),p5=x((G,X)=>{let O=X?.turn_id,P=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null,h=P?P===j:G==="connected"||G==="workspace_update";if(h)c6(X),l6(X);if(G==="ui_theme"){r3(X);return}if(G==="generated_widget_open"){if(!h)return;if(O&&!Q0.current)n0(O);O$(X,"loading");return}if(G==="generated_widget_delta"){if(!h)return;if(O&&!Q0.current)n0(O);O$(X,"streaming");return}if(G==="generated_widget_final"){if(!h)return;if(O&&!Q0.current)n0(O);O$(X,"final");return}if(G==="generated_widget_error"){if(!h)return;O$(X,"error");return}if(G==="generated_widget_close"){if(!h)return;let o=c1(X);m((H0)=>{if(!H0||H0?.source!=="live")return H0;let x0=c1(H0);if(o&&x0&&o!==x0)return H0;return null});return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))L()}if(G==="connected"){a(null),n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),P0.current=null,b();let o=j;u6(o).then((k1)=>{if(g1.current!==o)return;if(!k1||k1.status!=="active"||!k1.data)return;let s_=k1.data,k_=s_.turn_id||s_.turnId;if(k_)n0(k_);if(X1({clearSilence:!0}),S(s_),k1.thought&&k1.thought.text)G0.current=k1.thought.text,K0({text:k1.thought.text,totalLines:k1.thought.totalLines||0});if(k1.draft&&k1.draft.text)T0.current=k1.draft.text,n({text:k1.draft.text,totalLines:k1.draft.totalLines||0})}).catch((k1)=>{console.warn("Failed to fetch agent status:",k1)});let{currentHashtag:H0,searchQuery:x0,searchOpen:a1}=f1.current||{};if(!H0&&!x0&&!a1)M1();F$();return}if(G==="agent_status"){if(!h){if(X?.type==="done"||X?.type==="error")p1(),b1();return}if(X.type==="done"||X.type==="error"){if(O&&Q0.current&&O!==Q0.current)return;if(X.type==="done"){D_(O||Q0.current);let{currentHashtag:o,searchQuery:H0,searchOpen:x0}=f1.current||{};if(!o&&!H0&&!x0)M1();if(X.context_usage)U1(X.context_usage)}if(q_.current=!1,b(),w1.current.clear(),p1(),_1(),n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null),X.type==="error")a({type:"error",title:X.title||"Agent error"}),setTimeout(()=>a(null),8000);else a(null)}else{if(O)n0(O);if(X1({running:!0,clearSilence:!0}),X.type==="thinking")T0.current="",G0.current="",n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0});R_.current=X,a((o)=>{if(o&&o.type===X.type&&o.title===X.title)return o;return X})}return}if(G==="agent_steer_queued"){if(!h)return;if(O&&Q0.current&&O!==Q0.current)return;let o=O||Q0.current;if(!o)return;I0.current=o,k0(o);return}if(G==="agent_followup_queued"){if(!h)return;let o=X?.row_id,H0=X?.content;if(o!=null&&typeof H0==="string"&&H0.trim())C0((x0)=>{if(x0.some((a1)=>a1?.row_id===o))return x0;return[...x0,{row_id:o,content:H0,timestamp:X?.timestamp||null,thread_id:X?.thread_id??null}]});_1();return}if(G==="agent_followup_consumed"){if(!h)return;let o=X?.row_id;if(o!=null){let k1=t0.current.filter((s_)=>s_.row_id!==o).length;d(k1),C0((s_)=>s_.filter((k_)=>k_.row_id!==o))}_1();let{currentHashtag:H0,searchQuery:x0,searchOpen:a1}=f1.current||{};if(!H0&&!x0&&!a1)M1();return}if(G==="agent_followup_removed"){if(!h)return;let o=X?.row_id;if(o!=null){let H0=t0.current.filter((x0)=>x0.row_id!==o).length;w1.current.add(o),d(H0),C0((x0)=>x0.filter((a1)=>a1.row_id!==o))}_1();return}if(G==="agent_draft_delta"){if(!h)return;if(O&&Q0.current&&O!==Q0.current)return;if(O&&!Q0.current)n0(O);if(X1({running:!0,clearSilence:!0}),X?.reset)T0.current="";if(X?.delta)T0.current+=X.delta;let o=Date.now();if(!D4.current||o-D4.current>=100){D4.current=o;let H0=T0.current,x0=f6(H0);if(m0.current)n((a1)=>({text:a1?.text||"",totalLines:x0,fullText:H0}));else n({text:H0,totalLines:x0})}return}if(G==="agent_draft"){if(!h)return;if(O&&Q0.current&&O!==Q0.current)return;if(O&&!Q0.current)n0(O);X1({running:!0,clearSilence:!0});let o=X.text||"",H0=X.mode||(X.kind==="plan"?"replace":"append"),x0=Number.isFinite(X.total_lines)?X.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(X.kind==="plan")if(H0==="replace")j0(o);else j0((a1)=>(a1||"")+o);else if(!m0.current)T0.current=o,n({text:o,totalLines:x0});return}if(G==="agent_thought_delta"){if(!h)return;if(O&&Q0.current&&O!==Q0.current)return;if(O&&!Q0.current)n0(O);if(X1({running:!0,clearSilence:!0}),X?.reset)G0.current="";if(typeof X?.delta==="string")G0.current+=X.delta;let o=Date.now();if(d0.current&&(!n_.current||o-n_.current>=100)){n_.current=o;let H0=G0.current;K0((x0)=>({text:x0?.text||"",totalLines:f6(H0),fullText:H0}))}return}if(G==="agent_thought"){if(!h)return;if(O&&Q0.current&&O!==Q0.current)return;if(O&&!Q0.current)n0(O);X1({running:!0,clearSilence:!0});let o=X.text||"",H0=Number.isFinite(X.total_lines)?X.total_lines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;if(!d0.current)G0.current=o,K0({text:o,totalLines:H0});return}if(G==="model_changed"){if(!h)return;if(X?.model!==void 0)i0(X.model);if(X?.thinking_level!==void 0)Q1(X.thinking_level??null);if(X?.supports_thinking!==void 0)x1(Boolean(X.supports_thinking));let o=j;R5(o).then((H0)=>{if(g1.current!==o)return;if(H0)U1(H0)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:X}));return}if(S9(G)){if(!h)return;if(x9(G,X),G==="extension_ui_notify"&&typeof X?.message==="string")H(X.message,null,X?.type||"info");if(G==="extension_ui_error"&&typeof X?.error==="string")H("Extension UI error",X.error,"error",5000);return}let{currentHashtag:t,searchQuery:_0,searchOpen:e}=f1.current;if(G==="agent_response"){if(!h)return;l$(),s1.current={post:X,turnId:Q0.current}}if(!t&&!_0&&!e&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))T1((o)=>{if(!o)return[X];if(o.some((H0)=>H0.id===X.id))return o;return[...o,X]}),m_.current?.();if(G==="interaction_updated"){if(!h)return;if(t||_0||e)return;T1((o)=>{if(!o)return o;if(!o.some((H0)=>H0.id===X.id))return o;return o.map((H0)=>H0.id===X.id?X:H0)})}if(G==="interaction_deleted"){if(!h)return;if(t||_0||e)return;let o=X?.ids||[];if(o.length){if(E_(()=>{T1((H0)=>H0?H0.filter((x0)=>!o.includes(x0.id)):H0)}),I4.current)W$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[O$,b,L,j,W$,X1,D_,E_,p1,b1,M1,l$,n0,S,c6,l6,U$,_1,C0]);p(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=p5,G.reset=()=>{l$(),b(),a(null),n({text:"",totalLines:0}),j0(""),K0({text:"",totalLines:0}),L0(null)},G.finalize=()=>h6(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[b,h6,p5,l$]),z9({handleSseEvent:p5,handleConnectionStatusChange:s9,loadPosts:O1,onWake:Bj,chatJid:j}),p(()=>{if(!e4||e4.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let X=G.slice(5);Y0(X),history.replaceState(null,"",location.pathname+location.search)},[e4,Y0]);let c5=l!==null;p(()=>{if(B!=="connected")return;let X=setInterval(()=>{let{currentHashtag:O,searchQuery:P,searchOpen:C}=f1.current||{},h=!O&&!P&&!C;if(c5){if(h)M1();_1(),M_(),A_()}else{if(h)M1();M_(),A_()}},c5?15000:60000);return()=>clearInterval(X)},[B,c5,M_,A_,_1,M1]),p(()=>{return R9(()=>{M_(),A_(),_1()})},[M_,A_,_1]);let qj=x(()=>{_4((G)=>!G)},[]),n6=x((G)=>{if(typeof window>"u")return;let X=String(G||"").trim();if(!X||X===j)return;let O=n4(window.location.href,X,{chatOnly:N});$?.(O)},[N,j,$]),d6=x(async()=>{if(typeof window>"u"||!F0?.chat_jid)return;let G=Date.now(),X=v9();if(!X)return;if(u4.current||G<o4.current||X.inFlight||G<X.cooldownUntil)return;u4.current=!0,X.inFlight=!0,m4(!0);try{let O=F0.agent_name||"",P=window.prompt("Agent handle (@name)",O);if(P===null)return;let h=P.trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||O,t=await cK(F0.chat_jid,{agentName:h});await Promise.allSettled([p1(),b1()]);let _0=t?.branch?.agent_name||h||O;H("Branch renamed",`@${_0}`,"info",3500)}catch(O){let P=O instanceof Error?O.message:String(O||"Could not rename branch."),C=/already in use/i.test(P||"")?`${P} Switch to or restore that existing session from the session manager.`:P;H("Could not rename branch",C||"Could not rename branch.","warning",5000)}finally{u4.current=!1,m4(!1);let O=Date.now()+uK;o4.current=O;let P=v9();if(P)P.inFlight=!1,P.cooldownUntil=O}},[F0,p1,b1,m4,H]),r6=x(async(G=null)=>{if(typeof window>"u")return;let X=typeof G==="string"&&G.trim()?G.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",P=X||F0?.chat_jid||O;if(!P){H("Could not prune branch","No active session is selected yet.","warning",4000);return}let C=(F0?.chat_jid===P?F0:null)||g0.find((e)=>e?.chat_jid===P)||B1.find((e)=>e?.chat_jid===P)||null;if(C?.chat_jid===(C?.root_chat_jid||C?.chat_jid)){H("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let t=`@${C?.agent_name||P}${C?.chat_jid?` — ${C.chat_jid}`:""}`;if(!window.confirm(`Prune ${t}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await lK(P),await Promise.allSettled([p1(),b1()]);let e=C?.root_chat_jid||"web:default";H("Branch pruned",`${t} has been archived.`,"info",3000);let o=n4(window.location.href,e,{chatOnly:N});$?.(o)}catch(e){let o=e instanceof Error?e.message:String(e||"Could not prune branch.");H("Could not prune branch",o||"Could not prune branch.","warning",5000)}},[B1,N,F0,g0,j,$,p1,b1,H]),Gj=x(async(G)=>{let X=typeof G==="string"?G.trim():"";if(!X||typeof p9!=="function")return;try{let O=await p9(X);await Promise.allSettled([p1(),b1()]);let P=O?.branch,C=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():X,h=typeof P?.agent_name==="string"&&P.agent_name.trim()?`@${P.agent_name.trim()}`:C;H("Branch restored",`Restored ${h}.`,"info",3200);let t=n4(window.location.href,C,{chatOnly:N});$?.(t)}catch(O){let P=O instanceof Error?O.message:String(O||"Could not restore branch.");H("Could not restore branch",P||"Could not restore branch.","warning",5000)}},[N,$,p1,b1,H]);p(()=>{if(!Q||typeof window>"u")return;let G=!1;return(async()=>{try{c_({status:"running",message:"Preparing a new chat branch…"});let X=await E$(q);if(G)return;let O=X?.branch,P=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let C=n4(window.location.href,P,{chatOnly:!0});$?.(C,{replace:!0})}catch(X){if(G)return;c_({status:"error",message:k5(X)})}})(),()=>{G=!0}},[Q,q,$]);let Xj=x((G)=>{if(!G||typeof G!=="object")return;let X=c1(G);if(X)B0.current.delete(X);m({...G,openedAt:new Date().toISOString()})},[]),H$=x(()=>{m((G)=>{let X=c1(G);if(G?.source==="live"&&X)B0.current.add(X);return null})},[]),Vj=x((G,X)=>{let O=typeof G?.kind==="string"?G.kind:"",P=c1(X);if(!O||!P)return;if(O==="widget.close"){H$();return}if(O==="widget.submit"){let C=U2(G?.payload),h=z2(G?.payload),t=new Date().toISOString();if(m((_0)=>{let e=c1(_0);if(!_0||e!==P)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,lastSubmitAt:t,lastHostUpdate:{type:"submit_pending",submittedAt:t,preview:C||null}}}}),!C){if(H("Widget submission received","The widget submitted data without a message payload yet.","info",3500),h)H$();return}(async()=>{try{let _0=await p4("default",C,null,[],L$?"queue":null,j);if(z$(_0),m((e)=>{let o=c1(e);if(!e||o!==P)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:_0?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:t,preview:C,queued:_0?.queued||null}}}}),H(_0?.queued==="followup"?"Widget submission queued":"Widget submission sent",_0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),h)H$()}catch(_0){m((e)=>{let o=c1(e);if(!e||o!==P)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:t,preview:C,error:_0?.message||"Could not send the widget message."}}}}),H("Widget submission failed",_0?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let C=new Date().toISOString(),h=Boolean(G?.payload?.buildDashboard||G?.payload?.dashboardKind==="internal-state"),t=Number(X?.runtimeState?.refreshCount||0)+1;if(m((_0)=>{let e=c1(_0);if(!_0||e!==P)return _0;return{..._0,runtimeState:{..._0.runtimeState||{},lastEventKind:O,lastEventPayload:G?.payload||null,...O==="widget.ready"?{readyAt:C,lastHostUpdate:{type:"ready_ack",at:C}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:C,refreshCount:t,lastHostUpdate:{type:h?"refresh_building":"refresh_ack",at:C,count:t,echo:G?.payload||null}}:{}}}}),O==="widget.request_refresh")if(h)(async()=>{try{let _0=await i6(G?.payload||null);m((e)=>{let o=c1(e);if(!e||o!==P)return e;return{...e,runtimeState:{...e.runtimeState||{},dashboard:_0,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:t,echo:G?.payload||null}}}}),H("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(_0){m((e)=>{let o=c1(e);if(!e||o!==P)return e;return{...e,runtimeState:{...e.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:t,error:_0?.message||"Could not build dashboard."}}}}),H("Dashboard build failed",_0?.message||"Could not build dashboard.","warning",5000)}})();else H("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[i6,j,H$,z$,L$,H]);p(()=>{B0.current.clear(),m(null)},[j]);let Wj=x(async()=>{if(typeof window>"u")return;try{let X=(await E$(j))?.branch,O=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([p1(),b1()]);let P=X?.agent_name?`@${X.agent_name}`:O;H("New branch created",`Switched to ${P}.`,"info",2500);let C=n4(window.location.href,O,{chatOnly:N});$?.(C)}catch(G){H("Could not create branch",k5(G),"warning",5000)}},[N,j,$,p1,b1,H]),n$=x((G,X)=>{if(typeof window>"u"||V)return;let O=typeof G==="string"&&G.trim()?G.trim():"";if(!O)return;let P=()=>{let _0=s0.get(O);if(!_0||_0.dirty)return;F4(O)},C=a2(O);if(!C){H("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000);return}let h=s2(window.location.href,O,{label:typeof X==="string"&&X.trim()?X.trim():void 0,chatJid:j});if(C.mode==="tab"){if(!window.open(h,C.target)){H("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}P();return}let t=n8(C);if(!t){H("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000);return}d8(t,{title:typeof X==="string"&&X.trim()?`Opening ${X}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."}),r8(t,h),P()},[j,F4,V,H]);p(()=>{let G=(O)=>{let P=O.detail?.path,C=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(P)D1(P,C?{label:C}:void 0)},X=(O)=>{let P=O.detail?.path,C=typeof O.detail?.label==="string"&&O.detail.label.trim()?O.detail.label.trim():void 0;if(P)n$(P,C)};return document.addEventListener("office-viewer:open-tab",G),document.addEventListener("drawio:open-tab",G),document.addEventListener("csv-viewer:open-tab",G),document.addEventListener("pdf-viewer:open-tab",G),document.addEventListener("image-viewer:open-tab",G),document.addEventListener("video-viewer:open-tab",G),document.addEventListener("vnc:open-tab",G),document.addEventListener("pane:popout",X),()=>{document.removeEventListener("office-viewer:open-tab",G),document.removeEventListener("drawio:open-tab",G),document.removeEventListener("csv-viewer:open-tab",G),document.removeEventListener("pdf-viewer:open-tab",G),document.removeEventListener("image-viewer:open-tab",G),document.removeEventListener("video-viewer:open-tab",G),document.removeEventListener("vnc:open-tab",G),document.removeEventListener("pane:popout",X)}},[n$,D1]);let Lj=x(async()=>{if(typeof window>"u"||V)return;let G=d2(j);if(!G){H("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let O=o2(window.location.href,j,{chatOnly:!0});if(!window.open(O,G.target))H("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let X=n8(G);if(!X){H("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}d8(X,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await E$(j))?.branch,C=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!C)throw Error("Branch fork did not return a chat id.");try{let t=await Y8();l1(Array.isArray(t?.chats)?t.chats:[])}catch{}try{let t=await v5(o0);t1(Array.isArray(t?.chats)?t.chats:[])}catch{}let h=n4(window.location.href,C,{chatOnly:!0});r8(X,h)}catch(O){r2(X),H("Could not open branch window",k5(O),"error",5000)}},[j,o0,V,H]);p(()=>{if(!h0)return;if(typeof window>"u")return;let G=b_.current;if(!G)return;if(!E4.current){let X=N$("editorWidth",null),O=d_.current||280;E4.current=Number.isFinite(X)?X:O}if(G.style.setProperty("--editor-width",`${E4.current}px`),!F1.current){let X=N$("dockHeight",null);F1.current=Number.isFinite(X)?X:200}G.style.setProperty("--dock-height",`${F1.current}px`)},[h0]),p(()=>{if(!m1||N)return;let G=(X)=>{if(X.ctrlKey&&X.key==="`")X.preventDefault(),Z_()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Z_,m1,N]),p(()=>{if(N)return;let G=(X)=>{if(X.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault(),Z4();return}if(X.key==="Escape"&&y1)X.preventDefault(),o1()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Z4,o1,y1,N]);let Uj=Boolean(p0&&p0===(l?.turn_id||U0));if(Q)return z`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${i1.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${i1.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return z`
            <div class=${`app-shell pane-popout${h0?" editor-open":""}`} ref=${b_}>
                <div class="editor-pane-container pane-popout-container">
                    ${h0&&!q1&&z`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${B_?z`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${O_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${z1.length>1&&z`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${z1.map((G)=>z`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${G.id===f0?" active":""}`}
                                                                onClick=${(X)=>{U_(G.id),X.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${G.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${f0&&v1.has(f0)&&z`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(G)=>{z_(f0),G.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:z`
                                    <div class="pane-popout-controls-label" aria-label=${O_}>${O_}</div>
                                `}
                        </div>
                    `}
                    ${h0?z`<div class="editor-pane-host" ref=${j_}></div>`:z`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${h0&&f0&&v1.has(f0)&&z`
                        <${x6}
                            getContent=${()=>N_.current?.getContent?.()}
                            path=${f0}
                            onClose=${()=>z_(f0)}
                        />
                    `}
                </div>
            </div>
        `;return z`
        <div class=${`app-shell${Y1?"":" workspace-collapsed"}${h0?" editor-open":""}${N?" chat-only":""}${y1?" zen-mode":""}`} ref=${b_}>
            ${!N&&z`
                <${V9}
                    onFileSelect=${u_}
                    visible=${Y1}
                    active=${Y1||h0}
                    onOpenEditor=${D1}
                    onOpenTerminalTab=${O4}
                    onOpenVncTab=${H4}
                    onToggleTerminal=${m1?Z_:void 0}
                    terminalVisible=${Boolean(m1&&Q_)}
                />
                <button
                    class=${`workspace-toggle-tab${Y1?" open":" closed"}`}
                    onClick=${qj}
                    title=${Y1?"Hide workspace":"Show workspace"}
                    aria-label=${Y1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${l9} onTouchStart=${i9}></div>
            `}
            ${r1&&z`
                <div class="editor-pane-container">
                    ${y1&&z`<div class="zen-hover-zone"></div>`}
                    ${h0&&z`
                        <${L9}
                            tabs=${z1}
                            activeId=${f0}
                            onActivate=${U_}
                            onClose=${F4}
                            onCloseOthers=${w4}
                            onCloseAll=${c$}
                            onTogglePin=${r4}
                            onTogglePreview=${z_}
                            previewTabs=${v1}
                            onToggleDock=${m1?Z_:void 0}
                            dockVisible=${m1&&Q_}
                            onToggleZen=${Z4}
                            zenMode=${y1}
                            onPopOutTab=${V?void 0:n$}
                        />
                    `}
                    ${h0&&z`<div class="editor-pane-host" ref=${j_}></div>`}
                    ${h0&&f0&&v1.has(f0)&&z`
                        <${x6}
                            getContent=${()=>N_.current?.getContent?.()}
                            path=${f0}
                            onClose=${()=>z_(f0)}
                        />
                    `}
                    ${m1&&Q_&&z`<div class="dock-splitter" onMouseDown=${r9} onTouchStart=${o9}></div>`}
                    ${m1&&z`<div class=${`dock-panel${Q_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&z`
                                    <button class="dock-panel-action" onClick=${()=>n$(w$,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${Z_} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${i_}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${n9} onTouchStart=${d9}></div>
            `}
            <div class="container">
                ${M&&k9()&&z`<div class="search-results-spacer"></div>`}
                ${N&&z`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F0?.agent_name?`@${F0.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${F0?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${g0.length>1&&z`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(G)=>n6(G.currentTarget.value)}
                                    >
                                        ${g0.map((G)=>z`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F0?.chat_jid&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${d6}
                                    title=${r_?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${r_}
                                >
                                    ${r_?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${F0?.chat_jid&&F0.chat_jid!==(F0.root_chat_jid||F0.chat_jid)&&z`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${r6}
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
                ${(A||M)&&z`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${t9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${A?`#${A}`:`Search: ${M} · ${e1}`}</span>
                    </div>
                `}
                <${p2}
                    posts=${e4}
                    hasMore=${m5?b5:!1}
                    onLoadMore=${m5?g6:void 0}
                    timelineRef=${f_}
                    onHashtagClick=${a9}
                    onMessageRef=${r}
                    onScrollToMessage=${Y0}
                    onFileRef=${f}
                    onPostClick=${void 0}
                    onDeletePost=${jj}
                    onOpenWidget=${Xj}
                    emptyMessage=${A?`No posts with #${A}`:M?`No results for "${M}"`:void 0}
                    agents=${L1}
                    user=${R4}
                    reverse=${m5}
                    removingPostIds=${$_}
                    searchQuery=${M}
                />
                <${P2}
                    status=${l}
                    draft=${X0}
                    plan=${$0}
                    thought=${Z0}
                    pendingRequest=${q0}
                    intent=${g}
                    turnId=${U0}
                    steerQueued=${Uj}
                    onPanelToggle=${e0}
                />
                <${Q2}
                    session=${w0}
                    onClose=${h5}
                    onRetry=${Kj}
                    onInject=${Qj}
                />
                <${H2}
                    widget=${n1}
                    onClose=${H$}
                    onWidgetEvent=${Vj}
                />
                <${v3}
                    onPost=${()=>{let{searchQuery:G,searchOpen:X}=f1.current||{};if(!G&&!X)O1(),o_()}}
                    onFocus=${o_}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${e9}
                    onSearchScopeChange=${R}
                    onEnterSearch=${_j}
                    onExitSearch=${$j}
                    fileRefs=${E}
                    onRemoveFileRef=${s4}
                    onClearFileRefs=${Q4}
                    onSetFileRefs=${F}
                    messageRefs=${s}
                    onRemoveMessageRef=${V0}
                    onClearMessageRefs=${W0}
                    onSetMessageRefs=${N0}
                    onSwitchChat=${n6}
                    onRenameSession=${d6}
                    isRenameSessionInProgress=${r_}
                    onCreateSession=${Wj}
                    onDeleteSession=${r6}
                    onRestoreSession=${Gj}
                    activeEditorPath=${N?null:f0}
                    onAttachEditorFile=${N?void 0:v}
                    onOpenFilePill=${f}
                    followupQueueCount=${y_}
                    followupQueueItems=${H1}
                    onInjectQueuedFollowup=${Nj}
                    onRemoveQueuedFollowup=${Zj}
                    onSubmitIntercept=${Yj}
                    onMessageResponse=${z$}
                    onSubmitError=${A0}
                    onPopOutChat=${V?void 0:Lj}
                    isAgentActive=${L$}
                    activeChatAgents=${B1}
                    currentChatJid=${j}
                    connectionStatus=${B}
                    activeModel=${v0}
                    modelUsage=${Z1}
                    thinkingLevel=${N1}
                    supportsThinking=${r0}
                    contextUsage=${G1}
                    notificationsEnabled=${T_}
                    notificationPermission=${S_}
                    onToggleNotifications=${U4}
                    onModelChange=${i0}
                    onModelStateChange=${g5}
                />
                <${I2}
                    request=${q0}
                    onRespond=${()=>{L0(null),P0.current=null}}
                />
            </div>
        </div>
    `}function oK(){let[_,$]=c(()=>typeof window>"u"?"http://localhost/":window.location.href);p(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=x((Z,Y={})=>{if(typeof window>"u")return;let{replace:K=!1}=Y||{},Q=new URL(String(Z||""),window.location.href).toString();if(K)window.history.replaceState(null,"",Q);else window.history.pushState(null,"",Q);$(window.location.href)},[]),N=y0(()=>new URL(_).searchParams,[_]);return z`<${rK} locationParams=${N} navigate=${j} />`}A3(z`<${oK} />`,document.getElementById("app"));

//# debugId=458330B05745C95F64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
