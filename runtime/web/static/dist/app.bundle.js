var _5=Object.defineProperty;var $5=(_)=>_;function j5(_,$){this[_]=$5.bind(null,$)}var Z5=(_,$)=>{for(var j in $)_5(_,j,{get:$[j],enumerable:!0,configurable:!0,set:j5.bind($,j)})};var V1,e_,g3,N5,n$,P3,p3,c3,h3,r1,n1,d1,Y5,W1={},X1=[],z5=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q1=Array.isArray;function S$(_,$){for(var j in $)_[j]=$[j];return _}function a1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function i3(_,$,j){var Z,N,Y,z={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?N=$[Y]:z[Y]=$[Y];if(arguments.length>2&&(z.children=arguments.length>3?V1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)z[Y]===void 0&&(z[Y]=_.defaultProps[Y]);return z1(_,z,Z,N,null)}function z1(_,$,j,Z,N){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++g3:N,__i:-1,__u:0};return N==null&&e_.vnode!=null&&e_.vnode(Y),Y}function L1(_){return _.children}function G1(_,$){this.props=_,this.context=$}function J2(_,$){if($==null)return _.__?J2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?J2(_):null}function G5(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],Y=S$({},$);Y.__v=$.__v+1,e_.vnode&&e_.vnode(Y),t1(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?J2($):j,!!(32&$.__u),N),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,o3(Z,Y,N),$.__e=$.__=null,Y.__e!=j&&l3(Y)}}function l3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),l3(_)}function x3(_){(!_.__d&&(_.__d=!0)&&n$.push(_)&&!q1.__r++||P3!=e_.debounceRendering)&&((P3=e_.debounceRendering)||p3)(q1)}function q1(){try{for(var _,$=1;n$.length;)n$.length>$&&n$.sort(c3),_=n$.shift(),$=n$.length,G5(_)}finally{n$.length=q1.__r=0}}function n3(_,$,j,Z,N,Y,z,X,Q,q,L){var V,H,A,T,m,p,x,b=Z&&Z.__k||X1,c=$.length;for(Q=K5(j,$,b,Q,c),V=0;V<c;V++)(A=j.__k[V])!=null&&(H=A.__i!=-1&&b[A.__i]||W1,A.__i=V,p=t1(_,A,H,N,Y,z,X,Q,q,L),T=A.__e,A.ref&&H.ref!=A.ref&&(H.ref&&e1(H.ref,null,A),L.push(A.ref,A.__c||T,A)),m==null&&T!=null&&(m=T),(x=!!(4&A.__u))||H.__k===A.__k?Q=d3(A,Q,_,x):typeof A.type=="function"&&p!==void 0?Q=p:T&&(Q=T.nextSibling),A.__u&=-7);return j.__e=m,Q}function K5(_,$,j,Z,N){var Y,z,X,Q,q,L=j.length,V=L,H=0;for(_.__k=Array(N),Y=0;Y<N;Y++)(z=$[Y])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[Y]=z1(null,z,null,null,null):Q1(z)?z=_.__k[Y]=z1(L1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[Y]=z1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[Y]=z,Q=Y+H,z.__=_,z.__b=_.__b+1,X=null,(q=z.__i=W5(z,j,Q,V))!=-1&&(V--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>L?H--:N<L&&H++),typeof z.type!="function"&&(z.__u|=4)):q!=Q&&(q==Q-1?H--:q==Q+1?H++:(q>Q?H--:H++,z.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<L;Y++)(X=j[Y])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=J2(X)),r3(X,X));return Z}function d3(_,$,j,Z){var N,Y;if(typeof _.type=="function"){for(N=_.__k,Y=0;N&&Y<N.length;Y++)N[Y]&&(N[Y].__=_,$=d3(N[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=J2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function W5(_,$,j,Z){var N,Y,z,X=_.key,Q=_.type,q=$[j],L=q!=null&&(2&q.__u)==0;if(q===null&&X==null||L&&X==q.key&&Q==q.type)return j;if(Z>(L?1:0)){for(N=j-1,Y=j+1;N>=0||Y<$.length;)if((q=$[z=N>=0?N--:Y++])!=null&&(2&q.__u)==0&&X==q.key&&Q==q.type)return z}return-1}function I3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||z5.test($)?j:j+"px"}function Y1(_,$,j,Z,N){var Y,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||I3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||I3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(h3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=r1,_.addEventListener($,Y?d1:n1,Y)):_.removeEventListener($,Y?d1:n1,Y);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function M3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=r1++;else if($.t<j.u)return;return j(e_.event?e_.event($):$)}}}function t1(_,$,j,Z,N,Y,z,X,Q,q){var L,V,H,A,T,m,p,x,b,c,y,R,o,a,n,$_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(Q=!!(32&j.__u),Y=[X=$.__e=j.__e]),(L=e_.__b)&&L($);_:if(typeof $_=="function")try{if(x=$.props,b=$_.prototype&&$_.prototype.render,c=(L=$_.contextType)&&Z[L.__c],y=L?c?c.props.value:L.__:Z,j.__c?p=(V=$.__c=j.__c).__=V.__E:(b?$.__c=V=new $_(x,y):($.__c=V=new G1(x,y),V.constructor=$_,V.render=q5),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),b&&V.__s==null&&(V.__s=V.state),b&&$_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=S$({},V.__s)),S$(V.__s,$_.getDerivedStateFromProps(x,V.__s))),A=V.props,T=V.state,V.__v=$,H)b&&$_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),b&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(b&&$_.getDerivedStateFromProps==null&&x!==A&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(x,y),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(x,V.__s,y)===!1){$.__v!=j.__v&&(V.props=x,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),X1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(x,V.__s,y),b&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(A,T,m)})}if(V.context=y,V.props=x,V.__P=_,V.__e=!1,R=e_.__r,o=0,b)V.state=V.__s,V.__d=!1,R&&R($),L=V.render(V.props,V.state,V.context),X1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,R&&R($),L=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Z=S$(S$({},Z),V.getChildContext())),b&&!H&&V.getSnapshotBeforeUpdate!=null&&(m=V.getSnapshotBeforeUpdate(A,T)),a=L!=null&&L.type===L1&&L.key==null?s3(L.props.children):L,X=n3(_,Q1(a)?a:[a],$,j,Z,N,Y,z,X,Q,q),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),p&&(V.__E=V.__=null)}catch(i){if($.__v=null,Q||Y!=null)if(i.then){for($.__u|=Q?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;Y[Y.indexOf(X)]=null,$.__e=X}else{for(n=Y.length;n--;)a1(Y[n]);o1($)}else $.__e=j.__e,$.__k=j.__k,i.then||o1($);e_.__e(i,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=X5(j.__e,$,j,Z,N,Y,z,Q,q);return(L=e_.diffed)&&L($),128&$.__u?void 0:X}function o1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(o1))}function o3(_,$,j){for(var Z=0;Z<j.length;Z++)e1(j[Z],j[++Z],j[++Z]);e_.__c&&e_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(Y){Y.call(N)})}catch(Y){e_.__e(Y,N.__v)}})}function s3(_){return typeof _!="object"||_==null||_.__b>0?_:Q1(_)?_.map(s3):S$({},_)}function X5(_,$,j,Z,N,Y,z,X,Q){var q,L,V,H,A,T,m,p=j.props||W1,x=$.props,b=$.type;if(b=="svg"?N="http://www.w3.org/2000/svg":b=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),Y!=null){for(q=0;q<Y.length;q++)if((A=Y[q])&&"setAttribute"in A==!!b&&(b?A.localName==b:A.nodeType==3)){_=A,Y[q]=null;break}}if(_==null){if(b==null)return document.createTextNode(x);_=document.createElementNS(N,b,x.is&&x),X&&(e_.__m&&e_.__m($,Y),X=!1),Y=null}if(b==null)p===x||X&&_.data==x||(_.data=x);else{if(Y=Y&&V1.call(_.childNodes),!X&&Y!=null)for(p={},q=0;q<_.attributes.length;q++)p[(A=_.attributes[q]).name]=A.value;for(q in p)A=p[q],q=="dangerouslySetInnerHTML"?V=A:q=="children"||(q in x)||q=="value"&&("defaultValue"in x)||q=="checked"&&("defaultChecked"in x)||Y1(_,q,null,A,N);for(q in x)A=x[q],q=="children"?H=A:q=="dangerouslySetInnerHTML"?L=A:q=="value"?T=A:q=="checked"?m=A:X&&typeof A!="function"||p[q]===A||Y1(_,q,A,p[q],N);if(L)X||V&&(L.__html==V.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(V&&(_.innerHTML=""),n3($.type=="template"?_.content:_,Q1(H)?H:[H],$,j,Z,b=="foreignObject"?"http://www.w3.org/1999/xhtml":N,Y,z,Y?Y[0]:j.__k&&J2(j,0),X,Q),Y!=null)for(q=Y.length;q--;)a1(Y[q]);X||(q="value",b=="progress"&&T==null?_.removeAttribute("value"):T!=null&&(T!==_[q]||b=="progress"&&!T||b=="option"&&T!=p[q])&&Y1(_,q,T,p[q],N),q="checked",m!=null&&m!=_[q]&&Y1(_,q,m,p[q],N))}return _}function e1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){e_.__e(N,j)}}function r3(_,$,j){var Z,N;if(e_.unmount&&e_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||e1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){e_.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&r3(Z[N],$,j||typeof _.type!="function");j||a1(_.__e),_.__c=_.__=_.__e=void 0}function q5(_,$,j){return this.constructor(_,j)}function a3(_,$,j){var Z,N,Y,z;$==document&&($=document.documentElement),e_.__&&e_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],z=[],t1($,_=(!Z&&j||$).__k=i3(L1,null,[_]),N||W1,W1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?V1.call($.childNodes):null,Y,!Z&&j?j:N?N.__e:$.firstChild,Z,z),o3(Y,_,z)}V1=X1.slice,e_={__e:function(_,$,j,Z){for(var N,Y,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((Y=N.constructor)&&Y.getDerivedStateFromError!=null&&(N.setState(Y.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(X){_=X}throw _}},g3=0,N5=function(_){return _!=null&&_.constructor===void 0},G1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S$({},this.state),typeof _=="function"&&(_=_(S$({},j),this.props)),_&&S$(j,_),_!=null&&this.__v&&($&&this._sb.push($),x3(this))},G1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),x3(this))},G1.prototype.render=L1,n$=[],p3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c3=function(_,$){return _.__v.__b-$.__v.__b},q1.__r=0,h3=/(PointerCapture)$|Capture$/i,r1=0,n1=M3(!1),d1=M3(!0),Y5=0;var g2,U0,l1,b3,p2=0,t3=[],B0=e_,C3=B0.__b,T3=B0.__r,f3=B0.diffed,S3=B0.__c,R3=B0.unmount,v3=B0.__;function _4(_,$){B0.__h&&B0.__h(U0,_,p2||$),p2=0;var j=U0.__H||(U0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return p2=1,V5(_8,_)}function V5(_,$,j){var Z=_4(g2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):_8(void 0,$),function(X){var Q=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(Q,X);Q!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=U0,!U0.__f)){var N=function(X,Q,q){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!Y||Y.call(this,X,Q,q);var V=Z.__c.props!==X;return L.some(function(H){if(H.__N){var A=H.__[0];H.__=H.__N,H.__N=void 0,A!==H.__[0]&&(V=!0)}}),Y&&Y.call(this,X,Q,q)||V};U0.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:z}=U0;U0.componentWillUpdate=function(X,Q,q){if(this.__e){var L=Y;Y=void 0,N(X,Q,q),Y=L}z&&z.call(this,X,Q,q)},U0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=_4(g2++,3);!B0.__s&&e3(j.__H,$)&&(j.__=_,j.u=$,U0.__H.__h.push(j))}function k(_){return p2=5,f_(function(){return{current:_}},[])}function f_(_,$){var j=_4(g2++,7);return e3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function I(_,$){return p2=8,f_(function(){return _},$)}function Q5(){for(var _;_=t3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(K1),$.__h.some(s1),$.__h=[]}catch(j){$.__h=[],B0.__e(j,_.__v)}}}B0.__b=function(_){U0=null,C3&&C3(_)},B0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),v3&&v3(_,$)},B0.__r=function(_){T3&&T3(_),g2=0;var $=(U0=_.__c).__H;$&&(l1===U0?($.__h=[],U0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(K1),$.__h.some(s1),$.__h=[],g2=0)),l1=U0},B0.diffed=function(_){f3&&f3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(t3.push($)!==1&&b3===B0.requestAnimationFrame||((b3=B0.requestAnimationFrame)||L5)(Q5)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),l1=U0=null},B0.__c=function(_,$){$.some(function(j){try{j.__h.some(K1),j.__h=j.__h.filter(function(Z){return!Z.__||s1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],B0.__e(Z,j.__v)}}),S3&&S3(_,$)},B0.unmount=function(_){R3&&R3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{K1(Z)}catch(N){$=N}}),j.__H=void 0,$&&B0.__e($,j.__v))};var u3=typeof requestAnimationFrame=="function";function L5(_){var $,j=function(){clearTimeout(Z),u3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);u3&&($=requestAnimationFrame(j))}function K1(_){var $=U0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),U0=$}function s1(_){var $=U0;_.__c=_.__(),U0=$}function e3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function _8(_,$){return typeof $=="function"?$(_):$}var $8=function(_,$,j,Z){var N;$[0]=0;for(var Y=1;Y<$.length;Y++){var z=$[Y++],X=$[Y]?($[0]|=z?1:2,j[$[Y++]]):$[++Y];z===3?Z[0]=X:z===4?Z[1]=Object.assign(Z[1]||{},X):z===5?(Z[1]=Z[1]||{})[$[++Y]]=X:z===6?Z[1][$[++Y]]+=X+"":z?(N=_.apply(X,$8(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[Y-2]=0,$[Y]=N)):Z.push(X)}return Z},m3=new Map;function B5(_){var $=m3.get(this);return $||($=new Map,m3.set(this,$)),($=$8(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,Y=1,z="",X="",Q=[0],q=function(H){Y===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?Q.push(0,H,z):Y===3&&(H||z)?(Q.push(3,H,z),Y=2):Y===2&&z==="..."&&H?Q.push(4,H,0):Y===2&&z&&!H?Q.push(5,0,!0,z):Y>=5&&((z||!H&&Y===5)&&(Q.push(Y,0,z,N),Y=6),H&&(Q.push(Y,H,0,N),Y=6)),z=""},L=0;L<j.length;L++){L&&(Y===1&&q(),q(L));for(var V=0;V<j[L].length;V++)Z=j[L][V],Y===1?Z==="<"?(q(),Q=[Q],Y=3):z+=Z:Y===4?z==="--"&&Z===">"?(Y=1,z=""):z=Z+z[0]:X?Z===X?X="":z+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),Y=1):Y&&(Z==="="?(Y=5,N=z,z=""):Z==="/"&&(Y<5||j[L][V+1]===">")?(q(),Y===3&&(Q=Q[0]),Y=Q,(Q=Q[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),Y=2):z+=Z),Y===3&&z==="!--"&&(Y=4,Q=Q[0])}return q(),Q}(_)),$),arguments,[])).length>1?$:$[0]}var B=B5.bind(i3);var a0={};Z5(a0,{uploadWorkspaceFile:()=>U1,uploadMedia:()=>K4,updateWorkspaceFile:()=>b5,submitAdaptiveCardAction:()=>W4,streamSidePrompt:()=>x5,steerAgentQueueItem:()=>P5,setWorkspaceVisibility:()=>n2,setAgentThoughtVisibility:()=>V4,sendPeerAgentMessage:()=>E5,sendAgentMessage:()=>y2,searchPosts:()=>j4,restoreChatBranch:()=>y5,respondToAgentRequest:()=>B1,renameWorkspaceFile:()=>F4,renameChatBranch:()=>D5,removeAgentQueueItem:()=>w5,pruneChatBranch:()=>J5,moveWorkspaceEntry:()=>H4,getWorkspaceTree:()=>l2,getWorkspaceRawUrl:()=>O1,getWorkspaceFile:()=>B4,getWorkspaceDownloadUrl:()=>F1,getWorkspaceBranch:()=>M5,getTimeline:()=>c2,getThumbnailUrl:()=>Q4,getThread:()=>Z4,getPostsByHashtag:()=>$4,getMediaUrl:()=>q$,getMediaText:()=>L4,getMediaInfo:()=>E2,getMediaBlob:()=>I5,getChatBranches:()=>H5,getAgents:()=>z4,getAgentThought:()=>q4,getAgentStatus:()=>G4,getAgentQueueState:()=>A5,getAgentModels:()=>i2,getAgentContext:()=>k5,getActiveChatAgents:()=>Y4,forkChatBranch:()=>h2,deleteWorkspaceFile:()=>D4,deletePost:()=>N4,createWorkspaceFile:()=>O4,createReply:()=>F5,createPost:()=>O5,attachWorkspaceFile:()=>U4,addToWhitelist:()=>X4,SSEClient:()=>H1});async function S_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function j8(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function U5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:X}=await j.read();if(X)break;N+=Z.decode(z,{stream:!0});let Q=N.split(`

`);N=Q.pop()||"";for(let q of Q){let L=j8(q);if(L)$(L.event,L.data)}}N+=Z.decode();let Y=j8(N);if(Y)$(Y.event,Y.data)}async function c2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return S_(Z)}async function $4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function j4(_,$=50,j=0,Z=null,N="current",Y=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",Q=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return S_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${X}${Q}`)}async function Z4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return S_(`/thread/${_}${j}`)}async function O5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return S_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function F5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function N4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return S_(N,{method:"DELETE"})}async function y2(_,$,j=null,Z=[],N=null,Y=null){let z=Y?`?chat_jid=${encodeURIComponent(Y)}`:"";return S_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Y4(){return S_("/agent/active-chats")}async function H5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return S_(`/agent/branches${Z}`)}async function h2(_,$={}){return S_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function D5(_,$={}){return S_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function J5(_){return S_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function y5(_,$={}){return S_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function E5(_,$,j,Z="auto",N={}){let Y={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return S_("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function z4(){return S_("/agent/roster")}async function G4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/status${$}`)}async function k5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/context${$}`)}async function A5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/queue-state${$}`)}async function w5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function P5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function i2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/models${$}`)}async function K4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function B1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function W4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function x5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await U5(j,(Y,z)=>{if($.onEvent?.(Y,z),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(Y==="side_prompt_done")Z=z;else if(Y==="side_prompt_error")N=z}),N){let Y=Error(N?.error||"Side prompt failed");throw Y.payload=N,Y}return Z}async function X4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function q4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return S_(j)}async function V4(_,$,j){return S_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function q$(_){return`/media/${_}`}function Q4(_){return`/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function L4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function I5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function l2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return S_(Z)}async function M5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return S_($)}async function B4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return S_(N)}async function b5(_,$){return S_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function U4(_){return S_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function U1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let Y=N.toString(),z=Y?`/workspace/upload?${Y}`:"/workspace/upload",X=await fetch(""+z,{method:"POST",body:Z});if(!X.ok){let Q=await X.json().catch(()=>({error:"Upload failed"})),q=Error(Q.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=Q.code,q}return X.json()}async function O4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(N.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=N.code,Y}return Z.json()}async function F4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function H4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function D4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return S_($,{method:"DELETE"})}async function n2(_,$=!1){return S_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function O1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function F1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class H1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function t0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function i_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function k2(_,$=!1){let j=t0(_);if(j===null)return $;return j==="true"}function A2(_,$=null){let j=t0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function D1(_){return String(_||"").trim().toLowerCase()}function J4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return D1($[1]||"")}function Z8(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=D1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function N8(_,$,j={}){let Z=J4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return Z8(_).filter((Y)=>{if(N&&Y?.chat_jid===N)return!1;return D1(Y?.agent_name).startsWith(Z)})}function y4(_){let $=D1(_);return $?`@${$} `:""}function Y8(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Z8(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function z8({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let Y=460+N*68+(j?40:0);return Z>=Y}function H$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:Y="Remove",icon:z="file"}){let X=`${_}-file-pill`,Q=`${_}-file-name`,q=`${_}-file-remove`,L=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${X} title=${j||$} onClick=${N}>
      ${L}
      <span class=${Q}>${$}</span>
      ${Z&&B`
        <button
          class=${q}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var C5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function T5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,Y="Compact context",X=`${Z!=null?`Context: ${G8(Z)} / ${G8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,Q=9,q=2*Math.PI*9,L=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
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
                    stroke-dasharray=${`${L} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function G8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function K8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:Y,onEnterSearch:z,onExitSearch:X,fileRefs:Q=[],onRemoveFileRef:q,onClearFileRefs:L,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:A,activeModel:T=null,modelUsage:m=null,thinkingLevel:p=null,supportsThinking:x=!1,contextUsage:b=null,onContextCompact:c,notificationsEnabled:y=!1,notificationPermission:R="default",onToggleNotifications:o,onModelChange:a,onModelStateChange:n,activeEditorPath:$_=null,onAttachEditorFile:i,onOpenFilePill:W_,followupQueueItems:n_=[],onInjectQueuedFollowup:u_,onRemoveQueuedFollowup:l,onSubmitIntercept:Z_,onMessageResponse:t,onPopOutChat:X_,isAgentActive:z_=!1,activeChatAgents:q_=[],currentChatJid:L_="web:default",connectionStatus:N_="connected",onSetFileRefs:R_,onSetMessageRefs:P_,onSubmitError:J_,onSwitchChat:y_,onRenameSession:G0,isRenameSessionInProgress:K0=!1,onCreateSession:K_,onDeleteSession:__,onRestoreSession:O_}){let[j_,F_]=f(""),[x_,r_]=f(""),[m_,d_]=f([]),[g_,p_]=f(!1),[k_,E_]=f([]),[v_,W0]=f(0),[P0,I_]=f(!1),[y0,$0]=f([]),[M_,j0]=f(0),[a_,_0]=f(!1),[Z0,b_]=f(!1),[O0,T0]=f(!1),[c_,t_]=f(!1),[f0,A_]=f([]),[C,r]=f(!1),[B_,w_]=f(0),[o_,F0]=f(null),C_=k(null),S0=k(null),_$=k(null),$$=k(null),b0=k(null),x$=k(null),H0=k(null),h0=k(null),i0=k(0),R0=k(!1),j$=200,V2=(G)=>{let O=new Set,D=[];for(let M of G||[]){if(typeof M!=="string")continue;let g=M.trim();if(!g||O.has(g))continue;O.add(g),D.push(g)}return D},Q2=()=>{let G=t0("piclaw_compose_history");if(!G)return[];try{let O=JSON.parse(G);if(!Array.isArray(O))return[];return V2(O)}catch{return[]}},E0=(G)=>{i_("piclaw_compose_history",JSON.stringify(G))},D0=k(Q2()),N0=k(-1),g0=k(""),Y0=j_.trim()||m_.length>0||Q.length>0||V.length>0,x0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),Z$=typeof window<"u"&&typeof Notification<"u",I$=typeof window<"u"?Boolean(window.isSecureContext):!1,u$=Z$&&I$&&R!=="denied",s$=R==="granted"&&y,l0=s$?"Disable notifications":"Enable notifications",r$=m_.length>0||Q.length>0||V.length>0,a$=N_==="disconnected"?"Reconnecting":String(N_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(G)=>G.toUpperCase()),N$=N_==="disconnected"?"Reconnecting":`Connection: ${a$}`,L$=(Array.isArray(q_)?q_:[]).filter((G)=>!G?.archived_at),n0=Y8(L$,{currentChatJid:L_,limit:4}),q0=!j&&z8({footerWidth:B_,visibleAgentCount:n0.length,hasContextIndicator:Boolean(b&&b.percent!=null)}),h_=(()=>{for(let G of Array.isArray(q_)?q_:[]){let O=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(O&&O===L_)return G}return null})(),B$=Boolean(h_&&h_.chat_jid===(h_.root_chat_jid||h_.chat_jid)),D$=(()=>{let G=new Set,O=[];for(let D of Array.isArray(q_)?q_:[]){let M=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!M||M===L_||G.has(M))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;G.add(M),O.push(D)}return O})(),m$=D$.length>0,L2=m$&&typeof y_==="function",H_=m$&&typeof O_==="function",Y$=Boolean(K0||R0.current),J$=!j&&typeof G0==="function"&&!Y$,M$=!j&&typeof K_==="function",d0=!j&&typeof __==="function"&&!B$,b$=!j&&(L2||H_||J$||M$||d0),o0=T||"",v0=x&&p?` (${p})`:"",V0=v0.trim()?`${p}`:"",u0=typeof m?.hint_short==="string"?m.hint_short.trim():"",s0=[V0||null,u0||null].filter(Boolean).join(" • "),C0=[o0?`Current model: ${o0}${v0}`:null,m?.plan?`Plan: ${m.plan}`:null,u0||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),g$=Z0?"Switching model…":C0.join(" • ")||`Current model: ${o0}${v0} (tap to open model picker)`,r0=(G)=>{if(!G||typeof G!=="object")return;let O=G.model??G.current;if(typeof n==="function")n({model:O??null,thinking_level:G.thinking_level??null,supports_thinking:G.supports_thinking,provider_usage:G.provider_usage??null});if(O&&typeof a==="function")a(O)},p0=(G)=>{let O=G||C_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},p$=(G)=>{if(!G)return{content:G,fileRefs:[]};let D=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),M=-1;for(let U_=0;U_<D.length;U_+=1)if(D[U_].trim()==="Files:"&&D[U_+1]&&/^\s*-\s+/.test(D[U_+1])){M=U_;break}if(M===-1)return{content:G,fileRefs:[]};let g=[],S=M+1;for(;S<D.length;S+=1){let U_=D[S];if(/^\s*-\s+/.test(U_))g.push(U_.replace(/^\s*-\s+/,"").trim());else if(!U_.trim())break;else break}if(g.length===0)return{content:G,fileRefs:[]};let s=D.slice(0,M),Q_=D.slice(S);return{content:[...s,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:g}},t$=(G)=>{if(!G)return{content:G,messageRefs:[]};let D=G.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),M=-1;for(let U_=0;U_<D.length;U_+=1)if(D[U_].trim()==="Referenced messages:"&&D[U_+1]&&/^\s*-\s+/.test(D[U_+1])){M=U_;break}if(M===-1)return{content:G,messageRefs:[]};let g=[],S=M+1;for(;S<D.length;S+=1){let U_=D[S];if(/^\s*-\s+/.test(U_)){let F$=U_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(F$)g.push(F$[1])}else if(!U_.trim())break;else break}if(g.length===0)return{content:G,messageRefs:[]};let s=D.slice(0,M),Q_=D.slice(S);return{content:[...s,...Q_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:g}},C$=(G)=>{let O=p$(G||""),D=t$(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},J0=(G)=>{if(!G.startsWith("/")||G.includes(`
`)){I_(!1),E_([]);return}let O=G.toLowerCase().split(" ")[0];if(O.length<1){I_(!1),E_([]);return}let D=C5.filter((M)=>M.name.startsWith(O)||M.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))_0(!1),$0([]),E_(D),W0(0),I_(!0);else I_(!1),E_([])},U$=(G)=>{let O=j_,D=O.indexOf(" "),M=D>=0?O.slice(D):"",g=G.name+M;F_(g),I_(!1),E_([]),requestAnimationFrame(()=>{let S=C_.current;if(!S)return;let s=g.length;S.selectionStart=s,S.selectionEnd=s,S.focus()})},y$=(G)=>{if(J4(G)==null){_0(!1),$0([]);return}let O=N8(L$,G,{currentChatJid:L_});if(O.length>0&&!(O.length===1&&y4(O[0].agent_name).trim().toLowerCase()===String(G||"").trim().toLowerCase()))I_(!1),E_([]),$0(O),j0(0),_0(!0);else _0(!1),$0([])},E$=(G)=>{let O=y4(G?.agent_name);if(!O)return;F_(O),_0(!1),$0([]),requestAnimationFrame(()=>{let D=C_.current;if(!D)return;let M=O.length;D.selectionStart=M,D.selectionEnd=M,D.focus()})},T$=(G)=>{if(G?.preventDefault?.(),G?.stopPropagation?.(),j||!L2&&!H_&&!J$&&!M$&&!d0)return;T0(!1),I_(!1),E_([]),_0(!1),$0([]),t_((O)=>!O)},c$=(G)=>{let O=typeof G==="string"?G.trim():"";if(t_(!1),!O||O===L_){requestAnimationFrame(()=>C_.current?.focus());return}y_?.(O)},e$=async(G)=>{let O=typeof G==="string"?G.trim():"";if(t_(!1),!O||typeof O_!=="function"){requestAnimationFrame(()=>C_.current?.focus());return}try{await O_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>C_.current?.focus())}},c0=(G)=>{let O=typeof G?.chat_jid==="string"?G.chat_jid.trim():"";if(O&&typeof y_==="function"){y_(O);return}E$(G)},m0=async(G)=>{if(G?.preventDefault)G.preventDefault();if(G?.stopPropagation)G.stopPropagation();if(typeof G0!=="function"||K0||R0.current)return;R0.current=!0,t_(!1);try{await G0()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>C_.current?.focus())},O$=async()=>{if(typeof K_!=="function")return;t_(!1);try{await K_()}catch(G){console.warn("Failed to create session:",G)}requestAnimationFrame(()=>C_.current?.focus())},_2=async()=>{if(typeof __!=="function")return;t_(!1);try{await __(L_)}catch(G){console.warn("Failed to delete session:",G)}requestAnimationFrame(()=>C_.current?.focus())},z$=(G)=>{if(j)r_(G);else F_(G),J0(G),y$(G);requestAnimationFrame(()=>p0())},h$=(G)=>{let O=j?x_:j_,D=O&&!O.endsWith(`
`)?`
`:"",M=`${O}${D}${G}`.trimStart();z$(M)},k$=(G)=>{let O=G?.command?.model_label;if(O)return O;let D=G?.command?.message;if(typeof D==="string"){let M=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(M?.[1])return M[1].trim()}return null},f$=async(G)=>{if(j||Z0)return;b_(!0);try{let O=await y2("default",G,null,[],null,L_),D=k$(O);r0({model:D??T??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let M=await i2(L_);if(M)r0(M)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{b_(!1)}},$2=async()=>{await f$("/cycle-model")},B2=async(G)=>{if(!G||Z0)return;if(await f$(`/model ${G}`))T0(!1)},A$=(G)=>{G.preventDefault(),G.stopPropagation(),t_(!1),T0((O)=>!O)},i$=async()=>{if(j)return;c?.(),await w$("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},j2=(G)=>{if(G==="queue"||G==="steer"||G==="auto")return G;return z_?"queue":null},w$=async(G,O,D={})=>{let{includeMedia:M=!0,includeFileRefs:g=!0,includeMessageRefs:S=!0,clearAfterSubmit:s=!0,recordHistory:Q_=!0}=D||{},k0=typeof G==="string"?G:G&&typeof G?.target?.value==="string"?G.target.value:j_,U_=typeof k0==="string"?k0:"";if(!U_.trim()&&(M?m_.length===0:!0)&&(g?Q.length===0:!0)&&(S?V.length===0:!0))return;I_(!1),E_([]),_0(!1),$0([]),t_(!1),F0(null);let F$=M?[...m_]:[],P$=g?[...Q]:[],O2=S?[...V]:[],G$=U_.trim();if(Q_&&G$){let N2=D0.current,I0=V2(N2.filter((F2)=>F2!==G$));if(I0.push(G$),I0.length>200)I0.splice(0,I0.length-200);D0.current=I0,E0(I0),N0.current=-1,g0.current=""}let S1=()=>{if(M)d_([...F$]);if(g)R_?.(P$);if(S)P_?.(O2);F_(G$),requestAnimationFrame(()=>p0())};if(s)F_(""),d_([]),L?.(),A?.();(async()=>{try{if(await Z_?.({content:G$,submitMode:O,fileRefs:P$,messageRefs:O2,mediaFiles:F$})){_?.();return}let I0=[];for(let X0 of F$){let Q0=await K4(X0);I0.push(Q0.id)}let F2=P$.length?`Files:
${P$.map((X0)=>`- ${X0}`).join(`
`)}`:"",L0=O2.length?`Referenced messages:
${O2.map((X0)=>`- message:${X0}`).join(`
`)}`:"",R1=I0.length?`Attachments:
${I0.map((X0,Q0)=>{let R2=F$[Q0]?.name||`attachment-${Q0+1}`;return`- attachment:${X0} (${R2})`}).join(`
`)}`:"",H2=[G$,F2,L0,R1].filter(Boolean).join(`

`),l$=await y2("default",H2,null,I0,j2(O),L_);if(t?.(l$),l$?.command){r0({model:l$.command.model_label??T??null,thinking_level:l$.command.thinking_level,supports_thinking:l$.command.supports_thinking});try{let X0=await i2(L_);if(X0)r0(X0)}catch{}}_?.()}catch(N2){if(s)S1();let I0=N2?.message||"Failed to send message.";F0(I0),J_?.(I0),console.error("Failed to post:",N2)}})()},I2=(G)=>{u_?.(G)},M2=(G)=>{if(G.isComposing)return;if(j&&G.key==="Escape"){G.preventDefault(),r_(""),X?.();return}if(!j&&c_&&G.key==="Escape"){G.preventDefault(),t_(!1);return}if(a_&&y0.length>0){let O=C_.current?.value??(j?x_:j_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))_0(!1),$0([]);else{if(G.key==="ArrowDown"){G.preventDefault(),j0((D)=>(D+1)%y0.length);return}if(G.key==="ArrowUp"){G.preventDefault(),j0((D)=>(D-1+y0.length)%y0.length);return}if(G.key==="Tab"||G.key==="Enter"){G.preventDefault(),E$(y0[M_]);return}if(G.key==="Escape"){G.preventDefault(),_0(!1),$0([]);return}}}if(P0&&k_.length>0){let O=C_.current?.value??(j?x_:j_);if(!String(O||"").startsWith("/"))I_(!1),E_([]);else{if(G.key==="ArrowDown"){G.preventDefault(),W0((D)=>(D+1)%k_.length);return}if(G.key==="ArrowUp"){G.preventDefault(),W0((D)=>(D-1+k_.length)%k_.length);return}if(G.key==="Tab"){G.preventDefault(),U$(k_[v_]);return}if(G.key==="Enter"&&!G.shiftKey){if(!(C_.current?.value??(j?x_:j_)).includes(" ")){G.preventDefault();let g=k_[v_];I_(!1),E_([]),w$(g.name);return}}if(G.key==="Escape"){G.preventDefault(),I_(!1),E_([]);return}}}if(!j&&(G.key==="ArrowUp"||G.key==="ArrowDown")&&!G.metaKey&&!G.ctrlKey&&!G.altKey&&!G.shiftKey){let O=C_.current;if(!O)return;let D=O.value||"",M=O.selectionStart===0&&O.selectionEnd===0,g=O.selectionStart===D.length&&O.selectionEnd===D.length;if(G.key==="ArrowUp"&&M||G.key==="ArrowDown"&&g){let S=D0.current;if(!S.length)return;G.preventDefault();let s=N0.current;if(G.key==="ArrowUp"){if(s===-1)g0.current=D,s=S.length-1;else if(s>0)s-=1;N0.current=s,z$(S[s]||"")}else{if(s===-1)return;if(s<S.length-1)s+=1,N0.current=s,z$(S[s]||"");else N0.current=-1,z$(g0.current||""),g0.current=""}requestAnimationFrame(()=>{let Q_=C_.current;if(!Q_)return;let k0=Q_.value.length;Q_.selectionStart=k0,Q_.selectionEnd=k0});return}}if(G.key==="Enter"&&!G.shiftKey&&(G.ctrlKey||G.metaKey)){G.preventDefault();let O=C_.current?.value??(j?x_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else w$(O,"steer");return}if(G.key==="Enter"&&!G.shiftKey){G.preventDefault();let O=C_.current?.value??(j?x_:j_);if(j){if(O.trim())N?.(O.trim(),Z)}else w$(O)}},V_=(G)=>{let O=Array.from(G||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;d_((D)=>[...D,...O]),F0(null)},U2=(G)=>{V_(G.target.files),G.target.value=""},b2=(G)=>{if(j)return;G.preventDefault(),G.stopPropagation(),i0.current+=1,p_(!0)},C2=(G)=>{if(j)return;if(G.preventDefault(),G.stopPropagation(),i0.current=Math.max(0,i0.current-1),i0.current===0)p_(!1)},Z2=(G)=>{if(j)return;if(G.preventDefault(),G.stopPropagation(),G.dataTransfer)G.dataTransfer.dropEffect="copy";p_(!0)},T2=(G)=>{if(j)return;G.preventDefault(),G.stopPropagation(),i0.current=0,p_(!1),V_(G.dataTransfer?.files||[])},f2=(G)=>{if(j)return;let O=G.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let M of O){if(M.kind!=="file")continue;let g=M.getAsFile?.();if(g)D.push(g)}if(D.length>0)G.preventDefault(),V_(D)},S2=(G)=>{d_((O)=>O.filter((D,M)=>M!==G))},U=()=>{F0(null),d_([]),L?.(),A?.()},J=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((G)=>{let{latitude:O,longitude:D,accuracy:M}=G.coords,g=`${O.toFixed(5)}, ${D.toFixed(5)}`,S=Number.isFinite(M)?` ±${Math.round(M)}m`:"",s=`https://maps.google.com/?q=${O},${D}`,Q_=`Location: ${g}${S} ${s}`;h$(Q_)},(G)=>{let O=G?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!O0)return;r(!0),i2(L_).then((G)=>{let O=Array.isArray(G?.models)?G.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,M)=>D.localeCompare(M,void 0,{sensitivity:"base"})),A_(O),r0(G)}).catch((G)=>{console.warn("Failed to load model list:",G),A_([])}).finally(()=>{r(!1)})},[O0,T]),v(()=>{if(j)T0(!1),t_(!1),I_(!1),E_([]),_0(!1),$0([])},[j]),v(()=>{if(c_&&!b$)t_(!1)},[c_,b$]),v(()=>{if(!O0)return;let G=(O)=>{let D=$$.current,M=b0.current,g=O.target;if(D&&D.contains(g))return;if(M&&M.contains(g))return;T0(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[O0]),v(()=>{if(!c_)return;let G=(O)=>{let D=x$.current,M=H0.current,g=O.target;if(D&&D.contains(g))return;if(M&&M.contains(g))return;t_(!1)};return document.addEventListener("pointerdown",G),()=>document.removeEventListener("pointerdown",G)},[c_]),v(()=>{let G=()=>{let S=h0.current?.clientWidth||0;w_((s)=>s===S?s:S)};G();let O=h0.current,D=0,M=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,G()})},g=null;if(O&&typeof ResizeObserver<"u")g=new ResizeObserver(()=>M()),g.observe(O);if(typeof window<"u")window.addEventListener("resize",M);return()=>{if(D)cancelAnimationFrame(D);if(g?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",M)}},[j,T,n0.length,b?.percent]);let P=(G)=>{let O=G.target.value;if(F0(null),c_)t_(!1);p0(G.target),z$(O)};return v(()=>{requestAnimationFrame(()=>p0())},[j_,x_,j]),v(()=>{if(j)return;y$(j_)},[L$,L_,j_,j]),B`
        <div class="compose-box">
            ${!j&&n_.length>0&&B`
                <div class="compose-queue-stack">
                    ${n_.map((G)=>{let O=typeof G?.content==="string"?G.content:"",D=C$(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((M)=>B`
                                                <${H$}
                                                    key=${"queue-msg-"+M}
                                                    prefix="compose"
                                                    label=${"msg:"+M}
                                                    title=${"Message reference: "+M}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((M)=>{let g=M.split("/").pop()||M;return B`
                                                    <${H$}
                                                        key=${"queue-file-"+M}
                                                        prefix="compose"
                                                        label=${g}
                                                        title=${M}
                                                        onClick=${()=>W_?.(M)}
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
                                        onClick=${()=>I2(G)}
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
                                        onClick=${()=>l?.(G)}
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
                onDragEnter=${b2}
                onDragOver=${Z2}
                onDragLeave=${C2}
                onDrop=${T2}
            >
                <div class="compose-input-main">
                    ${o_&&!r$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${o_}</div>
                    `}
                    ${r$&&B`
                        <div class="compose-file-refs">
                            ${o_&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${o_}</div>
                            `}
                            ${V.map((G)=>{return B`
                                    <${H$}
                                        key=${"msg-"+G}
                                        prefix="compose"
                                        label=${"msg:"+G}
                                        title=${"Message reference: "+G}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(G)}
                                    />
                                `})}
                            ${Q.map((G)=>{let O=G.split("/").pop()||G;return B`
                                    <${H$}
                                        prefix="compose"
                                        label=${O}
                                        title=${G}
                                        onClick=${()=>W_?.(G)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(G)}
                                    />
                                `})}
                            ${m_.map((G,O)=>{let D=G?.name||`attachment-${O+1}`;return B`
                                    <${H$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S2(O)}
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
                        ref=${C_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?x_:j_}
                        onInput=${P}
                        onKeyDown=${M2}
                        onPaste=${f2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${a_&&y0.length>0&&B`
                        <div class="slash-autocomplete" ref=${_$}>
                            ${y0.map((G,O)=>B`
                                <div
                                    key=${G.chat_jid||G.agent_name}
                                    class=${`slash-item${O===M_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),E$(G)}}
                                    onMouseEnter=${()=>j0(O)}
                                >
                                    <span class="slash-name">@${G.agent_name}</span>
                                    <span class="slash-desc">${G.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&k_.length>0&&B`
                        <div class="slash-autocomplete" ref=${S0}>
                            ${k_.map((G,O)=>B`
                                <div
                                    key=${G.name}
                                    class=${`slash-item${O===v_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),U$(G)}}
                                    onMouseEnter=${()=>W0(O)}
                                >
                                    <span class="slash-name">${G.name}</span>
                                    <span class="slash-desc">${G.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&B`
                        <div class="compose-model-popup" ref=${$$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${C&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!C&&f0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!C&&f0.map((G)=>B`
                                    <button
                                        key=${G}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${T===G?" active":""}`}
                                        onClick=${()=>{B2(G)}}
                                        disabled=${Z0}
                                    >
                                        ${G}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{$2()}}
                                    disabled=${Z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${c_&&!j&&B`
                        <div class="compose-model-popup" ref=${x$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let G=typeof h_?.agent_name==="string"&&h_.agent_name.trim()?`@${h_.agent_name.trim()}`:L_,O=typeof h_?.chat_jid==="string"&&h_.chat_jid.trim()?h_.chat_jid.trim():L_;return`${G} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!m$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${m$&&D$.map((G)=>{let O=Boolean(G.archived_at),M=G.chat_jid!==(G.root_chat_jid||G.chat_jid)&&!G.is_active&&!O&&typeof __==="function",g=`@${G.agent_name} — ${G.chat_jid}${G.is_active?" • active":""}${O?" • archived":""}`;return B`
                                        <div key=${G.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){e$(G.chat_jid);return}c$(G.chat_jid)}}
                                                disabled=${O?!H_:!L2}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${g}
                                            </button>
                                            ${M&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${G.agent_name}`}
                                                    onClick=${(S)=>{S.stopPropagation(),t_(!1),__(G.chat_jid)}}
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
                            ${(M$||J$||d0)&&B`
                                <div class="compose-model-popup-actions">
                                    ${M$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{O$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${J$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(G)=>{m0(G)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${Y$}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${d0&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{_2()}}
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
                <div class="compose-footer" ref=${h0}>
                    ${!j&&T&&B`
                    <div class="compose-meta-row">
                        ${!j&&T&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g$}
                                    aria-label="Open model picker"
                                    onClick=${A$}
                                    disabled=${Z0}
                                >
                                    ${Z0?"Switching…":o0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Z0&&s0&&B`
                                        <span class="compose-model-usage-hint" title=${g$}>
                                            ${s0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&b&&b.percent!=null&&B`
                            <${T5} usage=${b} onCompact=${i$} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${n0.map((G)=>B`
                                <button
                                    key=${G.chat_jid||G.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>c0(G)}
                                    title=${`${G.chat_jid||"Active agent"} — switch to @${G.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${G.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${b$&&B`
                        ${h_?.agent_name&&B`
                            <span
                                class="compose-current-agent-label"
                                title=${h_.chat_jid||L_}
                                onClick=${T$}
                            >@${h_.agent_name}</span>
                        `}
                        <button
                            ref=${H0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${c_?" active":""}`}
                            onClick=${T$}
                            title=${c_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${c_?"true":"false"}
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
                                onChange=${(G)=>Y?.(G.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?X:z}
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
                    ${x0&&!j&&B`
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
                    ${u$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${s$?" active":""}`}
                            onClick=${o}
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
                        ${$_&&i&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${$_}`}
                                type="button"
                                disabled=${Q.includes($_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${U2} />
                        </label>
                    `}
                    ${(N_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${N_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${N_}" title=${N$}>
                                    ${a$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{w$()}}
                                    disabled=${!Y0}
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
    `}var A4="piclaw_theme",y1="piclaw_tint",q8="piclaw_chat_themes",o2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},V8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W8={default:{label:"Default",mode:"auto",light:o2,dark:V8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},f5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],z2={theme:"default",tint:null},Q8="light",E4=!1;function E1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function P2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function S5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let Y=parseInt(N[1],10),z=parseInt(N[2],10),X=parseInt(N[3],10);if(![Y,z,X].every((q)=>Number.isFinite(q)))return null;let Q=`#${[Y,z,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:z,b:X,hex:Q}}function L8(_){return P2(_)||S5(_)}function d2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${Y})`}function k4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function R5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*Y+0.0722*z}function v5(_){return R5(_)>0.4?"#000000":"#ffffff"}function B8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function w4(_){return W8[_]||W8.default}function u5(_){return _.mode==="auto"?B8():_.mode}function U8(_,$){let j=w4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||o2}function O8(_,$,j){let Z=L8($);if(!Z)return _;let N=P2(_.bgPrimary),Y=P2(_.bgSecondary),z=P2(_.bgHover),X=P2(_.borderColor);if(!N||!Y||!z||!X)return _;let q=P2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:d2(N,Z,0.08),bgSecondary:d2(Y,Z,0.12),bgHover:d2(z,Z,0.16),borderColor:d2(X,Z,0.08),accent:Z.hex,accentHover:q?d2(Z,q,0.18):Z.hex}}function m5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=L8(Z),Y=N?k4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?k4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?k4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",Q=N?v5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":X,"--accent-contrast-text":Q,"--danger-color":_.danger||o2.danger,"--success-color":_.success||o2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([L,V])=>{if(V)j.style.setProperty(L,V)})}function g5(){if(typeof document>"u")return;let _=document.documentElement;f5.forEach(($)=>_.style.removeProperty($))}function w2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function X8(_){let $=E1(z2?.theme||"default"),j=z2?.tint?String(z2.tint).trim():null,Z=U8($,_);if($==="default"&&j)Z=O8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?V8.bgPrimary:o2.bgPrimary}function p5(_,$){if(typeof document>"u")return;let j=w2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=w2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",X8("light"));let N=w2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",X8("dark"));let Y=w2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let z=w2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let X=w2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function c5(){if(typeof window>"u")return;let _={...z2,mode:Q8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function F8(){try{let _=t0(q8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function h5(_,$,j){let Z=F8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};i_(q8,JSON.stringify(Z))}function i5(_){if(!_)return null;return F8()[_]||null}function H8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function P4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=E1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=w4(j),Y=u5(N),z=U8(j,Y);z2={theme:j,tint:Z},Q8=Y;let X=document.documentElement;X.dataset.theme=Y,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=Y;let Q=z;if(j==="default"&&Z)Q=O8(z,Z,Y);if(j==="default"&&!Z)g5();else m5(Q,Y);if(p5(Q.bgPrimary,Y),c5(),$.persist!==!1)if(i_(A4,j),Z)i_(y1,Z);else i_(y1,"")}function J1(){if(w4(z2.theme).mode!=="auto")return;P4(z2,{persist:!1})}function D8(){if(typeof window>"u")return()=>{};let _=H8(),$=i5(_),j=$?E1($.theme||"default"):E1(t0(A4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=t0(y1);return N?N.trim():null})();if(P4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!E4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",J1);else if(N.addListener)N.addListener(J1);return E4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",J1);else if(N.removeListener)N.removeListener(J1);E4=!1}}return()=>{}}function J8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||H8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(h5($,j||"default",Z),P4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")i_(A4,j||"default"),i_(y1,Z||"")}function y8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return B8()}var k1=/#(\w+)/g,l5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),n5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),d5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),o5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},s5=new Set(["http:","https:","mailto:",""]);function x4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function G2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!s5.has(Z.protocol))return null;return Z.href}catch{return null}}function E8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=N.nextNode())Z.push(Y);for(let z of Z){let X=z.tagName.toLowerCase();if(!n5.has(X)){let q=z.parentNode;if(!q)continue;while(z.firstChild)q.insertBefore(z.firstChild,z);q.removeChild(z);continue}let Q=o5[X]||new Set;for(let q of Array.from(z.attributes)){let L=q.name.toLowerCase(),V=q.value;if(L.startsWith("on")){z.removeAttribute(q.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(Q.has(L)||d5.has(L)){if(L==="href"){let H=G2(V);if(!H)z.removeAttribute(q.name);else if(z.setAttribute(q.name,H),X==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,A=G2(H,{allowDataImage:X==="img"});if(!A)z.removeAttribute(q.name);else z.setAttribute(q.name,A)}continue}z.removeAttribute(q.name)}}return j.body.innerHTML}function k8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function A1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=k8(j);if(N===j)break;j=N}return j}function r5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],Y=!1,z=[];for(let X of j){if(!Y&&X.trim().match(/^```mermaid\s*$/i)){Y=!0,z=[];continue}if(Y&&X.trim().match(/^```\s*$/)){let Q=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${Q}@@`),Y=!1,z=[];continue}if(Y)z.push(X);else N.push(X)}if(Y)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function a5(_){if(!_)return _;return A1(_,5)}function t5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function e5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function _7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),Y=$[N]??"",z=a5(Y);return`<div class="mermaid-container" data-mermaid="${t5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function A8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var $7={span:new Set(["title","class","lang","dir"])};function j7(_,$){let j=$7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=N.exec($)){let z=(Y[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let X=Y[2]??Y[3]??Y[4]??"";Z.push(` ${z}="${x4(X)}"`)}return Z.join("")}function w8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),Y=N?Z.slice(1).trim():Z,X=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[Q=""]=X.split(/\s+/,1),q=Q.toLowerCase();if(!q||!l5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let L=X.slice(Q.length).trim(),V=j7(q,L);return`<${q}${V}>`})}function P8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function x8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let Y=Z(N.nodeValue);if(Y!==N.nodeValue)N.nodeValue=Y}return $.body.innerHTML}function Z7(_){if(!window.katex)return _;let $=(z)=>k8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let X=[],Q=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let L=X.length;return X.push(q),`@@CODE_BLOCK_${L}@@`});return Q=Q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let L=X.length;return X.push(q),`@@CODE_INLINE_${L}@@`}),{html:Q,blocks:X}},Z=(z,X)=>{if(!X.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(Q,q)=>{let L=Number(q);return X[L]??""})},N=j(_),Y=N.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,X,Q)=>{try{let q=katex.renderToString($(Q.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${x4(q.message)}">${z}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,X,Q)=>{if(/\s$/.test(Q))return z;try{let q=katex.renderToString($(Q),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${x4(q.message)}">$${Q}$</span>`}}),Z(Y,N.blocks)}function N7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let Y of Z){let z=Y.nodeValue;if(!z)continue;if(k1.lastIndex=0,!k1.test(z))continue;k1.lastIndex=0;let X=Y.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let Q=z.split(k1);if(Q.length<=1)continue;let q=$.createDocumentFragment();Q.forEach((L,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,q.appendChild(H)}else q.appendChild($.createTextNode(L))}),Y.parentNode?.replaceChild(q,Y)}return $.body.innerHTML}function Y7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let Y of j){if(!N&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&Y.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function e0(_,$,j={}){if(!_)return"";let Z=Y7(_),{text:N,blocks:Y}=r5(Z),z=A1(N,2),Q=A8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=w8(Q),L=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return L=P8(L),L=x8(L),L=Z7(L),L=N7(L),L=_7(L,Y),L=E8(L,j),L}function w1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=A1($,2),N=A8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=w8(N),z=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return z=P8(z),z=x8(z),z=E8(z),z}function z7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,Y)=>{let z=N.trim().split(/\s+/).map((Q)=>{let[q,L]=Q.split(",").map(Number);return{x:q,y:L}});if(z.length<3)return`<polyline${Z}points="${N}"${Y}/>`;let X=[`M ${z[0].x},${z[0].y}`];for(let Q=1;Q<z.length-1;Q++){let q=z[Q-1],L=z[Q],V=z[Q+1],H=L.x-q.x,A=L.y-q.y,T=V.x-L.x,m=V.y-L.y,p=Math.sqrt(H*H+A*A),x=Math.sqrt(T*T+m*m),b=Math.min($,p/2,x/2);if(b<0.5){X.push(`L ${L.x},${L.y}`);continue}let c=L.x-H/p*b,y=L.y-A/p*b,R=L.x+T/x*b,o=L.y+m/x*b,n=H*m-A*T>0?1:0;X.push(`L ${c},${y}`),X.push(`A ${b},${b} 0 0 ${n} ${R},${o}`)}return X.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${X.join(" ")}"${Y}/>`})}async function R$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=y8()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of Y)try{let X=z.dataset.mermaid,Q=e5(X||""),q=A1(Q,2),L=await $(q,{...N,transparent:!0});L=z7(L),z.innerHTML=L,z.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let Q=document.createElement("pre");Q.className="mermaid-error",Q.textContent=`Diagram error: ${X.message}`,z.innerHTML="",z.appendChild(Q),z.removeAttribute("data-mermaid")}}function I8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function M8(_){return String(_||"").trim()||"web:default"}function b8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function C8(_){if(!_)return!1;return _.status!=="running"}function T8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function f8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),Y=k(null),z=_?.thinking?w1(_.thinking):"",X=_?.answer?e0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&z)R$(N.current).catch(()=>{})},[z]),v(()=>{if(Y.current&&X)R$(Y.current).catch(()=>{})},[X]),!_)return null;let Q=_.status==="running",q=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),V=b8(_),H=C8(_),A=!Q&&q,T=Q?"Thinking…":_.status==="error"?"Error":"Done";return B`
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
            ${L&&B`
                <details class="btw-block btw-thinking" open=${Q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
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
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!A}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function G7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let N=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return N?{kind:j,html:N}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function K7(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function x2(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function z0(_){return typeof _==="string"&&_.trim()?_.trim():null}function I4(_,$){if(!_||_.type!=="generated_widget")return null;let j=G7(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,source:"timeline",status:"final"}}function S8(_){if(!_||typeof _!=="object")return null;let $=K7(_),j=z0(_?.widget_id)||z0(_?.widgetId)||z0(_?.tool_call_id)||z0(_?.toolCallId),Z=z0(_?.tool_call_id)||z0(_?.toolCallId),N=z0(_?.turn_id)||z0(_?.turnId),Y=z0(_?.title)||z0(_?.name)||"Generated widget",z=z0(_?.subtitle)||"",X=z0(_?.description)||z,Q=z0(_?.status),q=Q==="loading"||Q==="streaming"||Q==="final"||Q==="error"?Q:"streaming";return{title:Y,subtitle:z,description:X,originPostId:x2(_?.origin_post_id)??x2(_?.originPostId),originChatJid:z0(_?.origin_chat_jid)||z0(_?.originChatJid)||z0(_?.chat_jid)||null,widgetId:j,artifact:$,source:"live",status:q,turnId:N,toolCallId:Z,width:x2(_?.width),height:x2(_?.height),error:z0(_?.error)}}function R8(_){return I4(_,null)!==null}function K2(_){let $=z0(_?.toolCallId)||z0(_?.tool_call_id);if($)return $;let j=z0(_?.widgetId)||z0(_?.widget_id);if(j)return j;let Z=x2(_?.originPostId)??x2(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function v8(_){let $=z0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return z0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function u8(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",N=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=j==="svg"?N:Z;if(!z)return"";let X=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'","script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),Q=j==="svg"?`<div class="widget-svg-shell">${z}</div>`:z;return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${X}" />
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
</head>
<body>${Q}</body>
</html>`}function m8({widget:_,onClose:$}){v(()=>{if(!_)return;let A=(T)=>{if(T.key==="Escape")$?.()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$]);let j=f_(()=>u8(_),[_]);if(!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",z=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",Q=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",q=X==="live"?`Live widget • ${Q.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",V=!j,H=v8(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${Y}
                onClick=${(A)=>A.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${q} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${Y}</div>
                        ${(z||L)&&B`
                            <div class="floating-widget-subtitle">${z||L}</div>
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
                    ${V?B`<div class="floating-widget-empty">${H}</div>`:B`
                            <iframe
                                class="floating-widget-frame"
                                title=${Y}
                                sandbox="allow-downloads"
                                referrerpolicy="no-referrer"
                                srcdoc=${j}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var g8="PiClaw";function M4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%Y.length,X=Y[z],Q=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",L=q?q:null,V=j||Q==="PiClaw".toLowerCase()||Q==="pi";return{letter:N,color:X,image:L||(V?"/static/icon-192.png":null)}}function p8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function c8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function h8(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,z=Y?.dataset?.colorTheme||"",X=Y?.dataset?.tint||"",Q=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(Q&&(X||z&&z!=="default"))return Q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function W7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function s2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function i8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return s2(_)?"Compacting context":"Working..."}function X7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function l8(_,$=Date.now()){let j=W7(_);if(j===null)return null;return X7(Math.max(0,$-j))}function n8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:Y,turnId:z,steerQueued:X,onPanelToggle:Q}){let V=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let x_=__,r_=x_?x_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:x_,totalLines:r_,fullText:x_}}let O_=__.text||"",j_=__.fullText||__.full_text||O_,F_=Number.isFinite(__.totalLines)?__.totalLines:j_?j_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O_,totalLines:F_,fullText:j_}},H=160,A=(__)=>String(__||"").replace(/<\/?internal>/gi,""),T=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},m=(__,O_,j_)=>{let F_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!F_)return{text:"",omitted:0,totalLines:Number.isFinite(j_)?j_:0,visibleLines:0};let x_=F_.split(`
`),r_=x_.length>O_?x_.slice(0,O_).join(`
`):F_,m_=Number.isFinite(j_)?j_:x_.reduce((p_,k_)=>p_+T(k_),0),d_=r_?r_.split(`
`).reduce((p_,k_)=>p_+T(k_),0):0,g_=Math.max(m_-d_,0);return{text:r_,omitted:g_,totalLines:m_,visibleLines:d_}},p=V(j),x=V(Z),b=V($),c=Boolean(p.text)||p.totalLines>0,y=Boolean(x.text)||x.totalLines>0,R=Boolean(b.fullText?.trim()||b.text?.trim());if(!_&&!R&&!c&&!y&&!N&&!Y)return null;let[o,a]=f(new Set),[n,$_]=f(()=>Date.now()),i=(__)=>a((O_)=>{let j_=new Set(O_),F_=!j_.has(__);if(F_)j_.add(__);else j_.delete(__);if(typeof Q==="function")Q(__,F_);return j_});v(()=>{a(new Set)},[z]);let W_=s2(_);v(()=>{if(!W_)return;$_(Date.now());let __=setInterval(()=>$_(Date.now()),1000);return()=>clearInterval(__)},[W_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||z,u_=h8(n_),l=X?"turn-dot turn-dot-queued":"turn-dot",Z_=(__)=>__,t=Boolean(_?.last_activity||_?.lastActivity),X_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":u_,z_=Y?.kind||"info",q_=X_(z_),L_=X_(_?.kind||(W_?"warning":"info")),N_="",R_=_?.title,P_=_?.status;if(_?.type==="plan")N_=R_?`Planning: ${R_}`:"Planning...";else if(_?.type==="tool_call")N_=R_?`Running: ${R_}`:"Running tool...";else if(_?.type==="tool_status")N_=R_?`${R_}: ${P_||"Working..."}`:P_||"Working...";else if(_?.type==="error")N_=R_||"Agent error";else N_=R_||P_||"Working...";if(t)N_="Last activity just now";let J_=({panelTitle:__,text:O_,fullText:j_,totalLines:F_,maxLines:x_,titleClass:r_,panelKey:m_})=>{let d_=o.has(m_),g_=j_||O_||"",p_=m_==="thought"||m_==="draft"?A(g_):g_,k_=typeof x_==="number",E_=d_&&k_,v_=k_?m(p_,x_,F_):{text:p_||"",omitted:0,totalLines:Number.isFinite(F_)?F_:0};if(!p_&&!(Number.isFinite(v_.totalLines)&&v_.totalLines>0))return null;let W0=`agent-thinking-body${k_?" agent-thinking-body-collapsible":""}`,P0=k_?`--agent-thinking-collapsed-lines: ${x_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${d_?"true":"false"}
                data-collapsible=${k_?"true":"false"}
                style=${u_?`--turn-color: ${u_};`:""}
            >
                <div class="agent-thinking-title ${r_||""}">
                    ${u_&&B`<span class=${l} aria-hidden="true"></span>`}
                    ${__}
                    ${E_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>i(m_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${W0}
                    style=${P0}
                    dangerouslySetInnerHTML=${{__html:w1(p_)}}
                />
                ${!d_&&v_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(m_)}>
                        ▸ ${v_.omitted} more lines
                    </button>
                `}
                ${d_&&v_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(m_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=N?.tool_call?.title,G0=y_?`Awaiting approval: ${y_}`:"Awaiting approval",K0=W_?l8(_,n):null,K_=(__,O_,j_=null)=>{let F_=i8(__);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O_?`--turn-color: ${O_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O_&&B`<span class=${l} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${F_}</span>
                    ${j_&&B`<span class="agent-status-elapsed">${j_}</span>`}
                </div>
                ${__.detail&&B`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${Y&&K_(Y,q_)}
            ${_?.type==="intent"&&K_(_,L_,K0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${u_?`--turn-color: ${u_};`:""}>
                    <span class=${l} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${G0}</span>
                </div>
            `}
            ${c&&J_({panelTitle:Z_("Planning"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,panelKey:"plan"})}
            ${y&&J_({panelTitle:Z_("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${R&&J_({panelTitle:Z_("Draft"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${t?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${u_?`--turn-color: ${u_};`:""}>
                    ${u_&&B`<span class=${l} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!t&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${N_}</span>
                </div>
            `}
        </div>
    `}function d8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:Y}=_,z=Z?.title||"Agent Request",X=Z?.kind||"other",Q=Z?.rawInput||{},q=Q.command||Q.commands&&Q.commands[0]||null,L=Q.diff||null,V=Q.fileName||Q.path||null,H=Z?.description||Q.description||Q.explanation||null,T=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),m=Array.from(new Set([V,...T].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let p=async(c)=>{try{await B1(j,c,Y||null),$()}catch(y){console.error("Failed to respond to agent request:",y)}},x=async()=>{try{await X4(z,`Auto-approved: ${z}`),await B1(j,"approved",Y||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},b=N&&N.length>0;return B`
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
                ${(H||q||L||m.length>0)&&B`
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
                        ${L&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${b?N.map((c)=>B`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>p(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>p("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>p("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function o8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,Y=86400000;if(Z<Y){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*Y){let Q=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${X}`}function r2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function V$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function W2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var q7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),V7=new Set(["text/markdown"]),Q7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),L7=new Set(["application/vnd.jgraph.mxfile"]);function a2(_){return typeof _==="string"?_.trim().toLowerCase():""}function B7(_){let $=a2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function U7(_){let $=a2(_);return!!$&&$.endsWith(".pdf")}function O7(_){let $=a2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function t2(_,$){let j=a2(_);if(B7($)||L7.has(j))return"drawio";if(U7($)||j==="application/pdf")return"pdf";if(O7($)||Q7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(q7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function s8(_){let $=a2(_);return V7.has($)}function r8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function F7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function H7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),Y=Number(j[3]);if(![Z,N,Y].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:Y}}function a8(_){return F7(_)||H7(_)}function P1(_){let $=(Y)=>{let z=Y/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function D7(_,$){let j=Math.max(P1(_),P1($)),Z=Math.min(P1(_),P1($));return(j+0.05)/(Z+0.05)}function J7(_,$,j="#ffffff"){let Z=a8(_);if(!Z)return j;let N=j,Y=-1;for(let z of $){let X=a8(z);if(!X)continue;let Q=D7(Z,X);if(Q>Y)N=z,Y=Q}return N}function b4(){let _=getComputedStyle(document.documentElement),$=(T,m)=>{for(let p of T){let x=_.getPropertyValue(p).trim();if(x)return x}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),Q=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),A=J7(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:Y,bgEmphasis:z,accent:X,good:Q,warning:q,attention:L,border:V,fontFamily:H,buttonTextColor:A}}function t8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:Y,warning:z,attention:X,border:Q,fontFamily:q}=b4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:Y,subtle:Y},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:Q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var y7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),e8=!1,x1=null,_6=!1;function C4(_){_.querySelector(".adaptive-card-notice")?.remove()}function E7(_,$,j="error"){C4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function k7(_,$=(j)=>e0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function A7(_=($)=>e0($,null)){return($,j)=>{try{let Z=k7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function w7(_){if(_6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=A7(),_6=!0}async function P7(){if(e8)return;if(x1)return x1;return x1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{e8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),x1}function x7(){return globalThis.AdaptiveCards}function I7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function M7(_){return y7.has(_)}function f4(_){if(!Array.isArray(_))return[];return _.filter(I7)}function b7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function T4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>T4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${T4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function C7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return T4($);return typeof $==="string"?$:String($)}function T7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=C7(z.type,j[z.id],z);for(let[X,Q]of Object.entries(z))if(Array.isArray(Q)||Q&&typeof Q==="object")z[X]=Z(Q);return z};return Z(_)}function f7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function S7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function R7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=S7(_.completed_at||j?.submitted_at),Y=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function $6(_,$,j){if(!M7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await P7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=x7();w7(Z);let N=new Z.AdaptiveCard,Y=b4();N.hostConfig=new Z.HostConfig(t8());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:T7($.payload,z);N.parse(X),N.onExecuteAction=(L)=>{let V=b7(L);if(j?.onAction)C4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let A=H instanceof Error?H.message:String(H||"Action failed.");E7(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let Q=N.render();if(!Q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let q=R7($);if(q){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,L.appendChild(V),q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=q.detail,L.appendChild(H)}_.appendChild(L)}if(C4(_),_.appendChild(Q),q)f7(Q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function e2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>e2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${e2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function j6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:e2(j)})).filter(($)=>$.value)}function v7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function S4(_){if(!Array.isArray(_))return[];return _.filter(v7)}function Z6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=e2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=j6(j).map(({key:Y,value:z})=>`${Y}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function N6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=j6(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:z})=>`${Y}: ${z}`).join(", "):e2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function u7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?V$($):null},{label:"Added",value:_?.created_at?W2(_.created_at):null}].filter((Z)=>Z.value)}function m7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let Y=q$(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function Y6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=f_(()=>t2($?.content_type,Z),[$?.content_type,Z]),Y=r8(N),z=f_(()=>s8($?.content_type),[$?.content_type]),[X,Q]=f(N==="text"),[q,L]=f(""),[V,H]=f(null),A=k(null),T=f_(()=>u7($),[$]),m=f_(()=>m7(_,Z,N),[_,Z,N]),p=f_(()=>{if(!z||!q)return"";return e0(q)},[z,q]);return v(()=>{let x=(b)=>{if(b.key==="Escape")j()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[j]),v(()=>{if(!A.current||!p)return;R$(A.current);return},[p]),v(()=>{let x=!1;async function b(){if(N!=="text"){Q(!1),H(null);return}Q(!0),H(null);try{let c=await L4(_);if(!x)L(c)}catch{if(!x)H("Failed to load text preview.")}finally{if(!x)Q(!1)}}return b(),()=>{x=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(x)=>{x.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${Y}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&B`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(x)=>x.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${q$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(x)=>x.stopPropagation()}
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
                        <img class="attachment-preview-image" src=${q$(_)} alt=${Z} />
                    `}
                    ${!X&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&m&&B`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!X&&!V&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!V&&N==="text"&&z&&B`
                        <div
                            ref=${A}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:p}}
                        />
                    `}
                    ${!X&&!V&&N==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!V&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${T.map((x)=>B`
                        <div class="attachment-preview-meta-item" key=${x.label}>
                            <span class="attachment-preview-meta-label">${x.label}</span>
                            <span class="attachment-preview-meta-value">${x.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function z6({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function g7({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(v(()=>{E2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",Y=j.metadata?.size,z=Y?V$(Y):"",Q=t2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${q$(_)} download=${N} class="file-attachment-main">
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
                ${Q}
            </button>
        </div>
    `}function p7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);v(()=>{if(!Number.isFinite(j))return;E2(j).then(N).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?q$(j):null,Q=t2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${z?B`
                    <a href=${z} download=${Y} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${H$}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${H$}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${Q}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function I1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?W2(Z):null;return B`
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
    `}function c7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?V$(_.size):"",N=_.mime_type||"",Y=l7(N),z=G2(_.uri);return B`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
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
    `}function h7({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",Y=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let Q=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),q=URL.createObjectURL(Q),L=document.createElement("a");L.href=q,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function i7({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=I4(_,$),N=R8(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,z=Z?.title||_.title||_.name||"Generated widget",X=Z?.description||_.description||_.subtitle||"",Q=_.open_label||"Open widget",q=(L)=>{if(L.preventDefault(),L.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(L)=>L.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${z}</div>
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
                    ${Q}
                </button>
                <span class="generated-widget-launch-note">
                    ${N?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function l7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function n7({preview:_}){let $=G2(_.url),j=G2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
    `}function d7(_,$){return typeof _==="string"?_:""}var o7=1800,s7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,r7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,a7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function t7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function e7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(Y,z)=>{let X=z||"idle";if(Y.dataset.copyState=X,X==="success")Y.innerHTML=r7,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(X==="error")Y.innerHTML=a7,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=s7,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let z=document.createElement("div");z.className="post-code-block",Y.parentNode?.insertBefore(z,Y),z.appendChild(Y);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),z.appendChild(X);let Q=async(q)=>{q.preventDefault(),q.stopPropagation();let V=Y.querySelector("code")?.textContent||"",H=await t7(V);N(X,H?"success":"error");let A=j.get(X);if(A)clearTimeout(A);let T=setTimeout(()=>{N(X,"idle"),j.delete(X)},o7);j.set(X,T)};X.addEventListener("click",Q),Z.push(()=>{X.removeEventListener("click",Q);let q=j.get(X);if(q)clearTimeout(q);if(z.parentNode)z.parentNode.insertBefore(Y,z),z.remove()})}),()=>{Z.forEach((Y)=>Y())}}function _j(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),X=j.slice(Y),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,fileRefs:N}}function $j(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),X=j.slice(Y),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,messageRefs:N}}function jj(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let L=j[q].trim();if((L==="Images:"||L==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],Y=Z+1;for(;Y<j.length;Y+=1){let q=j[Y];if(/^\s*-\s+/.test(q)){let L=q.replace(/^\s*-\s+/,"").trim(),V=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],A=(V[2]||"").trim()||H;N.push({id:H,label:A,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),X=j.slice(Y),Q=[...z,...X].join(`
`);return Q=Q.replace(/\n{3,}/g,`

`).trim(),{content:Q,attachments:N}}function Zj(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Nj(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Zj).sort((L,V)=>V.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),X=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),Q=[],q;while(q=X.nextNode())Q.push(q);for(let L of Q){let V=L.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let A=V.split(N).filter((m)=>m!=="");if(A.length===0)continue;let T=z.createDocumentFragment();for(let m of A)if(Y.test(m)){let p=z.createElement("mark");p.className="search-highlight-term",p.textContent=m,T.appendChild(p)}else T.appendChild(z.createTextNode(m));L.parentNode.replaceChild(T,L)}return z.body.innerHTML}function G6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:Y,agentAvatarUrl:z,userName:X,userAvatarUrl:Q,userAvatarBackground:q,onDelete:L,isThreadReply:V,isThreadPrev:H,isThreadNext:A,isRemoving:T,highlightQuery:m,onFileRef:p,onOpenWidget:x}){let[b,c]=f(null),y=k(null),R=_.data,o=R.type==="agent_response",a=X||"You",n=o?Y||g8:a,$_=o?M4(Y,z,!0):M4(a,Q),i=typeof q==="string"?q.trim().toLowerCase():"",W_=!o&&$_.image&&(i==="clear"||i==="transparent"),n_=o&&Boolean($_.image),u_=`background-color: ${W_||n_?"transparent":$_.color}`,l=R.content_meta,Z_=Boolean(l?.truncated),t=Boolean(l?.preview),X_=Z_&&!t,z_=Z_?{originalLength:Number.isFinite(l?.original_length)?l.original_length:R.content?R.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,q_=R.content_blocks||[],L_=R.media_ids||[],N_=d7(R.content,R.link_previews),{content:R_,fileRefs:P_}=_j(N_),{content:J_,messageRefs:y_}=$j(R_),{content:G0,attachments:K0}=jj(J_);N_=G0;let K_=f4(q_),__=S4(q_),O_=K_.length===1&&typeof K_[0]?.fallback_text==="string"?K_[0].fallback_text.trim():"",j_=__.length===1?Z6(__[0]).trim():"",F_=Boolean(O_)&&N_?.trim()===O_||Boolean(j_)&&N_?.trim()===j_,x_=Boolean(N_)&&!X_&&!F_,r_=typeof m==="string"?m.trim():"",m_=f_(()=>{if(!N_||F_)return"";let C=e0(N_,j);return r_?Nj(C,r_):C},[N_,F_,r_]),d_=(C,r)=>{C.stopPropagation(),c(q$(r))},[g_,p_]=f(null),k_=(C)=>{p_(C)},E_=(C)=>{C.stopPropagation(),L?.(_)},v_=(C,r)=>{let B_=new Set;if(!C||r.length===0)return{content:C,usedIds:B_};return{content:C.replace(/attachment:([^\s)"']+)/g,(o_,F0,C_,S0)=>{let _$=F0.replace(/^\/+/,""),b0=r.find((H0)=>H0.name&&H0.name.toLowerCase()===_$.toLowerCase()&&!B_.has(H0.id))||r.find((H0)=>!B_.has(H0.id));if(!b0)return o_;if(B_.add(b0.id),S0.slice(Math.max(0,C_-2),C_)==="](")return`/media/${b0.id}`;return b0.name||"attachment"}),usedIds:B_}},W0=[],P0=[],I_=[],y0=[],$0=[],M_=[],j0=[],a_=0;if(q_.length>0)q_.forEach((C)=>{if(C?.type==="text"&&C.annotations)j0.push(C.annotations);if(C?.type==="generated_widget")M_.push(C);else if(C?.type==="resource_link")y0.push(C);else if(C?.type==="resource")$0.push(C);else if(C?.type==="file"){let r=L_[a_++];if(r)P0.push(r),I_.push({id:r,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let r=L_[a_++];if(r){let B_=typeof C?.mime_type==="string"?C.mime_type:void 0;W0.push({id:r,annotations:C?.annotations,mimeType:B_}),I_.push({id:r,name:C?.name||C?.filename||C?.title})}}});else if(L_.length>0){let C=K0.length>0;L_.forEach((r,B_)=>{let w_=K0[B_]||null;if(I_.push({id:r,name:w_?.label||null}),C)P0.push(r);else W0.push({id:r,annotations:null})})}if(K0.length>0)K0.forEach((C)=>{if(!C?.id)return;let r=I_.find((B_)=>String(B_.id)===String(C.id));if(r&&!r.name)r.name=C.label});let{content:_0,usedIds:Z0}=v_(N_,I_);N_=_0;let b_=W0.filter(({id:C})=>!Z0.has(C)),O0=P0.filter((C)=>!Z0.has(C)),T0=K0.length>0?K0.map((C,r)=>({id:C.id||`attachment-${r+1}`,label:C.label||`attachment-${r+1}`})):I_.map((C,r)=>({id:C.id,label:C.name||`attachment-${r+1}`})),c_=f_(()=>f4(q_),[q_]),t_=f_(()=>S4(q_),[q_]),f0=f_(()=>{return c_.map((C)=>`${C.card_id}:${C.state}`).join("|")},[c_]);v(()=>{if(!y.current)return;return R$(y.current),e7(y.current)},[m_]);let A_=k(null);return v(()=>{if(!A_.current||c_.length===0)return;let C=A_.current;C.innerHTML="";for(let r of c_){let B_=document.createElement("div");C.appendChild(B_),$6(B_,r,{onAction:async(w_)=>{if(w_.type==="Action.OpenUrl"){let o_=G2(w_.url||"");if(!o_)throw Error("Invalid URL");window.open(o_,"_blank","noopener,noreferrer");return}if(w_.type==="Action.Submit"){await W4({post_id:_.id,thread_id:R.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:r.card_id,action:{type:w_.type,title:w_.title||"",data:w_.data}});return}console.warn("[post] unsupported adaptive card action:",w_.type,w_)}}).catch((w_)=>{console.error("[post] adaptive card render error:",w_),B_.textContent=r.fallback_text||"Card failed to render."})}},[f0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${A?"thread-next":""} ${T?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${$_.image?"has-image":""}" style=${u_}>
                ${$_.image?B`<img src=${$_.image} alt=${n} />`:$_.letter}
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
                    <span class="post-author">${n}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${o8(_.timestamp)}</a>
                </div>
                ${X_&&z_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${r2(z_.originalLength)} chars
                            ${z_.maxLength?B` • Display limit: ${r2(z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&z_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${r2(z_.maxLength)} of ${r2(z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P_.length>0||y_.length>0||T0.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let r=(B_)=>{if(B_.preventDefault(),B_.stopPropagation(),N)N(C,_.chat_jid||null);else{let w_=document.getElementById("post-"+C);if(w_)w_.scrollIntoView({behavior:"smooth",block:"center"}),w_.classList.add("post-highlight"),setTimeout(()=>w_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${r}>
                                    <${H$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${P_.map((C)=>{let r=C.split("/").pop()||C;return B`
                                <${H$}
                                    prefix="post"
                                    label=${r}
                                    title=${C}
                                    onClick=${()=>p?.(C)}
                                />
                            `})}
                        ${T0.map((C)=>B`
                            <${p7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${k_}
                            />
                        `)}
                    </div>
                `}
                ${x_&&B`
                    <div 
                        ref=${y}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let r=C.target.dataset.hashtag;if(r)j?.(r)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),c(C.target.src)}}
                    />
                `}
                ${c_.length>0&&B`
                    <div ref=${A_} class="post-adaptive-cards" />
                `}
                ${t_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${t_.map((C,r)=>{let B_=N6(C),w_=`${C.card_id}-${r}`;return B`
                                <div key=${w_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B_.title}</span>
                                        </div>
                                    </div>
                                    ${B_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${B_.fields.map((o_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${o_.key}: ${o_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${o_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${o_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${W2(B_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${M_.length>0&&B`
                    <div class="generated-widget-launches">
                        ${M_.map((C,r)=>B`
                            <${i7}
                                key=${C.widget_id||C.id||`${_.id}-widget-${r}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${x}
                            />
                        `)}
                    </div>
                `}
                ${j0.length>0&&B`
                    ${j0.map((C,r)=>B`
                        <${I1} key=${r} annotations=${C} />
                    `)}
                `}
                ${b_.length>0&&B`
                    <div class="media-preview">
                        ${b_.map(({id:C,mimeType:r})=>{let w_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?q$(C):Q4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${w_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(o_)=>d_(o_,C)}
                                />
                            `})}
                    </div>
                `}
                ${b_.length>0&&B`
                    ${b_.map(({annotations:C},r)=>B`
                        ${C&&B`<${I1} key=${r} annotations=${C} />`}
                    `)}
                `}
                ${O0.length>0&&B`
                    <div class="file-attachments">
                        ${O0.map((C)=>B`
                            <${g7} key=${C} mediaId=${C} onPreview=${k_} />
                        `)}
                    </div>
                `}
                ${y0.length>0&&B`
                    <div class="resource-links">
                        ${y0.map((C,r)=>B`
                            <div key=${r}>
                                <${c7} block=${C} />
                                <${I1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${$0.length>0&&B`
                    <div class="resource-embeds">
                        ${$0.map((C,r)=>B`
                            <div key=${r}>
                                <${h7} block=${C} />
                                <${I1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${R.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${R.link_previews.map((C,r)=>B`
                            <${n7} key=${r} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${b&&B`<${z6} src=${b} onClose=${()=>c(null)} />`}
        ${g_&&B`
            <${Y6}
                mediaId=${g_.mediaId}
                info=${g_.info}
                onClose=${()=>p_(null)}
            />
        `}
    `}function K6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:Y,onScrollToMessage:z,onFileRef:X,onOpenWidget:Q,emptyMessage:q,timelineRef:L,agents:V,user:H,onDeletePost:A,reverse:T=!0,removingPostIds:m,searchQuery:p}){let[x,b]=f(!1),c=k(null),y=typeof IntersectionObserver<"u",R=I(async()=>{if(!j||!$||x)return;b(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{b(!1)}},[$,x,j]),o=I((l)=>{let{scrollTop:Z_,scrollHeight:t,clientHeight:X_}=l.target,z_=T?t-X_-Z_:Z_,q_=Math.max(300,X_);if(z_<q_)R()},[T,R]);v(()=>{if(!y)return;let l=c.current,Z_=L?.current;if(!l||!Z_)return;let t=300,X_=new IntersectionObserver((z_)=>{for(let q_ of z_){if(!q_.isIntersecting)continue;R()}},{root:Z_,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return X_.observe(l),()=>X_.disconnect()},[y,$,j,L,R]);let a=k(R);if(a.current=R,v(()=>{if(y)return;if(!L?.current)return;let{scrollTop:l,scrollHeight:Z_,clientHeight:t}=L.current,X_=T?Z_-t-l:l,z_=Math.max(300,t);if(X_<z_)a.current?.()},[y,_,$,T,L]),v(()=>{if(!L?.current)return;if(!$||x)return;let{scrollTop:l,scrollHeight:Z_,clientHeight:t}=L.current,X_=T?Z_-t-l:l,z_=Math.max(300,t);if(Z_<=t+1||X_<z_)a.current?.()},[_,$,x,T,L]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${L}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let n=_.slice().sort((l,Z_)=>l.id-Z_.id),$_=(l)=>{let Z_=l?.data?.thread_id;if(Z_===null||Z_===void 0||Z_==="")return null;let t=Number(Z_);return Number.isFinite(t)?t:null},i=new Map;for(let l=0;l<n.length;l+=1){let Z_=n[l],t=Number(Z_?.id),X_=$_(Z_);if(X_!==null){let z_=i.get(X_)||{anchorIndex:-1,replyIndexes:[]};z_.replyIndexes.push(l),i.set(X_,z_)}else if(Number.isFinite(t)){let z_=i.get(t)||{anchorIndex:-1,replyIndexes:[]};z_.anchorIndex=l,i.set(t,z_)}}let W_=new Map;for(let[l,Z_]of i.entries()){let t=new Set;if(Z_.anchorIndex>=0)t.add(Z_.anchorIndex);for(let X_ of Z_.replyIndexes)t.add(X_);W_.set(l,Array.from(t).sort((X_,z_)=>X_-z_))}let n_=n.map((l,Z_)=>{let t=$_(l);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let X_=W_.get(t);if(!X_||X_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let z_=X_.indexOf(Z_);if(z_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:z_>0,hasThreadNext:z_<X_.length-1}}),u_=B`<div class="timeline-sentinel" ref=${c}></div>`;return B`
        <div class="timeline ${T?"reverse":"normal"}" ref=${L} onScroll=${o}>
            <div class="timeline-content">
                ${T?u_:null}
                ${n.map((l,Z_)=>{let t=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),X_=m?.has?.(l.id),z_=n_[Z_]||{};return B`
                    <${G6}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${t}
                        isThreadPrev=${z_.hasThreadPrev}
                        isThreadNext=${z_.hasThreadNext}
                        isRemoving=${X_}
                        highlightQuery=${p}
                        agentName=${p8(l.data?.agent_id,V||{})}
                        agentAvatarUrl=${c8(l.data?.agent_id,V||{})}
                        userName=${H?.name||H?.user_name}
                        userAvatarUrl=${H?.avatar_url||H?.avatarUrl||H?.avatar}
                        userAvatarBackground=${H?.avatar_background||H?.avatarBackground}
                        onClick=${()=>Z?.(l)}
                        onHashtagClick=${N}
                        onMessageRef=${Y}
                        onScrollToMessage=${z}
                        onFileRef=${X}
                        onOpenWidget=${Q}
                        onDelete=${A}
                    />
                `})}
                ${T?null:u_}
            </div>
        </div>
    `}class W6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let Y=N===!0?0:typeof N==="number"?N:0;if(Y>j)j=Y,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var s_=new W6;var M1=null,R4=null;function Yj(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function X6(){if(R4)return Promise.resolve(R4);if(!M1)M1=import(Yj()).then((_)=>{return R4=_,_}).catch((_)=>{throw M1=null,_});return M1}class q6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await X6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var v4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new q6(_,$)}};function u4(){X6().catch(()=>{})}var g4="piclaw://terminal";var zj={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Gj={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},b1=null,m4=null;function Kj(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Wj(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,Y)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!Kj(z))return $(N,Y);if(N instanceof Request)return $(new Request(j,N));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Xj(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!b1)b1=Wj(()=>Promise.resolve($.init?.())).catch((j)=>{throw b1=null,j});return await b1,$}async function qj(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!m4)m4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await m4}async function Vj(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Qj(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Lj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function v$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Bj(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function V6(){let _=Lj(),$=_?Gj:zj,j=v$("--bg-primary",_?"#000000":"#ffffff"),Z=v$("--text-primary",_?"#e7e9ea":"#0f1419"),N=v$("--text-secondary",_?"#71767b":"#536471"),Y=v$("--accent-color","#1d9bf0"),z=v$("--danger-color",_?"#ff7b72":"#cf222e"),X=v$("--success-color",_?"#7ee787":"#1a7f37"),Q=v$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=v$("--border-color",_?"#2f3336":"#eff3f4"),L=v$("--accent-soft-strong",Bj(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:Q,red:z,green:X,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class p4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Xj();if(await qj(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:V6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=V6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Vj();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Qj($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var c4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new p4(_,$)}},h4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new p4(_,$)}};function d$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Uj(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,Y=Z?.[2]||"",z=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,L=[];for(let H of q.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let V=L.join("/");return`${O1(V)}${Y}${z}`}function _1(_){return _?.preview||null}function Oj(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function Fj(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Hj(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${d$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${d$(V$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${d$(W2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${d$(Fj($))}</span>`),Z.push(`<span><strong>extension:</strong> ${d$(Oj(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${d$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function Dj(_){let $=_1(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Hj(_,$);if($.kind==="image"){let Z=$.url||($.path?O1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${d$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=e0($.text||"",null,{rewriteImageSrc:(N)=>Uj(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${d$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class i4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=Dj(this.context)}getContent(){let _=_1(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=_1(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var l4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=_1(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new i4(_,$)}},n4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return _1(_)||_?.path?1:!1},mount(_,$){return new i4(_,$)}};var Jj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),yj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},Ej={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function L6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function Q6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class B6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=L6(j),Y=Ej[N]||"\uD83D\uDCC4",z=yj[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Q6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${Q6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Q=X.querySelector("#ov-open-tab");if(Q)Q.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class U6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=L6(_?.path);if(!$||!Jj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new B6(_,$);return new U6(_,$)}};var kj=/\.(csv|tsv)$/i;function O6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class F6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${O6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${O6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new F6(_,$);return new H6(_,$)}};var Aj=/\.pdf$/i;function wj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class D6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${wj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Aj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new D6(_,$);return new J6(_,$)}};var Pj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function r4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${r4(N)}" alt="${r4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${r4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let z=Y.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Pj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new y6(_,$);return new E6(_,$)}};var xj=/\.(mp4|m4v|mov|webm|ogv)$/i;function Ij(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Ij(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new k6(_,$);return new A6(_,$)}};function Mj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function bj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var e4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function w6(_){let $=String(_||"").trim();return $?$:e4}function Cj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Tj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function fj(_,$="*"){try{let j=(Y)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(z,X,Q,q,L,V){try{if(z&&Q!=null&&j({filename:z,format:X,data:Q,mimeType:q,base64Encoded:Boolean(L),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let Y=N.prototype.exportFile;N.prototype.exportFile=function(z,X,Q,q,L,V){try{if(X&&j({filename:X,data:z,mimeType:Q,base64Encoded:Boolean(q),mode:L,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return Y.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function P6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Tj(j)}`}class x6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${bj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let Y=N.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class I6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Cj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(fj(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=e4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await P6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await P6(_,"image/png");else this.xmlData=w6(await _.text());else if(_.status===404)this.xmlData=e4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?w6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var _3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!Mj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new x6(_,$);return new I6(_,$)}};class M6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new M6;var C1="workspaceExplorerScale",Sj=["compact","default","comfortable"],Rj=new Set(Sj),vj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function b6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return Rj.has(j)?j:$}function $3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function uj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function mj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function j3(_={}){let $=uj(_),j=_.stored?b6(_.stored,$):$;return mj(j,_)}function C6(_){return vj[b6(_)]}var gj=60000,R6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function v6(_,$,j,Z=0,N=[]){if(!j&&R6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)v6(Y,$,j,Z+1,N);return N}function T6(_,$,j){if(!_)return"";let Z=[],N=(Y)=>{if(!j&&R6(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let z of Y.children)N(z)};return N(_),Z.join("|")}function z3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,Y=!j||j.length!==Z.length,z=Z.map((X)=>{let Q=z3(N.get(X.path),X);if(Q!==N.get(X.path))Y=!0;return Q});return Y?{...$,children:z}:_}function N3(_,$,j){if(!_)return _;if(_.path===$)return z3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((Y)=>{let z=N3(Y,$,j);if(z!==Y)Z=!0;return z});return Z?{..._,children:N}:_}var u6=4,Z3=14,pj=8,cj=16;function m6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=m6(Z);return _.__bytes=j,j}function g6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=u6)return Z;let N=Array.isArray(_.children)?_.children:[],Y=[];for(let X of N){let Q=Math.max(0,Number(X?.__bytes??X?.size??0));if(Q<=0)continue;if(X.type==="dir")Y.push({kind:"dir",node:X,size:Q});else Y.push({kind:"file",name:X.name,path:X.path,size:Q})}Y.sort((X,Q)=>Q.size-X.size);let z=Y;if(Y.length>Z3){let X=Y.slice(0,Z3-1),Q=Y.slice(Z3-1),q=Q.reduce((L,V)=>L+V.size,0);X.push({kind:"other",name:`+${Q.length} more`,path:`${Z.path}/[other]`,size:q}),z=X}return Z.children=z.map((X)=>{if(X.kind==="dir")return g6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function f6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${Y}%)`}function T1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function G3(_,$,j,Z,N,Y){let z=Math.PI*2-0.0001,X=Y-N>z?N+z:Y,Q=T1(_,$,Z,N),q=T1(_,$,Z,X),L=T1(_,$,j,X),V=T1(_,$,j,N),H=X-N>Math.PI?1:0;return[`M ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var c6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function h6(_,$,j){let Z=[],N=[],Y=Math.max(0,Number($)||0),z=(X,Q,q,L)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let H=Math.max(0,Number(X.size)||0);if(H<=0)return;let A=q-Q,T=Q;V.forEach((m,p)=>{let x=Math.max(0,Number(m.size)||0);if(x<=0)return;let b=x/H,c=T,y=p===V.length-1?q:T+A*b;if(T=y,y-c<0.003)return;let R=c6[L];if(R){let o=p6(c,L,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:x,color:o,depth:L,startAngle:c,endAngle:y,innerRadius:R[0],outerRadius:R[1],d:G3(120,120,R[0],R[1],c,y)}),L===1)N.push({key:m.path,name:m.name,size:x,pct:Y>0?x/Y*100:0,color:o})}if(L<u6)z(m,c,y,L+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function Y3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=Y3(Z,$);if(N)return N}return null}function i6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=c6[1];if(!N)return{segments:[],legend:[]};let Y=-Math.PI/2,z=Math.PI*3/2,X=p6(Y,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:Y,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:G3(120,120,N[0],N[1],Y,z)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function S6(_,$=!1,j=!1){if(!_)return null;let Z=m6(_),N=g6(_,0),Y=N.size||Z,{segments:z,legend:X}=h6(N,Y,j);if(!z.length&&Y>0){let Q=i6("[files]",N.path,Y,j);z=Q.segments,X=Q.legend}return{root:N,totalSize:Y,segments:z,legend:X,truncated:$,isDarkTheme:j}}function hj({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[Y,z]=f(()=>[_?.root?.path||"."]),[X,Q]=f(!1);v(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;Q(!0);let i=setTimeout(()=>Q(!1),180);return()=>clearTimeout(i)},[Z]);let q=f_(()=>{return Y3(_.root,Z)||_.root},[_?.root,Z]),L=q?.size||_.totalSize||0,{segments:V,legend:H}=f_(()=>{let i=h6(q,L,_.isDarkTheme);if(i.segments.length>0)return i;if(L<=0)return i;let W_=q?.children?.length?"Total":"[files]";return i6(W_,q?.path||_?.root?.path||".",L,_.isDarkTheme)},[q,L,_.isDarkTheme,_?.root?.path]),[A,T]=f(V),m=k(new Map),p=k(0);v(()=>{let i=m.current,W_=new Map(V.map((Z_)=>[Z_.key,Z_])),n_=performance.now(),u_=220,l=(Z_)=>{let t=Math.min(1,(Z_-n_)/220),X_=t*(2-t),z_=V.map((q_)=>{let N_=i.get(q_.key)||{startAngle:q_.startAngle,endAngle:q_.startAngle,innerRadius:q_.innerRadius,outerRadius:q_.innerRadius},R_=(K0,K_)=>K0+(K_-K0)*X_,P_=R_(N_.startAngle,q_.startAngle),J_=R_(N_.endAngle,q_.endAngle),y_=R_(N_.innerRadius,q_.innerRadius),G0=R_(N_.outerRadius,q_.outerRadius);return{...q_,d:G3(120,120,y_,G0,P_,J_)}});if(T(z_),t<1)p.current=requestAnimationFrame(l)};if(p.current)cancelAnimationFrame(p.current);return p.current=requestAnimationFrame(l),m.current=W_,()=>{if(p.current)cancelAnimationFrame(p.current)}},[V]);let x=A.length?A:V,b=L>0?V$(L):"0 B",c=q?.name||"",R=(c&&c!=="."?c:"Total")||"Total",o=b,a=Y.length>1,n=(i)=>{if(!i?.path)return;let W_=Y3(_.root,i.path);if(!W_||!Array.isArray(W_.children)||W_.children.length===0)return;z((n_)=>[...n_,W_.path]),N(W_.path),j(null)},$_=()=>{if(!a)return;z((i)=>{let W_=i.slice(0,-1);return N(W_[W_.length-1]||_?.root?.path||"."),W_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${L}>
                ${x.map((i)=>B`
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
                        <title>${i.label} — ${V$(i.size)}</title>
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${R}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${o}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${V$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function ij({mediaId:_}){let[$,j]=f(null);if(v(()=>{if(!_)return;E2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?V$($.metadata.size):"";return B`
        <a href=${q$(_)} download=${Z} class="file-attachment"
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
    `}function l6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:Y,terminalVisible:z=!1}){let[X,Q]=f(null),[q,L]=f(new Set(["."])),[V,H]=f(null),[A,T]=f(null),[m,p]=f(""),[x,b]=f(null),[c,y]=f(null),[R,o]=f(!0),[a,n]=f(!1),[$_,i]=f(null),[W_,n_]=f(()=>k2("workspaceShowHidden",!1)),[u_,l]=f(!1),[Z_,t]=f(null),[X_,z_]=f(null),[q_,L_]=f(null),[N_,R_]=f(!1),[P_,J_]=f(null),[y_,G0]=f(()=>f6()),[K0,K_]=f(()=>j3({stored:t0(C1),...$3()})),[__,O_]=f(!1),j_=k(q),F_=k(""),x_=k(null),r_=k(0),m_=k(new Set),d_=k(null),g_=k(new Map),p_=k(_),k_=k(Z),E_=k(null),v_=k(null),W0=k(null),P0=k(null),I_=k(null),y0=k(null),$0=k("."),M_=k(null),j0=k({path:null,dragging:!1,startX:0,startY:0}),a_=k({path:null,dragging:!1,startX:0,startY:0}),_0=k({path:null,timer:0}),Z0=k(!1),b_=k(0),O0=k(new Map),T0=k(null),c_=k(null),t_=k(null),f0=k(null),A_=k(null),C=k(null),r=k(W_),B_=k($),w_=k(j??$),o_=k(0),F0=k(q_),C_=k(u_),S0=k(Z_),_$=k(null),$$=k({x:0,y:0}),b0=k(0),x$=k(null),H0=k(V),h0=k(A),i0=k(null),R0=k(null),j$=k(x);p_.current=_,k_.current=Z,v(()=>{j_.current=q},[q]),v(()=>{r.current=W_},[W_]),v(()=>{B_.current=$},[$]),v(()=>{w_.current=j??$},[j,$]),v(()=>{F0.current=q_},[q_]),v(()=>{if(typeof window>"u")return;let U=()=>{K_(j3({stored:t0(C1),...$3()}))};U();let J=()=>U(),P=()=>U(),G=(S)=>{if(!S||S.key===null||S.key===C1)U()};window.addEventListener("resize",J),window.addEventListener("focus",P),window.addEventListener("storage",G);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),M=(S,s)=>{if(!S)return;if(S.addEventListener)S.addEventListener("change",s);else if(S.addListener)S.addListener(s)},g=(S,s)=>{if(!S)return;if(S.removeEventListener)S.removeEventListener("change",s);else if(S.removeListener)S.removeListener(s)};return M(O,J),M(D,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",P),window.removeEventListener("storage",G),g(O,J),g(D,J)}},[]),v(()=>{let U=(J)=>{let P=J?.detail?.path;if(!P)return;let G=P.split("/"),O=[];for(let D=1;D<G.length;D++)O.push(G.slice(0,D).join("/"));if(O.length)L((D)=>{let M=new Set(D);M.add(".");for(let g of O)M.add(g);return M});H(P),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(P)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",U),()=>window.removeEventListener("workspace-reveal-path",U)},[]),v(()=>{C_.current=u_},[u_]),v(()=>{S0.current=Z_},[Z_]),v(()=>{H0.current=V},[V]),v(()=>{h0.current=A},[A]),v(()=>{j$.current=x},[x]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let U=()=>G0(f6());U();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),P=()=>U();if(J?.addEventListener)J.addEventListener("change",P);else if(J?.addListener)J.addListener(P);let G=typeof MutationObserver<"u"?new MutationObserver(()=>U()):null;if(G?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)G?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",P);else if(J?.removeListener)J.removeListener(P);G?.disconnect()}},[]),v(()=>{if(!A)return;let U=I_.current;if(!U)return;let J=requestAnimationFrame(()=>{try{U.focus(),U.select()}catch{}});return()=>cancelAnimationFrame(J)},[A]),v(()=>{if(!__)return;let U=(P)=>{let G=P?.target;if(!(G instanceof Element))return;if(A_.current?.contains(G))return;if(C.current?.contains(G))return;O_(!1)},J=(P)=>{if(P?.key==="Escape")O_(!1),C.current?.focus?.()};return document.addEventListener("mousedown",U),document.addEventListener("touchstart",U,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("touchstart",U),document.removeEventListener("keydown",J)}},[__]);let V2=async(U)=>{n(!0),b(null),y(null);try{let J=await B4(U,20000);b(J)}catch(J){b({error:J.message||"Failed to load preview"})}finally{n(!1)}};E_.current=V2;let Q2=async()=>{if(!B_.current)return;try{let U=await l2("",1,r.current),J=T6(U.root,j_.current,r.current);if(J===F_.current){o(!1);return}if(F_.current=J,x_.current=U.root,!r_.current)r_.current=requestAnimationFrame(()=>{r_.current=0,Q((P)=>z3(P,x_.current)),o(!1)})}catch(U){i(U.message||"Failed to load workspace"),o(!1)}},E0=async(U)=>{if(!U)return;if(m_.current.has(U))return;m_.current.add(U);try{let J=await l2(U,1,r.current);Q((P)=>N3(P,U,J.root))}catch(J){i(J.message||"Failed to load workspace")}finally{m_.current.delete(U)}};v_.current=E0;let D0=I(()=>{let U=V;if(!U)return".";let J=g_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let P=U.split("/");return P.pop(),P.join("/")||"."},[V]),N0=I((U)=>{let J=U?.closest?.(".workspace-row");if(!J)return null;let P=J.dataset.path,G=J.dataset.type;if(!P)return null;if(G==="dir")return P;if(P.includes("/")){let O=P.split("/");return O.pop(),O.join("/")||"."}return"."},[]),g0=I((U)=>{return N0(U?.target||null)},[N0]),Y0=I((U)=>{F0.current=U,L_(U)},[]),x0=I(()=>{let U=_0.current;if(U?.timer)clearTimeout(U.timer);_0.current={path:null,timer:0}},[]),Z$=I((U)=>{if(!U||U==="."){x0();return}let J=g_.current?.get(U);if(!J||J.type!=="dir"){x0();return}if(j_.current?.has(U)){x0();return}if(_0.current?.path===U)return;x0();let P=setTimeout(()=>{_0.current={path:null,timer:0},v_.current?.(U),L((G)=>{let O=new Set(G);return O.add(U),O})},600);_0.current={path:U,timer:P}},[x0]),I$=I((U,J)=>{if($$.current={x:U,y:J},b0.current)return;b0.current=requestAnimationFrame(()=>{b0.current=0;let P=_$.current;if(!P)return;let G=$$.current;P.style.transform=`translate(${G.x+12}px, ${G.y+12}px)`})},[]),o$=I((U)=>{if(!U)return;let P=(g_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!P)return;z_({path:U,label:P})},[]),u$=I(()=>{if(z_(null),b0.current)cancelAnimationFrame(b0.current),b0.current=0;if(_$.current)_$.current.style.transform="translate(-9999px, -9999px)"},[]),s$=I((U)=>{if(!U)return".";let J=g_.current?.get(U);if(J&&J.type==="dir")return J.path;if(U==="."||!U.includes("/"))return".";let P=U.split("/");return P.pop(),P.join("/")||"."},[]),l0=I(()=>{T(null),p("")},[]),r$=I((U)=>{if(!U)return;let P=(g_.current?.get(U)?.name||U.split("/").pop()||U).trim();if(!P||U===".")return;T(U),p(P)},[]),a$=I(async()=>{let U=h0.current;if(!U)return;let J=(m||"").trim();if(!J){l0();return}let P=g_.current?.get(U),G=(P?.name||U.split("/").pop()||U).trim();if(J===G){l0();return}try{let D=(await F4(U,J))?.path||U,M=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(l0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:U,newPath:D,type:P?.type||"file"}})),P?.type==="dir")L((g)=>{let S=new Set;for(let s of g)if(s===U)S.add(D);else if(s.startsWith(`${U}/`))S.add(`${D}${s.slice(U.length)}`);else S.add(s);return S});if(H(D),P?.type==="dir")b(null),n(!1),y(null);else E_.current?.(D);v_.current?.(M)}catch(O){i(O?.message||"Failed to rename file")}},[l0,m]),N$=I(async(U)=>{let G=U||".";for(let O=0;O<50;O+=1){let M=`untitled${O===0?"":`-${O}`}.md`;try{let S=(await O4(G,M,""))?.path||(G==="."?M:`${G}/${M}`);if(G&&G!==".")L((s)=>new Set([...s,G]));H(S),i(null),v_.current?.(G),E_.current?.(S);return}catch(g){if(g?.status===409||g?.code==="file_exists")continue;i(g?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),L$=I((U)=>{if(U?.stopPropagation?.(),N_)return;let J=s$(H0.current);N$(J)},[N_,s$,N$]);v(()=>{if(typeof window>"u")return;let U=(J)=>{let P=J?.detail?.updates||[];if(!Array.isArray(P)||P.length===0)return;Q((g)=>{let S=g;for(let s of P){if(!s?.root)continue;if(!S||s.path==="."||!s.path)S=s.root;else S=N3(S,s.path,s.root)}if(S)F_.current=T6(S,j_.current,r.current);return o(!1),S});let G=H0.current;if(Boolean(G)&&P.some((g)=>{let S=g?.path||"";if(!S||S===".")return!0;return G===S||G.startsWith(`${S}/`)||S.startsWith(`${G}/`)}))O0.current.clear();if(!G||!j$.current)return;let D=g_.current?.get(G);if(D&&D.type==="dir")return;if(P.some((g)=>{let S=g?.path||"";if(!S||S===".")return!0;return G===S||G.startsWith(`${S}/`)}))E_.current?.(G)};return window.addEventListener("workspace-update",U),()=>window.removeEventListener("workspace-update",U)},[]),d_.current=Q2;let n0=k(()=>{if(typeof window>"u")return;let U=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=w_.current??B_.current,P=document.visibilityState!=="hidden"&&(J||U.matches&&B_.current);n2(P,r.current).catch(()=>{})}).current,q0=k(0),h_=k(()=>{if(q0.current)clearTimeout(q0.current);q0.current=setTimeout(()=>{q0.current=0,n0()},250)}).current;v(()=>{if(B_.current)d_.current?.();h_()},[$,j]),v(()=>{d_.current(),n0();let U=setInterval(()=>d_.current(),gj),J=A2("previewHeight",null),P=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(b_.current=P,W0.current)W0.current.style.setProperty("--preview-height",`${P}px`);let G=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>h_();if(G.addEventListener)G.addEventListener("change",O);else if(G.addListener)G.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(U),r_.current)cancelAnimationFrame(r_.current),r_.current=0;if(G.removeEventListener)G.removeEventListener("change",O);else if(G.removeListener)G.removeListener(O);if(document.removeEventListener("visibilitychange",O),q0.current)clearTimeout(q0.current),q0.current=0;if(M_.current)clearTimeout(M_.current),M_.current=null;n2(!1,r.current).catch(()=>{})}},[]);let B$=f_(()=>v6(X,q,W_),[X,q,W_]),D$=f_(()=>new Map(B$.map((U)=>[U.node.path,U.node])),[B$]),m$=f_(()=>C6(K0),[K0]);g_.current=D$;let H_=(V?g_.current.get(V):null)?.type==="dir";v(()=>{if(!V||!H_){J_(null),T0.current=null,c_.current=null;return}let U=V,J=`${W_?"hidden":"visible"}:${V}`,P=O0.current,G=P.get(J);if(G?.root){P.delete(J),P.set(J,G);let M=S6(G.root,Boolean(G.truncated),y_);if(M)T0.current=M,c_.current=V,J_({loading:!1,error:null,payload:M});return}let O=T0.current,D=c_.current;J_({loading:!0,error:null,payload:D===V?O:null}),l2(V,pj,W_).then((M)=>{if(H0.current!==U)return;let g={root:M?.root,truncated:Boolean(M?.truncated)};P.delete(J),P.set(J,g);while(P.size>cj){let s=P.keys().next().value;if(!s)break;P.delete(s)}let S=S6(g.root,g.truncated,y_);T0.current=S,c_.current=V,J_({loading:!1,error:null,payload:S})}).catch((M)=>{if(H0.current!==U)return;J_({loading:!1,error:M?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,H_,W_,y_]);let Y$=Boolean(x&&x.kind==="text"&&!H_&&(!x.size||x.size<=262144)),J$=Y$?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable",M$=Boolean(V&&V!=="."),d0=Boolean(V&&!H_),b$=Boolean(V&&!H_),o0=V&&H_?F1(V,W_):null,v0=I(()=>O_(!1),[]),V0=I(async(U)=>{v0();try{await U?.()}catch{}},[v0]);v(()=>{let U=t_.current;if(f0.current)f0.current.dispose(),f0.current=null;if(!U)return;if(U.innerHTML="",!V||H_||!x||x.error)return;let J={path:V,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},P=s_.resolve(J)||s_.get("workspace-preview-default");if(!P)return;let G=P.mount(U,J);return f0.current=G,()=>{if(f0.current===G)G.dispose(),f0.current=null;U.innerHTML=""}},[V,H_,x]);let u0=(U)=>{let J=U?.target;if(J instanceof Element)return J;return J?.parentElement||null},s0=(U)=>{return Boolean(U?.closest?.(".workspace-node-icon, .workspace-label-text"))},C0=k((U)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let P=u0(U)?.closest?.("[data-path]");if(!P)return;let G=P.dataset.path;if(P.dataset.type==="dir"||!G)return;if(h0.current===G)l0();k_.current?.(G)}).current,g$=k((U)=>{if(Z0.current){Z0.current=!1;return}let J=u0(U),P=J?.closest?.("[data-path]");if(P0.current?.focus?.(),!P)return;let G=P.dataset.path,O=P.dataset.type,D=Boolean(J?.closest?.(".workspace-caret")),M=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),g=H0.current===G,S=h0.current;if(S){if(S===G)return;l0()}let s=O==="file"&&i0.current===G&&!D&&!M;if(g&&!D&&!M&&G!=="."&&!s){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,r$(G)},350);return}if(O==="dir"){if(i0.current=null,H(G),b(null),y(null),n(!1),!j_.current.has(G))v_.current?.(G);if(g&&!D)return;L((k0)=>{let U_=new Set(k0);if(U_.has(G))U_.delete(G);else U_.add(G);return U_})}else{i0.current=null,H(G);let Q_=g_.current.get(G);if(Q_)p_.current?.(Q_.path,Q_);E_.current?.(G)}}).current,r0=k(()=>{F_.current="",d_.current(),Array.from(j_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>v_.current?.(J))}).current,p0=k(()=>{i0.current=null,H(null),b(null),y(null),n(!1)}).current,p$=k(()=>{n_((U)=>{let J=!U;if(typeof window<"u")i_("workspaceShowHidden",String(J));return r.current=J,n2(!0,J).catch(()=>{}),F_.current="",d_.current?.(),Array.from(j_.current||[]).filter((G)=>G&&G!==".").forEach((G)=>v_.current?.(G)),J})}).current,t$=k((U)=>{if(u0(U)?.closest?.("[data-path]"))return;p0()}).current,C$=I(async(U)=>{if(!U)return;let J=U.split("/").pop()||U;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await D4(U);let G=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(H0.current===U)p0();v_.current?.(G),i(null)}catch(G){b((O)=>({...O||{},error:G.message||"Failed to delete file"}))}},[p0]),J0=I((U)=>{let J=P0.current;if(!J||!U||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(U)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),U$=I((U)=>{let J=B$;if(!J||J.length===0)return;let P=V?J.findIndex((G)=>G.node.path===V):-1;if(U.key==="ArrowDown"){U.preventDefault();let G=Math.min(P+1,J.length-1),O=J[G];if(!O)return;if(H(O.node.path),O.node.type!=="dir")p_.current?.(O.node.path,O.node),E_.current?.(O.node.path);else b(null),n(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowUp"){U.preventDefault();let G=P<=0?0:P-1,O=J[G];if(!O)return;if(H(O.node.path),O.node.type!=="dir")p_.current?.(O.node.path,O.node),E_.current?.(O.node.path);else b(null),n(!1),y(null);J0(O.node.path);return}if(U.key==="ArrowRight"&&P>=0){let G=J[P];if(G?.node?.type==="dir"&&!q.has(G.node.path))U.preventDefault(),v_.current?.(G.node.path),L((O)=>new Set([...O,G.node.path]));return}if(U.key==="ArrowLeft"&&P>=0){let G=J[P];if(G?.node?.type==="dir"&&q.has(G.node.path))U.preventDefault(),L((O)=>{let D=new Set(O);return D.delete(G.node.path),D});return}if(U.key==="Enter"&&P>=0){U.preventDefault();let G=J[P];if(!G)return;let O=G.node.path;if(G.node.type==="dir"){if(!j_.current.has(O))v_.current?.(O);L((M)=>{let g=new Set(M);if(g.has(O))g.delete(O);else g.add(O);return g}),b(null),y(null),n(!1)}else p_.current?.(O,G.node),E_.current?.(O);return}if((U.key==="Delete"||U.key==="Backspace")&&P>=0){let G=J[P];if(!G||G.node.type==="dir")return;U.preventDefault(),C$(G.node.path);return}if(U.key==="Escape")U.preventDefault(),p0()},[p0,C$,q,B$,J0,V]),y$=I((U)=>{let J=u0(U),P=J?.closest?.(".workspace-row");if(!P)return;let G=P.dataset.type,O=P.dataset.path;if(!O||O===".")return;if(h0.current===O)return;let D=U?.touches?.[0];if(!D)return;if(j0.current={path:s0(J)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},G!=="file")return;if(M_.current)clearTimeout(M_.current);M_.current=setTimeout(()=>{if(M_.current=null,j0.current?.dragging)return;C$(O)},600)},[C$]),E$=I(()=>{if(M_.current)clearTimeout(M_.current),M_.current=null;let U=j0.current;if(U?.dragging&&U.path){let J=F0.current||D0(),P=x$.current;if(typeof P==="function")P(U.path,J)}j0.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,l(!1),t(null),Y0(null),x0(),u$()},[D0,u$,Y0,x0]),T$=I((U)=>{let J=j0.current,P=U?.touches?.[0];if(!P||!J?.path){if(M_.current)clearTimeout(M_.current),M_.current=null;return}let G=Math.abs(P.clientX-J.startX),O=Math.abs(P.clientY-J.startY),D=G>8||O>8;if(D&&M_.current)clearTimeout(M_.current),M_.current=null;if(!J.dragging&&D)J.dragging=!0,l(!0),t("move"),o$(J.path);if(J.dragging){U.preventDefault(),I$(P.clientX,P.clientY);let M=document.elementFromPoint(P.clientX,P.clientY),g=N0(M)||D0();if(F0.current!==g)Y0(g);Z$(g)}},[N0,D0,o$,I$,Y0,Z$]),c$=k((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let P=U.clientY,G=b_.current||280,O=U.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=P,M=(S)=>{D=S.clientY;let s=J.clientHeight-80,Q_=Math.min(Math.max(G-(S.clientY-P),80),s);J.style.setProperty("--preview-height",`${Q_}px`),b_.current=Q_},g=()=>{let S=J.clientHeight-80,s=Math.min(Math.max(G-(D-P),80),S);b_.current=s,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("previewHeight",String(Math.round(s))),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",g)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",g)}).current,e$=k((U)=>{U.preventDefault();let J=W0.current;if(!J)return;let P=U.touches[0];if(!P)return;let G=P.clientY,O=b_.current||280,D=U.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let M=(S)=>{let s=S.touches[0];if(!s)return;S.preventDefault();let Q_=J.clientHeight-80,k0=Math.min(Math.max(O-(s.clientY-G),80),Q_);J.style.setProperty("--preview-height",`${k0}px`),b_.current=k0},g=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",i_("previewHeight",String(Math.round(b_.current||O))),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)};document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}).current,c0=async()=>{if(!V)return;try{let U=await U4(V);if(U.media_id)y(U.media_id)}catch(U){b((J)=>({...J||{},error:U.message||"Failed to attach"}))}},m0=async()=>{if(!V||H_)return;await C$(V)},O$=(U)=>{return Array.from(U?.dataTransfer?.types||[]).includes("Files")},_2=I((U)=>{if(!O$(U))return;if(U.preventDefault(),o_.current+=1,!C_.current)l(!0);t("upload");let J=g0(U)||D0();Y0(J),Z$(J)},[D0,g0,Y0,Z$]),z$=I((U)=>{if(!O$(U))return;if(U.preventDefault(),U.dataTransfer)U.dataTransfer.dropEffect="copy";if(!C_.current)l(!0);if(S0.current!=="upload")t("upload");let J=g0(U)||D0();if(F0.current!==J)Y0(J);Z$(J)},[D0,g0,Y0,Z$]),h$=I((U)=>{if(!O$(U))return;if(U.preventDefault(),o_.current=Math.max(0,o_.current-1),o_.current===0)l(!1),t(null),Y0(null),x0()},[Y0,x0]),k$=I(async(U,J=".")=>{let P=Array.from(U||[]);if(P.length===0)return;let G=J&&J!==""?J:".",O=G!=="."?G:"workspace root";R_(!0);try{let D=null;for(let M of P)try{D=await U1(M,G)}catch(g){let S=g?.status,s=g?.code;if(S===409||s==="file_exists"){let Q_=M?.name||"file";if(!window.confirm(`"${Q_}" already exists in ${O}. Overwrite?`))continue;D=await U1(M,G,{overwrite:!0})}else throw g}if(D?.path)i0.current=D.path,H(D.path),E_.current?.(D.path);v_.current?.(G)}catch(D){i(D.message||"Failed to upload file")}finally{R_(!1)}},[]),f$=I(async(U,J)=>{if(!U)return;let P=g_.current?.get(U);if(!P)return;let G=J&&J!==""?J:".",O=U.includes("/")?U.split("/").slice(0,-1).join("/")||".":".";if(G===O)return;try{let M=(await H4(U,G))?.path||U;if(P.type==="dir")L((g)=>{let S=new Set;for(let s of g)if(s===U)S.add(M);else if(s.startsWith(`${U}/`))S.add(`${M}${s.slice(U.length)}`);else S.add(s);return S});if(H(M),P.type==="dir")b(null),n(!1),y(null);else E_.current?.(M);v_.current?.(O),v_.current?.(G)}catch(D){i(D?.message||"Failed to move entry")}},[]);x$.current=f$;let $2=I(async(U)=>{if(!O$(U))return;U.preventDefault(),o_.current=0,l(!1),t(null),L_(null),x0();let J=Array.from(U?.dataTransfer?.files||[]);if(J.length===0)return;let P=F0.current||g0(U)||D0();await k$(J,P)},[D0,g0,k$]),B2=I((U)=>{if(U?.stopPropagation?.(),N_)return;let J=U?.currentTarget?.dataset?.uploadTarget||".";$0.current=J,y0.current?.click()},[N_]),A$=I(()=>{if(N_)return;let U=H0.current,J=U?g_.current?.get(U):null;$0.current=J?.type==="dir"?J.path:".",y0.current?.click()},[N_]),i$=I(()=>{V0(()=>L$(null))},[V0,L$]),j2=I(()=>{V0(()=>A$())},[V0,A$]),w$=I(()=>{V0(()=>r0())},[V0,r0]),I2=I(()=>{V0(()=>p$())},[V0,p$]),M2=I(()=>{if(!V||!Y$)return;V0(()=>k_.current?.(V,x))},[V0,V,Y$,x]),V_=I(()=>{if(!V||V===".")return;V0(()=>r$(V))},[V0,V,r$]),U2=I(()=>{if(!V||H_)return;V0(()=>m0())},[V0,V,H_,m0]),b2=I(()=>{if(!V||H_)return;V0(()=>c0())},[V0,V,H_,c0]),C2=I(()=>{if(!o0)return;if(v0(),typeof window<"u")window.open(o0,"_blank","noopener")},[v0,o0]),Z2=I(()=>{v0(),N?.()},[v0,N]),T2=I(()=>{v0(),Y?.()},[v0,Y]),f2=I((U)=>{if(!U||U.button!==0)return;let J=U.currentTarget;if(!J||!J.dataset)return;let P=J.dataset.path;if(!P||P===".")return;if(h0.current===P)return;let G=u0(U);if(G?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(G))return;U.preventDefault(),a_.current={path:P,dragging:!1,startX:U.clientX,startY:U.clientY};let O=(M)=>{let g=a_.current;if(!g?.path)return;let S=Math.abs(M.clientX-g.startX),s=Math.abs(M.clientY-g.startY),Q_=S>4||s>4;if(!g.dragging&&Q_)g.dragging=!0,Z0.current=!0,l(!0),t("move"),o$(g.path),I$(M.clientX,M.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(g.dragging){M.preventDefault(),I$(M.clientX,M.clientY);let k0=document.elementFromPoint(M.clientX,M.clientY),U_=N0(k0)||D0();if(F0.current!==U_)Y0(U_);Z$(U_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let M=a_.current;if(M?.dragging&&M.path){let g=F0.current||D0(),S=x$.current;if(typeof S==="function")S(M.path,g)}a_.current={path:null,dragging:!1,startX:0,startY:0},o_.current=0,l(!1),t(null),Y0(null),x0(),u$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{Z0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[N0,D0,o$,I$,u$,Y0,Z$,x0]),S2=I(async(U)=>{let J=Array.from(U?.target?.files||[]);if(J.length===0)return;let P=$0.current||".";if(await k$(J,P),$0.current=".",U?.target)U.target.value=""},[k$]);return B`
        <aside
            class=${`workspace-sidebar${u_?" workspace-drop-active":""}`}
            data-workspace-scale=${K0}
            ref=${W0}
            onDragEnter=${_2}
            onDragOver=${z$}
            onDragLeave=${h$}
            onDrop=${$2}
        >
            <input type="file" multiple style="display:none" ref=${y0} onChange=${S2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${C}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(U)=>{U.stopPropagation(),O_((J)=>!J)}}
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
                            <div class="workspace-menu-dropdown" ref=${A_} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${i$} disabled=${N_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${j2} disabled=${N_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${w$}>Refresh tree</button>
                                <button class=${`workspace-menu-item${W_?" active":""}`} role="menuitem" onClick=${I2}>
                                    ${W_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&B`<div class="workspace-menu-separator"></div>`}
                                ${V&&!H_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2} disabled=${!Y$}>Open in editor</button>
                                `}
                                ${M$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_}>Rename selected</button>
                                `}
                                ${b$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${o0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C2}>Download selected folder (zip)</button>
                                `}
                                ${d0&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${U2}>Delete selected file</button>
                                `}

                                ${(N||Y)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${L$} title="New file" disabled=${N_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${r0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${t$}>
                ${N_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${R&&B`<div class="workspace-loading">Loading…</div>`}
                ${$_&&B`<div class="workspace-error">${$_}</div>`}
                ${X&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${P0}
                        tabIndex="0"
                        onClick=${g$}
                        onDblClick=${C0}
                        onKeyDown=${U$}
                        onTouchStart=${y$}
                        onTouchEnd=${E$}
                        onTouchMove=${T$}
                        onTouchCancel=${E$}
                    >
                        ${B$.map(({node:U,depth:J})=>{let P=U.type==="dir",G=U.path===V,O=U.path===A,D=P&&q.has(U.path),M=q_&&U.path===q_,g=Array.isArray(U.children)&&U.children.length>0?U.children.length:Number(U.child_count)||0;return B`
                                <div
                                    key=${U.path}
                                    class=${`workspace-row${G?" selected":""}${M?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*m$.indentPx}px`}}
                                    data-path=${U.path}
                                    data-type=${U.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${P?D?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${P?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${P?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${I_}
                                                value=${m}
                                                onInput=${(S)=>p(S?.target?.value||"")}
                                                onKeyDown=${(S)=>{if(S.key==="Enter")S.preventDefault(),a$();else if(S.key==="Escape")S.preventDefault(),l0()}}
                                                onBlur=${l0}
                                                onClick=${(S)=>S.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${U.name}</span></span>`}
                                    ${P&&!D&&g>0&&B`
                                        <span class="workspace-count">${g}</span>
                                    `}
                                    ${P&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${U.path}
                                            title="Upload files to this folder"
                                            onClick=${B2}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${c$} onTouchStart=${e$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${L$} title="New file" disabled=${N_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!H_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>Y$&&k_.current?.(V,x)}
                                    title=${J$}
                                    disabled=${!Y$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m0}
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
                            ${H_?B`
                                    <button class="workspace-download" onClick=${A$}
                                        title="Upload files to this folder" disabled=${N_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${F1(V,W_)}
                                        title="Download folder as zip" onClick=${(U)=>U.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${c0} title="Download">
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
                    ${x?.error&&B`<div class="workspace-error">${x.error}</div>`}
                    ${H_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${P_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${P_?.error&&B`<div class="workspace-error">${P_.error}</div>`}
                        ${P_?.payload&&P_.payload.segments?.length>0&&B`
                            <${hj} payload=${P_.payload} />
                        `}
                        ${P_?.payload&&(!P_.payload.segments||P_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!H_&&B`
                        <div class="workspace-preview-body" ref=${t_}></div>
                    `}
                    ${c&&B`
                        <div class="workspace-download-card">
                            <${ij} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${X_&&B`
                <div class="workspace-drag-ghost" ref=${_$}>${X_.label}</div>
            `}
        </aside>
    `}var lj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,nj=/\.(csv|tsv)$/i,dj=/\.pdf$/i,oj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,n6=/\.drawio(\.xml|\.svg|\.png)?$/i;function d6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:Y,onTogglePin:z,onTogglePreview:X,previewTabs:Q,onToggleDock:q,dockVisible:L,onToggleZen:V,zenMode:H}){let[A,T]=f(null),m=k(null);v(()=>{if(!A)return;let y=(R)=>{if(R.type==="keydown"&&R.key!=="Escape")return;T(null)};return document.addEventListener("click",y),document.addEventListener("keydown",y),()=>{document.removeEventListener("click",y),document.removeEventListener("keydown",y)}},[A]),v(()=>{let y=(R)=>{if(R.ctrlKey&&R.key==="Tab"){if(R.preventDefault(),!_.length)return;let o=_.findIndex((a)=>a.id===$);if(R.shiftKey){let a=_[(o-1+_.length)%_.length];j?.(a.id)}else{let a=_[(o+1)%_.length];j?.(a.id)}return}if((R.ctrlKey||R.metaKey)&&R.key==="w"){let o=document.querySelector(".editor-pane");if(o&&o.contains(document.activeElement)){if(R.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[_,$,j,Z]);let p=I((y,R)=>{if(y.button===1){y.preventDefault(),Z?.(R);return}if(y.button===0)j?.(R)},[j,Z]),x=I((y,R)=>{y.preventDefault(),T({id:R,x:y.clientX,y:y.clientY})},[]),b=I((y)=>{y.preventDefault(),y.stopPropagation()},[]),c=I((y,R)=>{y.preventDefault(),y.stopPropagation(),Z?.(R)},[Z]);if(v(()=>{if(!$||!m.current)return;let y=m.current.querySelector(".tab-item.active");if(y)y.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((y)=>B`
                <div
                    key=${y.id}
                    class=${`tab-item${y.id===$?" active":""}${y.dirty?" dirty":""}${y.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${y.id===$}
                    title=${y.path}
                    onMouseDown=${(R)=>p(R,y.id)}
                    onContextMenu=${(R)=>x(R,y.id)}
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
                        onMouseDown=${b}
                        onClick=${(R)=>c(R,y.id)}
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
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${q}
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
        ${A&&B`
            <div class="tab-context-menu" style=${{left:A.x+"px",top:A.y+"px"}}>
                <button onClick=${()=>{Z?.(A.id),T(null)}}>Close</button>
                <button onClick=${()=>{N?.(A.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(A.id),T(null)}}>
                    ${_.find((y)=>y.id===A.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{X(A.id),T(null)}}>
                        ${Q?.has(A.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${lj.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(A.id),R=A.id.split("/").pop()||"document",o="/office-viewer/?url="+encodeURIComponent(y)+"&name="+encodeURIComponent(R);window.open(o,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${nj.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${dj.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/workspace/raw?path="+encodeURIComponent(A.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${oj.test(A.id)&&!n6.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/image-viewer/?path="+encodeURIComponent(A.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
                ${n6.test(A.id)&&B`
                    <hr />
                    <button onClick=${()=>{let y="/drawio/edit?path="+encodeURIComponent(A.id);window.open(y,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var sj=400,K3=60,o6=220,W3="mdPreviewHeight";function rj(){try{let _=localStorage.getItem(W3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=K3?$:o6}catch{return o6}}function s6({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[Y,z]=f(rj),X=k(null),Q=k(null),q=k(""),L=k(_);return L.current=_,v(()=>{let A=()=>{let m=L.current?.()||"";if(m===q.current)return;q.current=m;try{let p=e0(m,null,{sanitize:!1});N(p)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let T=setInterval(A,sj);return()=>clearInterval(T)},[]),v(()=>{if(X.current&&Z)R$(X.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let T=A.clientY,m=Q.current?.offsetHeight||Y,p=Q.current?.parentElement,x=p?p.offsetHeight*0.7:500,b=A.currentTarget;b.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(R)=>{let o=Math.min(Math.max(m-(R.clientY-T),K3),x);z(o)},y=()=>{b.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(W3,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",y)}}
            onTouchStart=${(A)=>{A.preventDefault();let T=A.touches[0];if(!T)return;let m=T.clientY,p=Q.current?.offsetHeight||Y,x=Q.current?.parentElement,b=x?x.offsetHeight*0.7:500,c=A.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let y=(o)=>{let a=o.touches[0];if(!a)return;o.preventDefault();let n=Math.min(Math.max(p-(a.clientY-m),K3),b);z(n)},R=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(W3,String(Math.round(Q.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",y),document.removeEventListener("touchend",R),document.removeEventListener("touchcancel",R)};document.addEventListener("touchmove",y,{passive:!1}),document.addEventListener("touchend",R),document.addEventListener("touchcancel",R)}}
        ></div>
        <div class="md-preview-panel" ref=${Q} style=${{height:Y+"px"}}>
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
    `}function r6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let Y=k(_);Y.current=_;let z=k($);z.current=$;let X=k(j);X.current=j;let Q=k(Z);Q.current=Z,v(()=>{X.current();let q=new H1((V,H)=>Y.current(V,H),(V)=>z.current(V),{chatJid:N});q.connect();let L=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")Q.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),q.disconnect()}},[N])}function a6(){let[_,$]=f(!1),[j,Z]=f("default"),N=k(!1);v(()=>{let Q=k2("notificationsEnabled",!1);if(N.current=Q,$(Q),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let Y=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let Q=Notification.requestPermission();if(Q&&typeof Q.then==="function")return Q;return Promise.resolve(Q)}catch{return Promise.resolve("default")}},[]),z=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await Y();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),i_("notificationsEnabled","false");return}}let Q=!N.current;N.current=Q,$(Q),i_("notificationsEnabled",String(Q))},[Y]),X=I((Q,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(Q,{body:q});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:X}}var $1=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function t6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[Y,z]=f(!1),X=k(!1),Q=k(null),q=k(!1),L=k(null),V=k(null),H=k(0);v(()=>{X.current=Y},[Y]),v(()=>{V.current=Z},[Z]),v(()=>{H.current+=1,V.current=null,L.current=null,q.current=!1,X.current=!1,N(null),z(!1)},[j]);let A=I(async(p=null)=>{let x=H.current;try{if(p){let b=await $4(p,50,0,j);if(x!==H.current)return;N(b.posts),z(!1)}else{let b=await c2(10,null,j);if(x!==H.current)return;N(b.posts),z(b.has_more)}}catch(b){if(x!==H.current)return;console.error("Failed to load posts:",b)}},[j]),T=I(async()=>{let p=H.current;try{let x=await c2(10,null,j);if(p!==H.current)return;N((b)=>{if(!b||b.length===0)return x.posts;return $1([...x.posts,...b])}),z((b)=>b||x.has_more)}catch(x){if(p!==H.current)return;console.error("Failed to refresh timeline:",x)}},[j]),m=I(async(p={})=>{let x=H.current,b=V.current;if(!b||b.length===0)return;if(q.current)return;let{preserveScroll:c=!0,preserveMode:y="top",allowRepeat:R=!1}=p,o=($_)=>{if(!c){$_();return}if(y==="top")$($_);else _($_)},n=b.slice().sort(($_,i)=>$_.id-i.id)[0]?.id;if(!Number.isFinite(n))return;if(!R&&L.current===n)return;q.current=!0,L.current=n;try{let $_=await c2(10,n,j);if(x!==H.current)return;if($_.posts.length>0)o(()=>{N((i)=>$1([...$_.posts,...i||[]])),z($_.has_more)});else z(!1)}catch($_){if(x!==H.current)return;console.error("Failed to load more posts:",$_)}finally{if(x===H.current)q.current=!1}},[j,_,$]);return v(()=>{Q.current=m},[m]),{posts:Z,setPosts:N,hasMore:Y,setHasMore:z,hasMoreRef:X,loadPosts:A,refreshTimeline:T,loadMore:m,loadMoreRef:Q,loadingMoreRef:q,lastBeforeIdRef:L}}function e6(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,Y]=f(""),[z,X]=f({text:"",totalLines:0}),[Q,q]=f(null),[L,V]=f(null),[H,A]=f(null),T=k(null),m=k(0),p=k(!1),x=k(""),b=k(""),c=k(null),y=k(null),R=k(null),o=k(null),a=k(!1),n=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:Y,agentThought:z,setAgentThought:X,pendingRequest:Q,setPendingRequest:q,currentTurnId:L,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:A,lastAgentEventRef:T,lastSilenceNoticeRef:m,isAgentRunningRef:p,draftBufferRef:x,thoughtBufferRef:b,pendingRequestRef:c,stalledPostIdRef:y,currentTurnIdRef:R,steerQueuedTurnIdRef:o,thoughtExpandedRef:a,draftExpandedRef:n}}function _9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.clientX,A=$.current||280,T=L.currentTarget;T.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,p=(b)=>{m=b.clientX;let c=Math.min(Math.max(A+(b.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},x=()=>{let b=Math.min(Math.max(A+(m-H),160),600);$.current=b,T.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",i_("sidebarWidth",String(Math.round(b))),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",x)}).current,Y=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.touches[0];if(!H)return;let A=H.clientX,T=$.current||280,m=L.currentTarget;m.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let p=(b)=>{let c=b.touches[0];if(!c)return;b.preventDefault();let y=Math.min(Math.max(T+(c.clientX-A),160),600);V.style.setProperty("--sidebar-width",`${y}px`),$.current=y},x=()=>{m.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",i_("sidebarWidth",String(Math.round($.current||T))),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,z=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.clientX,A=j.current||$.current||280,T=L.currentTarget;T.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,p=(b)=>{m=b.clientX;let c=Math.min(Math.max(A+(b.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},x=()=>{let b=Math.min(Math.max(A+(m-H),200),800);j.current=b,T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("editorWidth",String(Math.round(b))),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",x)}).current,X=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.touches[0];if(!H)return;let A=H.clientX,T=j.current||$.current||280,m=L.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let p=(b)=>{let c=b.touches[0];if(!c)return;b.preventDefault();let y=Math.min(Math.max(T+(c.clientX-A),200),800);V.style.setProperty("--editor-width",`${y}px`),j.current=y},x=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("editorWidth",String(Math.round(j.current||T))),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,Q=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.clientY,A=Z?.current||200,T=L.currentTarget;T.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,p=(b)=>{m=b.clientY;let c=Math.min(Math.max(A-(b.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let b=Math.min(Math.max(A-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=b;T.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("dockHeight",String(Math.round(b))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",p),document.addEventListener("mouseup",x)}).current,q=k((L)=>{L.preventDefault();let V=_.current;if(!V)return;let H=L.touches[0];if(!H)return;let A=H.clientY,T=Z?.current||200,m=L.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let p=(b)=>{let c=b.touches[0];if(!c)return;b.preventDefault();let y=Math.min(Math.max(T-(c.clientY-A),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${y}px`),Z)Z.current=y;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("dockHeight",String(Math.round(Z?.current||T))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:Q,handleDockSplitterTouchStart:q}}function $9({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=f(()=>l_.getTabs()),[N,Y]=f(()=>l_.getActiveId()),[z,X]=f(()=>l_.getTabs().length>0);v(()=>{return l_.onChange((y,R)=>{Z(y),Y(R),X(y.length>0)})},[]);let[Q,q]=f(()=>new Set),L=I((y)=>{q((R)=>{let o=new Set(R);if(o.has(y))o.delete(y);else o.add(y);return o})},[]),V=I((y)=>{q((R)=>{if(!R.has(y))return R;let o=new Set(R);return o.delete(y),o})},[]),H=I((y,R={})=>{if(!y)return;let o={path:y,mode:"edit"};try{if(!s_.resolve(o)){if(!s_.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,n)}let a=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0;l_.open(y,a)},[]),A=I(()=>{let y=l_.getActiveId();if(y){let R=l_.get(y);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}l_.close(y),V(y),$.current?.(y)}},[V]),T=I((y)=>{let R=l_.get(y);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}l_.close(y),V(y),$.current?.(y)},[V]),m=I((y)=>{l_.activate(y)},[]),p=I((y)=>{let R=l_.getTabs().filter((n)=>n.id!==y&&!n.pinned),o=R.filter((n)=>n.dirty).length;if(o>0){if(!window.confirm(`${o} unsaved tab${o>1?"s":""} will be closed. Continue?`))return}let a=R.map((n)=>n.id);l_.closeOthers(y),a.forEach((n)=>{V(n),$.current?.(n)})},[V]),x=I(()=>{let y=l_.getTabs().filter((a)=>!a.pinned),R=y.filter((a)=>a.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let o=y.map((a)=>a.id);l_.closeAll(),o.forEach((a)=>{V(a),$.current?.(a)})},[V]),b=I((y)=>{l_.togglePin(y)},[]),c=I(()=>{let y=l_.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return v(()=>{let y=(R)=>{let{oldPath:o,newPath:a,type:n}=R.detail||{};if(!o||!a)return;if(n==="dir"){for(let $_ of l_.getTabs())if($_.path===o||$_.path.startsWith(`${o}/`)){let i=`${a}${$_.path.slice(o.length)}`;l_.rename($_.id,i)}}else l_.rename(o,a)};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),v(()=>{let y=(R)=>{if(l_.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:Q,openEditor:H,closeEditor:A,handleTabClose:T,handleTabActivate:m,handleTabCloseOthers:p,handleTabCloseAll:x,handleTabTogglePin:b,handleTabTogglePreview:L,revealInExplorer:c}}function X3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],Y=Number(N);return Number.isFinite(Y)?Y:$}catch{return $}}var q3=X3("warning",30000),j9=X3("finalize",120000),V3=X3("refresh",30000),Z9=30000;function N9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Y9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function z9(_=30000){let[,$]=f(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function Q3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function G9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function L3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||N>1||z)}function K9(_,$={}){if(X2($))return null;if(L3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:aj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function W9(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function X9(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function q9(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function V9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function q2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Q9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function aj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function f1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function B3(_){return String(_||"").trim()||"web:default"}function L9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function B9(_={}){return X2(_)&&L3(_)}function tj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function ej(_={},$={}){if(!B9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=tj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function U9(_={}){if(!B9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},z=()=>{Z=0,ej({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},Q=()=>{X();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),X()},V);if(H!=null)N.add(H)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;Q()},L=$.visualViewport;return Q(),$.addEventListener("focus",Q),$.addEventListener("pageshow",Q),$.addEventListener("resize",Q),$.addEventListener("orientationchange",Q),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",Q,!0),L?.addEventListener?.("resize",Q),L?.addEventListener?.("scroll",Q),()=>{Y(),$.removeEventListener("focus",Q),$.removeEventListener("pageshow",Q),$.removeEventListener("resize",Q),$.removeEventListener("orientationchange",Q),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",Q,!0),L?.removeEventListener?.("resize",Q),L?.removeEventListener?.("scroll",Q)}}function _Z(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:_Z($,j)}var $Z=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function O9(_){return $Z.has(String(_||"").trim())}function jZ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function F9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(jZ(_),{detail:Z})),!0}var ZZ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function H9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(X2({window:j,navigator:Z}))};N();let z=ZZ.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of z)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function D9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var F3="piclaw_btw_session",NZ=900,YZ="__piclawRenameBranchPromptLock__",J9=()=>{if(typeof window>"u")return null;let _=window,$=YZ,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function zZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function GZ(){let _=t0(F3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",Y=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?Y||"BTW stream interrupted. You can retry.":Y,model:null,status:z}}catch{return null}}var y9=j4,E9=N4,KZ=z4,k9=q4,A9=V4,w9=G4,U3=Q$(a0,"getAgentContext",null),WZ=Q$(a0,"getAgentModels",{current:null,models:[]}),XZ=Q$(a0,"getActiveChatAgents",{chats:[]}),O3=Q$(a0,"getChatBranches",{chats:[]}),qZ=Q$(a0,"renameChatBranch",null),VZ=Q$(a0,"pruneChatBranch",null),P9=Q$(a0,"restoreChatBranch",null),QZ=Q$(a0,"getAgentQueueState",{count:0}),LZ=Q$(a0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),BZ=Q$(a0,"removeAgentQueueItem",{removed:!1}),UZ=Q$(a0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});s_.register(v4);s_.register(n4);s_.register(l4);s_.register(d4);s_.register(o4);s_.register(s4);s_.register(a4);s_.register(t4);s_.register(_3);u4();s_.register(c4);s_.register(h4);function OZ({locationParams:_}){let $=f_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=f_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=f_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=f_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[Y,z]=f("disconnected"),[X,Q]=f(()=>X2()),[q,L]=f(null),[V,H]=f(null),[A,T]=f(!1),[m,p]=f("current"),[x,b]=f([]),[c,y]=f([]),[R,o]=f(null),{agentStatus:a,setAgentStatus:n,agentDraft:$_,setAgentDraft:i,agentPlan:W_,setAgentPlan:n_,agentThought:u_,setAgentThought:l,pendingRequest:Z_,setPendingRequest:t,currentTurnId:X_,setCurrentTurnId:z_,steerQueuedTurnId:q_,setSteerQueuedTurnId:L_,lastAgentEventRef:N_,lastSilenceNoticeRef:R_,isAgentRunningRef:P_,draftBufferRef:J_,thoughtBufferRef:y_,pendingRequestRef:G0,stalledPostIdRef:K0,currentTurnIdRef:K_,steerQueuedTurnIdRef:__,thoughtExpandedRef:O_,draftExpandedRef:j_}=e6(),[F_,x_]=f({}),[r_,m_]=f(null),[d_,g_]=f(null),[p_,k_]=f(!1),[E_,v_]=f(null),[W0,P0]=f([]),[I_,y0]=f([]),[$0,M_]=f(null),[j0,a_]=f([]),[_0,Z0]=f(!1),[b_,O0]=f(()=>GZ()),[T0,c_]=f(null),t_=k(new Set),f0=f_(()=>W0.find((W)=>W?.chat_jid===$)||null,[W0,$]),A_=f_(()=>I_.find((W)=>W?.chat_jid===$)||f0||null,[f0,I_,$]),C=A_?.root_chat_jid||f0?.root_chat_jid||$,r=zZ(m),[B_,w_]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),o_=j0.length,F0=k(new Set),C_=k([]),S0=k(new Set),_$=k(0),$$=k({inFlight:!1,lastAttemptAt:0,turnId:null});F0.current=new Set(j0.map((W)=>W.row_id)),C_.current=j0;let{notificationsEnabled:b0,notificationPermission:x$,toggleNotifications:H0,notify:h0}=a6(),[i0,R0]=f(()=>new Set),[j$,V2]=f(()=>k2("workspaceOpen",!0)),Q2=k(null),{editorOpen:E0,tabStripTabs:D0,tabStripActiveId:N0,previewTabs:g0,openEditor:Y0,closeEditor:x0,handleTabClose:Z$,handleTabActivate:I$,handleTabCloseOthers:o$,handleTabCloseAll:u$,handleTabTogglePin:s$,handleTabTogglePreview:l0,revealInExplorer:r$}=$9({onTabClosed:(W)=>Q2.current?.(W)}),a$=k(null),N$=k(null),L$=k(null),n0=k(null),q0=s_.getDockPanes().length>0,[h_,B$]=f(!1),D$=I(()=>B$((W)=>!W),[]),m$=I(()=>{Y0(g4,{label:"Terminal"})},[Y0]),L2=!j&&(E0||q0&&h_),[H_,Y$]=f(!1),J$=k(!1),M$=I(()=>{if(!E0||j)return;if(J$.current=h_,h_)B$(!1);Y$(!0)},[E0,j,h_]),d0=I(()=>{if(!H_)return;if(Y$(!1),J$.current)B$(!0),J$.current=!1},[H_]),b$=I(()=>{if(H_)d0();else M$()},[H_,M$,d0]);v(()=>{if(H_&&!E0)d0()},[H_,E0,d0]),v(()=>{let W=a$.current;if(!W)return;if(N$.current)N$.current.dispose(),N$.current=null;let K=N0;if(!K)return;let F={path:K,mode:"edit"},E=s_.resolve(F)||s_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=E.mount(W,F);N$.current=w,w.onDirtyChange?.((d)=>{l_.setDirty(K,d)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{x0()});let u=l_.getViewState(K);if(u&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(u));if(typeof w.onViewStateChange==="function")w.onViewStateChange((d)=>{l_.saveViewState(K,d)});return requestAnimationFrame(()=>w.focus()),()=>{if(N$.current===w)w.dispose(),N$.current=null}},[N0,x0]),v(()=>{let W=(K)=>{let F=K.detail?.path;if(F)Y0(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[Y0]),v(()=>{let W=L$.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!W||!q0||!h_)return;let K=s_.getDockPanes()[0];if(!K){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=K.mount(W,{mode:"view"});return n0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(n0.current===F)F.dispose(),n0.current=null}},[q0,h_]);let[o0,v0]=f({name:"You",avatar_url:null,avatar_background:null}),V0=k(!1),u0=k(!1),s0=k(null),C0=k($),g$=k(new Map),r0=k($),p0=k(0),p$=k(0),t$=k({}),C$=k({name:null,avatar_url:null}),J0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),U$=k(null),y$=k(null),E$=k(0),T$=k(0),c$=k(0),e$=k(null),c0=k(null),m0=k(null),O$=k(null),_2=k(0),z$=k({title:null,avatarBase:null}),h$=k(null),k$=k(!1),[f$,$2]=f(!1),B2=k(0),A$=I(()=>{if(h$.current)clearTimeout(h$.current),h$.current=null;o(null)},[]);z9(30000),v(()=>{return D8()},[]),v(()=>{return H9(Q)},[]),v(()=>{i_("workspaceOpen",String(j$))},[j$]),v(()=>{return U9()},[]),v(()=>{return()=>{A$()}},[A$]),v(()=>{if(!b_){i_(F3,"");return}i_(F3,JSON.stringify({question:b_.question||"",answer:b_.answer||"",thinking:b_.thinking||"",error:b_.error||null,status:b_.status||"success"}))},[b_]),v(()=>{t$.current=F_||{}},[F_]),v(()=>{C0.current=$},[$]),v(()=>{C$.current=o0||{name:"You",avatar_url:null,avatar_background:null}},[o0]);let i$=I((W,K,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(z$.current.title!==E){document.title=E;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==E)e.setAttribute("content",E);z$.current.title=E}let w=document.getElementById("dynamic-favicon");if(!w)return;let u=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",d=K||u,Y_=K?`${d}|${F||""}`:d;if(z$.current.avatarBase!==Y_){let e=K?`${d}${d.includes("?")?"&":"?"}v=${F||Date.now()}`:d;w.setAttribute("href",e),z$.current.avatarBase=Y_}},[]),j2=I((W)=>{if(!W)return;b((K)=>K.includes(W)?K:[...K,W])},[]),w$=I((W)=>{b((K)=>K.filter((F)=>F!==W))},[]);Q2.current=w$;let I2=I(()=>{b([])},[]),M2=I((W)=>{if(!Array.isArray(W)){b([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let w=E.trim();if(F.has(w))continue;F.add(w),K.push(w)}b(K)},[]),V_=I((W,K=null,F="info",E=3000)=>{A$(),o({title:W,detail:K||null,kind:F||"info"}),h$.current=setTimeout(()=>{o((w)=>w?.title===W?null:w)},E)},[A$]),U2=I((W)=>{let K=G9(W,{editorOpen:E0,resolvePane:(F)=>s_.resolve(F)});if(K.kind==="open"){Y0(K.path);return}if(K.kind==="toast")V_(K.title,K.detail,K.level)},[E0,Y0,V_]),b2=I(()=>{let W=N0;if(W)j2(W)},[N0,j2]),C2=I((W)=>{if(!W)return;y((K)=>K.includes(W)?K:[...K,W])},[]),Z2=I(async(W,K=null)=>{let F=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let w=typeof K==="string"&&K.trim()?K.trim():$,d=(await Z4(W,w))?.thread?.[0];if(!d)return;L0((Y_)=>{if(!Y_)return[d];if(Y_.some((e)=>e.id===d.id))return Y_;return[...Y_,d]}),requestAnimationFrame(()=>{setTimeout(()=>{let Y_=document.getElementById("post-"+W);if(Y_)F(Y_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",W,w)}},[$]),T2=I((W)=>{y((K)=>K.filter((F)=>F!==W))},[]),f2=I(()=>{y([])},[]),S2=I((W)=>{if(!Array.isArray(W)){y([]);return}let K=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let w=E.trim();if(F.has(w))continue;F.add(w),K.push(w)}y(K)},[]),U=I((W)=>{let K=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";V_("Compose failed",K,"error",5000)},[V_]),J=I((W={})=>{let K=Date.now();if(N_.current=K,W.running)P_.current=!0,Z0((F)=>F?F:!0);if(W.clearSilence)R_.current=0},[Z0]),P=I(()=>{if(O$.current)clearTimeout(O$.current),O$.current=null;_2.current=0},[]);v(()=>()=>{P()},[P]);let G=I(()=>{P(),n((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:K,lastActivity:F,...E}=W;return E})},[P]),O=I((W)=>{if(!W)return;P();let K=Date.now();_2.current=K,n({type:W.type||"active",last_activity:!0}),O$.current=setTimeout(()=>{if(_2.current!==K)return;n((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},Z9)},[P]),D=I(()=>{P_.current=!1,Z0(!1),N_.current=null,R_.current=0,J_.current="",y_.current="",G0.current=null,c0.current=null,K_.current=null,__.current=null,s0.current=null,$$.current={inFlight:!1,lastAttemptAt:0,turnId:null},P(),z_(null),L_(null),O_.current=!1,j_.current=!1},[P,z_,L_,Z0]),M=I((W)=>{if(!L9({remainingQueueCount:W,currentTurnId:K_.current,isAgentTurnActive:_0}))return;__.current=null,L_(null)},[_0,L_]),g=I(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),S=I(()=>({agentStatus:a,agentDraft:$_?{...$_}:{text:"",totalLines:0},agentPlan:W_||"",agentThought:u_?{...u_}:{text:"",totalLines:0},pendingRequest:Z_,currentTurnId:X_,steerQueuedTurnId:q_,isAgentTurnActive:Boolean(_0),followupQueueItems:Array.isArray(j0)?j0.map((W)=>({...W})):[],activeModel:r_,activeThinkingLevel:d_,supportsThinking:Boolean(p_),activeModelUsage:E_,contextUsage:$0,isAgentRunning:Boolean(P_.current),wasAgentActive:Boolean(u0.current),draftBuffer:J_.current||"",thoughtBuffer:y_.current||"",lastAgentEvent:N_.current||null,lastSilenceNotice:R_.current||0,lastAgentResponse:c0.current||null,currentTurnIdRef:K_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(O_.current),draftExpanded:Boolean(j_.current),agentStatusRef:s0.current||null,silentRecovery:{...$$.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[r_,E_,d_,$_,W_,a,u_,$0,X_,j0,_0,Z_,q_,p_]),s=I((W)=>{let K=W||g();P(),P_.current=Boolean(K.isAgentRunning),u0.current=Boolean(K.wasAgentActive),Z0(Boolean(K.isAgentTurnActive)),N_.current=K.lastAgentEvent||null,R_.current=Number(K.lastSilenceNotice||0),J_.current=K.draftBuffer||"",y_.current=K.thoughtBuffer||"",G0.current=K.pendingRequest||null,c0.current=K.lastAgentResponse||null,K_.current=K.currentTurnIdRef||null,__.current=K.steerQueuedTurnIdRef||null,s0.current=K.agentStatusRef||null,$$.current=K.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},O_.current=Boolean(K.thoughtExpanded),j_.current=Boolean(K.draftExpanded),n(K.agentStatus||null),i(K.agentDraft?{...K.agentDraft}:{text:"",totalLines:0}),n_(K.agentPlan||""),l(K.agentThought?{...K.agentThought}:{text:"",totalLines:0}),t(K.pendingRequest||null),z_(K.currentTurnId||null),L_(K.steerQueuedTurnId||null),a_(Array.isArray(K.followupQueueItems)?K.followupQueueItems.map((F)=>({...F})):[]),m_(K.activeModel||null),g_(K.activeThinkingLevel||null),k_(Boolean(K.supportsThinking)),v_(K.activeModelUsage??null),M_(K.contextUsage??null)},[P,g,z_,a_,Z0,L_]),Q_=I((W)=>{if(!W)return;if(K_.current===W)return;K_.current=W,$$.current={inFlight:!1,lastAttemptAt:0,turnId:W},z_(W),__.current=null,L_(null),J_.current="",y_.current="",i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),G0.current=null,c0.current=null,O_.current=!1,j_.current=!1},[z_,L_]),k0=I((W)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let K=c0.current;if(!K||!K.post)return;if(W&&K.turnId&&K.turnId!==W)return;let F=K.post;if(F.id&&e$.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;e$.current=F.id||e$.current,c0.current=null;let w=E.replace(/\s+/g," ").slice(0,200),u=t$.current||{},Y_=(F?.data?.agent_id?u[F.data.agent_id]:null)?.name||"Pi";h0(Y_,w)},[h0]),U_=I(async(W,K)=>{if(W!=="thought"&&W!=="draft")return;let F=K_.current;if(W==="thought"){if(O_.current=K,F)try{await A9(F,"thought",K)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!K)return;try{let E=F?await k9(F,"thought"):null;if(E?.text)y_.current=E.text;l((w)=>({...w||{text:"",totalLines:0},fullText:y_.current||w?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:w?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(j_.current=K,F)try{await A9(F,"draft",K)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!K)return;try{let E=F?await k9(F,"draft"):null;if(E?.text)J_.current=E.text;i((w)=>({...w||{text:"",totalLines:0},fullText:J_.current||w?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:w?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),F$=k(null),P$=I(()=>{let W=U$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);F$.current=P$;let O2=I((W)=>{let K=U$.current;if(!K||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:w}=J0.current||{},u=!((E||w)&&!F),d=u?K.scrollHeight-K.scrollTop:K.scrollTop;W(),requestAnimationFrame(()=>{let Y_=U$.current;if(!Y_)return;if(u){let e=Math.max(Y_.scrollHeight-d,0);Y_.scrollTop=e}else{let e=Math.max(Y_.scrollHeight-Y_.clientHeight,0),h=Math.min(d,e);Y_.scrollTop=h}})},[]),G$=I((W)=>{let K=U$.current;if(!K||typeof W!=="function"){W?.();return}let F=K.scrollTop;W(),requestAnimationFrame(()=>{let E=U$.current;if(!E)return;let w=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,w)})},[]),S1="Queued as a follow-up (one-at-a-time).",N2="⁣",I0=I((W)=>{if(!W||!Array.isArray(W))return W;let K=F0.current,F=new Set(K),E=W.filter((w)=>{if(F.has(w?.id))return!1;if(w?.data?.is_bot_message){let u=w?.data?.content;if(u===S1||u===N2)return!1}return!0});return E.length===W.length?W:E},[]),{posts:F2,setPosts:L0,hasMore:R1,setHasMore:H2,hasMoreRef:l$,loadPosts:X0,refreshTimeline:Q0,loadMore:H3,loadMoreRef:R2}=t6({preserveTimelineScroll:O2,preserveTimelineScrollTop:G$,chatJid:$}),D2=f_(()=>I0(F2),[F2,j0,I0]),j1=I(()=>{let W=K0.current;if(!W)return;L0((K)=>K?K.filter((F)=>F.id!==W):K),K0.current=null},[L0]),{handleSplitterMouseDown:x9,handleSplitterTouchStart:I9,handleEditorSplitterMouseDown:M9,handleEditorSplitterTouchStart:b9,handleDockSplitterMouseDown:C9,handleDockSplitterTouchStart:T9}=_9({appShellRef:y$,sidebarWidthRef:E$,editorWidthRef:T$,dockHeightRef:c$}),D3=I(()=>{if(!P_.current)return;P_.current=!1,R_.current=0,N_.current=null,K_.current=null,z_(null),O_.current=!1,j_.current=!1;let W=(J_.current||"").trim();if(J_.current="",y_.current="",i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),G0.current=null,c0.current=null,!W){n({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),w=new Date().toISOString(),u={id:E,timestamp:w,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};K0.current=E,L0((d)=>d?$1([...d,u]):[u]),F$.current?.(),n(null)},[z_]);v(()=>{J0.current={currentHashtag:q,searchQuery:V,searchOpen:A}},[q,V,A]);let T_=I(()=>{let W=++_$.current,K=$;QZ(K).then((F)=>{if(W!==_$.current)return;if(C0.current!==K)return;let E=S0.current,w=Array.isArray(F?.items)?F.items.map((u)=>({...u})).filter((u)=>!E.has(u.row_id)):[];if(w.length){a_((u)=>{if(u.length===w.length&&u.every((d,Y_)=>d.row_id===w[Y_].row_id))return u;return w});return}E.clear(),M(0),a_((u)=>u.length===0?u:[])}).catch(()=>{if(W!==_$.current)return;if(C0.current!==K)return;a_((F)=>F.length===0?F:[])})},[M,$,a_]),K$=I(async()=>{let W=$;try{let K=await U3(W);if(C0.current!==W)return;if(K)M_(K)}catch(K){if(C0.current!==W)return;console.warn("Failed to fetch agent context:",K)}},[$]),W$=I(async()=>{let W=$;try{let K=await w9(W);if(C0.current!==W)return null;if(!K||K.status!=="active"||!K.data){if(u0.current){let{currentHashtag:w,searchQuery:u,searchOpen:d}=J0.current||{};if(!w&&!u&&!d)Q0()}return u0.current=!1,D(),s0.current=null,n(null),i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),G0.current=null,K??null}u0.current=!0;let F=K.data;s0.current=F;let E=F.turn_id||F.turnId;if(E)Q_(E);if(J({running:!0,clearSilence:!0}),G(),n(F),K.thought&&K.thought.text)l((w)=>{if(w&&w.text&&w.text.length>=K.thought.text.length)return w;return y_.current=K.thought.text,{text:K.thought.text,totalLines:K.thought.totalLines||0}});if(K.draft&&K.draft.text)i((w)=>{if(w&&w.text&&w.text.length>=K.draft.text.length)return w;return J_.current=K.draft.text,{text:K.draft.text,totalLines:K.draft.totalLines||0}});return K}catch(K){return console.warn("Failed to fetch agent status:",K),null}},[D,G,J,Q0,Q_]),v1=I(async()=>{if(!P_.current)return null;if(G0.current)return null;let W=K_.current||null,K=$$.current,F=Date.now();if(K.inFlight)return null;if(K.turnId===W&&F-K.lastAttemptAt<V3)return null;K.inFlight=!0,K.lastAttemptAt=F,K.turnId=W;try{let{currentHashtag:E,searchQuery:w,searchOpen:u}=J0.current||{};if(!E&&!w&&!u)await Q0();return await T_(),await W$()}finally{K.inFlight=!1}},[W$,T_,Q0]);v(()=>{let W=Math.min(1000,Math.max(100,Math.floor(q3/2))),K=setInterval(()=>{if(!P_.current)return;if(G0.current)return;let F=N_.current;if(!F)return;let E=Date.now(),w=E-F,u=s2(s0.current);if(w>=j9){if(!u)n({type:"waiting",title:"Re-syncing after a quiet period…"});v1();return}if(w>=q3){if(E-R_.current>=V3){if(!u){let d=Math.floor(w/1000);n({type:"waiting",title:`Waiting for model… No events for ${d}s`})}R_.current=E,v1()}}},W);return()=>clearInterval(K)},[v1]);let f9=I((W)=>{if(z(W),W!=="connected"){n(null),i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),G0.current=null,D();return}if(!V0.current){V0.current=!0;let{currentHashtag:w,searchQuery:u,searchOpen:d}=J0.current||{};if(!w&&!u&&!d)Q0();W$(),T_(),K$();return}let{currentHashtag:K,searchQuery:F,searchOpen:E}=J0.current;if(!K&&!F&&!E)Q0();W$(),T_(),K$()},[D,Q0,W$,T_,K$]),S9=I(async(W)=>{L(W),L0(null),await X0(W)},[X0]),R9=I(async()=>{L(null),H(null),L0(null),await X0()},[X0]),v9=I(async(W,K=m)=>{if(!W||!W.trim())return;let F=K==="root"||K==="all"?K:"current";p(F),H(W.trim()),L(null),L0(null);try{let E=await y9(W.trim(),50,0,$,F,C);L0(E.results),H2(!1)}catch(E){console.error("Failed to search:",E),L0([])}},[$,C,m]),u9=I(()=>{T(!0),H(null),L(null),p("current"),L0([])},[]),m9=I(()=>{T(!1),H(null),X0()},[X0]),HZ=I(()=>{},[]),u1=!q&&!V&&!A,g9=I(async(W)=>{if(!W)return;let K=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=D2?.filter((u)=>u?.data?.thread_id===K&&u?.id!==K).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let w=(u)=>{if(!u.length)return;R0((Y_)=>{let e=new Set(Y_);return u.forEach((h)=>e.add(h)),e}),setTimeout(()=>{if(G$(()=>{L0((Y_)=>Y_?Y_.filter((e)=>!u.includes(e.id)):Y_)}),R0((Y_)=>{let e=new Set(Y_);return u.forEach((h)=>e.delete(h)),e}),l$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let u=await E9(K,E>0,F);if(u?.ids?.length)w(u.ids)}catch(u){let d=u?.message||"";if(E===0&&d.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await E9(K,!0,F);if(e?.ids?.length)w(e.ids);return}console.error("Failed to delete post:",u),alert(`Failed to delete message: ${d}`)}},[$,D2,G$]),J3=I(async()=>{try{let W=await KZ();x_(N9(W));let K=W?.user||{};v0((E)=>{let w=typeof K.name==="string"&&K.name.trim()?K.name.trim():"You",u=typeof K.avatar_url==="string"?K.avatar_url.trim():null,d=typeof K.avatar_background==="string"&&K.avatar_background.trim()?K.avatar_background.trim():null;if(E.name===w&&E.avatar_url===u&&E.avatar_background===d)return E;return{name:w,avatar_url:u,avatar_background:d}});let F=(W?.agents||[]).find((E)=>E.id==="default");i$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,K=await U3(W);if(C0.current!==W)return;if(K)M_(K)}catch{}},[i$,$]);v(()=>{J3();let W=A2("sidebarWidth",null),K=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(E$.current=K,y$.current)y$.current.style.setProperty("--sidebar-width",`${K}px`)},[J3]);let m1=_0||a!==null,y3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.agent_id;if(!K)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let w=t$.current?.[K]||{id:K},u=w.name||null,d=w.avatar_url??w.avatarUrl??w.avatar??null,Y_=!1,e=!1;if(F&&F!==w.name)u=F,e=!0;if(E!==void 0){let h=typeof E==="string"?E.trim():null,G_=typeof d==="string"?d.trim():null,D_=h||null;if(D_!==(G_||null))d=D_,Y_=!0}if(!e&&!Y_)return;if(x_((h)=>{let D_={...h[K]||{id:K}};if(e)D_.name=u;if(Y_)D_.avatar_url=d;return{...h,[K]:D_}}),K==="default")i$(u,d,Y_?Date.now():null)},[i$]),E3=I((W)=>{if(!W||typeof W!=="object")return;let K=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(K===void 0&&F===void 0&&E===void 0)return;v0((w)=>{let u=typeof K==="string"&&K.trim()?K.trim():w.name||"You",d=F===void 0?w.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,Y_=E===void 0?w.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(w.name===u&&w.avatar_url===d&&w.avatar_background===Y_)return w;return{name:u,avatar_url:d,avatar_background:Y_}})},[]),g1=I((W)=>{if(!W||typeof W!=="object")return;let K=W.model??W.current;if(K!==void 0)m_(K);if(W.thinking_level!==void 0)g_(W.thinking_level??null);if(W.supports_thinking!==void 0)k_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)v_(W.provider_usage??null)},[]),v2=I(()=>{let W=$;WZ(W).then((K)=>{if(C0.current!==W)return;if(K)g1(K)}).catch(()=>{})},[g1,$]),M0=I(()=>{let W=$,K=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([XZ().catch(()=>({chats:[]})),O3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(C0.current!==W)return;let w=K(F?.chats),u=K(E?.chats);if(u.length===0){P0(w);return}let d=new Map(w.map((e)=>[e.chat_jid,e])),Y_=u.map((e)=>{let h=d.get(e.chat_jid);return h?{...e,...h,is_active:h.is_active??e.is_active}:e});Y_.sort((e,h)=>{if(e.chat_jid===W&&h.chat_jid!==W)return-1;if(h.chat_jid===W&&e.chat_jid!==W)return 1;let G_=Boolean(e.archived_at),D_=Boolean(h.archived_at);if(G_!==D_)return G_?1:-1;if(Boolean(e.is_active)!==Boolean(h.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(h.chat_jid))}),P0(Y_)}).catch(()=>{if(C0.current!==W)return;P0([])})},[$]),A0=I(()=>{O3(C).then((W)=>{let K=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];y0(K)}).catch(()=>{})},[C]),p9=I((W)=>{let K=W?.row_id;if(K==null)return;S0.current.add(K),a_((F)=>F.filter((E)=>E?.row_id!==K)),LZ(K,B3($)).then(()=>{T_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),V_("Failed to steer message","The queued message could not be sent as steering.","warning"),S0.current.delete(K),T_()})},[$,T_,a_,V_]),c9=I((W)=>{let K=W?.row_id;if(K==null)return;let F=C_.current.filter((E)=>E?.row_id!==K).length;S0.current.add(K),M(F),a_((E)=>E.filter((w)=>w?.row_id!==K)),BZ(K,B3($)).then(()=>{T_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),V_("Failed to remove message","The queued message could not be removed.","warning"),S0.current.delete(K),T_()})},[M,$,T_,a_,V_]),p1=I((W)=>{if(!W||typeof W!=="object")return;if(M0(),A0(),W?.queued==="followup"||W?.queued==="steer"){T_();return}let K=W?.command;if(K&&typeof K==="object"&&(K?.queued_followup||K?.queued_steer))T_()},[M0,A0,T_]),c1=I(()=>{if(m0.current)m0.current.abort(),m0.current=null;O0(null)},[]),Z1=I(async(W)=>{let K=String(W||"").trim();if(!K)return V_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(m0.current)m0.current.abort();let F=new AbortController;m0.current=F,O0({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await UZ(K,{signal:F.signal,chatJid:M8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,u)=>{if(w==="side_prompt_start")O0((d)=>d?{...d,status:"running"}:d)},onThinkingDelta:(w)=>{O0((u)=>u?{...u,thinking:`${u.thinking||""}${w||""}`}:u)},onTextDelta:(w)=>{O0((u)=>u?{...u,answer:`${u.answer||""}${w||""}`}:u)}});if(m0.current!==F)return!0;O0((w)=>w?{...w,answer:E?.result||w.answer||"",thinking:E?.thinking||w.thinking||"",model:E?.model||null,status:"success",error:null}:w)}catch(E){if(F.signal.aborted)return!0;O0((w)=>w?{...w,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:w)}finally{if(m0.current===F)m0.current=null}return!0},[$,V_]),h9=I(async({content:W})=>{let K=I8(W);if(!K)return!1;if(K.type==="help")return V_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(K.type==="clear")return c1(),V_("BTW cleared","Closed the side conversation panel.","info"),!0;if(K.type==="ask")return await Z1(K.question),!0;return!1},[c1,Z1,V_]),i9=I(()=>{if(b_?.question)Z1(b_.question)},[b_,Z1]),l9=I(async()=>{let W=T8(b_);if(!W)return;try{let K=await y2("default",W,null,[],m1?"queue":null,$);p1(K),V_(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(K){V_("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning")}},[b_,p1,m1,V_]),u2=I(()=>{v2(),M0(),A0(),T_(),K$()},[v2,M0,A0,T_,K$]);v(()=>{u2();let W=setInterval(()=>{v2(),M0(),A0(),T_()},60000);return()=>clearInterval(W)},[u2,v2,M0,A0,T_]),v(()=>{A0()},[A0]),v(()=>{let W=!1;L0(null);let K=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;P$()})};if(q)return X0(q),()=>{W=!0};if(V)return y9(V,50,0,$,m,C).then((F)=>{if(W)return;L0(F.results),H2(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),L0([]),H2(!1)}),()=>{W=!0};return X0().then(()=>{K()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,q,V,m,C,X0,P$,H2,L0]),v(()=>{let W=r0.current||$;g$.current.set(W,S())},[$,S]),v(()=>{let W=r0.current||$;if(W===$)return;g$.current.set(W,S()),r0.current=$,S0.current.clear(),s(g$.current.get($)||null),T_(),W$(),K$()},[$,W$,K$,T_,s,S]);let n9=I(()=>{let{currentHashtag:W,searchQuery:K,searchOpen:F}=J0.current||{};if(!W&&!K&&!F)Q0();u2()},[u2,Q0]),m2=I((W,K="streaming")=>{let F=S8({...W,...W&&W.status?{}:{status:K}});if(!F)return;let E=K2(F);if(E&&t_.current.has(E))return;c_((w)=>{let u=K2(w),d=Boolean(E&&u&&E===u),Y_={...d&&w?.artifact?w.artifact:{},...F.artifact||{}};return{...d&&w?w:{},...F,artifact:Y_,source:"live",originChatJid:F.originChatJid||$,openedAt:d&&w?.openedAt?w.openedAt:new Date().toISOString(),liveUpdatedAt:new Date().toISOString()}})},[$]),h1=I((W,K)=>{let F=K?.turn_id,E=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null,u=E?E===$:W==="connected"||W==="workspace_update";if(u)y3(K),E3(K);if(W==="ui_theme"){J8(K);return}if(W==="generated_widget_open"){if(!u)return;if(F&&!K_.current)Q_(F);m2(K,"loading");return}if(W==="generated_widget_delta"){if(!u)return;if(F&&!K_.current)Q_(F);m2(K,"streaming");return}if(W==="generated_widget_final"){if(!u)return;if(F&&!K_.current)Q_(F);m2(K,"final");return}if(W==="generated_widget_error"){if(!u)return;m2(K,"error");return}if(W==="generated_widget_close"){if(!u)return;let h=K2(K);c_((G_)=>{if(!G_||G_?.source!=="live")return G_;let D_=K2(G_);if(h&&D_&&h!==D_)return G_;return null});return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))G()}if(W==="connected"){n(null),i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),G0.current=null,D();let h=$;w9(h).then((w0)=>{if(C0.current!==h)return;if(!w0||w0.status!=="active"||!w0.data)return;let Y2=w0.data,N1=Y2.turn_id||Y2.turnId;if(N1)Q_(N1);if(J({clearSilence:!0}),O(Y2),w0.thought&&w0.thought.text)y_.current=w0.thought.text,l({text:w0.thought.text,totalLines:w0.thought.totalLines||0});if(w0.draft&&w0.draft.text)J_.current=w0.draft.text,i({text:w0.draft.text,totalLines:w0.draft.totalLines||0})}).catch((w0)=>{console.warn("Failed to fetch agent status:",w0)});let{currentHashtag:G_,searchQuery:D_,searchOpen:X$}=J0.current||{};if(!G_&&!D_&&!X$)Q0();u2();return}if(W==="agent_status"){if(!u){if(K?.type==="done"||K?.type==="error")M0(),A0();return}if(K.type==="done"||K.type==="error"){if(F&&K_.current&&F!==K_.current)return;if(K.type==="done"){k0(F||K_.current);let{currentHashtag:h,searchQuery:G_,searchOpen:D_}=J0.current||{};if(!h&&!G_&&!D_)Q0();if(K.context_usage)M_(K.context_usage)}if(u0.current=!1,D(),S0.current.clear(),M0(),T_(),i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null),K.type==="error")n({type:"error",title:K.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(F)Q_(F);if(J({running:!0,clearSilence:!0}),K.type==="thinking")J_.current="",y_.current="",i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0});s0.current=K,n((h)=>{if(h&&h.type===K.type&&h.title===K.title)return h;return K})}return}if(W==="agent_steer_queued"){if(!u)return;if(F&&K_.current&&F!==K_.current)return;let h=F||K_.current;if(!h)return;__.current=h,L_(h);return}if(W==="agent_followup_queued"){if(!u)return;let h=K?.row_id,G_=K?.content;if(h!=null&&typeof G_==="string"&&G_.trim())a_((D_)=>{if(D_.some((X$)=>X$?.row_id===h))return D_;return[...D_,{row_id:h,content:G_,timestamp:K?.timestamp||null,thread_id:K?.thread_id??null}]});T_();return}if(W==="agent_followup_consumed"){if(!u)return;let h=K?.row_id;if(h!=null){let w0=C_.current.filter((Y2)=>Y2.row_id!==h).length;M(w0),a_((Y2)=>Y2.filter((N1)=>N1.row_id!==h))}T_();let{currentHashtag:G_,searchQuery:D_,searchOpen:X$}=J0.current||{};if(!G_&&!D_&&!X$)Q0();return}if(W==="agent_followup_removed"){if(!u)return;let h=K?.row_id;if(h!=null){let G_=C_.current.filter((D_)=>D_.row_id!==h).length;S0.current.add(h),M(G_),a_((D_)=>D_.filter((X$)=>X$.row_id!==h))}T_();return}if(W==="agent_draft_delta"){if(!u)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)J_.current="";if(K?.delta)J_.current+=K.delta;let h=Date.now();if(!p0.current||h-p0.current>=100){p0.current=h;let G_=J_.current,D_=Q3(G_);if(j_.current)i((X$)=>({text:X$?.text||"",totalLines:D_,fullText:G_}));else i({text:G_,totalLines:D_})}return}if(W==="agent_draft"){if(!u)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",G_=K.mode||(K.kind==="plan"?"replace":"append"),D_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(K.kind==="plan")if(G_==="replace")n_(h);else n_((X$)=>(X$||"")+h);else if(!j_.current)J_.current=h,i({text:h,totalLines:D_});return}if(W==="agent_thought_delta"){if(!u)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)Q_(F);if(J({running:!0,clearSilence:!0}),K?.reset)y_.current="";if(typeof K?.delta==="string")y_.current+=K.delta;let h=Date.now();if(O_.current&&(!p$.current||h-p$.current>=100)){p$.current=h;let G_=y_.current;l((D_)=>({text:D_?.text||"",totalLines:Q3(G_),fullText:G_}))}return}if(W==="agent_thought"){if(!u)return;if(F&&K_.current&&F!==K_.current)return;if(F&&!K_.current)Q_(F);J({running:!0,clearSilence:!0});let h=K.text||"",G_=Number.isFinite(K.total_lines)?K.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!O_.current)y_.current=h,l({text:h,totalLines:G_});return}if(W==="model_changed"){if(!u)return;if(K?.model!==void 0)m_(K.model);if(K?.thinking_level!==void 0)g_(K.thinking_level??null);if(K?.supports_thinking!==void 0)k_(Boolean(K.supports_thinking));let h=$;U3(h).then((G_)=>{if(C0.current!==h)return;if(G_)M_(G_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:K}));return}if(O9(W)){if(!u)return;if(F9(W,K),W==="extension_ui_notify"&&typeof K?.message==="string")V_(K.message,null,K?.type||"info");if(W==="extension_ui_error"&&typeof K?.error==="string")V_("Extension UI error",K.error,"error",5000);return}let{currentHashtag:d,searchQuery:Y_,searchOpen:e}=J0.current;if(W==="agent_response"){if(!u)return;j1(),c0.current={post:K,turnId:K_.current}}if(!d&&!Y_&&!e&&u&&(W==="new_post"||W==="new_reply"||W==="agent_response"))L0((h)=>{if(!h)return[K];if(h.some((G_)=>G_.id===K.id))return h;return[...h,K]}),F$.current?.();if(W==="interaction_updated"){if(!u)return;if(d||Y_||e)return;L0((h)=>{if(!h)return h;if(!h.some((G_)=>G_.id===K.id))return h;return h.map((G_)=>G_.id===K.id?K:G_)})}if(W==="interaction_deleted"){if(!u)return;if(d||Y_||e)return;let h=K?.ids||[];if(h.length){if(G$(()=>{L0((G_)=>G_?G_.filter((D_)=>!h.includes(D_.id)):G_)}),l$.current)R2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[m2,D,G,$,R2,J,k0,G$,M0,A0,Q0,j1,Q_,O,y3,E3,v2,T_,a_]);v(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=h1,W.reset=()=>{j1(),D(),n(null),i({text:"",totalLines:0}),n_(""),l({text:"",totalLines:0}),t(null)},W.finalize=()=>D3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[D,D3,h1,j1]),r6({handleSseEvent:h1,handleConnectionStatusChange:f9,loadPosts:X0,onWake:n9,chatJid:$}),v(()=>{if(!D2||D2.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let K=W.slice(5);Z2(K),history.replaceState(null,"",location.pathname+location.search)},[D2,Z2]);let i1=a!==null;v(()=>{if(Y!=="connected")return;let K=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:w}=J0.current||{},u=!F&&!E&&!w;if(i1){if(u)Q0();T_(),W$(),K$()}else{if(u)Q0();W$(),K$()}},i1?15000:60000);return()=>clearInterval(K)},[Y,i1,W$,K$,T_,Q0]),v(()=>{return D9(()=>{W$(),K$(),T_()})},[W$,K$,T_]);let d9=I(()=>{V2((W)=>!W)},[]),k3=I((W)=>{if(typeof window>"u")return;let K=String(W||"").trim();if(!K||K===$)return;let F=q2(window.location.href,K,{chatOnly:j});window.location.assign(F)},[j,$]),A3=I(async()=>{if(typeof window>"u"||!A_?.chat_jid)return;let W=Date.now(),K=J9();if(!K)return;if(k$.current||W<B2.current||K.inFlight||W<K.cooldownUntil)return;k$.current=!0,K.inFlight=!0,$2(!0);try{let F=A_.display_name||A_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let w=E.trim(),u=w.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||A_.agent_name||"",d=await qZ(A_.chat_jid,{displayName:w,agentName:u});await Promise.allSettled([M0(),A0()]);let Y_=d?.branch?.agent_name||u||A_.agent_name||"",e=d?.branch?.display_name||w||Y_;V_("Branch renamed",`${e} (@${Y_})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),w=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;V_("Could not rename branch",w||"Could not rename branch.","warning",5000)}finally{k$.current=!1,$2(!1);let F=Date.now()+NZ;B2.current=F;let E=J9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[A_,M0,A0,$2,V_]),w3=I(async(W=null)=>{if(typeof window>"u")return;let K=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=K||A_?.chat_jid||F;if(!E){V_("Could not prune branch","No active session is selected yet.","warning",4000);return}let w=(A_?.chat_jid===E?A_:null)||I_.find((e)=>e?.chat_jid===E)||W0.find((e)=>e?.chat_jid===E)||null;if(w?.chat_jid===(w?.root_chat_jid||w?.chat_jid)){V_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let d=`@${w?.agent_name||E}${w?.chat_jid?` — ${w.chat_jid}`:""}`;if(!window.confirm(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await VZ(E),await Promise.allSettled([M0(),A0()]);let e=w?.root_chat_jid||"web:default";V_("Branch pruned",`${d} has been archived.`,"info",3000);let h=q2(window.location.href,e,{chatOnly:j});window.location.assign(h)}catch(e){let h=e instanceof Error?e.message:String(e||"Could not prune branch.");V_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[W0,j,A_,I_,$,M0,A0,V_]),o9=I(async(W)=>{let K=typeof W==="string"?W.trim():"";if(!K||typeof P9!=="function")return;try{let F=await P9(K);await Promise.allSettled([M0(),A0()]);let E=F?.branch,w=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():K,u=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:w;V_("Branch restored",`Restored ${u}.`,"info",3200);let d=q2(window.location.href,w,{chatOnly:j});window.location.assign(d)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");V_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,M0,A0,V_]);v(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{w_({status:"running",message:"Preparing a new chat branch…"});let K=await h2(N);if(W)return;let F=K?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let w=q2(window.location.href,E,{chatOnly:!0});window.location.replace(w)}catch(K){if(W)return;w_({status:"error",message:f1(K)})}})(),()=>{W=!0}},[Z,N]);let s9=I((W)=>{if(!W||typeof W!=="object")return;let K=K2(W);if(K)t_.current.delete(K);c_({...W,openedAt:new Date().toISOString()})},[]),r9=I(()=>{c_((W)=>{let K=K2(W);if(W?.source==="live"&&K)t_.current.add(K);return null})},[]);v(()=>{t_.current.clear(),c_(null)},[$]);let a9=I(async()=>{if(typeof window>"u")return;try{let K=(await h2($))?.branch,F=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([M0(),A0()]);let E=K?.agent_name?`@${K.agent_name}`:F;V_("New branch created",`Switched to ${E}.`,"info",2500);let w=q2(window.location.href,F,{chatOnly:j});window.location.assign(w)}catch(W){V_("Could not create branch",f1(W),"warning",5000)}},[j,$,M0,A0,V_]),t9=I(async()=>{if(typeof window>"u"||X)return;let W=K9($);if(!W){V_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=Q9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let K=W9(W);if(!K){V_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}X9(K,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await h2($))?.branch,w=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let d=await Y4();P0(Array.isArray(d?.chats)?d.chats:[])}catch{}try{let d=await O3(C);y0(Array.isArray(d?.chats)?d.chats:[])}catch{}let u=q2(window.location.href,w,{chatOnly:!0});q9(K,u)}catch(F){V9(K),V_("Could not open branch window",f1(F),"error",5000)}},[$,C,X,V_]);v(()=>{if(!E0)return;if(typeof window>"u")return;let W=y$.current;if(!W)return;if(!T$.current){let K=A2("editorWidth",null),F=E$.current||280;T$.current=Number.isFinite(K)?K:F}if(W.style.setProperty("--editor-width",`${T$.current}px`),!c$.current){let K=A2("dockHeight",null);c$.current=Number.isFinite(K)?K:200}W.style.setProperty("--dock-height",`${c$.current}px`)},[E0]),v(()=>{if(!q0||j)return;let W=(K)=>{if(K.ctrlKey&&K.key==="`")K.preventDefault(),D$()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[D$,q0,j]),v(()=>{if(j)return;let W=(K)=>{if(K.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault(),b$();return}if(K.key==="Escape"&&H_)K.preventDefault(),d0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[b$,d0,H_,j]);let e9=Boolean(q_&&q_===(a?.turn_id||X_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${B_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${B_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${j$?"":" workspace-collapsed"}${E0?" editor-open":""}${j?" chat-only":""}${H_?" zen-mode":""}`} ref=${y$}>
            ${!j&&B`
                <${l6}
                    onFileSelect=${j2}
                    visible=${j$}
                    active=${j$||E0}
                    onOpenEditor=${Y0}
                    onOpenTerminalTab=${m$}
                    onToggleTerminal=${q0?D$:void 0}
                    terminalVisible=${Boolean(q0&&h_)}
                />
                <button
                    class=${`workspace-toggle-tab${j$?" open":" closed"}`}
                    onClick=${d9}
                    title=${j$?"Hide workspace":"Show workspace"}
                    aria-label=${j$?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${x9} onTouchStart=${I9}></div>
            `}
            ${L2&&B`
                <div class="editor-pane-container">
                    ${H_&&B`<div class="zen-hover-zone"></div>`}
                    ${E0&&B`
                        <${d6}
                            tabs=${D0}
                            activeId=${N0}
                            onActivate=${I$}
                            onClose=${Z$}
                            onCloseOthers=${o$}
                            onCloseAll=${u$}
                            onTogglePin=${s$}
                            onTogglePreview=${l0}
                            previewTabs=${g0}
                            onToggleDock=${q0?D$:void 0}
                            dockVisible=${q0&&h_}
                            onToggleZen=${b$}
                            zenMode=${H_}
                        />
                    `}
                    ${E0&&B`<div class="editor-pane-host" ref=${a$}></div>`}
                    ${E0&&N0&&g0.has(N0)&&B`
                        <${s6}
                            getContent=${()=>N$.current?.getContent?.()}
                            path=${N0}
                            onClose=${()=>l0(N0)}
                        />
                    `}
                    ${q0&&h_&&B`<div class="dock-splitter" onMouseDown=${C9} onTouchStart=${T9}></div>`}
                    ${q0&&B`<div class=${`dock-panel${h_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${D$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${L$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${M9} onTouchStart=${b9}></div>
            `}
            <div class="container">
                ${V&&Y9()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${A_?.agent_name?`@${A_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${A_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${I_.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>k3(W.currentTarget.value)}
                                    >
                                        ${I_.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${A_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${A3}
                                    title=${f$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${f$}
                                >
                                    ${f$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${A_?.chat_jid&&A_.chat_jid!==(A_.root_chat_jid||A_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${w3}
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
                        <button class="back-btn" onClick=${R9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${V} · ${r}`}</span>
                    </div>
                `}
                <${K6}
                    posts=${D2}
                    hasMore=${u1?R1:!1}
                    onLoadMore=${u1?H3:void 0}
                    timelineRef=${U$}
                    onHashtagClick=${S9}
                    onMessageRef=${C2}
                    onScrollToMessage=${Z2}
                    onFileRef=${U2}
                    onPostClick=${void 0}
                    onDeletePost=${g9}
                    onOpenWidget=${s9}
                    emptyMessage=${q?`No posts with #${q}`:V?`No results for "${V}"`:void 0}
                    agents=${F_}
                    user=${o0}
                    reverse=${u1}
                    removingPostIds=${i0}
                    searchQuery=${V}
                />
                <${n8}
                    status=${a}
                    draft=${$_}
                    plan=${W_}
                    thought=${u_}
                    pendingRequest=${Z_}
                    intent=${R}
                    turnId=${X_}
                    steerQueued=${e9}
                    onPanelToggle=${U_}
                />
                <${f8}
                    session=${b_}
                    onClose=${c1}
                    onRetry=${i9}
                    onInject=${l9}
                />
                <${m8}
                    widget=${T0}
                    onClose=${r9}
                />
                <${K8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:K}=J0.current||{};if(!W&&!K)X0(),P$()}}
                    onFocus=${P$}
                    searchMode=${A}
                    searchScope=${m}
                    onSearch=${v9}
                    onSearchScopeChange=${p}
                    onEnterSearch=${u9}
                    onExitSearch=${m9}
                    fileRefs=${x}
                    onRemoveFileRef=${w$}
                    onClearFileRefs=${I2}
                    onSetFileRefs=${M2}
                    messageRefs=${c}
                    onRemoveMessageRef=${T2}
                    onClearMessageRefs=${f2}
                    onSetMessageRefs=${S2}
                    onSwitchChat=${k3}
                    onRenameSession=${A3}
                    isRenameSessionInProgress=${f$}
                    onCreateSession=${a9}
                    onDeleteSession=${w3}
                    onRestoreSession=${o9}
                    activeEditorPath=${j?null:N0}
                    onAttachEditorFile=${j?void 0:b2}
                    onOpenFilePill=${U2}
                    followupQueueCount=${o_}
                    followupQueueItems=${j0}
                    onInjectQueuedFollowup=${p9}
                    onRemoveQueuedFollowup=${c9}
                    onSubmitIntercept=${h9}
                    onMessageResponse=${p1}
                    onSubmitError=${U}
                    onPopOutChat=${X?void 0:t9}
                    isAgentActive=${m1}
                    activeChatAgents=${W0}
                    currentChatJid=${$}
                    connectionStatus=${Y}
                    activeModel=${r_}
                    modelUsage=${E_}
                    thinkingLevel=${d_}
                    supportsThinking=${p_}
                    contextUsage=${$0}
                    notificationsEnabled=${b0}
                    notificationPermission=${x$}
                    onToggleNotifications=${H0}
                    onModelChange=${m_}
                    onModelStateChange=${g1}
                />
                <${d8}
                    request=${Z_}
                    onRespond=${()=>{t(null),G0.current=null}}
                />
            </div>
        </div>
    `}function FZ(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${OZ} locationParams=${_} />`}a3(B`<${FZ} />`,document.getElementById("app"));

//# debugId=A7C7BEB4B95E87FE64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
