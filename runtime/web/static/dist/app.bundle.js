var qY=Object.defineProperty;var NY=(_)=>_;function KY(_,$){this[_]=NY.bind(null,$)}var GY=(_,$)=>{for(var j in $)qY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:KY.bind($,j)})};var D8,V1,L2,XY,E4,j2,W2,F2,H2,x6,E6,k6,z2,A8={},J8=[],VY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,E8=Array.isArray;function q4(_,$){for(var j in $)_[j]=$[j];return _}function P6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function k8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?D8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return H8(_,q,Q,Z,null)}function H8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++L2:Z,__i:-1,__u:0};return Z==null&&V1.vnode!=null&&V1.vnode(Y),Y}function M8(_){return _.children}function G5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function BY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=q4({},$);Y.__v=$.__v+1,V1.vnode&&V1.vnode(Y),C6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,D2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&A2(Y)}}function A2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),A2(_)}function M6(_){(!_.__d&&(_.__d=!0)&&E4.push(_)&&!O8.__r++||j2!=V1.debounceRendering)&&((j2=V1.debounceRendering)||W2)(O8)}function O8(){try{for(var _,$=1;E4.length;)E4.length>$&&E4.sort(F2),_=E4.shift(),$=E4.length,BY(_)}finally{E4.length=O8.__r=0}}function J2(_,$,j,Q,Z,Y,q,N,K,G,X){var V,B,F,D,k,J,H,E=Q&&Q.__k||J8,M=$.length;for(K=UY(j,$,E,K,M),V=0;V<M;V++)(F=j.__k[V])!=null&&(B=F.__i!=-1&&E[F.__i]||A8,F.__i=V,J=C6(_,F,B,Z,Y,q,N,K,G,X),D=F.__e,F.ref&&B.ref!=F.ref&&(B.ref&&S6(B.ref,null,F),X.push(F.ref,F.__c||D,F)),k==null&&D!=null&&(k=D),(H=!!(4&F.__u))||B.__k===F.__k?K=O2(F,K,_,H):typeof F.type=="function"&&J!==void 0?K=J:D&&(K=D.nextSibling),F.__u&=-7);return j.__e=k,K}function UY(_,$,j,Q,Z){var Y,q,N,K,G,X=j.length,V=X,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=H8(null,q,null,null,null):E8(q)?q=_.__k[Y]=H8(M8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=H8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+B,q.__=_,q.__b=_.__b+1,N=null,(G=q.__i=LY(q,j,K,V))!=-1&&(V--,(N=j[G])&&(N.__u|=2)),N==null||N.__v==null?(G==-1&&(Z>X?B--:Z<X&&B++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?B--:G==K+1?B++:(G>K?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<X;Y++)(N=j[Y])!=null&&(2&N.__u)==0&&(N.__e==Q&&(Q=X5(N)),k2(N,N));return Q}function O2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=O2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function LY(_,$,j,Q){var Z,Y,q,N=_.key,K=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&N==null||X&&N==G.key&&K==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&N==G.key&&K==G.type)return q}return-1}function Q2(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||VY.test($)?j:j+"px"}function F8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||Q2(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||Q2(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(H2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=x6,_.addEventListener($,Y?k6:E6,Y)):_.removeEventListener($,Y?k6:E6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(N){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Z2(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=x6++;else if($.t<j.u)return;return j(V1.event?V1.event($):$)}}}function C6(_,$,j,Q,Z,Y,q,N,K,G){var X,V,B,F,D,k,J,H,E,M,p,b,n,t,y,C=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[N=$.__e=j.__e]),(X=V1.__b)&&X($);_:if(typeof C=="function")try{if(H=$.props,E=C.prototype&&C.prototype.render,M=(X=C.contextType)&&Q[X.__c],p=X?M?M.props.value:X.__:Q,j.__c?J=(V=$.__c=j.__c).__=V.__E:(E?$.__c=V=new C(H,p):($.__c=V=new G5(H,p),V.constructor=C,V.render=FY),M&&M.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),E&&V.__s==null&&(V.__s=V.state),E&&C.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=q4({},V.__s)),q4(V.__s,C.getDerivedStateFromProps(H,V.__s))),F=V.props,D=V.state,V.__v=$,B)E&&C.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),E&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(E&&C.getDerivedStateFromProps==null&&H!==F&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,p),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,p)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(A){A&&(A.__=$)}),J8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,p),E&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(F,D,k)})}if(V.context=p,V.props=H,V.__P=_,V.__e=!1,b=V1.__r,n=0,E)V.state=V.__s,V.__d=!1,b&&b($),X=V.render(V.props,V.state,V.context),J8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,b&&b($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++n<25);V.state=V.__s,V.getChildContext!=null&&(Q=q4(q4({},Q),V.getChildContext())),E&&!B&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(F,D)),t=X!=null&&X.type===M8&&X.key==null?E2(X.props.children):X,N=J2(_,E8(t)?t:[t],$,j,Q,Z,Y,q,N,K,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),J&&(V.__E=V.__=null)}catch(A){if($.__v=null,K||Y!=null)if(A.then){for($.__u|=K?160:128;N&&N.nodeType==8&&N.nextSibling;)N=N.nextSibling;Y[Y.indexOf(N)]=null,$.__e=N}else{for(y=Y.length;y--;)P6(Y[y]);I6($)}else $.__e=j.__e,$.__k=j.__k,A.then||I6($);V1.__e(A,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):N=$.__e=WY(j.__e,$,j,Q,Z,Y,q,K,G);return(X=V1.diffed)&&X($),128&$.__u?void 0:N}function I6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(I6))}function D2(_,$,j){for(var Q=0;Q<j.length;Q++)S6(j[Q],j[++Q],j[++Q]);V1.__c&&V1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){V1.__e(Y,Z.__v)}})}function E2(_){return typeof _!="object"||_==null||_.__b>0?_:E8(_)?_.map(E2):q4({},_)}function WY(_,$,j,Q,Z,Y,q,N,K){var G,X,V,B,F,D,k,J=j.props||A8,H=$.props,E=$.type;if(E=="svg"?Z="http://www.w3.org/2000/svg":E=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((F=Y[G])&&"setAttribute"in F==!!E&&(E?F.localName==E:F.nodeType==3)){_=F,Y[G]=null;break}}if(_==null){if(E==null)return document.createTextNode(H);_=document.createElementNS(Z,E,H.is&&H),N&&(V1.__m&&V1.__m($,Y),N=!1),Y=null}if(E==null)J===H||N&&_.data==H||(_.data=H);else{if(Y=Y&&D8.call(_.childNodes),!N&&Y!=null)for(J={},G=0;G<_.attributes.length;G++)J[(F=_.attributes[G]).name]=F.value;for(G in J)F=J[G],G=="dangerouslySetInnerHTML"?V=F:G=="children"||(G in H)||G=="value"&&("defaultValue"in H)||G=="checked"&&("defaultChecked"in H)||F8(_,G,null,F,Z);for(G in H)F=H[G],G=="children"?B=F:G=="dangerouslySetInnerHTML"?X=F:G=="value"?D=F:G=="checked"?k=F:N&&typeof F!="function"||J[G]===F||F8(_,G,F,J[G],Z);if(X)N||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),J2($.type=="template"?_.content:_,E8(B)?B:[B],$,j,Q,E=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),N,K),Y!=null)for(G=Y.length;G--;)P6(Y[G]);N||(G="value",E=="progress"&&D==null?_.removeAttribute("value"):D!=null&&(D!==_[G]||E=="progress"&&!D||E=="option"&&D!=J[G])&&F8(_,G,D,J[G],Z),G="checked",k!=null&&k!=_[G]&&F8(_,G,k,J[G],Z))}return _}function S6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){V1.__e(Z,j)}}function k2(_,$,j){var Q,Z;if(V1.unmount&&V1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||S6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){V1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&k2(Q[Z],$,j||typeof _.type!="function");j||P6(_.__e),_.__c=_.__=_.__e=void 0}function FY(_,$,j){return this.constructor(_,j)}function M4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),V1.__&&V1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],C6($,_=(!Q&&j||$).__k=k8(M8,null,[_]),Z||A8,A8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?D8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),D2(Y,_,q)}function M2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,M6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+z2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}D8=J8.slice,V1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(N){_=N}throw _}},L2=0,XY=function(_){return _!=null&&_.constructor===void 0},G5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q4({},this.state),typeof _=="function"&&(_=_(q4({},j),this.props)),_&&q4(j,_),_!=null&&this.__v&&($&&this._sb.push($),M6(this))},G5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),M6(this))},G5.prototype.render=M8,E4=[],W2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F2=function(_,$){return _.__v.__b-$.__v.__b},O8.__r=0,H2=/(PointerCapture)$|Capture$/i,x6=0,E6=Z2(!1),k6=Z2(!0),z2=0;var k4,X1,D6,Y2,V5=0,I2=[],H1=V1,q2=H1.__b,N2=H1.__r,K2=H1.diffed,G2=H1.__c,X2=H1.unmount,V2=H1.__;function B5(_,$){H1.__h&&H1.__h(X1,_,V5||$),V5=0;var j=X1.__H||(X1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return V5=1,y6(S2,_)}function y6(_,$,j){var Q=B5(k4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):S2(void 0,$),function(N){var K=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(K,N);K!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=X1,!X1.__f)){var Z=function(N,K,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(B){return B.__c});if(X.every(function(B){return!B.__N}))return!Y||Y.call(this,N,K,G);var V=Q.__c.props!==N;return X.some(function(B){if(B.__N){var F=B.__[0];B.__=B.__N,B.__N=void 0,F!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,N,K,G)||V};X1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=X1;X1.componentWillUpdate=function(N,K,G){if(this.__e){var X=Y;Y=void 0,Z(N,K,G),Y=X}q&&q.call(this,N,K,G)},X1.shouldComponentUpdate=Z}return Q.__N||Q.__}function v(_,$){var j=B5(k4++,3);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,X1.__H.__h.push(j))}function v5(_,$){var j=B5(k4++,4);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,X1.__h.push(j))}function T(_){return V5=5,R0(function(){return{current:_}},[])}function T2(_,$,j){V5=6,v5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function R0(_,$){var j=B5(k4++,7);return R6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return V5=8,R0(function(){return _},$)}function x2(_){var $=X1.context[_.__c],j=B5(k4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(X1)),$.props.value):_.__}function P2(_,$){H1.useDebugValue&&H1.useDebugValue($?$(_):_)}function C2(_){var $=B5(k4++,10),j=g();return $.__=_,X1.componentDidCatch||(X1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function HY(){for(var _;_=I2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(z8),$.__h.some(T6),$.__h=[]}catch(j){$.__h=[],H1.__e(j,_.__v)}}}H1.__b=function(_){X1=null,q2&&q2(_)},H1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),V2&&V2(_,$)},H1.__r=function(_){N2&&N2(_),k4=0;var $=(X1=_.__c).__H;$&&(D6===X1?($.__h=[],X1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(z8),$.__h.some(T6),$.__h=[],k4=0)),D6=X1},H1.diffed=function(_){K2&&K2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(I2.push($)!==1&&Y2===H1.requestAnimationFrame||((Y2=H1.requestAnimationFrame)||zY)(HY)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D6=X1=null},H1.__c=function(_,$){$.some(function(j){try{j.__h.some(z8),j.__h=j.__h.filter(function(Q){return!Q.__||T6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],H1.__e(Q,j.__v)}}),G2&&G2(_,$)},H1.unmount=function(_){X2&&X2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{z8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&H1.__e($,j.__v))};var B2=typeof requestAnimationFrame=="function";function zY(_){var $,j=function(){clearTimeout(Q),B2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);B2&&($=requestAnimationFrame(j))}function z8(_){var $=X1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X1=$}function T6(_){var $=X1;_.__c=_.__(),X1=$}function R6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function S2(_,$){return typeof $=="function"?$(_):$}var y2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],N=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=N:q===4?Q[1]=Object.assign(Q[1]||{},N):q===5?(Q[1]=Q[1]||{})[$[++Y]]=N:q===6?Q[1][$[++Y]]+=N+"":q?(Z=_.apply(N,y2(_,N,j,["",null])),Q.push(Z),N[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(N)}return Q},U2=new Map;function AY(_){var $=U2.get(this);return $||($=new Map,U2.set(this,$)),($=y2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",N="",K=[0],G=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,B,q):Y===3&&(B||q)?(K.push(3,B,q),Y=2):Y===2&&q==="..."&&B?K.push(4,B,0):Y===2&&q&&!B?K.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(K.push(Y,0,q,Z),Y=6),B&&(K.push(Y,B,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Q=j[X][V],Y===1?Q==="<"?(G(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:N?Q===N?N="":q+=Q:Q==='"'||Q==="'"?N=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][V+1]===">")?(G(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var U=AY.bind(k8);var i1={};GY(i1,{uploadWorkspaceFile:()=>T8,uploadMedia:()=>h6,updateWorkspaceFile:()=>gY,submitAdaptiveCardAction:()=>p6,streamSidePrompt:()=>uY,stopAutoresearch:()=>CY,steerAgentQueueItem:()=>wY,setWorkspaceVisibility:()=>p5,setAgentThoughtVisibility:()=>n6,sendPeerAgentMessage:()=>TY,sendAgentMessage:()=>l4,searchPosts:()=>u6,restoreChatBranch:()=>IY,respondToAgentRequest:()=>I8,renameWorkspaceFile:()=>s6,renameChatBranch:()=>kY,removeAgentQueueItem:()=>RY,pruneChatBranch:()=>MY,moveWorkspaceEntry:()=>a6,getWorkspaceTree:()=>m5,getWorkspaceRawUrl:()=>x8,getWorkspaceFile:()=>h5,getWorkspaceDownloadUrl:()=>P8,getWorkspaceBranch:()=>vY,getTimeline:()=>c4,getThumbnailUrl:()=>i6,getThread:()=>f6,getPostsByHashtag:()=>w6,getMediaUrl:()=>x_,getMediaText:()=>d6,getMediaInfo:()=>U5,getMediaBlob:()=>fY,getChatBranches:()=>EY,getAutoresearchStatus:()=>PY,getAgents:()=>b6,getAgentThought:()=>l6,getAgentStatus:()=>m6,getAgentQueueState:()=>yY,getAgentModels:()=>b5,getAgentContext:()=>xY,getActiveChatAgents:()=>g6,forkChatBranch:()=>g5,dismissAutoresearch:()=>SY,deleteWorkspaceFile:()=>t6,deletePost:()=>v6,createWorkspaceFile:()=>o6,createReply:()=>DY,createPost:()=>OY,attachWorkspaceFile:()=>r6,addToWhitelist:()=>c6,SSEClient:()=>C8});async function r0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function R2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function JY(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:N}=await j.read();if(N)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let G of K){let X=R2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=R2(Z);if(Y)$(Y.event,Y.data)}async function c4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return r0(Q)}async function w6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function u6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",N=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${N}${K}`)}async function f6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function OY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function DY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function v6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return r0(Z,{method:"DELETE"})}async function l4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",N={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")N.mode=Z;return r0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(N)})}async function g6(){return r0("/agent/active-chats")}async function EY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${Q}`)}async function g5(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function kY(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function MY(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function IY(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function TY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function b6(){return r0("/agent/roster")}async function m6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function xY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function PY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function CY(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function SY(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function yY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function RY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function wY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function b5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function h6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function I8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function p6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function uY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await JY(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function c6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function l6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function n6(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function x_(_){return`/media/${_}`}function i6(_){return`/media/${_}/thumbnail`}async function U5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function d6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function fY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function m5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(Q)}async function vY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function h5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return r0(Z)}async function gY(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function r6(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function T8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",N=await fetch(""+q,{method:"POST",body:Q});if(!N.ok){let K=await N.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${N.status}`);throw G.status=N.status,G.code=K.code,G}return N.json()}async function o6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function s6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function a6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function t6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function p5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function x8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function P8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class C8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function S8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function bY(_,$){let j=S8(_),Q=S8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function e6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function _$(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function mY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function hY(_,$,j=0,Q=(Z)=>Z){let Z=S8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=mY(Y.length,j),N=Y.map((K)=>S8(Q(K)));for(let K of q)if(N[K].startsWith(Z))return K;for(let K of q)if(N[K].includes(Z))return K;return-1}function $$(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(bY(Y,$))return j}return hY(Z,$,0,Q)}function U_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function L5(_,$=!1){let j=U_(_);if(j===null)return $;return j==="true"}function W5(_,$=null){let j=U_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function y8(_){return String(_||"").trim().toLowerCase()}function j$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return y8($[1]||"")}function pY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=y8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function w2(_,$,j={}){let Q=j$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return pY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return y8(Y?.agent_name).startsWith(Q)})}function Q$(_){let $=y8(_);return $?`@${$} `:""}function u2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function R8(_){let $=Z$(_);return $?`@${$}`:""}function Z$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function w8(_,$=""){let j=String(_||""),Q=Z$(j),Z=Z$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function f2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function cY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function u8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=cY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function v2(_,$,j){let Q=R8(_),Z=R8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function lY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function N4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return N4(_)?"Compacting context":"Working..."}function nY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function v8(_,$=Date.now()){let j=lY(_);if(j===null)return null;return nY(Math.max(0,$-j))}function g_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let N=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${N} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${K}>${$}</span>
      ${Q&&U`
        <button
          class=${G}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var iY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function dY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",N=`${Q!=null?`Context: ${g2(Q)} / ${g2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${N}
            aria-label="Compact context"
            onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),$?.()}}
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
                    stroke-dasharray=${`${X} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function g2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function rY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function oY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function sY(_){let $=rY(_||""),j=oY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Y$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return U`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=sY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return U`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&U`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&U`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((N)=>U`
                                        <${g_}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((N)=>{let K=N.split("/").pop()||N;return U`
                                            <${g_}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${K}
                                                title=${N}
                                                onClick=${()=>Q?.(N)}
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
                                onClick=${()=>$?.(Z)}
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
                                onClick=${()=>j?.(Z)}
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
    `}function b2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:N,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:F,activeModel:D=null,modelUsage:k=null,thinkingLevel:J=null,supportsThinking:H=!1,contextUsage:E=null,onContextCompact:M,notificationsEnabled:p=!1,notificationPermission:b="default",onToggleNotifications:n,onModelChange:t,onModelStateChange:y,activeEditorPath:C=null,onAttachEditorFile:A,onOpenFilePill:P,followupQueueItems:m=[],onInjectQueuedFollowup:Q0,onRemoveQueuedFollowup:c,onSubmitIntercept:_0,onMessageResponse:e,onPopOutChat:q0,isAgentActive:K0=!1,activeChatAgents:G0=[],currentChatJid:W0="web:default",connectionStatus:A0="connected",onSetFileRefs:J0,onSetMessageRefs:n0,onSubmitError:P0,onSwitchChat:k0,onRenameSession:i0,isRenameSessionInProgress:d0=!1,onCreateSession:g0,onDeleteSession:s0,onRestoreSession:f0,showQueueStack:e0=!0,statusNotice:F0=null}){let[b0,_1]=g(""),[$1,e1]=g(""),[z1,a0]=g([]),[p1,O1]=g(!1),[Z1,v0]=g([]),[y1,D1]=g(0),[s,X0]=g(!1),[L0,N0]=g([]),[C0,S0]=g(0),[w0,E0]=g(!1),[y0,p0]=g(!1),[z0,u0]=g(!1),[H0,j0]=g(!1),[S,a]=g([]),[U0,O0]=g(0),[l0,j1]=g(0),[A1,Y1]=g(!1),[c1,e_]=g(0),[K_,d1]=g(null),[G_,__]=g(()=>Date.now()),t0=T(null),$_=T(null),_4=T(null),C_=T(null),a4=T(null),y4=T(null),R1=T(null),X_=T(null),T1=T({value:"",updatedAt:0}),J1=T(0),q1=T(!1),S_=200,y_=(L)=>{let u=new Set,l=[];for(let h of L||[]){if(typeof h!=="string")continue;let M0=h.trim();if(!M0||u.has(M0))continue;u.add(M0),l.push(M0)}return l},N1=()=>{let L=U_("piclaw_compose_history");if(!L)return[];try{let u=JSON.parse(L);if(!Array.isArray(u))return[];return y_(u)}catch{return[]}},j_=(L)=>{Q1("piclaw_compose_history",JSON.stringify(L))},m0=T(N1()),E1=T(-1),H_=T(""),r1=b0.trim()||z1.length>0||K.length>0||V.length>0,R4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),h_=typeof window<"u"&&typeof Notification<"u",w4=typeof window<"u"?Boolean(window.isSecureContext):!1,t4=h_&&w4&&b!=="denied",c_=b==="granted"&&p,R_=N4(F0),x5=f8(F0),P5=typeof F0?.detail==="string"&&F0.detail.trim()?F0.detail.trim():"",K1=R_?v8(F0,G_):null,x1=c_?"Disable notifications":"Enable notifications",e4=z1.length>0||K.length>0||V.length>0,z_=A0==="disconnected"?"Reconnecting":String(A0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(L)=>L.toUpperCase()),o1=A0==="disconnected"?"Reconnecting":`Connection: ${z_}`,u1=(Array.isArray(G0)?G0:[]).filter((L)=>!L?.archived_at),k1=(()=>{for(let L of Array.isArray(G0)?G0:[]){let u=typeof L?.chat_jid==="string"?L.chat_jid.trim():"";if(u&&u===W0)return L}return null})(),w1=Boolean(k1&&k1.chat_jid===(k1.root_chat_jid||k1.chat_jid)),L1=R0(()=>{let L=new Set,u=[];for(let l of Array.isArray(G0)?G0:[]){let h=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!h||h===W0||L.has(h))continue;if(!(typeof l?.agent_name==="string"?l.agent_name.trim():""))continue;L.add(h),u.push(l)}return u},[G0,W0]),A_=L1.length>0,J_=A_&&typeof k0==="function",O_=A_&&typeof f0==="function",l_=Boolean(d0||q1.current),s1=!j&&typeof i0==="function"&&!l_,l1=!j&&typeof g0==="function",D_=!j&&typeof s0==="function"&&!w1,$4=!j&&(J_||O_||s1||l1||D_),W1=D||"",n_=H&&J?` (${J})`:"",u4=n_.trim()?`${J}`:"",f4=typeof k?.hint_short==="string"?k.hint_short.trim():"",E_=[u4||null,f4||null].filter(Boolean).join(" • "),v4=[W1?`Current model: ${W1}${n_}`:null,k?.plan?`Plan: ${k.plan}`:null,f4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),_5=y0?"Switching model…":v4.join(" • ")||`Current model: ${W1}${n_} (tap to open model picker)`,w_=(L)=>{if(!L||typeof L!=="object")return;let u=L.model??L.current;if(typeof y==="function")y({model:u??null,thinking_level:L.thinking_level??null,supports_thinking:L.supports_thinking,provider_usage:L.provider_usage??null});if(u&&typeof t==="function")t(u)},u_=(L)=>{let u=L||t0.current;if(!u)return;u.style.height="auto",u.style.height=`${u.scrollHeight}px`,u.style.overflowY="hidden"},g4=(L)=>{if(!L.startsWith("/")||L.includes(`
`)){X0(!1),v0([]);return}let u=L.toLowerCase().split(" ")[0];if(u.length<1){X0(!1),v0([]);return}let l=iY.filter((h)=>h.name.startsWith(u)||h.name.replace(/-/g,"").startsWith(u.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===u))E0(!1),N0([]),v0(l),D1(0),X0(!0);else X0(!1),v0([])},j4=(L)=>{let u=b0,l=u.indexOf(" "),h=l>=0?u.slice(l):"",M0=L.name+h;_1(M0),X0(!1),v0([]),requestAnimationFrame(()=>{let F1=t0.current;if(!F1)return;let I1=M0.length;F1.selectionStart=I1,F1.selectionEnd=I1,F1.focus()})},$5=(L)=>{if(j$(L)==null){E0(!1),N0([]);return}let u=w2(u1,L,{currentChatJid:W0});if(u.length>0&&!(u.length===1&&Q$(u[0].agent_name).trim().toLowerCase()===String(L||"").trim().toLowerCase()))X0(!1),v0([]),N0(u),S0(0),E0(!0);else E0(!1),N0([])},f_=(L)=>{let u=Q$(L?.agent_name);if(!u)return;_1(u),E0(!1),N0([]),requestAnimationFrame(()=>{let l=t0.current;if(!l)return;let h=u.length;l.selectionStart=h,l.selectionEnd=h,l.focus()})},k_=()=>{if(j||!J_&&!O_&&!s1&&!l1&&!D_)return!1;return T1.current={value:"",updatedAt:0},u0(!1),X0(!1),v0([]),E0(!1),N0([]),j0(!0),!0},M1=(L)=>{if(L?.preventDefault?.(),L?.stopPropagation?.(),j||!J_&&!O_&&!s1&&!l1&&!D_)return;if(H0){T1.current={value:"",updatedAt:0},j0(!1);return}k_()},W4=(L)=>{let u=typeof L==="string"?L.trim():"";if(j0(!1),!u||u===W0){requestAnimationFrame(()=>t0.current?.focus());return}k0?.(u)},F4=async(L)=>{let u=typeof L==="string"?L.trim():"";if(j0(!1),!u||typeof f0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await f0(u)}catch(l){console.warn("Failed to restore session:",l),requestAnimationFrame(()=>t0.current?.focus())}},b4=(L)=>{let l=(Array.isArray(L)?L:[]).findIndex((h)=>!h?.disabled);return l>=0?l:0},B1=R0(()=>{let L=[];for(let u of L1){let l=Boolean(u?.archived_at),h=typeof u?.agent_name==="string"?u.agent_name.trim():"",M0=typeof u?.chat_jid==="string"?u.chat_jid.trim():"";if(!h||!M0)continue;L.push({type:"session",key:`session:${M0}`,label:`@${h} — ${M0}${u?.is_active?" active":""}${l?" archived":""}`,chat:u,disabled:l?!O_:!J_})}if(l1)L.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(s1)L.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:l_});if(D_)L.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return L},[L1,O_,J_,l1,s1,D_,l_]),H4=async(L)=>{if(L?.preventDefault)L.preventDefault();if(L?.stopPropagation)L.stopPropagation();if(typeof i0!=="function"||d0||q1.current)return;q1.current=!0,j0(!1);try{await i0()}catch(u){console.warn("Failed to rename session:",u)}finally{q1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},j5=async()=>{if(typeof g0!=="function")return;j0(!1);try{await g0()}catch(L){console.warn("Failed to create session:",L)}requestAnimationFrame(()=>t0.current?.focus())},f1=async()=>{if(typeof s0!=="function")return;j0(!1);try{await s0(W0)}catch(L){console.warn("Failed to delete session:",L)}requestAnimationFrame(()=>t0.current?.focus())},Q_=(L)=>{if(j)e1(L);else _1(L),g4(L),$5(L);requestAnimationFrame(()=>u_())},i_=(L)=>{let u=j?$1:b0,l=u&&!u.endsWith(`
`)?`
`:"",h=`${u}${l}${L}`.trimStart();Q_(h)},m4=(L)=>{let u=L?.command?.model_label;if(u)return u;let l=L?.command?.message;if(typeof l==="string"){let h=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(h?.[1])return h[1].trim()}return null},Q4=async(L)=>{if(j||y0)return;p0(!0);try{let u=await l4("default",L,null,[],null,W0),l=m4(u);w_({model:l??D??null,thinking_level:u?.command?.thinking_level,supports_thinking:u?.command?.supports_thinking});try{let h=await b5(W0);if(h)w_(h)}catch{}return _?.(),!0}catch(u){return console.error("Failed to switch model:",u),alert("Failed to switch model: "+u.message),!1}finally{p0(!1)}},z4=async()=>{await Q4("/cycle-model")},Z4=async(L)=>{if(!L||y0)return;if(await Q4(`/model ${L}`))u0(!1)},M_=(L)=>{if(!L||L.disabled)return;if(L.type==="session"){let u=L.chat;if(u?.archived_at)F4(u.chat_jid);else W4(u.chat_jid);return}if(L.type==="action"){if(L.action==="new"){j5();return}if(L.action==="rename"){H4();return}if(L.action==="delete")f1()}},V_=(L)=>{L.preventDefault(),L.stopPropagation(),T1.current={value:"",updatedAt:0},j0(!1),u0((u)=>!u)},A4=async()=>{if(j)return;M?.(),await I_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},h4=(L)=>{if(L==="queue"||L==="steer"||L==="auto")return L;return K0?"queue":void 0},I_=async(L,u,l={})=>{let{includeMedia:h=!0,includeFileRefs:M0=!0,includeMessageRefs:F1=!0,clearAfterSubmit:I1=!0,recordHistory:C1=!0}=l||{},Y4=typeof L==="string"?L:L&&typeof L?.target?.value==="string"?L.target.value:b0,p4=typeof Y4==="string"?Y4:"";if(!p4.trim()&&(h?z1.length===0:!0)&&(M0?K.length===0:!0)&&(F1?V.length===0:!0))return;X0(!1),v0([]),E0(!1),N0([]),j0(!1),d1(null);let Q5=h?[...z1]:[],Z5=M0?[...K]:[],Z_=F1?[...V]:[],g1=p4.trim();if(C1&&g1){let J4=m0.current,U1=y_(J4.filter((d_)=>d_!==g1));if(U1.push(g1),U1.length>200)U1.splice(0,U1.length-200);m0.current=U1,j_(U1),E1.current=-1,H_.current=""}let Y5=()=>{if(h)a0([...Q5]);if(M0)J0?.(Z5);if(F1)n0?.(Z_);_1(g1),requestAnimationFrame(()=>u_())};if(I1)_1(""),a0([]),X?.(),F?.();(async()=>{try{if(await _0?.({content:g1,submitMode:u,fileRefs:Z5,messageRefs:Z_,mediaFiles:Q5})){_?.();return}let U1=[];for(let B_ of Q5){let D4=await h6(B_);U1.push(D4.id)}let d_=Z5.length?`Files:
${Z5.map((B_)=>`- ${B_}`).join(`
`)}`:"",q5=Z_.length?`Referenced messages:
${Z_.map((B_)=>`- message:${B_}`).join(`
`)}`:"",K8=U1.length?`Attachments:
${U1.map((B_,D4)=>{let V6=Q5[D4]?.name||`attachment-${D4+1}`;return`- attachment:${B_} (${V6})`}).join(`
`)}`:"",T_=[g1,d_,q5,K8].filter(Boolean).join(`

`),O4=await l4("default",T_,null,U1,h4(u),W0);if(e?.(O4),O4?.command){w_({model:O4.command.model_label??D??null,thinking_level:O4.command.thinking_level,supports_thinking:O4.command.supports_thinking});try{let B_=await b5(W0);if(B_)w_(B_)}catch{}}_?.()}catch(J4){if(I1)Y5();let U1=J4?.message||"Failed to send message.";d1(U1),P0?.(U1),console.error("Failed to post:",J4)}})()},z=(L)=>{Q0?.(L)},I=x((L)=>{if(j||!z0&&!H0||L?.isComposing)return!1;let u=()=>{L.preventDefault?.(),L.stopPropagation?.()},l=()=>{T1.current={value:"",updatedAt:0}};if(L.key==="Escape"){if(u(),l(),z0)u0(!1);if(H0)j0(!1);return!0}if(z0){if(L.key==="ArrowDown"){if(u(),l(),S.length>0)O0((h)=>(h+1)%S.length);return!0}if(L.key==="ArrowUp"){if(u(),l(),S.length>0)O0((h)=>(h-1+S.length)%S.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&S.length>0)return u(),l(),Z4(S[Math.max(0,Math.min(U0,S.length-1))]),!0;if(e6(L)&&S.length>0){u();let h=_$(T1.current,L.key);T1.current=h;let M0=$$(S,h.value,U0,(F1)=>F1);if(M0>=0)O0(M0);return!0}}if(H0){if(L.key==="ArrowDown"){if(u(),l(),B1.length>0)j1((h)=>(h+1)%B1.length);return!0}if(L.key==="ArrowUp"){if(u(),l(),B1.length>0)j1((h)=>(h-1+B1.length)%B1.length);return!0}if((L.key==="Enter"||L.key==="Tab")&&B1.length>0)return u(),l(),M_(B1[Math.max(0,Math.min(l0,B1.length-1))]),!0;if(e6(L)&&B1.length>0){u();let h=_$(T1.current,L.key);T1.current=h;let M0=$$(B1,h.value,l0,(F1)=>F1.label);if(M0>=0)j1(M0);return!0}}return!1},[j,z0,H0,S,U0,B1,l0,Z4]),R=(L)=>{if(L.isComposing)return;if(j&&L.key==="Escape"){L.preventDefault(),e1(""),N?.();return}if(I(L))return;let u=t0.current?.value??(j?$1:b0);if(u2(L,u,{searchMode:j,showSessionSwitcherButton:$4})){L.preventDefault(),k_();return}if(w0&&L0.length>0){let l=t0.current?.value??(j?$1:b0);if(!String(l||"").match(/^@([a-zA-Z0-9_-]*)$/))E0(!1),N0([]);else{if(L.key==="ArrowDown"){L.preventDefault(),S0((h)=>(h+1)%L0.length);return}if(L.key==="ArrowUp"){L.preventDefault(),S0((h)=>(h-1+L0.length)%L0.length);return}if(L.key==="Tab"||L.key==="Enter"){L.preventDefault(),f_(L0[C0]);return}if(L.key==="Escape"){L.preventDefault(),E0(!1),N0([]);return}}}if(s&&Z1.length>0){let l=t0.current?.value??(j?$1:b0);if(!String(l||"").startsWith("/"))X0(!1),v0([]);else{if(L.key==="ArrowDown"){L.preventDefault(),D1((h)=>(h+1)%Z1.length);return}if(L.key==="ArrowUp"){L.preventDefault(),D1((h)=>(h-1+Z1.length)%Z1.length);return}if(L.key==="Tab"){L.preventDefault(),j4(Z1[y1]);return}if(L.key==="Enter"&&!L.shiftKey){if(!u.includes(" ")){L.preventDefault();let M0=Z1[y1];X0(!1),v0([]),I_(M0.name);return}}if(L.key==="Escape"){L.preventDefault(),X0(!1),v0([]);return}}}if(!j&&(L.key==="ArrowUp"||L.key==="ArrowDown")&&!L.metaKey&&!L.ctrlKey&&!L.altKey&&!L.shiftKey){let l=t0.current;if(!l)return;let h=l.value||"",M0=l.selectionStart===0&&l.selectionEnd===0,F1=l.selectionStart===h.length&&l.selectionEnd===h.length;if(L.key==="ArrowUp"&&M0||L.key==="ArrowDown"&&F1){let I1=m0.current;if(!I1.length)return;L.preventDefault();let C1=E1.current;if(L.key==="ArrowUp"){if(C1===-1)H_.current=h,C1=I1.length-1;else if(C1>0)C1-=1;E1.current=C1,Q_(I1[C1]||"")}else{if(C1===-1)return;if(C1<I1.length-1)C1+=1,E1.current=C1,Q_(I1[C1]||"");else E1.current=-1,Q_(H_.current||""),H_.current=""}requestAnimationFrame(()=>{let Y4=t0.current;if(!Y4)return;let p4=Y4.value.length;Y4.selectionStart=p4,Y4.selectionEnd=p4});return}}if(L.key==="Enter"&&!L.shiftKey&&(L.ctrlKey||L.metaKey)){if(L.preventDefault(),j){if(u.trim())Z?.(u.trim(),Q)}else I_(u,"steer");return}if(L.key==="Enter"&&!L.shiftKey)if(L.preventDefault(),j){if(u.trim())Z?.(u.trim(),Q)}else I_(u)},w=(L)=>{let u=Array.from(L||[]).filter((l)=>l instanceof File&&!String(l.name||"").startsWith(".DS_Store"));if(!u.length)return;a0((l)=>[...l,...u]),d1(null)},i=(L)=>{w(L.target.files),L.target.value=""},Z0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),J1.current+=1,O1(!0)},V0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),J1.current=Math.max(0,J1.current-1),J1.current===0)O1(!1)},B0=(L)=>{if(j)return;if(L.preventDefault(),L.stopPropagation(),L.dataTransfer)L.dataTransfer.dropEffect="copy";O1(!0)},$0=(L)=>{if(j)return;L.preventDefault(),L.stopPropagation(),J1.current=0,O1(!1),w(L.dataTransfer?.files||[])},I0=(L)=>{if(j)return;let u=L.clipboardData?.items;if(!u||!u.length)return;let l=[];for(let h of u){if(h.kind!=="file")continue;let M0=h.getAsFile?.();if(M0)l.push(M0)}if(l.length>0)L.preventDefault(),w(l)},P1=(L)=>{a0((u)=>u.filter((l,h)=>h!==L))},a1=()=>{d1(null),a0([]),X?.(),F?.()},v1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((L)=>{let{latitude:u,longitude:l,accuracy:h}=L.coords,M0=`${u.toFixed(5)}, ${l.toFixed(5)}`,F1=Number.isFinite(h)?` ±${Math.round(h)}m`:"",I1=`https://maps.google.com/?q=${u},${l}`,C1=`Location: ${M0}${F1} ${I1}`;i_(C1)},(L)=>{let u=L?.message||"Unable to retrieve location.";alert(`Location error: ${u}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!z0)return;T1.current={value:"",updatedAt:0},Y1(!0),b5(W0).then((L)=>{let u=Array.isArray(L?.models)?L.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];u.sort((l,h)=>l.localeCompare(h,void 0,{sensitivity:"base"})),a(u),w_(L)}).catch((L)=>{console.warn("Failed to load model list:",L),a([])}).finally(()=>{Y1(!1)})},[z0,D]),v(()=>{if(j)u0(!1),j0(!1),X0(!1),v0([]),E0(!1),N0([])},[j]),v(()=>{if(H0&&!$4)j0(!1)},[H0,$4]),v(()=>{if(!z0)return;let L=S.findIndex((u)=>u===D);O0(L>=0?L:0)},[z0,S,D]),v(()=>{if(!H0)return;j1(b4(B1)),T1.current={value:"",updatedAt:0}},[H0,W0]),v(()=>{if(!z0)return;let L=(u)=>{let l=C_.current,h=a4.current,M0=u.target;if(l&&l.contains(M0))return;if(h&&h.contains(M0))return;u0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[z0]),v(()=>{if(!H0)return;let L=(u)=>{let l=y4.current,h=R1.current,M0=u.target;if(l&&l.contains(M0))return;if(h&&h.contains(M0))return;j0(!1)};return document.addEventListener("pointerdown",L),()=>document.removeEventListener("pointerdown",L)},[H0]),v(()=>{if(j||!z0&&!H0)return;let L=(u)=>{I(u)};return document.addEventListener("keydown",L,!0),()=>document.removeEventListener("keydown",L,!0)},[j,z0,H0,I]),v(()=>{if(!z0)return;let L=C_.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[z0,U0,S]),v(()=>{if(!H0)return;let L=y4.current;L?.focus?.(),L?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[H0,l0,B1.length]),v(()=>{let L=()=>{let F1=X_.current?.clientWidth||0;e_((I1)=>I1===F1?I1:F1)};L();let u=X_.current,l=0,h=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,L()})},M0=null;if(u&&typeof ResizeObserver<"u")M0=new ResizeObserver(()=>h()),M0.observe(u);if(typeof window<"u")window.addEventListener("resize",h);return()=>{if(l)cancelAnimationFrame(l);if(M0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",h)}},[j,D,k1?.agent_name,$4,E?.percent]);let C5=(L)=>{let u=L.target.value;if(d1(null),H0)j0(!1);u_(L.target),Q_(u)};return v(()=>{requestAnimationFrame(()=>u_())},[b0,$1,j]),v(()=>{if(!R_)return;__(Date.now());let L=setInterval(()=>__(Date.now()),1000);return()=>clearInterval(L)},[R_,F0?.started_at,F0?.startedAt]),v(()=>{if(j)return;$5(b0)},[u1,W0,b0,j]),U`
        <div class="compose-box">
            ${e0&&!j&&U`
                <${Y$}
                    items=${m}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${c}
                    onOpenFilePill=${P}
                />
            `}
            ${F0&&U`
                <div
                    class=${`compose-inline-status${R_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${P5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${x5}</span>
                        ${K1&&U`<span class="compose-inline-status-elapsed">${K1}</span>`}
                    </div>
                    ${P5&&U`<div class="compose-inline-status-detail">${P5}</div>`}
                </div>
            `}
            ${K_&&U`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${K_}</div>
            `}
            <div
                class=${`compose-input-wrapper${p1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${B0}
                onDragLeave=${V0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${e4&&U`
                        <div class="compose-file-refs">
                            ${V.map((L)=>{return U`
                                    <${g_}
                                        key=${"msg-"+L}
                                        prefix="compose"
                                        label=${"msg:"+L}
                                        title=${"Message reference: "+L}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>B?.(L)}
                                    />
                                `})}
                            ${K.map((L)=>{let u=L.split("/").pop()||L;return U`
                                    <${g_}
                                        prefix="compose"
                                        label=${u}
                                        title=${L}
                                        onClick=${()=>P?.(L)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(L)}
                                    />
                                `})}
                            ${z1.map((L,u)=>{let l=L?.name||`attachment-${u+1}`;return U`
                                    <${g_}
                                        key=${l+u}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>P1(u)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${a1}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof q0==="function"&&U`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>q0?.()}
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
                        value=${j?$1:b0}
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${I0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${w0&&L0.length>0&&U`
                        <div class="slash-autocomplete" ref=${_4}>
                            ${L0.map((L,u)=>U`
                                <div
                                    key=${L.chat_jid||L.agent_name}
                                    class=${`slash-item${u===C0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),f_(L)}}
                                    onMouseEnter=${()=>S0(u)}
                                >
                                    <span class="slash-name">@${L.agent_name}</span>
                                    <span class="slash-desc">${L.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&Z1.length>0&&U`
                        <div class="slash-autocomplete" ref=${$_}>
                            ${Z1.map((L,u)=>U`
                                <div
                                    key=${L.name}
                                    class=${`slash-item${u===y1?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),j4(L)}}
                                    onMouseEnter=${()=>D1(u)}
                                >
                                    <span class="slash-name">${L.name}</span>
                                    <span class="slash-desc">${L.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${z0&&!j&&U`
                        <div class="compose-model-popup" ref=${C_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${A1&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!A1&&S.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!A1&&S.map((L,u)=>U`
                                    <button
                                        key=${L}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${U0===u?" active":""}${D===L?" current-model":""}`}
                                        onClick=${()=>{Z4(L)}}
                                        disabled=${y0}
                                    >
                                        ${L}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{z4()}}
                                    disabled=${y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${H0&&!j&&U`
                        <div class="compose-model-popup" ref=${y4} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${U`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return f2(k1,W0)})()}
                                    </div>
                                `}
                                ${!A_&&U`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${A_&&L1.map((L,u)=>{let l=Boolean(L.archived_at),M0=L.chat_jid!==(L.root_chat_jid||L.chat_jid)&&!L.is_active&&!l&&typeof s0==="function",F1=u8(L,{currentChatJid:W0});return U`
                                        <div key=${L.chat_jid} class=${`compose-model-popup-item-row${l?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${l?" archived":""}${l0===u?" active":""}`}
                                                onClick=${()=>{if(l){F4(L.chat_jid);return}W4(L.chat_jid)}}
                                                disabled=${l?!O_:!J_}
                                                title=${l?`Restore archived ${`@${L.agent_name}`}`:`Switch to ${`@${L.agent_name}`}`}
                                            >
                                                ${F1}
                                            </button>
                                            ${M0&&U`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${L.agent_name}`}
                                                    onClick=${(I1)=>{I1.stopPropagation(),j0(!1),s0(L.chat_jid)}}
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
                            ${(l1||s1||D_)&&U`
                                <div class="compose-model-popup-actions">
                                    ${l1&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${B1.findIndex((L)=>L.key==="action:new")===l0?" active":""}`}
                                            onClick=${()=>{j5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${s1&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${B1.findIndex((L)=>L.key==="action:rename")===l0?" active":""}`}
                                            onClick=${(L)=>{H4(L)}}
                                            title="Rename the current branch handle"
                                            disabled=${l_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${D_&&U`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${B1.findIndex((L)=>L.key==="action:delete")===l0?" active":""}`}
                                            onClick=${()=>{f1()}}
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
                <div class="compose-footer" ref=${X_}>
                    ${!j&&D&&U`
                    <div class="compose-meta-row">
                        ${!j&&D&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${a4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${_5}
                                    aria-label="Open model picker"
                                    onClick=${V_}
                                    disabled=${y0}
                                >
                                    ${y0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y0&&E_&&U`
                                        <span class="compose-model-usage-hint" title=${_5}>
                                            ${E_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&E&&E.percent!=null&&U`
                            <${dY} usage=${E} onCompact=${A4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${$4&&U`
                        ${k1?.agent_name&&U`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${k1.chat_jid||W0}
                                aria-label=${`Manage sessions for @${k1.agent_name}`}
                                onClick=${M1}
                            >@${k1.agent_name}</button>
                        `}
                        <button
                            ref=${R1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${H0?" active":""}`}
                            onClick=${M1}
                            title=${H0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${H0?"true":"false"}
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
                                value=${Q}
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
                        onClick=${j?N:q}
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
                    ${R4&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${v1}
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
                    ${t4&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${c_?" active":""}`}
                            onClick=${n}
                            title=${x1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${C&&A&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${A}
                                title=${`Attach open file: ${C}`}
                                type="button"
                                disabled=${K.includes(C)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${i} />
                        </label>
                    `}
                    ${(A0!=="connected"||!j)&&U`
                        <div class="compose-send-stack">
                            ${A0!=="connected"&&U`
                                <span class="compose-connection-status connection-status ${A0}" title=${o1}>
                                    ${z_}
                                </span>
                            `}
                            ${!j&&U`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{I_()}}
                                    disabled=${!r1}
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
    `}var K$="piclaw_theme",b8="piclaw_tint",p2="piclaw_chat_themes",l5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},m2={default:{label:"Default",mode:"auto",light:l5,dark:c2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},aY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],n4={theme:"default",tint:null},l2="light",q$=!1;function m8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function H5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function tY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),N=parseInt(Z[3],10);if(![Y,q,N].every((G)=>Number.isFinite(G)))return null;let K=`#${[Y,q,N].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:N,hex:K}}function n2(_){return H5(_)||tY(_)}function c5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function N$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function eY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function _q(_){return eY(_)>0.4?"#000000":"#ffffff"}function i2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function G$(_){return m2[_]||m2.default}function $q(_){return _.mode==="auto"?i2():_.mode}function d2(_,$){let j=G$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||l5}function r2(_,$,j){let Q=n2($);if(!Q)return _;let Z=H5(_.bgPrimary),Y=H5(_.bgSecondary),q=H5(_.bgHover),N=H5(_.borderColor);if(!Z||!Y||!q||!N)return _;let G=H5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:c5(Z,Q,0.08),bgSecondary:c5(Y,Q,0.12),bgHover:c5(q,Q,0.16),borderColor:c5(N,Q,0.08),accent:Q.hex,accentHover:G?c5(Q,G,0.18):Q.hex}}function jq(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=n2(Q),Y=Z?N$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?N$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=Z?N$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?_q(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":N,"--accent-contrast-text":K,"--danger-color":_.danger||l5.danger,"--success-color":_.success||l5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function Qq(){if(typeof document>"u")return;let _=document.documentElement;aY.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function h2(_){let $=m8(n4?.theme||"default"),j=n4?.tint?String(n4.tint).trim():null,Q=d2($,_);if($==="default"&&j)Q=r2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?c2.bgPrimary:l5.bgPrimary}function Zq(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=F5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",h2("light"));let Z=F5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",h2("dark"));let Y=F5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=F5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let N=F5("apple-mobile-web-app-status-bar-style");if(N)N.setAttribute("content",$==="dark"?"black-translucent":"default")}function Yq(){if(typeof window>"u")return;let _={...n4,mode:l2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function o2(){try{let _=U_(p2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function qq(_,$,j){let Q=o2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};Q1(p2,JSON.stringify(Q))}function Nq(_){if(!_)return null;return o2()[_]||null}function s2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function X$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=m8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=G$(j),Y=$q(Z),q=d2(j,Y);n4={theme:j,tint:Q},l2=Y;let N=document.documentElement;N.dataset.theme=Y,N.dataset.colorTheme=j,N.dataset.tint=Q?String(Q):"",N.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=r2(q,Q,Y);if(j==="default"&&!Q)Qq();else jq(K,Y);if(Zq(K.bgPrimary,Y),Yq(),$.persist!==!1)if(Q1(K$,j),Q)Q1(b8,Q);else Q1(b8,"")}function g8(){if(G$(n4.theme).mode!=="auto")return;X$(n4,{persist:!1})}function a2(){if(typeof window>"u")return()=>{};let _=s2(),$=Nq(_),j=$?m8($.theme||"default"):m8(U_(K$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=U_(b8);return Z?Z.trim():null})();if(X$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!q$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",g8);else if(Z.addListener)Z.addListener(g8);return q$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",g8);else if(Z.removeListener)Z.removeListener(g8);q$=!1}}return()=>{}}function t2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||s2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(qq($,j||"default",Q),X$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")Q1(K$,j||"default"),Q1(b8,Q||"")}function e2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return i2()}var h8=/#(\w+)/g,Kq=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),Gq=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Xq=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),Vq={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Bq=new Set(["http:","https:","mailto:",""]);function V$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function i4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Bq.has(Q.protocol))return null;return Q.href}catch{return null}}function _7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let N=q.tagName.toLowerCase();if(!Gq.has(N)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=Vq[N]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(K.has(X)||Xq.has(X)){if(X==="href"){let B=i4(V);if(!B)q.removeAttribute(G.name);else if(q.setAttribute(G.name,B),N==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let B=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,F=i4(B,{allowDataImage:N==="img"});if(!F)q.removeAttribute(G.name);else q.setAttribute(G.name,F)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function $7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function p8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=$7(j);if(Z===j)break;j=Z}return j}function Uq(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let N of j){if(!Y&&N.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&N.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(N);else Z.push(N)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function Lq(_){if(!_)return _;return p8(_,5)}function Wq(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function Fq(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function Hq(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=Lq(Y);return`<div class="mermaid-container" data-mermaid="${Wq(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function j7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var zq={span:new Set(["title","class","lang","dir"])};function Aq(_,$){let j=zq[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let N=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${V$(N)}"`)}return Q.join("")}function Q7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,N=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=N.split(/\s+/,1),G=K.toLowerCase();if(!G||!Kq.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=N.slice(K.length).trim(),V=Aq(G,X);return`<${G}${V}>`})}function Z7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function Y7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function Jq(_){if(!window.katex)return _;let $=(q)=>$7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let N=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_BLOCK_${X}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_INLINE_${X}@@`}),{html:K,blocks:N}},Q=(q,N)=>{if(!N.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let X=Number(G);return N[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,N,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${N}${G}`}catch(G){return`<span class="math-error" title="${V$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,N,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${N}${G}`}catch(G){return`${N}<span class="math-error" title="${V$(G.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function Oq(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(h8.lastIndex=0,!h8.test(q))continue;h8.lastIndex=0;let N=Y.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let K=q.split(h8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((X,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",X),B.textContent=`#${X}`,G.appendChild(B)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function Dq(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function Eq(_){let $=Dq(_||""),{text:j,blocks:Q}=Uq($),Z=p8(j,2),q=j7(Z).replace(/</g,"&lt;");return{safeHtml:Q7(q),mermaidBlocks:Q}}function L_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=Eq(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=Z7(Y),Y=Y7(Y),Y=Jq(Y),Y=Oq(Y),Y=Hq(Y,Z),Y=_7(Y,j),Y}function n5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=p8($,2),Z=j7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Q7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=Z7(q),q=Y7(q),q=_7(q),q}function kq(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[G,X]=K.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let N=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],X=q[K],V=q[K+1],B=X.x-G.x,F=X.y-G.y,D=V.x-X.x,k=V.y-X.y,J=Math.sqrt(B*B+F*F),H=Math.sqrt(D*D+k*k),E=Math.min($,J/2,H/2);if(E<0.5){N.push(`L ${X.x},${X.y}`);continue}let M=X.x-B/J*E,p=X.y-F/J*E,b=X.x+D/H*E,n=X.y+k/H*E,y=B*k-F*D>0?1:0;N.push(`L ${M},${p}`),N.push(`A ${E},${E} 0 0 ${y} ${b},${n}`)}return N.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${N.join(" ")}"${Y}/>`})}async function K4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=e2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let N=q.dataset.mermaid,K=Fq(N||""),G=p8(K,2),X=await $(G,{...Z,transparent:!0});X=kq(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${N.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function q7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function N7(_){return String(_||"").trim()||"web:default"}function K7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function G7(_){if(!_)return!1;return _.status!=="running"}function X7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function V7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=T(null),Y=T(null),q=_?.thinking?n5(_.thinking):"",N=_?.answer?L_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&q)K4(Z.current).catch(()=>{})},[q]),v(()=>{if(Y.current&&N)K4(Y.current).catch(()=>{})},[N]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=K7(_),B=G7(_),F=!K&&G,D=K?"Thinking…":_.status==="error"?"Error":"Done";return U`
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

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${X&&U`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:N}}
                    ></div>
                </div>
            `}

            ${B&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!F}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function Mq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function Iq(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function I4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function x0(_){return typeof _==="string"&&_.trim()?_.trim():null}function U7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var L7="__PICLAW_WIDGET_HOST__:";function B7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function B$(_,$){if(!_||_.type!=="generated_widget")return null;let j=Mq(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:U7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function W7(_){if(!_||typeof _!=="object")return null;let $=Iq(_),j=x0(_?.widget_id)||x0(_?.widgetId)||x0(_?.tool_call_id)||x0(_?.toolCallId),Q=x0(_?.tool_call_id)||x0(_?.toolCallId),Z=x0(_?.turn_id)||x0(_?.turnId),Y=x0(_?.title)||x0(_?.name)||"Generated widget",q=x0(_?.subtitle)||"",N=x0(_?.description)||q,K=x0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:N,originPostId:I4(_?.origin_post_id)??I4(_?.originPostId),originChatJid:x0(_?.origin_chat_jid)||x0(_?.originChatJid)||x0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:U7(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:I4(_?.width),height:I4(_?.height),error:x0(_?.error)}}function F7(_){return B$(_,null)!==null}function W_(_){let $=x0(_?.toolCallId)||x0(_?.tool_call_id);if($)return $;let j=x0(_?.widgetId)||x0(_?.widget_id);if(j)return j;let Q=I4(_?.originPostId)??I4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function H7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function z7(_){return H7(_)?"allow-downloads allow-scripts":"allow-downloads"}function c8(_){return{title:x0(_?.title)||"Generated widget",widgetId:x0(_?.widgetId)||x0(_?.widget_id),toolCallId:x0(_?.toolCallId)||x0(_?.tool_call_id),turnId:x0(_?.turnId)||x0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:x0(_?.status)||"final"}}function l8(_){return{...c8(_),subtitle:x0(_?.subtitle)||"",description:x0(_?.description)||"",error:x0(_?.error)||null,width:I4(_?.width),height:I4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function n8(_){return`${L7}${JSON.stringify(l8(_))}`}function A7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=x0(_.text)||x0(_.content)||x0(_.message)||x0(_.prompt)||x0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=x0(j.text)||x0(j.content)||x0(j.message)||x0(j.prompt)||x0(j.value);if(Q)return Q}return null}function J7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function O7(_){let $=x0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return x0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function Tq(_){let $=c8(_);return`<script>
(function () {
  const meta = ${B7($)};
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
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${B7(L7)};
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
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
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
</script>`}function D7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let N=H7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",N?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=N?Tq(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
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
${X}
</head>
<body>${G}</body>
</html>`}function E7({widget:_,onClose:$,onWidgetEvent:j}){let Q=T(null),Z=T(!1),Y=R0(()=>D7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let H=(E)=>{if(E.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),v(()=>{Z.current=!1},[Y]),v(()=>{if(!_)return;let H=Q.current;if(!H)return;let E=(t)=>{let y=n8(_),C=t==="widget.init"?c8(_):l8(_);try{H.name=y}catch{}try{H.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:C},"*")}catch{}},M=()=>{E("widget.init"),E("widget.update")},p=()=>{Z.current=!0,M()};H.addEventListener("load",p);let n=[0,40,120,300,800].map((t)=>setTimeout(M,t));return()=>{H.removeEventListener("load",p),n.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let H=Q.current;if(!H?.contentWindow)return;let E=n8(_),M=l8(_);try{H.name=E}catch{}try{H.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let H=(E)=>{let M=E?.data;if(!M||M.__piclawGeneratedWidget!==!0)return;let p=Q.current,b=W_(_),n=W_({widgetId:M.widgetId,toolCallId:M.toolCallId});if(n&&b&&n!==b)return;if(!n&&p?.contentWindow&&E.source!==p.contentWindow)return;j?.(M,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",F=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",D=!Y,k=O7(_),J=z7(_);return U`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(G||F)&&U`
                            <div class="floating-widget-subtitle">${G||F}</div>
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
                    ${D?U`<div class="floating-widget-empty">${k}</div>`:U`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${K}
                                name=${n8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var k7="PiClaw";function U$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,N=Y[q],K=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:N,image:X||(V?"/static/icon-192.png":null)}}function M7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function I7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function T7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",N=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(N||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var xq=U`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function L$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:N=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:F=!0}){let J=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let C0=s,S0=C0?C0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:C0,totalLines:S0,fullText:C0}}let X0=s.text||"",L0=s.fullText||s.full_text||X0,N0=Number.isFinite(s.totalLines)?s.totalLines:L0?L0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:X0,totalLines:N0,fullText:L0}},H=160,E=(s)=>String(s||"").replace(/<\/?internal>/gi,""),M=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},p=(s,X0,L0)=>{let N0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(L0)?L0:0,visibleLines:0};let C0=N0.split(`
`),S0=C0.length>X0?C0.slice(0,X0).join(`
`):N0,w0=Number.isFinite(L0)?L0:C0.reduce((p0,z0)=>p0+M(z0),0),E0=S0?S0.split(`
`).reduce((p0,z0)=>p0+M(z0),0):0,y0=Math.max(w0-E0,0);return{text:S0,omitted:y0,totalLines:w0,visibleLines:E0}},b=J(j),n=J(Q),t=J($),y=Boolean(b.text)||b.totalLines>0,C=Boolean(n.text)||n.totalLines>0,A=Boolean(t.fullText?.trim()||t.text?.trim()),P=Boolean(_||A||y||C||Z||Y),m=Array.isArray(q)&&q.length>0;if((!B||!P)&&(!F||!m))return null;let[Q0,c]=g(new Set),[_0,e]=g(null),[q0,K0]=g(()=>Date.now()),G0=(s)=>c((X0)=>{let L0=new Set(X0),N0=!L0.has(s);if(N0)L0.add(s);else L0.delete(s);if(typeof V==="function")V(s,N0);return L0});v(()=>{c(new Set),e(null)},[G]);let W0=N4(_);v(()=>{if(!W0)return;K0(Date.now());let s=setInterval(()=>K0(Date.now()),1000);return()=>clearInterval(s)},[W0,_?.started_at,_?.startedAt]);let A0=_?.turn_id||G,J0=T7(A0),n0=X?"turn-dot turn-dot-queued":"turn-dot",P0=(s)=>s,k0=Boolean(_?.last_activity||_?.lastActivity),i0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":J0,d0=Y?.kind||"info",g0=i0(d0),s0=i0(_?.kind||(W0?"warning":"info")),f0="",e0=_?.title,F0=_?.status;if(_?.type==="plan")f0=e0?`Planning: ${e0}`:"Planning...";else if(_?.type==="tool_call")f0=e0?`Running: ${e0}`:"Running tool...";else if(_?.type==="tool_status")f0=e0?`${e0}: ${F0||"Working..."}`:F0||"Working...";else if(_?.type==="error")f0=e0||"Agent error";else f0=e0||F0||"Working...";if(k0)f0="Last activity just now";let b0=({panelTitle:s,text:X0,fullText:L0,totalLines:N0,maxLines:C0,titleClass:S0,panelKey:w0})=>{let E0=Q0.has(w0),y0=L0||X0||"",p0=w0==="thought"||w0==="draft"?E(y0):y0,z0=typeof C0==="number",u0=E0&&z0,H0=z0?p(p0,C0,N0):{text:p0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!p0&&!(Number.isFinite(H0.totalLines)&&H0.totalLines>0))return null;let j0=`agent-thinking-body${z0?" agent-thinking-body-collapsible":""}`,S=z0?`--agent-thinking-collapsed-lines: ${C0};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${E0?"true":"false"}
                data-collapsible=${z0?"true":"false"}
                style=${J0?`--turn-color: ${J0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${J0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    ${s}
                    ${u0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>G0(w0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${S}
                    dangerouslySetInnerHTML=${{__html:n5(p0)}}
                />
                ${!E0&&H0.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>G0(w0)}>
                        ▸ ${H0.omitted} more lines
                    </button>
                `}
                ${E0&&H0.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>G0(w0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},_1=Z?.tool_call?.title,$1=_1?`Awaiting approval: ${_1}`:"Awaiting approval",e1=W0?v8(_,q0):null,z1=(s,X0,L0=null)=>{let N0=f8(s);return U`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${X0?`--turn-color: ${X0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${X0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${L0&&U`<span class="agent-status-elapsed">${L0}</span>`}
                </div>
                ${s.detail&&U`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},a0=(s,X0,L0,N0,C0,S0,w0,E0=8,y0=8)=>{let p0=Math.max(C0-N0,0.000000001),z0=Math.max(X0-E0*2,1),u0=Math.max(L0-y0*2,1),H0=Math.max(w0-S0,1),j0=w0===S0?X0/2:E0+(s.run-S0)/H0*z0,S=y0+(u0-(s.value-N0)/p0*u0);return{x:j0,y:S}},p1=(s,X0,L0,N0,C0,S0,w0,E0=8,y0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((p0,z0)=>{let{x:u0,y:H0}=a0(p0,X0,L0,N0,C0,S0,w0,E0,y0);return`${z0===0?"M":"L"} ${u0.toFixed(2)} ${H0.toFixed(2)}`}).join(" ")},O1=(s,X0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${X0}`},Z1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],v0=(s,X0)=>{let L0=Z1;if(!Array.isArray(L0)||L0.length===0)return"var(--accent-color)";if(L0.length===1||!Number.isFinite(X0)||X0<=1)return L0[0];let C0=Math.max(0,Math.min(Number.isFinite(s)?s:0,X0-1))/Math.max(1,X0-1)*(L0.length-1),S0=Math.floor(C0),w0=Math.min(L0.length-1,S0+1),E0=C0-S0,y0=L0[S0],p0=L0[w0];if(!p0||S0===w0||E0<=0.001)return y0;if(E0>=0.999)return p0;let z0=Math.round((1-E0)*1000)/10,u0=Math.round(E0*1000)/10;return`color-mix(in oklab, ${y0} ${z0}%, ${p0} ${u0}%)`},y1=(s,X0="autoresearch")=>{let L0=Array.isArray(s)?s.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((S)=>Number.isFinite(S?.value)&&Number.isFinite(S?.run)):[]})).filter((j0)=>j0.points.length>0):[],N0=L0.map((j0,S)=>({...j0,color:v0(S,L0.length)}));if(N0.length===0)return null;let C0=320,S0=120,w0=N0.flatMap((j0)=>j0.points),E0=w0.map((j0)=>j0.value),y0=w0.map((j0)=>j0.run),p0=Math.min(...E0),z0=Math.max(...E0),u0=Math.min(...y0),H0=Math.max(...y0);return U`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${C0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((j0)=>{let S=j0?.key||j0?.label||"series",a=_0?.panelKey===X0&&_0?.seriesKey===S;return U`
                                <g key=${S}>
                                    <path
                                        class=${`agent-series-chart-line${a?" is-hovered":""}`}
                                        d=${p1(j0.points,C0,S0,p0,z0,u0,H0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>e({panelKey:X0,seriesKey:S})}
                                        onMouseLeave=${()=>e((U0)=>U0?.panelKey===X0&&U0?.seriesKey===S?null:U0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((j0)=>{let S=typeof j0?.unit==="string"?j0.unit:"",a=j0?.key||j0?.label||"series";return j0.points.map((U0,O0)=>{let l0=a0(U0,C0,S0,p0,z0,u0,H0);return U`
                                    <button
                                        key=${`${a}-point-${O0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${l0.x/C0*100}%; top:${l0.y/S0*100}%;`}
                                        onMouseEnter=${()=>e({panelKey:X0,seriesKey:a,run:U0.run,value:U0.value,unit:S})}
                                        onMouseLeave=${()=>e((j1)=>j1?.panelKey===X0?null:j1)}
                                        onFocus=${()=>e({panelKey:X0,seriesKey:a,run:U0.run,value:U0.value,unit:S})}
                                        onBlur=${()=>e((j1)=>j1?.panelKey===X0?null:j1)}
                                        aria-label=${`${j0?.label||"Series"} ${O1(U0.value,S)} at run ${U0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((j0)=>{let S=j0.points[j0.points.length-1]?.value,a=typeof j0?.unit==="string"?j0.unit:"",U0=j0?.key||j0?.label||"series",O0=_0?.panelKey===X0&&_0?.seriesKey===U0?_0:null,l0=O0&&Number.isFinite(O0.value)?O0.value:S,j1=O0&&typeof O0.unit==="string"?O0.unit:a,A1=O0&&Number.isFinite(O0.run)?O0.run:null;return U`
                            <div key=${`${U0}-legend`} class=${`agent-series-legend-item${O0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${A1!==null&&U`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${O1(l0,j1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},D1=(s)=>{if(!s)return null;let X0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,L0=Q0.has(X0),N0=s?.title||"Extension status",C0=s?.collapsed_text||"",S0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),w0=i0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),E0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",y0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",p0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",z0=Array.isArray(s?.series)?s.series:[],u0=Array.isArray(s?.actions)?s.actions:[],H0=Boolean(E0||p0),j0=Boolean(E0||z0.length>0||p0),S=[N0,C0].filter(Boolean).join(" — ");return U`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${L0?"true":"false"}
                style=${w0?`--turn-color: ${w0};`:""}
                title=${!L0?S||N0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?G0(X0):null}
                    >
                        ${w0&&U`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${C0&&U`<span class="agent-thinking-title-meta">${C0}</span>`}
                    </button>
                    ${(u0.length>0||j0&&!L0)&&U`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&U`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((a)=>{let U0=`${X0}:${a?.key||""}`,O0=N?.has?.(U0);return U`
                                            <button
                                                key=${U0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(s,a)}
                                                disabled=${Boolean(O0)}
                                            >
                                                ${O0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!L0&&U`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${N0}`}
                                    title="Expand details"
                                    onClick=${()=>G0(X0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&L0&&U`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${N0}`}
                        title="Collapse details"
                        onClick=${()=>G0(X0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${L0&&U`
                    <div class=${`agent-thinking-autoresearch-layout${H0?"":" chart-only"}`}>
                        ${H0&&U`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${E0&&U`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:n5(E0)}}
                                    />
                                `}
                                ${p0&&U`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${p0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${xq}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${z0.length>0?U`
                                <div class="agent-series-chart-stack">
                                    ${y1(z0,X0)}
                                    ${y0&&U`<div class="agent-series-chart-note">${y0}</div>`}
                                </div>
                            `:U`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return U`
        <div class="agent-status-panel">
            ${B&&Y&&z1(Y,g0)}
            ${F&&Array.isArray(q)&&q.map((s)=>D1(s))}
            ${B&&_?.type==="intent"&&z1(_,s0,e1)}
            ${B&&Z&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${J0?`--turn-color: ${J0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${$1}</span>
                </div>
            `}
            ${B&&y&&b0({panelTitle:P0("Planning"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,panelKey:"plan"})}
            ${B&&C&&b0({panelTitle:P0("Thoughts"),text:n.text,fullText:n.fullText,totalLines:n.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&A&&b0({panelTitle:P0("Draft"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${k0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${J0?`--turn-color: ${J0};`:""}>
                    ${J0&&U`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!k0&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${f0}</span>
                </div>
            `}
        </div>
    `}function x7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",N=Q?.kind||"other",K=Q?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,X=K.diff||null,V=K.fileName||K.path||null,B=Q?.description||K.description||K.explanation||null,D=(Array.isArray(Q?.locations)?Q.locations:[]).map((M)=>M?.path).filter((M)=>Boolean(M)),k=Array.from(new Set([V,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let J=async(M)=>{try{await I8(j,M,Y||null),$()}catch(p){console.error("Failed to respond to agent request:",p)}},H=async()=>{try{await c6(q,`Auto-approved: ${q}`),await I8(j,"approved",Y||null),$()}catch(M){console.error("Failed to add to whitelist:",M)}},E=Z&&Z.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(B||G||X||k.length>0)&&U`
                    <div class="agent-request-body">
                        ${B&&U`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${k.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${k.map((M,p)=>U`<li key=${p}>${M}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&U`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${E?Z.map((M)=>U`
                            <button 
                                key=${M.optionId||M.id||String(M)}
                                class="agent-request-btn ${M.kind==="allow_once"||M.kind==="allow_always"?"primary":""}"
                                onClick=${()=>J(M.optionId||M.id||M)}
                            >
                                ${M.name||M.label||M.optionId||M.id||String(M)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>J("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>J("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function P7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${N}`}function i5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function P_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function d4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Pq=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),Cq=new Set(["text/markdown"]),Sq=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),yq=new Set(["application/vnd.jgraph.mxfile"]);function d5(_){return typeof _==="string"?_.trim().toLowerCase():""}function Rq(_){let $=d5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function wq(_){let $=d5(_);return!!$&&$.endsWith(".pdf")}function uq(_){let $=d5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function r5(_,$){let j=d5(_);if(Rq($)||yq.has(j))return"drawio";if(wq($)||j==="application/pdf")return"pdf";if(uq($)||Sq.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(Pq.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function C7(_){let $=d5(_);return Cq.has($)}function S7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function fq(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function vq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function y7(_){return fq(_)||vq(_)}function i8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function gq(_,$){let j=Math.max(i8(_),i8($)),Q=Math.min(i8(_),i8($));return(j+0.05)/(Q+0.05)}function bq(_,$,j="#ffffff"){let Q=y7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let N=y7(q);if(!N)continue;let K=gq(Q,N);if(K>Y)Z=q,Y=K}return Z}function W$(){let _=getComputedStyle(document.documentElement),$=(D,k)=>{for(let J of D){let H=_.getPropertyValue(J).trim();if(H)return H}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),N=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),F=bq(N,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:N,good:K,warning:G,attention:X,border:V,fontFamily:B,buttonTextColor:F}}function R7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:N,border:K,fontFamily:G}=W$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var mq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),w7=!1,d8=null,u7=!1;function F$(_){_.querySelector(".adaptive-card-notice")?.remove()}function hq(_,$,j="error"){F$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function pq(_,$=(j)=>L_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function cq(_=($)=>L_($,null)){return($,j)=>{try{let Q=pq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function lq(_){if(u7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=cq(),u7=!0}async function nq(){if(w7)return;if(d8)return d8;return d8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{w7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),d8}function iq(){return globalThis.AdaptiveCards}function dq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function rq(_){return mq.has(_)}function z$(_){if(!Array.isArray(_))return[];return _.filter(dq)}function oq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function H$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>H$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${H$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function sq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return H$($);return typeof $==="string"?$:String($)}function aq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((N)=>Q(N));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=sq(q.type,j[q.id],q);for(let[N,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[N]=Q(K);return q};return Q(_)}function tq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function eq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function _N(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=eq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function f7(_,$,j){if(!rq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await nq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=iq();lq(Q);let Z=new Q.AdaptiveCard,Y=W$();Z.hostConfig=new Q.HostConfig(R7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,N=$.state==="active"?$.payload:aq($.payload,q);Z.parse(N),Z.onExecuteAction=(X)=>{let V=oq(X);if(j?.onAction)F$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let F=B instanceof Error?B.message:String(B||"Action failed.");hq(_,F||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=_N($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=G.detail,X.appendChild(B)}_.appendChild(X)}if(F$(_),_.appendChild(K),G)tq(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function o5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${o5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function v7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:o5(j)})).filter(($)=>$.value)}function $N(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function A$(_){if(!Array.isArray(_))return[];return _.filter($N)}function g7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=o5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=v7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function b7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=v7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):o5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function z5({children:_,className:$=""}){let j=T(null);return v(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{M4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),v5(()=>{let Q=j.current;if(!Q)return;return M4(_,Q),()=>{M4(null,Q)}},[_]),null}function jN(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?P_($):null},{label:"Added",value:_?.created_at?d4(_.created_at):null}].filter((Q)=>Q.value)}function QN(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=x_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function m7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=R0(()=>r5($?.content_type,Q),[$?.content_type,Q]),Y=S7(Z),q=R0(()=>C7($?.content_type),[$?.content_type]),[N,K]=g(Z==="text"),[G,X]=g(""),[V,B]=g(null),F=T(null),D=R0(()=>jN($),[$]),k=R0(()=>QN(_,Q,Z),[_,Q,Z]),J=R0(()=>{if(!q||!G)return"";return L_(G)},[q,G]);return v(()=>{let H=(E)=>{if(E.key==="Escape")j()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[j]),v(()=>{if(!F.current||!J)return;K4(F.current);return},[J]),v(()=>{let H=!1;async function E(){if(Z!=="text"){K(!1),B(null);return}K(!0),B(null);try{let M=await d6(_);if(!H)X(M)}catch{if(!H)B("Failed to load text preview.")}finally{if(!H)K(!1)}}return E(),()=>{H=!0}},[_,Z]),U`
        <${z5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${k&&U`
                                <a
                                    href=${k}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(H)=>H.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${x_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(H)=>H.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${N&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!N&&V&&U`<div class="attachment-preview-state">${V}</div>`}
                        ${!N&&!V&&Z==="image"&&U`
                            <img class="attachment-preview-image" src=${x_(_)} alt=${Q} />
                        `}
                        ${!N&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&k&&U`
                            <iframe class="attachment-preview-frame" src=${k} title=${Q}></iframe>
                        `}
                        ${!N&&!V&&Z==="drawio"&&U`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!N&&!V&&Z==="text"&&q&&U`
                            <div
                                ref=${F}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:J}}
                            />
                        `}
                        ${!N&&!V&&Z==="text"&&!q&&U`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!N&&!V&&Z==="unsupported"&&U`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${D.map((H)=>U`
                            <div class="attachment-preview-meta-item" key=${H.label}>
                                <span class="attachment-preview-meta-label">${H.label}</span>
                                <span class="attachment-preview-meta-value">${H.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${z5}>
    `}function h7({src:_,onClose:$}){return v(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <${z5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${z5}>
    `}function ZN({mediaId:_,onPreview:$}){let[j,Q]=g(null);if(v(()=>{U5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?P_(Y):"",K=r5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${x_(_)} download=${Z} class="file-attachment-main">
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
                        ${q&&U`<span class="file-size">${q}</span>`}
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
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${K}
            </button>
        </div>
    `}function YN({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=g(null);v(()=>{if(!Number.isFinite(j))return;U5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?x_(j):null,K=r5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${Y}>
            ${q?U`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${g_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:U`
                    <${g_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function r8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?d4(Q):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&U`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function qN({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?P_(_.size):"",Z=_.mime_type||"",Y=GN(Z),q=i4(_.uri);return U`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(N)=>N.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&U`<span>${Z}</span>`}
                    ${Q&&U`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function NN({block:_}){let[$,j]=g(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&U`
                ${Z&&U`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&U`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(K),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function KN({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=B$(_,$),Z=F7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",N=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return U`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${N&&U`<div class="generated-widget-launch-description">${N}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function GN(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function XN({preview:_}){let $=i4(_.url),j=i4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Q}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function VN(_,$){return typeof _==="string"?_:""}var BN=1800,UN=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,LN=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,WN=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function FN(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function HN(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let N=q||"idle";if(Y.dataset.copyState=N,N==="success")Y.innerHTML=LN,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(N==="error")Y.innerHTML=WN,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=UN,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",Z(N,"idle"),q.appendChild(N);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await FN(V);Z(N,B?"success":"error");let F=j.get(N);if(F)clearTimeout(F);let D=setTimeout(()=>{Z(N,"idle"),j.delete(N)},BN);j.set(N,D)};N.addEventListener("click",K),Q.push(()=>{N.removeEventListener("click",K);let G=j.get(N);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function zN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function AN(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function JN(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],F=(V[2]||"").trim()||B;Z.push({id:B,label:F,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function ON(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function DN(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(ON).sort((X,V)=>V.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),N=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=N.nextNode())K.push(G);for(let X of K){let V=X.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=X.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let F=V.split(Z).filter((k)=>k!=="");if(F.length===0)continue;let D=q.createDocumentFragment();for(let k of F)if(Y.test(k)){let J=q.createElement("mark");J.className="search-highlight-term",J.textContent=k,D.appendChild(J)}else D.appendChild(q.createTextNode(k));X.parentNode.replaceChild(D,X)}return q.body.innerHTML}function p7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:N,userAvatarUrl:K,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:B,isThreadNext:F,isRemoving:D,highlightQuery:k,onFileRef:J,onOpenWidget:H}){let[E,M]=g(null),p=T(null),b=_.data,n=b.type==="agent_response",t=N||"You",y=n?Y||k7:t,C=n?U$(Y,q,!0):U$(t,K),A=typeof G==="string"?G.trim().toLowerCase():"",P=!n&&C.image&&(A==="clear"||A==="transparent"),m=n&&Boolean(C.image),Q0=`background-color: ${P||m?"transparent":C.color}`,c=b.content_meta,_0=Boolean(c?.truncated),e=Boolean(c?.preview),q0=_0&&!e,K0=_0?{originalLength:Number.isFinite(c?.original_length)?c.original_length:b.content?b.content.length:0,maxLength:Number.isFinite(c?.max_length)?c.max_length:0}:null,G0=b.content_blocks||[],W0=b.media_ids||[],A0=VN(b.content,b.link_previews),{content:J0,fileRefs:n0}=zN(A0),{content:P0,messageRefs:k0}=AN(J0),{content:i0,attachments:d0}=JN(P0);A0=i0;let g0=z$(G0),s0=A$(G0),f0=g0.length===1&&typeof g0[0]?.fallback_text==="string"?g0[0].fallback_text.trim():"",e0=s0.length===1?g7(s0[0]).trim():"",F0=Boolean(f0)&&A0?.trim()===f0||Boolean(e0)&&A0?.trim()===e0,b0=Boolean(A0)&&!q0&&!F0,_1=typeof k==="string"?k.trim():"",$1=R0(()=>{if(!A0||F0)return"";let S=L_(A0,j);return _1?DN(S,_1):S},[A0,F0,_1]),e1=(S,a)=>{S.stopPropagation(),M(x_(a))},[z1,a0]=g(null),p1=(S)=>{a0(S)},O1=(S)=>{S.stopPropagation(),X?.(_)},Z1=(S,a)=>{let U0=new Set;if(!S||a.length===0)return{content:S,usedIds:U0};return{content:S.replace(/attachment:([^\s)"']+)/g,(l0,j1,A1,Y1)=>{let c1=j1.replace(/^\/+/,""),K_=a.find((G_)=>G_.name&&G_.name.toLowerCase()===c1.toLowerCase()&&!U0.has(G_.id))||a.find((G_)=>!U0.has(G_.id));if(!K_)return l0;if(U0.add(K_.id),Y1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${K_.id}`;return K_.name||"attachment"}),usedIds:U0}},v0=[],y1=[],D1=[],s=[],X0=[],L0=[],N0=[],C0=0;if(G0.length>0)G0.forEach((S)=>{if(S?.type==="text"&&S.annotations)N0.push(S.annotations);if(S?.type==="generated_widget")L0.push(S);else if(S?.type==="resource_link")s.push(S);else if(S?.type==="resource")X0.push(S);else if(S?.type==="file"){let a=W0[C0++];if(a)y1.push(a),D1.push({id:a,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let a=W0[C0++];if(a){let U0=typeof S?.mime_type==="string"?S.mime_type:void 0;v0.push({id:a,annotations:S?.annotations,mimeType:U0}),D1.push({id:a,name:S?.name||S?.filename||S?.title})}}});else if(W0.length>0){let S=d0.length>0;W0.forEach((a,U0)=>{let O0=d0[U0]||null;if(D1.push({id:a,name:O0?.label||null}),S)y1.push(a);else v0.push({id:a,annotations:null})})}if(d0.length>0)d0.forEach((S)=>{if(!S?.id)return;let a=D1.find((U0)=>String(U0.id)===String(S.id));if(a&&!a.name)a.name=S.label});let{content:S0,usedIds:w0}=Z1(A0,D1);A0=S0;let E0=v0.filter(({id:S})=>!w0.has(S)),y0=y1.filter((S)=>!w0.has(S)),p0=d0.length>0?d0.map((S,a)=>({id:S.id||`attachment-${a+1}`,label:S.label||`attachment-${a+1}`})):D1.map((S,a)=>({id:S.id,label:S.name||`attachment-${a+1}`})),z0=R0(()=>z$(G0),[G0]),u0=R0(()=>A$(G0),[G0]),H0=R0(()=>{return z0.map((S)=>`${S.card_id}:${S.state}`).join("|")},[z0]);v(()=>{if(!p.current)return;return K4(p.current),HN(p.current)},[$1]);let j0=T(null);return v(()=>{if(!j0.current||z0.length===0)return;let S=j0.current;S.innerHTML="";for(let a of z0){let U0=document.createElement("div");S.appendChild(U0),f7(U0,a,{onAction:async(O0)=>{if(O0.type==="Action.OpenUrl"){let l0=i4(O0.url||"");if(!l0)throw Error("Invalid URL");window.open(l0,"_blank","noopener,noreferrer");return}if(O0.type==="Action.Submit"){await p6({post_id:_.id,thread_id:b.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:O0.type,title:O0.title||"",data:O0.data}});return}console.warn("[post] unsupported adaptive card action:",O0.type,O0)}}).catch((O0)=>{console.error("[post] adaptive card render error:",O0),U0.textContent=a.fallback_text||"Card failed to render."})}},[H0,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${n?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${F?"thread-next":""} ${D?"removing":""}" onClick=${$}>
            <div class="post-avatar ${n?"agent-avatar":""} ${C.image?"has-image":""}" style=${Q0}>
                ${C.image?U`<img src=${C.image} alt=${y} />`:C.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${O1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${y}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),Q)Q(_.id)}}>${P7(_.timestamp)}</a>
                </div>
                ${q0&&K0&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${i5(K0.originalLength)} chars
                            ${K0.maxLength?U` • Display limit: ${i5(K0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&K0&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${i5(K0.maxLength)} of ${i5(K0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||k0.length>0||p0.length>0)&&U`
                    <div class="post-file-refs">
                        ${k0.map((S)=>{let a=(U0)=>{if(U0.preventDefault(),U0.stopPropagation(),Z)Z(S,_.chat_jid||null);else{let O0=document.getElementById("post-"+S);if(O0)O0.scrollIntoView({behavior:"smooth",block:"center"}),O0.classList.add("post-highlight"),setTimeout(()=>O0.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${a}>
                                    <${g_}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${n0.map((S)=>{let a=S.split("/").pop()||S;return U`
                                <${g_}
                                    prefix="post"
                                    label=${a}
                                    title=${S}
                                    onClick=${()=>J?.(S)}
                                />
                            `})}
                        ${p0.map((S)=>U`
                            <${YN}
                                key=${S.id}
                                attachment=${S}
                                onPreview=${p1}
                            />
                        `)}
                    </div>
                `}
                ${b0&&U`
                    <div 
                        ref=${p}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:$1}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let a=S.target.dataset.hashtag;if(a)j?.(a)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),M(S.target.src)}}
                    />
                `}
                ${z0.length>0&&U`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((S,a)=>{let U0=b7(S),O0=`${S.card_id}-${a}`;return U`
                                <div key=${O0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${U0.title}</span>
                                        </div>
                                    </div>
                                    ${U0.fields.length>0&&U`
                                        <div class="adaptive-card-submission-fields">
                                            ${U0.fields.map((l0)=>U`
                                                <span class="adaptive-card-submission-field" title=${`${l0.key}: ${l0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${l0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${l0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${d4(U0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${L0.length>0&&U`
                    <div class="generated-widget-launches">
                        ${L0.map((S,a)=>U`
                            <${KN}
                                key=${S.widget_id||S.id||`${_.id}-widget-${a}`}
                                block=${S}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&U`
                    ${N0.map((S,a)=>U`
                        <${r8} key=${a} annotations=${S} />
                    `)}
                `}
                ${E0.length>0&&U`
                    <div class="media-preview">
                        ${E0.map(({id:S,mimeType:a})=>{let O0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?x_(S):i6(S);return U`
                                <img 
                                    key=${S} 
                                    src=${O0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(l0)=>e1(l0,S)}
                                />
                            `})}
                    </div>
                `}
                ${E0.length>0&&U`
                    ${E0.map(({annotations:S},a)=>U`
                        ${S&&U`<${r8} key=${a} annotations=${S} />`}
                    `)}
                `}
                ${y0.length>0&&U`
                    <div class="file-attachments">
                        ${y0.map((S)=>U`
                            <${ZN} key=${S} mediaId=${S} onPreview=${p1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&U`
                    <div class="resource-links">
                        ${s.map((S,a)=>U`
                            <div key=${a}>
                                <${qN} block=${S} />
                                <${r8} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${X0.length>0&&U`
                    <div class="resource-embeds">
                        ${X0.map((S,a)=>U`
                            <div key=${a}>
                                <${NN} block=${S} />
                                <${r8} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${b.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${b.link_previews.map((S,a)=>U`
                            <${XN} key=${a} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&U`<${h7} src=${E} onClose=${()=>M(null)} />`}
        ${z1&&U`
            <${m7}
                mediaId=${z1.mediaId}
                info=${z1.info}
                onClose=${()=>a0(null)}
            />
        `}
    `}function c7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:N,onOpenWidget:K,emptyMessage:G,timelineRef:X,agents:V,user:B,onDeletePost:F,reverse:D=!0,removingPostIds:k,searchQuery:J}){let[H,E]=g(!1),M=T(null),p=typeof IntersectionObserver<"u",b=x(async()=>{if(!j||!$||H)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,H,j]),n=x((c)=>{let{scrollTop:_0,scrollHeight:e,clientHeight:q0}=c.target,K0=D?e-q0-_0:_0,G0=Math.max(300,q0);if(K0<G0)b()},[D,b]);v(()=>{if(!p)return;let c=M.current,_0=X?.current;if(!c||!_0)return;let e=300,q0=new IntersectionObserver((K0)=>{for(let G0 of K0){if(!G0.isIntersecting)continue;b()}},{root:_0,rootMargin:`${e}px 0px ${e}px 0px`,threshold:0});return q0.observe(c),()=>q0.disconnect()},[p,$,j,X,b]);let t=T(b);if(t.current=b,v(()=>{if(p)return;if(!X?.current)return;let{scrollTop:c,scrollHeight:_0,clientHeight:e}=X.current,q0=D?_0-e-c:c,K0=Math.max(300,e);if(q0<K0)t.current?.()},[p,_,$,D,X]),v(()=>{if(!X?.current)return;if(!$||H)return;let{scrollTop:c,scrollHeight:_0,clientHeight:e}=X.current,q0=D?_0-e-c:c,K0=Math.max(300,e);if(_0<=e+1||q0<K0)t.current?.()},[_,$,H,D,X]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let y=_.slice().sort((c,_0)=>c.id-_0.id),C=(c)=>{let _0=c?.data?.thread_id;if(_0===null||_0===void 0||_0==="")return null;let e=Number(_0);return Number.isFinite(e)?e:null},A=new Map;for(let c=0;c<y.length;c+=1){let _0=y[c],e=Number(_0?.id),q0=C(_0);if(q0!==null){let K0=A.get(q0)||{anchorIndex:-1,replyIndexes:[]};K0.replyIndexes.push(c),A.set(q0,K0)}else if(Number.isFinite(e)){let K0=A.get(e)||{anchorIndex:-1,replyIndexes:[]};K0.anchorIndex=c,A.set(e,K0)}}let P=new Map;for(let[c,_0]of A.entries()){let e=new Set;if(_0.anchorIndex>=0)e.add(_0.anchorIndex);for(let q0 of _0.replyIndexes)e.add(q0);P.set(c,Array.from(e).sort((q0,K0)=>q0-K0))}let m=y.map((c,_0)=>{let e=C(c);if(e===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=P.get(e);if(!q0||q0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let K0=q0.indexOf(_0);if(K0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:K0>0,hasThreadNext:K0<q0.length-1}}),Q0=U`<div class="timeline-sentinel" ref=${M}></div>`;return U`
        <div class="timeline ${D?"reverse":"normal"}" ref=${X} onScroll=${n}>
            <div class="timeline-content">
                ${D?Q0:null}
                ${y.map((c,_0)=>{let e=Boolean(c.data?.thread_id&&c.data.thread_id!==c.id),q0=k?.has?.(c.id),K0=m[_0]||{};return U`
                    <${p7}
                        key=${c.id}
                        post=${c}
                        isThreadReply=${e}
                        isThreadPrev=${K0.hasThreadPrev}
                        isThreadNext=${K0.hasThreadNext}
                        isRemoving=${q0}
                        highlightQuery=${J}
                        agentName=${M7(c.data?.agent_id,V||{})}
                        agentAvatarUrl=${I7(c.data?.agent_id,V||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>Q?.(c)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${N}
                        onOpenWidget=${K}
                        onDelete=${F}
                    />
                `})}
                ${D?null:Q0}
            </div>
        </div>
    `}class l7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var c0=new l7;var o8=null,J$=null;function EN(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function n7(){if(J$)return Promise.resolve(J$);if(!o8)o8=import(EN()).then((_)=>{return J$=_,_}).catch((_)=>{throw o8=null,_});return o8}class i7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await n7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new i7(_,$)}};function D$(){n7().catch(()=>{})}var r4="piclaw://terminal";var kN={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},MN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},s8=null,E$=null;function IN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function TN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!IN(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function xN(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!s8)s8=TN(()=>Promise.resolve($.init?.())).catch((j)=>{throw s8=null,j});return await s8,$}async function PN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!E$)E$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await E$}async function CN(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function SN(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function yN(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function RN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function d7(){let _=yN(),$=_?MN:kN,j=G4("--bg-primary",_?"#000000":"#ffffff"),Q=G4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=G4("--text-secondary",_?"#71767b":"#536471"),Y=G4("--accent-color","#1d9bf0"),q=G4("--danger-color",_?"#ff7b72":"#cf222e"),N=G4("--success-color",_?"#7ee787":"#1a7f37"),K=G4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=G4("--border-color",_?"#2f3336":"#eff3f4"),X=G4("--accent-soft-strong",RN(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:K,red:q,green:N,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class k${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await xN();if(await PN(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:d7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=d7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await CN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(SN($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var M$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k$(_,$)}},I$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new k$(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function a8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function r7(_,$={}){if(X4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:wN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function T$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function x$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function P$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function C$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function o7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function s7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,N]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(N===null||N===void 0||N==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(N))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function wN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function uN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function a7(_,$={}){if(X4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function s5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function fN(_){try{return JSON.parse(_)}catch{return null}}function vN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function gN(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class S${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=gN($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||fN;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=vN(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var a5=()=>{throw Error("Operation requires compiling with --exportRuntime")},bN=typeof BigUint64Array<"u",t5=Symbol();var mN=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function t7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return mN.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function e7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return t7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,N,K){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${N}:${K}`)},Q.trace=Q.trace||function(Y,q,...N){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${N.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function _9(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||a5,q=j.__pin||a5,N=j.__unpin||a5,K=j.__collect||a5,G=j.__rtti_base,X=G?(A)=>A[G>>>2]:a5;_.__new=Y,_.__pin=q,_.__unpin=N,_.__collect=K;function V(A){let P=new Uint32Array(Q.buffer);if((A>>>=0)>=X(P))throw Error(`invalid id: ${A}`);return P[(G+4>>>2)+A]}function B(A){let P=V(A);if(!(P&7))throw Error(`not an array: ${A}, flags=${P}`);return P}function F(A){return 31-Math.clz32(A>>>6&31)}function D(A){if(A==null)return 0;let P=A.length,m=Y(P<<1,2),Q0=new Uint16Array(Q.buffer);for(let c=0,_0=m>>>1;c<P;++c)Q0[_0+c]=A.charCodeAt(c);return m}_.__newString=D;function k(A){if(A==null)return 0;let P=new Uint8Array(A),m=Y(P.length,1);return new Uint8Array(Q.buffer).set(P,m),m}_.__newArrayBuffer=k;function J(A){if(!A)return null;let P=Q.buffer;if(new Uint32Array(P)[A+-8>>>2]!==2)throw Error(`not a string: ${A}`);return t7(P,A)}_.__getString=J;function H(A,P,m){let Q0=Q.buffer;if(m)switch(A){case 2:return new Float32Array(Q0);case 3:return new Float64Array(Q0)}else switch(A){case 0:return new(P?Int8Array:Uint8Array)(Q0);case 1:return new(P?Int16Array:Uint16Array)(Q0);case 2:return new(P?Int32Array:Uint32Array)(Q0);case 3:return new(P?BigInt64Array:BigUint64Array)(Q0)}throw Error(`unsupported align: ${A}`)}function E(A,P=0){let m=P,Q0=B(A),c=F(Q0),_0=typeof m!=="number",e=_0?m.length:m,q0=Y(e<<c,Q0&4?A:1),K0;if(Q0&4)K0=q0;else{q(q0);let G0=Y(Q0&2?16:12,A);N(q0);let W0=new Uint32Array(Q.buffer);if(W0[G0+0>>>2]=q0,W0[G0+4>>>2]=q0,W0[G0+8>>>2]=e<<c,Q0&2)W0[G0+12>>>2]=e;K0=G0}if(_0){let G0=H(c,Q0&2048,Q0&4096),W0=q0>>>c;if(Q0&16384)for(let A0=0;A0<e;++A0)G0[W0+A0]=m[A0];else G0.set(m,W0)}return K0}_.__newArray=E;function M(A){let P=new Uint32Array(Q.buffer),m=P[A+-8>>>2],Q0=B(m),c=F(Q0),_0=Q0&4?A:P[A+4>>>2],e=Q0&2?P[A+12>>>2]:P[_0+-4>>>2]>>>c;return H(c,Q0&2048,Q0&4096).subarray(_0>>>=c,_0+e)}_.__getArrayView=M;function p(A){let P=M(A),m=P.length,Q0=Array(m);for(let c=0;c<m;c++)Q0[c]=P[c];return Q0}_.__getArray=p;function b(A){let P=Q.buffer,m=new Uint32Array(P)[A+-4>>>2];return P.slice(A,A+m)}_.__getArrayBuffer=b;function n(A){if(!Z)throw Error("Operation requires compiling with --exportTable");let P=new Uint32Array(Q.buffer)[A>>>2];return Z.get(P)}_.__getFunction=n;function t(A,P,m){return new A(y(A,P,m))}function y(A,P,m){let Q0=Q.buffer,c=new Uint32Array(Q0);return new A(Q0,c[m+4>>>2],c[m+8>>>2]>>>P)}function C(A,P,m){_[`__get${P}`]=t.bind(null,A,m),_[`__get${P}View`]=y.bind(null,A,m)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((A)=>{C(A,A.name,31-Math.clz32(A.BYTES_PER_ELEMENT))}),bN)[BigUint64Array,BigInt64Array].forEach((A)=>{C(A,A.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,pN(j,_)}function $9(_){return typeof Response<"u"&&_ instanceof Response}function hN(_){return _ instanceof WebAssembly.Module}async function y$(_,$={}){if($9(_=await _))return t8(_,$);let j=hN(_)?_:await WebAssembly.compile(_),Q=e7($),Z=await WebAssembly.instantiate(j,$),Y=_9(Q,Z);return{module:j,instance:Z,exports:Y}}async function t8(_,$={}){if(!WebAssembly.instantiateStreaming)return y$($9(_=await _)?_.arrayBuffer():_,$);let j=e7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=_9(j,Q.instance);return{...Q,exports:Z}}function pN(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let N=Y[0],K=N.indexOf("#");if(K>=0){let G=N.substring(0,K),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[t5]}},V.wrap=function(B){return Object.create(V.prototype,{[t5]:{value:B,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(X,B)));q[G]=V}if(N=N.substring(K+1),q=q[G].prototype,/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,N,{get(){return V(this[t5])},set(F){B(this[t5],F)},enumerable:!0})}}else if(N==="constructor")(q[N]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[N]=function(...V){return j(V.length),Z(this[t5],...V)}).original=Z}else if(/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4)))Object.defineProperty(q,N,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[N]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[N]=Z}return $}var lN="/static/js/vendor/remote-display-decoder.wasm",e8=null;function j9(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function Q9(){if(e8)return e8;return e8=(async()=>{try{let Q=function(Z,Y,q,N,K,G,X){let V=j9(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,N,K,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(lN,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof t8==="function"?await t8(_,{}):await y$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,N,K,G){return Q("processRawRect",Z,Y,q,N,K,G)},processCopyRect(Z,Y,q,N,K,G){return j.processCopyRect(Z,Y,q,N,K,G)},processRreRect(Z,Y,q,N,K,G){return Q("processRreRect",Z,Y,q,N,K,G)},processHextileRect(Z,Y,q,N,K,G){return Q("processHextileRect",Z,Y,q,N,K,G)},processZrleTileData(Z,Y,q,N,K,G){return Q("processZrleTileData",Z,Y,q,N,K,G)},decodeRawRectToRgba(Z,Y,q,N){let K=j9(Z),G=j.__pin(j.__newArrayBuffer(K));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),e8}function A5(_,$,j){return Math.max($,Math.min(j,_))}function _6(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function w$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function Z9(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),N=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/N,X=(Number($||0)-Number(j?.top||0))/K;return{x:A5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(X*q),0,Math.max(0,q-1))}}function Y9(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[_6(Y,$,j),_6(Number(Q||0),$,j)]}function q9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function e5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function N9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),N=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/N);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var R$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)R$[`F${_}`]=65470+(_-1);function u$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(R$,Y))return R$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var S1=Uint8Array,F_=Uint16Array,l$=Int32Array,$6=new S1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),j6=new S1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m$=new S1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),V9=function(_,$){var j=new F_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new l$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},B9=V9($6,2),U9=B9.b,h$=B9.r;U9[28]=258,h$[258]=28;var L9=V9(j6,0),nN=L9.b,K9=L9.r,p$=new F_(32768);for(h0=0;h0<32768;++h0)a_=(h0&43690)>>1|(h0&21845)<<1,a_=(a_&52428)>>2|(a_&13107)<<2,a_=(a_&61680)>>4|(a_&3855)<<4,p$[h0]=((a_&65280)>>8|(a_&255)<<8)>>1;var a_,h0,t_=function(_,$,j){var Q=_.length,Z=0,Y=new F_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new F_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var N;if(j){N=new F_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],V=q[_[Z]-1]++<<X;for(var B=V|(1<<X)-1;V<=B;++V)N[p$[V]>>K]=G}}else{N=new F_(Q);for(Z=0;Z<Q;++Z)if(_[Z])N[Z]=p$[q[_[Z]-1]++]>>15-_[Z]}return N},T4=new S1(288);for(h0=0;h0<144;++h0)T4[h0]=8;var h0;for(h0=144;h0<256;++h0)T4[h0]=9;var h0;for(h0=256;h0<280;++h0)T4[h0]=7;var h0;for(h0=280;h0<288;++h0)T4[h0]=8;var h0,Q8=new S1(32);for(h0=0;h0<32;++h0)Q8[h0]=5;var h0,iN=t_(T4,9,0),dN=t_(T4,9,1),rN=t_(Q8,5,0),oN=t_(Q8,5,1),f$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},b_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},v$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},n$=function(_){return(_+7)/8|0},j8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new S1(_.subarray($,j))};var sN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N_=function(_,$,j){var Q=Error($||sN[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,N_);if(!j)throw Q;return Q},aN=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new S1(0);var q=!j,N=q||$.i!=2,K=$.i;if(q)j=new S1(Z*3);var G=function(e0){var F0=j.length;if(e0>F0){var b0=new S1(Math.max(F0*2,e0));b0.set(j),j=b0}},X=$.f||0,V=$.p||0,B=$.b||0,F=$.l,D=$.d,k=$.m,J=$.n,H=Z*8;do{if(!F){X=b_(_,V,1);var E=b_(_,V+1,3);if(V+=3,!E){var M=n$(V)+4,p=_[M-4]|_[M-3]<<8,b=M+p;if(b>Z){if(K)N_(0);break}if(N)G(B+p);j.set(_.subarray(M,b),B),$.b=B+=p,$.p=V=b*8,$.f=X;continue}else if(E==1)F=dN,D=oN,k=9,J=5;else if(E==2){var n=b_(_,V,31)+257,t=b_(_,V+10,15)+4,y=n+b_(_,V+5,31)+1;V+=14;var C=new S1(y),A=new S1(19);for(var P=0;P<t;++P)A[m$[P]]=b_(_,V+P*3,7);V+=t*3;var m=f$(A),Q0=(1<<m)-1,c=t_(A,m,1);for(var P=0;P<y;){var _0=c[b_(_,V,Q0)];V+=_0&15;var M=_0>>4;if(M<16)C[P++]=M;else{var e=0,q0=0;if(M==16)q0=3+b_(_,V,3),V+=2,e=C[P-1];else if(M==17)q0=3+b_(_,V,7),V+=3;else if(M==18)q0=11+b_(_,V,127),V+=7;while(q0--)C[P++]=e}}var K0=C.subarray(0,n),G0=C.subarray(n);k=f$(K0),J=f$(G0),F=t_(K0,k,1),D=t_(G0,J,1)}else N_(1);if(V>H){if(K)N_(0);break}}if(N)G(B+131072);var W0=(1<<k)-1,A0=(1<<J)-1,J0=V;for(;;J0=V){var e=F[v$(_,V)&W0],n0=e>>4;if(V+=e&15,V>H){if(K)N_(0);break}if(!e)N_(2);if(n0<256)j[B++]=n0;else if(n0==256){J0=V,F=null;break}else{var P0=n0-254;if(n0>264){var P=n0-257,k0=$6[P];P0=b_(_,V,(1<<k0)-1)+U9[P],V+=k0}var i0=D[v$(_,V)&A0],d0=i0>>4;if(!i0)N_(3);V+=i0&15;var G0=nN[d0];if(d0>3){var k0=j6[d0];G0+=v$(_,V)&(1<<k0)-1,V+=k0}if(V>H){if(K)N_(0);break}if(N)G(B+131072);var g0=B+P0;if(B<G0){var s0=Y-G0,f0=Math.min(G0,g0);if(s0+B<0)N_(3);for(;B<f0;++B)j[B]=Q[s0+B]}for(;B<g0;++B)j[B]=j[B-G0]}}if($.l=F,$.p=J0,$.b=B,$.f=X,F)X=1,$.m=k,$.d=D,$.n=J}while(!X);return B!=j.length&&q?j8(j,0,B):j.subarray(0,B)},B4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},_8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},g$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:F9,l:0};if(Z==1){var q=new S1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(b,n){return b.f-n.f}),j.push({s:-1,f:25001});var N=j[0],K=j[1],G=0,X=1,V=2;j[0]={s:-1,f:N.f+K.f,l:N,r:K};while(X!=Z-1)N=j[j[G].f<j[V].f?G++:V++],K=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:N.f+K.f,l:N,r:K};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var F=new F_(B+1),D=c$(j[X-1],F,0);if(D>$){var Q=0,k=0,J=D-$,H=1<<J;Y.sort(function(n,t){return F[t.s]-F[n.s]||n.f-t.f});for(;Q<Z;++Q){var E=Y[Q].s;if(F[E]>$)k+=H-(1<<D-F[E]),F[E]=$;else break}k>>=J;while(k>0){var M=Y[Q].s;if(F[M]<$)k-=1<<$-F[M]++-1;else++Q}for(;Q>=0&&k;--Q){var p=Y[Q].s;if(F[p]==$)--F[p],++k}D=$}return{t:new S1(F),l:D}},c$=function(_,$,j){return _.s==-1?Math.max(c$(_.l,$,j+1),c$(_.r,$,j+1)):$[_.s]=j},G9=function(_){var $=_.length;while($&&!_[--$]);var j=new F_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var N=1;N<=$;++N)if(_[N]==Z&&N!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[N]}return{c:j.subarray(0,Q),n:$}},$8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},W9=function(_,$,j){var Q=j.length,Z=n$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},X9=function(_,$,j,Q,Z,Y,q,N,K,G,X){B4($,X++,j),++Z[256];var V=g$(Z,15),B=V.t,F=V.l,D=g$(Y,15),k=D.t,J=D.l,H=G9(B),E=H.c,M=H.n,p=G9(k),b=p.c,n=p.n,t=new F_(19);for(var y=0;y<E.length;++y)++t[E[y]&31];for(var y=0;y<b.length;++y)++t[b[y]&31];var C=g$(t,7),A=C.t,P=C.l,m=19;for(;m>4&&!A[m$[m-1]];--m);var Q0=G+5<<3,c=$8(Z,T4)+$8(Y,Q8)+q,_0=$8(Z,B)+$8(Y,k)+q+14+3*m+$8(t,A)+2*t[16]+3*t[17]+7*t[18];if(K>=0&&Q0<=c&&Q0<=_0)return W9($,X,_.subarray(K,K+G));var e,q0,K0,G0;if(B4($,X,1+(_0<c)),X+=2,_0<c){e=t_(B,F,0),q0=B,K0=t_(k,J,0),G0=k;var W0=t_(A,P,0);B4($,X,M-257),B4($,X+5,n-1),B4($,X+10,m-4),X+=14;for(var y=0;y<m;++y)B4($,X+3*y,A[m$[y]]);X+=3*m;var A0=[E,b];for(var J0=0;J0<2;++J0){var n0=A0[J0];for(var y=0;y<n0.length;++y){var P0=n0[y]&31;if(B4($,X,W0[P0]),X+=A[P0],P0>15)B4($,X,n0[y]>>5&127),X+=n0[y]>>12}}}else e=iN,q0=T4,K0=rN,G0=Q8;for(var y=0;y<N;++y){var k0=Q[y];if(k0>255){var P0=k0>>18&31;if(_8($,X,e[P0+257]),X+=q0[P0+257],P0>7)B4($,X,k0>>23&31),X+=$6[P0];var i0=k0&31;if(_8($,X,K0[i0]),X+=G0[i0],i0>3)_8($,X,k0>>5&8191),X+=j6[i0]}else _8($,X,e[k0]),X+=q0[k0]}return _8($,X,e[256]),X+q0[256]},tN=new l$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F9=new S1(0),eN=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,N=new S1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=N.subarray(Q,N.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)K[0]=Y.r>>3;var V=tN[$-1],B=V>>13,F=V&8191,D=(1<<j)-1,k=Y.p||new F_(32768),J=Y.h||new F_(D+1),H=Math.ceil(j/3),E=2*H,M=function(_1){return(_[_1]^_[_1+1]<<H^_[_1+2]<<E)&D},p=new l$(25000),b=new F_(288),n=new F_(32),t=0,y=0,C=Y.i||0,A=0,P=Y.w||0,m=0;for(;C+2<q;++C){var Q0=M(C),c=C&32767,_0=J[Q0];if(k[c]=_0,J[Q0]=c,P<=C){var e=q-C;if((t>7000||A>24576)&&(e>423||!G)){X=X9(_,K,0,p,b,n,y,A,m,C-m,X),A=t=y=0,m=C;for(var q0=0;q0<286;++q0)b[q0]=0;for(var q0=0;q0<30;++q0)n[q0]=0}var K0=2,G0=0,W0=F,A0=c-_0&32767;if(e>2&&Q0==M(C-A0)){var J0=Math.min(B,e)-1,n0=Math.min(32767,C),P0=Math.min(258,e);while(A0<=n0&&--W0&&c!=_0){if(_[C+K0]==_[C+K0-A0]){var k0=0;for(;k0<P0&&_[C+k0]==_[C+k0-A0];++k0);if(k0>K0){if(K0=k0,G0=A0,k0>J0)break;var i0=Math.min(A0,k0-2),d0=0;for(var q0=0;q0<i0;++q0){var g0=C-A0+q0&32767,s0=k[g0],f0=g0-s0&32767;if(f0>d0)d0=f0,_0=g0}}}c=_0,_0=k[c],A0+=c-_0&32767}}if(G0){p[A++]=268435456|h$[K0]<<18|K9[G0];var e0=h$[K0]&31,F0=K9[G0]&31;y+=$6[e0]+j6[F0],++b[257+e0],++n[F0],P=C+K0,++t}else p[A++]=_[C],++b[_[C]]}}for(C=Math.max(C,P);C<q;++C)p[A++]=_[C],++b[_[C]];if(X=X9(_,K,G,p,b,n,y,A,m,C-m,X),!G)Y.r=X&7|K[X/8|0]<<3,X-=7,Y.h=J,Y.p=k,Y.i=C,Y.w=P}else{for(var C=Y.w||0;C<q+G;C+=65535){var b0=C+65535;if(b0>=q)K[X/8|0]=G,b0=q;X=W9(K,X+1,_.subarray(C,b0))}Y.i=q}return j8(N,0,Q+n$(X)+Z)};var H9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var N=Math.min(q+2655,Y);for(;q<N;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},_K=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new S1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return eN(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var z9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var $K=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=H9();Z.p($.dictionary),z9(_,2,Z.d())}},jK=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var b$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new S1(32768),this.p=new S1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)N_(5);if(this.d)N_(4);if(!this.p.length)this.p=$;else if($.length){var j=new S1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=aN(this.p,this.s,this.o);this.ondata(j8(Q,j,this.s.b),this.d),this.o=j8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=j8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function A9(_,$){if(!$)$={};var j=H9();j.p(_);var Q=_K(_,$,$.dictionary?6:2,4);return $K(Q,$),z9(Q,Q.length-4,j.d()),Q}var J9=function(){function _($,j){b$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(b$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(jK(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}b$.prototype.c.call(this,j)},_}();var QK=typeof TextDecoder<"u"&&new TextDecoder,ZK=0;try{QK.decode(F9,{stream:!0}),ZK=1}catch(_){}var YK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],qK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],NK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],KK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],GK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],XK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],VK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],BK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],E9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;E9[_]=$}function k9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function M9(_){let $=0n,j=k9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function UK(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function J5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function O9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function LK(_){let $=J5(M9(_),GK,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of VK){j=O9(j,Y),Q=O9(Q,Y);let q=j<<28n|Q;Z.push(J5(q,XK,56))}return Z}function WK(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(BK[j][Y][q])}return $}function FK(_,$){let j=J5(_,NK,32)^BigInt($),Q=WK(j);return J5(Q,KK,32)}function D9(_,$){let j=LK($),Q=J5(M9(_),YK,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let N of j){let K=Y,G=(Z^FK(Y,N))&0xffffffffn;Z=K,Y=G}let q=Y<<32n|Z;return UK(J5(q,qK,64),8)}function HK(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=E9[Z]}return j}function I9(_,$){let j=k9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=HK(_),Z=new Uint8Array(16);return Z.set(D9(j.slice(0,8),Q),0),Z.set(D9(j.slice(8,16),Q),8),Z}var m_="vnc";function zK(_){return Number(_)}function AK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=zK(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function E5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function JK(_,$){let j=E5(_),Q=E5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function OK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=E5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function DK(){return(_)=>{let $=E5(_);try{let j=[],Q=new J9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return OK(j)}catch(j){try{let Q=A9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function EK(_){return new TextEncoder().encode(String(_||""))}function O5(_){return new TextDecoder().decode(E5(_))}function kK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function MK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function T9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function IK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function TK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function x9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function D5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function C9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function xK(_,$,j,Q){let Z=Q||k5,Y=E5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),N=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<N)throw Error(`Incomplete raw rectangle payload: expected ${N} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=C9(Y,G,q,Z.bigEndian),F=D5(B>>>Z.redShift&Z.redMax,Z.redMax),D=D5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),k=D5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);K[X]=F,K[X+1]=D,K[X+2]=k,K[X+3]=255,G+=q,X+=4}return K}function U4(_,$,j){let Q=j||k5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=C9(_,$,Z,Q.bigEndian);return{rgba:[D5(Y>>>Q.redShift&Q.redMax,Q.redMax),D5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),D5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function x4(_,$,j,Q,Z,Y,q){if(!q)return;for(let N=0;N<Y;N+=1)for(let K=0;K<Z;K+=1){let G=((Q+N)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function S9(_,$,j,Q,Z,Y,q){for(let N=0;N<Y;N+=1){let K=N*Z*4,G=((Q+N)*$+j)*4;_.set(q.subarray(K,K+Z*4),G)}}function P9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function PK(_,$,j,Q,Z,Y,q){let N=Z||k5,K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let B=0,F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let D=0;D<Q;D+=64){let k=Math.min(64,Q-D);for(let J=0;J<j;J+=64){let H=Math.min(64,j-J);if(V.byteLength<B+1)return null;let E=V[B++],M=E&127,p=(E&128)!==0;if(!p&&M===0){let b=H*k*K;if(V.byteLength<B+b)return null;let n=Y(V.slice(B,B+b),H,k,N);B+=b,S9(F,j,J,D,H,k,n);continue}if(!p&&M===1){let b=U4(V,B,N);if(!b)return null;B+=b.bytesPerPixel,x4(F,j,J,D,H,k,b.rgba);continue}if(!p&&M>1&&M<=16){let b=[];for(let C=0;C<M;C+=1){let A=U4(V,B,N);if(!A)return null;B+=A.bytesPerPixel,b.push(A.rgba)}let n=M<=2?1:M<=4?2:4,t=Math.ceil(H*n/8),y=t*k;if(V.byteLength<B+y)return null;for(let C=0;C<k;C+=1){let A=B+C*t;for(let P=0;P<H;P+=1){let m=P*n,Q0=A+(m>>3),c=8-n-(m&7),_0=V[Q0]>>c&(1<<n)-1;x4(F,j,J+P,D+C,1,1,b[_0])}}B+=y;continue}if(p&&M===0){let b=0,n=0;while(n<k){let t=U4(V,B,N);if(!t)return null;B+=t.bytesPerPixel;let y=P9(V,B);if(!y)return null;B+=y.consumed;for(let C=0;C<y.runLength;C+=1)if(x4(F,j,J+b,D+n,1,1,t.rgba),b+=1,b>=H){if(b=0,n+=1,n>=k)break}}continue}if(p&&M>0){let b=[];for(let y=0;y<M;y+=1){let C=U4(V,B,N);if(!C)return null;B+=C.bytesPerPixel,b.push(C.rgba)}let n=0,t=0;while(t<k){if(V.byteLength<B+1)return null;let y=V[B++],C=y,A=1;if(y&128){C=y&127;let m=P9(V,B);if(!m)return null;B+=m.consumed,A=m.runLength}let P=b[C];if(!P)return null;for(let m=0;m<A;m+=1)if(x4(F,j,J+n,D+t,1,1,P),n+=1,n>=H){if(n=0,t+=1,t>=k)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:F,decompressed:V}}function CK(_,$,j,Q,Z){let Y=Z||k5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=U4(_,X,Y);if(!V)return null;X+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);x4(B,j,0,0,j,Q,V.rgba);for(let F=0;F<K;F+=1){let D=U4(_,X,Y);if(!D)return null;if(X+=D.bytesPerPixel,_.byteLength<X+8)return null;let k=new DataView(_.buffer,_.byteOffset+X,8),J=k.getUint16(0,!1),H=k.getUint16(2,!1),E=k.getUint16(4,!1),M=k.getUint16(6,!1);X+=8,x4(B,j,J,H,E,M,D.rgba)}return{consumed:X-$,rgba:B}}function SK(_,$,j,Q,Z,Y){let q=Z||k5,N=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let F=Math.min(16,Q-B);for(let D=0;D<j;D+=16){let k=Math.min(16,j-D);if(_.byteLength<G+1)return null;let J=_[G++];if(J&1){let H=k*F*N;if(_.byteLength<G+H)return null;let E=Y(_.slice(G,G+H),k,F,q);G+=H,S9(K,j,D,B,k,F,E);continue}if(J&2){let H=U4(_,G,q);if(!H)return null;X=H.rgba,G+=H.bytesPerPixel}if(x4(K,j,D,B,k,F,X),J&4){let H=U4(_,G,q);if(!H)return null;V=H.rgba,G+=H.bytesPerPixel}if(J&8){if(_.byteLength<G+1)return null;let H=_[G++];for(let E=0;E<H;E+=1){let M=V;if(J&16){let A=U4(_,G,q);if(!A)return null;M=A.rgba,G+=A.bytesPerPixel}if(_.byteLength<G+2)return null;let p=_[G++],b=_[G++],n=p>>4,t=p&15,y=(b>>4)+1,C=(b&15)+1;x4(K,j,D+n,B+t,y,C,M)}}}}return{consumed:G-$,rgba:K}}var k5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Q6{protocol=m_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:xK,this.pipeline=_.pipeline||null,this.encodings=AK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...k5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:DK()}receive(_){if(_)this.buffer=JK(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=O5(Z),q=kK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=MK(q),j.push(EK(this.clientVersionText)),$.push({type:"protocol-version",protocol:m_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=O5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:m_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:m_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+N)break;let K=O5(this.consume(4+N).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:m_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:m_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(I9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let N=O5(this.consume(4+q).slice(4));throw Error(N||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:m_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),N=T9(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=T9(X,4),this.serverName=O5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(IK(this.clientPixelFormat)),j.push(TK(this.encodings)),j.push(x9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:m_,width:Y,height:q,name:this.serverName,pixelFormat:N}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),N=4,K=[],G=!1,X=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<N+12){G=!0;break}let F=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,12),D=F.getUint16(0,!1),k=F.getUint16(2,!1),J=F.getUint16(4,!1),H=F.getUint16(6,!1),E=F.getInt32(8,!1);if(N+=12,E===0){let M=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),p=J*H*M;if(this.buffer.byteLength<N+p){G=!0;break}let b=this.buffer.slice(N,N+p);if(N+=p,X)this.pipeline.processRawRect(b,D,k,J,H,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:k,width:J,height:H});else K.push({kind:"rgba",x:D,y:k,width:J,height:H,rgba:this.decodeRawRect(b,J,H,this.clientPixelFormat)});continue}if(E===2){let M=CK(this.buffer,N,J,H,this.clientPixelFormat);if(!M){G=!0;break}if(X){let p=this.buffer.slice(N,N+M.consumed);this.pipeline.processRreRect(p,D,k,J,H,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:k,width:J,height:H})}else K.push({kind:"rgba",x:D,y:k,width:J,height:H,rgba:M.rgba});N+=M.consumed;continue}if(E===1){if(this.buffer.byteLength<N+4){G=!0;break}let M=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,4),p=M.getUint16(0,!1),b=M.getUint16(2,!1);if(N+=4,X)this.pipeline.processCopyRect(D,k,J,H,p,b),K.push({kind:"pipeline",x:D,y:k,width:J,height:H});else K.push({kind:"copy",x:D,y:k,width:J,height:H,srcX:p,srcY:b});continue}if(E===16){let M=PK(this.buffer,N,J,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!M){G=!0;break}if(N+=M.consumed,M.skipped)continue;if(X&&M.decompressed)this.pipeline.processZrleTileData(M.decompressed,D,k,J,H,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:k,width:J,height:H});else K.push({kind:"rgba",x:D,y:k,width:J,height:H,rgba:M.rgba});continue}if(E===5){let M=SK(this.buffer,N,J,H,this.clientPixelFormat,this.decodeRawRect);if(!M){G=!0;break}if(X){let p=this.buffer.slice(N,N+M.consumed);this.pipeline.processHextileRect(p,D,k,J,H,this.clientPixelFormat),K.push({kind:"pipeline",x:D,y:k,width:J,height:H})}else K.push({kind:"rgba",x:D,y:k,width:J,height:H,rgba:M.rgba});N+=M.consumed;continue}if(E===-223){if(this.framebufferWidth=J,this.framebufferHeight=H,X)this.pipeline.initFramebuffer(J,H);K.push({kind:"resize",x:D,y:k,width:J,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${E}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(N);let V={type:"framebuffer-update",protocol:m_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(x9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:m_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let N=O5(this.consume(q));$.push({type:"clipboard",protocol:m_,text:N}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var L4="piclaw://vnc";function yK(_){let $=String(_||"");if($===L4)return null;if(!$.startsWith(`${L4}/`))return null;let j=$.slice(`${L4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function o4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function RK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function wK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function uK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function fK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function vK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class y9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=yK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=vK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${o4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${o4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${o4(Z.id)}" data-target-label="${o4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=fK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=e5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${o4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${o4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=e5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=e5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=N9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Z9(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of Y9(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(q9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=u$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??u$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Q6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await Q9(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(N,K,G,X)=>Q.decodeRawRectToRgba(N,K,G,X);let Y=e5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Q6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new S$({url:uK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(N)=>{this.applyMetrics(N)},onMessage:(N)=>{this.handleSocketMessage(N)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await RK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${o4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await wK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var i$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===L4||$.startsWith(`${L4}/`)?9000:!1},mount(_,$){return new y9(_,$)}};function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function gK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${N?`${N}/`:""}${Z}`,X=[];for(let B of G.split("/")){if(!B||B===".")continue;if(B===".."){if(X.length>0)X.pop();continue}X.push(B)}let V=X.join("/");return`${x8(V)}${Y}${q}`}function Z8(_){return _?.preview||null}function bK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function mK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function hK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${P4(P_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${P4(d4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${P4(mK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${P4(bK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function pK(_){let $=Z8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=hK(_,$);if($.kind==="image"){let Q=$.url||($.path?x8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=L_($.text||"",null,{rewriteImageSrc:(Z)=>gK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class d${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=pK(this.context)}getContent(){let _=Z8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var r$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new d$(_,$)}},o$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z8(_)||_?.path?1:!1},mount(_,$){return new d$(_,$)}};var cK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),lK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},nK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function w9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function R9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=w9(j),Y=nK[Z]||"\uD83D\uDCC4",q=lK[Z]||"Office Document",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${R9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=w9(_?.path);if(!$||!cK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u9(_,$);return new f9(_,$)}};var iK=/\.(csv|tsv)$/i;function v9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${v9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${v9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!iK.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new g9(_,$);return new b9(_,$)}};var dK=/\.pdf$/i;function rK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${rK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!dK.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m9(_,$);return new h9(_,$)}};var oK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function e$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${e$(Z)}" alt="${e$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${e$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!oK.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};var sK=/\.(mp4|m4v|mov|webm|ogv)$/i;function aK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!sK.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new l9(_,$);return new n9(_,$)}};function tK(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function eK(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var j3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function i9(_){let $=String(_||"").trim();return $?$:j3}function _G(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function $G(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function jG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,N,K,G,X,V){try{if(q&&K!=null&&j({filename:q,format:N,data:K,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,N,K,G,X,V){try{if(N&&j({filename:N,data:q,mimeType:K,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function d9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${$G(j)}`}class r9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${eK(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class o9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=_G(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(jG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=j3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await d9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await d9(_,"image/png");else this.xmlData=i9(await _.text());else if(_.status===404)this.xmlData=j3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?i9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Q3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!tK(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r9(_,$);return new o9(_,$)}};var QG=/\.mindmap\.ya?ml$/i,Z3=String(Date.now());function s9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Y3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function ZG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function YG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Q=document.createElement("div");Q.id="context-menu",Q.className="context-menu hidden",Q.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Q)}class a9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class t9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(s9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,ZG("/static/css/mindmap.css"),await Promise.all([Y3("/static/js/vendor/d3-mindmap.min.js?v="+Z3),Y3("/static/js/vendor/js-yaml.min.js?v="+Z3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),YG(this.mindmapEl);let j=s9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await Y3("/static/js/vendor/mindmap-editor.js?v="+Z3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var q3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new a9(_,$);return new t9(_,$)}};var qG=/\.kanban\.md$/i,NG=String(Date.now());function e9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function KG(){let _=window;if(_.preact)return;_.preact={h:k8,render:M4,Component:G5,createContext:M2},_.preactHooks={useState:g,useEffect:v,useCallback:x,useRef:T,useMemo:R0,useReducer:y6,useContext:x2,useLayoutEffect:v5,useImperativeHandle:T2,useErrorBoundary:C2,useDebugValue:P2},_.htm={bind:()=>U}}function GG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function XG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class _j{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $j{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(e9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,XG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=e9();try{if(KG(),await GG("/static/js/vendor/kanban-editor.js?v="+NG),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var N3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!qG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _j(_,$);return new $j(_,$)}};class jj{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var o0=new jj;var Z6="workspaceExplorerScale",VG=["compact","default","comfortable"],BG=new Set(VG),UG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Qj(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return BG.has(j)?j:$}function K3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function LG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function WG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function G3(_={}){let $=LG(_),j=_.stored?Qj(_.stored,$):$;return WG(j,_)}function Zj(_){return UG[Qj(_)]}function FG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function X3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function Yj(_,$,j={}){let Q=j.resolvePane;if(X3(_,Q))return!0;return FG($)}var HG=60000,Gj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function zG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return X3($,(j)=>c0.resolve(j))}function Xj(_,$,j,Q=0,Z=[]){if(!j&&Gj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Xj(Y,$,j,Q+1,Z);return Z}function qj(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Gj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function L3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((N)=>[N?.path,N])):new Map,Y=!j||j.length!==Q.length,q=Q.map((N)=>{let K=L3(Z.get(N.path),N);if(K!==Z.get(N.path))Y=!0;return K});return Y?{...$,children:q}:_}function B3(_,$,j){if(!_)return _;if(_.path===$)return L3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=B3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Vj=4,V3=14,AG=8,JG=16;function Bj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=Bj(Q);return _.__bytes=j,j}function Uj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Vj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let N of Z){let K=Math.max(0,Number(N?.__bytes??N?.size??0));if(K<=0)continue;if(N.type==="dir")Y.push({kind:"dir",node:N,size:K});else Y.push({kind:"file",name:N.name,path:N.path,size:K})}Y.sort((N,K)=>K.size-N.size);let q=Y;if(Y.length>V3){let N=Y.slice(0,V3-1),K=Y.slice(V3-1),G=K.reduce((X,V)=>X+V.size,0);N.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:G}),q=N}return Q.children=q.map((N)=>{if(N.kind==="dir")return Uj(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),Q}function Nj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Lj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function W3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,N=Y-Z>q?Z+q:Y,K=Y6(_,$,Q,Z),G=Y6(_,$,Q,N),X=Y6(_,$,j,N),V=Y6(_,$,j,Z),B=N-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Wj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Fj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(N,K,G,X)=>{let V=Array.isArray(N?.children)?N.children:[];if(!V.length)return;let B=Math.max(0,Number(N.size)||0);if(B<=0)return;let F=G-K,D=K;V.forEach((k,J)=>{let H=Math.max(0,Number(k.size)||0);if(H<=0)return;let E=H/B,M=D,p=J===V.length-1?G:D+F*E;if(D=p,p-M<0.003)return;let b=Wj[X];if(b){let n=Lj(M,X,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:H,color:n,depth:X,startAngle:M,endAngle:p,innerRadius:b[0],outerRadius:b[1],d:W3(120,120,b[0],b[1],M,p)}),X===1)Z.push({key:k.path,name:k.name,size:H,pct:Y>0?H/Y*100:0,color:n})}if(X<Vj)q(k,M,p,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function U3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=U3(Q,$);if(Z)return Z}return null}function Hj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Wj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,N=Lj(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:N,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:W3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:N}]}}function Kj(_,$=!1,j=!1){if(!_)return null;let Q=Bj(_),Z=Uj(_,0),Y=Z.size||Q,{segments:q,legend:N}=Fj(Z,Y,j);if(!q.length&&Y>0){let K=Hj("[files]",Z.path,Y,j);q=K.segments,N=K.legend}return{root:Z,totalSize:Y,segments:q,legend:N,truncated:$,isDarkTheme:j}}function OG({payload:_}){if(!_)return null;let[$,j]=g(null),[Q,Z]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[N,K]=g(!1);v(()=>{let A=_?.root?.path||".";Z(A),q([A]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Q)return;K(!0);let A=setTimeout(()=>K(!1),180);return()=>clearTimeout(A)},[Q]);let G=R0(()=>{return U3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:V,legend:B}=R0(()=>{let A=Fj(G,X,_.isDarkTheme);if(A.segments.length>0)return A;if(X<=0)return A;let P=G?.children?.length?"Total":"[files]";return Hj(P,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[F,D]=g(V),k=T(new Map),J=T(0);v(()=>{let A=k.current,P=new Map(V.map((_0)=>[_0.key,_0])),m=performance.now(),Q0=220,c=(_0)=>{let e=Math.min(1,(_0-m)/220),q0=e*(2-e),K0=V.map((G0)=>{let A0=A.get(G0.key)||{startAngle:G0.startAngle,endAngle:G0.startAngle,innerRadius:G0.innerRadius,outerRadius:G0.innerRadius},J0=(d0,g0)=>d0+(g0-d0)*q0,n0=J0(A0.startAngle,G0.startAngle),P0=J0(A0.endAngle,G0.endAngle),k0=J0(A0.innerRadius,G0.innerRadius),i0=J0(A0.outerRadius,G0.outerRadius);return{...G0,d:W3(120,120,k0,i0,n0,P0)}});if(D(K0),e<1)J.current=requestAnimationFrame(c)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(c),k.current=P,()=>{if(J.current)cancelAnimationFrame(J.current)}},[V]);let H=F.length?F:V,E=X>0?P_(X):"0 B",M=G?.name||"",b=(M&&M!=="."?M:"Total")||"Total",n=E,t=Y.length>1,y=(A)=>{if(!A?.path)return;let P=U3(_.root,A.path);if(!P||!Array.isArray(P.children)||P.children.length===0)return;q((m)=>[...m,P.path]),Z(P.path),j(null)},C=()=>{if(!t)return;q((A)=>{let P=A.slice(0,-1);return Z(P[P.length-1]||_?.root?.path||"."),P}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${X}>
                ${H.map((A)=>U`
                    <path
                        key=${A.key}
                        d=${A.d}
                        fill=${A.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===A.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(A)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(A)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>y(A)}
                    >
                        <title>${A.label} — ${P_(A.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${C}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${b}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${n}</text>
                </g>
            </svg>
            ${B.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((A)=>U`
                        <div key=${A.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${A.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${A.name}>${A.name}</span>
                            <span class="workspace-folder-starburst-size">${P_(A.size)}</span>
                            <span class="workspace-folder-starburst-pct">${A.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function DG({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;U5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?P_($.metadata.size):"";return U`
        <a href=${x_(_)} download=${Q} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Q}</span>
                ${Z&&U`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function zj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:N=!1}){let[K,G]=g(null),[X,V]=g(new Set(["."])),[B,F]=g(null),[D,k]=g(null),[J,H]=g(""),[E,M]=g(null),[p,b]=g(null),[n,t]=g(!0),[y,C]=g(!1),[A,P]=g(null),[m,Q0]=g(()=>L5("workspaceShowHidden",!1)),[c,_0]=g(!1),[e,q0]=g(null),[K0,G0]=g(null),[W0,A0]=g(null),[J0,n0]=g(!1),[P0,k0]=g(null),[i0,d0]=g(()=>Nj()),[g0,s0]=g(()=>G3({stored:U_(Z6),...K3()})),[f0,e0]=g(!1),F0=T(X),b0=T(""),_1=T(null),$1=T(0),e1=T(new Set),z1=T(null),a0=T(new Map),p1=T(_),O1=T(Q),Z1=T(null),v0=T(null),y1=T(null),D1=T(null),s=T(null),X0=T(null),L0=T("."),N0=T(null),C0=T({path:null,dragging:!1,startX:0,startY:0}),S0=T({path:null,dragging:!1,startX:0,startY:0}),w0=T({path:null,timer:0}),E0=T(!1),y0=T(0),p0=T(new Map),z0=T(null),u0=T(null),H0=T(null),j0=T(null),S=T(null),a=T(null),U0=T(m),O0=T($),l0=T(j??$),j1=T(0),A1=T(W0),Y1=T(c),c1=T(e),e_=T(null),K_=T({x:0,y:0}),d1=T(0),G_=T(null),__=T(B),t0=T(D),$_=T(null),_4=T(E);p1.current=_,O1.current=Q,v(()=>{F0.current=X},[X]),v(()=>{U0.current=m},[m]),v(()=>{O0.current=$},[$]),v(()=>{l0.current=j??$},[j,$]),v(()=>{A1.current=W0},[W0]),v(()=>{if(typeof window>"u")return;let z=()=>{s0(G3({stored:U_(Z6),...K3()}))};z();let I=()=>z(),R=()=>z(),w=($0)=>{if(!$0||$0.key===null||$0.key===Z6)z()};window.addEventListener("resize",I),window.addEventListener("focus",R),window.addEventListener("storage",w);let i=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),V0=($0,I0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",I0);else if($0.addListener)$0.addListener(I0)},B0=($0,I0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",I0);else if($0.removeListener)$0.removeListener(I0)};return V0(i,I),V0(Z0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",R),window.removeEventListener("storage",w),B0(i,I),B0(Z0,I)}},[]),v(()=>{let z=(I)=>{let R=I?.detail?.path;if(!R)return;let w=R.split("/"),i=[];for(let Z0=1;Z0<w.length;Z0++)i.push(w.slice(0,Z0).join("/"));if(i.length)V((Z0)=>{let V0=new Set(Z0);V0.add(".");for(let B0 of i)V0.add(B0);return V0});F(R),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),v(()=>{Y1.current=c},[c]),v(()=>{c1.current=e},[e]),v(()=>{__.current=B},[B]),v(()=>{t0.current=D},[D]),v(()=>{_4.current=E},[E]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>d0(Nj());z();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>z();if(I?.addEventListener)I.addEventListener("change",R);else if(I?.addListener)I.addListener(R);let w=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(w?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)w?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",R);else if(I?.removeListener)I.removeListener(R);w?.disconnect()}},[]),v(()=>{if(!D)return;let z=s.current;if(!z)return;let I=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(I)},[D]),v(()=>{if(!f0)return;let z=(R)=>{let w=R?.target;if(!(w instanceof Element))return;if(S.current?.contains(w))return;if(a.current?.contains(w))return;e0(!1)},I=(R)=>{if(R?.key==="Escape")e0(!1),a.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",I)}},[f0]);let C_=async(z,I={})=>{let R=Boolean(I?.autoOpen),w=String(z||"").trim();C(!0),M(null),b(null);try{let i=await h5(w,20000);if(R&&w&&Yj(w,i,{resolvePane:(Z0)=>c0.resolve(Z0)}))return O1.current?.(w,i),i;return M(i),i}catch(i){let Z0={error:i.message||"Failed to load preview"};return M(Z0),Z0}finally{C(!1)}};Z1.current=C_;let a4=async()=>{if(!O0.current)return;try{let z=await m5("",1,U0.current),I=qj(z.root,F0.current,U0.current);if(I===b0.current){t(!1);return}if(b0.current=I,_1.current=z.root,!$1.current)$1.current=requestAnimationFrame(()=>{$1.current=0,G((R)=>L3(R,_1.current)),t(!1)})}catch(z){P(z.message||"Failed to load workspace"),t(!1)}},y4=async(z)=>{if(!z)return;if(e1.current.has(z))return;e1.current.add(z);try{let I=await m5(z,1,U0.current);G((R)=>B3(R,z,I.root))}catch(I){P(I.message||"Failed to load workspace")}finally{e1.current.delete(z)}};v0.current=y4;let R1=x(()=>{let z=B;if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let R=z.split("/");return R.pop(),R.join("/")||"."},[B]),X_=x((z)=>{let I=z?.closest?.(".workspace-row");if(!I)return null;let R=I.dataset.path,w=I.dataset.type;if(!R)return null;if(w==="dir")return R;if(R.includes("/")){let i=R.split("/");return i.pop(),i.join("/")||"."}return"."},[]),T1=x((z)=>{return X_(z?.target||null)},[X_]),J1=x((z)=>{A1.current=z,A0(z)},[]),q1=x(()=>{let z=w0.current;if(z?.timer)clearTimeout(z.timer);w0.current={path:null,timer:0}},[]),S_=x((z)=>{if(!z||z==="."){q1();return}let I=a0.current?.get(z);if(!I||I.type!=="dir"){q1();return}if(F0.current?.has(z)){q1();return}if(w0.current?.path===z)return;q1();let R=setTimeout(()=>{w0.current={path:null,timer:0},v0.current?.(z),V((w)=>{let i=new Set(w);return i.add(z),i})},600);w0.current={path:z,timer:R}},[q1]),y_=x((z,I)=>{if(K_.current={x:z,y:I},d1.current)return;d1.current=requestAnimationFrame(()=>{d1.current=0;let R=e_.current;if(!R)return;let w=K_.current;R.style.transform=`translate(${w.x+12}px, ${w.y+12}px)`})},[]),N1=x((z)=>{if(!z)return;let R=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!R)return;G0({path:z,label:R})},[]),j_=x(()=>{if(G0(null),d1.current)cancelAnimationFrame(d1.current),d1.current=0;if(e_.current)e_.current.style.transform="translate(-9999px, -9999px)"},[]),m0=x((z)=>{if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let R=z.split("/");return R.pop(),R.join("/")||"."},[]),E1=x(()=>{k(null),H("")},[]),H_=x((z)=>{if(!z)return;let R=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!R||z===".")return;k(z),H(R)},[]),r1=x(async()=>{let z=t0.current;if(!z)return;let I=(J||"").trim();if(!I){E1();return}let R=a0.current?.get(z),w=(R?.name||z.split("/").pop()||z).trim();if(I===w){E1();return}try{let Z0=(await s6(z,I))?.path||z,V0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(E1(),P(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Z0,type:R?.type||"file"}})),R?.type==="dir")V((B0)=>{let $0=new Set;for(let I0 of B0)if(I0===z)$0.add(Z0);else if(I0.startsWith(`${z}/`))$0.add(`${Z0}${I0.slice(z.length)}`);else $0.add(I0);return $0});if(F(Z0),R?.type==="dir")M(null),C(!1),b(null);else Z1.current?.(Z0);v0.current?.(V0)}catch(i){P(i?.message||"Failed to rename file")}},[E1,J]),R4=x(async(z)=>{let w=z||".";for(let i=0;i<50;i+=1){let V0=`untitled${i===0?"":`-${i}`}.md`;try{let $0=(await o6(w,V0,""))?.path||(w==="."?V0:`${w}/${V0}`);if(w&&w!==".")V((I0)=>new Set([...I0,w]));F($0),P(null),v0.current?.(w),Z1.current?.($0);return}catch(B0){if(B0?.status===409||B0?.code==="file_exists")continue;P(B0?.message||"Failed to create file");return}}P("Failed to create file (untitled name already in use).")},[]),h_=x((z)=>{if(z?.stopPropagation?.(),J0)return;let I=m0(__.current);R4(I)},[J0,m0,R4]);v(()=>{if(typeof window>"u")return;let z=(I)=>{let R=I?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((B0)=>{let $0=B0;for(let I0 of R){if(!I0?.root)continue;if(!$0||I0.path==="."||!I0.path)$0=I0.root;else $0=B3($0,I0.path,I0.root)}if($0)b0.current=qj($0,F0.current,U0.current);return t(!1),$0});let w=__.current;if(Boolean(w)&&R.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return w===$0||w.startsWith(`${$0}/`)||$0.startsWith(`${w}/`)}))p0.current.clear();if(!w||!_4.current)return;let Z0=a0.current?.get(w);if(Z0&&Z0.type==="dir")return;if(R.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return w===$0||w.startsWith(`${$0}/`)}))Z1.current?.(w)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),z1.current=a4;let w4=T(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=l0.current??O0.current,R=document.visibilityState!=="hidden"&&(I||z.matches&&O0.current);p5(R,U0.current).catch(()=>{})}).current,p_=T(0),t4=T(()=>{if(p_.current)clearTimeout(p_.current);p_.current=setTimeout(()=>{p_.current=0,w4()},250)}).current;v(()=>{if(O0.current)z1.current?.();t4()},[$,j]),v(()=>{z1.current(),w4();let z=setInterval(()=>z1.current(),HG),I=W5("previewHeight",null),R=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(y0.current=R,y1.current)y1.current.style.setProperty("--preview-height",`${R}px`);let w=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),i=()=>t4();if(w.addEventListener)w.addEventListener("change",i);else if(w.addListener)w.addListener(i);return document.addEventListener("visibilitychange",i),()=>{if(clearInterval(z),$1.current)cancelAnimationFrame($1.current),$1.current=0;if(w.removeEventListener)w.removeEventListener("change",i);else if(w.removeListener)w.removeListener(i);if(document.removeEventListener("visibilitychange",i),p_.current)clearTimeout(p_.current),p_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;p5(!1,U0.current).catch(()=>{})}},[]);let c_=R0(()=>Xj(K,X,m),[K,X,m]),R_=R0(()=>new Map(c_.map((z)=>[z.node.path,z.node])),[c_]),x5=R0(()=>Zj(g0),[g0]);a0.current=R_;let K1=(B?a0.current.get(B):null)?.type==="dir";v(()=>{if(!B||!K1){k0(null),z0.current=null,u0.current=null;return}let z=B,I=`${m?"hidden":"visible"}:${B}`,R=p0.current,w=R.get(I);if(w?.root){R.delete(I),R.set(I,w);let V0=Kj(w.root,Boolean(w.truncated),i0);if(V0)z0.current=V0,u0.current=B,k0({loading:!1,error:null,payload:V0});return}let i=z0.current,Z0=u0.current;k0({loading:!0,error:null,payload:Z0===B?i:null}),m5(B,AG,m).then((V0)=>{if(__.current!==z)return;let B0={root:V0?.root,truncated:Boolean(V0?.truncated)};R.delete(I),R.set(I,B0);while(R.size>JG){let I0=R.keys().next().value;if(!I0)break;R.delete(I0)}let $0=Kj(B0.root,B0.truncated,i0);z0.current=$0,u0.current=B,k0({loading:!1,error:null,payload:$0})}).catch((V0)=>{if(__.current!==z)return;k0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:Z0===B?i:null})})},[B,K1,m,i0]);let x1=Boolean(E&&E.kind==="text"&&!K1&&(!E.size||E.size<=262144)),e4=x1?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",z_=Boolean(B&&B!=="."),o1=Boolean(B&&!K1),u1=Boolean(B&&!K1),k1=B&&K1?P8(B,m):null,w1=x(()=>e0(!1),[]),L1=x(async(z)=>{w1();try{await z?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[w1]);v(()=>{let z=H0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!z)return;if(z.innerHTML="",!B||K1||!E||E.error)return;let I={path:B,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},R=c0.resolve(I)||c0.get("workspace-preview-default");if(!R)return;let w=R.mount(z,I);return j0.current=w,()=>{if(j0.current===w)w.dispose(),j0.current=null;z.innerHTML=""}},[B,K1,E]);let A_=(z)=>{let I=z?.target;if(I instanceof Element)return I;return I?.parentElement||null},J_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},O_=T((z)=>{let I=A_(z),R=I?.closest?.("[data-path]");if(!R)return;let w=R.dataset.path;if(!w||w===".")return;let i=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),Z0=Boolean(I?.closest?.(".workspace-caret"));if(i||Z0)return;if(t0.current===w)return;H_(w)}).current,l_=T((z)=>{if(E0.current){E0.current=!1;return}let I=A_(z),R=I?.closest?.("[data-path]");if(D1.current?.focus?.(),!R)return;let w=R.dataset.path,i=R.dataset.type,Z0=Boolean(I?.closest?.(".workspace-caret")),V0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),B0=__.current===w,$0=t0.current;if($0){if($0===w)return;E1()}let I0=i==="file"&&$_.current===w&&!Z0&&!V0;if(i==="dir"){if($_.current=null,F(w),M(null),b(null),C(!1),!F0.current.has(w))v0.current?.(w);if(B0&&!Z0)return;V((a1)=>{let v1=new Set(a1);if(v1.has(w))v1.delete(w);else v1.add(w);return v1})}else{$_.current=null,F(w);let P1=a0.current.get(w);if(P1)p1.current?.(P1.path,P1);if(!V0&&!Z0&&zG(w))O1.current?.(w,_4.current);else{let v1=!V0&&!Z0;Z1.current?.(w,{autoOpen:v1})}}}).current,s1=T(()=>{b0.current="",z1.current(),Array.from(F0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>v0.current?.(I))}).current,l1=T(()=>{$_.current=null,F(null),M(null),b(null),C(!1)}).current,D_=T(()=>{Q0((z)=>{let I=!z;if(typeof window<"u")Q1("workspaceShowHidden",String(I));return U0.current=I,p5(!0,I).catch(()=>{}),b0.current="",z1.current?.(),Array.from(F0.current||[]).filter((w)=>w&&w!==".").forEach((w)=>v0.current?.(w)),I})}).current,$4=T((z)=>{if(A_(z)?.closest?.("[data-path]"))return;l1()}).current,W1=x(async(z)=>{if(!z)return;let I=z.split("/").pop()||z;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await t6(z);let w=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(__.current===z)l1();v0.current?.(w),P(null)}catch(w){M((i)=>({...i||{},error:w.message||"Failed to delete file"}))}},[l1]),n_=x((z)=>{let I=D1.current;if(!I||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),u4=x((z)=>{let I=c_;if(!I||I.length===0)return;let R=B?I.findIndex((w)=>w.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let w=Math.min(R+1,I.length-1),i=I[w];if(!i)return;if(F(i.node.path),i.node.type!=="dir")p1.current?.(i.node.path,i.node),Z1.current?.(i.node.path);else M(null),C(!1),b(null);n_(i.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let w=R<=0?0:R-1,i=I[w];if(!i)return;if(F(i.node.path),i.node.type!=="dir")p1.current?.(i.node.path,i.node),Z1.current?.(i.node.path);else M(null),C(!1),b(null);n_(i.node.path);return}if(z.key==="ArrowRight"&&R>=0){let w=I[R];if(w?.node?.type==="dir"&&!X.has(w.node.path))z.preventDefault(),v0.current?.(w.node.path),V((i)=>new Set([...i,w.node.path]));return}if(z.key==="ArrowLeft"&&R>=0){let w=I[R];if(w?.node?.type==="dir"&&X.has(w.node.path))z.preventDefault(),V((i)=>{let Z0=new Set(i);return Z0.delete(w.node.path),Z0});return}if(z.key==="Enter"&&R>=0){z.preventDefault();let w=I[R];if(!w)return;let i=w.node.path;if(w.node.type==="dir"){if(!F0.current.has(i))v0.current?.(i);V((V0)=>{let B0=new Set(V0);if(B0.has(i))B0.delete(i);else B0.add(i);return B0}),M(null),b(null),C(!1)}else p1.current?.(i,w.node),Z1.current?.(i);return}if((z.key==="Delete"||z.key==="Backspace")&&R>=0){let w=I[R];if(!w||w.node.type==="dir")return;z.preventDefault(),W1(w.node.path);return}if(z.key==="Escape")z.preventDefault(),l1()},[l1,W1,X,c_,n_,B]),f4=x((z)=>{let I=A_(z),R=I?.closest?.(".workspace-row");if(!R)return;let w=R.dataset.type,i=R.dataset.path;if(!i||i===".")return;if(t0.current===i)return;let Z0=z?.touches?.[0];if(!Z0)return;if(C0.current={path:J_(I)?i:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},w!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,C0.current?.dragging)return;W1(i)},600)},[W1]),E_=x(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=C0.current;if(z?.dragging&&z.path){let I=A1.current||R1(),R=G_.current;if(typeof R==="function")R(z.path,I)}C0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,_0(!1),q0(null),J1(null),q1(),j_()},[R1,j_,J1,q1]),v4=x((z)=>{let I=C0.current,R=z?.touches?.[0];if(!R||!I?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let w=Math.abs(R.clientX-I.startX),i=Math.abs(R.clientY-I.startY),Z0=w>8||i>8;if(Z0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!I.dragging&&Z0)I.dragging=!0,_0(!0),q0("move"),N1(I.path);if(I.dragging){z.preventDefault(),y_(R.clientX,R.clientY);let V0=document.elementFromPoint(R.clientX,R.clientY),B0=X_(V0)||R1();if(A1.current!==B0)J1(B0);S_(B0)}},[X_,R1,N1,y_,J1,S_]),_5=T((z)=>{z.preventDefault();let I=y1.current;if(!I)return;let R=z.clientY,w=y0.current||280,i=z.currentTarget;i.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=R,V0=($0)=>{Z0=$0.clientY;let I0=I.clientHeight-80,P1=Math.min(Math.max(w-($0.clientY-R),80),I0);I.style.setProperty("--preview-height",`${P1}px`),y0.current=P1},B0=()=>{let $0=I.clientHeight-80,I0=Math.min(Math.max(w-(Z0-R),80),$0);y0.current=I0,i.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("previewHeight",String(Math.round(I0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",B0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",B0)}).current,w_=T((z)=>{z.preventDefault();let I=y1.current;if(!I)return;let R=z.touches[0];if(!R)return;let w=R.clientY,i=y0.current||280,Z0=z.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let V0=($0)=>{let I0=$0.touches[0];if(!I0)return;$0.preventDefault();let P1=I.clientHeight-80,a1=Math.min(Math.max(i-(I0.clientY-w),80),P1);I.style.setProperty("--preview-height",`${a1}px`),y0.current=a1},B0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",Q1("previewHeight",String(Math.round(y0.current||i))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",B0),document.removeEventListener("touchcancel",B0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",B0),document.addEventListener("touchcancel",B0)}).current,u_=async()=>{if(!B)return;try{let z=await r6(B);if(z.media_id)b(z.media_id)}catch(z){M((I)=>({...I||{},error:z.message||"Failed to attach"}))}},g4=async()=>{if(!B||K1)return;await W1(B)},j4=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},$5=x((z)=>{if(!j4(z))return;if(z.preventDefault(),j1.current+=1,!Y1.current)_0(!0);q0("upload");let I=T1(z)||R1();J1(I),S_(I)},[R1,T1,J1,S_]),f_=x((z)=>{if(!j4(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!Y1.current)_0(!0);if(c1.current!=="upload")q0("upload");let I=T1(z)||R1();if(A1.current!==I)J1(I);S_(I)},[R1,T1,J1,S_]),k_=x((z)=>{if(!j4(z))return;if(z.preventDefault(),j1.current=Math.max(0,j1.current-1),j1.current===0)_0(!1),q0(null),J1(null),q1()},[J1,q1]),M1=x(async(z,I=".")=>{let R=Array.from(z||[]);if(R.length===0)return;let w=I&&I!==""?I:".",i=w!=="."?w:"workspace root";n0(!0);try{let Z0=null;for(let V0 of R)try{Z0=await T8(V0,w)}catch(B0){let $0=B0?.status,I0=B0?.code;if($0===409||I0==="file_exists"){let P1=V0?.name||"file";if(!window.confirm(`"${P1}" already exists in ${i}. Overwrite?`))continue;Z0=await T8(V0,w,{overwrite:!0})}else throw B0}if(Z0?.path)$_.current=Z0.path,F(Z0.path),Z1.current?.(Z0.path);v0.current?.(w)}catch(Z0){P(Z0.message||"Failed to upload file")}finally{n0(!1)}},[]),W4=x(async(z,I)=>{if(!z)return;let R=a0.current?.get(z);if(!R)return;let w=I&&I!==""?I:".",i=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(w===i)return;try{let V0=(await a6(z,w))?.path||z;if(R.type==="dir")V((B0)=>{let $0=new Set;for(let I0 of B0)if(I0===z)$0.add(V0);else if(I0.startsWith(`${z}/`))$0.add(`${V0}${I0.slice(z.length)}`);else $0.add(I0);return $0});if(F(V0),R.type==="dir")M(null),C(!1),b(null);else Z1.current?.(V0);v0.current?.(i),v0.current?.(w)}catch(Z0){P(Z0?.message||"Failed to move entry")}},[]);G_.current=W4;let F4=x(async(z)=>{if(!j4(z))return;z.preventDefault(),j1.current=0,_0(!1),q0(null),A0(null),q1();let I=Array.from(z?.dataTransfer?.files||[]);if(I.length===0)return;let R=A1.current||T1(z)||R1();await M1(I,R)},[R1,T1,M1]),b4=x((z)=>{if(z?.stopPropagation?.(),J0)return;let I=z?.currentTarget?.dataset?.uploadTarget||".";L0.current=I,X0.current?.click()},[J0]),B1=x(()=>{if(J0)return;let z=__.current,I=z?a0.current?.get(z):null;L0.current=I?.type==="dir"?I.path:".",X0.current?.click()},[J0]),H4=x(()=>{L1(()=>h_(null))},[L1,h_]),j5=x(()=>{L1(()=>B1())},[L1,B1]),f1=x(()=>{L1(()=>s1())},[L1,s1]),Q_=x(()=>{L1(()=>D_())},[L1,D_]),i_=x(()=>{if(!B||!x1)return;L1(()=>O1.current?.(B,E))},[L1,B,x1,E]),m4=x(()=>{if(!B||B===".")return;L1(()=>H_(B))},[L1,B,H_]),Q4=x(()=>{if(!B||K1)return;L1(()=>g4())},[L1,B,K1,g4]),z4=x(()=>{if(!B||K1)return;L1(()=>u_())},[L1,B,K1,u_]),Z4=x(()=>{if(!k1)return;if(w1(),typeof window<"u")window.open(k1,"_blank","noopener")},[w1,k1]),M_=x(()=>{w1(),Z?.()},[w1,Z]),V_=x(()=>{w1(),Y?.()},[w1,Y]),A4=x(()=>{w1(),q?.()},[w1,q]),h4=x((z)=>{if(!z||z.button!==0)return;let I=z.currentTarget;if(!I||!I.dataset)return;let R=I.dataset.path;if(!R||R===".")return;if(t0.current===R)return;let w=A_(z);if(w?.closest?.("button, a, input, .workspace-caret"))return;if(!J_(w))return;z.preventDefault(),S0.current={path:R,dragging:!1,startX:z.clientX,startY:z.clientY};let i=(V0)=>{let B0=S0.current;if(!B0?.path)return;let $0=Math.abs(V0.clientX-B0.startX),I0=Math.abs(V0.clientY-B0.startY),P1=$0>4||I0>4;if(!B0.dragging&&P1)B0.dragging=!0,E0.current=!0,_0(!0),q0("move"),N1(B0.path),y_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(B0.dragging){V0.preventDefault(),y_(V0.clientX,V0.clientY);let a1=document.elementFromPoint(V0.clientX,V0.clientY),v1=X_(a1)||R1();if(A1.current!==v1)J1(v1);S_(v1)}},Z0=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",Z0);let V0=S0.current;if(V0?.dragging&&V0.path){let B0=A1.current||R1(),$0=G_.current;if(typeof $0==="function")$0(V0.path,B0)}S0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,_0(!1),q0(null),J1(null),q1(),j_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{E0.current=!1},0)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",Z0)},[X_,R1,N1,y_,j_,J1,S_,q1]),I_=x(async(z)=>{let I=Array.from(z?.target?.files||[]);if(I.length===0)return;let R=L0.current||".";if(await M1(I,R),L0.current=".",z?.target)z.target.value=""},[M1]);return U`
        <aside
            class=${`workspace-sidebar${c?" workspace-drop-active":""}`}
            data-workspace-scale=${g0}
            ref=${y1}
            onDragEnter=${$5}
            onDragOver=${f_}
            onDragLeave=${k_}
            onDrop=${F4}
        >
            <input type="file" multiple style="display:none" ref=${X0} onChange=${I_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${f0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),e0((I)=>!I)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${f0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${f0&&U`
                            <div class="workspace-menu-dropdown" ref=${S} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${H4} disabled=${J0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${j5} disabled=${J0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${f1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${m?" active":""}`} role="menuitem" onClick=${Q_}>
                                    ${m?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&U`<div class="workspace-menu-separator"></div>`}
                                ${B&&!K1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${i_} disabled=${!x1}>Open in editor</button>
                                `}
                                ${z_&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${u1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z4}>Download selected file</button>
                                `}
                                ${k1&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4}>Download selected folder (zip)</button>
                                `}
                                ${o1&&U`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Q4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&U`<div class="workspace-menu-separator"></div>`}
                                ${Z&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&U`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>
                                        ${N?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${h_} title="New file" disabled=${J0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${$4}>
                ${J0&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${n&&U`<div class="workspace-loading">Loading…</div>`}
                ${A&&U`<div class="workspace-error">${A}</div>`}
                ${K&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${D1}
                        tabIndex="0"
                        onClick=${l_}
                        onDblClick=${O_}
                        onKeyDown=${u4}
                        onTouchStart=${f4}
                        onTouchEnd=${E_}
                        onTouchMove=${v4}
                        onTouchCancel=${E_}
                    >
                        ${c_.map(({node:z,depth:I})=>{let R=z.type==="dir",w=z.path===B,i=z.path===D,Z0=R&&X.has(z.path),V0=W0&&z.path===W0,B0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return U`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${w?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*x5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${h4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Z0?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${i?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${s}
                                                value=${J}
                                                onInput=${($0)=>H($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),r1();else if($0.key==="Escape")$0.preventDefault(),E1()}}
                                                onBlur=${E1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${R&&!Z0&&B0>0&&U`
                                        <span class="workspace-count">${B0}</span>
                                    `}
                                    ${R&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${b4}
                                            disabled=${J0}
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
            ${B&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${_5} onTouchStart=${w_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${h_} title="New file" disabled=${J0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!K1&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x1&&O1.current?.(B,E)}
                                    title=${e4}
                                    disabled=${!x1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${g4}
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
                            ${K1?U`
                                    <button class="workspace-download" onClick=${B1}
                                        title="Upload files to this folder" disabled=${J0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${P8(B,m)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${u_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${y&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&U`<div class="workspace-error">${E.error}</div>`}
                    ${K1&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${P0?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${P0?.error&&U`<div class="workspace-error">${P0.error}</div>`}
                        ${P0?.payload&&P0.payload.segments?.length>0&&U`
                            <${OG} payload=${P0.payload} />
                        `}
                        ${P0?.payload&&(!P0.payload.segments||P0.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!K1&&U`
                        <div class="workspace-preview-body" ref=${H0}></div>
                    `}
                    ${p&&U`
                        <div class="workspace-download-card">
                            <${DG} mediaId=${p} />
                        </div>
                    `}
                </div>
            `}
            ${K0&&U`
                <div class="workspace-drag-ghost" ref=${e_}>${K0.label}</div>
            `}
        </aside>
    `}var EG=new Set(["kanban-editor","mindmap-editor"]);function kG(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Aj(_,$,j){let Q=kG(_,$,j);return Q!=null&&EG.has(Q)}var MG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,IG=/\.(csv|tsv)$/i,TG=/\.pdf$/i,xG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Jj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Oj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:N,onEditSource:K,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:B,onToggleZen:F,zenMode:D,onPopOutTab:k}){let[J,H]=g(null),E=T(null);v(()=>{if(!J)return;let A=(P)=>{if(P.type==="keydown"&&P.key!=="Escape")return;H(null)};return document.addEventListener("click",A),document.addEventListener("keydown",A),()=>{document.removeEventListener("click",A),document.removeEventListener("keydown",A)}},[J]),v(()=>{let A=(P)=>{if(P.ctrlKey&&P.key==="Tab"){if(P.preventDefault(),!_.length)return;let m=_.findIndex((Q0)=>Q0.id===$);if(P.shiftKey){let Q0=_[(m-1+_.length)%_.length];j?.(Q0.id)}else{let Q0=_[(m+1)%_.length];j?.(Q0.id)}return}if((P.ctrlKey||P.metaKey)&&P.key==="w"){let m=document.querySelector(".editor-pane");if(m&&m.contains(document.activeElement)){if(P.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[_,$,j,Q]);let M=x((A,P)=>{if(A.button===1){A.preventDefault(),Q?.(P);return}if(A.button===0)j?.(P)},[j,Q]),p=x((A,P)=>{A.preventDefault(),H({id:P,x:A.clientX,y:A.clientY})},[]),b=x((A)=>{A.preventDefault(),A.stopPropagation()},[]),n=x((A,P)=>{A.preventDefault(),A.stopPropagation(),Q?.(P)},[Q]);v(()=>{if(!$||!E.current)return;let A=E.current.querySelector(".tab-item.active");if(A)A.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let t=x((A)=>{if(!(X instanceof Map))return null;return X.get(A)||null},[X]),y=R0(()=>_.find((A)=>A.id===J?.id)||null,[J?.id,_]),C=R0(()=>{let A=J?.id;if(!A)return!1;return Aj(A,t(A),(P)=>c0.resolve(P))},[J?.id,t]);if(!_.length)return null;return U`
        <div class="tab-strip" ref=${E} role="tablist">
            ${_.map((A)=>U`
                <div
                    key=${A.id}
                    class=${`tab-item${A.id===$?" active":""}${A.dirty?" dirty":""}${A.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${A.id===$}
                    title=${A.path}
                    onMouseDown=${(P)=>M(P,A.id)}
                    onContextMenu=${(P)=>p(P,A.id)}
                >
                    ${A.pinned&&U`
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
                        onMouseDown=${b}
                        onClick=${(P)=>n(P,A.id)}
                        title=${A.dirty?"Unsaved changes":"Close"}
                        aria-label=${A.dirty?"Unsaved changes":`Close ${A.label}`}
                    >
                        ${A.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&U`
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
            ${F&&U`
                <button
                    class=${`tab-strip-zen-toggle${D?" active":""}`}
                    onClick=${F}
                    title=${`${D?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${D?"Exit":"Enter"} zen mode`}
                    aria-pressed=${D?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${D?U`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:U`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${J&&U`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{Q?.(J.id),H(null)}}>Close</button>
                <button onClick=${()=>{Z?.(J.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(J.id),H(null)}}>
                    ${y?.pinned?"Unpin":"Pin"}
                </button>
                ${C&&K&&U`
                    <button onClick=${()=>{K(J.id),H(null)}}>Edit Source</button>
                `}
                ${k&&U`
                    <button onClick=${()=>{let A=_.find((P)=>P.id===J.id);k(J.id,A?.label),H(null)}}>Open in Window</button>
                `}
                ${N&&/\.(md|mdx|markdown)$/i.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{N(J.id),H(null)}}>
                        ${G?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${MG.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(J.id),P=J.id.split("/").pop()||"document",m="/office-viewer/?url="+encodeURIComponent(A)+"&name="+encodeURIComponent(P);window.open(m,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${IG.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{let A="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(A,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${TG.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{let A="/workspace/raw?path="+encodeURIComponent(J.id);window.open(A,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${xG.test(J.id)&&!Jj.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{let A="/image-viewer/?path="+encodeURIComponent(J.id);window.open(A,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${Jj.test(J.id)&&U`
                    <hr />
                    <button onClick=${()=>{let A="/drawio/edit?path="+encodeURIComponent(J.id);window.open(A,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var PG=400,F3=60,Dj=220,H3="mdPreviewHeight";function CG(){try{let _=localStorage.getItem(H3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=F3?$:Dj}catch{return Dj}}function z3({getContent:_,path:$,onClose:j}){let[Q,Z]=g(""),[Y,q]=g(CG),N=T(null),K=T(null),G=T(""),X=T(_);return X.current=_,v(()=>{let F=()=>{let k=X.current?.()||"";if(k===G.current)return;G.current=k;try{let J=L_(k,null,{sanitize:!1});Z(J)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};F();let D=setInterval(F,PG);return()=>clearInterval(D)},[]),v(()=>{if(N.current&&Q)K4(N.current).catch(()=>{})},[Q]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(F)=>{F.preventDefault();let D=F.clientY,k=K.current?.offsetHeight||Y,J=K.current?.parentElement,H=J?J.offsetHeight*0.7:500,E=F.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=(b)=>{let n=Math.min(Math.max(k-(b.clientY-D),F3),H);q(n)},p=()=>{E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(H3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",p)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",p)}}
            onTouchStart=${(F)=>{F.preventDefault();let D=F.touches[0];if(!D)return;let k=D.clientY,J=K.current?.offsetHeight||Y,H=K.current?.parentElement,E=H?H.offsetHeight*0.7:500,M=F.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let p=(n)=>{let t=n.touches[0];if(!t)return;n.preventDefault();let y=Math.min(Math.max(J-(t.clientY-k),F3),E);q(y)},b=()=>{M.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(H3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",p),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)};document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:Y+"px"}}>
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
                ref=${N}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function Ej({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=T(_);Y.current=_;let q=T($);q.current=$;let N=T(j);N.current=j;let K=T(Q);K.current=Q,v(()=>{let G=new C8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function kj(){let[_,$]=g(!1),[j,Q]=g("default"),Z=T(!1);v(()=>{let K=L5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let Y=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),Q1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),Q1("notificationsEnabled",String(K))},[Y]),N=x((K,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(K,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:N}}var Y8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Mj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=g(null),[Y,q]=g(!1),N=T(!1),K=T(null),G=T(!1),X=T(null),V=T(null),B=T(0);v(()=>{N.current=Y},[Y]),v(()=>{V.current=Q},[Q]),v(()=>{B.current+=1,X.current=null,G.current=!1,N.current=!1,q(!1)},[j]);let F=x(async(J=null)=>{let H=B.current;try{if(J){let E=await w6(J,50,0,j);if(H!==B.current)return;Z(E.posts),q(!1)}else{let E=await c4(10,null,j);if(H!==B.current)return;Z(E.posts),q(E.has_more)}}catch(E){if(H!==B.current)return;console.error("Failed to load posts:",E)}},[j]),D=x(async()=>{let J=B.current;try{let H=await c4(10,null,j);if(J!==B.current)return;Z((E)=>{if(!E||E.length===0)return H.posts;return Y8([...H.posts,...E])}),q((E)=>E||H.has_more)}catch(H){if(J!==B.current)return;console.error("Failed to refresh timeline:",H)}},[j]),k=x(async(J={})=>{let H=B.current,E=V.current;if(!E||E.length===0)return;if(G.current)return;let{preserveScroll:M=!0,preserveMode:p="top",allowRepeat:b=!1}=J,n=(C)=>{if(!M){C();return}if(p==="top")$(C);else _(C)},y=E.slice().sort((C,A)=>C.id-A.id)[0]?.id;if(!Number.isFinite(y))return;if(!b&&X.current===y)return;G.current=!0,X.current=y;try{let C=await c4(10,y,j);if(H!==B.current)return;if(C.posts.length>0)n(()=>{Z((A)=>Y8([...C.posts,...A||[]])),q(C.has_more)});else q(!1)}catch(C){if(H!==B.current)return;console.error("Failed to load more posts:",C)}finally{if(H===B.current)G.current=!1}},[j,_,$]);return v(()=>{K.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:N,loadPosts:F,refreshTimeline:D,loadMore:k,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:X}}function Ij(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function A3(_,$){return _&&$}function Tj(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function xj(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Pj(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function Cj(){let[_,$]=g(null),[j,Q]=g({text:"",totalLines:0}),[Z,Y]=g(""),[q,N]=g({text:"",totalLines:0}),[K,G]=g(null),[X,V]=g(null),[B,F]=g(null),D=T(null),k=T(0),J=T(!1),H=T(""),E=T(""),M=T(null),p=T(null),b=T(null),n=T(null),t=T(!1),y=T(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:N,pendingRequest:K,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:F,lastAgentEventRef:D,lastSilenceNoticeRef:k,isAgentRunningRef:J,draftBufferRef:H,thoughtBufferRef:E,pendingRequestRef:M,stalledPostIdRef:p,currentTurnIdRef:b,steerQueuedTurnIdRef:n,thoughtExpandedRef:t,draftExpandedRef:y}}function Sj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.clientX,F=$.current||280,D=X.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,J=(E)=>{k=E.clientX;let M=Math.min(Math.max(F+(E.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${M}px`),$.current=M},H=()=>{let E=Math.min(Math.max(F+(k-B),160),600);$.current=E,D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round(E))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",H)}).current,Y=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.touches[0];if(!B)return;let F=B.clientX,D=$.current||280,k=X.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(E)=>{let M=E.touches[0];if(!M)return;E.preventDefault();let p=Math.min(Math.max(D+(M.clientX-F),160),600);V.style.setProperty("--sidebar-width",`${p}px`),$.current=p},H=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round($.current||D))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,q=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.clientX,F=j.current||$.current||280,D=X.currentTarget;D.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,J=(E)=>{k=E.clientX;let M=Math.min(Math.max(F+(E.clientX-B),200),800);V.style.setProperty("--editor-width",`${M}px`),j.current=M},H=()=>{let E=Math.min(Math.max(F+(k-B),200),800);j.current=E,D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("editorWidth",String(Math.round(E))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",H)}).current,N=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.touches[0];if(!B)return;let F=B.clientX,D=j.current||$.current||280,k=X.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let J=(E)=>{let M=E.touches[0];if(!M)return;E.preventDefault();let p=Math.min(Math.max(D+(M.clientX-F),200),800);V.style.setProperty("--editor-width",`${p}px`),j.current=p},H=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",Q1("editorWidth",String(Math.round(j.current||D))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.clientY,F=Q?.current||200,D=X.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=B,J=(E)=>{k=E.clientY;let M=Math.min(Math.max(F-(E.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${M}px`),Q)Q.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let E=Math.min(Math.max(F-(k-B),100),window.innerHeight*0.5);if(Q)Q.current=E;D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("dockHeight",String(Math.round(E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",H)}).current,G=T((X)=>{X.preventDefault();let V=_.current;if(!V)return;let B=X.touches[0];if(!B)return;let F=B.clientY,D=Q?.current||200,k=X.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let J=(E)=>{let M=E.touches[0];if(!M)return;E.preventDefault();let p=Math.min(Math.max(D-(M.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${p}px`),Q)Q.current=p;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",Q1("dockHeight",String(Math.round(Q?.current||D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function SG(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,N]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,N)}return Z?Y:_}function yj({onTabClosed:_}={}){let $=T(_);$.current=_;let[j,Q]=g(()=>o0.getTabs()),[Z,Y]=g(()=>o0.getActiveId()),[q,N]=g(()=>o0.getTabs().length>0);v(()=>{return o0.onChange((y,C)=>{Q(y),Y(C),N(y.length>0)})},[]);let[K,G]=g(()=>new Set),[X,V]=g(()=>new Map),B=x((y)=>{G((C)=>{let A=new Set(C);if(A.has(y))A.delete(y);else A.add(y);return A})},[]),F=x((y)=>{G((C)=>{if(!C.has(y))return C;let A=new Set(C);return A.delete(y),A})},[]),D=x((y)=>{V((C)=>{if(!C.has(y))return C;let A=new Map(C);return A.delete(y),A})},[]),k=x((y,C={})=>{if(!y)return;let A=typeof C?.paneOverrideId==="string"&&C.paneOverrideId.trim()?C.paneOverrideId.trim():null,P={path:y,mode:"edit"};try{if(!(A?c0.get(A):c0.resolve(P))){if(!c0.get("editor")){console.warn(`[openEditor] No pane handler for: ${y}`);return}}}catch(Q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${y}":`,Q0)}let m=typeof C?.label==="string"&&C.label.trim()?C.label.trim():void 0;if(o0.open(y,m),A)V((Q0)=>{if(Q0.get(y)===A)return Q0;let c=new Map(Q0);return c.set(y,A),c})},[]),J=x(()=>{let y=o0.getActiveId();if(y){let C=o0.get(y);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}o0.close(y),F(y),D(y),$.current?.(y)}},[D,F]),H=x((y)=>{let C=o0.get(y);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}o0.close(y),F(y),D(y),$.current?.(y)},[D,F]),E=x((y)=>{o0.activate(y)},[]),M=x((y)=>{let C=o0.getTabs().filter((m)=>m.id!==y&&!m.pinned),A=C.filter((m)=>m.dirty).length;if(A>0){if(!window.confirm(`${A} unsaved tab${A>1?"s":""} will be closed. Continue?`))return}let P=C.map((m)=>m.id);o0.closeOthers(y),P.forEach((m)=>{F(m),D(m),$.current?.(m)})},[D,F]),p=x(()=>{let y=o0.getTabs().filter((P)=>!P.pinned),C=y.filter((P)=>P.dirty).length;if(C>0){if(!window.confirm(`${C} unsaved tab${C>1?"s":""} will be closed. Continue?`))return}let A=y.map((P)=>P.id);o0.closeAll(),A.forEach((P)=>{F(P),D(P),$.current?.(P)})},[D,F]),b=x((y)=>{o0.togglePin(y)},[]),n=x((y)=>{if(!y)return;V((C)=>{if(C.get(y)==="editor")return C;let A=new Map(C);return A.set(y,"editor"),A}),o0.activate(y)},[]),t=x(()=>{let y=o0.getActiveId();if(y)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:y}}))},[]);return v(()=>{let y=(C)=>{let{oldPath:A,newPath:P,type:m}=C.detail||{};if(!A||!P)return;if(m==="dir"){for(let Q0 of o0.getTabs())if(Q0.path===A||Q0.path.startsWith(`${A}/`)){let c=`${P}${Q0.path.slice(A.length)}`;o0.rename(Q0.id,c)}}else o0.rename(A,P);V((Q0)=>SG(Q0,A,P,m))};return window.addEventListener("workspace-file-renamed",y),()=>window.removeEventListener("workspace-file-renamed",y)},[]),v(()=>{let y=(C)=>{if(o0.hasUnsaved())C.preventDefault(),C.returnValue=""};return window.addEventListener("beforeunload",y),()=>window.removeEventListener("beforeunload",y)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:X,openEditor:k,closeEditor:J,handleTabClose:H,handleTabActivate:E,handleTabCloseOthers:M,handleTabCloseAll:p,handleTabTogglePin:b,handleTabTogglePreview:B,handleTabEditSource:n,revealInExplorer:t}}function J3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var O3=J3("warning",30000),Rj=J3("finalize",120000),D3=J3("refresh",30000),wj=30000;function uj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function fj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function vj(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function gj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function yG(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:yG(_,$)}}function E3(_,$){return{text:$?.text||"",totalLines:gj(_),fullText:_}}function bj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function mj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function hj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function M5(_,$){return Boolean(_)&&!Boolean($)}function pj(_,$){return _||$||null}function k3(_){return _?.turn_id||_?.turnId||null}function q8(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function M3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}async function cj(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:N,thoughtBufferRef:K,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let B=Q.current;if($==="thought"){if(Z.current=j,B)try{await q(B,"thought",j)}catch(F){console.warn("Failed to update thought visibility:",F)}if(!j)return;try{let F=B?await N(B,"thought"):null;if(F?.text)K.current=F.text;X((D)=>({...D||{text:"",totalLines:0},fullText:K.current||D?.fullText||"",totalLines:Number.isFinite(F?.total_lines)?F.total_lines:D?.totalLines||0}))}catch(F){console.warn("Failed to fetch full thought:",F)}return}if(Y.current=j,B)try{await q(B,"draft",j)}catch(F){console.warn("Failed to update draft visibility:",F)}if(!j)return;try{let F=B?await N(B,"draft"):null;if(F?.text)G.current=F.text;V((D)=>({...D||{text:"",totalLines:0},fullText:G.current||D?.fullText||"",totalLines:Number.isFinite(F?.total_lines)?F.total_lines:D?.totalLines||0}))}catch(F){console.warn("Failed to fetch full draft:",F)}}function lj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function I3(_){return String(_||"").trim()||"web:default"}function nj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function ij(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function N8(_){return typeof _==="string"}function dj(_){return typeof _==="string"&&_.trim().length>0}function T3(_){if(!Array.isArray(_))return[];return _.filter(($)=>dj($?.chat_jid)&&dj($?.agent_name))}function rj(_){if(!Array.isArray(_))return[];return _.filter(($)=>N8($?.chat_jid)&&N8($?.agent_name))}function oj(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(N8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!N8(q?.chat_jid))return q;let N=Q.get(q.chat_jid);return N?{...q,...N,is_active:N.is_active??q.is_active}:q}),Y=N8(j)?j:"";return Z.sort((q,N)=>{if(q.chat_jid===Y&&N.chat_jid!==Y)return-1;if(N.chat_jid===Y&&q.chat_jid!==Y)return 1;let K=Boolean(q.archived_at),G=Boolean(N.archived_at);if(K!==G)return K?1:-1;if(Boolean(q.is_active)!==Boolean(N.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(N.chat_jid))}),Z}var RG={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function sj(_){if(!_||typeof _!=="object")return RG;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function aj(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function tj(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},N=q.name||null,K=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)N=Z,G=!0;if(Y!==void 0){let V=typeof Y==="string"?Y.trim():null,B=typeof K==="string"?K.trim():null,F=V||null;if(F!==(B||null))K=F,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:N,resolvedAvatar:K}}function ej(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function _Q(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,N=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===N)return _;return{name:Y,avatar_url:q,avatar_background:N}}function wG(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function $Q(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!wG(Z));return Q.length===_.length?_:Q}function jQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function QQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function C4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function ZQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function YQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function qQ(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(uj(Y));let q=Y?.user||{};Q((K)=>ej(K,q));let N=aj(Y?.agents);Z(N.name,N.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function NQ(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=tj($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let K={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)K.name=Y.resolvedName;if(Y.avatarChanged)K.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:K}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function KQ(_){let{payload:$,setUserProfile:j}=_;j((Q)=>_Q(Q,$))}function GQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=sj($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function XQ(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function VQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([N,K])=>{if(Z.current!==q)return;let G=T3(N?.chats),X=T3(K?.chats);Y(oj(G,X,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function BQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(rj(Z?.chats))}).catch(()=>{})}function UQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),YQ($))q()}function LQ(_={}){return X4(_)&&a8(_)}function uG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function fG(_={},$={}){if(!LQ(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=uG({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function WQ(_={}){if(!LQ(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,fG({window:$,document:j})},N=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{N();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),N()},V);if(B!=null)Z.add(B)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},X=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),X?.addEventListener?.("resize",K),X?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),X?.removeEventListener?.("resize",K),X?.removeEventListener?.("scroll",K)}}function vG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function t1(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:vG($,j)}function gG(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function FQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:gG($,j),panelKey:typeof $?.key==="string"?$.key:""}}function HQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}function zQ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function AQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}var bG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function JQ(_){return bG.has(String(_||"").trim())}function mG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(mG(_),{detail:Q})),!0}var hG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function OQ(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(X4({window:j,navigator:Q}))};Z();let q=hG.map((N)=>{try{return j.matchMedia?.(N)??null}catch{return null}}).filter(Boolean).map((N)=>{if(typeof N.addEventListener==="function")return N.addEventListener("change",Z),()=>N.removeEventListener("change",Z);if(typeof N.addListener==="function")return N.addListener(Z),()=>N.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let N of q)N();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function DQ(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function EQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,X)},N=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return N.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{N.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function kQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function MQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(N)=>{if(N?.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault?.(),Q?.();return}if(N?.key==="Escape"&&Y())N.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function IQ(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function TQ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function xQ(_,$,j){return _||$?.label||j||"Pane"}function PQ(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function CQ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function SQ(_,$,j,Q){return _===$&&!j||Q}function yQ(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var pG="piclaw_btw_session",wQ=900,RQ="__piclawRenameBranchFormLock__";function cG(){try{return import.meta.url}catch{return null}}function P3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function N6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function uQ(_={}){let $=_.importMetaUrl===void 0?cG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let N=new URL(Y,Q).searchParams.get("v");return N&&N.trim()?N.trim():null}catch{return null}}function C3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[RQ];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[RQ]=Q,Q}function fQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function vQ(_={}){let $=typeof _.readItem==="function"?_.readItem:U_,j=_.storageKey||pG,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",N=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:N,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function gQ(_,$={}){let j=$.defaultChatJid||"web:default",Q=N6(_,"chat_jid",j),Z=P3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=P3(_?.get?.("pane_popout")),q=N6(_,"pane_path"),N=N6(_,"pane_label"),K=P3(_?.get?.("branch_loader")),G=N6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:N,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function bQ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:N,showIntentToast:K}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!X&&!q.current&&!N.current&&!Z.current)return Z.current=!0,K("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function S3(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function mQ(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:N,pendingRequestRef:K,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:B,refreshAgentStatus:F,refreshQueueState:D,refreshContextUsage:k}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),N(null),K.current=null,G();return}if(!X.current){if(X.current=!0,S3(V.current))B();F(),D(),k();return}if(S3(V.current))B();F(),D(),k()}function hQ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:N}=_,K=S3($.current);if(j){if(K)Q();Z(),Y(),q(),N();return}if(K)Q();Y(),q(),N()}function pQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:N,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||K<Number(Z||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),N?.(!0),!0}function cQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function lQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:N,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:F,now:D=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=D(),J=N?.()||null;if(!J)return!1;if(Y.current||k<Number(q.current||0)||J.inFlight||k<Number(J.cooldownUntil||0))return!1;Y.current=!0,J.inFlight=!0,K?.(!0);try{let H=j.agent_name||"",E=w8(Q,H);if(!E.canSubmit)return B?.("Could not rename branch",E.message||"Enter a valid branch handle.","warning",4000),!1;let M=E.normalized||H,p=await G(j.chat_jid,{agentName:M});await Promise.allSettled([X?.(),V?.()]);let b=p?.branch?.agent_name||M||H;return B?.("Branch renamed",`@${b}`,"info",3500),F?.(),!0}catch(H){let E=H instanceof Error?H.message:String(H||"Could not rename branch."),M=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;return B?.("Could not rename branch",M||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let H=D()+wQ;q.current=H;let E=N?.()||null;if(E)E.inFlight=!1,E.cooldownUntil=H}}async function nQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:N,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:B,navigate:F,confirm:D=(n)=>window.confirm(n)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Q==="string"&&Q.trim()?Q.trim():"",H=k||Z?.chat_jid||J;if(!H)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let E=(Z?.chat_jid===H?Z:null)||Y.find((n)=>n?.chat_jid===H)||q.find((n)=>n?.chat_jid===H)||null;if(E?.chat_jid===(E?.root_chat_jid||E?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let p=`@${E?.agent_name||H}${E?.chat_jid?` — ${E.chat_jid}`:""}`;if(!D(`Prune ${p}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await N(H),await Promise.allSettled([K?.(),G?.()]);let n=E?.root_chat_jid||"web:default";X?.("Branch pruned",`${p} has been archived.`,"info",3000);let t=V4(V,n,{chatOnly:B});return F?.(t),!0}catch(n){let t=n instanceof Error?n.message:String(n||"Could not prune branch.");return X?.("Could not prune branch",t||"Could not prune branch.","warning",5000),!1}}async function iQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:N,chatOnlyMode:K,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Q.find((H)=>H?.chat_jid===X)||null,B=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let F=B?.branch,D=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():X,k=v2(V?.agent_name,F?.agent_name,D);q?.("Branch restored",k,"info",4200);let J=V4(N,D,{chatOnly:K});return G?.(J),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function dQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let N=await j($);if(q())return!1;let K=N?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=V4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(N){if(q())return!1;return Q?.({status:"error",message:s5(N)}),!1}}async function rQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:N,baseHref:K}=_;try{let X=(await Q($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let F=V4(K,V,{chatOnly:j});return N?.(F),!0}catch(G){return q?.("Could not create branch",s5(G),"warning",5000),!1}}async function oQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:N,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let V=a7(X);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=T$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;x$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let F=await q?.(X),D=s7(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:F});return P$(B,D),N?.(X),!0}catch(F){C$(B);let D=F instanceof Error?F.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",D,"warning",5000),!1}}async function sQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:N,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let B=r7(Q);if(!B)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let D=o7(V,Q,{chatOnly:!0});if(!window.open(D,B.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let F=T$(B);if(!F)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;x$(F,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,J=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let E=await q?.();K?.(Array.isArray(E?.chats)?E.chats:[])}catch{}try{let E=await N?.(Z);G?.(Array.isArray(E?.chats)?E.chats:[])}catch{}let H=V4(V,J,{chatOnly:!0});return P$(F,H),!0}catch(D){return C$(F),X?.("Could not open branch window",s5(D),"error",5000),!1}}function K6(_){return _?{..._}:{text:"",totalLines:0}}function aQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function lG(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function nG(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function tQ(_){return{agentStatus:_.agentStatus,agentDraft:K6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:K6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:aQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:lG(_.silentRecovery)}}function eQ(_){let $=_.snapshot||nG(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(K6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(K6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(aQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function y3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function _Z(_,$){let j=new Map(_),Q=y3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function $Z(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=y3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function jZ(_){if(_?.options?.remove)return!0;return y3(_)?.state!=="running"}function R3(_,$){return`${_}:${$}`}function QZ(_,$,j){let Q=R3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function ZZ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function w3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function YZ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function I5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=C4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function u3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function iG(_,$){let j=W_(_);return Boolean(_&&j===$)}function T5(_,$,j){if(!iG(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function qZ(_,$){return{..._,openedAt:$}}function NZ(_){let $=W_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function KZ(_,$,j){let Q=W7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=W_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=W_(_),q=Boolean(Z&&Y&&Z===Y),N={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:N,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function GZ(_,$){if(!_||_?.source!=="live")return _||null;let j=W_($),Q=W_(_);if(j&&Q&&j!==Q)return _;return null}function XZ(_,$,j){return T5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function f3(_,$,j){if(j.errorMessage)return T5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return T5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function VZ(_,$,j){return T5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function BZ(_,$,j){return T5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function UZ(_,$,j){return T5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function S4(_){return _.status==="fulfilled"?_.value:null}function G6(_){return Math.max(0,Math.min(100,_))}function LZ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((J)=>J?.data?.is_bot_message).length,Z=$.filter((J)=>!J?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,N=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,B=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,F=_.modelsPayload?.supports_thinking??_.supportsThinking,D=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),k=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:N},agent:{status:D,phase:k,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:B,supportsThinking:Boolean(F)},context:{tokens:G,contextWindow:X,percent:K},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:G6(Math.round(K))},{key:"queue",label:"Queue",value:G6(Y*18)},{key:"activeChats",label:"Active chats",value:G6(q*12)},{key:"posts",label:"Timeline load",value:G6($.length*5)}]}}function WZ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function FZ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function HZ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function zZ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function AZ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function JZ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function OZ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:N,getActiveChatAgents:K,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:B,currentChatBranches:F,contextUsage:D,followupQueueItems:k,activeModel:J,activeThinkingLevel:H,supportsThinking:E,isAgentTurnActive:M}=_,[p,b,n,t,y,C,A]=await Promise.allSettled([Z(j),Y(j),q(j),N(j),K(),G(Q),X(20,null,j)]);return LZ({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:S4(p),contextPayload:S4(b),queuePayload:S4(n),modelsPayload:S4(t),activeChatsPayload:S4(y),branchesPayload:S4(C),timelinePayload:S4(A),rawPosts:V,activeChatAgents:B,currentChatBranches:F,contextUsage:D,followupQueueItems:k,activeModel:J,activeThinkingLevel:H,supportsThinking:E,isAgentTurnActive:M})}function DZ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:N,steerAgentQueueItem:K}=_,G=I5(j.current,$);if(!G)return;let{rowId:X}=G;Q.current.add(X),q((V)=>C4(V,X).items),K(X,I3(Z)).then(()=>{Y()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let B=u3("steer");N(B.title,B.detail,"warning"),Q.current.delete(X),Y()})}function EZ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:N,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:G}=_,X=I5(j.current,$);if(!X)return;let{rowId:V}=X;Q.current.add(V),K?.(X.remainingQueueCount),q((B)=>C4(B,V).items),G(V,I3(Z)).then(()=>{Y()}).catch((B)=>{console.warn("[queue] Failed to remove queued item:",B);let F=u3("remove");N(F.title,F.detail,"warning"),Q.current.delete(V),Y()})}function kZ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=W_($);if(Z)j.current.delete(Z);Q(qZ($,new Date().toISOString()))}function MZ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=NZ(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function IZ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:N,showIntentToast:K,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",B=W_(j);if(!V||!B)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let F=A7($?.payload),D=J7($?.payload),k=new Date().toISOString();if(Y((J)=>XZ(J,B,{kind:V,payload:$?.payload||null,submittedAt:k,submissionText:F})),!F){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),D)q();return}(async()=>{try{let J=await G("default",F,null,[],Z?"queue":null,Q);N(J),Y((E)=>f3(E,B,{submittedAt:k,submissionText:F,queued:J?.queued||null}));let H=WZ(J?.queued);if(K(H.title,H.detail,H.kind,H.durationMs),D)q()}catch(J){Y((E)=>f3(E,B,{submittedAt:k,submissionText:F,errorMessage:J?.message||"Could not send the widget message."}));let H=FZ(J?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let F=new Date().toISOString(),D=HZ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((k)=>VZ(k,B,{kind:V,payload:$?.payload||null,eventAt:F,nextRefreshCount:D.nextRefreshCount,shouldBuildDashboard:D.shouldBuildDashboard})),V==="widget.request_refresh")if(D.shouldBuildDashboard)(async()=>{try{let k=await X($?.payload||null);Y((H)=>BZ(H,B,{dashboard:k,at:new Date().toISOString(),count:D.nextRefreshCount,echo:$?.payload||null}));let J=zZ();K(J.title,J.detail,J.kind,J.durationMs)}catch(k){Y((H)=>UZ(H,B,{errorMessage:k?.message||"Could not build dashboard.",at:new Date().toISOString(),count:D.nextRefreshCount}));let J=AZ(k?.message);K(J.title,J.detail,J.kind,J.durationMs)}})();else{let k=JZ();K(k.title,k.detail,k.kind,k.durationMs)}}}var dG=uQ(),TZ=u6,xZ=v6,rG=b6,oG=l6,sG=n6,v3=m6,g3=t1(i1,"getAgentContext",null),aG=t1(i1,"getAutoresearchStatus",null),tG=t1(i1,"stopAutoresearch",{status:"ok"}),eG=t1(i1,"dismissAutoresearch",{status:"ok"}),PZ=t1(i1,"getAgentModels",{current:null,models:[]}),CZ=t1(i1,"getActiveChatAgents",{chats:[]}),X6=t1(i1,"getChatBranches",{chats:[]}),_X=t1(i1,"renameChatBranch",null),$X=t1(i1,"pruneChatBranch",null),jX=t1(i1,"restoreChatBranch",null),SZ=t1(i1,"getAgentQueueState",{count:0}),yZ=t1(i1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),RZ=t1(i1,"removeAgentQueueItem",{removed:!1}),QX=t1(i1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});c0.register(O$);c0.register(o$);c0.register(r$);c0.register(s$);c0.register(a$);c0.register(t$);c0.register(_3);c0.register($3);c0.register(Q3);c0.register(q3);c0.register(N3);c0.register(i$);D$();c0.register(M$);c0.register(I$);function ZX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:N,branchLoaderSourceChatJid:K}=R0(()=>gQ(_),[_]),[G,X]=g("disconnected"),[V,B]=g(()=>X4()),[F,D]=g(null),[k,J]=g(null),[H,E]=g(!1),[M,p]=g("current"),[b,n]=g([]),[t,y]=g([]),[C,A]=g(null),{agentStatus:P,setAgentStatus:m,agentDraft:Q0,setAgentDraft:c,agentPlan:_0,setAgentPlan:e,agentThought:q0,setAgentThought:K0,pendingRequest:G0,setPendingRequest:W0,currentTurnId:A0,setCurrentTurnId:J0,steerQueuedTurnId:n0,setSteerQueuedTurnId:P0,lastAgentEventRef:k0,lastSilenceNoticeRef:i0,isAgentRunningRef:d0,draftBufferRef:g0,thoughtBufferRef:s0,pendingRequestRef:f0,stalledPostIdRef:e0,currentTurnIdRef:F0,steerQueuedTurnIdRef:b0,thoughtExpandedRef:_1,draftExpandedRef:$1}=Cj(),[e1,z1]=g({}),[a0,p1]=g(null),[O1,Z1]=g(null),[v0,y1]=g(!1),[D1,s]=g(null),[X0,L0]=g([]),[N0,C0]=g([]),[S0,w0]=g(null),[E0,y0]=g(()=>new Map),[p0,z0]=g(()=>new Set),[u0,H0]=g([]),[j0,S]=g(!1),[a,U0]=g(()=>vQ()),[O0,l0]=g(null),j1=T(new Set),A1=R0(()=>X0.find((W)=>W?.chat_jid===j)||null,[X0,j]),Y1=R0(()=>N0.find((W)=>W?.chat_jid===j)||A1||null,[A1,N0,j]),c1=Y1?.root_chat_jid||A1?.root_chat_jid||j,e_=fQ(M),[K_,d1]=g(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),G_=u0.length,__=T(new Set),t0=T([]),$_=T(new Set),_4=T(0),C_=T({inFlight:!1,lastAttemptAt:0,turnId:null});__.current=new Set(u0.map((W)=>W.row_id)),t0.current=u0;let{notificationsEnabled:a4,notificationPermission:y4,toggleNotifications:R1,notify:X_}=kj(),[T1,J1]=g(()=>new Set),[q1,S_]=g(()=>L5("workspaceOpen",!0)),y_=T(null),{editorOpen:N1,tabStripTabs:j_,tabStripActiveId:m0,previewTabs:E1,tabPaneOverrides:H_,openEditor:r1,closeEditor:R4,handleTabClose:h_,handleTabActivate:w4,handleTabCloseOthers:p_,handleTabCloseAll:t4,handleTabTogglePin:c_,handleTabTogglePreview:R_,handleTabEditSource:x5,revealInExplorer:P5}=yj({onTabClosed:(W)=>y_.current?.(W)}),K1=T(null),x1=T(null),e4=T(null),z_=T(null),o1=c0.getDockPanes().length>0,[u1,k1]=g(!1),w1=x(()=>k1((W)=>!W),[]),L1=x(()=>{r1(r4,{label:"Terminal"})},[r1]),A_=x(()=>{r1(L4,{label:"VNC"})},[r1]),J_=R0(()=>IQ(j_,m0),[m0,j_]),O_=R0(()=>TQ(H_,m0),[H_,m0]),l_=R0(()=>xQ(q,J_,Y),[J_,q,Y]),s1=R0(()=>PQ(j_,E1,m0),[E1,m0,j_]),l1=R0(()=>CQ(Y,L4),[Y]),D_=R0(()=>SQ(Y,r4,s1,l1),[l1,s1,Y]),$4=yQ(Z,Q,N1,o1,u1),[W1,n_]=g(!1),u4=T(!1),f4=x(()=>{if(!N1||Q)return;if(u4.current=u1,u1)k1(!1);n_(!0)},[N1,Q,u1]),E_=x(()=>{if(!W1)return;if(n_(!1),u4.current)k1(!0),u4.current=!1},[W1]),v4=x(()=>{if(W1)E_();else f4()},[W1,f4,E_]);v(()=>{if(W1&&!N1)E_()},[W1,N1,E_]),v(()=>{if(!Z||!Y)return;if(o0.getActiveId()===Y)return;r1(Y,q?{label:q}:void 0)},[r1,q,Z,Y]),v(()=>{let W=K1.current;if(!W)return;if(x1.current)x1.current.dispose(),x1.current=null;let O=m0;if(!O)return;let f={path:O,mode:"edit"},o=(O_?c0.get(O_):null)||c0.resolve(f)||c0.get("editor");if(!o){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let d=o.mount(W,f);x1.current=d,d.onDirtyChange?.((D0)=>{o0.setDirty(O,D0)}),d.onSaveRequest?.(()=>{}),d.onClose?.(()=>{R4()});let Y0=o0.getViewState(O);if(Y0&&typeof d.restoreViewState==="function")requestAnimationFrame(()=>d.restoreViewState(Y0));if(typeof d.onViewStateChange==="function")d.onViewStateChange((D0)=>{o0.saveViewState(O,D0)});return requestAnimationFrame(()=>d.focus()),()=>{if(x1.current===d)d.dispose(),x1.current=null}},[m0,O_,R4]);let _5=x(async(W)=>{let O=typeof m0==="string"?m0.trim():"",f=x1.current;if(!O||!f?.setContent)return;if(typeof f.isDirty==="function"&&f.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((d)=>{let Y0=Array.isArray(d?.changed_paths)?d.changed_paths.map((r)=>typeof r==="string"?r.trim():"").filter(Boolean):[];if(Y0.length>0)return Y0.some((r)=>r==="."||r===O);let D0=typeof d?.path==="string"?d.path.trim():"";return!D0||D0==="."||D0===O}):!0))return;try{let d=await h5(O,1e6,"edit"),Y0=typeof d?.text==="string"?d.text:"",D0=typeof d?.mtime==="string"&&d.mtime.trim()?d.mtime.trim():new Date().toISOString();f.setContent(Y0,D0)}catch(d){console.warn("[workspace_update] Failed to refresh active pane:",d)}},[m0]);v(()=>{let W=e4.current;if(z_.current)z_.current.dispose(),z_.current=null;if(!W||!o1||!u1)return;let O=c0.getDockPanes()[0];if(!O){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let f=O.mount(W,{mode:"view"});return z_.current=f,requestAnimationFrame(()=>f.focus?.()),()=>{if(z_.current===f)f.dispose(),z_.current=null}},[o1,u1]);let[w_,u_]=g({name:"You",avatar_url:null,avatar_background:null}),g4=T(null),j4=T(!1),$5=T(!1),f_=T(!1),k_=T(null),M1=T(j),W4=T(new Map),F4=T(j),b4=T(0),B1=T(0),H4=T({}),j5=T({name:null,avatar_url:null}),f1=T({currentHashtag:null,searchQuery:null,searchOpen:!1}),Q_=T(null),i_=T(null),m4=T(0),Q4=T(0),z4=T(0),Z4=T(null),M_=T(null),V_=T(null),A4=T(null),h4=T(0),I_=T({title:null,avatarBase:null}),z=T(null),I=T(!1),[R,w]=g(!1),i=T(0),[Z0,V0]=g(!1),[B0,$0]=g(""),I0=R0(()=>w8(B0,Y1?.agent_name||""),[Y1?.agent_name,B0]),P1=T(null),a1=x(()=>{if(z.current)clearTimeout(z.current),z.current=null;A(null)},[]);vj(30000),v(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)P1.current?.focus(),P1.current?.select?.()})},[Z0]),v(()=>{return a2()},[]),v(()=>{return OQ(B)},[]),v(()=>{Q1("workspaceOpen",String(q1))},[q1]),v(()=>{return WQ()},[]),v(()=>{return()=>{a1()}},[a1]),v(()=>{if(!a){Q1(BTW_SESSION_KEY,"");return}Q1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),v(()=>{H4.current=e1||{}},[e1]),v(()=>{M1.current=j},[j]),v(()=>{j5.current=w_||{name:"You",avatar_url:null,avatar_background:null}},[w_]);let v1=x((W,O,f=null)=>{if(typeof document>"u")return;let o=(W||"").trim()||"PiClaw";if(I_.current.title!==o){document.title=o;let T0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(T0&&T0.getAttribute("content")!==o)T0.setAttribute("content",o);I_.current.title=o}let d=document.getElementById("dynamic-favicon");if(!d)return;let Y0=d.getAttribute("data-default")||d.getAttribute("href")||"/favicon.ico",D0=O||Y0,r=O?`${D0}|${f||""}`:D0;if(I_.current.avatarBase!==r){let T0=O?`${D0}${D0.includes("?")?"&":"?"}v=${f||Date.now()}`:D0;d.setAttribute("href",T0),I_.current.avatarBase=r}},[]),C5=x((W)=>{if(!W)return;n((O)=>O.includes(W)?O:[...O,W])},[]),L=x((W)=>{n((O)=>O.filter((f)=>f!==W))},[]);y_.current=L;let u=x(()=>{n([])},[]),l=x((W)=>{if(!Array.isArray(W)){n([]);return}let O=[],f=new Set;for(let o of W){if(typeof o!=="string"||!o.trim())continue;let d=o.trim();if(f.has(d))continue;f.add(d),O.push(d)}n(O)},[]),h=x((W,O=null,f="info",o=3000)=>{a1(),A({title:W,detail:O||null,kind:f||"info"}),z.current=setTimeout(()=>{A((d)=>d?.title===W?null:d)},o)},[a1]),M0=x((W)=>{let O=lj(W,{editorOpen:N1,resolvePane:(f)=>c0.resolve(f)});if(O.kind==="open"){r1(O.path);return}if(O.kind==="toast")h(O.title,O.detail,O.level)},[N1,r1,h]),F1=x(()=>{let W=m0;if(W)C5(W)},[m0,C5]),I1=x((W)=>{if(!W)return;y((O)=>O.includes(W)?O:[...O,W])},[]),C1=x(async(W,O=null)=>{let f=(d)=>{d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("post-highlight"),setTimeout(()=>d.classList.remove("post-highlight"),2000)},o=document.getElementById("post-"+W);if(o){f(o);return}try{let d=typeof O==="string"&&O.trim()?O.trim():j,D0=(await f6(W,d))?.thread?.[0];if(!D0)return;b1((r)=>{if(!r)return[D0];if(r.some((T0)=>T0.id===D0.id))return r;return[...r,D0]}),requestAnimationFrame(()=>{setTimeout(()=>{let r=document.getElementById("post-"+W);if(r)f(r)},50)})}catch(d){console.error("[scrollToMessage] Failed to fetch message",W,d)}},[j]),Y4=x((W)=>{y((O)=>O.filter((f)=>f!==W))},[]),p4=x(()=>{y([])},[]),Q5=x((W)=>{if(!Array.isArray(W)){y([]);return}let O=[],f=new Set;for(let o of W){if(typeof o!=="string"||!o.trim())continue;let d=o.trim();if(f.has(d))continue;f.add(d),O.push(d)}y(O)},[]),Z5=x((W)=>{let O=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";h("Compose failed",O,"error",5000)},[h]),Z_=x((W={})=>{let O=Date.now();if(k0.current=O,W.running)d0.current=!0,S((f)=>f?f:!0);if(W.clearSilence)i0.current=0},[S]),g1=x(()=>{if(A4.current)clearTimeout(A4.current),A4.current=null;h4.current=0},[]);v(()=>()=>{g1()},[g1]);let Y5=x(()=>{g1(),m((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:O,lastActivity:f,...o}=W;return o})},[g1]),J4=x((W)=>{if(!W)return;g1();let O=Date.now();h4.current=O,m({type:W.type||"active",last_activity:!0}),A4.current=setTimeout(()=>{if(h4.current!==O)return;m((f)=>{if(!f||!(f.last_activity||f.lastActivity))return f;return null})},wj)},[g1]),U1=x(()=>{d0.current=!1,S(!1),k0.current=null,i0.current=0,g0.current="",s0.current="",f0.current=null,M_.current=null,F0.current=null,b0.current=null,k_.current=null,C_.current={inFlight:!1,lastAttemptAt:0,turnId:null},g1(),J0(null),P0(null),_1.current=!1,$1.current=!1},[g1,J0,P0,S]),d_=x((W)=>{if(!nj({remainingQueueCount:W,currentTurnId:F0.current,isAgentTurnActive:j0}))return;b0.current=null,P0(null)},[j0,P0]),q5=x(()=>tQ({agentStatus:P,agentDraft:Q0,agentPlan:_0,agentThought:q0,pendingRequest:G0,currentTurnId:A0,steerQueuedTurnId:n0,isAgentTurnActive:j0,followupQueueItems:u0,activeModel:a0,activeThinkingLevel:O1,supportsThinking:v0,activeModelUsage:D1,contextUsage:S0,isAgentRunning:d0.current,wasAgentActive:f_.current,draftBuffer:g0.current,thoughtBuffer:s0.current,lastAgentEvent:k0.current,lastSilenceNotice:i0.current,lastAgentResponse:M_.current,currentTurnIdRef:F0.current,steerQueuedTurnIdRef:b0.current,thoughtExpanded:_1.current,draftExpanded:$1.current,agentStatusRef:k_.current,silentRecovery:C_.current}),[a0,D1,O1,Q0,_0,P,q0,S0,A0,u0,j0,G0,n0,v0]),K8=x((W)=>{eQ({snapshot:W,clearLastActivityTimer:g1,refs:{isAgentRunningRef:d0,wasAgentActiveRef:f_,lastAgentEventRef:k0,lastSilenceNoticeRef:i0,draftBufferRef:g0,thoughtBufferRef:s0,pendingRequestRef:f0,lastAgentResponseRef:M_,currentTurnIdRef:F0,steerQueuedTurnIdRef:b0,agentStatusRef:k_,silentRecoveryRef:C_,thoughtExpandedRef:_1,draftExpandedRef:$1},setters:{setIsAgentTurnActive:S,setAgentStatus:m,setAgentDraft:c,setAgentPlan:e,setAgentThought:K0,setPendingRequest:W0,setCurrentTurnId:J0,setSteerQueuedTurnId:P0,setFollowupQueueItems:H0,setActiveModel:p1,setActiveThinkingLevel:Z1,setSupportsThinking:y1,setActiveModelUsage:s,setContextUsage:w0}})},[g1,J0,H0,S,P0]),T_=x((W)=>{if(!W)return;if(F0.current===W)return;F0.current=W,C_.current={inFlight:!1,lastAttemptAt:0,turnId:W},J0(W),b0.current=null,P0(null),g0.current="",s0.current="",c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null),f0.current=null,M_.current=null,_1.current=!1,$1.current=!1},[J0,P0]),O4=x((W)=>{if(typeof document<"u"){let T0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&T0)return}let O=M_.current;if(!O||!O.post)return;if(W&&O.turnId&&O.turnId!==W)return;let f=O.post;if(f.id&&Z4.current===f.id)return;let o=String(f?.data?.content||"").trim();if(!o)return;Z4.current=f.id||Z4.current,M_.current=null;let d=o.replace(/\s+/g," ").slice(0,200),Y0=H4.current||{},r=(f?.data?.agent_id?Y0[f.data.agent_id]:null)?.name||"Pi";X_(r,d)},[X_]),B_=x(async(W,O)=>{await cj({panelKey:W,expanded:O,currentTurnIdRef:F0,thoughtExpandedRef:_1,draftExpandedRef:$1,setAgentThoughtVisibility:sG,getAgentThought:oG,thoughtBufferRef:s0,draftBufferRef:g0,setAgentThought:K0,setAgentDraft:c})},[]),D4=T(null),N5=x(()=>{let W=Q_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);D4.current=N5;let V6=x((W)=>{let O=Q_.current;if(!O||typeof W!=="function"){W?.();return}let{currentHashtag:f,searchQuery:o,searchOpen:d}=f1.current||{},Y0=!((o||d)&&!f),D0=Y0?O.scrollHeight-O.scrollTop:O.scrollTop;W(),requestAnimationFrame(()=>{let r=Q_.current;if(!r)return;if(Y0){let T0=Math.max(r.scrollHeight-D0,0);r.scrollTop=T0}else{let T0=Math.max(r.scrollHeight-r.clientHeight,0),h1=Math.min(D0,T0);r.scrollTop=h1}})},[]),S5=x((W)=>{let O=Q_.current;if(!O||typeof W!=="function"){W?.();return}let f=O.scrollTop;W(),requestAnimationFrame(()=>{let o=Q_.current;if(!o)return;let d=Math.max(o.scrollHeight-o.clientHeight,0);o.scrollTop=Math.min(f,d)})},[]),b3=x((W)=>$Q(W,__.current),[]),{posts:G8,setPosts:b1,hasMore:wZ,setHasMore:X8,hasMoreRef:m3,loadPosts:v_,refreshTimeline:Y_,loadMore:uZ,loadMoreRef:B6}=Mj({preserveTimelineScroll:V6,preserveTimelineScrollTop:S5,chatJid:j}),K5=R0(()=>b3(G8),[G8,u0,b3]),V8=x(()=>{let W=e0.current;if(!W)return;b1((O)=>O?O.filter((f)=>f.id!==W):O),e0.current=null},[b1]),{handleSplitterMouseDown:fZ,handleSplitterTouchStart:vZ,handleEditorSplitterMouseDown:gZ,handleEditorSplitterTouchStart:bZ,handleDockSplitterMouseDown:mZ,handleDockSplitterTouchStart:hZ}=Sj({appShellRef:i_,sidebarWidthRef:m4,editorWidthRef:Q4,dockHeightRef:z4}),h3=x(()=>{if(!d0.current)return;d0.current=!1,i0.current=0,k0.current=null,F0.current=null,J0(null),_1.current=!1,$1.current=!1;let W=(g0.current||"").trim();if(g0.current="",s0.current="",c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null),f0.current=null,M_.current=null,!W){m({type:"error",title:"Response stalled - No content received"});return}let f=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,o=Date.now(),d=new Date().toISOString(),Y0={id:o,timestamp:d,data:{type:"agent_response",content:f,agent_id:"default",is_local_stall:!0}};e0.current=o,b1((D0)=>D0?Y8([...D0,Y0]):[Y0]),D4.current?.(),m(null)},[J0]);v(()=>{f1.current={currentHashtag:F,searchQuery:k,searchOpen:H}},[F,k,H]);let G1=x(()=>{let W=++_4.current,O=j;SZ(O).then((f)=>{if(W!==_4.current)return;if(M1.current!==O)return;let o=$_.current,d=jQ(f?.items,o);if(d.length){H0((Y0)=>{if(QQ(Y0,d))return Y0;return d});return}o.clear(),d_(0),H0((Y0)=>Y0.length===0?Y0:[])}).catch(()=>{if(W!==_4.current)return;if(M1.current!==O)return;H0((f)=>f.length===0?f:[])})},[d_,j,H0]),q_=x(async()=>{let W=j;try{let O=await g3(W);if(M1.current!==W)return;if(O)w0(O)}catch(O){if(M1.current!==W)return;console.warn("Failed to fetch agent context:",O)}},[j]),r_=x(async()=>{let W=j;try{let O=await aG(W);if(M1.current!==W)return;y0((f)=>_Z(f,O)),z0((f)=>w3(f,"autoresearch"))}catch(O){if(M1.current!==W)return;console.warn("Failed to fetch autoresearch status:",O)}},[j]),o_=x(async()=>{let W=j;try{let O=await v3(W);if(M1.current!==W)return null;if(!O||O.status!=="active"||!O.data){if(f_.current){let{currentHashtag:D0,searchQuery:r,searchOpen:T0}=f1.current||{};if(!D0&&!r&&!T0)Y_()}return f_.current=!1,U1(),k_.current=null,m(null),c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null),f0.current=null,O??null}f_.current=!0;let f=O.data;k_.current=f;let o=k3(f);if(o)T_(o);Z_({running:!0,clearSilence:!0}),Y5(),m(f);let d=q8(O.thought);if(d)K0((D0)=>{if(M3(D0,d.text))return D0;return s0.current=d.text,d});let Y0=q8(O.draft);if(Y0)c((D0)=>{if(M3(D0,Y0.text))return D0;return g0.current=Y0.text,Y0});return O}catch(O){return console.warn("Failed to fetch agent status:",O),null}},[U1,Y5,Z_,Y_,T_]),U6=x(async()=>{if(!d0.current)return null;if(f0.current)return null;let W=F0.current||null,O=C_.current,f=Date.now();if(O.inFlight)return null;if(O.turnId===W&&f-O.lastAttemptAt<D3)return null;O.inFlight=!0,O.lastAttemptAt=f,O.turnId=W;try{let{currentHashtag:o,searchQuery:d,searchOpen:Y0}=f1.current||{};if(!o&&!d&&!Y0)await Y_();return await G1(),await o_()}finally{O.inFlight=!1}},[o_,G1,Y_]);v(()=>{let W=Math.min(1000,Math.max(100,Math.floor(O3/2))),O=setInterval(()=>{if(!d0.current)return;if(f0.current)return;let f=k0.current;if(!f)return;let o=Date.now(),d=o-f,Y0=N4(k_.current);if(d>=Rj){if(!Y0)m({type:"waiting",title:"Re-syncing after a quiet period…"});U6();return}if(d>=O3){if(o-i0.current>=D3){if(!Y0){let D0=Math.floor(d/1000);m({type:"waiting",title:`Waiting for model… No events for ${D0}s`})}i0.current=o,U6()}}},W);return()=>clearInterval(O)},[U6]);let p3=x((W)=>{return bQ({serverVersion:W,currentAppAssetVersion:dG,staleUiVersionRef:g4,staleUiReloadScheduledRef:j4,tabStoreHasUnsaved:()=>o0.hasUnsaved(),isAgentRunningRef:d0,pendingRequestRef:f0,showIntentToast:h})},[d0,f0,h]),pZ=x((W)=>{mQ({status:W,setConnectionStatus:X,setAgentStatus:m,setAgentDraft:c,setAgentPlan:e,setAgentThought:K0,setPendingRequest:W0,pendingRequestRef:f0,clearAgentRunState:U1,hasConnectedOnceRef:$5,viewStateRef:f1,refreshTimeline:Y_,refreshAgentStatus:o_,refreshQueueState:G1,refreshContextUsage:q_})},[U1,Y_,o_,G1,q_]),cZ=x(async(W)=>{D(W),b1(null),await v_(W)},[v_]),lZ=x(async()=>{D(null),J(null),b1(null),await v_()},[v_]),nZ=x(async(W,O=M)=>{if(!W||!W.trim())return;let f=O==="root"||O==="all"?O:"current";p(f),J(W.trim()),D(null),b1(null);try{let o=await TZ(W.trim(),50,0,j,f,c1);b1(o.results),X8(!1)}catch(o){console.error("Failed to search:",o),b1([])}},[j,c1,M]),iZ=x(()=>{E(!0),J(null),D(null),p("current"),b1([])},[]),dZ=x(()=>{E(!1),J(null),v_()},[v_]),qX=x(()=>{},[]),B8=!F&&!k&&!H,rZ=x(async(W)=>{if(!W)return;let O=W.id,f=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,o=K5?.filter((Y0)=>Y0?.data?.thread_id===O&&Y0?.id!==O).length||0;if(o>0){if(!window.confirm(`Delete this message and its ${o} replies?`))return}let d=(Y0)=>{if(!Y0.length)return;J1((r)=>{let T0=new Set(r);return Y0.forEach((h1)=>T0.add(h1)),T0}),setTimeout(()=>{if(S5(()=>{b1((r)=>r?r.filter((T0)=>!Y0.includes(T0.id)):r)}),J1((r)=>{let T0=new Set(r);return Y0.forEach((h1)=>T0.delete(h1)),T0}),m3.current)B6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let Y0=await xZ(O,o>0,f);if(Y0?.ids?.length)d(Y0.ids)}catch(Y0){let D0=Y0?.message||"";if(o===0&&D0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let T0=await xZ(O,!0,f);if(T0?.ids?.length)d(T0.ids);return}console.error("Failed to delete post:",Y0),alert(`Failed to delete message: ${D0}`)}},[j,K5,S5]),c3=x(async()=>{await qQ({getAgents:rG,setAgents:z1,setUserProfile:u_,applyBranding:v1})},[v1]);v(()=>{c3();let W=W5("sidebarWidth",null),O=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(m4.current=O,i_.current)i_.current.style.setProperty("--sidebar-width",`${O}px`)},[c3]);let y5=j0||P!==null,l3=x((W)=>{NQ({payload:W,agentsRef:H4,setAgents:z1,applyBranding:v1})},[v1]),n3=x((W)=>{KQ({payload:W,setUserProfile:u_})},[]),U8=x((W)=>{GQ({payload:W,setActiveModel:p1,setActiveThinkingLevel:Z1,setSupportsThinking:y1,setActiveModelUsage:s})},[]),R5=x(()=>{XQ({currentChatJid:j,getAgentModels:PZ,activeChatJidRef:M1,applyModelState:U8})},[U8,j]),m1=x(()=>{VQ({currentChatJid:j,getActiveChatAgents:CZ,getChatBranches:X6,activeChatJidRef:M1,setActiveChatAgents:L0})},[j]),n1=x(()=>{BQ({currentRootChatJid:c1,getChatBranches:X6,setCurrentChatBranches:C0})},[c1]),i3=x((W)=>{DZ({queuedItem:W,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:$_,currentChatJid:j,refreshQueueState:G1,setFollowupQueueItems:H0,showIntentToast:h,steerAgentQueueItem:yZ,removeAgentQueueItem:RZ})},[j,G1,H0,h]),d3=x((W)=>{EZ({queuedItem:W,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:$_,currentChatJid:j,refreshQueueState:G1,setFollowupQueueItems:H0,showIntentToast:h,clearQueuedSteerStateIfStale:d_,steerAgentQueueItem:yZ,removeAgentQueueItem:RZ})},[d_,j,G1,H0,h]),w5=x((W)=>{UQ({response:W,refreshActiveChatAgents:m1,refreshCurrentChatBranches:n1,refreshContextUsage:q_,refreshAutoresearchStatus:r_,refreshQueueState:G1})},[m1,r_,n1,q_,G1]),oZ=x(async(W,O)=>{let f=typeof W?.key==="string"?W.key:"",o=typeof O?.key==="string"?O.key:"",d=R3(f,o);if(!f||!o)return;z0((Y0)=>QZ(Y0,f,o));try{let Y0=await YZ({panel:W,action:O,currentChatJid:j,stopAutoresearch:tG,dismissAutoresearch:eG,writeClipboard:(D0)=>navigator.clipboard.writeText(D0)});if(Y0.refreshAutoresearchStatus)r_();if(Y0.toast)h(Y0.toast.title,Y0.toast.detail,Y0.toast.kind,Y0.toast.durationMs)}catch(Y0){h("Panel action failed",Y0?.message||"Could not complete that action.","warning")}finally{z0((Y0)=>ZZ(Y0,d))}},[j,r_,h]),L6=x(()=>{if(V_.current)V_.current.abort(),V_.current=null;U0(null)},[]),L8=x(async(W)=>{let O=String(W||"").trim();if(!O)return h("BTW needs a question","Usage: /btw <question>","warning"),!0;if(V_.current)V_.current.abort();let f=new AbortController;V_.current=f,U0({question:O,answer:"",thinking:"",error:null,model:null,status:"running"});try{let o=await QX(O,{signal:f.signal,chatJid:N7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(d,Y0)=>{if(d==="side_prompt_start")U0((D0)=>D0?{...D0,status:"running"}:D0)},onThinkingDelta:(d)=>{U0((Y0)=>Y0?{...Y0,thinking:`${Y0.thinking||""}${d||""}`}:Y0)},onTextDelta:(d)=>{U0((Y0)=>Y0?{...Y0,answer:`${Y0.answer||""}${d||""}`}:Y0)}});if(V_.current!==f)return!0;U0((d)=>d?{...d,answer:o?.result||d.answer||"",thinking:o?.thinking||d.thinking||"",model:o?.model||null,status:"success",error:null}:d)}catch(o){if(f.signal.aborted)return!0;U0((d)=>d?{...d,status:"error",error:o?.payload?.error||o?.message||"BTW request failed."}:d)}finally{if(V_.current===f)V_.current=null}return!0},[j,h]),sZ=x(async({content:W})=>{let O=q7(W);if(!O)return!1;if(O.type==="help")return h("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(O.type==="clear")return L6(),h("BTW cleared","Closed the side conversation panel.","info"),!0;if(O.type==="ask")return await L8(O.question),!0;return!1},[L6,L8,h]),aZ=x(()=>{if(a?.question)L8(a.question)},[a,L8]),tZ=x(async()=>{let W=X7(a);if(!W)return;try{let O=await l4("default",W,null,[],y5?"queue":null,j);w5(O),h(O?.queued==="followup"?"BTW queued":"BTW injected",O?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(O){h("BTW inject failed",O?.message||"Could not inject BTW answer into chat.","warning")}},[a,w5,y5,h]),r3=x(async(W=null)=>{return OZ({requestPayload:W,currentChatJid:j,currentRootChatJid:c1,getAgentStatus:v3,getAgentContext:g3,getAgentQueueState:SZ,getAgentModels:PZ,getActiveChatAgents:CZ,getChatBranches:X6,getTimeline:c4,rawPosts:G8,activeChatAgents:X0,currentChatBranches:N0,contextUsage:S0,followupQueueItems:t0.current,activeModel:a0,activeThinkingLevel:O1,supportsThinking:v0,isAgentTurnActive:j0})},[X0,a0,O1,S0,N0,j,c1,j0,G8,v0]),u5=x(()=>{R5(),m1(),n1(),G1(),q_(),r_()},[R5,m1,n1,G1,q_,r_]);v(()=>{u5();let W=setInterval(()=>{R5(),m1(),n1(),G1()},60000);return()=>clearInterval(W)},[u5,R5,m1,n1,G1]),v(()=>{y0(new Map),z0(new Set)},[j]),v(()=>{let W=!1,O=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;N5()})};if(F)return v_(F),()=>{W=!0};if(k)return TZ(k,50,0,j,M,c1).then((f)=>{if(W)return;b1(f.results),X8(!1)}).catch((f)=>{if(W)return;console.error("Failed to search:",f),b1([]),X8(!1)}),()=>{W=!0};return v_().then(()=>{O()}).catch((f)=>{if(W)return;console.error("Failed to load timeline:",f)}),()=>{W=!0}},[j,F,k,M,c1,v_,N5,X8,b1]),v(()=>{let W=F4.current||j;W4.current.set(W,q5())},[j,q5]),v(()=>{let W=F4.current||j;if(W===j)return;W4.current.set(W,q5()),F4.current=j,$_.current.clear(),K8(W4.current.get(j)||null),G1(),o_(),q_()},[j,o_,q_,G1,K8,q5]);let eZ=x(()=>{let{currentHashtag:W,searchQuery:O,searchOpen:f}=f1.current||{};if(!W&&!O&&!f)Y_();u5()},[u5,Y_]),o3=x((W,O="streaming")=>{let f=new Date().toISOString();l0((o)=>KZ(o,W,{fallbackStatus:O,currentChatJid:j,dismissedSessionKeys:j1.current,updatedAt:f}))},[j]),W6=x((W,O)=>{let{turnId:f,isCurrentChatEvent:o}=zQ(W,O,j);if(o)l3(O),n3(O);if(W==="ui_theme"){t2(O);return}let d=ij(W);if(d.kind==="update"){if(!o)return;if(d.shouldAdoptTurn&&M5(f,F0.current))T_(f);o3(O,d.fallbackStatus||"streaming");return}if(d.kind==="close"){if(!o)return;l0((r)=>GZ(r,O));return}if(W?.startsWith("agent_")&&!AQ(W))Y5();if(W==="connected"){if(p3(O?.app_asset_version))return;m(null),c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null),f0.current=null,U1();let r=j;v3(r).then((s_)=>{if(M1.current!==r)return;if(!s_||s_.status!=="active"||!s_.data)return;let _2=s_.data,$2=k3(_2);if($2)T_($2);Z_({clearSilence:!0}),J4(_2);let J6=q8(s_.thought);if(J6)s0.current=J6.text,K0(J6);let O6=q8(s_.draft);if(O6)g0.current=O6.text,c(O6)}).catch((s_)=>{console.warn("Failed to fetch agent status:",s_)});let{currentHashtag:T0,searchQuery:h1,searchOpen:A6}=f1.current||{};if(!T0&&!h1&&!A6)Y_();u5();return}if(W==="agent_status"){if(!o){if(O?.type==="done"||O?.type==="error")m1(),n1();return}if(O.type==="done"||O.type==="error"){if(s4(f,F0.current))return;if(O.type==="done"){O4(f||F0.current);let{currentHashtag:r,searchQuery:T0,searchOpen:h1}=f1.current||{};if(!r&&!T0&&!h1)Y_();if(O.context_usage)w0(O.context_usage)}if(q_(),f_.current=!1,U1(),$_.current.clear(),m1(),G1(),c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null),O.type==="error")m({type:"error",title:O.title||"Agent error"}),setTimeout(()=>m(null),8000);else m(null)}else{if(f)T_(f);if(Z_({running:!0,clearSilence:!0}),O.type==="thinking")g0.current="",s0.current="",c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0});k_.current=O,m((r)=>{if(r&&r.type===O.type&&r.title===O.title)return r;return O})}return}if(W==="agent_steer_queued"){if(!o)return;if(s4(f,F0.current))return;let r=pj(f,F0.current);if(!r)return;b0.current=r,P0(r);return}if(W==="agent_followup_queued"){if(!o)return;H0((r)=>ZQ(r,O)),G1();return}if(W==="agent_followup_consumed"){if(!o)return;let r=I5(t0.current,O);if(r)d_(r.remainingQueueCount),H0((s_)=>C4(s_,r.rowId).items);G1();let{currentHashtag:T0,searchQuery:h1,searchOpen:A6}=f1.current||{};if(!T0&&!h1&&!A6)Y_();return}if(W==="agent_followup_removed"){if(!o)return;let r=I5(t0.current,O);if(r)$_.current.add(r.rowId),d_(r.remainingQueueCount),H0((T0)=>C4(T0,r.rowId).items);G1();return}if(W==="agent_draft_delta"){if(!o)return;if(s4(f,F0.current))return;if(M5(f,F0.current))T_(f);Z_({running:!0,clearSilence:!0}),g0.current=mj(g0.current,O);let r=Date.now();if(!b4.current||r-b4.current>=100){b4.current=r;let T0=g0.current;if($1.current)c((h1)=>E3(T0,h1));else c(q6(T0,null))}return}if(W==="agent_draft"){if(!o)return;if(s4(f,F0.current))return;if(M5(f,F0.current))T_(f);Z_({running:!0,clearSilence:!0});let r=O.text||"",T0=O.mode||(O.kind==="plan"?"replace":"append");if(O.kind==="plan")e((h1)=>bj(h1,r,T0));else if(!$1.current)g0.current=r,c(q6(r,O.total_lines));return}if(W==="agent_thought_delta"){if(!o)return;if(s4(f,F0.current))return;if(M5(f,F0.current))T_(f);Z_({running:!0,clearSilence:!0}),s0.current=hj(s0.current,O);let r=Date.now();if(_1.current&&(!B1.current||r-B1.current>=100)){B1.current=r;let T0=s0.current;K0((h1)=>E3(T0,h1))}return}if(W==="agent_thought"){if(!o)return;if(s4(f,F0.current))return;if(M5(f,F0.current))T_(f);Z_({running:!0,clearSilence:!0});let r=O.text||"";if(!_1.current)s0.current=r,K0(q6(r,O.total_lines));return}if(W==="model_changed"){if(!o)return;U8(O);let r=j;g3(r).then((T0)=>{if(M1.current!==r)return;if(T0)w0(T0)}).catch(()=>{});return}let Y0=FQ(W,O,j);if(Y0.isStatusPanelWidgetEvent){if(Y0.eventChatJid!==j)return;if(!Y0.panelKey)return;if(y0((r)=>$Z(r,O)),jZ(O))z0((r)=>w3(r,Y0.panelKey));x3(W,O);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:O}));_5(O?.updates);return}if(JQ(W)){if(!o)return;x3(W,O);let r=HQ(W,O);if(r)h(r.title,r.detail,r.kind,r.durationMs);return}let D0=B8(f1.current);if(W==="agent_response"){if(!o)return;V8(),M_.current={post:O,turnId:F0.current}}if(Ij(W,o,D0))b1((r)=>Tj(r,O)),D4.current?.();if(W==="interaction_updated"){if(!A3(o,D0))return;b1((r)=>xj(r,O))}if(W==="interaction_deleted"){if(!A3(o,D0))return;let r=O?.ids||[];if(r.length){if(S5(()=>{b1((T0)=>Pj(T0,r))}),m3.current)B6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[o3,U1,Y5,j,B6,Z_,O4,S5,m1,n1,Y_,V8,T_,J4,l3,n3,R5,G1,H0,q_,p3]);v(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=W6,W.reset=()=>{V8(),U1(),m(null),c({text:"",totalLines:0}),e(""),K0({text:"",totalLines:0}),W0(null)},W.finalize=()=>h3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[U1,h3,W6,V8]),Ej({handleSseEvent:W6,handleConnectionStatusChange:pZ,loadPosts:v_,onWake:eZ,chatJid:j}),v(()=>{if(!K5||K5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let O=W.slice(5);C1(O),history.replaceState(null,"",location.pathname+location.search)},[K5,C1]);let F6=P!==null;v(()=>{if(G!=="connected")return;let O=setInterval(()=>{hQ({viewStateRef:f1,isAgentActive:F6,refreshTimeline:Y_,refreshQueueState:G1,refreshAgentStatus:o_,refreshContextUsage:q_,refreshAutoresearchStatus:r_})},F6?15000:60000);return()=>clearInterval(O)},[G,F6,o_,r_,q_,G1,Y_]),v(()=>{return DQ(()=>{o_(),q_(),G1(),r_()})},[o_,r_,q_,G1]);let _Y=x(()=>{S_((W)=>!W)},[]),s3=x((W)=>{if(typeof window>"u")return;let O=String(W||"").trim();if(!O||O===j)return;let f=V4(window.location.href,O,{chatOnly:Q});$?.(f)},[Q,j,$]),H6=x(()=>{pQ({hasWindow:typeof window<"u",currentBranchRecord:Y1,renameBranchInFlight:I.current,renameBranchLockUntil:i.current,getFormLock:C3,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:V0})},[Y1]),f5=x(()=>{cQ({setIsRenameBranchFormOpen:V0,setRenameBranchNameDraft:$0})},[]),a3=x(async(W)=>{await lQ({hasWindow:typeof window<"u",currentBranchRecord:Y1,nextName:W,openRenameForm:H6,renameBranchInFlightRef:I,renameBranchLockUntilRef:i,getFormLock:C3,setIsRenamingBranch:w,renameChatBranch:_X,refreshActiveChatAgents:m1,refreshCurrentChatBranches:n1,showIntentToast:h,closeRenameForm:f5})},[f5,Y1,m1,n1,H6,w,h]),t3=x(async(W=null)=>{await nQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:Y1,currentChatBranches:N0,activeChatAgents:X0,pruneChatBranch:$X,refreshActiveChatAgents:m1,refreshCurrentChatBranches:n1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[X0,Q,Y1,N0,j,$,m1,n1,h]),$Y=x(async(W)=>{await iQ({targetChatJid:W,restoreChatBranch:jX,currentChatBranches:N0,refreshActiveChatAgents:m1,refreshCurrentChatBranches:n1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,N0,$,m1,n1,h]);v(()=>{if(!N||typeof window>"u")return;let W=!1;return dQ({branchLoaderSourceChatJid:K,forkChatBranch:g5,setBranchLoaderState:d1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[N,K,$]);let jY=x((W)=>{kZ({widget:W,dismissedLiveWidgetKeysRef:j1,setFloatingWidget:l0})},[]),z6=x(()=>{MZ({dismissedLiveWidgetKeysRef:j1,setFloatingWidget:l0})},[]),QY=x((W,O)=>{IZ({event:W,widget:O,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:l0,handleCloseFloatingWidget:z6,handleMessageResponse:w5,showIntentToast:h,sendAgentMessage:l4,buildFloatingWidgetDashboardSnapshot:r3})},[r3,j,z6,w5,y5,h]);v(()=>{j1.current.clear(),l0(null)},[j]);let ZY=x(async()=>{await rQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:g5,refreshActiveChatAgents:m1,refreshCurrentChatBranches:n1,showIntentToast:h,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,m1,n1,h]),W8=x(async(W,O)=>{await oQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:O,showIntentToast:h,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(f)=>{let d=(typeof m0==="string"?m0.trim():"")===f?x1.current:f===r4?z_.current:null;if(typeof d?.preparePopoutTransfer==="function")return await d.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(f)=>{let o=o0.get(f);if(o&&!o.dirty){h_(f);return}if(f===r4&&u1)k1(!1)}})},[j,u1,h_,V,h,m0]);v(()=>EQ({openTab:(W,O)=>r1(W,O?{label:O}:void 0),popOutPane:(W,O)=>{W8(W,O)}}),[W8,r1]);let YY=x(async()=>{await sQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:c1,forkChatBranch:g5,getActiveChatAgents:g6,getChatBranches:X6,setActiveChatAgents:L0,setCurrentChatBranches:C0,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,c1,V,h]);v(()=>{if(!N1)return;if(typeof window>"u")return;let W=i_.current;if(!W)return;if(!Q4.current){let O=W5("editorWidth",null),f=m4.current||280;Q4.current=Number.isFinite(O)?O:f}if(W.style.setProperty("--editor-width",`${Q4.current}px`),!z4.current){let O=W5("dockHeight",null);z4.current=Number.isFinite(O)?O:200}W.style.setProperty("--dock-height",`${z4.current}px`)},[N1]),v(()=>{if(!o1||Q)return;return kQ(w1)},[w1,o1,Q]),v(()=>{if(Q)return;return MQ({toggleZenMode:v4,exitZenMode:E_,zenMode:W1,isZenModeActive:()=>W1})},[v4,E_,W1,Q]);let e3=Boolean(n0&&n0===(P?.turn_id||A0));if(N)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${K_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${K_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return U`
            <div class=${`app-shell pane-popout${N1?" editor-open":""}`} ref=${i_}>
                <div class="editor-pane-container pane-popout-container">
                    ${N1&&!D_&&U`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${s1?U`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${l_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${j_.length>1&&U`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${j_.map((W)=>U`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${W.id===m0?" active":""}`}
                                                                onClick=${(O)=>{w4(W.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${m0&&E1.has(m0)&&U`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{R_(m0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:U`
                                    <div class="pane-popout-controls-label" aria-label=${l_}>${l_}</div>
                                `}
                        </div>
                    `}
                    ${N1?U`<div class="editor-pane-host" ref=${K1}></div>`:U`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${N1&&m0&&E1.has(m0)&&U`
                        <${z3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>R_(m0)}
                        />
                    `}
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${q1?"":" workspace-collapsed"}${N1?" editor-open":""}${Q?" chat-only":""}${W1?" zen-mode":""}`} ref=${i_}>
            ${Z0&&U`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)f5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),a3(B0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${P1}
                            value=${B0}
                            onInput=${(W)=>{let O=W.currentTarget?.value??"";$0(String(O))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),f5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${I0.kind||"info"}`}>
                            ${I0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${R||!I0.canSubmit}>
                                ${R?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${f5}
                                disabled=${R}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Q&&U`
                <${zj}
                    onFileSelect=${C5}
                    visible=${q1}
                    active=${q1||N1}
                    onOpenEditor=${r1}
                    onOpenTerminalTab=${L1}
                    onOpenVncTab=${A_}
                    onToggleTerminal=${o1?w1:void 0}
                    terminalVisible=${Boolean(o1&&u1)}
                />
                <button
                    class=${`workspace-toggle-tab${q1?" open":" closed"}`}
                    onClick=${_Y}
                    title=${q1?"Hide workspace":"Show workspace"}
                    aria-label=${q1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${fZ} onTouchStart=${vZ}></div>
            `}
            ${$4&&U`
                <div class="editor-pane-container">
                    ${W1&&U`<div class="zen-hover-zone"></div>`}
                    ${N1&&U`
                        <${Oj}
                            tabs=${j_}
                            activeId=${m0}
                            onActivate=${w4}
                            onClose=${h_}
                            onCloseOthers=${p_}
                            onCloseAll=${t4}
                            onTogglePin=${c_}
                            onTogglePreview=${R_}
                            onEditSource=${x5}
                            previewTabs=${E1}
                            paneOverrides=${H_}
                            onToggleDock=${o1?w1:void 0}
                            dockVisible=${o1&&u1}
                            onToggleZen=${v4}
                            zenMode=${W1}
                            onPopOutTab=${V?void 0:W8}
                        />
                    `}
                    ${N1&&U`<div class="editor-pane-host" ref=${K1}></div>`}
                    ${N1&&m0&&E1.has(m0)&&U`
                        <${z3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${m0}
                            onClose=${()=>R_(m0)}
                        />
                    `}
                    ${o1&&u1&&U`<div class="dock-splitter" onMouseDown=${mZ} onTouchStart=${hZ}></div>`}
                    ${o1&&U`<div class=${`dock-panel${u1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&U`
                                    <button class="dock-panel-action" onClick=${()=>W8(r4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${w1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${e4}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${gZ} onTouchStart=${bZ}></div>
            `}
            <div class="container">
                ${k&&fj()&&U`<div class="search-results-spacer"></div>`}
                ${Q&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${Y1?.agent_name?`@${Y1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${Y1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>s3(W.currentTarget.value)}
                                    >
                                        ${N0.map((W)=>U`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${u8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${Y1?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${H6}
                                    title=${R?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${R}
                                >
                                    ${R?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${Y1?.chat_jid&&Y1.chat_jid!==(Y1.root_chat_jid||Y1.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${t3}
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
                ${(F||k)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${lZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${F?`#${F}`:`Search: ${k} · ${e_}`}</span>
                    </div>
                `}
                <${c7}
                    posts=${K5}
                    hasMore=${B8?wZ:!1}
                    onLoadMore=${B8?uZ:void 0}
                    timelineRef=${Q_}
                    onHashtagClick=${cZ}
                    onMessageRef=${I1}
                    onScrollToMessage=${C1}
                    onFileRef=${M0}
                    onPostClick=${void 0}
                    onDeletePost=${rZ}
                    onOpenWidget=${jY}
                    emptyMessage=${F?`No posts with #${F}`:k?`No results for "${k}"`:void 0}
                    agents=${e1}
                    user=${w_}
                    reverse=${B8}
                    removingPostIds=${T1}
                    searchQuery=${k}
                />
                <${L$}
                    status=${N4(P)?null:P}
                    draft=${Q0}
                    plan=${_0}
                    thought=${q0}
                    pendingRequest=${G0}
                    intent=${C}
                    turnId=${A0}
                    steerQueued=${e3}
                    onPanelToggle=${B_}
                    showExtensionPanels=${!1}
                />
                <${V7}
                    session=${a}
                    onClose=${L6}
                    onRetry=${aZ}
                    onInject=${tZ}
                />
                <${E7}
                    widget=${O0}
                    onClose=${z6}
                    onWidgetEvent=${QY}
                />
                <${L$}
                    extensionPanels=${Array.from(E0.values())}
                    pendingPanelActions=${p0}
                    onExtensionPanelAction=${oZ}
                    turnId=${A0}
                    steerQueued=${e3}
                    onPanelToggle=${B_}
                    showCorePanels=${!1}
                />
                <${Y$}
                    items=${H?[]:u0}
                    onInjectQueuedFollowup=${i3}
                    onRemoveQueuedFollowup=${d3}
                    onOpenFilePill=${M0}
                />
                <${b2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:O}=f1.current||{};if(!W&&!O)v_(),N5()}}
                    onFocus=${N5}
                    searchMode=${H}
                    searchScope=${M}
                    onSearch=${nZ}
                    onSearchScopeChange=${p}
                    onEnterSearch=${iZ}
                    onExitSearch=${dZ}
                    fileRefs=${b}
                    onRemoveFileRef=${L}
                    onClearFileRefs=${u}
                    onSetFileRefs=${l}
                    messageRefs=${t}
                    onRemoveMessageRef=${Y4}
                    onClearMessageRefs=${p4}
                    onSetMessageRefs=${Q5}
                    onSwitchChat=${s3}
                    onRenameSession=${a3}
                    isRenameSessionInProgress=${R}
                    onCreateSession=${ZY}
                    onDeleteSession=${t3}
                    onRestoreSession=${$Y}
                    activeEditorPath=${Q?null:m0}
                    onAttachEditorFile=${Q?void 0:F1}
                    onOpenFilePill=${M0}
                    followupQueueCount=${G_}
                    followupQueueItems=${u0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${i3}
                    onRemoveQueuedFollowup=${d3}
                    onSubmitIntercept=${sZ}
                    onMessageResponse=${w5}
                    onSubmitError=${Z5}
                    onPopOutChat=${V?void 0:YY}
                    isAgentActive=${y5}
                    activeChatAgents=${X0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${a0}
                    modelUsage=${D1}
                    thinkingLevel=${O1}
                    supportsThinking=${v0}
                    contextUsage=${S0}
                    notificationsEnabled=${a4}
                    notificationPermission=${y4}
                    onToggleNotifications=${R1}
                    onModelChange=${p1}
                    onModelStateChange=${U8}
                    statusNotice=${N4(P)?P:null}
                />
                <${x7}
                    request=${G0}
                    onRespond=${()=>{W0(null),f0.current=null}}
                />
            </div>
        </div>
    `}function YX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=x((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},N=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",N);else window.history.pushState(null,"",N);$(window.location.href)},[]),Q=R0(()=>new URL(_).searchParams,[_]);return U`<${ZX} locationParams=${Q} navigate=${j} />`}M4(U`<${YX} />`,document.getElementById("app"));

//# debugId=A678C8FBB01CFC3F64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
