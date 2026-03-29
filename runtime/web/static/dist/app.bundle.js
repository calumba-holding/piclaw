var kZ=Object.defineProperty;var IZ=(_)=>_;function TZ(_,$){this[_]=IZ.bind(null,$)}var CZ=(_,$)=>{for(var j in $)kZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:TZ.bind($,j)})};var A8,U1,G2,PZ,C4,s3,K2,N2,V2,I6,D6,A6,B2,J8={},O8=[],SZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,E8=Array.isArray;function K4(_,$){for(var j in $)_[j]=$[j];return _}function T6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function M8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?A8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return z8(_,q,Q,Z,null)}function z8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++G2:Z,__i:-1,__u:0};return Z==null&&U1.vnode!=null&&U1.vnode(Y),Y}function k8(_){return _.children}function B5(_,$){this.props=_,this.context=$}function W5(_,$){if($==null)return _.__?W5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W5(_):null}function xZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=K4({},$);Y.__v=$.__v+1,U1.vnode&&U1.vnode(Y),C6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?W5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,F2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&W2(Y)}}function W2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),W2(_)}function E6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!D8.__r++||s3!=U1.debounceRendering)&&((s3=U1.debounceRendering)||K2)(D8)}function D8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(N2),_=C4.shift(),$=C4.length,xZ(_)}finally{C4.length=D8.__r=0}}function U2(_,$,j,Q,Z,Y,q,X,K,G,N){var V,B,O,E,k,A,J,D=Q&&Q.__k||O8,I=$.length;for(K=yZ(j,$,D,K,I),V=0;V<I;V++)(O=j.__k[V])!=null&&(B=O.__i!=-1&&D[O.__i]||J8,O.__i=V,A=C6(_,O,B,Z,Y,q,X,K,G,N),E=O.__e,O.ref&&B.ref!=O.ref&&(B.ref&&P6(B.ref,null,O),N.push(O.ref,O.__c||E,O)),k==null&&E!=null&&(k=E),(J=!!(4&O.__u))||B.__k===O.__k?K=L2(O,K,_,J):typeof O.type=="function"&&A!==void 0?K=A:E&&(K=E.nextSibling),O.__u&=-7);return j.__e=k,K}function yZ(_,$,j,Q,Z){var Y,q,X,K,G,N=j.length,V=N,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=z8(null,q,null,null,null):E8(q)?q=_.__k[Y]=z8(k8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=z8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+B,q.__=_,q.__b=_.__b+1,X=null,(G=q.__i=RZ(q,j,K,V))!=-1&&(V--,(X=j[G])&&(X.__u|=2)),X==null||X.__v==null?(G==-1&&(Z>N?B--:Z<N&&B++),typeof q.type!="function"&&(q.__u|=4)):G!=K&&(G==K-1?B--:G==K+1?B++:(G>K?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(X=j[Y])!=null&&(2&X.__u)==0&&(X.__e==Q&&(Q=W5(X)),H2(X,X));return Q}function L2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=L2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=W5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function RZ(_,$,j,Q){var Z,Y,q,X=_.key,K=_.type,G=$[j],N=G!=null&&(2&G.__u)==0;if(G===null&&X==null||N&&X==G.key&&K==G.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&X==G.key&&K==G.type)return q}return-1}function a3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||SZ.test($)?j:j+"px"}function F8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||a3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||a3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(V2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=I6,_.addEventListener($,Y?A6:D6,Y)):_.removeEventListener($,Y?A6:D6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function t3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=I6++;else if($.t<j.u)return;return j(U1.event?U1.event($):$)}}}function C6(_,$,j,Q,Z,Y,q,X,K,G){var N,V,B,O,E,k,A,J,D,I,i,h,o,t,R,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[X=$.__e=j.__e]),(N=U1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,I=(N=x.contextType)&&Q[N.__c],i=N?I?I.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,i):($.__c=V=new B5(J,i),V.constructor=x,V.render=fZ),I&&I.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=K4({},V.__s)),K4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,E=V.state,V.__v=$,B)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,i),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,i)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),O8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,i),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,E,k)})}if(V.context=i,V.props=J,V.__P=_,V.__e=!1,h=U1.__r,o=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),O8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Q=K4(K4({},Q),V.getChildContext())),D&&!B&&V.getSnapshotBeforeUpdate!=null&&(k=V.getSnapshotBeforeUpdate(O,E)),t=N!=null&&N.type===k8&&N.key==null?z2(N.props.children):N,X=U2(_,E8(t)?t:[t],$,j,Q,Z,Y,q,X,K,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,K||Y!=null)if(H.then){for($.__u|=K?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;Y[Y.indexOf(X)]=null,$.__e=X}else{for(R=Y.length;R--;)T6(Y[R]);M6($)}else $.__e=j.__e,$.__k=j.__k,H.then||M6($);U1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=wZ(j.__e,$,j,Q,Z,Y,q,K,G);return(N=U1.diffed)&&N($),128&$.__u?void 0:X}function M6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(M6))}function F2(_,$,j){for(var Q=0;Q<j.length;Q++)P6(j[Q],j[++Q],j[++Q]);U1.__c&&U1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){U1.__e(Y,Z.__v)}})}function z2(_){return typeof _!="object"||_==null||_.__b>0?_:E8(_)?_.map(z2):K4({},_)}function wZ(_,$,j,Q,Z,Y,q,X,K){var G,N,V,B,O,E,k,A=j.props||J8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((O=Y[G])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),X&&(U1.__m&&U1.__m($,Y),X=!1),Y=null}if(D==null)A===J||X&&_.data==J||(_.data=J);else{if(Y=Y&&A8.call(_.childNodes),!X&&Y!=null)for(A={},G=0;G<_.attributes.length;G++)A[(O=_.attributes[G]).name]=O.value;for(G in A)O=A[G],G=="dangerouslySetInnerHTML"?V=O:G=="children"||(G in J)||G=="value"&&("defaultValue"in J)||G=="checked"&&("defaultChecked"in J)||F8(_,G,null,O,Z);for(G in J)O=J[G],G=="children"?B=O:G=="dangerouslySetInnerHTML"?N=O:G=="value"?E=O:G=="checked"?k=O:X&&typeof O!="function"||A[G]===O||F8(_,G,O,A[G],Z);if(N)X||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),U2($.type=="template"?_.content:_,E8(B)?B:[B],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&W5(j,0),X,K),Y!=null)for(G=Y.length;G--;)T6(Y[G]);X||(G="value",D=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[G]||D=="progress"&&!E||D=="option"&&E!=A[G])&&F8(_,G,E,A[G],Z),G="checked",k!=null&&k!=_[G]&&F8(_,G,k,A[G],Z))}return _}function P6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){U1.__e(Z,j)}}function H2(_,$,j){var Q,Z;if(U1.unmount&&U1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||P6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){U1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&H2(Q[Z],$,j||typeof _.type!="function");j||T6(_.__e),_.__c=_.__=_.__e=void 0}function fZ(_,$,j){return this.constructor(_,j)}function S4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),U1.__&&U1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],C6($,_=(!Q&&j||$).__k=M8(k8,null,[_]),Z||J8,J8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?A8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),F2(Y,_,q)}function J2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,E6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+B2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}A8=O8.slice,U1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(X){_=X}throw _}},G2=0,PZ=function(_){return _!=null&&_.constructor===void 0},B5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K4({},this.state),typeof _=="function"&&(_=_(K4({},j),this.props)),_&&K4(j,_),_!=null&&this.__v&&($&&this._sb.push($),E6(this))},B5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),E6(this))},B5.prototype.render=k8,C4=[],K2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N2=function(_,$){return _.__v.__b-$.__v.__b},D8.__r=0,V2=/(PointerCapture)$|Capture$/i,I6=0,D6=t3(!1),A6=t3(!0),B2=0;var P4,W1,O6,e3,U5=0,O2=[],O1=U1,_2=O1.__b,$2=O1.__r,j2=O1.diffed,Q2=O1.__c,Z2=O1.unmount,Y2=O1.__;function L5(_,$){O1.__h&&O1.__h(W1,_,U5||$),U5=0;var j=W1.__H||(W1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return U5=1,S6(k2,_)}function S6(_,$,j){var Q=L5(P4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):k2(void 0,$),function(X){var K=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(K,X);K!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=W1,!W1.__f)){var Z=function(X,K,G){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(B){return B.__c});if(N.every(function(B){return!B.__N}))return!Y||Y.call(this,X,K,G);var V=Q.__c.props!==X;return N.some(function(B){if(B.__N){var O=B.__[0];B.__=B.__N,B.__N=void 0,O!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,X,K,G)||V};W1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=W1;W1.componentWillUpdate=function(X,K,G){if(this.__e){var N=Y;Y=void 0,Z(X,K,G),Y=N}q&&q.call(this,X,K,G)},W1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=L5(P4++,3);!O1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,W1.__H.__h.push(j))}function h5(_,$){var j=L5(P4++,4);!O1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,W1.__h.push(j))}function C(_){return U5=5,w0(function(){return{current:_}},[])}function D2(_,$,j){U5=6,h5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function w0(_,$){var j=L5(P4++,7);return x6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return U5=8,w0(function(){return _},$)}function A2(_){var $=W1.context[_.__c],j=L5(P4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(W1)),$.props.value):_.__}function E2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function M2(_){var $=L5(P4++,10),j=m();return $.__=_,W1.componentDidCatch||(W1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function vZ(){for(var _;_=O2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(H8),$.__h.some(k6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){W1=null,_2&&_2(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Y2&&Y2(_,$)},O1.__r=function(_){$2&&$2(_),P4=0;var $=(W1=_.__c).__H;$&&(O6===W1?($.__h=[],W1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(H8),$.__h.some(k6),$.__h=[],P4=0)),O6=W1},O1.diffed=function(_){j2&&j2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(O2.push($)!==1&&e3===O1.requestAnimationFrame||((e3=O1.requestAnimationFrame)||uZ)(vZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),O6=W1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(H8),j.__h=j.__h.filter(function(Q){return!Q.__||k6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),Q2&&Q2(_,$)},O1.unmount=function(_){Z2&&Z2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{H8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var q2=typeof requestAnimationFrame=="function";function uZ(_){var $,j=function(){clearTimeout(Q),q2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);q2&&($=requestAnimationFrame(j))}function H8(_){var $=W1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),W1=$}function k6(_){var $=W1;_.__c=_.__(),W1=$}function x6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function k2(_,$){return typeof $=="function"?$(_):$}var I2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],X=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=X:q===4?Q[1]=Object.assign(Q[1]||{},X):q===5?(Q[1]=Q[1]||{})[$[++Y]]=X:q===6?Q[1][$[++Y]]+=X+"":q?(Z=_.apply(X,I2(_,X,j,["",null])),Q.push(Z),X[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(X)}return Q},X2=new Map;function bZ(_){var $=X2.get(this);return $||($=new Map,X2.set(this,$)),($=I2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",X="",K=[0],G=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,B,q):Y===3&&(B||q)?(K.push(3,B,q),Y=2):Y===2&&q==="..."&&B?K.push(4,B,0):Y===2&&q&&!B?K.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(K.push(Y,0,q,Z),Y=6),B&&(K.push(Y,B,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&G(),G(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(G(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:X?Q===X?X="":q+=Q:Q==='"'||Q==="'"?X=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(G(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return G(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=bZ.bind(M8);var t1={};CZ(t1,{uploadWorkspaceFile:()=>T8,uploadMedia:()=>g6,updateWorkspaceFile:()=>QY,submitAdaptiveCardAction:()=>m6,streamSidePrompt:()=>_Y,stopAutoresearch:()=>oZ,steerAgentQueueItem:()=>eZ,setWorkspaceVisibility:()=>i5,setAgentThoughtVisibility:()=>c6,sendPeerAgentMessage:()=>iZ,sendAgentMessage:()=>o4,searchPosts:()=>R6,restoreChatBranch:()=>dZ,respondToAgentRequest:()=>I8,renameWorkspaceFile:()=>r6,renameChatBranch:()=>cZ,removeAgentQueueItem:()=>tZ,pruneChatBranch:()=>lZ,moveWorkspaceEntry:()=>o6,getWorkspaceTree:()=>l5,getWorkspaceRawUrl:()=>C8,getWorkspaceFile:()=>d5,getWorkspaceDownloadUrl:()=>P8,getWorkspaceBranch:()=>jY,getTimeline:()=>r4,getThumbnailUrl:()=>l6,getThread:()=>w6,getPostsByHashtag:()=>y6,getMediaUrl:()=>y_,getMediaText:()=>d6,getMediaInfo:()=>F5,getMediaBlob:()=>$Y,getChatBranches:()=>pZ,getAutoresearchStatus:()=>rZ,getAgents:()=>u6,getAgentThought:()=>p6,getAgentStatus:()=>b6,getAgentQueueState:()=>aZ,getAgentModels:()=>c5,getAgentContext:()=>nZ,getActiveChatAgents:()=>v6,forkChatBranch:()=>p5,dismissAutoresearch:()=>sZ,deleteWorkspaceFile:()=>s6,deletePost:()=>f6,createWorkspaceFile:()=>n6,createReply:()=>hZ,createPost:()=>mZ,attachWorkspaceFile:()=>i6,addToWhitelist:()=>h6,SSEClient:()=>S8});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function T2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function gZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:X}=await j.read();if(X)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let G of K){let N=T2(G);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=T2(Z);if(Y)$(Y.event,Y.data)}async function r4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Q)}async function y6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function R6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",X=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${X}${K}`)}async function w6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function mZ(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function hZ(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function f6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return t0(Z,{method:"DELETE"})}async function o4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",X={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")X.mode=Z;return t0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(X)})}async function v6(){return t0("/agent/active-chats")}async function pZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Q}`)}async function p5(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function cZ(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function lZ(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function dZ(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function iZ(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function u6(){return t0("/agent/roster")}async function b6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function nZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function rZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function oZ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function sZ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function aZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function tZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function eZ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function c5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function g6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function I8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function m6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function _Y(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await gZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function h6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function p6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function c6(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function y_(_){return`/media/${_}`}function l6(_){return`/media/${_}/thumbnail`}async function F5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function d6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function $Y(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function l5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Q)}async function jY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function d5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return t0(Z)}async function QY(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function i6(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function T8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",X=await fetch(""+q,{method:"POST",body:Q});if(!X.ok){let K=await X.json().catch(()=>({error:"Upload failed"})),G=Error(K.error||`HTTP ${X.status}`);throw G.status=X.status,G.code=K.code,G}return X.json()}async function n6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function r6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function o6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function s6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function i5(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function C8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function P8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class S8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function x8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function ZY(_,$){let j=x8(_),Q=x8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function a6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t6(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function YY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function qY(_,$,j=0,Q=(Z)=>Z){let Z=x8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=YY(Y.length,j),X=Y.map((K)=>x8(Q(K)));for(let K of q)if(X[K].startsWith(Z))return K;for(let K of q)if(X[K].includes(Z))return K;return-1}function e6(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(ZY(Y,$))return j}return qY(Z,$,0,Q)}function z_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function G1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function z5(_,$=!1){let j=z_(_);if(j===null)return $;return j==="true"}function H5(_,$=null){let j=z_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function y8(_){return String(_||"").trim().toLowerCase()}function _$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return y8($[1]||"")}function XY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=y8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function C2(_,$,j={}){let Q=_$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return XY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return y8(Y?.agent_name).startsWith(Q)})}function $$(_){let $=y8(_);return $?`@${$} `:""}function P2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function R8(_){let $=j$(_);return $?`@${$}`:""}function j$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function w8(_,$=""){let j=String(_||""),Q=j$(j),Z=j$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function S2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function GY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function f8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=GY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function x2(_,$,j){let Q=R8(_),Z=R8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function KY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function N4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function v8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return N4(_)?"Compacting context":"Working..."}function NY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function u8(_,$=Date.now()){let j=KY(_);if(j===null)return null;return NY(Math.max(0,$-j))}function l_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let X=`${_}-file-pill`,K=`${_}-file-name`,G=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${X} title=${j||$} onClick=${Z}>
      ${N}
      <span class=${K}>${$}</span>
      ${Q&&L`
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
  `}var VY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function BY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",X=`${Q!=null?`Context: ${y2(Q)} / ${y2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,G=2*Math.PI*9,N=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${X}
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
                    stroke-dasharray=${`${N} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function y2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function WY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),X=j.slice(Y);return{content:[...q,...X].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function UY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),X=j.slice(Y);return{content:[...q,...X].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function LY(_){let $=WY(_||""),j=UY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Q$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=LY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((X)=>L`
                                        <${l_}
                                            key=${"queue-msg-"+X}
                                            prefix="compose"
                                            label=${"msg:"+X}
                                            title=${"Message reference: "+X}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((X)=>{let K=X.split("/").pop()||X;return L`
                                            <${l_}
                                                key=${"queue-file-"+X}
                                                prefix="compose"
                                                label=${K}
                                                title=${X}
                                                onClick=${()=>Q?.(X)}
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
    `}function R2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:X,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:O,activeModel:E=null,modelUsage:k=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:I,notificationsEnabled:i=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:t,onModelStateChange:R,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Q0,onRemoveQueuedFollowup:d,onSubmitIntercept:_0,onMessageResponse:e,onPopOutChat:Y0,isAgentActive:X0=!1,activeChatAgents:G0=[],currentChatJid:H0="web:default",connectionStatus:D0="connected",onSetFileRefs:A0,onSetMessageRefs:n0,onSubmitError:x0,onSwitchChat:k0,onRenameSession:r0,isRenameSessionInProgress:o0=!1,onCreateSession:b0,onDeleteSession:a0,onRestoreSession:g0,showQueueStack:$1=!0,statusNotice:F0=null}){let[h0,j1]=m(""),[Y1,Y_]=m(""),[D1,e0]=m([]),[m1,M1]=m(!1),[q1,m0]=m([]),[x1,k1]=m(0),[s,N0]=m(!1),[z0,q0]=m([]),[y0,C0]=m(0),[f0,M0]=m(!1),[R0,l0]=m(!1),[O0,u0]=m(!1),[J0,j0]=m(!1),[y,a]=m([]),[L0,E0]=m(0),[v0,X1]=m(0),[A1,K1]=m(!1),[h1,Q4]=m(0),[B_,e1]=m(null),[W_,q_]=m(()=>Date.now()),Q1=C(null),n1=C(null),Z4=C(null),w_=C(null),$5=C(null),v4=C(null),u1=C(null),U_=C(null),y1=C({value:"",updatedAt:0}),E1=C(0),N1=C(!1),f_=200,v_=(F)=>{let v=new Set,n=[];for(let c of F||[]){if(typeof c!=="string")continue;let I0=c.trim();if(!I0||v.has(I0))continue;v.add(I0),n.push(I0)}return n},V1=()=>{let F=z_("piclaw_compose_history");if(!F)return[];try{let v=JSON.parse(F);if(!Array.isArray(v))return[];return v_(v)}catch{return[]}},X_=(F)=>{G1("piclaw_compose_history",JSON.stringify(F))},p0=C(V1()),C1=C(-1),D_=C(""),__=h0.trim()||D1.length>0||K.length>0||V.length>0,u4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),n_=typeof window<"u"&&typeof Notification<"u",b4=typeof window<"u"?Boolean(window.isSecureContext):!1,j5=n_&&b4&&h!=="denied",o_=h==="granted"&&i,u_=N4(F0),P5=v8(F0),S5=typeof F0?.detail==="string"&&F0.detail.trim()?F0.detail.trim():"",B1=u_?u8(F0,W_):null,R1=o_?"Disable notifications":"Enable notifications",Q5=D1.length>0||K.length>0||V.length>0,A_=D0==="disconnected"?"Reconnecting":String(D0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),$_=D0==="disconnected"?"Reconnecting":`Connection: ${A_}`,p1=(Array.isArray(G0)?G0:[]).filter((F)=>!F?.archived_at),P1=(()=>{for(let F of Array.isArray(G0)?G0:[]){let v=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(v&&v===H0)return F}return null})(),b1=Boolean(P1&&P1.chat_jid===(P1.root_chat_jid||P1.chat_jid)),z1=w0(()=>{let F=new Set,v=[];for(let n of Array.isArray(G0)?G0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===H0||F.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(c),v.push(n)}return v},[G0,H0]),E_=z1.length>0,M_=E_&&typeof k0==="function",k_=E_&&typeof g0==="function",s_=Boolean(o0||N1.current),j_=!j&&typeof r0==="function"&&!s_,r1=!j&&typeof b0==="function",I_=!j&&typeof a0==="function"&&!b1,Y4=!j&&(M_||k_||j_||r1||I_),H1=E||"",a_=J&&A?` (${A})`:"",g4=a_.trim()?`${A}`:"",m4=typeof k?.hint_short==="string"?k.hint_short.trim():"",T_=[g4||null,m4||null].filter(Boolean).join(" • "),h4=[H1?`Current model: ${H1}${a_}`:null,k?.plan?`Plan: ${k.plan}`:null,m4||null,k?.primary?.reset_description||null,k?.secondary?.reset_description||null].filter(Boolean),Z5=R0?"Switching model…":h4.join(" • ")||`Current model: ${H1}${a_} (tap to open model picker)`,b_=(F)=>{if(!F||typeof F!=="object")return;let v=F.model??F.current;if(typeof R==="function")R({model:v??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(v&&typeof t==="function")t(v)},g_=(F)=>{let v=F||Q1.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},H4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){N0(!1),m0([]);return}let v=F.toLowerCase().split(" ")[0];if(v.length<1){N0(!1),m0([]);return}let n=VY.filter((c)=>c.name.startsWith(v)||c.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===v))M0(!1),q0([]),m0(n),k1(0),N0(!0);else N0(!1),m0([])},m_=(F)=>{let v=h0,n=v.indexOf(" "),c=n>=0?v.slice(n):"",I0=F.name+c;j1(I0),N0(!1),m0([]),requestAnimationFrame(()=>{let J1=Q1.current;if(!J1)return;let S1=I0.length;J1.selectionStart=S1,J1.selectionEnd=S1,J1.focus()})},p4=(F)=>{if(_$(F)==null){M0(!1),q0([]);return}let v=C2(p1,F,{currentChatJid:H0});if(v.length>0&&!(v.length===1&&$$(v[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))N0(!1),m0([]),q0(v),C0(0),M0(!0);else M0(!1),q0([])},h_=(F)=>{let v=$$(F?.agent_name);if(!v)return;j1(v),M0(!1),q0([]),requestAnimationFrame(()=>{let n=Q1.current;if(!n)return;let c=v.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},C_=()=>{if(j||!M_&&!k_&&!j_&&!r1&&!I_)return!1;return y1.current={value:"",updatedAt:0},u0(!1),N0(!1),m0([]),M0(!1),q0([]),j0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!M_&&!k_&&!j_&&!r1&&!I_)return;if(J0){y1.current={value:"",updatedAt:0},j0(!1);return}C_()},J4=(F)=>{let v=typeof F==="string"?F.trim():"";if(j0(!1),!v||v===H0){requestAnimationFrame(()=>Q1.current?.focus());return}k0?.(v)},O4=async(F)=>{let v=typeof F==="string"?F.trim():"";if(j0(!1),!v||typeof g0!=="function"){requestAnimationFrame(()=>Q1.current?.focus());return}try{await g0(v)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>Q1.current?.focus())}},c4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},L1=w0(()=>{let F=[];for(let v of z1){let n=Boolean(v?.archived_at),c=typeof v?.agent_name==="string"?v.agent_name.trim():"",I0=typeof v?.chat_jid==="string"?v.chat_jid.trim():"";if(!c||!I0)continue;F.push({type:"session",key:`session:${I0}`,label:`@${c} — ${I0}${v?.is_active?" active":""}${n?" archived":""}`,chat:v,disabled:n?!k_:!M_})}if(r1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(j_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:s_});if(I_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[z1,k_,M_,r1,j_,I_,s_]),D4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof r0!=="function"||o0||N1.current)return;N1.current=!0,j0(!1);try{await r0()}catch(v){console.warn("Failed to rename session:",v)}finally{N1.current=!1}requestAnimationFrame(()=>Q1.current?.focus())},Y5=async()=>{if(typeof b0!=="function")return;j0(!1);try{await b0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},g1=async()=>{if(typeof a0!=="function")return;j0(!1);try{await a0(H0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>Q1.current?.focus())},G_=(F)=>{if(j)Y_(F);else j1(F),H4(F),p4(F);requestAnimationFrame(()=>g_())},t_=(F)=>{let v=j?Y1:h0,n=v&&!v.endsWith(`
`)?`
`:"",c=`${v}${n}${F}`.trimStart();G_(c)},l4=(F)=>{let v=F?.command?.model_label;if(v)return v;let n=F?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},q4=async(F)=>{if(j||R0)return;l0(!0);try{let v=await o4("default",F,null,[],null,H0),n=l4(v);b_({model:n??E??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let c=await c5(H0);if(c)b_(c)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{l0(!1)}},A4=async()=>{await q4("/cycle-model")},X4=async(F)=>{if(!F||R0)return;if(await q4(`/model ${F}`))u0(!1)},P_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let v=F.chat;if(v?.archived_at)O4(v.chat_jid);else J4(v.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Y5();return}if(F.action==="rename"){D4();return}if(F.action==="delete")g1()}},L_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},j0(!1),u0((v)=>!v)},E4=async()=>{if(j)return;I?.(),await S_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},d4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return X0?"queue":void 0},S_=async(F,v,n={})=>{let{includeMedia:c=!0,includeFileRefs:I0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:S1=!0,recordHistory:f1=!0}=n||{},G4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:h0,i4=typeof G4==="string"?G4:"";if(!i4.trim()&&(c?D1.length===0:!0)&&(I0?K.length===0:!0)&&(J1?V.length===0:!0))return;N0(!1),m0([]),M0(!1),q0([]),j0(!1),e1(null);let q5=c?[...D1]:[],X5=I0?[...K]:[],K_=J1?[...V]:[],l1=i4.trim();if(f1&&l1){let M4=p0.current,F1=v_(M4.filter((e_)=>e_!==l1));if(F1.push(l1),F1.length>200)F1.splice(0,F1.length-200);p0.current=F1,X_(F1),C1.current=-1,D_.current=""}let G5=()=>{if(c)e0([...q5]);if(I0)A0?.(X5);if(J1)n0?.(K_);j1(l1),requestAnimationFrame(()=>g_())};if(S1)j1(""),e0([]),N?.(),O?.();(async()=>{try{if(await _0?.({content:l1,submitMode:v,fileRefs:X5,messageRefs:K_,mediaFiles:q5})){_?.();return}let F1=[];for(let F_ of q5){let I4=await g6(F_);F1.push(I4.id)}let e_=X5.length?`Files:
${X5.map((F_)=>`- ${F_}`).join(`
`)}`:"",K5=K_.length?`Referenced messages:
${K_.map((F_)=>`- message:${F_}`).join(`
`)}`:"",V8=F1.length?`Attachments:
${F1.map((F_,I4)=>{let N6=q5[I4]?.name||`attachment-${I4+1}`;return`- attachment:${F_} (${N6})`}).join(`
`)}`:"",N_=[l1,e_,K5,V8].filter(Boolean).join(`

`),k4=await o4("default",N_,null,F1,d4(v),H0);if(e?.(k4),k4?.command){b_({model:k4.command.model_label??E??null,thinking_level:k4.command.thinking_level,supports_thinking:k4.command.supports_thinking});try{let F_=await c5(H0);if(F_)b_(F_)}catch{}}_?.()}catch(M4){if(S1)G5();let F1=M4?.message||"Failed to send message.";e1(F1),x0?.(F1),console.error("Failed to post:",M4)}})()},z=(F)=>{Q0?.(F)},T=P((F)=>{if(j||!O0&&!J0||F?.isComposing)return!1;let v=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(v(),n(),O0)u0(!1);if(J0)j0(!1);return!0}if(O0){if(F.key==="ArrowDown"){if(v(),n(),y.length>0)E0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),y.length>0)E0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return v(),n(),X4(y[Math.max(0,Math.min(L0,y.length-1))]),!0;if(a6(F)&&y.length>0){v();let c=t6(y1.current,F.key);y1.current=c;let I0=e6(y,c.value,L0,(J1)=>J1);if(I0>=0)E0(I0);return!0}}if(J0){if(F.key==="ArrowDown"){if(v(),n(),L1.length>0)X1((c)=>(c+1)%L1.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),L1.length>0)X1((c)=>(c-1+L1.length)%L1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&L1.length>0)return v(),n(),P_(L1[Math.max(0,Math.min(v0,L1.length-1))]),!0;if(a6(F)&&L1.length>0){v();let c=t6(y1.current,F.key);y1.current=c;let I0=e6(L1,c.value,v0,(J1)=>J1.label);if(I0>=0)X1(I0);return!0}}return!1},[j,O0,J0,y,L0,L1,v0,X4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),Y_(""),X?.();return}if(T(F))return;let v=Q1.current?.value??(j?Y1:h0);if(P2(F,v,{searchMode:j,showSessionSwitcherButton:Y4})){F.preventDefault(),C_();return}if(f0&&z0.length>0){let n=Q1.current?.value??(j?Y1:h0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))M0(!1),q0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),C0((c)=>(c+1)%z0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),C0((c)=>(c-1+z0.length)%z0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),h_(z0[y0]);return}if(F.key==="Escape"){F.preventDefault(),M0(!1),q0([]);return}}}if(s&&q1.length>0){let n=Q1.current?.value??(j?Y1:h0);if(!String(n||"").startsWith("/"))N0(!1),m0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((c)=>(c+1)%q1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((c)=>(c-1+q1.length)%q1.length);return}if(F.key==="Tab"){F.preventDefault(),m_(q1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!v.includes(" ")){F.preventDefault();let I0=q1[x1];N0(!1),m0([]),S_(I0.name);return}}if(F.key==="Escape"){F.preventDefault(),N0(!1),m0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=Q1.current;if(!n)return;let c=n.value||"",I0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(F.key==="ArrowUp"&&I0||F.key==="ArrowDown"&&J1){let S1=p0.current;if(!S1.length)return;F.preventDefault();let f1=C1.current;if(F.key==="ArrowUp"){if(f1===-1)D_.current=c,f1=S1.length-1;else if(f1>0)f1-=1;C1.current=f1,G_(S1[f1]||"")}else{if(f1===-1)return;if(f1<S1.length-1)f1+=1,C1.current=f1,G_(S1[f1]||"");else C1.current=-1,G_(D_.current||""),D_.current=""}requestAnimationFrame(()=>{let G4=Q1.current;if(!G4)return;let i4=G4.value.length;G4.selectionStart=i4,G4.selectionEnd=i4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else S_(v,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else S_(v)},f=(F)=>{let v=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!v.length)return;e0((n)=>[...n,...v]),e1(null)},r=(F)=>{f(F.target.files),F.target.value=""},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,M1(!0)},B0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)M1(!1)},W0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";M1(!0)},$0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,M1(!1),f(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let v=F.clipboardData?.items;if(!v||!v.length)return;let n=[];for(let c of v){if(c.kind!=="file")continue;let I0=c.getAsFile?.();if(I0)n.push(I0)}if(n.length>0)F.preventDefault(),f(n)},w1=(F)=>{e0((v)=>v.filter((n,c)=>c!==F))},Q_=()=>{e1(null),e0([]),N?.(),O?.()},c1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:v,longitude:n,accuracy:c}=F.coords,I0=`${v.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",S1=`https://maps.google.com/?q=${v},${n}`,f1=`Location: ${I0}${J1} ${S1}`;t_(f1)},(F)=>{let v=F?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;y1.current={value:"",updatedAt:0},K1(!0),c5(H0).then((F)=>{let v=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];v.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),a(v),b_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),a([])}).finally(()=>{K1(!1)})},[O0,E]),g(()=>{if(j)u0(!1),j0(!1),N0(!1),m0([]),M0(!1),q0([])},[j]),g(()=>{if(J0&&!Y4)j0(!1)},[J0,Y4]),g(()=>{if(!O0)return;let F=y.findIndex((v)=>v===E);E0(F>=0?F:0)},[O0,y,E]),g(()=>{if(!J0)return;X1(c4(L1)),y1.current={value:"",updatedAt:0}},[J0,H0]),g(()=>{if(!O0)return;let F=(v)=>{let n=w_.current,c=$5.current,I0=v.target;if(n&&n.contains(I0))return;if(c&&c.contains(I0))return;u0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(!J0)return;let F=(v)=>{let n=v4.current,c=u1.current,I0=v.target;if(n&&n.contains(I0))return;if(c&&c.contains(I0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),g(()=>{if(j||!O0&&!J0)return;let F=(v)=>{T(v)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,O0,J0,T]),g(()=>{if(!O0)return;let F=w_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,L0,y]),g(()=>{if(!J0)return;let F=v4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,v0,L1.length]),g(()=>{let F=()=>{let J1=U_.current?.clientWidth||0;Q4((S1)=>S1===J1?S1:J1)};F();let v=U_.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},I0=null;if(v&&typeof ResizeObserver<"u")I0=new ResizeObserver(()=>c()),I0.observe(v);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(I0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,E,P1?.agent_name,Y4,D?.percent]);let x5=(F)=>{let v=F.target.value;if(e1(null),J0)j0(!1);g_(F.target),G_(v)};return g(()=>{requestAnimationFrame(()=>g_())},[h0,Y1,j]),g(()=>{if(!u_)return;q_(Date.now());let F=setInterval(()=>q_(Date.now()),1000);return()=>clearInterval(F)},[u_,F0?.started_at,F0?.startedAt]),g(()=>{if(j)return;p4(h0)},[p1,H0,h0,j]),L`
        <div class="compose-box">
            ${$1&&!j&&L`
                <${Q$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${d}
                    onOpenFilePill=${S}
                />
            `}
            ${F0&&L`
                <div
                    class=${`compose-inline-status${u_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${S5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${P5}</span>
                        ${B1&&L`<span class="compose-inline-status-elapsed">${B1}</span>`}
                    </div>
                    ${S5&&L`<div class="compose-inline-status-detail">${S5}</div>`}
                </div>
            `}
            ${B_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${B_}</div>
            `}
            <div
                class=${`compose-input-wrapper${m1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${W0}
                onDragLeave=${B0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${Q5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${l_}
                                        key=${"msg-"+F}
                                        prefix="compose"
                                        label=${"msg:"+F}
                                        title=${"Message reference: "+F}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>B?.(F)}
                                    />
                                `})}
                            ${K.map((F)=>{let v=F.split("/").pop()||F;return L`
                                    <${l_}
                                        prefix="compose"
                                        label=${v}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(F)}
                                    />
                                `})}
                            ${D1.map((F,v)=>{let n=F?.name||`attachment-${v+1}`;return L`
                                    <${l_}
                                        key=${n+v}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>w1(v)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${Q_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Y0==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y0?.()}
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
                        ref=${Q1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y1:h0}
                        onInput=${x5}
                        onKeyDown=${w}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${f0&&z0.length>0&&L`
                        <div class="slash-autocomplete" ref=${Z4}>
                            ${z0.map((F,v)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${v===y0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),h_(F)}}
                                    onMouseEnter=${()=>C0(v)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&q1.length>0&&L`
                        <div class="slash-autocomplete" ref=${n1}>
                            ${q1.map((F,v)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${v===x1?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),m_(F)}}
                                    onMouseEnter=${()=>k1(v)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${w_} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${A1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!A1&&y.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!A1&&y.map((F,v)=>L`
                                    <button
                                        key=${F}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${L0===v?" active":""}${E===F?" current-model":""}`}
                                        onClick=${()=>{X4(F)}}
                                        disabled=${R0}
                                    >
                                        ${F}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{A4()}}
                                    disabled=${R0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${J0&&!j&&L`
                        <div class="compose-model-popup" ref=${v4} tabIndex="-1" onKeyDown=${T}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return S2(P1,H0)})()}
                                    </div>
                                `}
                                ${!E_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${E_&&z1.map((F,v)=>{let n=Boolean(F.archived_at),I0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof a0==="function",J1=f8(F,{currentChatJid:H0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${v0===v?" active":""}`}
                                                onClick=${()=>{if(n){O4(F.chat_jid);return}J4(F.chat_jid)}}
                                                disabled=${n?!k_:!M_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${I0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${F.agent_name}`}
                                                    onClick=${(S1)=>{S1.stopPropagation(),j0(!1),a0(F.chat_jid)}}
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
                            ${(r1||j_||I_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${r1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${L1.findIndex((F)=>F.key==="action:new")===v0?" active":""}`}
                                            onClick=${()=>{Y5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${j_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${L1.findIndex((F)=>F.key==="action:rename")===v0?" active":""}`}
                                            onClick=${(F)=>{D4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${s_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${I_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${L1.findIndex((F)=>F.key==="action:delete")===v0?" active":""}`}
                                            onClick=${()=>{g1()}}
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
                <div class="compose-footer" ref=${U_}>
                    ${!j&&E&&L`
                    <div class="compose-meta-row">
                        ${!j&&E&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${$5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Z5}
                                    aria-label="Open model picker"
                                    onClick=${L_}
                                    disabled=${R0}
                                >
                                    ${R0?"Switching…":H1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!R0&&T_&&L`
                                        <span class="compose-model-usage-hint" title=${Z5}>
                                            ${T_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${BY} usage=${D} onCompact=${E4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${Y4&&L`
                        ${P1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${P1.chat_jid||H0}
                                aria-label=${`Manage sessions for @${P1.agent_name}`}
                                onClick=${I1}
                            >@${P1.agent_name}</button>
                        `}
                        <button
                            ref=${u1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${J0?" active":""}`}
                            onClick=${I1}
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
                        onClick=${j?X:q}
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
                    ${u4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${c1}
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
                    ${j5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${o_?" active":""}`}
                            onClick=${o}
                            title=${R1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${x&&H&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${H}
                                title=${`Attach open file: ${x}`}
                                type="button"
                                disabled=${K.includes(x)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${r} />
                        </label>
                    `}
                    ${(D0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${D0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${D0}" title=${$_}>
                                    ${A_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{S_()}}
                                    disabled=${!__}
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
    `}var q$="piclaw_theme",g8="piclaw_tint",v2="piclaw_chat_themes",r5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},w2={default:{label:"Default",mode:"auto",light:r5,dark:u2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},FY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],s4={theme:"default",tint:null},b2="light",Z$=!1;function m8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function zY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),X=parseInt(Z[3],10);if(![Y,q,X].every((G)=>Number.isFinite(G)))return null;let K=`#${[Y,q,X].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:X,hex:K}}function g2(_){return O5(_)||zY(_)}function n5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function Y$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function HY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function JY(_){return HY(_)>0.4?"#000000":"#ffffff"}function m2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function X$(_){return w2[_]||w2.default}function OY(_){return _.mode==="auto"?m2():_.mode}function h2(_,$){let j=X$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||r5}function p2(_,$,j){let Q=g2($);if(!Q)return _;let Z=O5(_.bgPrimary),Y=O5(_.bgSecondary),q=O5(_.bgHover),X=O5(_.borderColor);if(!Z||!Y||!q||!X)return _;let G=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:n5(Z,Q,0.08),bgSecondary:n5(Y,Q,0.12),bgHover:n5(q,Q,0.16),borderColor:n5(X,Q,0.08),accent:Q.hex,accentHover:G?n5(Q,G,0.18):Q.hex}}function DY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=g2(Q),Y=Z?Y$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?Y$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=Z?Y$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?JY(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":X,"--accent-contrast-text":K,"--danger-color":_.danger||r5.danger,"--success-color":_.success||r5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function AY(){if(typeof document>"u")return;let _=document.documentElement;FY.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function f2(_){let $=m8(s4?.theme||"default"),j=s4?.tint?String(s4.tint).trim():null,Q=h2($,_);if($==="default"&&j)Q=p2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?u2.bgPrimary:r5.bgPrimary}function EY(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=J5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",f2("light"));let Z=J5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",f2("dark"));let Y=J5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let X=J5("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function MY(){if(typeof window>"u")return;let _={...s4,mode:b2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c2(){try{let _=z_(v2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function kY(_,$,j){let Q=c2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};G1(v2,JSON.stringify(Q))}function IY(_){if(!_)return null;return c2()[_]||null}function l2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function G$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=m8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=X$(j),Y=OY(Z),q=h2(j,Y);s4={theme:j,tint:Q},b2=Y;let X=document.documentElement;X.dataset.theme=Y,X.dataset.colorTheme=j,X.dataset.tint=Q?String(Q):"",X.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=p2(q,Q,Y);if(j==="default"&&!Q)AY();else DY(K,Y);if(EY(K.bgPrimary,Y),MY(),$.persist!==!1)if(G1(q$,j),Q)G1(g8,Q);else G1(g8,"")}function b8(){if(X$(s4.theme).mode!=="auto")return;G$(s4,{persist:!1})}function d2(){if(typeof window>"u")return()=>{};let _=l2(),$=IY(_),j=$?m8($.theme||"default"):m8(z_(q$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=z_(g8);return Z?Z.trim():null})();if(G$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!Z$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",b8);else if(Z.addListener)Z.addListener(b8);return Z$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",b8);else if(Z.removeListener)Z.removeListener(b8);Z$=!1}}return()=>{}}function i2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||l2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(kY($,j||"default",Q),G$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")G1(q$,j||"default"),G1(g8,Q||"")}function n2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return m2()}var h8=/#(\w+)/g,TY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),CY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),PY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),SY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},xY=new Set(["http:","https:","mailto:",""]);function K$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function a4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!xY.has(Q.protocol))return null;return Q.href}catch{return null}}function r2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let X=q.tagName.toLowerCase();if(!CY.has(X)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let K=SY[X]||new Set;for(let G of Array.from(q.attributes)){let N=G.name.toLowerCase(),V=G.value;if(N.startsWith("on")){q.removeAttribute(G.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(K.has(N)||PY.has(N)){if(N==="href"){let B=a4(V);if(!B)q.removeAttribute(G.name);else if(q.setAttribute(G.name,B),X==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let B=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=a4(B,{allowDataImage:X==="img"});if(!O)q.removeAttribute(G.name);else q.setAttribute(G.name,O)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function o2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function p8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=o2(j);if(Z===j)break;j=Z}return j}function yY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let X of j){if(!Y&&X.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&X.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(X);else Z.push(X)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function RY(_){if(!_)return _;return p8(_,5)}function wY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function fY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function vY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=RY(Y);return`<div class="mermaid-container" data-mermaid="${wY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function s2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var uY={span:new Set(["title","class","lang","dir"])};function bY(_,$){let j=uY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let X=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${K$(X)}"`)}return Q.join("")}function a2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,X=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=X.split(/\s+/,1),G=K.toLowerCase();if(!G||!TY.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let N=X.slice(K.length).trim(),V=bY(G,N);return`<${G}${V}>`})}function t2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function e2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function gY(_){if(!window.katex)return _;let $=(q)=>o2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let X=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let N=X.length;return X.push(G),`@@CODE_BLOCK_${N}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let N=X.length;return X.push(G),`@@CODE_INLINE_${N}@@`}),{html:K,blocks:X}},Q=(q,X)=>{if(!X.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,G)=>{let N=Number(G);return X[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,X,K)=>{try{let G=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${X}${G}`}catch(G){return`<span class="math-error" title="${K$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,X,K)=>{if(/\s$/.test(K))return q;try{let G=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${X}${G}`}catch(G){return`${X}<span class="math-error" title="${K$(G.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function mY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(h8.lastIndex=0,!h8.test(q))continue;h8.lastIndex=0;let X=Y.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let K=q.split(h8);if(K.length<=1)continue;let G=$.createDocumentFragment();K.forEach((N,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",N),B.textContent=`#${N}`,G.appendChild(B)}else G.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function hY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function pY(_){let $=hY(_||""),{text:j,blocks:Q}=yY($),Z=p8(j,2),q=s2(Z).replace(/</g,"&lt;");return{safeHtml:a2(q),mermaidBlocks:Q}}function H_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=pY(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=t2(Y),Y=e2(Y),Y=gY(Y),Y=mY(Y),Y=vY(Y,Z),Y=r2(Y,j),Y}function o5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=p8($,2),Z=s2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=a2(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=t2(q),q=e2(q),q=r2(q),q}function cY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[G,N]=K.split(",").map(Number);return{x:G,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let X=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let G=q[K-1],N=q[K],V=q[K+1],B=N.x-G.x,O=N.y-G.y,E=V.x-N.x,k=V.y-N.y,A=Math.sqrt(B*B+O*O),J=Math.sqrt(E*E+k*k),D=Math.min($,A/2,J/2);if(D<0.5){X.push(`L ${N.x},${N.y}`);continue}let I=N.x-B/A*D,i=N.y-O/A*D,h=N.x+E/J*D,o=N.y+k/J*D,R=B*k-O*E>0?1:0;X.push(`L ${I},${i}`),X.push(`A ${D},${D} 0 0 ${R} ${h},${o}`)}return X.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${X.join(" ")}"${Y}/>`})}async function V4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=n2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let X=q.dataset.mermaid,K=fY(X||""),G=p8(K,2),N=await $(G,{...Z,transparent:!0});N=cY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${X.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function _7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function $7(_){return String(_||"").trim()||"web:default"}function j7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Q7(_){if(!_)return!1;return _.status!=="running"}function Z7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Y7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=C(null),Y=C(null),q=_?.thinking?o5(_.thinking):"",X=_?.answer?H_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)V4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&X)V4(Y.current).catch(()=>{})},[X]),!_)return null;let K=_.status==="running",G=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=j7(_),B=Q7(_),O=!K&&G,E=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
            ${N&&L`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${B&&L`
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
    `}function lY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function dY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function x4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function X7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var G7="__PICLAW_WIDGET_HOST__:";function q7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function N$(_,$){if(!_||_.type!=="generated_widget")return null;let j=lY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:X7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function K7(_){if(!_||typeof _!=="object")return null;let $=dY(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Q=S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",q=S0(_?.subtitle)||"",X=S0(_?.description)||q,K=S0(_?.status),G=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:X,originPostId:x4(_?.origin_post_id)??x4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:X7(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:x4(_?.width),height:x4(_?.height),error:S0(_?.error)}}function N7(_){return N$(_,null)!==null}function J_(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Q=x4(_?.originPostId)??x4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function V7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function B7(_){return V7(_)?"allow-downloads allow-scripts":"allow-downloads"}function c8(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function l8(_){return{...c8(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:x4(_?.width),height:x4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function d8(_){return`${G7}${JSON.stringify(l8(_))}`}function W7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Q)return Q}return null}function U7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function L7(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function iY(_){let $=c8(_);return`<script>
(function () {
  const meta = ${q7($)};
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

  const windowNamePrefix = ${q7(G7)};
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
</script>`}function F7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let X=V7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",X?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=X?iY(_):"";return`<!doctype html>
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
${N}
</head>
<body>${G}</body>
</html>`}function z7({widget:_,onClose:$,onWidgetEvent:j}){let Q=C(null),Z=C(!1),Y=w0(()=>F7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(t)=>{let R=d8(_),x=t==="widget.init"?c8(_):l8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},I=()=>{D("widget.init"),D("widget.update")},i=()=>{Z.current=!0,I()};J.addEventListener("load",i);let o=[0,40,120,300,800].map((t)=>setTimeout(I,t));return()=>{J.removeEventListener("load",i),o.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=d8(_),I=l8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let I=D?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let i=Q.current,h=J_(_),o=J_({widgetId:I.widgetId,toolCallId:I.toolCallId});if(o&&h&&o!==h)return;if(!o&&i?.contentWindow&&D.source!==i.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let X=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,k=L7(_),A=B7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${X.toUpperCase()}</div>
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
                                name=${d8(_)}
                                sandbox=${A}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var H7="PiClaw";function V$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,X=Y[q],K=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",N=G?G:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:X,image:N||(V?"/static/icon-192.png":null)}}function J7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function O7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function D7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",X=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(X||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var nY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function B$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:X=new Set,onExtensionPanelAction:K,turnId:G,steerQueued:N,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:O=!0}){let A=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let y0=s,C0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:C0,fullText:y0}}let N0=s.text||"",z0=s.fullText||s.full_text||N0,q0=Number.isFinite(s.totalLines)?s.totalLines:z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N0,totalLines:q0,fullText:z0}},J=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),I=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},i=(s,N0,z0)=>{let q0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q0)return{text:"",omitted:0,totalLines:Number.isFinite(z0)?z0:0,visibleLines:0};let y0=q0.split(`
`),C0=y0.length>N0?y0.slice(0,N0).join(`
`):q0,f0=Number.isFinite(z0)?z0:y0.reduce((l0,O0)=>l0+I(O0),0),M0=C0?C0.split(`
`).reduce((l0,O0)=>l0+I(O0),0):0,R0=Math.max(f0-M0,0);return{text:C0,omitted:R0,totalLines:f0,visibleLines:M0}},h=A(j),o=A(Q),t=A($),R=Boolean(h.text)||h.totalLines>0,x=Boolean(o.text)||o.totalLines>0,H=Boolean(t.fullText?.trim()||t.text?.trim()),S=Boolean(_||H||R||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!B||!S)&&(!O||!p))return null;let[Q0,d]=m(new Set),[_0,e]=m(null),[Y0,X0]=m(()=>Date.now()),G0=(s)=>d((N0)=>{let z0=new Set(N0),q0=!z0.has(s);if(q0)z0.add(s);else z0.delete(s);if(typeof V==="function")V(s,q0);return z0});g(()=>{d(new Set),e(null)},[G]);let H0=N4(_);g(()=>{if(!H0)return;X0(Date.now());let s=setInterval(()=>X0(Date.now()),1000);return()=>clearInterval(s)},[H0,_?.started_at,_?.startedAt]);let D0=_?.turn_id||G,A0=D7(D0),n0=N?"turn-dot turn-dot-queued":"turn-dot",x0=(s)=>s,k0=Boolean(_?.last_activity||_?.lastActivity),r0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":A0,o0=Y?.kind||"info",b0=r0(o0),a0=r0(_?.kind||(H0?"warning":"info")),g0="",$1=_?.title,F0=_?.status;if(_?.type==="plan")g0=$1?`Planning: ${$1}`:"Planning...";else if(_?.type==="tool_call")g0=$1?`Running: ${$1}`:"Running tool...";else if(_?.type==="tool_status")g0=$1?`${$1}: ${F0||"Working..."}`:F0||"Working...";else if(_?.type==="error")g0=$1||"Agent error";else g0=$1||F0||"Working...";if(k0)g0="Last activity just now";let h0=({panelTitle:s,text:N0,fullText:z0,totalLines:q0,maxLines:y0,titleClass:C0,panelKey:f0})=>{let M0=Q0.has(f0),R0=z0||N0||"",l0=f0==="thought"||f0==="draft"?D(R0):R0,O0=typeof y0==="number",u0=M0&&O0,J0=O0?i(l0,y0,q0):{text:l0||"",omitted:0,totalLines:Number.isFinite(q0)?q0:0};if(!l0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,y=O0?`--agent-thinking-collapsed-lines: ${y0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
            >
                <div class="agent-thinking-title ${C0||""}">
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${s}
                    ${u0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>G0(f0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:o5(l0)}}
                />
                ${!M0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>G0(f0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${M0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>G0(f0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},j1=Z?.tool_call?.title,Y1=j1?`Awaiting approval: ${j1}`:"Awaiting approval",Y_=H0?u8(_,Y0):null,D1=(s,N0,z0=null)=>{let q0=v8(s);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${N0?`--turn-color: ${N0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${N0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q0}</span>
                    ${z0&&L`<span class="agent-status-elapsed">${z0}</span>`}
                </div>
                ${s.detail&&L`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},e0=(s,N0,z0,q0,y0,C0,f0,M0=8,R0=8)=>{let l0=Math.max(y0-q0,0.000000001),O0=Math.max(N0-M0*2,1),u0=Math.max(z0-R0*2,1),J0=Math.max(f0-C0,1),j0=f0===C0?N0/2:M0+(s.run-C0)/J0*O0,y=R0+(u0-(s.value-q0)/l0*u0);return{x:j0,y}},m1=(s,N0,z0,q0,y0,C0,f0,M0=8,R0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((l0,O0)=>{let{x:u0,y:J0}=e0(l0,N0,z0,q0,y0,C0,f0,M0,R0);return`${O0===0?"M":"L"} ${u0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},M1=(s,N0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${N0}`},q1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],m0=(s,N0)=>{let z0=q1;if(!Array.isArray(z0)||z0.length===0)return"var(--accent-color)";if(z0.length===1||!Number.isFinite(N0)||N0<=1)return z0[0];let y0=Math.max(0,Math.min(Number.isFinite(s)?s:0,N0-1))/Math.max(1,N0-1)*(z0.length-1),C0=Math.floor(y0),f0=Math.min(z0.length-1,C0+1),M0=y0-C0,R0=z0[C0],l0=z0[f0];if(!l0||C0===f0||M0<=0.001)return R0;if(M0>=0.999)return l0;let O0=Math.round((1-M0)*1000)/10,u0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${R0} ${O0}%, ${l0} ${u0}%)`},x1=(s,N0="autoresearch")=>{let z0=Array.isArray(s)?s.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],q0=z0.map((j0,y)=>({...j0,color:m0(y,z0.length)}));if(q0.length===0)return null;let y0=320,C0=120,f0=q0.flatMap((j0)=>j0.points),M0=f0.map((j0)=>j0.value),R0=f0.map((j0)=>j0.run),l0=Math.min(...M0),O0=Math.max(...M0),u0=Math.min(...R0),J0=Math.max(...R0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${q0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${y0} ${C0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${q0.map((j0)=>{let y=j0?.key||j0?.label||"series",a=_0?.panelKey===N0&&_0?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${a?" is-hovered":""}`}
                                        d=${m1(j0.points,y0,C0,l0,O0,u0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>e({panelKey:N0,seriesKey:y})}
                                        onMouseLeave=${()=>e((L0)=>L0?.panelKey===N0&&L0?.seriesKey===y?null:L0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${q0.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",a=j0?.key||j0?.label||"series";return j0.points.map((L0,E0)=>{let v0=e0(L0,y0,C0,l0,O0,u0,J0);return L`
                                    <button
                                        key=${`${a}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${v0.x/y0*100}%; top:${v0.y/C0*100}%;`}
                                        onMouseEnter=${()=>e({panelKey:N0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onMouseLeave=${()=>e((X1)=>X1?.panelKey===N0?null:X1)}
                                        onFocus=${()=>e({panelKey:N0,seriesKey:a,run:L0.run,value:L0.value,unit:y})}
                                        onBlur=${()=>e((X1)=>X1?.panelKey===N0?null:X1)}
                                        aria-label=${`${j0?.label||"Series"} ${M1(L0.value,y)} at run ${L0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${q0.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,a=typeof j0?.unit==="string"?j0.unit:"",L0=j0?.key||j0?.label||"series",E0=_0?.panelKey===N0&&_0?.seriesKey===L0?_0:null,v0=E0&&Number.isFinite(E0.value)?E0.value:y,X1=E0&&typeof E0.unit==="string"?E0.unit:a,A1=E0&&Number.isFinite(E0.run)?E0.run:null;return L`
                            <div key=${`${L0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${M1(v0,X1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(s)=>{if(!s)return null;let N0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,z0=Q0.has(N0),q0=s?.title||"Extension status",y0=s?.collapsed_text||"",C0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),f0=r0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),M0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",R0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",l0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",O0=Array.isArray(s?.series)?s.series:[],u0=Array.isArray(s?.actions)?s.actions:[],J0=Boolean(M0||l0),j0=Boolean(M0||O0.length>0||l0),y=[q0,y0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${z0?"true":"false"}
                style=${f0?`--turn-color: ${f0};`:""}
                title=${!z0?y||q0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?G0(N0):null}
                    >
                        ${f0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${q0}</span>
                        ${y0&&L`<span class="agent-thinking-title-meta">${y0}</span>`}
                    </button>
                    ${(u0.length>0||j0&&!z0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((a)=>{let L0=`${N0}:${a?.key||""}`,E0=X?.has?.(L0);return L`
                                            <button
                                                key=${L0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(s,a)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!z0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${q0}`}
                                    title="Expand details"
                                    onClick=${()=>G0(N0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&z0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${q0}`}
                        title="Collapse details"
                        onClick=${()=>G0(N0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${z0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${M0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:o5(M0)}}
                                    />
                                `}
                                ${l0&&L`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${l0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${nY}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${x1(O0,N0)}
                                    ${R0&&L`<div class="agent-series-chart-note">${R0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${B&&Y&&D1(Y,b0)}
            ${O&&Array.isArray(q)&&q.map((s)=>k1(s))}
            ${B&&_?.type==="intent"&&D1(_,a0,Y_)}
            ${B&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Y1}</span>
                </div>
            `}
            ${B&&R&&h0({panelTitle:x0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${B&&x&&h0({panelTitle:x0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&H&&h0({panelTitle:x0("Draft"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${k0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!k0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${g0}</span>
                </div>
            `}
        </div>
    `}function A7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",X=Q?.kind||"other",K=Q?.rawInput||{},G=K.command||K.commands&&K.commands[0]||null,N=K.diff||null,V=K.fileName||K.path||null,B=Q?.description||K.description||K.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),k=Array.from(new Set([V,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(I)=>{try{await I8(j,I,Y||null),$()}catch(i){console.error("Failed to respond to agent request:",i)}},J=async()=>{try{await h6(q,`Auto-approved: ${q}`),await I8(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},D=Z&&Z.length>0;return L`
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
                ${(B||G||N||k.length>0)&&L`
                    <div class="agent-request-body">
                        ${B&&L`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${k.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${k.map((I,i)=>L`<li key=${i}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&L`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${N&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${N}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Z.map((I)=>L`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>A(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>A("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>A("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${J}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function E7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${X}`}function s5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function t4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var rY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),oY=new Set(["text/markdown"]),sY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),aY=new Set(["application/vnd.jgraph.mxfile"]);function a5(_){return typeof _==="string"?_.trim().toLowerCase():""}function tY(_){let $=a5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function eY(_){let $=a5(_);return!!$&&$.endsWith(".pdf")}function _q(_){let $=a5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function t5(_,$){let j=a5(_);if(tY($)||aY.has(j))return"drawio";if(eY($)||j==="application/pdf")return"pdf";if(_q($)||sY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(rY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function M7(_){let $=a5(_);return oY.has($)}function k7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function $q(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function jq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function I7(_){return $q(_)||jq(_)}function i8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function Qq(_,$){let j=Math.max(i8(_),i8($)),Q=Math.min(i8(_),i8($));return(j+0.05)/(Q+0.05)}function Zq(_,$,j="#ffffff"){let Q=I7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let X=I7(q);if(!X)continue;let K=Qq(Q,X);if(K>Y)Z=q,Y=K}return Z}function W$(){let _=getComputedStyle(document.documentElement),$=(E,k)=>{for(let A of E){let J=_.getPropertyValue(A).trim();if(J)return J}return k},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),O=Zq(X,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:X,good:K,warning:G,attention:N,border:V,fontFamily:B,buttonTextColor:O}}function T7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:X,border:K,fontFamily:G}=W$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Yq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),C7=!1,n8=null,P7=!1;function U$(_){_.querySelector(".adaptive-card-notice")?.remove()}function qq(_,$,j="error"){U$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function Xq(_,$=(j)=>H_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Gq(_=($)=>H_($,null)){return($,j)=>{try{let Q=Xq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function Kq(_){if(P7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Gq(),P7=!0}async function Nq(){if(C7)return;if(n8)return n8;return n8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{C7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),n8}function Vq(){return globalThis.AdaptiveCards}function Bq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Wq(_){return Yq.has(_)}function F$(_){if(!Array.isArray(_))return[];return _.filter(Bq)}function Uq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function L$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>L$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${L$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Lq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return L$($);return typeof $==="string"?$:String($)}function Fq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((X)=>Q(X));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=Lq(q.type,j[q.id],q);for(let[X,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[X]=Q(K);return q};return Q(_)}function zq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Hq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Jq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=Hq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function S7(_,$,j){if(!Wq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Nq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Vq();Kq(Q);let Z=new Q.AdaptiveCard,Y=W$();Z.hostConfig=new Q.HostConfig(T7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:Fq($.payload,q);Z.parse(X),Z.onExecuteAction=(N)=>{let V=Uq(N);if(j?.onAction)U$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let O=B instanceof Error?B.message:String(B||"Action failed.");qq(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=Jq($);if(G){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,N.appendChild(V),G.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=G.detail,N.appendChild(B)}_.appendChild(N)}if(U$(_),_.appendChild(K),G)zq(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function e5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>e5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${e5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function x7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:e5(j)})).filter(($)=>$.value)}function Oq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z$(_){if(!Array.isArray(_))return[];return _.filter(Oq)}function y7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=e5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=x7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function R7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=x7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):e5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function D5({children:_,className:$=""}){let j=C(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{S4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),h5(()=>{let Q=j.current;if(!Q)return;return S4(_,Q),()=>{S4(null,Q)}},[_]),null}function Dq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?R_($):null},{label:"Added",value:_?.created_at?t4(_.created_at):null}].filter((Q)=>Q.value)}function Aq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=y_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function w7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=w0(()=>t5($?.content_type,Q),[$?.content_type,Q]),Y=k7(Z),q=w0(()=>M7($?.content_type),[$?.content_type]),[X,K]=m(Z==="text"),[G,N]=m(""),[V,B]=m(null),O=C(null),E=w0(()=>Dq($),[$]),k=w0(()=>Aq(_,Q,Z),[_,Q,Z]),A=w0(()=>{if(!q||!G)return"";return H_(G)},[q,G]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;V4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){K(!1),B(null);return}K(!0),B(null);try{let I=await d6(_);if(!J)N(I)}catch{if(!J)B("Failed to load text preview.")}finally{if(!J)K(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
        <${D5} className="attachment-preview-portal-root">
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
                                href=${y_(_)}
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
                        ${X&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!X&&V&&L`<div class="attachment-preview-state">${V}</div>`}
                        ${!X&&!V&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${y_(_)} alt=${Q} />
                        `}
                        ${!X&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&k&&L`
                            <iframe class="attachment-preview-frame" src=${k} title=${Q}></iframe>
                        `}
                        ${!X&&!V&&Z==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!X&&!V&&Z==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:A}}
                            />
                        `}
                        ${!X&&!V&&Z==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!X&&!V&&Z==="unsupported"&&L`
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
        </${D5}>
    `}function f7({src:_,onClose:$}){return g(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${D5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${D5}>
    `}function Eq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{F5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?R_(Y):"",K=t5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${y_(_)} download=${Z} class="file-attachment-main">
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
    `}function Mq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;F5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?y_(j):null,K=t5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${l_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${l_}
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
    `}function r8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?t4(Q):null;return L`
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
    `}function kq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?R_(_.size):"",Z=_.mime_type||"",Y=Cq(Z),q=a4(_.uri);return L`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
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
    `}function Iq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&L`
                ${Z&&L`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(K),N=document.createElement("a");N.href=G,N.download=Q.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Tq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=N$(_,$),Z=N7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",X=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",G=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
        <div class="generated-widget-launch" onClick=${(N)=>N.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${X&&L`<div class="generated-widget-launch-description">${X}</div>`}
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
    `}function Cq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Pq({preview:_}){let $=a4(_.url),j=a4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function Sq(_,$){return typeof _==="string"?_:""}var xq=1800,yq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Rq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,wq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function fq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function vq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let X=q||"idle";if(Y.dataset.copyState=X,X==="success")Y.innerHTML=Rq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(X==="error")Y.innerHTML=wq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=yq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",Z(X,"idle"),q.appendChild(X);let K=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await fq(V);Z(X,B?"success":"error");let O=j.get(X);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(X,"idle"),j.delete(X)},xq);j.set(X,E)};X.addEventListener("click",K),Q.push(()=>{X.removeEventListener("click",K);let G=j.get(X);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function uq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function bq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function gq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let N=j[G].trim();if((N==="Images:"||N==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let N=G.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],O=(V[2]||"").trim()||B;Z.push({id:B,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),X=j.slice(Y),K=[...q,...X].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function mq(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function hq(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(mq).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),X=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],G;while(G=X.nextNode())K.push(G);for(let N of K){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=N.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((k)=>k!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let k of O)if(Y.test(k)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=k,E.appendChild(A)}else E.appendChild(q.createTextNode(k));N.parentNode.replaceChild(E,N)}return q.body.innerHTML}function v7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:X,userAvatarUrl:K,userAvatarBackground:G,onDelete:N,isThreadReply:V,isThreadPrev:B,isThreadNext:O,isRemoving:E,highlightQuery:k,onFileRef:A,onOpenWidget:J}){let[D,I]=m(null),i=C(null),h=_.data,o=h.type==="agent_response",t=X||"You",R=o?Y||H7:t,x=o?V$(Y,q,!0):V$(t,K),H=typeof G==="string"?G.trim().toLowerCase():"",S=!o&&x.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(x.image),Q0=`background-color: ${S||p?"transparent":x.color}`,d=h.content_meta,_0=Boolean(d?.truncated),e=Boolean(d?.preview),Y0=_0&&!e,X0=_0?{originalLength:Number.isFinite(d?.original_length)?d.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(d?.max_length)?d.max_length:0}:null,G0=h.content_blocks||[],H0=h.media_ids||[],D0=Sq(h.content,h.link_previews),{content:A0,fileRefs:n0}=uq(D0),{content:x0,messageRefs:k0}=bq(A0),{content:r0,attachments:o0}=gq(x0);D0=r0;let b0=F$(G0),a0=z$(G0),g0=b0.length===1&&typeof b0[0]?.fallback_text==="string"?b0[0].fallback_text.trim():"",$1=a0.length===1?y7(a0[0]).trim():"",F0=Boolean(g0)&&D0?.trim()===g0||Boolean($1)&&D0?.trim()===$1,h0=Boolean(D0)&&!Y0&&!F0,j1=typeof k==="string"?k.trim():"",Y1=w0(()=>{if(!D0||F0)return"";let y=H_(D0,j);return j1?hq(y,j1):y},[D0,F0,j1]),Y_=(y,a)=>{y.stopPropagation(),I(y_(a))},[D1,e0]=m(null),m1=(y)=>{e0(y)},M1=(y)=>{y.stopPropagation(),N?.(_)},q1=(y,a)=>{let L0=new Set;if(!y||a.length===0)return{content:y,usedIds:L0};return{content:y.replace(/attachment:([^\s)"']+)/g,(v0,X1,A1,K1)=>{let h1=X1.replace(/^\/+/,""),B_=a.find((W_)=>W_.name&&W_.name.toLowerCase()===h1.toLowerCase()&&!L0.has(W_.id))||a.find((W_)=>!L0.has(W_.id));if(!B_)return v0;if(L0.add(B_.id),K1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${B_.id}`;return B_.name||"attachment"}),usedIds:L0}},m0=[],x1=[],k1=[],s=[],N0=[],z0=[],q0=[],y0=0;if(G0.length>0)G0.forEach((y)=>{if(y?.type==="text"&&y.annotations)q0.push(y.annotations);if(y?.type==="generated_widget")z0.push(y);else if(y?.type==="resource_link")s.push(y);else if(y?.type==="resource")N0.push(y);else if(y?.type==="file"){let a=H0[y0++];if(a)x1.push(a),k1.push({id:a,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let a=H0[y0++];if(a){let L0=typeof y?.mime_type==="string"?y.mime_type:void 0;m0.push({id:a,annotations:y?.annotations,mimeType:L0}),k1.push({id:a,name:y?.name||y?.filename||y?.title})}}});else if(H0.length>0){let y=o0.length>0;H0.forEach((a,L0)=>{let E0=o0[L0]||null;if(k1.push({id:a,name:E0?.label||null}),y)x1.push(a);else m0.push({id:a,annotations:null})})}if(o0.length>0)o0.forEach((y)=>{if(!y?.id)return;let a=k1.find((L0)=>String(L0.id)===String(y.id));if(a&&!a.name)a.name=y.label});let{content:C0,usedIds:f0}=q1(D0,k1);D0=C0;let M0=m0.filter(({id:y})=>!f0.has(y)),R0=x1.filter((y)=>!f0.has(y)),l0=o0.length>0?o0.map((y,a)=>({id:y.id||`attachment-${a+1}`,label:y.label||`attachment-${a+1}`})):k1.map((y,a)=>({id:y.id,label:y.name||`attachment-${a+1}`})),O0=w0(()=>F$(G0),[G0]),u0=w0(()=>z$(G0),[G0]),J0=w0(()=>{return O0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[O0]);g(()=>{if(!i.current)return;return V4(i.current),vq(i.current)},[Y1]);let j0=C(null);return g(()=>{if(!j0.current||O0.length===0)return;let y=j0.current;y.innerHTML="";for(let a of O0){let L0=document.createElement("div");y.appendChild(L0),S7(L0,a,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let v0=a4(E0.url||"");if(!v0)throw Error("Invalid URL");window.open(v0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await m6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),L0.textContent=a.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${o?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${O?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${o?"agent-avatar":""} ${x.image?"has-image":""}" style=${Q0}>
                ${x.image?L`<img src=${x.image} alt=${R} />`:x.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${M1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${R}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${E7(_.timestamp)}</a>
                </div>
                ${Y0&&X0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${s5(X0.originalLength)} chars
                            ${X0.maxLength?L` • Display limit: ${s5(X0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&X0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${s5(X0.maxLength)} of ${s5(X0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||k0.length>0||l0.length>0)&&L`
                    <div class="post-file-refs">
                        ${k0.map((y)=>{let a=(L0)=>{if(L0.preventDefault(),L0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${a}>
                                    <${l_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${n0.map((y)=>{let a=y.split("/").pop()||y;return L`
                                <${l_}
                                    prefix="post"
                                    label=${a}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${l0.map((y)=>L`
                            <${Mq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${m1}
                            />
                        `)}
                    </div>
                `}
                ${h0&&L`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Y1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let a=y.target.dataset.hashtag;if(a)j?.(a)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),I(y.target.src)}}
                    />
                `}
                ${O0.length>0&&L`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${u0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${u0.map((y,a)=>{let L0=R7(y),E0=`${y.card_id}-${a}`;return L`
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
                                            ${L0.fields.map((v0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${v0.key}: ${v0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${v0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${v0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${t4(L0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${z0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${z0.map((y,a)=>L`
                            <${Tq}
                                key=${y.widget_id||y.id||`${_.id}-widget-${a}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${J}
                            />
                        `)}
                    </div>
                `}
                ${q0.length>0&&L`
                    ${q0.map((y,a)=>L`
                        <${r8} key=${a} annotations=${y} />
                    `)}
                `}
                ${M0.length>0&&L`
                    <div class="media-preview">
                        ${M0.map(({id:y,mimeType:a})=>{let E0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?y_(y):l6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(v0)=>Y_(v0,y)}
                                />
                            `})}
                    </div>
                `}
                ${M0.length>0&&L`
                    ${M0.map(({annotations:y},a)=>L`
                        ${y&&L`<${r8} key=${a} annotations=${y} />`}
                    `)}
                `}
                ${R0.length>0&&L`
                    <div class="file-attachments">
                        ${R0.map((y)=>L`
                            <${Eq} key=${y} mediaId=${y} onPreview=${m1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&L`
                    <div class="resource-links">
                        ${s.map((y,a)=>L`
                            <div key=${a}>
                                <${kq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    <div class="resource-embeds">
                        ${N0.map((y,a)=>L`
                            <div key=${a}>
                                <${Iq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,a)=>L`
                            <${Pq} key=${a} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${f7} src=${D} onClose=${()=>I(null)} />`}
        ${D1&&L`
            <${w7}
                mediaId=${D1.mediaId}
                info=${D1.info}
                onClose=${()=>e0(null)}
            />
        `}
    `}function u7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:X,onOpenWidget:K,emptyMessage:G,timelineRef:N,agents:V,user:B,onDeletePost:O,reverse:E=!0,removingPostIds:k,searchQuery:A}){let[J,D]=m(!1),I=C(null),i=typeof IntersectionObserver<"u",h=P(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),o=P((d)=>{let{scrollTop:_0,scrollHeight:e,clientHeight:Y0}=d.target,X0=E?e-Y0-_0:_0,G0=Math.max(300,Y0);if(X0<G0)h()},[E,h]);g(()=>{if(!i)return;let d=I.current,_0=N?.current;if(!d||!_0)return;let e=300,Y0=new IntersectionObserver((X0)=>{for(let G0 of X0){if(!G0.isIntersecting)continue;h()}},{root:_0,rootMargin:`${e}px 0px ${e}px 0px`,threshold:0});return Y0.observe(d),()=>Y0.disconnect()},[i,$,j,N,h]);let t=C(h);if(t.current=h,g(()=>{if(i)return;if(!N?.current)return;let{scrollTop:d,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-d:d,X0=Math.max(300,e);if(Y0<X0)t.current?.()},[i,_,$,E,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:d,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-d:d,X0=Math.max(300,e);if(_0<=e+1||Y0<X0)t.current?.()},[_,$,J,E,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((d,_0)=>d.id-_0.id),x=(d)=>{let _0=d?.data?.thread_id;if(_0===null||_0===void 0||_0==="")return null;let e=Number(_0);return Number.isFinite(e)?e:null},H=new Map;for(let d=0;d<R.length;d+=1){let _0=R[d],e=Number(_0?.id),Y0=x(_0);if(Y0!==null){let X0=H.get(Y0)||{anchorIndex:-1,replyIndexes:[]};X0.replyIndexes.push(d),H.set(Y0,X0)}else if(Number.isFinite(e)){let X0=H.get(e)||{anchorIndex:-1,replyIndexes:[]};X0.anchorIndex=d,H.set(e,X0)}}let S=new Map;for(let[d,_0]of H.entries()){let e=new Set;if(_0.anchorIndex>=0)e.add(_0.anchorIndex);for(let Y0 of _0.replyIndexes)e.add(Y0);S.set(d,Array.from(e).sort((Y0,X0)=>Y0-X0))}let p=R.map((d,_0)=>{let e=x(d);if(e===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=S.get(e);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let X0=Y0.indexOf(_0);if(X0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:X0>0,hasThreadNext:X0<Y0.length-1}}),Q0=L`<div class="timeline-sentinel" ref=${I}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${N} onScroll=${o}>
            <div class="timeline-content">
                ${E?Q0:null}
                ${R.map((d,_0)=>{let e=Boolean(d.data?.thread_id&&d.data.thread_id!==d.id),Y0=k?.has?.(d.id),X0=p[_0]||{};return L`
                    <${v7}
                        key=${d.id}
                        post=${d}
                        isThreadReply=${e}
                        isThreadPrev=${X0.hasThreadPrev}
                        isThreadNext=${X0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${A}
                        agentName=${J7(d.data?.agent_id,V||{})}
                        agentAvatarUrl=${O7(d.data?.agent_id,V||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>Q?.(d)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${X}
                        onOpenWidget=${K}
                        onDelete=${O}
                    />
                `})}
                ${E?null:Q0}
            </div>
        </div>
    `}class b7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var i0=new b7;var o8=null,H$=null;function pq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function g7(){if(H$)return Promise.resolve(H$);if(!o8)o8=import(pq()).then((_)=>{return H$=_,_}).catch((_)=>{throw o8=null,_});return o8}class m7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await g7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var J$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new m7(_,$)}};function O$(){g7().catch(()=>{})}var e4="piclaw://terminal";var cq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},lq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},s8=null,D$=null;function dq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function iq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!dq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function nq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!s8)s8=iq(()=>Promise.resolve($.init?.())).catch((j)=>{throw s8=null,j});return await s8,$}async function rq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!D$)D$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await D$}async function oq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function sq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function aq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function B4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function tq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function h7(){let _=aq(),$=_?lq:cq,j=B4("--bg-primary",_?"#000000":"#ffffff"),Q=B4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=B4("--text-secondary",_?"#71767b":"#536471"),Y=B4("--accent-color","#1d9bf0"),q=B4("--danger-color",_?"#ff7b72":"#cf222e"),X=B4("--success-color",_?"#7ee787":"#1a7f37"),K=B4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=B4("--border-color",_?"#2f3336":"#eff3f4"),N=B4("--accent-soft-strong",tq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:K,red:q,green:X,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class A${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await nq();if(await rq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:h7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=h7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await oq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(sq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var E$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new A$(_,$)}},M$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new A$(_,$)}};function W4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function a8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function p7(_,$={}){if(W4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:eq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function I$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function T$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function C$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function c7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function l7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,X]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(X===null||X===void 0||X==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(X))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function eq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function _X(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function d7(_,$={}){if(W4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:_X(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function _8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function $X(_){try{return JSON.parse(_)}catch{return null}}function jX(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function QX(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class P${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=QX($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||$X;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=jX(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var $8=()=>{throw Error("Operation requires compiling with --exportRuntime")},ZX=typeof BigUint64Array<"u",j8=Symbol();var YX=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function i7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return YX.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function n7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return i7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,X,K){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${X}:${K}`)},Q.trace=Q.trace||function(Y,q,...X){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${X.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function r7(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||$8,q=j.__pin||$8,X=j.__unpin||$8,K=j.__collect||$8,G=j.__rtti_base,N=G?(H)=>H[G>>>2]:$8;_.__new=Y,_.__pin=q,_.__unpin=X,_.__collect=K;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(G+4>>>2)+H]}function B(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Q0=new Uint16Array(Q.buffer);for(let d=0,_0=p>>>1;d<S;++d)Q0[_0+d]=H.charCodeAt(d);return p}_.__newString=E;function k(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=k;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return i7(S,H)}_.__getString=A;function J(H,S,p){let Q0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Q0);case 3:return new Float64Array(Q0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Q0);case 1:return new(S?Int16Array:Uint16Array)(Q0);case 2:return new(S?Int32Array:Uint32Array)(Q0);case 3:return new(S?BigInt64Array:BigUint64Array)(Q0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Q0=B(H),d=O(Q0),_0=typeof p!=="number",e=_0?p.length:p,Y0=Y(e<<d,Q0&4?H:1),X0;if(Q0&4)X0=Y0;else{q(Y0);let G0=Y(Q0&2?16:12,H);X(Y0);let H0=new Uint32Array(Q.buffer);if(H0[G0+0>>>2]=Y0,H0[G0+4>>>2]=Y0,H0[G0+8>>>2]=e<<d,Q0&2)H0[G0+12>>>2]=e;X0=G0}if(_0){let G0=J(d,Q0&2048,Q0&4096),H0=Y0>>>d;if(Q0&16384)for(let D0=0;D0<e;++D0)G0[H0+D0]=p[D0];else G0.set(p,H0)}return X0}_.__newArray=D;function I(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Q0=B(p),d=O(Q0),_0=Q0&4?H:S[H+4>>>2],e=Q0&2?S[H+12>>>2]:S[_0+-4>>>2]>>>d;return J(d,Q0&2048,Q0&4096).subarray(_0>>>=d,_0+e)}_.__getArrayView=I;function i(H){let S=I(H),p=S.length,Q0=Array(p);for(let d=0;d<p;d++)Q0[d]=S[d];return Q0}_.__getArray=i;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=o;function t(H,S,p){return new H(R(H,S,p))}function R(H,S,p){let Q0=Q.buffer,d=new Uint32Array(Q0);return new H(Q0,d[p+4>>>2],d[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=t.bind(null,H,p),_[`__get${S}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),ZX)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,XX(j,_)}function o7(_){return typeof Response<"u"&&_ instanceof Response}function qX(_){return _ instanceof WebAssembly.Module}async function S$(_,$={}){if(o7(_=await _))return t8(_,$);let j=qX(_)?_:await WebAssembly.compile(_),Q=n7($),Z=await WebAssembly.instantiate(j,$),Y=r7(Q,Z);return{module:j,instance:Z,exports:Y}}async function t8(_,$={}){if(!WebAssembly.instantiateStreaming)return S$(o7(_=await _)?_.arrayBuffer():_,$);let j=n7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=r7(j,Q.instance);return{...Q,exports:Z}}function XX(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let X=Y[0],K=X.indexOf("#");if(K>=0){let G=X.substring(0,K),N=q[G];if(typeof N>"u"||!N.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[j8]}},V.wrap=function(B){return Object.create(V.prototype,{[j8]:{value:B,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(N,B)));q[G]=V}if(X=X.substring(K+1),q=q[G].prototype,/^(get|set):/.test(X)){if(!Object.hasOwn(q,X=X.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,X,{get(){return V(this[j8])},set(O){B(this[j8],O)},enumerable:!0})}}else if(X==="constructor")(q[X]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[X]=function(...V){return j(V.length),Z(this[j8],...V)}).original=Z}else if(/^(get|set):/.test(X)){if(!Object.hasOwn(q,X=X.substring(4)))Object.defineProperty(q,X,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[X]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[X]=Z}return $}var KX="/static/js/vendor/remote-display-decoder.wasm",e8=null;function s7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function a7(){if(e8)return e8;return e8=(async()=>{try{let Q=function(Z,Y,q,X,K,G,N){let V=s7(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,X,K,G,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(KX,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof t8==="function"?await t8(_,{}):await S$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,X,K,G){return Q("processRawRect",Z,Y,q,X,K,G)},processCopyRect(Z,Y,q,X,K,G){return j.processCopyRect(Z,Y,q,X,K,G)},processRreRect(Z,Y,q,X,K,G){return Q("processRreRect",Z,Y,q,X,K,G)},processHextileRect(Z,Y,q,X,K,G){return Q("processHextileRect",Z,Y,q,X,K,G)},processZrleTileData(Z,Y,q,X,K,G){return Q("processZrleTileData",Z,Y,q,X,K,G)},decodeRawRectToRgba(Z,Y,q,X){let K=s7(Z),G=j.__pin(j.__newArrayBuffer(K));try{let N=j.__pin(j.decodeRawRectToRgba(G,Y,q,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),e8}function A5(_,$,j){return Math.max($,Math.min(j,_))}function _6(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function y$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function t7(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),X=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/X,N=(Number($||0)-Number(j?.top||0))/K;return{x:A5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(N*q),0,Math.max(0,q-1))}}function e7(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[_6(Y,$,j),_6(Number(Q||0),$,j)]}function _9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function Q8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function $9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),X=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/X);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var x$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)x$[`F${_}`]=65470+(_-1);function R$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(x$,Y))return x$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var v1=Uint8Array,O_=Uint16Array,p$=Int32Array,$6=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),j6=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),b$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Y9=function(_,$){var j=new O_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new p$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},q9=Y9($6,2),X9=q9.b,g$=q9.r;X9[28]=258,g$[258]=28;var G9=Y9(j6,0),NX=G9.b,j9=G9.r,m$=new O_(32768);for(c0=0;c0<32768;++c0)$4=(c0&43690)>>1|(c0&21845)<<1,$4=($4&52428)>>2|($4&13107)<<2,$4=($4&61680)>>4|($4&3855)<<4,m$[c0]=(($4&65280)>>8|($4&255)<<8)>>1;var $4,c0,j4=function(_,$,j){var Q=_.length,Z=0,Y=new O_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new O_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var X;if(j){X=new O_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var B=V|(1<<N)-1;V<=B;++V)X[m$[V]>>K]=G}}else{X=new O_(Q);for(Z=0;Z<Q;++Z)if(_[Z])X[Z]=m$[q[_[Z]-1]++]>>15-_[Z]}return X},y4=new v1(288);for(c0=0;c0<144;++c0)y4[c0]=8;var c0;for(c0=144;c0<256;++c0)y4[c0]=9;var c0;for(c0=256;c0<280;++c0)y4[c0]=7;var c0;for(c0=280;c0<288;++c0)y4[c0]=8;var c0,X8=new v1(32);for(c0=0;c0<32;++c0)X8[c0]=5;var c0,VX=j4(y4,9,0),BX=j4(y4,9,1),WX=j4(X8,5,0),UX=j4(X8,5,1),w$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},d_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},f$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},c$=function(_){return(_+7)/8|0},q8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var LX=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V_=function(_,$,j){var Q=Error($||LX[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,V_);if(!j)throw Q;return Q},FX=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new v1(0);var q=!j,X=q||$.i!=2,K=$.i;if(q)j=new v1(Z*3);var G=function($1){var F0=j.length;if($1>F0){var h0=new v1(Math.max(F0*2,$1));h0.set(j),j=h0}},N=$.f||0,V=$.p||0,B=$.b||0,O=$.l,E=$.d,k=$.m,A=$.n,J=Z*8;do{if(!O){N=d_(_,V,1);var D=d_(_,V+1,3);if(V+=3,!D){var I=c$(V)+4,i=_[I-4]|_[I-3]<<8,h=I+i;if(h>Z){if(K)V_(0);break}if(X)G(B+i);j.set(_.subarray(I,h),B),$.b=B+=i,$.p=V=h*8,$.f=N;continue}else if(D==1)O=BX,E=UX,k=9,A=5;else if(D==2){var o=d_(_,V,31)+257,t=d_(_,V+10,15)+4,R=o+d_(_,V+5,31)+1;V+=14;var x=new v1(R),H=new v1(19);for(var S=0;S<t;++S)H[b$[S]]=d_(_,V+S*3,7);V+=t*3;var p=w$(H),Q0=(1<<p)-1,d=j4(H,p,1);for(var S=0;S<R;){var _0=d[d_(_,V,Q0)];V+=_0&15;var I=_0>>4;if(I<16)x[S++]=I;else{var e=0,Y0=0;if(I==16)Y0=3+d_(_,V,3),V+=2,e=x[S-1];else if(I==17)Y0=3+d_(_,V,7),V+=3;else if(I==18)Y0=11+d_(_,V,127),V+=7;while(Y0--)x[S++]=e}}var X0=x.subarray(0,o),G0=x.subarray(o);k=w$(X0),A=w$(G0),O=j4(X0,k,1),E=j4(G0,A,1)}else V_(1);if(V>J){if(K)V_(0);break}}if(X)G(B+131072);var H0=(1<<k)-1,D0=(1<<A)-1,A0=V;for(;;A0=V){var e=O[f$(_,V)&H0],n0=e>>4;if(V+=e&15,V>J){if(K)V_(0);break}if(!e)V_(2);if(n0<256)j[B++]=n0;else if(n0==256){A0=V,O=null;break}else{var x0=n0-254;if(n0>264){var S=n0-257,k0=$6[S];x0=d_(_,V,(1<<k0)-1)+X9[S],V+=k0}var r0=E[f$(_,V)&D0],o0=r0>>4;if(!r0)V_(3);V+=r0&15;var G0=NX[o0];if(o0>3){var k0=j6[o0];G0+=f$(_,V)&(1<<k0)-1,V+=k0}if(V>J){if(K)V_(0);break}if(X)G(B+131072);var b0=B+x0;if(B<G0){var a0=Y-G0,g0=Math.min(G0,b0);if(a0+B<0)V_(3);for(;B<g0;++B)j[B]=Q[a0+B]}for(;B<b0;++B)j[B]=j[B-G0]}}if($.l=O,$.p=A0,$.b=B,$.f=N,O)N=1,$.m=k,$.d=E,$.n=A}while(!N);return B!=j.length&&q?q8(j,0,B):j.subarray(0,B)},L4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},Z8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},v$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:N9,l:0};if(Z==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var X=j[0],K=j[1],G=0,N=1,V=2;j[0]={s:-1,f:X.f+K.f,l:X,r:K};while(N!=Z-1)X=j[j[G].f<j[V].f?G++:V++],K=j[G!=N&&j[G].f<j[V].f?G++:V++],j[N++]={s:-1,f:X.f+K.f,l:X,r:K};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var O=new O_(B+1),E=h$(j[N-1],O,0);if(E>$){var Q=0,k=0,A=E-$,J=1<<A;Y.sort(function(o,t){return O[t.s]-O[o.s]||o.f-t.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)k+=J-(1<<E-O[D]),O[D]=$;else break}k>>=A;while(k>0){var I=Y[Q].s;if(O[I]<$)k-=1<<$-O[I]++-1;else++Q}for(;Q>=0&&k;--Q){var i=Y[Q].s;if(O[i]==$)--O[i],++k}E=$}return{t:new v1(O),l:E}},h$=function(_,$,j){return _.s==-1?Math.max(h$(_.l,$,j+1),h$(_.r,$,j+1)):$[_.s]=j},Q9=function(_){var $=_.length;while($&&!_[--$]);var j=new O_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var X=1;X<=$;++X)if(_[X]==Z&&X!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[X]}return{c:j.subarray(0,Q),n:$}},Y8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},K9=function(_,$,j){var Q=j.length,Z=c$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},Z9=function(_,$,j,Q,Z,Y,q,X,K,G,N){L4($,N++,j),++Z[256];var V=v$(Z,15),B=V.t,O=V.l,E=v$(Y,15),k=E.t,A=E.l,J=Q9(B),D=J.c,I=J.n,i=Q9(k),h=i.c,o=i.n,t=new O_(19);for(var R=0;R<D.length;++R)++t[D[R]&31];for(var R=0;R<h.length;++R)++t[h[R]&31];var x=v$(t,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[b$[p-1]];--p);var Q0=G+5<<3,d=Y8(Z,y4)+Y8(Y,X8)+q,_0=Y8(Z,B)+Y8(Y,k)+q+14+3*p+Y8(t,H)+2*t[16]+3*t[17]+7*t[18];if(K>=0&&Q0<=d&&Q0<=_0)return K9($,N,_.subarray(K,K+G));var e,Y0,X0,G0;if(L4($,N,1+(_0<d)),N+=2,_0<d){e=j4(B,O,0),Y0=B,X0=j4(k,A,0),G0=k;var H0=j4(H,S,0);L4($,N,I-257),L4($,N+5,o-1),L4($,N+10,p-4),N+=14;for(var R=0;R<p;++R)L4($,N+3*R,H[b$[R]]);N+=3*p;var D0=[D,h];for(var A0=0;A0<2;++A0){var n0=D0[A0];for(var R=0;R<n0.length;++R){var x0=n0[R]&31;if(L4($,N,H0[x0]),N+=H[x0],x0>15)L4($,N,n0[R]>>5&127),N+=n0[R]>>12}}}else e=VX,Y0=y4,X0=WX,G0=X8;for(var R=0;R<X;++R){var k0=Q[R];if(k0>255){var x0=k0>>18&31;if(Z8($,N,e[x0+257]),N+=Y0[x0+257],x0>7)L4($,N,k0>>23&31),N+=$6[x0];var r0=k0&31;if(Z8($,N,X0[r0]),N+=G0[r0],r0>3)Z8($,N,k0>>5&8191),N+=j6[r0]}else Z8($,N,e[k0]),N+=Y0[k0]}return Z8($,N,e[256]),N+Y0[256]},zX=new p$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),N9=new v1(0),HX=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,X=new v1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=X.subarray(Q,X.length-Z),G=Y.l,N=(Y.r||0)&7;if($){if(N)K[0]=Y.r>>3;var V=zX[$-1],B=V>>13,O=V&8191,E=(1<<j)-1,k=Y.p||new O_(32768),A=Y.h||new O_(E+1),J=Math.ceil(j/3),D=2*J,I=function(j1){return(_[j1]^_[j1+1]<<J^_[j1+2]<<D)&E},i=new p$(25000),h=new O_(288),o=new O_(32),t=0,R=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Q0=I(x),d=x&32767,_0=A[Q0];if(k[d]=_0,A[Q0]=d,S<=x){var e=q-x;if((t>7000||H>24576)&&(e>423||!G)){N=Z9(_,K,0,i,h,o,R,H,p,x-p,N),H=t=R=0,p=x;for(var Y0=0;Y0<286;++Y0)h[Y0]=0;for(var Y0=0;Y0<30;++Y0)o[Y0]=0}var X0=2,G0=0,H0=O,D0=d-_0&32767;if(e>2&&Q0==I(x-D0)){var A0=Math.min(B,e)-1,n0=Math.min(32767,x),x0=Math.min(258,e);while(D0<=n0&&--H0&&d!=_0){if(_[x+X0]==_[x+X0-D0]){var k0=0;for(;k0<x0&&_[x+k0]==_[x+k0-D0];++k0);if(k0>X0){if(X0=k0,G0=D0,k0>A0)break;var r0=Math.min(D0,k0-2),o0=0;for(var Y0=0;Y0<r0;++Y0){var b0=x-D0+Y0&32767,a0=k[b0],g0=b0-a0&32767;if(g0>o0)o0=g0,_0=b0}}}d=_0,_0=k[d],D0+=d-_0&32767}}if(G0){i[H++]=268435456|g$[X0]<<18|j9[G0];var $1=g$[X0]&31,F0=j9[G0]&31;R+=$6[$1]+j6[F0],++h[257+$1],++o[F0],S=x+X0,++t}else i[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)i[H++]=_[x],++h[_[x]];if(N=Z9(_,K,G,i,h,o,R,H,p,x-p,N),!G)Y.r=N&7|K[N/8|0]<<3,N-=7,Y.h=A,Y.p=k,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+G;x+=65535){var h0=x+65535;if(h0>=q)K[N/8|0]=G,h0=q;N=K9(K,N+1,_.subarray(x,h0))}Y.i=q}return q8(X,0,Q+c$(N)+Z)};var V9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var X=Math.min(q+2655,Y);for(;q<X;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},JX=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new v1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return HX(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var B9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var OX=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=V9();Z.p($.dictionary),B9(_,2,Z.d())}},DX=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)V_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)V_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var u$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new v1(32768),this.p=new v1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)V_(5);if(this.d)V_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=FX(this.p,this.s,this.o);this.ondata(q8(Q,j,this.s.b),this.d),this.o=q8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=q8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function W9(_,$){if(!$)$={};var j=V9();j.p(_);var Q=JX(_,$,$.dictionary?6:2,4);return OX(Q,$),B9(Q,Q.length-4,j.d()),Q}var U9=function(){function _($,j){u$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(u$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(DX(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)V_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}u$.prototype.c.call(this,j)},_}();var AX=typeof TextDecoder<"u"&&new TextDecoder,EX=0;try{AX.decode(N9,{stream:!0}),EX=1}catch(_){}var MX=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],kX=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],IX=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],TX=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],CX=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],PX=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],SX=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],xX=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],z9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;z9[_]=$}function H9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function J9(_){let $=0n,j=H9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function yX(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function E5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function L9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function RX(_){let $=E5(J9(_),CX,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of SX){j=L9(j,Y),Q=L9(Q,Y);let q=j<<28n|Q;Z.push(E5(q,PX,56))}return Z}function wX(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(xX[j][Y][q])}return $}function fX(_,$){let j=E5(_,IX,32)^BigInt($),Q=wX(j);return E5(Q,TX,32)}function F9(_,$){let j=RX($),Q=E5(J9(_),MX,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let X of j){let K=Y,G=(Z^fX(Y,X))&0xffffffffn;Z=K,Y=G}let q=Y<<32n|Z;return yX(E5(q,kX,64),8)}function vX(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=z9[Z]}return j}function O9(_,$){let j=H9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=vX(_),Z=new Uint8Array(16);return Z.set(F9(j.slice(0,8),Q),0),Z.set(F9(j.slice(8,16),Q),8),Z}var i_="vnc";function uX(_){return Number(_)}function bX(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=uX(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function gX(_,$){let j=I5(_),Q=I5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function mX(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=I5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function hX(){return(_)=>{let $=I5(_);try{let j=[],Q=new U9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return mX(j)}catch(j){try{let Q=W9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function pX(_){return new TextEncoder().encode(String(_||""))}function M5(_){return new TextDecoder().decode(I5(_))}function cX(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function lX(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function D9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function dX(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function iX(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function A9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function k5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function M9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function nX(_,$,j,Q){let Z=Q||T5,Y=I5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),X=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<X)throw Error(`Incomplete raw rectangle payload: expected ${X} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=M9(Y,G,q,Z.bigEndian),O=k5(B>>>Z.redShift&Z.redMax,Z.redMax),E=k5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),k=k5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);K[N]=O,K[N+1]=E,K[N+2]=k,K[N+3]=255,G+=q,N+=4}return K}function F4(_,$,j){let Q=j||T5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=M9(_,$,Z,Q.bigEndian);return{rgba:[k5(Y>>>Q.redShift&Q.redMax,Q.redMax),k5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),k5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function R4(_,$,j,Q,Z,Y,q){if(!q)return;for(let X=0;X<Y;X+=1)for(let K=0;K<Z;K+=1){let G=((Q+X)*$+(j+K))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function k9(_,$,j,Q,Z,Y,q){for(let X=0;X<Y;X+=1){let K=X*Z*4,G=((Q+X)*$+j)*4;_.set(q.subarray(K,K+Z*4),G)}}function E9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function rX(_,$,j,Q,Z,Y,q){let X=Z||T5,K=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let N=_.slice($+4,$+4+G),V;try{V=q(N)}catch{return{consumed:4+G,skipped:!0}}let B=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let k=Math.min(64,Q-E);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<B+1)return null;let D=V[B++],I=D&127,i=(D&128)!==0;if(!i&&I===0){let h=J*k*K;if(V.byteLength<B+h)return null;let o=Y(V.slice(B,B+h),J,k,X);B+=h,k9(O,j,A,E,J,k,o);continue}if(!i&&I===1){let h=F4(V,B,X);if(!h)return null;B+=h.bytesPerPixel,R4(O,j,A,E,J,k,h.rgba);continue}if(!i&&I>1&&I<=16){let h=[];for(let x=0;x<I;x+=1){let H=F4(V,B,X);if(!H)return null;B+=H.bytesPerPixel,h.push(H.rgba)}let o=I<=2?1:I<=4?2:4,t=Math.ceil(J*o/8),R=t*k;if(V.byteLength<B+R)return null;for(let x=0;x<k;x+=1){let H=B+x*t;for(let S=0;S<J;S+=1){let p=S*o,Q0=H+(p>>3),d=8-o-(p&7),_0=V[Q0]>>d&(1<<o)-1;R4(O,j,A+S,E+x,1,1,h[_0])}}B+=R;continue}if(i&&I===0){let h=0,o=0;while(o<k){let t=F4(V,B,X);if(!t)return null;B+=t.bytesPerPixel;let R=E9(V,B);if(!R)return null;B+=R.consumed;for(let x=0;x<R.runLength;x+=1)if(R4(O,j,A+h,E+o,1,1,t.rgba),h+=1,h>=J){if(h=0,o+=1,o>=k)break}}continue}if(i&&I>0){let h=[];for(let R=0;R<I;R+=1){let x=F4(V,B,X);if(!x)return null;B+=x.bytesPerPixel,h.push(x.rgba)}let o=0,t=0;while(t<k){if(V.byteLength<B+1)return null;let R=V[B++],x=R,H=1;if(R&128){x=R&127;let p=E9(V,B);if(!p)return null;B+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(R4(O,j,A+o,E+t,1,1,S),o+=1,o>=J){if(o=0,t+=1,t>=k)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:O,decompressed:V}}function oX(_,$,j,Q,Z){let Y=Z||T5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+K*(q+8);if(_.byteLength<$+G)return null;let N=$+4,V=F4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);R4(B,j,0,0,j,Q,V.rgba);for(let O=0;O<K;O+=1){let E=F4(_,N,Y);if(!E)return null;if(N+=E.bytesPerPixel,_.byteLength<N+8)return null;let k=new DataView(_.buffer,_.byteOffset+N,8),A=k.getUint16(0,!1),J=k.getUint16(2,!1),D=k.getUint16(4,!1),I=k.getUint16(6,!1);N+=8,R4(B,j,A,J,D,I,E.rgba)}return{consumed:N-$,rgba:B}}function sX(_,$,j,Q,Z,Y){let q=Z||T5,X=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,N=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let O=Math.min(16,Q-B);for(let E=0;E<j;E+=16){let k=Math.min(16,j-E);if(_.byteLength<G+1)return null;let A=_[G++];if(A&1){let J=k*O*X;if(_.byteLength<G+J)return null;let D=Y(_.slice(G,G+J),k,O,q);G+=J,k9(K,j,E,B,k,O,D);continue}if(A&2){let J=F4(_,G,q);if(!J)return null;N=J.rgba,G+=J.bytesPerPixel}if(R4(K,j,E,B,k,O,N),A&4){let J=F4(_,G,q);if(!J)return null;V=J.rgba,G+=J.bytesPerPixel}if(A&8){if(_.byteLength<G+1)return null;let J=_[G++];for(let D=0;D<J;D+=1){let I=V;if(A&16){let H=F4(_,G,q);if(!H)return null;I=H.rgba,G+=H.bytesPerPixel}if(_.byteLength<G+2)return null;let i=_[G++],h=_[G++],o=i>>4,t=i&15,R=(h>>4)+1,x=(h&15)+1;R4(K,j,E+o,B+t,R,x,I)}}}}return{consumed:G-$,rgba:K}}var T5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Q6{protocol=i_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:nX,this.pipeline=_.pipeline||null,this.encodings=bX(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...T5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:hX()}receive(_){if(_)this.buffer=gX(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=M5(Z),q=cX(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=lX(q),j.push(pX(this.clientVersionText)),$.push({type:"protocol-version",protocol:i_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let G=M5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:i_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:i_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+X)break;let K=M5(this.consume(4+X).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:i_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:i_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(O9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let X=M5(this.consume(4+q).slice(4));throw Error(X||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:i_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),X=D9(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let G=this.consume(24),N=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=D9(N,4),this.serverName=M5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(dX(this.clientPixelFormat)),j.push(iX(this.encodings)),j.push(A9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:i_,width:Y,height:q,name:this.serverName,pixelFormat:X}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),X=4,K=[],G=!1,N=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<X+12){G=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+X,12),E=O.getUint16(0,!1),k=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(X+=12,D===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),i=A*J*I;if(this.buffer.byteLength<X+i){G=!0;break}let h=this.buffer.slice(X,X+i);if(X+=i,N)this.pipeline.processRawRect(h,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let I=oX(this.buffer,X,A,J,this.clientPixelFormat);if(!I){G=!0;break}if(N){let i=this.buffer.slice(X,X+I.consumed);this.pipeline.processRreRect(i,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});X+=I.consumed;continue}if(D===1){if(this.buffer.byteLength<X+4){G=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+X,4),i=I.getUint16(0,!1),h=I.getUint16(2,!1);if(X+=4,N)this.pipeline.processCopyRect(E,k,A,J,i,h),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"copy",x:E,y:k,width:A,height:J,srcX:i,srcY:h});continue}if(D===16){let I=rX(this.buffer,X,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){G=!0;break}if(X+=I.consumed,I.skipped)continue;if(N&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J});else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});continue}if(D===5){let I=sX(this.buffer,X,A,J,this.clientPixelFormat,this.decodeRawRect);if(!I){G=!0;break}if(N){let i=this.buffer.slice(X,X+I.consumed);this.pipeline.processHextileRect(i,E,k,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:k,width:A,height:J})}else K.push({kind:"rgba",x:E,y:k,width:A,height:J,rgba:I.rgba});X+=I.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);K.push({kind:"resize",x:E,y:k,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(X);let V={type:"framebuffer-update",protocol:i_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(A9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:i_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let X=M5(this.consume(q));$.push({type:"clipboard",protocol:i_,text:X}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var z4="piclaw://vnc";function aX(_){let $=String(_||"");if($===z4)return null;if(!$.startsWith(`${z4}/`))return null;let j=$.slice(`${z4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function _5(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function tX(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function eX(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function _G(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function $G(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function jG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class I9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=aX($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=jG("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${_5(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${_5(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${_5(Z.id)}" data-target-label="${_5(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=$G(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=Q8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${_5($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${_5(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=Q8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=Q8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=$9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return t7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=y$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~y$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of e7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=R$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??R$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Q6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await a7(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(X,K,G,N)=>Q.decodeRawRectToRgba(X,K,G,N);let Y=Q8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Q6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new P$({url:_G(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(X)=>{this.applyMetrics(X)},onMessage:(X)=>{this.handleSocketMessage(X)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await tX(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${_5(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await eX(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var l$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===z4||$.startsWith(`${z4}/`)?9000:!1},mount(_,$){return new I9(_,$)}};function w4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function QG(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${X?`${X}/`:""}${Z}`,N=[];for(let B of G.split("/")){if(!B||B===".")continue;if(B===".."){if(N.length>0)N.pop();continue}N.push(B)}let V=N.join("/");return`${C8(V)}${Y}${q}`}function G8(_){return _?.preview||null}function ZG(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function YG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function qG(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${w4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${w4(R_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${w4(t4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${w4(YG($))}</span>`),Q.push(`<span><strong>extension:</strong> ${w4(ZG(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${w4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function XG(_){let $=G8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=qG(_,$);if($.kind==="image"){let Q=$.url||($.path?C8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${w4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=H_($.text||"",null,{rewriteImageSrc:(Z)=>QG(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${w4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class d${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=XG(this.context)}getContent(){let _=G8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=G8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var i$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=G8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new d$(_,$)}},n$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return G8(_)||_?.path?1:!1},mount(_,$){return new d$(_,$)}};var GG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),KG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},NG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function C9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=C9(j),Y=NG[Z]||"\uD83D\uDCC4",q=KG[Z]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${T9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${T9(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let K=X.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=C9(_?.path);if(!$||!GG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new P9(_,$);return new S9(_,$)}};var VG=/\.(csv|tsv)$/i;function x9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${x9(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${x9(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new y9(_,$);return new R9(_,$)}};var BG=/\.pdf$/i;function WG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${WG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new w9(_,$);return new f9(_,$)}};var UG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function a$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${a$(Z)}" alt="${a$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${a$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new v9(_,$);return new u9(_,$)}};var LG=/\.(mp4|m4v|mov|webm|ogv)$/i;function FG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${FG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new b9(_,$);return new g9(_,$)}};function zG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function HG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var _3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function m9(_){let $=String(_||"").trim();return $?$:_3}function JG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function OG(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function DG(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,X,K,G,N,V){try{if(q&&K!=null&&j({filename:q,format:X,data:K,mimeType:G,base64Encoded:Boolean(N),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,X,K,G,N,V){try{if(X&&j({filename:X,data:q,mimeType:K,base64Encoded:Boolean(G),mode:N,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function h9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${OG(j)}`}class p9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${HG(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=JG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(DG(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=_3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await h9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await h9(_,"image/png");else this.xmlData=m9(await _.text());else if(_.status===404)this.xmlData=_3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?m9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var $3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!zG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};var AG=/\.mindmap\.ya?ml$/i,j3=String(Date.now());function l9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Q3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function EG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function MG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(Q)}class d9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class i9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(l9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,EG("/static/css/mindmap.css"),await Promise.all([Q3("/static/js/vendor/d3-mindmap.min.js?v="+j3),Q3("/static/js/vendor/js-yaml.min.js?v="+j3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),MG(this.mindmapEl);let j=l9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await Q3("/static/js/vendor/mindmap-editor.js?v="+j3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Z3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new d9(_,$);return new i9(_,$)}};var kG=/\.kanban\.md$/i,IG=String(Date.now());function n9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function TG(){let _=window;if(_.preact)return;_.preact={h:M8,render:S4,Component:B5,createContext:J2},_.preactHooks={useState:m,useEffect:g,useCallback:P,useRef:C,useMemo:w0,useReducer:S6,useContext:A2,useLayoutEffect:h5,useImperativeHandle:D2,useErrorBoundary:M2,useDebugValue:E2},_.htm={bind:()=>L}}function CG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function PG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class r9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class o9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(n9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,PG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=n9();try{if(TG(),await CG("/static/js/vendor/kanban-editor.js?v="+IG),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Y3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new r9(_,$);return new o9(_,$)}};class s9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new s9;var Z6="workspaceExplorerScale",SG=["compact","default","comfortable"],xG=new Set(SG),yG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function a9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return xG.has(j)?j:$}function q3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function RG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function wG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function X3(_={}){let $=RG(_),j=_.stored?a9(_.stored,$):$;return wG(j,_)}function t9(_){return yG[a9(_)]}function fG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function G3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function e9(_,$,j={}){let Q=j.resolvePane;if(G3(_,Q))return!0;return fG($)}var vG=60000,Qj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function uG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return G3($,(j)=>i0.resolve(j))}function Zj(_,$,j,Q=0,Z=[]){if(!j&&Qj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Zj(Y,$,j,Q+1,Z);return Z}function _j(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Qj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function B3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((X)=>[X?.path,X])):new Map,Y=!j||j.length!==Q.length,q=Q.map((X)=>{let K=B3(Z.get(X.path),X);if(K!==Z.get(X.path))Y=!0;return K});return Y?{...$,children:q}:_}function N3(_,$,j){if(!_)return _;if(_.path===$)return B3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=N3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Yj=4,K3=14,bG=8,gG=16;function qj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=qj(Q);return _.__bytes=j,j}function Xj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Yj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let X of Z){let K=Math.max(0,Number(X?.__bytes??X?.size??0));if(K<=0)continue;if(X.type==="dir")Y.push({kind:"dir",node:X,size:K});else Y.push({kind:"file",name:X.name,path:X.path,size:K})}Y.sort((X,K)=>K.size-X.size);let q=Y;if(Y.length>K3){let X=Y.slice(0,K3-1),K=Y.slice(K3-1),G=K.reduce((N,V)=>N+V.size,0);X.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:G}),q=X}return Q.children=q.map((X)=>{if(X.kind==="dir")return Xj(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Q}function $j(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Gj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function W3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,X=Y-Z>q?Z+q:Y,K=Y6(_,$,Q,Z),G=Y6(_,$,Q,X),N=Y6(_,$,j,X),V=Y6(_,$,j,Z),B=X-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Kj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Nj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(X,K,G,N)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let B=Math.max(0,Number(X.size)||0);if(B<=0)return;let O=G-K,E=K;V.forEach((k,A)=>{let J=Math.max(0,Number(k.size)||0);if(J<=0)return;let D=J/B,I=E,i=A===V.length-1?G:E+O*D;if(E=i,i-I<0.003)return;let h=Kj[N];if(h){let o=Gj(I,N,j);if(Q.push({key:k.path,path:k.path,label:k.name,size:J,color:o,depth:N,startAngle:I,endAngle:i,innerRadius:h[0],outerRadius:h[1],d:W3(120,120,h[0],h[1],I,i)}),N===1)Z.push({key:k.path,name:k.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(N<Yj)q(k,I,i,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function V3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=V3(Q,$);if(Z)return Z}return null}function Vj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Kj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,X=Gj(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:X,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:W3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:X}]}}function jj(_,$=!1,j=!1){if(!_)return null;let Q=qj(_),Z=Xj(_,0),Y=Z.size||Q,{segments:q,legend:X}=Nj(Z,Y,j);if(!q.length&&Y>0){let K=Vj("[files]",Z.path,Y,j);q=K.segments,X=K.legend}return{root:Z,totalSize:Y,segments:q,legend:X,truncated:$,isDarkTheme:j}}function mG({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[X,K]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Q]);let G=w0(()=>{return V3(_.root,Q)||_.root},[_?.root,Q]),N=G?.size||_.totalSize||0,{segments:V,legend:B}=w0(()=>{let H=Nj(G,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=G?.children?.length?"Total":"[files]";return Vj(S,G?.path||_?.root?.path||".",N,_.isDarkTheme)},[G,N,_.isDarkTheme,_?.root?.path]),[O,E]=m(V),k=C(new Map),A=C(0);g(()=>{let H=k.current,S=new Map(V.map((_0)=>[_0.key,_0])),p=performance.now(),Q0=220,d=(_0)=>{let e=Math.min(1,(_0-p)/220),Y0=e*(2-e),X0=V.map((G0)=>{let D0=H.get(G0.key)||{startAngle:G0.startAngle,endAngle:G0.startAngle,innerRadius:G0.innerRadius,outerRadius:G0.innerRadius},A0=(o0,b0)=>o0+(b0-o0)*Y0,n0=A0(D0.startAngle,G0.startAngle),x0=A0(D0.endAngle,G0.endAngle),k0=A0(D0.innerRadius,G0.innerRadius),r0=A0(D0.outerRadius,G0.outerRadius);return{...G0,d:W3(120,120,k0,r0,n0,x0)}});if(E(X0),e<1)A.current=requestAnimationFrame(d)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(d),k.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?R_(N):"0 B",I=G?.name||"",h=(I&&I!=="."?I:"Total")||"Total",o=D,t=Y.length>1,R=(H)=>{if(!H?.path)return;let S=V3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!t)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${J.length}
                data-base-size=${N}>
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
                        <title>${H.label} — ${R_(H.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${x}
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
            ${B.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((H)=>L`
                        <div key=${H.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${H.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${H.name}>${H.name}</span>
                            <span class="workspace-folder-starburst-size">${R_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function hG({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;F5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?R_($.metadata.size):"";return L`
        <a href=${y_(_)} download=${Q} class="file-attachment"
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
    `}function Bj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:X=!1}){let[K,G]=m(null),[N,V]=m(new Set(["."])),[B,O]=m(null),[E,k]=m(null),[A,J]=m(""),[D,I]=m(null),[i,h]=m(null),[o,t]=m(!0),[R,x]=m(!1),[H,S]=m(null),[p,Q0]=m(()=>z5("workspaceShowHidden",!1)),[d,_0]=m(!1),[e,Y0]=m(null),[X0,G0]=m(null),[H0,D0]=m(null),[A0,n0]=m(!1),[x0,k0]=m(null),[r0,o0]=m(()=>$j()),[b0,a0]=m(()=>X3({stored:z_(Z6),...q3()})),[g0,$1]=m(!1),F0=C(N),h0=C(""),j1=C(null),Y1=C(0),Y_=C(new Set),D1=C(null),e0=C(new Map),m1=C(_),M1=C(Q),q1=C(null),m0=C(null),x1=C(null),k1=C(null),s=C(null),N0=C(null),z0=C("."),q0=C(null),y0=C({path:null,dragging:!1,startX:0,startY:0}),C0=C({path:null,dragging:!1,startX:0,startY:0}),f0=C({path:null,timer:0}),M0=C(!1),R0=C(0),l0=C(new Map),O0=C(null),u0=C(null),J0=C(null),j0=C(null),y=C(null),a=C(null),L0=C(p),E0=C($),v0=C(j??$),X1=C(0),A1=C(H0),K1=C(d),h1=C(e),Q4=C(null),B_=C({x:0,y:0}),e1=C(0),W_=C(null),q_=C(B),Q1=C(E),n1=C(null),Z4=C(D);m1.current=_,M1.current=Q,g(()=>{F0.current=N},[N]),g(()=>{L0.current=p},[p]),g(()=>{E0.current=$},[$]),g(()=>{v0.current=j??$},[j,$]),g(()=>{A1.current=H0},[H0]),g(()=>{if(typeof window>"u")return;let z=()=>{a0(X3({stored:z_(Z6),...q3()}))};z();let T=()=>z(),w=()=>z(),f=($0)=>{if(!$0||$0.key===null||$0.key===Z6)z()};window.addEventListener("resize",T),window.addEventListener("focus",w),window.addEventListener("storage",f);let r=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),B0=($0,T0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",T0);else if($0.addListener)$0.addListener(T0)},W0=($0,T0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",T0);else if($0.removeListener)$0.removeListener(T0)};return B0(r,T),B0(Z0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",w),window.removeEventListener("storage",f),W0(r,T),W0(Z0,T)}},[]),g(()=>{let z=(T)=>{let w=T?.detail?.path;if(!w)return;let f=w.split("/"),r=[];for(let Z0=1;Z0<f.length;Z0++)r.push(f.slice(0,Z0).join("/"));if(r.length)V((Z0)=>{let B0=new Set(Z0);B0.add(".");for(let W0 of r)B0.add(W0);return B0});O(w),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{K1.current=d},[d]),g(()=>{h1.current=e},[e]),g(()=>{q_.current=B},[B]),g(()=>{Q1.current=E},[E]),g(()=>{Z4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>o0($j());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(T?.addEventListener)T.addEventListener("change",w);else if(T?.addListener)T.addListener(w);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",w);else if(T?.removeListener)T.removeListener(w);f?.disconnect()}},[]),g(()=>{if(!E)return;let z=s.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[E]),g(()=>{if(!g0)return;let z=(w)=>{let f=w?.target;if(!(f instanceof Element))return;if(y.current?.contains(f))return;if(a.current?.contains(f))return;$1(!1)},T=(w)=>{if(w?.key==="Escape")$1(!1),a.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[g0]);let w_=async(z,T={})=>{let w=Boolean(T?.autoOpen),f=String(z||"").trim();x(!0),I(null),h(null);try{let r=await d5(f,20000);if(w&&f&&e9(f,r,{resolvePane:(Z0)=>i0.resolve(Z0)}))return M1.current?.(f,r),r;return I(r),r}catch(r){let Z0={error:r.message||"Failed to load preview"};return I(Z0),Z0}finally{x(!1)}};q1.current=w_;let $5=async()=>{if(!E0.current)return;try{let z=await l5("",1,L0.current),T=_j(z.root,F0.current,L0.current);if(T===h0.current){t(!1);return}if(h0.current=T,j1.current=z.root,!Y1.current)Y1.current=requestAnimationFrame(()=>{Y1.current=0,G((w)=>B3(w,j1.current)),t(!1)})}catch(z){S(z.message||"Failed to load workspace"),t(!1)}},v4=async(z)=>{if(!z)return;if(Y_.current.has(z))return;Y_.current.add(z);try{let T=await l5(z,1,L0.current);G((w)=>N3(w,z,T.root))}catch(T){S(T.message||"Failed to load workspace")}finally{Y_.current.delete(z)}};m0.current=v4;let u1=P(()=>{let z=B;if(!z)return".";let T=e0.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[B]),U_=P((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let w=T.dataset.path,f=T.dataset.type;if(!w)return null;if(f==="dir")return w;if(w.includes("/")){let r=w.split("/");return r.pop(),r.join("/")||"."}return"."},[]),y1=P((z)=>{return U_(z?.target||null)},[U_]),E1=P((z)=>{A1.current=z,D0(z)},[]),N1=P(()=>{let z=f0.current;if(z?.timer)clearTimeout(z.timer);f0.current={path:null,timer:0}},[]),f_=P((z)=>{if(!z||z==="."){N1();return}let T=e0.current?.get(z);if(!T||T.type!=="dir"){N1();return}if(F0.current?.has(z)){N1();return}if(f0.current?.path===z)return;N1();let w=setTimeout(()=>{f0.current={path:null,timer:0},m0.current?.(z),V((f)=>{let r=new Set(f);return r.add(z),r})},600);f0.current={path:z,timer:w}},[N1]),v_=P((z,T)=>{if(B_.current={x:z,y:T},e1.current)return;e1.current=requestAnimationFrame(()=>{e1.current=0;let w=Q4.current;if(!w)return;let f=B_.current;w.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),V1=P((z)=>{if(!z)return;let w=(e0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;G0({path:z,label:w})},[]),X_=P(()=>{if(G0(null),e1.current)cancelAnimationFrame(e1.current),e1.current=0;if(Q4.current)Q4.current.style.transform="translate(-9999px, -9999px)"},[]),p0=P((z)=>{if(!z)return".";let T=e0.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),C1=P(()=>{k(null),J("")},[]),D_=P((z)=>{if(!z)return;let w=(e0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;k(z),J(w)},[]),__=P(async()=>{let z=Q1.current;if(!z)return;let T=(A||"").trim();if(!T){C1();return}let w=e0.current?.get(z),f=(w?.name||z.split("/").pop()||z).trim();if(T===f){C1();return}try{let Z0=(await r6(z,T))?.path||z,B0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(C1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Z0,type:w?.type||"file"}})),w?.type==="dir")V((W0)=>{let $0=new Set;for(let T0 of W0)if(T0===z)$0.add(Z0);else if(T0.startsWith(`${z}/`))$0.add(`${Z0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(Z0),w?.type==="dir")I(null),x(!1),h(null);else q1.current?.(Z0);m0.current?.(B0)}catch(r){S(r?.message||"Failed to rename file")}},[C1,A]),u4=P(async(z)=>{let f=z||".";for(let r=0;r<50;r+=1){let B0=`untitled${r===0?"":`-${r}`}.md`;try{let $0=(await n6(f,B0,""))?.path||(f==="."?B0:`${f}/${B0}`);if(f&&f!==".")V((T0)=>new Set([...T0,f]));O($0),S(null),m0.current?.(f),q1.current?.($0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;S(W0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),n_=P((z)=>{if(z?.stopPropagation?.(),A0)return;let T=p0(q_.current);u4(T)},[A0,p0,u4]);g(()=>{if(typeof window>"u")return;let z=(T)=>{let w=T?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;G((W0)=>{let $0=W0;for(let T0 of w){if(!T0?.root)continue;if(!$0||T0.path==="."||!T0.path)$0=T0.root;else $0=N3($0,T0.path,T0.root)}if($0)h0.current=_j($0,F0.current,L0.current);return t(!1),$0});let f=q_.current;if(Boolean(f)&&w.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)||$0.startsWith(`${f}/`)}))l0.current.clear();if(!f||!Z4.current)return;let Z0=e0.current?.get(f);if(Z0&&Z0.type==="dir")return;if(w.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)}))q1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=$5;let b4=C(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=v0.current??E0.current,w=document.visibilityState!=="hidden"&&(T||z.matches&&E0.current);i5(w,L0.current).catch(()=>{})}).current,r_=C(0),j5=C(()=>{if(r_.current)clearTimeout(r_.current);r_.current=setTimeout(()=>{r_.current=0,b4()},250)}).current;g(()=>{if(E0.current)D1.current?.();j5()},[$,j]),g(()=>{D1.current(),b4();let z=setInterval(()=>D1.current(),vG),T=H5("previewHeight",null),w=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(R0.current=w,x1.current)x1.current.style.setProperty("--preview-height",`${w}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>j5();if(f.addEventListener)f.addEventListener("change",r);else if(f.addListener)f.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),Y1.current)cancelAnimationFrame(Y1.current),Y1.current=0;if(f.removeEventListener)f.removeEventListener("change",r);else if(f.removeListener)f.removeListener(r);if(document.removeEventListener("visibilitychange",r),r_.current)clearTimeout(r_.current),r_.current=0;if(q0.current)clearTimeout(q0.current),q0.current=null;i5(!1,L0.current).catch(()=>{})}},[]);let o_=w0(()=>Zj(K,N,p),[K,N,p]),u_=w0(()=>new Map(o_.map((z)=>[z.node.path,z.node])),[o_]),P5=w0(()=>t9(b0),[b0]);e0.current=u_;let B1=(B?e0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!B1){k0(null),O0.current=null,u0.current=null;return}let z=B,T=`${p?"hidden":"visible"}:${B}`,w=l0.current,f=w.get(T);if(f?.root){w.delete(T),w.set(T,f);let B0=jj(f.root,Boolean(f.truncated),r0);if(B0)O0.current=B0,u0.current=B,k0({loading:!1,error:null,payload:B0});return}let r=O0.current,Z0=u0.current;k0({loading:!0,error:null,payload:Z0===B?r:null}),l5(B,bG,p).then((B0)=>{if(q_.current!==z)return;let W0={root:B0?.root,truncated:Boolean(B0?.truncated)};w.delete(T),w.set(T,W0);while(w.size>gG){let T0=w.keys().next().value;if(!T0)break;w.delete(T0)}let $0=jj(W0.root,W0.truncated,r0);O0.current=$0,u0.current=B,k0({loading:!1,error:null,payload:$0})}).catch((B0)=>{if(q_.current!==z)return;k0({loading:!1,error:B0?.message||"Failed to load folder size chart",payload:Z0===B?r:null})})},[B,B1,p,r0]);let R1=Boolean(D&&D.kind==="text"&&!B1&&(!D.size||D.size<=262144)),Q5=R1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",A_=Boolean(B&&B!=="."),$_=Boolean(B&&!B1),p1=Boolean(B&&!B1),P1=B&&B1?P8(B,p):null,b1=P(()=>$1(!1),[]),z1=P(async(z)=>{b1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[b1]);g(()=>{let z=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!z)return;if(z.innerHTML="",!B||B1||!D||D.error)return;let T={path:B,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},w=i0.resolve(T)||i0.get("workspace-preview-default");if(!w)return;let f=w.mount(z,T);return j0.current=f,()=>{if(j0.current===f)f.dispose(),j0.current=null;z.innerHTML=""}},[B,B1,D]);let E_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},M_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},k_=C((z)=>{let T=E_(z),w=T?.closest?.("[data-path]");if(!w)return;let f=w.dataset.path;if(!f||f===".")return;let r=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),Z0=Boolean(T?.closest?.(".workspace-caret"));if(r||Z0)return;if(Q1.current===f)return;D_(f)}).current,s_=C((z)=>{if(M0.current){M0.current=!1;return}let T=E_(z),w=T?.closest?.("[data-path]");if(k1.current?.focus?.(),!w)return;let f=w.dataset.path,r=w.dataset.type,Z0=Boolean(T?.closest?.(".workspace-caret")),B0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),W0=q_.current===f,$0=Q1.current;if($0){if($0===f)return;C1()}let T0=r==="file"&&n1.current===f&&!Z0&&!B0;if(r==="dir"){if(n1.current=null,O(f),I(null),h(null),x(!1),!F0.current.has(f))m0.current?.(f);if(W0&&!Z0)return;V((Q_)=>{let c1=new Set(Q_);if(c1.has(f))c1.delete(f);else c1.add(f);return c1})}else{n1.current=null,O(f);let w1=e0.current.get(f);if(w1)m1.current?.(w1.path,w1);if(!B0&&!Z0&&uG(f))M1.current?.(f,Z4.current);else{let c1=!B0&&!Z0;q1.current?.(f,{autoOpen:c1})}}}).current,j_=C(()=>{h0.current="",D1.current(),Array.from(F0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>m0.current?.(T))}).current,r1=C(()=>{n1.current=null,O(null),I(null),h(null),x(!1)}).current,I_=C(()=>{Q0((z)=>{let T=!z;if(typeof window<"u")G1("workspaceShowHidden",String(T));return L0.current=T,i5(!0,T).catch(()=>{}),h0.current="",D1.current?.(),Array.from(F0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>m0.current?.(f)),T})}).current,Y4=C((z)=>{if(E_(z)?.closest?.("[data-path]"))return;r1()}).current,H1=P(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await s6(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(q_.current===z)r1();m0.current?.(f),S(null)}catch(f){I((r)=>({...r||{},error:f.message||"Failed to delete file"}))}},[r1]),a_=P((z)=>{let T=k1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g4=P((z)=>{let T=o_;if(!T||T.length===0)return;let w=B?T.findIndex((f)=>f.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(w+1,T.length-1),r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")m1.current?.(r.node.path,r.node),q1.current?.(r.node.path);else I(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=w<=0?0:w-1,r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")m1.current?.(r.node.path,r.node),q1.current?.(r.node.path);else I(null),x(!1),h(null);a_(r.node.path);return}if(z.key==="ArrowRight"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&!N.has(f.node.path))z.preventDefault(),m0.current?.(f.node.path),V((r)=>new Set([...r,f.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&N.has(f.node.path))z.preventDefault(),V((r)=>{let Z0=new Set(r);return Z0.delete(f.node.path),Z0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let f=T[w];if(!f)return;let r=f.node.path;if(f.node.type==="dir"){if(!F0.current.has(r))m0.current?.(r);V((B0)=>{let W0=new Set(B0);if(W0.has(r))W0.delete(r);else W0.add(r);return W0}),I(null),h(null),x(!1)}else m1.current?.(r,f.node),q1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let f=T[w];if(!f||f.node.type==="dir")return;z.preventDefault(),H1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),r1()},[r1,H1,N,o_,a_,B]),m4=P((z)=>{let T=E_(z),w=T?.closest?.(".workspace-row");if(!w)return;let f=w.dataset.type,r=w.dataset.path;if(!r||r===".")return;if(Q1.current===r)return;let Z0=z?.touches?.[0];if(!Z0)return;if(y0.current={path:M_(T)?r:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},f!=="file")return;if(q0.current)clearTimeout(q0.current);q0.current=setTimeout(()=>{if(q0.current=null,y0.current?.dragging)return;H1(r)},600)},[H1]),T_=P(()=>{if(q0.current)clearTimeout(q0.current),q0.current=null;let z=y0.current;if(z?.dragging&&z.path){let T=A1.current||u1(),w=W_.current;if(typeof w==="function")w(z.path,T)}y0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,_0(!1),Y0(null),E1(null),N1(),X_()},[u1,X_,E1,N1]),h4=P((z)=>{let T=y0.current,w=z?.touches?.[0];if(!w||!T?.path){if(q0.current)clearTimeout(q0.current),q0.current=null;return}let f=Math.abs(w.clientX-T.startX),r=Math.abs(w.clientY-T.startY),Z0=f>8||r>8;if(Z0&&q0.current)clearTimeout(q0.current),q0.current=null;if(!T.dragging&&Z0)T.dragging=!0,_0(!0),Y0("move"),V1(T.path);if(T.dragging){z.preventDefault(),v_(w.clientX,w.clientY);let B0=document.elementFromPoint(w.clientX,w.clientY),W0=U_(B0)||u1();if(A1.current!==W0)E1(W0);f_(W0)}},[U_,u1,V1,v_,E1,f_]),Z5=C((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.clientY,f=R0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=w,B0=($0)=>{Z0=$0.clientY;let T0=T.clientHeight-80,w1=Math.min(Math.max(f-($0.clientY-w),80),T0);T.style.setProperty("--preview-height",`${w1}px`),R0.current=w1},W0=()=>{let $0=T.clientHeight-80,T0=Math.min(Math.max(f-(Z0-w),80),$0);R0.current=T0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",B0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",B0),document.addEventListener("mouseup",W0)}).current,b_=C((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.touches[0];if(!w)return;let f=w.clientY,r=R0.current||280,Z0=z.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let B0=($0)=>{let T0=$0.touches[0];if(!T0)return;$0.preventDefault();let w1=T.clientHeight-80,Q_=Math.min(Math.max(r-(T0.clientY-f),80),w1);T.style.setProperty("--preview-height",`${Q_}px`),R0.current=Q_},W0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",G1("previewHeight",String(Math.round(R0.current||r))),document.removeEventListener("touchmove",B0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",B0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,g_=async()=>{if(!B)return;try{let z=await i6(B);if(z.media_id)h(z.media_id)}catch(z){I((T)=>({...T||{},error:z.message||"Failed to attach"}))}},H4=async()=>{if(!B||B1)return;await H1(B)},m_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},p4=P((z)=>{if(!m_(z))return;if(z.preventDefault(),X1.current+=1,!K1.current)_0(!0);Y0("upload");let T=y1(z)||u1();E1(T),f_(T)},[u1,y1,E1,f_]),h_=P((z)=>{if(!m_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!K1.current)_0(!0);if(h1.current!=="upload")Y0("upload");let T=y1(z)||u1();if(A1.current!==T)E1(T);f_(T)},[u1,y1,E1,f_]),C_=P((z)=>{if(!m_(z))return;if(z.preventDefault(),X1.current=Math.max(0,X1.current-1),X1.current===0)_0(!1),Y0(null),E1(null),N1()},[E1,N1]),I1=P(async(z,T=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let f=T&&T!==""?T:".",r=f!=="."?f:"workspace root";n0(!0);try{let Z0=null;for(let B0 of w)try{Z0=await T8(B0,f)}catch(W0){let $0=W0?.status,T0=W0?.code;if($0===409||T0==="file_exists"){let w1=B0?.name||"file";if(!window.confirm(`"${w1}" already exists in ${r}. Overwrite?`))continue;Z0=await T8(B0,f,{overwrite:!0})}else throw W0}if(Z0?.path)n1.current=Z0.path,O(Z0.path),q1.current?.(Z0.path);m0.current?.(f)}catch(Z0){S(Z0.message||"Failed to upload file")}finally{n0(!1)}},[]),J4=P(async(z,T)=>{if(!z)return;let w=e0.current?.get(z);if(!w)return;let f=T&&T!==""?T:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===r)return;try{let B0=(await o6(z,f))?.path||z;if(w.type==="dir")V((W0)=>{let $0=new Set;for(let T0 of W0)if(T0===z)$0.add(B0);else if(T0.startsWith(`${z}/`))$0.add(`${B0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(B0),w.type==="dir")I(null),x(!1),h(null);else q1.current?.(B0);m0.current?.(r),m0.current?.(f)}catch(Z0){S(Z0?.message||"Failed to move entry")}},[]);W_.current=J4;let O4=P(async(z)=>{if(!m_(z))return;z.preventDefault(),X1.current=0,_0(!1),Y0(null),D0(null),N1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let w=A1.current||y1(z)||u1();await I1(T,w)},[u1,y1,I1]),c4=P((z)=>{if(z?.stopPropagation?.(),A0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";z0.current=T,N0.current?.click()},[A0]),L1=P(()=>{if(A0)return;let z=q_.current,T=z?e0.current?.get(z):null;z0.current=T?.type==="dir"?T.path:".",N0.current?.click()},[A0]),D4=P(()=>{z1(()=>n_(null))},[z1,n_]),Y5=P(()=>{z1(()=>L1())},[z1,L1]),g1=P(()=>{z1(()=>j_())},[z1,j_]),G_=P(()=>{z1(()=>I_())},[z1,I_]),t_=P(()=>{if(!B||!R1)return;z1(()=>M1.current?.(B,D))},[z1,B,R1,D]),l4=P(()=>{if(!B||B===".")return;z1(()=>D_(B))},[z1,B,D_]),q4=P(()=>{if(!B||B1)return;z1(()=>H4())},[z1,B,B1,H4]),A4=P(()=>{if(!B||B1)return;z1(()=>g_())},[z1,B,B1,g_]),X4=P(()=>{if(!P1)return;if(b1(),typeof window<"u")window.open(P1,"_blank","noopener")},[b1,P1]),P_=P(()=>{b1(),Z?.()},[b1,Z]),L_=P(()=>{b1(),Y?.()},[b1,Y]),E4=P(()=>{b1(),q?.()},[b1,q]),d4=P((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let w=T.dataset.path;if(!w||w===".")return;if(Q1.current===w)return;let f=E_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!M_(f))return;z.preventDefault(),C0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(B0)=>{let W0=C0.current;if(!W0?.path)return;let $0=Math.abs(B0.clientX-W0.startX),T0=Math.abs(B0.clientY-W0.startY),w1=$0>4||T0>4;if(!W0.dragging&&w1)W0.dragging=!0,M0.current=!0,_0(!0),Y0("move"),V1(W0.path),v_(B0.clientX,B0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){B0.preventDefault(),v_(B0.clientX,B0.clientY);let Q_=document.elementFromPoint(B0.clientX,B0.clientY),c1=U_(Q_)||u1();if(A1.current!==c1)E1(c1);f_(c1)}},Z0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Z0);let B0=C0.current;if(B0?.dragging&&B0.path){let W0=A1.current||u1(),$0=W_.current;if(typeof $0==="function")$0(B0.path,W0)}C0.current={path:null,dragging:!1,startX:0,startY:0},X1.current=0,_0(!1),Y0(null),E1(null),N1(),X_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{M0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Z0)},[U_,u1,V1,v_,X_,E1,f_,N1]),S_=P(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let w=z0.current||".";if(await I1(T,w),z0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${d?" workspace-drop-active":""}`}
            data-workspace-scale=${b0}
            ref=${x1}
            onDragEnter=${p4}
            onDragOver=${h_}
            onDragLeave=${C_}
            onDrop=${O4}
        >
            <input type="file" multiple style="display:none" ref=${N0} onChange=${S_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${g0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),$1((T)=>!T)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${g0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${g0&&L`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${D4} disabled=${A0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Y5} disabled=${A0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${G_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&L`<div class="workspace-menu-separator"></div>`}
                                ${B&&!B1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${t_} disabled=${!R1}>Open in editor</button>
                                `}
                                ${A_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>Rename selected</button>
                                `}
                                ${p1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${A4}>Download selected file</button>
                                `}
                                ${P1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4}>Download selected folder (zip)</button>
                                `}
                                ${$_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${q4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>
                                        ${X?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${n_} title="New file" disabled=${A0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${j_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${Y4}>
                ${A0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${o&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${K&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${s_}
                        onDblClick=${k_}
                        onKeyDown=${g4}
                        onTouchStart=${m4}
                        onTouchEnd=${T_}
                        onTouchMove=${h4}
                        onTouchCancel=${T_}
                    >
                        ${o_.map(({node:z,depth:T})=>{let w=z.type==="dir",f=z.path===B,r=z.path===E,Z0=w&&N.has(z.path),B0=H0&&z.path===H0,W0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${B0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+T*P5.indentPx}px`}}
                                    data-path=${z.path}
                                    data-type=${z.type}
                                    onMouseDown=${d4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?Z0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
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
                                                ref=${s}
                                                value=${A}
                                                onInput=${($0)=>J($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),__();else if($0.key==="Escape")$0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!Z0&&W0>0&&L`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${w&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${z.path}
                                            title="Upload files to this folder"
                                            onClick=${c4}
                                            disabled=${A0}
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
            ${B&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${Z5} onTouchStart=${b_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${n_} title="New file" disabled=${A0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!B1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>R1&&M1.current?.(B,D)}
                                    title=${Q5}
                                    disabled=${!R1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${H4}
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
                            ${B1?L`
                                    <button class="workspace-download" onClick=${L1}
                                        title="Upload files to this folder" disabled=${A0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${P8(B,p)}
                                        title="Download folder as zip" onClick=${(z)=>z.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${g_} title="Download">
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
                    ${D?.error&&L`<div class="workspace-error">${D.error}</div>`}
                    ${B1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&L`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&L`
                            <${mG} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!B1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${i&&L`
                        <div class="workspace-download-card">
                            <${hG} mediaId=${i} />
                        </div>
                    `}
                </div>
            `}
            ${X0&&L`
                <div class="workspace-drag-ghost" ref=${Q4}>${X0.label}</div>
            `}
        </aside>
    `}var pG=new Set(["kanban-editor","mindmap-editor"]);function cG(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Wj(_,$,j){let Q=cG(_,$,j);return Q!=null&&pG.has(Q)}var lG=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,dG=/\.(csv|tsv)$/i,iG=/\.pdf$/i,nG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Uj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Lj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:X,onEditSource:K,previewTabs:G,paneOverrides:N,onToggleDock:V,dockVisible:B,onToggleZen:O,zenMode:E,onPopOutTab:k}){let[A,J]=m(null),D=C(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Q0)=>Q0.id===$);if(S.shiftKey){let Q0=_[(p-1+_.length)%_.length];j?.(Q0.id)}else{let Q0=_[(p+1)%_.length];j?.(Q0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let I=P((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),i=P((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=P((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let t=P((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),R=w0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=w0(()=>{let H=A?.id;if(!H)return!1;return Wj(H,t(H),(S)=>i0.resolve(S))},[A?.id,t]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(S)=>I(S,H.id)}
                    onContextMenu=${(S)=>i(S,H.id)}
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
                        onClick=${(S)=>o(S,H.id)}
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
            ${V&&L`
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
        ${A&&L`
            <div class="tab-context-menu" style=${{left:A.x+"px",top:A.y+"px"}}>
                <button onClick=${()=>{Q?.(A.id),J(null)}}>Close</button>
                <button onClick=${()=>{Z?.(A.id),J(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),J(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(A.id),J(null)}}>
                    ${R?.pinned?"Unpin":"Pin"}
                </button>
                ${x&&K&&L`
                    <button onClick=${()=>{K(A.id),J(null)}}>Edit Source</button>
                `}
                ${k&&L`
                    <button onClick=${()=>{let H=_.find((S)=>S.id===A.id);k(A.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${X&&/\.(md|mdx|markdown)$/i.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{X(A.id),J(null)}}>
                        ${G?.has(A.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${lG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${dG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${iG.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${nG.test(A.id)&&!Uj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Uj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var rG=400,U3=60,Fj=220,L3="mdPreviewHeight";function oG(){try{let _=localStorage.getItem(L3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U3?$:Fj}catch{return Fj}}function F3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(oG),X=C(null),K=C(null),G=C(""),N=C(_);return N.current=_,g(()=>{let O=()=>{let k=N.current?.()||"";if(k===G.current)return;G.current=k;try{let A=H_(k,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,rG);return()=>clearInterval(E)},[]),g(()=>{if(X.current&&Q)V4(X.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,k=K.current?.offsetHeight||Y,A=K.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(h)=>{let o=Math.min(Math.max(k-(h.clientY-E),U3),J);q(o)},i=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(L3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",i)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let k=E.clientY,A=K.current?.offsetHeight||Y,J=K.current?.parentElement,D=J?J.offsetHeight*0.7:500,I=O.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let i=(o)=>{let t=o.touches[0];if(!t)return;o.preventDefault();let R=Math.min(Math.max(A-(t.clientY-k),U3),D);q(R)},h=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(L3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",i),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function zj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=C(_);Y.current=_;let q=C($);q.current=$;let X=C(j);X.current=j;let K=C(Q);K.current=Q,g(()=>{let G=new S8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});G.connect();let N=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),G.disconnect()}},[Z])}function Hj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=C(!1);g(()=>{let K=z5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),G1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),G1("notificationsEnabled",String(K))},[Y]),X=P((K,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(K,{body:G});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:X}}var K8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Jj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),X=C(!1),K=C(null),G=C(!1),N=C(null),V=C(null),B=C(0);g(()=>{X.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{B.current+=1,N.current=null,G.current=!1,X.current=!1,q(!1)},[j]);let O=P(async(A=null)=>{let J=B.current;try{if(A){let D=await y6(A,50,0,j);if(J!==B.current)return;Z(D.posts),q(!1)}else{let D=await r4(10,null,j);if(J!==B.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==B.current)return;console.error("Failed to load posts:",D)}},[j]),E=P(async()=>{let A=B.current;try{let J=await r4(10,null,j);if(A!==B.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return K8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==B.current)return;console.error("Failed to refresh timeline:",J)}},[j]),k=P(async(A={})=>{let J=B.current,D=V.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:I=!0,preserveMode:i="top",allowRepeat:h=!1}=A,o=(x)=>{if(!I){x();return}if(i==="top")$(x);else _(x)},R=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&N.current===R)return;G.current=!0,N.current=R;try{let x=await r4(10,R,j);if(J!==B.current)return;if(x.posts.length>0)o(()=>{Z((H)=>K8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==B.current)return;console.error("Failed to load more posts:",x)}finally{if(J===B.current)G.current=!1}},[j,_,$]);return g(()=>{K.current=k},[k]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:X,loadPosts:O,refreshTimeline:E,loadMore:k,loadMoreRef:K,loadingMoreRef:G,lastBeforeIdRef:N}}function Oj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,X]=m({text:"",totalLines:0}),[K,G]=m(null),[N,V]=m(null),[B,O]=m(null),E=C(null),k=C(0),A=C(!1),J=C(""),D=C(""),I=C(null),i=C(null),h=C(null),o=C(null),t=C(!1),R=C(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:X,pendingRequest:K,setPendingRequest:G,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:k,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:I,stalledPostIdRef:i,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:t,draftExpandedRef:R}}function Dj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=$.current||280,E=N.currentTarget;E.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let D=Math.min(Math.max(O+(k-B),160),600);$.current=D,E.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",G1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=$.current||280,k=N.currentTarget;k.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E+(I.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${i}px`),$.current=i},J=()=>{k.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",G1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=j.current||$.current||280,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let D=Math.min(Math.max(O+(k-B),200),800);j.current=D,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,X=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=j.current||$.current||280,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E+(I.clientX-O),200),800);V.style.setProperty("--editor-width",`${i}px`),j.current=i},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientY,O=Q?.current||200,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let k=B,A=(D)=>{k=D.clientY;let I=Math.min(Math.max(O-(D.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),Q)Q.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(k-B),100),window.innerHeight*0.5);if(Q)Q.current=D;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientY,E=Q?.current||200,k=N.currentTarget;k.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let i=Math.min(Math.max(E-(I.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${i}px`),Q)Q.current=i;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{k.classList.remove("dragging"),document.body.style.userSelect="",G1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:G}}function sG(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,X]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,X)}return Z?Y:_}function Aj({onTabClosed:_}={}){let $=C(_);$.current=_;let[j,Q]=m(()=>s0.getTabs()),[Z,Y]=m(()=>s0.getActiveId()),[q,X]=m(()=>s0.getTabs().length>0);g(()=>{return s0.onChange((R,x)=>{Q(R),Y(x),X(R.length>0)})},[]);let[K,G]=m(()=>new Set),[N,V]=m(()=>new Map),B=P((R)=>{G((x)=>{let H=new Set(x);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=P((R)=>{G((x)=>{if(!x.has(R))return x;let H=new Set(x);return H.delete(R),H})},[]),E=P((R)=>{V((x)=>{if(!x.has(R))return x;let H=new Map(x);return H.delete(R),H})},[]),k=P((R,x={})=>{if(!R)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:R,mode:"edit"};try{if(!(H?i0.get(H):i0.resolve(S))){if(!i0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Q0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(s0.open(R,p),H)V((Q0)=>{if(Q0.get(R)===H)return Q0;let d=new Map(Q0);return d.set(R,H),d})},[]),A=P(()=>{let R=s0.getActiveId();if(R){let x=s0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}s0.close(R),O(R),E(R),$.current?.(R)}},[E,O]),J=P((R)=>{let x=s0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}s0.close(R),O(R),E(R),$.current?.(R)},[E,O]),D=P((R)=>{s0.activate(R)},[]),I=P((R)=>{let x=s0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);s0.closeOthers(R),S.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),i=P(()=>{let R=s0.getTabs().filter((S)=>!S.pinned),x=R.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=R.map((S)=>S.id);s0.closeAll(),H.forEach((S)=>{O(S),E(S),$.current?.(S)})},[E,O]),h=P((R)=>{s0.togglePin(R)},[]),o=P((R)=>{if(!R)return;V((x)=>{if(x.get(R)==="editor")return x;let H=new Map(x);return H.set(R,"editor"),H}),s0.activate(R)},[]),t=P(()=>{let R=s0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Q0 of s0.getTabs())if(Q0.path===H||Q0.path.startsWith(`${H}/`)){let d=`${S}${Q0.path.slice(H.length)}`;s0.rename(Q0.id,d)}}else s0.rename(H,S);V((Q0)=>sG(Q0,H,S,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(x)=>{if(s0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:N,openEditor:k,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:I,handleTabCloseAll:i,handleTabTogglePin:h,handleTabTogglePreview:B,handleTabEditSource:o,revealInExplorer:t}}function z3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var H3=z3("warning",30000),Ej=z3("finalize",120000),J3=z3("refresh",30000),Mj=30000;function kj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Ij(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Tj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function Cj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function aG(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:aG(_,$)}}function O3(_,$){return{text:$?.text||"",totalLines:Cj(_),fullText:_}}function Pj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function Sj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function xj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function yj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function D3(_){return String(_||"").trim()||"web:default"}function Rj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function wj(_={}){return W4(_)&&a8(_)}function tG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function eG(_={},$={}){if(!wj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=tG({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function fj(_={}){if(!wj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,eG({window:$,document:j})},X=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{X();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),X()},V);if(B!=null)Z.add(B)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},N=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",K,!0),N?.addEventListener?.("resize",K),N?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",K,!0),N?.removeEventListener?.("resize",K),N?.removeEventListener?.("scroll",K)}}function _K(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Z_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:_K($,j)}var $K=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function vj(_){return $K.has(String(_||"").trim())}function jK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function A3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(jK(_),{detail:Q})),!0}var QK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function uj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(W4({window:j,navigator:Q}))};Z();let q=QK.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",Z),()=>X.removeEventListener("change",Z);if(typeof X.addListener==="function")return X.addListener(Z),()=>X.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let X of q)X();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function bj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function gj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let G=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Q?.(G,N)},q=(K)=>{let G=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(G)Z?.(G,N)},X=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return X.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{X.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function mj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function hj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(X)=>{if(X?.ctrlKey&&X.shiftKey&&(X.key==="Z"||X.key==="z")){X.preventDefault?.(),Q?.();return}if(X?.key==="Escape"&&Y())X.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function pj(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function cj(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function lj(_,$,j){return _||$?.label||j||"Pane"}function dj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function ij(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function nj(_,$,j,Q){return _===$&&!j||Q}function rj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var ZK="piclaw_btw_session",sj=900,oj="__piclawRenameBranchFormLock__";function YK(){try{return import.meta.url}catch{return null}}function E3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function X6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function aj(_={}){let $=_.importMetaUrl===void 0?YK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let X=new URL(Y,Q).searchParams.get("v");return X&&X.trim()?X.trim():null}catch{return null}}function M3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[oj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[oj]=Q,Q}function tj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function ej(_={}){let $=typeof _.readItem==="function"?_.readItem:z_,j=_.storageKey||ZK,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",X=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:X,error:G==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:G}}catch{return null}}function _Q(_,$={}){let j=$.defaultChatJid||"web:default",Q=X6(_,"chat_jid",j),Z=E3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=E3(_?.get?.("pane_popout")),q=X6(_,"pane_path"),X=X6(_,"pane_label"),K=E3(_?.get?.("branch_loader")),G=X6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:X,branchLoaderMode:K,branchLoaderSourceChatJid:G}}function $Q(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:X,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||K<Number(Z||0)||G.inFlight||K<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),X?.(!0),!0}function jQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function QQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:X,setIsRenamingBranch:K,renameChatBranch:G,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let k=E(),A=X?.()||null;if(!A)return!1;if(Y.current||k<Number(q.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",D=w8(Q,J);if(!D.canSubmit)return B?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let I=D.normalized||J,i=await G(j.chat_jid,{agentName:I});await Promise.allSettled([N?.(),V?.()]);let h=i?.branch?.agent_name||I||J;return B?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),I=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return B?.("Could not rename branch",I||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let J=E()+sj;q.current=J;let D=X?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function ZQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:X,refreshActiveChatAgents:K,refreshCurrentChatBranches:G,showIntentToast:N,baseHref:V,chatOnlyMode:B,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let k=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=k||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let i=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!E(`Prune ${i}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await X(J),await Promise.allSettled([K?.(),G?.()]);let o=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${i} has been archived.`,"info",3000);let t=U4(V,o,{chatOnly:B});return O?.(t),!0}catch(o){let t=o instanceof Error?o.message:String(o||"Could not prune branch.");return N?.("Could not prune branch",t||"Could not prune branch.","warning",5000),!1}}async function YQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:X,chatOnlyMode:K,navigate:G}=_,N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,B=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=B?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,k=x2(V?.agent_name,O?.agent_name,E);q?.("Branch restored",k,"info",4200);let A=U4(X,E,{chatOnly:K});return G?.(A),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function qQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let X=await j($);if(q())return!1;let K=X?.branch,G=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let N=U4(Y,G,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(X){if(q())return!1;return Q?.({status:"error",message:_8(X)}),!1}}async function XQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:X,baseHref:K}=_;try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let O=U4(K,V,{chatOnly:j});return X?.(O),!0}catch(G){return q?.("Could not create branch",_8(G),"warning",5000),!1}}async function GQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:X,currentChatJid:K,baseHref:G}=_;if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=d7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=k$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;I$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),E=l7(G,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:O});return T$(B,E),X?.(N),!0}catch(O){C$(B);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function KQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:X,setActiveChatAgents:K,setCurrentChatBranches:G,showIntentToast:N,baseHref:V}=_;if(!$||j)return!1;let B=p7(Q);if(!B)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let E=c7(V,Q,{chatOnly:!0});if(!window.open(E,B.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=k$(B);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;I$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let k=(await Y(Q))?.branch,A=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await X?.(Z);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=U4(V,A,{chatOnly:!0});return T$(O,J),!0}catch(E){return C$(O),N?.("Could not open branch window",_8(E),"error",5000),!1}}function G6(_){return _?{..._}:{text:"",totalLines:0}}function NQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function qK(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function XK(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function VQ(_){return{agentStatus:_.agentStatus,agentDraft:G6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:G6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:NQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:qK(_.silentRecovery)}}function BQ(_){let $=_.snapshot||XK(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(G6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(G6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(NQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function N8(_){return typeof _==="string"}function WQ(_){return typeof _==="string"&&_.trim().length>0}function k3(_){if(!Array.isArray(_))return[];return _.filter(($)=>WQ($?.chat_jid)&&WQ($?.agent_name))}function UQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>N8($?.chat_jid)&&N8($?.agent_name))}function LQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(N8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!N8(q?.chat_jid))return q;let X=Q.get(q.chat_jid);return X?{...q,...X,is_active:X.is_active??q.is_active}:q}),Y=N8(j)?j:"";return Z.sort((q,X)=>{if(q.chat_jid===Y&&X.chat_jid!==Y)return-1;if(X.chat_jid===Y&&q.chat_jid!==Y)return 1;let K=Boolean(q.archived_at),G=Boolean(X.archived_at);if(K!==G)return K?1:-1;if(Boolean(q.is_active)!==Boolean(X.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(X.chat_jid))}),Z}function I3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function FQ(_,$){let j=new Map(_),Q=I3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function zQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=I3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function HQ(_){if(_?.options?.remove)return!0;return I3(_)?.state!=="running"}function T3(_,$){return`${_}:${$}`}function JQ(_,$,j){let Q=T3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function OQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function C3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function DQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function GK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function AQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!GK(Z));return Q.length===_.length?_:Q}function EQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function MQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function f4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function kQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function IQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function KK(_,$){let j=J_(_);return Boolean(_&&j===$)}function C5(_,$,j){if(!KK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function TQ(_,$){return{..._,openedAt:$}}function CQ(_){let $=J_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function PQ(_,$,j){let Q=K7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=J_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=J_(_),q=Boolean(Z&&Y&&Z===Y),X={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:X,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function SQ(_,$){if(!_||_?.source!=="live")return _||null;let j=J_($),Q=J_(_);if(j&&Q&&j!==Q)return _;return null}function xQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function P3(_,$,j){if(j.errorMessage)return C5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return C5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function yQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function RQ(_,$,j){return C5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function wQ(_,$,j){return C5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}var fQ=aj(),vQ=R6,uQ=f6,NK=u6,bQ=p6,gQ=c6,S3=b6,x3=Z_(t1,"getAgentContext",null),VK=Z_(t1,"getAutoresearchStatus",null),BK=Z_(t1,"stopAutoresearch",{status:"ok"}),WK=Z_(t1,"dismissAutoresearch",{status:"ok"}),mQ=Z_(t1,"getAgentModels",{current:null,models:[]}),hQ=Z_(t1,"getActiveChatAgents",{chats:[]}),K6=Z_(t1,"getChatBranches",{chats:[]}),UK=Z_(t1,"renameChatBranch",null),LK=Z_(t1,"pruneChatBranch",null),FK=Z_(t1,"restoreChatBranch",null),pQ=Z_(t1,"getAgentQueueState",{count:0}),zK=Z_(t1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),HK=Z_(t1,"removeAgentQueueItem",{removed:!1}),JK=Z_(t1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});i0.register(J$);i0.register(n$);i0.register(i$);i0.register(r$);i0.register(o$);i0.register(s$);i0.register(t$);i0.register(e$);i0.register($3);i0.register(Z3);i0.register(Y3);i0.register(l$);O$();i0.register(E$);i0.register(M$);function OK({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:X,branchLoaderSourceChatJid:K}=w0(()=>_Q(_),[_]),[G,N]=m("disconnected"),[V,B]=m(()=>W4()),[O,E]=m(null),[k,A]=m(null),[J,D]=m(!1),[I,i]=m("current"),[h,o]=m([]),[t,R]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Q0,setAgentDraft:d,agentPlan:_0,setAgentPlan:e,agentThought:Y0,setAgentThought:X0,pendingRequest:G0,setPendingRequest:H0,currentTurnId:D0,setCurrentTurnId:A0,steerQueuedTurnId:n0,setSteerQueuedTurnId:x0,lastAgentEventRef:k0,lastSilenceNoticeRef:r0,isAgentRunningRef:o0,draftBufferRef:b0,thoughtBufferRef:a0,pendingRequestRef:g0,stalledPostIdRef:$1,currentTurnIdRef:F0,steerQueuedTurnIdRef:h0,thoughtExpandedRef:j1,draftExpandedRef:Y1}=Oj(),[Y_,D1]=m({}),[e0,m1]=m(null),[M1,q1]=m(null),[m0,x1]=m(!1),[k1,s]=m(null),[N0,z0]=m([]),[q0,y0]=m([]),[C0,f0]=m(null),[M0,R0]=m(()=>new Map),[l0,O0]=m(()=>new Set),[u0,J0]=m([]),[j0,y]=m(!1),[a,L0]=m(()=>ej()),[E0,v0]=m(null),X1=C(new Set),A1=w0(()=>N0.find((W)=>W?.chat_jid===j)||null,[N0,j]),K1=w0(()=>q0.find((W)=>W?.chat_jid===j)||A1||null,[A1,q0,j]),h1=K1?.root_chat_jid||A1?.root_chat_jid||j,Q4=tj(I),[B_,e1]=m(()=>({status:X?"running":"idle",message:X?"Preparing a new chat branch…":""})),W_=u0.length,q_=C(new Set),Q1=C([]),n1=C(new Set),Z4=C(0),w_=C({inFlight:!1,lastAttemptAt:0,turnId:null});q_.current=new Set(u0.map((W)=>W.row_id)),Q1.current=u0;let{notificationsEnabled:$5,notificationPermission:v4,toggleNotifications:u1,notify:U_}=Hj(),[y1,E1]=m(()=>new Set),[N1,f_]=m(()=>z5("workspaceOpen",!0)),v_=C(null),{editorOpen:V1,tabStripTabs:X_,tabStripActiveId:p0,previewTabs:C1,tabPaneOverrides:D_,openEditor:__,closeEditor:u4,handleTabClose:n_,handleTabActivate:b4,handleTabCloseOthers:r_,handleTabCloseAll:j5,handleTabTogglePin:o_,handleTabTogglePreview:u_,handleTabEditSource:P5,revealInExplorer:S5}=Aj({onTabClosed:(W)=>v_.current?.(W)}),B1=C(null),R1=C(null),Q5=C(null),A_=C(null),$_=i0.getDockPanes().length>0,[p1,P1]=m(!1),b1=P(()=>P1((W)=>!W),[]),z1=P(()=>{__(e4,{label:"Terminal"})},[__]),E_=P(()=>{__(z4,{label:"VNC"})},[__]),M_=w0(()=>pj(X_,p0),[p0,X_]),k_=w0(()=>cj(D_,p0),[D_,p0]),s_=w0(()=>lj(q,M_,Y),[M_,q,Y]),j_=w0(()=>dj(X_,C1,p0),[C1,p0,X_]),r1=w0(()=>ij(Y,z4),[Y]),I_=w0(()=>nj(Y,e4,j_,r1),[r1,j_,Y]),Y4=rj(Z,Q,V1,$_,p1),[H1,a_]=m(!1),g4=C(!1),m4=P(()=>{if(!V1||Q)return;if(g4.current=p1,p1)P1(!1);a_(!0)},[V1,Q,p1]),T_=P(()=>{if(!H1)return;if(a_(!1),g4.current)P1(!0),g4.current=!1},[H1]),h4=P(()=>{if(H1)T_();else m4()},[H1,m4,T_]);g(()=>{if(H1&&!V1)T_()},[H1,V1,T_]),g(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;__(Y,q?{label:q}:void 0)},[__,q,Z,Y]),g(()=>{let W=B1.current;if(!W)return;if(R1.current)R1.current.dispose(),R1.current=null;let U=p0;if(!U)return;let M={path:U,mode:"edit"},b=(k_?i0.get(k_):null)||i0.resolve(M)||i0.get("editor");if(!b){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=b.mount(W,M);R1.current=u,u.onDirtyChange?.((V0)=>{s0.setDirty(U,V0)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{u4()});let l=s0.getViewState(U);if(l&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(l));if(typeof u.onViewStateChange==="function")u.onViewStateChange((V0)=>{s0.saveViewState(U,V0)});return requestAnimationFrame(()=>u.focus()),()=>{if(R1.current===u)u.dispose(),R1.current=null}},[p0,k_,u4]);let Z5=P(async(W)=>{let U=typeof p0==="string"?p0.trim():"",M=R1.current;if(!U||!M?.setContent)return;if(typeof M.isDirty==="function"&&M.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((u)=>{let l=Array.isArray(u?.changed_paths)?u.changed_paths.map((U0)=>typeof U0==="string"?U0.trim():"").filter(Boolean):[];if(l.length>0)return l.some((U0)=>U0==="."||U0===U);let V0=typeof u?.path==="string"?u.path.trim():"";return!V0||V0==="."||V0===U}):!0))return;try{let u=await d5(U,1e6,"edit"),l=typeof u?.text==="string"?u.text:"",V0=typeof u?.mtime==="string"&&u.mtime.trim()?u.mtime.trim():new Date().toISOString();M.setContent(l,V0)}catch(u){console.warn("[workspace_update] Failed to refresh active pane:",u)}},[p0]);g(()=>{let W=Q5.current;if(A_.current)A_.current.dispose(),A_.current=null;if(!W||!$_||!p1)return;let U=i0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let M=U.mount(W,{mode:"view"});return A_.current=M,requestAnimationFrame(()=>M.focus?.()),()=>{if(A_.current===M)M.dispose(),A_.current=null}},[$_,p1]);let[b_,g_]=m({name:"You",avatar_url:null,avatar_background:null}),H4=C(null),m_=C(!1),p4=C(!1),h_=C(!1),C_=C(null),I1=C(j),J4=C(new Map),O4=C(j),c4=C(0),L1=C(0),D4=C({}),Y5=C({name:null,avatar_url:null}),g1=C({currentHashtag:null,searchQuery:null,searchOpen:!1}),G_=C(null),t_=C(null),l4=C(0),q4=C(0),A4=C(0),X4=C(null),P_=C(null),L_=C(null),E4=C(null),d4=C(0),S_=C({title:null,avatarBase:null}),z=C(null),T=C(!1),[w,f]=m(!1),r=C(0),[Z0,B0]=m(!1),[W0,$0]=m(""),T0=w0(()=>w8(W0,K1?.agent_name||""),[K1?.agent_name,W0]),w1=C(null),Q_=P(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Tj(30000),g(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)w1.current?.focus(),w1.current?.select?.()})},[Z0]),g(()=>{return d2()},[]),g(()=>{return uj(B)},[]),g(()=>{G1("workspaceOpen",String(N1))},[N1]),g(()=>{return fj()},[]),g(()=>{return()=>{Q_()}},[Q_]),g(()=>{if(!a){G1(BTW_SESSION_KEY,"");return}G1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),g(()=>{D4.current=Y_||{}},[Y_]),g(()=>{I1.current=j},[j]),g(()=>{Y5.current=b_||{name:"You",avatar_url:null,avatar_background:null}},[b_]);let c1=P((W,U,M=null)=>{if(typeof document>"u")return;let b=(W||"").trim()||"PiClaw";if(S_.current.title!==b){document.title=b;let P0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(P0&&P0.getAttribute("content")!==b)P0.setAttribute("content",b);S_.current.title=b}let u=document.getElementById("dynamic-favicon");if(!u)return;let l=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",V0=U||l,U0=U?`${V0}|${M||""}`:V0;if(S_.current.avatarBase!==U0){let P0=U?`${V0}${V0.includes("?")?"&":"?"}v=${M||Date.now()}`:V0;u.setAttribute("href",P0),S_.current.avatarBase=U0}},[]),x5=P((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=P((W)=>{o((U)=>U.filter((M)=>M!==W))},[]);v_.current=F;let v=P(()=>{o([])},[]),n=P((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],M=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(M.has(u))continue;M.add(u),U.push(u)}o(U)},[]),c=P((W,U=null,M="info",b=3000)=>{Q_(),H({title:W,detail:U||null,kind:M||"info"}),z.current=setTimeout(()=>{H((u)=>u?.title===W?null:u)},b)},[Q_]),I0=P((W)=>{let U=yj(W,{editorOpen:V1,resolvePane:(M)=>i0.resolve(M)});if(U.kind==="open"){__(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[V1,__,c]),J1=P(()=>{let W=p0;if(W)x5(W)},[p0,x5]),S1=P((W)=>{if(!W)return;R((U)=>U.includes(W)?U:[...U,W])},[]),f1=P(async(W,U=null)=>{let M=(u)=>{u.scrollIntoView({behavior:"smooth",block:"center"}),u.classList.add("post-highlight"),setTimeout(()=>u.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+W);if(b){M(b);return}try{let u=typeof U==="string"&&U.trim()?U.trim():j,V0=(await w6(W,u))?.thread?.[0];if(!V0)return;d1((U0)=>{if(!U0)return[V0];if(U0.some((P0)=>P0.id===V0.id))return U0;return[...U0,V0]}),requestAnimationFrame(()=>{setTimeout(()=>{let U0=document.getElementById("post-"+W);if(U0)M(U0)},50)})}catch(u){console.error("[scrollToMessage] Failed to fetch message",W,u)}},[j]),G4=P((W)=>{R((U)=>U.filter((M)=>M!==W))},[]),i4=P(()=>{R([])},[]),q5=P((W)=>{if(!Array.isArray(W)){R([]);return}let U=[],M=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(M.has(u))continue;M.add(u),U.push(u)}R(U)},[]),X5=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),K_=P((W={})=>{let U=Date.now();if(k0.current=U,W.running)o0.current=!0,y((M)=>M?M:!0);if(W.clearSilence)r0.current=0},[y]),l1=P(()=>{if(E4.current)clearTimeout(E4.current),E4.current=null;d4.current=0},[]);g(()=>()=>{l1()},[l1]);let G5=P(()=>{l1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:M,...b}=W;return b})},[l1]),M4=P((W)=>{if(!W)return;l1();let U=Date.now();d4.current=U,p({type:W.type||"active",last_activity:!0}),E4.current=setTimeout(()=>{if(d4.current!==U)return;p((M)=>{if(!M||!(M.last_activity||M.lastActivity))return M;return null})},Mj)},[l1]),F1=P(()=>{o0.current=!1,y(!1),k0.current=null,r0.current=0,b0.current="",a0.current="",g0.current=null,P_.current=null,F0.current=null,h0.current=null,C_.current=null,w_.current={inFlight:!1,lastAttemptAt:0,turnId:null},l1(),A0(null),x0(null),j1.current=!1,Y1.current=!1},[l1,A0,x0,y]),e_=P((W)=>{if(!Rj({remainingQueueCount:W,currentTurnId:F0.current,isAgentTurnActive:j0}))return;h0.current=null,x0(null)},[j0,x0]),K5=P(()=>VQ({agentStatus:S,agentDraft:Q0,agentPlan:_0,agentThought:Y0,pendingRequest:G0,currentTurnId:D0,steerQueuedTurnId:n0,isAgentTurnActive:j0,followupQueueItems:u0,activeModel:e0,activeThinkingLevel:M1,supportsThinking:m0,activeModelUsage:k1,contextUsage:C0,isAgentRunning:o0.current,wasAgentActive:h_.current,draftBuffer:b0.current,thoughtBuffer:a0.current,lastAgentEvent:k0.current,lastSilenceNotice:r0.current,lastAgentResponse:P_.current,currentTurnIdRef:F0.current,steerQueuedTurnIdRef:h0.current,thoughtExpanded:j1.current,draftExpanded:Y1.current,agentStatusRef:C_.current,silentRecovery:w_.current}),[e0,k1,M1,Q0,_0,S,Y0,C0,D0,u0,j0,G0,n0,m0]),V8=P((W)=>{BQ({snapshot:W,clearLastActivityTimer:l1,refs:{isAgentRunningRef:o0,wasAgentActiveRef:h_,lastAgentEventRef:k0,lastSilenceNoticeRef:r0,draftBufferRef:b0,thoughtBufferRef:a0,pendingRequestRef:g0,lastAgentResponseRef:P_,currentTurnIdRef:F0,steerQueuedTurnIdRef:h0,agentStatusRef:C_,silentRecoveryRef:w_,thoughtExpandedRef:j1,draftExpandedRef:Y1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:d,setAgentPlan:e,setAgentThought:X0,setPendingRequest:H0,setCurrentTurnId:A0,setSteerQueuedTurnId:x0,setFollowupQueueItems:J0,setActiveModel:m1,setActiveThinkingLevel:q1,setSupportsThinking:x1,setActiveModelUsage:s,setContextUsage:f0}})},[l1,A0,J0,y,x0]),N_=P((W)=>{if(!W)return;if(F0.current===W)return;F0.current=W,w_.current={inFlight:!1,lastAttemptAt:0,turnId:W},A0(W),h0.current=null,x0(null),b0.current="",a0.current="",d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),g0.current=null,P_.current=null,j1.current=!1,Y1.current=!1},[A0,x0]),k4=P((W)=>{if(typeof document<"u"){let P0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&P0)return}let U=P_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let M=U.post;if(M.id&&X4.current===M.id)return;let b=String(M?.data?.content||"").trim();if(!b)return;X4.current=M.id||X4.current,P_.current=null;let u=b.replace(/\s+/g," ").slice(0,200),l=D4.current||{},U0=(M?.data?.agent_id?l[M.data.agent_id]:null)?.name||"Pi";U_(U0,u)},[U_]),F_=P(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let M=F0.current;if(W==="thought"){if(j1.current=U,M)try{await gQ(M,"thought",U)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!U)return;try{let b=M?await bQ(M,"thought"):null;if(b?.text)a0.current=b.text;X0((u)=>({...u||{text:"",totalLines:0},fullText:a0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(Y1.current=U,M)try{await gQ(M,"draft",U)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!U)return;try{let b=M?await bQ(M,"draft"):null;if(b?.text)b0.current=b.text;d((u)=>({...u||{text:"",totalLines:0},fullText:b0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),I4=C(null),N5=P(()=>{let W=G_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);I4.current=N5;let N6=P((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:M,searchQuery:b,searchOpen:u}=g1.current||{},l=!((b||u)&&!M),V0=l?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let U0=G_.current;if(!U0)return;if(l){let P0=Math.max(U0.scrollHeight-V0,0);U0.scrollTop=P0}else{let P0=Math.max(U0.scrollHeight-U0.clientHeight,0),K0=Math.min(V0,P0);U0.scrollTop=K0}})},[]),y5=P((W)=>{let U=G_.current;if(!U||typeof W!=="function"){W?.();return}let M=U.scrollTop;W(),requestAnimationFrame(()=>{let b=G_.current;if(!b)return;let u=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(M,u)})},[]),y3=P((W)=>AQ(W,q_.current),[]),{posts:R5,setPosts:d1,hasMore:cQ,setHasMore:B8,hasMoreRef:R3,loadPosts:p_,refreshTimeline:o1,loadMore:lQ,loadMoreRef:V6}=Jj({preserveTimelineScroll:N6,preserveTimelineScrollTop:y5,chatJid:j}),V5=w0(()=>y3(R5),[R5,u0,y3]),W8=P(()=>{let W=$1.current;if(!W)return;d1((U)=>U?U.filter((M)=>M.id!==W):U),$1.current=null},[d1]),{handleSplitterMouseDown:dQ,handleSplitterTouchStart:iQ,handleEditorSplitterMouseDown:nQ,handleEditorSplitterTouchStart:rQ,handleDockSplitterMouseDown:oQ,handleDockSplitterTouchStart:sQ}=Dj({appShellRef:t_,sidebarWidthRef:l4,editorWidthRef:q4,dockHeightRef:A4}),w3=P(()=>{if(!o0.current)return;o0.current=!1,r0.current=0,k0.current=null,F0.current=null,A0(null),j1.current=!1,Y1.current=!1;let W=(b0.current||"").trim();if(b0.current="",a0.current="",d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),g0.current=null,P_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let M=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),u=new Date().toISOString(),l={id:b,timestamp:u,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};$1.current=b,d1((V0)=>V0?K8([...V0,l]):[l]),I4.current?.(),p(null)},[A0]);g(()=>{g1.current={currentHashtag:O,searchQuery:k,searchOpen:J}},[O,k,J]);let Z1=P(()=>{let W=++Z4.current,U=j;pQ(U).then((M)=>{if(W!==Z4.current)return;if(I1.current!==U)return;let b=n1.current,u=EQ(M?.items,b);if(u.length){J0((l)=>{if(MQ(l,u))return l;return u});return}b.clear(),e_(0),J0((l)=>l.length===0?l:[])}).catch(()=>{if(W!==Z4.current)return;if(I1.current!==U)return;J0((M)=>M.length===0?M:[])})},[e_,j,J0]),s1=P(async()=>{let W=j;try{let U=await x3(W);if(I1.current!==W)return;if(U)f0(U)}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),c_=P(async()=>{let W=j;try{let U=await VK(W);if(I1.current!==W)return;R0((M)=>FQ(M,U)),O0((M)=>C3(M,"autoresearch"))}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),x_=P(async()=>{let W=j;try{let U=await S3(W);if(I1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(h_.current){let{currentHashtag:u,searchQuery:l,searchOpen:V0}=g1.current||{};if(!u&&!l&&!V0)o1()}return h_.current=!1,F1(),C_.current=null,p(null),d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),g0.current=null,U??null}h_.current=!0;let M=U.data;C_.current=M;let b=M.turn_id||M.turnId;if(b)N_(b);if(K_({running:!0,clearSilence:!0}),G5(),p(M),U.thought&&U.thought.text)X0((u)=>{if(u&&u.text&&u.text.length>=U.thought.text.length)return u;return a0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)d((u)=>{if(u&&u.text&&u.text.length>=U.draft.text.length)return u;return b0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[F1,G5,K_,o1,N_]),B6=P(async()=>{if(!o0.current)return null;if(g0.current)return null;let W=F0.current||null,U=w_.current,M=Date.now();if(U.inFlight)return null;if(U.turnId===W&&M-U.lastAttemptAt<J3)return null;U.inFlight=!0,U.lastAttemptAt=M,U.turnId=W;try{let{currentHashtag:b,searchQuery:u,searchOpen:l}=g1.current||{};if(!b&&!u&&!l)await o1();return await Z1(),await x_()}finally{U.inFlight=!1}},[x_,Z1,o1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(H3/2))),U=setInterval(()=>{if(!o0.current)return;if(g0.current)return;let M=k0.current;if(!M)return;let b=Date.now(),u=b-M,l=N4(C_.current);if(u>=Ej){if(!l)p({type:"waiting",title:"Re-syncing after a quiet period…"});B6();return}if(u>=H3){if(b-r0.current>=J3){if(!l){let V0=Math.floor(u/1000);p({type:"waiting",title:`Waiting for model… No events for ${V0}s`})}r0.current=b,B6()}}},W);return()=>clearInterval(U)},[B6]);let f3=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!fQ||U===fQ)return!1;if(H4.current===U)return!0;H4.current=U;let M=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!s0.hasUnsaved()&&!M&&!o0.current&&!g0.current&&!m_.current)return m_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{m_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[o0,g0,c]),aQ=P((W)=>{if(N(W),W!=="connected"){p(null),d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),g0.current=null,F1();return}if(!p4.current){p4.current=!0;let{currentHashtag:u,searchQuery:l,searchOpen:V0}=g1.current||{};if(!u&&!l&&!V0)o1();x_(),Z1(),s1();return}let{currentHashtag:U,searchQuery:M,searchOpen:b}=g1.current;if(!U&&!M&&!b)o1();x_(),Z1(),s1()},[F1,o1,x_,Z1,s1]),tQ=P(async(W)=>{E(W),d1(null),await p_(W)},[p_]),eQ=P(async()=>{E(null),A(null),d1(null),await p_()},[p_]),_Z=P(async(W,U=I)=>{if(!W||!W.trim())return;let M=U==="root"||U==="all"?U:"current";i(M),A(W.trim()),E(null),d1(null);try{let b=await vQ(W.trim(),50,0,j,M,h1);d1(b.results),B8(!1)}catch(b){console.error("Failed to search:",b),d1([])}},[j,h1,I]),$Z=P(()=>{D(!0),A(null),E(null),i("current"),d1([])},[]),jZ=P(()=>{D(!1),A(null),p_()},[p_]),AK=P(()=>{},[]),W6=!O&&!k&&!J,QZ=P(async(W)=>{if(!W)return;let U=W.id,M=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,b=V5?.filter((l)=>l?.data?.thread_id===U&&l?.id!==U).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let u=(l)=>{if(!l.length)return;E1((U0)=>{let P0=new Set(U0);return l.forEach((K0)=>P0.add(K0)),P0}),setTimeout(()=>{if(y5(()=>{d1((U0)=>U0?U0.filter((P0)=>!l.includes(P0.id)):U0)}),E1((U0)=>{let P0=new Set(U0);return l.forEach((K0)=>P0.delete(K0)),P0}),R3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let l=await uQ(U,b>0,M);if(l?.ids?.length)u(l.ids)}catch(l){let V0=l?.message||"";if(b===0&&V0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let P0=await uQ(U,!0,M);if(P0?.ids?.length)u(P0.ids);return}console.error("Failed to delete post:",l),alert(`Failed to delete message: ${V0}`)}},[j,V5,y5]),v3=P(async()=>{try{let W=await NK();D1(kj(W));let U=W?.user||{};g_((b)=>{let u=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",l=typeof U.avatar_url==="string"?U.avatar_url.trim():null,V0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(b.name===u&&b.avatar_url===l&&b.avatar_background===V0)return b;return{name:u,avatar_url:l,avatar_background:V0}});let M=(W?.agents||[]).find((b)=>b.id==="default");c1(M?.name,M?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[c1]);g(()=>{v3();let W=H5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(l4.current=U,t_.current)t_.current.style.setProperty("--sidebar-width",`${U}px`)},[v3]);let w5=j0||S!==null,u3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.agent_id;if(!U)return;let{agent_name:M,agent_avatar:b}=W;if(!M&&b===void 0)return;let u=D4.current?.[U]||{id:U},l=u.name||null,V0=u.avatar_url??u.avatarUrl??u.avatar??null,U0=!1,P0=!1;if(M&&M!==u.name)l=M,P0=!0;if(b!==void 0){let K0=typeof b==="string"?b.trim():null,d0=typeof V0==="string"?V0.trim():null,_1=K0||null;if(_1!==(d0||null))V0=_1,U0=!0}if(!P0&&!U0)return;if(D1((K0)=>{let _1={...K0[U]||{id:U}};if(P0)_1.name=l;if(U0)_1.avatar_url=V0;return{...K0,[U]:_1}}),U==="default")c1(l,V0,U0?Date.now():null)},[c1]),b3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.user_name??W.userName,M=W.user_avatar??W.userAvatar,b=W.user_avatar_background??W.userAvatarBackground;if(U===void 0&&M===void 0&&b===void 0)return;g_((u)=>{let l=typeof U==="string"&&U.trim()?U.trim():u.name||"You",V0=M===void 0?u.avatar_url:typeof M==="string"&&M.trim()?M.trim():null,U0=b===void 0?u.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(u.name===l&&u.avatar_url===V0&&u.avatar_background===U0)return u;return{name:l,avatar_url:V0,avatar_background:U0}})},[]),U6=P((W)=>{if(!W||typeof W!=="object")return;let U=W.model??W.current;if(U!==void 0)m1(U);if(W.thinking_level!==void 0)q1(W.thinking_level??null);if(W.supports_thinking!==void 0)x1(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)s(W.provider_usage??null)},[]),f5=P(()=>{let W=j;mQ(W).then((U)=>{if(I1.current!==W)return;if(U)U6(U)}).catch(()=>{})},[U6,j]),i1=P(()=>{let W=j;Promise.all([hQ().catch(()=>({chats:[]})),K6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([U,M])=>{if(I1.current!==W)return;let b=k3(U?.chats),u=k3(M?.chats);z0(LQ(b,u,W))}).catch(()=>{if(I1.current!==W)return;z0([])})},[j]),a1=P(()=>{K6(h1).then((W)=>{y0(UQ(W?.chats))}).catch(()=>{})},[h1]),g3=P((W)=>{let U=W?.row_id;if(U==null)return;n1.current.add(U),J0((M)=>f4(M,U).items),zK(U,D3(j)).then(()=>{Z1()}).catch((M)=>{console.warn("[queue] Failed to steer queued item:",M),c("Failed to steer message","The queued message could not be sent as steering.","warning"),n1.current.delete(U),Z1()})},[j,Z1,J0,c]),m3=P((W)=>{let U=W?.row_id;if(U==null)return;let M=f4(Q1.current,U);n1.current.add(U),e_(M.remainingQueueCount),J0((b)=>f4(b,U).items),HK(U,D3(j)).then(()=>{Z1()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),c("Failed to remove message","The queued message could not be removed.","warning"),n1.current.delete(U),Z1()})},[e_,j,Z1,J0,c]),v5=P((W)=>{if(!W||typeof W!=="object")return;if(i1(),a1(),s1(),c_(),IQ(W))Z1()},[i1,c_,a1,s1,Z1]),ZZ=P(async(W,U)=>{let M=typeof W?.key==="string"?W.key:"",b=typeof U?.key==="string"?U.key:"",u=T3(M,b);if(!M||!b)return;O0((l)=>JQ(l,M,b));try{let l=await DQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:BK,dismissAutoresearch:WK,writeClipboard:(V0)=>navigator.clipboard.writeText(V0)});if(l.refreshAutoresearchStatus)c_();if(l.toast)c(l.toast.title,l.toast.detail,l.toast.kind,l.toast.durationMs)}catch(l){c("Panel action failed",l?.message||"Could not complete that action.","warning")}finally{O0((l)=>OQ(l,u))}},[j,c_,c]),L6=P(()=>{if(L_.current)L_.current.abort(),L_.current=null;L0(null)},[]),U8=P(async(W)=>{let U=String(W||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let M=new AbortController;L_.current=M,L0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await JK(U,{signal:M.signal,chatJid:$7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(u,l)=>{if(u==="side_prompt_start")L0((V0)=>V0?{...V0,status:"running"}:V0)},onThinkingDelta:(u)=>{L0((l)=>l?{...l,thinking:`${l.thinking||""}${u||""}`}:l)},onTextDelta:(u)=>{L0((l)=>l?{...l,answer:`${l.answer||""}${u||""}`}:l)}});if(L_.current!==M)return!0;L0((u)=>u?{...u,answer:b?.result||u.answer||"",thinking:b?.thinking||u.thinking||"",model:b?.model||null,status:"success",error:null}:u)}catch(b){if(M.signal.aborted)return!0;L0((u)=>u?{...u,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:u)}finally{if(L_.current===M)L_.current=null}return!0},[j,c]),YZ=P(async({content:W})=>{let U=_7(W);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return L6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await U8(U.question),!0;return!1},[L6,U8,c]),qZ=P(()=>{if(a?.question)U8(a.question)},[a,U8]),XZ=P(async()=>{let W=Z7(a);if(!W)return;try{let U=await o4("default",W,null,[],w5?"queue":null,j);v5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[a,v5,w5,c]),h3=P(async(W=null)=>{let[U,M,b,u,l,V0,U0]=await Promise.allSettled([S3(j),x3(j),pQ(j),mQ(j),hQ(),K6(h1),r4(20,null,j)]),P0=U.status==="fulfilled"?U.value:null,K0=M.status==="fulfilled"?M.value:null,d0=b.status==="fulfilled"?b.value:null,_1=u.status==="fulfilled"?u.value:null,n4=l.status==="fulfilled"?l.value:null,T1=V0.status==="fulfilled"?V0.value:null,T4=U0.status==="fulfilled"?U0.value:null,_4=Array.isArray(T4?.posts)?T4.posts:Array.isArray(R5)?R5:[],i3=_4.length?_4[_4.length-1]:null,LZ=_4.filter((J6)=>J6?.data?.is_bot_message).length,FZ=_4.filter((J6)=>!J6?.data?.is_bot_message).length,n3=Number(d0?.count??Q1.current.length??0)||0,r3=Array.isArray(n4?.chats)?n4.chats.length:N0.length,zZ=Array.isArray(T1?.chats)?T1.chats.length:q0.length,o3=Number(K0?.percent??C0?.percent??0)||0,HZ=Number(K0?.tokens??C0?.tokens??0)||0,JZ=Number(K0?.contextWindow??C0?.contextWindow??0)||0,OZ=_1?.current??e0??null,DZ=_1?.thinking_level??M1??null,AZ=_1?.supports_thinking??m0,EZ=P0?.status||(j0?"active":"idle"),MZ=P0?.data?.type||P0?.type||null;return{generatedAt:new Date().toISOString(),request:W,chat:{currentChatJid:j,rootChatJid:h1,activeChats:r3,branches:zZ},agent:{status:EZ,phase:MZ,running:Boolean(j0)},model:{current:OZ,thinkingLevel:DZ,supportsThinking:Boolean(AZ)},context:{tokens:HZ,contextWindow:JZ,percent:o3},queue:{count:n3},timeline:{loadedPosts:_4.length,botPosts:LZ,userPosts:FZ,latestPostId:i3?.id??null,latestTimestamp:i3?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(o3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,n3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,r3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,_4.length*5))}]}},[N0,e0,M1,C0,q0,j,h1,j0,R5,m0]),u5=P(()=>{f5(),i1(),a1(),Z1(),s1(),c_()},[f5,i1,a1,Z1,s1,c_]);g(()=>{u5();let W=setInterval(()=>{f5(),i1(),a1(),Z1()},60000);return()=>clearInterval(W)},[u5,f5,i1,a1,Z1]),g(()=>{R0(new Map),O0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;N5()})};if(O)return p_(O),()=>{W=!0};if(k)return vQ(k,50,0,j,I,h1).then((M)=>{if(W)return;d1(M.results),B8(!1)}).catch((M)=>{if(W)return;console.error("Failed to search:",M),d1([]),B8(!1)}),()=>{W=!0};return p_().then(()=>{U()}).catch((M)=>{if(W)return;console.error("Failed to load timeline:",M)}),()=>{W=!0}},[j,O,k,I,h1,p_,N5,B8,d1]),g(()=>{let W=O4.current||j;J4.current.set(W,K5())},[j,K5]),g(()=>{let W=O4.current||j;if(W===j)return;J4.current.set(W,K5()),O4.current=j,n1.current.clear(),V8(J4.current.get(j)||null),Z1(),x_(),s1()},[j,x_,s1,Z1,V8,K5]);let GZ=P(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:M}=g1.current||{};if(!W&&!U&&!M)o1();u5()},[u5,o1]),b5=P((W,U="streaming")=>{let M=new Date().toISOString();v0((b)=>PQ(b,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:X1.current,updatedAt:M}))},[j]),F6=P((W,U)=>{let M=U?.turn_id,b=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,l=b?b===j:W==="connected"||W==="workspace_update";if(l)u3(U),b3(U);if(W==="ui_theme"){i2(U);return}if(W==="generated_widget_open"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"loading");return}if(W==="generated_widget_delta"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"streaming");return}if(W==="generated_widget_final"){if(!l)return;if(M&&!F0.current)N_(M);b5(U,"final");return}if(W==="generated_widget_error"){if(!l)return;b5(U,"error");return}if(W==="generated_widget_close"){if(!l)return;v0((K0)=>SQ(K0,U));return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))G5()}if(W==="connected"){if(f3(U?.app_asset_version))return;p(null),d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),g0.current=null,F1();let K0=j;S3(K0).then((T1)=>{if(I1.current!==K0)return;if(!T1||T1.status!=="active"||!T1.data)return;let T4=T1.data,_4=T4.turn_id||T4.turnId;if(_4)N_(_4);if(K_({clearSilence:!0}),M4(T4),T1.thought&&T1.thought.text)a0.current=T1.thought.text,X0({text:T1.thought.text,totalLines:T1.thought.totalLines||0});if(T1.draft&&T1.draft.text)b0.current=T1.draft.text,d({text:T1.draft.text,totalLines:T1.draft.totalLines||0})}).catch((T1)=>{console.warn("Failed to fetch agent status:",T1)});let{currentHashtag:d0,searchQuery:_1,searchOpen:n4}=g1.current||{};if(!d0&&!_1&&!n4)o1();u5();return}if(W==="agent_status"){if(!l){if(U?.type==="done"||U?.type==="error")i1(),a1();return}if(U.type==="done"||U.type==="error"){if(M&&F0.current&&M!==F0.current)return;if(U.type==="done"){k4(M||F0.current);let{currentHashtag:K0,searchQuery:d0,searchOpen:_1}=g1.current||{};if(!K0&&!d0&&!_1)o1();if(U.context_usage)f0(U.context_usage)}if(s1(),h_.current=!1,F1(),n1.current.clear(),i1(),Z1(),d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(M)N_(M);if(K_({running:!0,clearSilence:!0}),U.type==="thinking")b0.current="",a0.current="",d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0});C_.current=U,p((K0)=>{if(K0&&K0.type===U.type&&K0.title===U.title)return K0;return U})}return}if(W==="agent_steer_queued"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;let K0=M||F0.current;if(!K0)return;h0.current=K0,x0(K0);return}if(W==="agent_followup_queued"){if(!l)return;J0((K0)=>kQ(K0,U)),Z1();return}if(W==="agent_followup_consumed"){if(!l)return;let K0=U?.row_id;if(K0!=null){let T1=f4(Q1.current,K0);e_(T1.remainingQueueCount),J0((T4)=>f4(T4,K0).items)}Z1();let{currentHashtag:d0,searchQuery:_1,searchOpen:n4}=g1.current||{};if(!d0&&!_1&&!n4)o1();return}if(W==="agent_followup_removed"){if(!l)return;let K0=U?.row_id;if(K0!=null){let d0=f4(Q1.current,K0);n1.current.add(K0),e_(d0.remainingQueueCount),J0((_1)=>f4(_1,K0).items)}Z1();return}if(W==="agent_draft_delta"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0}),b0.current=Sj(b0.current,U);let K0=Date.now();if(!c4.current||K0-c4.current>=100){c4.current=K0;let d0=b0.current;if(Y1.current)d((_1)=>O3(d0,_1));else d(q6(d0,null))}return}if(W==="agent_draft"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0});let K0=U.text||"",d0=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")e((_1)=>Pj(_1,K0,d0));else if(!Y1.current)b0.current=K0,d(q6(K0,U.total_lines));return}if(W==="agent_thought_delta"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0}),a0.current=xj(a0.current,U);let K0=Date.now();if(j1.current&&(!L1.current||K0-L1.current>=100)){L1.current=K0;let d0=a0.current;X0((_1)=>O3(d0,_1))}return}if(W==="agent_thought"){if(!l)return;if(M&&F0.current&&M!==F0.current)return;if(M&&!F0.current)N_(M);K_({running:!0,clearSilence:!0});let K0=U.text||"";if(!j1.current)a0.current=K0,X0(q6(K0,U.total_lines));return}if(W==="model_changed"){if(!l)return;if(U?.model!==void 0)m1(U.model);if(U?.thinking_level!==void 0)q1(U.thinking_level??null);if(U?.supports_thinking!==void 0)x1(Boolean(U.supports_thinking));let K0=j;x3(K0).then((d0)=>{if(I1.current!==K0)return;if(d0)f0(d0)}).catch(()=>{});return}if(W==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let d0=typeof U?.key==="string"?U.key:"";if(!d0)return;if(R0((_1)=>zQ(_1,U)),HQ(U))O0((_1)=>C3(_1,d0));A3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Z5(U?.updates);return}if(vj(W)){if(!l)return;if(A3(W,U),W==="extension_ui_notify"&&typeof U?.message==="string")c(U.message,null,U?.type||"info");if(W==="extension_ui_error"&&typeof U?.error==="string")c("Extension UI error",U.error,"error",5000);return}let{currentHashtag:V0,searchQuery:U0,searchOpen:P0}=g1.current;if(W==="agent_response"){if(!l)return;W8(),P_.current={post:U,turnId:F0.current}}if(!V0&&!U0&&!P0&&l&&(W==="new_post"||W==="new_reply"||W==="agent_response"))d1((K0)=>{if(!K0)return[U];if(K0.some((d0)=>d0.id===U.id))return K0;return[...K0,U]}),I4.current?.();if(W==="interaction_updated"){if(!l)return;if(V0||U0||P0)return;d1((K0)=>{if(!K0)return K0;if(!K0.some((d0)=>d0.id===U.id))return K0;return K0.map((d0)=>d0.id===U.id?U:d0)})}if(W==="interaction_deleted"){if(!l)return;if(V0||U0||P0)return;let K0=U?.ids||[];if(K0.length){if(y5(()=>{d1((d0)=>d0?d0.filter((_1)=>!K0.includes(_1.id)):d0)}),R3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[b5,F1,G5,j,V6,K_,k4,y5,i1,a1,o1,W8,N_,M4,u3,b3,f5,Z1,J0,s1,f3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=F6,W.reset=()=>{W8(),F1(),p(null),d({text:"",totalLines:0}),e(""),X0({text:"",totalLines:0}),H0(null)},W.finalize=()=>w3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[F1,w3,F6,W8]),zj({handleSseEvent:F6,handleConnectionStatusChange:aQ,loadPosts:p_,onWake:GZ,chatJid:j}),g(()=>{if(!V5||V5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);f1(U),history.replaceState(null,"",location.pathname+location.search)},[V5,f1]);let z6=S!==null;g(()=>{if(G!=="connected")return;let U=setInterval(()=>{let{currentHashtag:M,searchQuery:b,searchOpen:u}=g1.current||{},l=!M&&!b&&!u;if(z6){if(l)o1();Z1(),x_(),s1(),c_()}else{if(l)o1();x_(),s1(),c_()}},z6?15000:60000);return()=>clearInterval(U)},[G,z6,x_,c_,s1,Z1,o1]),g(()=>{return bj(()=>{x_(),s1(),Z1(),c_()})},[x_,c_,s1,Z1]);let KZ=P(()=>{f_((W)=>!W)},[]),p3=P((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let M=U4(window.location.href,U,{chatOnly:Q});$?.(M)},[Q,j,$]),H6=P(()=>{$Q({hasWindow:typeof window<"u",currentBranchRecord:K1,renameBranchInFlight:T.current,renameBranchLockUntil:r.current,getFormLock:M3,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:B0})},[K1]),g5=P(()=>{jQ({setIsRenameBranchFormOpen:B0,setRenameBranchNameDraft:$0})},[]),c3=P(async(W)=>{await QQ({hasWindow:typeof window<"u",currentBranchRecord:K1,nextName:W,openRenameForm:H6,renameBranchInFlightRef:T,renameBranchLockUntilRef:r,getFormLock:M3,setIsRenamingBranch:f,renameChatBranch:UK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,closeRenameForm:g5})},[g5,K1,i1,a1,H6,f,c]),l3=P(async(W=null)=>{await ZQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:K1,currentChatBranches:q0,activeChatAgents:N0,pruneChatBranch:LK,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[N0,Q,K1,q0,j,$,i1,a1,c]),NZ=P(async(W)=>{await YQ({targetChatJid:W,restoreChatBranch:FK,currentChatBranches:q0,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,q0,$,i1,a1,c]);g(()=>{if(!X||typeof window>"u")return;let W=!1;return qQ({branchLoaderSourceChatJid:K,forkChatBranch:p5,setBranchLoaderState:e1,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[X,K,$]);let VZ=P((W)=>{if(!W||typeof W!=="object")return;let U=J_(W);if(U)X1.current.delete(U);v0(TQ(W,new Date().toISOString()))},[]),m5=P(()=>{v0((W)=>{let U=CQ(W);if(U.dismissedSessionKey)X1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),BZ=P((W,U)=>{let M=typeof W?.kind==="string"?W.kind:"",b=J_(U);if(!M||!b)return;if(M==="widget.close"){m5();return}if(M==="widget.submit"){let u=W7(W?.payload),l=U7(W?.payload),V0=new Date().toISOString();if(v0((U0)=>xQ(U0,b,{kind:M,payload:W?.payload||null,submittedAt:V0,submissionText:u})),!u){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),l)m5();return}(async()=>{try{let U0=await o4("default",u,null,[],w5?"queue":null,j);if(v5(U0),v0((P0)=>P3(P0,b,{submittedAt:V0,submissionText:u,queued:U0?.queued||null})),c(U0?.queued==="followup"?"Widget submission queued":"Widget submission sent",U0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),l)m5()}catch(U0){v0((P0)=>P3(P0,b,{submittedAt:V0,submissionText:u,errorMessage:U0?.message||"Could not send the widget message."})),c("Widget submission failed",U0?.message||"Could not send the widget message.","warning",5000)}})();return}if(M==="widget.ready"||M==="widget.request_refresh"){let u=new Date().toISOString(),l=Boolean(W?.payload?.buildDashboard||W?.payload?.dashboardKind==="internal-state"),V0=Number(U?.runtimeState?.refreshCount||0)+1;if(v0((U0)=>yQ(U0,b,{kind:M,payload:W?.payload||null,eventAt:u,nextRefreshCount:V0,shouldBuildDashboard:l})),M==="widget.request_refresh")if(l)(async()=>{try{let U0=await h3(W?.payload||null);v0((P0)=>RQ(P0,b,{dashboard:U0,at:new Date().toISOString(),count:V0,echo:W?.payload||null})),c("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(U0){v0((P0)=>wQ(P0,b,{errorMessage:U0?.message||"Could not build dashboard.",at:new Date().toISOString(),count:V0})),c("Dashboard build failed",U0?.message||"Could not build dashboard.","warning",5000)}})();else c("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[h3,j,m5,v5,w5,c]);g(()=>{X1.current.clear(),v0(null)},[j]);let WZ=P(async()=>{await XQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:p5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:a1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,i1,a1,c]),L8=P(async(W,U)=>{await GQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(M)=>{let u=(typeof p0==="string"?p0.trim():"")===M?R1.current:M===e4?A_.current:null;if(typeof u?.preparePopoutTransfer==="function")return await u.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(M)=>{let b=s0.get(M);if(b&&!b.dirty){n_(M);return}if(M===e4&&p1)P1(!1)}})},[j,p1,n_,V,c,p0]);g(()=>gj({openTab:(W,U)=>__(W,U?{label:U}:void 0),popOutPane:(W,U)=>{L8(W,U)}}),[L8,__]);let UZ=P(async()=>{await KQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:h1,forkChatBranch:p5,getActiveChatAgents:v6,getChatBranches:K6,setActiveChatAgents:z0,setCurrentChatBranches:y0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,h1,V,c]);g(()=>{if(!V1)return;if(typeof window>"u")return;let W=t_.current;if(!W)return;if(!q4.current){let U=H5("editorWidth",null),M=l4.current||280;q4.current=Number.isFinite(U)?U:M}if(W.style.setProperty("--editor-width",`${q4.current}px`),!A4.current){let U=H5("dockHeight",null);A4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${A4.current}px`)},[V1]),g(()=>{if(!$_||Q)return;return mj(b1)},[b1,$_,Q]),g(()=>{if(Q)return;return hj({toggleZenMode:h4,exitZenMode:T_,zenMode:H1,isZenModeActive:()=>H1})},[h4,T_,H1,Q]);let d3=Boolean(n0&&n0===(S?.turn_id||D0));if(X)return L`
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
        `;if(Z)return L`
            <div class=${`app-shell pane-popout${V1?" editor-open":""}`} ref=${t_}>
                <div class="editor-pane-container pane-popout-container">
                    ${V1&&!I_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${j_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${s_}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <polyline points="4.5 6.5 8 10 11.5 6.5" />
                                            </svg>
                                        </summary>
                                        <div class="pane-popout-controls-panel">
                                            ${X_.length>1&&L`
                                                <div class="pane-popout-controls-section">
                                                    <div class="pane-popout-controls-section-title">Open panes</div>
                                                    <div class="pane-popout-controls-list">
                                                        ${X_.map((W)=>L`
                                                            <button
                                                                type="button"
                                                                class=${`pane-popout-controls-item${W.id===p0?" active":""}`}
                                                                onClick=${(U)=>{b4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${p0&&C1.has(p0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{u_(p0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${s_}>${s_}</div>
                                `}
                        </div>
                    `}
                    ${V1?L`<div class="editor-pane-host" ref=${B1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${V1&&p0&&C1.has(p0)&&L`
                        <${F3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${p0}
                            onClose=${()=>u_(p0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${N1?"":" workspace-collapsed"}${V1?" editor-open":""}${Q?" chat-only":""}${H1?" zen-mode":""}`} ref=${t_}>
            ${Z0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)g5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),c3(W0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${w1}
                            value=${W0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";$0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),g5()}}
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
                                onClick=${g5}
                                disabled=${w}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            `}
            ${!Q&&L`
                <${Bj}
                    onFileSelect=${x5}
                    visible=${N1}
                    active=${N1||V1}
                    onOpenEditor=${__}
                    onOpenTerminalTab=${z1}
                    onOpenVncTab=${E_}
                    onToggleTerminal=${$_?b1:void 0}
                    terminalVisible=${Boolean($_&&p1)}
                />
                <button
                    class=${`workspace-toggle-tab${N1?" open":" closed"}`}
                    onClick=${KZ}
                    title=${N1?"Hide workspace":"Show workspace"}
                    aria-label=${N1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${dQ} onTouchStart=${iQ}></div>
            `}
            ${Y4&&L`
                <div class="editor-pane-container">
                    ${H1&&L`<div class="zen-hover-zone"></div>`}
                    ${V1&&L`
                        <${Lj}
                            tabs=${X_}
                            activeId=${p0}
                            onActivate=${b4}
                            onClose=${n_}
                            onCloseOthers=${r_}
                            onCloseAll=${j5}
                            onTogglePin=${o_}
                            onTogglePreview=${u_}
                            onEditSource=${P5}
                            previewTabs=${C1}
                            paneOverrides=${D_}
                            onToggleDock=${$_?b1:void 0}
                            dockVisible=${$_&&p1}
                            onToggleZen=${h4}
                            zenMode=${H1}
                            onPopOutTab=${V?void 0:L8}
                        />
                    `}
                    ${V1&&L`<div class="editor-pane-host" ref=${B1}></div>`}
                    ${V1&&p0&&C1.has(p0)&&L`
                        <${F3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${p0}
                            onClose=${()=>u_(p0)}
                        />
                    `}
                    ${$_&&p1&&L`<div class="dock-splitter" onMouseDown=${oQ} onTouchStart=${sQ}></div>`}
                    ${$_&&L`<div class=${`dock-panel${p1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>L8(e4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                                            <path d="M8.5 2.25h5.25v5.25"/>
                                            <path d="M13.75 2.25 7.75 8.25"/>
                                        </svg>
                                    </button>
                                `}
                                <button class="dock-panel-close" onClick=${b1} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                        <line x1="4" y1="4" x2="12" y2="12"/>
                                        <line x1="12" y1="4" x2="4" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="dock-panel-body" ref=${Q5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${nQ} onTouchStart=${rQ}></div>
            `}
            <div class="container">
                ${k&&Ij()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${K1?.agent_name?`@${K1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${K1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${q0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>p3(W.currentTarget.value)}
                                    >
                                        ${q0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${f8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${K1?.chat_jid&&L`
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
                            ${K1?.chat_jid&&K1.chat_jid!==(K1.root_chat_jid||K1.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${l3}
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
                        <button class="back-btn" onClick=${eQ}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${k} · ${Q4}`}</span>
                    </div>
                `}
                <${u7}
                    posts=${V5}
                    hasMore=${W6?cQ:!1}
                    onLoadMore=${W6?lQ:void 0}
                    timelineRef=${G_}
                    onHashtagClick=${tQ}
                    onMessageRef=${S1}
                    onScrollToMessage=${f1}
                    onFileRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${QZ}
                    onOpenWidget=${VZ}
                    emptyMessage=${O?`No posts with #${O}`:k?`No results for "${k}"`:void 0}
                    agents=${Y_}
                    user=${b_}
                    reverse=${W6}
                    removingPostIds=${y1}
                    searchQuery=${k}
                />
                <${B$}
                    status=${N4(S)?null:S}
                    draft=${Q0}
                    plan=${_0}
                    thought=${Y0}
                    pendingRequest=${G0}
                    intent=${x}
                    turnId=${D0}
                    steerQueued=${d3}
                    onPanelToggle=${F_}
                    showExtensionPanels=${!1}
                />
                <${Y7}
                    session=${a}
                    onClose=${L6}
                    onRetry=${qZ}
                    onInject=${XZ}
                />
                <${z7}
                    widget=${E0}
                    onClose=${m5}
                    onWidgetEvent=${BZ}
                />
                <${B$}
                    extensionPanels=${Array.from(M0.values())}
                    pendingPanelActions=${l0}
                    onExtensionPanelAction=${ZZ}
                    turnId=${D0}
                    steerQueued=${d3}
                    onPanelToggle=${F_}
                    showCorePanels=${!1}
                />
                <${Q$}
                    items=${J?[]:u0}
                    onInjectQueuedFollowup=${g3}
                    onRemoveQueuedFollowup=${m3}
                    onOpenFilePill=${I0}
                />
                <${R2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=g1.current||{};if(!W&&!U)p_(),N5()}}
                    onFocus=${N5}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${_Z}
                    onSearchScopeChange=${i}
                    onEnterSearch=${$Z}
                    onExitSearch=${jZ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${v}
                    onSetFileRefs=${n}
                    messageRefs=${t}
                    onRemoveMessageRef=${G4}
                    onClearMessageRefs=${i4}
                    onSetMessageRefs=${q5}
                    onSwitchChat=${p3}
                    onRenameSession=${c3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${WZ}
                    onDeleteSession=${l3}
                    onRestoreSession=${NZ}
                    activeEditorPath=${Q?null:p0}
                    onAttachEditorFile=${Q?void 0:J1}
                    onOpenFilePill=${I0}
                    followupQueueCount=${W_}
                    followupQueueItems=${u0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${g3}
                    onRemoveQueuedFollowup=${m3}
                    onSubmitIntercept=${YZ}
                    onMessageResponse=${v5}
                    onSubmitError=${X5}
                    onPopOutChat=${V?void 0:UZ}
                    isAgentActive=${w5}
                    activeChatAgents=${N0}
                    currentChatJid=${j}
                    connectionStatus=${G}
                    activeModel=${e0}
                    modelUsage=${k1}
                    thinkingLevel=${M1}
                    supportsThinking=${m0}
                    contextUsage=${C0}
                    notificationsEnabled=${$5}
                    notificationPermission=${v4}
                    onToggleNotifications=${u1}
                    onModelChange=${m1}
                    onModelStateChange=${U6}
                    statusNotice=${N4(S)?S:null}
                />
                <${A7}
                    request=${G0}
                    onRespond=${()=>{H0(null),g0.current=null}}
                />
            </div>
        </div>
    `}function DK(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},X=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",X);else window.history.pushState(null,"",X);$(window.location.href)},[]),Q=w0(()=>new URL(_).searchParams,[_]);return L`<${OK} locationParams=${Q} navigate=${j} />`}S4(L`<${DK} />`,document.getElementById("app"));

//# debugId=693876E3583EB54464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
