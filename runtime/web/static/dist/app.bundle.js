var IZ=Object.defineProperty;var TZ=(_)=>_;function CZ(_,$){this[_]=TZ.bind(null,$)}var PZ=(_,$)=>{for(var j in $)IZ(_,j,{get:$[j],enumerable:!0,configurable:!0,set:CZ.bind($,j)})};var A8,W1,X2,SZ,C4,s3,K2,N2,V2,I6,D6,A6,B2,J8={},O8=[],xZ=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,E8=Array.isArray;function N4(_,$){for(var j in $)_[j]=$[j];return _}function T6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function M8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?A8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return z8(_,q,Q,Z,null)}function z8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++X2:Z,__i:-1,__u:0};return Z==null&&W1.vnode!=null&&W1.vnode(Y),Y}function k8(_){return _.children}function B5(_,$){this.props=_,this.context=$}function W5(_,$){if($==null)return _.__?W5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W5(_):null}function yZ(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=N4({},$);Y.__v=$.__v+1,W1.vnode&&W1.vnode(Y),C6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?W5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,F2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&W2(Y)}}function W2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),W2(_)}function E6(_){(!_.__d&&(_.__d=!0)&&C4.push(_)&&!D8.__r++||s3!=W1.debounceRendering)&&((s3=W1.debounceRendering)||K2)(D8)}function D8(){try{for(var _,$=1;C4.length;)C4.length>$&&C4.sort(N2),_=C4.shift(),$=C4.length,yZ(_)}finally{C4.length=D8.__r=0}}function U2(_,$,j,Q,Z,Y,q,G,K,X,N){var V,B,O,E,M,A,J,D=Q&&Q.__k||O8,I=$.length;for(K=RZ(j,$,D,K,I),V=0;V<I;V++)(O=j.__k[V])!=null&&(B=O.__i!=-1&&D[O.__i]||J8,O.__i=V,A=C6(_,O,B,Z,Y,q,G,K,X,N),E=O.__e,O.ref&&B.ref!=O.ref&&(B.ref&&P6(B.ref,null,O),N.push(O.ref,O.__c||E,O)),M==null&&E!=null&&(M=E),(J=!!(4&O.__u))||B.__k===O.__k?K=L2(O,K,_,J):typeof O.type=="function"&&A!==void 0?K=A:E&&(K=E.nextSibling),O.__u&=-7);return j.__e=M,K}function RZ(_,$,j,Q,Z){var Y,q,G,K,X,N=j.length,V=N,B=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=z8(null,q,null,null,null):E8(q)?q=_.__k[Y]=z8(k8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=z8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,K=Y+B,q.__=_,q.__b=_.__b+1,G=null,(X=q.__i=wZ(q,j,K,V))!=-1&&(V--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(Z>N?B--:Z<N&&B++),typeof q.type!="function"&&(q.__u|=4)):X!=K&&(X==K-1?B--:X==K+1?B++:(X>K?B--:B++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<N;Y++)(G=j[Y])!=null&&(2&G.__u)==0&&(G.__e==Q&&(Q=W5(G)),H2(G,G));return Q}function L2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=L2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=W5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function wZ(_,$,j,Q){var Z,Y,q,G=_.key,K=_.type,X=$[j],N=X!=null&&(2&X.__u)==0;if(X===null&&G==null||N&&G==X.key&&K==X.type)return j;if(Q>(N?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((X=$[q=Z>=0?Z--:Y++])!=null&&(2&X.__u)==0&&G==X.key&&K==X.type)return q}return-1}function a3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||xZ.test($)?j:j+"px"}function F8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||a3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||a3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(V2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=I6,_.addEventListener($,Y?A6:D6,Y)):_.removeEventListener($,Y?A6:D6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function t3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=I6++;else if($.t<j.u)return;return j(W1.event?W1.event($):$)}}}function C6(_,$,j,Q,Z,Y,q,G,K,X){var N,V,B,O,E,M,A,J,D,I,d,h,o,t,R,x=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),Y=[G=$.__e=j.__e]),(N=W1.__b)&&N($);_:if(typeof x=="function")try{if(J=$.props,D=x.prototype&&x.prototype.render,I=(N=x.contextType)&&Q[N.__c],d=N?I?I.props.value:N.__:Q,j.__c?A=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new x(J,d):($.__c=V=new B5(J,d),V.constructor=x,V.render=vZ),I&&I.sub(V),V.state||(V.state={}),V.__n=Q,B=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&x.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=N4({},V.__s)),N4(V.__s,x.getDerivedStateFromProps(J,V.__s))),O=V.props,E=V.state,V.__v=$,B)D&&x.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&x.getDerivedStateFromProps==null&&J!==O&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(J,d),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(J,V.__s,d)===!1){$.__v!=j.__v&&(V.props=J,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(H){H&&(H.__=$)}),O8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(J,V.__s,d),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(O,E,M)})}if(V.context=d,V.props=J,V.__P=_,V.__e=!1,h=W1.__r,o=0,D)V.state=V.__s,V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),O8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,h&&h($),N=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++o<25);V.state=V.__s,V.getChildContext!=null&&(Q=N4(N4({},Q),V.getChildContext())),D&&!B&&V.getSnapshotBeforeUpdate!=null&&(M=V.getSnapshotBeforeUpdate(O,E)),t=N!=null&&N.type===k8&&N.key==null?z2(N.props.children):N,G=U2(_,E8(t)?t:[t],$,j,Q,Z,Y,q,G,K,X),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),A&&(V.__E=V.__=null)}catch(H){if($.__v=null,K||Y!=null)if(H.then){for($.__u|=K?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;Y[Y.indexOf(G)]=null,$.__e=G}else{for(R=Y.length;R--;)T6(Y[R]);M6($)}else $.__e=j.__e,$.__k=j.__k,H.then||M6($);W1.__e(H,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=fZ(j.__e,$,j,Q,Z,Y,q,K,X);return(N=W1.diffed)&&N($),128&$.__u?void 0:G}function M6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(M6))}function F2(_,$,j){for(var Q=0;Q<j.length;Q++)P6(j[Q],j[++Q],j[++Q]);W1.__c&&W1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){W1.__e(Y,Z.__v)}})}function z2(_){return typeof _!="object"||_==null||_.__b>0?_:E8(_)?_.map(z2):N4({},_)}function fZ(_,$,j,Q,Z,Y,q,G,K){var X,N,V,B,O,E,M,A=j.props||J8,J=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(X=0;X<Y.length;X++)if((O=Y[X])&&"setAttribute"in O==!!D&&(D?O.localName==D:O.nodeType==3)){_=O,Y[X]=null;break}}if(_==null){if(D==null)return document.createTextNode(J);_=document.createElementNS(Z,D,J.is&&J),G&&(W1.__m&&W1.__m($,Y),G=!1),Y=null}if(D==null)A===J||G&&_.data==J||(_.data=J);else{if(Y=Y&&A8.call(_.childNodes),!G&&Y!=null)for(A={},X=0;X<_.attributes.length;X++)A[(O=_.attributes[X]).name]=O.value;for(X in A)O=A[X],X=="dangerouslySetInnerHTML"?V=O:X=="children"||(X in J)||X=="value"&&("defaultValue"in J)||X=="checked"&&("defaultChecked"in J)||F8(_,X,null,O,Z);for(X in J)O=J[X],X=="children"?B=O:X=="dangerouslySetInnerHTML"?N=O:X=="value"?E=O:X=="checked"?M=O:G&&typeof O!="function"||A[X]===O||F8(_,X,O,A[X],Z);if(N)G||V&&(N.__html==V.__html||N.__html==_.innerHTML)||(_.innerHTML=N.__html),$.__k=[];else if(V&&(_.innerHTML=""),U2($.type=="template"?_.content:_,E8(B)?B:[B],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&W5(j,0),G,K),Y!=null)for(X=Y.length;X--;)T6(Y[X]);G||(X="value",D=="progress"&&E==null?_.removeAttribute("value"):E!=null&&(E!==_[X]||D=="progress"&&!E||D=="option"&&E!=A[X])&&F8(_,X,E,A[X],Z),X="checked",M!=null&&M!=_[X]&&F8(_,X,M,A[X],Z))}return _}function P6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){W1.__e(Z,j)}}function H2(_,$,j){var Q,Z;if(W1.unmount&&W1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||P6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){W1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&H2(Q[Z],$,j||typeof _.type!="function");j||T6(_.__e),_.__c=_.__=_.__e=void 0}function vZ(_,$,j){return this.constructor(_,j)}function S4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),W1.__&&W1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],C6($,_=(!Q&&j||$).__k=M8(k8,null,[_]),Z||J8,J8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?A8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),F2(Y,_,q)}function J2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,E6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+B2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}A8=O8.slice,W1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(G){_=G}throw _}},X2=0,SZ=function(_){return _!=null&&_.constructor===void 0},B5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N4({},this.state),typeof _=="function"&&(_=_(N4({},j),this.props)),_&&N4(j,_),_!=null&&this.__v&&($&&this._sb.push($),E6(this))},B5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),E6(this))},B5.prototype.render=k8,C4=[],K2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N2=function(_,$){return _.__v.__b-$.__v.__b},D8.__r=0,V2=/(PointerCapture)$|Capture$/i,I6=0,D6=t3(!1),A6=t3(!0),B2=0;var P4,B1,O6,e3,U5=0,O2=[],O1=W1,_2=O1.__b,$2=O1.__r,j2=O1.diffed,Q2=O1.__c,Z2=O1.unmount,Y2=O1.__;function L5(_,$){O1.__h&&O1.__h(B1,_,U5||$),U5=0;var j=B1.__H||(B1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return U5=1,S6(k2,_)}function S6(_,$,j){var Q=L5(P4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):k2(void 0,$),function(G){var K=Q.__N?Q.__N[0]:Q.__[0],X=Q.t(K,G);K!==X&&(Q.__N=[X,Q.__[1]],Q.__c.setState({}))}],Q.__c=B1,!B1.__f)){var Z=function(G,K,X){if(!Q.__c.__H)return!0;var N=Q.__c.__H.__.filter(function(B){return B.__c});if(N.every(function(B){return!B.__N}))return!Y||Y.call(this,G,K,X);var V=Q.__c.props!==G;return N.some(function(B){if(B.__N){var O=B.__[0];B.__=B.__N,B.__N=void 0,O!==B.__[0]&&(V=!0)}}),Y&&Y.call(this,G,K,X)||V};B1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=B1;B1.componentWillUpdate=function(G,K,X){if(this.__e){var N=Y;Y=void 0,Z(G,K,X),Y=N}q&&q.call(this,G,K,X)},B1.shouldComponentUpdate=Z}return Q.__N||Q.__}function g(_,$){var j=L5(P4++,3);!O1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,B1.__H.__h.push(j))}function h5(_,$){var j=L5(P4++,4);!O1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,B1.__h.push(j))}function C(_){return U5=5,f0(function(){return{current:_}},[])}function D2(_,$,j){U5=6,h5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function f0(_,$){var j=L5(P4++,7);return x6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return U5=8,f0(function(){return _},$)}function A2(_){var $=B1.context[_.__c],j=L5(P4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(B1)),$.props.value):_.__}function E2(_,$){O1.useDebugValue&&O1.useDebugValue($?$(_):_)}function M2(_){var $=L5(P4++,10),j=m();return $.__=_,B1.componentDidCatch||(B1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function uZ(){for(var _;_=O2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(H8),$.__h.some(k6),$.__h=[]}catch(j){$.__h=[],O1.__e(j,_.__v)}}}O1.__b=function(_){B1=null,_2&&_2(_)},O1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Y2&&Y2(_,$)},O1.__r=function(_){$2&&$2(_),P4=0;var $=(B1=_.__c).__H;$&&(O6===B1?($.__h=[],B1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(H8),$.__h.some(k6),$.__h=[],P4=0)),O6=B1},O1.diffed=function(_){j2&&j2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(O2.push($)!==1&&e3===O1.requestAnimationFrame||((e3=O1.requestAnimationFrame)||bZ)(uZ)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),O6=B1=null},O1.__c=function(_,$){$.some(function(j){try{j.__h.some(H8),j.__h=j.__h.filter(function(Q){return!Q.__||k6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],O1.__e(Q,j.__v)}}),Q2&&Q2(_,$)},O1.unmount=function(_){Z2&&Z2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{H8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&O1.__e($,j.__v))};var q2=typeof requestAnimationFrame=="function";function bZ(_){var $,j=function(){clearTimeout(Q),q2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);q2&&($=requestAnimationFrame(j))}function H8(_){var $=B1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),B1=$}function k6(_){var $=B1;_.__c=_.__(),B1=$}function x6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function k2(_,$){return typeof $=="function"?$(_):$}var I2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],G=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=G:q===4?Q[1]=Object.assign(Q[1]||{},G):q===5?(Q[1]=Q[1]||{})[$[++Y]]=G:q===6?Q[1][$[++Y]]+=G+"":q?(Z=_.apply(G,I2(_,G,j,["",null])),Q.push(Z),G[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(G)}return Q},G2=new Map;function gZ(_){var $=G2.get(this);return $||($=new Map,G2.set(this,$)),($=I2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",G="",K=[0],X=function(B){Y===1&&(B||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,B,q):Y===3&&(B||q)?(K.push(3,B,q),Y=2):Y===2&&q==="..."&&B?K.push(4,B,0):Y===2&&q&&!B?K.push(5,0,!0,q):Y>=5&&((q||!B&&Y===5)&&(K.push(Y,0,q,Z),Y=6),B&&(K.push(Y,B,0,Z),Y=6)),q=""},N=0;N<j.length;N++){N&&(Y===1&&X(),X(N));for(var V=0;V<j[N].length;V++)Q=j[N][V],Y===1?Q==="<"?(X(),K=[K],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:G?Q===G?G="":q+=Q:Q==='"'||Q==="'"?G=Q:Q===">"?(X(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[N][V+1]===">")?(X(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(X(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,K=K[0])}return X(),K}(_)),$),arguments,[])).length>1?$:$[0]}var L=gZ.bind(M8);var e1={};PZ(e1,{uploadWorkspaceFile:()=>T8,uploadMedia:()=>g6,updateWorkspaceFile:()=>ZY,submitAdaptiveCardAction:()=>m6,streamSidePrompt:()=>$Y,stopAutoresearch:()=>sZ,steerAgentQueueItem:()=>_Y,setWorkspaceVisibility:()=>i5,setAgentThoughtVisibility:()=>c6,sendPeerAgentMessage:()=>nZ,sendAgentMessage:()=>r4,searchPosts:()=>R6,restoreChatBranch:()=>iZ,respondToAgentRequest:()=>I8,renameWorkspaceFile:()=>r6,renameChatBranch:()=>lZ,removeAgentQueueItem:()=>eZ,pruneChatBranch:()=>dZ,moveWorkspaceEntry:()=>o6,getWorkspaceTree:()=>l5,getWorkspaceRawUrl:()=>C8,getWorkspaceFile:()=>d5,getWorkspaceDownloadUrl:()=>P8,getWorkspaceBranch:()=>QY,getTimeline:()=>n4,getThumbnailUrl:()=>l6,getThread:()=>w6,getPostsByHashtag:()=>y6,getMediaUrl:()=>w_,getMediaText:()=>d6,getMediaInfo:()=>F5,getMediaBlob:()=>jY,getChatBranches:()=>cZ,getAutoresearchStatus:()=>oZ,getAgents:()=>u6,getAgentThought:()=>p6,getAgentStatus:()=>b6,getAgentQueueState:()=>tZ,getAgentModels:()=>c5,getAgentContext:()=>rZ,getActiveChatAgents:()=>v6,forkChatBranch:()=>p5,dismissAutoresearch:()=>aZ,deleteWorkspaceFile:()=>s6,deletePost:()=>f6,createWorkspaceFile:()=>n6,createReply:()=>pZ,createPost:()=>hZ,attachWorkspaceFile:()=>i6,addToWhitelist:()=>h6,SSEClient:()=>S8});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function T2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function mZ(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:G}=await j.read();if(G)break;Z+=Q.decode(q,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let X of K){let N=T2(X);if(N)$(N.event,N.data)}}Z+=Q.decode();let Y=T2(Z);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Q)}async function y6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function R6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",G=Z?`&scope=${encodeURIComponent(Z)}`:"",K=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${G}${K}`)}async function w6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function hZ(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function pZ(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return t0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function f6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return t0(Z,{method:"DELETE"})}async function r4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",G={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")G.mode=Z;return t0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(G)})}async function v6(){return t0("/agent/active-chats")}async function cZ(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Q}`)}async function p5(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function lZ(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function dZ(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function iZ(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function nZ(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function u6(){return t0("/agent/roster")}async function b6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function rZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function oZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function sZ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function aZ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function tZ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function eZ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function _Y(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function c5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function g6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function I8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function m6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function $Y(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await mZ(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function h6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function p6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function c6(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function w_(_){return`/media/${_}`}function l6(_){return`/media/${_}/thumbnail`}async function F5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function d6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function jY(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function l5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Q)}async function QY(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function d5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return t0(Z)}async function ZY(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function i6(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function T8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",G=await fetch(""+q,{method:"POST",body:Q});if(!G.ok){let K=await G.json().catch(()=>({error:"Upload failed"})),X=Error(K.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=K.code,X}return G.json()}async function n6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function r6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function o6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function s6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function i5(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function C8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function P8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class S8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function x8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function YY(_,$){let j=x8(_),Q=x8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function a6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t6(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function qY(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function GY(_,$,j=0,Q=(Z)=>Z){let Z=x8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=qY(Y.length,j),G=Y.map((K)=>x8(Q(K)));for(let K of q)if(G[K].startsWith(Z))return K;for(let K of q)if(G[K].includes(Z))return K;return-1}function e6(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(YY(Y,$))return j}return GY(Z,$,0,Q)}function H_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function G1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function z5(_,$=!1){let j=H_(_);if(j===null)return $;return j==="true"}function H5(_,$=null){let j=H_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}function y8(_){return String(_||"").trim().toLowerCase()}function _$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return y8($[1]||"")}function XY(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=y8(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function C2(_,$,j={}){let Q=_$($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return XY(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return y8(Y?.agent_name).startsWith(Q)})}function $$(_){let $=y8(_);return $?`@${$} `:""}function P2(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function R8(_){let $=j$(_);return $?`@${$}`:""}function j$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function w8(_,$=""){let j=String(_||""),Q=j$(j),Z=j$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function S2(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function KY(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function f8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=KY(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function x2(_,$,j){let Q=R8(_),Z=R8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}function NY(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function V4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function v8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return V4(_)?"Compacting context":"Working..."}function VY(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function u8(_,$=Date.now()){let j=NY(_);if(j===null)return null;return VY(Math.max(0,$-j))}function i_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let G=`${_}-file-pill`,K=`${_}-file-name`,X=`${_}-file-remove`,N=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${Z}>
      ${N}
      <span class=${K}>${$}</span>
      ${Q&&L`
        <button
          class=${X}
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
  `}var BY=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function WY({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",G=`${Q!=null?`Context: ${y2(Q)} / ${y2(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,K=9,X=2*Math.PI*9,N=j/100*X,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${G}
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
                    stroke-dasharray=${`${N} ${X}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function y2(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function UY(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Q=X;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X))Z.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function LY(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Q=X;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(N)Z.push(N[1])}else if(!X.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y);return{content:[...q,...G].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function FY(_){let $=UY(_||""),j=LY($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function Q$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=FY(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((G)=>L`
                                        <${i_}
                                            key=${"queue-msg-"+G}
                                            prefix="compose"
                                            label=${"msg:"+G}
                                            title=${"Message reference: "+G}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((G)=>{let K=G.split("/").pop()||G;return L`
                                            <${i_}
                                                key=${"queue-file-"+G}
                                                prefix="compose"
                                                label=${K}
                                                title=${G}
                                                onClick=${()=>Q?.(G)}
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
    `}function R2({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:G,fileRefs:K=[],onRemoveFileRef:X,onClearFileRefs:N,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:O,activeModel:E=null,modelUsage:M=null,thinkingLevel:A=null,supportsThinking:J=!1,contextUsage:D=null,onContextCompact:I,notificationsEnabled:d=!1,notificationPermission:h="default",onToggleNotifications:o,onModelChange:t,onModelStateChange:R,activeEditorPath:x=null,onAttachEditorFile:H,onOpenFilePill:S,followupQueueItems:p=[],onInjectQueuedFollowup:Q0,onRemoveQueuedFollowup:l,onSubmitIntercept:_0,onMessageResponse:e,onPopOutChat:Y0,isAgentActive:G0=!1,activeChatAgents:X0=[],currentChatJid:H0="web:default",connectionStatus:D0="connected",onSetFileRefs:A0,onSetMessageRefs:n0,onSubmitError:x0,onSwitchChat:k0,onRenameSession:r0,isRenameSessionInProgress:o0=!1,onCreateSession:g0,onDeleteSession:a0,onRestoreSession:m0,showQueueStack:_1=!0,statusNotice:z0=null}){let[p0,$1]=m(""),[Z1,q_]=m(""),[D1,e0]=m([]),[h1,M1]=m(!1),[Y1,h0]=m([]),[x1,k1]=m(0),[s,N0]=m(!1),[L0,q0]=m([]),[y0,C0]=m(0),[v0,M0]=m(!1),[R0,d0]=m(!1),[O0,b0]=m(!1),[J0,j0]=m(!1),[y,a]=m([]),[U0,E0]=m(0),[u0,q1]=m(0),[A1,X1]=m(!1),[p1,Z4]=m(0),[B_,__]=m(null),[W_,G_]=m(()=>Date.now()),j1=C(null),r1=C(null),Y4=C(null),v_=C(null),_5=C(null),v4=C(null),u1=C(null),U_=C(null),y1=C({value:"",updatedAt:0}),E1=C(0),K1=C(!1),u_=200,b_=(F)=>{let v=new Set,n=[];for(let c of F||[]){if(typeof c!=="string")continue;let I0=c.trim();if(!I0||v.has(I0))continue;v.add(I0),n.push(I0)}return n},N1=()=>{let F=H_("piclaw_compose_history");if(!F)return[];try{let v=JSON.parse(F);if(!Array.isArray(v))return[];return b_(v)}catch{return[]}},X_=(F)=>{G1("piclaw_compose_history",JSON.stringify(F))},c0=C(N1()),C1=C(-1),A_=C(""),$_=p0.trim()||D1.length>0||K.length>0||V.length>0,u4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),o_=typeof window<"u"&&typeof Notification<"u",b4=typeof window<"u"?Boolean(window.isSecureContext):!1,$5=o_&&b4&&h!=="denied",a_=h==="granted"&&d,g_=V4(z0),P5=v8(z0),S5=typeof z0?.detail==="string"&&z0.detail.trim()?z0.detail.trim():"",V1=g_?u8(z0,W_):null,R1=a_?"Disable notifications":"Enable notifications",j5=D1.length>0||K.length>0||V.length>0,E_=D0==="disconnected"?"Reconnecting":String(D0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(F)=>F.toUpperCase()),j_=D0==="disconnected"?"Reconnecting":`Connection: ${E_}`,c1=(Array.isArray(X0)?X0:[]).filter((F)=>!F?.archived_at),P1=(()=>{for(let F of Array.isArray(X0)?X0:[]){let v=typeof F?.chat_jid==="string"?F.chat_jid.trim():"";if(v&&v===H0)return F}return null})(),b1=Boolean(P1&&P1.chat_jid===(P1.root_chat_jid||P1.chat_jid)),F1=f0(()=>{let F=new Set,v=[];for(let n of Array.isArray(X0)?X0:[]){let c=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!c||c===H0||F.has(c))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;F.add(c),v.push(n)}return v},[X0,H0]),M_=F1.length>0,k_=M_&&typeof k0==="function",I_=M_&&typeof m0==="function",t_=Boolean(o0||K1.current),Q_=!j&&typeof r0==="function"&&!t_,o1=!j&&typeof g0==="function",T_=!j&&typeof a0==="function"&&!b1,q4=!j&&(k_||I_||Q_||o1||T_),z1=E||"",e_=J&&A?` (${A})`:"",g4=e_.trim()?`${A}`:"",m4=typeof M?.hint_short==="string"?M.hint_short.trim():"",C_=[g4||null,m4||null].filter(Boolean).join(" • "),h4=[z1?`Current model: ${z1}${e_}`:null,M?.plan?`Plan: ${M.plan}`:null,m4||null,M?.primary?.reset_description||null,M?.secondary?.reset_description||null].filter(Boolean),Q5=R0?"Switching model…":h4.join(" • ")||`Current model: ${z1}${e_} (tap to open model picker)`,m_=(F)=>{if(!F||typeof F!=="object")return;let v=F.model??F.current;if(typeof R==="function")R({model:v??null,thinking_level:F.thinking_level??null,supports_thinking:F.supports_thinking,provider_usage:F.provider_usage??null});if(v&&typeof t==="function")t(v)},h_=(F)=>{let v=F||j1.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},J4=(F)=>{if(!F.startsWith("/")||F.includes(`
`)){N0(!1),h0([]);return}let v=F.toLowerCase().split(" ")[0];if(v.length<1){N0(!1),h0([]);return}let n=BY.filter((c)=>c.name.startsWith(v)||c.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===v))M0(!1),q0([]),h0(n),k1(0),N0(!0);else N0(!1),h0([])},p_=(F)=>{let v=p0,n=v.indexOf(" "),c=n>=0?v.slice(n):"",I0=F.name+c;$1(I0),N0(!1),h0([]),requestAnimationFrame(()=>{let H1=j1.current;if(!H1)return;let S1=I0.length;H1.selectionStart=S1,H1.selectionEnd=S1,H1.focus()})},p4=(F)=>{if(_$(F)==null){M0(!1),q0([]);return}let v=C2(c1,F,{currentChatJid:H0});if(v.length>0&&!(v.length===1&&$$(v[0].agent_name).trim().toLowerCase()===String(F||"").trim().toLowerCase()))N0(!1),h0([]),q0(v),C0(0),M0(!0);else M0(!1),q0([])},c_=(F)=>{let v=$$(F?.agent_name);if(!v)return;$1(v),M0(!1),q0([]),requestAnimationFrame(()=>{let n=j1.current;if(!n)return;let c=v.length;n.selectionStart=c,n.selectionEnd=c,n.focus()})},P_=()=>{if(j||!k_&&!I_&&!Q_&&!o1&&!T_)return!1;return y1.current={value:"",updatedAt:0},b0(!1),N0(!1),h0([]),M0(!1),q0([]),j0(!0),!0},I1=(F)=>{if(F?.preventDefault?.(),F?.stopPropagation?.(),j||!k_&&!I_&&!Q_&&!o1&&!T_)return;if(J0){y1.current={value:"",updatedAt:0},j0(!1);return}P_()},O4=(F)=>{let v=typeof F==="string"?F.trim():"";if(j0(!1),!v||v===H0){requestAnimationFrame(()=>j1.current?.focus());return}k0?.(v)},D4=async(F)=>{let v=typeof F==="string"?F.trim():"";if(j0(!1),!v||typeof m0!=="function"){requestAnimationFrame(()=>j1.current?.focus());return}try{await m0(v)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>j1.current?.focus())}},c4=(F)=>{let n=(Array.isArray(F)?F:[]).findIndex((c)=>!c?.disabled);return n>=0?n:0},U1=f0(()=>{let F=[];for(let v of F1){let n=Boolean(v?.archived_at),c=typeof v?.agent_name==="string"?v.agent_name.trim():"",I0=typeof v?.chat_jid==="string"?v.chat_jid.trim():"";if(!c||!I0)continue;F.push({type:"session",key:`session:${I0}`,label:`@${c} — ${I0}${v?.is_active?" active":""}${n?" archived":""}`,chat:v,disabled:n?!I_:!k_})}if(o1)F.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(Q_)F.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:t_});if(T_)F.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return F},[F1,I_,k_,o1,Q_,T_,t_]),A4=async(F)=>{if(F?.preventDefault)F.preventDefault();if(F?.stopPropagation)F.stopPropagation();if(typeof r0!=="function"||o0||K1.current)return;K1.current=!0,j0(!1);try{await r0()}catch(v){console.warn("Failed to rename session:",v)}finally{K1.current=!1}requestAnimationFrame(()=>j1.current?.focus())},Z5=async()=>{if(typeof g0!=="function")return;j0(!1);try{await g0()}catch(F){console.warn("Failed to create session:",F)}requestAnimationFrame(()=>j1.current?.focus())},g1=async()=>{if(typeof a0!=="function")return;j0(!1);try{await a0(H0)}catch(F){console.warn("Failed to delete session:",F)}requestAnimationFrame(()=>j1.current?.focus())},K_=(F)=>{if(j)q_(F);else $1(F),J4(F),p4(F);requestAnimationFrame(()=>h_())},_4=(F)=>{let v=j?Z1:p0,n=v&&!v.endsWith(`
`)?`
`:"",c=`${v}${n}${F}`.trimStart();K_(c)},l4=(F)=>{let v=F?.command?.model_label;if(v)return v;let n=F?.command?.message;if(typeof n==="string"){let c=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},G4=async(F)=>{if(j||R0)return;d0(!0);try{let v=await r4("default",F,null,[],null,H0),n=l4(v);m_({model:n??E??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let c=await c5(H0);if(c)m_(c)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{d0(!1)}},E4=async()=>{await G4("/cycle-model")},X4=async(F)=>{if(!F||R0)return;if(await G4(`/model ${F}`))b0(!1)},S_=(F)=>{if(!F||F.disabled)return;if(F.type==="session"){let v=F.chat;if(v?.archived_at)D4(v.chat_jid);else O4(v.chat_jid);return}if(F.type==="action"){if(F.action==="new"){Z5();return}if(F.action==="rename"){A4();return}if(F.action==="delete")g1()}},L_=(F)=>{F.preventDefault(),F.stopPropagation(),y1.current={value:"",updatedAt:0},j0(!1),b0((v)=>!v)},M4=async()=>{if(j)return;I?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},d4=(F)=>{if(F==="queue"||F==="steer"||F==="auto")return F;return G0?"queue":void 0},x_=async(F,v,n={})=>{let{includeMedia:c=!0,includeFileRefs:I0=!0,includeMessageRefs:H1=!0,clearAfterSubmit:S1=!0,recordHistory:f1=!0}=n||{},K4=typeof F==="string"?F:F&&typeof F?.target?.value==="string"?F.target.value:p0,i4=typeof K4==="string"?K4:"";if(!i4.trim()&&(c?D1.length===0:!0)&&(I0?K.length===0:!0)&&(H1?V.length===0:!0))return;N0(!1),h0([]),M0(!1),q0([]),j0(!1),__(null);let Y5=c?[...D1]:[],q5=I0?[...K]:[],N_=H1?[...V]:[],d1=i4.trim();if(f1&&d1){let k4=c0.current,L1=b_(k4.filter(($4)=>$4!==d1));if(L1.push(d1),L1.length>200)L1.splice(0,L1.length-200);c0.current=L1,X_(L1),C1.current=-1,A_.current=""}let G5=()=>{if(c)e0([...Y5]);if(I0)A0?.(q5);if(H1)n0?.(N_);$1(d1),requestAnimationFrame(()=>h_())};if(S1)$1(""),e0([]),N?.(),O?.();(async()=>{try{if(await _0?.({content:d1,submitMode:v,fileRefs:q5,messageRefs:N_,mediaFiles:Y5})){_?.();return}let L1=[];for(let F_ of Y5){let T4=await g6(F_);L1.push(T4.id)}let $4=q5.length?`Files:
${q5.map((F_)=>`- ${F_}`).join(`
`)}`:"",X5=N_.length?`Referenced messages:
${N_.map((F_)=>`- message:${F_}`).join(`
`)}`:"",V8=L1.length?`Attachments:
${L1.map((F_,T4)=>{let N6=Y5[T4]?.name||`attachment-${T4+1}`;return`- attachment:${F_} (${N6})`}).join(`
`)}`:"",y_=[d1,$4,X5,V8].filter(Boolean).join(`

`),I4=await r4("default",y_,null,L1,d4(v),H0);if(e?.(I4),I4?.command){m_({model:I4.command.model_label??E??null,thinking_level:I4.command.thinking_level,supports_thinking:I4.command.supports_thinking});try{let F_=await c5(H0);if(F_)m_(F_)}catch{}}_?.()}catch(k4){if(S1)G5();let L1=k4?.message||"Failed to send message.";__(L1),x0?.(L1),console.error("Failed to post:",k4)}})()},z=(F)=>{Q0?.(F)},T=P((F)=>{if(j||!O0&&!J0||F?.isComposing)return!1;let v=()=>{F.preventDefault?.(),F.stopPropagation?.()},n=()=>{y1.current={value:"",updatedAt:0}};if(F.key==="Escape"){if(v(),n(),O0)b0(!1);if(J0)j0(!1);return!0}if(O0){if(F.key==="ArrowDown"){if(v(),n(),y.length>0)E0((c)=>(c+1)%y.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),y.length>0)E0((c)=>(c-1+y.length)%y.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&y.length>0)return v(),n(),X4(y[Math.max(0,Math.min(U0,y.length-1))]),!0;if(a6(F)&&y.length>0){v();let c=t6(y1.current,F.key);y1.current=c;let I0=e6(y,c.value,U0,(H1)=>H1);if(I0>=0)E0(I0);return!0}}if(J0){if(F.key==="ArrowDown"){if(v(),n(),U1.length>0)q1((c)=>(c+1)%U1.length);return!0}if(F.key==="ArrowUp"){if(v(),n(),U1.length>0)q1((c)=>(c-1+U1.length)%U1.length);return!0}if((F.key==="Enter"||F.key==="Tab")&&U1.length>0)return v(),n(),S_(U1[Math.max(0,Math.min(u0,U1.length-1))]),!0;if(a6(F)&&U1.length>0){v();let c=t6(y1.current,F.key);y1.current=c;let I0=e6(U1,c.value,u0,(H1)=>H1.label);if(I0>=0)q1(I0);return!0}}return!1},[j,O0,J0,y,U0,U1,u0,X4]),w=(F)=>{if(F.isComposing)return;if(j&&F.key==="Escape"){F.preventDefault(),q_(""),G?.();return}if(T(F))return;let v=j1.current?.value??(j?Z1:p0);if(P2(F,v,{searchMode:j,showSessionSwitcherButton:q4})){F.preventDefault(),P_();return}if(v0&&L0.length>0){let n=j1.current?.value??(j?Z1:p0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))M0(!1),q0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),C0((c)=>(c+1)%L0.length);return}if(F.key==="ArrowUp"){F.preventDefault(),C0((c)=>(c-1+L0.length)%L0.length);return}if(F.key==="Tab"||F.key==="Enter"){F.preventDefault(),c_(L0[y0]);return}if(F.key==="Escape"){F.preventDefault(),M0(!1),q0([]);return}}}if(s&&Y1.length>0){let n=j1.current?.value??(j?Z1:p0);if(!String(n||"").startsWith("/"))N0(!1),h0([]);else{if(F.key==="ArrowDown"){F.preventDefault(),k1((c)=>(c+1)%Y1.length);return}if(F.key==="ArrowUp"){F.preventDefault(),k1((c)=>(c-1+Y1.length)%Y1.length);return}if(F.key==="Tab"){F.preventDefault(),p_(Y1[x1]);return}if(F.key==="Enter"&&!F.shiftKey){if(!v.includes(" ")){F.preventDefault();let I0=Y1[x1];N0(!1),h0([]),x_(I0.name);return}}if(F.key==="Escape"){F.preventDefault(),N0(!1),h0([]);return}}}if(!j&&(F.key==="ArrowUp"||F.key==="ArrowDown")&&!F.metaKey&&!F.ctrlKey&&!F.altKey&&!F.shiftKey){let n=j1.current;if(!n)return;let c=n.value||"",I0=n.selectionStart===0&&n.selectionEnd===0,H1=n.selectionStart===c.length&&n.selectionEnd===c.length;if(F.key==="ArrowUp"&&I0||F.key==="ArrowDown"&&H1){let S1=c0.current;if(!S1.length)return;F.preventDefault();let f1=C1.current;if(F.key==="ArrowUp"){if(f1===-1)A_.current=c,f1=S1.length-1;else if(f1>0)f1-=1;C1.current=f1,K_(S1[f1]||"")}else{if(f1===-1)return;if(f1<S1.length-1)f1+=1,C1.current=f1,K_(S1[f1]||"");else C1.current=-1,K_(A_.current||""),A_.current=""}requestAnimationFrame(()=>{let K4=j1.current;if(!K4)return;let i4=K4.value.length;K4.selectionStart=i4,K4.selectionEnd=i4});return}}if(F.key==="Enter"&&!F.shiftKey&&(F.ctrlKey||F.metaKey)){if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else x_(v,"steer");return}if(F.key==="Enter"&&!F.shiftKey)if(F.preventDefault(),j){if(v.trim())Z?.(v.trim(),Q)}else x_(v)},f=(F)=>{let v=Array.from(F||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!v.length)return;e0((n)=>[...n,...v]),__(null)},r=(F)=>{f(F.target.files),F.target.value=""},Z0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current+=1,M1(!0)},V0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),E1.current=Math.max(0,E1.current-1),E1.current===0)M1(!1)},B0=(F)=>{if(j)return;if(F.preventDefault(),F.stopPropagation(),F.dataTransfer)F.dataTransfer.dropEffect="copy";M1(!0)},$0=(F)=>{if(j)return;F.preventDefault(),F.stopPropagation(),E1.current=0,M1(!1),f(F.dataTransfer?.files||[])},T0=(F)=>{if(j)return;let v=F.clipboardData?.items;if(!v||!v.length)return;let n=[];for(let c of v){if(c.kind!=="file")continue;let I0=c.getAsFile?.();if(I0)n.push(I0)}if(n.length>0)F.preventDefault(),f(n)},w1=(F)=>{e0((v)=>v.filter((n,c)=>c!==F))},Z_=()=>{__(null),e0([]),N?.(),O?.()},l1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((F)=>{let{latitude:v,longitude:n,accuracy:c}=F.coords,I0=`${v.toFixed(5)}, ${n.toFixed(5)}`,H1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",S1=`https://maps.google.com/?q=${v},${n}`,f1=`Location: ${I0}${H1} ${S1}`;_4(f1)},(F)=>{let v=F?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;y1.current={value:"",updatedAt:0},X1(!0),c5(H0).then((F)=>{let v=Array.isArray(F?.models)?F.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];v.sort((n,c)=>n.localeCompare(c,void 0,{sensitivity:"base"})),a(v),m_(F)}).catch((F)=>{console.warn("Failed to load model list:",F),a([])}).finally(()=>{X1(!1)})},[O0,E]),g(()=>{if(j)b0(!1),j0(!1),N0(!1),h0([]),M0(!1),q0([])},[j]),g(()=>{if(J0&&!q4)j0(!1)},[J0,q4]),g(()=>{if(!O0)return;let F=y.findIndex((v)=>v===E);E0(F>=0?F:0)},[O0,y,E]),g(()=>{if(!J0)return;q1(c4(U1)),y1.current={value:"",updatedAt:0}},[J0,H0]),g(()=>{if(!O0)return;let F=(v)=>{let n=v_.current,c=_5.current,I0=v.target;if(n&&n.contains(I0))return;if(c&&c.contains(I0))return;b0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[O0]),g(()=>{if(!J0)return;let F=(v)=>{let n=v4.current,c=u1.current,I0=v.target;if(n&&n.contains(I0))return;if(c&&c.contains(I0))return;j0(!1)};return document.addEventListener("pointerdown",F),()=>document.removeEventListener("pointerdown",F)},[J0]),g(()=>{if(j||!O0&&!J0)return;let F=(v)=>{T(v)};return document.addEventListener("keydown",F,!0),()=>document.removeEventListener("keydown",F,!0)},[j,O0,J0,T]),g(()=>{if(!O0)return;let F=v_.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,U0,y]),g(()=>{if(!J0)return;let F=v4.current;F?.focus?.(),F?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[J0,u0,U1.length]),g(()=>{let F=()=>{let H1=U_.current?.clientWidth||0;Z4((S1)=>S1===H1?S1:H1)};F();let v=U_.current,n=0,c=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,F()})},I0=null;if(v&&typeof ResizeObserver<"u")I0=new ResizeObserver(()=>c()),I0.observe(v);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(n)cancelAnimationFrame(n);if(I0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,E,P1?.agent_name,q4,D?.percent]);let x5=(F)=>{let v=F.target.value;if(__(null),J0)j0(!1);h_(F.target),K_(v)};return g(()=>{requestAnimationFrame(()=>h_())},[p0,Z1,j]),g(()=>{if(!g_)return;G_(Date.now());let F=setInterval(()=>G_(Date.now()),1000);return()=>clearInterval(F)},[g_,z0?.started_at,z0?.startedAt]),g(()=>{if(j)return;p4(p0)},[c1,H0,p0,j]),L`
        <div class="compose-box">
            ${_1&&!j&&L`
                <${Q$}
                    items=${p}
                    onInjectQueuedFollowup=${z}
                    onRemoveQueuedFollowup=${l}
                    onOpenFilePill=${S}
                />
            `}
            ${z0&&L`
                <div
                    class=${`compose-inline-status${g_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${S5||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${P5}</span>
                        ${V1&&L`<span class="compose-inline-status-elapsed">${V1}</span>`}
                    </div>
                    ${S5&&L`<div class="compose-inline-status-detail">${S5}</div>`}
                </div>
            `}
            ${B_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${B_}</div>
            `}
            <div
                class=${`compose-input-wrapper${h1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${B0}
                onDragLeave=${V0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${j5&&L`
                        <div class="compose-file-refs">
                            ${V.map((F)=>{return L`
                                    <${i_}
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
                                    <${i_}
                                        prefix="compose"
                                        label=${v}
                                        title=${F}
                                        onClick=${()=>S?.(F)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(F)}
                                    />
                                `})}
                            ${D1.map((F,v)=>{let n=F?.name||`attachment-${v+1}`;return L`
                                    <${i_}
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
                                onClick=${Z_}
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
                        ref=${j1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Z1:p0}
                        onInput=${x5}
                        onKeyDown=${w}
                        onPaste=${T0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${v0&&L0.length>0&&L`
                        <div class="slash-autocomplete" ref=${Y4}>
                            ${L0.map((F,v)=>L`
                                <div
                                    key=${F.chat_jid||F.agent_name}
                                    class=${`slash-item${v===y0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),c_(F)}}
                                    onMouseEnter=${()=>C0(v)}
                                >
                                    <span class="slash-name">@${F.agent_name}</span>
                                    <span class="slash-desc">${F.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${s&&Y1.length>0&&L`
                        <div class="slash-autocomplete" ref=${r1}>
                            ${Y1.map((F,v)=>L`
                                <div
                                    key=${F.name}
                                    class=${`slash-item${v===x1?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),p_(F)}}
                                    onMouseEnter=${()=>k1(v)}
                                >
                                    <span class="slash-name">${F.name}</span>
                                    <span class="slash-desc">${F.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&L`
                        <div class="compose-model-popup" ref=${v_} tabIndex="-1" onKeyDown=${T}>
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
                                        class=${`compose-model-popup-item${U0===v?" active":""}${E===F?" current-model":""}`}
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
                                    onClick=${()=>{E4()}}
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
                                ${!M_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${M_&&F1.map((F,v)=>{let n=Boolean(F.archived_at),I0=F.chat_jid!==(F.root_chat_jid||F.chat_jid)&&!F.is_active&&!n&&typeof a0==="function",H1=f8(F,{currentChatJid:H0});return L`
                                        <div key=${F.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${u0===v?" active":""}`}
                                                onClick=${()=>{if(n){D4(F.chat_jid);return}O4(F.chat_jid)}}
                                                disabled=${n?!I_:!k_}
                                                title=${n?`Restore archived ${`@${F.agent_name}`}`:`Switch to ${`@${F.agent_name}`}`}
                                            >
                                                ${H1}
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
                            ${(o1||Q_||T_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${o1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${U1.findIndex((F)=>F.key==="action:new")===u0?" active":""}`}
                                            onClick=${()=>{Z5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${Q_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${U1.findIndex((F)=>F.key==="action:rename")===u0?" active":""}`}
                                            onClick=${(F)=>{A4(F)}}
                                            title="Rename the current branch handle"
                                            disabled=${t_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${T_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${U1.findIndex((F)=>F.key==="action:delete")===u0?" active":""}`}
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
                                    ref=${_5}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${Q5}
                                    aria-label="Open model picker"
                                    onClick=${L_}
                                    disabled=${R0}
                                >
                                    ${R0?"Switching…":z1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!R0&&C_&&L`
                                        <span class="compose-model-usage-hint" title=${Q5}>
                                            ${C_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${WY} usage=${D} onCompact=${M4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${q4&&L`
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
                        onClick=${j?G:q}
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
                            onClick=${l1}
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
                    ${$5&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${a_?" active":""}`}
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
                                <span class="compose-connection-status connection-status ${D0}" title=${j_}>
                                    ${E_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x_()}}
                                    disabled=${!$_}
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
    `}var q$="piclaw_theme",g8="piclaw_tint",v2="piclaw_chat_themes",r5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},w2={default:{label:"Default",mode:"auto",light:r5,dark:u2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},zY=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},b2="light",Z$=!1;function m8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function HY(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),G=parseInt(Z[3],10);if(![Y,q,G].every((X)=>Number.isFinite(X)))return null;let K=`#${[Y,q,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:G,hex:K}}function g2(_){return O5(_)||HY(_)}function n5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function Y$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function JY(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function OY(_){return JY(_)>0.4?"#000000":"#ffffff"}function m2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function G$(_){return w2[_]||w2.default}function DY(_){return _.mode==="auto"?m2():_.mode}function h2(_,$){let j=G$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||r5}function p2(_,$,j){let Q=g2($);if(!Q)return _;let Z=O5(_.bgPrimary),Y=O5(_.bgSecondary),q=O5(_.bgHover),G=O5(_.borderColor);if(!Z||!Y||!q||!G)return _;let X=O5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:n5(Z,Q,0.08),bgSecondary:n5(Y,Q,0.12),bgHover:n5(q,Q,0.16),borderColor:n5(G,Q,0.08),accent:Q.hex,accentHover:X?n5(Q,X,0.18):Q.hex}}function AY(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=g2(Q),Y=Z?Y$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?Y$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=Z?Y$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?OY(Z):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":G,"--accent-contrast-text":K,"--danger-color":_.danger||r5.danger,"--success-color":_.success||r5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([N,V])=>{if(V)j.style.setProperty(N,V)})}function EY(){if(typeof document>"u")return;let _=document.documentElement;zY.forEach(($)=>_.style.removeProperty($))}function J5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function f2(_){let $=m8(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,Q=h2($,_);if($==="default"&&j)Q=p2(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?u2.bgPrimary:r5.bgPrimary}function MY(_,$){if(typeof document>"u")return;let j=J5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=J5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",f2("light"));let Z=J5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",f2("dark"));let Y=J5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=J5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let G=J5("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function kY(){if(typeof window>"u")return;let _={...o4,mode:b2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c2(){try{let _=H_(v2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function IY(_,$,j){let Q=c2();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};G1(v2,JSON.stringify(Q))}function TY(_){if(!_)return null;return c2()[_]||null}function l2(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function X$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=m8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=G$(j),Y=DY(Z),q=h2(j,Y);o4={theme:j,tint:Q},b2=Y;let G=document.documentElement;G.dataset.theme=Y,G.dataset.colorTheme=j,G.dataset.tint=Q?String(Q):"",G.style.colorScheme=Y;let K=q;if(j==="default"&&Q)K=p2(q,Q,Y);if(j==="default"&&!Q)EY();else AY(K,Y);if(MY(K.bgPrimary,Y),kY(),$.persist!==!1)if(G1(q$,j),Q)G1(g8,Q);else G1(g8,"")}function b8(){if(G$(o4.theme).mode!=="auto")return;X$(o4,{persist:!1})}function d2(){if(typeof window>"u")return()=>{};let _=l2(),$=TY(_),j=$?m8($.theme||"default"):m8(H_(q$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=H_(g8);return Z?Z.trim():null})();if(X$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!Z$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",b8);else if(Z.addListener)Z.addListener(b8);return Z$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",b8);else if(Z.removeListener)Z.removeListener(b8);Z$=!1}}return()=>{}}function i2(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||l2(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(IY($,j||"default",Q),X$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")G1(q$,j||"default"),G1(g8,Q||"")}function n2(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return m2()}var h8=/#(\w+)/g,CY=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),PY=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),SY=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),xY={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},yY=new Set(["http:","https:","mailto:",""]);function K$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function s4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!yY.has(Q.protocol))return null;return Q.href}catch{return null}}function r2(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let G=q.tagName.toLowerCase();if(!PY.has(G)){let X=q.parentNode;if(!X)continue;while(q.firstChild)X.insertBefore(q.firstChild,q);X.removeChild(q);continue}let K=xY[G]||new Set;for(let X of Array.from(q.attributes)){let N=X.name.toLowerCase(),V=X.value;if(N.startsWith("on")){q.removeAttribute(X.name);continue}if(N.startsWith("data-")||N.startsWith("aria-"))continue;if(K.has(N)||SY.has(N)){if(N==="href"){let B=s4(V);if(!B)q.removeAttribute(X.name);else if(q.setAttribute(X.name,B),G==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(N==="src"){let B=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,O=s4(B,{allowDataImage:G==="img"});if(!O)q.removeAttribute(X.name);else q.setAttribute(X.name,O)}continue}q.removeAttribute(X.name)}}return j.body.innerHTML}function o2(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function p8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=o2(j);if(Z===j)break;j=Z}return j}function RY(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let G of j){if(!Y&&G.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&G.trim().match(/^```\s*$/)){let K=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,q=[];continue}if(Y)q.push(G);else Z.push(G)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function wY(_){if(!_)return _;return p8(_,5)}function fY(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function vY(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function uY(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=wY(Y);return`<div class="mermaid-container" data-mermaid="${fY(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function s2(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var bY={span:new Set(["title","class","lang","dir"])};function gY(_,$){let j=bY[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let G=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${K$(G)}"`)}return Q.join("")}function a2(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,G=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[K=""]=G.split(/\s+/,1),X=K.toLowerCase();if(!X||!CY.has(X))return $;if(X==="br")return Z?"":"<br>";if(Z)return`</${X}>`;let N=G.slice(K.length).trim(),V=gY(X,N);return`<${X}${V}>`})}function t2(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function e2(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function mY(_){if(!window.katex)return _;let $=(q)=>o2(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let G=[],K=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_BLOCK_${N}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let N=G.length;return G.push(X),`@@CODE_INLINE_${N}@@`}),{html:K,blocks:G}},Q=(q,G)=>{if(!G.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,X)=>{let N=Number(X);return G[N]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,G,K)=>{try{let X=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${K$(X.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,G,K)=>{if(/\s$/.test(K))return q;try{let X=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${K$(X.message)}">$${K}$</span>`}}),Q(Y,Z.blocks)}function hY(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(h8.lastIndex=0,!h8.test(q))continue;h8.lastIndex=0;let G=Y.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let K=q.split(h8);if(K.length<=1)continue;let X=$.createDocumentFragment();K.forEach((N,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",N),B.textContent=`#${N}`,X.appendChild(B)}else X.appendChild($.createTextNode(N))}),Y.parentNode?.replaceChild(X,Y)}return $.body.innerHTML}function pY(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function cY(_){let $=pY(_||""),{text:j,blocks:Q}=RY($),Z=p8(j,2),q=s2(Z).replace(/</g,"&lt;");return{safeHtml:a2(q),mermaidBlocks:Q}}function J_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=cY(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=t2(Y),Y=e2(Y),Y=mY(Y),Y=hY(Y),Y=uY(Y,Z),Y=r2(Y,j),Y}function o5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=p8($,2),Z=s2(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=a2(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=t2(q),q=e2(q),q=r2(q),q}function lY(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((K)=>{let[X,N]=K.split(",").map(Number);return{x:X,y:N}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let G=[`M ${q[0].x},${q[0].y}`];for(let K=1;K<q.length-1;K++){let X=q[K-1],N=q[K],V=q[K+1],B=N.x-X.x,O=N.y-X.y,E=V.x-N.x,M=V.y-N.y,A=Math.sqrt(B*B+O*O),J=Math.sqrt(E*E+M*M),D=Math.min($,A/2,J/2);if(D<0.5){G.push(`L ${N.x},${N.y}`);continue}let I=N.x-B/A*D,d=N.y-O/A*D,h=N.x+E/J*D,o=N.y+M/J*D,R=B*M-O*E>0?1:0;G.push(`L ${I},${d}`),G.push(`A ${D},${D} 0 0 ${R} ${h},${o}`)}return G.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${G.join(" ")}"${Y}/>`})}async function B4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=n2()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let G=q.dataset.mermaid,K=vY(G||""),X=p8(K,2),N=await $(X,{...Z,transparent:!0});N=lY(N),q.innerHTML=N,q.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${G.message}`,q.innerHTML="",q.appendChild(K),q.removeAttribute("data-mermaid")}}function _7(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function $7(_){return String(_||"").trim()||"web:default"}function j7(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Q7(_){if(!_)return!1;return _.status!=="running"}function Z7(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Y7({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=C(null),Y=C(null),q=_?.thinking?o5(_.thinking):"",G=_?.answer?J_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Z.current&&q)B4(Z.current).catch(()=>{})},[q]),g(()=>{if(Y.current&&G)B4(Y.current).catch(()=>{})},[G]),!_)return null;let K=_.status==="running",X=Boolean(String(_.answer||"").trim()),N=Boolean(String(_.thinking||"").trim()),V=j7(_),B=Q7(_),O=!K&&X,E=K?"Thinking…":_.status==="error"?"Error":"Done";return L`
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
                        dangerouslySetInnerHTML=${{__html:G}}
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
    `}function dY(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function iY(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function x4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function S0(_){return typeof _==="string"&&_.trim()?_.trim():null}function G7(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var X7="__PICLAW_WIDGET_HOST__:";function q7(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function N$(_,$){if(!_||_.type!=="generated_widget")return null;let j=dY(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:G7(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function K7(_){if(!_||typeof _!=="object")return null;let $=iY(_),j=S0(_?.widget_id)||S0(_?.widgetId)||S0(_?.tool_call_id)||S0(_?.toolCallId),Q=S0(_?.tool_call_id)||S0(_?.toolCallId),Z=S0(_?.turn_id)||S0(_?.turnId),Y=S0(_?.title)||S0(_?.name)||"Generated widget",q=S0(_?.subtitle)||"",G=S0(_?.description)||q,K=S0(_?.status),X=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:Y,subtitle:q,description:G,originPostId:x4(_?.origin_post_id)??x4(_?.originPostId),originChatJid:S0(_?.origin_chat_jid)||S0(_?.originChatJid)||S0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:G7(_?.capabilities,!0),source:"live",status:X,turnId:Z,toolCallId:Q,width:x4(_?.width),height:x4(_?.height),error:S0(_?.error)}}function N7(_){return N$(_,null)!==null}function O_(_){let $=S0(_?.toolCallId)||S0(_?.tool_call_id);if($)return $;let j=S0(_?.widgetId)||S0(_?.widget_id);if(j)return j;let Q=x4(_?.originPostId)??x4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function V7(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function B7(_){return V7(_)?"allow-downloads allow-scripts":"allow-downloads"}function c8(_){return{title:S0(_?.title)||"Generated widget",widgetId:S0(_?.widgetId)||S0(_?.widget_id),toolCallId:S0(_?.toolCallId)||S0(_?.tool_call_id),turnId:S0(_?.turnId)||S0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:S0(_?.status)||"final"}}function l8(_){return{...c8(_),subtitle:S0(_?.subtitle)||"",description:S0(_?.description)||"",error:S0(_?.error)||null,width:x4(_?.width),height:x4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function d8(_){return`${X7}${JSON.stringify(l8(_))}`}function W7(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=S0(_.text)||S0(_.content)||S0(_.message)||S0(_.prompt)||S0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=S0(j.text)||S0(j.content)||S0(j.message)||S0(j.prompt)||S0(j.value);if(Q)return Q}return null}function U7(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function L7(_){let $=S0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return S0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function nY(_){let $=c8(_);return`<script>
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

  const windowNamePrefix = ${q7(X7)};
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
</script>`}function F7(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let G=V7(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",G?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),X=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,N=G?nY(_):"";return`<!doctype html>
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
<body>${X}</body>
</html>`}function z7({widget:_,onClose:$,onWidgetEvent:j}){let Q=C(null),Z=C(!1),Y=f0(()=>F7(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let J=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$]),g(()=>{Z.current=!1},[Y]),g(()=>{if(!_)return;let J=Q.current;if(!J)return;let D=(t)=>{let R=d8(_),x=t==="widget.init"?c8(_):l8(_);try{J.name=R}catch{}try{J.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:t,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x},"*")}catch{}},I=()=>{D("widget.init"),D("widget.update")},d=()=>{Z.current=!0,I()};J.addEventListener("load",d);let o=[0,40,120,300,800].map((t)=>setTimeout(I,t));return()=>{J.removeEventListener("load",d),o.forEach((t)=>clearTimeout(t))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let J=Q.current;if(!J?.contentWindow)return;let D=d8(_),I=l8(_);try{J.name=D}catch{}try{J.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let J=(D)=>{let I=D?.data;if(!I||I.__piclawGeneratedWidget!==!0)return;let d=Q.current,h=O_(_),o=O_({widgetId:I.widgetId,toolCallId:I.toolCallId});if(o&&h&&o!==h)return;if(!o&&d?.contentWindow&&D.source!==d.contentWindow)return;j?.(I,_)};return window.addEventListener("message",J),()=>window.removeEventListener("message",J)},[_,j]),!_)return null;let G=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",X=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",N=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=N==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",O=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",E=!Y,M=L7(_),A=B7(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(J)=>J.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${G.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(X||O)&&L`
                            <div class="floating-widget-subtitle">${X||O}</div>
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
                    ${E?L`<div class="floating-widget-empty">${M}</div>`:L`
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
    `}var H7="PiClaw";function V$(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,G=Y[q],K=Q.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",N=X?X:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:G,image:N||(V?"/static/icon-192.png":null)}}function J7(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function O7(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function D7(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",G=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(G||q&&q!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var rY=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function B$({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:G=new Set,onExtensionPanelAction:K,turnId:X,steerQueued:N,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:O=!0}){let A=(s)=>{if(!s)return{text:"",totalLines:0,fullText:""};if(typeof s==="string"){let y0=s,C0=y0?y0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y0,totalLines:C0,fullText:y0}}let N0=s.text||"",L0=s.fullText||s.full_text||N0,q0=Number.isFinite(s.totalLines)?s.totalLines:L0?L0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N0,totalLines:q0,fullText:L0}},J=160,D=(s)=>String(s||"").replace(/<\/?internal>/gi,""),I=(s)=>{if(!s)return 1;return Math.max(1,Math.ceil(s.length/160))},d=(s,N0,L0)=>{let q0=(s||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!q0)return{text:"",omitted:0,totalLines:Number.isFinite(L0)?L0:0,visibleLines:0};let y0=q0.split(`
`),C0=y0.length>N0?y0.slice(0,N0).join(`
`):q0,v0=Number.isFinite(L0)?L0:y0.reduce((d0,O0)=>d0+I(O0),0),M0=C0?C0.split(`
`).reduce((d0,O0)=>d0+I(O0),0):0,R0=Math.max(v0-M0,0);return{text:C0,omitted:R0,totalLines:v0,visibleLines:M0}},h=A(j),o=A(Q),t=A($),R=Boolean(h.text)||h.totalLines>0,x=Boolean(o.text)||o.totalLines>0,H=Boolean(t.fullText?.trim()||t.text?.trim()),S=Boolean(_||H||R||x||Z||Y),p=Array.isArray(q)&&q.length>0;if((!B||!S)&&(!O||!p))return null;let[Q0,l]=m(new Set),[_0,e]=m(null),[Y0,G0]=m(()=>Date.now()),X0=(s)=>l((N0)=>{let L0=new Set(N0),q0=!L0.has(s);if(q0)L0.add(s);else L0.delete(s);if(typeof V==="function")V(s,q0);return L0});g(()=>{l(new Set),e(null)},[X]);let H0=V4(_);g(()=>{if(!H0)return;G0(Date.now());let s=setInterval(()=>G0(Date.now()),1000);return()=>clearInterval(s)},[H0,_?.started_at,_?.startedAt]);let D0=_?.turn_id||X,A0=D7(D0),n0=N?"turn-dot turn-dot-queued":"turn-dot",x0=(s)=>s,k0=Boolean(_?.last_activity||_?.lastActivity),r0=(s)=>s==="warning"?"#f59e0b":s==="error"?"var(--danger-color)":s==="success"?"var(--success-color)":A0,o0=Y?.kind||"info",g0=r0(o0),a0=r0(_?.kind||(H0?"warning":"info")),m0="",_1=_?.title,z0=_?.status;if(_?.type==="plan")m0=_1?`Planning: ${_1}`:"Planning...";else if(_?.type==="tool_call")m0=_1?`Running: ${_1}`:"Running tool...";else if(_?.type==="tool_status")m0=_1?`${_1}: ${z0||"Working..."}`:z0||"Working...";else if(_?.type==="error")m0=_1||"Agent error";else m0=_1||z0||"Working...";if(k0)m0="Last activity just now";let p0=({panelTitle:s,text:N0,fullText:L0,totalLines:q0,maxLines:y0,titleClass:C0,panelKey:v0})=>{let M0=Q0.has(v0),R0=L0||N0||"",d0=v0==="thought"||v0==="draft"?D(R0):R0,O0=typeof y0==="number",b0=M0&&O0,J0=O0?d(d0,y0,q0):{text:d0||"",omitted:0,totalLines:Number.isFinite(q0)?q0:0};if(!d0&&!(Number.isFinite(J0.totalLines)&&J0.totalLines>0))return null;let j0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,y=O0?`--agent-thinking-collapsed-lines: ${y0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
            >
                <div class="agent-thinking-title ${C0||""}">
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${s}
                    ${b0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${s} panel`}
                            onClick=${()=>X0(v0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:o5(d0)}}
                />
                ${!M0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(v0)}>
                        ▸ ${J0.omitted} more lines
                    </button>
                `}
                ${M0&&J0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>X0(v0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},$1=Z?.tool_call?.title,Z1=$1?`Awaiting approval: ${$1}`:"Awaiting approval",q_=H0?u8(_,Y0):null,D1=(s,N0,L0=null)=>{let q0=v8(s);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${N0?`--turn-color: ${N0};`:""}
                title=${s?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${N0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${q0}</span>
                    ${L0&&L`<span class="agent-status-elapsed">${L0}</span>`}
                </div>
                ${s.detail&&L`<div class="agent-thinking-body">${s.detail}</div>`}
            </div>
        `},e0=(s,N0,L0,q0,y0,C0,v0,M0=8,R0=8)=>{let d0=Math.max(y0-q0,0.000000001),O0=Math.max(N0-M0*2,1),b0=Math.max(L0-R0*2,1),J0=Math.max(v0-C0,1),j0=v0===C0?N0/2:M0+(s.run-C0)/J0*O0,y=R0+(b0-(s.value-q0)/d0*b0);return{x:j0,y}},h1=(s,N0,L0,q0,y0,C0,v0,M0=8,R0=8)=>{if(!Array.isArray(s)||s.length===0)return"";return s.map((d0,O0)=>{let{x:b0,y:J0}=e0(d0,N0,L0,q0,y0,C0,v0,M0,R0);return`${O0===0?"M":"L"} ${b0.toFixed(2)} ${J0.toFixed(2)}`}).join(" ")},M1=(s,N0="")=>{if(!Number.isFinite(s))return"—";return`${Math.abs(s)>=100?s.toFixed(0):s.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${N0}`},Y1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],h0=(s,N0)=>{let L0=Y1;if(!Array.isArray(L0)||L0.length===0)return"var(--accent-color)";if(L0.length===1||!Number.isFinite(N0)||N0<=1)return L0[0];let y0=Math.max(0,Math.min(Number.isFinite(s)?s:0,N0-1))/Math.max(1,N0-1)*(L0.length-1),C0=Math.floor(y0),v0=Math.min(L0.length-1,C0+1),M0=y0-C0,R0=L0[C0],d0=L0[v0];if(!d0||C0===v0||M0<=0.001)return R0;if(M0>=0.999)return d0;let O0=Math.round((1-M0)*1000)/10,b0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${R0} ${O0}%, ${d0} ${b0}%)`},x1=(s,N0="autoresearch")=>{let L0=Array.isArray(s)?s.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],q0=L0.map((j0,y)=>({...j0,color:h0(y,L0.length)}));if(q0.length===0)return null;let y0=320,C0=120,v0=q0.flatMap((j0)=>j0.points),M0=v0.map((j0)=>j0.value),R0=v0.map((j0)=>j0.run),d0=Math.min(...M0),O0=Math.max(...M0),b0=Math.min(...R0),J0=Math.max(...R0);return L`
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
                                        d=${h1(j0.points,y0,C0,d0,O0,b0,J0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>e({panelKey:N0,seriesKey:y})}
                                        onMouseLeave=${()=>e((U0)=>U0?.panelKey===N0&&U0?.seriesKey===y?null:U0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${q0.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",a=j0?.key||j0?.label||"series";return j0.points.map((U0,E0)=>{let u0=e0(U0,y0,C0,d0,O0,b0,J0);return L`
                                    <button
                                        key=${`${a}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${u0.x/y0*100}%; top:${u0.y/C0*100}%;`}
                                        onMouseEnter=${()=>e({panelKey:N0,seriesKey:a,run:U0.run,value:U0.value,unit:y})}
                                        onMouseLeave=${()=>e((q1)=>q1?.panelKey===N0?null:q1)}
                                        onFocus=${()=>e({panelKey:N0,seriesKey:a,run:U0.run,value:U0.value,unit:y})}
                                        onBlur=${()=>e((q1)=>q1?.panelKey===N0?null:q1)}
                                        aria-label=${`${j0?.label||"Series"} ${M1(U0.value,y)} at run ${U0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${q0.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,a=typeof j0?.unit==="string"?j0.unit:"",U0=j0?.key||j0?.label||"series",E0=_0?.panelKey===N0&&_0?.seriesKey===U0?_0:null,u0=E0&&Number.isFinite(E0.value)?E0.value:y,q1=E0&&typeof E0.unit==="string"?E0.unit:a,A1=E0&&Number.isFinite(E0.run)?E0.run:null;return L`
                            <div key=${`${U0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${A1!==null&&L`<span class="agent-series-legend-run">run ${A1}</span>`}
                                <span class="agent-series-legend-value">${M1(u0,q1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},k1=(s)=>{if(!s)return null;let N0=typeof s?.key==="string"?s.key:`panel-${Math.random()}`,L0=Q0.has(N0),q0=s?.title||"Extension status",y0=s?.collapsed_text||"",C0=String(s?.state||"").replace(/[-_]+/g," ").replace(/^./,(a)=>a.toUpperCase()),v0=r0(s?.state==="completed"?"success":s?.state==="failed"?"error":s?.state==="stopped"?"warning":"info"),M0=typeof s?.detail_markdown==="string"?s.detail_markdown.trim():"",R0=typeof s?.last_run_text==="string"?s.last_run_text.trim():"",d0=typeof s?.tmux_command==="string"?s.tmux_command.trim():"",O0=Array.isArray(s?.series)?s.series:[],b0=Array.isArray(s?.actions)?s.actions:[],J0=Boolean(M0||d0),j0=Boolean(M0||O0.length>0||d0),y=[q0,y0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${L0?"true":"false"}
                style=${v0?`--turn-color: ${v0};`:""}
                title=${!L0?y||q0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?X0(N0):null}
                    >
                        ${v0&&L`<span class=${n0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${q0}</span>
                        ${y0&&L`<span class="agent-thinking-title-meta">${y0}</span>`}
                    </button>
                    ${(b0.length>0||j0&&!L0)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${b0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${b0.map((a)=>{let U0=`${N0}:${a?.key||""}`,E0=G?.has?.(U0);return L`
                                            <button
                                                key=${U0}
                                                class=${`agent-thinking-action-btn${a?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(s,a)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":a?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!L0&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${q0}`}
                                    title="Expand details"
                                    onClick=${()=>X0(N0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&L0&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${q0}`}
                        title="Collapse details"
                        onClick=${()=>X0(N0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${L0&&L`
                    <div class=${`agent-thinking-autoresearch-layout${J0?"":" chart-only"}`}>
                        ${J0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${M0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:o5(M0)}}
                                    />
                                `}
                                ${d0&&L`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${d0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.(s,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${rY}
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
            ${B&&Y&&D1(Y,g0)}
            ${O&&Array.isArray(q)&&q.map((s)=>k1(s))}
            ${B&&_?.type==="intent"&&D1(_,a0,q_)}
            ${B&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    <span class=${n0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${Z1}</span>
                </div>
            `}
            ${B&&R&&p0({panelTitle:x0("Planning"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,panelKey:"plan"})}
            ${B&&x&&p0({panelTitle:x0("Thoughts"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&H&&p0({panelTitle:x0("Draft"),text:t.text,fullText:t.fullText,totalLines:t.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${k0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${A0?`--turn-color: ${A0};`:""}>
                    ${A0&&L`<span class=${n0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!k0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${m0}</span>
                </div>
            `}
        </div>
    `}function A7({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",G=Q?.kind||"other",K=Q?.rawInput||{},X=K.command||K.commands&&K.commands[0]||null,N=K.diff||null,V=K.fileName||K.path||null,B=Q?.description||K.description||K.explanation||null,E=(Array.isArray(Q?.locations)?Q.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),M=Array.from(new Set([V,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let A=async(I)=>{try{await I8(j,I,Y||null),$()}catch(d){console.error("Failed to respond to agent request:",d)}},J=async()=>{try{await h6(q,`Auto-approved: ${q}`),await I8(j,"approved",Y||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},D=Z&&Z.length>0;return L`
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
                ${(B||X||N||M.length>0)&&L`
                    <div class="agent-request-body">
                        ${B&&L`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${M.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${M.map((I,d)=>L`<li key=${d}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&L`
                            <pre class="agent-request-command">${X}</pre>
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
    `}function E7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${X}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${G}`}function s5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function f_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var oY=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),sY=new Set(["text/markdown"]),aY=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),tY=new Set(["application/vnd.jgraph.mxfile"]);function a5(_){return typeof _==="string"?_.trim().toLowerCase():""}function eY(_){let $=a5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function _q(_){let $=a5(_);return!!$&&$.endsWith(".pdf")}function $q(_){let $=a5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function t5(_,$){let j=a5(_);if(eY($)||tY.has(j))return"drawio";if(_q($)||j==="application/pdf")return"pdf";if($q($)||aY.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(oY.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function M7(_){let $=a5(_);return sY.has($)}function k7(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function jq(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function Qq(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function I7(_){return jq(_)||Qq(_)}function i8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function Zq(_,$){let j=Math.max(i8(_),i8($)),Q=Math.min(i8(_),i8($));return(j+0.05)/(Q+0.05)}function Yq(_,$,j="#ffffff"){let Q=I7(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let G=I7(q);if(!G)continue;let K=Zq(Q,G);if(K>Y)Z=q,Y=K}return Z}function W$(){let _=getComputedStyle(document.documentElement),$=(E,M)=>{for(let A of E){let J=_.getPropertyValue(A).trim();if(J)return J}return M},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),N=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),O=Yq(G,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:G,good:K,warning:X,attention:N,border:V,fontFamily:B,buttonTextColor:O}}function T7(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:G,border:K,fontFamily:X}=W$();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var qq=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),C7=!1,n8=null,P7=!1;function U$(_){_.querySelector(".adaptive-card-notice")?.remove()}function Gq(_,$,j="error"){U$(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function Xq(_,$=(j)=>J_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Kq(_=($)=>J_($,null)){return($,j)=>{try{let Q=Xq($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function Nq(_){if(P7||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Kq(),P7=!0}async function Vq(){if(C7)return;if(n8)return n8;return n8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{C7=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),n8}function Bq(){return globalThis.AdaptiveCards}function Wq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function Uq(_){return qq.has(_)}function F$(_){if(!Array.isArray(_))return[];return _.filter(Wq)}function Lq(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function L$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>L$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${L$(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Fq(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return L$($);return typeof $==="string"?$:String($)}function zq(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((G)=>Q(G));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=Fq(q.type,j[q.id],q);for(let[G,K]of Object.entries(q))if(Array.isArray(K)||K&&typeof K==="object")q[G]=Q(K);return q};return Q(_)}function Hq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function Jq(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Oq(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=Jq(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function S7(_,$,j){if(!Uq($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Vq()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=Bq();Nq(Q);let Z=new Q.AdaptiveCard,Y=W$();Z.hostConfig=new Q.HostConfig(T7());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:zq($.payload,q);Z.parse(G),Z.onExecuteAction=(N)=>{let V=Lq(N);if(j?.onAction)U$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let O=B instanceof Error?B.message:String(B||"Action failed.");Gq(_,O||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let X=Oq($);if(X){_.classList.add("adaptive-card-finished");let N=document.createElement("div");N.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,N.appendChild(V),X.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=X.detail,N.appendChild(B)}_.appendChild(N)}if(U$(_),_.appendChild(K),X)Hq(K);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function e5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>e5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${e5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function x7(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:e5(j)})).filter(($)=>$.value)}function Dq(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z$(_){if(!Array.isArray(_))return[];return _.filter(Dq)}function y7(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=e5(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=x7(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function R7(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=x7(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):e5(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function D5({children:_,className:$=""}){let j=C(null);return g(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{S4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),h5(()=>{let Q=j.current;if(!Q)return;return S4(_,Q),()=>{S4(null,Q)}},[_]),null}function Aq(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?f_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Q)=>Q.value)}function Eq(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=w_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function w7({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=f0(()=>t5($?.content_type,Q),[$?.content_type,Q]),Y=k7(Z),q=f0(()=>M7($?.content_type),[$?.content_type]),[G,K]=m(Z==="text"),[X,N]=m(""),[V,B]=m(null),O=C(null),E=f0(()=>Aq($),[$]),M=f0(()=>Eq(_,Q,Z),[_,Q,Z]),A=f0(()=>{if(!q||!X)return"";return J_(X)},[q,X]);return g(()=>{let J=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!O.current||!A)return;B4(O.current);return},[A]),g(()=>{let J=!1;async function D(){if(Z!=="text"){K(!1),B(null);return}K(!0),B(null);try{let I=await d6(_);if(!J)N(I)}catch{if(!J)B("Failed to load text preview.")}finally{if(!J)K(!1)}}return D(),()=>{J=!0}},[_,Z]),L`
        <${D5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${M&&L`
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
                                href=${w_(_)}
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
                        ${G&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!G&&V&&L`<div class="attachment-preview-state">${V}</div>`}
                        ${!G&&!V&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${w_(_)} alt=${Q} />
                        `}
                        ${!G&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&M&&L`
                            <iframe class="attachment-preview-frame" src=${M} title=${Q}></iframe>
                        `}
                        ${!G&&!V&&Z==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!G&&!V&&Z==="text"&&q&&L`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:A}}
                            />
                        `}
                        ${!G&&!V&&Z==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${X}</pre>
                        `}
                        ${!G&&!V&&Z==="unsupported"&&L`
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
    `}function Mq({mediaId:_,onPreview:$}){let[j,Q]=m(null);if(g(()=>{F5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?f_(Y):"",K=t5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${w_(_)} download=${Z} class="file-attachment-main">
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${K}
            </button>
        </div>
    `}function kq({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=m(null);g(()=>{if(!Number.isFinite(j))return;F5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?w_(j):null,K=t5(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${i_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${i_}
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
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function r8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?a4(Q):null;return L`
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
    `}function Iq({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?f_(_.size):"",Z=_.mime_type||"",Y=Pq(Z),q=s4(_.uri);return L`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
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
    `}function Tq({block:_}){let[$,j]=m(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&L`
                ${Z&&L`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),X=URL.createObjectURL(K),N=document.createElement("a");N.href=X,N.download=Q.split("/").pop()||"resource",N.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function Cq({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=N$(_,$),Z=N7(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",G=Q?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",X=(N)=>{if(N.preventDefault(),N.stopPropagation(),!Q)return;j?.(Q)};return L`
        <div class="generated-widget-launch" onClick=${(N)=>N.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${G&&L`<div class="generated-widget-launch-description">${G}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${X}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function Pq(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Sq({preview:_}){let $=s4(_.url),j=s4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
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
    `}function xq(_,$){return typeof _==="string"?_:""}var yq=1800,Rq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,wq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,fq=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function vq(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function uq(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let G=q||"idle";if(Y.dataset.copyState=G,G==="success")Y.innerHTML=wq,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(G==="error")Y.innerHTML=fq,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Rq,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",Z(G,"idle"),q.appendChild(G);let K=async(X)=>{X.preventDefault(),X.stopPropagation();let V=Y.querySelector("code")?.textContent||"",B=await vq(V);Z(G,B?"success":"error");let O=j.get(G);if(O)clearTimeout(O);let E=setTimeout(()=>{Z(G,"idle"),j.delete(G)},yq);j.set(G,E)};G.addEventListener("click",K),Q.push(()=>{G.removeEventListener("click",K);let X=j.get(G);if(X)clearTimeout(X);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function bq(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Q=X;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X))Z.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function gq(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Q=X;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!X.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function mq(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let X=0;X<j.length;X+=1){let N=j[X].trim();if((N==="Images:"||N==="Attachments:")&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Q=X;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let X=j[Y];if(/^\s*-\s+/.test(X)){let N=X.replace(/^\s*-\s+/,"").trim(),V=N.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||N.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],O=(V[2]||"").trim()||B;Z.push({id:B,label:O,raw:N})}else Z.push({id:null,label:N,raw:N})}else if(!X.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),G=j.slice(Y),K=[...q,...G].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function hq(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pq(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(hq).sort((N,V)=>V.length-N.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),G=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),K=[],X;while(X=G.nextNode())K.push(X);for(let N of K){let V=N.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=N.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let O=V.split(Z).filter((M)=>M!=="");if(O.length===0)continue;let E=q.createDocumentFragment();for(let M of O)if(Y.test(M)){let A=q.createElement("mark");A.className="search-highlight-term",A.textContent=M,E.appendChild(A)}else E.appendChild(q.createTextNode(M));N.parentNode.replaceChild(E,N)}return q.body.innerHTML}function v7({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:G,userAvatarUrl:K,userAvatarBackground:X,onDelete:N,isThreadReply:V,isThreadPrev:B,isThreadNext:O,isRemoving:E,highlightQuery:M,onFileRef:A,onOpenWidget:J}){let[D,I]=m(null),d=C(null),h=_.data,o=h.type==="agent_response",t=G||"You",R=o?Y||H7:t,x=o?V$(Y,q,!0):V$(t,K),H=typeof X==="string"?X.trim().toLowerCase():"",S=!o&&x.image&&(H==="clear"||H==="transparent"),p=o&&Boolean(x.image),Q0=`background-color: ${S||p?"transparent":x.color}`,l=h.content_meta,_0=Boolean(l?.truncated),e=Boolean(l?.preview),Y0=_0&&!e,G0=_0?{originalLength:Number.isFinite(l?.original_length)?l.original_length:h.content?h.content.length:0,maxLength:Number.isFinite(l?.max_length)?l.max_length:0}:null,X0=h.content_blocks||[],H0=h.media_ids||[],D0=xq(h.content,h.link_previews),{content:A0,fileRefs:n0}=bq(D0),{content:x0,messageRefs:k0}=gq(A0),{content:r0,attachments:o0}=mq(x0);D0=r0;let g0=F$(X0),a0=z$(X0),m0=g0.length===1&&typeof g0[0]?.fallback_text==="string"?g0[0].fallback_text.trim():"",_1=a0.length===1?y7(a0[0]).trim():"",z0=Boolean(m0)&&D0?.trim()===m0||Boolean(_1)&&D0?.trim()===_1,p0=Boolean(D0)&&!Y0&&!z0,$1=typeof M==="string"?M.trim():"",Z1=f0(()=>{if(!D0||z0)return"";let y=J_(D0,j);return $1?pq(y,$1):y},[D0,z0,$1]),q_=(y,a)=>{y.stopPropagation(),I(w_(a))},[D1,e0]=m(null),h1=(y)=>{e0(y)},M1=(y)=>{y.stopPropagation(),N?.(_)},Y1=(y,a)=>{let U0=new Set;if(!y||a.length===0)return{content:y,usedIds:U0};return{content:y.replace(/attachment:([^\s)"']+)/g,(u0,q1,A1,X1)=>{let p1=q1.replace(/^\/+/,""),B_=a.find((W_)=>W_.name&&W_.name.toLowerCase()===p1.toLowerCase()&&!U0.has(W_.id))||a.find((W_)=>!U0.has(W_.id));if(!B_)return u0;if(U0.add(B_.id),X1.slice(Math.max(0,A1-2),A1)==="](")return`/media/${B_.id}`;return B_.name||"attachment"}),usedIds:U0}},h0=[],x1=[],k1=[],s=[],N0=[],L0=[],q0=[],y0=0;if(X0.length>0)X0.forEach((y)=>{if(y?.type==="text"&&y.annotations)q0.push(y.annotations);if(y?.type==="generated_widget")L0.push(y);else if(y?.type==="resource_link")s.push(y);else if(y?.type==="resource")N0.push(y);else if(y?.type==="file"){let a=H0[y0++];if(a)x1.push(a),k1.push({id:a,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let a=H0[y0++];if(a){let U0=typeof y?.mime_type==="string"?y.mime_type:void 0;h0.push({id:a,annotations:y?.annotations,mimeType:U0}),k1.push({id:a,name:y?.name||y?.filename||y?.title})}}});else if(H0.length>0){let y=o0.length>0;H0.forEach((a,U0)=>{let E0=o0[U0]||null;if(k1.push({id:a,name:E0?.label||null}),y)x1.push(a);else h0.push({id:a,annotations:null})})}if(o0.length>0)o0.forEach((y)=>{if(!y?.id)return;let a=k1.find((U0)=>String(U0.id)===String(y.id));if(a&&!a.name)a.name=y.label});let{content:C0,usedIds:v0}=Y1(D0,k1);D0=C0;let M0=h0.filter(({id:y})=>!v0.has(y)),R0=x1.filter((y)=>!v0.has(y)),d0=o0.length>0?o0.map((y,a)=>({id:y.id||`attachment-${a+1}`,label:y.label||`attachment-${a+1}`})):k1.map((y,a)=>({id:y.id,label:y.name||`attachment-${a+1}`})),O0=f0(()=>F$(X0),[X0]),b0=f0(()=>z$(X0),[X0]),J0=f0(()=>{return O0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[O0]);g(()=>{if(!d.current)return;return B4(d.current),uq(d.current)},[Z1]);let j0=C(null);return g(()=>{if(!j0.current||O0.length===0)return;let y=j0.current;y.innerHTML="";for(let a of O0){let U0=document.createElement("div");y.appendChild(U0),S7(U0,a,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let u0=s4(E0.url||"");if(!u0)throw Error("Invalid URL");window.open(u0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await m6({post_id:_.id,thread_id:h.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),U0.textContent=a.fallback_text||"Card failed to render."})}},[J0,_.id]),L`
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
                ${Y0&&G0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${s5(G0.originalLength)} chars
                            ${G0.maxLength?L` • Display limit: ${s5(G0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${e&&G0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${s5(G0.maxLength)} of ${s5(G0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(n0.length>0||k0.length>0||d0.length>0)&&L`
                    <div class="post-file-refs">
                        ${k0.map((y)=>{let a=(U0)=>{if(U0.preventDefault(),U0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let E0=document.getElementById("post-"+y);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${a}>
                                    <${i_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${n0.map((y)=>{let a=y.split("/").pop()||y;return L`
                                <${i_}
                                    prefix="post"
                                    label=${a}
                                    title=${y}
                                    onClick=${()=>A?.(y)}
                                />
                            `})}
                        ${d0.map((y)=>L`
                            <${kq}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${h1}
                            />
                        `)}
                    </div>
                `}
                ${p0&&L`
                    <div 
                        ref=${d}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:Z1}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let a=y.target.dataset.hashtag;if(a)j?.(a)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),I(y.target.src)}}
                    />
                `}
                ${O0.length>0&&L`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${b0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${b0.map((y,a)=>{let U0=R7(y),E0=`${y.card_id}-${a}`;return L`
                                <div key=${E0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${U0.title}</span>
                                        </div>
                                    </div>
                                    ${U0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${U0.fields.map((u0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${u0.key}: ${u0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${u0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${u0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${a4(U0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${L0.length>0&&L`
                    <div class="generated-widget-launches">
                        ${L0.map((y,a)=>L`
                            <${Cq}
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
                        ${M0.map(({id:y,mimeType:a})=>{let E0=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?w_(y):l6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(u0)=>q_(u0,y)}
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
                            <${Mq} key=${y} mediaId=${y} onPreview=${h1} />
                        `)}
                    </div>
                `}
                ${s.length>0&&L`
                    <div class="resource-links">
                        ${s.map((y,a)=>L`
                            <div key=${a}>
                                <${Iq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&L`
                    <div class="resource-embeds">
                        ${N0.map((y,a)=>L`
                            <div key=${a}>
                                <${Tq} block=${y} />
                                <${r8} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${h.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${h.link_previews.map((y,a)=>L`
                            <${Sq} key=${a} preview=${y} />
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
    `}function u7({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:G,onOpenWidget:K,emptyMessage:X,timelineRef:N,agents:V,user:B,onDeletePost:O,reverse:E=!0,removingPostIds:M,searchQuery:A}){let[J,D]=m(!1),I=C(null),d=typeof IntersectionObserver<"u",h=P(async()=>{if(!j||!$||J)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,J,j]),o=P((l)=>{let{scrollTop:_0,scrollHeight:e,clientHeight:Y0}=l.target,G0=E?e-Y0-_0:_0,X0=Math.max(300,Y0);if(G0<X0)h()},[E,h]);g(()=>{if(!d)return;let l=I.current,_0=N?.current;if(!l||!_0)return;let e=300,Y0=new IntersectionObserver((G0)=>{for(let X0 of G0){if(!X0.isIntersecting)continue;h()}},{root:_0,rootMargin:`${e}px 0px ${e}px 0px`,threshold:0});return Y0.observe(l),()=>Y0.disconnect()},[d,$,j,N,h]);let t=C(h);if(t.current=h,g(()=>{if(d)return;if(!N?.current)return;let{scrollTop:l,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-l:l,G0=Math.max(300,e);if(Y0<G0)t.current?.()},[d,_,$,E,N]),g(()=>{if(!N?.current)return;if(!$||J)return;let{scrollTop:l,scrollHeight:_0,clientHeight:e}=N.current,Y0=E?_0-e-l:l,G0=Math.max(300,e);if(_0<=e+1||Y0<G0)t.current?.()},[_,$,J,E,N]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${N}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let R=_.slice().sort((l,_0)=>l.id-_0.id),x=(l)=>{let _0=l?.data?.thread_id;if(_0===null||_0===void 0||_0==="")return null;let e=Number(_0);return Number.isFinite(e)?e:null},H=new Map;for(let l=0;l<R.length;l+=1){let _0=R[l],e=Number(_0?.id),Y0=x(_0);if(Y0!==null){let G0=H.get(Y0)||{anchorIndex:-1,replyIndexes:[]};G0.replyIndexes.push(l),H.set(Y0,G0)}else if(Number.isFinite(e)){let G0=H.get(e)||{anchorIndex:-1,replyIndexes:[]};G0.anchorIndex=l,H.set(e,G0)}}let S=new Map;for(let[l,_0]of H.entries()){let e=new Set;if(_0.anchorIndex>=0)e.add(_0.anchorIndex);for(let Y0 of _0.replyIndexes)e.add(Y0);S.set(l,Array.from(e).sort((Y0,G0)=>Y0-G0))}let p=R.map((l,_0)=>{let e=x(l);if(e===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Y0=S.get(e);if(!Y0||Y0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G0=Y0.indexOf(_0);if(G0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G0>0,hasThreadNext:G0<Y0.length-1}}),Q0=L`<div class="timeline-sentinel" ref=${I}></div>`;return L`
        <div class="timeline ${E?"reverse":"normal"}" ref=${N} onScroll=${o}>
            <div class="timeline-content">
                ${E?Q0:null}
                ${R.map((l,_0)=>{let e=Boolean(l.data?.thread_id&&l.data.thread_id!==l.id),Y0=M?.has?.(l.id),G0=p[_0]||{};return L`
                    <${v7}
                        key=${l.id}
                        post=${l}
                        isThreadReply=${e}
                        isThreadPrev=${G0.hasThreadPrev}
                        isThreadNext=${G0.hasThreadNext}
                        isRemoving=${Y0}
                        highlightQuery=${A}
                        agentName=${J7(l.data?.agent_id,V||{})}
                        agentAvatarUrl=${O7(l.data?.agent_id,V||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>Q?.(l)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${G}
                        onOpenWidget=${K}
                        onDelete=${O}
                    />
                `})}
                ${E?null:Q0}
            </div>
        </div>
    `}class b7{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var i0=new b7;var o8=null,H$=null;function cq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function g7(){if(H$)return Promise.resolve(H$);if(!o8)o8=import(cq()).then((_)=>{return H$=_,_}).catch((_)=>{throw o8=null,_});return o8}class m7{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await g7();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var J$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new m7(_,$)}};function O$(){g7().catch(()=>{})}var t4="piclaw://terminal";var lq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},dq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},s8=null,D$=null;function iq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function nq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!iq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function rq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!s8)s8=nq(()=>Promise.resolve($.init?.())).catch((j)=>{throw s8=null,j});return await s8,$}async function oq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!D$)D$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await D$}async function sq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function aq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function tq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function eq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function h7(){let _=tq(),$=_?dq:lq,j=W4("--bg-primary",_?"#000000":"#ffffff"),Q=W4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=W4("--text-secondary",_?"#71767b":"#536471"),Y=W4("--accent-color","#1d9bf0"),q=W4("--danger-color",_?"#ff7b72":"#cf222e"),G=W4("--success-color",_?"#7ee787":"#1a7f37"),K=W4("--bg-hover",_?"#1d1f23":"#e8ebed"),X=W4("--border-color",_?"#2f3336":"#eff3f4"),N=W4("--accent-soft-strong",eq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:N,selectionForeground:Q,black:K,red:q,green:G,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class A${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await rq();if(await oq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:h7()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=h7(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await sq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(aq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var E$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new A$(_,$)}},M$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new A$(_,$)}};function U4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function a8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function p7(_,$={}){if(U4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:_G(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function I$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function T$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function C$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function L4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function c7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function l7(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,G]of Object.entries(Y)){let K=String(q||"").trim();if(!K)continue;if(G===null||G===void 0||G==="")Q.searchParams.delete(K);else Q.searchParams.set(K,String(G))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function _G(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function $G(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function d7(_,$={}){if(U4($))return null;if(a8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:$G(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function _8(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function jG(_){try{return JSON.parse(_)}catch{return null}}function QG(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function ZG(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class P${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=ZG($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||jG;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=QG(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var $8=()=>{throw Error("Operation requires compiling with --exportRuntime")},YG=typeof BigUint64Array<"u",j8=Symbol();var qG=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function i7(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return qG.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function n7(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return i7(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,G,K){let X=$.memory||Q.memory;throw Error(`abort: ${j(X,Y)} at ${j(X,q)}:${G}:${K}`)},Q.trace=Q.trace||function(Y,q,...G){let K=$.memory||Q.memory;console.log(`trace: ${j(K,Y)}${q?" ":""}${G.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function r7(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||$8,q=j.__pin||$8,G=j.__unpin||$8,K=j.__collect||$8,X=j.__rtti_base,N=X?(H)=>H[X>>>2]:$8;_.__new=Y,_.__pin=q,_.__unpin=G,_.__collect=K;function V(H){let S=new Uint32Array(Q.buffer);if((H>>>=0)>=N(S))throw Error(`invalid id: ${H}`);return S[(X+4>>>2)+H]}function B(H){let S=V(H);if(!(S&7))throw Error(`not an array: ${H}, flags=${S}`);return S}function O(H){return 31-Math.clz32(H>>>6&31)}function E(H){if(H==null)return 0;let S=H.length,p=Y(S<<1,2),Q0=new Uint16Array(Q.buffer);for(let l=0,_0=p>>>1;l<S;++l)Q0[_0+l]=H.charCodeAt(l);return p}_.__newString=E;function M(H){if(H==null)return 0;let S=new Uint8Array(H),p=Y(S.length,1);return new Uint8Array(Q.buffer).set(S,p),p}_.__newArrayBuffer=M;function A(H){if(!H)return null;let S=Q.buffer;if(new Uint32Array(S)[H+-8>>>2]!==2)throw Error(`not a string: ${H}`);return i7(S,H)}_.__getString=A;function J(H,S,p){let Q0=Q.buffer;if(p)switch(H){case 2:return new Float32Array(Q0);case 3:return new Float64Array(Q0)}else switch(H){case 0:return new(S?Int8Array:Uint8Array)(Q0);case 1:return new(S?Int16Array:Uint16Array)(Q0);case 2:return new(S?Int32Array:Uint32Array)(Q0);case 3:return new(S?BigInt64Array:BigUint64Array)(Q0)}throw Error(`unsupported align: ${H}`)}function D(H,S=0){let p=S,Q0=B(H),l=O(Q0),_0=typeof p!=="number",e=_0?p.length:p,Y0=Y(e<<l,Q0&4?H:1),G0;if(Q0&4)G0=Y0;else{q(Y0);let X0=Y(Q0&2?16:12,H);G(Y0);let H0=new Uint32Array(Q.buffer);if(H0[X0+0>>>2]=Y0,H0[X0+4>>>2]=Y0,H0[X0+8>>>2]=e<<l,Q0&2)H0[X0+12>>>2]=e;G0=X0}if(_0){let X0=J(l,Q0&2048,Q0&4096),H0=Y0>>>l;if(Q0&16384)for(let D0=0;D0<e;++D0)X0[H0+D0]=p[D0];else X0.set(p,H0)}return G0}_.__newArray=D;function I(H){let S=new Uint32Array(Q.buffer),p=S[H+-8>>>2],Q0=B(p),l=O(Q0),_0=Q0&4?H:S[H+4>>>2],e=Q0&2?S[H+12>>>2]:S[_0+-4>>>2]>>>l;return J(l,Q0&2048,Q0&4096).subarray(_0>>>=l,_0+e)}_.__getArrayView=I;function d(H){let S=I(H),p=S.length,Q0=Array(p);for(let l=0;l<p;l++)Q0[l]=S[l];return Q0}_.__getArray=d;function h(H){let S=Q.buffer,p=new Uint32Array(S)[H+-4>>>2];return S.slice(H,H+p)}_.__getArrayBuffer=h;function o(H){if(!Z)throw Error("Operation requires compiling with --exportTable");let S=new Uint32Array(Q.buffer)[H>>>2];return Z.get(S)}_.__getFunction=o;function t(H,S,p){return new H(R(H,S,p))}function R(H,S,p){let Q0=Q.buffer,l=new Uint32Array(Q0);return new H(Q0,l[p+4>>>2],l[p+8>>>2]>>>S)}function x(H,S,p){_[`__get${S}`]=t.bind(null,H,p),_[`__get${S}View`]=R.bind(null,H,p)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((H)=>{x(H,H.name,31-Math.clz32(H.BYTES_PER_ELEMENT))}),YG)[BigUint64Array,BigInt64Array].forEach((H)=>{x(H,H.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,XG(j,_)}function o7(_){return typeof Response<"u"&&_ instanceof Response}function GG(_){return _ instanceof WebAssembly.Module}async function S$(_,$={}){if(o7(_=await _))return t8(_,$);let j=GG(_)?_:await WebAssembly.compile(_),Q=n7($),Z=await WebAssembly.instantiate(j,$),Y=r7(Q,Z);return{module:j,instance:Z,exports:Y}}async function t8(_,$={}){if(!WebAssembly.instantiateStreaming)return S$(o7(_=await _)?_.arrayBuffer():_,$);let j=n7($),Q=await WebAssembly.instantiateStreaming(_,$),Z=r7(j,Q.instance);return{...Q,exports:Z}}function XG(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let X=Y.shift();if(!Object.hasOwn(q,X))q[X]={};q=q[X]}let G=Y[0],K=G.indexOf("#");if(K>=0){let X=G.substring(0,K),N=q[X];if(typeof N>"u"||!N.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[j8]}},V.wrap=function(B){return Object.create(V.prototype,{[j8]:{value:B,writable:!1}})},N)Object.getOwnPropertyNames(N).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(N,B)));q[X]=V}if(G=G.substring(K+1),q=q[X].prototype,/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4))){let V=_[Q.replace("set:","get:")],B=_[Q.replace("get:","set:")];Object.defineProperty(q,G,{get(){return V(this[j8])},set(O){B(this[j8],O)},enumerable:!0})}}else if(G==="constructor")(q[G]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[G]=function(...V){return j(V.length),Z(this[j8],...V)}).original=Z}else if(/^(get|set):/.test(G)){if(!Object.hasOwn(q,G=G.substring(4)))Object.defineProperty(q,G,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[G]=(...X)=>{return j(X.length),Z(...X)}).original=Z;else q[G]=Z}return $}var NG="/static/js/vendor/remote-display-decoder.wasm",e8=null;function s7(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function a7(){if(e8)return e8;return e8=(async()=>{try{let Q=function(Z,Y,q,G,K,X,N){let V=s7(Y),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,q,G,K,X,N.bitsPerPixel,N.bigEndian?1:0,N.trueColor?1:0,N.redMax,N.greenMax,N.blueMax,N.redShift,N.greenShift,N.blueShift)}finally{j.__unpin(B);try{j.__collect()}catch{}}},_=await fetch(NG,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof t8==="function"?await t8(_,{}):await S$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,G,K,X){return Q("processRawRect",Z,Y,q,G,K,X)},processCopyRect(Z,Y,q,G,K,X){return j.processCopyRect(Z,Y,q,G,K,X)},processRreRect(Z,Y,q,G,K,X){return Q("processRreRect",Z,Y,q,G,K,X)},processHextileRect(Z,Y,q,G,K,X){return Q("processHextileRect",Z,Y,q,G,K,X)},processZrleTileData(Z,Y,q,G,K,X){return Q("processZrleTileData",Z,Y,q,G,K,X)},decodeRawRectToRgba(Z,Y,q,G){let K=s7(Z),X=j.__pin(j.__newArrayBuffer(K));try{let N=j.__pin(j.decodeRawRectToRgba(X,Y,q,G.bitsPerPixel,G.bigEndian?1:0,G.trueColor?1:0,G.redMax,G.greenMax,G.blueMax,G.redShift,G.greenShift,G.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(N))}finally{j.__unpin(N)}}finally{j.__unpin(X);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),e8}function A5(_,$,j){return Math.max($,Math.min(j,_))}function _6(_,$,j){let Q=new Uint8Array(6),Z=A5(Math.floor(Number($||0)),0,65535),Y=A5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=A5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function y$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function t7(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),G=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),X=(Number(_||0)-Number(j?.left||0))/G,N=(Number($||0)-Number(j?.top||0))/K;return{x:A5(Math.floor(X*Y),0,Math.max(0,Y-1)),y:A5(Math.floor(N*q),0,Math.max(0,q-1))}}function e7(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=A5(Number(Q||0)|Z,0,255);return[_6(Y,$,j),_6(Number(Q||0),$,j)]}function _9(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function Q8(_){if(typeof _!=="string")return null;return _.length>0?_:null}function $9(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),G=Math.max(1,Math.floor(Number(Q||0))),K=Math.min(Z/q,Y/G);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var x$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)x$[`F${_}`]=65470+(_-1);function R$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(x$,Y))return x$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var v1=Uint8Array,D_=Uint16Array,p$=Int32Array,$6=new v1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),j6=new v1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),b$=new v1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Y9=function(_,$){var j=new D_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new p$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},q9=Y9($6,2),G9=q9.b,g$=q9.r;G9[28]=258,g$[258]=28;var X9=Y9(j6,0),VG=X9.b,j9=X9.r,m$=new D_(32768);for(l0=0;l0<32768;++l0)j4=(l0&43690)>>1|(l0&21845)<<1,j4=(j4&52428)>>2|(j4&13107)<<2,j4=(j4&61680)>>4|(j4&3855)<<4,m$[l0]=((j4&65280)>>8|(j4&255)<<8)>>1;var j4,l0,Q4=function(_,$,j){var Q=_.length,Z=0,Y=new D_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new D_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var G;if(j){G=new D_(1<<$);var K=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var X=Z<<4|_[Z],N=$-_[Z],V=q[_[Z]-1]++<<N;for(var B=V|(1<<N)-1;V<=B;++V)G[m$[V]>>K]=X}}else{G=new D_(Q);for(Z=0;Z<Q;++Z)if(_[Z])G[Z]=m$[q[_[Z]-1]++]>>15-_[Z]}return G},y4=new v1(288);for(l0=0;l0<144;++l0)y4[l0]=8;var l0;for(l0=144;l0<256;++l0)y4[l0]=9;var l0;for(l0=256;l0<280;++l0)y4[l0]=7;var l0;for(l0=280;l0<288;++l0)y4[l0]=8;var l0,G8=new v1(32);for(l0=0;l0<32;++l0)G8[l0]=5;var l0,BG=Q4(y4,9,0),WG=Q4(y4,9,1),UG=Q4(G8,5,0),LG=Q4(G8,5,1),w$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},n_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},f$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},c$=function(_){return(_+7)/8|0},q8=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new v1(_.subarray($,j))};var FG=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V_=function(_,$,j){var Q=Error($||FG[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,V_);if(!j)throw Q;return Q},zG=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new v1(0);var q=!j,G=q||$.i!=2,K=$.i;if(q)j=new v1(Z*3);var X=function(_1){var z0=j.length;if(_1>z0){var p0=new v1(Math.max(z0*2,_1));p0.set(j),j=p0}},N=$.f||0,V=$.p||0,B=$.b||0,O=$.l,E=$.d,M=$.m,A=$.n,J=Z*8;do{if(!O){N=n_(_,V,1);var D=n_(_,V+1,3);if(V+=3,!D){var I=c$(V)+4,d=_[I-4]|_[I-3]<<8,h=I+d;if(h>Z){if(K)V_(0);break}if(G)X(B+d);j.set(_.subarray(I,h),B),$.b=B+=d,$.p=V=h*8,$.f=N;continue}else if(D==1)O=WG,E=LG,M=9,A=5;else if(D==2){var o=n_(_,V,31)+257,t=n_(_,V+10,15)+4,R=o+n_(_,V+5,31)+1;V+=14;var x=new v1(R),H=new v1(19);for(var S=0;S<t;++S)H[b$[S]]=n_(_,V+S*3,7);V+=t*3;var p=w$(H),Q0=(1<<p)-1,l=Q4(H,p,1);for(var S=0;S<R;){var _0=l[n_(_,V,Q0)];V+=_0&15;var I=_0>>4;if(I<16)x[S++]=I;else{var e=0,Y0=0;if(I==16)Y0=3+n_(_,V,3),V+=2,e=x[S-1];else if(I==17)Y0=3+n_(_,V,7),V+=3;else if(I==18)Y0=11+n_(_,V,127),V+=7;while(Y0--)x[S++]=e}}var G0=x.subarray(0,o),X0=x.subarray(o);M=w$(G0),A=w$(X0),O=Q4(G0,M,1),E=Q4(X0,A,1)}else V_(1);if(V>J){if(K)V_(0);break}}if(G)X(B+131072);var H0=(1<<M)-1,D0=(1<<A)-1,A0=V;for(;;A0=V){var e=O[f$(_,V)&H0],n0=e>>4;if(V+=e&15,V>J){if(K)V_(0);break}if(!e)V_(2);if(n0<256)j[B++]=n0;else if(n0==256){A0=V,O=null;break}else{var x0=n0-254;if(n0>264){var S=n0-257,k0=$6[S];x0=n_(_,V,(1<<k0)-1)+G9[S],V+=k0}var r0=E[f$(_,V)&D0],o0=r0>>4;if(!r0)V_(3);V+=r0&15;var X0=VG[o0];if(o0>3){var k0=j6[o0];X0+=f$(_,V)&(1<<k0)-1,V+=k0}if(V>J){if(K)V_(0);break}if(G)X(B+131072);var g0=B+x0;if(B<X0){var a0=Y-X0,m0=Math.min(X0,g0);if(a0+B<0)V_(3);for(;B<m0;++B)j[B]=Q[a0+B]}for(;B<g0;++B)j[B]=j[B-X0]}}if($.l=O,$.p=A0,$.b=B,$.f=N,O)N=1,$.m=M,$.d=E,$.n=A}while(!N);return B!=j.length&&q?q8(j,0,B):j.subarray(0,B)},F4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},Z8=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},v$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:N9,l:0};if(Z==1){var q=new v1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(h,o){return h.f-o.f}),j.push({s:-1,f:25001});var G=j[0],K=j[1],X=0,N=1,V=2;j[0]={s:-1,f:G.f+K.f,l:G,r:K};while(N!=Z-1)G=j[j[X].f<j[V].f?X++:V++],K=j[X!=N&&j[X].f<j[V].f?X++:V++],j[N++]={s:-1,f:G.f+K.f,l:G,r:K};var B=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>B)B=Y[Q].s;var O=new D_(B+1),E=h$(j[N-1],O,0);if(E>$){var Q=0,M=0,A=E-$,J=1<<A;Y.sort(function(o,t){return O[t.s]-O[o.s]||o.f-t.f});for(;Q<Z;++Q){var D=Y[Q].s;if(O[D]>$)M+=J-(1<<E-O[D]),O[D]=$;else break}M>>=A;while(M>0){var I=Y[Q].s;if(O[I]<$)M-=1<<$-O[I]++-1;else++Q}for(;Q>=0&&M;--Q){var d=Y[Q].s;if(O[d]==$)--O[d],++M}E=$}return{t:new v1(O),l:E}},h$=function(_,$,j){return _.s==-1?Math.max(h$(_.l,$,j+1),h$(_.r,$,j+1)):$[_.s]=j},Q9=function(_){var $=_.length;while($&&!_[--$]);var j=new D_(++$),Q=0,Z=_[0],Y=1,q=function(K){j[Q++]=K};for(var G=1;G<=$;++G)if(_[G]==Z&&G!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[G]}return{c:j.subarray(0,Q),n:$}},Y8=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},K9=function(_,$,j){var Q=j.length,Z=c$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},Z9=function(_,$,j,Q,Z,Y,q,G,K,X,N){F4($,N++,j),++Z[256];var V=v$(Z,15),B=V.t,O=V.l,E=v$(Y,15),M=E.t,A=E.l,J=Q9(B),D=J.c,I=J.n,d=Q9(M),h=d.c,o=d.n,t=new D_(19);for(var R=0;R<D.length;++R)++t[D[R]&31];for(var R=0;R<h.length;++R)++t[h[R]&31];var x=v$(t,7),H=x.t,S=x.l,p=19;for(;p>4&&!H[b$[p-1]];--p);var Q0=X+5<<3,l=Y8(Z,y4)+Y8(Y,G8)+q,_0=Y8(Z,B)+Y8(Y,M)+q+14+3*p+Y8(t,H)+2*t[16]+3*t[17]+7*t[18];if(K>=0&&Q0<=l&&Q0<=_0)return K9($,N,_.subarray(K,K+X));var e,Y0,G0,X0;if(F4($,N,1+(_0<l)),N+=2,_0<l){e=Q4(B,O,0),Y0=B,G0=Q4(M,A,0),X0=M;var H0=Q4(H,S,0);F4($,N,I-257),F4($,N+5,o-1),F4($,N+10,p-4),N+=14;for(var R=0;R<p;++R)F4($,N+3*R,H[b$[R]]);N+=3*p;var D0=[D,h];for(var A0=0;A0<2;++A0){var n0=D0[A0];for(var R=0;R<n0.length;++R){var x0=n0[R]&31;if(F4($,N,H0[x0]),N+=H[x0],x0>15)F4($,N,n0[R]>>5&127),N+=n0[R]>>12}}}else e=BG,Y0=y4,G0=UG,X0=G8;for(var R=0;R<G;++R){var k0=Q[R];if(k0>255){var x0=k0>>18&31;if(Z8($,N,e[x0+257]),N+=Y0[x0+257],x0>7)F4($,N,k0>>23&31),N+=$6[x0];var r0=k0&31;if(Z8($,N,G0[r0]),N+=X0[r0],r0>3)Z8($,N,k0>>5&8191),N+=j6[r0]}else Z8($,N,e[k0]),N+=Y0[k0]}return Z8($,N,e[256]),N+Y0[256]},HG=new p$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),N9=new v1(0),JG=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,G=new v1(Q+q+5*(1+Math.ceil(q/7000))+Z),K=G.subarray(Q,G.length-Z),X=Y.l,N=(Y.r||0)&7;if($){if(N)K[0]=Y.r>>3;var V=HG[$-1],B=V>>13,O=V&8191,E=(1<<j)-1,M=Y.p||new D_(32768),A=Y.h||new D_(E+1),J=Math.ceil(j/3),D=2*J,I=function($1){return(_[$1]^_[$1+1]<<J^_[$1+2]<<D)&E},d=new p$(25000),h=new D_(288),o=new D_(32),t=0,R=0,x=Y.i||0,H=0,S=Y.w||0,p=0;for(;x+2<q;++x){var Q0=I(x),l=x&32767,_0=A[Q0];if(M[l]=_0,A[Q0]=l,S<=x){var e=q-x;if((t>7000||H>24576)&&(e>423||!X)){N=Z9(_,K,0,d,h,o,R,H,p,x-p,N),H=t=R=0,p=x;for(var Y0=0;Y0<286;++Y0)h[Y0]=0;for(var Y0=0;Y0<30;++Y0)o[Y0]=0}var G0=2,X0=0,H0=O,D0=l-_0&32767;if(e>2&&Q0==I(x-D0)){var A0=Math.min(B,e)-1,n0=Math.min(32767,x),x0=Math.min(258,e);while(D0<=n0&&--H0&&l!=_0){if(_[x+G0]==_[x+G0-D0]){var k0=0;for(;k0<x0&&_[x+k0]==_[x+k0-D0];++k0);if(k0>G0){if(G0=k0,X0=D0,k0>A0)break;var r0=Math.min(D0,k0-2),o0=0;for(var Y0=0;Y0<r0;++Y0){var g0=x-D0+Y0&32767,a0=M[g0],m0=g0-a0&32767;if(m0>o0)o0=m0,_0=g0}}}l=_0,_0=M[l],D0+=l-_0&32767}}if(X0){d[H++]=268435456|g$[G0]<<18|j9[X0];var _1=g$[G0]&31,z0=j9[X0]&31;R+=$6[_1]+j6[z0],++h[257+_1],++o[z0],S=x+G0,++t}else d[H++]=_[x],++h[_[x]]}}for(x=Math.max(x,S);x<q;++x)d[H++]=_[x],++h[_[x]];if(N=Z9(_,K,X,d,h,o,R,H,p,x-p,N),!X)Y.r=N&7|K[N/8|0]<<3,N-=7,Y.h=A,Y.p=M,Y.i=x,Y.w=S}else{for(var x=Y.w||0;x<q+X;x+=65535){var p0=x+65535;if(p0>=q)K[N/8|0]=X,p0=q;N=K9(K,N+1,_.subarray(x,p0))}Y.i=q}return q8(G,0,Q+c$(N)+Z)};var V9=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var G=Math.min(q+2655,Y);for(;q<G;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},OG=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new v1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return JG(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var B9=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var DG=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=V9();Z.p($.dictionary),B9(_,2,Z.d())}},AG=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)V_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)V_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var u$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new v1(32768),this.p=new v1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)V_(5);if(this.d)V_(4);if(!this.p.length)this.p=$;else if($.length){var j=new v1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=zG(this.p,this.s,this.o);this.ondata(q8(Q,j,this.s.b),this.d),this.o=q8(Q,this.s.b-32768),this.s.b=this.o.length,this.p=q8(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function W9(_,$){if(!$)$={};var j=V9();j.p(_);var Q=OG(_,$,$.dictionary?6:2,4);return DG(Q,$),B9(Q,Q.length-4,j.d()),Q}var U9=function(){function _($,j){u$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(u$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(AG(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)V_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}u$.prototype.c.call(this,j)},_}();var EG=typeof TextDecoder<"u"&&new TextDecoder,MG=0;try{EG.decode(N9,{stream:!0}),MG=1}catch(_){}var kG=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],IG=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],TG=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],CG=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],PG=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],SG=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],xG=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],yG=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],z9=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;z9[_]=$}function H9(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function J9(_){let $=0n,j=H9(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function RG(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function E5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function L9(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function wG(_){let $=E5(J9(_),PG,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of xG){j=L9(j,Y),Q=L9(Q,Y);let q=j<<28n|Q;Z.push(E5(q,SG,56))}return Z}function fG(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(yG[j][Y][q])}return $}function vG(_,$){let j=E5(_,TG,32)^BigInt($),Q=fG(j);return E5(Q,CG,32)}function F9(_,$){let j=wG($),Q=E5(J9(_),kG,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let G of j){let K=Y,X=(Z^vG(Y,G))&0xffffffffn;Z=K,Y=X}let q=Y<<32n|Z;return RG(E5(q,IG,64),8)}function uG(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=z9[Z]}return j}function O9(_,$){let j=H9($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=uG(_),Z=new Uint8Array(16);return Z.set(F9(j.slice(0,8),Q),0),Z.set(F9(j.slice(8,16),Q),8),Z}var r_="vnc";function bG(_){return Number(_)}function gG(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=bG(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function I5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function mG(_,$){let j=I5(_),Q=I5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function hG(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=I5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function pG(){return(_)=>{let $=I5(_);try{let j=[],Q=new U9((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return hG(j)}catch(j){try{let Q=W9($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function cG(_){return new TextEncoder().encode(String(_||""))}function M5(_){return new TextDecoder().decode(I5(_))}function lG(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function dG(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function D9(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function iG(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function nG(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function A9(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function k5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function M9(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function rG(_,$,j,Q){let Z=Q||T5,Y=I5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),G=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<G)throw Error(`Incomplete raw rectangle payload: expected ${G} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),X=0,N=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=M9(Y,X,q,Z.bigEndian),O=k5(B>>>Z.redShift&Z.redMax,Z.redMax),E=k5(B>>>Z.greenShift&Z.greenMax,Z.greenMax),M=k5(B>>>Z.blueShift&Z.blueMax,Z.blueMax);K[N]=O,K[N+1]=E,K[N+2]=M,K[N+3]=255,X+=q,N+=4}return K}function z4(_,$,j){let Q=j||T5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=M9(_,$,Z,Q.bigEndian);return{rgba:[k5(Y>>>Q.redShift&Q.redMax,Q.redMax),k5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),k5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function R4(_,$,j,Q,Z,Y,q){if(!q)return;for(let G=0;G<Y;G+=1)for(let K=0;K<Z;K+=1){let X=((Q+G)*$+(j+K))*4;_[X]=q[0],_[X+1]=q[1],_[X+2]=q[2],_[X+3]=q[3]}}function k9(_,$,j,Q,Z,Y,q){for(let G=0;G<Y;G+=1){let K=G*Z*4,X=((Q+G)*$+j)*4;_.set(q.subarray(K,K+Z*4),X)}}function E9(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function oG(_,$,j,Q,Z,Y,q){let G=Z||T5,K=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let X=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+X)return null;let N=_.slice($+4,$+4+X),V;try{V=q(N)}catch{return{consumed:4+X,skipped:!0}}let B=0,O=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let E=0;E<Q;E+=64){let M=Math.min(64,Q-E);for(let A=0;A<j;A+=64){let J=Math.min(64,j-A);if(V.byteLength<B+1)return null;let D=V[B++],I=D&127,d=(D&128)!==0;if(!d&&I===0){let h=J*M*K;if(V.byteLength<B+h)return null;let o=Y(V.slice(B,B+h),J,M,G);B+=h,k9(O,j,A,E,J,M,o);continue}if(!d&&I===1){let h=z4(V,B,G);if(!h)return null;B+=h.bytesPerPixel,R4(O,j,A,E,J,M,h.rgba);continue}if(!d&&I>1&&I<=16){let h=[];for(let x=0;x<I;x+=1){let H=z4(V,B,G);if(!H)return null;B+=H.bytesPerPixel,h.push(H.rgba)}let o=I<=2?1:I<=4?2:4,t=Math.ceil(J*o/8),R=t*M;if(V.byteLength<B+R)return null;for(let x=0;x<M;x+=1){let H=B+x*t;for(let S=0;S<J;S+=1){let p=S*o,Q0=H+(p>>3),l=8-o-(p&7),_0=V[Q0]>>l&(1<<o)-1;R4(O,j,A+S,E+x,1,1,h[_0])}}B+=R;continue}if(d&&I===0){let h=0,o=0;while(o<M){let t=z4(V,B,G);if(!t)return null;B+=t.bytesPerPixel;let R=E9(V,B);if(!R)return null;B+=R.consumed;for(let x=0;x<R.runLength;x+=1)if(R4(O,j,A+h,E+o,1,1,t.rgba),h+=1,h>=J){if(h=0,o+=1,o>=M)break}}continue}if(d&&I>0){let h=[];for(let R=0;R<I;R+=1){let x=z4(V,B,G);if(!x)return null;B+=x.bytesPerPixel,h.push(x.rgba)}let o=0,t=0;while(t<M){if(V.byteLength<B+1)return null;let R=V[B++],x=R,H=1;if(R&128){x=R&127;let p=E9(V,B);if(!p)return null;B+=p.consumed,H=p.runLength}let S=h[x];if(!S)return null;for(let p=0;p<H;p+=1)if(R4(O,j,A+o,E+t,1,1,S),o+=1,o>=J){if(o=0,t+=1,t>=M)break}}continue}return{consumed:4+X,skipped:!0}}}return{consumed:4+X,rgba:O,decompressed:V}}function sG(_,$,j,Q,Z){let Y=Z||T5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),X=4+q+K*(q+8);if(_.byteLength<$+X)return null;let N=$+4,V=z4(_,N,Y);if(!V)return null;N+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);R4(B,j,0,0,j,Q,V.rgba);for(let O=0;O<K;O+=1){let E=z4(_,N,Y);if(!E)return null;if(N+=E.bytesPerPixel,_.byteLength<N+8)return null;let M=new DataView(_.buffer,_.byteOffset+N,8),A=M.getUint16(0,!1),J=M.getUint16(2,!1),D=M.getUint16(4,!1),I=M.getUint16(6,!1);N+=8,R4(B,j,A,J,D,I,E.rgba)}return{consumed:N-$,rgba:B}}function aG(_,$,j,Q,Z,Y){let q=Z||T5,G=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),X=$,N=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<Q;B+=16){let O=Math.min(16,Q-B);for(let E=0;E<j;E+=16){let M=Math.min(16,j-E);if(_.byteLength<X+1)return null;let A=_[X++];if(A&1){let J=M*O*G;if(_.byteLength<X+J)return null;let D=Y(_.slice(X,X+J),M,O,q);X+=J,k9(K,j,E,B,M,O,D);continue}if(A&2){let J=z4(_,X,q);if(!J)return null;N=J.rgba,X+=J.bytesPerPixel}if(R4(K,j,E,B,M,O,N),A&4){let J=z4(_,X,q);if(!J)return null;V=J.rgba,X+=J.bytesPerPixel}if(A&8){if(_.byteLength<X+1)return null;let J=_[X++];for(let D=0;D<J;D+=1){let I=V;if(A&16){let H=z4(_,X,q);if(!H)return null;I=H.rgba,X+=H.bytesPerPixel}if(_.byteLength<X+2)return null;let d=_[X++],h=_[X++],o=d>>4,t=d&15,R=(h>>4)+1,x=(h&15)+1;R4(K,j,E+o,B+t,R,x,I)}}}}return{consumed:X-$,rgba:K}}var T5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Q6{protocol=r_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:rG,this.pipeline=_.pipeline||null,this.encodings=gG(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...T5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:pG()}receive(_){if(_)this.buffer=mG(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=M5(Z),q=lG(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=dG(q),j.push(cG(this.clientVersionText)),$.push({type:"protocol-version",protocol:r_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let X=M5(this.consume(4+K).slice(4));throw Error(X||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:r_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:r_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+G)break;let K=M5(this.consume(4+G).slice(4));throw Error(K||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:r_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:r_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(O9(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let G=M5(this.consume(4+q).slice(4));throw Error(G||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:r_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),G=D9(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let X=this.consume(24),N=new DataView(X.buffer,X.byteOffset,X.byteLength);if(this.framebufferWidth=N.getUint16(0,!1),this.framebufferHeight=N.getUint16(2,!1),this.serverPixelFormat=D9(N,4),this.serverName=M5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(iG(this.clientPixelFormat)),j.push(nG(this.encodings)),j.push(A9(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:r_,width:Y,height:q,name:this.serverName,pixelFormat:G}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),G=4,K=[],X=!1,N=!!this.pipeline;for(let B=0;B<q;B+=1){if(this.buffer.byteLength<G+12){X=!0;break}let O=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,12),E=O.getUint16(0,!1),M=O.getUint16(2,!1),A=O.getUint16(4,!1),J=O.getUint16(6,!1),D=O.getInt32(8,!1);if(G+=12,D===0){let I=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),d=A*J*I;if(this.buffer.byteLength<G+d){X=!0;break}let h=this.buffer.slice(G,G+d);if(G+=d,N)this.pipeline.processRawRect(h,E,M,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:M,width:A,height:J});else K.push({kind:"rgba",x:E,y:M,width:A,height:J,rgba:this.decodeRawRect(h,A,J,this.clientPixelFormat)});continue}if(D===2){let I=sG(this.buffer,G,A,J,this.clientPixelFormat);if(!I){X=!0;break}if(N){let d=this.buffer.slice(G,G+I.consumed);this.pipeline.processRreRect(d,E,M,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:M,width:A,height:J})}else K.push({kind:"rgba",x:E,y:M,width:A,height:J,rgba:I.rgba});G+=I.consumed;continue}if(D===1){if(this.buffer.byteLength<G+4){X=!0;break}let I=new DataView(this.buffer.buffer,this.buffer.byteOffset+G,4),d=I.getUint16(0,!1),h=I.getUint16(2,!1);if(G+=4,N)this.pipeline.processCopyRect(E,M,A,J,d,h),K.push({kind:"pipeline",x:E,y:M,width:A,height:J});else K.push({kind:"copy",x:E,y:M,width:A,height:J,srcX:d,srcY:h});continue}if(D===16){let I=oG(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!I){X=!0;break}if(G+=I.consumed,I.skipped)continue;if(N&&I.decompressed)this.pipeline.processZrleTileData(I.decompressed,E,M,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:M,width:A,height:J});else K.push({kind:"rgba",x:E,y:M,width:A,height:J,rgba:I.rgba});continue}if(D===5){let I=aG(this.buffer,G,A,J,this.clientPixelFormat,this.decodeRawRect);if(!I){X=!0;break}if(N){let d=this.buffer.slice(G,G+I.consumed);this.pipeline.processHextileRect(d,E,M,A,J,this.clientPixelFormat),K.push({kind:"pipeline",x:E,y:M,width:A,height:J})}else K.push({kind:"rgba",x:E,y:M,width:A,height:J,rgba:I.rgba});G+=I.consumed;continue}if(D===-223){if(this.framebufferWidth=A,this.framebufferHeight=J,N)this.pipeline.initFramebuffer(A,J);K.push({kind:"resize",x:E,y:M,width:A,height:J});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(X)break;this.consume(G);let V={type:"framebuffer-update",protocol:r_,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(N)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(A9(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:r_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let G=M5(this.consume(q));$.push({type:"clipboard",protocol:r_,text:G}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var H4="piclaw://vnc";function tG(_){let $=String(_||"");if($===H4)return null;if(!$.startsWith(`${H4}/`))return null;let j=$.slice(`${H4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function e4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function eG(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function _X(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function $X(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function jX(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function QX(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class I9{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=tG($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=QX("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${e4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${e4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${e4(Z.id)}" data-target-label="${e4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=jX(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=Q8(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${e4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${e4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=Q8(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=Q8(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=$9($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return t7(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=y$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~y$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of e7(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(_9(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=R$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??R$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Q6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await a7(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(G,K,X,N)=>Q.decodeRawRectToRgba(G,K,X,N);let Y=Q8(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Q6(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new P$({url:$X(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(G)=>{this.applyMetrics(G)},onMessage:(G)=>{this.handleSocketMessage(G)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await eG(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${e4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await _X(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var l$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===H4||$.startsWith(`${H4}/`)?9000:!1},mount(_,$){return new I9(_,$)}};function w4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ZX(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=Z.startsWith("/")?Z:`${G?`${G}/`:""}${Z}`,N=[];for(let B of X.split("/")){if(!B||B===".")continue;if(B===".."){if(N.length>0)N.pop();continue}N.push(B)}let V=N.join("/");return`${C8(V)}${Y}${q}`}function X8(_){return _?.preview||null}function YX(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function qX(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function GX(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${w4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${w4(f_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${w4(a4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${w4(qX($))}</span>`),Q.push(`<span><strong>extension:</strong> ${w4(YX(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${w4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function XX(_){let $=X8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=GX(_,$);if($.kind==="image"){let Q=$.url||($.path?C8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${w4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=J_($.text||"",null,{rewriteImageSrc:(Z)=>ZX(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${w4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class d${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=XX(this.context)}getContent(){let _=X8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=X8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var i$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=X8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new d$(_,$)}},n$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return X8(_)||_?.path?1:!1},mount(_,$){return new d$(_,$)}};var KX=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),NX={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},VX={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function C9(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class P9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=C9(j),Y=VX[Z]||"\uD83D\uDCC4",q=NX[Z]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
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
        `,_.appendChild(G);let K=G.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let X=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class S9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var r$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=C9(_?.path);if(!$||!KX.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new P9(_,$);return new S9(_,$)}};var BX=/\.(csv|tsv)$/i;function x9(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class y9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class R9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var o$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BX.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new y9(_,$);return new R9(_,$)}};var WX=/\.pdf$/i;function UX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class w9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${UX(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var s$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WX.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new w9(_,$);return new f9(_,$)}};var LX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function a$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
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
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var t$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LX.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new v9(_,$);return new u9(_,$)}};var FX=/\.(mp4|m4v|mov|webm|ogv)$/i;function zX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${zX(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g9{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var e$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!FX.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new b9(_,$);return new g9(_,$)}};function HX(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function JX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var _3='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function m9(_){let $=String(_||"").trim();return $?$:_3}function OX(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function DX(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function AX(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,G,K,X,N,V){try{if(q&&K!=null&&j({filename:q,format:G,data:K,mimeType:X,base64Encoded:Boolean(N),defaultMode:V}))return}catch(B){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",B)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,G,K,X,N,V){try{if(G&&j({filename:G,data:q,mimeType:K,base64Encoded:Boolean(X),mode:N,folderId:V}))return}catch(B){console.warn("[drawio-pane] export intercept failed, falling back to native export",B)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function h9(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${DX(j)}`}class p9{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${JX(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c9{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=OX(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(AX(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=_3,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await h9(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await h9(_,"image/png");else this.xmlData=m9(await _.text());else if(_.status===404)this.xmlData=_3;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?m9(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var $3={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!HX(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new p9(_,$);return new c9(_,$)}};var EX=/\.mindmap\.ya?ml$/i,j3=String(Date.now());function l9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function Q3(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function MX(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function kX(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class i9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(l9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,MX("/static/css/mindmap.css"),await Promise.all([Q3("/static/js/vendor/d3-mindmap.min.js?v="+j3),Q3("/static/js/vendor/js-yaml.min.js?v="+j3)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),kX(this.mindmapEl);let j=l9(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await Q3("/static/js/vendor/mindmap-editor.js?v="+j3),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Z3={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EX.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new d9(_,$);return new i9(_,$)}};var IX=/\.kanban\.md$/i,TX=String(Date.now());function n9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function CX(){let _=window;if(_.preact)return;_.preact={h:M8,render:S4,Component:B5,createContext:J2},_.preactHooks={useState:m,useEffect:g,useCallback:P,useRef:C,useMemo:f0,useReducer:S6,useContext:A2,useLayoutEffect:h5,useImperativeHandle:D2,useErrorBoundary:M2,useDebugValue:E2},_.htm={bind:()=>L}}function PX(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function SX(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class r9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
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
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class o9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(n9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,SX("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=n9();try{if(CX(),await PX("/static/js/vendor/kanban-editor.js?v="+TX),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var Y3={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IX.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new r9(_,$);return new o9(_,$)}};class s9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s0=new s9;var Z6="workspaceExplorerScale",xX=["compact","default","comfortable"],yX=new Set(xX),RX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function a9(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return yX.has(j)?j:$}function q3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function wX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function fX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function G3(_={}){let $=wX(_),j=_.stored?a9(_.stored,$):$;return fX(j,_)}function t9(_){return RX[a9(_)]}function vX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function X3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function e9(_,$,j={}){let Q=j.resolvePane;if(X3(_,Q))return!0;return vX($)}var uX=60000,Qj=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function bX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return X3($,(j)=>i0.resolve(j))}function Zj(_,$,j,Q=0,Z=[]){if(!j&&Qj(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)Zj(Y,$,j,Q+1,Z);return Z}function _j(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&Qj(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function B3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((G)=>[G?.path,G])):new Map,Y=!j||j.length!==Q.length,q=Q.map((G)=>{let K=B3(Z.get(G.path),G);if(K!==Z.get(G.path))Y=!0;return K});return Y?{...$,children:q}:_}function N3(_,$,j){if(!_)return _;if(_.path===$)return B3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=N3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var Yj=4,K3=14,gX=8,mX=16;function qj(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=qj(Q);return _.__bytes=j,j}function Gj(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Yj)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let G of Z){let K=Math.max(0,Number(G?.__bytes??G?.size??0));if(K<=0)continue;if(G.type==="dir")Y.push({kind:"dir",node:G,size:K});else Y.push({kind:"file",name:G.name,path:G.path,size:K})}Y.sort((G,K)=>K.size-G.size);let q=Y;if(Y.length>K3){let G=Y.slice(0,K3-1),K=Y.slice(K3-1),X=K.reduce((N,V)=>N+V.size,0);G.push({kind:"other",name:`+${K.length} more`,path:`${Q.path}/[other]`,size:X}),q=G}return Q.children=q.map((G)=>{if(G.kind==="dir")return Gj(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Q}function $j(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Xj(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function W3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,G=Y-Z>q?Z+q:Y,K=Y6(_,$,Q,Z),X=Y6(_,$,Q,G),N=Y6(_,$,j,G),V=Y6(_,$,j,Z),B=G-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${B} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var Kj={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function Nj(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(G,K,X,N)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let B=Math.max(0,Number(G.size)||0);if(B<=0)return;let O=X-K,E=K;V.forEach((M,A)=>{let J=Math.max(0,Number(M.size)||0);if(J<=0)return;let D=J/B,I=E,d=A===V.length-1?X:E+O*D;if(E=d,d-I<0.003)return;let h=Kj[N];if(h){let o=Xj(I,N,j);if(Q.push({key:M.path,path:M.path,label:M.name,size:J,color:o,depth:N,startAngle:I,endAngle:d,innerRadius:h[0],outerRadius:h[1],d:W3(120,120,h[0],h[1],I,d)}),N===1)Z.push({key:M.path,name:M.name,size:J,pct:Y>0?J/Y*100:0,color:o})}if(N<Yj)q(M,I,d,N+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function V3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=V3(Q,$);if(Z)return Z}return null}function Vj(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=Kj[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,G=Xj(Y,1,Q),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:W3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function jj(_,$=!1,j=!1){if(!_)return null;let Q=qj(_),Z=Gj(_,0),Y=Z.size||Q,{segments:q,legend:G}=Nj(Z,Y,j);if(!q.length&&Y>0){let K=Vj("[files]",Z.path,Y,j);q=K.segments,G=K.legend}return{root:Z,totalSize:Y,segments:q,legend:G,truncated:$,isDarkTheme:j}}function hX({payload:_}){if(!_)return null;let[$,j]=m(null),[Q,Z]=m(_?.root?.path||"."),[Y,q]=m(()=>[_?.root?.path||"."]),[G,K]=m(!1);g(()=>{let H=_?.root?.path||".";Z(H),q([H]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Q)return;K(!0);let H=setTimeout(()=>K(!1),180);return()=>clearTimeout(H)},[Q]);let X=f0(()=>{return V3(_.root,Q)||_.root},[_?.root,Q]),N=X?.size||_.totalSize||0,{segments:V,legend:B}=f0(()=>{let H=Nj(X,N,_.isDarkTheme);if(H.segments.length>0)return H;if(N<=0)return H;let S=X?.children?.length?"Total":"[files]";return Vj(S,X?.path||_?.root?.path||".",N,_.isDarkTheme)},[X,N,_.isDarkTheme,_?.root?.path]),[O,E]=m(V),M=C(new Map),A=C(0);g(()=>{let H=M.current,S=new Map(V.map((_0)=>[_0.key,_0])),p=performance.now(),Q0=220,l=(_0)=>{let e=Math.min(1,(_0-p)/220),Y0=e*(2-e),G0=V.map((X0)=>{let D0=H.get(X0.key)||{startAngle:X0.startAngle,endAngle:X0.startAngle,innerRadius:X0.innerRadius,outerRadius:X0.innerRadius},A0=(o0,g0)=>o0+(g0-o0)*Y0,n0=A0(D0.startAngle,X0.startAngle),x0=A0(D0.endAngle,X0.endAngle),k0=A0(D0.innerRadius,X0.innerRadius),r0=A0(D0.outerRadius,X0.outerRadius);return{...X0,d:W3(120,120,k0,r0,n0,x0)}});if(E(G0),e<1)A.current=requestAnimationFrame(l)};if(A.current)cancelAnimationFrame(A.current);return A.current=requestAnimationFrame(l),M.current=S,()=>{if(A.current)cancelAnimationFrame(A.current)}},[V]);let J=O.length?O:V,D=N>0?f_(N):"0 B",I=X?.name||"",h=(I&&I!=="."?I:"Total")||"Total",o=D,t=Y.length>1,R=(H)=>{if(!H?.path)return;let S=V3(_.root,H.path);if(!S||!Array.isArray(S.children)||S.children.length===0)return;q((p)=>[...p,S.path]),Z(S.path),j(null)},x=()=>{if(!t)return;q((H)=>{let S=H.slice(0,-1);return Z(S[S.length-1]||_?.root?.path||"."),S}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
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
                        <title>${H.label} — ${f_(H.size)}</title>
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
                            <span class="workspace-folder-starburst-size">${f_(H.size)}</span>
                            <span class="workspace-folder-starburst-pct">${H.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function pX({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;F5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?f_($.metadata.size):"";return L`
        <a href=${w_(_)} download=${Q} class="file-attachment"
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
    `}function Bj({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:G=!1}){let[K,X]=m(null),[N,V]=m(new Set(["."])),[B,O]=m(null),[E,M]=m(null),[A,J]=m(""),[D,I]=m(null),[d,h]=m(null),[o,t]=m(!0),[R,x]=m(!1),[H,S]=m(null),[p,Q0]=m(()=>z5("workspaceShowHidden",!1)),[l,_0]=m(!1),[e,Y0]=m(null),[G0,X0]=m(null),[H0,D0]=m(null),[A0,n0]=m(!1),[x0,k0]=m(null),[r0,o0]=m(()=>$j()),[g0,a0]=m(()=>G3({stored:H_(Z6),...q3()})),[m0,_1]=m(!1),z0=C(N),p0=C(""),$1=C(null),Z1=C(0),q_=C(new Set),D1=C(null),e0=C(new Map),h1=C(_),M1=C(Q),Y1=C(null),h0=C(null),x1=C(null),k1=C(null),s=C(null),N0=C(null),L0=C("."),q0=C(null),y0=C({path:null,dragging:!1,startX:0,startY:0}),C0=C({path:null,dragging:!1,startX:0,startY:0}),v0=C({path:null,timer:0}),M0=C(!1),R0=C(0),d0=C(new Map),O0=C(null),b0=C(null),J0=C(null),j0=C(null),y=C(null),a=C(null),U0=C(p),E0=C($),u0=C(j??$),q1=C(0),A1=C(H0),X1=C(l),p1=C(e),Z4=C(null),B_=C({x:0,y:0}),__=C(0),W_=C(null),G_=C(B),j1=C(E),r1=C(null),Y4=C(D);h1.current=_,M1.current=Q,g(()=>{z0.current=N},[N]),g(()=>{U0.current=p},[p]),g(()=>{E0.current=$},[$]),g(()=>{u0.current=j??$},[j,$]),g(()=>{A1.current=H0},[H0]),g(()=>{if(typeof window>"u")return;let z=()=>{a0(G3({stored:H_(Z6),...q3()}))};z();let T=()=>z(),w=()=>z(),f=($0)=>{if(!$0||$0.key===null||$0.key===Z6)z()};window.addEventListener("resize",T),window.addEventListener("focus",w),window.addEventListener("storage",f);let r=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),V0=($0,T0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",T0);else if($0.addListener)$0.addListener(T0)},B0=($0,T0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",T0);else if($0.removeListener)$0.removeListener(T0)};return V0(r,T),V0(Z0,T),()=>{window.removeEventListener("resize",T),window.removeEventListener("focus",w),window.removeEventListener("storage",f),B0(r,T),B0(Z0,T)}},[]),g(()=>{let z=(T)=>{let w=T?.detail?.path;if(!w)return;let f=w.split("/"),r=[];for(let Z0=1;Z0<f.length;Z0++)r.push(f.slice(0,Z0).join("/"));if(r.length)V((Z0)=>{let V0=new Set(Z0);V0.add(".");for(let B0 of r)V0.add(B0);return V0});O(w),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",z),()=>window.removeEventListener("workspace-reveal-path",z)},[]),g(()=>{X1.current=l},[l]),g(()=>{p1.current=e},[e]),g(()=>{G_.current=B},[B]),g(()=>{j1.current=E},[E]),g(()=>{Y4.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let z=()=>o0($j());z();let T=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>z();if(T?.addEventListener)T.addEventListener("change",w);else if(T?.addListener)T.addListener(w);let f=typeof MutationObserver<"u"?new MutationObserver(()=>z()):null;if(f?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)f?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(T?.removeEventListener)T.removeEventListener("change",w);else if(T?.removeListener)T.removeListener(w);f?.disconnect()}},[]),g(()=>{if(!E)return;let z=s.current;if(!z)return;let T=requestAnimationFrame(()=>{try{z.focus(),z.select()}catch{}});return()=>cancelAnimationFrame(T)},[E]),g(()=>{if(!m0)return;let z=(w)=>{let f=w?.target;if(!(f instanceof Element))return;if(y.current?.contains(f))return;if(a.current?.contains(f))return;_1(!1)},T=(w)=>{if(w?.key==="Escape")_1(!1),a.current?.focus?.()};return document.addEventListener("mousedown",z),document.addEventListener("touchstart",z,{passive:!0}),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("touchstart",z),document.removeEventListener("keydown",T)}},[m0]);let v_=async(z,T={})=>{let w=Boolean(T?.autoOpen),f=String(z||"").trim();x(!0),I(null),h(null);try{let r=await d5(f,20000);if(w&&f&&e9(f,r,{resolvePane:(Z0)=>i0.resolve(Z0)}))return M1.current?.(f,r),r;return I(r),r}catch(r){let Z0={error:r.message||"Failed to load preview"};return I(Z0),Z0}finally{x(!1)}};Y1.current=v_;let _5=async()=>{if(!E0.current)return;try{let z=await l5("",1,U0.current),T=_j(z.root,z0.current,U0.current);if(T===p0.current){t(!1);return}if(p0.current=T,$1.current=z.root,!Z1.current)Z1.current=requestAnimationFrame(()=>{Z1.current=0,X((w)=>B3(w,$1.current)),t(!1)})}catch(z){S(z.message||"Failed to load workspace"),t(!1)}},v4=async(z)=>{if(!z)return;if(q_.current.has(z))return;q_.current.add(z);try{let T=await l5(z,1,U0.current);X((w)=>N3(w,z,T.root))}catch(T){S(T.message||"Failed to load workspace")}finally{q_.current.delete(z)}};h0.current=v4;let u1=P(()=>{let z=B;if(!z)return".";let T=e0.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[B]),U_=P((z)=>{let T=z?.closest?.(".workspace-row");if(!T)return null;let w=T.dataset.path,f=T.dataset.type;if(!w)return null;if(f==="dir")return w;if(w.includes("/")){let r=w.split("/");return r.pop(),r.join("/")||"."}return"."},[]),y1=P((z)=>{return U_(z?.target||null)},[U_]),E1=P((z)=>{A1.current=z,D0(z)},[]),K1=P(()=>{let z=v0.current;if(z?.timer)clearTimeout(z.timer);v0.current={path:null,timer:0}},[]),u_=P((z)=>{if(!z||z==="."){K1();return}let T=e0.current?.get(z);if(!T||T.type!=="dir"){K1();return}if(z0.current?.has(z)){K1();return}if(v0.current?.path===z)return;K1();let w=setTimeout(()=>{v0.current={path:null,timer:0},h0.current?.(z),V((f)=>{let r=new Set(f);return r.add(z),r})},600);v0.current={path:z,timer:w}},[K1]),b_=P((z,T)=>{if(B_.current={x:z,y:T},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let w=Z4.current;if(!w)return;let f=B_.current;w.style.transform=`translate(${f.x+12}px, ${f.y+12}px)`})},[]),N1=P((z)=>{if(!z)return;let w=(e0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w)return;X0({path:z,label:w})},[]),X_=P(()=>{if(X0(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(Z4.current)Z4.current.style.transform="translate(-9999px, -9999px)"},[]),c0=P((z)=>{if(!z)return".";let T=e0.current?.get(z);if(T&&T.type==="dir")return T.path;if(z==="."||!z.includes("/"))return".";let w=z.split("/");return w.pop(),w.join("/")||"."},[]),C1=P(()=>{M(null),J("")},[]),A_=P((z)=>{if(!z)return;let w=(e0.current?.get(z)?.name||z.split("/").pop()||z).trim();if(!w||z===".")return;M(z),J(w)},[]),$_=P(async()=>{let z=j1.current;if(!z)return;let T=(A||"").trim();if(!T){C1();return}let w=e0.current?.get(z),f=(w?.name||z.split("/").pop()||z).trim();if(T===f){C1();return}try{let Z0=(await r6(z,T))?.path||z,V0=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(C1(),S(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:z,newPath:Z0,type:w?.type||"file"}})),w?.type==="dir")V((B0)=>{let $0=new Set;for(let T0 of B0)if(T0===z)$0.add(Z0);else if(T0.startsWith(`${z}/`))$0.add(`${Z0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(Z0),w?.type==="dir")I(null),x(!1),h(null);else Y1.current?.(Z0);h0.current?.(V0)}catch(r){S(r?.message||"Failed to rename file")}},[C1,A]),u4=P(async(z)=>{let f=z||".";for(let r=0;r<50;r+=1){let V0=`untitled${r===0?"":`-${r}`}.md`;try{let $0=(await n6(f,V0,""))?.path||(f==="."?V0:`${f}/${V0}`);if(f&&f!==".")V((T0)=>new Set([...T0,f]));O($0),S(null),h0.current?.(f),Y1.current?.($0);return}catch(B0){if(B0?.status===409||B0?.code==="file_exists")continue;S(B0?.message||"Failed to create file");return}}S("Failed to create file (untitled name already in use).")},[]),o_=P((z)=>{if(z?.stopPropagation?.(),A0)return;let T=c0(G_.current);u4(T)},[A0,c0,u4]);g(()=>{if(typeof window>"u")return;let z=(T)=>{let w=T?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;X((B0)=>{let $0=B0;for(let T0 of w){if(!T0?.root)continue;if(!$0||T0.path==="."||!T0.path)$0=T0.root;else $0=N3($0,T0.path,T0.root)}if($0)p0.current=_j($0,z0.current,U0.current);return t(!1),$0});let f=G_.current;if(Boolean(f)&&w.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)||$0.startsWith(`${f}/`)}))d0.current.clear();if(!f||!Y4.current)return;let Z0=e0.current?.get(f);if(Z0&&Z0.type==="dir")return;if(w.some((B0)=>{let $0=B0?.path||"";if(!$0||$0===".")return!0;return f===$0||f.startsWith(`${$0}/`)}))Y1.current?.(f)};return window.addEventListener("workspace-update",z),()=>window.removeEventListener("workspace-update",z)},[]),D1.current=_5;let b4=C(()=>{if(typeof window>"u")return;let z=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),T=u0.current??E0.current,w=document.visibilityState!=="hidden"&&(T||z.matches&&E0.current);i5(w,U0.current).catch(()=>{})}).current,s_=C(0),$5=C(()=>{if(s_.current)clearTimeout(s_.current);s_.current=setTimeout(()=>{s_.current=0,b4()},250)}).current;g(()=>{if(E0.current)D1.current?.();$5()},[$,j]),g(()=>{D1.current(),b4();let z=setInterval(()=>D1.current(),uX),T=H5("previewHeight",null),w=Number.isFinite(T)?Math.min(Math.max(T,80),600):280;if(R0.current=w,x1.current)x1.current.style.setProperty("--preview-height",`${w}px`);let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>$5();if(f.addEventListener)f.addEventListener("change",r);else if(f.addListener)f.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(z),Z1.current)cancelAnimationFrame(Z1.current),Z1.current=0;if(f.removeEventListener)f.removeEventListener("change",r);else if(f.removeListener)f.removeListener(r);if(document.removeEventListener("visibilitychange",r),s_.current)clearTimeout(s_.current),s_.current=0;if(q0.current)clearTimeout(q0.current),q0.current=null;i5(!1,U0.current).catch(()=>{})}},[]);let a_=f0(()=>Zj(K,N,p),[K,N,p]),g_=f0(()=>new Map(a_.map((z)=>[z.node.path,z.node])),[a_]),P5=f0(()=>t9(g0),[g0]);e0.current=g_;let V1=(B?e0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!V1){k0(null),O0.current=null,b0.current=null;return}let z=B,T=`${p?"hidden":"visible"}:${B}`,w=d0.current,f=w.get(T);if(f?.root){w.delete(T),w.set(T,f);let V0=jj(f.root,Boolean(f.truncated),r0);if(V0)O0.current=V0,b0.current=B,k0({loading:!1,error:null,payload:V0});return}let r=O0.current,Z0=b0.current;k0({loading:!0,error:null,payload:Z0===B?r:null}),l5(B,gX,p).then((V0)=>{if(G_.current!==z)return;let B0={root:V0?.root,truncated:Boolean(V0?.truncated)};w.delete(T),w.set(T,B0);while(w.size>mX){let T0=w.keys().next().value;if(!T0)break;w.delete(T0)}let $0=jj(B0.root,B0.truncated,r0);O0.current=$0,b0.current=B,k0({loading:!1,error:null,payload:$0})}).catch((V0)=>{if(G_.current!==z)return;k0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:Z0===B?r:null})})},[B,V1,p,r0]);let R1=Boolean(D&&D.kind==="text"&&!V1&&(!D.size||D.size<=262144)),j5=R1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",E_=Boolean(B&&B!=="."),j_=Boolean(B&&!V1),c1=Boolean(B&&!V1),P1=B&&V1?P8(B,p):null,b1=P(()=>_1(!1),[]),F1=P(async(z)=>{b1();try{await z?.()}catch(T){console.warn("[workspace-explorer] Header menu action failed:",T)}},[b1]);g(()=>{let z=J0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!z)return;if(z.innerHTML="",!B||V1||!D||D.error)return;let T={path:B,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},w=i0.resolve(T)||i0.get("workspace-preview-default");if(!w)return;let f=w.mount(z,T);return j0.current=f,()=>{if(j0.current===f)f.dispose(),j0.current=null;z.innerHTML=""}},[B,V1,D]);let M_=(z)=>{let T=z?.target;if(T instanceof Element)return T;return T?.parentElement||null},k_=(z)=>{return Boolean(z?.closest?.(".workspace-node-icon, .workspace-label-text"))},I_=C((z)=>{let T=M_(z),w=T?.closest?.("[data-path]");if(!w)return;let f=w.dataset.path;if(!f||f===".")return;let r=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),Z0=Boolean(T?.closest?.(".workspace-caret"));if(r||Z0)return;if(j1.current===f)return;A_(f)}).current,t_=C((z)=>{if(M0.current){M0.current=!1;return}let T=M_(z),w=T?.closest?.("[data-path]");if(k1.current?.focus?.(),!w)return;let f=w.dataset.path,r=w.dataset.type,Z0=Boolean(T?.closest?.(".workspace-caret")),V0=Boolean(T?.closest?.("button"))||Boolean(T?.closest?.("a"))||Boolean(T?.closest?.("input")),B0=G_.current===f,$0=j1.current;if($0){if($0===f)return;C1()}let T0=r==="file"&&r1.current===f&&!Z0&&!V0;if(r==="dir"){if(r1.current=null,O(f),I(null),h(null),x(!1),!z0.current.has(f))h0.current?.(f);if(B0&&!Z0)return;V((Z_)=>{let l1=new Set(Z_);if(l1.has(f))l1.delete(f);else l1.add(f);return l1})}else{r1.current=null,O(f);let w1=e0.current.get(f);if(w1)h1.current?.(w1.path,w1);if(!V0&&!Z0&&bX(f))M1.current?.(f,Y4.current);else{let l1=!V0&&!Z0;Y1.current?.(f,{autoOpen:l1})}}}).current,Q_=C(()=>{p0.current="",D1.current(),Array.from(z0.current||[]).filter((T)=>T&&T!==".").forEach((T)=>h0.current?.(T))}).current,o1=C(()=>{r1.current=null,O(null),I(null),h(null),x(!1)}).current,T_=C(()=>{Q0((z)=>{let T=!z;if(typeof window<"u")G1("workspaceShowHidden",String(T));return U0.current=T,i5(!0,T).catch(()=>{}),p0.current="",D1.current?.(),Array.from(z0.current||[]).filter((f)=>f&&f!==".").forEach((f)=>h0.current?.(f)),T})}).current,q4=C((z)=>{if(M_(z)?.closest?.("[data-path]"))return;o1()}).current,z1=P(async(z)=>{if(!z)return;let T=z.split("/").pop()||z;if(!window.confirm(`Delete "${T}"? This cannot be undone.`))return;try{await s6(z);let f=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(G_.current===z)o1();h0.current?.(f),S(null)}catch(f){I((r)=>({...r||{},error:f.message||"Failed to delete file"}))}},[o1]),e_=P((z)=>{let T=k1.current;if(!T||!z||typeof CSS>"u"||typeof CSS.escape!=="function")return;T.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),g4=P((z)=>{let T=a_;if(!T||T.length===0)return;let w=B?T.findIndex((f)=>f.node.path===B):-1;if(z.key==="ArrowDown"){z.preventDefault();let f=Math.min(w+1,T.length-1),r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")h1.current?.(r.node.path,r.node),Y1.current?.(r.node.path);else I(null),x(!1),h(null);e_(r.node.path);return}if(z.key==="ArrowUp"){z.preventDefault();let f=w<=0?0:w-1,r=T[f];if(!r)return;if(O(r.node.path),r.node.type!=="dir")h1.current?.(r.node.path,r.node),Y1.current?.(r.node.path);else I(null),x(!1),h(null);e_(r.node.path);return}if(z.key==="ArrowRight"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&!N.has(f.node.path))z.preventDefault(),h0.current?.(f.node.path),V((r)=>new Set([...r,f.node.path]));return}if(z.key==="ArrowLeft"&&w>=0){let f=T[w];if(f?.node?.type==="dir"&&N.has(f.node.path))z.preventDefault(),V((r)=>{let Z0=new Set(r);return Z0.delete(f.node.path),Z0});return}if(z.key==="Enter"&&w>=0){z.preventDefault();let f=T[w];if(!f)return;let r=f.node.path;if(f.node.type==="dir"){if(!z0.current.has(r))h0.current?.(r);V((V0)=>{let B0=new Set(V0);if(B0.has(r))B0.delete(r);else B0.add(r);return B0}),I(null),h(null),x(!1)}else h1.current?.(r,f.node),Y1.current?.(r);return}if((z.key==="Delete"||z.key==="Backspace")&&w>=0){let f=T[w];if(!f||f.node.type==="dir")return;z.preventDefault(),z1(f.node.path);return}if(z.key==="Escape")z.preventDefault(),o1()},[o1,z1,N,a_,e_,B]),m4=P((z)=>{let T=M_(z),w=T?.closest?.(".workspace-row");if(!w)return;let f=w.dataset.type,r=w.dataset.path;if(!r||r===".")return;if(j1.current===r)return;let Z0=z?.touches?.[0];if(!Z0)return;if(y0.current={path:k_(T)?r:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},f!=="file")return;if(q0.current)clearTimeout(q0.current);q0.current=setTimeout(()=>{if(q0.current=null,y0.current?.dragging)return;z1(r)},600)},[z1]),C_=P(()=>{if(q0.current)clearTimeout(q0.current),q0.current=null;let z=y0.current;if(z?.dragging&&z.path){let T=A1.current||u1(),w=W_.current;if(typeof w==="function")w(z.path,T)}y0.current={path:null,dragging:!1,startX:0,startY:0},q1.current=0,_0(!1),Y0(null),E1(null),K1(),X_()},[u1,X_,E1,K1]),h4=P((z)=>{let T=y0.current,w=z?.touches?.[0];if(!w||!T?.path){if(q0.current)clearTimeout(q0.current),q0.current=null;return}let f=Math.abs(w.clientX-T.startX),r=Math.abs(w.clientY-T.startY),Z0=f>8||r>8;if(Z0&&q0.current)clearTimeout(q0.current),q0.current=null;if(!T.dragging&&Z0)T.dragging=!0,_0(!0),Y0("move"),N1(T.path);if(T.dragging){z.preventDefault(),b_(w.clientX,w.clientY);let V0=document.elementFromPoint(w.clientX,w.clientY),B0=U_(V0)||u1();if(A1.current!==B0)E1(B0);u_(B0)}},[U_,u1,N1,b_,E1,u_]),Q5=C((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.clientY,f=R0.current||280,r=z.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=w,V0=($0)=>{Z0=$0.clientY;let T0=T.clientHeight-80,w1=Math.min(Math.max(f-($0.clientY-w),80),T0);T.style.setProperty("--preview-height",`${w1}px`),R0.current=w1},B0=()=>{let $0=T.clientHeight-80,T0=Math.min(Math.max(f-(Z0-w),80),$0);R0.current=T0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("previewHeight",String(Math.round(T0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",B0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",B0)}).current,m_=C((z)=>{z.preventDefault();let T=x1.current;if(!T)return;let w=z.touches[0];if(!w)return;let f=w.clientY,r=R0.current||280,Z0=z.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let V0=($0)=>{let T0=$0.touches[0];if(!T0)return;$0.preventDefault();let w1=T.clientHeight-80,Z_=Math.min(Math.max(r-(T0.clientY-f),80),w1);T.style.setProperty("--preview-height",`${Z_}px`),R0.current=Z_},B0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",G1("previewHeight",String(Math.round(R0.current||r))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",B0),document.removeEventListener("touchcancel",B0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",B0),document.addEventListener("touchcancel",B0)}).current,h_=async()=>{if(!B)return;try{let z=await i6(B);if(z.media_id)h(z.media_id)}catch(z){I((T)=>({...T||{},error:z.message||"Failed to attach"}))}},J4=async()=>{if(!B||V1)return;await z1(B)},p_=(z)=>{return Array.from(z?.dataTransfer?.types||[]).includes("Files")},p4=P((z)=>{if(!p_(z))return;if(z.preventDefault(),q1.current+=1,!X1.current)_0(!0);Y0("upload");let T=y1(z)||u1();E1(T),u_(T)},[u1,y1,E1,u_]),c_=P((z)=>{if(!p_(z))return;if(z.preventDefault(),z.dataTransfer)z.dataTransfer.dropEffect="copy";if(!X1.current)_0(!0);if(p1.current!=="upload")Y0("upload");let T=y1(z)||u1();if(A1.current!==T)E1(T);u_(T)},[u1,y1,E1,u_]),P_=P((z)=>{if(!p_(z))return;if(z.preventDefault(),q1.current=Math.max(0,q1.current-1),q1.current===0)_0(!1),Y0(null),E1(null),K1()},[E1,K1]),I1=P(async(z,T=".")=>{let w=Array.from(z||[]);if(w.length===0)return;let f=T&&T!==""?T:".",r=f!=="."?f:"workspace root";n0(!0);try{let Z0=null;for(let V0 of w)try{Z0=await T8(V0,f)}catch(B0){let $0=B0?.status,T0=B0?.code;if($0===409||T0==="file_exists"){let w1=V0?.name||"file";if(!window.confirm(`"${w1}" already exists in ${r}. Overwrite?`))continue;Z0=await T8(V0,f,{overwrite:!0})}else throw B0}if(Z0?.path)r1.current=Z0.path,O(Z0.path),Y1.current?.(Z0.path);h0.current?.(f)}catch(Z0){S(Z0.message||"Failed to upload file")}finally{n0(!1)}},[]),O4=P(async(z,T)=>{if(!z)return;let w=e0.current?.get(z);if(!w)return;let f=T&&T!==""?T:".",r=z.includes("/")?z.split("/").slice(0,-1).join("/")||".":".";if(f===r)return;try{let V0=(await o6(z,f))?.path||z;if(w.type==="dir")V((B0)=>{let $0=new Set;for(let T0 of B0)if(T0===z)$0.add(V0);else if(T0.startsWith(`${z}/`))$0.add(`${V0}${T0.slice(z.length)}`);else $0.add(T0);return $0});if(O(V0),w.type==="dir")I(null),x(!1),h(null);else Y1.current?.(V0);h0.current?.(r),h0.current?.(f)}catch(Z0){S(Z0?.message||"Failed to move entry")}},[]);W_.current=O4;let D4=P(async(z)=>{if(!p_(z))return;z.preventDefault(),q1.current=0,_0(!1),Y0(null),D0(null),K1();let T=Array.from(z?.dataTransfer?.files||[]);if(T.length===0)return;let w=A1.current||y1(z)||u1();await I1(T,w)},[u1,y1,I1]),c4=P((z)=>{if(z?.stopPropagation?.(),A0)return;let T=z?.currentTarget?.dataset?.uploadTarget||".";L0.current=T,N0.current?.click()},[A0]),U1=P(()=>{if(A0)return;let z=G_.current,T=z?e0.current?.get(z):null;L0.current=T?.type==="dir"?T.path:".",N0.current?.click()},[A0]),A4=P(()=>{F1(()=>o_(null))},[F1,o_]),Z5=P(()=>{F1(()=>U1())},[F1,U1]),g1=P(()=>{F1(()=>Q_())},[F1,Q_]),K_=P(()=>{F1(()=>T_())},[F1,T_]),_4=P(()=>{if(!B||!R1)return;F1(()=>M1.current?.(B,D))},[F1,B,R1,D]),l4=P(()=>{if(!B||B===".")return;F1(()=>A_(B))},[F1,B,A_]),G4=P(()=>{if(!B||V1)return;F1(()=>J4())},[F1,B,V1,J4]),E4=P(()=>{if(!B||V1)return;F1(()=>h_())},[F1,B,V1,h_]),X4=P(()=>{if(!P1)return;if(b1(),typeof window<"u")window.open(P1,"_blank","noopener")},[b1,P1]),S_=P(()=>{b1(),Z?.()},[b1,Z]),L_=P(()=>{b1(),Y?.()},[b1,Y]),M4=P(()=>{b1(),q?.()},[b1,q]),d4=P((z)=>{if(!z||z.button!==0)return;let T=z.currentTarget;if(!T||!T.dataset)return;let w=T.dataset.path;if(!w||w===".")return;if(j1.current===w)return;let f=M_(z);if(f?.closest?.("button, a, input, .workspace-caret"))return;if(!k_(f))return;z.preventDefault(),C0.current={path:w,dragging:!1,startX:z.clientX,startY:z.clientY};let r=(V0)=>{let B0=C0.current;if(!B0?.path)return;let $0=Math.abs(V0.clientX-B0.startX),T0=Math.abs(V0.clientY-B0.startY),w1=$0>4||T0>4;if(!B0.dragging&&w1)B0.dragging=!0,M0.current=!0,_0(!0),Y0("move"),N1(B0.path),b_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(B0.dragging){V0.preventDefault(),b_(V0.clientX,V0.clientY);let Z_=document.elementFromPoint(V0.clientX,V0.clientY),l1=U_(Z_)||u1();if(A1.current!==l1)E1(l1);u_(l1)}},Z0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Z0);let V0=C0.current;if(V0?.dragging&&V0.path){let B0=A1.current||u1(),$0=W_.current;if(typeof $0==="function")$0(V0.path,B0)}C0.current={path:null,dragging:!1,startX:0,startY:0},q1.current=0,_0(!1),Y0(null),E1(null),K1(),X_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{M0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Z0)},[U_,u1,N1,b_,X_,E1,u_,K1]),x_=P(async(z)=>{let T=Array.from(z?.target?.files||[]);if(T.length===0)return;let w=L0.current||".";if(await I1(T,w),L0.current=".",z?.target)z.target.value=""},[I1]);return L`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${g0}
            ref=${x1}
            onDragEnter=${p4}
            onDragOver=${c_}
            onDragLeave=${P_}
            onDrop=${D4}
        >
            <input type="file" multiple style="display:none" ref=${N0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${a}
                            class=${`workspace-menu-button${m0?" active":""}`}
                            onClick=${(z)=>{z.stopPropagation(),_1((T)=>!T)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${m0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${m0&&L`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${A0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${Z5} disabled=${A0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${g1}>Refresh tree</button>
                                <button class=${`workspace-menu-item${p?" active":""}`} role="menuitem" onClick=${K_}>
                                    ${p?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${B&&L`<div class="workspace-menu-separator"></div>`}
                                ${B&&!V1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_4} disabled=${!R1}>Open in editor</button>
                                `}
                                ${E_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${l4}>Rename selected</button>
                                `}
                                ${c1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${E4}>Download selected file</button>
                                `}
                                ${P1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X4}>Download selected folder (zip)</button>
                                `}
                                ${j_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${G4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M4}>
                                        ${G?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${o_} title="New file" disabled=${A0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Q_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${q4}>
                ${A0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${o&&L`<div class="workspace-loading">Loading…</div>`}
                ${H&&L`<div class="workspace-error">${H}</div>`}
                ${K&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${k1}
                        tabIndex="0"
                        onClick=${t_}
                        onDblClick=${I_}
                        onKeyDown=${g4}
                        onTouchStart=${m4}
                        onTouchEnd=${C_}
                        onTouchMove=${h4}
                        onTouchCancel=${C_}
                    >
                        ${a_.map(({node:z,depth:T})=>{let w=z.type==="dir",f=z.path===B,r=z.path===E,Z0=w&&N.has(z.path),V0=H0&&z.path===H0,B0=Array.isArray(z.children)&&z.children.length>0?z.children.length:Number(z.child_count)||0;return L`
                                <div
                                    key=${z.path}
                                    class=${`workspace-row${f?" selected":""}${V0?" drop-target":""}`}
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
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),$_();else if($0.key==="Escape")$0.preventDefault(),C1()}}
                                                onBlur=${C1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${z.name}</span></span>`}
                                    ${w&&!Z0&&B0>0&&L`
                                        <span class="workspace-count">${B0}</span>
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
                <div class="workspace-preview-splitter-h" onMouseDown=${Q5} onTouchStart=${m_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${o_} title="New file" disabled=${A0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!V1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>R1&&M1.current?.(B,D)}
                                    title=${j5}
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
                                    onClick=${J4}
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
                            ${V1?L`
                                    <button class="workspace-download" onClick=${U1}
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
                                    </a>`:L`<button class="workspace-download" onClick=${h_} title="Download">
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
                    ${V1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&L`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&L`
                            <${hX} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!V1&&L`
                        <div class="workspace-preview-body" ref=${J0}></div>
                    `}
                    ${d&&L`
                        <div class="workspace-download-card">
                            <${pX} mediaId=${d} />
                        </div>
                    `}
                </div>
            `}
            ${G0&&L`
                <div class="workspace-drag-ghost" ref=${Z4}>${G0.label}</div>
            `}
        </aside>
    `}var cX=new Set(["kanban-editor","mindmap-editor"]);function lX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function Wj(_,$,j){let Q=lX(_,$,j);return Q!=null&&cX.has(Q)}var dX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,iX=/\.(csv|tsv)$/i,nX=/\.pdf$/i,rX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Uj=/\.drawio(\.xml|\.svg|\.png)?$/i;function Lj({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:G,onEditSource:K,previewTabs:X,paneOverrides:N,onToggleDock:V,dockVisible:B,onToggleZen:O,zenMode:E,onPopOutTab:M}){let[A,J]=m(null),D=C(null);g(()=>{if(!A)return;let H=(S)=>{if(S.type==="keydown"&&S.key!=="Escape")return;J(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[A]),g(()=>{let H=(S)=>{if(S.ctrlKey&&S.key==="Tab"){if(S.preventDefault(),!_.length)return;let p=_.findIndex((Q0)=>Q0.id===$);if(S.shiftKey){let Q0=_[(p-1+_.length)%_.length];j?.(Q0.id)}else{let Q0=_[(p+1)%_.length];j?.(Q0.id)}return}if((S.ctrlKey||S.metaKey)&&S.key==="w"){let p=document.querySelector(".editor-pane");if(p&&p.contains(document.activeElement)){if(S.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Q]);let I=P((H,S)=>{if(H.button===1){H.preventDefault(),Q?.(S);return}if(H.button===0)j?.(S)},[j,Q]),d=P((H,S)=>{H.preventDefault(),J({id:S,x:H.clientX,y:H.clientY})},[]),h=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),o=P((H,S)=>{H.preventDefault(),H.stopPropagation(),Q?.(S)},[Q]);g(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let t=P((H)=>{if(!(N instanceof Map))return null;return N.get(H)||null},[N]),R=f0(()=>_.find((H)=>H.id===A?.id)||null,[A?.id,_]),x=f0(()=>{let H=A?.id;if(!H)return!1;return Wj(H,t(H),(S)=>i0.resolve(S))},[A?.id,t]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((H)=>L`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(S)=>I(S,H.id)}
                    onContextMenu=${(S)=>d(S,H.id)}
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
                ${M&&L`
                    <button onClick=${()=>{let H=_.find((S)=>S.id===A.id);M(A.id,H?.label),J(null)}}>Open in Window</button>
                `}
                ${G&&/\.(md|mdx|markdown)$/i.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(A.id),J(null)}}>
                        ${X?.has(A.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${dX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id),S=A.id.split("/").pop()||"document",p="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(S);window.open(p,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${iX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${nX.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${rX.test(A.id)&&!Uj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
                ${Uj.test(A.id)&&L`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(A.id);window.open(H,"_blank","noopener"),J(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var oX=400,U3=60,Fj=220,L3="mdPreviewHeight";function sX(){try{let _=localStorage.getItem(L3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U3?$:Fj}catch{return Fj}}function F3({getContent:_,path:$,onClose:j}){let[Q,Z]=m(""),[Y,q]=m(sX),G=C(null),K=C(null),X=C(""),N=C(_);return N.current=_,g(()=>{let O=()=>{let M=N.current?.()||"";if(M===X.current)return;X.current=M;try{let A=J_(M,null,{sanitize:!1});Z(A)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};O();let E=setInterval(O,oX);return()=>clearInterval(E)},[]),g(()=>{if(G.current&&Q)B4(G.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(O)=>{O.preventDefault();let E=O.clientY,M=K.current?.offsetHeight||Y,A=K.current?.parentElement,J=A?A.offsetHeight*0.7:500,D=O.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(h)=>{let o=Math.min(Math.max(M-(h.clientY-E),U3),J);q(o)},d=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(L3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",d)}}
            onTouchStart=${(O)=>{O.preventDefault();let E=O.touches[0];if(!E)return;let M=E.clientY,A=K.current?.offsetHeight||Y,J=K.current?.parentElement,D=J?J.offsetHeight*0.7:500,I=O.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let d=(o)=>{let t=o.touches[0];if(!t)return;o.preventDefault();let R=Math.min(Math.max(A-(t.clientY-M),U3),D);q(R)},h=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(L3,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",d),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
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
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function zj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=C(_);Y.current=_;let q=C($);q.current=$;let G=C(j);G.current=j;let K=C(Q);K.current=Q,g(()=>{let X=new S8((V,B)=>Y.current(V,B),(V)=>q.current(V),{chatJid:Z});X.connect();let N=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")K.current?.()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),X.disconnect()}},[Z])}function Hj(){let[_,$]=m(!1),[j,Q]=m("default"),Z=C(!1);g(()=>{let K=z5("notificationsEnabled",!1);if(Z.current=K,$(K),typeof Notification<"u")Q(Notification.permission)},[]),g(()=>{Z.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await Y();if(Q(X||"default"),X!=="granted"){Z.current=!1,$(!1),G1("notificationsEnabled","false");return}}let K=!Z.current;Z.current=K,$(K),G1("notificationsEnabled",String(K))},[Y]),G=P((K,X)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let N=new Notification(K,{body:X});return N.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:G}}var K8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Jj({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=m(null),[Y,q]=m(!1),G=C(!1),K=C(null),X=C(!1),N=C(null),V=C(null),B=C(0);g(()=>{G.current=Y},[Y]),g(()=>{V.current=Q},[Q]),g(()=>{B.current+=1,N.current=null,X.current=!1,G.current=!1,q(!1)},[j]);let O=P(async(A=null)=>{let J=B.current;try{if(A){let D=await y6(A,50,0,j);if(J!==B.current)return;Z(D.posts),q(!1)}else{let D=await n4(10,null,j);if(J!==B.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(J!==B.current)return;console.error("Failed to load posts:",D)}},[j]),E=P(async()=>{let A=B.current;try{let J=await n4(10,null,j);if(A!==B.current)return;Z((D)=>{if(!D||D.length===0)return J.posts;return K8([...J.posts,...D])}),q((D)=>D||J.has_more)}catch(J){if(A!==B.current)return;console.error("Failed to refresh timeline:",J)}},[j]),M=P(async(A={})=>{let J=B.current,D=V.current;if(!D||D.length===0)return;if(X.current)return;let{preserveScroll:I=!0,preserveMode:d="top",allowRepeat:h=!1}=A,o=(x)=>{if(!I){x();return}if(d==="top")$(x);else _(x)},R=D.slice().sort((x,H)=>x.id-H.id)[0]?.id;if(!Number.isFinite(R))return;if(!h&&N.current===R)return;X.current=!0,N.current=R;try{let x=await n4(10,R,j);if(J!==B.current)return;if(x.posts.length>0)o(()=>{Z((H)=>K8([...x.posts,...H||[]])),q(x.has_more)});else q(!1)}catch(x){if(J!==B.current)return;console.error("Failed to load more posts:",x)}finally{if(J===B.current)X.current=!1}},[j,_,$]);return g(()=>{K.current=M},[M]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:G,loadPosts:O,refreshTimeline:E,loadMore:M,loadMoreRef:K,loadingMoreRef:X,lastBeforeIdRef:N}}function Oj(){let[_,$]=m(null),[j,Q]=m({text:"",totalLines:0}),[Z,Y]=m(""),[q,G]=m({text:"",totalLines:0}),[K,X]=m(null),[N,V]=m(null),[B,O]=m(null),E=C(null),M=C(0),A=C(!1),J=C(""),D=C(""),I=C(null),d=C(null),h=C(null),o=C(null),t=C(!1),R=C(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:G,pendingRequest:K,setPendingRequest:X,currentTurnId:N,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:O,lastAgentEventRef:E,lastSilenceNoticeRef:M,isAgentRunningRef:A,draftBufferRef:J,thoughtBufferRef:D,pendingRequestRef:I,stalledPostIdRef:d,currentTurnIdRef:h,steerQueuedTurnIdRef:o,thoughtExpandedRef:t,draftExpandedRef:R}}function Dj({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=$.current||280,E=N.currentTarget;E.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=B,A=(D)=>{M=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${I}px`),$.current=I},J=()=>{let D=Math.min(Math.max(O+(M-B),160),600);$.current=D,E.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",G1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,Y=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=$.current||280,M=N.currentTarget;M.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let d=Math.min(Math.max(E+(I.clientX-O),160),600);V.style.setProperty("--sidebar-width",`${d}px`),$.current=d},J=()=>{M.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",G1("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,q=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientX,O=j.current||$.current||280,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=B,A=(D)=>{M=D.clientX;let I=Math.min(Math.max(O+(D.clientX-B),200),800);V.style.setProperty("--editor-width",`${I}px`),j.current=I},J=()=>{let D=Math.min(Math.max(O+(M-B),200),800);j.current=D,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,G=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientX,E=j.current||$.current||280,M=N.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let d=Math.min(Math.max(E+(I.clientX-O),200),800);V.style.setProperty("--editor-width",`${d}px`),j.current=d},J=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",G1("editorWidth",String(Math.round(j.current||E))),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current,K=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.clientY,O=Q?.current||200,E=N.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=B,A=(D)=>{M=D.clientY;let I=Math.min(Math.max(O-(D.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${I}px`),Q)Q.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{let D=Math.min(Math.max(O-(M-B),100),window.innerHeight*0.5);if(Q)Q.current=D;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",G1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",J)}).current,X=C((N)=>{N.preventDefault();let V=_.current;if(!V)return;let B=N.touches[0];if(!B)return;let O=B.clientY,E=Q?.current||200,M=N.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let A=(D)=>{let I=D.touches[0];if(!I)return;D.preventDefault();let d=Math.min(Math.max(E-(I.clientY-O),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${d}px`),Q)Q.current=d;window.dispatchEvent(new CustomEvent("dock-resize"))},J=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",G1("dockHeight",String(Math.round(Q?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",J),document.removeEventListener("touchcancel",J)};document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",J),document.addEventListener("touchcancel",J)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:X}}function aX(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,G]of _.entries()){let K=q;if(Q==="dir"){if(q===$)K=j,Z=!0;else if(q.startsWith(`${$}/`))K=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)K=j,Z=!0;Y.set(K,G)}return Z?Y:_}function Aj({onTabClosed:_}={}){let $=C(_);$.current=_;let[j,Q]=m(()=>s0.getTabs()),[Z,Y]=m(()=>s0.getActiveId()),[q,G]=m(()=>s0.getTabs().length>0);g(()=>{return s0.onChange((R,x)=>{Q(R),Y(x),G(R.length>0)})},[]);let[K,X]=m(()=>new Set),[N,V]=m(()=>new Map),B=P((R)=>{X((x)=>{let H=new Set(x);if(H.has(R))H.delete(R);else H.add(R);return H})},[]),O=P((R)=>{X((x)=>{if(!x.has(R))return x;let H=new Set(x);return H.delete(R),H})},[]),E=P((R)=>{V((x)=>{if(!x.has(R))return x;let H=new Map(x);return H.delete(R),H})},[]),M=P((R,x={})=>{if(!R)return;let H=typeof x?.paneOverrideId==="string"&&x.paneOverrideId.trim()?x.paneOverrideId.trim():null,S={path:R,mode:"edit"};try{if(!(H?i0.get(H):i0.resolve(S))){if(!i0.get("editor")){console.warn(`[openEditor] No pane handler for: ${R}`);return}}}catch(Q0){console.warn(`[openEditor] paneRegistry.resolve() error for "${R}":`,Q0)}let p=typeof x?.label==="string"&&x.label.trim()?x.label.trim():void 0;if(s0.open(R,p),H)V((Q0)=>{if(Q0.get(R)===H)return Q0;let l=new Map(Q0);return l.set(R,H),l})},[]),A=P(()=>{let R=s0.getActiveId();if(R){let x=s0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}s0.close(R),O(R),E(R),$.current?.(R)}},[E,O]),J=P((R)=>{let x=s0.get(R);if(x?.dirty){if(!window.confirm(`"${x.label}" has unsaved changes. Close anyway?`))return}s0.close(R),O(R),E(R),$.current?.(R)},[E,O]),D=P((R)=>{s0.activate(R)},[]),I=P((R)=>{let x=s0.getTabs().filter((p)=>p.id!==R&&!p.pinned),H=x.filter((p)=>p.dirty).length;if(H>0){if(!window.confirm(`${H} unsaved tab${H>1?"s":""} will be closed. Continue?`))return}let S=x.map((p)=>p.id);s0.closeOthers(R),S.forEach((p)=>{O(p),E(p),$.current?.(p)})},[E,O]),d=P(()=>{let R=s0.getTabs().filter((S)=>!S.pinned),x=R.filter((S)=>S.dirty).length;if(x>0){if(!window.confirm(`${x} unsaved tab${x>1?"s":""} will be closed. Continue?`))return}let H=R.map((S)=>S.id);s0.closeAll(),H.forEach((S)=>{O(S),E(S),$.current?.(S)})},[E,O]),h=P((R)=>{s0.togglePin(R)},[]),o=P((R)=>{if(!R)return;V((x)=>{if(x.get(R)==="editor")return x;let H=new Map(x);return H.set(R,"editor"),H}),s0.activate(R)},[]),t=P(()=>{let R=s0.getActiveId();if(R)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:R}}))},[]);return g(()=>{let R=(x)=>{let{oldPath:H,newPath:S,type:p}=x.detail||{};if(!H||!S)return;if(p==="dir"){for(let Q0 of s0.getTabs())if(Q0.path===H||Q0.path.startsWith(`${H}/`)){let l=`${S}${Q0.path.slice(H.length)}`;s0.rename(Q0.id,l)}}else s0.rename(H,S);V((Q0)=>aX(Q0,H,S,p))};return window.addEventListener("workspace-file-renamed",R),()=>window.removeEventListener("workspace-file-renamed",R)},[]),g(()=>{let R=(x)=>{if(s0.hasUnsaved())x.preventDefault(),x.returnValue=""};return window.addEventListener("beforeunload",R),()=>window.removeEventListener("beforeunload",R)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,tabPaneOverrides:N,openEditor:M,closeEditor:A,handleTabClose:J,handleTabActivate:D,handleTabCloseOthers:I,handleTabCloseAll:d,handleTabTogglePin:h,handleTabTogglePreview:B,handleTabEditSource:o,revealInExplorer:t}}function z3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var H3=z3("warning",30000),Ej=z3("finalize",120000),J3=z3("refresh",30000),Mj=30000;function kj(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function Ij(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Tj(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function Cj(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}function tX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:tX(_,$)}}function O3(_,$){return{text:$?.text||"",totalLines:Cj(_),fullText:_}}function Pj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function Sj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function xj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function yj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function D3(_){return String(_||"").trim()||"web:default"}function Rj({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function wj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function fj(_={}){return U4(_)&&a8(_)}function eX(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function _K(_={},$={}){if(!fj(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=eX({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function vj(_={}){if(!fj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,_K({window:$,document:j})},G=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},K=()=>{G();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),G()},V);if(B!=null)Z.add(B)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},N=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",K,!0),N?.addEventListener?.("resize",K),N?.addEventListener?.("scroll",K),()=>{Y(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",K,!0),N?.removeEventListener?.("resize",K),N?.removeEventListener?.("scroll",K)}}function $K(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:$K($,j)}var jK=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function uj(_){return jK.has(String(_||"").trim())}function QK(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function A3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(QK(_),{detail:Q})),!0}var ZK=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function bj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(U4({window:j,navigator:Q}))};Z();let q=ZK.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",Z),()=>G.removeEventListener("change",Z);if(typeof G.addListener==="function")return G.addListener(Z),()=>G.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let G of q)G();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function gj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function mj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Q?.(X,N)},q=(K)=>{let X=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(X)Z?.(X,N)},G=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return G.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("pane:popout",q),()=>{G.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("pane:popout",q)}}function hj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function pj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(G)=>{if(G?.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault?.(),Q?.();return}if(G?.key==="Escape"&&Y())G.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function cj(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function lj(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function dj(_,$,j){return _||$?.label||j||"Pane"}function ij(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function nj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function rj(_,$,j,Q){return _===$&&!j||Q}function oj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}var YK="piclaw_btw_session",aj=900,sj="__piclawRenameBranchFormLock__";function qK(){try{return import.meta.url}catch{return null}}function E3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function G6(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function tj(_={}){let $=_.importMetaUrl===void 0?qK():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let G=new URL(Y,Q).searchParams.get("v");return G&&G.trim()?G.trim():null}catch{return null}}function M3(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[sj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[sj]=Q,Q}function ej(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function _Q(_={}){let $=typeof _.readItem==="function"?_.readItem:H_,j=_.storageKey||YK,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",G=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,X=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:G,error:X==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:X}}catch{return null}}function $Q(_,$={}){let j=$.defaultChatJid||"web:default",Q=G6(_,"chat_jid",j),Z=E3(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=E3(_?.get?.("pane_popout")),q=G6(_,"pane_path"),G=G6(_,"pane_label"),K=E3(_?.get?.("branch_loader")),X=G6(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:G,branchLoaderMode:K,branchLoaderSourceChatJid:X}}function jQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:G,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let X=Y?.()||null;if(!X)return!1;if(Q||K<Number(Z||0)||X.inFlight||K<Number(X.cooldownUntil||0))return!1;return q?.(j.agent_name||""),G?.(!0),!0}function QQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function ZQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:G,setIsRenamingBranch:K,renameChatBranch:X,refreshActiveChatAgents:N,refreshCurrentChatBranches:V,showIntentToast:B,closeRenameForm:O,now:E=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let M=E(),A=G?.()||null;if(!A)return!1;if(Y.current||M<Number(q.current||0)||A.inFlight||M<Number(A.cooldownUntil||0))return!1;Y.current=!0,A.inFlight=!0,K?.(!0);try{let J=j.agent_name||"",D=w8(Q,J);if(!D.canSubmit)return B?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let I=D.normalized||J,d=await X(j.chat_jid,{agentName:I});await Promise.allSettled([N?.(),V?.()]);let h=d?.branch?.agent_name||I||J;return B?.("Branch renamed",`@${h}`,"info",3500),O?.(),!0}catch(J){let D=J instanceof Error?J.message:String(J||"Could not rename branch."),I=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return B?.("Could not rename branch",I||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,K?.(!1);let J=E()+aj;q.current=J;let D=G?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=J}}async function YQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:G,refreshActiveChatAgents:K,refreshCurrentChatBranches:X,showIntentToast:N,baseHref:V,chatOnlyMode:B,navigate:O,confirm:E=(o)=>window.confirm(o)}=_;if(!$)return!1;let M=typeof j==="string"&&j.trim()?j.trim():"",A=typeof Q==="string"&&Q.trim()?Q.trim():"",J=M||Z?.chat_jid||A;if(!J)return N?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===J?Z:null)||Y.find((o)=>o?.chat_jid===J)||q.find((o)=>o?.chat_jid===J)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return N?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let d=`@${D?.agent_name||J}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!E(`Prune ${d}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await G(J),await Promise.allSettled([K?.(),X?.()]);let o=D?.root_chat_jid||"web:default";N?.("Branch pruned",`${d} has been archived.`,"info",3000);let t=L4(V,o,{chatOnly:B});return O?.(t),!0}catch(o){let t=o instanceof Error?o.message:String(o||"Could not prune branch.");return N?.("Could not prune branch",t||"Could not prune branch.","warning",5000),!1}}async function qQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:G,chatOnlyMode:K,navigate:X}=_,N=typeof $==="string"?$.trim():"";if(!N||typeof j!=="function")return!1;try{let V=Q.find((J)=>J?.chat_jid===N)||null,B=await j(N);await Promise.allSettled([Z?.(),Y?.()]);let O=B?.branch,E=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():N,M=x2(V?.agent_name,O?.agent_name,E);q?.("Branch restored",M,"info",4200);let A=L4(G,E,{chatOnly:K});return X?.(A),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function GQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let G=await j($);if(q())return!1;let K=G?.branch,X=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");let N=L4(Y,X,{chatOnly:!0});return Z?.(N,{replace:!0}),!0}catch(G){if(q())return!1;return Q?.({status:"error",message:_8(G)}),!1}}async function XQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:G,baseHref:K}=_;try{let N=(await Q($))?.branch,V=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let B=N?.agent_name?`@${N.agent_name}`:V;q?.("New branch created",`Switched to ${B}.`,"info",2500);let O=L4(K,V,{chatOnly:j});return G?.(O),!0}catch(X){return q?.("Could not create branch",_8(X),"warning",5000),!1}}async function KQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:G,currentChatJid:K,baseHref:X}=_;if(!$||j)return!1;let N=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!N)return!1;let V=d7(N);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=k$(V);if(!B)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;I$(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let O=await q?.(N),E=l7(X,N,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:O});return T$(B,E),G?.(N),!0}catch(O){C$(B);let E=O instanceof Error?O.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",E,"warning",5000),!1}}async function NQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:G,setActiveChatAgents:K,setCurrentChatBranches:X,showIntentToast:N,baseHref:V}=_;if(!$||j)return!1;let B=p7(Q);if(!B)return N?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let E=c7(V,Q,{chatOnly:!0});if(!window.open(E,B.target))return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let O=k$(B);if(!O)return N?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;I$(O,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await Y(Q))?.branch,A=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();K?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await G?.(Z);X?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let J=L4(V,A,{chatOnly:!0});return T$(O,J),!0}catch(E){return C$(O),N?.("Could not open branch window",_8(E),"error",5000),!1}}function X6(_){return _?{..._}:{text:"",totalLines:0}}function VQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function GK(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function XK(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function BQ(_){return{agentStatus:_.agentStatus,agentDraft:X6(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:X6(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:VQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:GK(_.silentRecovery)}}function WQ(_){let $=_.snapshot||XK(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(X6($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(X6($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(VQ($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function N8(_){return typeof _==="string"}function UQ(_){return typeof _==="string"&&_.trim().length>0}function k3(_){if(!Array.isArray(_))return[];return _.filter(($)=>UQ($?.chat_jid)&&UQ($?.agent_name))}function LQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>N8($?.chat_jid)&&N8($?.agent_name))}function FQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(N8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!N8(q?.chat_jid))return q;let G=Q.get(q.chat_jid);return G?{...q,...G,is_active:G.is_active??q.is_active}:q}),Y=N8(j)?j:"";return Z.sort((q,G)=>{if(q.chat_jid===Y&&G.chat_jid!==Y)return-1;if(G.chat_jid===Y&&q.chat_jid!==Y)return 1;let K=Boolean(q.archived_at),X=Boolean(G.archived_at);if(K!==X)return K?1:-1;if(Boolean(q.is_active)!==Boolean(G.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(G.chat_jid))}),Z}function I3(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function zQ(_,$){let j=new Map(_),Q=I3($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function HQ(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=I3($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function JQ(_){if(_?.options?.remove)return!0;return I3(_)?.state!=="running"}function T3(_,$){return`${_}:${$}`}function OQ(_,$,j){let Q=T3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function DQ(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function C3(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function AQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function KK(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function EQ(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!KK(Z));return Q.length===_.length?_:Q}function MQ(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function kQ(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function f4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function IQ(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function TQ(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function NK(_,$){let j=O_(_);return Boolean(_&&j===$)}function C5(_,$,j){if(!NK(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function CQ(_,$){return{..._,openedAt:$}}function PQ(_){let $=O_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function SQ(_,$,j){let Q=K7({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=O_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=O_(_),q=Boolean(Z&&Y&&Z===Y),G={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:G,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function xQ(_,$){if(!_||_?.source!=="live")return _||null;let j=O_($),Q=O_(_);if(j&&Q&&j!==Q)return _;return null}function yQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function P3(_,$,j){if(j.errorMessage)return C5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return C5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function RQ(_,$,j){return C5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function wQ(_,$,j){return C5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function fQ(_,$,j){return C5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}var vQ=tj(),uQ=R6,bQ=f6,VK=u6,gQ=p6,mQ=c6,S3=b6,x3=Y_(e1,"getAgentContext",null),BK=Y_(e1,"getAutoresearchStatus",null),WK=Y_(e1,"stopAutoresearch",{status:"ok"}),UK=Y_(e1,"dismissAutoresearch",{status:"ok"}),hQ=Y_(e1,"getAgentModels",{current:null,models:[]}),pQ=Y_(e1,"getActiveChatAgents",{chats:[]}),K6=Y_(e1,"getChatBranches",{chats:[]}),LK=Y_(e1,"renameChatBranch",null),FK=Y_(e1,"pruneChatBranch",null),zK=Y_(e1,"restoreChatBranch",null),cQ=Y_(e1,"getAgentQueueState",{count:0}),HK=Y_(e1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),JK=Y_(e1,"removeAgentQueueItem",{removed:!1}),OK=Y_(e1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});i0.register(J$);i0.register(n$);i0.register(i$);i0.register(r$);i0.register(o$);i0.register(s$);i0.register(t$);i0.register(e$);i0.register($3);i0.register(Z3);i0.register(Y3);i0.register(l$);O$();i0.register(E$);i0.register(M$);function DK({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:G,branchLoaderSourceChatJid:K}=f0(()=>$Q(_),[_]),[X,N]=m("disconnected"),[V,B]=m(()=>U4()),[O,E]=m(null),[M,A]=m(null),[J,D]=m(!1),[I,d]=m("current"),[h,o]=m([]),[t,R]=m([]),[x,H]=m(null),{agentStatus:S,setAgentStatus:p,agentDraft:Q0,setAgentDraft:l,agentPlan:_0,setAgentPlan:e,agentThought:Y0,setAgentThought:G0,pendingRequest:X0,setPendingRequest:H0,currentTurnId:D0,setCurrentTurnId:A0,steerQueuedTurnId:n0,setSteerQueuedTurnId:x0,lastAgentEventRef:k0,lastSilenceNoticeRef:r0,isAgentRunningRef:o0,draftBufferRef:g0,thoughtBufferRef:a0,pendingRequestRef:m0,stalledPostIdRef:_1,currentTurnIdRef:z0,steerQueuedTurnIdRef:p0,thoughtExpandedRef:$1,draftExpandedRef:Z1}=Oj(),[q_,D1]=m({}),[e0,h1]=m(null),[M1,Y1]=m(null),[h0,x1]=m(!1),[k1,s]=m(null),[N0,L0]=m([]),[q0,y0]=m([]),[C0,v0]=m(null),[M0,R0]=m(()=>new Map),[d0,O0]=m(()=>new Set),[b0,J0]=m([]),[j0,y]=m(!1),[a,U0]=m(()=>_Q()),[E0,u0]=m(null),q1=C(new Set),A1=f0(()=>N0.find((W)=>W?.chat_jid===j)||null,[N0,j]),X1=f0(()=>q0.find((W)=>W?.chat_jid===j)||A1||null,[A1,q0,j]),p1=X1?.root_chat_jid||A1?.root_chat_jid||j,Z4=ej(I),[B_,__]=m(()=>({status:G?"running":"idle",message:G?"Preparing a new chat branch…":""})),W_=b0.length,G_=C(new Set),j1=C([]),r1=C(new Set),Y4=C(0),v_=C({inFlight:!1,lastAttemptAt:0,turnId:null});G_.current=new Set(b0.map((W)=>W.row_id)),j1.current=b0;let{notificationsEnabled:_5,notificationPermission:v4,toggleNotifications:u1,notify:U_}=Hj(),[y1,E1]=m(()=>new Set),[K1,u_]=m(()=>z5("workspaceOpen",!0)),b_=C(null),{editorOpen:N1,tabStripTabs:X_,tabStripActiveId:c0,previewTabs:C1,tabPaneOverrides:A_,openEditor:$_,closeEditor:u4,handleTabClose:o_,handleTabActivate:b4,handleTabCloseOthers:s_,handleTabCloseAll:$5,handleTabTogglePin:a_,handleTabTogglePreview:g_,handleTabEditSource:P5,revealInExplorer:S5}=Aj({onTabClosed:(W)=>b_.current?.(W)}),V1=C(null),R1=C(null),j5=C(null),E_=C(null),j_=i0.getDockPanes().length>0,[c1,P1]=m(!1),b1=P(()=>P1((W)=>!W),[]),F1=P(()=>{$_(t4,{label:"Terminal"})},[$_]),M_=P(()=>{$_(H4,{label:"VNC"})},[$_]),k_=f0(()=>cj(X_,c0),[c0,X_]),I_=f0(()=>lj(A_,c0),[A_,c0]),t_=f0(()=>dj(q,k_,Y),[k_,q,Y]),Q_=f0(()=>ij(X_,C1,c0),[C1,c0,X_]),o1=f0(()=>nj(Y,H4),[Y]),T_=f0(()=>rj(Y,t4,Q_,o1),[o1,Q_,Y]),q4=oj(Z,Q,N1,j_,c1),[z1,e_]=m(!1),g4=C(!1),m4=P(()=>{if(!N1||Q)return;if(g4.current=c1,c1)P1(!1);e_(!0)},[N1,Q,c1]),C_=P(()=>{if(!z1)return;if(e_(!1),g4.current)P1(!0),g4.current=!1},[z1]),h4=P(()=>{if(z1)C_();else m4()},[z1,m4,C_]);g(()=>{if(z1&&!N1)C_()},[z1,N1,C_]),g(()=>{if(!Z||!Y)return;if(s0.getActiveId()===Y)return;$_(Y,q?{label:q}:void 0)},[$_,q,Z,Y]),g(()=>{let W=V1.current;if(!W)return;if(R1.current)R1.current.dispose(),R1.current=null;let U=c0;if(!U)return;let k={path:U,mode:"edit"},b=(I_?i0.get(I_):null)||i0.resolve(k)||i0.get("editor");if(!b){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let u=b.mount(W,k);R1.current=u,u.onDirtyChange?.((K0)=>{s0.setDirty(U,K0)}),u.onSaveRequest?.(()=>{}),u.onClose?.(()=>{u4()});let i=s0.getViewState(U);if(i&&typeof u.restoreViewState==="function")requestAnimationFrame(()=>u.restoreViewState(i));if(typeof u.onViewStateChange==="function")u.onViewStateChange((K0)=>{s0.saveViewState(U,K0)});return requestAnimationFrame(()=>u.focus()),()=>{if(R1.current===u)u.dispose(),R1.current=null}},[c0,I_,u4]);let Q5=P(async(W)=>{let U=typeof c0==="string"?c0.trim():"",k=R1.current;if(!U||!k?.setContent)return;if(typeof k.isDirty==="function"&&k.isDirty())return;if(!(Array.isArray(W)&&W.length>0?W.some((u)=>{let i=Array.isArray(u?.changed_paths)?u.changed_paths.map((W0)=>typeof W0==="string"?W0.trim():"").filter(Boolean):[];if(i.length>0)return i.some((W0)=>W0==="."||W0===U);let K0=typeof u?.path==="string"?u.path.trim():"";return!K0||K0==="."||K0===U}):!0))return;try{let u=await d5(U,1e6,"edit"),i=typeof u?.text==="string"?u.text:"",K0=typeof u?.mtime==="string"&&u.mtime.trim()?u.mtime.trim():new Date().toISOString();k.setContent(i,K0)}catch(u){console.warn("[workspace_update] Failed to refresh active pane:",u)}},[c0]);g(()=>{let W=j5.current;if(E_.current)E_.current.dispose(),E_.current=null;if(!W||!j_||!c1)return;let U=i0.getDockPanes()[0];if(!U){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let k=U.mount(W,{mode:"view"});return E_.current=k,requestAnimationFrame(()=>k.focus?.()),()=>{if(E_.current===k)k.dispose(),E_.current=null}},[j_,c1]);let[m_,h_]=m({name:"You",avatar_url:null,avatar_background:null}),J4=C(null),p_=C(!1),p4=C(!1),c_=C(!1),P_=C(null),I1=C(j),O4=C(new Map),D4=C(j),c4=C(0),U1=C(0),A4=C({}),Z5=C({name:null,avatar_url:null}),g1=C({currentHashtag:null,searchQuery:null,searchOpen:!1}),K_=C(null),_4=C(null),l4=C(0),G4=C(0),E4=C(0),X4=C(null),S_=C(null),L_=C(null),M4=C(null),d4=C(0),x_=C({title:null,avatarBase:null}),z=C(null),T=C(!1),[w,f]=m(!1),r=C(0),[Z0,V0]=m(!1),[B0,$0]=m(""),T0=f0(()=>w8(B0,X1?.agent_name||""),[X1?.agent_name,B0]),w1=C(null),Z_=P(()=>{if(z.current)clearTimeout(z.current),z.current=null;H(null)},[]);Tj(30000),g(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)w1.current?.focus(),w1.current?.select?.()})},[Z0]),g(()=>{return d2()},[]),g(()=>{return bj(B)},[]),g(()=>{G1("workspaceOpen",String(K1))},[K1]),g(()=>{return vj()},[]),g(()=>{return()=>{Z_()}},[Z_]),g(()=>{if(!a){G1(BTW_SESSION_KEY,"");return}G1(BTW_SESSION_KEY,JSON.stringify({question:a.question||"",answer:a.answer||"",thinking:a.thinking||"",error:a.error||null,status:a.status||"success"}))},[a]),g(()=>{A4.current=q_||{}},[q_]),g(()=>{I1.current=j},[j]),g(()=>{Z5.current=m_||{name:"You",avatar_url:null,avatar_background:null}},[m_]);let l1=P((W,U,k=null)=>{if(typeof document>"u")return;let b=(W||"").trim()||"PiClaw";if(x_.current.title!==b){document.title=b;let P0=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(P0&&P0.getAttribute("content")!==b)P0.setAttribute("content",b);x_.current.title=b}let u=document.getElementById("dynamic-favicon");if(!u)return;let i=u.getAttribute("data-default")||u.getAttribute("href")||"/favicon.ico",K0=U||i,W0=U?`${K0}|${k||""}`:K0;if(x_.current.avatarBase!==W0){let P0=U?`${K0}${K0.includes("?")?"&":"?"}v=${k||Date.now()}`:K0;u.setAttribute("href",P0),x_.current.avatarBase=W0}},[]),x5=P((W)=>{if(!W)return;o((U)=>U.includes(W)?U:[...U,W])},[]),F=P((W)=>{o((U)=>U.filter((k)=>k!==W))},[]);b_.current=F;let v=P(()=>{o([])},[]),n=P((W)=>{if(!Array.isArray(W)){o([]);return}let U=[],k=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(k.has(u))continue;k.add(u),U.push(u)}o(U)},[]),c=P((W,U=null,k="info",b=3000)=>{Z_(),H({title:W,detail:U||null,kind:k||"info"}),z.current=setTimeout(()=>{H((u)=>u?.title===W?null:u)},b)},[Z_]),I0=P((W)=>{let U=yj(W,{editorOpen:N1,resolvePane:(k)=>i0.resolve(k)});if(U.kind==="open"){$_(U.path);return}if(U.kind==="toast")c(U.title,U.detail,U.level)},[N1,$_,c]),H1=P(()=>{let W=c0;if(W)x5(W)},[c0,x5]),S1=P((W)=>{if(!W)return;R((U)=>U.includes(W)?U:[...U,W])},[]),f1=P(async(W,U=null)=>{let k=(u)=>{u.scrollIntoView({behavior:"smooth",block:"center"}),u.classList.add("post-highlight"),setTimeout(()=>u.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+W);if(b){k(b);return}try{let u=typeof U==="string"&&U.trim()?U.trim():j,K0=(await w6(W,u))?.thread?.[0];if(!K0)return;i1((W0)=>{if(!W0)return[K0];if(W0.some((P0)=>P0.id===K0.id))return W0;return[...W0,K0]}),requestAnimationFrame(()=>{setTimeout(()=>{let W0=document.getElementById("post-"+W);if(W0)k(W0)},50)})}catch(u){console.error("[scrollToMessage] Failed to fetch message",W,u)}},[j]),K4=P((W)=>{R((U)=>U.filter((k)=>k!==W))},[]),i4=P(()=>{R([])},[]),Y5=P((W)=>{if(!Array.isArray(W)){R([]);return}let U=[],k=new Set;for(let b of W){if(typeof b!=="string"||!b.trim())continue;let u=b.trim();if(k.has(u))continue;k.add(u),U.push(u)}R(U)},[]),q5=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";c("Compose failed",U,"error",5000)},[c]),N_=P((W={})=>{let U=Date.now();if(k0.current=U,W.running)o0.current=!0,y((k)=>k?k:!0);if(W.clearSilence)r0.current=0},[y]),d1=P(()=>{if(M4.current)clearTimeout(M4.current),M4.current=null;d4.current=0},[]);g(()=>()=>{d1()},[d1]);let G5=P(()=>{d1(),p((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:U,lastActivity:k,...b}=W;return b})},[d1]),k4=P((W)=>{if(!W)return;d1();let U=Date.now();d4.current=U,p({type:W.type||"active",last_activity:!0}),M4.current=setTimeout(()=>{if(d4.current!==U)return;p((k)=>{if(!k||!(k.last_activity||k.lastActivity))return k;return null})},Mj)},[d1]),L1=P(()=>{o0.current=!1,y(!1),k0.current=null,r0.current=0,g0.current="",a0.current="",m0.current=null,S_.current=null,z0.current=null,p0.current=null,P_.current=null,v_.current={inFlight:!1,lastAttemptAt:0,turnId:null},d1(),A0(null),x0(null),$1.current=!1,Z1.current=!1},[d1,A0,x0,y]),$4=P((W)=>{if(!Rj({remainingQueueCount:W,currentTurnId:z0.current,isAgentTurnActive:j0}))return;p0.current=null,x0(null)},[j0,x0]),X5=P(()=>BQ({agentStatus:S,agentDraft:Q0,agentPlan:_0,agentThought:Y0,pendingRequest:X0,currentTurnId:D0,steerQueuedTurnId:n0,isAgentTurnActive:j0,followupQueueItems:b0,activeModel:e0,activeThinkingLevel:M1,supportsThinking:h0,activeModelUsage:k1,contextUsage:C0,isAgentRunning:o0.current,wasAgentActive:c_.current,draftBuffer:g0.current,thoughtBuffer:a0.current,lastAgentEvent:k0.current,lastSilenceNotice:r0.current,lastAgentResponse:S_.current,currentTurnIdRef:z0.current,steerQueuedTurnIdRef:p0.current,thoughtExpanded:$1.current,draftExpanded:Z1.current,agentStatusRef:P_.current,silentRecovery:v_.current}),[e0,k1,M1,Q0,_0,S,Y0,C0,D0,b0,j0,X0,n0,h0]),V8=P((W)=>{WQ({snapshot:W,clearLastActivityTimer:d1,refs:{isAgentRunningRef:o0,wasAgentActiveRef:c_,lastAgentEventRef:k0,lastSilenceNoticeRef:r0,draftBufferRef:g0,thoughtBufferRef:a0,pendingRequestRef:m0,lastAgentResponseRef:S_,currentTurnIdRef:z0,steerQueuedTurnIdRef:p0,agentStatusRef:P_,silentRecoveryRef:v_,thoughtExpandedRef:$1,draftExpandedRef:Z1},setters:{setIsAgentTurnActive:y,setAgentStatus:p,setAgentDraft:l,setAgentPlan:e,setAgentThought:G0,setPendingRequest:H0,setCurrentTurnId:A0,setSteerQueuedTurnId:x0,setFollowupQueueItems:J0,setActiveModel:h1,setActiveThinkingLevel:Y1,setSupportsThinking:x1,setActiveModelUsage:s,setContextUsage:v0}})},[d1,A0,J0,y,x0]),y_=P((W)=>{if(!W)return;if(z0.current===W)return;z0.current=W,v_.current={inFlight:!1,lastAttemptAt:0,turnId:W},A0(W),p0.current=null,x0(null),g0.current="",a0.current="",l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),m0.current=null,S_.current=null,$1.current=!1,Z1.current=!1},[A0,x0]),I4=P((W)=>{if(typeof document<"u"){let P0=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&P0)return}let U=S_.current;if(!U||!U.post)return;if(W&&U.turnId&&U.turnId!==W)return;let k=U.post;if(k.id&&X4.current===k.id)return;let b=String(k?.data?.content||"").trim();if(!b)return;X4.current=k.id||X4.current,S_.current=null;let u=b.replace(/\s+/g," ").slice(0,200),i=A4.current||{},W0=(k?.data?.agent_id?i[k.data.agent_id]:null)?.name||"Pi";U_(W0,u)},[U_]),F_=P(async(W,U)=>{if(W!=="thought"&&W!=="draft")return;let k=z0.current;if(W==="thought"){if($1.current=U,k)try{await mQ(k,"thought",U)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!U)return;try{let b=k?await gQ(k,"thought"):null;if(b?.text)a0.current=b.text;G0((u)=>({...u||{text:"",totalLines:0},fullText:a0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(Z1.current=U,k)try{await mQ(k,"draft",U)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!U)return;try{let b=k?await gQ(k,"draft"):null;if(b?.text)g0.current=b.text;l((u)=>({...u||{text:"",totalLines:0},fullText:g0.current||u?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:u?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),T4=C(null),K5=P(()=>{let W=K_.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);T4.current=K5;let N6=P((W)=>{let U=K_.current;if(!U||typeof W!=="function"){W?.();return}let{currentHashtag:k,searchQuery:b,searchOpen:u}=g1.current||{},i=!((b||u)&&!k),K0=i?U.scrollHeight-U.scrollTop:U.scrollTop;W(),requestAnimationFrame(()=>{let W0=K_.current;if(!W0)return;if(i){let P0=Math.max(W0.scrollHeight-K0,0);W0.scrollTop=P0}else{let P0=Math.max(W0.scrollHeight-W0.clientHeight,0),m1=Math.min(K0,P0);W0.scrollTop=m1}})},[]),y5=P((W)=>{let U=K_.current;if(!U||typeof W!=="function"){W?.();return}let k=U.scrollTop;W(),requestAnimationFrame(()=>{let b=K_.current;if(!b)return;let u=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(k,u)})},[]),y3=P((W)=>EQ(W,G_.current),[]),{posts:R5,setPosts:i1,hasMore:lQ,setHasMore:B8,hasMoreRef:R3,loadPosts:l_,refreshTimeline:s1,loadMore:dQ,loadMoreRef:V6}=Jj({preserveTimelineScroll:N6,preserveTimelineScrollTop:y5,chatJid:j}),N5=f0(()=>y3(R5),[R5,b0,y3]),W8=P(()=>{let W=_1.current;if(!W)return;i1((U)=>U?U.filter((k)=>k.id!==W):U),_1.current=null},[i1]),{handleSplitterMouseDown:iQ,handleSplitterTouchStart:nQ,handleEditorSplitterMouseDown:rQ,handleEditorSplitterTouchStart:oQ,handleDockSplitterMouseDown:sQ,handleDockSplitterTouchStart:aQ}=Dj({appShellRef:_4,sidebarWidthRef:l4,editorWidthRef:G4,dockHeightRef:E4}),w3=P(()=>{if(!o0.current)return;o0.current=!1,r0.current=0,k0.current=null,z0.current=null,A0(null),$1.current=!1,Z1.current=!1;let W=(g0.current||"").trim();if(g0.current="",a0.current="",l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),m0.current=null,S_.current=null,!W){p({type:"error",title:"Response stalled - No content received"});return}let k=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),u=new Date().toISOString(),i={id:b,timestamp:u,data:{type:"agent_response",content:k,agent_id:"default",is_local_stall:!0}};_1.current=b,i1((K0)=>K0?K8([...K0,i]):[i]),T4.current?.(),p(null)},[A0]);g(()=>{g1.current={currentHashtag:O,searchQuery:M,searchOpen:J}},[O,M,J]);let Q1=P(()=>{let W=++Y4.current,U=j;cQ(U).then((k)=>{if(W!==Y4.current)return;if(I1.current!==U)return;let b=r1.current,u=MQ(k?.items,b);if(u.length){J0((i)=>{if(kQ(i,u))return i;return u});return}b.clear(),$4(0),J0((i)=>i.length===0?i:[])}).catch(()=>{if(W!==Y4.current)return;if(I1.current!==U)return;J0((k)=>k.length===0?k:[])})},[$4,j,J0]),a1=P(async()=>{let W=j;try{let U=await x3(W);if(I1.current!==W)return;if(U)v0(U)}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch agent context:",U)}},[j]),d_=P(async()=>{let W=j;try{let U=await BK(W);if(I1.current!==W)return;R0((k)=>zQ(k,U)),O0((k)=>C3(k,"autoresearch"))}catch(U){if(I1.current!==W)return;console.warn("Failed to fetch autoresearch status:",U)}},[j]),R_=P(async()=>{let W=j;try{let U=await S3(W);if(I1.current!==W)return null;if(!U||U.status!=="active"||!U.data){if(c_.current){let{currentHashtag:u,searchQuery:i,searchOpen:K0}=g1.current||{};if(!u&&!i&&!K0)s1()}return c_.current=!1,L1(),P_.current=null,p(null),l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),m0.current=null,U??null}c_.current=!0;let k=U.data;P_.current=k;let b=k.turn_id||k.turnId;if(b)y_(b);if(N_({running:!0,clearSilence:!0}),G5(),p(k),U.thought&&U.thought.text)G0((u)=>{if(u&&u.text&&u.text.length>=U.thought.text.length)return u;return a0.current=U.thought.text,{text:U.thought.text,totalLines:U.thought.totalLines||0}});if(U.draft&&U.draft.text)l((u)=>{if(u&&u.text&&u.text.length>=U.draft.text.length)return u;return g0.current=U.draft.text,{text:U.draft.text,totalLines:U.draft.totalLines||0}});return U}catch(U){return console.warn("Failed to fetch agent status:",U),null}},[L1,G5,N_,s1,y_]),B6=P(async()=>{if(!o0.current)return null;if(m0.current)return null;let W=z0.current||null,U=v_.current,k=Date.now();if(U.inFlight)return null;if(U.turnId===W&&k-U.lastAttemptAt<J3)return null;U.inFlight=!0,U.lastAttemptAt=k,U.turnId=W;try{let{currentHashtag:b,searchQuery:u,searchOpen:i}=g1.current||{};if(!b&&!u&&!i)await s1();return await Q1(),await R_()}finally{U.inFlight=!1}},[R_,Q1,s1]);g(()=>{let W=Math.min(1000,Math.max(100,Math.floor(H3/2))),U=setInterval(()=>{if(!o0.current)return;if(m0.current)return;let k=k0.current;if(!k)return;let b=Date.now(),u=b-k,i=V4(P_.current);if(u>=Ej){if(!i)p({type:"waiting",title:"Re-syncing after a quiet period…"});B6();return}if(u>=H3){if(b-r0.current>=J3){if(!i){let K0=Math.floor(u/1000);p({type:"waiting",title:`Waiting for model… No events for ${K0}s`})}r0.current=b,B6()}}},W);return()=>clearInterval(U)},[B6]);let f3=P((W)=>{let U=typeof W==="string"&&W.trim()?W.trim():null;if(!U||!vQ||U===vQ)return!1;if(J4.current===U)return!0;J4.current=U;let k=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!s0.hasUnsaved()&&!k&&!o0.current&&!m0.current&&!p_.current)return p_.current=!0,c("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{p_.current=!1}},350),!0;return c("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0},[o0,m0,c]),tQ=P((W)=>{if(N(W),W!=="connected"){p(null),l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),m0.current=null,L1();return}if(!p4.current){p4.current=!0;let{currentHashtag:u,searchQuery:i,searchOpen:K0}=g1.current||{};if(!u&&!i&&!K0)s1();R_(),Q1(),a1();return}let{currentHashtag:U,searchQuery:k,searchOpen:b}=g1.current;if(!U&&!k&&!b)s1();R_(),Q1(),a1()},[L1,s1,R_,Q1,a1]),eQ=P(async(W)=>{E(W),i1(null),await l_(W)},[l_]),_Z=P(async()=>{E(null),A(null),i1(null),await l_()},[l_]),$Z=P(async(W,U=I)=>{if(!W||!W.trim())return;let k=U==="root"||U==="all"?U:"current";d(k),A(W.trim()),E(null),i1(null);try{let b=await uQ(W.trim(),50,0,j,k,p1);i1(b.results),B8(!1)}catch(b){console.error("Failed to search:",b),i1([])}},[j,p1,I]),jZ=P(()=>{D(!0),A(null),E(null),d("current"),i1([])},[]),QZ=P(()=>{D(!1),A(null),l_()},[l_]),EK=P(()=>{},[]),W6=!O&&!M&&!J,ZZ=P(async(W)=>{if(!W)return;let U=W.id,k=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():j,b=N5?.filter((i)=>i?.data?.thread_id===U&&i?.id!==U).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let u=(i)=>{if(!i.length)return;E1((W0)=>{let P0=new Set(W0);return i.forEach((m1)=>P0.add(m1)),P0}),setTimeout(()=>{if(y5(()=>{i1((W0)=>W0?W0.filter((P0)=>!i.includes(P0.id)):W0)}),E1((W0)=>{let P0=new Set(W0);return i.forEach((m1)=>P0.delete(m1)),P0}),R3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let i=await bQ(U,b>0,k);if(i?.ids?.length)u(i.ids)}catch(i){let K0=i?.message||"";if(b===0&&K0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let P0=await bQ(U,!0,k);if(P0?.ids?.length)u(P0.ids);return}console.error("Failed to delete post:",i),alert(`Failed to delete message: ${K0}`)}},[j,N5,y5]),v3=P(async()=>{try{let W=await VK();D1(kj(W));let U=W?.user||{};h_((b)=>{let u=typeof U.name==="string"&&U.name.trim()?U.name.trim():"You",i=typeof U.avatar_url==="string"?U.avatar_url.trim():null,K0=typeof U.avatar_background==="string"&&U.avatar_background.trim()?U.avatar_background.trim():null;if(b.name===u&&b.avatar_url===i&&b.avatar_background===K0)return b;return{name:u,avatar_url:i,avatar_background:K0}});let k=(W?.agents||[]).find((b)=>b.id==="default");l1(k?.name,k?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}},[l1]);g(()=>{v3();let W=H5("sidebarWidth",null),U=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(l4.current=U,_4.current)_4.current.style.setProperty("--sidebar-width",`${U}px`)},[v3]);let w5=j0||S!==null,u3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.agent_id;if(!U)return;let{agent_name:k,agent_avatar:b}=W;if(!k&&b===void 0)return;let u=A4.current?.[U]||{id:U},i=u.name||null,K0=u.avatar_url??u.avatarUrl??u.avatar??null,W0=!1,P0=!1;if(k&&k!==u.name)i=k,P0=!0;if(b!==void 0){let m1=typeof b==="string"?b.trim():null,F0=typeof K0==="string"?K0.trim():null,w0=m1||null;if(w0!==(F0||null))K0=w0,W0=!0}if(!P0&&!W0)return;if(D1((m1)=>{let w0={...m1[U]||{id:U}};if(P0)w0.name=i;if(W0)w0.avatar_url=K0;return{...m1,[U]:w0}}),U==="default")l1(i,K0,W0?Date.now():null)},[l1]),b3=P((W)=>{if(!W||typeof W!=="object")return;let U=W.user_name??W.userName,k=W.user_avatar??W.userAvatar,b=W.user_avatar_background??W.userAvatarBackground;if(U===void 0&&k===void 0&&b===void 0)return;h_((u)=>{let i=typeof U==="string"&&U.trim()?U.trim():u.name||"You",K0=k===void 0?u.avatar_url:typeof k==="string"&&k.trim()?k.trim():null,W0=b===void 0?u.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(u.name===i&&u.avatar_url===K0&&u.avatar_background===W0)return u;return{name:i,avatar_url:K0,avatar_background:W0}})},[]),U6=P((W)=>{if(!W||typeof W!=="object")return;let U=W.model??W.current;if(U!==void 0)h1(U);if(W.thinking_level!==void 0)Y1(W.thinking_level??null);if(W.supports_thinking!==void 0)x1(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)s(W.provider_usage??null)},[]),f5=P(()=>{let W=j;hQ(W).then((U)=>{if(I1.current!==W)return;if(U)U6(U)}).catch(()=>{})},[U6,j]),n1=P(()=>{let W=j;Promise.all([pQ().catch(()=>({chats:[]})),K6(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([U,k])=>{if(I1.current!==W)return;let b=k3(U?.chats),u=k3(k?.chats);L0(FQ(b,u,W))}).catch(()=>{if(I1.current!==W)return;L0([])})},[j]),t1=P(()=>{K6(p1).then((W)=>{y0(LQ(W?.chats))}).catch(()=>{})},[p1]),g3=P((W)=>{let U=W?.row_id;if(U==null)return;r1.current.add(U),J0((k)=>f4(k,U).items),HK(U,D3(j)).then(()=>{Q1()}).catch((k)=>{console.warn("[queue] Failed to steer queued item:",k),c("Failed to steer message","The queued message could not be sent as steering.","warning"),r1.current.delete(U),Q1()})},[j,Q1,J0,c]),m3=P((W)=>{let U=W?.row_id;if(U==null)return;let k=f4(j1.current,U);r1.current.add(U),$4(k.remainingQueueCount),J0((b)=>f4(b,U).items),JK(U,D3(j)).then(()=>{Q1()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),c("Failed to remove message","The queued message could not be removed.","warning"),r1.current.delete(U),Q1()})},[$4,j,Q1,J0,c]),v5=P((W)=>{if(!W||typeof W!=="object")return;if(n1(),t1(),a1(),d_(),TQ(W))Q1()},[n1,d_,t1,a1,Q1]),YZ=P(async(W,U)=>{let k=typeof W?.key==="string"?W.key:"",b=typeof U?.key==="string"?U.key:"",u=T3(k,b);if(!k||!b)return;O0((i)=>OQ(i,k,b));try{let i=await AQ({panel:W,action:U,currentChatJid:j,stopAutoresearch:WK,dismissAutoresearch:UK,writeClipboard:(K0)=>navigator.clipboard.writeText(K0)});if(i.refreshAutoresearchStatus)d_();if(i.toast)c(i.toast.title,i.toast.detail,i.toast.kind,i.toast.durationMs)}catch(i){c("Panel action failed",i?.message||"Could not complete that action.","warning")}finally{O0((i)=>DQ(i,u))}},[j,d_,c]),L6=P(()=>{if(L_.current)L_.current.abort(),L_.current=null;U0(null)},[]),U8=P(async(W)=>{let U=String(W||"").trim();if(!U)return c("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let k=new AbortController;L_.current=k,U0({question:U,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await OK(U,{signal:k.signal,chatJid:$7(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(u,i)=>{if(u==="side_prompt_start")U0((K0)=>K0?{...K0,status:"running"}:K0)},onThinkingDelta:(u)=>{U0((i)=>i?{...i,thinking:`${i.thinking||""}${u||""}`}:i)},onTextDelta:(u)=>{U0((i)=>i?{...i,answer:`${i.answer||""}${u||""}`}:i)}});if(L_.current!==k)return!0;U0((u)=>u?{...u,answer:b?.result||u.answer||"",thinking:b?.thinking||u.thinking||"",model:b?.model||null,status:"success",error:null}:u)}catch(b){if(k.signal.aborted)return!0;U0((u)=>u?{...u,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:u)}finally{if(L_.current===k)L_.current=null}return!0},[j,c]),qZ=P(async({content:W})=>{let U=_7(W);if(!U)return!1;if(U.type==="help")return c("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(U.type==="clear")return L6(),c("BTW cleared","Closed the side conversation panel.","info"),!0;if(U.type==="ask")return await U8(U.question),!0;return!1},[L6,U8,c]),GZ=P(()=>{if(a?.question)U8(a.question)},[a,U8]),XZ=P(async()=>{let W=Z7(a);if(!W)return;try{let U=await r4("default",W,null,[],w5?"queue":null,j);v5(U),c(U?.queued==="followup"?"BTW queued":"BTW injected",U?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(U){c("BTW inject failed",U?.message||"Could not inject BTW answer into chat.","warning")}},[a,v5,w5,c]),h3=P(async(W=null)=>{let[U,k,b,u,i,K0,W0]=await Promise.allSettled([S3(j),x3(j),cQ(j),hQ(j),pQ(),K6(p1),n4(20,null,j)]),P0=U.status==="fulfilled"?U.value:null,m1=k.status==="fulfilled"?k.value:null,F0=b.status==="fulfilled"?b.value:null,w0=u.status==="fulfilled"?u.value:null,J1=i.status==="fulfilled"?i.value:null,V5=K0.status==="fulfilled"?K0.value:null,T1=W0.status==="fulfilled"?W0.value:null,z_=Array.isArray(T1?.posts)?T1.posts:Array.isArray(R5)?R5:[],m5=z_.length?z_[z_.length-1]:null,FZ=z_.filter((J6)=>J6?.data?.is_bot_message).length,zZ=z_.filter((J6)=>!J6?.data?.is_bot_message).length,n3=Number(F0?.count??j1.current.length??0)||0,r3=Array.isArray(J1?.chats)?J1.chats.length:N0.length,HZ=Array.isArray(V5?.chats)?V5.chats.length:q0.length,o3=Number(m1?.percent??C0?.percent??0)||0,JZ=Number(m1?.tokens??C0?.tokens??0)||0,OZ=Number(m1?.contextWindow??C0?.contextWindow??0)||0,DZ=w0?.current??e0??null,AZ=w0?.thinking_level??M1??null,EZ=w0?.supports_thinking??h0,MZ=P0?.status||(j0?"active":"idle"),kZ=P0?.data?.type||P0?.type||null;return{generatedAt:new Date().toISOString(),request:W,chat:{currentChatJid:j,rootChatJid:p1,activeChats:r3,branches:HZ},agent:{status:MZ,phase:kZ,running:Boolean(j0)},model:{current:DZ,thinkingLevel:AZ,supportsThinking:Boolean(EZ)},context:{tokens:JZ,contextWindow:OZ,percent:o3},queue:{count:n3},timeline:{loadedPosts:z_.length,botPosts:FZ,userPosts:zZ,latestPostId:m5?.id??null,latestTimestamp:m5?.timestamp??null},bars:[{key:"context",label:"Context",value:Math.max(0,Math.min(100,Math.round(o3)))},{key:"queue",label:"Queue",value:Math.max(0,Math.min(100,n3*18))},{key:"activeChats",label:"Active chats",value:Math.max(0,Math.min(100,r3*12))},{key:"posts",label:"Timeline load",value:Math.max(0,Math.min(100,z_.length*5))}]}},[N0,e0,M1,C0,q0,j,p1,j0,R5,h0]),u5=P(()=>{f5(),n1(),t1(),Q1(),a1(),d_()},[f5,n1,t1,Q1,a1,d_]);g(()=>{u5();let W=setInterval(()=>{f5(),n1(),t1(),Q1()},60000);return()=>clearInterval(W)},[u5,f5,n1,t1,Q1]),g(()=>{R0(new Map),O0(new Set)},[j]),g(()=>{let W=!1,U=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;K5()})};if(O)return l_(O),()=>{W=!0};if(M)return uQ(M,50,0,j,I,p1).then((k)=>{if(W)return;i1(k.results),B8(!1)}).catch((k)=>{if(W)return;console.error("Failed to search:",k),i1([]),B8(!1)}),()=>{W=!0};return l_().then(()=>{U()}).catch((k)=>{if(W)return;console.error("Failed to load timeline:",k)}),()=>{W=!0}},[j,O,M,I,p1,l_,K5,B8,i1]),g(()=>{let W=D4.current||j;O4.current.set(W,X5())},[j,X5]),g(()=>{let W=D4.current||j;if(W===j)return;O4.current.set(W,X5()),D4.current=j,r1.current.clear(),V8(O4.current.get(j)||null),Q1(),R_(),a1()},[j,R_,a1,Q1,V8,X5]);let KZ=P(()=>{let{currentHashtag:W,searchQuery:U,searchOpen:k}=g1.current||{};if(!W&&!U&&!k)s1();u5()},[u5,s1]),p3=P((W,U="streaming")=>{let k=new Date().toISOString();u0((b)=>SQ(b,W,{fallbackStatus:U,currentChatJid:j,dismissedSessionKeys:q1.current,updatedAt:k}))},[j]),F6=P((W,U)=>{let k=U?.turn_id,b=typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():null,i=b?b===j:W==="connected"||W==="workspace_update";if(i)u3(U),b3(U);if(W==="ui_theme"){i2(U);return}let K0=wj(W);if(K0.kind==="update"){if(!i)return;if(K0.shouldAdoptTurn&&k&&!z0.current)y_(k);p3(U,K0.fallbackStatus||"streaming");return}if(K0.kind==="close"){if(!i)return;u0((F0)=>xQ(F0,U));return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))G5()}if(W==="connected"){if(f3(U?.app_asset_version))return;p(null),l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),m0.current=null,L1();let F0=j;S3(F0).then((T1)=>{if(I1.current!==F0)return;if(!T1||T1.status!=="active"||!T1.data)return;let z_=T1.data,m5=z_.turn_id||z_.turnId;if(m5)y_(m5);if(N_({clearSilence:!0}),k4(z_),T1.thought&&T1.thought.text)a0.current=T1.thought.text,G0({text:T1.thought.text,totalLines:T1.thought.totalLines||0});if(T1.draft&&T1.draft.text)g0.current=T1.draft.text,l({text:T1.draft.text,totalLines:T1.draft.totalLines||0})}).catch((T1)=>{console.warn("Failed to fetch agent status:",T1)});let{currentHashtag:w0,searchQuery:J1,searchOpen:V5}=g1.current||{};if(!w0&&!J1&&!V5)s1();u5();return}if(W==="agent_status"){if(!i){if(U?.type==="done"||U?.type==="error")n1(),t1();return}if(U.type==="done"||U.type==="error"){if(k&&z0.current&&k!==z0.current)return;if(U.type==="done"){I4(k||z0.current);let{currentHashtag:F0,searchQuery:w0,searchOpen:J1}=g1.current||{};if(!F0&&!w0&&!J1)s1();if(U.context_usage)v0(U.context_usage)}if(a1(),c_.current=!1,L1(),r1.current.clear(),n1(),Q1(),l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null),U.type==="error")p({type:"error",title:U.title||"Agent error"}),setTimeout(()=>p(null),8000);else p(null)}else{if(k)y_(k);if(N_({running:!0,clearSilence:!0}),U.type==="thinking")g0.current="",a0.current="",l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0});P_.current=U,p((F0)=>{if(F0&&F0.type===U.type&&F0.title===U.title)return F0;return U})}return}if(W==="agent_steer_queued"){if(!i)return;if(k&&z0.current&&k!==z0.current)return;let F0=k||z0.current;if(!F0)return;p0.current=F0,x0(F0);return}if(W==="agent_followup_queued"){if(!i)return;J0((F0)=>IQ(F0,U)),Q1();return}if(W==="agent_followup_consumed"){if(!i)return;let F0=U?.row_id;if(F0!=null){let T1=f4(j1.current,F0);$4(T1.remainingQueueCount),J0((z_)=>f4(z_,F0).items)}Q1();let{currentHashtag:w0,searchQuery:J1,searchOpen:V5}=g1.current||{};if(!w0&&!J1&&!V5)s1();return}if(W==="agent_followup_removed"){if(!i)return;let F0=U?.row_id;if(F0!=null){let w0=f4(j1.current,F0);r1.current.add(F0),$4(w0.remainingQueueCount),J0((J1)=>f4(J1,F0).items)}Q1();return}if(W==="agent_draft_delta"){if(!i)return;if(k&&z0.current&&k!==z0.current)return;if(k&&!z0.current)y_(k);N_({running:!0,clearSilence:!0}),g0.current=Sj(g0.current,U);let F0=Date.now();if(!c4.current||F0-c4.current>=100){c4.current=F0;let w0=g0.current;if(Z1.current)l((J1)=>O3(w0,J1));else l(q6(w0,null))}return}if(W==="agent_draft"){if(!i)return;if(k&&z0.current&&k!==z0.current)return;if(k&&!z0.current)y_(k);N_({running:!0,clearSilence:!0});let F0=U.text||"",w0=U.mode||(U.kind==="plan"?"replace":"append");if(U.kind==="plan")e((J1)=>Pj(J1,F0,w0));else if(!Z1.current)g0.current=F0,l(q6(F0,U.total_lines));return}if(W==="agent_thought_delta"){if(!i)return;if(k&&z0.current&&k!==z0.current)return;if(k&&!z0.current)y_(k);N_({running:!0,clearSilence:!0}),a0.current=xj(a0.current,U);let F0=Date.now();if($1.current&&(!U1.current||F0-U1.current>=100)){U1.current=F0;let w0=a0.current;G0((J1)=>O3(w0,J1))}return}if(W==="agent_thought"){if(!i)return;if(k&&z0.current&&k!==z0.current)return;if(k&&!z0.current)y_(k);N_({running:!0,clearSilence:!0});let F0=U.text||"";if(!$1.current)a0.current=F0,G0(q6(F0,U.total_lines));return}if(W==="model_changed"){if(!i)return;if(U?.model!==void 0)h1(U.model);if(U?.thinking_level!==void 0)Y1(U.thinking_level??null);if(U?.supports_thinking!==void 0)x1(Boolean(U.supports_thinking));let F0=j;x3(F0).then((w0)=>{if(I1.current!==F0)return;if(w0)v0(w0)}).catch(()=>{});return}if(W==="extension_ui_widget"&&U?.options?.surface==="status-panel"){if((typeof U?.chat_jid==="string"&&U.chat_jid.trim()?U.chat_jid.trim():j)!==j)return;let w0=typeof U?.key==="string"?U.key:"";if(!w0)return;if(R0((J1)=>HQ(J1,U)),JQ(U))O0((J1)=>C3(J1,w0));A3(W,U);return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:U}));Q5(U?.updates);return}if(uj(W)){if(!i)return;if(A3(W,U),W==="extension_ui_notify"&&typeof U?.message==="string")c(U.message,null,U?.type||"info");if(W==="extension_ui_error"&&typeof U?.error==="string")c("Extension UI error",U.error,"error",5000);return}let{currentHashtag:W0,searchQuery:P0,searchOpen:m1}=g1.current;if(W==="agent_response"){if(!i)return;W8(),S_.current={post:U,turnId:z0.current}}if(!W0&&!P0&&!m1&&i&&(W==="new_post"||W==="new_reply"||W==="agent_response"))i1((F0)=>{if(!F0)return[U];if(F0.some((w0)=>w0.id===U.id))return F0;return[...F0,U]}),T4.current?.();if(W==="interaction_updated"){if(!i)return;if(W0||P0||m1)return;i1((F0)=>{if(!F0)return F0;if(!F0.some((w0)=>w0.id===U.id))return F0;return F0.map((w0)=>w0.id===U.id?U:w0)})}if(W==="interaction_deleted"){if(!i)return;if(W0||P0||m1)return;let F0=U?.ids||[];if(F0.length){if(y5(()=>{i1((w0)=>w0?w0.filter((J1)=>!F0.includes(J1.id)):w0)}),R3.current)V6.current?.({preserveScroll:!0,preserveMode:"top"})}}},[p3,L1,G5,j,V6,N_,I4,y5,n1,t1,s1,W8,y_,k4,u3,b3,f5,Q1,J0,a1,f3]);g(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=F6,W.reset=()=>{W8(),L1(),p(null),l({text:"",totalLines:0}),e(""),G0({text:"",totalLines:0}),H0(null)},W.finalize=()=>w3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[L1,w3,F6,W8]),zj({handleSseEvent:F6,handleConnectionStatusChange:tQ,loadPosts:l_,onWake:KZ,chatJid:j}),g(()=>{if(!N5||N5.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let U=W.slice(5);f1(U),history.replaceState(null,"",location.pathname+location.search)},[N5,f1]);let z6=S!==null;g(()=>{if(X!=="connected")return;let U=setInterval(()=>{let{currentHashtag:k,searchQuery:b,searchOpen:u}=g1.current||{},i=!k&&!b&&!u;if(z6){if(i)s1();Q1(),R_(),a1(),d_()}else{if(i)s1();R_(),a1(),d_()}},z6?15000:60000);return()=>clearInterval(U)},[X,z6,R_,d_,a1,Q1,s1]),g(()=>{return gj(()=>{R_(),a1(),Q1(),d_()})},[R_,d_,a1,Q1]);let NZ=P(()=>{u_((W)=>!W)},[]),c3=P((W)=>{if(typeof window>"u")return;let U=String(W||"").trim();if(!U||U===j)return;let k=L4(window.location.href,U,{chatOnly:Q});$?.(k)},[Q,j,$]),H6=P(()=>{jQ({hasWindow:typeof window<"u",currentBranchRecord:X1,renameBranchInFlight:T.current,renameBranchLockUntil:r.current,getFormLock:M3,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:V0})},[X1]),b5=P(()=>{QQ({setIsRenameBranchFormOpen:V0,setRenameBranchNameDraft:$0})},[]),l3=P(async(W)=>{await ZQ({hasWindow:typeof window<"u",currentBranchRecord:X1,nextName:W,openRenameForm:H6,renameBranchInFlightRef:T,renameBranchLockUntilRef:r,getFormLock:M3,setIsRenamingBranch:f,renameChatBranch:LK,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,closeRenameForm:b5})},[b5,X1,n1,t1,H6,f,c]),d3=P(async(W=null)=>{await YQ({hasWindow:typeof window<"u",targetChatJid:W,currentChatJid:j,currentBranchRecord:X1,currentChatBranches:q0,activeChatAgents:N0,pruneChatBranch:FK,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[N0,Q,X1,q0,j,$,n1,t1,c]),VZ=P(async(W)=>{await qQ({targetChatJid:W,restoreChatBranch:zK,currentChatBranches:q0,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,q0,$,n1,t1,c]);g(()=>{if(!G||typeof window>"u")return;let W=!1;return GQ({branchLoaderSourceChatJid:K,forkChatBranch:p5,setBranchLoaderState:__,navigate:$,baseHref:window.location.href,isCancelled:()=>W}),()=>{W=!0}},[G,K,$]);let BZ=P((W)=>{if(!W||typeof W!=="object")return;let U=O_(W);if(U)q1.current.delete(U);u0(CQ(W,new Date().toISOString()))},[]),g5=P(()=>{u0((W)=>{let U=PQ(W);if(U.dismissedSessionKey)q1.current.add(U.dismissedSessionKey);return U.nextWidget})},[]),WZ=P((W,U)=>{let k=typeof W?.kind==="string"?W.kind:"",b=O_(U);if(!k||!b)return;if(k==="widget.close"){g5();return}if(k==="widget.submit"){let u=W7(W?.payload),i=U7(W?.payload),K0=new Date().toISOString();if(u0((W0)=>yQ(W0,b,{kind:k,payload:W?.payload||null,submittedAt:K0,submissionText:u})),!u){if(c("Widget submission received","The widget submitted data without a message payload yet.","info",3500),i)g5();return}(async()=>{try{let W0=await r4("default",u,null,[],w5?"queue":null,j);if(v5(W0),u0((P0)=>P3(P0,b,{submittedAt:K0,submissionText:u,queued:W0?.queued||null})),c(W0?.queued==="followup"?"Widget submission queued":"Widget submission sent",W0?.queued==="followup"?"The widget message was queued because the agent is busy.":"The widget message was sent to the chat.","info",3500),i)g5()}catch(W0){u0((P0)=>P3(P0,b,{submittedAt:K0,submissionText:u,errorMessage:W0?.message||"Could not send the widget message."})),c("Widget submission failed",W0?.message||"Could not send the widget message.","warning",5000)}})();return}if(k==="widget.ready"||k==="widget.request_refresh"){let u=new Date().toISOString(),i=Boolean(W?.payload?.buildDashboard||W?.payload?.dashboardKind==="internal-state"),K0=Number(U?.runtimeState?.refreshCount||0)+1;if(u0((W0)=>RQ(W0,b,{kind:k,payload:W?.payload||null,eventAt:u,nextRefreshCount:K0,shouldBuildDashboard:i})),k==="widget.request_refresh")if(i)(async()=>{try{let W0=await h3(W?.payload||null);u0((P0)=>wQ(P0,b,{dashboard:W0,at:new Date().toISOString(),count:K0,echo:W?.payload||null})),c("Dashboard built","Live dashboard state pushed into the widget.","info",3000)}catch(W0){u0((P0)=>fQ(P0,b,{errorMessage:W0?.message||"Could not build dashboard.",at:new Date().toISOString(),count:K0})),c("Dashboard build failed",W0?.message||"Could not build dashboard.","warning",5000)}})();else c("Widget refresh requested","The widget received a host acknowledgement update.","info",3000)}},[h3,j,g5,v5,w5,c]);g(()=>{q1.current.clear(),u0(null)},[j]);let UZ=P(async()=>{await XQ({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:p5,refreshActiveChatAgents:n1,refreshCurrentChatBranches:t1,showIntentToast:c,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,n1,t1,c]),L8=P(async(W,U)=>{await KQ({hasWindow:typeof window<"u",isWebAppMode:V,path:W,label:U,showIntentToast:c,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:async(k)=>{let u=(typeof c0==="string"?c0.trim():"")===k?R1.current:k===t4?E_.current:null;if(typeof u?.preparePopoutTransfer==="function")return await u.preparePopoutTransfer();return null},closeSourcePaneIfTransferred:(k)=>{let b=s0.get(k);if(b&&!b.dirty){o_(k);return}if(k===t4&&c1)P1(!1)}})},[j,c1,o_,V,c,c0]);g(()=>mj({openTab:(W,U)=>$_(W,U?{label:U}:void 0),popOutPane:(W,U)=>{L8(W,U)}}),[L8,$_]);let LZ=P(async()=>{await NQ({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:p1,forkChatBranch:p5,getActiveChatAgents:v6,getChatBranches:K6,setActiveChatAgents:L0,setCurrentChatBranches:y0,showIntentToast:c,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,p1,V,c]);g(()=>{if(!N1)return;if(typeof window>"u")return;let W=_4.current;if(!W)return;if(!G4.current){let U=H5("editorWidth",null),k=l4.current||280;G4.current=Number.isFinite(U)?U:k}if(W.style.setProperty("--editor-width",`${G4.current}px`),!E4.current){let U=H5("dockHeight",null);E4.current=Number.isFinite(U)?U:200}W.style.setProperty("--dock-height",`${E4.current}px`)},[N1]),g(()=>{if(!j_||Q)return;return hj(b1)},[b1,j_,Q]),g(()=>{if(Q)return;return pj({toggleZenMode:h4,exitZenMode:C_,zenMode:z1,isZenModeActive:()=>z1})},[h4,C_,z1,Q]);let i3=Boolean(n0&&n0===(S?.turn_id||D0));if(G)return L`
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
            <div class=${`app-shell pane-popout${N1?" editor-open":""}`} ref=${_4}>
                <div class="editor-pane-container pane-popout-container">
                    ${N1&&!T_&&L`
                        <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
                            ${Q_?L`
                                    <details class="pane-popout-controls-menu">
                                        <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                                            <span class="pane-popout-controls-title">${t_}</span>
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
                                                                class=${`pane-popout-controls-item${W.id===c0?" active":""}`}
                                                                onClick=${(U)=>{b4(W.id),U.currentTarget.closest("details")?.removeAttribute("open")}}
                                                            >
                                                                ${W.label}
                                                            </button>
                                                        `)}
                                                    </div>
                                                </div>
                                            `}
                                            ${c0&&C1.has(c0)&&L`
                                                <button type="button" class="pane-popout-controls-action" onClick=${(W)=>{g_(c0),W.currentTarget.closest("details")?.removeAttribute("open")}}>
                                                    Hide preview
                                                </button>
                                            `}
                                        </div>
                                    </details>
                                `:L`
                                    <div class="pane-popout-controls-label" aria-label=${t_}>${t_}</div>
                                `}
                        </div>
                    `}
                    ${N1?L`<div class="editor-pane-host" ref=${V1}></div>`:L`<div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
                            <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
                            <p style=${{margin:0,lineHeight:1.6}}>${Y||"No pane path provided."}</p>
                        </div>`}
                    ${N1&&c0&&C1.has(c0)&&L`
                        <${F3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>g_(c0)}
                        />
                    `}
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${K1?"":" workspace-collapsed"}${N1?" editor-open":""}${Q?" chat-only":""}${z1?" zen-mode":""}`} ref=${_4}>
            ${Z0&&L`
                <div class="rename-branch-overlay" onPointerDown=${(W)=>{if(W.target===W.currentTarget)b5()}}>
                    <form
                        class="rename-branch-panel"
                        onSubmit=${(W)=>{W.preventDefault(),l3(B0)}}
                    >
                        <div class="rename-branch-title">Rename branch handle</div>
                        <input
                            ref=${w1}
                            value=${B0}
                            onInput=${(W)=>{let U=W.currentTarget?.value??"";$0(String(U))}}
                            onKeyDown=${(W)=>{if(W.key==="Escape")W.preventDefault(),b5()}}
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
                                onClick=${b5}
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
                    visible=${K1}
                    active=${K1||N1}
                    onOpenEditor=${$_}
                    onOpenTerminalTab=${F1}
                    onOpenVncTab=${M_}
                    onToggleTerminal=${j_?b1:void 0}
                    terminalVisible=${Boolean(j_&&c1)}
                />
                <button
                    class=${`workspace-toggle-tab${K1?" open":" closed"}`}
                    onClick=${NZ}
                    title=${K1?"Hide workspace":"Show workspace"}
                    aria-label=${K1?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${iQ} onTouchStart=${nQ}></div>
            `}
            ${q4&&L`
                <div class="editor-pane-container">
                    ${z1&&L`<div class="zen-hover-zone"></div>`}
                    ${N1&&L`
                        <${Lj}
                            tabs=${X_}
                            activeId=${c0}
                            onActivate=${b4}
                            onClose=${o_}
                            onCloseOthers=${s_}
                            onCloseAll=${$5}
                            onTogglePin=${a_}
                            onTogglePreview=${g_}
                            onEditSource=${P5}
                            previewTabs=${C1}
                            paneOverrides=${A_}
                            onToggleDock=${j_?b1:void 0}
                            dockVisible=${j_&&c1}
                            onToggleZen=${h4}
                            zenMode=${z1}
                            onPopOutTab=${V?void 0:L8}
                        />
                    `}
                    ${N1&&L`<div class="editor-pane-host" ref=${V1}></div>`}
                    ${N1&&c0&&C1.has(c0)&&L`
                        <${F3}
                            getContent=${()=>R1.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>g_(c0)}
                        />
                    `}
                    ${j_&&c1&&L`<div class="dock-splitter" onMouseDown=${sQ} onTouchStart=${aQ}></div>`}
                    ${j_&&L`<div class=${`dock-panel${c1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <div class="dock-panel-actions">
                                ${!V&&L`
                                    <button class="dock-panel-action" onClick=${()=>L8(t4,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
                        <div class="dock-panel-body" ref=${j5}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${rQ} onTouchStart=${oQ}></div>
            `}
            <div class="container">
                ${M&&Ij()&&L`<div class="search-results-spacer"></div>`}
                ${Q&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${X1?.agent_name?`@${X1.agent_name}`:j}
                            </span>
                            <span class="chat-window-header-subtitle">${X1?.chat_jid||j}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${q0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${j}
                                        onChange=${(W)=>c3(W.currentTarget.value)}
                                    >
                                        ${q0.map((W)=>L`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${f8(W,{currentChatJid:j})}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${X1?.chat_jid&&L`
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
                            ${X1?.chat_jid&&X1.chat_jid!==(X1.root_chat_jid||X1.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${d3}
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
                ${(O||M)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${_Z}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${M} · ${Z4}`}</span>
                    </div>
                `}
                <${u7}
                    posts=${N5}
                    hasMore=${W6?lQ:!1}
                    onLoadMore=${W6?dQ:void 0}
                    timelineRef=${K_}
                    onHashtagClick=${eQ}
                    onMessageRef=${S1}
                    onScrollToMessage=${f1}
                    onFileRef=${I0}
                    onPostClick=${void 0}
                    onDeletePost=${ZZ}
                    onOpenWidget=${BZ}
                    emptyMessage=${O?`No posts with #${O}`:M?`No results for "${M}"`:void 0}
                    agents=${q_}
                    user=${m_}
                    reverse=${W6}
                    removingPostIds=${y1}
                    searchQuery=${M}
                />
                <${B$}
                    status=${V4(S)?null:S}
                    draft=${Q0}
                    plan=${_0}
                    thought=${Y0}
                    pendingRequest=${X0}
                    intent=${x}
                    turnId=${D0}
                    steerQueued=${i3}
                    onPanelToggle=${F_}
                    showExtensionPanels=${!1}
                />
                <${Y7}
                    session=${a}
                    onClose=${L6}
                    onRetry=${GZ}
                    onInject=${XZ}
                />
                <${z7}
                    widget=${E0}
                    onClose=${g5}
                    onWidgetEvent=${WZ}
                />
                <${B$}
                    extensionPanels=${Array.from(M0.values())}
                    pendingPanelActions=${d0}
                    onExtensionPanelAction=${YZ}
                    turnId=${D0}
                    steerQueued=${i3}
                    onPanelToggle=${F_}
                    showCorePanels=${!1}
                />
                <${Q$}
                    items=${J?[]:b0}
                    onInjectQueuedFollowup=${g3}
                    onRemoveQueuedFollowup=${m3}
                    onOpenFilePill=${I0}
                />
                <${R2}
                    onPost=${()=>{let{searchQuery:W,searchOpen:U}=g1.current||{};if(!W&&!U)l_(),K5()}}
                    onFocus=${K5}
                    searchMode=${J}
                    searchScope=${I}
                    onSearch=${$Z}
                    onSearchScopeChange=${d}
                    onEnterSearch=${jZ}
                    onExitSearch=${QZ}
                    fileRefs=${h}
                    onRemoveFileRef=${F}
                    onClearFileRefs=${v}
                    onSetFileRefs=${n}
                    messageRefs=${t}
                    onRemoveMessageRef=${K4}
                    onClearMessageRefs=${i4}
                    onSetMessageRefs=${Y5}
                    onSwitchChat=${c3}
                    onRenameSession=${l3}
                    isRenameSessionInProgress=${w}
                    onCreateSession=${UZ}
                    onDeleteSession=${d3}
                    onRestoreSession=${VZ}
                    activeEditorPath=${Q?null:c0}
                    onAttachEditorFile=${Q?void 0:H1}
                    onOpenFilePill=${I0}
                    followupQueueCount=${W_}
                    followupQueueItems=${b0}
                    showQueueStack=${!1}
                    onInjectQueuedFollowup=${g3}
                    onRemoveQueuedFollowup=${m3}
                    onSubmitIntercept=${qZ}
                    onMessageResponse=${v5}
                    onSubmitError=${q5}
                    onPopOutChat=${V?void 0:LZ}
                    isAgentActive=${w5}
                    activeChatAgents=${N0}
                    currentChatJid=${j}
                    connectionStatus=${X}
                    activeModel=${e0}
                    modelUsage=${k1}
                    thinkingLevel=${M1}
                    supportsThinking=${h0}
                    contextUsage=${C0}
                    notificationsEnabled=${_5}
                    notificationPermission=${v4}
                    onToggleNotifications=${u1}
                    onModelChange=${h1}
                    onModelStateChange=${U6}
                    statusNotice=${V4(S)?S:null}
                />
                <${A7}
                    request=${X0}
                    onRespond=${()=>{H0(null),m0.current=null}}
                />
            </div>
        </div>
    `}function AK(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},G=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",G);else window.history.pushState(null,"",G);$(window.location.href)},[]),Q=f0(()=>new URL(_).searchParams,[_]);return L`<${DK} locationParams=${Q} navigate=${j} />`}S4(L`<${AK} />`,document.getElementById("app"));

//# debugId=D21BF21D28C0812A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
