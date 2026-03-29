var mZ=Object.defineProperty;var hZ=(_)=>_;function pZ(_,$){this[_]=hZ.bind(null,$)}var cZ=(_,$)=>{for(var j in $)mZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:pZ.bind($,j)})};var D8,B1,L2,lZ,k4,j2,U2,F2,z2,P6,E6,k6,H2,J8={},O8=[],nZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,E8=Array.isArray;function q4(_,$){for(var j in $)_[j]=$[j];return _}function C6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function k8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?D8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return z8(_,q,Q,Z,null)}function z8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++L2:Z,__i:-1,__u:0};return Z==null&&B1.vnode!=null&&B1.vnode(Y),Y}function M8(_){return _.children}function K5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function dZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=q4({},$);Y.__v=$.__v+1,B1.vnode&&B1.vnode(Y),x6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,D2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&J2(Y)}}function J2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),J2(_)}function M6(_){(!_.__d&&(_.__d=!0)&&k4.push(_)&&!A8.__r++||j2!=B1.debounceRendering)&&((j2=B1.debounceRendering)||U2)(A8)}function A8(){try{for(var _,$=1;k4.length;)k4.length>$&&k4.sort(F2),_=k4.shift(),$=k4.length,dZ(_)}finally{k4.length=A8.__r=0}}function O2(_,$,j,Q,Z,Y,q,N,K,G,X){var B,V,O,E,k,D,J,A=Q&&Q.__k||O8,M=$.length;for(K=iZ(j,$,A,K,M),B=0;B<M;B++)(O=j.__k[B])!=null&&(V=O.__i!=-1&&A[O.__i]||J8,O.__i=B,D=x6(_,O,V,Z,Y,q,N,K,G,X),E=O.__e,O.ref&&V.ref!=O.ref&&(V.ref&&S6(V.ref,null,O),X.push(O.ref,O.__c||E,O)),k==null&&E!=null&&(k=E),(J=!!(4&O.__u))||V.__k===O.__k?K=A2(O,K,_,J):typeof O.type=="function"&&D!==void 0?K=D:E&&(K=E.nextSibling),O.__u&=-7);return j.__e=k,K}function iZ(_,$,j,Q,Z){var Y,q,N,K,G,X=j.length,B=X,V=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=z8(null,q,null,null,null):E8(q)?q=_.__k[Y]=z8(M8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=z8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+V,q.__=_,q.__b=_.__b+1,N=null,(G=q.__i=rZ(q,j,K,B))!=-1&&(B--,(N=j[G])&&(N.__u|=2)),N==null||N.__v==null?(G==-1&&(Z>X?V--:Z<X&&V++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?V--:G==K+1?V++:(G>K?V--:V++,q.__u|=4))):_.__k[Y]=null;if(B)for(Y=0;Y<X;Y++)(N=j[Y])!=null&&(2&N.__u)==0&&(N.__e==Q&&(Q=X5(N)),k2(N,N));return Q}function A2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=A2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function rZ(_,$,j,Q){var Z,Y,q,N=_.key,K=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&N==null||X&&N==G.key&&K==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&N==G.key&&K==G.type)return q}return-1}function Q2(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||nZ.test($)?j:j+"px"}function F8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||Q2(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||Q2(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(z2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=P6,_.addEventListener($,Y?k6:E6,Y)):_.removeEventListener($,Y?k6:E6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(N){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Z2(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=P6++;else if($.t<j.u)return;return j(B1.event?B1.event($):$)}}}function x6(_,$,j,Q,Z,Y,q,N,K,G){var X,B,V,O,E,k,D,J,A,M,d,h,o,e,R,S=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[N=$.__e=j.__e]),(X=B1.__b)&&X($);_:if(typeof S=="function")try{if(J=$.props,A=S.prototype&&S.prototype.render,M=(X=S.contextType)&&Q[X.__c],d=X?M?M.props.value:X.__:Q,j.__c?D=(B=$.__c=j.__c).__=B.__E:(A?$.__c=B=new S(J,d):($.__c=B=new K5(J,d),B.constructor=S,B.render=sZ),M&&M.sub(B),B.state||(B.state={}),B.__n=Q,V=B.__d=!0,B.__h=[],B._sb=[]),A&&B.__s==null&&(B.__s=B.state),A&&S.getDerivedStateFromProps!=null&&(B.__s==B.state&&(B.__s=q4({},B.__s)),q4(B.__s,S.getDerivedStateFromProps(J,B.__s))),O=B.props,E=B.state,B.__v=$,V)A&&S.getDerivedStateFromProps==null&&B.componentWillMount!=null&&B.componentWillMount(),A&&B.componentDidMount!=null&&B.__h.push(B.componentDidMount);else{if(A&&S.getDerivedStateFromProps==null&&J!==O&&B.componentWillReceiveProps!=null&&B.componentWillReceiveProps(J,d),$.__v==j.__v||!B.__e&&B.shouldComponentUpdate!=null&&B.shouldComponentUpdate(J,B.__s,d)===!1){$.__v!=j.__v&&(B.props=J,B.state=B.__s,B.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),O8.push.apply(B.__h,B._sb),B._sb=[],B.__h.length&&q.push(B);break _}B.componentWillUpdate!=null&&B.componentWillUpdate(J,B.__s,d),A&&B.componentDidUpdate!=null&&B.__h.push(function(){B.componentDidUpdate(O,E,k)})}if(B.context=d,B.props=J,B.__P=_,B.__e=!1,h=B1.__r,o=0,A)B.state=B.__s,B.__d=!1,h&&h($),X=B.render(B.props,B.state,B.context),O8.push.apply(B.__h,B._sb),B._sb=[];else do B.__d=!1,h&&h($),X=B.render(B.props,B.state,B.context),B.state=B.__s;while(B.__d&&++o<25);B.state=B.__s,B.getChildContext!=null&&(Q=q4(q4({},Q),B.getChildContext())),A&&!V&&B.getSnapshotBeforeUpdate!=null&&(k=B.getSnapshotBeforeUpdate(O,E)),e=X!=null&&X.type===M8&&X.key==null?E2(X.props.children):X,N=O2(_,E8(e)?e:[e],$,j,Q,Z,Y,q,N,K,G),B.base=$.__e,$.__u&=-161,B.__h.length&&q.push(B),D&&(B.__E=B.__=null)}catch(H){if($.__v=null,K||Y!=null)if(H.then){for($.__u|=K?160:128;N&&N.nodeType==8&&N.nextSibling;)N=N.nextSibling;Y[Y.indexOf(N)]=null,$.__e=N}else{for(R=Y.length;R--;)C6(Y[R]);I6($)}else $.__e=j.__e,$.__k=j.__k,H.then||I6($);B1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):N=$.__e=oZ(j.__e,$,j,Q,Z,Y,q,K,G);return(X=B1.diffed)&&X($),128&$.__u?void 0:N}function I6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(I6))}function D2(_,$,j){for(var Q=0;Q<j.length;Q++)S6(j[Q],j[++Q],j[++Q]);B1.__c&&B1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){B1.__e(Y,Z.__v)}})}function E2(_){return typeof _!="object"||_==null||_.__b>0?_:E8(_)?_.map(E2):q4({},_)}function oZ(_,$,j,Q,Z,Y,q,N,K){var G,X,B,V,O,E,k,D=j.props||J8,J=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((O=Y[G])&&"setAttribute"in O==!!A&&(A?O.localName==A:O.nodeType==3)){_=O,Y[G]=null;break}}if(_==null){if(A==null)return document.createTextNode(J);_=document.createElementNS(Z,A,J.is&&J),N&&(B1.__m&&B1.__m($,Y),N=!1),Y=null}if(A==null)D===J||N&&_.data==J||(_.data=J);else{if(Y=Y&&D8.call(_.childNodes),!N&&Y!=null)for(D={},G=0;G<_.attributes.length;G++)D[(O=_.attributes[G]).name]=O.value;for(G in D)O=D[G],G=="dangerouslySetInnerHTML"?B=O:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||F8(_,G,null,O,Z);for(G in J)O=J[G],G=="children"?V=O:G=="dangerouslySetInnerHTML"?X=O:G=="value"?E=O:G=="checked"?k=O:N&&typeof O!="function"||D[G]===O||F8(_,G,O,D[G],Z);if(X)N||B&&(X.__html==B.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(B&&(_.innerHTML=""),O2($.type=="template"?_.content:_,E8(V)?V:[V],$,j,Q,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),N,K),Y!=null)for(G=Y.length;G--;)C6(Y[G]);N||(G="value",A=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[G]||A=="progress"&&!E||A=="option"&&E!=D[G])&&F8(_,G,E,D[G],Z),G="checked",k!=null&&k!=_[G]&&F8(_,G,k,D[G],Z))}return _}function S6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){B1.__e(Z,j)}}function k2(_,$,j){var Q,Z;if(B1.unmount&&B1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||S6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){B1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&k2(Q[Z],$,j||typeof _.type!="function");j||C6(_.__e),_.__c=_.__=_.__e=void 0}function sZ(_,$,j){return this.constructor(_,j)}function I4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),B1.__&&B1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],x6($,_=(!Q&&j||$).__k=k8(M8,null,[_]),Z||J8,J8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?D8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),D2(Y,_,q)}function M2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,M6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+H2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}D8=O8.slice,B1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(N){_=N}throw _}},L2=0,lZ=function(_){return _!=null&&_.constructor===void 0},K5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q4({},this.state),typeof _=="function"&&(_=_(q4({},j),this.props)),_&&q4(j,_),_!=null&&this.__v&&($&&this._sb.push($),M6(this))},K5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),M6(this))},K5.prototype.render=M8,k4=[],U2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F2=function(_,$){return _.__v.__b-$.__v.__b},A8.__r=0,z2=/(PointerCapture)$|Capture$/i,P6=0,E6=Z2(!1),k6=Z2(!0),H2=0;var M4,X1,D6,Y2,B5=0,I2=[],H1=B1,q2=H1.__b,N2=H1.__r,G2=H1.diffed,K2=H1.__c,X2=H1.unmount,B2=H1.__;function V5(_,$){H1.__h&&H1.__h(X1,_,B5||$),B5=0;var j=X1.__H||(X1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return B5=1,y6(S2,_)}function y6(_,$,j){var Q=V5(M4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):S2(void 0,$),function(N){var K=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(K,N);K!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=X1,!X1.__f)){var Z=function(N,K,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(V){return V.__c});if(X.every(function(V){return!V.__N}))return!Y||Y.call(this,N,K,G);var B=Q.__c.props!==N;return X.some(function(V){if(V.__N){var O=V.__[0];V.__=V.__N,V.__N=void 0,O!==V.__[0]&&(B=!0)}}),Y&&Y.call(this,N,K,G)||B};X1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=X1;X1.componentWillUpdate=function(N,K,G){if(this.__e){var X=Y;Y=void 0,Z(N,K,G),Y=X}q&&q.call(this,N,K,G)},X1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=V5(M4++,3);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,X1.__H.__h.push(j))}function v5(_,$){var j=V5(M4++,4);!H1.__s&&R6(j.__H,$)&&(j.__=_,j.u=$,X1.__h.push(j))}function P(_){return B5=5,R0(function(){return{current:_}},[])}function T2(_,$,j){B5=6,v5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function R0(_,$){var j=V5(M4++,7);return R6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return B5=8,R0(function(){return _},$)}function P2(_){var $=X1.context[_.__c],j=V5(M4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(X1)),$.props.value):_.__}function C2(_,$){H1.useDebugValue&&H1.useDebugValue($?$(_):_)}function x2(_){var $=V5(M4++,10),j=m();return $.__=_,X1.componentDidCatch||(X1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function aZ(){for(var _;_=I2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(H8),$.__h.some(T6),$.__h=[]}catch(j){$.__h=[],H1.__e(j,_.__v)}}}H1.__b=function(_){X1=null,q2&&q2(_)},H1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),B2&&B2(_,$)},H1.__r=function(_){N2&&N2(_),M4=0;var $=(X1=_.__c).__H;$&&(D6===X1?($.__h=[],X1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(H8),$.__h.some(T6),$.__h=[],M4=0)),D6=X1},H1.diffed=function(_){G2&&G2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(I2.push($)!==1&&Y2===H1.requestAnimationFrame||((Y2=H1.requestAnimationFrame)||tZ)(aZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D6=X1=null},H1.__c=function(_,$){$.some(function(j){try{j.__h.some(H8),j.__h=j.__h.filter(function(Q){return!Q.__||T6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],H1.__e(Q,j.__v)}}),K2&&K2(_,$)},H1.unmount=function(_){X2&&X2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{H8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&H1.__e($,j.__v))};var V2=typeof requestAnimationFrame=="function";function tZ(_){var $,j=function(){clearTimeout(Q),V2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);V2&&($=requestAnimationFrame(j))}function H8(_){var $=X1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X1=$}function T6(_){var $=X1;_.__c=_.__(),X1=$}function R6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function S2(_,$){return typeof $=="function"?$(_):$}var y2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],N=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=N:q===4?Q[1]=Object.assign(Q[1]||{},N):q===5?(Q[1]=Q[1]||{})[$[++Y]]=N:q===6?Q[1][$[++Y]]+=N+"":q?(Z=_.apply(N,y2(_,N,j,["",null])),Q.push(Z),N[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(N)}return Q},W2=new Map;function eZ(_){var $=W2.get(this);return $||($=new Map,W2.set(this,$)),($=y2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",N="",K=[0],G=function(V){Y===1&&(V||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,V,q):Y===3&&(V||q)?(K.push(3,V,q),Y=2):Y===2&&q==="..."&&V?K.push(4,V,0):Y===2&&q&&!V?K.push(5,0,!0,q):Y>=5&&((q||!V&&Y===5)&&(K.push(Y,0,q,Z),Y=6),V&&(K.push(Y,V,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var B=0;B<j[X].length;B++)Q=j[X][B],Y===1?Q==="<"?(G(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:N?Q===N?N="":q+=Q:Q==='"'||Q==="'"?N=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][B+1]===">")?(G(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=eZ.bind(k8);var o1={};cZ(o1,{uploadWorkspaceFile:()=>T8,uploadMedia:()=>h6,updateWorkspaceFile:()=>HY,submitAdaptiveCardAction:()=>p6,streamSidePrompt:()=>UY,stopAutoresearch:()=>XY,steerAgentQueueItem:()=>LY,setWorkspaceVisibility:()=>p5,setAgentThoughtVisibility:()=>n6,sendPeerAgentMessage:()=>NY,sendAgentMessage:()=>l4,searchPosts:()=>u6,restoreChatBranch:()=>qY,respondToAgentRequest:()=>I8,renameWorkspaceFile:()=>s6,renameChatBranch:()=>ZY,removeAgentQueueItem:()=>WY,pruneChatBranch:()=>YY,moveWorkspaceEntry:()=>a6,getWorkspaceTree:()=>m5,getWorkspaceRawUrl:()=>P8,getWorkspaceFile:()=>h5,getWorkspaceDownloadUrl:()=>C8,getWorkspaceBranch:()=>zY,getTimeline:()=>c4,getThumbnailUrl:()=>d6,getThread:()=>f6,getPostsByHashtag:()=>w6,getMediaUrl:()=>C_,getMediaText:()=>i6,getMediaInfo:()=>W5,getMediaBlob:()=>FY,getChatBranches:()=>QY,getAutoresearchStatus:()=>KY,getAgents:()=>g6,getAgentThought:()=>l6,getAgentStatus:()=>m6,getAgentQueueState:()=>VY,getAgentModels:()=>g5,getAgentContext:()=>GY,getActiveChatAgents:()=>b6,forkChatBranch:()=>b5,dismissAutoresearch:()=>BY,deleteWorkspaceFile:()=>t6,deletePost:()=>v6,createWorkspaceFile:()=>o6,createReply:()=>jY,createPost:()=>$Y,attachWorkspaceFile:()=>r6,addToWhitelist:()=>c6,SSEClient:()=>x8});async function s0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function R2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function _Y(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:N}=await j.read();if(N)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let G of K){let X=R2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=R2(Z);if(Y)$(Y.event,Y.data)}async function c4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return s0(Q)}async function w6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function u6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",N=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return s0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${N}${K}`)}async function f6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return s0(`/thread/${_}${j}`)}async function $Y(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return s0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function jY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return s0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function v6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return s0(Z,{method:"DELETE"})}async function l4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",N={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")N.mode=Z;return s0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(N)})}async function b6(){return s0("/agent/active-chats")}async function QY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return s0(`/agent/branches${Q}`)}async function b5(_,$={}){return s0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function ZY(_,$={}){return s0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function YY(_){return s0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function qY(_,$={}){return s0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function NY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return s0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function g6(){return s0("/agent/roster")}async function m6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/status${$}`)}async function GY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/context${$}`)}async function KY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/autoresearch/status${$}`)}async function XY(_=null,$={}){return s0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function BY(_=null){return s0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function VY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/queue-state${$}`)}async function WY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function LY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function g5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return s0(`/agent/models${$}`)}async function h6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function I8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function p6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function UY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await _Y(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function c6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function l6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return s0(j)}async function n6(_,$,j){return s0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function C_(_){return`/media/${_}`}function d6(_){return`/media/${_}/thumbnail`}async function W5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function FY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function m5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return s0(Q)}async function zY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return s0($)}async function h5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return s0(Z)}async function HY(_,$){return s0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function r6(_){return s0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function T8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",N=await fetch(""+q,{method:"POST",body:Q});if(!N.ok){let K=await N.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${N.status}`);throw G.status=N.status,G.code=K.code,G}return N.json()}async function o6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function s6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function a6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function t6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return s0($,{method:"DELETE"})}async function p5(_,$=!1){return s0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function P8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function C8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class x8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function S8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function JY(_,$){let j=S8(_),Q=S8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function e6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function _$(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function OY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function AY(_,$,j=0,Q=(Z)=>Z){let Z=S8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=OY(Y.length,j),N=Y.map((K)=>S8(Q(K)));for(let K of q)if(N[K].startsWith(Z))return K;for(let K of q)if(N[K].includes(Z))return K;return-1}function $$(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(JY(Y,$))return j}return AY(Z,$,0,Q)}function W_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function L5(_,$=!1){let j=W_(_);if(j===null)return $;return j==="true"}function U5(_,$=null){let j=W_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function y8(_){return String(_||"").trim().toLowerCase()}function j$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return y8($[1]||"")}function DY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=y8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function w2(_,$,j={}){let Q=j$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return DY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return y8(Y?.agent_name).startsWith(Q)})}function Q$(_){let $=y8(_);return $?`@${$} `:""}function u2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function R8(_){let $=Z$(_);return $?`@${$}`:""}function Z$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function w8(_,$=""){let j=String(_||""),Q=Z$(j),Z=Z$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function f2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function EY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function u8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=EY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function v2(_,$,j){let Q=R8(_),Z=R8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function kY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function N4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return N4(_)?"Compacting context":"Working..."}function MY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function v8(_,$=Date.now()){let j=kY(_);if(j===null)return null;return MY(Math.max(0,$-j))}function h_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let N=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${N} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${K}>${$}</span>
      ${Q&&L`
        <button
          class=${G}
          onClick=${(B)=>{B.preventDefault(),B.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var IY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function TY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",N=`${Q!=null?`Context: ${b2(Q)} / ${b2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,X=j/100*G,B=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${N}
            aria-label="Compact context"
            onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${B}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function b2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function PY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function CY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y);return{content:[...q,...N].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function xY(_){let $=PY(_||""),j=CY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Y$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=xY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((N)=>L`
                                        <${h_}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((N)=>{let K=N.split("/").pop()||N;return L`
                                            <${h_}
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
    `}function g2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:N,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:B=[],onRemoveMessageRef:V,onClearMessageRefs:O,activeModel:E=null,modelUsage:k=null,thinkingLevel:D=null,supportsThinking:J=!1,contextUsage:A=null,onContextCompact:M,notificationsEnabled:d=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:e,onModelStateChange:R,activeEditorPath:S=null,onAttachEditorFile:H,onOpenFilePill:x,followupQueueItems:p=[],onInjectQueuedFollowup:Z0,onRemoveQueuedFollowup:n,onSubmitIntercept:$0,onMessageResponse:_0,onPopOutChat:q0,isAgentActive:G0=!1,activeChatAgents:X0=[],currentChatJid:z0="web:default",connectionStatus:A0="connected",onSetFileRefs:D0,onSetMessageRefs:n0,onSubmitError:C0,onSwitchChat:M0,onRenameSession:d0,isRenameSessionInProgress:i0=!1,onCreateSession:v0,onDeleteSession:o0,onRestoreSession:b0,showQueueStack:e0=!0,statusNotice:H0=null}){let[m0,_1]=m(""),[j1,j_]=m(""),[J1,a0]=m([]),[v1,D1]=m(!1),[Q1,g0]=m([]),[P1,E1]=m(0),[a,B0]=m(!1),[U0,N0]=m([]),[x0,S0]=m(0),[w0,k0]=m(!1),[y0,c0]=m(!1),[O0,f0]=m(!1),[J0,Q0]=m(!1),[y,t]=m([]),[L0,E0]=m(0),[u0,Z1]=m(0),[O1,q1]=m(!1),[b1,_4]=m(0),[G_,s1]=m(null),[K_,Q_]=m(()=>Date.now()),t0=P(null),l1=P(null),$4=P(null),S_=P(null),t4=P(null),y4=P(null),w1=P(null),X_=P(null),C1=P({value:"",updatedAt:0}),A1=P(0),N1=P(!1),y_=200,R_=(F)=>{let f=new Set,i=[];for(let c of F||[]){if(typeof c!=="string")continue;let I0=c.trim();if(!I0||f.has(I0))continue;f.add(I0),i.push(I0)}return i},G1=()=>{let F=W_("piclaw_compose_history");if(!F)return[];try{let f=JSON.parse(F);if(!Array.isArray(f))return[];return R_(f)}catch{return[]}},Z_=(F)=>{Y1("piclaw_compose_history",JSON.stringify(F))},h0=P(G1()),M1=P(-1),z_=P(""),a1=m0.trim()||J1.length>0||K.length>0||B.length>0,R4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),l_=typeof window<"u"&&typeof Notification<"u",w4=typeof window<"u"?Boolean(window.isSecureContext):!1,e4=l_&&w4&&h!=="denied",d_=h==="granted"&&d,w_=N4(H0),T5=f8(H0),P5=typeof H0?.detail==="string"&&H0.detail.trim()?H0.detail.trim():"",K1=w_?v8(H0,K_):null,x1=d_?"Disable notifications":"Enable notifications",_5=J1.length>0||K.length>0||B.length>0,H_=A0==="disconnected"?"Reconnecting":String(A0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),t1=A0==="disconnected"?"Reconnecting":`Connection: ${H_}`,g1=(Array.isArray(X0)?X0:[]).filter((F)=>!F?.archived_at),I1=(()=>{for(let F of Array.isArray(X0)?X0:[]){let f=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(f&&f===z0)return F}return null})(),u1=Boolean(I1&&I1.chat_jid===(I1.root_chat_jid||I1.chat_jid)),U1=R0(()=>{let F=new Set,f=[];for(let i of Array.isArray(X0)?X0:[]){let c=typeof i?.chat_jid==="string"?i.chat_jid.trim():"";if(!c||c===z0||F.has(c))continue;if(!(typeof i?.agent_name==="string"?i.agent_name.trim():""))continue;F.add(c),f.push(i)}return f},[X0,z0]),J_=U1.length>0,O_=J_&&typeof M0==="function",A_=J_&&typeof b0==="function",i_=Boolean(i0||N1.current),e1=!j&&typeof d0==="function"&&!i_,n1=!j&&typeof v0==="function",D_=!j&&typeof o0==="function"&&!u1,j4=!j&&(O_||A_||e1||n1||D_),F1=E||"",r_=J&&D?` (${D})`:"",u4=r_.trim()?`${D}`:"",f4=typeof k?.hint_short==="string"?k.hint_short.trim():"",E_=[u4||null,f4||null].filter(Boolean).join(" • "),v4=[F1?`Current model: ${F1}${r_}`:null,k?.plan?`Plan: ${k.plan}`:null,f4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),$5=y0?"Switching model…":v4.join(" • ")||`Current model: ${F1}${r_} (tap to open model picker)`,u_=(F)=>{if(!F||typeof F!=="object")return;let f=F.model??F.current;if(typeof R==="function")R({model:f??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(f&&typeof e==="function")e(f)},f_=(F)=>{let f=F||t0.current;if(!f)return;f.style.height="auto",f.style.height=`${f.scrollHeight}px`,f.style.overflowY="hidden"},U4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){B0(!1),g0([]);return}let f=F.toLowerCase().split(" ")[0];if(f.length<1){B0(!1),g0([]);return}let i=IY.filter((c)=>c.name.startsWith(f)||c.name.replace(/-/g,"").startsWith(f.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===f))k0(!1),N0([]),g0(i),E1(0),B0(!0);else B0(!1),g0([])},v_=(F)=>{let f=m0,i=f.indexOf(" "),c=i>=0?f.slice(i):"",I0=F.name+c;_1(I0),B0(!1),g0([]),requestAnimationFrame(()=>{let z1=t0.current;if(!z1)return;let T1=I0.length;z1.selectionStart=T1,z1.selectionEnd=T1,z1.focus()})},b4=(F)=>{if(j$(F)==null){k0(!1),N0([]);return}let f=w2(g1,F,{currentChatJid:z0});if(f.length>0&&!(f.length===1&&Q$(f[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))B0(!1),g0([]),N0(f),S0(0),k0(!0);else k0(!1),N0([])},b_=(F)=>{let f=Q$(F?.agent_name);if(!f)return;_1(f),k0(!1),N0([]),requestAnimationFrame(()=>{let i=t0.current;if(!i)return;let c=f.length;i.selectionStart=c,i.selectionEnd=c,i.focus()})},k_=()=>{if(j||!O_&&!A_&&!e1&&!n1&&!D_)return!1;return C1.current={value:"",updatedAt:0},f0(!1),B0(!1),g0([]),k0(!1),N0([]),Q0(!0),!0},k1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!O_&&!A_&&!e1&&!n1&&!D_)return;if(J0){C1.current={value:"",updatedAt:0},Q0(!1);return}k_()},F4=(F)=>{let f=typeof F==="string"?F.trim():"";if(Q0(!1),!f||f===z0){requestAnimationFrame(()=>t0.current?.focus());return}M0?.(f)},z4=async(F)=>{let f=typeof F==="string"?F.trim():"";if(Q0(!1),!f||typeof b0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await b0(f)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>t0.current?.focus())}},g4=(F)=>{let i=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return i>=0?i:0},V1=R0(()=>{let F=[];for(let f of U1){let i=Boolean(f?.archived_at),c=typeof f?.agent_name==="string"?f.agent_name.trim():"",I0=typeof f?.chat_jid==="string"?f.chat_jid.trim():"";if(!c||!I0)continue;F.push({type:"session",key:`session:${I0}`,label:`@${c} — ${I0}${f?.is_active?" active":""}${i?" archived":""}`,chat:f,disabled:i?!A_:!O_})}if(n1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(e1)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:i_});if(D_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[U1,A_,O_,n1,e1,D_,i_]),H4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof d0!=="function"||i0||N1.current)return;N1.current=!0,Q0(!1);try{await d0()}catch(f){console.warn("Failed to rename session:",f)}finally{N1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},j5=async()=>{if(typeof v0!=="function")return;Q0(!1);try{await v0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>t0.current?.focus())},f1=async()=>{if(typeof o0!=="function")return;Q0(!1);try{await o0(z0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>t0.current?.focus())},Y_=(F)=>{if(j)j_(F);else _1(F),U4(F),b4(F);requestAnimationFrame(()=>f_())},o_=(F)=>{let f=j?j1:m0,i=f&&!f.endsWith(`
`)?`
`:"",c=`${f}${i}${F}`.trimStart();Y_(c)},m4=(F)=>{let f=F?.command?.model_label;if(f)return f;let i=F?.command?.message;if(typeof i==="string"){let c=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},Q4=async(F)=>{if(j||y0)return;c0(!0);try{let f=await l4("default",F,null,[],null,z0),i=m4(f);u_({model:i??E??null,thinking_level:f?.command?.thinking_level,supports_thinking:f?.command?.supports_thinking});try{let c=await g5(z0);if(c)u_(c)}catch{}return _?.(),!0}catch(f){return console.error("Failed to switch model:",f),alert("Failed to switch model: "+f.message),!1}finally{c0(!1)}},J4=async()=>{await Q4("/cycle-model")},Z4=async(F)=>{if(!F||y0)return;if(await Q4(`/model ${F}`))f0(!1)},M_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let f=F.chat;if(f?.archived_at)z4(f.chat_jid);else F4(f.chat_jid);return}if(F.type==="action"){if(F.action==="new"){j5();return}if(F.action==="rename"){H4();return}if(F.action==="delete")f1()}},B_=(F)=>{F.preventDefault(),F.stopPropagation(),C1.current={value:"",updatedAt:0},Q0(!1),f0((f)=>!f)},O4=async()=>{if(j)return;M?.(),await I_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},h4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return G0?"queue":void 0},I_=async(F,f,i={})=>{let{includeMedia:c=!0,includeFileRefs:I0=!0,includeMessageRefs:z1=!0,clearAfterSubmit:T1=!0,recordHistory:y1=!0}=i||{},Y4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:m0,p4=typeof Y4==="string"?Y4:"";if(!p4.trim()&&(c?J1.length===0:!0)&&(I0?K.length===0:!0)&&(z1?B.length===0:!0))return;B0(!1),g0([]),k0(!1),N0([]),Q0(!1),s1(null);let Q5=c?[...J1]:[],Z5=I0?[...K]:[],q_=z1?[...B]:[],h1=p4.trim();if(y1&&h1){let A4=h0.current,W1=R_(A4.filter((s_)=>s_!==h1));if(W1.push(h1),W1.length>200)W1.splice(0,W1.length-200);h0.current=W1,Z_(W1),M1.current=-1,z_.current=""}let Y5=()=>{if(c)a0([...Q5]);if(I0)D0?.(Z5);if(z1)n0?.(q_);_1(h1),requestAnimationFrame(()=>f_())};if(T1)_1(""),a0([]),X?.(),O?.();(async()=>{try{if(await $0?.({content:h1,submitMode:f,fileRefs:Z5,messageRefs:q_,mediaFiles:Q5})){_?.();return}let W1=[];for(let V_ of Q5){let E4=await h6(V_);W1.push(E4.id)}let s_=Z5.length?`Files:
${Z5.map((V_)=>`- ${V_}`).join(`
`)}`:"",q5=q_.length?`Referenced messages:
${q_.map((V_)=>`- message:${V_}`).join(`
`)}`:"",K8=W1.length?`Attachments:
${W1.map((V_,E4)=>{let B6=Q5[E4]?.name||`attachment-${E4+1}`;return`- attachment:${V_} (${B6})`}).join(`
`)}`:"",T_=[h1,s_,q5,K8].filter(Boolean).join(`

`),D4=await l4("default",T_,null,W1,h4(f),z0);if(_0?.(D4),D4?.command){u_({model:D4.command.model_label??E??null,thinking_level:D4.command.thinking_level,supports_thinking:D4.command.supports_thinking});try{let V_=await g5(z0);if(V_)u_(V_)}catch{}}_?.()}catch(A4){if(T1)Y5();let W1=A4?.message||"Failed to send message.";s1(W1),C0?.(W1),console.error("Failed to post:",A4)}})()},z=(F)=>{Z0?.(F)},I=C((F)=>{if(j||!O0&&!J0||F?.isComposing)return!1;let f=()=>{F.preventDefault?.(),F.stopPropagation?.()},i=()=>{C1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(f(),i(),O0)f0(!1);if(J0)Q0(!1);return!0}if(O0){if(F.key==="ArrowDown"){if(f(),i(),y.length>0)E0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(f(),i(),y.length>0)E0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return f(),i(),Z4(y[Math.max(0,Math.min(L0,y.length-1))]),!0;if(e6(F)&&y.length>0){f();let c=_$(C1.current,F.key);C1.current=c;let I0=$$(y,c.value,L0,(z1)=>z1);if(I0>=0)E0(I0);return!0}}if(J0){if(F.key==="ArrowDown"){if(f(),i(),V1.length>0)Z1((c)=>(c+1)%V1.length);return!0}if(F.key==="ArrowUp"){if(f(),i(),V1.length>0)Z1((c)=>(c-1+V1.length)%V1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&V1.length>0)return f(),i(),M_(V1[Math.max(0,Math.min(u0,V1.length-1))]),!0;if(e6(F)&&V1.length>0){f();let c=_$(C1.current,F.key);C1.current=c;let I0=$$(V1,c.value,u0,(z1)=>z1.label);if(I0>=0)Z1(I0);return!0}}return!1},[j,O0,J0,y,L0,V1,u0,Z4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),j_(""),N?.();return}if(I(F))return;let f=t0.current?.value??(j?j1:m0);if(u2(F,f,{searchMode:j,showSessionSwitcherButton:j4})){F.preventDefault(),k_();return}if(w0&&U0.length>0){let i=t0.current?.value??(j?j1:m0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))k0(!1),N0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),S0((c)=>(c+1)%U0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),S0((c)=>(c-1+U0.length)%U0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),b_(U0[x0]);return}if(F.key==="Escape"){F.preventDefault(),k0(!1),N0([]);return}}}if(a&&Q1.length>0){let i=t0.current?.value??(j?j1:m0);if(!String(i||"").startsWith("/"))B0(!1),g0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),E1((c)=>(c+1)%Q1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),E1((c)=>(c-1+Q1.length)%Q1.length);return}if(F.key==="Tab"){F.preventDefault(),v_(Q1[P1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!f.includes(" ")){F.preventDefault();let I0=Q1[P1];B0(!1),g0([]),I_(I0.name);return}}if(F.key==="Escape"){F.preventDefault(),B0(!1),g0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let i=t0.current;if(!i)return;let c=i.value||"",I0=i.selectionStart===0&&i.selectionEnd===0,z1=i.selectionStart===c.length&&i.selectionEnd===c.length;if(F.key==="ArrowUp"&&I0||F.key==="ArrowDown"&&z1){let T1=h0.current;if(!T1.length)return;F.preventDefault();let y1=M1.current;if(F.key==="ArrowUp"){if(y1===-1)z_.current=c,y1=T1.length-1;else if(y1>0)y1-=1;M1.current=y1,Y_(T1[y1]||"")}else{if(y1===-1)return;if(y1<T1.length-1)y1+=1,M1.current=y1,Y_(T1[y1]||"");else M1.current=-1,Y_(z_.current||""),z_.current=""}requestAnimationFrame(()=>{let Y4=t0.current;if(!Y4)return;let p4=Y4.value.length;Y4.selectionStart=p4,Y4.selectionEnd=p4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(f.trim())Z?.(f.trim(),Q)}else I_(f,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(f.trim())Z?.(f.trim(),Q)}else I_(f)},u=(F)=>{let f=Array.from(F||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!f.length)return;a0((i)=>[...i,...f]),s1(null)},r=(F)=>{u(F.target.files),F.target.value=""},Y0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),A1.current+=1,D1(!0)},V0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),A1.current=Math.max(0,A1.current-1),A1.current===0)D1(!1)},W0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";D1(!0)},j0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),A1.current=0,D1(!1),u(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let f=F.clipboardData?.items;if(!f||!f.length)return;let i=[];for(let c of f){if(c.kind!=="file")continue;let I0=c.getAsFile?.();if(I0)i.push(I0)}if(i.length>0)F.preventDefault(),u(i)},S1=(F)=>{a0((f)=>f.filter((i,c)=>c!==F))},__=()=>{s1(null),a0([]),X?.(),O?.()},m1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:f,longitude:i,accuracy:c}=F.coords,I0=`${f.toFixed(5)}, ${i.toFixed(5)}`,z1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",T1=`https://maps.google.com/?q=${f},${i}`,y1=`Location: ${I0}${z1} ${T1}`;o_(y1)},(F)=>{let f=F?.message||"Unable to retrieve location.";alert(`Location error: ${f}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;C1.current={value:"",updatedAt:0},q1(!0),g5(z0).then((F)=>{let f=Array.isArray(F?.models)?F.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];f.sort((i,c)=>i.localeCompare(c,void 0,{sensitivity:"base"})),t(f),u_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),t([])}).finally(()=>{q1(!1)})},[O0,E]),g(()=>{if(j)f0(!1),Q0(!1),B0(!1),g0([]),k0(!1),N0([])},[j]),g(()=>{if(J0&&!j4)Q0(!1)},[J0,j4]),g(()=>{if(!O0)return;let F=y.findIndex((f)=>f===E);E0(F>=0?F:0)},[O0,y,E]),g(()=>{if(!J0)return;Z1(g4(V1)),C1.current={value:"",updatedAt:0}},[J0,z0]),g(()=>{if(!O0)return;let F=(f)=>{let i=S_.current,c=t4.current,I0=f.target;if(i&&i.contains(I0))return;if(c&&c.contains(I0))return;f0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(!J0)return;let F=(f)=>{let i=y4.current,c=w1.current,I0=f.target;if(i&&i.contains(I0))return;if(c&&c.contains(I0))return;Q0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),g(()=>{if(j||!O0&&!J0)return;let F=(f)=>{I(f)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,O0,J0,I]),g(()=>{if(!O0)return;let F=S_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,L0,y]),g(()=>{if(!J0)return;let F=y4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,u0,V1.length]),g(()=>{let F=()=>{let z1=X_.current?.clientWidth||0;_4((T1)=>T1===z1?T1:z1)};F();let f=X_.current,i=0,c=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,F()})},I0=null;if(f&&typeof ResizeObserver<"u")I0=new ResizeObserver(()=>c()),I0.observe(f);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(i)cancelAnimationFrame(i);if(I0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,E,I1?.agent_name,j4,A?.percent]);let C5=(F)=>{let f=F.target.value;if(s1(null),J0)Q0(!1);f_(F.target),Y_(f)};return g(()=>{requestAnimationFrame(()=>f_())},[m0,j1,j]),g(()=>{if(!w_)return;Q_(Date.now());let F=setInterval(()=>Q_(Date.now()),1000);return()=>clearInterval(F)},[w_,H0?.started_at,H0?.startedAt]),g(()=>{if(j)return;b4(m0)},[g1,z0,m0,j]),L`
        <div class="compose-box">
            ${e0&&!j&&L`
                <${Y$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${n}
                    onOpenFilePill=${x}
                />
            `}
            ${H0&&L`
                <div
                    class=${`compose-inline-status${w_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${P5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${T5}</span>
                        ${K1&&L`<span class="compose-inline-status-elapsed">${K1}</span>`}
                    </div>
                    ${P5&&L`<div class="compose-inline-status-detail">${P5}</div>`}
                </div>
            `}
            ${G_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${G_}</div>
            `}
            <div
                class=${`compose-input-wrapper${v1?" drag-active":""}`}
                onDragEnter=${Y0}
                onDragOver=${W0}
                onDragLeave=${V0}
                onDrop=${j0}
            >
                <div class="compose-input-main">
                    ${_5&&L`
                        <div class="compose-file-refs">
                            ${B.map((F)=>{return L`
                                    <${h_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>V?.(F)}
                                    />
                                `})}
                            ${K.map((F)=>{let f=F.split("/").pop()||F;return L`
                                    <${h_}
                                        prefix="compose"
                                        label=${f}
                                        title=${F}
                                        onClick=${()=>x?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${J1.map((F,f)=>{let i=F?.name||`attachment-${f+1}`;return L`
                                    <${h_}
                                        key=${i+f}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S1(f)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${__}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof q0==="function"&&L`
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
                        value=${j?j1:m0}
                        onInput=${C5}
                        onKeyDown=${w}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${w0&&U0.length>0&&L`
                        <div class="slash-autocomplete" ref=${$4}>
                            ${U0.map((F,f)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${f===x0?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),b_(F)}}
                                    onMouseEnter=${()=>S0(f)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${a&&Q1.length>0&&L`
                        <div class="slash-autocomplete" ref=${l1}>
                            ${Q1.map((F,f)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${f===P1?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),v_(F)}}
                                    onMouseEnter=${()=>E1(f)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${S_} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${O1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!O1&&y.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!O1&&y.map((F,f)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${L0===f?" active":""}${E===F?" current-model":""}`}
                                        onClick=${()=>{Z4(F)}}
                                        disabled=${y0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{J4()}}
                                    disabled=${y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&L`
                        <div class="compose-model-popup" ref=${y4} tabIndex="-1" onKeyDown=${I}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return f2(I1,z0)})()}
                                    </div>
                                `}
                                ${!J_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${J_&&U1.map((F,f)=>{let i=Boolean(F.archived_at),I0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!i&&typeof o0==="function",z1=u8(F,{currentChatJid:z0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${i?" archived":""}${u0===f?" active":""}`}
                                                onClick=${()=>{if(i){z4(F.chat_jid);return}F4(F.chat_jid)}}
                                                disabled=${i?!A_:!O_}
                                                title=${i?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${z1}
                                            </button>
                                            ${I0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(T1)=>{T1.stopPropagation(),Q0(!1),o0(F.chat_jid)}}
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
                            ${(n1||e1||D_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${n1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${V1.findIndex((F)=>F.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{j5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${e1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${V1.findIndex((F)=>F.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(F)=>{H4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${i_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${D_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${V1.findIndex((F)=>F.key==="action:delete")===u0?" active":""}`}
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
                    ${!j&&E&&L`
                    <div class="compose-meta-row">
                        ${!j&&E&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${t4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${$5}
                                    aria-label="Open model picker"
                                    onClick=${B_}
                                    disabled=${y0}
                                >
                                    ${y0?"Switching…":F1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y0&&E_&&L`
                                        <span class="compose-model-usage-hint" title=${$5}>
                                            ${E_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&L`
                            <${TY} usage=${A} onCompact=${O4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j4&&L`
                        ${I1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${I1.chat_jid||z0}
                                aria-label=${`Manage sessions for @${I1.agent_name}`}
                                onClick=${k1}
                            >@${I1.agent_name}</button>
                        `}
                        <button
                            ref=${w1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${k1}
                            title=${J0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${J0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&L`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Q}
                                onChange=${(F)=>Y?.(F.currentTarget.value)}
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
                        ${j?L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${R4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${m1}
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
                    ${e4&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${d_?" active":""}`}
                            onClick=${o}
                            title=${x1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${S&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${S}`}
                                type="button"
                                disabled=${K.includes(S)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${r} />
                        </label>
                    `}
                    ${(A0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${A0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${A0}" title=${t1}>
                                    ${H_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{I_()}}
                                    disabled=${!a1}
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
    `}var G$="piclaw_theme",g8="piclaw_tint",p2="piclaw_chat_themes",l5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},c2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},m2={default:{label:"Default",mode:"auto",light:l5,dark:c2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},SY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],n4={theme:"default",tint:null},l2="light",q$=!1;function m8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function z5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function yY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),N=parseInt(Z[3],10);if(![Y,q,N].every((G)=>Number.isFinite(G)))return null;let K=`#${[Y,q,N].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:N,hex:K}}function n2(_){return z5(_)||yY(_)}function c5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function N$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function RY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function wY(_){return RY(_)>0.4?"#000000":"#ffffff"}function d2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function K$(_){return m2[_]||m2.default}function uY(_){return _.mode==="auto"?d2():_.mode}function i2(_,$){let j=K$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||l5}function r2(_,$,j){let Q=n2($);if(!Q)return _;let Z=z5(_.bgPrimary),Y=z5(_.bgSecondary),q=z5(_.bgHover),N=z5(_.borderColor);if(!Z||!Y||!q||!N)return _;let G=z5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:c5(Z,Q,0.08),bgSecondary:c5(Y,Q,0.12),bgHover:c5(q,Q,0.16),borderColor:c5(N,Q,0.08),accent:Q.hex,accentHover:G?c5(Q,G,0.18):Q.hex}}function fY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=n2(Q),Y=Z?N$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?N$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=Z?N$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?wY(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":N,"--accent-contrast-text":K,"--danger-color":_.danger||l5.danger,"--success-color":_.success||l5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,B])=>{if(B)j.style.setProperty(X,B)})}function vY(){if(typeof document>"u")return;let _=document.documentElement;SY.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function h2(_){let $=m8(n4?.theme||"default"),j=n4?.tint?String(n4.tint).trim():null,Q=i2($,_);if($==="default"&&j)Q=r2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?c2.bgPrimary:l5.bgPrimary}function bY(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=F5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",h2("light"));let Z=F5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",h2("dark"));let Y=F5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=F5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let N=F5("apple-mobile-web-app-status-bar-style");if(N)N.setAttribute("content",$==="dark"?"black-translucent":"default")}function gY(){if(typeof window>"u")return;let _={...n4,mode:l2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function o2(){try{let _=W_(p2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function mY(_,$,j){let Q=o2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};Y1(p2,JSON.stringify(Q))}function hY(_){if(!_)return null;return o2()[_]||null}function s2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function X$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=m8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=K$(j),Y=uY(Z),q=i2(j,Y);n4={theme:j,tint:Q},l2=Y;let N=document.documentElement;N.dataset.theme=Y,N.dataset.colorTheme=j,N.dataset.tint=Q?String(Q):"",N.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=r2(q,Q,Y);if(j==="default"&&!Q)vY();else fY(K,Y);if(bY(K.bgPrimary,Y),gY(),$.persist!==!1)if(Y1(G$,j),Q)Y1(g8,Q);else Y1(g8,"")}function b8(){if(K$(n4.theme).mode!=="auto")return;X$(n4,{persist:!1})}function a2(){if(typeof window>"u")return()=>{};let _=s2(),$=hY(_),j=$?m8($.theme||"default"):m8(W_(G$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=W_(g8);return Z?Z.trim():null})();if(X$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!q$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",b8);else if(Z.addListener)Z.addListener(b8);return q$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",b8);else if(Z.removeListener)Z.removeListener(b8);q$=!1}}return()=>{}}function t2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||s2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(mY($,j||"default",Q),X$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")Y1(G$,j||"default"),Y1(g8,Q||"")}function e2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return d2()}var h8=/#(\w+)/g,pY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),cY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),lY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),nY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},dY=new Set(["http:","https:","mailto:",""]);function B$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function d4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!dY.has(Q.protocol))return null;return Q.href}catch{return null}}function _7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let N=q.tagName.toLowerCase();if(!cY.has(N)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=nY[N]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),B=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(K.has(X)||lY.has(X)){if(X==="href"){let V=d4(B);if(!V)q.removeAttribute(G.name);else if(q.setAttribute(G.name,V),N==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let V=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(B):B,O=d4(V,{allowDataImage:N==="img"});if(!O)q.removeAttribute(G.name);else q.setAttribute(G.name,O)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function $7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function p8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=$7(j);if(Z===j)break;j=Z}return j}function iY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let N of j){if(!Y&&N.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&N.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(N);else Z.push(N)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function rY(_){if(!_)return _;return p8(_,5)}function oY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function sY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function aY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=rY(Y);return`<div class="mermaid-container" data-mermaid="${oY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function j7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var tY={span:new Set(["title","class","lang","dir"])};function eY(_,$){let j=tY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let N=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${B$(N)}"`)}return Q.join("")}function Q7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,N=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=N.split(/\s+/,1),G=K.toLowerCase();if(!G||!pY.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=N.slice(K.length).trim(),B=eY(G,X);return`<${G}${B}>`})}function Z7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function Y7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function _q(_){if(!window.katex)return _;let $=(q)=>$7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let N=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_BLOCK_${X}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=N.length;return N.push(G),`@@CODE_INLINE_${X}@@`}),{html:K,blocks:N}},Q=(q,N)=>{if(!N.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let X=Number(G);return N[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,N,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${N}${G}`}catch(G){return`<span class="math-error" title="${B$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,N,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${N}${G}`}catch(G){return`${N}<span class="math-error" title="${B$(G.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function $q(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(h8.lastIndex=0,!h8.test(q))continue;h8.lastIndex=0;let N=Y.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let K=q.split(h8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((X,B)=>{if(B%2===1){let V=$.createElement("a");V.setAttribute("href","#"),V.className="hashtag",V.setAttribute("data-hashtag",X),V.textContent=`#${X}`,G.appendChild(V)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function jq(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function Qq(_){let $=jq(_||""),{text:j,blocks:Q}=iY($),Z=p8(j,2),q=j7(Z).replace(/</g,"&lt;");return{safeHtml:Q7(q),mermaidBlocks:Q}}function L_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=Qq(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=Z7(Y),Y=Y7(Y),Y=_q(Y),Y=$q(Y),Y=aY(Y,Z),Y=_7(Y,j),Y}function n5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=p8($,2),Z=j7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=Q7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=Z7(q),q=Y7(q),q=_7(q),q}function Zq(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[G,X]=K.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let N=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],X=q[K],B=q[K+1],V=X.x-G.x,O=X.y-G.y,E=B.x-X.x,k=B.y-X.y,D=Math.sqrt(V*V+O*O),J=Math.sqrt(E*E+k*k),A=Math.min($,D/2,J/2);if(A<0.5){N.push(`L ${X.x},${X.y}`);continue}let M=X.x-V/D*A,d=X.y-O/D*A,h=X.x+E/J*A,o=X.y+k/J*A,R=V*k-O*E>0?1:0;N.push(`L ${M},${d}`),N.push(`A ${A},${A} 0 0 ${R} ${h},${o}`)}return N.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${N.join(" ")}"${Y}/>`})}async function G4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=e2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let N=q.dataset.mermaid,K=sY(N||""),G=p8(K,2),X=await $(G,{...Z,transparent:!0});X=Zq(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${N.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function q7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function N7(_){return String(_||"").trim()||"web:default"}function G7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function K7(_){if(!_)return!1;return _.status!=="running"}function X7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function B7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=P(null),Y=P(null),q=_?.thinking?n5(_.thinking):"",N=_?.answer?L_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)G4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&N)G4(Y.current).catch(()=>{})},[N]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),B=G7(_),V=K7(_),O=!K&&G,E=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${E}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&L`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&L`<div class="btw-block btw-error">${_.error}</div>`}
            ${X&&L`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${B&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:N}}
                    ></div>
                </div>
            `}

            ${V&&L`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&L`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!O}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function Yq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function qq(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function T4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function P0(_){return typeof _==="string"&&_.trim()?_.trim():null}function W7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var L7="__PICLAW_WIDGET_HOST__:";function V7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function V$(_,$){if(!_||_.type!=="generated_widget")return null;let j=Yq(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:W7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function U7(_){if(!_||typeof _!=="object")return null;let $=qq(_),j=P0(_?.widget_id)||P0(_?.widgetId)||P0(_?.tool_call_id)||P0(_?.toolCallId),Q=P0(_?.tool_call_id)||P0(_?.toolCallId),Z=P0(_?.turn_id)||P0(_?.turnId),Y=P0(_?.title)||P0(_?.name)||"Generated widget",q=P0(_?.subtitle)||"",N=P0(_?.description)||q,K=P0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:N,originPostId:T4(_?.origin_post_id)??T4(_?.originPostId),originChatJid:P0(_?.origin_chat_jid)||P0(_?.originChatJid)||P0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:W7(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:T4(_?.width),height:T4(_?.height),error:P0(_?.error)}}function F7(_){return V$(_,null)!==null}function U_(_){let $=P0(_?.toolCallId)||P0(_?.tool_call_id);if($)return $;let j=P0(_?.widgetId)||P0(_?.widget_id);if(j)return j;let Q=T4(_?.originPostId)??T4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function z7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function H7(_){return z7(_)?"allow-downloads allow-scripts":"allow-downloads"}function c8(_){return{title:P0(_?.title)||"Generated widget",widgetId:P0(_?.widgetId)||P0(_?.widget_id),toolCallId:P0(_?.toolCallId)||P0(_?.tool_call_id),turnId:P0(_?.turnId)||P0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:P0(_?.status)||"final"}}function l8(_){return{...c8(_),subtitle:P0(_?.subtitle)||"",description:P0(_?.description)||"",error:P0(_?.error)||null,width:T4(_?.width),height:T4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function n8(_){return`${L7}${JSON.stringify(l8(_))}`}function J7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=P0(_.text)||P0(_.content)||P0(_.message)||P0(_.prompt)||P0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=P0(j.text)||P0(j.content)||P0(j.message)||P0(j.prompt)||P0(j.value);if(Q)return Q}return null}function O7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function A7(_){let $=P0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return P0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function Nq(_){let $=c8(_);return`<script>
(function () {
  const meta = ${V7($)};
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

  const windowNamePrefix = ${V7(L7)};
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
</script>`}function D7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let N=z7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",N?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=N?Nq(_):"";return`<!doctype html>
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
</html>`}function E7({widget:_,onClose:$,onWidgetEvent:j}){let Q=P(null),Z=P(!1),Y=R0(()=>D7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let A=(e)=>{let R=n8(_),S=e==="widget.init"?c8(_):l8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:e,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:S},"*")}catch{}},M=()=>{A("widget.init"),A("widget.update")},d=()=>{Z.current=!0,M()};J.addEventListener("load",d);let o=[0,40,120,300,800].map((e)=>setTimeout(M,e));return()=>{J.removeEventListener("load",d),o.forEach((e)=>clearTimeout(e))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let A=n8(_),M=l8(_);try{J.name=A}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(A)=>{let M=A?.data;if(!M||M.__piclawGeneratedWidget!==!0)return;let d=Q.current,h=U_(_),o=U_({widgetId:M.widgetId,toolCallId:M.toolCallId});if(o&&h&&o!==h)return;if(!o&&d?.contentWindow&&A.source!==d.contentWindow)return;j?.(M,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let N=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",B=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",V=X==="live"?`Live widget • ${B.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,k=A7(_),D=H7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${V} • ${N.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(G||O)&&L`
                            <div class="floating-widget-subtitle">${G||O}</div>
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
                    ${E?L`<div class="floating-widget-empty">${k}</div>`:L`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${K}
                                name=${n8(_)}
                                sandbox=${D}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var k7="PiClaw";function W$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,N=Y[q],K=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,B=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:N,image:X||(B?"/static/icon-192.png":null)}}function M7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function I7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function T7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",N=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(N||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var Gq=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function L$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:N=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:X,onPanelToggle:B,showCorePanels:V=!0,showExtensionPanels:O=!0}){let D=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let x0=a,S0=x0?x0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:x0,totalLines:S0,fullText:x0}}let B0=a.text||"",U0=a.fullText||a.full_text||B0,N0=Number.isFinite(a.totalLines)?a.totalLines:U0?U0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B0,totalLines:N0,fullText:U0}},J=160,A=(a)=>String(a||"").replace(/<\/?internal>/gi,""),M=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},d=(a,B0,U0)=>{let N0=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(U0)?U0:0,visibleLines:0};let x0=N0.split(`
`),S0=x0.length>B0?x0.slice(0,B0).join(`
`):N0,w0=Number.isFinite(U0)?U0:x0.reduce((c0,O0)=>c0+M(O0),0),k0=S0?S0.split(`
`).reduce((c0,O0)=>c0+M(O0),0):0,y0=Math.max(w0-k0,0);return{text:S0,omitted:y0,totalLines:w0,visibleLines:k0}},h=D(j),o=D(Q),e=D($),R=Boolean(h.text)||h.totalLines>0,S=Boolean(o.text)||o.totalLines>0,H=Boolean(e.fullText?.trim()||e.text?.trim()),x=Boolean(_||H||R||S||Z||Y),p=Array.isArray(q)&&q.length>0;if((!V||!x)&&(!O||!p))return null;let[Z0,n]=m(new Set),[$0,_0]=m(null),[q0,G0]=m(()=>Date.now()),X0=(a)=>n((B0)=>{let U0=new Set(B0),N0=!U0.has(a);if(N0)U0.add(a);else U0.delete(a);if(typeof B==="function")B(a,N0);return U0});g(()=>{n(new Set),_0(null)},[G]);let z0=N4(_);g(()=>{if(!z0)return;G0(Date.now());let a=setInterval(()=>G0(Date.now()),1000);return()=>clearInterval(a)},[z0,_?.started_at,_?.startedAt]);let A0=_?.turn_id||G,D0=T7(A0),n0=X?"turn-dot turn-dot-queued":"turn-dot",C0=(a)=>a,M0=Boolean(_?.last_activity||_?.lastActivity),d0=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":D0,i0=Y?.kind||"info",v0=d0(i0),o0=d0(_?.kind||(z0?"warning":"info")),b0="",e0=_?.title,H0=_?.status;if(_?.type==="plan")b0=e0?`Planning: ${e0}`:"Planning...";else if(_?.type==="tool_call")b0=e0?`Running: ${e0}`:"Running tool...";else if(_?.type==="tool_status")b0=e0?`${e0}: ${H0||"Working..."}`:H0||"Working...";else if(_?.type==="error")b0=e0||"Agent error";else b0=e0||H0||"Working...";if(M0)b0="Last activity just now";let m0=({panelTitle:a,text:B0,fullText:U0,totalLines:N0,maxLines:x0,titleClass:S0,panelKey:w0})=>{let k0=Z0.has(w0),y0=U0||B0||"",c0=w0==="thought"||w0==="draft"?A(y0):y0,O0=typeof x0==="number",f0=k0&&O0,J0=O0?d(c0,x0,N0):{text:c0||"",omitted:0,totalLines:Number.isFinite(N0)?N0:0};if(!c0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let Q0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,y=O0?`--agent-thinking-collapsed-lines: ${x0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${k0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${D0?`--turn-color: ${D0};`:""}
            >
                <div class="agent-thinking-title ${S0||""}">
                    ${D0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${a}
                    ${f0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>X0(w0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Q0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:n5(c0)}}
                />
                ${!k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(w0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${k0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(w0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},_1=Z?.tool_call?.title,j1=_1?`Awaiting approval: ${_1}`:"Awaiting approval",j_=z0?v8(_,q0):null,J1=(a,B0,U0=null)=>{let N0=f8(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${B0?`--turn-color: ${B0};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${B0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${N0}</span>
                    ${U0&&L`<span class="agent-status-elapsed">${U0}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `},a0=(a,B0,U0,N0,x0,S0,w0,k0=8,y0=8)=>{let c0=Math.max(x0-N0,0.000000001),O0=Math.max(B0-k0*2,1),f0=Math.max(U0-y0*2,1),J0=Math.max(w0-S0,1),Q0=w0===S0?B0/2:k0+(a.run-S0)/J0*O0,y=y0+(f0-(a.value-N0)/c0*f0);return{x:Q0,y}},v1=(a,B0,U0,N0,x0,S0,w0,k0=8,y0=8)=>{if(!Array.isArray(a)||a.length===0)return"";return a.map((c0,O0)=>{let{x:f0,y:J0}=a0(c0,B0,U0,N0,x0,S0,w0,k0,y0);return`${O0===0?"M":"L"} ${f0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},D1=(a,B0="")=>{if(!Number.isFinite(a))return"—";return`${Math.abs(a)>=100?a.toFixed(0):a.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${B0}`},Q1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],g0=(a,B0)=>{let U0=Q1;if(!Array.isArray(U0)||U0.length===0)return"var(--accent-color)";if(U0.length===1||!Number.isFinite(B0)||B0<=1)return U0[0];let x0=Math.max(0,Math.min(Number.isFinite(a)?a:0,B0-1))/Math.max(1,B0-1)*(U0.length-1),S0=Math.floor(x0),w0=Math.min(U0.length-1,S0+1),k0=x0-S0,y0=U0[S0],c0=U0[w0];if(!c0||S0===w0||k0<=0.001)return y0;if(k0>=0.999)return c0;let O0=Math.round((1-k0)*1000)/10,f0=Math.round(k0*1000)/10;return`color-mix(in oklab, ${y0} ${O0}%, ${c0} ${f0}%)`},P1=(a,B0="autoresearch")=>{let U0=Array.isArray(a)?a.map((Q0)=>({...Q0,points:Array.isArray(Q0?.points)?Q0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((Q0)=>Q0.points.length>0):[],N0=U0.map((Q0,y)=>({...Q0,color:g0(y,U0.length)}));if(N0.length===0)return null;let x0=320,S0=120,w0=N0.flatMap((Q0)=>Q0.points),k0=w0.map((Q0)=>Q0.value),y0=w0.map((Q0)=>Q0.run),c0=Math.min(...k0),O0=Math.max(...k0),f0=Math.min(...y0),J0=Math.max(...y0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${N0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${x0} ${S0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${N0.map((Q0)=>{let y=Q0?.key||Q0?.label||"series",t=$0?.panelKey===B0&&$0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${v1(Q0.points,x0,S0,c0,O0,f0,J0)}
                                        style=${`--agent-series-color: ${Q0.color};`}
                                        onMouseEnter=${()=>_0({panelKey:B0,seriesKey:y})}
                                        onMouseLeave=${()=>_0((L0)=>L0?.panelKey===B0&&L0?.seriesKey===y?null:L0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${N0.flatMap((Q0)=>{let y=typeof Q0?.unit==="string"?Q0.unit:"",t=Q0?.key||Q0?.label||"series";return Q0.points.map((L0,E0)=>{let u0=a0(L0,x0,S0,c0,O0,f0,J0);return L`
                                    <button
                                        key=${`${t}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Q0.color}; left:${u0.x/x0*100}%; top:${u0.y/S0*100}%;`}
                                        onMouseEnter=${()=>_0({panelKey:B0,seriesKey:t,run:L0.run,value:L0.value,unit:y})}
                                        onMouseLeave=${()=>_0((Z1)=>Z1?.panelKey===B0?null:Z1)}
                                        onFocus=${()=>_0({panelKey:B0,seriesKey:t,run:L0.run,value:L0.value,unit:y})}
                                        onBlur=${()=>_0((Z1)=>Z1?.panelKey===B0?null:Z1)}
                                        aria-label=${`${Q0?.label||"Series"} ${D1(L0.value,y)} at run ${L0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${N0.map((Q0)=>{let y=Q0.points[Q0.points.length-1]?.value,t=typeof Q0?.unit==="string"?Q0.unit:"",L0=Q0?.key||Q0?.label||"series",E0=$0?.panelKey===B0&&$0?.seriesKey===L0?$0:null,u0=E0&&Number.isFinite(E0.value)?E0.value:y,Z1=E0&&typeof E0.unit==="string"?E0.unit:t,O1=E0&&Number.isFinite(E0.run)?E0.run:null;return L`
                            <div key=${`${L0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${Q0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Q0.color};`}></span>
                                <span class="agent-series-legend-label">${Q0?.label||"Series"}</span>
                                ${O1!==null&&L`<span class="agent-series-legend-run">run ${O1}</span>`}
                                <span class="agent-series-legend-value">${D1(u0,Z1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},E1=(a)=>{if(!a)return null;let B0=typeof a?.key==="string"?a.key:`panel-${Math.random()}`,U0=Z0.has(B0),N0=a?.title||"Extension status",x0=a?.collapsed_text||"",S0=String(a?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),w0=d0(a?.state==="completed"?"success":a?.state==="failed"?"error":a?.state==="stopped"?"warning":"info"),k0=typeof a?.detail_markdown==="string"?a.detail_markdown.trim():"",y0=typeof a?.last_run_text==="string"?a.last_run_text.trim():"",c0=typeof a?.tmux_command==="string"?a.tmux_command.trim():"",O0=Array.isArray(a?.series)?a.series:[],f0=Array.isArray(a?.actions)?a.actions:[],J0=Boolean(k0||c0),Q0=Boolean(k0||O0.length>0||c0),y=[N0,x0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${U0?"true":"false"}
                style=${w0?`--turn-color: ${w0};`:""}
                title=${!U0?y||N0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Q0?X0(B0):null}
                    >
                        ${w0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${N0}</span>
                        ${x0&&L`<span class="agent-thinking-title-meta">${x0}</span>`}
                    </button>
                    ${(f0.length>0||Q0&&!U0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${f0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${f0.map((t)=>{let L0=`${B0}:${t?.key||""}`,E0=N?.has?.(L0);return L`
                                            <button
                                                key=${L0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(a,t)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Q0&&!U0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${N0}`}
                                    title="Expand details"
                                    onClick=${()=>X0(B0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Q0&&U0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${N0}`}
                        title="Collapse details"
                        onClick=${()=>X0(B0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${U0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${k0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:n5(k0)}}
                                    />
                                `}
                                ${c0&&L`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${c0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(a,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${Gq}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${P1(O0,B0)}
                                    ${y0&&L`<div class="agent-series-chart-note">${y0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${V&&Y&&J1(Y,v0)}
            ${O&&Array.isArray(q)&&q.map((a)=>E1(a))}
            ${V&&_?.type==="intent"&&J1(_,o0,j_)}
            ${V&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${D0?`--turn-color: ${D0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${j1}</span>
                </div>
            `}
            ${V&&R&&m0({panelTitle:C0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${V&&S&&m0({panelTitle:C0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${V&&H&&m0({panelTitle:C0("Draft"),text:e.text,fullText:e.fullText,totalLines:e.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${V&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${M0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${D0?`--turn-color: ${D0};`:""}>
                    ${D0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!M0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${b0}</span>
                </div>
            `}
        </div>
    `}function P7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",N=Q?.kind||"other",K=Q?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,X=K.diff||null,B=K.fileName||K.path||null,V=Q?.description||K.description||K.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((M)=>M?.path).filter((M)=>Boolean(M)),k=Array.from(new Set([B,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let D=async(M)=>{try{await I8(j,M,Y||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await c6(q,`Auto-approved: ${q}`),await I8(j,"approved",Y||null),$()}catch(M){console.error("Failed to add to whitelist:",M)}},A=Z&&Z.length>0;return L`
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
                ${(V||G||X||k.length>0)&&L`
                    <div class="agent-request-body">
                        ${V&&L`
                            <div class="agent-request-description">${V}</div>
                        `}
                        ${k.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${k.map((M,d)=>L`<li key=${d}>${M}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&L`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${A?Z.map((M)=>L`
                            <button 
                                key=${M.optionId||M.id||String(M)}
                                class="agent-request-btn ${M.kind==="allow_once"||M.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(M.optionId||M.id||M)}
                            >
                                ${M.name||M.label||M.optionId||M.id||String(M)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function C7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${N}`}function d5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function x_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function i4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Kq=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),Xq=new Set(["text/markdown"]),Bq=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Vq=new Set(["application/vnd.jgraph.mxfile"]);function i5(_){return typeof _==="string"?_.trim().toLowerCase():""}function Wq(_){let $=i5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function Lq(_){let $=i5(_);return!!$&&$.endsWith(".pdf")}function Uq(_){let $=i5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function r5(_,$){let j=i5(_);if(Wq($)||Vq.has(j))return"drawio";if(Lq($)||j==="application/pdf")return"pdf";if(Uq($)||Bq.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(Kq.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function x7(_){let $=i5(_);return Xq.has($)}function S7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function Fq(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function zq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function y7(_){return Fq(_)||zq(_)}function d8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function Hq(_,$){let j=Math.max(d8(_),d8($)),Q=Math.min(d8(_),d8($));return(j+0.05)/(Q+0.05)}function Jq(_,$,j="#ffffff"){let Q=y7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let N=y7(q);if(!N)continue;let K=Hq(Q,N);if(K>Y)Z=q,Y=K}return Z}function U$(){let _=getComputedStyle(document.documentElement),$=(E,k)=>{for(let D of E){let J=_.getPropertyValue(D).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),N=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),B=$(["--border-color","--color-border"],"#eff3f4"),V=$(["--font-family"],"system-ui, sans-serif"),O=Jq(N,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:N,good:K,warning:G,attention:X,border:B,fontFamily:V,buttonTextColor:O}}function R7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:N,border:K,fontFamily:G}=U$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:N,subtle:N}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Oq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),w7=!1,i8=null,u7=!1;function F$(_){_.querySelector(".adaptive-card-notice")?.remove()}function Aq(_,$,j="error"){F$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function Dq(_,$=(j)=>L_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Eq(_=($)=>L_($,null)){return($,j)=>{try{let Q=Dq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function kq(_){if(u7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Eq(),u7=!0}async function Mq(){if(w7)return;if(i8)return i8;return i8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{w7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),i8}function Iq(){return globalThis.AdaptiveCards}function Tq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Pq(_){return Oq.has(_)}function H$(_){if(!Array.isArray(_))return[];return _.filter(Tq)}function Cq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function z$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>z$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${z$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function xq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return z$($);return typeof $==="string"?$:String($)}function Sq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((N)=>Q(N));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=xq(q.type,j[q.id],q);for(let[N,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[N]=Q(K);return q};return Q(_)}function yq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Rq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function wq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=Rq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function f7(_,$,j){if(!Pq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Mq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Iq();kq(Q);let Z=new Q.AdaptiveCard,Y=U$();Z.hostConfig=new Q.HostConfig(R7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,N=$.state==="active"?$.payload:Sq($.payload,q);Z.parse(N),Z.onExecuteAction=(X)=>{let B=Cq(X);if(j?.onAction)F$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(B)).catch((V)=>{console.error("[adaptive-card] Action failed:",V);let O=V instanceof Error?V.message:String(V||"Action failed.");Aq(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",B)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=wq($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let B=document.createElement("span");if(B.className="adaptive-card-status-label",B.textContent=G.label,X.appendChild(B),G.detail){let V=document.createElement("span");V.className="adaptive-card-status-detail",V.textContent=G.detail,X.appendChild(V)}_.appendChild(X)}if(F$(_),_.appendChild(K),G)yq(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function o5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${o5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function v7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:o5(j)})).filter(($)=>$.value)}function uq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function J$(_){if(!Array.isArray(_))return[];return _.filter(uq)}function b7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=o5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=v7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function g7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=v7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):o5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function H5({children:_,className:$=""}){let j=P(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{I4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),v5(()=>{let Q=j.current;if(!Q)return;return I4(_,Q),()=>{I4(null,Q)}},[_]),null}function fq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?x_($):null},{label:"Added",value:_?.created_at?i4(_.created_at):null}].filter((Q)=>Q.value)}function vq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=C_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function m7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=R0(()=>r5($?.content_type,Q),[$?.content_type,Q]),Y=S7(Z),q=R0(()=>x7($?.content_type),[$?.content_type]),[N,K]=m(Z==="text"),[G,X]=m(""),[B,V]=m(null),O=P(null),E=R0(()=>fq($),[$]),k=R0(()=>vq(_,Q,Z),[_,Q,Z]),D=R0(()=>{if(!q||!G)return"";return L_(G)},[q,G]);return g(()=>{let J=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!D)return;G4(O.current);return},[D]),g(()=>{let J=!1;async function A(){if(Z!=="text"){K(!1),V(null);return}K(!0),V(null);try{let M=await i6(_);if(!J)X(M)}catch{if(!J)V("Failed to load text preview.")}finally{if(!J)K(!1)}}return A(),()=>{J=!0}},[_,Z]),L`
        <${H5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${k&&L`
                                <a
                                    href=${k}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${C_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${N&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!N&&B&&L`<div class="attachment-preview-state">${B}</div>`}
                        ${!N&&!B&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${C_(_)} alt=${Q} />
                        `}
                        ${!N&&!B&&(Z==="pdf"||Z==="office"||Z==="drawio")&&k&&L`
                            <iframe class="attachment-preview-frame" src=${k} title=${Q}></iframe>
                        `}
                        ${!N&&!B&&Z==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!N&&!B&&Z==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:D}}
                            />
                        `}
                        ${!N&&!B&&Z==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!N&&!B&&Z==="unsupported"&&L`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${E.map((J)=>L`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${H5}>
    `}function h7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${H5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${H5}>
    `}function bq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{W5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?x_(Y):"",K=r5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${C_(_)} download=${Z} class="file-attachment-main">
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
                        ${q&&L`<span class="file-size">${q}</span>`}
                        ${j.content_type&&L`<span class="file-size">${j.content_type}</span>`}
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
    `}function gq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;W5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?C_(j):null,K=r5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${h_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${h_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&L`
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
    `}function r8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?i4(Q):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&L`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function mq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?x_(_.size):"",Z=_.mime_type||"",Y=cq(Z),q=d4(_.uri);return L`
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
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&L`<span>${Z}</span>`}
                    ${Q&&L`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function hq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&L`
                ${Z&&L`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(B)=>B.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(K),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function pq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=V$(_,$),Z=F7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",N=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return L`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${N&&L`<div class="generated-widget-launch-description">${N}</div>`}
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
    `}function cq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function lq({preview:_}){let $=d4(_.url),j=d4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function nq(_,$){return typeof _==="string"?_:""}var dq=1800,iq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,rq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,oq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function sq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function aq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let N=q||"idle";if(Y.dataset.copyState=N,N==="success")Y.innerHTML=rq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(N==="error")Y.innerHTML=oq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=iq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",Z(N,"idle"),q.appendChild(N);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let B=Y.querySelector("code")?.textContent||"",V=await sq(B);Z(N,V?"success":"error");let O=j.get(N);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(N,"idle"),j.delete(N)},dq);j.set(N,E)};N.addEventListener("click",K),Q.push(()=>{N.removeEventListener("click",K);let G=j.get(N);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function tq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function eq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let B=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(B)Z.push(B[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function _N(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),B=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(B){let V=B[1],O=(B[2]||"").trim()||V;Z.push({id:V,label:O,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),N=j.slice(Y),K=[...q,...N].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function $N(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jN(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map($N).sort((X,B)=>B.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),N=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=N.nextNode())K.push(G);for(let X of K){let B=X.nodeValue;if(!B||!Z.test(B)){Z.lastIndex=0;continue}Z.lastIndex=0;let V=X.parentElement;if(V&&V.closest("code, pre, script, style"))continue;let O=B.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let D=q.createElement("mark");D.className="search-highlight-term",D.textContent=k,E.appendChild(D)}else E.appendChild(q.createTextNode(k));X.parentNode.replaceChild(E,X)}return q.body.innerHTML}function p7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:N,userAvatarUrl:K,userAvatarBackground:G,onDelete:X,isThreadReply:B,isThreadPrev:V,isThreadNext:O,isRemoving:E,highlightQuery:k,onFileRef:D,onOpenWidget:J}){let[A,M]=m(null),d=P(null),h=_.data,o=h.type==="agent_response",e=N||"You",R=o?Y||k7:e,S=o?W$(Y,q,!0):W$(e,K),H=typeof G==="string"?G.trim().toLowerCase():"",x=!o&&S.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(S.image),Z0=`background-color: ${x||p?"transparent":S.color}`,n=h.content_meta,$0=Boolean(n?.truncated),_0=Boolean(n?.preview),q0=$0&&!_0,G0=$0?{originalLength:Number.isFinite(n?.original_length)?n.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(n?.max_length)?n.max_length:0}:null,X0=h.content_blocks||[],z0=h.media_ids||[],A0=nq(h.content,h.link_previews),{content:D0,fileRefs:n0}=tq(A0),{content:C0,messageRefs:M0}=eq(D0),{content:d0,attachments:i0}=_N(C0);A0=d0;let v0=H$(X0),o0=J$(X0),b0=v0.length===1&&typeof v0[0]?.fallback_text==="string"?v0[0].fallback_text.trim():"",e0=o0.length===1?b7(o0[0]).trim():"",H0=Boolean(b0)&&A0?.trim()===b0||Boolean(e0)&&A0?.trim()===e0,m0=Boolean(A0)&&!q0&&!H0,_1=typeof k==="string"?k.trim():"",j1=R0(()=>{if(!A0||H0)return"";let y=L_(A0,j);return _1?jN(y,_1):y},[A0,H0,_1]),j_=(y,t)=>{y.stopPropagation(),M(C_(t))},[J1,a0]=m(null),v1=(y)=>{a0(y)},D1=(y)=>{y.stopPropagation(),X?.(_)},Q1=(y,t)=>{let L0=new Set;if(!y||t.length===0)return{content:y,usedIds:L0};return{content:y.replace(/attachment:([^\s)"']+)/g,(u0,Z1,O1,q1)=>{let b1=Z1.replace(/^\/+/,""),G_=t.find((K_)=>K_.name&&K_.name.toLowerCase()===b1.toLowerCase()&&!L0.has(K_.id))||t.find((K_)=>!L0.has(K_.id));if(!G_)return u0;if(L0.add(G_.id),q1.slice(Math.max(0,O1-2),O1)==="](")return`/media/${G_.id}`;return G_.name||"attachment"}),usedIds:L0}},g0=[],P1=[],E1=[],a=[],B0=[],U0=[],N0=[],x0=0;if(X0.length>0)X0.forEach((y)=>{if(y?.type==="text"&&y.annotations)N0.push(y.annotations);if(y?.type==="generated_widget")U0.push(y);else if(y?.type==="resource_link")a.push(y);else if(y?.type==="resource")B0.push(y);else if(y?.type==="file"){let t=z0[x0++];if(t)P1.push(t),E1.push({id:t,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let t=z0[x0++];if(t){let L0=typeof y?.mime_type==="string"?y.mime_type:void 0;g0.push({id:t,annotations:y?.annotations,mimeType:L0}),E1.push({id:t,name:y?.name||y?.filename||y?.title})}}});else if(z0.length>0){let y=i0.length>0;z0.forEach((t,L0)=>{let E0=i0[L0]||null;if(E1.push({id:t,name:E0?.label||null}),y)P1.push(t);else g0.push({id:t,annotations:null})})}if(i0.length>0)i0.forEach((y)=>{if(!y?.id)return;let t=E1.find((L0)=>String(L0.id)===String(y.id));if(t&&!t.name)t.name=y.label});let{content:S0,usedIds:w0}=Q1(A0,E1);A0=S0;let k0=g0.filter(({id:y})=>!w0.has(y)),y0=P1.filter((y)=>!w0.has(y)),c0=i0.length>0?i0.map((y,t)=>({id:y.id||`attachment-${t+1}`,label:y.label||`attachment-${t+1}`})):E1.map((y,t)=>({id:y.id,label:y.name||`attachment-${t+1}`})),O0=R0(()=>H$(X0),[X0]),f0=R0(()=>J$(X0),[X0]),J0=R0(()=>{return O0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[O0]);g(()=>{if(!d.current)return;return G4(d.current),aq(d.current)},[j1]);let Q0=P(null);return g(()=>{if(!Q0.current||O0.length===0)return;let y=Q0.current;y.innerHTML="";for(let t of O0){let L0=document.createElement("div");y.appendChild(L0),f7(L0,t,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let u0=d4(E0.url||"");if(!u0)throw Error("Invalid URL");window.open(u0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await p6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),L0.textContent=t.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${B?"thread-reply":""} ${V?"thread-prev":""} ${O?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${S.image?"has-image":""}" style=${Z0}>
                ${S.image?L`<img src=${S.image} alt=${R} />`:S.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${D1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${C7(_.timestamp)}</a>
                </div>
                ${q0&&G0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${d5(G0.originalLength)} chars
                            ${G0.maxLength?L` • Display limit: ${d5(G0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${_0&&G0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${d5(G0.maxLength)} of ${d5(G0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||M0.length>0||c0.length>0)&&L`
                    <div class="post-file-refs">
                        ${M0.map((y)=>{let t=(L0)=>{if(L0.preventDefault(),L0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${t}>
                                    <${h_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${n0.map((y)=>{let t=y.split("/").pop()||y;return L`
                                <${h_}
                                    prefix="post"
                                    label=${t}
                                    title=${y}
                                    onClick=${()=>D?.(y)}
                                />
                            `})}
                        ${c0.map((y)=>L`
                            <${gq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${v1}
                            />
                        `)}
                    </div>
                `}
                ${m0&&L`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:j1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let t=y.target.dataset.hashtag;if(t)j?.(t)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),M(y.target.src)}}
                    />
                `}
                ${O0.length>0&&L`
                    <div ref=${Q0} class="post-adaptive-cards" />
                `}
                ${f0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${f0.map((y,t)=>{let L0=g7(y),E0=`${y.card_id}-${t}`;return L`
                                <div key=${E0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${L0.title}</span>
                                        </div>
                                    </div>
                                    ${L0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${L0.fields.map((u0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${u0.key}: ${u0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${u0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${u0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${i4(L0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${U0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${U0.map((y,t)=>L`
                            <${pq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${t}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    ${N0.map((y,t)=>L`
                        <${r8} key=${t} annotations=${y} />
                    `)}
                `}
                ${k0.length>0&&L`
                    <div class="media-preview">
                        ${k0.map(({id:y,mimeType:t})=>{let E0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?C_(y):d6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u0)=>j_(u0,y)}
                                />
                            `})}
                    </div>
                `}
                ${k0.length>0&&L`
                    ${k0.map(({annotations:y},t)=>L`
                        ${y&&L`<${r8} key=${t} annotations=${y} />`}
                    `)}
                `}
                ${y0.length>0&&L`
                    <div class="file-attachments">
                        ${y0.map((y)=>L`
                            <${bq} key=${y} mediaId=${y} onPreview=${v1} />
                        `)}
                    </div>
                `}
                ${a.length>0&&L`
                    <div class="resource-links">
                        ${a.map((y,t)=>L`
                            <div key=${t}>
                                <${mq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${B0.length>0&&L`
                    <div class="resource-embeds">
                        ${B0.map((y,t)=>L`
                            <div key=${t}>
                                <${hq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,t)=>L`
                            <${lq} key=${t} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&L`<${h7} src=${A} onClose=${()=>M(null)} />`}
        ${J1&&L`
            <${m7}
                mediaId=${J1.mediaId}
                info=${J1.info}
                onClose=${()=>a0(null)}
            />
        `}
    `}function c7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:N,onOpenWidget:K,emptyMessage:G,timelineRef:X,agents:B,user:V,onDeletePost:O,reverse:E=!0,removingPostIds:k,searchQuery:D}){let[J,A]=m(!1),M=P(null),d=typeof IntersectionObserver<"u",h=C(async()=>{if(!j||!$||J)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,J,j]),o=C((n)=>{let{scrollTop:$0,scrollHeight:_0,clientHeight:q0}=n.target,G0=E?_0-q0-$0:$0,X0=Math.max(300,q0);if(G0<X0)h()},[E,h]);g(()=>{if(!d)return;let n=M.current,$0=X?.current;if(!n||!$0)return;let _0=300,q0=new IntersectionObserver((G0)=>{for(let X0 of G0){if(!X0.isIntersecting)continue;h()}},{root:$0,rootMargin:`${_0}px 0px ${_0}px 0px`,threshold:0});return q0.observe(n),()=>q0.disconnect()},[d,$,j,X,h]);let e=P(h);if(e.current=h,g(()=>{if(d)return;if(!X?.current)return;let{scrollTop:n,scrollHeight:$0,clientHeight:_0}=X.current,q0=E?$0-_0-n:n,G0=Math.max(300,_0);if(q0<G0)e.current?.()},[d,_,$,E,X]),g(()=>{if(!X?.current)return;if(!$||J)return;let{scrollTop:n,scrollHeight:$0,clientHeight:_0}=X.current,q0=E?$0-_0-n:n,G0=Math.max(300,_0);if($0<=_0+1||q0<G0)e.current?.()},[_,$,J,E,X]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((n,$0)=>n.id-$0.id),S=(n)=>{let $0=n?.data?.thread_id;if($0===null||$0===void 0||$0==="")return null;let _0=Number($0);return Number.isFinite(_0)?_0:null},H=new Map;for(let n=0;n<R.length;n+=1){let $0=R[n],_0=Number($0?.id),q0=S($0);if(q0!==null){let G0=H.get(q0)||{anchorIndex:-1,replyIndexes:[]};G0.replyIndexes.push(n),H.set(q0,G0)}else if(Number.isFinite(_0)){let G0=H.get(_0)||{anchorIndex:-1,replyIndexes:[]};G0.anchorIndex=n,H.set(_0,G0)}}let x=new Map;for(let[n,$0]of H.entries()){let _0=new Set;if($0.anchorIndex>=0)_0.add($0.anchorIndex);for(let q0 of $0.replyIndexes)_0.add(q0);x.set(n,Array.from(_0).sort((q0,G0)=>q0-G0))}let p=R.map((n,$0)=>{let _0=S(n);if(_0===null)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=x.get(_0);if(!q0||q0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G0=q0.indexOf($0);if(G0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G0>0,hasThreadNext:G0<q0.length-1}}),Z0=L`<div class="timeline-sentinel" ref=${M}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${X} onScroll=${o}>
            <div class="timeline-content">
                ${E?Z0:null}
                ${R.map((n,$0)=>{let _0=Boolean(n.data?.thread_id&&n.data.thread_id!==n.id),q0=k?.has?.(n.id),G0=p[$0]||{};return L`
                    <${p7}
                        key=${n.id}
                        post=${n}
                        isThreadReply=${_0}
                        isThreadPrev=${G0.hasThreadPrev}
                        isThreadNext=${G0.hasThreadNext}
                        isRemoving=${q0}
                        highlightQuery=${D}
                        agentName=${M7(n.data?.agent_id,B||{})}
                        agentAvatarUrl=${I7(n.data?.agent_id,B||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>Q?.(n)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${N}
                        onOpenWidget=${K}
                        onDelete=${O}
                    />
                `})}
                ${E?null:Z0}
            </div>
        </div>
    `}class l7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var l0=new l7;var o8=null,O$=null;function QN(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function n7(){if(O$)return Promise.resolve(O$);if(!o8)o8=import(QN()).then((_)=>{return O$=_,_}).catch((_)=>{throw o8=null,_});return o8}class d7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await n7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var A$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new d7(_,$)}};function D$(){n7().catch(()=>{})}var r4="piclaw://terminal";var ZN={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},YN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},s8=null,E$=null;function qN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function NN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!qN(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function GN(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!s8)s8=NN(()=>Promise.resolve($.init?.())).catch((j)=>{throw s8=null,j});return await s8,$}async function KN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!E$)E$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await E$}async function XN(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function BN(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function VN(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function K4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function WN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function i7(){let _=VN(),$=_?YN:ZN,j=K4("--bg-primary",_?"#000000":"#ffffff"),Q=K4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=K4("--text-secondary",_?"#71767b":"#536471"),Y=K4("--accent-color","#1d9bf0"),q=K4("--danger-color",_?"#ff7b72":"#cf222e"),N=K4("--success-color",_?"#7ee787":"#1a7f37"),K=K4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=K4("--border-color",_?"#2f3336":"#eff3f4"),X=K4("--accent-soft-strong",WN(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:K,red:q,green:N,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class k${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await GN();if(await KN(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:i7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=i7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await XN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(BN($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var M$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k$(_,$)}},I$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new k$(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function a8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function r7(_,$={}){if(X4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:LN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function T$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function P$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function C$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function x$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function B4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function o7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function s7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,N]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(N===null||N===void 0||N==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(N))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function LN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function UN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function a7(_,$={}){if(X4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:UN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function s5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function FN(_){try{return JSON.parse(_)}catch{return null}}function zN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function HN(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class S${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=HN($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||FN;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=zN(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var a5=()=>{throw Error("Operation requires compiling with --exportRuntime")},JN=typeof BigUint64Array<"u",t5=Symbol();var ON=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function t7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return ON.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function e7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return t7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,N,K){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${N}:${K}`)},Q.trace=Q.trace||function(Y,q,...N){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${N.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function _9(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||a5,q=j.__pin||a5,N=j.__unpin||a5,K=j.__collect||a5,G=j.__rtti_base,X=G?(H)=>H[G>>>2]:a5;_.__new=Y,_.__pin=q,_.__unpin=N,_.__collect=K;function B(H){let x=new Uint32Array(Q.buffer);if((H>>>=0)>=X(x))throw Error(`invalid id: ${H}`);return x[(G+4>>>2)+H]}function V(H){let x=B(H);if(!(x&7))throw Error(`not an array: ${H}, flags=${x}`);return x}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let x=H.length,p=Y(x<<1,2),Z0=new Uint16Array(Q.buffer);for(let n=0,$0=p>>>1;n<x;++n)Z0[$0+n]=H.charCodeAt(n);return p}_.__newString=E;function k(H){if(H==null)return 0;let x=new Uint8Array(H),p=Y(x.length,1);return new Uint8Array(Q.buffer).set(x,p),p}_.__newArrayBuffer=k;function D(H){if(!H)return null;let x=Q.buffer;if(new Uint32Array(x)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return t7(x,H)}_.__getString=D;function J(H,x,p){let Z0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Z0);case 3:return new Float64Array(Z0)}else switch(H){case 0:return new(x?Int8Array:Uint8Array)(Z0);case 1:return new(x?Int16Array:Uint16Array)(Z0);case 2:return new(x?Int32Array:Uint32Array)(Z0);case 3:return new(x?BigInt64Array:BigUint64Array)(Z0)}throw Error(`unsupported align: ${H}`)}function A(H,x=0){let p=x,Z0=V(H),n=O(Z0),$0=typeof p!=="number",_0=$0?p.length:p,q0=Y(_0<<n,Z0&4?H:1),G0;if(Z0&4)G0=q0;else{q(q0);let X0=Y(Z0&2?16:12,H);N(q0);let z0=new Uint32Array(Q.buffer);if(z0[X0+0>>>2]=q0,z0[X0+4>>>2]=q0,z0[X0+8>>>2]=_0<<n,Z0&2)z0[X0+12>>>2]=_0;G0=X0}if($0){let X0=J(n,Z0&2048,Z0&4096),z0=q0>>>n;if(Z0&16384)for(let A0=0;A0<_0;++A0)X0[z0+A0]=p[A0];else X0.set(p,z0)}return G0}_.__newArray=A;function M(H){let x=new Uint32Array(Q.buffer),p=x[H+-8>>>2],Z0=V(p),n=O(Z0),$0=Z0&4?H:x[H+4>>>2],_0=Z0&2?x[H+12>>>2]:x[$0+-4>>>2]>>>n;return J(n,Z0&2048,Z0&4096).subarray($0>>>=n,$0+_0)}_.__getArrayView=M;function d(H){let x=M(H),p=x.length,Z0=Array(p);for(let n=0;n<p;n++)Z0[n]=x[n];return Z0}_.__getArray=d;function h(H){let x=Q.buffer,p=new Uint32Array(x)[H+-4>>>2];return x.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let x=new Uint32Array(Q.buffer)[H>>>2];return Z.get(x)}_.__getFunction=o;function e(H,x,p){return new H(R(H,x,p))}function R(H,x,p){let Z0=Q.buffer,n=new Uint32Array(Z0);return new H(Z0,n[p+4>>>2],n[p+8>>>2]>>>x)}function S(H,x,p){_[`__get${x}`]=e.bind(null,H,p),_[`__get${x}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{S(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),JN)[BigUint64Array,BigInt64Array].forEach((H)=>{S(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,DN(j,_)}function $9(_){return typeof Response<"u"&&_ instanceof Response}function AN(_){return _ instanceof WebAssembly.Module}async function y$(_,$={}){if($9(_=await _))return t8(_,$);let j=AN(_)?_:await WebAssembly.compile(_),Q=e7($),Z=await WebAssembly.instantiate(j,$),Y=_9(Q,Z);return{module:j,instance:Z,exports:Y}}async function t8(_,$={}){if(!WebAssembly.instantiateStreaming)return y$($9(_=await _)?_.arrayBuffer():_,$);let j=e7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=_9(j,Q.instance);return{...Q,exports:Z}}function DN(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let N=Y[0],K=N.indexOf("#");if(K>=0){let G=N.substring(0,K),X=q[G];if(typeof X>"u"||!X.prototype){let B=function(...V){return B.wrap(B.prototype.constructor(0,...V))};if(B.prototype={valueOf(){return this[t5]}},B.wrap=function(V){return Object.create(B.prototype,{[t5]:{value:V,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((V)=>Object.defineProperty(B,V,Object.getOwnPropertyDescriptor(X,V)));q[G]=B}if(N=N.substring(K+1),q=q[G].prototype,/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4))){let B=_[Q.replace("set:","get:")],V=_[Q.replace("get:","set:")];Object.defineProperty(q,N,{get(){return B(this[t5])},set(O){V(this[t5],O)},enumerable:!0})}}else if(N==="constructor")(q[N]=function(...B){return j(B.length),Z(...B)}).original=Z;else(q[N]=function(...B){return j(B.length),Z(this[t5],...B)}).original=Z}else if(/^(get|set):/.test(N)){if(!Object.hasOwn(q,N=N.substring(4)))Object.defineProperty(q,N,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[N]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[N]=Z}return $}var kN="/static/js/vendor/remote-display-decoder.wasm",e8=null;function j9(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function Q9(){if(e8)return e8;return e8=(async()=>{try{let Q=function(Z,Y,q,N,K,G,X){let B=j9(Y),V=j.__pin(j.__newArrayBuffer(B));try{return j[Z](V,q,N,K,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(V);try{j.__collect()}catch{}}},_=await fetch(kN,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof t8==="function"?await t8(_,{}):await y$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,N,K,G){return Q("processRawRect",Z,Y,q,N,K,G)},processCopyRect(Z,Y,q,N,K,G){return j.processCopyRect(Z,Y,q,N,K,G)},processRreRect(Z,Y,q,N,K,G){return Q("processRreRect",Z,Y,q,N,K,G)},processHextileRect(Z,Y,q,N,K,G){return Q("processHextileRect",Z,Y,q,N,K,G)},processZrleTileData(Z,Y,q,N,K,G){return Q("processZrleTileData",Z,Y,q,N,K,G)},decodeRawRectToRgba(Z,Y,q,N){let K=j9(Z),G=j.__pin(j.__newArrayBuffer(K));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),e8}function J5(_,$,j){return Math.max($,Math.min(j,_))}function _6(_,$,j){let Q=new Uint8Array(6),Z=J5(Math.floor(Number($||0)),0,65535),Y=J5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=J5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function w$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function Z9(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),N=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/N,X=(Number($||0)-Number(j?.top||0))/K;return{x:J5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:J5(Math.floor(X*q),0,Math.max(0,q-1))}}function Y9(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=J5(Number(Q||0)|Z,0,255);return[_6(Y,$,j),_6(Number(Q||0),$,j)]}function q9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function e5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function N9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),N=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/N);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var R$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)R$[`F${_}`]=65470+(_-1);function u$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(R$,Y))return R$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var R1=Uint8Array,F_=Uint16Array,l$=Int32Array,$6=new R1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),j6=new R1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m$=new R1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),B9=function(_,$){var j=new F_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new l$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},V9=B9($6,2),W9=V9.b,h$=V9.r;W9[28]=258,h$[258]=28;var L9=B9(j6,0),MN=L9.b,G9=L9.r,p$=new F_(32768);for(p0=0;p0<32768;++p0)t_=(p0&43690)>>1|(p0&21845)<<1,t_=(t_&52428)>>2|(t_&13107)<<2,t_=(t_&61680)>>4|(t_&3855)<<4,p$[p0]=((t_&65280)>>8|(t_&255)<<8)>>1;var t_,p0,e_=function(_,$,j){var Q=_.length,Z=0,Y=new F_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new F_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var N;if(j){N=new F_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],B=q[_[Z]-1]++<<X;for(var V=B|(1<<X)-1;B<=V;++B)N[p$[B]>>K]=G}}else{N=new F_(Q);for(Z=0;Z<Q;++Z)if(_[Z])N[Z]=p$[q[_[Z]-1]++]>>15-_[Z]}return N},P4=new R1(288);for(p0=0;p0<144;++p0)P4[p0]=8;var p0;for(p0=144;p0<256;++p0)P4[p0]=9;var p0;for(p0=256;p0<280;++p0)P4[p0]=7;var p0;for(p0=280;p0<288;++p0)P4[p0]=8;var p0,Q8=new R1(32);for(p0=0;p0<32;++p0)Q8[p0]=5;var p0,IN=e_(P4,9,0),TN=e_(P4,9,1),PN=e_(Q8,5,0),CN=e_(Q8,5,1),f$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},p_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},v$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},n$=function(_){return(_+7)/8|0},j8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new R1(_.subarray($,j))};var xN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N_=function(_,$,j){var Q=Error($||xN[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,N_);if(!j)throw Q;return Q},SN=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new R1(0);var q=!j,N=q||$.i!=2,K=$.i;if(q)j=new R1(Z*3);var G=function(e0){var H0=j.length;if(e0>H0){var m0=new R1(Math.max(H0*2,e0));m0.set(j),j=m0}},X=$.f||0,B=$.p||0,V=$.b||0,O=$.l,E=$.d,k=$.m,D=$.n,J=Z*8;do{if(!O){X=p_(_,B,1);var A=p_(_,B+1,3);if(B+=3,!A){var M=n$(B)+4,d=_[M-4]|_[M-3]<<8,h=M+d;if(h>Z){if(K)N_(0);break}if(N)G(V+d);j.set(_.subarray(M,h),V),$.b=V+=d,$.p=B=h*8,$.f=X;continue}else if(A==1)O=TN,E=CN,k=9,D=5;else if(A==2){var o=p_(_,B,31)+257,e=p_(_,B+10,15)+4,R=o+p_(_,B+5,31)+1;B+=14;var S=new R1(R),H=new R1(19);for(var x=0;x<e;++x)H[m$[x]]=p_(_,B+x*3,7);B+=e*3;var p=f$(H),Z0=(1<<p)-1,n=e_(H,p,1);for(var x=0;x<R;){var $0=n[p_(_,B,Z0)];B+=$0&15;var M=$0>>4;if(M<16)S[x++]=M;else{var _0=0,q0=0;if(M==16)q0=3+p_(_,B,3),B+=2,_0=S[x-1];else if(M==17)q0=3+p_(_,B,7),B+=3;else if(M==18)q0=11+p_(_,B,127),B+=7;while(q0--)S[x++]=_0}}var G0=S.subarray(0,o),X0=S.subarray(o);k=f$(G0),D=f$(X0),O=e_(G0,k,1),E=e_(X0,D,1)}else N_(1);if(B>J){if(K)N_(0);break}}if(N)G(V+131072);var z0=(1<<k)-1,A0=(1<<D)-1,D0=B;for(;;D0=B){var _0=O[v$(_,B)&z0],n0=_0>>4;if(B+=_0&15,B>J){if(K)N_(0);break}if(!_0)N_(2);if(n0<256)j[V++]=n0;else if(n0==256){D0=B,O=null;break}else{var C0=n0-254;if(n0>264){var x=n0-257,M0=$6[x];C0=p_(_,B,(1<<M0)-1)+W9[x],B+=M0}var d0=E[v$(_,B)&A0],i0=d0>>4;if(!d0)N_(3);B+=d0&15;var X0=MN[i0];if(i0>3){var M0=j6[i0];X0+=v$(_,B)&(1<<M0)-1,B+=M0}if(B>J){if(K)N_(0);break}if(N)G(V+131072);var v0=V+C0;if(V<X0){var o0=Y-X0,b0=Math.min(X0,v0);if(o0+V<0)N_(3);for(;V<b0;++V)j[V]=Q[o0+V]}for(;V<v0;++V)j[V]=j[V-X0]}}if($.l=O,$.p=D0,$.b=V,$.f=X,O)X=1,$.m=k,$.d=E,$.n=D}while(!X);return V!=j.length&&q?j8(j,0,V):j.subarray(0,V)},V4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},_8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},b$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:F9,l:0};if(Z==1){var q=new R1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var N=j[0],K=j[1],G=0,X=1,B=2;j[0]={s:-1,f:N.f+K.f,l:N,r:K};while(X!=Z-1)N=j[j[G].f<j[B].f?G++:B++],K=j[G!=X&&j[G].f<j[B].f?G++:B++],j[X++]={s:-1,f:N.f+K.f,l:N,r:K};var V=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>V)V=Y[Q].s;var O=new F_(V+1),E=c$(j[X-1],O,0);if(E>$){var Q=0,k=0,D=E-$,J=1<<D;Y.sort(function(o,e){return O[e.s]-O[o.s]||o.f-e.f});for(;Q<Z;++Q){var A=Y[Q].s;if(O[A]>$)k+=J-(1<<E-O[A]),O[A]=$;else break}k>>=D;while(k>0){var M=Y[Q].s;if(O[M]<$)k-=1<<$-O[M]++-1;else++Q}for(;Q>=0&&k;--Q){var d=Y[Q].s;if(O[d]==$)--O[d],++k}E=$}return{t:new R1(O),l:E}},c$=function(_,$,j){return _.s==-1?Math.max(c$(_.l,$,j+1),c$(_.r,$,j+1)):$[_.s]=j},K9=function(_){var $=_.length;while($&&!_[--$]);var j=new F_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var N=1;N<=$;++N)if(_[N]==Z&&N!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[N]}return{c:j.subarray(0,Q),n:$}},$8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},U9=function(_,$,j){var Q=j.length,Z=n$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},X9=function(_,$,j,Q,Z,Y,q,N,K,G,X){V4($,X++,j),++Z[256];var B=b$(Z,15),V=B.t,O=B.l,E=b$(Y,15),k=E.t,D=E.l,J=K9(V),A=J.c,M=J.n,d=K9(k),h=d.c,o=d.n,e=new F_(19);for(var R=0;R<A.length;++R)++e[A[R]&31];for(var R=0;R<h.length;++R)++e[h[R]&31];var S=b$(e,7),H=S.t,x=S.l,p=19;for(;p>4&&!H[m$[p-1]];--p);var Z0=G+5<<3,n=$8(Z,P4)+$8(Y,Q8)+q,$0=$8(Z,V)+$8(Y,k)+q+14+3*p+$8(e,H)+2*e[16]+3*e[17]+7*e[18];if(K>=0&&Z0<=n&&Z0<=$0)return U9($,X,_.subarray(K,K+G));var _0,q0,G0,X0;if(V4($,X,1+($0<n)),X+=2,$0<n){_0=e_(V,O,0),q0=V,G0=e_(k,D,0),X0=k;var z0=e_(H,x,0);V4($,X,M-257),V4($,X+5,o-1),V4($,X+10,p-4),X+=14;for(var R=0;R<p;++R)V4($,X+3*R,H[m$[R]]);X+=3*p;var A0=[A,h];for(var D0=0;D0<2;++D0){var n0=A0[D0];for(var R=0;R<n0.length;++R){var C0=n0[R]&31;if(V4($,X,z0[C0]),X+=H[C0],C0>15)V4($,X,n0[R]>>5&127),X+=n0[R]>>12}}}else _0=IN,q0=P4,G0=PN,X0=Q8;for(var R=0;R<N;++R){var M0=Q[R];if(M0>255){var C0=M0>>18&31;if(_8($,X,_0[C0+257]),X+=q0[C0+257],C0>7)V4($,X,M0>>23&31),X+=$6[C0];var d0=M0&31;if(_8($,X,G0[d0]),X+=X0[d0],d0>3)_8($,X,M0>>5&8191),X+=j6[d0]}else _8($,X,_0[M0]),X+=q0[M0]}return _8($,X,_0[256]),X+q0[256]},yN=new l$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F9=new R1(0),RN=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,N=new R1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=N.subarray(Q,N.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)K[0]=Y.r>>3;var B=yN[$-1],V=B>>13,O=B&8191,E=(1<<j)-1,k=Y.p||new F_(32768),D=Y.h||new F_(E+1),J=Math.ceil(j/3),A=2*J,M=function(_1){return(_[_1]^_[_1+1]<<J^_[_1+2]<<A)&E},d=new l$(25000),h=new F_(288),o=new F_(32),e=0,R=0,S=Y.i||0,H=0,x=Y.w||0,p=0;for(;S+2<q;++S){var Z0=M(S),n=S&32767,$0=D[Z0];if(k[n]=$0,D[Z0]=n,x<=S){var _0=q-S;if((e>7000||H>24576)&&(_0>423||!G)){X=X9(_,K,0,d,h,o,R,H,p,S-p,X),H=e=R=0,p=S;for(var q0=0;q0<286;++q0)h[q0]=0;for(var q0=0;q0<30;++q0)o[q0]=0}var G0=2,X0=0,z0=O,A0=n-$0&32767;if(_0>2&&Z0==M(S-A0)){var D0=Math.min(V,_0)-1,n0=Math.min(32767,S),C0=Math.min(258,_0);while(A0<=n0&&--z0&&n!=$0){if(_[S+G0]==_[S+G0-A0]){var M0=0;for(;M0<C0&&_[S+M0]==_[S+M0-A0];++M0);if(M0>G0){if(G0=M0,X0=A0,M0>D0)break;var d0=Math.min(A0,M0-2),i0=0;for(var q0=0;q0<d0;++q0){var v0=S-A0+q0&32767,o0=k[v0],b0=v0-o0&32767;if(b0>i0)i0=b0,$0=v0}}}n=$0,$0=k[n],A0+=n-$0&32767}}if(X0){d[H++]=268435456|h$[G0]<<18|G9[X0];var e0=h$[G0]&31,H0=G9[X0]&31;R+=$6[e0]+j6[H0],++h[257+e0],++o[H0],x=S+G0,++e}else d[H++]=_[S],++h[_[S]]}}for(S=Math.max(S,x);S<q;++S)d[H++]=_[S],++h[_[S]];if(X=X9(_,K,G,d,h,o,R,H,p,S-p,X),!G)Y.r=X&7|K[X/8|0]<<3,X-=7,Y.h=D,Y.p=k,Y.i=S,Y.w=x}else{for(var S=Y.w||0;S<q+G;S+=65535){var m0=S+65535;if(m0>=q)K[X/8|0]=G,m0=q;X=U9(K,X+1,_.subarray(S,m0))}Y.i=q}return j8(N,0,Q+n$(X)+Z)};var z9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var N=Math.min(q+2655,Y);for(;q<N;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},wN=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new R1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return RN(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var H9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var uN=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=z9();Z.p($.dictionary),H9(_,2,Z.d())}},fN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var g$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new R1(32768),this.p=new R1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)N_(5);if(this.d)N_(4);if(!this.p.length)this.p=$;else if($.length){var j=new R1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=SN(this.p,this.s,this.o);this.ondata(j8(Q,j,this.s.b),this.d),this.o=j8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=j8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function J9(_,$){if(!$)$={};var j=z9();j.p(_);var Q=wN(_,$,$.dictionary?6:2,4);return uN(Q,$),H9(Q,Q.length-4,j.d()),Q}var O9=function(){function _($,j){g$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(g$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(fN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}g$.prototype.c.call(this,j)},_}();var vN=typeof TextDecoder<"u"&&new TextDecoder,bN=0;try{vN.decode(F9,{stream:!0}),bN=1}catch(_){}var gN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],mN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],hN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],pN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],cN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],lN=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],nN=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],dN=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],E9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;E9[_]=$}function k9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function M9(_){let $=0n,j=k9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function iN(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function O5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function A9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function rN(_){let $=O5(M9(_),cN,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of nN){j=A9(j,Y),Q=A9(Q,Y);let q=j<<28n|Q;Z.push(O5(q,lN,56))}return Z}function oN(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(dN[j][Y][q])}return $}function sN(_,$){let j=O5(_,hN,32)^BigInt($),Q=oN(j);return O5(Q,pN,32)}function D9(_,$){let j=rN($),Q=O5(M9(_),gN,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let N of j){let K=Y,G=(Z^sN(Y,N))&0xffffffffn;Z=K,Y=G}let q=Y<<32n|Z;return iN(O5(q,mN,64),8)}function aN(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=E9[Z]}return j}function I9(_,$){let j=k9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=aN(_),Z=new Uint8Array(16);return Z.set(D9(j.slice(0,8),Q),0),Z.set(D9(j.slice(8,16),Q),8),Z}var c_="vnc";function tN(_){return Number(_)}function eN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=tN(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function E5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function _G(_,$){let j=E5(_),Q=E5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function $G(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=E5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function jG(){return(_)=>{let $=E5(_);try{let j=[],Q=new O9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return $G(j)}catch(j){try{let Q=J9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function QG(_){return new TextEncoder().encode(String(_||""))}function A5(_){return new TextDecoder().decode(E5(_))}function ZG(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function YG(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function T9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function qG(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function NG(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function P9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function D5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function x9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function GG(_,$,j,Q){let Z=Q||k5,Y=E5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),N=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<N)throw Error(`Incomplete raw rectangle payload: expected ${N} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let B=0;B<Math.max(0,$||0)*Math.max(0,j||0);B+=1){let V=x9(Y,G,q,Z.bigEndian),O=D5(V>>>Z.redShift&Z.redMax,Z.redMax),E=D5(V>>>Z.greenShift&Z.greenMax,Z.greenMax),k=D5(V>>>Z.blueShift&Z.blueMax,Z.blueMax);K[X]=O,K[X+1]=E,K[X+2]=k,K[X+3]=255,G+=q,X+=4}return K}function W4(_,$,j){let Q=j||k5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=x9(_,$,Z,Q.bigEndian);return{rgba:[D5(Y>>>Q.redShift&Q.redMax,Q.redMax),D5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),D5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function C4(_,$,j,Q,Z,Y,q){if(!q)return;for(let N=0;N<Y;N+=1)for(let K=0;K<Z;K+=1){let G=((Q+N)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function S9(_,$,j,Q,Z,Y,q){for(let N=0;N<Y;N+=1){let K=N*Z*4,G=((Q+N)*$+j)*4;_.set(q.subarray(K,K+Z*4),G)}}function C9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function KG(_,$,j,Q,Z,Y,q){let N=Z||k5,K=Math.max(1,Math.floor(Number(N.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),B;try{B=q(X)}catch{return{consumed:4+G,skipped:!0}}let V=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let k=Math.min(64,Q-E);for(let D=0;D<j;D+=64){let J=Math.min(64,j-D);if(B.byteLength<V+1)return null;let A=B[V++],M=A&127,d=(A&128)!==0;if(!d&&M===0){let h=J*k*K;if(B.byteLength<V+h)return null;let o=Y(B.slice(V,V+h),J,k,N);V+=h,S9(O,j,D,E,J,k,o);continue}if(!d&&M===1){let h=W4(B,V,N);if(!h)return null;V+=h.bytesPerPixel,C4(O,j,D,E,J,k,h.rgba);continue}if(!d&&M>1&&M<=16){let h=[];for(let S=0;S<M;S+=1){let H=W4(B,V,N);if(!H)return null;V+=H.bytesPerPixel,h.push(H.rgba)}let o=M<=2?1:M<=4?2:4,e=Math.ceil(J*o/8),R=e*k;if(B.byteLength<V+R)return null;for(let S=0;S<k;S+=1){let H=V+S*e;for(let x=0;x<J;x+=1){let p=x*o,Z0=H+(p>>3),n=8-o-(p&7),$0=B[Z0]>>n&(1<<o)-1;C4(O,j,D+x,E+S,1,1,h[$0])}}V+=R;continue}if(d&&M===0){let h=0,o=0;while(o<k){let e=W4(B,V,N);if(!e)return null;V+=e.bytesPerPixel;let R=C9(B,V);if(!R)return null;V+=R.consumed;for(let S=0;S<R.runLength;S+=1)if(C4(O,j,D+h,E+o,1,1,e.rgba),h+=1,h>=J){if(h=0,o+=1,o>=k)break}}continue}if(d&&M>0){let h=[];for(let R=0;R<M;R+=1){let S=W4(B,V,N);if(!S)return null;V+=S.bytesPerPixel,h.push(S.rgba)}let o=0,e=0;while(e<k){if(B.byteLength<V+1)return null;let R=B[V++],S=R,H=1;if(R&128){S=R&127;let p=C9(B,V);if(!p)return null;V+=p.consumed,H=p.runLength}let x=h[S];if(!x)return null;for(let p=0;p<H;p+=1)if(C4(O,j,D+o,E+e,1,1,x),o+=1,o>=J){if(o=0,e+=1,e>=k)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:O,decompressed:B}}function XG(_,$,j,Q,Z){let Y=Z||k5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let X=$+4,B=W4(_,X,Y);if(!B)return null;X+=B.bytesPerPixel;let V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);C4(V,j,0,0,j,Q,B.rgba);for(let O=0;O<K;O+=1){let E=W4(_,X,Y);if(!E)return null;if(X+=E.bytesPerPixel,_.byteLength<X+8)return null;let k=new DataView(_.buffer,_.byteOffset+X,8),D=k.getUint16(0,!1),J=k.getUint16(2,!1),A=k.getUint16(4,!1),M=k.getUint16(6,!1);X+=8,C4(V,j,D,J,A,M,E.rgba)}return{consumed:X-$,rgba:V}}function BG(_,$,j,Q,Z,Y){let q=Z||k5,N=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],B=[255,255,255,255];for(let V=0;V<Q;V+=16){let O=Math.min(16,Q-V);for(let E=0;E<j;E+=16){let k=Math.min(16,j-E);if(_.byteLength<G+1)return null;let D=_[G++];if(D&1){let J=k*O*N;if(_.byteLength<G+J)return null;let A=Y(_.slice(G,G+J),k,O,q);G+=J,S9(K,j,E,V,k,O,A);continue}if(D&2){let J=W4(_,G,q);if(!J)return null;X=J.rgba,G+=J.bytesPerPixel}if(C4(K,j,E,V,k,O,X),D&4){let J=W4(_,G,q);if(!J)return null;B=J.rgba,G+=J.bytesPerPixel}if(D&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let A=0;A<J;A+=1){let M=B;if(D&16){let H=W4(_,G,q);if(!H)return null;M=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let d=_[G++],h=_[G++],o=d>>4,e=d&15,R=(h>>4)+1,S=(h&15)+1;C4(K,j,E+o,V+e,R,S,M)}}}}return{consumed:G-$,rgba:K}}var k5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Q6{protocol=c_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:GG,this.pipeline=_.pipeline||null,this.encodings=eN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...k5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:jG()}receive(_){if(_)this.buffer=_G(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=A5(Z),q=ZG(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=YG(q),j.push(QG(this.clientVersionText)),$.push({type:"protocol-version",protocol:c_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=A5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:c_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:c_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+N)break;let K=A5(this.consume(4+N).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:c_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:c_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(I9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let N=A5(this.consume(4+q).slice(4));throw Error(N||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:c_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),N=T9(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=T9(X,4),this.serverName=A5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(qG(this.clientPixelFormat)),j.push(NG(this.encodings)),j.push(P9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:c_,width:Y,height:q,name:this.serverName,pixelFormat:N}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),N=4,K=[],G=!1,X=!!this.pipeline;for(let V=0;V<q;V+=1){if(this.buffer.byteLength<N+12){G=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,12),E=O.getUint16(0,!1),k=O.getUint16(2,!1),D=O.getUint16(4,!1),J=O.getUint16(6,!1),A=O.getInt32(8,!1);if(N+=12,A===0){let M=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=D*J*M;if(this.buffer.byteLength<N+d){G=!0;break}let h=this.buffer.slice(N,N+d);if(N+=d,X)this.pipeline.processRawRect(h,E,k,D,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:D,height:J});else K.push({kind:"rgba",x:E,y:k,width:D,height:J,rgba:this.decodeRawRect(h,D,J,this.clientPixelFormat)});continue}if(A===2){let M=XG(this.buffer,N,D,J,this.clientPixelFormat);if(!M){G=!0;break}if(X){let d=this.buffer.slice(N,N+M.consumed);this.pipeline.processRreRect(d,E,k,D,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:D,height:J})}else K.push({kind:"rgba",x:E,y:k,width:D,height:J,rgba:M.rgba});N+=M.consumed;continue}if(A===1){if(this.buffer.byteLength<N+4){G=!0;break}let M=new DataView(this.buffer.buffer,this.buffer.byteOffset+N,4),d=M.getUint16(0,!1),h=M.getUint16(2,!1);if(N+=4,X)this.pipeline.processCopyRect(E,k,D,J,d,h),K.push({kind:"pipeline",x:E,y:k,width:D,height:J});else K.push({kind:"copy",x:E,y:k,width:D,height:J,srcX:d,srcY:h});continue}if(A===16){let M=KG(this.buffer,N,D,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!M){G=!0;break}if(N+=M.consumed,M.skipped)continue;if(X&&M.decompressed)this.pipeline.processZrleTileData(M.decompressed,E,k,D,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:D,height:J});else K.push({kind:"rgba",x:E,y:k,width:D,height:J,rgba:M.rgba});continue}if(A===5){let M=BG(this.buffer,N,D,J,this.clientPixelFormat,this.decodeRawRect);if(!M){G=!0;break}if(X){let d=this.buffer.slice(N,N+M.consumed);this.pipeline.processHextileRect(d,E,k,D,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:D,height:J})}else K.push({kind:"rgba",x:E,y:k,width:D,height:J,rgba:M.rgba});N+=M.consumed;continue}if(A===-223){if(this.framebufferWidth=D,this.framebufferHeight=J,X)this.pipeline.initFramebuffer(D,J);K.push({kind:"resize",x:E,y:k,width:D,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(N);let B={type:"framebuffer-update",protocol:c_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(X)B.framebuffer=this.pipeline.getFramebuffer();$.push(B),j.push(P9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:c_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let N=A5(this.consume(q));$.push({type:"clipboard",protocol:c_,text:N}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var L4="piclaw://vnc";function VG(_){let $=String(_||"");if($===L4)return null;if(!$.startsWith(`${L4}/`))return null;let j=$.slice(`${L4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function o4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function WG(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function LG(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function UG(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function FG(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function zG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class y9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=VG($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=zG("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=FG(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=e5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=e5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=e5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=N9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return Z9(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~w$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of Y9(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(q9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=u$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??u$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Q6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await Q9(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(N,K,G,X)=>Q.decodeRawRectToRgba(N,K,G,X);let Y=e5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Q6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new S$({url:UG(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(N)=>{this.applyMetrics(N)},onMessage:(N)=>{this.handleSocketMessage(N)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await WG(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${o4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await LG(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var d$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===L4||$.startsWith(`${L4}/`)?9000:!1},mount(_,$){return new y9(_,$)}};function x4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function HG(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${N?`${N}/`:""}${Z}`,X=[];for(let V of G.split("/")){if(!V||V===".")continue;if(V===".."){if(X.length>0)X.pop();continue}X.push(V)}let B=X.join("/");return`${P8(B)}${Y}${q}`}function Z8(_){return _?.preview||null}function JG(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function OG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function AG(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${x4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${x4(x_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${x4(i4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${x4(OG($))}</span>`),Q.push(`<span><strong>extension:</strong> ${x4(JG(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${x4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function DG(_){let $=Z8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=AG(_,$);if($.kind==="image"){let Q=$.url||($.path?P8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${x4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=L_($.text||"",null,{rewriteImageSrc:(Z)=>HG(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${x4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class i${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=DG(this.context)}getContent(){let _=Z8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var r$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new i$(_,$)}},o$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z8(_)||_?.path?1:!1},mount(_,$){return new i$(_,$)}};var EG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),kG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},MG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function w9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function R9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=w9(j),Y=MG[Z]||"\uD83D\uDCC4",q=kG[Z]||"Office Document",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
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
        `,_.appendChild(N);let K=N.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=w9(_?.path);if(!$||!EG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u9(_,$);return new f9(_,$)}};var IG=/\.(csv|tsv)$/i;function v9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var a$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new b9(_,$);return new g9(_,$)}};var TG=/\.pdf$/i;function PG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${PG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!TG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m9(_,$);return new h9(_,$)}};var CG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function e$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let N=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var _3={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!CG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};var xG=/\.(mp4|m4v|mov|webm|ogv)$/i;function SG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${SG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var $3={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new l9(_,$);return new n9(_,$)}};function yG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function RG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var j3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function d9(_){let $=String(_||"").trim();return $?$:j3}function wG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function uG(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function fG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,N,K,G,X,B){try{if(q&&K!=null&&j({filename:q,format:N,data:K,mimeType:G,base64Encoded:Boolean(X),defaultMode:B}))return}catch(V){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",V)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,N,K,G,X,B){try{if(N&&j({filename:N,data:q,mimeType:K,base64Encoded:Boolean(G),mode:X,folderId:B}))return}catch(V){console.warn("[drawio-pane] export intercept failed, falling back to native export",V)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function i9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${uG(j)}`}class r9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${RG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class o9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=wG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(fG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=j3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await i9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await i9(_,"image/png");else this.xmlData=d9(await _.text());else if(_.status===404)this.xmlData=j3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?d9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var Q3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!yG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r9(_,$);return new o9(_,$)}};var vG=/\.mindmap\.ya?ml$/i,Z3=String(Date.now());function s9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Y3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function bG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function gG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class t9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(s9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,bG("/static/css/mindmap.css"),await Promise.all([Y3("/static/js/vendor/d3-mindmap.min.js?v="+Z3),Y3("/static/js/vendor/js-yaml.min.js?v="+Z3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),gG(this.mindmapEl);let j=s9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await Y3("/static/js/vendor/mindmap-editor.js?v="+Z3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var q3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new a9(_,$);return new t9(_,$)}};var mG=/\.kanban\.md$/i,hG=String(Date.now());function e9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function pG(){let _=window;if(_.preact)return;_.preact={h:k8,render:I4,Component:K5,createContext:M2},_.preactHooks={useState:m,useEffect:g,useCallback:C,useRef:P,useMemo:R0,useReducer:y6,useContext:P2,useLayoutEffect:v5,useImperativeHandle:T2,useErrorBoundary:x2,useDebugValue:C2},_.htm={bind:()=>L}}function cG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function lG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class _j{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $j{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(e9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,lG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=e9();try{if(pG(),await cG("/static/js/vendor/kanban-editor.js?v="+hG),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var N3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!mG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _j(_,$);return new $j(_,$)}};class jj{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new jj;var Z6="workspaceExplorerScale",nG=["compact","default","comfortable"],dG=new Set(nG),iG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function Qj(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return dG.has(j)?j:$}function G3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function rG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function oG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function K3(_={}){let $=rG(_),j=_.stored?Qj(_.stored,$):$;return oG(j,_)}function Zj(_){return iG[Qj(_)]}function sG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function X3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function Yj(_,$,j={}){let Q=j.resolvePane;if(X3(_,Q))return!0;return sG($)}var aG=60000,Kj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function tG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return X3($,(j)=>l0.resolve(j))}function Xj(_,$,j,Q=0,Z=[]){if(!j&&Kj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Xj(Y,$,j,Q+1,Z);return Z}function qj(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Kj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function L3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((N)=>[N?.path,N])):new Map,Y=!j||j.length!==Q.length,q=Q.map((N)=>{let K=L3(Z.get(N.path),N);if(K!==Z.get(N.path))Y=!0;return K});return Y?{...$,children:q}:_}function V3(_,$,j){if(!_)return _;if(_.path===$)return L3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=V3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Bj=4,B3=14,eG=8,_K=16;function Vj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=Vj(Q);return _.__bytes=j,j}function Wj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Bj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let N of Z){let K=Math.max(0,Number(N?.__bytes??N?.size??0));if(K<=0)continue;if(N.type==="dir")Y.push({kind:"dir",node:N,size:K});else Y.push({kind:"file",name:N.name,path:N.path,size:K})}Y.sort((N,K)=>K.size-N.size);let q=Y;if(Y.length>B3){let N=Y.slice(0,B3-1),K=Y.slice(B3-1),G=K.reduce((X,B)=>X+B.size,0);N.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:G}),q=N}return Q.children=q.map((N)=>{if(N.kind==="dir")return Wj(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),Q}function Nj(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Lj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function U3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,N=Y-Z>q?Z+q:Y,K=Y6(_,$,Q,Z),G=Y6(_,$,Q,N),X=Y6(_,$,j,N),B=Y6(_,$,j,Z),V=N-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${V} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${V} 0 ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,"Z"].join(" ")}var Uj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Fj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(N,K,G,X)=>{let B=Array.isArray(N?.children)?N.children:[];if(!B.length)return;let V=Math.max(0,Number(N.size)||0);if(V<=0)return;let O=G-K,E=K;B.forEach((k,D)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let A=J/V,M=E,d=D===B.length-1?G:E+O*A;if(E=d,d-M<0.003)return;let h=Uj[X];if(h){let o=Lj(M,X,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:o,depth:X,startAngle:M,endAngle:d,innerRadius:h[0],outerRadius:h[1],d:U3(120,120,h[0],h[1],M,d)}),X===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(X<Bj)q(k,M,d,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function W3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=W3(Q,$);if(Z)return Z}return null}function zj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Uj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,N=Lj(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:N,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:U3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:N}]}}function Gj(_,$=!1,j=!1){if(!_)return null;let Q=Vj(_),Z=Wj(_,0),Y=Z.size||Q,{segments:q,legend:N}=Fj(Z,Y,j);if(!q.length&&Y>0){let K=zj("[files]",Z.path,Y,j);q=K.segments,N=K.legend}return{root:Z,totalSize:Y,segments:q,legend:N,truncated:$,isDarkTheme:j}}function $K({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[N,K]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Q]);let G=R0(()=>{return W3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:B,legend:V}=R0(()=>{let H=Fj(G,X,_.isDarkTheme);if(H.segments.length>0)return H;if(X<=0)return H;let x=G?.children?.length?"Total":"[files]";return zj(x,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[O,E]=m(B),k=P(new Map),D=P(0);g(()=>{let H=k.current,x=new Map(B.map(($0)=>[$0.key,$0])),p=performance.now(),Z0=220,n=($0)=>{let _0=Math.min(1,($0-p)/220),q0=_0*(2-_0),G0=B.map((X0)=>{let A0=H.get(X0.key)||{startAngle:X0.startAngle,endAngle:X0.startAngle,innerRadius:X0.innerRadius,outerRadius:X0.innerRadius},D0=(i0,v0)=>i0+(v0-i0)*q0,n0=D0(A0.startAngle,X0.startAngle),C0=D0(A0.endAngle,X0.endAngle),M0=D0(A0.innerRadius,X0.innerRadius),d0=D0(A0.outerRadius,X0.outerRadius);return{...X0,d:U3(120,120,M0,d0,n0,C0)}});if(E(G0),_0<1)D.current=requestAnimationFrame(n)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(n),k.current=x,()=>{if(D.current)cancelAnimationFrame(D.current)}},[B]);let J=O.length?O:B,A=X>0?x_(X):"0 B",M=G?.name||"",h=(M&&M!=="."?M:"Total")||"Total",o=A,e=Y.length>1,R=(H)=>{if(!H?.path)return;let x=W3(_.root,H.path);if(!x||!Array.isArray(x.children)||x.children.length===0)return;q((p)=>[...p,x.path]),Z(x.path),j(null)},S=()=>{if(!e)return;q((H)=>{let x=H.slice(0,-1);return Z(x[x.length-1]||_?.root?.path||"."),x}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${X}>
                ${J.map((H)=>L`
                    <path
                        key=${H.key}
                        d=${H.d}
                        fill=${H.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===H.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(H)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(H)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>R(H)}
                    >
                        <title>${H.label} — ${x_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${S}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${o}</text>
                </g>
            </svg>
            ${V.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${V.slice(0,8).map((H)=>L`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${x_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function jK({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;W5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?x_($.metadata.size):"";return L`
        <a href=${C_(_)} download=${Q} class="file-attachment"
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
                ${Z&&L`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function Hj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:N=!1}){let[K,G]=m(null),[X,B]=m(new Set(["."])),[V,O]=m(null),[E,k]=m(null),[D,J]=m(""),[A,M]=m(null),[d,h]=m(null),[o,e]=m(!0),[R,S]=m(!1),[H,x]=m(null),[p,Z0]=m(()=>L5("workspaceShowHidden",!1)),[n,$0]=m(!1),[_0,q0]=m(null),[G0,X0]=m(null),[z0,A0]=m(null),[D0,n0]=m(!1),[C0,M0]=m(null),[d0,i0]=m(()=>Nj()),[v0,o0]=m(()=>K3({stored:W_(Z6),...G3()})),[b0,e0]=m(!1),H0=P(X),m0=P(""),_1=P(null),j1=P(0),j_=P(new Set),J1=P(null),a0=P(new Map),v1=P(_),D1=P(Q),Q1=P(null),g0=P(null),P1=P(null),E1=P(null),a=P(null),B0=P(null),U0=P("."),N0=P(null),x0=P({path:null,dragging:!1,startX:0,startY:0}),S0=P({path:null,dragging:!1,startX:0,startY:0}),w0=P({path:null,timer:0}),k0=P(!1),y0=P(0),c0=P(new Map),O0=P(null),f0=P(null),J0=P(null),Q0=P(null),y=P(null),t=P(null),L0=P(p),E0=P($),u0=P(j??$),Z1=P(0),O1=P(z0),q1=P(n),b1=P(_0),_4=P(null),G_=P({x:0,y:0}),s1=P(0),K_=P(null),Q_=P(V),t0=P(E),l1=P(null),$4=P(A);v1.current=_,D1.current=Q,g(()=>{H0.current=X},[X]),g(()=>{L0.current=p},[p]),g(()=>{E0.current=$},[$]),g(()=>{u0.current=j??$},[j,$]),g(()=>{O1.current=z0},[z0]),g(()=>{if(typeof window>"u")return;let z=()=>{o0(K3({stored:W_(Z6),...G3()}))};z();let I=()=>z(),w=()=>z(),u=(j0)=>{if(!j0||j0.key===null||j0.key===Z6)z()};window.addEventListener("resize",I),window.addEventListener("focus",w),window.addEventListener("storage",u);let r=window.matchMedia?.("(pointer: coarse)"),Y0=window.matchMedia?.("(hover: none)"),V0=(j0,T0)=>{if(!j0)return;if(j0.addEventListener)j0.addEventListener("change",T0);else if(j0.addListener)j0.addListener(T0)},W0=(j0,T0)=>{if(!j0)return;if(j0.removeEventListener)j0.removeEventListener("change",T0);else if(j0.removeListener)j0.removeListener(T0)};return V0(r,I),V0(Y0,I),()=>{window.removeEventListener("resize",I),window.removeEventListener("focus",w),window.removeEventListener("storage",u),W0(r,I),W0(Y0,I)}},[]),g(()=>{let z=(I)=>{let w=I?.detail?.path;if(!w)return;let u=w.split("/"),r=[];for(let Y0=1;Y0<u.length;Y0++)r.push(u.slice(0,Y0).join("/"));if(r.length)B((Y0)=>{let V0=new Set(Y0);V0.add(".");for(let W0 of r)V0.add(W0);return V0});O(w),requestAnimationFrame(()=>{let Y0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(Y0)Y0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{q1.current=n},[n]),g(()=>{b1.current=_0},[_0]),g(()=>{Q_.current=V},[V]),g(()=>{t0.current=E},[E]),g(()=>{$4.current=A},[A]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>i0(Nj());z();let I=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(I?.addEventListener)I.addEventListener("change",w);else if(I?.addListener)I.addListener(w);let u=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(u?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)u?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(I?.removeEventListener)I.removeEventListener("change",w);else if(I?.removeListener)I.removeListener(w);u?.disconnect()}},[]),g(()=>{if(!E)return;let z=a.current;if(!z)return;let I=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(I)},[E]),g(()=>{if(!b0)return;let z=(w)=>{let u=w?.target;if(!(u instanceof Element))return;if(y.current?.contains(u))return;if(t.current?.contains(u))return;e0(!1)},I=(w)=>{if(w?.key==="Escape")e0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",I),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",I)}},[b0]);let S_=async(z,I={})=>{let w=Boolean(I?.autoOpen),u=String(z||"").trim();S(!0),M(null),h(null);try{let r=await h5(u,20000);if(w&&u&&Yj(u,r,{resolvePane:(Y0)=>l0.resolve(Y0)}))return D1.current?.(u,r),r;return M(r),r}catch(r){let Y0={error:r.message||"Failed to load preview"};return M(Y0),Y0}finally{S(!1)}};Q1.current=S_;let t4=async()=>{if(!E0.current)return;try{let z=await m5("",1,L0.current),I=qj(z.root,H0.current,L0.current);if(I===m0.current){e(!1);return}if(m0.current=I,_1.current=z.root,!j1.current)j1.current=requestAnimationFrame(()=>{j1.current=0,G((w)=>L3(w,_1.current)),e(!1)})}catch(z){x(z.message||"Failed to load workspace"),e(!1)}},y4=async(z)=>{if(!z)return;if(j_.current.has(z))return;j_.current.add(z);try{let I=await m5(z,1,L0.current);G((w)=>V3(w,z,I.root))}catch(I){x(I.message||"Failed to load workspace")}finally{j_.current.delete(z)}};g0.current=y4;let w1=C(()=>{let z=V;if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[V]),X_=C((z)=>{let I=z?.closest?.(".workspace-row");if(!I)return null;let w=I.dataset.path,u=I.dataset.type;if(!w)return null;if(u==="dir")return w;if(w.includes("/")){let r=w.split("/");return r.pop(),r.join("/")||"."}return"."},[]),C1=C((z)=>{return X_(z?.target||null)},[X_]),A1=C((z)=>{O1.current=z,A0(z)},[]),N1=C(()=>{let z=w0.current;if(z?.timer)clearTimeout(z.timer);w0.current={path:null,timer:0}},[]),y_=C((z)=>{if(!z||z==="."){N1();return}let I=a0.current?.get(z);if(!I||I.type!=="dir"){N1();return}if(H0.current?.has(z)){N1();return}if(w0.current?.path===z)return;N1();let w=setTimeout(()=>{w0.current={path:null,timer:0},g0.current?.(z),B((u)=>{let r=new Set(u);return r.add(z),r})},600);w0.current={path:z,timer:w}},[N1]),R_=C((z,I)=>{if(G_.current={x:z,y:I},s1.current)return;s1.current=requestAnimationFrame(()=>{s1.current=0;let w=_4.current;if(!w)return;let u=G_.current;w.style.transform=`translate(${u.x+12}px, ${u.y+12}px)`})},[]),G1=C((z)=>{if(!z)return;let w=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;X0({path:z,label:w})},[]),Z_=C(()=>{if(X0(null),s1.current)cancelAnimationFrame(s1.current),s1.current=0;if(_4.current)_4.current.style.transform="translate(-9999px, -9999px)"},[]),h0=C((z)=>{if(!z)return".";let I=a0.current?.get(z);if(I&&I.type==="dir")return I.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),M1=C(()=>{k(null),J("")},[]),z_=C((z)=>{if(!z)return;let w=(a0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;k(z),J(w)},[]),a1=C(async()=>{let z=t0.current;if(!z)return;let I=(D||"").trim();if(!I){M1();return}let w=a0.current?.get(z),u=(w?.name||z.split("/").pop()||z).trim();if(I===u){M1();return}try{let Y0=(await s6(z,I))?.path||z,V0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(M1(),x(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Y0,type:w?.type||"file"}})),w?.type==="dir")B((W0)=>{let j0=new Set;for(let T0 of W0)if(T0===z)j0.add(Y0);else if(T0.startsWith(`${z}/`))j0.add(`${Y0}${T0.slice(z.length)}`);else j0.add(T0);return j0});if(O(Y0),w?.type==="dir")M(null),S(!1),h(null);else Q1.current?.(Y0);g0.current?.(V0)}catch(r){x(r?.message||"Failed to rename file")}},[M1,D]),R4=C(async(z)=>{let u=z||".";for(let r=0;r<50;r+=1){let V0=`untitled${r===0?"":`-${r}`}.md`;try{let j0=(await o6(u,V0,""))?.path||(u==="."?V0:`${u}/${V0}`);if(u&&u!==".")B((T0)=>new Set([...T0,u]));O(j0),x(null),g0.current?.(u),Q1.current?.(j0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;x(W0?.message||"Failed to create file");return}}x("Failed to create file (untitled name already in use).")},[]),l_=C((z)=>{if(z?.stopPropagation?.(),D0)return;let I=h0(Q_.current);R4(I)},[D0,h0,R4]);g(()=>{if(typeof window>"u")return;let z=(I)=>{let w=I?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;G((W0)=>{let j0=W0;for(let T0 of w){if(!T0?.root)continue;if(!j0||T0.path==="."||!T0.path)j0=T0.root;else j0=V3(j0,T0.path,T0.root)}if(j0)m0.current=qj(j0,H0.current,L0.current);return e(!1),j0});let u=Q_.current;if(Boolean(u)&&w.some((W0)=>{let j0=W0?.path||"";if(!j0||j0===".")return!0;return u===j0||u.startsWith(`${j0}/`)||j0.startsWith(`${u}/`)}))c0.current.clear();if(!u||!$4.current)return;let Y0=a0.current?.get(u);if(Y0&&Y0.type==="dir")return;if(w.some((W0)=>{let j0=W0?.path||"";if(!j0||j0===".")return!0;return u===j0||u.startsWith(`${j0}/`)}))Q1.current?.(u)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),J1.current=t4;let w4=P(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),I=u0.current??E0.current,w=document.visibilityState!=="hidden"&&(I||z.matches&&E0.current);p5(w,L0.current).catch(()=>{})}).current,n_=P(0),e4=P(()=>{if(n_.current)clearTimeout(n_.current);n_.current=setTimeout(()=>{n_.current=0,w4()},250)}).current;g(()=>{if(E0.current)J1.current?.();e4()},[$,j]),g(()=>{J1.current(),w4();let z=setInterval(()=>J1.current(),aG),I=U5("previewHeight",null),w=Number.isFinite(I)?Math.min(Math.max(I,80),600):280;if(y0.current=w,P1.current)P1.current.style.setProperty("--preview-height",`${w}px`);let u=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>e4();if(u.addEventListener)u.addEventListener("change",r);else if(u.addListener)u.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),j1.current)cancelAnimationFrame(j1.current),j1.current=0;if(u.removeEventListener)u.removeEventListener("change",r);else if(u.removeListener)u.removeListener(r);if(document.removeEventListener("visibilitychange",r),n_.current)clearTimeout(n_.current),n_.current=0;if(N0.current)clearTimeout(N0.current),N0.current=null;p5(!1,L0.current).catch(()=>{})}},[]);let d_=R0(()=>Xj(K,X,p),[K,X,p]),w_=R0(()=>new Map(d_.map((z)=>[z.node.path,z.node])),[d_]),T5=R0(()=>Zj(v0),[v0]);a0.current=w_;let K1=(V?a0.current.get(V):null)?.type==="dir";g(()=>{if(!V||!K1){M0(null),O0.current=null,f0.current=null;return}let z=V,I=`${p?"hidden":"visible"}:${V}`,w=c0.current,u=w.get(I);if(u?.root){w.delete(I),w.set(I,u);let V0=Gj(u.root,Boolean(u.truncated),d0);if(V0)O0.current=V0,f0.current=V,M0({loading:!1,error:null,payload:V0});return}let r=O0.current,Y0=f0.current;M0({loading:!0,error:null,payload:Y0===V?r:null}),m5(V,eG,p).then((V0)=>{if(Q_.current!==z)return;let W0={root:V0?.root,truncated:Boolean(V0?.truncated)};w.delete(I),w.set(I,W0);while(w.size>_K){let T0=w.keys().next().value;if(!T0)break;w.delete(T0)}let j0=Gj(W0.root,W0.truncated,d0);O0.current=j0,f0.current=V,M0({loading:!1,error:null,payload:j0})}).catch((V0)=>{if(Q_.current!==z)return;M0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:Y0===V?r:null})})},[V,K1,p,d0]);let x1=Boolean(A&&A.kind==="text"&&!K1&&(!A.size||A.size<=262144)),_5=x1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",H_=Boolean(V&&V!=="."),t1=Boolean(V&&!K1),g1=Boolean(V&&!K1),I1=V&&K1?C8(V,p):null,u1=C(()=>e0(!1),[]),U1=C(async(z)=>{u1();try{await z?.()}catch(I){console.warn("[workspace-explorer] Header menu action failed:",I)}},[u1]);g(()=>{let z=J0.current;if(Q0.current)Q0.current.dispose(),Q0.current=null;if(!z)return;if(z.innerHTML="",!V||K1||!A||A.error)return;let I={path:V,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},w=l0.resolve(I)||l0.get("workspace-preview-default");if(!w)return;let u=w.mount(z,I);return Q0.current=u,()=>{if(Q0.current===u)u.dispose(),Q0.current=null;z.innerHTML=""}},[V,K1,A]);let J_=(z)=>{let I=z?.target;if(I instanceof Element)return I;return I?.parentElement||null},O_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},A_=P((z)=>{let I=J_(z),w=I?.closest?.("[data-path]");if(!w)return;let u=w.dataset.path;if(!u||u===".")return;let r=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),Y0=Boolean(I?.closest?.(".workspace-caret"));if(r||Y0)return;if(t0.current===u)return;z_(u)}).current,i_=P((z)=>{if(k0.current){k0.current=!1;return}let I=J_(z),w=I?.closest?.("[data-path]");if(E1.current?.focus?.(),!w)return;let u=w.dataset.path,r=w.dataset.type,Y0=Boolean(I?.closest?.(".workspace-caret")),V0=Boolean(I?.closest?.("button"))||Boolean(I?.closest?.("a"))||Boolean(I?.closest?.("input")),W0=Q_.current===u,j0=t0.current;if(j0){if(j0===u)return;M1()}let T0=r==="file"&&l1.current===u&&!Y0&&!V0;if(r==="dir"){if(l1.current=null,O(u),M(null),h(null),S(!1),!H0.current.has(u))g0.current?.(u);if(W0&&!Y0)return;B((__)=>{let m1=new Set(__);if(m1.has(u))m1.delete(u);else m1.add(u);return m1})}else{l1.current=null,O(u);let S1=a0.current.get(u);if(S1)v1.current?.(S1.path,S1);if(!V0&&!Y0&&tG(u))D1.current?.(u,$4.current);else{let m1=!V0&&!Y0;Q1.current?.(u,{autoOpen:m1})}}}).current,e1=P(()=>{m0.current="",J1.current(),Array.from(H0.current||[]).filter((I)=>I&&I!==".").forEach((I)=>g0.current?.(I))}).current,n1=P(()=>{l1.current=null,O(null),M(null),h(null),S(!1)}).current,D_=P(()=>{Z0((z)=>{let I=!z;if(typeof window<"u")Y1("workspaceShowHidden",String(I));return L0.current=I,p5(!0,I).catch(()=>{}),m0.current="",J1.current?.(),Array.from(H0.current||[]).filter((u)=>u&&u!==".").forEach((u)=>g0.current?.(u)),I})}).current,j4=P((z)=>{if(J_(z)?.closest?.("[data-path]"))return;n1()}).current,F1=C(async(z)=>{if(!z)return;let I=z.split("/").pop()||z;if(!window.confirm(`Delete "${I}"? This cannot be undone.`))return;try{await t6(z);let u=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(Q_.current===z)n1();g0.current?.(u),x(null)}catch(u){M((r)=>({...r||{},error:u.message||"Failed to delete file"}))}},[n1]),r_=C((z)=>{let I=E1.current;if(!I||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;I.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),u4=C((z)=>{let I=d_;if(!I||I.length===0)return;let w=V?I.findIndex((u)=>u.node.path===V):-1;if(z.key==="ArrowDown"){z.preventDefault();let u=Math.min(w+1,I.length-1),r=I[u];if(!r)return;if(O(r.node.path),r.node.type!=="dir")v1.current?.(r.node.path,r.node),Q1.current?.(r.node.path);else M(null),S(!1),h(null);r_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let u=w<=0?0:w-1,r=I[u];if(!r)return;if(O(r.node.path),r.node.type!=="dir")v1.current?.(r.node.path,r.node),Q1.current?.(r.node.path);else M(null),S(!1),h(null);r_(r.node.path);return}if(z.key==="ArrowRight"&&w>=0){let u=I[w];if(u?.node?.type==="dir"&&!X.has(u.node.path))z.preventDefault(),g0.current?.(u.node.path),B((r)=>new Set([...r,u.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let u=I[w];if(u?.node?.type==="dir"&&X.has(u.node.path))z.preventDefault(),B((r)=>{let Y0=new Set(r);return Y0.delete(u.node.path),Y0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let u=I[w];if(!u)return;let r=u.node.path;if(u.node.type==="dir"){if(!H0.current.has(r))g0.current?.(r);B((V0)=>{let W0=new Set(V0);if(W0.has(r))W0.delete(r);else W0.add(r);return W0}),M(null),h(null),S(!1)}else v1.current?.(r,u.node),Q1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let u=I[w];if(!u||u.node.type==="dir")return;z.preventDefault(),F1(u.node.path);return}if(z.key==="Escape")z.preventDefault(),n1()},[n1,F1,X,d_,r_,V]),f4=C((z)=>{let I=J_(z),w=I?.closest?.(".workspace-row");if(!w)return;let u=w.dataset.type,r=w.dataset.path;if(!r||r===".")return;if(t0.current===r)return;let Y0=z?.touches?.[0];if(!Y0)return;if(x0.current={path:O_(I)?r:null,dragging:!1,startX:Y0.clientX,startY:Y0.clientY},u!=="file")return;if(N0.current)clearTimeout(N0.current);N0.current=setTimeout(()=>{if(N0.current=null,x0.current?.dragging)return;F1(r)},600)},[F1]),E_=C(()=>{if(N0.current)clearTimeout(N0.current),N0.current=null;let z=x0.current;if(z?.dragging&&z.path){let I=O1.current||w1(),w=K_.current;if(typeof w==="function")w(z.path,I)}x0.current={path:null,dragging:!1,startX:0,startY:0},Z1.current=0,$0(!1),q0(null),A1(null),N1(),Z_()},[w1,Z_,A1,N1]),v4=C((z)=>{let I=x0.current,w=z?.touches?.[0];if(!w||!I?.path){if(N0.current)clearTimeout(N0.current),N0.current=null;return}let u=Math.abs(w.clientX-I.startX),r=Math.abs(w.clientY-I.startY),Y0=u>8||r>8;if(Y0&&N0.current)clearTimeout(N0.current),N0.current=null;if(!I.dragging&&Y0)I.dragging=!0,$0(!0),q0("move"),G1(I.path);if(I.dragging){z.preventDefault(),R_(w.clientX,w.clientY);let V0=document.elementFromPoint(w.clientX,w.clientY),W0=X_(V0)||w1();if(O1.current!==W0)A1(W0);y_(W0)}},[X_,w1,G1,R_,A1,y_]),$5=P((z)=>{z.preventDefault();let I=P1.current;if(!I)return;let w=z.clientY,u=y0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Y0=w,V0=(j0)=>{Y0=j0.clientY;let T0=I.clientHeight-80,S1=Math.min(Math.max(u-(j0.clientY-w),80),T0);I.style.setProperty("--preview-height",`${S1}px`),y0.current=S1},W0=()=>{let j0=I.clientHeight-80,T0=Math.min(Math.max(u-(Y0-w),80),j0);y0.current=T0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",W0)}).current,u_=P((z)=>{z.preventDefault();let I=P1.current;if(!I)return;let w=z.touches[0];if(!w)return;let u=w.clientY,r=y0.current||280,Y0=z.currentTarget;Y0.classList.add("dragging"),document.body.style.userSelect="none";let V0=(j0)=>{let T0=j0.touches[0];if(!T0)return;j0.preventDefault();let S1=I.clientHeight-80,__=Math.min(Math.max(r-(T0.clientY-u),80),S1);I.style.setProperty("--preview-height",`${__}px`),y0.current=__},W0=()=>{Y0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(y0.current||r))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,f_=async()=>{if(!V)return;try{let z=await r6(V);if(z.media_id)h(z.media_id)}catch(z){M((I)=>({...I||{},error:z.message||"Failed to attach"}))}},U4=async()=>{if(!V||K1)return;await F1(V)},v_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},b4=C((z)=>{if(!v_(z))return;if(z.preventDefault(),Z1.current+=1,!q1.current)$0(!0);q0("upload");let I=C1(z)||w1();A1(I),y_(I)},[w1,C1,A1,y_]),b_=C((z)=>{if(!v_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!q1.current)$0(!0);if(b1.current!=="upload")q0("upload");let I=C1(z)||w1();if(O1.current!==I)A1(I);y_(I)},[w1,C1,A1,y_]),k_=C((z)=>{if(!v_(z))return;if(z.preventDefault(),Z1.current=Math.max(0,Z1.current-1),Z1.current===0)$0(!1),q0(null),A1(null),N1()},[A1,N1]),k1=C(async(z,I=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let u=I&&I!==""?I:".",r=u!=="."?u:"workspace root";n0(!0);try{let Y0=null;for(let V0 of w)try{Y0=await T8(V0,u)}catch(W0){let j0=W0?.status,T0=W0?.code;if(j0===409||T0==="file_exists"){let S1=V0?.name||"file";if(!window.confirm(`"${S1}" already exists in ${r}. Overwrite?`))continue;Y0=await T8(V0,u,{overwrite:!0})}else throw W0}if(Y0?.path)l1.current=Y0.path,O(Y0.path),Q1.current?.(Y0.path);g0.current?.(u)}catch(Y0){x(Y0.message||"Failed to upload file")}finally{n0(!1)}},[]),F4=C(async(z,I)=>{if(!z)return;let w=a0.current?.get(z);if(!w)return;let u=I&&I!==""?I:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(u===r)return;try{let V0=(await a6(z,u))?.path||z;if(w.type==="dir")B((W0)=>{let j0=new Set;for(let T0 of W0)if(T0===z)j0.add(V0);else if(T0.startsWith(`${z}/`))j0.add(`${V0}${T0.slice(z.length)}`);else j0.add(T0);return j0});if(O(V0),w.type==="dir")M(null),S(!1),h(null);else Q1.current?.(V0);g0.current?.(r),g0.current?.(u)}catch(Y0){x(Y0?.message||"Failed to move entry")}},[]);K_.current=F4;let z4=C(async(z)=>{if(!v_(z))return;z.preventDefault(),Z1.current=0,$0(!1),q0(null),A0(null),N1();let I=Array.from(z?.dataTransfer?.files||[]);if(I.length===0)return;let w=O1.current||C1(z)||w1();await k1(I,w)},[w1,C1,k1]),g4=C((z)=>{if(z?.stopPropagation?.(),D0)return;let I=z?.currentTarget?.dataset?.uploadTarget||".";U0.current=I,B0.current?.click()},[D0]),V1=C(()=>{if(D0)return;let z=Q_.current,I=z?a0.current?.get(z):null;U0.current=I?.type==="dir"?I.path:".",B0.current?.click()},[D0]),H4=C(()=>{U1(()=>l_(null))},[U1,l_]),j5=C(()=>{U1(()=>V1())},[U1,V1]),f1=C(()=>{U1(()=>e1())},[U1,e1]),Y_=C(()=>{U1(()=>D_())},[U1,D_]),o_=C(()=>{if(!V||!x1)return;U1(()=>D1.current?.(V,A))},[U1,V,x1,A]),m4=C(()=>{if(!V||V===".")return;U1(()=>z_(V))},[U1,V,z_]),Q4=C(()=>{if(!V||K1)return;U1(()=>U4())},[U1,V,K1,U4]),J4=C(()=>{if(!V||K1)return;U1(()=>f_())},[U1,V,K1,f_]),Z4=C(()=>{if(!I1)return;if(u1(),typeof window<"u")window.open(I1,"_blank","noopener")},[u1,I1]),M_=C(()=>{u1(),Z?.()},[u1,Z]),B_=C(()=>{u1(),Y?.()},[u1,Y]),O4=C(()=>{u1(),q?.()},[u1,q]),h4=C((z)=>{if(!z||z.button!==0)return;let I=z.currentTarget;if(!I||!I.dataset)return;let w=I.dataset.path;if(!w||w===".")return;if(t0.current===w)return;let u=J_(z);if(u?.closest?.("button, a, input, .workspace-caret"))return;if(!O_(u))return;z.preventDefault(),S0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(V0)=>{let W0=S0.current;if(!W0?.path)return;let j0=Math.abs(V0.clientX-W0.startX),T0=Math.abs(V0.clientY-W0.startY),S1=j0>4||T0>4;if(!W0.dragging&&S1)W0.dragging=!0,k0.current=!0,$0(!0),q0("move"),G1(W0.path),R_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){V0.preventDefault(),R_(V0.clientX,V0.clientY);let __=document.elementFromPoint(V0.clientX,V0.clientY),m1=X_(__)||w1();if(O1.current!==m1)A1(m1);y_(m1)}},Y0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Y0);let V0=S0.current;if(V0?.dragging&&V0.path){let W0=O1.current||w1(),j0=K_.current;if(typeof j0==="function")j0(V0.path,W0)}S0.current={path:null,dragging:!1,startX:0,startY:0},Z1.current=0,$0(!1),q0(null),A1(null),N1(),Z_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Y0)},[X_,w1,G1,R_,Z_,A1,y_,N1]),I_=C(async(z)=>{let I=Array.from(z?.target?.files||[]);if(I.length===0)return;let w=U0.current||".";if(await k1(I,w),U0.current=".",z?.target)z.target.value=""},[k1]);return L`
        <aside
            class=${`workspace-sidebar${n?" workspace-drop-active":""}`}
            data-workspace-scale=${v0}
            ref=${P1}
            onDragEnter=${b4}
            onDragOver=${b_}
            onDragLeave=${k_}
            onDrop=${z4}
        >
            <input type="file" multiple style="display:none" ref=${B0} onChange=${I_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${b0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),e0((I)=>!I)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${b0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${b0&&L`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${H4} disabled=${D0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${j5} disabled=${D0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${f1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${Y_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&L`<div class="workspace-menu-separator"></div>`}
                                ${V&&!K1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o_} disabled=${!x1}>Open in editor</button>
                                `}
                                ${H_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${g1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${J4}>Download selected file</button>
                                `}
                                ${I1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4}>Download selected folder (zip)</button>
                                `}
                                ${t1&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Q4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${O4}>
                                        ${N?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${l_} title="New file" disabled=${D0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${e1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${j4}>
                ${D0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${o&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${K&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${E1}
                        tabIndex="0"
                        onClick=${i_}
                        onDblClick=${A_}
                        onKeyDown=${u4}
                        onTouchStart=${f4}
                        onTouchEnd=${E_}
                        onTouchMove=${v4}
                        onTouchCancel=${E_}
                    >
                        ${d_.map(({node:z,depth:I})=>{let w=z.type==="dir",u=z.path===V,r=z.path===E,Y0=w&&X.has(z.path),V0=z0&&z.path===z0,W0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${u?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+I*T5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${h4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?Y0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${a}
                                                value=${D}
                                                onInput=${(j0)=>J(j0?.target?.value||"")}
                                                onKeyDown=${(j0)=>{if(j0.key==="Enter")j0.preventDefault(),a1();else if(j0.key==="Escape")j0.preventDefault(),M1()}}
                                                onBlur=${M1}
                                                onClick=${(j0)=>j0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!Y0&&W0>0&&L`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${w&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${g4}
                                            disabled=${D0}
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
            ${V&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${$5} onTouchStart=${u_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${l_} title="New file" disabled=${D0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!K1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>x1&&D1.current?.(V,A)}
                                    title=${_5}
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
                                    onClick=${U4}
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
                            ${K1?L`
                                    <button class="workspace-download" onClick=${V1}
                                        title="Upload files to this folder" disabled=${D0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${C8(V,p)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${f_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${R&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&L`<div class="workspace-error">${A.error}</div>`}
                    ${K1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${C0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${C0?.error&&L`<div class="workspace-error">${C0.error}</div>`}
                        ${C0?.payload&&C0.payload.segments?.length>0&&L`
                            <${$K} payload=${C0.payload} />
                        `}
                        ${C0?.payload&&(!C0.payload.segments||C0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!K1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${d&&L`
                        <div class="workspace-download-card">
                            <${jK} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${G0&&L`
                <div class="workspace-drag-ghost" ref=${_4}>${G0.label}</div>
            `}
        </aside>
    `}var QK=new Set(["kanban-editor","mindmap-editor"]);function ZK(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Jj(_,$,j){let Q=ZK(_,$,j);return Q!=null&&QK.has(Q)}var YK=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,qK=/\.(csv|tsv)$/i,NK=/\.pdf$/i,GK=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Oj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Aj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:N,onEditSource:K,previewTabs:G,paneOverrides:X,onToggleDock:B,dockVisible:V,onToggleZen:O,zenMode:E,onPopOutTab:k}){let[D,J]=m(null),A=P(null);g(()=>{if(!D)return;let H=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[D]),g(()=>{let H=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let p=_.findIndex((Z0)=>Z0.id===$);if(x.shiftKey){let Z0=_[(p-1+_.length)%_.length];j?.(Z0.id)}else{let Z0=_[(p+1)%_.length];j?.(Z0.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(x.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let M=C((H,x)=>{if(H.button===1){H.preventDefault(),Q?.(x);return}if(H.button===0)j?.(x)},[j,Q]),d=C((H,x)=>{H.preventDefault(),J({id:x,x:H.clientX,y:H.clientY})},[]),h=C((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=C((H,x)=>{H.preventDefault(),H.stopPropagation(),Q?.(x)},[Q]);g(()=>{if(!$||!A.current)return;let H=A.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let e=C((H)=>{if(!(X instanceof Map))return null;return X.get(H)||null},[X]),R=R0(()=>_.find((H)=>H.id===D?.id)||null,[D?.id,_]),S=R0(()=>{let H=D?.id;if(!H)return!1;return Jj(H,e(H),(x)=>l0.resolve(x))},[D?.id,e]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(x)=>M(x,H.id)}
                    onContextMenu=${(x)=>d(x,H.id)}
                >
                    ${H.pinned&&L`
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
                        onMouseDown=${h}
                        onClick=${(x)=>o(x,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?L`<span class="tab-dirty-dot" aria-hidden="true"></span>`:L`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${B&&L`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${V?" active":""}`}
                    onClick=${B}
                    title=${`${V?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${V?"Hide":"Show"} terminal`}
                    aria-pressed=${V?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${O&&L`
                <button
                    class=${`tab-strip-zen-toggle${E?" active":""}`}
                    onClick=${O}
                    title=${`${E?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${E?"Exit":"Enter"} zen mode`}
                    aria-pressed=${E?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${E?L`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:L`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${D&&L`
            <div class="tab-context-menu" style=${{left:D.x+"px",top:D.y+"px"}}>
                <button onClick=${()=>{Q?.(D.id),J(null)}}>Close</button>
                <button onClick=${()=>{Z?.(D.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(D.id),J(null)}}>
                    ${R?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&K&&L`
                    <button onClick=${()=>{K(D.id),J(null)}}>Edit Source</button>
                `}
                ${k&&L`
                    <button onClick=${()=>{let H=_.find((x)=>x.id===D.id);k(D.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${N&&/\.(md|mdx|markdown)$/i.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{N(D.id),J(null)}}>
                        ${G?.has(D.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${YK.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(D.id),x=D.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(x);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${qK.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(D.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${NK.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(D.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${GK.test(D.id)&&!Oj.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(D.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Oj.test(D.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(D.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var KK=400,F3=60,Dj=220,z3="mdPreviewHeight";function XK(){try{let _=localStorage.getItem(z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=F3?$:Dj}catch{return Dj}}function H3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(XK),N=P(null),K=P(null),G=P(""),X=P(_);return X.current=_,g(()=>{let O=()=>{let k=X.current?.()||"";if(k===G.current)return;G.current=k;try{let D=L_(k,null,{sanitize:!1});Z(D)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,KK);return()=>clearInterval(E)},[]),g(()=>{if(N.current&&Q)G4(N.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,k=K.current?.offsetHeight||Y,D=K.current?.parentElement,J=D?D.offsetHeight*0.7:500,A=O.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=(h)=>{let o=Math.min(Math.max(k-(h.clientY-E),F3),J);q(o)},d=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(z3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",d)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let k=E.clientY,D=K.current?.offsetHeight||Y,J=K.current?.parentElement,A=J?J.offsetHeight*0.7:500,M=O.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let d=(o)=>{let e=o.touches[0];if(!e)return;o.preventDefault();let R=Math.min(Math.max(D-(e.clientY-k),F3),A);q(R)},h=()=>{M.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(z3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
    `}function Ej({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=P(_);Y.current=_;let q=P($);q.current=$;let N=P(j);N.current=j;let K=P(Q);K.current=Q,g(()=>{let G=new x8((B,V)=>Y.current(B,V),(B)=>q.current(B),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let B=typeof document<"u"?document:null;if(!B||B.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function kj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=P(!1);g(()=>{let K=L5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),Y1("notificationsEnabled",String(K))},[Y]),N=C((K,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(K,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:N}}var Y8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Mj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),N=P(!1),K=P(null),G=P(!1),X=P(null),B=P(null),V=P(0);g(()=>{N.current=Y},[Y]),g(()=>{B.current=Q},[Q]),g(()=>{V.current+=1,X.current=null,G.current=!1,N.current=!1,q(!1)},[j]);let O=C(async(D=null)=>{let J=V.current;try{if(D){let A=await w6(D,50,0,j);if(J!==V.current)return;Z(A.posts),q(!1)}else{let A=await c4(10,null,j);if(J!==V.current)return;Z(A.posts),q(A.has_more)}}catch(A){if(J!==V.current)return;console.error("Failed to load posts:",A)}},[j]),E=C(async()=>{let D=V.current;try{let J=await c4(10,null,j);if(D!==V.current)return;Z((A)=>{if(!A||A.length===0)return J.posts;return Y8([...J.posts,...A])}),q((A)=>A||J.has_more)}catch(J){if(D!==V.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=C(async(D={})=>{let J=V.current,A=B.current;if(!A||A.length===0)return;if(G.current)return;let{preserveScroll:M=!0,preserveMode:d="top",allowRepeat:h=!1}=D,o=(S)=>{if(!M){S();return}if(d==="top")$(S);else _(S)},R=A.slice().sort((S,H)=>S.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&X.current===R)return;G.current=!0,X.current=R;try{let S=await c4(10,R,j);if(J!==V.current)return;if(S.posts.length>0)o(()=>{Z((H)=>Y8([...S.posts,...H||[]])),q(S.has_more)});else q(!1)}catch(S){if(J!==V.current)return;console.error("Failed to load more posts:",S)}finally{if(J===V.current)G.current=!1}},[j,_,$]);return g(()=>{K.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:N,loadPosts:O,refreshTimeline:E,loadMore:k,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:X}}function Ij(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function J3(_,$){return _&&$}function Tj(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function Pj(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Cj(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function xj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,N]=m({text:"",totalLines:0}),[K,G]=m(null),[X,B]=m(null),[V,O]=m(null),E=P(null),k=P(0),D=P(!1),J=P(""),A=P(""),M=P(null),d=P(null),h=P(null),o=P(null),e=P(!1),R=P(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:N,pendingRequest:K,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:B,steerQueuedTurnId:V,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:k,isAgentRunningRef:D,draftBufferRef:J,thoughtBufferRef:A,pendingRequestRef:M,stalledPostIdRef:d,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:e,draftExpandedRef:R}}function Sj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.clientX,O=$.current||280,E=X.currentTarget;E.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=V,D=(A)=>{k=A.clientX;let M=Math.min(Math.max(O+(A.clientX-V),160),600);B.style.setProperty("--sidebar-width",`${M}px`),$.current=M},J=()=>{let A=Math.min(Math.max(O+(k-V),160),600);$.current=A,E.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",J)}).current,Y=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.touches[0];if(!V)return;let O=V.clientX,E=$.current||280,k=X.currentTarget;k.classList.add("dragging"),B.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(A)=>{let M=A.touches[0];if(!M)return;A.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),160),600);B.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{k.classList.remove("dragging"),B.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.clientX,O=j.current||$.current||280,E=X.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=V,D=(A)=>{k=A.clientX;let M=Math.min(Math.max(O+(A.clientX-V),200),800);B.style.setProperty("--editor-width",`${M}px`),j.current=M},J=()=>{let A=Math.min(Math.max(O+(k-V),200),800);j.current=A,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",J)}).current,N=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.touches[0];if(!V)return;let O=V.clientX,E=j.current||$.current||280,k=X.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let D=(A)=>{let M=A.touches[0];if(!M)return;A.preventDefault();let d=Math.min(Math.max(E+(M.clientX-O),200),800);B.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.clientY,O=Q?.current||200,E=X.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=V,D=(A)=>{k=A.clientY;let M=Math.min(Math.max(O-(A.clientY-V),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${M}px`),Q)Q.current=M;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let A=Math.min(Math.max(O-(k-V),100),window.innerHeight*0.5);if(Q)Q.current=A;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",J)}).current,G=P((X)=>{X.preventDefault();let B=_.current;if(!B)return;let V=X.touches[0];if(!V)return;let O=V.clientY,E=Q?.current||200,k=X.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let D=(A)=>{let M=A.touches[0];if(!M)return;A.preventDefault();let d=Math.min(Math.max(E-(M.clientY-O),100),window.innerHeight*0.5);if(B.style.setProperty("--dock-height",`${d}px`),Q)Q.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function BK(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,N]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,N)}return Z?Y:_}function yj({onTabClosed:_}={}){let $=P(_);$.current=_;let[j,Q]=m(()=>r0.getTabs()),[Z,Y]=m(()=>r0.getActiveId()),[q,N]=m(()=>r0.getTabs().length>0);g(()=>{return r0.onChange((R,S)=>{Q(R),Y(S),N(R.length>0)})},[]);let[K,G]=m(()=>new Set),[X,B]=m(()=>new Map),V=C((R)=>{G((S)=>{let H=new Set(S);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=C((R)=>{G((S)=>{if(!S.has(R))return S;let H=new Set(S);return H.delete(R),H})},[]),E=C((R)=>{B((S)=>{if(!S.has(R))return S;let H=new Map(S);return H.delete(R),H})},[]),k=C((R,S={})=>{if(!R)return;let H=typeof S?.paneOverrideId==="string"&&S.paneOverrideId.trim()?S.paneOverrideId.trim():null,x={path:R,mode:"edit"};try{if(!(H?l0.get(H):l0.resolve(x))){if(!l0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Z0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Z0)}let p=typeof S?.label==="string"&&S.label.trim()?S.label.trim():void 0;if(r0.open(R,p),H)B((Z0)=>{if(Z0.get(R)===H)return Z0;let n=new Map(Z0);return n.set(R,H),n})},[]),D=C(()=>{let R=r0.getActiveId();if(R){let S=r0.get(R);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}r0.close(R),O(R),E(R),$.current?.(R)}},[E,O]),J=C((R)=>{let S=r0.get(R);if(S?.dirty){if(!window.confirm(`"${S.label}" has unsaved changes. Close anyway?`))return}r0.close(R),O(R),E(R),$.current?.(R)},[E,O]),A=C((R)=>{r0.activate(R)},[]),M=C((R)=>{let S=r0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=S.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let x=S.map((p)=>p.id);r0.closeOthers(R),x.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),d=C(()=>{let R=r0.getTabs().filter((x)=>!x.pinned),S=R.filter((x)=>x.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let H=R.map((x)=>x.id);r0.closeAll(),H.forEach((x)=>{O(x),E(x),$.current?.(x)})},[E,O]),h=C((R)=>{r0.togglePin(R)},[]),o=C((R)=>{if(!R)return;B((S)=>{if(S.get(R)==="editor")return S;let H=new Map(S);return H.set(R,"editor"),H}),r0.activate(R)},[]),e=C(()=>{let R=r0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(S)=>{let{oldPath:H,newPath:x,type:p}=S.detail||{};if(!H||!x)return;if(p==="dir"){for(let Z0 of r0.getTabs())if(Z0.path===H||Z0.path.startsWith(`${H}/`)){let n=`${x}${Z0.path.slice(H.length)}`;r0.rename(Z0.id,n)}}else r0.rename(H,x);B((Z0)=>BK(Z0,H,x,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(S)=>{if(r0.hasUnsaved())S.preventDefault(),S.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:X,openEditor:k,closeEditor:D,handleTabClose:J,handleTabActivate:A,handleTabCloseOthers:M,handleTabCloseAll:d,handleTabTogglePin:h,handleTabTogglePreview:V,handleTabEditSource:o,revealInExplorer:e}}function O3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var A3=O3("warning",30000),Rj=O3("finalize",120000),D3=O3("refresh",30000),wj=30000;function uj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function fj(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function vj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function bj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function VK(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:VK(_,$)}}function E3(_,$){return{text:$?.text||"",totalLines:bj(_),fullText:_}}function gj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function mj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function hj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function M5(_,$){return Boolean(_)&&!Boolean($)}function pj(_,$){return _||$||null}function k3(_){return _?.turn_id||_?.turnId||null}function q8(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function M3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function cj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function I3(_){return String(_||"").trim()||"web:default"}function lj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function nj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}var WK={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function T3(_){if(!_||typeof _!=="object")return WK;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function dj(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},N=q.name||null,K=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)N=Z,G=!0;if(Y!==void 0){let B=typeof Y==="string"?Y.trim():null,V=typeof K==="string"?K.trim():null,O=B||null;if(O!==(V||null))K=O,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:N,resolvedAvatar:K}}function ij(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,N=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===N)return _;return{name:Y,avatar_url:q,avatar_background:N}}function rj(_={}){return X4(_)&&a8(_)}function LK(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function UK(_={},$={}){if(!rj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=LK({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function oj(_={}){if(!rj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let B of Z)$.clearTimeout?.(B);Z.clear()},q=()=>{Q=0,UK({window:$,document:j})},N=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{N();for(let B of[80,220,420]){let V=$.setTimeout?.(()=>{Z.delete(V),N()},B);if(V!=null)Z.add(V)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},X=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),X?.addEventListener?.("resize",K),X?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),X?.removeEventListener?.("resize",K),X?.removeEventListener?.("scroll",K)}}function FK(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:FK($,j)}function zK(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function sj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:zK($,j),panelKey:typeof $?.key==="string"?$.key:""}}function aj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}function tj(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function ej(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}var HK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function _Q(_){return HK.has(String(_||"").trim())}function JK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function P3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(JK(_),{detail:Q})),!0}var OK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function $Q(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(X4({window:j,navigator:Q}))};Z();let q=OK.map((N)=>{try{return j.matchMedia?.(N)??null}catch{return null}}).filter(Boolean).map((N)=>{if(typeof N.addEventListener==="function")return N.addEventListener("change",Z),()=>N.removeEventListener("change",Z);if(typeof N.addListener==="function")return N.addListener(Z),()=>N.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let N of q)N();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function jQ(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function QQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(K)=>{let G=K?.detail?.path,X=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,X)},N=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return N.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{N.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function ZQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function YQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(N)=>{if(N?.ctrlKey&&N.shiftKey&&(N.key==="Z"||N.key==="z")){N.preventDefault?.(),Q?.();return}if(N?.key==="Escape"&&Y())N.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function qQ(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function NQ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function GQ(_,$,j){return _||$?.label||j||"Pane"}function KQ(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function XQ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function BQ(_,$,j,Q){return _===$&&!j||Q}function VQ(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var AK="piclaw_btw_session",LQ=900,WQ="__piclawRenameBranchFormLock__";function DK(){try{return import.meta.url}catch{return null}}function C3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function N6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function UQ(_={}){let $=_.importMetaUrl===void 0?DK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let N=new URL(Y,Q).searchParams.get("v");return N&&N.trim()?N.trim():null}catch{return null}}function x3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[WQ];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[WQ]=Q,Q}function FQ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function zQ(_={}){let $=typeof _.readItem==="function"?_.readItem:W_,j=_.storageKey||AK,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",N=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:N,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function HQ(_,$={}){let j=$.defaultChatJid||"web:default",Q=N6(_,"chat_jid",j),Z=C3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=C3(_?.get?.("pane_popout")),q=N6(_,"pane_path"),N=N6(_,"pane_label"),K=C3(_?.get?.("branch_loader")),G=N6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:N,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function JQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:N,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||K<Number(Z||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),N?.(!0),!0}function OQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function AQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:N,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:B,showIntentToast:V,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=E(),D=N?.()||null;if(!D)return!1;if(Y.current||k<Number(q.current||0)||D.inFlight||k<Number(D.cooldownUntil||0))return!1;Y.current=!0,D.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",A=w8(Q,J);if(!A.canSubmit)return V?.("Could not rename branch",A.message||"Enter a valid branch handle.","warning",4000),!1;let M=A.normalized||J,d=await G(j.chat_jid,{agentName:M});await Promise.allSettled([X?.(),B?.()]);let h=d?.branch?.agent_name||M||J;return V?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let A=J instanceof Error?J.message:String(J||"Could not rename branch."),M=/already in use/i.test(A||"")?`${A} Switch to or restore that existing session from the session manager.`:A;return V?.("Could not rename branch",M||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let J=E()+LQ;q.current=J;let A=N?.()||null;if(A)A.inFlight=!1,A.cooldownUntil=J}}async function DQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:N,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:B,chatOnlyMode:V,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",D=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||D;if(!J)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(A?.chat_jid===(A?.root_chat_jid||A?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let d=`@${A?.agent_name||J}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!E(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await N(J),await Promise.allSettled([K?.(),G?.()]);let o=A?.root_chat_jid||"web:default";X?.("Branch pruned",`${d} has been archived.`,"info",3000);let e=B4(B,o,{chatOnly:V});return O?.(e),!0}catch(o){let e=o instanceof Error?o.message:String(o||"Could not prune branch.");return X?.("Could not prune branch",e||"Could not prune branch.","warning",5000),!1}}async function EQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:N,chatOnlyMode:K,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let B=Q.find((J)=>J?.chat_jid===X)||null,V=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let O=V?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():X,k=v2(B?.agent_name,O?.agent_name,E);q?.("Branch restored",k,"info",4200);let D=B4(N,E,{chatOnly:K});return G?.(D),!0}catch(B){let V=B instanceof Error?B.message:String(B||"Could not restore branch.");return q?.("Could not restore branch",V||"Could not restore branch.","warning",5000),!1}}async function kQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let N=await j($);if(q())return!1;let K=N?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=B4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(N){if(q())return!1;return Q?.({status:"error",message:s5(N)}),!1}}async function MQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:N,baseHref:K}=_;try{let X=(await Q($))?.branch,B=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!B)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let V=X?.agent_name?`@${X.agent_name}`:B;q?.("New branch created",`Switched to ${V}.`,"info",2500);let O=B4(K,B,{chatOnly:j});return N?.(O),!0}catch(G){return q?.("Could not create branch",s5(G),"warning",5000),!1}}async function IQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:N,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let B=a7(X);if(!B)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let V=T$(B);if(!V)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;P$(V,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(X),E=s7(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:O});return C$(V,E),N?.(X),!0}catch(O){x$(V);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function TQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:N,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:X,baseHref:B}=_;if(!$||j)return!1;let V=r7(Q);if(!V)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(V.mode==="tab"){let E=o7(B,Q,{chatOnly:!0});if(!window.open(E,V.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=T$(V);if(!O)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;P$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,D=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let A=await q?.();K?.(Array.isArray(A?.chats)?A.chats:[])}catch{}try{let A=await N?.(Z);G?.(Array.isArray(A?.chats)?A.chats:[])}catch{}let J=B4(B,D,{chatOnly:!0});return C$(O,J),!0}catch(E){return x$(O),X?.("Could not open branch window",s5(E),"error",5000),!1}}function G6(_){return _?{..._}:{text:"",totalLines:0}}function PQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function EK(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function kK(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function CQ(_){return{agentStatus:_.agentStatus,agentDraft:G6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:G6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:PQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:EK(_.silentRecovery)}}function xQ(_){let $=_.snapshot||kK(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(G6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(G6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(PQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function N8(_){return typeof _==="string"}function SQ(_){return typeof _==="string"&&_.trim().length>0}function S3(_){if(!Array.isArray(_))return[];return _.filter(($)=>SQ($?.chat_jid)&&SQ($?.agent_name))}function yQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>N8($?.chat_jid)&&N8($?.agent_name))}function RQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(N8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!N8(q?.chat_jid))return q;let N=Q.get(q.chat_jid);return N?{...q,...N,is_active:N.is_active??q.is_active}:q}),Y=N8(j)?j:"";return Z.sort((q,N)=>{if(q.chat_jid===Y&&N.chat_jid!==Y)return-1;if(N.chat_jid===Y&&q.chat_jid!==Y)return 1;let K=Boolean(q.archived_at),G=Boolean(N.archived_at);if(K!==G)return K?1:-1;if(Boolean(q.is_active)!==Boolean(N.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(N.chat_jid))}),Z}function y3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function wQ(_,$){let j=new Map(_),Q=y3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function uQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=y3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function fQ(_){if(_?.options?.remove)return!0;return y3(_)?.state!=="running"}function R3(_,$){return`${_}:${$}`}function vQ(_,$,j){let Q=R3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function bQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function w3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function gQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function MK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function mQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!MK(Z));return Q.length===_.length?_:Q}function hQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function pQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function a4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function cQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function lQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function G8(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=a4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function u3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function IK(_,$){let j=U_(_);return Boolean(_&&j===$)}function I5(_,$,j){if(!IK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function nQ(_,$){return{..._,openedAt:$}}function dQ(_){let $=U_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function iQ(_,$,j){let Q=U7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=U_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=U_(_),q=Boolean(Z&&Y&&Z===Y),N={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:N,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function rQ(_,$){if(!_||_?.source!=="live")return _||null;let j=U_($),Q=U_(_);if(j&&Q&&j!==Q)return _;return null}function oQ(_,$,j){return I5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function f3(_,$,j){if(j.errorMessage)return I5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return I5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function sQ(_,$,j){return I5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function aQ(_,$,j){return I5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function tQ(_,$,j){return I5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function S4(_){return _.status==="fulfilled"?_.value:null}function K6(_){return Math.max(0,Math.min(100,_))}function eQ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((D)=>D?.data?.is_bot_message).length,Z=$.filter((D)=>!D?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,N=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,B=_.modelsPayload?.current??_.activeModel??null,V=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,O=_.modelsPayload?.supports_thinking??_.supportsThinking,E=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),k=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:N},agent:{status:E,phase:k,running:Boolean(_.isAgentTurnActive)},model:{current:B,thinkingLevel:V,supportsThinking:Boolean(O)},context:{tokens:G,contextWindow:X,percent:K},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:K6(Math.round(K))},{key:"queue",label:"Queue",value:K6(Y*18)},{key:"activeChats",label:"Active chats",value:K6(q*12)},{key:"posts",label:"Timeline load",value:K6($.length*5)}]}}function _Z(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function $Z(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function jZ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function QZ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function ZZ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function YZ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}var qZ=UQ(),NZ=u6,GZ=v6,TK=g6,KZ=l6,XZ=n6,v3=m6,b3=$_(o1,"getAgentContext",null),PK=$_(o1,"getAutoresearchStatus",null),CK=$_(o1,"stopAutoresearch",{status:"ok"}),xK=$_(o1,"dismissAutoresearch",{status:"ok"}),BZ=$_(o1,"getAgentModels",{current:null,models:[]}),VZ=$_(o1,"getActiveChatAgents",{chats:[]}),X6=$_(o1,"getChatBranches",{chats:[]}),SK=$_(o1,"renameChatBranch",null),yK=$_(o1,"pruneChatBranch",null),RK=$_(o1,"restoreChatBranch",null),WZ=$_(o1,"getAgentQueueState",{count:0}),wK=$_(o1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),uK=$_(o1,"removeAgentQueueItem",{removed:!1}),fK=$_(o1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});l0.register(A$);l0.register(o$);l0.register(r$);l0.register(s$);l0.register(a$);l0.register(t$);l0.register(_3);l0.register($3);l0.register(Q3);l0.register(q3);l0.register(N3);l0.register(d$);D$();l0.register(M$);l0.register(I$);function vK({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:N,branchLoaderSourceChatJid:K}=R0(()=>HQ(_),[_]),[G,X]=m("disconnected"),[B,V]=m(()=>X4()),[O,E]=m(null),[k,D]=m(null),[J,A]=m(!1),[M,d]=m("current"),[h,o]=m([]),[e,R]=m([]),[S,H]=m(null),{agentStatus:x,setAgentStatus:p,agentDraft:Z0,setAgentDraft:n,agentPlan:$0,setAgentPlan:_0,agentThought:q0,setAgentThought:G0,pendingRequest:X0,setPendingRequest:z0,currentTurnId:A0,setCurrentTurnId:D0,steerQueuedTurnId:n0,setSteerQueuedTurnId:C0,lastAgentEventRef:M0,lastSilenceNoticeRef:d0,isAgentRunningRef:i0,draftBufferRef:v0,thoughtBufferRef:o0,pendingRequestRef:b0,stalledPostIdRef:e0,currentTurnIdRef:H0,steerQueuedTurnIdRef:m0,thoughtExpandedRef:_1,draftExpandedRef:j1}=xj(),[j_,J1]=m({}),[a0,v1]=m(null),[D1,Q1]=m(null),[g0,P1]=m(!1),[E1,a]=m(null),[B0,U0]=m([]),[N0,x0]=m([]),[S0,w0]=m(null),[k0,y0]=m(()=>new Map),[c0,O0]=m(()=>new Set),[f0,J0]=m([]),[Q0,y]=m(!1),[t,L0]=m(()=>zQ()),[E0,u0]=m(null),Z1=P(new Set),O1=R0(()=>B0.find((W)=>W?.chat_jid===j)||null,[B0,j]),q1=R0(()=>N0.find((W)=>W?.chat_jid===j)||O1||null,[O1,N0,j]),b1=q1?.root_chat_jid||O1?.root_chat_jid||j,_4=FQ(M),[G_,s1]=m(()=>({status:N?"running":"idle",message:N?"Preparing a new chat branch…":""})),K_=f0.length,Q_=P(new Set),t0=P([]),l1=P(new Set),$4=P(0),S_=P({inFlight:!1,lastAttemptAt:0,turnId:null});Q_.current=new Set(f0.map((W)=>W.row_id)),t0.current=f0;let{notificationsEnabled:t4,notificationPermission:y4,toggleNotifications:w1,notify:X_}=kj(),[C1,A1]=m(()=>new Set),[N1,y_]=m(()=>L5("workspaceOpen",!0)),R_=P(null),{editorOpen:G1,tabStripTabs:Z_,tabStripActiveId:h0,previewTabs:M1,tabPaneOverrides:z_,openEditor:a1,closeEditor:R4,handleTabClose:l_,handleTabActivate:w4,handleTabCloseOthers:n_,handleTabCloseAll:e4,handleTabTogglePin:d_,handleTabTogglePreview:w_,handleTabEditSource:T5,revealInExplorer:P5}=yj({onTabClosed:(W)=>R_.current?.(W)}),K1=P(null),x1=P(null),_5=P(null),H_=P(null),t1=l0.getDockPanes().length>0,[g1,I1]=m(!1),u1=C(()=>I1((W)=>!W),[]),U1=C(()=>{a1(r4,{label:"Terminal"})},[a1]),J_=C(()=>{a1(L4,{label:"VNC"})},[a1]),O_=R0(()=>qQ(Z_,h0),[h0,Z_]),A_=R0(()=>NQ(z_,h0),[z_,h0]),i_=R0(()=>GQ(q,O_,Y),[O_,q,Y]),e1=R0(()=>KQ(Z_,M1,h0),[M1,h0,Z_]),n1=R0(()=>XQ(Y,L4),[Y]),D_=R0(()=>BQ(Y,r4,e1,n1),[n1,e1,Y]),j4=VQ(Z,Q,G1,t1,g1),[F1,r_]=m(!1),u4=P(!1),f4=C(()=>{if(!G1||Q)return;if(u4.current=g1,g1)I1(!1);r_(!0)},[G1,Q,g1]),E_=C(()=>{if(!F1)return;if(r_(!1),u4.current)I1(!0),u4.current=!1},[F1]),v4=C(()=>{if(F1)E_();else f4()},[F1,f4,E_]);g(()=>{if(F1&&!G1)E_()},[F1,G1,E_]),g(()=>{if(!Z||!Y)return;if(r0.getActiveId()===Y)return;a1(Y,q?{label:q}:void 0)},[a1,q,Z,Y]),g(()=>{let W=K1.current;if(!W)return;if(x1.current)x1.current.dispose(),x1.current=null;let U=h0;if(!U)return;let T={path:U,mode:"edit"},v=(A_?l0.get(A_):null)||l0.resolve(T)||l0.get("editor");if(!v){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=v.mount(W,T);x1.current=b,b.onDirtyChange?.((K0)=>{r0.setDirty(U,K0)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{R4()});let s=r0.getViewState(U);if(s&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(s));if(typeof b.onViewStateChange==="function")b.onViewStateChange((K0)=>{r0.saveViewState(U,K0)});return requestAnimationFrame(()=>b.focus()),()=>{if(x1.current===b)b.dispose(),x1.current=null}},[h0,A_,R4]);let $5=C(async(W)=>{let U=typeof h0==="string"?h0.trim():"",T=x1.current;if(!U||!T?.setContent)return;if(typeof T.isDirty==="function"&&T.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((b)=>{let s=Array.isArray(b?.changed_paths)?b.changed_paths.map((l)=>typeof l==="string"?l.trim():"").filter(Boolean):[];if(s.length>0)return s.some((l)=>l==="."||l===U);let K0=typeof b?.path==="string"?b.path.trim():"";return!K0||K0==="."||K0===U}):!0))return;try{let b=await h5(U,1e6,"edit"),s=typeof b?.text==="string"?b.text:"",K0=typeof b?.mtime==="string"&&b.mtime.trim()?b.mtime.trim():new Date().toISOString();T.setContent(s,K0)}catch(b){console.warn("[workspace_update] Failed to refresh active pane:",b)}},[h0]);g(()=>{let W=_5.current;if(H_.current)H_.current.dispose(),H_.current=null;if(!W||!t1||!g1)return;let U=l0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let T=U.mount(W,{mode:"view"});return H_.current=T,requestAnimationFrame(()=>T.focus?.()),()=>{if(H_.current===T)T.dispose(),H_.current=null}},[t1,g1]);let[u_,f_]=m({name:"You",avatar_url:null,avatar_background:null}),U4=P(null),v_=P(!1),b4=P(!1),b_=P(!1),k_=P(null),k1=P(j),F4=P(new Map),z4=P(j),g4=P(0),V1=P(0),H4=P({}),j5=P({name:null,avatar_url:null}),f1=P({currentHashtag:null,searchQuery:null,searchOpen:!1}),Y_=P(null),o_=P(null),m4=P(0),Q4=P(0),J4=P(0),Z4=P(null),M_=P(null),B_=P(null),O4=P(null),h4=P(0),I_=P({title:null,avatarBase:null}),z=P(null),I=P(!1),[w,u]=m(!1),r=P(0),[Y0,V0]=m(!1),[W0,j0]=m(""),T0=R0(()=>w8(W0,q1?.agent_name||""),[q1?.agent_name,W0]),S1=P(null),__=C(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);vj(30000),g(()=>{if(!Y0)return;requestAnimationFrame(()=>{if(Y0)S1.current?.focus(),S1.current?.select?.()})},[Y0]),g(()=>{return a2()},[]),g(()=>{return $Q(V)},[]),g(()=>{Y1("workspaceOpen",String(N1))},[N1]),g(()=>{return oj()},[]),g(()=>{return()=>{__()}},[__]),g(()=>{if(!t){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),g(()=>{H4.current=j_||{}},[j_]),g(()=>{k1.current=j},[j]),g(()=>{j5.current=u_||{name:"You",avatar_url:null,avatar_background:null}},[u_]);let m1=C((W,U,T=null)=>{if(typeof document>"u")return;let v=(W||"").trim()||"PiClaw";if(I_.current.title!==v){document.title=v;let F0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(F0&&F0.getAttribute("content")!==v)F0.setAttribute("content",v);I_.current.title=v}let b=document.getElementById("dynamic-favicon");if(!b)return;let s=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",K0=U||s,l=U?`${K0}|${T||""}`:K0;if(I_.current.avatarBase!==l){let F0=U?`${K0}${K0.includes("?")?"&":"?"}v=${T||Date.now()}`:K0;b.setAttribute("href",F0),I_.current.avatarBase=l}},[]),C5=C((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=C((W)=>{o((U)=>U.filter((T)=>T!==W))},[]);R_.current=F;let f=C(()=>{o([])},[]),i=C((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],T=new Set;for(let v of W){if(typeof v!=="string"||!v.trim())continue;let b=v.trim();if(T.has(b))continue;T.add(b),U.push(b)}o(U)},[]),c=C((W,U=null,T="info",v=3000)=>{__(),H({title:W,detail:U||null,kind:T||"info"}),z.current=setTimeout(()=>{H((b)=>b?.title===W?null:b)},v)},[__]),I0=C((W)=>{let U=cj(W,{editorOpen:G1,resolvePane:(T)=>l0.resolve(T)});if(U.kind==="open"){a1(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[G1,a1,c]),z1=C(()=>{let W=h0;if(W)C5(W)},[h0,C5]),T1=C((W)=>{if(!W)return;R((U)=>U.includes(W)?U:[...U,W])},[]),y1=C(async(W,U=null)=>{let T=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},v=document.getElementById("post-"+W);if(v){T(v);return}try{let b=typeof U==="string"&&U.trim()?U.trim():j,K0=(await f6(W,b))?.thread?.[0];if(!K0)return;p1((l)=>{if(!l)return[K0];if(l.some((F0)=>F0.id===K0.id))return l;return[...l,K0]}),requestAnimationFrame(()=>{setTimeout(()=>{let l=document.getElementById("post-"+W);if(l)T(l)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",W,b)}},[j]),Y4=C((W)=>{R((U)=>U.filter((T)=>T!==W))},[]),p4=C(()=>{R([])},[]),Q5=C((W)=>{if(!Array.isArray(W)){R([]);return}let U=[],T=new Set;for(let v of W){if(typeof v!=="string"||!v.trim())continue;let b=v.trim();if(T.has(b))continue;T.add(b),U.push(b)}R(U)},[]),Z5=C((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),q_=C((W={})=>{let U=Date.now();if(M0.current=U,W.running)i0.current=!0,y((T)=>T?T:!0);if(W.clearSilence)d0.current=0},[y]),h1=C(()=>{if(O4.current)clearTimeout(O4.current),O4.current=null;h4.current=0},[]);g(()=>()=>{h1()},[h1]);let Y5=C(()=>{h1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:T,...v}=W;return v})},[h1]),A4=C((W)=>{if(!W)return;h1();let U=Date.now();h4.current=U,p({type:W.type||"active",last_activity:!0}),O4.current=setTimeout(()=>{if(h4.current!==U)return;p((T)=>{if(!T||!(T.last_activity||T.lastActivity))return T;return null})},wj)},[h1]),W1=C(()=>{i0.current=!1,y(!1),M0.current=null,d0.current=0,v0.current="",o0.current="",b0.current=null,M_.current=null,H0.current=null,m0.current=null,k_.current=null,S_.current={inFlight:!1,lastAttemptAt:0,turnId:null},h1(),D0(null),C0(null),_1.current=!1,j1.current=!1},[h1,D0,C0,y]),s_=C((W)=>{if(!lj({remainingQueueCount:W,currentTurnId:H0.current,isAgentTurnActive:Q0}))return;m0.current=null,C0(null)},[Q0,C0]),q5=C(()=>CQ({agentStatus:x,agentDraft:Z0,agentPlan:$0,agentThought:q0,pendingRequest:X0,currentTurnId:A0,steerQueuedTurnId:n0,isAgentTurnActive:Q0,followupQueueItems:f0,activeModel:a0,activeThinkingLevel:D1,supportsThinking:g0,activeModelUsage:E1,contextUsage:S0,isAgentRunning:i0.current,wasAgentActive:b_.current,draftBuffer:v0.current,thoughtBuffer:o0.current,lastAgentEvent:M0.current,lastSilenceNotice:d0.current,lastAgentResponse:M_.current,currentTurnIdRef:H0.current,steerQueuedTurnIdRef:m0.current,thoughtExpanded:_1.current,draftExpanded:j1.current,agentStatusRef:k_.current,silentRecovery:S_.current}),[a0,E1,D1,Z0,$0,x,q0,S0,A0,f0,Q0,X0,n0,g0]),K8=C((W)=>{xQ({snapshot:W,clearLastActivityTimer:h1,refs:{isAgentRunningRef:i0,wasAgentActiveRef:b_,lastAgentEventRef:M0,lastSilenceNoticeRef:d0,draftBufferRef:v0,thoughtBufferRef:o0,pendingRequestRef:b0,lastAgentResponseRef:M_,currentTurnIdRef:H0,steerQueuedTurnIdRef:m0,agentStatusRef:k_,silentRecoveryRef:S_,thoughtExpandedRef:_1,draftExpandedRef:j1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:n,setAgentPlan:_0,setAgentThought:G0,setPendingRequest:z0,setCurrentTurnId:D0,setSteerQueuedTurnId:C0,setFollowupQueueItems:J0,setActiveModel:v1,setActiveThinkingLevel:Q1,setSupportsThinking:P1,setActiveModelUsage:a,setContextUsage:w0}})},[h1,D0,J0,y,C0]),T_=C((W)=>{if(!W)return;if(H0.current===W)return;H0.current=W,S_.current={inFlight:!1,lastAttemptAt:0,turnId:W},D0(W),m0.current=null,C0(null),v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),b0.current=null,M_.current=null,_1.current=!1,j1.current=!1},[D0,C0]),D4=C((W)=>{if(typeof document<"u"){let F0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&F0)return}let U=M_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let T=U.post;if(T.id&&Z4.current===T.id)return;let v=String(T?.data?.content||"").trim();if(!v)return;Z4.current=T.id||Z4.current,M_.current=null;let b=v.replace(/\s+/g," ").slice(0,200),s=H4.current||{},l=(T?.data?.agent_id?s[T.data.agent_id]:null)?.name||"Pi";X_(l,b)},[X_]),V_=C(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let T=H0.current;if(W==="thought"){if(_1.current=U,T)try{await XZ(T,"thought",U)}catch(v){console.warn("Failed to update thought visibility:",v)}if(!U)return;try{let v=T?await KZ(T,"thought"):null;if(v?.text)o0.current=v.text;G0((b)=>({...b||{text:"",totalLines:0},fullText:o0.current||b?.fullText||"",totalLines:Number.isFinite(v?.total_lines)?v.total_lines:b?.totalLines||0}))}catch(v){console.warn("Failed to fetch full thought:",v)}return}if(j1.current=U,T)try{await XZ(T,"draft",U)}catch(v){console.warn("Failed to update draft visibility:",v)}if(!U)return;try{let v=T?await KZ(T,"draft"):null;if(v?.text)v0.current=v.text;n((b)=>({...b||{text:"",totalLines:0},fullText:v0.current||b?.fullText||"",totalLines:Number.isFinite(v?.total_lines)?v.total_lines:b?.totalLines||0}))}catch(v){console.warn("Failed to fetch full draft:",v)}},[]),E4=P(null),N5=C(()=>{let W=Y_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);E4.current=N5;let B6=C((W)=>{let U=Y_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:T,searchQuery:v,searchOpen:b}=f1.current||{},s=!((v||b)&&!T),K0=s?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let l=Y_.current;if(!l)return;if(s){let F0=Math.max(l.scrollHeight-K0,0);l.scrollTop=F0}else{let F0=Math.max(l.scrollHeight-l.clientHeight,0),L1=Math.min(K0,F0);l.scrollTop=L1}})},[]),x5=C((W)=>{let U=Y_.current;if(!U||typeof W!=="function"){W?.();return}let T=U.scrollTop;W(),requestAnimationFrame(()=>{let v=Y_.current;if(!v)return;let b=Math.max(v.scrollHeight-v.clientHeight,0);v.scrollTop=Math.min(T,b)})},[]),g3=C((W)=>mQ(W,Q_.current),[]),{posts:X8,setPosts:p1,hasMore:LZ,setHasMore:B8,hasMoreRef:m3,loadPosts:g_,refreshTimeline:d1,loadMore:UZ,loadMoreRef:V6}=Mj({preserveTimelineScroll:B6,preserveTimelineScrollTop:x5,chatJid:j}),G5=R0(()=>g3(X8),[X8,f0,g3]),V8=C(()=>{let W=e0.current;if(!W)return;p1((U)=>U?U.filter((T)=>T.id!==W):U),e0.current=null},[p1]),{handleSplitterMouseDown:FZ,handleSplitterTouchStart:zZ,handleEditorSplitterMouseDown:HZ,handleEditorSplitterTouchStart:JZ,handleDockSplitterMouseDown:OZ,handleDockSplitterTouchStart:AZ}=Sj({appShellRef:o_,sidebarWidthRef:m4,editorWidthRef:Q4,dockHeightRef:J4}),h3=C(()=>{if(!i0.current)return;i0.current=!1,d0.current=0,M0.current=null,H0.current=null,D0(null),_1.current=!1,j1.current=!1;let W=(v0.current||"").trim();if(v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),b0.current=null,M_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let T=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,v=Date.now(),b=new Date().toISOString(),s={id:v,timestamp:b,data:{type:"agent_response",content:T,agent_id:"default",is_local_stall:!0}};e0.current=v,p1((K0)=>K0?Y8([...K0,s]):[s]),E4.current?.(),p(null)},[D0]);g(()=>{f1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let $1=C(()=>{let W=++$4.current,U=j;WZ(U).then((T)=>{if(W!==$4.current)return;if(k1.current!==U)return;let v=l1.current,b=hQ(T?.items,v);if(b.length){J0((s)=>{if(pQ(s,b))return s;return b});return}v.clear(),s_(0),J0((s)=>s.length===0?s:[])}).catch(()=>{if(W!==$4.current)return;if(k1.current!==U)return;J0((T)=>T.length===0?T:[])})},[s_,j,J0]),i1=C(async()=>{let W=j;try{let U=await b3(W);if(k1.current!==W)return;if(U)w0(U)}catch(U){if(k1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),m_=C(async()=>{let W=j;try{let U=await PK(W);if(k1.current!==W)return;y0((T)=>wQ(T,U)),O0((T)=>w3(T,"autoresearch"))}catch(U){if(k1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),P_=C(async()=>{let W=j;try{let U=await v3(W);if(k1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(b_.current){let{currentHashtag:K0,searchQuery:l,searchOpen:F0}=f1.current||{};if(!K0&&!l&&!F0)d1()}return b_.current=!1,W1(),k_.current=null,p(null),n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),b0.current=null,U??null}b_.current=!0;let T=U.data;k_.current=T;let v=k3(T);if(v)T_(v);q_({running:!0,clearSilence:!0}),Y5(),p(T);let b=q8(U.thought);if(b)G0((K0)=>{if(M3(K0,b.text))return K0;return o0.current=b.text,b});let s=q8(U.draft);if(s)n((K0)=>{if(M3(K0,s.text))return K0;return v0.current=s.text,s});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[W1,Y5,q_,d1,T_]),W6=C(async()=>{if(!i0.current)return null;if(b0.current)return null;let W=H0.current||null,U=S_.current,T=Date.now();if(U.inFlight)return null;if(U.turnId===W&&T-U.lastAttemptAt<D3)return null;U.inFlight=!0,U.lastAttemptAt=T,U.turnId=W;try{let{currentHashtag:v,searchQuery:b,searchOpen:s}=f1.current||{};if(!v&&!b&&!s)await d1();return await $1(),await P_()}finally{U.inFlight=!1}},[P_,$1,d1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(A3/2))),U=setInterval(()=>{if(!i0.current)return;if(b0.current)return;let T=M0.current;if(!T)return;let v=Date.now(),b=v-T,s=N4(k_.current);if(b>=Rj){if(!s)p({type:"waiting",title:"Re-syncing after a quiet period…"});W6();return}if(b>=A3){if(v-d0.current>=D3){if(!s){let K0=Math.floor(b/1000);p({type:"waiting",title:`Waiting for model… No events for ${K0}s`})}d0.current=v,W6()}}},W);return()=>clearInterval(U)},[W6]);let p3=C((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!qZ||U===qZ)return!1;if(U4.current===U)return!0;U4.current=U;let T=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!r0.hasUnsaved()&&!T&&!i0.current&&!b0.current&&!v_.current)return v_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{v_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[i0,b0,c]),DZ=C((W)=>{if(X(W),W!=="connected"){p(null),n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),b0.current=null,W1();return}if(!b4.current){b4.current=!0;let{currentHashtag:b,searchQuery:s,searchOpen:K0}=f1.current||{};if(!b&&!s&&!K0)d1();P_(),$1(),i1();return}let{currentHashtag:U,searchQuery:T,searchOpen:v}=f1.current;if(!U&&!T&&!v)d1();P_(),$1(),i1()},[W1,d1,P_,$1,i1]),EZ=C(async(W)=>{E(W),p1(null),await g_(W)},[g_]),kZ=C(async()=>{E(null),D(null),p1(null),await g_()},[g_]),MZ=C(async(W,U=M)=>{if(!W||!W.trim())return;let T=U==="root"||U==="all"?U:"current";d(T),D(W.trim()),E(null),p1(null);try{let v=await NZ(W.trim(),50,0,j,T,b1);p1(v.results),B8(!1)}catch(v){console.error("Failed to search:",v),p1([])}},[j,b1,M]),IZ=C(()=>{A(!0),D(null),E(null),d("current"),p1([])},[]),TZ=C(()=>{A(!1),D(null),g_()},[g_]),gK=C(()=>{},[]),W8=!O&&!k&&!J,PZ=C(async(W)=>{if(!W)return;let U=W.id,T=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,v=G5?.filter((s)=>s?.data?.thread_id===U&&s?.id!==U).length||0;if(v>0){if(!window.confirm(`Delete this message and its ${v} replies?`))return}let b=(s)=>{if(!s.length)return;A1((l)=>{let F0=new Set(l);return s.forEach((L1)=>F0.add(L1)),F0}),setTimeout(()=>{if(x5(()=>{p1((l)=>l?l.filter((F0)=>!s.includes(F0.id)):l)}),A1((l)=>{let F0=new Set(l);return s.forEach((L1)=>F0.delete(L1)),F0}),m3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let s=await GZ(U,v>0,T);if(s?.ids?.length)b(s.ids)}catch(s){let K0=s?.message||"";if(v===0&&K0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let F0=await GZ(U,!0,T);if(F0?.ids?.length)b(F0.ids);return}console.error("Failed to delete post:",s),alert(`Failed to delete message: ${K0}`)}},[j,G5,x5]),c3=C(async()=>{try{let W=await TK();J1(uj(W));let U=W?.user||{};f_((v)=>{let b=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",s=typeof U.avatar_url==="string"?U.avatar_url.trim():null,K0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(v.name===b&&v.avatar_url===s&&v.avatar_background===K0)return v;return{name:b,avatar_url:s,avatar_background:K0}});let T=(W?.agents||[]).find((v)=>v.id==="default");m1(T?.name,T?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[m1]);g(()=>{c3();let W=U5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(m4.current=U,o_.current)o_.current.style.setProperty("--sidebar-width",`${U}px`)},[c3]);let S5=Q0||x!==null,l3=C((W)=>{let U=dj(W,W?.agent_id?H4.current?.[W.agent_id]||{id:W.agent_id}:null);if(!U)return;if(J1((T)=>{let b={...T[U.agentId]||{id:U.agentId}};if(U.nameChanged)b.name=U.resolvedName;if(U.avatarChanged)b.avatar_url=U.resolvedAvatar;return{...T,[U.agentId]:b}}),U.agentId==="default")m1(U.resolvedName,U.resolvedAvatar,U.avatarChanged?Date.now():null)},[m1]),n3=C((W)=>{f_((U)=>ij(U,W))},[]),L6=C((W)=>{let U=T3(W);if(U.hasModel)v1(U.model);if(U.hasThinkingLevel)Q1(U.thinkingLevel);if(U.hasSupportsThinking)P1(U.supportsThinking);if(U.hasProviderUsage)a(U.providerUsage)},[]),y5=C(()=>{let W=j;BZ(W).then((U)=>{if(k1.current!==W)return;if(U)L6(U)}).catch(()=>{})},[L6,j]),c1=C(()=>{let W=j;Promise.all([VZ().catch(()=>({chats:[]})),X6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([U,T])=>{if(k1.current!==W)return;let v=S3(U?.chats),b=S3(T?.chats);U0(RQ(v,b,W))}).catch(()=>{if(k1.current!==W)return;U0([])})},[j]),r1=C(()=>{X6(b1).then((W)=>{x0(yQ(W?.chats))}).catch(()=>{})},[b1]),d3=C((W)=>{let U=G8(t0.current,W);if(!U)return;let{rowId:T}=U;l1.current.add(T),J0((v)=>a4(v,T).items),wK(T,I3(j)).then(()=>{$1()}).catch((v)=>{console.warn("[queue] Failed to steer queued item:",v);let b=u3("steer");c(b.title,b.detail,"warning"),l1.current.delete(T),$1()})},[j,$1,J0,c]),i3=C((W)=>{let U=G8(t0.current,W);if(!U)return;let{rowId:T}=U;l1.current.add(T),s_(U.remainingQueueCount),J0((v)=>a4(v,T).items),uK(T,I3(j)).then(()=>{$1()}).catch((v)=>{console.warn("[queue] Failed to remove queued item:",v);let b=u3("remove");c(b.title,b.detail,"warning"),l1.current.delete(T),$1()})},[s_,j,$1,J0,c]),R5=C((W)=>{if(!W||typeof W!=="object")return;if(c1(),r1(),i1(),m_(),lQ(W))$1()},[c1,m_,r1,i1,$1]),CZ=C(async(W,U)=>{let T=typeof W?.key==="string"?W.key:"",v=typeof U?.key==="string"?U.key:"",b=R3(T,v);if(!T||!v)return;O0((s)=>vQ(s,T,v));try{let s=await gQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:CK,dismissAutoresearch:xK,writeClipboard:(K0)=>navigator.clipboard.writeText(K0)});if(s.refreshAutoresearchStatus)m_();if(s.toast)c(s.toast.title,s.toast.detail,s.toast.kind,s.toast.durationMs)}catch(s){c("Panel action failed",s?.message||"Could not complete that action.","warning")}finally{O0((s)=>bQ(s,b))}},[j,m_,c]),U6=C(()=>{if(B_.current)B_.current.abort(),B_.current=null;L0(null)},[]),L8=C(async(W)=>{let U=String(W||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(B_.current)B_.current.abort();let T=new AbortController;B_.current=T,L0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let v=await fK(U,{signal:T.signal,chatJid:N7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,s)=>{if(b==="side_prompt_start")L0((K0)=>K0?{...K0,status:"running"}:K0)},onThinkingDelta:(b)=>{L0((s)=>s?{...s,thinking:`${s.thinking||""}${b||""}`}:s)},onTextDelta:(b)=>{L0((s)=>s?{...s,answer:`${s.answer||""}${b||""}`}:s)}});if(B_.current!==T)return!0;L0((b)=>b?{...b,answer:v?.result||b.answer||"",thinking:v?.thinking||b.thinking||"",model:v?.model||null,status:"success",error:null}:b)}catch(v){if(T.signal.aborted)return!0;L0((b)=>b?{...b,status:"error",error:v?.payload?.error||v?.message||"BTW request failed."}:b)}finally{if(B_.current===T)B_.current=null}return!0},[j,c]),xZ=C(async({content:W})=>{let U=q7(W);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return U6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await L8(U.question),!0;return!1},[U6,L8,c]),SZ=C(()=>{if(t?.question)L8(t.question)},[t,L8]),yZ=C(async()=>{let W=X7(t);if(!W)return;try{let U=await l4("default",W,null,[],S5?"queue":null,j);R5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[t,R5,S5,c]),r3=C(async(W=null)=>{let[U,T,v,b,s,K0,l]=await Promise.allSettled([v3(j),b3(j),WZ(j),BZ(j),VZ(),X6(b1),c4(20,null,j)]);return eQ({generatedAt:new Date().toISOString(),request:W,currentChatJid:j,currentRootChatJid:b1,statusPayload:S4(U),contextPayload:S4(T),queuePayload:S4(v),modelsPayload:S4(b),activeChatsPayload:S4(s),branchesPayload:S4(K0),timelinePayload:S4(l),rawPosts:X8,activeChatAgents:B0,currentChatBranches:N0,contextUsage:S0,followupQueueItems:t0.current,activeModel:a0,activeThinkingLevel:D1,supportsThinking:g0,isAgentTurnActive:Q0})},[B0,a0,D1,S0,N0,j,b1,Q0,X8,g0]),w5=C(()=>{y5(),c1(),r1(),$1(),i1(),m_()},[y5,c1,r1,$1,i1,m_]);g(()=>{w5();let W=setInterval(()=>{y5(),c1(),r1(),$1()},60000);return()=>clearInterval(W)},[w5,y5,c1,r1,$1]),g(()=>{y0(new Map),O0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;N5()})};if(O)return g_(O),()=>{W=!0};if(k)return NZ(k,50,0,j,M,b1).then((T)=>{if(W)return;p1(T.results),B8(!1)}).catch((T)=>{if(W)return;console.error("Failed to search:",T),p1([]),B8(!1)}),()=>{W=!0};return g_().then(()=>{U()}).catch((T)=>{if(W)return;console.error("Failed to load timeline:",T)}),()=>{W=!0}},[j,O,k,M,b1,g_,N5,B8,p1]),g(()=>{let W=z4.current||j;F4.current.set(W,q5())},[j,q5]),g(()=>{let W=z4.current||j;if(W===j)return;F4.current.set(W,q5()),z4.current=j,l1.current.clear(),K8(F4.current.get(j)||null),$1(),P_(),i1()},[j,P_,i1,$1,K8,q5]);let RZ=C(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:T}=f1.current||{};if(!W&&!U&&!T)d1();w5()},[w5,d1]),o3=C((W,U="streaming")=>{let T=new Date().toISOString();u0((v)=>iQ(v,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:Z1.current,updatedAt:T}))},[j]),F6=C((W,U)=>{let{turnId:T,isCurrentChatEvent:v}=tj(W,U,j);if(v)l3(U),n3(U);if(W==="ui_theme"){t2(U);return}let b=nj(W);if(b.kind==="update"){if(!v)return;if(b.shouldAdoptTurn&&M5(T,H0.current))T_(T);o3(U,b.fallbackStatus||"streaming");return}if(b.kind==="close"){if(!v)return;u0((l)=>rQ(l,U));return}if(W?.startsWith("agent_")&&!ej(W))Y5();if(W==="connected"){if(p3(U?.app_asset_version))return;p(null),n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),b0.current=null,W1();let l=j;v3(l).then((a_)=>{if(k1.current!==l)return;if(!a_||a_.status!=="active"||!a_.data)return;let _2=a_.data,$2=k3(_2);if($2)T_($2);q_({clearSilence:!0}),A4(_2);let O6=q8(a_.thought);if(O6)o0.current=O6.text,G0(O6);let A6=q8(a_.draft);if(A6)v0.current=A6.text,n(A6)}).catch((a_)=>{console.warn("Failed to fetch agent status:",a_)});let{currentHashtag:F0,searchQuery:L1,searchOpen:J6}=f1.current||{};if(!F0&&!L1&&!J6)d1();w5();return}if(W==="agent_status"){if(!v){if(U?.type==="done"||U?.type==="error")c1(),r1();return}if(U.type==="done"||U.type==="error"){if(s4(T,H0.current))return;if(U.type==="done"){D4(T||H0.current);let{currentHashtag:l,searchQuery:F0,searchOpen:L1}=f1.current||{};if(!l&&!F0&&!L1)d1();if(U.context_usage)w0(U.context_usage)}if(i1(),b_.current=!1,W1(),l1.current.clear(),c1(),$1(),n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(T)T_(T);if(q_({running:!0,clearSilence:!0}),U.type==="thinking")v0.current="",o0.current="",n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0});k_.current=U,p((l)=>{if(l&&l.type===U.type&&l.title===U.title)return l;return U})}return}if(W==="agent_steer_queued"){if(!v)return;if(s4(T,H0.current))return;let l=pj(T,H0.current);if(!l)return;m0.current=l,C0(l);return}if(W==="agent_followup_queued"){if(!v)return;J0((l)=>cQ(l,U)),$1();return}if(W==="agent_followup_consumed"){if(!v)return;let l=G8(t0.current,U);if(l)s_(l.remainingQueueCount),J0((a_)=>a4(a_,l.rowId).items);$1();let{currentHashtag:F0,searchQuery:L1,searchOpen:J6}=f1.current||{};if(!F0&&!L1&&!J6)d1();return}if(W==="agent_followup_removed"){if(!v)return;let l=G8(t0.current,U);if(l)l1.current.add(l.rowId),s_(l.remainingQueueCount),J0((F0)=>a4(F0,l.rowId).items);$1();return}if(W==="agent_draft_delta"){if(!v)return;if(s4(T,H0.current))return;if(M5(T,H0.current))T_(T);q_({running:!0,clearSilence:!0}),v0.current=mj(v0.current,U);let l=Date.now();if(!g4.current||l-g4.current>=100){g4.current=l;let F0=v0.current;if(j1.current)n((L1)=>E3(F0,L1));else n(q6(F0,null))}return}if(W==="agent_draft"){if(!v)return;if(s4(T,H0.current))return;if(M5(T,H0.current))T_(T);q_({running:!0,clearSilence:!0});let l=U.text||"",F0=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")_0((L1)=>gj(L1,l,F0));else if(!j1.current)v0.current=l,n(q6(l,U.total_lines));return}if(W==="agent_thought_delta"){if(!v)return;if(s4(T,H0.current))return;if(M5(T,H0.current))T_(T);q_({running:!0,clearSilence:!0}),o0.current=hj(o0.current,U);let l=Date.now();if(_1.current&&(!V1.current||l-V1.current>=100)){V1.current=l;let F0=o0.current;G0((L1)=>E3(F0,L1))}return}if(W==="agent_thought"){if(!v)return;if(s4(T,H0.current))return;if(M5(T,H0.current))T_(T);q_({running:!0,clearSilence:!0});let l=U.text||"";if(!_1.current)o0.current=l,G0(q6(l,U.total_lines));return}if(W==="model_changed"){if(!v)return;let l=T3(U);if(l.hasModel)v1(l.model);if(l.hasThinkingLevel)Q1(l.thinkingLevel);if(l.hasSupportsThinking)P1(l.supportsThinking);let F0=j;b3(F0).then((L1)=>{if(k1.current!==F0)return;if(L1)w0(L1)}).catch(()=>{});return}let s=sj(W,U,j);if(s.isStatusPanelWidgetEvent){if(s.eventChatJid!==j)return;if(!s.panelKey)return;if(y0((l)=>uQ(l,U)),fQ(U))O0((l)=>w3(l,s.panelKey));P3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));$5(U?.updates);return}if(_Q(W)){if(!v)return;P3(W,U);let l=aj(W,U);if(l)c(l.title,l.detail,l.kind,l.durationMs);return}let K0=W8(f1.current);if(W==="agent_response"){if(!v)return;V8(),M_.current={post:U,turnId:H0.current}}if(Ij(W,v,K0))p1((l)=>Tj(l,U)),E4.current?.();if(W==="interaction_updated"){if(!J3(v,K0))return;p1((l)=>Pj(l,U))}if(W==="interaction_deleted"){if(!J3(v,K0))return;let l=U?.ids||[];if(l.length){if(x5(()=>{p1((F0)=>Cj(F0,l))}),m3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[o3,W1,Y5,j,V6,q_,D4,x5,c1,r1,d1,V8,T_,A4,l3,n3,y5,$1,J0,i1,p3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=F6,W.reset=()=>{V8(),W1(),p(null),n({text:"",totalLines:0}),_0(""),G0({text:"",totalLines:0}),z0(null)},W.finalize=()=>h3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[W1,h3,F6,V8]),Ej({handleSseEvent:F6,handleConnectionStatusChange:DZ,loadPosts:g_,onWake:RZ,chatJid:j}),g(()=>{if(!G5||G5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);y1(U),history.replaceState(null,"",location.pathname+location.search)},[G5,y1]);let z6=x!==null;g(()=>{if(G!=="connected")return;let U=setInterval(()=>{let{currentHashtag:T,searchQuery:v,searchOpen:b}=f1.current||{},s=!T&&!v&&!b;if(z6){if(s)d1();$1(),P_(),i1(),m_()}else{if(s)d1();P_(),i1(),m_()}},z6?15000:60000);return()=>clearInterval(U)},[G,z6,P_,m_,i1,$1,d1]),g(()=>{return jQ(()=>{P_(),i1(),$1(),m_()})},[P_,m_,i1,$1]);let wZ=C(()=>{y_((W)=>!W)},[]),s3=C((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let T=B4(window.location.href,U,{chatOnly:Q});$?.(T)},[Q,j,$]),H6=C(()=>{JQ({hasWindow:typeof window<"u",currentBranchRecord:q1,renameBranchInFlight:I.current,renameBranchLockUntil:r.current,getFormLock:x3,setRenameBranchNameDraft:j0,setIsRenameBranchFormOpen:V0})},[q1]),u5=C(()=>{OQ({setIsRenameBranchFormOpen:V0,setRenameBranchNameDraft:j0})},[]),a3=C(async(W)=>{await AQ({hasWindow:typeof window<"u",currentBranchRecord:q1,nextName:W,openRenameForm:H6,renameBranchInFlightRef:I,renameBranchLockUntilRef:r,getFormLock:x3,setIsRenamingBranch:u,renameChatBranch:SK,refreshActiveChatAgents:c1,refreshCurrentChatBranches:r1,showIntentToast:c,closeRenameForm:u5})},[u5,q1,c1,r1,H6,u,c]),t3=C(async(W=null)=>{await DQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:q1,currentChatBranches:N0,activeChatAgents:B0,pruneChatBranch:yK,refreshActiveChatAgents:c1,refreshCurrentChatBranches:r1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[B0,Q,q1,N0,j,$,c1,r1,c]),uZ=C(async(W)=>{await EQ({targetChatJid:W,restoreChatBranch:RK,currentChatBranches:N0,refreshActiveChatAgents:c1,refreshCurrentChatBranches:r1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,N0,$,c1,r1,c]);g(()=>{if(!N||typeof window>"u")return;let W=!1;return kQ({branchLoaderSourceChatJid:K,forkChatBranch:b5,setBranchLoaderState:s1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[N,K,$]);let fZ=C((W)=>{if(!W||typeof W!=="object")return;let U=U_(W);if(U)Z1.current.delete(U);u0(nQ(W,new Date().toISOString()))},[]),f5=C(()=>{u0((W)=>{let U=dQ(W);if(U.dismissedSessionKey)Z1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),vZ=C((W,U)=>{let T=typeof W?.kind==="string"?W.kind:"",v=U_(U);if(!T||!v)return;if(T==="widget.close"){f5();return}if(T==="widget.submit"){let b=J7(W?.payload),s=O7(W?.payload),K0=new Date().toISOString();if(u0((l)=>oQ(l,v,{kind:T,payload:W?.payload||null,submittedAt:K0,submissionText:b})),!b){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),s)f5();return}(async()=>{try{let l=await l4("default",b,null,[],S5?"queue":null,j);R5(l),u0((L1)=>f3(L1,v,{submittedAt:K0,submissionText:b,queued:l?.queued||null}));let F0=_Z(l?.queued);if(c(F0.title,F0.detail,F0.kind,F0.durationMs),s)f5()}catch(l){u0((L1)=>f3(L1,v,{submittedAt:K0,submissionText:b,errorMessage:l?.message||"Could not send the widget message."}));let F0=$Z(l?.message);c(F0.title,F0.detail,F0.kind,F0.durationMs)}})();return}if(T==="widget.ready"||T==="widget.request_refresh"){let b=new Date().toISOString(),s=jZ(W?.payload||null,U?.runtimeState?.refreshCount);if(u0((K0)=>sQ(K0,v,{kind:T,payload:W?.payload||null,eventAt:b,nextRefreshCount:s.nextRefreshCount,shouldBuildDashboard:s.shouldBuildDashboard})),T==="widget.request_refresh")if(s.shouldBuildDashboard)(async()=>{try{let K0=await r3(W?.payload||null);u0((F0)=>aQ(F0,v,{dashboard:K0,at:new Date().toISOString(),count:s.nextRefreshCount,echo:W?.payload||null}));let l=QZ();c(l.title,l.detail,l.kind,l.durationMs)}catch(K0){u0((F0)=>tQ(F0,v,{errorMessage:K0?.message||"Could not build dashboard.",at:new Date().toISOString(),count:s.nextRefreshCount}));let l=ZZ(K0?.message);c(l.title,l.detail,l.kind,l.durationMs)}})();else{let K0=YZ();c(K0.title,K0.detail,K0.kind,K0.durationMs)}}},[r3,j,f5,R5,S5,c]);g(()=>{Z1.current.clear(),u0(null)},[j]);let bZ=C(async()=>{await MQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:b5,refreshActiveChatAgents:c1,refreshCurrentChatBranches:r1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,c1,r1,c]),U8=C(async(W,U)=>{await IQ({hasWindow:typeof window<"u",isWebAppMode:B,path:W,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(T)=>{let b=(typeof h0==="string"?h0.trim():"")===T?x1.current:T===r4?H_.current:null;if(typeof b?.preparePopoutTransfer==="function")return await b.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(T)=>{let v=r0.get(T);if(v&&!v.dirty){l_(T);return}if(T===r4&&g1)I1(!1)}})},[j,g1,l_,B,c,h0]);g(()=>QQ({openTab:(W,U)=>a1(W,U?{label:U}:void 0),popOutPane:(W,U)=>{U8(W,U)}}),[U8,a1]);let gZ=C(async()=>{await TQ({hasWindow:typeof window<"u",isWebAppMode:B,currentChatJid:j,currentRootChatJid:b1,forkChatBranch:b5,getActiveChatAgents:b6,getChatBranches:X6,setActiveChatAgents:U0,setCurrentChatBranches:x0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,b1,B,c]);g(()=>{if(!G1)return;if(typeof window>"u")return;let W=o_.current;if(!W)return;if(!Q4.current){let U=U5("editorWidth",null),T=m4.current||280;Q4.current=Number.isFinite(U)?U:T}if(W.style.setProperty("--editor-width",`${Q4.current}px`),!J4.current){let U=U5("dockHeight",null);J4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${J4.current}px`)},[G1]),g(()=>{if(!t1||Q)return;return ZQ(u1)},[u1,t1,Q]),g(()=>{if(Q)return;return YQ({toggleZenMode:v4,exitZenMode:E_,zenMode:F1,isZenModeActive:()=>F1})},[v4,E_,F1,Q]);let e3=Boolean(n0&&n0===(x?.turn_id||A0));if(N)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${G_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${G_.message}</p>
                    </div>
                </div>
            </div>
        `;if(Z)return L`
            <div class=${`app-shell pane-popout${G1?" editor-open":""}`} ref=${o_}>
                <div class="editor-pane-container pane-popout-container">
                    ${G1&&!D_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${e1?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${i_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${Z_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${Z_.map((W)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${W.id===h0?" active":""}`}
                                                                onClick=${(U)=>{w4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${h0&&M1.has(h0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{w_(h0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${i_}>${i_}</div>
                                `}
                        </div>
                    `}
                    ${G1?L`<div class="editor-pane-host" ref=${K1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${G1&&h0&&M1.has(h0)&&L`
                        <${H3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${h0}
                            onClose=${()=>w_(h0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${N1?"":" workspace-collapsed"}${G1?" editor-open":""}${Q?" chat-only":""}${F1?" zen-mode":""}`} ref=${o_}>
            ${Y0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)u5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),a3(W0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${S1}
                            value=${W0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";j0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),u5()}}
                            autocomplete="off"
                            placeholder="Handle (letters, numbers, - and _ only)"
                        />
                        <div class=${`rename-branch-help ${T0.kind||"info"}`}>
                            ${T0.message}
                        </div>
                        <div class="rename-branch-actions">
                            <button type="submit" class="compose-model-popup-btn primary" disabled=${w||!T0.canSubmit}>
                                ${w?"Renaming…":"Save"}
                            </button>
                            <button
                                type="button"
                                class="compose-model-popup-btn"
                                onClick=${u5}
                                disabled=${w}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Q&&L`
                <${Hj}
                    onFileSelect=${C5}
                    visible=${N1}
                    active=${N1||G1}
                    onOpenEditor=${a1}
                    onOpenTerminalTab=${U1}
                    onOpenVncTab=${J_}
                    onToggleTerminal=${t1?u1:void 0}
                    terminalVisible=${Boolean(t1&&g1)}
                />
                <button
                    class=${`workspace-toggle-tab${N1?" open":" closed"}`}
                    onClick=${wZ}
                    title=${N1?"Hide workspace":"Show workspace"}
                    aria-label=${N1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${FZ} onTouchStart=${zZ}></div>
            `}
            ${j4&&L`
                <div class="editor-pane-container">
                    ${F1&&L`<div class="zen-hover-zone"></div>`}
                    ${G1&&L`
                        <${Aj}
                            tabs=${Z_}
                            activeId=${h0}
                            onActivate=${w4}
                            onClose=${l_}
                            onCloseOthers=${n_}
                            onCloseAll=${e4}
                            onTogglePin=${d_}
                            onTogglePreview=${w_}
                            onEditSource=${T5}
                            previewTabs=${M1}
                            paneOverrides=${z_}
                            onToggleDock=${t1?u1:void 0}
                            dockVisible=${t1&&g1}
                            onToggleZen=${v4}
                            zenMode=${F1}
                            onPopOutTab=${B?void 0:U8}
                        />
                    `}
                    ${G1&&L`<div class="editor-pane-host" ref=${K1}></div>`}
                    ${G1&&h0&&M1.has(h0)&&L`
                        <${H3}
                            getContent=${()=>x1.current?.getContent?.()}
                            path=${h0}
                            onClose=${()=>w_(h0)}
                        />
                    `}
                    ${t1&&g1&&L`<div class="dock-splitter" onMouseDown=${OZ} onTouchStart=${AZ}></div>`}
                    ${t1&&L`<div class=${`dock-panel${g1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!B&&L`
                                    <button class="dock-panel-action" onClick=${()=>U8(r4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${u1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${_5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${HZ} onTouchStart=${JZ}></div>
            `}
            <div class="container">
                ${k&&fj()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${q1?.agent_name?`@${q1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${q1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${N0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>s3(W.currentTarget.value)}
                                    >
                                        ${N0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${u8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${q1?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${H6}
                                    title=${w?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${w}
                                >
                                    ${w?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${q1?.chat_jid&&q1.chat_jid!==(q1.root_chat_jid||q1.chat_jid)&&L`
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
                ${(O||k)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${kZ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${_4}`}</span>
                    </div>
                `}
                <${c7}
                    posts=${G5}
                    hasMore=${W8?LZ:!1}
                    onLoadMore=${W8?UZ:void 0}
                    timelineRef=${Y_}
                    onHashtagClick=${EZ}
                    onMessageRef=${T1}
                    onScrollToMessage=${y1}
                    onFileRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${PZ}
                    onOpenWidget=${fZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${j_}
                    user=${u_}
                    reverse=${W8}
                    removingPostIds=${C1}
                    searchQuery=${k}
                />
                <${L$}
                    status=${N4(x)?null:x}
                    draft=${Z0}
                    plan=${$0}
                    thought=${q0}
                    pendingRequest=${X0}
                    intent=${S}
                    turnId=${A0}
                    steerQueued=${e3}
                    onPanelToggle=${V_}
                    showExtensionPanels=${!1}
                />
                <${B7}
                    session=${t}
                    onClose=${U6}
                    onRetry=${SZ}
                    onInject=${yZ}
                />
                <${E7}
                    widget=${E0}
                    onClose=${f5}
                    onWidgetEvent=${vZ}
                />
                <${L$}
                    extensionPanels=${Array.from(k0.values())}
                    pendingPanelActions=${c0}
                    onExtensionPanelAction=${CZ}
                    turnId=${A0}
                    steerQueued=${e3}
                    onPanelToggle=${V_}
                    showCorePanels=${!1}
                />
                <${Y$}
                    items=${J?[]:f0}
                    onInjectQueuedFollowup=${d3}
                    onRemoveQueuedFollowup=${i3}
                    onOpenFilePill=${I0}
                />
                <${g2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=f1.current||{};if(!W&&!U)g_(),N5()}}
                    onFocus=${N5}
                    searchMode=${J}
                    searchScope=${M}
                    onSearch=${MZ}
                    onSearchScopeChange=${d}
                    onEnterSearch=${IZ}
                    onExitSearch=${TZ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${f}
                    onSetFileRefs=${i}
                    messageRefs=${e}
                    onRemoveMessageRef=${Y4}
                    onClearMessageRefs=${p4}
                    onSetMessageRefs=${Q5}
                    onSwitchChat=${s3}
                    onRenameSession=${a3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${bZ}
                    onDeleteSession=${t3}
                    onRestoreSession=${uZ}
                    activeEditorPath=${Q?null:h0}
                    onAttachEditorFile=${Q?void 0:z1}
                    onOpenFilePill=${I0}
                    followupQueueCount=${K_}
                    followupQueueItems=${f0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${d3}
                    onRemoveQueuedFollowup=${i3}
                    onSubmitIntercept=${xZ}
                    onMessageResponse=${R5}
                    onSubmitError=${Z5}
                    onPopOutChat=${B?void 0:gZ}
                    isAgentActive=${S5}
                    activeChatAgents=${B0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${a0}
                    modelUsage=${E1}
                    thinkingLevel=${D1}
                    supportsThinking=${g0}
                    contextUsage=${S0}
                    notificationsEnabled=${t4}
                    notificationPermission=${y4}
                    onToggleNotifications=${w1}
                    onModelChange=${v1}
                    onModelStateChange=${L6}
                    statusNotice=${N4(x)?x:null}
                />
                <${P7}
                    request=${X0}
                    onRespond=${()=>{z0(null),b0.current=null}}
                />
            </div>
        </div>
    `}function bK(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=C((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},N=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",N);else window.history.pushState(null,"",N);$(window.location.href)},[]),Q=R0(()=>new URL(_).searchParams,[_]);return L`<${vK} locationParams=${Q} navigate=${j} />`}I4(L`<${bK} />`,document.getElementById("app"));

//# debugId=FCB0D4F10D58C65764756E2164756E21
//# sourceMappingURL=app.bundle.js.map
