var S5=Object.defineProperty;var R5=(_)=>_;function v5(_,$){this[_]=R5.bind(null,$)}var u5=(_,$)=>{for(var j in $)S5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:v5.bind($,j)})};var E1,K0,V8,m5,q2,o3,G8,Q8,q8,q4,K4,V4,g5,H1={},D1=[],p5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A1=Array.isArray;function $2(_,$){for(var j in $)_[j]=$[j];return _}function X4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function X8(_,$,j){var Z,N,Y,z={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:z[Y]=$[Y];if(arguments.length>2&&(z.children=arguments.length>3?E1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)z[Y]===void 0&&(z[Y]=_.defaultProps[Y]);return U1(_,z,Z,N,null)}function U1(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++V8:N,__i:-1,__u:0};return N==null&&K0.vnode!=null&&K0.vnode(Y),Y}function y1(_){return _.children}function O1(_,$){this.props=_,this.context=$}function R2(_,$){if($==null)return _.__?R2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?R2(_):null}function c5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=$2({},$);Y.__v=$.__v+1,K0.vnode&&K0.vnode(Y),L4(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?R2($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,U8(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&L8(Y)}}function L8(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),L8(_)}function r3(_){(!_.__d&&(_.__d=!0)&&q2.push(_)&&!J1.__r++||o3!=K0.debounceRendering)&&((o3=K0.debounceRendering)||G8)(J1)}function J1(){try{for(var _,$=1;q2.length;)q2.length>$&&q2.sort(Q8),_=q2.shift(),$=q2.length,c5(_)}finally{q2.length=J1.__r=0}}function W8(_,$,j,Z,N,Y,z,G,L,q,W){var X,F,P,C,g,u,E,x=Z&&Z.__k||D1,m=$.length;for(L=h5(j,$,x,L,m),X=0;X<m;X++)(P=j.__k[X])!=null&&(F=P.__i!=-1&&x[P.__i]||H1,P.__i=X,u=L4(_,P,F,N,Y,z,G,L,q,W),C=P.__e,P.ref&&F.ref!=P.ref&&(F.ref&&W4(F.ref,null,P),W.push(P.ref,P.__c||C,P)),g==null&&C!=null&&(g=C),(E=!!(4&P.__u))||F.__k===P.__k?L=B8(P,L,_,E):typeof P.type=="function"&&u!==void 0?L=u:C&&(L=C.nextSibling),P.__u&=-7);return j.__e=g,L}function h5(_,$,j,Z,N){var Y,z,G,L,q,W=j.length,X=W,F=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(z=$[Y])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[Y]=U1(null,z,null,null,null):A1(z)?z=_.__k[Y]=U1(y1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[Y]=U1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[Y]=z,L=Y+F,z.__=_,z.__b=_.__b+1,G=null,(q=z.__i=i5(z,j,L,X))!=-1&&(X--,(G=j[q])&&(G.__u|=2)),G==null||G.__v==null?(q==-1&&(N>W?F--:N<W&&F++),typeof z.type!="function"&&(z.__u|=4)):q!=L&&(q==L-1?F--:q==L+1?F++:(q>L?F--:F++,z.__u|=4))):_.__k[Y]=null;if(X)for(Y=0;Y<W;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=R2(G)),F8(G,G));return Z}function B8(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=B8(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=R2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function i5(_,$,j,Z){var N,Y,z,G=_.key,L=_.type,q=$[j],W=q!=null&&(2&q.__u)==0;if(q===null&&G==null||W&&G==q.key&&L==q.type)return j;if(Z>(W?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((q=$[z=N>=0?N--:Y++])!=null&&(2&q.__u)==0&&G==q.key&&L==q.type)return z}return-1}function a3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||p5.test($)?j:j+"px"}function B1(_,$,j,Z,N){var Y,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||a3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||a3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(q8,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=q4,_.addEventListener($,Y?V4:K4,Y)):_.removeEventListener($,Y?V4:K4,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function t3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=q4++;else if($.t<j.u)return;return j(K0.event?K0.event($):$)}}}function L4(_,$,j,Z,N,Y,z,G,L,q){var W,X,F,P,C,g,u,E,x,m,A,S,a,Z_,N_,e=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),Y=[G=$.__e=j.__e]),(W=K0.__b)&&W($);_:if(typeof e=="function")try{if(E=$.props,x=e.prototype&&e.prototype.render,m=(W=e.contextType)&&Z[W.__c],A=W?m?m.props.value:W.__:Z,j.__c?u=(X=$.__c=j.__c).__=X.__E:(x?$.__c=X=new e(E,A):($.__c=X=new O1(E,A),X.constructor=e,X.render=n5),m&&m.sub(X),X.state||(X.state={}),X.__n=Z,F=X.__d=!0,X.__h=[],X._sb=[]),x&&X.__s==null&&(X.__s=X.state),x&&e.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=$2({},X.__s)),$2(X.__s,e.getDerivedStateFromProps(E,X.__s))),P=X.props,C=X.state,X.__v=$,F)x&&e.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),x&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(x&&e.getDerivedStateFromProps==null&&E!==P&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(E,A),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(E,X.__s,A)===!1){$.__v!=j.__v&&(X.props=E,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(r){r&&(r.__=$)}),D1.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&z.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(E,X.__s,A),x&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(P,C,g)})}if(X.context=A,X.props=E,X.__P=_,X.__e=!1,S=K0.__r,a=0,x)X.state=X.__s,X.__d=!1,S&&S($),W=X.render(X.props,X.state,X.context),D1.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,S&&S($),W=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++a<25);X.state=X.__s,X.getChildContext!=null&&(Z=$2($2({},Z),X.getChildContext())),x&&!F&&X.getSnapshotBeforeUpdate!=null&&(g=X.getSnapshotBeforeUpdate(P,C)),Z_=W!=null&&W.type===y1&&W.key==null?O8(W.props.children):W,G=W8(_,A1(Z_)?Z_:[Z_],$,j,Z,N,Y,z,G,L,q),X.base=$.__e,$.__u&=-161,X.__h.length&&z.push(X),u&&(X.__E=X.__=null)}catch(r){if($.__v=null,L||Y!=null)if(r.then){for($.__u|=L?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(N_=Y.length;N_--;)X4(Y[N_]);G4($)}else $.__e=j.__e,$.__k=j.__k,r.then||G4($);K0.__e(r,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=l5(j.__e,$,j,Z,N,Y,z,L,q);return(W=K0.diffed)&&W($),128&$.__u?void 0:G}function G4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(G4))}function U8(_,$,j){for(var Z=0;Z<j.length;Z++)W4(j[Z],j[++Z],j[++Z]);K0.__c&&K0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){K0.__e(Y,N.__v)}})}function O8(_){return typeof _!="object"||_==null||_.__b>0?_:A1(_)?_.map(O8):$2({},_)}function l5(_,$,j,Z,N,Y,z,G,L){var q,W,X,F,P,C,g,u=j.props||H1,E=$.props,x=$.type;if(x=="svg"?N="http://www.w3.org/2000/svg":x=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((P=Y[q])&&"setAttribute"in P==!!x&&(x?P.localName==x:P.nodeType==3)){_=P,Y[q]=null;break}}if(_==null){if(x==null)return document.createTextNode(E);_=document.createElementNS(N,x,E.is&&E),G&&(K0.__m&&K0.__m($,Y),G=!1),Y=null}if(x==null)u===E||G&&_.data==E||(_.data=E);else{if(Y=Y&&E1.call(_.childNodes),!G&&Y!=null)for(u={},q=0;q<_.attributes.length;q++)u[(P=_.attributes[q]).name]=P.value;for(q in u)P=u[q],q=="dangerouslySetInnerHTML"?X=P:q=="children"||(q in E)||q=="value"&&("defaultValue"in E)||q=="checked"&&("defaultChecked"in E)||B1(_,q,null,P,N);for(q in E)P=E[q],q=="children"?F=P:q=="dangerouslySetInnerHTML"?W=P:q=="value"?C=P:q=="checked"?g=P:G&&typeof P!="function"||u[q]===P||B1(_,q,P,u[q],N);if(W)G||X&&(W.__html==X.__html||W.__html==_.innerHTML)||(_.innerHTML=W.__html),$.__k=[];else if(X&&(_.innerHTML=""),W8($.type=="template"?_.content:_,A1(F)?F:[F],$,j,Z,x=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,z,Y?Y[0]:j.__k&&R2(j,0),G,L),Y!=null)for(q=Y.length;q--;)X4(Y[q]);G||(q="value",x=="progress"&&C==null?_.removeAttribute("value"):C!=null&&(C!==_[q]||x=="progress"&&!C||x=="option"&&C!=u[q])&&B1(_,q,C,u[q],N),q="checked",g!=null&&g!=_[q]&&B1(_,q,g,u[q],N))}return _}function W4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){K0.__e(N,j)}}function F8(_,$,j){var Z,N;if(K0.unmount&&K0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||W4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){K0.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&F8(Z[N],$,j||typeof _.type!="function");j||X4(_.__e),_.__c=_.__=_.__e=void 0}function n5(_,$,j){return this.constructor(_,j)}function H8(_,$,j){var Z,N,Y,z;$==document&&($=document.documentElement),K0.__&&K0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],z=[],L4($,_=(!Z&&j||$).__k=X8(y1,null,[_]),N||H1,H1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?E1.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,z),U8(Y,_,z)}E1=D1.slice,K0={__e:function(_,$,j,Z){for(var N,Y,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(G){_=G}throw _}},V8=0,m5=function(_){return _!=null&&_.constructor===void 0},O1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$2({},this.state),typeof _=="function"&&(_=_($2({},j),this.props)),_&&$2(j,_),_!=null&&this.__v&&($&&this._sb.push($),r3(this))},O1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),r3(this))},O1.prototype.render=y1,q2=[],G8=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q8=function(_,$){return _.__v.__b-$.__v.__b},J1.__r=0,q8=/(PointerCapture)$|Capture$/i,q4=0,K4=t3(!1),V4=t3(!0),g5=0;var t2,T0,z4,e3,e2=0,D8=[],I0=K0,_8=I0.__b,$8=I0.__r,j8=I0.diffed,Z8=I0.__c,N8=I0.unmount,Y8=I0.__;function B4(_,$){I0.__h&&I0.__h(T0,_,e2||$),e2=0;var j=T0.__H||(T0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return e2=1,d5(E8,_)}function d5(_,$,j){var Z=B4(t2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):E8(void 0,$),function(G){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,G);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=T0,!T0.__f)){var N=function(G,L,q){if(!Z.__c.__H)return!0;var W=Z.__c.__H.__.filter(function(F){return F.__c});if(W.every(function(F){return!F.__N}))return!Y||Y.call(this,G,L,q);var X=Z.__c.props!==G;return W.some(function(F){if(F.__N){var P=F.__[0];F.__=F.__N,F.__N=void 0,P!==F.__[0]&&(X=!0)}}),Y&&Y.call(this,G,L,q)||X};T0.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:z}=T0;T0.componentWillUpdate=function(G,L,q){if(this.__e){var W=Y;Y=void 0,N(G,L,q),Y=W}z&&z.call(this,G,L,q)},T0.shouldComponentUpdate=N}return Z.__N||Z.__}function b(_,$){var j=B4(t2++,3);!I0.__s&&J8(j.__H,$)&&(j.__=_,j.u=$,T0.__H.__h.push(j))}function k(_){return e2=5,I_(function(){return{current:_}},[])}function I_(_,$){var j=B4(t2++,7);return J8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return e2=8,I_(function(){return _},$)}function s5(){for(var _;_=D8.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(F1),$.__h.some(Q4),$.__h=[]}catch(j){$.__h=[],I0.__e(j,_.__v)}}}I0.__b=function(_){T0=null,_8&&_8(_)},I0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Y8&&Y8(_,$)},I0.__r=function(_){$8&&$8(_),t2=0;var $=(T0=_.__c).__H;$&&(z4===T0?($.__h=[],T0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(F1),$.__h.some(Q4),$.__h=[],t2=0)),z4=T0},I0.diffed=function(_){j8&&j8(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(D8.push($)!==1&&e3===I0.requestAnimationFrame||((e3=I0.requestAnimationFrame)||o5)(s5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),z4=T0=null},I0.__c=function(_,$){$.some(function(j){try{j.__h.some(F1),j.__h=j.__h.filter(function(Z){return!Z.__||Q4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],I0.__e(Z,j.__v)}}),Z8&&Z8(_,$)},I0.unmount=function(_){N8&&N8(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{F1(Z)}catch(N){$=N}}),j.__H=void 0,$&&I0.__e($,j.__v))};var z8=typeof requestAnimationFrame=="function";function o5(_){var $,j=function(){clearTimeout(Z),z8&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);z8&&($=requestAnimationFrame(j))}function F1(_){var $=T0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T0=$}function Q4(_){var $=T0;_.__c=_.__(),T0=$}function J8(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function E8(_,$){return typeof $=="function"?$(_):$}var A8=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var z=$[Y++],G=$[Y]?($[0]|=z?1:2,j[$[Y++]]):$[++Y];z===3?Z[0]=G:z===4?Z[1]=Object.assign(Z[1]||{},G):z===5?(Z[1]=Z[1]||{})[$[++Y]]=G:z===6?Z[1][$[++Y]]+=G+"":z?(N=_.apply(G,A8(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(G)}return Z},K8=new Map;function r5(_){var $=K8.get(this);return $||($=new Map,K8.set(this,$)),($=A8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,z="",G="",L=[0],q=function(F){Y===1&&(F||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,z):Y===3&&(F||z)?(L.push(3,F,z),Y=2):Y===2&&z==="..."&&F?L.push(4,F,0):Y===2&&z&&!F?L.push(5,0,!0,z):Y>=5&&((z||!F&&Y===5)&&(L.push(Y,0,z,N),Y=6),F&&(L.push(Y,F,0,N),Y=6)),z=""},W=0;W<j.length;W++){W&&(Y===1&&q(),q(W));for(var X=0;X<j[W].length;X++)Z=j[W][X],Y===1?Z==="<"?(q(),L=[L],Y=3):z+=Z:Y===4?z==="--"&&Z===">"?(Y=1,z=""):z=Z+z[0]:G?Z===G?G="":z+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(q(),Y=1):Y&&(Z==="="?(Y=5,N=z,z=""):Z==="/"&&(Y<5||j[W][X+1]===">")?(q(),Y===3&&(L=L[0]),Y=L,(L=L[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),Y=2):z+=Z),Y===3&&z==="!--"&&(Y=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var B=r5.bind(X8);var Y$={};u5(Y$,{uploadWorkspaceFile:()=>P1,uploadMedia:()=>A4,updateWorkspaceFile:()=>X7,submitAdaptiveCardAction:()=>y4,streamSidePrompt:()=>G7,steerAgentQueueItem:()=>V7,setWorkspaceVisibility:()=>Z1,setAgentThoughtVisibility:()=>M4,sendPeerAgentMessage:()=>N7,sendAgentMessage:()=>y2,searchPosts:()=>O4,restoreChatBranch:()=>Z7,respondToAgentRequest:()=>k1,renameWorkspaceFile:()=>C4,renameChatBranch:()=>$7,removeAgentQueueItem:()=>K7,pruneChatBranch:()=>j7,moveWorkspaceEntry:()=>b4,getWorkspaceTree:()=>j1,getWorkspaceRawUrl:()=>M1,getWorkspaceFile:()=>x4,getWorkspaceDownloadUrl:()=>I1,getWorkspaceBranch:()=>q7,getTimeline:()=>A2,getThumbnailUrl:()=>I4,getThread:()=>F4,getPostsByHashtag:()=>U4,getMediaUrl:()=>J$,getMediaText:()=>T4,getMediaInfo:()=>v2,getMediaBlob:()=>Q7,getChatBranches:()=>_7,getAgents:()=>J4,getAgentThought:()=>P4,getAgentStatus:()=>E4,getAgentQueueState:()=>z7,getAgentModels:()=>$1,getAgentContext:()=>Y7,getActiveChatAgents:()=>D4,forkChatBranch:()=>_1,deleteWorkspaceFile:()=>S4,deletePost:()=>H4,createWorkspaceFile:()=>f4,createReply:()=>e5,createPost:()=>t5,attachWorkspaceFile:()=>w4,addToWhitelist:()=>k4,SSEClient:()=>T1});async function i_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function y8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function a5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:G}=await j.read();if(G)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let W=y8(q);if(W)$(W.event,W.data)}}N+=Z.decode();let Y=y8(N);if(Y)$(Y.event,Y.data)}async function A2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i_(Z)}async function U4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function O4(_,$=50,j=0,Z=null,N="current",Y=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",L=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${G}${L}`)}async function F4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i_(`/thread/${_}${j}`)}async function t5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function e5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function H4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i_(N,{method:"DELETE"})}async function y2(_,$,j=null,Z=[],N=null,Y=null){let z=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return i_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function D4(){return i_("/agent/active-chats")}async function _7(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return i_(`/agent/branches${Z}`)}async function _1(_,$={}){return i_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function $7(_,$={}){return i_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function j7(_){return i_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Z7(_,$={}){return i_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function N7(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i_("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function J4(){return i_("/agent/roster")}async function E4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function Y7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function z7(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/queue-state${$}`)}async function K7(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function V7(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function $1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function A4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function k1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function y4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function G7(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await a5(j,(Y,z)=>{if($.onEvent?.(Y,z),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(Y==="side_prompt_done")Z=z;else if(Y==="side_prompt_error")N=z}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function k4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function P4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(j)}async function M4(_,$,j){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function J$(_){return`/media/${_}`}function I4(_){return`/media/${_}/thumbnail`}async function v2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function T4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Q7(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function j1(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i_(Z)}async function q7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i_($)}async function x4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i_(N)}async function X7(_,$){return i_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function w4(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function P1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),z=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:Z});if(!G.ok){let L=await G.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${G.status}`);throw q.status=G.status,q.code=L.code,q}return G.json()}async function f4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function C4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function b4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function Z1(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function M1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function I1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class T1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function x1(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function L7(_,$){let j=x1(_),Z=x1($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function R4(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function v4(_,$,j=Date.now(),Z=700){let N=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!N.value||!Number.isFinite(N.updatedAt)||j-N.updatedAt>Z?Y:`${N.value}${Y}`,updatedAt:j}}function W7(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let N=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let z=0;z<j;z+=1)Y.push((N+z)%j);return Y}function B7(_,$,j=0,Z=(N)=>N){let N=x1($);if(!N)return-1;let Y=Array.isArray(_)?_:[],z=W7(Y.length,j),G=Y.map((L)=>x1(Z(L)));for(let L of z)if(G[L].startsWith(N))return L;for(let L of z)if(G[L].includes(N))return L;return-1}function u4(_,$,j=-1,Z=(N)=>N){let N=Array.isArray(_)?_:[];if(j>=0&&j<N.length){let Y=Z(N[j]);if(L7(Y,$))return j}return B7(N,$,0,Z)}function z$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function e_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function u2(_,$=!1){let j=z$(_);if(j===null)return $;return j==="true"}function m2(_,$=null){let j=z$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function w1(_){return String(_||"").trim().toLowerCase()}function m4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return w1($[1]||"")}function k8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=w1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function P8(_,$,j={}){let Z=m4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return k8(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return w1(Y?.agent_name).startsWith(Z)})}function g4(_){let $=w1(_);return $?`@${$} `:""}function M8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return k8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function I8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let Y=460+N*68+(j?40:0);return Z>=Y}function b$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:z="file"}){let G=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,W=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${W}
      <span class=${L}>${$}</span>
      ${Z&&B`
        <button
          class=${q}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var U7=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function O7({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",G=`${Z!=null?`Context: ${T8(Z)} / ${T8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,q=2*Math.PI*9,W=j/100*q,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${G}
            aria-label="Compact context"
            onClick=${(F)=>{F.preventDefault(),F.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function T8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function x8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:z,onExitSearch:G,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:W,messageRefs:X=[],onRemoveMessageRef:F,onClearMessageRefs:P,activeModel:C=null,modelUsage:g=null,thinkingLevel:u=null,supportsThinking:E=!1,contextUsage:x=null,onContextCompact:m,notificationsEnabled:A=!1,notificationPermission:S="default",onToggleNotifications:a,onModelChange:Z_,onModelStateChange:N_,activeEditorPath:e=null,onAttachEditorFile:r,onOpenFilePill:z_,followupQueueItems:f0=[],onInjectQueuedFollowup:y_,onRemoveQueuedFollowup:$_,onSubmitIntercept:Y_,onMessageResponse:V_,onPopOutChat:X_,isAgentActive:U_=!1,activeChatAgents:L_=[],currentChatJid:k_="web:default",connectionStatus:G_="connected",onSetFileRefs:d_,onSetMessageRefs:l_,onSubmitError:V0,onSwitchChat:T_,onRenameSession:j0,isRenameSessionInProgress:g_=!1,onCreateSession:C0,onDeleteSession:d,onRestoreSession:x_}){let[Q_,D_]=v(""),[R_,G0]=v(""),[n_,s_]=v([]),[p_,o_]=v(!1),[w_,b_]=v([]),[c_,x0]=v(0),[J0,r_]=v(!1),[Q0,X0]=v([]),[S_,E0]=v(0),[w0,P_]=v(!1),[Y0,L0]=v(!1),[E_,W0]=v(!1),[f_,C_]=v(!1),[v_,e0]=v([]),[w,s]=v(0),[F_,M_]=v(0),[Z0,i0]=v(!1),[y$,V$]=v(0),[A0,_$]=v(null),A_=k(null),N2=k(null),b0=k(null),G$=k(null),k$=k(null),h$=k(null),W2=k(null),s0=k(null),$$=k({value:"",updatedAt:0}),B0=k(0),N0=k(!1),i$=200,a_=(Q)=>{let J=new Set,f=[];for(let h of Q||[]){if(typeof h!=="string")continue;let K_=h.trim();if(!K_||J.has(K_))continue;J.add(K_),f.push(K_)}return f},v0=()=>{let Q=z$("piclaw_compose_history");if(!Q)return[];try{let J=JSON.parse(Q);if(!Array.isArray(J))return[];return a_(J)}catch{return[]}},S0=(Q)=>{e_("piclaw_compose_history",JSON.stringify(Q))},Q$=k(v0()),q$=k(-1),P$=k(""),x2=Q_.trim()||n_.length>0||L.length>0||X.length>0,M$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),B2=typeof window<"u"&&typeof Notification<"u",w2=typeof window<"u"?Boolean(window.isSecureContext):!1,l$=B2&&w2&&S!=="denied",j$=S==="granted"&&A,X$=j$?"Disable notifications":"Enable notifications",L$=n_.length>0||L.length>0||X.length>0,y0=G_==="disconnected"?"Reconnecting":String(G_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),o0=G_==="disconnected"?"Reconnecting":`Connection: ${y0}`,n$=(Array.isArray(L_)?L_:[]).filter((Q)=>!Q?.archived_at),S$=M8(n$,{currentChatJid:k_,limit:4}),U0=!j&&I8({footerWidth:y$,visibleAgentCount:S$.length,hasContextIndicator:Boolean(x&&x.percent!=null)}),O0=(()=>{for(let Q of Array.isArray(L_)?L_:[]){let J=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(J&&J===k_)return Q}return null})(),l0=Boolean(O0&&O0.chat_jid===(O0.root_chat_jid||O0.chat_jid)),d$=I_(()=>{let Q=new Set,J=[];for(let f of Array.isArray(L_)?L_:[]){let h=typeof f?.chat_jid==="string"?f.chat_jid.trim():"";if(!h||h===k_||Q.has(h))continue;if(!(typeof f?.agent_name==="string"?f.agent_name.trim():""))continue;Q.add(h),J.push(f)}return J},[L_,k_]),R$=d$.length>0,v$=R$&&typeof T_==="function",u0=R$&&typeof x_==="function",m0=Boolean(g_||N0.current),t_=!j&&typeof j0==="function"&&!m0,n0=!j&&typeof C0==="function",W$=!j&&typeof d==="function"&&!l0,B$=!j&&(v$||u0||t_||n0||W$),r0=C||"",k0=E&&u?` (${u})`:"",I$=k0.trim()?`${u}`:"",s$=typeof g?.hint_short==="string"?g.hint_short.trim():"",Y2=[I$||null,s$||null].filter(Boolean).join(" • "),T$=[r0?`Current model: ${r0}${k0}`:null,g?.plan?`Plan: ${g.plan}`:null,s$||null,g?.primary?.reset_description||null,g?.secondary?.reset_description||null].filter(Boolean),u$=Y0?"Switching model…":T$.join(" • ")||`Current model: ${r0}${k0} (tap to open model picker)`,o$=(Q)=>{if(!Q||typeof Q!=="object")return;let J=Q.model??Q.current;if(typeof N_==="function")N_({model:J??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(J&&typeof Z_==="function")Z_(J)},P0=(Q)=>{let J=Q||A_.current;if(!J)return;J.style.height="auto",J.style.height=`${J.scrollHeight}px`,J.style.overflowY="hidden"},x$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),h=-1;for(let m_=0;m_<f.length;m_+=1)if(f[m_].trim()==="Files:"&&f[m_+1]&&/^\s*-\s+/.test(f[m_+1])){h=m_;break}if(h===-1)return{content:Q,fileRefs:[]};let K_=[],H_=h+1;for(;H_<f.length;H_+=1){let m_=f[H_];if(/^\s*-\s+/.test(m_))K_.push(m_.replace(/^\s*-\s+/,"").trim());else if(!m_.trim())break;else break}if(K_.length===0)return{content:Q,fileRefs:[]};let u_=f.slice(0,h),t0=f.slice(H_);return{content:[...u_,...t0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:K_}},r$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),h=-1;for(let m_=0;m_<f.length;m_+=1)if(f[m_].trim()==="Referenced messages:"&&f[m_+1]&&/^\s*-\s+/.test(f[m_+1])){h=m_;break}if(h===-1)return{content:Q,messageRefs:[]};let K_=[],H_=h+1;for(;H_<f.length;H_+=1){let m_=f[H_];if(/^\s*-\s+/.test(m_)){let z0=m_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(z0)K_.push(z0[1])}else if(!m_.trim())break;else break}if(K_.length===0)return{content:Q,messageRefs:[]};let u_=f.slice(0,h),t0=f.slice(H_);return{content:[...u_,...t0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:K_}},U2=(Q)=>{let J=x$(Q||""),f=r$(J.content||"");return{text:f.content||"",fileRefs:J.fileRefs,messageRefs:f.messageRefs}},z2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){r_(!1),b_([]);return}let J=Q.toLowerCase().split(" ")[0];if(J.length<1){r_(!1),b_([]);return}let f=U7.filter((h)=>h.name.startsWith(J)||h.name.replace(/-/g,"").startsWith(J.replace(/-/g,"")));if(f.length>0&&!(f.length===1&&f[0].name===J))P_(!1),X0([]),b_(f),x0(0),r_(!0);else r_(!1),b_([])},w$=(Q)=>{let J=Q_,f=J.indexOf(" "),h=f>=0?J.slice(f):"",K_=Q.name+h;D_(K_),r_(!1),b_([]),requestAnimationFrame(()=>{let H_=A_.current;if(!H_)return;let u_=K_.length;H_.selectionStart=u_,H_.selectionEnd=u_,H_.focus()})},m$=(Q)=>{if(m4(Q)==null){P_(!1),X0([]);return}let J=P8(n$,Q,{currentChatJid:k_});if(J.length>0&&!(J.length===1&&g4(J[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))r_(!1),b_([]),X0(J),E0(0),P_(!0);else P_(!1),X0([])},g0=(Q)=>{let J=g4(Q?.agent_name);if(!J)return;D_(J),P_(!1),X0([]),requestAnimationFrame(()=>{let f=A_.current;if(!f)return;let h=J.length;f.selectionStart=h,f.selectionEnd=h,f.focus()})},a0=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!v$&&!u0&&!t_&&!n0&&!W$)return;$$.current={value:"",updatedAt:0},W0(!1),r_(!1),b_([]),P_(!1),X0([]),C_((J)=>!J)},a$=(Q)=>{let J=typeof Q==="string"?Q.trim():"";if(C_(!1),!J||J===k_){requestAnimationFrame(()=>A_.current?.focus());return}T_?.(J)},K2=async(Q)=>{let J=typeof Q==="string"?Q.trim():"";if(C_(!1),!J||typeof x_!=="function"){requestAnimationFrame(()=>A_.current?.focus());return}try{await x_(J)}catch(f){console.warn("Failed to restore session:",f),requestAnimationFrame(()=>A_.current?.focus())}},f$=(Q)=>{let J=typeof Q?.chat_jid==="string"?Q.chat_jid.trim():"";if(J&&typeof T_==="function"){T_(J);return}g0(Q)},V2=(Q)=>{let f=(Array.isArray(Q)?Q:[]).findIndex((h)=>!h?.disabled);return f>=0?f:0},F0=I_(()=>{let Q=[];for(let J of d$){let f=Boolean(J?.archived_at),h=typeof J?.agent_name==="string"?J.agent_name.trim():"",K_=typeof J?.chat_jid==="string"?J.chat_jid.trim():"";if(!h||!K_)continue;Q.push({type:"session",key:`session:${K_}`,label:`@${h} — ${K_}${J?.is_active?" active":""}${f?" archived":""}`,chat:J,disabled:f?!u0:!v$})}if(n0)Q.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(t_)Q.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:m0});if(W$)Q.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return Q},[d$,u0,v$,n0,t_,W$,m0]),t$=async(Q)=>{if(Q?.preventDefault)Q.preventDefault();if(Q?.stopPropagation)Q.stopPropagation();if(typeof j0!=="function"||g_||N0.current)return;N0.current=!0,C_(!1);try{await j0()}catch(J){console.warn("Failed to rename session:",J)}finally{N0.current=!1}requestAnimationFrame(()=>A_.current?.focus())},g$=async()=>{if(typeof C0!=="function")return;C_(!1);try{await C0()}catch(Q){console.warn("Failed to create session:",Q)}requestAnimationFrame(()=>A_.current?.focus())},O2=async()=>{if(typeof d!=="function")return;C_(!1);try{await d(k_)}catch(Q){console.warn("Failed to delete session:",Q)}requestAnimationFrame(()=>A_.current?.focus())},U$=(Q)=>{if(j)G0(Q);else D_(Q),z2(Q),m$(Q);requestAnimationFrame(()=>P0())},G2=(Q)=>{let J=j?R_:Q_,f=J&&!J.endsWith(`
`)?`
`:"",h=`${J}${f}${Q}`.trimStart();U$(h)},F2=(Q)=>{let J=Q?.command?.model_label;if(J)return J;let f=Q?.command?.message;if(typeof f==="string"){let h=f.match(/•\s+([^\n]+?)\s+\(current\)/);if(h?.[1])return h[1].trim()}return null},H2=async(Q)=>{if(j||Y0)return;L0(!0);try{let J=await y2("default",Q,null,[],null,k_),f=F2(J);o$({model:f??C??null,thinking_level:J?.command?.thinking_level,supports_thinking:J?.command?.supports_thinking});try{let h=await $1(k_);if(h)o$(h)}catch{}return _?.(),!0}catch(J){return console.error("Failed to switch model:",J),alert("Failed to switch model: "+J.message),!1}finally{L0(!1)}},c2=async()=>{await H2("/cycle-model")},D2=async(Q)=>{if(!Q||Y0)return;if(await H2(`/model ${Q}`))W0(!1)},W_=(Q)=>{if(!Q||Q.disabled)return;if(Q.type==="session"){let J=Q.chat;if(J?.archived_at)K2(J.chat_jid);else a$(J.chat_jid);return}if(Q.type==="action"){if(Q.action==="new"){g$();return}if(Q.action==="rename"){t$();return}if(Q.action==="delete")O2()}},f2=(Q)=>{Q.preventDefault(),Q.stopPropagation(),$$.current={value:"",updatedAt:0},C_(!1),W0((J)=>!J)},h2=async()=>{if(j)return;m?.(),await C$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},i2=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return U_?"queue":null},C$=async(Q,J,f={})=>{let{includeMedia:h=!0,includeFileRefs:K_=!0,includeMessageRefs:H_=!0,clearAfterSubmit:u_=!0,recordHistory:t0=!0}=f||{},p$=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:Q_,m_=typeof p$==="string"?p$:"";if(!m_.trim()&&(h?n_.length===0:!0)&&(K_?L.length===0:!0)&&(H_?X.length===0:!0))return;r_(!1),b_([]),P_(!1),X0([]),C_(!1),_$(null);let z0=h?[...n_]:[],C2=K_?[...L]:[],e$=H_?[...X]:[],_2=m_.trim();if(t0&&_2){let H0=Q$.current,h0=a_(H0.filter((J2)=>J2!==_2));if(h0.push(_2),h0.length>200)h0.splice(0,h0.length-200);Q$.current=h0,S0(h0),q$.current=-1,P$.current=""}let N$=()=>{if(h)s_([...z0]);if(K_)d_?.(C2);if(H_)l_?.(e$);D_(_2),requestAnimationFrame(()=>P0())};if(u_)D_(""),s_([]),W?.(),P?.();(async()=>{try{if(await Y_?.({content:_2,submitMode:J,fileRefs:C2,messageRefs:e$,mediaFiles:z0})){_?.();return}let h0=[];for(let O$ of z0){let S2=await A4(O$);h0.push(S2.id)}let J2=C2.length?`Files:
${C2.map((O$)=>`- ${O$}`).join(`
`)}`:"",Q2=e$.length?`Referenced messages:
${e$.map((O$)=>`- message:${O$}`).join(`
`)}`:"",b2=h0.length?`Attachments:
${h0.map((O$,S2)=>{let t1=z0[S2]?.name||`attachment-${S2+1}`;return`- attachment:${O$} (${t1})`}).join(`
`)}`:"",a1=[_2,J2,Q2,b2].filter(Boolean).join(`

`),E2=await y2("default",a1,null,h0,i2(J),k_);if(V_?.(E2),E2?.command){o$({model:E2.command.model_label??C??null,thinking_level:E2.command.thinking_level,supports_thinking:E2.command.supports_thinking});try{let O$=await $1(k_);if(O$)o$(O$)}catch{}}_?.()}catch(H0){if(u_)N$();let h0=H0?.message||"Failed to send message.";_$(h0),V0?.(h0),console.error("Failed to post:",H0)}})()},l2=(Q)=>{y_?.(Q)},U=M((Q)=>{if(j||!E_&&!f_||Q?.isComposing)return!1;let J=()=>{Q.preventDefault?.(),Q.stopPropagation?.()},f=()=>{$$.current={value:"",updatedAt:0}};if(Q.key==="Escape"){if(J(),f(),E_)W0(!1);if(f_)C_(!1);return!0}if(E_){if(Q.key==="ArrowDown"){if(J(),f(),v_.length>0)s((h)=>(h+1)%v_.length);return!0}if(Q.key==="ArrowUp"){if(J(),f(),v_.length>0)s((h)=>(h-1+v_.length)%v_.length);return!0}if((Q.key==="Enter"||Q.key==="Tab")&&v_.length>0)return J(),f(),D2(v_[Math.max(0,Math.min(w,v_.length-1))]),!0;if(R4(Q)&&v_.length>0){J();let h=v4($$.current,Q.key);$$.current=h;let K_=u4(v_,h.value,w,(H_)=>H_);if(K_>=0)s(K_);return!0}}if(f_){if(Q.key==="ArrowDown"){if(J(),f(),F0.length>0)M_((h)=>(h+1)%F0.length);return!0}if(Q.key==="ArrowUp"){if(J(),f(),F0.length>0)M_((h)=>(h-1+F0.length)%F0.length);return!0}if((Q.key==="Enter"||Q.key==="Tab")&&F0.length>0)return J(),f(),W_(F0[Math.max(0,Math.min(F_,F0.length-1))]),!0;if(R4(Q)&&F0.length>0){J();let h=v4($$.current,Q.key);$$.current=h;let K_=u4(F0,h.value,F_,(H_)=>H_.label);if(K_>=0)M_(K_);return!0}}return!1},[j,E_,f_,v_,w,F0,F_,D2]),H=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),G0(""),G?.();return}if(U(Q))return;if(w0&&Q0.length>0){let J=A_.current?.value??(j?R_:Q_);if(!String(J||"").match(/^@([a-zA-Z0-9_-]*)$/))P_(!1),X0([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),E0((f)=>(f+1)%Q0.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),E0((f)=>(f-1+Q0.length)%Q0.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),g0(Q0[S_]);return}if(Q.key==="Escape"){Q.preventDefault(),P_(!1),X0([]);return}}}if(J0&&w_.length>0){let J=A_.current?.value??(j?R_:Q_);if(!String(J||"").startsWith("/"))r_(!1),b_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),x0((f)=>(f+1)%w_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),x0((f)=>(f-1+w_.length)%w_.length);return}if(Q.key==="Tab"){Q.preventDefault(),w$(w_[c_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(A_.current?.value??(j?R_:Q_)).includes(" ")){Q.preventDefault();let K_=w_[c_];r_(!1),b_([]),C$(K_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),r_(!1),b_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let J=A_.current;if(!J)return;let f=J.value||"",h=J.selectionStart===0&&J.selectionEnd===0,K_=J.selectionStart===f.length&&J.selectionEnd===f.length;if(Q.key==="ArrowUp"&&h||Q.key==="ArrowDown"&&K_){let H_=Q$.current;if(!H_.length)return;Q.preventDefault();let u_=q$.current;if(Q.key==="ArrowUp"){if(u_===-1)P$.current=f,u_=H_.length-1;else if(u_>0)u_-=1;q$.current=u_,U$(H_[u_]||"")}else{if(u_===-1)return;if(u_<H_.length-1)u_+=1,q$.current=u_,U$(H_[u_]||"");else q$.current=-1,U$(P$.current||""),P$.current=""}requestAnimationFrame(()=>{let t0=A_.current;if(!t0)return;let p$=t0.value.length;t0.selectionStart=p$,t0.selectionEnd=p$});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let J=A_.current?.value??(j?R_:Q_);if(j){if(J.trim())N?.(J.trim(),Z)}else C$(J,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let J=A_.current?.value??(j?R_:Q_);if(j){if(J.trim())N?.(J.trim(),Z)}else C$(J)}},T=(Q)=>{let J=Array.from(Q||[]).filter((f)=>f instanceof File&&!String(f.name||"").startsWith(".DS_Store"));if(!J.length)return;s_((f)=>[...f,...J]),_$(null)},I=(Q)=>{T(Q.target.files),Q.target.value=""},p=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),B0.current+=1,o_(!0)},t=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),B0.current=Math.max(0,B0.current-1),B0.current===0)o_(!1)},j_=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";o_(!0)},__=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),B0.current=0,o_(!1),T(Q.dataTransfer?.files||[])},l=(Q)=>{if(j)return;let J=Q.clipboardData?.items;if(!J||!J.length)return;let f=[];for(let h of J){if(h.kind!=="file")continue;let K_=h.getAsFile?.();if(K_)f.push(K_)}if(f.length>0)Q.preventDefault(),T(f)},B_=(Q)=>{s_((J)=>J.filter((f,h)=>h!==Q))},M0=()=>{_$(null),s_([]),W?.(),P?.()},Z$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:J,longitude:f,accuracy:h}=Q.coords,K_=`${J.toFixed(5)}, ${f.toFixed(5)}`,H_=Number.isFinite(h)?` ±${Math.round(h)}m`:"",u_=`https://maps.google.com/?q=${J},${f}`,t0=`Location: ${K_}${H_} ${u_}`;G2(t0)},(Q)=>{let J=Q?.message||"Unable to retrieve location.";alert(`Location error: ${J}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};b(()=>{if(!E_)return;$$.current={value:"",updatedAt:0},i0(!0),$1(k_).then((Q)=>{let J=Array.isArray(Q?.models)?Q.models.filter((f)=>typeof f==="string"&&f.trim().length>0):[];J.sort((f,h)=>f.localeCompare(h,void 0,{sensitivity:"base"})),e0(J),o$(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),e0([])}).finally(()=>{i0(!1)})},[E_,C]),b(()=>{if(j)W0(!1),C_(!1),r_(!1),b_([]),P_(!1),X0([])},[j]),b(()=>{if(f_&&!B$)C_(!1)},[f_,B$]),b(()=>{if(!E_)return;let Q=v_.findIndex((J)=>J===C);s(Q>=0?Q:0)},[E_,v_,C]),b(()=>{if(!f_)return;M_(V2(F0)),$$.current={value:"",updatedAt:0}},[f_,k_]),b(()=>{if(!E_)return;let Q=(J)=>{let f=G$.current,h=k$.current,K_=J.target;if(f&&f.contains(K_))return;if(h&&h.contains(K_))return;W0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[E_]),b(()=>{if(!f_)return;let Q=(J)=>{let f=h$.current,h=W2.current,K_=J.target;if(f&&f.contains(K_))return;if(h&&h.contains(K_))return;C_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[f_]),b(()=>{if(j||!E_&&!f_)return;let Q=(J)=>{U(J)};return document.addEventListener("keydown",Q,!0),()=>document.removeEventListener("keydown",Q,!0)},[j,E_,f_,U]),b(()=>{if(!E_)return;let Q=G$.current;Q?.focus?.(),Q?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[E_,w,v_]),b(()=>{if(!f_)return;let Q=h$.current;Q?.focus?.(),Q?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[f_,F_,F0.length]),b(()=>{let Q=()=>{let H_=s0.current?.clientWidth||0;V$((u_)=>u_===H_?u_:H_)};Q();let J=s0.current,f=0,h=()=>{if(f)cancelAnimationFrame(f);f=requestAnimationFrame(()=>{f=0,Q()})},K_=null;if(J&&typeof ResizeObserver<"u")K_=new ResizeObserver(()=>h()),K_.observe(J);if(typeof window<"u")window.addEventListener("resize",h);return()=>{if(f)cancelAnimationFrame(f);if(K_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",h)}},[j,C,S$.length,x?.percent]);let q0=(Q)=>{let J=Q.target.value;if(_$(null),f_)C_(!1);P0(Q.target),U$(J)};return b(()=>{requestAnimationFrame(()=>P0())},[Q_,R_,j]),b(()=>{if(j)return;m$(Q_)},[n$,k_,Q_,j]),B`
        <div class="compose-box">
            ${!j&&f0.length>0&&B`
                <div class="compose-queue-stack">
                    ${f0.map((Q)=>{let J=typeof Q?.content==="string"?Q.content:"",f=U2(J);if(!f.text.trim()&&f.fileRefs.length===0&&f.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${J}>
                                    ${f.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${f.text}</div>
                                    `}
                                    ${(f.messageRefs.length>0||f.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${f.messageRefs.map((h)=>B`
                                                <${b$}
                                                    key=${"queue-msg-"+h}
                                                    prefix="compose"
                                                    label=${"msg:"+h}
                                                    title=${"Message reference: "+h}
                                                    icon="message"
                                                />
                                            `)}
                                            ${f.fileRefs.map((h)=>{let K_=h.split("/").pop()||h;return B`
                                                    <${b$}
                                                        key=${"queue-file-"+h}
                                                        prefix="compose"
                                                        label=${K_}
                                                        title=${h}
                                                        onClick=${()=>z_?.(h)}
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
                                        onClick=${()=>l2(Q)}
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
                class=${`compose-input-wrapper${p_?" drag-active":""}`}
                onDragEnter=${p}
                onDragOver=${j_}
                onDragLeave=${t}
                onDrop=${__}
            >
                <div class="compose-input-main">
                    ${A0&&!L$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${A0}</div>
                    `}
                    ${L$&&B`
                        <div class="compose-file-refs">
                            ${A0&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${A0}</div>
                            `}
                            ${X.map((Q)=>{return B`
                                    <${b$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(Q)}
                                    />
                                `})}
                            ${L.map((Q)=>{let J=Q.split("/").pop()||Q;return B`
                                    <${b$}
                                        prefix="compose"
                                        label=${J}
                                        title=${Q}
                                        onClick=${()=>z_?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(Q)}
                                    />
                                `})}
                            ${n_.map((Q,J)=>{let f=Q?.name||`attachment-${J+1}`;return B`
                                    <${b$}
                                        key=${f+J}
                                        prefix="compose"
                                        label=${f}
                                        title=${f}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>B_(J)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${M0}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof X_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>X_?.()}
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
                        ref=${A_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?R_:Q_}
                        onInput=${q0}
                        onKeyDown=${H}
                        onPaste=${l}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${w0&&Q0.length>0&&B`
                        <div class="slash-autocomplete" ref=${b0}>
                            ${Q0.map((Q,J)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${J===S_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),g0(Q)}}
                                    onMouseEnter=${()=>E0(J)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${J0&&w_.length>0&&B`
                        <div class="slash-autocomplete" ref=${N2}>
                            ${w_.map((Q,J)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${J===c_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),w$(Q)}}
                                    onMouseEnter=${()=>x0(J)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${E_&&!j&&B`
                        <div class="compose-model-popup" ref=${G$} tabIndex="-1" onKeyDown=${U}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${Z0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!Z0&&v_.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!Z0&&v_.map((Q,J)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${w===J?" active":""}${C===Q?" current-model":""}`}
                                        onClick=${()=>{D2(Q)}}
                                        disabled=${Y0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{c2()}}
                                    disabled=${Y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${f_&&!j&&B`
                        <div class="compose-model-popup" ref=${h$} tabIndex="-1" onKeyDown=${U}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Q=typeof O0?.agent_name==="string"&&O0.agent_name.trim()?`@${O0.agent_name.trim()}`:k_,J=typeof O0?.chat_jid==="string"&&O0.chat_jid.trim()?O0.chat_jid.trim():k_;return`${Q} — ${J} • current`})()}
                                    </div>
                                `}
                                ${!R$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${R$&&d$.map((Q,J)=>{let f=Boolean(Q.archived_at),K_=Q.chat_jid!==(Q.root_chat_jid||Q.chat_jid)&&!Q.is_active&&!f&&typeof d==="function",H_=`@${Q.agent_name} — ${Q.chat_jid}${Q.is_active?" • active":""}${f?" • archived":""}`;return B`
                                        <div key=${Q.chat_jid} class=${`compose-model-popup-item-row${f?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${f?" archived":""}${F_===J?" active":""}`}
                                                onClick=${()=>{if(f){K2(Q.chat_jid);return}a$(Q.chat_jid)}}
                                                disabled=${f?!u0:!v$}
                                                title=${f?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${H_}
                                            </button>
                                            ${K_&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${Q.agent_name}`}
                                                    onClick=${(u_)=>{u_.stopPropagation(),C_(!1),d(Q.chat_jid)}}
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
                            ${(n0||t_||W$)&&B`
                                <div class="compose-model-popup-actions">
                                    ${n0&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${F0.findIndex((Q)=>Q.key==="action:new")===F_?" active":""}`}
                                            onClick=${()=>{g$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${t_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${F0.findIndex((Q)=>Q.key==="action:rename")===F_?" active":""}`}
                                            onClick=${(Q)=>{t$(Q)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${m0}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${W$&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${F0.findIndex((Q)=>Q.key==="action:delete")===F_?" active":""}`}
                                            onClick=${()=>{O2()}}
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
                <div class="compose-footer" ref=${s0}>
                    ${!j&&C&&B`
                    <div class="compose-meta-row">
                        ${!j&&C&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k$}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${u$}
                                    aria-label="Open model picker"
                                    onClick=${f2}
                                    disabled=${Y0}
                                >
                                    ${Y0?"Switching…":r0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Y0&&Y2&&B`
                                        <span class="compose-model-usage-hint" title=${u$}>
                                            ${Y2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&B`
                            <${O7} usage=${x} onCompact=${h2} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${U0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${S$.map((Q)=>{let J=Boolean(Q?.chat_jid&&Q.chat_jid===k_);return B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${J?" active":""}`}
                                    onClick=${()=>f$(Q)}
                                    title=${`${Q.chat_jid||"Active agent"} — switch to @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `})}
                        </div>
                    `}
                    ${B$&&B`
                        ${O0?.agent_name&&B`
                            <span
                                class="compose-current-agent-label active"
                                title=${O0.chat_jid||k_}
                                onClick=${a0}
                            >@${O0.agent_name}</span>
                        `}
                        <button
                            ref=${W2}
                            type="button"
                            class=${`icon-btn compose-mention-btn${f_?" active":""}`}
                            onClick=${a0}
                            title=${f_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${f_?"true":"false"}
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
                                onChange=${(Q)=>Y?.(Q.currentTarget.value)}
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
                    ${M$&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Z$}
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
                    ${l$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${j$?" active":""}`}
                            onClick=${a}
                            title=${X$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${e&&r&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${r}
                                title=${`Attach open file: ${e}`}
                                type="button"
                                disabled=${L.includes(e)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${I} />
                        </label>
                    `}
                    ${(G_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${G_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${G_}" title=${o0}>
                                    ${y0}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{C$()}}
                                    disabled=${!x2}
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
    `}var h4="piclaw_theme",C1="piclaw_tint",C8="piclaw_chat_themes",Y1={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},b8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},w8={default:{label:"Default",mode:"auto",light:Y1,dark:b8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},F7=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],k2={theme:"default",tint:null},S8="light",p4=!1;function b1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function p2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function H7(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),z=parseInt(N[2],10),G=parseInt(N[3],10);if(![Y,z,G].every((q)=>Number.isFinite(q)))return null;let L=`#${[Y,z,G].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:z,b:G,hex:L}}function R8(_){return p2(_)||H7(_)}function N1(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function c4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function D7(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*z}function J7(_){return D7(_)>0.4?"#000000":"#ffffff"}function v8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function i4(_){return w8[_]||w8.default}function E7(_){return _.mode==="auto"?v8():_.mode}function u8(_,$){let j=i4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||Y1}function m8(_,$,j){let Z=R8($);if(!Z)return _;let N=p2(_.bgPrimary),Y=p2(_.bgSecondary),z=p2(_.bgHover),G=p2(_.borderColor);if(!N||!Y||!z||!G)return _;let q=p2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:N1(N,Z,0.08),bgSecondary:N1(Y,Z,0.12),bgHover:N1(z,Z,0.16),borderColor:N1(G,Z,0.08),accent:Z.hex,accentHover:q?N1(Z,q,0.18):Z.hex}}function A7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=R8(Z),Y=N?c4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?c4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?c4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?J7(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":G,"--accent-contrast-text":L,"--danger-color":_.danger||Y1.danger,"--success-color":_.success||Y1.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([W,X])=>{if(X)j.style.setProperty(W,X)})}function y7(){if(typeof document>"u")return;let _=document.documentElement;F7.forEach(($)=>_.style.removeProperty($))}function g2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function f8(_){let $=b1(k2?.theme||"default"),j=k2?.tint?String(k2.tint).trim():null,Z=u8($,_);if($==="default"&&j)Z=m8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?b8.bgPrimary:Y1.bgPrimary}function k7(_,$){if(typeof document>"u")return;let j=g2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=g2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",f8("light"));let N=g2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",f8("dark"));let Y=g2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let z=g2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let G=g2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function P7(){if(typeof window>"u")return;let _={...k2,mode:S8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function g8(){try{let _=z$(C8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function M7(_,$,j){let Z=g8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};e_(C8,JSON.stringify(Z))}function I7(_){if(!_)return null;return g8()[_]||null}function p8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function l4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=b1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=i4(j),Y=E7(N),z=u8(j,Y);k2={theme:j,tint:Z},S8=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=Y;let L=z;if(j==="default"&&Z)L=m8(z,Z,Y);if(j==="default"&&!Z)y7();else A7(L,Y);if(k7(L.bgPrimary,Y),P7(),$.persist!==!1)if(e_(h4,j),Z)e_(C1,Z);else e_(C1,"")}function f1(){if(i4(k2.theme).mode!=="auto")return;l4(k2,{persist:!1})}function c8(){if(typeof window>"u")return()=>{};let _=p8(),$=I7(_),j=$?b1($.theme||"default"):b1(z$(h4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=z$(C1);return N?N.trim():null})();if(l4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!p4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",f1);else if(N.addListener)N.addListener(f1);return p4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",f1);else if(N.removeListener)N.removeListener(f1);p4=!1}}return()=>{}}function h8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||p8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(M7($,j||"default",Z),l4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")e_(h4,j||"default"),e_(C1,Z||"")}function i8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return v8()}var S1=/#(\w+)/g,T7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),x7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),w7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),f7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},C7=new Set(["http:","https:","mailto:",""]);function n4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function P2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!C7.has(Z.protocol))return null;return Z.href}catch{return null}}function l8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let z of Z){let G=z.tagName.toLowerCase();if(!x7.has(G)){let q=z.parentNode;if(!q)continue;while(z.firstChild)q.insertBefore(z.firstChild,z);q.removeChild(z);continue}let L=f7[G]||new Set;for(let q of Array.from(z.attributes)){let W=q.name.toLowerCase(),X=q.value;if(W.startsWith("on")){z.removeAttribute(q.name);continue}if(W.startsWith("data-")||W.startsWith("aria-"))continue;if(L.has(W)||w7.has(W)){if(W==="href"){let F=P2(X);if(!F)z.removeAttribute(q.name);else if(z.setAttribute(q.name,F),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(W==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,P=P2(F,{allowDataImage:G==="img"});if(!P)z.removeAttribute(q.name);else z.setAttribute(q.name,P)}continue}z.removeAttribute(q.name)}}return j.body.innerHTML}function n8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function R1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=n8(j);if(N===j)break;j=N}return j}function b7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,z=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,z=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),Y=!1,z=[];continue}if(Y)z.push(G);else N.push(G)}if(Y)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function S7(_){if(!_)return _;return R1(_,5)}function R7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function v7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function u7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",z=S7(Y);return`<div class="mermaid-container" data-mermaid="${R7(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function d8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var m7={span:new Set(["title","class","lang","dir"])};function g7(_,$){let j=m7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let z=(Y[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let G=Y[2]??Y[3]??Y[4]??"";Z.push(` ${z}="${n4(G)}"`)}return Z.join("")}function s8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[L=""]=G.split(/\s+/,1),q=L.toLowerCase();if(!q||!T7.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let W=G.slice(L.length).trim(),X=g7(q,W);return`<${q}${X}>`})}function o8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function r8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function p7(_){if(!window.katex)return _;let $=(z)=>n8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let G=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let W=G.length;return G.push(q),`@@CODE_BLOCK_${W}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let W=G.length;return G.push(q),`@@CODE_INLINE_${W}@@`}),{html:L,blocks:G}},Z=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let W=Number(q);return G[W]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${G}${q}`}catch(q){return`<span class="math-error" title="${n4(q.message)}">${z}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,L)=>{if(/\s$/.test(L))return z;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${G}${q}`}catch(q){return`${G}<span class="math-error" title="${n4(q.message)}">$${L}$</span>`}}),Z(Y,N.blocks)}function c7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let z=Y.nodeValue;if(!z)continue;if(S1.lastIndex=0,!S1.test(z))continue;S1.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let L=z.split(S1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((W,X)=>{if(X%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",W),F.textContent=`#${W}`,q.appendChild(F)}else q.appendChild($.createTextNode(W))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function h7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function i7(_){let $=h7(_||""),{text:j,blocks:Z}=b7($),N=R1(j,2),z=d8(N).replace(/</g,"&lt;");return{safeHtml:s8(z),mermaidBlocks:Z}}function K$(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:N}=i7(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=o8(Y),Y=r8(Y),Y=p7(Y),Y=c7(Y),Y=u7(Y,N),Y=l8(Y,j),Y}function v1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=R1($,2),N=d8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=s8(N),z=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return z=o8(z),z=r8(z),z=l8(z),z}function l7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let z=N.trim().split(/\s+/).map((L)=>{let[q,W]=L.split(",").map(Number);return{x:q,y:W}});if(z.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let G=[`M ${z[0].x},${z[0].y}`];for(let L=1;L<z.length-1;L++){let q=z[L-1],W=z[L],X=z[L+1],F=W.x-q.x,P=W.y-q.y,C=X.x-W.x,g=X.y-W.y,u=Math.sqrt(F*F+P*P),E=Math.sqrt(C*C+g*g),x=Math.min($,u/2,E/2);if(x<0.5){G.push(`L ${W.x},${W.y}`);continue}let m=W.x-F/u*x,A=W.y-P/u*x,S=W.x+C/E*x,a=W.y+g/E*x,N_=F*g-P*C>0?1:0;G.push(`L ${m},${A}`),G.push(`A ${x},${x} 0 0 ${N_} ${S},${a}`)}return G.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${G.join(" ")}"${Y}/>`})}async function j2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=i8()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of Y)try{let G=z.dataset.mermaid,L=v7(G||""),q=R1(L,2),W=await $(q,{...N,transparent:!0});W=l7(W),z.innerHTML=W,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function a8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function t8(_){return String(_||"").trim()||"web:default"}function e8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function _6(_){if(!_)return!1;return _.status!=="running"}function $6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function j6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),Y=k(null),z=_?.thinking?v1(_.thinking):"",G=_?.answer?K$(_.answer,null,{sanitize:!1}):"";if(b(()=>{if(N.current&&z)j2(N.current).catch(()=>{})},[z]),b(()=>{if(Y.current&&G)j2(Y.current).catch(()=>{})},[G]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),W=Boolean(String(_.thinking||"").trim()),X=e8(_),F=_6(_),P=!L&&q,C=L?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${C}</span>
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
            ${W&&B`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${X&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${F&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!P}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function n7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function d7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function X2(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function O_(_){return typeof _==="string"&&_.trim()?_.trim():null}function N6(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((N)=>typeof N==="string").map((N)=>N.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var Y6="__PICLAW_WIDGET_HOST__:";function Z6(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function d4(_,$){if(!_||_.type!=="generated_widget")return null;let j=n7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:N6(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function z6(_){if(!_||typeof _!=="object")return null;let $=d7(_),j=O_(_?.widget_id)||O_(_?.widgetId)||O_(_?.tool_call_id)||O_(_?.toolCallId),Z=O_(_?.tool_call_id)||O_(_?.toolCallId),N=O_(_?.turn_id)||O_(_?.turnId),Y=O_(_?.title)||O_(_?.name)||"Generated widget",z=O_(_?.subtitle)||"",G=O_(_?.description)||z,L=O_(_?.status),q=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:Y,subtitle:z,description:G,originPostId:X2(_?.origin_post_id)??X2(_?.originPostId),originChatJid:O_(_?.origin_chat_jid)||O_(_?.originChatJid)||O_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:N6(_?.capabilities,!0),source:"live",status:q,turnId:N,toolCallId:Z,width:X2(_?.width),height:X2(_?.height),error:O_(_?.error)}}function K6(_){return d4(_,null)!==null}function c0(_){let $=O_(_?.toolCallId)||O_(_?.tool_call_id);if($)return $;let j=O_(_?.widgetId)||O_(_?.widget_id);if(j)return j;let Z=X2(_?.originPostId)??X2(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function V6(_){let j=(_?.artifact||{}).kind||_?.kind||null,N=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||N)}function G6(_){return V6(_)?"allow-downloads allow-scripts":"allow-downloads"}function u1(_){return{title:O_(_?.title)||"Generated widget",widgetId:O_(_?.widgetId)||O_(_?.widget_id),toolCallId:O_(_?.toolCallId)||O_(_?.tool_call_id),turnId:O_(_?.turnId)||O_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:O_(_?.status)||"final"}}function m1(_){return{...u1(_),subtitle:O_(_?.subtitle)||"",description:O_(_?.description)||"",error:O_(_?.error)||null,width:X2(_?.width),height:X2(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function g1(_){return`${Y6}${JSON.stringify(m1(_))}`}function Q6(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=O_(_.text)||O_(_.content)||O_(_.message)||O_(_.prompt)||O_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=O_(j.text)||O_(j.content)||O_(j.message)||O_(j.prompt)||O_(j.value);if(Z)return Z}return null}function q6(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function X6(_){let $=O_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return O_(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function s7(_){let $=u1(_);return`<script>
(function () {
  const meta = ${Z6($)};
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

  const windowNamePrefix = ${Z6(Y6)};
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
</script>`}function L6(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=j==="svg"?N:Z;if(!z)return"";let G=V6(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),q=j==="svg"?`<div class="widget-svg-shell">${z}</div>`:z,W=G?s7(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
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
<body>${q}</body>
</html>`}function W6({widget:_,onClose:$,onWidgetEvent:j}){let Z=k(null),N=k(!1),Y=I_(()=>L6(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(b(()=>{if(!_)return;let E=(x)=>{if(x.key==="Escape")$?.()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[_,$]),b(()=>{N.current=!1},[Y]),b(()=>{if(!_)return;let E=Z.current;if(!E)return;let x=(Z_)=>{let N_=g1(_),e=Z_==="widget.init"?u1(_):m1(_);try{E.name=N_}catch{}try{E.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:Z_,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:e},"*")}catch{}},m=()=>{x("widget.init"),x("widget.update")},A=()=>{N.current=!0,m()};E.addEventListener("load",A);let a=[0,40,120,300,800].map((Z_)=>setTimeout(m,Z_));return()=>{E.removeEventListener("load",A),a.forEach((Z_)=>clearTimeout(Z_))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),b(()=>{if(!_)return;let E=Z.current;if(!E?.contentWindow)return;let x=g1(_),m=m1(_);try{E.name=x}catch{}try{E.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:m},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),b(()=>{if(!_)return;let E=(x)=>{let m=x?.data;if(!m||m.__piclawGeneratedWidget!==!0)return;let A=Z.current,S=c0(_),a=c0({widgetId:m.widgetId,toolCallId:m.toolCallId});if(a&&S&&a!==S)return;if(!a&&A?.contentWindow&&x.source!==A.contentWindow)return;j?.(m,_)};return window.addEventListener("message",E),()=>window.removeEventListener("message",E)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",W=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",F=W==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",P=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",C=!Y,g=X6(_),u=G6(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(E)=>E.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${F} • ${G.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(q||P)&&B`
                            <div class="floating-widget-subtitle">${q||P}</div>
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
                    ${C?B`<div class="floating-widget-empty">${g}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${L}
                                name=${g1(_)}
                                sandbox=${u}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var B6="PiClaw";function s4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%Y.length,G=Y[z],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",W=q?q:null,X=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:G,image:W||(X?"/static/icon-192.png":null)}}function U6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function O6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function F6(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,z=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",L=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(L&&(G||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function o7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z1(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function H6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z1(_)?"Compacting context":"Working..."}function r7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function D6(_,$=Date.now()){let j=o7(_);if(j===null)return null;return r7(Math.max(0,$-j))}function J6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:z,steerQueued:G,onPanelToggle:L}){let X=(d)=>{if(!d)return{text:"",totalLines:0,fullText:""};if(typeof d==="string"){let R_=d,G0=R_?R_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:R_,totalLines:G0,fullText:R_}}let x_=d.text||"",Q_=d.fullText||d.full_text||x_,D_=Number.isFinite(d.totalLines)?d.totalLines:Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:x_,totalLines:D_,fullText:Q_}},F=160,P=(d)=>String(d||"").replace(/<\/?internal>/gi,""),C=(d)=>{if(!d)return 1;return Math.max(1,Math.ceil(d.length/160))},g=(d,x_,Q_)=>{let D_=(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(Q_)?Q_:0,visibleLines:0};let R_=D_.split(`
`),G0=R_.length>x_?R_.slice(0,x_).join(`
`):D_,n_=Number.isFinite(Q_)?Q_:R_.reduce((o_,w_)=>o_+C(w_),0),s_=G0?G0.split(`
`).reduce((o_,w_)=>o_+C(w_),0):0,p_=Math.max(n_-s_,0);return{text:G0,omitted:p_,totalLines:n_,visibleLines:s_}},u=X(j),E=X(Z),x=X($),m=Boolean(u.text)||u.totalLines>0,A=Boolean(E.text)||E.totalLines>0,S=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!S&&!m&&!A&&!N&&!Y)return null;let[a,Z_]=v(new Set),[N_,e]=v(()=>Date.now()),r=(d)=>Z_((x_)=>{let Q_=new Set(x_),D_=!Q_.has(d);if(D_)Q_.add(d);else Q_.delete(d);if(typeof L==="function")L(d,D_);return Q_});b(()=>{Z_(new Set)},[z]);let z_=z1(_);b(()=>{if(!z_)return;e(Date.now());let d=setInterval(()=>e(Date.now()),1000);return()=>clearInterval(d)},[z_,_?.started_at,_?.startedAt]);let f0=_?.turn_id||z,y_=F6(f0),$_=G?"turn-dot turn-dot-queued":"turn-dot",Y_=(d)=>d,V_=Boolean(_?.last_activity||_?.lastActivity),X_=(d)=>d==="warning"?"#f59e0b":d==="error"?"var(--danger-color)":d==="success"?"var(--success-color)":y_,U_=Y?.kind||"info",L_=X_(U_),k_=X_(_?.kind||(z_?"warning":"info")),G_="",d_=_?.title,l_=_?.status;if(_?.type==="plan")G_=d_?`Planning: ${d_}`:"Planning...";else if(_?.type==="tool_call")G_=d_?`Running: ${d_}`:"Running tool...";else if(_?.type==="tool_status")G_=d_?`${d_}: ${l_||"Working..."}`:l_||"Working...";else if(_?.type==="error")G_=d_||"Agent error";else G_=d_||l_||"Working...";if(V_)G_="Last activity just now";let V0=({panelTitle:d,text:x_,fullText:Q_,totalLines:D_,maxLines:R_,titleClass:G0,panelKey:n_})=>{let s_=a.has(n_),p_=Q_||x_||"",o_=n_==="thought"||n_==="draft"?P(p_):p_,w_=typeof R_==="number",b_=s_&&w_,c_=w_?g(o_,R_,D_):{text:o_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!o_&&!(Number.isFinite(c_.totalLines)&&c_.totalLines>0))return null;let x0=`agent-thinking-body${w_?" agent-thinking-body-collapsible":""}`,J0=w_?`--agent-thinking-collapsed-lines: ${R_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${s_?"true":"false"}
                data-collapsible=${w_?"true":"false"}
                style=${y_?`--turn-color: ${y_};`:""}
            >
                <div class="agent-thinking-title ${G0||""}">
                    ${y_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${d}
                    ${b_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${d} panel`}
                            onClick=${()=>r(n_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${x0}
                    style=${J0}
                    dangerouslySetInnerHTML=${{__html:v1(o_)}}
                />
                ${!s_&&c_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>r(n_)}>
                        ▸ ${c_.omitted} more lines
                    </button>
                `}
                ${s_&&c_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>r(n_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},T_=N?.tool_call?.title,j0=T_?`Awaiting approval: ${T_}`:"Awaiting approval",g_=z_?D6(_,N_):null,C0=(d,x_,Q_=null)=>{let D_=H6(d);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${x_?`--turn-color: ${x_};`:""}
                title=${d?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${x_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${Q_&&B`<span class="agent-status-elapsed">${Q_}</span>`}
                </div>
                ${d.detail&&B`<div class="agent-thinking-body">${d.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${Y&&C0(Y,L_)}
            ${_?.type==="intent"&&C0(_,k_,g_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${y_?`--turn-color: ${y_};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${j0}</span>
                </div>
            `}
            ${m&&V0({panelTitle:Y_("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${A&&V0({panelTitle:Y_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&V0({panelTitle:Y_("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${V_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${y_?`--turn-color: ${y_};`:""}>
                    ${y_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!V_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${G_}</span>
                </div>
            `}
        </div>
    `}function E6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,z=Z?.title||"Agent Request",G=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,W=L.diff||null,X=L.fileName||L.path||null,F=Z?.description||L.description||L.explanation||null,C=(Array.isArray(Z?.locations)?Z.locations:[]).map((m)=>m?.path).filter((m)=>Boolean(m)),g=Array.from(new Set([X,...C].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let u=async(m)=>{try{await k1(j,m,Y||null),$()}catch(A){console.error("Failed to respond to agent request:",A)}},E=async()=>{try{await k4(z,`Auto-approved: ${z}`),await k1(j,"approved",Y||null),$()}catch(m){console.error("Failed to add to whitelist:",m)}},x=N&&N.length>0;return B`
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
                ${(F||q||W||g.length>0)&&B`
                    <div class="agent-request-body">
                        ${F&&B`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${g.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${g.map((m,A)=>B`<li key=${A}>${m}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&B`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${W&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${x?N.map((m)=>B`
                            <button 
                                key=${m.optionId||m.id||String(m)}
                                class="agent-request-btn ${m.kind==="allow_once"||m.kind==="allow_always"?"primary":""}"
                                onClick=${()=>u(m.optionId||m.id||m)}
                            >
                                ${m.name||m.label||m.optionId||m.id||String(m)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>u("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>u("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function A6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function K1(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function E$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function M2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var a7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),t7=new Set(["text/markdown"]),e7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),_j=new Set(["application/vnd.jgraph.mxfile"]);function V1(_){return typeof _==="string"?_.trim().toLowerCase():""}function $j(_){let $=V1(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function jj(_){let $=V1(_);return!!$&&$.endsWith(".pdf")}function Zj(_){let $=V1(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function G1(_,$){let j=V1(_);if($j($)||_j.has(j))return"drawio";if(jj($)||j==="application/pdf")return"pdf";if(Zj($)||e7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(a7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function y6(_){let $=V1(_);return t7.has($)}function k6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function Nj(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function Yj(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:Y}}function P6(_){return Nj(_)||Yj(_)}function p1(_){let $=(Y)=>{let z=Y/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function zj(_,$){let j=Math.max(p1(_),p1($)),Z=Math.min(p1(_),p1($));return(j+0.05)/(Z+0.05)}function Kj(_,$,j="#ffffff"){let Z=P6(_);if(!Z)return j;let N=j,Y=-1;for(let z of $){let G=P6(z);if(!G)continue;let L=zj(Z,G);if(L>Y)N=z,Y=L}return N}function o4(){let _=getComputedStyle(document.documentElement),$=(C,g)=>{for(let u of C){let E=_.getPropertyValue(u).trim();if(E)return E}return g},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),W=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),P=Kj(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:z,accent:G,good:L,warning:q,attention:W,border:X,fontFamily:F,buttonTextColor:P}}function M6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:z,attention:G,border:L,fontFamily:q}=o4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Vj=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),I6=!1,c1=null,T6=!1;function r4(_){_.querySelector(".adaptive-card-notice")?.remove()}function Gj(_,$,j="error"){r4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function Qj(_,$=(j)=>K$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function qj(_=($)=>K$($,null)){return($,j)=>{try{let Z=Qj($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Xj(_){if(T6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=qj(),T6=!0}async function Lj(){if(I6)return;if(c1)return c1;return c1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{I6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c1}function Wj(){return globalThis.AdaptiveCards}function Bj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Uj(_){return Vj.has(_)}function t4(_){if(!Array.isArray(_))return[];return _.filter(Bj)}function Oj(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function a4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>a4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${a4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Fj(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return a4($);return typeof $==="string"?$:String($)}function Hj(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=Fj(z.type,j[z.id],z);for(let[G,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[G]=Z(L);return z};return Z(_)}function Dj(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Jj(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Ej(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=Jj(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function x6(_,$,j){if(!Uj($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Lj()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=Wj();Xj(Z);let N=new Z.AdaptiveCard,Y=o4();N.hostConfig=new Z.HostConfig(M6());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:Hj($.payload,z);N.parse(G),N.onExecuteAction=(W)=>{let X=Oj(W);if(j?.onAction)r4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let P=F instanceof Error?F.message:String(F||"Action failed.");Gj(_,P||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=Ej($);if(q){_.classList.add("adaptive-card-finished");let W=document.createElement("div");W.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=q.label,W.appendChild(X),q.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=q.detail,W.appendChild(F)}_.appendChild(W)}if(r4(_),_.appendChild(L),q)Dj(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function Q1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Q1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Q1(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function w6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Q1(j)})).filter(($)=>$.value)}function Aj(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function e4(_){if(!Array.isArray(_))return[];return _.filter(Aj)}function f6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=Q1(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=w6(j).map(({key:Y,value:z})=>`${Y}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function C6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=w6(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:z})=>`${Y}: ${z}`).join(", "):Q1(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function yj(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?E$($):null},{label:"Added",value:_?.created_at?M2(_.created_at):null}].filter((Z)=>Z.value)}function kj(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=J$(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function b6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=I_(()=>G1($?.content_type,Z),[$?.content_type,Z]),Y=k6(N),z=I_(()=>y6($?.content_type),[$?.content_type]),[G,L]=v(N==="text"),[q,W]=v(""),[X,F]=v(null),P=k(null),C=I_(()=>yj($),[$]),g=I_(()=>kj(_,Z,N),[_,Z,N]),u=I_(()=>{if(!z||!q)return"";return K$(q)},[z,q]);return b(()=>{let E=(x)=>{if(x.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),b(()=>{if(!P.current||!u)return;j2(P.current);return},[u]),b(()=>{let E=!1;async function x(){if(N!=="text"){L(!1),F(null);return}L(!0),F(null);try{let m=await T4(_);if(!E)W(m)}catch{if(!E)F("Failed to load text preview.")}finally{if(!E)L(!1)}}return x(),()=>{E=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${g&&B`
                            <a
                                href=${g}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${J$(_)}
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
                    ${!G&&X&&B`<div class="attachment-preview-state">${X}</div>`}
                    ${!G&&!X&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${J$(_)} alt=${Z} />
                    `}
                    ${!G&&!X&&(N==="pdf"||N==="office"||N==="drawio")&&g&&B`
                        <iframe class="attachment-preview-frame" src=${g} title=${Z}></iframe>
                    `}
                    ${!G&&!X&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!X&&N==="text"&&z&&B`
                        <div
                            ref=${P}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:u}}
                        />
                    `}
                    ${!G&&!X&&N==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!G&&!X&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${C.map((E)=>B`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function S6({src:_,onClose:$}){return b(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function Pj({mediaId:_,onPreview:$}){let[j,Z]=v(null);if(b(()=>{v2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,z=Y?E$(Y):"",L=G1(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${J$(_)} download=${N} class="file-attachment-main">
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function Mj({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=v(null);b(()=>{if(!Number.isFinite(j))return;v2(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?J$(j):null,L=G1(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${z?B`
                    <a href=${z} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${b$}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${b$}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
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
    `}function h1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?M2(Z):null;return B`
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
    `}function Ij({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?E$(_.size):"",N=_.mime_type||"",Y=wj(N),z=P2(_.uri);return B`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
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
    `}function Tj({block:_}){let[$,j]=v(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:z||"application/octet-stream"}),q=URL.createObjectURL(L),W=document.createElement("a");W.href=q,W.download=Z.split("/").pop()||"resource",W.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function xj({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=d4(_,$),N=K6(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,z=Z?.title||_.title||_.name||"Generated widget",G=Z?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",q=(W)=>{if(W.preventDefault(),W.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(W)=>W.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${z}</div>
            </div>
            ${G&&B`<div class="generated-widget-launch-description">${G}</div>`}
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
    `}function wj(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function fj({preview:_}){let $=P2(_.url),j=P2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function Cj(_,$){return typeof _==="string"?_:""}var bj=1800,Sj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Rj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,vj=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function uj(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function mj(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,z)=>{let G=z||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=Rj,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=vj,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Sj,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let z=document.createElement("div");z.className="post-code-block",Y.parentNode?.insertBefore(z,Y),z.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),z.appendChild(G);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let X=Y.querySelector("code")?.textContent||"",F=await uj(X);N(G,F?"success":"error");let P=j.get(G);if(P)clearTimeout(P);let C=setTimeout(()=>{N(G,"idle"),j.delete(G)},bj);j.set(G,C)};G.addEventListener("click",L),Z.push(()=>{G.removeEventListener("click",L);let q=j.get(G);if(q)clearTimeout(q);if(z.parentNode)z.parentNode.insertBefore(Y,z),z.remove()})}),()=>{Z.forEach((Y)=>Y())}}function gj(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),G=j.slice(Y),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function pj(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let X=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)N.push(X[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),G=j.slice(Y),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function cj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let W=j[q].trim();if((W==="Images:"||W==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let W=q.replace(/^\s*-\s+/,"").trim(),X=W.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||W.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let F=X[1],P=(X[2]||"").trim()||F;N.push({id:F,label:P,raw:W})}else N.push({id:null,label:W,raw:W})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),G=j.slice(Y),L=[...z,...G].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function hj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ij(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(hj).sort((W,X)=>X.length-W.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=G.nextNode())L.push(q);for(let W of L){let X=W.nodeValue;if(!X||!N.test(X)){N.lastIndex=0;continue}N.lastIndex=0;let F=W.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let P=X.split(N).filter((g)=>g!=="");if(P.length===0)continue;let C=z.createDocumentFragment();for(let g of P)if(Y.test(g)){let u=z.createElement("mark");u.className="search-highlight-term",u.textContent=g,C.appendChild(u)}else C.appendChild(z.createTextNode(g));W.parentNode.replaceChild(C,W)}return z.body.innerHTML}function R6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:z,userName:G,userAvatarUrl:L,userAvatarBackground:q,onDelete:W,isThreadReply:X,isThreadPrev:F,isThreadNext:P,isRemoving:C,highlightQuery:g,onFileRef:u,onOpenWidget:E}){let[x,m]=v(null),A=k(null),S=_.data,a=S.type==="agent_response",Z_=G||"You",N_=a?Y||B6:Z_,e=a?s4(Y,z,!0):s4(Z_,L),r=typeof q==="string"?q.trim().toLowerCase():"",z_=!a&&e.image&&(r==="clear"||r==="transparent"),f0=a&&Boolean(e.image),y_=`background-color: ${z_||f0?"transparent":e.color}`,$_=S.content_meta,Y_=Boolean($_?.truncated),V_=Boolean($_?.preview),X_=Y_&&!V_,U_=Y_?{originalLength:Number.isFinite($_?.original_length)?$_.original_length:S.content?S.content.length:0,maxLength:Number.isFinite($_?.max_length)?$_.max_length:0}:null,L_=S.content_blocks||[],k_=S.media_ids||[],G_=Cj(S.content,S.link_previews),{content:d_,fileRefs:l_}=gj(G_),{content:V0,messageRefs:T_}=pj(d_),{content:j0,attachments:g_}=cj(V0);G_=j0;let C0=t4(L_),d=e4(L_),x_=C0.length===1&&typeof C0[0]?.fallback_text==="string"?C0[0].fallback_text.trim():"",Q_=d.length===1?f6(d[0]).trim():"",D_=Boolean(x_)&&G_?.trim()===x_||Boolean(Q_)&&G_?.trim()===Q_,R_=Boolean(G_)&&!X_&&!D_,G0=typeof g==="string"?g.trim():"",n_=I_(()=>{if(!G_||D_)return"";let w=K$(G_,j);return G0?ij(w,G0):w},[G_,D_,G0]),s_=(w,s)=>{w.stopPropagation(),m(J$(s))},[p_,o_]=v(null),w_=(w)=>{o_(w)},b_=(w)=>{w.stopPropagation(),W?.(_)},c_=(w,s)=>{let F_=new Set;if(!w||s.length===0)return{content:w,usedIds:F_};return{content:w.replace(/attachment:([^\s)"']+)/g,(Z0,i0,y$,V$)=>{let A0=i0.replace(/^\/+/,""),A_=s.find((b0)=>b0.name&&b0.name.toLowerCase()===A0.toLowerCase()&&!F_.has(b0.id))||s.find((b0)=>!F_.has(b0.id));if(!A_)return Z0;if(F_.add(A_.id),V$.slice(Math.max(0,y$-2),y$)==="](")return`/media/${A_.id}`;return A_.name||"attachment"}),usedIds:F_}},x0=[],J0=[],r_=[],Q0=[],X0=[],S_=[],E0=[],w0=0;if(L_.length>0)L_.forEach((w)=>{if(w?.type==="text"&&w.annotations)E0.push(w.annotations);if(w?.type==="generated_widget")S_.push(w);else if(w?.type==="resource_link")Q0.push(w);else if(w?.type==="resource")X0.push(w);else if(w?.type==="file"){let s=k_[w0++];if(s)J0.push(s),r_.push({id:s,name:w?.name||w?.filename||w?.title})}else if(w?.type==="image"||!w?.type){let s=k_[w0++];if(s){let F_=typeof w?.mime_type==="string"?w.mime_type:void 0;x0.push({id:s,annotations:w?.annotations,mimeType:F_}),r_.push({id:s,name:w?.name||w?.filename||w?.title})}}});else if(k_.length>0){let w=g_.length>0;k_.forEach((s,F_)=>{let M_=g_[F_]||null;if(r_.push({id:s,name:M_?.label||null}),w)J0.push(s);else x0.push({id:s,annotations:null})})}if(g_.length>0)g_.forEach((w)=>{if(!w?.id)return;let s=r_.find((F_)=>String(F_.id)===String(w.id));if(s&&!s.name)s.name=w.label});let{content:P_,usedIds:Y0}=c_(G_,r_);G_=P_;let L0=x0.filter(({id:w})=>!Y0.has(w)),E_=J0.filter((w)=>!Y0.has(w)),W0=g_.length>0?g_.map((w,s)=>({id:w.id||`attachment-${s+1}`,label:w.label||`attachment-${s+1}`})):r_.map((w,s)=>({id:w.id,label:w.name||`attachment-${s+1}`})),f_=I_(()=>t4(L_),[L_]),C_=I_(()=>e4(L_),[L_]),v_=I_(()=>{return f_.map((w)=>`${w.card_id}:${w.state}`).join("|")},[f_]);b(()=>{if(!A.current)return;return j2(A.current),mj(A.current)},[n_]);let e0=k(null);return b(()=>{if(!e0.current||f_.length===0)return;let w=e0.current;w.innerHTML="";for(let s of f_){let F_=document.createElement("div");w.appendChild(F_),x6(F_,s,{onAction:async(M_)=>{if(M_.type==="Action.OpenUrl"){let Z0=P2(M_.url||"");if(!Z0)throw Error("Invalid URL");window.open(Z0,"_blank","noopener,noreferrer");return}if(M_.type==="Action.Submit"){await y4({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:M_.type,title:M_.title||"",data:M_.data}});return}console.warn("[post] unsupported adaptive card action:",M_.type,M_)}}).catch((M_)=>{console.error("[post] adaptive card render error:",M_),F_.textContent=s.fallback_text||"Card failed to render."})}},[v_,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${a?"agent-post":""} ${X?"thread-reply":""} ${F?"thread-prev":""} ${P?"thread-next":""} ${C?"removing":""}" onClick=${$}>
            <div class="post-avatar ${a?"agent-avatar":""} ${e.image?"has-image":""}" style=${y_}>
                ${e.image?B`<img src=${e.image} alt=${N_} />`:e.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${b_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${N_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(w)=>{if(w.preventDefault(),w.stopPropagation(),Z)Z(_.id)}}>${A6(_.timestamp)}</a>
                </div>
                ${X_&&U_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${K1(U_.originalLength)} chars
                            ${U_.maxLength?B` • Display limit: ${K1(U_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${V_&&U_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${K1(U_.maxLength)} of ${K1(U_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(l_.length>0||T_.length>0||W0.length>0)&&B`
                    <div class="post-file-refs">
                        ${T_.map((w)=>{let s=(F_)=>{if(F_.preventDefault(),F_.stopPropagation(),N)N(w,_.chat_jid||null);else{let M_=document.getElementById("post-"+w);if(M_)M_.scrollIntoView({behavior:"smooth",block:"center"}),M_.classList.add("post-highlight"),setTimeout(()=>M_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${w}`} class="post-msg-pill-link" onClick=${s}>
                                    <${b$}
                                        prefix="post"
                                        label=${"msg:"+w}
                                        title=${"Message "+w}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${l_.map((w)=>{let s=w.split("/").pop()||w;return B`
                                <${b$}
                                    prefix="post"
                                    label=${s}
                                    title=${w}
                                    onClick=${()=>u?.(w)}
                                />
                            `})}
                        ${W0.map((w)=>B`
                            <${Mj}
                                key=${w.id}
                                attachment=${w}
                                onPreview=${w_}
                            />
                        `)}
                    </div>
                `}
                ${R_&&B`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:n_}}
                        onClick=${(w)=>{if(w.target.classList.contains("hashtag")){w.preventDefault(),w.stopPropagation();let s=w.target.dataset.hashtag;if(s)j?.(s)}else if(w.target.tagName==="IMG")w.preventDefault(),w.stopPropagation(),m(w.target.src)}}
                    />
                `}
                ${f_.length>0&&B`
                    <div ref=${e0} class="post-adaptive-cards" />
                `}
                ${C_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${C_.map((w,s)=>{let F_=C6(w),M_=`${w.card_id}-${s}`;return B`
                                <div key=${M_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${F_.title}</span>
                                        </div>
                                    </div>
                                    ${F_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${F_.fields.map((Z0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${Z0.key}: ${Z0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${Z0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${Z0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${M2(F_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${S_.length>0&&B`
                    <div class="generated-widget-launches">
                        ${S_.map((w,s)=>B`
                            <${xj}
                                key=${w.widget_id||w.id||`${_.id}-widget-${s}`}
                                block=${w}
                                post=${_}
                                onOpenWidget=${E}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&B`
                    ${E0.map((w,s)=>B`
                        <${h1} key=${s} annotations=${w} />
                    `)}
                `}
                ${L0.length>0&&B`
                    <div class="media-preview">
                        ${L0.map(({id:w,mimeType:s})=>{let M_=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?J$(w):I4(w);return B`
                                <img 
                                    key=${w} 
                                    src=${M_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(Z0)=>s_(Z0,w)}
                                />
                            `})}
                    </div>
                `}
                ${L0.length>0&&B`
                    ${L0.map(({annotations:w},s)=>B`
                        ${w&&B`<${h1} key=${s} annotations=${w} />`}
                    `)}
                `}
                ${E_.length>0&&B`
                    <div class="file-attachments">
                        ${E_.map((w)=>B`
                            <${Pj} key=${w} mediaId=${w} onPreview=${w_} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&B`
                    <div class="resource-links">
                        ${Q0.map((w,s)=>B`
                            <div key=${s}>
                                <${Ij} block=${w} />
                                <${h1} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${X0.length>0&&B`
                    <div class="resource-embeds">
                        ${X0.map((w,s)=>B`
                            <div key=${s}>
                                <${Tj} block=${w} />
                                <${h1} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${S.link_previews.map((w,s)=>B`
                            <${fj} key=${s} preview=${w} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&B`<${S6} src=${x} onClose=${()=>m(null)} />`}
        ${p_&&B`
            <${b6}
                mediaId=${p_.mediaId}
                info=${p_.info}
                onClose=${()=>o_(null)}
            />
        `}
    `}function v6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:z,onFileRef:G,onOpenWidget:L,emptyMessage:q,timelineRef:W,agents:X,user:F,onDeletePost:P,reverse:C=!0,removingPostIds:g,searchQuery:u}){let[E,x]=v(!1),m=k(null),A=typeof IntersectionObserver<"u",S=M(async()=>{if(!j||!$||E)return;x(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,E,j]),a=M(($_)=>{let{scrollTop:Y_,scrollHeight:V_,clientHeight:X_}=$_.target,U_=C?V_-X_-Y_:Y_,L_=Math.max(300,X_);if(U_<L_)S()},[C,S]);b(()=>{if(!A)return;let $_=m.current,Y_=W?.current;if(!$_||!Y_)return;let V_=300,X_=new IntersectionObserver((U_)=>{for(let L_ of U_){if(!L_.isIntersecting)continue;S()}},{root:Y_,rootMargin:`${V_}px 0px ${V_}px 0px`,threshold:0});return X_.observe($_),()=>X_.disconnect()},[A,$,j,W,S]);let Z_=k(S);if(Z_.current=S,b(()=>{if(A)return;if(!W?.current)return;let{scrollTop:$_,scrollHeight:Y_,clientHeight:V_}=W.current,X_=C?Y_-V_-$_:$_,U_=Math.max(300,V_);if(X_<U_)Z_.current?.()},[A,_,$,C,W]),b(()=>{if(!W?.current)return;if(!$||E)return;let{scrollTop:$_,scrollHeight:Y_,clientHeight:V_}=W.current,X_=C?Y_-V_-$_:$_,U_=Math.max(300,V_);if(Y_<=V_+1||X_<U_)Z_.current?.()},[_,$,E,C,W]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let N_=_.slice().sort(($_,Y_)=>$_.id-Y_.id),e=($_)=>{let Y_=$_?.data?.thread_id;if(Y_===null||Y_===void 0||Y_==="")return null;let V_=Number(Y_);return Number.isFinite(V_)?V_:null},r=new Map;for(let $_=0;$_<N_.length;$_+=1){let Y_=N_[$_],V_=Number(Y_?.id),X_=e(Y_);if(X_!==null){let U_=r.get(X_)||{anchorIndex:-1,replyIndexes:[]};U_.replyIndexes.push($_),r.set(X_,U_)}else if(Number.isFinite(V_)){let U_=r.get(V_)||{anchorIndex:-1,replyIndexes:[]};U_.anchorIndex=$_,r.set(V_,U_)}}let z_=new Map;for(let[$_,Y_]of r.entries()){let V_=new Set;if(Y_.anchorIndex>=0)V_.add(Y_.anchorIndex);for(let X_ of Y_.replyIndexes)V_.add(X_);z_.set($_,Array.from(V_).sort((X_,U_)=>X_-U_))}let f0=N_.map(($_,Y_)=>{let V_=e($_);if(V_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=z_.get(V_);if(!X_||X_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let U_=X_.indexOf(Y_);if(U_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:U_>0,hasThreadNext:U_<X_.length-1}}),y_=B`<div class="timeline-sentinel" ref=${m}></div>`;return B`
        <div class="timeline ${C?"reverse":"normal"}" ref=${W} onScroll=${a}>
            <div class="timeline-content">
                ${C?y_:null}
                ${N_.map(($_,Y_)=>{let V_=Boolean($_.data?.thread_id&&$_.data.thread_id!==$_.id),X_=g?.has?.($_.id),U_=f0[Y_]||{};return B`
                    <${R6}
                        key=${$_.id}
                        post=${$_}
                        isThreadReply=${V_}
                        isThreadPrev=${U_.hasThreadPrev}
                        isThreadNext=${U_.hasThreadNext}
                        isRemoving=${X_}
                        highlightQuery=${u}
                        agentName=${U6($_.data?.agent_id,X||{})}
                        agentAvatarUrl=${O6($_.data?.agent_id,X||{})}
                        userName=${F?.name||F?.user_name}
                        userAvatarUrl=${F?.avatar_url||F?.avatarUrl||F?.avatar}
                        userAvatarBackground=${F?.avatar_background||F?.avatarBackground}
                        onClick=${()=>Z?.($_)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onOpenWidget=${L}
                        onDelete=${P}
                    />
                `})}
                ${C?null:y_}
            </div>
        </div>
    `}class u6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var _0=new u6;var i1=null,_3=null;function lj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function m6(){if(_3)return Promise.resolve(_3);if(!i1)i1=import(lj()).then((_)=>{return _3=_,_}).catch((_)=>{throw i1=null,_});return i1}class g6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await m6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var $3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new g6(_,$)}};function j3(){m6().catch(()=>{})}var N3="piclaw://terminal";var nj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},dj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},l1=null,Z3=null;function sj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function oj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!sj(z))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function rj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!l1)l1=oj(()=>Promise.resolve($.init?.())).catch((j)=>{throw l1=null,j});return await l1,$}async function aj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Z3)Z3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Z3}async function tj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function ej(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function _Z(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Z2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function $Z(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function p6(){let _=_Z(),$=_?dj:nj,j=Z2("--bg-primary",_?"#000000":"#ffffff"),Z=Z2("--text-primary",_?"#e7e9ea":"#0f1419"),N=Z2("--text-secondary",_?"#71767b":"#536471"),Y=Z2("--accent-color","#1d9bf0"),z=Z2("--danger-color",_?"#ff7b72":"#cf222e"),G=Z2("--success-color",_?"#7ee787":"#1a7f37"),L=Z2("--bg-hover",_?"#1d1f23":"#e8ebed"),q=Z2("--border-color",_?"#2f3336":"#eff3f4"),W=Z2("--accent-soft-strong",$Z(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:W,selectionForeground:Z,black:L,red:z,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class Y3{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await rj();if(await aj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:p6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=p6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await tj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(ej($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var z3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new Y3(_,$)}},K3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new Y3(_,$)}};function L2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function jZ(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",z=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,W=[];for(let F of q.split("/")){if(!F||F===".")continue;if(F===".."){if(W.length>0)W.pop();continue}W.push(F)}let X=W.join("/");return`${M1(X)}${Y}${z}`}function q1(_){return _?.preview||null}function ZZ(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function NZ(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function YZ(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${L2($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${L2(E$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${L2(M2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${L2(NZ($))}</span>`),Z.push(`<span><strong>extension:</strong> ${L2(ZZ(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${L2(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function zZ(_){let $=q1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=YZ(_,$);if($.kind==="image"){let Z=$.url||($.path?M1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${L2(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=K$($.text||"",null,{rewriteImageSrc:(N)=>jZ(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${L2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class V3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=zZ(this.context)}getContent(){let _=q1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=q1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var G3={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=q1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new V3(_,$)}},Q3={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return q1(_)||_?.path?1:!1},mount(_,$){return new V3(_,$)}};var KZ=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),VZ={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},GZ={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function h6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function c6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class i6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=h6(j),Y=GZ[N]||"\uD83D\uDCC4",z=VZ[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${c6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${c6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let L=G.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var q3={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=h6(_?.path);if(!$||!KZ.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new i6(_,$);return new l6(_,$)}};var QZ=/\.(csv|tsv)$/i;function n6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class d6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${n6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${n6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var X3={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QZ.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new d6(_,$);return new s6(_,$)}};var qZ=/\.pdf$/i;function XZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class o6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${XZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var L3={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qZ.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new o6(_,$);return new r6(_,$)}};var LZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function W3(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class a6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${W3(N)}" alt="${W3(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${W3(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class t6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var B3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LZ.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new a6(_,$);return new t6(_,$)}};var WZ=/\.(mp4|m4v|mov|webm|ogv)$/i;function BZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class e6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class _9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var U3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WZ.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new e6(_,$);return new _9(_,$)}};function UZ(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function OZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var O3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function $9(_){let $=String(_||"").trim();return $?$:O3}function FZ(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function HZ(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function DZ(_,$="*"){try{let j=(Y)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(z,G,L,q,W,X){try{if(z&&L!=null&&j({filename:z,format:G,data:L,mimeType:q,base64Encoded:Boolean(W),defaultMode:X}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(z,G,L,q,W,X){try{if(G&&j({filename:G,data:z,mimeType:L,base64Encoded:Boolean(q),mode:W,folderId:X}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function j9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${HZ(j)}`}class Z9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${OZ(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class N9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=FZ(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&format=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(DZ(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=O3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await j9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await j9(_,"image/png");else this.xmlData=$9(await _.text());else if(_.status===404)this.xmlData=O3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?$9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var F3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!UZ(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new Z9(_,$);return new N9(_,$)}};class Y9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $0=new Y9;var n1="workspaceExplorerScale",JZ=["compact","default","comfortable"],EZ=new Set(JZ),AZ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function z9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return EZ.has(j)?j:$}function H3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function yZ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function kZ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function D3(_={}){let $=yZ(_),j=_.stored?z9(_.stored,$):$;return kZ(j,_)}function K9(_){return AZ[z9(_)]}var PZ=60000,q9=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function MZ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Boolean(_0.resolve({path:$,mode:"edit"}))}function X9(_,$,j,Z=0,N=[]){if(!j&&q9(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)X9(Y,$,j,Z+1,N);return N}function V9(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&q9(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let z of Y.children)N(z)};return N(_),Z.join("|")}function y3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Z.length,z=Z.map((G)=>{let L=y3(N.get(G.path),G);if(L!==N.get(G.path))Y=!0;return L});return Y?{...$,children:z}:_}function E3(_,$,j){if(!_)return _;if(_.path===$)return y3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let z=E3(Y,$,j);if(z!==Y)Z=!0;return z});return Z?{..._,children:N}:_}var L9=4,J3=14,IZ=8,TZ=16;function W9(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=W9(Z);return _.__bytes=j,j}function B9(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=L9)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let G of N){let L=Math.max(0,Number(G?.__bytes??G?.size??0));if(L<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:L});else Y.push({kind:"file",name:G.name,path:G.path,size:L})}Y.sort((G,L)=>L.size-G.size);let z=Y;if(Y.length>J3){let G=Y.slice(0,J3-1),L=Y.slice(J3-1),q=L.reduce((W,X)=>W+X.size,0);G.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),z=G}return Z.children=z.map((G)=>{if(G.kind==="dir")return B9(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function G9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U9(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function d1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function k3(_,$,j,Z,N,Y){let z=Math.PI*2-0.0001,G=Y-N>z?N+z:Y,L=d1(_,$,Z,N),q=d1(_,$,Z,G),W=d1(_,$,j,G),X=d1(_,$,j,N),F=G-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var O9={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function F9(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),z=(G,L,q,W)=>{let X=Array.isArray(G?.children)?G.children:[];if(!X.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let P=q-L,C=L;X.forEach((g,u)=>{let E=Math.max(0,Number(g.size)||0);if(E<=0)return;let x=E/F,m=C,A=u===X.length-1?q:C+P*x;if(C=A,A-m<0.003)return;let S=O9[W];if(S){let a=U9(m,W,j);if(Z.push({key:g.path,path:g.path,label:g.name,size:E,color:a,depth:W,startAngle:m,endAngle:A,innerRadius:S[0],outerRadius:S[1],d:k3(120,120,S[0],S[1],m,A)}),W===1)N.push({key:g.path,name:g.name,size:E,pct:Y>0?E/Y*100:0,color:a})}if(W<L9)z(g,m,A,W+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function A3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=A3(Z,$);if(N)return N}return null}function H9(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=O9[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,z=Math.PI*3/2,G=U9(Y,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:k3(120,120,N[0],N[1],Y,z)}],legend:[{key:q,name:_,size:j,pct:100,color:G}]}}function Q9(_,$=!1,j=!1){if(!_)return null;let Z=W9(_),N=B9(_,0),Y=N.size||Z,{segments:z,legend:G}=F9(N,Y,j);if(!z.length&&Y>0){let L=H9("[files]",N.path,Y,j);z=L.segments,G=L.legend}return{root:N,totalSize:Y,segments:z,legend:G,truncated:$,isDarkTheme:j}}function xZ({payload:_}){if(!_)return null;let[$,j]=v(null),[Z,N]=v(_?.root?.path||"."),[Y,z]=v(()=>[_?.root?.path||"."]),[G,L]=v(!1);b(()=>{let r=_?.root?.path||".";N(r),z([r]),j(null)},[_?.root?.path,_?.totalSize]),b(()=>{if(!Z)return;L(!0);let r=setTimeout(()=>L(!1),180);return()=>clearTimeout(r)},[Z]);let q=I_(()=>{return A3(_.root,Z)||_.root},[_?.root,Z]),W=q?.size||_.totalSize||0,{segments:X,legend:F}=I_(()=>{let r=F9(q,W,_.isDarkTheme);if(r.segments.length>0)return r;if(W<=0)return r;let z_=q?.children?.length?"Total":"[files]";return H9(z_,q?.path||_?.root?.path||".",W,_.isDarkTheme)},[q,W,_.isDarkTheme,_?.root?.path]),[P,C]=v(X),g=k(new Map),u=k(0);b(()=>{let r=g.current,z_=new Map(X.map((Y_)=>[Y_.key,Y_])),f0=performance.now(),y_=220,$_=(Y_)=>{let V_=Math.min(1,(Y_-f0)/220),X_=V_*(2-V_),U_=X.map((L_)=>{let G_=r.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},d_=(g_,C0)=>g_+(C0-g_)*X_,l_=d_(G_.startAngle,L_.startAngle),V0=d_(G_.endAngle,L_.endAngle),T_=d_(G_.innerRadius,L_.innerRadius),j0=d_(G_.outerRadius,L_.outerRadius);return{...L_,d:k3(120,120,T_,j0,l_,V0)}});if(C(U_),V_<1)u.current=requestAnimationFrame($_)};if(u.current)cancelAnimationFrame(u.current);return u.current=requestAnimationFrame($_),g.current=z_,()=>{if(u.current)cancelAnimationFrame(u.current)}},[X]);let E=P.length?P:X,x=W>0?E$(W):"0 B",m=q?.name||"",S=(m&&m!=="."?m:"Total")||"Total",a=x,Z_=Y.length>1,N_=(r)=>{if(!r?.path)return;let z_=A3(_.root,r.path);if(!z_||!Array.isArray(z_.children)||z_.children.length===0)return;z((f0)=>[...f0,z_.path]),N(z_.path),j(null)},e=()=>{if(!Z_)return;z((r)=>{let z_=r.slice(0,-1);return N(z_[z_.length-1]||_?.root?.path||"."),z_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${W}>
                ${E.map((r)=>B`
                    <path
                        key=${r.key}
                        d=${r.d}
                        fill=${r.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===r.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(r)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(r)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>N_(r)}
                    >
                        <title>${r.label} — ${E$(r.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${Z_?" is-drill":""}`}
                    onClick=${e}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${F.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((r)=>B`
                        <div key=${r.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${r.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${r.name}>${r.name}</span>
                            <span class="workspace-folder-starburst-size">${E$(r.size)}</span>
                            <span class="workspace-folder-starburst-pct">${r.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function wZ({mediaId:_}){let[$,j]=v(null);if(b(()=>{if(!_)return;v2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?E$($.metadata.size):"";return B`
        <a href=${J$(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
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
    `}function D9({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:Y,terminalVisible:z=!1}){let[G,L]=v(null),[q,W]=v(new Set(["."])),[X,F]=v(null),[P,C]=v(null),[g,u]=v(""),[E,x]=v(null),[m,A]=v(null),[S,a]=v(!0),[Z_,N_]=v(!1),[e,r]=v(null),[z_,f0]=v(()=>u2("workspaceShowHidden",!1)),[y_,$_]=v(!1),[Y_,V_]=v(null),[X_,U_]=v(null),[L_,k_]=v(null),[G_,d_]=v(!1),[l_,V0]=v(null),[T_,j0]=v(()=>G9()),[g_,C0]=v(()=>D3({stored:z$(n1),...H3()})),[d,x_]=v(!1),Q_=k(q),D_=k(""),R_=k(null),G0=k(0),n_=k(new Set),s_=k(null),p_=k(new Map),o_=k(_),w_=k(Z),b_=k(null),c_=k(null),x0=k(null),J0=k(null),r_=k(null),Q0=k(null),X0=k("."),S_=k(null),E0=k({path:null,dragging:!1,startX:0,startY:0}),w0=k({path:null,dragging:!1,startX:0,startY:0}),P_=k({path:null,timer:0}),Y0=k(!1),L0=k(0),E_=k(new Map),W0=k(null),f_=k(null),C_=k(null),v_=k(null),e0=k(null),w=k(null),s=k(z_),F_=k($),M_=k(j??$),Z0=k(0),i0=k(L_),y$=k(y_),V$=k(Y_),A0=k(null),_$=k({x:0,y:0}),A_=k(0),N2=k(null),b0=k(X),G$=k(P),k$=k(null),h$=k(E);o_.current=_,w_.current=Z,b(()=>{Q_.current=q},[q]),b(()=>{s.current=z_},[z_]),b(()=>{F_.current=$},[$]),b(()=>{M_.current=j??$},[j,$]),b(()=>{i0.current=L_},[L_]),b(()=>{if(typeof window>"u")return;let U=()=>{C0(D3({stored:z$(n1),...H3()}))};U();let H=()=>U(),T=()=>U(),I=(l)=>{if(!l||l.key===null||l.key===n1)U()};window.addEventListener("resize",H),window.addEventListener("focus",T),window.addEventListener("storage",I);let p=window.matchMedia?.("(pointer: coarse)"),t=window.matchMedia?.("(hover: none)"),j_=(l,B_)=>{if(!l)return;if(l.addEventListener)l.addEventListener("change",B_);else if(l.addListener)l.addListener(B_)},__=(l,B_)=>{if(!l)return;if(l.removeEventListener)l.removeEventListener("change",B_);else if(l.removeListener)l.removeListener(B_)};return j_(p,H),j_(t,H),()=>{window.removeEventListener("resize",H),window.removeEventListener("focus",T),window.removeEventListener("storage",I),__(p,H),__(t,H)}},[]),b(()=>{let U=(H)=>{let T=H?.detail?.path;if(!T)return;let I=T.split("/"),p=[];for(let t=1;t<I.length;t++)p.push(I.slice(0,t).join("/"));if(p.length)W((t)=>{let j_=new Set(t);j_.add(".");for(let __ of p)j_.add(__);return j_});F(T),requestAnimationFrame(()=>{let t=document.querySelector(`[data-path="${CSS.escape(T)}"]`);if(t)t.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),b(()=>{y$.current=y_},[y_]),b(()=>{V$.current=Y_},[Y_]),b(()=>{b0.current=X},[X]),b(()=>{G$.current=P},[P]),b(()=>{h$.current=E},[E]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>j0(G9());U();let H=window.matchMedia?.("(prefers-color-scheme: dark)"),T=()=>U();if(H?.addEventListener)H.addEventListener("change",T);else if(H?.addListener)H.addListener(T);let I=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(I?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)I?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(H?.removeEventListener)H.removeEventListener("change",T);else if(H?.removeListener)H.removeListener(T);I?.disconnect()}},[]),b(()=>{if(!P)return;let U=r_.current;if(!U)return;let H=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(H)},[P]),b(()=>{if(!d)return;let U=(T)=>{let I=T?.target;if(!(I instanceof Element))return;if(e0.current?.contains(I))return;if(w.current?.contains(I))return;x_(!1)},H=(T)=>{if(T?.key==="Escape")x_(!1),w.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",H)}},[d]);let W2=async(U)=>{N_(!0),x(null),A(null);try{let H=await x4(U,20000);x(H)}catch(H){x({error:H.message||"Failed to load preview"})}finally{N_(!1)}};b_.current=W2;let s0=async()=>{if(!F_.current)return;try{let U=await j1("",1,s.current),H=V9(U.root,Q_.current,s.current);if(H===D_.current){a(!1);return}if(D_.current=H,R_.current=U.root,!G0.current)G0.current=requestAnimationFrame(()=>{G0.current=0,L((T)=>y3(T,R_.current)),a(!1)})}catch(U){r(U.message||"Failed to load workspace"),a(!1)}},$$=async(U)=>{if(!U)return;if(n_.current.has(U))return;n_.current.add(U);try{let H=await j1(U,1,s.current);L((T)=>E3(T,U,H.root))}catch(H){r(H.message||"Failed to load workspace")}finally{n_.current.delete(U)}};c_.current=$$;let B0=M(()=>{let U=X;if(!U)return".";let H=p_.current?.get(U);if(H&&H.type==="dir")return H.path;if(U==="."||!U.includes("/"))return".";let T=U.split("/");return T.pop(),T.join("/")||"."},[X]),N0=M((U)=>{let H=U?.closest?.(".workspace-row");if(!H)return null;let T=H.dataset.path,I=H.dataset.type;if(!T)return null;if(I==="dir")return T;if(T.includes("/")){let p=T.split("/");return p.pop(),p.join("/")||"."}return"."},[]),i$=M((U)=>{return N0(U?.target||null)},[N0]),a_=M((U)=>{i0.current=U,k_(U)},[]),v0=M(()=>{let U=P_.current;if(U?.timer)clearTimeout(U.timer);P_.current={path:null,timer:0}},[]),S0=M((U)=>{if(!U||U==="."){v0();return}let H=p_.current?.get(U);if(!H||H.type!=="dir"){v0();return}if(Q_.current?.has(U)){v0();return}if(P_.current?.path===U)return;v0();let T=setTimeout(()=>{P_.current={path:null,timer:0},c_.current?.(U),W((I)=>{let p=new Set(I);return p.add(U),p})},600);P_.current={path:U,timer:T}},[v0]),Q$=M((U,H)=>{if(_$.current={x:U,y:H},A_.current)return;A_.current=requestAnimationFrame(()=>{A_.current=0;let T=A0.current;if(!T)return;let I=_$.current;T.style.transform=`translate(${I.x+12}px, ${I.y+12}px)`})},[]),q$=M((U)=>{if(!U)return;let T=(p_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!T)return;U_({path:U,label:T})},[]),P$=M(()=>{if(U_(null),A_.current)cancelAnimationFrame(A_.current),A_.current=0;if(A0.current)A0.current.style.transform="translate(-9999px, -9999px)"},[]),x2=M((U)=>{if(!U)return".";let H=p_.current?.get(U);if(H&&H.type==="dir")return H.path;if(U==="."||!U.includes("/"))return".";let T=U.split("/");return T.pop(),T.join("/")||"."},[]),M$=M(()=>{C(null),u("")},[]),B2=M((U)=>{if(!U)return;let T=(p_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!T||U===".")return;C(U),u(T)},[]),w2=M(async()=>{let U=G$.current;if(!U)return;let H=(g||"").trim();if(!H){M$();return}let T=p_.current?.get(U),I=(T?.name||U.split("/").pop()||U).trim();if(H===I){M$();return}try{let t=(await C4(U,H))?.path||U,j_=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(M$(),r(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:t,type:T?.type||"file"}})),T?.type==="dir")W((__)=>{let l=new Set;for(let B_ of __)if(B_===U)l.add(t);else if(B_.startsWith(`${U}/`))l.add(`${t}${B_.slice(U.length)}`);else l.add(B_);return l});if(F(t),T?.type==="dir")x(null),N_(!1),A(null);else b_.current?.(t);c_.current?.(j_)}catch(p){r(p?.message||"Failed to rename file")}},[M$,g]),L1=M(async(U)=>{let I=U||".";for(let p=0;p<50;p+=1){let j_=`untitled${p===0?"":`-${p}`}.md`;try{let l=(await f4(I,j_,""))?.path||(I==="."?j_:`${I}/${j_}`);if(I&&I!==".")W((B_)=>new Set([...B_,I]));F(l),r(null),c_.current?.(I),b_.current?.(l);return}catch(__){if(__?.status===409||__?.code==="file_exists")continue;r(__?.message||"Failed to create file");return}}r("Failed to create file (untitled name already in use).")},[]),l$=M((U)=>{if(U?.stopPropagation?.(),G_)return;let H=x2(b0.current);L1(H)},[G_,x2,L1]);b(()=>{if(typeof window>"u")return;let U=(H)=>{let T=H?.detail?.updates||[];if(!Array.isArray(T)||T.length===0)return;L((__)=>{let l=__;for(let B_ of T){if(!B_?.root)continue;if(!l||B_.path==="."||!B_.path)l=B_.root;else l=E3(l,B_.path,B_.root)}if(l)D_.current=V9(l,Q_.current,s.current);return a(!1),l});let I=b0.current;if(Boolean(I)&&T.some((__)=>{let l=__?.path||"";if(!l||l===".")return!0;return I===l||I.startsWith(`${l}/`)||l.startsWith(`${I}/`)}))E_.current.clear();if(!I||!h$.current)return;let t=p_.current?.get(I);if(t&&t.type==="dir")return;if(T.some((__)=>{let l=__?.path||"";if(!l||l===".")return!0;return I===l||I.startsWith(`${l}/`)}))b_.current?.(I)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),s_.current=s0;let j$=k(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),H=M_.current??F_.current,T=document.visibilityState!=="hidden"&&(H||U.matches&&F_.current);Z1(T,s.current).catch(()=>{})}).current,X$=k(0),L$=k(()=>{if(X$.current)clearTimeout(X$.current);X$.current=setTimeout(()=>{X$.current=0,j$()},250)}).current;b(()=>{if(F_.current)s_.current?.();L$()},[$,j]),b(()=>{s_.current(),j$();let U=setInterval(()=>s_.current(),PZ),H=m2("previewHeight",null),T=Number.isFinite(H)?Math.min(Math.max(H,80),600):280;if(L0.current=T,x0.current)x0.current.style.setProperty("--preview-height",`${T}px`);let I=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),p=()=>L$();if(I.addEventListener)I.addEventListener("change",p);else if(I.addListener)I.addListener(p);return document.addEventListener("visibilitychange",p),()=>{if(clearInterval(U),G0.current)cancelAnimationFrame(G0.current),G0.current=0;if(I.removeEventListener)I.removeEventListener("change",p);else if(I.removeListener)I.removeListener(p);if(document.removeEventListener("visibilitychange",p),X$.current)clearTimeout(X$.current),X$.current=0;if(S_.current)clearTimeout(S_.current),S_.current=null;Z1(!1,s.current).catch(()=>{})}},[]);let y0=I_(()=>X9(G,q,z_),[G,q,z_]),o0=I_(()=>new Map(y0.map((U)=>[U.node.path,U.node])),[y0]),n$=I_(()=>K9(g_),[g_]);p_.current=o0;let U0=(X?p_.current.get(X):null)?.type==="dir";b(()=>{if(!X||!U0){V0(null),W0.current=null,f_.current=null;return}let U=X,H=`${z_?"hidden":"visible"}:${X}`,T=E_.current,I=T.get(H);if(I?.root){T.delete(H),T.set(H,I);let j_=Q9(I.root,Boolean(I.truncated),T_);if(j_)W0.current=j_,f_.current=X,V0({loading:!1,error:null,payload:j_});return}let p=W0.current,t=f_.current;V0({loading:!0,error:null,payload:t===X?p:null}),j1(X,IZ,z_).then((j_)=>{if(b0.current!==U)return;let __={root:j_?.root,truncated:Boolean(j_?.truncated)};T.delete(H),T.set(H,__);while(T.size>TZ){let B_=T.keys().next().value;if(!B_)break;T.delete(B_)}let l=Q9(__.root,__.truncated,T_);W0.current=l,f_.current=X,V0({loading:!1,error:null,payload:l})}).catch((j_)=>{if(b0.current!==U)return;V0({loading:!1,error:j_?.message||"Failed to load folder size chart",payload:t===X?p:null})})},[X,U0,z_,T_]);let O0=Boolean(E&&E.kind==="text"&&!U0&&(!E.size||E.size<=262144)),l0=O0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(X&&X!=="."),R$=Boolean(X&&!U0),v$=Boolean(X&&!U0),u0=X&&U0?I1(X,z_):null,m0=M(()=>x_(!1),[]),t_=M(async(U)=>{m0();try{await U?.()}catch{}},[m0]);b(()=>{let U=C_.current;if(v_.current)v_.current.dispose(),v_.current=null;if(!U)return;if(U.innerHTML="",!X||U0||!E||E.error)return;let H={path:X,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},T=_0.resolve(H)||_0.get("workspace-preview-default");if(!T)return;let I=T.mount(U,H);return v_.current=I,()=>{if(v_.current===I)I.dispose(),v_.current=null;U.innerHTML=""}},[X,U0,E]);let n0=(U)=>{let H=U?.target;if(H instanceof Element)return H;return H?.parentElement||null},W$=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},B$=k((U)=>{let H=n0(U),T=H?.closest?.("[data-path]");if(!T)return;let I=T.dataset.path;if(!I||I===".")return;let p=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),t=Boolean(H?.closest?.(".workspace-caret"));if(p||t)return;if(G$.current===I)return;B2(I)}).current,r0=k((U)=>{if(Y0.current){Y0.current=!1;return}let H=n0(U),T=H?.closest?.("[data-path]");if(J0.current?.focus?.(),!T)return;let I=T.dataset.path,p=T.dataset.type,t=Boolean(H?.closest?.(".workspace-caret")),j_=Boolean(H?.closest?.("button"))||Boolean(H?.closest?.("a"))||Boolean(H?.closest?.("input")),__=b0.current===I,l=G$.current;if(l){if(l===I)return;M$()}let B_=p==="file"&&k$.current===I&&!t&&!j_;if(p==="dir"){if(k$.current=null,F(I),x(null),A(null),N_(!1),!Q_.current.has(I))c_.current?.(I);if(__&&!t)return;W((Z$)=>{let q0=new Set(Z$);if(q0.has(I))q0.delete(I);else q0.add(I);return q0})}else{k$.current=null,F(I);let M0=p_.current.get(I);if(M0)o_.current?.(M0.path,M0);if(!j_&&!t&&MZ(I))w_.current?.(I,h$.current);else b_.current?.(I)}}).current,k0=k(()=>{D_.current="",s_.current(),Array.from(Q_.current||[]).filter((H)=>H&&H!==".").forEach((H)=>c_.current?.(H))}).current,I$=k(()=>{k$.current=null,F(null),x(null),A(null),N_(!1)}).current,s$=k(()=>{f0((U)=>{let H=!U;if(typeof window<"u")e_("workspaceShowHidden",String(H));return s.current=H,Z1(!0,H).catch(()=>{}),D_.current="",s_.current?.(),Array.from(Q_.current||[]).filter((I)=>I&&I!==".").forEach((I)=>c_.current?.(I)),H})}).current,Y2=k((U)=>{if(n0(U)?.closest?.("[data-path]"))return;I$()}).current,T$=M(async(U)=>{if(!U)return;let H=U.split("/").pop()||U;if(!window.confirm(`Delete "${H}"? This cannot be undone.`))return;try{await S4(U);let I=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(b0.current===U)I$();c_.current?.(I),r(null)}catch(I){x((p)=>({...p||{},error:I.message||"Failed to delete file"}))}},[I$]),u$=M((U)=>{let H=J0.current;if(!H||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;H.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=M((U)=>{let H=y0;if(!H||H.length===0)return;let T=X?H.findIndex((I)=>I.node.path===X):-1;if(U.key==="ArrowDown"){U.preventDefault();let I=Math.min(T+1,H.length-1),p=H[I];if(!p)return;if(F(p.node.path),p.node.type!=="dir")o_.current?.(p.node.path,p.node),b_.current?.(p.node.path);else x(null),N_(!1),A(null);u$(p.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let I=T<=0?0:T-1,p=H[I];if(!p)return;if(F(p.node.path),p.node.type!=="dir")o_.current?.(p.node.path,p.node),b_.current?.(p.node.path);else x(null),N_(!1),A(null);u$(p.node.path);return}if(U.key==="ArrowRight"&&T>=0){let I=H[T];if(I?.node?.type==="dir"&&!q.has(I.node.path))U.preventDefault(),c_.current?.(I.node.path),W((p)=>new Set([...p,I.node.path]));return}if(U.key==="ArrowLeft"&&T>=0){let I=H[T];if(I?.node?.type==="dir"&&q.has(I.node.path))U.preventDefault(),W((p)=>{let t=new Set(p);return t.delete(I.node.path),t});return}if(U.key==="Enter"&&T>=0){U.preventDefault();let I=H[T];if(!I)return;let p=I.node.path;if(I.node.type==="dir"){if(!Q_.current.has(p))c_.current?.(p);W((j_)=>{let __=new Set(j_);if(__.has(p))__.delete(p);else __.add(p);return __}),x(null),A(null),N_(!1)}else o_.current?.(p,I.node),b_.current?.(p);return}if((U.key==="Delete"||U.key==="Backspace")&&T>=0){let I=H[T];if(!I||I.node.type==="dir")return;U.preventDefault(),T$(I.node.path);return}if(U.key==="Escape")U.preventDefault(),I$()},[I$,T$,q,y0,u$,X]),P0=M((U)=>{let H=n0(U),T=H?.closest?.(".workspace-row");if(!T)return;let I=T.dataset.type,p=T.dataset.path;if(!p||p===".")return;if(G$.current===p)return;let t=U?.touches?.[0];if(!t)return;if(E0.current={path:W$(H)?p:null,dragging:!1,startX:t.clientX,startY:t.clientY},I!=="file")return;if(S_.current)clearTimeout(S_.current);S_.current=setTimeout(()=>{if(S_.current=null,E0.current?.dragging)return;T$(p)},600)},[T$]),x$=M(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;let U=E0.current;if(U?.dragging&&U.path){let H=i0.current||B0(),T=N2.current;if(typeof T==="function")T(U.path,H)}E0.current={path:null,dragging:!1,startX:0,startY:0},Z0.current=0,$_(!1),V_(null),a_(null),v0(),P$()},[B0,P$,a_,v0]),r$=M((U)=>{let H=E0.current,T=U?.touches?.[0];if(!T||!H?.path){if(S_.current)clearTimeout(S_.current),S_.current=null;return}let I=Math.abs(T.clientX-H.startX),p=Math.abs(T.clientY-H.startY),t=I>8||p>8;if(t&&S_.current)clearTimeout(S_.current),S_.current=null;if(!H.dragging&&t)H.dragging=!0,$_(!0),V_("move"),q$(H.path);if(H.dragging){U.preventDefault(),Q$(T.clientX,T.clientY);let j_=document.elementFromPoint(T.clientX,T.clientY),__=N0(j_)||B0();if(i0.current!==__)a_(__);S0(__)}},[N0,B0,q$,Q$,a_,S0]),U2=k((U)=>{U.preventDefault();let H=x0.current;if(!H)return;let T=U.clientY,I=L0.current||280,p=U.currentTarget;p.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let t=T,j_=(l)=>{t=l.clientY;let B_=H.clientHeight-80,M0=Math.min(Math.max(I-(l.clientY-T),80),B_);H.style.setProperty("--preview-height",`${M0}px`),L0.current=M0},__=()=>{let l=H.clientHeight-80,B_=Math.min(Math.max(I-(t-T),80),l);L0.current=B_,p.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",e_("previewHeight",String(Math.round(B_))),document.removeEventListener("mousemove",j_),document.removeEventListener("mouseup",__)};document.addEventListener("mousemove",j_),document.addEventListener("mouseup",__)}).current,z2=k((U)=>{U.preventDefault();let H=x0.current;if(!H)return;let T=U.touches[0];if(!T)return;let I=T.clientY,p=L0.current||280,t=U.currentTarget;t.classList.add("dragging"),document.body.style.userSelect="none";let j_=(l)=>{let B_=l.touches[0];if(!B_)return;l.preventDefault();let M0=H.clientHeight-80,Z$=Math.min(Math.max(p-(B_.clientY-I),80),M0);H.style.setProperty("--preview-height",`${Z$}px`),L0.current=Z$},__=()=>{t.classList.remove("dragging"),document.body.style.userSelect="",e_("previewHeight",String(Math.round(L0.current||p))),document.removeEventListener("touchmove",j_),document.removeEventListener("touchend",__),document.removeEventListener("touchcancel",__)};document.addEventListener("touchmove",j_,{passive:!1}),document.addEventListener("touchend",__),document.addEventListener("touchcancel",__)}).current,w$=async()=>{if(!X)return;try{let U=await w4(X);if(U.media_id)A(U.media_id)}catch(U){x((H)=>({...H||{},error:U.message||"Failed to attach"}))}},m$=async()=>{if(!X||U0)return;await T$(X)},g0=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},a0=M((U)=>{if(!g0(U))return;if(U.preventDefault(),Z0.current+=1,!y$.current)$_(!0);V_("upload");let H=i$(U)||B0();a_(H),S0(H)},[B0,i$,a_,S0]),a$=M((U)=>{if(!g0(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!y$.current)$_(!0);if(V$.current!=="upload")V_("upload");let H=i$(U)||B0();if(i0.current!==H)a_(H);S0(H)},[B0,i$,a_,S0]),K2=M((U)=>{if(!g0(U))return;if(U.preventDefault(),Z0.current=Math.max(0,Z0.current-1),Z0.current===0)$_(!1),V_(null),a_(null),v0()},[a_,v0]),f$=M(async(U,H=".")=>{let T=Array.from(U||[]);if(T.length===0)return;let I=H&&H!==""?H:".",p=I!=="."?I:"workspace root";d_(!0);try{let t=null;for(let j_ of T)try{t=await P1(j_,I)}catch(__){let l=__?.status,B_=__?.code;if(l===409||B_==="file_exists"){let M0=j_?.name||"file";if(!window.confirm(`"${M0}" already exists in ${p}. Overwrite?`))continue;t=await P1(j_,I,{overwrite:!0})}else throw __}if(t?.path)k$.current=t.path,F(t.path),b_.current?.(t.path);c_.current?.(I)}catch(t){r(t.message||"Failed to upload file")}finally{d_(!1)}},[]),V2=M(async(U,H)=>{if(!U)return;let T=p_.current?.get(U);if(!T)return;let I=H&&H!==""?H:".",p=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(I===p)return;try{let j_=(await b4(U,I))?.path||U;if(T.type==="dir")W((__)=>{let l=new Set;for(let B_ of __)if(B_===U)l.add(j_);else if(B_.startsWith(`${U}/`))l.add(`${j_}${B_.slice(U.length)}`);else l.add(B_);return l});if(F(j_),T.type==="dir")x(null),N_(!1),A(null);else b_.current?.(j_);c_.current?.(p),c_.current?.(I)}catch(t){r(t?.message||"Failed to move entry")}},[]);N2.current=V2;let F0=M(async(U)=>{if(!g0(U))return;U.preventDefault(),Z0.current=0,$_(!1),V_(null),k_(null),v0();let H=Array.from(U?.dataTransfer?.files||[]);if(H.length===0)return;let T=i0.current||i$(U)||B0();await f$(H,T)},[B0,i$,f$]),t$=M((U)=>{if(U?.stopPropagation?.(),G_)return;let H=U?.currentTarget?.dataset?.uploadTarget||".";X0.current=H,Q0.current?.click()},[G_]),g$=M(()=>{if(G_)return;let U=b0.current,H=U?p_.current?.get(U):null;X0.current=H?.type==="dir"?H.path:".",Q0.current?.click()},[G_]),O2=M(()=>{t_(()=>l$(null))},[t_,l$]),U$=M(()=>{t_(()=>g$())},[t_,g$]),G2=M(()=>{t_(()=>k0())},[t_,k0]),F2=M(()=>{t_(()=>s$())},[t_,s$]),H2=M(()=>{if(!X||!O0)return;t_(()=>w_.current?.(X,E))},[t_,X,O0,E]),c2=M(()=>{if(!X||X===".")return;t_(()=>B2(X))},[t_,X,B2]),D2=M(()=>{if(!X||U0)return;t_(()=>m$())},[t_,X,U0,m$]),W_=M(()=>{if(!X||U0)return;t_(()=>w$())},[t_,X,U0,w$]),f2=M(()=>{if(!u0)return;if(m0(),typeof window<"u")window.open(u0,"_blank","noopener")},[m0,u0]),h2=M(()=>{m0(),N?.()},[m0,N]),i2=M(()=>{m0(),Y?.()},[m0,Y]),C$=M((U)=>{if(!U||U.button!==0)return;let H=U.currentTarget;if(!H||!H.dataset)return;let T=H.dataset.path;if(!T||T===".")return;if(G$.current===T)return;let I=n0(U);if(I?.closest?.("button, a, input, .workspace-caret"))return;if(!W$(I))return;U.preventDefault(),w0.current={path:T,dragging:!1,startX:U.clientX,startY:U.clientY};let p=(j_)=>{let __=w0.current;if(!__?.path)return;let l=Math.abs(j_.clientX-__.startX),B_=Math.abs(j_.clientY-__.startY),M0=l>4||B_>4;if(!__.dragging&&M0)__.dragging=!0,Y0.current=!0,$_(!0),V_("move"),q$(__.path),Q$(j_.clientX,j_.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(__.dragging){j_.preventDefault(),Q$(j_.clientX,j_.clientY);let Z$=document.elementFromPoint(j_.clientX,j_.clientY),q0=N0(Z$)||B0();if(i0.current!==q0)a_(q0);S0(q0)}},t=()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",t);let j_=w0.current;if(j_?.dragging&&j_.path){let __=i0.current||B0(),l=N2.current;if(typeof l==="function")l(j_.path,__)}w0.current={path:null,dragging:!1,startX:0,startY:0},Z0.current=0,$_(!1),V_(null),a_(null),v0(),P$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{Y0.current=!1},0)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",t)},[N0,B0,q$,Q$,P$,a_,S0,v0]),l2=M(async(U)=>{let H=Array.from(U?.target?.files||[]);if(H.length===0)return;let T=X0.current||".";if(await f$(H,T),X0.current=".",U?.target)U.target.value=""},[f$]);return B`
        <aside
            class=${`workspace-sidebar${y_?" workspace-drop-active":""}`}
            data-workspace-scale=${g_}
            ref=${x0}
            onDragEnter=${a0}
            onDragOver=${a$}
            onDragLeave=${K2}
            onDrop=${F0}
        >
            <input type="file" multiple style="display:none" ref=${Q0} onChange=${l2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${w}
                            class=${`workspace-menu-button${d?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),x_((H)=>!H)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${d?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${d&&B`
                            <div class="workspace-menu-dropdown" ref=${e0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${O2} disabled=${G_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${U$} disabled=${G_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${G2}>Refresh tree</button>
                                <button class=${`workspace-menu-item${z_?" active":""}`} role="menuitem" onClick=${F2}>
                                    ${z_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${X&&B`<div class="workspace-menu-separator"></div>`}
                                ${X&&!U0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${H2} disabled=${!O0}>Open in editor</button>
                                `}
                                ${d$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c2}>Rename selected</button>
                                `}
                                ${v$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${W_}>Download selected file</button>
                                `}
                                ${u0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f2}>Download selected folder (zip)</button>
                                `}
                                ${R$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${D2}>Delete selected file</button>
                                `}

                                ${(N||Y)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${i2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${l$} title="New file" disabled=${G_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${k0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Y2}>
                ${G_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${S&&B`<div class="workspace-loading">Loading…</div>`}
                ${e&&B`<div class="workspace-error">${e}</div>`}
                ${G&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${J0}
                        tabIndex="0"
                        onClick=${r0}
                        onDblClick=${B$}
                        onKeyDown=${o$}
                        onTouchStart=${P0}
                        onTouchEnd=${x$}
                        onTouchMove=${r$}
                        onTouchCancel=${x$}
                    >
                        ${y0.map(({node:U,depth:H})=>{let T=U.type==="dir",I=U.path===X,p=U.path===P,t=T&&q.has(U.path),j_=L_&&U.path===L_,__=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return B`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${I?" selected":""}${j_?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+H*n$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${C$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${T?t?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${T?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${T?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${p?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r_}
                                                value=${g}
                                                onInput=${(l)=>u(l?.target?.value||"")}
                                                onKeyDown=${(l)=>{if(l.key==="Enter")l.preventDefault(),w2();else if(l.key==="Escape")l.preventDefault(),M$()}}
                                                onBlur=${M$}
                                                onClick=${(l)=>l.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${T&&!t&&__>0&&B`
                                        <span class="workspace-count">${__}</span>
                                    `}
                                    ${T&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${t$}
                                            disabled=${G_}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${U2} onTouchStart=${z2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${l$} title="New file" disabled=${G_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!U0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>O0&&w_.current?.(X,E)}
                                    title=${l0}
                                    disabled=${!O0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m$}
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
                            ${U0?B`
                                    <button class="workspace-download" onClick=${g$}
                                        title="Upload files to this folder" disabled=${G_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${I1(X,z_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${w$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${Z_&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&B`<div class="workspace-error">${E.error}</div>`}
                    ${U0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${l_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${l_?.error&&B`<div class="workspace-error">${l_.error}</div>`}
                        ${l_?.payload&&l_.payload.segments?.length>0&&B`
                            <${xZ} payload=${l_.payload} />
                        `}
                        ${l_?.payload&&(!l_.payload.segments||l_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!U0&&B`
                        <div class="workspace-preview-body" ref=${C_}></div>
                    `}
                    ${m&&B`
                        <div class="workspace-download-card">
                            <${wZ} mediaId=${m} />
                        </div>
                    `}
                </div>
            `}
            ${X_&&B`
                <div class="workspace-drag-ghost" ref=${A0}>${X_.label}</div>
            `}
        </aside>
    `}var fZ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,CZ=/\.(csv|tsv)$/i,bZ=/\.pdf$/i,SZ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,J9=/\.drawio(\.xml|\.svg|\.png)?$/i;function E9({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:z,onTogglePreview:G,previewTabs:L,onToggleDock:q,dockVisible:W,onToggleZen:X,zenMode:F}){let[P,C]=v(null),g=k(null);b(()=>{if(!P)return;let A=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;C(null)};return document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}},[P]),b(()=>{let A=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let a=_.findIndex((Z_)=>Z_.id===$);if(S.shiftKey){let Z_=_[(a-1+_.length)%_.length];j?.(Z_.id)}else{let Z_=_[(a+1)%_.length];j?.(Z_.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let a=document.querySelector(".editor-pane");if(a&&a.contains(document.activeElement)){if(S.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$,j,Z]);let u=M((A,S)=>{if(A.button===1){A.preventDefault(),Z?.(S);return}if(A.button===0)j?.(S)},[j,Z]),E=M((A,S)=>{A.preventDefault(),C({id:S,x:A.clientX,y:A.clientY})},[]),x=M((A)=>{A.preventDefault(),A.stopPropagation()},[]),m=M((A,S)=>{A.preventDefault(),A.stopPropagation(),Z?.(S)},[Z]);if(b(()=>{if(!$||!g.current)return;let A=g.current.querySelector(".tab-item.active");if(A)A.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${g} role="tablist">
            ${_.map((A)=>B`
                <div
                    key=${A.id}
                    class=${`tab-item${A.id===$?" active":""}${A.dirty?" dirty":""}${A.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${A.id===$}
                    title=${A.path}
                    onMouseDown=${(S)=>u(S,A.id)}
                    onContextMenu=${(S)=>E(S,A.id)}
                >
                    ${A.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${A.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${x}
                        onClick=${(S)=>m(S,A.id)}
                        title=${A.dirty?"Unsaved changes":"Close"}
                        aria-label=${A.dirty?"Unsaved changes":`Close ${A.label}`}
                    >
                        ${A.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${W?" active":""}`}
                    onClick=${q}
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
            ${X&&B`
                <button
                    class=${`tab-strip-zen-toggle${F?" active":""}`}
                    onClick=${X}
                    title=${`${F?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${F?"Exit":"Enter"} zen mode`}
                    aria-pressed=${F?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${F?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${P&&B`
            <div class="tab-context-menu" style=${{left:P.x+"px",top:P.y+"px"}}>
                <button onClick=${()=>{Z?.(P.id),C(null)}}>Close</button>
                <button onClick=${()=>{N?.(P.id),C(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),C(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(P.id),C(null)}}>
                    ${_.find((A)=>A.id===P.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(P.id),C(null)}}>
                        ${L?.has(P.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${fZ.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(P.id),S=P.id.split("/").pop()||"document",a="/office-viewer/?url="+encodeURIComponent(A)+"&name="+encodeURIComponent(S);window.open(a,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${CZ.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let A="/csv-viewer/?path="+encodeURIComponent(P.id);window.open(A,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${bZ.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(P.id);window.open(A,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${SZ.test(P.id)&&!J9.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let A="/image-viewer/?path="+encodeURIComponent(P.id);window.open(A,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
                ${J9.test(P.id)&&B`
                    <hr />
                    <button onClick=${()=>{let A="/drawio/edit?path="+encodeURIComponent(P.id);window.open(A,"_blank","noopener"),C(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var RZ=400,P3=60,A9=220,M3="mdPreviewHeight";function vZ(){try{let _=localStorage.getItem(M3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=P3?$:A9}catch{return A9}}function y9({getContent:_,path:$,onClose:j}){let[Z,N]=v(""),[Y,z]=v(vZ),G=k(null),L=k(null),q=k(""),W=k(_);return W.current=_,b(()=>{let P=()=>{let g=W.current?.()||"";if(g===q.current)return;q.current=g;try{let u=K$(g,null,{sanitize:!1});N(u)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};P();let C=setInterval(P,RZ);return()=>clearInterval(C)},[]),b(()=>{if(G.current&&Z)j2(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(P)=>{P.preventDefault();let C=P.clientY,g=L.current?.offsetHeight||Y,u=L.current?.parentElement,E=u?u.offsetHeight*0.7:500,x=P.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=(S)=>{let a=Math.min(Math.max(g-(S.clientY-C),P3),E);z(a)},A=()=>{x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(M3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",A)}}
            onTouchStart=${(P)=>{P.preventDefault();let C=P.touches[0];if(!C)return;let g=C.clientY,u=L.current?.offsetHeight||Y,E=L.current?.parentElement,x=E?E.offsetHeight*0.7:500,m=P.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let A=(a)=>{let Z_=a.touches[0];if(!Z_)return;a.preventDefault();let N_=Math.min(Math.max(u-(Z_.clientY-g),P3),x);z(N_)},S=()=>{m.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(M3,String(Math.round(L.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",A),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:Y+"px"}}>
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
    `}function k9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=k(_);Y.current=_;let z=k($);z.current=$;let G=k(j);G.current=j;let L=k(Z);L.current=Z,b(()=>{G.current();let q=new T1((X,F)=>Y.current(X,F),(X)=>z.current(X),{chatJid:N});q.connect();let W=()=>{q.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",W),document.addEventListener("visibilitychange",W),()=>{window.removeEventListener("focus",W),document.removeEventListener("visibilitychange",W),q.disconnect()}},[N])}function P9(){let[_,$]=v(!1),[j,Z]=v("default"),N=k(!1);b(()=>{let L=u2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),b(()=>{N.current=_},[_]);let Y=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),e_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),e_("notificationsEnabled",String(L))},[Y]),G=M((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let W=new Notification(L,{body:q});return W.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:G}}var X1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function M9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=v(null),[Y,z]=v(!1),G=k(!1),L=k(null),q=k(!1),W=k(null),X=k(null),F=k(0);b(()=>{G.current=Y},[Y]),b(()=>{X.current=Z},[Z]),b(()=>{F.current+=1,W.current=null,q.current=!1,G.current=!1,z(!1)},[j]);let P=M(async(u=null)=>{let E=F.current;try{if(u){let x=await U4(u,50,0,j);if(E!==F.current)return;N(x.posts),z(!1)}else{let x=await A2(10,null,j);if(E!==F.current)return;N(x.posts),z(x.has_more)}}catch(x){if(E!==F.current)return;console.error("Failed to load posts:",x)}},[j]),C=M(async()=>{let u=F.current;try{let E=await A2(10,null,j);if(u!==F.current)return;N((x)=>{if(!x||x.length===0)return E.posts;return X1([...E.posts,...x])}),z((x)=>x||E.has_more)}catch(E){if(u!==F.current)return;console.error("Failed to refresh timeline:",E)}},[j]),g=M(async(u={})=>{let E=F.current,x=X.current;if(!x||x.length===0)return;if(q.current)return;let{preserveScroll:m=!0,preserveMode:A="top",allowRepeat:S=!1}=u,a=(e)=>{if(!m){e();return}if(A==="top")$(e);else _(e)},N_=x.slice().sort((e,r)=>e.id-r.id)[0]?.id;if(!Number.isFinite(N_))return;if(!S&&W.current===N_)return;q.current=!0,W.current=N_;try{let e=await A2(10,N_,j);if(E!==F.current)return;if(e.posts.length>0)a(()=>{N((r)=>X1([...e.posts,...r||[]])),z(e.has_more)});else z(!1)}catch(e){if(E!==F.current)return;console.error("Failed to load more posts:",e)}finally{if(E===F.current)q.current=!1}},[j,_,$]);return b(()=>{L.current=g},[g]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:z,hasMoreRef:G,loadPosts:P,refreshTimeline:C,loadMore:g,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:W}}function I9(){let[_,$]=v(null),[j,Z]=v({text:"",totalLines:0}),[N,Y]=v(""),[z,G]=v({text:"",totalLines:0}),[L,q]=v(null),[W,X]=v(null),[F,P]=v(null),C=k(null),g=k(0),u=k(!1),E=k(""),x=k(""),m=k(null),A=k(null),S=k(null),a=k(null),Z_=k(!1),N_=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:z,setAgentThought:G,pendingRequest:L,setPendingRequest:q,currentTurnId:W,setCurrentTurnId:X,steerQueuedTurnId:F,setSteerQueuedTurnId:P,lastAgentEventRef:C,lastSilenceNoticeRef:g,isAgentRunningRef:u,draftBufferRef:E,thoughtBufferRef:x,pendingRequestRef:m,stalledPostIdRef:A,currentTurnIdRef:S,steerQueuedTurnIdRef:a,thoughtExpandedRef:Z_,draftExpandedRef:N_}}function T9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.clientX,P=$.current||280,C=W.currentTarget;C.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=F,u=(x)=>{g=x.clientX;let m=Math.min(Math.max(P+(x.clientX-F),160),600);X.style.setProperty("--sidebar-width",`${m}px`),$.current=m},E=()=>{let x=Math.min(Math.max(P+(g-F),160),600);$.current=x,C.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",e_("sidebarWidth",String(Math.round(x))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",E)}).current,Y=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.touches[0];if(!F)return;let P=F.clientX,C=$.current||280,g=W.currentTarget;g.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let u=(x)=>{let m=x.touches[0];if(!m)return;x.preventDefault();let A=Math.min(Math.max(C+(m.clientX-P),160),600);X.style.setProperty("--sidebar-width",`${A}px`),$.current=A},E=()=>{g.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",e_("sidebarWidth",String(Math.round($.current||C))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,z=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.clientX,P=j.current||$.current||280,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let g=F,u=(x)=>{g=x.clientX;let m=Math.min(Math.max(P+(x.clientX-F),200),800);X.style.setProperty("--editor-width",`${m}px`),j.current=m},E=()=>{let x=Math.min(Math.max(P+(g-F),200),800);j.current=x,C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",e_("editorWidth",String(Math.round(x))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",E)}).current,G=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.touches[0];if(!F)return;let P=F.clientX,C=j.current||$.current||280,g=W.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let u=(x)=>{let m=x.touches[0];if(!m)return;x.preventDefault();let A=Math.min(Math.max(C+(m.clientX-P),200),800);X.style.setProperty("--editor-width",`${A}px`),j.current=A},E=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",e_("editorWidth",String(Math.round(j.current||C))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,L=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.clientY,P=Z?.current||200,C=W.currentTarget;C.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let g=F,u=(x)=>{g=x.clientY;let m=Math.min(Math.max(P-(x.clientY-F),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${m}px`),Z)Z.current=m;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let x=Math.min(Math.max(P-(g-F),100),window.innerHeight*0.5);if(Z)Z.current=x;C.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",e_("dockHeight",String(Math.round(x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",E)}).current,q=k((W)=>{W.preventDefault();let X=_.current;if(!X)return;let F=W.touches[0];if(!F)return;let P=F.clientY,C=Z?.current||200,g=W.currentTarget;g.classList.add("dragging"),document.body.style.userSelect="none";let u=(x)=>{let m=x.touches[0];if(!m)return;x.preventDefault();let A=Math.min(Math.max(C-(m.clientY-P),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{g.classList.remove("dragging"),document.body.style.userSelect="",e_("dockHeight",String(Math.round(Z?.current||C))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function x9({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=v(()=>$0.getTabs()),[N,Y]=v(()=>$0.getActiveId()),[z,G]=v(()=>$0.getTabs().length>0);b(()=>{return $0.onChange((A,S)=>{Z(A),Y(S),G(A.length>0)})},[]);let[L,q]=v(()=>new Set),W=M((A)=>{q((S)=>{let a=new Set(S);if(a.has(A))a.delete(A);else a.add(A);return a})},[]),X=M((A)=>{q((S)=>{if(!S.has(A))return S;let a=new Set(S);return a.delete(A),a})},[]),F=M((A,S={})=>{if(!A)return;let a={path:A,mode:"edit"};try{if(!_0.resolve(a)){if(!_0.get("editor")){console.warn(`[openEditor] No pane handler for: ${A}`);return}}}catch(N_){console.warn(`[openEditor] paneRegistry.resolve() error for "${A}":`,N_)}let Z_=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;$0.open(A,Z_)},[]),P=M(()=>{let A=$0.getActiveId();if(A){let S=$0.get(A);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}$0.close(A),X(A),$.current?.(A)}},[X]),C=M((A)=>{let S=$0.get(A);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}$0.close(A),X(A),$.current?.(A)},[X]),g=M((A)=>{$0.activate(A)},[]),u=M((A)=>{let S=$0.getTabs().filter((N_)=>N_.id!==A&&!N_.pinned),a=S.filter((N_)=>N_.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let Z_=S.map((N_)=>N_.id);$0.closeOthers(A),Z_.forEach((N_)=>{X(N_),$.current?.(N_)})},[X]),E=M(()=>{let A=$0.getTabs().filter((Z_)=>!Z_.pinned),S=A.filter((Z_)=>Z_.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let a=A.map((Z_)=>Z_.id);$0.closeAll(),a.forEach((Z_)=>{X(Z_),$.current?.(Z_)})},[X]),x=M((A)=>{$0.togglePin(A)},[]),m=M(()=>{let A=$0.getActiveId();if(A)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:A}}))},[]);return b(()=>{let A=(S)=>{let{oldPath:a,newPath:Z_,type:N_}=S.detail||{};if(!a||!Z_)return;if(N_==="dir"){for(let e of $0.getTabs())if(e.path===a||e.path.startsWith(`${a}/`)){let r=`${Z_}${e.path.slice(a.length)}`;$0.rename(e.id,r)}}else $0.rename(a,Z_)};return window.addEventListener("workspace-file-renamed",A),()=>window.removeEventListener("workspace-file-renamed",A)},[]),b(()=>{let A=(S)=>{if($0.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",A),()=>window.removeEventListener("beforeunload",A)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:F,closeEditor:P,handleTabClose:C,handleTabActivate:g,handleTabCloseOthers:u,handleTabCloseAll:E,handleTabTogglePin:x,handleTabTogglePreview:W,revealInExplorer:m}}function I3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var T3=I3("warning",30000),w9=I3("finalize",120000),x3=I3("refresh",30000),f9=30000;function C9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function b9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function S9(_=30000){let[,$]=v(0);b(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function w3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function R9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function I2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function f3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||z)}function v9(_,$={}){if(I2($))return null;if(f3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uZ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function u9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function m9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function g9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function p9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function T2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function c9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function uZ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function s1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function C3(_){return String(_||"").trim()||"web:default"}function h9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function i9(_={}){return I2(_)&&f3(_)}function mZ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function gZ(_={},$={}){if(!i9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=mZ({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function l9(_={}){if(!i9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of N)$.clearTimeout?.(X);N.clear()},z=()=>{Z=0,gZ({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{G();for(let X of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),G()},X);if(F!=null)N.add(F)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},W=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),W?.addEventListener?.("resize",L),W?.addEventListener?.("scroll",L),()=>{Y(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),W?.removeEventListener?.("resize",L),W?.removeEventListener?.("scroll",L)}}function pZ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function A$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:pZ($,j)}var cZ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function n9(_){return cZ.has(String(_||"").trim())}function hZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function d9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(hZ(_),{detail:Z})),!0}var iZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function s9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(I2({window:j,navigator:Z}))};N();let z=iZ.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of z)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var S3="piclaw_btw_session",lZ=900,nZ="__piclawRenameBranchPromptLock__",r9=()=>{if(typeof window>"u")return null;let _=window,$=nZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function dZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function sZ(){let _=z$(S3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:z}}catch{return null}}var a9=O4,t9=H4,oZ=J4,e9=P4,_5=M4,b3=E4,o1=A$(Y$,"getAgentContext",null),$5=A$(Y$,"getAgentModels",{current:null,models:[]}),j5=A$(Y$,"getActiveChatAgents",{chats:[]}),r1=A$(Y$,"getChatBranches",{chats:[]}),rZ=A$(Y$,"renameChatBranch",null),aZ=A$(Y$,"pruneChatBranch",null),Z5=A$(Y$,"restoreChatBranch",null),N5=A$(Y$,"getAgentQueueState",{count:0}),tZ=A$(Y$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),eZ=A$(Y$,"removeAgentQueueItem",{removed:!1}),_N=A$(Y$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});_0.register($3);_0.register(Q3);_0.register(G3);_0.register(q3);_0.register(X3);_0.register(L3);_0.register(B3);_0.register(U3);_0.register(F3);j3();_0.register(z3);_0.register(K3);function $N({locationParams:_,navigate:$}){let j=I_(()=>{let V=_.get("chat_jid");return V&&V.trim()?V.trim():"web:default"},[_]),Z=I_(()=>{let V=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),N=I_(()=>{let V=(_.get("branch_loader")||"").trim().toLowerCase();return V==="1"||V==="true"||V==="yes"},[_]),Y=I_(()=>{let V=_.get("branch_source_chat_jid");return V&&V.trim()?V.trim():j},[j,_]),[z,G]=v("disconnected"),[L,q]=v(()=>I2()),[W,X]=v(null),[F,P]=v(null),[C,g]=v(!1),[u,E]=v("current"),[x,m]=v([]),[A,S]=v([]),[a,Z_]=v(null),{agentStatus:N_,setAgentStatus:e,agentDraft:r,setAgentDraft:z_,agentPlan:f0,setAgentPlan:y_,agentThought:$_,setAgentThought:Y_,pendingRequest:V_,setPendingRequest:X_,currentTurnId:U_,setCurrentTurnId:L_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:d_,lastSilenceNoticeRef:l_,isAgentRunningRef:V0,draftBufferRef:T_,thoughtBufferRef:j0,pendingRequestRef:g_,stalledPostIdRef:C0,currentTurnIdRef:d,steerQueuedTurnIdRef:x_,thoughtExpandedRef:Q_,draftExpandedRef:D_}=I9(),[R_,G0]=v({}),[n_,s_]=v(null),[p_,o_]=v(null),[w_,b_]=v(!1),[c_,x0]=v(null),[J0,r_]=v([]),[Q0,X0]=v([]),[S_,E0]=v(null),[w0,P_]=v([]),[Y0,L0]=v(!1),[E_,W0]=v(()=>sZ()),[f_,C_]=v(null),v_=k(new Set),e0=I_(()=>J0.find((V)=>V?.chat_jid===j)||null,[J0,j]),w=I_(()=>Q0.find((V)=>V?.chat_jid===j)||e0||null,[e0,Q0,j]),s=w?.root_chat_jid||e0?.root_chat_jid||j,F_=dZ(u),[M_,Z0]=v(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),i0=w0.length,y$=k(new Set),V$=k([]),A0=k(new Set),_$=k(0),A_=k({inFlight:!1,lastAttemptAt:0,turnId:null});y$.current=new Set(w0.map((V)=>V.row_id)),V$.current=w0;let{notificationsEnabled:N2,notificationPermission:b0,toggleNotifications:G$,notify:k$}=P9(),[h$,W2]=v(()=>new Set),[s0,$$]=v(()=>u2("workspaceOpen",!0)),B0=k(null),{editorOpen:N0,tabStripTabs:i$,tabStripActiveId:a_,previewTabs:v0,openEditor:S0,closeEditor:Q$,handleTabClose:q$,handleTabActivate:P$,handleTabCloseOthers:x2,handleTabCloseAll:M$,handleTabTogglePin:B2,handleTabTogglePreview:w2,revealInExplorer:L1}=x9({onTabClosed:(V)=>B0.current?.(V)}),l$=k(null),j$=k(null),X$=k(null),L$=k(null),y0=_0.getDockPanes().length>0,[o0,n$]=v(!1),S$=M(()=>n$((V)=>!V),[]),U0=M(()=>{S0(N3,{label:"Terminal"})},[S0]),O0=!Z&&(N0||y0&&o0),[l0,d$]=v(!1),R$=k(!1),v$=M(()=>{if(!N0||Z)return;if(R$.current=o0,o0)n$(!1);d$(!0)},[N0,Z,o0]),u0=M(()=>{if(!l0)return;if(d$(!1),R$.current)n$(!0),R$.current=!1},[l0]),m0=M(()=>{if(l0)u0();else v$()},[l0,v$,u0]);b(()=>{if(l0&&!N0)u0()},[l0,N0,u0]),b(()=>{let V=l$.current;if(!V)return;if(j$.current)j$.current.dispose(),j$.current=null;let K=a_;if(!K)return;let O={path:K,mode:"edit"},D=_0.resolve(O)||_0.get("editor");if(!D){V.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=D.mount(V,O);j$.current=y,y.onDirtyChange?.((n)=>{$0.setDirty(K,n)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{Q$()});let R=$0.getViewState(K);if(R&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(R));if(typeof y.onViewStateChange==="function")y.onViewStateChange((n)=>{$0.saveViewState(K,n)});return requestAnimationFrame(()=>y.focus()),()=>{if(j$.current===y)y.dispose(),j$.current=null}},[a_,Q$]),b(()=>{let V=(K)=>{let O=K.detail?.path;if(O)S0(O)};return document.addEventListener("office-viewer:open-tab",V),document.addEventListener("drawio:open-tab",V),document.addEventListener("csv-viewer:open-tab",V),document.addEventListener("pdf-viewer:open-tab",V),document.addEventListener("image-viewer:open-tab",V),document.addEventListener("video-viewer:open-tab",V),()=>{document.removeEventListener("office-viewer:open-tab",V),document.removeEventListener("drawio:open-tab",V),document.removeEventListener("csv-viewer:open-tab",V),document.removeEventListener("pdf-viewer:open-tab",V),document.removeEventListener("image-viewer:open-tab",V),document.removeEventListener("video-viewer:open-tab",V)}},[S0]),b(()=>{let V=X$.current;if(L$.current)L$.current.dispose(),L$.current=null;if(!V||!y0||!o0)return;let K=_0.getDockPanes()[0];if(!K){V.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let O=K.mount(V,{mode:"view"});return L$.current=O,requestAnimationFrame(()=>O.focus?.()),()=>{if(L$.current===O)O.dispose(),L$.current=null}},[y0,o0]);let[t_,n0]=v({name:"You",avatar_url:null,avatar_background:null}),W$=k(!1),B$=k(!1),r0=k(null),k0=k(j),I$=k(new Map),s$=k(j),Y2=k(0),T$=k(0),u$=k({}),o$=k({name:null,avatar_url:null}),P0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),x$=k(null),r$=k(null),U2=k(0),z2=k(0),w$=k(0),m$=k(null),g0=k(null),a0=k(null),a$=k(null),K2=k(0),f$=k({title:null,avatarBase:null}),V2=k(null),F0=k(!1),[t$,g$]=v(!1),O2=k(0),U$=M(()=>{if(V2.current)clearTimeout(V2.current),V2.current=null;Z_(null)},[]);S9(30000),b(()=>{return c8()},[]),b(()=>{return s9(q)},[]),b(()=>{e_("workspaceOpen",String(s0))},[s0]),b(()=>{return l9()},[]),b(()=>{return()=>{U$()}},[U$]),b(()=>{if(!E_){e_(S3,"");return}e_(S3,JSON.stringify({question:E_.question||"",answer:E_.answer||"",thinking:E_.thinking||"",error:E_.error||null,status:E_.status||"success"}))},[E_]),b(()=>{u$.current=R_||{}},[R_]),b(()=>{k0.current=j},[j]),b(()=>{o$.current=t_||{name:"You",avatar_url:null,avatar_background:null}},[t_]);let G2=M((V,K,O=null)=>{if(typeof document>"u")return;let D=(V||"").trim()||"PiClaw";if(f$.current.title!==D){document.title=D;let i=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(i&&i.getAttribute("content")!==D)i.setAttribute("content",D);f$.current.title=D}let y=document.getElementById("dynamic-favicon");if(!y)return;let R=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",n=K||R,o=K?`${n}|${O||""}`:n;if(f$.current.avatarBase!==o){let i=K?`${n}${n.includes("?")?"&":"?"}v=${O||Date.now()}`:n;y.setAttribute("href",i),f$.current.avatarBase=o}},[]),F2=M((V)=>{if(!V)return;m((K)=>K.includes(V)?K:[...K,V])},[]),H2=M((V)=>{m((K)=>K.filter((O)=>O!==V))},[]);B0.current=H2;let c2=M(()=>{m([])},[]),D2=M((V)=>{if(!Array.isArray(V)){m([]);return}let K=[],O=new Set;for(let D of V){if(typeof D!=="string"||!D.trim())continue;let y=D.trim();if(O.has(y))continue;O.add(y),K.push(y)}m(K)},[]),W_=M((V,K=null,O="info",D=3000)=>{U$(),Z_({title:V,detail:K||null,kind:O||"info"}),V2.current=setTimeout(()=>{Z_((y)=>y?.title===V?null:y)},D)},[U$]),f2=M((V)=>{let K=R9(V,{editorOpen:N0,resolvePane:(O)=>_0.resolve(O)});if(K.kind==="open"){S0(K.path);return}if(K.kind==="toast")W_(K.title,K.detail,K.level)},[N0,S0,W_]),h2=M(()=>{let V=a_;if(V)F2(V)},[a_,F2]),i2=M((V)=>{if(!V)return;S((K)=>K.includes(V)?K:[...K,V])},[]),C$=M(async(V,K=null)=>{let O=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},D=document.getElementById("post-"+V);if(D){O(D);return}try{let y=typeof K==="string"&&K.trim()?K.trim():j,n=(await F4(V,y))?.thread?.[0];if(!n)return;z0((o)=>{if(!o)return[n];if(o.some((i)=>i.id===n.id))return o;return[...o,n]}),requestAnimationFrame(()=>{setTimeout(()=>{let o=document.getElementById("post-"+V);if(o)O(o)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",V,y)}},[j]),l2=M((V)=>{S((K)=>K.filter((O)=>O!==V))},[]),U=M(()=>{S([])},[]),H=M((V)=>{if(!Array.isArray(V)){S([]);return}let K=[],O=new Set;for(let D of V){if(typeof D!=="string"||!D.trim())continue;let y=D.trim();if(O.has(y))continue;O.add(y),K.push(y)}S(K)},[]),T=M((V)=>{let K=typeof V==="string"&&V.trim()?V.trim():"Could not send your message.";W_("Compose failed",K,"error",5000)},[W_]),I=M((V={})=>{let K=Date.now();if(d_.current=K,V.running)V0.current=!0,L0((O)=>O?O:!0);if(V.clearSilence)l_.current=0},[L0]),p=M(()=>{if(a$.current)clearTimeout(a$.current),a$.current=null;K2.current=0},[]);b(()=>()=>{p()},[p]);let t=M(()=>{p(),e((V)=>{if(!V)return V;if(!(V.last_activity||V.lastActivity))return V;let{last_activity:K,lastActivity:O,...D}=V;return D})},[p]),j_=M((V)=>{if(!V)return;p();let K=Date.now();K2.current=K,e({type:V.type||"active",last_activity:!0}),a$.current=setTimeout(()=>{if(K2.current!==K)return;e((O)=>{if(!O||!(O.last_activity||O.lastActivity))return O;return null})},f9)},[p]),__=M(()=>{V0.current=!1,L0(!1),d_.current=null,l_.current=0,T_.current="",j0.current="",g_.current=null,g0.current=null,d.current=null,x_.current=null,r0.current=null,A_.current={inFlight:!1,lastAttemptAt:0,turnId:null},p(),L_(null),G_(null),Q_.current=!1,D_.current=!1},[p,L_,G_,L0]),l=M((V)=>{if(!h9({remainingQueueCount:V,currentTurnId:d.current,isAgentTurnActive:Y0}))return;x_.current=null,G_(null)},[Y0,G_]),B_=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),M0=M(()=>({agentStatus:N_,agentDraft:r?{...r}:{text:"",totalLines:0},agentPlan:f0||"",agentThought:$_?{...$_}:{text:"",totalLines:0},pendingRequest:V_,currentTurnId:U_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(Y0),followupQueueItems:Array.isArray(w0)?w0.map((V)=>({...V})):[],activeModel:n_,activeThinkingLevel:p_,supportsThinking:Boolean(w_),activeModelUsage:c_,contextUsage:S_,isAgentRunning:Boolean(V0.current),wasAgentActive:Boolean(B$.current),draftBuffer:T_.current||"",thoughtBuffer:j0.current||"",lastAgentEvent:d_.current||null,lastSilenceNotice:l_.current||0,lastAgentResponse:g0.current||null,currentTurnIdRef:d.current||null,steerQueuedTurnIdRef:x_.current||null,thoughtExpanded:Boolean(Q_.current),draftExpanded:Boolean(D_.current),agentStatusRef:r0.current||null,silentRecovery:{...A_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[n_,c_,p_,r,f0,N_,$_,S_,U_,w0,Y0,V_,k_,w_]),Z$=M((V)=>{let K=V||B_();p(),V0.current=Boolean(K.isAgentRunning),B$.current=Boolean(K.wasAgentActive),L0(Boolean(K.isAgentTurnActive)),d_.current=K.lastAgentEvent||null,l_.current=Number(K.lastSilenceNotice||0),T_.current=K.draftBuffer||"",j0.current=K.thoughtBuffer||"",g_.current=K.pendingRequest||null,g0.current=K.lastAgentResponse||null,d.current=K.currentTurnIdRef||null,x_.current=K.steerQueuedTurnIdRef||null,r0.current=K.agentStatusRef||null,A_.current=K.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},Q_.current=Boolean(K.thoughtExpanded),D_.current=Boolean(K.draftExpanded),e(K.agentStatus||null),z_(K.agentDraft?{...K.agentDraft}:{text:"",totalLines:0}),y_(K.agentPlan||""),Y_(K.agentThought?{...K.agentThought}:{text:"",totalLines:0}),X_(K.pendingRequest||null),L_(K.currentTurnId||null),G_(K.steerQueuedTurnId||null),P_(Array.isArray(K.followupQueueItems)?K.followupQueueItems.map((O)=>({...O})):[]),s_(K.activeModel||null),o_(K.activeThinkingLevel||null),b_(Boolean(K.supportsThinking)),x0(K.activeModelUsage??null),E0(K.contextUsage??null)},[p,B_,L_,P_,L0,G_]),q0=M((V)=>{if(!V)return;if(d.current===V)return;d.current=V,A_.current={inFlight:!1,lastAttemptAt:0,turnId:V},L_(V),x_.current=null,G_(null),T_.current="",j0.current="",z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),g_.current=null,g0.current=null,Q_.current=!1,D_.current=!1},[L_,G_]),Q=M((V)=>{if(typeof document<"u"){let i=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&i)return}let K=g0.current;if(!K||!K.post)return;if(V&&K.turnId&&K.turnId!==V)return;let O=K.post;if(O.id&&m$.current===O.id)return;let D=String(O?.data?.content||"").trim();if(!D)return;m$.current=O.id||m$.current,g0.current=null;let y=D.replace(/\s+/g," ").slice(0,200),R=u$.current||{},o=(O?.data?.agent_id?R[O.data.agent_id]:null)?.name||"Pi";k$(o,y)},[k$]),J=M(async(V,K)=>{if(V!=="thought"&&V!=="draft")return;let O=d.current;if(V==="thought"){if(Q_.current=K,O)try{await _5(O,"thought",K)}catch(D){console.warn("Failed to update thought visibility:",D)}if(!K)return;try{let D=O?await e9(O,"thought"):null;if(D?.text)j0.current=D.text;Y_((y)=>({...y||{text:"",totalLines:0},fullText:j0.current||y?.fullText||"",totalLines:Number.isFinite(D?.total_lines)?D.total_lines:y?.totalLines||0}))}catch(D){console.warn("Failed to fetch full thought:",D)}return}if(D_.current=K,O)try{await _5(O,"draft",K)}catch(D){console.warn("Failed to update draft visibility:",D)}if(!K)return;try{let D=O?await e9(O,"draft"):null;if(D?.text)T_.current=D.text;z_((y)=>({...y||{text:"",totalLines:0},fullText:T_.current||y?.fullText||"",totalLines:Number.isFinite(D?.total_lines)?D.total_lines:y?.totalLines||0}))}catch(D){console.warn("Failed to fetch full draft:",D)}},[]),f=k(null),h=M(()=>{let V=x$.current;if(!V)return;if(!(Math.abs(V.scrollTop)>150))V.scrollTop=0},[]);f.current=h;let K_=M((V)=>{let K=x$.current;if(!K||typeof V!=="function"){V?.();return}let{currentHashtag:O,searchQuery:D,searchOpen:y}=P0.current||{},R=!((D||y)&&!O),n=R?K.scrollHeight-K.scrollTop:K.scrollTop;V(),requestAnimationFrame(()=>{let o=x$.current;if(!o)return;if(R){let i=Math.max(o.scrollHeight-n,0);o.scrollTop=i}else{let i=Math.max(o.scrollHeight-o.clientHeight,0),c=Math.min(n,i);o.scrollTop=c}})},[]),H_=M((V)=>{let K=x$.current;if(!K||typeof V!=="function"){V?.();return}let O=K.scrollTop;V(),requestAnimationFrame(()=>{let D=x$.current;if(!D)return;let y=Math.max(D.scrollHeight-D.clientHeight,0);D.scrollTop=Math.min(O,y)})},[]),u_="Queued as a follow-up (one-at-a-time).",t0="⁣",p$=M((V)=>{if(!V||!Array.isArray(V))return V;let K=y$.current,O=new Set(K),D=V.filter((y)=>{if(O.has(y?.id))return!1;if(y?.data?.is_bot_message){let R=y?.data?.content;if(R===u_||R===t0)return!1}return!0});return D.length===V.length?V:D},[]),{posts:m_,setPosts:z0,hasMore:C2,setHasMore:e$,hasMoreRef:_2,loadPosts:N$,refreshTimeline:H0,loadMore:h0,loadMoreRef:J2}=M9({preserveTimelineScroll:K_,preserveTimelineScrollTop:H_,chatJid:j}),Q2=I_(()=>p$(m_),[m_,w0,p$]),b2=M(()=>{let V=C0.current;if(!V)return;z0((K)=>K?K.filter((O)=>O.id!==V):K),C0.current=null},[z0]),{handleSplitterMouseDown:a1,handleSplitterTouchStart:E2,handleEditorSplitterMouseDown:O$,handleEditorSplitterTouchStart:S2,handleDockSplitterMouseDown:R3,handleDockSplitterTouchStart:t1}=T9({appShellRef:r$,sidebarWidthRef:U2,editorWidthRef:z2,dockHeightRef:w$}),v3=M(()=>{if(!V0.current)return;V0.current=!1,l_.current=0,d_.current=null,d.current=null,L_(null),Q_.current=!1,D_.current=!1;let V=(T_.current||"").trim();if(T_.current="",j0.current="",z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),g_.current=null,g0.current=null,!V){e({type:"error",title:"Response stalled - No content received"});return}let O=`${V}${`

⚠️ Response may be incomplete - the model stopped responding`}`,D=Date.now(),y=new Date().toISOString(),R={id:D,timestamp:y,data:{type:"agent_response",content:O,agent_id:"default",is_local_stall:!0}};C0.current=D,z0((n)=>n?X1([...n,R]):[R]),f.current?.(),e(null)},[L_]);b(()=>{P0.current={currentHashtag:W,searchQuery:F,searchOpen:C}},[W,F,C]);let h_=M(()=>{let V=++_$.current,K=j;N5(K).then((O)=>{if(V!==_$.current)return;if(k0.current!==K)return;let D=A0.current,y=Array.isArray(O?.items)?O.items.map((R)=>({...R})).filter((R)=>!D.has(R.row_id)):[];if(y.length){P_((R)=>{if(R.length===y.length&&R.every((n,o)=>n.row_id===y[o].row_id))return R;return y});return}D.clear(),l(0),P_((R)=>R.length===0?R:[])}).catch(()=>{if(V!==_$.current)return;if(k0.current!==K)return;P_((O)=>O.length===0?O:[])})},[l,j,P_]),F$=M(async()=>{let V=j;try{let K=await o1(V);if(k0.current!==V)return;if(K)E0(K)}catch(K){if(k0.current!==V)return;console.warn("Failed to fetch agent context:",K)}},[j]),H$=M(async()=>{let V=j;try{let K=await b3(V);if(k0.current!==V)return null;if(!K||K.status!=="active"||!K.data){if(B$.current){let{currentHashtag:y,searchQuery:R,searchOpen:n}=P0.current||{};if(!y&&!R&&!n)H0()}return B$.current=!1,__(),r0.current=null,e(null),z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),g_.current=null,K??null}B$.current=!0;let O=K.data;r0.current=O;let D=O.turn_id||O.turnId;if(D)q0(D);if(I({running:!0,clearSilence:!0}),t(),e(O),K.thought&&K.thought.text)Y_((y)=>{if(y&&y.text&&y.text.length>=K.thought.text.length)return y;return j0.current=K.thought.text,{text:K.thought.text,totalLines:K.thought.totalLines||0}});if(K.draft&&K.draft.text)z_((y)=>{if(y&&y.text&&y.text.length>=K.draft.text.length)return y;return T_.current=K.draft.text,{text:K.draft.text,totalLines:K.draft.totalLines||0}});return K}catch(K){return console.warn("Failed to fetch agent status:",K),null}},[__,t,I,H0,q0]),e1=M(async()=>{if(!V0.current)return null;if(g_.current)return null;let V=d.current||null,K=A_.current,O=Date.now();if(K.inFlight)return null;if(K.turnId===V&&O-K.lastAttemptAt<x3)return null;K.inFlight=!0,K.lastAttemptAt=O,K.turnId=V;try{let{currentHashtag:D,searchQuery:y,searchOpen:R}=P0.current||{};if(!D&&!y&&!R)await H0();return await h_(),await H$()}finally{K.inFlight=!1}},[H$,h_,H0]);b(()=>{let V=Math.min(1000,Math.max(100,Math.floor(T3/2))),K=setInterval(()=>{if(!V0.current)return;if(g_.current)return;let O=d_.current;if(!O)return;let D=Date.now(),y=D-O,R=z1(r0.current);if(y>=w9){if(!R)e({type:"waiting",title:"Re-syncing after a quiet period…"});e1();return}if(y>=T3){if(D-l_.current>=x3){if(!R){let n=Math.floor(y/1000);e({type:"waiting",title:`Waiting for model… No events for ${n}s`})}l_.current=D,e1()}}},V);return()=>clearInterval(K)},[e1]);let Y5=M((V)=>{if(G(V),V!=="connected"){e(null),z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),g_.current=null,__();return}if(!W$.current){W$.current=!0;let{currentHashtag:y,searchQuery:R,searchOpen:n}=P0.current||{};if(!y&&!R&&!n)H0();H$(),h_(),F$();return}let{currentHashtag:K,searchQuery:O,searchOpen:D}=P0.current;if(!K&&!O&&!D)H0();H$(),h_(),F$()},[__,H0,H$,h_,F$]),z5=M(async(V)=>{X(V),z0(null),await N$(V)},[N$]),K5=M(async()=>{X(null),P(null),z0(null),await N$()},[N$]),V5=M(async(V,K=u)=>{if(!V||!V.trim())return;let O=K==="root"||K==="all"?K:"current";E(O),P(V.trim()),X(null),z0(null);try{let D=await a9(V.trim(),50,0,j,O,s);z0(D.results),e$(!1)}catch(D){console.error("Failed to search:",D),z0([])}},[j,s,u]),G5=M(()=>{g(!0),P(null),X(null),E("current"),z0([])},[]),Q5=M(()=>{g(!1),P(null),N$()},[N$]),ZN=M(()=>{},[]),_4=!W&&!F&&!C,q5=M(async(V)=>{if(!V)return;let K=V.id,O=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():j,D=Q2?.filter((R)=>R?.data?.thread_id===K&&R?.id!==K).length||0;if(D>0){if(!window.confirm(`Delete this message and its ${D} replies?`))return}let y=(R)=>{if(!R.length)return;W2((o)=>{let i=new Set(o);return R.forEach((c)=>i.add(c)),i}),setTimeout(()=>{if(H_(()=>{z0((o)=>o?o.filter((i)=>!R.includes(i.id)):o)}),W2((o)=>{let i=new Set(o);return R.forEach((c)=>i.delete(c)),i}),_2.current)J2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let R=await t9(K,D>0,O);if(R?.ids?.length)y(R.ids)}catch(R){let n=R?.message||"";if(D===0&&n.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let i=await t9(K,!0,O);if(i?.ids?.length)y(i.ids);return}console.error("Failed to delete post:",R),alert(`Failed to delete message: ${n}`)}},[j,Q2,H_]),u3=M(async()=>{try{let V=await oZ();G0(C9(V));let K=V?.user||{};n0((D)=>{let y=typeof K.name==="string"&&K.name.trim()?K.name.trim():"You",R=typeof K.avatar_url==="string"?K.avatar_url.trim():null,n=typeof K.avatar_background==="string"&&K.avatar_background.trim()?K.avatar_background.trim():null;if(D.name===y&&D.avatar_url===R&&D.avatar_background===n)return D;return{name:y,avatar_url:R,avatar_background:n}});let O=(V?.agents||[]).find((D)=>D.id==="default");G2(O?.name,O?.avatar_url)}catch(V){console.warn("Failed to load agents:",V)}try{let V=j,K=await o1(V);if(k0.current!==V)return;if(K)E0(K)}catch{}},[G2,j]);b(()=>{u3();let V=m2("sidebarWidth",null),K=Number.isFinite(V)?Math.min(Math.max(V,160),600):280;if(U2.current=K,r$.current)r$.current.style.setProperty("--sidebar-width",`${K}px`)},[u3]);let n2=Y0||N_!==null,m3=M((V)=>{if(!V||typeof V!=="object")return;let K=V.agent_id;if(!K)return;let{agent_name:O,agent_avatar:D}=V;if(!O&&D===void 0)return;let y=u$.current?.[K]||{id:K},R=y.name||null,n=y.avatar_url??y.avatarUrl??y.avatar??null,o=!1,i=!1;if(O&&O!==y.name)R=O,i=!0;if(D!==void 0){let c=typeof D==="string"?D.trim():null,q_=typeof n==="string"?n.trim():null,J_=c||null;if(J_!==(q_||null))n=J_,o=!0}if(!i&&!o)return;if(G0((c)=>{let J_={...c[K]||{id:K}};if(i)J_.name=R;if(o)J_.avatar_url=n;return{...c,[K]:J_}}),K==="default")G2(R,n,o?Date.now():null)},[G2]),g3=M((V)=>{if(!V||typeof V!=="object")return;let K=V.user_name??V.userName,O=V.user_avatar??V.userAvatar,D=V.user_avatar_background??V.userAvatarBackground;if(K===void 0&&O===void 0&&D===void 0)return;n0((y)=>{let R=typeof K==="string"&&K.trim()?K.trim():y.name||"You",n=O===void 0?y.avatar_url:typeof O==="string"&&O.trim()?O.trim():null,o=D===void 0?y.avatar_background:typeof D==="string"&&D.trim()?D.trim():null;if(y.name===R&&y.avatar_url===n&&y.avatar_background===o)return y;return{name:R,avatar_url:n,avatar_background:o}})},[]),$4=M((V)=>{if(!V||typeof V!=="object")return;let K=V.model??V.current;if(K!==void 0)s_(K);if(V.thinking_level!==void 0)o_(V.thinking_level??null);if(V.supports_thinking!==void 0)b_(Boolean(V.supports_thinking));if(V.provider_usage!==void 0)x0(V.provider_usage??null)},[]),d2=M(()=>{let V=j;$5(V).then((K)=>{if(k0.current!==V)return;if(K)$4(K)}).catch(()=>{})},[$4,j]),p0=M(()=>{let V=j,K=(O)=>Array.isArray(O)?O.filter((D)=>D&&typeof D.chat_jid==="string"&&typeof D.agent_name==="string"&&D.agent_name.trim()):[];Promise.all([j5().catch(()=>({chats:[]})),r1(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([O,D])=>{if(k0.current!==V)return;let y=K(O?.chats),R=K(D?.chats);if(R.length===0){r_(y);return}let n=new Map(y.map((i)=>[i.chat_jid,i])),o=R.map((i)=>{let c=n.get(i.chat_jid);return c?{...i,...c,is_active:c.is_active??i.is_active}:i});o.sort((i,c)=>{if(i.chat_jid===V&&c.chat_jid!==V)return-1;if(c.chat_jid===V&&i.chat_jid!==V)return 1;let q_=Boolean(i.archived_at),J_=Boolean(c.archived_at);if(q_!==J_)return q_?1:-1;if(Boolean(i.is_active)!==Boolean(c.is_active))return i.is_active?-1:1;return String(i.chat_jid).localeCompare(String(c.chat_jid))}),r_(o)}).catch(()=>{if(k0.current!==V)return;r_([])})},[j]),R0=M(()=>{r1(s).then((V)=>{let K=Array.isArray(V?.chats)?V.chats.filter((O)=>O&&typeof O.chat_jid==="string"&&typeof O.agent_name==="string"):[];X0(K)}).catch(()=>{})},[s]),X5=M((V)=>{let K=V?.row_id;if(K==null)return;A0.current.add(K),P_((O)=>O.filter((D)=>D?.row_id!==K)),tZ(K,C3(j)).then(()=>{h_()}).catch((O)=>{console.warn("[queue] Failed to steer queued item:",O),W_("Failed to steer message","The queued message could not be sent as steering.","warning"),A0.current.delete(K),h_()})},[j,h_,P_,W_]),L5=M((V)=>{let K=V?.row_id;if(K==null)return;let O=V$.current.filter((D)=>D?.row_id!==K).length;A0.current.add(K),l(O),P_((D)=>D.filter((y)=>y?.row_id!==K)),eZ(K,C3(j)).then(()=>{h_()}).catch((D)=>{console.warn("[queue] Failed to remove queued item:",D),W_("Failed to remove message","The queued message could not be removed.","warning"),A0.current.delete(K),h_()})},[l,j,h_,P_,W_]),s2=M((V)=>{if(!V||typeof V!=="object")return;if(p0(),R0(),V?.queued==="followup"||V?.queued==="steer"){h_();return}let K=V?.command;if(K&&typeof K==="object"&&(K?.queued_followup||K?.queued_steer))h_()},[p0,R0,h_]),j4=M(()=>{if(a0.current)a0.current.abort(),a0.current=null;W0(null)},[]),W1=M(async(V)=>{let K=String(V||"").trim();if(!K)return W_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(a0.current)a0.current.abort();let O=new AbortController;a0.current=O,W0({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let D=await _N(K,{signal:O.signal,chatJid:t8(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,R)=>{if(y==="side_prompt_start")W0((n)=>n?{...n,status:"running"}:n)},onThinkingDelta:(y)=>{W0((R)=>R?{...R,thinking:`${R.thinking||""}${y||""}`}:R)},onTextDelta:(y)=>{W0((R)=>R?{...R,answer:`${R.answer||""}${y||""}`}:R)}});if(a0.current!==O)return!0;W0((y)=>y?{...y,answer:D?.result||y.answer||"",thinking:D?.thinking||y.thinking||"",model:D?.model||null,status:"success",error:null}:y)}catch(D){if(O.signal.aborted)return!0;W0((y)=>y?{...y,status:"error",error:D?.payload?.error||D?.message||"BTW request failed."}:y)}finally{if(a0.current===O)a0.current=null}return!0},[j,W_]),W5=M(async({content:V})=>{let K=a8(V);if(!K)return!1;if(K.type==="help")return W_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(K.type==="clear")return j4(),W_("BTW cleared","Closed the side conversation panel.","info"),!0;if(K.type==="ask")return await W1(K.question),!0;return!1},[j4,W1,W_]),B5=M(()=>{if(E_?.question)W1(E_.question)},[E_,W1]),U5=M(async()=>{let V=$6(E_);if(!V)return;try{let K=await y2("default",V,null,[],n2?"queue":null,j);s2(K),W_(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(K){W_("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning")}},[E_,s2,n2,W_]),p3=M(async(V=null)=>{let[K,O,D,y,R,n,o]=await Promise.allSettled([b3(j),o1(j),N5(j),$5(j),j5(),r1(s),A2(20,null,j)]),i=K.status==="fulfilled"?K.value:null,c=O.status==="fulfilled"?O.value:null,q_=D.status==="fulfilled"?D.value:null,J_=y.status==="fulfilled"?y.value:null,d0=R.status==="fulfilled"?R.value:null,D0=n.status==="fulfilled"?n.value:null,c$=o.status==="fulfilled"?o.value:null,D$=Array.isArray(c$?.posts)?c$.posts:Array.isArray(m_)?m_:[],l3=D$.length?D$[D$.length-1]:null,k5=D$.filter((Y4)=>Y4?.data?.is_bot_message).length,P5=D$.filter((Y4)=>!Y4?.data?.is_bot_message).length,n3=Number(q_?.count??V$.current.length??0)||0,d3=Array.isArray(d0?.chats)?d0.chats.length:J0.length,M5=Array.isArray(D0?.chats)?D0.chats.length:Q0.length,s3=Number(c?.percent??S_?.percent??0)||0,I5=Number(c?.tokens??S_?.tokens??0)||0,T5=Number(c?.contextWindow??S_?.contextWindow??0)||0,x5=J_?.current??n_??null,w5=J_?.thinking_level??p_??null,f5=J_?.supports_thinking??w_,C5=i?.status||(Y0?"active":"idle"),b5=i?.data?.type||i?.type||null;return{generatedAt:new Date().toISOString(),request:V,chat:{currentChatJid:j,rootChatJid:s,activeChats:d3,branches:M5},agent:{status:C5,phase:b5,running:Boolean(Y0)},model:{current:x5,thinkingLevel:w5,supportsThinking:Boolean(f5)},context:{tokens:I5,contextWindow:T5,percent:s3},queue:{count:n3},timeline:{loadedPosts:D$.length,botPosts:k5,userPosts:P5,latestPostId:l3?.id??null,latestTimestamp:l3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(s3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,n3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,d3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,D$.length*5))}]}},[J0,n_,p_,S_,Q0,j,s,Y0,m_,w_]),o2=M(()=>{d2(),p0(),R0(),h_(),F$()},[d2,p0,R0,h_,F$]);b(()=>{o2();let V=setInterval(()=>{d2(),p0(),R0(),h_()},60000);return()=>clearInterval(V)},[o2,d2,p0,R0,h_]),b(()=>{R0()},[R0]),b(()=>{let V=!1,K=()=>{if(V)return;requestAnimationFrame(()=>{if(V)return;h()})};if(W)return N$(W),()=>{V=!0};if(F)return a9(F,50,0,j,u,s).then((O)=>{if(V)return;z0(O.results),e$(!1)}).catch((O)=>{if(V)return;console.error("Failed to search:",O),z0([]),e$(!1)}),()=>{V=!0};return N$().then(()=>{K()}).catch((O)=>{if(V)return;console.error("Failed to load timeline:",O)}),()=>{V=!0}},[j,W,F,u,s,N$,h,e$,z0]),b(()=>{let V=s$.current||j;I$.current.set(V,M0())},[j,M0]),b(()=>{let V=s$.current||j;if(V===j)return;I$.current.set(V,M0()),s$.current=j,A0.current.clear(),Z$(I$.current.get(j)||null),h_(),H$(),F$()},[j,H$,F$,h_,Z$,M0]);let O5=M(()=>{let{currentHashtag:V,searchQuery:K,searchOpen:O}=P0.current||{};if(!V&&!K&&!O)H0();o2()},[o2,H0]),r2=M((V,K="streaming")=>{let O=z6({...V,...V&&V.status?{}:{status:K}});if(!O)return;let D=c0(O);if(D&&v_.current.has(D))return;C_((y)=>{let R=c0(y),n=Boolean(D&&R&&D===R),o={...n&&y?.artifact?y.artifact:{},...O.artifact||{}};return{...n&&y?y:{},...O,artifact:o,source:"live",originChatJid:O.originChatJid||j,openedAt:n&&y?.openedAt?y.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[j]),Z4=M((V,K)=>{let O=K?.turn_id,D=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null,R=D?D===j:V==="connected"||V==="workspace_update";if(R)m3(K),g3(K);if(V==="ui_theme"){h8(K);return}if(V==="generated_widget_open"){if(!R)return;if(O&&!d.current)q0(O);r2(K,"loading");return}if(V==="generated_widget_delta"){if(!R)return;if(O&&!d.current)q0(O);r2(K,"streaming");return}if(V==="generated_widget_final"){if(!R)return;if(O&&!d.current)q0(O);r2(K,"final");return}if(V==="generated_widget_error"){if(!R)return;r2(K,"error");return}if(V==="generated_widget_close"){if(!R)return;let c=c0(K);C_((q_)=>{if(!q_||q_?.source!=="live")return q_;let J_=c0(q_);if(c&&J_&&c!==J_)return q_;return null});return}if(V?.startsWith("agent_")){if(!(V==="agent_draft_delta"||V==="agent_thought_delta"||V==="agent_draft"||V==="agent_thought"))t()}if(V==="connected"){e(null),z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),g_.current=null,__();let c=j;b3(c).then((D0)=>{if(k0.current!==c)return;if(!D0||D0.status!=="active"||!D0.data)return;let c$=D0.data,D$=c$.turn_id||c$.turnId;if(D$)q0(D$);if(I({clearSilence:!0}),j_(c$),D0.thought&&D0.thought.text)j0.current=D0.thought.text,Y_({text:D0.thought.text,totalLines:D0.thought.totalLines||0});if(D0.draft&&D0.draft.text)T_.current=D0.draft.text,z_({text:D0.draft.text,totalLines:D0.draft.totalLines||0})}).catch((D0)=>{console.warn("Failed to fetch agent status:",D0)});let{currentHashtag:q_,searchQuery:J_,searchOpen:d0}=P0.current||{};if(!q_&&!J_&&!d0)H0();o2();return}if(V==="agent_status"){if(!R){if(K?.type==="done"||K?.type==="error")p0(),R0();return}if(K.type==="done"||K.type==="error"){if(O&&d.current&&O!==d.current)return;if(K.type==="done"){Q(O||d.current);let{currentHashtag:c,searchQuery:q_,searchOpen:J_}=P0.current||{};if(!c&&!q_&&!J_)H0();if(K.context_usage)E0(K.context_usage)}if(B$.current=!1,__(),A0.current.clear(),p0(),h_(),z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null),K.type==="error")e({type:"error",title:K.title||"Agent error"}),setTimeout(()=>e(null),8000);else e(null)}else{if(O)q0(O);if(I({running:!0,clearSilence:!0}),K.type==="thinking")T_.current="",j0.current="",z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0});r0.current=K,e((c)=>{if(c&&c.type===K.type&&c.title===K.title)return c;return K})}return}if(V==="agent_steer_queued"){if(!R)return;if(O&&d.current&&O!==d.current)return;let c=O||d.current;if(!c)return;x_.current=c,G_(c);return}if(V==="agent_followup_queued"){if(!R)return;let c=K?.row_id,q_=K?.content;if(c!=null&&typeof q_==="string"&&q_.trim())P_((J_)=>{if(J_.some((d0)=>d0?.row_id===c))return J_;return[...J_,{row_id:c,content:q_,timestamp:K?.timestamp||null,thread_id:K?.thread_id??null}]});h_();return}if(V==="agent_followup_consumed"){if(!R)return;let c=K?.row_id;if(c!=null){let D0=V$.current.filter((c$)=>c$.row_id!==c).length;l(D0),P_((c$)=>c$.filter((D$)=>D$.row_id!==c))}h_();let{currentHashtag:q_,searchQuery:J_,searchOpen:d0}=P0.current||{};if(!q_&&!J_&&!d0)H0();return}if(V==="agent_followup_removed"){if(!R)return;let c=K?.row_id;if(c!=null){let q_=V$.current.filter((J_)=>J_.row_id!==c).length;A0.current.add(c),l(q_),P_((J_)=>J_.filter((d0)=>d0.row_id!==c))}h_();return}if(V==="agent_draft_delta"){if(!R)return;if(O&&d.current&&O!==d.current)return;if(O&&!d.current)q0(O);if(I({running:!0,clearSilence:!0}),K?.reset)T_.current="";if(K?.delta)T_.current+=K.delta;let c=Date.now();if(!Y2.current||c-Y2.current>=100){Y2.current=c;let q_=T_.current,J_=w3(q_);if(D_.current)z_((d0)=>({text:d0?.text||"",totalLines:J_,fullText:q_}));else z_({text:q_,totalLines:J_})}return}if(V==="agent_draft"){if(!R)return;if(O&&d.current&&O!==d.current)return;if(O&&!d.current)q0(O);I({running:!0,clearSilence:!0});let c=K.text||"",q_=K.mode||(K.kind==="plan"?"replace":"append"),J_=Number.isFinite(K.total_lines)?K.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(K.kind==="plan")if(q_==="replace")y_(c);else y_((d0)=>(d0||"")+c);else if(!D_.current)T_.current=c,z_({text:c,totalLines:J_});return}if(V==="agent_thought_delta"){if(!R)return;if(O&&d.current&&O!==d.current)return;if(O&&!d.current)q0(O);if(I({running:!0,clearSilence:!0}),K?.reset)j0.current="";if(typeof K?.delta==="string")j0.current+=K.delta;let c=Date.now();if(Q_.current&&(!T$.current||c-T$.current>=100)){T$.current=c;let q_=j0.current;Y_((J_)=>({text:J_?.text||"",totalLines:w3(q_),fullText:q_}))}return}if(V==="agent_thought"){if(!R)return;if(O&&d.current&&O!==d.current)return;if(O&&!d.current)q0(O);I({running:!0,clearSilence:!0});let c=K.text||"",q_=Number.isFinite(K.total_lines)?K.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!Q_.current)j0.current=c,Y_({text:c,totalLines:q_});return}if(V==="model_changed"){if(!R)return;if(K?.model!==void 0)s_(K.model);if(K?.thinking_level!==void 0)o_(K.thinking_level??null);if(K?.supports_thinking!==void 0)b_(Boolean(K.supports_thinking));let c=j;o1(c).then((q_)=>{if(k0.current!==c)return;if(q_)E0(q_)}).catch(()=>{});return}if(V==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:K}));return}if(n9(V)){if(!R)return;if(d9(V,K),V==="extension_ui_notify"&&typeof K?.message==="string")W_(K.message,null,K?.type||"info");if(V==="extension_ui_error"&&typeof K?.error==="string")W_("Extension UI error",K.error,"error",5000);return}let{currentHashtag:n,searchQuery:o,searchOpen:i}=P0.current;if(V==="agent_response"){if(!R)return;b2(),g0.current={post:K,turnId:d.current}}if(!n&&!o&&!i&&R&&(V==="new_post"||V==="new_reply"||V==="agent_response"))z0((c)=>{if(!c)return[K];if(c.some((q_)=>q_.id===K.id))return c;return[...c,K]}),f.current?.();if(V==="interaction_updated"){if(!R)return;if(n||o||i)return;z0((c)=>{if(!c)return c;if(!c.some((q_)=>q_.id===K.id))return c;return c.map((q_)=>q_.id===K.id?K:q_)})}if(V==="interaction_deleted"){if(!R)return;if(n||o||i)return;let c=K?.ids||[];if(c.length){if(H_(()=>{z0((q_)=>q_?q_.filter((J_)=>!c.includes(J_.id)):q_)}),_2.current)J2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[r2,__,t,j,J2,I,Q,H_,p0,R0,H0,b2,q0,j_,m3,g3,d2,h_,P_]);b(()=>{if(typeof window>"u")return;let V=window.__PICLAW_TEST_API||{};return V.emit=Z4,V.reset=()=>{b2(),__(),e(null),z_({text:"",totalLines:0}),y_(""),Y_({text:"",totalLines:0}),X_(null)},V.finalize=()=>v3(),window.__PICLAW_TEST_API=V,()=>{if(window.__PICLAW_TEST_API===V)window.__PICLAW_TEST_API=void 0}},[__,v3,Z4,b2]),k9({handleSseEvent:Z4,handleConnectionStatusChange:Y5,loadPosts:N$,onWake:O5,chatJid:j}),b(()=>{if(!Q2||Q2.length===0)return;let V=location.hash;if(!V||!V.startsWith("#msg-"))return;let K=V.slice(5);C$(K),history.replaceState(null,"",location.pathname+location.search)},[Q2,C$]);let N4=N_!==null;b(()=>{if(z!=="connected")return;let K=setInterval(()=>{let{currentHashtag:O,searchQuery:D,searchOpen:y}=P0.current||{},R=!O&&!D&&!y;if(N4){if(R)H0();h_(),H$(),F$()}else{if(R)H0();H$(),F$()}},N4?15000:60000);return()=>clearInterval(K)},[z,N4,H$,F$,h_,H0]),b(()=>{return o9(()=>{H$(),F$(),h_()})},[H$,F$,h_]);let F5=M(()=>{$$((V)=>!V)},[]),c3=M((V)=>{if(typeof window>"u")return;let K=String(V||"").trim();if(!K||K===j)return;let O=T2(window.location.href,K,{chatOnly:Z});$?.(O)},[Z,j,$]),h3=M(async()=>{if(typeof window>"u"||!w?.chat_jid)return;let V=Date.now(),K=r9();if(!K)return;if(F0.current||V<O2.current||K.inFlight||V<K.cooldownUntil)return;F0.current=!0,K.inFlight=!0,g$(!0);try{let O=w.display_name||w.agent_name||"",D=window.prompt("Agent name",O);if(D===null)return;let y=D.trim(),R=y.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||w.agent_name||"",n=await rZ(w.chat_jid,{displayName:y,agentName:R});await Promise.allSettled([p0(),R0()]);let o=n?.branch?.agent_name||R||w.agent_name||"",i=n?.branch?.display_name||y||o;W_("Branch renamed",`${i} (@${o})`,"info",3500)}catch(O){let D=O instanceof Error?O.message:String(O||"Could not rename branch."),y=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;W_("Could not rename branch",y||"Could not rename branch.","warning",5000)}finally{F0.current=!1,g$(!1);let O=Date.now()+lZ;O2.current=O;let D=r9();if(D)D.inFlight=!1,D.cooldownUntil=O}},[w,p0,R0,g$,W_]),i3=M(async(V=null)=>{if(typeof window>"u")return;let K=typeof V==="string"&&V.trim()?V.trim():"",O=typeof j==="string"&&j.trim()?j.trim():"",D=K||w?.chat_jid||O;if(!D){W_("Could not prune branch","No active session is selected yet.","warning",4000);return}let y=(w?.chat_jid===D?w:null)||Q0.find((i)=>i?.chat_jid===D)||J0.find((i)=>i?.chat_jid===D)||null;if(y?.chat_jid===(y?.root_chat_jid||y?.chat_jid)){W_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let n=`@${y?.agent_name||D}${y?.chat_jid?` — ${y.chat_jid}`:""}`;if(!window.confirm(`Prune ${n}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await aZ(D),await Promise.allSettled([p0(),R0()]);let i=y?.root_chat_jid||"web:default";W_("Branch pruned",`${n} has been archived.`,"info",3000);let c=T2(window.location.href,i,{chatOnly:Z});$?.(c)}catch(i){let c=i instanceof Error?i.message:String(i||"Could not prune branch.");W_("Could not prune branch",c||"Could not prune branch.","warning",5000)}},[J0,Z,w,Q0,j,$,p0,R0,W_]),H5=M(async(V)=>{let K=typeof V==="string"?V.trim():"";if(!K||typeof Z5!=="function")return;try{let O=await Z5(K);await Promise.allSettled([p0(),R0()]);let D=O?.branch,y=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():K,R=typeof D?.agent_name==="string"&&D.agent_name.trim()?`@${D.agent_name.trim()}`:y;W_("Branch restored",`Restored ${R}.`,"info",3200);let n=T2(window.location.href,y,{chatOnly:Z});$?.(n)}catch(O){let D=O instanceof Error?O.message:String(O||"Could not restore branch.");W_("Could not restore branch",D||"Could not restore branch.","warning",5000)}},[Z,$,p0,R0,W_]);b(()=>{if(!N||typeof window>"u")return;let V=!1;return(async()=>{try{Z0({status:"running",message:"Preparing a new chat branch…"});let K=await _1(Y);if(V)return;let O=K?.branch,D=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let y=T2(window.location.href,D,{chatOnly:!0});$?.(y,{replace:!0})}catch(K){if(V)return;Z0({status:"error",message:s1(K)})}})(),()=>{V=!0}},[N,Y,$]);let D5=M((V)=>{if(!V||typeof V!=="object")return;let K=c0(V);if(K)v_.current.delete(K);C_({...V,openedAt:new Date().toISOString()})},[]),a2=M(()=>{C_((V)=>{let K=c0(V);if(V?.source==="live"&&K)v_.current.add(K);return null})},[]),J5=M((V,K)=>{let O=typeof V?.kind==="string"?V.kind:"",D=c0(K);if(!O||!D)return;if(O==="widget.close"){a2();return}if(O==="widget.submit"){let y=Q6(V?.payload),R=q6(V?.payload),n=new Date().toISOString();if(C_((o)=>{let i=c0(o);if(!o||i!==D)return o;return{...o,runtimeState:{...o.runtimeState||{},lastEventKind:O,lastEventPayload:V?.payload||null,lastSubmitAt:n,lastHostUpdate:{type:"submit_pending",submittedAt:n,preview:y||null}}}}),!y){if(W_("Widget submission received","The widget submitted data without a message payload yet.","info",3500),R)a2();return}(async()=>{try{let o=await y2("default",y,null,[],n2?"queue":null,j);if(s2(o),C_((i)=>{let c=c0(i);if(!i||c!==D)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:o?.queued==="followup"?"submit_queued":"submit_sent",submittedAt:n,preview:y,queued:o?.queued||null}}}}),W_(o?.queued==="followup"?"Widget submission queued":"Widget submission sent",o?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),R)a2()}catch(o){C_((i)=>{let c=c0(i);if(!i||c!==D)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:"submit_failed",submittedAt:n,preview:y,error:o?.message||"Could not send the widget message."}}}}),W_("Widget submission failed",o?.message||"Could not send the widget message.","warning",5000)}})();return}if(O==="widget.ready"||O==="widget.request_refresh"){let y=new Date().toISOString(),R=Boolean(V?.payload?.buildDashboard||V?.payload?.dashboardKind==="internal-state"),n=Number(K?.runtimeState?.refreshCount||0)+1;if(C_((o)=>{let i=c0(o);if(!o||i!==D)return o;return{...o,runtimeState:{...o.runtimeState||{},lastEventKind:O,lastEventPayload:V?.payload||null,...O==="widget.ready"?{readyAt:y,lastHostUpdate:{type:"ready_ack",at:y}}:{},...O==="widget.request_refresh"?{lastRefreshRequestAt:y,refreshCount:n,lastHostUpdate:{type:R?"refresh_building":"refresh_ack",at:y,count:n,echo:V?.payload||null}}:{}}}}),O==="widget.request_refresh")if(R)(async()=>{try{let o=await p3(V?.payload||null);C_((i)=>{let c=c0(i);if(!i||c!==D)return i;return{...i,runtimeState:{...i.runtimeState||{},dashboard:o,lastHostUpdate:{type:"refresh_dashboard",at:new Date().toISOString(),count:n,echo:V?.payload||null}}}}),W_("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(o){C_((i)=>{let c=c0(i);if(!i||c!==D)return i;return{...i,runtimeState:{...i.runtimeState||{},lastHostUpdate:{type:"refresh_failed",at:new Date().toISOString(),count:n,error:o?.message||"Could not build dashboard."}}}}),W_("Dashboard build failed",o?.message||"Could not build dashboard.","warning",5000)}})();else W_("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[p3,j,a2,s2,n2,W_]);b(()=>{v_.current.clear(),C_(null)},[j]);let E5=M(async()=>{if(typeof window>"u")return;try{let K=(await _1(j))?.branch,O=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([p0(),R0()]);let D=K?.agent_name?`@${K.agent_name}`:O;W_("New branch created",`Switched to ${D}.`,"info",2500);let y=T2(window.location.href,O,{chatOnly:Z});$?.(y)}catch(V){W_("Could not create branch",s1(V),"warning",5000)}},[Z,j,$,p0,R0,W_]),A5=M(async()=>{if(typeof window>"u"||L)return;let V=v9(j);if(!V){W_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(V.mode==="tab"){let O=c9(window.location.href,j,{chatOnly:!0});if(!window.open(O,V.target))W_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let K=u9(V);if(!K){W_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}m9(K,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await _1(j))?.branch,y=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let n=await D4();r_(Array.isArray(n?.chats)?n.chats:[])}catch{}try{let n=await r1(s);X0(Array.isArray(n?.chats)?n.chats:[])}catch{}let R=T2(window.location.href,y,{chatOnly:!0});g9(K,R)}catch(O){p9(K),W_("Could not open branch window",s1(O),"error",5000)}},[j,s,L,W_]);b(()=>{if(!N0)return;if(typeof window>"u")return;let V=r$.current;if(!V)return;if(!z2.current){let K=m2("editorWidth",null),O=U2.current||280;z2.current=Number.isFinite(K)?K:O}if(V.style.setProperty("--editor-width",`${z2.current}px`),!w$.current){let K=m2("dockHeight",null);w$.current=Number.isFinite(K)?K:200}V.style.setProperty("--dock-height",`${w$.current}px`)},[N0]),b(()=>{if(!y0||Z)return;let V=(K)=>{if(K.ctrlKey&&K.key==="`")K.preventDefault(),S$()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[S$,y0,Z]),b(()=>{if(Z)return;let V=(K)=>{if(K.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault(),m0();return}if(K.key==="Escape"&&l0)K.preventDefault(),u0()};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[m0,u0,l0,Z]);let y5=Boolean(k_&&k_===(N_?.turn_id||U_));if(N)return B`
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
        <div class=${`app-shell${s0?"":" workspace-collapsed"}${N0?" editor-open":""}${Z?" chat-only":""}${l0?" zen-mode":""}`} ref=${r$}>
            ${!Z&&B`
                <${D9}
                    onFileSelect=${F2}
                    visible=${s0}
                    active=${s0||N0}
                    onOpenEditor=${S0}
                    onOpenTerminalTab=${U0}
                    onToggleTerminal=${y0?S$:void 0}
                    terminalVisible=${Boolean(y0&&o0)}
                />
                <button
                    class=${`workspace-toggle-tab${s0?" open":" closed"}`}
                    onClick=${F5}
                    title=${s0?"Hide workspace":"Show workspace"}
                    aria-label=${s0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${a1} onTouchStart=${E2}></div>
            `}
            ${O0&&B`
                <div class="editor-pane-container">
                    ${l0&&B`<div class="zen-hover-zone"></div>`}
                    ${N0&&B`
                        <${E9}
                            tabs=${i$}
                            activeId=${a_}
                            onActivate=${P$}
                            onClose=${q$}
                            onCloseOthers=${x2}
                            onCloseAll=${M$}
                            onTogglePin=${B2}
                            onTogglePreview=${w2}
                            previewTabs=${v0}
                            onToggleDock=${y0?S$:void 0}
                            dockVisible=${y0&&o0}
                            onToggleZen=${m0}
                            zenMode=${l0}
                        />
                    `}
                    ${N0&&B`<div class="editor-pane-host" ref=${l$}></div>`}
                    ${N0&&a_&&v0.has(a_)&&B`
                        <${y9}
                            getContent=${()=>j$.current?.getContent?.()}
                            path=${a_}
                            onClose=${()=>w2(a_)}
                        />
                    `}
                    ${y0&&o0&&B`<div class="dock-splitter" onMouseDown=${R3} onTouchStart=${t1}></div>`}
                    ${y0&&B`<div class=${`dock-panel${o0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${S$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${X$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${O$} onTouchStart=${S2}></div>
            `}
            <div class="container">
                ${F&&b9()&&B`<div class="search-results-spacer"></div>`}
                ${Z&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${w?.agent_name?`@${w.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${w?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Q0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(V)=>c3(V.currentTarget.value)}
                                    >
                                        ${Q0.map((V)=>B`
                                            <option key=${V.chat_jid} value=${V.chat_jid}>
                                                ${`@${V.agent_name} — ${V.chat_jid}${V.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${w?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${h3}
                                    title=${t$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${t$}
                                >
                                    ${t$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${w?.chat_jid&&w.chat_jid!==(w.root_chat_jid||w.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${i3}
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
                ${(W||F)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${K5}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${W?`#${W}`:`Search: ${F} · ${F_}`}</span>
                    </div>
                `}
                <${v6}
                    posts=${Q2}
                    hasMore=${_4?C2:!1}
                    onLoadMore=${_4?h0:void 0}
                    timelineRef=${x$}
                    onHashtagClick=${z5}
                    onMessageRef=${i2}
                    onScrollToMessage=${C$}
                    onFileRef=${f2}
                    onPostClick=${void 0}
                    onDeletePost=${q5}
                    onOpenWidget=${D5}
                    emptyMessage=${W?`No posts with #${W}`:F?`No results for "${F}"`:void 0}
                    agents=${R_}
                    user=${t_}
                    reverse=${_4}
                    removingPostIds=${h$}
                    searchQuery=${F}
                />
                <${J6}
                    status=${N_}
                    draft=${r}
                    plan=${f0}
                    thought=${$_}
                    pendingRequest=${V_}
                    intent=${a}
                    turnId=${U_}
                    steerQueued=${y5}
                    onPanelToggle=${J}
                />
                <${j6}
                    session=${E_}
                    onClose=${j4}
                    onRetry=${B5}
                    onInject=${U5}
                />
                <${W6}
                    widget=${f_}
                    onClose=${a2}
                    onWidgetEvent=${J5}
                />
                <${x8}
                    onPost=${()=>{let{searchQuery:V,searchOpen:K}=P0.current||{};if(!V&&!K)N$(),h()}}
                    onFocus=${h}
                    searchMode=${C}
                    searchScope=${u}
                    onSearch=${V5}
                    onSearchScopeChange=${E}
                    onEnterSearch=${G5}
                    onExitSearch=${Q5}
                    fileRefs=${x}
                    onRemoveFileRef=${H2}
                    onClearFileRefs=${c2}
                    onSetFileRefs=${D2}
                    messageRefs=${A}
                    onRemoveMessageRef=${l2}
                    onClearMessageRefs=${U}
                    onSetMessageRefs=${H}
                    onSwitchChat=${c3}
                    onRenameSession=${h3}
                    isRenameSessionInProgress=${t$}
                    onCreateSession=${E5}
                    onDeleteSession=${i3}
                    onRestoreSession=${H5}
                    activeEditorPath=${Z?null:a_}
                    onAttachEditorFile=${Z?void 0:h2}
                    onOpenFilePill=${f2}
                    followupQueueCount=${i0}
                    followupQueueItems=${w0}
                    onInjectQueuedFollowup=${X5}
                    onRemoveQueuedFollowup=${L5}
                    onSubmitIntercept=${W5}
                    onMessageResponse=${s2}
                    onSubmitError=${T}
                    onPopOutChat=${L?void 0:A5}
                    isAgentActive=${n2}
                    activeChatAgents=${J0}
                    currentChatJid=${j}
                    connectionStatus=${z}
                    activeModel=${n_}
                    modelUsage=${c_}
                    thinkingLevel=${p_}
                    supportsThinking=${w_}
                    contextUsage=${S_}
                    notificationsEnabled=${N2}
                    notificationPermission=${b0}
                    onToggleNotifications=${G$}
                    onModelChange=${s_}
                    onModelStateChange=${$4}
                />
                <${E6}
                    request=${V_}
                    onRespond=${()=>{X_(null),g_.current=null}}
                />
            </div>
        </div>
    `}function jN(){let[_,$]=v(()=>typeof window>"u"?"http://localhost/":window.location.href);b(()=>{if(typeof window>"u")return;let N=()=>$(window.location.href);return window.addEventListener("popstate",N),()=>window.removeEventListener("popstate",N)},[]);let j=M((N,Y={})=>{if(typeof window>"u")return;let{replace:z=!1}=Y||{},G=new URL(String(N||""),window.location.href).toString();if(z)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Z=I_(()=>new URL(_).searchParams,[_]);return B`<${$N} locationParams=${Z} navigate=${j} />`}H8(B`<${jN} />`,document.getElementById("app"));

//# debugId=682A0DC33AF5DDE864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
